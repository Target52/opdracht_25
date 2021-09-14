let bigger = function (number) {
    if (number > 100) {
        return true;
    }
    return false;

}

console.log(bigger(50));
console.log(bigger(150));

let brenda = function (maxN, currN, ageP) {
    if (currN >= maxN) {
        return "it's too busy now, come back later";
    }
    if (ageP < 21) {
        return "this is a club for adults";
    }
    return "come in";
}

let maxN = 100;

console.log(brenda(maxN, 88, 17));
console.log(brenda(maxN, 88, 22));
console.log(brenda(maxN, 188, 22));

let average = function (numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    let avg = total / numbers.length;
    return avg;
}

console.log(average([1, 2, 3, 4, 5]));