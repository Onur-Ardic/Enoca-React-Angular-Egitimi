import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  search(event: Event): void {
    event.preventDefault();
    const searchInputValue = (event.target as HTMLFormElement)?.querySelector(
      'input'
    )?.value;

    if (searchInputValue) {
      this.router.navigate(['/search'], {
        queryParams: { query: searchInputValue },
      });
    } else {
      console.log('Arama terimi boş');
    }
  }
}
