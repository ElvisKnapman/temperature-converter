'use strict';

const celsius = document.querySelector('#celsius');
const fahrenheit = document.querySelector('#fahrenheit');

celsius.addEventListener('input', (e) => {
    const result = converter(e.target.value, 'celsius', 'fahrenheit');
    fahrenheit.value = result;
});

fahrenheit.addEventListener('input', (e) => {
    const result = converter(e.target.value, 'fahrenheit', 'celsius');
    celsius.value = result;
});

const converter = (temp, convertFrom, convertTo) => {
    // stops input field from showing NaN when input is removed
    let result = '';
    if (temp === '') {
        return result;
    }

    // convert temp from a string to a number
    temp = parseFloat(temp);

    console.log(`temp is ${temp} of type ${typeof temp}`);
    if (convertFrom === 'celsius' && convertTo === 'fahrenheit') {
        result = temp * (9/5) + 32;
    } else if (convertFrom === 'fahrenheit' && convertTo === 'celsius') {
        result = (temp - 32) * 5/9;
    }

    return result;

};
