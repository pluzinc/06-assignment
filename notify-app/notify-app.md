# Simple Notify App

A "notify" app built with Node.js and 
the Pushover iOS app. 

First of all, you must have the **user key** and an **app token** from your Pushover account. You'll need to place them in a `.env` file stored in this folder, like so...
```bash
APP_TOKEN="<your app token here>"
USERKEY="<your user key here>"
```
...where `<your app token>` and `<your user key here>` are replaced with your app token and user key.

### Installation and launch
To install the required files, `cd` to this directory and type:
```js
npm install
```
You can launch the app with Node.js like so:
```js
node app.js
```
>It is important to first launch your app with Node.js and debug from there. Debuggin' with pm2 is more difficult as the logs are not so easily found ([read here for more](https://www.npmjs.com/package/pm2#:~:text=Log%20Management,type%20the%20command%3A), if you must know 😈).

### Persistance
To have the app persist beyond the current terminal session, you must use a process manager like `pm2`. 

It is recommended that you install "globally" because it is often re-used when developing various projects. To do so, you can add the `--global` or `-g` flag like so:
```js 
npm install pm2 --global
```
If you get `EEACCESS` errors or the like, you may have to run this command with `sudo` first, denoting that you are a `Super User` who can `Do`.
```js
sudo npm install pm2 --global
```
To launch the app with `pm2`, type:
```js
pm2 start app.js
```
To check the status of pm2, where you will see the name of your app and its online/offline status, type:
```js
pm2 status
``` 
You can stop the app by typing:
```js
pm2 stop // and your app name
```
For example, if my app was named "app", I would type `pm2 stop app`.

### Persistance with counter
There is an [example](./app-with-counter.js) here with an index variable that acts as a counter which you could use to cycle through a list of items that you wanted to send in a sequence (or randomly).

But... what's a smarter way?  Because the index will reset when the script is restarted, say, after an error.  You could explore saving the index value in a file on the computer, so it would persist even if the app crashed and restarted (check out the `fs` package and [this StackOverflow discussion](https://stackoverflow.com/questions/22795806/writing-data-to-text-file-in-node-js#:~:text=6,with%20the%20filesystem%3A)).  You could also take advantage of the date or day of the week as they are persistent values.
