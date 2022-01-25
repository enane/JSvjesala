const questions = [
    {
        topic: "Pogodite grad u Crnoj Gori",
        words: [
            "podgorica",
            "budva",
            "bar",
            "kolašin",
            "danilovgrad",
            "tivat",
            "kotor"
        ]
    },
    {
        topic: "Pogodite programski jezik",
        words: [
            "javascript",
            "php",
            "cpp",
            "csharp",
            "kotlin"
        ]
    }
];
const letters = ['a', 'b', 'c', 'č', 'ć', 'd', 'dž', 'đ', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'lj', 'm', 'n', 'nj', 'o', 'p', 'r', 's', 'š', 't', 'u', 'v', 'z', 'ž'];

let keyboard = document.getElementById('keyboard')
let mistakes = 0;
let maxMistakes = 6;
let answer = '';
let wordToGuess = null

function fillKeyboard() {
    letters.forEach((letter) => {
        let slovo = letter.toUpperCase();
        if(slovo.length>1) slovo=slovo.charAt(0).toUpperCase()+slovo.charAt(1).toLowerCase()
        keyboard.innerHTML += `<buutton class="btn btn-primary m-2 letter" onclick="pickLetter('${letter}', this)">${slovo}</buutton>`
    })
    pickRandomWord();
}

function displayWordToGuess(){
    let result = ''
    for(let i = 0; i < wordToGuess.length; i++) result+=" __ "
    document.getElementById('wordToGuess').innerHTML+= result;
}

function pickRandomWord(){
    let question = questions[Math.floor(Math.random()*questions.length)];
    document.getElementById('topicName').innerHTML = question.topic;
    let words = question.words;
    wordToGuess = words[Math.floor(Math.random()*words.length)];
    // document.getElementById('wordToGuess').innerHTML = word;
    displayWordToGuess();
}

let rez = ''
function pickLetter(letter, button){
    if(wordToGuess.includes(letter)){
        rez += letter
        console.log(rez)
        console.log()
        if(rez == wordToGuess){
            let success = `<div class="alert alert-success mt-5" role="alert">
                    <b>Congrats!</b> 
                  </div>`
            let buttons = document.getElementsByClassName('letter')
            for(let i = 0; i < buttons.length; i++){
                buttons[i].classList.add('disabled')
            }
            document.getElementById('gameResult').innerHTML = success;
            return
        }
    }
    else{
        button.classList.add('disabled')
        mistakes++;
        document.getElementById('gameImage').setAttribute('src', `/img/${mistakes}.png`);
        if(mistakes == 6) endGame();
        document.getElementById('mistakeNum').innerHTML = mistakes;
        console.log(button)
    }
}

function endGame(){
    let failed = `<div class="alert alert-danger mt-5" role="alert">
                    <b>Fail!</b> The word was <em>${wordToGuess}</em>.
                  </div>`
    document.getElementById('gameResult').innerHTML = failed;
    let buttons = document.getElementsByClassName('letter')
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.add('disabled')
    }
}

fillKeyboard();