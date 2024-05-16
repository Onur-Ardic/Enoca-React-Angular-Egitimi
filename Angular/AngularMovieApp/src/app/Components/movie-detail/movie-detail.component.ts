import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  overview: string;
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movieId!: number;
  movie!: Movie;
  selectedTab: string = 'about'; // Varsayılan olarak 'about' sekmesini seçili yapıyoruz

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.movieId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchMovieDetails(this.movieId);
  }

  fetchMovieDetails(id: number): void {
    const apiKey = 'db47e7b14bef3cdd12f9aa38d686e5c5';
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

    this.http.get<Movie>(apiUrl).subscribe(
      (data) => {
        this.movie = data;
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    );
  }

  selectTab(tab: string): void {
    this.selectedTab = tab; // Hangi sekmenin seçili olduğunu güncelliyoruz
  }
}
