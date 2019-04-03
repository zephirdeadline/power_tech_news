import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrssPage } from './addrss.page';

describe('AddrssPage', () => {
  let component: AddrssPage;
  let fixture: ComponentFixture<AddrssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrssPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
