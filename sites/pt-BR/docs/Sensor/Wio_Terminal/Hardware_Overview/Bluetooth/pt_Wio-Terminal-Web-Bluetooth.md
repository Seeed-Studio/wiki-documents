---
description: APIs Web Bluetooth
title: APIs Web Bluetooth
keywords:
  - Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Web-Bluetooth
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Web-Bluetooth/
---

# Usando APIs Web Bluetooth com Wio Terminal

Este é o wiki sobre como interagir com o recurso Bluetooth do Wio Terminal usando as [**APIs Web Bluetooth**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API). As APIs Web Bluetooth fornecem a capacidade de interagir com dispositivos Bluetooth em navegadores web.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/exmaple.gif"/></div>

## O que é a Web Bluetooth API

Até agora, a capacidade de interagir com dispositivos Bluetooth era possível apenas para aplicativos nativos. A [**Web Bluetooth API**](https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web) visa mudar isso e trazê-la também para os navegadores web. Junto com iniciativas como a [Physical Web](https://google.github.io/physical-web/), as pessoas podem se aproximar e interagir com dispositivos diretamente pela web. Confira [este drone controlado a partir de um app web](https://www.youtube.com/watch?v=yILD_ZdXJW4) para ter uma ideia de como isso funciona.

## Exemplo simples de Web Bluetooth

O exemplo a seguir demonstra como configurar o Wio Terminal e usar um site HTML simples para interagir com a Web Bluetooth API usando o Bluetooth do Wio Terminal.

<div align="center"><video width="{560}" height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/simple.mp4" type="video/mp4" />
  </video></div>

### Configuração no Arduino

- Siga o [**Wio Terminal Bluetooth Overview**](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Bluetooth-Overview/) para gravar o firmware Bluetooth no Wio Terminal e baixar as bibliotecas dependentes antes de prosseguir.

- Copie o código a seguir e envie para o Wio Terminal:

```cpp
#include <rpcBLEDevice.h>
#include <BLEServer.h>
#include <BLE2902.h>

bool _BLEClientConnected = false;
uint8_t level = 10;

#define BatteryService BLEUUID((uint16_t)0x180F) 
BLECharacteristic BatteryLevelCharacteristic(BLEUUID((uint16_t)0x2A19), BLECharacteristic::PROPERTY_READ  | BLECharacteristic::PROPERTY_WRITE  | BLECharacteristic::PROPERTY_NOTIFY);

class MyServerCallbacks : public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      _BLEClientConnected = true;
    };

    void onDisconnect(BLEServer* pServer) {
      _BLEClientConnected = false;
    }
};

/* ###############################################################  CALL back to receive data from Phone */
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"

class MyCallbacks: public BLECharacteristicCallbacks {

    void onWrite(BLECharacteristic *pCharacteristic) {
      std::string rxValue = pCharacteristic->getValue();
      Serial.println(rxValue[0]);

      if (rxValue.length() > 0) {
        Serial.println("*********");
        Serial.print("Received Value: ");

        for (int i = 0; i < rxValue.length(); i++) {
          Serial.print(rxValue[i]);
        }
        Serial.println();
        Serial.println("*********");
      }

    }
};

/* ############################################################### */
void initBLE() {
  BLEDevice::init("BLE Battery");
  // Create the BLE Server
  BLEServer *pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  // Create the BLE Service
  BLEService *pBattery = pServer->createService(BatteryService);

  pBattery->addCharacteristic(&BatteryLevelCharacteristic);
  BatteryLevelCharacteristic.addDescriptor(new BLE2902());


  /* ###############################################################  define callback */
  BLECharacteristic *pWriteCharacteristic = pBattery->createCharacteristic(
                                         CHARACTERISTIC_UUID_RX,
                                         BLECharacteristic::PROPERTY_WRITE
                                       );
  pWriteCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);

  pWriteCharacteristic->setCallbacks(new MyCallbacks());
  /* ############################################################### */

  pServer->getAdvertising()->addServiceUUID(BatteryService);

  pBattery->start();
  // Start advertising
  pServer->getAdvertising()->start();
}

void setup() {
  Serial.begin(115200);
//   while(!Serial);
  Serial.println("--- Wio Terminal BLE Battery Level Indicator ---");
  initBLE();
}

void loop() {

  BatteryLevelCharacteristic.setValue(&level, 1);
  BatteryLevelCharacteristic.notify();
  delay(3000);

  level++;
  Serial.print("Battery Level: ");
  Serial.println(int(level));

  if (int(level)==100)
    level=0;
}
```

O código acima configura o Wio Terminal com o nome Bluetooth detectável **`BLE Battery`** e como Servidor Bluetooth, estabelecendo um serviço BLE de bateria. Isto é importante e precisa corresponder ao site HTML das APIs Web Bluetooth mais adiante.

### Site HTML com Web Bluetooth API

Agora que o Wio Terminal está totalmente configurado, precisamos escrever um site HTML com as APIs Web Bluetooth para que eles possam interagir. Consulte o seguinte como referência:

- Baixe o [**`webbluetooth.html`**](https://github.com/ansonhe97/WioTerminal-WebBluetooth/blob/main/webbluetooth.html) daqui.

- Abra o `webbluetooth.html` usando o **Google Chrome ou Microsoft Edge mais recente** (que suportam as APIs Web Bluetooth).

- **Clique com o botão direito** no site e selecione **Inspect** (CMD+OPT+I para macOS e Ctrl+Shift+I para Windows), selecione **Control Console**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/1.png"/></div>

- Clique no botão **Connect with BLE device** no site. Você deverá ver que o `BLE Battery` (Wio Terminal) apareceu na janela de conexão. Clique em **Connect**.

>Observação: as APIs Web Bluetooth na verdade descobrem todos os dispositivos BLE próximos, mas aqui foi usado um filtro para limitar apenas ao dispositivo BLE chamado BLE Battery.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/2.png"/></div>

- Clique no botão **Start** no site e ele começará a receber as informações de bateria transmitidas pelo Wio Terminal!

Console do site da Web Bluetooth API:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/3.png"/></div>

Console do Monitor Serial do Arduino:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/4.png"/></div>

- Agora o Wio Terminal está interagindo com o site usando APIs Web Bluetooth! Isto torna o recurso BLE muito mais interessante, pois você pode ter informações transmitidas através de navegadores web!

## Visualizando dados do acelerômetro em um site usando APIs Web Bluetooth

A seguir temos um bom exemplo de uso das APIs Web Bluetooth em um site. Este site de exemplo conecta-se ao Wio Terminal usando Web Bluetooth e visualiza os dados do acelerômetro integrado.

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/example.mp4" type="video/mp4" />
  </video></div>

### Configuração no Arduino

- Certifique-se de ter seguido o [**Wio Terminal's Accelerator Overview**](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-IMU-Overview/) antes de prosseguir.

- Baixe o **[`WebBluetooth-Accelerator.ino`](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_WebBluetooth/WioTerminal_WebBluetooth.ino) Example** ou copie o código a seguir na Arduino IDE.

```cpp
#include <rpcBLEDevice.h>
#include <BLEServer.h>
#include <LIS3DHTR.h>

#define accelerometerService "19b10000-e8f2-537e-4f6c-d104768a1214"
#define firstCharacteristic  "19b10010-e8f2-537e-4f6c-d104768a1214"
#define DESCRIPTOR_UUID      "19b10010"

LIS3DHTR<TwoWire> lis;

bool deviceConnected = false;
bool oldDeviceConnected = false;

BLEServer *pServer = NULL;
BLECharacteristic * pCharacteristic;

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
//  while(!Serial){};

  lis.begin(Wire1);
  if (!lis) {
    Serial.println("Accelerater Error!");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g
  Serial.println("Accelerater Initialised!");

  Serial.println("Starting BLE work!");

  BLEDevice::init("Accelerometer");
  pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  BLEService *pService = pServer->createService(accelerometerService);
  pCharacteristic = pService->createCharacteristic(
                                         firstCharacteristic,
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
  pCharacteristic->setCallbacks(new MyCallbacks());
  pService->start();

  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(accelerometerService);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06);  // functions that help with iPhone connections issue
  pAdvertising->setMinPreferred(0x12);
  BLEDevice::startAdvertising();
  Serial.println("Characteristic defined! Now you can read it in your phone!");
}

void loop() { 
  if (deviceConnected) {
    updateAcceleration();
  }
      // disconnecting
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // give the bluetooth stack the chance to get things ready
        pServer->startAdvertising(); // restart advertising
        Serial.println("start advertising");
        oldDeviceConnected = deviceConnected;
    }
    // connecting
    if (deviceConnected && !oldDeviceConnected) {
    // do stuff here on connecting
        oldDeviceConnected = deviceConnected;
    }
}

void updateAcceleration() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  String accelerometerData = String(x_values)+"|"+String(y_values)+"|"+String(z_values);
  Serial.println(accelerometerData);
  pCharacteristic->setValue(accelerometerData.c_str());
  pCharacteristic->notify();
  delay(20);
}
```

- Faça o upload do exemplo para o Wio Terminal.

### Site HTML com Web Bluetooth API

- Abra o site **[Web Bluetooth Accelerometer Plotter For Wio Terminal](https://seeed-studio.github.io/Seeed_Arduino_Sketchbook/)**.

> Você também pode ler o [**código-fonte HTML**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/web-bluetooth/docs/index.html) aqui, para mais referências.

- Conecte seu dispositivo chamado `Accelerator` (Wio Terminal) e você deverá conseguir ver os dados do acelerômetro no site!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/web-acc.gif"/></div>

Isso significa que você pode criar um site interativo com Web Bluetooth para o Wio Terminal!

## Recursos

- [**Especificações das Web Bluetooth APIs**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
- [**Exemplos de Web Bluetooth APIs**](https://googlechrome.github.io/samples/web-bluetooth/index.html)
- [**Bugs de implementação**](https://crbug.com/?q=component:Blink>Bluetooth)
- [**Especificação Web Bluetooth**](https://webbluetoothcg.github.io/web-bluetooth)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

