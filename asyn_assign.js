
async function sumOfFirstNNumbers(n) {
    if (n <= 0) {
        throw new Error("Enter a positive number");
    }
    
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    
    return sum;
}

(async () => {
    try {
        const result = await sumOfFirstNNumbers(4);
        console.log("Sum:", result);
    } catch (error) {
        console.error(error.message);
    }
})();
