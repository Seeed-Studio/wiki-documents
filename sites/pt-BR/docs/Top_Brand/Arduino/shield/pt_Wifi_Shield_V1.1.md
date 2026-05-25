---
description: Wifi Shield V1.1
title: Wifi Shield V1.1
keywords:
  - Shield Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wifi_Shield_V1.1
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Wifi_Shield_V1.1/
---

<!-- ---
name:  Wifi Shield V1.1‏‎
category: Descontinuado
bzurl:
oldwikiname: Wifi_Shield_V1.1‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Wifi_Shield_V1-1
sku:
tags:
--- -->

Este Wifi Shield utiliza um módulo WiFi RN171 para fornecer ao seu Arduino/Seeeduino a função de Ethernet serial. São necessários apenas dois pinos para conectar seu dispositivo a redes sem fio 802.11b/g com este shield. Ele possui uma antena independente que pode cobrir uma área mais ampla e transmitir sinais mais fortes. Com suporte para os protocolos de comunicação TCP, UDP e FTP mais comuns, este Wifi Shield pode atender às necessidades da maioria dos projetos de rede sem fio, como redes de casas inteligentes, controles de robôs ou estações meteorológicas pessoais, etc. Preparamos um conjunto de comandos fácil e conveniente para este shield, para que você possa usar um código limpo e conciso para executar as funções.

## Especificação ##

- Tensão: 3,3~5,5 V

- Corrente: 25~400mA

- Potência de transmissão: 0-10 dBm

- Frequência: 2402~2480 MHz

- Canal: 0~13

- Taxa de rede: 1-11 Mbps para 802.11b/6-54Mbps para 802.11g

- Dimensões: 60X56X19 mm

- Peso líquido: 24±1 g

- Autenticação WiFi segura: WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)

- Aplicações de rede integradas: DHCP cliente, DNS cliente, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/WIFI_Shield_Interface_Function.jpg)

- **RN-171：**Módulo de LAN sem fio WIFLY GSX 802.11 b/g.

- **Área de Configuração da Porta Serial por Software:** Escolha os pinos digitais que você gostaria de usar como RX e TX do RN171.

- **Botão de Reset:** Reinicia o Wifi Shield.

- **Ilustração dos indicadores de status:**
- Dois LEDs (D1, D5) piscarão alternadamente quando não houver conexão.

- Após conectar ao roteador, o indicador de status de associação ao AP (D1) irá piscar.

- Após conectar ao roteador e ao servidor TCP, o indicador de status do AP (D1) permanecerá sempre ligado.

## Primeiros passos ##

### Demo: Wifly_Test ###

Baixe a [Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) no GitHub e descompacte-a na pasta libraries do Arduino.

```cpp

#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "YourAP"
#define KEY       "password"
#define AUTH      WIFLY_AUTH_WPA2_PSK     // or WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN

// Pins' connection
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX
SoftwareSerial uart(2, 3);
WiFly wifly(&uart);
//WiFly wifly(&Serial1);     // for leonardo, use hardware serial - Serial1

void setup() {
  uart.begin(9600);

  Serial.begin(9600);
  Serial.println("--------- WIFLY TEST --------");

  // wait for initilization of wifly
  delay(3000);

  uart.begin(9600);     // WiFly UART Baud Rate: 9600

  wifly.reset();

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }

  // get WiFly params
  wifly.sendCommand("get everthing\r");
  char c;
  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {
    Serial.print((char)c);
  }

  if (wifly.commandMode()) {
    Serial.println("Enter command mode. Send \"exit\"(with \\r) to exit command mode");
  }
}

void loop() {
  while (wifly.available()) {
    Serial.write(wifly.read());
  }

  while (Serial.available()) {
    wifly.write(Serial.read());
  }
}

```

1.Conecte D2 (RX) e D3 (TX) da porta serial por software com TX e RX do WiFi Shield.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/WIFI_Shield_UART.jpg)

2.Altere o código para atualizar as informações do seu ponto de acesso

```

#define SSID      "YourAP"
#define KEY       "password"
#define AUTH      WIFLY_AUTH_WPA2_PSK     // or WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN

```

3.Faça o upload do sketch para o Arduino, abra o Serial Monitor, defina a taxa de baud para 9600 e configure a tecla Enter para Carriage return. O WiFi Shield irá exibir algumas mensagens e entrar no modo de comando. No modo de comando, você pode inserir alguns comandos para interagir:

  **get wlan** - obter informações da wlan

  **join** - entrar em uma rede

 **ping** seeedstudio.com - enviar ping para a Seeed!

  Para mais comandos, consulte o [Manual do Usuário do Módulo WiFi](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-UM.pdf)

  ![](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/Wi-Fi_Info.png)

4.Para uso mais avançado, experimente outros exemplos da biblioteca do WiFi Shield.

### Demo para Outros ###

## Solução de Problemas ##

Se o Wifi Shield não responder a nenhum comando, tente fazer o reset de fábrica seguindo [este guia](https://seeeddoc.github.io/Wifly_171_troubleshooting/)

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WIFI_Shield_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Eagle]** [Arquivos Eagle do WiFi Shield](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WIFI_Shield_Eagle_Files.zip)
- **[PDF]**[Placa WiFi Shield V1.1](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/wifi%20Shield%20V1.1.pdf)
- **[PDF]**[Esquema WiFi Shield V1.1](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/wifi%20Shield%20V1.1%20SCH.pdf)
- **[Datasheet]**[Datasheet do RN-171](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-171.pdf)
- **[Library]**[Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield)
- **[Manual]**[Manual do Usuário do Módulo WiFi](https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-UM.pdf)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
