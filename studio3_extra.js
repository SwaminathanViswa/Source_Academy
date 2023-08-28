// Q1
function expt(b, n) {
    return n === 0
        ? 1
        : b * expt(b, n-1);
}

// Recursive.
// Time
// Fixed b -> Theta(n)
// Fixed n -> Theta(1)

// Space
// Fixed b -> Theta(n)
// Fixed n ->  Theta(1)

// Q2
// recursive
function fast_expt(b, n) {
    return n === 0
        ? 1
        : is_even(n)
        ? square(fast_expt(b, n/2))
        : b * fast_expt(b, n-1);
}

// iterative
function fast_expt(b, n) {
    return iter(n, b, 1);
}

function iter(exp, base, product) {
    
}