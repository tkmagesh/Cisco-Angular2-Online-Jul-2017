import { Component } from '@angular/core';

import { CalculatorModel } from './CalculatorModel';


@Component({
	selector : 'calculator-one',
	templateUrl : 'calculatorOne.component.html',
	styleUrls : ['calculator.style.css']
})
export class CalculatorOneComponent{
	
	model : CalculatorModel = new CalculatorModel();

	onAddClick(){
		this.model.add();
	}

	onSubtractClick(){
		this.model.subtract();
	}

	onMultiplyClick(){
		this.model.multiply();
	}

	onDivideClick(){
		this.model.divide();
	}
}