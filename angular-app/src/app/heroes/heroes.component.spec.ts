import { TestBed } from '@angular/core/testing';
import { HeroesModuleComponent } from './heroes.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeroesModuleComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HeroesModuleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-tour-of-heroes'`, () => {
    const fixture = TestBed.createComponent(HeroesModuleComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-tour-of-heroes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HeroesModuleComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-tour-of-heroes app is running!');
  });
});
