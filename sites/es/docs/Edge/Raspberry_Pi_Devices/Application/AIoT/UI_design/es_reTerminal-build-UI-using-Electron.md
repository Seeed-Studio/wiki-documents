---
description: Electron para reTerminal
title: Electron para reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-build-UI-using-Electron
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## Introducción

Este wiki explica cómo construir tu propia interfaz de usuario usando Electron. Electron es un framework de código abierto para crear aplicaciones de escritorio nativas (Windows, Mac, Linux) con tecnologías web como HTML, CSS y JavaScript. ¡Esto significa que si puedes construir un sitio web, puedes construir una aplicación de escritorio!

Siguiendo la guía a continuación, podrás crear una aplicación para controlar los pines GPIO en el reTerminal simplemente haciendo clic en botones en la LCD. ¡Así que comencemos!

## Preparar el Entorno de Desarrollo

### En reTerminal

Primero, instalaremos **Node.js** junto con **npm** en el reTerminal. npm es un gestor de paquetes para paquetes de Node.js.

- **Paso 1.** Accede al reTerminal usando la **LCD integrada, pantalla externa o SSH** como se explica [aquí](https://wiki.seeedstudio.com/es/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)

- **Paso 2.** Actualiza los paquetes

```sh
sudo apt update
sudo apt full-upgrade 
```

- **Paso 3.** Descarga el script para instalar Node.js

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

- **Paso 4.** Instalar Node.js

```sh
sudo apt install -y nodejs
```

Node.js ahora está instalado en el reTerminal. Para verificar si la instalación fue exitosa, ejecuta los siguientes comandos para comprobar la versión de **Node.js** y **npm**

```sh
node -v
npm -v
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/node-2.png" alt="pir" width="300" height="auto"/></p>

### En la PC Host

Ahora, configuraremos Microsoft Visual Studio Code para nuestro desarrollo.

- **Paso 1.** Descarga e instala [Microsoft Visual Studio Code](https://code.visualstudio.com/)

**Nota:** Descarga el instalador que sea adecuado para tu sistema operativo

- **Paso 2.** Haz clic en la pestaña **Extensions** en el menú de navegación izquierdo y escribe **remote development** en el cuadro de búsqueda

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **Paso 3.** Selecciona **Remote Development** y haz clic en **Install**

- **Paso 4.** Presiona **F1** en el teclado, escribe **ssh** y selecciona **Remote-SSH:Connect to Host...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **Paso 5.** Ingresa lo siguiente

```sh
pi@192.xxx.xx.xx
```

**Nota:** **pi** es el nombre de usuario y **192.xxx.xx.xx** es la dirección IP del reTerminal

- **Paso 6.** Introduce la contraseña para el usuario

Ahora has iniciado sesión exitosamente en el reTerminal usando SSH y has terminado exitosamente de preparar el entorno de desarrollo

## Aplicación Smart Light Electron

Ahora construiremos una **Aplicación Smart Light Electron** que puede ser usada para controlar el GPIO en el reTerminal presionando botones en la LCD. ¡Luego puedes conectar relés al GPIO y controlar electrodomésticos también!

### Conexiones de Hardware

Conectaremos un **LED** al **GPIO 24** del reTerminal para propósitos de prueba. ¡Más tarde puedes agregar un relé y controlar electrodomésticos usando el GPIO!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="1000" height="auto"/></p>

**Nota:** Se necesita una resistencia entre el pin GPIO y el LED o de lo contrario el LED se quemará.

### Crear e Inicializar la Aplicación

- **Paso 1.** Abre VSCode en la PC Host e inicia sesión en el reTerminal vía SSH como se explicó antes

- **Paso 2.** Navega a `File > Open Folder...` y selecciona una carpeta de tu elección en el reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-1.png" alt="pir" width="600" height="auto"/></p>

- **Paso 3.** Crea una nueva carpeta y nómbrala

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-2.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-3.png" alt="pir" width="550" height="auto"/></p>

- **Paso 4.** Navega a `Terminal > New Terminal` y navega a la carpeta recién creada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-4.png" alt="pir" width="550" height="auto"/></p>

**Nota:** Aquí usamos **cd** para cambiar directorio

- **Paso 5.** Escribe lo siguiente dentro de esta ventana de terminal para crear un archivo **package.json** con las configuraciones necesarias para nuestra aplicación Node.js

```sh
npm init
```

**Nota:** Mantén presionando **ENTER** para usar los valores predeterminados para las respuestas, pero establece el **punto de entrada: (index.js)** como **main.js** y **comando de prueba:** como **electron .** (Usa un espacio y un punto después de **electron**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-5.png" alt="pir" width="550" height="auto"/></p>

Si quieres cambiar las configuraciones más tarde, puedes visitar el archivo **package.json** dentro de nuestra carpeta principal de la aplicación

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-6.png" alt="pir" width="650" height="auto"/></p>

- **Paso 6.** En la terminal dentro de VSCode, escribe lo siguiente para instalar **Electron**

```sh
npm install --save-dev electron
```

Verás la siguiente salida si Electron se instala exitosamente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-7.png" alt="pir" width="700" height="auto"/></p>

También verás la carpeta **node_modules** generada con los paquetes requeridos para ejecutar Electron

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-8.png" alt="pir" width="500" height="auto"/></p>

#### Instalar el Módulo npm onoff

El módulo npm onoff te permite acceder y controlar el GPIO en el reTerminal usando la aplicación Electron

- **Paso 1.** Abre una ventana de terminal dentro de VSCode como se explicó anteriormente y navega a nuestro directorio principal de la aplicación

- **Paso 2.** Escribe lo siguiente para instalar el módulo npm **onoff**

```sh
npm install onoff
```

#### Instalar y Ejecutar el Módulo npm electron-rebuild

El módulo npm electron-rebuild reconstruye módulos nativos de Node.js contra la versión de Node.js que tu proyecto de Electron está usando. Esto te permite usar módulos nativos de Node.js en aplicaciones de Electron sin que tu versión del sistema de Node.js coincida exactamente (lo cual a menudo no es el caso, y a veces ni siquiera es posible)

- **Paso 1.** Instalar el Módulo npm **electron-rebuild**

```sh
npm install --save-dev electron-rebuild
```

**Paso 2.** Ejecutar electron-rebuild

```sh
./node_modules/.bin/electron-rebuild
```

**Nota:** Cada vez que instales un nuevo paquete npm, vuelve a ejecutar electron-rebuild

### Crear el HTML (Interfaz de Usuario Básica)

Usaremos el archivo HTML para crear la interfaz de usuario básica sin ningún estilo. Este archivo HTML es responsable de mostrar los elementos de la interfaz de usuario en la pantalla.

Dentro de nuestro directorio principal de la aplicación, crea un nuevo archivo llamado **index.html** y copia los siguientes códigos

```html
<!doctype html>
<html>
    <head>
        <!-- Specify the character encoding for the HTML document -->
        <meta charset="UTF-8">
        <!-- App title bar -->
        <title>Test Application</title>
        <!-- Load the material icons api -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <!-- Load the google fonts api -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
        <!-- Load style.css with UI styling -->
        <link rel="stylesheet" href="style.css">
        <!-- Embed  JavaScript code -->
        <script>
            // Load ipcRenderer module
            const { ipcRenderer } = require('electron');
            // Function to turn ON the GPIO on button press
            function buttonclick1()
            {
                // This will send 1 as a message to the main process with "msg" as the channel name
                ipcRenderer.send("msg1",1)
            }
            
            // Function to turn OFF the GPIO on button press
            function buttonclick2()
            {
                ipcRenderer.send("msg2",0)
            }

            // Function to close the app on button press
            function buttonclick3()
            {
                ipcRenderer.send("close-me")
            }
        </script>
    </head>
    <body>
        <!-- Application close button -->
        <button class="button3" onclick="buttonclick3()">X</button>
        <br>
        <!-- Application heading -->
        <h1>SMART LAMP</h1>
        <!-- Lightbulb icon from the material icons api -->
        <i class="material-icons">lightbulb</i>
        <br>
        <!-- Empty lines -->
        <br>
        <!-- ON button with class attribute for styling 
        and onclick attribute for button click event -->
        <button class="button1" onclick="buttonclick1()">ON</button>
        <br>
        <button class="button2" onclick="buttonclick2()">OFF</button>
    </body>
</html>
```

**Nota:** El **módulo ipcRenderer** es un EventEmitter. Proporciona algunos métodos para que puedas enviar mensajes desde el proceso de renderizado (página web - html/css) al proceso principal (main.js). También puedes recibir respuestas del proceso principal.

Ahora hemos terminado de crear el archivo HTML.

Ejecuta **npm test** para ver la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-15.png" alt="pir" width="1000" height="auto"/></p>

### Crear el CSS (Estilizado)

Usaremos el archivo CSS para añadir diferentes estilos a la interfaz de usuario creada usando el archivo HTML

Dentro de nuestro directorio principal de la aplicación, crea un nuevo archivo llamado **style.css** y copia los siguientes códigos

```css
/* Styling for the body of the app */
body {
    background-color: rgb(141, 141, 141);
}

/* Styling for heading of the app */
h1 {
    font-size: 60px;
    text-align: center;
    font-family: "Roboto", "Courier New", monospace;
    color: rgb(255, 255, 255);
}

/* Styling for the light bulb */
.material-icons{
    font-size: 250px;
    color: rgb(204, 202, 71);
    display: flex;
    justify-content: center;
}

/* Styling for the ON button */
.button1 {
    display: inline-block;
    padding: 15px 25px;
    font-size: 35px;
    text-align: center;
    outline: none;
    color: rgb(255, 255, 255);
    background-color:rgb(76, 175, 80);
    border: none;
    border-radius: 15px;
    width: 20%;
    margin:auto;
    display:grid;
  }

/* Button press effect for ON button */
.button1:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}

/* Hover effect for ON button */
.button1:hover {background-color: rgb(62, 142, 65)}

/* Styling for OFF button */
.button2 {
    display: inline-block;
    padding: 15px 25px;
    font-size: 35px;
    text-align: center;
    outline: none;
    color: rgb(255, 255, 255);
    background-color:rgb(207, 85, 85);
    border: none;
    border-radius: 15px;
    width: 20%;
    margin:auto;
    display:grid;
}

/* Button press effect for OFF button */
.button2:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}
  
/* Hover effect for OFF button */  
.button2:hover {background-color: rgb(179, 44, 44)}

/* Styling for Close button */
.button3 {
  padding: 8px 25px;
  font-size: 20px;
  text-align: center;
  outline: none;
  color: rgb(255, 255, 255);
  background-color:rgb(179, 44, 44);
  border: none;
  width: 6%;
  margin:auto;
  display:grid;
  float: right;
}
```

La salida final de la aplicación será la siguiente

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-16.png" alt="pir" width="1000" height="auto"/></p>

### Crear el Javascript (Cargar y Ejecutar la Aplicación)

Usaremos el archivo Javascript para crear la ventana de la aplicación, mostrar y cargar el archivo HTML, y añadir funcionalidad de GPIO.

Dentro de nuestro directorio principal de la aplicación, crea un nuevo archivo llamado **main.js** y copia los siguientes códigos

```javascript
var Gpio = require('onoff').Gpio; //include onoff module to interact with the GPIO
var LED = new Gpio(24, 'out'); //initialize GPIO 24 as an output

// Include app, BrowserWindow and ipcMain module
const { app, BrowserWindow, ipcMain } = require('electron')
/* Use ipcMain module to receive the messages from the ipcRenderer module and 
turn ON the GPIO*/
ipcMain.on("msg1",(event,data)=>{
  LED.writeSync(data);
})

/* Use ipcMain module to receive the messages from the ipcRenderer module and 
turn OFF the GPIO */
ipcMain.on("msg2",(event,data)=>{
  LED.writeSync(data);
})

/* Use ipcMain module to receive the messages from the ipcRenderer module and 
close the app */
ipcMain.on("close-me", (event, arg) => {
    app.quit()
})

// Create application window
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        // Make the app fullscreen
        "fullscreen": true,
        webPreferences: {
            // enable the communication between the main and rendered process
            nodeIntegration: true,
            contextIsolation: false
          }
    });
    // Load the HTML page with CSS styling
    mainWindow.loadFile('index.html');
});
```

**Nota:** El **ipcMain** proporciona algunos métodos para que puedas recibir los mensajes enviados desde el proceso de renderizado (página web).

### Probar la Aplicación

Verás la salida tan pronto como guardes el archivo anterior porque hemos activado **electron-rebuild**. Sin embargo, si has cerrado la aplicación, puedes abrirla nuevamente usando **npm test** y ver la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## Preparar un Script para Ejecutar la Aplicación

- **Paso 1.** Abre la carpeta raíz que creamos antes y crea un nuevo **archivo .sh** bajo esa carpeta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-18.png" alt="pir" width="350" height="auto"/></p>

- **Paso 2.** Abre el archivo creado e ingresa lo siguiente

```sh
#!/bin/bash
cd $HOME/Desktop/testapp
DISPLAY=:0 npm test
```

**Nota:** Aquí **$HOME/Desktop/testapp** es la ubicación del proyecto electron

- **Paso 3.** Abre una ventana de terminal dentro de VSCode y navega al directorio raíz de la aplicación

```sh
example:
cd ~/Desktop/testapp
```

- **Paso 4.** Hacer que ledstart.sh sea un archivo ejecutable

```sh
sudo chmod +x ledstart.sh
```

## Preparar un Archivo de Escritorio para Lanzar la Aplicación

- **Paso 1.** Abrir la carpeta **Escritorio** y crear un nuevo **archivo .desktop** bajo esa carpeta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-20.png" alt="pir" width="340" height="auto"/></p>

- **Paso 2.** Abrir el archivo creado e introducir lo siguiente

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/Desktop/testapp/ledStart.sh
Type=Application
Categories=Application;Development;
```

**Nota:** **Exec** es la ubicación del script que creamos anteriormente

- **Paso 3.** Abre una ventana de terminal dentro de VSCode y navega al Escritorio

```sh
example:
cd ~/Desktop
```

- **Paso 4.** Hacer que el archivo **ledStart.desktop** sea ejecutable

```sh
sudo chmod +x ledStart.desktop
```

### Ejecutar la Aplicación

Haz doble clic en el archivo **LED Test** en el Escritorio de la LCD de reTerminal

Verás la salida como sigue

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

¡Ahora puedes hacer clic en los botones y verás el LED encenderse!

## Depurar la Aplicación

Repasemos el proceso de depuración de tu aplicación durante el desarrollo

- **Paso 1.** Inicia sesión en reTerminal vía **SSH** usando **Microsoft Visual Studio Code** como se mencionó anteriormente

- **Paso 2.** Inicia sesión en reTerminal vía SSH usando una aplicación SSH como [MobaXterm](https://mobaxterm.mobatek.net/) con **función de servidor X11**

**Nota:** X11 es necesario para reenviar la pantalla de reTerminal y que aparezca en la PC

- **Paso 3.** Después de escribir todos los códigos en Microsoft Visual Studio Code al reTerminal, navega al directorio principal de la aplicación y ejecuta lo siguiente

```sh
npm test
```

Finalmente verás la salida mostrada en una nueva ventana. Si hay algún error en el código, se mostrará en la ventana del terminal de MobaXterm.

## FAQ

### P: ¿Cómo configurar actualizaciones automáticas de la aplicación cuando la guardamos?

Para esto puedes configurar la función Hot Reload usando el módulo npm electron-reloader

- **Paso 1.** Instalar **electron-reloader**

```sh
npm install --save-dev electron-reloader
```

- **Paso 2.** Añade la siguiente línea al final del archivo **main.js**

```javascript
try {
  require('electron-reloader')(module)
} catch (_) {}
```

Ahora ejecuta el archivo una vez usando **npm test** y la aplicación se actualizará mientras guardas los archivos. No necesitarás ejecutar **npm test** cada vez que cambies el contenido dentro de tu proyecto.

## Demo Adicional

Si quieres experimentar una demo más interesante con Electron, puedes revisar [este repositorio de GitHub](https://github.com/lakshanthad/Electron_reterminal_hardware)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" alt="pir" width="1000" height="auto"/></p>

## Recursos

- **[GitHub]** [Electron_reTerminal_Smart_Lamp_UI](https://github.com/lakshanthad/Electron_reTerminal_Smart_Lamp_UI)
- **[Página web]** [Documentación de Electron](https://www.electronjs.org/docs/api)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
