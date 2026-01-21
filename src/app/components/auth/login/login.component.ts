import { Component, inject } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { UserLoginRequest } from "../../../models/auth.model";


@Component({
    selector: 'auth-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html'
})
export class LoginComponent {
    private authService = inject(AuthService);
    private router = inject(Router);

    onSubmit(data: UserLoginRequest) {
        this.authService.login(data).subscribe({
            next: (user) => {
                console.log('Success!', user);
                this.router.navigate(['/dashboard']);
            },
            error: (e) => alert(e.error.message)
        });
    }
}