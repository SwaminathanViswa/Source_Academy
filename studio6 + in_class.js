// Studio 6
// Q1
function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y), null, xs);
}
// my_map(x => x + 1, list(1, 2, 3));

function my_map_2(f, xs) {
    return accumulate((x,y) => append(list(f(x)), y), null, xs);
}
// my_map_2(x => x + 1, list(1, 2, 3));

// Q2
// function remove_duplicates(lst) {
//     // filter(pred, xs)
//     // pred will ONLY take in 1 argument
//     // return filter((x, y) => x !== y, lst);
//     return is_null(lst)
//         ? null
//         : pair(head(lst), remove_duplicates(
//             filter(x => !equal(x, head(lst)) ,tail(lst)))
//             );
// }

// remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// return list(1, 2, 3, 4)
// remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));
// remove_duplicates(list(list(1, 2), list(1, 2)));
// list(list(1,2))

// function remove_duplicates_2(lst) {
//     function checkDuplicate(item, dupelist){
//         if (dupelist === is_null){
//             const dupe_list = append(list(item), dupelist);
//             return checkDuplicate(head(tail(lst)), dupe_list);
//         }
//         else if (item === head(dupelist)){
//             return false;
            
//         }
//         else if (item === null){
//             return true;
//         }
//         else {
//             return checkDuplicate(item, tail(dupelist));
//         }
//     }
//     return filter(checkDuplicate(item, null), lst);
// }


// Q3
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
        // display(combi_A, "combi_A");
        
        // Combinations that do not use the head coin 
        // for the remaining amount.
        const combi_B = makeup_amount(x - head(coins), tail(coins));
        // display(combi_B, "combi_B");
        
        // Combinations that use the head coin.
        const combi_C = map(c => pair(head(coins), c), combi_B);
        // display(combi_C, "combi_C");
        // display("");
        
        return append(combi_A, combi_C);
    }
}
// makeup_amount(5, list(1, 10, 5, 4));
// makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
//              list(1, 20, 1), list(1, 10, 5, 5, 1), 
//              list(1, 10, 5, 1, 5))

/********** IN CLASS SHEET **********/
// q1 remove_duplicates with accumulate
function remove_duplicates(lst) {
    return accumulate(
            (x, y) => is_null(member(x, y)) ? pair(x, y) : y,
            null,
            lst
        );
}


// remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// return list(1, 2, 3, 4)
// remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));

// q2
function subsets(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        const combi_A = subsets(tail(xs));
    
        const combi_C = map(x => pair(head(xs), x), combi_A);
        
        return append(combi_C, combi_A);
    }
}
// subsets(list(1, 2, 3));
// alternative solution using accumulate
function subsets_2(xs){
    return accumulate(
        (x, ys) => append(ys, map(s => pair(x, s), ys)),
        list(null),
        xs);    
}

// q3
function permutations(s) {
    return is_null(s)
        ? list(null)
        : accumulate(
            append,
            null,
            map(x =>
                map(p => pair(x, p), permutations(remove(x, s)))
                ,s)
            );
}

permutations(list(1, 2, 3));














