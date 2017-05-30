/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CmpFsComponent } from './cmp-fs.component';

describe('CmpFsComponent', () => {
  let component: CmpFsComponent;
  let fixture: ComponentFixture<CmpFsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpFsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpFsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
