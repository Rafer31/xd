import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BusesComponent } from './components/buses/buses.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

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
            component: AdminDashboardComponent
        },
        {
            path: "sidenav",
            component: SidenavComponent
        }
    ]
    },
    {
        path: '**', redirectTo: '/login'
    },
    
];
