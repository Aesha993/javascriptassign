
function sumOfFirstNNumbers(n) {
    return new Promise(function(resolve, reject) {
        if (n <= 0) {
            reject("Enter a positive number");
        } else {
            let sum = 0;
            for (let i = 1; i <= n; i++) {
                sum += i;
            }
            resolve(sum);
        }
    });
}

sumOfFirstNNumbers(4)
    .then(result => {
        console.log("Sum:", result);
    })
    .catch(error => {
        console.error(error);
    });
