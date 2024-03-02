import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { ApexchartsComponent } from './Components/apexcharts/apexcharts.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [AppComponent, ReactiveFormComponent, ApexchartsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, NgbModule, NgApexchartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
