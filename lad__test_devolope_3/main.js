let getNum = function () {
    number = [];

    while (number.length < 4) {
        let newNum = Math.floor(Math.random() * 10);
        if (number.indexOf(newNum) < 0) {
            number.push(newNum);
        }
    }

    return number;
};

let goal = getNum();

let guess = function () {
    let playersNumber = document.querySelector('#player').value;
    let arr = [];


    for ( i = 0; i < 4; i++) {
        let NewUserArrElement = parseInt(playersNumber.substr(i, 1));
        arr.push(NewUserArrElement);
    }

    check (arr)
};

let check = function (par) { 
    let bulls = 0;
    let cows = 0;

    let turns = parseInt(document.querySelector('.turns').innerHTML);

    for (i = 0; i < 4; i++) {
        if (par[i] == goal[i]) {
            bulls++;
        } else if (goal.indexOf(par[i]) >= 0) {
            cows++;
        }

        
    }

    turns--;
    document.querySelector('.turns').innerHTML = turns;

    if (turns == 0 || bulls = 4) {
        let status = ' loos ';
        if (bulls == 4) {
             status = ' win ';
        }

        endGame(par, turns, status);
    }

    writeTurn(par, bulls, cows );

    
};

let writeTurn = function (par, bulls, cows) {
    let table = document.querySelector('turnslist');
    let newLine = document.createElement('p');
    newLine.innerHTML = '<span class ="guessed">' + par + 'быки: ' + bulls + 'коровы: ' + cows;
    table.appendChild(newLine);
};

let endGame = function (par, turns, status) {
    document.querySelector('.number').innerHTML = goal;
    alert('you' + status + '\r\nзагаданное число: ' + goal);
};

