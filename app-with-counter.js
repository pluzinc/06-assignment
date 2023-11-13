require('dotenv').config()

var cron = require('node-cron')
var Pushover = require('node-pushover')

var index = 0;
var notificationsList = [
    'Here is my first notification.',
    'Here is the next one.',
    'And finally, the last one.'
]

cron.schedule('*/3 * * * * *', notify)

var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USERKEY
})

function notify() {
    let loopingCount = index % notificationsList.length

    let pickOne = notificationsList[loopingCount]

    // ex. "index 1: Here is my first notification."
    // feel free to drop the "index 1: " bit for your app
    let theNotification = "index: " + index + ": " + pickOne 

    push.send("Notify with counter", theNotification, handleErrors)

    index++ // setting up the next one to send
}

function handleErrors(error, response) {
    if(error) console.log('error: ', error)
    console.log("index: ", index)
    console.log(response)
}
