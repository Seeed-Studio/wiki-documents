---
description: Basado en el análisis de la arquitectura y experimentos en dispositivo real de reComputer Classic J3010 + Sony IMX219, se explica cómo funciona la cámara Jetson a lo largo de toda la cadena de datos Sensor → MIPI CSI-2 → NVCSI → VI → ISP, y se comparan las dos rutas de adquisición: V4L2 RAW y Argus ISP.
title: Cámara Jetson
keywords:
  - jetson
  - camera
  - sensor
  - csi
  - nvcsi
  - vi
  - isp
  - imx219
  - v4l2
  - argus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_camera_data_chain
last_update:
  date: 11/02/2026
  author: youjiang
---

**Análisis de arquitectura y experimentos en dispositivo real basados en reComputer Classic J3010 + Sony IMX219**

## Introducción

La cámara es uno de los periféricos más comunes en la plataforma Jetson. Desde la visión robótica y la inspección industrial hasta la conducción autónoma y la inteligencia encarnada, la cámara es un punto de entrada importante para que el sistema perciba el mundo real. Sin embargo, durante el desarrollo en Jetson, a menudo nos encontramos con algunos problemas aparentemente contradictorios:

- La cámara ha sido reconocida por el sistema — ¿por qué aún no puede capturar imágenes?
- `/dev/video0` ya existe — ¿por qué al ejecutar `v4l2-ctl` sigue apareciendo un Timeout?
- ¿Qué hacen respectivamente NVCSI, VI e ISP?
- ¿Cómo se convierten los datos RAW10 del sensor en una imagen en color visible?

Para entender estos problemas, no basta con conocer V4L2 o GStreamer. Necesitamos partir del hardware y comprender por qué módulos pasa un solo fotograma de imagen dentro de Jetson y cómo cooperan estos módulos. Este artículo presentará la siguiente cadena de datos:

**Sensor → MIPI CSI-2 → NVCSI → VI → ISP → Aplicación**

Al mismo tiempo, utilizaremos un [reComputer Classic J3010](https://www.seeedstudio.com/reComputer-J3010-p-5589.html) ejecutando realmente JetPack 6.2.1, junto con una [Sony IMX219 CSI Camera](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html), para verificar esta cadena de datos paso a paso. Después de leer este artículo, aprenderás lo siguiente. Espero que te sea útil:

1. La arquitectura de hardware y el flujo de datos completo de la cámara Jetson.
2. Las responsabilidades específicas del Sensor, NVCSI, VI e ISP.
3. La diferencia entre las dos rutas de adquisición: V4L2 RAW y Argus ISP.
4. Cómo usar herramientas de Linux para observar la topología real de la cámara.
5. Cómo capturar imágenes RAW e imágenes en color procesadas por el ISP.
6. Cómo localizar problemas de cámara utilizando información como VI Timeout y RTCPU Trace.

---

## 1. Plataforma de pruebas en dispositivo real

El dispositivo de prueba utilizado en este artículo es el reComputer Classic J3010 de Seeed Studio, con una cámara Sony IMX219. El IMX219 es un sensor de imagen CMOS de 8 MP común, también utilizado en el Raspberry Pi Camera Module v2.

| Elemento | Configuración |
|---|---|
| Dispositivo | reComputer Classic J3010 |
| SoC | NVIDIA Jetson Orin Nano |
| JetPack | 6.2.1 |
| Jetson Linux | R36.4.3 |
| Ubuntu | 22.04.5 LTS |
| Kernel de Linux | 5.15.148-tegra |
| Sensor de cámara | Sony IMX219 |
| Interfaz de cámara | MIPI CSI-2 |
| Resolución máxima del sensor | 3280 × 2464 |
| Formato de datos de la cámara | RAW Bayer |
| Controlador de cámara | imx219 |

Ten en cuenta que las especificaciones del sensor IMX219 pueden no coincidir exactamente con los modos realmente expuestos por el controlador actual. Los experimentos posteriores se basan en los resultados de enumeración del dispositivo.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/test_platform.jpg"/></div>

Los archivos experimentales en el resto de este artículo se guardan de forma uniforme en el directorio `~/jetson-camera-test` en el Jetson.

---

## 2. Arquitectura general de la cámara Jetson

Primero, necesitamos construir una comprensión básica: **después de que los datos de imagen entran en Jetson, no se entregan directamente a la CPU para su procesamiento.**

Para una cámara típica MIPI CSI Bayer, los datos necesitan pasar por varios módulos de hardware.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/camera_data_path.png"/></div>

Ten en cuenta que el diagrama anterior muestra la relación lógica; no significa que el ISP esté necesariamente conectado físicamente después de la salida DMA del VI. La transferencia real de datos y el acceso a memoria son gestionados por el hardware interno del SoC y el NVIDIA Camera Framework.

**¿Qué trabajo realiza cada módulo?**

| Módulo | Nombre completo | Función principal |
|---|---|---|
| Sensor | Image Sensor | Convierte la luz en datos de píxeles digitales |
| CSI-2 | Camera Serial Interface 2 | Transmite datos de imagen a través de una interfaz serie de alta velocidad |
| NVCSI | NVIDIA Camera Serial Interface | Recibe, analiza y enruta los datos CSI |
| VI | Video Input | Captura fotogramas de imagen y los escribe en memoria |
| ISP | Image Signal Processor | Realiza procesamiento de color y calidad de imagen sobre imágenes RAW |

Esta cadena puede dividirse aún más en tres etapas.

**Primera etapa: Generación de la imagen**

El sensor es responsable de la conversión fotoeléctrica, la exposición y la conversión analógico-digital.

**Segunda etapa: Transmisión y captura de la imagen**

MIPI CSI-2, NVCSI y VI son responsables de transferir los datos de imagen a Jetson y completar la captura de fotogramas.

**Tercera etapa: Procesamiento de la imagen y aplicaciones**

El ISP puede procesar los datos RAW y finalmente entregar la imagen a Argus, GStreamer, OpenCV u otras aplicaciones.

Ten en cuenta que en Jetson, las imágenes RAW Bayer **pueden omitir el ISP**: se pueden obtener datos de imagen en bruto directamente a través de V4L2, o puedes usar NVIDIA Camera Core y Argus para procesar imágenes con el ISP. Estas son dos rutas de uso de software diferentes.

---

## 3. Sensor: ¿De dónde vienen los datos de imagen?

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/image_sensor.png"/></div>

El punto de partida de la cadena de datos de la cámara es el Image Sensor, cuyo papel principal es convertir la imagen óptica capturada por la lente en datos de imagen digitales. Tomando como ejemplo el Sony IMX219, el sensor contiene internamente principalmente una matriz de píxeles fotosensibles, circuitos de procesamiento de señal analógica, un convertidor analógico-digital (ADC) y una interfaz de salida de datos MIPI CSI-2.

Cuando la luz se proyecta sobre la superficie del sensor a través de la lente, todo el proceso de adquisición de la imagen puede dividirse en los siguientes pasos:

1. **Conversión fotoeléctrica**: La matriz de píxeles fotosensibles recibe la luz, y cada píxel genera una carga correspondiente según el número de fotones recibidos, convirtiendo así la señal óptica en una señal eléctrica.
2. **Procesamiento de señal analógica**: El sensor lee la carga acumulada de cada píxel, la convierte en una señal de voltaje y realiza la amplificación y supresión de ruido necesarias.
3. **Conversión analógico-digital**: El ADC convierte el voltaje analógico en valores de píxel digitales. Por ejemplo, en modo RAW10, cada píxel utiliza 10 bits para representar su resultado muestreado.
4. **Transmisión de datos**: El sensor empaqueta los datos de píxeles digitales de acuerdo con el protocolo MIPI CSI-2 y los transmite a través de la interfaz física MIPI D-PHY al módulo NVCSI de Jetson.

### 3.1 Comprender RAW Bayer

Las imágenes en color que vemos todos los días suelen contener tres canales de color: rojo, verde y azul. Pero para un sensor Bayer típico, un solo píxel normalmente solo registra el valor muestreado de un color. Por ejemplo, la disposición RGGB se muestra en la figura siguiente.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/bayer_rggb.png"/></div>

Por lo tanto, los datos RAW Bayer que salen del sensor no equivalen a una imagen en color RGB completa. Para obtener una imagen en color completa, es necesario reconstruir la información de color mediante algoritmos como el demosaicing.

### 3.2 ¿Qué significa RAW10?

El modo de salida común del IMX219 utiliza RAW Bayer de 10 bits. RAW10 significa que cada píxel contiene 10 bits de información de muestreo en bruto válida.

Por ejemplo, una imagen de 1920 × 1080 tiene un total de:

1920 × 1080 = 2,073,600 píxeles

Contando solo los datos de píxeles válidos, el volumen de datos requerido para RAW10 es:

2,073,600 × 10 / 8 = 2,592,000 Bytes

lo que equivale a unos 2.47 MiB.

Sin embargo, este es solo el volumen de datos teórico de los píxeles válidos, y no significa que el archivo RAW guardado en la memoria de Jetson deba tener exactamente este tamaño. El método de empaquetado de los datos CSI-2, la disposición en memoria de la salida del VI y la alineación de líneas pueden afectar al tamaño real final del búfer. Esto se verificará más adelante en el experimento de captura RAW.

### 3.3 La interfaz de control y la interfaz de datos del sensor

El IMX219 tiene dos interfaces con diferentes propósitos:

- **Interfaz de control:** I2C, utilizada para configurar registros como tiempo de exposición, ganancia analógica, frecuencia de fotogramas y modos de funcionamiento.
- **Interfaz de datos:** MIPI CSI-2, utilizada para emitir continuamente datos de píxeles de imagen.

Las dos son independientes entre sí.

Por ejemplo, que Jetson acceda correctamente al IMX219 a través de I2C solo indica que la comunicación de control del sensor puede haberse establecido.

No puede demostrar que el sensor haya comenzado a emitir imágenes con normalidad, ni puede demostrar que CSI y VI hayan capturado datos correctamente.

### 3.4 Experimento en dispositivo real 1: Reconocer el Sony IMX219

Primero, instala las herramientas v4l2:

```bash
sudo apt update
sudo apt install v4l-utils -y
v4l2-ctl --version
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/install_v4l2.png"/></div>

Luego ejecuta:

```text
ls -l /dev/video*
v4l2-ctl --list-devices
```

Una CSI Camera registrada correctamente suele mostrar el dispositivo de vídeo correspondiente.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/video_devices.png"/></div>

Aquí puedes ver que Jetson reconoció una cámara IMX219 y creó dos nodos de dispositivo de vídeo. A continuación, veamos la información detallada del dispositivo:

```text
v4l2-ctl -d /dev/video0 --all
```

<details>

<summary> Registro de salida de v4l2-ctl </summary>

```yaml
seeed@ubuntu:~$ v4l2-ctl -d /dev/video0 --all
Driver Info:
        Driver name      : tegra-video
        Card type        : vi-output, imx219 9-0010
        Bus info         : platform:tegra-capture-vi:2
        Driver version   : 5.15.148
        Capabilities     : 0x84a00001
                Video Capture
                Metadata Capture
                Streaming
                Extended Pix Format
                Device Capabilities
        Device Caps      : 0x04200001
                Video Capture
                Streaming
                Extended Pix Format
Media Driver Info:
        Driver name      : tegra-camrtc-ca
        Model            : NVIDIA Tegra Video Input Device
        Serial           :
        Bus info         :
        Media version    : 5.15.148
        Hardware revision: 0x00000003 (3)
        Driver version   : 5.15.148
Interface Info:
        ID               : 0x0300000b
        Type             : V4L Video
Entity Info:
        ID               : 0x00000009 (9)
        Name             : vi-output, imx219 9-0010
        Function         : V4L2 I/O
        Pad 0x0100000a   : 0: Sink
          Link 0x0200000f: from remote pad 0x1000006 of entity '13e00000.host1x:nvcsi@15a00000-' (Unknown sub-device (0002000a)): Data, Enabled
Priority: 2
Video input : 0 (Camera 2: ok)
Format Video Capture:
        Width/Height      : 3280/2464
        Pixel Format      : 'RG10' (10-bit Bayer RGRG/GBGB)
        Field             : None
        Bytes per Line    : 6592
        Size Image        : 16242688
        Colorspace        : sRGB
        Transfer Function : Default (maps to sRGB)
        YCbCr/HSV Encoding: Default (maps to ITU-R 601)
        Quantization      : Default (maps to Full Range)
        Flags             :
Streaming Parameters Video Capture:
        Capabilities     : timeperframe
        Frames per second: 21.000 (21/1)
        Read buffers     : 0

Camera Controls

                     group_hold 0x009a2003 (bool)   : default=0 value=0 flags=execute-on-write
                    sensor_mode 0x009a2008 (int64)  : min=0 max=5 step=1 default=0 value=0 flags=slider
                           gain 0x009a2009 (int64)  : min=16 max=171 step=1 default=16 value=16 flags=slider
                       exposure 0x009a200a (int64)  : min=13 max=683710 step=1 default=2495 value=13 flags=slider
                     frame_rate 0x009a200b (int64)  : min=2000000 max=21000000 step=1 default=21000000 value=2000000 flags=slider
           sensor_configuration 0x009a2032 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[22] flags=read-only, volatile, has-payload
         sensor_mode_i2c_packet 0x009a2033 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[1026] flags=read-only, volatile, has-payload
      sensor_control_i2c_packet 0x009a2034 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[1026] flags=read-only, volatile, has-payload
                    bypass_mode 0x009a2064 (intmenu): min=0 max=1 default=0 value=0 (0 0x0)
                                0: 0 (0x0)
                                1: 1 (0x1)
                override_enable 0x009a2065 (intmenu): min=0 max=1 default=0 value=0 (0 0x0)
                                0: 0 (0x0)
                                1: 1 (0x1)
                   height_align 0x009a2066 (int)    : min=1 max=16 step=1 default=1 value=1
                     size_align 0x009a2067 (intmenu): min=0 max=2 default=0 value=0 (1 0x1)
                                0: 1 (0x1)
                                1: 65536 (0x10000)
                                2: 131072 (0x20000)
               write_isp_format 0x009a2068 (int)    : min=1 max=1 step=1 default=1 value=1
       sensor_signal_properties 0x009a2069 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][18] flags=read-only, has-payload
        sensor_image_properties 0x009a206a (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][16] flags=read-only, has-payload
      sensor_control_properties 0x009a206b (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][36] flags=read-only, has-payload
              sensor_dv_timings 0x009a206c (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][16] flags=read-only, has-payload
               low_latency_mode 0x009a206d (bool)   : default=0 value=0
               preferred_stride 0x009a206e (int)    : min=0 max=65535 step=1 default=0 value=0
    override_capture_timeout_ms 0x009a206f (int)    : min=-1 max=2147483647 step=1 default=2500 value=2500
                   sensor_modes 0x009a2082 (int)    : min=0 max=30 step=1 default=30 value=5 flags=read-only
seeed@ubuntu:~$ v4l2-ctl -d /dev/video1 --all
Driver Info:
        Driver name      : tegra-embedded
        Card type        : tegra-capture-vi-metadata-2
        Bus info         : platform:tegra-capture-vi:2
        Driver version   : 5.15.148
        Capabilities     : 0x84a00001
                Video Capture
                Metadata Capture
                Streaming
                Extended Pix Format
                Device Capabilities
        Device Caps      : 0x04a00000
                Metadata Capture
                Streaming
                Extended Pix Format
Media Driver Info:
        Driver name      : tegra-camrtc-ca
        Model            : NVIDIA Tegra Video Input Device
        Serial           :
        Bus info         :
        Media version    : 5.15.148
        Hardware revision: 0x00000003 (3)
        Driver version   : 5.15.148
Interface Info:
        ID               : 0x03000013
        Type             : V4L Video
Entity Info:
        ID               : 0x00000011 (17)
        Name             : tegra-capture-vi-metadata-2
        Function         : V4L2 I/O
        Pad 0x01000012   : 0: Sink
Priority: 2
Format Metadata Capture:
        Sample Format   : 'G2XX' (Orbbec G2xx UVC Metadata)
        Buffer Size     : 96
```

</details>

Este comando puede proporcionar la información del controlador, las capacidades de captura, el formato de imagen y algunos parámetros de funcionamiento del dispositivo actual.

Si el controlador del Sensor no se carga, puedes buscar pistas en el registro del sistema. El registro puede contener fallos de acceso I2C, problemas de alimentación o errores relacionados con el Probe. Para el comando de captura del registro, consulta el siguiente comando:

```text
sudo dmesg | grep -i imx219
```

---

## 4. MIPI CSI-2: ¿Cómo llega la imagen desde el Sensor al Jetson?

Después de que el Sensor genera la imagen, necesita enviar los datos al Jetson a través de una interfaz física. El IMX219 entrega imágenes mediante la interfaz MIPI CSI-2. CSI-2 es un protocolo serie de alta velocidad usado para la transmisión de datos de cámara, ampliamente utilizado en sistemas embebidos.

### 4.1 CSI-2 y D-PHY

CSI-2 define el protocolo de transmisión de los datos de la cámara, mientras que D-PHY es la implementación típica de la capa física. Para una conexión D-PHY típica, la Cámara transmite información a través de líneas de datos diferenciales y una línea de reloj. Lo que CSI-2 envía no son solo datos de píxeles; también incluye información de paquetes usada para distinguir fotogramas, tipos de datos y canales, como: Inicio de fotograma, Fin de fotograma, Tipo de datos, Canal virtual, Carga útil de píxeles, etc. El receptor necesita identificar correctamente esta información para restaurar el flujo de datos continuo en los fotogramas de imagen correspondientes.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/mipi_csi2_dphy.png"/></div>

*Fuente de la imagen:* *https://blog.zhaw.ch/high-performance/2017/02/28/mipi-csidsi-interface-for-general-purpose-data-acquisition/*

### 4.2 ¿Cómo afecta el número de líneas CSI al ancho de banda?

Tomemos 1920 × 1080, 30 FPS, RAW10 como ejemplo.

La tasa teórica de datos de píxeles válidos por segundo es:

1920 × 1080 × 30 × 10 = 622.08 Mbps

El reComputer Classic J3010 utiliza dos Data Lanes, por lo que la tasa de datos de píxeles válidos por línea tras la distribución uniforme es de aproximadamente:

311.04 Mbps/Lane

Esto significa que, bajo las condiciones de captura anteriores, cada Data Lane necesita transportar en promedio unos **311 Mbps de datos de píxeles válidos** por segundo. Pero este no es el requisito real de velocidad de la línea. El cálculo real también necesita considerar la sobrecarga de paquetes CSI-2, el temporizado del sensor y el margen de ancho de banda correspondiente.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/csi2_circuit.png"/></div>

*Fuente de la imagen:* *https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf*

---

## 5. NVCSI: ¿Cómo recibe el Jetson los datos de la cámara?

Cuando el IMX219 envía datos al Jetson a través de MIPI CSI-2, los datos entran en NVCSI. Es el módulo de recepción de Cámara dentro del SoC del Jetson. Aquí necesitamos distinguir dos conceptos: **CSI-2 es un protocolo de transmisión de datos, mientras que NVCSI es el módulo de hardware dentro del Jetson que implementa la función correspondiente de recepción de datos.** NVCSI recibe datos CSI-2 del Sensor externo y los recibe, analiza y enruta según la configuración.

### 5.1 NVCSI y Canal Virtual

Para una sola cámara, el flujo de datos suele ser relativamente sencillo. Pero en escenarios donde varias cámaras comparten un enlace de datos CSI, se puede utilizar el Canal Virtual. El Canal Virtual permite que diferentes flujos de datos lógicos se transmitan en el mismo enlace CSI-2. Por ejemplo:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/virtual_channel.png"/></div>

En un sistema de cámara GMSL2, múltiples Sensores pueden pasar a través de un Serializer y un Deserializer para enviar datos al Jetson, y luego se distinguen diferentes flujos de vídeo mediante el Canal Virtual. Por lo tanto, en la depuración de múltiples cámaras, el mapeo de CSI Port, Virtual Channel y VI Channel es muy importante.

### 5.2 Experimento en dispositivo real 2: Visualizar el Media Graph de la cámara

El Linux Media Controller Framework puede representar las relaciones de conexión entre dispositivos multimedia como un grafo de topología.

En el J3010, consulta los Media Devices registrados en el sistema:

```bash
ls /dev/media*
# If a media0 device exists, view its details
media-ctl -d /dev/media0 -p
# Where:
# -d /dev/media0: specifies the Media Device to view.
# -p: prints the Media Controller topology information.
```

*Registro devuelto*

```bash
seeed@ubuntu:~$ ls /dev/media*
/dev/media0
seeed@ubuntu:~$ media-ctl -d /dev/media0 -p
Media controller API version 5.15.148

Media device information
------------------------
driver          tegra-camrtc-ca
model           NVIDIA Tegra Video Input Device
serial
bus info
hw revision     0x3
driver version  5.15.148

Device topology
- entity 1: 13e00000.host1x:nvcsi@15a00000- (2 pads, 0 link)
            type V4L2 subdev subtype Unknown flags 0
            device node name /dev/v4l-subdev0
        pad0: Sink
        pad1: Source

- entity 4: 13e00000.host1x:nvcsi@15a00000- (2 pads, 2 links)
            type V4L2 subdev subtype Unknown flags 0
            device node name /dev/v4l-subdev1
        pad0: Sink
                <- "imx219 9-0010":0 [ENABLED]
        pad1: Source
                -> "vi-output, imx219 9-0010":0 [ENABLED]

- entity 7: imx219 9-0010 (1 pad, 1 link)
            type V4L2 subdev subtype Sensor flags 0
            device node name /dev/v4l-subdev2
        pad0: Source
                [fmt:SRGGB10_1X10/3280x2464@1/21 field:none colorspace:srgb]
                -> "13e00000.host1x:nvcsi@15a00000-":0 [ENABLED]

- entity 9: vi-output, imx219 9-0010 (1 pad, 1 link)
            type Node subtype V4L flags 0
            device node name /dev/video0
        pad0: Sink
                <- "13e00000.host1x:nvcsi@15a00000-":1 [ENABLED]

- entity 17: tegra-capture-vi-metadata-2 (1 pad, 0 link)
             type Node subtype V4L flags 0
             device node name /dev/video1
        pad0: Sink

seeed@ubuntu:~$
```

Combinado con el registro real, la topología actual del Media Controller del IMX219 se puede simplificar en el siguiente diagrama.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/media_topology.png"/></div>

**Ten en cuenta que el Media Graph describe la topología registrada en el kernel; por sí solo no puede demostrar que los datos CSI de alta velocidad se estén transmitiendo con normalidad.**

Además de la cadena de datos completa, el registro actual también contiene dos Media Entities adicionales.

**Sub-dispositivo NVCSI sin conexión**

```text
entity 1: 13e00000.host1x:nvcsi@15a00000-
    (2 pads, 0 link)

    device node name /dev/v4l-subdev0
```

Este Sub-dispositivo NVCSI actualmente no tiene ningún Media Link establecido, por lo que no pertenece a la ruta de captura conectada del IMX219 anterior.

**Nodo de captura de metadatos**

```text
entity 17: tegra-capture-vi-metadata-2
    (1 pad, 0 link)

    device node name /dev/video1
```

Combinado con el resultado de `v4l2-ctl -d /dev/video1 --all`, se puede confirmar que `/dev/video1` es un dispositivo de captura de metadatos, no un nodo normal de captura de imagen para una segunda cámara.

Esto muestra que, **en Linux, el número de nodos `/dev/video*` no es necesariamente igual al número de cámaras realmente conectadas.** Los desarrolladores deben determinar la función real de un dispositivo combinando las Capacidades del dispositivo V4L2 y el Media Graph.

---

## 6. VI: ¿Cómo se convierten los datos CSI en fotogramas de imagen?

NVCSI es responsable de recibir los datos CSI, mientras que la responsabilidad principal de VI (Video Input) es completar la captura de fotogramas según la configuración y escribir los datos de imagen en la memoria. En una ruta típica de captura RAW de V4L2:

`IMX219` -> `MIPI CSI-2` -> `NVCSI` -> `VI` -> `Memory Buffer` -> `V4L2` -> `Application`

VI transfiere los datos de imagen mediante mecanismos como DMA, evitando que la CPU tenga que mover los datos de la cámara píxel por píxel.

### 6.1 Fotograma y Buffer

Para la captura de vídeo, las aplicaciones normalmente no leen directamente la señal serie CSI. En su lugar, solicitan Buffers de imagen a través de V4L2, inician el Streaming y leen el Buffer correspondiente después de que se complete la captura.

El proceso de captura simplificado es el siguiente:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/v4l2_frame_capture.png"/></div>

Esta es también la razón por la que V4L2 utiliza mecanismos de Buffer como MMAP.

### 6.2 Experimento en dispositivo real 3: Capturar datos RAW

Primero, comprueba el formato de imagen actual del IMX219:

```text
v4l2-ctl -d /dev/video0 --get-fmt-video
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/get_fmt_video.png"/></div>

Ejecuta una prueba de captura RAW de 100 fotogramas:

```text
v4l2-ctl -d /dev/video0 \
  --stream-mmap \
  --stream-count=100 \
  --verbose
```

Si se pueden capturar fotogramas de forma continua, significa que en el modo actual, el Sensor, NVCSI, VI y la ruta de Buffer de V4L2 ya tienen una capacidad básica de captura de datos.

Luego guarda un fotograma RAW:

```text
v4l2-ctl -d /dev/video0 \
  --stream-mmap \
  --stream-count=1 \
  --stream-to=imx219.raw
```

Comprueba el tamaño del archivo:

```text
ls -lh imx219.raw
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/raw_file.png"/></div>

### 6.3 ¿Por qué RAW10 no ocupa necesariamente solo 10 bits?

En la cadena de datos de la cámara del Jetson, necesitamos distinguir el **formato de transmisión MIPI CSI-2** del **formato de datos que VI escribe en memoria**. El IMX219 transmite datos RAW10 sobre MIPI CSI-2, donde cada píxel válido contiene 10 bits de información. Pero bajo el formato de captura V4L2 actual, VI almacena cada píxel en un **contenedor de 16 bits (2 Bytes)**, con alineación por filas aplicada.

Por lo tanto, el tamaño real del Buffer no se puede calcular simplemente como 10 bit/Píxel.

Analicemos en base a la captura de registro anterior. La resolución actual es 3280 × 2464:

- **Calculado como empaquetado RAW10 compacto:** 3280 × 2464 × 10 / 8 = 10,102,400 Bytes, aproximadamente **9.63 MiB**.
- **Calculado como contenedor de 16 bits:** 3280 × 2464 × 2 = 16,163,840 Bytes, aproximadamente **15.42 MiB**.
- **Calculado a partir de los Bytes por línea reales:** 6592 × 2464 = 16,242,688 Bytes, aproximadamente **15.49 MiB**.

Cuando se capturaron correctamente 100 fotogramas, la tasa de fotogramas real fue de aproximadamente **21,19 FPS**, y cada búfer de fotograma utilizó 16.242.688 Bytes.

La imagen RAW de un solo fotograma guardada posteriormente fue de aproximadamente 16 MB, consistente con el tamaño del búfer de captura.

**Conclusión: los 10 bits en RAW10 describen la profundidad de bits de datos efectiva de cada píxel y no significan que la imagen solo ocupe 10 bit/Píxel en memoria.** Bajo la configuración actual de captura VI de Jetson, RAW10 se almacena en un contenedor de 16 bits y se ve afectado por la alineación de Bytes Por Línea, por lo que el uso real de memoria es mayor que el volumen de datos RAW10 compactamente empaquetado.

### 6.4 ¿Cómo mostrar datos RAW?

Después de capturar correctamente la imagen RAW a través de V4L2, obtuvimos el archivo `imx219.raw`. Pero los datos RAW Bayer no son una imagen de color RGB ordinaria y no pueden mostrarse correctamente con un visor de imágenes normal. Para convertirla en una imagen en color, primero necesitas leer los datos de píxeles de acuerdo con la disposición real en memoria y luego recuperar la imagen RGB mediante el algoritmo de **Demosaicing**.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/bayer_demosaic.png"/></div>

*Fuente de la imagen:* *https://jetsonhacks.com/2022/01/13/in-depth-cameras/*

Basándonos en la captura de pantalla anterior, podemos determinar las siguientes características de la imagen RAW actual:

- La resolución de la imagen es 3280 × 2464.
- La disposición Bayer es RGGB, con 10 bits de datos válidos por píxel.
- V4L2 almacena cada píxel en un contenedor de 16 bits.
- Cada fila ocupa en realidad 6592 Bytes, mientras que los datos de píxeles válidos solo ocupan 6560 Bytes.

Se puede determinar que cada fila tiene 32 Bytes adicionales de relleno (Padding). Al leer el archivo RAW, debes tener en cuenta el relleno de filas y no puedes simplemente remodelar todos los datos en una matriz bidimensional de 3280 × 2464.

A continuación se utiliza Python + OpenCV para la conversión:

```python
import cv2
import numpy as np

# IMX219 V4L2 capture configuration
WIDTH = 3280
HEIGHT = 2464
BYTES_PER_LINE = 6592

# 1. Read RAW data as 16-bit little-endian
raw = np.fromfile("imx219.raw", dtype="<u2")

expected = HEIGHT * BYTES_PER_LINE // 2
assert raw.size == expected, "RAW file size mismatch"

# 2. Restore row layout and remove padding
raw = raw.reshape(HEIGHT, BYTES_PER_LINE // 2)
raw = raw[:, :WIDTH]

# 3. Extract 10-bit values for preview
# Experimental decoding based on observed image structure
raw10 = raw >> 6

# 4. Normalize brightness for visualization
low, high = np.percentile(raw10, [1, 99.5])

if high <= low:
    raise ValueError("Invalid RAW intensity range")

normalized = np.clip(
    (raw10.astype(np.float32) - low) / (high - low),
    0, 1
)

# 5. Apply gamma correction
gamma = 0.65
raw8 = (np.power(normalized, gamma) * 255).astype(np.uint8)

# 6. Save grayscale preview
cv2.imwrite("imx219-gray.png", raw8)

# 7. Bayer demosaicing
# RGGB Bayer pattern
bgr = cv2.cvtColor(raw8, cv2.COLOR_BayerRG2BGR)

# 8. Save color image
cv2.imwrite("imx219-demosaic.png", bgr)

print("RAW conversion completed")
print("Output: imx219-gray.png")
print("Output: imx219-demosaic.png")
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/imx219_demosaic.png"/></div>

:::info
**La imagen convertida por OpenCV no es equivalente a la imagen procesada por el ISP de NVIDIA.** Debido a la falta de balance de blancos completo, corrección de color, reducción de ruido y otros procesamientos, la imagen final puede ser más oscura en brillo y con colores inexactos.
:::

---

## 7. ISP: ¿Cómo se convierten los datos RAW en una imagen en color?

El ISP (Image Signal Processor) es responsable de convertir la imagen en bruto del Sensor en una imagen adecuada para visualización, codificación o algoritmos posteriores. Para RAW Bayer, las funciones típicas de procesamiento de imagen incluyen:

| Function | Role |
|---|---|
| Black Level Correction | Corrección del nivel de negro |
| Demosaicing | Reconstrucción de color Bayer |
| White Balance | Balance de blancos |
| Color Correction | Corrección de color |
| Noise Reduction | Reducción de ruido de imagen |
| Tone Mapping | Procesamiento de brillo y rango dinámico |
| Sharpening | Enfoque de imagen |

Al mismo tiempo, el Jetson Camera Framework también puede coordinar el control 3A:

- AE: Exposición Automática
- AWB: Balance de Blancos Automático
- AF: Enfoque Automático

Ten en cuenta que 3A no pertenece todo al propio procesamiento de píxeles del ISP. Por ejemplo, AE necesita ajustar la exposición y la ganancia a través del control del Sensor, mientras que AF depende de que el módulo del sensor tenga un mecanismo de enfoque controlable.

### 7.1 ¿Por qué necesita ajuste (tuning) el ISP?

Incluso si dos cámaras utilizan el mismo Sensor, esto no significa que después del ISP vayan a producir exactamente la misma imagen. Esto se debe a que la calidad de imagen depende no solo del Sensor, sino también de factores como la lente, el filtro IR, los parámetros de calibración del Sensor y las condiciones reales de iluminación. Estas diferencias pueden hacer que las imágenes difieran en brillo, color, balance de blancos y rendimiento de ruido.

Por lo tanto, es necesario utilizar **ISP Tuning** para ajustar los parámetros de procesamiento de imagen relevantes para un Módulo de Cámara específico, como balance de blancos, corrección de color, reducción de ruido y enfoque, con el fin de obtener resultados de imagen más precisos y estables. En resumen, **el ISP es responsable de procesar las imágenes, mientras que el ISP Tuning decide cómo optimizar el efecto de procesamiento para diferentes cámaras.**

### 7.2 Experimento en dispositivo real 4: Captura de imágenes ISP a través de Argus

En los experimentos anteriores, obtuvimos los datos RAW10 del IMX219 a través de V4L2 y utilizamos OpenCV para completar el Demosaicing básico. A continuación, usamos el **NVIDIA Argus Camera Framework** para que la imagen pase por el ISP de Jetson y observamos la diferencia en la calidad de imagen entre los dos enfoques.

Este experimento utiliza el reComputer Classic J3010 + IMX219, conectándose al Jetson de forma remota mediante SSH para completar la captura de imágenes.

**paso 1. Comprobar el plugin de GStreamer:**

```text
gst-inspect-1.0 nvarguscamerasrc
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/gst_inspect.png"/></div>

Si la información del plugin se muestra con normalidad, significa que GStreamer puede encontrar el plugin.

**paso 2. Probar la captura de imagen a través de Argus**

En un entorno SSH, especialmente cuando X11 Forwarding está habilitado, variables de entorno como `DISPLAY` pueden afectar la inicialización de EGLStream de NVIDIA Argus. Si estás accediendo al dispositivo Jetson de forma remota, utiliza `env -u` para eliminar temporalmente las variables de entorno relevantes:

```text
env -u DISPLAY -u WAYLAND_DISPLAY -u LD_LIBRARY_PATH \
gst-launch-1.0 -e \
  nvarguscamerasrc sensor-id=0 num-buffers=100 ! \
  'video/x-raw(memory:NVMM),width=1920,height=1080,framerate=30/1,format=NV12' ! \
  fakesink
```

Donde:

- `nvarguscamerasrc`: obtiene imágenes de la cámara a través de NVIDIA Argus.
- `sensor-id=0`: selecciona el primer Sensor Argus disponible.
- `num-buffers=100`: captura 100 fotogramas.
- `memory:NVMM`: utiliza búferes multimedia de NVIDIA.
- `format=NV12`: especifica el formato de imagen de salida.
- `fakesink`: recibe y descarta la imagen sin mostrarla ni guardarla.

El uso de `env -u` aquí solo afecta al comando actual y no modifica permanentemente las variables de entorno del sistema.

Si el programa captura con normalidad y finaliza sin ningún error en el registro, significa que la cámara actual puede generar imágenes básicas a través de Argus.

**paso 3. Guardar la imagen en color procesada por el ISP**

Después de confirmar que la captura de Argus funciona con normalidad, ejecuta el siguiente comando para guardar una imagen JPEG:

```text
env -u DISPLAY -u WAYLAND_DISPLAY -u LD_LIBRARY_PATH \
gst-launch-1.0 -e \
  nvarguscamerasrc sensor-id=0 num-buffers=1 ! \
  'video/x-raw(memory:NVMM),width=1920,height=1080,framerate=30/1,format=NV12' ! \
  nvvidconv ! \
  'video/x-raw,format=I420' ! \
  jpegenc ! \
  filesink location=imx219-isp.jpg
```

En este Pipeline:

- **nvarguscamerasrc**: invoca la ruta de captura de cámara y procesamiento ISP a través de Argus.
- **nvvidconv**: convierte la imagen NVMM en un formato de memoria y de píxeles compatible con el codificador posterior.
- **jpegenc**: codifica la imagen como JPEG.
- **filesink**: guarda los datos JPEG en un archivo.

Después de guardarla, compruébala:

```text
ls -lh imx219-isp.jpg
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/isp_ls.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/imx219_isp.jpg"/></div>

En comparación con la imagen de Demosaic de OpenCV anterior, la imagen procesada por el ISP tiene una optimización más completa de color, brillo y ruido. La conclusión aquí es: **V4L2 se utiliza principalmente para obtener la imagen RAW del Sensor, mientras que Argus puede invocar el ISP de NVIDIA para generar imágenes en color con un procesamiento de imagen más completo.**

> Ten en cuenta que la imagen guardada todavía presenta problemas de desenfoque y franjas púrpuras, porque el enfoque de la lente y los parámetros del ISP aún no se han ajustado.

---

## 8. V4L2 y Argus: dos rutas de datos de cámara diferentes

A través de los experimentos anteriores, hemos utilizado dos formas diferentes de capturar imágenes. Una es V4L2 y la otra es Argus. Ambas pueden utilizar el hardware subyacente de la cámara de Jetson, pero las rutas de uso y los escenarios aplicables son diferentes.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/v4l2_vs_argus.png"/></div>

### 8.1 Captura RAW con V4L2

V4L2 puede obtener directamente los datos RAW que salen del Sensor Bayer sin pasar por el ISP de Jetson.

Este enfoque es adecuado para **desarrollo de controladores de Sensor, depuración de cámaras CSI, análisis de datos RAW y desarrollo de algoritmos de procesamiento de imagen personalizados**.

### 8.2 Captura ISP con Argus

Argus es un Camera Framework proporcionado por NVIDIA. Puede combinar el control del Sensor y el ISP para realizar demosaicing, balance de blancos, corrección de color, reducción de ruido y otros procesamientos sobre imágenes RAW, y generar formatos de imagen como NV12.

Este enfoque es más adecuado para **vista previa de cámara en tiempo real, captura de video y aplicaciones de visión que requieren buena calidad de imagen**.

### 8.3 Comparación

| Elemento | V4L2 RAW | Argus ISP |
|---|---|---|
| Salida típica | RAW Bayer | NV12 / YUV |
| Usa ISP | No requerido | Se puede usar |
| Control del sensor | Controles V4L2 | Argus Camera Core |
| Escenarios aplicables | Depuración de drivers, análisis RAW | Imágenes en color, aplicaciones de video |
| Herramientas comunes | v4l2-ctl | nvarguscamerasrc |
| Se requiere ajuste del ISP | No es necesario para la captura RAW | La calidad de imagen puede depender del Tuning |

Ten en cuenta que **V4L2 no se limita a emitir datos RAW**. "V4L2 RAW" aquí se refiere específicamente al escenario de capturar directamente los datos RAW del Sensor Bayer a través del Jetson VI.

### 8.4 ¿Por qué Argus falla mientras V4L2 funciona?

Incluso si V4L2 puede capturar imágenes RAW normalmente, eso no significa que Argus necesariamente funcionará.

Esto se debe a que Argus no solo depende del Sensor subyacente, NVCSI y VI, sino que también involucra Camera Core, Control del Sensor, configuración del ISP, gestión de buffers de NVIDIA y otros aspectos.

Por lo tanto, cuando V4L2 funciona pero Argus falla, puedes priorizar la comprobación de:

- **Configuración de Camera Core**: si el modo del Sensor y los parámetros relacionados son correctos.
- **Controles del Sensor**: si controles como exposición y ganancia funcionan con normalidad.
- **Servicio Argus**: si `nvargus-daemon` tiene alguna anomalía.
- **Entorno de ejecución**: si hay conflictos entre SSH X11 Forwarding, EGL y los entornos de bibliotecas dinámicas.

---

## 9. Device Tree: ¿Cómo sabe el Jetson dónde está conectada la cámara?

Desde la perspectiva del hardware, el Sensor se conecta al Jetson a través de la interfaz CSI. Pero simplemente conectar el cable no es suficiente para que la Cámara funcione automáticamente. El Jetson también necesita conocer la relación de conexión y el modo de funcionamiento específico del Sensor. Esta información suele ser proporcionada por el Device Tree y el correspondiente Driver del Sensor.

### 9.1 Device Tree de la cámara

Tomando como ejemplo el reComputer Classic J401 con un IMX219, Seeed Studio proporciona la configuración correspondiente del Device Tree en el repositorio [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra). Principalmente involucra dos archivos:

**① Archivo de configuración de la carrier board J401**
[recomputer-orin-j401.conf](https://github.com/Seeed-Studio/Linux_for_Tegra/blob/r36.4.3/recomputer-orin-j401.conf)

Este archivo especifica el Device Tree base utilizado por la J401 y hace referencia al Overlay de la Cámara IMX219:

**② Overlay de la Cámara IMX219**
[tegra234-p3767-camera-p3768-imx219-dual-seeed.dts](https://github.com/Seeed-Studio/Linux_for_Tegra/blob/r36.4.3/source/hardware/nvidia/t23x/nv-public/overlay/tegra234-p3767-camera-p3768-imx219-dual-seeed.dts)

Este archivo configura dos Cámaras IMX219 para la J401, definiendo información de conexión de hardware como el I2C MUX, GPIO e interfaz CSI, y hace referencia a la configuración base del Sensor IMX219.

Ten en cuenta que esto es solo parte de la configuración en el Overlay. El modo completo del Sensor también incluye parámetros como resolución, número de lanes CSI, profundidad de bits de píxel y relojes.

### 9.2 Sensor Mode: ¿Cómo transmite imágenes el IMX219?

El Sensor Mode en el Device Tree se utiliza para describir el método de trabajo específico de la cámara. En este experimento con dispositivo real J401, leímos los siguientes parámetros del `mode0` del IMX219 desde el Device Tree en tiempo de ejecución:

```text
mode0 {
    num_lanes = "2";
    tegra_sinterface = "serial_a";
    phy_mode = "DPHY";

    mode_type = "bayer";
    pixel_phase = "rggb";

    active_w = "3280";
    active_h = "2464";

    csi_pixel_bit_depth = "10";
    pix_clk_hz = "182400000";
};
```

*Los anteriores son los campos clave extraídos y organizados desde el Device Tree en tiempo de ejecución de la J401, no la configuración completa del Sensor Mode.*

### 9.3 Experimento con dispositivo real 5: Ver el Device Tree en uso

Lo que se guarda en GitHub es el código fuente del Device Tree, mientras que el Jetson en realidad utiliza el Device Tree después de que el Overlay ha sido cargado y aplicado durante el proceso de arranque. Podemos ver directamente la configuración actualmente efectiva a través de SSH.

Aquí buscamos directamente propiedades que contengan `imx219` en el Device Tree en tiempo de ejecución:

```text
sudo grep -rla 'imx219' /proc/device-tree 2>/dev/null
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/grep_imx219.png"/></div>

Lee los parámetros reales del Sensor Mode:

```text
CAM=/proc/device-tree/bus@0/cam_i2cmux/i2c@0/rbpcv2_imx219_a@10
ls "$CAM"

for key in \
  num_lanes \
  tegra_sinterface \
  phy_mode \
  mode_type \
  pixel_phase \
  active_w \
  active_h \
  csi_pixel_bit_depth \
  pix_clk_hz
do
  printf "%-25s : " "$key"
  tr -d '\0' < "$CAM/mode0/$key" 2>/dev/null || echo "Not found"
  echo
done
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/sensor_mode.png"/></div>

---

## Resumen

A través del análisis de la cadena de datos de la Cámara Jetson, podemos entender todo el proceso de captura de imagen como los siguientes eslabones: **el Sensor es responsable de generar los datos de imagen, MIPI CSI-2 es responsable de la transmisión, NVCSI es responsable de la recepción, VI es responsable de la captura y el ISP es responsable del procesamiento de imagen.**

A nivel de software, Jetson también proporciona diferentes formas de acceder a la cámara. Para la depuración de drivers y el análisis de datos RAW, puedes capturar datos RAW a través de V4L2; para aplicaciones que requieren procesamiento de color, autoexposición y vista previa en tiempo real, puedes obtener imágenes procesadas a través de Argus y el ISP.

**El verdadero valor de entender esta cadena de datos es poder localizar los problemas con mayor precisión.**

Por supuesto, el conocimiento involucrado en la Cámara Jetson va mucho más allá de esto. Este artículo se centra en cómo los datos de imagen entran en el Jetson, pero aún hay mucho que vale la pena discutir en profundidad sobre el formato de los propios datos RAW y los principios del procesamiento de imagen.

---

## Referencias

- https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/SD/CameraDevelopment.html
- https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/SD/Multimedia/AcceleratedGstreamer.html
- https://docs.nvidia.com/jetson/archives/r36.4/ApiReference/l4t_mm_10_argus_camera_recording.html
- https://github.com/Seeed-Studio/Linux_for_Tegra
- https://wiki.seeedstudio.com/es/J401_carrierboard_Hardware_Interfaces_Usage/
- https://wiki.seeedstudio.com/es/how_to_use_camera_imx219/

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
