import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public showSidenav: boolean = false;

  constructor(private router: Router) {}

  public onToggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }

  public navigateTo(route: string) {
    this.router.navigate(['safe',`${route}`]);
    this.onToggleSidenav()
  }
}
