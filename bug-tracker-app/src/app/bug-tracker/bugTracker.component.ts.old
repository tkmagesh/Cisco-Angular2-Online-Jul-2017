import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/BugStorage.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	sortBy : string = '';
	orderByDescending : boolean = false;
	

	constructor(private bugStorage : BugStorageService){
		this.bugs = this.bugStorage.getAll();
	}

	onCreateClick(bugName){
		let newBug = this.bugStorage.addNew(bugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugNameClick(bug : IBug){
		this.bugStorage.toggle(bug);
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(bug => this.bugStorage.remove(bug));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}
}

