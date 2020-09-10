import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-city-dialog',
  templateUrl: './add-city-dialog.component.html',
  styleUrls: ['./add-city-dialog.component.scss'],
})
export class AddCityDialogComponent implements OnInit {
  city = '';

  constructor(public dialogRef: MatDialogRef<AddCityDialogComponent>) {
  }

  ngOnInit(): void {
  }

}
