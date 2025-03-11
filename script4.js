
function greetPeople(full_name , language){
    switch(language){
        case 'hindi':
            console.log(`namaskar ${full_name}`);
            break;
        case 'tamil':
            console.log(`vanakkam ${full_name}`);
            break;
        case 'english':
            console.log(`welcome ${full_name}`);
            break;
        case 'kannada':
            console.log(`namaskara ${full_name}`);
            break;
        default:
            console.log("I don't know your language!!!");
    }
}

greetPeople('graflord', 'tamil');

function degC2Fahrenheit(temp){
    return temp + 32;
}
let temp = 20;
let result = degC2Fahrenheit(temp);

console.log(`${temp} degree Celcius converted to Fahrenheit ${result}F`);




function calc(i,j, fn){
    return fn(i, j );
}

result = calc(20, 30, function (a,b) { return a + b; });

console.log(result);


result = calc(20, 30,(a,b) => { return a + b; });

console.log(result);

