// main file for ME-time desktop app

// using strict to avoid more bugs and make code readable
'use strict'

const { app, BrowserWindow} = require('electron')
// const path = require('path')
// const url = require('url')
let window = null

function createWindow () {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        fullscreen: true
})
mainWindow.loadFile('app/index.html')

mainWindow.on('closed', function () {
    mainWindow = null
})
}
app.on('ready', createWindow)