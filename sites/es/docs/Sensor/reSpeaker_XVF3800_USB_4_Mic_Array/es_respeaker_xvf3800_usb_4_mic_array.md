---
description: Comienza con la ReSpeaker XVF3800 USB 4-Mic Array - un módulo de interfaz de voz de alto rendimiento que incorpora captura de voz y compatibilidad multiplataforma mediante USB o I2C.
title: Introducción a reSpeaker XVF3800 USB Mic Array
keywords:
  - reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /respeaker_xvf3800_introduction
sku: 101991441,114993701
last_update:
  date: 11/10/2025
  author: Kasun Thushara
createdAt: '2025-08-20'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/
---

# Introducción a ReSpeaker XVF3800

## Descripción general

La ReSpeaker XVF3800 USB 4-Mic Array es una matriz circular profesional de 4 micrófonos con XMOS XVF3800, que incorpora AEC, AGC, DoA, conformación de haz, VAD, supresión de ruido, desreverberación, captura de voz de 360° (hasta 5 m) y modos de funcionamiento duales para aplicaciones de voz avanzadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- **Actualización de chip** :De XVF3000 a XVF3800

- **Matriz de cuatro micrófonos** :4 micrófonos de alto rendimiento en un patrón circular para captura de voz de campo lejano de 360° hasta 5 metros

- **Procesamiento de audio avanzado** :Impulsado por XVF3800 con AEC, conformación de haz múltiple, desreverberación, detección de DoA, supresión dinámica de ruido, rango de AGC de 60 dB

- **Número de serie único del dispositivo** :El SN integrado permite implementaciones con múltiples dispositivos y gestión avanzada de dispositivos

- **Modos de funcionamiento duales** :Modo USB plug-and-play para conectividad instantánea al PC y modo INT-Device (I2S) para integración con sistemas embebidos, configurable mediante comandos USB o I2C cambiando el firmware en consecuencia

- **Compatible con código abierto** :Funciona con hosts USB (Windows, macOS, Raspberry Pi OS) y hosts I2S (XIAO Serie, ESP32, Arduino).

- **Retroalimentación visual** :LED RGB programables e indicadores de estado muestran los estados del dispositivo y la actividad de voz

- **Calidad de audio igual o mejor** :en comparación con el modelo anterior

## Descripción del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/no-xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### Componentes principales

| **Componente / Característica** | **Descripción**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Procesador de audio principal** | **XMOS XVF3800**, gestiona el procesamiento de audio incluyendo AEC, conformación de haz, supresión de ruido, etc. |
| **Matriz de micrófonos**      | **Micrófonos MEMS PDM cuádruples** en patrón circular, que admiten **captura de voz de campo lejano de 360° (5 m)**. |
| **Códec de audio**            | **TLV320AIC3104**, gestiona la conversión y salida de audio.                                         |
| **LED RGB**                   | **12x WS2812** LED RGB direccionables individualmente para retroalimentación visual (por ejemplo, estado, actividad de voz). |
| **Botón de silencio**         | Presione para **activar/desactivar el silencio** de la entrada del micrófono.                        |
| **LED indicador de silencio** | Se enciende (normalmente rojo) para mostrar que el audio está silenciado.                            |
| **Botón de reinicio**         | Reinicio por hardware para la placa/sistema.                                                         |
| **Puerto USB tipo C**         | Se utiliza tanto para **alimentación y datos** (compatible con USB Audio Class 2.0).                 |
| **Conector de auriculares AUX de 3,5 mm** | Salida de audio para auriculares o altavoces activos.                                                |
| **Conector de altavoz**       | **Interfaz de altavoz JST**, admite **altavoces amplificados de 5 W**.                               |
| **Pads de depuración**        | Acceso de depuración para **XTAG4** u otros programadores.                                           |
| **Cabeceras I2C e I2S**       | Cabeceras expuestas para **comunicación I2C e I2S** con dispositivos externos.                        |
| **Pads de IO sin usar (XIAO)** | Pads de E/S adicionales soldados conectados al módulo XIAO.                                          |
| **Comunicación I2S e I2C**    | Admite conexión a hosts externos como Raspberry Pi, PC, etc. utilizando estos protocolos.            |
| **Modos USB e INT-Device**    | Funcionamiento de modo dual: USB plug-and-play o modo de dispositivo interno INT mediante I2S.       |
| **Número de serie único**     | **SN del dispositivo** integrado para identificación y gestión de múltiples dispositivos.            |
| **Compatibilidad con código abierto** | Funciona con **Arduino, Raspberry Pi, PC/Mac** y es compatible con **XIAO Serie**.                   |
| **Funciones avanzadas de audio** | AEC, conformación de haz, desreverberación, **detección de DoA**, supresión de ruido basada en DNN, AGC de 60 dB. |
| **Retroalimentación visual**  | Estado del dispositivo y actividad de audio mostrados mediante **patrones de LED RGB** e **indicadores de estado**. |
| **Calidad de audio**          | Igual o mejor que los **diseños anteriores basados en XVF3000**.                                     |

:::note
La ReSpeaker XVF3800 se ofrece en dos variantes: una sin XIAO y otra con el XIAO ESP32S3 integrado. La versión sin XIAO funciona con el firmware USB predeterminado. Para utilizar la versión integrada con XIAO, debes grabar firmware creado para el **modo INT-Device (I2S)**. Para obtener instrucciones de configuración detalladas, consulta la [guía oficial del wiki](/es/respeaker_xvf3800_xiao_getting_started).
:::

### Compatibilidad con XIAO ESP32S3

- Entrada/salida I2S estéreo con múltiples opciones de salida; interfaz I2C para configurar y gestionar los parámetros del XVF3800.
- Reinicio de XIAO mediante pin de IO
- Interfaz y pads de soldadura

### Distribución de pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/gpio_sk.png" alt="pir" width={600} height="auto" /></p>

### Descripción general de los GPIO

La reSpeaker XVF3800 expone 3 pines de entrada (GPI) y 5 pines de salida (GPO) para control externo. Puedes utilizarlos para leer estados de botones o controlar hardware como el LED de silencio, el amplificador o los LED.

| **Nombre del pin** | **Dirección** | **Función**                                       |
|--------------|---------------|------------------------------------------------------|
| X1D09        | Entrada (RO)   | Estado del botón de silencio (alto cuando está liberado) |
| X1D13        | Entrada (RO)   | Flotante                                            |
| X1D34        | Entrada (RO)   | Flotante                                            |
| X0D11        | Salida (RW)    | Flotante                                            |
| X0D30        | Salida (RW)    | Control del LED de silencio + silencio del micrófono (alto = silencio) |
| X0D31        | Salida (RW)    | Habilitación del amplificador (bajo = habilitado)   |
| X0D33        | Salida (RW)    | Control de alimentación del LED WS2812 (alto = encendido) |
| X0D39        | Salida (RW)    | Flotante                                            |

## Primeros pasos

### Preparación de hardware

- Cable USB tipo C  
- Ordenador host o Raspberry Pi

### Preparación de software

### Uso fuera de la caja

:::note

Para garantizar un rendimiento óptimo de captación de voz y el funcionamiento adecuado de los algoritmos de audio, asegúrate de que el Puerto del Micrófono (Entrada de Micrófono / Orificio de Sonido) en la parte posterior del dispositivo esté orientado hacia la fuente de sonido. El puerto del micrófono se encuentra en el lado donde está impreso el logotipo de Seeed Studio. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mic-outlet.png" alt="pir" width={800} height="auto"/></p>
:::

#### DOA (Direction of Arrival)

Puedes experimentar cómo la matriz de LED sigue la dirección de la voz entrante.

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

#### Botón de silencio

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.jpg" alt="pir" width={600} height="auto"/></p>

El **botón de silencio** de tu ReSpeaker se utiliza para **desactivar temporalmente la captura de voz** de la matriz de micrófonos.
¿Qué ocurre cuando presionas el botón de silencio?

- Los **micrófonos se silencian**: las voces externas ya no se capturarán ni procesarán.
- Se **enciende un LED rojo** para indicar que el **modo de silencio está activo**.
- Esto significa que el ReSpeaker **no enviará ninguna entrada de audio** a tu ordenador o dispositivo host.

**Pruébalo tú mismo con Audacity**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.gif" alt="pir" width={600} height="auto"/></p>

#### Botón de reinicio

El botón de reinicio (RST) proporciona un reinicio por hardware para el XVF3800; cuando se presiona, reinicia el chip y vuelve a inicializar el sistema desde el principio, como un ciclo completo de encendido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/reset.gif" alt="pir" width={600} height="auto"/></p>

#### Conexión de altavoces

Aquí puedes ver cómo conectar altavoces utilizando ya sea el conector de auriculares AUX de 3,5 mm o la interfaz de altavoz JST integrada, según tu preferencia de salida de audio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/audio.gif" alt="pir" width={600} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/speaker.jpg" alt="pir" width={600} height="auto"/></p>



#### Modo seguro

El Modo Seguro es un modo especial de recuperación en la ReSpeaker XVF3800 que te permite grabar firmware mediante USB DFU o I2C, para dispositivos como Raspberry Pi y ESP32. Si has grabado previamente el firmware I2S y quieres volver al firmware USB, puedes entrar en Modo Seguro y volver a grabar el firmware USB utilizando USB DFU.

:::note
Cada tipo de firmware en el ReSpeaker XVF3800 admite diferentes métodos de actualización:

- El **firmware USB** solo admite **USB DFU**, lo que significa que puedes actualizar el dispositivo usando una conexión USB. Sin embargo, **no admite I2C DFU**.

- El **firmware I2S** es lo contrario: admite **I2C DFU**, lo que permite actualizaciones de firmware a través de una interfaz I2C, pero **no admite USB DFU**.

- El **firmware de Modo Seguro**, que se almacena en la partición Factory, es el más flexible. Admite **tanto USB DFU como I2C DFU**.

:::

**Cuándo usar el Modo Seguro**

- Tu firmware no funciona correctamente (por ejemplo, USB no detectado, el LED no se enciende como se espera).
- Necesitas volver a grabar un nuevo firmware pero el actual no responde.
- Grabaste algo incorrecto por accidente y quieres recuperarlo.

**Cómo entrar en el Modo Seguro**

- Apaga el dispositivo por completo.
- Mantén presionado el botón de Mute.
- Mientras mantienes presionado el botón de mute, vuelve a conectar la alimentación.
- El LED rojo comenzará a parpadear: esto confirma que el dispositivo está ahora en Modo Seguro.
- Ahora el dispositivo ejecuta el firmware de Modo Seguro almacenado en la partición Factory.

### Actualizar firmware

Hay tres versiones de firmware disponibles en el repositorio oficial de GitHub. Puedes elegir y grabar el firmware adecuado según los requisitos de tu aplicación. Para más detalles y descargas, consulta el [Github Link](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)

:::note
**NO** uses "save as" para descargar los archivos de firmware desde GitHub, ya que se corromperán. Clona el repositorio o usa "Download as ZIP" para descargar todo el repositorio (y todos los archivos incluidos) como un archivo ZIP.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

El firmware USB está diseñado para usarse con sistemas operativos host como **Windows, Linux y macOS** cuando se comunica a través de la interfaz de hardware USB.

Hay dos variantes de firmware disponibles: **respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin**, que proporciona audio de **2 canales**, y **respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin**, que proporciona audio de **6 canales**. Ambas versiones de firmware funcionan a una frecuencia de muestreo de **16 kHz** con una profundidad de **32 bits**.

Puedes explorar estos archivos de firmware en [este enlace](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/usb)

| Firmware | Canales | Notas |
|---------|----------|-------|
| respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin | 2 | Salida procesada de 2 canales <br /> Canal 0: Conferencia <br /> Canal 1: ASR |
| respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin | 6 | Canal 0: Audio procesado (Conferencia) <br /> Canal 1: Audio procesado (ASR) <br /> Canal 2: Datos en bruto del Mic 0 <br /> Canal 3: Datos en bruto del Mic 1 <br /> Canal 4: Datos en bruto del Mic 2 <br /> Canal 5: Datos en bruto del Mic 3 |

</TabItem>

 <TabItem value="I2S" label="I2S">

El firmware I2S está pensado para usarse cuando el dispositivo está conectado a un host microcontrolador como el **XIAO ESP32S3**. En esta configuración, los datos de voz se transmiten usando el protocolo I2S.

El archivo de firmware **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** está disponible [aquí](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s). Este firmware admite audio de **2 canales** con una profundidad de **32 bits**.

| Firmware | Canales | Notas |
|---------|----------|-------|
| respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin | 2 | Salida procesada de 2 canales <br /> Canal 0: Conferencia <br /> Canal 1: ASR |

</TabItem>

<TabItem value="HA" label="HA">

El firmware para Home Assistant es otro firmware basado en I2S diseñado específicamente para la integración con Home Assistant. Este firmware optimizado utiliza audio de 2 canales con una frecuencia de muestreo de 48 kHz, proporcionando mejor compatibilidad y rendimiento dentro del entorno de Home Assistant.
Puedes ver el firmware desde [aquí](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)

| Firmware | Canales | Notas |
|---------|----------|-------|
| respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.x_48k.bin | 2 | Salida procesada de 2 canales <br /> Canal 0: ASR <br /> Canal 1: Palabra de activación |

</TabItem>
</Tabs>

Conecta el reSpeaker XVF3800 a tu PC mediante el cable USB. Ten en cuenta que debes usar el puerto XMOS USB-C (cerca del puerto jack de 3,5 mm) para grabar el firmware de XMOS.

#### Instalar DFU Util

[`dfu-util`](http://dfu-util.sourceforge.net/) es una herramienta de línea de comandos para la actualización de firmware de dispositivos vía USB.

<Tabs>
<TabItem value="windows" label="Windows">

- Descarga `dfu-util-0.11-binaries.tar.xz` y extráelo, por ejemplo, en `D:\dfu-util-0.11-binaries\win64\`  
  [Download Link](http://dfu-util.sourceforge.net/)

- Añade la ruta a `dfu-util.exe` a la variable de sistema `Path`:  
  `My Computer > Properties > Advanced > Environment Variables > Path`

- Abre **Command Prompt** (`cmd`) y verifica la instalación:

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image.png" alt="pir" width={600} height="auto"/></p>

- Conecta el ReSpeaker XVF3800 y comprueba la detección del dispositivo:

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> Si obtienes:  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> Continúa con el paso de instalación del controlador a continuación.

- Instala [Zadig](https://zadig.akeo.ie/)  
  - Abre Zadig → `Options > List All Devices`  
  - Selecciona `reSpeaker 3800` o `reSpeaker XVF3800 4-Mic Array`  
  - Instala el controlador **WinUSB**  
  - Apaga y enciende de nuevo el dispositivo  
  - Ejecuta `dfu-util -l` de nuevo para confirmar la detección.

</TabItem>

 <TabItem value="macos" label="macOS">

- Instala dfu-util con Homebrew:

```bash
brew install dfu-util
```

- Comprueba si el dispositivo es detectado:

```bash
dfu-util -l
```

**Salida esperada:**

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

- Conecta el XVF3800 y comprueba la detección:

```bash
sudo dfu-util -l
```

**Salida esperada:**

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

#### Grabar firmware

Descarga el repositorio completo de firmware desde GitHub aquí [`XMOS XVF 3800`](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)

- Ejecuta el siguiente comando para grabar el firmware

```bash

dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- En Linux, ejecútalo con sudo

```bash
sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- La opción `-R` reiniciará automáticamente la placa después de la grabación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image3.png" alt="pir" width={600} height="auto"/></p>

- Vuelve a comprobar la versión del firmware con el comando `dfu-util -l`, para asegurarte de que el nuevo firmware se ha grabado

## Grabación y reproducción

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
   - **Sample Rate**: `16000 Hz` (tanto para **Project** como para **Default Sample Rate**)
   - **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw2.png" alt="pir" width={600} height="auto"/></p>

1. Haz clic en **OK**
2. Ya estás listo: ¡empieza a grabar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Configurar Audacity (macOS)

1. Abre **Audacity**
2. Ve a **Audio Setup** y selecciona **Recording Device** como **reSpeaker 3800**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. Ve a **Audio Setting** y configura:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**: `reSpeaker 3800`
- **Channels**: `2 (Stereo)`
- **Sample Rate**: `16000 Hz` (tanto para **Project** como para **Default Sample Rate**)
- **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. Haz clic en **OK**
5. ¡Listo para grabar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Grabación en Raspberry Pi (Línea de comandos)

1. **Encontrar el número de la tarjeta de sonido**:

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

 Sustituye `4` por el número real de tu tarjeta de sonido

---

3. **Ajustar el volumen para ReSpeaker XVF3800 en ALSA**

```bash
alsamixer
```

En alsamixer, usa las teclas de flecha izquierda/derecha para navegar hasta el dispositivo de sonido correcto. Usa la tecla de flecha arriba para aumentar el volumen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **Reproducción**:

```bash
aplay -D plughw:4,0 output.wav
```

### Grabación en Raspberry Pi (Audacity)

1. **Instalar Pi-Apps (si aún no está instalado)**

Abre una terminal en tu Raspberry Pi. Ejecuta el siguiente comando para instalar Pi-Apps

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

Espera a que la instalación se complete. Aparecerá un nuevo icono de Pi-Apps en tu menú.

2. **Instalar Audacity mediante Pi-Apps**

3. **Configurar entrada y salida de audio**

- Haz clic en "Audio Setup" en la barra de herramientas.
- Selecciona "Audio Settings" en el menú desplegable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- En la ventana de configuración de audio:
  - Elige el dispositivo de grabación correcto (por ejemplo, reSpeaker XVF3800).
  - Elige el dispositivo de reproducción adecuado (por ejemplo, reSpeaker XVF3800).
  - Asegúrate de que Host esté configurado en ALSA para una mejor compatibilidad en Raspberry Pi.
- Haz clic en OK para aplicar la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **Grabar y reproducir audio**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>

## ¿Cómo ajustar parámetros?

El ajuste permite a los usuarios configurar parámetros de los algoritmos de audio integrados y comunicarse directamente con el chip XMOS.

Se proporciona una interfaz de control dedicada en Python para la configuración de parámetros y la interacción con el dispositivo.


[**Python Control Directory**](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/python_control)

Usando los scripts de Python proporcionados, puedes:

* Configurar parámetros de los algoritmos de audio integrados
* Obtener datos de DoA (Direction of Arrival)
* Obtener datos de VAD (Voice Activity Detection)
* Controlar los LED integrados
* Controlar la canalización de procesamiento de voz
* Comunicarte directamente con el dispositivo XMOS

**Requisitos del sistema**

Se requieren las siguientes dependencias para usar la interfaz de control en Python:

* Python 3.6 o posterior
* Biblioteca de Python `pyusb`
* Biblioteca del sistema `libusb`


### Instalación y dependencias

Instala la dependencia de Python requerida usando:

```bash
pip install pyusb
```

Según tu sistema operativo, es posible que también necesites instalar el paquete `libusb` por separado.



### Uso

**Sintaxis básica**

```bash
python xvf_host.py [options] command [value(s)...]
```



**Opciones de comando**

| Opción         | Descripción                                            |
| -------------- | ----------------------------------------------------- |
| `-l`, `--list` | Lista todos los comandos compatibles con información detallada |
| `--vid`        | Establece el ID de proveedor USB (por defecto: `0x2886`) |
| `--pid`        | Establece el ID de producto USB (por defecto: `0x001A`) |
| `--values`     | Proporciona valores para comandos de escritura (opcional) |



### Ejemplos de uso

**Listar comandos disponibles**

Muestra todos los comandos de firmware compatibles.

```bash
python xvf_host.py --list
```
**Leer versión de firmware**

Obtiene la versión de firmware que se está ejecutando actualmente en el dispositivo.

```bash
python xvf_host.py VERSION
```

**Salida de ejemplo**

```text
VERSION: [2, 0, 7]
```

**Leer dirección de llegada (DOA)**

Obtiene la dirección de la fuente de sonido detectada.

```bash
python xvf_host.py DOA_VALUE
```

**Salida de ejemplo**

```text
DOA_VALUE: [135]
```

**Configurar color del LED**

Configura el color del LED usando un valor RGB hexadecimal.

```bash
python xvf_host.py LED_COLOR --values 0xFF0000
```

**Configurar brillo del LED**

Ajusta el porcentaje de brillo del LED.

```bash
python xvf_host.py LED_BRIGHTNESS --values 50
```
**Leer geometría de la matriz de micrófonos**

Obtiene las coordenadas de los micrófonos utilizadas por los algoritmos de procesamiento acústico.

```bash
python xvf_host.py AEC_MIC_ARRAY_GEO
```

**Salida de ejemplo**

```text
AEC_MIC_ARRAY_GEO:
[0.033, -0.033, 0.000,
 0.033,  0.033, 0.000,
-0.033,  0.033, 0.000,
-0.033, -0.033, 0.000]
```

## Aplicación de consola reSpeaker

Hemos preparado una aplicación de escritorio para controlar y configurar tu dispositivo reSpeaker.

Con esta aplicación, puedes:

* Conectarte a tu dispositivo reSpeaker
* Configurar ajustes de audio (supresión de ruido, ganancia, AEC y configuración de canales)
* Monitorizar Direction of Arrival (DoA) y Voice Activity Detection (VAD)
* Controlar los efectos de los LED
* Ajustar parámetros del dispositivo

### Instalación de la aplicación

Descarga la última versión desde:

https://github.com/respeaker/respeaker-console/releases

| Plataforma | Arquitectura  | Tipo de paquete      |
| --------- | ------------- | -------------------- |
| Windows   | x64           | `.msi` / `.exe`      |
| macOS     | Apple Silicon | `.dmg` (aarch64)     |
| macOS     | Intel         | `.dmg` (x86_64)      |
| Linux     | x64           | `.deb` / `.AppImage` |

### Windows: configuración del controlador USB

Antes de usar la aplicación por primera vez, instala el controlador **WinUSB** usando **Zadig**.

**Paso 1:** Descarga y ejecuta **Zadig**.

**Paso 2:** Selecciona **Options → List All Devices**.

**Paso 3:** Selecciona **reSpeaker 3800** o **reSpeaker XVF3800 4-Mic Array** de la lista de dispositivos.

**Paso 4:** Elige **WinUSB** como controlador.

**Paso 5:** Haz clic en **Install Driver**.

**Paso 6:** Desconecta y vuelve a conectar el dispositivo.

**Paso 7:** Ejecuta el siguiente comando para verificar que el dispositivo sea detectado:

```bash
dfu-util -l
```

:::note
`dfu-util.exe` viene incluido con la aplicación, por lo que no se requiere una instalación por separado.
:::

### Linux: instalar dfu-util y configurar permisos USB

Instala **dfu-util**:

```bash
sudo apt install dfu-util
```

El acceso USB también requiere una regla de **udev**.

Crea el siguiente archivo:

```text
/etc/udev/rules.d/99-respeaker.rules
```

Añade la siguiente línea:

```text
SUBSYSTEM=="usb", ATTRS\{idVendor\}=="2886", MODE="0666", GROUP="plugdev"
```

Recarga las reglas de udev:

```bash
sudo udevadm control --reload-rules && sudo udevadm trigger
```

Por último, desconecta y vuelve a conectar tu dispositivo.

### macOS: instalar dfu-util

Instala **dfu-util** antes de usar la función de actualización de firmware.

```bash
brew install dfu-util
```

### Uso de la aplicación

Después de instalar la aplicación, iníciala para acceder a la **reSpeaker Console**.

Vamos a revisar cada sección de la barra lateral.

#### Conexión del dispositivo

Primero, conecta tu dispositivo reSpeaker.

1. Haz clic en **Scan Devices**.
2. La aplicación mostrará todos los dispositivos detectados.
3. Selecciona tu dispositivo.
4. Haz clic en **Connect** para establecer la conexión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/scan.jpg" alt="Device Connection" width={800} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/connect.jpg" alt="Device Connection" width={800} height="auto"/></p>

#### Audio

La pestaña **Audio** te permite configurar y mejorar la canalización de procesamiento de audio.

Aquí puedes configurar:

* Supresión de ruido no estacionario
* Supresión de ruido estacionario
* Control automático de ganancia (AGC)
* Cancelación de eco acústico (AEC)
* Configuración del canal de salida
* Asignación de canales izquierdo y derecho

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/audio.jpg" alt="Audio Tab" width={800} height="auto"/></p>

#### Monitor

La pestaña **Monitor** proporciona una visualización en tiempo real del procesamiento del micrófono.

Puedes monitorizar:

* Direction of Arrival (DoA)
* Voice Activity Detection (VAD)
* Niveles de energía del haz

Estos indicadores te ayudan a verificar que el dispositivo está detectando correctamente el habla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/monitor.jpg" alt="Monitor Tab" width={800} height="auto"/></p>

#### LEDs

La pestaña **LEDs** te permite personalizar el anillo de LED.

Las funciones disponibles incluyen:

* Efecto de respiración
* Efecto arcoíris
* Efecto de anillo
* Ajuste de brillo
* Control de velocidad de animación
* Selección de color RGB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/led.jpg" alt="LEDs Tab" width={800} height="auto"/></p>

#### Parámetros

La pestaña **Parameters** proporciona acceso a todos los parámetros configurables del dispositivo.

Los ajustes están organizados en categorías como:

* Audio
* Cancelación de eco acústico (AEC)
* Postprocesamiento
* LEDs / GPIO
* Sistema

Desde esta interfaz, puedes actualizar directamente los valores de los parámetros.

Cada parámetro incluye una descripción para ayudarte a entender su propósito y el rango de valores recomendado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/parameters.jpg" alt="Parameters Tab" width={800} height="auto"/></p>

## Solución de problemas

### ¿El sonido de reproducción desde la salida del altavoz no es suficiente?

Si el volumen de salida del altavoz del **ReSpeaker XVF3800** es demasiado bajo en Linux, es posible que necesites ajustar los **niveles del mezclador ALSA** para la tarjeta de sonido XVF3800. Sigue los pasos a continuación para aumentar el volumen de salida.

**Paso 1: Abrir ALSA Mixer**

1. Abre una terminal.
2. Escribe el siguiente comando y presiona **Enter**:

   ```bash
   alsamixer
   ```

**Paso 2: Seleccionar la tarjeta de sonido XVF3800**

1. Presiona **F6** para abrir el menú de selección de tarjeta de sonido.
2. Usa las **flechas arriba/abajo** para resaltar la tarjeta de sonido **XVF3800**.
3. Presiona **Enter** para confirmar la selección.

**Paso 3: Ajustar el volumen de PCM-1**

1. Usa las **flechas izquierda/derecha** para navegar hasta **PCM-1**.
2. Usa la **flecha arriba** para aumentar el nivel de volumen hasta **100%**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alexa.png" alt="pir" width={600} height="auto"/></p>

**Paso 4: Guardar la configuración de ALSA**

1. Presiona **ESC** para salir de `alsamixer`.
2. Antes de desconectar el XVF3800, ejecuta el siguiente comando para guardar tu configuración:

```bash
   sudo alsactl store
   ```

**Paso 5: Opción adicional (usar PulseAudio)**

Si aún no puedes escuchar el sonido con claridad después de ajustar los niveles de ALSA, intenta instalar **PulseAudio Volume Control** para realizar ajustes de volumen más detallados:

```bash
sudo apt install pavucontrol -y
```

Luego puedes abrir **pavucontrol** y aumentar el volumen de salida más allá del 100% si es necesario.

### Después de reinstalar los controladores USB, mi ReSpeaker no graba ni reproduce

Desinstala todos los controladores asociados con el ReSpeaker en el Administrador de dispositivos. Esto resolvió el problema.

### ¿No se puede usar como dispositivo de sonido en Windows después de flashear el firmware?

Abre el menú de inicio y escribe Device manager. Busca los dispositivos relacionados con reSpeaker XVF 3800, haz clic derecho sobre ellos y selecciona Uninstall devices. Después de eso, reinicia el dispositivo (desconecta y vuelve a conectar el USB) y Windows volverá a instalar el controlador de tarjeta de sonido correcto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf_3800_dfu.png" alt="pir" width={600} height="auto"/></p>

## Recursos

- [Archivo 3D de ReSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/respeaker_mic_array_xvf3800_1_with-xiao-0820.stp)
- [Archivo ReSpeaker XVF3800 3D-Enclosure-Up](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/1-up.stp)
- [Archivo ReSpeaker XVF3800 3D-Enclosure-Down](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/1-down.stp)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
