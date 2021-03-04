
const wins = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,6],
]

// make an array of all the cell objects
const cells = Array.prototype.slice.call(document.querySelectorAll('[data-cell]'))

console.log(cells)

gamestart();


// majic
function clicked(played) {
    if (turn == "x" && gameon) {
        played.target.innerHTML = "<h1> X </h1>";
        turn = "o";
        xpieces.push(Number(played.target.id));
        if (checkwin(xpieces)) {
            winner("X");
        }
    }
    else if (turn == "o" && gameon) {
        played.target.innerHTML = "<h1> O </h1>";
        turn = "x";
        opieces.push(Number(played.target.id));
        if (checkwin(opieces)) {
            winner("O");
        }
    }
}

// function to start/restart the game
function gamestart() {
    // beginning turn
    turn = "x";
    // the id's of where the x's and o's are
    xpieces = [];
    opieces = [];
    gameon = true;
    cells.forEach(function(cell) {
        cell.innerHTML = "";
    });
    // add the event listener for each cell
    cells.forEach(cell => cell.addEventListener("click", clicked, {once : true}));
    // delete the win
    document.getElementById("win").innerHTML = "";
}

// checks if a piece has won
function checkwin(piecelist) {
    for (let i = 0; i < wins.length; i++) {
        let count = 0;
        for (let j = 0; j < piecelist.length; j++) {
            if (wins[i].includes(piecelist[j])) {
                count++;
            }
            if (count == 3) {
                console.log("win");
                return true;
            }
        }
    }
}

// does the winning
function winner(yup) {
    gameon = false;
    document.getElementById("win").innerHTML = "<h3> " + yup + " Wins </h3>";
}

// restart
document.getElementById("restart").addEventListener("click", gamestart);