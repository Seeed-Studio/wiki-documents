---
description: Usando EEZStudio y desplegando en Arduino para propósitos de aplicación
title: Pantalla ePaper de reTerminal E Series funcionando con EEZ Studio
image: https://files.seeedstudio.com/wiki/EEZStudio/eez.webp
slug: /reterminal_e10xx_with_eezstudio
sidebar_position: 6
last_update:
  date: 09/11/2025
  author: Jason
createdAt: '2025-09-16'
updatedAt: '2025-10-22'
url: https://wiki.seeedstudio.com/es/reterminal_e10xx_with_eezstudio/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Comenzando con la Pantalla ePaper de reTerminal E Series y EEZ Studio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

## Introducción

Esta guía te llevará a través del diseño de una interfaz de usuario profesional para la serie reTerminal E utilizando la herramienta de diseño visual [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/). Aprenderás cómo crear elementos de UI, generar el código necesario y finalmente desplegarlo en el dispositivo usando el IDE de Arduino. Este proceso te permite construir interfaces personalizadas con excelente visibilidad y consumo de energía ultra bajo, ideal para aplicaciones HMI.

### Materiales Requeridos

Para completar este tutorial, por favor prepara uno de los siguientes dispositivos de la serie reTerminal E:

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### ¿Qué es EEZ Studio?

EEZ Studio es un entorno moderno de programación visual y diseño de UI desarrollado principalmente para construir interfaces de usuario para instrumentos de prueba y medición, dispositivos embebidos y otras aplicaciones interactivas. Combina diseño GUI de arrastrar y soltar, capacidades de scripting y herramientas de integración de dispositivos, permitiendo a desarrolladores, ingenieros y makers crear rápidamente interfaces profesionales sin empezar desde cero.

En resumen, EEZ Studio actúa como un puente entre hardware y software, permitiéndote diseñar, prototipar y desplegar experiencias de usuario de manera más eficiente.

### ¿Por qué usar EEZ Studio?

- Diseño de Interfaz Visual – Crea UIs complejas con un editor WYSIWYG, reduciendo la necesidad de codificación manual.
- Prototipado Rápido – Prueba y valida rápidamente ideas de diseño, ahorrando tiempo y costo de desarrollo.
- Soporte Multiplataforma – Construye aplicaciones que pueden ejecutarse en múltiples sistemas operativos y objetivos embebidos.
- Integración con Hardware – Conecta y controla directamente instrumentos de laboratorio, dispositivos IoT y placas personalizadas.
- Ecosistema de Código Abierto – Benefíciate de un conjunto de herramientas impulsado por la comunidad con transparencia y flexibilidad.

Con EEZ Studio, puedes pasar del concepto al prototipo funcional en una fracción del tiempo, mientras aseguras que tus diseños sean tanto profesionales como adaptables a futuros requerimientos.

### Diferencia con SquareLine Studio

Aunque EEZ Studio y SquareLine Studio son ambas herramientas de diseño GUI, se enfocan en diferentes objetivos y escenarios de usuario:

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
            <th>Propósito Principal</th>
            <td>Diseñado para instrumentos de prueba y medición, sistemas embebidos e integración hardware/software</td>
            <td>Enfocado en construir GUIs para sistemas embebidos (especialmente con LVGL)</td>
        </tr>
        <tr>
            <th>Usuarios Objetivo</th>
            <td>Ingenieros, desarrolladores de productos, makers, diseñadores de instrumentos de laboratorio/prueba</td>
            <td>Desarrolladores de UI embebida, aficionados, diseñadores de productos IoT</td>
        </tr>
        <tr>
            <th>Integración de Hardware</th>
            <td>Integración directa con instrumentos, dispositivos de medición y sistemas de automatización</td>
            <td>Principalmente enfocado en generación de pantalla/UI, no integración de dispositivos externos</td>
        </tr>
        <tr>
            <th>Código Abierto</th>
            <td>Impulsado por la comunidad, transparente, extensible. Soporte técnico premium/pago disponible</td>
            <td>Código cerrado, producto comercial con licenciamiento</td>
        </tr>
        <tr>
            <th>Flujo de Trabajo</th>
            <td>Puede prototipar, simular y controlar dispositivos reales desde un entorno</td>
            <td>Principalmente genera código UI para ser compilado en un proyecto embebido</td>
        </tr>
    </tbody>
</table>

## Comenzando con EEZ Studio

### Instalación de EEZ Studio

[Enlace de Instalación de EEZ Studio](https://www.envox.eu/studio/studio-introduction/) Después de acceder al enlace de descarga, selecciona la versión del sistema compatible con tu computadora para descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez90.jpg" style={{width:1000, height:'auto'}}/></div>
<br></br>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez91.jpg" style={{width:1000, height:'auto'}}/></div>

## Crear Proyecto

### Iniciando un Nuevo Proyecto LVGL

En la parte superior de la interfaz de EEZ Studio, haz clic en el botón "CREATE".
En la lista de plantillas de proyecto a la izquierda, localiza y selecciona el proyecto "LVGL".

- `Name:` Nombra tu archivo de proyecto. Para conveniencia al explicar el contenido posterior en nuestros artículos, nos referiremos a él aquí como EEZ_UI.
- `LVGL Version:` Especifica la versión de la biblioteca LVGL utilizada por el proyecto. Selecciona 9.x del menú desplegable.
- `Location:` Especifica la ruta de almacenamiento para los archivos del proyecto en tu computadora. La ruta predeterminada típicamente apunta a una carpeta de proyecto predeterminada dentro de tu directorio de descarga o instalación de EEZ Studio (ej., C:\Users\TuUsuario\Documents\EEZ Studio\Projects o una ruta similar). Si necesitas cambiar la ubicación de almacenamiento, haz clic en el ícono de carpeta (o puntos suspensivos ...) a la derecha del cuadro de texto Location.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/01.jpg" style={{width:900, height:'auto'}}/></div>

### Configuración de Ajustes del Proyecto

Al construir tu proyecto UI LVGL para el reTerminal E-paper, necesitas configurar apropiadamente los Ajustes del Proyecto de EEZ Studio para asegurar que los archivos UI generados sean compatibles con tu entorno Arduino o embebido.

Paso 1. Abrir Ajustes del Proyecto

Haz clic en el ícono ⚙️ (Settings) en la barra de herramientas superior, como se muestra a continuación.
Esto abrirá el panel de Ajustes del Proyecto en el lado derecho del espacio de trabajo.

Paso 2. Configurar Build Output e LVGL Include

Bajo General → Build, localiza los siguientes campos:

- LVGL include: Ingresa lvgl.h para incluir el encabezado LVGL correcto durante la compilación.

💡 Esto asegura que el código UI generado pueda referenciar correctamente la biblioteca LVGL durante la construcción.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting2.png" style={{width:900, height:'auto'}}/></div>

<br></br>

Paso 3. Establecer Resolución de Pantalla

A continuación, aún bajo Settings → General, configura la resolución de tu pantalla:
- Display width: 800
- Display height: 480

🧩 Estos parámetros definen la resolución de pantalla E-paper objetivo para el diseño UI y mapeo de coordenadas.
Asegúrate de que los valores coincidan con tu modelo específico de E-paper (por ejemplo, E-paper de 7.5 pulgadas – 800×480).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez_setting.png" style={{width:900, height:'auto'}}/></div>

### Configuración de Parámetros del Proyecto y Diseño de Interfaz UI

### Diseño de Interfaz UI

El diseño UI (Interfaz de Usuario) es crucial en el desarrollo de productos embebidos, ya que determina directamente la experiencia del usuario. Una interfaz estéticamente agradable, intuitiva y responsiva no solo mejora la usabilidad del producto sino que también aumenta su atractivo general.

En EEZ Studio, puedes ensamblar rápidamente interfaces arrastrando y soltando componentes. Utiliza herramientas como Styles, Fonts, Bitmaps y Themes para controlar precisamente los efectos visuales, creando una experiencia de usuario profesional y distintiva.

A continuación se presenta una introducción a las herramientas recomendadas:

- [Color](https://coolors.co/)
- [Tabla de Colores](https://peiseka.com/)
- [Ícono](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)
- [Fuente](https://fonts.google.com/)

**Introducción al Componente del Extremo Derecho**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/04.jpg" style={{width:900, height:'auto'}}/></div>

- Styles: Atributos visuales utilizados para unificar y reutilizar elementos de interfaz, asegurando consistencia y mantenimiento eficiente.
- Bitmap: Comúnmente utilizado para fondos, íconos, logos, etc., para mejorar la presentación visual.
- Fonts: Aseguran la legibilidad clara del texto mientras soportan contenido multilingüe y estilo de marca.
- Themes: Definen la estética general de la interfaz, permitiendo cambios rápidos como modo claro/oscuro.
- Groups: Organizan múltiples widgets juntos para gestión unificada y diseño.

En este tutorial, te guiaré a través del diseño de la UI para la página de inicio de un sitio web o aplicación. Una vez que domines las técnicas principales, podrás aplicarlas para crear cualquier interfaz que desees con facilidad.

Esta página está compuesta por cinco componentes:

- Panel
- Label
- Line
- Checkbox
- Image

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/15.jpg" style={{width:900, height:'auto'}}/></div>

Paso 1. Cambiar el color de fondo del lienzo

- Selecciona el lienzo cuyo color de fondo necesitas cambiar.
- Marca Color, luego selecciona tu código de color hexadecimal preferido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a1.jpg" style={{width:900, height:'auto'}}/></div>

Paso 2. Agregar Panel

- Arrastra el componente Panel desde la sección Basic al lienzo y ajusta su Ancho y Alto.

- Marca Color, luego selecciona tu código de color hexadecimal preferido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a2.jpg" style={{width:900, height:'auto'}}/></div>

Paso 3. Agregar Bitmaps

- Haz clic en el icono Bitmaps en la barra lateral derecha para agregar una imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:900, height:'auto'}}/></div>

- Nombra las imágenes que selecciones; necesitarás elegir imágenes basándote en tu convención de nomenclatura más tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

- Arrastra el componente Image desde el grupo Basic al lienzo, luego selecciona tu imagen y establece el tamaño usando Scale.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

Paso 4. Agregar Línea

- Arrastra el componente Line desde el grupo Visualiser al lienzo. Establece los puntos de inicio y fin de los Points para determinar la longitud y altura de la línea.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

Paso 5. Agregar Etiqueta

- Arrastra el componente Label desde el grupo Basic al lienzo, luego selecciona el color de fuente y la configuración de formato de fuente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

- Haz clic en la caja Fonts en la columna más a la derecha para agregar tus formatos de fuente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:900, height:'auto'}}/></div>

- Establece el nombre y tamaño de la fuente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

Lo anterior describe el uso básico de estos cinco componentes. Puedes organizarlos según el diagrama de referencia o tu propia interfaz de usuario diseñada.

### Generación de Código y Despliegue

Después de completar el diseño de la interfaz de usuario, necesitas guardar el proyecto y previsualizarlo en el simulador. Una vez verificado, ejecuta la operación de construcción para generar archivos de código ejecutables en el hardware objetivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a20.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 1. Guardar Proyecto**

Haz clic en el icono Guardar (forma de disquete, ubicado junto al botón "OPEN") en la parte superior de la interfaz para guardar tu proyecto.

**Paso 2. Previsualizar Diseño**

Haz clic en el icono Ejecutar (botón de reproducción) en la barra de herramientas para lanzar el simulador y previsualizar interactivamente los efectos de la interfaz de usuario.

**Paso 3. Construir Proyecto**

Haz clic en el icono Compilar (botón de marca de verificación) para verificar errores de sintaxis o lógica en el proyecto.
Haz clic en el icono Build (botón de llave inglesa) para generar archivos como código de interfaz de usuario, datos de imagen y datos de fuente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/17.jpg" style={{width:500, height:'auto'}}/></div>

**Paso 4. Confirmar Construcción Exitosa**

Al completarse, EEZ Studio muestra un mensaje verde que dice "Build successful", indicando que el código se ha generado exitosamente.

## Preparación del Entorno

Para programar la Pantalla ePaper de reTerminal E Series con Arduino, necesitarás configurar el IDE de Arduino con soporte para ESP32.

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/).
:::

#### Configuración del IDE de Arduino

**Paso 1.** Descarga e instala el [IDE de Arduino](https://www.arduino.cc/en/software) y lanza la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Descargar IDE de Arduino</font></span></strong>
    </a>
</div><br />

**Paso 2.** Agrega soporte para placas ESP32 al IDE de Arduino.

En el IDE de Arduino, ve a **File > Preferences** y agrega la siguiente URL al campo "Additional Boards Manager URLs":

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Paso 3.** Instala el paquete de placas ESP32.

Navega a **Tools > Board > Boards Manager**, busca "esp32" e instala el paquete ESP32 de Espressif Systems.

**Paso 4.** Selecciona la placa correcta.

Ve a **Tools > Board > ESP32 Arduino** y selecciona **XIAO_ESP32S3**.

**Paso 5.** Conecta tu Pantalla ePaper reTerminal E Series a tu computadora usando un cable USB-C.

**Paso 6.** Selecciona el puerto correcto desde **Tools > Port**.

## Programación de la Pantalla ePaper

El **reTerminal E1001 cuenta con una pantalla ePaper en blanco y negro de 7.5 pulgadas**, mientras que el **reTerminal E1002 está equipado con una pantalla ePaper a todo color de 7.3 pulgadas**. Ambas pantallas proporcionan excelente visibilidad en diversas condiciones de iluminación con consumo de energía ultra bajo, haciéndolas ideales para aplicaciones industriales que requieren pantallas siempre encendidas con uso mínimo de energía.

### Usando la Librería Seeed_GFX

Para controlar la pantalla ePaper, usaremos la librería Seeed_GFX, que proporciona soporte integral para varios dispositivos de pantalla de Seeed Studio.

**Paso 1.** Descarga la librería Seeed_GFX desde GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 2.** Instala la librería agregando el archivo ZIP en el IDE de Arduino. Ve a **Sketch > Include Library > Add .ZIP Library** y selecciona el archivo ZIP descargado.

:::note
Si has instalado previamente la librería TFT_eSPI, es posible que necesites removerla temporalmente o renombrarla desde tu carpeta de librerías de Arduino para evitar conflictos, ya que Seeed_GFX es un fork de TFT_eSPI con características adicionales para pantallas de Seeed Studio.
:::

<Tabs>
<TabItem value="Programming reTerminal E1001" label="Programando reTerminal E1001" default>
#### Programando reTerminal E1001 (ePaper Blanco y Negro de 7.5 pulgadas)

Exploremos un ejemplo simple que demuestra operaciones básicas de dibujo en la pantalla ePaper en blanco y negro.

**Paso 1.** Abre el sketch de ejemplo de la librería Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Basic > HelloWorld**

**Paso 2.** Crea un nuevo archivo llamado `driver.h` en la misma carpeta que tu sketch. Puedes hacer esto haciendo clic en el botón de flecha en el IDE de Arduino y seleccionando "New Tab", luego nombrándolo `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Ve a la [Herramienta de Configuración Seeed GFX](https://seeed-studio.github.io/Seeed_GFX/) y selecciona **reTerminal E1001** de la lista de dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Copia el código de configuración generado y pégalo en el archivo `driver.h`. El código debería verse así:

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 (UC8179)
```

</TabItem>
<TabItem value="Programming reTerminal E1002" label="Programando reTerminal E1002">

#### Programando reTerminal E1002 (ePaper a Todo Color de 7.3 pulgadas)

La pantalla ePaper a todo color soporta colores rojo, negro y blanco, permitiendo interfaces visualmente más ricas.

**Paso 1.** Abre el sketch de ejemplo a color de la librería Seeed_GFX: **File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**Paso 2.** Crea un nuevo archivo llamado `driver.h` en la misma carpeta que tu sketch, siguiendo el mismo proceso que antes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Ve a la [Herramienta de Configuración Seeed GFX](https://seeed-studio.github.io/Seeed_GFX/) y selecciona **reTerminal E1002** de la lista de dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Copia el código de configuración generado y pégalo en el archivo `driver.h`. El código debería verse así:

```cpp
#define BOARD_SCREEN_COMBO 521 // reTerminal E1002 (UC8179C)
```

</TabItem>
</Tabs>

## Desplegando el Proyecto EEZ Studio a Arduino

Primero, localiza OPI PSRAM en la barra de menú 'Tools' y ábrelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/EEZSetting.png" style={{width:500, height:'auto'}}/></div>

Estos dos archivos de controlador subyacentes necesitan ser añadidos a nuestro directorio del proyecto.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/00.png" style={{width:800, height:'auto'}}/></div>

- [e1002_display.cpp](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.cpp)
- [e1002_display.h](https://files.seeedstudio.com/wiki/EEZStudio/e1002_display.h)

Porta los siguientes archivos del proyecto (incluyendo cuatro archivos) a la Librería de Arduino para usar en proyectos de Arduino.
El `archivo EEZ_UI` se genera durante el proceso de construcción en EEZStudio. Necesitas localizar la ruta donde lo guardaste.

- 🔗 **[ZIP]** [Código](https://files.seeedstudio.com/wiki/EEZStudio/E1002-EEZStudioCode.zip)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/7.jpg" style={{width:800, height:'auto'}}/></div>

<br></br>

Aquí está el sketch principal de Arduino para ejecutar la interfaz de usuario:
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

- `e1002_display_init():` Inicializa el hardware de la pantalla e-ink y establece sus parámetros de funcionamiento.

- `pinMode(..., INPUT_PULLUP):` Configura el pin del botón como modo de entrada y habilita la resistencia pull-up interna. Esto asegura que el pin permanezca en un nivel alto (HIGH) cuando el botón no está presionado y se conecte a tierra, volviéndose bajo (LOW), cuando se presiona.

- `ui_init()` y `loadScreen():` Estas funciones inicializan la librería de interfaz de usuario LVGL y cargan la pantalla especificada

- `lv_timer_handler():` Esta es una función esencial en la librería LVGL que maneja eventos de temporizador dentro de LVGL, como animaciones y actualizaciones de pantalla.

- `if (lastKey0State == HIGH && currentKey0State == LOW):` Esta línea es el núcleo de la detección de eventos de tecla. Verifica si el estado de una tecla ha cambiado de no presionada a presionada.

- Cuando se cumple la condición, el programa actualiza `page_index` y llama a la función `loadScreen()` para cargar una nueva página.

- Actualización de Estado: `lastKey0State = currentKey0State;` Esta línea es crucial. Guarda el estado actual de la tecla para usar en la siguiente iteración de `loop()`, habilitando la siguiente comparación de estado.

- Refresco E-ink: `e1002_display_should_refresh()` y `e1002_display_refresh()` gestionan el refresco de la pantalla E-ink. A diferencia de las pantallas LCD, E-ink no puede refrescarse en tiempo real. Típicamente requiere refrescos selectivos o de pantalla completa en intervalos específicos para conservar energía y extender la vida útil. Este código implementa ese mecanismo de refresco bajo demanda.

- `delay(10)`: Esta es una medida simple de debounce por software para prevenir que el programa malinterprete el rebote físico de la tecla como múltiples presiones.

## Diagrama de Visualización de Interfaz

<div class="table-center">
  <table align="center">
    <tr>
      <th>Página de Inicio</th>
      <th>Página de Estación de Trabajo</th>
      <th>Página de Foto</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez02.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez01.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
