import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @ViewChild('drawer') drawer!: MatSidenav;
  showFiller = false;

  @Input() public set toggleSidenav(showSidenav: boolean) {
    showSidenav ? this.drawer.open() : this.drawer.close();
  }
}
