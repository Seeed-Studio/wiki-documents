---
description: Grove - Node
title: Grove - Node
keywords:
- Grove_Sensors_Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Node
last_update:
  date: 1/20/2023
  author: jianjing Huang
---


Grove - Node es un módulo electrónico simple y flexible para conectar objetos físicos. Se basa en la idea de IFTTT (IF-This-Then-That). Tiene dos conectores Grove para acceder a una variedad de módulos Grove. Con firmware IFTTT preprogramado, es fácil crear objetos físicos con sensores analógicos y actuadores 0/1.


Integra Bluetooth Low Energy (BLE) lo que hace extremadamente fácil interactuar con teléfonos y tabletas. Para extender su usabilidad, se incluye un bootloader DFU para reprogramarlo Over-The-Air a través de BLE. Soporta la plataforma ARM mbed para escribir nuevo firmware con cientos de librerías.

## Características

* Patrón IFTTT para usar

* Dos conectores Grove para sensores y actuadores

  * Plug-Play con sensores analógicos y actuadores alto/bajo

    * 4 GPIOs flexibles, todos pueden usarse para PWM, ADC, I2C y UART

* Nordic nRF51822 Multi-protocolo Bluetooth® 4.0 low energy/2.4GHz RF SoC

  * Procesador ARM Cortex-M0

    * 256kB flash, 16kB RAM

* Circuito de carga de batería integrado

* Firmware OTA

* Habilitado para mbed

  * IDE en línea

    * SDK C/C++ fácil de usar

    * Librerías útiles

## Especificaciones

* Voltaje de operación: 3.3Vdc

* Capacidad de batería: 80mAH

* Corriente máxima de carga: 100mA

* Voltaje de alimentación de interfaz Grove: 3.3V

* Corriente de alimentación de interfaz Grove: 100mA máx

* Voltaje de entrada de interfaz Grove: 0~3.3V

## Pinout

## Comenzar

* Encender Grove Node

Conecta Grove Node con una batería o un cable USB y luego presiona su botón, funcionará.

<dl><dd>

* Doble clic - ejecuta su bootloader, el LED rojo se encenderá.

* De otra manera - ejecuta su aplicación, el LED verde parpadeará.

</dd></dl>

* Apagar Grove Node

<dl><dd>

* En modo bootloader - espera un momento para ejecutar la aplicación.

* En modo aplicación - mantén presionado el botón hasta que todos los LEDs se apaguen

</dd></dl>

### Comenzar con Firmware Preprogramado

![](https://files.seeedstudio.com/wiki/Grove-Node/img/Milcandy_IFTTT.jpg)

Primero, necesitamos un módulo Grove de **Entrada** para detectar el mundo físico. El firmware preprogramado solo soporta un sensor de entrada analógico o sensor de entrada digital 0/1.
Los siguientes módulos Grove de Seeedstudio pueden usarse como **Entrada**:

<table>
  <tbody><tr>
      <th>Nombre del módulo</th>
      <th>Parámetro a medir</th>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={300}> Grove - Sensor de Proximidad Infrarrojo 80cm</td>
      <td width={400}> Distancia</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Botón</td>
      <td colSpan={3} rowSpan={1}>Encendido/Apagado</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Sensor de Electricidad</td>
      <td colSpan={3} rowSpan={1}> Electricidad</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Sensor de Gas(MQ2&amp;MQ5)</td>
      <td colSpan={3} rowSpan={1}> Calidad del Gas</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Sensor de Luz</td>
      <td colSpan={3} rowSpan={1}> Luz</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Interruptor Magnético</td>
      <td colSpan={3} rowSpan={1}> Magnético</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Sensor de Humedad</td>
      <td colSpan={3} rowSpan={1}> Humedad</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Sensor de Movimiento PIR</td>
      <td colSpan={3} rowSpan={1}> Movimiento PIR</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Sensor de Ángulo Rotatorio</td>
      <td colSpan={3} rowSpan={1}> Ángulo Rotatorio</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Interruptor de Inclinación</td>
      <td colSpan={3} rowSpan={1}>  Posición del Objeto</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Sensor de Sonido</td>
      <td colSpan={3} rowSpan={1}> Sonido</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Sensor de Temperatura</td>
      <td colSpan={3} rowSpan={1}> Temperatura</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Sensor Táctil</td>
      <td colSpan={3} rowSpan={1}> Toque humano</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Sensor de Agua</td>
      <td colSpan={3} rowSpan={1}> Agua</td>
      </tr>
    </tbody>
    </table>

Otros sensores analógicos que no son compatibles con Grove necesitan un pequeño ajuste. Simplemente conecta tu salida de señal al pin 4 del conector Grove y luego el VCC y GND. _Ten en cuenta que solo los sensores que emiten un valor analógico o digital 1/0 pueden usarse con el firmware preprogramado_

![](https://files.seeedstudio.com/wiki/Grove-Node/img/Mil_Grove_con.png)

Segundo, necesitamos un módulo Grove de **salida** como actuador. Los siguientes módulos Grove pueden usarse:

<table>
  <tbody><tr>
      <th>Nombre del módulo</th>
      <th>Acción cuando se activa</th>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td width={300}> Grove - Buzzer</td>
      <td width={400}> Buzzer habilitado</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - LED</td>
      <td colSpan={3} rowSpan={1}>LED Encendido</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Vibrator</td>
      <td colSpan={3} rowSpan={1}> Vibrar</td>
      </tr>
    <tr style={{fontSize: '90%'}}>
      <td> Grove - Relay</td>
      <td colSpan={3} rowSpan={1}> Encender/Apagar otros circuitos</td>
      </tr>
    </tbody>
    </table>

Por ejemplo, si pretendemos crear una luz que se encienda automáticamente si el ambiente está oscuro y se apague en caso contrario, entonces seleccionamos un [Grove-Light_Sensor](/Grove-Light_Sensor "Grove - Light Sensor") y un Grove-Red_LED.


Tercero, enseñar al Grove Node una lógica.

Conecta el sensor de luz como entrada y el LED como salida, y luego enciende el Grove Node.

* En un ambiente normal, haz un clic simple en el botón del Grove Node

* Cubre el sensor de luz con una mano para simular un ambiente oscuro, y luego haz doble clic, el Grove - LED se encenderá.

* Libera el sensor de luz, el Grove - LED se apagará.

## Over-The-Air

El Grove Node tiene un bootloader OTA preprogramado. Para ejecutar el bootloader:

1. apaga el Grove Node

2. haz doble clic en el botón del Grove Node

3. el LED rojo se encenderá y se puede escanear un dispositivo BLE llamado SD7DFU

4. usa [nRF Master Control Panel](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp) para actualizar la aplicación BLE

![](https://files.seeedstudio.com/wiki/Grove-Node/img/Ota-ui.png)

Más información se puede encontrar en [mbed.org](https://developer.mbed.org/teams/Bluetooth-Low-Energy/wiki/Firmware-Over-the-Air-FOTA-Updates).

## Desarrollar Nueva Aplicación

Ver [ble on mbed.org](http://developer.mbed.org/teams/Bluetooth-Low-Energy/)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Node/res/Grove-Node_v1.0_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Archivo pdf del esquema Grove - Node v1.0](https://files.seeedstudio.com/wiki/Grove-Node/res/Grove-Node_v1.0.pdf)

* [Archivo de diseño eagle Grove - Node v1.0](https://files.seeedstudio.com/wiki/Grove-Node/res/Grove-Node_v1.0_eagle.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
