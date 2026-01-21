import { Component, inject } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { UserRegistrationRequest } from "../../../models/auth.model";


@Component({
    selector: 'auth-register',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    private authService = inject(AuthService);
    private router = inject(Router);

    onSubmit(data: UserRegistrationRequest) {
        this.authService.register(data).subscribe({
            next: (user) => {
                console.log('Success!', user);
                // this.router.navigate(['/dashboard']);
            },
            error: (e) => alert(e.error.message)
        });
    }
}