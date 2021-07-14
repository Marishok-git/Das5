

// // -----------------------DAs5 ex1--------------


// 1.

// let people = ["Greg", "Mary", "Devon", "James"];

// for (i=0; i < people.length; i++) {
//     alert(people[i])
// }

// 2.

// let people = ["Greg", "Mary", "Devon", "James"];
// people.shift();
// console.log(people)

// 3.

// let people = ["Greg", "Mary", "Devon", "James"];
// people.pop();
// console.log(people)

// 4.

// let people = ["Greg", "Mary", "Devon", "James"];
// people.unshift("Matt");
// console.log(people)

// 5.

// let people = ["Greg", "Mary", "Devon", "James"];
// people.push("Mari");
// console.log(people)

// 6.

// let people = ["Greg", "Mary", "Devon", "James"];
// let s = people.indexOf("Mary");
// console.log(s);


// let people = ["Greg", "Mary", "Devon", "James"];
// let s = people.includes("Mary");
// console.log(s);

// 7.

// let people = ["Greg", "Mary", "Devon", "James"];
// let s = people.splice(1,1);
// console.log(s);
// console.log(people);

// 8.
// let people = ["Greg", "Mary", "Devon", "James"];
// let s = people.indexOf("Mary");
// console.log(s)


// 9.
// let people = ["Greg", "Mary", "Devon", "James"];
// let s = people.indexOf("Foo");
// console.log(s)


// 10.

// let people = ["Greg", "Mary", "Devon", "James"];
// let s = people.splice(1,1, "Elizabeth", "Artie");
// console.log(s);
// console.log(people);



// 11.

// let people = ["Greg", "Mary", "Devon", "James"];
// let people1 = ["Bob"];
// let people2 = people.concat(people1)
// console.log(people2)





// // -----------------------DAs5 ex2--------------

// let arr = [];
// let a = 40
// let b = 600

// for(i=0; i < arr.length; i++) {
//     if(arr[i] >= a && arr[i] <= b && arr[i]%11 == 0) {
//         console.log(arr[i])
//     } 

// }




// // -----------------------DAs5 ex3--------------
//  tarberak 1
// let arr = [];
// let a = 40
// let b = 600

// for( let i=a; i < arr.length; i++) {
//     if( arr[i] <= b && arr[i]%11 == 0) {
//         arr.push(arr[i])
        
//     } console.log(arr[i0])

// }

// tarberak 2
// var arr = [];
// var a = 40
// var b = 600

// for( var i=0; i < arr.length; i++) {
//     if(arr[i] >= a && arr[i] <= b && arr[i]%11 == 0) {
//         console.log(arr[i])
//     } 

// }



// var arr = [];
// var a = 100
// var b = 900

// for( var i=0; i < arr.length; i++) {
//     if(arr[i] >= a && arr[i] <= b ) {
//         arr[i]%2 == 0
//         arr[i]%13 == 0

//     } console.log(arr[i])

// }


// -----------------------DAs5 ex4--------------

// var arr=[1,7,9,6,-5,1];

// for(var i=0; i<arr.length;  i++){
//     var c=arr[i]
//     arr[i] =  arr[arr.length-1]
//     arr[i+1] =  arr[arr.length-1-i]
//     arr[arr.length-1-i]=c      
            
// }
//  console.log(arr)


// -----------------------DAs5 ex5--------------

// tarberak1
// var arr=[1,5,true,0,"hello",false,-5,"world",88];

// for(var i=0; i<arr.length;  i++){
//     if(typeof arr[i] == "number") {
//         console.log(arr[i])
//     } else if (typeof arr[i] == "string") {
//         console.log(arr[i])
//     }
    
// }

// tarberak2

// var arr=[1,5,true,0,"hello",false,-5,"world",88];

// for(var i=0; i<arr.length;  i++){
//     if(typeof arr[i] == "number") {
//         alert(arr[i])
//     } else  {
//         console.log("string")
//     }
    
// }