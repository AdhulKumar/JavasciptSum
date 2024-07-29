
let input = prompt("Enter a number between 0 and 1 million:");

let number = parseInt(input, 10);


if (isNaN(number) || number < 0 || number > 1000000) {
    alert("Invalid number");
} else {
  
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    // Display the result
    alert(`Sum of numbers up to ${number} is ${sum}`);
}
