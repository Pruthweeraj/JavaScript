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
* Objects and Properties
 */





