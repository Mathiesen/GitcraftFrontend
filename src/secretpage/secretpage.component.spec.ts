import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretpageComponent } from './secretpage.component';

describe('SecretpageComponent', () => {
  let component: SecretpageComponent;
  let fixture: ComponentFixture<SecretpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
