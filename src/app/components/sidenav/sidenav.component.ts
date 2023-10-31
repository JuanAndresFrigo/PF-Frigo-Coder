import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @ViewChild('drawer') drawer?: MatSidenav;
  showFiller = false;

  @Input() public set toggleSidenav(showSidenav: boolean) {
    if (this.drawer) showSidenav ? this.drawer.open() : this.drawer.close();
  }
  @Output() public onItemClick = new EventEmitter<string>();

  // public getCurrentRoute:string = ''

  constructor(private route: Router) {
    this.getModuleRoute;
  }

  public onNavItemClick(item: string): void {
    this.onItemClick.emit(item);
  }

  public get getModuleRoute():string {
    // Retorno el mudulo que cargó safe: /safe/users -> users
    const completeUrl: string = this.route.url.replace('/safe/', '');
    return completeUrl.split('/')[0];
  }
}
