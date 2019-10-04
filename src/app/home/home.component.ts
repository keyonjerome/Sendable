import { Component, OnInit, Input } from '@angular/core';
import {CompanyCardComponent} from '../company-card/company-card.component'
import { SearchService } from '../search.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  cards: {companyName: string, imageURL: string,style?:Object,email?:string,privacyLink?:string}[];
  companies = [{companyName:'Twitter',imageURL:'https://image.flaticon.com/icons/svg/174/174876.svg',style: Object({'background-color':'#E2E2E2'}),privacyLink:'https://twitter.com/settings/account'},
  {companyName:'Snapchat',imageURL:'../../assets/snapchatlogo.png',style: Object({'background-color':'#FFFC01'})},
  {companyName:'Instagram',imageURL:'../../assets/instagramIcon.png',style: Object({'background-image':'url("../../assets/instagramGradient.png")','background-repeat':'cover'})},
  {companyName:'Facebook',imageURL:'https://image.flaticon.com/icons/svg/174/174848.svg',style: Object({'background-color':'#30508E'})},
  {companyName:'Shopify',imageURL:'https://image.flaticon.com/icons/svg/196/196572.svg',style: Object({'background-color':'#fcfcfa'})},
  {companyName:'InfoCanada',imageURL:'https://2z4gahrwoa-flywheel.netdna-ssl.com/wp-content/themes/infogroup/images/infocanada_logo_e_1.png',style: Object({'background-color':'#fcfcfa'})}
  ,{companyName:'Amazon',imageURL:'../../assets/amazonLogo.png',style: Object({'background-color':'#0F0F0F'})}
  ,{companyName:'YouTube',imageURL:'../../assets/youtubeIcon.png',style: Object({'background-color':'#EBEBEB'})}
  ,{companyName:'eBay',imageURL:'../../assets/eBayLogo.png',style: Object({'background-color':'#F0F0F0'})}
  ,{companyName:'kijiji',imageURL:'../../assets/kijijiLogo.png',style: Object({'background-color':'#CA64D2'})}
  ,{companyName:'Pinterest',imageURL:'../../assets/pinterestLogo.png',style: Object({'background-color':'#BD081C'})}
];
  
searched:string;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  onSearch(searched: string) {
    this.searchService.search(searched) 
  }
  constructor(private searchService:SearchService) { 
    this.cards = this.companies;
  }

  ngOnInit() {
  }

}
