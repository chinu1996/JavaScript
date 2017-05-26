var person = {
    firstname: 'Priyansh',
    lastname: 'Das',
    greet: function() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
};

person.greet();

console.log(person['firstname']);