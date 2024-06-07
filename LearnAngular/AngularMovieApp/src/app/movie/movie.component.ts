import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  MovieList: Movie[] = [];
  selectedMovie!: Movie;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(movie);
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.MovieList = movies;
    });
  }
}
