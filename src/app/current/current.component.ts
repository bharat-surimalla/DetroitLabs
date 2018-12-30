import { Component, OnInit} from '@angular/core';
import { AppWeatherService } from '../app-weather.service';
import { Http} from '@angular/http'

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit { 
  longitude:any;
  latitude :any;
  xx :any;
  yy : any;
  temp : any;
  temp2 : any;
  city : String; 
  imgOk = false;
  url : any;
  msg ="";
  err = false;
  constructor(private appWeather : AppWeatherService,
              private http: Http
  ) { }
  
  ngOnInit() {
  }

 getLocation()
 { 
  this.imgOk = false;
  this.err = false;
  this.xx=  this.appWeather.searchWeatherInfo(this.city);
  this.xx.subscribe((response)=>{  
  this.url = 'http://openweathermap.org/img/w/'+ response.json().weather[0].icon +'.png';
  this.imgOk = true;
  this.temp2 =  response.json().main.temp + '°f';
  },
  (error)=>{this.msg ="City Not Found";
  this.err = true})
 }

 getCurrent()
 {
  this.city = "";
  this.imgOk = false;
  this.err = false;
  window.navigator.geolocation.getCurrentPosition((position:any)=>{
  this.longitude = position.coords.longitude;
  this.latitude  =  position.coords.latitude;
  this.yy = this.appWeather.getInfoByCords(this.latitude,this.longitude);
  this.yy.subscribe((response)=>{
      this.temp2 = response.json().main.temp + '°f';
      this.url = 'http://openweathermap.org/img/w/'+ response.json().weather[0].icon +'.png';
      this.imgOk = true;
    });
  });
 }
}
