let number = 1;
while (number <= 100) {
    let square = number * number;
    if (square <= 100) {
        console.log(`${square}`);
        break;
    }
    number++;
}
