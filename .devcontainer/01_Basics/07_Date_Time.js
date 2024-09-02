// 1 jan 1970
let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toUTCString());

console.log(date.toLocaleDateString());

console.log(date.toLocaleTimeString());

console.log(date.toLocaleString());
console.log(typeof date);
let myowndate = new Date(2022, 1, 25)
console.log(myowndate.toDateString());
let mydate = new Date("01-14-2022")
console.log(mydate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(mydate.getTime()); // comaprision k liye aise use krte hai.
console.log(Math.floor(Date.now()/1000));
 
let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth() + 1);
console.log(newdate.getDay());

console.log(newdate.toLocaleString('default', {
    weekday: "long",
})
);




