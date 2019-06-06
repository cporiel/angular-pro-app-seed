import { Component } from "@angular/core";

@Component({
  selector: "register",
  // styleUrls: ['register.component.scss'],
  template: `
    <div>
      <auth-form>
        <h1>S'enregistrer</h1>
        <a routerLink="/auth/login">Vous possédez déjà un compte ?</a>
        <button type="submit">
          Créer un compte
        </button>
      </auth-form>
    </div>
  `
})
export class RegisterComponent {
  constructor() {}
}
