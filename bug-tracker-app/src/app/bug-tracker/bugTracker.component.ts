import { Component } from '@angular/core';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	onCreateClick(bugName){
		let newBug : IBug = {
			name : bugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugNameClick(bug : IBug){
		bug.isClosed = !bug.isClosed;
	}
}

interface IBug{
	name : string,
	isClosed : boolean
}