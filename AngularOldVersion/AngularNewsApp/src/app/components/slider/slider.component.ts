import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  receivedSliderData: any[] = [];

  newsDataSlider(newsData: any[]) {
    this.receivedSliderData = newsData;
    console.log(this.receivedSliderData);
  }
}
