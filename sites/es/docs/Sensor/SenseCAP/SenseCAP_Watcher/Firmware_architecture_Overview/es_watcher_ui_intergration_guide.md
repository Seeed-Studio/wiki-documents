---
description: Introduce cómo desarrollar tu propio conjunto de UI para Watcher, con la ayuda de SquareLine Studio y LVGL.
title: Guía de Integración de UI de Watcher
image: https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.webp
slug: /es/watcher_ui_integration_guide
sidebar_position: 4
last_update:
  date: 11/5/2024
  author: Citric
---

# Guía de Integración de UI de Watcher

## 1. **Estructura de Componentes de UI**

En este tutorial, aprenderás cómo integrar tu propio diseño de UI y funciones lógicas relacionadas en el directorio `view`. Todos los diseños de UI y funciones lógicas se colocarán en el directorio `view`, que contiene los subdirectorios `ui` y `ui_manager`. Además, el directorio `view` incluye `view.c`, `view_alarm.c`, `view_image_preview.c`, `view_pages.c`, y los archivos de cabecera `.h` correspondientes. El marco específico se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_framework.png" style={{width:600, height:'auto'}}/></div>

- El subdirectorio `ui` contiene todos los diseños de UI definidos por el usuario. En este proyecto, la `ui` es generada por la herramienta Squareline.

- El subdirectorio `ui_manager` contiene animaciones personalizadas, gestión de grupos de objetos y varias definiciones de callbacks de eventos.

- Los archivos fuente que comienzan con `view` definen páginas globales y funciones de callback de eventos relacionadas.

- La UI interactúa con la capa APP enviando y escuchando eventos.

:::tip
Leer las definiciones de módulos a continuación te ayudará a entender y usar todo el marco de UI. Si quieres comprender rápidamente la integración de UI, puedes saltar al Capítulo 6 para la lectura de aplicaciones.
:::

## 2. **Gestión de Grupos**

### 2.1 Descripción General

SenseCAP Watcher soporta dispositivos de entrada de pantalla táctil y codificador. Para sincronizar estas acciones de dispositivos de entrada y asegurar la corrección, se requiere gestión de grupos para mantener el foco en el objeto correcto y evitar conflictos de eventos.

Las funciones de gestión de grupos se implementan en los siguientes archivos:

- **pm.c**: Contiene implementaciones de funciones.
- **pm.h**: Contiene prototipos de funciones y definiciones de tipos.

### 2.2 Agregar Objetos a un Grupo

```cpp
static void addObjToGroup(GroupInfo *groupInfo, lv_obj_t *objects[], int count);
```

Aquí, `groupInfo` es un puntero a la estructura `GroupInfo` a la cual se añadirán objetos, `objects` es el arreglo de objetos que se añadirán al grupo, y `count` es el número de objetos en el arreglo.

**Uso:**

```cpp
// Define the objects to be added to the page
lv_obj_t *example_objects[] = {example_obj1, example_obj2, ...};
// Add the objects to the group structure variable
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 2.3 Navegación de Páginas y Gestión de Objetos

```cpp
void lv_pm_open_page(lv_group_t *group, 
                      GroupInfo *groupInfo, 
                      pm_operation_t operation, 
                      lv_obj_t **target, 
                      lv_scr_load_anim_t fademode,
                      int spd, 
                      int delay, 
                      void (*target_init)(void));
```

**Parámetros:**

- `group`: Puntero al grupo de LVGL.
- `groupInfo`: Puntero a la estructura `GroupInfo` que contiene objetos de página.
- `operation`: La operación a realizar (agregar objetos al grupo, sin operación, o limpiar grupo).
- `target`: El objeto objetivo de la nueva página.
- `fademode`: Modo de animación de carga de pantalla.
- `spd`: Velocidad de la animación de carga de pantalla.
- `delay`: Retraso antes de que inicie la animación de carga de pantalla.
- `target_init`: Función de inicialización para la pantalla objetivo.

**Uso:**

```cpp
// Add the objects from the structure variable to the group and navigate to the corresponding page
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

### 2.4 Asociar Codificador con Grupo

Crear un grupo, iterar para obtener dispositivos de entrada, y asociar el codificador con el grupo para que el codificador pueda controlar los objetos en el grupo.

```cpp
void lv_pm_init(void)
{
  // Create a group
  g_main = lv_group_create();
  cur_drv = NULL;
  // Loop to get input devices
  while ((cur_drv = lv_indev_get_next(cur_drv)))
  {
    // Associate the encoder with the group when the input device is an encoder
    if (cur_drv->driver->type == LV_INDEV_TYPE_ENCODER)
    {
      lv_indev_set_group(cur_drv, g_main);
      break;
    }
  }
  // Define objects in different GroupInfo structure variables
  initGroup();
}
```

**Uso:**

```cpp
// Call in `view_init` to initialize the group and associate the encoder with the group
int view_init(void)
{
  // Note: Any operations on objects in the lvgl task must be performed within a thread lock!
  lvgl_port_lock(0);
  // Initialize UI
  ui_init();
  // Initialize the group and associate the encoder
  lv_pm_init();
  lvgl_port_unlock();
}
```

### 2.5 Imprimiendo Objetos GroupInfo

```cpp
static void printGroup(GroupInfo *groupInfo);
```

Aquí, `groupInfo` es un puntero a la estructura `GroupInfo` a la cual se añadirán objetos. Ten en cuenta que antes de imprimir, necesitas establecer el `user_data` para los objetos usando `lv_obj_set_user_data(example_obj, "example_obj_print")`.

**Uso:**

```cpp
printGroup(&group_page_example);
```

### 2.6 Ejemplo de Uso

1. Define una variable `GroupInfo`

```cpp
GroupInfo group_page_example;
```

2. Inicializar objetos en `initGroup()`

```cpp
lv_obj_t * example_objects[] = {example_obj1, example_obj2, ...};
```

3. Agregar objetos al grupo

```cpp
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

4. Abrir la página y añadir el grupo

```cpp
lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);
```

Siguiendo estos pasos, puedes asegurar que la entrada de pantalla táctil y codificador funcionen de manera sincronizada y correcta en tu aplicación.

## 3. Alarma del Dispositivo

### 3.1 Descripción General

Esta sección explica cómo integrar y usar los componentes de interfaz de usuario de alarma en tu Watcher. Al entender y usar las siguientes funciones, puedes gestionar el comportamiento de alarma de la interfaz de usuario del dispositivo.

La interfaz de usuario de alarma está implementada en los siguientes archivos:

- **view_alarm.c**: Contiene implementaciones de funciones.
- **view_alarm.h**: Contiene prototipos de funciones y definiciones de tipos.

### 3.2 Inicializando la Interfaz de Usuario de Alarma

```cpp
int view_alarm_init(lv_obj_t *ui_screen);
```

`ui_screen` es un puntero al objeto de pantalla utilizado para mostrar los componentes de la interfaz de usuario de la alarma.

**Uso:**

```cpp
// Create alarm-related UI on the top layer
view_alarm_init(lv_layer_top());
```

### 3.3 Activar la Interfaz de Usuario de Alarma

```cpp
int view_alarm_on(struct tf_module_local_alarm_info *alarm_st);
```

`alarm_st` es un puntero a la estructura `tf_module_local_alarm_info`, que contiene información relacionada con alarmas como la `duración de la alarma`, `si mostrar texto e imágenes`, y `contenido específico del texto e imágenes`.

**Uso:**

```cpp
struct tf_module_local_alarm_info info;
view_alarm_on(&info);
```

### 3.4 Desactivar la Interfaz de Usuario de Alarma

```cpp
void view_alarm_off();
```

**Uso:**

```cpp
// Hide the alarm-related UI, set corresponding flags, or execute page transition logic
view_alarm_off();
```

## 4. Renderizado de Imágenes en Tiempo Real con Inferencia de IA

### 4.1 Descripción General

Esta sección explica cómo decodificar imágenes en el dispositivo y mostrarlas en LVGL.

Esta funcionalidad está implementada en los siguientes archivos:

- **view_image_preview.c**: Contiene las implementaciones de funciones.
- **view_image_preview.h**: Contiene los prototipos de funciones y definiciones de tipos.

### 4.2 Inicialización de la Función de Vista Previa de Imágenes

```cpp
int view_image_preview_init(lv_obj_t *ui_screen);
```

`ui_screen` es un puntero al objeto de pantalla utilizado para mostrar vistas previas en tiempo real. Esta función inicializa el decodificador JPEG, asigna memoria y crea algunos objetos de interfaz de usuario para renderizar los resultados de inferencia de IA, como cuadros de detección de objetivos y nombres de clasificación.

**Uso:**

```cpp
// Create image preview UI on the ViewLive page
view_image_preview_init(ui_Page_ViewLive);
```

### 4.3 Actualizar Imagen de Vista Previa

```cpp
int view_image_preview_flush(struct tf_module_ai_camera_preview_info *p_info);
```

`p_info` es un puntero a la estructura `tf_module_ai_camera_preview_info`, que contiene información de imagen e inferencia del modelo de IA.

**Uso:**

```cpp
struct tf_module_ai_camera_preview_info info;
view_image_preview_flush(&info);
```

## 5. Definición de Eventos de Mensaje de UI

### 5.1 Descripción General

La UI del front-end del dispositivo necesita interactuar con las tareas APP del back-end. Al escuchar y consumir eventos específicos, se pueden realizar varias actualizaciones de UI y lógica de transición de páginas. Para información detallada sobre el manejo de eventos ESP32, consulte la sección `Event Loop Library` en la documentación oficial de Espressif.

El manejo de eventos de mensaje de UI está implementado en los siguientes archivos:

- **view.c**: Contiene implementaciones de funciones.
- **view.h**: Contiene prototipos de funciones y definiciones de tipos.
- **data_defs.h**: Contiene declaraciones de enumeración para varios IDs de eventos (tanto front-end como back-end).

### 5.2 Funciones de Manejo de Eventos de UI

```cpp
esp_err_t esp_event_handler_instance_register_with( esp_event_loop_handle_t event_loop, 
                                                    esp_event_base_t event_base, 
                                                    int32_t event_id, 
                                                    esp_event_handler_t event_handler, 
                                                    void * event_handler_arg, 
                                                    esp_event_handler_instance_t * instance ) 
```

**Parámetros:**

- `event_loop`: Bucle de eventos al cual se registra esta función manejadora; no puede ser NULL.
- `event_base`: ID base del evento para el cual registrar el manejador.
- `event_id`: ID del evento para el cual registrar el manejador.
- `event_handler`: Función manejadora a llamar cuando se despacha el evento.
- `event_handler_arg`: Argumento a pasar a la función manejadora además de los datos del evento.
- `instance`: Objeto de instancia del manejador de eventos asociado con el manejador registrado y los datos; puede ser NULL.

### 5.3 Uso

#### 1. Declarar y Definir Eventos, y Registrar Instancia de Manejador de Eventos de UI a un Bucle Específico

```cpp
// Declaration and definition of VIEW event base
ESP_EVENT_DECLARE_BASE(VIEW_EVENT_BASE);
esp_event_loop_handle_t app_event_loop_handle;
// Declare event IDs as an enumeration; in the SenseCAP-Watcher project, this is placed in data_defs.h
enum {
    VIEW_EVENT_EXAMPLE
}
// Register instance
ESP_ERROR_CHECK(esp_event_handler_instance_register_with(app_event_loop_handle, 
                                                            VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, 
                                                            __view_event_handler, NULL, NULL));
```

#### 2. Manejo de Eventos de Mensajes de UI

```cpp
static void __view_event_handler(void* handler_args, esp_event_base_t base, int32_t id, void* event_data)
{
  // Acquire lvgl thread lock
  lvgl_port_lock(0);
  if (base == VIEW_EVENT_BASE) {
    switch (id) {
      // Custom event
      case VIEW_EVENT_EXAMPLE: {
        ESP_LOGI("ui_event", "VIEW_EVENT_EXAMPLE");
        // Execute corresponding logic based on the received event
        break;
      }
    }
  }
  // Release lvgl thread lock
  lvgl_port_unlock();
}
```

#### 3. Enviando Eventos de Mensaje de UI

```cpp
// Send event to trigger corresponding logic
esp_event_post_to(app_event_loop_handle, VIEW_EVENT_BASE, VIEW_EVENT_EXAMPLE, NULL, 0, pdMS_TO_TICKS(10000));
```

## 6. Aplicación

Ahora integraremos un ejemplo de interfaz de usuario simple en el dispositivo SenseCAP Watcher utilizando las funciones introducidas anteriormente. Esto involucrará el uso de Squareline para el diseño de la interfaz de usuario, la definición de eventos de callback de la interfaz, la gestión de grupos de objetos, y más.

### 6.1 Creación de Objetos de Interfaz de Usuario y Funciones de Callback en Squareline

Crea botones en Squareline, establece sus nombres y estilos, y asigna funciones de callback a cada botón. Haz clic en `ADD EVENT` en la sección `Events`, elige el tipo de disparador para el evento, y nombra la función de callback. Esto completa la creación de objetos de interfaz de usuario y sus funciones de callback relacionadas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img1.png" style={{width:800, height:'auto'}}/></div>

### 6.2 Exportación del Proyecto `ui` desde Squareline

En la aplicación, elige `File` -> `Project Settings` en la barra de navegación, y establece la `UI Files Export Path` a `project_path/ui`, donde `project_path` es la ruta al proyecto de Squareline. Esto establece la ruta de exportación para el diseño de la interfaz de usuario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img2.png" style={{width:600, height:'auto'}}/></div>

A continuación, haz clic en `Export` -> `Export UI Files` en la barra de navegación para exportar una carpeta de directorio que contiene todos los diseños de interfaz de usuario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img3.png" style={{width:500, height:'auto'}}/></div>

### 6.3 Implementación de Funciones de Callback Declaradas en Archivos de Cabecera

Importa la carpeta `ui` al proyecto SenseCAP Watcher, abre y consulta las funciones declaradas en `ui_events.h` de la carpeta `ui`, e implementa estas funciones en `ui_events.c` de la carpeta `ui_manager` para completar la lógica de estas funciones de callback.

Por ejemplo, en `ui_events.h`:

```cpp
void btn1click_cb(lv_event_t * e);
void btn2click_cb(lv_event_t * e);
void btn3click_cb(lv_event_t * e);
```

Y el código será así en `ui_events.c`:

```cpp
void btn1click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn1click_cb");
    // Define the logic for this object when the clicked event is triggered
}

void btn2click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn2click_cb");
    // Define the logic for this object when the clicked event is triggered
}

void btn3click_cb(lv_event_t * e)
{
    ESP_LOGI("ui_example", "btn3click_cb");
    // Define the logic for this object when the clicked event is triggered
}
```

### 6.4 Añadiendo Objetos a Variables de Estructura

En este paso, necesitamos gestionar el codificador y el grupo creado. Añadir y eliminar objetos hacia y desde el grupo permitirá al codificador controlar los objetos.

```cpp
// Define a GroupInfo variable
GroupInfo group_page_example;
// Initialize objects in initGroup()
lv_obj_t * example_objects[] = {ui_Button1, ui_Button2, ui_Button3};
// Add objects to the structure variable to facilitate adding objects to the group in different pages
addObjToGroup(&group_page_example, example_objects, sizeof(example_objects) / sizeof(example_objects[0]));
```

### 6.5 Inicialización de la UI

En `view_init` en `view.c`, llama a `ui_init` para inicializar la UI. De esta manera, cuando el hilo de la tarea lvgl se ejecute, puede cargar la UI diseñada. La página cargada por defecto es la primera página diseñada en Squareline.

```cpp
int view_init(void)
{
  // Note: Any operations on objects in the lvgl task must be performed within a thread lock!
  lvgl_port_lock(0);

  ui_init();
  lv_pm_init();
  // There are two ways to add objects to the group
  // First: Clear the objects in the group and add them to the group one by one
  lv_group_remove_all_objs(g_example);
  lv_group_add_obj(ui_Button1);
  lv_group_add_obj(ui_Button2);
  lv_group_add_obj(ui_Button3);

  // Second: Add the corresponding objects to the group through the page transition function:
  lv_pm_open_page(g_example, &group_page_example, PM_ADD_OBJS_TO_GROUP, &ui_Page_Example, LV_SCR_LOAD_ANIM_NONE, 0, 0, &ui_Page_Example_screen_init);

  lvgl_port_unlock();

  // Other initialization code
}
```

### 6.6 Visualización del Efecto de Ejecución

Ahora hemos implementado simplemente la integración de UI en el proyecto. A continuación, podemos compilar y grabar el código en el Watcher para ver el efecto de ejecución!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img4.png" style={{width:500, height:'auto'}}/></div>

Como se muestra arriba, al hacer clic en los botones de la página usando la pantalla táctil o la rueda, puedes ver los objetos correspondientes activando eventos de callback en el asistente de depuración serial, indicando que las funciones de callback están funcionando exitosamente!

## 7. Proyecto SquareLine

La mayoría de las páginas en el SenseCAP-Watcher se crean usando Squareline. La herramienta Squareline permite modificaciones de estilo fáciles y rápidas de varios objetos de página en el Watcher. Por lo tanto, se recomienda encarecidamente usar Squareline para el desarrollo e iteración de UI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_software_framework/ui_img5.png" style={{width:800, height:'auto'}}/></div>

Como se muestra en la imagen arriba, las páginas en la herramienta están organizadas según la lógica de navegación. Las páginas adyacentes pueden navegarse a través de botones u otros objetos activables. Puedes hacer clic en la página y objetos correspondientes para ver eventos definidos, haciendo muy simple modificar los estilos de diferentes páginas y objetos, ¡personalizando tu asistente de IA! Sin embargo, ten en cuenta que los objetos y eventos de callback definidos en las páginas actuales están vinculados a las funciones de la capa APP del Watcher. Modificarlos puede afectar la operación normal del Watcher. Se recomienda solo modificar los estilos de los objetos, como color y tamaño, para asegurar la funcionalidad normal del Watcher.

## 8. Descripción de Archivos

- La carpeta [`ui_intergration_demo\SenseCAP-Watcher_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/SenseCAP-Watcher_example) contiene el proyecto completo de Squareline para el SenseCAP-Watcher, incluyendo casi todos los diseños de recursos de UI.

- La carpeta [`ui_intergration_demo\ui_intergration_example`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/ui_intergration_example) contiene el proyecto de Squareline para el ejemplo en el capítulo de Aplicación.

- La carpeta [`ui_intergration_demo\view`](https://github.com/Seeed-Studio/SenseCAP-Watcher-Firmware/tree/factory_fw/examples/factory_firmware/docs/ui_intergration_demo/view) contiene el componente `view` para el ejemplo en el capítulo de Aplicación. Puedes usar el ejemplo reemplazando directamente el `view` original en el proyecto.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
