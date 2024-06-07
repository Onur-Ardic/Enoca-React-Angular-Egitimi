import { Component, Input } from '@angular/core';
import { Movie } from '../movie/movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent {
  @Input() movie!: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  getMovie(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovie(id).subscribe((movie) => {
      if (movie) {
        this.movie = movie;
      } else {
        console.error(`Film ID ${id} bulunamadı.`);
        // Hata durumu için uygun bir işlem yapılabilir, örneğin:
        // this.movie = { id: 0, title: 'Bilinmeyen', director: 'Bilinmeyen' };
      }
    });
  }
}
