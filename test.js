const { sum } = require('./app.js');

test('adds 14 + 19 to equal 23', () =>{
    let total = sum(14,9);
    // return total;
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One Dollar should be 167.455 yens", function(){
    const { fromDollarToYen } = require ('./app.js');

    const yen = fromDollarToYen(5);

    const expected = 5 * 167.455;

    expect(fromDollarToYen(5)).toBeCloseTo(837.275, 3)
});

test("One Yen should be 0.005 pounds", function () {
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(500);

    const expected = (500 * 0.005).toFixed(3);

    expect(parseFloat(fromYenToPound(500).toFixed(3))).toBe(2.780);
});
