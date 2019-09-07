import { Component, OnInit } from '@angular/core';
import {CompanyCardComponent} from '../company-card/company-card.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: {companyName: string, imageURL: string}[];
  companies = [{companyName:'Twitter',imageURL:'https://image.flaticon.com/icons/svg/174/174876.svg'},
  {companyName:'Instagram',imageURL:'https://image.flaticon.com/icons/svg/1409/1409946.svg'},
  {companyName:'Facebook',imageURL:'https://image.flaticon.com/icons/svg/174/174848.svg'},
  {companyName:'Shopify',imageURL:'https://image.flaticon.com/icons/svg/196/196572.svg'}
];
  constructor() { 
    this.cards = this.companies;
  }

  ngOnInit() {
  }

}
