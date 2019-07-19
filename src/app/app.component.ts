import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'owl-carousel';


mySlideImages = ['../../assets/img/fg1.jpg','../../assets/img/fg2.jpg','../../assets/img/fg3.jpg'];
myCarouselImages =['../../assets/img/f4.jpg','../../assets/img/fg5.jpg'];
 
mySlideOptions={items: 1, dots: true, nav: true};
myCarouselOptions={items: 3, dots: true, nav: true};
}

