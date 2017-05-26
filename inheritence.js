function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

var das = new Person('Priyansh', 'Das');
das.greet();

var dew = new Person('Amsh', 'Dew');
dew.greet();

console.log(das.__proto__);
console.log(dew.__proto__);
console.log(das.__proto__ === dew.__proto__);