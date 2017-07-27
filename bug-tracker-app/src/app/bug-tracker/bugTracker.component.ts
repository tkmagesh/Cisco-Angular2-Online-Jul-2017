import { Component } from '@angular/core';
import { IBug } from './models/IBug';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];

	sortBy : string = '';
	orderByDescending : boolean = false;
	
	constructor(){
		this.bugs.push({name : 'Server communication failure', isClosed : false});
		this.bugs.push({name : 'Application is not responsive', isClosed : false});
		this.bugs.push({name : 'User actions not recognized', isClosed : true});
		this.bugs.push({name : 'Data integrity checks failed', isClosed : true});
	}
	getClosedCount(){
		let closedCount = 0;
		for(let index = 0; index < this.bugs.length; index++){
			if (this.bugs[index].isClosed)
				++closedCount;
		}
		return closedCount;
	}

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

	onRemoveClosedClick(){
		for(let index=this.bugs.length-1; index >= 0; index--)
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
	}
}

