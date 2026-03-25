---
description: Grove_Shield_for_Arduino_Nano
title: Grove Shield para Arduino Nano
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Shield_for_Arduino_Nano
sku: 103100124
last_update:
  date: 02/02/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Shield_for_Arduino_Nano/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-front.png" alt="pir" width={600} height="auto" /></p>
Grove Shield para Arduino Nano oferece uma forma simples de se conectar ao Arduino Nano e também ao Seeeduino Nano. Este shield ajuda você a se livrar da protoboard e dos jumpers, puxando os pinos da placa‑mãe e expandindo para 8 conectores Grove. Este shield puxa os pinos da placa‑mãe e expande para 8 conectores Grove, incluindo 3 conectores Grove digitais, 3 conectores Grove analógicos, 1 conector Grove I2C e 1 conector Grove UART.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificações

<table align="center">
  <tbody>
  <tr>
    <td><h3>Parâmetro</h3></td>
    <td><h3>Valor/Faixa</h3></td>
  </tr>
  <tr>
    <td><h4>Temperatura de Operação</h4></td>
    <td><h4>-25℃ a +85℃</h4></td>
  </tr>
  <tr>
    <td><h4>Portas Analógicas</h4></td>
    <td><h4>3</h4></td>
  </tr>  
  <tr>
    <td><h4>Portas Digitais</h4></td>
    <td><h4>3</h4></td>
  </tr>
  <tr>
    <td><h4>Portas UART</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Portas I2C</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Tamanho</h4></td>
    <td><h4>45mm x40mm</h4></td>
  </tr>
  </tbody></table>

Grove Shield V1.0 a V1.1, suporta a placa de desenvolvimento Arduino Nano 33 series.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/change.png" alt="pir" width={600} height="auto" /></p>

**Nota de Alteração da V1.1**: Adicionado seletor de VCC 3.3V/5V

Até o momento, o Grove Shield foi atualizado para a versão v1.3.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/UUXvr7pmnK.png" alt="pir" width={350} height="auto" /></p>

**Nota de Alteração da V1.3**: A versão V1.3 do Grove Shield corta os fios que conectam os pinos RST e RSE em ambos os lados.

## Placas Compatíveis

Lista de Suporte da V1.0:

- [Seeeduino nano](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)
- Arduino nano

Lista de Suporte da V1.1:

- Arduino Nano
- Seeeduino Nano
- Arduino Nano Every
- Arduino Nano 33 IoT*
- Arduino Nano 33 BLE*
- Arduino Nano 33 BLE Sense*

Lista de Suporte da V1.3:

- Arduino Nano
- Seeeduino Nano
- Arduino Nano Every
- Arduino Nano 33 IoT*
- Arduino Nano 33 BLE*
- Arduino Nano 33 BLE Sense*
- Arduino ESP32 Nano

:::caution
Para funcionar com as placas da série Arduino 33, mude a alimentação VCC para 3.3V. Se a alimentação VCC for ajustada para 5V, a placa de desenvolvimento poderá ser danificada!
:::

## Visão Geral de Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-back-rr.jpg" alt="pir" width={600} height="auto" /></p>

- **1-Portas Analógicas**: inclui 3 portas analógicas, A0, A2, A6.
- **2-Portas Digitais**: inclui 3 portas digitais, D2, D4, D6.
- **3-Porta UART**: 1 porta UART.
- **4-Portas I2C**: 1 porta I2C.

## Primeiros Passos

### Hardware

- Passo 1. Prepare os itens abaixo:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino Nano</h3></td>
    <td><h3>Grove Shield para Arduino Nano</h3></td>
    <td><h3>Grove - Buzzer</h3></td>
    <td><h3>Grove - Button</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-front.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/Grove-Shoeld-for-Arduino-Nano-wiki.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Base_Shield_V2/img/button_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank"><span>Compre AGORA</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html" target="_blank"><span>Compre AGORA</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank"><span>Compre AGORA</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/category/Grove-Button-p-766.html" target="_blank"><span>Compre AGORA</span></a></h4></td>
  </tr>  
  </tbody></table>

- Passo 2. Conecte o Grove - Buzzer à porta D4 do Grove Shield
- Passo 3. Conecte o Grove - Button à porta D2 do Grove Shield
- Passo 4. Conecte o Grove Shield para Arduino Nano ao Seeeduino nano
- Passo 5. Conecte o Seeeduino ao PC através de um cabo USB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-shield-for-Arduino-Nano/img/hardwareconnect.jpg" alt="pir" width={600} height="auto" /></p>

### Software

- Passo 1. Copie o código abaixo para a Arduino IDE e faça o upload para o Seeeduino.

```cpp
const int button = 2;       // connect a button
const int buzzer = 4;       // connect a buzzer
void setup()
{
    pinMode(button, INPUT); //set button as an INPUT device
    pinMode(buzzer, OUTPUT);   //set LED as an OUTPUT device
}
void loop()
{
    int btn = digitalRead(button); //read the status of the button
    digitalWrite(buzzer, btn);
    delay(10);
}
```

- Passo 2. Pressione o botão e ouviremos o buzzer.

## Perguntas Frequentes

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Grove shield para Arduino Nano PCB&SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.zip)
- **[PDF]** [Grove shield para Arduino Nano PCB&SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano v1.0PCB&SCH.pdf)
- **[SCH]** [Grove shield para Arduino Nano SCH](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano.sch)
- **[BRD]** [Grove shield para Arduino Nano BRD](https://files.seeedstudio.com/products/103100124/res/Grove Shield for Arduino Nano.brd)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
