let X; // переменная, которая может принимать любое значение

switch (typeof X) { // проверка на тип данных
    case ("number"):
        console.log("X - число");
        break;
    case ("string"):
        console.log("X - строка");
        break;
    case ("boolean"):
        console.log("X - логический тип");
        break;
    default: 
        console.log("Тип X не определён");
};
   