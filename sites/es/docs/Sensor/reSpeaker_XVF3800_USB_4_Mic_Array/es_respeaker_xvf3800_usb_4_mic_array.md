---
description: Comienza con el ReSpeaker XVF3800 USB 4-Mic Array: un módulo de interfaz de voz de alto rendimiento que incorpora captura de voz y compatibilidad multiplataforma mediante USB o I2C.
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
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/
---

# Introducción a ReSpeaker XVF3800

## Descripción general

El ReSpeaker XVF3800 USB 4-Mic Array es una matriz circular profesional de 4 micrófonos con XMOS XVF3800, que incorpora AEC, AGC, DoA, conformación de haz (beamforming), VAD, supresión de ruido, desreverberación, captura de voz de 360° (hasta 5 m) y modos de funcionamiento duales para aplicaciones de voz avanzadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- **Actualización de chip** :De XVF3000 a XVF3800

- **Matriz de cuatro micrófonos** :4 micrófonos de alto rendimiento en un patrón circular para captura de voz de campo lejano de 360° hasta 5 metros

- **Procesamiento de audio avanzado** :Impulsado por XVF3800 con AEC, conformación de haz múltiple, desreverberación, detección de DoA, supresión de ruido dinámica, rango de AGC de 60 dB

- **Número de serie de dispositivo único** :El SN integrado permite despliegues con múltiples dispositivos y gestión avanzada de dispositivos

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
| **Botón de silencio (Mute)**  | Presiona para **silenciar/activar** la entrada del micrófono.                                       |
| **LED indicador de silencio** | Se enciende (normalmente en rojo) para indicar que el audio está silenciado.                        |
| **Botón de reinicio**         | Reinicio por hardware para la placa/sistema.                                                        |
| **Puerto USB tipo C**         | Se utiliza tanto para **alimentación como para datos** (compatible con USB Audio Class 2.0).        |
| **Conector de auriculares AUX de 3,5 mm** | Salida de audio para auriculares o altavoces activos.                                               |
| **Conector de altavoz**       | **Interfaz de altavoz JST**, admite **altavoces amplificados de 5 W**.                              |
| **Pads de depuración**        | Acceso de depuración para **XTAG4** u otros programadores.                                          |
| **Cabeceras I2C e I2S**       | Cabeceras expuestas para **comunicación I2C e I2S** con dispositivos externos.                       |
| **Pads de IO sin usar (XIAO)** | Pads de E/S adicionales soldados y conectados al módulo XIAO.                                      |
| **Comunicación I2S e I2C**    | Admite conexión a hosts externos como Raspberry Pi, PC, etc. usando estos protocolos.               |
| **Modos USB e INT-Device**    | Funcionamiento de modo dual: USB plug-and-play o modo de dispositivo interno INT mediante I2S.      |
| **Número de serie único**     | **SN de dispositivo** integrado para identificación y gestión de múltiples dispositivos.            |
| **Compatibilidad con código abierto** | Funciona con **Arduino, Raspberry Pi, PC/Mac** y es compatible con **XIAO Serie**.                  |
| **Funciones avanzadas de audio** | AEC, conformación de haz, desreverberación, **detección de DoA**, supresión de ruido basada en DNN, AGC de 60 dB. |
| **Retroalimentación visual**  | Estado del dispositivo y actividad de audio mostrados mediante **patrones de LED RGB** e **indicadores de estado**. |
| **Calidad de audio**          | Igual o mejor que los **diseños anteriores basados en XVF3000**.                                    |

:::note
El ReSpeaker XVF3800 se ofrece en dos variantes: una sin XIAO y otra con el XIAO ESP32S3 integrado. La versión sin XIAO funciona con el firmware USB predeterminado. Para usar la versión con XIAO integrado, debes flashear firmware compilado para el **modo INT-Device (I2S)**. Para obtener instrucciones de configuración detalladas, consulta la [guía oficial del wiki](/es/respeaker_xvf3800_xiao_getting_started).
:::

### Compatibilidad con XIAO ESP32S3

- Entrada/salida I2S estéreo con múltiples opciones de salida; interfaz I2C para configurar y gestionar los parámetros del XVF3800.
- Reinicio de XIAO mediante pin de IO
- Interfaz y pads de soldadura

### Distribución de pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/gpio_sk.png" alt="pir" width={600} height="auto" /></p>

### Descripción general de los GPIO

El reSpeaker XVF3800 expone 3 pines de entrada (GPI) y 5 pines de salida (GPO) para control externo. Puedes usarlos para leer estados de botones o controlar hardware como el LED de silencio, el amplificador o los LED.

| **Nombre de pin** | **Dirección** | **Función**                                       |
|--------------|---------------|------------------------------------------------------|
| X1D09        | Input (RO)    | Estado del botón de silencio (alto cuando está liberado) |
| X1D13        | Input (RO)    | Flotante                                             |
| X1D34        | Input (RO)    | Flotante                                             |
| X0D11        | Output (RW)   | Flotante                                             |
| X0D30        | Output (RW)   | Control del LED de silencio + silencio del micrófono (alto = silencio) |
| X0D31        | Output (RW)   | Habilitación del amplificador (bajo = habilitado)    |
| X0D33        | Output (RW)   | Control de alimentación de LED WS2812 (alto = encendido) |
| X0D39        | Output (RW)   | Flotante                                             |

## Primeros pasos

### Preparación de hardware

- Cable USB tipo C  
- Ordenador host o Raspberry Pi

### Preparación de software

### Uso fuera de la caja

:::note

Para garantizar un rendimiento óptimo de captación de voz y el funcionamiento correcto de los algoritmos de audio, asegúrate de que el puerto del micrófono (entrada de micrófono / orificio de sonido) en la parte posterior del dispositivo esté orientado hacia la fuente de sonido. El puerto del micrófono se encuentra en el lado donde está impreso el logotipo de Seeed Studio.

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

#### Botón de silencio (Mute)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.jpg" alt="pir" width={600} height="auto"/></p>

El **botón de silencio (Mute)** de tu ReSpeaker se utiliza para **desactivar temporalmente la captura de voz** de la matriz de micrófonos.
¿Qué ocurre cuando presionas el botón de silencio?

- Los **micrófonos se silencian**: las voces externas ya no se capturarán ni procesarán.
- Se **enciende un LED rojo** para indicar que el **modo de silencio está activo**.
- Esto significa que el ReSpeaker **no enviará ninguna entrada de audio** a tu ordenador o dispositivo host.

**Pruébalo tú mismo con Audacity**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mute.gif" alt="pir" width={600} height="auto"/></p>

#### Botón de reinicio

El botón de reinicio (RST) proporciona un reinicio por hardware para el XVF3800; cuando se presiona, reinicia el chip y vuelve a inicializar el sistema desde el principio, como en un ciclo completo de encendido.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/reset.gif" alt="pir" width={600} height="auto"/></p>

#### Conexión de altavoz

Aquí puedes ver cómo conectar altavoces usando ya sea el conector de auriculares AUX de 3,5 mm o la interfaz de altavoz JST integrada, según tu preferencia de salida de audio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/audio.gif" alt="pir" width={600} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/speaker.jpg" alt="pir" width={600} height="auto"/></p>

#### Modo seguro

El modo seguro es un modo especial de recuperación en el ReSpeaker XVF3800 que te permite flashear firmware mediante USB DFU o I2C, para dispositivos como Raspberry Pi y ESP32. Si has flasheado previamente el firmware I2S y quieres volver al firmware USB, puedes entrar en modo seguro y volver a flashear el firmware USB usando USB DFU.

:::note
Cada tipo de firmware en el ReSpeaker XVF3800 admite diferentes métodos de actualización:

- El **firmware USB** solo admite **USB DFU**, lo que significa que puedes actualizar el dispositivo usando una conexión USB. Sin embargo, **no admite I2C DFU**.

- El **firmware I2S** es lo contrario: admite **I2C DFU**, lo que permite actualizaciones de firmware a través de una interfaz I2C, pero **no admite USB DFU**.

- El **firmware de Modo Seguro**, que se almacena en la partición Factory, es el más flexible. Admite **tanto USB DFU como I2C DFU**.

:::

**Cuándo usar el Modo Seguro**

- Tu firmware no funciona correctamente (por ejemplo, USB no detectado, el LED no se enciende como se espera).
- Necesitas volver a flashear un nuevo firmware pero el actual no responde.
- Flasheaste algo incorrecto por accidente y quieres recuperarlo.

**Cómo entrar en Modo Seguro**

- Apaga el dispositivo por completo.
- Mantén presionado el botón de Mute.
- Mientras mantienes presionado el botón de mute, vuelve a conectar la alimentación.
- El LED rojo comenzará a parpadear: esto confirma que el dispositivo está ahora en Modo Seguro.
- Ahora el dispositivo ejecuta el firmware de Modo Seguro almacenado en la partición Factory.

### Actualizar firmware

Hay tres versiones de firmware disponibles en el repositorio oficial de GitHub. Puedes elegir y flashear el firmware apropiado según los requisitos de tu aplicación. Para más detalles y descargas, consulta el [Github Link](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)

:::note
**NO** uses "save as" para descargar los archivos de firmware desde GitHub, ya que se corromperán. Clona el repositorio o usa "Download as ZIP" para descargar todo el repositorio (y todos los archivos incluidos) como un archivo ZIP.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

### Firmware USB

El firmware USB está destinado a sistemas host como Windows, Linux y macOS. El registro de cambios oficial del firmware USB marca la v2.1.0 como la versión actual, y el directorio de firmware actual contiene estas imágenes v2.1.0:

| Imagen de firmware | Perfil USB etiquetado en el repositorio |
| --- | --- |
| `respeaker_xvf3800_usb_dfu_firmware_v2.1.0.bin` | Imagen USB estándar v2.1.0. Su nombre de archivo no indica una frecuencia de muestreo ni un número de canales. |
| `respeaker_xvf3800_usb_dfu_firmware_v2.1.0_16k6ch.bin` | Imagen USB de 16 kHz y 6 canales. |
| `respeaker_xvf3800_usb_dfu_firmware_v2.1.0_48k2ch.bin` | Imagen USB de 48 kHz y 2 canales. |

Elige la imagen cuyo perfil etiquetado coincida con tu aplicación. Para captura USB de 48 kHz y dos canales, usa exactamente la imagen `_48k2ch`; no infieras compatibilidad con 48 kHz a partir del nombre de archivo genérico v2.1.0.

El directorio de firmware y el registro de cambios no publican un volcado del descriptor de USB Audio Class para estos binarios. Después de flashear, verifica los formatos informados por el host antes de configurar la aplicación de grabación. No indiques un ancho de muestra USB ni combinaciones adicionales de frecuencia de muestreo/canales sin evidencia del descriptor del dispositivo.
</TabItem>

 <TabItem value="I2S" label="I2S">

El firmware I2S está destinado a usarse cuando el dispositivo está conectado a un host microcontrolador como el **XIAO ESP32S3**. En esta configuración, los datos de voz se transmiten usando el protocolo I2S.

El archivo de firmware **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** está disponible [aquí](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s). Este firmware admite audio de **2 canales** con una profundidad de **32 bits**.

| Firmware | Canales | Notas |
|---------|----------|-------|
| respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin | 2 | Salida procesada de 2 canales <br /> Canal 0: Conferencia <br /> Canal 1: ASR |

</TabItem>

<TabItem value="HA" label="HA">

El firmware para Home Assistant es otro firmware basado en I2S diseñado específicamente para la integración con Home Assistant. Este firmware optimizado usa audio de 2 canales con una frecuencia de muestreo de 48 kHz, proporcionando mejor compatibilidad y rendimiento dentro del entorno de Home Assistant.
Puedes ver el firmware desde [aquí](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s)

| Firmware | Canales | Notas |
|---------|----------|-------|
| respeaker_xvf3800_i2s_master_dfu_firmware_v1.0.x_48k.bin | 2 | Salida procesada de 2 canales <br /> Canal 0: ASR <br /> Canal 1: Palabra de activación |

</TabItem>
</Tabs>

Conecta el reSpeaker XVF3800 a tu PC mediante el cable USB. Ten en cuenta que necesitas usar el puerto XMOS USB-C (cerca del puerto jack de 3,5 mm) para flashear el firmware de XMOS.

#### Instalar DFU Util

[`dfu-util`](http://dfu-util.sourceforge.net/) es una herramienta de línea de comandos para Device Firmware Upgrade vía USB.

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
  - Ejecuta `dfu-util -l` otra vez para confirmar la detección.

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

#### Flashear firmware

Descarga el repositorio completo de firmware desde GitHub aquí [`XMOS XVF 3800`](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)

- Ejecuta el siguiente comando para flashear el firmware

```bash

dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- En Linux, ejecútalo con sudo

```bash
sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- La opción `-R` reiniciará automáticamente la placa después de flashear.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image3.png" alt="pir" width={600} height="auto"/></p>

- Vuelve a comprobar la versión del firmware con el comando `dfu-util -l`, para asegurarte de que el nuevo firmware se ha flasheado

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

Espera a que finalice la instalación. Aparecerá un nuevo icono de Pi-Apps en tu menú.

2. **Instalar Audacity mediante Pi-Apps**

3. **Configurar entrada y salida de audio**

- Haz clic en "Audio Setup" en la barra de herramientas.
- Selecciona "Audio Settings" en el menú desplegable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- En la ventana de Audio Settings:
  - Elige el dispositivo de grabación correcto (por ejemplo, reSpeaker XVF3800).
  - Elige el dispositivo de reproducción apropiado (por ejemplo, reSpeaker XVF3800).
  - Asegúrate de que Host esté configurado en ALSA para la mejor compatibilidad en Raspberry Pi.
- Haz clic en OK para aplicar la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **Grabar y reproducir audio**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>

## ¿Cómo ajustar parámetros?

El ajuste permite a los usuarios configurar parámetros de los algoritmos de audio integrados y comunicarse directamente con el chip XMOS.

Se proporciona una interfaz de control en Python dedicada para la configuración de parámetros y la interacción con el dispositivo.

[**Directorio de control en Python**](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/python_control)

Usando los scripts de Python proporcionados, puedes:

- Configurar parámetros de los algoritmos de audio integrados
- Obtener datos de DoA (Direction of Arrival)
- Obtener datos de VAD (Voice Activity Detection)
- Controlar los LED integrados
- Controlar la canalización de procesamiento de voz
- Comunicarte directamente con el dispositivo XMOS

**Requisitos del sistema**

Se requieren las siguientes dependencias para usar la interfaz de control en Python:

- Python 3.6 o posterior
- Biblioteca de Python `pyusb`
- Biblioteca de sistema `libusb`

### Instalación y dependencias

Instala la dependencia de Python requerida usando:

```bash
pip install pyusb
```

Según tu sistema operativo, puede que también necesites instalar el paquete `libusb` por separado.

### Uso

**Sintaxis básica**

```bash
python xvf_host.py [options] command [value(s)...]
```

**Opciones de comando**

| Option         | Description                                           |
| -------------- | ----------------------------------------------------- |
| `-l`, `--list` | List all supported commands with detailed information |
| `--vid`        | Set USB Vendor ID (default: `0x2886`)                 |
| `--pid`        | Set USB Product ID (default: `0x001A`)                |
| `--values`     | Provide values for write commands (optional)          |

### Ejemplos de uso

**Listar comandos disponibles**

Muestra todos los comandos de firmware compatibles.

```bash
python xvf_host.py --list
```

**Leer versión del firmware**

Obtiene la versión de firmware que se está ejecutando actualmente en el dispositivo.

```bash
python xvf_host.py VERSION
```

**Salida de ejemplo**

```text
VERSION: [2, 0, 7]
```

**Leer Direction of Arrival (DOA)**

Obtiene la dirección detectada de la fuente de sonido.

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

## Aplicación reSpeaker XVF_HOST

La aplicación `xvf_host` es una utilidad del lado del host que se usa para comunicarse con el reSpeaker XVF3800 a través de USB. Puede utilizarse para leer o modificar parámetros de control del XVF3800, comprobar la versión del firmware, leer valores GPIO y acceder a funciones como Direction of Arrival (DoA).


La aplicación Host Controller se puede encontrar [aquí](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/host_control)

### Archivos de la aplicación Host

La aplicación host se encuentra en el directorio `host_control` del repositorio.

Los directorios de plataformas típicas incluyen:

```text
host_control/
├── linux_x86_64/
├── mac_arm64/
├── win32/
└── ...
```

Cada directorio de plataforma contiene la aplicación host y las bibliotecas requeridas por dicha aplicación.

Por ejemplo:

**Windows**

```text
host_control/win32/
├── command_map.dll
├── device_usb.dll
└── xvf_host.exe
```

**Linux**

```text
host_control/linux_x86_64/
├── libcommand_map.so
├── libdevice_usb.so
└── xvf_host
```

**macOS**

```text
host_control/mac_arm64/
├── libcommand_map.dylib
├── libdevice_usb.dylib
├── libusb-1.0.0.dylib
└── xvf_host
```

> **Importante:** Mantén el directorio completo de la plataforma junto cuando copies la aplicación host a otro ordenador. El ejecutable depende de las bibliotecas ubicadas en el mismo directorio.

<Tabs>
<TabItem value="windows" label="Windows">

**1. Conectar el XVF3800**

Conecta el reSpeaker XVF3800 al PC con Windows usando USB.

**2. Abrir Command Prompt o PowerShell**

Navega al directorio de la aplicación host para Windows:

```powershell
cd C:\path\to\reSpeaker_XVF3800_USB_4MIC_ARRAY\host_control\win32
```

**3. Comprobar la aplicación Host**

Ejecuta:

```powershell
xvf_host.exe --help
```

Si la aplicación funciona correctamente, se mostrará la información de ayuda.

Para mostrar todos los comandos de control disponibles:

```powershell
xvf_host.exe --list-commands
```

La opción `--list-commands` muestra los comandos compatibles con la aplicación host.

**4. Comprobar la conexión del XVF3800**

Ejecuta:

```powershell
xvf_host.exe VERSION
```

Una conexión correcta debería producir una salida similar a:

```text
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 10
```

La versión del firmware dependerá del firmware instalado en el XVF3800.

El comando `VERSION` es una forma sencilla de verificar que `xvf_host.exe` puede comunicarse con el XVF3800.

**5. Leer valores GPI**

```powershell
xvf_host.exe GPI_READ_VALUES
```

**6. Leer valores GPO**

```powershell
xvf_host.exe GPO_READ_VALUES
```

**7. Leer Direction of Arrival (DoA)**

```powershell
xvf_host.exe AEC_AZIMUTH_VALUES
```

El valor de acimut devuelto puede utilizarse para determinar la dirección detectada de la fuente de sonido.

**8. Listar comandos disponibles**

Para ver todos los comandos host disponibles del XVF3800:

```powershell
xvf_host.exe --list-commands
```

Luego puedes usar cualquier comando compatible con:

```powershell
xvf_host.exe <COMMAND>
```

Por ejemplo:

```powershell
xvf_host.exe VERSION
```

</TabItem>

<TabItem value="linux" label="Linux">

**1. Conectar el XVF3800**

Conecta el reSpeaker XVF3800 al ordenador Linux usando USB.

**2. Navegar al directorio de la aplicación Host para Linux**

Para un sistema Linux x86-64:

```bash
cd ~/reSpeaker_XVF3800_USB_4MIC_ARRAY/host_control/linux_x86_64
```

**3. Dar permiso de ejecución a la aplicación**

Ejecuta:

```bash
chmod +x xvf_host
```

**4. Comprobar la aplicación Host**

Ejecuta:

```bash
./xvf_host --help
```

Para mostrar todos los comandos de control disponibles:

```bash
./xvf_host --list-commands
```

**5. Comprobar la conexión del XVF3800**

Ejecuta:

```bash
./xvf_host VERSION
```

Una conexión correcta debería producir una salida similar a:

```text
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 10
```

La versión del firmware dependerá del firmware instalado en el XVF3800.

El comando `VERSION` es una forma sencilla de verificar que `xvf_host` puede comunicarse con el XVF3800.

**6. Si se deniegan los permisos USB**

Si la aplicación no puede acceder al dispositivo USB debido a los permisos USB de Linux, puedes probar la aplicación con:

```bash
sudo ./xvf_host VERSION
```

Si el comando funciona con `sudo` pero no sin él, el problema probablemente esté relacionado con los permisos del dispositivo USB en Linux o con las reglas de udev.

**7. Leer valores GPI**

```bash
./xvf_host GPI_READ_VALUES
```

**8. Leer valores GPO**

```bash
./xvf_host GPO_READ_VALUES
```

**9. Leer Direction of Arrival (DoA)**

```bash
./xvf_host AEC_AZIMUTH_VALUES
```

**10. Listar comandos disponibles**

```bash
./xvf_host --list-commands
```

A continuación, puedes ejecutar un comando compatible usando:

```bash
./xvf_host <COMMAND>
```

Por ejemplo:

```bash
./xvf_host VERSION
```

</TabItem>

<TabItem value="macos" label="macOS">

**1. Conecta el XVF3800**

Conecta el reSpeaker XVF3800 al Mac usando USB.

**2. Navega al directorio de la aplicación host de macOS**

Para un Mac con Apple Silicon:

```bash
cd ~/reSpeaker_XVF3800_USB_4MIC_ARRAY/host_control/mac_arm64
```

**3. Concede permiso de ejecución a la aplicación**

Ejecuta:

```bash
chmod +x xvf_host
```

**4. Comprueba la aplicación host**

Ejecuta:

```bash
./xvf_host --help
```

Para mostrar todos los comandos de control disponibles:

```bash
./xvf_host --list-commands
```

**5. Comprueba la conexión del XVF3800**

Ejecuta:

```bash
./xvf_host VERSION
```

Una conexión correcta debería producir una salida similar a:

```text
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
VERSION 2 0 10
```

La versión del firmware dependerá del firmware instalado en el XVF3800.

**6. Leer valores GPI**

```bash
./xvf_host GPI_READ_VALUES
```

**7. Leer valores GPO**

```bash
./xvf_host GPO_READ_VALUES
```

**8. Leer dirección de llegada (DoA)**

```bash
./xvf_host AEC_AZIMUTH_VALUES
```

**9. Listar comandos disponibles**

```bash
./xvf_host --list-commands
```

</TabItem>
</Tabs>

### Comandos comunes

Los siguientes comandos son útiles para pruebas básicas del XVF3800:

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `--help`             | Display host application help      |
| `--list-commands`    | Display available XVF3800 commands |
| `VERSION`            | Read the XVF3800 firmware version  |
| `GPI_READ_VALUES`    | Read GPI values                    |
| `GPO_READ_VALUES`    | Read GPO values                    |
| `AEC_AZIMUTH_VALUES` | Read the current DoA/azimuth value |


Se pueden encontrar más comandos [aquí](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/host_control)


## Aplicación de consola reSpeaker

Hemos preparado una aplicación de escritorio para controlar y configurar tu dispositivo reSpeaker.

Con esta aplicación, puedes:

- Conectarte a tu dispositivo reSpeaker
- Configurar los ajustes de audio (supresión de ruido, ganancia, AEC y configuración de canales)
- Monitorizar la dirección de llegada (DoA) y la detección de actividad de voz (VAD)
- Controlar los efectos LED
- Ajustar los parámetros del dispositivo

### Instalación de la aplicación

Descarga la última versión desde:

https://github.com/respeaker/respeaker-console/releases

| Platform | Architecture  | Package Type         |
| -------- | ------------- | -------------------- |
| Windows  | x64           | `.msi` / `.exe`      |
| macOS    | Apple Silicon | `.dmg` (aarch64)     |
| macOS    | Intel         | `.dmg` (x86_64)      |
| Linux    | x64           | `.deb` / `.AppImage` |

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
2. La aplicación listará todos los dispositivos detectados.
3. Selecciona tu dispositivo.
4. Haz clic en **Connect** para establecer la conexión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/scan.jpg" alt="Conexión del dispositivo" width={800} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/connect.jpg" alt="Conexión del dispositivo" width={800} height="auto"/></p>

#### Audio

La pestaña **Audio** te permite configurar y mejorar la canalización de procesamiento de audio.

Aquí puedes configurar:

- Supresión de ruido no estacionario
- Supresión de ruido estacionario
- Control automático de ganancia (AGC)
- Cancelación de eco acústico (AEC)
- Configuración de canales de salida
- Asignación de canales izquierdo y derecho

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/audio.jpg" alt="Pestaña Audio" width={800} height="auto"/></p>

#### Monitor

La pestaña **Monitor** proporciona una visualización en tiempo real del procesamiento del micrófono.

Puedes monitorizar:

- Dirección de llegada (DoA)
- Detección de actividad de voz (VAD)
- Niveles de energía del haz

Estos indicadores te ayudan a verificar que el dispositivo está detectando el habla correctamente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/monitor.jpg" alt="Pestaña Monitor" width={800} height="auto"/></p>

#### LEDs

La pestaña **LEDs** te permite personalizar el anillo de LEDs.

Las funciones disponibles incluyen:

- Efecto de respiración
- Efecto arcoíris
- Efecto de anillo
- Ajuste de brillo
- Control de velocidad de animación
- Selección de color RGB

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/led.jpg" alt="Pestaña LEDs" width={800} height="auto"/></p>

#### Parámetros

La pestaña **Parameters** proporciona acceso a todos los parámetros configurables del dispositivo.

Los ajustes están organizados en categorías como:

- Audio
- Cancelación de eco acústico (AEC)
- Posprocesamiento
- LEDs / GPIO
- Sistema

Desde esta interfaz, puedes actualizar directamente los valores de los parámetros.

Cada parámetro incluye una descripción para ayudarte a entender su propósito y el rango de valores recomendado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/app/parameters.jpg" alt="Pestaña Parameters" width={800} height="auto"/></p>

## Solución de problemas

### ¿El sonido de reproducción desde la salida del altavoz no es suficiente?

Si el volumen de salida del altavoz del **ReSpeaker XVF3800** es demasiado bajo en Linux, puede que necesites ajustar los **niveles del mezclador ALSA** para la tarjeta de sonido XVF3800. Sigue los pasos a continuación para aumentar el volumen de salida.

**Paso 1: Abrir ALSA Mixer**

1. Abre una terminal.
2. Escribe el siguiente comando y pulsa **Enter**:

   ```bash
   alsamixer
   ```

**Paso 2: Seleccionar la tarjeta de sonido XVF3800**

1. Pulsa **F6** para abrir el menú de selección de tarjeta de sonido.
2. Usa las **teclas de flecha arriba/abajo** para resaltar la tarjeta de sonido **XVF3800**.
3. Pulsa **Enter** para confirmar la selección.

**Paso 3: Ajustar el volumen de PCM-1**

1. Usa las **teclas de flecha izquierda/derecha** para navegar hasta **PCM-1**.
2. Usa la **tecla de flecha arriba** para aumentar el nivel de volumen hasta **100%**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alexa.png" alt="pir" width={600} height="auto"/></p>

**Paso 4: Guardar la configuración de ALSA**

1. Pulsa **ESC** para salir de `alsamixer`.
2. Antes de desconectar el XVF3800, ejecuta el siguiente comando para guardar tu configuración:

```bash
   sudo alsactl store
   ```

**Paso 5: Opción adicional (usando PulseAudio)**

Si aún no puedes escuchar el sonido con claridad después de ajustar los niveles de ALSA, intenta instalar **PulseAudio Volume Control** para realizar ajustes de volumen más detallados:

```bash
sudo apt install pavucontrol -y
```

Luego puedes abrir **pavucontrol** y aumentar el volumen de salida por encima del 100% si es necesario.

### Después de reinstalar los controladores USB, mi ReSpeaker no graba ni reproduce

Desinstala todos los controladores asociados con el ReSpeaker en el Administrador de dispositivos. Esto resolvió el problema.

### ¿No se puede usar como dispositivo de sonido en Windows después de flashear el firmware?

Abre el menú de inicio y escribe Device manager. Busca los dispositivos reSpeaker XVF 3800 relacionados, haz clic derecho sobre ellos y selecciona Uninstall devices. Después de eso, reinicia el dispositivo (desconecta y vuelve a conectar el USB) y Windows volverá a instalar el controlador de tarjeta de sonido correcto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf_3800_dfu.png" alt="pir" width={600} height="auto"/></p>

### ¿Cómo puedo abrir la carcasa sin dañarla?

Puedes usar tus uñas para levantar suavemente los bordes de la carcasa. Hay tres clips de bloqueo que aseguran la tapa. Una vez que sueltes uno de los clips, la carcasa se puede abrir con relativa facilidad. Manipula la carcasa con cuidado para evitar dañar los clips o el contenedor.

### ¿Por qué mi reSpeaker XVF3800 no se detecta como dispositivo de sonido?

La versión reSpeaker XVF3800 ESP32 se envía con firmware I2S por defecto, por lo que no aparecerá como un dispositivo de audio USB cuando se conecte a un PC. Esta información se menciona en nuestra página de producto en Bazaar y en la documentación oficial.

Si quieres usar el dispositivo como **dispositivo de audio USB**, necesitas reflashearlo con el firmware USB. Sigue estos pasos:

1. **Primero entra en modo seguro:**
   [Instrucciones de modo seguro](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#modo-seguro)

2. **Flashea el firmware USB:**
   [Instrucciones de actualización de firmware](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#actualizar-firmware)

### ¿Por qué algunos canales están en silencio con el firmware de 6 canales del XVF3800?

Es posible que los canales de micrófono en bruto deban habilitarse mediante los controles del mezclador de audio del sistema después de flashear el firmware de 6 canales.

En Linux, primero comprueba el ID de la tarjeta de audio:

```bash
arecord -l
```

Por ejemplo, si el XVF3800 aparece como **tarjeta 1**, habilita los canales de captura y ajusta su volumen:

```bash
amixer -c 1 cset numid=8 on,on,on,on,on,on
amixer -c 1 cset numid=10 60,60,60,60,60,60
```

Ajusta los valores de volumen según sea necesario y luego guarda la configuración:

```bash
sudo alsactl store 1
```

Después de aplicar estos ajustes, los seis canales deberían capturar audio distinto de cero.

**Windows:** Si algunos canales siguen en silencio, intenta desinstalar el controlador del dispositivo XVF3800 desde el **Administrador de dispositivos**, luego desconecta y vuelve a conectar el dispositivo. Esto permite que Windows vuelva a configurar el dispositivo y el controlador.

## ¿Cómo usar comandos I2C para controlar la reSpeaker XVF3800 USB Mic Array con XIAO ESP32S3?

Proporcionamos una lista detallada de comandos I2C y ejemplos de código. Consulta la sección [Using I2C Commands to Control reSpeaker XVF3800 USB Mic Array with XIAO ESP32S3](/es/respeaker_xvf_3800_i2c_list).

## Recursos

- [Archivo 2D de ReSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf3800_2d_mechanical_drawing.pdf)
- [Archivo 3D de ReSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/respeaker_mic_array_xvf3800_1_with-xiao-0820.stp)
- [Archivo 3D de carcasa superior de ReSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/1-up.stp)
- [Archivo 3D de carcasa inferior de ReSpeaker XVF3800](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/3d/1-down.stp)

## Referencia

- [Hoja de datos del chip XMOS XVF3800](https://www.xmos.com/documentation/XM-014888-PC/html/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
