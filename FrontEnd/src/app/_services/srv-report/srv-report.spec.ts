/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SrvReportService } from './srv-report';

describe('SrvReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrvReportService]
    });
  });

  it('should ...', inject([SrvReportService], (service: SrvReportService) => {
    expect(service).toBeTruthy();
  }));
});
