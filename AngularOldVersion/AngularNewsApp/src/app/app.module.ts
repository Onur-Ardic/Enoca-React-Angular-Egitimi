import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { NewscardComponent } from './components/newscard/newscard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    NewscardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule], // HttpClientModule'yi buraya ekleyin
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private http: HttpClient) {
    this.http
      .get(
        'https://newsapi.org/v2/top-headlines?country=tr&apiKey=fb44ce1bd88740d4990d843834598291'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
