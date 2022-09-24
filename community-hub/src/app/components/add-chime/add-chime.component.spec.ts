import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChimeComponent } from './add-chime.component';

describe('AddChimeComponent', () => {
  let component: AddChimeComponent;
  let fixture: ComponentFixture<AddChimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
