import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue/Issue';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {
  model = new Issue(1,"Går ej att starta","Det har varit mycket som strular","Low","Bug")
  submitted = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.model.priority)
  }

  submitIssue(){
    this.submitted = true;
  }

}
