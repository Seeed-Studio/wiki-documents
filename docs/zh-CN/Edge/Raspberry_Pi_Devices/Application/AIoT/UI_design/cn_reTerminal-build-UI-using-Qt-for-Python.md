---
description: 使用 Python 在 reTerminal 上使用 Qt
title: 使用 Python 在 reTerminal 上使用 Qt
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-build-UI-using-Qt-for-Python
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

## 介绍

本教程介绍如何在 reTerminal 上使用 Python 的 Qt 构建自己的用户界面。这里我们使用 PySide2 进行开发。PySide2 是来自 Qt for Python 项目的官方 Python 模块，它提供了对完整 Qt5 框架的访问。Qt for Python 允许您以更加用户友好的方式构建交互式用户界面！它使用起来也非常灵活，学习曲线较短。

通过遵循下面的指南，您将能够创建一个应用程序，只需点击 LCD 上的按钮即可控制 reTerminal 上的 STA 和 USR LED。让我们开始吧！

## 准备开发环境

### 在 reTerminal 上

- **步骤 1.** 使用**板载 LCD、外部显示器或 SSH** 访问 reTerminal，如[此处](https://wiki.seeedstudio.com/cn/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)所述，并在终端窗口中输入以下内容

```sh
sudo apt install qml-module-qtquick-shapes python3-pyside2.qtqml python3-pyside2.qtcore python3-pyside2.qtnetwork python3-pyside2.qtgui python3-pyside2.qtwidgets python3-pyside2.qtquick qtquickcontrols2-5-dev qml-module-qtcharts qml-module-qtquick-controls qml-module-qtquick-controls2
```

- **步骤 2.** 安装编译工具以手动安装 **QtQuick.Studio** 组件

```sh
sudo apt install qt5-qmake
```

**注意：** 我们必须手动安装 QtQuick.Studio，因为默认的 Debian 和 Ubuntu 操作系统没有这个模块

- **步骤 3.** 安装 **QtQuick.Studio** 模块

```sh
git clone https://github.com/Pillar1989/qtquickdesigner-components.git
cd qtquickdesigner-components
qmake
make
sudo make install
```

**注意：** 由于最新的 QtQuick.Studio 模块无法在当前的 Raspberry Pi OS 上运行，我们已将其移植到 Debian GNU/Linux 10 (buster)

我们可以忽略以下提示错误。

```txt
Some of the required modules (qtHaveModule(quick)) are not available.
Skipped.
```

现在我们已经完成了在 reTerminal 上安装必要软件包的工作

### 在主机 PC 上

- **步骤 1.** 下载并安装 [Microsoft Visual Studio Code](https://code.visualstudio.com/)

**注意：** 下载适合您操作系统的安装程序

- **步骤 2.** 点击左侧导航菜单中的 **Extensions** 选项卡，在搜索框中输入 **remote development**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-dev-extension.png" alt="pir" width="800" height="auto"/></p>

- **步骤 3.** 选择 **Remote Development** 并点击 **Install**

- **步骤 4.** 按键盘上的 **F1** 键，输入 **ssh** 并选择 **Remote-SSH:Connect to Host...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remote-ssh.png" alt="pir" width="800" height="auto"/></p>

- **步骤 5.** 输入以下内容

```sh
pi@192.xxx.xx.xx
```

**注意：** **pi** 是用户名，**192.xxx.xx.xx** 是 reTerminal 的 IP 地址

- **步骤 6.** 输入用户密码

现在您已经成功通过 SSH 登录到 reTerminal

- **步骤 7.** 如前面**步骤 2** 所述，安装 **Python** 扩展

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-extension.png" alt="pir" width="800" height="auto"/></p>

- **步骤 8.** 安装 **Qt for Python** 扩展

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/qt-python-extension.png" alt="pir" width="800" height="auto"/></p>

- **步骤 9.** 导航到 `File > Open Folder...` 并选择您想要打开的任何文件夹

**注意：** 稍后我们将使用 Visual Studio Code 在 reTerminal 内创建文件并构建我们的项目

现在我们已经成功完成了开发环境的准备工作

## 构建项目

接下来让我们开始构建项目。工作流程如下：

1. 在**图形设计软件**上设计 UI
2. 创建一个 **.qml** 文件，并基于从图形设计软件获得的 UI 元素位置构建 UI
3. 为全屏 UI 应用程序创建另一个 **.qml** 文件
4. 创建一个 **python** 文件并编写用于控制 LED 的函数
5. 创建一个 **Python** 文件来运行应用程序
6. 创建一个**脚本**来运行 python 文件
7. 创建一个**桌面快捷方式**，通过双击图标来打开创建的应用程序

我们需要创建的文件如下：

- LedGui.qml - 带有图形元素的 UI
- App.qml - 全屏 UI 应用程序
- ledControl.py - LED 控制函数
- main.py - 运行应用程序
- led_start.sh - 运行 Python 文件
- led.desktop - 打开应用程序

### 设计 UI

首先我们需要设计 UI。为此，我们将使用一个名为 **Gravit Designer** 的免费在线图形设计软件

- **步骤 1.** 点击[此链接](https://www.designer.io/)打开 Gravit Designer

- **步骤 2.** 点击 **Get Started**，创建免费账户或直接使用 Facebook 或 Google 登录

- **步骤 3.** 将画布大小设置为 **1280 x 720px** 并点击 **Create!**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-dimensions.png" alt="pir" width="800" height="auto"/></p>

**注意：** 我们将其设置为 1280x720px，因为这是 reTerminal LCD 的分辨率

- **步骤 4.** 选择**矩形**形状

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/create-rect.png" alt="pir" width="800" height="auto"/></p>

- **步骤 5.** 通过按住鼠标左键、拖动鼠标并释放来绘制 **UI 标题栏**的矩形

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-draw.jpg" alt="pir" width="800" height="auto"/></p>

- **步骤 6.** 通过按住鼠标左键、拖动鼠标并释放来绘制 **UI 标题栏**的矩形

- **步骤 7.** 为 **UI 按钮**绘制以下形状

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-buttons.png" alt="pir" width="800" height="auto"/></p>

- **步骤 8.** 选择形状，在 **INSPECTOR** 选项卡下，选择 **Fills**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-color.png" alt="pir" width="500" height="auto"/></p>

- **步骤 9.** 点击颜色来填充选定的形状

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/rect-title-fill.png" alt="pir" width="800" height="auto"/></p>

- **步骤 10.** 按如下方式填充其余形状

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-colored-blocks.png" alt="pir" width="800" height="auto"/></p>

- **步骤 11.** 添加关闭按钮

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-close.png" alt="pir" width="800" height="auto"/></p>

- **步骤 12.** 点击**文本工具**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/gravit-text.png" alt="pir" width="600" height="auto"/></p>

- **步骤 13.** 放置文本块并输入 "LED TEST"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-2.png" alt="pir" width="800" height="auto"/></p>

- **步骤 14.** 点击文本块，更改大小和颜色

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-3.png" alt="pir" width="350" height="auto"/></p>

- **步骤 15.** 重复相同操作以获得以下结果

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/gravit-text-4.png" alt="pir" width="800" height="auto"/></p>

现在我们已经完成了 UI 设计

### 在 qml 中构建 UI

现在我们将把设计从 Gravit Designer 转移到 qml 并构建 UI

- **步骤 1.** 通过 Microsoft Visual Code 使用 SSH 连接到 reTerminal，如前所述打开一个文件夹。

- **步骤 2.** 右键点击并选择 **New Folder**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-1.png" alt="pir" width="700" height="auto"/></p>

- **步骤 3.** 为文件夹输入名称并进入文件夹

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-2.png" alt="pir" width="500" height="auto"/></p>

- **步骤 4.** 右键点击文件夹并选择 **New File**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-3.png" alt="pir" width="500" height="auto"/></p>

- **步骤 4.** 为文件输入带有 **.qml** 扩展名的名称，如下所示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-4.png" alt="pir" width="600" height="auto"/></p>

**注意：** 确保首字母是**大写**

- **步骤 5.** 进入 **.qml 文件**并复制以下代码

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

#### 获取形状的位置和大小

在 **Gravit Designer** 中，选择一个形状块并从 **INSPECTOR** 选项卡中获取 **位置和大小**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/build-ui-4.5.png" alt="pir" width="350" height="auto"/></p>

#### 获取文本的位置和大小

在 **Gravit Designer** 中，选择一个文本块并从 **INSPECTOR** 选项卡中获取 **位置和大小**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-5.jpg" alt="pir" width="350" height="auto"/></p>

### 构建全屏UI

接下来，让我们构建全屏UI

- **步骤 1.** 打开我们之前创建的根文件夹，并在该文件夹下创建一个新的 **.qml 文件**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki3/buildui-6.png" alt="pir" width="400" height="auto"/></p>

- **步骤 2.** 打开 **.qml 文件** 并复制以下代码

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

现在我们已经完成了全屏应用的构建

### 控制LED的方法

接下来我们将创建一个python文件来获取控制reTerminal上LED的方法

- **步骤 1.** 打开我们之前创建的根文件夹，在该文件夹下创建一个新的 **.py** python文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/python-1.png" alt="pir" width="400" height="auto"/></p>

- **步骤 2.** 进入 **.py** 文件并复制以下代码

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

现在我们已经完成了用于控制LED的python文件

### 准备Python文件来运行APP

现在我们需要创建一个Python文件，用于运行我们构建的应用程序

- **步骤 1.** 打开我们之前创建的根文件夹，在该文件夹下创建一个新的 **.py文件**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-7.png" alt="pir" width="400" height="auto"/></p>

- **步骤 2.** 进入创建的文件并复制以下代码

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

### 准备运行 Python 文件的脚本

- **步骤 1.** 打开我们之前创建的根文件夹，在该文件夹下创建一个新的 **.sh 文件**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-8.png" alt="pir" width="400" height="auto"/></p>

- **步骤 2.** 打开创建的文件并输入以下内容

```sh
#!/bin/bash
cd $HOME/ledApp
DISPLAY=:0 python3 main.py
```

**注意：** 这里的 **$HOME/ledApp** 是 **main.py** 文件的位置

- **步骤 3.** 在 reTerminal 内打开终端窗口并导航到应用程序的根目录

```sh
example:
cd /ledApp
```
- **步骤 4.** 将 led_start.sh 设置为可执行文件

```sh
chmod +x led_start.sh
```

### 准备桌面文件来启动应用程序

- **步骤 1.** 打开我们之前创建的根文件夹，并在该文件夹下创建一个新的 **.desktop 文件**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/buildui-9.png" alt="pir" width="400" height="auto"/></p>

- **步骤 2.** 打开创建的文件并输入以下内容

```sh
[Desktop Entry]
Encoding=UTF-8
Name=LED Test
Comment=IconTest Link
Exec=/home/pi/ledApp/led_start.sh
Type=Application
Categories=Application;Development;
```

**注意：** **Exec** 是我们之前创建的脚本的位置

- **步骤 3.** 在 reTerminal 内打开终端窗口并导航到应用程序的根目录

```sh
example:
cd /ledApp
```
- **步骤 4.** 将 led_start.sh 设置为可执行文件

```sh
chmod +x led.desktop
```

### 启动应用程序

- **步骤 1.** 使用 reTerminal LCD 导航到 **ledApp 文件夹**

- **步骤 2.** 双击 **LED Test** 文件

您将看到如下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/final-output.png" alt="pir" width="1000" height="auto"/></p>

现在您可以点击按钮，您将看到 LED 灯亮起！

### 调试应用程序

让我们了解一下在开发过程中调试应用程序的过程

- **步骤 1.** 如前所述，使用 **Microsoft Visual Studio Code** 通过 **SSH** 登录到 reTerminal

- **步骤 2.** 使用具有 **X11 服务器功能**的 SSH 应用程序（如 [MobaXterm](https://mobaxterm.mobatek.net/)）通过 SSH 登录到 reTerminal

**注意：** 需要 X11 来转发 reTerminal 显示并在 PC 上弹出

- **步骤 3.** 在 Microsoft Visual Studio Code 上将所有代码写入 reTerminal 后，使用 MobaXterm 运行 **main.py 文件**

```sh
python3 main.py
```

## 直接测试

按照上述步骤设置您的环境，直接复制代码并运行。

```bash
git clone https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI
cd Python_ReTerminalQt5_LED_UI
python3 main.py
```

最终您将在新窗口中看到显示的输出。如果代码中有任何错误，它们将在 MobaXterm 终端窗口中显示。

## 额外演示

如果您想体验更有趣的 Qt for Python 演示，您可以查看[这个 GitHub 仓库](https://github.com/Seeed-Studio/Seeed_Python_ReTerminalQt5Examples)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Qt-Demo.gif" alt="pir" width="1000" height="auto"/></p>

## 资源

- **[GitHub]** [Python_ReTerminalQt5_LED_UI](https://github.com/lakshanthad/Python_ReTerminalQt5_LED_UI)
- **[网页]** [Qt 文档](https://doc.qt.io/qt-5/index.html)

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
