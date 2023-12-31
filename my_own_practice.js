import {circle, square, blank, heart, ribbon, show, beside, beside_frac, stack, stack_frac} from "rune";


function fractal(rune, n) {
    return n === 1
          ? rune // In the base case, return the identity
          // Stack smaller cases first, then put beside the identity
          : beside(rune,
                    stack(fractal(rune, n - 1),
                          fractal(rune, n - 1))); 
}

// show(fractal(heart, 4));

function vert_fractal(rune,n) {
    return n === 1
        ? heart
        : stack(beside(
                vert_fractal(rune, n-1), 
                vert_fractal(rune, n-1)),
            rune);
}

// show(vert_fractal(heart, 3));

function corner_fractal(rune, n) {
    return n === 1
        ? rune
        : beside(
            vert_fractal(rune, n), 
            stack(
                corner_fractal(rune, n-1), 
                stack(fractal(rune, n-1), fractal(rune, n-1))));
}

// show(corner_fractal(heart, 4));


// Exercise 2: Number of ways to climb a staircase.
// The sequence goes as follows: 1,2,3,5,8... basically its the 
// fibonacci sequence.

function ways_to_climb_steps(n) {
    return n <= 2
        ? n 
        : ways_to_climb_steps(n - 1) + ways_to_climb_steps(n - 2);
}

// ways_to_climb_steps(4);


function moony_1(bottom_right) {
    return beside(stack(circle, square), stack(blank, bottom_right));
}

// show(moony_1(ribbon));

function moony_2(n) {
    return n === 1
        ? circle
        : beside(stack(circle, square), stack(blank, moony_2(n-1)));
}

// show(moony_2(5));

function moony(n) {
    return n === 1
        ? circle
        : beside_frac(1/n,
            stack_frac(1/n, circle, square),
            stack_frac(1/n, blank, moony(n-1)));
}

// show(moony(5));

// function fast_expt(b,n) {
//     return n === 0
//         ? 1
//         : is_even(n)
//         ? squ(fast_expt(b, n/2))
//         : b * fast_expt(b, n-1);
// }

// fast_expt(4,7);

function squ (x) {
    return x *x;
}

function is_even(x) {
    return x % 2 === 0;
}

function fast_expt(b,n) {
    return iter(b,n,1);
}

// The commented code below is not the best case as it doesn't use the formula given.

// function iter(base, power, product) {
//     return power === 1
//         ? product
//         : is_even(power)
//         ? iter(base, power/2, squ(base) * product)
//         : iter(base, power-1, product * base);
// }

function iter(base, power, product) {
    return power === 0
        ? product
        : is_even(power)
        ? iter(base * base, power/2, product)
        : iter(base, power-1, product * base);
}

fast_expt(3,4);


// function fast_expt(b,n) {
//     return iter(n, b, 1);
// }

// function iter(exp, base, product) {
//     return exp === 1
//           ? product
//           : (exp % 2 === 0) 
//           ? iter(exp / 2, base, product * math_pow(base, exp / 2))
//           : base * math_pow(base, exp - 1);
// }

// fast_expt(3,4);

















