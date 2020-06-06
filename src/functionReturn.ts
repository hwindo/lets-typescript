function add(n1:number, n2: number):number {
    return n1 + n2;
}

function printResult(num: number) {
    console.log("result: " + num);
}

printResult(1);


// pointing
let combinedValues: (a: number, b: number) => number;

combinedValues = add;

// let combinedValues;
// if not typed its type, will become any
// and can be assigned to any value
// combinedValues = 5 // this will throw error
// so change to let combinedValues: Function;

// but it is not using function type
// so this can happen
// combinedValues = printResult;

// so
// use function type
// let combinedValues: (a: number, b: number) => number;
// now, we can't
// combinedValues = printResult // this wil throw error

console.log('combinedValues:', combinedValues(1, 2));


// FUNCTION TYPES AND CALLBACKS
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

addAndHandle(1, 2, (num) => {
    console.log(num);
});