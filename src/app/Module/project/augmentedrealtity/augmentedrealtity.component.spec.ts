import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AugmentedrealtityComponent } from './augmentedrealtity.component';

describe('AugmentedrealtityComponent', () => {
  let component: AugmentedrealtityComponent;
  let fixture: ComponentFixture<AugmentedrealtityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AugmentedrealtityComponent]
    });
    fixture = TestBed.createComponent(AugmentedrealtityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
