import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceListComponent } from './maintenance/maintenance-list/maintenance-list.component';
import { AddMaintenanceComponent } from './maintenance/add-maintenance/add-maintenance.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingListComponent } from './meeting/meeting-list/meeting-list.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ResidenceComponent } from './residence/residence.component';
import { NewResidenceComponent } from './residence/new-residence/new-residence.component';
import { ResidenceListComponent } from './residence/residence-list/residence-list.component';

import { AuthService } from './auth/auth.service';
import { MaintenanceService } from './maintenance/maintenance.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MaintenanceComponent,
    MaintenanceListComponent,
    AddMaintenanceComponent,
    MeetingComponent,
    MeetingListComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    ResidenceComponent,
    NewResidenceComponent,
    ResidenceListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [AuthService, MaintenanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
