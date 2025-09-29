---
description: Music_Shield_V2.2
title: Music Shield V2.2

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Music_Shield_V2.2
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_Shield_Picture.jpg" alt="pir" width={600} height="auto" /></p>

¡Es hora de construir tu instrumento MIDI/reproductor de música en tiempo real! Puede reproducir muchos formatos incluyendo MP3, WMA, WAV, AAC, MIDI, Ogg Vorbis. El Music Shield es un codificador/decodificador de audio compatible con Arduino, Seeeduino, Seeeduino Mega y Arduino Mega. Está basado en el chip VC1053B, que le permite reproducir archivos de sonido desde tarjeta SD y también realizar grabaciones de corta duración. También puedes usarlo para reproducir notas MIDI cambiando ligeramente sus instalaciones de hardware. Debido al modo de comunicación SPI, mantiene un número mínimo de puertos IO que facilita los desarrollos propios de los usuarios de este dispositivo. Además, el nuevo botón multifunción proporciona mayor comodidad para que los usuarios controlen.

:::note
La función de grabación funciona solo con Seeeduino Mega y Arduino Mega. Y el tamaño máximo de tarjeta SD que puedes usar es de 2GB.
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/Music-Shield-V20-p-1372.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

Descripción General del Hardware
-----------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_frame.jpg" alt="pir" width={600} height="auto" /></p>

**Botón multifunción:** Cambiar volumen y seleccionar canciones.

**LED indicador de Reproducir/Pausa (VERDE)：**Parpadea mientras reproduce.

**Interfaz de auriculares:** Puede manejar auriculares de 16 ohm o 32 Ohm y podría servir como puerto de entrada de audio externo.

**Tarjeta Micro SD**: Puede ser FAT16 o FAT32, el tamaño máximo de tarjeta SD que puedes usar es de 2GB.

**U2:** IC VS1053B, códec de audio Ogg Vorbis/MP3/AAC/WMA/FLAC/MIDI.

**U3,U7:** IC 74VHC125, Buffer Cuádruple

**I2S:** Para entrada/salida de audio digital.

**Interfaz ISP**: para proporcionar puerto SPI cuando se usa con productos de la serie Mega.

***Uso de pines en Arduino***

**Pines usados para Control de Reproducción:**

D3 - Recibir señal del botón para Subir Volumen.

D4 - Recibir señal del interruptor para función de Siguiente Canción.

D5 - Recibir señal del interruptor para función de Reproducir&Parar y Grabar.

D6 - Recibir señal del interruptor para función de Canción Anterior.

D7 - Recibir señal del botón para Bajar Volumen.

D8 - Instrucciones del Led Verde.

**Pines Usados para Interfaz SPI:**

D10 - Selección de Chip SPI

D11 - SPI MOSI

D12 - SPI MISO

D13 - SPI SCK

**Pines Usados para Interfaz VS1053:**

A0 - Reset de VS1053

A1 - Requerimiento de Datos de VS1053

A2 - Selección de Datos de VS1053

A3 - Selección de Chip de VS1053

Primeros Pasos
---------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield4.jpg" alt="pir" width={600} height="auto" /></p>

:::note
<ol><li>Si quieres usar la función MIDI, necesitas cambiar la instalación del hardware.</li>
<li>Si cambiaste la instalación del hardware para usar la función MIDI, no podrás usar las funciones de reproducción y grabación hasta que la restaures a la condición original.</li></ol>
:::

### **Reproducir música**

1. Asegúrate de que hay canciones en la tarjeta micro SD.
2. Descarga la [biblioteca Music shield V2.0](https://github.com/Seeed-Studio/Music_Shield)
3. Descomprime y copia la carpeta a la ruta de bibliotecas de Arduino: ..\arduino-1.0\libraries.

:::note

1. Cambia el nombre de la carpeta de la biblioteca extraída si Arduino arroja un error al cargar.<br />
2. Cambia el encabezado incluido (a Arduino.h) en el archivo de ejemplo si hay un error `arduino.h: No such file or directory` al compilar.
:::

**Demo 1: Reproducir canciones (ej. en modo aleatorio)**

Para usar la función de reproducción, necesitas crear primero una lista de reproducción.

1. Reinicia el IDE de Arduino. Abre el ejemplo "creatList" a través de la ruta: File --> Examples --> MusicPlayer --> creatList como se muestra abajo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/OpenCreatListCode.jpg" alt="pir" width={600} height="auto" /></p>

2. Establece el modo de reproducción. En "creatList", la función que usamos se describe como sigue.

    **Nombre:** setPlayMode(unsigned char playmode);

    **Función:** Establece el modo de reproducción. Hay cuatro modos que puedes configurar: MODE_NORMAL, MODE_SHUFFLE, MODE_REPEAT_LIST, MODE_REPEAT_ONE. Cada modo representa diferentes órdenes de reproducción.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Play_Mode.jpg" alt="pir" width={600} height="auto" /></p>

3. Selecciona el tipo de placa Arduino que estás usando por la ruta: Tools --> Board --> por ejemplo Arduino UNO.
4. Selecciona el puerto serie correcto que estás usando por la ruta: Tools --> Serial Port --> por ejemplo COM3.
5. Sube el código. Haz clic en Monitor Serie cuando aparezca "Done uploading", encontrarás que el orden de las canciones está aleatorizado en la lista.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Play_List.jpg" alt="pir" width={600} height="auto" /></p>

Cuando el botón multifunción se presiona hacia arriba o abajo, el volumen cambiará. Por supuesto, puedes probar otros modos de reproducción.

**Demo 2: Reproducir canciones seleccionadas**

1. Esta demostración te mostrará cómo reproducir parte de las canciones de todas las canciones en la tarjeta SD. Abre el ejemplo "addToList" a través de la ruta: File --> Examples --> MusicPlayer --> addToList.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Select_play.jpg" alt="pir" width={600} height="auto" /></p>

2. Selecciona canciones de la lista de reproducción. Solo necesitas listar las canciones que quieres reproducir por nombre correctamente en la función addToPlayList(char *songName).
Pero debes asegurar que la canción haya sido almacenada en la tarjeta SD y el formato de esas canciones debe ser uno de MP3,WMA,WAV,AAC,MIDI,Ogg Vorbis.

3. Sube el código. Cuando completes la subida, las nuevas canciones agregadas serán reproducidas.

**Demo 3: Controlar volumen por puerto analógico**

1. Conecta el Grove-Base Shield al Music shield, Conecta el socket Grove del Rotary y el puerto analógico 4 del Base Shield con un cable Grove. También puedes cambiar al puerto digital. Pero no olvides cambiar el número de puerto en la definición del código de demostración al mismo tiempo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_5.jpg" alt="pir" width={600} height="auto" /></p>

2. Abre el ejemplo "analogInputControl" y súbelo a tu placa Arduino.

3. Gira la perilla para cambiar el volumen de la música.

**Demo 4: Grabar música:(Solo compatible con placas basadas en ATmega1280 y ATmega2560)**

1. Sube cualquier sketch de la librería Music Shield, por ejemplo el sketch "creatList". Abre el Monitor Serie y reproducirá archivos de audio en la tarjeta SD.
2. Presiona el botón multifunción durante 5 segundos, entonces el LED indicador se apagará.
3. Presiona el botón multifunción durante 5 segundos nuevamente, entonces el music shield comenzará a grabar, el LED indicador verde parpadeará.
4. Presiona rápidamente el botón multifunción otra vez, dejará de grabar.
5. La grabación se reproducirá en el último lugar.

**Demo 5: Usando MIDI**

1. Esta demostración te mostrará cómo reproducir notas desde 3.5mm usando MIDI. Abre el ejemplo "MidiDemoPlayer" a través de la ruta: File --> Examples --> MusicPlayer --> MidiDemoPlayer.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_midi_demo.jpeg" alt="pir" width={600} height="auto" /></p>

2. Sube el código a tu arduino UNO.

Referencia
---------

**Lista de referencia de número MIDI a nota**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/MIDIlist.gif" alt="pir" width={600} height="auto" /></p>

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Archivos Eagle Music Shield V2.2](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2.zip)
- [Esquemático Music Shield V2.2.pdf](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2_pdf.pdf)
- [Hoja de datos VS1053](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/VS1053.pdf)
- [Librerías Music Shield](https://github.com/Seeed-Studio/Music_Shield)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Music_Shield_V2.2 -->

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
