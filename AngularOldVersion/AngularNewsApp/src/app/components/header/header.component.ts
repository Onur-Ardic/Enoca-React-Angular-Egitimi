import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  selectedCountry: any = 'tr';
  selectedCategory: any = '';

  @Output() countryChanged = new EventEmitter<any>();
  @Output() categoryChanged = new EventEmitter<string>();

  onCountryChange() {
    this.countryChanged.emit(this.selectedCountry);
  }

  getNewsByCategory(category: string = 'sports') {
    this.categoryChanged.emit(category);
    console.log(this.categoryChanged.emit(category));
  }
}
