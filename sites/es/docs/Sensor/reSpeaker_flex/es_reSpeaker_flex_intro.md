---
description: reSpeaker Flex es un potente sistema de voz modular con XMOS XVF3800, con matrices de 4 micrófonos circulares y lineales intercambiables para una captura de audio precisa de 360° o direccional, perfecto para robótica y dispositivos inteligentes.
title: Introducción a reSpeaker Flex
keywords:
  - reSpeaker flex
  - xvf3800
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array.webp
slug: /respeaker_flex_introduction
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 03/26/2026
  author: Kasun Thushara
createdAt: '2026-03-26'
updatedAt: '2026-04-01'
url: https://wiki.seeedstudio.com/es/respeaker_flex_introduction/
---
# Introducción a reSpeaker Flex

El reSpeaker Flex es un sistema de procesamiento de voz modular con arquitectura dividida, construido alrededor del procesador XMOS XVF3800, diseñado específicamente para robots y terminales de interacción inteligente. A diferencia de las matrices de micrófonos todo en uno convencionales, el Flex separa la placa de procesamiento principal de la placa de matriz de micrófonos; ambas están conectadas mediante un cable flexible FPC de cinta, lo que permite incrustar la matriz en cualquier posición física dentro de la carcasa de un producto mientras se mantienen los componentes electrónicos de procesamiento en otro lugar.
El sistema admite dos configuraciones intercambiables de matriz de micrófonos: una **matriz circular de 4 micrófonos** para captura omnidireccional de 360°, y una **matriz lineal de 4 micrófonos** para captación direccional frontal con supresión trasera. Ambas placas se conectan a la misma placa principal a través de una interfaz FPC estandarizada de 24 pines, y el sistema funciona en modo USB (UAC 2.0 plug-and-play) o en modo I2S para integración embebida. Se puede soldar un módulo XIAO ESP32S3 opcional en la placa principal para conectividad inalámbrica y control ampliado.

### Serie de micrófono circular 

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 </th>
    <th>reSpeaker Flex XVF3800 Circular con XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Sound-Event-Detection-Module-D1-p-6652.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-Power-over-Ethernet-p-5673.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>



### Serie de micrófono lineal 

<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 </th>
    <th>reSpeaker Flex XVF3800 Linear con XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Sound-Event-Detection-Module-D1-p-6652.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-Power-over-Ethernet-p-5673.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>

## Características 

- **Diseño modular dividido**: La placa principal y la placa de matriz de micrófonos están físicamente separadas, conectadas mediante un cable de cinta FPC para una colocación flexible en cualquier chasis de producto

- **Elección de configuraciones de micrófonos**: Cambia entre la matriz circular de 4 micrófonos (captación de 360°, separación de 44 mm) o la matriz lineal de 4 micrófonos (directividad frontal de 180°, separación de 33 mm) usando la misma placa principal

- **Procesamiento de audio XMOS XVF3800**: Conjunto completo de AEC, AGC, DoA, conformación de haz multicanal, VAD, supresión de ruido y desreverberación

- **Modos de funcionamiento duales**: USB UAC 2.0 para plug-and-play con PC y SBC; modo I2S para integración embebida directa

- **Conectividad USB dual**: El puerto USB-C y el puerto con conector de bloqueo PH2.0 admiten audio UAC 2.0 y actualización de firmware DFU

- **Amplificador de altavoz integrado**: Admite el accionamiento de altavoces de 10 W y 4 ohmios mediante conector JST, con salida de auriculares AUX de 3,5 mm

- **Compatibilidad con XIAO ESP32S3 (opcional)**: El módulo soldado añade Wi-Fi/Bluetooth, con buses I2S e I2C conectados directamente al XVF3800 para control inalámbrico y reenvío de audio

- **Flexibilidad de firmware**: Variantes de firmware USB dual (2 canales y 6 canales), firmware I2S, actualización DFU mediante dfu-util y persistencia de configuración entre ciclos de encendido

- **SDK de Python**: Formato de grabación, volumen, parámetros de algoritmo y enrutamiento de canales ajustables mediante Python

## Componentes principales 

### Placa principal

| Componente / Característica | Descripción |
|--------------------|------------|
| **Procesador de audio principal** | XMOS XVF3800 (firmware v3.2.1), gestiona todo el DSP de audio incluyendo AEC, conformación de haz, DoA y supresión de ruido |
| **Códec de audio** | TLV320AIC3104, gestiona la conversión de audio y la salida DAC |
| **Interfaz de matriz de micrófonos FPC** | Conector FPC de 24 pines con pestillo de bloqueo, admite matrices de hasta 8 micrófonos con 2 líneas GPIO |
| **Puerto USB-C** | Audio UAC 2.0, actualización de firmware DFU y alimentación |
| **Puerto PH2.0** | Conector con pestillo de bloqueo; proporciona el mismo audio UAC 2.0 y soporte DFU que el puerto USB-C |
| **Conector AUX de 3,5 mm** | Salida de auriculares lateral impulsada desde el DAC integrado |
| **Conector JST para altavoz** | Conector de montaje vertical que acciona altavoces de hasta 10 W a 4Ω; se conserva una almohadilla de soldadura para conexión de altavoz cableada |
| **Terminal de alimentación externa** | Suministra 12 V a todo el sistema y admite cargas de altavoz de 10 W (prioridad P1) |
| **Botón RST** | Reinicio por hardware para el XVF3800 |
| **Botón SafeMode (Boot)** | Mantener pulsado durante el encendido para entrar en modo seguro para recuperación de firmware |
| **LED PWR** | Indicador verde de encendido |
| **Almohadilla de depuración** | Almohadilla reservada para XMOS XTAG4 (no soldada en fábrica) |
| **Cabeceras de E/S XMOS 3800** | Pines y almohadillas expuestos para I2C, I2S, 5V/GND, pines de altavoz y E/S restantes del XVF3800 |
| **Orificios de montaje** | 4 × orificios de montaje M3 |
| **XIAO ESP32S3** | Admite soldar XIAO ESP32S3 cuando se utiliza como dispositivo host |
| **GPIO de XIAO ESP32S3** | Los GPIO restantes se pueden usar para E/S y expansión de periféricos |





### Placa de matriz circular 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/circle.png" alt="pir" width={500} height="auto" /></p>

| Componente / Característica | Descripción |
|--------------------|------------|
| **Micrófonos** | 4× micrófonos PDM MEMS con separación de 44 mm dispuestos en un diseño circular |
| **Patrón de captación** | Captura de audio omnidireccional de 360° |
| **Interfaz** | Conector FPC a la placa principal |
| **Montaje** | 3 × orificios de montaje M3 para fijación a carcasa o alojamiento |




### Placa de matriz lineal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/linear.png" alt="pir" width={500} height="auto" /></p>

| Componente / Característica | Descripción |
|--------------------|------------|
| **Micrófonos** | 4× micrófonos PDM MEMS con separación de 33 mm dispuestos en un diseño lineal |
| **Patrón de captación** | Patrón de captación frontal de aproximadamente 180°, con el sonido trasero suprimido |
| **Interfaz** | Conector FPC; el cable se puede enrutar desde el lateral o la parte trasera |
| **Montaje** | 2 × orificios de montaje M3 |


### Compatibilidad con XIAO ESP32S3 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/xiao_esp32s3.png" alt="pir" width={700} height="auto" /></p>

La placa principal de reSpeaker Flex incluye una huella dedicada para soldar un módulo Seeed Studio XIAO ESP32S3, lo que habilita conectividad Wi-Fi y Bluetooth además de la canalización de procesamiento de audio del XVF3800. Los SKU que incluyen XIAO (-C4-1 y -L4-1) se envían con este módulo preinstalado; los SKU base (-C4-0 y -L4-0) dejan la huella sin poblar.
Cuando se monta el XIAO, se establecen las siguientes conexiones entre este y el XVF3800:

- **Bus I2S** — bus dual (reproducción y grabación) con BCLK, MCLK y LRCLK compartidos para transmisión de audio en ambas direcciones
- **Bus I2C** — para leer y escribir parámetros de configuración del XVF3800 desde el XIAO
- **Línea RST** — el XIAO puede activar un reinicio por hardware en el XVF3800 mediante un pin de E/S dedicado
- **E/S restantes de XIAO** — llevadas a cabeceras/pads de pines etiquetados para expansión por parte del usuario

Se incluye una antena Wi-Fi FPC (para el XIAO ESP32S3 sin antena integrada) como accesorio con todas las variantes equipadas con XIAO.

### Cabecera de pines 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/pinheader_1.png" alt="pir" width={600} height="auto" /></p>

### Cable FPC de 24 pines 

La interfaz de matriz de micrófonos FPC es un conector de 24 pines y paso de 0,5 mm con pestillo de bloqueo, y el cable de cinta FPC de 20 cm incluido en la caja está adaptado a este conector.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/24_fpc_cable.png" alt="pir" width={600} height="auto" /></p>

| Pin | Nombre de señal | Tipo | Descripción de la función | Notas |
|-----|------------|------|----------------------|-------|
| 1 | MIC_VDD | Alimentación | Fuente de alimentación del micrófono | Alimentación de 3,3 V |
| 2 | MIC_VDD | Alimentación | Fuente de alimentación del micrófono | Pin doble para mayor estabilidad de alimentación |
| 3 | GND | GND | Tierra de retorno de alimentación | Tierra de alimentación |
| 4 | MIC_CLK | Out | Señal de reloj global | Señal principal, 2–4 MHz |
| 5 | GND | GND | Tierra de apantallamiento del reloj | Tierra dedicada para el reloj |
| 6 | MIC_D1 | In | Línea de datos 1 | Micrófono CH1 |
| 7 | GND | GND | Tierra de aislamiento de D1 | |
| 8 | MIC_D2 | In | Línea de datos 2 | Micrófono CH2 |
| 9 | GND | GND | Tierra de aislamiento de D2 | |
| 10 | MIC_D3 | In | Línea de datos 3 | Micrófono CH3 |
| 11 | GND | GND | Tierra de aislamiento de D3 | |
| 12 | MIC_D4 | In | Línea de datos 4 | Micrófono CH4 |
| 13 | GND | GND | Tierra de aislamiento de D4 | |
| 14 | MIC_D5 | In | Línea de datos 5 | Micrófono CH5 |
| 15 | GND | GND | Tierra de aislamiento de D5 | |
| 16 | MIC_D6 | In | Línea de datos 6 | Micrófono CH6 |
| 17 | GND | GND | Tierra de aislamiento de D6 | |
| 18 | MIC_D7 | In | Línea de datos 7 | Micrófono CH7 |
| 19 | GND | GND | Tierra de aislamiento de D7 | |
| 20 | MIC_D8 | In | Línea de datos 8 | Micrófono CH8 |
| 21 | GND | GND | Tierra de aislamiento de D8 | |
| 22 | GPIO_1 | I/O | Entrada/salida de propósito general | Función de expansión |
| 23 | GPIO_2 | I/O | Entrada/salida de propósito general | Función de expansión |
| 24 | GND | GND | Tierra de apantallamiento de GPIO | Absorbe el ruido de GPIO |

## Primeros pasos

### Preparación de hardware 

- Cable USB tipo C 
- Ordenador host o Raspberry Pi 

### Preparación de software 

### Uso fuera de la caja 

#### Restablecer 

El botón de reinicio (RST) proporciona un restablecimiento por hardware para la reSpeaker Flex cuando se presiona; reinicia el chip y vuelve a inicializar el sistema desde el principio, igual que un ciclo completo de encendido.

#### Conexión del altavoz 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/speaker-connection .jpg" alt="pir" width={600} height="auto" /></p>

Aquí puedes ver cómo conectar altavoces usando el conector de auriculares AUX de 3,5 mm o la interfaz de altavoz JST integrada, según tu preferencia de salida de audio.

#### Modo seguro 

**Safe Mode** es un modo especial de recuperación en la **reSpeaker Flex** que te permite grabar firmware mediante **USB DFU** o I2C para dispositivos como la Raspberry Pi y **ESP32**.

Si has grabado previamente el **firmware I2S** y quieres volver al **firmware USB**, puedes entrar en **Safe Mode** y volver a grabar el firmware USB usando **USB DFU**.

:::note
- Firmware USB
    - Solo es compatible con USB DFU.
    - Puedes actualizar el dispositivo a través de una conexión USB.
    - No es compatible con I2C DFU.
- Firmware I2S
    - Compatible con I2C DFU.
    - Permite actualizaciones de firmware a través de la interfaz I2C.
    - No es compatible con USB DFU.
- Firmware de Safe Mode
    - Almacenado en la partición Factory.
    - Compatible tanto con USB DFU como con I2C DFU.
    - Este es el firmware de recuperación más flexible.

:::

**Usa Safe Mode en las siguientes situaciones**

- Tu firmware **no funciona correctamente** (por ejemplo, **no se detecta el USB**).
- Necesitas **volver a grabar un nuevo firmware**, pero el firmware actual **no responde**.
- **Grabaste accidentalmente el firmware equivocado** y quieres recuperar el dispositivo.


 **Cómo entrar en Safe Mode** 

- **Apaga** el dispositivo por completo.
- **Mantén presionado el botón Boot**.
- Mientras mantienes presionado el **botón Boot, vuelve a conectar la alimentación.**
- El **LED rojo comenzará a parpadear**, confirmando que el dispositivo ha entrado en **Safe Mode.**
Ahora el dispositivo está ejecutando el **firmware de Safe Mode almacenado en la partición Factory.**


### Actualizar firmware 

Hay tres versiones de firmware disponibles en el repositorio oficial de GitHub. Puedes elegir y grabar el firmware adecuado según los requisitos de tu aplicación. Para más detalles y descargas, consulta el enlace de Github: 

:::note 
Asegúrate de que necesitas descargar todo el repositorio.
:::


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB" label="USB">

El firmware USB está diseñado para usarse con sistemas operativos host como **Windows, Linux y macOS** cuando se comunica a través de la interfaz de hardware USB.
Hay dos variantes de firmware disponibles: **respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin**, que proporciona audio de 2 canales, y **respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin**, que proporciona audio de 6 canales. Ambas versiones de firmware funcionan a una frecuencia de muestreo de 16 kHz con una profundidad de 32 bits.

Puedes explorar estos archivos de firmware en este enlace

| Firmware | Canales | Notas |
|----------|----------|-------|
| XXXXXXXXXX | XXXXXX | XXXXXXX |

Conecta la reSpeaker Flex a tu PC mediante el cable USB. Ten en cuenta que debes usar el puerto XMOS USB-C (cerca del botón RST) para grabar el firmware de XMOS.

</TabItem>

 <TabItem value="I2S" label="I2S">

El firmware I2S está pensado para usarse cuando el dispositivo está conectado a un host microcontrolador como el XIAO ESP32S3. En esta configuración, los datos de voz se transmiten usando el protocolo I2S. El archivo de firmware **respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin** está disponible aquí. Este firmware admite audio de 2 canales con una profundidad de 32 bits a una frecuencia de muestreo de 16 kHz.

| Firmware | Canales | Notas |
|----------|----------|-------|
| XXXXXXXXXX | XXXXXX | XXXXXXX |

Conecta la reSpeaker Flex a tu PC mediante el cable USB. Ten en cuenta que debes usar el puerto XMOS USB-C (cerca del botón RST) para grabar el firmware de XMOS.

</TabItem>
</Tabs>

### Instalar DFU Util


`dfu-util` es una herramienta de línea de comandos para la actualización de firmware del dispositivo (Device Firmware Upgrade) vía USB.

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

- Conecta la reSpeaker Flex y comprueba la detección del dispositivo:

```bash
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/image2.png" alt="pir" width={600} height="auto"/></p>

> Si obtienes:  
> `Cannot open DFU device 2886:001a ... (LIBUSB_ERROR_NOT_SUPPORTED)`  
> Continúa con el paso de instalación del controlador que aparece a continuación.

- Instala [Zadig](https://zadig.akeo.ie/)  
  - Abre Zadig → `Options > List All Devices`  
  - Selecciona `reSpeaker XVF3800 Flex`  
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

### Grabar firmware 

Descarga el repositorio completo de firmware desde GitHub aquí reSpeaker Flex XVF 3800

- Ejecuta el siguiente comando para grabar el firmware

    - dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin

- En Linux, ejecútalo con sudo

    - sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin



## Grabación y reproducción con firmware USB 


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
   - **Sample Rate**: `16000 Hz` (tanto para **Project** como para **Default Sample Rate**)
   - **Sample Format**: `16-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/audacity_setting_2.png" alt="pir" width={600} height="auto" /></p>

1. Haz clic en **OK**
2. Ya estás listo: ¡empieza a grabar!

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
- **Sample Rate**: `16000 Hz` (tanto para **Project** como para **Default Sample Rate**)
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

Ejemplo de salida:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/arecord.png" alt="pir" width={600} height="auto"/></p>

 En este caso, **el número de tarjeta es 3**

---

2. **Grabar audio (5 segundos)**:

```bash
arecord -D plughw:3,0 -c 2 -r 16000 -f S16_LE -d 5 output.wav
```

 Sustituye `3` por el número real de tu tarjeta de sonido

---

3. **Ajustar el volumen para reSpeaker XVF3800 en ALSA**

```bash
alsamixer
```

En alsamixer, usa las teclas de flecha izquierda/derecha para navegar hasta el dispositivo de sonido correcto. Usa la tecla de flecha hacia arriba para aumentar el volumen.

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

Espera a que se complete la instalación. Aparecerá un nuevo icono de Pi-Apps en tu menú.

2. **Instalar Audacity mediante Pi-Apps**

3. **Configurar entrada y salida de audio**

- Haz clic en "Audio Setup" en la barra de herramientas.
- Selecciona "Audio Settings" en el menú desplegable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-1.PNG" alt="pir" width={600} height="auto"/></p>

- En la ventana de Audio Settings:
  - Elige el dispositivo de grabación correcto (por ejemplo, reSpeaker XVF3800 Flex).
  - Elige el dispositivo de reproducción apropiado (por ejemplo, reSpeaker XVF3800 Flex).
  - Asegúrate de que Host esté configurado en ALSA para una mejor compatibilidad en Raspberry Pi.
- Haz clic en OK para aplicar la configuración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy.PNG" alt="pir" width={600} height="auto"/></p>

4. **Grabar y reproducir audio**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/raspberry-audiopy-3.PNG" alt="pir" width={600} height="auto"/></p>

</TabItem>
</Tabs>


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



