import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { WeatherService } from './weather.service';
import { UIService } from './ui.service'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    AddComponent,
    DetailsComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeatherService,
    UIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
