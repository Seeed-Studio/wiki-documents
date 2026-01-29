---
description: Introducción a ReSpeaker Lite
title: Introducción a ReSpeaker Lite
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reSpeaker_usb_v3
sku: 107990273,E24072601
last_update:
  date: 6/28/2024
  author: Jessie
---

## Introducción

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-107990273-respeaker-lite-45font.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

Impulsada por el chipset XMOS XU316 AI Sound and Audio, esta placa de desarrollo sobresale en el procesamiento de audio con su matriz integrada de doble micrófono, ideal para reconocimiento de voz y control por voz. Con algoritmos avanzados de front-end de audio integrados, el chip XU316 proporciona cancelación de interferencias, cancelación de eco y supresión de ruido. Soporta conexiones I2S y USB y es compatible con Seeed Studio XIAO ESP32S3 (Sense), Adafruit QT Py, Raspberry Pi y PC.

## Características

- **Matriz de Doble Micrófono para Captura de Voz de Campo Lejano**: Los 2 micrófonos digitales de alto rendimiento capturan y extraen habla y voz de campo lejano (hasta 3 metros) incluso en entornos ruidosos ya que cancela el ruido puntual usando entrada de dos micrófonos.
- **Algoritmos ASR de IA Integrados**: Impulsado por el chip XMOS XU-316 AI sound and audio, el kit incluye algoritmos de Comprensión de Lenguaje Natural para Cancelación de Interferencias (IC), Cancelación de Eco Acústico, Supresión de Ruido, Relación Voz-a-Ruido (VNR) y Control Automático de Ganancia (AGC), permitiendo captura de voz de alta calidad.
- **Adoptando Código Abierto**: Esta placa es compatible con plataformas de hardware populares (XIAO ESP32S3 (Sense), Adafruit QT Py) vía I2S, y compatible con Raspberry Pi, PC vía USB (Audio Class 2.0 (UAC2)).
- **LED RGB Integrado**: la placa cuenta con un LED RGB WS2812 programable, soportando efectos personalizados y ofreciendo una interfaz visual para sus aplicaciones.
- **Soporte de Fuente de Alimentación Externa**: esta placa soporta fuente de alimentación externa de 5V, que puede aplicarse flexiblemente en diferentes escenarios.
- **DFU para Desarrollo Personalizado**: la placa soporta actualización de firmware personalizado vía DFU-Util.

## Especificaciones

|**Chip Principal**|XMOS XU316|
| :- | :- |
|**Micrófonos Digitales**|Micrófonos Digitales de Alto Rendimiento \* 2|
|**Sensibilidad**|-26 dBFS|
|**Punto de Sobrecarga Acústica**|120 dBL|
|**SNR**|64 dBA|
|**Fuente de Alimentación**|USB 5V, Externa 5V|
|**Dimensiones**|35\*86 mm|
|**Salida de Audio**|Conector de Altavoz / Jack de Auriculares de 3.5mm|
|**Frecuencia de Muestreo Máxima**|16Khz|
|**Altavoz**|Soporta Altavoces Amplificadores de 5W.|

## Descripción del Hardware

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-9.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-10.png" alt="pir" width={800} height="auto" /></p>

## Distribución de Pines

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**Matriz de Doble Micrófono**|Proporciona entrada de audio de alta calidad.|
| :- | :- | :- |
|**2**|**Luz Indicadora de Alimentación**|Se ilumina cuando está encendido.|
|**3**|**Luz RGB**|WS2812 programable, proporciona interfaz visual|
|**4**|**Luz Indicadora de Silencio**|Se enciende en rojo cuando se presiona el botón de silencio.|
|**5**|**Botón USR**|Botón definido por el usuario.|
|**6**|**Botón de Silencio**|Silencia la entrada de audio cuando se presiona.|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(opcional)**|Para desarrollo e integración adicional.|
|**8**|**Procesador Principal XU316**|Responsable del procesamiento y transmisión de audio.|
|**9**|**Pad de Soldadura de Fuente de Alimentación Externa**|Soporta fuente de alimentación externa de 5V.|
|**10**|**Puerto USB Type-C**|Usado para alimentación y transmisión de datos.|
|**11**|**Conector de Altavoz**|Para salida de audio. Soporta altavoces amplificadores de 5W.|
|**12**|**Jack de auriculares de 3.5mm**|Salida de audio, Podemos conectar altavoces activos o auriculares a este puerto.|
|**13**|**Pad de alimentación externa 1**|Pines IO no utilizados en el XIAO ESP32.|
|**14**|**Pad de alimentación externa 2**|Pines IO no utilizados en el XU316.|
|**15**|**JTAG**|Para depuración y programación del XU316.|

## Comenzar

### Uso Inmediato

ReSpeaker Lite es una interfaz de voz modular plug-and-play, no requiere controlador, solo conéctalo a tu PC, verás un dispositivo de voz llamado 'ReSpeaker Lite'.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pc.png" alt="pir" width={500} height="auto" /></p>

### Actualizar firmware

#### [Descarga de Firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

:::tip nota
Hay 2 versiones para la placa ReSpeaker Lite:

Para usarla como dispositivo de sonido USB, por favor flashea el firmware versión USB (firmware por defecto).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-version.png" alt="pir" width={300} height="auto" /></p>

Para usarla con XIAO ESP32S3, por favor flashea el firmware versión I2S.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-version.png" alt="pir" width={300} height="auto" /></p>
:::

#### Cableado

Conecta la Placa ReSpeaker Lite a tu PC vía el cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-connect.png" alt="pir" width={500} height="auto" /></p>

#### Instalar DFU Util

[dfu-util](http://dfu-util.sourceforge.net/) es una herramienta de línea de comandos para Device Firmware Upgrade vía puerto USB.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="win" label="Windows">

- Descarga `dfu-util-0.11-binaries.tar.xz` y extráelo a tu sistema local,
  ej., D:\

- Cambia el directorio al `dfu-util.exe`<br/>
  ej., D:\dfu-util-0.11-binaries\win64\(si estás usando win32, por favor cambia win64 a win32)

- Agrega la ruta del `dfu-util.exe` a la variable de entorno del sistema Path: `My Computer` > `Properties` > `Advanced` > `Environment Variables` > `Path`.
 Por favor nota que las rutas en la variable Path están separadas por punto y coma ;.
 Esto permitirá que dfu-util sea ejecutado globalmente en el símbolo del sistema.

- Abre el menú de inicio y escribe cmd. Presiona la tecla enter. En la terminal que aparece, verifica si la ruta de dfu-util.exe está configurada con el comando dfu-util -V:

```
C:\Users\yiping>dfu-util -V
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/
```

- Ejecuta `dfu-util -l` para verificar si ReSpeaker Lite es detectado:

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

- Encuentra `ReSpeaker 2 Mics Array` o `ReSpeaker Lite` o DFU `FACTORY (Interface 3)` de la lista de dispositivos, instala el controlador `WINUSB v6.x.xxxx.xxxxx`.

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-2mic.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-lite.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-fac.png" alt="pir" width={500} height="auto" /></p>

- Después de que la instalación esté completada (eso tomará unos minutos), por favor haz un ciclo de alimentación y ejecuta `dfu-util -l` de nuevo, ReSpeaker Lite debería ser detectado ahora

</TabItem>

<TabItem value="mac" label="MacOS">

- Instala dfu-util con [brew](https://brew.sh/): `brew install dfu-util`

- Ejecuta `dfu-util -l` para verificar si ReSpeaker Lite es detectado:

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

- Ejecuta `sudo dfu-util -l` para verificar si ReSpeaker Lite es detectado:

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

#### Flashear Firmware

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
Después de completar el flasheo, reinicia la placa.
:::

- Verifica la versión del firmware:

```
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

## Comparación

||[ReSpeaker Lite](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)|[ReSpeaker Mic Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html)|[reSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)|
|--|--|--|--|
||<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={150} height="auto" /></p>|<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-array2.0.png" alt="pir" width={150} height="auto" /></p>|<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-pi-hat.png" alt="pir" width={150} height="auto" /></p>|
|<p style={{textAlign: 'center'}}>Chip Principal</p>|<p style={{textAlign: 'center'}}>XMOS XU316</p>|<p style={{textAlign: 'center'}}>XMOS XVF-3000</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Micrófonos</p>|<p style={{textAlign: 'center'}}>Micrófonos MEMS PDM x2</p>|<p style={{textAlign: 'center'}}>Micrófonos MEMS PDM x4</p>|<p style={{textAlign: 'center'}}>Micrófonos MEMS Analógicos x2</p>
|<p style={{textAlign: 'center'}}>Distancia de Captura de Voz</p>|<p style={{textAlign: 'center'}}>3m</p>|<p style={{textAlign: 'center'}}>5m</p>|<p style={{textAlign: 'center'}}>3m</p>|
|<p style={{textAlign: 'center'}}>Sensibilidad</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Punto de Sobrecarga Acústica</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>SNR</p>|<p style={{textAlign: 'center'}}>64 dB</p>|<p style={{textAlign: 'center'}}>63 dB</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Algoritmos de Procesamiento de Audio Integrados</p>|<ul><li>Cancelación de Eco Acústico (AEC)</li><li>Control Automático de Ganancia (AGC)</li><li>Supresión de Ruido (NS)</li><li>Cancelación de Interferencias (IC)</li><li>Relación Voz-Ruido (VNR)</li></ul>|<ul><li>Cancelación de Eco Acústico (AEC)</li><li>Control Automático de Ganancia (AGC)</li><li>Supresión de Ruido (NS)</li><li>Formación de Haz</li><li>Dirección de Llegada (DoA)</li><li>Desreverberación</li><li>Detección de Actividad de Voz (VAD)</li></ul>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Hardware Compatible</p>|<ul><li>XIAO ESP32S3(Sense)</li><li>Adafruit QT Py vía I2S</li><li>Raspberry Pi</li><li>Cualquier computadora o SBC ejecutando Linux, macOS y Windows vía USB</li></ul>|<ul><li>Raspberry Pi</li><li>Cualquier computadora o SBC ejecutando Linux, macOS y Windows vía USB</li></ul>|Solo Raspberry Pi|
|<p style={{textAlign: 'center'}}>Perfecto para</p>|Captura de sonido direccional, ideal para configuraciones lineales o alargadas|Captura de sonido omnidireccional y localización, mejor ubicado en el centro de entornos abiertos y multidireccionales|Captura de sonido direccional, ideal para configuraciones lineales o alargadas|

### FAQ

- **No se puede encontrar el dispositivo de sonido `ReSpeaker Lite`.**

 Verifica la versión del firmware, asegúrate de que el firmware sea versión USB y superior a `2.0.5`.

 ```
 dfu-util -l
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

 Si no es versión USB, sigue [este paso](https://wiki.seeedstudio.com/es/reSpeaker_usb_v3/#flash-firmware) para flashear el firmware.

- **¿No se puede detectar el dispositivo de sonido USB ReSpeaker Lite en Windows después de flashear el firmware USB?**

- Abre el menú de inicio y escribe "Device manager". Encuentra el dispositivo `ReSpeaker Lite`, haz clic derecho sobre él y selecciona "Uninstall device". Selecciona "Delete the driver software for this device" y haz clic en "Uninstall". Después de eso, reinicia el dispositivo y Windows reinstalará automáticamente el controlador de tarjeta de sonido correcto.

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### Recursos

[Firmware XMOS de ReSpeaker Lite](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[Github de ReSpeaker Lite](https://github.com/respeaker/ReSpeaker_Lite/)

[Archivo 3D de ReSpeaker Lite](https://files.seeedstudio.com/wiki/respeakerv3/ReSpeakerLitev1.1.step)
