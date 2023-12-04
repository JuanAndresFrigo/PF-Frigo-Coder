import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  public loggedUserRol: string = '';

  @ViewChild('drawer') drawer?: MatSidenav;
  showFiller = false;

  @Input() public set toggleSidenav(showSidenav: boolean) {
    if (this.drawer) showSidenav ? this.drawer.open() : this.drawer.close();
  }
  @Output() public onItemClick = new EventEmitter<string>();

  constructor(private route: Router, private authService: AuthService) {
    this.getModuleRoute;
    authService.authUser$
      .pipe(take(1))
      .subscribe((res: any) => (this.loggedUserRol = res.rol));
  }

  public onNavItemClick(item: string): void {
    this.onItemClick.emit(item);
  }

  public get getModuleRoute(): string {
    // Retorno el mudulo que cargó safe: /safe/users -> users
    const completeUrl: string = this.route.url.replace('/safe/', '');
    return completeUrl.split('/')[0];
  }

  public onLogoutClick() {
    this.authService.logout();
  }
}
