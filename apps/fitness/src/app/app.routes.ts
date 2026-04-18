import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '', loadComponent: () => import('./core/layouts/main-layout/main-layout.component').then((c) => c.MainLayoutComponent), title: 'Home'
    },
    {
        path: 'auth', loadComponent: () => import('./core/layouts/auth-layout/auth-layout.component').then((c) => c.AuthLayoutComponent), children:[
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', loadComponent: () => import('./core/components/login/login.component').then((c) => c.LoginComponent), title: 'Login'},
            {path: 'register', loadComponent: () => import('./core/components/register/register.component').then((c) => c.RegisterComponent), title: 'Register'},
            {path: 'forgot-password', loadComponent: () => import('./core/components/forgot-password/forgot-password.component').then((c) => c.ForgotPasswordComponent), title: 'Forgot Password'}
        ] 
    }
];
