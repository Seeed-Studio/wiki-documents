---
description: Crea un panel de estado sencillo con LVGL en dispositivos ePaper Seeed reTerminal E Serie usando PlatformIO, Seeed_GFX y LVGL.
title: Trabajar con LVGL
keywords:
  - pantalla ePaper
  - LVGL
  - Seeed_GFX
  - PlatformIO
  - reTerminal
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /epaper_work_with_lvgl
sidebar_position: 6
last_update:
  date: 06/30/2026
  author: Citric
---

# Trabajar con LVGL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/262.jpg" style={{width:1000, height:'auto'}}/></div>

LVGL es una biblioteca gráfica de código abierto para dispositivos embebidos. Proporciona componentes de interfaz listos para usar, como etiquetas, paneles, barras y herramientas de diseño, para que puedas construir una interfaz estructurada en C/C++ sin dibujar cada píxel manualmente.

Esta guía crea un sencillo **panel de estado ePaper con LVGL** usando PlatformIO. El ejemplo utiliza **reTerminal E1001** como objetivo predeterminado y mantiene entornos de PlatformIO separados para reTerminal E1002, E1003 y E1004.

El proyecto renderiza un panel de control estático con:

- un título,
- una tarjeta de estado del dispositivo,
- una tarjeta de estado de red,
- una tarjeta de batería de demostración.

Para pantallas ePaper, este flujo de trabajo de interfaz estática es un buen punto de partida porque la pantalla solo necesita actualizarse cuando cambia la información mostrada.

:::tip Probar demos sin configurar un entorno de desarrollo
Si quieres previsualizar rápidamente los resultados del proyecto o probar el firmware de demostración básico antes de configurar un entorno de desarrollo, abre el **[Centro de Firmware de reTerminal E Serie](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. Puedes elegir un dispositivo reTerminal E Serie compatible y flashear firmware de demostración directamente desde un navegador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware Flasher 🖱️</font></span></strong>
    </a>
</div><br />
:::

## Hardware compatible

Prepara uno de los siguientes dispositivos reTerminal E Serie. El proyecto de PlatformIO en esta guía utiliza **reTerminal E1001** como entorno predeterminado.

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:220, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:220, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">ePaper monocromática de 7.5"<br/>800 x 480</td>
      <td align="center">ePaper Spectra 6 colores de 7.3"<br/>800 x 480</td>
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

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:220, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:220, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center">ePaper monocromática de 10.3"<br/>1872 x 1404</td>
      <td align="center">ePaper Spectra 6 colores de 13.3"<br/>1200 x 1600</td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

## Cómo funciona el proyecto

Este ejemplo tiene dos partes principales:

- **LVGL** crea los objetos de la interfaz, como etiquetas, tarjetas y barras.
- **Seeed_GFX** inicializa la pantalla ePaper, recibe los píxeles renderizados y actualiza el panel físico.

El proyecto mantiene esas dos partes en archivos separados:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Archivo</th>
      <th>Propósito</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>Define la placa de PlatformIO, las bibliotecas, las banderas de compilación y los entornos de hardware.</td>
    </tr>
    <tr>
      <td><code>include/driver.h</code></td>
      <td>Selecciona el archivo de controlador Seeed_GFX correcto para el objetivo de hardware activo.</td>
    </tr>
    <tr>
      <td><code>include/driver_e1001.h</code> a <code>include/driver_e1004.h</code></td>
      <td>Almacena la combinación placa-pantalla de Seeed_GFX para cada modelo reTerminal E Serie.</td>
    </tr>
    <tr>
      <td><code>include/lv_conf.h</code></td>
      <td>Configura las funciones de LVGL, la profundidad de color y las fuentes.</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Inicializa Arduino, Seeed_GFX, LVGL, el búfer de pantalla y el flujo de actualización de ePaper.</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>Crea el diseño del panel de estado de LVGL.</td>
    </tr>
  </table>
</div>

## Paso 1: Instalar PlatformIO

Esta guía utiliza PlatformIO como flujo de trabajo del proyecto. PlatformIO mantiene la configuración de la placa, las bibliotecas y los archivos fuente juntos en una carpeta, lo que hace que el proyecto LVGL sea más fácil de compilar y mantener.

Si PlatformIO aún no está instalado, sigue los pasos de configuración en [Trabajar con PlatformIO](/es/epaper_work_with_platformio) y luego vuelve a esta guía.

Después de la instalación, abre **Visual Studio Code**. Deberías ver el icono de PlatformIO en la barra de actividad izquierda.

## Paso 2: Descargar el proyecto de ejemplo

El ejemplo de panel de estado ePaper con LVGL está disponible en el repositorio oficial de reTerminal E Serie:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/LVGLePaperStatusPanel" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el código</font></span></strong>
    </a>
</div><br />

Descarga el repositorio en tu ordenador y luego abre esta carpeta:

```text
OSHW-reTerminal-Series-E-D/examples/official/LVGLePaperStatusPanel
```

El proyecto de ejemplo contiene estos archivos principales:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Archivo</th>
      <th>Qué hace</th>
    </tr>
    <tr>
      <td><code>platformio.ini</code></td>
      <td>Define los entornos de PlatformIO para E1001, E1002, E1003 y E1004.</td>
    </tr>
    <tr>
      <td><code>include/driver.h</code></td>
      <td>Selecciona la configuración de controlador ePaper correcta para el entorno de compilación activo.</td>
    </tr>
    <tr>
      <td><code>include/lv_conf.h</code></td>
      <td>Configura las funciones y fuentes de LVGL utilizadas por esta demo.</td>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Inicializa la pantalla, LVGL, el búfer de renderizado y el flujo de actualización de ePaper.</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>Crea la interfaz del panel de estado que se muestra en la pantalla ePaper.</td>
    </tr>
  </table>
</div>

## Paso 3: Abrir el proyecto en PlatformIO

**Paso 1.** Abre **Visual Studio Code**.

**Paso 2.** Haz clic en el icono **PlatformIO** en la barra de actividad izquierda.

**Paso 3.** Haz clic en **PIO Home > Open**.

**Paso 4.** Haz clic en **Open Project**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/263.png" style={{width:1000, height:'auto'}}/></div>

**Paso 5.** Selecciona la carpeta `LVGLePaperStatusPanel`.

**Paso 6.** Espera a que PlatformIO cargue el proyecto e instale las bibliotecas necesarias.

## Paso 4: Seleccionar el entorno de hardware

Abre `platformio.ini` en la raíz del proyecto. El entorno predeterminado es `reterminal_e1001`.

```ini
[platformio]
default_envs = reterminal_e1001
```

Para E1001, puedes mantener la configuración predeterminada. Para otros dispositivos, cambia `default_envs` al entorno correspondiente:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Dispositivo</th>
      <th>Entorno PlatformIO</th>
    </tr>
    <tr>
      <td>reTerminal E1001</td>
      <td><code>reterminal_e1001</code></td>
    </tr>
    <tr>
      <td>reTerminal E1002</td>
      <td><code>reterminal_e1002</code></td>
    </tr>
    <tr>
      <td>reTerminal E1003</td>
      <td><code>reterminal_e1003</code></td>
    </tr>
    <tr>
      <td>reTerminal E1004</td>
      <td><code>reterminal_e1004</code></td>
    </tr>
  </table>
</div>

También puedes compilar un entorno específico desde la terminal de PlatformIO sin cambiar `default_envs`.

## Paso 5: Compilar y subir la demo

Conecta el dispositivo reTerminal E Serie a tu ordenador con un cable USB.

Para compilar el firmware predeterminado de E1001, ejecuta:

```bash
pio run
```

Para compilar un objetivo específico, añade `-e` y el nombre del entorno. Por ejemplo:

```bash
pio run -e reterminal_e1001
```

Para subir el firmware al dispositivo, ejecuta:

```bash
pio run -e reterminal_e1001 --target upload
```

Después de subirlo, abre el monitor serie:

```bash
pio device monitor -b 115200
```

Cuando la demostración se inicia correctamente, el monitor serie muestra:

```text
Seeed ePaper LVGL status panel starting.
LVGL status panel rendered.
```

La pantalla de ePaper se actualiza una vez y muestra el panel de estado de LVGL.

## Paso 6: Personaliza y aprende con la interfaz de usuario de LVGL

Después de que la demostración se ejecute correctamente, puedes empezar a modificarla como un pequeño proyecto de aprendizaje de LVGL. Los dos archivos más importantes son:

<div class="table-center">
  <table align="center">
    <tr>
      <th>File</th>
      <th>Start Here When You Want To</th>
    </tr>
    <tr>
      <td><code>src/main.cpp</code></td>
      <td>Cambia los valores pasados a la interfaz de usuario, como el estado del dispositivo, el estado de la red y el porcentaje de batería.</td>
    </tr>
    <tr>
      <td><code>src/ui_status_panel.cpp</code></td>
      <td>Cambia el título de la pantalla, el diseño de las tarjetas, las fuentes, los colores, las etiquetas y los widgets de LVGL.</td>
    </tr>
  </table>
</div>

### Cambiar los valores mostrados

Abre `src/main.cpp` y encuentra esta línea dentro de `setup()`:

```cpp
ui_status_panel_set_status("Ready", "Wi-Fi Standby", 76);
```

Esta función actualiza los tres valores dinámicos en la pantalla:

<div class="table-center">
  <table align="center">
    <tr>
      <th>Parameter</th>
      <th>Meaning</th>
      <th>Example</th>
    </tr>
    <tr>
      <td><code>status</code></td>
      <td>El texto de estado del dispositivo que se muestra en la tarjeta Device.</td>
      <td><code>"Ready"</code></td>
    </tr>
    <tr>
      <td><code>network</code></td>
      <td>El texto de estado de la red que se muestra en la tarjeta Network.</td>
      <td><code>"Wi-Fi Standby"</code></td>
    </tr>
    <tr>
      <td><code>battery_percent</code></td>
      <td>El valor de la barra de batería. La función lo mantiene entre 0 y 100.</td>
      <td><code>76</code></td>
    </tr>
  </table>
</div>

Por ejemplo, cámbialo a:

```cpp
ui_status_panel_set_status("Online", "Wi-Fi Connected", 95);
```

Luego compila y sube el proyecto de nuevo:

```bash
pio run -e reterminal_e1001 --target upload
```

### Cambiar el título y los nombres de las tarjetas

Abre `src/ui_status_panel.cpp`. El título principal se crea en `ui_status_panel_create()`:

```cpp
lv_label_set_text(title, "Seeed ePaper LVGL Panel");
```

Puedes cambiar el texto del título:

```cpp
lv_label_set_text(title, "My First LVGL Dashboard");
```

Cada tarjeta se crea con `create_card()`. Por ejemplo:

```cpp
lv_obj_t *status_card = create_card(screen, "Device", status_x, status_y, status_w, status_h, lv_palette_main(LV_PALETTE_RED));
lv_obj_t *network_card = create_card(screen, "Network", network_x, network_y, network_w, network_h, lv_palette_main(LV_PALETTE_BLUE));
lv_obj_t *battery_card = create_card(screen, "Battery Demo", battery_x, battery_y, battery_w, battery_h, lv_palette_main(LV_PALETTE_GREEN));
```

El segundo parámetro es el título de la tarjeta. Puedes cambiar `"Device"`, `"Network"` y `"Battery Demo"` para que coincidan con tu propia aplicación.

### Cambiar los colores

La demostración utiliza colores de la paleta de LVGL:

```cpp
lv_palette_main(LV_PALETTE_RED)
lv_palette_main(LV_PALETTE_BLUE)
lv_palette_main(LV_PALETTE_GREEN)
```

Para modelos de ePaper en color como reTerminal E1002 y reTerminal E1004, `src/main.cpp` asigna los colores de LVGL a la paleta de colores de ePaper. La paleta de ejemplo incluye blanco, negro, rojo, amarillo, verde y azul.

Para modelos de ePaper monocromos como reTerminal E1001 y reTerminal E1003, la misma interfaz de usuario se convierte a blanco y negro según el brillo. Los colores más oscuros se vuelven negros y los colores más claros se vuelven blancos.

Esto significa que puedes usar el mismo código de interfaz de usuario de LVGL en los cuatro dispositivos, mientras que el controlador de pantalla convierte los píxeles finales para el hardware seleccionado.

### Cambiar el diseño

La demostración utiliza `EPAPER_LVGL_HOR_RES` y `EPAPER_LVGL_VER_RES` de `platformio.ini` para decidir el tamaño de la pantalla. En `src/ui_status_panel.cpp`, estos valores se usan aquí:

```cpp
const int32_t screen_width = EPAPER_LVGL_HOR_RES;
const int32_t screen_height = EPAPER_LVGL_VER_RES;
const bool is_landscape = screen_width >= screen_height;
```

El diseño luego elige un diseño horizontal para pantallas más anchas y un diseño vertical para pantallas más altas. Por eso el mismo ejemplo puede ejecutarse tanto en dispositivos de 800 x 480 como en paneles de ePaper más grandes.

Para un primer cambio sencillo, ajusta los valores de espaciado:

```cpp
const int32_t margin = max_i32(32, screen_width / 20);
const int32_t gap = max_i32(20, screen_width / 40);
```

Aumentar `margin` deja más espacio vacío alrededor de los bordes de la pantalla. Aumentar `gap` deja más espacio entre las tarjetas.

### Añade tus propios datos

El valor de la batería en esta demostración es un dato de interfaz de usuario de ejemplo, por lo que la pantalla lo muestra como un valor de demostración. Para conectar datos reales de la aplicación, mantén la función de la interfaz de usuario y pásale tus propios valores:

```cpp
int battery_percent = 88;
ui_status_panel_set_status("Running", "Wi-Fi Connected", battery_percent);
```

Para proyectos con ePaper, un flujo de trabajo práctico es:

**Paso 1.** Leer o calcular los datos más recientes en tu aplicación.

**Paso 2.** Pasar los nuevos valores a `ui_status_panel_set_status()`.

**Paso 3.** Actualizar la pantalla de ePaper cuando el contenido necesite cambiar.

La demostración se renderiza una vez en `setup()` porque el contenido de la pantalla es estático. Para aplicaciones como un panel de sensores, un calendario o un monitor de estado, puedes actualizar los valores y refrescar el panel cuando cambien los datos mostrados.

## Recursos

- **[Docs]** [Documentación de LVGL](https://docs.lvgl.io/)
- **[GitHub]** [LVGL](https://github.com/lvgl/lvgl)
- **[GitHub]** [Librería Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX)
- **[GitHub]** [Ejemplo de panel de estado ePaper con LVGL](https://github.com/Seeed-Projects/OSHW-reTerminal-Series-E-D/tree/main/examples/official/LVGLePaperStatusPanel)
- **[Tool]** [Centro de firmware de reTerminal E-Series](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)
- **[Wiki]** [Trabajar con PlatformIO](/es/epaper_work_with_platformio)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
    <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
    <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>
  <div class="button_tech_support_container">
    <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
    <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
