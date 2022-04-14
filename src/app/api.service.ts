import { Injectable } from "@angular/core";

import {HttpClient } from "@angular/common/http"
@Injectable()
export class ApiService{

    constructor(private http: HttpClient){}

    postQuestion(question: string) {
        this.http.post('http://localhost:5298/api/Questions',{"Text":question}).subscribe(res  => 
            console.log(question)
            )
    }

}