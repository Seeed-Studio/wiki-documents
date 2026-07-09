---
title: Wio Extension RTC (Relógio de Tempo Real)
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Extension-RTC/
slug: /Wio-Extension-RTC
sku: 103100082
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Wio-Extension-RTC/
---

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)

A Wio Extension - RTC é uma placa de extensão para Wio LTE, que pode fornecer a função de Relógio de Tempo Real via porta I2C. Esta placa é baseada no chip NXP PCF8523, que pode fornecer informações de ano, mês, dia, dia da semana, horas, minutos e segundos.

Esta placa é alimentada pela porta Micro-USB, se comunica com o Wio LTE via porta I2C e também fornecemos uma saída de alimentação USB que pode ser ligada/desligada por uma chave on-board, para que você possa usar a placa Wio Extension - RTC para alimentar o Wio LTE. Quando a alimentação é fornecida às placas Wio (como na figura a seguir), a corrente em standby de todo o sistema é inferior a 1 uA.

<p style={{}}><a href="https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características  

- Extensibilidade
- Capaz de alimentar placas Wio com tensão de 3,3 V.

## Visão Geral do Hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/pinout.jpg" /></a></p>
  </figure></div>

![](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/rtc_diagram.png)

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Primeiros Passos

### Brincar com Arduino

**Materiais necessários**

| Placas Wio LTE |   Wio-Extension-RTC  |  Grove - Buzzer |Grove - LED Vermelho |
|--------------|-------------|-----------------|---------|
|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-06bazaar837387_img_0005a.jpg)|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Grove%20Buzzer.jpg)|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Buzzer.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|

>Como a Wio Extension - RTC apenas controla o conjunto de alimentação USB a partir do I2C, você pode usar esta placa para gerenciar a alimentação praticamente de todas as placas MCU alimentadas por USB.

:::note
        **1** Conecte o cabo USB com cuidado, caso contrário você poderá danificar a porta. Use o cabo USB com 4 fios internos, o cabo de 2 fios não consegue transferir dados. Se você não tiver certeza sobre o cabo que possui, pode clicar [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar 

        **2** Cada módulo Grove vem com um cabo Grove quando você o compra. Caso você perca o cabo Grove, pode clicar [aqui](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.                   
:::

#### Hardware

- **Passo 1.** Conecte a Wio-Extension-RTC à porta **I2C** das Placas Wio LTE.

- **Passo 2.**  Conecte as Placas Wio LTE ao PC via um cabo USB.

- **Passo 3.** Conecte [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) ou [Grove - Red LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) ao D38 do Wio LTE.

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/connection.png" /></a></p></figure></div>

#### Software

:::caution
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar. O driver desta placa depende do arquivo de cabeçalho de `Seeed STM32F4 Board(JP mirror) by Seeed K.K.`, então, quer você tenha instalado sua placa wio com o tutorial de [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/), ou não, você precisa fazer o seguinte passo.
:::
**Passo 1** Instalar biblioteca
Abra sua IDE do Arduino, clique em File > Preferences e copie a URL abaixo em Additional Boards Manager URLs.  
`http://www.seeed.co.jp/package_SeeedJP_index.json`  
![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Preferences.png)  

Clique em Toos > Board > Board Manager e digite `Wio` na caixa de texto.

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Boards_Manager.png)

Clique em `Seeed STM32F4 Board(JP mirror) by Seeed K.K.` então um botão Install aparecerá, clique nele para finalizar esta etapa; esse processo leva de cerca de 5 minutos a meia hora, dependendo da velocidade da sua rede.
Clique em Tools > Manage Libraries e digite `Wio` na caixa de texto.

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Library_Manager.png)
Clique em `Wio LTE for Arduino by Seeed K.K.` então um botão Install aparecerá, clique nele para finalizar esta etapa.

Descompacte o [sketch de exemplo](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/wiortc-sample.zip) e abra `wiortc-sample.ino` com a IDE do Arduino.

**Passo 2** Fazer o download do código

1. Pressione e segure o botão BOOT na parte de trás do Wio LTE e conecte o USB ao PC.
2. Veremos STM BOOTLARDER no gerenciador de dispositivos.
3. Selecione Tools→Boards→Wio_Tracker_LTE.
![Alt text](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/Snipaste_2019-04-10_15-15-20.jpg)

4. Selecione Sketch→Upload para enviar o código para o Wio_LTE.
5. Pressione o botão RST para habilitar a porta COM.
**Dicas**

>Quando você faz o download para a maioria das placas Arduino, precisa escolher uma porta COM correta, mas para esta placa você deve manter a configuração da porta COM em branco.

>![Alt text](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/img/port.jpg)

6. Use o Serial monitor para imprimir a mensagem serial.

```cpp
#include <WioLTEforArduino.h>
#include "WioRTC.h"

////////////////////////////////////////////////////////////////////////////////
// Defines

#define BOOT_INTERVAL   (30)  // [sec.]

////////////////////////////////////////////////////////////////////////////////
// Global variables

WioLTE Wio;
WioRTC Rtc;

////////////////////////////////////////////////////////////////////////////////
// setup and loop

void setup()
{
  delay(200);

  SerialUSB.begin(115200);
  SerialUSB.println("");
  SerialUSB.println("--- START ---------------------------------------------------");

  ////////////////////////////////////////
  // Low-level initialize

  SerialUSB.println("### I/O Initialize.");
  Wio.Init();

  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);

  ////////////////////////////////////////
  // Device initialize

  SerialUSB.println("### Device initialize.");
  Wire.begin();
  Rtc.begin();

  ////////////////////////////////////////
  // Completed

  SerialUSB.println("### Completed.");
}

void loop()
{
  uint8_t val;
  Rtc.EepromRead(0, &val, sizeof(val));
  SerialUSB.print("EEPROM value is ");
  SerialUSB.println(val);

  val++;
  Rtc.EepromWrite(0, &val, sizeof(val));

  SerialUSB.println("Beep.");
  pinMode(WIO_D38, OUTPUT);
  digitalWrite(WIO_D38, HIGH);
  delay(200);
  digitalWrite(WIO_D38, LOW);

  SerialUSB.println("Shutdown.");
  Rtc.SetWakeupPeriod(BOOT_INTERVAL);
  Rtc.Shutdown();
  while (1) {}
}
```

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Wio-Extension-RTC](https://files.seeedstudio.com/wiki/Wio_Extension-RTC/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip)
- **[Sample]** [Código de Exemplo Wio-Extension-RTC](https://github.com/Seeed-Studio/Wio_Extension_RTC/blob/master/wiortc-sample.zip)

## Suporte Técnico & Discussão sobre o Produto

 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
