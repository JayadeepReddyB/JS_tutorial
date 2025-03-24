// Coding session >> March 18, 2025

// From this file onwards we are connected to events.html

// >> Event handling

// >> Mouse events
// click, doubleclick, mouseover, mouseout


function alertMe() {
    alert("This is an alert from function `alert me` ");
}

function changeButtonBG() {

    const btnclr = document.getElementById('bt1').style;

    if (btnclr.backgroundColor == "lightblue") {
        btnclr.backgroundColor = "white";
    }
    else {
        btnclr.backgroundColor = "lightblue";
    }
}

function changeTDBG() {
    const tds = document.getElementsByTagName('td');
    for (cell of tds) {
        cell.style.backgroundColor = "lightblue";
    }
}

const ball = document.getElementById('ball');

let x = -20, y = -20;

function game(event) {

    if (event.key === 'ArrowUp') y -= 10;
    if (event.key === 'ArrowDown') y += 10;
    if (event.key === 'ArrowLeft') x -= 10;
    if (event.key === 'ArrowRight') x += 10;

    ball.style.transform = `translate(${x}px, ${y}px)`;
    ball.classList.toggle('dark');
    ball.classList.toggle('light');

}

document.addEventListener('keydown', game);

