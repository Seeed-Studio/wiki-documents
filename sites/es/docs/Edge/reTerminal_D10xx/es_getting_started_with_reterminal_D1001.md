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
updatedAt: '2026-03-13'
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

## Introducción del producto

### Descripción general
reTerminal D1001 es un terminal inteligente de interacción con pantalla grande impulsado por el último chip de alto rendimiento **ESP32-P4** de Espressif. Diseñado para escenarios de aplicación de AIoT que requieren visualización gráfica de alto rendimiento, procesamiento de video e interacción por voz, aprovecha el potente procesador RISC-V de doble núcleo a 400 MHz del ESP32-P4 y sus abundantes interfaces de periféricos multimedia para manejar fácilmente tareas complejas de computación en el borde y multimedia.

### Características principales
*   **Potente procesamiento para interfaces ricas**: Impulsado por ESP32-P4, un procesador RISC-V de 32 bits y doble núcleo con 32 MB de PSRAM, este dispositivo ofrece el rendimiento necesario para interfaces ricas en gráficos, interacción fluida en tiempo real y más aplicaciones en el borde.
*   **Conectividad inalámbrica integrada**: La comunicación inalámbrica está habilitada por un ESP32-C6 integrado que admite Wi-Fi 6, Bluetooth 5 (LE) y 802.15.4 (Zigbee/Thread/Matter). El procesador principal se comunica con el subsistema de conectividad a través de una interfaz SDIO, lo que permite una red inalámbrica confiable para dispositivos conectados y aplicaciones de IoT.
*   **Expansión celular lista para campo**: Equipado con una ranura mPCIe integrada que admite señales USB 2.0, el dispositivo permite una conectividad 4G LTE sin interrupciones para una red confiable en entornos remotos. Es ideal para despliegues en campo, monitorización remota y aplicaciones perimetrales siempre conectadas donde la comunicación inalámbrica estable es esencial.
*   **Pantalla táctil de 8 pulgadas con amplio soporte HMI**: La pantalla LCD capacitiva de 8 pulgadas y 800 × 1280, accionada mediante MIPI-DSI y que admite modos vertical y horizontal, te brinda el espacio necesario para crear paneles de control pulidos, paneles de control inteligentes y otros dispositivos embebidos centrados en la interfaz de usuario.
*   **Interfaz de cámara para desarrollo de visión**: Con una cámara MIPI-CSI basada en el sensor SC2356 y compatibilidad con hasta 1600 × 1200 a 30 fps, la plataforma está lista para captura de imágenes, vista previa en vivo y desarrollo de visión embebida desde el primer momento.
*   **Capacidades de voz y audio**: Los micrófonos duales y un altavoz integrado permiten entrada de voz, captura de sonido y reproducción. Con cancelación de eco compatible con el convertidor analógico-digital de audio ES7210, el sistema ayuda a ofrecer una captura de voz más clara para asistentes de IA y aplicaciones con control por voz.

### Especificaciones de hardware

| Categoría | Parámetro | Descripción |
| :--- | :--- | :--- |
| **Básico** | Procesador | ESP32-P4NRW32 con 32MB PSRAM |
| | SoC inalámbrico | ESP32-C6 |
| | Almacenamiento | Flash QSPI de 32MB, admite tarjeta Micro SD |
| **Pantalla** | Tamaño | 8” |
| | Resolución | 800×1280 |
| | Luminancia (cd/㎡) | 250 |
| | Ángulo de visión óptimo (en punto de reloj) | TODOS |
| | Interfaz | MIPI-DSI |
| | IC de control | 9365DA-H3 |
| | Tipo de táctil | Táctil capacitiva |
| | IC táctil | GSL3670 |
| | Orientación | Compatible con rotación vertical/horizontal |
| **Cámara** | Sensor | SC2356 |
| | Tamaño de matriz activa | 1608×1208 |
| | Frecuencia de imagen máxima | (1600*1200)30fps 10bit |
| | Interfaz | MIPI-CSI |
| **Audio** | Micrófono | Micrófono dual |
| | Altavoz | 2W@8Ω NS4150B |
| | IC de audio | Códec: ES8311 <br /> ADC de audio: ES7210 |
| **Comunicación inalámbrica** | Wi-Fi | Wi-Fi 6 (2.4GHz) |
| | BLE | Bluetooth 5 (LE) |
| | Celular | Mini-PCIe para 4G (opcional) |
| | Antena | Antena integrada y antena externa |
| **Alimentación** | Batería | 2500mAh |
| | Entrada de alimentación | USB Type-C 5V |
| **Otros** | RTC | PCF8563T (admite despertar por interrupción programada) |
| | Sensor de movimiento | LSM6DS3TR de seis ejes |

### Descripción general del hardware
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/hardware.webp" style={{width:800, height:'auto'}}/></div>

### Aplicación
*   **Hub central de hogar inteligente**: Un dispositivo HMI todo en uno para gestionar iluminación, seguridad y sistemas de automatización del hogar.
*   **Sistemas de videoportero**: Comunicación visual en tiempo real para acceso inteligente, timbres y control de seguridad.
*   **Asistentes de IA interactivos**: Pantallas inteligentes con control por voz que proporcionan retroalimentación visual intuitiva y control receptivo.
*   **Paneles de datos industriales**: Terminales de monitorización profesionales para seguimiento de equipos en tiempo real y visualización de datos comerciales.
*   **Terminales de visión en el borde**: Soluciones compactas para captura de imágenes, escaneo y quioscos interactivos de venta al por menor.


## Introducción a ESP-IDF

Esta sección te guía para configurar el entorno de desarrollo y ejecutar el firmware de demostración de fábrica para experimentar las potentes funciones de reTerminal D1001.

### Configurar el entorno de desarrollo de ESP-IDF

**Paso 1. Instalar ESP-IDF**

Utiliza la última herramienta de instalación multiplataforma de Espressif, **ESP-IDF Installation Manager**.

1.  **Descargar ESP-IDF**: Visita la [Página de descarga de ESP-IDF Installation Manager](https://dl.espressif.cn/dl/eim/), selecciona la pestaña **Offline Installer**, elige la versión para **Windows** (se recomienda v5.4.2+), y haz clic en **Download** para obtener los archivos `.zst` y `.exe`.

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
2.  Abre VS Code, haz clic en el icono de **Extensions** en la barra lateral (o utiliza `Ctrl + Shift + X`) para abrir la vista de extensiones.
3.  Escribe `ESP-IDF` en la caja de búsqueda, encuentra la extensión **ESP-IDF** y haz clic en **Install**.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/5.png" style={{width:600, height:'auto'}}/></div>

### Obtener el repositorio de firmware
Descarga el repositorio oficial de reTerminal D1001 desde GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/6.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para descargar</button></p>
</a>
</div>

### Compilar y grabar el firmware de demostración
1.  **Abrir el proyecto**: Utiliza VS Code para abrir la carpeta clonada `reTerminal-D1001`.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/7.png" style={{width:600, height:'auto'}}/></div>

    :::tip
    Asegúrate de abrir el directorio `examples/factory_firmware` dentro del proyecto. Abrir el directorio raíz puede provocar fallos de compilación.
    :::

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/8.png" style={{width:800, height:'auto'}}/></div>
2.  **Configurar el chip de destino**:
    *   En la barra de estado de VS Code en la parte inferior, selecciona el chip de destino como `esp32p4`.
    *   O ejecuta en la terminal: `idf.py set-target esp32p4`.
3.  **Seleccionar el modo de grabación**:
    *   Selecciona el modo de grabación correcto antes de grabar.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/uart.jpg" style={{width:800, height:'auto'}}/></div>
4.  **Compilar, grabar y monitorizar**:
    *   Conecta el dispositivo a tu ordenador mediante USB Type-C.
    *   Haz clic en el botón **"Flash" (icono de llama)** en la barra de estado de VS Code para compilar, grabar e iniciar el monitor en un solo paso.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/9.jpg" style={{width:800, height:'auto'}}/></div>

### Probar las funciones de demostración
Después de que el firmware se grabe correctamente, el dispositivo se reiniciará automáticamente. Puedes interactuar con el dispositivo de la siguiente manera:

*   **Control de alimentación y pantalla**: Mantén pulsado el botón verde durante más de 3 segundos para encender. Pulsa brevemente el botón para apagar la pantalla y vuelve a pulsar brevemente para activarla.
*   **Interacción fluida con la interfaz de usuario**: Disfruta de transiciones de deslizamiento fluidas y animaciones de inicio de aplicaciones.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/UI.gif" style={{width:300, height:'auto'}}/></div>
*   **Vista previa de la cámara**: Abre la aplicación Camera para ver imágenes en tiempo real.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/10.jpg" style={{width:300, height:'auto'}}/></div>
*   **Demostración de sensores**: Gira el dispositivo para observar el efecto de autorrotación de la pantalla o consulta otros datos de sensores.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/sensor.gif" style={{width:300, height:'auto'}}/></div>


## Recursos

*   **Documentos de hardware**:
    *   [reTerminal D1001 Main Board V1.0 SCH & PCB](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal_D1001_main_board_V1.0_SCH_&_PCB_251128.zip)
    *   [Esquemático de reTerminal D1001 (PDF)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal%20D1001_sch.pdf)
*   **Hojas de datos**:
    *   [Hoja de datos de ESP32-P4NRW32](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/Espressif_ESP32-P4NRW32_Datasheet.pdf)
    *   [Hoja de datos de ESP32-C6](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/esp32-c6_datasheet_en.pdf)
    *   [Hoja de datos de la pantalla (GJX080C13-31BY)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/GangJingXin_GJX080C13-31BY_Datasheet.pdf.pdf)
    *   [Hoja de datos del sensor IMU (LSM6DS3TR)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ST_LSM6DS3TR_Datasheet.pdf)
    *   [Hoja de datos del módulo de cámara (SC2356)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ZD2481-D1001-V2.0_Datasheet.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
