import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedCountry: string = 'tr';
  selectedCategory: string = '';

  receivedSliderData: any[] = [];

  receiveSlider(sliderData: any[]) {
    this.receivedSliderData = sliderData;
  }

  onCountryChanged(country: string) {
    this.selectedCountry = country;
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
  }
}
