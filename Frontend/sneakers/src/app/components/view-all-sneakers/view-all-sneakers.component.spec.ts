import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSneakersComponent } from './view-all-sneakers.component';

describe('ViewAllSneakersComponent', () => {
  let component: ViewAllSneakersComponent;
  let fixture: ComponentFixture<ViewAllSneakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllSneakersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
