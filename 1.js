// Программа для проверки числа на четность / нечетность
const X = prompt("Введите значение X: ");
const result = +X;

if (isNaN(result)) { 
    console.log("Упс, кажется, вы ошиблись");
} else if  (typeof result === "number") { 
    if (result % 2 == 0) { 
        console.log("X - четное число");
    } else { 
        console.log("X - нечетное число");
    };
}; 