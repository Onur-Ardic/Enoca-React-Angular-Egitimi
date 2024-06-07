import { Component } from '@angular/core';
import { Movie } from '../movie/movie';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  movies: Movie[] = [];
  movieLength!: number;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService
      .getMovies()
      .subscribe((movies) => (this.movies = movies.slice(0, 5)));
    this.movieLength = this.movies.length;
  }
}
