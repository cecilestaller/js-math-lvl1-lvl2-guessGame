console.log("%c math methods level1_1", "color:tomato");

console.log(Math.PI);
const PI = Math.PI;
console.log(PI);

roundenPI = PI.toFixed(2);
console.log(roundenPI);

// ===================================================
console.log("%c math methods level1_2", "color:tomato");

// AUFGABE: Schreibe eine Funktion, die eine Zahl rundet.

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

const roundTheNumbers = () => {
    array.forEach((num) => {
        // console.log(num);
        console.log(Math.round(num));
    })
}

roundTheNumbers();

// ====================================================
console.log("%c math methods level1_3", "color:tomato");

randomNum = Math.random();
console.log(randomNum);
randomNum1_10 = Math.floor(Math.random() * 11);
console.log(randomNum1_10);
randomNum1_100 = Math.floor(Math.random() * 101);
console.log(randomNum1_100);

// ====================================================
console.log("%c math methods level1_4", "color:tomato");

const numArr = [393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488];

const smallestNum = Math.min(...numArr);
console.log(smallestNum); // 2
const biggestNum = Math.max(...numArr);
console.log(biggestNum);  // 488

// ===================================================
console.log("%c math methods level2_1", "color:tomato");

const roundTo = (zahl, genauigkeit) => {
    const userNum = zahl;
    const userGenauigkeit = userNum.toFixed(genauigkeit);
    return userGenauigkeit
    
}

console.log(roundTo(3.1415926535, 5));
console.log(roundTo(5.9473636484837374, 2));

// ===================================================
console.log("%c math methods level2_2", "color:tomato");

// AUFGABE: - Schreibe ein kleines Spiel/Programm – das wie folgt funktioniert:
// - Das Programm “denkt”  sich eine Zahl zwischen 1-10 mithilfe von Math.Random aus und Du musst sie erraten.
// - Nach Eingabe deiner Zahl sagt dir das Programm (in der Konsole), ob du richtig oder falsch geraten hast.
// Hinweis: In der Ergebnisvorschau wird die Methode prompt() verwendet.

const numberGame = () => {
    const userNumber = Number(document.getElementById('user-input').value);
    // console.log(userNumber);
    const userResult = document.getElementById('result');

    let gameNumber = Math.ceil(Math.random() * 10);
    console.log(gameNumber);
    if(userNumber === gameNumber){
        userResult.textContent = "WELL DONE!! Youe guessed the right Number";
    } else {
        userResult.textContent = `Sorry, you guessed the wrong number :( Thr number is ${gameNumber} `
    }
}

const clearInput = () => {
    const userNumber = document.getElementById('user-input');
    userNumber.value = "";
    const userResult = document.getElementById('result');
    userResult.textContent = "";
}



