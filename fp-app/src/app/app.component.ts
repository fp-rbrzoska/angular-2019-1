import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-test></app-test>
  <app-home></app-home>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fp-app';
}
