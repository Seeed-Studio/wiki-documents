---
description: Wifi Shield (Fi250) V1.1
title: Wifi Shield (Fi250) V1.1
keywords:
  - Shield Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wifi_Shield_Fi250_V1.1
sku: 103030027
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Wifi_Shield_Fi250_V1.1/
---

<!-- ---
name: Wifi Shield (Fi250) V1.1
category: Shield
bzurl: https://www.seeedstudio.com/Wifi-Shield-(Fi250)-V1.1-p-2449.html
oldwikiname:  Wifi Shield (Fi250) V1.1
prodimagename:  Fi250_board1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_Fi250_V1_1
sku:    103030027
--- -->

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_board1.jpg)

Wifi Shield (Fi250) V1.1 é uma solução econômica de internet com Arduino. O módulo Wi-Fi suporta o modo IEEE 802.11b/g/n, com velocidade máxima de até 65 Mbit/s. Wifi Shield (Fi250) V1.1 combina antena na própria placa; é fácil construir seu projeto em uma caixa pequena. O módulo reserva um conector UFL, você pode usar uma antena extra para melhorar o alcance do sinal. Há uma tecla na placa, basta pressioná-la uma vez para mudar o wifi shield para o modo AP. O módulo possui um software de interface para computador, você pode controlar e atualizar o módulo via conversor USB-UART.
O wifi shield contém um soquete para cartão Micro SD, ele funciona como um gravador quando o wifi shield está trabalhando como servidor TCP ou UDP.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wifi-Shield-(Fi250)-V1.1-p-2449.html)

## Especificações

---
<table cellpadding="1" cellspacing="1" width="555">
  <tbody>
    <tr>
      <td>Módulo</td>
      <td>WIZnet FI250</td>
    </tr>
    <tr>
      <td>Tensão de Operação</td>
      <td>5V ou 3,3V (seleção automática)</td>
    </tr>
    <tr>
      <td>Corrente</td>
      <td>300mA (máxima)</td>
    </tr>
    <tr>
      <td>Banda única</td>
      <td>2,4GHz IEEE 802.11b/g/n</td>
    </tr>
    <tr>
      <td>Antena</td>
      <td>Antena PCB na placa (com conector UFL reservado)</td>
    </tr>
    <tr>
      <td>Memória</td>
      <td>1MB Flash Memory, 128KB SRAM, 1MB Serial Flash</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>UART(padrão)/SPI(atualização de firmware)</td>
    </tr>
    <tr>
      <td>Dimensões</td>
      <td>69,0 x 53,5 x 23,5 mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Uso

---
No demo usamos um Arduino Leonardo, recomendamos que você use uma porta serial de hardware, o software não é rápido o suficiente para se comunicar com o módulo Wifi.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_board.jpg)

### Cliente TCP

Instale a biblioteca Wifi Shield (Fi250), faça o download do código de demonstração Wizfi250_Client.

```cpp
/*
//This demo use Arduino Leonardo or Seeeduino Lite. The jumper connect D0-WIFI_TX, D1_WIFI_RX; Let the boot pin not connect
*/
#include <Arduino.h>
#include "WizFi250.h"

#define SSID      "STEST" //Set your SSID
#define KEY       "87654321" //Set your phrase
#define AUTH       "WPA2" // Set the encrypt type


#define  HOST_IP       "192.168.168.185" //Set the TCP Server IP
#define  REMOTE_PORT    9090 //Set the port
#define LOCAL_PORT      1234  //Set the port

#define spi_CS  8

WizFi250 wizfi250(&Serial1);
boolean returnValue=false;
void setup() {

    Serial.begin(115200);
    Serial1.begin(115200);
    while (!Serial);
    pinMode(spi_CS,OUTPUT);
    Serial.println("--------- WIZFI250 TEST --------");
    // wait for initilization of Wizfi250
    delay(1000);
    Serial.println("Join " SSID );
    wizfi250.reset();
    delay(1000);
    wizfi250.sendCommand("AT+WLEAVE\r");
    delay(1000);
    if (!wizfi250.join(SSID, KEY, AUTH)) {
        Serial.println("Failed join " SSID);
        Serial.println("Please Restart");
    } else {

        Serial.println("Successfully join " SSID);
        wizfi250.sendCommand("AT+WSTAT\r");
        delay(5);
        char c;
        while(wizfi250.receive((uint8_t *)&c, 1, 100) > 0) {
            Serial.print((char)c);
        }
        delay(2000);
        returnValue=wizfi250.connect(HOST_IP,REMOTE_PORT,LOCAL_PORT);
        if(returnValue)
        Serial.println("Now you can send data to Server or receive data from Server!");
    }
}
void loop() {
    if(wizfi250.available()) {
        Serial.print((char)wizfi250.read());
    }
    if(Serial.available()) {
        wizfi250.print((char)Serial.read());
    }
}
```

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_client.bmp)

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_client_arduino.png)

### Conexão Http

Instale a biblioteca Wifi Shield (Fi250), faça o download do código de demonstração Wizfi250_http.

```cpp
/*
//This demo use Arduino Leonardo or Seeeduino Lite. The jumper connect D0-WIFI_TX, D1_WIFI_RX; Let the boot pin not connect
*/
#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WizFi250.h"

#define SSID      "STEST"   //Set your SSID
#define KEY       "87654321" //Set your phrase
#define AUTH       "WPA2" //Set the encrypt type

#define TSN_HOST_IP        "74.125.128.103" //google.com server
//#define TSN_HOST_IP        "115.239.210.26" //baidu.com server
//#define TSN_HOST_IP      "192.168.1.254"      // broadcast
#define TSN_REMOTE_PORT    80
#define LOCAL_PORT     9000

#define spi_CS  8

//SoftwareSerial sprintSerial(4,5);   // The software serial port is not stable.
WizFi250 wizfi250(&Serial1);
void setup() {

    Serial.begin(115200);
    Serial1.begin(115200);
    while (!Serial);
    pinMode(spi_CS,OUTPUT);
    digitalWrite(spi_CS,HIGH);
    Serial.println("--------- WIZFI250 TEST --------");
    // wait for initilization of Wizfi250
    delay(1000);
    Serial.println("Join " SSID );
    delay(10);
    if (!wizfi250.join(SSID, KEY, AUTH)) {
        Serial.println("Failed join " SSID);
    } else {
        Serial.println("Successfully join  "  SSID);

        wizfi250.clear();

        wizfi250.connect(TSN_HOST_IP,TSN_REMOTE_PORT,LOCAL_PORT);
        delay(10);
        wizfi250.send("GET / HTTP/1.1\r\n\r\n");
    }
    char c;
    for(int i=0;i<320;i++){
        if (wizfi250.receive((uint8_t *)&c, 1, 100) > 0) {
            Serial.print((char)c);
        }
    }
}
void loop() {
    while (wizfi250.available()) {
        Serial.write(wizfi250.read());
    }
    while (Serial.available()) {
        wizfi250.write(Serial.read());
    }
}
```

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI_250_HTTP.jpg)

### Resetar o módulo

- Se você precisar resetar o módulo para os padrões de fábrica, pressione o botão de função três vezes em alta velocidade. Os LEDs MODE e WIF piscam, aguarde o módulo reiniciar.

- Se o módulo for resetado para o padrão, a taxa de baud muda para 115200. Por favor, observe isso.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_reset.png)

### Um toque para definir o modo AP

- É fácil entrar no modo AP. Pressione o botão Function, aguarde o LED WIFI mudar para vermelho. Você pode escanear o sinal wifi, WizFi250_AP_*******

- Pressione o botão de reset do wifi shield Fi250 para sair do modo AP.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI2350_AP.png)

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/FI250APshow.png)

### Atualizar firmware

O passo para atualizar o F/W é mostrado abaixo: <big>Conecte seu wifi shield(Fi250) diretamente via UART, você pode usar um UartSBee ou outras ferramentas UART</big>

Antes de atualizar seu F/W, você deve configurar o módulo para o modo Program (fechar o jumper BOOT)  <big>[wizfi250firmware](http://wizwiki.net/wiki/doku.php?id=products:wizfi250:wizfi250firmware:start)</big>

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/Fi250_update_firmware副本.png)

1ª ação

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware1.png)

2ª ação

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware2.png)

3ª ação

![](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/img/WizFi250_firmware3.png)

- Quando você atualizar com sucesso, remova o jumper e reinicie o módulo.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Eagle_File_Wifi_Shield-Fi250-V1.1_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Wifi_Shield_(Fi250)_V1.1_sch_pcb.zip](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Eagle_File_Wifi_Shield-Fi250-V1.1_sch_pcb.zip)

- [Wizfi250_programmer_s_guide.pdf](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_programmer_s_guide.pdf)

- [Wizfi250_quick_start_guide.pdf](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_quick_start_guide.pdf)

- [Wizfi250_datasheet.pdf](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250_datasheet.pdf)

- [Biblioteca Wizfi250](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wizfi250.zip)

- [PDF_Wifi_Shield_(Fi250)_V1.1](https://files.seeedstudio.com/wiki/Wifi_Shield_Fi250_V1.1/res/Wifi_Shield-Fi250-V1.1.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
