---
name: Build Your Own UI Using Flutter
category: reTerminal
bzurl: 
wikiurl: 
sku: 
---

# Build Your Own UI Using Flutter

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"></p>

## Introduction

This wiki explains how to build your own user interface using Flutter. Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase. This means that you can use one programming language and one codebase to create two different apps (for iOS, Android and more).

To develop with Flutter, you need a programming language called Dart. Dart is an open-source, general-purpose, object-oriented programming language with C-style syntax developed by Google.

Here we will use Flutter to develop an application on the PC and then run the application on reTerminal using flutter-pi. flutter-pi is a light-weight Flutter Engine Embedder for Raspberry Pi that runs without X. That means you don't need to boot into Raspberry Pi OS Desktop & have X11 and LXDE load up. You just need to boot into the command-line and run your application.

By following the guide below, you will be able to create an application to control the GPIO pins on the reTerminal just by clicking buttons on the LCD. So let's get started!

## Prepare Development Environment

### Install Necessary Tools on reTerminal

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

### Install Development Tools on Host PC

Next we need to prepare our host PC for development. Here we will install **Flutter SDK** which contains necessary packages for Flutter development, **Android Studio** for code editing and **Android Emulator** to run and test the codes.

- **Step 1.** Download and install [Flutter SDK](https://flutter.dev/docs/get-started/install) according to your operating system

- **Step 2.** Type the following on a terminal window to check whether Flutter SDK is installed successfully

```sh
flutter --version
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/flutter-version.png" alt="pir" width="800" height="auto"></p>

- **Step 3.** Download and install [Android Studio](https://developer.android.com/studio) according to your operating system


- **Step 4.** Open Android Studio and navigate to `Configure > Plugins`

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-6.png" alt="pir" width="650" height="auto"></p>

- **Step 5.** Under **Marketplace**, type **flutter** in the search box and click **Install**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-7.png" alt="pir" width="650" height="auto"></p>

- **Step 6.** Click **Install** in the prompt window to install **Dart** plugin as well

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-8.png" alt="pir" width="650" height="auto"></p>

- **Step 7.** Click **Restart IDE** to restart IDE with the installed plugins

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-9.png" alt="pir" width="650" height="auto"></p>

- **Step 8.** Once the IDE opens again, navigate to `Configure > AVD Manager`

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/android-studio-open.png" alt="pir" width="800" height="auto"></p>

- **Step 9.** Click **Create Virtual Device**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-1.png" alt="pir" width="800" height="auto"></p>

- **Step 10.** Click **New Hardware Profile**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-2.png" alt="pir" width="800" height="auto"></p>

- **Step 11.** Configure the settings as follows


    - Device Name: reTerminal 
    - Device Type: Phone/ Tablet
    - Screen: 


        - Screen size: 5inch
        - Resolution: 1280 x 720
    - Memory: RAM: 2048MB
    - Input: [✓] Has Hardware Buttons (Back/Home/Menu)
    - Supported device states: [✓] Landscape

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-3.png" alt="pir" width="800" height="auto"></p>

- **Step 12.** Click **Finish** and then click **Next**

- **Step 13.** Select the latest Android Image and click **Next**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-4.png" alt="pir" width="800" height="auto"></p>

- **Step 14.** Under **Emulated Performance**, select **Hardware - GLES 2.0** for accelerated performance

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-5.png" alt="pir" width="800" height="auto"></p>

- **Step 15.** Finally click **Finish**

Now we have successfully finished preparing the development environment

## Build the Project

Next let's move on to building the project. The workflow is as follows:

1. Create a **sample Flutter project** using **Android Studio** and run it on the **Android Emulator**
2. Modify the codes to realize the outlook of our app while running the **Android Emulator** in real-time as we edit
3. Attach buttons on UI to GPIO pins of reTerminal to **control GPIO pins using Flutter**
4. Build the project and transfer to reTerminal

### Create a Sample Flutter Application

Now let's create a sample flutter app and run it on Android Emulator for testing

- **Step 1.** Open Android Studio and click **Create New Flutter Project**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-10.png" alt="pir" width="550" height="auto"></p>

- **Step 2.** The **Flutter SDK path** will be automatically configured

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-11.png" alt="pir" width="800" height="auto"></p>

**Note:** If the Flutter SDK path is not listed in this window, you can manually point to the location of the Flutter SDK

- **Step 3.** Fill the details for the project as follows and click **Finish**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-12.png" alt="pir" width="800" height="auto"></p>

Now your sample project will open with **main.dart**

- **Step 4.** Click **no device selected** button and select the Android Device that we created before

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-13.1.jpg" alt="pir" width="800" height="auto"></p>

You will now see the following output

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-5.png" alt="pir" width="800" height="auto"></p>

- **Step 4.** Click the **play button** to run the application

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-14.png" alt="pir" width="800" height="auto"></p>

You will now see the following application running on the Android Emulator

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-7.png" alt="pir" width="800" height="auto"></p>

### Build UI for Your Flutter Application

Now that we have learnt how to create a Flutter application and run on an emulator, let's dive into creating our own Flutter application. We will be building the below UI for a smart home application.

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"></p>

First we will build the UI for our application.

- **Step 1.** Navigate to the **main.dart** file from the previous project

**Note:** We will be modifying the codes from the previous project for our application

- **Step 2.** Delete all the codes from the **main.dart** file

- **Step 3.** Start by importing the necessary libraries inside the main.dart file 

```dart
import 'package:flutter/material.dart';
```

- **Step 4.** Add the entry point for the app

```dart
void main() {
  runApp(MyApp());
}
```

**Note:** This will be the main function that will run **MyApp**

- **Step 5.** Add the main application widget

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

  }
}
```

**Note:** Here we are using a StatelessWidget. Stateless widgets are useful when part of the user interface you are describing does not depend on anything other than the configuration information in the object itself and the BuildContext in which the widget is inflated. We will be using widgets throughout our Flutter application.

- **Step 6.** Add a MaterialApp widget inside the main stateless widget

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp();
  }
}
```

**Note:** MaterialApp widget is a widget that wraps a number of widgets that are commonly required for material design applications. 

- **Step 7.** Add a Scaffold widget inside the MaterialApp widget

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(),
    );
  }
}
```

**Note:** A Scaffold Widget provides a framework which implements the basic material design visual layout structure of the flutter app. It provides APIs for showing drawers, snack bars and bottom sheets

- **Step 8.** Change the background color of the app

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey[700],
      ),
    );
  }
}
```

**Note:** Here after you type "Colors.", VSCode will recommend the available colors. Also you can hover the mouse over to check the different color variations assigned by numbers enclosed by [ ].

- **Step 9.** Add an AppBar widget inside the Scaffold widget

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey[700],
        appBar: AppBar(),
      ),
    );
  }
}
```

**Note:** Appbar is a widget that contains the toolbar in flutter application.

- **Step 10.** Change the background color of the AppBar

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey[700],
        appBar: AppBar(
          backgroundColor: Colors.black,
        ),
      ),
    );
  }
}
```

- **Step 11.** Add text inside the AppBar widget

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey[700],
        appBar: AppBar(
          backgroundColor: Colors.black,
          title: Text('LIVING ROOM'),
        ),
      ),
    );
  }
}
```

- **Step 12.** Click on the line which contains "title" and you will see a **small yellow bulb** appear at the left corner. Click on it and select **Wrap with Center** to align the text to the center of the AppBar

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/avd-15.png" alt="pir" width="550" height="auto"></p>

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey[700],
        appBar: AppBar(
          backgroundColor: Colors.black,
          title: Center(child: Text('LIVING ROOM')),
        ),
      ),
    );
  }
}
```

So far the output on the Android Emulator will be as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-9.png" alt="pir" width="800" height="auto"></p>

- **Step 13.** Add a Row widge inside the body

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey[700],
        appBar: AppBar(
          backgroundColor: Colors.black,
          title: Center(child: Text('LIVING ROOM')),
        ),
        body: Row(
          mainAxisSize: MainAxisSize.min,
          children: [],
        ),
      ),
    );
  }
}
```

**Note::** Row widget is used to display its children in a horizontal array. We will use the UI elements inside this widget

- **Step 14.** Add an ElevatedButton widget inside the children of Row widget with text inside the button

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey[700],
        appBar: AppBar(
          backgroundColor: Colors.black,
          title: Center(child: Text('LIVING ROOM')),
        ),
        body: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            ElevatedButton(
              child: Text('ON'),
              onPressed: () {},
            ),
          ],
        ),
      ),
    );
  }
}
```

**Note::** ElevatedButton widget consist of a button that can be used to press and react accordingly

- **Step 15.** Add different styling to the button such as color, padding and size of text

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey[700],
        appBar: AppBar(
          backgroundColor: Colors.black,
          title: Center(child: Text('LIVING ROOM')),
        ),
        body: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            ElevatedButton(
              child: Text('ON'),
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                  primary: Colors.orange[700],
                  padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                  textStyle:
                      TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
            ),
          ],
        ),
      ),
    );
  }
}
```

- **Step 16.** Center the Row widget as explained before

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey[700],
        appBar: AppBar(
          backgroundColor: Colors.black,
          title: Center(child: Text('LIVING ROOM')),
        ),
        body: Center(
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              ElevatedButton(
                child: Text('ON'),
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[700],
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

So far the output on the Android Emulator will be as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-11.png" alt="pir" width="800" height="auto"></p>

- **Step 17.** Add a another ElavatedButton widget inside the Row widget for the **OFF** button

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey[700],
        appBar: AppBar(
          backgroundColor: Colors.black,
          title: Center(child: Text('LIVING ROOM')),
        ),
        body: Center(
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              ElevatedButton(
                child: Text('ON'),
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[700],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                        TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
              ElevatedButton(
                child: Text('OFF'),
                onPressed: () {
                },
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

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-12.png" alt="pir" width="800" height="auto"></p>

- **Step 18.** Add a **Google Material Icon** of a Light Bulb between these two buttons

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.grey[700],
        appBar: AppBar(
          backgroundColor: Colors.black,
          title: Center(child: Text('LIVING ROOM')),
        ),
        body: Center(
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              ElevatedButton(
                child: Text('ON'),
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                    primary: Colors.orange[700],
                    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                    textStyle:
                        TextStyle(fontSize: 40, fontWeight: FontWeight.normal)),
              ),
              Icon(
                Icons.lightbulb_outline,
                color: Colors.white,
                size: 200,
              ),
              ElevatedButton(
                child: Text('OFF'),
                onPressed: () {
                },
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

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"></p>

**Note:** You can change the color and size properties of the icon. Also, to dive into more Google Material Icons, follow [this link](https://fonts.google.com/icons), search for a button, choose the button and view the flutter code for the button

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-14.png" alt="pir" width="800" height="auto"></p>

Now we have finished designing the UI for our application.

### Integrate GPIO Control Into Flutter Application

Next we will move on to integrating the GPIO control into our Flutter application. Here we will use a GPIO library called [flutter_gpiod](https://pub.dev/packages/flutter_gpiod/versions/0.4.0-nullsafety)

- **Step 1.** To install the GPIO library, go into the **pubspec.yaml** file inside your Flutter project and add the following under **dependencies:**

```yaml
dependencies:
  flutter_gpiod: ^0.4.0-nullsafety
```

- **Step 2.** Go back to the **main.dart** file and add the GPIO library to import it

```dart
import 'package:flutter_gpiod/flutter_gpiod.dart';
```

- **Step 3.** Add a function inside the main application widget that we created before. This function should be placed before **@override**

```dart
class MyApp extends StatelessWidget {
  void ledState(state) {}
  @override

  Widget build(BuildContext context) {
```

- **Step 4.** Retrieve the list of GPIO chips

```dart
class MyApp extends StatelessWidget {
  void ledState(state) {
    final chips = FlutterGpiod.instance.chips;
  }

  @override
  Widget build(BuildContext context) {
```

- **Step 5.** Retrieve the line with index 24 of the first chip

```dart
class MyApp extends StatelessWidget {
  void ledState(state) {
    final chips = FlutterGpiod.instance.chips;
    final chip = chips.singleWhere(
      (chip) => chip.label == 'pinctrl-bcm2711',
      orElse: () =>
          chips.singleWhere((chip) => chip.label == 'pinctrl-bcm2835'),
    );
    final line2 = chip.lines[24];
  }

  @override
  Widget build(BuildContext context) {
```

**Note:** We do this to control GPIO 24 of the reTerminal. You can change this to any GPIO pin number

- **Step 6.** Set GPIO 24 as output

```dart
class MyApp extends StatelessWidget {
  void ledState(state) {
    final chips = FlutterGpiod.instance.chips;
    final chip = chips.singleWhere(
      (chip) => chip.label == 'pinctrl-bcm2711',
      orElse: () =>
          chips.singleWhere((chip) => chip.label == 'pinctrl-bcm2835'),
    );
    final line2 = chip.lines[24];

    line2.requestOutput(consumer: "flutter_gpiod test", initialValue: false);
    line2.setValue(state);
    line2.release();
  }

  @override
  Widget build(BuildContext context) {
```

**Note:** Next we will call this function to turn ON/OFF the GPIO pin

- **Step 7.** Inside the **ON** ElevatedButton widget, call the above function to turn on the GPIO pin. Also add a print('ON') statement for debugging purposes

```dart
              ElevatedButton(
                child: Text('ON'),
                onPressed: () {
                  print('ON');
                  ledState(true);
                },
              ),
```

- **Step 8.** Repeat the same for the **OFF** ElevatedButton widget

```dart
              ElevatedButton(
                child: Text('ON'),
                onPressed: () {
                  print('OFF');
                  ledState(false);
                },
              ),
```

Now we have finished integrating the GPIO control to the Flutter application

### Build the Application and Transfer to reTerminal

Next we will build our Flutter application and transfer it to the reTerminal

- **Step 1.** Open a terminal window inside VSCode as shown before and type the following to prepare for the build 

```sh 
flutter clean
```

- **Step 2.** Build the project 

```sh
flutter build bundle
```

- **Step 3.** Turn on the reTerminal

**Note:** You will notice that the reTerminal is booted into command-line mode

- **Step 4.** Transfer the built project to reTerminal

```sh
scp -r ./build/flutter_assets pi@<ip_address_of_reTerminal>:/home/pi/testapp
```

### LED Connection with reTerminal

Now we need to connect an LED to GPIO 24 to test our application. Follow the connection diagram as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-15.png" alt="pir" width="800" height="auto"></p>

**Note:** A resistor is needed between the GPIO pin and the LED or otherwise the LED will burn out.

## Launch the Application on reTerminal

- **Step 1.** Type the following on the command-line of reTerminal

```sh
flutter-pi /home/pi/testapp
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/flutter/vs-13.png" alt="pir" width="800" height="auto"></p>

When you press the **ON** and **OFF** buttons, you will notice the LED which is connected to GPIO 24 will start to react accordingly!

You can also extend this by adding a relay to the GPIO pins and control home appliances and build a complete smart home solution on the reTerminal!

## Resources

- **[GitHub]** [flutter-pi](https://github.com/ardera/flutter-pi)
- **[Webpage]** [Official Flutter Documentation](https://flutter.dev/docs)
- **[GitHub]** [Flutter Demo Source Code](https://github.com/lakshanthad/Flutter_reTerminal_LED_UI)



## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>