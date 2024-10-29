import { Routes } from '@angular/router';
import { TaskListDisplayComponent } from './componets/task-list-display/task-list-display.component';

export const routes: Routes = [
    { path: 'tasks', component: TaskListDisplayComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' } 
];

