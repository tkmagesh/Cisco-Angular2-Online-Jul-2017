import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	private getComparerFor(attrName){
		return function(item1, item2){
			if (item1[attrName] < item2[attrName]) return -1;
			if (item1[attrName] > item2[attrName]) return 1;
			return 0;
	    }
	}
	transform(list : any[], attrName : string) : any[]{
		if (!attrName) return list.sort();
		let comparer = this.getComparerFor(attrName);
		return list.sort(comparer);
	}
}

