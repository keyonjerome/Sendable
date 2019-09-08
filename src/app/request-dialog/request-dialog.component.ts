import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css']
})
export class RequestDialogComponent implements OnInit {
  imageURL: string;
  name: string;
  cardStyle: string;
  requestOrDelete: string;
  constructor(  @Inject(MAT_DIALOG_DATA) public data: any,public dialog: MatDialog, private authService: AuthService) { }

  ngOnInit() {
    if (this.data !== null) {
      this.imageURL = this.data.imageURL;
      this.name = this.data.name;
      this.cardStyle = this.data.cardStyle;
      this.requestOrDelete = this.data.requestOrDelete;
    }
  }
  onCancel() {

  }
  onSubmit() {

  }

}
