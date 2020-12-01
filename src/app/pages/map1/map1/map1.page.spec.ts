import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Map1Page } from './map1.page';

describe('Map1Page', () => {
  let component: Map1Page;
  let fixture: ComponentFixture<Map1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Map1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Map1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
