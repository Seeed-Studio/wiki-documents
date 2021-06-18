---
name: Build Your Own UI Using Qt for Python
category: reTerminal
bzurl: 
wikiurl: 
sku: 
---

# Build Your Own UI Using Qt for Python

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"></p>

## Introduction

This wiki explains how to build your own user interface using Qt for Python on the reTerminal. Here we have used PySide2 for the development. PySide2 is the official Python module from the Qt for Python project, which provides access to the complete Qt5 framework.Qt for Python allows you to build interactive user interfaces in a more user friendly way! It is also very flexible to use and has a short learning curve. 

By following the guide below, you will be able to create an application to control the STA and USR LEDs on the reTerminal just by clicking buttons on the LCD. So let's get started!

## Prepare Development Environment

### Install the Necessary Packages on reTerminal

- **Step 1.** Access reTerminal using the **onboard LCD, external display or SSH** as explained [here](https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet) and type the following on a terminal window

```sh
sudo apt install qml-module-qtquick-shapes python3-pyside2.qtqml python3-pyside2.qtcore python3-pyside2.qtnetwork python3-pyside2.qtgui python3-pyside2.qtwidgets python3-pyside2.qtquick qtquickcontrols2-5-dev qml-module-qtcharts qml-module-qtquick-controls qml-module-qtquick-controls2
```

- **Step 2.** Install compile tools to install the **QtQuick.Studio** component manually

```sh
sudo apt install qmake qt5-defaults 
```

**Note:** We have to install QtQuick.Studio manually because default Debian and Ubuntu OS don't have this module 

- **Step 3.** Install the **QtQuick.Studio** module

```sh
git clone git://github.com/Pillar1989/qtquickdesigner-components.git
cd qtquickdesigner-components
qmake 
make 
sudo make install 
```

**Note:** Because the latest QtQuick.Studio module cannot work on the current Raspberry Pi OS, we had port it to Debian GNU/Linux 10 (buster)

Now we have finished installing the necessary packages on the reTerminal

### Set Remote Development Tools on Host PC

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

Now you have sucessfully logged in to reTerminal using SSH

- **Step 7.** Install **Python** extension as **step 2** before

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-extension.png" alt="pir" width="800" height="auto"></p>

- **Step 8.** Install **Qt for Python** extension

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/qt-python-extension.png" alt="pir" width="800" height="auto"></p>

- **Step 9.** Navigate to `File > Open Folder...` and select any folder that you want to open

**Note:** Later we will use Visual Studio Code to create files inside the reTerminal and build our project

Now we have successfully finished preparing the development environment

## Build the Project

Next let's move on to building the project. The workflow is as follows:

1. Design the UI on a **graphic designer software**
2. Create a **.qml** file and build the UI based on the positions of the UI elements obtained from the graphic designer software
3. Create another **.qml** for the full screen UI application 
4. Create a **python** file and write the functions that will be used to control the LEDs
5. Modify the **.qml** file in **2** above and build a relationship between the buttons on the UI and the python functions from the **python** file
6. Create a **Python** file to run the app
7. Create a **script** to run the python file
8. Create a **Desktop shortcut** to open the created app by double clicking on an icon

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

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-dimensions.png" alt="pir" width="800" height="auto"></p>

**Note:** We set it to 1280x720px because that's the resolution of the reTerminal LCD

- **Step 4.** Select the **Rectangle** shape

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/create-rect.png" alt="pir" width="800" height="auto"></p>

- **Step 5.** Draw a rectangle for the **title bar of the UI** by holding down on the left mouse button, drag the mouse and release

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-draw.jpg" alt="pir" width="800" height="auto"></p>

- **Step 6.** Draw a rectangle for the **title bar of the UI** by holding down on the left mouse button, drag the mouse and release

- **Step 7.** Draw the following shapes for the **buttons of the UI**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-buttons.png" alt="pir" width="800" height="auto"></p>

- **Step 8.** Select the shape and under **INSPECTOR** tab, select **Fills**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-color.png" alt="pir" width="500" height="auto"></p>

- **Step 9.** Click on a color to fill the selected shape

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-title-fill.png" alt="pir" width="800" height="auto"></p>

- **Step 10.** Fill the remaining shapes as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-colored-blocks.png" alt="pir" width="800" height="auto"></p>

- **Step 11.** Add a close button

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-close.png" alt="pir" width="800" height="auto"></p>

- **Step 12.** Click on the **Text tool**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-text.png" alt="pir" width="600" height="auto"></p>

- **Step 13.** Place a text block and type "LED TEST"

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-2.png" alt="pir" width="800" height="auto"></p>

- **Step 14.** Click on the text block, change the size and color

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-3.png" alt="pir" width="350" height="auto"></p>

- **Step 15.** Repeat the same to obtain the following

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-4.png" alt="pir" width="800" height="auto"></p>

Now we have finished designing the UI

### Build the UI on qml

Now we will transfer the design from Gravit Designer to qml and build the UI

- **Step 1.** Connect to reTerminal using SSH via Microsoft Visual Code, open a folder as mentioned before. 

- **Step 2.** Right click and select **New Folder** 

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-1.png" alt="pir" width="700" height="auto"></p>

- **Step 3.** Type a name for the folder and enter the folder

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-2.png" alt="pir" width="500" height="auto"></p>

- **Step 4.** Right click on the folder and select **New File**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-3.png" alt="pir" width="500" height="auto"></p>

- **Step 4.** Type a name for the file with **.qml** extension as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-4.png" alt="pir" width="600" height="auto"></p>

**Note:** Make sure the first letter is **Upper Case**

- **Step 5.** Enter the **.qml file** and type the following to import the necessary libraries

```qml
import QtQuick 2.8
import QtQuick.Controls 2.1
```

- **Step 6.** Add an **Item type** and define a width and height

```qml
Item {
    width: 1280
    height: 720
```

**Note:** The **Item type** is the base type for all visual items in Qt Quick. Here 1280 and 720 are chosen for the dimensions because the resolution of reTerminal LCD is 1280x720. The id is used to identity the qml 

- **Step 7.** Add an **id** field inside the **Item type** to label it.

```qml
Item {
    id: ledControl
    width: 1280
    height: 720
```

**Note:** It's a good practice to add the **id** field to all QML Types so that you can keep everything organized


- **Step 8.** Inside this Item type, add a **Rectangle type** for the title block

```qml
    Rectangle {
        id: titleBlock

    }
```

**Note:** The **Rectangle type** paints a filled rectangle with an optional border

- **Step 9.** Go back to the **Gravit Designer**, select the **title block** and obtain the **position and size** from the **INSPECTOR** tab

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/build-ui-4.5.png" alt="pir" width="350" height="auto"></p>

- **Step 10.** Come back to the **.qml file** and enter the properties inside the Rectangle type

```qml
    Rectangle {
        id: titleBlock
        x: 0
        y: 0
        width: 1280
        height: 175
        color: "green"
    }
```

**Note:** You can also enter **hexadecimal values** for the color field

- **Step 11.** Add a **Button type** for the left top button (ON) in the UI and fill the properties by referring to **Gravit Designer**

```qml
    Button {
        id: staGreenOn
        x: 159
        y: 272
        width: 200
        height: 91
        text: "ON"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
    }
```

**Note:** Here **palette.button** is for the button color and **palette.buttonText** is the text color inside the button

- **Step 12.** Repeat the same for the **remaining five ON/OFF buttons**

```qml
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
    }

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
    }

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
    }

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
    }

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
    }
```

- **Step 13.** Add a **Button type** for the **Close Button**

```qml
    Button {
        id: close
        x: 1200
        y: 0
        width: 80
        height: 31
        palette.button: "red"
        palette.buttonText: "white"
        text: "X"
    }
```

- **Step 14.** Add a **Text type** for the title text

```qml
    Text {
        id: title
    }
```

**Note:** The **Text type** specifies how to add formatted text to a scene

- **Step 15.** Obtain the **text properties** from **Gravit Designer** as explained before

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-5.jpg" alt="pir" width="350" height="auto"></p>

- **Step 16.** Obtain the **text properties** from **Gravit Designer** as explained before

- **Step 17.** Enter the properties inside the Text type

```qml
    Text {
        id: title
        x: 500
        y: 37
        color: "white"
        text: "LED TEST"
        font.pixelSize: 60
    }
```

- **Step 18.** Repeat the same for the remaining text blocks

```qml
    Text {
        id: staGreen
        x: 135
        y: 400
        text: "STA GREEN"
        font.pixelSize: 45
    }

    Text {
        id: staRed
        x: 547
        y: 400
        text: "STA RED"
        font.pixelSize: 45
    }

    Text {
        id: usrGreen
        x: 891
        y: 400
        text: "USR GREEN"
        font.pixelSize: 45
    }
```

- **Step 19.** Finally close the paranthesis to include all the above-mentioned QML Types inside the initial **Item Type**

```qml
}
```

### Build the Fullscreen UI

Next, let's build the fullscreen UI

- **Step 1.** Open the Root folder that we created before and create a new **.qml file** under that folder

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-6.png" alt="pir" width="400" height="auto"></p>

- **Step 2.** Open the file and include the following library

```qml
import QtQuick.Controls 2.1
```

- **Step 3.** Add an **ApplicationWindow type** and define the height and width of the application. Also make the visibility as "FullScreen" to run the app in fullscreen mode

```qml
ApplicationWindow {
    id: fullScreenUI
    width: 1280
    height: 720
    visible: true
    visibility: "FullScreen"
```

**Note:** ApplicationWindow is a window which makes it convenient to add a menu bar, header and a footer item to the window. Later this file will be run to open the UI

- **Step 4.** Initialize the first window of the app

```qml
    property var iniITEM: "LedGui.qml"
```

**Note:** This is the .qml file that we created before

- **Step 5.** Add a **StackView Type**

```qml
    StackView {
        id: stack
        initialItem: iniITEM
    }
```

The final **App.qml** file should look like below 

```qml
import QtQuick.Controls 2.1

ApplicationWindow {
    id: application
    width: 1280
    height: 720
    visible: true
    visibility: "FullScreen"

    property var iniITEM: "LedGui.qml"

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

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-1.png" alt="pir" width="400" height="auto"></p>

- **Step 2.** Enter the **.py** file and include the necessary libraries

```py
import sys
import os
from PySide2.QtCore import *
```

- **Step 3.** Create a class

```py
class Setting(QObject):
```

- **Step 4.** Include the following inside the class to control the **STA GREEN** LED

```py
    @Slot()
    def staGreenOn(self):     
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led2/brightness'")
    @Slot()
    def staGreenOff(self):     
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led2/brightness'")
```

**Note:** Here the value 255 is written into the **brightness** file to turn on the LED and the value 0 is written into the **brightness** file to turn off the LED

- **Step 5.** Include the following inside the class to control the **STA RED** LED

```py
    @Slot()
    def staRedOn(self):     
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led1/brightness'")
    @Slot()
    def staRedOff(self):     
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led1/brightness'")
```

- **Step 6.** Include the following inside the class to control the **USR GREEN** LED

```py
    @Slot()
    def usrGreenOn(self):     
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led0/brightness'")
    @Slot()
    def usrGreenOff(self):     
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led0/brightness'")
```

- **Step 6.** Include the following inside the class for the **Close Button**

```py
    @Slot()
    def closeWindow(self):
        sys.exit()
```

The final **ledControl.py** file should look like below 

```py
import sys
import os
from PySide2.QtCore import *

class Setting(QObject):

    #staGreen
    @Slot()
    def staGreenOn(self):     
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led2/brightness'")
    @Slot()
    def staGreenOff(self):     
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led2/brightness'")

    #staRed
    @Slot()
    def staRedOn(self):     
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led1/brightness'")
    @Slot()
    def staRedOff(self):     
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led1/brightness'")

    #usrGreen
    @Slot()
    def usrGreenOn(self):     
        os.system("sudo sh -c 'echo 255 > /sys/class/leds/usr_led0/brightness'")
    @Slot()
    def usrGreenOff(self):     
        os.system("sudo sh -c 'echo 0 > /sys/class/leds/usr_led0/brightness'")

    #close
    @Slot()
    def closeWindow(self):
        sys.exit()
```

Now we have completed the python file used to control the LEDs

### Build Relationship Between Buttons on UI and LEDs

Next we will use the previously created **LedGui.qml** file and add the relation for buttons to control the LEDs

- **Step 1.** Open the **LedGui.qml** file created before

- **Step 2.** Add the **onClicked:** field under the left top button (ON) as follows

```qml
    Button {
        id: staGreenOn
        x: 159
        y: 272
        width: 200
        height: 91
        text: "ON"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staGreenOn()
        }
    }
```

**Note:** **_Setting.staGreenOn()** is used to access the class in the Python file and turn on the LED

- **Step 3.** Repeat the same for the remaning ON/OFF buttons and the close button

The final **LedGui.qml** will look like below

```qml
import QtQuick 2.8
import QtQuick.Controls 2.1

Item {
    id: ledControl
    width: 1280
    height: 720

    Rectangle {
        id: titleBlock
        x: 0
        y: 0
        width: 1280
        height: 175
        color: "green"
    }

    Button {
        id: staGreenOn
        x: 159
        y: 272
        width: 200
        height: 91
        text: "ON"
        font.pointSize: 28
        palette.button: "green"
        palette.buttonText: "white"
        onClicked:
        {
            _Setting.staGreenOn()
        }
    }

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

    Text {
        id: title
        x: 500
        y: 37
        color: "white"
        text: "LED TEST"
        font.pixelSize: 60
    }

    Text {
        id: staGreen
        x: 135
        y: 400
        text: "STA GREEN"
        font.pixelSize: 45
    }

    Text {
        id: staRed
        x: 547
        y: 400
        text: "STA RED"
        font.pixelSize: 45
    }

    Text {
        id: usrGreen
        x: 891
        y: 400
        text: "USR GREEN"
        font.pixelSize: 45
    }
}
```

### Prepare Python File to Run the APP

Now we need to create a Python file that can be used to run the app that we have built

- **Step 1.** Open the Root folder that we created before and create a new **.py file** under that folder

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-7.png" alt="pir" width="400" height="auto"></p>

- **Step 2.** Enter the created file and include the necessary libraries

```py
from PySide2.QtQml import QQmlApplicationEngine
from PySide2.QtWidgets import *
from PySide2.QtCore import *
from ledControl import Setting
```

- **Step 3.** Type the following to launch the app

```py
if __name__ == '__main__':
    app = QApplication([])
    engine = QQmlApplicationEngine()
    url = QUrl("./App.qml")
    context = engine.rootContext()
    seting = Setting()
    context.setContextProperty("_Setting", seting)
    engine.load(url)
    app.exec_()
```

**Note:** Here **url** points to the location of the fullscreen app that we created before

The final **main.py** will look like below

```py
from PySide2.QtQml import QQmlApplicationEngine
from PySide2.QtWidgets import *
from PySide2.QtCore import *
from ledControl import Setting

if __name__ == '__main__':
    app = QApplication([])
    engine = QQmlApplicationEngine()
    url = QUrl("./App.qml")
    context = engine.rootContext()
    seting = Setting()
    context.setContextProperty("_Setting", seting)
    engine.load(url)
    app.exec_()
```

### Prepare a Script to Run the Python file

- **Step 1.** Open the Root folder that we created before and create a new **.sh file** under that folder

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-8.png" alt="pir" width="400" height="auto"></p>

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

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-9.png" alt="pir" width="400" height="auto"></p>

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

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"></p>

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

Finally you will see the output displayed on a new window. If there are any errors in the code, they will be dislpayed in the MobaXterm terminal window.

## Resources

- **[GitHub]** [Python_ReTerminalQt5_LED_UI](https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI)
- **[Webpage]** [Qt Documentation](https://doc.qt.io/qt-5/index.html)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>