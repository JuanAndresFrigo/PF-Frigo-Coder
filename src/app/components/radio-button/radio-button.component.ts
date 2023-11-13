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

  // public ngAfterViewInit(): void {
  //   console.log('after');

  //   console.log(
  //     '🚀 ~ file: radio-button.component.ts:26 ~ RadioButtonComponent ~ ngAfterViewInit ~ this.radioButtonList:',
  //     this.radioButtonList
  //   );
  //   if (this.radioButtonList) {
  //     this.onRadioButtonChange(this.radioButtonList[0]);
  //   }
  // }

  // ngAfterViewInit(): void {
  //   console.log(this.radioButtonList);

  //   this.onRadioButtonChange('Alumno')
  // }

  // chosenItem = this.radioButtonList[0];

  // public get defaultItem(): string {
  //   return this.radioButtonList ? this.radioButtonList[0] : '';
  // }

  public onRadioButtonChange(item: string) {
    this.radioButtonChange.emit(item);
  }
}
