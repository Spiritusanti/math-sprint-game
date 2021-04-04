// from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // while there remain elements to shuffle
    while(0 !== currentIndex) {

        // pick remaining element
        randomIndex = Math.floor(Math.random(0) * currentIndex);
        currentIndex -= 1;

        // And swa it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}