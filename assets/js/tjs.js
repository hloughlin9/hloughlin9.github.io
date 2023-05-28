
function myFunction2(){
    const d = new Date();

    let time = d.toString();

    document.getElementById("headerToChange").innerHTML = "New header with time! " + time;
}


function myAddFunction2(){
    const a = parseInt(prompt("Enter a number: "));
    const b = parseInt(prompt("Enter a second number: "));

    const c = a + b;

    document.getElementById("EnteredResult").innerHTML = "The sum of your equation is " + c.toString();
}