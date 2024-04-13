const resultX = document.getElementById('result');
const generateX = document.getElementById('generate');
const numbersX = document.getElementById('numbers');
const lowerCaseX = document.getElementById('lowerCase');
const upperCaseX = document.getElementById('upperCase');
const symbolsX = document.getElementById('symbols');
const lengthX = document.getElementById('length');
const clipboardX = document.getElementById('clipboard');
const ErrorX = document.getElementById('show-Error');

// Defining Charactor Sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

generateX.addEventListener('click', ()=>{
    console.log('Clicked');
    resultX.style.color = "#93ff96";
    const length = lengthX.value;
    const lower = lowerCaseX.checked;
    const upper = upperCaseX.checked;
    const symbol = symbolsX.checked;
    const number = numbersX.checked;

    const password = generatePassword(length, lower, upper, symbol, number);
    resultX.innerHTML = password;
});

// Function to generate random charactors from charset
function getRandomChar(charSet){
    const randomIndex = Math.floor(Math.random()*charSet.length);
    return charSet.charAt(randomIndex)
}

// Function to generate random password
function generatePassword(length, useLower, useUpper, useNums, useSpecialChar)
{
    let charSet = '';
    if(length<4 || length>20){
        ErrorX.style.color = "red";
        ErrorX.style.marginBlock = "-12px 18px";
        ErrorX.innerHTML = 'You must choose only length between 4 and 20 for the password.❗❗';
        return '';
    }
    if(useLower) charSet += lowercaseChars;
    if(useUpper) charSet += uppercaseChars;
    if(useNums) charSet += numericChars;
    if(useSpecialChar) charSet += specialChars;

    if(charSet === ""){
        ErrorX.style.color = "red";
        ErrorX.style.marginBlock = "-12px 18px";
        ErrorX.innerHTML = "Kam se kam ek  to choose karna padega";
        return "";
    }

    let password = '';
    for(let i = 0; i< length; i++){
        const randomChar = getRandomChar(charSet)
        password += randomChar;
    }
    ErrorX.innerHTML = '';
    ErrorX.style.background = "transparent";
    return password;
}

clipboardX.addEventListener('click', ()=>{
    console.log(resultX.innerHTML);
    if(resultX.innerHTML.includes(' ') || resultX.innerHTML === "") return;
    resultX.style.background = "#0087ff5c";
    ErrorX.innerHTML = "Copied ✅";
    ErrorX.color = "green";
    ErrorX.style.marginBlock = "-12px 18px";
    navigator.clipboard.writeText(resultX.textContent)

})