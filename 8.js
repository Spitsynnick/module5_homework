// программа создает произвольный массив Map, получает его ключи и выводит в консоль все значения
let map1 = new Map(); 

map1.set("something", "string"); 
map1.set(10, "number");
map1.set(false, "boolean");

for (let [key, value] of map1) { 
    console.log(`Ключ - ${key}, значение - ${value}`);
};  
