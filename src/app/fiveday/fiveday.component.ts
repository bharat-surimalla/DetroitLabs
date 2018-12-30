import { Component, OnInit } from '@angular/core';
import { AppWeatherService} from '../app-weather.service';
import { empty } from '../../../node_modules/rxjs';
import { DatePipe} from '@angular/common'


@Component({
  selector: 'app-fiveday',
  templateUrl: './fiveday.component.html',
  styleUrls: ['./fiveday.component.css']
})
export class FivedayComponent implements OnInit {

  city : any; 
  url = [];
  url2 = [];
  getByCity = false;
  getByLocation = false;
  imgOk = false;
  res : any;
  res2 :any;
  msg = "";
  err = false;
  constructor( private appWeather : AppWeatherService) { }

  ngOnInit() {
    
  }

  getLocation(){
    this.getByLocation = false;
    this.getByCity = false;
    this.imgOk = false;
    var xx=  this.appWeather.getForecastInfo(this.city);
    xx.subscribe((response)=>{  
      this.res = response.json().list;  
      this.imgOk = true;
      this.getByCity= true;     
    },
    (error)=>{this.msg ="City Not Found";
              this.err = true;
            }
    ); 
  }

  getCurrent(){
    this.city = "";
    this.getByCity = false;
    this.getByLocation = false;
    this.imgOk = false;
    window.navigator.geolocation.getCurrentPosition((position:any)=>{
      var longitude = position.coords.longitude;
      var latitude  =  position.coords.latitude;
      var yy = this.appWeather.getForecastInfoByCords(latitude,longitude);
      yy.subscribe((response)=>{
        this.res2 = response.json().list; 
        this.imgOk = true; 
        this.getByLocation = true;
      }); 
    });

  }
}
