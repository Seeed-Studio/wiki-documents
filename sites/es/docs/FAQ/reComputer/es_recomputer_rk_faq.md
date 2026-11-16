---
title: Preguntas frecuentes sobre reComputer RK
description: Preguntas frecuentes sobre compatibilidad de hardware, configuración del sistema operativo, conectividad e inferencia de IA en la serie reComputer RK.
slug: /recomputer_rk_faq
last_update:
  date: 11/06/2026
  author: doublelf
keywords:
  - reComputer RK FAQ
  - reComputer RK troubleshooting
  - reComputer RK3588
  - reComputer RK3576
  - reComputer RK NPU
  - Rockchip RKNN
---

<div class="recomputer-faq-page">

# Preguntas frecuentes sobre reComputer RK

Esta página contiene respuestas verificadas para el reComputer RK. Cada respuesta indica la variante de producto y el modo de firmware al que se aplica, junto con la fecha en que se verificó por última vez frente a las fuentes oficiales actuales.

## Antes de comenzar

- Confirma la variante exacta del producto y el SoC en el que se basa (RK3588 o RK3576).
- Comprueba la versión actual del firmware antes de aplicar pasos específicos de versión.
- Las respuestas de esta página se verificaron por última vez el 2026-11-01; vuelve a comprobar las fuentes oficiales enlazadas si la estás leyendo más tarde.

<!-- RECOMPUTER_FAQ_AUTO_START -->
## Documentación y uso {#documentation-and-usage}

### ¿Dónde puedo encontrar los tutoriales del reComputer RK? {#rk-tutorials-and-images}

**Aplica a:** Toda la serie reComputer RK3576 y RK3588, para usuarios que necesitan los tutoriales oficiales, las imágenes y el flujo de instalación

**Última verificación:** 2026-11-01

Ubicación del wiki: https://sensecraft.seeed.cc/ai-lab/en  
  Búsqueda de imágenes: https://armbian.com/boards

1. El wiki de la serie reComputer RK se ha trasladado a la plataforma reComputer AI Lab, donde puedes encontrar los tutoriales del producto en Tutorials: https://sensecraft.seeed.cc/ai-lab/en; 

    <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_show_tutorials.jpg' />  
    Además de eso, la plataforma también ofrece páginas como Models y Projects, donde puedes ejecutar un modelo o un caso con un solo comando de Docker para obtener una idea más rápida del rendimiento del dispositivo. 

    <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_show_model.jpg' />  <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_show_project.jpg' />  

2. Hemos subido las imágenes de los productos RK relacionados al repositorio oficial de Armbian, donde puedes buscarlas tú mismo: https://imager.armbian.com/; 

    También proporcionamos un wiki sobre cómo flashear las imágenes: https://sensecraft.seeed.cc/ai-lab/en/tutorials/rk/edge-ai-computer/rk3576/getting-start/recomputer-rk3576-flash-os

### ¿Puede el reComputer RK3576/RK3588 arrancar el sistema desde un SSD M.2 NVMe? {#rk3576-nvme-boot}

**Aplica a:** Serie reComputer RK3576/RK3588, usando un SSD M.2 NVMe como disco del sistema

**Última verificación:** 2026-11-01

Sí. Después de que el sistema se haya flasheado en el SSD, apaga el dispositivo y retira la tarjeta SD; el sistema arrancará entonces automáticamente desde el SSD. Puedes seguir el tutorial de esa página para cambiar la unidad de arranque: https://sensecraft.seeed.cc/ai-lab/zh/tutorials/rk/edge-ai-computer/rk3576/getting-start/recomputer-rk3576-flash-os#dd

**Notas:**

- Al flashear el sistema, asegúrate de usar la imagen oficial que proporcionamos.

**Referencias:**

- [Install Armbian on an NVMe SSD on reComputer RK3576 | reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/zh/tutorials/rk/edge-ai-computer/rk3576/getting-start/recomputer-rk3576-flash-os#dd)

## Sistema operativo y firmware {#os-and-firmware}

### ¿Cuál es la contraseña inicial de un dispositivo reComputer RK3588? {#rk3588-default-password}

**Aplica a:** Placas reComputer RK3588

**Última verificación:** 2026-11-01

Si compraste un reComputer RK3588 estándar directamente y la cuenta no se personalizó, el nombre de usuario y la contraseña iniciales del dispositivo son: root  - 1234

### ¿Vendrá el reComputer RK3588 Dev Kit con una imagen oficial de Android? {#rk3588-devkit-android-availability}

**Aplica a:** reComputer RK3588 Dev Kit

**Última verificación:** 2026-11-01

Por el momento el reComputer RK3588 Dev Kit admite oficialmente Armbian. No se ha confirmado el lanzamiento de una imagen oficial de Android, ni tampoco se ha confirmado una fecha de lanzamiento. Si tu proyecto necesita Android u otro sistema operativo, puedes evaluar soporte personalizado a través de la colaboración de personalización ODM; esa vía no es lo mismo que una imagen oficial de disponibilidad general.

## Conectividad y redes {#connectivity-and-networking}

### ¿Cómo uso cámaras GMSL en el reComputer RK3576 y qué deserializador funciona? {#rk3576-gmsl-camera}

**Aplica a:** Placas reComputer RK3576 con un adaptador deserializador externo de GMSL a MIPI CSI-2

**Última verificación:** 2026-11-01

Sí. El RK3576 puede usar cámaras GMSL a través de una placa adaptadora deserializadora GMSL externa. El deserializador convierte los datos serie GMSL en MIPI CSI-2, y el RK3576 los recibe a través de su interfaz MIPI CSI; un MAX96712 es un deserializador adecuado para esto. También se admiten la codificación y grabación por hardware H.265: el RK3576 tiene un VPU integrado con codificación por hardware H.264 y H.265, y la especificación del chip alcanza hasta 4K a 60 fps.

**Referencias:**

- [Object Detection with YOLOv11 on reComputer-RK](https://wiki.seeedstudio.com/es/object_detection_with_yolov11_on_recomputer_rk/)
- [reComputer RK3576-30](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)

### ¿El reComputer RK3576-20 proporciona pines I2C? {#rk3576-20-i2c-pins}

**Aplica a:** reComputer RK3576-20, usado como reemplazo de una Raspberry Pi

**Última verificación:** 2026-11-01

El reComputer RK3576-20 expone un conector GPIO de 40 pines que incluye dos canales I2C, y su esquema está disponible aquí: https://files.seeedstudio.com/wiki/reComputer_RK/Documents/recomputer_rk3576/RECOMPUTER%20RK3576_V1.0_SCH_2026.pdf.

**Referencias:**

- [reComputer RK3576 V1.0 Schematic](https://files.seeedstudio.com/wiki/reComputer_RK/Documents/recomputer_rk3576/RECOMPUTER%20RK3576_V1.0_SCH_2026.pdf)

### ¿Cómo compruebo el GPIO y los pines multiplexados del conector de 40 pines del reComputer RK3576? {#rk3576-40pin-pinmux}

**Aplica a:** Conector GPIO de 40 pines de la serie reComputer RK3576, para diseños de hardware que planean multiplexación UART, CAN, SPI o I2C

**Última verificación:** 2026-11-01

El conector de 40 pines puede multiplexar hasta 6 UART. Son posibles cuatro UART estándar (RS232, RS485 o KNX), pero requieren multiplexación y ocupan 8 pines en total; también es posible una UART con CTS y RTS (MG24); es posible un CAN, y el CAN en el conector de 40 pines es una señal nativa del chip, por lo que se requiere un transceptor CAN externo para que funcione. Debido a que la multiplexación es extensa, funciones como SPI o I2C pueden no estar disponibles.

1. Puedes comprobar la prueba de pines y el estado de multiplexación del dispositivo en ese wiki: https://sensecraft.seeed.cc/ai-lab/zh/tutorials/rk/edge-ai-computer/rk3576/interface-usage-guidelines/use-recomputer-rk3576-hardware-interfaces-and-fan-control#gpio 

    <img width={400} src='https://files.seeedstudio.com/wiki/reComputer/FAQ/RK/ai_lab_rk3576_gpio.jpg' /> 

**Referencias:**

- [reComputer RK3576 Hardware Interfaces and Fan Control | reComputer AI Lab](https://sensecraft.seeed.cc/ai-lab/tutorials)

### ¿Puede el reComputer RK3588-30 usar una cámara IP y ejecutar detección de objetos sobre ella? {#rk3588-ip-camera-rtsp}

**Aplica a:** reComputer RK3588-30, conectando una cámara IP RTSP por Ethernet para analítica de vídeo

**Última verificación:** 2026-11-01

Sí. A juzgar por sus capacidades, el dispositivo admite completamente la entrada de cámara RTSP: tiene dos puertos Ethernet de 2,5 Gigabit, uno de los cuales admite PoE, un VPU para decodificación de vídeo y un NPU para cómputo.

**Referencias:**

- [Interruptible Conversational Voice AI on the Edge: Build, Deploy, and Measured Results](https://wiki.seeedstudio.com/es/solutions/conversational-voice-ai/)
- [Edge Security Alerting: Restricted Zones, Line Crossing and Loitering on the Edge](https://wiki.seeedstudio.com/es/solutions/edge-security/)

## Hardware e interfaces {#hardware-and-interfaces}

### La tarjeta aceleradora RK182x interfiere con la instalación en el reComputer RK3576 y no se puede instalar {#rk1828-npu-interference}

**Aplica a:** Placas reComputer RK3576 con una tarjeta PCIe NPU RK1828 o RM182X añadida

**Última verificación:** 2026-11-01

El reComputer RK3576 ya se ha probado para esta instalación. Al instalar la tarjeta aceleradora RK182x, ten en cuenta que la carcasa inferior original del acelerador debe retirarse: conserva la placa desnuda más el ventilador de refrigeración, y la tarjeta se podrá instalar con normalidad.

### ¿Qué cámaras MIPI-CSI admite el reComputer RK3588? {#rk3588-csi-camera-support}

**Aplica a:** Serie reComputer RK3588, conectando una cámara a través de la interfaz MIPI-CSI

**Última verificación:** 2026-11-01

La cámara confirmada como funcional actualmente es la Raspberry Pi Camera Module 3 (IMX708).

**Notas:**

- La interfaz CSI del reComputer RK3588 difiere del diseño de Raspberry Pi, por lo que el ecosistema de cámaras de Raspberry Pi no puede usarse tal cual.

**Referencias:**

- [Edge Security Alerting: Restricted Zones, Line Crossing and Loitering on the Edge](https://wiki.seeedstudio.com/es/solutions/edge-security/)
- [reComputer RK3588-30](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)

## Producto y servicio {#product-and-service}

### ¿Puede el reComputer RK3588-40 ejecutar IA local como DeepSeek u Ollama, y admite Windows o Linux? {#rk3588-local-ai-os}

**Aplica a:** reComputer RK3588-40 ejecutando modelos LLM o VLM locales

**Última verificación:** 2026-11-01

Sí, puede usarse para despliegue de IA local. El reComputer RK3588-40 admite una amplia gama de modelos LLM y VLM; puedes consultar los modelos adaptados en la página Models de la plataforma reComputer AI Lab. En cuanto al sistema operativo, el que se admite oficialmente es Debian, con Linux como sistema base; Windows y las demás distribuciones de Linux aparte de Debian aún no están explícitamente admitidas.

**Notas:**

- Que una herramienta o modelo específico (por ejemplo DeepSeek u Ollama) funcione todavía debe confirmarse según la versión del modelo, el nivel de cuantización, la memoria disponible y los recursos de cómputo.

**Referencias:**

- [reComputer AI Lab - Models](https://sensecraft.seeed.cc/ai-lab/models)
- [reComputer RK3588-40](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html)

### ¿Qué accesorios PoE-PD y Hailo-8 M.2 admite el reComputer RK3576/RK3588, y cómo confirmo la compatibilidad, el SKU y la forma de comprarlos? {#rk3588-40-accessories}

**Aplica a:** reComputer RK3588-40 (SKU 100086238), para selección de accesorios PoE-PD y Hailo-8 M.2

**Última verificación:** 2026-11-01

El módulo PoE-PD para el reComputer RK3588 aún no se ha lanzado, por lo que no hay un SKU confirmado ni una declaración sobre si se vende por separado. En segundo lugar, el acelerador Hailo-8 M.2: Seeed indica que existe un módulo Hailo-8 M.2 compatible con el reComputer RK3588-40, pero actualmente solo se suministra como un paquete personalizado con un host RK3588-40 y el módulo no se puede comprar por separado;

**Notas:**

- Solicita una cotización para la solución personalizada por volumen. Si compras un módulo Hailo-8 a través de otro canal, pide al vendedor las especificaciones correspondientes y la misma compatibilidad de Hailo-8 con el RK3588-40 antes de decidirte

**Referencias:**

- [reComputer RK3588-40](https://www.seeedstudio.com/reComputer-RK3588-40-p-6818.html)

<!-- RECOMPUTER_FAQ_AUTO_END -->

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

</div>
