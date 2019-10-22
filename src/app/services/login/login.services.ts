import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { applicationUrl } from '../applicationUrl';
import { stringify } from 'querystring';




// chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
@Injectable({
    providedIn: 'root'
})

export class LoginService {
    url: any = applicationUrl.endpoint;
    constructor(private http: HttpClient) { }



    userAuthentication(userName, password) {

        let reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
        let data4 = {
            email: userName,
            password: password
        };

        let data5 = JSON.stringify(data4)

        return this.http.post(this.url + '/registration/login', data5, { headers: reqHeader });

    }

}


     // let headers1 = new HttpHeaders();
        // headers1.append('Content-Type', 'application/json');
        // headers1.append('No-Auth', 'True');