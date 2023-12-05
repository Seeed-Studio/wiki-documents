---
description: For Seeed nRF52 mbed-enabled Boards Boards
title: Seeed nRF52 mbed-enabled 蓝牙库
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-BLE-Sense-Bluetooth-Usage
last_update:
  date: 10/11/2023
  author: 赵桂莹
---

# 基于 Seeed nRF52 mbed-enabled 的蓝牙使用

**Seeed Studio XIAO nRF52840**和**Seeed Studio XIAO nRF52840 Sense**都支持蓝牙连接。本wiki将介绍基本的蓝牙功能，并提供一个24GHz呼吸睡眠检测模块的演示，由“Seeed nrf52 mbed-enabled Boards Library”使用。

## 开始

### 硬件装备

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) 或者 [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x 智能手机/PC与蓝牙连接
- 1 x USB Type-C cable

### 软件准备

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

## Arduino库概述

:::tip
如果这是您第一次使用Arduino，我们强烈建议您参考 [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::
要使用Seeed Studio XIAO nRF52840的蓝牙功能，我们需要使用官方的Arduino BLE库。

<div>
  <p style={{}}><a href="https://github.com/arduino-libraries/ArduinoBLE" target="_blank" /></p><div align="center"><a href="https://github.com/arduino-libraries/ArduinoBLE" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

如果您想应用与24GHz睡眠呼吸雷达的演示，您可能还需要下载支持的库。

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar_BLE" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar_BLE" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

### 功能

有关ArduinoBLE代码库的功能和使用介绍，请参阅[Arduino website](https://www.arduino.cc/reference/en/libraries/arduinoble/).

有关功能介绍和代码库的使用见24GHz睡眠呼吸雷达BLE，请参阅 [Wiki](https://wiki.seeedstudio.com/Radar_MR24BSD1/#function).

### 安装

- **方法一** (该方法在上述两个代码库中都可用)

如果你已经下载了zip库，那么打开你的Arduino IDE，点击**Sketch > Include Library > Add . zip Library**。选择你刚下载的zip文件，如果库安装正确，你将在通知窗口中看到**库被添加到你的库中**。这意味着库安装成功

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>

- **方法二** (只能安装ArduinoBLE库)

从Arduino IDE 1.5及以上版本(1.6.x)开始添加库管理器。它可以在` Sketch `菜单下的` Include Library `、` Manage Libraries…`中找到。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>

当你打开库管理器时，你会发现一个一键安装的库列表。要为你的产品找到一个库，搜索产品名称或关键字，如` k type `或` digitizer `，你想要的库应该会显示出来。点击所需的库，` Install `按钮就会出现。单击该按钮，库应该会自动安装。安装完成后，关闭库管理器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" /></div>

## 应用实例

现在我们已经安装了库，并了解了基本函数，让我们为Seeed Studio XIAO nRF52840运行一些示例，看看它的行为。

**Step 1.** 启动Arduino应用程序。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Step 2.** 选择您的开发板模型并将其添加到Arduino IDE中。在这里，我们使用“Seeed nrf52 mbed-enabled Boards Library”。

> 有关板库的安装，请参阅 [本教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) 完成安装。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528404.png" /></div>

### 1 使用智能手机控制内置LED

在本例中，我们将使用蓝牙连接Seeed Studio XIAO nF52840 (Sense)和智能手机，并从手机发送消息，以打开/关闭Seeed Studio XIAO nRF52840 (Sense)上内置的红色LED。 

请将下面的代码粘贴到Arduino IDE中，并将其上传到Seeed Studio XIAO nRF52840。

```c++
#include <ArduinoBLE.h>

BLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Bluetooth® Low Energy LED Service

// Bluetooth® Low Energy LED Switch Characteristic - custom 128-bit UUID, read and writable by central
BLEByteCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);

const int ledPin = LED_BUILTIN; // pin to use for the LED

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // set LED pin to output mode
  pinMode(ledPin, OUTPUT);

  // begin initialization
  if (!BLE.begin()) {
    Serial.println("starting Bluetooth® Low Energy module failed!");

    while (1);
  }

  // set advertised local name and service UUID:
  BLE.setLocalName("LED");
  BLE.setAdvertisedService(ledService);

  // add the characteristic to the service
  ledService.addCharacteristic(switchCharacteristic);

  // add service
  BLE.addService(ledService);

  // set the initial value for the characeristic:
  switchCharacteristic.writeValue(0);

  // start advertising
  BLE.advertise();

  Serial.println("BLE LED Peripheral");
}

void loop() {
  // listen for Bluetooth® Low Energy peripherals to connect:
  BLEDevice central = BLE.central();

  // if a central is connected to peripheral:
  if (central) {
    Serial.print("Connected to central: ");
    // print the central's MAC address:
    Serial.println(central.address());

    // while the central is still connected to peripheral:
  while (central.connected()) {
        if (switchCharacteristic.written()) {
          if (switchCharacteristic.value()) {   
            Serial.println("LED on");
            digitalWrite(ledPin, LOW); // changed from HIGH to LOW       
          } else {                              
            Serial.println(F("LED off"));
            digitalWrite(ledPin, HIGH); // changed from LOW to HIGH     
          }
        }
      }

    // when the central disconnects, print it out:
    Serial.print(F("Disconnected from central: "));
    Serial.println(central.address());
  }
}
```

这个例子实现的关键是下面的段落。

```c++
  while (central.connected()) {
        if (switchCharacteristic.written()) {
          if (switchCharacteristic.value()) {   
            Serial.println("LED on");
            digitalWrite(ledPin, LOW); // changed from HIGH to LOW       
          } else {                              
            Serial.println(F("LED off"));
            digitalWrite(ledPin, HIGH); // changed from LOW to HIGH     
          }
        }
      }
```

当看到Studio XIAO nRF52840通过蓝牙设备`central.connected()`连接并从蓝牙设备` switchcharacteristics .written()`接收内容时，此代码的目的是输入判断。如果判断值是非零的` switchcharacteristics .value()`，则灯亮，如果判断值为0，则灯亮。 

打开串行显示器到9600波特率和led应打开或关闭。输出应该如下图所示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/2.png" /></div>

此时，使用手机app通过蓝牙就可以完成对Seeed Studio XIAO nRF52840灯光的控制，如下所述。

<table align="center">
 <tr>
     <th align="center">iPhone</th>
     <th align="center">Android</th>  
      <th align="center">Description</th>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone1.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and1.jpeg"/></td>
      <td align="center">打开软件，搜索一个蓝牙设备叫 <strong>LED</strong> 然后点击连接。有些设备可能显示为 <strong>Arduino</strong>.</td>
 </tr>
 <tr>
     <td><img width ={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone2.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and2.jpeg"/></td>
      <td align="center">进入Seeed Studio XIAO nRF52840蓝牙接口，点击设备即可显示设备详细信息.</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone4.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and3.jpeg"/></td>
      <td align="center">填写要发送到Seeed Studio XIAO nRF52840的数据，发送1开灯，发送0关灯.</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone5.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and4.jpeg"/></td>
      <td align="center">回到蓝牙控制界面，您可以看到该值已更改，Seeed Studio XIAO nRF52840红灯亮(或关).</td>
 </tr>
 <tr>
      <td colspan="3"><img width = {800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/3.png"/></td>
 </tr> 
</table>


### 2 使用小BLE通过BLE获取24GHz睡眠检测模块的数据

在本例中，我们将描述如何获取传感器的值，并使用Seeed Studio XIAO nRF52840通过蓝牙将传感器检测到的数据信息发送到移动设备。 

按照下图连接seed Studio XIAO nRF52840板和24GHz呼吸睡眠检测模块。想了解更多信息，请点击 [这里](https://wiki.seeedstudio.com/Radar_MR24BSD1).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/60GHzradar/20.png" /></div>

请打开库中的示例代码并上传至Seeed Studio XIAO nRF52840。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/6.png" /></div>

```c++
//Radar_with_XIAOBLE_example

#include <ArduinoBLE.h>
#include <sleepbreathingradarBLE.h>

SleepBreathingRadarBLE radar;
BLEService radarService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Bluetooth® Low Energy LED Service

// Bluetooth® Low Energy LED Switch Characteristic - custom 128-bit UUID, read and writable by central
BLEStringCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLENotify, 20);

int last_val = 0;

void setup() {
  Serial.begin(9600);
  radar.SerialInit();
  while (!Serial);

  // begin initialization
  if (!BLE.begin()) {
    Serial.println("starting Seeed Studio XIAO nRF52840 with 60GHz radar sensor demo failed!");
    while (1);
  }

  // set advertised local name and service UUID:
  BLE.setLocalName("Seeed Studio XIAO nRF52840");
  BLE.setAdvertisedService(radarService);

  // add the characteristic to the service
  radarService.addCharacteristic(switchCharacteristic);

  // add service
  BLE.addService(radarService);

  // start advertising
  BLE.advertise();

  Serial.println("Seeed Studio XIAO nRF52840 active, waiting for connections...");
}

void loop() {
  // listen for Bluetooth® Low Energy peripherals to connect:
  BLEDevice central = BLE.central();

  // if a central is connected to peripheral:
  if (central) {
    Serial.print("Connected to central: ");
    // print the central's MAC address:
    Serial.println(central.address());

    // while the central is still connected to peripheral:
    while (central.connected()){
       radar.recvRadarBytes();                       //Receive radar data and start processing
       if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
          byte dataMsg[radar.dataLen+3] = {0x00};
          dataMsg[0] = 0x53;                         //Add the header frame as the first element of the array
          for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
          dataMsg[radar.dataLen+1] = 0x54;
          dataMsg[radar.dataLen+2] = 0x43;
          radar.newData = false;                     //A complete set of data frames is saved
          int new_val = radar.Sleep_inf(dataMsg);    //Use radar built-in algorithm to output human motion status
          if(new_val != last_val){
            radar.OutputAssignment(new_val);
            switchCharacteristic.setValue(radar.str);
            last_val = new_val;
          }
        }
    }

    // when the central disconnects, print it out:
      Serial.print(F("Disconnected from central: "));
      Serial.println(central.address());
    }
}
```

在这个例子中，向移动设备发送数据的函数是`setValue()`。如果你想实时显示数据，你需要将`BLENotify`添加到下面的代码中。最后一个参数20表示可以发送的数据的最大长度。

```c++
BLEStringCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLENotify, 20);
```

打开串行显示器，将波特率调到9600，应该可以显示传感器和它指向的物体之间的距离，单位是毫米和英尺。输出应该如下图所示。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO-BLE/4.png" /></div>

接下来，我们可以通过以下步骤获取蓝牙发送的实时数据。

<table align="center">
 <tr>
     <th align="center">iPhone</th>
     <th align="center">Android</th>  
      <th align="center">Description</th>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone1.jpg"/></td>
     <td><img width ={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and5.jpeg"/></td>
      <td align="center">打开软件，搜索一个蓝牙设备叫 <strong>Seeed Studio XIAO nRF52840</strong> 然后点击连接。有些设备可能显示为 <strong>Arduino</strong>.</td>
 </tr>
 <tr>
     <td>=<img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone2.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and2.jpeg"/></td>
      <td align="center">进入Seeed Studio XIAO nRF52840蓝牙接口，点击设备即可显示设备详细信息.</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone8.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and6.jpeg"/></td>
      <td align="center">打开软件的实时更新数据.</td>
 </tr>
 <tr>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone7.jpg"/></td>
     <td><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/and7.jpeg"/></td>
      <td align="center">接下来，只要雷达检测到睡眠信息，它就会通过Seeed Studio XIAO nRF52840的蓝牙发送到手机.</td>
 </tr>
 <tr>
      <td colspan="3"><img width = {600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/5.png"/></td>
 </tr>
</table>


### 3 两个XIAO nRF52840控制LED通过蓝牙通信

在本例中，我们将使用2个XIAO nRF52840，利用它们的蓝牙功能进行通信。其中1个连接到XIAO Expansion board上，通过Expansion board上的按钮发送控制命令。另一个充当从动装置。 

在开始之前，请做好以下准备。

|              |              |
|:--------------:|:--------------:|
|<img width = {210} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"/>|<img width ={210} src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/>|
|[**Seeed Studio XIAO Expansion board**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)| 2 x [**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|

请选择一个不需要连接任何设备的XIAO nRF52840，直接上传下面的程序。

```c++
#include <ArduinoBLE.h>

BLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Bluetooth® Low Energy LED Service

// Bluetooth® Low Energy LED Switch Characteristic - custom 128-bit UUID, read and writable by central
BLEByteCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);

const int ledPin = LED_BUILTIN; // pin to use for the LED

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // set LED pin to output mode
  pinMode(ledPin, OUTPUT);

  // begin initialization
  if (!BLE.begin()) {
    Serial.println("starting Bluetooth® Low Energy module failed!");

    while (1);
  }

  // set advertised local name and service UUID:
  BLE.setLocalName("XIAO");
  BLE.setAdvertisedService(ledService);

  // add the characteristic to the service
  ledService.addCharacteristic(switchCharacteristic);

  // add service
  BLE.addService(ledService);

  // set the initial value for the characeristic:
  switchCharacteristic.writeValue(0);

  // start advertising
  BLE.advertise();

  // print address
  Serial.print("Address: ");
  Serial.println(BLE.address());

  Serial.println("XIAO nRF52840 Peripheral");
}

void loop() {
  // listen for Bluetooth® Low Energy peripherals to connect:
  BLEDevice central = BLE.central();

  // if a central is connected to peripheral:
  if (central) {
    Serial.print("Connected to central: ");
    // print the central's MAC address:
    Serial.println(central.address());

    // while the central is still connected to peripheral:
    while (central.connected()) {
      // if the remote device wrote to the characteristic,
      // use the value to control the LED:
      if (switchCharacteristic.written()) {
        if (switchCharacteristic.value()) {   // any value other than 0
          Serial.println("LED on");
          digitalWrite(ledPin, HIGH);         // will turn the LED on
        } else {                              // a 0 value
          Serial.println(F("LED off"));
          digitalWrite(ledPin, LOW);          // will turn the LED off
        }
      }
    }

    // when the central disconnects, print it out:
    Serial.print(F("Disconnected from central: "));
    Serial.println(central.address());
  }
}
```

这个程序的主要目的是让XIAO成为一个可以被其他蓝牙设备搜索和连接的名为“XIAO”的蓝牙设备。连接后，你可以通过发送0或1来控制肖上的led分别关闭或打开。 

把 Seeed Studio XIAO nRF52840放在扩展板上。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png" /></div>

为此目的，与扩展板连接的XIAO上传以下程序。

```c++
#include <ArduinoBLE.h>
#include <U8x8lib.h>
#include <Wire.h>

// variables for button
const int buttonPin = D1;
int oldButtonState = LOW;

void setup() {
  Serial.begin(9600);
  while (!Serial);

  // configure the button pin as input
  pinMode(buttonPin, INPUT_PULLUP);

  // initialize the Bluetooth® Low Energy hardware
  BLE.begin();

  Serial.println("Bluetooth® Low Energy Central - LED control");

  // start scanning for peripherals
  BLE.scanForName("XIAO");
}

void loop() {
  // check if a peripheral has been discovered
  BLEDevice peripheral = BLE.available();
  if (peripheral) {
    // discovered a peripheral, print out address, local name, and advertised service
    Serial.print("Found ");
    Serial.print(peripheral.address());
    Serial.print(" '");
    Serial.print(peripheral.localName());
    Serial.print("' ");
    Serial.print(peripheral.advertisedServiceUuid());
    Serial.println();

    if (peripheral.localName() != "XIAO") {
      return;
    }

    // stop scanning
    BLE.stopScan();

    system_control(peripheral);

    // peripheral disconnected, start scanning again
    BLE.scanForName("XIAO");
  }
  delay(100);
}

void system_control(BLEDevice peripheral) {
  // connect to the peripheral
  Serial.println("Connecting ...");

  if (peripheral.connect()) {
    Serial.println("Connected");
  } else {
    Serial.println("Failed to connect!");
    return;
  }

  // discover peripheral attributes
  Serial.println("Discovering attributes ...");
  if (peripheral.discoverAttributes()) {
    Serial.println("Attributes discovered");
  } else {
    Serial.println("Attribute discovery failed!");
    peripheral.disconnect();
    return;
  }

  // retrieve the LED characteristic
  BLECharacteristic ledCharacteristic = peripheral.characteristic("19b10001-e8f2-537e-4f6c-d104768a1214");

  if (!ledCharacteristic) {
    Serial.println("Peripheral does not have LED characteristic!");
    peripheral.disconnect();
    return;
  } else if (!ledCharacteristic.canWrite()) {
    Serial.println("Peripheral does not have a writable LED characteristic!");
    peripheral.disconnect();
    return;
  }

  while (peripheral.connected()) {
    // while the peripheral is connected
    // read the button pin
    int buttonState = digitalRead(buttonPin);

    if (oldButtonState != buttonState) {
      // button changed
      oldButtonState = buttonState;

      if (buttonState) {
        Serial.println("button pressed");

        // button is pressed, write 0x01 to turn the LED on
        ledCharacteristic.writeValue((byte)0x01);
      } else {
        Serial.println("button released");

        // button is released, write 0x00 to turn the LED off
        ledCharacteristic.writeValue((byte)0x00);
      }
    }
  }

  Serial.println("Peripheral disconnected");
}
```

上传程序后，打开串行监视器，程序将开始搜索附近的本地名称为“XIAO”的蓝牙设备并连接(需要等待1至3分钟)。 

当串口显示器显示连接成功的消息后，通过级联板D1键控制另一侧肖nRF52840 LED的切换。 

当然，如果你没有扩展板，你也可以使用自己的按钮或其他设备。

## 另外

如果您想尝试更多示例，您可以导航到“File > examples > INCOMPATIBLE > ArduinoBLE”，并查看**ArduinoBLE**下的所有示例

## 技术支持和产品讨论

感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
