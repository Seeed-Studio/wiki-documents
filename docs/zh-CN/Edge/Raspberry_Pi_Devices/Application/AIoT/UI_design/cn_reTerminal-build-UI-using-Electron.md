---
description: 用于 reTerminal 的 Electron
title: 用于 reTerminal 的 Electron
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-build-UI-using-Electron
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## 介绍

本教程介绍如何使用 Electron 构建您自己的用户界面。Electron 是一个开源框架，用于使用 HTML、CSS 和 JavaScript 等 Web 技术创建原生桌面应用程序（Windows、Mac、Linux）。这意味着如果您能构建网站，就能构建桌面应用程序！

通过遵循下面的指南，您将能够创建一个应用程序，只需点击 LCD 上的按钮即可控制 reTerminal 上的 GPIO 引脚。让我们开始吧！

## 准备开发环境

### 在 reTerminal 上

首先，我们将在 reTerminal 上安装 **Node.js** 和 **npm**。npm 是 Node.js 包的包管理器。

- **步骤 1.** 使用**板载 LCD、外部显示器或 SSH** 访问 reTerminal，如[此处](https://wiki.seeedstudio.com/cn/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)所述

- **步骤 2.** 升级软件包

```sh
sudo apt update
sudo apt full-upgrade 
```

- **步骤 3.** 下载脚本以安装 Node.js

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

- **步骤 4.** 安装 Node.js

```sh
sudo apt install -y nodejs
```

Node.js 现在已安装在 reTerminal 上。要检查安装是否成功，请运行以下命令来检查 **Node.js** 和 **npm** 的版本

```sh
node -v
npm -v
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/node-2.png" alt="pir" width="300" height="auto"/></p>

### 在主机PC上

现在，我们将为开发设置Microsoft Visual Studio Code。

- **步骤1.** 下载并安装[Microsoft Visual Studio Code](https://code.visualstudio.com/)

**注意：** 下载适合您操作系统的安装程序

- **步骤2.** 点击左侧导航菜单中的**扩展**选项卡，在搜索框中输入**remote development**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **步骤3.** 选择**Remote Development**并点击**安装**

- **步骤4.** 按键盘上的**F1**键，输入**ssh**并选择**Remote-SSH:Connect to Host...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **步骤5.** 输入以下内容

```sh
pi@192.xxx.xx.xx
```

**注意：** **pi** 是用户名，**192.xxx.xx.xx** 是 reTerminal 的 IP 地址

- **步骤 6.** 输入用户密码

现在您已经成功使用 SSH 登录到 reTerminal，并成功完成了开发环境的准备工作

## 智能灯光 Electron 应用程序

现在我们将构建一个**智能灯光 Electron 应用程序**，可以通过按下 LCD 上的按钮来控制 reTerminal 上的 GPIO。然后您可以将继电器连接到 GPIO 并控制家用电器！

### 硬件连接

我们将把一个 **LED** 连接到 reTerminal 的 **GPIO 24** 进行测试。稍后您可以添加继电器并使用 GPIO 控制家用电器！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="1000" height="auto"/></p>

**注意：** 在 GPIO 引脚和 LED 之间需要一个电阻，否则 LED 会烧坏。

### 创建和初始化应用程序

- **步骤 1.** 在主机 PC 上打开 VSCode，并按照之前的说明通过 SSH 登录到 reTerminal

- **步骤 2.** 导航到 `File > Open Folder...` 并在 reTerminal 上选择您选择的文件夹

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-1.png" alt="pir" width="600" height="auto"/></p>

- **步骤 3.** 创建一个新文件夹并为其命名

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-2.png" alt="pir" width="550" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-3.png" alt="pir" width="550" height="auto"/></p>

- **步骤 4.** 导航到 `Terminal > New Terminal` 并导航到新创建的文件夹

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-4.png" alt="pir" width="550" height="auto"/></p>

**注意：** 这里我们使用 **cd** 来更改目录

- **步骤 5.** 在此终端窗口中输入以下内容，为我们的 Node.js 应用程序创建一个包含所需配置的 **package.json** 文件

```sh
npm init
```

**注意：** 继续按 **ENTER** 键使用默认答案，但将 **entry point: (index.js)** 设置为 **main.js**，将 **test command:** 设置为 **electron .**（在 **electron** 后使用一个空格和一个点）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-5.png" alt="pir" width="550" height="auto"/></p>

如果您想稍后更改配置，可以访问主应用程序文件夹内的 **package.json** 文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-6.png" alt="pir" width="650" height="auto"/></p>

- **步骤 6.** 在 VSCode 内的终端中，输入以下命令来安装 **Electron**

```sh
npm install --save-dev electron
```

如果 Electron 成功安装，您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-7.png" alt="pir" width="700" height="auto"/></p>

您还将看到生成的 **node_modules** 文件夹，其中包含运行 Electron 所需的包

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-8.png" alt="pir" width="500" height="auto"/></p>

#### 安装 onoff npm 模块

onoff npm 模块允许您使用 Electron 应用程序访问和控制 reTerminal 上的 GPIO

- **步骤 1.** 按照之前的说明在 VSCode 中打开终端窗口，并导航到我们的主应用程序目录

- **步骤 2.** 输入以下命令来安装 **onoff** npm 模块

```sh
npm install onoff
```

#### 安装并运行 electron-rebuild npm 模块

electron-rebuild npm 模块会针对您的 Electron 项目所使用的 Node.js 版本重新构建原生 Node.js 模块。这允许您在 Electron 应用程序中使用原生 Node.js 模块，而无需您的系统 Node.js 版本完全匹配（这种情况经常不符合，有时甚至不可能实现）

- **步骤 1.** 安装 **electron-rebuild** npm 模块

```sh
npm install --save-dev electron-rebuild
```

- **步骤 2.** 运行 electron-rebuild

```sh
./node_modules/.bin/electron-rebuild
```

**注意：** 每当您安装新的 npm 包时，请重新运行 electron-rebuild

### 创建 HTML（基本 UI）

我们将使用 HTML 文件来创建基本的用户界面，不包含任何样式。这个 HTML 文件负责在屏幕上显示 UI 元素。

在我们的主应用程序目录中，创建一个名为 **index.html** 的新文件并复制以下代码

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

**注意：** **ipcRenderer 模块**是一个 EventEmitter。它提供了一些方法，让你可以从渲染进程（网页 - html/css）向主进程（main.js）发送消息。你也可以接收来自主进程的回复。

现在我们已经完成了 HTML 文件的创建。

运行 **npm test** 来查看以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-15.png" alt="pir" width="1000" height="auto"/></p>

### 创建 CSS（样式）

我们将使用 CSS 文件为使用 HTML 文件创建的用户界面添加不同的样式

在我们的主应用目录中，创建一个名为 **style.css** 的新文件并复制以下代码

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

应用程序的最终输出如下所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-16.png" alt="pir" width="1000" height="auto"/></p>

### 创建 Javascript（加载和执行应用程序）

我们将使用 Javascript 文件来创建应用程序窗口，显示并加载 HTML 文件，并添加 GPIO 功能。

在我们的主应用程序目录中，创建一个名为 **main.js** 的新文件并复制以下代码

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

**注意：** **ipcMain** 提供了一些方法，让您可以接收从渲染进程（网页）发送的消息。

### 测试应用

由于我们已经启用了 **electron-rebuild**，您在保存前一个文件后会立即看到输出。但是，如果您已经关闭了应用，可以使用 **npm test** 重新打开它，并看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

## 准备运行应用的脚本

- **步骤 1.** 打开我们之前创建的根文件夹，在该文件夹下创建一个新的 **.sh 文件**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-18.png" alt="pir" width="350" height="auto"/></p>

- **步骤 2.** 打开创建的文件并输入以下内容

```sh
#!/bin/bash
cd $HOME/Desktop/testapp
DISPLAY=:0 npm test
```

**注意：** 这里的 **$HOME/Desktop/testapp** 是 electron 项目的位置

- **步骤 3.** 在 VSCode 中打开终端窗口并导航到应用程序的根目录

```sh
example:
cd ~/Desktop/testapp
```

- **步骤 4.** 将 ledstart.sh 设置为可执行文件

```sh
sudo chmod +x ledstart.sh
```

## 准备桌面文件来启动应用程序

- **步骤 1.** 打开 **Desktop 文件夹** 并在该文件夹下创建一个新的 **.desktop 文件**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-20.png" alt="pir" width="340" height="auto"/></p>

- **步骤 2.** 打开创建的文件并输入以下内容

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/Desktop/testapp/ledStart.sh
Type=Application
Categories=Application;Development;
```

**注意：** **Exec** 是我们之前创建的脚本的位置

- **步骤 3.** 在 VSCode 中打开终端窗口并导航到桌面

```sh
example:
cd ~/Desktop
```

- **步骤 4.** 将 **ledStart.desktop** 设置为可执行文件

```sh
sudo chmod +x ledStart.desktop
```

### 启动应用

双击 reTerminal LCD 桌面上的 **LED Test** 文件

您将看到如下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"/></p>

现在您可以点击按钮，您将看到 LED 亮起！

## 调试应用

让我们了解一下在开发过程中调试应用的流程

- **步骤 1.** 如前所述，使用 **Microsoft Visual Studio Code** 通过 **SSH** 登录到 reTerminal

- **步骤 2.** 使用具有 **X11 服务器功能** 的 SSH 应用程序（如 [MobaXterm](https://mobaxterm.mobatek.net/)）通过 SSH 登录到 reTerminal

**注意：** 需要 X11 来转发 reTerminal 显示并在 PC 上弹出

- **步骤 3.** 在 Microsoft Visual Studio Code 上将所有代码写入 reTerminal 后，导航到主应用目录并运行以下命令

```sh
npm test
```

最后，您将在新窗口中看到显示的输出。如果代码中有任何错误，它们将在 MobaXterm 终端窗口中显示。

## FAQ

### Q: 如何设置在保存应用时自动更新？

为此，您可以使用 electron-reloader npm 模块设置热重载功能

- **步骤 1.** 安装 **electron-reloader**

```sh
npm install --save-dev electron-reloader
```

- **步骤 2.** 在 **main.js** 文件末尾添加以下行

```javascript
try {
  require('electron-reloader')(module)
} catch (_) {}
```

现在使用 **npm test** 运行一次文件，应用程序将在您保存文件时更新。您不需要在每次更改项目内容时都运行 **npm test**。

## 奖励演示

如果您想体验一个更有趣的 Electron 演示，您可以查看[这个 GitHub 仓库](https://github.com/lakshanthad/Electron_reterminal_hardware)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/electron-reterminal-hw-demo.jpg" alt="pir" width="1000" height="auto"/></p>

## 资源

- **[GitHub]** [Electron_reTerminal_Smart_Lamp_UI](https://github.com/lakshanthad/Electron_reTerminal_Smart_Lamp_UI)
- **[网页]** [Electron 文档](https://www.electronjs.org/docs/api)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
