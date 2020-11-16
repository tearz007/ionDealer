import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tap2Page } from './tap2.page';

describe('Tap2Page', () => {
  let component: Tap2Page;
  let fixture: ComponentFixture<Tap2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tap2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tap2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
