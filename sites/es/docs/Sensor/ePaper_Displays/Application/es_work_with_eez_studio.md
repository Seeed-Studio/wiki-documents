---
description: Diseña interfaces profesionales basadas en LVGL para productos ePaper de Seeed con EEZ Studio y luego despliega en ellas con el IDE de Arduino; funciona tanto con la reTerminal E Serie como con la XIAO ePaper Display Board (EE04).
title: Trabajar con EEZ Studio
keywords:
  - pantalla ePaper
  - EEZ Studio
  - LVGL
  - reTerminal
  - EE04
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /reterminal_e10xx_with_eezstudio
sidebar_position: 8
last_update:
  date: 04/28/2026
  author: dimo
aliases:
  - /epaper_ee04_eezstudio
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/reterminal_e10xx_with_eezstudio/
updatedAt: '2026-04-28'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabajar con EEZ Studio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

Esta guía te acompaña en el diseño de una interfaz de usuario profesional con la herramienta de diseño visual [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/), la generación de código LVGL y su despliegue en un producto ePaper de Seeed mediante el IDE de Arduino. El flujo es el mismo para todas las placas compatibles: las únicas diferencias son la resolución de la pantalla y la constante de configuración del controlador, que mostramos en pestañas.

## Hardware compatible

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001 / E1002 / E1003 / E1004</th>
      <th>XIAO ePaper Display Board (ESP32-S3) – EE04</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">7.5" mono / 7.3" Spectra 6 / 10.3" mono / 13.3" Spectra 6</td>
      <td align="center">Controlador universal: combínalo con cualquiera de nuestras pantallas ePaper Seeed de 24 pines o 50 pines</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## ¿Qué es EEZ Studio?

EEZ Studio es un entorno moderno de programación visual y diseño de interfaces de usuario creado originalmente para instrumentos de prueba y medición y dispositivos embebidos. Combina diseño de GUI mediante arrastrar y soltar, scripting y herramientas de integración de dispositivos, lo que permite a desarrolladores, ingenieros y makers crear rápidamente interfaces profesionales sin empezar desde cero.

En resumen, EEZ Studio actúa como un puente entre hardware y software, permitiéndote diseñar, prototipar y desplegar experiencias de usuario de forma más eficiente.

### ¿Por qué usar EEZ Studio?

- **Diseño visual de interfaces**: crea interfaces complejas con un editor WYSIWYG.
- **Prototipado rápido**: prueba y valida ideas de diseño rápidamente.
- **Multiplataforma**: crea aplicaciones que se ejecutan en varios sistemas operativos y objetivos embebidos.
- **Integración de hardware**: conecta directamente instrumentos de laboratorio, dispositivos IoT y placas personalizadas.
- **Código abierto**: conjunto de herramientas impulsado por la comunidad con soporte premium opcional.

### EEZ Studio vs. SquareLine Studio

Ambas son herramientas de diseño de GUI, pero se dirigen a públicos ligeramente diferentes:

<table>
    <thead>
        <tr><th>Aspecto</th><th>EEZ Studio</th><th>SquareLine Studio</th></tr>
    </thead>
    <tbody>
        <tr>
            <th>Propósito principal</th>
            <td>Instrumentos de prueba y medición, sistemas embebidos, integración hardware/software</td>
            <td>GUIs embebidas, especialmente con LVGL</td>
        </tr>
        <tr>
            <th>Usuarios objetivo</th>
            <td>Ingenieros, desarrolladores de producto, makers, diseñadores de instrumentos de laboratorio/prueba</td>
            <td>Desarrolladores de UI embebida, aficionados, diseñadores de productos IoT</td>
        </tr>
        <tr>
            <th>Integración de hardware</th>
            <td>Integración directa con instrumentos, dispositivos de medición y automatización</td>
            <td>Enfoque en la generación de UI, con menos integración de dispositivos externos</td>
        </tr>
        <tr>
            <th>Código abierto</th>
            <td>Impulsado por la comunidad, transparente y extensible (con soporte premium disponible)</td>
            <td>Código cerrado, producto comercial con licenciamiento</td>
        </tr>
        <tr>
            <th>Flujo de trabajo</th>
            <td>Prototipa, simula y controla dispositivos reales desde un único entorno</td>
            <td>Principalmente genera código de UI para compilarse en un proyecto embebido</td>
        </tr>
    </tbody>
</table>

## Paso 1: Instalar EEZ Studio

Descarga EEZ Studio para tu sistema operativo desde [el sitio oficial](https://www.envox.eu/studio/studio-introduction/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>

## Paso 2: Crear un proyecto LVGL

En la parte superior de la interfaz de EEZ Studio, haz clic en **CREATE**. Selecciona la plantilla **LVGL** en la parte izquierda:

- **Name**: ponle un nombre a tu proyecto (usaremos `EEZ_UI` en este artículo).
- **LVGL Version**: elige `9.x` en la lista desplegable.
- **Location**: elige dónde guardar los archivos del proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### Configuración del proyecto

Haz clic en el icono ⚙️ de la barra de herramientas para abrir Project Settings.

En **General → Build**:

- **LVGL include**: introduce `lvgl.h` para que el código generado haga referencia correctamente a LVGL durante la compilación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting2.png" style={{width:900, height:'auto'}}/></div>

En **General → Display**, establece la resolución **para tu hardware**:

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- **Display width**: 800
- **Display height**: 480

(La pantalla de 7.5" mono en la E1001 y la Spectra 6 de 7.3" en la E1002 comparten la misma resolución de 800×480).

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

- **Display width**: 648
- **Display height**: 480

(Haz coincidir los valores con la pantalla ePaper de Seeed que tengas conectada a la EE04. El ejemplo siguiente utiliza la pantalla monocroma de 5.83" y 648×480).

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting.png" style={{width:900, height:'auto'}}/></div>

## Paso 3: Diseñar la UI

El diseño de la UI determina directamente la experiencia de usuario. EEZ Studio te permite ensamblar interfaces rápidamente arrastrando y soltando componentes y usando **Styles**, **Fonts**, **Bitmaps**, **Themes** y **Groups** para controlar el resultado visual.

Recursos en línea recomendados:

- [Coolors](https://coolors.co/) — generador de paletas de colores
- [PeisekA](https://peiseka.com/) — carta de colores
- [iconfont](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl) — biblioteca de iconos
- [Google Fonts](https://fonts.google.com/) — fuentes gratuitas

La barra lateral derecha:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- **Styles**: atributos visuales para unificar y reutilizar elementos de la interfaz.
- **Bitmaps**: fondos, iconos, logotipos.
- **Fonts**: renderizado de texto y compatibilidad multilingüe.
- **Themes**: estilos de alto nivel como claro/oscuro.
- **Groups**: ayudas para el diseño de la disposición.

### Diseño de ejemplo (Hello World + Panel + Image + Line + Label)

En este tutorial crearemos una página de inicio sencilla a partir de cinco componentes:

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 1.** Cambia el color de fondo del lienzo: selecciona el lienzo, marca **Color** y elige un valor hexadecimal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 2.** Arrastra un **Panel** al lienzo, ajusta su ancho/alto y elige un color.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 3.** Añade bitmaps mediante el panel derecho **Bitmaps**, ponles nombre y luego arrastra el widget **Image** al lienzo y vincula tu bitmap.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Añade una **Line** desde el grupo Visualiser y configura sus **Points**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 5.** Añade un **Label**, elige el color y luego añade fuentes mediante el panel derecho **Fonts**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

## Paso 4: Generar código

Cuando el diseño esté completo:

1. **Save**: haz clic en el icono de disquete junto a **OPEN**.
2. **Preview**: haz clic en **Run** para iniciar el simulador y previsualizar la UI.
3. **Compile / Build**: haz clic en el icono ✓ para comprobar errores y luego en el icono de llave inglesa para generar el código de la UI, los datos de imagen y los datos de fuentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

Un mensaje verde de **Build successful** confirma la generación del código. La salida va a la carpeta **`src/ui`** de tu proyecto (puedes renombrarla a `src/EEZ_UI` si lo prefieres).

## Paso 5: Configurar el IDE de Arduino

Para desplegar la salida de EEZ Studio en tu dispositivo ePaper de Seeed, configura el IDE de Arduino con soporte para ESP32.

:::tip
Si es la primera vez que usas Arduino, consulta primero [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

1. **Instala** el [IDE de Arduino](https://www.arduino.cc/en/software).

   <div class="download_arduino_container" style={{textAlign: 'center'}}>
       <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
         <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
       </a>
   </div><br />

2. **Añade soporte para la placa ESP32**: en **File → Preferences**, añade en **Additional Boards Manager URLs**:

   ```text
   https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
   ```

3. **Instala el paquete ESP32**: **Tools → Board → Boards Manager**, busca `esp32` e instala el paquete de Espressif Systems.

4. **Selecciona la placa** para tu hardware:

   <Tabs groupId="eez-hardware">
   <TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

   **Tools → Board → ESP32 Arduino → XIAO_ESP32S3**

   </TabItem>
   <TabItem value="ee04" label="EE04 + 5.83&quot; mono">

   **Tools → Board → ESP32 Arduino → XIAO_ESP32S3_PLUS**

   También habilita **OPI PSRAM** en el menú **Tools**.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/EEZSetting.png" style={{width:500, height:'auto'}}/></div>

   </TabItem>
   </Tabs>

5. **Conecta** el dispositivo mediante USB-C y selecciona el puerto serie correcto en **Tools → Port**.

## Paso 6: Instalar la librería Seeed_GFX

Usamos la librería Seeed_GFX, que proporciona soporte completo para los dispositivos de visualización de Seeed.

1. Descárgala desde GitHub:

   <div class="github_container" style={{textAlign: 'center'}}>
       <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
       <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong>
       </a>
   </div><br />

2. **Sketch → Include Library → Add .ZIP Library** y selecciona el ZIP descargado.

   :::note
   Si instalaste previamente `TFT_eSPI`, elimínala temporalmente o cámbiale el nombre en la carpeta de librerías de Arduino para evitar conflictos — `Seeed_GFX` es un fork de `TFT_eSPI` con funciones adicionales para pantallas Seeed.
   :::

3. **Abre el ejemplo de sketch correcto**:

   - Para pantallas en color: **File → Examples → Seeed_GFX → ePaper → Colorful → HelloWorld**
   - Para pantallas monocromas: **File → Examples → Seeed_GFX → ePaper → Basic → HelloWorld**

4. **Crea un archivo `driver.h`** en la misma carpeta que tu sketch (usa la flecha de nueva pestaña en el IDE de Arduino).

5. Ve a la [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/), selecciona tu hardware, copia la configuración generada y pégala en `driver.h`. El contenido exacto varía según el hardware:

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

Para **reTerminal E1001** (7.5" blanco y negro, UC8179):

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

Para **reTerminal E1002** (7.3" color completo, UC8179C):

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

Para **EE04 + 5.83" monocromo (UC8179)**:

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_4_1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_5_1.png" style={{width:800, height:'auto'}}/></div>

Si cambias a un tamaño de pantalla diferente en la EE04, regenera `driver.h` desde la herramienta de configuración y conserva la línea `USE_XIAO_EPAPER_DISPLAY_BOARD_EE04`.

:::tip
Si haces la elección incorrecta, la pantalla no mostrará nada — vuelve a comprobar la combinación de pantalla y placa controladora.
:::

</TabItem>
</Tabs>

## Paso 7: Desplegar el proyecto de EEZ Studio en Arduino

Añade la salida de EEZ Studio y los helpers del controlador de la plataforma a la carpeta de tu sketch y luego súbelo.

### Archivos de controlador necesarios (todo el hardware)

Descarga estos archivos helper y colócalos junto a tu `.ino`:

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)

Para EE04 también necesitas `lv_conf.h` y la librería LVGL — consulta la pestaña EE04 más abajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/00.png" style={{width:800, height:'auto'}}/></div>

### Copiar la salida de EEZ_UI

Copia la carpeta `EEZ_UI` generada (desde el `src/` de tu proyecto de EEZ Studio) en la carpeta de librerías de Arduino (normalmente `~/Documents/Arduino/Libraries`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

### Sketch y subida

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

Sketch de referencia — tres botones (KEY0/KEY1/KEY2) recorren tres páginas: **HOME**, **Workstation**, **Plant**.

Código de referencia completo: [E1002-EEZStudioCode.zip](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

const int BUTTON_KEY0 = 3;
const int BUTTON_KEY1 = 4;
const int BUTTON_KEY2 = 5;

int32_t page_index;

bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

e1002_driver_t e1002_driver;

void setup()
{
    String LVGL_Arduino = "Automotive Dashboard Demo - LVGL ";
    LVGL_Arduino += String('V') + lv_version_major() + "." + lv_version_minor() +
                    "." + lv_version_patch();
    Serial.begin(115200);
    Serial.println(LVGL_Arduino);
    Serial.println("Initializing 6-color e-paper display...");
    e1002_display_init(&e1002_driver);

    pinMode(BUTTON_KEY0, INPUT_PULLUP);
    pinMode(BUTTON_KEY1, INPUT_PULLUP);
    pinMode(BUTTON_KEY2, INPUT_PULLUP);

    lastKey0State = digitalRead(BUTTON_KEY0);
    lastKey1State = digitalRead(BUTTON_KEY1);
    lastKey2State = digitalRead(BUTTON_KEY2);

    ui_init();
    page_index = SCREEN_ID_HOME;
    loadScreen((ScreensEnum)page_index);
    Serial.println("Boot: Main Screen");
}

void loop()
{
    lv_timer_handler();
    ui_tick();
    delay(50);

    bool currentKey0State = digitalRead(BUTTON_KEY0);
    bool currentKey1State = digitalRead(BUTTON_KEY1);
    bool currentKey2State = digitalRead(BUTTON_KEY2);

    if (lastKey0State == HIGH && currentKey0State == LOW) {
        page_index = SCREEN_ID_HOME;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Main Screen");
        delay(50);
    }

    if (lastKey1State == HIGH && currentKey1State == LOW) {
        page_index = SCREEN_ID_WORKSTATION;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Plant Screen");
        delay(50);
    }

    if (lastKey2State == HIGH && currentKey2State == LOW) {
        page_index = SCREEN_ID_PLANT;
        loadScreen((ScreensEnum)page_index);
        Serial.println("Switched to Setting Screen");
        delay(50);
    }

    lastKey0State = currentKey0State;
    lastKey1State = currentKey1State;
    lastKey2State = currentKey2State;

    if (e1002_display_should_refresh(&e1002_driver))
    {
        Serial.println("Refreshing e-paper display...");
        e1002_display_refresh(&e1002_driver);
        Serial.println("Display refresh complete");
    }

    delay(10);
}
```

Notas:

- `e1002_display_init()` inicializa el hardware de la pantalla de tinta electrónica.
- `pinMode(..., INPUT_PULLUP)` configura los pines de los botones con resistencias pull-up internas.
- `ui_init()` y `loadScreen()` inicializan LVGL y cargan una pantalla específica.
- `lv_timer_handler()` procesa los temporizadores y animaciones de LVGL.
- Los bloques `if (lastKeyXState == HIGH && currentKeyXState == LOW)` hacen el debounce de un flanco HIGH→LOW y actualizan la página.
- `e1002_display_should_refresh()` / `e1002_display_refresh()` gestionan la actualización de la pantalla de tinta electrónica bajo demanda.

#### Pantallas resultantes

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página de inicio</th>
      <th>Página de estación de trabajo</th>
      <th>Página de fotos</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez02.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez01.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

Para EE04 también necesitas:

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
- [`lv_conf.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)
- La librería LVGL instalada en el IDE de Arduino

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_1_1.png" style={{width:800, height:'auto'}}/></div>

Copia la carpeta generada **EEZ_UI** en `~/Documents/Arduino/Libraries`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_2.png" style={{width:800, height:'auto'}}/></div>

Boceto de referencia: los tres botones integrados (KEY1/KEY2/KEY3 = pines 2 / 3 / 5) recorren tres páginas: **Smart**, **Industry**, **Game**.

Código de referencia completo: [EEZ_UI_EE04.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

const int BUTTON_KEY1 = 2;
const int BUTTON_KEY2 = 3;
const int BUTTON_KEY3 = 5;

int32_t page_index;

bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

unsigned long lastDebounceTime0 = 0;
unsigned long lastDebounceTime1 = 0;
unsigned long lastDebounceTime2 = 0;
const unsigned long debounceDelay = 120;

e1002_driver_t e1002_driver;

unsigned long lastFullRefreshTime = 0;
const unsigned long fullRefreshCooldown = 1500;

bool buttonPressed(int pin, bool &lastState, unsigned long &lastDebounceTime)
{
  bool currentState = digitalRead(pin);

  if (lastState == HIGH && currentState == LOW &&
      (millis() - lastDebounceTime) > debounceDelay)
  {
    lastDebounceTime = millis();
    lastState = currentState;
    return true;
  }

  lastState = currentState;
  return false;
}

void switchPage(ScreensEnum targetScreen, const char *pageName)
{
  if (millis() - lastFullRefreshTime < fullRefreshCooldown)
  {
    Serial.println("[Skip] Refresh cooling down...");
    return;
  }

  Serial.printf("Switching to %s ...\n", pageName);

  e1002_driver.epd->fillScreen(TFT_WHITE);
  e1002_driver.epd->update();

  loadScreen(targetScreen);

  e1002_display_refresh(&e1002_driver);

  lastFullRefreshTime = millis();
  Serial.printf("[OK] %s refreshed.\n", pageName);
}

void setup()
{
  Serial.begin(115200);

  String LVGL_Arduino = "Smart Home Dashboard - LVGL ";
  LVGL_Arduino += String('V') + lv_version_major() + "." +
                  lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  Serial.println("Initializing e-paper display...");
  e1002_display_init(&e1002_driver);

  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);
  pinMode(BUTTON_KEY3, INPUT_PULLUP);

  ui_init();
  page_index = SCREEN_ID_SMART;
  loadScreen((ScreensEnum)page_index);
  e1002_display_refresh(&e1002_driver);

  Serial.println("Boot: Main Screen");
}

void loop()
{
  lv_timer_handler();
  ui_tick();

  if (buttonPressed(BUTTON_KEY1, lastKey0State, lastDebounceTime0))
  {
    page_index = SCREEN_ID_SMART;
    switchPage((ScreensEnum)page_index, "Main Screen");
  }

  if (buttonPressed(BUTTON_KEY2, lastKey1State, lastDebounceTime1))
  {
    page_index = SCREEN_ID_INDUSTRY;
    switchPage((ScreensEnum)page_index, "Plant Screen");
  }

  if (buttonPressed(BUTTON_KEY3, lastKey2State, lastDebounceTime2))
  {
    page_index = SCREEN_ID_GAME;
    switchPage((ScreensEnum)page_index, "Workstation Screen");
  }

  if (e1002_display_should_refresh(&e1002_driver))
  {
    Serial.println("Refreshing e-paper display...");
    e1002_display_refresh(&e1002_driver);
    Serial.println("Display refresh complete");
  }

  delay(10);
}
```

#### Pantallas resultantes

<div class="table-center">
<table align="center">
    <tr>
        <th>Smart</th>
        <th>Industry</th>
        <th>Game</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_1_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_3_2.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>
</div>

</TabItem>
</Tabs>

## Referencias y recursos

<Tabs groupId="eez-hardware">
<TabItem value="reterminal" label="reTerminal E1001 / E1002" default>

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)
- [Proyecto de referencia — E1002-EEZStudioCode.zip](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

</TabItem>
<TabItem value="ee04" label="EE04 + 5.83&quot; mono">

- [`e1002_display.cpp`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
- [`e1002_display.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
- [`lv_conf.h`](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)
- [Proyecto de referencia — EEZ_UI_EE04.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)
- Carcasa 3D para 5.83" — [frontal](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''front.step) / [trasera](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''back.step)

</TabItem>
</Tabs>

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
