import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    email: String;
    password: String;

    constructor(
        private router: Router,
        private authService: AuthService,
        private flashMessages: FlashMessagesService
    ) {}

    ngOnInit() {}

    onLoginSubmit() {
        const user = {
            email: this.email,
            password: this.password
        };

        this.authService.loginUser(user).subscribe(res => {
            if (res.success) {
                // Save to localstorage
                this.authService.storeUserData(res.token, res.user);

                this.flashMessages.show("Successfully logged in!", {
                    cssClass: "alert-success",
                    timeout: 3000
                });

                this.router.navigate(["/dashboard"]);
            } else {
                this.flashMessages.show(res.msg, {
                    cssClass: "alert-danger",
                    timeout: 5000
                });

                this.router.navigate(["/login"]);
            }
        });
    }
}
