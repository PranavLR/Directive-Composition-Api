import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CanAppearanceDirective } from '../../directives/can-appearance/can-appearance.directive';
import { CanColorDirective } from '../../directives/can-color/can-color.directive';
import { CanDisableDirective } from '../../directives/can-disable/can-disable.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  standalone: true,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: CanColorDirective,
      inputs: ['color']
    },
    {
      directive: CanDisableDirective,
      inputs: ['disabled']
    },
    {
      directive: CanAppearanceDirective,
      inputs: ['appearance']
    }
  ]
})
export class ChipComponent {
  @Input()
  removable = false;

  @Output()
  removed = new EventEmitter<ChipComponent>();

  onRemove() {
    if (this.removable) {
      this.removed.emit(this);
    }
  }
}
