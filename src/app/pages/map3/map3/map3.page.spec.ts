import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Map3Page } from './map3.page';

describe('Map3Page', () => {
  let component: Map3Page;
  let fixture: ComponentFixture<Map3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Map3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Map3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
