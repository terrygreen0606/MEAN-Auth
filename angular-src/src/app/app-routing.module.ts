import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./authGuards/auth.guard";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { ForgotComponent } from "./components/forgot/forgot.component";
import { ResetpasswordComponent } from "./components/resetpassword/resetpassword.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfileComponent } from "./components/profile/profile.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "forgot", component: ForgotComponent },
    { path: "reset/:id", component: ResetpasswordComponent },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
