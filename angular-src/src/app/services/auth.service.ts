import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/User";

let headerJson = {
    "Content-type": "application/json"
};
const httpOptions = {
    headers: new HttpHeaders(headerJson)
};

const url = "http://localhost:5000";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    authToken: any;
    user: any;

    constructor(private http: HttpClient) {}

    storeUserData(token, user) {
        // Angular automatically searches of id_token
        localStorage.setItem("id_token", token);

        // localStorage can not save object so just stringified object
        localStorage.setItem("user", JSON.stringify(user));

        this.authToken = token;
        this.user = user;
    }

    registerUser(user): Observable<User> {
        return this.http.post<User>(`${url}/users/register`, user, httpOptions);
    }

    loginUser(user): Observable<User> {
        return this.http.post<User>(`${url}/users/login`, user, httpOptions);
    }

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }

    loadToken() {
        const token = localStorage.getItem("id_token");
        this.authToken = token;
    }

    getProfile(): Observable<User> {
        this.loadToken();
        let headers = new HttpHeaders({
            ...headerJson,
            Authorization: this.authToken
        });
        return this.http.get<User>(`${url}/users/profile`, { headers });
    }
}
