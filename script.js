//your JS code here. If required.
document.getElementById("btn").onclick = function () {
    const input = document.getElementById("ip").value;
    const output = document.getElementById("output");
    let num = parseFloat(input);

    // Clear previous results
    output.innerHTML = "";

    // Check for valid number input
    if (isNaN(num)) {
        output.innerHTML = "Please enter a valid number.";
        return;
    }

    // Helper function to create delayed promises
    function delayedOperation(fn, delay) {
        return (val) => new Promise((resolve) => {
            setTimeout(() => {
                const result = fn(val);
                output.innerHTML = `Result: ${result}`;
                resolve(result);
            }, delay);
        });
    }

    // Initial Promise (2 seconds)
    new Promise((resolve) => {
        setTimeout(() => {
            output.innerHTML = `Result: ${num}`;
            resolve(num);
        }, 2000);
    })

    // Second Promise: Multiply by 2 (2 seconds)
    .then(delayedOperation(val => val * 2, 2000))

    // Third Promise: Subtract 3 (1 second)
    .then(delayedOperation(val => val - 3, 1000))

    // Fourth Promise: Divide by 2 (1 second)
    .then(delayedOperation(val => val / 2, 1000))

    // Fifth Promise: Add 10 (1 second)
    .then(val => new Promise((resolve) => {
        setTimeout(() => {
            const result = val + 10;
            output.innerHTML = `Final Result: ${result}`;
            resolve(result);
        }, 1000);
    }));
};
