import fs from 'fs'
// import chalk from 'chalk'

const dataBuffer = fs.readFileSync('1-json.json')
// const dataBuffer = fs.readFileSync('1-json.mjs', (err) => {
//     if(err) throw err
// })
console.log(dataBuffer)
// console.log(chalk.blueBright.bold(`Successfully read file`))

const dataString = dataBuffer.toString()
console.log(dataString)
const data = JSON.parse(dataString)
// console.log(data)
data.name = 'Jono'
data.age = 28
console.log(data)
const userJSON = JSON.stringify(data)
console.log(userJSON)
fs.writeFileSync('1-json.json', userJSON)

// console.log(dataString)