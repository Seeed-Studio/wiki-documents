---
description: Introducción al Kit de Evaluación Semtech LR2021 LoRa Plus™.
title: Kit de Evaluación Semtech LR2021 LoRa Plus™
keywords:
  - Semtech LR2021
  - XIAO
  - nRF54L15
  - docusaurus
slug: /semtech_lr2021_evk_getting_started
last_update:
  date: 12/30/2025
  author: David Du
createdAt: '2026-01-05'
updatedAt: '2026-01-05'
url: https://wiki.seeedstudio.com/es/semtech_lr2021_evk_getting_started/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/2-100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0.jpg" style={{width:600, height:'auto'}}/></div>

## Características

El **Kit de Evaluación Semtech LR2021 LoRa Plus** presenta un diseño modular que integra perfectamente la potente **Placa Principal Seeed Studio XIAO nRF54L15** con la **Placa de Expansión LoRa Plus**. Esta plataforma de hardware compacta y robusta está específicamente diseñada para evaluar comunicación completa de tierra a satélite. Su compatibilidad con numerosos protocolos IoT principales asegura que cumple con los requisitos de desarrollo en diversos escenarios de aplicación.

### Transceptor Semtech LR2021

- **Conectividad Universal (Soporte Multi-Banda):**
    - **LoRa/FSK Sub-GHz:** Perfectamente compatible con redes LoRaWAN tradicionales de 470/868/915 MHz, manteniendo capacidades extremas de transmisión de largo alcance y penetración.
    - **LoRa 2.4GHz:** Soporta modulación LoRa de banda ISM global. Esto resuelve la fragmentación regulatoria entre diferentes países (habilitando "Un SKU Globalmente") mientras ofrece tasas de datos más altas que Sub-GHz.
    - **Soporte de Satélite Banda-S:** Una actualización importante. El LR2021 presenta soporte nativo para la banda **1.9GHz - 2.5GHz**, habilitando comunicación directa con satélites de Órbita Terrestre Baja (LEO) para llenar vacíos de cobertura en océanos, desiertos y áreas remotas donde las redes terrestres no pueden llegar.

- **Soporte Mejorado LR-FHSS:** 
El chip incluye soporte de hardware integrado para **Espectro Ensanchado de Salto de Frecuencia de Largo Alcance (LR-FHSS)**. Esta tecnología de modulación aumenta significativamente la capacidad de red e inmunidad a interferencias, sirviendo como tecnología crítica para **IoT Directo-a-Satélite**.

- **Soporte de Múltiples Modulaciones:**
LoRa, LR-FHSS, FLRC, FSK/GFSK, OQPSK, OOK, BLE 5.0 PHY

- **Múltiples Protocolos Compatibles:**
LoRaWAN(Sub-GHz, 2.4 GHz), Amazon Sidewalk, Wi-SUN, Wireless M-Bus, Z-Wave, BLE, IEEE 802.15.4 (Thread, Zigbee)

- **Arquitectura de Ultra Bajo Consumo:** 
A pesar de integrar un front-end RF multi-banda, el LR2021 mantiene los estándares de bajo consumo líderes en la industria de Semtech: 
    - 105mA @ +22dBm potencia de transmisión
    - 5.7mA corriente de recepción
    - 470nA corriente de reposo

Haciéndolo ideal para dispositivos de seguimiento de activos alimentados por batería y de ciclo de vida largo.

- **Detección Mejorada de Actividad de Canal (CAD):**
El CAD Rápido del LR2021 emplea un umbral adaptativo inteligente y mecanismo de terminación temprana, que reduce significativamente el consumo de energía y tiempo requerido para la detección de canal inactivo.


### Características de la Placa de Expansión LoRa Plus

#### Diseño de Interfaz de Antena Dual
- **Puerto LF (SMA):** Dedicado a bandas Sub-GHz (150MHz - 960MHz).
- **Puerto HF (SMA):** Dedicado a frecuencias ISM de 2.4GHz y Satélite Banda-S.

#### Núcleo Anfitrión: XIAO nRF54L15
- **Silicio de Nueva Generación:** 
Alimentado por la última **Serie nRF54** de Nordic Semiconductor (nRF54L15).
- **Procesamiento de Alto Rendimiento:** 
Presenta un núcleo ARM Cortex-M33 funcionando hasta **128 MHz**, proporcionando amplio poder de cómputo para pilas de protocolo LoRaWAN complejas y algoritmos de IA de Borde.
- **Eficiencia de Nueva Generación:** 
Comparado con la serie nRF52, el nRF54 ofrece un salto en eficiencia energética. Cuando se empareja con el LR2021, permite la construcción de productos terminales con vida útil de batería excepcional.
- **Factor de Forma Compacto:** 
Utiliza el diseño clásico de agujeros de sello XIAO, facilitando la integración en carcasas de prototipo más pequeñas.

## Especificaciones

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">Parámetros</th><th class="tg-6cwf">Especificaciones</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">Dimensión</td>
<td class="tg-g9rn">Placa de Expansión: 65(A)x73(L)x27(Al)mm  Paquete: 200x130x50mm</td>
</tr>
<tr>
<td class="tg-g9rn">Voltaje - Suministro</td>
<td class="tg-g9rn">5V (USB Type C)</td>
</tr>
<tr>
<td class="tg-g9rn">Voltaje - Salida</td>
<td class="tg-g9rn">3.3V / 5V</td>
</tr>
<tr>
<td class="tg-g9rn">Corriente Máxima de Operación (Transmisor)</td>
<td class="tg-g9rn">Sub-GHz: 105mA @ +22dBm<br />2.4 GHz: 27mA @ +14dBm</td>
</tr>
<tr>
<td class="tg-g9rn">Corriente Máxima de Operación (Receptor)</td>
<td class="tg-g9rn">LoRa SF7 @ 125KHz: 5.7mA<br />FLRC: 10.9mA</td>
</tr>
<tr>
<td class="tg-g9rn">Plan de Frecuencias</td>
<td class="tg-g9rn">EU868 / US915 / CN490</td>
</tr>
<tr>
<td class="tg-g9rn">Potencia de Salida</td>
<td class="tg-g9rn">Sub-GHz: +22dBm a -10dBm<br />2.4 GHz: +12dBm</td>
</tr>
<tr>
<td class="tg-g9rn">Sensibilidad de Recepción</td>
<td class="tg-g9rn">LoRa SF12 @ 125kHz: -141.5dBm<br />FLRC @ 260kbps: -111dBm<br />BLE @ 2Mbps: -97dBm</td>
</tr>
<tr>
<td class="tg-g9rn">interfaces</td>
<td class="tg-g9rn">USB Type C / Grovex3(IICx2 / UARTx1) / SMA-Kx2 </td>
</tr>
<tr>
<td class="tg-g9rn">modulación</td>
<td class="tg-g9rn">LoRa, (G)FSK, LR-FHSS, FLRC, OQPSK, OOK, BLE 5.0 PHY</td>
</tr>
<tr>
<td class="tg-g9rn">temperatura de trabajo</td>
<td class="tg-g9rn">-40℃ ~ 85℃</td>
</tr>
</tbody>
</table>

<br />

## Descripción General del Hardware



### Diagrama



### Pinout

**Placa de Expansión:**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0-Pinout-Front.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/100039980-LR2021-LoRa-Plus-Evaluation-kit-868Mhz-EU-V2.0-Pinout-Back.jpg" style={{width:600, height:'auto'}}/></div>

<br />

**XIAO nRF54L15:**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nr_definition.png" style={{width:600, height:'auto'}}/></div>

<br />

**Mapeo de Pinout:**

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">Definición de Pin XIAO</th><th class="tg-6cwf">Definición de Pin nRF54L15</th><th class="tg-6cwf">Función del Pin</th><th class="tg-6cwf">Índice DeviceTree</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">A0 / D0</td>
<td class="tg-g9rn">P1.04</td>
<td class="tg-g9rn">IO Digital</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A1 / D1</td>
<td class="tg-g9rn">P1.05</td>
<td class="tg-g9rn">IO Digital</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A2 / D2</td>
<td class="tg-g9rn">P1.06</td>
<td class="tg-g9rn">IO Digital</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">A3 / D3</td>
<td class="tg-g9rn">P1.07</td>
<td class="tg-g9rn">IO Digital</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">SDA0 / D4</td>
<td class="tg-g9rn">P1.10</td>
<td class="tg-g9rn">I2C</td>
<td class="tg-g9rn" rowspan="2">i2c22</td>
</tr>
<tr>
<td class="tg-g9rn">SCL0 / D5</td>
<td class="tg-g9rn">P1.11</td>
<td class="tg-g9rn">I2C</td>
</tr>
<tr>
<td class="tg-g9rn">TX / D6</td>
<td class="tg-g9rn">P2.08</td>
<td class="tg-g9rn">UART</td>
<td class="tg-g9rn" rowspan="2">uart21</td>
</tr>
<tr>
<td class="tg-g9rn">RX / D7</td>
<td class="tg-g9rn">P2.07</td>
<td class="tg-g9rn">UART</td>
</tr>
<tr>
<td class="tg-g9rn">SCK / D8</td>
<td class="tg-g9rn">P2.01</td>
<td class="tg-g9rn">SPI</td>
<td class="tg-g9rn" rowspan="3">spi00</td>
</tr>
<tr>
<td class="tg-g9rn">MISO / D9</td>
<td class="tg-g9rn">P2.04</td>
<td class="tg-g9rn">SPI</td>
</tr>
<tr>
<td class="tg-g9rn">MOSI / D10</td>
<td class="tg-g9rn">P2.02</td>
<td class="tg-g9rn">SPI</td>
</tr>
<tr>
<td class="tg-g9rn">SCL1 / D11</td>
<td class="tg-g9rn">P0.03</td>
<td class="tg-g9rn">I2C</td>
<td class="tg-g9rn" rowspan="2">i2c30</td>
</tr>
<tr>
<td class="tg-g9rn">SDA1 / D12</td>
<td class="tg-g9rn">P0.04</td>
<td class="tg-g9rn">I2C</td>
</tr>
<tr>
<td class="tg-g9rn">D13</td>
<td class="tg-g9rn">P2.10</td>
<td class="tg-g9rn">IO Digital</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">D14</td>
<td class="tg-g9rn">P2.09</td>
<td class="tg-g9rn">IO Digital</td>
<td class="tg-g9rn"></td>
</tr>
<tr>
<td class="tg-g9rn">D15</td>
<td class="tg-g9rn">P2.06</td>
<td class="tg-g9rn">IO Digital</td>
<td class="tg-g9rn"></td>
</tr>
</tbody>
</table>



<br />

## Introducción

### 1. Descripción General
Esta guía proporciona instrucciones paso a paso para configurar un entorno de desarrollo Zephyr RTOS de línea de comandos integrado con el módulo `usp_zephyr` de Semtech para una evaluación rápida utilizando las muestras proporcionadas con el **XIAO-nRF54L15** a bordo. Aprende más sobre la [USP™ (Plataforma de Software Unificada)](https://www.semtech.com/products/wireless-rf/unified-software-platform) LoRa de Semtech. También puedes descargar el código fuente y encontrar información más detallada en el repositorio **usp_zephyr** de Semtech:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Lora-net/usp_zephyr" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar desde GitHub</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

El proyecto `usp_zephyr` sigue una estructura híbrida, combinando:

- **Estructura de Módulo West Workspace:** El soporte de hardware central (placas, controladores, HAL) se integra directamente en el sistema de construcción Zephyr como un módulo estándar.

- **Estructura en Capas:** Las bibliotecas de capa de aplicación y los ejemplos residen por separado en el espacio de trabajo para una mejor organización y reutilización.

### 2. Prerrequisitos

Asegúrate de que tu sistema cumpla con estos requisitos antes de continuar. Aprende [más](https://docs.zephyrproject.org/latest/develop/getting_started/index.html) sobre la configuración del entorno de desarrollo de Zephyr:

- **Sistema Operativo:** 
    - Ubuntu 22.04 LTS (recomendado) u otra distribución de Linux compatible, Windows (10 y posteriores), o macOS.

- **Dependencias Principales:**

    - `west` (meta-herramienta de Zephyr)

    - `ninja`

    - `cmake` (versión 3.20.0 o superior)

    - Python 3.8 o superior con `pip`

    - Compilador de Devicetree `dtc`


<details>
<summary>Instalar y Verificar Dependencias</summary>

- Para Linux:
```shell
sudo apt install --no-install-recommends git cmake ninja-build gperf \
  ccache dfu-util device-tree-compiler wget python3-dev python3-venv python3-tk \
  xz-utils file make gcc gcc-multilib g++-multilib libsdl2-dev libmagic1
```
Debido a la no disponibilidad de `gcc-multilib` y `g++-multilib` en sistemas AArch64 (ARM64), es posible que necesites omitirlos de la lista de paquetes a instalar.

- Para macOS:
Usa `brew` para instalar las dependencias requeridas:
```shell
brew install cmake ninja gperf python3 python-tk ccache qemu dtc libmagic wget openocd
```

- Para Windows:
Aquí usamos el administrador de paquetes preinstalado de Windows `winget`. Si esta no es una opción, también puedes instalar las dependencias desde sus respectivos sitios web y agregar sus variables de entorno a `PATH`.

Usa `winget` para instalar las dependencias requeridas:
```shell
winget install Kitware.CMake Ninja-build.Ninja oss-winget.gperf Python.Python.3.12 Git.Git oss-winget.dtc wget 7zip.7zip
```

<br />

Puedes verificar las versiones de las dependencias principales instaladas en tu sistema mediante:

```shell
cmake --version
```

```shell
python3 --version
```

```shell
ninja --version
```

</details>


### 3. Configurar Espacio de Trabajo de Zephyr (Espacio de Trabajo Independiente)

Crear un espacio de trabajo fundamental de Zephyr:
```shell
# Create and navigate into your workspace directory
mkdir ~/zephyr_workspace && cd ~/zephyr_workspace
```

:::note
Para evitar conflictos en el entorno de Python, recomendamos encarecidamente crear y usar un entorno virtual para desarrollo y pruebas. Por favor, recuerda activar el entorno virtual cada vez que comiences a trabajar.
:::


<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Linux" label="Linux">

Crear un nuevo entorno virtual:
```shell
python3 -m venv ~/zephyr_workspace/.venv
```

Activar el entorno virtual:
```shell
source ~/zephyr_workspace/.venv/bin/activate
```

Una vez activado, tu shell tendrá el prefijo `(.venv)`. El entorno virtual puede desactivarse en cualquier momento ejecutando `deactivate`.

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
west packages pip --install
```

Luego necesitamos instalar el Kit de Desarrollo de Software de Zephyr (SDK), que contiene cadenas de herramientas para todas las arquitecturas soportadas por Zephyr. El SDK incluye un compilador, ensamblador, enlazador y otros programas requeridos para construir aplicaciones de Zephyr:
```shell
cd ~/zephyr_workspace/zephyr
west sdk install
```

</TabItem>
<TabItem value="macOS" label="macOS">

Crear un nuevo entorno virtual:
```shell
python3 -m venv ~/zephyr_workspace/.venv
```

Activar el entorno virtual:
```shell
source ~/zephyr_workspace/.venv/bin/activate
```

Una vez activado, tu shell tendrá el prefijo `(.venv)`. El entorno virtual puede desactivarse en cualquier momento ejecutando `deactivate`.

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
west packages pip --install
```

Luego necesitamos instalar el Kit de Desarrollo de Software de Zephyr (SDK), que contiene cadenas de herramientas para todas las arquitecturas soportadas por Zephyr. El SDK incluye un compilador, ensamblador, enlazador y otros programas requeridos para construir aplicaciones de Zephyr:
```shell
cd ~/zephyr_workspace/zephyr
west sdk install
```

</TabItem>
<TabItem value="Windows" label="Windows">

Abre un `cmd.exe` como usuario regular, y crea un nuevo entorno virtual:
```shell
cd %HOMEPATH%
python -m venv zephyr_workspace\.venv
```

Activar el entorno virtual:
```shell
zephyr_workspace\.venv\Scripts\activate.bat
```

Una vez activado, tu shell tendrá el prefijo `(.venv)`. El entorno virtual puede desactivarse en cualquier momento ejecutando `deactivate`.

```shell
# 1. Install west
pip3 install west

# 2. Navigate into your workspace directory
cd ~/zephyr_workspace

# 3. Clone the usp_zephyr repository from GitHub
git clone https://github.com/Lora-net/usp_zephyr.git

# 4. Initialize the workspace with the loacal manifest repository
west init -l usp_zephyr

# 5. Update/fetch all Zephyr modules and dependencies
west update

# 6. Install Python dependencies
cmd /c scripts\utils\west-packages-pip-install.cmd
```

Luego necesitamos instalar el [Kit de Desarrollo de Software (SDK)](https://docs.zephyrproject.org/latest/develop/toolchains/zephyr_sdk.html#toolchain-zephyr-sdk) de Zephyr, que contiene cadenas de herramientas para todas las arquitecturas soportadas por Zephyr. El SDK incluye un compilador, ensamblador, enlazador y otros programas requeridos para construir aplicaciones de Zephyr:
```shell
cd %HOMEPATH%\zephyr_workspace\zephyr
west sdk install
```

</TabItem>
</Tabs>


<br />

Por favor espera mientras la herramienta `west` completa la descarga e instalación de todos los módulos y componentes. Una vez que la instalación esté completa, obtendrás la siguiente estructura de directorio `zephyr_workspace`:

```shell
zephyr_workspace/
├── bootloader/
├── modules/
├── tools/
├── usp_zephyr/
│       ├── boards/
│       │     ├── seeed/xiao_nrf54l15/
│       │     └── shields/
│       ├── doc/
│       ├── drivers/
│       │     └── usp/
│       │          ├── lr11xx/
│       │          ├── lr20xx/
│       │          └── sx126x/
│       ├── dts/bindings/
│       ├── include/zephyr/
│       ├── modules/
│       │     ├── lora_basics_modem/
│       │     ├── smtc_modem_hal/
│       │     ├── usp/
│       │     └── usp_drivers/
│       ├── samples/
│       │     └── usp/
│       │          ├── lbm/
│       │          ├── rac/
│       │          └── sdk/
│       ├── subsys/
│       └── zephyr/
│             └─ module.yml
└── zephyr
```

<br />

**USP para Estructura del Proyecto Zephyr:**

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">Ruta del Directorio</th><th class="tg-6cwf">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">boards/</td>
<td class="tg-g9rn">**Soporte de Placa** Contiene definiciones para plataformas de hardware: <br />- `seeed/xiao_nrf54l15/`: Soporte para la placa Seeed Studio XIAO nRF54L15 <br />- `shields/`: Definiciones para shields de Zephyr (placas complementarias) que son compatibles con los controladores de radio LoRa</td>
</tr>
<tr>
<td class="tg-g9rn">drivers/usp/</td>
<td class="tg-g9rn">**Controladores de Dispositivo** Capa de abstracción de hardware central para radios Semtech:<br />- `lr11xx/`,`lr20xx/`,`sx126x/`: Contiene la implementación de Radio HAL y BSP para chips transceptores LoRa Semtech específicos.
El usuario no debe modificar esos archivos.</td>
</tr>
<tr>
<td class="tg-g9rn">dts/bindings/</td>
<td class="tg-g9rn">**Enlaces de Devicetree** Contiene archivos YAML que definen cómo describir el hardware de radio LoRa (conexión SPI, pines de control) en el Devicetree de Zephyr (archivos `.dts`). Esto vincula la descripción del hardware con los controladores.</td>
</tr>
<tr>
<td class="tg-g9rn">include/zephyr/</td>
<td class="tg-g9rn">**Encabezados de API Pública** Expone las APIs públicas del controlador (`drivers/usp/lr20xx.h`) al resto del código de aplicación de Zephyr.</td>
</tr>
<tr>
<td class="tg-g9rn">modules/</td>
<td class="tg-g9rn">**Bibliotecas y HALs de Semtech** <br />- `lora_basics_modem/`: Biblioteca de software Semtech LoRa Basics Modem. <br />- `smtc_modem_hal/`: Capa de Abstracción de Hardware (HAL) para el módem. <br />- `usp/` y `usp_drivers/`: Guían el archivo de compilación apuntando al componente correspondiente en los módulos de Zephyr.</td>
</tr>
<tr>
<td class="tg-g9rn">samples/usp/</td>
<td class="tg-g9rn">**Aplicaciones de Ejemplo** Código de muestra listo para construir que demuestra funciones clave. <br />- `lbm/`: Muestras para el Lora Basics Modem. <br />- `rac/`: Muestras para el Controlador de Abstracción de Radio. <br />- `sdk/`: Ejemplos genéricos del SDK</td>
</tr>
<tr>
<td class="tg-g9rn">subsys/</td>
<td class="tg-g9rn">**Integración de Subsistema** </td>
</tr>
<tr>
<td class="tg-g9rn">zephyr/module.yml</td>
<td class="tg-g9rn">**Manifiesto del Módulo** El archivo YAML declara todo este directorio `usp_zephyr/` como un módulo de Zephyr. La herramienta `west` usará esto para encontrar e integrar las `boards`, `drivers` del módulo en la construcción.</td>
</tr>
</tbody>
</table>

<br />

### 4. Construir y Ejecutar

Semtech ha proporcionado varias muestras para una evaluación rápida junto con el kit de evaluación. Todas las muestras están ubicadas en el directorio `samples/usp` y puedes usar cualquier placa/shield soportado como definición para construir y flashear estas muestras. Comenzaremos con las muestras `LBM`, demostrando las características principales del LR2021 de nueva generación.

```shell
usp_zephyr/samples/
└── usp/
     ├── lbm/
     │    ├── geolocation
     │    ├── lctt_certif
     │    ├── periodical_uplink
     │    └── porting_tests     
     ├── rac/
     └── sdk/
```

<br />

:::note
**LoRa Basics Modem (LBM):**

LoRa Basics Modem es una biblioteca de software fácil de usar diseñada por Semtech para simplificar el desarrollo de nodos finales LoRaWAN® que operan tanto en las bandas ISM Sub-GHz como en 2.4GHz, asegurando interoperabilidad mundial. Ofrece a los desarrolladores una interfaz de alto nivel basada en eventos, abstrayendo la complejidad mientras mantiene el cumplimiento total con la especificación [TS001-LoRaWAN L2 1.0.4](https://resources.lora-alliance.org/technical-specifications/ts001-1-0-4-lorawan-l2-1-0-4-specification) y el estándar de Parámetros Regionales [RP2-1.0.3](https://resources.lora-alliance.org/technical-specifications/rp2-1-0-3-lorawan-regional-parameters).

Aprende más sobre [LoRa Basics Modem](https://www.semtech.com/products/wireless-rf/lora-basics-modem) aquí.
:::

<br />

#### 4.1. Enlace Ascendente Periódico LoRaWAN

Esta aplicación demuestra cómo configurar y ejecutar un dispositivo LoRaWAN usando la pila LoRa Basics Modem (LBM). Soporta `enlaces ascendentes automáticos periódicos`, `enlaces ascendentes manuales activados por botón`, y `recepción de enlaces descendentes`, convirtiéndolo en un prototipo ideal para la validación de funciones básicas de LoRaWAN.

**Características Principales**
- **Unión a Red LoRaWAN:** Soporta únicamente unión a red **OTAA** (Activación Over-The-Air).
- **Enlaces Ascendentes Periódicos:** Enlaces ascendentes automáticos configurables cada 60 segundos por defecto en `FPort 101`.
- **Enlaces Ascendentes Activados por Botón:** Transmisión manual de enlace ascendente activada por presión de botón en `FPort 102`.
- **Recepción de Enlaces Descendentes:** Recibe y procesa mensajes de enlace descendente.
- **Múltiples Regiones LoRaWAN:** Soporte para múltiples regiones incluyendo EU868, US915 y CN470.
- **Soporte de TX Relay:** Capacidad opcional de transmisión relay LoRaWAN.
- **Modo de Bajo Consumo:** Configuración optimizada para energía opcional disponible.

**Prerrequisitos**

- Una cuenta de **red LoRaWAN** (The Things Network, ChirpStack, etc.)
- **Credenciales** LoRaWAN válidas: `DevEUI`, `JoinEUI`, `AppKey`
- Una **puerta de enlace LoRaWAN** compatible dentro del rango

**Configurar Credenciales LoRaWAN**

:::note
Aquí usamos The Thing Network como ejemplo. Puedes elegir tu LNS preferido si es necesario.
:::

- **Paso 1.** Visita el sitio web de [The Things Network](https://www.thethingsnetwork.org) y regístrate para una nueva cuenta.

- **Paso 2.** Después de iniciar sesión, haz clic en tu perfil y selecciona **Console**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3.** Selecciona un clúster para comenzar a agregar puertas de enlace y dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_cluster.png" style={{width:600, height:'auto'}}/></div>

<br />

:::note
Para un despliegue rápido de redes de cobertura LoRaWAN en tu sitio, consulta nuestra [puerta de enlace interior LoRaWAN multiplataforma SenseCAP M2](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) lista para usar.
:::

- **Paso 4.** Haz clic en **Applications** en el panel, luego haz clic en **Add application**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_add_application.png" style={{width:600, height:'auto'}}/></div>

- **Paso 5.** Completa **Application ID** luego haz clic en **Create application**.

- **Paso 6.** Haz clic en la aplicación creada y elige **End devices** en el panel, luego haz clic en **Register end device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_add_device.png" style={{width:600, height:'auto'}}/></div>

- **Paso 7.** Elige **Manually** para ingresar las credenciales de registro manualmente.

- **Paso 8.** Selecciona el **Frequency plan** según tu región. También asegúrate de usar la misma frecuencia que la puerta de enlace a la cual conectarás este dispositivo. Selecciona **LoRaWAN Specification 1.0.4** como la **LoRaWAN version** y **RP002 Regional Parameters 1.0.3** como la **Regional Parameters version**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_register_device_1.png" style={{width:500, height:'auto'}}/></div>

- **Paso 9.** Configura el **JoinEUI**, **DevEUI** y **AppKey** según tus propias necesidades. Estas credenciales se usarán posteriormente para la configuración del dispositivo final. Elige un **End device ID** para el dispositivo registrado, luego haz clic en **Register end device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_register_device_2.png" style={{width:500, height:'auto'}}/></div>

- **Paso 10.** Edita el archivo `boards/user_keys.overlay` y reemplaza los valores de marcador de posición con tus credenciales reales:

```dts
/ {
    zephyr,user {
        user-lorawan-device-eui = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-join-eui = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-gen_app-key = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
                                   0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-app-key = <0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00
                               0x00 0x00 0x00 0x00 0x00 0x00 0x00 0x00>;
        user-lorawan-region = "EU_868";
    };
};
```

Elige el código de región apropiado de la lista soportada, y actualiza el `user-lorawan-region` en el `user_keys.overlay`:

<table class="tg">
<thead>
<tr>
<th class="tg-6cwf">Código de Región</th><th class="tg-6cwf">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-g9rn">EU_868</td>
<td class="tg-g9rn">Europa 868 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">US_915</td>
<td class="tg-g9rn">América del Norte 915 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP1</td>
<td class="tg-g9rn">Asia-Pacífico 923 MHz (GRP1)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP2</td>
<td class="tg-g9rn">Asia-Pacífico 923 MHz (GRP2)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP3</td>
<td class="tg-g9rn">Asia-Pacífico 923 MHz (GRP3)</td>
</tr>
<tr>
<td class="tg-g9rn">AS_923_GRP4</td>
<td class="tg-g9rn">Asia-Pacífico 923 MHz (GRP4)</td>
</tr>
<tr>
<td class="tg-g9rn">AU_915</td>
<td class="tg-g9rn">Australia 915 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">CN_470</td>
<td class="tg-g9rn">China 470 MHz (RP2)</td>
</tr>
<tr>
<td class="tg-g9rn">CN_470_RP_1_0</td>
<td class="tg-g9rn">China 470 MHz (RP1)</td>
</tr>
<tr>
<td class="tg-g9rn">IN_865</td>
<td class="tg-g9rn">India 865 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">KR_920</td>
<td class="tg-g9rn">Corea del Sur 920 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">RU_864</td>
<td class="tg-g9rn">Rusia 864 MHz</td>
</tr>
<tr>
<td class="tg-g9rn">WW_2G4</td>
<td class="tg-g9rn">WW 2.4 GHz</td>
</tr>
</tbody>
</table>

<br />

**Compilar Versión Estándar:**

```shell
# Enable full logging and debug capabilities
west build --pristine --board xiao_nrf54l15/nrf54l15/cpuapp --shield semtech_loraplus_expansion_board --shield semtech_wio_lr2021 usp_zephyr/samples/usp/lbm/periodical_uplink
```

**Compilar Versión de Bajo Consumo:**

```shell
# Power-optimized with minimal logging features
west build --pristine --board xiao_nrf54l15/nrf54l15/cpuapp --shield semtech_loraplus_expansion_board --shield semtech_wio_lr2021 usp_zephyr/samples/usp/lbm/periodical_uplink -- -DCONF_FILE=prj_lowpower.conf
```



Si el proceso de compilación es exitoso, deberías ver información de compilación y construcción de Zephyr como se muestra a continuación:

```shell
...
-- Zephyr version: 4.2.0 (/Users/admin/zephyr_workspace/zephyr), build: v4.2.0
[248/248] Linking C executable zephyr/zephyr.elf
Memory region         Used Size  Region Size  %age Used
           FLASH:      257576 B      1428 KB     17.61%
             RAM:       40292 B       188 KB     20.93%
        IDT_LIST:          0 GB        32 KB      0.00%
Generating files from /Users/admin/zephyr_workspace/build/zephyr/zephyr.elf for board: xiao_nrf54l15
```

**Flashear el Dispositivo:**

```shell
# Flash the firmware to the board
west flash
```
**Monitorear la Salida de la Consola Serie:**

Conecta un monitor serie (screen, PuTTY, etc.) para ver los registros. Aquí usamos la aplicación Terminal integrada `screen` para demostrar:

```shell
# Unplug the XIAO-nRF54L15
# Use ls /dev/tty.* command to list current ports
ls /dev/tty.*
```

```shell
# Plug in the Type-c cable and run the ls /dev/tty.* command again
/dev/tty.Bluetooth-Incoming-Port	/dev/tty.usbmodemB141F6A13
/dev/tty.debug-console			/dev/tty.wlan-debug
```

Aquí, encontramos la nueva entrada `/dev/tty.usbmodemB141F6A13`, que es el puerto para nuestra placa de desarrollo.

```shell
# Connect to the device with screen
# The default baud rate is 115200
screen /dev/tty.usbmodemB141F6A13 115200
```

Ahora la salida serie aparecerá en el terminal, desde donde puedes monitorear los registros de salida del kit. Para salir de la sesión `screen`, presiona `Ctrl + A`, luego `Ctrl + \`.

<br />

**Unirse al LNS:**

<details>
<summary>Salida: Inicio y Unión al LNS</summary>

```shell
[00:00:00.046,323] <inf> lorawan: smtc_modem_join_network
[00:00:00.046,388] <inf> lorawan:  Start a new join sequence in 5 seconds on stack 0
[00:00:05.057,559] <inf> lorawan: DevEUI
                                  70 b3 d5 7e d0 07 44 86                          |p..~..D.         
[00:00:05.057,586] <inf> lorawan: JoinEUI
                                  00 00 00 00 00 00 00 00                          |........         
[00:00:05.057,624] <inf> lorawan: DevNonce 0x1d2, stack_id 0
...
[00:00:12.433,537] <inf> usp: Event received: JOINED
[00:00:12.433,543] <inf> usp: Modem is now joined 
[00:00:12.433,568] <inf> lorawan: add send task
[00:00:12.438,666] <inf> lorawan:  User LoRaWAN tx on FPort 101
```

</details>

- **Enlace Ascendente Periódico:** El dispositivo sube datos una vez por minuto usando un contador que se incrementa comenzando desde `01` en `FPort 101`. Puedes monitorear los datos en tiempo real en la consola como se muestra a continuación:

<details>
<summary>Salida: Enlace Ascendente Periódico</summary>

```shell
[00:00:18.811,852] <inf> lorawan:   *************************************
[00:00:18.811,879] <inf> lorawan:   *  TX DONE
[00:00:18.811,896] <inf> lorawan:   *************************************
[00:00:18.811,984] <inf> lorawan: 

[00:00:18.812,016] <inf> lorawan:   Open Rx1 for Hook Id = 4
[00:00:18.812,072] <inf> lorawan:   RX1 LoRa at 23841 ms: freq:867300000, SF12, BW125, sync word = 0x34
[00:00:18.812,102] <inf> lorawan:   Timer will expire in 5030 ms
[00:00:24.041,328] <inf> lorawan: 

[00:00:24.041,357] <inf> lorawan:   *************************************
[00:00:24.041,389] <inf> lorawan:   * RX1 Timeout for stack_id = 0
[00:00:24.041,407] <inf> lorawan:   *************************************
[00:00:24.041,498] <inf> lorawan: 

[00:00:24.041,530] <inf> lorawan:   Open Rx2 for Hook Id = 4
[00:00:24.041,585] <inf> lorawan:   RX2 LoRa at 24813 ms: freq:869525000, SF9, BW125, sync word = 0x34
[00:00:24.041,614] <inf> lorawan:   Timer will expire in 772 ms
[00:00:24.839,344] <inf> lorawan: 

[00:00:24.839,363] <inf> lorawan:   *************************************
[00:00:24.839,408] <inf> lorawan:   * RX2 Timeout for stack_id = 0
[00:00:24.839,426] <inf> lorawan:   *************************************
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_periodical_uplink.png" style={{width:600, height:'auto'}}/></div>

<br />

**Uplink Activado por Botón:** Cada presión del `user_key` activa un uplink de datos inmediato, incrementando el contador en `1` en `FPort 102`. Los reportes activados por botón no afectan el tiempo de los reportes periódicos.

<details>
<summary>Salida: Uplink Activado por Botón</summary>

```shell
[00:01:43.010,970] <inf> usp: Button pushed
[00:01:43.011,015] <inf> lorawan: add send task
[00:01:43.011,449] <inf> lorawan:  User LoRaWAN tx on FPort 102
[00:01:43.011,489] <inf> lorawan: 

[00:01:43.011,507] <inf> lorawan:   *************************************
[00:01:43.011,536] <inf> lorawan:   * Send Payload  for stack_id = 0
[00:01:43.011,553] <inf> lorawan:   *************************************
[00:01:43.011,627] <inf> lorawan:   Tx  LoRa at 107167 ms: freq:867100000, SF12, BW125, len 17 bytes 14 dBm, fcnt_up 4, toa = 1319
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_button_uplink.png" style={{width:600, height:'auto'}}/></div>

<br />

**Downlink Programado:** Programa un paquete downlink desde TTN en la opción `Messaging`. Especifica el puerto de trama (`FPort 1`) y el contenido de datos (`AA BB CC DD`), luego haz clic en **Schedule downlink**. Puedes observar que la carga útil ahora está esperando en la cola, una vez que llegue el próximo uplink, el paquete downlink será enviado por el servidor de red y recibido por el dispositivo.

<details>
<summary>Salida: Recepción de Downlink</summary>

```shell
[00:02:14.666,960] <inf> lorawan:   Open Rx1 for Hook Id = 4
[00:02:14.667,016] <inf> lorawan:   RX1 LoRa at 139695 ms: freq:867100000, SF12, BW125, sync word = 0x34
[00:02:14.667,046] <inf> lorawan:   Timer will expire in 5029 ms
[00:02:20.837,445] <inf> lorawan: 

[00:02:20.837,477] <inf> lorawan:   *************************************
[00:02:20.837,523] <inf> lorawan:   * Receive a Valid downlink Rx1 for stack_id = 0, rssi: -121 dBm, snr: -9 dB
[00:02:20.837,540] <inf> lorawan:   *************************************
[00:02:20.837,594] <inf> usp: Event received: DOWNDATA
[00:02:20.837,625] <inf> usp: Event received: TXDONE
[00:02:20.837,630] <inf> usp: Transmission done 
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_downlink_config.png" style={{width:600, height:'auto'}}/></div>

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/image/TTN_downlink_payload.png" style={{width:600, height:'auto'}}/></div>


## Recursos

### Semtech LR2021

- **[PDF]** [Hoja de Datos Semtech LR2021](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/RQ00000BIigz/OP1EbZuxbCU2JJQ7kD9ooPlC8c0u0TFp3e0WDJ5yrNQ)

- **[PDF]** [Esquemático Semtech LR2021_EU868/US915](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR2021WIO1XDCS_Wio-LR2021_e769v02a_868_915_sch_layout.pdf)

- **[PDF]** [Esquemático Semtech LR2021_CN490](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR2021WIO1XGCS_Wio_LR2021_e768v02a_490_sch_layout.pdf)

### Placa de Expansión

- **[PDF]** [Esquemático de la Placa de Expansión](https://files.seeedstudio.com/wiki/Semtech_LR2021_EVK/res/LR20xx_XIAO_LoRa_Plus_Expansion_Board_e758v03a_sch_layout.pdf)

### Seeed Studio XIAO nRF54L15

- **[PDF]** [Esquemático Seeed Studio XIAO nRF54L15](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_Schematic.pdf)

- **[ZIP]** [Librerías KiCAD Seeed Studio XIAO nRF54L15](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15_KICAD.zip)

- **[DXF]** [Dimensiones Seeed Studio XIAO nRF54L15 en DXF](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nRF54L15(Sense)_DXF.zip)

- **[XLSX]** [Hoja de pines Seeed Studio XIAO nRF54L15](https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/XIAO_nRF54L15datasheet.xlsx)


## Certificados



## Soporte Técnico y Discusión de Productos

Por favor envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
