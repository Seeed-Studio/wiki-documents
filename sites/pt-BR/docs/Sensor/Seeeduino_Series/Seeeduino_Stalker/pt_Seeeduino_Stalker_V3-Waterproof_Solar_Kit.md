---
description: Seeeduino Stalker V3 - Kit Solar à Prova d'Água
title: Seeeduino Stalker V3 - Kit Solar à Prova d'Água
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_Stalker_V3-Waterproof_Solar_Kit
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-21'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_V3-Waterproof_Solar_Kit.JPG)

O Stalker Kit é um nó de **Wireless Sensor Network** e **data-logger** baseado em <a href="/pt-br/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker_v3 </font></span></a>. O Seeeduino Stalker v3 é um nó de Wireless Sensor Network compatível com Arduino, rico em recursos. Sua estrutura modular e periféricos onboard como RTC e interface para SDCard o tornam conveniente para registrar periodicamente valores de sensores com carimbo de data/hora preciso. O Seeeduino Stalker é um candidato para todos os seus projetos de rastreamento, monitoramento e controle.

O Stalker Kit inclui todos os componentes necessários para trabalhar com o Seeeduino Stalker v3.0. O Stalker Kit pode ser usado ao ar livre, pois vem com uma caixa plástica à prova d’água. Assim, você pode até colocá-lo na água se tiver alguma ideia especial. O kit vem com um painel solar e uma bateria LiPo. Eles podem ser usados em áreas remotas como deserto ou floresta, funcionando apenas com a energia solar coletada e armazenada na bateria LiPo.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeeduino-Stalker-V3-Waterproof-Solar-Kit-p-2441.html)

## Conteúdo do Stalker Kit

---
<table>
<tr>
<th>Component</th>
<th>Description</th>
<th>Quantity</th>
</tr>
<tr>
<td><a href="/pt-br/Seeeduino-Stalker_v3"><span><font size={"3"}>Seeeduino-Stalker_v3</font></span></a></td>
<td>Nó WSN compatível com Arduino</td>
<td>1</td>
</tr>
<tr>
<td>Bateria de polímero de íons de lítio - Capacidade 1050mAh</td>
<td>Carregada pelo Painel Solar usando o Stalker v3</td>
<td>1</td>
</tr>
<tr>
<td>Cartão SanDisk microSD™ 4GB</td>
<td>Registra os valores dos sensores e os dados de carimbo de data/hora.</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.seeedstudio.com/mini-usb-cable-110cm-p-252.html?cPath=178_179"><span><font size={"3"}>Cabo Mini USB 100cm</font></span></a></td>
<td>Usado como cabo de programação com o UartSBee</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.seeedstudio.com/uartsbee-v31-p-688.html?cPath=109"><span><font size={"3"}>UartSBee V4</font></span></a></td>
<td>Fornece porta USB-Serial para programar o Stalker V3 usando o Arduino IDE</td>
<td>1</td>
</tr>
<tr>
<td>Cabo de 6 pinos</td>
<td>Conecta o UartSBee ao Seeduino</td>
<td>1</td>
</tr>
<tr>
<td><a href="https://www.seeedstudio.com/Seeeduino-Stalker-v3-enclosure-p-2419.html"><span><font size={"3"}>Gabinete do Seeeduino Stalker v3</font></span></a></td>
<td>Caixa plástica à prova d’água</td>
<td>1</td>
</tr>
<tr>
<td>Painel Solar 0,5w 53x53mm</td>
<td>Fonte de Alimentação</td>
<td>1</td>
</tr>
<tr>
<td>Pilha tipo moeda CR2032</td>
<td></td>
<td>1</td>
</tr>
</table>

## Recursos

---

* Como o Seeeduino Stalker é projetado para uso como um nó de Wireless Sensor Network, ele estaria incompleto sem um gabinete à prova de intempéries que o acompanhasse. Tendo isso em mente, ao redesenhar a versão mais recente do Seeeduino Stalker (revisão de v1.0 para v2.0) ajustamos o contorno da placa de circuito e a localização dos parafusos para que ele pudesse se encaixar neste gabinete. O gabinete é resistente e possui uma vedação à prova d’água.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Waterproof_enclosure.jpg).

* A tampa superior do gabinete é mantida transparente para montar um painel solar dentro dela. Para maior estabilidade, o painel solar é colado sob a tampa superior do gabinete, como mostrado:

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Stalker_kit_v3.0_1.jpg).

* A bateria de polímero de lítio de 1050mAh pode ser colocada no gabinete sob o Seeeduino Stalker. Você pode fixá-la usando parafusos e pilares plásticos.

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Stalker_kit_battery.jpg) |![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Stalker_v3_with_battery.jpg)
|---|---|

<!-- ## Application Ideas

---

* Wireless Sensor Network (using XBee - bought separately)

* GPS Logging (using [GPSBee](/pt-br/GPS_Bee_kit "GPS_Bee_kit") - bought separately)

* Data Acquisition System capable of communicating with an App running on iPhone/Android Phone/Windows Phone (using [BluetoothBee](/pt-br/Bluetooth_Bee "Bluetooth Bee") - bought seperately)

* RF Remote Control (using [RFBee](/pt-br/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node") - bought separately)

* As a simple standalone Arduino compatible physical computing platform ([UartSBee_V4](/pt-br/UartSBee_V4 "UartSBee_V4") must be bought separately for programming)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/700px-Stalker_v3.0_and_the_Bees.jpg)

poly 441 45 508 17 567 79 505 120 [UartSBee_V4](/pt-br/UartSBee_V4 "UartSBee_V4")

poly 75 0 353 0 353 102 75 99 [WiFiBee](/pt-br/Wifi_Bee "Wifi_Bee")

poly 18 105 294 107 295 203 18 203 [BluetoothBee](/pt-br/Bluetooth_Bee "Bluetooth Bee")

poly 2 212 274 212 275 327 2 326 [XBee](/pt-br/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products "Zigbee Networking with XBee Series_2 and Seeeds Products")

poly 18 337 303 338 303 448 15 447 [GPSBee](/pt-br/GPS_Bee_kit "GPS_Bee_kit")

poly 38 459 379 459 379 570 37 571 [RFBee](/pt-br/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node")

poly 400 55 477 106 424 147 354 97 [WiFiBee](/pt-br/Wifi_Bee "Wifi_Bee")

poly 307 143 336 136 398 140 392 189 333 187 318 174 302 176 [BluetoothBee](/pt-br/Bluetooth_Bee "Bluetooth Bee")

poly 290 238 308 221 394 214 396 271 306 283 290 265 [XBee](/pt-br/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products "Zigbee Networking with XBee Series_2 and Seeeds Products")

poly 321 353 333 330 395 306 427 364 359 393 335 380 [GPSBee](/pt-br/GPS_Bee_kit "GPS_Bee_kit")

poly 409 464 417 432 488 389 537 445 463 498 426 491 [RFBee](/pt-br/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node")

poly 455 280 454 215 490 186 683 184 724 211 740 297 706 331 494 333 489 278 [Seeeduino-Stalker v3](/pt-br/Seeeduino-Stalker_v3 "Seeeduino-Stalker v3")

poly 570 132 573 13 802 16 803 131 [UartSBee_V4](/pt-br/UartSBee_V4 "UartSBee_V4")
&lt;/imagemap&gt; -->

:::note
Observe que [UartSBee_V4](/pt-br/UartSBee_V4 "UartSBee_V4") não pode ser inserido no soquete Bee Series presente no Seeeduino Stalker. O [UartSBee_V4](/pt-br/UartSBee_V4 "UartSBee_V4") é destinado à interface dos outros módulos Bee (mostrados na foto acima) com um computador e não pode, ele próprio, ser inserido no soquete destinado a esses outros módulos Bee. Há um conector tipo header separado de 5 vias presente tanto no UartSBee_V4 quanto no Seeeduino Stalker para conectá‑los entre si. Este header é composto por: VCC (para fornecer energia ao Stalker), TXD, RXD, DTR (para controlar o sinal de Reset do Stalker) e GND.**
:::

## Uso

---
<big>Primeiros Passos</big>

Se você é novo no mundo da "Computação Física" e se o Seeeduino Stalker é a primeira plataforma de computação física com a qual deseja começar, então sugerimos que você comece com <a href="/pt-br/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino </font></span></a>.

As etapas a seguir o ajudarão a montar os recursos de hardware e software para começar a usar o Seeeduino Stalker v3

**Passo 1: Adquirindo o Hardware**

Você vai precisar do seguinte hardware para executar seu primeiro programa.

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeed_Stalker_v3-6.png)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Uartsb40.jpg)|
|:---:|:---:|
|**Seeeduino Stalker v3** [Compre Aqui](https://www.seeedstudio.com/Seeeduino-Stalker-v3-p-1882.html)|**UartsBee v4.0** Necessário para programar o Seeeduino Stalker.  [Compre Aqui](https://www.seeedstudio.com/uartsbee-v31-p-688.html)|

|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Miniusb.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_V3-Waterproof_Solar_Kit_5pin_cable.jpg)|
|---|---|
|**Cabo Mini USB**  Você provavelmente já tem um desses por aí ou, se não tiver, compre um [aqui](https://www.seeedstudio.com/mini-usb-cable-110cm-p-252.html). Nós o usaremos para conectar o UartSBee_V4 a uma das portas USB do seu computador.|**Jumpers dupla face de 6 pinos**  Necessários para conectar o UartSBee_V4 ao Seeeduino Stalker. Você talvez já tenha alguns espalhados pela sua bancada. Caso não tenha, pode comprar um colorido [aqui](https://www.seeedstudio.com/6-pin-dualfemale-jumper-wire-100mm-5-PCs-pack-p-129.html).

**Passo 2: Instalando os drivers e conectando o hardware**

1. O [UartSBee_V4](/pt-br/UartSBee_V4 "UartSBee_V4") é como o canivete suíço multiuso do mundo da Computação Física. Há um procedimento muito detalhado para usar o UartSBee_V4 tanto para usuários Windows quanto GNU/Linux [aqui](/pt-br/UartSBee_V4 "UartSBee_V4").  No nosso caso ele realizará três funções:
    * Permitir que programemos o Seeeduino Stalker.
    * Permitir que nos comuniquemos com o Seeeduino Stalker.
    * Fornecer energia (a partir da alimentação USB do seu computador) ao Seeeduino Stalker (incluindo quaisquer periféricos conectados a ele).

2. As duas primeiras funções do UartSBee_V4 (programação e comunicação) são realizadas por meio de um circuito integrado chamado FT232RL que está presente nele. Antes que o FT232RL possa ser usado para esses fins, seus drivers (certos programas gratuitos do fabricante do FT232RL) devem ser instalados no seu PC com Windows/Ubuntu. Portanto, antes de prosseguir, baixe o arquivo de instalação do driver [daqui](https://www.ftdichip.com/Drivers/CDM/CDM20802_Setup.exe) e instale‑o no seu PC com Windows.

3. O UartSBee_V4 possui um regulador de tensão onboard e uma chave que permite selecionar qual tensão (5,0 V ou 3,3 V) você deseja fornecer para a placa de circuito de destino. No nosso caso, a placa de circuito de destino é a Seeeduino Stalker e, portanto, você precisará ajustar esta chave deslizante para 5,0 volts

4. O esquema de conexão de fiação do nosso hardware é **"<font color="Navy">Computador</font><font color="Grey">→(Cabo Mini USB)→</font><font color="Navy">UartSBee </font><font color="Grey">→(Cabo Flat Ribbon)→</font><font color="Navy">Seeeduino Stalker</font>"**. Os jumpers devem ser conectados entre o UartSBee_V4 e a Seeeduino Stalker antes de conectar o UartSBee_V4 ao Computador. Consulte as fotos abaixo e certifique-se de que os sinais estejam alinhados conforme mostrado na tabela (**Observação: Os pinos TXD e RXD devem ser conectados de forma cruzada como mostrado na tabela**).

5. Em seguida, conecte o cabo Mini USB do UartSBee_V4 ao seu computador. Se você estiver usando um PC com Windows, o balão "Found New Hardware" aparecerá e, em poucos instantes, os drivers para o FT232RL (ou seja, UartSBee_V4) serão instalados.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_Uartsbee_4.0_Connection.jpg)

Conexão Seeeduino Stalker v3 &lt;---&gt; UartSBee v4.0

<table>
<caption>Conexões dos jumpers</caption>
<tr>
<th>Seeeduino Stalker</th>
<th>UartSBee_V4</th>
</tr>
<tr>
<td>USB5V</td>
<td>VCC</td>
</tr>
<tr>
<td><font color="Red">RXD</font></td>
<td><font color="Green">TXD</font></td>
</tr>
<tr>
<td><font color="Green">TXD</font></td>
<td><font color="Red">RXD</font></td>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>DTR</td>
<td>DTR</td>
</tr>
</table>

<big>Notas de Conexão </big>

* **Soquete da série Bee** - conector 2*10 pinos, passo 2,0 mm (que irá se conectar – um de cada vez – a qualquer um dos [módulos sem fio](/pt-br/Wifi_Bee "Wifi_Bee"): [XBee](/pt-br/XBee_Shield "Zigbee Networking with XBee Series_2 and Seeeds Products"), [BluetoothBee](/pt-br/Bluetooth_Bee "Bluetooth Bee"), [GPSBee](/pt-br/GPS_Bee_kit "GPS_Bee_kit") ou [RFBee](/pt-br/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node").) A comunicação com esses módulos é feita por meio de UART.
* **Interface serial** – Para economizar espaço e reduzir custos, a conectividade USB&lt;-&gt;Serial não é fornecida por padrão. Você pode usar o [UartSBee_V4](/pt-br/UartSBee_V4 "UartSBee_V4") baseado em FT232 ou outras placas adaptadoras de USB para serial para fazer a programação ou se comunicar com o PC.
* **LED de usuário** – Um LED foi fornecido na placa para uso em sua aplicação, conforme desejar.
* **Interface I<sup>2</sup>C**: O CI de conversão de nível I<sup>2</sup>C onboard fornece tradução de tensão entre dispositivos de 3,3 V e 5 V. Isso permite conectar CIs I<sup>2</sup> de 5,0 Volts ao seu microcontrolador quando ele estiver operando em 3,3 Volts.

## Exemplos de Programação

---

* Faça o download e instale a biblioteca DS1337 e os sketches disponíveis na seção de recursos. A biblioteca DS1337 inclui uma versão modificada da classe DateTime por Jean-Claude Wippler em [JeeLabs](http://jeelabs.net/projects/cafe/wiki/)

* Os sketches de demonstração de data logger usam a Biblioteca SD do Arduino.

<big>Ajustar Data/Hora</big>

* Defina a placa Arduino como `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`.

* Abra o exemplo **adjust.ino** da biblioteca DS1337

* Defina a data/hora atual usando o objeto da classe DateTime **dt** no exemplo:

  * `DateTime dt(year, month, date, hour, min, sec,week-day(starts from 0 and goes to 6));`

    * **Ex:-** `DateTime dt(2015, 10, 1, 11, 43, 0, 4);`

* compile e envie para a <a href="/pt-br/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker v3 </font></span></a>.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_adjust.png)

**saída de adjust.ino**

Obter Data/Hora Atual

* * *

* Defina a placa Arduino como `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**` .

* Abra o exemplo **now.ino** da biblioteca DS1337

* A data/hora atual é lida do DS1337 usando a função ` RTC.now() `.

  * **Ex:- `DateTime now = RTC.now();`**

* compile e envie para a <a href="/pt-br/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker v3 </font></span></a>

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_now.png)

**saída de now.ino**

Interrupções do DS1337

Este exemplo é uma demonstração da detecção de interrupção a partir da saída INT do DS1337. Esse recurso é útil para funcionalidade de data logger em que o MCU é colocado em modo de suspensão quando não está em uso e a INT do DS1337 acorda a CPU periodicamente. Isso aumenta a duração da bateria. Toda a operação está documentada no código.

* Solde o jumper P3.

  * Isso conecta o pino de saída de interrupção do DS1337 ao pino INT0 do ATmega328.

* Defina a placa Arduino como `**Arduino Pro or Pro Mini (3.3V, 8MHz) w/ ATmega 328**`.

* Abra o exemplo **interrupts.ino** da biblioteca DS1337

* compile e envie para a <a href="/pt-br/Seeeduino-Stalker_v3" ><span><font size={"3"}> Seeeduino-Stalker v3 </font></span></a>

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_interrupt.png)
**saída de interrupts.ino**

Exemplo de Data Logger

* * *

A principal aplicação da Seeeduino Stalker v3.0 é o registro de dados de sinais de sensores, como tensão da bateria, etc., juntamente com o carimbo de data/hora. Esses sketches colocam o MCU em modo de suspensão quando não está realizando operação de amostragem/registro de dados. A implementação completa está muito bem documentada no código. A seção a seguir apresenta uma visão geral:

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Seeeduino_Stalker_v3_SolarPanel.jpg)

**Configuração de hardware dos exemplos de Data Logger**

1. **StalkerV30_DataLogger_10Sec.ino**

    * Este sketch registra dados de tensão da bateria no cartão SD configurado pela função **`RTC.enableInterrupts(_h, m, s_)`**.
    * A _periodicidade_ é fornecida usando h, m e s. Uma vez que uma interrupção é detectada, o horário da próxima interrupção é atualizado adiantando o valor de h, m e s. A classe DateTime é muito útil para isso.

        * ex:- `interruptTime = DateTime(interruptTime.get() + interruptInterval);  //decide the time for next interrupt`

        * Este sketch também produz saída detalhada, ou seja, os vários eventos que acontecem dentro do MCU são exibidos no terminal serial.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3-Waterproof_Solar_Kit/img/Stalker_v3.0_datalogger_flowchart.png)

**Visão geral da implementação do Data Logger**

## Recursos

---

* [Comparação entre várias versões da Seeeduino Stalker](https://wiki.seeedstudio.com/pt-br/Seeeduino_Stalker#Comparação-entre-várias-versões-da-Seeeduino-Stalker)

* [Cabo mini-USB de leitura de cartão SD, em uma cápsula](https://www.seeedstudio.com/sd-card-reading-miniusb-cable-in-a-capsule-p-575.html?cPath=77)

## Suporte Técnico & Discussão sobre o Produto

   <br />
 Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
