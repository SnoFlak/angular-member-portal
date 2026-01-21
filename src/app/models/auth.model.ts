export interface UserResponse {
    publicId: string;
    email: string;
}

export interface UserRegistrationRequest {
    email: string;
    password: string;
}

export interface UserLoginRequest {
    email: string;
    password: string;
}