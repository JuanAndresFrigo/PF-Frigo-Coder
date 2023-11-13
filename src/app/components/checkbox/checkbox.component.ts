import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() public checkboxContent: string = '';
  @Input() public checkboxColor: ThemePalette = 'primary';
  @Input() public checkboxDisabled: boolean = false;
}
