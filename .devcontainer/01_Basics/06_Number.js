const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));

const newnum = 234.5332;
console.log(newnum.toPrecision(3));
console.log(newnum.toPrecision(4));
console.log(newnum.toPrecision(2));

const num = 1000000;
console.log(num.toLocaleString());
console.log(num.toLocaleString('en-IN'));

// ++++++++ MATH ++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6)); //simple maths wala
console.log(Math.ceil(4.2)); // zara sa bhi jyada to high wala
console.log(Math.floor(4.6)); // choote wala
console.log(Math.min(3,6,2,6,7));
console.log(Math.max(3,6,2,6,7));
console.log(Math.random()); // 0-1 value aaygi hamesha
console.log(Math.random()*10); 
console.log(Math.floor(Math.random()*10) +1); // 1 s above value dega

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min +1)) + min);

