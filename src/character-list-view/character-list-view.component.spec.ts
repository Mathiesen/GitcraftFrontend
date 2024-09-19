import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListViewComponent } from './character-list-view.component';

describe('CharacterListViewComponent', () => {
  let component: CharacterListViewComponent;
  let fixture: ComponentFixture<CharacterListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
