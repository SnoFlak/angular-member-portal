import { Component, signal } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [LoginComponent, RegisterComponent],
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    isLoginMode = signal(true);

    toggleMode() {
        this.isLoginMode.update(val => !val);
    }
}