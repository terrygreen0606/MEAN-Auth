import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlashMessagesModule } from "angular2-flash-messages";

import { AppRoutingModule } from "./app-routing.module";
import { AuthGuard } from "./authGuards/auth.guard";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ForgotComponent } from "./components/forgot/forgot.component";
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        DashboardComponent,
        ProfileComponent,
        ForgotComponent,
        ResetpasswordComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        FlashMessagesModule.forRoot()
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
