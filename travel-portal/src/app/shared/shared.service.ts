import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ticket } from '../model/ticket';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject('null');
  private userName = new BehaviorSubject('null');
  private ticketDetails = new BehaviorSubject(new Ticket);
  // private ticketStatus = new BehaviorSubject('');

  currentMessage = this.messageSource.asObservable();
  currentName = this.userName.asObservable();
  currentTicket = this.ticketDetails.asObservable();
  // currentTicketStatus = this.ticketStatus.asObservable();


  constructor() { }

  changeMessage(message: string, name: string) {
    this.messageSource.next(message);
    this.userName.next(name);
  }

  changeTicketDetails(ticket: Ticket){
    this.ticketDetails.next(ticket);
  }

}
