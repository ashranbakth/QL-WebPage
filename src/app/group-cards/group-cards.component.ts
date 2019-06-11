import { InterestRate, interestRateCollection } from './../../assets/api-call';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-group-cards',
  templateUrl: './group-cards.component.html',
  styleUrls: ['./group-cards.component.sass']
})
export class GroupCardsComponent implements OnInit {

  interestRates: InterestRate[] = interestRateCollection;
  constructor() { }

  ngOnInit() {
    console.log('value ', this.interestRates[0].name);
  }

}
