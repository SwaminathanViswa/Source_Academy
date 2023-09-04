function pascal(row, pos) {
    return (pos === 0 || row === pos)
        ? 1
        : pascal(row - 1, pos) + pascal(row - 1, pos - 1);
}

// Q1
// 1 and 1

// Q2
// We call Number-Transformation, NT.
// (NT, NT) -> 
function compose(f, g) {
    return x => f(g(x));
}

// function thrice(f) {
//     return compose(compose(f, f), f);
// }

// thrice(math_sqrt)(256);
// ===subtitution model below===
// compose(compose(sqrt, sqrt), sqrt)(256);
// compose(x => sqrt(sqrt(x)), sqrt)(256);
// (X => (x => sqrt(sqrt(x)))(sqrt(X)))(256);

// Q3
function repeated(f, n) {
    return n === 0
        ? x => x
        : compose(f, repeated(f, n - 1));
}

// Implement `thrice` using `repeated`.
const thrice = f => repeated(f, 3);

// let us first look at the example they give.
display("first");
display((repeated(math_sin, 5))(3.1));
display("second");
display(math_sin(math_sin(math_sin(math_sin(math_sin(3.1))))));

// What is the result of `thrice(thrice)(x => x + 1)(0)`.
// thrice(thrice(thrice(f)))
// thrice(f => repeated(f, 3))(x => x + 1)(0);
// Y = (f => repeated(f, 3))
// Y => repeated(Y, 3)(x => x + 1)(0);
// 27

// Q4
const square = x => x * x;
const add1 = x => x + 1;

// a. ((thrice(thrice))(add1))(6);
// Similar concept to Q3 = 33

// b. ((thrice(thrice))(x => x))(compose);
// compose

// c. ((thrice(thrice))(square))(1);
// 1

// d. ((thrice(thrice))(square))(2);
// 2 ^ 2 ^ 27
// NOT 2 ^ 27




