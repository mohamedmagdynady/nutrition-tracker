import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowTodayProgressPage } from './show-today-progress.page';

describe('ShowTodayProgressPage', () => {
  let component: ShowTodayProgressPage;
  let fixture: ComponentFixture<ShowTodayProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTodayProgressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowTodayProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
