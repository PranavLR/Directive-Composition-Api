import { Component } from '@angular/core';
import { CanAppearanceDirective } from '../../directives/can-appearance/can-appearance.directive';
import { CanColorDirective } from '../../directives/can-color/can-color.directive';
import { CanDisableDirective } from '../../directives/can-disable/can-disable.directive';

@Component({
  selector: 'button[dfButton], a[dfButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
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
      inputs: ['appearance: type']
    }
  ]
})
export class ButtonComponent {

}
