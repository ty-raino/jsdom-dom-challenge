const counter = document.querySelector('#counter');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const heartBtn = document.querySelector('#heart');
const likes = document.querySelector('.likes')
const likedNumber = {};


// manually increment using plus button
// manually decrement using minus button
function incrementTimer() {
    const currentNumber = counter.innerText
    counter.innerHTML = parseInt(currentNumber) + 1;
};

function decrementTimer() {
    const currentNumber = counter.innerText
    counter.innerHTML = parseInt(currentNumber) - 1;
}

function autoIncrement() {
    setInterval(incrementTimer , 1000)
};

function likeNumber() {
    const currentNumber = counter.innerText;

    if (likedNumber[currentNumber]) {
        likedNumber[currentNumber] += 1;
        document.getElementById(currentNumber).innerText = `${currentNumber} has been liked ${likedNumber[currentNumber]} times!`
    } else {
        likedNumber[currentNumber] = 1
        likes.innerHTML += `<li id=${currentNumber}>${currentNumber} has been liked ${likedNumber[currentNumber]} times!</li>`
    };

    // boolean paused variable
   
}

plusBtn.addEventListener('click', incrementTimer);
minusBtn.addEventListener('click', decrementTimer);

heartBtn.addEventListener('click', likeNumber)

// autoIncrement();



//  like an individual num on counter

// setTimeout
// setInterval
// clearinterval