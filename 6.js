let array1 = [2, 2, 2, 2];

for (let i = 0; i < array1.length - 1; i++) { // в цикле проверить, чтобы каждый элемент массива был равен следующему, и результат вывести в консоль
  if (array1[i] != array1[i+1]) {
    result = false;
  } else {
    result = true;
  }
};

console.log(result);
