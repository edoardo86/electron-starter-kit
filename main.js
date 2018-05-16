const electron = require('electron')
// Modulo per l'applicazione
const app = electron.app
// Modulo per creare una finestra del browser nativa.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// imposto una viariabile globale per l'oggetto window
let mainWindow

function createWindow () {
  // Crea la finestra del browser.
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // e carica l'index.html dell'app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Apri il DevTools.
  // mainWindow.webContents.openDevTools()

  // funzione quando la finestra è chiusa.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// Questo metodo verrà chiamato quando Electron ha terminato l'inizializzazione ed è pronto per creare finestre del browser.
// Alcune API possono essere utilizzate solo dopo che si verifica questo evento.
app.on('ready', createWindow)

// Esci quando tutte le finestre sono chiuse.
app.on('window-all-closed', function () {
  // Su OS X è normale che le applicazioni e la loro barra dei menu rimangano attive finché l'utente non si chiude esplicitamente con Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // Su OS X è normale ricreare una finestra nell'app quando si fa clic sull'icona del dock e non ci sono altre finestre aperte.
  if (mainWindow === null) {
    createWindow()
  }
})

