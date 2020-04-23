import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterProgressPage } from './enter-progress.page';

describe('EnterProgressPage', () => {
  let component: EnterProgressPage;
  let fixture: ComponentFixture<EnterProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterProgressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
