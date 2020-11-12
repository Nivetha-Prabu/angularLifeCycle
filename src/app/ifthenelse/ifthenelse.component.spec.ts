import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfthenelseComponent } from './ifthenelse.component';

describe('IfthenelseComponent', () => {
  let component: IfthenelseComponent;
  let fixture: ComponentFixture<IfthenelseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfthenelseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfthenelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
