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

function fillKeyboard()
{
    letters.forEach((letter) => {
        let slovo = letter.toUpperCase();
        if(slovo.length>1) slovo=slovo.charAt(0).toUpperCase()+slovo.charAt(1).toLowerCase()
        keyboard.innerHTML += `<buutton class="btn btn-primary m-2" onclick="pickLetter('${letter}')">${slovo}</buutton>`
    })
}

function pickLetter(letter){
}

fillKeyboard();