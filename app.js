require('dotenv').config()

var cron = require('node-cron')
var Pushover = require('node-pushover')

//cron.schedule('*/5 * * * * *', notify);

cron.schedule('* 9 * * *', callback);

cron.schedule('5 10 * * *', appointment);

cron.schedule('0 */2 * * *', exercise);

var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USERKEY
})

function notify() {
    push.send("is pm2 working?", "My message", handleErrors)
    log("Running notify now");
}
function callback() {
    push.send("good morning", "get some coffee. do u belive in luck? 🍀", handleErrors)
    log("Running callback now");
}
function appointment() {
    push.send("Doctor's Appointment", "Be well~", handleErrors)
    log("Running appointment now");
}
function exercise() {
    push.send("Break Time", "Stand up and take a walk around!", handleErrors)
    log("Running exercise now");
}
function handleErrors(error, response) {
    if (error) console.log('error: ', error)
    console.log(response)
}

function log(msg) {
    console.log(msg, new Date().toLocaleTimeString());
}
