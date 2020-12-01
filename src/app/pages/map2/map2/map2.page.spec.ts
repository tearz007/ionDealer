import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Map2Page } from './map2.page';

describe('Map2Page', () => {
  let component: Map2Page;
  let fixture: ComponentFixture<Map2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Map2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Map2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
