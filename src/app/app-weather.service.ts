import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { Http} from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppWeatherService {
  longitude : any;
  latitude  : any;

  constructor(private http : Http) { }

  getCity(){

  }

  getLocation(){

  window.navigator.geolocation.getCurrentPosition((position:any)=>{
    this.longitude = position.coords.latitude;
    this.latitude  =  position.coords.longitude;
     return (this.longitude, this.latitude)
  });

  }

  searchWeatherInfo(city: String): Observable<any> {
    const APPID = '7a211c68435846ab04153a9d815b09f3';
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APPID + '&units=imperial';

    return this.http.get(url)
     
  }

  getInfoByCords(lat: string, long: string) : Observable<any>{
 
    const APPID = '7a211c68435846ab04153a9d815b09f3';
    let url = 'https://api.openweathermap.org/data/2.5/weather?'+'lat='+lat+'&lon='+long+ '&APPID=' + APPID + '&units=imperial';
    return this.http.get(url);
  }

  getForecastInfoByCords(lat: string, long : string) : Observable<any>{

    const APPID = '7a211c68435846ab04153a9d815b09f3';
    let url = 'https://api.openweathermap.org/data/2.5/forecast?'+'lat='+lat+'&lon='+long+ '&APPID=' + APPID + '&units=imperial';
    return this.http.get(url);
    
  }
  getForecastInfo(city : string) : Observable<any>{

    const APPID = '7a211c68435846ab04153a9d815b09f3';
    let url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=' + APPID + '&units=imperial';

    return this.http.get(url)

  }

  getIcon(id : String) : Observable<any>{
    //const APPID = '7a211c68435846ab04153a9d815b09f3';
    let url = 'http://api.openweathermap.org/img/w/'+id+'.png';
    return this.http.get(url)

  }

}


