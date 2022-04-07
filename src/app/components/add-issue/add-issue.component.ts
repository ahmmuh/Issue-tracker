import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue/Issue';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {
  model = new Issue(1,"","","Low","")
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  submitIssue(){
    this.submitted = true;
  }

}
