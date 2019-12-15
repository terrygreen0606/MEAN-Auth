import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: "app-resetpassword",
    templateUrl: "./resetpassword.component.html",
    styleUrls: ["./resetpassword.component.css"]
})
export class ResetpasswordComponent implements OnInit {
    reset_pass: String;
    conf_pass: String;
    email: String;

    constructor(
        private flashMessages: FlashMessagesService,
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.authService
            .resetPassword(this.route.snapshot.params.id)
            .subscribe(res => {
                if (!res.success) {
                    setTimeout(() => {
                        this.router.navigate(["/login"]);
                    }, 5000);
                    return this.flashMessages.show(
                        res.msg + "You'll be redirected to Login Page.",
                        {
                            cssClass: "alert-danger",
                            timeout: 5000
                        }
                    );
                }
            });
    }

    resetPassword() {
        if (this.reset_pass !== this.conf_pass) {
            return this.flashMessages.show("Password doesn't match.", {
                cssClass: "alert-danger",
                timeout: 3000
            });
        }
        const user = {
            email: this.email,
            password: this.reset_pass
        };
        this.authService.updatePassword(user).subscribe(res => {
            if (!res.success) {
                return this.flashMessages.show(res.msg, {
                    cssClass: "alert-danger",
                    timeout: 3000
                });
            }
            this.router.navigate(["/login"]);
        });
    }
}
