function add_streams(s1, s2) { return is_null(s1)

? s2
: is_null(s2)
    ? s1
    : pair(head(s1) + head(s2),
           () => add_streams(stream_tail(s1),
                             stream_tail(s2)));
                             }

function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}

// alt-ones

// function declaration
function alt_ones() {
    return pair(1, 
                () => pair(-1, 
                            () => alt_ones()));
}
// declare as a constant
const alternating_ones = pair(1, () => pair(-1, () => alternating_ones));

const alt_ones2 = pair(1, () => stream_map(x => -x, alt_ones2));
const alt_ones3 = pair(1, () => scale_stream(-1, alt_ones3));

// zeros
function zeros() {
    return scale_stream(0, alt_ones());
}

function zeros2() {
    return stream_map(x => 0, alt_ones3);
}

function zeros3() {
    return add_streams(alt_ones3, stream_tail(alt_ones3));
}

// s1
// const s1 = ones_stream
// const s1 = stream_map(x => 1, ...)
const s1 = fun_to_series(x => 1);

// s2
const s2 = fun_to_series(x => x + 1);
const ones = pair(1, () => ones);
const s2 = pair(1, () => add_streams(ones, s2));














