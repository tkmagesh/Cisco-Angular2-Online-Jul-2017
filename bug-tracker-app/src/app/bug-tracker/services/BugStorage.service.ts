import { IBug } from '../models/IBug';
import { BugOperationsService } from './BugOperations.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BugStorageService{
	private storage : Storage = window.localStorage;
	private currentBugId : number = 0;

	constructor(private bugOperations : BugOperationsService){

	}

	getAll() : IBug[]{
		let result : Array<IBug> = [];
		for(let index=0; index < this.storage.length; index++){
			let rawData = this.storage.getItem(this.storage.key(index));
			let bug = JSON.parse(rawData);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			result.push(bug);
		}
		return result;
	}

	private save(bug : IBug){
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}

	addNew(bugName : string){
		let newBug = this.bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}

	toggle(bug : IBug){
		this.bugOperations.toggle(bug);
		this.save(bug);
	}

	remove(bug : IBug){
		this.storage.removeItem(bug.id.toString());
	}
}