
function getText() {
    return document.getElementById("textInput").value;
}

function getWord() {
    return document.getElementById("wordInput").value;
}

function showStringResult(message) {
    document.getElementById("stringResult").textContent = message;
}

// 1. Find the length of a string
function stringLength() {
    let text = getText();
    showStringResult("Length: " + text.length);
}

// 2. Find first and last occurrence of a word
function occurrences() {
    let text = getText();
    let word = getWord();

    if (word === "") {
        showStringResult("Please enter a word to find.");
        return;
    }

    let first = text.indexOf(word);
    let last = text.lastIndexOf(word);

    showStringResult(
        "First occurrence index: " + first +
        "\nLast occurrence index: " + last
    );
}

// 3. Search for a word
function searchWord() {
    let text = getText();
    let word = getWord();

    if (word === "") {
        showStringResult("Please enter a word to search.");
        return;
    }

    if (text.includes(word)) {
        showStringResult("'" + word + "' was found in the string.");
    } else {
        showStringResult("'" + word + "' was not found.");
    }
}

// 4. Slice operation
function sliceText() {
    let text = getText();
    let start = Number(prompt("Enter the starting index:"));
    let end = Number(prompt("Enter the ending index:"));

    showStringResult("Slice result: " + text.slice(start, end));
}

// 5. Substring operation
function substringText() {
    let text = getText();
    let start = Number(prompt("Enter the starting index:"));
    let end = Number(prompt("Enter the ending index:"));

    showStringResult("Substring result: " + text.substring(start, end));
}

// 6. Substr operation
function substrText() {
    let text = getText();
    let start = Number(prompt("Enter the starting index:"));
    let length = Number(prompt("Enter the number of characters:"));

    showStringResult("Substr result: " + text.substr(start, length));
}

// 7. Replace a word
function replaceWord() {
    let text = getText();
    let word = getWord();
    let replacement = document.getElementById("replaceInput").value;

    if (word === "") {
        showStringResult("Please enter a word to replace.");
        return;
    }

    showStringResult("Result: " + text.replace(word, replacement));
}

// 8. Convert to uppercase
function upperCase() {
    showStringResult("Uppercase: " + getText().toUpperCase());
}

// 9. Convert to lowercase
function lowerCase() {
    showStringResult("Lowercase: " + getText().toLowerCase());
}

function showMathResult(message) {
    document.getElementById("mathResult").textContent = message;
}

// Get numbers from the input fields
function getNum1() {
    return Number(document.getElementById("num1").value);
}

function getNum2() {
    return Number(document.getElementById("num2").value);
}

// 1. Calculate power
function power() {
    let a = getNum1();
    let b = getNum2();

    showMathResult("Power: " + Math.pow(a, b));
}

// 2. Calculate square root
function squareRoot() {
    let a = getNum1();

    if (a < 0) {
        showMathResult("Square root of a negative number is not a real number.");
        return;
    }

    showMathResult("Square root: " + Math.sqrt(a));
}

// 3. Round value
function roundValue() {
    showMathResult("Rounded value: " + Math.round(getNum1()));
}

// 4. Ceiling value
function ceilValue() {
    showMathResult("Ceiling value: " + Math.ceil(getNum1()));
}

// 5. Floor value
function floorValue() {
    showMathResult("Floor value: " + Math.floor(getNum1()));
}

// 6. Absolute value
function absoluteValue() {
    showMathResult("Absolute value: " + Math.abs(getNum1()));
}

// 7. Sine
function sineValue() {
    let angle = Number(document.getElementById("angle").value);
    let radians = angle * Math.PI / 180;

    showMathResult("Sine: " + Math.sin(radians).toFixed(4));
}

// 8. Cosine
function cosineValue() {
    let angle = Number(document.getElementById("angle").value);
    let radians = angle * Math.PI / 180;

    showMathResult("Cosine: " + Math.cos(radians).toFixed(4));
}

// 9. Minimum value
function minValue() {
    showMathResult("Minimum: " + Math.min(getNum1(), getNum2()));
}

// 10. Maximum value
function maxValue() {
    showMathResult("Maximum: " + Math.max(getNum1(), getNum2()));
}

// 11. Generate random number from 1 to 100
function randomValue() {
    let random = Math.floor(Math.random() * 100) + 1;

    showMathResult("Random number: " + random);
}
