import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaintenanceComponent } from './../maintenance/maintenance.component';
import { MeetingComponent } from './../meeting/meeting.component';
import { LoginComponent } from './../auth/login/login.component';
import { HomeComponent } from './../home/home.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { AuthGuard } from '../auth/auth-guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'meeting', component: MeetingComponent, canActivate: [AuthGuard] },
    { path: 'maintenance', component: MaintenanceComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule { }
