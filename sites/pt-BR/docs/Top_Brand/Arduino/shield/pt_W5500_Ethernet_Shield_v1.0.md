---
description: W5500_Ethernet_Shield_v1.0
title: W5500 Ethernet Shield v1.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /W5500_Ethernet_Shield_v1.0
sku: 103030021
last_update:
  date: 01/30/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/W5500_Ethernet_Shield_v1.0/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/W5500.jpg" alt="pir" width={600} height="auto" /></p>

O W5500 Ethernet Shield v1.0 pode fornecer conectividade com a Internet para seus projetos. O W5500 permite que os usuários tenham conectividade com a Internet em suas aplicações utilizando um único chip, no qual estão incorporados a pilha TCP/IP, MAC Ethernet 10 / 100 e PHY. O shield também possui dois conectores Grove e um soquete para cartão microSD para suportar projetos que exigem o armazenamento de grandes quantidades de dados provenientes de sensores Grove. A porta RJ45 (onde o cabo Ethernet é conectado) é baixa o suficiente para permitir que você empilhe mais shields sobre este, se necessário.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

--------

- Suporta protocolos TCP/IP cabeados: TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
- Suporta 8 sockets independentes simultaneamente
- Suporta modo de economia de energia (Power down)
- Suporta Wake on LAN via UDP
- Suporta interface Serial Peripheral de alta velocidade (SPI MODO 0, 3)
- Memória interna de 32 Kbytes para buffers TX/RX
- PHY Ethernet 10BaseT/100BaseTX incorporado
- Suporta Auto Negotiation (full e half duplex, 10 e 100* baseado)
- Não suporta fragmentação de IP
- Operação em 3,3 V com tolerância a sinal de E/S de 5 V
- Saídas de LED (full/half duplex, link, velocidade, ativo)
- Soquete para cartão micro-SD
- Conectores Grove para I2C e UART

## Visão Geral de Hardware

-----------------
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/W5500_Interface.jpg" alt="pir" width={600} height="auto" /></p>

**Configuração de Hardware**

1. RJ45: Porta Ethernet;
2. CI W5500: um controlador Ethernet TCP/IP cabeado;
3. Botão de Reset: reseta o Ethernet shield;
4. Soquete para Cartão SD: suporta cartão Micro SD em FAT16 ou FAT32; armazenamento máximo é de 2 GB.
5. Interface I2C
6. Interface UART

**Uso de pinos no Arduino**

1. D4: seleção de chip do cartão SD
2. D10: seleção de chip do W5200
3. D11: SPI MOSI
4. D12: SPI MISO
5. D13: SPI SCK

:::note
Tanto o W5500 quanto o cartão SD se comunicam com o Arduino por meio do barramento SPI. O pino 10 e o pino 4 são pinos de seleção de chip para o W5500 e o slot SD. Eles não podem ser usados como E/S gerais.
:::

Uso
-----

Mostraremos um exemplo. Este exemplo pode enviar dados para uma página web e armazenar os dados do seu sensor no cartão SD.

### Hardware

**Lista de Peças:**
<table align="center">
  <tbody>
  <tr>
    <td><h3>Nome</h3></td>
    <td><h3>Função</h3></td>
    <td><h3>Qtde</h3></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html" target="_blank"><span>W5500 Ethernet Shield</span></a></h4></td>
    <td><h4>Fornecer conectividade Ethernet</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html?queryID=dcb7226252c34d7139135b4fd97cafc5&objectID=627&indexName=bazaar_retailer_products" target="_blank"><span>Seeeduino V4.2</span></a></h4></td>
    <td><h4>Controlador</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html" target="_blank"><span>Grove-Temp&Humi Sensor</span></a></h4></td>
    <td><h4>Sensor</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>Base Shield V2</span></a></h4></td>
    <td><h4>Base Shield</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Cartão Micro SD</h4></td>
    <td><h4>Armazenar dados</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

**Procedimento:**

1. Monte o W5500 Ethernet Shield v1.0 no seu Arduino, monte o Base Shield V2 sobre o Ethernet Shield e conecte o sensor Grove-Temp&Humi à porta Grove D5 do Base Shield; insira o cartão SD.
2. Conecte o Ethernet Shield à rede com um cabo Ethernet padrão;
3. Conecte o Arduino ao PC via cabo USB;

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/temp%26humi%20hardware.jpg" alt="pir" width={600} height="auto" /></p>

### Software

- Siga os procedimentos de [como instalar uma biblioteca do Arduino](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) para instalar a biblioteca.
- Clique no botão abaixo para baixar as bibliotecas do W5500 Ethernet Shield.

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/WIZ_Ethernet_Library-IDE1.6.x-master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/download%20W5500%20library.png" /></a></p>

- Instale a biblioteca no seu Arduino IDE quando o download for concluído.
- Copie o código abaixo para o sketch e, em seguida, faça o upload:

```cpp
//This sketch uses W5500 Ethernet Shield,Seeeduino V4.2,Grove-Temp&Humi,
//Base Shield V2 Sensor and Micro SD Card to design a temperature and humidity collection station.
//attach the temperature and humidity sensor to base shield D5 grove port.
//It publishes the temperature and humidity data to webpage
//and refresh every 5 seconds, store the data into SD card datalog.txt file.

#include <SD.h>
#include <SPI.h>
#include <Ethernet.h>
#include <dht11.h>
dht11 DHT;
#define DHT11_PIN 5
const int chipSelect = 4;

// Please update IP address according to your local network
#if defined(WIZ550io_WITH_MACADDRESS) // Use assigned MAC address of WIZ550io
;
#else
byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
#endif  
IPAddress ip(192,168,0,177);

// Initialize the Ethernet server library
// with the IP address and port you want to use
// (port 80 is default for HTTP):
EthernetServer server(80);

void setup() {
 // Open serial communications and wait for port to open:
  Serial.begin(9600);
   while (!Serial) {
    ; // wait for serial port to connect. Needed for Leonardo only
  }

  // start the Ethernet connection and the server:
#if defined(WIZ550io_WITH_MACADDRESS)
  Ethernet.begin(ip);
#else
  Ethernet.begin(mac, ip);
#endif  
  server.begin();
  Serial.print("server is at ");
  Serial.println(Ethernet.localIP());

  //initializing the SD card
  Serial.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    Serial.println("Card failed, or not present");
    // don't do anything more:
    return;
  }
  Serial.println("card initialized.");
}


void loop() {
  // listen for incoming clients
  EthernetClient client = server.available();
  if (client) {
    Serial.println("new client");
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);
        // if you've gotten to the end of the line (received a newline
        // character) and the line is blank, the http request has ended,
        // so you can send a reply
        if (c == '\n' && currentLineIsBlank) {
          // send a standard http response header
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");  // the connection will be closed after completion of the response
   client.println("Refresh: 5");  // refresh the page automatically every 5 sec
          client.println();
          client.println("<!DOCTYPE HTML>");
          client.println("<html>");

          // output the value of input pin on web
          int chk;
          chk = DHT.read(DHT11_PIN);    // READ DATA
          client.print("Humidity: ");
          client.print(DHT.humidity);
          client.println("<br />");
          client.print("Temperature: ");
          client.print(DHT.temperature);   

          //write value of input pin into SD card
          // make a string for assembling the data to log:
          String dataString = "";
          // read the humidity and temperature and append to the string:
          dataString = String(DHT.humidity) + String(DHT.temperature);
          // open the file. note that only one file can be open at a time,
          // so you have to close this one before opening another.
          File dataFile = SD.open("datalog.txt", FILE_WRITE);
          // if the file is available, write to it:
          if (dataFile) {
          dataFile.println(dataString);
          dataFile.close();
          // print to the serial port too:
          Serial.println(dataString);
          }
          // if the file isn't open, pop up an error:
          else {
          Serial.println("error opening datalog.txt");
          }
          break;
        }
        if (c == '\n') {
          // you're starting a new line
          currentLineIsBlank = true;
        }
        else if (c != '\r') {
          // you've gotten a character on the current line
          currentLineIsBlank = false;
        }
      }
    }
    // give the web browser time to receive the data
    delay(1);
    // close the connection:
    client.stop();
    Serial.println("client disconnected");
  }
}

```

### Resultados

Agora, mostraremos o resultado.

1. Coloque seu cartão SD no computador; você verá algumas informações de temperatura e umidade.
2. Além disso, podemos ver as informações na web.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/temp%26humi%20on%20web.png" alt="pir" width={600} height="auto" /></p>

Não é muito fácil? Você já pode começar o seu projeto.

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Shield Ethernet W5500 em formato Eagle](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.zip)
- [Esquemático do Shield Ethernet W5500 em formato PDF](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.pdf)
- [PCB do Shield Ethernet W5500 em formato PDF](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500%20Ethernet%20Shield%20v1.0%20PCB.pdf)
- [Biblioteca do Shield Ethernet W5500](https://github.com/embeddist/WIZ_Ethernet_Library-IDE1.6.x)
- [Datasheet do Shield Ethernet W5500.pdf](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_datasheet_v1.0.2.pdf)
<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0 -->

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
