const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const log = console.log
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   prompt: `For which city would you like the weather report? `
// });

// rl.prompt()
// rl.on('line', (input) => {
//     address = input
//     geocode(address)

//     rl.close();
// });



geocode(process.argv[2], (err, {latitude, longitude, location}) => {
    if(err) {
        return log(err)
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if(error) {
            return log(error)
        }
        log(location)
        log(forecastData)
    })
})







