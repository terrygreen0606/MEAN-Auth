import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
    first_name: String;
    last_name: String;
    username: String;
    email: String;
    password: String;

    constructor(
        private flashMessages: FlashMessagesService,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {}

    onRegisterSubmit() {
        const user = {
            first_name: this.first_name,
            last_name: this.last_name,
            username: this.username,
            email: this.email,
            password: this.password
        };

        // Register User
        this.authService.registerUser(user).subscribe(res => {
            if (res.success) {
                this.flashMessages.show("Successfully registered!", {
                    cssClass: "alert-success",
                    timeout: 3000
                });
                this.router.navigate(["/login"]);
            } else {
                this.flashMessages.show(res.msg, {
                    cssClass: "alert-danger",
                    timeout: 3000
                });
                this.router.navigate(["/register"]);
            }
        });
    }
}
