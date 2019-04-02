import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssPage } from './rss.page';

describe('RssPage', () => {
  let component: RssPage;
  let fixture: ComponentFixture<RssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
