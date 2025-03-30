import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {

  maxStars = 5;
   rating = 0;

  hoveredStar = 0;

  setRating(star: number) {
    this.rating = star;
  }

  setHoveredStar(star: number) {
    console.log(star);
    this.hoveredStar = star;
  }

  clearHoveredStar() {
    this.hoveredStar = 0;
  }

}
