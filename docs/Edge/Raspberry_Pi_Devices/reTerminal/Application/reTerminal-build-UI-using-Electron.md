---
description:  Electron for reTerminal
title:  Electron for reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-build-UI-using-Electron
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## Introduction

This wiki explains how to build your own user interface using Electron. Electron is an open-source framework for creating native desktop applications (Windows, Mac, Linux) with web technologies like HTML, CSS and JavaScript. This means if you can build a website, you can build a desktop app!

By following the guide below, you will be able to create an application to control the GPIO pins on the reTerminal just by clicking buttons on the LCD. So let's get started!

## Prepare Development Environment

### On reTerminal

First, we will install **Node.js** along with **npm** on the reTerminal. npm is a package manager for Node.js packages.  

- **Step 1.** Access reTerminal using the **onboard LCD, external display or SSH** as explained [here](https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)

- **Step 2.** Upgrade the packages

```sh
sudo apt update
sudo apt full-upgrade 
```

- **Step 3.** Download the script to install Node.js

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

- **Step 4.** Install Node.js

```sh
sudo apt install -y nodejs
```

Node.js is now installed on the reTerminal. To check whether the installation is sucessful, run the following commands to check the version of **Node.js** and **npm**

```sh
node -v
npm -v
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/node-2.png" alt="pir" width="300" height="auto"/></p>

### On Host PC

Now, we will set up Microsoft Visual Studio Code for our development.

- **Step 1.** Download and install [Microsoft Visual Studio Code](https://code.visualstudio.com/)

**Note:** Download the installer which is suitable for your operating system

- **Step 2.** Click on the **Extensions** tab on the left navigation menu and type **remote development** in the search box

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **Step 3.** Select **Remote Development** and click **Install**

- **Step 4.** Press **F1** on the keyboard, type **ssh** and select **Remote-SSH:Connect to Host...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **Step 5.** Enter the following

```sh
pi@192.xxx.xx.xx
```

**Note:** **pi** is the username and **192.xxx.xx.xx** is the IP address of the reTerminal

- **Step 6.** Enter the password for the user

Now you have sucessfully logged in to reTerminal using SSH and have successfully finished preparing the development environment

## Smart Light Electron Application

Now we will build a **Smart Light Electron Appication** that can be used to control the GPIO on the reTerminal by pressing buttons on the LCD. You can then connect relays to the GPIO and control home appliances as well!

### Hardware Connections

We will connect an **LED** to the **GPIO 24** of the reTerminal for testing purposes. Later you can add a relay and control home appliances using the GPIO!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="1000" height="auto"/></p>

**Note:** A resistor is needed between the GPIO pin and the LED or otherwise the LED will burn out.

### Create and Initialize the Application

- **Step 1.** Open VSCode on the Host PC and login to reTerminal via SSH as explained before

- **Step 2.** Navigate to `File > Open Folder...`  and select a folder of your choice on the reTerminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-1.png" alt="pir" width="600" height="auto"/></p>

- **Step 3.** Create a new folder and name it

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-2.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-3.png" alt="pir" width="550" height="auto"/></p>

- **Step 4.** Navigate to `Terminal > New Terminal` and navigate to the newly created folder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-4.png" alt="pir" width="550" height="auto"/></p>

**Note:** Here we use **cd** to change directory

- **Step 5.** Type the following inside this terminal window to create a **package.json** file with the needed configurations for our Node.js app

```sh
npm init
```

**Note:** Keep pressing **ENTER** to use the defaults for the answers, but set the **entry point: (index.js)** as **main.js** and **test command:** as **electron .**(Use a space and a dot after **electron**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-5.png" alt="pir" width="550" height="auto"/></p>

If you want to change the configurations later, you can visit the **package.json** file inside our main app folder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-6.png" alt="pir" width="650" height="auto"/></p>

- **Step 6.** On the terminal inside VSCode, type the following to install **Electron**

```sh
npm install --save-dev electron
```

You will see the following output if Electron is successfully installed

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-7.png" alt="pir" width="700" height="auto"/></p>

You will also see the **node_modules** folder generated with the required packages to run Electron

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-8.png" alt="pir" width="500" height="auto"/></p>

#### Install onoff npm Module

The onoff npm module allows you to access and control the GPIO on the reTerminal using the Electron app

- **Step 1.** Open a terminal window inside VSCode as explained before and navigate to our main app directory

- **Step 2.** Type the following to install the **onoff** npm module

```sh
npm install onoff
```

#### Install and Run electron-rebuild npm Module

The electron-rebuild npm module rebuilds native Node.js modules against the version of Node.js that your Electron project is using. This allows you to use native Node.js modules in Electron apps without your system version of Node.js matching exactly (which is often not the case, and sometimes not even possible)

- **Step 1.** Install **electron-rebuild** npm Module

```sh
npm install --save-dev electron-rebuild
```

- **Step 2.** Run electron-rebuild

```sh
./node_modules/.bin/electron-rebuild
```

**Note:** Whenever you install a new npm package, rerun electron-rebuild

### Create the HTML (Basic UI)

We will use the HTML file to create the basic user interface without any styling. This HTML file is responsible to display the UI elements on the screen.

Inside our main app directory, create a new file called **index.html** and copy the following codes

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

**Note:** The **ipcRenderer module** is an EventEmitter. It provides a few methods so you can send messages from the render process (web page - html/css) to the main process (main.js). You can also receive replies from the main process.

Now we have finished creating the HTML file.

Run **npm test** to see the following output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-15.png" alt="pir" width="1000" height="auto"/></p>

### Create the CSS (Styling)

We will use the CSS file to add different styling to the user interface created using the HTML file

Inside our main app directory, create a new file called **style.css** and copy the following codes

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

The final output of the app will be as follows

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-16.png" alt="pir" width="1000" height="auto"/></p>

### Create the Javascript (Load and Execute the App)

We will use the Javascript file to create the application window, display the load the HTML file, and add GPIO functionality.

Inside our main app directory, create a new file called **main.js** and copy the following codes

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

**Note:** The **ipcMain** provides a few methods so you can receive the messages sent fromt the renderer process (web page).

### Test the App

You will see the output as soon as you save the previous file because we have turned on **electron-rebuild**. However if you have closed the app, you can open it again using **npm test** and see the following output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## Prepare a Script to Run the App

- **Step 1.** Open the Root folder that we created before and create a new **.sh file** under that folder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-18.png" alt="pir" width="350" height="auto"/></p>

- **Step 2.** Open the created file and enter the following

```sh
#!/bin/bash
cd $HOME/Desktop/testapp
DISPLAY=:0 npm test
```

**Note:** Here **$HOME/Desktop/testapp** is the location of the electron project

- **Step 3.** Open a terminal window inside VSCode and navigate to the root directory of the app

```sh
example:
cd ~/Desktop/testapp
```

- **Step 4.** Make the ledstart.sh an executable file

```sh
sudo chmod +x ledstart.sh
```

## Prepare a Desktop File to Launch the App

- **Step 1.** Open the **Desktop folder** and create a new **.desktop file** under that folder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-20.png" alt="pir" width="340" height="auto"/></p>

- **Step 2.** Open the created file and enter the following

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/Desktop/testapp/ledStart.sh
Type=Application
Categories=Application;Development;
```

**Note:** **Exec** is the location of the script that we created before

- **Step 3.** Open a terminal window inside VSCode and navigate to the Desktop

```sh
example:
cd ~/Desktop
```

- **Step 4.** Make the **ledStart.desktop** an executable file

```sh
sudo chmod +x ledStart.desktop
```

### Launch the App

Double click on the **LED Test** file on the Desktop of reTerminal LCD

You will see the output as follows

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

Now you can click on the buttons and you will see the LED light up!

## Debug the App

Let's go through the process of debugging your app while developing

- **Step 1.** Log in to reTerminal via **SSH** using **Microsoft Visual Studio Code** as mentioned before

- **Step 2.** Log in to reTerminal via SSH using a SSH application such as [MobaXterm](https://mobaxterm.mobatek.net/) with **X11 server feature**

**Note:** X11 is needed to forward the reTerminal display and pop up on the PC

- **Step 3.** After writing all the codes on Microsoft Visual Studio Code to the reTerminal, navigate to the main app directory and run the following

```sh
npm test
```

Finally you will see the output displayed on a new window. If there are any errors in the code, they will be dislpayed in the MobaXterm terminal window.

## FAQ

### Q: How to set up automatic updates to the app as we save it?

For this you can set up the Hot Reload feature using electron-reloader npm module

- **Step 1.** Install **electron-reloader**

```sh
npm install --save-dev electron-reloader
```

- **Step 2.** Add the following line at the end of **main.js** file

```javascript
try {
  require('electron-reloader')(module)
} catch (_) {}
```

Now run the file once using **npm test** and the application will update as you save the files. You will not need to run **npm test** everytime you change the contents inside your project.

## Bonus Demo

If you want to experience a more interesting demo with Electron, you can checkout [this GitHub repo](https://github.com/lakshanthad/Electron_reterminal_hardware)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" alt="pir" width="1000" height="auto"/></p>

## Resources

- **[GitHub]** [Electron_reTerminal_Smart_Lamp_UI](https://github.com/lakshanthad/Electron_reTerminal_Smart_Lamp_UI)
- **[Webpage]** [Electron Documentation](https://www.electronjs.org/docs/api)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
