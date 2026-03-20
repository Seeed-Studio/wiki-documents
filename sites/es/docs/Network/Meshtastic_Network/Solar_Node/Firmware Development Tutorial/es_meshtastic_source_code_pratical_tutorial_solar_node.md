---
description: Un tutorial práctico para configurar el entorno del código fuente del firmware de Meshtastic, compilar el nodo solar y grabar el firmware.
title: Tutorial de Desarrollo con el Código Fuente de Meshtastic
keywords:
  - Meshtastic
  - Código Fuente
  - PlatformIO
  - Nodo Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png
slug: /meshtastic_source_code_practical_tutorial_solar_node
sidebar_position: 4
last_update:
  date: 3/18/2026
  author: ycl
url: https://wiki.seeedstudio.com/es/meshtastic_source_code_practical_tutorial_solar_node/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial Práctico del Código Fuente del Firmware de Meshtastic

Este tutorial está pensado para usuarios que recién comienzan con el código fuente del firmware de Meshtastic. Incluye flujos de trabajo comunes tanto para Windows como para macOS. El objetivo es sencillo: clonar el repositorio oficial, completar una compilación exitosa, hacer un cambio sencillo en la interfaz de usuario y grabar el firmware modificado en el dispositivo para su verificación.

Si ya estás familiarizado con Git, Python o PlatformIO, puedes omitir las secciones correspondientes e ir directamente a la parte práctica.

:::tip
Esta guía incluye comandos comunes tanto para Windows como para macOS. La mayoría de las capturas de pantalla siguen tomadas en un entorno Windows, pero el flujo de trabajo general en macOS es muy similar.
:::

## Requisitos previos

Antes de comenzar, prepara las siguientes herramientas:

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. Instalar Git

<Tabs>
<TabItem value="windows" label="Windows">

Abre la página oficial de descarga de Git para Windows:

[Git for Windows](https://git-scm.com/install/windows)

El instalador normalmente comienza a descargarse automáticamente cuando abres la página. Después de que termine la descarga, haz doble clic en el instalador y sigue el asistente de instalación.

Durante la instalación, el paso más importante es **ajustar tu variable de entorno PATH**. Elige:

**Git from the command line and also from 3rd-party software**

Para las demás opciones, los valores predeterminados suelen ser suficientes. Simplemente sigue haciendo clic en `Next`.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

Espera hasta que finalice la instalación.

Después de la instalación, **cierra todas las ventanas actuales de PowerShell y de terminal de VS Code**, luego abre una nueva ventana de PowerShell y ejecuta:

```plain
& "C:\Program Files\Git\cmd\git.exe" --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image2.png)

Si se muestra un número de versión de Git, Git se ha instalado correctamente.

**Si el comando `git` sigue sin estar disponible**

Primero puedes ejecutar los siguientes comandos en PowerShell para confirmar las rutas de instalación predeterminadas de Git:

```plain
$gitCmd = "C:\Program Files\Git\cmd"
$gitBin = "C:\Program Files\Git\bin"
Write-Host $gitCmd
Write-Host $gitBin
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image3.png)

Luego añade Git manualmente a las variables de entorno del sistema.

**Pasos de corrección mediante GUI**

1. Pulsa `Win`
2. Busca "Edit the system environment variables"
3. Ábrelo y haz clic en **Environment Variables**
4. Busca `Path` en **System variables**
5. Haz clic en **Edit**
6. Haz clic en **New** y añade las dos rutas siguientes:

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. Haz clic en **OK** en todas las ventanas para guardar

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

Después de guardar, todavía necesitas:

- Cerrar **todas** las ventanas de PowerShell
- Abrir PowerShell de nuevo

Luego ejecuta:

```plain
git --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image5.png)

Si aparece un número de versión, la instalación está completa.

</TabItem>

<TabItem value="macos" label="macOS">

En macOS, Git se puede instalar de más de una manera, pero usar Homebrew suele ser la opción más sencilla:

1. Instala primero las Command Line Tools:

```bash
xcode-select --install
```

2. Si Homebrew aún no está instalado, instálalo primero:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Instala Git:

```bash
brew install git
```

4. Comprueba la versión instalada:

```bash
git --version
```

Si tu terminal ya devuelve una versión válida de Git, no necesitas instalarlo de nuevo.

</TabItem>
</Tabs>

**Configura tu identidad de Git**

A continuación, configura tu información de usuario de Git. Sustituye los valores de ejemplo por tu propio nombre y dirección de correo electrónico:

```plain
git config --global user.name "your name"
git config --global user.email "your mail@gmail.com"
```

Luego ejecuta:

```plain
git config --global --list
```

para confirmar que la configuración ha tenido efecto.

### 2. Instalar Python 3

**Instalar Python desde la línea de comandos**

<Tabs>
<TabItem value="windows" label="Windows">

Ejecuta los siguientes comandos en la terminal:

```plain
winget search --id Python.Python.3.13 --source winget
winget install -e --id Python.Python.3.13 --source winget
```

Si el primer comando puede encontrar Python, el segundo normalmente debería instalarlo directamente.

Después de la instalación, cierra la terminal y ábrela de nuevo, luego ejecuta:

```plain
python --version
pip --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image6.png)

Si se muestran números de versión, Python y pip están listos para usarse.

</TabItem>

<TabItem value="macos" label="macOS">

macOS a menudo ya incluye un entorno de Python. Antes de instalar una nueva versión, comprueba si `python3` y `pip3` ya están disponibles:

```bash
python3 --version
pip3 --version
```

Si no están disponibles, o si quieres una versión más reciente, instala Python con Homebrew:

```bash
brew install python
```

Después de la instalación, vuelve a abrir la terminal y ejecuta:

```bash
python3 --version
pip3 --version
```

Si prefieres usar `python` y `pip`, puedes configurar alias de shell por tu cuenta. Sin embargo, en macOS, usar `python3` y `pip3` suele ser la opción más fiable.

</TabItem>
</Tabs>

### 3. Instalar PlatformIO

Este paso puede resultar menos amigable para principiantes porque PlatformIO descarga muchas dependencias automáticamente y la instalación puede llevar algo de tiempo. Si aparecen errores durante la instalación, normalmente es mejor esperar con paciencia y solucionar los problemas uno por uno. Usar herramientas de IA para ayudar a inspeccionar los mensajes de error también puede ahorrar tiempo.

Busca `PlatformIO` en el marketplace de Extensiones de VS Code e instálalo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

Después de la instalación, normalmente aparece un icono con forma de hormiga en la barra de herramientas izquierda.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 4. Clonar el repositorio del firmware de Meshtastic

El repositorio oficial del firmware de Meshtastic es `meshtastic/firmware`.

<Tabs>
<TabItem value="windows" label="Windows">

Ejecuta los siguientes comandos en la terminal de tu directorio de trabajo:

```plain
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

Si tu directorio de proyecto está en otra unidad o bajo una ruta diferente, cambia primero a esa ubicación.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

Si la salida se ve similar a las capturas de pantalla anteriores, el repositorio se ha clonado correctamente.

</TabItem>

<TabItem value="macos" label="macOS">

Ejecuta los siguientes comandos en la terminal de tu directorio de trabajo:

```bash
cd ~/workplace
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

Si `~/workplace` aún no existe, créalo primero:

```bash
mkdir -p ~/workplace
```

Si los comandos se completan con normalidad, el repositorio se ha clonado correctamente.

</TabItem>
</Tabs>

### 5. Práctica práctica

En esta etapa, no te apresures a editar el código. Primero, asegúrate de que el proyecto pueda pasar correctamente por todo el proceso de compilación.

Se recomienda comenzar con tres tareas:

1. Abrir `firmware`
2. Revisar `platformio.ini`
3. Encontrar el entorno de compilación para tu placa de destino

Un detalle importante: no te centres solo en el `platformio.ini` de la raíz. En realidad, incluye archivos de configuración adicionales, por ejemplo:

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

Eso significa que las definiciones reales de entorno a nivel de placa suelen estar ubicadas bajo `variants/.../platformio.ini`.

Al identificar la placa de destino, presta especial atención a estos dos directorios:

- `variants/`
- `boards/`

Aquí usamos **Wio Tracker L1 Pro** como placa de destino de ejemplo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

Esto muestra que, en Meshtastic, **el objetivo de compilación para Wio Tracker L1 / L1 Pro es** `seeed_wio_tracker_L1`.

**Resumen de modificación mínima**

Si solo quieres completar una práctica mínima de extremo a extremo, céntrate en estos pasos clave:

1. Instalar Git, Python 3, VS Code y PlatformIO.
2. Clonar el repositorio `meshtastic/firmware` e inicializar los submódulos.
3. Usar `pio run -e seeed_wio_tracker_L1` para confirmar que el proyecto original compila correctamente.
4. Modificar la lógica de visualización en `src/graphics/SharedUIDisplay.cpp`.
5. Volver a compilar el firmware y grabar el archivo UF2 generado en el dispositivo para su verificación.

**Paso 1: Confirmar que el proyecto compila correctamente**

Aquí usamos la CLI de PlatformIO Core para compilar.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png)

Para la primera compilación, se recomienda ejecutar el siguiente comando:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image13.png)

Si la interfaz se ve similar a la captura de pantalla anterior, el proceso de compilación se ha iniciado correctamente. La primera compilación suele tardar un rato, así que ten paciencia.

**Si la compilación falla**

Cuando una compilación falla, primero puedes pedirle a PlatformIO que instale las dependencias requeridas por el entorno actual:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio pkg install -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio pkg install -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

Este enfoque tiene varios beneficios:

- Instala solo las dependencias, sin iniciar inmediatamente una compilación completa.
- Facilita ver qué paquete está causando el problema.
- Los mensajes de error suelen estar más enfocados y son más fáciles de depurar.

Después de instalar las dependencias, ejecuta:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio run -e seeed_wio_tracker_L1 -v
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio run -e seeed_wio_tracker_L1 -v
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image14.png)

Una vez que se complete la instalación de dependencias, ejecuta de nuevo la compilación normal:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image15.png)

Si la compilación pasa en este punto, la salida de tu firmware se ha generado correctamente.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image16.png)

**Paso 2: Modificar el código**

**Práctica 1: Modificar la interfaz de usuario (UI)**

Comienza rastreando la implementación de la pantalla desde la configuración a nivel de placa. Primero puedes comprobar:

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

A partir de estos archivos de configuración, puedes ver que L1 define `HAS_SCREEN` y `USE_SSD1306`. Eso significa que utiliza la canalización estándar de pantalla OLED, no una configuración sin pantalla y no una solución de tinta electrónica (E-Ink).

Si sigues rastreando la lógica de la pantalla, la mayor parte del código relacionado se encuentra en:

- `src/graphics/`
- `src/graphics/draw/`

La forma exacta en que lo modifiques depende de tu capacidad para leer el código fuente. Aquí comenzamos con un ejemplo muy sencillo: modificar la interfaz de inicio.

**Cambio 1: Registrar el borde derecho del texto de la batería**

```cpp
Before / After

// Before
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;

// After
int batteryX = 1;
int batteryY = HEADER_OFFSET_Y + 1;
int batteryTextEndX = batteryX - 1;
```

`src/graphics/SharedUIDisplay.cpp:157`

Esto añade `batteryTextEndX`, que registra la posición final del texto del porcentaje de batería. Eso facilita añadir texto personalizado después de la información de la batería más adelante.

**Cambio 2: Calcular el límite derecho mientras se dibuja el porcentaje de batería**

```cpp
// Before
if (chargePercent != 101) {
    char chargeStr[4];
    snprintf(chargeStr, sizeof(chargeStr), "%d", chargePercent);
    int chargeNumWidth = display->getStringWidth(chargeStr);
    display->drawString(batteryX, textY, chargeStr);
    display->drawString(batteryX + chargeNumWidth - 1, textY, "%");
    if (isBold) {
        display->drawString(batteryX + 1, textY, chargeStr);
        display->drawString(batteryX + chargeNumWidth, textY, "%");
    }
}

// After
if (chargePercent != 101) {
    char chargeStr[4];
    snprintf(chargeStr, sizeof(chargeStr), "%d", chargePercent);
    int chargeNumWidth = display->getStringWidth(chargeStr);
    int percentWidth = display->getStringWidth("%");
    display->drawString(batteryX, textY, chargeStr);
    display->drawString(batteryX + chargeNumWidth - 1, textY, "%");
    if (isBold) {
        display->drawString(batteryX + 1, textY, chargeStr);
        display->drawString(batteryX + chargeNumWidth, textY, "%");
    }
    batteryTextEndX = batteryX + chargeNumWidth + percentWidth - 1 + (isBold ? 1 : 0);
} else {
    batteryTextEndX = batteryX - 1;
}
```

`src/graphics/SharedUIDisplay.cpp:204`

Este código se encuentra dentro de la lógica de dibujo del porcentaje de batería. Además de mostrar el nivel de batería con normalidad, también calcula el límite derecho del área de texto para que se puedan colocar etiquetas personalizadas después de la información de la batería.

**Cambio 3: Reservar un límite para el área de iconos de la derecha**

```cpp
// Before
int iconRightEdge = timeX - 2;

// After
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;
```

`src/graphics/SharedUIDisplay.cpp:263`

Esta parte gestiona el área utilizada por los iconos de hora, correo, silencio y otros en el lado derecho. Añadí `headerLabelRight` para limitar el máximo borde derecho del texto central y evitar que se superponga con el contenido del lado derecho.

**Cambio 4: Dibujar una etiqueta personalizada cuando el título está vacío**

```cpp
// Newly added core logic
#if defined(SEEED_WIO_TRACKER_L1) && !defined(SEEED_WIO_TRACKER_L1_EINK)
if (titleStr && titleStr[0] == '\0') {
    static const char *yclLabel = "made by AE";
    int labelWidth = display->getStringWidth(yclLabel);
    int labelLeft = batteryTextEndX + 4;
    if (labelLeft + labelWidth <= headerLabelRight) {
        int labelX = labelLeft + ((headerLabelRight - labelLeft) - labelWidth) / 2;
        display->drawString(labelX, textY, yclLabel);
        if (isBold)
            display->drawString(labelX + 1, textY, yclLabel);
    }
}
#endif
```

`src/graphics/SharedUIDisplay.cpp:350`

Esta es la lógica central de la modificación. Solo se aplica a `SEEED_WIO_TRACKER_L1` y excluye explícitamente la variante de tinta electrónica (E-Ink). Centra el texto `made by AE` en el espacio en blanco entre la información de la batería y la visualización de la hora.

**Cambio 5: Gestionar la rama donde no se muestra la hora**

```cpp
// Add the same boundary control for the no-time branch
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;
```

`src/graphics/SharedUIDisplay.cpp:377`

Esta es la rama que se utiliza cuando no se muestra ningún valor de hora. Aquí también es necesario añadir el mismo control de límites.

```cpp
#if defined(SEEED_WIO_TRACKER_L1) && !defined(SEEED_WIO_TRACKER_L1_EINK)
        if (titleStr && titleStr[0] == '\0') {
            static const char *yclLabel = "made by AE";
            int labelWidth = display->getStringWidth(yclLabel);
            int labelLeft = batteryTextEndX + 4;
            if (labelLeft + labelWidth <= headerLabelRight) {
                int labelX = labelLeft + ((headerLabelRight - labelLeft) - labelWidth) / 2;
                display->drawString(labelX, textY, yclLabel);
                if (isBold)
                    display->drawString(labelX + 1, textY, yclLabel);
            }
        }
#endif
```

`src/graphics/SharedUIDisplay.cpp:426`

Esta es la implementación para dibujar `made by AE` en la rama sin hora.

Puedes encontrar el código completo aquí:

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**Paso 3: Compila tu propio firmware**

Después de terminar la modificación, vuelve a la raíz del proyecto y compila de nuevo el mismo objetivo:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
cd D:\workplace\firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
cd ~/workplace/firmware  # Adjust to your actual project path
pio run -e seeed_wio_tracker_L1
```

</TabItem>
</Tabs>

La lógica de la pantalla ha cambiado, pero el objetivo de compilación sigue siendo el mismo:

```plain
seeed_wio_tracker_L1
```

Tras una compilación exitosa, la salida suele ubicarse en:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
D:\workplace\firmware\.pio\build\seeed_wio_tracker_L1\
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
~/workplace/firmware/.pio/build/seeed_wio_tracker_L1/
```

</TabItem>
</Tabs>

El archivo que debes confirmar que se ha actualizado es:

```plain
firmware-seeed_wio_tracker_L1-*.uf2
```

### 6. Flashear el firmware

Después de que la compilación se complete, abre la página oficial de flasheo:

[Meshtastic Flasher](https://flasher.meshtastic.org/)

En la mayoría de los casos, primero deberías realizar una operación de borrado.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

Luego selecciona el archivo de firmware que acabas de compilar y flashea el dispositivo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

En este punto, el ejercicio práctico del código fuente de Meshtastic está completo. Has pasado por todo el flujo de trabajo: configuración del entorno, clonación del repositorio, descubrimiento de la configuración de la placa, compilación del firmware, modificación de la lógica de la pantalla y verificación final del flasheo.

Si quieres ir más allá, puedes seguir explorando estas direcciones:

1. Modificar más elementos en la pantalla de inicio
2. Ajustar el comportamiento de los botones, el GPS, el Bluetooth y otros módulos
3. Añadir un `variant` independiente para tu propia placa
4. Seguir rastreando las relaciones entre `src/`, `variants/` y `boards/`

## Problemas comunes

**El comando `git` no está disponible**

- En Windows, primero comprueba si Git se ha añadido a `PATH`.
- En macOS, ejecuta primero `git --version`. Si el sistema te pide instalar las Command Line Tools, sigue la indicación.

**`python3` o `pip3` no están disponibles**

- En Windows, confirma que Python se añadió a `PATH`, o vuelve a abrir la terminal e inténtalo de nuevo.
- En macOS, primero comprueba si `python3` / `pip3` ya existen, e instala Python con Homebrew solo si es necesario.

**El comando `pio` no está disponible**

- Ejecuta primero `pio --version`.
- Si el comando sigue sin estar disponible, reinicia VS Code y la terminal, luego inténtalo de nuevo.
- Si es necesario, reinstala la extensión PlatformIO y confirma que PlatformIO Core se haya inicializado correctamente.

**El código sigue viéndose incompleto después de `git submodule update --init`**

- Primero asegúrate de estar en el directorio raíz del repositorio `firmware`.
- Si la conexión de red es inestable, inténtalo de nuevo con:

```bash
git submodule update --init --recursive
```

**La primera compilación tarda demasiado**

- Es normal que la primera compilación descargue muchas dependencias.
- Si parece que se queda atascada durante demasiado tiempo, intenta instalar primero los paquetes por separado:

```bash
pio pkg install -e seeed_wio_tracker_L1
```

Luego ejecuta la compilación de nuevo.
