var Employee = (function () {
    function Employee(id, name, salary) {
        this.id = 0;
        this.name = '';
        this.salary = 0;
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.display = function () {
        console.log("id = " + this.id + ", name =" + this.name + ", salary = " + this.salary);
    };
    return Employee;
}());
var emp = new Employee('abc', 'Magesh', 10000);
emp.display();
