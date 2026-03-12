---
description: Grove - Sensor Hall
title: Grove - Sensor Hall
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Hall_Sensor
sku: 101020046
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Hall_Sensor/
---
<!-- ---
name: Grove - Hall Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Hall-Sensor-p-965.html
oldwikiname: Grove_-_Hall_Sensor
prodimagename: Grove-Hall_Sensor_New.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/hall sensor.jpg
surveyurl: https://www.research.net/r/Grove-Hall_Sensor
sku: 101020046
tags: grove_digital, io_5v, plat_duino, plat_linkit
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New.jpg)

O sensor Hall é baseado no Efeito Hall, que é a produção de uma diferença de tensão em um condutor elétrico, transversal à corrente elétrica no condutor e a um campo magnético perpendicular à corrente. Há uma chave de tempo contínuo neste Grove. A saída desses dispositivos comuta para nível baixo (liga) quando um campo magnético (polaridade sul) perpendicular ao sensor Hall excede o limiar do ponto de operação BOP, e comuta para nível alto (desliga) quando o campo magnético desaparece. O twig pode ser usado para medir RPM.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/grove-hall-sensor-p-965.html)

## Rastreador de Versão

| Revisão | Descrições           | Lançamento    |
|----------|------------------------|------------|
| Grove - Hall Sensor v0.9b    | Lançamento público inicial | 3,out,2011 |

## Recursos

- Interface compatível com Grove
- Período de transição de 400ns para subida e descida.
- Sensor de efeito Hall de tempo contínuo
- Proteção contra inversão de bateria

:::tip
Para mais detalhes sobre módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Especificações

| Item                  | Min | Típico | Máx | Unidade |
|-----------------------|-----|---------|-----|------|
| Tensão de alimentação        | 3.8 | 5.0     | 24  | V    |
| Corrente de alimentação        | 4.1 | -       | 24  | mA   |
| Temperatura de operação | -40 | -       | 85  | ºC   |

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Ideias de Aplicação

- Medidor de RPM.
- Motor DC simples.

## Primeiros Passos

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

#### Demonstração

O Sensor Hall é usado utilizando as interrupções externas disponíveis no arduino/seeeduino. Neste exemplo estamos usando a interrupção 0, encontrada no pino digital 2. Para outras interrupções, consulte [attachInterrupt()](https://arduino.cc/en/Reference/AttachInterrupt).

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield| Grove - Hall Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/Grove-Hall_Sensor_New%20_small.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/grove-hall-sensor-p-965.html)|

- **Passo 2.** Conecte o Grove - Hall Sensor à porta D2 do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC via um cabo USB.

:::note
Se não tivermos o Grove Base Shield, também podemos conectar diretamente o Grove - Hall Sensor ao Seeeduino como abaixo.
:::

| Seeeduino       | Grove - Hall Sensor |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| Não conectado | Branco                   |
| D2            | Amarelo                  |

#### Software

- **Passo 1.**  Baixe o [Hall Sensor Code](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip)

- **Passo 2.**  Abra um dos dois códigos. Por exemplo Demo **MagnetControlLED**

- **Passo 3.**  Copie o código para a IDE do Arduino e faça o upload. Se você não sabe como fazer o upload do código, verifique [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
/****************************************************************************/ 
// Function: When a magnet whose south pole is facing up is approaching to 
//     the onboard sensor, the LED will be turned on.Otherwise, the 
//     LED will be turned off.
// Hardware: Grove - Hall Sensor, Grove - LED
// Arduino IDE: Arduino-1.0
// Author:  FrankieChu  
// Date:   Jan 20,2013
// Version: v1.0
// by www.seeedstudio.com
//
//  This library is free software; you can redistribute it and/or
//  modify it under the terms of the GNU Lesser General Public
//  License as published by the Free Software Foundation; either
//  version 2.1 of the License, or (at your option) any later version.
//
//  This library is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  Lesser General Public License for more details.
//
//  You should have received a copy of the GNU Lesser General Public
//  License along with this library; if not, write to the Free Software
//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
//
/*macro definitions of magnetic pin and LED pin*/
#define HALL_SENSOR 2
#define LED 4//the Grove - LED is connected to D4 of Arduino

void setup()
{
  pinsInit();
}

void loop() 
{
 if(isNearMagnet())//if the hall sensor is near the magnet?
 {
  turnOnLED();
 }
 else
 {
  turnOffLED();
 }
}
void pinsInit()
{
 pinMode(HALL_SENSOR, INPUT);
 pinMode(LED,OUTPUT);
}

/*If the hall sensor is near the magnet whose south pole is facing up, */
/*it will return ture, otherwise it will return false.    */
boolean isNearMagnet()
{
 int sensorValue = digitalRead(HALL_SENSOR);
 if(sensorValue == LOW)//if the sensor value is LOW?
 {
  return true;//yes,return ture
 }
 else
 {
  return false;//no,return false
 }
}
void turnOnLED()
{
 digitalWrite(LED,HIGH);
}
void turnOffLED()
{
 digitalWrite(LED,LOW);
}
```

- **Passo 4.**  Quando um ímã cujo polo sul está voltado para cima se aproximar do sensor integrado, o LED será ligado. Caso contrário, o LED será desligado.

### Brincar com Codecraft

#### Hardware

**Passo 1.** Conecte um Grove - Hall Sensor à porta D2 e conecte um Grove - Red LED à porta D4 de um Base Shield.

**Passo 2.** Conecte o Base Shield ao seu Seeeduino/Arduino.

**Passo 3.** Conecte o Seeeduino/Arduino ao seu PC via um cabo USB.

#### Software

**Passo 1.** Abra o [Codecraft](https://ide.chmakered.com/), adicione o suporte ao Arduino e arraste um procedimento principal para a área de trabalho.

:::note
Se esta é a primeira vez que você usa o Codecraft, veja também o [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/pt-br/Guide_for_Codecraft_using_Arduino/).
:::

**Passo 2.** Arraste os blocos como na imagem abaixo ou abra o arquivo cdc que pode ser baixado no final desta página.

![cc](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/img/cc_Hall_Sensor.png)

Carregue o programa no seu Arduino/Seeeduino.

:::tip
Quando o código terminar de ser carregado, o LED acenderá quando o Sensor Hall detectar mudanças no campo magnético.
:::

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Esquemático do Grove-Hall Sensor](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Twig_Hall_Sensor_v0.9b.zip)

- **[Demo]** [Código de Demonstração do Hall Sensor](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove-Hall_Sensor_Demo_Code.zip)

- **[Datasheet]** [A1101 datasheet](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/datasheet.pdf)

- **[Codecraft]** [Arquivo CDC](https://files.seeedstudio.com/wiki/Grove-Hall_Sensor/res/Grove_Hall_Sensor_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Hall_Sensor -->

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
