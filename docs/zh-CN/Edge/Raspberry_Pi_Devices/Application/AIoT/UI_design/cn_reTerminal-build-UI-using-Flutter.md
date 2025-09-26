---
description: 用于 reTerminal 的 Flutter
title: 用于 reTerminal 的 Flutter
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-build-UI-using-Flutter
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

## 介绍

本教程介绍如何使用 Flutter 构建您自己的用户界面。Flutter 是由 Google 创建的开源 UI 软件开发工具包。它用于从单一代码库开发适用于 Android、iOS、Linux、Mac、Windows、Google Fuchsia 和 Web 的跨平台应用程序。这意味着您可以使用一种编程语言和一个代码库来创建两个不同的应用程序（适用于 iOS、Android 等）。

要使用 Flutter 进行开发，您需要一种名为 Dart 的编程语言。Dart 是由 Google 开发的开源、通用、面向对象的编程语言，具有 C 风格语法。

在这里，我们将使用 Flutter 在 PC 上开发应用程序，然后使用 flutter-pi 在 reTerminal 上运行该应用程序。flutter-pi 是适用于 Raspberry Pi 的轻量级 Flutter 引擎嵌入器，无需 X 即可运行。这意味着您无需启动到 Raspberry Pi OS 桌面并加载 X11 和 LXDE。您只需启动到命令行并运行您的应用程序。

通过遵循以下指南，您将能够创建一个应用程序，只需点击 LCD 上的按钮即可控制 reTerminal 上的 GPIO 引脚。让我们开始吧！

## 准备开发环境

### 在 reTerminal 上

首先我们需要在 reTerminal 上安装 **flutter-pi**。

> 点击[这里](https://github.com/ardera/flutter-pi)访问 flutter-pi 的 GitHub 仓库

- **步骤 1.** 按照[此教程](https://wiki.seeedstudio.com/cn/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)中的说明登录到 reTerminal，并在 reTerminal 上安装 **flutter 引擎二进制文件**

```sh
git clone --depth 1 https://github.com/ardera/flutter-engine-binaries-for-arm.git engine-binaries
cd engine-binaries
sudo ./install.sh
```

- **步骤 2.** 安装 cmake、图形库、系统库和字体

```sh
sudo apt install cmake libgl1-mesa-dev libgles2-mesa-dev libegl1-mesa-dev libdrm-dev libgbm-dev ttf-mscorefonts-installer fontconfig libsystemd-dev libinput-dev libudev-dev  libxkbcommon-dev
```

- **步骤 3.** 更新系统字体

```sh
sudo fc-cache
```

- **步骤 4.** 克隆 flutter-pi 并进入克隆的目录

```sh
git clone https://github.com/ardera/flutter-pi
cd flutter-pi
```

- **步骤 5.** 编译 flutter-pi

```sh
mkdir build && cd build
cmake ..
make -j`nproc`
```

- **步骤 6.** 安装 flutter-pi

```sh
sudo make install
```

- **步骤 7.** 打开 raspi-config

```sh
sudo raspi-config
```

- **步骤 8.** 通过导航到 `System Options > Boot / Auto Login` 切换到控制台模式，并选择 **Console 或 Console (Autologin)**

- **步骤 9.** 通过导航到 `Advanced Options > GL Driver > GL (Fake KMS)` 启用 V3D 图形驱动程序

- **步骤 10.** 通过导航到 `Performance Options -> GPU Memory` 配置 GPU 内存，并输入 **64**

- **步骤 11.** 在键盘上按 **ESC** 键退出 **rasp-config** 窗口

- **步骤 12.** 给予 reTerminal 使用 3D 加速的权限。（注意：存在潜在的安全风险。如果您不想这样做，请使用 **sudo** 启动 flutter-pi。）

```sh
usermod -a -G render pi
```

- **步骤 13.** 重启 reTerminal

```sh
sudo reboot
```

现在我们已经完成了在 reTerminal 上安装必要工具的工作

### 在主机 PC 上

接下来我们需要为开发准备主机 PC。这里我们将安装包含 Flutter 开发必要包的 **Flutter SDK**、用于代码编辑的 **Android Studio** 以及用于运行和测试代码的 **Android Emulator**。

- **步骤 1.** 根据您的操作系统下载并安装 [Flutter SDK](https://flutter.dev/docs/get-started/install)

- **步骤 2.** 在终端窗口中输入以下命令来检查 Flutter SDK 是否安装成功

```sh
flutter --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/flutter-version.png" alt="pir" width="800" height="auto"/></p>

- **步骤 3.** 根据您的操作系统下载并安装 [Android Studio](https://developer.android.com/studio)

- **步骤 4.** 打开 Android Studio 并导航到 `Configure > Plugins`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-6.png" alt="pir" width="650" height="auto"/></p>

- **步骤 5.** 在 **Marketplace** 下，在搜索框中输入 **flutter** 并点击 **Install**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-7.png" alt="pir" width="650" height="auto"/></p>

- **步骤 6.** 在提示窗口中点击 **Install** 以同时安装 **Dart** 插件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-8.png" alt="pir" width="650" height="auto"/></p>

- **步骤 7.** 点击 **Restart IDE** 以重启 IDE 并加载已安装的插件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-9.png" alt="pir" width="650" height="auto"/></p>

- **步骤 8.** IDE 重新打开后，导航到 `Configure > AVD Manager`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/android-studio-open.png" alt="pir" width="800" height="auto"/></p>

- **步骤 9.** 点击 **Create Virtual Device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-1.png" alt="pir" width="800" height="auto"/></p>

- **步骤 10.** 点击 **New Hardware Profile**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-2.png" alt="pir" width="800" height="auto"/></p>

- **步骤 11.** 按如下配置设置

  - Device Name: reTerminal
  - Device Type: Phone/ Tablet
  - Screen:

    - Screen size: 5inch
    - Resolution: 1280 x 720
  - Memory: RAM: 2048MB
  - Input: [✓] Has Hardware Buttons (Back/Home/Menu)
  - Supported device states: [✓] Landscape

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-3.png" alt="pir" width="800" height="auto"/></p>

- **步骤 12.** 点击 **Finish** 然后点击 **Next**

- **步骤 13.** 选择最新的 Android Image 并点击 **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-4.png" alt="pir" width="800" height="auto"/></p>

- **步骤 14.** 在 **Emulated Performance** 下，选择 **Hardware - GLES 2.0** 以获得加速性能

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-5.png" alt="pir" width="800" height="auto"/></p>

- **步骤 15.** 最后点击 **Finish**

现在我们已经成功完成了开发环境的准备工作

## 智能灯 Flutter 应用程序

### 硬件连接

我们将把一个 LED 连接到 reTerminal 的 GPIO 24 引脚进行测试。稍后您可以添加继电器并使用 GPIO 控制家用电器！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="800" height="auto"/></p>

**注意：** 在 GPIO 引脚和 LED 之间需要一个电阻，否则 LED 会烧坏。

### 创建和初始化应用程序

- **步骤 1.** 打开 Android Studio 并点击 **Create New Flutter Project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-10.png" alt="pir" width="550" height="auto"/></p>

- **步骤 2.** **Flutter SDK path** 将自动配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-11.png" alt="pir" width="800" height="auto"/></p>

**注意：** 如果此窗口中未列出 Flutter SDK 路径，您可以手动指向 Flutter SDK 的位置

- **步骤 3.** 按如下填写项目详细信息并点击 **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-12.png" alt="pir" width="800" height="auto"/></p>

现在您的示例项目将打开并显示 **main.dart**

### 创建 main.dart（主应用程序）

我们将使用 **lib** 文件夹内的 **main.dart** 文件来创建 Flutter 应用程序

打开 **main.dart** 文件并复制以下代码

```dart
//library imports
import 'package:flutter/material.dart';
import 'package:flutter_gpiod/flutter_gpiod.dart';

//entry point for the app
void main() {
  runApp(MyApp());
}

// This is the main application widget.
class MyApp extends StatelessWidget {
  // Function for GPIO control
  void ledState(state) {
    // Retrieve the list of GPIO chips.
    final chips = FlutterGpiod.instance.chips;

    // Retrieve the line with index 24 of the first chip.
    // This is BCM pin 24 for the Raspberry Pi.
    final chip = chips.singleWhere(
          (chip) => chip.label == 'pinctrl-bcm2711',
      orElse: () =>
          chips.singleWhere((chip) => chip.label == 'pinctrl-bcm2835'),
    );

    final line2 = chip.lines[24];

    // Request BCM 24 as output.
    line2.requestOutput(consumer: "flutter_gpiod test", initialValue: false);
    line2.setValue(state);
    line2.release();
  }

  @override
  Widget build(BuildContext context) {
    // MaterialApp widget
    return MaterialApp(
      // Hide the debug banner at the top right corner
      debugShowCheckedModeBanner: false,
      // Scaffold widget
      home: Scaffold(
        // background color of the app.
        // Here after you type "Colors.", Android Studio will recommend the available colors. 
        // Also you can hover the mouse over to check the different color variations assigned 
        // by numbers enclosed by [ ].
        backgroundColor: Colors.grey[700],
        // AppBar widget
        appBar: AppBar(
          // background color of the appbar
          backgroundColor: Colors.black,
          // center align text inside appbar widget
          title: Center(
            child: Text(
              'LIVING ROOM',
            ),
          ),
        ),
        body: Center(
          // Row widge
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              // ON Button function
              ElevatedButton(
                child: Text('ON'),
                onPressed: () {
                  print('ON');
                  ledState(true);
                },
                // ON Button styling
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[700],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
              // Google Material Icon of a Light Bulb
              Icon(
                Icons.lightbulb_outline,
                color: Colors.white,
                size: 200,
              ),
              // OFF Button function
              ElevatedButton(
                child: Text('OFF'),
                onPressed: () {
                  print('OFF');
                  ledState(false);
                },
                // OFF Button styling
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[300],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                    TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

#### Flutter 使用的组件

Flutter 组件是使用一个从 React 获得灵感的现代框架构建的。核心思想是你用组件来构建你的 UI。组件描述了在给定当前配置和状态下，它们的视图应该是什么样子。

**StatelessWidget：** 无状态组件在你描述的用户界面部分不依赖于对象本身的配置信息和组件被填充的 BuildContext 之外的任何东西时很有用。

**MaterialApp：** MaterialApp 组件是一个包装了许多 Material Design 应用程序通常需要的组件的组件。

**Scaffold：** Scaffold 组件提供了一个框架，实现了 Flutter 应用程序的基本 Material Design 视觉布局结构。它提供了显示抽屉、提示条和底部表单的 API。

**Appbar：** Appbar 是一个包含 Flutter 应用程序中工具栏的组件。

**Row：** Row 组件用于在水平数组中显示其子元素。我们将在这个组件内使用 UI 元素。

**ElevatedButton：** ElevatedButton 组件包含一个可以用来按压并做出相应反应的按钮。

#### Google Material Icons

我们在应用程序中使用了来自 **Google Material Icons** 的 **lightbuilb** 图标。要深入了解更多 Google Material Icons，请访问[此链接](https://fonts.google.com/icons)，搜索按钮，选择按钮并查看按钮的 Flutter 代码。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-14.png" alt="pir" width="800" height="auto"/></p>

### 安装 GPIO 库

接下来我们将继续在我们的 Flutter 应用程序中安装 GPIO 控制库。这里我们将使用一个名为 [flutter_gpiod](https://pub.dev/packages/flutter_gpiod/versions/0.4.0-nullsafety) 的 GPIO 库。

- **步骤 1.** 要安装 GPIO 库，进入你的 Flutter 项目中的 **pubspec.yaml** 文件，并在 **dependencies:** 下添加以下内容：

```yaml
dependencies:
  flutter_gpiod: ^0.4.0-nullsafety
```

- **步骤 2.** 保存文件并点击 **Pub get**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-17.jpg" alt="pir" width="520" height="auto"/></p>

### 测试应用

- **步骤 1.** 打开 **main.dart** 文件

- **步骤 2.** 点击 **no device selected** 按钮并选择我们之前创建的 Android 设备

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-13.1.jpg" alt="pir" width="800" height="auto"/></p>

现在您将看到以下输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-5.png" alt="pir" width="800" height="auto"/></p>

- **步骤 3.** 点击 **播放按钮** 来运行应用程序

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-14.png" alt="pir" width="800" height="auto"/></p>

现在您将看到以下应用程序在 Android 模拟器上运行

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

### 构建应用程序并传输到 reTerminal

接下来我们将构建我们的 Flutter 应用程序并将其传输到 reTerminal

- **步骤 1.** 在 Android Studio 中打开终端窗口，导航到 `View > Tool Windows > Terminal`

- **步骤 2.** 输入以下内容来准备构建

```sh
flutter clean
```

- **步骤 3.** 构建项目

```sh
flutter build bundle
```

- **步骤 4.** 打开 reTerminal

**注意：** 您会注意到 reTerminal 启动到命令行模式

- **步骤 5.** 将构建的项目传输到 reTerminal

```sh
scp -r ./build/flutter_assets pi@<ip_address_of_reTerminal>:/home/pi/testapp
```

## 在 reTerminal 上启动应用程序

- **步骤 1.** 在 reTerminal 的命令行中输入以下内容

```sh
flutter-pi /home/pi/testapp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

当您按下 **ON** 和 **OFF** 按钮时，您会注意到连接到 GPIO 24 的 LED 将开始相应地做出反应！

您还可以通过在 GPIO 引脚上添加继电器来扩展此功能，控制家用电器并在 reTerminal 上构建完整的智能家居解决方案！

## 额外演示

如果您想体验更有趣的 Flutter 演示，可以查看[这个 GitHub 仓库](https://github.com/lakshanthad/Flutter_reTerminal_Smart_Home_UI)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" alt="pir" width="800" height="auto"/></p>

## 资源

- **[GitHub]** [flutter-pi](https://github.com/ardera/flutter-pi)
- **[网页]** [官方 Flutter 文档](https://flutter.dev/docs)
- **[GitHub]** [Flutter 演示源代码](https://github.com/lakshanthad/Flutter_reTerminal_LED_UI)

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
