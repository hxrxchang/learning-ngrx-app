import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopContainerComponent } from './top-container.component';

describe('TopContainerComponent', () => {
  let component: TopContainerComponent;
  let fixture: ComponentFixture<TopContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
