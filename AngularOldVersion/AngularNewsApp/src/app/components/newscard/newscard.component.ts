import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

interface NewsResponse {
  articles: any[];
}

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.scss'],
})
export class NewscardComponent implements OnInit {
  @Input() country: string = 'tr';
  @Input() category: string = '';
  @Output() newsDataSlider = new EventEmitter<any>();

  public newsData: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchNewsData();
  }

  fetchNewsData() {
    this.http
      .get<NewsResponse>(
        `https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=fb44ce1bd88740d4990d843834598291`
      )

      .subscribe((data: NewsResponse) => {
        this.newsData = data.articles;
        this.newsDataSlider.emit(this.newsData);
      });
  }

  ngOnChanges() {
    this.fetchNewsData();
  }
}
