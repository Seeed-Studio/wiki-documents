---
description: Grove - RS485
title: Grove - RS485
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-RS485
sku: 103020193
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-RS485/
---
<!-- ---
name: Grove - RS485
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 103020193
--- -->

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/preview.png)

O Grove RS-485 permite que o seu Arduino se conecte facilmente a um dispositivo RS-485: você só precisa conectar e usar. Este módulo é altamente estável e suporta transmissão sem erros de 500k bps.  

RS485 é uma solução econômica em comunicação serial, podendo ser usado para taxa de dados de 10Mbit/s ou distância de até 1200 m em velocidades mais baixas.  

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-RS485-p-2924.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versão

| Versão do Produto  | Alterações                                                                                           | Data de Lançamento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RS485 | Inicial                                                                                               | Nov 2018      |

## Recursos

- Tensão de alimentação: 3,3V/5V
- Interface: UART
- Transmissão sem erros de 500k bps

## Especificação

|Parâmetro|Valor|
|---|---|
|Tamanho|C: 40mm L: 20mm A: 12mm|
|Peso|4,9g|
|Tamanho da Embalagem|C: 135mm L: 85mm A: 13mm|
|Peso Bruto|11g|

## Visão Geral do Hardware

### Pinagem

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg" /></a></p>
  <figcaption><b>Figura 1</b>. <i>Pinagem</i></figcaption>
</figure>
</div>

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

O Grove - NFC suporta I2C e UART, a [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC) oferece suporte a Arduino Uno/Seeeduino v4.2, Arduino Mega/Seeeduino Mega, Arduino Zero/Seeeduino Lorawan e Arduino Leonardo/Seeeduino Lite.

### Brincar com Arduino

#### Hardware

**Materiais necessários**

- [Seeeduino V4.2(ATMega328P)](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) x1
- [Seeeduino Lotus V1.1](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html) x1
- [Grove - RS485](https://www.seeedstudio.com/Grove-RS485-p-2924.html) x1
- [Grove Base Shield V2.0](https://www.seeedstudio.com/Base-Shield-V2.html) x1

**Materiais conectados**

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/connect.png)

- **Passo 1.** Conecte tanto o Seeeduino Lotus quanto o Seeeduino V4.2 ao PC.

- **Passo 2.** Conecte o Grove - Base Shield ao Seeeduino Lite.

- **Passo 3.** Usando a porta 6 e a porta 7 como portas RX e TX por software, conecte as duas placas com dois Grove Rs485.

#### Software

- **Passo 1.** Abra duas janelas da Arduino IDE e copie separadamente os códigos abaixo. Um dos dispositivos será usado como dispositivo mestre e o outro como dispositivo escravo.

```cpp
/*      Slave     */
#include <SoftwareSerial.h>
SoftwareSerial Slave(6, 7);  
char val;

void setup() {
  Serial.begin(38400);   
  Serial.println("Slave is ready!");
  Slave.begin(38400);
}

void loop() {
  while (Serial.available()) {
    val = Serial.read();
    Slave.write(val);
  }

  while(Slave.available()) {
    val = Slave.read();
    Serial.write(val);
  }
}
```

```cpp
/*      Master      */
#include <SoftwareSerial.h>
SoftwareSerial Master(6, 7);
char val;

void setup() {
  Serial.begin(38400);   
  Serial.println("Master is ready!");
  Master.begin(38400);
}

void loop() {
  while (Serial.available()) {
    val = Serial.read();
    Master.write(val);
  }

  while(Master.available()) {
    val = Master.read();
    Serial.write(val);
  }
}
```

- **Passo 2.** Escolha portas diferentes para dispositivos diferentes enquanto estiver usando o Grove RS485.

- **Passo 3.** Envie a mensagem e verifique os resultados.

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/image.png)

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Arquivo do esquemático do Grove - RS485](https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip)
- **[PDF]** [Max13478E Datasheet](https://files.seeedstudio.com/wiki/Grove-RS485/res/Max13478.pdf)

## Suporte Técnico & Discussão de Produto


Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
