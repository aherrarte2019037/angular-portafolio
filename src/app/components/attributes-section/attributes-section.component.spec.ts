import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesSectionComponent } from './attributes-section.component';

describe('AttributesSectionComponent', () => {
  let component: AttributesSectionComponent;
  let fixture: ComponentFixture<AttributesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttributesSectionComponent]
    });
    fixture = TestBed.createComponent(AttributesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
