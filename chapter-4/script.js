let user = {
    name: "John",
    age: 30,
    test: undefined,
};

console.log("name" in user); // true
console.log("test" in user); // true

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) {
    clone[key] = user[key];
}

// console.log("clone: ", clone);

clone.name = "Pete"; // изменим в нём данные
// console.log("user.name", user.name);

let fullName = {
    name: "John",
};

let admin = fullName;
fullName = null;
// console.log("admin: ", admin);

let arr = [1, 2, 3, 4];
for (key in arr) {
    // console.log("key: ", key); // 0,1,2,3
}
for (prop of arr) {
    // console.log("prop: ", prop);
}

function isEmpty(obj) {
    for (let key in obj) {
        console.log("key: ", key);

        return false;
    }
    return true;
}

let obj = { value: 1 };

console.log("isEmpty(obj):", isEmpty({})); // true
console.log("isEmpty(obj):", isEmpty({ value: 1 })); // false
