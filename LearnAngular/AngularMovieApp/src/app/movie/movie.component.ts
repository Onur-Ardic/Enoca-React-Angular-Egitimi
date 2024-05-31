import { Component } from '@angular/core';
import { movies } from './movieDataSource';
import { Movie } from './movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  MovieList: any = movies;
  selectedMovie!: Movie;

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(movie);
  }
}
