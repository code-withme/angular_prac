import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { UIService } from '../ui.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {
  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  darkMode: boolean;

  constructor(public weather: WeatherService, public router: Router, public ui: UIService) {

   }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });
    this.weather.getWeatherState('Paris').subscribe((data:string)=>
  {
    this.condition = data;
  });
    this.weather.getCurrentTemp('Paris').subscribe((data:number)=>{
      this.currentTemp = data;
    });
    this.weather.getMinTemp('Paris').subscribe((data:number)=>{
      this.minTemp = data;
    });
    this.weather.getMaxTemp('Paris').subscribe((data:number)=>{
      this.maxTemp = data;
    });
  }
  ngOnDestroy(){}

  openDetails(){
    this.router.navigateByUrl('/details/paris');
  }
}
