import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimesListComponent } from './chimes-list.component';

describe('ChimesListComponent', () => {
  let component: ChimesListComponent;
  let fixture: ComponentFixture<ChimesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChimesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChimesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
