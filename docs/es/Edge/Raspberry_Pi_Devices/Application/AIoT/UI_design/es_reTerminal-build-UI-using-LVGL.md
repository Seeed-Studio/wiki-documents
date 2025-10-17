---
description: LVGL para reTerminal
title: LVGL para reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-build-UI-using-LVGL
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_banner.jpg" alt="pir" width="800" height="auto"/></p>

## Introducción

LVGL proporciona todo lo que necesitas para crear una GUI embebida con elementos gráficos fáciles de usar, efectos visuales hermosos y una huella de memoria baja. LVGL es una biblioteca gráfica dirigida a microcontroladores con recursos limitados. Sin embargo, es posible usarla para crear GUIs embebidas con microprocesadores de gama alta y placas que ejecutan el sistema operativo Linux. Actualmente hay dos formas de hacer esto:

- Simulador de PC con la biblioteca multiplataforma SDL 2
- simplemente usando el dispositivo de frame buffer de Linux (típicamente /dev/fb0).

En este artículo de Wiki usaremos el ejemplo del simulador de PC con SDL2 y lo modificaremos ligeramente para mostrar la UI en pantalla completa en lugar de en una ventana.

#### Características

- [Bloques de construcción](https://docs.lvgl.io/master/widgets/index.html) potentes: botones, gráficos, listas, deslizadores, imágenes, etc.

- Motor gráfico avanzado: animaciones, anti-aliasing, opacidad, desplazamiento suave, modos de mezcla, etc.
- Soporta [varios dispositivos de entrada](https://docs.lvgl.io/master/overview/indev.html): pantalla táctil, ratón, teclado, codificador, botones, etc.
- Soporta [múltiples pantallas](https://docs.lvgl.io/master/overview/display.html)
- Independiente del hardware, puede usarse con cualquier microcontrolador y pantalla
- Escalable para operar con poca memoria (64 kB Flash, 16 kB RAM)
- Soporte multiidioma con manejo UTF-8, CJK, script bidireccional y árabe
- Elementos gráficos completamente personalizables mediante [estilos similares a CSS](https://docs.lvgl.io/master/overview/style.html)
- Diseños potentes inspirados en CSS: [Flexbox](https://docs.lvgl.io/master/layouts/flex.html) y [Grid](https://docs.lvgl.io/master/layouts/grid.html)
- SO, memoria externa y GPU son soportados pero no requeridos. (soporte integrado para STM32 DMA2D, y NXP PXP y VGLite)
- Renderizado suave incluso con un [solo frame buffer](https://docs.lvgl.io/master/porting/display.html)
- Escrito en C y compatible con C++
- El enlace de Micropython expone la [API de LVGL en Micropython](https://blog.lvgl.io/2019-02-20/micropython-bindings)
- [Simulador](https://docs.lvgl.io/master/get-started/pc-simulator.html) para desarrollar en PC sin hardware embebido
- Más de 100 [Ejemplos](https://github.com/lvgl/lvgl/tree/master/examples) simples
- [Documentación](http://docs.lvgl.io/) y referencias de API en línea y en PDF

## Preparar el Entorno de Desarrollo

### En reTerminal

En Raspberry Pi OS puedes instalar fácilmente SDL2 usando una terminal:

```bash
sudo apt-get update && sudo apt-get install build-essential libsdl2-dev cmake  -y
```

Luego clona el proyecto del simulador y los submódulos relacionados:

```bash
git clone --recursive https://github.com/littlevgl/pc_simulator.git
```

### En PC Host

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/UrSkzbuuGaw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

EdgeLine es un editor WYSIWYG para LVGL, que permite a los usuarios crear interfaces y luego exportar código C/Micropython para usar en el dispositivo objetivo. Actualmente está en etapa beta con funcionalidad limitada y está disponible tanto para Windows como para Linux.

Versión Windows: [ENLACE](https://lvgl.io/assets/edgeline/EdgeLine_Setup_v0_3_installer.exe)
Versión Linux: [ENLACE](https://lvgl.io/assets/edgeline/EdgeLine_v0_3_linux.zip)

Dado que EdgeLine está en etapa beta, verifica la presencia de versiones más nuevas en el [subforo EdgeLine del foro de LVGL](https://forum.lvgl.io/c/edgeline/15)

Para la versión de linux asegúrate de que Edgeline.x86_64 y server/micropython sean ejecutables. (```chmod +x filename```)

Después de eso EdgeLine puede ejecutarse mediante

```bash
./Edgeline.x86_64
```

El código exportado no carga ninguna de las pantallas por defecto, por lo tanto necesitas llamar lv_scr_load(scr_name) manualmente en la pantalla deseada.

## Ejecutar demos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl.gif" alt="pir" width="800" height="auto"/></p>

Los siguientes pasos se pueden usar con CMake en un Raspberry Pi OS.

Asegúrate de que CMake esté instalado, es decir, que el comando cmake funcione en la terminal.

```bash
cd pc_simulator/
mkdir build
cd build.
cmake ..
make -j4
```

El binario estará en pc_simulator/build/bin/main, y puede ejecutarse escribiendo ese comando:

```bash
DISPLAY=:0 ./bin/main
```

Eso mostraría la demostración del widget en modo ventana - para cambiarlo a pantalla completa, abre
```pc_simulator/lv_drivers/sdl/sdl.c```
and change #L344 to

```c
static void window_create(monitor_t * m)
{
    m->window = SDL_CreateWindow("TFT Simulator",
                            SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED,
                            1280 , 720 , SDL_WINDOW_FULLSCREEN);       /*last param. SDL_WINDOW_BORDERLESS to hide borders*/

```

Además, cambia la resolución de pantalla en pc_simulator/lv_drv_conf.h #L90

```conf
/*-------------------
 *  Monitor of PC
 *-------------------*/
#ifndef USE_MONITOR
#  define USE_MONITOR         1
#endif

#if USE_MONITOR
#  define MONITOR_HOR_RES     1280
#  define MONITOR_VER_RES     720
```

¡Recompila y ejecuta el binario para ver la aplicación de demostración en pantalla completa!

```bash
make -j4
DISPLAY=:0 ./bin/main
```

Si la dirección del toque no es correcta, necesitas cambiar la línea 89 de ```/boot/config.txt``` a ```dtoverlay=reTerminal,tp_rotate=0```

## Construye tu propia aplicación GUI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif" alt="pir" width="800" height="auto"/></p>

Para ver cómo puedes construir tu propia aplicación de interfaz de usuario para reTerminal con LVGL 8.0, puedes echar un vistazo al código de ejemplo en [este repositorio de GitHub](https://github.com/AIWintermuteAI/Seeed_reTerminal_LVGL_UI_Demo).

Todos los componentes necesarios se importan e inicializan en main.c, después de eso se llama a la función principal de la interfaz de usuario. La descripción de la interfaz de usuario, las funciones de callback y las funciones auxiliares se encuentran dentro de **lv_demo_reterminal_UI/lv_demo_reterminal_UI.c**.

```cpp
    tv = lv_tabview_create(lv_scr_act(), LV_DIR_TOP, tab_h);

    lv_obj_set_style_text_font(lv_scr_act(), font_normal, 0);

    lv_obj_t * tab_btns = lv_tabview_get_tab_btns(tv);
    lv_obj_set_style_pad_left(tab_btns, 0, 0);

    lv_obj_t * t1 = lv_tabview_add_tab(tv, "Assistant");
    lv_obj_t * t2 = lv_tabview_add_tab(tv, "Debug");
    lv_obj_t * t3 = lv_tabview_add_tab(tv, "Stats");
```

Creamos un widget Tabview en la pantalla activa y lo poblamos con tres pestañas: Assistant, Debug y Stats.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-1.png" alt="pir" width="800" height="auto"/></p>

El contenido de cada pestaña se inicializa por separado en una función correspondiente:

```cpp
    assistant_create(t1);
    debug_create(t2);
    stats_create(t3);

    color_changer_create(tv);

    evdev_lis3dh_init();
```

Además, se crean elementos cambiadores de color en el widget Tabview y se inicializa el acelerómetro integrado. Después de eso, creamos tres callbacks de temporizador con datos de entrada ficticios:

```cpp
    static uint32_t user_data = 10;
    lv_timer_t * time_timer = lv_timer_create(time_timer_cb, 1,  &user_data);
    lv_timer_t * system_timer = lv_timer_create(system_timer_cb, 500,  &user_data);
    lv_timer_t * accelerometer_timer = lv_timer_create(accelerometer_timer_cb, 50,  &user_data);
```

Estas son responsables de obtener la hora del sistema, el estado del sistema (CPU, Memoria, Espacio en Disco, velocidad actual de Ethernet, etc.) y las lecturas del acelerómetro respectivamente. Puedes encontrar estas tres funciones de callback en la parte inferior del archivo lv_demo_reterminal_UI.c.

```cpp
void time_timer_cb(lv_timer_t * timer)
{

    time_t t = time(NULL);
    struct tm *local = localtime(&t);

    sprintf(timeString, "%02d:%02d:%02d", local->tm_hour, local->tm_min, local->tm_sec);
    sprintf(dateString, "%s\n%s %02d %04d", DAY[local->tm_wday], MONTH[local->tm_mon], local->tm_mday, local->tm_year + 1900);

    lv_label_set_text(clock_label, timeString);
    lv_label_set_text(date_label, dateString);

}

void system_timer_cb(lv_timer_t * timer)
{

    lv_meter_indicator_t *indic1 = timer->user_data;
    cpu_pct = 100 - lv_timer_get_idle();

    lv_mem_monitor_t mon;
    lv_mem_monitor(&mon);

    uint32_t used_size = mon.total_size - mon.free_size;;
    uint32_t used_kb = used_size / 1024;
    uint32_t used_kb_tenth = (used_size - (used_kb * 1024)) / 102;
    mem_pct = mon.used_pct;

    dsk_pct = get_available_space();
    eth0_num = get_current_network_speed();
    //light_num = get_light_sensor();

}

void accelerometer_timer_cb(lv_timer_t * timer)
{

    evdev_lis3dh_read(&data);

    lv_chart_set_next_value(chart1, x_ser, data.x_val);
    lv_chart_set_next_value(chart1, y_ser, data.y_val);
    lv_chart_set_next_value(chart1, z_ser, data.z_val);

}
```

Para tu aplicación particular podría ser más adecuado usar otros widgets, que Tabview. Puedes consultar la [descripción completa de widgets de LVGL 8.0](https://docs.lvgl.io/master/widgets/index.html) para uso y ejemplos.

Si decides seguir de cerca nuestra aplicación de demostración al crear tu primera aplicación de UI con LVGL para reTerminal, a continuación puedes encontrar información más detallada sobre lo que sucede dentro de una de estas funciones (**assistant_create()**). Tu flujo de trabajo para crear nuevas aplicaciones será similar:

1) Inicializar widgets en la(s) pantalla(s)
2) Crear callback basado en temporizador o eventos para obtener los datos de sensores/sistema
2) Cambiar el contenido de los widgets basado en datos - normalmente eso se hace usando variables globales declaradas en la parte superior del código

**assistant_create**
Creamos un objeto panel para la pestaña y establecemos su altura.

```cpp
    lv_obj_t * panel1 = lv_obj_create(parent);
    lv_obj_set_height(panel1, lv_pct(100));
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-2.png" alt="pir" width="800" height="auto"/></p>

Luego creamos un objeto de botón de imagen desde un array de C ubicado en la carpeta assets, obtenido con la [herramienta de conversión de imágenes de LVGL](https://lvgl.io/tools/imageconverter). También inicializamos y asignamos la transformación de estilo de presión de botón al objeto de botón de imagen (el botón se vuelve verde al presionarlo). Adicionalmente se asigna un callback de evento **speech_event_cb** a la presión del botón - ya que es solo un ejemplo de prueba, eso solo imprimirá un texto en la terminal. Pero en una aplicación real puede usarse para iniciar un Asistente Inteligente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-3.png" alt="pir" height="400" height="auto"/></p>

```cpp
    LV_IMG_DECLARE(speech_btn_img);

    /*Create a transition animation on width transformation and recolor.*/
    static lv_style_prop_t tr_prop[] = {LV_STYLE_IMG_RECOLOR_OPA, 0};
    static lv_style_transition_dsc_t tr;
    lv_style_transition_dsc_init(&tr, tr_prop, lv_anim_path_linear, 500, 0, NULL);

    static lv_style_t style_def;
    lv_style_init(&style_def);
    lv_style_set_text_color(&style_def, lv_color_white());
    lv_style_set_transition(&style_def, &tr);

    /*Darken the button when pressed and make it wider*/
    static lv_style_t style_pr;
    lv_style_init(&style_pr);
    lv_style_set_img_recolor_opa(&style_pr, LV_OPA_70);
    lv_style_set_img_recolor(&style_pr, lv_palette_main(LV_PALETTE_GREEN));

    /*Create an image button*/
    lv_obj_t * speech_btn = lv_imgbtn_create(panel1);
    lv_imgbtn_set_src(speech_btn, LV_IMGBTN_STATE_RELEASED, NULL, &speech_btn_img, NULL);
    //lv_img_set_zoom(speech_btn, 128);
    lv_obj_set_size(speech_btn, 300, 300);
    lv_obj_add_event_cb(speech_btn, speech_event_cb, LV_EVENT_ALL, NULL);
    lv_obj_add_style(speech_btn, &style_def, 0);
    lv_obj_add_style(speech_btn, &style_pr, LV_STATE_PRESSED);
```

En el siguiente bloque de código creamos etiquetas de texto para la hora, fecha y saludo del usuario. Estas se inicializan con texto predeterminado, que será cambiado en la función de callback time_timer cada segundo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl-4.png" alt="pir" width="600" height="auto"/></p>

```cpp
    lv_obj_t * name = lv_label_create(panel1);
    lv_label_set_text(name, "Hi there, Username");
    lv_obj_add_style(name, &style_large, 0);

    clock_label = lv_label_create(panel1);
    lv_obj_add_style(clock_label, &style_clock, 0);
    lv_label_set_text(clock_label, timeString);
    lv_label_set_long_mode(clock_label, LV_LABEL_LONG_WRAP);

    lv_obj_t * time_icn = lv_label_create(panel1);
    lv_obj_add_style(time_icn, &style_large, 0);
    lv_label_set_text(time_icn, LV_SYMBOL_BELL);

    date_label = lv_label_create(panel1);
    lv_label_set_text(date_label, dateString);
    lv_obj_add_style(date_label, &style_large, 0);
```

Finalmente, estructuramos los widgets que colocamos en esta pestaña usando el diseño Grid. El diseño Grid es un subconjunto de CSS Flexbox.

Puede organizar elementos en una "tabla" 2D que tiene filas o columnas (pistas). El elemento puede abarcar múltiples columnas o filas. El tamaño de la pista se puede establecer en píxeles, al elemento más grande (```LV_GRID_CONTENT```) o en "Unidad libre" (FR) para distribuir el espacio libre proporcionalmente.

Para hacer que un objeto sea un contenedor de cuadrícula, llama a ```lv_obj_set_layout(obj, LV_LAYOUT_GRID)```.

Ten en cuenta que la función de diseño de cuadrícula de LVGL necesita estar habilitada globalmente con ```LV_USE_GRID``` en ```lv_conf.h```.

Puedes leer sobre los Diseños en LVGL con más detalle siguiendo [este enlace](https://docs.lvgl.io/master/layouts/grid.html).

```cpp
    static lv_coord_t grid_main_col_dsc[] = {LV_GRID_FR(1), LV_GRID_FR(1), LV_GRID_TEMPLATE_LAST};
    static lv_coord_t grid_main_row_dsc[] = {LV_GRID_CONTENT, LV_GRID_CONTENT, LV_GRID_TEMPLATE_LAST};

    /*Create the top panel*/
    static lv_coord_t grid_1_col_dsc[] = {400, 50, LV_GRID_CONTENT, LV_GRID_FR(2), LV_GRID_FR(1), LV_GRID_FR(1), LV_GRID_TEMPLATE_LAST};
    static lv_coord_t grid_1_row_dsc[] = {200, 100, 100, LV_GRID_CONTENT, 10, LV_GRID_CONTENT, LV_GRID_CONTENT, LV_GRID_TEMPLATE_LAST};

    lv_obj_set_grid_dsc_array(parent, grid_main_col_dsc, grid_main_row_dsc);

    lv_obj_set_grid_cell(panel1, LV_GRID_ALIGN_STRETCH, 0, 2, LV_GRID_ALIGN_CENTER, 0, 1);

    lv_obj_set_grid_dsc_array(panel1, grid_1_col_dsc, grid_1_row_dsc);
    lv_obj_set_grid_cell(speech_btn, LV_GRID_ALIGN_CENTER, 0, 1, LV_GRID_ALIGN_CENTER, 0, 5);
    lv_obj_set_grid_cell(name, LV_GRID_ALIGN_START, 2, 2, LV_GRID_ALIGN_CENTER, 0, 1);
    lv_obj_set_grid_cell(clock_label, LV_GRID_ALIGN_STRETCH, 2, 4, LV_GRID_ALIGN_START, 1, 1);
    lv_obj_set_grid_cell(time_icn, LV_GRID_ALIGN_CENTER, 2, 1, LV_GRID_ALIGN_CENTER, 3, 1);
    lv_obj_set_grid_cell(date_label, LV_GRID_ALIGN_START, 3, 1, LV_GRID_ALIGN_CENTER, 3, 1);
```

El resto de las pestañas tienen diferentes widgets, pero el flujo de trabajo general es el mismo. Si necesitas encontrar más información sobre parámetros o uso de un widget específico, consulta la documentación de LVGL.

Para compilar la aplicación, desde la carpeta de tu proyecto (que contiene el archivo fuente main.c)

```bash
mkdir build
cd build.
cmake ..
make -j4
```

El binario estará en ../bin/main, y puede ejecutarse escribiendo ese comando:

```bash
DISPLAY=:0 ./../bin/main
```

Si añades otras carpetas al proyecto, asegúrate de cambiar CMakeLists.txt en consecuencia y volver a ejecutar cmake .. desde el directorio build, de lo contrario te encontrarás con errores de enlazado.

## Recursos

- **[GitHub]** [LVGL](https://lvgl.io/)
- **[Página web]** [Documentación Oficial de LVGL](https://docs.lvgl.io/master/index.html)
- **[GitHub]** [Código Fuente del Simulador de PC](https://github.com/lvgl/lv_sim_eclipse_sdl)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
