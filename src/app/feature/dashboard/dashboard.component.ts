import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddCityDialogComponent } from '@feature/dashboard/components/add-city-dialog/add-city-dialog.component';
import { Store } from '@ngxs/store';
import { append } from '@ngxs/store/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  tabs;
  selected = new FormControl(0);
  userName: string;

  constructor(public dialog: MatDialog, private store: Store) {
  }

  ngOnInit(): void {
    this.userName = this.store.selectSnapshot<string>((state) => state.auth.userName);
    const data = JSON.parse(localStorage.getItem(this.userName));
    data.cities ? this.tabs = data.cities : this.tabs = [];
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddCityDialogComponent, {
      width: '500px',
      height: '250px',
    });
    dialogRef.afterClosed().subscribe(city => {
      this.addTab(city);
    });

  }

  private addTab(city: string): void {
    const user = JSON.parse(localStorage.getItem(this.userName));
    let cities;
    if (!user.cities) {
      cities = [city];
    } else {
      cities = [...user.cities, city];
    }

    const data = {
      password: user.password,
      cities,
    };
    localStorage.setItem(this.userName, JSON.stringify(data));
    this.tabs.push(city);
    this.selected.setValue(this.tabs.length - 1);
  }

  removeTab(index: number): void {
    const user = JSON.parse(localStorage.getItem(this.userName));
    const cities = user.cities;
    cities.splice(index, 1);
    const data = {
      password: user.password,
      cities,
    };
    localStorage.setItem(this.userName, JSON.stringify(data));

    this.tabs.splice(index, 1);
  }
}
