import { Component, inject } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    public authService = inject(AuthService);
}