/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParamzService } from './paramz.service';

describe('Service: Paramz', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamzService]
    });
  });

  it('should ...', inject([ParamzService], (service: ParamzService) => {
    expect(service).toBeTruthy();
  }));
});
