import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcinfoPage } from './calcinfo.page';

describe('CalcinfoPage', () => {
  let component: CalcinfoPage;
  let fixture: ComponentFixture<CalcinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
