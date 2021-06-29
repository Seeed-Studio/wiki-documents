---
name: Build Your Own UI Using Electron
category: reTerminal
bzurl: 
wikiurl: 
sku: 
---

# Build Your Own UI Using Electron

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"></p>

## Introduction

This wiki explains how to build your own user interface using Electron. Electron is an open-source framework for creating native desktop applications (Windows, Mac, Linux) with web technologies like HTML, CSS and JavaScript. This means if you can build a website, you can build a desktop app!

By following the guide below, you will be able to create an application to control the GPIO pins on the reTerminal just by clicking buttons on the LCD. So let's get started!

## Prepare Development Environment

### Install the Necessary Packages on reTerminal

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

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/node-2.png" alt="pir" width="300" height="auto"></p>

### Set Remote Development Tools on Host PC

Now, we will set up Microsoft Visual Studio Code for our development.

- **Step 1.** Download and install [Microsoft Visual Studio Code](https://code.visualstudio.com/)

**Note:** Download the installer which is suitable for your operating system

- **Step 2.** Click on the **Extensions** tab on the left navigation menu and type **remote development** in the search box 

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"></p>

- **Step 3.** Select **Remote Development** and click **Install**

- **Step 4.** Press **F1** on the keyboard, type **ssh** and select **Remote-SSH:Connect to Host...** 

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"></p>

- **Step 5.** Enter the following 

```sh
pi@192.xxx.xx.xx
```

**Note:** **pi** is the username and **192.xxx.xx.xx** is the IP address of the reTerminal

- **Step 6.** Enter the password for the user

Now you have sucessfully logged in to reTerminal using SSH and have successfully finished preparing the development environment

## Sample Electron Application

### Create the Application

First we will create a simple electron application.

- **Step 1.** Open VSCode on the Host PC and login to reTerminal via SSH as explained before

- **Step 2.** Navigate to `File > Open Folder...`  and select a folder of your choice on the reTerminal

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-1.png" alt="pir" width="600" height="auto"></p>

- **Step 3.** Create a new folder and name it

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-2.png" alt="pir" width="550" height="auto"></p>

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-3.png" alt="pir" width="550" height="auto"></p>

- **Step 4.** Navigate to `Terminal > New Terminal` and navigate to the newly created folder

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-4.png" alt="pir" width="550" height="auto"></p>

**Note:** Here we use **cd** to change directory

- **Step 5.** Type the following inside this terminal window to create a **package.json** file with the needed configurations for our Node.js app

```sh
npm init
```

**Note:** Keep pressing **ENTER** to use the defaults for the answers, but set the **entry point: (index.js)** as **main.js** and **test command:** as **electron .**(Use a space and a dot after **electron**)

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-5.png" alt="pir" width="550" height="auto"></p>

If you want to change the configurations later, you can visit the **package.json** file inside our main app folder

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-6.png" alt="pir" width="650" height="auto"></p>

- **Step 6.** On the terminal inside VSCode, type the following to install **Electron**

```sh
npm install --save-dev electron
```

You will see the following output if Electron is successfully installed

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-7.png" alt="pir" width="700" height="auto"></p>

You will also see the **node_modules** folder generated with the required packages to run Electron

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-8.png" alt="pir" width="500" height="auto"></p>

- **Step 7.** Inside our main app directory, create a new file called **index.html** and copy the following codes

```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Test Application</title>
    </head>
    <body>
        <b>Hello World</b>
    </body>
</html>
```

**Note:** This HTML file is responsible to display the UI elements on the screen

- **Step 8.** Inside our main app directory, create a new file called **main.js** and copy the following codes

```javascript
const { app, BrowserWindow } = require('electron');

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        show: false,
    });
    mainWindow.maximize();
    mainWindow.loadFile('index.html');
    mainWindow.show();
});
```

**Note:** This Javascript file is responsible to create a window for our app and display the load the HTML file

Now we have created our test app and it's time to run the app

### Run the Application

- **Step 1.** Open terminal from reTerminal via built-in LCD, connected display or VNC and navigate to our app directory

```sh
Example:
cd /Desktop/testapp
```

- **Step 2.** Run the application 

```sh
npm test
```

You will see the following output if you have sucessfully run the app

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-9.png" alt="pir" width="1000" height="auto"></p>

## Smart Light Electron Application

Now that we have created a simple electron application, we will extend this by building a **Smart Light Electron Appication** that can be used to control the GPIO on the reTerminal by pressing buttons on the LCD. You can then connect relays to the GPIO and control home appliances as well!

Here we will use the same project that we used in our previous example and extend it.

### Set Up Hot Reload

Before we move on to creating our application, we will set up **hot reload on Electron** so that the application updates as you save the files. You will not need to run **npm test** everytime you change the contents inside your project.

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

### Create the HTML (Basic UI)

We will use the HTML file to create the basic user interface without any styling

- **Step 1.** Open the previous HTML file and add the following inside the **< head >** tag to load the **material icons** and **google fonts** api

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Test Application</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
</head>
```

- **Step 2.** Delete **Hello World** inside the **< body >** tag and add a heading for the application

```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Test Application</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    </head>
    <body>
        <h1 class="heading">SMART LAMP</h1>
    </body>
</html>
```

**Note:** Here we use the **class** attribute inside the **h1** tag to add styling to the heading later in our **.css** file. We will add more **class** attributes for other elements as well.

- **Step 3.** Add a **lightbulb icon** from the **material icons api**

```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Test Application</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    </head>
    <body>
        <h1 class="heading">SMART LAMP</h1>
        <i class="material-icons">lightbulb</i>
    </body>
</html>
```

- **Step 4.** Add two breaks two add two empty lines

```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Test Application</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    </head>
    <body>
        <h1 class="heading">SMART LAMP</h1>
        <i class="material-icons">lightbulb</i>
        <br>
        <br>
    </body>
</html>
```

- **Step 5.** Add two buttons that correponds to **ON** and **OFF**

```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Test Application</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    </head>
    <body>
        <h1 class="heading">SMART LAMP</h1>
        <i class="material-icons">lightbulb</i>
        <br>
        <br>
        <button class="button1">ON</button>
        <br>
        <button class="button2">OFF</button>
    </body>
</html>
```

**Note:** Add a break between the two buttons

- **Step 6.** Add a **close button** before the heading and add a break

```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Test Application</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    </head>
    <body>
        <button class="button3">X</button>
        <br>
        <h1 class="heading">SMART LAMP</h1>
        <i class="material-icons">lightbulb</i>
        <br>
        <br>
        <button class="button1">ON</button>
        <br>
        <button class="button2">OFF</button>
    </body>
</html>
```

Now we have finished creating the HTML file.

- **Step 7.** Run **npm test** to see the following output

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-15.png" alt="pir" width="1000" height="auto"></p>

**Note:** You can keep the app open, continue making changes to the files and the app will automatically show the changes as you update and save the files.

### Create the CSS (Styling)

We will use the CSS file to add different styling to the user interface created using the HTML file

- **Step 1.** Create a new file called **style.css** inside our main app directory

- **Step 2.** Open the **HTML file** that we created before and include the **CSS file** inside the **< head >** tag

```html
    <head>
        <meta charset="UTF-8">
        <title>Test Application</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
        <link rel="stylesheet" href="style.css">
    </head>
```

- **Step 3.** Open the **style.css** file and add a background color for the body of our app

```css
body {
    background-color:rgb(141, 141, 141);
}
```

**Note:** You can hover over the word **rgb** and select the color of your choice!

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-11.png" alt="pir" width="650" height="auto"></p>

- **Step 4.** Add styling to the **h1** tag we created before. Here we will use the name of the **class** attribute inside the h1 tag

```css
.heading {
    font-size: 60px;
    text-align: center;
    font-family: "Roboto", "Courier New", monospace;
    color: rgb(255, 255, 255);
}
```

**Note:** Here we change font size, font style, align text and change the color of the text

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-12.png" alt="pir" width="1000" height="auto"></p>

- **Step 5.** Add styling to the **light bulb**. Here the class is **material-icons**

```css
.material-icons{
    font-size: 250px;
    color: rgb(204, 202, 71);
    display: flex;
    justify-content: center;
}
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-13.png" alt="pir" width="1000" height="auto"></p>

- **Step 6.** Add styling to the **ON** button. Here the class is **button1**

```css
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
```

- **Step 7.** Add button press and hover effect to **ON** button

```css
.button1:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}

.button1:hover {background-color: rgb(62, 142, 65)}
```

- **Step 8.** Add styling to the **OFF** button. Here the class is **button2**

```css
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
```

- **Step 9.** Add button press and hover effect to **OFF** button

```css
.button2:active {
  box-shadow: 0 5px rgb(104, 99, 99);
  transform: translateY(4px);
}
  
.button2:hover {background-color: rgb(179, 44, 44)}
```

- **Step 10.** Add styling to the **close button**

```css
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

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-16.png" alt="pir" width="1000" height="auto"></p>

### Add GPIO Functions

Now let's add GPIO functionality to our app so that we can control the 40-pin GPIO on the reTerminal by pressing the **ON** and **OFF** buttons

#### Connect LED to GPIO 

We will connect an **LED** to the **GPIO 24** of the reTerminal for testing purposes. Later you can add a relay and control home appliances using the GPIO!

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-15.png" alt="pir" width="1000" height="auto"></p>

**Note:** A resistor is needed between the GPIO pin and the LED or otherwise the LED will burn out.

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

#### Add GPIO functions to index.html

Now we need to bind the button presses to the GPIOs on the reTerminal

- **Step 1.** Open the **index.html** file

- **Step 2.** Add a **onclick** attribute to the two buttons, close button and assign functions, namely **buttonclick1()**, **buttonclick2()** and **buttonclick3()**

```html
    <body>
        <button class="button3" onclick="buttonclick3()">X</button>
        <br>
        <h1 class="heading">SMART LAMP</h1> 
        <i class="material-icons">lightbulb</i>
        <br>
        <br>
        <button class="button1" onclick="buttonclick1()">ON</button>
        <br>
        <button class="button2" onclick="buttonclick2()">OFF</button>
    </body>
```

- **Step 3.** Add a **< script >** tag to embed **Javascript code** inside the **< head>** tag of the HTML file 

```html
    <head>
        <meta charset="UTF-8">
        <title>Test Application</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
        <link rel="stylesheet" href="style.css">
        <script>

        </script>
    </head>
```

- **Step 4.** Add **ipcRenderer module** inside the **script** tag

```html
        <script>
            const { ipcRenderer } = require('electron');
        </script>
```

**Note:** The ipcRenderer module is an EventEmitter. It provides a few methods so you can send messages from the render process (web page - html/css) to the main process (main.js). You can also receive replies from the main process

- **Step 5.** Add the functions to turn on the GPIO

```html
        <script>
            const { ipcRenderer } = require('electron');
            function buttonclick1()
            {
                ipcRenderer.send("msg",1)
            }
        </script>
```

**Note:** Here the **shareData()** function is included in the **onclick** attribute inside the button we created before. **ipcRenderer.send("msg",1)** will send **1** as a message with **"msg"** as the channel name. Later we will write codes inside the **main.js** file to receive this message.

- **Step 6.** Add the functions to turn off the GPIO

```html
        <script>
            const { ipcRenderer } = require('electron');
            function buttonclick1()
            {
                ipcRenderer.send("msg",1)
            }
    
            function buttonclick2()
            {
                ipcRenderer.send("msg1",0)
            }
        </script>
```

- **Step 7.** Add the functions to close the app

```html
        <script>
            const { ipcRenderer } = require('electron');
            function buttonclick1()
            {
                ipcRenderer.send("msg",1)
            }
    
            function buttonclick2()
            {
                ipcRenderer.send("msg1",0)
            }

            function buttonclick3()
            {
                ipcRenderer.send("close-me")
            }
        </script>
```

#### Add GPIO functions to main.js

Now we will receive the messages sent from the **ipcRenderer module** within the HTML file and then use the message to turn ON/OFF the GPIO. Here we will use a module called **ipcMain** to receive the messages sent fromt the renderer process (web page).

- **Step 1.** Open the **main.js** file

- **Step 2.** Include the **onoff** npm module and initialize **GPIO 24** as an **output**

```javascript
var Gpio = require('onoff').Gpio;
var LED = new Gpio(24, 'out');
```

- **Step 3.** Include **ipcMain module**

```javascript
const { app, BrowserWindow, ipcMain } = require('electron')
```

- **Step 4.** Use **ipcMain module** to receive the messages from the **ipcRenderer module** and turn ON/OFF the GPIO and close the app

```javascript
const { app, BrowserWindow, ipcMain } = require('electron')
ipcMain.on("msg",(event,data)=>{
  LED.writeSync(data);
})

ipcMain.on("msg1",(event,data)=>{
  LED.writeSync(data);
})

ipcMain.on("close-me", (event, arg) => {
    app.quit()
})
```

- **Step 5.** Add the following codes inside the **BrowserWindow** function to enable the communication between the main and rendered process.

```javascript
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
          }
    });
    mainWindow.loadFile('index.html');
});
```

- **Step 6.** Make the app fullscreen

```javascript
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        "fullscreen": true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
          }
    });
    mainWindow.loadFile('index.html');
});
```

### Test the App

You will see the output as soon as you save the previous file because we have turned on **electron-rebuild**. However if you have closed the app, you can open it again using **npm test** and see the following output

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"></p>

## Prepare a Script to Run the App

- **Step 1.** Open the Root folder that we created before and create a new **.sh file** under that folder

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-18.png" alt="pir" width="350" height="auto"></p>

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

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-20.png" alt="pir" width="340" height="auto"></p>

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

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"></p>

Now you can click on the buttons and you will see the LED light up!

### Debug the App

Let's go through the process of debugging your app while developing

- **Step 1.** Log in to reTerminal via **SSH** using **Microsoft Visual Studio Code** as mentioned before 

- **Step 2.** Log in to reTerminal via SSH using a SSH application such as [MobaXterm](https://mobaxterm.mobatek.net/) with **X11 server feature**

**Note:** X11 is needed to forward the reTerminal display and pop up on the PC

- **Step 3.** After writing all the codes on Microsoft Visual Studio Code to the reTerminal, navigate to the main app directory and run the following

```sh
npm test
```

Finally you will see the output displayed on a new window. If there are any errors in the code, they will be dislpayed in the MobaXterm terminal window.

## Resources

- **[GitHub]** [Electron_reTerminal_Smart_Lamp_UI](https://github.com/lakshanthad/Electron_reTerminal_Smart_Lamp_UI)
- **[Webpage]** [Electron Documentation](https://www.electronjs.org/docs/api)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>