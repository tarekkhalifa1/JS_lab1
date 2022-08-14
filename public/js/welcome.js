var firstName = prompt("Please enter your first name");
var lastName = prompt("Please enter your last name");
var fullName = `${firstName} ${lastName}`;
// check if user doesn't enter any name
if (!firstName || !lastName) {
    alert("please enter valid name");
    location.reload();
}
// check if user enter invalid name
if (!isNaN(firstName) || !isNaN(lastName)) {
    alert("please enter valid name");
    location.reload();
}
var confirmFN = confirm(`Your full name is ${fullName} ?`);
if (confirmFN) {
    let userBirthyear = prompt(`Hello ${firstName} please enter your birth year`);

    // check if user doesn't enter any birth year
    if (!userBirthyear) {
        alert("please enter valid birth year");
        userBirthyear = prompt(`Hello ${firstName} please enter your birth year`);
    }

    // check if user enter invalid birth year
    if (isNaN(userBirthyear)) {
        alert("please enter valid birth year");
        userBirthyear = prompt(`Hello ${firstName} please enter your birth year`);
    }
    let userAge = 2022 - userBirthyear;
    document.write(`<div>Welcome ${fullName} you are ${userAge} years old</div>`);
} else {
    location.reload();
}