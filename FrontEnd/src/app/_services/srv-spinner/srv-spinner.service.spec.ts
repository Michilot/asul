/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SrvSpinnerService } from './srv-spinner.service';

describe('SrvSpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrvSpinnerService]
    });
  });

  it('should ...', inject([SrvSpinnerService], (service: SrvSpinnerService) => {
    expect(service).toBeTruthy();
  }));
});
