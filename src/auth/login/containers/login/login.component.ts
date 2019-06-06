import { Component } from "@angular/core";

@Component({
  selector: "login",
  // styleUrls: ['login.component.scss'],
  template: `
    <div>
      <auth-form>
        <h1>Identification</h1>
        <a routerLink="/auth/register">Pas encore inscrit ?</a>
        <button type="submit">
        S'identifier
        </button>
      </auth-form>
    </div>
  `
})
export class LoginComponent {
  constructor() {}
}
