import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTemplateDrivenComponent } from './demo-template-driven.component';

describe('DemoTemplateDrivenComponent', () => {
  let component: DemoTemplateDrivenComponent;
  let fixture: ComponentFixture<DemoTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
