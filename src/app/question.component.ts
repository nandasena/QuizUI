import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
    selector:'question',
    templateUrl:'./question.component.html',
})
export class QuestionComponent {

    question: string ='';

    /**
     *
     */
    constructor(private api: ApiService) {
        
    }
    post(question: string) {
        this.api.postQuestion(question);
    }

}