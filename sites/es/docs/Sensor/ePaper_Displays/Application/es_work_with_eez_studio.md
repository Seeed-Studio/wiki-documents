---
description: Diseña interfaces profesionales basadas en LVGL para productos ePaper de Seeed con EEZ Studio y luego despliega el resultado con PlatformIO; funciona tanto con la reTerminal E Serie como con la XIAO ePaper Display Board (EE04).
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
  date: 06/26/2026
  author: dimo
aliases:
  - /epaper_ee04_eezstudio
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/es/reterminal_e10xx_with_eezstudio/
updatedAt: '2026-06-26'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabajar con EEZ Studio

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/eez.jpg" style={{width:600, height:'auto'}}/></div>

Esta guía te acompaña en el diseño de una interfaz de usuario profesional con la herramienta de diseño visual [**EEZ Studio**](https://www.envox.eu/studio/studio-introduction/), la generación de código LVGL y su despliegue en un producto ePaper de Seeed con PlatformIO. El flujo es el mismo para todas las placas compatibles: las únicas diferencias son la resolución de la pantalla y el entorno de la placa, que mostramos en pestañas.

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

EEZ Studio es un entorno moderno de programación visual y diseño de interfaces de usuario creado originalmente para instrumentos de prueba y medida y dispositivos embebidos. Combina diseño de GUI mediante arrastrar y soltar, scripting y herramientas de integración de dispositivos, lo que permite a desarrolladores, ingenieros y makers crear rápidamente interfaces profesionales sin empezar desde cero.

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
            <td>Instrumentos de prueba y medida, sistemas embebidos, integración hardware/software</td>
            <td>GUIs embebidas, especialmente con LVGL</td>
        </tr>
        <tr>
            <th>Usuarios objetivo</th>
            <td>Ingenieros, desarrolladores de producto, makers, diseñadores de instrumentos de laboratorio/prueba</td>
            <td>Desarrolladores de UI embebida, aficionados, diseñadores de productos IoT</td>
        </tr>
        <tr>
            <th>Integración de hardware</th>
            <td>Integración directa con instrumentos, dispositivos de medida, automatización</td>
            <td>Enfoque en la generación de UI, menor integración con dispositivos externos</td>
        </tr>
        <tr>
            <th>Código abierto</th>
            <td>Impulsado por la comunidad, transparente, extensible (soporte premium disponible)</td>
            <td>Cerrado, producto comercial con licencias</td>
        </tr>
        <tr>
            <th>Flujo de trabajo</th>
            <td>Prototipa, simula y controla dispositivos reales desde un único entorno</td>
            <td>Principalmente genera código de UI que se compila dentro de un proyecto embebido</td>
        </tr>
    </tbody>
</table>

## Paso 1: Instalar EEZ Studio

Descarga EEZ Studio para tu sistema operativo desde [el sitio oficial](https://www.envox.eu/studio/studio-introduction/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/30.png" style={{width:1000, height:'auto'}}/></div>

## Paso 2: Crear un proyecto LVGL

En la parte superior de la interfaz de EEZ Studio, haz clic en **CREATE**. Selecciona la plantilla **LVGL** en la parte izquierda:

- **Name**: ponle un nombre a tu proyecto (usaremos `EEZ_UI` en este artículo).
- **LVGL Version**: elige `9.5.0` en la lista desplegable.
- **Location**: elige dónde guardar los archivos del proyecto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/31.png" style={{width:1000, height:'auto'}}/></div>

### Configuración del proyecto

Haz clic en el icono ⚙️ de la barra de herramientas para abrir la configuración del proyecto.

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

(Haz coincidir los valores con la pantalla ePaper Seeed que tengas conectada a la EE04. El ejemplo siguiente utiliza la pantalla monocroma de 5.83" y 648×480).

</TabItem>
</Tabs>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/32.png" style={{width:1000, height:'auto'}}/></div>

## Paso 3: Diseñar la UI

El diseño de la UI determina directamente la experiencia de usuario. EEZ Studio te permite ensamblar interfaces rápidamente arrastrando y soltando componentes y usando **Styles**, **Fonts**, **Bitmaps**, **Themes** y **Groups** para controlar el resultado visual.

Recursos en línea recomendados:

- [Coolors](https://coolors.co/) — generador de paletas de color
- [PeisekA](https://peiseka.com/) — carta de colores
- [iconfont](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl) — biblioteca de iconos
- [Google Fonts](https://fonts.google.com/) — fuentes gratuitas

La barra lateral derecha:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/33.png" style={{width:1000, height:'auto'}}/></div>

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a3.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a4.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a5.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 4.** Añade una **Line** desde el grupo Visualiser y configura sus **Points**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a6.jpg" style={{width:900, height:'auto'}}/></div>

**Paso 5.** Añade un **Label**, elige el color y luego añade fuentes mediante el panel derecho **Fonts**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a7.jpg" style={{width:900, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a8.jpg" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/a9.jpg" style={{width:900, height:'auto'}}/></div>

## Paso 4: Generar código

Cuando el diseño esté completo:

1. **Guardar**: pulsa Control + S para guardar. Si usas macOS, pulsa Command + S para guardar.
2. **Previsualizar**: haz clic en **Run** para iniciar el simulador y previsualizar la UI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/35.png" style={{width:600, height:'auto'}}/></div>

3. **Compilar / Build**: haz clic en el icono ✓ para comprobar si hay errores y luego en el icono de la llave inglesa para generar el código de la UI, los datos de imagen y los datos de fuentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/34.png" style={{width:600, height:'auto'}}/></div>

Un mensaje verde de **Build successful** confirma la generación del código. La salida va a la carpeta **`src/ui`** de tu proyecto (puedes renombrarla a `src/EEZ_UI` si lo prefieres).

## Paso 5: Configurar PlatformIO

Despliega la salida de EEZ Studio con PlatformIO. PlatformIO proporciona la estructura del proyecto, el entorno de la placa, las dependencias de las bibliotecas y la configuración de compilación necesarias para los productos Seeed ePaper.

Si es la primera vez que usas PlatformIO con productos Seeed ePaper, sigue la guía de configuración enlazada a continuación para configurar tu entorno de desarrollo.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://wiki.seeedstudio.com/es/epaper_work_with_platformio/" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}>Guía de configuración de PlatformIO</font></span></strong>
    </a>
</div><br />

:::tip
La guía de configuración de PlatformIO cubre las definiciones de placas, las dependencias de bibliotecas y la configuración de compilación; una vez completada, vuelve aquí para continuar.
:::

## Paso 6: Descargar la plantilla de PlatformIO para EEZ Studio

Abre el Firmware Hub de reTerminal E-Series:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Abrir Firmware Hub</font></span></strong>
    </a>
</div><br />

En la página de Firmware Hub:

1. En **Official Platforms**, busca la tarjeta **EEZ Studio** y haz clic en ella para expandirla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/38.png" style={{width:800, height:'auto'}}/></div>

2. Selecciona tu dispositivo: **E1001**, **E1002**, **E1003** o **E1004**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/39.png" style={{width:800, height:'auto'}}/></div>

3. La página muestra una guía de uso paso a paso para la plantilla. Haz clic en el botón **Download project template** para obtener el archivo ZIP del proyecto PlatformIO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/40.png" style={{width:800, height:'auto'}}/></div>

## Paso 7: Desplegar el proyecto de EEZ Studio

Después de descargar la plantilla, reemplaza la interfaz de usuario de la plantilla con los archivos generados por EEZ Studio.

1. Descomprime la plantilla descargada.
2. Abre la carpeta del proyecto descomprimido en VS Code con la extensión PlatformIO instalada.
3. Navega al directorio `src/ui` dentro del proyecto de la plantilla.
4. Reemplaza todos los archivos en `src/ui` con los archivos exportados por EEZ Studio en el Paso 4.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/41.png" style={{width:800, height:'auto'}}/></div>

5. En la barra de herramientas de PlatformIO, selecciona el entorno correcto para tu placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/42.png" style={{width:1000, height:'auto'}}/></div>

6. Haz clic en **Build** para compilar y luego en **Upload** para flashear el firmware en tu dispositivo.

:::tip
La plantilla ya incluye todos los controladores necesarios y la configuración de LVGL para tu dispositivo. Solo necesitas reemplazar los archivos de la interfaz de usuario.
:::

### Pantallas resultantes

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

## Referencias y recursos

- [Plantilla de PlatformIO para EEZ Studio y código fuente](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/EEZStudio)

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
