// 79. Word Search
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
// Output: true
let board = [["C","A","A"],["A","A","A"],["B","C","D"]],
  word = "AAB";
function wordSearch() {
    const rowL = board.length;
    const colL = board[0].length;
    // Need to check four adjacent axis
    function checkIfAdjacent(x, y, index) {
        if (word.length === index) {
            return true
        }
        if (x < 0 || y < 0 || x >= rowL || y >= colL || board[x][y] !== word[index]
        || board[x][y] == "visited") {
            return false;
        }
        let retainValue = board[x][y];
        board[x][y] = "visited";

        let res = checkIfAdjacent(x, y + 1, index + 1) || checkIfAdjacent(x, y - 1, index + 1)
            || checkIfAdjacent(x + 1, y, index + 1) || checkIfAdjacent(x - 1, y, index + 1);
        board[x][y] = retainValue;
        return res;
    }
    for (let i = 0; i < rowL; i++) {
        for (let j = 0; j < colL; j++) {
            if (checkIfAdjacent(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}

console.log(wordSearch());
