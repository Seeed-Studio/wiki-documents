---
description: Guía de referencia para usar PlatformIO con productos ePaper de Seeed: configuración de VS Code, estructura del proyecto, configuración de platformio.ini, configuración de Seeed_GFX y selección de entorno por producto.
title: Trabajar con PlatformIO
keywords:
  - pantalla ePaper
  - PlatformIO
  - platformio.ini
  - Seeed_GFX
  - reTerminal
  - XIAO
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_platformio
sidebar_position: 5
last_update:
  date: 06/01/2026
  author: Citric
createdAt: '2026-06-01'
url: https://wiki.seeedstudio.com/es/epaper_work_with_platformio/
updatedAt: '2026-06-01'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabajar con PlatformIO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/248.png" style={{width:650, height:'auto'}}/></div>

Esta página es la **referencia de configuración de PlatformIO** para los productos ePaper de Seeed. Se centra en las partes que son diferentes del flujo de trabajo con Arduino IDE:

1. Instalar PlatformIO en Visual Studio Code.
2. Entender la estructura del proyecto creada por PlatformIO.
3. Editar `platformio.ini`, el archivo de configuración principal para la selección de placa, selección de framework, dependencias de librerías, velocidad del monitor serie, opciones de carga y banderas de compilación.
4. Elegir el entorno de PlatformIO correcto para cada producto ePaper de Seeed.
5. Añadir `Seeed_GFX` y generar el `driver.h` correspondiente con la [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/).

Si buscas APIs de dibujo para la pantalla, ejemplos de sketches o código de demostración específico de hardware, comienza por [Work with Arduino](/es/epaper_work_with_arduino) y los recetarios de producto enlazados al final de esta página. El código C/C++ usado en PlatformIO suele ser el mismo que el código de Arduino. La principal diferencia es cómo se configura el proyecto.

## Hardware compatible

PlatformIO puede utilizarse con el flujo de trabajo basado en código para los productos ePaper de Seeed que exponen una ruta de firmware compatible con Arduino. Usa esta página para preparar el proyecto de PlatformIO y luego selecciona el `driver.h` correcto para tu placa y pantalla.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Línea de producto</th>
      <th>MCU / placa objetivo típica</th>
      <th>Notas de configuración</th>
    </tr>
    <tr>
      <td><strong>reTerminal E1001 / E1002 / E1003 / E1004</strong></td>
      <td>reTerminal E Serie basado en ESP32-S3</td>
      <td>Usa un entorno PlatformIO para ESP32-S3 y luego genera `driver.h` para el modelo exacto de reTerminal.</td>
    </tr>
    <tr>
      <td><strong>Placas controladoras EE02 / EE03 / EE04 / EE05</strong></td>
      <td>Familia XIAO ESP32-S3</td>
      <td>Usa la misma estructura de PlatformIO en toda la familia EE0x. El valor de `BOARD_SCREEN_COMBO` cambia con la placa y la pantalla seleccionadas.</td>
    </tr>
    <tr>
      <td><strong>Kit DIY TRMNL 7.5" (OG)</strong></td>
      <td>Familia XIAO ESP32-S3</td>
      <td>Usa el entorno ESP32-S3 cuando escribas firmware personalizado de estilo Arduino en lugar de usar el firmware en la nube de TRMNL.</td>
    </tr>
    <tr>
      <td><strong>Panel ePaper XIAO 7.5"</strong></td>
      <td>XIAO ESP32-C3</td>
      <td>Usa el entorno PlatformIO XIAO ESP32-C3 y luego usa el recetario del producto para la configuración específica de pantalla de `driver.h`.</td>
    </tr>
    <tr>
      <td><strong>EN04 / EN05 y placas ePaper basadas en nRF52840</strong></td>
      <td>Familia XIAO nRF52840</td>
      <td>Usa el entorno PlatformIO nRF52840 para el desarrollo de firmware. Si aún no se ha publicado un recetario específico para ePaper, usa esta página como referencia de entorno y el esquema/recetario del producto para los pines.</td>
    </tr>
  </table>
</div>

:::note
El proyecto de PlatformIO es solo el entorno de compilación y carga. La pantalla sigue dependiendo del `driver.h` correcto. Si `platformio.ini` es correcto pero `driver.h` apunta a la placa o al panel equivocados, el firmware puede compilarse y cargarse mientras la pantalla permanece en blanco.
:::

## ¿Por qué PlatformIO para el desarrollo con ePaper?

PlatformIO es útil cuando tu proyecto ePaper crece más allá de un único sketch:

- Mantiene la placa, el framework, las librerías, la velocidad de carga, la velocidad del monitor serie y las banderas de compilación en un único archivo `platformio.ini` bajo control de versiones.
- Puede definir múltiples entornos de compilación en un solo proyecto, de modo que la misma base de código pueda dirigirse a varios productos ePaper de Seeed.
- Descarga las librerías mediante `lib_deps`, lo que hace que el proyecto sea más fácil de reproducir en otro ordenador.
- Proporciona tareas de compilación, carga, limpieza y monitor serie dentro de VS Code.

Para el dibujo en pantalla y las APIs de hardware, sigue usando el mismo código C/C++ de estilo Arduino utilizado en el recetario de Arduino. PlatformIO principalmente cambia la disposición del proyecto y el método de configuración.

## Paso 1: Instalar VS Code y PlatformIO

**Paso 1.** Descarga e instala [Visual Studio Code](https://code.visualstudio.com/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2.** Abre **Extensions** en VS Code, busca `PlatformIO IDE` e instálalo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Reinicia VS Code después de que la extensión termine de instalarse.

**Paso 4.** Abre **PlatformIO Home** desde el icono de PlatformIO en la barra de actividad de VS Code.

:::tip
Si usas PlatformIO IDE en VS Code, PlatformIO Core viene incluido con la extensión. Solo necesitas instalar PlatformIO Core por separado si quieres usar el comando `pio` fuera de VS Code.
:::

## Paso 2: Crear un proyecto de PlatformIO

**Paso 1.** En **PlatformIO Home**, selecciona **New Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2.** Introduce un nombre de proyecto.

**Paso 3.** Selecciona cualquier placa temporal compatible con Arduino que permita a PlatformIO crear el proyecto. Esta primera selección solo se usa para generar la carpeta del proyecto.

**Paso 4.** Selecciona **Arduino** como framework.

**Paso 5.** Haz clic en **Finish** y espera a que PlatformIO cree el proyecto.

**Paso 6.** Abre `platformio.ini` y reemplaza la configuración generada con la configuración de Seeed que se muestra en las siguientes secciones.

:::caution
La mayoría de las placas de desarrollo de Seeed Studio utilizadas por esta línea de productos ePaper se mantienen a través del paquete de plataforma PlatformIO de Seeed, no solo a través de la lista de placas predeterminada de PlatformIO. Si no puedes encontrar la placa exacta de Seeed en la ventana **New Project** de PlatformIO, es lo esperado. Crea primero un proyecto temporal y luego establece `platform = https://github.com/Seeed-Studio/platform-seeedboards.git` y el ID de `board` correcto en `platformio.ini`.
:::

Tras la creación, los archivos y carpetas importantes son:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Ruta</th>
      <th>Propósito</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>Archivo principal de configuración de PlatformIO. Este es el archivo más importante en esta guía.</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Archivo principal de código fuente del firmware. El código de estilo Arduino va aquí.</td>
    </tr>
    <tr>
      <td><code>lib/</code></td>
      <td>Librerías locales opcionales. Este también es un lugar conveniente para una carpeta auxiliar local de <code>driver.h</code>.</td>
    </tr>
    <tr>
      <td><code>.pio/</code></td>
      <td>Salida de compilación de PlatformIO y dependencias descargadas. No edites esta carpeta manualmente.</td>
    </tr>
  </table>
</div>

## Paso 3: Entender `platformio.ini`

`platformio.ini` es el centro de un proyecto PlatformIO. Cada sección `[env:name]` define un entorno de compilación. El entorno le indica a PlatformIO para qué placa compilar, qué framework usar, qué librerías descargar y cómo cargar o monitorizar el firmware.

Para principiantes, el flujo de trabajo más sencillo es copiar la configuración completa para tu dispositivo desde el [Paso 4](#Paso-4-Copiar-la-configuración-para-tu-dispositivo), pegarla en `platformio.ini` y luego crear el archivo `driver.h` correspondiente. No necesitas combinar por tu cuenta una sección base compartida con otra sección de dispositivo.

Los campos más importantes son:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Campo</th>
      <th>Qué controla</th>
      <th>Ejemplo</th>
    </tr>
    <tr>
      <td><code>platform</code></td>
      <td>El paquete de plataforma de PlatformIO. Para las placas de Seeed en esta guía, usa la URL del paquete de plataforma de Seeed para que PlatformIO pueda descargar las definiciones de placa.</td>
      <td><code>platform = https://github.com/Seeed-Studio/platform-seeedboards.git</code></td>
    </tr>
    <tr>
      <td><code>board</code></td>
      <td>El ID de placa de PlatformIO. Esto decide el MCU, la distribución de la memoria flash, la herramienta de carga y los ajustes de compilación predeterminados.</td>
      <td><code>board = seeed-xiao-esp32-s3-sense</code></td>
    </tr>
    <tr>
      <td><code>framework</code></td>
      <td>El framework de software utilizado por el firmware. Para ejemplos de estilo Arduino, usa <code>arduino</code>.</td>
      <td><code>framework = arduino</code></td>
    </tr>
    <tr>
      <td><code>monitor_speed</code></td>
      <td>La velocidad en baudios del monitor serie. Debe coincidir con <code>Serial.begin(...)</code> en el firmware.</td>
      <td><code>monitor_speed = 115200</code></td>
    </tr>
    <tr>
      <td><code>upload_speed</code></td>
      <td>La velocidad en baudios utilizada cuando PlatformIO flashea el firmware a través de USB serie.</td>
      <td><code>upload_speed = 115200</code></td>
    </tr>
    <tr>
      <td><code>lib_deps</code></td>
      <td>Librerías que PlatformIO descarga automáticamente para este entorno.</td>
      <td><code>https://github.com/Seeed-Studio/Seeed_GFX</code></td>
    </tr>
    <tr>
      <td><code>build_flags</code></td>
      <td>Definiciones extra para el compilador. Úsalo solo cuando el recetario de tu producto o la librería lo requieran.</td>
      <td><code>-DBOARD_HAS_PSRAM</code></td>
    </tr>
    <tr>
      <td><code>upload_port</code></td>
      <td>Puerto serie fijo opcional. Déjalo sin definir si prefieres la autodetección de PlatformIO.</td>
      <td><code>upload_port = /dev/ttyACM0</code></td>
    </tr>
  </table>
</div>

:::caution
No copies `platformio.ini` a ciegas entre productos no relacionados. El mismo código fuente C/C++ puede ser portátil, pero `board`, los ajustes de PSRAM y `driver.h` deben coincidir con el hardware real.
:::

## Paso 4: Copiar la configuración para tu dispositivo

Elige la pestaña de tu dispositivo, copia todo el bloque de `platformio.ini` y pégalo en el archivo `platformio.ini` de tu proyecto PlatformIO. La configuración se repite intencionadamente en cada pestaña para que no tengas que combinar una sección base compartida con una sección de dispositivo.

:::tip
La primera compilación puede tardar más porque PlatformIO descarga el paquete de plataforma de Seeed, la toolchain, el framework de Arduino y la biblioteca `Seeed_GFX`.
:::

<Tabs groupId="platformio-device">
<TabItem value="reterminal-e1001" label="reTerminal E1001" default>

Utiliza esta configuración para **reTerminal E1001**:

```ini
[env:reterminal_e1001]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Utiliza `driver.h` generado para **reTerminal E1001**. En los ejemplos existentes de `Seeed_GFX`, E1001 utiliza:

```cpp
#define BOARD_SCREEN_COMBO 520
```

</TabItem>
<TabItem value="reterminal-e1002" label="reTerminal E1002">

Utiliza esta configuración para **reTerminal E1002**:

```ini
[env:reterminal_e1002]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Utiliza `driver.h` generado para **reTerminal E1002**. En los ejemplos existentes de `Seeed_GFX`, E1002 utiliza:

```cpp
#define BOARD_SCREEN_COMBO 521
```

</TabItem>
<TabItem value="reterminal-e1003" label="reTerminal E1003">

Utiliza esta configuración para **reTerminal E1003**:

```ini
[env:reterminal_e1003]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Utiliza `driver.h` generado para **reTerminal E1003**. En los ejemplos existentes de `Seeed_GFX`, E1003 utiliza:

```cpp
#define BOARD_SCREEN_COMBO 522
```

</TabItem>
<TabItem value="reterminal-e1004" label="reTerminal E1004">

Utiliza esta configuración para **reTerminal E1004**:

```ini
[env:reterminal_e1004]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Utiliza `driver.h` generado para **reTerminal E1004**. En los ejemplos existentes de `Seeed_GFX`, E1004 utiliza:

```cpp
#define BOARD_SCREEN_COMBO 523
```

</TabItem>
<TabItem value="ee0x" label="EE02 / EE03 / EE04 / EE05">

Utiliza esta configuración para las placas controladoras de ePaper ESP32-S3 **EE02 / EE03 / EE04 / EE05**:

```ini
[env:ee0x_epaper_driver_board]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Genera `driver.h` para tu placa EE0x y panel de ePaper exactos. Por ejemplo, EE04 con un panel de ePaper monocromo de 7,5" utiliza:

```cpp
#define BOARD_SCREEN_COMBO 502
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

</TabItem>
<TabItem value="trmnl-diy-kit" label="TRMNL DIY Kit">

Utiliza esta configuración para firmware personalizado estilo Arduino en el **TRMNL 7.5" (OG) DIY Kit**:

```ini
[env:trmnl_diy_kit]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Genera `driver.h` para la combinación de pantalla del TRMNL DIY Kit antes de compilar.

</TabItem>
<TabItem value="xiao-075-panel" label="XIAO 7.5&quot; Panel">

Utiliza esta configuración para el **XIAO 7.5" ePaper Panel**:

```ini
[env:xiao_075_epaper_panel]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-c3
framework = arduino
upload_speed = 115200
monitor_speed = 115200
build_flags =
    -I src
lib_deps = https://github.com/Seeed-Studio/Seeed_GFX
```

Genera `driver.h` para el XIAO 7.5" ePaper Panel antes de compilar.

</TabItem>
<TabItem value="en04-en05" label="EN04 / EN05">

Utiliza esta configuración como punto de partida de PlatformIO para las placas de ePaper basadas en nRF52840 **EN04 / EN05**:

```ini
[env:en04_en05]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840-plus
framework = arduino
upload_speed = 115200
monitor_speed = 115200
build_flags =
    -I src
```

El controlador de pantalla, el mapa de pines y las dependencias de bibliotecas para EN04 / EN05 deben seguir el firmware específico del producto o el cookbook desde el que estés construyendo.

</TabItem>
</Tabs>

## Paso 5: Añadir `driver.h`

`platformio.ini` selecciona el MCU y el entorno de compilación. `driver.h` selecciona la combinación de placa de ePaper y pantalla utilizada por `Seeed_GFX`.

**Paso 1.** Abre la [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/).

**Paso 2.** Selecciona tu placa y pantalla.

**Paso 3.** Copia la configuración generada.

**Paso 4.** Añade la configuración a un archivo `driver.h` que pueda ser incluido por tu firmware.

Un archivo generado típico se ve así:

```cpp
#define BOARD_SCREEN_COMBO 502
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

Los valores comunes de `BOARD_SCREEN_COMBO` utilizados en la documentación existente de ePaper incluyen:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Hardware</th>
      <th>Ejemplo de ajuste generado</th>
      <th>Fuente de referencia</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>#define BOARD_SCREEN_COMBO 520</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>#define BOARD_SCREEN_COMBO 521</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>#define BOARD_SCREEN_COMBO 522</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>reTerminal E1004</td>
      <td><code>#define BOARD_SCREEN_COMBO 523</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>EE04 + 7.5" ePaper monocromo</td>
      <td><code>#define BOARD_SCREEN_COMBO 502</code><br/><code>#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04</code></td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
    <tr>
      <td>Otras combinaciones EE0x / pantalla</td>
      <td>Generado por placa y pantalla</td>
      <td>Seeed GFX Configuration Tool</td>
    </tr>
  </table>
</div>

:::caution
Vuelve a generar siempre `driver.h` cuando cambies la placa de ePaper, el tamaño de la pantalla, el tipo de color de la pantalla o la placa controladora. Un `BOARD_SCREEN_COMBO` que no coincide es una de las razones más comunes de una pantalla en blanco.
:::

En última instancia, el código y el framework de proyecto para un producto de pantalla completo que use PlatformIO deberían ser los siguientes:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/249.png" style={{width:1000, height:'auto'}}/></div>


## Paso 6: Compilar, subir y monitorizar

Cuando `platformio.ini` y `driver.h` estén listos, utiliza la barra de herramientas de PlatformIO en VS Code:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Acción</th>
      <th>Qué hace</th>
    </tr>
    <tr>
      <td><strong>Build</strong></td>
      <td>Compila el entorno seleccionado y comprueba si la placa, el framework, las bibliotecas y el código son compatibles.</td>
    </tr>
    <tr>
      <td><strong>Upload</strong></td>
      <td>Sube el firmware al dispositivo conectado mediante el protocolo de subida seleccionado.</td>
    </tr>
    <tr>
      <td><strong>Monitor</strong></td>
      <td>Abre el monitor serie utilizando la velocidad en baudios de <code>monitor_speed</code>.</td>
    </tr>
    <tr>
      <td><strong>Clean</strong></td>
      <td>Elimina las salidas de compilaciones anteriores. Úsalo después de cambiar paquetes de placa, ajustes de PSRAM o flags de compilación importantes.</td>
    </tr>
  </table>
</div>

Si el proyecto tiene múltiples entornos, selecciona el entorno de destino desde las tareas del proyecto PlatformIO antes de compilar o subir.

## Opcional: usar la biblioteca Seeed_GxEPD2

Los ejemplos predeterminados de esta página utilizan `Seeed_GFX`. Para proyectos que se basan en el flujo de trabajo de pantalla GxEPD2, puedes reemplazar la dependencia de la biblioteca de pantalla con el fork GxEPD2 de Seeed.

Utiliza esta opción solo cuando el código del proyecto esté escrito para las APIs de `Seeed_GxEPD2` / `GxEPD2`. Si tu código sigue los ejemplos estándar de `Seeed_GFX`, mantén `Seeed_GFX` en `lib_deps`.

Por ejemplo, una configuración de reTerminal E1001 se puede cambiar de la siguiente manera:

```ini
[env:reterminal_e1001]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-s3-sense
framework = arduino
upload_speed = 115200
monitor_speed = 115200
board_build.arduino.memory_type = qio_opi
build_flags =
    -D BOARD_HAS_PSRAM
    -I src
lib_deps = https://github.com/Seeed-Projects/Seeed_GxEPD2
```

Aquí solo se muestra una biblioteca de pantalla para mantener clara la configuración. Si tu proyecto necesita bibliotecas adicionales, añádelas bajo `lib_deps` como líneas separadas.

## Próximos pasos

Esta página se centra intencionadamente en la configuración del entorno PlatformIO. Continúa con las páginas específicas de producto para el cableado, la selección de pantalla y el comportamiento del firmware:

- [Trabajar con Arduino](/es/epaper_work_with_arduino) — flujo de trabajo común de Arduino y `Seeed_GFX`.
- [XIAO ePaper Driver Boards PlatformIO Cookbook](/es/ee04_with_platformio) — flujo de trabajo PlatformIO para EE0x con EE04 como ejemplo práctico.
- [reTerminal E Serie Arduino cookbook](/es/reterminal_e10xx_with_arduino) — ejemplos de pantalla para E1001 / E1002 / E1003 / E1004.
- [reTerminal E Serie cookbook de periféricos integrados](/es/reterminal_e10xx_with_arduino_peripherals) — ejemplos de botones, zumbador, monitor de batería, sensor SHT4x y microSD.
- [Guía Arduino del XIAO 7.5" ePaper Panel](/es/xiao_075inch_epaper_panel_arduino) — configuración específica del producto para el panel basado en XIAO ESP32-C3.
- [Guía Arduino del TRMNL DIY Kit](/es/ogdiy_kit_works_with_arduino) — ruta de firmware Arduino personalizado para el hardware del TRMNL kit.

## Problemas comunes

### P1: ¿Por qué PlatformIO no muestra mi placa Seeed en la lista de placas?

Esto es lo esperado para muchas placas de desarrollo de Seeed. Las definiciones de placa utilizadas en esta guía provienen del paquete de plataforma de PlatformIO de Seeed, por lo que puede que no aparezcan en la búsqueda de placas de **New Project** predeterminada de PlatformIO antes de que se instale el paquete.

Utiliza la URL del paquete de Seeed directamente en `platformio.ini`:

```ini
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
```

Luego establece `board` en el ID de placa de Seeed utilizado por tu producto, por ejemplo:

```ini
board = seeed-xiao-esp32-s3-sense
```

Cuando compiles por primera vez, PlatformIO descargará el paquete de plataforma y luego reconocerá el ID de la placa.

### P2: ¿Por qué la carga del firmware se completa correctamente pero la pantalla de tinta electrónica permanece en blanco?

La causa más común es un `driver.h` incorrecto o ausente.

- Regenera `driver.h` con la [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/).
- Confirma que la placa y la pantalla seleccionadas coinciden con el hardware real.
- Confirma que el `BOARD_SCREEN_COMBO` generado está disponible para el archivo fuente que incluye `Seeed_GFX`.
- Para productos ESP32-S3 con búferes grandes, confirma si el recetario del producto requiere configuraciones de PSRAM.

### P3: ¿Por qué PlatformIO no puede cargar en la placa?

Para reTerminal E1003, una causa común es una velocidad en baudios de carga demasiado alta. Establece `upload_speed` en `115200` en el mismo bloque de entorno antes de comprobar otras causas.

```ini
upload_speed = 115200
```

Si la carga sigue fallando, continúa con las siguientes comprobaciones:

- Utiliza un cable USB-C que admita transferencia de datos.
- Desconecta otros dispositivos serie e inténtalo de nuevo.
- Establece `upload_port` solo si la detección automática elige el puerto incorrecto.
- Para placas basadas en ESP32, mantén pulsado el botón de arranque mientras conectas el USB si la placa no entra automáticamente en modo de descarga.

## Recursos

- **[Docs]** [Archivo de configuración de proyecto de PlatformIO](https://docs.platformio.org/en/stable/projectconf/index.html)
- **[Docs]** [PlatformIO IDE para VS Code](https://docs.platformio.org/en/stable/integration/ide/pioide.html)
- **[GitHub]** [Paquete de plataforma PlatformIO de Seeed](https://github.com/Seeed-Studio/platform-seeedboards)
- **[GitHub]** [Ejemplo de parpadeo Arduino de Seeed PlatformIO](https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/arduino-blink)
- **[GitHub]** [Biblioteca Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX)
- **[Tool]** [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)
- **[Wiki]** [PlatformIO para placas compatibles con Arduino](/es/Software-PlatformIO)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
