import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Guest } from './main/shared/guest.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  guests: Guest[] = [
    new Guest('Josh and Carrie', 4, "Brownies"),
    new Guest('Jill and Zach', 2, "Pie"),
    new Guest('George and Beth', 3, "The Pig"),
    new Guest('JR and Liz', 2, "Corn and Beans"),
    new Guest("G'Pa", 1, "Drinks"),
  ];
  
  guestTotal: number = 12;

  onAddToList(guest: Guest){
    console.log(guest)
    this.guestTotal = this.guestTotal + Number.parseInt(guest.amount.toString());
    this.guests.unshift(guest)
  }


}
