function Employee(name) {
    this.name = name;
 
    this.say = function () {
        console.log("I am employee " + name);
    };
}

function EmployeeFactory() {
 
    this.create = function(name) {
        return new Employee(name);
    };
}

function Vendor(name) {
    this.name = name;
 
    this.say = function () {
        console.log("I am vendor " + name);
    };
}

function VendorFactory() {
 
    this.create = function(name) {
        return new Vendor(name);
    };
}

var persons = [];
var employeeFactory = new EmployeeFactory();
var vendorFactory = new VendorFactory();

persons.push(employeeFactory.create("Juan"));
persons.push(employeeFactory.create("Pedro"));
persons.push(vendorFactory.create("Pablo"));
persons.push(vendorFactory.create("Chris"));

for(i in persons){
    persons[i].say();
}






