import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';


export class BugOperationsService{
	createNew(id : number, bugName : string) : IBug{
		let newBug : IBug = {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return newBug;
	}
	toggle(bug : IBug) : void {
		bug.isClosed = !bug.isClosed;
	}
}