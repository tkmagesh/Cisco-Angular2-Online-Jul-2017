class Employee {
	id : number = 0;
	name : string = '';
	salary : number = 0;
	org : string = 'Cisco';
	constructor(id : number, name : string, salary : number) {
		this.id = id;
		this.name = name;
		this.salary = salary;
	}

	display() : void {
		console.log(`id = ${this.id}, name =${this.name}, salary = ${this.salary}`)
	}
}

let emp = new Employee(100,'Magesh',10000);
emp.display();