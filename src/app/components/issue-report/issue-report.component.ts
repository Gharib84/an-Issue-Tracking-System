import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.scss']
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      priorty: ["", Validators.required],
      type: ["", Validators.required]

    })
  }

}
