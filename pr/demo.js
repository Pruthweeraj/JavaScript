/*
console.log("Hi PR :)");

var firstName = "Pruthwee";
console.log(firstName);

var age =21;
console.log(age);

lastName = "Panda";
console.log(lastName);

let name = "pr Panda";
console.log(name);

var  isEligible = true;
console.log(isEligible);

var $_valid = "valid";
console.log($_valid);

*/

/*
var name,age ;
name = "Sagar";
age = 22;
console.log(name + " " + age);

name = true ;
age = "sumit";
alert("Learning JavaScript :" +name +" and name is : " + age);

yourName = prompt("Enter Your Name");
console.log(`Your name is ${yourName} :) .`);

*/

/**************************************
*Basic Operators
 */
/*
var  name , age , year;
name = "aA";
name2 = "Aaaaaaaa" ;
age = 28;
age2 = 21;

var isGrater = age > age2;
console.log(`Jhon is  ${28 - 21} year greter than Pr`);
console.log(name > name2); //its checks letter by letter in asci code value
console.log(name + name2); //aAAaaaaaa
console.log(name - name2); //NaN ==> Not A Number
//typeOf operator
console.log(typeof name); //string
console.log(typeof isGrater);//boolean
console.log(typeof age);//number

var x ;
console.log(typeof x);//undefined

var obj = null;
console.log(obj);//null
console.log(typeof obj);//object

*/

/**************************************
*Operator Precedence
 */

 /*
var now = 2019;
var agePr = now - 21;
var agesagar = now - 28;
var avgAge = (agePr + agesagar) / 2 ;
console.log(avgAge); //1994.5

//Multiple assignments
var x, y ;
x = y = (10 + 2) * 10 - 5 ;
console.log(x , y);//115 115

//More operators 
x = 10;
x *= 10;  // ==>  x = x * 10 ;
console.log(x); //100

x--;
console.log(x);//99
x++;
console.log(x);//100

*/

/**************************************
*Coding chalange-1
 */

 /*
var markWight , jhonWight ,markHight, jhonHight  ,markBMI , jhonBMI , markIsGraterThanJhon ;
markWight = 70;
markHight = 1.97;
markBMI = calculateBMI(markWight , markHight);
console.log(markBMI);

jhonWight = 70;
jhonHight =2.00;
jhonBMI = calculateBMI(jhonWight ,jhonHight);
console.log(jhonBMI);

markIsGraterThanJhon = markBMI > jhonBMI ;
console.log(`Is Mark BMI is Grater than Jhon ? ${markIsGraterThanJhon}`);

function calculateBMI(wight , hight){
    return wight / (hight * hight);
}

*/

/**************************************
*if /else Statement
 */

 /*
var markWight , jhonWight ,markHight, jhonHight  ,markBMI , jhonBMI , markIsGraterThanJhon ;
markWight = 70;
markHight = 2.00;
markBMI = calculateBMI(markWight , markHight);

jhonWight = 60;
jhonHight =2.00;
jhonBMI = calculateBMI(jhonWight ,jhonHight);

function calculateBMI(wight , hight){
    return wight / (hight * hight);
}

 if( markBMI > jhonBMI ) {
    console.log("mark\'s BMI is grater than jhon\'s");
 }else{
    console.log("Jhon\'s BMI is grater than Mark\'s");
 }

 console.log(1 == 1);
 // expected output: true
 
 console.log("1" == 1);
 // expected output: true
 
 console.log(1 === 1);
 // expected output: true
 
 console.log("1" === 1);
 // expected output: false

*/
 
/**************************************
* Boolean logic
 */

// && || !

/**************************************
* termary operator and switch
 */

/**************************************
* Truthy and Falsy Values and Equality Operators
 */

// falsy values : undefined , null , 0 , '' , NaN 
// truty values : all values except falsy values ex: "SPACE" , anyNmber except 0 etc...

/*
var hight ;
hight = "";

if(hight){
    console.log("True Value");
}else{
    console.log("false value");
}

hight =23;
if(hight ==  '23'){
    console.log("Double equalto (==) operator does the type convertation.")
}else{
    console.log("Double equalto (==) operator does not the type convertation.");
}

*/ 

/**************************************
* function
 */

 /*
function calculateAge(barthYear){
    return 2019 - barthYear;
}

console.log(calculateAge(1997));

*/

/**************************************
* Function Statements and Expressions
 */

 /*
//function diclaration
 function funcDec(name){ 
    console.log(name);
}
funcDec("Pr");

//function expression
var funcExp = function(name){
    console.log(name);
}
funcExp("Pupa");

*/

/**************************************
* Arrays
 */
/*
unshift ==> add the element in the starting of the array.
push ==> add the element in the ending of the array.
shift ==>remove element from the begining of the array.
pop ==> remove element from the ending of the array.
indexof ==> returns the index of the the found elemenet or return -1(if not found).
*/


/**************************************
* Objects and Properties
 */

 /*
 //Object latetal declatation
var pr = {
    firstName: 'Pr' ,
    lastName: 'panda',
    job: 'AssocateSE',
    completStatus: false
};

console.log(pr);
console.log(pr.lastName);//panda
console.log(pr['job']);//AssocateSE
console.log(pr.x);//undefined
console.log(pr['x']);//undefined

//Object new keyword syntax 
var susu = new Object();
susu.lastName = 'mahasura';
susu.job = 'EE' ;
susu['isGirl'] = true;
console.log(susu);

var samir = {
    firstName : "samir",
    lastName : "Nanda",
    barthYear : 1997,
    calculateAge : function(){
        this.age= 2019 - this.barthYear ; 
    }
}
samir.calculateAge();
console.log(samir)

*/

/**************************************
* CC
 */
/*
 var jhon ={
     mass : 52,
     hight : 1.7,
     calculateBMI : function(){
        this.BMI = this.mass / (this.hight * this.hight);
        return this.BMI;
    }
 };

var jack = {
    mass : 52,
    hight : 1.7,
    calculateBMI : function(){
       this.BMI = this.mass / (this.hight * this.hight);
       return this.BMI;
   }
};


if(jhon.calculateBMI() > jack.calculateBMI()){
    console.log(`jhon\'s BMI is ${jhon.BMI - jack.BMI}higher than jack\'s`);
}else if(jhon.BMI < jack.BMI){
    console.log(`jack\'s BMI is ${jack.BMI - jhon.BMI}higher than jack\'s`);
}else{
    console.log(`ohh! Both\'s BMI ar same i.e ${jhon.BMI} `);
}

*/

/**************************************
* loops and iteration
 */
/*
 for(var i = 0 ; i<10 ; i++){
     console.log(i);
 }

 var pr = ['Pr' , 'Panda' , 21 , 'SE'];
 for(var i = 0 ; i<pr.length ; i++){
     if(typeof pr[i] !== 'string'){
         continue;
     }
     console.log(pr[i]);
 }

var i = 0;
while( i < (pr.length) ){
    if(typeof pr[i] === 'number' ){
        break;
    }
    console.log(pr[i]);
    i++;
}
*/

/*

Released ==>JavaScript ==> (1995)
Then Handed to ==> ES1 (ECMAScript 1) ==> (1997)
Released with lots of fetures ==> ES5 ==> (2009)
The bigest update to the Language level ==> ES6 / ES2015 ==> (2015)
then started the cycle every year.

ES5 ==> Supported By All Browser
ES6/ES2015 && ES7/2016 && ES8/2019 ==> Wll supported by ModernDays Browser but not in older Browsers.
NOTE ==> But We can use most fetures in production with transpiling and polyfiling (Converting to ES5).

Future versions called togather 'ESNext' ==> ES9/ES2018 && ES10/ES2019 .
Some fetures are supported by morden Browsers.
NOTE ==> But We can use most fetures in production with transpiling and polyfiling.


(Work of JavaScriptENGINE )JavaScript code ==> parser ==>machine level code (Byte code) ==> then execute the task on processores.

NOTE ==>lastName === window.lastName;(In case of GlobalContext means the codes that are not inside any function is associated with the global object(i.e in browser GlobalContext is the'window'));

*/

/*

var a = 'Hello';
function f1(){
    var b = 'Hi';
    console.log(a,b);
}
//console.log(a , b); can't access 'b' variable;
f1();

for(i = 1 ; i<2 ; i++){
    var c = "Hey!"
    console.log(a ,c );
}
console.log(a ,c);//we can access 'c'variabe;

//NOTE in JavaScript SCOPE is applicable for functions but not  for loops and iterators;

console.log(this) //here this refers to window object.

*/


/**************************************
* var , let and const
 */

 /*

//ES5
var name5 = "pr";
var age5 = 21;
name5 ="panda";
console.log(name5);

//ES6
const name6 = "pr";
//name6 = "panda";// CE :Assignment to constant variable
let  name66 = "pr";
name66 = "panda";
console.log(name66);


//NOTE ==> "var" is a function level Scoped but not block leveled scoped.
//NOTe ==> "let" and "const" both are block levled scoped.i.e anything sorrounder by {};
//NOTE ==> "const" value must be defined while defined . else we will get CE.And we can't change the value once defined.



{
    let a = 10;
    const b = 20;
    var c = 30;
}
//console.log(a); CE : because "let" and "const" are block scoped.
//console.log(b); CE : because "let" and "const" are block scoped.
console.log(c); //o/p==>30 cuz "var" is a function scoped but not block scoped.

*/

/**************************************
* string in ES6
 */

/*
    let firstName ="Pr";
    let lastName ="Panda";

//ES5
    console.log("My first name is " + firstName +" and My last name is "+lastName);
//ES6
    console.log(`My first name is ${firstName} and my last name is ${lastName}`);


    const n = `${firstName} ${lastName}`;
    console.log(n); //Pr Panda
    
    console.log(n.startsWith("P"));//true
    console.log(n.endsWith("nda"));//true
    console.log(n.endsWith("pnda"));//false
    console.log(n.fontsize());//<font size="undefined">Pr Panda</font>
    console.log(n.repeat(2));//Pr PandaPr Panda
    console.log(`${n}->`.repeat(2));//Pr Panda->Pr Panda->

*/

//show  == episodes , series <= sesation  

/**************************************
* Arrow function in ES6
 */

/*

let years = [1997,1999,2014,2014]

//ES5
let ages = years.map(function(year , index){
   return 2018 - year;
});

console.log(ages);


//ES6
//case:1 (only one operation)==> no need of {} and no need of return statement ('return will be implicitily be done by the JS Engine'); 
let marrageYears = years.map( year => year + 26 );
console.log(marrageYears);

//case:2 (only one line but two parameters are used)no need of {} and no need of return statement ('return will be implicitily be done by the JS Engine');
let currentAges = years.map( (year , index ) => `${index + 1} person is now  ${2019 - year} old.\n` );
console.log(currentAges);

//case:3 (more than one line logic) ==>so we have to enclosed these logics with {} and we have to explicitly return the values if we need to use these value outside of the function. 
let nowAges = years.map((year , index) => {
    const now = new Date().getFullYear();
    let age = now - year ;
    return `${index + 1} person is now  ${age} old.\n`
} )
console.log(nowAges);

*/






























































































