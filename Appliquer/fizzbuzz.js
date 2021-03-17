function fizzbuzz(number) {
    if (Number.isInteger(number)){
        if (number % 15 === 0) {
            return "fizzbuzz";
        } else if (number % 3 === 0) {
            return "fizz";
        } else if (number % 5 === 0) {
            return "buzz";
        } else {
            return number.toString();
        } 
    } else {
        return "input error";
    }
}    
function main() {
    let i = 1;
    while (i <= 100) {
        console.log(fizzbuzz(i));
        i++;
    }
}
main();
module.exports = fizzbuzz;