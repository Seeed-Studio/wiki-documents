---
title: Grove - Reproductor MP3 Serial
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Serial_MP3_Player/
slug: /es/Grove-Serial_MP3_Player
last_update:
  date: 01/09/2022
  author: gunengyu
---

[![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3sensor_02.jpg)](https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html)

Grove-Serial MP3 Player es un tipo de dispositivo reproductor MP3 simple cuyo diseño está basado en un chip de audio MP3 de alta calidad---WT5001. Puede soportar frecuencias de muestreo de 8KHZ~44.1kHZ en formatos de archivo MP3 y WAV. Este producto tiene varios puertos periféricos: una interfaz Grove UART estándar, un conector de auriculares de doble pista, una interfaz externa y también una interfaz de tarjeta Micro SD. Puedes controlar el estado de reproducción MP3 enviando comandos al módulo a través de herramientas de puerto serial, como cambiar canciones, cambiar el volumen y modo de reproducción, etc. Parece un módulo simple, pero posee una función tan potente. ¿Quieres saber cómo es la calidad de sonido? ¡Por favor ven y experiméntala!

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/grove-serial-mp3-player-p-1542.html)

Características
--------

- Interfaz Grove estándar
- Control de puerto serial asíncrono del modo de reproducción
- Indicador de Ocupado
- Botón de Reinicio
- Interfaz de tarjeta Micro SD estándar
- Soporta sistema de archivos FAT16 y FAT32

:::tip
    Más detalles sobre los módulos Grove por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
Plataformas Soportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Descripción General del Hardware
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Mp3_interface.jpg)

- ①：Interfaz Grove del Canal Izquierdo.
- ②：Interfaz de Auriculares: auriculares de 3.5mm
- ③：Interfaz Grove del Canal Derecho.
- ④：WT5001
- ⑤：Indicador LED: El LED se enciende cuando se está reproduciendo música.
- ⑥：Interfaz Grove UART
- ⑦：Tarjeta SD: tarjeta micro SD(≤2GB)

## Jugar Con Arduino

### Hardware

El Grove - Serial MP3 Play puede ser controlado por Arduino/Seeeduino. Y hay un código de prueba Serial_MP3 para que uses. Creo que puedes empezar fácilmente. Para información más detallada, por favor consulta la siguiente descripción. La instalación del hardware:

- Conecta Grove - Serial MP3 Play al puerto Digital 2 de Arduino/Seeeduino, Nota que puedes cambiar el número de pin como gustes, solo asegúrate de hacer los cambios correspondientes en el código. Luego conecta tu Arduino/Seeeduino a la PC con un cable USB.
- Conecta unos auriculares al Grove - Serial MP3 Play. Ahora la parte del hardware ha sido completada.

### Software

- **Paso 1.** Descarga el [Grove-MP3 v2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player) desde Github.
- **Paso 2.** Consulta [Cómo instalar biblioteca](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la biblioteca para Arduino.
- **Paso 3.** Puedes seleccionar el ejemplo **Seeed_Serial_MP3_Player/examples/WT2003S_Terminal_Player** y subirlo a arduino. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).
- **Paso 4.** Veremos la información en el terminal COM como se muestra a continuación.

![](https://files.seeedstudio.com/wiki/Grove-MP3_v2.0/img/COM.png)

- **Paso 5.** Por favor ingresa el comando relacionado para reproducir la música.

:::tip
    La biblioteca soporta dispositivos AVR/SAMD/STM32F4, tanto serial por hardware como por software también.
:::

Hay 2 tipos de puertos seriales. Uno es COMSerial, que significa puerto de comunicación (conectando con el módulo Grove-MP3). El otro es ShowSerial, que significa puerto de visualización de información serial (conectando con PC).

La mayoría de las placas arduino tienen al menos un Serial, algunas tienen múltiples seriales (Arduino Mega tiene 4 Seriales). Se comunica en los pines digitales 0 (RX) y 1 (TX) así como con la computadora vía USB. Así que si conectas un dispositivo UART en el pin D0 y pin D1, tienes que removerlos antes de descargar el programa a través de USB. De lo contrario causará fallas en la subida. A veces necesitas más puertos seriales que el número de puertos seriales por hardware disponibles. Si este es el caso, puedes usar un Serial por Software que usa software para emular el hardware serial. El serial por software requiere mucha ayuda del controlador Arduino para enviar y recibir datos, así que no es tan rápido o eficiente como el serial por hardware. Para más información sobre el Serial, por favor consulta [Seeed Arduino Serial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Serial/).

- **AVR:** Para el ejemplo de abajo, Definimos Software Serial como COMSerial (conectando con el módulo Grove-MP3). NO todos los pines digitales pueden ser usados para serial por software. Puedes consultar [Software Serial](https://www.arduino.cc/en/Reference/SoftwareSerial) para pines detallados. Definimos hardware Serial como ShowSerial (conectando con PC). Si usas Arduino Mega, puedes conectar el Serial por hardware a ShowSerial y el otro Serial1/Serial2/Serial3 a COMSerial. Así que puedes consultar la configuración AVR Mega.

- **SAMD:** Para el ejemplo de abajo, El SAMD no soporta serial por software. Usamos el serial por hardware **Serial1** para comunicarnos con el Módulo Grove-MP3 y **SerialUSB** para imprimir mensajes en PC.

- **STM32F4:** Para el ejemplo de abajo, Usamos el serial por hardware **Serial** para comunicarnos con el Módulo Grove-MP3 y **SerialUSB** para imprimir mensajes en PC.

:::note
    Para más información sobre el Serial, por favor consulta [Seeed Arduino Serial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Serial/).
:::

```
#ifdef __AVR__
#include <SoftwareSerial.h>
SoftwareSerial SSerial(2, 3); // RX, TX
#define COMSerial SSerial
#define ShowSerial Serial 

WT2003S<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define COMSerial Serial1
#define ShowSerial SerialUSB 

WT2003S<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
#define COMSerial Serial
#define ShowSerial SerialUSB 

WT2003S<HardwareSerial> Mp3Player;
#endif
```

- Ahora puedes escuchar canciones almacenadas en tu tarjeta SD. Y en el modo de reproducción, el indicador D1 está encendido. Si está en modo pausa, el indicador parpadeará. ¡Más experiencias te están esperando!

Hay otra forma de controlar el modo de reproducción MP3 a través de una herramienta serial. De esta manera, necesitas un [UartSBee](https://www.seeedstudio.com/depot/uartsbee-v4-p-688.html?cPath=63_66) para conectar el MP3 a la PC. La instalación del hardware se muestra a continuación:
![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Using_UartSBee_to_Control_MP3.jpg)

Después de completar la conexión, abre la herramienta serial para enviar comandos. ¡Sobre los comandos específicos, por favor consulta la parte de referencias!
![](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/img/Serial_tool_to_send_commands.jpg)

¡Más experiencias te están esperando!

Referencias
----------

Descripciones de Comandos Comunes:

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Nombre del Comando
</th>
<th scope="col">
Formato del Comando
</th>
<th scope="col">
Descripción
</th>
</tr>
<tr>
<th scope="row">
Pausa
</th>
<td>
7E 02 A3 7E
</td>
<td>
La música se detendrá cuando envíes este comando por primera vez. Después de reenviar este comando, continuará.
</td>
</tr>
<tr>
<th scope="row">
Detener
</th>
<td>
7E 02 A4 7E
</td>
<td>
Este comando puede activar la reproducción de la siguiente canción, o activar la reproducción de la primera si el reproductor está reproduciendo la última.
</td>
</tr>
<tr>
<th scope="row">
Siguiente
</th>
<td>
7E 02 A5 7E
</td>
<td>
Este comando puede activar la reproducción de la siguiente canción, o activar la reproducción de la primera si el reproductor está reproduciendo la última.
</td>
</tr>
<tr>
<th scope="row">
Anterior
</th>
<td>
7E 02 A6 7E
</td>
<td>
Este comando puede activar la reproducción de la canción anterior. Enviar este comando puede activar la reproducción de la última canción cuando estás disfrutando la primera.
</td>
</tr>
<tr>
<th scope="row">
Control de volumen
</th>
<td>
7E 03 A7 1F 7E
</td>
<td>
Hay 32 niveles de volumen del 00 al 31. 00 es silencio, y 31 para el volumen máximo.
</td>
</tr>
<tr>
<th rowspan="4" scope="row">
Modo de reproducción asignado
</th>
<td rowspan="4">
7E 03 A9 XX 7E
</td>
<td>
XX=00 significa reproducir una sola vez sin repetición (predeterminado)
</td>
</tr>
<tr>
<td>
XX=01 significa el modo de reproducción repetida de una sola canción
</td>
</tr>
<tr>
<td>
XX=02 significa que es el modo de reproducción repetida de todas las pistas.
</td>
</tr>
<tr>
<td>
XX=03 representa el patrón aleatorio.
</td>
</tr>
</table>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
--------

- [Archivo Eagle de Grove - Serial MP3 Play](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-UART_MP3_Play_Eagle_File.zip)
- [Esquema de Grove - Serial MP3 Play en formato PDF](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/Grove-Serial_MP3_Player.pdf)
- [Código de demostración en github](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)
- [Hoja de datos WT5001](https://files.seeedstudio.com/wiki/Grove-Serial_MP3_Player/res/WT5001_datasheet_V1.5.pdf)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_Serial_MP3_Player -->

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
