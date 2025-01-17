import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../../shared/services/auth/auth.service";

@Component({
  selector: "login",
  // styleUrls: ['login.component.scss'],
  template: `
    <div>
      <auth-form (submitted)="loginUser($event)">
        <h1>Identification</h1>
        <a routerLink="/auth/register">Pas encore inscrit ?</a>
        <button type="submit">
          S'identifier
        </button>
        <div class="error" *ngIf="error">
          {{ error }}
        </div>
      </auth-form>
    </div>
  `
})
export class LoginComponent {
  error: string;
  constructor(private authService: AuthService, private router : Router) {}

  async loginUser(event: FormGroup) {
    const { email, password } = event.value;
    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(["/"]);
    } catch (err) {
      this.error = err.message;
    }
  }
}
