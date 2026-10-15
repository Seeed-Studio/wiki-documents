---
description: Grove - XBee Carrier
title: Grove - XBee Carrier
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-XBee_Carrier
sku: 113020004
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Grove-XBee_Carrier/
---
<!-- ---
name: Grove - XBee Carrier
category: Sensor
bzurl: https://www.seeedstudio.com/grove-xbee-carrier-p-905.html?cPath=132_134
oldwikiname:  Grove - XBee Carrier
prodimagename: Bee_Stem.jpg
surveyurl: https://www.research.net/r/Grove-XBee_Carrier
sku:  113020004
--- -->

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem.jpg)

O Grove - XBee Carrier é uma placa base de Rede de Sensores Sem Fio (WSN) projetada para a série Bee e unidades Grove. Ela é principalmente adequada para nós Bee independentes como RFBee, Wifi Bee, que possuem ATMega328 integrado, e módulos XBee (Zigbee). É compatível com [RFBee](/pt-br/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node"), [Wifi Bee](/pt-br/Wifi_Bee "Wifi Bee"), [XBee](http://garden.seeedstudio.com/index.php?title=Bee_series#ZigBee "Bee_series#ZigBee") e Bluetooth Bee. Além de um soquete Bee, há também dois conectores Grove. A placa pode ser alimentada por uma bateria de lítio ou por cabo USB. Você pode usar um carregador sem fio, painel solar ou cabo USB para carregar a bateria. O chip FT232RL integrado ajuda a fazer o download do programa diretamente para o módulo Bee.

Bees que não possuem ATMega328, como o Bluetooth Bee, só podem ser configurados usando o FT232RL integrado (USB para UART). Esses Bees não são adequados para aplicações independentes.

O FT232RL integrado pode ser usado como qualquer outra interface USB para UART de 3,3 V quando não estiver conectado a nenhum módulo Bee. Isso é útil para programar um MCU de 3,3 V por meio da porta serial.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/grove-xbee-carrier-p-905.html?cPath=132_134)

## Recursos

---

- Soquete compatível com Bees

- Dois conectores Grove

- Dois espaços reservados para Grove

- LEDs para PWR, indicação de carga e transmissão UART.

- Interruptor de energia

- Botão de reset

## Ideias de Aplicação

---

- Rede de Sensores Sem Fio com nó Bee independente como o [Wifi Bee](/pt-br/Wifi_Bee "Wifi Bee").

- Como auxílio de configuração para Bees usando o FT232RL.

- Carregador para células de íon de lítio usando o controlador de carga integrado.

- Como um USB-UART de 3,3 V baseado em FT232RL.

## Cuidados

---
<font color="red">
</font>

- Insira os Bees na direção correta. Use o contorno do Bee na serigrafia.

## Especificação

---
<table>
<tr>
<th>Item</th>
<th>Mín</th>
<th>Típico</th>
<th>Máx</th>
<th>Unidade</th>
</tr>
<tr>
<th>Tensão</th>
<td>3.0</td>
<td>3.3</td>
<td>3.6</td>
<td>VDC</td>
</tr>
<tr>
<th>Controlador de carga</th>
<td colspan="4">CN3063</td>
</tr>
<tr>
<th>CARREGADOR (Tensão de carga para bateria LiPo)</th>
<td colspan="4">4,4 V a 6 V (conforme especificação do CN3063)</td>
</tr>
<tr>
<th>Corrente de carga</th>
<td colspan="4">Máx 500 mA</td>
</tr>
<tr>
<th>LDO de 3,3 V</th>
<td colspan="4">Tipo de baixo ruído e micropotência. Adequado para aplicação com bateria.</td>
</tr>
<tr>
<th>Lógica de E/S</th>
<td colspan="4">Lógica de 3,3 V</td>
</tr>
</table>

## Função da Interface

---
![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Xbee_Carrier_Interface.jpg)

**U2:** CI RT9167A_33PB, regulador LDO de 3,3 V de baixo ruído e micropotência
**U3:** CI CN3083, controlador de carga para baterias de lítio (carregamento usando painel solar)
**U4:** CI FT232RL, interface USB para UART serial

## Uso

---
Ao usar um RFBee, as seguintes ligações de pinos do ATmage168 no RFBee se aplicam ao uso da IDE Arduino

O pino 5 é o conector Grove para E/S - fio amarelo
 Pin 6 is the Grove connector for I/O - White wire

O pino 16 pode precisar ser acionado em nível baixo para fornecer energia suficiente ao Grove de E/S [via mosfet]
 Pin 17 may need to be driven low to provide enough power to the I2C Grove [via mosfet]

**Observação:** você pode usar o cabo Grove x2 com os fios branco e amarelo invertidos em um deles para acessar ambas as E/S.

### Instalação de Hardware

#### Carregamento

<!-- Now you can choose a suitable battery for your application from **SeeedStudio** [Batteries and Chargers](/pt-br/Solar_Charger_Shield_V2.2 "Solar_Charger_Shield_V2.2") -->

- Conecte uma bateria LiPo de 3,7 V ao conector JST **BAT**.

- Conecte uma fonte de energia como um painel solar ao conector JST **CHARGER**.

- A bateria será carregada continuamente. O fim da carga será indicado pelo LED marcado como 'OK'.

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_with_LiPOBattery_Being_Charged_By_SolarCell.jpg)

#### Trabalhando com nós Bee independentes

Os nós Bee são nós sem fio independentes compatíveis com Arduino. A **SeeedStudio** possui dois desses nós - [Wifi Bee](/pt-br/Wifi_Bee "Wifi Bee") e [RFBee](/pt-br/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node").

- A imagem a seguir ilustra a conexão do [WiFi Bee](/pt-br/Wifi_Bee "Wifi Bee") ao **Grove - XBee Carrier**.

- Qualquer Grove pode ser conectado aos soquetes Grove fornecidos.

- A programação do **AtMega328P** integrado do WiFi Bee é realizada conectando-se ao PC por meio da porta USB. (usa-se o FT232RL)

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_Connected_to_Wifi_BEE_and_A_Grove.jpg)

Bee Stem conectado ao Wifi BEE e a um Twig.jpg

- Consulte a [documentação de uso do Wifi Bee para exemplos de programação](http://garden.seeedstudio.com/index.php?title=Wifi_Bee#Usage "Wifi_Bee#Usage")

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_Connected_To_RFBee_And_TwoTwigs.jpg)

Bee Stem conectado ao RFBee e a dois Twigs.jpg

#### Trabalhando com módulos Bee

Esta seção trata daqueles módulos Bee que não possuem um MCU pré-programado com bootloader Arduino. Eles agem principalmente apenas como um transceptor sem fio. Esses **módulos Bee**, como o Bluetooth Bee, etc., também podem se comunicar com o PC. Nesse caso, o **Grove - XBee Carrier** atua como uma base para esses Bees, fornecendo a energia necessária e a interface de comunicação com o PC por meio do FT232RL USB para UART.

<!-- *   In the below example [Bluetooth Bee](/pt-br/Bluetooth_Bee "Bluetooth Bee") is connected to **Grove - XBee Carrier** and configured using USB-UART -->

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Stem_XBee_Carrier_Connected_to_BluetoothBee.jpg)

- A comunicação entre o Bluetooth Bee e o PC é capturada com um aplicativo de terminal de porta serial.

- Você pode ver os comandos e sua resposta na captura de tela abaixo.

- O Bluetooth Bee foi colocado no modo INQ e até detectou um dispositivo Bluetooth nas proximidades.

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Stem_XBee_Carrier_BluetoothBee_Commands.png)

<!-- *   For more information on using [Bluetooth Bee](/pt-br/Bluetooth_Bee "Bluetooth Bee"), consult the [Bluetooth Bee Commands documentation](/pt-br/Bluetooth_Bee#Commands_to_change_default_configuration-"Bluetooth-Bee"). -->

### Programação

```
/*
  Test code for use with an XBee Carrier & an RF Bee

  Turns on PD5 (eg: grove relay) on for one second, then off for one second, repeatedly.
*/

void setup()
{
    // initialize the digital pin as an output [Pin 5 is the Grove connector for I/O
    pinMode(5, OUTPUT);

    // These lines are needed to ensure that the relay will pull in [provides power to the Grove]
    pinMode(16, OUTPUT);
    digitalWrite(16, LOW);
}

void loop() {
    digitalWrite(5, HIGH);   // set the LED on
    delay(1000);              // wait for a second
    digitalWrite(5, LOW);    // set the LED off
    delay(1000);              // wait for a second
}
```

## Rastreador de Versões

---
<table>
<tr>
<th>Revisão</th>
<th>Descrições</th>
<th>Lançamento</th>
</tr>
<tr>
<td>v0.9b</td>
<td>Lançamento público inicial</td>
<td>13 de julho de 2011</td>
</tr>
</table>

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/PCBA-Grove%20XBee%20Carrier_Eagle.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Arquivos Eagle do Grove - XBee Carrier](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/PCBA-Grove%20XBee%20Carrier_Eagle.rar)

- [Arquivo de esquemático em PDF do Grove - XBee Carrier](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/Bee_Stem_v0.9b.pdf)

- [CN3063](http://www.consonance-elec.com/pdf/%E6%8A%80%E6%9C%AF%E8%AF%B4%E6%98%8E%E4%B9%A6/DSC-CN3063.pdf)

- [RT9167A_33PB](http://www.richtek.com/download_ds.jsp?s=238)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
