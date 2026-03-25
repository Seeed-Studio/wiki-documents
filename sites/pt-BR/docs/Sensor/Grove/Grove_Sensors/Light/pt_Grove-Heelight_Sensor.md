---
description: Grove - Sensor Heelight
title: Grove - Sensor Heelight
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Heelight_Sensor
sku: 101020312
last_update:
  date: 1/5/2023
  author: jianjing Huang
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Heelight_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/Heelight%20Sensor%20plus%20coin.jpg" /></div>

Grove – Heelight Sensor é um sensor de voz inteligente que pode reconhecer até 500 comandos de voz digitais. Ele foi originalmente usado no Heelight – uma lâmpada colorida inteligente que pode ser controlada por ondas sonoras digitais. Agora introduzimos este sensor nos pequenos e elegantes módulos Grove, permitindo que você implemente controle inteligente em seus projetos baseados em Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

- Reconhecimento de voz digital

- Suporta mais de 500 comandos de voz digitais

- Compatível com o sistema Grove

## Especificações

| Product Name         | Grove-Heelight Sensor |
|----------------------|-----------------------|
| Operating Voltage    | DC 3.3V~5V            |
| Operating Current    | 15mA                  |
| Identification Range | 0.1~10m               |
| Angle Range          | 360°                  |
| Size                 | 20*20mm               |
| Baud Rate            | 115200                |
| Serial Port Output   | TTL logic level       |

## Primeiros Passos

### Do que precisamos?

|Name |Function| Qty |Link|
|---|---|---|---|
|Base Shield V2| Fornece conectores Grove |1 |[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|
|Seeeduino V4.2| Controlador |1 |[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|
|Grove - Heelight Sensor |Sensor| 1| [Adquira agora](https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html)|

### Conexão de hardware

- Conecte o Base Shield V2 ao Seeeduino V4.2
- Conecte o Grove - Heelight Sensor à porta D6 do Base Shield V2.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/hardware%20connection.JPG" /></div>

### Enviar o código

Antes de enviar o código, certifique-se de que já selecionou a placa correta e a porta COM. Para o Seeeduino V4.2, podemos escolher Arduino/Genuino Uno.

Este é o exemplo básico que pode mostrar a capacidade do sensor, que é produzir diferentes valores hexadecimais no monitor serial quando ele recebe (ou ouve) diferentes sons digitais. Você também pode baixar este exemplo em Resources

```
/*
  Software serial multple serial test

 Receives from the hardware serial, sends to software serial.
 Receives from software serial, sends to hardware serial.

 The circuit:
 * RX is digital pin 10 (connect to TX of other device)
 * TX is digital pin 11 (connect to RX of other device)

 Note:
 Not all pins on the Mega and Mega 2560 support change interrupts,
 so only the following can be used for RX:
 10, 11, 12, 13, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69

 Not all pins on the Leonardo support change interrupts,
 so only the following can be used for RX:
 8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI).

 created back in the mists of time
 modified 25 May 2012
 by Tom Igoe
 based on Mikal Hart's example

 This example code is in the public domain.
*/

#include <SoftwareSerial.h>

SoftwareSerial mySerial(6, 7); // RX, TX

void setup()
{
  // Open serial communications and wait for port to open:
  Serial.begin(57600);
   mySerial.begin(115200);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for Leonardo only
  }


  Serial.println("Goodnight moon!");

  // set the data rate for the SoftwareSerial port

  //mySerial.println("Hello, world?");
}

void loop() // run over and over
{
  if (mySerial.available())
  {
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.print(" ");
    Serial.print(mySerial.read(),HEX);
    Serial.println();
  }
  if (Serial.available())
    mySerial.write(Serial.read());
}
```

### Resultados

Abra o monitor serial, configure a taxa de transmissão para 57600 e então reproduza o som. Nós preparamos 511 [sons digitais](https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/res/audio.zip) diferentes para você. Toda vez que um som é reproduzido, o sensor Heelight irá gerar um valor hexadecimal correspondente ao som, e os últimos 2 caracteres do valor hexadecimal são iguais ao valor do som.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/heelight%20sensor%20output.png" /></div>

:::note
Se este sensor não funcionar bem quando você reproduzir os sons específicos que fornecemos via PC ou outros alto-falantes, por favor ajuste o volume para um nível baixo. Recomendamos 10/100 em PCs com Windows.
:::

## Recursos

- [Website of Heelight](http://www.heelight.com/)
- [Mais de 500 áudios de voz digital](https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/res/audio.zip)
- [Código de Exemplo](https://github.com/SeeedDocument/Grove_Heelight_Sensor/tree/master/res/Grove_-_Heelight_Sensor_example)

## Suporte Técnico & Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, configuração via Bluetooth, compatibilidade com a rede global LoRaWAN®, bateria interna de 19 Ah e o forte suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade luminosa, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
