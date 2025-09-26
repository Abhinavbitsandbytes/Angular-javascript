import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Todo {
  id: number;
  title: string;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  todoForm: FormGroup;
  todos: Todo[] = [];
  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      id: [null],
      title: ['', [Validators.required]],
    });
  }

  onSubmitForm() {
    const { id, title } = this.todoForm.value;
    if (this.todoForm.invalid) return;
    if (id === null) {
      // Add new
      this.todos.push({ id: Date.now(), title });
    } else {
      // Update existing
      const index = this.todos.findIndex(t => t.id === id);
      if (index > -1) this.todos[index].title = title;
    }
    this.todoForm.reset({ id: null, title: '' });
  }

  editTodo(todo: Todo) {
    this.todoForm.setValue({ id: todo.id, title: todo.title });
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    if (this.todoForm.value.id === id) {
      this.todoForm.reset({ id: null, title: '' });
    }
  }
}
