---
title: Grove - Cámara Serial
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Serial_Camera/
slug: /es/Grove-Serial_Camera
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_camera.jpg)

La Cámara Serial es un módulo de cámara a color JPEG fácil de usar con MCU. Tiene integrado un DSP de procesamiento de imágenes para generar imágenes JPEG de 320*240 o 640*480 sin información de miniatura. La imagen capturada se almacenará en el búfer interno y se transferirá a través del puerto UART.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Serial-Camera-p-945.html)

Características
---------------

- Interfaz Grove
- Imagen comprimida JPEG sin información de miniatura
- Alimentación de 5V
- Pequeño y compacto
- Control por protocolo

:::tip
    Para más detalles sobre los módulos Grove, consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Especificaciones
----------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Elemento
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr align="center">
<th scope="row">
Voltaje de Operación
</th>
<td>
4,8
</td>
<td>
5.0
</td>
<td>
5.3
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Resolución (predeterminada)
</th>
<td colspan="3">
640x480 / 320x240
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Velocidad de baudios predeterminada del puerto serial
</th>
<td colspan="3">
115200
</td>
<td>
Baud
</td>
</tr>
</table>

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Ideas de Aplicación
-------------------

- Cámaras digitales con el [shield de tarjeta SD](https://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109)
- Sistema de monitoreo de video

Uso
---

### Usar Cámara en PC

**Paso 1**: Descarga la herramienta de depuración de puerto serie dedicada [VC0703COMTOOL.rar](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar) e instálala.

**Paso 2**: Conecta la cámara serie a la PC con USB para usar la herramienta convertidora serie UartSBee

| Cámara serie  | Uart_SB v3.1 |
|---------------|---------------|
| GND (negro)   | GND           |
| VCC (rojo)    | VCC           |
| RX (blanco)   | TX            |
| TX (Amarillo) | RX            |

**Paso 3:** Conecta el Uart_SB v3.1 con la computadora y abre el software vc0703CommTool. Elige el número COM correcto del puerto que conectaste a la cámara, velocidad de baudios predeterminada 115200, y luego abre el puerto.

**Paso 4:** Haz clic en el botón "Get Version" y reiniciará la cámara.

**Paso 5:** Haz clic en el botón "Fbuf" para prepararse para tomar una foto.

1. Haz clic en "stop CFbuf" para tomar una foto.

2. Haz clic en "Sel File" para seleccionar el nombre del archivo donde almacenar la foto.

3. Haz clic en "Read" para leer los datos del búfer y almacenarlos en el archivo seleccionado como se muestra a continuación:

    ![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera_Picture.jpg)

4. Haz clic en "Resume" para reanudar la actualización de fotogramas para que puedas continuar tomando otra foto.

### Usar la Cámara con Arduino y tarjeta SD

**Paso 1**: Conecta Grove - Serial Camera a la placa Arduino. Las partes de hardware incluyen Seeeduino V3.0, SD Card Shield, tarjeta microSD™ SanDisk de 2GB, Grove - Button.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera.jpg) -->

**Paso 2**: Cambia el búfer de recepción serial (64 bytes predeterminados) a 128 bytes. Abre el directorio hardware/arduino/cores, y edita el archivo llamado wiring_serial.c o HardwareSerial.cpp cerca de la parte superior hay un #define SERIAL_BUFFER_SIZE 64, lo que significa que se usan 64 bytes para el búfer. Necesitas cambiar esto a 128. Para más detalles, consulta [Arduino Hacks](http://learn.adafruit.com/arduino-tips-tricks-and-techniques/arduino-hacks).

**Paso 3**: Descarga la [Librería Grove - Serial Camera](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip), súbela a Seeeduino. Si no se puede compilar, confirma si la [Librería SD](https://arduino.cc/en/Reference/SD) está en tu carpeta del IDE de Arduino.

**Paso 4**: Abre el Monitor Serial, presiona el botón para tomar una foto después de la inicialización de la tarjeta SD y la cámara.

Recursos
--------

- [Herramienta de depuración VC0703](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar)
- [Manual para cámara serial.pdf](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/Manual_for_serial_camera.pdf)
- [Librería Grove - Serial Camera](https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_Serial_Camera -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
