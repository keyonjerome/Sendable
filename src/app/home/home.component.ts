import { Component, OnInit } from '@angular/core';
import {CompanyCardComponent} from '../company-card/company-card.component'
import { SearchService } from '../search.service';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: {companyName: string, imageURL: string,style?:Object}[];
  companies = [{companyName:'Twitter',imageURL:'https://image.flaticon.com/icons/svg/174/174876.svg',style: Object({'background-color':'#E2E2E2'})},
  {companyName:'Snapchat',imageURL:'../../assets/snapchatlogo.png',style: Object({'background-color':'#FFFC01'})},
  {companyName:'Instagram',imageURL:'../../assets/instagramIcon.png',style: Object({'background-image':'url("../../assets/instagramGradient.png")','background-repeat':'cover'})},
  {companyName:'Facebook',imageURL:'https://image.flaticon.com/icons/svg/174/174848.svg',style: Object({'background-color':'#30508E'})},
  {companyName:'Shopify',imageURL:'https://image.flaticon.com/icons/svg/196/196572.svg',style: Object({'background-color':'#fcfcfa'})}
];
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  onSearch() {
    this.searchService.search() 
  }
  constructor(private searchService:SearchService) { 
    this.cards = this.companies;
  }

  ngOnInit() {
  }

}
