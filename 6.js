let array1 = [2, 2, 2, 2];
for (let i = 0; i < array1.length - 1; i++) {
  if (array1[i] != array1[i+1]) {
    result = false;
  } else {
    result = true;
  }
};
console.log(result);
