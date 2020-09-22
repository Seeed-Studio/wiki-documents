# bluetooth low energy Features 

This wiki introduces how to connect other Bluetooth devices using the Wio terminal.

!!!Note
    Please visit the [**Bluetooth Overview**](https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/) for Make sure that you have followed through the Bluetooth overview, updated the latest BLE firmware on RTL8720 and downloaded the dependant Arduino libraries.

## **Client and Server**

Client and Server are communication relations, They can both be master or slave, but the server is used to help ATT's lookup table and the definitions of Service, characteristic and descriptor. The Client made a request to the Server for data communication which allows a device to wirelessly exchange data with other Bluetooth devices.


### **UUID** 
UUID is generally used for identifying information that needs to be unique within a system or network thereof. usually, all the BLE device has Service UUID, characteristic UUID and descriptor UUID, All the UUID of products should be uniqueness and low probability being repeated makes them useful for being associative keys in databases and identifiers for physical hardware within an organization.

### **How to get the UUID of device**

please downland [**nRF Connect APP**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)  on your samrtphone, then Scan your BLE device and connect it, there will display the UUID of device. 

![UUID](https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/123123123.png)


In the test we were define services UUID, characteristics UUID and descriptor UUID of the device As below:

```cpp
#define SERVICE_UUID           "6E400001-B5A3-F393-E0A9-E50E24DCCA9E" 
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"
#define CHARACTERISTIC_UUID_TX "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"
```

!!!Note 
The UUID of code was defined by us and it just for the test, Normally The UUID format for commercial products is different to present, for example, xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.



### **device name define**

You can define the BLE device name as below:

```cpp
BLEDevice::init("UART Service");
```

### **BLE scan function**

This example is scanning the BLE devices, the Wio terminal can scan around all the BLE devices, and it will display the Service UUID, Name and MAC address of each BLE devices.

- You will need a Wio Terminal.
- Upload the code to Wio terminal.
- Click the Monitor on the Arduino IDE.

!!!Note
A Bluetooth MAC address is designed to be unique and is traceable to the chip manufacturer.

![UUID](https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/bluebooth-GIF.gif)


The example code
```cpp
#include <BLEDevice.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>
#include "Seeed_erpcUnified.h"

int scanTime = 5; //In seconds
BLEScan* pBLEScan;
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Advertised Device: %s \n", advertisedDevice.toString().c_str());
    }
};
void setup() {
    Serial.begin(115200);
//    while(!Serial);
    Serial.printf("Scanning...");
    
    BLEDevice::init("");
    pBLEScan = BLEDevice::getScan(); //create new scan
    pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
    pBLEScan->setActiveScan(true); 
    pBLEScan->setInterval(100);
    pBLEScan->setWindow(99);  // less or equal setInterval value
}
    
void loop() {
    BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
    Serial.print("Devices found: ");
    Serial.println(foundDevices.getCount());
    pBLEScan->clearResults();  
}
```

### **Client and Server Communication**

This example build the Client and Server connection, if Client found out and connect to the specific Server, the Server will text Client.
 - You will need two Wio terminals.
 - Please download the [**Client**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_client) and [**Server**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_server) code in this **github**.

 - Upload the Client code in the one of Wio terminal
 - Upload the Server code in the other one.
 
 When **the server** looking for the Client it will keep print "1", after connected to the Client then it will display connected information. 
![UUID](https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Server_pic.png)

when **the Client** find out the Server and connected it, it will receive server message and print the text of server on the monitor. 
![UUID](https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Client_pic.png)


## Wio terminal serial


This example presents how Wio displays the text sent by the smartphone on the monitor of the Arduino IDE. 

- You will need the Wio terminal
- Upload the code in the Wio terminal
- Click the Monitor on the Arduino IDE

### **step 1**
Use the sRF connect APP to connect to the Client 'UART SERVICE', then click the Upward arrow, as below: 

![UUID](https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/interface.png)


### **step 2**
The app will pop up a write value window, this infobox is able to write any text. 

![UUID](https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/text-sent5.png)


### **step 3**
Open the monitor on the Arduino IDE, there will dispaly the text from the smartphone

![UUID](https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/text%20recive.png)


## code

```cpp
#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLE2902.h>

BLEServer *pServer = NULL;
BLECharacteristic * pTxCharacteristic;
bool deviceConnected = false;
bool oldDeviceConnected = false;
uint8_t txValue = 0;

#define SERVICE_UUID           "6E400001-B5A3-F393-E0A9-E50E24DCCA9E" // UART service UUID
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"
#define CHARACTERISTIC_UUID_TX "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"

class MyServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      Serial.println("MyServerCallbacks onConnect ");
      deviceConnected = true;
    };

    void onDisconnect(BLEServer* pServer) {
      deviceConnected = false;
    }
};

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
  BLEDevice::init("UART Service");   // Create the BLE Device
  pServer = BLEDevice::createServer(); // Create the BLE Server
  pServer->setCallbacks(new MyServerCallbacks());
  BLEService *pService = pServer->createService(SERVICE_UUID);
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
  pService->start();  // Start the service
  pServer->getAdvertising()->start();  // Start advertising
  Serial.println("Waiting a client connection to notify...");
}

void loop() {

    if (deviceConnected) {
        pTxCharacteristic->setValue(&txValue, 1);
        pTxCharacteristic->notify();
        txValue++;
		delay(10); // bluetooth stack will go into conges     tion, if too many packets are sent
	}
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // give the bluetooth stack the chance to get things ready
        pServer->startAdvertising(); // restart advertising
        Serial.println("start advertising");
        oldDeviceConnected = deviceConnected;
    }
    
    if (deviceConnected && !oldDeviceConnected) { // connecting
        oldDeviceConnected = deviceConnected;
    }
}
```





