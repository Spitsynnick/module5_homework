let array1 = [1, 2, 3, 4, 5, 6, "string", undefined];

let odd = 0; // переменная для количества нечетных элементов
let even = 0; // переменная для количества четных элементов
for (let i = 1; i < array1.length; i++) {// в цикле проверить остаток от деления индекса элемента на 2
  if (i % 2 != 0) { 
    odd++;    
  } else {
    even++;
  }
};

console.log("Количество нечетных элементов: " + odd + ". Количество четных элементов: " 
           + even + ". Нулевой элемент массива: " + array1[0] + ".");
