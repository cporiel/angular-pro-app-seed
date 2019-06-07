import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-nav.component.scss'],
  template: `
    <div class="app-nav">
      <div class="wrapper">
        <a routerLink="schedule" routerLinkActive="active">Calendrier</a>
        <a routerLink="meals" routerLinkActive="active">Repas</a>
        <a routerLink="workouts" routerLinkActive="active">Exercices</a>
      </div>
    </div>
  `
})
export class AppNavComponent {
  constructor() {}
}