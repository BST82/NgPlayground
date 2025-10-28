// test 
// function play(){
// var a=30;
// let b=20;
// const c=10;

// if(1){
//     // let a=100;
//     let b=30
//     let c=40
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
//   console.log(a)
//     console.log(b)
//     console.log(c)
// }
// play()


// function scope(){
//     let count=0;
//   return function inner(){
//     count++
//     // console.log(count)
//     return function innesInner(){
//      count++
//      console.log(count)
//     }
//    }
// }

// let c1=scope();
// let c2=scope();

// let a1=c1()
// let a2=c2()

// // c1(); 
// // c1();
// // c1();
// // c2();

// a1();
// a1();
// a1();
// a2();


function closure(){
    let count=0;
    let a=0;
    function init(){
    count+=2
    console.log(count)
    }
    function inc(){
   a+=1;
   console.log(a)
    }
    return { init,   inc}
  
}

let aa=closure();
// aa.inc()
// var greet;
// greet(); // ❌ undefined()
// greet = function() { console.log("Hi!"); };


// console.log(typeof myFunc,);

// function myFunc() {
//   console.log("Function");
// }

// var myFunc = 10;

// function test() {
//   console.log("One");
// }
// function test() {
//   console.log("Two");
// }

// test();

// const person = {
//   name: "Alex",
//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
// };
// person.greet(); // Hello Alex
// function sayHello() {
//   console.log(this);
// }
// sayHello();

person={
    name:"Alex",
    greet:()=>{ console.log(`hello ${this.name}`)},
    greet2(){ console.log(`hello ${this.name}`)}
}

// person.greet()
// const greetCopy = person.greet2.bind(person);
// greetCopy(); // Hello Alex


const test={
name:"test",
hobbies:["A","B"],
share(){
  this.hobbies.forEach(n=>{
console.log(`${this.name} like ${n}`)
  })
}

}

// test.share()

// const jhh={
//     name:"hsjh",
//     greet(){
//       const hdfkk=()=>{console.log(this.name)}
//       return hdfkk
//     }
// }
// const hjh=jhh.greet()
// hjh()
// let obj = { 
//   name: "John", 
//   address: { city: "NY" } 
// };

// // Shallow copy
// let shallow = { ...obj };

// // Deep copy
// let deep = JSON.parse(JSON.stringify(obj));

// obj.address.city = "LA";

// console.log(shallow.address.city); // LA ❌ (linked to original)
// console.log(deep.address.city);    // NY ✅ (independent)
// let obj = { name: "John", info: { age: 25 } };
// let copy = { ...obj };
// obj.info.age = 40;

// console.log(copy.info.age); // 40 ❌



// let arr=[1,2,3,4];
// let ans=arr.map(i=>i+2)
// // ans.forEach(i=>console.log(i))
// let even=arr.filter(i=>(i%2)!=0)
// // even.forEach(i=>console.log(i))
// let sum= arr.reduce((a,c)=>a+c,0)
// console.log(sum)

let str="hellouuyy";
// function a(str){
// let res="";
// for(let i=str.length-1;i>=0;i--){
//     res+=str[i]
// }
// return res;
// }
// // console.log(a(str))
// console.log(str.split('').reverse().join(''))

// function acc(str){
// return str.split('').reduce((a,v)=>{
//     a[v]=(a[v] || 0)+1
//     return a;
// },{})
// }

// function hh(ss){
// let res={};
// for(let i=0;i<ss.length;i++)
// {
//     let ch=ss[i];
//     if(res[ch]){
//         res[ch]++
//     }else{
// res[ch]=1
//     }
// }
// return res
// }
//  console.log(hh("dskjhs"))

// const person = { name: 'Alex', age: 25, city: 'Delhi' };
// const { name, ...rest } = person;
// console.log(rest);
// console.log([] == ![]); // ?
// console.log(null == undefined); // ?
// console.log(0 == '0'); // ?

const person2 = { name: "Alex", age: 25, city: "Delhi" };

const { name, ...rest } = person2;

console.log(name);
console.log(rest);
console.log(person2);



