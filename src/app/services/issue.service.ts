import { Injectable } from '@angular/core';
import { Issue } from '../models/issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private issues: Issue[] = [
    new Issue(1, "Add email validation in registration form", "Validate the email entered in the user registration form", "high", "Feature"),
    new Issue(2, "Display the adress details of a customer", "Add a column to display the details of the customer address in the customer list'", "low", "Feature"),
    new Issue(3, "Export to CSV is not working", "The export process of a report into CSV format throws an error", "high", "Bug"),
    new Issue(4, "Locale settings per user", "'Add settings configure the locale of the current user", "low", "Feature"),
    new Issue(5, "Add new customer tutorial", "reate a tutorial on how to add a new customer into the application", "high", "Documentation"),

  ];

  constructor() {

  }

  
    allIssues(): Issue[]{
    return this.issues;
  }


}
