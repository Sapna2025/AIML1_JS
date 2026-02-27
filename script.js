//console.log("Hello World");
// document.write("Hello World");
/*var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="Sanjeev Soni";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));

const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){
console.log("true");
}
else{
console.log("false")//because each symbol is unique
}

  var a=100;var b=13;var c=10; var linebreak="<br>";
document.write("a+b+c=");
    result =  a+b+c;
document.write(result);
document.write(linebreak);
document.write("a*b*c=");
result =  a*b*c;
document.write(result);
document.write(linebreak);

var a=10;
var b=20;
document.write("(a==b)=");
result=(a==b);
document.write(result);
document.write(linebreak);
document.write("(a>=b)=");
result=(a>=b);
document.write(result);
document.write(linebreak);
document.write("(a<=b)=");
result=(a<=b);
document.write(result);
document.write(linebreak);
document.write("(a===b)=");
result=(a===b);
document.write(result);
document.write(linebreak);

var count;
document.write("Starting loop"+<br/>);
for(count=0;count<10;count++){
    document.write(count);
    document.write("<br/>");
}
document.write("Loop stopped!");*/
/*
const person={
    fname:"Ajay",
    lname:"Kumar",
    age:25
};
for(let x in person){
    console.log("person details:"+x+":"+person[x]);//can write it  as person.x
}
*/
/*
var count=0;
document.write("Starting loop ")
while(count<10){
    document.write("Current Count:"+count+"<br>");
    count++;
}
document.write("loop stopped!");

var age=20;
if(age>18){
    document.write(" <b>You are eligible to cast the vote.</b>");
}*/
/*
let age=20;
if(age>=18){
   document.write("You are an adult ");
}else{
   document.write("You are a minor");
}*/
/*
var grade='A';
document.write("Entering switch block <br>");
switch(grade){
    case 'A':document.write("Good job<br>");
    break;
    case 'B':document.write("Pretty good<br>");
    break;
    case 'C':document.write("Passed<br>");
    break;
    case 'D':document.write("Not so good<br>");
    break;
    case 'F':document.write("Failed<br>");
    break;
    default:document.write("unknown grade<br>");
}
document.write("exiting switch case");*/
/*
function myFunction(){
    alert("Hello World");
}
function sayHello(name,age){
    document.write(name+" is "+age+" years old. ");
}
    *//*
var res=mu(12,30);
function mu(x,y){
    return x*y;
}
document.write(res);*/
/*
//normal function
function add(a,b){
    console.log(a+b);
}add(10,20);
//arrow function(anonymous function)
var add2=(a,b)=>{
    console.log(a+b);
}
add2(102,20);
//arrow function for single line paerameter
var add3=(a,b)=>console.log(a+b);
add3(30,20);
*/
var person={
    name:"John Mac";
    age:30;
    isMarried:true;
    address:{
        street:"Vijay Nagar";
        flatNo:201;
    }
};
console.log(person);
var person2=new Object();
person2.name="Krishnkant";
person2.age=32;
person2.isMarried=true;
person2.address={};
person2.address.street="Vijay Nagar";
person2['adress']['flatNo']=33;
console.log(person2);