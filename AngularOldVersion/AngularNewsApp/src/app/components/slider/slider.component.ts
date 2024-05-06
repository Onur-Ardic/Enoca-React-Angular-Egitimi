import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  receivedNewsData: any[] = [];

  newsDataSlider(newsSliderData: any[]) {
    this.receivedNewsData = newsSliderData;
    console.log(newsSliderData);
  }
}
