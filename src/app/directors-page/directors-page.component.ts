import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director',
  templateUrl: './directors-page.component.html',
  styleUrls: ['./directors-page.component.css']
})
export class DirectorComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      bio: string;
      portrait: string;
    }
  ) {}

  ngOnInit(): void {}
}