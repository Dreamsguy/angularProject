import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuListComponent } from './main-menu-list.component';

describe('MainMenuListComponent', () => {
  let component: MainMenuListComponent;
  let fixture: ComponentFixture<MainMenuListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMenuListComponent]
    });
    fixture = TestBed.createComponent(MainMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
