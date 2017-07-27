import { Pipe, PipeTransform } from '@angular/core';
import { IBug } from '../models/IBug';

@Pipe({
	name: 'closedCount',
	pure : false
})
export class ClosedCountPipe implements PipeTransform {
	transform(bugs: IBug[]): number {
		return bugs.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0);
	}
}