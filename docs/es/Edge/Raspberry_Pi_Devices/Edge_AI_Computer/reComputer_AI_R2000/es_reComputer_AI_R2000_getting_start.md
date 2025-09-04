---
description: reComputer AI R2000 es una potente Computadora de IA de Borde basada en Raspberry Pi 5. Con procesador quad-core Arm Cortex-A76, 8GB de RAM, soporte para M.2 SSD, y un módulo de aceleración de IA Hailo-8 que proporciona hasta 26 TOPS, habilitando inferencia de IA en tiempo real, de baja latencia y alta eficiencia. Es la elección perfecta para una amplia gama de aplicaciones de IA, incluyendo análisis de video con IA, visión artificial y computación inteligente de borde.
title: Comenzando con la Serie reComputer AI R2000
keywords:
- Raspberry pi
- Edge AI Computer
- reComputer R2000
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /es/r2000_series_getting_start
last_update:
  date: 1/09/2025
  author: Jiahao Li
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

La serie reComputer AI R2000 es una potente Computadora de IA de Borde basada en Raspberry Pi 5. Con procesador quad-core Arm Cortex-A76, 8GB de RAM, soporte para M.2 SSD, y un módulo de aceleración de IA Hailo-8 que proporciona hasta 26 TOPS, habilitando inferencia de IA en tiempo real, de baja latencia y alta eficiencia. Es la elección perfecta para una amplia gama de aplicaciones de IA, incluyendo análisis de video con IA, visión artificial y computación inteligente de borde.

## Características

- **Potentes Capacidades de Refrigeración**: El diseño compacto y la arquitectura térmica optimizada lo hacen altamente adecuado para despliegue en entornos con recursos limitados, proporcionando excelente rendimiento de refrigeración.

- **Rendimiento Potente**: Alimentado por Raspberry Pi 5 con CPU quad-core Cortex-A76, hasta 8GB de RAM.

- **26 Tera-Operaciones Por Segundo**: Alimentado por el Acelerador de IA Hailo que ofrece Potencia de Cómputo Integrada de hasta 26 Tops.
Interfaces Extensas: 2x HDMI 4Kp60, 1x Puerto Ethernet, 2x USB 3.0, 2x USB 2.0.

- **Conectividad Inalámbrica**: Wi-Fi de banda dual y Bluetooth 5.0/BLE.
Opciones de Almacenamiento Flexibles: El Slot dual M.2 PCIe2.0 soporta tanto acelerador de IA como almacenamiento SSD.

## Especificaciones

| **Parámetros**        | **Descripción**                                                          |
|-----------------------|--------------------------------------------------------------------------|
| **Especificación de Hardware**      |                                                                          |
| **CPU**                | Raspberry Pi 5, 2.4GHz quad-core 64-bit Arm Cortex-A76                    |
| **GPU**                | Raspberry Pi 5, VideoCore VII                                             |
| **Procesador de IA**       | Módulo de Aceleración M.2 Hailo-8, 26 Tera-Operaciones Por Segundo           |
| **RAM**                | 8GB SDRAM                                                                |
| **Sistema Operativo**   | Raspberry Pi OS, Ubuntu                                                  |
| **Especificación del Sistema**        |                                                                          |
| **Fuente de Alimentación**       | Alimentación DC 5V/5A vía USB-C, Power Delivery soportado                       |
| **Decodificador de Video**      | Decodificador HEVC 4Kp60                                                       |
| **Wi-Fi**              | Wi-Fi® 802.11ac de banda dual                                                |
| **Bluetooth**          | Bluetooth 5.0/ BLE                                                       |
| **Botón de Encendido**       | Encendido/Apagado incluido                                                          |
| **Interfaz**          |                                                                          |
| **Almacenamiento**            | 1 x ranura para tarjeta microSD, con soporte para modo SDR104 de alta velocidad           |
| **Slot M.2**           | 2 x Slot M.2, soporta M.2 NVMe SSD/Módulo de Aceleración M.2 Hailo        |
| **Puertos USB**          | 2 × puertos USB 3.0                                                        |
|                       | 2 × puertos USB 2.0                                                        |
| **Ethernet**           | 1 x 10/100/1000 Mbps                                                     |
| **Cámara/Pantalla**     | 2 × transceptores MIPI de 4 carriles para cámara/pantalla                               |
| **Salida de Pantalla**     | 2 x puertos micro HDMI (4Kp60)                                             |
| **Condiciones Ambientales** |                                                                          |
| **Protección de Ingreso** | IP40                                                                     |
| **Temperatura de Operación** | 0-45°C                                                                  |
| **Otros**             |                                                                          |
| **Garantía**           | 1 Año                                                                   |
| **Vida Útil de Producción**| Hasta al menos enero de 2036                                              |
| **Certificación**      | CE, FCC, Telec, RoHS, REACH                                              |

## Introducción a Hailo

### Introducción al hardware

[Hailo](https://hailo.ai/) ofrece procesadores de IA de vanguardia especialmente diseñados para aplicaciones de aprendizaje profundo de alto rendimiento en dispositivos edge. Las soluciones de la empresa se enfocan en habilitar la próxima era de IA generativa en el edge, junto con percepción y mejora de video, impulsadas por aceleradores de IA avanzados y procesadores de visión. Y el reComputer_R2000, equipado con el acelerador NPU Hailo-8 que proporciona 26 TOPs de rendimiento de IA, es capaz de lograr más de 200 FPS con YOLOv8s.

### Introducción al software

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

La Suite de Software de IA Hailo proporciona herramientas poderosas para ejecutar modelos de IA de manera eficiente en aceleradores de hardware. Está diseñada para integrarse sin problemas con marcos de aprendizaje profundo existentes, ofreciendo flujos de trabajo fluidos para desarrolladores. El proceso involucra generar un HEF (Archivo Binario Ejecutable Hailo) desde un archivo ONNX en el Entorno de Construcción de Modelos. Una vez creado, el archivo HEF se transfiere a la máquina de inferencia (Entorno de Tiempo de Ejecución), donde se usa para ejecutar inferencia con la API HailoRT. El script proporcionado facilita la conversión de un archivo ONNX en un archivo HEF dentro del Entorno de Construcción de Modelos.

> **Nota:**
> **Si quieres aprender más sobre ejemplos de uso de Hailo NPU, por favor haz clic en este [enlace](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero).**

## Descripción general del hardware

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image3_1.jpeg)
![image2](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image4_1.jpeg)

## Flashear SO

*Necesitas una tarjeta SD y un lector de tarjetas. Inserta la tarjeta SD en el lector de tarjetas, y luego conecta la interfaz USB del lector de tarjetas al puerto USB de tu máquina host.*

### Para computadora host Windows

- **Paso 1.** Descarga el software **Raspberry Pi Imager** desde **[aquí](https://www.raspberrypi.org/software/)**

- **Paso 2.** Abre el software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 3.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

- **Paso 4.** Haz clic en **CHOOSE OS** y selecciona tu SO preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otro SO como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntu para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 5.** Haz clic en **CHOOSE STORAGE**

- **Paso 6.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de flasheo esté completo.

### Para computadora host MAC

:::caution
**Necesitas instalar [homebrew](https://brew.sh/) antes de proceder con los siguientes pasos.**
Por favor abre una terminal y escribe ```brew -V``` para verificar si has configurado el entorno homebrew correcto, deberías ver la versión del entorno homebrew que has instalado.
:::

- **Paso 1.** Descarga e Instala la Aplicación **Raspberry Pi Imager** visitando [este enlace](https://www.raspberrypi.org/software/)

- **Paso 2.** Abre la Aplicación **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Paso 3.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones locales** y más

- **Paso 4.** Haz clic en **CHOOSE OS** y selecciona tu SO preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Puedes seleccionar otro SO como **Ubuntu de 64 bits** navegando a **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntu para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 5.** Haz clic en **CHOOSE STORAGE**

- **Paso 6.** Finalmente, haz clic en **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

### Para computadora host Linux

- **Paso 1.** Descarga snap

```sh
sudo apt install snap
```

- **Paso 2.** Descargar **rpi-imager**

```sh
snap install rpi-imager
```

- **Paso 3.** Abrir el software Raspberry Pi Imager

```sh
rpi-imager
```

El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 4.** Presiona **CTRL + SHIFT + X** en el teclado para abrir la ventana de **Opciones avanzadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aquí puedes **establecer un nombre de host, habilitar SSH, establecer una contraseña, configurar wifi, establecer configuraciones locales** y más

- **Paso 5.** Haz clic en **ELEGIR SO** y selecciona tu SO preferido

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**NOTA:** Puedes seleccionar otro SO como **Ubuntu de 64 bits** navegando a **Otros SO de propósito general**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

O puedes usar este enlace para descargar el archivo de imagen:

[Ubuntu para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Paso 6.** Haz clic en **ELEGIR ALMACENAMIENTO** y selecciona la unidad eMMC conectada

- **Paso 7.** Finalmente, haz clic en **SIGUIENTE** y **SÍ**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Por favor espera unos minutos hasta que el proceso de grabación esté completo.
El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

## Arrancar desde NVME

### Actualizar EEPROM

*Este método funciona si tienes una tarjeta SD y has arrancado el dispositivo exitosamente. Por favor asegúrate de que tu sistema sea el último sistema Raspberry Pi (Bookworm o posterior) y que tu firmware de RPi 5 esté actualizado al 2023-12-06 (6 de diciembre) o más reciente, de lo contrario puede que no reconozca las configuraciones relacionadas con NVME.*

**Paso 1**: Asegúrate de que tu sistema Raspberry Pi esté actualizado (Bookworm o posterior), ingresa el siguiente comando para actualizar el firmware de RPi 5:

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

Selecciona `No` aquí - quieres el bootloader `latest`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

Y sal de la herramienta seleccionando `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

Si se te pide reiniciar, selecciona `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**：Haz clic en **Applications** =>**Accessories** =>**SD Card Copier** en la pantalla principal, ejecuta el programa **SD Card Copier**, y copia el SO al SSD NVME como se muestra en la figura a continuación.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Configurar la Raspberry Pi para arrancar desde el SSD NVMe

Si tienes fácil acceso a tu ranura de tarjeta SD podrías apagar tu Pi, sacar la tarjeta SD y (si todo funciona como se espera) debería arrancar automágicamente desde tu unidad NVMe la próxima vez que la inicies. Sin embargo, si quieres dejar la tarjeta SD donde está y aún así arrancar desde NVMe, necesitarás cambiar el orden de arranque.

**Paso 1**:Ingresa el siguiente comando:

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

**Paso 4**: Regresa a la primera pantalla seleccionando `Back` o presionando la tecla Esc. Luego navega a Finish usando la tecla de cursor derecha.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

Se te preguntará si quieres reiniciar ahora. Haz clic en `Yes`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## Flashear ubuntu al NVME

### Primero: Actualizar EEPROM con tarjeta SD

Por favor consulta este [enlace](https://wiki.seeedstudio.com/es/r2000_series_getting_start/#update-eeprom).

Para establecer el orden de arranque NVMe como la máxima prioridad, usa el siguiente comando:

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

Usa `Ctrl+X` e ingresa `y` para almacenar el resultado. Y el resultado es el siguiente:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>

### Segundo: Grabar Ubuntu en el NVMe

Abre Raspberry Pi Imager:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

Elige el SO Ubuntu:
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

Finalmente, haz clic en `Next` y espera a que se complete el proceso de grabación.

### Tercero: Reemplazar el archivo del SO

Instala `pcie-fix.dtbo` con este [enlace](https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo)

Copia pcie-fix.dtbo al archivo /overlays como se muestra a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file1.png" alt="pir" width="700" height="auto" /></div>

Modifica el `config.txt`, añade `dtoverlay=pcie-fix` al final del archivo como se muestra a continuación:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/replace_file2.png" alt="pir" width="700" height="auto" /></div>

Y luego usa `Ctrl+X` e ingresa `y` para almacenar este archivo.

## Consumo de energía y temperatura

:warning: **Nota:** El estado de espera se probó bajo las siguientes condiciones: la interfaz gráfica estaba deshabilitada, el Bluetooth estaba apagado y el Wi-Fi estaba deshabilitado. El comando se muestra a continuación:

```
sudo ifconfig wlan0 down
sudo systemctl stop bluetooth
sudo systemctl stop lightdm
```

| **Condición**        | **Consumo de energía** | **Temperatura** |
|----------------------|----------------------|----------------------|
|**Standby**|5.9w   |   cpu:46°C|
|**Operación Normal**|6.3w|cpu:53°C|
|**Carga Máxima**|16.2w|cpu:75°C hailo8:81°C|

## Aplicación

### Frigate

Frigate es un NVR (Network Video Recorder) de código abierto diseñado para detección de objetos en tiempo real usando IA. Se integra con cámaras existentes y utiliza modelos de aprendizaje automático, como TensorFlow y Coral, para realizar detección de objetos en transmisiones de video. Frigate está optimizado para procesamiento de video de baja latencia y alto rendimiento, ofreciendo características como detección de movimiento, transmisiones de video en vivo y alertas automatizadas.

<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="Cost-Effective AI Surveillance: Frigate on Raspberry Pi 5 with Hailo8 on PCIe3.0 to Dual M.2 hat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **Nota:**
> **Si quieres aprender más sobre este proyecto, por favor consulta este [enlace](https://wiki.seeedstudio.com/es/frigate_nvr_with_raspberrypi_5/).**

### YOLO

La serie de modelos YOLO (You Only Look Once) es una familia de modelos de detección de objetos en tiempo real diseñados para velocidad y precisión. A diferencia de los métodos tradicionales de detección de objetos que realizan propuesta de región y clasificación por separado, YOLO realiza ambas tareas en un solo paso hacia adelante de la red neuronal, haciéndolo mucho más rápido. Los modelos YOLO dividen la imagen en una cuadrícula y predicen cajas delimitadoras y probabilidades de clase para cada celda de la cuadrícula. A lo largo de los años, YOLO ha evolucionado a través de varias versiones, con mejoras en precisión, velocidad y la capacidad de detectar objetos más pequeños. Los modelos YOLOv4, YOLOv5, y los recientes YOLOv7 y YOLOv8 son ampliamente utilizados para aplicaciones como vigilancia, vehículos autónomos y robótica.

<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **Nota:**
> **Si quieres aprender más sobre este proyecto, por favor consulta este [enlace](https://wiki.seeedstudio.com/es/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)**.

### Clip

CLIP (Contrastive Language-Image Pretraining) es un modelo de aprendizaje automático desarrollado por OpenAI que puede entender imágenes y texto juntos. Está entrenado para asociar imágenes con descripciones textuales correspondientes, permitiéndole realizar tareas que involucran ambas modalidades. CLIP es capaz de aprendizaje de cero disparos, lo que significa que puede reconocer objetos y conceptos en imágenes sin necesidad de ser específicamente entrenado en esas categorías. Ha mostrado un rendimiento sólido en una variedad de tareas, como clasificación de imágenes, detección de objetos, e incluso generar descripciones textuales de imágenes.

<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **Nota:**
> **Si quieres aprender más sobre este proyecto, por favor consulta este [enlace](https://wiki.seeedstudio.com/es/clip_application_on_rpi5_with_ai_kit/).**

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
