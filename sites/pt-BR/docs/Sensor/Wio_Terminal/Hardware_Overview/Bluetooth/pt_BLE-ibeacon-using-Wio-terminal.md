---
description: Bluetooth Ibeacon
title: Bluetooth Ibeacon
keywords:
  - Wio_terminal Bluetooth
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BLE-ibeacon-using-Wio-terminal
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/BLE-ibeacon-using-Wio-terminal/
---

## Wio terminal básico em BLE ibeacon

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/PIC-ibeacon.png"/></div>

## Visão geral

Wio terminal é um poderoso dispositivo de IoT que possui suporte integrado para Bluetooth clássico e Bluetooth Low Energy (BLE). O Bluetooth clássico é usado em módulo de áudio Bluetooth, transmissão de arquivos ou de grandes fluxos de código; o BLE é usado para aplicações otimizadas para bateria, como beacons Bluetooth, pulseiras fitness, anúncios de proximidade etc. Assim, conseguimos, de acordo com a necessidade do usuário, conectar alguns módulos de função específicos e então agir como um beacon em ocasiões específicas.

Nos tutoriais anteriores do Wio terminal apresentamos o modo Cliente e o modo Servidor para uso no Wio terminal; se ainda houver alguma dúvida, revise a [**introdução a Cliente e Servidor**](https://wiki.seeedstudio.com/pt-br/Wio-terminal-BLE-introduction/)

Neste tutorial vamos criar um BLE iBeacon usando o Wio terminal; além disso, utilizaremos um smartphone para apresentar as informações do iBeacon. Presumo que você já saiba como usar o Wio terminal com a Arduino IDE; caso contrário, volte para [**o guia de início rápido do Wio terminal**](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/).

## Hardware necessário

- [**Wio terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- **Cabo Type-C**

- **Bateria de chassi do Wio terminal**
<!-- (https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html) -->

## Software necessário

- Baixe a [**Arduino IDE**](https://www.arduino.cc/en/main/software) no PC

- Baixe o [**nRF Connect APP**](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_US) no smartphone

:::note
Se você não estiver familiarizado com o uso do nRF connect APP, consulte este [**tutorial**](https://wiki.seeedstudio.com/pt-br/Wio-terminal-BLE-introduction/#nrf-connect-app-usage).
:::

## Instruções

### **Teste de iBeacon no Wio terminal**

Este é um teste simples para escanear o dispositivo iBeacon do Wio terminal e apresentar as informações. Certifique-se de que o dispositivo Ibeacon do Wio terminal possa ser detectado; você verá o ícone específico de Ibeacon.

### **o nRF connect APP**

1. Baixe o **nRF Connect APP** e depois abra o APP, encontre a opção **SCAN** na parte superior direita. Você verá os dispositivos iBeacon do Wio terminal na lista; há endereço MAC, RSSI(dBm) e tempo de atraso de conexão.

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/nRF_interface.jpg"/></div>

:::note
    Neste teste o dispositivo não foi nomeado, então será exibido N/A.
:::

**Código de teste**

```cpp

#include "sys/time.h"
#include "rpcBLEDevice.h"
#include "BLEBeacon.h"

BLEAdvertising *pAdvertising;
//struct timeval now;

#define BEACON_UUID           "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID 1 

void setBeacon() {

  BLEBeacon oBeacon = BLEBeacon();
  oBeacon.setManufacturerId(0x4C00); // fake Apple 0x004C LSB (ENDIAN_CHANGE_U16!)
  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));
  oBeacon.setMajor(0x007B);
  oBeacon.setMinor(0x01C8);
  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();
  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();

  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED 0x04

  std::string strServiceData = "";

  strServiceData += (char)26;     // Len
  strServiceData += (char)0xFF;   // Type
  strServiceData += oBeacon.getData(); 
  oAdvertisementData.addData(strServiceData);

  pAdvertising->setAdvertisementData(oAdvertisementData);
  pAdvertising->setScanResponseData(oScanResponseData);
  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_NONCONN_IND);

}

void setup() {


  Serial.begin(115200);
  while(!Serial){};

  // Create the BLE Device
  BLEDevice::init("");

  // Create the BLE Server
  // BLEServer *pServer = BLEDevice::createServer(); // <-- no longer required to instantiate BLEServer, less flash and ram usage

  pAdvertising = BLEDevice::getAdvertising();

  setBeacon();
   // Start advertising
  pAdvertising->start();
  Serial.println("Advertizing started...");
  delay(100);
  Serial.printf("in deep sleep\n");
}

void loop() {
 delay(1000);
}
```

### Exposição simples de Ibeacon

Esta demonstração apresenta como usar o Wio terminal em algumas ocasiões específicas. Por exemplo, o Ibeacon do Wio terminal pode anunciar as informações do gateway para guiar as pessoas. Como na figura abaixo, há porta-1, porta-2... etc., e dentro da porta-1 há o produto A e a instrução. Podemos instalar o Wio terminal em cada porta para anunciar informações e exibir as informações de introdução na tela.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_demo_pic.png"/></div>

Ao abrir o nRF connect APP, veremos o dispositivo Ibeacon "Wio" na lista; em seguida, clique no dispositivo, serão exibidos o UUID do dispositivo, RSSI e dados do fabricante.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibecon_formatttttt.png"/></div>

Clique em manufacturer data; serão exibidas 3 opções: Manufacturer data(Bluetooth Core 4.1), Manufacturer data e Text(UTF-8). Depois clique em text(UTF-8); os dados do fabricante serão convertidos em dados normais.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/ibeacon_data_format.png"/></div>

O Text(UTF-8) exibe as informações do gateway: A na porta-1, B na porta-2; assim, as pessoas saberão onde A e B estão.  

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_device_info.png"/></div>

Podemos ver que, depois que as pessoas entrarem na porta, verão mais detalhes sobre A ou B, como histórico ou outro texto de introdução, o que depende da ocasião de uso.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-terminal-BLE-Ibeacon/Ibeacon_product_new.png"/></div>

## Código

```cpp
#include "sys/time.h"
#include "BLEDevice.h"
#include "BLEBeacon.h"

#include <TFT_eSPI.h> // Hardware-specific library
#include <SPI.h>
TFT_eSPI tft = TFT_eSPI();       // Invoke custom library
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite
LIS3DHTR<TwoWire> lis;
BLEAdvertising *pAdvertising;

#define BEACON_UUID           "8ec76ea3-6668-48da-9866-75be8bc86f4d" // UUID 1 128-Bit 
#define SERVICE_UUID           0x1801
#define SERVICE_UUID1          0x1802
#define SERVICE_UUID2          0x1803

void setBeacon() {
  BLEBeacon oBeacon = BLEBeacon();
  oBeacon.setManufacturerId(0x4C00); // fake Apple 0x004C LSB (ENDIAN_CHANGE_U16!)
  oBeacon.setProximityUUID(BLEUUID(BEACON_UUID));
  oBeacon.setMajor(0x007B);
  oBeacon.setMinor(0x01C8);
  BLEAdvertisementData oAdvertisementData = BLEAdvertisementData();
  BLEAdvertisementData oScanResponseData = BLEAdvertisementData();

  oAdvertisementData.setFlags(0x04); // BR_EDR_NOT_SUPPORTED 0x04
  std::string strServiceData = "";
  strServiceData += (char)26;     // Len
  strServiceData += (char)0xFF;   // Type
  strServiceData += oBeacon.getData();
  oAdvertisementData.addData(strServiceData);

  union cracked_float_t {
    float f;
    uint32_t l;
    word w[sizeof(float) / sizeof(word)];
    byte b[sizeof(float)];
  };

  oScanResponseData.setName("wio");

  oScanResponseData.setManufacturerData("oxA-door-1");   // Ibeacon information(MAX:31 byte) 
  oScanResponseData.setManufacturerData("oxB-door-2");

  pAdvertising->setAdvertisementData(oAdvertisementData);
  pAdvertising->setScanResponseData(oScanResponseData);
  pAdvertising->setAdvertisementType(GAP_ADTYPE_ADV_SCAN_IND);


  spr.fillSprite(TFT_BLACK);
  spr.createSprite(240, 160);
  spr.fillSprite(TFT_BLACK);
  spr.setTextColor(TFT_WHITE, TFT_BLACK);
  spr.setFreeFont(&FreeSansBoldOblique12pt7b);

  spr.drawString("what is A", 20 , 10);                // product introduction
  spr.drawString("The A history: .....", 20 , 35);      

  spr.drawString("what is B", 20 , 110);
  spr.drawString("The B history: .....", 20 , 135);


  spr.pushSprite(0, 0);
}

  void setup() {

    tft.begin();
    tft.init();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    Serial.begin(115200);

    // Create the BLE Device
    BLEDevice::init("");
    lis.begin(Wire1);
    if (!lis) {
      Serial.println("ERROR");
      while (1);
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g


    pAdvertising = BLEDevice::getAdvertising();


    Serial.println("Advertizing started...");
    delay(100);
  }

  void loop() {
    setBeacon();
    // Start advertising
    pAdvertising->start();
    delay(5000);
    pAdvertising->stop();
    delay(1000);
  }
```
