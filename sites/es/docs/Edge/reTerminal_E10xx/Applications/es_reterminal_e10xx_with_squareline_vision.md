---
description: Este artículo proporciona instrucciones sobre cómo crear la interfaz de usuario para la pantalla de papel de la serie reTerminal E en SquareLine.
title: Pantalla ePaper de la Serie reTerminal E Trabajando con SquareLine Vision
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_5.webp
slug: /reterminal_e10xx_with_squareline_vision
sidebar_position: 3
last_update:
  date: 10/29/2025
  author: Zovey
---

# Pantalla ePaper de la Serie reTerminal E Trabajando con SquareLine Vision

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:600, height:'auto'}}/></div>

## Introducción

Cuando quieres crear tu propio terminal inteligente, seguramente esperas que este dispositivo tenga una interfaz de usuario atractiva y elegante. [LVGL](https://lvgl.io/) puede lograr esto. Es la biblioteca gráfica embebida gratuita y de código abierto más popular para crear hermosas interfaces de usuario para cualquier MCU, MPU y tipo de pantalla. Con esta biblioteca, puedes crear una gran cantidad de hermosas interfaces de usuario embebidas. Especialmente cuando usas nuestros productos ePaper de la Serie reTerminal E, una interfaz atractiva es una parte indispensable. Sin embargo, escribir el código de la biblioteca LVGL también es una tarea muy complicada. Por lo tanto, este tutorial tiene como objetivo principal introducir un Editor que te permite dibujar la interfaz de usuario simplemente arrastrando y soltando controles. El método de creación WYSIWYG (Lo Que Ves Es Lo Que Obtienes) puede captar mejor el efecto de presentación final, y después de dibujar la interfaz de usuario, puedes exportarla como archivos de interfaz de usuario de LVGL, lo que simplifica enormemente el proceso de desarrollo para los desarrolladores. El nombre de esta herramienta es SquareLine Vision, es una herramienta visual de front-end para LVGL.

[SquareLine Vision](https://vision.squareline.io/) es un entorno de desarrollo de interfaz de usuario basado en el navegador (Web) o entorno compatible con Web, dedicado a diseñar rápidamente interfaces de usuario (UI) para sistemas embebidos (como dispositivos con pantallas).
También es una herramienta de **diseño + exportación de código**: diseñas la interfaz en la plataforma, y luego puedes exportar el diseño como código o recursos para ejecutar en dispositivos embebidos.

## Las características de SquareLine Vision

- **Diseño Visual de Interfaz de Usuario** – Diseña interfaces hermosas e interactivas visualmente con un editor de arrastrar y soltar, eliminando la necesidad de creación manual de código LVGL.
- **Prototipado Embebido Rápido** – Previsualiza y valida instantáneamente tu interfaz de usuario en escritorio o hardware objetivo, reduciendo dramáticamente el tiempo de iteración de diseño a dispositivo.
- **Exportación Potenciada por LVGL** – Exporta sin problemas tus diseños en código fuente limpio basado en LVGL, listo para compilar en dispositivos embebidos, microcontroladores o entornos de simulación.

Con SquareLine Vision, puedes ir del concepto al prototipo de interfaz de usuario embebida interactiva en minutos — combinando flexibilidad de diseño, previsualización en tiempo real y salida LVGL lista para producción para acelerar todo tu ciclo de desarrollo de producto.

### Materiales Requeridos

Para completar este tutorial, por favor prepara uno de los siguientes dispositivos de la Serie reTerminal E, E1001 es monocromático y E1002 es a todo color:

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>


## Comenzando con [SquareLine Vision](https://vision.squareline.io/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_7.png" style={{width:600, height:'auto'}}/></div>

### Introducción de Componentes

Toda la plataforma SquareLine Vision se puede dividir en dos partes: **Launcher** y la **Interfaz de Aplicación**.
En la interfaz del **Launcher**, podemos ver las siguientes tres funciones principales:
- proyectos
- manejar importaciones
- controlar configuraciones de cuenta

Cuando comiences a dibujar la interfaz de usuario, aprenderás sobre cinco herramientas:
- sistema de jerarquía
- gestión de pantallas
- opciones de estilo
- varios tipos de widgets
- cómo aprovechar eventos, disparadores y acciones

Cuando tengas una comprensión clara de la estructura organizacional general y las herramientas de la plataforma, será muy útil para la producción de tu proyecto personal. A continuación, crearé un proyecto basado en nuestro reTerminal E1002.

## Crear un Proyecto

### Iniciar un nuevo Proyecto LVGL

En la parte superior de la interfaz del Launcher de SquareLine Vision, haz clic en el botón `Create new`. Luego, selecciona `Seeed Studio` para ver nuestros productos. Elige el `reTerminal E1002` para crear un proyecto.
Las configuraciones fijas de este proyecto son:
- `Resolution`: 800x480
- `Offset`: 0(x), 0(y)
- `Rotation`: 0°
- `Shape`: Rectangle
- `Color Depth`: 32 bit
- `LVGL version`: 9.1
- `Theme`: Light

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Launcher_2.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
Hemos soportado los dispositivos SenseCAP Watcher y reTerminal E1001 y E1002. En el futuro, también soportaremos más productos de Seeed Studio.
:::

### Importar un proyecto .slvp existente
Si ya tienes un archivo .slvp, puedes importarlo directamente como un proyecto. Hemos proporcionado dos paneles relacionados con el clima. Puedes descargarlos directamente a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_1.png" style={{width:600, height:'auto'}}/></div>

<div class="table-center">
  <table align="center">
    <tr>
      <th>Clima Monocromático</th>
      <th>Clima a Todo Color</th>
      <th>Clima a Todo Color 2</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_1.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_2.png" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Import_3.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Seeed Weather 7 epaper.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtener</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Paper_Weather.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtener</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Seeed Weather 13 epaper.slvp" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtener</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Configuraciones de Parámetros del Proyecto y Diseño de Interfaz de Usuario

Una vez que ingreses a la interfaz de ingeniería, puedes ver cuatro áreas principales:

- La Región 1 es **Hierarchy**, que se usa principalmente para gestionar la estructura de elementos de interfaz de usuario.
- La Región 2 es **Simulator**, donde se muestra la interfaz de usuario y se usa para ver los efectos de presentación de cada interfaz de usuario.
- La Región 3 es **Inspector**, que proporciona controles detallados para el elemento actualmente seleccionado.
- La Región 4 es **Toolbar**, ubicada en la parte superior de la interfaz de aplicación, permitiendo fácil acceso a muchas herramientas y funciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_2.png" style={{width:500, height:'auto'}}/></div>

### Diseño de Interfaz de Usuario

El diseño de interfaz de usuario (UI) es crucial en el desarrollo de productos embebidos, ya que determina directamente la experiencia del usuario. Una interfaz estéticamente agradable, intuitiva y responsiva no solo mejora la usabilidad del producto sino que también aumenta su atractivo general.

En SquareLine Vision, puedes ensamblar rápidamente interfaces arrastrando y soltando componentes. Utiliza herramientas como Styles, Fonts, Bitmaps y Themes para controlar precisamente los efectos visuales, creando una experiencia de usuario profesional y distintiva.

:::tip
Este tutorial solo cubre los controles que aparecen en este proyecto. Sin embargo, SquareLine Vision ofrece muchas otras funcionalidades, como animaciones, eventos y diferentes fuentes. Si quieres explorar esta herramienta más a fondo, por favor consulta [los tutoriales oficiales](https://docs.vision.squareline.io/docs/overview).
:::

#### Introducción a Hierarchy

Aquí puedes anidar widgets dentro de otros, creando relaciones padre-hijo donde el widget contenedor se convierte en el padre y los elementos dentro de él se convierten en widgets hijos. Se puede ver que esta imagen está compuesta de varios contenedores, imágenes y textos. Estos tres controles se pueden encontrar en la barra de herramientas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_3.png" style={{width:300, height:'auto'}}/></div>

#### Introducción al Inspector

Este panel te permite ver y modificar las propiedades de pantallas, contenedores, widgets y otros elementos de la interfaz de usuario. Además, puede haber configuraciones especiales que varían según el tipo de widget. Cuando selecciono la "background img", puedo ver todos los componentes relacionados con la img en el Inspector.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_5.png" style={{width:500, height:'auto'}}/></div>

#### Introducción a la Barra de Herramientas

La Barra de Herramientas incluye opciones para la configuración del proyecto, guardar tu proyecto, acceder a la ayuda, reportar problemas, modificar la vista del proyecto, descargar el código de tu proyecto e iniciar tu proyecto en modo de reproducción directamente en SquareLine Vision.

- **Menu**: Desde aquí, puedes acceder a las funciones para guardar tu trabajo, exportar el proyecto, ajustar la configuración del proyecto y regresar a la pantalla del lanzador.
- **Project name**: Muestra el nombre de tu proyecto actual.
- **Plan**: Muestra el plan de suscripción actual del usuario.
- **Editor / Animation mode**: Alterna entre dos entornos de trabajo distintos
- **Widgets**: Accede a elementos de la interfaz de usuario a través de tres menús desplegables que agrupan lógicamente los componentes, facilitando la localización del widget apropiado para tu proyecto.
- **Undo / Redo**: Permite retroceder y avanzar a través de los cambios de diseño, apoyando la experimentación sin riesgo.
- **Play mode**: Inicia la vista previa y prueba la simulación de la interfaz de usuario.
- **Send bug report**: Proporciona acceso directo al sistema de reporte de errores.
- **User(s)**: Muestra todos los usuarios activos que están trabajando actualmente en tu proyecto, apoyando los esfuerzos de diseño colaborativo.
- **View options**: Puedes alternar la visualización del minimapa e ingresar valores de porcentaje de zoom precisos en un campo de entrada dedicado.
- **Version**: Muestra la versión actual de SquareLine Vision en la que se está ejecutando tu proyecto, asegurando que estés al tanto de tu entorno de software.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/UI_6.png" style={{width:500, height:'auto'}}/></div>

### Generación de Código y Estructura del Proyecto

El exportador de SquareLine Vision genera código GUI basado en LVGL organizado de manera estructurada para separar las responsabilidades y hacer el código mantenible. El código exportado sigue una arquitectura modular con clara separación entre la inicialización de la GUI, gestión de pantallas, eventos, estilos y animaciones.

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

#### Componentes Clave

Interfaz principal para el subsistema GUI. Proporciona funciones de alto nivel para:

- `GUI_load()`: Inicialización completa de la GUI incluyendo HAL y LVGL
- `GUI_init()`: Inicialización básica de la GUI
- `GUI_refresh()`: Actualiza el estado de la GUI (llama al manejador LVGL
- `GUI_initContent()`: Inicializa pantallas y widgets
- `GUI_initTheme()`: Configura el tema de la GUI
- `GUI_loadFirstScreen()`: Carga la pantalla inicial

## Grabación del programa

El módulo de control principal del E1002 es ESP32-S3. Si quieres programar la pantalla e-paper de la serie reTerminal E usando PlatformIO, necesitas configurar la opción para soportar ESP32 en el archivo `.ini`.

:::tip
Si esta es tu primera vez usando PlatformIO, te recomendamos encarecidamente que consultes [Getting Started with PlatformIO](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html).
:::

### Ejemplos de Uso

### Configuración de PlatformIO

- **Paso 1**: Instala [PlatformIO](https://platformio.org/platformio-ide) desde el sitio web oficial. Si no has instalado el software de PlatformIO, puedes hacer clic en el enlace de arriba.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_1.png" style={{width:500, height:'auto'}}/></div>

- **Paso 2**: Busca `platformio` en las extensiones de VScode. El primer icono que aparece es el que necesitas. Solo haz clic en `Install` para comenzar la descarga.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_5.png" style={{width:700, height:'auto'}}/></div>

- **Paso 3**: Abre el plugin de PlatformIO en secuencia. Luego, haz clic en el botón `Open` y selecciona el proyecto local de PlatformIO haciendo clic en `Open Project` para abrirlo.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_6.png" style={{width:700, height:'auto'}}/></div>


### Rutina de referencia

Hemos proporcionado tres plantillas existentes, cada una con una interfaz de usuario diferente que puede mostrar el panel meteorológico en tiempo real. También se integran con [OpenWeather](https://openweathermap.org/)(Es una plataforma de servicio que proporciona datos meteorológicos globales) para obtener cambios climáticos en tiempo real. Todo lo que necesitas hacer es obtener la API KEY de OpenWeather y conectarte a WIFI para usarlas normalmente.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Clima Monocromático </th>
      <th>Clima a Todo Color </th>
      <th>Clima a Todo Color 2</th>
    </tr>
    <tr>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/res/weather_gray.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtener</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_7_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtener</button></p>
        </a>
      </div></td>
      <td><div align="center">
        <a href="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/weather_13_fix.zip" target="_blank">
        <p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Haz clic aquí para obtener</button></p>
        </a>
      </div></td>
    </tr>
  </table>
</div>

- **Paso 1**: Abre la carpeta en VScode y espera a que las dependencias relacionadas se descarguen completamente. Después de abrir el proyecto, abre el archivo `.ini` y presiona `Ctrl+S`. En este punto, las dependencias del proyecto comenzarán a descargarse automáticamente. Cuando veas `Project has been successfully updated`, significa que el proceso de descarga está completo. Cuando la palabra `successful` esté presente, indicará inmediatamente que la instalación se ha completado exitosamente.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_2.png" style={{width:700, height:'auto'}}/></div>


- **Paso 2**: Abre **OpenWeather** y obtén tu propia API KEY
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_1.png" style={{width:700, height:'auto'}}/></div>

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_2.png" style={{width:700, height:'auto'}}/></div>
- **Paso 3**: Modifica tu `WIFI_SSID`, `WIFI_PASSWORD` y `OW_API_KEY` en `main.cpp`.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/openweather_3.png" style={{width:700, height:'auto'}}/></div>

- **Paso 4**: Conecta el reTerminal a la computadora usando un cable de datos USB, y selecciona el puerto serie apropiado para el proceso de grabación. Luego haz clic en el botón `upload` para realizar el proceso de grabación.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_3.png" style={{width:700, height:'auto'}}/></div>
  Cuando el siguiente contenido aparezca en la terminal, indica que el proceso de grabación ha sido exitoso. Posteriormente, el reTerminal actualizará automáticamente la imagen de la pantalla.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/pio_4.png" style={{width:700, height:'auto'}}/></div>

## Presentación de resultados

<div class="table-center">
  <table align="center">
    <tr>
      <th>Clima Monocromático </th>
      <th>Clima a Todo Color </th>
      <th>Clima a Todo Color 2</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/squareline_BW_template.jpeg" style={{width:350, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_4.jpg" style={{width:350, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/sample_3.jpg" style={{width:350, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
