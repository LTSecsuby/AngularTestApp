import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddNewNoteBarComponent } from './app-add-new-note-bar.component';

describe('AppAddNewNoteBarComponent', () => {
  let component: AppAddNewNoteBarComponent;
  let fixture: ComponentFixture<AppAddNewNoteBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAddNewNoteBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAddNewNoteBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
