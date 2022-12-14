import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * @method agree 
 * @method disagree
 */

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  @Input() issueNo: number | null = null;
  @Output() confirm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {

  }

  agree(){
    this.confirm.emit(true);
    this.issueNo = null;
  }

  disAgree(){
    this.confirm.emit(false);
    this.issueNo = null;
  }

}
