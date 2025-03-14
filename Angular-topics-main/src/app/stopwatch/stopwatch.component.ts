import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit, OnDestroy {

  elapsedTime: number = 0; // in milliseconds
  isRunning: boolean = false;
  private intervalId: any;

  ngOnInit(): void {
    
  }

  toggleStartStop(): void {
    if (this.isRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  startTimer(): void {
    this.isRunning = true;
    const startTime = Date.now() - this.elapsedTime; // Keeps track of current time
    this.intervalId = setInterval(() => {
      this.elapsedTime = Date.now() - startTime;
    }, 10);
  }

  stopTimer(): void {
    this.isRunning = false;
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetTimer(): void {
    this.stopTimer();
    this.elapsedTime = 0;
  }

  formatTime(): string {
    const milliseconds = this.elapsedTime % 1000;
    const seconds = Math.floor(this.elapsedTime / 1000) % 60;
    const minutes = Math.floor(this.elapsedTime / 60000);

    return `${this.pad(minutes)}:${this.pad(seconds)}.${this.pad(milliseconds, 3)}`;
  }

  pad(num: number, size: number = 2): string {
    let s = "0" + num;
    return s.slice(-size);
  }

  ngOnDestroy(): void {
    // Clean up the interval when the component is destroyed
    this.stopTimer();
  }

}
