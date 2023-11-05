import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  templateUrl: './generic-card.component.html',
  styleUrls: ['./generic-card.component.scss'],
})
export class GenericCardComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  @Input() public headerTitle: string = '';
  @Input() public headerSubtitle: string = '';
  @Input() public showActionsButtons: boolean = false;

  @Output() public onCardCancelClick = new EventEmitter<void>();
  @Output() public onCardAceptClick = new EventEmitter<void>();
}
