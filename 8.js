let map1 = new Map(); // создать объект map

map1.set("something", "string"); // добавить несколько свойств
map1.set(10, "number");
map1.set(false, "boolean");

for (let [key, value] of map1) { // перебрать в цикле и вывести в консоль ключи и значения
    console.log(`Ключ - ${key}, значение - ${value}`);
};  
