---
description: Introdução a Cliente e Servidor
title: Introdução a Cliente e Servidor
keywords:
  - Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-terminal-BLE-introduction
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-terminal-BLE-introduction/
---

# **Introdução a Cliente e Servidor**

Este wiki apresenta a função de comunicação entre Cliente e Servidor via BLE usando o Wio terminal.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Wio-connect.png"/></div>

## **Hardware necessário**

- [**Wio terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

:::note
Se você tem o Wio terminal, visite o [**Bluetooth Overview**](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Bluetooth-Overview/) para atualizar o firmware BLE mais recente no RTL8720 e baixar as bibliotecas Arduino dependentes.
:::

## **Visão geral**

### **O que é cliente e servidor**

- O cliente faz uma requisição ao Servidor para comunicação de dados que permite a um dispositivo trocar dados sem fio com outros dispositivos Bluetooth.
- O servidor fornece serviços de dados ao Cliente, ele encapsula dados por meio de características. Múltiplas características formam um Service, portanto service é uma aplicação BLE básica.
- Cliente e Servidor são relações de comunicação, ambos podem atuar como master ou slave.

### **O que é UUID**

- UUID é geralmente usado para identificar informações que precisam ser únicas dentro de um sistema ou rede.
- Todo dispositivo BLE tem Service UUID, characteristic UUID e descriptor UUID. Todos os UUID dos produtos devem ser únicos e a baixa probabilidade de repetição os torna úteis como chaves associativas em bancos de dados e identificadores para hardware físico dentro de uma organização.

### **Servidor BLE no Wio terminal**

O Wio terminal com Bluetooth Low Energy pode atuar tanto como servidor quanto como cliente. O servidor anuncia a sua existência. Assim, ele pode ser encontrado por outros dispositivos e contém os dados que o cliente pode ler. O BLE suporta dois tipos de modos, como modo de Broadcast e modo de rede Mesh. No modo de broadcast, o servidor transmite dados para muitos clientes que estão conectados e, no modo de rede mesh, todos os dispositivos estão conectados.

Tanto servidor quanto cliente possuem um “SERVICE UUID” para fazer uma conexão entre servidor e cliente. Dentro desse serviço, podem existir várias “characteristics” que são definidas pelos characteristic UUIDs. Usamos duas characteristics TX e RX para enviar dados para e receber dados do cliente. O Wio terminal (atuando como servidor) “notifica” o cliente via o TX characteristic UUID e os dados são enviados ao Wio terminal e recebidos via o RX characteristic UUID. No entanto, como há envio e recebimento, TX no Wio terminal é na verdade RX no app Android.

### **Uso do app nRF Connect**

O app nRF Connect é usado para buscar o dispositivo BLE pelo UUID e endereço MAC quando você não tem ideia de quais são o UUID e o endereço MAC do dispositivo, além disso ele é capaz de se comunicar com o dispositivo BLE.

- Baixe o [**app nRF Connect**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en) no seu smartphone.
- Escaneie o dispositivo BLE.
- Encontre o dispositivo BLE e conecte‑se a ele, então você verá o UUID e o endereço MAC.
- Você pode enviar ou receber os dados na Characteristic.

Há dispositivos BLE escaneados pelo app nRF Connect.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF-device-scan.png"/></div>

Na characteristic, a seta para cima significa enviar dados para o servidor, e a seta para baixo significa receber os dados do servidor.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/interface.png"/></div>

A opção de interface depende da função dos dispositivos, por exemplo, eu estava conectado a um Wio terminal (servidor) com uma função simples, então existe apenas um Service UUID com characteristics de função diferentes, isso depende da complexidade do equipamento.

## **Uso de Cliente BLE**

Neste exemplo o Wio terminal atua como Cliente para buscar todos os dispositivos BLE ao redor e então exibir o nome dos dispositivos BLE e o endereço MAC via BLE.

- Você precisa de um Wio terminal com o [**firmware BLE mais recente**](https://files.seeedstudio.com/wiki/Wio-Terminal-BLE/20200914-seeed-ambd-firmware-rpc-v1.0.0.zip).
- Configure o UUID do Servidor e o endereço MAC no código.
- Envie o [**código de Cliente**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/blob/master/examples/BLE_client/BLE_client.ino) para o Wio terminal.

### Trecho de código do Cliente

No código, precisamos colocar o UUID e o characteristic UUID service do servidor ao qual você deseja conectar esse dispositivo.

:::note
Se você não souber o endereço MAC e o UUID do dispositivo, vá para a página do **app nRF Connect**.
:::

```cpp
// The remote service we wish to connect to.
static BLEUUID serviceUUID(0x180F);
// The characteristic of the remote service we are interested in.
static BLEUUID    charUUID(0x2A19);
```

:::note
O UUID do código foi definido por nós e é apenas para teste. Normalmente, o formato do UUID para produtos comerciais é diferente do presente, por exemplo, xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
:::

Atualize no código o endereço MAC do dispositivo ao qual você deseja conectar.

```cpp
uint8_t bd_addr[6] = {0x7d, 0x18, 0x1b, 0xf1, 0xf7, 0x2c}; // MAC address: 2c:f7:f1:1b:18:7d
```

:::note
Um endereço MAC de Bluetooth foi projetado para ser exclusivo e é rastreável até o fabricante do chip, além disso, você precisa colocar o endereço MAC em ordem inversa.
:::

Conecte‑se ao Servidor BLE remoto.

```cpp
pClient->connect(myDevice);
```

Obtenha uma referência ao serviço que estamos procurando no servidor BLE remoto.

```cpp
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
```

Obtenha uma referência à characteristic no serviço do servidor BLE remoto.

```cpp
pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
```

### **Código do Cliente**

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

### **Resultado da execução do código**

Esta é uma demonstração simples de código de Cliente sem conectar nenhum dispositivo, o Wio Terminal faz varredura nos dispositivos BLE ao redor e exibe esses dispositivos.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/BLE-device-print.png"/></div>

## **Uso do Servidor BLE**

Neste exemplo o Wio Terminal atua como Servidor para se conectar a outro Wio Terminal (Cliente) e então receber as requisições do Cliente via BLE.

### **Trecho de código do Servidor**

Você pode definir o nome do dispositivo BLE como abaixo:

```cpp
BLEDevice::init("UART Service");
```

Você precisa definir o UUID para o dispositivo servidor no Wio Terminal.

```cpp
#define SERVICE_UUID        "180f"
#define CHARACTERISTIC_UUID "2a19"
#define DESCRIPTOR_UUID     "4545"
```

Criar servidor BLE

```cpp
BLEServer *pServer = BLEDevice::createServer();
```

Criar serviço BLE usando o UUID do servidor.

```cpp
BLEService *pService = pServer->createService(SERVICE_UUID);
```

Adicionar uma característica.

```cpp
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
pCharacteristic->setValue("Hello World says Neil");
```

Função de leitura e escrita.

```cpp
  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);
  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(
                                         DESCRIPTOR_UUID,
                                          ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,
                                         GATT_PERM_READ | GATT_PERM_WRITE,2
                                         );
```

Iniciar serviço BLE

```cpp
pService->start();
```

A publicidade permite que os dispositivos transmitam informações definindo suas intenções. Isso significa que quando um dispositivo móvel recebe uma mensagem Bluetooth, o destinatário tem a opção de aceitar ou recusar a mensagem. O destinatário precisa indicar positivamente que deseja receber mensagens de marketing.

```cpp
BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
```

### **Comunicação entre cliente e servidor**

Fizemos um teste simples neste exemplo: o Cliente Wio Terminal conecta-se ao Servidor Wio Terminal, quando o Cliente encontra o servidor eles se conectam e, ao mesmo tempo, o servidor envia ao Cliente uma mensagem de texto.

- Você precisa de dois Wio Terminals.
- Você precisa criar o UUID para fornecer ao Cliente para se conectar.
- Baixe o código de [**Client**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_client) e [**Server**](https://github.com/Seeed-Studio/Seeed_Arduino_rpcBLE/tree/master/examples/BLE_server) neste **GitHub**.
- Faça o upload do código do Cliente no Wio Terminal.
- Faça o upload do código do Servidor no outro Wio Terminal.

 Quando fizer o upload e estiver executando **o código do servidor**, você verá que ele continua imprimindo "unpaired" no monitor do Arduino IDE antes de conectar o Cliente.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Server_side3.png"/></div>

Depois de conectado ao Cliente, ele parará de imprimir mensagens e o Cliente passará a imprimir as mensagens do servidor.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Client_side7.png"/></div>

### Código do servidor

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

## Servidor conectado ao Cliente de smartphone

<div align="center"><img src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/vidoeh-GIF.gif"/></div>

Este exemplo usa um smartphone como Cliente para se conectar ao Wio Terminal (servidor), e o Wio Terminal é capaz de receber a mensagem do Cliente.

- Baixe o aplicativo nRF Connect no telefone.
- Faça o upload do código no Wio Terminal.
- Abra o aplicativo nRF Connect para procurar o Wio Terminal e depois conecte-se a ele.

:::note
Verifique o nome do dispositivo no código, isso ajudará você a encontrá-lo na busca.
:::

### **Código**

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
