---
description: Grove - Node
title: Grove - Node
keywords:
  - Grove_Sensors_Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Node
last_update:
  date: 1/20/2023
  author: jianjing Huang
createdAt: '2023-01-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Node/
---


 Grove - Node é um módulo eletrônico simples e flexível para conectar objetos físicos. Ele é baseado na ideia de IFTTT (IF-This-Then-That). Possui dois conectores Grove para acessar uma variedade de módulos Grove. Com o firmware IFTTT pré-programado, é fácil criar objetos físicos com sensores analógicos e atuadores 0/1.


Ele integra Bluetooth Low Energy (BLE), o que torna extremamente fácil interagir com celulares e tablets. Para ampliar sua usabilidade, um bootloader DFU está embutido para reprogramá-lo Over-The-Air via BLE. Ele suporta a plataforma ARM mbed para escrever novos firmwares com centenas de bibliotecas.

## Recursos

* Padrão IFTTT para uso

* Dois conectores Grove para sensores e atuadores

  * Plug-and-Play com sensores analógicos e atuadores de nível alto/baixo

    * 4 GPIOs flexíveis, todos podem ser usados para PWM, ADC, I2C e UART

* Nordic nRF51822 SoC RF multiprotocolo Bluetooth® 4.0 Low Energy/2,4GHz

  * Processador ARM Cortex-M0

    * 256kB de flash, 16kB de RAM

* Circuito de carregamento de bateria na placa

* Firmware OTA

* Compatível com mbed

  * IDE online

    * SDK de C/C++ fácil de usar

    * Bibliotecas práticas

## Especificações

* Tensão de operação: 3,3Vcc

* Capacidade da bateria: 80mAH

* Corrente máxima de carga: 100mA

* Tensão de alimentação da interface Grove: 3,3V

* Corrente de alimentação da interface Grove:  100mA máx.

* Tensão de entrada da interface Grove: 0~3,3V

## Pinagem

## Primeiros Passos

* Ligar o Grove Node

Conecte o Grove Node a uma bateria ou a um cabo USB e, em seguida, pressione seu botão; ele irá iniciar.

<dl><dd>

* Clique duplo – executa o bootloader; o LED vermelho ficará aceso.

* Caso contrário – executa a aplicação; o LED verde irá piscar.

</dd></dl>

* Desligar o Grove Node

<dl><dd>

* Em modo bootloader – espere um pouco para entrar na aplicação.

* Em modo de aplicação – mantenha o botão pressionado até que todos os LEDs se apaguem

</dd></dl>

### Começar com o Firmware Pré-programado

![](https://files.seeedstudio.com/wiki/Grove-Node/img/Milcandy_IFTTT.jpg)

Primeiro, precisamos de um módulo Grove de **Input** para sentir o mundo físico. O firmware pré-programado suporta apenas um sensor de entrada analógica ou um sensor de entrada digital 0/1.
Os seguintes módulos Grove da Seeedstudio podem ser usados como um **Input**:

<table>
  <tbody><tr>
      <th>Nome do módulo</th>
      <th>Parâmetro a ser medido</th>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={300}> Grove - 80cm Infrared Proximity Sensor</td>
      <td width={400}> Distância</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Button</td>
      <td colSpan={3} rowSpan={1}>On/Off</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Electricity Sensor</td>
      <td colSpan={3} rowSpan={1}> Eletricidade</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Gas Sensor(MQ2&amp;MQ5)</td>
      <td colSpan={3} rowSpan={1}> Qualidade do gás</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Light Sensor</td>
      <td colSpan={3} rowSpan={1}> Luz</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Magnetic Switch</td>
      <td colSpan={3} rowSpan={1}> Magnético</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Moisture Sensor</td>
      <td colSpan={3} rowSpan={1}> Umidade</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - PIR Motion Sensor</td>
      <td colSpan={3} rowSpan={1}> Movimento PIR</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Rotary Angle Sensor</td>
      <td colSpan={3} rowSpan={1}> Ângulo rotativo</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Tilt Switch</td>
      <td colSpan={3} rowSpan={1}>  Posição do objeto</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Sound Sensor</td>
      <td colSpan={3} rowSpan={1}> Som</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Temperature Sensor</td>
      <td colSpan={3} rowSpan={1}> Temperatura</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Touch Sensor</td>
      <td colSpan={3} rowSpan={1}> Toque humano</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Water Sensor</td>
      <td colSpan={3} rowSpan={1}> Água</td>
      </tr>
    </tbody>
    </table>

Outros sensores analógicos que não são compatíveis com Grove precisam de um pequeno ajuste. Basta conectar sua saída de sinal ao pino 4 do conector Grove e depois o VCC e o GND. _Observe que apenas sensores que fornecem um valor analógico ou digital 1/0 podem ser usados com o firmware pré-programado_

![](https://files.seeedstudio.com/wiki/Grove-Node/img/Mil_Grove_con.png)

Em segundo lugar, precisamos de um módulo Grove de **output** como atuador. Podem ser usados os seguintes módulos Grove:

<table>
  <tbody><tr>
      <th>Nome do módulo</th>
      <th>Ação quando acionado</th>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={300}> Grove - Buzzer</td>
      <td width={400}> Buzzer ativado</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - LED</td>
      <td colSpan={3} rowSpan={1}>LED On</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Vibrator</td>
      <td colSpan={3} rowSpan={1}> Vibrar</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Relay</td>
      <td colSpan={3} rowSpan={1}> Ligar/Desligar outros circuitos</td>
      </tr>
    </tbody>
    </table>


Por exemplo, se quisermos criar uma luz que liga automaticamente se o ambiente estiver escuro e desliga caso contrário, então selecionamos um [Grove-Light_Sensor](/pt-br/Grove-Light_Sensor "Grove - Light Sensor") e um Grove-Red_LED. 


Em terceiro lugar, ensine ao Grove Node uma lógica.

Conecte o sensor de luz como entrada e o LED como saída e, em seguida, ligue o Grove Node.

* Em um ambiente normal, faça um clique simples no botão do Grove Node

* Cubra o sensor de luz com a mão para simular um ambiente escuro e, em seguida, faça um clique duplo; o Grove - LED irá acender.

* Descubra o sensor de luz; o Grove - LED irá apagar.

## Over-The-Air

O Grove Node possui um bootloader OTA pré-programado. Para entrar no bootloader:

1. desligue o Grove Node

2. faça um clique duplo no botão do Grove Node

3. o LED vermelho ficará aceso e um dispositivo BLE chamado SD7DFU poderá ser escaneado

4. use o [nRF Master Control Panel](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp) para atualizar o app BLE

![](https://files.seeedstudio.com/wiki/Grove-Node/img/Ota-ui.png)

Mais informações podem ser encontradas em [mbed.org](https://developer.mbed.org/teams/Bluetooth-Low-Energy/wiki/Firmware-Over-the-Air-FOTA-Updates).

## Desenvolver Nova Aplicação

Veja [ble on mbed.org](http://developer.mbed.org/teams/Bluetooth-Low-Energy/)

## Visualizador Online do Esquema

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Node/res/Grove-Node_v1.0_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Arquivo PDF do esquemático do Grove - Node v1.0](https://files.seeedstudio.com/wiki/Grove-Node/res/Grove-Node_v1.0.pdf)

* [Arquivo de projeto eagle do Grove - Node v1.0](https://files.seeedstudio.com/wiki/Grove-Node/res/Grove-Node_v1.0_eagle.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
