import { Component, OnInit } from '@angular/core';
import {CompanyCardComponent} from '../company-card/company-card.component'
import { SearchService } from '../search.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: {companyName: string, imageURL: string,style?:string}[];
  companies = [{companyName:'Twitter',imageURL:'https://image.flaticon.com/icons/svg/174/174876.svg',style:"'background-color':'#fcfcfa'"},
  // {companyName:'Instagram',imageURL:'https://image.flaticon.com/icons/svg/1409/1409946.svg',style:'{"background":"#fcfcfa"}'},
  // {companyName:'Facebook',imageURL:'https://image.flaticon.com/icons/svg/174/174848.svg',style:'{"background":"#fcfcfa"}'},
  // {companyName:'Shopify',imageURL:'https://image.flaticon.com/icons/svg/196/196572.svg',style:'{"background":"#fcfcfa"}'}
];
  onSearch() {
    this.searchService.search() 
  }
  constructor(private searchService:SearchService) { 
    this.cards = this.companies;
  }

  ngOnInit() {
  }

}
