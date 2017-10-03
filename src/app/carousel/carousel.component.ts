import { Component} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  carouselPics: any[] = [
    { url: "./public/images/pic1.jpg", caption: "Fun!"},
    { url: "./public/images/pic2.jpg", caption: "Food!"},
    { url: "./public/images/pic3.jpg", caption: "Family!"}
  ];
}
