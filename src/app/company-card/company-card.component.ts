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
  @Input() privacyLink: string;

  checkForResults(name) {
    // this.searchService.search();
    return "";
  }
  constructor(private searchService: SearchService,public dialog: MatDialog ) { }

  ngOnInit() {
  }
  requestDataAccess() {
    this.dialog.open(RequestDialogComponent, {
      width: '500px',
      
      data: {imageURL:this.imageURL,name:this.name,cardStyle:this.cardStyle,accessOrDelete:'access',privacyLink:this.privacyLink}
    })
  }

  requestDataDelete() {
    this.dialog.open(RequestDialogComponent, {
      width: '500px',
      data: {imageURL:this.imageURL,name:this.name,cardStyle:this.cardStyle,accessOrDelete:'delete'}
    })
  }
  

}
