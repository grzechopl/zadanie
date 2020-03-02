import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowreposComponent } from './showrepos.component';

describe('ShowreposComponent', () => {
  let component: ShowreposComponent;
  let fixture: ComponentFixture<ShowreposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowreposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowreposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
