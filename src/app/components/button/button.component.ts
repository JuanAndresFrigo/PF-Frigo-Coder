import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public buttonContent: string = '';
  @Input() public buttonIcon: string = '';
  @Input() public buttonColor: ThemePalette = 'primary';
  @Input() public buttonDisabled: boolean = false;
  @Output() public onButtonClick = new EventEmitter<void>();
}
