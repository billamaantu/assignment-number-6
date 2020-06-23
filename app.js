//TASK 01//

var firstname  = prompt("enter your first name");
var lastname  = prompt("enter your last name");

var fullname = firstname + lastname;
document.write("Assalam.o.alikum " + fullname);


//TASK 02 //

var phone  = prompt("enter your favourite mobile phone name");
var count = phone.length;
document.write("length of string " + count);

//TASK 03 //

var string = "paksitani";

document.write(string + "<br>");

var a = string.indexOf("n");

document.write(" index of n : " + a);

//TASK 04 //

var string = "HELLO WORLD";

document.write(string + "<br>");

var a = string.lastIndexOf("L");

document.write(" index of L : " + a);


//TASK 05 //



var string = "pakistani";

document.write(string + "<br>");

var a = string.charAt(3);

document.write(" character at index 3  : " + a);

//TASK 06 //

var firstname = prompt("enter your first name");
var lastname  = prompt("enter your last name ");

var fullname = firstname.concat(lastname);


document.write(fullname);



//TASK 07//

var city = "Hydrabad";
var rep = city.replace("Hydra","Islama");
document.write(rep);

//TASK 08//


var message = ' "Ali and Sami are best friends. They play cricket and football together."' ;
var rep = message.replace(/and/g , "&");
document.write(rep);


//TASK 09//

document.write("value 472" + "<br>");
document.write("type string" + "<br>");
var a = "472";
var b = parseInt(a);
document.write(b+"type number");


///TASK 10 11///

var str = prompt("enter leter");

var res = str.toUpperCase();

document.write(res);



///TASK 12//

var num = 35.36;
var n = num.toString();
var m = Math.floor(n);
document.write(m);



//TASK 13///




var a = prompt("please input your name");
    for (let i = 0; i < a.length; i++) {
       if (a[i] == String.fromCharCode(33) || a[i] == String.fromCharCode(44) || a[0] == String.fromCharCode(44) || a[i] == String.fromCharCode(46) || a[i] == String.fromCharCode(64)) {
            alert("please enter a valid username")
            break
       }
      if(i === a.length -1){
                      alert(a)
       }
   }

///TASK 14////



var b = prompt("enter your search");
var b = b.toLowerCase();
var a = ["cake","apple pie" , "cookie " , "chips" , " patties"];

for(var i =0; i < a.length; i++){

     if(a[i] === b){

       alert("search found");

        break;
    }

    if(i==a.length -1){

     alert("search not found");

     }

}


//TASK 15///


var a = prompt("");
var numbers = /^[A-Za-z][A-Za-z0-9]{6,}$/
if(numbers.test(a)){

    alert("valid pass");
}
else{
    alert("invalid");
    }



//TASK 16//


var university = ' “University of Karachi” , ';
var res = university.split("");


for(i=0; i<res.length; i++){

document.write("<br>" + res[i]);

}

///TASK 17//

var a = prompt("");
var b = a.charAt(a.length-1);
document.write(b);

////TASK 18//



var str="the quick brown fox jumps over the lazy dog";
  var i,check,counter=0;

  for(i=0;i<str.length;i++){
       check =str.slice(i,i+3)
      if(check=="the"){            counter+=1
           }         else{}
    }
   alert(counter)



///TASK 01///


var a = prompt("");
 document.write("the user input number is " + a + "<br> ");
var b =Math.round(a);
document.write("round of " +  b + "<br>");
var b =Math.floor(a);
document.write("floor value " + b + "<br>");
var b =Math.ceil(a);
document.write("ceil value"+b + "<br>");



///TASK 02///

var a = prompt("-2.637");
document.write("the user input number is " + a + "<br> ");
var b =Math.round(a);
document.write("round of " +  b + "<br>");
var b =Math.floor(a);
 document.write("floor value " + b + "<br>");
var b =Math.ceil(a);
document.write("ceil value"+b + "<br>");

///TASK 03///

var a = prompt("");
var b=Math.abs(a);
document.write(b);

//TASK 04///



var RandomNumber;
var RollDice;
var i;


RollDice  = prompt("how many time do yoy roll the dice");
for(i=1; i<=RollDice; i++){

   RandomNumber = Math.ceil(Math.random()*6);
    document.write(RandomNumber);
}



var n = Number(prompt("How many times do you want to flip the coin?")); // Gets the number of times to flip the coin.
var heads = 0, tails = 0; // Initiates the heads and tails variables.
for(var i = 0; i < n; i++) {

   
   if(Math.random() < 2) {
       heads++;
   } else {
       tails++;
   }
}