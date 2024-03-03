import { Component } from '@angular/core';
import { ApexchartsComponent } from './Components/apexcharts/apexcharts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-check';
  active = 1;
}
