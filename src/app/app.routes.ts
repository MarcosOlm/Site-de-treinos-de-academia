import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Workout } from './pages/workout/workout';

export const routes: Routes = [
    {
        path: '', 
        component: Home
    },
    {
        path: 'workout',
        component: Workout
    }
];
