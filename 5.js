// программа выводит количество элементов массива, затем перебирает его и выводит в консоль каждый элемент
const array1 = [1, 2, 3, true, "string"];

console.log("Количество элементов массива: " + array1.length); 

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
};