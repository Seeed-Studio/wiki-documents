---
description:  Qt for reTerminal with Python
title:  Qt for reTerminal with Python
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-build-UI-using-Qt-for-Python
last_update:
  date: 1/31/2023
  author: jianjing Huang
---



<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

## Introduction

This wiki explains how to build your own user interface using Qt for Python on the reTerminal. Here we have used PySide2 for the development. PySide2 is the official Python module from the Qt for Python project, which provides access to the complete Qt5 framework.Qt for Python allows you to build interactive user interfaces in a more user friendly way! It is also very flexible to use and has a short learning curve.

By following the guide below, you will be able to create an application to control the STA and USR LEDs on the reTerminal just by clicking buttons on the LCD. So let's get started!

## Prepare Development Environment

### On reTerminal

- **Step 1.** Access reTerminal using the **onboard LCD, external display or SSH** as explained [here](https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet) and type the following on a terminal window

```sh
sudo apt install qml-module-qtquick-shapes python3-pyside2.qtqml python3-pyside2.qtcore python3-pyside2.qtnetwork python3-pyside2.qtgui python3-pyside2.qtwidgets python3-pyside2.qtquick qtquickcontrols2-5-dev qml-module-qtcharts qml-module-qtquick-controls qml-module-qtquick-controls2
```

- **Step 2.** Install compile tools to install the **QtQuick.Studio** component manually

```sh
sudo apt install qt5-qmake
```

**Note:** We have to install QtQuick.Studio manually because default Debian and Ubuntu OS don't have this module

- **Step 3.** Install the **QtQuick.Studio** module

```sh
git clone https://github.com/Pillar1989/qtquickdesigner-components.git
cd qtquickdesigner-components
qmake
make
sudo make install
```

**Note:** Because the latest QtQuick.Studio module cannot work on the current Raspberry Pi OS, we had port it to Debian GNU/Linux 10 (buster)

We can ignore the following prompt error.

```txt
Some of the required modules (qtHaveModule(quick)) are not available.
Skipped.
```

Now we have finished installing the necessary packages on the reTerminal

### On Host PC

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

Now you have sucessfully logged in to reTerminal using SSH

- **Step 7.** Install **Python** extension as **step 2** before

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-extension.png" alt="pir" width="800" height="auto"/></p>

- **Step 8.** Install **Qt for Python** extension

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/qt-python-extension.png" alt="pir" width="800" height="auto"/></p>

- **Step 9.** Navigate to `File > Open Folder...` and select any folder that you want to open

**Note:** Later we will use Visual Studio Code to create files inside the reTerminal and build our project

Now we have successfully finished preparing the development environment

## Build the Project

Next let's move on to building the project. The workflow is as follows:

1. Design the UI on a **graphic designer software**
2. Create a **.qml** file and build the UI based on the positions of the UI elements obtained from the graphic designer software
3. Create another **.qml** for the full screen UI application
4. Create a **python** file and write the functions that will be used to control the LEDs
5. Create a **Python** file to run the app
6. Create a **script** to run the python file
7. Create a **Desktop shortcut** to open the created app by double clicking on an icon

The files we need to create are as follows:

- LedGui.qml - UI with graphical elements
- App.qml - Full screen UI application
- ledControl.py - LEDs controlling functions
- main.py - Run the app
- led_start.sh - Run the Python file
- led.desktop - Open the app

### Design the UI

First we need to design the UI. To do this, we will use a free online graphic designer software called **Gravit Designer**

- **Step 1.** Click [this link](https://www.designer.io/) to open Gravit Designer

- **Step 2.** Click **Get Started**, create a free account or directly log in with Facebook or Google

- **Step 3.** Set the canvas size as **1280 x 720px** and click **Create!**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-dimensions.png" alt="pir" width="800" height="auto"/></p>

**Note:** We set it to 1280x720px because that's the resolution of the reTerminal LCD

- **Step 4.** Select the **Rectangle** shape

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/create-rect.png" alt="pir" width="800" height="auto"/></p>

- **Step 5.** Draw a rectangle for the **title bar of the UI** by holding down on the left mouse button, drag the mouse and release

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-draw.jpg" alt="pir" width="800" height="auto"/></p>

- **Step 6.** Draw a rectangle for the **title bar of the UI** by holding down on the left mouse button, drag the mouse and release

- **Step 7.** Draw the following shapes for the **buttons of the UI**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-buttons.png" alt="pir" width="800" height="auto"/></p>

- **Step 8.** Select the shape and under **INSPECTOR** tab, select **Fills**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-color.png" alt="pir" width="500" height="auto"/></p>

- **Step 9.** Click on a color to fill the selected shape

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-title-fill.png" alt="pir" width="800" height="auto"/></p>

- **Step 10.** Fill the remaining shapes as follows

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-colored-blocks.png" alt="pir" width="800" height="auto"/></p>

- **Step 11.** Add a close button

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-close.png" alt="pir" width="800" height="auto"/></p>

- **Step 12.** Click on the **Text tool**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-text.png" alt="pir" width="600" height="auto"/></p>

- **Step 13.** Place a text block and type "LED TEST"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-2.png" alt="pir" width="800" height="auto"/></p>

- **Step 14.** Click on the text block, change the size and color

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-3.png" alt="pir" width="350" height="auto"/></p>

- **Step 15.** Repeat the same to obtain the following

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-4.png" alt="pir" width="800" height="auto"/></p>

Now we have finished designing the UI

### Build the UI on qml

Now we will transfer the design from Gravit Designer to qml and build the UI

- **Step 1.** Connect to reTerminal using SSH via Microsoft Visual Code, open a folder as mentioned before.

- **Step 2.** Right click and select **New Folder**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-1.png" alt="pir" width="700" height="auto"/></p>

- **Step 3.** Type a name for the folder and enter the folder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-2.png" alt="pir" width="500" height="auto"/></p>

- **Step 4.** Right click on the folder and select **New File**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-3.png" alt="pir" width="500" height="auto"/></p>

- **Step 4.** Type a name for the file with **.qml** extension as follows

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-4.png" alt="pir" width="600" height="auto"/></p>

**Note:** Make sure the first letter is **Upper Case**

- **Step 5.** Enter the **.qml file** and copy the following codes

```qml
// import libraries
import QtQuick 2.8
import QtQuick.Controls 2.1

/* The Item type is the base type for all visual items in Qt Quick. Here 1280 and 720 are chosen
for the dimensions because the resolution of reTerminal LCD is 1280x720 */
Item {
    // identify the qml
    id: ledControl
    // define width and height of the app
    width: 1280
    height: 720

    // Rectangle block for the heading
    Rectangle {
        id: titleBlock
        x: 0 // Rectangle block position in x-axis
        y: 0 // Rectangle block position in y-axis
        width: 1280 // Rectangle block width
        height: 175 // Rectangle block height
        color: "green" // Rectangle block color
        /* You can also enter **hexadecimal values** for the color field */
    }

    // left top button (ON)
    Button {
        id: staGreenOn
        x: 159
        y: 272
        width: 200
        height: 91
        text: "ON" // text inside the button
        font.pointSize: 28 // text font
        palette.button: "green" // button color
        palette.buttonText: "white" // text color
        // Used to access the button control class in the Python file and turn on the LED
        onClicked:
        {
            _Setting.staGreenOn()
        }
    }

    // left bottom button (OFF)
    Button {
        id: staGreenOff
        x: 159
        y: 496
        width: 200
        height: 91
        text: "OFF"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staGreenOff()
        }
    }

    // middle top button (ON)
    Button {
        id: staRedOn
        x: 540
        y: 272
        width: 200
        height: 91
        text: "ON"
        font.pointSize: 28
        palette.button: "red"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staRedOn()
        }
    }

    // middle bottom button (OFF)
    Button {
        id: staRedOff
        x: 540
        y: 496
        width: 200
        height: 91
        text: "OFF"
        font.pointSize: 28
        palette.button: "red"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staRedOff()
        }
    }

    // right top button (ON)
    Button {
        id: usrGreenOn
        x: 918
        y: 272
        width: 200
        height: 91
        text: "ON"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.usrGreenOn()
        }
    }

    // right bottom button (OFF)
    Button {
        id: usrGreenOff
        x: 918
        y: 496
        width: 200
        height: 91
        text: "OFF"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.usrGreenOff()
        }
    }

    // close button
    Button {
        id: close
        x: 1200
        y: 0
        width: 80
        height: 31
        palette.button: "red"
        palette.buttonText: "white"
        text: "X"
        onClicked:
        {
            _Setting.closeWindow()
        }
    }

    // heading
    Text {
        id: title
        x: 500
        y: 37
        color: "white"
        text: "LED TEST"
        font.pixelSize: 60
    }

    // STA GREEN text
    Text {
        id: staGreen
        x: 135
        y: 400
        text: "STA GREEN"
        font.pixelSize: 45
    }

    // STA RED text
    Text {
        id: staRed
        x: 547
        y: 400
        text: "STA RED"
        font.pixelSize: 45
    }

    // USR GREEN text
    Text {
        id: usrGreen
        x: 891
        y: 400
        text: "USR GREEN"
        font.pixelSize: 45
    }
}
```

#### Obtain Location and Size of Shapes

Inside the **Gravit Designer**, select a shape block and obtain the **position and size** from the **INSPECTOR** tab

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/build-ui-4.5.png" alt="pir" width="350" height="auto"/></p>

#### Obtain Location and Size of Text

Inside the **Gravit Designer**, select a text block and obtain the **position and size** from the **INSPECTOR** tab

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-5.jpg" alt="pir" width="350" height="auto"/></p>

### Build the Fullscreen UI

Next, let's build the fullscreen UI

- **Step 1.** Open the Root folder that we created before and create a new **.qml file** under that folder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-6.png" alt="pir" width="400" height="auto"/></p>

- **Step 2.** Open the **.qml file** and copy the following codes

```qml
// import library
import QtQuick.Controls 2.1

// properties of the application window containing UI elements
ApplicationWindow {
    id: application
    width: 1280
    height: 720
    visible: true
    visibility: "FullScreen"

    // initialize the first window of the application
    property var iniITEM: "LedGui.qml"

    // stack-based navigation model
    StackView {
        id: stackview
        initialItem: iniITEM
    }
}
```

Now we have finished building the fullscreen app

### Methods to Control the LEDs

Next we will create a python file to obtain the methods to control the LEDs on the reTerminal

- **Step 1.** Open the root folder that we created before and create a new **.py** python file under that folder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-1.png" alt="pir" width="400" height="auto"/></p>

- **Step 2.** Enter the **.py** file and copy the following codes

```py
# import libraries
import sys
import os
from PySide2.QtCore import *

# class to handle button controls
class Setting(QObject):

    # staGreen ON/OFF
    @Slot()
    def staGreenOn(self):
        # turn ON
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led2/brightness'")
    @Slot()
    def staGreenOff(self):
        # turn OFF
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led2/brightness'")

    # staRed
    @Slot()
    def staRedOn(self):
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led1/brightness'")
    @Slot()
    def staRedOff(self):
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led1/brightness'")

    # usrGreen
    @Slot()
    def usrGreenOn(self):
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led0/brightness'")
    @Slot()
    def usrGreenOff(self):
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led0/brightness'")

    # close
    @Slot()
    def closeWindow(self):
        sys.exit()
```

Now we have completed the python file used to control the LEDs

### Prepare Python File to Run the APP

Now we need to create a Python file that can be used to run the app that we have built

- **Step 1.** Open the Root folder that we created before and create a new **.py file** under that folder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-7.png" alt="pir" width="400" height="auto"/></p>

- **Step 2.** Enter the created file and copy the following codes

```py
# import libraries
from PySide2.QtQml import QQmlApplicationEngine
from PySide2.QtWidgets import *
from PySide2.QtCore import *
from ledControl import Setting

# launch the app
if __name__ == '__main__':
    app = QApplication([])
    engine = QQmlApplicationEngine()
    # location of the fullscreen app that we created before
    url = QUrl("./App.qml")
    context = engine.rootContext()
    seting = Setting()
    context.setContextProperty("_Setting", seting)
    engine.load(url)
    app.exec_()
```

### Prepare a Script to Run the Python file

- **Step 1.** Open the Root folder that we created before and create a new **.sh file** under that folder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-8.png" alt="pir" width="400" height="auto"/></p>

- **Step 2.** Open the created file and enter the following

```sh
#!/bin/bash
cd $HOME/ledApp
DISPLAY=:0 python3 main.py
```

**Note:** Here **$HOME/ledApp** is the location of the **main.py** file

- **Step 3.** Open a terminal window inside the reTerminal and navigate to the root directory of the app

```sh
example:
cd /ledApp
```

- **Step 4.** Make the led_start.sh an executable file

```sh
chmod +x led_start.sh
```

### Prepare a Desktop File to Launch the App

- **Step 1.** Open the Root folder that we created before and create a new **.desktop file** under that folder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-9.png" alt="pir" width="400" height="auto"/></p>

- **Step 2.** Open the created file and enter the following

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/ledApp/led_start.sh
Type=Application
Categories=Application;Development;
```

**Note:** **Exec** is the location of the script that we created before

- **Step 3.** Open a terminal window inside the reTerminal and navigate to the root directory of the app

```sh
example:
cd /ledApp
```

- **Step 4.** Make the led_start.sh an executable file

```sh
chmod +x led.desktop
```

### Launch the App

- **Step 1.** Navigate to the **ledApp folder** using the reTerminal LCD

- **Step 2.** Double click on the **LED Test** file

You will see the output as follows

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

Now you can click on the buttons and you will see the LEDs light up!

### Debugging the App

Let's go through the process of debugging your app while developing

- **Step 1.** Log in to reTerminal via **SSH** using **Microsoft Visual Studio Code** as mentioned before

- **Step 2.** Log in to reTerminal via SSH using a SSH application such as [MobaXterm](https://mobaxterm.mobatek.net/) with **X11 server feature**

**Note:** X11 is needed to forward the reTerminal display and pop up on the PC

- **Step 3.** After writing all the codes on Microsoft Visual Studio Code to the reTerminal, run the **main.py file** using MobaXterm

```sh
python3 main.py
```

## Direct Test

Follow the steps above to set up your environment, copy the code directly and run it.

```bash
git clone https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI
cd Python_ReTerminalQt5_LED_UI
python3 main.py
```

Finally you will see the output displayed on a new window. If there are any errors in the code, they will be dislpayed in the MobaXterm terminal window.

## Bonus Demo

If you want to experience a more interesting demo with Qt for Python, you can checkout [this GitHub repo](https://github.com/Seeed-Studio/Seeed_Python_ReTerminalQt5Examples)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" alt="pir" width="1000" height="auto"/></p>

## Resources

- **[GitHub]** [Python_ReTerminalQt5_LED_UI](https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI)
- **[Webpage]** [Qt Documentation](https://doc.qt.io/qt-5/index.html)

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
