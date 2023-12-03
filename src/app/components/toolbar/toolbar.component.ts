import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {

  public loggedUser$: Observable<User | null> = this.authService.authUser$

  @Output() public toggleSidenav = new EventEmitter();

  constructor(private authService: AuthService){}
}
