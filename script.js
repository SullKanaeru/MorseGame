const container = document.querySelector(".container");
container.style.display = 'none';

//Declaration for game
const words = ["capcipcupcepcop", "lambemuilodek", "kapalkecilayah", "technofestasik", "averosfair2024", "janganlupabahagia", "badebombumbimbam", "hahihuhehohau"];
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


//Script untuk game
// function untuk kata random dari array words
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// function untuk menentukan apa kode morse untuk kata yang didapatkan 
function getMorseCode(word) {
    let morseCodeArr = [];
    for (let i = 0; i < word.length; i++) {
        if (morseCode[word[i]]) {
            morseCodeArr.push(morseCode[word[i]]);
        }
    }
    return morseCodeArr.join(" ");
}


// Function untuk cek kebenaran jawaban
function checkAnswer(input, answer) {
    return input.trim() === answer.trim();
}

// Function untuk update DOM
function updateDOM(result) {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = result;
}

// Mengambil kata sembarang di array words dan ditampilkan di class word
let word = getRandomWord();
let wordElement = document.getElementById("word");
wordElement.innerHTML = word;

// Mengambil jawaban
let answer = getMorseCode(word);

// Function agar user dapat click button untuk periksa jawaban
let submitButton = document.getElementById("submit");
let hasil = document.querySelector(".game");
let valuehasil = document.createElement("p");

submitButton.addEventListener("click", function() {
    // Mengambil input user
    let input = document.getElementById("input").value;
    // cek jawaban
    let isCorrect = checkAnswer(input, answer);
    // Update DOM berdasarkan kebenaran jawaban
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


//Settingan waktu -> Di sini apabila ingin mensetting waktu
const time_el = document.querySelector('.watch .time');
const watchBox = document.querySelector('.watch');
const start_btn = document.getElementById('#start');
const stop_btn = document.getElementById('#stop');

//Script untuk timer

let seconds = 120; // -> ubah bagian ini untuk mengubah batas waktu timer
let interval = null;

function timer(){
    seconds--;

    //Format timer
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


//Settingan untuk perubahan tampilan di website
const gas_btn = document.querySelector('.gas');
const main_page = document.querySelector('.mainmenu');
const all_page = document.querySelector('.container');
const body = document.querySelector('body');
const dataZulhan = document.querySelector('.fotoku');
const biodeveloper = document.querySelector('.infoPembuat');


//Function untuk memunculkan halaman game
function gas(){
    main_page.style.display = 'none';
    all_page.style.display = 'flex';
    body.style.overflowY = 'visible';
    body.style.overflowX = 'none';

    if(interval){
        return
    }
    interval = setInterval(timer, 1000);
}

//Function untuk memunculkan halaman profil developer
function portofolioku() {
    dataZulhan.style.display = 'flex';
    main_page.style.display = 'none';
    biodeveloper.style.display = 'flex';
    body.style.overflow = 'none';
}

//Function untuk memunculkan kembali ke halaman beranda
function backtohome() {
    dataZulhan.style.display = 'none';
    main_page.style.display = 'flex';
    biodeveloper.style.display = 'none';
    body.style.overflow = 'none';
}


// Settingan untuk wallpaper bergerak (Rain Code)
let isMouseMoving = false;

function createSymbol(x, y, delay) {
    const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]}|;:,<.>/?`~!@#$%^&*()-_=+[{]}|;:,<.>/?`~';
    const symbol = symbols.charAt(Math.floor(Math.random() * symbols.length));

    const symbolElement = document.createElement('div');
    symbolElement.className = 'symbol';
    symbolElement.textContent = symbol;
    symbolElement.style.left = x + 'px';
    symbolElement.style.top = y + 'px';
    document.body.appendChild(symbolElement);

    setTimeout(() => {
        document.body.removeChild(symbolElement);
    }, 5000);
}

function handleMouseMove(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (!isMouseMoving) {
        const delay = 100;
        createSymbol(mouseX, mouseY, delay);
        isMouseMoving = true;

        setTimeout(() => {
            isMouseMoving = false;
        }, delay);
    }
}

setInterval(() => {
    const delay = 100;
    createSymbol(Math.random() * window.innerWidth, Math.random() * window.innerHeight, delay);
    createSymbol(Math.random() * window.innerWidth, Math.random() * window.innerHeight, delay);
    createSymbol(Math.random() * window.innerWidth, Math.random() * window.innerHeight, delay);
}, 500);

document.addEventListener('mousemove', handleMouseMove);