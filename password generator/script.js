const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const numbreEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const resultEl = document.getElementById("result");
const clipboardIcon = document.getElementById("clipboard");

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()+<>?/.,';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    symbol: getRandomSymbol,
    number: getRandomNumber
}; 

function returnPassword(upper, lower, number, symbol, length) {
    let opctions = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]).map(item => Object.keys(item)[0]);
    let password = "";
    if (opctions.length != 0) {
        for (let i = 0; i < length; i++) {
            let randomNum = Math.floor(Math.random() * (opctions.length));
            password += randomFunction[opctions[randomNum]]();
        }
    } else {
        password = "";
    }
    return password;
}

function generatePassword() { 
    const length = +lengthEl.value;
    const hasupper = upperEl.checked;
    const haslower = lowerEl.checked;
    const hasnumber = numbreEl.checked;
    const hassymbol =  symbolEl.checked;
    resultEl.innerText =  returnPassword(hasupper, haslower, hasnumber, hassymbol, length);
}

generateBtn.addEventListener("click", generatePassword);

clipboardIcon.addEventListener("click", () => {
    const textaresEl = document.createElement("textarea");
    const password = resultEl.innerText;

    if (!password) {return}

    textaresEl.value = password;
    document.body.append(textaresEl);
    textaresEl.select();
    document.execCommand("copy");
    textaresEl.remove();
})
