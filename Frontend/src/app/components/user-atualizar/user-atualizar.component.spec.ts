import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAtualizarComponent } from './user-atualizar.component';

describe('UserAtualizarComponent', () => {
  let component: UserAtualizarComponent;
  let fixture: ComponentFixture<UserAtualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAtualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAtualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
