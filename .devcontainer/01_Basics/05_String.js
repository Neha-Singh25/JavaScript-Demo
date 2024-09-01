console.log("Neha");
const name = "Neha";
const num = 50;
console.log(`your name is ${name} and ${num} is that`);

const newname = new String("neha-singh-317");
console.log(newname[2]);
console.log(newname.__proto__);
console.log(newname.length);
console.log(newname.toUpperCase());
console.log(newname.charAt(2));
console.log(newname.indexOf('a'));
// console.log(newname.);
const newstr = newname.substring(0,4);
console.log(newstr);
const newstr1 = newname.substring(-1,4);
console.log(newstr1);
const newstr2 = "     hhkwhkw       ";
console.log(newstr2);
console.log(newstr2.trim());
const url ="https://hih.com/kshf%898hjj"
console.log(url.replace('%898', '_'));
console.log(url.includes('neha'));
console.log(newname.split('-'));

