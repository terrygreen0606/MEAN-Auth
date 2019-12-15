import { Component, OnInit } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: "app-forgot",
    templateUrl: "./forgot.component.html",
    styleUrls: ["./forgot.component.css"]
})
export class ForgotComponent implements OnInit {
    email: String;
    msg: String;

    constructor(
        private authService: AuthService,
        private flashMessages: FlashMessagesService
    ) {}

    ngOnInit() {}

    forgotSubmit() {
        this.authService.forgotPassword(this.email).subscribe(res => {
            if (res.success) {
                this.msg = "alert-success";
            } else {
                this.msg = "alert-danger";
            }
            this.flashMessages.show(res.msg, {
                cssClass: this.msg,
                timeout: 5000
            });
        });
    }
}
