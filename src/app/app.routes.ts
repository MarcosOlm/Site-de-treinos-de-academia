import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Workout } from './pages/workout/workout';
import { LoginRegistration } from './pages/login-registration/login-registration';

export const routes: Routes = [
    {
        path: '', 
        component: Home
    },
    {
        path: 'workout/:user/:day',
        component: Workout
    },
    {
        path: 'login-registration/:user',
        component: LoginRegistration
    }
];
