function number_of_positions_front_back(mat, pos) {
    let col_pos = 0;
    for (let i = 0; i < array_length(mat); i = i + 1) {
        if (i === head(pos)) {
            continue;
        } else {
            col_pos = col_pos + 1;
        }
    }
    let row_pos = 0;
    for (let j = 0; j < array_length(mat[0]); j = j + 1) {
        if (j === tail(pos)) {
            continue;
        } else {
            row_pos = row_pos + 1;
        }
    }
    let total_spaces = row_pos + col_pos;
    return total_spaces;
}


function number_of_positions_sideways(mat, pos) {

    // there are 4 directions in which a bishop can move. 
    // if the head(pos) (i.e. the row) is 0, then the bishop can 
    // only move x + 1
    // if the head(pos) (i.e. the row) is the last row (array_length(mat) - 1), 
    // then the bishop can only move x - 1 direction. 
    const row = head(pos) + 1;
    const col = tail(pos) + 1;
    let rt = 0;
    let rb = 0;
    let lt = 0;
    let lb = 0;
    
    if(row < 1 || row > array_length(mat)) {
        return 0;
    } 
    if(col < 1 || col > array_length(mat)) {
        return 0;
    }
    
    if(math_min(row, array_length(mat) + 1 - col) === 0) {rt = 0; } else {rt = math_min(row, array_length(mat) + 1 - col)- 1;}
    rb = array_length(mat) - math_max(row, col);
    if(math_min(row, col) === 0) {lt = 0; } else {lt = math_min(row, col) - 1; }
    lb = array_length(mat) - math_max(row, array_length(mat) + 1 - col);
    
    return rt + rb + lt + lb;
    
}

function positions_queen_can_move (mat, pos) {
    display(number_of_positions_sideways(mat, pos));
    return number_of_positions_sideways(mat, pos) + number_of_positions_front_back(mat, pos);
}

const chessboard = [[0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0]];
                   
// number_of_positions_front_back(chessboard, pair(4,4)); // should return 14
// number_of_positions_front_back(chessboard, pair(5,0)); // should return 14
// number_of_positions_sideways(chessboard, pair(1, 7)); // should return 7
// positions_queen_can_move(chessboard, pair(2, 7));


// There is an 8*8 chessboard and two chess players having a single pawn each. 
// A player has to move his pawn in each turn, either one step forward or one step diagonally only when this move kills the other pawn. 
// The player who is unable to make any move loses. 
// Given row and column numbers of white and black pawns. 
// The task is to predict who would win assuming both plays optimally. 
// Note that White plays first and a pawn cannot move outside the chessboard.
// Function that returns true if white wins
function whiteWins(rowW , colW , rowB , colB) {
    let white = 0;
    let black = 0;
    let flag = true;

    while (flag) {

        // If white can move
        if (rowW !== 8) {

            // If white pawn can kill black pawn
            // White wins
            if (rowB === rowW + 1 && 
            (colB === colW - 1 || colB === colW + 1)) {
                return true;
            }
            // Make the move forward
            else {
                rowW = rowW + 1;
            }
        }

        // White has no moves
        // White loses
        else {
            return false;
        }
        // If black can move
        if (rowB !== 1) {

            // If black pawn can kill white pawn
            // White loses
            if (rowB === rowW + 1 && 
            (colB === colW - 1 || colB === colW + 1)) {
                return false;
            }
            // Make the move forward
            else {
                rowB = rowB - 1;
            }
        }

        // Black has no moves
        // White wins
        else {
            return true;
        }
    }

    // If white has got more moves
    if (white > black) {
        return true;
    }
    
    return false;
}

// whiteWins(2,2,3,3);



// Given integers i, j, k and n where (i, j) is the initial position of the Knight 
// on a n * n chessboard, the task is to find the number of positions the Knight can 
// move to in exactly k moves.

// function that will be called recursively
function recursive_solve(i, j, steps, n, m)
{
    // If there's no more move to make and
    // this position hasn't been visited before
    if (steps === 0 && m[i][j] === 0) {

        // mark the position
        m[i][j] = 1;

        // increase the count       
        return 1;
    }

    let res = 0;

    if (steps > 0) {

        // valid movements for the knight
        let dx = [ -2, -1, 1, 2, -2, -1, 1, 2 ];
        let dy = [ -1, -2, -2, -1, 1, 2, 2, 1 ];

        // find all the possible positions
        // where knight can move from i, j
        for (let k = 0; k < 8; k = k + 1) {

            // if the positions lies within the
            // chessboard
            if ((dx[k] + i) >= 0
                && (dx[k] + i) <= n - 1
                && (dy[k] + j) >= 0
                && (dy[k] + j) <= n - 1) {

                // call the function with k-1 moves left
                res = res + recursive_solve(dx[k] + i, dy[k] + j,
                                       steps - 1, n, m);
            }
        }
    }
    return res;
}

// find all the positions where the knight can
// move after k steps
function solve(i, j, steps, n)
{
    let m = chessboard;
    return recursive_solve(i, j, steps, n, m);
}

// solve(5, 5, 1, 10);



