import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface NewsResponse {
  articles: any[];
}

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.scss'],
})
export class NewscardComponent {
  public newsData: any[] = [];

  constructor(private http: HttpClient) {
    this.http
      .get<NewsResponse>(
        'https://newsapi.org/v2/top-headlines?country=tr&apiKey=fb44ce1bd88740d4990d843834598291'
      )
      .subscribe((data: NewsResponse) => {
        this.newsData = data.articles;
        console.log('Haberler alındı:', this.newsData);
      });
  }
}
