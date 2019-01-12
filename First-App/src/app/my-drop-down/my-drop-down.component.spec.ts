import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDropDownComponent } from './my-drop-down.component';

describe('MyDropDownComponent', () => {
  let component: MyDropDownComponent;
  let fixture: ComponentFixture<MyDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
