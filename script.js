
const gamepage = document.querySelector(".gamepage");
const gas_btn = document.querySelector('.btn_homeToGame');
const homepage = document.querySelector('.homepage');
const body = document.querySelector('body');
const dataZulhan = document.querySelector('.fotoku');
const profilpage = document.querySelector('.profilpage');

homepage.style.display = 'flex';
gamepage.style.display = 'none';
profilpage.style.display = 'none';

//Settingan untuk perubahan tampilan di website
//Function untuk memunculkan halaman game
function homeToGame(){
    homepage.style.display = 'none';
    gamepage.style.display = 'flex';
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
    homepage.style.display = 'none';
    profilpage.style.display = 'flex';
    body.style.overflow = 'none';
}

//Function untuk memunculkan kembali ke halaman beranda
function backtohome() {
    dataZulhan.style.display = 'none';
    homepage.style.display = 'flex';
    profilpage.style.display = 'none';
    body.style.overflow = 'none';
}

//
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Script untuk game
const kumpulanKata = [
    "Microprocessor",
    "Motherboard",
    "GraphicsCard",
    "SolidStateDrive",
    "MotherMemory",
    "CentralUnit",
    "PowerSupply",
    "InputOutput",
    "Peripherals",
    "Configuration"
];

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

// Mengambil kata sembarang di array words dan ditampilkan di class word
let kataTerpilih = ambilKataRandom();
let kataRandom = document.getElementById("kataRandom");
kataRandom.innerHTML = kataTerpilih;

// Mengambil jawaban
let answer = ambilKodeMorse(kataTerpilih);

console.log();
console.log(answer);
console.log(kataTerpilih);

// function untuk mengambil kata random dari array kumpulanKata
function ambilKataRandom() {
    return kumpulanKata[Math.floor(Math.random() * kumpulanKata.length)];
}

// function untuk menentukan apa kode morse untuk kata yang didapatkan 
function ambilKodeMorse(kataTerpilih) {
    let morseCodeArr = [];
    for (let i = 0; i < kataTerpilih.length; i++) {
        let lowercaseChar = kataTerpilih[i].toLowerCase(); // Konversi ke huruf kecil
        if (morseCode[lowercaseChar]) {
            morseCodeArr.push(morseCode[lowercaseChar]);
        }
    }
    return morseCodeArr.join(" ");
}


// Function agar user dapat click button untuk periksa jawaban
let btn_submit = document.getElementById("submit");
let hasil = document.querySelector(".gamecontent");
let valuehasil = document.querySelector("#result");

btn_submit.addEventListener("click", function() {
    // Mengambil input user
    let input = document.getElementById("input").value;

    // cek jawaban
    let isCorrect = cekJawaban(input, answer);

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
        valuehasil.textContent = "Jawaban kamu salah, coba periksa kembali :)";
        hasil.appendChild(valuehasil);  
    }
});

// Function untuk cek kebenaran jawaban
function cekJawaban(input, answer) {
    return input.trim() === answer.trim();

}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Settingan waktu -> Di sini apabila ingin mensetting waktu
const time = document.querySelector(".time");
const watchBox = document.querySelector(".watch");
const start_btn = document.getElementById("#start");
const stop_btn = document.getElementById("#stop");

//Script untuk timer
let seconds = 120; // -> ubah bagian ini untuk mengubah batas waktu timer
let interval = null;

function timer(){
    seconds--;

    //Format timer
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;

    if(secs < 10){
        secs = "0" + secs;
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
    
    time.textContent = `${mins}:${secs}`;
};


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


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
        const delay = 90;
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