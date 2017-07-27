import { Component } from '@angular/core';

@Component({
	selector : 'date-time',
	templateUrl : 'dateTime.component.html'
})
export class DateTimeComponent{
	currentTime : Date = new Date();
	constructor(){
		setInterval(() => this.currentTime = new Date(), 1000);
	}
}