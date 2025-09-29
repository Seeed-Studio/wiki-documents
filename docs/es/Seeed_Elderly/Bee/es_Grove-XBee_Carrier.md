---
description: Grove - XBee Carrier
title: Grove - XBee Carrier
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-XBee_Carrier
last_update:
  date: 2/15/2023
  author: jianjing Huang
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

El Grove - XBee Carrier es una placa base de Red de Sensores Inalámbricos (WSN) diseñada para las series Bee y unidades Grove. Es principalmente adecuada para nodos Bee independientes como RFBee, Wifi Bee que tienen ATMega328 a bordo y módulos XBee (Zigbee). Es compatible con [RFBee](/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node"), [Wifi Bee](/Wifi_Bee "Wifi Bee"), [XBee](http://garden.seeedstudio.com/index.php?title=Bee_series#ZigBee "Bee_series#ZigBee") y Bluetooth Bee. Además de un receptáculo Bee, también hay dos conectores Grove. La placa puede ser alimentada por una batería de litio o a través de cable USB. Puedes usar un cargador inalámbrico, Panel Solar o el cable USB para cargar la batería. El chip FT232RL a bordo ayuda a descargar el programa al Módulo Bee directamente.

Los Bees que no tienen ATMega328 como Bluetooth Bee solo pueden ser configurados usando el FT232RL a bordo (USB a UART). Estos Bees no son adecuados para aplicaciones independientes.

El FT232RL a bordo puede ser usado como cualquier otra interfaz USB a UART de 3.3V cuando no está conectado a ningún Módulo Bee. Esto es útil para programar un MCU de 3.3V a través del Puerto Serie.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/grove-xbee-carrier-p-905.html?cPath=132_134)

## Características

---

- Receptáculo Compatible con Bees

- Dos Conectores Grove

- Dos Espacios para Grove

- LEDs para PWR, Indicación de Carga y transmisión UART.

- Interruptor de Alimentación

- Botón de Reset

## Ideas de Aplicación

---

- Red de Sensores Inalámbricos con Nodo Bee Independiente como [Wifi Bee](/Wifi_Bee "Wifi Bee").

- Como ayuda de configuración para Bees usando FT232RL.

- Cargador para Celdas de Ion de Litio usando controlador de carga a bordo.

- Como FT232RL basado en USB-UART de 3.3v.

## Precauciones

---
<font color="red">
</font>

- Inserta los Bees en la dirección correcta. Usa el contorno Bee en la serigrafía.

## Especificación

---
<table>
<tr>
<th>Elemento</th>
<th>Mín</th>
<th>Típico</th>
<th>Máx</th>
<th>Unidad</th>
</tr>
<tr>
<th>Voltaje</th>
<td>3.0</td>
<td>3.3</td>
<td>3.6</td>
<td>VDC</td>
</tr>
<tr>
<th>Controlador de Carga</th>
<td colspan="4">CN3063</td>
</tr>
<tr>
<th>CARGADOR (Voltaje de Carga para Batería LiPo)</th>
<td colspan="4">4.4V a 6V (según especificación CN3063)</td>
</tr>
<tr>
<th>Corriente de Carga</th>
<td colspan="4">Máx 500mA</td>
</tr>
<tr>
<th>LDO 3.3V</th>
<td colspan="4">Tipo de Bajo Ruido y Micropotencia. Adecuado para Aplicación con Batería.</td>
</tr>
<tr>
<th>Lógica I/O</th>
<td colspan="4">Lógica 3.3V</td>
</tr>
</table>

## Función de Interfaz

---
![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Xbee_Carrier_Interface.jpg)

**U2:** RT9167A_33PB IC, Regulador de Micropotencia de Bajo Ruido LDO de 3.3V
**U3:** CN3083 IC, Controlador de carga para baterías de Litio (carga usando panel solar)
**U4:** FT232RL IC, Interfaz UART serial de USB

## Uso

---
Cuando se usa un RFBee, las siguientes conexiones de pines del ATmage168 en RFBee se aplican para usar el IDE de Arduino

El Pin 5 es el conector Grove para E/S - Cable amarillo
 El Pin 6 es el conector Grove para E/S - Cable blanco

El Pin 16 puede necesitar ser llevado a bajo para proporcionar suficiente energía al Grove de E/S [vía mosfet]
 El Pin 17 puede necesitar ser llevado a bajo para proporcionar suficiente energía al Grove I2C [vía mosfet]

**Nota:** puedes usar el cable x2 Grove con los cables blanco y amarillo intercambiados en uno para acceder a ambas E/S.

### Instalación de Hardware

#### Carga

<!-- Now you can choose a suitable battery for your application from **SeeedStudio** [Batteries and Chargers](/Solar_Charger_Shield_V2.2 "Solar_Charger_Shield_V2.2") -->

- Conecta una batería LiPo de 3.7v al conector JST **BAT**.

- Conecta una fuente de energía como Panel Solar al conector JST **CHARGER**.

- La Batería será cargada continuamente. El final de la carga será indicado por el LED marcado 'OK'.

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_with_LiPOBattery_Being_Charged_By_SolarCell.jpg)

#### Trabajando con Nodos Bee Independientes

Los Nodos Bee son Nodos Inalámbricos Compatibles con Arduino independientes. **SeeedStudio** tiene dos de estos Nodos - [Wifi Bee](/Wifi_Bee "Wifi Bee") y [RFBee](/RFbee_V1.1-Wireless_Arduino_compatible_node "RFbee V1.1 - Wireless Arduino compatible node").

- La siguiente imagen ilustra la conexión de [WiFi Bee](/Wifi_Bee "Wifi Bee") al **Grove - XBee Carrier**.

- Cualquier Grove puede ser conectado a los conectores Grove proporcionados.

- La programación del **AtMega328P** integrado del WiFi Bee se realiza conectando a PC a través del puerto USB. (Se usa FT232RL)

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_Connected_to_Wifi_BEE_and_A_Grove.jpg)

Bee Stem Connected to Wifi BEE and A Twig.jpg

- Consulta [la documentación de uso de Wifi Bee para ejemplos de programación](http://garden.seeedstudio.com/index.php?title=Wifi_Bee#Usage "Wifi_Bee#Usage")

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_Connected_To_RFBee_And_TwoTwigs.jpg)

Bee Stem Connected To RFBee And TwoTwigs.jpg

#### Trabajando con Módulos Bee

Esta sección trata sobre aquellos módulos Bee que no tienen un MCU preprogramado con bootloader de Arduino. Principalmente actúan como un transceptor inalámbrico. Estos **Módulos Bee** como Bluetooth Bee, etc.. también pueden comunicarse con PC. En este caso, **Grove - XBee Carrier** actúa como un portador para estos Bees proporcionando la energía necesaria, interfaz de comunicación con PC a través de FT232RL USB a UART.

<!-- *   In the below example [Bluetooth Bee](/Bluetooth_Bee "Bluetooth Bee") is connected to **Grove - XBee Carrier** and configured using USB-UART -->

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Stem_XBee_Carrier_Connected_to_BluetoothBee.jpg)

- La comunicación del Bluetooth Bee y PC es capturada con una aplicación de terminal de puerto serial.

- Puedes ver los comandos y su respuesta en la captura de pantalla a continuación.

- El Bluetooth Bee fue puesto en modo INQ e incluso ha detectado un dispositivo Bluetooth en las cercanías.

![](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Stem_XBee_Carrier_BluetoothBee_Commands.png)

<!-- *   For more information on using [Bluetooth Bee](/Bluetooth_Bee "Bluetooth Bee"), consult the [Bluetooth Bee Commands documentation](/Bluetooth_Bee#Commands_to_change_default_configuration "Bluetooth Bee"). -->

### Programación

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

## Rastreador de Versiones

---
<table>
<tr>
<th>Revisión</th>
<th>Descripciones</th>
<th>Lanzamiento</th>
</tr>
<tr>
<td>v0.9b</td>
<td>Lanzamiento público inicial</td>
<td>13 de julio de 2011</td>
</tr>
</table>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/PCBA-Grove%20XBee%20Carrier_Eagle.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

- [Archivos Eagle de Grove - XBee Carrier](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/PCBA-Grove%20XBee%20Carrier_Eagle.rar)

- [Archivo de esquemas PDF de Grove - XBee Carrier](https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/Bee_Stem_v0.9b.pdf)

- [CN3063](http://www.consonance-elec.com/pdf/%E6%8A%80%E6%9C%AF%E8%AF%B4%E6%98%8E%E4%B9%A6/DSC-CN3063.pdf)

- [RT9167A_33PB](http://www.richtek.com/download_ds.jsp?s=238)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
