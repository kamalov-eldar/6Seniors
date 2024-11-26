// ## Взятие остатка %

console.log("#### Взятие остатка %  ####");

console.log(8.5 % 4);
console.log(8 % 4.1);
console.log(8.2 % 4.1);
console.log(-13 % 5);
console.log(4 % -2);
console.log(-3n % 2n);
console.log(3n % -2n);
//console.log("6n % 2", 6n % 2); // TypeError: Cannot mix BigInt and other types
//console.log("6 % 2n", 6 % 2n); // TypeError: Cannot mix BigInt and other types
console.log("2 % NaN:", 2 % NaN);

console.log("#### возведение в степень **  ####");

console.log("Infinity ** 2: ", Infinity ** 2);
console.log("1 ** Infinity: ", 1 ** Infinity);
console.log("Infinity ** Infinity: ", Infinity ** Infinity);
console.log("NaN ** 2: ", NaN ** 2);
console.log("NaN ** 0: ", NaN ** 0);
console.log("1 ** NaN: ", 1 ** NaN);
console.log("NaN ** NaN: ", NaN ** NaN);
console.log("Infinity ** NaN: ", Infinity ** NaN);
console.log("NaN ** Infinity: ", NaN ** Infinity);
