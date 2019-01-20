var myclass = /** @class */ (function () {
    function myclass() {
    }
    return myclass;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
