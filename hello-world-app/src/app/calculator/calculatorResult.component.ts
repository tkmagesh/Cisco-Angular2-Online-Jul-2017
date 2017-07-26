import { Component, Input } from '@angular/core';

@Component({
	selector : 'calculator-result',
	templateUrl : 'calculatorResult.component.html',
	styleUrls : ['calculator.style.css']
})
export class CalculatorResultComponent{

	@Input()
	data : number = 0;	
}