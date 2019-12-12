import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
    user: object;

    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit() {
        this.authService.getProfile().subscribe(
            user => {
                this.user = user.user;
            },
            err => {
                console.log(err);
                return false;
            }
        );
    }
}
