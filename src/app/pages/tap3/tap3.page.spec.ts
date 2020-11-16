import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tap3Page } from './tap3.page';

describe('Tap3Page', () => {
  let component: Tap3Page;
  let fixture: ComponentFixture<Tap3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tap3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tap3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
