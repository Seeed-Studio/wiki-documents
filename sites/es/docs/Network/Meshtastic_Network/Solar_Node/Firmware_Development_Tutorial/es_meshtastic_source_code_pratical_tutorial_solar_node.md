---
description: Un tutorial práctico para configurar el entorno del código fuente del firmware de Meshtastic, compilar el nodo solar y flashear el firmware.
title: Tutorial de desarrollo del código fuente de Meshtastic
keywords:
  - Meshtastic
  - Source Code
  - PlatformIO
  - Solar Node
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image12.png
slug: /meshtastic_source_code_practical_tutorial_solar_node
sidebar_position: 4
last_update:
  date: 3/18/2026
  author: ycl
url: https://wiki.seeedstudio.com/es/meshtastic_source_code_practical_tutorial_solar_node/
createdAt: '2026-03-19'
updatedAt: '2026-05-14'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial práctico del código fuente del firmware de Meshtastic

Este tutorial está pensado para usuarios que recién comienzan con el código fuente del firmware de Meshtastic. Incluye flujos de trabajo comunes tanto para Windows como para macOS. El objetivo es sencillo: clonar el repositorio oficial, completar una compilación exitosa, hacer un cambio sencillo en la interfaz de usuario y flashear el firmware modificado al dispositivo para su verificación.

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

El instalador normalmente comienza a descargarse automáticamente cuando abres la página. Una vez completada la descarga, haz doble clic en el instalador y sigue el asistente de configuración.

Durante la instalación, el paso más importante es **ajustar tu entorno PATH**. Elige:

**Git from the command line and also from 3rd-party software**

Para las demás opciones, los valores predeterminados suelen ser suficientes. Simplemente sigue haciendo clic en `Next`.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

Espera hasta que finalice la instalación.

Después de la instalación, **cierra todas las ventanas actuales de PowerShell y terminales de VS Code**, luego abre una nueva ventana de PowerShell y ejecuta:

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
4. Busca `Path` bajo **System variables**
5. Haz clic en **Edit**
6. Haz clic en **New** y añade las dos rutas siguientes:

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. Haz clic en **OK** en todas las ventanas para guardar

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

Después de guardar, aún necesitas:

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

macOS a menudo ya incluye un entorno Python. Antes de instalar una nueva versión, comprueba si `python3` y `pip3` ya están disponibles:

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

Este paso puede resultar menos amigable para principiantes porque PlatformIO descarga muchas dependencias automáticamente, y la instalación puede llevar algo de tiempo. Si aparecen errores durante la instalación, normalmente es mejor esperar con paciencia y solucionar un problema a la vez. Usar herramientas de IA para ayudar a inspeccionar los mensajes de error también puede ahorrar tiempo.

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

Una vez que el repositorio esté listo, puedes continuar con cualquiera de los dos proyectos prácticos siguientes. El Proyecto A se centra en la personalización de la interfaz de usuario de `Wio Tracker L1`. El Proyecto B se centra en la telemetría ambiental con `XIAO ESP32S3` sobre Meshtastic.

## Proyecto A: personalización de la interfaz de usuario de Wio Tracker L1

### Práctica guiada

En esta etapa, no te apresures a editar el código. Primero, asegúrate de que el proyecto pueda ejecutar correctamente todo el proceso de compilación.

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
5. Volver a compilar el firmware y flashear el archivo UF2 generado al dispositivo para su verificación.

**Paso 1: confirmar que el proyecto compila correctamente**

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

Si la interfaz se ve similar a la captura de pantalla anterior, el proceso de compilación se ha iniciado correctamente. La primera compilación suele tardar un tiempo, así que ten paciencia.

**Si la compilación falla**

Cuando una compilación falla, primero puedes pedir a PlatformIO que instale las dependencias requeridas por el entorno actual:

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

Este enfoque tiene varias ventajas:

- Solo instala las dependencias, sin iniciar inmediatamente una compilación completa.
- Facilita ver qué paquete está causando el problema.
- Los mensajes de error suelen estar más enfocados y ser más fáciles de depurar.

Después de que se instalen las dependencias, ejecuta:

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

**Práctica 1: Modificar la visualización de la interfaz de usuario**

Comienza rastreando la implementación de la pantalla desde la configuración a nivel de placa. Primero puedes comprobar:

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

A partir de estos archivos de configuración, puedes ver que L1 define `HAS_SCREEN` y `USE_SSD1306`. Eso significa que utiliza la canalización estándar de pantalla OLED, no una configuración sin pantalla y no una solución de tinta electrónica.

Si sigues rastreando la lógica de visualización, la mayor parte del código relacionado se encuentra en:

- `src/graphics/`
- `src/graphics/draw/`

La forma exacta en que lo modifiques depende de tu capacidad para leer el código fuente. Aquí empezamos con un ejemplo muy sencillo: modificar la interfaz de inicio.

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

Esta parte gestiona el área utilizada por la hora, correo, silencio y otros iconos en el lado derecho. Añadí `headerLabelRight` para limitar el máximo límite derecho del texto central y evitar la superposición con el contenido del lado derecho.

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

Esta es la lógica central de la modificación. Solo se aplica a `SEEED_WIO_TRACKER_L1` y excluye explícitamente la variante de tinta electrónica. Centra el texto `made by AE` en el espacio en blanco entre la información de la batería y la visualización de la hora.

**Cambio 5: Gestionar la rama en la que no se muestra la hora**

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

La lógica de visualización ha cambiado, pero el objetivo de compilación sigue siendo el mismo:

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

### Flashear el firmware

Una vez que la compilación haya finalizado, abre la página oficial de flasheo:

[Meshtastic Flasher](https://flasher.meshtastic.org/)

En la mayoría de los casos, primero deberías realizar una operación de borrado.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

Luego selecciona el archivo de firmware que acabas de compilar y flashea el dispositivo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

En este punto, el ejercicio práctico del código fuente de Meshtastic está completo. Has pasado por todo el flujo de trabajo: configuración del entorno, clonación del repositorio, descubrimiento de la configuración de la placa, compilación del firmware, modificación de la lógica de visualización y verificación final del flasheo.

Si quieres ir más allá, puedes seguir explorando estas direcciones:

1. Modificar más elementos en la pantalla de inicio
2. Ajustar el comportamiento de botones, GPS, Bluetooth y otros módulos
3. Añadir un `variant` independiente para tu propia placa
4. Seguir rastreando las relaciones entre `src/`, `variants/` y `boards/`

Si quieres un ejemplo a nivel de código fuente más orientado a funcionalidades, continúa con el Proyecto B a continuación. Construye un nodo dedicado de telemetría ambiental con `XIAO ESP32S3 + Wio-SX1262 + SHT40`. En comparación con la modificación de la interfaz de Wio Tracker L1 anterior, esta parte se centra en la configuración predeterminada, el temporizado de telemetría y la verificación real de la malla entre dos nodos.

## Proyecto B: nodo de telemetría ambiental con XIAO ESP32S3

### Objetivo del proyecto

Este ejemplo avanzado utiliza dos dispositivos Meshtastic en la misma malla.

**Nodo sensor remoto**

- Leer temperatura y humedad desde `SHT40`
- Usar telemetría ambiental de Meshtastic
- Enviar telemetría a la malla
- Cambiar el intervalo de envío en la malla a `60s`
- Omitir la configuración interactiva de región en el primer arranque
- Establecer la región predeterminada en `US`

**Nodo de gateway cercano**

- Unirse a la red Meshtastic como `CLIENT`
- Recibir paquetes remotos `TELEMETRY_APP` por LoRa
- Analizar `environmentMetrics.temperature`
- Analizar `environmentMetrics.relativeHumidity`

**Ruta de comunicación**

```plain
XIAO ESP32S3 + Wio-SX1262 + SHT40 -> Meshtastic LoRa -> XIAO ESP32S3 + Wio-SX1262 (or any other device on the same mesh)
```

### Preparación de hardware

**Hardware del nodo remoto**

- Seeed `XIAO ESP32S3`
- `Wio-SX1262`
- `SHT40`

**Hardware del nodo gateway**

El nodo cercano puede ser cualquier dispositivo Meshtastic que se una a la misma red. En los ejemplos siguientes, sigo usando otro dispositivo `XIAO ESP32S3 + Wio-SX1262`.

**Cableado del SHT40**

- `VCC -> 3V3`
- `GND -> GND`
- `SDA -> GPIO5`
- `SCL -> GPIO6`

Ajustes confirmados que funcionan:

- `I2C address = 0x44`
- `GPIO5 / GPIO6` es el par de cableado I2C que funciona actualmente

La siguiente foto muestra el cableado real utilizado en el nodo remoto:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image1.png)

**Módulos y SKU utilizados en este proyecto**

- [`Seeeduino XIAO Expansion Board`](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) (`SKU: 103030356`)
- [`XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa`](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) (`SKU: 102010611`)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image11.png)

### Modificar el firmware de Meshtastic para el nodo remoto

El entorno objetivo para este proyecto es:

```plain
seeed-xiao-s3
```

Los archivos principales son:

- `variants/esp32s3/seeed_xiao_s3/platformio.ini`
- `src/modules/Telemetry/EnvironmentTelemetry.h`
- `src/modules/Telemetry/EnvironmentTelemetry.cpp`

En esta parte, solo actualiza la sección `build_flags` en `variants/esp32s3/seeed_xiao_s3/platformio.ini`. Mantén el resto del archivo original sin cambios.

```ini
build_flags =
  ${esp32s3_base.build_flags}
  -D SEEED_XIAO_S3
  -D ENVIRONMENTAL_TELEMETRY_MODULE_ENABLE=1 ; enable environmental telemetry by default
  -D USERPREFS_CONFIG_LORA_REGION=meshtastic_Config_LoRaConfig_RegionCode_US ; set the default region to US
  -D USERPREFS_CONFIG_DEVICE_ROLE=meshtastic_Config_DeviceConfig_Role_SENSOR ; set the default role to SENSOR
  -I variants/esp32s3/seeed_xiao_s3
  -DBOARD_HAS_PSRAM
  -DARDUINO_USB_MODE=0
```

El cambio en `build_flags` debería verse similar a esto:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image4.png)

Estas tres banderas hacen lo siguiente:

- Habilitar la telemetría ambiental de forma predeterminada
- Establecer la región predeterminada en `US`, de modo que el primer arranque ya no se detenga en la selección de región
- Establecer el rol de dispositivo predeterminado en `SENSOR`

El cambio de temporización de la telemetría se implementa en `EnvironmentTelemetry.h` y `EnvironmentTelemetry.cpp`, no en `platformio.ini`.

Después de la modificación completa, el comportamiento pasa a ser:

- La telemetría ambiental está habilitada de forma predeterminada
- El dispositivo se inicia con la región `US`
- El dispositivo se inicia con el rol `SENSOR`
- La telemetría ambiental de la malla se envía cada `60s`
- `path=phone` y `path=mesh` se registran por separado
- La marca de tiempo de envío por malla solo se actualiza después de que un envío real por malla se complete correctamente

El registro de envío por malla esperado se ve así:

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
```

### Configurar el nodo gateway cercano

Usa un dispositivo Meshtastic cercano como `CLIENT` en la misma malla. Después de que el nodo remoto comience a enviar telemetría, confirma que el gateway puede recibir:

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

Si el gateway sigue intentando conectarse a Wi‑Fi durante las pruebas, desactiva el Wi‑Fi con la CLI de Meshtastic. Sustituye `<gateway_port>` por tu puerto serie real, como `COMx` en Windows o `/dev/cu.usbmodem...` en macOS.

```bash
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

### Compilar, flashear y verificar

**Paso 1: Copiar los archivos modificados**

Antes de compilar, copia los tres archivos modificados en tu árbol de código fuente de Meshtastic `2.7.20` o `2.7.21`:

| Archivo en el paquete | Sustituye este archivo en tu árbol de código fuente de Meshtastic |
| --- | --- |
| `meshtastic-2.7.20-s3-files/variants/esp32s3/seeed_xiao_s3/platformio.ini` | `<your Meshtastic directory>/variants/esp32s3/seeed_xiao_s3/platformio.ini` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.h` | `<your Meshtastic directory>/src/modules/Telemetry/EnvironmentTelemetry.h` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.cpp` | `<your Meshtastic directory>/src/modules/Telemetry/EnvironmentTelemetry.cpp` |

Enlaces de descarga directa:

- [📎EnvironmentTelemetry.h](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.h)
- [📎EnvironmentTelemetry.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.cpp)

Si copias los archivos con un gestor de archivos gráfico, el aviso de reemplazo debería verse similar a esto:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image5.png)

**Paso 2: Compilar el firmware remoto**

Desde la raíz del firmware de Meshtastic, ejecuta:

```bash
pio run -e seeed-xiao-s3
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image6.png)

**Paso 3: Subir al nodo remoto**

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio device list
pio run -e seeed-xiao-s3 -t upload --upload-port COMx
```

Si necesitas entrar en modo de descarga manualmente:

1. Mantén pulsado `BOOT`
2. Pulsa `RESET`
3. Suelta `RESET`
4. Suelta `BOOT`

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio device list
pio run -e seeed-xiao-s3 -t upload --upload-port /dev/cu.usbmodemXXXX
```

</TabItem>
</Tabs>

Usa primero `pio device list` para poder identificar el puerto serie correcto:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image7.png)

Cuando termine la carga, PlatformIO debería informar que el flasheo fue correcto:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image8.png)

**Paso 4: Monitorizar los registros serie**

Usa el monitor serie de PlatformIO para comprobar tanto el nodo remoto como el gateway cercano.

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pio device monitor -p COMx -b 115200
pio device monitor -p COMy -b 115200
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio device monitor -p /dev/cu.usbmodemE072A1D89EB81 -b 115200
pio device monitor -p /dev/cu.usbmodem3030F917FF281 -b 115200
```

</TabItem>
</Tabs>

Busca registros como:

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
Send: relative_humidity=...
Send: ... temperature=...
```

**Paso 5: Validar con la CLI de Meshtastic**

Primero instala la CLI:

<Tabs>
<TabItem value="windows" label="Windows">

```plain
pip install meshtastic
```

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pip3 install meshtastic
```

</TabItem>
</Tabs>

Después de la instalación, vuelve a abrir la terminal y confirma que `meshtastic --help` funciona.

Para los comandos siguientes, sustituye `<gateway_port>` por el puerto serie real de tu gateway:

- Ejemplo en Windows: `COMx`
- Ejemplo en macOS: `/dev/cu.usbmodem3030F917FF281`

```bash
meshtastic --port <gateway_port> --listen --debug
meshtastic --port <gateway_port> --nodes --show-fields user.id,user.longName,user.shortName
meshtastic --port <gateway_port> --get bluetooth.enabled --get bluetooth.mode --get bluetooth.fixed_pin --get power.wait_bluetooth_secs --get power.is_power_saving
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

Concéntrate en:

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**Paso 6: Confirmar en la app móvil**

Después de flashear, conéctate al nodo remoto con la app móvil de Meshtastic y confirma que los datos ambientales son visibles. Luego conecta la app a otro dispositivo en la misma malla y revisa la vista `Nodes` para confirmar que los valores del sensor se están recibiendo a través de la malla.

En el nodo sensor remoto, deberías poder ver los valores de telemetría ambiental directamente en la app:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image9.png)

En el nodo cercano, las mismas lecturas deberían aparecer en la vista `Nodes` después de que se reenvíen a través de la malla:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image10.png)

## Proyecto C: Personalización del sonido de inicio y apagado del T1000-E

### Objetivo del proyecto

Este ejemplo compacto se centra en una personalización a nivel de código fuente muy pequeña pero fácil de percibir: sustituir los sonidos predeterminados de inicio y apagado del T1000-E por un tono personalizado más limpio.

En comparación con el Proyecto A y el Proyecto B, este proyecto solo cambia un archivo fuente y solo dos funciones. Es un buen ejemplo de cómo realizar un cambio de comportamiento específico de una placa sin afectar al resto de la base de código de Meshtastic.

### Modificar `buzz.cpp`

El único archivo modificado en este proyecto es:

- `src/buzz/buzz.cpp`

Las dos funciones modificadas son:

- `playStartMelody()`
- `playShutdownMelody()`

En ambos lugares, se añade una rama `#if defined(TRACKER_T1000_E)`.

Esa estructura es importante porque mantiene la personalización aislada al objetivo `T1000-E`:

- `TRACKER_T1000_E` usa el tono de inicio personalizado
- `TRACKER_T1000_E` usa el tono de apagado personalizado correspondiente
- Todas las demás placas Meshtastic siguen usando la melodía predeterminada original en la ruta `#else` existente

Esto significa que el cambio es deliberadamente de alcance reducido. Personaliza la experiencia de usuario para una placa, mientras conserva el comportamiento original para todos los demás objetivos compatibles.

En mi versión de prueba local, la melodía de inicio se cambia a un tono ascendente más parecido al de un teléfono, y la melodía de apagado se cambia a un tono descendente a juego.

Si quieres documentar la modificación con mayor claridad, basta con capturar una sola captura de pantalla que incluya ambas funciones en la misma vista:

- el bloque `#if defined(TRACKER_T1000_E)` en `playStartMelody()`
- el bloque `#if defined(TRACKER_T1000_E)` en `playShutdownMelody()`

Esa única captura de pantalla ya explica tanto el cambio de código como el alcance específico de la placa, por lo que no necesitas una imagen aparte solo para explicar que las otras placas no se ven afectadas.

### Compilar y verificar

Cuando la modificación esté completa, compila el objetivo T1000-E:

```bash
pio run -e tracker-t1000-e
```

En mi compilación de prueba, este objetivo se compiló correctamente después del cambio de melodía.

Cuando la compilación pase, flashea el firmware al T1000-E y verifica el resultado directamente en el hardware:

1. Enciende el dispositivo y confirma que suena el nuevo tono de inicio.
2. Apaga el dispositivo y confirma que suena el tono de apagado correspondiente.
3. Si es posible, compara el nuevo sonido con la melodía predeterminada original para que la diferencia sea fácil de notar.

### Imágenes sugeridas

Para mantener el Proyecto C corto y legible, normalmente bastan tres imágenes:

1. Una captura de pantalla de `buzz.cpp` que muestre `playStartMelody()` y `playShutdownMelody()` en el mismo fotograma
2. Una captura de pantalla de la terminal que muestre que `pio run -e tracker-t1000-e` se ejecutó correctamente
3. Una imagen de verificación en el dispositivo real o un video corto que muestre la prueba de encendido o apagado del T1000-E

Si el zumbador no suena durante las pruebas, primero comprueba si el modo de zumbador del dispositivo está habilitado. En `playTones()`, el código termina antes de tiempo cuando el zumbador está deshabilitado o configurado en modo solo notificaciones.

## Problemas comunes

**El comando `git` no está disponible**

- En Windows, primero comprueba si Git se ha añadido a `PATH`.
- En macOS, ejecuta primero `git --version`. Si el sistema te pide instalar las Command Line Tools, sigue las indicaciones.

**`python3` o `pip3` no están disponibles**

- En Windows, confirma que Python se añadió a `PATH`, o vuelve a abrir la terminal e inténtalo de nuevo.
- En macOS, primero comprueba si `python3` / `pip3` ya existen, e instala Python con Homebrew solo si es necesario.

**El comando `pio` no está disponible**

- Ejecuta primero `pio --version`.
- Si el comando sigue sin estar disponible, reinicia VS Code y la terminal, y luego inténtalo de nuevo.
- Si es necesario, reinstala la extensión PlatformIO y confirma que PlatformIO Core se haya inicializado correctamente.

**El código sigue pareciendo incompleto después de `git submodule update --init`**

- Primero asegúrate de estar en el directorio raíz del repositorio `firmware`.
- Si la conexión de red es inestable, inténtalo de nuevo con:

```bash
git submodule update --init --recursive
```

**La primera compilación tarda demasiado**

- Es normal que la primera compilación descargue muchas dependencias.
- Si parece bloqueada durante demasiado tiempo, intenta instalar primero los paquetes por separado:

```bash
pio pkg install -e seeed_wio_tracker_L1
```

Luego ejecuta la compilación de nuevo.

**El cliente web no muestra toda la telemetría ambiental**

- El cliente web de Meshtastic actualmente no proporciona una interfaz completa para la telemetría ambiental remota.
- La página `Messages` / `Broadcast` es para tráfico de chat, no una página dedicada a telemetría.
- Si los valores no aparecen allí, eso no significa automáticamente que el enlace de malla haya fallado.

**Ver datos en un teléfono no demuestra el reenvío en malla**

- Ver valores actualizados en un teléfono conectado directamente solo demuestra que el enlace local teléfono-dispositivo está funcionando.
- Esto no demuestra automáticamente que la telemetría ambiental ya se haya reenviado a la malla.
- Para confirmar un reenvío real en la malla, comprueba estos elementos en los registros:
- `Environment telemetry dispatch path=mesh ...`
- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**La compilación `seeed-xiao-s3` falla durante la primera configuración**

- La primera instalación de dependencias puede tardar mucho tiempo. Esto es normal.
- Si el entorno de destino falla, instala primero los paquetes y luego ejecuta una compilación detallada:

```bash
pio pkg install -e seeed-xiao-s3
pio run -e seeed-xiao-s3 -v
```

- Cuando las dependencias estén listas, vuelve a la compilación normal:

```bash
pio run -e seeed-xiao-s3
```
## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>