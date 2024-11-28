
//   birinchi algaritm   //

let num = prompt("Uch xonali sonni kiriting:");

let a = num % 10;


let b = (num - a) / 10;

let result = a * 100 + b;

console.log("chap tarafdagi son o'ng tarafga o'tdi:", result); 


// birinchi algaritm tugadi  //








// ikkinchi algaritm   //


let raqam = prompt("To'rt xonali sonni kiriting:");   

let c = (raqam - (raqam % 1000)) / 1000 % 10;

console.log("Mingliklar xonasidagi son:", c); 



// ikkinchi algaritm tugadi  //















// uchinchi algaritm   //


let son = prompt("Uch xonali sonni kiriting:");


let sum = (son % 10) + ((son % 100) - (son % 10)) / 10 + (son - (son % 100)) / 100;

console.log("Raqamlar yig'indisi:", sum);   


// uchinchi algaritm tugadi  //






// tortinchi algaritm  //



let  d = prompt("Uch xonali sonni kiriting:"); 

let f = (d % 10) * 100 + ((d % 100) - (d % 10)) + (d - (d % 100)) / 100;

console.log("Raqamlar teskari tartibda:", f); 


// tortinchi algaritm tugadi  //







// beshinchi algaritm  //



let N = prompt ( "sekundlar sonini kiriting" );

let minutes = (N - (N % 60)) / 60; 
let seconds = N % 60; 

console.log("O'tgan vaqt:", minutes, "minut", seconds, "sekund");


// beshinchi algaritm tugadi  //