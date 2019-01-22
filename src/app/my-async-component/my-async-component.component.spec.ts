import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAsyncComponentComponent } from './my-async-component.component';

describe('MyAsyncComponentComponent', () => {
  let component: MyAsyncComponentComponent;
  let fixture: ComponentFixture<MyAsyncComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAsyncComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAsyncComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
