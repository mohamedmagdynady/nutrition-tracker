import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowNutritionValuePage } from './show-nutrition-value.page';

describe('ShowNutritionValuePage', () => {
  let component: ShowNutritionValuePage;
  let fixture: ComponentFixture<ShowNutritionValuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNutritionValuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowNutritionValuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
