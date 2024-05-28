import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = 'db47e7b14bef3cdd12f9aa38d686e5c5';
  private baseUrl = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient) {}

  fetchMovies(category: string): Observable<Movie[]> {
    let apiUrl = '';
    if (category === 'now_playing') {
      apiUrl = `${this.baseUrl}/now_playing?language=en-US&page=1&api_key=${this.apiKey}`;
    } else if (category === 'upcoming') {
      apiUrl = `${this.baseUrl}/upcoming?language=en-US&page=1&api_key=${this.apiKey}`;
    } else if (category === 'top_rated') {
      apiUrl = `${this.baseUrl}/top_rated?language=en-US&page=1&api_key=${this.apiKey}`;
    } else if (category === 'popular') {
      apiUrl = `${this.baseUrl}/popular?language=en-US&page=1&api_key=${this.apiKey}`;
    }

    return this.http
      .get<{ results: Movie[] }>(apiUrl)
      .pipe(map((response) => response.results));
  }
}
