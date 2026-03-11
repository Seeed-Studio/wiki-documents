---
description: Este artículo te guiará para comenzar rápidamente con reTerminal D1001.
title: Introducción a reTerminal D1001
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /getting_started_with_reterminal_d1001
sku: 100058144
sidebar_position: 2
last_update:
  date: 03/06/2026
  author: Jackson.Li
createdAt: '2026-03-06'
updatedAt: '2026-03-06'
url: https://wiki.seeedstudio.com/es/getting_started_with_reterminal_d1001/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introducción a reTerminal D1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Introducción al producto

### Descripción general
reTerminal D1001 es un terminal inteligente de interacción con pantalla grande impulsado por el último chip de alto rendimiento **ESP32-P4** de Espressif. Diseñado para escenarios de aplicación de AIoT que requieren visualización gráfica de alto rendimiento, procesamiento de video e interacción por voz, aprovecha el potente procesador RISC-V de doble núcleo a 400 MHz del ESP32-P4 y sus ricas interfaces de periféricos multimedia para manejar fácilmente tareas complejas de computación en el borde y multimedia.

### Características principales
*   **Potente procesamiento para interfaces ricas**: Impulsado por ESP32-P4, un procesador RISC-V de 32 bits de doble núcleo (HP Core 400 MHz) con 32 MB de PSRAM y motor de códec JPEG integrado, ofrece el rendimiento necesario para interfaces ricas en gráficos, interacción fluida en tiempo real y tareas complejas de IA en el borde.
*   **Pantalla táctil de 8 pulgadas con amplio soporte HMI**: La pantalla táctil capacitiva de 8 pulgadas y 800 × 1280, controlada mediante MIPI-DSI, admite modos vertical y horizontal (a través del IMU), proporcionando un amplio espacio para crear paneles de control pulidos, paneles de control inteligentes y otros dispositivos embebidos centrados en la interfaz de usuario.
*   **Conectividad inalámbrica integrada**: La comunicación inalámbrica está habilitada por un ESP32-C6 integrado que admite Wi-Fi 6 (2,4 GHz) y Bluetooth 5 (LE). El procesador principal se comunica con el subsistema de conectividad a través de una interfaz SDIO, lo que permite una red inalámbrica fiable para dispositivos conectados y aplicaciones IoT.
*   **Interfaz de cámara para desarrollo de visión**: Equipado con una cámara MIPI-CSI de 2 MP (SC2356) que admite hasta 1600 × 1200 a 30 fps, la plataforma está lista para captura de imágenes, vista previa en vivo y desarrollo de visión embebida desde el primer momento.
*   **Capacidades de voz y audio**: Los micrófonos duales y un altavoz integrado permiten entrada de voz, captura de sonido y reproducción multimedia. Con cancelación de eco compatible con el ADC de audio ES7210, el sistema ofrece una captura de voz clara para asistentes de IA y aplicaciones habilitadas por voz.
*   **Amplia expansión**: Proporciona GPIO, I2C, UART y otras interfaces de expansión para satisfacer diversas necesidades de conexión de sensores y actuadores.

<!--
### Target Users & Applications
*   **Target Users**:
    *   **Embedded Developers**: Professionals seeking high-performance, low-cost HMI solutions to replace Linux/Android.
    *   **Smart Home Integrators**: Teams needing customized central control panels and smart switches.
    *   **Geeks & Makers**: Enthusiasts exploring the limits of ESP32 performance and developing desktop gadgets or smart terminals.
*   **Applications**: Smart Home Control Panels, Industrial HMI Panels, AI Voice Assistants, Video Surveillance Terminals, Educational Development Kits.
-->


### Especificaciones de hardware

| Módulo de función | Parámetros detallados | Observaciones |
| :--- | :--- | :--- |
| **Procesador principal** | **ESP32-P4NRW32** | RISC-V de doble núcleo a 400 MHz, 32 MB PSRAM |
| **Almacenamiento** | 32 MB Nor Flash | Admite expansión con tarjeta MicroSD |
| **Conectividad inalámbrica** | Wi-Fi 6 y Bluetooth 5 (LE) | Proporcionada por ESP32-C6 (interfaz SDIO) |
| **Pantalla** | Pantalla táctil MIPI-DSI de 8 pulgadas | Resolución: 800x1280 <br /> Luminancia: 250 cd/㎡ <br /> IC de controlador: 9365DA-H3 <br /> IC táctil: GSL3670 (capacitiva) |
| **Cámara** | 2 MP (SC2356) | Resolución: 1608x1208 <br /> Interfaz: MIPI-CSI |
| **Audio** | **Codec**: ES8311 <br /> **ADC**: ES7210 <br /> **PA**: NS4150B (2W@8Ω) <br /> **Entrada**: Matriz de micrófonos duales | Entrada/salida de audio de alta fidelidad |
| **Expansión de red** | Ranura mPCIe | Admite señal USB 2.0, módulo 4G opcional |
| **Sensores** | IMU de 6 ejes (LSM6DS3TR) | Acelerómetro + giroscopio, admite autorrotación de pantalla |
| **Interfaces y botones** | USB Type-C (alimentación/depuración) <br /> Cabecera de expansión de doble fila de 2,54 mm <br /> BOOT/Reset (orificio) <br /> Botón de encendido | Admite pulsación corta para suspensión / pulsación larga para encendido/apagado |
| **Gestión de energía** | Batería de litio de 2500 mAh <br /> Portapilas para batería de botón RTC | Entrada USB Type-C 5V <br /> Indicador de carga y LED RGB de estado |


## Introducción con ESP-IDF

Esta sección te guía para configurar el entorno de desarrollo y ejecutar el firmware de demostración de fábrica para experimentar las potentes funciones de reTerminal D1001.

### Configurar el entorno de desarrollo de ESP-IDF

**Paso 1. Instalar ESP-IDF**

Utiliza la última herramienta de instalación multiplataforma de Espressif, **ESP-IDF Installation Manager**.

1.  **Descargar ESP-IDF**: Visita la [página de descarga de ESP-IDF Installation Manager](https://dl.espressif.cn/dl/eim/), selecciona la pestaña **Offline Installer**, elige la versión para **Windows** (se recomienda v5.4.2+), y haz clic en **Download** para obtener los archivos `.zst` y `.exe`.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1.png" style={{width:600, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/2.png" style={{width:600, height:'auto'}}/></div>

2.  **Instalar desde archivo**: Ejecuta el instalador (`eim-gui-windows-x64.exe`), selecciona **Install from archive** (el paquete sin conexión se detectará automáticamente), elige una ruta de instalación (se recomienda la predeterminada; evita caracteres chinos o espacios) y haz clic en **Start Installation**.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/3.png" style={{width:800, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/4.png" style={{width:800, height:'auto'}}/></div>
3.  **Completar la instalación**: Una vez finalizada, haz clic en **Install Driver** para completar la configuración.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/0_5.png" style={{width:800, height:'auto'}}/></div>

**Paso 2. Instalar Visual Studio Code y la extensión ESP-IDF**

1.  Descarga e instala [Visual Studio Code](https://code.visualstudio.com/).
    *   Durante la instalación, se recomienda marcar **"Add 'Open with Code' action to Windows Explorer file context menu"** para abrir rápidamente carpetas de proyectos.
2.  Abre VS Code, haz clic en el icono de **Extensions** en la barra lateral (o usa `Ctrl + Shift + X`) para abrir la vista de extensiones.
3.  Escribe `ESP-IDF` en el cuadro de búsqueda, encuentra la extensión **ESP-IDF** y haz clic en **Install**.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/5.png" style={{width:600, height:'auto'}}/></div>

### Obtener el repositorio de firmware
Abre tu terminal o Git Bash y clona el repositorio oficial de reTerminal D1001:
```bash
git clone https://github.com/Seeed-Studio/reTerminal-D1001-alpha
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/6.png" style={{width:800, height:'auto'}}/></div>

### Compilar y grabar el firmware de demostración
1.  **Abrir el proyecto**: Usa VS Code para abrir la carpeta clonada `reTerminal-D1001-alpha`.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/7.png" style={{width:600, height:'auto'}}/></div>

    :::tip
    Asegúrate de abrir el directorio `examples/factory_firmware` dentro del proyecto. Abrir el directorio raíz puede causar fallos de compilación.
    :::

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/8.png" style={{width:800, height:'auto'}}/></div>
2.  **Configurar el chip de destino**:
    *   En la barra de estado de VS Code en la parte inferior, selecciona el chip de destino como `esp32p4`.
    *   O ejecuta en la terminal: `idf.py set-target esp32p4`.
3.  **Compilar, grabar y monitorizar**:
    *   Conecta el dispositivo a tu ordenador mediante USB Type-C.
    *   Haz clic en el botón **"Flash" (icono de llama)** en la barra de estado de VS Code para compilar, grabar e iniciar el monitor en un solo paso.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/9.jpg" style={{width:800, height:'auto'}}/></div>

### Experimentar las funciones de demostración
Después de que el firmware se grabe correctamente, el dispositivo se reiniciará automáticamente. Puedes interactuar con el dispositivo de la siguiente manera:

*   **Control de encendido y pantalla**: Mantén pulsado el botón verde durante más de 3 segundos para encender. Pulsa brevemente el botón para apagar la pantalla y vuelve a pulsar brevemente para activarla.
*   **Interacción fluida de la interfaz de usuario**: Experimenta transiciones de deslizamiento suaves y animaciones de inicio de aplicaciones.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/UI.gif" style={{width:300, height:'auto'}}/></div>
*   **Vista previa de la cámara**: Abre la aplicación Camera para ver imágenes en tiempo real.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/10.jpg" style={{width:300, height:'auto'}}/></div>
*   **Demostración de sensores**: Gira el dispositivo para observar el efecto de autorrotación de la pantalla o consulta otros datos de sensores.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/sensor.gif" style={{width:300, height:'auto'}}/></div>


## Recursos

*   **Documentos de hardware**:
    *   [reTerminal D1001 Main Board V1.0 SCH & PCB](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal_D1001_main_board_V1.0_SCH_&_PCB_251128.zip)
*   **Hojas de datos**:
    *   [ESP32-P4 Datasheet](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ESP32P4-Datasheet-V0.4.pdf)
    *   [ESP32-P4NRW32 Datasheet](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/Espressif_ESP32-P4NRW32_Datasheet.pdf)
    *   [ESP32-C6FH4 Datasheet](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/Espressif_ESP32-C6FH4_Datasheet.pdf)
    *   [Display Datasheet (GJX080C13-31BY)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/GangJingXin_GJX080C13-31BY_Datasheet.pdf.pdf)
    *   [IMU Sensor Datasheet (LSM6DS3TR)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ST_LSM6DS3TR_Datasheet.pdf)
    *   [reTerminal D1001 V2.0 Datasheet](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ZD2481-D1001-V2.0_Datasheet.pdf)

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
