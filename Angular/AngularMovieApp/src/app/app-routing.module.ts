import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './Components/movie-detail/movie-detail.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'Home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
