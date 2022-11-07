import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsPageComponent } from './directors-page.component';

describe('DirectorsPageComponent', () => {
  let component: DirectorsPageComponent;
  let fixture: ComponentFixture<DirectorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
