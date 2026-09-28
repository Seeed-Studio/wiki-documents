---
description: ReSpeaker Lite es una placa de desarrollo de interfaz de voz USB/I2S con alimentación XMOS XU316 y una matriz de micrófonos dual para captura de voz de campo lejano. Incorpora algoritmos de front-end de audio con IA integrados, incluidos cancelación acústica de eco, supresión de ruido, cancelación de interferencias y control automático de ganancia. Comienza con el flasheo de firmware, el cableado y el uso listo para usar.
title: Introducción a reSpeaker Lite
keywords:
  - ReSpeaker
  - Xiao esp32
  - Asistente de voz 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reSpeaker_usb_v3
sku: 107990273,E24072601
last_update:
  date: 6/28/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-02-12'
url: https://wiki.seeedstudio.com/es/reSpeaker_usb_v3/
---

## Introducción


<table align="center">
  <tr>
    <th>reSpeaker Lite Matriz de 2 micrófonos con XIAO ESP32-S3 </th>
    <th>reSpeaker Lite Matriz de 2 micrófonos </th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/9/0/904832d1-b0d8-461a-bbbc-cbfa5a1f71a9.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-107990273-respeaker-lite-45font.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>


Impulsada por el chipset de sonido y audio con IA XMOS XU316, esta placa de desarrollo sobresale en el procesamiento de audio con su matriz de micrófonos dual integrada, ideal para reconocimiento de voz y control por voz. Con avanzados algoritmos de front-end de audio integrados, el chip XU316 proporciona cancelación de interferencias, cancelación de eco y supresión de ruido. Es compatible con conexiones I2S y USB y es compatible con Seeed Studio XIAO ESP32S3 (Sense), Adafruit QT Py, Raspberry Pi y PC.

## Características

- **Matriz de micrófonos dual para captura de voz de campo lejano**: Los 2 micrófonos digitales de alto rendimiento capturan y extraen voz y habla de campo lejano (hasta 3 metros) incluso en entornos ruidosos, ya que cancelan el ruido puntual utilizando dos entradas de micrófono.
- **Algoritmos de IA ASR integrados**: Impulsado por el chip de sonido y audio con IA XMOS XU-316, el kit incluye algoritmos de comprensión del lenguaje natural para cancelación de interferencias (IC), cancelación acústica de eco, supresión de ruido, relación voz-ruido (VNR) y control automático de ganancia (AGC), lo que permite una captura de voz de alta calidad.
- **Adopción del código abierto**：Esta placa es compatible con plataformas de hardware populares (XIAO ESP32S3 (Sense), Adafruit QT Py) mediante I2S, y compatible con Raspberry Pi y PC mediante USB (Audio Class 2.0 (UAC2)).
- **LED RGB integrado**: la placa incorpora un LED RGB WS2812 programable, que admite efectos personalizados y ofrece una interfaz visual para tus aplicaciones.
- **Compatibilidad con fuente de alimentación externa**: esta placa admite una fuente de alimentación externa de 5 V, que puede aplicarse de forma flexible en diferentes escenarios.
- **DFU para desarrollo personalizado**: la placa admite actualización de firmware personalizado mediante DFU-Util.

## Especificación

|**Chip principal**|XMOS XU316|
| :- | :- |
|**Micrófonos digitales**|Micrófonos digitales de alto rendimiento \* 2|
|**Sensibilidad**|-26 dBFS|
|**Punto de sobrecarga acústica**|120 dBL|
|**SNR**|64 dBA|
|**Fuente de alimentación**|USB 5V, 5V externa|
|**Dimensiones**|35\*86 mm|
|**Salida de audio**|Conector para altavoz / Jack de auriculares de 3,5 mm|
|**Frecuencia de muestreo máxima**|16Khz|
|**Altavoz**|Admite altavoces amplificados de 5 W.|

## Descripción del hardware

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-9.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-10.png" alt="pir" width={800} height="auto" /></p>

## Distribución de pines

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**Matriz de micrófonos dual**|Proporciona entrada de audio de alta calidad.|
| :- | :- | :- |
|**2**|**Luz indicadora de encendido**|Se ilumina cuando está encendido.|
|**3**|**Luz RGB**|WS2812 programable, proporciona interfaz visual|
|**4**|**Luz indicadora de silencio**|Se ilumina en rojo cuando se pulsa el botón de silencio.|
|**5**|**Botón USR**|Botón definido por el usuario.|
|**6**|**Botón de silencio**|Silencia la entrada de audio cuando se pulsa.|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(opcional)**|Para mayor desarrollo e integración.|
|**8**|**Procesador central XU316**|Responsable del procesamiento y la transmisión de audio.|
|**9**|**Almohadilla de soldadura para fuente de alimentación externa**|Admite fuente de alimentación externa de 5 V.|
|**10**|**Puerto USB tipo C**|Se utiliza para alimentación y transmisión de datos.|
|**11**|**Conector para altavoz**|Para salida de audio. Admite altavoces amplificados de 5 W.|
|**12**|**Jack de auriculares de 3,5 mm**|Salida de audio. Podemos conectar altavoces activos o auriculares a este puerto.|
|**13**|**Almohadilla de alimentación externa 1**|Pines IO no utilizados en el XIAO ESP32.|
|**14**|**Almohadilla de alimentación externa 2**|Pines IO no utilizados en el XU316.|
|**15**|**JTAG**|Para depuración y programación del XU316.|

## Primeros pasos

### Uso listo para usar

ReSpeaker Lite es una interfaz de voz modular plug-and-play, no requiere controlador, solo conéctala a tu PC y verás un dispositivo de voz llamado 'ReSpeaker Lite'.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pc.png" alt="pir" width={500} height="auto" /></p>

### Actualizar firmware

#### [Descarga de firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

:::tip note
Hay 2 versiones para la placa ReSpeaker Lite:

Para usarla como un dispositivo de sonido USB, por favor flashea el firmware de la versión USB (firmware predeterminado).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/lite_newss/usb_firmware.png" alt="pir" width={900} height="auto" /></p>

Para usarla con XIAO ESP32S3, por favor flashea el firmware de la versión I2S.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/lite_newss/i2s_firmware.png" alt="pir" width={900} height="auto" /></p>
:::

#### Cableado

Conecta la placa ReSpeaker Lite a tu PC mediante el cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-connect.png" alt="pir" width={500} height="auto" /></p>

#### Instalar DFU Util

[dfu-util](http://dfu-util.sourceforge.net/) es una herramienta de línea de comandos para la actualización de firmware de dispositivos a través del puerto USB.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="win" label="Windows">

- Descarga `dfu-util-0.11-binaries.tar.xz` y extráelo en tu sistema local,
  por ejemplo, D:\

- Cambia el directorio a `dfu-util.exe`<br/>
  por ejemplo, D:\dfu-util-0.11-binaries\win64\(si estás usando win32, por favor cambia win64 a win32)

- Añade la ruta de `dfu-util.exe` a la variable de entorno del sistema Path: `My Computer` > `Properties` > `Advanced` > `Environment Variables` > `Path`.
 Ten en cuenta que las rutas en la variable Path están separadas por punto y coma ;.
 Esto permitirá que dfu-util se ejecute globalmente en el símbolo del sistema.

- Abre el menú de inicio y escribe cmd. Pulsa la tecla Enter. En la terminal que aparece, comprueba si la ruta de dfu-util.exe está configurada con el comando dfu-util -V:

```
C:\Users\yiping>dfu-util -V
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/
```

- Ejecuta `dfu-util -l` para comprobar si se detecta ReSpeaker Lite:

```
C:\Users\yiping>dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=0, name="DFU FACTORY", serial="0000000001"
```

:::tip
Si obtienes un error "Cannot open DFU device" como este, por favor continúa siguiendo este paso. Si no, por favor ve al Paso 3 para flashear el firmware.
:::

```
C:\Users\yiping>dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Cannot open DFU device 2886:0019 found on devnum 9 (LIBUSB_ERROR_NOT_SUPPORTED)
```

- Instala [Zadig](https://zadig.akeo.ie/) y ábrelo. Haz clic en `Options` -> `List All Devices`.

- Busca `ReSpeaker 2 Mics Array` o `ReSpeaker Lite` o DFU `FACTORY (Interface 3)` en la lista de dispositivos e instala el controlador `WINUSB v6.x.xxxx.xxxxx`.

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-2mic.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-lite.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-fac.png" alt="pir" width={500} height="auto" /></p>

- Una vez completada la instalación (esto tomará unos minutos), por favor realiza un ciclo de encendido y ejecuta `dfu-util -l` de nuevo, ReSpeaker Lite debería ser detectado ahora mismo

</TabItem>

<TabItem value="mac" label="MacOS">

- Instala dfu-util con [brew](https://brew.sh/): `brew install dfu-util`

- Ejecuta `dfu-util -l` para comprobar si se detecta ReSpeaker Lite:

```
➜  ~ dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=0, name="DFU FACTORY", serial="0000000001"
```

</TabItem>

<TabItem value="lin" label="Linux">

- Instala dfu-util con apt: `sudo apt install dfu-util`

- Ejecuta `sudo dfu-util -l` para comprobar si se detecta ReSpeaker Lite:

```
pi@raspberrypi:~ $ sudo dfu-util -l
dfu-util 0.9

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2016 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=0, name="DFU FACTORY", serial="0000000001"
```

</TabItem>

</Tabs>

#### Flashear firmware

- Conecta la placa ReSpeaker a tu PC.

- Ejecuta el siguiente comando `dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin`:
  - En Linux ejecuta `sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin`

```
C:\Users\yiping>dfu-util -R -e -a 1 -D D:\Downloads\respeaker_lite_i2s_dfu_firmware_v1.0.7.bin
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Warning: Invalid DFU suffix signature
A valid DFU suffix will be required in a future dfu-util release
Opening DFU capable USB device...
Device ID 2886:0019
Device DFU version 0101
Claiming USB DFU Interface...
Setting Alternate Interface #1 ...
Determining device status...
DFU state(2) = dfuIDLE, status(0) = No error condition is present
DFU mode device DFU version 0101
Device returned transfer size 4096
Copying data from PC to DFU device
Download        [=========================] 100%       270336 bytes
Download done.
DFU state(7) = dfuMANIFEST, status(0) = No error condition is present
DFU state(2) = dfuIDLE, status(0) = No error condition is present
Done!
Resetting USB to switch back to Run-Time mode
```

:::caution
Después de que termine el flasheo, reinicia la placa.
:::

- Comprueba la versión del firmware:

```
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>


## Grabación y reproducción 

### Configurar Audacity 

1. Abre **Audacity**
2. Ve a **Audio Setup > Audio Settings**


3. Configura:
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker Lite`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz` (tanto para **Project** como para **Default Sample Rate**)
   - **Sample Format**: `32-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/lite_newss/audio_settings.png" alt="pir" width={600} height="auto"/></p>

1. Haz clic en **OK**
2. Ya estás listo: ¡empieza a grabar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/lite_newss/audio_recording .png" alt="pir" width={600} height="auto"/></p>

### Preguntas frecuentes

- **No se puede encontrar el dispositivo de sonido `ReSpeaker Lite`.**

 Comprueba la versión del firmware, asegúrate de que el firmware sea la versión USB y superior a `2.0.5`.

 ```
 dfu-util -l
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

 Si no es la versión USB, sigue [este paso](https://wiki.seeedstudio.com/es/reSpeaker_usb_v3/#flashear-firmware) para flashear el firmware.

- **¿No se puede detectar el dispositivo de sonido USB ReSpeaker Lite en Windows después de flashear el firmware USB?**

- Abre el menú de inicio y escribe `Device manager`. Busca el dispositivo `ReSpeaker Lite`, haz clic derecho sobre él y selecciona `Uninstall device`. Selecciona `Delete the driver software for this device` y haz clic en `Uninstall`. Después de eso, reinicia el dispositivo y Windows volverá a instalar el controlador de tarjeta de sonido correcto.

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### Recursos

[ReSpeaker Lite XMOS Firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)

[ReSpeaker Lite 3D file](https://files.seeedstudio.com/wiki/respeakerv3/ReSpeakerLitev1.1.step)
