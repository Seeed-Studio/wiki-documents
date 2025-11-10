---
description: Pantalla ePaper EE04 con EEZ Studio
title: Pantalla ePaper EE04 con EEZ Studio
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

Este tutorial utiliza la Placa de Pantalla ePaper XIAO EE04, basada en EEZ Studio y compilando y subiendo el programa usando el Arduino IDE.

## EEZ Studio

- Por qué usar EEZ Studio

  - Diseño de Interfaz Visual – Crea interfaces complejas con un editor WYSIWYG, reduciendo la necesidad de codificación manual.

  - Prototipado Rápido – Prueba y valida rápidamente ideas de diseño, ahorrando tiempo y costo de desarrollo.

  - Soporte Multiplataforma – Construye aplicaciones que pueden ejecutarse en múltiples sistemas operativos y objetivos embebidos.

  - Integración con Hardware – Conecta y controla directamente instrumentos de laboratorio, dispositivos IoT y placas personalizadas.

  - Extensible con Scripting – Usa scripting Lua para agregar lógica, automatización y funcionalidad avanzada.

  - Ecosistema de Código Abierto – Benefíciate de un conjunto de herramientas impulsado por la comunidad con transparencia y flexibilidad.

### Hardware

- Necesitas preparar una **Placa de Pantalla ePaper XIAO EE04** y un dispositivo **eInk Monocromático de 5.83"** con una resolución de 648×480.

<div class="table-center">
<table align="center">
    <tr>
        <th>Placa de Pantalla ePaper XIAO EE04</th>
        <th>eInk Monocromático de 5.83"</th>
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

En la parte superior, selecciona "Create", luego haz clic en "LVGL", y en la sección adyacente "PROJECT SETTING", establece los parámetros requeridos.

- Name: Nombre del proyecto
- LVGL version： Selecciona la versión 9.x
- Location: La ubicación para almacenar archivos de ingeniería se puede establecer en la ruta predeterminada o personalizar según los requisitos reales.
- Project file path: La ruta de los archivos de ingeniería. Esta ruta se usará más tarde (esta ruta es la ruta predeterminada en la computadora; también puedes personalizar la ruta)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_1.png" style={{width:800, height:'auto'}}/></div>

### Introducción a la Página de Ingeniería

A continuación se presentan algunas configuraciones básicas y controles para el dibujo de UI basado en LVGL en EEZ Studio, así como la construcción de los archivos del proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_3.png" style={{width:800, height:'auto'}}/></div>

- En la parte superior (de izquierda a derecha):

  - Save: Guardar el proyecto

  - Check: Verificar el proyecto

  - Build: Construir el proyecto y generar archivos

  - Settings: Modificar configuraciones de parámetros

  - Edit: Editar y dibujar en la página principal

  - Run: Previsualizar el efecto de dibujo del diseño creado

  - Debug: Depurar la interfaz dibujada

- Pages: Gestionar páginas; haz clic en "+" para agregar una nueva página

- Widgets Structure: Gestión de widgets, que te permite gestionar y seleccionar intuitivamente tus widgets

- Variables: El mecanismo central de gestión de datos que conecta widgets de UI, lógica de Flow y Action Script

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_2.png" style={{width:800, height:'auto'}}/></div>

- Properties: Usado para establecer y ver los parámetros de propiedades de objetos o componentes  

- Components Palette: Proporciona una lista de componentes opcionales, que pueden arrastrarse y soltarse en la interfaz de diseño para su uso

- Styles: Define y aplica reglas de estilo para fuentes unificadas para mantener consistencia  

- Fonts: Gestiona los recursos de fuentes utilizados en el proyecto y sus configuraciones de tamaño  

- Bitmaps: Importa y gestiona archivos de recursos de mapa de bits como imágenes e iconos  

- Themes: Crea y aplica temas de color unificados y suites de estilo visual  

- Groups: Combina y gestiona múltiples componentes para habilitar operación simultánea y control por lotes  

### Construyendo Archivos del Proyecto

Este proyecto está diseñado para una **pantalla eInk Monocromática de 5.83" con una resolución de 648*480**. Por lo tanto, algunos parámetros clave necesitan ser modificados.

**Paso 1.** Selecciona **Settings**, luego en la pestaña **General**, cambia **Display width** y **Display height** a 648 y 480 respectivamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_1.png" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Modifica los archivos generados

- Renombra la ruta de carpeta **src/ui** a **src/EEZ_UI**; todos los archivos de código generados por EEZ Studio se almacenarán en esta carpeta.

- En la pestaña **Build**, cambia **LVGL include** a **lvgl.h**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_2.png" style={{width:800, height:'auto'}}/></div>

**Paso 3.** Construye el proyecto

- Regresa a la interfaz **Main** y arrastra "Hello World" al centro de la pantalla.
- En la pestaña **STYLE**, ajusta el tamaño de fuente o color.
- Selecciona la opción para construir el proyecto. Si no se muestran errores en el panel **OUTPUT**, el proyecto se ha construido exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_3.png" style={{width:800, height:'auto'}}/></div>

A continuación, despliega los archivos del proyecto construido al **Arduino IDE**, luego súbelos al dispositivo de hardware correspondiente para mostrar.

### Configuración del Arduino IDE

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Introducción a Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

**Paso 1.** Descarga e instala el [Arduino IDE](https://www.arduino.cc/en/software) y lanza la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div><br />

**Paso 2.** Agrega soporte para placas ESP32 al Arduino IDE.

En Arduino IDE, ve a **File > Preferences** y agrega la siguiente URL al campo "Additional Boards Manager URLs":

```js
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Paso 3.** Instala el paquete de placas ESP32.

Navega a **Tools > Board > Boards Manager**, busca "esp32" e instala el paquete ESP32 de Espressif Systems.

**Paso 4.** Selecciona la placa correcta.

Ve a **Tools > Board > ESP32 Arduino** y selecciona **XIAO_ESP32S3_PLUS**.

**Paso 5.** Conecta tu Pantalla ePaper reTerminal E Series a tu computadora usando un cable USB-C.

**Paso 6.** Selecciona el puerto correcto desde **Tools > Port**.

### Importar la librería Seeed_GFX

Usaremos la librería Seeed_GFX, que proporciona soporte integral para varios dispositivos de pantalla de Seeed Studio.

**Paso 1.** Descarga la librería Seeed_GFX desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 2.** Instala la librería agregando el archivo ZIP en Arduino IDE. Ve a **Sketch > Include Library > Add .ZIP Library** y selecciona el archivo ZIP descargado.

:::note
Si has instalado previamente la librería TFT_eSPI, es posible que necesites removerla temporalmente o renombrarla desde tu carpeta de librerías de Arduino para evitar conflictos, ya que Seeed_GFX es un fork de TFT_eSPI con características adicionales para pantallas de Seeed Studio.
:::

**Paso 3.** Abre el sketch de ejemplo de color desde la librería Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**Paso 4.** Crea un nuevo archivo `driver.h`  

[Herramienta de Configuración Seeed GFX](https://seeed-studio.github.io/Seeed_GFX/)

- Ingresa las especificaciones de la pantalla que estás usando en la página de la herramienta. Aquí, la pantalla seleccionada es el **eInk Monocromático de 5.83"**, y la placa controladora es la **Placa de Pantalla ePaper XIAO EE04**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_4.png" style={{width:800, height:'auto'}}/></div>

- Copia el programa y guárdalo como `driver.h`.

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_5.png" style={{width:800, height:'auto'}}/></div>

:::tip
Si eliges incorrectamente, la pantalla no mostrará nada.
Por favor, asegúrate del tipo de tus dispositivos o componentes.
:::

### Desplegar en Arduino

**Paso 1.** Agrega los archivos `e1002_display.c`, `e1002_display.h`, `lv_conf.h`, y la librería lvgl. La placa debe seleccionarse como XIAO_ESP32S3.

- [e1002_display.c](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
- [e1002_display.h](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
- [lv_conf.h](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_1_1.png" style={{width:800, height:'auto'}}/></div>

**Paso 2.** Agrega los archivos de código EEZ_UI generados a la carpeta de librerías (La ruta de almacenamiento predeterminada para las librerías del Arduino IDE es `C:\Users\Nombre_Usuario\Documents\Arduino\Libraries`).

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

1. **Inclusión de Archivos de Cabecera**: Incluye la librería de pantalla TFT, la librería gráfica LVGL, el archivo de definición de interfaz UI (`ui.h`), y el controlador de pantalla de papel electrónico (`e1002_display.h`).  

2. **Variables Globales**:  
   - `page_index`: Se usa para registrar el índice de la página mostrada actualmente.  
   - `e1002_driver`: Objeto controlador para la pantalla de papel electrónico.  

3. **Función setup() (Inicialización)**:  
   - Inicializa la comunicación serie (velocidad de baudios: 115200) para imprimir información de depuración.  
   - Imprime información de versión de la librería LVGL (ej., "Smart Home Dashboard - LVGL Vx.x.x").  
   - Inicializa la pantalla de papel electrónico (`e1002_display_init`).  
   - Inicializa la interfaz UI (`ui_init`).  
   - Establece la página inicial como "Main Screen" (`SCREEN_ID_MAIN`) y la carga.  
   - Actualiza la pantalla de papel electrónico para mostrar la interfaz inicial.  

4. **Función loop() (Bucle Principal)**:  
   - Procesa temporizadores y eventos de LVGL (`lv_timer_handler`).  
   - Procesa tareas programadas para la interfaz UI (`ui_tick`).  
   - Verifica si la pantalla de papel electrónico necesita actualizarse (`e1002_display_should_refresh`); si es así, realiza la actualización e imprime un registro.  
   - Hace un bucle cada 10 milisegundos para asegurar la capacidad de respuesta del sistema.  

</details>

Demostración del efecto:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_3.jpg" style={{width:600, height:'auto'}}/></div>

## Diseño de UI  

El diseño de UI (Interfaz de Usuario) es crucial en el desarrollo de productos embebidos, ya que determina directamente la experiencia del usuario. Una interfaz estéticamente atractiva, intuitiva y responsiva no solo mejora la usabilidad del producto sino que también aumenta su atractivo general.  

En EEZ Studio, puedes ensamblar rápidamente interfaces arrastrando y soltando componentes. Utiliza herramientas como Estilos, Fuentes, Mapas de bits y Temas para controlar con precisión los efectos visuales, creando una experiencia de usuario profesional y distintiva.  

A continuación se presenta una introducción a las herramientas recomendadas:  

- [Color](https://coolors.co/)  
- [Tabla de Colores](https://peiseka.com/)  
- [Icono](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)  
- [Fuente](https://fonts.google.com/)  

### Introducción al Dibujo de UI  

En este tutorial, te guiaré a través del diseño de la UI para una página de inicio de sitio web o aplicación. Una vez que domines las técnicas principales, podrás aplicarlas fácilmente para crear cualquier interfaz que desees.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_project_1.png" style={{width:800, height:'auto'}}/></div>  

Esta UI está compuesta por cuatro componentes:

- Label  
- Line  
- Checkbox  
- Image  


**Paso 1.** Cambiar el color de fondo del lienzo  

El color de fondo predeterminado es blanco; puedes cambiarlo según tus preferencias.  

  - Selecciona el lienzo para el cual quieres cambiar el color de fondo.  

  - Marca la opción **Color**, luego selecciona tu código de color hexadecimal preferido.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_project_2.png" style={{width:800, height:'auto'}}/></div>  

**Paso 2.** Agregar mapas de bits  

  - Haz clic en la opción **Bitmaps** en la barra lateral derecha y agrega las imágenes requeridas.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_1.png" style={{width:800, height:'auto'}}/></div>  

  - Nombra las imágenes según sea necesario.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_2.png" style={{width:800, height:'auto'}}/></div>  

  - Arrastra y suelta el componente **Image** en el lienzo, y usa la opción **Scale** para establecer su tamaño.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_3.png" style={{width:800, height:'auto'}}/></div>  


**Paso 3.** Agregar una línea  

  - Arrastra el componente **Line** al lienzo, y establece los puntos de inicio y fin en la sección **Points** para determinar la longitud y posición de la línea.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_line_1.png" style={{width:800, height:'auto'}}/></div>  


**Paso 4.** Agregar un Checkbox  

  - Arrastra el componente **Checkbox** al lienzo, ingresa el contenido, luego ajusta el tamaño y color de la fuente.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_checkout_1.png" style={{width:800, height:'auto'}}/></div>  


**Paso 5.** Agregar un Label  

  - Arrastra el componente **Label** al lienzo, luego selecciona el tamaño y color de fuente deseados.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_label_1.png" style={{width:800, height:'auto'}}/></div>  

Después de completar estos 5 pasos y construir exitosamente el proyecto, puedes entonces desplegar la UI a los dispositivos correspondientes.  

### Despliegue y Demostración  

- Despliegue  
  - Agrega los archivos de cabecera: `driver.h`, `e1002_display.c`, `e1002_display.h`, y `lv_conf.h`.  
  - Agrega los archivos **EEZ_UI** a la carpeta de librerías del Arduino IDE.  

Código de referencia completo: [EEZ_UI.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)  

<details>
<summary>EEZ_UI_EE04.ino</summary>

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

const int BUTTON_KEY0 = 2;
const int BUTTON_KEY1 = 3;
const int BUTTON_KEY2 = 5;

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

  pinMode(BUTTON_KEY0, INPUT_PULLUP);
  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);

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

  if (buttonPressed(BUTTON_KEY0, lastKey0State, lastDebounceTime0))
  {
    page_index = SCREEN_ID_SMART;
    switchPage((ScreensEnum)page_index, "Main Screen");
  }

  if (buttonPressed(BUTTON_KEY1, lastKey1State, lastDebounceTime1))
  {
    page_index = SCREEN_ID_INDUSTRY;
    switchPage((ScreensEnum)page_index, "Plant Screen");
  }

  if (buttonPressed(BUTTON_KEY2, lastKey2State, lastDebounceTime2))
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

- Demostración del efecto:

<div class="table-center">
<table align="center">
    <tr>
        <th>Inteligente</th>
        <th>Industria</th>
        <th>Juego</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_1_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_3_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
 </table>
</div>

### Recursos

- Carcasa 3D de 5.83"
  - [frontal](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''front.step)
  - [trasera](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''back.step)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
