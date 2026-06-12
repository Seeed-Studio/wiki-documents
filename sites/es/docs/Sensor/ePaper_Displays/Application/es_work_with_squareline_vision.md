---
description: Este artículo proporciona instrucciones sobre cómo crear la interfaz de usuario para la pantalla de papel de la reTerminal E Serie en SquareLine.
title: Trabajar con SquareLine Vision
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_5.webp
slug: /reterminal_e10xx_with_squareline_vision
sidebar_position: 6
last_update:
  date: 10/29/2025
  author: Zovey
createdAt: '2025-11-03'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/es/reterminal_e10xx_with_squareline_vision/
---

# Pantalla de papel reTerminal E Serie trabajando con SquareLine Vision

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:600, height:'auto'}}/></div>

## Introducción

Cuando quieras crear tu propio terminal inteligente, sin duda esperarás que este dispositivo tenga una interfaz de usuario atractiva y elegante. [LVGL](https://lvgl.io/) puede lograr esto. Es la biblioteca gráfica embebida gratuita y de código abierto más popular para crear interfaces de usuario atractivas para cualquier tipo de MCU, MPU y pantalla. Con esta biblioteca, puedes crear una gran cantidad de interfaces de usuario embebidas y atractivas. Especialmente cuando utilizas nuestros productos de papel electrónico reTerminal E Serie, una interfaz atractiva es una parte indispensable. Sin embargo, escribir el código de la biblioteca LVGL también es una tarea muy complicada. Por lo tanto, este tutorial tiene como objetivo principal presentar un editor que te permite dibujar la UI simplemente arrastrando y soltando controles. El método de creación WYSIWYG (What You See Is What You Get) permite captar mejor el efecto de presentación final y, después de dibujar la UI, puedes exportarla como archivos de UI de LVGL, lo que simplifica enormemente el proceso de desarrollo para los desarrolladores. El nombre de esta herramienta es SquareLine Vision, es una herramienta visual de front-end para LVGL.

[SquareLine Vision](https://vision.squareline.io/) es un entorno de desarrollo de UI basado en el navegador (Web) o en un entorno compatible con la Web, dedicado a diseñar rápidamente interfaces de usuario (UI) para sistemas embebidos (como dispositivos con pantallas).
También es una herramienta de **diseño + exportación de código**: diseñas la interfaz en la plataforma y luego puedes exportar el diseño como código o recursos para ejecutarse en dispositivos embebidos. 

## Las características de SquareLine Vision

- **Diseño visual de UI** – Diseña interfaces hermosas e interactivas de forma visual con un editor de arrastrar y soltar, eliminando la necesidad de crear código LVGL manualmente.
- **Prototipado embebido rápido** – Previsualiza y valida al instante tu UI en el escritorio o en el hardware de destino, reduciendo drásticamente el tiempo de iteración del diseño al dispositivo.
- **Exportación impulsada por LVGL** – Exporta sin problemas tus diseños a código fuente limpio basado en LVGL, listo para compilar en dispositivos embebidos, microcontroladores o entornos de simulación.

Con SquareLine Vision, puedes pasar de un concepto a un prototipo de UI embebida interactiva en cuestión de minutos, combinando flexibilidad de diseño, vista previa en tiempo real y salida LVGL lista para producción para acelerar todo tu ciclo de desarrollo de producto.

### Materiales requeridos

Para completar este tutorial, prepara uno de los siguientes dispositivos reTerminal E Serie, E1001 es monocromático y E1002 es a todo color:

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


## Primeros pasos con [SquareLine Vision](https://vision.squareline.io/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_7.png" style={{width:600, height:'auto'}}/></div>

### Introducción de componentes

Toda la plataforma SquareLine Vision se puede dividir en dos partes: **Launcher** y la **Interfaz de la Aplicación**.
En la interfaz del **Launcher**, podemos ver las siguientes tres funciones principales:
- proyectos
- gestionar importaciones
- controlar la configuración de la cuenta

Cuando empieces a dibujar la UI, conocerás cinco herramientas:
- sistema de jerarquía
- gestión de pantallas
- opciones de estilo
- varios tipos de widgets
- cómo aprovechar eventos, disparadores y acciones

Cuando tengas una comprensión clara de la estructura organizativa general y de las herramientas de la plataforma, será de gran ayuda para la producción de tu proyecto personal. A continuación, crearé un proyecto basado en nuestro reTerminal E1002.

## Crear un proyecto

### Iniciar un nuevo proyecto LVGL

En la parte superior de la interfaz del Launcher de SquareLine Vision, haz clic en el botón `Create new`. Luego, selecciona `Seeed Studio` para ver nuestros productos. Elige el `reTerminal E1002` para crear un proyecto.
Los ajustes fijos de este proyecto son:
- `Resolution`: 800x480
- `Offset`: 0(x), 0(y)
- `Rotation`: 0°
- `Shape`: Rectangle
- `Color Depth`: 32 bit
- `LVGL version`: 9.1
- `Theme`: Light

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Launcher_2.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
Hemos dado soporte a los dispositivos SenseCAP Watcher y reTerminal E1001 y E1002. En el futuro, también daremos soporte a más productos de Seeed Studio.
:::

### Importar un proyecto .slvp existente
Si ya tienes un archivo .slvp, puedes importarlo directamente como un proyecto. Hemos proporcionado dos paneles relacionados con el clima. Puedes descargarlos directamente a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_1.png" style={{width:600, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Clima monocromático</th>
      <th>Clima a todo color</th>
      <th>Clima a todo color 2</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_3.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Seeed Weather 7 epaper.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtenerlo</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Paper_Weather.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtenerlo</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Seeed Weather 13 epaper.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtenerlo</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Configuración de parámetros del proyecto y diseño de la interfaz de UI

Una vez que entres en la interfaz de ingeniería, podrás ver cuatro áreas principales:

- La Región 1 es **Hierarchy**, que se utiliza principalmente para gestionar la estructura de los elementos de la UI. 
- La Región 2 es **Simulator**, donde se muestra la UI y se utiliza para ver los efectos de presentación de cada UI. 
- La Región 3 es **Inspector**, que proporciona controles detallados para el elemento seleccionado actualmente. 
- La Región 4 es **Toolbar**, situada en la parte superior de la interfaz de la aplicación, lo que permite acceder fácilmente a muchas herramientas y funciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_2.png" style={{width:500, height:'auto'}}/></div>

### Diseño de la interfaz de UI

El diseño de la UI (User Interface) es crucial en el desarrollo de productos embebidos, ya que determina directamente la experiencia del usuario. Una interfaz estética, intuitiva y con buena respuesta no solo mejora la usabilidad del producto, sino que también incrementa su atractivo general.

En SquareLine Vision, puedes ensamblar rápidamente interfaces arrastrando y soltando componentes. Utiliza herramientas como Styles, Fonts, Bitmaps y Themes para controlar con precisión los efectos visuales, creando una experiencia de usuario profesional y distintiva.

:::tip
Este tutorial solo cubre los controles que aparecen en este proyecto. Sin embargo, SquareLine Vision ofrece muchas otras funcionalidades, como animaciones, eventos y diferentes fuentes. Si quieres explorar más esta herramienta, consulta [los tutoriales oficiales](https://docs.vision.squareline.io/docs/overview).
:::

#### Introducción a Hierarchy

Aquí puedes anidar widgets entre sí, creando relaciones padre-hijo donde el widget contenedor se convierte en el padre y los elementos dentro de él se convierten en widgets hijo. Se puede ver que esta imagen está compuesta por varios contenedores, imágenes y textos. Estos tres controles se pueden encontrar todos en la barra de herramientas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_3.png" style={{width:300, height:'auto'}}/></div>

#### Introducción al Inspector

Este panel te permite ver y modificar las propiedades de pantallas, contenedores, widgets y otros elementos de la interfaz de usuario. Además, puede haber configuraciones especiales que varían según el tipo de widget. Cuando selecciono la "background img", puedo ver todos los componentes relacionados con la img en el Inspector.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_5.png" style={{width:500, height:'auto'}}/></div>

#### Introducción a la barra de herramientas

La barra de herramientas incluye opciones para la configuración del proyecto, guardar tu proyecto, acceder a la ayuda, informar de problemas, modificar la vista del proyecto, descargar el código de tu proyecto e iniciar tu proyecto en modo de reproducción directamente en SquareLine Vision.

- **Menú**: Desde aquí, puedes acceder a las funciones para guardar tu trabajo, exportar el proyecto, ajustar la configuración del proyecto y volver a la pantalla del lanzador.
- **Nombre del proyecto**: Muestra el nombre de tu proyecto actual.
- **Plan**: Muestra el plan de suscripción actual del usuario.
- **Modo Editor / Animación**: Alterna entre dos entornos de trabajo distintos.
- **Widgets**: Accede a los elementos de la interfaz de usuario a través de tres menús desplegables que agrupan lógicamente los componentes, lo que facilita localizar el widget adecuado para tu proyecto. 
- **Deshacer / Rehacer**: Permite retroceder y avanzar a través de los cambios de diseño, lo que favorece la experimentación sin riesgo. 
- **Modo de reproducción**: Inicia la vista previa y prueba la simulación de la interfaz de usuario.
- **Enviar informe de error**: Proporciona acceso directo al sistema de informes de errores.
- **Usuario(s)**: Muestra todos los usuarios activos que están trabajando actualmente en tu proyecto, lo que favorece los esfuerzos de diseño colaborativo.
- **Opciones de vista**: Puedes alternar la visualización del minimapa e introducir valores de porcentaje de zoom precisos en un campo de entrada dedicado.
- **Versión**: Muestra la versión actual de SquareLine Vision en la que se está ejecutando tu proyecto, garantizando que conozcas tu entorno de software.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_6.png" style={{width:500, height:'auto'}}/></div>

### Generación de código y estructura del proyecto

El exportador de SquareLine Vision genera código de GUI basado en LVGL organizado de forma estructurada para separar responsabilidades y hacer que el código sea fácil de mantener. El código exportado sigue una arquitectura modular con una separación clara entre la inicialización de la GUI, la gestión de pantallas, los eventos, los estilos y las animaciones.

#### Estructura del proyecto

```shell
exported_project/
├── GUI/                    # Main GUI folder (or 'ui' for Studio format)
│   ├── Content/            # GUI content files
│   │   ├── screens/        # Individual screen source files
│   │   ├── images/         # Generated image source files
│   │   └── fonts/          # Font source files
│   ├── Behavior/           # Event and animation related files
│   │   ├── GUI_Events.c    # Event handler implementations
│   │   └── GUI_Animations.c # Animation and timeline definitions
│   ├── Framework/          # GUI framework files
│   │   └── LVGL/           # LVGL library files
│   ├── GUI.c               # Main GUI implementation
│   ├── GUI.h               # Main GUI header
│   ├── GUI_variables.c     # GUI object declarations
│   ├── GUI_GlobalStyles.c  # Global style definitions
│   ├── CMakeLists.txt      # CMake build configuration
│   └── filelist.txt        # List of all GUI source files
├── lv_conf.h               # LVGL configuration file
├── main.c                  # Application entry point
├── HAL.c                   # Hardware abstraction layer
├── CMakeLists.txt          # Main CMake configuration
├── build.sh                # Build script
└── run.sh                  # Run script
```

#### Componentes clave

Interfaz principal para el subsistema de GUI. Proporciona funciones de alto nivel para:

- `GUI_load()`: Inicialización completa de la GUI, incluida la HAL y LVGL
- `GUI_init()`: Inicialización básica de la GUI
- `GUI_refresh()`: Actualiza el estado de la GUI (llama al manejador de LVGL
- `GUI_initContent()`: Inicializa pantallas y widgets
- `GUI_initTheme()`: Configura el tema de la GUI
- `GUI_loadFirstScreen()`: Carga la pantalla inicial

## Grabación del programa

El módulo de control principal del E1002 es el ESP32-S3. Si quieres programar la pantalla de tinta electrónica reTerminal E Serie usando PlatformIO, necesitas configurar la opción para admitir ESP32 en el archivo `.ini`.

:::tip
Si es la primera vez que usas PlatformIO, te recomendamos encarecidamente que consultes [Getting Started with PlatformIO](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html).
:::

### Ejemplos de uso

### Configuración de PlatformIO

- **Paso 1**: Instala [PlatformIO](https://platformio.org/platformio-ide) en el sitio web oficial. Si no has instalado el software de PlatformIO, puedes hacer clic en el enlace de arriba.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_1.png" style={{width:500, height:'auto'}}/></div>

- **Paso 2**: Busca `platformio` en las extensiones de VScode. El primer icono que aparece es el que necesitas. Solo haz clic en `Install` para iniciar la descarga.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_5.png" style={{width:700, height:'auto'}}/></div>

- **Paso 3**: Abre el plugin PlatformIO en secuencia. Luego, haz clic en el botón `Open` y selecciona el proyecto local de PlatformIO haciendo clic en `Open Project` para abrirlo.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_6.png" style={{width:700, height:'auto'}}/></div>


### Rutina de referencia

Hemos proporcionado tres plantillas existentes, cada una con una interfaz de usuario diferente que puede mostrar el panel de control del clima en tiempo real. También se integran con [OpenWeather](https://openweathermap.org/)(es una plataforma de servicios que proporciona datos meteorológicos globales) para obtener cambios climáticos en tiempo real. Todo lo que necesitas hacer es obtener la API KEY de OpenWeather y conectarte a la WIFI para usarlas con normalidad.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Clima monocromo </th>
      <th>Clima a todo color </th>
      <th>Clima a todo color 2</th>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/res/weather_gray.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtenerlo</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_7_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtenerlo</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_13_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtenerlo</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

- **Paso 1**: Abre la carpeta en VScode y espera a que se descarguen completamente las dependencias relacionadas. Después de abrir el proyecto, abre el archivo `.ini` y presiona `Ctrl+S`. En este punto, las dependencias del proyecto comenzarán a descargarse automáticamente. Cuando veas `Project has been successfully updated`, significa que el proceso de descarga se ha completado. Cuando aparezca la palabra `successful`, indicará inmediatamente que la instalación se ha completado correctamente.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_2.png" style={{width:700, height:'auto'}}/></div>


- **Paso 2**: Abre **OpenWeather** y obtén tu propia API KEY
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_1.png" style={{width:700, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_2.png" style={{width:700, height:'auto'}}/></div>
- **Paso 3**: Modifica tu `WIFI_SSID`, `WIFI_PASSWORD` y `OW_API_KEY` en `main.cpp`.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_3.png" style={{width:700, height:'auto'}}/></div>

- **Paso 4**: Conecta el reTerminal al ordenador usando un cable de datos USB y selecciona el puerto serie apropiado para el proceso de grabación. Luego haz clic en el botón `upload` para realizar el proceso de grabación.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_3.png" style={{width:700, height:'auto'}}/></div>
  Cuando aparezca el siguiente contenido en el terminal, indicará que el proceso de grabación se ha realizado correctamente. Posteriormente, el reTerminal actualizará automáticamente la imagen de la pantalla.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_4.png" style={{width:700, height:'auto'}}/></div>

## Presentación de resultados

<div class="table-center">
  <table align="center">
    <tr>
      <th>Clima monocromático </th>
      <th>Clima a todo color </th>
      <th>Clima a todo color 2</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/squareline_BW_template.jpeg" style={{width:350, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:350, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_3.jpg" style={{width:350, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

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
