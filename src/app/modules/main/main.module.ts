import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { SidenavModule } from 'src/app/components/sidenav/sidenav.module';
import { UsersModule } from '../components/users/users.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [CommonModule, ToolbarModule, SidenavModule, UsersModule],
})
export class MainModule {}
