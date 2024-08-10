// Define a function that returns a Promise
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000); // Simulate a 2-second delay
    });
}

// Define an async function that uses await to wait for the Promise
async function getData(): Promise<void> {
    try {
        console.log("Fetching data...");
        let result = await fetchData(); // Wait for the fetchData function to complete
        console.log(result); // "Data fetched successfully!"
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
console.log("I will come after some time")
// Run the async function
getData();
