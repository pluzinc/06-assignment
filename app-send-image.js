require('dotenv').config()

var cron = require('node-cron')
var Pushover = require('node-pushover')
var path = require('path');

// Remember that file paths are relative to the location they are launched from.
// Thus to find a file that is in the images folder, which is two levels above, or back, 
// from the current folder, we need to use ".." twice, as below.
const myFilePath = path.join(__dirname, '../../images/the-command-prompt.jpeg')
console.log("My image path: ", myFilePath)

var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USERKEY
})

function notify() {
    console.log('running notify')
    push.send(process.env.USERKEY, "Test Subject", "My message", myFilePath, handleErrors)
}

function handleErrors(error, response) {
    console.log('running handling errors')
    if(error) console.log('error: ', error)
    console.log(response)
}

notify()
process.exit() // exits the script
