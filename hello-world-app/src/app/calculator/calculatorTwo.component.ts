import { Component } from '@angular/core';

import { CalculatorModel } from './CalculatorModel';


@Component({
	selector : 'calculator-two',
	templateUrl : 'calculatorTwo.component.html',
	styleUrls : ['calculator.style.css']
})
export class CalculatorTwoComponent{
	model : CalculatorModel = new CalculatorModel();

	selectedOperation : string = '';

	calculate(){
		if (this.selectedOperation)
			this.model[this.selectedOperation]();
	}
}