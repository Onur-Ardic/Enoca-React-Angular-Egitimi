import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchQuery: string | null = '';
  searchResults: any[] = [];
  private apiUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = 'db47e7b14bef3cdd12f9aa38d686e5c5';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['query'];
      if (this.searchQuery) {
        this.performSearch(this.searchQuery);
      }
    });
  }

  performSearch(query: string): void {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&query=${query}`;
    this.http.get<any>(url).subscribe((response) => {
      this.searchResults = response.results;
    });
  }
}
