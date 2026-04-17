---
description: reComputer AI R2000 es un potente ordenador Edge AI basado en la Raspberry Pi 5. Con un procesador Arm Cortex-A76 de cuatro núcleos, 8GB de RAM, compatibilidad con M.2 SSD y un módulo de aceleración de IA Hailo-8 que proporciona hasta 26 TOPS, permite inferencias de IA en tiempo real, con baja latencia y alta eficiencia. Es la elección perfecta para una amplia gama de aplicaciones de IA, incluyendo analítica de vídeo con IA, visión artificial e informática inteligente en el edge.
title: Primeros pasos con la Serie reComputer AI R2000
keywords:
  - Raspberry pi
  - Ordenador Edge AI
  - reComputer R2000
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /r2000_series_getting_start
sku: 114993560, 114993627
last_update:
  date: 1/09/2025
  author: Jiahao Li
createdAt: '2025-01-09'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/r2000_series_getting_start/
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

La serie reComputer AI R2000 es un potente ordenador Edge AI basado en la Raspberry Pi 5. Con un procesador Arm Cortex-A76 de cuatro núcleos, 8GB de RAM, compatibilidad con M.2 SSD y un módulo de aceleración de IA Hailo-8 que proporciona hasta 26 TOPS, permite inferencias de IA en tiempo real, con baja latencia y alta eficiencia. Es la elección perfecta para una amplia gama de aplicaciones de IA, incluyendo analítica de vídeo con IA, visión artificial e informática inteligente en el edge.

## Características

- **Potentes capacidades de refrigeración**: El diseño compacto y la arquitectura térmica optimizada lo hacen muy adecuado para su despliegue en entornos con recursos limitados, proporcionando un excelente rendimiento de refrigeración.

- **Potente rendimiento**: Impulsado por Raspberry Pi 5 con CPU Cortex-A76 de cuatro núcleos y hasta 8GB de RAM.

- **26 Teraoperaciones por segundo**: Impulsado por el acelerador de IA Hailo que ofrece una potencia de cómputo integrada de hasta 26 TOPS.
Interfaces extensas: 2x HDMI 4Kp60, 1x puerto Ethernet, 2x USB 3.0, 2x USB 2.0.

- **Conectividad inalámbrica**: Wi-Fi de doble banda y Bluetooth 5.0/BLE.
Opciones de almacenamiento flexibles: La ranura M.2 dual PCIe2.0 admite tanto acelerador de IA como almacenamiento SSD.

## Especificaciones

| **Parámetros**        | **Descripción**                                                          |
|-----------------------|--------------------------------------------------------------------------|
| **Especificación de hardware**      |                                                                          |
| **CPU**                | Raspberry Pi 5, Arm Cortex-A76 de 64 bits y cuatro núcleos a 2,4GHz                    |
| **GPU**                | Raspberry Pi 5, VideoCore VII                                             |
| **Procesador de IA**       | Módulo de aceleración Hailo-8 M.2, 26 teraoperaciones por segundo           |
| **RAM**                | 8GB SDRAM                                                                |
| **Sistema operativo**   | Raspberry Pi OS, Ubuntu                                                  |
| **Especificación del sistema**        |                                                                          |
| **Fuente de alimentación**       | Alimentación DC de 5V/5A mediante USB-C, compatible con Power Delivery                       |
| **Decodificador de vídeo**      | Decodificador HEVC 4Kp60                                                       |
| **Wi-Fi**              | Wi-Fi® 802.11ac de doble banda                                                |
| **Bluetooth**          | Bluetooth 5.0/ BLE                                                       |
| **Botón de encendido**       | Incluye encendido/apagado                                                          |
| **Interfaz**          |                                                                          |
| **Almacenamiento**            | 1 x ranura para tarjeta microSD, con compatibilidad con el modo de alta velocidad SDR104           |
| **Ranura M.2**           | 2 x ranura M.2, compatible con M.2 NVMe SSD/módulo de aceleración Hailo M.2        |
| **Puertos USB**          | 2 × puertos USB 3.0                                                        |
|                       | 2 × puertos USB 2.0                                                        |
| **Ethernet**           | 1 x 10/100/1000 Mbps                                                     |
| **Cámara/Pantalla**     | 2 × transceptores MIPI de cámara/pantalla de 4 líneas                               |
| **Salida de pantalla**     | 2 x puertos micro HDMI (4Kp60)                                             |
| **Condiciones ambientales** |                                                                          |
| **Grado de protección** | IP40                                                                     |
| **Temperatura de funcionamiento** | 0-45°C                                                                  |
| **Otros**             |                                                                          |
| **Garantía**           | 1 año                                                                   |
| **Vida útil de producción**| Hasta al menos enero de 2036                                              |
| **Certificación**      | CE, FCC, Telec, RoHS, REACH                                              |

## Introducción a Hailo

### Introducción de hardware

[Hailo](https://hailo.ai/) ofrece procesadores de IA de vanguardia diseñados específicamente para aplicaciones de deep learning de alto rendimiento en dispositivos edge. Las soluciones de la empresa se centran en habilitar la próxima era de IA generativa en el edge, junto con percepción y mejora de vídeo, impulsadas por avanzados aceleradores de IA y procesadores de visión. Y el reComputer_R2000, equipado con el acelerador NPU Hailo-8 que proporciona 26 TOPS de rendimiento de IA, es capaz de alcanzar más de 200 FPS con YOLOv8s.

### Introducción de software

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

El Hailo AI Software Suite proporciona potentes herramientas para ejecutar modelos de IA de forma eficiente en aceleradores de hardware. Está diseñado para integrarse perfectamente con los frameworks de deep learning existentes, ofreciendo flujos de trabajo fluidos para los desarrolladores. El proceso implica generar un HEF (Hailo Executable Binary File) a partir de un archivo ONNX en el entorno de construcción de modelos. Una vez creado, el archivo HEF se transfiere a la máquina de inferencia (entorno de ejecución), donde se utiliza para ejecutar la inferencia con la API HailoRT. El script proporcionado facilita la conversión de un archivo ONNX en un archivo HEF dentro del entorno de construcción de modelos.

> **Nota:**
> **Si quieres obtener más información sobre ejemplos de uso de la NPU Hailo, haz clic en este [enlace](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero).**

## Descripción general del hardware

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image3_1.jpeg)
![image2](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image4_1.jpeg)

## Grabar el sistema operativo

*Necesitas una tarjeta SD y un lector de tarjetas. Inserta la tarjeta SD en el lector de tarjetas y, a continuación, conecta la interfaz USB del lector de tarjetas al puerto USB de tu máquina host.*

### Para ordenador host con Windows

- **Paso 1.** Haz clic **[aquí](https://downloads.raspberrypi.com/imager/imager_2.0.7.exe)** para descargar directamente la versión para Windows de Raspberry Pi Imager 2.0.7 (utilizada en el siguiente procedimiento), o visita el **[sitio web oficial](https://www.raspberrypi.com/software/)** para seleccionar la versión adecuada para tu sistema.


- **Paso 2.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_1.png" alt="pir" width="600" height="auto"/></p>


- **Paso 3.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_2.png" alt="pir" width="600" height="auto"/></p>      

**NOTA1:** Por ahora recomendamos grabar la imagen (64-bit Raspberry Pi OS Debian 12 Bookworm)[https://downloads.raspberrypi.com/raspios_oldstable_full_arm64/images/raspios_oldstable_full_arm64-2025-10-02/2025-10-01-raspios-bookworm-arm64-full.img.xz]. El recién lanzado Raspberry Pi OS basado en Debian 13 “Trixie” aún no ha actualizado el paquete hailo-all, por lo que Bookworm te ofrecerá compatibilidad completa con Hailo desde el primer momento.
Descargar [link](https://www.raspberrypi.com/software/operating-systems/).

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-Industrial/homepage/OS.png" alt="pir" width="600" height="auto"/></p>

Luego escríbela en tu tarjeta SD usando el imager con la opción Use custom.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_3.png" alt="pir" width="600" height="auto"/></p>

Si aún así quieres probar la última imagen, **tendrás que instalar el software Hailo manualmente en lugar de usar la ruta de un solo comando hailo-all;** sigue este [enlace](https://wiki.seeedstudio.com/es/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection/#instalar-software-hailo).

**NOTA2:** Puedes seleccionar otros sistemas operativos como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntun para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 5.** Haz clic en **STORAGE** y selecciona el dispositivo de almacenamiento de destino preparado para grabar el sistema operativo.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_4.png" alt="pir" width="600" height="auto"/></p>

- **Paso 6.** Finalmente, haz clic en **WRITE**

Espera unos minutos hasta que el proceso de grabación se complete.

### Para ordenador host con MAC

:::caution
**Debes instalar [homebrew](https://brew.sh/) antes de continuar con los siguientes pasos.**
Por favor, abre una terminal y escribe ```brew -V``` para comprobar si has configurado correctamente el entorno de homebrew; deberías ver la versión del entorno de homebrew que has instalado.
:::

- **Paso 1.** Descarga e instala la aplicación **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 2.** Abre la aplicación **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 3.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un hostname, habilitar SSH, establecer una contraseña, configurar wifi, establecer ajustes locales** y más

- **Paso 4.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otros sistemas operativos como **64-bit Ubuntu** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 5.** Haz clic en **CHOOSE STORAGE**

- **Paso 6.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

### Para ordenador host Linux

- **Paso 1.** Descarga snap

```sh
sudo apt install snap
```

- **Paso 2.** Descarga **rpi-imager**

```sh
snap install rpi-imager
```

- **Paso 3.** Abre el software Raspberry Pi Imager

```sh
rpi-imager
```

El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 4.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un hostname, habilitar SSH, establecer una contraseña, configurar wifi, establecer ajustes locales** y más

- **Paso 5.** Haz clic en **CHOOSE OS** y selecciona tu sistema operativo preferido

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**NOTA:** Puedes seleccionar otros sistemas operativos como **64-bit Ubuntu** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 6.** Haz clic en **CHOOSE STORAGE** y selecciona la unidad eMMC conectada

- **Paso 7.** Finalmente, haz clic en **NEXT** y **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Espera unos minutos hasta que el proceso de flasheo se complete.
El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

## Arrancar desde NVME

### Actualizar EEPROM

*Este método funciona si tienes una tarjeta SD y has arrancado el dispositivo correctamente. Asegúrate de que tu sistema sea la última versión del sistema Raspberry Pi (Bookworm o posterior) y que el firmware de tu RPi 5 esté actualizado a 2023-12-06 (6 de diciembre) o más reciente, de lo contrario es posible que no reconozca las configuraciones relacionadas con NVME.*

**Paso 1**: Asegúrate de que tu sistema Raspberry Pi esté actualizado (Bookworm o posterior), introduce el siguiente comando para actualizar el firmware de la RPi 5:

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

Desplázate hacia abajo hasta `Advanced Options` y presiona Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

Desplázate hacia abajo hasta `Bootloader Version` y presiona Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

Y finalmente elige `Latest`, y presiona Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

Selecciona `No` aquí: quieres el bootloader `latest`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

Y sal de la herramienta seleccionando `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

Si se te pide reiniciar, selecciona `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**：Haz clic en **Applications** =>**Accessories** =>**SD Card Copier** en la pantalla principal, ejecuta el programa **SD Card Copier** y copia el sistema operativo al SSD NVME como se muestra en la figura siguiente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Configurar la Raspberry Pi para arrancar desde el SSD NVMe

Si tienes fácil acceso a la ranura de tu tarjeta SD, puedes apagar tu Pi, extraer la tarjeta SD y (si todo funciona como se espera) debería arrancar automáticamente desde tu unidad NVMe la próxima vez que la enciendas. Sin embargo, si quieres dejar la tarjeta SD donde está y aun así arrancar desde NVMe, tendrás que cambiar el orden de arranque.

**Paso 1**: Introduce el siguiente comando:

```shell
  sudo raspi-config
```

Desplázate hacia abajo hasta `Advanced Options` y presiona Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Desplázate hacia abajo hasta `Boot Order` y presiona Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**Paso 3**: Elige `NVMe/USB Boot` y presiona Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

La configuración será confirmada. Presiona Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**Paso 4**: Vuelve a la primera pantalla seleccionando `Back` o presionando la tecla Esc. Luego navega hasta Finish usando la tecla de cursor derecha.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

Se te preguntará si quieres reiniciar ahora. Haz clic en `Yes`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## Flashear Ubuntu en NVME

### Primero: Actualizar EEPROM con tarjeta SD

Consulta este [link](https://wiki.seeedstudio.com/es/r2000_series_getting_start/#update-eeprom).

Para establecer el orden de arranque de NVMe como la prioridad más alta, utiliza el siguiente comando:

```
sudo rpi-eeprom-config --edit
```

Y luego cambia rpi-eeprom-config como se muestra a continuación:

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

Usa `Ctrl+X` e introduce `y` para guardar el resultado. Y el resultado es el siguiente:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>

### Segundo: Grabar Ubuntu en el NVMe

Abre Raspberry Pi Imager:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

Elige el sistema operativo Ubuntu:
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

Finalmente, haz clic en `Next` y espera a que el proceso de flasheo se complete.

### Tercero: Reemplazar el archivo del sistema operativo

Instala `pcie-fix.dtbo` con este [link](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo)

Copia pcie-fix.dtbo al archivo /overlays como se muestra a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="700" height="auto" /></div>

Modifica el `config.txt`, añade `dtoverlay=pcie-fix` al final del archivo como se muestra a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="700" height="auto" /></div>

Y luego usa `Ctrl+X` e introduce `y` para guardar este archivo.

## Consumo de energía y temperatura

:warning: **Nota:** El estado de espera se probó bajo las siguientes condiciones: la interfaz gráfica estaba deshabilitada, Bluetooth estaba apagado y Wi-Fi estaba deshabilitado. El comando se muestra a continuación:

```
sudo ifconfig wlan0 down
sudo systemctl stop bluetooth
sudo systemctl stop lightdm
```

| **Condición**        | **Consumo de energía** | **Temperatura** |
|----------------------|----------------------|----------------------|
|**Standby**|5.9w   |   cpu:46°C|
|**Operación normal**|6.3w|cpu:53°C|
|**Carga máxima**|16.2w|cpu:75°C hailo8:81°C|

## Aplicación

### Frigate

Frigate es un NVR (Network Video Recorder) de código abierto diseñado para la detección de objetos en tiempo real mediante IA. Se integra con cámaras existentes y utiliza modelos de aprendizaje automático, como TensorFlow y Coral, para realizar detección de objetos en flujos de vídeo. Frigate está optimizado para el procesamiento de vídeo de baja latencia y alto rendimiento, ofreciendo funciones como detección de movimiento, transmisiones de vídeo en vivo y alertas automatizadas.

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="Cost-Effective AI Surveillance: Frigate on Raspberry Pi 5 with Hailo8 on PCIe3.0 to Dual M.2 hat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **Nota:**
> **Si deseas obtener más información sobre este proyecto, consulta este [enlace](https://wiki.seeedstudio.com/es/frigate_nvr_with_raspberrypi_5/).**

### YOLO

La serie de modelos YOLO (You Only Look Once) es una familia de modelos de detección de objetos en tiempo real diseñados para ofrecer velocidad y precisión. A diferencia de los métodos tradicionales de detección de objetos que realizan la propuesta de regiones y la clasificación por separado, YOLO realiza ambas tareas en una sola pasada hacia adelante de la red neuronal, lo que la hace mucho más rápida. Los modelos YOLO dividen la imagen en una cuadrícula y predicen cuadros delimitadores y probabilidades de clase para cada celda de la cuadrícula. A lo largo de los años, YOLO ha evolucionado a través de varias versiones, con mejoras en precisión, velocidad y capacidad para detectar objetos más pequeños. YOLOv4, YOLOv5 y los recientes modelos YOLOv7 y YOLOv8 se utilizan ampliamente en aplicaciones como vigilancia, vehículos autónomos y robótica.

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **Nota:**
> **Si deseas obtener más información sobre este proyecto, consulta este [enlace](https://wiki.seeedstudio.com/es/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)**.

### Clip

CLIP (Contrastive Language-Image Pretraining) es un modelo de aprendizaje automático desarrollado por OpenAI que puede comprender imágenes y texto de forma conjunta. Está entrenado para asociar imágenes con descripciones textuales correspondientes, lo que le permite realizar tareas que implican ambas modalidades. CLIP es capaz de aprendizaje de cero disparos (zero-shot), lo que significa que puede reconocer objetos y conceptos en imágenes sin necesidad de haber sido entrenado específicamente en esas categorías. Ha demostrado un rendimiento sólido en una variedad de tareas, como clasificación de imágenes, detección de objetos e incluso generación de descripciones textuales de imágenes.

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **Nota:**
> **Si deseas obtener más información sobre este proyecto, consulta este [enlace](https://wiki.seeedstudio.com/es/clip_application_on_rpi5_with_ai_kit/).**

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
