---
description: Uso de Bluetooth com o Seeed Studio XIAO ESP32C6.
title: Uso de Bluetooth
keywords:
  - esp32c6
  - xiao
  - ble
  - bluetooth
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32c6_bluetooth
last_update:
  date: 04/11/2024
  author: Citric
createdAt: '2022-11-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_bluetooth/
---

# Uso de Bluetooth com Seeed Studio XIAO ESP32C6

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

O Seeed Studio XIAO ESP32C6 é uma poderosa placa de desenvolvimento que suporta Bluetooth 5, BLE e rede Mesh, tornando‑o uma escolha ideal para uma ampla gama de aplicações de IoT que exigem conectividade sem fio. Com seu excelente desempenho de RF, o XIAO ESP32C6 pode fornecer comunicação sem fio confiável e em alta velocidade em uma variedade de distâncias, tornando‑o uma solução versátil tanto para aplicações sem fio de curto alcance quanto de longo alcance. Neste tutorial, vamos nos concentrar nos recursos básicos das capacidades de Bluetooth do XIAO ESP32C6, como escanear dispositivos Bluetooth próximos, estabelecer uma conexão Bluetooth e transmitir e receber dados por meio de uma conexão Bluetooth.

## Uso de Bluetooth Low Energy (BLE)

Bluetooth Low Energy, ou BLE para abreviar, é uma variante de Bluetooth que economiza energia. A principal aplicação do BLE é a transmissão a curta distância de pequenas quantidades de dados (baixa largura de banda). Ao contrário do Bluetooth, que está sempre ligado, o BLE permanece constantemente em modo de suspensão, exceto quando uma conexão é iniciada.

Devido às suas propriedades, o BLE é adequado para aplicações que precisam trocar pequenas quantidades de dados periodicamente rodando com uma bateria tipo moeda. Por exemplo, o BLE é de grande utilidade nas indústrias de saúde, fitness, rastreamento, beacons, segurança e automação residencial.

Isso faz com que ele consuma muito pouca energia. O BLE consome aproximadamente 100x menos energia do que o Bluetooth (dependendo do caso de uso).

Sobre a parte de BLE do XIAO ESP32C6, apresentaremos seu uso nas três seções a seguir.

- [Some fundamental concepts](#Some-fundamental-concepts) -- Primeiro vamos conhecer alguns conceitos que podem ser usados com frequência em BLE, a fim de nos ajudar a entender o processo de execução e o raciocínio dos programas BLE.
- [BLE Scanner](#BLE-Scanner) -- Esta seção explicará como procurar dispositivos Bluetooth próximos e imprimi‑los no monitor serial.
- [BLE server/client](#BLE-serverclient) -- Esta seção explicará como usar o XIAO ESP32C6 como Servidor e Cliente para enviar e receber mensagens de dados especificadas. Também será usado para receber ou enviar mensagens do telefone para o XIAO.
- [BLE Sensor Data Exchange](#BLE-Sensor-Data-Exchange) -- Esta é a última seção de todo o tutorial, onde passaremos por um exemplo de sensor para explicar como enviar os dados do sensor através do BLE.

### Some fundamental concepts

#### Servidor e Cliente

Com o Bluetooth Low Energy, existem dois tipos de dispositivos: o servidor e o cliente. O XIAO ESP32C6 pode atuar tanto como cliente quanto como servidor.

O servidor anuncia sua existência, para que possa ser encontrado por outros dispositivos, e contém os dados que o cliente pode ler. O cliente escaneia os dispositivos próximos e, quando encontra o servidor que está procurando, estabelece uma conexão e escuta os dados recebidos. Isso é chamado de comunicação ponto a ponto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/ble.png" style={{width:800, height:'auto'}}/></div>

#### Atributo

Atributo é na verdade um pedaço de dado. Cada dispositivo Bluetooth é usado para fornecer um serviço, e o serviço é uma coleção de dados; a coleção pode ser chamada de banco de dados, cada entrada no banco de dados é um Atributo, então aqui traduzo Atributo como entradas de dados. Você pode imaginar um dispositivo Bluetooth como uma tabela, cada linha dentro da tabela é um Atributo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/52.png" style={{width:600, height:'auto'}}/></div>

#### GATT

Quando dois dispositivos Bluetooth estabelecem uma conexão, eles precisam de um protocolo para determinar como se comunicar. GATT (Generic Attribute Profile) é esse protocolo, que define como os dados são transmitidos entre dispositivos Bluetooth.

No protocolo GATT, as funções e propriedades de um dispositivo são organizadas em estruturas chamadas serviços, características e descritores. Um serviço representa um conjunto de funções e recursos relacionados fornecidos por um dispositivo. Cada serviço pode incluir múltiplas características, que definem uma determinada propriedade ou comportamento do serviço, como dados de sensor ou comandos de controle. Cada característica tem um identificador exclusivo e um valor, que pode ser lido ou escrito para se comunicar. Descritores são usados para descrever metadados das características, como formato e permissões de acesso dos valores das características.

Usando o protocolo GATT, dispositivos Bluetooth podem se comunicar em diferentes cenários de aplicação, como transmitir dados de sensores ou controlar dispositivos remotos.

#### Característica BLE

ATT, nome completo Attribute Protocol. No fim, o ATT é composto por um grupo de comandos ATT, isto é, comandos de requisição e resposta; o ATT também é a camada mais superior do pacote nulo de Bluetooth, ou seja, o ATT é onde analisamos o pacote Bluetooth com mais frequência.

O comando ATT, formalmente conhecido como ATT PDU (Protocol Data Unit). Ele inclui 4 categorias: leitura, escrita, notificação e indicação. Esses comandos podem ser divididos em dois tipos: se exigem uma resposta, então serão seguidos por uma requisição; ao contrário, se precisarem apenas de um ACK mas não de uma resposta, então não serão seguidos por uma requisição.

Service e Characteristic são definidos na camada GATT. O lado Service fornece o Service, o Service é o dado, e o dado é o atributo, e o Service e a Characteristic são a apresentação lógica dos dados, ou seja, os dados que o usuário pode ver acabam sendo transformados em Service e Characteristic.

Vamos dar uma olhada em como o service e a characteristic se parecem a partir da perspectiva de um dispositivo móvel. nRF Connect é um aplicativo que nos mostra de forma bem visual como cada pacote deve ser.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/62.png" style={{width:400, height:'auto'}}/></div>

Como você pode ver, na especificação Bluetooth, cada aplicação Bluetooth específica é composta por vários Services, e cada Service é composto por múltiplas Characteristics. Uma Characteristic consiste em um UUID, Propriedades e um Valor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/50.png" style={{width:300, height:'auto'}}/></div>

Propriedades são usadas para descrever os tipos e permissões de operações em uma characteristic, como se ela suporta leitura, escrita, notificação e assim por diante. Isso é semelhante às quatro categorias incluídas em uma ATT PDU.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/51.png" style={{width:800, height:'auto'}}/></div>

#### UUID

Cada serviço, characteristic e descriptor têm um UUID (Universally Unique Identifier). Um UUID é um número exclusivo de 128 bits (16 bytes). Por exemplo:

```
ea094cbd-3695-4205-b32d-70c1dea93c35
```

Existem UUIDs abreviados para todos os tipos, serviços e perfis especificados no [SIG (Bluetooth Special Interest Group)](https://www.bluetooth.com/specifications/gatt/services). Mas se sua aplicação precisar de seu próprio UUID, você pode gerá‑lo usando este [site gerador de UUID](https://www.uuidgenerator.net/).

### BLE Scanner

Criar um scanner BLE com o XIAO ESP32C6 é simples. A seguir está um programa de exemplo para criar um scanner.

```cpp
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

int scanTime = 5; //In seconds
BLEScan* pBLEScan;

class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Advertised Device: %s \n", advertisedDevice.toString().c_str());
    }
};

void setup() {
  Serial.begin(115200);
  Serial.println("Scanning...");

  BLEDevice::init("");
  pBLEScan = BLEDevice::getScan(); //create new scan
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true); //active scan uses more power, but get results faster
  pBLEScan->setInterval(100);
  pBLEScan->setWindow(99);  // less or equal setInterval value
}

void loop() {
  // put your main code here, to run repeatedly:
  BLEScanResults foundDevices = *pBLEScan->start(scanTime, false);
  Serial.print("Devices found: ");
  Serial.println(foundDevices.getCount());
  Serial.println("Scan done!");
  pBLEScan->clearResults();   // delete results fromBLEScan buffer to release memory
  delay(10000);
}
```

Agora você pode selecionar a placa‑mãe XIAO ESP32C6 e enviar o programa. Se o programa rodar sem problemas, abra o monitor serial e configure a taxa de transmissão para 115200; você verá o seguinte resultado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/54.png" style={{width:700, height:'auto'}}/></div>

Este programa imprime o nome, endereço MAC, dados do fabricante e sinal do dispositivo Bluetooth escaneado.

#### Anotação do programa

Ele começa importando as bibliotecas necessárias para os recursos de BLE.

Em seguida, define uma classe chamada `MyAdvertisedDeviceCallbacks` que herda da classe `BLEAdvertisedDeviceCallbacks`. Ela possui uma função chamada `onResult` que é chamada quando um dispositivo Bluetooth anunciado é encontrado durante a varredura. A função imprime as informações do dispositivo na porta serial usando a função `Serial.printf`. Esta classe pode ser usada para lidar com as informações do dispositivo Bluetooth durante a varredura.

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      Serial.printf("Advertised Device: %s \n", advertisedDevice.toString().c_str());
    }
};
```

Na função `Setup`, configuramos uma varredura BLE com os parâmetros especificados, incluindo os valores de intervalo e janela de varredura. Ela também inicializa o dispositivo BLE e configura uma função de callback para lidar com os dispositivos anunciados encontrados durante a varredura.

```c
BLEDevice::init("");
pBLEScan = BLEDevice::getScan();
pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
pBLEScan->setActiveScan(true);
pBLEScan->setInterval(100);
pBLEScan->setWindow(99);
```

Por fim, a função `loop` inicia a varredura BLE com o tempo de varredura e o sinalizador de bloqueio especificados. Em seguida, imprime o número de dispositivos encontrados na porta serial e limpa o buffer de resultados para liberar memória.

```c
BLEScanResults foundDevices = *pBLEScan->start(scanTime, false);
Serial.print("Devices found: ");
Serial.println(foundDevices.getCount());
Serial.println("Scan done!");
pBLEScan->clearResults();
```

### Servidor/cliente BLE

Conforme mencionado anteriormente, o XIAO ESP32C6 pode atuar tanto como servidor quanto como cliente. Vamos dar uma olhada no programa como servidor e em como usá‑lo. Depois de enviar o seguinte programa para o XIAO, ele atuará como servidor e enviará uma mensagem "Hello World" para todos os dispositivos Bluetooth conectados ao XIAO.

```cpp
//Server Code
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEServer.h>

#define SERVICE_UUID        "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"

void setup() {
  Serial.begin(115200);
  Serial.println("Starting BLE work!");

  BLEDevice::init("XIAO_ESP32C6");
  BLEServer *pServer = BLEDevice::createServer();
  BLEService *pService = pServer->createService(SERVICE_UUID);
  BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                         CHARACTERISTIC_UUID,
                                         BLECharacteristic::PROPERTY_READ |
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  pCharacteristic->setValue("Hello World");
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
  delay(2000);
}
```

Enquanto isso, você pode pesquisar e baixar o app **nRF Connect** nas principais lojas de aplicativos móveis, o que permite que seu telefone pesquise e conecte dispositivos Bluetooth.

- Android: [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en)
- IOS: [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)

Após baixar o software, siga as etapas mostradas abaixo para pesquisar e conectar o XIAO ESP32C6, e você verá o "Hello World" sendo anunciado.

<table align="center">
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/55.jpg" style={{width:200, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/ble_app.png" style={{width:200, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/58.jpg" style={{width:200, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/59.jpg" style={{width:200, height:'auto'}}/></div></td>
 </tr>
</table>

Se você quiser usar outro XIAO ESP32C6 como cliente para receber mensagens do servidor, então poderá usar o seguinte procedimento para o XIAO cliente.

```cpp
// Client Code
#include "BLEDevice.h"
//#include "BLEScan.h"

// The remote service we wish to connect to.
static BLEUUID serviceUUID("4fafc201-1fb5-459e-8fcc-c5c9c331914b");
// The characteristic of the remote service we are interested in.
static BLEUUID    charUUID("beb5483e-36e1-4688-b7f5-ea07361b26a8");

static boolean doConnect = false;
static boolean connected = false;
static boolean doScan = false;
static BLERemoteCharacteristic* pRemoteCharacteristic;
static BLEAdvertisedDevice* myDevice;

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
    Serial.write(pData, length);
    Serial.println();
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
    pClient->setMTU(517); //set client to request maximum MTU from server (default is 23 otherwise)

    // Obtain a reference to the service we are after in the remote BLE server.
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
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
      String value = pRemoteCharacteristic->readValue();
      Serial.print("The characteristic value was: ");
      Serial.println(value);
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
    if (advertisedDevice.haveServiceUUID() && advertisedDevice.isAdvertisingService(serviceUUID)) {

      BLEDevice::getScan()->stop();
      myDevice = new BLEAdvertisedDevice(advertisedDevice);
      doConnect = true;
      doScan = true;

    } // Found our server
  } // onResult
}; // MyAdvertisedDeviceCallbacks

void setup() {
  Serial.begin(115200);
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

  // If we are connected to a peer BLE Server, update the characteristic each time we are reached
  // with the current time since boot.
  if (connected) {
    String newValue = "Time since boot: " + String(millis()/1000);
    Serial.println("Setting new characteristic value to \"" + newValue + "\"");

    // Set the characteristic's value to be the array of bytes that is actually a string.
    pRemoteCharacteristic->writeValue(newValue.c_str(), newValue.length());
  }else if(doScan){
    BLEDevice::getScan()->start(0);  // this is just example to start scan after disconnect, most likely there is better way to do it in arduino
  }

  delay(1000); // Delay a second between loops.
} // End of loop
```

O programa acima transformará o XIAO em um cliente e buscará dispositivos Bluetooth próximos. Quando o UUID do dispositivo Bluetooth corresponder ao UUID que você forneceu, ele se conectará ao dispositivo e obterá seu valor de característica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/60.png" style={{width:800, height:'auto'}}/></div>

#### Anotação do programa

Vamos dar uma olhada rápida em como funciona o código de exemplo do servidor BLE. Ele começa importando as bibliotecas necessárias para os recursos de BLE. Em seguida, você precisa definir um UUID para o Service e para a Characteristic.

```c
#define SERVICE_UUID "4fafc201-1fb5-459e-8fcc-c5c9c331914b"
#define CHARACTERISTIC_UUID "beb5483e-36e1-4688-b7f5-ea07361b26a8"
```

Você pode manter os UUIDs padrão ou pode ir para [uuidgenerator.net](https://www.uuidgenerator.net/) para criar UUIDs aleatórios para seus serviços e características.

Em seguida, você cria um dispositivo BLE chamado “XIAO_ESP32C6”. Você pode alterar esse nome para o que quiser. Na linha seguinte, você define o dispositivo BLE como um servidor. Depois disso, você cria um serviço para o servidor BLE com o UUID definido anteriormente.

```c
BLEServer *pServer = BLEDevice::createServer();
BLEService *pService = pServer->createService(SERVICE_UUID);
```

Depois, você define a characteristic para esse serviço. Como você pode ver, também usa o UUID definido anteriormente e precisa passar como argumentos as propriedades da characteristic. Neste caso, são: READ e WRITE.

```c
BLECharacteristic *pCharacteristic = pService->createCharacteristic(
                                     CHARACTERISTIC_UUID,
                                     BLECharacteristic::PROPERTY_READ |
                                     BLECharacteristic::PROPERTY_WRITE
                                     );
```

Depois de criar a characteristic, você pode definir seu valor com o método `setValue()`. Neste caso, estamos definindo o valor para o texto “Hello World”. Você pode alterar esse texto para o que quiser. Em projetos futuros, esse texto pode ser uma leitura de sensor ou o estado de uma lâmpada, por exemplo.

Por fim, você pode iniciar o serviço e o advertising, para que outros dispositivos BLE possam escanear e encontrar este dispositivo BLE.

```c
BLEAdvertising *pAdvertising = pServer->getAdvertising();
pAdvertising->start();
```

Este é apenas um exemplo simples de como criar um servidor BLE. Neste código nada é feito no `loop()`, mas você pode adicionar o que acontece quando um novo cliente se conecta (verifique o exemplo `BLE_notify` para alguma orientação).

### Troca de Dados de Sensor via BLE

Em seguida, vamos para o mundo real para completar um caso. Neste caso, teremos o XIAO ESP32C6 conectado a um sensor de intensidade de luz e, então, via Bluetooth, enviar o valor do sensor de luz para outro XIAO ESP32C6 e exibi-lo na tela da placa de expansão.

Para a conveniência da fiação, usaremos duas placas de expansão XIAO; o programa de exemplo é apenas para referência, você pode escolher o produto de acordo com as necessidades reais do projeto.

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32C6</th>
      <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
      <th>Grove - Digital Light Sensor - TSL2561</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" style={{width:180, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Além da preparação de hardware acima, você pode precisar preparar as seguintes bibliotecas, baixá-las e adicioná-las ao ambiente do Arduino IDE.

- **Biblioteca de displays OLED u8g2**:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

- **Biblioteca do Grove - Digital Light Sensor - TSL2561**:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Digital_Light_Sensor" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

Precisamos preparar dois XIAO, um como servidor e outro como cliente. Aqui está o programa de exemplo como servidor. O XIAO como servidor tem as seguintes tarefas principais.

- Primeiro, obter os valores em tempo real do sensor de luz;
- Segundo, criar o servidor Bluetooth;
- Terceiro, anunciar os valores de intensidade de luz por meio de Bluetooth;
- Quarto, mostrar a intensidade de luz em tempo real e o envio no display.

```c
//server
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLE2902.h>
#include <BLEServer.h>
#include <Wire.h>
#include <Digital_Light_TSL2561.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

// OLEDs without Reset of the Display
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

//BLE Server name (the other ESP32 name running the server sketch)
#define bleServerName "XIAOESP32C6_BLE"

BLECharacteristic *pCharacteristic;
bool deviceConnected = false;

int light_val = 0;

class MyServerCallbacks: public BLEServerCallbacks {
  void onConnect(BLEServer* pServer) {
    deviceConnected = true;
  };

  void onDisconnect(BLEServer* pServer) {
    deviceConnected = false;
  }
};

void setup() {
  Serial.begin(115200);

  //OLED display setup
  u8x8.begin();
  u8x8.setFlipMode(1);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.drawString(0, 3, "Starting...");

  Wire.begin();
  TSL2561.init();

  BLEDevice::init(bleServerName);
  BLEServer *pServer = BLEDevice::createServer();
  pServer->setCallbacks(new MyServerCallbacks());

  BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // Environmental Sensing
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // Analog Output
    BLECharacteristic::PROPERTY_NOTIFY
  );
  pCharacteristic->addDescriptor(new BLE2902());

  pService->start();
  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
  pAdvertising->addServiceUUID(pService->getUUID());
  pAdvertising->setScanResponse(true);
  pAdvertising->setMinPreferred(0x0);
  pAdvertising->setMinPreferred(0x1F);
  BLEDevice::startAdvertising();
  u8x8.clearDisplay();
}

void loop() {
  if (deviceConnected) {
    light_val = TSL2561.readVisibleLux();
    pCharacteristic->setValue(light_val);
    pCharacteristic->notify();
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 0);
    u8x8.print("Light Value:");
    u8x8.clearLine(2);
    u8x8.setCursor(0, 2);
    u8x8.print(light_val);
    u8x8.drawString(0, 4, "Sending...");
    delay(10); // bluetooth stack will go into congestion, if too many packets are sent
  }
}
```

Depois de fazer o upload do programa para um dos XIAO, se o programa for executado sem problemas, você pode pegar o seu celular e usar o aplicativo nRF Connect para procurar o dispositivo Bluetooth chamado **XIAOESP32C6_BLE**, conectá‑lo e clicar no botão mostrado abaixo; você receberá as informações dos dados do sensor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/63.jpg" style={{width:300, height:'auto'}}/></div>

Aqui você verá que a forma como operamos o software não será exatamente a mesma que no exemplo anterior, porque, em geral, quando enviamos uma mensagem do tipo de sensor, escolhemos usar a propriedade **notify** para garantir que a mensagem seja eficiente.

Em seguida, precisamos pegar o nosso outro XIAO, que atua como um cliente para coletar e exibir nossos dados.

```c
//client
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEClient.h>
#include <BLEServer.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

// OLEDs without Reset of the Display
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

BLEClient*  pClient;
bool doconnect = false;

//BLE Server name (the other ESP32 name running the server sketch)
#define bleServerName "XIAOESP32C6_BLE"

//Address of the peripheral device. Address will be found during scanning...
static BLEAddress *pServerAddress;

BLEUUID serviceUUID("181A"); // Environmental Sensing
BLEUUID charUUID("2A59");    // Analog Output

char light_val[1024];

//Callback function that gets called, when another device's advertisement has been received
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { //Check if the name of the advertiser matches
      advertisedDevice.getScan()->stop(); //Scan can be stopped, we found what we are looking for
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); //Address of advertiser is the one we need
      Serial.println("Device found. Connecting!");
    }
  }
};

//function that prints the latest sensor readings in the OLED display
void printReadings(){
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 0);
  u8x8.print("Light Value:");
  u8x8.drawString(0, 2, light_val);
}

void setup() {
  Serial.begin(115200);
  //OLED display setup
  u8x8.begin();
  u8x8.setFlipMode(1);

  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.drawString(0, 3, "Starting...");

  Serial.println("Starting BLE client...");

  BLEDevice::init("XIAOESP32C6_Client");

  // Retrieve a Scanner and set the callback we want to use to be informed when we
  // have detected a new device.  Specify that we want active scanning and start the
  // scan to run for 30 seconds.
  BLEScan* pBLEScan = BLEDevice::getScan();
  pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());
  pBLEScan->setActiveScan(true);
  pBLEScan->start(30);

  pClient = BLEDevice::createClient();
  // Connect to the remove BLE Server.
  pClient->connect(*pServerAddress);
  Serial.println(" - Connected to server");

  // Obtain a reference to the service we are after in the remote BLE server.
  BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
  if (pRemoteService == nullptr) {
    u8x8.clearDisplay();
    u8x8.drawString(0, 3, "False UUID");
    Serial.print("Failed to find our service UUID: ");
    Serial.println(serviceUUID.toString().c_str());
    return;
  }

  // Obtain a reference to the characteristics in the service of the remote BLE server.
  BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
  if (pCharacteristic == nullptr) {
    u8x8.clearDisplay();
    u8x8.drawString(0, 3, "False UUID");
    Serial.print("Failed to find our characteristic UUID");
    return;
  }
  Serial.println(" - Found light value characteristics");
  u8x8.clearDisplay();
  u8x8.drawString(0, 3, "Connected!");

  pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
    Serial.println("Notify received");
    Serial.print("Value: ");
    Serial.println(*pData);
    snprintf(light_val, sizeof(light_val), "%d", *pData);
  });

  doconnect = true;
  u8x8.clearDisplay();
  u8x8.drawString(0, 4, "Receiving...");
}

void loop() {
  if (doconnect) {
    BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
    BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
    pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
      Serial.println("Notify received");
      Serial.print("Value: ");
      Serial.println(*pData);
      snprintf(light_val, sizeof(light_val), "%d", *pData);
    });
  }
  printReadings();
  delay(1000);
  u8x8.clearLine(2);
}
```

Ao usar o exemplo acima, recomendamos fazer o upload do programa do Servidor e garantir que ele tenha sido executado com sucesso antes de usar o programa do Cliente. Se o programa rodar sem problemas, você verá os seguintes resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/65.gif" style={{width:700, height:'auto'}}/></div>

#### Anotação do programa

Para os programas acima, vamos selecionar as partes mais importantes para explicar. Vamos começar com o programa do servidor.

No início do programa, definimos o nome do servidor Bluetooth; esse nome pode ser o que você definir, mas você precisa se lembrar dele, pois precisará se basear nesse nome para procurar esse dispositivo Bluetooth.

```c
#define bleServerName "XIAOESP32C6_BLE"
```

Nas seções anteriores do tutorial, comentamos que, sob o servidor, haverá a Characteristic e, sob a Characteristic, haverá os valores e o restante do conteúdo. Portanto, precisamos seguir esse princípio ao criar anúncios.

```c
BLEService *pService = pServer->createService(BLEUUID((uint16_t)0x181A)); // Environmental Sensing
  pCharacteristic = pService->createCharacteristic(
    BLEUUID((uint16_t)0x2A59), // Analog Output
    BLECharacteristic::PROPERTY_NOTIFY
  );
  pCharacteristic->addDescriptor(new BLE2902());
```

No programa acima, você pode ver que `createService()` é usado para criar um servidor. O parâmetro é um UUID específico: **0x181A**. Nas regras do GATT, **0x181A** indica dados do tipo monitoramento ambiental, e o UUID da mesma Characteristic: **0x2A59** também tem um significado especial. No GATT, ele indica a saída analógica. Isso se encaixa no caso dos valores do nosso sensor de luz, então aqui eu o defino dessa forma. Você pode ler [aqui](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/GATT.pdf) o que significam alguns dos UUIDs específicos que o GATT preparou para nós.

Claro, você também pode definir os UUIDs sem seguir o padrão GATT; você só precisa garantir que esses dois valores sejam exclusivos e não afetem a capacidade do seu cliente de encontrar os valores reconhecendo esses UUIDs. Você pode ir a [uuidgenerator.net](https://www.uuidgenerator.net/) para criar UUIDs aleatórios para seus serviços e characteristics.

O segundo parâmetro da função `createCharacteristic()` é para definir as propriedades. Observe que aqui precisamos configurá‑lo como **PROPERTY_NOTIFY** para garantir que os dados sejam enviados continuamente.

```c
pCharacteristic->setValue(light_val);
pCharacteristic->notify();
```

Por fim, no `loop`, apenas anunciamos o valor do sensor de luz lido a cada 10 ms.

A próxima etapa é o programa do Cliente, que parecerá muito mais complicado.

No início do programa, ainda é um conteúdo bastante familiar. Você precisa garantir que esse conteúdo seja consistente com o que você configurou no lado do servidor.

```c
//BLE Server name (the other ESP32 name running the server sketch)
#define bleServerName "XIAOESP32C6_BLE"

BLEUUID serviceUUID("181A"); // Environmental Sensing
BLEUUID charUUID("2A59");    // Analog Output
```

Em seguida, escrevemos uma função de callback; a função principal dessa função é procurar um dispositivo Bluetooth próximo, depois compará‑lo com o nome do dispositivo Bluetooth que você forneceu, capturá‑lo e obter seu endereço MAC.

```c
class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
  void onResult(BLEAdvertisedDevice advertisedDevice) {
    if (advertisedDevice.getName() == bleServerName) { //Check if the name of the advertiser matches
      advertisedDevice.getScan()->stop(); //Scan can be stopped, we found what we are looking for
      pServerAddress = new BLEAddress(advertisedDevice.getAddress()); //Address of advertiser is the one we need
      Serial.println("Device found. Connecting!");
    }
  }
};
```

O procedimento a seguir é a chave para encontrar o valor de intensidade de luz no servidor. Primeiro, precisamos encontrar o nosso UUID de servidor, depois procurar o UUID da Characteristic sob o servidor e, por fim, encontrar o valor de luz. Esse método de análise é uma correspondência um‑para‑um com a estrutura de dados do Bluetooth.

```c
// Obtain a reference to the service we are after in the remote BLE server.
BLERemoteService* pRemoteService = pClient->getService(serviceUUID);
if (pRemoteService == nullptr) {
  Serial.print("Failed to find our service UUID: ");
  Serial.println(serviceUUID.toString().c_str());
  return;
}

// Obtain a reference to the characteristics in the service of the remote BLE server.
BLERemoteCharacteristic* pCharacteristic = pRemoteService->getCharacteristic(charUUID);
if (pCharacteristic == nullptr) {
  Serial.print("Failed to find our characteristic UUID");
  return;
}
Serial.println(" - Found light value characteristics");

pCharacteristic->registerForNotify([](BLERemoteCharacteristic* pBLERemoteCharacteristic, uint8_t* pData, size_t length, bool isNotify) {
    Serial.println("Notify received");
    Serial.print("Value: ");
    Serial.println(*pData);
  });
```

Finalmente, o valor de luminosidade é colocado no ponteiro pData.

:::tip
O exemplo acima mostra o exemplo mais simples de um único valor para um único sensor. Se você quiser anunciar vários sensores ou vários valores de sensores via Bluetooth, recomendamos que leia os exemplos de tutorial aqui.

- [ESP32 BLE Server and Client (Bluetooth Low Energy)](https://randomnerdtutorials.com/esp32-ble-server-client/)

:::

## NimBLE-Arduino

### Introdução

Esta biblioteca reduz significativamente o uso de recursos e melhora o desempenho para aplicações ESP32 BLE em comparação com a biblioteca baseada em bluedroid. O objetivo é manter, tanto quanto razoável, a compatibilidade com a biblioteca original, mas usando a pilha NimBLE. Além disso, esta biblioteca será desenvolvida e mantida de forma mais ativa para fornecer capacidades e estabilidade aprimoradas em relação à original.

Para mais informações, você pode ir para o Github deste autor neste [link](https://github.com/h2zero/NimBLE-Arduino/tree/master).

### Etapa 1. Adicionar biblioteca

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/NimBLE.jpg" alt="pir" width={500} height="auto" /></div>

### Etapa 2. Exemplo

**Código**

```cpp
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

**Resultado**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/NimBLE2.jpg" alt="pir" width={700} height="auto" /></div>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
