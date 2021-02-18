import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2TimeagoFrPipeComponent } from './ng2-timeago-fr-pipe.component';

describe('Ng2TimeagoFrPipeComponent', () => {
  let component: Ng2TimeagoFrPipeComponent;
  let fixture: ComponentFixture<Ng2TimeagoFrPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2TimeagoFrPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2TimeagoFrPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
