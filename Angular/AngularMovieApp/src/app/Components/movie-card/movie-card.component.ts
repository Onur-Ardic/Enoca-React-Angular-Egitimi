import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  movieData: Movie[] = [];

  customOptions: any = {
    loop: true,
    margin: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  constructor(private router: Router) {}

  goToDetailPage(movieId: number) {
    this.router.navigate(['/movie-detail', movieId]);
  }

  ngOnInit(): void {
    this.fetchData('now_playing');
  }

  fetchData(category: string) {
    let apiUrl = '';
    if (category === 'now_playing') {
      apiUrl =
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=db47e7b14bef3cdd12f9aa38d686e5c5';
    }
    if (category === 'upcoming') {
      apiUrl =
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=db47e7b14bef3cdd12f9aa38d686e5c5';
    } else if (category === 'top_rated') {
      apiUrl =
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=db47e7b14bef3cdd12f9aa38d686e5c5';
    } else if (category === 'popular') {
      apiUrl =
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=db47e7b14bef3cdd12f9aa38d686e5c5';
    }

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.movieData = data.results.map((movie: Movie) => ({
          ...movie,
          id: movie.id,
        }));

        console.log(this.movieData);
      });
  }
}
