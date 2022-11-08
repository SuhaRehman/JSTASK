str = "aaabbbccccdefg";

words = str.split("");

var obj = [];

var counter = 1, jump = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i + 1]) {
        counter++;
        jump++;
    }
    else {
        if (jump > 0) {
            obj[words[i]] = counter;
            jump = 0;
            counter=1
        }
        else
            obj[words[i]] = 1;
    }

}
console.log(obj);