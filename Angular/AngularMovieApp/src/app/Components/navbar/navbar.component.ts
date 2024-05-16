import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  search(event: Event): void {
    event.preventDefault();
    const searchInputValue = (event.target as HTMLFormElement)?.querySelector(
      'input'
    )?.value;
    console.log('Aranan: ', searchInputValue);
  }
}
