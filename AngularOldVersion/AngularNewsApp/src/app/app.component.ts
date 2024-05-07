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

  onCountryChanged(country: string) {
    console.log(this.selectedCountry);
    this.selectedCountry = country;
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
  }
}
