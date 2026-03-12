---
title: Uso de Buletooth
description: Uso de Buletooth com Seeed Studio XIAO ESP32-C5
keywords:
  - xiao
  - esp32c5
  - buletooth
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_buletooth_usage
sidebar_class_name: hidden
last_update:
  date: 01/06/2026
  author: Zeller
createdAt: '2026-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_buletooth_usage/
---

# Uso de Buletooth com Seeed Studio XIAO ESP32-C5

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

O Seeed Studio XIAO ESP32-C5 é uma poderosa placa de desenvolvimento que suporta Bluetooth 5, BLE e rede Mesh, tornando-o uma escolha ideal para uma ampla gama de aplicações de IoT que exigem conectividade sem fio. Com seu excelente desempenho de RF, o XIAO ESP32-C5 pode fornecer comunicação sem fio confiável e de alta velocidade em uma variedade de distâncias, tornando-o uma solução versátil tanto para aplicações sem fio de curto quanto de longo alcance. Neste tutorial, vamos focar nos recursos básicos das capacidades de Bluetooth do XIAO ESP32-C5, como escanear dispositivos Bluetooth próximos, estabelecer uma conexão Bluetooth e transmitir e receber dados por meio de uma conexão Bluetooth.

## Primeiros Passos

### Instalação da Antena

Dentro da embalagem do Seeed Studio XIAO ESP32-C5, há um conector dedicado de **Antena Wi-Fi/BT**. Para obter a melhor intensidade de sinal WiFi/Bluetooth, você precisa retirar a antena incluída no pacote e conectá-la ao conector.<br/>
:::tip
Se você quiser obter um efeito de ganho de sinal ainda mais forte, pode comprar e instalar a **Antena Externa 2.4G/5G com Conector RP-SMA Macho** — ela oferece um ganho muito maior do que a antena FPC interna incluída no pacote!
:::
<div class="table-center">
 <table>
  <tr>
   <th>Antena Externa 2.4G/5G com Conector RP-SMA Macho</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Uso de Bluetooth Low Energy (BLE)

Bluetooth Low Energy, abreviado como BLE, é uma variante de Bluetooth que economiza energia. A principal aplicação do BLE é a transmissão a curta distância de pequenas quantidades de dados (baixa largura de banda). Diferente do Bluetooth, que está sempre ativo, o BLE permanece constantemente em modo de suspensão, exceto quando uma conexão é iniciada.

:::tip
ESP32-C5 suporta apenas BLE e não suporta Bluetooth Clássico
:::

Devido às suas propriedades, o BLE é adequado para aplicações que precisam trocar pequenas quantidades de dados periodicamente, funcionando com uma bateria tipo moeda. Por exemplo, o BLE é de grande utilidade nas indústrias de saúde, fitness, rastreamento, beacons, segurança e automação residencial.

Isso faz com que ele consuma pouquíssima energia. O BLE consome aproximadamente 100 vezes menos energia do que o Bluetooth (dependendo do caso de uso).

Sobre a parte de BLE do XIAO ESP32-C5, apresentaremos seu uso nas três seções a seguir.

- [Alguns conceitos fundamentais](#Alguns-conceitos-fundamentais) -- Primeiro conheceremos alguns conceitos que podem ser usados com frequência em BLE, a fim de nos ajudar a entender o processo de execução e o raciocínio dos programas BLE.
- [Scanner BLE](#Scanner-BLE) -- Esta seção explicará como buscar dispositivos Bluetooth próximos e imprimi-los no monitor serial.
- [Servidorcliente-BLE](#Servidorcliente-BLE) -- Esta seção explicará como usar o XIAO ESP32-C5 como Servidor e Cliente para enviar e receber mensagens de dados especificadas. Também será usado para receber ou enviar mensagens do telefone para o XIAO.

### Alguns conceitos fundamentais

#### Servidor e Cliente

Com o Bluetooth Low Energy, há dois tipos de dispositivos: o servidor e o cliente. O XIAO ESP32-C5 pode atuar tanto como cliente quanto como servidor.

O servidor anuncia a sua existência, para que possa ser encontrado por outros dispositivos, e contém os dados que o cliente pode ler. O cliente escaneia os dispositivos próximos e, quando encontra o servidor que está procurando, estabelece uma conexão e escuta os dados de entrada. Isso é chamado de comunicação ponto a ponto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/49.png" style={{width:800, height:'auto'}}/></div>

#### Atributo

Atributo é, na verdade, um pedaço de dado. Cada dispositivo Bluetooth é usado para fornecer um serviço, e o serviço é uma coleção de dados; essa coleção pode ser chamada de banco de dados, e cada entrada no banco de dados é um Atributo, então aqui eu traduzo Atributo como entradas de dados. Você pode imaginar um dispositivo Bluetooth como uma tabela, e cada linha dentro da tabela é um Atributo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

Quando dois dispositivos Bluetooth estabelecem uma conexão, eles precisam de um protocolo para determinar como se comunicar. GATT (Generic Attribute Profile) é esse protocolo que define como os dados são transmitidos entre dispositivos Bluetooth.

No protocolo GATT, as funções e propriedades de um dispositivo são organizadas em estruturas chamadas serviços, características e descritores. Um serviço representa um conjunto de funções e recursos relacionados fornecidos por um dispositivo. Cada serviço pode incluir múltiplas características, que definem uma determinada propriedade ou comportamento do serviço, como dados de sensores ou comandos de controle. Cada característica possui um identificador exclusivo e um valor, que podem ser lidos ou escritos para se comunicar. Os descritores são usados para descrever metadados das características, como formato e permissão de acesso dos valores das características.

Ao utilizar o protocolo GATT, dispositivos Bluetooth podem se comunicar em diferentes cenários de aplicação, como transmitir dados de sensores ou controlar dispositivos remotos.

#### Característica BLE

ATT significa Attribute Protocol. É o mecanismo subjacente para a troca de dados em BLE. O ATT depende de um conjunto de comandos, como Requests, Responses, Notifications e Indications. Na Pilha de Protocolo Bluetooth, o ATT é a camada responsável pelo transporte de dados, tornando-se o foco principal ao analisar pacotes de dados Bluetooth.

O comando ATT, conhecido formalmente como ATT PDU (Protocol Data Unit). Ele inclui 4 categorias: read, write, notify e indicate. Esses comandos podem ser divididos em dois tipos: Operações como **Write Request** e **Indication** exigem um reconhecimento do outro lado, enquanto **Write Command** e **Notification** não exigem.

Service e Characteristic são definidos na camada GATT. O lado Service fornece o Service, o Service é o dado, e o dado é o atributo; o Service e a Characteristic são a apresentação lógica dos dados, ou seja, os dados que o usuário pode ver acabam sendo transformados em Service e Characteristic.

Vamos dar uma olhada em como o serviço e a característica se parecem a partir da perspectiva de um celular. nRF Connect é um aplicativo que nos mostra de forma muito visual como cada pacote deve ser.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_4.jpg" style={{width:400, height:'auto'}}/></div>

Como você pode ver, na especificação Bluetooth, cada aplicação Bluetooth específica é composta por múltiplos Services, e cada Service é composto por múltiplas Characteristics. Uma Characteristic consiste em um UUID, Propriedades e um Valor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

As Propriedades são usadas para descrever os tipos e permissões de operações em uma característica, como se ela suporta leitura, escrita, notificação e assim por diante. Isso é semelhante às quatro categorias incluídas em um ATT PDU.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

Cada serviço, característica e descritor possui um UUID (Universally Unique Identifier). Um UUID é um número exclusivo de 128 bits (16 bytes). Por exemplo:

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

Existem UUIDs reduzidos para todos os tipos, serviços e perfis especificados no [SIG (Bluetooth Special Interest Group)](https://www.bluetooth.com/specifications/gatt/services). Mas se a sua aplicação precisar de seu próprio UUID, você pode gerá-lo usando este [site gerador de UUID](https://www.uuidgenerator.net/).

### Exemplos de Uso de BLE

Em seguida, apresentaremos como usar o **Bluetooth Low Energy (BLE)** no XIAO ESP32-C5 por meio de vários exemplos práticos.<br/>

Os exemplos abaixo são implementados com base na **Arduino IDE**. Se você nunca usou a Arduino IDE antes, visite: [Primeiros Passos com Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_getting_started/)

#### Scanner BLE

No **modo Scanner BLE**, o XIAO ESP32-C5 atua como **Central** ou como **Observer**. Em vez de estabelecer uma conexão, ele **escuta** pacotes de Advertising transmitidos por outros dispositivos na área ao redor.

##### Programa

- Abaixo está um trecho de código de referência demonstrando como usar o modo Scanner BLE no XIAO ESP32-C5.

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

int scanTime = 5; // Scanning duration (seconds)
BLEScan* pBLEScan;

class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      // Callback function when a device is discovered
      Serial.printf("Device found: %s \n", advertisedDevice.toString().c_str());
    }
};

void setup() {
  Serial.begin(115200);
  Serial.println("Initializing BLE Scanner...");

  BLEDevice::init("");
  pBLEScan = BLEDevice::getScan(); // Create scan object
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); // Active scan (consumes more power but gets more complete information)
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);
}

void loop() {
  Serial.println("Starting scan...");
  // false here means do not keep duplicate device results, true to keep
  BLEScanResults* foundDevices = pBLEScan->start(scanTime, false);

  Serial.print("Scan finished, number of devices found: ");
  Serial.println(foundDevices->getCount());
  Serial.println("Scan completed, clearing results...");

  pBLEScan->clearResults();   // Clear cache to release memory
  delay(2000);
}
```

##### Apresentação do Efeito

- Faça o upload do código e abra o Monitor Serial; o XIAO ESP32-C5 irá escanear dispositivos Bluetooth no ambiente ao redor e imprimir as informações relevantes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_1.png" style={{width:800, height:'auto'}}/></div>

#### Servidor/Cliente BLE

No modo Servidor BLE, crie um Service e uma Characteristic, faça a transmissão de sua presença e aguarde que outros dispositivos se conectem para leitura e escrita de dados.<br/>
No modo Cliente BLE, o Client escaneia um Service UUID específico, inicia uma conexão depois de encontrar o Server e lê ou escreve os valores das characteristics do Server.

##### Programa de Servidor BLE

Em seguida, um exemplo de código será usado para demonstrar como configurar um Servidor BLE no XIAO ESP32-C5.

- Código de Referência

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

// Website for generating UUID: uuidgenerator.net
#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

class MyCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *pCharacteristic) {
      String value = pCharacteristic->getValue();
      if (value.length() > 0) {
        Serial.print("Data received from Client: ");
        for (int i = 0; i < value.length(); i++)
          Serial.print(value[i]);
        Serial.println();
      }
    }
};

void setup() {
  Serial.begin(115200);

  // 1. Initialize BLE
  BLEDevice::init("XIAO_ESP32C5_Server");

  // 2. Create Server
  BLEServer *pServer = BLEDevice::createServer();

  // 3. Create Service
  BLEService *pService = pServer->createService(SERVICE_UUID);

  // 4. Create Characteristic (set read/write permissions)
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setCallbacks(new MyCallbacks()); // Set write callback function
  pCharacteristic->setValue("Hello World from XIAO"); // Set initial value

  // 5. Start Service
  pService->start();

  // 6. Start Advertising
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(SERVICE_UUID);
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x06); 
  BLEDevice::startAdvertising();
}

void loop() {
  delay(2000);
}
```

##### Apresentação do Efeito

- Faça o upload do código, depois baixe o app nRF Connect, escaneie e descubra o dispositivo BLE (nomeado **XIAO_ESP32C5_Server** conforme mencionado acima) e selecione-o para estabelecer uma conexão.

Ao mesmo tempo, você pode buscar e baixar o app **nRF Connect** nas principais lojas de aplicativos móveis, que permite que seu telefone procure e se conecte a dispositivos Bluetooth.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

Após baixar o software, siga as etapas mostradas abaixo para procurar e conectar o XIAO ESP32-C5, e você verá o anúncio **Hello World from XIAO**.

<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_1.jpg" style={{width:200, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_2.jpg" style={{width:200, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_3.jpg" style={{width:200, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_4.jpg" style={{width:200, height:'auto'}}/></div></td>
 </tr>
</table>

##### Programa de Cliente BLE

Em seguida, um exemplo de código será usado para demonstrar como configurar um Cliente BLE no XIAO ESP32-C5. Para usar a funcionalidade de cliente, você precisa de pelo menos dois dispositivos XIAO com Bluetooth: um atuando como servidor para enviar dados e o outro como cliente para receber dados.

<details>
<summary>Código de Referência</summary>

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>
#include <BLEClient.h>

// UUID of the Server (must be exactly the same as the Server)
static BLEUUID serviceUUID("4fafc201-1fb5-459e-8fcc-c5c9c331914b");
static BLEUUID charUUID("beb5483e-36e1-4688-b7f5-ea07361b26a8");

// Scanning parameters
const int scanTime = 10; // Scanning duration (seconds)

// Global variables
static BLEAddress serverAddress;        // Address of the found Server
static bool deviceFound = false;        // Whether the target device is found
static BLERemoteCharacteristic* pRemoteCharacteristic = nullptr;
static BLEClient* pClient = nullptr;

// Scan callback: called when a device is discovered
class MyAdvertisedDeviceCallbacks : public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    // Check if it contains the service UUID we need
    if (advertisedDevice.haveServiceUUID() && advertisedDevice.isAdvertisingService(serviceUUID)) {
      Serial.print("Found target Server! Name: ");
      Serial.print(advertisedDevice.getName().c_str());
      Serial.print(", Address: ");
      Serial.println(advertisedDevice.getAddress().toString().c_str());

      serverAddress = advertisedDevice.getAddress();
      deviceFound = true;

      // Stop scanning (stop once found)
      BLEDevice::getScan()->stop();
    }
  }
};

// Client connection callback (optional, used to monitor connection status)
class MyClientCallbacks : public BLEClientCallbacks {
  void onConnect(BLEClient* pclient) {
    Serial.println("Connected to Server successfully!");
  }

  void onDisconnect(BLEClient* pclient) {
    Serial.println("Disconnected from Server.");
    deviceFound = false;  // Rescan next time
  }
};

void setup() {
  Serial.begin(115200);
  while (!Serial); // Wait for serial port to open (optional)

  Serial.println("Starting BLE Client...");

  BLEDevice::init("XIAO_Client");  // Client device name

  // Start the first scan
  scanAndConnect();
}

void loop() {
  // If connected successfully, read/write data every 5 seconds
  if (pClient && pClient->isConnected() && pRemoteCharacteristic) {
    // Read characteristic value
    String value = pRemoteCharacteristic->readValue();
    Serial.print("Read value from Server: ");
    Serial.println(value.c_str());

    // Write new data (with response)
    String sendMsg = "Hello from Client @ " + String(millis() / 1000) + "s";
    pRemoteCharacteristic->writeValue(sendMsg.c_str(), true);  // true = require response
    Serial.println("Sent: " + sendMsg);

    delay(5000);
  } 
  else {
    // Not connected or disconnected → rescan
    if (!deviceFound || (pClient && !pClient->isConnected())) {
      Serial.println("Server not connected, rescanning...");
      scanAndConnect();
    }
    delay(1000);
  }
}

// Encapsulate scan + connect logic
void scanAndConnect() {
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true);  // Active scan to get more information
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);

  Serial.println("Scanning for Server...");
  deviceFound = false;
  pBLEScan->start(scanTime, false);  // Scan for scanTime seconds

  if (!deviceFound) {
    Serial.println("Target Server not found, will retry later.");
    return;
  }

  // Create client and connect after finding the device
  pClient = BLEDevice::createClient();
  pClient->setClientCallbacks(new MyClientCallbacks());

  Serial.print("Connecting to ");
  Serial.println(serverAddress.toString().c_str());

  if (!pClient->connect(serverAddress)) {
    Serial.println("Connection failed!");
    return;
  }

  // Get remote service
  BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
  if (pRemoteService == nullptr) {
    Serial.println("Failed to find service UUID");
    pClient->disconnect();
    return;
  }
  Serial.println("Service found.");

  // Get remote characteristic
  pRemoteCharacteristic = pRemoteService->getCharacteristic(charUUID);
  if (pRemoteCharacteristic == nullptr) {
    Serial.println("Failed to find characteristic UUID");
    pClient->disconnect();
    return;
  }
  Serial.println("Characteristic found. Ready to communicate!");
}
```

</details>

##### Apresentação do Efeito

- Faça o upload do código e, em seguida, abra o Monitor Serial para observar — você receberá os dados Bluetooth enviados pelo servidor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_2.png" style={{width:800, height:'auto'}}/></div>

:::tip
Ao verificar a funcionalidade do cliente, você precisa gravar o programa do servidor antecipadamente em outro dispositivo XIAO; caso contrário, a verificação falhará.
:::

#### NimBLE-Arduino

A biblioteca nativa Arduino BLEDevice é baseada na pilha de protocolo Bluedroid; ela oferece funcionalidade completa, mas consome uma quantidade significativa de Flash e RAM. NimBLE é uma pilha de protocolo BLE completamente reescrita (derivada do Apache Mynewt), que apresenta as seguintes vantagens:

1. Pegada de memória extremamente baixa (uso de RAM reduzido em mais de 50%).

2. Velocidade de conexão mais rápida.

3. Compatibilidade com API: Foi projetada para ser quase totalmente compatível com a sintaxe da biblioteca BLE nativa do Arduino, exigindo apenas modificações de arquivos de cabeçalho e pequenos ajustes de tipo.

Você pode visitar o repositório GitHub do autor: [NimBLE-Arduino](https://github.com/h2zero/NimBLE-Arduino/tree/master) para mais detalhes.<br/>

Em seguida, implementaremos uma função de varredura Bluetooth baseada na biblioteca NimBLE-Arduino.

##### Programa

- Instale a biblioteca NimBLE-Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_libaray_1.png" style={{width:800, height:'auto'}}/></div><br/>

<details>

<summary>Código de Referência</summary>

```CPP
#include <Arduino.h>
#include <NimBLEDevice.h>
#include <NimBLEAdvertisedDevice.h>
#include "NimBLEEddystoneTLM.h"
#include "NimBLEBeacon.h"

#define ENDIAN_CHANGE_U16(x) ((((x) & 0xFF00) >> 8) + (((x) & 0xFF) << 8))

int         scanTime = 5 * 1000; // In milliseconds
NimBLEScan* pBLEScan;

class ScanCallbacks : public NimBLEScanCallbacks {
    void onResult(const NimBLEAdvertisedDevice* advertisedDevice) override {
        if (advertisedDevice->haveName()) {
            Serial.print("Device name: ");
            Serial.println(advertisedDevice->getName().c_str());
            Serial.println("");
        }

        if (advertisedDevice->haveServiceUUID()) {
            NimBLEUUID devUUID = advertisedDevice->getServiceUUID();
            Serial.print("Found ServiceUUID: ");
            Serial.println(devUUID.toString().c_str());
            Serial.println("");
        } else if (advertisedDevice->haveManufacturerData() == true) {
            std::string strManufacturerData = advertisedDevice->getManufacturerData();
            if (strManufacturerData.length() == 25 && strManufacturerData[0] == 0x4C && strManufacturerData[1] == 0x00) {
                Serial.println("Found an iBeacon!");
                NimBLEBeacon oBeacon = NimBLEBeacon();
                oBeacon.setData(reinterpret_cast<const uint8_t*>(strManufacturerData.data()), strManufacturerData.length());
                Serial.printf("iBeacon Frame\n");
                Serial.printf("ID: %04X Major: %d Minor: %d UUID: %s Power: %d\n",
                              oBeacon.getManufacturerId(),
                              ENDIAN_CHANGE_U16(oBeacon.getMajor()),
                              ENDIAN_CHANGE_U16(oBeacon.getMinor()),
                              oBeacon.getProximityUUID().toString().c_str(),
                              oBeacon.getSignalPower());
            } else {
                Serial.println("Found another manufacturers beacon!");
                Serial.printf("strManufacturerData: %d ", strManufacturerData.length());
                for (int i = 0; i < strManufacturerData.length(); i++) {
                    Serial.printf("[%X]", strManufacturerData[i]);
                }
                Serial.printf("\n");
            }
            return;
        }

        NimBLEUUID eddyUUID = (uint16_t)0xfeaa;

        if (advertisedDevice->getServiceUUID().equals(eddyUUID)) {
            std::string serviceData = advertisedDevice->getServiceData(eddyUUID);
            if (serviceData[0] == 0x20) {
                Serial.println("Found an EddystoneTLM beacon!");
                NimBLEEddystoneTLM foundEddyTLM = NimBLEEddystoneTLM();
                foundEddyTLM.setData(reinterpret_cast<const uint8_t*>(serviceData.data()), serviceData.length());

                Serial.printf("Reported battery voltage: %dmV\n", foundEddyTLM.getVolt());
                Serial.printf("Reported temperature from TLM class: %.2fC\n", (double)foundEddyTLM.getTemp());
                int   temp     = (int)serviceData[5] + (int)(serviceData[4] << 8);
                float calcTemp = temp / 256.0f;
                Serial.printf("Reported temperature from data: %.2fC\n", calcTemp);
                Serial.printf("Reported advertise count: %d\n", foundEddyTLM.getCount());
                Serial.printf("Reported time since last reboot: %ds\n", foundEddyTLM.getTime());
                Serial.println("\n");
                Serial.print(foundEddyTLM.toString().c_str());
                Serial.println("\n");
            }
        }
    }
} scanCallbacks;

void setup() {
    Serial.begin(115200);
    Serial.println("Scanning...");

    NimBLEDevice::init("Beacon-scanner");
    pBLEScan = BLEDevice::getScan();
    pBLEScan->setScanCallbacks(&scanCallbacks);
    pBLEScan->setActiveScan(true);
    pBLEScan->setInterval(100);
    pBLEScan->setWindow(100);
}

void loop() {
    NimBLEScanResults foundDevices = pBLEScan->getResults(scanTime, false);
    Serial.print("Devices found: ");
    Serial.println(foundDevices.getCount());
    Serial.println("Scan done!");
    pBLEScan->clearResults(); // delete results scan buffer to release memory
    delay(2000);
}
```

</details>

##### Apresentação do Efeito

- Envie o código e abra o Monitor Serial para observar. Ele também implementa a função de varredura Bluetooth, mas com uma velocidade de varredura mais rápida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_3.png" style={{width:800, height:'auto'}}/></div>

#### Exemplo: Conectando ao Home Assistant

Neste ponto, você já deve ter adquirido uma compreensão básica dos modos BLE do XIAO ESP32-C5.
Em seguida, podemos colocar a mão na massa em um projeto mais prático: fazer o XIAO ESP32-C5 simular um sensor de temperatura e umidade (ou um simples interruptor de botão) e transmitir periodicamente os dados do sensor ou o status via BLE. O Home Assistant irá descobrir automaticamente esse dispositivo BLE e exibir diretamente os valores atuais de temperatura e umidade (ou o status do botão) na interface, sem a necessidade de configurações de integração complexas adicionais.<br/>
Este exemplo simples demonstra totalmente o grande potencial do ESP32-C5 nos campos da Internet das Coisas (IoT) e de casas inteligentes: seu baixo consumo de energia, facilidade de desenvolvimento e suporte pronto para uso a dispositivos BLE passivos permitem que qualquer pessoa construa rapidamente sua própria rede de sensores inteligentes.<br/>

:::tip
Se você nunca usou o Home Assistant, pode visitar: [Connecting XIAO ESP32-C5 to Home Assistant](https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_homeassistant/)
:::

- Código de Referência

```cpp
#include <NimBLEDevice.h>

// Simulated temperature value
float temp = 20.0;

void setup() {
  Serial.begin(115200);

  // 1. Initialize NimBLE
  NimBLEDevice::init("XIAO_BTHome_Sensor");

  // 2. Create advertising object
  NimBLEAdvertising *pAdvertising = NimBLEDevice::getAdvertising();

  // ==========================================
  // Construct BTHome data packet (This is the most critical part)
  // ==========================================
  // Reference: https://bthome.io/format/

  std::string serviceData = "";

  // A. BTHome device information byte (Required)
  // bit 0: Encryption (0=No)
  // bit 1-2: Version (2=v2)
  // Result: 0100 0000 -> 0x40
  serviceData += (char)0x40; 

  // B. Temperature data (16-bit, 0.01 factor)
  // ID: 0x02 (Temperature)
  serviceData += (char)0x02; 

  // Value: Assume 25.50°C -> 2550 (0x09F6) -> Little-endian: F6 09
  int16_t tempInt = (int16_t)(temp * 100); 
  serviceData += (char)(tempInt & 0xFF);        // Low byte
  serviceData += (char)((tempInt >> 8) & 0xFF); // High byte

  // C. Battery level (8-bit, %) - Optional
  // ID: 0x01 (Battery)
  serviceData += (char)0x01;
  serviceData += (char)85; // 85%

  // ==========================================

  // 3. Put the constructed data into Service Data
  // BTHome UUID is 0xFCD2
  NimBLEAdvertisementData oAdvertisementData = NimBLEAdvertisementData();
  oAdvertisementData.setFlags(0x06); // General Discovery Mode
  oAdvertisementData.setServiceData(NimBLEUUID((uint16_t)0xFCD2), serviceData);

  // 4. Set advertising parameters
  pAdvertising->setAdvertisementData(oAdvertisementData);

  // 5. Start advertising (Advertise every 3 seconds, can be set longer to save power in practice)
  pAdvertising->start();

  Serial.println("BTHome advertising started...");
}

void loop() {
  // To update data dynamically: stop advertising -> update data -> restart advertising
  // For simple demonstration, only static advertising logic is used here
  // In actual projects, you will read sensors here, update oAdvertisementData, then enter sleep mode
  delay(10000);
}
```

- Envie o código e abra a plataforma Home Assistant. Você pode encontrar o dispositivo BTHome em **Settings** -> **Devices & Services** e adicioná-lo ao painel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_usage_4.png" style={{width:800, height:'auto'}}/></div>

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