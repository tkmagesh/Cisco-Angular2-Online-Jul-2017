import { Component, EventEmitter, Output } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugServerService } from '../services/BugServer.service';

@Component({
	selector : 'bug-edit',
	template : `
		<section class="edit">
			<label>Bug Name :</label>
			<input type="text" #txtBugName>
			<input type="button" value="Create" (click)="onCreateClick(txtBugName.value)">
		</section>
	`
})
export class BugEditComponent{

	@Output()
	newBug : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private bugServer : BugServerService){

	}

	onCreateClick(bugName){
		this.bugServer
			.addNew(bugName)
			.subscribe(bug => this.newBug.emit(bug));
	}
}