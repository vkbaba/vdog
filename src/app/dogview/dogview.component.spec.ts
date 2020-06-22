import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogviewComponent } from './dogview.component';

describe('DogviewComponent', () => {
  let component: DogviewComponent;
  let fixture: ComponentFixture<DogviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
