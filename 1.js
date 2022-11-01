const X = prompt("Введите значение X: ");
const result = +X;

if (isNaN(result)) { // проверка на NaN
    console.log("Упс, кажется, вы ошиблись");
} else if  (typeof result === "number") { // проверка на тип number
    if (result % 2 == 0) { // четное число
        console.log("X - четное число");
    } else { // нечетное число
        console.log("X - нечетное число");
    };
} 