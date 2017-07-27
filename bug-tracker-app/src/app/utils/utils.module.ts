import { NgModule } from '@angular/core';

import { TrimTextPipe } from './pipes/trimText.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';

import { DateTimeComponent } from './components/dateTime.component';

const ALL_PIPES = [
	TrimTextPipe,
	SortPipe,
	ElapsedPipe
];

const ALL_COMPONENTS = [
	DateTimeComponent
]

@NgModule({
	declarations : [...ALL_PIPES, ...ALL_COMPONENTS],
	providers : [],
	imports : [],
	exports : [...ALL_PIPES, ...ALL_COMPONENTS]
})
export class UtilsModule{

}