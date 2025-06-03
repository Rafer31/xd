import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BusesComponent } from './components/buses/buses.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path:'', redirectTo: '/login', pathMatch: 'full'},
    { 
        path: "login",
        component: LoginComponent
    },
    {
        path: "admin-dashboard",
        component: AdminDashboardComponent,
        children: [{
            path: "buses",
            component: BusesComponent
        },
        {
            path: "",
            component: DashboardComponent
        }
    ]
    },
    {
        path: '**', redirectTo: '/login'
    },
    
];
