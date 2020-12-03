import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSneakerComponent } from './view-sneaker.component';

describe('ViewSneakerComponent', () => {
  let component: ViewSneakerComponent;
  let fixture: ComponentFixture<ViewSneakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSneakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSneakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
