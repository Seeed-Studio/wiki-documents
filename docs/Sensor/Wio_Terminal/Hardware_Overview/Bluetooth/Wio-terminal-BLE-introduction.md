---
description: Client and Server introduction
title: Client and Server introduction
keywords:
- Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-terminal-BLE-introduction
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# **Client and Server Introduction**

This wiki introduces Client and server communicate function via BLE using the Wio terminal.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Wio-connect.png"/></div>

## **Hardware required**

- [**Wio terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

:::note
If you have the Wio terminal, Please visit the [**Bluetooth Overview**](https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/) to updated the latest BLE firmware on RTL8720 and downloaded the dependant Arduino libraries.
:::

## **Overview**

### **what is client and server**

- The client made a request to the Server for data communication which allows a device to wirelessly exchange data with other Bluetooth devices.
- The server provides data services to the Client, it encapsulates data through characteristic. Multiple characteristics form a Service, therefore service is a basic BLE application.
- Client and Server are communication relations, They can both as master or slave.

### **What is UUID**

- UUID is generally used for identifying information that needs to be unique within a system or network thereof.
- All the BLE device has Service UUID, characteristic UUID and descriptor UUID, All the UUID of products should be uniqueness and low probability being repeated makes them useful for being associative keys in databases and identifiers for physical hardware within an organization.

### **BLE Server on Wio terminal**

The Wio terminal with Bluetooth Low Energy can act as either server and client. The server advertises its existence. And it can be found by other devices and it contains the data that the client can read. The BLE supports two types of modes such as Broadcast mode and Mesh network mode. In broadcast mode, the server transmits data to many clients that are connected and in a mesh network mode, all the devices are connected.

Both server and client have a “SERVICE UUID” to make a connection between server and client. Inside this service, there can be several “characteristics” which are defined by characteristic UUID’s. We use two characteristics TX and RX to send data to and receive data from the client. The Wio terminal (acting as the server) “notifies” the client via the TX characteristic UUID and data is sent to the Wio terminal and received via the RX characteristic UUID. However, since there is sending and receiving, TX on the Wio terminal is actually RX on the Android app.

### **nRF Connect APP usage**

The nRF connect APP is used to search the BLE device of UUID and MAC address when you have not idea what the UUID and MAC address of the device is, also it is able to communicate with BLE device.

- Download the [**nRF Connect APP**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en) on your smartphone.
- Scan the BLE device.
- Find out the BLE device and connect it, then you will see the UUID and MAC address.
- You can sent or revice the data on the Characteristic.

There are BLE devices scanned by the nRF Connect APP.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF-device-scan.png"/></div>

On the characteristic, that has up arrow which is mean sent to data to the server, and down arrow means to receive the data from the server.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/interface.png"/></div>

The interface option is according to the devices function, for example, i was connected to a Wio terminal(server) with a simple function, so there are only have one Service UUID with difference function characteristic, it depends on the complicacy of the equipment.

## **BLE Client usage**

This example the Wio terminal as Client to search around all the BLE devices, and then display the BLE devices name and MAC address via BLE.

- You need a Wio terminal with [**latest BLE firmware**](https://files.seeedstudio.com/wiki/Wio-Terminal-BLE/20200914-seeed-ambd-firmware-rpc-v1.0.0.zip).
- Setup the Server UUID and MAC address on the code.
- Upload the [**Client code**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/blob/master/examples/BLE_client/BLE_client.ino) on the Wio terminal.

### Client code snippet

In the code, we need to put the UUID and characteristic UUID service of the server which you want to connect that device.

:::note
If you do not konw the MAC address and UUID of device, please go to the **nRF Connect APP** page.
:::

```cpp
// The remote service we wish to connect to.
static BLEUUID serviceUUID(0x180F);
// The characteristic of the remote service we are interested in.
static BLEUUID    charUUID(0x2A19);
```

:::note
The UUID of code was defined by us and it just for the test, Normally The UUID format for commercial products is different to present, for example, xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
:::

Update the MAC address of the device you want to connect that device on the code.

```cpp
uint8_t bd_addr[6] = {0x7d, 0x18, 0x1b, 0xf1, 0xf7, 0x2c}; // MAC address: 2c:f7:f1:1b:18:7d
```

:::note
A Bluetooth MAC address is designed to be unique and is traceable to the chip manufacturer, in addition, you need put the MAC address in reverse order.
:::

Connect to the remove BLE Server.

```cpp
pClient->connect(myDevice);
```

Obtain a reference to the service we are after in the remote BLE server.

```cpp
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
```

Obtain a reference to the characteristic in the service of the remote BLE server.

```cpp
pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
```

### **Client code**

```cpp
/**
 * A BLE client example that is rich in capabilities.
 * There is a lot new capabilities implemented.
 * author unknown
 * updated by chegewara
 */

#include "rpcBLEDevice.h"
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

// The remote service we wish to connect to.
static BLEUUID serviceUUID(0xFEE0);
// The characteristic of the remote service we are interested in.
static BLEUUID    charUUID(0x2A2B);

static boolean doConnect = false;
static boolean connected = false;
static boolean doScan = false;
static BLERemoteCharacteristic* pRemoteCharacteristic;
static BLEAdvertisedDevice* myDevice;
uint8_t bd_addr[6] = {0xD7, 0x1D, 0x12, 0xDC, 0x64, 0xF0};
BLEAddress BattServer(bd_addr);

static void notifyCallback(
  BLERemoteCharacteristic* pBLERemoteCharacteristic,
  uint8_t* pData,
  size_t length,
  bool isNotify) {
    Serial.print("Notify callback for characteristic ");
    Serial.print(pBLERemoteCharacteristic->getUUID().toString().c_str());
    Serial.print(" of data length ");
    Serial.println(length);
    Serial.print("data: ");
    Serial.print(*(uint8_t *)pData);
}


class MyClientCallback : public BLEClientCallbacks {
  void onConnect(BLEClient* pclient) {
  }

  void onDisconnect(BLEClient* pclient) {
    connected = false;
    Serial.println("onDisconnect");
  }
};


bool connectToServer() {
    Serial.print("Forming a connection to ");
    Serial.println(myDevice->getAddress().toString().c_str());
    
    BLEClient*  pClient  = BLEDevice::createClient();
    Serial.println(" - Created client");

    pClient->setClientCallbacks(new MyClientCallback());
 

    // Connect to the remove BLE Server.
    pClient->connect(myDevice);  // if you pass BLEAdvertisedDevice instead of address, it will be recognized type of peer device address (public or private)
    Serial.println(" - Connected to server");

    // Obtain a reference to the service we are after in the remote BLE server.
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    Serial.println(serviceUUID.toString().c_str());
    if (pRemoteService == nullptr) {
      Serial.print("Failed to find our service UUID: ");
      Serial.println(serviceUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - Found our service");


    // Obtain a reference to the characteristic in the service of the remote BLE server.
    pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
    if (pRemoteCharacteristic == nullptr) {
      Serial.print("Failed to find our characteristic UUID: ");
      Serial.println(charUUID.toString().c_str());
      pClient->disconnect();
      return false;
    }
    Serial.println(" - Found our characteristic");


    // Read the value of the characteristic.
    if(pRemoteCharacteristic->canRead()) {
      Serial.println(" -  can  read  start");
      std::string value = pRemoteCharacteristic->readValue();
      Serial.print("The characteristic value was: ");
      Serial.println(value.c_str());
    }
    
    if(pRemoteCharacteristic->canNotify())
      pRemoteCharacteristic->registerForNotify(notifyCallback);

    connected = true;
    return true;
}
/**
 * Scan for BLE servers and find the first one that advertises the service we are looking for.
 */
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
 /**
   * Called for each advertising BLE server.
   */
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    Serial.print("BLE Advertised Device found: ");
    Serial.println(advertisedDevice.toString().c_str());
   
    // We have found a device, let us now see if it contains the service we are looking for.
    if (memcmp(advertisedDevice.getAddress().getNative(),BattServer.getNative(), 6) == 0) {
      Serial.print("BATT Device found: ");
      Serial.println(advertisedDevice.toString().c_str());
      BLEDevice::getScan()->stop();
      Serial.println("new BLEAdvertisedDevice");
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      Serial.println("new BLEAdvertisedDevice done");
      doConnect = true;
      doScan = true; 
  } // onResult
  }
}; // MyAdvertisedDeviceCallbacks


void setup() {
  Serial.begin(115200);
  while(!Serial){};
  delay(2000);
  Serial.println("Starting Arduino BLE Client application...");
  BLEDevice::init("");

  // Retrieve a Scanner and set the callback we want to use to be informed when we
  // have detected a new device.  Specify that we want active scanning and start the
  // scan to run for 5 seconds.
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setInterval(1349);
  pBLEScan->setWindow(449);
  pBLEScan->setActiveScan(true);
  pBLEScan->start(5, false);
} // End of setup.


// This is the Arduino main loop function.
void loop() {
 
  // If the flag "doConnect" is true then we have scanned for and found the desired
  // BLE Server with which we wish to connect.  Now we connect to it.  Once we are 
  // connected we set the connected flag to be true.
  if (doConnect == true) {
    if (connectToServer()) {
      Serial.println("We are now connected to the BLE Server.");
    } else {
      Serial.println("We have failed to connect to the server; there is nothin more we will do.");
    }
    doConnect = false;
  }
  Serial.printf(".");
  delay(1000);
} // End of loop
```

### **Code running result**

This is a simple Client code demonstration without connecting any devices, the Wio terminal scan around BLE devices and displays the devices.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/BLE-device-print.png"/></div>

## **BLE Server Usage**

This example the Wio terminal as Server to connect the other Wio terminal(Client), and then receive the Client require via BLE.

### **Server code Snippet**

You can define the BLE device name as below:

```cpp
BLEDevice::init("UART Service");
```

You need to define the UUID for the server device on the Wio terminal.

```cpp
#define SERVICE_UUID        "180f"
#define CHARACTERISTIC_UUID "2a19"
#define DESCRIPTOR_UUID     "4545"
```

Create BLE server

```cpp
BLEServer *pServer = BLEDevice::createServer();
```

Create BLE service using the server UUID.

```cpp
BLEService *pService = pServer->createService(SERVICE_UUID);
```

Add a characteristics.

```cpp
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
pCharacteristic->setValue("Hello World says Neil");
```

Read and write function.

```cpp
  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(
                                         DESCRIPTOR_UUID,
                                          ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,
                                         GATT_PERM_READ | GATT_PERM_WRITE,2
                                         );
```

Start BLE service

```cpp
pService->start();
```

Advertising allows devices to broadcast information defining their intentions. Which means that when a mobile device has received a Bluetooth message, the recipient has the choice to either accept or decline the message. The recipient needs to positively indicate that they wish to receive marketing messages.

```cpp
BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
```

### **Client and server commnication**

We made a simple test in this example, the Wio terminal Client connects with the Wio terminal Server, when Client found the server then they will connect meanwhile server will text Client a message.

- You need two Wio terminals.
- You need to create the UUID to provide Client to connect it.
- Please download the [**Client**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_client) and [**Server**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_server) code in this **github**.
- Upload the Client code in the Wio terminal.
- Upload the Server code in the other Wio terminal.

 When upload and running **The server code**, you will see it keep printing "unpaired" on the Arduino IDE monitor before connect the Client.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Server_side3.png"/></div>

After connected to the Client, it will stop print message and the Client will print message from server.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Client_side7.png"/></div>

### Server code

```cpp
#include <rpcBLEDevice.h>
#include <BLEServer.h>

#define SERVICE_UUID        "180f"
#define CHARACTERISTIC_UUID "2a19"
#define DESCRIPTOR_UUID     "4545"

class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string rxValue = pCharacteristic->getValue();

      if (rxValue.length() > 0) {
        Serial.println("*********");
        Serial.print("Received Value: ");
        for (int i = 0; i < rxValue.length(); i++)
          Serial.print(rxValue[i]);

        Serial.println();
        Serial.println("*********");
      }
    }
};

void setup() {
  Serial.begin(115200);
  while(!Serial){};
  Serial.println("Starting BLE work!");

  BLEDevice::init("Long name 11");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(
                                         DESCRIPTOR_UUID,
                                          ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,
                                         GATT_PERM_READ | GATT_PERM_WRITE,
                                         2
                                         );
  pCharacteristic->setValue("Hello World says Neil");
  pCharacteristic->setCallbacks(new MyCallbacks());
  pService->start();

  // BLEAdvertising *pAdvertising = pServer->getAdvertising();  // this still is working for backward compatibility
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // functions that help with iPhone connections issue
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("Characteristic defined! Now you can read it in your phone!");
}

void loop() { 
  // put your main code here, to run repeatedly:
  Serial.println("1");
  delay(2000);
}
```

## Server connect to Client of Smartphone

<div align="center"><img src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/vidoeh-GIF.gif"/></div>

This example is using a smartphone as a Client to connect the Wio terminal(server), and the Wio terminal is able to receive the message from the Client.

- Download the nRF connect APP on the Phone.
- Upload the code on the Wio terminal.
- Open the nRF connect APP to search the Wio terminal and then connect it.

:::note
Check the device name on the code, that will help you search it.
:::

### **Code**

```cpp
#include "rpcBLEDevice.h"
#include <BLE2902.h>
#include <TFT_eSPI.h> // Hardware-specific library
#include <SPI.h>
TFT_eSPI tft = TFT_eSPI();       // Invoke custom library
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 
 
BLEServer *pServer = NULL;
BLECharacteristic * pTxCharacteristic;
bool deviceConnected = false;
bool oldDeviceConnected = false;
String Value11;
 
#define SERVICE_UUID           "6E400001-B5A3-F393-E0A9-E50E24DCCA9E" // UART service UUID
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"
#define CHARACTERISTIC_UUID_TX "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"
 
class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      deviceConnected = true;
      spr.fillSprite(TFT_BLACK);
      spr.createSprite(240, 100);
      spr.setTextColor(TFT_WHITE, TFT_BLACK);
      spr.setFreeFont(&FreeSansBoldOblique12pt7b);
      spr.drawString("Message: ", 20, 70);
      spr.setTextColor(TFT_GREEN, TFT_BLACK);
      spr.drawString("status: connected",10 ,5); 
      spr.pushSprite(0, 0);
    };
 
    void onDisconnect(BLEServer* pServer) {
      deviceConnected = false;
      Serial.print("123123");
      spr.fillSprite(TFT_BLACK);
      spr.createSprite(240, 100);
      spr.setTextColor(TFT_WHITE, TFT_BLACK);
      spr.setFreeFont(&FreeSansBoldOblique12pt7b);
      spr.drawString("Message: ", 20, 70);
      spr.setTextColor(TFT_RED, TFT_BLACK);
      spr.drawString("status: disconnect",10 ,5); 
      spr.pushSprite(0, 0);
    }
};
 
class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string rxValue = pCharacteristic->getValue();
 
        if (rxValue.length() > 0) {
        spr.fillSprite(TFT_BLACK);
        spr.setTextColor(TFT_WHITE, TFT_BLACK);
        spr.setFreeFont(&FreeSansBoldOblique9pt7b);
        for (int i = 0; i < rxValue.length(); i++){
//           Serial.print(rxValue[i]);
           spr.drawString((String)rxValue[i],10 + i*15,0);
        spr.pushSprite(10, 100);
        }
       }
    }
};
 
void setup() {
  tft.begin();
  tft.init();
  tft.setRotation(3);
  tft.fillScreen(TFT_BLACK);
 
  BLEDevice::init("UART Servicess");  //device name define
 
  // Create the BLE Server
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());
 
  // Create the BLE Service
  BLEService *pService = pServer->createService(SERVICE_UUID);
 
  // Create a BLE Characteristic
  pTxCharacteristic = pService->createCharacteristic(
                    CHARACTERISTIC_UUID_TX,
                    BLECharacteristic::PROPERTY_NOTIFY | BLECharacteristic::PROPERTY_READ
                  );
  pTxCharacteristic->setAccessPermissions(GATT_PERM_READ);      
  pTxCharacteristic->addDescriptor(new BLE2902());
 
  BLECharacteristic * pRxCharacteristic = pService->createCharacteristic(
                       CHARACTERISTIC_UUID_RX,
                      BLECharacteristic::PROPERTY_WRITE
 
                    );
  pRxCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);           
 
  pRxCharacteristic->setCallbacks(new MyCallbacks());
 
  // Start the service
  pService->start();
 
  // Start advertising
  pServer->getAdvertising()->start();
      spr.fillSprite(TFT_BLACK);
      spr.createSprite(240, 100);
      spr.setTextColor(TFT_WHITE, TFT_BLACK);
      spr.setFreeFont(&FreeSansBoldOblique12pt7b);
      spr.drawString("status: disconnect",10 ,5); 
      spr.drawString("Message: ", 20, 70);
      spr.pushSprite(0, 0);
}
 
void loop() {
 
    // disconnecting
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // give the bluetooth stack the chance to get things ready
        pServer->startAdvertising(); // restart advertising
        oldDeviceConnected = deviceConnected;
    }
    // connecting
    if (deviceConnected && !oldDeviceConnected) {
    // do stuff here on connecting
        oldDeviceConnected = deviceConnected;
    }
}
```
