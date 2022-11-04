import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssueService } from 'src/app/services/issue.service';
import { Issue } from 'src/app/models/issue';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.scss']
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup | undefined;
  @Output() formClose = new EventEmitter();
  suggestions: Issue[] = [];

  constructor(private fb: FormBuilder, private issueService: IssueService) {

   }

  ngOnInit(): void {

    this.issueForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      priorty: ["", Validators.required],
      type: ["", Validators.required]

    });
    
    this.issueForm.controls['title'].valueChanges.subscribe((title: string) => {
      this.suggestions = this.issueService.getSuggestions(title);
    });

    
  }

  addIssue(){
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return
      
    }
    this.issueService.CreateNewIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
