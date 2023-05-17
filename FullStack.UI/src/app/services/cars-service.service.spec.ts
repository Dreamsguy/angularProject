import { TestBed } from '@angular/core/testing';
import { DataService } from './cars-service.service';

describe('CarsServiceService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
