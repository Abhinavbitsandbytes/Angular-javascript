import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: string[] = [];
  @Input() autoSlide = true; // Enable/disable auto-slide
  @Input() slideInterval = 3000; // Auto-slide interval in ms

  currentIndex = 0;
  private intervalId: any;


  ngOnInit() {
    if (this.autoSlide) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    this.clearAutoSlide();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => this.nextSlide(), this.slideInterval);
  }

  clearAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
