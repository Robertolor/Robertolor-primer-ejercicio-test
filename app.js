// console.log("Hello World");

const sum = (a,b) =>{
    return a + b
}

// // console.log(sum(7,3))

// module.exports = { sum };

// One euro is:
// let oneEuroIs = {
//     "JPY": 156.5, // japan yen      
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// }


// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// fromDollarToYen

const fromDollarToYen = function(valueInEuro) {
    let valueInYen = ((valueInEuro / 1.07) * 156.5);
    return valueInYen;
};

const fromYenToPound = function (valueInYen) {
    let euro = (valueInYen / 156.5);
    let valueInPound = (euro * 0.87);
    return valueInPound;
};





console.log(fromDollarToYen(1000), fromYenToPound(500))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }