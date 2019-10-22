import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable()
export class graphServices {
    constructor(private http: HttpClient) { }

    getDounetGraphData() {

        return this.http.get("http://66.226.72.35:3301/GetUsers");;


    }





}