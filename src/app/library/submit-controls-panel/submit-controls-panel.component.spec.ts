import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitControlsPanelComponent } from './submit-controls-panel.component';

describe('SubmitControlsPanelComponent', () => {
  let component: SubmitControlsPanelComponent;
  let fixture: ComponentFixture<SubmitControlsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitControlsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitControlsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
