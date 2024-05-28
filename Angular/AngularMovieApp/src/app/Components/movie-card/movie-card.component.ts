import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MovieService } from '../../movie.service';
import { Width } from 'ngx-owl-carousel-o/lib/services/carousel.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movieData: Movie[] = [];

  customOptions: any = {
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: false,
    autoWidth: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      200: {
        items: 2,
      },
      600: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  };

  constructor(private router: Router, private movieService: MovieService) {}

  goToDetailPage(movieId: number) {
    this.router.navigate(['/movie-detail', movieId]);
  }

  ngOnInit(): void {
    this.fetchData('now_playing');
  }

  fetchData(category: string) {
    this.movieService.fetchMovies(category).subscribe(
      (movies) => {
        this.movieData = movies;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }
}
