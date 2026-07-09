---
description: RS232_Shield
title: RS232 Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /RS232_Shield
sku: 113030016
last_update:
  date: 01/30/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/RS232_Shield/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_Photo.jpg" alt="pir" width={600} height="auto" /></p>

O RS232 Shield é uma porta de comunicação padrão para equipamentos industriais. Este módulo é baseado no MAX232, que é um driver/receptor duplo que inclui um gerador de tensão capacitiva para fornecer níveis de tensão TIA/EIA-232-F a partir de uma única fonte de 5 V. O shield integra conectores DB9 (fêmea) que fornecem conexão a vários dispositivos com interface RS232. Além disso, os headers RS232 facilitarão suas conexões e comissionamento. Ele fornece áreas de soldagem para fazer pleno uso do espaço extra nele, o que é altamente conveniente para prototipagem.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS232-Shield-p-1910.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificações
-------------

-   Atende ou excede TIA/EIA-232-F e ITU
-   Opera até 120 kbit/s
-   Baixa corrente de alimentação
-   Indicador LED
-   Conectores DB9 (fêmea)
-   Áreas de soldagem


## Função da Interface
------------------

**Uso**

Primeiro, podemos testá-lo pelo computador.

### Instalação de Hardware

1. Seeeduino v3.0, cabo Mini USB, RS232 Shield, cabo RS232 para USB.
2. Faça as conexões como abaixo. Os jumpers podem ser usados para selecionar a porta serial por software a partir dos pinos digitais. Você pode configurá-los para D7 (232_TX) e D6 (232_RX) e modificar o código para "*SoftwareSerial mySerial(7, 6); // 232_TX, 232_RX*"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_usage.jpg" alt="pir" width={600} height="auto" /></p>

### Parte de Software

-   1) Abra a Arduino IDE e cole o código abaixo.

```cpp

#include <SoftwareSerial.h>

SoftwareSerial mySerial(7, 6); //232_TX,232_RX

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial) {
        ; // wait for serial port to connect. Needed for Leonardo only
    }


    Serial.println("Goodnight moon!");

    // set the data rate for the SoftwareSerial port
    mySerial.begin(9600);
    mySerial.println("Hello, world?");
}

void loop() // run over and over
{
    if (mySerial.available())
    Serial.write(mySerial.read());
    if (Serial.available())
    mySerial.write(Serial.read());
}
```

-   2) Envie o código. Observe que você deve selecionar o tipo correto de placa e a porta COM.
-   3) Abra o Serial Monitor.

Você pode ver:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RS232_Shield/img/RS232_Shield_usage1.jpg" alt="pir" width={600} height="auto" /></p>


<div>
  ## Visualizador de Esquemático Online
  <div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.0_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
  </div>
</div>



Recursos
--------

-   [Arquivo eagle do RS232 Shield](https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.0_Eagle.zip)
-   [RS232_Shield_v1.0.pdf](https://files.seeedstudio.com/wiki/RS232_Shield/res/RS232_Shield_v1.pdf)
-   [Datasheet MAX232D.pdf](https://files.seeedstudio.com/wiki/RS232_Shield/res/MAX232D.pdf)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/RS232_Shield -->

## Suporte Técnico & Discussão do Produto
Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>