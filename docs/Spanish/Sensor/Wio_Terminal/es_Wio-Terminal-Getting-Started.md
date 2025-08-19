---
title: Primeros Pasos con Wio Terminal
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/
slug: /es/Wio-Terminal-Getting-Started
last_update:
  date: 07/27/2025
  author: Guillermo
---

# Primeros Pasos con Wio Terminal

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg)

El **Wio Terminal** es un microcontrolador basado en SAMD51 con conectividad inalámbrica potenciada por el **Realtek RTL8720DN**, compatible con Arduino y MicroPython. Actualmente, la conectividad inalámbrica solo está soportada en Arduino. Funciona a **120MHz** (con boost hasta 200MHz), cuenta con **4MB** de memoria Flash externa y **192KB** de RAM. Soporta Bluetooth y Wi-Fi, proporcionando una base sólida para proyectos IoT.

El Wio Terminal está equipado con **una pantalla LCD de 2.4”, IMU incorporado (LIS3DHTR), micrófono, buzzer, ranura para microSD, sensor de luz y emisor infrarrojo (IR 940nm)**. Además, cuenta con dos puertos Grove multifuncionales para el [ecosistema Grove](https://www.seeedstudio.com/grove.html) y 40 pines GPIO compatibles con Raspberry Pi para más extensiones.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<div>
  <p style={{textAlign: 'center'}}><a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" target="_blank"></a></p>
  <div align="center">
    <a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" target="_blank">
      <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-classroom.png" />
    </a>
  </div>
  <p></p>
</div>

## Características

- **Diseño altamente integrado**
  - MCU, LCD, Wi-Fi, Bluetooth, IMU, micrófono, altavoz, tarjeta microSD, sensor de luz, interruptor de 5 vías, emisor infrarrojo (IR 940nm), autenticación criptográfica lista.
- Alimentado por **Microchip ATSAMD51P19**
  - Núcleo ARM Cortex-M4F a **120MHz** (boost hasta 200MHz)
  - **4 MB** Flash externa, **192 KB** RAM
- Soporte completo de protocolos
  - SPI, I2C, I2S, ADC, DAC, PWM, UART (serial)
- Potente **Conectividad Inalámbrica** (solo en Arduino)
  - Basado en **Realtek RTL8720DN**
  - Wi-Fi dual banda 2.4GHz / 5GHz (802.11 a/b/g/n)
  - BLE / BLE 5.0
- **Soporte USB OTG**
  - USB Host
  - USB Cliente
- Compatible con [**Ecosistema Grove**](https://www.seeedstudio.com/grove.html)
- **Soporte de software**
  - Arduino
  - MicroPython
  - ArduPy
  - Firmware AT

## Especificación
<!--
<table style="border-collapse: collapse; border-spacing: 0;" class="tg"><tbody><tr><th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; background-color: #c0c0c0; color: #ffffff; text-align: center; vertical-align: top;" rowspan="7">Chip Principal</th><th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: normal; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Número de Parte del Fabricante</th><th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: normal; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">ATSAMD51P19</th></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Procesador Central</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">ARM® Cortex®-M4F</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Velocidad de CPU</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">120MHz (Impulso hasta 200MHz)</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Tamaño de Memoria de Programa</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">512KB</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Memoria Flash Externa</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">4MB</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Tamaño de RAM</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">192KB</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Temperatura de Operación</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">-40°C ~ 85°C (TA)</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; font-weight: bold; background-color: #c0c0c0; color: #ffffff; text-align: center; vertical-align: top;" rowspan="3">Pantalla LCD</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Resolución</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">320 x 240</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Tamaño de Pantalla</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">2.4 pulgadas</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Controlador IC</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">ILI9341</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; font-weight: bold; background-color: #c0c0c0; color: #ffffff; text-align: center; vertical-align: top;" rowspan="6">Conectividad inalámbrica</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Número de Parte del Fabricante</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">RTL8720DN</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">CPU KM4</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">ARM® Cortex®-M4F</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">CPU KM0</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">ARM® Cortex®-M0</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Wi-Fi</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">802.11 a/b/g/n 1x1, 2.4GHz y 5GHz</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Bluetooth</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Soporta BLE5.0</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Motor de Hardware</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">AES/DES/SHA</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; font-weight: bold; background-color: #c0c0c0; color: #ffffff; text-align: center; vertical-align: top;" rowspan="5">Módulos Integrados</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Acelerómetro</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">LIS3DHTR</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Micrófono</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">1.0V-10V -42dB</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Altavoz</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">≥78dB @10cm 4000Hz</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Sensor de Luz</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">400-1050nm</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Emisor Infrarrojo</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">940nm</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; font-weight: bold; background-color: #c0c0c0; color: #ffffff; text-align: center; vertical-align: top;" rowspan="5">Interfaz</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Ranura para tarjeta microSD</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Máximo 16GB</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">GPIO</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">40 pines (Compatible con Raspberry Pi)</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">Grove</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">2 (Multifuncionales)</td></tr><tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 10px 5px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; border-color: inherit; text-align: left; vertical-align: top;">FPC</td><td style="font-family: Arial, sans-serif; font-size: -->

| Categoría              | Atributo                         | Valor                                              |
|------------------------|----------------------------------|----------------------------------------------------|
| **Chip Principal**     | Número de Parte del Fabricante   | ATSAMD51P19                                        |
|                        | Procesador Central               | ARM® Cortex®-M4F                                   |
|                        | Velocidad de CPU                 | 120MHz (Impulso hasta 200MHz)                      |
|                        | Tamaño de Memoria de Programa   | 512KB                                              |
|                        | Memoria Flash Externa           | 4MB                                                |
|                        | Tamaño de RAM                   | 192KB                                              |
|                        | Temperatura de Operación        | -40°C ~ 85°C (TA)                                  |
| **Pantalla LCD**       | Resolución                       | 320 x 240                                          |
|                        | Tamaño de Pantalla              | 2.4 pulgadas                                       |
|                        | Controlador IC                  | ILI9341                                            |
| **Conectividad**       | Número de Parte del Fabricante   | RTL8720DN                                          |
|                        | CPU KM4                          | ARM® Cortex®-M4F                                   |
|                        | CPU KM0                          | ARM® Cortex®-M0                                    |
|                        | Wi-Fi                            | 802.11 a/b/g/n 1x1, 2.4GHz y 5GHz                  |
|                        | Bluetooth                        | Soporta BLE5.0                                     |
|                        | Motor de Hardware                | AES/DES/SHA                                        |
| **Módulos Integrados** | Acelerómetro                     | LIS3DHTR                                           |
|                        | Micrófono                        | 1.0V-10V -42dB                                     |
|                        | Altavoz                          | ≥78dB @10cm 4000Hz                                 |
|                        | Sensor de Luz                    | 400-1050nm                                         |
|                        | Emisor Infrarrojo                | 940nm                                              |
| **Interfaz**           | Ranura para tarjeta microSD      | Máximo 16GB                                        |
|                        | GPIO                             | 40 pines (Compatible con Raspberry Pi)             |
|                        | Grove                            | 2 (Multifuncionales)                               |
|                        | FPC                              | [valor faltante]                                   |


## Descripción General del Hardware

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Hardware-Overview.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Hardware-OverviewNew.png" /></a></p>
  </figure>
</div>

## Diagrama de Pines

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" /></div>

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg)

## Primeros Pasos

### Hardware

**Materiales requeridos**

- Wio Terminal x 1
- Computadora x 1
- Cable USB Tipo-C x 1

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Powerup.png" /></div>

Conecta el Wio Terminal a tu computadora mediante el cable USB. El LED azul en la parte trasera debería encenderse.

### Software

- **Paso 1. Necesitas instalar el software Arduino.**

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

**Ejecuta la aplicación Arduino**

Haz doble clic en la aplicación Arduino IDE que descargaste previamente.

:::note
    Si el software Arduino se carga en un idioma diferente, puedes cambiarlo en el diálogo de preferencias. Consulta la [página del software Arduino (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para más detalles.
:::

- **Paso 2. Abre el ejemplo Blink**  

Abre el ejemplo de parpadeo de LED: **Archivo > Ejemplos > 01.Basics > Blink**.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/select_blink.jpg"/>
  <figcaption><i>Ruta de Blink</i></figcaption>
</figure>
</div>

- **Paso 3. Añade la librería para la placa Wio Terminal**

1. Abre tu Arduino IDE, haz clic en **Archivo** > **Preferencias**, y copia la siguiente URL en **URLs adicionales para el Gestor de Placas**:

```sh
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png)

2. Haz clic en **Herramientas** > **Placa** > **Gestor de placas** y busca **Wio Terminal** en el Gestor de placas.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png"/>
  <figcaption><i>La palabra clave es Wio Terminal</i></figcaption>
</figure>
</div>

* **Paso 4. Selecciona tu placa y puerto**
  Necesitas seleccionar la entrada en el menú **Herramientas > Placa** que corresponde a tu Arduino.
  Selecciona la **Wio Terminal**.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png"/>
  <figcaption> <i>Elige la placa correcta</i></figcaption>
</figure>
</div>

Selecciona el dispositivo serial de la placa Wio Terminal desde el menú **Herramientas -> Puerto**. Probablemente será COM3 o superior (**COM1** y **COM2** suelen estar reservados para puertos seriales hardware). Para saberlo, puedes desconectar tu placa Wio Terminal y reabrir el menú; la entrada que desaparezca será la placa Arduino. Vuelve a conectar la placa y selecciona ese puerto serial.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/port.png"/>
  <figcaption><i>Elige el puerto correcto</i></figcaption>
</figure>
</div>

* **Paso 5. Sube el programa**

Ahora, simplemente haz clic en el botón **Subir** en el entorno. Espera unos segundos y si la carga es exitosa, aparecerá el mensaje "Carga terminada." en la barra de estado.

<div align="center">
<figure>
  <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/upload.png"/>
  <figcaption><i>Sube el código</i></figcaption>
</figure>
</div>

Unos segundos después de que termine la carga, deberías ver que el LED en la parte inferior del Wio Terminal comienza a parpadear. Si es así, ¡felicidades! Has puesto en marcha tu Wio Terminal. Si tienes problemas, por favor consulta las sugerencias en las preguntas frecuentes.

Si no puedes subir el sketch, generalmente es porque el Arduino IDE no pudo poner el Wio Terminal en **modo bootloader**. (Debido a que el MCU se detuvo o tu programa está manejando USB.) La solución es poner manualmente el Wio Terminal en modo bootloader, como se muestra en las preguntas frecuentes.

¡No dudes en revisar otros tutoriales de Wio Terminal y comenzar a construir tus proyectos IoT!

## Preguntas Frecuentes (FAQ)

### **Reiniciar Wio Terminal:**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" /></div>

### **Entrar en modo Bootloader:**

Esto es muy útil cuando el Wio Terminal se bloquea o de alguna manera el puerto serial USB no aparece en el Arduino IDE. Desliza el interruptor **dos veces muy rápido**, de la siguiente manera:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

Una vez que el Wio Terminal esté en modo Bootloader, **el LED azul comenzará a “respirar”** de una forma diferente al parpadeo normal. Revisa el puerto de nuevo y debería aparecer.

### **Prueba con SWD**

Hay dos formas de usar SWD para probar y depurar con Wio Terminal:

Desde los puertos de prueba en la parte trasera del PCB.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SWD-1.png" /></div>

A la izquierda están los puertos de prueba para el ATSAMD51:

- SWCLK  
- SWDIO  
- SWO  
- RST  
- GND  
- 3V3  

A la derecha están los puertos de prueba para el RTL8720DN:

- CHIP  
- RXD  
- TXD  
- GND  
- 3V3  

Si necesitas depurar con mucha frecuencia, puedes añadir depuración SWD a una de las interfaces Grove de las siguientes maneras:

<div>
  <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/SWD-2.png" /></div><br />
</div>

La imagen muestra las dos posiciones de resistencias no montadas. Puedes conectar estas dos almohadillas soldando una resistencia de 0 ohmios o haciendo un puente. Esto conectará la interfaz SWD (SWDIO / SWCLK) del ATSAMD51 en paralelo al puerto Grove.

Después de nuestra prueba, la interfaz SWD está conectada en paralelo de esta forma. Al encender y reiniciar, debes asegurarte de que la interfaz Grove no esté conectada a ningún módulo Grove (el módulo podría tener resistencias pull-up / pull-down, lo que lo afectaría), de lo contrario entrará directamente en modo SWD y no podrá funcionar en modo normal (es decir, SWDCLK no puede ser llevado a nivel bajo durante el encendido o reinicio).

Aparte del encendido y reinicio, cuando usas SWD, Digital, Analog, Serial, I2C, no habrá interferencia; puedes cambiar en cualquier momento, pero para evitar posibles problemas, recomendamos desconectar esta conexión entre las dos almohadillas después de completar la depuración del programa.

### Conflictos en el nombre de archivos de la librería

Después de instalar seeed-arduinocore-samd, el core descargará algunas librerías para manejar diferentes dispositivos al mismo tiempo, como **TFT_eSPI.h**, etc. Al subir el programa, puede ocurrir un error y el compilador indicará que se encontraron múltiples archivos de librería. Por ejemplo:

```c
Multiple libraries were found for "TFT_eSPI.h"

Used: C:\Users\Dave\Documents\Arduino\libraries\TFT_eSPI-master

Not used: C:\Users\Dave\AppData\Local\Arduino15\packages\Seeeduino\hardware\samd\1.8.2\libraries\Seeed_Arduino_LCD
```

Si usas un dispositivo seeed-SAMD, por favor selecciona y usa la librería dentro de la carpeta seeed y mueve la librería en conflicto fuera de la carpeta de librerías de Arduino.

Si usas otros dispositivos, elimina las librerías dentro de la carpeta seeed y mantén que el compilador use sólo una librería. Esto soluciona problemas de incompatibilidad causados por versiones diferentes de librerías con el mismo nombre.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/wiolibrary.png)

Puedes consultar la lista específica de librerías aquí: [https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/libraries](https://github.com/Seeed-Studio/ArduinoCore-samd/tree/master/libraries)

## Aula de Wio Terminal

### Lección 1 - Hola Mundo

<iframe width="560" height="315" src="https://www.youtube.com/embed/af_I0n5iyzk" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 2 - Dibujando Figuras

<iframe width="560" height="315" src="https://www.youtube.com/embed/IFRiGpK4HK8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 3 - Mostrando Fuentes

<iframe width="560" height="315" src="https://www.youtube.com/embed/aZ9LYoS8w24" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 4 - Mostrando Imágenes y UI Simple

<iframe width="560" height="315" src="https://www.youtube.com/embed/P8CQtByWfS4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 5 - Gráficos de Líneas e Histogramas

<iframe width="560" height="315" src="https://www.youtube.com/embed/OnYLy7k-4T4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 6 - Uso de Módulos Grove

<iframe width="560" height="315" src="https://www.youtube.com/embed/NeFotsklchc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 7 - Protocolos de Comunicación

<iframe width="560" height="315" src="https://www.youtube.com/embed/kn9WJn2FRkI" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 8 - Hardware/Sensores Integrados Parte 1 | 3 Botones y Switch de 5 Vías

<iframe width="560" height="315" src="https://www.youtube.com/embed/tVd4L7Hzj7M" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 9 - Hardware/Sensores Integrados Parte 2 | Micrófono y Zumbador

<iframe width="560" height="315" src="https://www.youtube.com/embed/aYEI9UGIBvo" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 10 - Hardware/Sensores Integrados Parte 3 | Acelerómetro y Sensor de Luz

<iframe width="560" height="315" src="https://www.youtube.com/embed/3dw-Ony6CIE" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 11 - Construye un Control Remoto de TV usando el Emisor IR Integrado

<iframe width="560" height="315" src="https://www.youtube.com/embed/C9AlljLst2o" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 12 - Proyecto Jardín Inteligente usando Wio Terminal

<iframe width="560" height="315" src="https://www.youtube.com/embed/NQt-XLcSIwA" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 13 - Usa Wio Terminal como Mouse para PC

<iframe width="560" height="315" src="https://www.youtube.com/embed/QIR_yqQnYPY" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Lección 14 - Usa Wio Terminal como Teclado para PC

<iframe width="560" height="315" src="https://www.youtube.com/embed/JLrP058LDr8" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Wio Terminal en Deep Learning con apoyo de CAVEDU Education

**[Chino]** [Aquí](https://www.youtube.com/watch?v=sGpRnlGPapY&list=PLZkpEAYL25ABrMJJ3cod4PfQJ1Hviuk5B) hay una serie de videos sobre cómo aplicar deep learning en Wio Terminal.

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/jietu.png)

## Recursos

- **[PDF]** [Datasheet ATSAMD51N19A](https://files.seeedstudio.com/wiki/Wio-Terminal/res/ATSAMD51.pdf)
- **[PDF]** [Esquemáticos Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-SCH-v1.2.pdf)
- **[ZIP]** [Esquemáticos Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal_SCH&PCB.zip)
- **[PDF]** [Dimensiones Caja Wio Terminal - Frente](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-V3.0-White-72x57x10.4mm.pdf)
- **[PDF]** [Dimensiones Caja Wio Terminal - Parte Trasera](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-Back-V3.0-White-72x57x7.1mm.pdf)
- **[AI]** [Archivo de Diseño de Sticker para Pantalla Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Screen-Sticker-Design-File(Wio-Terminal-ちゃん).ai)
- **[AI]** [Archivo de Diseño Wio Terminal-chan azul y blanco](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-chan-Desgin-File-blue&white.ai)
- **[DXF]** [Dimensiones Caja Wio Terminal - Frente](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-V3.0-White-72x57x10.4mm.dxf)
- **[DXF]** [Dimensiones Caja Wio Terminal - Parte Trasera](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Main-Back-V3.0-White-72x57x7.1mm.dxf)
- **[DXF]** [Dimensiones Chasis y Batería Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-Chassis-Battery.dxf)
- **[DXF]** [Dimensiones PCB Wio Terminal](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Wio-Terminal-PCB-V3.0.dxf)


<a href="https://github.com/Seeed-Studio/OSHW-WioTerminal">
  <div className="custom-layout">
    <div className="custom-image">
     <img width="100" src="https://files.seeedstudio.com/wiki/Wio-Terminal/res/oshw-logo.svg" alt="your-image-description" />
    </div>
    <div className="custom-text">
      <h2>Hardware de Código Abierto</h2>
      <p>Este producto es completamente open-source. Accede a los documentos relacionados mediante este enlace.</p>
    </div>
  </div>
</a>


## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
