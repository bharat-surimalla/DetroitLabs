import { TestBed, inject } from '@angular/core/testing';

import { AppWeatherService } from './app-weather.service';

describe('AppWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppWeatherService]
    });
  });

  it('should be created', inject([AppWeatherService], (service: AppWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
