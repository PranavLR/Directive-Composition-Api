import { Component } from '@angular/core';
import { CanAppearanceDirective } from '../../directives/can-appearance/can-appearance.directive';
import { CanColorDirective } from '../../directives/can-color/can-color.directive';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  hostDirectives: [
    {
      directive: CanColorDirective,
      inputs: ['color']
    },
    {
      directive: CanAppearanceDirective,
      inputs: ['appearance']
    }
  ]
})
export class BannerComponent {

}
