import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeRoutingModule } from './safe-routing.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SafeRoutingModule, MainModule],
})
export class SafeModule {}
