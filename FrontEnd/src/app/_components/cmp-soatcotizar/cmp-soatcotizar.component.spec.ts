/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CmpSoatcotizarComponent } from './cmp-soatcotizar.component';

describe('CmpSoatcotizarComponent', () => {
  let component: CmpSoatcotizarComponent;
  let fixture: ComponentFixture<CmpSoatcotizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpSoatcotizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpSoatcotizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
