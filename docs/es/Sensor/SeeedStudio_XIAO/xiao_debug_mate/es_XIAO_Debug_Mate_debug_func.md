---
description: Este artículo explica cómo usar la función de depuración DAPLink del XIAO Debug Mate.
title: Depurador DAPLink
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/15.webp
slug: /es/xiao_debug_mate_debug
sidebar_position: 2
last_update:
  date: 10/22/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/15.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Bienvenido al manual de usuario oficial para la funcionalidad DAPLink del XIAO Debug Mate. Esta guía completa está diseñada para ayudar tanto a usuarios principiantes como avanzados a desbloquear todo el potencial de su XIAO Debug Mate para tareas de depuración profesional. Aquí aprenderás cómo conectar, configurar y operar el depurador DAPLink, entender las herramientas de software esenciales y seguir las mejores prácticas para asegurar una experiencia de depuración fluida y productiva con una amplia gama de placas de desarrollo de la serie XIAO. Ya sea que estés solucionando problemas de firmware complejo o optimizando tu flujo de trabajo de desarrollo, este documento proporciona instrucciones claras paso a paso, consejos y explicaciones técnicas detalladas para apoyar tus proyectos de principio a fin.


## Una Explicación de Algunos Conceptos del Depurador

Para usar efectivamente la funcionalidad DAPLink del XIAO Debug Mate, es útil entender los componentes de software clave y los protocolos que trabajan juntos para hacer posible la depuración. Aquí hay un desglose de cada concepto y cómo se relacionan entre sí.

### GDB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/gdb.png" style={{width:800, height:'auto'}}/></div>

**[GDB](https://www.sourceware.org/gdb/)**, el Depurador del Proyecto GNU, es el motor central del proceso de depuración. Es una herramienta poderosa de línea de comandos que se ejecuta en tu computadora host (PC). GDB es responsable de controlar la ejecución de tu programa en el microcontrolador objetivo. Te permite:
*   Iniciar y detener tu programa.
*   Establecer puntos de interrupción para pausar la ejecución en líneas específicas de código.
*   Avanzar a través de tu código línea por línea.
*   Inspeccionar los valores de variables y el contenido de los registros de memoria.

La mayoría de los Entornos de Desarrollo Integrados (IDEs) modernos como VS Code (con PlatformIO) o Eclipse proporcionan una interfaz gráfica de usuario que actúa como un front-end para GDB, traduciendo tus clics en comandos GDB.

### OpenOCD/PyOCD

**[OpenOCD](https://openocd.org/)** (Open On-Chip Debugger) y **[PyOCD](https://pyocd.io/)** son aplicaciones "servidor" esenciales que se ejecutan en tu computadora host. Actúan como un puente o traductor entre los comandos de alto nivel de GDB y las señales de bajo nivel requeridas por la sonda de depuración física (en este caso, el XIAO Debug Mate).

Cuando GDB emite un comando como "leer el valor de la variable `x`," OpenOCD recibe este comando, lo traduce en una secuencia de instrucciones que la sonda de depuración entiende, y envía estas instrucciones a la sonda a través de USB.

### DAPLink

**[DAPLink](https://github.com/ARMmbed/DAPLink)** es el firmware de código abierto que se ejecuta en el microcontrolador ESP32-S3 del XIAO Debug Mate. Este firmware convierte el Debug Mate en una sonda de depuración completamente funcional. Su trabajo principal es implementar el protocolo CMSIS-DAP, permitiéndole recibir comandos de depuración de una computadora host a través de USB e interactuar físicamente con los pines de depuración del chip objetivo (SWD). En esencia, DAPLink es el "agente" en el dispositivo que ejecuta las órdenes enviadas por OpenOCD.

### CMSIS-DAP

**[CMSIS-DAP](https://github.com/ARM-software/CMSIS-DAP)** (Cortex Microcontroller Software Interface Standard - Debug Access Port) es un protocolo estandarizado que define cómo una computadora host se comunica con una sonda de depuración a través de USB. Debido a que el firmware DAPLink del XIAO Debug Mate se adhiere a este estándar, es instantáneamente compatible con una amplia gama de herramientas estándar de la industria como OpenOCD, PyOCD y Keil MDK, sin necesidad de controladores o software propietario.

### Telnet

**Telnet** es un protocolo de red simple basado en texto. En el contexto de la depuración, OpenOCD a menudo abre un servidor Telnet en un puerto específico (comúnmente el puerto 4444). Esto proporciona una interfaz de línea de comandos directa y legible para humanos al servidor OpenOCD mismo. Mientras que GDB se usa para depuración a nivel de aplicación, la interfaz Telnet es útil para tareas avanzadas como configurar OpenOCD, inspeccionar el estado de la sonda de depuración, o emitir comandos de reinicio de bajo nivel.

### Cómo Trabajan Juntos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/36.png" style={{width:1000, height:'auto'}}/></div>

Aquí hay un resumen de toda la cadena de depuración, desde tu IDE hasta el XIAO objetivo:

1.  **Tú** (en tu IDE) haces clic en "Start Debugging."
2.  El **IDE** lanza **GDB** con el archivo de programa apropiado.
3.  **GDB** se conecta al servidor **OpenOCD** ejecutándose en tu PC.
4.  **OpenOCD** detecta el **XIAO Debug Mate** conectado vía USB. Se comunica con el dispositivo usando el protocolo **CMSIS-DAP**.
5.  El firmware **DAPLink** en el Debug Mate recibe estos comandos CMSIS-DAP.
6.  **DAPLink** traduce estos comandos en señales eléctricas en los pines **SWD** (Serial Wire Debug) (SWDIO y SWCLK).
7.  Estas señales SWD controlan directamente el **núcleo ARM Cortex** dentro del XIAO objetivo, permitiendo a OpenOCD y GDB pausar la CPU, leer memoria y realizar todas las demás acciones de depuración.

En resumen: **GDB** es el comandante, **OpenOCD** es el traductor, **CMSIS-DAP** es el idioma que hablan, y **DAPLink** es el soldado en el terreno ejecutando las órdenes.

## Comenzando con la Depuración

### Verificación de Compatibilidad

El XIAO Debug Mate está diseñado para todo el ecosistema XIAO, pero la función de depuración DAPLink es específica para núcleos ARM Cortex-M. Las funciones de monitoreo UART y de energía, sin embargo, son universalmente compatibles ya que son independientes de la arquitectura. Por favor consulta la tabla a continuación para información detallada de compatibilidad.

<div class="table-center">

<table align="center">

<tr>

<th>Modelo XIAO</th>

<th>Arquitectura del Núcleo</th>

<th>Depuración DAPLink</th>

<th>Monitor UART</th>

<th>Analizador de Energía</th>

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

### Preparación del Software

Antes de que puedas comenzar a depurar, necesitas configurar tu computadora host con el software necesario.

#### Instalar OpenOCD

:::tip
Verificado: Por favor usa OpenOCD versión 0.12.0-7 o posterior.
:::

Para asegurar compatibilidad y tener acceso a las últimas características, recomendamos encarecidamente usar la versión **xPack** de OpenOCD. Los gestores de paquetes del sistema (como Homebrew en macOS o APT en Linux) a menudo proporcionan versiones más antiguas y desactualizadas que pueden no funcionar correctamente con objetivos modernos.

:::tip Nota de PlatformIO
Si estás usando VS Code con la extensión PlatformIO, PlatformIO descargará y configurará automáticamente la versión correcta de OpenOCD para tu proyecto cuando inicies una sesión de depuración.
:::

<Tabs>
<TabItem value="Windows" label="Windows" default>

En Windows, el método de instalación manual es sencillo.

1.  **Descargar el paquete OpenOCD**

Ve a la [página de lanzamientos de xPack OpenOCD](https://github.com/xpack-dev-tools/openocd-xpack/releases). El último lanzamiento siempre está listado en la parte superior. Encuentra la versión de Windows (ej., `xpack-openocd-...-win32-x64.zip`) en el lanzamiento más reciente y descarga este archivo.

2.  **Extraer los Archivos**

Haz clic derecho en el archivo ZIP descargado y selecciona "Extract All...". Elige una ubicación estable, como `C:\Users\TuNombre\AppData\Local\xPacks\OpenOCD`. Después de la extracción, tendrás una carpeta como `xpack-openocd-0.12.0-7` que contiene un directorio `bin`.

3.  **Agregar OpenOCD a tu PATH del Sistema**

Esto te permite ejecutar `openocd` desde cualquier terminal.

    - Busca "Environment Variables" en el Menú de Inicio y selecciona "Edit the system environment variables".
    - Haz clic en **"Environment Variables..."**.
    - Bajo "System variables", selecciona la variable **"Path"** y haz clic en **"Edit..."**.
    - Haz clic en **"New"** y pega la ruta completa al directorio `bin` que extrajiste anteriormente. Por ejemplo:  
      `C:\Users\TuNombre\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`
    - Haz clic en OK en todas las ventanas para guardar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_3.png" style={{width:1000, height:'auto'}}/></div>

4.  **Verificar la Instalación**

Abre una ventana **nueva** de Command Prompt o PowerShell y ejecuta:

```bash
openocd --version
```

Si la instalación fue exitosa, verás la información de versión impresa (ej., `xPack Open On-Chip Debugger 0.12.0+dev-02228`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_4.png" style={{width:700, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">

Este proceso refleja la configuración manual de Windows.

1.  **Descargar el paquete OpenOCD**

Ve a la [página de lanzamientos de xPack OpenOCD](https://github.com/xpack-dev-tools/openocd-xpack/releases). Encuentra la versión más reciente y descarga el archivo correcto para tu Mac (por ejemplo, `...-darwin-x64.tar.gz` para Intel o `...-darwin-arm64.tar.gz` para Apple Silicon).

2.  **Extraer los Archivos**

Abre una Terminal y ejecuta los siguientes comandos. Crearemos una ubicación estándar en tu directorio home.

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder (or wherever you saved the file)
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **Agregar OpenOCD a tu PATH**

Necesitas decirle a tu shell dónde encontrar el ejecutable `openocd`. El shell predeterminado en macOS moderno es Zsh.

```bash
# Add the path to your .zshrc file (for Zsh)
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.zshrc
```

:::note
Asegúrate de reemplazar `xpack-openocd-0.12.0-7` con el nombre real de la carpeta que se creó. Si usas Bash, edita `~/.bash_profile` en lugar de `~/.zshrc`.
:::

4.  **Aplicar y Verificar**

El cambio de `PATH` que hiciste no está activo en tu sesión de terminal actual hasta que se recargue el archivo de configuración.

Ejecuta el siguiente comando en tu terminal existente:

```bash
# For Zsh (default on modern macOS)
source ~/.zshrc
```

Ahora, verifica la instalación ejecutando:

```bash
openocd --version
```

Deberías ver la información de versión correcta de xPack.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_5.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
<TabItem value="Linux" label="Linux">

Este proceso refleja la configuración manual en otros sistemas operativos.

1.  **Descargar el paquete OpenOCD**

Ve a la [página de lanzamientos de xPack OpenOCD](https://github.com/xpack-dev-tools/openocd-xpack/releases). Encuentra la versión más reciente y descarga el archivo de Linux (`...-linux-x64.tar.gz`).

2.  **Extraer los Archivos**

Abre una Terminal y ejecuta los siguientes comandos.

```bash
# Create a directory for xPack tools if it doesn't exist
mkdir -p ~/opt

# Go to the Downloads folder
cd ~/Downloads

# Extract the archive into the opt directory
tar -xvf xpack-openocd-*.tar.gz -C ~/opt
```

3.  **Agregar OpenOCD a tu PATH**

Necesitas decirle a tu shell dónde encontrar el ejecutable `openocd`. La mayoría de las distribuciones de Linux usan el shell Bash.

```bash
# Add the path to your .bashrc file
echo 'export PATH="$HOME/opt/xpack-openocd-0.12.0-7/bin:$PATH"' >> ~/.bashrc
```

:::note
Asegúrate de reemplazar `xpack-openocd-0.12.0-7` con el nombre real de la carpeta que se creó.
:::

4.  **Aplicar y Verificar**

El cambio de `PATH` que hiciste no está activo en tu sesión de terminal actual hasta que se recargue el archivo de configuración.

Ejecuta el siguiente comando en tu terminal existente:

```bash
# For Bash (default on most Linux distros)
source ~/.bashrc
```

Ahora, verifica la instalación ejecutando:

```bash
openocd --version
```

Deberías ver la información de versión correcta de xPack.

</TabItem>
</Tabs>

#### Instalar PyOCD

:::info
Si tienes la intención de usar la función de flasheo de firmware para XIAO RA4M1, es posible que necesites consultar los pasos aquí para descargar y usar PyOCD adicionalmente.
:::

PyOCD es una herramienta basada en Python para programar y depurar microcontroladores Arm Cortex-M.

<Tabs>
<TabItem value="Windows" label="Windows" default>

1.  **Prerrequisitos**
    Asegúrate de tener **Python** instalado en tu sistema. Si no, descárgalo desde el sitio web oficial [python.org](https://www.python.org/) y asegúrate de marcar la casilla **"Add Python to PATH"** durante la instalación.

2.  **Instalar PyOCD**
    Abre una ventana de Command Prompt o PowerShell y ejecuta el siguiente comando:

    ```bash
    pip install -U pyocd
    ```

3.  **Instalar el Paquete de Soporte para XIAO RA4M1**
    El XIAO RA4M1 usa el chip `R7FA4M1AB`. Necesitas instalar el paquete de soporte específico para que PyOCD lo reconozca.

    Busca el paquete para confirmar disponibilidad:
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    Instala el paquete:
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **Verificar Objetivos**
    Verifica si el objetivo ahora es reconocido:
    ```bash
    pyocd list --targets
    ```
    Deberías ver `r7fa4m1ab` en la lista.

</TabItem>
<TabItem value="MacOS" label="MacOS">

1.  **Prerrequisitos**
    MacOS generalmente viene con Python, pero se recomienda usar Homebrew o el instalador oficial para obtener la versión más reciente. Abre tu Terminal.

2.  **Instalar PyOCD**
    Ejecuta el siguiente comando en tu Terminal:

    ```bash
    pip3 install -U pyocd
    ```

3.  **Instalar el Paquete de Soporte para XIAO RA4M1**
    El XIAO RA4M1 usa el chip `R7FA4M1AB`. Necesitas instalar el paquete de soporte específico.

    Busca el paquete:
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    Instala el paquete:
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **Verificar Objetivos**
    Verifica si el objetivo es reconocido:
    ```bash
    pyocd list --targets
    ```

</TabItem>
<TabItem value="Linux" label="Linux">

1.  **Prerrequisitos**
    Asegúrate de que `python3` y `pip` estén instalados a través de tu gestor de paquetes (por ejemplo, `sudo apt install python3-pip` en Ubuntu).

    :::note Permisos USB
    En Linux, también es posible que necesites configurar reglas udev para permitir el acceso al dispositivo USB sin usar `sudo`.
    :::

2.  **Instalar PyOCD**
    Ejecuta el siguiente comando en tu Terminal:

    ```bash
    pip3 install -U pyocd
    ```

3.  **Instalar el Paquete de Soporte para XIAO RA4M1**
    El XIAO RA4M1 usa el chip `R7FA4M1AB`.

    Busca el paquete:
    ```bash
    pyocd pack find r7fa4m1ab
    ```

    Instala el paquete:
    ```bash
    pyocd pack install r7fa4m1ab
    ```

4.  **Verificar Objetivos**
    Verifica si el objetivo es reconocido:
    ```bash
    pyocd list --targets
    ```

</TabItem>
</Tabs>


#### Entendiendo el Paquete `XIAO_Debug_Mate_DAPLink_Package`

Antes de que puedas comenzar a usar la función de Depurador DAPLink, necesitarás descargar el archivo ZIP por separado. Este archivo contiene todos los archivos requeridos para depurar varias placas XIAO.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_DAPLink_Package-v1.0.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Descargar archivo ZIP</font></span></strong>
    </a>
</div>


##### Explicación de la Estructura de Directorios

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
    Esta carpeta contiene archivos de firmware de ejemplo precompilados (por ejemplo, `.bin`, `.elf`, `.hex`) para varias placas XIAO, que fueron exportados desde Arduino. Estos se usarán en tutoriales posteriores para demostrar cómo flashear y depurar los microcontroladores.

*   **`target/`**
    Esta carpeta contiene archivos de configuración de objetivo (`.cfg`) para placas XIAO que podrían faltar en la distribución oficial de OpenOCD. Cuando uses placas como el XIAO SAMD21 o XIAO RA4M1 con la instalación existente de OpenOCD de tu sistema, necesitarás agregar manualmente estos archivos de configuración a tu entorno OpenOCD. Los pasos específicos sobre cómo hacer esto se cubrirán más adelante.

*   **`XIAO_MG24_..._OpenOCD-v0.12.0/`**
    Este es un componente especial y muy importante para la placa **XIAO MG24**. Actualmente, el soporte para este chip no está disponible en las versiones oficiales de OpenOCD o las distribuciones estándar de xPack. Para resolver esto, proporcionamos paquetes OpenOCD completos e independientes tanto para Windows (`XIAO_MG24_Win_...`) como para macOS/Linux (`XIAO_MG24_Mac_Linux_...`). Cuando trabajes con el XIAO MG24, **debes** usar el ejecutable `openocd` proporcionado dentro de estas carpetas específicas.

### Preparación del Hardware

Conectar tu hardware para depuración es sencillo.

#### Para Placas XIAO

:::tip
En términos generales, todas las funciones de XIAO en Debug Mate no requieren suministro de energía adicional a XIAO, a menos que se especifique lo contrario.
:::

El XIAO Debug Mate está diseñado para una experiencia perfecta y plug-and-play con todas las placas XIAO de Seeed Studio.

1.  Toma tu placa XIAO y alinéala con los conectores hembra en el Debug Mate.
2.  **Asegúrate de que el puerto USB-C en el XIAO esté orientado en la misma dirección que el puerto USB-C en el Debug Mate.**
3.  Presiona firmemente el XIAO directamente hacia abajo en el socket hasta que esté completamente asentado. Esto asegura que los pines pogo en el Debug Mate hagan una conexión sólida con las almohadillas SWD en la parte inferior del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

:::note
Algunas de las placas XIAO más tempranas, como el **XIAO SAMD21**, **XIAO RP2040**, y **XIAO nRF52840**, fueron diseñadas antes de que se estableciera un estándar unificado para las almohadillas del lado posterior. Aunque los pines pogo del Debug Mate están posicionados para ser lo más compatibles posible, las ligeras variaciones en estas placas más antiguas pueden llevar a un contacto imperfecto.

Si experimentas una conexión de depuración inestable, intenta **ajustar ligeramente la posición** de la placa XIAO dentro del socket. Es posible que no necesites empujarla completamente hacia abajo. Un pequeño cambio a menudo puede asegurar que los pines pogo hagan contacto sólido con las almohadillas SWD en la parte posterior del XIAO.
:::

:::danger hot-swapping
¡Recomendamos encarecidamente no hacer intercambio en caliente de XIAO y Debug Mate!
:::

#### Para Otras Placas de Desarrollo

También puedes usar el XIAO Debug Mate como una sonda de depuración SWD genérica para otras placas de desarrollo basadas en ARM.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/16.jpg" style={{width:800, height:'auto'}}/></div>

1.  Necesitarás cuatro cables DuPont (hembra-a-macho o hembra-a-hembra, dependiendo de tu placa objetivo).
2.  Localiza los pines de depuración SWD en tu placa objetivo. Estos típicamente están etiquetados como `SWDIO`, `SWCLK`, `GND`, y a veces `VTref` o `VCC`.
3.  Conecta los cables desde los headers de expansión del XIAO Debug Mate a tu placa objetivo de la siguiente manera:

| Pin del XIAO Debug Mate | Pin de la Placa Objetivo | Descripción                               |
| :---------------------- | :----------------------- | :---------------------------------------- |
| `SWDIO`                 | `SWDIO`                  | Entrada/Salida de Datos Serial Wire      |
| `SWCLK`                 | `SWCLK`                  | Reloj Serial Wire                         |
| `GND`                   | `GND`                    | Tierra Común                              |
| `VCC`                   | `VTref` o `3V3`          | Referencia de Voltaje Objetivo (Importante para el cambio de nivel) |

Una vez conectado, puedes configurar OpenOCD para usar la interfaz CMSIS-DAP e iniciar tu sesión de depuración como lo harías con cualquier otra sonda.


## Interactuando con OpenOCD vía Telnet

Mientras que los IDEs modernos proporcionan una interfaz gráfica para la depuración, a veces necesitas una forma más directa y de bajo nivel para interactuar con el depurador. Aquí es donde entra Telnet. OpenOCD ejecuta un servidor Telnet que te permite conectarte directamente y enviar comandos basados en texto para controlar el chip objetivo. Esto es increíblemente útil para verificaciones rápidas, automatización de tareas mediante scripts, o depuración de problemas cuando un IDE completo no está disponible o no es necesario.

### Habilitando el Cliente Telnet

Antes de poder usar Telnet, es posible que necesites habilitarlo en tu sistema operativo, ya que no siempre está instalado o habilitado por defecto.

<Tabs>
<TabItem value="Windows" label="Windows" default>

En sistemas Windows modernos, el cliente Telnet es una característica heredada que necesita ser habilitada manualmente.

1.  Presiona `Win` + `R` para abrir el diálogo "Run", escribe `control panel`, y presiona Enter.
2.  Ve a **Programs** > **Programs and Features**.
3.  En el lado izquierdo, haz clic en **Turn Windows features on or off**.
4.  En la nueva ventana que aparece, desplázate hacia abajo y encuentra **Telnet Client**.
5.  Marca la casilla junto a él y haz clic en **OK**. Windows instalará la característica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/debug_6.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="MacOS" label="MacOS">
El cliente Telnet nativo puede haber sido eliminado en versiones recientes de macOS. La forma más fácil de instalarlo es usando [Homebrew]. Abre tu Terminal y ejecuta:
```bash
brew install telnet
```
</TabItem>
<TabItem value="Linux" label="Linux">
La mayoría de las distribuciones Linux vienen con un cliente Telnet. Si no está presente, puedes instalarlo fácilmente usando tu gestor de paquetes. Para sistemas basados en Debian/Ubuntu, abre una terminal y ejecuta:
```bash
sudo apt-get update
sudo apt-get install telnet
```
</TabItem>
</Tabs>

### Depuración Paso a Paso con Telnet

#### Paso 1: Ejecutar el Servidor OpenOCD

Encuentra tu placa XIAO en la lista a continuación y sigue las instrucciones específicas para tu sistema operativo para iniciar el servidor OpenOCD. Este proceso servidor esperará una conexión de un depurador como GDB.

##### Para Seeed Studio XIAO SAMD21

El paquete estándar de OpenOCD no incluye el archivo de configuración para el XIAO SAMD21. Debes copiarlo manualmente desde nuestro paquete proporcionado al directorio de instalación de OpenOCD de tu sistema.

**1. Copiar el Archivo de Configuración**

*   **Archivo Fuente:** Desde el `XIAO_Debug_Mate_DAPLink_Package`, encuentra el archivo: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Carpeta Destino:** Copia este archivo en la carpeta de scripts `target` de tu instalación xPack OpenOCD. La ruta variará según el SO:

    *   **Windows:** `C:\Users\TuNombre\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Reemplaza `TuNombre` y `xpack-openocd-0.12.0-7` con tu nombre de usuario real y la versión de OpenOCD que instalaste.
:::

**2. Ejecutar el Comando OpenOCD**

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

Similar al SAMD21, el paquete estándar de OpenOCD no incluye el archivo de configuración para el XIAO RA4M1. Debes copiarlo manualmente.

**1. Copiar el Archivo de Configuración**

*   **Archivo Fuente:** Desde el `XIAO_Debug_Mate_DAPLink_Package`, encuentra el archivo: `target/XIAO_RA4M1/ra4m1.cfg`.
*   **Carpeta Destino:** Copia este archivo en la carpeta de scripts `target` de tu instalación xPack OpenOCD.

    *   **Windows:** `C:\Users\TuNombre\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Reemplaza `TuNombre` y `xpack-openocd-0.12.0-7` con tu nombre de usuario real y la versión de OpenOCD que instalaste.
:::

**2. Ejecutar el Comando OpenOCD**

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

:::warning[Importante]
El XIAO MG24 requiere una versión especial de OpenOCD que está incluida en el `XIAO_Debug_Mate_DAPLink_Package`. **No** uses tu instalación de OpenOCD del sistema. **Debes** ejecutar los comandos desde dentro del directorio específico proporcionado en el paquete.
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

**2. Ejecutar el Comando OpenOCD**

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

Entender qué hace cada parte del comando puede ayudarte a solucionar problemas o personalizar tu flujo de trabajo. Desglosemos un comando típico:

`bin/openocd -s share/openocd/scripts -f interface/cmsis-dap.cfg -f target/rp2040.cfg -c "..."`

*   `bin/openocd` (o `bin\openocd.exe`): Esto ejecuta el programa OpenOCD. Asumimos que está ubicado en un subdirectorio `bin`, que es una convención estándar. El nombre y la extensión variarán según el SO.

*   `-s share/openocd/scripts`: La bandera `-s` es crucial. Le dice a OpenOCD dónde bu**s**car su biblioteca de scripts. Con esta ruta establecida, OpenOCD puede encontrar los archivos especificados por las banderas `-f`.

*   `-f interface/cmsis-dap.cfg`: La bandera `-f` especifica un archivo de con**f**iguración a cargar. Este primero define el adaptador de depuración que estamos usando (una sonda CMSIS-DAP estándar).

*   `-f target/rp2040.cfg`: Esta segunda bandera `-f` carga la configuración para el microcontrolador objetivo (el chip RP2040 en la placa XIAO).

*   `-c "..."`: La bandera `-c` pasa un **c**omando a OpenOCD después de que inicia.
    *   `adapter speed 5000`: (Para RP2040/RP2350) Establece la velocidad del reloj SWD a 5000 kHz para comunicación estable.
    *   `reset_config srst_nogate`: (Para MG24) Una configuración de reinicio especial requerida para este objetivo específico.

Después de ejecutar uno de estos comandos, OpenOCD inicializará la conexión y esperará a que un depurador, como GDB, se conecte (típicamente en el puerto 3333). Luego puedes usar el depurador para cargar tu programa (`load <ruta/a/tu/firmware.elf>`), establecer puntos de interrupción, y depurar tu código.

#### Paso 2: Conectar al Servidor Telnet

Ahora, abre una **segunda, nueva** ventana de Command Prompt o Terminal. Escribe el siguiente comando y presiona Enter:

```bash
telnet localhost 4444
```

*   `localhost` se refiere a tu propia computadora.
*   `4444` es el número de puerto por defecto que OpenOCD usa para conexiones Telnet.

Si la conexión es exitosa, tu terminal mostrará un mensaje de bienvenida de OpenOCD, y verás un prompt `>`, listo para aceptar tus comandos.

#### Paso 3: Ejecutar Comandos de Depuración

Ahora puedes escribir comandos directamente en la sesión Telnet para controlar el chip objetivo. Aquí tienes algunos de los comandos más comunes:

| Comando             | Descripción                                                                                                                                                             |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `init`              | **Inicializar Objetivo.** Establece la conexión con el chip. Este siempre debe ser el primer comando que ejecutes después de conectarte.                                        |
| `reset halt`        | **Reiniciar y Detener.** Reinicia el microcontrolador e inmediatamente pausa (detiene) su ejecución. Esta es la forma principal de entrar en un estado listo para depuración.                       |
| `reg`               | **Mostrar Registros.** Muestra los valores actuales de todos los registros de la CPU.                                                                                                   |
| `mdw [address] [count]` | **Mostrar Memoria por Palabra.** Lee y muestra el contenido de la memoria. Por ejemplo, `mdw 0x20000000 10` mostrará 10 palabras (valores de 32 bits) comenzando desde la dirección de memoria `0x20000000`. |
| `step`              | **Paso Único.** Ejecuta una sola instrucción en la CPU. Si la instrucción es una llamada a función, entrará *dentro* de la función.                                      |
| `resume`            | **Reanudar Ejecución.** Permite que el programa se ejecute libremente desde su estado actual. Continuará hasta que encuentre un punto de interrupción (si hay alguno configurado) o lo detengas nuevamente.              |
| `exit`              | **Salir de Telnet.** Cierra la conexión Telnet y te devuelve al prompt de comandos. El servidor OpenOCD en la otra ventana permanecerá ejecutándose.                          |

Una sesión típica de depuración manual podría seguir estos pasos:
1.  Escribe `init` para conectarte al chip.
2.  Escribe `reset halt` para detener el programa al principio.
3.  Escribe `mdw 0x20000000 10` para inspeccionar algunos valores de RAM.
4.  Escribe `step` varias veces para recorrer el código de inicio inicial.
5.  Escribe `resume` para permitir que el programa se ejecute normalmente.
6.  Escribe `exit` cuando hayas terminado.

## Flashear el firmware usando OpenOCD/PyOCD

Más allá de la depuración interactiva, el XIAO Debug Mate sobresale en la programación (flasheo) de firmware directamente en el microcontrolador de un XIAO usando herramientas de línea de comandos. Las herramientas principales para esto son **OpenOCD** (Open On-Chip Debugger) y **PyOCD**.

Esta guía te llevará a través del uso de estas poderosas herramientas para cargar archivos de firmware precompilados. Usamos la designación "OpenOCD/PyOCD" porque la mayoría de las placas XIAO compatibles usan OpenOCD, mientras que el **XIAO RA4M1** específicamente requiere PyOCD para el flasheo.

### Compatibilidad de Flasheo

Esta tabla resume qué placas XIAO y tipos de archivo son compatibles para el flasheo por línea de comandos con las herramientas proporcionadas.

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

1. Los elementos marcados con ❌ en esta tabla de compatibilidad son muestras que fallaron las pruebas con OpenOCD v0.12.0. Por favor usa otros archivos de firmware para ahorrar tiempo.
2. Archivos de bootloader: Solo se proporcionan archivos de bootloader XIAO y comandos de flasheo aquí. Si este modelo XIAO no viene con archivos de bootloader, se marcará con ❌.
3. **El XIAO RA4M1 y XIAO MG24 no soportan el flasheo de archivos `.elf`. Intentar flashear archivos `.elf` al XIAO RA4M1 o XIAO MG24 resultará en dañar el dispositivo**.

### Prerrequisitos

1.  **Instalación de OpenOCD:** Para todas las placas XIAO **excepto el XIAO MG24**, necesitas [tener OpenOCD instalado en tu sistema y accesible desde tu línea de comandos (es decir, agregado al PATH de tu sistema)](#install-openocd).

2.  **Paquete de Firmware XIAO Debug Mate:** Hemos preparado un paquete que contiene archivos de configuración personalizados y firmware de ejemplo. Por favor descárgalo y extráelo. La estructura es la siguiente:

    *   `examples/`: Contiene firmware de ejemplo precompilado (`.elf`, `.hex`, `.bin`) para varias placas XIAO y algunos archivos de bootloader XIAO.
    *   `target/`: Contiene archivos de configuración OpenOCD personalizados (`.cfg`) requeridos para placas específicas como el XIAO SAMD21 y RA4M1.
    *   `XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0/`: Un OpenOCD autocontenido para flashear el XIAO MG24 en macOS y Linux.
    *   `XIAO_MG24_Win_OpenOCD-v0.12.0/`: Un OpenOCD autocontenido para flashear el XIAO MG24 en Windows.

3.  **Terminal/Símbolo del Sistema:** Necesitarás estar cómodo abriendo y usando una interfaz de línea de comandos (ej., Command Prompt, PowerShell, o Terminal).

#### Estrategia de Ejecución de Comandos

*   **Opción A (Recomendada): Ejecutar desde el Directorio del Paquete**

    Todos los comandos en esta guía asumen que has abierto tu terminal en la raíz de la carpeta extraída `XIAO_Debug_Mate_DAPLink_Package`. Este es el método más simple, ya que las rutas relativas a los archivos de firmware y configuración funcionarán directamente.

*   **Opción B (Avanzada): Ejecutar desde Cualquier Directorio**

    Si prefieres ejecutar comandos desde tu propia carpeta de proyecto, puedes usar la bandera `-s` para decirle a OpenOCD dónde encontrar los scripts personalizados de nuestro paquete.

    *   **Acción Requerida:** Agrega `-s <ruta_a_carpeta_paquete>` a tu comando `openocd`. Por ejemplo:

        ```bash
        # Replace <path_to_package_folder> with the actual path
        openocd -s <path_to_package_folder> -f interface/cmsis-dap.cfg -f target/XIAO_SAMD21/at91samd21g18.cfg ...
        ```

:::note
**Windows vs. macOS/Linux:** En todos los comandos, los usuarios de Windows deben usar `openocd.exe` en lugar de `openocd`. Recomendamos usar barras diagonales (`/`) en las rutas de archivos para compatibilidad multiplataforma.
:::

**Para flashear tu propio firmware personalizado:**

Simplemente reemplaza la ruta del ejemplo (ej., `examples/Blink_RP2040.elf`) con la ruta a tu propio archivo de firmware.

### Entendiendo los Archivos de Firmware (.bin, .hex, .elf)

Cuando compilas un proyecto, la cadena de herramientas produce un archivo para ser cargado al microcontrolador. Comúnmente encontrarás tres formatos:

*   **.bin (Binario):** Un archivo binario crudo y compacto que contiene solo el código máquina. No tiene información extra sobre direcciones de memoria, por lo que la herramienta de programación debe ser informada dónde colocarlo.
*   **.hex (Intel HEX):** Una representación en texto ASCII del código binario. Incluye direcciones de memoria, checksums y metadatos, haciéndolo un formato más robusto que `.bin`.
*   **.elf (Executable and Linkable Format):** El formato más completo. Contiene el código máquina, información de direcciones de memoria, y también información de depuración como nombres de funciones, nombres de variables y números de línea del código fuente. Este es el formato preferido para depuración.
*   **.bootloader (Archivo de Bootloader):** Un archivo de bootloader es una imagen de firmware especializada que reside en una región protegida de la memoria del microcontrolador y es responsable de facilitar el flasheo de firmware, recuperación del dispositivo y tareas de inicio. En las placas XIAO, el bootloader te permite cargar nuevo código de aplicación al dispositivo (a menudo por USB) sin necesidad de un programador de hardware dedicado. Si un dispositivo deja de responder o el programa principal falla, re-flashear el bootloader puede ayudar a recuperar la placa. Solo usa el archivo de bootloader oficial para tu modelo específico de placa, ya que usar un archivo incorrecto puede hacer que el dispositivo sea inoperable hasta que sea reparado con herramientas especiales.

**Cómo obtener estos archivos de tu proyecto:**

*   **Arduino IDE:** Después de compilar (`Sketch > Verify/Compile`), usa `Sketch > Export compiled Binary`. Esto guardará un archivo `.hex` o `.bin` en tu carpeta de sketch.
*   **PlatformIO:** Después de una compilación exitosa, los archivos de firmware (`firmware.bin`, `firmware.hex`, `firmware.elf`) se encuentran en el directorio `.pio/build/<environment_name>/` de tu proyecto.



### Flasheando archivos `.bin`

#### Para Seeed Studio XIAO SAMD21

El paquete estándar de OpenOCD no incluye el archivo de configuración para el XIAO SAMD21. Debes copiarlo manualmente desde nuestro paquete proporcionado al directorio de instalación de OpenOCD de tu sistema.

**1. Copiar el Archivo de Configuración**

*   **Archivo Fuente:** Desde el `XIAO_Debug_Mate_DAPLink_Package`, encuentra el archivo: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Carpeta Destino:** Copia este archivo en la carpeta de scripts `target` de tu instalación xPack OpenOCD. La ruta variará según el SO:

    *   **Windows:** `C:\Users\TuNombre\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Reemplaza `TuNombre` y `xpack-openocd-0.12.0-7` con tu nombre de usuario real y la versión de OpenOCD que instalaste.
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

Al usar OpenOCD para flashear el XIAO RP2040, se recomienda encarecidamente usar archivos `.elf` en lugar de archivos `.bin`.

Esto se debe a que los archivos `.elf` ya contienen internamente la información de dirección de memoria del programa (Linker Address). OpenOCD lo escribirá automáticamente en la ubicación correcta (generalmente `0x10000000`), por lo que no necesitas calcular manualmente o adivinar la dirección de desplazamiento.

Si debes usar archivos `.bin`, necesitas especificar manualmente la dirección de inicio de Flash del XIAO RP2040 `0x10000000`.

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

Al usar OpenOCD para flashear el XIAO RP2350, se recomienda encarecidamente usar archivos `.elf` en lugar de archivos `.bin`.

Esto se debe a que los archivos `.elf` ya contienen internamente la información de dirección de memoria del programa (Linker Address). OpenOCD lo escribirá automáticamente en la ubicación correcta (generalmente `0x10000000`), por lo que no necesitas calcular manualmente o adivinar la dirección de desplazamiento.

Si debes usar archivos `.bin`, necesitas especificar manualmente la dirección de inicio de Flash del XIAO RP2350 `0x10000000`.

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


### Flasheando Archivos `.elf`

:::danger
Al flashear archivos `.elf`, presta mucha atención al tamaño del firmware. Si el archivo excede los 2MB, asegúrate de que tu dispositivo tenga suficiente espacio de almacenamiento Flash. ¡No hacerlo puede resultar en dañar tu dispositivo!
:::

#### Para Seeed Studio XIAO SAMD21

Debido a la memoria Flash limitada de 256KB del XIAO SAMD21, típicamente no puede grabar archivos de firmware mayores a 256KB. El archivo `.elf` del ejemplo Blink ya alcanza 658KB, haciéndolo imposible de grabar. Recomendamos usar archivos `.bin` o `.hex` más pequeños en su lugar.

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

:::danger NO DAÑES EL DISPOSITIVO
¡¡¡XIAO RA4M1 prohíbe flashear archivos `.elf`, ya que hacerlo puede dañar el dispositivo!!!
:::

---

#### Para Seeed Studio XIAO MG24

:::danger NO DAÑES EL DISPOSITIVO
¡¡¡XIAO MG24 prohíbe flashear archivos `.elf`, ya que hacerlo puede dañar el dispositivo!!!
:::


### Flasheando Archivos `.hex`

#### Para Seeed Studio XIAO SAMD21

El paquete OpenOCD estándar no incluye el archivo de configuración para el XIAO SAMD21. Debes copiarlo manualmente desde nuestro paquete proporcionado al directorio de instalación de OpenOCD de tu sistema.

**1. Copiar el Archivo de Configuración**

*   **Archivo Fuente:** Desde el `XIAO_Debug_Mate_DAPLink_Package`, encuentra el archivo: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Carpeta de Destino:** Copia este archivo en la carpeta de scripts `target` de tu instalación xPack OpenOCD. La ruta variará según el SO:

    *   **Windows:** `C:\Users\TuNombre\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Reemplaza `TuNombre` y `xpack-openocd-0.12.0-7` con tu nombre de usuario real y la versión de OpenOCD que instalaste.
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

**Explicación del Comando:**
*   `pyocd flash`: Ejecuta la operación de flasheo.
*   `-e sector`: Borra los sectores necesarios de la memoria flash antes de programar.
*   `-a 0x0`: Especifica la dirección de inicio para flashear, que es `0x00000000`.
*   `-t r7fa4m1ab`: Especifica el tipo de MCU objetivo.
*   `examples\Blink_RA4M1.hex` o `examples/Blink_RA4M1.hex`: La ruta al archivo de firmware que quieres flashear. Nota el uso de `\` en Windows y `/` en macOS/Linux.

#### Para Seeed Studio XIAO MG24

Esta placa requiere su versión dedicada de OpenOCD del paquete. **Debes** navegar al directorio correcto antes de ejecutar el comando.

1.  **Navegar al directorio correcto:**
    *   **En Windows:** Abre un Command Prompt y ejecuta:
        `cd XIAO_MG24_Win_OpenOCD-v0.12.0`
    *   **En macOS/Linux:** Abre una Terminal y ejecuta:
        `cd XIAO_MG24_Mac_Linux_OpenOCD-v0.12.0`

2.  **Ejecutar el comando de flasheo:**
    La ruta al firmware ahora es `../examples/Blink_MG24.hex` porque estás dos niveles dentro del directorio del paquete.

    **En Windows:**
    ```powershell
    bin\openocd.exe -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```

    **En macOS / Linux:**
    ```bash
    bin/openocd -f interface/cmsis-dap.cfg -f target/efm32s2_g23.cfg -c "init; reset_config srst_nogate; reset halt; program ../examples/Blink_MG24.hex; reset; exit"
    ```


### Flasheando Archivos de Bootloader

Esta es una operación crítica que puede restaurar una placa.

#### Para Seeed Studio XIAO SAMD21

El paquete estándar de OpenOCD no incluye el archivo de configuración para el XIAO SAMD21. Debes copiarlo manualmente desde nuestro paquete proporcionado al directorio de instalación de OpenOCD de tu sistema.

**1. Copiar el Archivo de Configuración**

*   **Archivo Fuente:** Desde el `XIAO_Debug_Mate_DAPLink_Package`, encuentra el archivo: `target/XIAO_SAMD21/at91samd21g18.cfg`.
*   **Carpeta de Destino:** Copia este archivo en la carpeta de scripts `target` de tu instalación xPack OpenOCD. La ruta variará según el SO:

    *   **Windows:** `C:\Users\TuNombre\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\openocd\scripts\target\`
    *   **macOS / Linux:** `~/opt/xpack-openocd-0.12.0-7/share/openocd/scripts/target/`

:::note
Reemplaza `TuNombre` y `xpack-openocd-0.12.0-7` con tu nombre de usuario real y la versión de OpenOCD que instalaste.
:::

**2. Flashear el firmware**

Este comando utiliza el archivo personalizado `at91samd21g18.cfg` proporcionado en nuestro paquete para flashear un bootloader `.bin`.

*   **En Windows:**
```powershell
openocd.exe -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

*   **En macOS / Linux:**
```bash
openocd -f interface/cmsis-dap.cfg -f target/at91samd21g18.cfg -c "telnet_port disabled; init; targets; halt; program examples/Bootloader_SAMD21.bin verify reset; shutdown"
```

#### Para Seeed Studio XIAO nRF52840

Este proceso implica descargar el bootloader, luego borrar el chip y flashear el nuevo archivo.

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
Después de grabar el Bootloader usando OpenOCD y luego grabar el bin del firmware, el bin del firmware no puede ejecutarse correctamente. Necesitas subir un programa usando Arduino para hacer que el programa funcione normalmente.

Esto se debe a que los Bootloaders de chips de la serie Nordic (como nRF52832) necesitan verificar información de validez sobre el firmware de la aplicación en una dirección de memoria específica (generalmente llamada "Bootloader Settings Page") durante el arranque. Esta "página de configuración" contiene el checksum CRC del firmware, la longitud y las banderas de validez.

Cuando usas herramientas de programación de propósito general como OpenOCD para grabar directamente archivos .bin, solo escriben los datos binarios del firmware en la dirección de inicio de aplicación especificada, y no generan ni escriben automáticamente la "página de configuración" requerida por el Bootloader. Por lo tanto, cuando el dispositivo se reinicia, el Bootloader no puede detectar una página de configuración válida y determina que no hay una aplicación legítima, rechazando así iniciar el firmware y generalmente entrando en modo DFU (Device Firmware Update), esperando actualizaciones vía OTA o puerto serie.
:::

#### Para Seeed Studio XIAO RA4M1

Actualmente, las distribuciones estándar de OpenOCD a menudo carecen de soporte integrado para la serie Renesas RA, como controladores dedicados y archivos de configuración de destino. Esto hace que usar OpenOCD para flashear sea un proceso complejo que requiere configuración manual.

Por lo tanto, recomendamos encarecidamente usar `PyOCD`, que proporciona soporte listo para usar para el RA4M1.

Para flashear el Bootloader, usa el comando correspondiente a tu sistema operativo.

**En Windows:**
```powershell
pyocd flash -t r7fa4m1ab examples\Bootloader_RA4M1.hex —erase chip
```

**En macOS / Linux:**
```bash
pyocd flash -t r7fa4m1ab examples/Bootloader_RA4M1.hex —erase chip
```


## Usando Depuración en PlatformIO

Primero, asegúrate de tener la extensión PlatformIO IDE instalada en Visual Studio Code.

1.  **Instalar VS Code**: [Descargar e instalar Visual Studio Code](https://code.visualstudio.com/).
2.  **Instalar PlatformIO IDE**: Abre VS Code, navega a la vista de Extensiones (Ctrl+Shift+X), busca `PlatformIO IDE`, e instálalo.

### Creando y Configurando un Proyecto PlatformIO

1.  **Lanzar PlatformIO**: Haz clic en el icono de PlatformIO en la Barra de Actividad de VS Code y selecciona "Home" para abrir la pantalla de PIO Home.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/17.png" style={{width:1000, height:'auto'}}/></div>

2.  **Crear un Nuevo Proyecto**: Haz clic en "New Project" y dale un nombre a tu proyecto.
    *   **Seleccionar Placa**: Busca la placa XIAO específica que pretendes usar.

:::note
Dado que las placas de Seeed Studio están alojadas en un repositorio de terceros, tu placa específica podría no aparecer en la lista de búsqueda por defecto. Si esto sucede, puedes seleccionar una placa genérica (o cualquier placa disponible) para inicializar el proyecto, y lo corregiremos en el siguiente paso.
:::

3.  **Configurar `platformio.ini`**: Este es el paso más crítico. Para habilitar la depuración con el XIAO Debug Mate y reconocer correctamente la placa, debes modificar el archivo `platformio.ini` ubicado en la raíz de tu proyecto.

    **Agregando Soporte para Placas de Seeed Studio:**
    Las placas de desarrollo de Seeed Studio no están incluidas en el registro predeterminado de PlatformIO pero se mantienen en un **repositorio de terceros**. Para usarlas, debes especificar la URL del repositorio en tu configuración.

    Necesitas establecer el parámetro `platform` a la siguiente URL:
    `https://github.com/Seeed-Studio/platform-seeedboards`

    El archivo de configuración le dice a PlatformIO que descargue las definiciones de placa desde este repositorio personalizado, y especifica qué herramientas usar para subir y depurar. El XIAO Debug Mate funciona como un depurador **CMSIS-DAP** estándar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/18.png" style={{width:1000, height:'auto'}}/></div>

    A continuación se muestran las configuraciones `platformio.ini` recomendadas para varios modelos XIAO. Copia el contenido correspondiente a tu placa. Estamos usando la versión de desarrollo de la plataforma desde GitHub para asegurar que tengas los archivos de soporte de placa más recientes.

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

Para el nRF52840, PlatformIO ofrece dos paquetes de soporte de placa. Elige el que se ajuste a los requisitos de tu proyecto.

**Núcleo Mbed:**
```ini
[env:seeed-xiao-mbed-nrf52840]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mbed-nrf52840
framework = arduino
upload_protocol = cmsis-dap
debug_tool = cmsis-dap
```

**Núcleo Adafruit:**
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

Ten en cuenta que el RA4M1 es un caso especial. Usa `pyocd` para subir pero aún usa `cmsis-dap` para depurar.

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

Después de guardar el archivo `platformio.ini`, PlatformIO descargará automáticamente todas las cadenas de herramientas y paquetes necesarios la próxima vez que compiles o depures.

### Depuración paso a paso

La ejecución paso a paso es una característica central para rastrear la lógica de tu código e identificar errores.

1.  **Conectar Hardware**: Conecta tu placa XIAO al XIAO Debug Mate. Conecta el Debug Mate a tu computadora usando un cable USB-C.
2.  **Iniciar Depuración**: Puedes iniciar una sesión de depuración de dos maneras:
    *   Presiona la tecla `F5`.
    *   Navega a la vista "Run and Debug" (icono de error en la Barra de Actividad) y haz clic en la flecha verde "Start Debugging" en la parte superior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/19.png" style={{width:1000, height:'auto'}}/></div>

3.  **Controles de Depuración**: PlatformIO compilará tu código, lo subirá al XIAO vía el Debug Mate, y pausará la ejecución en la primera línea de `main()` o `setup()`. Una barra de herramientas de depuración aparecerá en la parte superior del editor, permitiéndote controlar el flujo del programa:
    *   **Continue (F5)**: Reanudar la ejecución hasta que se alcance el siguiente punto de interrupción o el programa termine.
    *   **Step Over (F10)**: Ejecutar la línea actual. Si la línea contiene una llamada a función, ejecutará toda la función y se detendrá en la siguiente línea.
    *   **Step Into (F11)**: Ejecutar la línea actual. Si la línea contiene una llamada a función, el depurador entrará en la función y se detendrá en su primera línea.
    *   **Step Out (Shift+F11)**: Si está pausado dentro de una función, esto ejecutará el resto de la función y regresará a la línea donde fue llamada.
    *   **Restart (Ctrl+Shift+F5)**: Terminar y reiniciar la sesión de depuración actual.
    *   **Stop (Shift+F5)**: Terminar la sesión de depuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/20.png" style={{width:1000, height:'auto'}}/></div>

### Depuración con puntos de interrupción

Si quieres que el programa se pause en una ubicación específica, los puntos de interrupción son la herramienta adecuada para el trabajo.

1.  **Establecer un Punto de Interrupción**: En el editor de código, mueve tu cursor a la izquierda del número de línea donde quieres pausar. Aparecerá un punto rojo tenue. Haz clic en él para establecer un punto de interrupción (el punto se volverá rojo brillante).
2.  **Ejecutar hasta el Punto de Interrupción**: Inicia una sesión de depuración (`F5`). El programa se ejecutará a toda velocidad y se pausará automáticamente cuando llegue a la línea con el punto de interrupción.
3.  **Gestionar Puntos de Interrupción**: En el panel lateral "Run and Debug", la sección "BREAKPOINTS" lista todos los puntos de interrupción activos. Puedes habilitarlos, deshabilitarlos o eliminarlos desde aquí.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/21.png" style={{width:1000, height:'auto'}}/></div>

### Lectura/Escritura de RAM

Mientras el programa está pausado en un punto de interrupción, puedes inspeccionar e incluso modificar el estado de las variables.

1.  **Ver Variables (Lectura)**: En el panel lateral "Run and Debug", la sección "VARIABLES" muestra todas las variables locales y globales dentro del ámbito actual y sus valores actuales.
2.  **Observar Variables**: Si quieres monitorear variables específicas o expresiones, ve a la sección "WATCH", haz clic en el icono `+`, e ingresa el nombre de la variable (por ejemplo, `myVariable` o `&myVariable` para ver su dirección de memoria).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/22.png" style={{width:1000, height:'auto'}}/></div>

3.  **Modificar Variables (Escritura)**: En las secciones "VARIABLES" o "WATCH", a menudo puedes hacer doble clic en el valor de una variable para ingresar uno nuevo. Presiona Enter para aplicar el cambio. Esto es increíblemente útil para probar diferentes condiciones sin reiniciar tu programa.


## Solución de problemas

### P1: Si dañé mi XIAO RA4M1, ¿hay alguna manera de arreglarlo?

Puedes intentar volver a flashear el bootloader para restaurar el dispositivo. Para el modelo XIAO RA4M1, consulta **[este método](#for-seeed-studio-xiao-ra4m1-2)** para la recuperación del bootloader.

Al restaurar el Bootloader, si ocurre un error, intenta conectar el XIAO RA4M1 al XIAO Debug Mate, que está conectado a tu computadora. Mantén presionado el botón B en el XIAO RA4M1 mientras simultáneamente haces clic en el botón R una vez, luego suelta ambos R y B. Procede a flashear el Bootloader nuevamente.

Después de flashear el Bootloader, intenta actualizar nuevamente el firmware usando software como Arduino. Esto usualmente restaura la funcionalidad. Si no tiene éxito, el dispositivo puede estar permanentemente dañado e irreparable. Cualquier acción que involucre flashear firmware con XIAO Debug Mate puede requerir que asumas toda la responsabilidad.


### P2: ¿Cómo puedes saber si un dispositivo ha sido dañado?

La forma más directa de determinar si el dispositivo XIAO está dañado es que no muestra conexión de puerto serie cuando se conecta a una computadora. Si el dispositivo aún no muestra conexión de puerto serie después de mantener presionado el botón B y luego conectarlo a la computadora, el dispositivo está dañado.


### P3: ¿Se puede reparar el equipo dañado? ¿Puedo contactar al soporte técnico para solicitar un reemplazo?

El daño a los dispositivos XIAO típicamente es causado por problemas con el particionado o el archivo del Bootloader. Esto usualmente se puede resolver volviendo a flashear el archivo del Bootloader. Si esto falla, actualmente no hay soluciones alternativas. Los usuarios deben asumir toda la responsabilidad por realizar esta operación ellos mismos, así que por favor asegúrate de que los comandos de flasheo y el firmware estén verificados y sean válidos.

### P4: ¿XIAO Debug Mate requiere un controlador?

XIAO Debug Mate ha sido probado y verificado en los sistemas operativos de computadora más recientes y funciona normalmente sin requerir instalación de controladores. Para computadoras Windows, recomendamos usar el sistema operativo **Windows 11**. Durante las pruebas, descubrimos que si has instalado controladores usando Zading, puede causar que el dispositivo falle en ser reconocido.

### P5: Mi XIAO Debug Mate muestra consistentemente una luz roja en Windows 11 y no puede ser reconocido, reportando el error: "unable to find a matching CMSIS-DAP device."

Respecto al problema donde tu XIAO Debug Mate muestra una luz roja y reporta "unable to find a matching CMSIS-DAP device" en Windows 11, por favor intenta los siguientes pasos de solución de problemas:

**1. Verificar el Cable USB**

Primero, por favor asegúrate de que el cable USB que estás usando soporte transferencia de datos y no sea solo un cable de carga. Puedes verificar esto comprobando si el dispositivo aparece en un software de monitor serie o si puedes ver cualquier registro del dispositivo. Si la computadora no reacciona en absoluto cuando se conecta, intenta cambiar el cable.

**2. Reinstalar el Controlador vía PowerShell**

Si se confirma que el cable está funcionando, el problema probablemente es causado por una instalación incorrecta del controlador. Puedes resolver esto removiendo el controlador conflictivo usando PowerShell. Por favor sigue estos pasos:

1.  Haz clic derecho en el botón Inicio y selecciona **Terminal (Admin)** o **PowerShell (Admin)**.

2.  Ejecuta el siguiente comando para encontrar los detalles del controlador CMSIS-DAP:

    ```powershell
    dism /online /get-drivers /format:table | findstr /i "cmsis-dap"
    ```
3.  Busca el **"Published Name"** (usualmente se ve como `oemXX.inf`) en la salida.

4.  Ejecuta el siguiente comando para eliminar y desinstalar el controlador (reemplaza `{inf_name}` con el nombre real que encontraste en el paso anterior, por ejemplo, `oem10.inf`):

    ```powershell
    pnputil /delete-driver {inf_name} /uninstall
    ```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/40.png" style={{width:1000, height:'auto'}}/></div>

Después de completar estos pasos, por favor reconecta tu dispositivo y verifica si es reconocido correctamente.

### P6: ¿Qué debo hacer si la versión de OpenOCD mostrada en mi sistema es diferente de la captura de pantalla en el Wiki?

Si verificas la versión de OpenOCD en tu sistema y la salida no coincide con la versión recomendada mostrada en las capturas de pantalla del Wiki, puedes tener múltiples instalaciones de OpenOCD, o tu sistema está usando una versión diferente por defecto.

En computadoras Windows, abre las **Variables de Entorno del Sistema** y ve a la sección **Variables del sistema**. Edita la variable `Path` y mueve la ruta para la instalación de OpenOCD recomendada por el Wiki (por ejemplo, `C:\Users\YourName\AppData\Local\xPacks\OpenOCD\xpack-openocd-0.12.0-7\bin`) hasta la parte superior de la lista. Esto asegura que la versión recomendada de OpenOCD será encontrada y usada primero por tu sistema. Después de hacer este cambio, abre una nueva terminal y vuelve a ejecutar `openocd --version` para confirmar que la versión correcta ahora se muestra.



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
