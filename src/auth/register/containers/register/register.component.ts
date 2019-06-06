import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../../shared/services/auth/auth.service";

@Component({
  selector: "register",
  // styleUrls: ['register.component.scss'],
  template: `
    <div>
      <auth-form (submitted)="registerUser($event)">
        <h1>S'enregistrer</h1>
        <a routerLink="/auth/login">Vous possédez déjà un compte ?</a>
        <button type="submit">
          Créer un compte
        </button>
        <div class="error" *ngIf="error">
          {{ error }}
        </div>
      </auth-form>
    </div>
  `
})
export class RegisterComponent {
  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  async registerUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.authService.createUser(email, password);
      this.router.navigate(["/"]);
    } catch (err) {
      this.error = err.message;
    }
  }
}
