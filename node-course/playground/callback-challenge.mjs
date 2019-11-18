//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x, y, callback) => {
    let total = x+y
    // setTimeout()
    callback(total)
}

add(1, 4, (sum) => {
    setTimeout(() => {
        console.log(sum) // Should print: 5
    }, 1000)
})

console.log(`hello`)