import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './Components/movie-detail/movie-detail.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/search.component';

const routes: Routes = [
  { path: 'movie-detail/:id', component: MovieDetailComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
