import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OhayogozaimasuComponent } from './ohayogozaimasu.component';

describe('OhayogozaimasuComponent', () => {
  let component: OhayogozaimasuComponent;
  let fixture: ComponentFixture<OhayogozaimasuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OhayogozaimasuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OhayogozaimasuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
