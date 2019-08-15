var amount = ["5", "10", "15", "20"];

function gesture() {
    let amount = ["4 5-minute", "10 2-minute", "20 1-minute", "40 30-second"];
    var type = ["female", "male", "animal"];
    var randomAmount = getRandomArrayValue(amount);
    var randomType = getRandomArrayValue(type);
    return `<strong>Draw ${randomAmount} ${randomType} gestures<strong>`;
}

function proportion() {
    var ratio = ["1:2", "1:3", "1:4", "1:5", "1:6", "1:7", "1:8"];
    var randomRatio = getRandomArrayValue(ratio);
    return `<strong>Draw someone with a ${randomRatio} head to body ratio </strong>`;
}

function anatomy() {
    var part = ["heads", "eyes", "noses", "ears", "lips", "torsos", "arms", "hands", "legs", "feet"];
    var randomAmount = getRandomArrayValue(amount);
    var randomPart = getRandomArrayValue(part);
    return `<strong>Draw ${randomAmount} ${randomPart}</strong>`;
}

function newGesture() {
    document.getElementById("studyDisplay").innerHTML = gesture();
}

function newProportion() {
    var randomNumber = getRandomArrayValue(proportion);
    document.getElementById("studyDisplay").innerHTML = proportion();
}

function newAnatomy() {
    document.getElementById("studyDisplay").innerHTML = anatomy();
}

function getRandomArrayValue(array) {
    let arrayIndex = Math.floor(Math.random() * array.length);
    return array[arrayIndex];
}
