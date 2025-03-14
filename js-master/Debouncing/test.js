// Simple Promise Polyfill
class MyPromise {
    constructor(executor) {
      // Initial state and value
      this.state = "pending"; // "pending", "fulfilled", or "rejected"
      this.value = undefined; // Result or error
      this.callbacks = []; // Store then callbacks
  
      // Define resolve and reject functions
      const resolve = (value) => {
        if (this.state === "pending") {
          this.state = "fulfilled";
          this.value = value;
  
          // Call all the stored success callbacks
          this.callbacks.forEach((callback) => {
            callback.onFulfilled(value);
          });
        }
      };
  
      const reject = (reason) => {
        if (this.state === "pending") {
          this.state = "rejected";
          this.value = reason;
  
          // Call all the stored failure callbacks
          this.callbacks.forEach((callback) => {
            callback.onRejected(reason);
          });
        }
      };
  
      // Immediately execute the executor function
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    // The then method
    then(onFulfilled, onRejected) {
      return new MyPromise((resolve, reject) => {
        const handleCallback = () => {
          try {
            if (this.state === "fulfilled") {
              const result = onFulfilled ? onFulfilled(this.value) : this.value;
              resolve(result);
            } else if (this.state === "rejected") {
              const result = onRejected ? onRejected(this.value) : this.value;
              reject(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        if (this.state === "pending") {
          this.callbacks.push({
            onFulfilled: () => handleCallback(),
            onRejected: () => handleCallback(),
          });
        } else {
          // If already resolved/rejected, execute the callback immediately
          setTimeout(() => handleCallback(), 0);
        }
      });
    }
  }
  
  // Example usage:
  const asyncTask = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task completed!");
      // reject("Task failed!"); // Uncomment to test rejection
    }, 1000);
  });
  
  asyncTask
    .then((result) => {
      console.log("Success:", result);
      return "Next success step";
    })
    .then((nextResult) => {
      console.log(nextResult);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  