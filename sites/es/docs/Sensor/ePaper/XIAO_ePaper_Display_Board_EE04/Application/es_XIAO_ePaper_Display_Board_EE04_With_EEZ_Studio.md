---
description: Pantalla ePaper EE04 con EEZ Studio
title: Placa de Pantalla ePaper EE04(ESP32-S3) con EEZ Studio
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/bus_servo_driver_board/10.webp
sidebar_position: 1
slug: /es/epaper_ee04_eezstudio
last_update:
  date: 09/28/2025
  author: Zeller
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:600, height:'auto'}}/></div>

Este tutorial utiliza la Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04, basada en EEZ Studio y compilando y subiendo el programa usando el Arduino IDE.

## [EEZ Studio](https://www.envox.eu/studio/studio-introduction/)

EEZ Studio representa una solución única cuando se requiere tanto el desarrollo rápido de una GUI atractiva como el control remoto de dispositivos para automatización de pruebas y medición (T&M).

Creado por un equipo con experiencia de primera mano en el diseño de dispositivos embebidos [complejos](https://www.envox.eu/eez-bb3) con recursos limitados, EEZ Studio permite el diseño de GUIs de escritorio y embebidas responsivas usando programación visual de **arrastrar** y **soltar** y diagramas de flujo. Una serie de Widgets y Acciones desarrollados internamente, así como soporte para [LVGL](https://github.com/lvgl/lvgl) (tanto 8.x como 9.x) y plantillas de proyectos y ejemplos listos para usar permiten tanto la creación rápida de prototipos como el desarrollo de aplicaciones finales.

### Hardware

Antes de comenzar a leer este tutorial, asegúrate de tener todos los elementos necesarios listados a continuación.

<div class="table-center">
<table align="center">
    <tr>
        <th>Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04</th>
        <th>ePaper monocromático de 5.83 pulgadas</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_Pre_1.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Crear proyecto

En la parte superior, selecciona **Create**, luego haz clic en **LVGL**, y en la sección adyacente **PROJECT SETTING**, establece los parámetros requeridos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_1.png" style={{width:800, height:'auto'}}/></div>

- Name: Nombre del proyecto
- LVGL version: Selecciona la versión 9.x
- Location: La ubicación para almacenar los archivos de ingeniería se puede establecer en la ruta predeterminada o personalizar según los requisitos reales.
- Project file path: La ruta de los archivos de ingeniería. Esta ruta se utilizará más tarde (esta ruta es la ruta predeterminada en la computadora; también puedes personalizar la ruta)

### Introducción a la Página de Ingeniería

A continuación se muestran algunas configuraciones básicas y controles para el dibujo de UI basado en LVGL en EEZ Studio, así como la construcción de los archivos del proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_3.png" style={{width:800, height:'auto'}}/></div>

- En la parte superior (de izquierda a derecha):

  - Save: Guardar el proyecto

  - Check: Verificar el proyecto

  - Build: Construir el proyecto y generar archivos

  - Settings: Modificar configuraciones de parámetros

  - Edit: Editar y dibujar en la página principal

  - Run: Previsualizar el efecto de dibujo del diseño creado

  - Debug: Depurar la interfaz dibujada

- Pages: Gestionar páginas. haz clic en **+** para agregar una nueva página

- Widgets Structure: Gestión de widgets, que te permite gestionar y seleccionar intuitivamente tus widgets

- Variables: El mecanismo central de gestión de datos que conecta los widgets de UI, la lógica de Flow y Action Script

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_2.png" style={{width:800, height:'auto'}}/></div>

- Properties: Utilizado para establecer y ver los parámetros de propiedades de objetos o componentes

- Components Palette: Proporciona una lista de componentes opcionales, que se pueden arrastrar y soltar en la interfaz de diseño para su uso

- Styles: Definir y aplicar reglas de estilo para fuentes unificadas para mantener la consistencia

- Fonts: Gestionar los recursos de fuentes utilizados en el proyecto y sus configuraciones de tamaño

- Bitmaps: Importar y gestionar archivos de recursos de mapa de bits como imágenes e iconos

- Themes: Crear y aplicar temas de color unificados y suites de estilo visual

- Groups: Combinar y gestionar múltiples componentes para permitir operación simultánea y control por lotes

### Construcción de Archivos del Proyecto

Este proyecto está diseñado para una **pantalla eInk monocromática de 5.83" con una resolución de 648*480**. Por lo tanto, algunos parámetros clave necesitan ser modificados.

**Paso 1.** Selecciona **Settings**, luego en la pestaña **General**, cambia **Display width** y **Display height** a 648 y 480 respectivamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_1.png" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Modificar los archivos generados

- Renombra la ruta de carpeta **src/ui** a **src/EEZ_UI**; todos los archivos de código generados por EEZ Studio se almacenarán en esta carpeta.

- En la pestaña **Build**, cambia **LVGL include** a **lvgl.h**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_2.png" style={{width:800, height:'auto'}}/></div>

**Paso 3.** Construir el proyecto

- Regresa a la interfaz **Main** y arrastra **Hello World** al centro de la pantalla.
- En la pestaña **STYLE**, ajusta el tamaño de fuente o color.
- Selecciona la opción para construir el proyecto. Si no se muestran errores en el panel **OUTPUT**, el proyecto se ha construido exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_3.png" style={{width:800, height:'auto'}}/></div>

A continuación, despliega los archivos del proyecto construido al **Arduino IDE**, luego súbelos al dispositivo de hardware correspondiente para mostrar.

### Configuración del Arduino IDE

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

**Paso 1.** Descarga e instala el [Arduino IDE](https://www.arduino.cc/en/software) y lanza la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div><br />

**Paso 2.** Agregar soporte para placas ESP32 al Arduino IDE.

En Arduino IDE, ve a **File > Preferences** y agrega la siguiente URL al campo **Additional Boards Manager URLs**:

```js
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Paso 3.** Instalar el paquete de placas ESP32.

Navega a **Tools > Board > Boards Manager**, busca **esp32** e instala el paquete ESP32 de Espressif Systems.

**Paso 4.** Seleccionar la placa correcta.

Ve a **Tools > Board > ESP32 Arduino** y selecciona **XIAO_ESP32S3_PLUS**.

**Paso 5.** Conecta tu reTerminal E Series ePaper Display a tu computadora usando un cable USB-C.

**Paso 6.** Selecciona el puerto correcto desde **Tools > Port**.

### Importar la biblioteca Seeed_GFX

Usaremos la biblioteca Seeed_GFX, que proporciona soporte integral para varios dispositivos de pantalla de Seeed Studio.

**Paso 1.** Descarga la biblioteca Seeed_GFX desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 2.** Instala la biblioteca agregando el archivo ZIP en Arduino IDE. Ve a **Sketch > Include Library > Add .ZIP Library** y selecciona el archivo ZIP descargado.

:::tip
Si has instalado previamente la biblioteca TFT_eSPI, es posible que necesites removerla temporalmente o renombrarla desde tu carpeta de bibliotecas de Arduino para evitar conflictos, ya que Seeed_GFX es un fork de TFT_eSPI con características adicionales para pantallas de Seeed Studio.
:::

**Paso 3.** Abre el sketch de ejemplo de color de la biblioteca Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**Paso 4.** Crear un nuevo archivo `driver.h`

[Herramienta de Configuración Seeed GFX](https://seeed-studio.github.io/Seeed_GFX/)

- Ingresa las especificaciones de la pantalla que estás usando en la página de la herramienta. Aquí, la pantalla seleccionada es la **Pantalla ePaper monocromática de 5.83 pulgadas (UC8179)**, y la placa controladora es la **Placa de Pantalla ePaper XIAO(ESP32-S3) - EE04**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_4_1.png" style={{width:800, height:'auto'}}/></div>

- Copia el programa y guárdalo como `driver.h`.

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_5_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
Si eliges incorrectamente, la pantalla no mostrará nada.
Por favor, asegúrate del tipo de tus dispositivos o componentes.
:::

### Desplegar en Arduino

**Paso 1.** Agrega los archivos `e1002_display.c`, `e1002_display.h`, `lv_conf.h` y la biblioteca lvgl. La placa debe seleccionarse como XIAO_ESP32S3.

- [Haz clic para obtener los archivos relevantes](https://wiki.seeedstudio.com/es/epaper_ee04_eezstudio/#reference--resources)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_1_1.png" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Agrega los archivos de código EEZ_UI generados a la carpeta de bibliotecas (La ruta de almacenamiento predeterminada para las bibliotecas del IDE de Arduino es `C:\Users\Nombre_usuario\Documents\Arduino\Libraries`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_2.png" style={{width:800, height:'auto'}}/></div>

**Paso 3.** Sube el programa al dispositivo.

<details>

<summary>EEZ_UI_EE04.ino</summary>

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

int32_t page_index;

e1002_driver_t e1002_driver;

void setup()
{
  Serial.begin(115200);

  String LVGL_Arduino = "UI Dashboard - LVGL ";
  LVGL_Arduino += String('V') + lv_version_major() + "." +
                  lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  Serial.println("Initializing e-paper display...");
  e1002_display_init(&e1002_driver);

  ui_init();
  page_index = SCREEN_ID_MAIN;
  loadScreen((ScreensEnum)page_index);
  e1002_display_refresh(&e1002_driver);

}

void loop()
{
  lv_timer_handler();
  ui_tick();


  if (e1002_display_should_refresh(&e1002_driver))
  {
    Serial.println("Refreshing e-paper display...");
    e1002_display_refresh(&e1002_driver);
    Serial.println("Display refresh complete");
  }

  delay(10);
}
```

# Explicación del Código  

1. **Inclusión de Archivos de Cabecera**: Incluye la biblioteca de pantalla TFT, la biblioteca de gráficos LVGL, el archivo de definición de interfaz de usuario (`ui.h`) y el controlador de pantalla de papel electrónico (`e1002_display.h`).  

2. **Variables Globales**:  
   - `page_index`: Se utiliza para registrar el índice de la página mostrada actualmente.  
   - `e1002_driver`: Objeto controlador para la pantalla de papel electrónico.  

3. **Función setup() (Inicialización)**:  
   - Inicializa la comunicación serie (velocidad de baudios: 115200) para imprimir información de depuración.  
   - Imprime información de la versión de la biblioteca LVGL (ej., "Smart Home Dashboard - LVGL Vx.x.x").  
   - Inicializa la pantalla de papel electrónico (`e1002_display_init`).  
   - Inicializa la interfaz de usuario (`ui_init`).  
   - Establece la página inicial como "Main Screen" (`SCREEN_ID_MAIN`) y la carga.  
   - Actualiza la pantalla de papel electrónico para mostrar la interfaz inicial.  

4. **Función loop() (Bucle Principal)**:  
   - Procesa los temporizadores y eventos de LVGL (`lv_timer_handler`).  
   - Procesa las tareas programadas para la interfaz de usuario (`ui_tick`).  
   - Verifica si la pantalla de papel electrónico necesita actualizarse (`e1002_display_should_refresh`); si es así, realiza la actualización e imprime un registro.  
   - Se ejecuta cada 10 milisegundos para asegurar la capacidad de respuesta del sistema.  

</details>

Demostración del efecto:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_3.jpg" style={{width:600, height:'auto'}}/></div>

## Diseño de Interfaz de Usuario  

A continuación, demostraremos un ejemplo de interfaz de usuario creado con EEZ Studio, para ilustrar mejor sus capacidades en el diseño de interfaces.

Al diseñar interfaces LVGL con EEZ Studio, puedes encontrar las siguientes herramientas particularmente útiles:

- Un generador de paleta de colores en línea para crear, ajustar y exportar esquemas de colores rápidamente: [Color](https://coolors.co/)  
- Una herramienta de paleta de colores en línea para encontrar y combinar esquemas de colores web: [Color Chart](https://peiseka.com/)  
- Una plataforma de biblioteca de iconos vectoriales grande para descargar y gestionar iconos：[Icon](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)  
- Un sitio de recursos de fuentes gratuitas para navegar y descargar fuentes de uso comercial: [Font](https://fonts.google.com/)  

### Introducción al Dibujo de Interfaz de Usuario  

- Imagen del efecto:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_project_1_1.png" style={{width:800, height:'auto'}}/></div>  

Esta interfaz de usuario está compuesta por cuatro componentes:

- Label  
- Line  
- Checkbox  
- Image  

**Paso 1.** Cambiar el color de fondo del lienzo  

El color de fondo predeterminado es blanco; puedes cambiarlo según tus preferencias.  

- Selecciona el lienzo para el cual deseas cambiar el color de fondo.  

- Marca la opción **Color**, luego selecciona tu código de color hexadecimal preferido.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_project_2_1.png" style={{width:800, height:'auto'}}/></div>  

**Paso 2.** Agregar una Etiqueta  

- Arrastra el componente **Label** al lienzo, luego selecciona el tamaño de fuente y color deseados.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_label_1_2.png" style={{width:800, height:'auto'}}/></div>  

**Paso 3.** Agregar una línea  

- Arrastra el componente **Line** al lienzo, y establece los puntos de inicio y fin en la sección **Points** para determinar la longitud y posición de la línea. Puntos de referencia: 0,0 0,0 0,0 0,0,648,0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_line_1_2.png" style={{width:800, height:'auto'}}/></div>

**Paso 4.** Agregar mapas de bits  

- Haz clic en la opción **Bitmaps** en la barra lateral derecha y agrega las imágenes requeridas.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_1_2.png" style={{width:800, height:'auto'}}/></div>  

- Nombra las imágenes según sea necesario.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_2_2.png" style={{width:800, height:'auto'}}/></div>  

- Arrastra y suelta el componente **Image** en el lienzo, y usa la opción **Scale** para establecer su tamaño.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_3_2.png" style={{width:800, height:'auto'}}/></div>  

**Paso 5.** Agregar una Casilla de Verificación  

- Arrastra el componente **Checkbox** al lienzo, ingresa el contenido, luego ajusta el tamaño de fuente y color.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_checkout_1_2.png" style={{width:800, height:'auto'}}/></div>  

### Despliegue y Demostración  

- Despliegue  
  - Agrega los archivos de cabecera: `driver.h`, `e1002_display.c`, `e1002_display.h` y `lv_conf.h`.  
  - Agrega los archivos **EEZ_UI** a la carpeta de bibliotecas del IDE de Arduino.  

Código de referencia completo: [EEZ_UI.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)  

<details>
<summary>EEZ_UI_EE04.ino</summary>

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
{0
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

</details>

- Demostración del efecto:<br/>
Aquí se muestran tres pantallas de interfaz de usuario diferentes, y la **XIAO ePaper Display Board (ESP32-S3) – EE04** utiliza sus tres botones integrados para cambiar entre estas pantallas. La pantalla correspondiente para cada botón es:<br/>
KEY1: Smart<br/>
KEY2: Industry<br/>
KEY3: Game

<div class="table-center">
<table align="center">
    <tr>
        <th>Smart</th>
        <th>Industry</th>
        <th>Game</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_1_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_3_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
 </table>
</div>

## Referencia y Recursos

- Archivos relacionados con el controlador (Haz clic para descargar)
  - [e1002_display.c](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
  - [e1002_display.h](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
  - [lv_conf.h](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)

- Carcasa 3D de 5.83"
  - [frontal](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''front.step)
  - [trasera](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''back.step)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
