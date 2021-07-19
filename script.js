score = 0;
cross = true;

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    // UPPER ARROW KEY FOR JUMP

    if (e.keyCode == 38) {
        mike = document.querySelector('.mike');
        mike.classList.add('animateMike');
        setTimeout(() => {
            mike.classList.remove('animateMike')
        }, 700);
    }
    // RIGHT ARROW KEY
    if (e.keyCode == 39) {
        mike = document.querySelector('.mike');
        mikeX = parseInt(window.getComputedStyle(mike, null).getPropertyValue('left'));
        mike.style.left = mikeX + 112 + "px";
    }
    //LEFT ARROW KEY
    if (e.keyCode == 37) {
        mike = document.querySelector('.mike');
        mikeX = parseInt(window.getComputedStyle(mike, null).getPropertyValue('left'));
        mike.style.left = (mikeX - 112) + "px";
    }
}


setInterval(() => {
    mike = document.querySelector('.mike');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    mx = parseInt(window.getComputedStyle(mike, null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(mike, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(mx - ox);
    offsetY = Math.abs(my - oy);
    // console.log(offsetx, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')

    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}

