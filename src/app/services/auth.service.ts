import { inject, Injectable, signal, computed } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { UserResponse, UserRegistrationRequest, UserLoginRequest } from "../models/auth.model";


@Injectable({ providedIn: 'root' })
export class AuthService {
    private http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:8080/api/v1/user';

    currentUser = signal<UserResponse | null>(null);

    isLoggedIn = computed(() => !!this.currentUser());

    register(userData: UserRegistrationRequest) {
        return this.http.post<UserResponse>(`${this.API_URL}/register`, userData).pipe(
            tap({
                next: (user) => {
                    this.currentUser.set(user);
                },
                error: (e) => {
                    console.error('Registration failed', e);
                }
            })
        );
    }

    login(userData: UserLoginRequest) {
        return this.http.post<UserResponse>(`${this.API_URL}/login`, userData).pipe(
            tap({
                next: (user) => {
                    this.currentUser.set(user);
                },
                error: (e) => {
                    console.error('Invalid email or password');
                }
            })
        )
    }

    logout() {
        this.currentUser.set(null);
    }
}