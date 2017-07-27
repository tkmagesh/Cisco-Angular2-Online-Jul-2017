import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/BugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	sortBy : string = '';
	orderByDescending : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push(this.bugOperations.createNew('Server communication failure'));
		this.bugs.push(this.bugOperations.createNew('Application is not responsive'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'));
	}

	onCreateClick(bugName){
		let newBug = this.bugOperations.createNew(bugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bug : IBug){
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}

