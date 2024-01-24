const container = document.querySelector(".container");
container.style.display = 'none';

//Declaration for game
const words = ["capcipcupcepcop", "kincirangin", "kapalkecil", "technofest", "stiki2024", "dkvolution", "badebombum", "hadohhaihehe"];
const morseCode = {
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----"
};


//Script for the game
// Get random word
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Get morse code for a word
function getMorseCode(word) {
    let morseCodeArr = [];
    for (let i = 0; i < word.length; i++) {
        if (morseCode[word[i]]) {
            morseCodeArr.push(morseCode[word[i]]);
        }
    }
    return morseCodeArr.join(" ");
}


// Check if the user's input is correct
function checkAnswer(input, answer) {
    return input.trim() === answer.trim();
}

// Update the DOM
function updateDOM(result) {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = result;
}

// Generate a random word and set it in the DOM
let word = getRandomWord();
let wordElement = document.getElementById("word");
wordElement.innerHTML = word;

// Get the answer
let answer = getMorseCode(word);

// When the user clicks the button
let submitButton = document.getElementById("submit");
let hasil = document.querySelector(".game");
let valuehasil = document.createElement("p");

submitButton.addEventListener("click", function() {
    // Get the user's input
    let input = document.getElementById("input").value;
    // Check the answer
    let isCorrect = checkAnswer(input, answer);
    // Update the DOM with the result
    if (isCorrect) {
        valuehasil.classList.add("valuehasilbenar"); 
        valuehasil.textContent = "Jawaban anda benar! Selamatttt";
        hasil.appendChild(valuehasil);
        // Menunda reload selama 5 detik
        setTimeout(function() {
            location.reload();
            location.reload();
        }, 4000);
    } else {
        valuehasil.classList.add("valuehasilsalah"); 
        valuehasil.textContent = "Jawaban anda masih salah ni sam! coba cek lagi";
        hasil.appendChild(valuehasil);
    }
});


//Declaration for timer
const time_el = document.querySelector('.watch .time');
const watchBox = document.querySelector('.watch');
const start_btn = document.getElementById('#start');
const stop_btn = document.getElementById('#stop');
//Script for the timer
//Event listener

let seconds = 90;
let interval = null;
//Update the timer
function timer(){
    seconds--;

    //Formatting the timer
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    if(secs < 10){
        secs = '0' + secs;

    }

    if(mins < 10){
        mins = '0' + mins;
    }

    if(seconds <= 10 && seconds % 2 == 0) {
        watchBox.style.backgroundColor = 'red';
    }else if(seconds <= 10 && seconds % 2 != 0) {
        watchBox.style.backgroundColor = '#0066ffff';
    }
    
    if(seconds === 0){
        clearInterval(interval);
        interval = null;
        alert('Game is over')
        location.reload();
    }
    

    time_el.innerText = `${mins}:${secs}`;
};


//Declaration for mainmenu
const gas_btn = document.querySelector('.gas');
const main_page = document.querySelector('.mainmenu');
const all_page = document.querySelector('.container')

//Script for mainmenu
function gas(){
    main_page.style.display = 'none';
    all_page.style.display = 'flex';

    if(interval){
        return
    }
    interval = setInterval(timer, 1000);
}
