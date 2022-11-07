import { DirectorComponent } from './../directors-page/directors-page.component';
import { MovieSummaryComponent } from './../movie-summary/movie-summary.component';
import { GenreComponent } from './../genre/genre.component';
import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { MatDialog } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent {
  movies: any[] = [];
  favoriteMovies: any[] = [];
  users: any[] = [];
  genres: any[] = [];

  constructor(public fetchApiData: FetchApiDataService, public dialog: MatDialog, public snackBar: MatSnackBar,) { }

ngOnInit(): void {
  this.getMovies();
  this.getGenres();
  this.getFavoriteMovies();
}

getGenres(): void {
  this.fetchApiData.getGenres().subscribe((resp: any) => {
    this.genres = resp;
    return this.genres;
  });
}

getFavoriteMovies(): void {
  this.fetchApiData.getUser().subscribe((resp: any) => {
    this.users = resp;
    this.favoriteMovies= resp.favorites
    
    console.log(this.favoriteMovies);
    return this.favoriteMovies;
  });
}

getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  openGenreDialog(name:string, description:string ): void {
    this.dialog.open(GenreComponent, {
      data: {
        name: name,
        description: description,

      },
      width: '500px',
    });
  }
     fav(id: string): boolean{
        return this.favoriteMovies.includes(id);
      ;
      }
   
      addToFavs(id: string): void {
        console.log(id);
        this.fetchApiData.addFavoriteMovie(id).subscribe((result) => {
          console.log(result);
          this.ngOnInit();
        })
      }
    
      removeFromFavs(id: string): void {
        console.log(id);
        this.fetchApiData.removeFavoriteMovie(id).subscribe((result) => {
          console.log(result);
          this.ngOnInit();
        })
      }

      openDetailsDialog(title: string, description: string): void {
    this.dialog.open(MovieSummaryComponent, {
      data: {
        title: title,
        description: description,
      },
      width: '500px',
    });
  }
  openDirectorDialog(name: string, bio: string, portrait:string): void {
    this.dialog.open(DirectorComponent, {
      data: {
        name: name,
        bio: bio,
        portrait: portrait,
      },
      width: '500px',
    });
  }

}
