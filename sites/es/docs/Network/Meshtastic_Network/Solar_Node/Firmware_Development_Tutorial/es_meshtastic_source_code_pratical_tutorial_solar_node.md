---
description: Un tutorial práctico para configurar el entorno del código fuente del firmware Meshtastic, compilar el nodo solar y flashear el firmware.
title: Tutorial de Desarrollo del Código Fuente de Meshtastic
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
createdAt: '2026-03-19'
updatedAt: '2026-03-19'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tutorial Práctico del Código Fuente del Firmware Meshtastic

Este tutorial está dirigido a usuarios que están comenzando con el código fuente del firmware Meshtastic. Incluye flujos de trabajo comunes tanto para Windows como para macOS. El objetivo es sencillo: clonar el repositorio oficial, completar una compilación exitosa, realizar un cambio simple en la interfaz de usuario y flashear el firmware modificado en el dispositivo para su verificación.

Si ya estás familiarizado con Git, Python o PlatformIO, puedes saltarte las secciones correspondientes y pasar directamente a la parte práctica.

:::tip
Esta guía incluye comandos comunes para Windows y macOS. La mayoría de las capturas de pantalla aún se toman desde un entorno Windows, pero el flujo de trabajo general en macOS es muy similar.
:::

## Requisitos Previos

Antes de comenzar, prepara las siguientes herramientas:

1. Git
2. Python 3
3. VS Code
4. PlatformIO

### 1. Instalar Git

<Tabs>
<TabItem value="windows" label="Windows">

Abre la página oficial de descarga de Git para Windows:

[Git para Windows](https://git-scm.com/install/windows)

El instalador generalmente comienza a descargarse automáticamente cuando abres la página. Una vez completada la descarga, haz doble clic en el instalador y sigue el asistente de configuración.

Durante la instalación, el paso más importante es **Ajustar tu variable de entorno PATH**. Elige:

**Git desde la línea de comandos y también desde software de terceros**

Para las otras opciones, los valores predeterminados suelen estar bien. Solo sigue haciendo clic en `Siguiente`.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image1.png)

Espera hasta que finalice la instalación.

Después de la instalación, **cierra todas las ventanas actuales de PowerShell y terminal de VS Code**, luego abre una nueva ventana de PowerShell y ejecuta:

```plain
& "C:\Program Files\Git\cmd\git.exe" --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image2.png)

Si se muestra un número de versión de Git, Git se ha instalado correctamente.

**Si el comando `git` aún no está disponible**

Puedes ejecutar primero los siguientes comandos en PowerShell para confirmar las rutas de instalación predeterminadas de Git:

```plain
$gitCmd = "C:\Program Files\Git\cmd"
$gitBin = "C:\Program Files\Git\bin"
Write-Host $gitCmd
Write-Host $gitBin
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image3.png)

Luego, agrega manualmente Git a las variables de entorno del sistema.

**Pasos de corrección mediante GUI**

1. Presiona `Win`
2. Busca "Editar las variables de entorno del sistema"
3. Ábrelo y haz clic en **Variables de entorno**
4. Encuentra `Path` en **Variables del sistema**
5. Haz clic en **Editar**
6. Haz clic en **Nuevo** y agrega las siguientes dos rutas:

```plain
C:\Program Files\Git\cmd
C:\Program Files\Git\bin
```

7. Haz clic en **Aceptar** hasta guardar

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image4.png)

Después de guardar, aún necesitas:

- Cerrar **todas** las ventanas de PowerShell
- Abrir PowerShell nuevamente

Luego ejecuta:

```plain
git --version
```

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image5.png)

Si aparece un número de versión, la instalación está completa.

</TabItem>

<TabItem value="macos" label="macOS">

En macOS, Git se puede instalar de más de una manera, pero usar Homebrew suele ser la opción más fácil:

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

4. Verifica la versión instalada:

```bash
git --version
```

Si tu terminal ya devuelve una versión válida de Git, no necesitas instalarla nuevamente.

</TabItem>
</Tabs>

**Configura tu identidad de Git**

A continuación, configura tu información de usuario de Git. Reemplaza los valores de ejemplo con tu propio nombre y dirección de correo electrónico:

```plain
git config --global user.name "your name"
git config --global user.email "your mail@gmail.com"
```

Luego ejecuta:

```plain
git config --global --list
```

para confirmar que la configuración ha surtido efecto.

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

Si se muestran números de versión, Python y pip están listos para usar.

</TabItem>

<TabItem value="macos" label="macOS">

macOS a menudo ya incluye un entorno Python. Antes de instalar una nueva versión, verifica si `python3` y `pip3` ya están disponibles:

```bash
python3 --version
pip3 --version
```

Si no están disponibles, o si deseas una versión más nueva, instala Python con Homebrew:

```bash
brew install python
```

Después de la instalación, vuelve a abrir la terminal y ejecuta:

```bash
python3 --version
pip3 --version
```

Si prefieres usar `python` y `pip`, puedes configurar alias de shell tú mismo. Sin embargo, en macOS, usar `python3` y `pip3` suele ser la opción más confiable.

</TabItem>
</Tabs>

### 3. Instalar PlatformIO

Este paso puede parecer menos amigable para principiantes porque PlatformIO descarga muchas dependencias automáticamente y la instalación puede llevar algún tiempo. Si aparecen errores durante la instalación, generalmente es mejor esperar con paciencia y solucionar un problema a la vez. Usar herramientas de IA para ayudar a inspeccionar los mensajes de error también puede ahorrar tiempo.

Busca `PlatformIO` en el mercado de extensiones de VS Code e instálalo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image7.png)

Después de la instalación, generalmente aparece un icono con forma de hormiga en la barra de herramientas izquierda.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image8.png)

### 4. Clonar el repositorio del firmware Meshtastic

El repositorio oficial del firmware Meshtastic es `meshtastic/firmware`.

<Tabs>
<TabItem value="windows" label="Windows">

Ejecuta los siguientes comandos en la terminal de tu directorio de trabajo:

```plain
git clone https://github.com/meshtastic/firmware.git
cd firmware
git submodule update --init
```

Si tu directorio del proyecto está en una unidad diferente o bajo una ruta diferente, cambia primero a esa ubicación.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image9.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image10.png)

Si la salida se parece a las capturas de pantalla anteriores, el repositorio se ha clonado con éxito.

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

Si los comandos se completan normalmente, el repositorio se ha clonado con éxito.

</TabItem>
</Tabs>

Una vez que el repositorio esté listo, puedes continuar con cualquiera de los siguientes dos proyectos prácticos. El Proyecto A se centra en la personalización de la interfaz de usuario de `Wio Tracker L1`. El Proyecto B se centra en la telemetría ambiental de `XIAO ESP32S3` a través de Meshtastic.

## Proyecto A: Personalización de la interfaz de usuario de Wio Tracker L1

### Práctica práctica

En esta etapa, no te apresures a editar el código. Primero, asegúrate de que el proyecto pueda ejecutar el proceso de compilación completo con éxito.

Se recomienda comenzar con tres tareas:

1. Abrir `firmware`
2. Verificar `platformio.ini`
3. Encontrar el entorno de compilación para tu placa objetivo

Un detalle importante: no te enfoques solo en el `platformio.ini` raíz. En realidad, incluye archivos de configuración adicionales, por ejemplo:

```plain
extra_configs =
    variants/*/*.ini
    variants/*/*/platformio.ini
    variants/*/diy/*/platformio.ini
```

Eso significa que las definiciones reales del entorno a nivel de placa generalmente se encuentran bajo `variants/.../platformio.ini`.

Al identificar la placa objetivo, presta especial atención a estos dos directorios:

- `variants/`
- `boards/`

Aquí usamos **Wio Tracker L1 Pro** como el objetivo de ejemplo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image11.png)

Esto muestra que, en Meshtastic, **el objetivo de compilación para Wio Tracker L1 / L1 Pro es** `seeed_wio_tracker_L1`.

**Resumen de modificación mínima**

Si solo deseas completar una ejecución práctica mínima de extremo a extremo, enfócate en estos pasos clave:

1. Instalar Git, Python 3, VS Code y PlatformIO.
2. Clonar el repositorio `meshtastic/firmware` e inicializar los submódulos.
3. Usar `pio run -e seeed_wio_tracker_L1` para confirmar que el proyecto original se compila con éxito.
4. Modificar la lógica de visualización en `src/graphics/SharedUIDisplay.cpp`.
5. Recompilar el firmware y flashear el archivo UF2 generado en el dispositivo para su verificación.

**Paso 1: Confirmar que el proyecto se compila con éxito**

Aquí usamos la CLI de PlatformIO Core para la compilación.

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

Si la interfaz se parece a la captura de pantalla anterior, el proceso de compilación ha comenzado correctamente. La primera compilación suele tardar un rato, así que ten paciencia.

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

Este enfoque tiene varios beneficios:

- Instala solo las dependencias, sin iniciar inmediatamente una compilación completa.
- Facilita ver qué paquete está causando el problema.
- Los mensajes de error suelen estar más enfocados y son más fáciles de solucionar.

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

Una vez completada la instalación de dependencias, ejecuta la compilación normal nuevamente:

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

Si la compilación pasa en este punto, tu salida de firmware se ha generado con éxito.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image16.png)

**Paso 2: Modificar el código**

**Práctica 1: Modificar la visualización de la interfaz de usuario**

Comienza rastreando la implementación de la pantalla desde la configuración a nivel de placa. Primero puedes verificar:

- `variants/nrf52840/seeed_wio_tracker_L1/platformio.ini`
- `variants/nrf52840/seeed_wio_tracker_L1/variant.h`

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image17.png)

Desde estos archivos de configuración, puedes ver que L1 define `HAS_SCREEN` y `USE_SSD1306`. Eso significa que utiliza la canalización de pantalla OLED estándar, no una configuración sin pantalla y no una solución de tinta electrónica.

Si continúas rastreando la lógica de la pantalla, la mayor parte del código relacionado se encuentra bajo:

- `src/graphics/`
- `src/graphics/draw/`

Exactamente cómo lo modificas depende de tu capacidad para leer el código fuente. Aquí comenzamos con un ejemplo muy simple: modificar la interfaz de usuario de la pantalla de inicio.

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

Esto añade `batteryTextEndX`, que registra la posición final del texto del porcentaje de la batería. Eso facilita añadir texto personalizado después de la información de la batería más adelante.

**Cambio 2: Calcular el límite derecho mientras se dibuja el porcentaje de la batería**

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

Este código se encuentra dentro de la lógica de dibujo del porcentaje de la batería. Además de mostrar el nivel de la batería normalmente, también calcula el límite derecho del área de texto para que las etiquetas personalizadas puedan colocarse después de la información de la batería.

**Cambio 3: Reservar un límite para el área de iconos a la derecha**

```cpp
// Before
int iconRightEdge = timeX - 2;

// After
int iconRightEdge = timeX - 2;
int headerLabelRight = timeX - 4;
```

`src/graphics/SharedUIDisplay.cpp:263`

Esta parte maneja el área utilizada por el tiempo, correo, silencio y otros iconos en el lado derecho. Añadí `headerLabelRight` para limitar el límite derecho máximo del texto central y evitar superposiciones con el contenido del lado derecho.

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

Esta es la lógica central de la modificación. Solo se aplica a `SEEED_WIO_TRACKER_L1` y excluye explícitamente la variante de tinta electrónica. Centra el texto `made by AE` en el espacio en blanco entre la información de la batería y la visualización del tiempo.

**Cambio 5: Manejar la rama donde no se muestra el tiempo**

```cpp
// Add the same boundary control for the no-time branch
int iconRightEdge = screenW - xOffset;
int headerLabelRight = screenW - xOffset - 2;
```

`src/graphics/SharedUIDisplay.cpp:377`

Esta es la rama utilizada cuando no se muestra ningún valor de tiempo. Aquí también se necesita añadir el mismo control de límite.

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

Esta es la implementación para dibujar `made by AE` en la rama sin tiempo.

Puedes encontrar el código completo aquí:

[📎SharedUIDisplay.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/SharedUIDisplay.cpp)

**Paso 3: Compilar tu propio firmware**

Después de terminar la modificación, regresa a la raíz del proyecto y compila el mismo objetivo nuevamente:

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

Después de una compilación exitosa, la salida generalmente se encuentra en:

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

Después de completar la compilación, abre la página oficial de flasheo:

[Meshtastic Flasher](https://flasher.meshtastic.org/)

En la mayoría de los casos, primero deberías realizar una operación de borrado.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image18.png)

Luego selecciona el archivo de firmware que acabas de compilar y flashealo en el dispositivo.

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image19.png)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/image20.png)

En este punto, el ejercicio práctico del código fuente de Meshtastic está completo. Has pasado por el flujo de trabajo completo: configuración del entorno, clonación del repositorio, descubrimiento de la configuración de la placa, compilación del firmware, modificación de la lógica de visualización y verificación final del flasheo.

Si quieres ir más allá, puedes continuar explorando estas direcciones:

1. Modificar más elementos en la pantalla de inicio
2. Ajustar el comportamiento de botones, GPS, Bluetooth y otros módulos
3. Añadir una `variant` independiente para tu propia placa
4. Continuar rastreando las relaciones entre `src/`, `variants/` y `boards/`

Si quieres un ejemplo más orientado a características a nivel de código fuente, continúa con el Proyecto B a continuación. Construye un nodo de telemetría ambiental dedicado con `XIAO ESP32S3 + Wio-SX1262 + SHT40`. En comparación con la modificación de la interfaz de usuario del Wio Tracker L1 anterior, esta parte se centra en la configuración predeterminada, el tiempo de telemetría y la verificación real de malla entre dos nodos.

## Proyecto B: Nodo de telemetría ambiental XIAO ESP32S3

### Objetivo del proyecto

Este ejemplo avanzado utiliza dos dispositivos Meshtastic en la misma malla.

**Nodo sensor remoto**

- Leer temperatura y humedad desde `SHT40`
- Usar telemetría ambiental de Meshtastic
- Enviar telemetría a la malla
- Cambiar el intervalo de envío de malla a `60s`
- Omitir la configuración de región interactiva del primer arranque
- Establecer la región predeterminada en `US`

**Nodo de puerta de enlace cercano**

- Unirse a la red Meshtastic como `CLIENT`
- Recibir paquetes remotos `TELEMETRY_APP` a través de LoRa
- Analizar `environmentMetrics.temperature`
- Analizar `environmentMetrics.relativeHumidity`

**Ruta de comunicación**

```plain
XIAO ESP32S3 + Wio-SX1262 + SHT40 -> Meshtastic LoRa -> XIAO ESP32S3 + Wio-SX1262 (or any other device on the same mesh)
```

### Preparación del hardware

**Hardware del nodo remoto**

- Seeed `XIAO ESP32S3`
- `Wio-SX1262`
- `SHT40`

**Hardware del nodo de puerta de enlace**

El nodo cercano puede ser cualquier dispositivo Meshtastic que se una a la misma red. En los ejemplos a continuación, sigo usando otro dispositivo `XIAO ESP32S3 + Wio-SX1262`.

**Cableado del SHT40**

- `VCC -> 3V3`
- `GND -> GND`
- `SDA -> GPIO5`
- `SCL -> GPIO6`

Configuraciones de funcionamiento confirmadas:

- `Dirección I2C = 0x44`
- `GPIO5 / GPIO6` es el par de cableado I2C de funcionamiento actual

La siguiente foto muestra el cableado real utilizado en el nodo remoto:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image1.png)

**Módulos y SKU utilizados en este proyecto**

- [`Seeeduino XIAO Expansion Board`](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) (`SKU: 103030356`)
- [`XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa`](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) (`SKU: 102010611`)

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image11.png)

### Modificar el firmware Meshtastic para el nodo remoto

El entorno objetivo para este proyecto es:

```plain
seeed-xiao-s3
```

Los archivos principales son:

- `variants/esp32s3/seeed_xiao_s3/platformio.ini`
- `src/modules/Telemetry/EnvironmentTelemetry.h`
- `src/modules/Telemetry/EnvironmentTelemetry.cpp`

En esta parte, solo actualice la sección `build_flags` en `variants/esp32s3/seeed_xiao_s3/platformio.ini`. Mantenga el resto del archivo upstream sin cambios.

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

El cambio de `build_flags` debería verse similar a esto:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image4.png)

Estas tres banderas hacen lo siguiente:

- Habilitar la telemetría ambiental por defecto
- Establecer la región predeterminada en `US`, para que el primer arranque ya no se detenga en la selección de región
- Establecer el rol predeterminado del dispositivo como `SENSOR`

El cambio de temporización de la telemetría se implementa en `EnvironmentTelemetry.h` y `EnvironmentTelemetry.cpp`, no en `platformio.ini`.

Después de la modificación completa, el comportamiento se convierte en:

- La telemetría ambiental está habilitada por defecto
- El dispositivo inicia con la región `US`
- El dispositivo inicia con el rol `SENSOR`
- La telemetría ambiental de la malla se envía cada `60s`
- `path=phone` y `path=mesh` se registran por separado
- La marca de tiempo de envío de la malla se actualiza solo después de que un envío real de la malla tenga éxito

El registro de envío de malla esperado se ve así:

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
```

### Configurar el nodo de puerta de enlace cercano

Utilice un dispositivo Meshtastic cercano como `CLIENT` en la misma malla. Después de que el nodo remoto comience a enviar telemetría, confirme que la puerta de enlace puede recibir:

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

Si la puerta de enlace sigue intentando conectarse a Wi-Fi durante las pruebas, deshabilite Wi-Fi con la CLI de Meshtastic. Reemplace `<gateway_port>` con su puerto serie real, como `COMx` en Windows o `/dev/cu.usbmodem...` en macOS.

```bash
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

### Compilar, flashear y verificar

**Paso 1: Copiar los archivos modificados**

Antes de compilar, copie los tres archivos modificados en su árbol de fuentes de Meshtastic `2.7.20` o `2.7.21`:

| Archivo en el paquete | Reemplace este archivo en su árbol de fuentes de Meshtastic |
| --- | --- |
| `meshtastic-2.7.20-s3-files/variants/esp32s3/seeed_xiao_s3/platformio.ini` | `<su directorio de Meshtastic>/variants/esp32s3/seeed_xiao_s3/platformio.ini` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.h` | `<su directorio de Meshtastic>/src/modules/Telemetry/EnvironmentTelemetry.h` |
| `meshtastic-2.7.20-s3-files/src/modules/Telemetry/EnvironmentTelemetry.cpp` | `<su directorio de Meshtastic>/src/modules/Telemetry/EnvironmentTelemetry.cpp` |

Enlaces de descarga directa:

- [📎EnvironmentTelemetry.h](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.h)
- [📎EnvironmentTelemetry.cpp](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/code/EnvironmentTelemetry.cpp)

Si copia los archivos con un administrador de archivos gráfico, el mensaje de reemplazo debería verse similar a esto:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image5.png)

**Paso 2: Compilar el firmware remoto**

Desde la raíz del firmware de Meshtastic, ejecute:

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

Si necesita ingresar al modo de descarga manualmente:

1. Mantenga presionado `BOOT`
2. Toque `RESET`
3. Suelte `RESET`
4. Suelte `BOOT`

</TabItem>

<TabItem value="macos" label="macOS">

```bash
pio device list
pio run -e seeed-xiao-s3 -t upload --upload-port /dev/cu.usbmodemXXXX
```

</TabItem>
</Tabs>

Use `pio device list` primero para poder identificar el puerto serie correcto:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image7.png)

Después de que finalice la carga, PlatformIO debería informar un flasheo exitoso:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image8.png)

**Paso 4: Monitorear los registros serie**

Utilice el monitor serie de PlatformIO para verificar tanto el nodo remoto como la puerta de enlace cercana.

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

Busque registros como:

```plain
Environment telemetry dispatch path=mesh dest=0xffffffff interval_mesh_s=60
Send: relative_humidity=...
Send: ... temperature=...
```

**Paso 5: Validar con la CLI de Meshtastic**

Instale la CLI primero:

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

Después de la instalación, vuelva a abrir la terminal y confirme que `meshtastic --help` funciona.

Para los comandos a continuación, reemplace `<gateway_port>` con su puerto serie de puerta de enlace real:

- Ejemplo de Windows: `COMx`
- Ejemplo de macOS: `/dev/cu.usbmodem3030F917FF281`

```bash
meshtastic --port <gateway_port> --listen --debug
meshtastic --port <gateway_port> --nodes --show-fields user.id,user.longName,user.shortName
meshtastic --port <gateway_port> --get bluetooth.enabled --get bluetooth.mode --get bluetooth.fixed_pin --get power.wait_bluetooth_secs --get power.is_power_saving
meshtastic --port <gateway_port> --set network.wifi_enabled false
```

Concéntrese en:

- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**Paso 6: Confirmar en la aplicación móvil**

Después de flashear, conéctese al nodo remoto con la aplicación móvil Meshtastic y confirme que los datos ambientales son visibles. Luego conecte la aplicación a otro dispositivo en la misma malla y verifique la vista `Nodes` para confirmar que los valores del sensor se están recibiendo a través de la malla.

En el nodo sensor remoto, debería poder ver los valores de telemetría ambiental directamente en la aplicación:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image9.png)

En el nodo cercano, las mismas lecturas deberían aparecer en la vista `Nodes` después de que se reenvíen a través de la malla:

![img](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Practical-Tutorial/img/s3image10.png)

## Problemas comunes

**El comando `git` no está disponible**

- En Windows, primero verifique si Git se ha agregado a `PATH`.
- En macOS, ejecute primero `git --version`. Si el sistema le pide que instale las Herramientas de línea de comandos, siga la indicación.

**`python3` o `pip3` no está disponible**

- En Windows, confirme que Python se agregó a `PATH`, o vuelva a abrir la terminal e intente nuevamente.
- En macOS, primero verifique si `python3` / `pip3` ya existe, e instale Python con Homebrew solo si es necesario.

**El comando `pio` no está disponible**

- Ejecute primero `pio --version`.
- Si el comando aún no está disponible, reinicie VS Code y la terminal, luego intente nuevamente.
- Si es necesario, reinstale la extensión PlatformIO y confirme que PlatformIO Core se ha inicializado correctamente.

**El código aún parece incompleto después de `git submodule update --init`**

- Primero asegúrese de estar en el directorio raíz del repositorio `firmware`.
- Si la conexión de red es inestable, intente nuevamente con:

```bash
git submodule update --init --recursive
```

**La primera compilación tarda demasiado**

- Es normal que la primera compilación descargue muchas dependencias.
- Si parece atascada durante demasiado tiempo, intente instalar los paquetes por separado primero:

```bash
pio pkg install -e seeed_wio_tracker_L1
```

Luego ejecute la compilación nuevamente.

**El cliente web no muestra la telemetría ambiental completa**

- El cliente web Meshtastic actualmente no proporciona una UI completa para telemetría ambiental remota.
- La página `Messages` / `Broadcast` es para tráfico de chat, no para telemetría dedicada.
- Si los valores no aparecen allí, no significa automáticamente que el enlace de mesh haya fallado.

**Ver datos en un teléfono no prueba el forwarding de mesh**

- Ver valores refrescados en un teléfono conectado directamente solo prueba que el enlace local teléfono-a-dispositivo está funcionando.
- No prueba automáticamente que la telemetría ambiental ya ha sido forwardeda en el mesh.
- Para confirmar un forward real de mesh, verifica estos elementos en los logs:
- `Environment telemetry dispatch path=mesh ...`
- `TELEMETRY_APP`
- `environmentMetrics.temperature`
- `environmentMetrics.relativeHumidity`

**La construcción `seeed-xiao-s3` falla durante la primera configuración**

- La primera instalación de dependencias puede tardar mucho tiempo. Esto es normal.
- Si el entorno objetivo falla, instala los packages primero y luego ejecuta una construcción verbose:

```bash
pio pkg install -e seeed-xiao-s3
pio run -e seeed-xiao-s3 -v
```

- Una vez que las dependencias están listas, vuelve a la construcción normal:

```bash
pio run -e seeed-xiao-s3
```
