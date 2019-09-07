import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.css']
})
export class CompanyCardComponent implements OnInit {
  @Input() imageURL;
  @Input() name;
  @Input() cardStyle;
  checkForResults() {
    this.searchService.search();
    return "";
  }
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
