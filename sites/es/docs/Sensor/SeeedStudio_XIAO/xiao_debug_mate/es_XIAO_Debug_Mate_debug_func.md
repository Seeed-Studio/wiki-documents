---
description: Este artículo explica cómo utilizar la función de depuración DAPLink del XIAO Debug Mate.
title: Depurador DAPLink
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/15.webp
slug: /xiao_debug_mate_debug
sku: 109990585
sidebar_position: 2
last_update:
  date: 10/22/2025
  author: Citric
createdAt: '2025-10-30'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/xiao_debug_mate_debug/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/15.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducion

Bienvenido al manual de usuario oficial para la funcionalidad DAPLink del XIAO Debug Mate. Esta guía completa está diseñada para ayudar tanto a principiantes como a usuarios avanzados a desbloquear todo el potencial de su XIAO Debug Mate para tareas de depuración profesional. Aquí aprenderás cómo conectar, configurar y operar el depurador DAPLink, comprender las herramientas de software esenciales y seguir las mejores prácticas para garantizar una experiencia de depuración fluida y productiva con una amplia gama de placas de desarrollo de la serie XIAO. Tanto si estás solucionando problemas de firmware complejo como si estás optimizando tu flujo de trabajo de desarrollo, este documento proporciona instrucciones claras paso a paso, consejos y explicaciones técnicas detalladas para respaldar tus proyectos de principio a fin.


## Explicación de algunos conceptos de depuración

Para utilizar eficazmente la funcionalidad DAPLink del XIAO Debug Mate, es útil comprender los componentes de software clave y los protocolos que trabajan juntos para hacer posible la depuración. A continuación se muestra un desglose de cada concepto y cómo se relacionan entre sí.

### GDB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/gdb.png" style={{width:800, height:'auto'}}/></div>

**[GDB](https://www.sourceware.org/gdb/)**, el depurador del Proyecto GNU, es el motor central del proceso de depuración. Es una potente herramienta de línea de comandos que se ejecuta en tu ordenador host (PC). GDB es responsable de controlar la ejecución de tu programa en el microcontrolador de destino. Te permite:
*   Iniciar y detener tu programa.
*   Establecer puntos de interrupción para pausar la ejecución en líneas específicas de código.
*   Avanzar por tu código línea por línea.
*   Inspeccionar los valores de las variables y el contenido de los registros de memoria.

La mayoría de los Entornos de Desarrollo Integrados (IDE) modernos como VS Code (con PlatformIO) o Eclipse proporcionan una interfaz gráfica de usuario que actúa como front-end para GDB, traduciendo tus clics en comandos de GDB.

### OpenOCD/PyOCD

**[OpenOCD](https://openocd.org/)** (Open On-Chip Debugger) y **[PyOCD](https://pyocd.io/)** son aplicaciones "servidor" esenciales que se ejecutan en tu ordenador host. Actúan como un puente o traductor entre los comandos de alto nivel de GDB y las señales de bajo nivel requeridas por la sonda de depuración física (en este caso, el XIAO Debug Mate).

Cuando GDB emite un comando como "read the value of variable `x`", OpenOCD recibe este comando, lo traduce en una secuencia de instrucciones que la sonda de depuración entiende y envía estas instrucciones a la sonda a través de USB.

### DAPLink

**[DAPLink](https://github.com/ARMmbed/DAPLink)** es el firmware de código abierto que se ejecuta en el microcontrolador ESP32-S3 del XIAO Debug Mate. Este firmware convierte el Debug Mate en una sonda de depuración totalmente funcional. Su tarea principal es implementar el protocolo CMSIS-DAP, lo que le permite recibir comandos de depuración desde un ordenador host a través de USB e interactuar físicamente con los pines de depuración (SWD) del chip de destino. En esencia, DAPLink es el "agente" en el dispositivo que ejecuta las órdenes enviadas por OpenOCD.

### CMSIS-DAP

**[CMSIS-DAP](https://github.com/ARM-software/CMSIS-DAP)** (Cortex Microcontroller Software Interface Standard - Debug Access Port) es un protocolo estandarizado que define cómo se comunica un ordenador host con una sonda de depuración a través de USB. Debido a que el firmware DAPLink del XIAO Debug Mate se adhiere a este estándar, es instantáneamente compatible con una amplia gama de herramientas estándar de la industria como OpenOCD, PyOCD y Keil MDK, sin necesidad de controladores o software propietarios.

### Telnet

**Telnet** es un protocolo de red sencillo basado en texto. En el contexto de la depuración, OpenOCD suele abrir un servidor Telnet en un puerto específico (normalmente el puerto 4444). Esto proporciona una interfaz de línea de comandos directa y legible para humanos al propio servidor OpenOCD. Mientras que GDB se utiliza para la depuración a nivel de aplicación, la interfaz Telnet es útil para tareas avanzadas como configurar OpenOCD, inspeccionar el estado de la sonda de depuración o emitir comandos de reinicio de bajo nivel.

### Cómo funcionan juntos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/36.png" style={{width:1000, height:'auto'}}/></div>

Aquí tienes un resumen de toda la cadena de depuración, desde tu IDE hasta el XIAO de destino:

1.  **Tú** (en tu IDE) haces clic en "Start Debugging".
2.  El **IDE** lanza **GDB** con el archivo de programa correspondiente.
3.  **GDB** se conecta al servidor **OpenOCD** que se ejecuta en tu PC.
4.  **OpenOCD** detecta el **XIAO Debug Mate** conectado por USB. Se comunica con el dispositivo utilizando el protocolo **CMSIS-DAP**.
5.  El firmware **DAPLink** en el Debug Mate recibe estos comandos CMSIS-DAP.
6.  **DAPLink** traduce estos comandos en señales eléctricas en los pines **SWD** (Serial Wire Debug) (SWDIO y SWCLK).
7.  Estas señales SWD controlan directamente el **núcleo ARM Cortex** dentro del XIAO de destino, lo que permite a OpenOCD y GDB pausar la CPU, leer la memoria y realizar todas las demás acciones de depuración.

En resumen: **GDB** es el comandante, **OpenOCD** es el traductor, **CMSIS-DAP** es el idioma que hablan y **DAPLink** es el soldado sobre el terreno que ejecuta las órdenes.

## Primeros pasos con la depuración

### Comprobación de compatibilidad

El XIAO Debug Mate está diseñado para todo el ecosistema XIAO, pero la función de depuración DAPLink es específica para núcleos ARM Cortex-M. Sin embargo, las funciones de monitorización UART y de energía son universalmente compatibles, ya que son independientes de la arquitectura. Consulta la tabla siguiente para obtener información detallada sobre la compatibilidad.

<div class="table-center">

<table align="center">

<tr>

<th>Modelo XIAO</th>

<th>Arquitectura del núcleo</th>

<th>Depuración DAPLink</th>

<th>Monitor UART</th>

<th>Analizador de energía</th>

</tr>

<tr>

<td>XIAO SAMD21</td>

<td>ARM Cortex-M0+</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RP2040</td>

<td>ARM Cortex-M0+</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RP2350</td>

<td>ARM Cortex-M33</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO nRF52840</td>

<td>ARM Cortex-M4</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO RA4M1</td>

<td>ARM Cortex-M4</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO MG24</td>

<td>ARM Cortex-M33</td>

<td>✅</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO nRF54L15</td>

<td>ARM Cortex-M33</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C3</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C5</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-C6</td>

<td>RISC-V</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>XIAO ESP32-S3</td>

<td>Xtensa LX7</td>

<td>❌</td>

<td>✅</td>

<td>✅</td>

</tr>

</table>

</div>

Conecta un cable de datos USB directamente al XIAO ESP32-C6 para utilizar su USB JTAG integrado para puntos de interrupción por hardware. Para sketches de Arduino en Visual Studio, consulta la [guía de puntos de interrupción por hardware de Visual Micro](https://www.visualmicro.com/page/XIAO-ESP32-C6-Visual-Studio.aspx#hardware-breakpoint).

### Preparación del software

Antes de poder empezar a depurar, debes configurar tu ordenador host con el software necesario.

#### Instalar OpenOCD

:::tip
Verificado: Utiliza la versión 0.12.0-7 de OpenOCD o posterior.
:::

Para garantizar la compatibilidad y tener acceso a las funciones más recientes, recomendamos encarecidamente utilizar la versión **xPack** de OpenOCD. Los gestores de paquetes del sistema (como Homebrew en macOS o APT en Linux) a menudo proporcionan versiones antiguas y obsoletas que pueden no funcionar correctamente con los objetivos modernos.

:::tip Nota sobre PlatformIO
Si utilizas VS Code con la extensión PlatformIO, PlatformIO descargará y configurará automáticamente la versión correcta de OpenOCD para tu proyecto cuando inicies una sesión de depuración.
:::

<Tabs>
<TabItem value="Windows" label="Windows" default>

En Windows, el método de instalación manual es sencillo.

1.  **Descargar el paquete de OpenOCD**

Ve a la [página de lanzamientos de xPack OpenOCD](https://github.com/xpack-dev-tools/openocd-xpack/releases). La versión más reciente siempre aparece en la parte superior. Busca la versión para Windows (por ejemplo, `xpack-openocd-...-win32-x64.zip`) en el lanzamiento superior y descarga este archivo.

2.  **Extraer los archivos**

Haz clic derecho en el archivo ZIP descargado y selecciona "Extract All...". Elige una ubicación estable, como `C:\Users\YourName\AppData\Local\xPacks\OpenOCD`. Después de la extracción, tendrás una carpeta como `xpack-openocd-0.12.0-7` que contiene un directorio `bin`.

3.  **Añadir OpenOCD a tu PATH del sistema**

Esto te permite ejecutar `openocd` desde cualquier terminal.

    - Busca "Environment Variables" en el Menú Inicio y selecciona "Edit the system environment variables".
    - Haz clic en **"Environment Variables..."**.
    - En "System variables", selecciona la variable **"Path"** y haz clic en **"Edit..."**.
    - Haz clic en **"New"** y pega la ruta completa al directorio `bin` que extrajiste antes. Por ejemplo:  
      `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`
    - Haz clic en OK en todas las ventanas para guardar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_3.png" style={{width:1000, height:'auto'}}/></div>

4.  **Verificar la instalación**

Abre una ventana **nueva** de Command Prompt o PowerShell y ejecuta:

```bash
openocd --version
```

Si la instalación se realizó correctamente, verás la información de la versión impresa (por ejemplo, `xPack Open On-Chip Debugger 0.12.0+dev-02228`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_4.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">

Este proceso refleja la configuración manual en Windows.

1.  **Descargar el paquete de OpenOCD**

Ve a la [página de lanzamientos de xPack OpenOCD](https://github.com/xpack-dev-tools/openocd-xpack/releases). Busca la versión más reciente y descarga el archivo correcto para tu Mac (por ejemplo, `...-darwin-x64.tar.gz` para Intel o `...-darwin-arm64.tar.gz` para Apple Silicon).

2.  **Extraer los archivos**

Abre una Terminal y ejecuta los siguientes comandos. Crearemos una ubicación estándar en tu directorio personal.

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder (or wherever you saved the file)
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **Añadir OpenOCD a tu PATH**

Necesitas indicarle a tu shell dónde encontrar el ejecutable `openocd`. El shell predeterminado en las versiones modernas de macOS es Zsh.

```bash
# Add the path to your .zshrc file (for Zsh)
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.zshrc
```

:::note
Asegúrate de reemplazar `xpack-openocd-0.12.0-7` con el nombre real de la carpeta que se creó. Si usas Bash, edita `~/.bash_profile` en lugar de `~/.zshrc`.
:::

4.  **Aplicar y verificar**

El cambio en el `PATH` que realizaste no está activo en tu sesión actual de la terminal hasta que se recargue el archivo de configuración.

Ejecuta el siguiente comando en tu terminal actual:

```bash
# For Zsh (default on modern macOS)
source ~/.zshrc
```

Ahora, verifica la instalación ejecutando:

```bash
openocd --version
```

Deberías ver la información correcta de la versión de xPack.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_5.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
<TabItem value="Linux" label="Linux">

Este proceso refleja la configuración manual en otros sistemas operativos.

1.  **Descargar el paquete de OpenOCD**

Ve a la [página de lanzamientos de xPack OpenOCD](https://github.com/xpack-dev-tools/openocd-xpack/releases). Busca la versión más reciente y descarga el archivo para Linux (`...-linux-x64.tar.gz`).

2.  **Extraer los archivos**

Abre una Terminal y ejecuta los siguientes comandos.

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **Añadir OpenOCD a tu PATH**

Necesitas indicarle a tu shell dónde encontrar el ejecutable `openocd`. La mayoría de las distribuciones Linux usan el shell Bash.

```bash
# Add the path to your .bashrc file
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.bashrc
```

:::note
Asegúrate de reemplazar `xpack-openocd-0.12.0-7` con el nombre real de la carpeta que se creó.
:::

4.  **Aplicar y verificar**

El cambio en el `PATH` que realizaste no está activo en tu sesión actual de la terminal hasta que se recargue el archivo de configuración.

Ejecuta el siguiente comando en tu terminal actual:

```bash
# For Bash (default on most Linux distros)
source ~/.bashrc
```

Ahora, verifica la instalación ejecutando:

```bash
openocd --version
```

Deberías ver la información correcta de la versión de xPack.

</TabItem>
</Tabs>

#### Instalar PyOCD

:::info
Si tienes la intención de usar la función de flasheo de firmware para XIAO RA4M1, es posible que necesites consultar los pasos aquí para descargar y usar adicionalmente PyOCD.
:::

PyOCD es una herramienta basada en Python para programar y depurar microcontroladores Arm Cortex-M.

<Tabs>
<TabItem value="Windows" label="Windows" default>

1.  **Requisitos previos**
    Asegúrate de tener **Python** instalado en tu sistema. Si no es así, descárgalo desde la página oficial [python.org](https://www.python.org/) y asegúrate de marcar la casilla **"Add Python to PATH"** durante la instalación.

2.  **Instalar PyOCD**
    Abre una ventana de Command Prompt o PowerShell y ejecuta el siguiente comando:

    ```bash
    pip install -U pyocd
    ```

3.  **Instalar el paquete de soporte para XIAO RA4M1**
    El XIAO RA4M1 utiliza el chip `R7FA4M1AB`. Necesitas instalar el paquete de soporte específico para que PyOCD lo reconozca.

    Busca el paquete para confirmar su disponibilidad:
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    Instala el paquete:
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **Verificar objetivos**
    Comprueba si ahora se reconoce el objetivo:
    ```bash
    pyocd list --targets
    ```
    Deberías ver `r7fa4m1ab` en la lista.

</TabItem>
<TabItem value="MacOS" label="MacOS">

1.  **Requisitos previos**
    MacOS suele venir con Python, pero se recomienda usar Homebrew o el instalador oficial para obtener la última versión. Abre tu Terminal.

2.  **Instalar PyOCD**
    Ejecuta el siguiente comando en tu Terminal:

    ```bash
    pip3 install -U pyocd
    ```

3.  **Instalar el paquete de soporte para XIAO RA4M1**
    El XIAO RA4M1 utiliza el chip `R7FA4M1AB`. Necesitas instalar el paquete de soporte específico.

    Busca el paquete:
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    Instala el paquete:
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **Verificar objetivos**
    Comprueba si se reconoce el objetivo:
    ```bash
    pyocd list --targets
    ```

</TabItem>
<TabItem value="Linux" label="Linux">

1.  **Requisitos previos**
    Asegúrate de que `python3` y `pip` estén instalados mediante tu gestor de paquetes (por ejemplo, `sudo apt install python3-pip` en Ubuntu).

    :::note Permisos USB
    En Linux, también puede que necesites configurar reglas udev para permitir el acceso al dispositivo USB sin usar `sudo`.
    :::

2.  **Instalar PyOCD**
    Ejecuta el siguiente comando en tu Terminal:

    ```bash
    pip3 install -U pyocd
    ```

3.  **Instalar el paquete de soporte para XIAO RA4M1**
    El XIAO RA4M1 utiliza el chip `R7FA4M1AB`.

    Busca el paquete:
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    Instala el paquete:
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **Verificar objetivos**
    Comprueba si se reconoce el objetivo:
    ```bash
    pyocd list --targets
    ```

</TabItem>
</Tabs>


#### Comprender el paquete `XIAO_Debug_Mate_DAPLink_Package`

Antes de poder empezar a usar la función de DAPLink Debugger, tendrás que descargar el archivo ZIP por separado. Este archivo contiene todos los archivos necesarios para depurar varias placas XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descargar archivo ZIP</font></span></strong>
    </a>
</div>


##### Explicación de la estructura de directorios

Después de descomprimir el archivo, verás la siguiente estructura de carpetas. Cada parte tiene un propósito específico:

```
XIAO_Debug_Mate_DAPLink_Package/
├── examples/
│   ├── Blink_nrf52840.elf
│   ├── Blink_SAMD21.bin
│   └── ... (other example firmwares)
├── target/
│   ├── XIAO_RA4M1/
│   │   └── ra4m1.cfg
│   └── XIAO_SAMD21/
│       └── at91samd21g18.cfg
├── XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/
│   ├── bin/
│   │   └── openocd
│   └── share/
│       └── ... (OpenOCD scripts)
└── XIAO_MG24_Win_OpenOCD-v0.12.0/
    ├── bin/
    │   └── openocd.exe
    └── share/
        └── ... (OpenOCD scripts)
```

*   **`examples/`**
    Esta carpeta contiene archivos de firmware de ejemplo precompilados (por ejemplo, `.bin`, `.elf`, `.hex`) para varias placas XIAO, que fueron exportados desde Arduino. Se utilizarán en tutoriales posteriores para demostrar cómo flashear y depurar los microcontroladores.

*   **`target/`**
    Esta carpeta contiene archivos de configuración de destino (`.cfg`) para placas XIAO que podrían faltar en la distribución oficial de OpenOCD. Cuando uses placas como la XIAO SAMD21 o XIAO RA4M1 con la instalación existente de OpenOCD de tu sistema, necesitarás añadir manualmente estos archivos de configuración a tu entorno de OpenOCD. Los pasos específicos sobre cómo hacerlo se explicarán más adelante.

*   **`XIAO_MG24_..._OpenOCD-v0.12.0/`**
    Este es un componente especial y muy importante para la placa **XIAO MG24**. Actualmente, el soporte para este chip no está disponible en las versiones oficiales de OpenOCD ni en las distribuciones estándar de xPack. Para resolver esto, proporcionamos paquetes completos e independientes de OpenOCD tanto para Windows (`XIAO_MG24_Win_...`) como para macOS/Linux (`XIAO_MG24_Mac_Linux_...`). Cuando trabajes con la XIAO MG24, **debes** usar el ejecutable `openocd` proporcionado dentro de estas carpetas específicas.

### Preparación de hardware

Conectar tu hardware para depuración es sencillo.

#### Para placas XIAO

:::tip
En términos generales, todas las funciones de XIAO en Debug Mate no requieren una fuente de alimentación adicional para XIAO, a menos que se especifique lo contrario.
:::

El XIAO Debug Mate está diseñado para ofrecer una experiencia fluida de conectar y usar con todas las placas XIAO de Seeed Studio.

1.  Toma tu placa XIAO y alinéala con los headers hembra en el Debug Mate.
2.  **Asegúrate de que el puerto USB-C en la XIAO mire en la misma dirección que el puerto USB-C en el Debug Mate.**
3.  Presiona firmemente la XIAO hacia abajo en el zócalo hasta que quede completamente asentada. Esto garantiza que los pines pogo en el Debug Mate hagan una conexión sólida con las almohadillas SWD en la parte inferior de la XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

:::note
Algunas de las primeras placas XIAO, como **XIAO SAMD21**, **XIAO RP2040** y **XIAO nRF52840**, se diseñaron antes de que se estableciera un estándar unificado para las almohadillas de la parte posterior. Aunque los pines pogo del Debug Mate están colocados para ser lo más compatibles posible, ligeras variaciones en estas placas más antiguas pueden provocar un contacto imperfecto.

Si experimentas una conexión de depuración inestable, intenta **ajustar ligeramente la posición** de la placa XIAO dentro del zócalo. Puede que no sea necesario empujarla hasta el fondo. Un pequeño desplazamiento a menudo puede garantizar que los pines pogo hagan buen contacto con las almohadillas SWD en la parte posterior de la XIAO.
:::

:::danger hot-swapping
¡Desaconsejamos encarecidamente intercambiar en caliente la XIAO y el Debug Mate!
:::

#### Para Otras Placas de Desarrollo

También puedes usar el XIAO Debug Mate como una sonda de depuración SWD genérica para otras placas de desarrollo basadas en ARM.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/16.jpg" style={{width:800, height:'auto'}}/></div>

1.  Necesitarás cuatro cables DuPont (hembra a macho o hembra a hembra, según tu placa de destino).
2.  Localiza los pines de depuración SWD en tu placa de destino. Normalmente están etiquetados como `SWDIO`, `SWCLK`, `GND` y, a veces, `VTref` o `VCC`.
3.  Conecta los cables desde los encabezados de expansión del XIAO Debug Mate a tu placa de destino de la siguiente manera:

| Pin de XIAO Debug Mate | Pin de la placa de destino | Descripción                               |
| :--------------------- | :------------------------- | :---------------------------------------- |
| `SWDIO`                | `SWDIO`                    | Entrada/Salida de Datos Serie (Serial Wire Data Input/Output)             |
| `SWCLK`                | `SWCLK`                    | Reloj de Línea Serie (Serial Wire Clock)                         |
| `GND`                  | `GND`                      | Tierra común                             |
| `VCC`                  | `VTref` o `3V3`            | Referencia de voltaje del objetivo (Importante para el cambio de nivel) |

Una vez conectado, puedes configurar OpenOCD para usar la interfaz CMSIS-DAP e iniciar tu sesión de depuración como lo harías con cualquier otra sonda.


## Interactuar con OpenOCD mediante Telnet

Aunque los IDE modernos proporcionan una interfaz gráfica para la depuración, a veces necesitas una forma más directa y de bajo nivel de interactuar con el depurador. Aquí es donde entra Telnet. OpenOCD ejecuta un servidor Telnet que te permite conectarte directamente y enviar comandos basados en texto para controlar el chip de destino. Esto es increíblemente útil para comprobaciones rápidas, scripts de tareas automatizadas o depurar problemas cuando un IDE completo no está disponible o no es necesario.

### Habilitar el Cliente Telnet

Antes de poder usar Telnet, puede que necesites habilitarlo en tu sistema operativo, ya que no siempre está instalado o habilitado por defecto.

<Tabs>
<TabItem value="Windows" label="Windows" default>

En los sistemas Windows modernos, el cliente Telnet es una función heredada que debe habilitarse manualmente.

1.  Pulsa `Win` + `R` para abrir el cuadro de diálogo "Run", escribe `control panel` y pulsa Enter.
2.  Ve a **Programs** > **Programs and Features**.
3.  En el lado izquierdo, haz clic en **Turn Windows features on or off**.
4.  En la nueva ventana que aparece, desplázate hacia abajo y encuentra **Telnet Client**.
5.  Marca la casilla junto a él y haz clic en **OK**. Windows instalará la función.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">
Es posible que el cliente Telnet nativo se haya eliminado en las versiones recientes de macOS. La forma más sencilla de instalarlo es usando [Homebrew]. Abre tu Terminal y ejecuta:
```bash
brew install telnet
```
</TabItem>
<TabItem value="Linux" label="Linux">
La mayoría de las distribuciones Linux incluyen un cliente Telnet. Si no está presente, puedes instalarlo fácilmente usando tu gestor de paquetes. Para sistemas basados en Debian/Ubuntu, abre una terminal y ejecuta:
```bash
sudo apt-get update
sudo apt-get install telnet
```
</TabItem>
</Tabs>

### Depuración Paso a Paso con Telnet

#### Paso 1: Ejecutar el Servidor OpenOCD

Encuentra tu placa XIAO en la lista siguiente y sigue las instrucciones específicas para tu sistema operativo para iniciar el servidor OpenOCD. Este proceso del servidor esperará una conexión de un depurador como GDB.

##### Para Seeed Studio XIAO SAMD21

El paquete estándar de OpenOCD no incluye el archivo de configuración para la XIAO SAMD21. Debes copiarlo manualmente desde nuestro paquete proporcionado al directorio de instalación de OpenOCD de tu sistema.

**1. Copiar el Archivo de Configuración**

*   **Archivo de origen:** Desde `XIAO_Debug_Mate_DAPLink_Package`, busca el archivo: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Carpeta de destino:** Copia este archivo en la carpeta de scripts `target` de tu instalación de xPack OpenOCD. La ruta variará según el sistema operativo:

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Sustituye `YourName` y `xpack-openocd-0.12.0-7` por tu nombre de usuario real y la versión de OpenOCD que instalaste.
:::

**2. Ejecutar el Comando de OpenOCD**

Abre una nueva terminal en cualquier lugar de tu sistema y ejecuta el comando correspondiente:

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg
    ```

---

##### Para Seeed Studio XIAO RP2040

La configuración para RP2040 está incluida en el xPack OpenOCD estándar. Abre una terminal y ejecuta el comando.

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000"
    ```

---

##### Para Seeed Studio XIAO RP2350

La configuración para RP2350 está incluida en el xPack OpenOCD estándar. Abre una terminal y ejecuta el comando.

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000"
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000"
    ```

---

##### Para Seeed Studio XIAO nRF52840

La configuración para nRF52 está incluida en el xPack OpenOCD estándar. Abre una terminal y ejecuta el comando.

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg
    ```

---

##### Para Seeed Studio XIAO RA4M1

Al igual que con la SAMD21, el paquete estándar de OpenOCD no incluye el archivo de configuración para la XIAO RA4M1. Debes copiarlo manualmente.

**1. Copiar el Archivo de Configuración**

*   **Archivo de origen:** Desde `XIAO_Debug_Mate_DAPLink_Package`, busca el archivo: `target/XIAO_RA4M1/ra4m1.cfg`.
*   **Carpeta de destino:** Copia este archivo en la carpeta de scripts `target` de tu instalación de xPack OpenOCD.

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Sustituye `YourName` y `xpack-openocd-0.12.0-7` por tu nombre de usuario real y la versión de OpenOCD que instalaste.
:::

**2. Ejecutar el Comando de OpenOCD**

Abre una nueva terminal en cualquier lugar de tu sistema y ejecuta el comando correspondiente:

*   **Windows:**
    ```bash
    openocd.exe -f interface/cmsis-dap.cfg -f target/ra4m1.cfg
    ```
*   **macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/ra4m1.cfg
    ```

---

##### Para Seeed Studio XIAO MG24

:::warning[Important]
La XIAO MG24 requiere una versión especial de OpenOCD que está incluida en `XIAO_Debug_Mate_DAPLink_Package`. **No** uses la instalación de OpenOCD de tu sistema. **Debes** ejecutar los comandos desde el directorio específico proporcionado en el paquete.
:::

**1. Preparar tu Terminal**

Abre tu herramienta de línea de comandos y navega a la carpeta correcta para tu sistema operativo dentro del paquete descomprimido.

*   **Windows:**
    ```bash
    # Example if you unzipped it on your Desktop:
    cd C:\Users\YourName\Desktop\XIAO_Debug_Mate_DAPLink_Package\XIAO_MG24_Win_OpenOCD-v0.12.0
    ```
*   **macOS / Linux:**
    ```bash
    # Example if you unzipped it on your Desktop:
    cd ~/Desktop/XIAO_Debug_Mate_DAPLink_Package/XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0
    ```

**2. Ejecutar el Comando de OpenOCD**

Una vez que estés dentro del directorio correcto, ejecuta el siguiente comando:

*   **Windows:**
    ```bash
    bin\openocd.exe -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "reset_config srst_nogate"
    ```
*   **macOS / Linux:**
    ```bash
    bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "reset_config srst_nogate"
    ```

#### Desglose del Comando

Entender qué hace cada parte del comando puede ayudarte a solucionar problemas o personalizar tu flujo de trabajo. Analicemos un comando típico:

`bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "..."`

*   `bin/openocd` (o `bin\openocd.exe`): Esto ejecuta el programa OpenOCD. Suponemos que se encuentra en un subdirectorio `bin`, lo cual es una convención estándar. El nombre y la extensión variarán según el sistema operativo.

*   `-s share/openocd/scripts`: La opción `-s` es crucial. Indica a OpenOCD dónde **b**uscar su biblioteca de scripts. Con esta ruta establecida, OpenOCD puede encontrar los archivos especificados por las opciones `-f`.

*   `-f interface/cmsis-dap.cfg`: La opción `-f` especifica un archivo de con**f**iguración que se va a cargar. Este primero define el adaptador de depuración que estamos usando (una sonda CMSIS-DAP estándar).

*   `-f target/rp2040.cfg`: Esta segunda opción `-f` carga la configuración para el microcontrolador de destino (el chip RP2040 en la placa XIAO).

*   `-c "..."`: La opción `-c` pasa un **c**omando a OpenOCD después de que se inicie.
    *   `adapter speed 5000`: (Para RP2040/RP2350) Establece la velocidad del reloj SWD a 5000 kHz para una comunicación estable.
    *   `reset_config srst_nogate`: (Para MG24) Una configuración de reinicio especial requerida para este objetivo específico.

Después de ejecutar uno de estos comandos, OpenOCD inicializará la conexión y esperará a que un depurador, como GDB, se conecte (normalmente en el puerto 3333). Luego puedes usar el depurador para cargar tu programa (`load <path/to/your/firmware.elf>`), establecer puntos de interrupción y depurar tu código.

#### Paso 2: Conectarse al servidor Telnet

Ahora, abre una ventana de Símbolo del sistema o Terminal **segunda y nueva**. Escribe el siguiente comando y pulsa Intro:

```bash
telnet localhost 4444
```

*   `localhost` se refiere a tu propio ordenador.
*   `4444` es el número de puerto predeterminado que OpenOCD utiliza para conexiones Telnet.

Si la conexión es correcta, tu terminal mostrará un mensaje de bienvenida de OpenOCD y verás un prompt `>`, listo para aceptar tus comandos.

#### Paso 3: Ejecutar comandos de depuración

Ahora puedes escribir comandos directamente en la sesión Telnet para controlar el chip de destino. Estos son algunos de los comandos más comunes:

| Command             | Description                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `init`              | **Inicializar objetivo.** Establece la conexión con el chip. Este siempre debe ser el primer comando que ejecutes después de conectarte.                               |
| `reset halt`        | **Reiniciar y detener.** Reinicia el microcontrolador e inmediatamente pausa (detiene) su ejecución. Esta es la forma principal de entrar en un estado listo para depurar. |
| `reg`               | **Mostrar registros.** Muestra los valores actuales de todos los registros de la CPU.                                                                                   |
| `mdw [address] [count]` | **Mostrar palabra de memoria.** Lee y muestra el contenido de la memoria. Por ejemplo, `mdw 0x20000000 10` mostrará 10 palabras (valores de 32 bits) empezando desde la dirección de memoria `0x20000000`. |
| `step`              | **Ejecución paso a paso.** Ejecuta una sola instrucción en la CPU. Si la instrucción es una llamada a función, avanzará *dentro* de la función.                        |
| `resume`            | **Reanudar ejecución.** Deja que el programa se ejecute libremente desde su estado actual. Continuará hasta que alcance un punto de interrupción (si hay alguno definido) o lo detengas de nuevo. |
| `exit`              | **Salir de Telnet.** Cierra la conexión Telnet y te devuelve a tu símbolo del sistema. El servidor OpenOCD en la otra ventana seguirá ejecutándose.                    |

Una sesión típica de depuración manual podría seguir estos pasos:
1.  Escribe `init` para conectarte al chip.
2.  Escribe `reset halt` para detener el programa desde el mismo inicio.
3.  Escribe `mdw 0x20000000 10` para inspeccionar algunos valores de la RAM.
4.  Escribe `step` unas cuantas veces para recorrer el código de inicio.
5.  Escribe `resume` para dejar que el programa se ejecute normalmente.
6.  Escribe `exit` cuando hayas terminado.

## Flashear el firmware usando OpenOCD/PyOCD

Más allá de la depuración interactiva, el XIAO Debug Mate destaca en la programación (flasheo) de firmware directamente en el microcontrolador de un XIAO usando herramientas de línea de comandos. Las herramientas principales para esto son **OpenOCD** (Open On-Chip Debugger) y **PyOCD**.

Esta guía te explicará cómo usar estas potentes herramientas para subir archivos de firmware precompilados. Usamos la designación "OpenOCD/PyOCD" porque la mayoría de las placas XIAO compatibles usan OpenOCD, mientras que la **XIAO RA4M1** requiere específicamente PyOCD para el flasheo.

### Compatibilidad de flasheo

Esta tabla resume qué placas XIAO y tipos de archivo son compatibles con el flasheo por línea de comandos con las herramientas proporcionadas.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Modelo XIAO</th>
			<th>.bin</th>
			<th>.elf</th>
			<th>.hex</th>
            <th>Bootloader</th>
		</tr>
		<tr>
			<td>Seeed Studio XIAO SAMD21</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
			<td>✅ (OpenOCD)</td>
            <td>✅ (archivo .bin con OpenOCD)</td>
		</tr>
		<tr>
			<td>Seeed Studio XIAO RP2040</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
            <td>❌</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RP2350</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>❌</td>
            <td>❌</td>
		</tr>
		<tr>
			<td>Seeed Studio XIAO nRF52840</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
			<td>✅ (OpenOCD)</td>
            <td>✅ (archivo .hex con OpenOCD)</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO RA4M1</td>
			<td>✅ (PyOCD)</td>
			<td>❌</td>
			<td>✅ (PyOCD)</td>
            <td>✅ (archivo .hex con PyOCD)</td>
		</tr>
        <tr>
			<td>Seeed Studio XIAO MG24</td>
			<td>❌</td>
			<td>❌</td>
			<td>✅ (OpenOCD)</td>
            <td>❌</td>
		</tr>
	</table>
</div>

1. Los elementos marcados con una ❌ en esta tabla de compatibilidad son muestras que fallaron en las pruebas con OpenOCD v0.12.0. Utiliza otros archivos de firmware para ahorrar tiempo.
2. Archivos de bootloader: aquí solo se proporcionan archivos de bootloader de XIAO y comandos de flasheo. Si este modelo de XIAO no se envía con archivos de bootloader, se marcará con ❌.
3. **La XIAO RA4M1 y la XIAO MG24 no admiten el flasheo de archivos `.elf`. Intentar flashear archivos `.elf` en la XIAO RA4M1 o XIAO MG24 provocará que el dispositivo quede inutilizable (bricked)**.

### Requisitos previos

1.  **Instalación de OpenOCD:** Para todas las placas XIAO **excepto la XIAO MG24**, necesitas [tener OpenOCD instalado en tu sistema y accesible desde tu línea de comandos (es decir, añadido al PATH de tu sistema)](#install-openocd).

2.  **Paquete de firmware de XIAO Debug Mate:** Hemos preparado un paquete que contiene archivos de configuración personalizados y firmware de ejemplo. Descárgalo y extráelo. La estructura es la siguiente:

    *   `examples/`: Contiene firmware de ejemplo precompilado (`.elf`, `.hex`, `.bin`) para varias placas XIAO y algunos archivos de bootloader de XIAO.
    *   `target/`: Contiene archivos de configuración personalizados de OpenOCD (`.cfg`) necesarios para placas específicas como la XIAO SAMD21 y la RA4M1.
    *   `XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/`: Un OpenOCD autónomo para flashear la XIAO MG24 en macOS y Linux.
    *   `XIAO_MG24_Win_OpenOCD-v0.12.0/`: Un OpenOCD autónomo para flashear la XIAO MG24 en Windows.

3.  **Terminal/Símbolo del sistema:** Necesitarás sentirte cómodo abriendo y usando una interfaz de línea de comandos (por ejemplo, Símbolo del sistema, PowerShell o Terminal).

#### Estrategia de ejecución de comandos

*   **Opción A (Recomendada): Ejecutar desde el directorio del paquete**

    Todos los comandos de esta guía suponen que has abierto tu terminal en la raíz de la carpeta extraída `XIAO_Debug_Mate_DAPLink_Package`. Este es el método más sencillo, ya que las rutas relativas al firmware y a los archivos de configuración funcionarán directamente.

*   **Opción B (Avanzada): Ejecutar desde cualquier directorio**

    Si prefieres ejecutar comandos desde tu propia carpeta de proyecto, puedes usar la opción `-s` para indicar a OpenOCD dónde encontrar los scripts personalizados de nuestro paquete.

    *   **Acción requerida:** Añade `-s <path_to_package_folder>` a tu comando `openocd`. Por ejemplo:

        ```bash
        # Replace <path_to_package_folder> with the actual path
        openocd -s <path_to_package_folder> -f interface/cmsis-dap.cfg -f target/XIAO_SAMD21/at91samd21g18.cfg ...
        ```

:::note
**Windows vs. macOS/Linux:** En todos los comandos, los usuarios de Windows deben usar `openocd.exe` en lugar de `openocd`. Recomendamos usar barras inclinadas (`/`) en las rutas de archivo para compatibilidad multiplataforma.
:::

**Para flashear tu propio firmware personalizado:**

Simplemente sustituye la ruta de ejemplo (por ejemplo, `examples/Blink_RP2040.elf`) por la ruta a tu propio archivo de firmware.

### Entender los archivos de firmware (.bin, .hex, .elf)

Cuando compilas un proyecto, la cadena de herramientas produce un archivo para subir al microcontrolador. Normalmente encontrarás tres formatos:

*   **.bin (Binario):** Un archivo binario bruto y compacto que contiene solo el código máquina. No tiene información adicional sobre direcciones de memoria, por lo que se debe indicar a la herramienta de programación dónde colocarlo.
*   **.hex (Intel HEX):** Una representación en texto ASCII del código binario. Incluye direcciones de memoria, sumas de comprobación y metadatos, lo que lo convierte en un formato más robusto que `.bin`.
*   **.elf (Executable and Linkable Format):** El formato más completo. Contiene el código máquina, información de direcciones de memoria y también información de depuración como nombres de funciones, nombres de variables y números de línea de código fuente. Este es el formato preferido para depuración.
*   **.bootloader (Archivo de bootloader):** Un archivo de bootloader es una imagen de firmware especializada que reside en una región protegida de la memoria del microcontrolador y es responsable de facilitar el flasheo de firmware, la recuperación del dispositivo y las tareas de arranque. En las placas XIAO, el bootloader te permite subir nuevo código de aplicación al dispositivo (a menudo por USB) sin necesidad de un programador de hardware dedicado. Si un dispositivo deja de responder o el programa principal falla, volver a flashear el bootloader puede ayudar a recuperar la placa. Usa solo el archivo de bootloader oficial para el modelo específico de tu placa, ya que usar un archivo incorrecto puede dejar el dispositivo inoperable hasta que se repare con herramientas especiales.

**Cómo obtener estos archivos desde tu proyecto:**

*   **Arduino IDE:** Después de compilar (`Sketch > Verify/Compile`), usa `Sketch > Export compiled Binary`. Esto guardará un archivo `.hex` o `.bin` en la carpeta de tu sketch.
*   **PlatformIO:** Después de una compilación correcta, los archivos de firmware (`firmware.bin`, `firmware.hex`, `firmware.elf`) se encuentran en el directorio `.pio/build/<environment_name>/` de tu proyecto.



### Flasheo de archivos `.bin`

#### Para Seeed Studio XIAO SAMD21

El paquete estándar de OpenOCD no incluye el archivo de configuración para la XIAO SAMD21. Debes copiarlo manualmente desde nuestro paquete proporcionado al directorio de instalación de OpenOCD de tu sistema.

**1. Copiar el archivo de configuración**

*   **Archivo de origen:** Desde `XIAO_Debug_Mate_DAPLink_Package`, busca el archivo: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Carpeta de destino:** Copia este archivo en la carpeta de scripts `target` de tu instalación de xPack OpenOCD. La ruta variará según el sistema operativo:

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Reemplaza `YourName` y `xpack-openocd-0.12.0-7` con tu nombre de usuario real y la versión de OpenOCD que instalaste.
:::

**2. Flashear el firmware**

Abre una nueva terminal en cualquier lugar de tu sistema y ejecuta el comando correspondiente:

*   **En Windows:**
    ```powershell
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.bin 0x00002000 verify reset; shutdown"
    ```

*   **En macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.bin 0x00002000 verify reset; shutdown"
    ```

---

#### Para Seeed Studio XIAO RP2040

Al usar OpenOCD para flashear la XIAO RP2040, se recomienda encarecidamente usar archivos `.elf` en lugar de archivos `.bin`.

Esto se debe a que los archivos `.elf` ya contienen internamente la información de la dirección de memoria del programa (Linker Address). OpenOCD la escribirá automáticamente en la ubicación correcta (normalmente `0x10000000`), por lo que no necesitas calcular ni adivinar manualmente la dirección de desplazamiento.

Si debes usar archivos `.bin`, necesitas especificar manualmente la dirección de inicio de la Flash de la XIAO RP2040: `0x10000000`.

**En Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.bin 0x10000000 verify reset exit"
```

**En macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.bin 0x10000000 verify reset exit"
```

---

#### Para Seeed Studio XIAO RP2350

Al usar OpenOCD para flashear la XIAO RP2350, se recomienda encarecidamente usar archivos `.elf` en lugar de archivos `.bin`.

Esto se debe a que los archivos `.elf` ya contienen internamente la información de la dirección de memoria del programa (Linker Address). OpenOCD la escribirá automáticamente en la ubicación correcta (normalmente `0x10000000`), por lo que no necesitas calcular ni adivinar manualmente la dirección de desplazamiento.

Si debes usar archivos `.bin`, necesitas especificar manualmente la dirección de inicio de la Flash de la XIAO RP2350: `0x10000000`.

**En Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.bin 0x10000000 verify reset exit"
```

**En macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.bin 0x10000000 verify reset exit"
```

---

#### Para Seeed Studio XIAO nRF52840

La configuración para nRF52 está incluida en el xPack OpenOCD estándar. Abre una terminal y ejecuta el comando.

**En Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.bin 0x27000 verify reset exit"
```

**En macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.bin 0x27000 verify reset exit"
```

---

#### Para Seeed Studio XIAO RA4M1

Actualmente, las distribuciones estándar de OpenOCD a menudo carecen de soporte integrado para la serie Renesas RA, como controladores dedicados y archivos de configuración de destino. Esto hace que usar OpenOCD para flashear sea un proceso complejo que requiere configuración manual.

Por lo tanto, recomendamos encarecidamente usar `PyOCD`, que proporciona soporte listo para usar para el RA4M1.

Para flashear el firmware (por ejemplo, `Blink_RA4M1.hex`), usa el comando correspondiente a tu sistema operativo.

**En Windows:**
```powershell
pyocd flash -t r7fa4m1ab examples\Blink_RA4M1.bin —base-address 0x4000
```

**En macOS / Linux:**
```bash
pyocd flash -t r7fa4m1ab examples/Blink_RA4M1.bin —base-address 0x4000
```


### Flashear archivos `.elf`

:::danger
Al flashear archivos `.elf`, presta mucha atención al tamaño del firmware. Si el archivo supera los 2 MB, asegúrate de que tu dispositivo tenga suficiente espacio de almacenamiento Flash. ¡De lo contrario, podrías brickear tu dispositivo!
:::

#### Para Seeed Studio XIAO SAMD21

Debido a la limitada memoria Flash de 256 KB de la XIAO SAMD21, normalmente no puede grabar firmware de más de 256 KB. El archivo `.elf` del ejemplo Blink ya alcanza los 658 KB, lo que lo hace imposible de grabar. Recomendamos usar archivos `.bin` o `.hex` más pequeños.

---

#### Para Seeed Studio XIAO RP2040

La configuración para RP2040 está incluida en el xPack OpenOCD estándar. Abre una terminal y ejecuta el comando.

**En Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.elf verify reset exit"
```

**En macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2040.elf verify reset exit"
```

---

#### Para Seeed Studio XIAO RP2350

La configuración para RP2350 está incluida en el xPack OpenOCD estándar. Abre una terminal y ejecuta el comando.

**En Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.elf verify reset exit"
```

**En macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/rp2350.cfg -c "adapter speed 5000" -c "program examples/Blink_RP2350.elf verify reset exit"
```

---

#### Para Seeed Studio XIAO nRF52840

La configuración para nRF52 está incluida en el xPack OpenOCD estándar. Abre una terminal y ejecuta el comando.

**En Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.elf verify reset exit"
```

**En macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.elf verify reset exit"
```

:::tip
A veces puede que necesites flashear el firmware dos veces para que surta efecto; esto es normal.
:::

---

#### Para Seeed Studio XIAO RA4M1

:::danger DO NOT BRICK THE DEVICE
XIAO RA4M1 prohíbe flashear archivos `.elf`, ¡ya que hacerlo puede brickear el dispositivo!
:::

---

#### Para Seeed Studio XIAO MG24

:::danger DO NOT BRICK THE DEVICE
XIAO MG24 prohíbe flashear archivos `.elf`, ¡ya que hacerlo puede brickear el dispositivo!
:::


### Flashear archivos `.hex`

#### Para Seeed Studio XIAO SAMD21

El paquete estándar de OpenOCD no incluye el archivo de configuración para la XIAO SAMD21. Debes copiarlo manualmente desde el paquete que proporcionamos al directorio de instalación de OpenOCD de tu sistema.

**1. Copiar el archivo de configuración**

*   **Archivo de origen:** Desde `XIAO_Debug_Mate_DAPLink_Package`, busca el archivo: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Carpeta de destino:** Copia este archivo en la carpeta de scripts `target` de tu instalación de xPack OpenOCD. La ruta variará según el sistema operativo:

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Reemplaza `YourName` y `xpack-openocd-0.12.0-7` con tu nombre de usuario real y la versión de OpenOCD que instalaste.
:::

**2. Flashear el firmware**

Abre una nueva terminal en cualquier lugar de tu sistema y ejecuta el comando correspondiente:

*   **En Windows:**
    ```powershell
    openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.hex verify reset; shutdown"
    ```

*   **En macOS / Linux:**
    ```bash
    openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Blink_SAMD21.hex verify reset; shutdown"
    ```

---

#### Para Seeed Studio XIAO nRF52840

La configuración para nRF52 está incluida en el xPack OpenOCD estándar. Abre una terminal y ejecuta el comando.

**En Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.hex verify reset exit"
```

**En macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "program examples/Blink_nRF52840.hex verify reset exit"
```

---

#### Para Seeed Studio XIAO RA4M1

Actualmente, las distribuciones estándar de OpenOCD a menudo carecen de soporte integrado para la serie Renesas RA, como controladores dedicados y archivos de configuración de destino. Esto hace que usar OpenOCD para flashear sea un proceso complejo que requiere configuración manual.

Por lo tanto, recomendamos encarecidamente usar `PyOCD`, que proporciona soporte listo para usar para el RA4M1.

Para flashear el firmware (por ejemplo, `Blink_RA4M1.hex`), usa el comando correspondiente a tu sistema operativo.

**En Windows:**
```powershell
pyocd flash -e sector -a 0x0 -t r7fa4m1ab examples\Blink_RA4M1.hex
```

**En macOS / Linux:**
```bash
pyocd flash -e sector -a 0x0 -t r7fa4m1ab examples/Blink_RA4M1.hex
```

**Explicación del comando:**
*   `pyocd flash`: Ejecuta la operación de flasheo.
*   `-e sector`: Borra los sectores necesarios de la memoria flash antes de programar.
*   `-a 0x0`: Especifica la dirección inicial para el flasheo, que es `0x00000000`.
*   `-t r7fa4m1ab`: Especifica el tipo de MCU de destino.
*   `examples\Blink_RA4M1.hex` o `examples/Blink_RA4M1.hex`: La ruta al archivo de firmware que deseas flashear. Ten en cuenta el uso de `\` en Windows y `/` en macOS/Linux.

#### Para Seeed Studio XIAO MG24

Esta placa requiere su versión dedicada de OpenOCD desde el paquete. **Debes** navegar al directorio correcto antes de ejecutar el comando.

1.  **Navegar al directorio correcto:**
    *   **En Windows:** Abre una ventana de comandos y ejecuta:
        `cd XIAO_MG24_Win_OpenOCD-v0.12.0`
    *   **En macOS/Linux:** Abre una Terminal y ejecuta:
        `cd XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0`

2.  **Ejecuta el comando de flasheo:**
    La ruta al firmware ahora es `../examples/Blink_MG24.hex` porque estás dos niveles por debajo dentro del directorio del paquete.

    **En Windows:**
    ```powershell
    bin\openocd.exe -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```

    **En macOS / Linux:**
    ```bash
    bin/openocd -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```


### Flashear archivos de Bootloader

Esta es una operación crítica que puede restaurar una placa.

#### Para Seeed Studio XIAO SAMD21

El paquete estándar de OpenOCD no incluye el archivo de configuración para la XIAO SAMD21. Debes copiarlo manualmente desde el paquete que proporcionamos al directorio de instalación de OpenOCD de tu sistema.

**1. Copiar el archivo de configuración**

*   **Archivo de origen:** Desde `XIAO_Debug_Mate_DAPLink_Package`, busca el archivo: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Carpeta de destino:** Copia este archivo en la carpeta de scripts `target` de tu instalación de xPack OpenOCD. La ruta variará según el sistema operativo:

    *   **Windows:** `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Reemplaza `YourName` y `xpack-openocd-0.12.0-7` con tu nombre de usuario real y la versión de OpenOCD que instalaste.
:::

**2. Flashear el firmware**

Este comando utiliza el archivo personalizado `at91samd21g18.cfg` proporcionado en nuestro paquete para flashear un Bootloader `.bin`.

*   **En Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

*   **En macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

#### Para Seeed Studio XIAO nRF52840

Este proceso implica descargar el Bootloader, luego borrar el chip y flashear el nuevo archivo.

Este comando utiliza el `nrf52.cfg` estándar de tu instalación de OpenOCD.

**En Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program examples/Bootloader_nRF52840-0.6.1.hex verify" -c "reset" -c "exit"
```

**En macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/nrf52.cfg -c "init" -c "halt" -c "nrf5 mass_erase" -c "program examples/Bootloader_nRF52840-0.6.1.hex verify" -c "reset" -c "exit"
```

:::tip
Después de grabar el Bootloader usando OpenOCD y luego grabar el archivo bin de firmware, el bin de firmware no puede ejecutarse correctamente. Necesitas subir un programa usando Arduino para que el programa se ejecute con normalidad.

Esto se debe a que los Bootloaders de los chips de la serie Nordic (como nRF52832) necesitan comprobar, durante el arranque, la información de validez sobre el firmware de la aplicación en una dirección de memoria específica (normalmente llamada "Bootloader Settings Page"). Esta "página de configuración" contiene la suma de comprobación CRC del firmware, la longitud y las banderas de validez.

Cuando utilizas herramientas de programación de propósito general como OpenOCD para grabar directamente archivos .bin, estas solo escriben los datos binarios del firmware en la dirección de inicio de la aplicación especificada y no generan ni escriben automáticamente la "página de configuración" requerida por el Bootloader. Por lo tanto, cuando el dispositivo se reinicia, el Bootloader no puede detectar una página de configuración válida y determina que no hay una aplicación legítima, por lo que se niega a iniciar el firmware y normalmente entra en modo DFU (Device Firmware Update), esperando actualizaciones vía OTA o puerto serie.
:::

#### Para Seeed Studio XIAO RA4M1

Actualmente, las distribuciones estándar de OpenOCD a menudo carecen de soporte integrado para la serie Renesas RA, como controladores dedicados y archivos de configuración de destino. Esto hace que usar OpenOCD para flashear sea un proceso complejo que requiere configuración manual.

Por lo tanto, recomendamos encarecidamente usar `PyOCD`, que proporciona soporte listo para usar para el RA4M1.

Para flashear el Bootloader, utiliza el comando correspondiente a tu sistema operativo.

**En Windows:**
```powershell
pyocd flash -t r7fa4m1ab examples\Bootloader_RA4M1.hex —erase chip
```

**En macOS / Linux:**
```bash
pyocd flash -t r7fa4m1ab examples/Bootloader_RA4M1.hex —erase chip
```


## Uso de la depuración en PlatformIO

Primero, asegúrate de tener instalada la extensión PlatformIO IDE en Visual Studio Code.

1.  **Instalar VS Code**: [Descarga e instala Visual Studio Code](https://code.visualstudio.com/).
2.  **Instalar PlatformIO IDE**: Abre VS Code, ve a la vista de Extensiones (Ctrl+Shift+X), busca `PlatformIO IDE` e instálalo.

### Creación y configuración de un proyecto PlatformIO

1.  **Iniciar PlatformIO**: Haz clic en el icono de PlatformIO en la barra de actividad de VS Code y selecciona "Home" para abrir la pantalla de inicio de PIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/17.png" style={{width:1000, height:'auto'}}/></div>

2.  **Crear un nuevo proyecto**: Haz clic en "New Project" y asigna un nombre a tu proyecto.
    *   **Seleccionar placa**: Busca la placa XIAO específica que piensas usar.

:::note
Dado que las placas de Seeed Studio se alojan en un repositorio de terceros, es posible que tu placa específica no aparezca en la lista de búsqueda de forma predeterminada. Si esto ocurre, puedes seleccionar una placa genérica (o cualquier placa disponible) para inicializar el proyecto, y la corregiremos en el siguiente paso.
:::

3.  **Configurar `platformio.ini`**: Este es el paso más crítico. Para habilitar la depuración con XIAO Debug Mate y reconocer correctamente la placa, debes modificar el archivo `platformio.ini` ubicado en la raíz de tu proyecto.

    **Añadir soporte para placas de Seeed Studio:**
    Las placas de desarrollo de Seeed Studio no están incluidas en el registro predeterminado de PlatformIO, sino que se mantienen en un **repositorio de terceros**. Para usarlas, debes especificar la URL del repositorio en tu configuración.

    Debes establecer el parámetro `platform` en la siguiente URL:
    `https://github.com/Seeed-Studio/platform-seeedboards`

    El archivo de configuración le indica a PlatformIO que descargue las definiciones de placas desde este repositorio personalizado y especifica qué herramientas usar para la carga y la depuración. XIAO Debug Mate funciona como un depurador estándar **CMSIS-DAP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/18.png" style={{width:1000, height:'auto'}}/></div>

    A continuación se muestran las configuraciones recomendadas de `platformio.ini` para varios modelos XIAO. Copia el contenido correspondiente a tu placa. Estamos usando la versión de desarrollo de la plataforma desde GitHub para asegurarnos de que tengas los archivos de soporte de placa más recientes.

<Tabs>
<TabItem value="rp2350" label="XIAO RP2350" default>

```ini
[env:seeed_xiao_rp2350]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2350
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

</TabItem>
<TabItem value="rp2040" label="XIAO RP2040">

```ini
[env:seeed_xiao_rp2040]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-rp2040
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="samd21" label="XIAO SAMD21">

```ini
[env:seeed-xiao-samd]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-samd
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="nrf52840" label="XIAO nRF52840">

Para el nRF52840, PlatformIO ofrece dos paquetes de soporte de placa. Elige el que se adapte a los requisitos de tu proyecto.

**Mbed Core:**
```ini
[env:seeed-xiao-mbed-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mbed-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

**Adafruit Core:**
```ini
[env:seeed-xiao-afruitnrf52-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="ra4m1" label="XIAO RA4M1">

Ten en cuenta que el RA4M1 es un caso especial. Utiliza `pyocd` para la carga, pero sigue usando `cmsis-dap` para la depuración.

```ini
[env:seeed-xiao-ra4m1]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-ra4m1
framework = arduino
upload_protocol = pyocd
debug_tool = cmsis-dap
```
</TabItem>
<TabItem value="mg24" label="XIAO MG24">

```ini
[env:seeed-xiao-mg24]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mg24
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```
</TabItem>
</Tabs>

Después de guardar el archivo `platformio.ini`, PlatformIO descargará automáticamente todas las toolchains y paquetes necesarios la próxima vez que compiles o depures.

### Depuración paso a paso

La ejecución paso a paso es una función central para rastrear la lógica de tu código e identificar errores.

1.  **Conectar el hardware**: Conecta tu placa XIAO al XIAO Debug Mate. Conecta el Debug Mate a tu ordenador usando un cable USB-C.
2.  **Iniciar la depuración**: Puedes iniciar una sesión de depuración de dos maneras:
    *   Pulsa la tecla `F5`.
    *   Ve a la vista "Run and Debug" (icono de insecto en la barra de actividad) y haz clic en la flecha verde "Start Debugging" en la parte superior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/19.png" style={{width:1000, height:'auto'}}/></div>

3.  **Controles de depuración**: PlatformIO compilará tu código, lo subirá al XIAO a través del Debug Mate y pausará la ejecución en la primera línea de `main()` o `setup()`. Aparecerá una barra de herramientas de depuración en la parte superior del editor, lo que te permitirá controlar el flujo del programa:
    *   **Continuar (F5)**: Reanuda la ejecución hasta que se alcance el siguiente punto de interrupción o el programa termine.
    *   **Step Over (F10)**: Ejecuta la línea actual. Si la línea contiene una llamada a función, ejecutará la función completa y se detendrá en la siguiente línea.
    *   **Step Into (F11)**: Ejecuta la línea actual. Si la línea contiene una llamada a función, el depurador entrará en la función y se detendrá en su primera línea.
    *   **Step Out (Shift+F11)**: Si está en pausa dentro de una función, esto ejecutará el resto de la función y volverá a la línea donde fue llamada.
    *   **Reiniciar (Ctrl+Shift+F5)**: Termina y reinicia la sesión de depuración actual.
    *   **Detener (Shift+F5)**: Termina la sesión de depuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/20.png" style={{width:1000, height:'auto'}}/></div>

### Depuración con puntos de interrupción

Si quieres que el programa se detenga en una ubicación específica, los puntos de interrupción son la herramienta adecuada.

1.  **Establecer un punto de interrupción**: En el editor de código, mueve el cursor a la izquierda del número de línea donde quieres pausar. Aparecerá un punto rojo tenue. Haz clic en él para establecer un punto de interrupción (el punto se volverá rojo brillante).
2.  **Ejecutar hasta el punto de interrupción**: Inicia una sesión de depuración (`F5`). El programa se ejecutará a máxima velocidad y se detendrá automáticamente cuando alcance la línea con el punto de interrupción.
3.  **Gestionar puntos de interrupción**: En el panel lateral "Run and Debug", la sección "BREAKPOINTS" enumera todos los puntos de interrupción activos. Desde aquí puedes habilitarlos, deshabilitarlos o eliminarlos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/21.png" style={{width:1000, height:'auto'}}/></div>

### Lectura/escritura de RAM

Mientras el programa está en pausa en un punto de interrupción, puedes inspeccionar e incluso modificar el estado de las variables.

1.  **Ver variables (lectura)**: En el panel lateral "Run and Debug", la sección "VARIABLES" muestra todas las variables locales y globales dentro del ámbito actual y sus valores actuales.
2.  **Vigilar variables**: Si quieres monitorizar variables o expresiones específicas, ve a la sección "WATCH", haz clic en el icono `+` e introduce el nombre de la variable (por ejemplo, `myVariable` o `&myVariable` para ver su dirección de memoria).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/22.png" style={{width:1000, height:'auto'}}/></div>

3.  **Modificar variables (escritura)**: En las secciones "VARIABLES" o "WATCH", a menudo puedes hacer doble clic en el valor de una variable para introducir uno nuevo. Pulsa Enter para aplicar el cambio. Esto es increíblemente útil para probar diferentes condiciones sin reiniciar tu programa.


## Solución de problemas

### P1: Si dejo inservible mi XIAO RA4M1, ¿hay alguna forma de arreglarla?

Puedes intentar volver a grabar el bootloader para restaurar el dispositivo. Para el modelo XIAO RA4M1, consulta **[este método](#para-seeed-studio-xiao-ra4m1-2)** para la recuperación del bootloader.

Al restaurar el Bootloader, si se produce un error, intenta conectar la XIAO RA4M1 al XIAO Debug Mate, que está conectado a tu ordenador. Mantén pulsado el botón B en la XIAO RA4M1 mientras haces clic una vez en el botón R, luego suelta ambos, R y B. Procede a volver a grabar el Bootloader.

Después de grabar el Bootloader, intenta volver a actualizar el firmware utilizando software como Arduino. Esto normalmente restaura la funcionalidad. Si no tiene éxito, es posible que el dispositivo esté dañado de forma permanente e irreparable. Cualquier acción que implique flashear firmware con XIAO Debug Mate puede requerir que asumas toda la responsabilidad.


### P2: ¿Cómo saber si un dispositivo ha quedado inservible?

La forma más sencilla de determinar si el dispositivo XIAO está dañado es que no muestre ninguna conexión de puerto serie cuando se conecta a un ordenador. Si el dispositivo sigue sin mostrar ninguna conexión de puerto serie después de mantener pulsado el botón B y luego conectarlo al ordenador, el dispositivo está dañado.


### P3: ¿Se puede reparar el equipo dañado? ¿Puedo contactar con soporte técnico para solicitar un reemplazo?

Los daños en los dispositivos XIAO suelen estar causados por problemas con el particionado o con el archivo del Bootloader. Esto normalmente puede resolverse volviendo a grabar el archivo del Bootloader. Si esto falla, actualmente no hay soluciones alternativas. Los usuarios deben asumir toda la responsabilidad de realizar esta operación por sí mismos, así que asegúrate de que los comandos de flasheo y el firmware estén verificados y sean válidos.

### P4: ¿XIAO Debug Mate requiere un controlador?

XIAO Debug Mate ha sido probado y verificado en los sistemas operativos de ordenador más recientes y funciona con normalidad sin necesidad de instalar controladores. Para ordenadores con Windows, recomendamos utilizar el sistema operativo **Windows 11**. Durante las pruebas, descubrimos que si has instalado controladores usando Zading, puede hacer que el dispositivo no sea reconocido.

### P5: Mi XIAO Debug Mate muestra constantemente una luz roja en Windows 11 y no puede ser reconocido, informando el error: “unable to find a matching CMSIS-DAP device.”

Con respecto al problema de que tu XIAO Debug Mate muestra una luz roja e informa "unable to find a matching CMSIS-DAP device" en Windows 11, prueba los siguientes pasos de solución de problemas:

**1. Verificar el cable USB**

Primero, asegúrate de que el cable USB que estás utilizando admite transferencia de datos y no es solo un cable de carga. Puedes verificarlo comprobando si el dispositivo aparece en un software de monitor serie o si puedes ver algún registro del dispositivo. Si el ordenador no reacciona en absoluto cuando lo conectas, intenta cambiar el cable.

**2. Reinstalar el controlador mediante PowerShell**

Si se confirma que el cable funciona, es probable que el problema esté causado por una instalación incorrecta del controlador. Puedes resolverlo eliminando el controlador en conflicto usando PowerShell. Sigue estos pasos:

1.  Haz clic derecho en el botón Inicio y selecciona **Terminal (Admin)** o **PowerShell (Admin)**.

2.  Ejecuta el siguiente comando para encontrar los detalles del controlador CMSIS-DAP:

    ```powershell
    dism /online /get-drivers /format:table | findstr /i "cmsis-dap"
    ```
3.  Busca el **"Published Name"** (normalmente se ve como `oemXX.inf`) en la salida.

4.  Ejecuta el siguiente comando para eliminar y desinstalar el controlador (sustituye `{inf_name}` por el nombre real que encontraste en el paso anterior, por ejemplo, `oem10.inf`):

    ```powershell
    pnputil /delete-driver {inf_name} /uninstall
    ```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/40.png" style={{width:1000, height:'auto'}}/></div>

Después de completar estos pasos, vuelve a conectar tu dispositivo y comprueba si se reconoce correctamente.

### P6: ¿Qué debo hacer si la versión de OpenOCD que se muestra en mi sistema es diferente de la captura de pantalla del Wiki?

Si compruebas la versión de OpenOCD en tu sistema y la salida no coincide con la versión recomendada que se muestra en las capturas de pantalla del Wiki, es posible que tengas varias instalaciones de OpenOCD o que tu sistema esté utilizando por defecto una versión diferente.

En ordenadores con Windows, abre las **System Environment Variables** y ve a la sección **System variables**. Edita la variable `Path` y mueve la ruta de la instalación de OpenOCD recomendada por el Wiki (por ejemplo, `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`) hasta la parte superior de la lista. Esto garantiza que la versión recomendada de OpenOCD sea la primera que tu sistema encuentre y utilice. Después de hacer este cambio, abre una nueva terminal y vuelve a ejecutar `openocd --version` para confirmar que ahora se muestra la versión correcta.



## Recursos

- **[ZIP]** [XIAO_Debug_Mate_DAPLink_Package-v1.0](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip)


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
