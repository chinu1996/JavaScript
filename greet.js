function greet() {
    console.log("hi");
}
greet();

function loggreet(fn) {
    fn();

}
loggreet(greet);
var greetme = function() {
    console.log("hi das");

}
greetme();

loggreeting(function() {
    console.log("hello");
})