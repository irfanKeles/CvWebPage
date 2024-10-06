import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToComponent } from './call-to.component';

describe('CallToComponent', () => {
  let component: CallToComponent;
  let fixture: ComponentFixture<CallToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
