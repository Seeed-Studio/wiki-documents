---
description: Uso de EEZStudio y despliegue en Arduino para fines de aplicación
title: Trabajar con EEZ Studio
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /reterminal_e10xx_with_eezstudio
sidebar_position: 6
last_update:
  date: 09/11/2025
  author: Jason
createdAt: '2025-09-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/reterminal_e10xx_with_eezstudio/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeros pasos con la pantalla de papel electrónico de reTerminal E Serie y EEZ Studio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

## Introducción

Esta guía te llevará paso a paso en el diseño de una interfaz de usuario profesional para la reTerminal E Serie utilizando la herramienta de diseño visual [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/). Aprenderás a crear elementos de UI, generar el código necesario y, finalmente, desplegarlo en el dispositivo usando el Arduino IDE. Este proceso te permite crear interfaces personalizadas con excelente visibilidad y un consumo de energía ultrabajo, ideal para aplicaciones HMI.

### Materiales necesarios

Para completar este tutorial, prepara uno de los siguientes dispositivos reTerminal E Serie:

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### ¿Qué es EEZ Studio?

EEZ Studio es un entorno moderno de programación visual y diseño de UI desarrollado principalmente para crear interfaces de usuario para instrumentos de prueba y medición, dispositivos embebidos y otras aplicaciones interactivas. Combina diseño de GUI mediante arrastrar y soltar, capacidades de scripting y herramientas de integración con dispositivos, lo que permite a desarrolladores, ingenieros y makers crear rápidamente interfaces profesionales sin empezar desde cero.

En resumen, EEZ Studio actúa como un puente entre el hardware y el software, permitiéndote diseñar, crear prototipos y desplegar experiencias de usuario de forma más eficiente.

### ¿Por qué usar EEZ Studio?

- Diseño de interfaz visual: crea UIs complejas con un editor WYSIWYG, reduciendo la necesidad de programación manual.
- Prototipado rápido: prueba y valida rápidamente ideas de diseño, ahorrando tiempo y costes de desarrollo.
- Compatibilidad multiplataforma: crea aplicaciones que pueden ejecutarse en múltiples sistemas operativos y objetivos embebidos.
- Integración con hardware: conecta y controla directamente instrumentos de laboratorio, dispositivos IoT y placas personalizadas.
- Ecosistema de código abierto: benefíciate de un conjunto de herramientas impulsado por la comunidad, con transparencia y flexibilidad.

Con EEZ Studio, puedes pasar del concepto al prototipo funcional en una fracción del tiempo, asegurando al mismo tiempo que tus diseños sean profesionales y adaptables a requisitos futuros.

### Diferencias con SquareLine Studio

Aunque EEZ Studio y SquareLine Studio son ambas herramientas de diseño de GUI, se centran en objetivos y escenarios de uso diferentes:

<table class="EEZStudio-table">
    <thead>
        <tr>
            <th>Aspecto</th>
            <th>EEZ Studio</th>
            <th>SquareLine Studio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Propósito principal</th>
            <td>Diseñado para instrumentos de prueba y medición, sistemas embebidos e integración hardware/software</td>
            <td>Centrado en la creación de GUIs para sistemas embebidos (especialmente con LVGL)</td>
        </tr>
        <tr>
            <th>Usuarios objetivo</th>
            <td>Ingenieros, desarrolladores de producto, makers, diseñadores de instrumentos de laboratorio/prueba</td>
            <td>Desarrolladores de UI embebida, aficionados, diseñadores de productos IoT</td>
        </tr>
        <tr>
            <th>Integración con hardware</th>
            <td>Integración directa con instrumentos, dispositivos de medición y sistemas de automatización</td>
            <td>Principalmente centrado en la generación de pantallas/UI, no en la integración con dispositivos externos</td>
        </tr>
        <tr>
            <th>Código abierto</th>
            <td>Impulsado por la comunidad, transparente y extensible. Soporte técnico Premium/de pago disponible</td>
            <td>Producto comercial de código cerrado con licenciamiento</td>
        </tr>
        <tr>
            <th>Flujo de trabajo</th>
            <td>Permite crear prototipos, simular y controlar dispositivos reales desde un único entorno</td>
            <td>Principalmente genera código de UI para compilarse dentro de un proyecto embebido</td>
        </tr>
    </tbody>
</table>

## Primeros pasos con EEZ Studio

### Instalación de EEZ Studio

[EEZ Studio Install Link](https://www.envox.eu/studio/studio-introduction/) Después de acceder al enlace de descarga, selecciona la versión del sistema compatible con tu ordenador para descargarla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>

## Crear proyecto

### Iniciar un nuevo proyecto LVGL

En la parte superior de la interfaz de EEZ Studio, haz clic en el botón “CREATE”.
En la lista de plantillas de proyecto de la izquierda, localiza y selecciona el proyecto “LVGL”.

- `Name:` Nombra tu archivo de proyecto. Para facilitar la explicación del contenido posterior en nuestros artículos, aquí lo llamaremos EEZ_UI.
- `LVGL Version:` Especifica la versión de la biblioteca LVGL utilizada por el proyecto. Selecciona 9.x en el menú desplegable.
- `Location:` Especifica la ruta de almacenamiento de los archivos del proyecto en tu ordenador. La ruta predeterminada suele apuntar a una carpeta de proyectos por defecto dentro del directorio de descarga o instalación de EEZ Studio (por ejemplo, C:\Users\YourUser\Documents\EEZ Studio\Projects o una ruta similar). Si necesitas cambiar la ubicación de almacenamiento, haz clic en el icono de carpeta (o en los puntos suspensivos ...) a la derecha del cuadro de texto Location.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### Configuración de los ajustes del proyecto

Al compilar tu proyecto de UI LVGL para la reTerminal de papel electrónico, debes configurar correctamente los Project Settings de EEZ Studio para garantizar que los archivos de UI generados sean compatibles con tu entorno Arduino o embebido.

Paso 1. Abrir Project Settings

Haz clic en el icono ⚙️ (Settings) en la barra de herramientas superior, como se muestra a continuación.
Esto abrirá el panel de Project Settings en el lado derecho del área de trabajo.

Paso 2. Configurar Build Output y LVGL Include

En General → Build, localiza los siguientes campos:

- LVGL include: Introduce lvgl.h para incluir el encabezado correcto de LVGL durante la compilación.

💡 Esto garantiza que el código de UI generado pueda hacer referencia correctamente a la biblioteca LVGL durante la compilación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting2.png" style={{width:900, height:'auto'}}/></div>

<br></br>

Paso 3. Establecer la resolución de la pantalla

A continuación, todavía en Settings → General, configura la resolución de tu pantalla:
- Display width: 800
- Display height: 480

🧩 Estos parámetros definen la resolución objetivo de la pantalla de papel electrónico para el diseño de la UI y el mapeo de coordenadas.
Asegúrate de que los valores coincidan con tu modelo específico de papel electrónico (por ejemplo, papel electrónico de 7,5 pulgadas – 800×480).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting.png" style={{width:900, height:'auto'}}/></div>

### Configuración de parámetros del proyecto y diseño de la interfaz de UI

### Diseño de la interfaz de UI

El diseño de la UI (User Interface) es crucial en el desarrollo de productos embebidos, ya que determina directamente la experiencia del usuario. Una interfaz atractiva, intuitiva y con buena respuesta no solo mejora la usabilidad del producto, sino que también incrementa su atractivo general.

En EEZ Studio, puedes ensamblar interfaces rápidamente arrastrando y soltando componentes. Utiliza herramientas como Styles, Fonts, Bitmaps y Themes para controlar con precisión los efectos visuales, creando una experiencia de usuario profesional y distintiva.

A continuación se presenta una introducción a las herramientas recomendadas：

- [Color](https://coolors.co/)
- [Color Chart](https://peiseka.com/)
- [Icon](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)
- [Font](https://fonts.google.com/)

**Introducción al componente más a la derecha**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- Styles: Atributos visuales utilizados para unificar y reutilizar elementos de la interfaz, garantizando coherencia y mantenimiento eficiente.
- Bitmap: Se utiliza habitualmente para fondos, iconos, logotipos, etc., para mejorar la presentación visual.
- Fonts: Garantizan una lectura clara del texto y admiten contenido multilingüe y estilo de marca.
- Themes: Definen la estética general de la interfaz, permitiendo cambios rápidos como modo claro/oscuro.
- Groups: Organizan varios widgets juntos para una gestión y maquetación unificadas.

En este tutorial, te guiaré en el diseño de la UI de la página de inicio de un sitio web o aplicación. Una vez domines las técnicas básicas, podrás aplicarlas para crear con facilidad cualquier interfaz que desees.

Esta página se compone de cinco componentes:

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

Paso 1. Cambiar el color de fondo del lienzo

- Selecciona el lienzo cuyo color de fondo necesitas cambiar.
- Marca Color y luego selecciona tu código de color hexadecimal preferido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

Paso 2. Añadir Panel

- Arrastra el componente Panel desde la sección Basic al lienzo y ajusta su Width y Height.

- Marca Color y luego selecciona tu código de color hexadecimal preferido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

Paso 3. Añadir Bitmaps

- Haz clic en el icono Bitmaps en la barra lateral de la derecha para añadir una imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

- Nombra las imágenes que selecciones; más tarde necesitarás elegir imágenes según tu convención de nombres.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

- Arrastra el componente Image desde el grupo Basic al lienzo, luego selecciona tu imagen y establece el tamaño usando Scale.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

Paso 4. Añadir Line

- Arrastra el componente Line desde el grupo Visualiser al lienzo. Establece los puntos inicial y final de Points para determinar la longitud y la altura de la línea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

Paso 5. Añadir Label

- Arrastra el componente Label desde el grupo Basic al lienzo, luego selecciona el color de fuente y la configuración de formato de fuente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

- Haz clic en la casilla Fonts en la columna más a la derecha para añadir tus formatos de fuente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

- Establece el nombre y el tamaño de la fuente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

Lo anterior describe el uso básico de estos cinco componentes. Puedes organizarlos según el diagrama de referencia o tu propia interfaz de usuario diseñada.

### Generación de código y despliegue

Después de completar el diseño de la interfaz, necesitas guardar el proyecto y previsualizarlo en el simulador. Una vez verificado, ejecuta la operación de compilación para generar archivos de código ejecutables en el hardware de destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a20.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 1. Guardar proyecto**

Haz clic en el icono Save (forma de disquete, situado junto al botón “OPEN”) en la parte superior de la interfaz para guardar tu proyecto.

**Paso 2. Previsualizar diseño**

Haz clic en el icono Run (botón de reproducción) en la barra de herramientas para iniciar el simulador y previsualizar de forma interactiva los efectos de la interfaz.

**Paso 3. Compilar proyecto**

Haz clic en el icono Compile (botón de marca de verificación) para comprobar si hay errores de sintaxis o lógica en el proyecto.
Haz clic en el icono Build (botón de llave inglesa) para generar archivos como código de interfaz, datos de imagen y datos de fuente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

**Paso 4. Confirmar compilación exitosa**

Al finalizar, EEZ Studio muestra un mensaje verde que indica “Build successful”, lo que significa que el código se ha generado correctamente.

## Preparación del entorno

Para programar la pantalla ePaper de reTerminal E Serie con Arduino, necesitarás configurar el Arduino IDE con soporte para ESP32.

:::tip
Si es la primera vez que usas Arduino, te recomendamos encarecidamente que consultes [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

#### Configuración de Arduino IDE

**Paso 1.** Descarga e instala el [Arduino IDE](https://www.arduino.cc/en/software) y abre la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div><br />

**Paso 2.** Añade el soporte para la placa ESP32 al Arduino IDE.

En Arduino IDE, ve a **File > Preferences** y añade la siguiente URL en el campo "Additional Boards Manager URLs":

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Paso 3.** Instala el paquete de placas ESP32.

Navega a **Tools > Board > Boards Manager**, busca "esp32" e instala el paquete ESP32 de Espressif Systems.

**Paso 4.** Selecciona la placa correcta.

Ve a **Tools > Board > ESP32 Arduino** y selecciona **XIAO_ESP32S3**.

**Paso 5.** Conecta tu pantalla ePaper reTerminal E Serie a tu ordenador usando un cable USB-C.

**Paso 6.** Selecciona el puerto correcto en **Tools > Port**.

## Programación de la pantalla ePaper

El **reTerminal E1001 incorpora una pantalla ePaper en blanco y negro de 7,5 pulgadas**, mientras que el **reTerminal E1002 está equipado con una pantalla ePaper a todo color de 7,3 pulgadas**. Ambas pantallas proporcionan una excelente visibilidad en diversas condiciones de iluminación con un consumo de energía ultrabajo, lo que las hace ideales para aplicaciones industriales que requieren pantallas siempre encendidas con un consumo mínimo de energía.

### Uso de la biblioteca Seeed_GFX

Para controlar la pantalla ePaper, utilizaremos la biblioteca Seeed_GFX, que proporciona soporte completo para varios dispositivos de pantalla de Seeed Studio.

**Paso 1.** Descarga la biblioteca Seeed_GFX desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 2.** Instala la biblioteca añadiendo el archivo ZIP en Arduino IDE. Ve a **Sketch > Include Library > Add .ZIP Library** y selecciona el archivo ZIP descargado.

:::note
Si has instalado previamente la biblioteca TFT_eSPI, es posible que necesites eliminarla temporalmente o cambiarle el nombre en la carpeta de bibliotecas de Arduino para evitar conflictos, ya que Seeed_GFX es un fork de TFT_eSPI con funciones adicionales para pantallas de Seeed Studio.
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="Programación de reTerminal E1001" default>
#### Programación de reTerminal E1001 (pantalla ePaper en blanco y negro de 7,5 pulgadas)

Vamos a explorar un ejemplo sencillo que demuestra operaciones básicas de dibujo en la pantalla ePaper en blanco y negro.

**Paso 1.** Abre el sketch de ejemplo de la biblioteca Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**Paso 2.** Crea un nuevo archivo llamado `driver.h` en la misma carpeta que tu sketch. Puedes hacerlo haciendo clic en el botón de flecha en Arduino IDE y seleccionando "New Tab", luego nombrándolo `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Ve a la [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) y selecciona **reTerminal E1001** de la lista de dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Copia el código de configuración generado y pégalo en el archivo `driver.h`. El código debería verse así:

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

</TabItem>
<TabItem value="Programming reTerminal E1002" label="Programación de reTerminal E1002">

#### Programación de reTerminal E1002 (pantalla ePaper a todo color de 7,3 pulgadas)

La pantalla ePaper a todo color admite colores rojo, negro y blanco, lo que permite interfaces visualmente más ricas.

**Paso 1.** Abre el sketch de ejemplo en color de la biblioteca Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**Paso 2.** Crea un nuevo archivo llamado `driver.h` en la misma carpeta que tu sketch, siguiendo el mismo proceso que antes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Ve a la [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) y selecciona **reTerminal E1002** de la lista de dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Copia el código de configuración generado y pégalo en el archivo `driver.h`. El código debería verse así:

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

</TabItem>
</Tabs>

## Despliegue del proyecto de EEZ Studio en Arduino

Primero, localiza OPI PSRAM en la barra de menú `Tools` y ábrelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/EEZSetting.png" style={{width:500, height:'auto'}}/></div>

Estos dos archivos de controlador subyacentes deben añadirse a nuestro directorio de proyecto.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/00.png" style={{width:800, height:'auto'}}/></div>

- [e1002_display.cpp](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [e1002_display.h](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)

Porta los siguientes archivos de proyecto (incluidos cuatro archivos) a la Biblioteca de Arduino para usarlos en proyectos de Arduino.
El `EEZ_UI file` se genera durante el proceso de compilación en EEZStudio. Necesitas localizar la ruta donde lo guardaste.

- 🔗 **[ZIP]** [Code](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

<br></br>

Este es el sketch principal de Arduino para ejecutar la interfaz de usuario:
Tres botones corresponden a tres pantallas diferentes, comenzando con verde: HOME\Workstation\Plant en secuencia.

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

- `e1002_display_init():` Inicializa el hardware de la pantalla de tinta electrónica y establece sus parámetros de funcionamiento.

- `pinMode(..., INPUT_PULLUP):` Configura el pin del botón como modo de entrada y habilita la resistencia de pull-up interna. Esto asegura que el pin permanezca en un nivel alto (HIGH) cuando el botón no está presionado y se conecte a tierra, volviéndose bajo (LOW), cuando se presiona.

- `ui_init()` y `loadScreen():` Estas funciones inicializan la biblioteca de interfaz de usuario LVGL y cargan la pantalla especificada.

- `lv_timer_handler():` Esta es una función esencial en la biblioteca LVGL que maneja los eventos de temporizador dentro de LVGL, como animaciones y actualizaciones de pantalla.

- `if (lastKey0State == HIGH && currentKey0State == LOW):` Esta línea es el núcleo de la detección de eventos de tecla. Comprueba si el estado de una tecla ha cambiado de no presionada a presionada.

- Cuando se cumple la condición, el programa actualiza `page_index` y llama a la función `loadScreen()` para cargar una nueva página.

- Actualización de estado: `lastKey0State = currentKey0State;` Esta línea es crucial. Guarda el estado actual de la tecla para usarlo en la siguiente iteración de `loop()`, lo que permite la siguiente comparación de estado.

- Actualización de tinta electrónica: `e1002_display_should_refresh()` y `e1002_display_refresh()` gestionan la actualización de la pantalla de tinta electrónica. A diferencia de las pantallas LCD, la tinta electrónica no puede actualizarse en tiempo real. Normalmente requiere actualizaciones selectivas o de pantalla completa a intervalos específicos para ahorrar energía y prolongar la vida útil. Este código implementa ese mecanismo de actualización bajo demanda.

- `delay(10)`: Esta es una sencilla medida de eliminación de rebotes por software para evitar que el programa interprete erróneamente el rebote físico de la tecla como múltiples pulsaciones.

## Diagrama de visualización de la interfaz

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

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
