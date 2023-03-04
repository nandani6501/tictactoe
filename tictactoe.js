function winner() {
    let nandanib1 = document.getElementById("b1").innerText;
    let nandanib2 = document.getElementById("b2").innerText;
    let nandanib3 = document.getElementById("b3").innerText;
    let nandanib4 = document.getElementById("b4").innerText;
    let nandanib5 = document.getElementById("b5").innerText;
    let nandanib6 = document.getElementById("b6").innerText;
    let nandanib7 = document.getElementById("b7").innerText;
    let nandanib8 = document.getElementById("b8").innerText;
    let nandanib9 = document.getElementById("b9").innerText;

    if (
        (nandanib1 == 'X' && nandanib2 == 'X' && nandanib3 == 'X') ||
        (nandanib1 == 'X' && nandanib4 == 'X' && nandanib7 == 'X') || (nandanib4 == 'X' && nandanib5 == 'X' && nandanib6 == 'X') || (nandanib7 == 'X' && nandanib8 == 'X' && nandanib9 == 'X') || (nandanib2 == 'X' && nandanib5 == 'X' && nandanib8 == 'X') || (nandanib3 == 'X' && nandanib6 == 'X' && nandanib9 == 'X') || (nandanib1 == 'X' && nandanib5 == 'X' && nandanib9 == 'X') || (nandanib3 == 'X' && nandanib5 == 'X' && nandanib7 == 'X')
    ) {

        alert("X is a winner!");
        location.replace("./tictactoe.html");
        location.reload();
     

    }

    if (
        (nandanib1 == 'O' && nandanib2 == 'O' && nandanib3 == 'O') ||
        (nandanib1 == 'O' && nandanib4 == 'O' && nandanib7 == 'O') || (nandanib4 == 'O' && nandanib5 == 'O' && nandanib6 == 'O') || (nandanib7 == 'O' && nandanib8 == 'O' && nandanib9 == 'O') || (nandanib2 == 'O' && nandanib5 == 'O' && nandanib8 == 'O') || (nandanib3 == 'O' && nandanib6 == 'O' && nandanib9 == 'O') || (nandanib1 == 'O' && nandanib5 == 'O' && nandanib9 == 'O') || (nandanib3 == 'O' && nandanib5 == 'O' && nandanib7 == 'O')
    ) {
        alert("O is a winner!");
        location.replace("./tictactoe.html");
    }

    if ((nandanib1 == 'X' || nandanib1 == 'O') && (nandanib2 == 'X' || nandanib2 == 'O') && (nandanib3 == 'X' || nandanib3 == 'O') && (nandanib4 == 'X' || nandanib4 == 'O') && (nandanib5 == 'X' || nandanib5 == 'O') && (nandanib6 == 'X' || nandanib6 == 'O') && (nandanib7 == 'X' || nandanib7 == 'O') && (nandanib8 == 'X' || nandanib8 == 'O') && (nandanib9 == 'X' || nandanib9 == 'O')) {
        alert("Draw!!!");
        location.replace("./tictactoe.html");
    }
}

let nandani_flag = 1;

function click1() {

    if (nandani_flag == 1) {
        document.getElementById("b1").innerText = "X";
        document.getElementById("o").style.color = "red";
        document.getElementById("x").style.color = "black";
        document.getElementById("b1").classList.add("disable");
        nandani_flag = 0;
        winner();
    }

    else {
        document.getElementById("b1").innerText = "O";
        document.getElementById("x").style.color = "red";
        document.getElementById("o").style.color = "black";
        document.getElementById("b1").classList.add("disable");
        nandani_flag = 1;
        winner();
    }
}

function click2() {

    if (nandani_flag == 1) {
        document.getElementById("b2").innerText = "X";
        document.getElementById("o").style.color = "red";
        document.getElementById("x").style.color = "black";
        document.getElementById("b2").classList.add("disable");
        nandani_flag = 0;
        winner();
    }

    else {
        document.getElementById("b2").innerText = "O";
        document.getElementById("x").style.color = "red";
        document.getElementById("o").style.color = "black";
        document.getElementById("b2").classList.add("disable");
        nandani_flag = 1;
        winner();
    }
}

function click3() {

    if (nandani_flag == 1) {
        document.getElementById("b3").innerText = "X";
        document.getElementById("o").style.color = "red";
        document.getElementById("x").style.color = "black";
        document.getElementById("b3").classList.add("disable");
        nandani_flag = 0;
        winner();
    }

    else {
        document.getElementById("b3").innerText = "O";
        document.getElementById("x").style.color = "red";
        document.getElementById("o").style.color = "black";
        document.getElementById("b3").classList.add("disable");
        nandani_flag = 1;
        winner();
    }
}

function click4() {

    if (nandani_flag == 1) {
        document.getElementById("b4").innerText = "X";
        document.getElementById("o").style.color = "red";
        document.getElementById("x").style.color = "black";
        document.getElementById("b4").classList.add("disable");
        nandani_flag = 0;
        winner();
    }

    else {
        document.getElementById("b4").innerText = "O";
        document.getElementById("x").style.color = "red";
        document.getElementById("o").style.color = "black";
        document.getElementById("b4").classList.add("disable");
        nandani_flag = 1;
        winner();
    }
}

function click5() {

    if (nandani_flag == 1) {
        document.getElementById("b5").innerText = "X";
        document.getElementById("o").style.color = "red";
        document.getElementById("x").style.color = "black";
        document.getElementById("b5").classList.add("disable");
        nandani_flag = 0;
        winner();
    }

    else {
        document.getElementById("b5").innerText = "O";
        document.getElementById("x").style.color = "red";
        document.getElementById("o").style.color = "black";
        document.getElementById("b5").classList.add("disable");
        nandani_flag = 1;
        winner();
    }
}

function click6() {

    if (nandani_flag == 1) {
        document.getElementById("b6").innerText = "X";
        document.getElementById("o").style.color = "red";
        document.getElementById("x").style.color = "black";
        document.getElementById("b6").classList.add("disable");
        nandani_flag = 0;
        winner();
    }

    else {
        document.getElementById("b6").innerText = "O";
        document.getElementById("x").style.color = "red";
        document.getElementById("o").style.color = "black";
        document.getElementById("b6").classList.add("disable");
        nandani_flag = 1;
        winner();
    }
}

function click7() {

    if (nandani_flag == 1) {
        document.getElementById("b7").innerText = "X";
        document.getElementById("o").style.color = "red";
        document.getElementById("x").style.color = "black";
        document.getElementById("b7").classList.add("disable");
        nandani_flag = 0;
        winner();
    }

    else {
        document.getElementById("b7").innerText = "O";
        document.getElementById("x").style.color = "red";
        document.getElementById("o").style.color = "black";
        document.getElementById("b7").classList.add("disable");
        nandani_flag = 1;
        winner();
    }
}

function click8() {

    if (nandani_flag == 1) {
        document.getElementById("b8").innerText = "X";
        document.getElementById("o").style.color = "red";
        document.getElementById("x").style.color = "black";
        document.getElementById("b8").classList.add("disable");
        nandani_flag = 0;
        winner();
    }

    else {
        document.getElementById("b8").innerText = "O";
        document.getElementById("x").style.color = "red";
        document.getElementById("o").style.color = "black";
        document.getElementById("b8").classList.add("disable");
        nandani_flag = 1;
        winner();
    }
}

function click9() {

    if (nandani_flag == 1) {
        document.getElementById("b9").innerText = "X";
        document.getElementById("o").style.color = "red";
        document.getElementById("x").style.color = "black";
        document.getElementById("b9").classList.add("disable");
        nandani_flag = 0;
        winner();
    }

    else {
        document.getElementById("b9").innerText = "O";
        document.getElementById("x").style.color = "red";
        document.getElementById("o").style.color = "black";
        document.getElementById("b9").classList.add("disable");
        nandani_flag = 1;
        winner();
    }
}

function reset() {
    if (confirm("Do you want to reset ?") == true)
        location.replace("./tictactoe.html");
}

