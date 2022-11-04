import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperFarmComponent } from './newspaper-farm.component';

describe('NewspaperFarmComponent', () => {
  let component: NewspaperFarmComponent;
  let fixture: ComponentFixture<NewspaperFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperFarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
