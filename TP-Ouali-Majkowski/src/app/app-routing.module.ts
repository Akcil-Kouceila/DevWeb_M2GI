import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { AccueilComponent } from './pages/accueil/accueil.component';


const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'home', component: AccueilComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'random', component: MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
