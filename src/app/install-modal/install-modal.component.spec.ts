import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallModalComponent } from './install-modal.component';

describe('InstallModalComponent', () => {
  let component: InstallModalComponent;
  let fixture: ComponentFixture<InstallModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallModalComponent]
    });
    fixture = TestBed.createComponent(InstallModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
