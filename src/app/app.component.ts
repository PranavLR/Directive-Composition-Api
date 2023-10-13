import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonComponent } from './components/button/button.component';
import { ChipComponent } from './components/chip/chip.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [BannerComponent, ButtonComponent, ChipComponent]
})
export class AppComponent {
  title = 'Directive-Composition-Api';
}
