import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css']
})
export class CompanyCardComponent implements OnInit {
  @Input() imageURL;
  @Input() name;
  @Input() cardStyle;

  checkForResults(name) {
    // this.searchService.search();
    return "";
  }
  constructor(private searchService: SearchService,public dialog: MatDialog ) { }

  ngOnInit() {
  }
  requestData() {
    this.dialog.open(RequestDialogComponent, {
      width: '500px',
      data: {imageURL:this.imageURL,name:this.name}
    })
  }

  deleteData() {

  }
  

}
