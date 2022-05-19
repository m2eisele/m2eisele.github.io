function check(u, t) {
    for(var i in t)
        if(u == t[i]) return 1;
    return 0;
}

var dictionary = ["CAT", "SUN", "CUP", "GHOST", "FLOWER", "PIE", "COW", "BANANA", 
                  "SUSPECT", "BUG", "BOOK", "JAR", "SNAKE", "LIGHT", "TREE", 
                  "LIPS", "APPLE", "SLIDE", "SOCKS", "SMILE"];
var tried = [];
var lives = 6;
var flag = 0;

var answer = dictionary[Math.floor(Math.random() * 20)];
var answerRemain = answer.length;
var outWord = [];

for(var i in answer)
    outWord.push('_');
document.getElementById("word").innerHTML = outWord.join('');

while(answerRemain > 0) {
    var ui = prompt("Enter a letter:").toUpperCase();

    if(check(ui, tried) == 1) {
        window.alert("You already guessed this character.");
    } else if(ui.length == 1) {
        for(var j in answer) {
            if(ui == answer[j]) {
                outWord[j] = answer[j];
                answerRemain--;
                flag = 1;
            }
        }

        tried.push(ui);
        document.getElementById(ui).style.backgroundColor = "navy";

        if(flag == 0) {
            lives--;

            document.getElementById("lives").innerHTML = lives + "<b id='heart'>♥</b>";
            if(lives == 0) {
                alert("All lives lost, you lose. The answer was: " + answer);
                break;
            }
        }
    } else {
        window.alert("Only single characters allowed.");
    }

    document.getElementById("word").innerHTML = outWord.join('');

    flag = 0;
}

if(lives != 0) {
    alert("You win! Congratulations!");
}

window.location.reload();