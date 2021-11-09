alert("this insurance does not cover people over 56 years old");
alert("maximum number of people to cover 5");

do{
    var numPeople = parseInt(prompt("add number of people in life insurance "));
}while(numPeople > 5 || numPeople < 0)

for(let i = 1; i <= numPeople; i++) {
    var nameIns = prompt("add name");
    do{
        var age = parseInt(prompt("add age "));
    }while(age > 59 || age < 0)
    console.log(nameIns);
    document.write(nameIns + " of ");
    console.log(age);
    document.write(age + ", ");
}

