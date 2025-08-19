---
description: Getting Started with ReSpeaker Lite
title: Primeros Pasos con ReSpeaker Lite
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reSpeaker_usb_v3
last_update:
  date: 07/20/2025
  author: Guillermo
---

## Introducción

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-107990273-respeaker-lite-45font.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

Impulsado por el chipset de sonido y audio AI XMOS XU316, esta placa de desarrollo destaca en procesamiento de audio con su matriz integrada de doble micrófono, ideal para reconocimiento de voz y control por voz. Con avanzados algoritmos onboard de audio front-end, el chip XU316 ofrece cancelación de interferencias, cancelación de eco y supresión de ruido. Soporta conexiones I2S y USB, y es compatible con Seeed Studio XIAO ESP32S3 (Sense), Adafruit QT Py, Raspberry Pi y PC.

## Características

* **Matriz de Doble Micrófono para Captura de Voz a Distancia**: Los 2 micrófonos digitales de alto rendimiento capturan y extraen voz a distancia (hasta 3 metros) incluso en entornos ruidosos, cancelando ruido puntual mediante la entrada de dos micrófonos.
* **Algoritmos AI ASR Integrados**: Impulsado por el chip de sonido y audio AI XMOS XU-316, el kit incluye algoritmos de Comprensión de Lenguaje Natural para Cancelación de Interferencias (IC), Cancelación de Eco Acústico, Supresión de Ruido, Relación Voz-Ruido (VNR) y Control Automático de Ganancia (AGC), permitiendo captura de voz de alta calidad.
* **Hardware Open Source**: Esta placa es compatible con plataformas de hardware populares (XIAO ESP32S3 (Sense), Adafruit QT Py) vía I2S, y con Raspberry Pi y PC vía USB (Audio Class 2.0 - UAC2).
* **LED RGB Integrado**: Cuenta con un LED RGB programable WS2812 que soporta efectos personalizados y ofrece una interfaz visual para tus aplicaciones.
* **Soporte para Fuente de Alimentación Externa**: Soporta alimentación externa de 5V para uso flexible en distintos escenarios.
* **DFU para Desarrollo Personalizado**: Soporta actualización de firmware personalizada vía DFU-Util.

|**Chip Principal**|XMOS XU316|
| :- | :- |
|**Micrófonos Digitales**|Micrófonos Digitales de Alto Rendimiento \* 2|
|**Sensibilidad**|-26 dBFS|
|**Punto de Sobrecarga Acústica**|120 dBL|
|**Relación Señal-Ruido (SNR)**|64 dBA|
|**Alimentación**|USB 5V, Externa 5V|
|**Dimensiones**|35\*86 mm|
|**Salida de Audio**|Conector para Altavoz / Jack para Auriculares 3.5mm|
|**Frecuencia Máxima de Muestreo**|16kHz|
|**Altavoz**|Soporta altavoces con amplificador de 5W.|

## Vista General del Hardware

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-9.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-10.png" alt="pir" width={800} height="auto" /></p>

## Pin Out

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**Pin**|**Nombre**|**Descripción**|
| :- | :- | :- |
|**1**|**Matriz de Doble Micrófono**|Provee entrada de audio de alta calidad.|
|**2**|**Indicador de Encendido**|Se ilumina cuando está encendido.|
|**3**|**Luz RGB**|WS2812 programable, provee interfaz visual.|
|**4**|**Indicador de Mute**|Se enciende en rojo cuando se presiona el botón de mute.|
|**5**|**Botón USR**|Botón definido por el usuario.|
|**6**|**Botón Mute**|Silencia la entrada de audio al presionarlo.|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(opcional)**|Para desarrollo e integración adicional.|
|**8**|**Procesador Core XU316**|Responsable del procesamiento y transmisión de audio.|
|**9**|**Pad de Soldadura para Fuente Externa**|Soporta alimentación externa de 5V.|
|**10**|**Puerto USB Tipo-C**|Usado para alimentación y transmisión de datos.|
|**11**|**Conector para Altavoz**|Salida de audio, soporta altavoces amplificados de 5W.|
|**12**|**Jack para Auriculares 3.5mm**|Salida de audio para altavoces activos o auriculares.|
|**13**|**Pad de alimentación externa 1**|Pines IO no usados en XIAO ESP32.|
|**14**|**Pad de alimentación externa 2**|Pines IO no usados en XU316.|
|**15**|**JTAG**|Para depuración y programación del XU316.|

## Comenzando

### Uso inmediato

ReSpeaker Lite es una interfaz modular plug-and-play para voz, no requiere controlador, solo conéctalo a tu PC y verás un dispositivo de voz llamado 'ReSpeaker Lite'.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pc.png" alt="pir" width={500} height="auto" /></p>

### Actualizar firmware

#### [Descarga de Firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

:::tip note
Existen 2 versiones para la placa ReSpeaker Lite:

Para usarla como dispositivo de sonido USB, flashea la versión de firmware USB (firmware por defecto).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-version.png" alt="pir" width={300} height="auto" /></p>

Para usarla con XIAO ESP32S3, flashea la versión de firmware I2S.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-version.png" alt="pir" width={300} height="auto" /></p>
:::

#### Conexión

Conecta la placa ReSpeaker Lite a tu PC mediante cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-connect.png" alt="pir" width={500} height="auto" /></p>

#### Instalar DFU Util

[dfu-util](http://dfu-util.sourceforge.net/) es una herramienta de línea de comandos para actualizar firmware vía USB.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="win" label="Windows">

* Descarga `dfu-util-0.11-binaries.tar.xz` y descomprímelo en tu sistema local, por ejemplo en `D:\`.

* Cambia al directorio donde está `dfu-util.exe`<br/>
por ejemplo `D:\dfu-util-0.11-binaries\win64\` (si usas win32, cambia win64 por win32).

* Añade la ruta de `dfu-util.exe` a la variable de entorno Path del sistema: `Mi PC` > `Propiedades` > `Configuración avanzada` > `Variables de entorno` > `Path`.

* Abre el menú inicio, escribe `cmd` y presiona Enter. En la terminal, verifica que dfu-util esté accesible con:

```
C:\Users\yiping>dfu-util -V
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/
```

- Ejecuta `dfu-util -l` para revisar si el ReSpeaker Lite esta detectado:

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
If you get a "Cannot open DFU device" error like this, please keep following this step. If not, please go to Step 3 to flash firmware.
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

- Busca en la lista de dispositivos `ReSpeaker 2 Mics Array` o `ReSpeaker Lite` o DFU `FACTORY (Interface 3)`, e instala el controlador `WINUSB v6.x.xxxx.xxxxx`. 

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-2mic.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-lite.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-fac.png" alt="pir" width={500} height="auto" /></p>

- Después de que la instalación termine (puede tomar algunos minutos), realiza un ciclo de energía (apagar y encender) y ejecuta nuevamente `dfu-util -l`, ahora debería detectarse el ReSpeaker Lite.

</TabItem>

<TabItem value="mac" label="MacOS">

- Instala dfu-util con [brew](https://brew.sh/): `brew install dfu-util`

- Ejecuta `dfu-util -l` para verificar si el ReSpeaker Lite es detectado:

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

- Ejecuta `sudo dfu-util -l` para verificar si se detecta el ReSpeaker Lite:

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

### Flashear Firmware

* Conecta la placa ReSpeaker a tu PC.

- Ejecuta el siguiente comando `dfu-util -R -e -a 1 -D /ruta/al/firmware_dfu.bin`:
    - En Linux, por favor ejecuta `sudo dfu-util -R -e -a 1 -D /ruta/al/firmware_dfu.bin`

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
Después de completar el flasheo, por favor reinicia la placa.
:::

* Verifica la versión del firmware:

```
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

## Comparación

||[ReSpeaker Lite](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)|[ReSpeaker Mic Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html)|[reSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)|
|--|--|--|--|
||<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={150} height="auto" /></p>|<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-array2.0.png" alt="pir" width={150} height="auto" /></p>|<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-pi-hat.png" alt="pir" width={150} height="auto" /></p>|
|<p style={{textAlign: 'center'}}>Chip Principal</p>|<p style={{textAlign: 'center'}}>XMOS XU316</p>|<p style={{textAlign: 'center'}}>XMOS XVF-3000</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Micrófonos</p>|<p style={{textAlign: 'center'}}>Micrófonos PDM MEMS x2</p>|<p style={{textAlign: 'center'}}>Micrófonos PDM MEMS x4</p>|<p style={{textAlign: 'center'}}>Micrófonos Analógicos MEMS x2</p>|
|<p style={{textAlign: 'center'}}>Distancia de Captura de Voz</p>|<p style={{textAlign: 'center'}}>3 m</p>|<p style={{textAlign: 'center'}}>5 m</p>|<p style={{textAlign: 'center'}}>3 m</p>|
|<p style={{textAlign: 'center'}}>Sensibilidad</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Punto de Sobrecarga Acústica</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Relación Señal-Ruido (SNR)</p>|<p style={{textAlign: 'center'}}>64 dB</p>|<p style={{textAlign: 'center'}}>63 dB</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Algoritmos de Procesamiento de Audio a Bordo</p>|<ul><li>Cancelación de Eco Acústico (AEC)</li><li>Control Automático de Ganancia (AGC)</li><li>Supresión de Ruido (NS)</li><li>Cancelación de Interferencias (IC)</li><li>Relación Voz-Ruido (VNR)</li></ul>|<ul><li>Cancelación de Eco Acústico (AEC)</li><li>Control Automático de Ganancia (AGC)</li><li>Supresión de Ruido (NS)</li><li>Formación de Haz (Beamforming)</li><li>Dirección de Llegada (DoA)</li><li>Des-reverberación</li><li>Detección de Actividad de Voz (VAD)</li></ul>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>Hardware Compatible</p>|<ul><li>XIAO ESP32S3 (Sense)</li><li>Adafruit QT Py vía I2S</li><li>Raspberry Pi</li><li>Cualquier computadora o SBC con Linux, macOS y Windows vía USB</li></ul>|<ul><li>Raspberry Pi</li><li>Cualquier computadora o SBC con Linux, macOS y Windows vía USB</li></ul>|Solo Raspberry Pi|
|<p style={{textAlign: 'center'}}>Ideal para</p>|Captura direccional de sonido, ideal para configuraciones lineales o alargadas|Captura omnidireccional y localización de sonido, mejor colocado en el centro de ambientes abiertos y multidireccionales|Captura direccional de sonido, ideal para configuraciones lineales o alargadas|

### Preguntas Frecuentes

* **No encuentro el dispositivo de sonido `ReSpeaker Lite`.**

  Verifica la versión del firmware, asegúrate que sea la versión USB y que sea mayor a `2.0.5`.

 ```
 dfu-util -l
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

Si no es la versión USB, sigue [este paso](https://wiki.seeedstudio.com/reSpeaker_usb_v3/#flash-firmware) para flashear el firmware.

* **No se detecta el dispositivo de sonido ReSpeaker Lite USB en Windows después de flashear el firmware USB**

- Abre el menú de inicio y escribe `Administrador de dispositivos`. Busca el dispositivo `ReSpeaker Lite`, haz clic derecho y selecciona `Desinstalar dispositivo`. Marca la opción `Eliminar el software del controlador para este dispositivo` y haz clic en `Desinstalar`. Después, reinicia el dispositivo y Windows reinstalará el controlador correcto.

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### Recursos

[Firmware XMOS para ReSpeaker Lite](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)