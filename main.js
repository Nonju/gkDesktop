const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;

let mainWindow;
const width = 1280;
const height = 780;

app.on('ready', () => {
	// Instantiate new browserwindow with default sizes
	mainWindow = new BrowserWindow({
		width,
		height,
		'use-content-size': true,
	});
	mainWindow.setMenu(null);

	mainWindow.loadURL('https://keep.google.com');
});
