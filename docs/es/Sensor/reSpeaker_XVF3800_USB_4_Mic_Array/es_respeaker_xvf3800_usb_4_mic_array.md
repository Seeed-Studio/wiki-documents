---
description: Comienza con el ReSpeaker XVF3800 USB 4-Mic Array—un módulo de interfaz de voz de alto rendimiento que cuenta con captura de voz y soporte multiplataforma a través de USB o I2C.

title: Introducción al reSpeaker XVF3800 USB Mic Array
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /es/respeaker_xvf3800_introduction
last_update:
  date: 11/10/2025
  author: Kasun Thushara
---

# Introducción al ReSpeaker XVF3800

## Descripción General

El ReSpeaker XVF3800 USB 4-Mic Array es un arreglo circular profesional de 4 micrófonos con XMOS XVF3800, que cuenta con AEC, AGC, DoA, beamforming, VAD, supresión de ruido, des-reverberación, captura de voz de 360° (hasta 5m), y modos de operación dual para aplicaciones de voz avanzadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- **Actualización de chip** :De XVF3000 a XVF3800

- **Arreglo de Cuatro Micrófonos** :4 micrófonos de alto rendimiento en patrón circular para captura de voz de campo lejano de 360° hasta 5 metros

- **Procesamiento de Audio Avanzado** :Impulsado por XVF3800 con AEC, multi-beamforming, des-reverberación, detección DoA, supresión dinámica de ruido, rango AGC de 60dB

- **Número de Serie Único del Dispositivo** :SN integrado permite implementaciones multi-dispositivo y gestión avanzada de dispositivos

- **Modos de Operación Dual** :Modo USB plug-and-play para conectividad instantánea con PC y modo INT-Device (I2S) para integración con sistemas embebidos—configurable a través de comandos USB o I2C cambiando el firmware correspondiente

- **Compatible con Código Abierto** :Funciona con hosts USB (Windows, macOS, Raspberry Pi OS) y hosts I2S (XIAO Series, ESP32, Arduino).

- **Retroalimentación Visual** :LEDs RGB programables e indicadores de estado muestran estados del dispositivo y actividad de voz

- **Calidad de audio igual o mejor** :comparado con el modelo anterior

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/no-xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### Componentes Principales

| **Componente / Característica**       | **Descripción**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Procesador de Audio Principal**      | **XMOS XVF3800**, maneja el procesamiento de audio incluyendo AEC, beamforming, supresión de ruido, etc.       |
| **Arreglo de Micrófonos**          | **Cuatro micrófonos MEMS PDM** en patrón circular, soportando **captura de voz de campo lejano de 360° (5m)**. |
| **Códec de Audio**               | **TLV320AIC3104**, maneja la conversión y salida de audio.                                              |
| **LEDs RGB**                  | **12x WS2812** LEDs RGB direccionables individualmente para retroalimentación visual (ej., estado, actividad de voz). |
| **Botón de Silencio**               | Presionar para **silenciar/activar** la entrada del micrófono.                                                       |
| **LED Indicador de Silencio**        | Se enciende (típicamente rojo) para mostrar que el audio está silenciado.                                               |
| **Botón de Reinicio**              | Reinicio por hardware para la placa/sistema.                                                                 |
| **Puerto USB Type-C**           | Usado tanto para **alimentación como datos** (compatible con USB Audio Class 2.0).                                    |
| **Jack de Auriculares AUX de 3.5mm**  | Salida de audio para auriculares o altavoces activos.                                                      |
| **Conector de Altavoz**         | **Interfaz de altavoz JST**, soporta **altavoces amplificados de 5W**.                                       |
| **Pads de Depuración**                | Acceso de depuración para **XTAG4** u otros programadores.                                                     |
| **Headers I2C e I2S**         | Headers expuestos para **comunicación I2C e I2S** con dispositivos externos.                             |
| **Pads IO No Utilizados (XIAO)**     | Pads de soldadura I/O adicionales conectados al módulo XIAO.                                                 |
| **Comunicación I2S e I2C**   | Soporta conexión a hosts externos como Raspberry Pi, PC, etc. usando estos protocolos.             |
| **Modos USB e INT-Device**    | Operación de modo dual: USB plug-and-play o modo de dispositivo INT interno a través de I2S.                          |
| **Número de Serie Único**      | **SN del dispositivo** integrado para identificación y gestión multi-dispositivo.                               |
| **Compatibilidad con Código Abierto** | Funciona con **Arduino, Raspberry Pi, PC/Mac**, y compatible con **XIAO Series**.                   |
| **Características de Audio Avanzadas**   | AEC, beamforming, desreverberación, **detección DoA**, supresión de ruido basada en DNN, AGC de 60dB.         |
| **Retroalimentación Visual**           | Estado del dispositivo y actividad de audio mostrados a través de **patrones de LED RGB** e **indicadores de estado**.            |
| **Calidad de Audio**             | Igual o mejor que los **diseños anteriores basados en XVF3000**.                                         |

:::note
El ReSpeaker XVF3800 se ofrece en dos variantes—una sin XIAO y otra con el XIAO ESP32S3 a bordo. La versión sin XIAO opera con firmware USB por defecto. Para usar la versión integrada con XIAO, debes flashear firmware construido para **modo INT-Device (I2S)**. Para instrucciones detalladas de configuración, consulta la [guía wiki oficial](/es/respeaker_xvf3800_xiao_getting_started).
:::

### Soporte XIAO ESP32S3

- Entrada/salida I2S estéreo con múltiples opciones de salida; interfaz I2C para configurar y gestionar parámetros XVF3800.
- Reinicio XIAO a través de pin IO
- Interfaz y pads de soldadura

### Diagrama de Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/gpio_sk.png" alt="pir" width={600} height="auto" /></p>

### Descripción General de GPIO

El reSpeaker XVF3800 expone 3 pines de entrada (GPI) y 5 pines de salida (GPO) para control externo. Puedes usar estos para leer estados de botones o controlar hardware como el LED de silencio, amplificador, o LEDs.

| **Nombre del Pin** | **Dirección** | **Función**                                         |
|--------------|---------------|------------------------------------------------------|
| X1D09        | Entrada (RO)    | Estado del botón de silencio (alto cuando se libera)              |
| X1D13        | Entrada (RO)    | Flotante                                             |
| X1D34        | Entrada (RO)    | Flotante                                             |
| X0D11        | Salida (RW)   | Flotante                                             |
| X0D30        | Salida (RW)   | LED de silencio + control de silencio del micrófono (alto = silencio)            |
| X0D31        | Salida (RW)   | Habilitación del amplificador (bajo = habilitado)                     |
| X0D33        | Salida (RW)   | Control de alimentación LED WS2812 (alto = encendido)                 |
| X0D39        | Salida (RW)   | Flotante                                             |

## Introducción

### Preparación del Hardware

- Cable USB Type-C  
- Computadora host o Raspberry Pi

### Preparación del Software

### Uso Inmediato

#### DOA (Dirección de Llegada)

Puedes experimentar el arreglo de LEDs siguiendo la dirección de la voz entrante.

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/nYxsTq_2bw4"
          title="ReSpeaker XVF3800 Plug & Play: Boot Light Show and DOA Demo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

#### Botón de Silencio

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.jpg" alt="pir" width={600} height="auto"/></p>

El **botón de Silencio** en tu ReSpeaker se usa para **deshabilitar temporalmente la captura de voz** del arreglo de micrófonos.
¿Qué sucede cuando presionas el botón de Silencio?

- Los **micrófonos se silencian** — las voces externas ya no serán capturadas o procesadas.
- Un **LED rojo se enciende** para indicar que **el modo silencio está activo**.
- Esto significa que el ReSpeaker **no enviará ninguna entrada de audio** a tu computadora o dispositivo host.

**Pruébalo Tú Mismo con Audacity**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.gif" alt="pir" width={600} height="auto"/></p>

#### Botón de Reinicio

El botón de reinicio (RST) proporciona un reinicio por hardware para el XVF3800—cuando se presiona, reinicia el chip y reinicializa el sistema desde el principio, como un ciclo completo de alimentación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/reset.gif" alt="pir" width={600} height="auto"/></p>

#### Conexión de Altavoces

Aquí puedes ver cómo conectar altavoces usando ya sea el jack de auriculares AUX de 3.5mm o la interfaz de altavoz JST a bordo, dependiendo de tu preferencia de salida de audio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/audio.gif" alt="pir" width={600} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/speaker.jpg" alt="pir" width={600} height="auto"/></p>

#### Modo Seguro

El Modo Seguro es un modo de recuperación especial en el ReSpeaker XVF3800 que te permite flashear firmware a través de USB DFU o I2C—para dispositivos como Raspberry Pi y ESP32. Si previamente has flasheado el firmware I2S y quieres volver al firmware USB, puedes entrar al Modo Seguro y reflashear el firmware USB usando USB DFU.

:::note
Cada tipo de firmware en el ReSpeaker XVF3800 soporta diferentes métodos de actualización:

- El **firmware USB** solo soporta **USB DFU**, lo que significa que puedes actualizar el dispositivo usando una conexión USB. Sin embargo, **no soporta I2C DFU**.

- El **firmware I2S** es lo opuesto—soporta **I2C DFU**, permitiendo actualizaciones de firmware sobre una interfaz I2C, pero **no soporta USB DFU**.

- El **firmware de Modo Seguro**, que se almacena en la partición Factory, es el más flexible. Soporta **tanto USB DFU como I2C DFU**.

:::

**Cuándo Usar el Modo Seguro**

- Tu firmware no está funcionando correctamente (ej. USB no detectado, LED no se enciende como se esperaba).
- Necesitas volver a flashear un nuevo firmware pero el actual no responde.
- Accidentalmente flasheaste algo incorrecto y quieres recuperarte.

**Cómo Entrar al Modo Seguro**

- Apaga el dispositivo completamente.
- Mantén presionado el botón Mute.
- Mientras mantienes el botón mute, reconecta la alimentación.
- El LED rojo comenzará a parpadear — esto confirma que el dispositivo está ahora en Modo Seguro.
- Ahora el dispositivo ejecuta el firmware de Modo Seguro almacenado en la partición Factory.

### Actualizar Firmware

Conecta el reSpeaker XVF3800 a tu PC a través del cable USB. Ten en cuenta que necesitas usar el puerto USB-C de XMOS (cerca del puerto jack de 3.5mm) para flashear el firmware de XMOS.

| Firmware | Canales | Notas |
|---------|----------|-------|
| respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin | 2 | Salida procesada de 2 canales <br /> Canal 0: Conferencia <br /> Canal 1: ASR |
| application_xvf3800_ua-io16-6ch-sqr-v2.0.8-test1.xe | 6 | Canal 0: Audio procesado (Conferencia) <br /> Canal 1: Audio procesado (ASR) <br /> Canal 2: Datos sin procesar del micrófono 0 <br /> Canal 3: Datos sin procesar del micrófono 1 <br /> Canal 4: Datos sin procesar del micrófono 2 <br /> Canal 5: Datos sin procesar del micrófono 3 |
| respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin | 2 | Salida procesada de 2 canales <br /> Canal 0: Conferencia <br /> Canal 1: ASR |
| respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.x_48k.bin | 2 | Salida procesada de 2 canales <br /> Canal 0: ASR <br /> Canal 1: Palabra de activación (Wake word) |

Los usuarios pueden modificar la selección de los canales de salida procesados para las variantes de firmware mencionadas anteriormente.
Para más detalles, consulte la [documentación de XMOS](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/03_using_the_host_application.html#output-selection).

#### Instalar DFU Util

[`dfu-util`](http://dfu-util.sourceforge.net/) es una herramienta de línea de comandos para Device Firmware Upgrade vía USB.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows">

- Descarga `dfu-util-0.11-binaries.tar.xz` y extráelo, ej., `D:\dfu-util-0.11-binaries\win64\`  
  [Enlace de Descarga](http://dfu-util.sourceforge.net/)

- Agrega la ruta a `dfu-util.exe` a tu variable de sistema `Path`:  
  `Mi PC > Propiedades > Avanzado > Variables de Entorno > Path`

- Abre **Símbolo del Sistema** (`cmd`) y verifica la instalación:

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- Conecta el ReSpeaker XVF3800 y verifica la detección del dispositivo:

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> Si obtienes:  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> Procede con el paso de instalación del controlador a continuación.

- Instala [Zadig](https://zadig.akeo.ie/)  
  - Abre Zadig → `Options > List All Devices`  
  - Selecciona `reSpeaker 3800` o `reSpeaker XVF3800 4-Mic Array`  
  - Instala el controlador **WinUSB**  
  - Reinicia el dispositivo  
  - Ejecuta `dfu-util -l` nuevamente para confirmar la detección.

</TabItem>

 <TabItem value="macos" label="macOS">

- Instala dfu-util con Homebrew:

```bash
brew install dfu-util
```

- Verifica si el dispositivo es detectado:

```bash
dfu-util -l
```

**Salida Esperada:**

```
dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:001a] ver=0202, devnum=3, cfg=1, intf=4, path="2-1.1.4", alt=1, name="reSpeaker DFU Upgrade", serial="101991441000000001"
Found DFU: [2886:001a] ver=0202, devnum=3, cfg=1, intf=4, path="2-1.1.4", alt=0, name="reSpeaker DFU Factory", serial="101991441000000001"

```

</TabItem>

<TabItem value="linux" label="Linux">

- Instala dfu-util:

```bash
sudo apt install dfu-util
```

- Conecta el XVF3800 y verifica la detección:

```bash
sudo dfu-util -l
```

**Salida Esperada:**

```bash
pi@raspberrypi:~ $ sudo dfu-util -l
dfu-util 0.9

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2016 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:001a] ver=0202, devnum=5, cfg=1, intf=3, path="1-1.1", alt=1, name="reSpeaker DFU Upgrade", serial="101991441000000001"
Found DFU: [2886:001a] ver=0202, devnum=5, cfg=1, intf=3, path="1-1.1", alt=0, name="reSpeaker DFU Factory", serial="101991441000000001"

```

  </TabItem>
</Tabs>

#### Flashear Firmware

Descarga el Firmware Desde Aquí.[`XMOS XVF 3800`](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)

- Ejecuta el siguiente comando para flashear el firmware

```bash

dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- En Linux, ejecútalo con sudo

```bash
sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- La opción `-R` reiniciará automáticamente la placa después del flasheo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image3.png" alt="pir" width={600} height="auto"/></p>

- Verifica la versión del firmware nuevamente con el comando `dfu-util -l`, para asegurarte de que el nuevo firmware esté flasheado

## Grabación y Reproducción

<Tabs>
<TabItem value="windows" label="Windows">

### Configurar Audacity (Windows)

1. Abre **Audacity**
2. Ve a **Audio Setup > Audio Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw1.png" alt="pir" width={600} height="auto"/></p>

3. Configura:
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker 3800`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz` (para ambos **Project** y **Default Sample Rate**)
   - **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw2.png" alt="pir" width={600} height="auto"/></p>

1. Haz clic en **OK**
2. ¡Estás listo — comienza a grabar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Configurar Audacity (macOS)

1. Abre **Audacity**
2. Ve a **Audio Setup** y selecciona **Recording Device** como **reSpeaker 3800**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. Ve a **Audio Setting** Configura:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**: `reSpeaker 3800`
- **Channels**: `2 (Stereo)`
- **Sample Rate**: `16000 Hz` (para ambos **Project** y **Default Sample Rate**)
- **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. Haz clic en **OK**
5. ¡Listo para grabar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Grabación en Raspberry Pi (Línea de Comandos)

1. **Encontrar número de tarjeta de sonido**:

```bash
arecord -l
```

Salida de ejemplo:

```
**** List of CAPTURE Hardware Devices ****
card 4: Array [reSpeaker XVF3800 4-Mic Array], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

 En este caso, **el número de tarjeta es 4**

---

2. **Grabar audio (5 segundos)**:

```bash
arecord -D plughw:4,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 Reemplaza `4` con tu número real de tarjeta de sonido

---

3. **Ajustar Volumen para ReSpeaker XVF3800 en ALSA**

```bash
alsamixer
```

En alsamixer, usa las teclas de flecha izquierda/derecha para navegar al dispositivo de sonido correcto. Usa la tecla de flecha hacia arriba para aumentar el volumen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **Reproducción**:

```bash
aplay -D plughw:4,0 output.wav
```

### Grabación en Raspberry Pi (Audacity)

1. **Instalar Pi-Apps (si no está ya instalado)**

Abre una terminal en tu Raspberry Pi. Ejecuta el siguiente comando para instalar Pi-Apps

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

Espera a que se complete la instalación. Un nuevo icono de Pi-Apps aparecerá en tu menú.

2. **Instalar Audacity vía Pi-Apps**

3. **Configurar Entrada y Salida de Audio**

- Haz clic en "Audio Setup" en la barra de herramientas.
- Selecciona "Audio Settings" del menú desplegable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- En la ventana Audio Settings:
  - Elige el Recording Device correcto (ej., reSpeaker XVF3800).
  - Elige el Playback Device apropiado (ej., reSpeaker XVF3800).
  - Asegúrate de que Host esté configurado en ALSA para mejor compatibilidad en Raspberry Pi.
- Haz clic en OK para aplicar la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **Grabar y Reproducir Audio**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>

## Cómo Controlar reSpeaker XVF3800

El reSpeaker XVF3800 está equipado con una interfaz de control que permite a los usuarios configurar la operación del dispositivo, establecer o leer datos de parámetros y guardar datos de parámetros en el dispositivo. Los usuarios pueden controlar el dispositivo a través de la interfaz USB o I2C. Se proporciona una aplicación host de muestra, xvf_host (para Linux, macOS y Raspberry Pi OS) o xvf_host.exe (para Windows), para conectarse fácilmente a la interfaz de control del reSpeaker XVF3800.

Descargar Desde [Aquí](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/host_control)

:::note
Si te gustaría explorar más sobre el control vía xvf_host, por favor lee este [artículo](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md).
:::

<Tabs>
<TabItem value="windows" label="Windows">

### Usuarios de Windows

- Asegúrate de que ReSpeaker XVF3800 esté conectado vía USB
- Descomprime `xvf_host.exe` en una carpeta como:

```text
C:\Tools\xvf_host\
```

---

**Verificar Instalación**

```bash
cd C:\Tools\xvf_host
xvf_host.exe --help
```

---

**Verificar Conexión del Dispositivo**

```bash
xvf_host.exe VERSION
```

Salida esperada:

```
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 2
```

---

**Control de LED**

| Comando | Ejemplo | Descripción |
|--------|---------|-------------|
| `led_effect` | `xvf_host.exe led_effect 1` | 0=apagado, 1=respiración, 2=arcoíris, 3=sólido, 4=DoA |
| `led_color` | `xvf_host.exe led_color 0xff8800` | Establecer color hexadecimal (naranja) |
| `led_speed` | `xvf_host.exe led_speed 1` | Establecer velocidad del efecto |
| `led_brightness` | `xvf_host.exe led_brightness 255` | Establecer brillo |
| `led_gammify` | `xvf_host.exe led_gammify 1` | Habilitar corrección gamma |
| `led_doa_color` | `xvf_host.exe led_doa_color 0x0000ff 0xff0000` | Establecer color base/direccional de DoA |

🟠 Ejemplo (respiración naranja):

```bash
xvf_host.exe led_effect 1
xvf_host.exe led_color 0xff8800
xvf_host.exe led_speed 1
xvf_host.exe led_brightness 255
```

**Configuración**

```bash
xvf_host.exe save_configuration 1
xvf_host.exe clear_configuration 1
```

---

**Control GPIO**

**Leer Entradas:**

```bash
xvf_host.exe GPI_READ_VALUES
```

Ejemplo de salida: `GPI_READ_VALUES 1 0 0`

En este ejemplo, el retorno 1 0 0 significa que el Pin X1D09 está en nivel alto, el Pin X1D13 está en nivel bajo y el Pin X1D34 está en nivel bajo.

**Leer Salidas:**

```bash
xvf_host.exe GPO_READ_VALUES
```

Ejemplo de salida: `GPO_READ_VALUES 0 1 1 0 0`

En este ejemplo, el retorno 0 0 0 1 0 significa que el Pin X0D11 está en nivel bajo, el Pin X0D30 está en nivel bajo, el Pin X0D31 está en nivel alto, el Pin X0D33 está en nivel alto y el Pin X0D39 está en nivel bajo.

**Establecer Salida:**

```bash
xvf_host.exe GPO_WRITE_VALUE 30 1  # Turn ON mute LED
xvf_host.exe GPO_WRITE_VALUE 30 0  # Turn OFF mute LED
```

**Dirección de Llegada (DoA)**

- DoA te dice desde qué dirección está hablando alguien.
- El **anillo LED** en el ReSpeaker XVF3800 muestra la dirección usando luces.
- También puedes leer los valores DoA usando la herramienta `xvf_host`.

Comando para verificar valores DoA

```bash
xvf_host.exe AEC_AZIMUTH_VALUES
```

Ejemplo de Salida

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

- **Haz enfocado 1**: Primera dirección de escucha fija
- **Haz enfocado 2**: Segunda dirección de escucha fija
- **Haz de funcionamiento libre**: Dirección de escaneo continuo
- **Haz seleccionado automáticamente**: Haz final elegido para el mejor audio (usado para indicación DoA)

**Indicación de Habla**

- La Energía de Habla muestra qué tan fuerte es la señal de voz — como un medidor de volumen de habla.
- Se usa para detectar si alguien está hablando y qué tan fuerte/cerca están.
- El ruido, el eco y la distancia pueden afectar el valor de energía.

 Comando para verificar Energía de Habla:

```bash
xvf_host.exe AEC_SPENERGY_VALUES
```

Ejemplo de Salida

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_SPENERGY_VALUES 2080656 0 2083455 2080656
```

- **Haz enfocado 1**: Energía del primer haz
- **Haz enfocado 2**: Energía del segundo haz
- **Haz de funcionamiento libre**: Energía del haz de escaneo
- **Haz seleccionado automáticamente**: Energía del haz elegido para la salida final

**Canales de Salida de Audio**

- El XVF3800 proporciona **2 canales de audio**:
  - **Canal izquierdo**: Audio limpio y post-procesado
  - **Canal derecho**: Haz ASR o datos de eco/referencia

Puedes **re-enrutar** estos canales para generar diferentes fuentes.

Comandos de ejemplo

Establecer canal izquierdo a Micrófono Amplificado 0

```bash
xvf_host.exe AUDIO_MGR_OP_L 3 0
```

Establecer canal derecho a datos Far End (referencia)

```bash
xvf_host.exe AUDIO_MGR_OP_R 5 0
```

Ejemplo de Salida:

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
```

**Parámetros de Ajuste (¡Haz que Suene Mejor!)**

- Estas configuraciones ayudan a mejorar la **cancelación de eco**, **supresión de ruido**, **ganancia**, etc.
- **Úsalas cuando las configuraciones predeterminadas no sean lo suficientemente buenas.**

 Parámetros Comunes:

| Parámetro             | Significado                                         |
|-----------------------|-------------------------------------------------|
| **AUDIO_MGR_REF_GAIN**   | Ganancia de entrada del altavoz (señal de eco)             |
| **AUDIO_MGR_MIC_GAIN**   | Ganancia de entrada del micrófono (qué tan fuerte escucha el micrófono) |
| **AUDIO_MGR_SYS_DELAY**  | Retraso entre señales de micrófono y altavoz         |
| **PP_AGCMAXGAIN**        | Nivel máximo de control automático de ganancia              |
| **AEC_ASROUTGAIN**       | Ganancia para salida de haz ASR                      |

Para documentación más profunda y comandos avanzados, visita el repositorio oficial de GitHub:  
[ReSpeaker XVF3800 Host Control README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)

---

</TabItem>

<TabItem value="linux" label="macOS / Linux / Raspberry Pi">

### Para Raspberry Pi

- Conecta XVF3800 vía USB o I2C
- Haz `xvf_host` ejecutable:

```bash
cd /path/to/xvf_host
chmod +x xvf_host
```

---

**Verificar Instalación**

```bash
./xvf_host --help
./xvf_host VERSION
```

Esperado:

```
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 2
```

**Usando I2C:**

```bash
./xvf_host --use i2c VERSION
```

---

**Control de LED (Igual que Windows, prefijo con ./)**

```bash
./xvf_host led_effect 1
./xvf_host led_color 0xff8800
./xvf_host led_speed 1
./xvf_host led_brightness 255
```

**Configuración**

```bash
./xvf_host save_configuration 1
./xvf_host clear_configuration 1
```

---

**Control GPIO**

```bash
chmod +x ./xvf_host
```

**Leer Entradas:**

```bash
./xvf_host GPI_READ_VALUES
```

Ejemplo de salida: `GPI_READ_VALUES 1 0 0`

En este ejemplo, el retorno 1 0 0 significa que el Pin X1D09 está en nivel alto, el Pin X1D13 está en nivel bajo y el Pin X1D34 está en nivel bajo.

**Leer Salidas:**

```bash
./xvf_host GPO_READ_VALUES
```

Ejemplo de salida: `GPO_READ_VALUES 0 1 1 0 0`

En este ejemplo, el retorno 0 0 0 1 0 significa que el Pin X0D11 está en nivel bajo, el Pin X0D30 está en nivel bajo, el Pin X0D31 está en nivel alto, el Pin X0D33 está en nivel alto y el Pin X0D39 está en nivel bajo.

**Establecer Salidas:**

```bash
./xvf_host GPO_WRITE_VALUE 30 1
./xvf_host GPO_WRITE_VALUE 30 0
```

**Dirección de Llegada (DoA)**

- DoA te dice desde qué dirección está hablando alguien.
- El **anillo LED** en el ReSpeaker XVF3800 muestra la dirección usando luces.
- También puedes leer los valores DoA usando la herramienta `xvf_host`.

Comando para verificar valores DoA

```bash
./xvf_host AEC_AZIMUTH_VALUES
```

Ejemplo de Salida

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

- **Haz enfocado 1**: Primera dirección de escucha fija
- **Haz enfocado 2**: Segunda dirección de escucha fija
- **Haz de funcionamiento libre**: Dirección de escaneo continuo
- **Haz seleccionado automáticamente**: Haz final elegido para el mejor audio (usado para indicación DoA)

**Indicación de Habla**

- La Energía de Habla muestra qué tan fuerte es la señal de voz — como un medidor de volumen de habla.
- Se usa para detectar si alguien está hablando y qué tan fuerte/cerca están.
- El ruido, el eco y la distancia pueden afectar el valor de energía.

Comando para verificar Energía de Habla:

```bash
./xvf_host AEC_SPENERGY_VALUES
```

Ejemplo de Salida

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_SPENERGY_VALUES 2080656 0 2083455 2080656
```

- **Haz enfocado 1**: Energía del primer haz
- **Haz enfocado 2**: Energía del segundo haz
- **Haz de funcionamiento libre**: Energía del haz de escaneo
- **Haz seleccionado automáticamente**: Energía del haz elegido para la salida final

**Canales de Salida de Audio**

- El XVF3800 proporciona **2 canales de audio**:

  - **Canal izquierdo**: Audio limpio y post-procesado
  - **Canal derecho**: Haz ASR o datos de eco/referencia

Puedes **re-enrutar** estos canales para generar diferentes fuentes.

Comandos de ejemplo

Establecer canal izquierdo a Micrófono Amplificado 0

```bash
./xvf_host AUDIO_MGR_OP_L 3 0
```

Establecer canal derecho a datos Far End (referencia)

```bash
./xvf_host AUDIO_MGR_OP_R 5 0
```

Ejemplo de Salida:

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
```

**Parámetros de Ajuste (¡Haz que Suene Mejor!)**

- Estas configuraciones ayudan a mejorar la **cancelación de eco**, **supresión de ruido**, **ganancia**, etc.
- **Úsalas cuando las configuraciones predeterminadas no sean lo suficientemente buenas.**

Parámetros Comunes:

| Parámetro                  | Significado                                        |
| -------------------------- | ---------------------------------------------- |
| **AUDIO_MGR_REF_GAIN**  | Ganancia de entrada del altavoz (señal de eco)               |
| **AUDIO_MGR_MIC_GAIN**  | Ganancia de entrada del micrófono (qué tan fuerte escucha el micrófono) |
| **AUDIO_MGR_SYS_DELAY** | Retraso entre señales de micrófono y altavoz          |
| **PP_AGCMAXGAIN**         | Nivel máximo de control automático de ganancia               |
| **AEC_ASROUTGAIN**        | Ganancia para salida de haz ASR                       |

Para documentación más profunda y comandos avanzados, visita el repositorio oficial de GitHub:
[ReSpeaker XVF3800 Host Control README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)

---

</TabItem>
</Tabs>

## Solución de Problemas

### ¿La reproducción de sonido desde la salida del altavoz no es suficiente?

Si el volumen de salida del altavoz del **ReSpeaker XVF3800** es demasiado bajo en Linux, es posible que necesites ajustar los **niveles del mezclador ALSA** para la tarjeta de sonido XVF3800. Sigue los pasos a continuación para aumentar el volumen de salida.

**Paso 1: Abrir Mezclador ALSA**

1. Abre una terminal.
2. Escribe el siguiente comando y presiona **Enter**:

   ```bash
   alsamixer
   ```
**Paso 2: Seleccionar la Tarjeta de Sonido XVF3800**

1. Presiona **F6** para abrir el menú de selección de tarjeta de sonido.
2. Usa las **teclas de flecha arriba/abajo** para resaltar la tarjeta de sonido **XVF3800**.
3. Presiona **Enter** para confirmar la selección.

**Paso 3: Ajustar el Volumen PCM-1**

1. Usa las **teclas de flecha izquierda/derecha** para navegar a **PCM-1**.
2. Usa la **tecla de flecha arriba** para aumentar el nivel de volumen hasta **100%**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alexa.png" alt="pir" width={600} height="auto"/></p>

**Paso 4: Guardar Configuración de ALSA**

1. Presiona **ESC** para salir de `alsamixer`.
2. Antes de desconectar el XVF3800, ejecuta el siguiente comando para guardar tu configuración:

```bash
   sudo alsactl store
   ```

**Paso 5: Opción Adicional (Usando PulseAudio)**

Si aún no puedes escuchar el sonido claramente después de ajustar los niveles de ALSA, intenta instalar **PulseAudio Volume Control** para ajustes de volumen más detallados:

```bash
sudo apt install pavucontrol -y
```

Luego puedes abrir **pavucontrol** y aumentar el volumen de salida más allá del 100% si es necesario.

### Después de reinstalar los controladores USB, mi ReSpeaker no graba ni reproduce

Desinstala todos los controladores asociados con el ReSpeaker en el Administrador de dispositivos. Esto resolvió el problema.

### ¿No se puede usar como dispositivo de sonido en Windows después de actualizar el firmware?

Abre el menú de inicio y escribe "Administrador de dispositivos". Busca los dispositivos reSpeaker XVF 3800 relacionados, haz clic derecho sobre ellos y selecciona "Desinstalar dispositivo". Después de eso, reinicia el dispositivo (desconecta y vuelve a conectar el USB) y Windows reinstalará automáticamente el controlador correcto de la tarjeta de sonido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf_3800_dfu.png" alt="pir" width={600} height="auto"/></p>

## Recursos

- [Archivo 3D de ReSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/respeaker_mic_array_xvf3800_1_with-xiao-0820.stp)
- [Archivo 3D-Enclosure-Up de ReSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/1-up.stp)
- [Archivo 3D-Enclosure-Down de ReSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/1-down.stp)

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
