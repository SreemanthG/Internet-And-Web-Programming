var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");

var pv1 = 2.98;
var pv2 = 4.50;
var pv3 = 9.98;
var pv4 = 4.49;
var pv5 = 6.87;
alert("Welcome to the page");
var c = parseInt(prompt("How many products you want to purchase"));
while(c>0){
    var inp = prompt("Enter the product Number");
    var val = parseInt(prompt("Quantity sold for one day"));
    var inpnumber = parseInt(inp);
    console.log(c);
    switch(inpnumber){
        case 1:
            pv1 = val*pv1;
            p1.innerHTML = "$"+pv1;
            c--;
            break;
        case 2:
            pv2 = val*pv2;
            p2.innerHTML = "$"+pv2;
            c--;
            break;
        case 3:
            pv3 = val*pv3;
            p3.innerHTML = "$"+pv3;
            c--;
            break;
        case 4:
            pv4 = val*pv4;
            p4.innerHTML = "$"+pv4;
            c--;
            break;
        case 5:
            pv5 = val*pv5;
            p5.innerHTML = "$"+pv5;
            c--;
            break;
        default:
            alert("Enter the right input");
            break;
    }
}
