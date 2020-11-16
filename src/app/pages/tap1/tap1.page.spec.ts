import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tap1Page } from './tap1.page';

describe('Tap1Page', () => {
  let component: Tap1Page;
  let fixture: ComponentFixture<Tap1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tap1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tap1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
