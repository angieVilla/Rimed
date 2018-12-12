import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEspecialistasComponent } from './dialog-especialistas.component';

describe('DialogEspecialistasComponent', () => {
  let component: DialogEspecialistasComponent;
  let fixture: ComponentFixture<DialogEspecialistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEspecialistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
