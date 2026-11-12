---
description: reSpeaker XVF3800 4-Mic Array 44mm es un módulo de voz circular y compacto impulsado por XMOS XVF3800, con un paso de micrófono de 44 mm, captura de campo lejano de 360°, AEC/AGC/DoA/formación de haz, 24 LED RGB, tres botones y funcionamiento por USB o I2S.
title: Introducción a reSpeaker XVF3800 44mm 4-Mic Array
keywords:
  - reSpeaker 44mm
  - reSpeaker XVF3800
  - xvf3800
  - matriz de 4 micrófonos
  - xmos voice
  - matriz de micrófonos usb
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_introduction
sku: 100040880,100020767,100066841,100065276,100052499
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/es/respeaker_44mm_introduction/
---
# Introducción a reSpeaker XVF3800 44mm 4-Mic Array

{/* TODO: Banner}

El reSpeaker XVF3800 4-Mic Array 44mm es un módulo compacto y circular de procesamiento de voz basado en el procesador de audio XMOS XVF3800, diseñado para reconocimiento de voz, control por voz, asistentes inteligentes y robótica. Cuatro micrófonos PDM MEMS están dispuestos en un anillo con un **paso de 44 mm**, lo que proporciona captura de campo lejano de 360° en una placa notablemente más pequeña que el reSpeaker XVF3800 Circular 4-Mic Array con paso de 66 mm, manteniendo la misma plataforma de procesamiento XMOS y la misma calidad de audio.

El módulo ejecuta toda la canalización de voz del XVF3800: Cancelación de Eco Acústico (AEC), Control Automático de Ganancia (AGC) con un rango de 60 dB, formación de haz multicanal, detección de Dirección de Llegada (DoA), Detección de Actividad de Voz (VAD), supresión dinámica de ruido y desreverberación, todo con parámetros ajustables por el usuario. Un anillo de 24 LED RGB WS2812, tres botones físicos (subir volumen, bajar volumen, silencio) y un indicador de silencio por hardware lo hacen utilizable desde el primer momento, mientras que los modos USB Audio Class 2.0 e I2S cubren tanto el uso plug-and-play como la integración embebida. Un XIAO ESP32-S3 Plus opcional puede soldarse directamente en la placa, y una expansión de altavoz opcional añade un altavoz de 5 W con una batería de 1200 mAh.

## Gama de productos

{/* TODO: replace the five href="#" values with the Seeed Studio product page URLs once they are published. */}

<table align="center">
  <tr>
    <th>Variant</th>
    <th>SKU</th>
    <th>Contents</th>
    <th>Order</th>
  </tr>
  <tr>
    <td><strong>reSpeaker XMOS XVF3800 4 Mics Array 44mm</strong></td>
    <td><code>100040880</code></td>
    <td>PCBA individual, firmware USB pregrabado</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker XMOS XVF3800 4 Mics Array 44mm With Case</strong></td>
    <td><code>100020767</code></td>
    <td>PCBA + carcasa</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker XMOS XVF3800 4 Mics Array 44mm With XIAO ESP32S3 Plus</strong></td>
    <td><code>100066841</code></td>
    <td>PCBA + XIAO ESP32-S3 Plus</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker XMOS XVF3800 4 Mics Array 44mm With Case and XIAO ESP32S3 Plus</strong></td>
    <td><code>100065276</code></td>
    <td>PCBA + carcasa + XIAO ESP32-S3 Plus</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
  <tr>
    <td><strong>reSpeaker Sound Base</strong></td>
    <td><code>100052499</code></td>
    <td>Altavoz de 5 W 4 Ω, batería de 1200 mAh, carga por USB-C, interruptor de encendido</td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

{/* TODO(image): add a product render per variant — see wiki_44mm_images/README.txt */}

## Características

- **Diseño compacto de 44 mm**: el paso de micrófonos se reduce de 66 mm a 44 mm, reduciendo el diámetro de la placa para que encaje en productos con espacio limitado.

- **Procesamiento de audio XMOS XVF3800**: AEC, AGC (rango de 60 dB), formación de haz multicanal, DoA, VAD, supresión dinámica de ruido y desreverberación, con parámetros ajustables.

- **Alta calidad de audio**: diseñado para estar a la par con el reSpeaker XVF3800 Circular 4-Mic Array existente con paso de 66 mm.

- **Modos de funcionamiento duales**: USB Audio Class 2.0 para plug-and-play con PC y SBC, o modo I2S/INT-Device para hosts embebidos, seleccionados por firmware.

- **Control y actualizaciones flexibles**: configuración por USB o I2C, con soporte DFU por USB e I2C según el firmware grabado.

- **Identificación única del dispositivo**: lectura y escritura de un UUID/SN para gestión multidispositivo, identificación y seguimiento de datos.

- **Retroalimentación RGB programable**: 24 × LED WS2812 muestran el estado del dispositivo, la animación de arranque y la dirección DoA; el estado de silencio se muestra mediante un LED rojo dedicado.

- **Tres botones personalizables**: subir volumen, bajar volumen y silencio por defecto cuando están cableados al procesador XMOS, con un interruptor para redirigirlos al XIAO en su lugar.

- **Listo para altavoz**: amplificador Clase D integrado, un conector de altavoz JST vertical para un altavoz de 5 W 4 Ω, un conector AUX de 3,5 mm y pads de soldadura para un altavoz cableado.

- **Amplia compatibilidad de plataforma**: hosts USB como Windows, macOS y Raspberry Pi OS, además de integración I2S con XIAO, ESP32 y placas tipo Arduino.

## Descripción general del hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg" alt="reSpeaker XVF3800 44mm PCB component callouts" width={900} height="auto" /></p>

La parte frontal de la placa alberga los cuatro micrófonos y los 24 LED RGB en el anillo más externo, de modo que tanto los puertos acústicos como el anillo de luz permanecen visibles una vez que la placa se monta en una carcasa. La parte trasera alberga el conector USB-C, el conector de 3,5 mm, el conector de altavoz JST, el botón de reinicio, la huella para el XIAO ESP32-S3 Plus y todos los pads de expansión.

### Componentes principales

| Componente / Función | Descripción |
|--------------------|-------------|
| **Procesador de audio principal** | XMOS XVF3800 (firmware v3.2.1) para AEC, formación de haz, supresión de ruido, detección de DoA y el resto de la canalización de voz |
| **Matriz de micrófonos** | 4 × micrófonos PDM MEMS en una disposición circular con un paso de 44 mm, captura de campo lejano de 360° |
| **Códec de audio** | TLV320AIC3104, conversión de audio y salida DAC |
| **Amplificador** | Amplificador de audio Clase D LM48511 |
| **LED RGB** | 24 × LED RGB WS2812 direccionables individualmente para estado y actividad de audio |
| **Botones personalizables** | Tres botones físicos, que por defecto son subir volumen, bajar volumen y silencio cuando están conectados al XVF3800 |
| **Selección de conexión de botones** | Interruptor que enruta los tres botones entre el XVF3800 y los pads del módulo XIAO |
| **LED indicador de silencio** | LED rojo que se enciende mientras los micrófonos están en silencio; el audio se activa al encender |
| **Entrada en modo seguro** | Mantén pulsado el botón de silencio mientras aplicas alimentación para arrancar el firmware de recuperación |
| **Antena integrada** | Admite comunicación inalámbrica cuando se monta un módulo inalámbrico XIAO compatible |
| **Puerto USB Type-C** | Entrada de alimentación de 5 V más datos USB para audio UAC, control y DFU |
| **USB Power Delivery (USB PD)** | Disposición de entrada de alimentación USB-C para hacer funcionar la placa y alimentar un altavoz de 5 W |
| **Conector AUX de 3,5 mm** | Salida lateral de auriculares / línea desde el DAC integrado |
| **Conector de altavoz** | Conector JST vertical para un altavoz de 4 Ω con potencia nominal de 5 W o superior, con pads de soldadura conservados para un altavoz cableado |
| **Pads de alimentación externa** | Entrada de alimentación alternativa para todo el sistema |
| **Interfaz de depuración** | Pads compatibles con XTAG4 para programación y depuración de XMOS, sin conector soldado |
| **Interfaz I2C del XVF3800** | Expone los pines I2C del XVF3800 para control y configuración en modo INT-Device |
| **Interfaz I2S del XVF3800** | Expone los pines I2S del XVF3800 para audio hacia un host externo en modo INT-Device |
| **Cabeceras de alimentación y tierra** | Salida de 5 V y GND para integración externa |
| **Pads GPIO del XVF3800** | E/S adicionales del XVF3800 para control externo |
| **Huella para XIAO ESP32-S3 Plus** | Posición de módulo soldable con ruteo de I2S, I2C, reinicio, botones y LED |
| **Conector de antena IPEX** | Conecta la antena integrada a la interfaz de antena del XIAO con un cable RF adecuado |
| **Orificios de montaje** | Orificios de fijación adaptados a la carcasa |

### Compatibilidad con XIAO ESP32-S3 Plus

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xiao_pinout.jpg" alt="XIAO ESP32-S3 Plus expansion pads" width={700} height="auto" /></p>

El XIAO ESP32-S3 Plus puede soldarse directamente en la parte trasera de la placa. Cuando está montado, se conecta al XVF3800 y a los botones y LED integrados:

| Función | Descripción |
|---------|-------------|
| **Compatibilidad con XIAO ESP32-S3 Plus** | Soldar un módulo XIAO ESP32-S3 Plus directamente en la matriz para procesamiento de voz integrado y desarrollo de aplicaciones |
| **Comunicación con XVF3800** | I2S para grabación y reproducción con BCLK, MCLK y LRCLK compartidos, además de I2C para control y configuración del XVF3800 |
| **Control de reinicio del XVF3800** | Un GPIO relacionado con RST para que el XIAO pueda reiniciar el XVF3800 por hardware |
| **Ruteo flexible de botones y LED** | Cambia los botones y LED integrados entre el XVF3800 y los pads GPIO del XIAO para controles y retroalimentación personalizados |
| **Acceso ampliado a GPIO** | Resto de E/S del XIAO en pads etiquetados para sensores, periféricos y hardware de aplicación, alineados con el área de E/S del XVF3800 |
| **Conexión de antena externa** | Conector IPEX para enlazar la antena integrada con la interfaz de antena del XIAO mediante un cable alimentador RF |

{/* TODO(image): xiao_soldered.jpg — XIAO ESP32-S3 Plus soldered on the board */}

### reSpeaker Sound Base (expansión de altavoz)

La expansión de altavoz convierte la matriz de micrófonos en un terminal de voz autónomo. Combina un **altavoz de 5 W, 4 Ω**, una **batería recargable de 1200 mAh**, circuitería de carga y gestión de energía, un puerto de carga USB-C y un interruptor físico de encendido en una carcasa modular que se engancha o desliza en la parte inferior del alojamiento de la matriz.

- La carcasa se puede desmontar para que el usuario pueda sustituir la batería y el altavoz.
- El conector XMOS I/O expuesto transporta la salida de altavoz, alimentación de 5 V y señales de nivel de batería entre las dos placas.
- Un anillo de LED de carga muestra el porcentaje de batería mientras se está cargando y permanece apagado cuando no hay ninguna batería conectada.
- El interruptor solo controla la salida; la carga continúa con el interruptor apagado.

{/* TODO(image): speaker_expansion.jpg — speaker expansion attached to the array */}

### Distribución de pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/xmos_io_pinout.jpg" alt="XMOS XVF3800 I/O header" width={600} height="auto" /></p>


La zona de I/O del XVF3800 expone los buses necesarios para el funcionamiento como dispositivo INT y para la expansión de altavoz. Sigue la serigrafía para conocer el orden exacto de las almohadillas en tu revisión.

| Señal | Descripción |
|--------|-------------|
| **3V3** | Raíl de 3,3 V para lógica externa |
| **GND** | Tierra |
| **MCLK** | Reloj maestro I2S |
| **BCLK** | Reloj de bits I2S |
| **LRCK** | Reloj de palabra I2S izquierda/derecha |
| **DATA0** | Datos I2S, ruta de grabación |
| **DATA1** | Datos I2S, ruta de reproducción |
| **SDA / SCL** | Bus de control I2C para el XVF3800 |
| **CS_N / CLK / MISO** | Señales SPI para periféricos compatibles |
| **Speaker pins** | Salida de altavoz para un altavoz externo, compartida con el conector JST integrado |

La huella XIAO además expone el resto de I/O del módulo en pads etiquetados (D0, D2, D3, D13, D14, 3V3, GND), de modo que se pueden cablear periféricos sin una placa portadora adicional.

{/* TODO(image): respeaker_44mm_pinout_schematic.png — labeled schematic to replace the close-up photos */}

### Descripción general de GPIO

El XVF3800 expone GPIO configurables para detección de botones, volumen, silencio, habilitación del amplificador, alimentación de LED y comunicación con periféricos.

| Nombre de pin | Función | Descripción |
|----------|----------|-------------|
| **X1D09** | Estado del botón de silencio (GPI) | Lee el estado del botón de silencio; alto cuando está liberado |
| **X1D13** | Subir volumen | Recibe la señal del botón de subir volumen |
| **X1D34** | Bajar volumen | Recibe la señal del botón de bajar volumen |
| **X0D11** | Inicialización I2C | Se usa para la inicialización de I2C y control relacionado |
| **X0D30** | LED de silencio / Control de silencio de micrófono | Controla el LED indicador de silencio y la función de silencio del micrófono |
| **X0D31** | Habilitación del amplificador | Habilita o deshabilita el amplificador de audio |
| **X0D33** | Control de alimentación del LED WS2812 | Controla la alimentación del circuito de LED RGB WS2812 |
| **X0D39** | SPI MOSI | Datos SPI maestro-salida, esclavo-entrada para periféricos compatibles |

## Introducción

### Preparación de hardware

- Cable USB Tipo C
- Ordenador host o una Raspberry Pi
- Opcional: altavoz de 5 W y 4 Ω para reproducción
- Opcional: XIAO ESP32-S3 Plus para funcionamiento inalámbrico/embebido

### Preparación de software

- **Audacity** para pruebas de grabación y reproducción
- **dfu-util** para actualizaciones de firmware
- **Python 3** con `pyusb` para ajuste de parámetros

### Uso fuera de la caja

:::note
Para garantizar una captación de voz óptima y el funcionamiento correcto de los algoritmos de audio, orienta los puertos de micrófono (entrada de micrófono/orificios de sonido) en la parte trasera del dispositivo hacia la fuente de sonido. El puerto del micrófono está en el lado impreso con el logotipo de Seeed Studio.

{/* TODO(image): mic_inlet_orientation.jpg — mic port / Seeed logo side */}
:::

#### DoA (Direction of Arrival)

El anillo de LED sigue la dirección de la voz entrante, por lo que puedes ver el ángulo detectado sin ningún software. El valor de DoA también se puede leer por USB/I2C para tu propia aplicación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/doa_demo.gif" alt="DoA LED ring following the voice" width={600} height="auto" /></p>

#### Botón de silencio

El botón de silencio desactiva temporalmente la captura desde la matriz de micrófonos.

- Los micrófonos se silencian, por lo que las voces externas dejan de capturarse o procesarse.
- El LED rojo se enciende mientras el silencio está activo.
- No se envía ninguna entrada de audio al host.
- Al pulsar el botón de nuevo se reactiva la matriz. El dispositivo arranca sin silencio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/mute_demo.gif" alt="Mute button and red status LED" width={600} height="auto" /></p>

#### Subir / bajar volumen

Los otros dos botones ajustan el volumen de reproducción de forma predeterminada cuando están conectados al XVF3800. Son controles de acción única: cada pulsación cambia el volumen un paso. El mismo nivel se puede configurar desde el host con la herramienta de control en Python o el mezclador del sistema operativo.

#### Botón de reinicio

El botón de reinicio (RST) proporciona un reinicio por hardware del XVF3800. Al pulsarlo se reinicia el chip y se vuelve a inicializar el sistema desde el principio, exactamente igual que un ciclo completo de alimentación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/reset_demo.gif" alt="Reset button behaviour" width={600} height="auto" /></p>

#### Conexión de altavoz

Puedes conectar un altavoz mediante el conector JST integrado o el conector AUX de 3,5 mm, según tu preferencia de salida de audio. Usa el conector JST con un altavoz de 4 Ω y 5 W para alimentarlo desde el amplificador LM48511 integrado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/speaker_connection.jpg" alt="Speaker connected to the JST connector" width={600} height="auto" /></p>

#### Modo seguro

El **Modo seguro** es un modo de recuperación que te permite flashear firmware mediante USB DFU o I2C DFU. Úsalo si anteriormente flasheaste el firmware I2S y quieres volver al firmware USB, o si la placa ya no se enumera.

| Firmware | USB DFU | I2C DFU |
|----------|---------|---------|
| **Firmware USB** | Sí | No |
| **Firmware I2S** | No | Sí |
| **Firmware de Modo seguro** (partición de fábrica) | Sí | Sí |

**Cuándo usar el Modo seguro**

- El firmware no funciona correctamente (USB no detectado, LED no se comporta como se espera).
- Necesitas volver a flashear pero el firmware actual no responde.
- Flasheaste el firmware equivocado y quieres recuperar la placa.

**Cómo entrar en Modo seguro**

1. Apaga el dispositivo por completo.
2. Mantén pulsado el botón de **Mute**.
3. Mientras lo mantienes pulsado, vuelve a conectar la alimentación.
4. El LED rojo empieza a parpadear: el dispositivo ahora está ejecutando el firmware de Modo seguro desde la partición de fábrica.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/safe_mode_demo.gif" alt="Red LED blinking in Safe Mode" width={600} height="auto" /></p>

## Actualizar firmware

Se proporcionan dos imágenes de firmware en el repositorio oficial de GitHub:

- **Firmware USB** para sistemas host como Windows, Linux y macOS
- **Firmware I2S** para hosts microcontroladores como el XIAO ESP32-S3 Plus

:::note
No uses **"Save as"** para descargar los archivos de firmware desde GitHub: los binarios se corromperán. Clona el repositorio o usa **Download ZIP** para obtener todo el repositorio con todos los archivos incluidos.
:::

Repositorio: [reSpeaker_XVF3800_4MIC_44mm](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)

### Firmware USB

El firmware USB se enumera como una tarjeta de sonido UAC 2.0 y está pensado para hosts Windows, Linux y macOS.

| Imagen de firmware | Perfil de audio USB |
|----------------|-------------------|
| `respeaker_44mm_usb_c48k2ch_v1.0.0.bin` | Audio USB de 48 kHz y 2 canales |

El directorio de firmware no incluye un volcado del descriptor de USB Audio Class. Después de flashear, verifica los formatos que informa el host antes de configurar tu aplicación de grabación: no des por hecho un ancho de muestra ni configuraciones adicionales de frecuencia de muestreo/canales sin confirmarlas a partir de los descriptores del dispositivo.

### Firmware I2S

El firmware I2S se usa cuando la matriz está conectada a un host microcontrolador como el XIAO ESP32-S3 Plus. El audio se transmite por I2S y el XVF3800 se controla por I2C.

| Firmware | Canales | Notas |
|----------|----------|-------|
| `respeaker_44mm_i2s_c48k2ch_v1.0.0.bin` | 2 | Salida procesada de 2 canales: Canal 0 = Conferencia, Canal 1 = ASR |

Para flashear el firmware XMOS, conecta la placa a tu PC con un cable USB. Usa el **puerto XMOS USB-C**, situado cerca del conector de audio de 3,5 mm.

### Instalar DFU Util

`dfu-util` es una herramienta de línea de comandos para Device Firmware Upgrade por USB.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="windows" label="Windows">

- Descarga `dfu-util-0.11-binaries.tar.xz` y extráelo, por ejemplo en `D:\dfu-util-0.11-binaries\win64\`

  [Download Link](http://dfu-util.sourceforge.net/)

- Añade la ruta a `dfu-util.exe` a la variable de sistema `Path`:

  `My Computer > Properties > Advanced > Environment Variables > Path`

- Abre **Command Prompt** (`cmd`) y verifica la instalación:

```bash
dfu-util -V
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/dfu_util_version.png" alt="dfu-util version output" width={700} height="auto" /></p>

- Conecta el reSpeaker XVF3800 44mm y comprueba que el dispositivo se detecta:

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/dfu_util_list.png" alt="dfu-util list output" width={800} height="auto" /></p>

> Si obtienes:
> `Cannot open DFU device 2886:0024 ... (LIBUSB_ERROR_NOT_SUPPORTED)`
> continúa con la instalación del controlador a continuación.

- Instala [Zadig](https://zadig.akeo.ie/)
  - Abre Zadig → `Options > List All Devices`
  - Selecciona `reSpeaker 3800 44 mm` o `reSpeaker XVF3800 4-Mic Array 44mm`
  - Instala el controlador **WinUSB**
  - Apaga y vuelve a encender el dispositivo
  - Ejecuta `dfu-util -l` de nuevo para confirmar la detección

</TabItem>

<TabItem value="macos" label="macOS">

- Instala dfu-util con Homebrew:

```bash
brew install dfu-util
```

- Comprueba que el dispositivo se detecta:

```bash
dfu-util -l
```

**Salida esperada:**

```text
dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0024] ver=0100, devnum=57, cfg=1, intf=4, path="1-2", alt=1, name="reSpeaker DFU Upgrade", serial="??????????????????"
Found DFU: [2886:0024] ver=0100, devnum=57, cfg=1, intf=4, path="1-2", alt=0, name="reSpeaker DFU Factory", serial="??????????????????"
```

</TabItem>

<TabItem value="linux" label="Linux">

- Instala dfu-util:

```bash
sudo apt install dfu-util
```

- Conecta la placa y comprueba que se detecta:

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

Found DFU: [2886:0024] ver=0100, devnum=57, cfg=1, intf=4, path="1-2", alt=1, name="reSpeaker DFU Upgrade", serial="??????????????????"
Found DFU: [2886:0024] ver=0100, devnum=57, cfg=1, intf=4, path="1-2", alt=0, name="reSpeaker DFU Factory", serial="??????????????????"
```

</TabItem>
</Tabs>

### Flashear el firmware

- Ejecuta el siguiente comando, apuntando `-D` al archivo `.bin` que quieres flashear:

```bash
dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

- En Linux, ejecútalo con `sudo`:

```bash
sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin
```

La opción `-R` reinicia la placa automáticamente después de flashear.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/dfu_flash.png" alt="salida de dfu-util durante el flasheo" width={800} height="auto" /></p>

Ejecuta `dfu-util -l` de nuevo para confirmar que la nueva versión de firmware está en ejecución.

## Grabación y reproducción

<Tabs>
<TabItem value="windows" label="Windows">

### Configurar Audacity (Windows)

1. Abre **Audacity**.
2. Ve a **Audio Setup > Audio Settings**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/audacity_audio_setup.png" alt="Menú de configuración de audio de Audacity" width={800} height="auto" /></p>

3. Configura:
   - **Host**: `Windows WASAPI`
   - **Playback Device**: `reSpeaker XVF3800 4-Mic 44mm`
   - **Recording Device**: `reSpeaker XVF3800 4-Mic 44mm`
   - **Channels**: `2 (Stereo)`
   - **Project Sample Rate**: `48000 Hz`
   - **Default Sample Rate**: `48000 Hz`
   - **Default Sample Format**: `32-bit float`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/audacity_audio_settings.jpg" alt="Diálogo de configuración de audio de Audacity" width={800} height="auto" /></p>

4. Haz clic en **OK**: ya estás listo para grabar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/audacity_recording.jpg" alt="Forma de onda de grabación en Audacity" width={800} height="auto" /></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Configurar Audacity (macOS)

1. Abre **Audacity**.
2. Ve a **Audio Setup** y selecciona **Recording Device > reSpeaker XVF3800 4-Mic 44mm**.
3. Abre **Audio Settings** y configura:
   - **Recording Device**: `reSpeaker XVF3800 4-Mic 44mm`
   - **Channels**: `2 (Stereo)`
   - **Project Sample Rate**: `48000 Hz`
   - **Default Sample Rate**: `48000 Hz`
   - **Default Sample Format**: `32-bit float`
4. Haz clic en **OK** y empieza a grabar.

:::note
macOS requiere permiso de micrófono para Audacity en **System Settings > Privacy & Security > Microphone**.
:::

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Grabar desde la línea de comandos

1. Encuentra el número de tarjeta:

```bash
arecord -l
```

Busca la entrada llamada `reSpeaker XVF3800 4-Mic 44mm` y anota su número de tarjeta, por ejemplo `card 3`.

2. Graba 5 segundos de audio:

```bash
arecord -D plughw:3,0 -c 2 -r 48000 -f S32_LE -d 5 output.wav
```

Sustituye `3` por tu número de tarjeta real.

3. Reprodúcelo:

```bash
aplay -D plughw:3,0 output.wav
```

4. Ajusta el volumen con `alsamixer` si es necesario (consulta la sección de resolución de problemas).

### Grabar con Audacity

1. Instala Audacity, por ejemplo a través de Pi-Apps:

```bash
wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
```

2. Abre **Audio Setup > Audio Settings** y elige:
   - **Host**: `ALSA`
   - **Recording Device**: `reSpeaker XVF3800 4-Mic 44mm`
   - **Playback Device**: `reSpeaker XVF3800 4-Mic 44mm`
   - **Channels**: `2 (Stereo)`
3. Haz clic en **OK** y empieza a grabar.

</TabItem>
</Tabs>

## Parámetros de ajuste

El ajuste te permite configurar los algoritmos de audio integrados y comunicarte directamente con el chip XMOS. Se proporciona una interfaz de control en Python para la configuración de parámetros y la interacción con el dispositivo.

[**Directorio de control en Python**](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm/tree/main/python_control)

Con los scripts proporcionados puedes:

- Configurar parámetros de los algoritmos de audio integrados
- Obtener datos de DoA (Direction of Arrival)
- Obtener datos de VAD (Voice Activity Detection)
- Controlar los LEDs integrados
- Controlar la canalización de procesamiento de voz
- Leer y escribir el UUID del dispositivo
- Encaminar señales a los canales de salida USB

**Requisitos del sistema**

- Python 3.6 o posterior
- Biblioteca de Python `pyusb`
- Biblioteca de sistema `libusb`

### Instalación y dependencias

```bash
pip install pyusb
```

En Windows, el paquete pip `libusb-package` es la forma más sencilla de proporcionar libusb. En Linux, instala libusb a través de tu gestor de paquetes.

### Uso

**Sintaxis básica**

```bash
python xvf_host.py [options] command [--values value(s)...]
```

**Opciones de comando**

| Option | Description |
|--------|-------------|
| `-l`, `--list` | List all supported commands with detailed information |
| `--vid` | Set USB Vendor ID (default: `0x2886`) |
| `--pid` | Set USB Product ID; when omitted, the device is auto-discovered by VID |
| `--values` | Provide values for write commands (optional), decimal or hex (`0x7B`) |

### Ejemplos de uso

**1. Listar todos los comandos disponibles**

```bash
python xvf_host.py --list
```

**2. Leer la versión del firmware**

```bash
python xvf_host.py VERSION
```

```text
VERSION: [1, 0, 0]
```

La tupla reportada corresponde al firmware que flasheaste.

**3. Leer la dirección de llegada (Direction of Arrival)**

```bash
python xvf_host.py DOA_VALUE
```

```text
DOA_VALUE: [135]
```

El ángulo se reporta en grados, 0–359.

**4. Establecer el color del LED**

```bash
python xvf_host.py LED_COLOR --values 0xFF0000
```

**5. Establecer el brillo del LED**

```bash
python xvf_host.py LED_BRIGHTNESS --values 50
```

**6. Leer la geometría de la matriz de micrófonos**

```bash
python xvf_host.py AEC_MIC_ARRAY_GEO
```

```text
AEC_MIC_ARRAY_GEO:
[0.033, -0.033, 0.000,
 0.033,  0.033, 0.000,
-0.033,  0.033, 0.000,
-0.033, -0.033, 0.000]
```

Los valores son las coordenadas X/Y de los micrófonos en metros tal como las usa el conformador de haz (beamformer). Comprueba que la geometría reportada coincide con el paso entre micrófonos de tu placa y con la imagen de firmware que flasheaste antes de realizar mediciones o calibraciones acústicas.

### Selección de canales de salida USB

El firmware USB enruta señales a la salida estéreo a través de `AUDIO_MGR_OP_L` y `AUDIO_MGR_OP_R`. Cada comando toma dos valores: una `category` (grupo de señales) y una `source` (señal dentro de ese grupo). Omite `--values` para leer el enrutamiento actual.

```bash
python xvf_host.py AUDIO_MGR_OP_L
python xvf_host.py AUDIO_MGR_OP_L --values 6 3
python xvf_host.py AUDIO_MGR_OP_R --values 1 0
```

Esos dos últimos comandos enrutan el haz seleccionado automáticamente al canal izquierdo y el micrófono en bruto 0 al canal derecho. Los flujos de micrófono en bruto omiten la mejora de voz y normalmente son más silenciosos que el audio procesado.

Guarda el enrutamiento para que sobreviva a un reinicio:

```bash
python xvf_host.py SAVE_CONFIGURATION --values 1
```

## Resolución de problemas

### La reproducción del altavoz es demasiado baja en Linux

La tarjeta de sonido XVF3800 tiene sus propios niveles de mezclador ALSA. Si la reproducción es demasiado baja:

1. Abre el mezclador:

   ```bash
   alsamixer
   ```

2. Pulsa **F6**, selecciona la tarjeta `reSpeaker XVF3800 4-Mic 44mm` y pulsa **Enter**.
3. Usa las teclas de flecha para seleccionar **PCM-1** y súbelo al 100%.
4. Sal con **ESC** y guarda la configuración:

   ```bash
   sudo alsactl store
   ```

5. Si sigue siendo bajo, instala PulseAudio Volume Control y sube la salida por encima del 100%:

   ```bash
   sudo apt install pavucontrol -y
   ```

### La placa no aparece como dispositivo de sonido en Windows después de flashear

Abre el **Administrador de dispositivos**, busca las entradas de reSpeaker relacionadas, haz clic derecho en cada una y elige **Uninstall device**. Luego desconecta y vuelve a conectar el cable USB: Windows reinstalará el controlador de tarjeta de sonido correcto.

### `dfu-util -l` informa LIBUSB_ERROR_NOT_SUPPORTED

El controlador WinUSB no está vinculado a la interfaz DFU. Instala [Zadig](https://zadig.akeo.ie/), activa `Options > List All Devices`, selecciona `reSpeaker 3800 44 mm`, instala **WinUSB**, apaga y enciende la placa y ejecuta `dfu-util -l` de nuevo.

### La placa no se enumera en absoluto

Entra en **Safe Mode** (mantén pulsado el botón de mute mientras aplicas alimentación, espera a que parpadee el LED rojo), luego vuelve a flashear el firmware USB. El firmware de Safe Mode admite tanto DFU por USB como DFU por I2C, por lo que siempre se puede recuperar.

## Recursos

- [Firmware de reSpeaker XVF3800 44mm y control en Python (GitHub)](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)
- [Documentación de XMOS XVF3800](https://www.xmos.com/documentation/XM-014888-PC/html/modules/fwk_xvf/doc/user_guide/index.html)

{/* TODO: add 2D DXF and 3D STEP downloads here once the mechanical files are published */}

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
