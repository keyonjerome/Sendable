import { Component, OnInit } from '@angular/core';
import {CompanyCardComponent} from '../company-card/company-card.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards = [0,1];
  constructor() { }

  ngOnInit() {
  }

}
