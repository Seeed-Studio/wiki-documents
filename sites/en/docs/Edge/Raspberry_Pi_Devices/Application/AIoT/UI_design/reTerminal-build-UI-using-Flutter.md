---
description:  Flutter for reTerminal
title:  Flutter for reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-build-UI-using-Flutter
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

## Introduction

This wiki explains how to build your own user interface using Flutter. Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. This means that you can use one programming language and one codebase to create two different apps (for iOS, Android and more).

To develop with Flutter, you need a programming language called Dart. Dart is an open-source, general-purpose, object-oriented programming language with C-style syntax developed by Google.

Here we will use Flutter to develop an application on the PC and then run the application on reTerminal using flutter-pi. flutter-pi is a light-weight Flutter Engine Embedder for Raspberry Pi that runs without X. That means you don't need to boot into Raspberry Pi OS Desktop & have X11 and LXDE load up. You just need to boot into the command-line and run your application.

By following the guide below, you will be able to create an application to control the GPIO pins on the reTerminal just by clicking buttons on the LCD. So let's get started!

## Prepare Development Environment

### On reTerminal

First we need to install **flutter-pi** on the reTerminal.

> Click [here](https://github.com/ardera/flutter-pi) to access the GitHub repo of flutter-pi

- **Step 1.** Log in to reTerminal as explained in [this wiki](https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet) and install **flutter engine binaries** on the reTerminal

```sh
git clone --depth 1 https://github.com/ardera/flutter-engine-binaries-for-arm.git engine-binaries
cd engine-binaries
sudo ./install.sh
```

- **Step 2.** Install cmake, graphics, system libraries and fonts

```sh
sudo apt install cmake libgl1-mesa-dev libgles2-mesa-dev libegl1-mesa-dev libdrm-dev libgbm-dev ttf-mscorefonts-installer fontconfig libsystemd-dev libinput-dev libudev-dev  libxkbcommon-dev
```

- **Step 3.** Update the system fonts

```sh
sudo fc-cache
```

- **Step 4.** Clone flutter-pi and cd into the cloned directory

```sh
git clone https://github.com/ardera/flutter-pi
cd flutter-pi
```

- **Step 5.** Compile flutter-pi

```sh
mkdir build && cd build
cmake ..
make -j`nproc`
```

- **Step 6.** Install flutter-pi

```sh
sudo make install
```

- **Step 7.** Open raspi-config

```sh
sudo raspi-config
```

- **Step 8.** Switch to console mode by navigating to `System Options > Boot / Auto Login` and select **Console or Console (Autologin)**

- **Step 9.** Enable the V3D graphics driver by navigating to `Advanced Options > GL Driver > GL (Fake KMS)`

- **Step 10.** Configure the GPU memory by navigating to `Performance Options -> GPU Memory` and enter **64**

- **Step 11.** Press **ESC** on the keyboard to leave **rasp-config** window

- **Step 12.** Give the reTerminal permission to use 3D acceleration. (NOTE: potential security hazard. If you don't want to do this, launch flutter-pi using **sudo** instead.)

```sh
usermod -a -G render pi
```

- **Step 13.** Reboot reTerminal

```sh
sudo reboot
```

Now we have finished installing the necessary tools on the reTerminal

### On Host PC

Next we need to prepare our host PC for development. Here we will install **Flutter SDK** which contains necessary packages for Flutter development, **Android Studio** for code editing and **Android Emulator** to run and test the codes.

- **Step 1.** Download and install [Flutter SDK](https://flutter.dev/docs/get-started/install) according to your operating system

- **Step 2.** Type the following on a terminal window to check whether Flutter SDK is installed successfully

```sh
flutter --version
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/flutter-version.png" alt="pir" width="800" height="auto"/></p>

- **Step 3.** Download and install [Android Studio](https://developer.android.com/studio) according to your operating system

- **Step 4.** Open Android Studio and navigate to `Configure > Plugins`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-6.png" alt="pir" width="650" height="auto"/></p>

- **Step 5.** Under **Marketplace**, type **flutter** in the search box and click **Install**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-7.png" alt="pir" width="650" height="auto"/></p>

- **Step 6.** Click **Install** in the prompt window to install **Dart** plugin as well

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-8.png" alt="pir" width="650" height="auto"/></p>

- **Step 7.** Click **Restart IDE** to restart IDE with the installed plugins

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-9.png" alt="pir" width="650" height="auto"/></p>

- **Step 8.** Once the IDE opens again, navigate to `Configure > AVD Manager`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/android-studio-open.png" alt="pir" width="800" height="auto"/></p>

- **Step 9.** Click **Create Virtual Device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-1.png" alt="pir" width="800" height="auto"/></p>

- **Step 10.** Click **New Hardware Profile**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-2.png" alt="pir" width="800" height="auto"/></p>

- **Step 11.** Configure the settings as follows

  - Device Name: reTerminal
  - Device Type: Phone/ Tablet
  - Screen:

    - Screen size: 5inch
    - Resolution: 1280 x 720
  - Memory: RAM: 2048MB
  - Input: [✓] Has Hardware Buttons (Back/Home/Menu)
  - Supported device states: [✓] Landscape

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-3.png" alt="pir" width="800" height="auto"/></p>

- **Step 12.** Click **Finish** and then click **Next**

- **Step 13.** Select the latest Android Image and click **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-4.png" alt="pir" width="800" height="auto"/></p>

- **Step 14.** Under **Emulated Performance**, select **Hardware - GLES 2.0** for accelerated performance

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-5.png" alt="pir" width="800" height="auto"/></p>

- **Step 15.** Finally click **Finish**

Now we have successfully finished preparing the development environment

## Smart Lamp Flutter Application

### Hardware Connections

We will connect an LED to the GPIO 24 of the reTerminal for testing purposes. Later you can add a relay and control home appliances using the GPIO!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/LED-connection-1.png" alt="pir" width="800" height="auto"/></p>

**Note:** A resistor is needed between the GPIO pin and the LED or otherwise the LED will burn out.

### Create and Initialize the Application

- **Step 1.** Open Android Studio and click **Create New Flutter Project**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-10.png" alt="pir" width="550" height="auto"/></p>

- **Step 2.** The **Flutter SDK path** will be automatically configured

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-11.png" alt="pir" width="800" height="auto"/></p>

**Note:** If the Flutter SDK path is not listed in this window, you can manually point to the location of the Flutter SDK

- **Step 3.** Fill the details for the project as follows and click **Finish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-12.png" alt="pir" width="800" height="auto"/></p>

Now your sample project will open with **main.dart**

### Create the main.dart (main app)

We will use the **main.dart** file inside the **lib** folder to create the Flutter application

Open the **main.dart** file and copy the following codes

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

#### Flutter Widgets Used

Flutter widgets are built using a modern framework that takes inspiration from React. The central idea is that you build your UI out of widgets. Widgets describe what their view should look like given their current configuration and state.

**StatelessWidget:** Stateless widgets are useful when part of the user interface you are describing does not depend on anything other than the configuration information in the object itself and the BuildContext in which the widget is inflated.

**MaterialApp:** MaterialApp widget is a widget that wraps a number of widgets that are commonly required for material design applications.

**Scaffold:** A Scaffold Widget provides a framework which implements the basic material design visual layout structure of the flutter app. It provides APIs for showing drawers, snack bars and bottom sheets

**Appbar:** Appbar is a widget that contains the toolbar in flutter application.

**Row:** Row widget is used to display its children in a horizontal array. We will use the UI elements inside this widget

**ElevatedButton:** ElevatedButton widget consist of a button that can be used to press and react accordingly

#### Google Material Icons

We have used a **lightbuilb** icon inside the app from **Google Material Icons**. To dive into more Google Material Icons, follow [this link](https://fonts.google.com/icons), search for a button, choose the button and view the flutter code for the button

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-14.png" alt="pir" width="800" height="auto"/></p>

### Install the GPIO Library

Next we will move on to installing the GPIO control library into our Flutter application. Here we will use a GPIO library called [flutter_gpiod](https://pub.dev/packages/flutter_gpiod/versions/0.4.0-nullsafety)

- **Step 1.** To install the GPIO library, go into the **pubspec.yaml** file inside your Flutter project and add the following under **dependencies:**

```yaml
dependencies:
  flutter_gpiod: ^0.4.0-nullsafety
```

- **Step 2.** Save the file and click on **Pub get**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-17.jpg" alt="pir" width="520" height="auto"/></p>

### Test the App

- **Step 1.** Open the **main.dart** file

- **Step 2.** click **no device selected** button and select the Android Device that we created before

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-13.1.jpg" alt="pir" width="800" height="auto"/></p>

You will now see the following output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-5.png" alt="pir" width="800" height="auto"/></p>

- **Step 3.** Click the **play button** to run the application

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-14.png" alt="pir" width="800" height="auto"/></p>

You will now see the following application running on the Android Emulator

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

### Build the Application and Transfer to reTerminal

Next we will build our Flutter application and transfer it to the reTerminal

- **Step 1.** Open a terminal window inside Android Studio by navigating to `View > Tool Windows > Terminal`

- **Step 2.** Type the following to prepare for the build

```sh
flutter clean
```

- **Step 3.** Build the project

```sh
flutter build bundle
```

- **Step 4.** Turn on the reTerminal

**Note:** You will notice that the reTerminal is booted into command-line mode

- **Step 5.** Transfer the built project to reTerminal

```sh
scp -r ./build/flutter_assets pi@<ip_address_of_reTerminal>:/home/pi/testapp
```

## Launch the Application on reTerminal

- **Step 1.** Type the following on the command-line of reTerminal

```sh
flutter-pi /home/pi/testapp
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"/></p>

When you press the **ON** and **OFF** buttons, you will notice the LED which is connected to GPIO 24 will start to react accordingly!

You can also extend this by adding a relay to the GPIO pins and control home appliances and build a complete smart home solution on the reTerminal!

## Bonus Demo

If you want to experience a more interesting demo with Flutter, you can checkout [this GitHub repo](https://github.com/lakshanthad/Flutter_reTerminal_Smart_Home_UI)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/smart_home_demo.gif" alt="pir" width="800" height="auto"/></p>

## Resources

- **[GitHub]** [flutter-pi](https://github.com/ardera/flutter-pi)
- **[Webpage]** [Official Flutter Documentation](https://flutter.dev/docs)
- **[GitHub]** [Flutter Demo Source Code](https://github.com/lakshanthad/Flutter_reTerminal_LED_UI)

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
