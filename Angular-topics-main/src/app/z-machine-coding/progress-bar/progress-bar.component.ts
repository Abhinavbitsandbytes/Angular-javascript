import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {

  progress = 0;

  increaseProgress() {
    if (this.progress < 100) {
      this.progress += 10; // Increase by 10%
    }
  }

  resetProgress() {
    this.progress = 0;
  }

}
