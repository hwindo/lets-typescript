function combine( input1: number | string, input2: number | string ) {
    // ts only know parameter is multiple / union
    // but not look inside it
    // so when + input, resulting problem error
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    
    return result;
}

const combinedAges = combine(20, 16);

const combinedNames = combine("Herwindo", "Artono")

console.log(combinedAges)
console.log(combinedNames);

// type literal
function combineWithLiteral( 
    input1: number | string, 
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
) {
    // code
}

// use type
type Combinable = number | string;
type conversionDescriptor = 'as-number' | 'as-text';

function combineWithNewType(
    input: Combinable,
    input2: Combinable
) {
    // code
}