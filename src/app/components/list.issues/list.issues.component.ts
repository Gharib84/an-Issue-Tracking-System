import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/models/issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-list-issues',
  templateUrl: './list.issues.component.html',
  styleUrls: ['./list.issues.component.scss']
})
export class ListIssuesComponent implements OnInit {
  showReportIssue = false;
  selectedIssue: Issue | null = null;

  constructor(private issues: IssueService) { 

  }

  ngOnInit(): void {
     
  }

  get Issues():Issue[]{
    return this.issues.allIssues();
  }

}
