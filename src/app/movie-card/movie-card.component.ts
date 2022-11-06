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

}
