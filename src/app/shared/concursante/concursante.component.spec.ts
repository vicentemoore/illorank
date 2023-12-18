import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursanteComponent } from './concursante.component';

describe('ConcursanteComponent', () => {
  let component: ConcursanteComponent;
  let fixture: ComponentFixture<ConcursanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcursanteComponent]
    });
    fixture = TestBed.createComponent(ConcursanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
