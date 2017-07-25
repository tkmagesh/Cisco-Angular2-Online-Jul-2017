import { Component } from '@angular/core';

@Component({
	selector : 'greeter',
	templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
	message : string = '[Default greet message]';

	onClearClick(){
		this.message = '';
	}

	onGreetClick(username : string){
		this.message = `Hi ${username}, Welcome to the world of Angular!`;
	}
}