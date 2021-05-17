/* eslint global-require: off, no-console: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `yarn build` or `yarn build:main`, this file is compiled to
 * `./src/main.prod.js` using webpack. This gives us some performance wins.
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import path from 'path';
import { app, BrowserWindow, shell, ipcMain, dialog } from 'electron';
import fs from 'fs';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import KawasakiParser from '@rassweiler/kawasaki-as-parser';
import { ControllerObjectAlias } from '@rassweiler/kawasaki-as-parser/lib/interfaces';
import MenuBuilder from './menu';

export default class AppUpdater {
	constructor() {
		log.transports.file.level = 'info';
		autoUpdater.logger = log;
		autoUpdater.checkForUpdatesAndNotify();
	}
}

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
	const sourceMapSupport = require('source-map-support');
	sourceMapSupport.install();
}

if (
	process.env.NODE_ENV === 'development' ||
	process.env.DEBUG_PROD === 'true'
) {
	require('electron-debug')();
}

const installExtensions = async () => {
	const installer = require('electron-devtools-installer');
	const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
	const extensions = ['REACT_DEVELOPER_TOOLS'];

	return installer
		.default(
			extensions.map((name) => installer[name]),
			forceDownload
		)
		.catch(console.log);
};

const createWindow = async () => {
	if (
		process.env.NODE_ENV === 'development' ||
		process.env.DEBUG_PROD === 'true'
	) {
		await installExtensions();
	}

	const RESOURCES_PATH = app.isPackaged
		? path.join(process.resourcesPath, 'assets')
		: path.join(__dirname, '../assets');

	const getAssetPath = (...paths: string[]): string => {
		return path.join(RESOURCES_PATH, ...paths);
	};

	mainWindow = new BrowserWindow({
		show: false,
		width: 1024,
		height: 728,
		icon: getAssetPath('icon.png'),
		webPreferences: {
			nodeIntegration: true,
		},
	});

	mainWindow.loadURL(`file://${__dirname}/index.html`);

	// @TODO: Use 'ready-to-show' event
	//        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
	mainWindow.webContents.on('did-finish-load', () => {
		if (!mainWindow) {
			throw new Error('"mainWindow" is not defined');
		}
		if (process.env.START_MINIMIZED) {
			mainWindow.minimize();
		} else {
			mainWindow.show();
			mainWindow.focus();
		}
	});

	mainWindow.on('closed', () => {
		mainWindow = null;
	});

	const menuBuilder = new MenuBuilder(mainWindow);
	menuBuilder.buildMenu();

	// Open urls in the user's browser
	mainWindow.webContents.on('new-window', (event, url) => {
		event.preventDefault();
		shell.openExternal(url);
	});

	// Remove this if your app does not use auto updates
	// eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
	// Respect the OSX convention of having the application in memory even
	// after all windows have been closed
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.whenReady().then(createWindow).catch(console.log);

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) createWindow();
});

// open backup
ipcMain.on('on-open-backup', async (event) => {
	let controller: ControllerObjectAlias = {
		controllerType: '',
		manufacturer: 'Kawasaki',
		robots: [],
		ioComments: {
			inputs: [],
			outputs: [],
		},
		commonPrograms: [],
		stringVars: [],
		realVars: [],
		jointVars: [],
		transVars: [],
	};
	let errors: string[] = [];
	let fileName = '';
	const files = dialog.showOpenDialogSync({
		filters: [{ name: 'Kawasaki', extensions: ['as', 'pg', 'vsf'] }],
		properties: ['openFile', 'showHiddenFiles'],
	});
	console.log(files);
	if (files === undefined) {
		errors.push('Error: No file selected');
	} else if (files.length > 0 && files[0] !== '') {
		try {
			[fileName] = files;
			const file = await fs.promises.readFile(files[0], 'utf-8');
			const data = await KawasakiParser.getControllerObject(file);
			controller = data.data;
			if (data.errors.length > 0) {
				errors = errors.concat(data.errors);
			}
		} catch (error) {
			errors.push(`Error: ${error}`);
		}
	} else {
		errors.push('Error: No file paths');
	}
	event.sender.send('on-open-backup', { data: controller, fileName, errors });
});

// open backup
ipcMain.on(
	'open-drag-backup',
	async (event, file: { name: string; path: string }) => {
		let controller: ControllerObjectAlias = {
			controllerType: '',
			manufacturer: 'Kawasaki',
			robots: [],
			ioComments: {
				inputs: [],
				outputs: [],
			},
			commonPrograms: [],
			stringVars: [],
			realVars: [],
			jointVars: [],
			transVars: [],
		};
		let errors: string[] = [];
		if (file.name !== '' && file.path.endsWith('.as')) {
			try {
				const f = await fs.promises.readFile(file.path, 'utf-8');
				const data = await KawasakiParser.getControllerObject(f);
				controller = data.data;
				if (data.errors.length > 0) {
					errors = errors.concat(data.errors);
				}
			} catch (error) {
				errors.push(`Error: ${error}`);
			}
		} else {
			errors.push('Error: No file paths');
		}
		event.sender.send('on-open-backup', {
			data: controller,
			fileName: file.name,
			errors,
		});
	}
);

const pdfOptions = {
	marginsType: 0,
	pageSize: 'A4',
	printBackground: true,
	printSelectionOnly: false,
	landscape: false,
};

// Export PDF
ipcMain.on('export-robot-backup', async (event, fileName = '') => {
	const errors: string[] = [];
	const folder = dialog.showOpenDialogSync({
		properties: ['openDirectory'],
	});
	if (
		folder !== undefined &&
		folder.length > 0 &&
		folder[0] !== '' &&
		fileName !== '' &&
		mainWindow !== null
	) {
		const filePath = path.join(folder[0], fileName);
		try {
			const rawPDF = await mainWindow.webContents.printToPDF(pdfOptions);
			const file = await fs.promises.writeFile(filePath, rawPDF);
			console.log(file);
		} catch (error) {
			errors.push(error);
		}
	}
});
