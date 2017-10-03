import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Guest } from '../shared/guest.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
  @Output() guestToAdd = new EventEmitter<Guest>();

  onAddGuest = (form: NgForm) => {
    const value: any =  form.value
    const newGuest = new Guest(value.name, value.numberOf, value.food);
    this.guestToAdd.emit(newGuest)
    form.reset();
  }



}
