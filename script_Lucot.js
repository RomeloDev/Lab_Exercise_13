function task1(){
    let count = 1;
    document.getElementById("output1").innerHTML = "Output:<br>"
    do{
        console.log(`${count} \n`);
        document.getElementById("output1").innerHTML += `${count} <br>`;
        count++;
    }
    while(count <= 10);
}

function task2(){
    let num = Number(prompt("Enter a number(N): "));
    let count = 1;
    let result = 0;
    do{
        result += count;
        count++
    }
    while(count <= num);
    console.log(`Output: \n${result}`);
    document.getElementById("output2").innerHTML = `Output: <br> 
    Your Inputs: ${num} <br> Result: ${result}`;
}

function task3(){
    let input = Number(prompt("Enter a number(N): "));
    let count = 0;
    document.getElementById("output3").innerHTML = `Output: <br> <br> Multiplication Table of ${input} <br>`;
    do{
        console.log(`${input} x ${count} = ${input * count}\n`);
        document.getElementById("output3").innerHTML += `${input} x ${count} = ${input * count}<br>`;
        count++;
    }
    while(count <= 10);
}

function task4(){
    let num = prompt("Enter a numbers: ");
    let numString = num.toString();
    let digits = [];
    let count = 0;
    do{
        digits.push(numString[count]);
        count++;
    }
    while(count < numString.length);
    let reversedDigits = digits.reverse();

    document.getElementById('output4').innerHTML = `Output: <br> Your Inputs: ${num}<br> Reversed: ${reversedDigits.map(Number).join("")}`;
}

function task5() {
    let n = prompt('Enter a number:');
    let sum = 0;
    let i = 0;

    do{
        sum += Number(n[i]); 
        i++;
    }
    while (i < n.length);

    document.getElementById('output5').innerHTML = `Output: <br> Your Inputs: ${n} <br>Sum of Digits: ${sum}`;
}


function task6() {
    let n = prompt('Enter a number:'); 
    let original = n;

    let reversed = '';
    let i = n.length - 1;

    do{
        reversed += n[i];
        i--;
    }
    while (i >= 0);

    if (original === reversed) {
        document.getElementById("output6").innerHTML = `Output: <br>${original} is a Palindrome.`;
    } else {
        document.getElementById("output6").innerHTML = `Output: <br>${original} is Not a Palindrome.`;
    }
}
