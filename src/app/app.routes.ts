import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
export const routes: Routes = [
    { path:'', redirectTo: '/login', pathMatch: 'full'},
    { 
        path: "login",
        component: LoginComponent
    },
    { 
        path: "toolbar",
        component: ToolbarComponent
    },
    {
        path: '**', redirectTo: '/login'
    },    
];
