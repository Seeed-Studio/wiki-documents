---
description: Music Shield V1.0
title: Music Shield V1.0
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Music_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name:  Music Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Music_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Music_Shield_V1-0
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/Musicshieldnew500.jpg)

El Music Shield es un códec de audio profesional. Puede funcionar con Arduino, Seeeduino, Seeeduino Mega y Arduino Mega. Está basado en el IC VS1053b, y puede reproducir una variedad de formatos de música almacenados en tarjetas MicroSD con la librería de Arduino proporcionada por Seeed.

Nota: La grabación solo es compatible con Seeeduino Mega y Arduino Mega por ahora.

## Características ##

- Compatible con Arduino, Seeeduino, Arduino Mega y Seeeduino Mega

- 2 botones de control y 1 interruptor de perilla

- Reproduce música desde tarjetas micro SD Decodifica: MP3, WAV, MIDI, Ogg Vorbis

- Interfaz I2S para DAC externo

- Salida de auriculares/línea para reproducción

- Entrada de línea para grabación en formato OGG

- Excelente calidad de sonido con respuesta de frecuencia de ±1dB

- Verificación FCC

## Especificaciones ##

|Elemento| Mín|Típico|Máx| Unidad|
|--|--|--|--|--|
| Voltaje|4.5| 5|5.5| VDC|
| Corriente| /| /| 70|mA|
 |Relación S/N de Salida (Con Ponderación A)|/| 60|/|dB|
 |Aislamiento de Canal (Con Ponderación A)|/|50|/|dB|
 |Respuesta de Frecuencia|-1|/|1|dB|
 |Distorsión de Señal|/|/|0.5%|/|
 |Salida Máxima (cada canal con carga de 16 ohm)|500|/|/|mV|
 |Interfaz de Audio|Conector de Audio de 3.5mm|||/|
 |Formato Compatible|MP3, WAV,MIDI, Ogg|||/|
 |Tarjeta SD Compatible|Tarjeta Micro SD|||/|
 |Descarga de contacto ESD|±4|||KV|
 |Descarga de aire ESD|±8|||/|
|Dimensión|80.4x52.5x13.9|||mm|
 |Peso Neto|11±2|||g|

## Función de la Interfaz ##

![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/MusicShield-hard.jpg)

**Botón multifunción:** Girar a la izquierda para reproducir la canción anterior, y a la derecha para la siguiente canción, mientras se presiona hacia abajo para pausar y reanudar.

**LED indicador de volumen (ROJO):** Si aumenta el volumen, el LED rojo será más brillante.

**LED indicador de Reproducir/Pausar (VERDE):** Si está reproduciendo, el LED verde parpadea.

**Salida de línea** puede manejar auriculares de 16 ohm o 32 ohm.

**Entrada de línea** se usa para grabar audio de otros recursos.

**Tarjeta Micro SD** puede ser FAT16 o FAT32, y no se admite un tamaño mayor a 2GB. (NOTA IMPORTANTE: El código de ejemplo incluido con la biblioteca solo usará tarjetas formateadas en FAT16)

**I2S y GPIO** son para salida de audio digital.

**Interfaz ISP** se mantiene para proporcionar puerto SPI cuando se usa con Mega.

### Uso de pines en Arduino ###

**D0** - Sin usar.

**D1** - Sin usar.

**D2** - Usado para recibir señal del dock de iPod (podría usarse para su propia aplicación si no se usa el dock de iPod).

**D3** - Usado para recibir señal del botón para Subir Volumen (podría usarse para su propia aplicación si no se usa el interruptor).

**D4** - Usado para recibir señal del interruptor para la función de Siguiente Canción (podría usarse para su propia aplicación si no se usa el interruptor).

**D5** - Usado para recibir señal del interruptor para las funciones de Reproducir&Detener y Grabar (podría usarse para su propia aplicación si no se usa el interruptor).

**D6** - Usado para recibir señal del interruptor para la función de Canción Anterior (podría usarse para su propia aplicación si no se usa el interruptor).

**D7** - Usado para recibir señal del botón para Bajar Volumen (podría usarse para su propia aplicación si no se usa el interruptor).

**D8** - Usado para instrucciones del Led Verde (podría usarse para su propia aplicación si no se usa el interruptor).

**D9** - Usado para instrucciones del Led Rojo (podría usarse para su propia aplicación si no se usa el interruptor).

**D10** - Usado para Selección de Chip SPI.

**D11** - Usado para SPI MOSI.

**D12** - Usado para SPI MISO.

**D13** - Usado para SPI SCK.

**D14(A0)** - Usado para Reset del VS1053.

**D15(A1)** - Usado para Solicitud de Datos del VS1053.

**D16(A2)** - Usado para Selección de Datos del VS1053.

**D17(A3)** - Usado para Selección de Chip del VS1053.

**D18(A4)** - Sin usar.

**D19(A5)** - Sin usar.

## Uso ##

### Instalación de Hardware ###

Inserte la tarjeta Micro SD y los auriculares; Conecte el Music Shield al Arduino/Seeeduino; Conecte la placa a la PC usando cable USB. ![](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/MusicInstall.jpg)

### Instalación de Software ###

Reproducir música:

1.Asegúrese de que hay canciones en la tarjeta micro sd.

2.Descargue [File:Music v1 14.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_v1_14.zip)  y [File:NewSoftSerial.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/NewSoftSerial.zip)  para el music shield.

3.Descomprima estos dos paquetes y póngalos en el programa Arduino-0022: ..\arduino-0022\libraries

4.**[Ignore esto si está en Linux]** Descargue un nuevo archivo **portpins.h** y reemplace el archivo portpins.h predeterminado del programa Arduino-0022: ..\arduino-0022\hardware\tools\avr\avr\include\avr

5.Seleccione la placa Arduino correspondiente, como Arduino UNO o Duemilanove u otras.

6.Ejecute el programa arduino, compile y cargue el sketch en la placa Arduino.

7.Solo disfrute.

**Grabar música:**(Solo compatible con placas basadas en ATmega1280 y ATmega2560)

1.Presione la perilla de reproducir/detener antes de presionar el botón RESET del **Arduino**.

2.Suelte el botón RESET por un segundo y luego suelte la perilla de reproducir/detener. Cuando el music shield comience a grabar, los LEDs verde y rojo parpadearán de forma sincronizada.

3.Presionar la perilla de reproducir/detener detendrá la grabación.

Para Arduino 1.0:
Atención Por Favor: La biblioteca de Fat16 entre demo-1 y demo-2 es diferente, así que por favor confirme que descarga una biblioteca correspondiente cuando use las dos demos. Y las dos bibliotecas no pueden existir juntas, así que elimine una antes de usar la otra.

- Demo 1: Usar biblioteca SD

Esta demo usará la biblioteca SD que viene con Arduino 1.0.

1.Asegúrese de que hay canciones en la tarjeta micro sd.

2.Descargue [File:MusicPlayer v1 7.zip](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicPlayer_v1_7.zip)  y [Fat16](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Demo1_Fat16.zip) para el music shield.

3.Descomprima el paquete y póngalo en el programa Arduino-1.0: ..\arduino-1.0\libraries

4.Seleccione la placa Arduino correspondiente, como Arduino UNO o Duemilanove u otras.

5.[Ignore esto si está en Linux] Descargue un nuevo archivo **portpins.h** y reemplace el archivo portpins.h predeterminado del programa Arduino-1.0: ..\arduino-1.0\hardware\tools\avr\avr\include\avr

6.Ejecute el programa arduino, compile y cargue el sketch de music_v1_2 -> musicPlayAll en la placa Arduino.

- Demo 2: Usar biblioteca Fat16

Esta demo usará una biblioteca de código abierto [Music_Shield_Demo_2_Library](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield_Demo_2_Library.zip). Hay dos sketches en esta demo: Usando el sketch MusicPlayRandomly, puede hacer que la música se reproduzca aleatoriamente. Y usando MusicPlayWithName, puede especificar qué canción reproducir por nombre. (Nota: La demo no puede coexistir con la demo 1 en las bibliotecas)

1.Asegúrese de que hay canciones en la tarjeta micro sd.

2.Descargue [Music_Shield_Demo_2_Library](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield_Demo_2_Library.zip) para el music shield.

3.[En Linux] Copie libraries/Fat16/Fat16util.h a libraries/Fat16/Fat16Util.h (note util vs Util). Los includes tienen el caso incorrecto y esta es la solución más fácil.

4.Descomprima estos dos paquetes y póngalos en el programa Arduino-1.0: ..\arduino-1.0\libraries

5.Selecciona la placa Arduino correspondiente, como Arduino UNO o Duemilanove u otras.

6.[Ignora esto si estás en Linux] Descarga un nuevo archivo **portpins.h** y reemplaza el archivo portpins.h predeterminado del programa Arduino-1.0: ..\arduino-1.0\hardware\tools\avr\avr\include\avr

7.Ejecuta el programa arduino, compila y sube el sketch de MusicShieldNewSdLib a la placa Arduino.

Nota: Sobre los métodos específicos de algunas funciones en la biblioteca, puedes consultar [la instalación de software](https://wiki.seeedstudio.com/es/Music_Shield_V1.0/#software-installation) del Music Shield V2.0.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicShielEagleFiles.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Eagle]**[Archivos Eagle de Music Shield](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicShielEagleFiles.zip)
- **[PDF]**[PDF de Music Shield](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music%20Shield.pdf)
- **[Eagle]**[Esquema de Music Shield](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music%20Shield.sch)
- **[PDF]**[PDF del esquema de Music Shield](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield.pdf)
- **[Library]**[Archivo de código fuente de Music Shield para Arduino 0022](https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_v1_14.zip)

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
