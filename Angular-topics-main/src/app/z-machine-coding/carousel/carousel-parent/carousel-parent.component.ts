import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-parent',
  templateUrl: './carousel-parent.component.html',
  styleUrls: ['./carousel-parent.component.css']
})
export class CarouselParentComponent implements OnInit {
  imageList = [
    'https://fastly.picsum.photos/id/505/200/300.jpg?hmac=sM40cBTZhT04SPBOcg3Oj_CJ1XVd3f4FX5u-tCusbDk',
    'https://fastly.picsum.photos/id/186/200/300.jpg?hmac=OcvCqU_4x7ik3BASnw4WmwKaS-Sv167Nmf5CJoTrIUs',
    'https://fastly.picsum.photos/id/698/200/300.jpg?hmac=2Z_fr-yUH1ByQu36MAR319aTCndT4FjG1VBksAKGVKU'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
