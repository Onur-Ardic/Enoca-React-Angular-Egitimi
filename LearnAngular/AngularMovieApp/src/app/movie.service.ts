import { Injectable } from '@angular/core';
import { Movie } from './movie/movie';
import { movies } from './movie/movieDataSource';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private loggingService: LoggingService) {}

  getMovies(): Observable<Movie[]> {
    this.loggingService.add('MovieService: Filmleri listeliyor');
    return of(movies);
  }

  getMovie(id: string): Observable<Movie | undefined> {
    this.loggingService.add('MovieService: Detayları getiriyor, id=' + id);
    const movie = movies.find((movie) => movie.id === id);
    return of(movie);
  }
}
