import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent {
  @Input() public radioButtonList: string[] = [];
  @Input() public radioButtonColor: ThemePalette = 'primary';
  @Input() public radioButtonDisabled: boolean = false;

  @Output() public radioButtonChange = new EventEmitter<string>();

  public onRadioButtonChange(item: string) {
    this.radioButtonChange.emit(item);
  }
}
