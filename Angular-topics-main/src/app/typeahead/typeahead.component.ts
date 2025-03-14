import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css'],
})
export class TypeaheadComponent implements OnInit {
  searchControl = new FormControl();
  suggestions: string[] = [];
  allItems: string[] = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Mango',
    'Pineapple',
    'Strawberry',
    'Watermelon',
  ];
  
  // Flag to determine which init method to use
  useComplexInit: boolean = false;

  ngOnInit() {
    this.initialize(); // Call the initialization method
  }

  // Method to initialize based on the flag
  initialize() {
    if (this.useComplexInit) {
      this.initComplex();
    } else {
      this.initSimple();
    }
  }

  // Simple initialization
  initSimple() {
    this.searchControl.valueChanges.subscribe((value) => {
      this.suggestions = this.filterItems(value); // Update suggestions here
    });
  }

  // Complex initialization with RxJS operators
  initComplex() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        map((value) => this.filterItems(value))
      )
      .subscribe((filteredSuggestions) => {
        this.suggestions = filteredSuggestions;
      });
  }

  // Method to filter items based on input query
  private filterItems(query: string): string[] {
    if (!query) {
      return []; // Return empty array if query is empty
    }
    return this.allItems.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Method to select an item from suggestions
  selectItem(item: string) {
    this.searchControl.setValue(item);
    this.suggestions = []; // Clear suggestions after selection
  }

  // Method to toggle initialization
  toggleInitMethod() {
    this.useComplexInit = !this.useComplexInit; // Toggle the flag
    this.initialize(); // Re-initialize with the new method
  }
}





// distinctUntilChanged()
// Purpose: This operator ensures that the observable only emits a new value if it is different
// from the last emitted value. In other words, it filters out consecutive duplicate values.

// Usage: In the typeahead example, it prevents redundant operations if the user types the 
// same value repeatedly. If the user types "apple" and then backspaces to "apple" again,
// it won't trigger the filtering logic again since the value has not changed.