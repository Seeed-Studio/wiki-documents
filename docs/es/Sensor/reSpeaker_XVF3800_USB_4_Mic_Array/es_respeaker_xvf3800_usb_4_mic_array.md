---
description: Comienza con el ReSpeaker XVF3800 USB 4-Mic Array—un módulo de interfaz de voz de alto rendimiento que incluye captura de voz y soporte multiplataforma vía USB o I2C.

title: Comenzando con reSpeaker XVF3800 USB Mic Array
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /es/respeaker_xvf3800_introduction
last_update:
  date: 8/20/2025
  author: Kasun Thushara
---

# Comenzando con ReSpeaker XVF3800

## Descripción General

El ReSpeaker XVF3800 USB 4-Mic Array es un arreglo circular profesional de 4 micrófonos con XMOS XVF3800, que incluye AEC, AGC, DoA, beamforming, VAD, supresión de ruido, des-reverberación, captura de voz 360° (hasta 5m), y modos de operación dual para aplicaciones de voz avanzadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtén Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- **Actualización de chip** :De XVF3000 a XVF3800
  
- **Arreglo de Cuatro Micrófonos** :4 micrófonos de alto rendimiento en patrón circular para captura de voz de campo lejano 360° hasta 5 metros
  
- **Procesamiento de Audio Avanzado** :Impulsado por XVF3800 con AEC, multi-beamforming, des-reverberación, detección DoA, supresión dinámica de ruido, rango AGC de 60dB

- **Número de Serie Único del Dispositivo** :SN integrado permite despliegues multi-dispositivo y gestión avanzada de dispositivos

- **Modos de Operación Dual** :Modo USB plug-and-play para conectividad instantánea a PC y modo INT-Device (I2S) para integración con sistemas embebidos—configurable vía comandos USB o I2C cambiando el firmware correspondiente

- **Compatible con Código Abierto** :Funciona con hosts USB (Windows, macOS, Raspberry Pi OS) y hosts I2S (Serie XIAO, ESP32, Arduino).

- **Retroalimentación Visual** :LEDs RGB programables e indicadores de estado muestran estados del dispositivo y actividad de voz

- **Calidad de audio igual o mejor** :comparada con el modelo anterior

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/no-xiao-xvf.jpg" alt="pir" width={900} height="auto" /></p>

### Componentes Principales

| **Componente / Característica**       | **Descripción**                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Procesador de Audio Principal**      | **XMOS XVF3800**, maneja el procesamiento de audio incluyendo AEC, beamforming, supresión de ruido, etc.       |
| **Array de Micrófonos**          | **Cuatro micrófonos MEMS PDM** en patrón circular, soportando **captura de voz de campo lejano 360° (5m)**. |
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
| **Modos USB e INT-Device**    | Operación de modo dual: USB plug-and-play o modo de dispositivo INT interno vía I2S.                          |
| **Número de Serie Único**      | **SN de dispositivo** integrado para identificación y gestión de múltiples dispositivos.                               |
| **Compatibilidad de Código Abierto** | Funciona con **Arduino, Raspberry Pi, PC/Mac**, y compatible con **Serie XIAO**.                   |
| **Características de Audio Avanzadas**   | AEC, beamforming, desreverberación, **detección DoA**, supresión de ruido basada en DNN, AGC de 60dB.         |
| **Retroalimentación Visual**           | Estado del dispositivo y actividad de audio mostrados vía **patrones de LED RGB** e **indicadores de estado**.            |
| **Calidad de Audio**             | Igual o mejor que los **diseños previos basados en XVF3000**.                                         |

:::note
El ReSpeaker XVF3800 se ofrece en dos variantes: una sin XIAO y otra con el XIAO ESP32S3 integrado. La versión sin XIAO opera con firmware USB predeterminado. Para usar la versión con XIAO integrado, debes flashear firmware construido para el modo **INT-Device (I2S)**. Para instrucciones detalladas de configuración, consulta la [guía wiki oficial](docs/Sensor/reSpeaker_XVF3800_USB_4_Mic_Array/respeaker_xvf3800_with_xiao_intro.md).
:::

### Soporte para XIAO ESP32S3

- Entrada/salida I2S estéreo con múltiples opciones de salida; interfaz I2C para configurar y gestionar parámetros del XVF3800.
- Reinicio de XIAO vía pin IO
- Interfaz y pads de soldadura

### Distribución de Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/pinout.jpg" alt="pir" width={900} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/gpio_sk.png" alt="pir" width={600} height="auto" /></p>

### Descripción General de GPIO

El reSpeaker XVF3800 expone 3 pines de entrada (GPI) y 5 pines de salida (GPO) para control externo. Puedes usarlos para leer estados de botones o controlar hardware como el LED de silencio, amplificador o LEDs.

| **Nombre del Pin** | **Dirección** | **Función**                                         |
|-------------------|---------------|-----------------------------------------------------|
| X1D09             | Entrada (RO)  | Estado del botón de silencio (alto cuando se libera) |
| X1D13             | Entrada (RO)  | Flotante                                            |
| X1D34             | Entrada (RO)  | Flotante                                            |
| X0D11             | Salida (RW)   | Flotante                                            |
| X0D30             | Salida (RW)   | LED de silencio + control de silencio del micrófono (alto = silencio) |
| X0D31             | Salida (RW)   | Habilitación del amplificador (bajo = habilitado)   |
| X0D33             | Salida (RW)   | Control de alimentación del LED WS2812 (alto = encendido) |
| X0D39             | Salida (RW)   | Flotante                                            |

## Comenzando

### Preparación del Hardware

- Cable USB Type-C  
- Computadora host o Raspberry Pi

### Preparación del Software

### Uso Inmediato

#### DOA (Dirección de Llegada)

Puedes experimentar con el arreglo de LEDs siguiendo la dirección de la voz entrante.

<div align="center">
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

El botón de reinicio (RST) proporciona un reinicio de hardware para el XVF3800—cuando se presiona, reinicia el chip y reinicializa el sistema desde el principio, como un ciclo completo de energía.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/reset.gif" alt="pir" width={600} height="auto"/></p>

#### Conexión de Altavoces

Aquí puedes ver cómo conectar altavoces usando ya sea el conector de auriculares AUX de 3.5mm o la interfaz de altavoz JST integrada, dependiendo de tu preferencia de salida de audio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/audio.gif" alt="pir" width={600} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/speaker.jpg" alt="pir" width={600} height="auto"/></p>

#### Modo Seguro

El Modo Seguro es un modo de recuperación especial en el ReSpeaker XVF3800 que te permite flashear firmware vía USB DFU o I2C—para dispositivos como el Raspberry Pi y ESP32. Si previamente flasheaste el firmware I2S y quieres volver al firmware USB, puedes entrar al Modo Seguro y reflashear el firmware USB usando USB DFU.

:::note
Cada tipo de firmware en el ReSpeaker XVF3800 soporta diferentes métodos de actualización:

- El **firmware USB** solo soporta **USB DFU**, lo que significa que puedes actualizar el dispositivo usando una conexión USB. Sin embargo, **no soporta I2C DFU**.
  
- El **firmware I2S** es lo opuesto—soporta **I2C DFU**, permitiendo actualizaciones de firmware sobre una interfaz I2C, pero **no soporta USB DFU**.
  
- El **firmware del Modo Seguro**, que está almacenado en la partición Factory, es el más flexible. Soporta **tanto USB DFU como I2C DFU**.

:::

**Cuándo Usar el Modo Seguro**

- Tu firmware no está funcionando correctamente (ej. USB no detectado, LED no se enciende como se espera).
- Necesitas reflashear un nuevo firmware pero el actual no responde.
- Accidentalmente flasheaste algo incorrecto y quieres recuperarte.

**Cómo Entrar al Modo Seguro**

- Apaga el dispositivo completamente.
- Mantén presionado el botón de Silencio.
- Mientras mantienes el botón de silencio, reconecta la energía.
- El LED rojo comenzará a parpadear — esto confirma que el dispositivo está ahora en Modo Seguro.
- Ahora el dispositivo ejecuta el firmware del Modo Seguro almacenado en la partición Factory.

### Actualizar Firmware

Conecta el reSpeaker XVF3800 a tu PC vía el cable USB. Ten en cuenta que necesitas usar el puerto USB-C de XMOS (cerca del puerto jack de 3.5mm) para flashear el firmware de XMOS.

#### Instalar DFU Util

[`dfu-util`](http://dfu-util.sourceforge.net/) es una herramienta de línea de comandos para Device Firmware Upgrade vía USB.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows">

- Descarga `dfu-util-0.11-binaries.tar.xz` y extráelo, ej., `D:\dfu-util-0.11-binaries\win64\`  
  [Enlace de Descarga](http://dfu-util.sourceforge.net/)

- Añade la ruta a `dfu-util.exe` a tu variable `Path` del sistema:  
  `Mi PC > Propiedades > Avanzado > Variables de Entorno > Path`

- Abre **Símbolo del sistema** (`cmd`) y verifica la instalación:

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

- Instalar dfu-util:

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
   - **Sample Rate**: `16000 Hz` (para **Project** y **Default Sample Rate**)
   - **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw2.png" alt="pir" width={600} height="auto"/></p>

1. Haz clic en **OK**
2. ¡Ya estás listo — comienza a grabar!

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
- **Sample Rate**: `16000 Hz` (para **Project** y **Default Sample Rate**)
- **Sample Format**: `24-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. Haz clic en **OK**
5. ¡Listo para grabar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Grabación en Raspberry Pi (Línea de Comandos)

1. **Encuentra el número de la tarjeta de sonido**:

```bash
arecord -l
```

Ejemplo de salida:

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

 Reemplaza `4` con el número real de tu tarjeta de sonido

---

3. **Reproducción**:

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

2. **Instalar Audacity a través de Pi-Apps**

3. **Configurar Entrada y Salida de Audio**

- Haz clic en "Audio Setup" en la barra de herramientas.
- Selecciona "Audio Settings" del menú desplegable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- En la ventana de Audio Settings:
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
Si te gustaría explorar más sobre el control a través de xvf_host, por favor lee este [artículo](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md).
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

**Control de LED**

| Comando | Ejemplo | Descripción |
|--------|---------|-------------|
| `led_effect` | `xvf_host.exe led_effect 1` | 0=apagado, 1=respiración, 2=arcoíris, 3=sólido, 4=DoA |
| `led_color` | `xvf_host.exe led_color 0xff8800` | Establecer color hexadecimal (naranja) |
| `led_speed` | `xvf_host.exe led_speed 1` | Establecer velocidad del efecto |
| `led_brightness` | `xvf_host.exe led_brightness 255` | Establecer brillo |
| `led_gammify` | `xvf_host.exe led_gammify 1` | Habilitar corrección gamma |
| `led_doa_color` | `xvf_host.exe led_doa_color 0x0000ff 0xff0000` | Establecer color base/direccional DoA |

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

Salida de Ejemplo

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

- **Haz enfocado 1**: Primera dirección de escucha fija
- **Haz enfocado 2**: Segunda dirección de escucha fija
- **Haz de funcionamiento libre**: Dirección siempre escaneando
- **Haz seleccionado automáticamente**: Haz final elegido para el mejor audio (usado para indicación DoA)

**Indicación de Voz**

- La Energía de Voz muestra qué tan fuerte es la señal de voz — como un medidor de volumen de voz.
- Se usa para detectar si alguien está hablando y qué tan fuerte/cerca están.
- El ruido, el eco y la distancia pueden afectar el valor de energía.

 Comando para verificar la Energía de Voz:

```bash
xvf_host.exe AEC_SPENERGY_VALUES
```

Salida de Ejemplo

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

Configurar canal izquierdo a Micrófono Amplificado 0

```bash
xvf_host.exe AUDIO_MGR_OP_L 3 0
```

Establecer el canal izquierdo a datos de Far End (referencia)

```bash
xvf_host.exe AUDIO_MGR_OP_R 5 0
```

Salida de Ejemplo:

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
```

**Parámetros de Ajuste (¡Hazlo Sonar Mejor!)**

- Estas configuraciones ayudan a mejorar la **cancelación de eco**, **supresión de ruido**, **ganancia**, etc.
- **Úsalas cuando las configuraciones predeterminadas no sean lo suficientemente buenas.**

 Parámetros Comunes:

| Parámetro             | Significado                                         |
|-----------------------|-----------------------------------------------------|
| **AUDIO_MGR_REF_GAIN**   | Ganancia de entrada del altavoz (señal de eco)             |
| **AUDIO_MGR_MIC_GAIN**   | Ganancia de entrada del micrófono (qué tan fuerte escucha el micrófono) |
| **AUDIO_MGR_SYS_DELAY**  | Retraso entre las señales del micrófono y altavoz         |
| **PP_AGCMAXGAIN**        | Nivel máximo de control automático de ganancia              |
| **AEC_ASROUTGAIN**       | Ganancia para la salida del haz ASR                      |

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

**Control de LED (Igual que en Windows, prefijo con ./)**

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

**Configurar Salidas:**

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

Ejemplo de salida

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
AEC_AZIMUTH_VALUES 0.91378 (52.36 deg) 0.00000 (0.00 deg) 1.57080 (90.00 deg) 0.91378 (52.36 deg)
```

- **Haz enfocado 1**: Primera dirección de escucha fija
- **Haz enfocado 2**: Segunda dirección de escucha fija
- **Haz de funcionamiento libre**: Dirección siempre escaneando
- **Haz seleccionado automáticamente**: Haz final elegido para el mejor audio (usado para indicación DoA)

**Indicación de Voz**

- La Energía de Voz muestra qué tan fuerte es la señal de voz — como un medidor de volumen de voz.
- Se usa para detectar si alguien está hablando y qué tan fuerte/cerca están.
- El ruido, el eco y la distancia pueden afectar el valor de energía.

Comando para verificar la Energía de Voz:

```bash
./xvf_host AEC_SPENERGY_VALUES
```

Salida de Ejemplo

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

Configurar canal izquierdo al Micrófono Amplificado 0

```bash
./xvf_host AUDIO_MGR_OP_L 3 0
```

Configurar el canal izquierdo a datos de Far End (referencia)

```bash
./xvf_host AUDIO_MGR_OP_R 5 0
```

Salida de Ejemplo:

```bash
Device (USB)::device_init() -- Found device VID: 10374 PID: 26 interface: 3
```

**Parámetros de Ajuste (¡Hazlo Sonar Mejor!)**

- Estas configuraciones ayudan a mejorar la **cancelación de eco**, **supresión de ruido**, **ganancia**, etc.
- **Úsalas cuando las configuraciones predeterminadas no sean lo suficientemente buenas.**

Parámetros Comunes:

| Parámetro                  | Significado                                        |
| -------------------------- | -------------------------------------------------- |
| **AUDIO_MGR_REF_GAIN**  | Ganancia de entrada del altavoz (señal de eco)    |
| **AUDIO_MGR_MIC_GAIN**  | Ganancia de entrada del micrófono (qué tan fuerte escucha el micrófono) |
| **AUDIO_MGR_SYS_DELAY** | Retraso entre las señales del micrófono y altavoz |
| **PP_AGCMAXGAIN**         | Nivel máximo de control automático de ganancia    |
| **AEC_ASROUTGAIN**        | Ganancia para la salida del haz ASR               |

Para documentación más profunda y comandos avanzados, visita el repositorio oficial de GitHub:
[ReSpeaker XVF3800 Host Control README](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md)

---

</TabItem>
</Tabs>

## Ejemplos de Python para ReSpeaker XVF3800

Hemos preparado ejemplos de Python para controlar el dispositivo vía USB o I2C.

:::note
Si deseas explorar más sobre el control vía xvf_host con scripts de Python, por favor lee este [artículo](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/blob/master/host_control/README.md).
:::

<Tabs>
<TabItem value="windows" label="Windows">

### Para Windows

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF.git
cd reSpeakerXVF
python test.py
```

Asegúrate de que Python esté instalado y que el ReSpeaker XVF3800 esté conectado vía USB.

</TabItem>

<TabItem value="rpi" label="Raspberry Pi / Linux">

### Para Raspberry Pi

```bash
git clone https://github.com/KasunThushara/reSpeakerXVF_rpi.git
cd reSpeakerXVF_rpi
chmod +x xvf_host
python3 test.py
```

Asegúrate de que `xvf_host` sea ejecutable y que tu placa esté conectada vía USB o I2C.

</TabItem>
</Tabs>

El archivo `test.py` se puede explorar de la siguiente manera. Esto es para tu referencia.

``` bash
import subprocess
import sys
import time

# Path to your xvf_host binary
XVF_HOST_PATH = "./xvf_host"  # Change this if xvf_host is in a different location

def run_command(*args):
    """Run a command using the xvf_host tool."""
    command = ["sudo", XVF_HOST_PATH] + list(map(str, args))
    try:
        print(f"Running: {' '.join(command)}")
        result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True, text=True)
        print("Output:\n", result.stdout)
    except subprocess.CalledProcessError as e:
        print("Error:\n", e.stderr)
        sys.exit(1)

if __name__ == "__main__":
    # Example: Get device version
    run_command("VERSION")
    time.sleep(0.005)

    # Example: Set LED to breath mode with orange color
    run_command("led_effect", 1)
    time.sleep(0.005)
    run_command("led_color", "0xff8800")
    time.sleep(0.005)
    run_command("led_speed", 1)
    time.sleep(0.005)
    run_command("led_brightness", 255)
    time.sleep(0.005)

    # Example: Save current configuration
    #run_command("save_configuration", 1)

    # Uncomment to clear config
    run_command("clear_configuration", 1)
    time.sleep(0.005)

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/led_2.gif" alt="pir" width={600} height="auto"/></p>

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
