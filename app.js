require('dotenv').config()

var cron = require('node-cron')
var Pushover = require('node-pushover')

// cron.schedule('*/5 * * * * *', notify)

cron.schedule(' * 9 * * *', callback)

cron.schedule(' 10 10 * * *', appointment)

cron.schedule(' * */2 * * *', exercise)

var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USERKEY
})

function notify() {
    push.send("homework testing", "My message", handleErrors)
}
function callback() {
    push.send("good morning", "get some coffee. do u belive in luck? 🍀", handleErrors)
}
function callback() {
    push.send("Doctor's Appointment", "Be well~", handleErrors)
}
function callback() {
    push.send("Break Time", "Stand up and take a walk around!", handleErrors)
}
function handleErrors(error, response) {
    if (error) console.log('error: ', error)
    console.log(response)
}
