---
description: Arduino Breakout para LinkIt Smart 7688 Duo
title: Arduino Breakout para LinkIt Smart 7688 Duo
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arduino_Breakout_for_LinkIt_Smart_7688_Duo
last_update:
  date: 1/13/2023
  author: shuxu hu
---

:::danger
Debido al cierre de MediaTek Labs, todos los enlaces relacionados se han vuelto inválidos. Si necesitas descargar archivos relevantes, por favor búscalos en el siguiente enlace: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

 **Arduino Breakout para LinkIt Smart 7688 Duo** es una placa de expansión para LinkIt Smart 7688 Duo. Al igual que otras placas breakout producidas por Seeed, esta placa ha integrado abundantemente 12 puertos grove que te permiten conectar más módulos grove fácilmente. Al usar esta placa, los principiantes pueden comenzar rápidamente porque el cableado, que usualmente no es un proceso agradable para la mayoría de las personas, se simplifica. Además, la placa comparte el mismo MCU que Arduino, lo que significa que no solo puedes usar las características del LinkIt Smart 7688, sino también las de Arduino Yún, lo cual te permite construir aplicaciones IoT ricas basadas en varios sketches de Arduino robustos y compilados. En la placa, hay pines reservados para que LinkIt Smart 7688 Duo acceda fácilmente, además de eso, también soporta buses serie como I2C, UART y viene con USB y Ethernet.

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_product_view.jpg)

LinkIt Smart 7688 Duo es una placa de desarrollo abierta basada en la distribución Linux OpenWrt, MT7688 y ATmega32u4. La placa está diseñada especialmente para habilitar la creación de prototipos de dispositivos IoT de Aplicaciones Ricas para Smart-Home. Si quieres saber más sobre LinkIt Smart 7688 Duo, por favor haz clic [AQUÍ](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo).

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Arduino-Breakout-for-LinkIt-Smart-7688-Duo-p-2576.html)

## Características

- Compatible con Arduino Shield
- Ethernet para conectar a internet
- USB 2.0 para más periféricos
- Interfaces Grove: I2C × 2, Analógico × 3, Digital× 6, UART × 1
- Puerto de depuración de 4 pines × 1, ICSP × 1

## Ideas de Aplicación

- Dispositivo IoT/Gateway.
- Robótica
- Dispositivos multimedia inteligentes
- Enseñanza y aprendizaje

## Especificaciones

- **Voltaje de entrada** :5.0V (Con puerto de alimentación USB)
- **Voltaje de operación** :3.3V

:::note
    Los pines de depuración se conectan con MT7688, otros pines se conectan con ATmega32U4.
:::

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_components_with_text_1200_s.jpg)

|Elemento|Cant.|Elemento|Cant.|
|---|---|---|---|
|Arduino Shield|1|Puerto USB (Tipo-A)|1|
|MT7688 UART2|1|Puerto USB (Micro tipo-B)|1|
|Puerto ICSP|1|Puerto Ethernet|1|
|Botón de Reset (ATmega32u4)|1|Puerto para conectar con LinkIt Smart 7688 Duo|1|

## Comenzar

En esta aplicación simple, vas a hacer que un zumbador produzca diferentes sonidos. Antes de comenzar, además del Arduino Breakout para LinkIt Smart 7688 Duo, por favor verifica si tienes los siguientes materiales a mano. Puedes obtenerlos de nuestro Bazaar.

|LinkIt Smart 7688 Duo|Cable USB|UARTBee |Cables puente x 3|Grove - Buzzer
|---|---|---|---|---|
|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/102110017%206.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/48cmUSBc.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/UartSBee%20V5_01.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/jw100n.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/107020000%201.jpg)
|[**Obtener Uno Ahora**](https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html)|[**Obtener Uno Ahora**](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|[**Obtener Uno Ahora**](https://www.seeedstudio.com/UartSBee-V5-p-1752.html)|[**Obtener Uno Ahora**](https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html)|[**Obtener Uno Ahora**](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)

- Paso1 Consulta esto para conectar tu LinkIt Smart 7688 Duo a internet.

:::note
    * Puedes encontrar el Pin 8, Pin 9 y Pin GND cerca del puerto que se conectará al LinkIt Smart 7688.
    * Puedes conectar los cables puente al puerto MT7688 UART2 en lugar de soldarlos al Pin 8, Pin 9 y Pin GND.
:::

- Paso2. Abre una consola después de conectar un adaptador USB a Serial al LinkIt Smart 7688 Duo.
- Paso3 Conecta todas las partes como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_demo_connection_view_1200_s.jpg)

- Paso4：Conecta Grove - Buzzer al puerto D4.

- Paso5: Este paso es para construir el entorno Arduino para la plataforma LinkIt Smart 7688 Duo en la computadora host. Dado que el tutorial ha sido escrito en el Wiki de LinkIt Smart 7688, por favor consulta [Aquí](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo#Installing_Arduino_programming_environment).
- Paso6: Descarga firmata.
- Paso7: Consulta [Aquí](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo#Installing_Arduino_programming_environment) para instalar Arduino IDE para la plataforma LinkIt Smart 7688, y flashea el archivo firmata a la placa de desarrollo.

:::note
    Los siguientes pasos deben realizarse en el SO embebido (OpenWRT). Por favor asegúrate de tener Python en tu sistema y haber instalado pip.
:::

- Paso8: Escribe pip install pyfirmata en la consola y presiona Enter para instalar la librería de python pyfirmata.
- Paso9: Crea un archivo llamado **buzzer.py** escribiendo **vi buzzer.py** en la consola, copia el código de abajo en él.

```python
from pyfirmata import Arduino, util
from time import sleep
board = Arduino('/dev/ttyS0')
print "Start blinking D4"
while True:
  board.digital[4].write(1)
  sleep(0.5)
  board.digital[4].write(0)
  sleep(0.5)
```

- Paso10: Guarda **buzzer.py** y escribe **python buzzer.py** para ejecutar el código de ejemplo.
- Paso11: Ahora escucharás el sonido del zumbador.

## Hazlo Ahora

¿Has logrado hacer que el zumbador suene? Aquí tienes 2 proyectos increíbles más que usan LinkIt Smart 7688 Duo. ¡Hagámoslos ahora!

|Router Inteligente Con Visualización de Conexión WiFi|Monitor de Me Gusta de Facebook|
|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/F9SCHIKIPH4SPTP.MEDIUM.jpg)|![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/F9MQJJOIHQOBV4Q.MEDIUM.jpg)|
|[![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ReRouter-Make-an-Extensible-IoT-Router/)|[![](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/200px-Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Facebook-Like-Monitor/)|

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/resources/Schematic_files_for_Arduino_Breakout_for_LinkIt_Smart_7688_Duo.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Archivos de esquemas](https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/resources/Schematic_files_for_Arduino_Breakout_for_LinkIt_Smart_7688_Duo.zip)
- [Enlace Wiki para LinkIt Smart 7688 Duo](https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo)
- [OpenWrt](http://wiki.openwrt.org/doc/howto/user.beginner)

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
