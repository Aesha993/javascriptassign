
function sumOfFirstNNumbers(n, callback) {
    if (n <= 0) {
        callback("Enter a positive number", null);
    } else {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        callback(null, sum);
    }
}

sumOfFirstNNumbers(4, function(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log("Sum:", result);
    }
});
