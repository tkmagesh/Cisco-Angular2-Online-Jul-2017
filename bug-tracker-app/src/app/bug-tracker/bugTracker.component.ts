import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';

import { BugServerService } from './services/BugServer.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] = [];

	sortBy : string = '';
	orderByDescending : boolean = false;
	

	constructor(private bugServer : BugServerService){
		
		this.bugs = [];
	}

	ngOnInit(){
		this.bugServer
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}

	onNewBug(bug){
		this.bugs = [...this.bugs, bug];
	}

	onBugNameClick(bugToToggle : IBug){
		this.bugServer
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bugToToggle.id === bug.id ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		this.bugs
			.forEach((bug, index) => {
				if (bug.isClosed){
					this.bugServer
						.remove(bug)
						.subscribe(response => this.bugs.splice(index, 1))
				}
			});

	}
}

