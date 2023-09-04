function pascal(row, pos) {
    return (pos === 0 || row === pos)
        ? 1
        : pascal(row - 1, pos) + pascal(row - 1, pos - 1);
}

// Q1
// 1 and 1

// Q2
// We call Number-Transformation, NT.
// (NT, NT) -> NT
function compose(f, g) {
    return x => f(g(x));
}