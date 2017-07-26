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
		this.model[this.selectedOperation]();

		/*switch (this.selectedOperation) {
			case "add":
				this.model.add();
				break;
			case "subtract":
				this.model.subtract();
				break;
			case "multiply":
				this.model.multiply();
				break;
			case "divide":
				this.model.divide();
				break;
		}*/
	}
}