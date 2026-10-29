---
description: reSpeaker Flex es un potente sistema de voz modular con XMOS XVF3800, con matrices de 4 micrófonos circulares y lineales intercambiables para una captura de audio precisa de 360° o direccional, perfecto para robótica y dispositivos inteligentes.
title: Introducción a reSpeaker Flex
keywords:
  - reSpeaker flex
  - xvf3800
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg
slug: /respeaker_flex_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 03/26/2026
  author: Kasun Thushara
createdAt: '2026-03-26'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/es/respeaker_flex_introduction/
---
# Introducción a reSpeaker Flex

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex-banner.jpg" alt="pir" width={800} height="auto" /></p>

reSpeaker Flex es un sistema de procesamiento de voz modular con arquitectura dividida, construido alrededor del procesador XMOS XVF3800, diseñado específicamente para robots y terminales de interacción inteligente. A diferencia de las matrices de micrófonos todo en uno convencionales, Flex separa la placa de procesamiento principal de la placa de matriz de micrófonos; ambas se conectan mediante un cable flexible FPC, lo que permite incrustar la matriz en cualquier posición física dentro de la carcasa de un producto mientras se mantienen los componentes electrónicos de procesamiento en otro lugar.
El sistema admite dos configuraciones intercambiables de matriz de micrófonos: una **matriz circular de 4 micrófonos** para captura omnidireccional de 360°, y una **matriz lineal de 4 micrófonos** para captación direccional frontal con supresión trasera. Ambas placas se conectan a la misma placa principal a través de una interfaz FPC estandarizada de 24 pines, y el sistema funciona en modo USB (UAC 2.0 plug-and-play) o en modo I2S para integración embebida. Un módulo XIAO ESP32S3 opcional puede soldarse en la placa principal para conectividad inalámbrica y control ampliado.

### Serie de micrófonos circulares

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Circular </th>
    <th>reSpeaker Flex XVF3800 Circular con XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

### Serie de micrófonos lineales

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Linear</th>
    <th>reSpeaker Flex XVF3800 Linear con XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-p-6738.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

## Características

- **Diseño modular dividido**: la placa principal y la placa de matriz de micrófonos están físicamente separadas, conectadas mediante un cable FPC para una colocación flexible en cualquier chasis de producto

- **Elección de configuraciones de micrófonos**: cambia entre la matriz circular de 4 micrófonos (captación de 360°, separación de 44 mm) o la matriz lineal de 4 micrófonos (directividad frontal de 180°, separación de 33 mm) usando la misma placa principal

- **Procesamiento de audio XMOS XVF3800**: conjunto completo de AEC, AGC, DoA, conformación de haz multicanal, VAD, supresión de ruido y desreverberación

- **Dos modos de funcionamiento**: USB UAC 2.0 para plug-and-play con PC y SBC; modo I2S para integración embebida directa

- **Conectividad USB dual**: el puerto USB-C y el puerto con conector de bloqueo PH2.0 admiten audio UAC 2.0 y actualización de firmware DFU

- **Compatibilidad con XIAO ESP32S3 (opcional)**: el módulo soldado añade Wi-Fi/Bluetooth, con buses I2S e I2C conectados directamente al XVF3800 para control inalámbrico y reenvío de audio

- **Flexibilidad de firmware**: variantes de firmware USB dual (2 canales y 6 canales), firmware I2S, actualización DFU mediante dfu-util y persistencia de configuración entre ciclos de encendido

- **SDK de Python**: formato de grabación, volumen, parámetros de algoritmo y enrutamiento de canales ajustables mediante Python

- **Amplificador de altavoz integrado**: admite el accionamiento de altavoces de 10 W y 4 Ohmios mediante conector JST, con salida de auriculares AUX de 3,5 mm

:::note
Cuando el conector de audio de 3,5 mm y el altavoz están conectados al mismo tiempo, solo se reproduce a través del conector de audio de 3,5 mm
:::

## Componentes principales

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/main_noxiao.jpg" alt="pir" width={800} height="auto" /></p>

### Placa principal

| Componente / Característica | Descripción |
|--------------------|------------|
| **Procesador de audio principal** | XMOS XVF3800 (firmware v3.2.1), gestiona todo el DSP de audio incluyendo AEC, conformación de haz, DoA y supresión de ruido |
| **Códec de audio** | TLV320AIC3104, gestiona la conversión de audio y la salida DAC |
| **Amplificador** |TPA3139D2  , amplificador Clase D |
| **Interfaz de matriz de micrófonos FPC** | Conector FPC de 24 pines con pestillo de bloqueo, admite matrices de hasta 8 micrófonos con 2 líneas GPIO |
| **Puerto USB-C** | Audio UAC 2.0, actualización de firmware DFU y alimentación |
| **Puerto PH2.0** | Conector con pestillo de bloqueo; proporciona el mismo audio UAC 2.0 y soporte DFU que el puerto USB-C |
| **Conector AUX de 3,5 mm** | Salida de auriculares lateral impulsada por el DAC integrado |
| **Conector JST para altavoz** | Conector de montaje vertical que acciona altavoces de hasta 10 W a 4Ω; pad de soldadura reservado para conexión de altavoz cableada |
| **Terminal de alimentación externa** | Suministra 12 V a todo el sistema y admite cargas de altavoz de 10 W (prioridad P1) |
| **Botón RST** | Reinicio por hardware para el XVF3800 |
| **Botón SafeMode (Boot)** | Mantener pulsado durante el encendido para entrar en modo seguro para recuperación de firmware |
| **LED PWR** | Indicador verde de encendido |
| **Pad de depuración** | Pad reservado para XMOS XTAG4 (no soldado en fábrica) |
| **Cabeceras de E/S XMOS 3800** | Pines/campos expuestos para I2C, I2S, 5V/GND, pines de altavoz y E/S restantes del XVF3800 |
| **Orificios de montaje** | 4 × orificios de montaje M3 |
| **XIAO ESP32S3** | Admite soldar XIAO ESP32S3 cuando se utiliza como dispositivo host |
| **GPIO de XIAO ESP32S3** | Los GPIO restantes pueden utilizarse para expansión de E/S y periféricos |

### Placa de matriz circular

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_doa.jpg" alt="pir" width={800} height="auto" /></p>

| Componente / Característica | Descripción |
|--------------------|------------|
| **Micrófonos** | 4× micrófonos PDM MEMS con separación de 44 mm dispuestos en un diseño circular |
| **Patrón de captación** | Captura de audio omnidireccional de 360° |
| **Interfaz** | Conector FPC hacia la placa principal |
| **Montaje** | 3 × orificios de montaje M3 para fijación a carcasa o alojamiento |

### Placa de matriz lineal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_linear.jpg" alt="pir" width={800} height="auto" /></p>

| Componente / Característica | Descripción |
|--------------------|------------|
| **Micrófonos** | 4× micrófonos PDM MEMS con separación de 33 mm dispuestos en un diseño lineal |
| **Interfaz** | Conector FPC; el cable puede enrutarse desde el lateral o la parte trasera |
| **Montaje** | 2 × orificios de montaje M3 |




### Compatibilidad con XIAO ESP32S3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/header_pinout.jpg" alt="pir" width={800} height="auto" /></p>

La placa principal de reSpeaker Flex incluye una huella dedicada para soldar un módulo Seeed Studio XIAO ESP32S3, lo que habilita conectividad Wi-Fi y Bluetooth además de la canalización de procesamiento de audio del XVF3800. Los SKU que incluyen XIAO (-C4-1 y -L4-1) se envían con este módulo preinstalado; los SKU base (-C4-0 y -L4-0) dejan la huella sin poblar.
Cuando se monta el XIAO, se establecen las siguientes conexiones entre este y el XVF3800:

- **Bus I2S** — bus dual (reproducción y grabación) con BCLK, MCLK y LRCLK compartidos para transmisión de audio en ambas direcciones
- **Bus I2C** — para leer y escribir parámetros de configuración del XVF3800 desde el XIAO
- **Línea RST** — XIAO puede activar un reinicio por hardware en el XVF3800 mediante un pin de E/S dedicado
- **E/S restantes de XIAO** — llevadas a cabeceras/pads de pines etiquetados para expansión por parte del usuario

### Cabecera de pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_2.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>

### Cable FPC de 24 pines

La interfaz de matriz de micrófonos FPC es un conector de 24 pines y paso de 0,5 mm con pestillo de bloqueo, y el cable plano FPC de 20 cm incluido en la caja está codificado para este conector.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| Pin | Nombre de señal | Tipo | Descripción de la función | Notas |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | Alimentación | Fuente de alimentación del micrófono | Alimentación de 3.3V |
| 2 | MIC_VDD | Alimentación | Fuente de alimentación del micrófono | Pin doble para mayor estabilidad de alimentación |
| 3 | GND | GND | Tierra de retorno de alimentación | GND de alimentación |
| 4 | MIC_CLK | Salida | Señal de reloj global | Señal principal, 2–4 MHz |
| 5 | GND | GND | Tierra de apantallamiento del reloj | Tierra dedicada para el reloj |
| 6 | MIC_D1 | Entrada | Línea de datos 1 | Micrófono CH1 |
| 7 | GND | GND | Tierra de aislamiento D1 | |
| 8 | MIC_D2 | Entrada | Línea de datos 2 | Micrófono CH2 |
| 9 | GND | GND | Tierra de aislamiento D2 | |
| 10 | MIC_D3 | Entrada | Línea de datos 3 | Micrófono CH3 |
| 11 | GND | GND | Tierra de aislamiento D3 | |
| 12 | MIC_D4 | Entrada | Línea de datos 4 | Micrófono CH4 |
| 13 | GND | GND | Tierra de aislamiento D4 | |
| 14 | MIC_D5 | Entrada | Línea de datos 5 | Micrófono CH5 |
| 15 | GND | GND | Tierra de aislamiento D5 | |
| 16 | MIC_D6 | Entrada | Línea de datos 6 | Micrófono CH6 |
| 17 | GND | GND | Tierra de aislamiento D6 | |
| 18 | MIC_D7 | Entrada | Línea de datos 7 | Micrófono CH7 |
| 19 | GND | GND | Tierra de aislamiento D7 | |
| 20 | MIC_D8 | Entrada | Línea de datos 8 | Micrófono CH8 |
| 21 | GND | GND | Tierra de aislamiento D8 | |
| 22 | GPIO_1 | E/S | Entrada/salida de propósito general | Función de expansión |
| 23 | GPIO_2 | E/S | Entrada/salida de propósito general | Función de expansión |
| 24 | GND | GND | Tierra de apantallamiento de GPIO | Absorbe el ruido de GPIO |

## Primeros pasos

### Preparación de hardware

- Cable USB tipo C
- Ordenador host o Raspberry Pi

### Preparación de software

### Uso fuera de la caja

:::note
Para garantizar un rendimiento óptimo de captación de voz y el funcionamiento adecuado de los algoritmos de audio, asegúrate de que el Puerto de Micrófono (Entrada de Micrófono / Orificio de Sonido) en la parte posterior del dispositivo esté orientado hacia la fuente de sonido. El puerto del micrófono se encuentra en el lado donde está impreso el logotipo de Seeed Studio. 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/array_mic_inlet.jpg" alt="pir" width={800} height="auto" /></p>
:::

#### Reinicio

El botón de reinicio (RST) proporciona un reinicio por hardware para el reSpeaker Flex cuando se pulsa; reinicia el chip y vuelve a inicializar el sistema desde el principio, igual que un ciclo completo de encendido.

#### Conexión del altavoz

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/speaker-connection .jpg" alt="pir" width={600} height="auto" /></p>

Aquí puedes ver cómo conectar altavoces usando ya sea el conector de auriculares AUX de 3.5 mm o la interfaz de altavoz JST integrada, según tu preferencia de salida de audio.

#### Conexión FPC

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/fpc-cable-orientation.png" alt="pir" width={600} height="auto" /></p>

Antes de conectar el cable FPC, identifica el lado de contacto y el lado del refuerzo. Al insertar el cable en el Conector MIC, asegúrate de que los contactos expuestos estén orientados hacia los contactos metálicos dentro del conector, mientras que el lado del refuerzo quede hacia afuera.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/fpc-cable-connection.png" alt="pir" width={600} height="auto" /></p>

Abre la pestaña de bloqueo en el Conector MIC, inserta el cable FPC con la orientación correcta y cierra la pestaña para asegurar la conexión.

#### Modo seguro

**Safe Mode** es un modo especial de recuperación en el **reSpeaker Flex** que te permite flashear firmware mediante **USB DFU** o I2C para dispositivos como **ESP32**.

Si has flasheado previamente el **firmware I2S** y quieres volver al **firmware USB**, puedes entrar en **Safe Mode** y volver a flashear el firmware USB usando **USB DFU**.

:::note

- Firmware USB
  - Solo admite USB DFU.
  - Puedes actualizar el dispositivo a través de una conexión USB.
  - No admite I2C DFU.
- Firmware I2S
  - Admite I2C DFU.
  - Permite actualizaciones de firmware a través de la interfaz I2C.
  - No admite USB DFU.
- Firmware de Safe Mode
  - Almacenado en la partición Factory.
  - Admite tanto USB DFU como I2C DFU.
  - Este es el firmware de recuperación más flexible.

:::

**Usa Safe Mode en las siguientes situaciones**

- Tu firmware **no funciona correctamente** (por ejemplo, **no se detecta el USB**).
- Necesitas **volver a flashear un nuevo firmware**, pero el firmware actual **no responde**.
- **Flasheaste accidentalmente el firmware equivocado** y quieres recuperar el dispositivo.

 **Cómo entrar en Safe Mode**

- **Apaga** completamente el dispositivo.
- **Mantén pulsado el botón Boot**.
- Mientras mantienes pulsado el **botón Boot, vuelve a conectar la alimentación.**
Usa la herramienta de línea de comandos DFU util para comprobar las particiones DFU; consulta la sección **Install DFU Util** más abajo para más detalles.

### Actualizar firmware

Hay tres versiones de firmware disponibles en el repositorio oficial de GitHub. Puedes elegir y flashear el firmware adecuado según los requisitos de tu aplicación. Para más detalles y descargas, consulta el [Link](https://github.com/respeaker/reSpeaker_Flex) de Github

:::note
Asegúrate de que necesitas descargar todo el repositorio.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

El firmware USB está diseñado para su uso con sistemas operativos host como **Windows, Linux y macOS** cuando se comunica a través de la interfaz de hardware USB.
Puedes explorar estos archivos de firmware en este enlace

| Firmware                         | Canales | Notas                                                   |
|----------------------------------|----------|---------------------------------------------------------|
| respeaker_flex_ua-io16-6ch-cir.bin | 6 Canales | 16 kHz, 6 canales usando arreglo de micrófonos circular             |
| respeaker_flex_ua-io16-6ch-lin.bin | 6 Canales | 16 kHz, 6 canales usando arreglo de micrófonos lineal               |
| respeaker_flex_ua-io16-cir.bin     | 2 Canales | 16 kHz, salida de 2 canales usando arreglo de micrófonos circular          |
| respeaker_flex_ua-io16-lin.bin     | 2 Canales | 16 kHz, salida de 2 canales usando arreglo de micrófonos lineal            |
| respeaker_flex_ua-io48-cir.bin     | 2 Canales | 48 kHz, salida de 2 canales usando arreglo de micrófonos circular          |
| respeaker_flex_ua-io48-lin.bin     | 2 Canales | 48 kHz, salida de 2 canales usando arreglo de micrófonos lineal            |

Conecta el reSpeaker Flex a tu PC mediante el cable USB. Ten en cuenta que debes usar el puerto XMOS USB-C (cerca del botón RST) para flashear el firmware de XMOS.

</TabItem>

 <TabItem value="I2S" label="I2S">

El firmware I2S está pensado para su uso cuando el dispositivo está conectado a un microcontrolador host como el XIAO ESP32S3. En esta configuración, los datos de voz se transmiten usando el protocolo I2S. El archivo de firmware **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** está disponible aquí. Este firmware admite audio de 2 canales con una profundidad de 32 bits a una frecuencia de muestreo de 16 kHz.

| Firmware                                      | Canales | Notas                                                     |
|-----------------------------------------------|----------|-----------------------------------------------------------|
| respeaker_flex_inthost-lr16-cir-i2c.bin      | 2 Canales | 16 kHz, salida estéreo, arreglo de micrófonos circular   |
| respeaker_flex_inthost-lr16-lin-i2c.bin      | 2 Canales | 16 kHz, salida estéreo, arreglo de micrófonos lineal|
| respeaker_flex_inthost-lr48-cir-i2c.bin      | 2 Canales | 48 kHz, salida estéreo, arreglo de micrófonos circular|
| respeaker_flex_inthost-lr48-lin-i2c.bin      | 2 Canales | 48 kHz, salida estéreo, arreglo de micrófonos lineal|

Conecta el reSpeaker Flex a tu PC mediante el cable USB. Ten en cuenta que debes usar el puerto XMOS USB-C (cerca del botón RST) para flashear el firmware de XMOS.

</TabItem>
</Tabs>

### Instalar DFU Util

`dfu-util` es una herramienta de línea de comandos para la Actualización de Firmware de Dispositivo (Device Firmware Upgrade) vía USB.

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

- Conecta el reSpeaker Flex y comprueba la detección del dispositivo:

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> Si obtienes:  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> Continúa con el paso de instalación del controlador a continuación.

- Instala [Zadig](https://zadig.akeo.ie/)  
  - Abre Zadig → `Options > List All Devices`  
  - Selecciona `reSpeaker XVF3800 Flex`  
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

### Flashear firmware

Descarga el repositorio completo de firmware desde GitHub aquí reSpeaker Flex XVF 3800

- Ejecuta el siguiente comando para flashear el firmware

  - dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

- En Linux, ejecútalo con sudo

  - sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

## Grabar y reproducir con firmware USB

<Tabs>
<TabItem value="windows" label="Windows">

### Configurar Audacity (Windows)

1. Abre **Audacity**
2. Ve a **Audio Setup > Audio Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting.png" alt="pir" width={600} height="auto" /></p>

3. Configura:
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker XVF3800 Flex`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz` (para ambos **Project** y **Default Sample Rate**)
   - **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting_2.png" alt="pir" width={600} height="auto" /></p>

1. Haz clic en **OK**
2. Todo listo: ¡empieza a grabar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/windw3.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="macos" label="macOS">

### Configurar Audacity (macOS)

1. Abre **Audacity**
2. Ve a **Audio Setup** y selecciona **Recording Device** como **reSpeaker 3800 Flex**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac1.png" alt="pir" width={600} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac2.png" alt="pir" width={600} height="auto"/></p>

3. Ve a **Audio Setting** y configura:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac3.png" alt="pir" width={600} height="auto"/></p>

- **Recording Device**: `reSpeaker 3800 Flex`
- **Channels**: `2 (Stereo)`
- **Sample Rate**: `16000 Hz` (para ambos **Project** y **Default Sample Rate**)
- **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac4.png" alt="pir" width={600} height="auto"/></p>

4. Haz clic en **OK**
5. ¡Listo para grabar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mac5.png" alt="pir" width={600} height="auto"/></p>

</TabItem>

<TabItem value="linux" label="Raspberry Pi / Linux">

### Grabación en Raspberry Pi (línea de comandos)

1. **Encontrar el número de la tarjeta de sonido**:

```bash
arecord -l
```

Salida de ejemplo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/arecord.png" alt="pir" width={600} height="auto"/></p>

 En este caso, **el número de tarjeta es 3**

---

2. **Grabar audio (5 segundos)**:

```bash
arecord -D plughw:3,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 Sustituye `3` por el número real de tu tarjeta de sonido

---

3. **Ajustar el volumen de reSpeaker XVF3800 en ALSA**

```bash
alsamixer
```

En alsamixer, usa las teclas de flecha izquierda/derecha para navegar hasta el dispositivo de sonido correcto. Usa la tecla de flecha arriba para aumentar el volumen.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/alsa.png" alt="pir" width={600} height="auto"/></p>

4. **Reproducción**:

```bash
aplay -D plughw:3,0 output.wav
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

- En la ventana de Audio Settings:
  - Elige el dispositivo de grabación correcto (por ejemplo, reSpeaker XVF3800 Flex).
  - Elige el dispositivo de reproducción adecuado (por ejemplo, reSpeaker XVF3800 Flex).
  - Asegúrate de que Host esté configurado en ALSA para una mejor compatibilidad en Raspberry Pi.
- Haz clic en OK para aplicar la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **Grabar y reproducir audio**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>

## ¿Cómo ajustar parámetros?

El ajuste permite a los usuarios configurar parámetros de los algoritmos de audio integrados y comunicarse directamente con el chip XMOS.

Se proporciona una interfaz de control en Python dedicada para la configuración de parámetros y la interacción con el dispositivo.


[**Python Control Directory**](https://github.com/respeaker/reSpeaker_Flex/tree/main/python_control)

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
* Biblioteca de sistema `libusb`


### Instalación y dependencias

Instala la dependencia de Python requerida usando:

```bash
pip install pyusb
```

Según tu sistema operativo, puede que también necesites instalar el paquete `libusb` por separado.

---

### Uso

**Sintaxis básica**

```bash
python xvf_host.py [options] command [value(s)...]
```

---

**Opciones de comando**

| Option         | Description                                           |
| -------------- | ----------------------------------------------------- |
| `-l`, `--list` | List all supported commands with detailed information |
| `--vid`        | Set USB Vendor ID (default: `0x2886`)                 |
| `--pid`        | Set USB Product ID (default: `0x001A`)                |
| `--values`     | Provide values for write commands (optional)          |

---

### Ejemplos de uso

**1. Listar todos los comandos disponibles**

```bash
python xvf_host.py --list
```

Muestra todos los comandos compatibles y sus descripciones.

---

**2. Leer información de la versión del firmware**

```bash
python xvf_host.py VERSION
```

Lee y muestra la información de la versión de firmware actual desde el dispositivo.

---

**3. Leer valores de DOA (Direction of Arrival)**

```bash
python xvf_host.py DOA_VALUE
```

Recupera el valor actual de Direction of Arrival (DOA) detectado por la matriz de micrófonos.

## Solución de problemas

### ¿La reproducción desde la salida del altavoz no es suficiente?

Si el volumen de salida del altavoz de **reSpeaker Flex** es demasiado bajo en Linux, puede que necesites ajustar los **niveles del mezclador ALSA** para la tarjeta de sonido XVF3800. Sigue los pasos a continuación para aumentar el volumen de salida.

**Paso 1: Abrir ALSA Mixer**

1. Abre una terminal.
2. Escribe el siguiente comando y pulsa **Enter**:

   ```bash
   alsamixer
   ```

**Paso 2: Seleccionar la tarjeta de sonido XVF3800 Flex**

1. Pulsa **F6** para abrir el menú de selección de tarjeta de sonido.
2. Usa las **teclas de flecha arriba/abajo** para resaltar la tarjeta de sonido **XVF3800 Flex**.
3. Pulsa **Enter** para confirmar la selección.

**Paso 3: Ajustar el volumen de PCM-1**

1. Usa las **teclas de flecha izquierda/derecha** para navegar hasta **PCM-1**.
2. Usa la **tecla de flecha arriba** para aumentar el nivel de volumen hasta **100%**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/alexa.png" alt="pir" width={600} height="auto"/></p>

**Paso 4: Guardar la configuración de ALSA**

1. Pulsa **ESC** para salir de `alsamixer`.
2. Antes de desconectar reSpeaker Flex, ejecuta el siguiente comando para guardar tu configuración:

```bash
   sudo alsactl store
   ```

**Paso 5: Opción adicional (usando PulseAudio)**

Si aún no puedes oír el sonido con claridad después de ajustar los niveles de ALSA, intenta instalar **PulseAudio Volume Control** para realizar ajustes de volumen más detallados:

```bash
sudo apt install pavucontrol -y
```

Luego puedes abrir **pavucontrol** y aumentar el volumen de salida por encima del 100% si es necesario.

### ¿No se puede usar como dispositivo de sonido en Windows después de flashear el firmware?

Abre el menú de inicio y escribe Device manager. Busca los dispositivos reSpeaker Flex relacionados, haz clic derecho sobre ellos y selecciona Uninstall devices. Después de eso, reinicia el dispositivo (conecta y desconecta el USB) y Windows volverá a instalar el controlador de tarjeta de sonido correcto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker_xvf_3800_dfu.png" alt="pir" width={600} height="auto"/></p>

### ¿Se puede alimentar reSpeaker Flex con 12V mientras está conectado a un PC por USB?

Sí. reSpeaker Flex admite entrada de alimentación de 12V DC simultánea y conexión USB-C a un PC. La entrada de 12V alimenta el dispositivo, mientras que USB-C proporciona la interfaz de audio USB (UAC) y de control.

Hemos probado esta configuración usando una fuente de alimentación de 12V/2A conectada al terminal de entrada de 12V y un cable USB-C conectado a un PC. Reproducimos música correctamente a través de un altavoz Mono Enclosed (4Ω, 5W) conectado a reSpeaker Flex.

### Si suministro 12V a través del terminal y uso USB solo para datos (UAC + control), ¿USB sigue necesitando VBUS (5V) para enumerar?

 No. Cuando reSpeaker Flex se alimenta a través del terminal de entrada de 12V, USB VBUS (5V) no es necesario para la enumeración. Puedes conectar USB a un PC para audio UAC y control mientras alimentas el dispositivo con 12V.

## Recursos

- [Archivo 2D circular de reSpeaker Flex XVF3800](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_circular_2d.dxf)
- [Archivo 2D lineal de reSpeaker Flex XVF3800](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_linear_2d.dxf)
- [Archivo 2D de la placa central de reSpeaker Flex XVF3800](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_Separate_2d.dxf)
- [Archivo 3D circular de reSpeaker Flex XVF3800](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_circular_260210.step)
- [Archivo 3D lineal de reSpeaker Flex XVF3800](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_linear.step)
- [Archivo 3D de la placa central de reSpeaker Flex XVF3800](https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeaker_xvf3800_flex_Separate.step)



## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
