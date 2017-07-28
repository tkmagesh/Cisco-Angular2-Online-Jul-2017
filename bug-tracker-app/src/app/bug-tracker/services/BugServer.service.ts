import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './BugOperations.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class BugServerService{
	private baseUrl : string = 'http://localhost:3000/bugs';

	constructor(private http : Http, private bugOperations :BugOperationsService){
		
	}
	getAll () : Observable<IBug[]> {
		return this.http
			.get(this.baseUrl)
			.map(response => response.json())
			
	}

	addNew(bugName : string) : Observable<IBug>{
		let newBugData = this.bugOperations.createNew(0, bugName);
		return this.http
			.post(this.baseUrl, newBugData)
			.map(response => response.json());
	}

	toggle(bug : IBug) : Observable<IBug>{
		this.bugOperations.toggle(bug);
		return this.http
			.put(`${this.baseUrl}/${bug.id}`, bug)
			.map(response => response.json());
	}

	remove(bug : IBug) : Observable<any>{
		return this.http
			.delete(`${this.baseUrl}/${bug.id}`)
			.map(response => response.json());
	}
}