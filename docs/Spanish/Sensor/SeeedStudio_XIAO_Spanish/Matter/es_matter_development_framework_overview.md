---
description: The code of light is used as an example to introduce the development framework of Matter.
title: Resumen del Framework de Matter
keywords:
- matter
- XIAO
- light
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/matter_development_framework
last_update:
  date: 01/29/2025
  author: Guillermo
---

# Resumen del Framework de Matter

:::tip
Este artículo es el cuarto tutorial de la serie de desarrollo de Matter con XIAO ESP32 de Seeed Studio. Si aún no has leído los tutoriales anteriores, te recomendamos que los leas primero para asegurarte de que tu dispositivo esté configurado correctamente y cumpla con los requisitos necesarios.

- **[Utilizando ESP-IDF de Espressif con XIAO](https://wiki.seeedstudio.com/xiao_idf)**
- **[Comenzando con Matter en XIAO ESP32](https://wiki.seeedstudio.com/getting_started_with_matter_spanish)**
- **[Desarrollo de Matter con la serie XIAO ESP32](https://wiki.seeedstudio.com/xiao_esp32_matter_env/)**
:::

Embárcate en un viaje iluminador al mundo del desarrollo de Matter con nuestro tutorial integral. A través de este ejemplo esencial, aclararemos los conceptos y conocimientos fundamentales que forman la base del desarrollo de Matter. Desde clústeres y atributos hasta comandos y más allá, este tutorial te proporcionará las herramientas necesarias para navegar por el marco de trabajo de Matter con confianza. ¡Prepárate para encender tus habilidades de desarrollo de Matter y sumérgete en el brillante mundo de los dispositivos conectados!

## Esquema del tutorial

1. **[Entendiendo el ejemplo de luz](#understanding-the-light-example)**
2. **[Inicialización del dispositivo](#device-initialisation)**
3. **[Crear nodo Matter](#create-matter-node)**
4. **[Configurar el atributo del punto final](#sets-the-attribute-of-the-endpoint)**
5. **[Crear punto final y emparejar automáticamente con el clúster](#create-endpoint--auto-match-cluster)**
6. **[Configurar el dispositivo Matter por primera vez con valores predeterminados](#setting-up-the-matter-device-for-the-first-time-with-default-values)**
7. **[Actualizaciones de datos y persistencia diferida](#data-updates-and-deferred-persistence)**

En esta sección, nos centraremos en el ejemplo de [luz](https://github.com/espressif/esp-matter/tree/main/examples/light) proporcionado por ESP-Matter, que describe en detalle los conceptos básicos de clústeres, atributos y comandos en el marco de desarrollo Matter. Al leer este artículo, podrás obtener una mejor comprensión de la estructura y el conocimiento del marco de desarrollo Matter.

## Entendiendo el Ejemplo de Luz

Primero, echemos un vistazo a los directorios de archivos en el entorno de ESP-Matter y su función:

```
- esp-matter/
   - components/
      - esp_matter
      - esp_matter_bridge
      - esp_matter_console
      - esp_matter_controller
      - esp_matter_rainmaker
      - esp_matter_thread_br
   - connectedhomeip/
   - device_hal/
      - button_driver
      - device
      - led_driver
   - docs/
   - examples/
   - tools/
      - mfg_tool
   CMakeLists.txt
   RELEASE_NOTES.md
   export.sh
   install.sh
   requirements.txt
   ...
```

**esp-matter**: Este es el directorio raíz de todo el marco de desarrollo de Matter.

**componentes**: Este directorio contiene varios componentes y es el núcleo del marco de trabajo Matter.
   - esp_matter: Esta es la implementación del protocolo Matter en ESP32, que incluye el modelo de datos, la lógica de la capa de aplicación, etc.
   - esp_matter_bridge: Este componente es responsable de conectar dispositivos ESP con otros dispositivos no ESP, logrando interoperabilidad.
   - esp_matter_console: Esta es una consola interactiva basada en REPL, utilizada para depurar y controlar dispositivos Matter.
   - esp_matter_controller: Este componente implementa la funcionalidad de un controlador Matter, capaz de controlar otros dispositivos Matter.
   - esp_matter_rainmaker: Este componente se integra con la plataforma en la nube RainMaker de Espressif, permitiendo el control en la nube.
   - esp_matter_thread_br: Este componente implementa la funcionalidad de un Router Frontera Thread, utilizado para crear redes Thread.

**connectedhomeip**: Este es el proyecto de código abierto original de la pila de protocolos Matter, desde el cual ESP Matter sincroniza su código.

**device_hal**: Este directorio contiene los controladores de la capa de abstracción de hardware.
   - button_driver: Controlador de botón.
   - device: Abstracción de dispositivo, que define interfaces genéricas de dispositivos.
   - led_driver: Controlador de LED.

**docs**: Aquí es donde se almacenan los documentos de desarrollo de ESP-Matter y los manuales de referencia de la API.

**examples**: Varios ejemplos de código que demuestran cómo usar el marco de trabajo Matter para el desarrollo.

**tools**: Contiene varios scripts de herramientas de desarrollo.
   - mfg_tool: Herramienta para generar certificados de fabricante.

**CMakeLists.txt**: Script de compilación CMake, que define las reglas de compilación para el proyecto.

**RELEASE_NOTES.md**: Notas de la versión, que registran los cambios en cada versión.

**export.sh**: Script de exportación, utilizado para exportar variables de entorno relacionadas con Matter.

**install.sh**: Script de instalación, utilizado para instalar las dependencias y cadenas de herramientas necesarias para el desarrollo de Matter.

**requirements.txt**: Lista de dependencias de Python, que especifica las bibliotecas de Python necesarias para ejecutar el marco de desarrollo de Matter.

Esta estructura de directorio refleja la filosofía de diseño modular del marco de desarrollo Matter. La pila de protocolos central, la abstracción de hardware, los componentes de la aplicación, las herramientas auxiliares y otras partes tienen responsabilidades propias, pero están combinadas de manera orgánica, proporcionando a los desarrolladores un entorno completo para el desarrollo de Matter.

Tomando **examples/light** como ejemplo, la estructura del ejemplo proporcionado por ESP-Matter es la siguiente:

```
- light/
   - main/
      - CMakeLists.txt
      - app_driver.cpp
      - app_main.cpp
      - app_priv.h
      - idf_components.yml
   CMakeLists.txt
   README.md
   partitions.csv
   sdkconfig.defaults
   ...
```

- **main**: Este subdirectorio contiene el código principal de la aplicación y los archivos de configuración.
   - CMakeLists.txt: El script de compilación CMake para la aplicación principal.
   - app_driver.cpp: El código del controlador para la aplicación de luz.
   - app_main.cpp: El punto de entrada principal de la aplicación de luz.
   - app_priv.h: Un archivo de cabecera que contiene las declaraciones privadas para la aplicación de luz.
   - idf_components.yml: Un archivo de configuración para los componentes ESP-IDF utilizados en la aplicación de luz.

- **CMakeLists.txt**: El script de compilación CMake de nivel superior para el ejemplo de luz.

- **README.md**: Un archivo readme que proporciona información e instrucciones para el ejemplo de luz.

- **partitions.csv**: Un archivo que define la tabla de particiones para el ejemplo de luz.

- **sdkconfig.defaults**: Configuraciones predeterminadas para el ejemplo de luz.

## Inicialización de Dispositivos

A continuación, entramos en el código de luz para profundizar en nuestra comprensión del proceso de desarrollo de Matter mediante una combinación de análisis de código y teoría. El siguiente código está en [manin/app_main.cpp](https://github.com/espressif/esp-matter/blob/main/examples/light/main/app_main.cpp).

```cpp
app_driver_handle_t light_handle = app_driver_light_init();
app_driver_handle_t button_handle = app_driver_button_init();
app_reset_button_register(button_handle);
```

`app_driver_handle_t light_handle = app_driver_light_init();`: Esta línea inicializa el controlador de luz y devuelve un identificador para la instancia del controlador de luz.

`app_driver_handle_t button_handle = app_driver_button_init();`: Similar a la inicialización de la luz, esta línea inicializa el controlador del botón.

`app_reset_button_register(button_handle);`: Esta línea registra el botón para una funcionalidad específica, para manejar operaciones de reinicio.

Tomando como ejemplo la función `app_driver_light_init()`, el siguiente programa inicializa todas las bombillas, pero solo usa la primera (configurada con los valores predeterminados de color y brillo). Esta es también la razón por la cual el programa de ejemplo solo puede usar una bombilla.

```cpp
// app_driver.cpp
app_driver_handle_t app_driver_light_init()
{
#if CONFIG_BSP_LEDS_NUM > 0
    /* Inicializar led */
    led_indicator_handle_t leds[CONFIG_BSP_LEDS_NUM];
    ESP_ERROR_CHECK(bsp_led_indicator_create(leds, NULL, CONFIG_BSP_LEDS_NUM));
    led_indicator_set_hsv(leds[0], SET_HSV(DEFAULT_HUE, DEFAULT_SATURATION, DEFAULT_BRIGHTNESS));
    
    return (app_driver_handle_t)leds[0];
#else
    return NULL;
#endif
}
```

## Crear un Nodo Matter

El siguiente paso en la línea principal de código para la configuración de un dispositivo Matter es crear un Nodo Matter. El código es el siguiente:

```cpp
node::config_t node_config;

// node handle se puede utilizar para agregar/modificar otros puntos finales.
node_t *node = node::create(&node_config, app_attribute_update_cb, app_identification_cb);
ABORT_APP_ON_FAILURE(node != nullptr, ESP_LOGE(TAG, "Failed to create Matter node"));
```

El modelo de datos de Matter es una forma estandarizada de representar y organizar los datos dentro del ecosistema de Matter. Define un lenguaje y una estructura comunes para los dispositivos, atributos e interacciones, lo que permite la interoperabilidad y la comunicación fluida entre dispositivos compatibles con Matter.

El siguiente diagrama muestra una vista simplificada de cómo se puede representar esto en el modelo de datos de Matter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/34.png" style={{width:600, height:'auto'}}/></div>

**Nodo Matter**:
Un Nodo Matter representa un dispositivo físico o una entidad lógica dentro del ecosistema Matter. Es el componente de nivel superior del modelo de datos de Matter. Cada Nodo Matter tiene un identificador único y puede contener uno o más Puntos Finales.
   - Un Nodo Matter representa **un dispositivo físico** en el ecosistema Matter.
   - Es como una casa que puede contener varios Puntos Finales (habitaciones).
   - Cada Nodo Matter tiene su propio identificador único para el reconocimiento y direccionamiento dentro de la red.

## Establece el Atributo del Punto Final

Una vez que se ha creado el Nodo Matter, es necesario establecer valores predeterminados para las propiedades de los Puntos Finales.

```cpp
extended_color_light::config_t light_config;
light_config.on_off.on_off = DEFAULT_POWER;
light_config.on_off.lighting.start_up_on_off = nullptr;
light_config.level_control.current_level = DEFAULT_BRIGHTNESS;
light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;
light_config.color_control.color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;
light_config.color_control.enhanced_color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;
light_config.color_control.color_temperature.startup_color_temperature_mireds = nullptr;
```

1. `light_config.on_off.on_off = DEFAULT_POWER;`
   - Establece el estado inicial de encendido/apagado del punto final a `DEFAULT_POWER`.
   - `DEFAULT_POWER` es una constante predefinida que representa el estado de potencia predeterminado (por ejemplo, `true` para encendido, `false` para apagado).

2. `light_config.on_off.lighting.start_up_on_off = nullptr;`
   - Establece el estado de encendido/apagado al inicio del punto final a `nullptr`.
   - Cuando el dispositivo se reinicia o pasa por un ciclo de encendido, si este valor es `nullptr`, significa que se debe usar el último estado de encendido/apagado.
   - Si se establece en un valor diferente de `nullptr`, indica que se debe usar el estado de encendido/apagado especificado.

3. `light_config.level_control.current_level = DEFAULT_BRIGHTNESS;`
   - Establece el nivel de brillo inicial del punto final a `DEFAULT_BRIGHTNESS` (64).
   - `DEFAULT_BRIGHTNESS` es una constante predefinida que representa el nivel de brillo predeterminado (por ejemplo, un valor entre 0 y 254).

4. `light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;`
   - Establece el nivel de brillo al inicio del punto final a `DEFAULT_BRIGHTNESS` (64).
   - Cuando el dispositivo se reinicia o pasa por un ciclo de encendido, si este valor no es `nullptr`, significa que se debe usar el nivel de brillo especificado.
   - Si se establece en `nullptr`, indica que se debe usar el último nivel de brillo.

5. `light_config.color_control.color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;`
   - Establece el modo de color del punto final a `ColorControl::ColorMode::kColorTemperature`.
   - Esto significa que el punto final usa el modo de temperatura de color, donde el color de la luz se controla ajustando la temperatura de color.
   - `(uint8_t)` es una conversión de tipo que convierte el valor del enum a un entero sin signo de 8 bits.

6. `light_config.color_control.enhanced_color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;`
   - Establece el modo de color mejorado del punto final a `ColorControl::ColorMode::kColorTemperature`.
   - El modo de color mejorado proporciona más opciones de control de color, pero aquí también se establece en modo de temperatura de color.

7. `light_config.color_control.color_temperature.startup_color_temperature_mireds = nullptr;`
   - Establece la temperatura de color al inicio del punto final a `nullptr`.
   - Cuando el dispositivo se reinicia o pasa por un ciclo de encendido, si este valor es `nullptr`, significa que se debe usar la última configuración de temperatura de color.
   - Si se establece en un valor diferente de `nullptr`, indica que se debe usar el valor de temperatura de color especificado.

Los atributos en Matter son como propiedades o características de un dispositivo. Almacenan información sobre el estado del dispositivo, como si está encendido o apagado, su nivel de brillo o su temperatura de color. Estos atributos están organizados en grupos llamados Clusters, los cuales están relacionados con funciones específicas del dispositivo.

Los atributos facilitan la comunicación y colaboración entre diferentes dispositivos y aplicaciones. Al tener una forma estándar de representar y acceder a las propiedades de los dispositivos, Matter simplifica el desarrollo de sistemas de hogar inteligente y asegura que los dispositivos de varias marcas puedan interactuar entre sí de manera eficiente.

`esp_matter_endpoint.h` es un archivo de cabecera importante en el ESP Matter SDK que define constantes, tipos de datos y funciones relacionadas con los puntos finales. En Matter, los puntos finales representan las interfaces lógicas de un dispositivo, y cada punto final contiene un conjunto de atributos y comandos que describen y controlan funcionalidades específicas del dispositivo.

```cpp
namespace extended_color_light {
typedef struct config {
    cluster::descriptor::config_t descriptor;
    cluster::identify::config_t identify;
    cluster::groups::config_t groups;
    cluster::scenes_management::config_t scenes_management;
    cluster::on_off::config_t on_off;
    cluster::level_control::config_t level_control;
    cluster::color_control::config_t color_control;
} config_t;

uint32_t get_device_type_id();
uint8_t get_device_type_version();
endpoint_t *create(node_t *node, config_t *config, uint8_t flags, void *priv_data);
esp_err_t add(endpoint_t *endpoint, config_t *config);
} /* extended_color_light */
```

## Crear Punto Final y Coincidencia Automática de Clúster

En lo anterior, mencionamos dos términos importantes en Matter: Puntos Finales y Clústeres.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/35.png" style={{width:500, height:'auto'}}/></div>

**Punto(s) Final(es) [Tipo(s) de Dispositivo]**:
Un Punto Final es una representación lógica de una funcionalidad o servicio específico dentro de un Nodo Matter. Encapsula un conjunto de capacidades y comportamientos relacionados con un tipo de dispositivo particular. Un Nodo Matter puede tener múltiples Puntos Finales, cada uno representando un tipo de dispositivo diferente. Los Tipo(s) de Dispositivo definen las características y funcionalidades específicas de un Punto Final. Matter define un conjunto de tipos de dispositivos estándar, como bombillas, termostatos, cerraduras de puertas y más. Cada tipo de dispositivo tiene un identificador único y un conjunto predefinido de clústeres, atributos y comandos asociados.

- Un Punto Final es un componente lógico dentro de un Nodo Matter, que representa una funcionalidad o servicio específico del dispositivo.
- Al igual que las habitaciones en una casa, cada Punto Final tiene un propósito dedicado, como un dormitorio, cocina o sala de estar.
- Cada Punto Final está asociado con un tipo de dispositivo específico, como una bombilla, termostato o cerradura de puerta.
- Un Nodo Matter puede tener múltiples Puntos Finales, cada uno representando un tipo de dispositivo y funcionalidad diferente.

**Cluster(s)**:
Los Clústeres son agrupaciones lógicas de atributos y comandos relacionados dentro de un Punto Final. Representan una funcionalidad o característica específica de un dispositivo. Los Clústeres proporcionan una manera de organizar y categorizar las capacidades de un Punto Final. Por ejemplo, el "Clúster On/Off" contiene atributos y comandos relacionados con el encendido o apagado de un dispositivo, mientras que el "Clúster de Control de Nivel" se encarga de controlar el brillo o el nivel de un dispositivo.

- Un Clúster es una agrupación lógica dentro de un Punto Final, que contiene atributos y comandos relacionados.
- Es como el mobiliario o los dispositivos en una habitación, como luces, televisores o aire acondicionados, cada uno con sus propios atributos y operaciones.
- Cada Clúster representa una funcionalidad o característica específica del dispositivo.
- Por ejemplo, el "Clúster On/Off" contiene atributos y comandos relacionados con el estado de encendido/apagado del dispositivo, mientras que el "Clúster de Control de Nivel" contiene atributos y comandos para ajustar el brillo o el nivel del dispositivo.
- Un Punto Final puede tener múltiples Clústeres, cada uno responsable de diferentes funcionalidades.

En resumen, un Nodo Matter es como una casa, que contiene múltiples Puntos Finales (habitaciones). Cada Punto Final es como una habitación, representando una funcionalidad o servicio específico del dispositivo. Los Clústeres son como el mobiliario o los dispositivos en cada habitación, que contienen atributos y comandos relacionados para el control e interacción.

Esta organización jerárquica permite que los dispositivos describan claramente sus funcionalidades y características, facilitando la interacción y control por parte de aplicaciones y otros dispositivos. Al estandarizar los tipos de dispositivos, Clústeres, atributos y comandos, Matter habilita la interoperabilidad y compatibilidad entre dispositivos de diferentes fabricantes.

En el código, después de establecer los Atributos, un Punto Final se crea finalmente con el siguiente fragmento de código. Y automáticamente coincide con el Clúster del atributo configurado.

```cpp
endpoint_t *endpoint = extended_color_light::create(node, &light_config, ENDPOINT_FLAG_NONE, light_handle);
ABORT_APP_ON_FAILURE(endpoint != nullptr, ESP_LOGE(TAG, "Failed to create extended color light endpoint"));
```

¿Cómo se logra la agrupación automática de clústeres? Tomemos un ejemplo de un fragmento de código que establece un atributo.

```cpp
light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;
```

`light_config.level_control` es un atributo definido en el Endpoint (esp_matter_endpoint.h). Y `light_config.level_control.lighting` es un atributo definido en el Clúster (esp_matter_cluster). Con esta configuración, el sistema puede asignar automáticamente el clúster correspondiente al atributo sin necesidad de que los desarrolladores lo configuren manualmente.

## Configuración del dispositivo Matter por primera vez con valores predeterminados

Una vez que los atributos, clústeres y puntos finales mencionados anteriormente han sido configurados, podemos comenzar a iniciar el dispositivo Matter. Los pasos y la metodología para el inicio son los siguientes.

```cpp
light_endpoint_id = endpoint::get_id(endpoint);
ESP_LOGI(TAG, "Light created with endpoint_id %d", light_endpoint_id);

/* Iniciar Matter */
err = esp_matter::start(app_event_cb);
ABORT_APP_ON_FAILURE(err == ESP_OK, ESP_LOGE(TAG, "Failed to start Matter, err:%d", err));

/* Iniciando el controlador con valores predeterminados. */
app_driver_light_set_defaults(light_endpoint_id);
```

Como se puede ver, la función para establecer los valores predeterminados es `app_driver_light_set_defaults()`, y debemos pasar un ID de punto final como parámetro. Además, necesitamos preocuparnos por cómo obtener el valor de un clúster específico, un atributo determinado, y cómo establecer el valor predeterminado de un clúster o atributo. Los secretos están mostrados en el archivo `app_driver.cpp`.

```cpp
esp_err_t err = ESP_OK;
void *priv_data = endpoint::get_priv_data(endpoint_id);
led_indicator_handle_t handle = (led_indicator_handle_t)priv_data;
node_t *node = node::get();
endpoint_t *endpoint = endpoint::get(node, endpoint_id);
cluster_t *cluster = NULL;
attribute_t *attribute = NULL;
esp_matter_attr_val_t val = esp_matter_invalid(NULL);

/* Ajustando brillo */
cluster = cluster::get(endpoint, LevelControl::Id);
attribute = attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id);
attribute::get_val(attribute, &val);
err |= app_driver_light_set_brightness(handle, &val);
```

1. **Obtener un Clúster:**
   - Para obtener un clúster, primero necesitas obtener un puntero al punto final utilizando la función `endpoint::get(node, endpoint_id)`, donde `node` es un puntero al nodo y `endpoint_id` es el ID del punto final.
   - Una vez que tienes el puntero al punto final, puedes obtener un puntero al clúster deseado utilizando la función `cluster::get(endpoint, LevelControl::Id)`, especificando el punto final y el ID del clúster (`LevelControl::Id` en este caso).

2. **Obtener un Atributo Específico:**
   - Después de obtener el puntero al clúster, puedes obtener un puntero a un atributo específico dentro de ese clúster utilizando la función `attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id)`.
   - En este ejemplo, estamos recuperando el atributo `CurrentLevel` del clúster `LevelControl`.

3. **Recuperar el Valor del Atributo:**
   - Para recuperar el valor actual de un atributo, necesitas declarar una variable de tipo `esp_matter_attr_val_t` para almacenar el valor del atributo.
   - En el fragmento de código, la variable `val` se inicializa con `esp_matter_invalid(NULL)`.
   - Luego, puedes usar la función `attribute::get_val(attribute, &val)` para obtener el valor actual del atributo y almacenarlo en la variable `val`.

4. **Configurar el Brillo de una Luz:**
   - Para configurar el brillo de una luz, necesitas tener un manejador del indicador LED asociado con el punto final.
   - En el fragmento de código, el manejador del indicador LED se obtiene convirtiendo el puntero de datos privados (`priv_data`) al tipo adecuado (`led_indicator_handle_t`).
   - Finalmente, puedes llamar a la función `app_driver_light_set_brightness(handle, &val)` para configurar el brillo del indicador LED.
   - El parámetro `handle` es el manejador del indicador LED, y `&val` es un puntero a la variable `esp_matter_attr_val_t` que contiene el valor de brillo deseado.

### Resumen de los pasos:
1. Obtén el puntero al punto final usando `endpoint::get(node, endpoint_id)`.
2. Obtén el puntero al clúster usando `cluster::get(endpoint, LevelControl::Id)`.
3. Obtén el puntero al atributo usando `attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id)`.
4. Recupera el valor actual del atributo usando `attribute::get_val(attribute, &val)`.
5. Configura el brillo de la luz usando `app_driver_light_set_brightness(handle, &val)`, donde `handle` es el manejador del indicador LED asociado con el punto final.

Siguiendo estos pasos, podrás obtener los punteros necesarios al clúster y atributo, recuperar el valor actual del atributo y configurar el brillo de la luz en consecuencia.


## Actualizaciones de Datos y Persistencia Diferida

En el código de `app_driver.cpp`, los valores de los atributos se actualizan utilizando la función `app_driver_attribute_update()`.

```cpp
if (endpoint_id == light_endpoint_id) {
   led_indicator_handle_t handle = (led_indicator_handle_t)driver_handle;
   if (cluster_id == OnOff::Id) {
      if (attribute_id == OnOff::Attributes::OnOff::Id) {
            err = app_driver_light_set_power(handle, val);
      }
   } else if (cluster_id == LevelControl::Id) {
      if (attribute_id == LevelControl::Attributes::CurrentLevel::Id) {
            err = app_driver_light_set_brightness(handle, val);
      }
   } else if (cluster_id == ColorControl::Id) {
      if (attribute_id == ColorControl::Attributes::CurrentHue::Id) {
            err = app_driver_light_set_hue(handle, val);
      } else if (attribute_id == ColorControl::Attributes::CurrentSaturation::Id) {
            err = app_driver_light_set_saturation(handle, val);
      } else if (attribute_id == ColorControl::Attributes::ColorTemperatureMireds::Id) {
            err = app_driver_light_set_temperature(handle, val);
      }
   }
}
```

El fragmento de código define una función llamada `app_driver_attribute_update` que toma varios parámetros, incluyendo el controlador del driver (`driver_handle`), el ID del endpoint (`endpoint_id`), el ID del cluster (`cluster_id`), el ID del atributo (`attribute_id`), y un puntero al valor del atributo (`val`).

El propósito de esta función es actualizar los valores de los atributos de un endpoint de luz según los datos recibidos. Sigue una lógica específica para determinar qué atributo del endpoint de luz debe actualizarse.

Aquí hay un desglose paso a paso de la lógica de actualización de datos:

1. La función primero verifica si el `endpoint_id` coincide con el `light_endpoint_id`. Esto asegura que la actualización esté destinada al endpoint de luz.

2. Si el `endpoint_id` coincide, la función convierte el `driver_handle` al tipo adecuado (`led_indicator_handle_t`) para obtener el controlador del indicador LED asociado con el endpoint de luz.

3. Luego, la función verifica el `cluster_id` para determinar a qué cluster pertenece el atributo. Soporta tres clusters: `OnOff`, `LevelControl` y `ColorControl`.

4. Dependiendo del `cluster_id`, la función verifica el `attribute_id` para identificar el atributo específico dentro de ese cluster.

5. Según el `cluster_id` y el `attribute_id`, la función llama a la función setter correspondiente para actualizar el valor del atributo:
   - Si el `cluster_id` es `OnOff::Id` y el `attribute_id` es `OnOff::Attributes::OnOff::Id`, llama a `app_driver_light_set_power(handle, val)` para establecer el estado de encendido/apagado de la luz.
   - Si el `cluster_id` es `LevelControl::Id` y el `attribute_id` es `LevelControl::Attributes::CurrentLevel::Id`, llama a `app_driver_light_set_brightness(handle, val)` para establecer el nivel de brillo de la luz.
   - Si el `cluster_id` es `ColorControl::Id`, verifica el `attribute_id` más a fondo:
     - Si el `attribute_id` es `ColorControl::Attributes::CurrentHue::Id`, llama a `app_driver_light_set_hue(handle, val)` para establecer el tono de la luz.
     - Si el `attribute_id` es `ColorControl::Attributes::CurrentSaturation::Id`, llama a `app_driver_light_set_saturation(handle, val)` para establecer la saturación de la luz.
     - Si el `attribute_id` es `ColorControl::Attributes::ColorTemperatureMireds::Id`, llama a `app_driver_light_set_temperature(handle, val)` para establecer la temperatura del color de la luz.

En general, esta función actúa como un punto central para actualizar los valores de los atributos de un endpoint de luz. Recibe la información necesaria (ID de endpoint, ID de cluster, ID de atributo y valor del atributo) y despacha la actualización a la función setter adecuada según los IDs de cluster y atributo.

Al organizar la lógica de esta manera, el código se vuelve más modular y fácil de mantener. Permite actualizar diferentes atributos del endpoint de luz (estado de encendido, brillo, tono, saturación, temperatura de color) mediante una sola función, simplificando el proceso de actualización de las características de la luz en función de los datos recibidos.

Sin embargo, no todos los atributos se actualizan en tiempo real. El código que marca aquellos atributos que probablemente cambien con frecuencia, como la persistencia diferida, puede mejorar el rendimiento, reducir la cantidad de escrituras en la memoria no volátil y extender la vida útil del dispositivo.

```cpp
/* Marca la persistencia diferida para algunos atributos que podrían cambiar rápidamente. */
cluster_t *level_control_cluster = cluster::get(endpoint, LevelControl::Id);
attribute_t *current_level_attribute = attribute::get(level_control_cluster, LevelControl::Attributes::CurrentLevel::Id);
attribute::set_deferred_persistence(current_level_attribute);

cluster_t *color_control_cluster = cluster::get(endpoint, ColorControl::Id);
attribute_t *current_x_attribute = attribute::get(color_control_cluster, ColorControl::Attributes::CurrentX::Id);
attribute::set_deferred_persistence(current_x_attribute);
```

## Definir tu propio modelo de datos

Esta sección demuestra cómo crear endpoints, clusters, atributos y comandos estándar que están definidos en la especificación de Matter.

#### Endpoints

El dispositivo puede ser personalizado editando el *endpoint/device_type* creado en el archivo *app_main.cpp* del ejemplo. Ejemplos:

- on_off_light (encendido/apagado luz):

```cpp
   on_off_light::config_t light_config;
   endpoint_t *endpoint = on_off_light::create(node, &light_config, ENDPOINT_FLAG_NONE);
```

-  temperature_sensor (sensor de temperatura):

```cpp
    esp_matter::endpoint::temperature_sensor::config_t temperature_sensor_config;
    endpoint_t *endpoint = temperature_sensor::create(node, &temperature_sensor_config, ENDPOINT_FLAG_NONE, NULL);
```

-  fan (ventilador):

```cpp
   fan::config_t fan_config;
   endpoint_t *endpoint = fan::create(node, &fan_config, ENDPOINT_FLAG_NONE);
```


-  door_lock (seguro de puerta):

```cpp
   door_lock::config_t door_lock_config;
   endpoint_t *endpoint = door_lock::create(node, &door_lock_config, ENDPOINT_FLAG_NONE);
```

-  window_covering_device (persiana):

```cpp
   window_covering_device::config_t window_covering_device_config(static_cast<uint8_t>(chip::app::Clusters::WindowCovering::EndProductType::kTiltOnlyInteriorBlind));
   endpoint_t *endpoint = window_covering_device::create(node, &window_covering_config, ENDPOINT_FLAG_NONE);
```

   The ``window_covering_device`` ``config_t`` structure includes a constructor that allows specifying
   an end product type different than the default one, which is "Roller shade".
   Once a ``config_t`` instance has been instantiated, its end product type cannot be modified.

- pump (bomba, p/e pecera)

```cpp
   pump::config_t pump_config(1, 10, 20);
   endpoint_t *endpoint = pump::create(node, &pump_config, ENDPOINT_FLAG_NONE);
```

   The ``pump`` ``config_t`` structure includes a constructor that allows specifying
   maximum pressure, maximum speed and maximum flow values. If they aren't set, they will be set to null by default.
   Once a ``config_t`` instance has been instantiated, these three values cannot be modified.


### Clusters

También se pueden agregar clusters adicionales a un endpoint. Ejemplos:

-  on_off (encendido/apagado):

```cpp
   on_off::config_t on_off_config;
   cluster_t *cluster = on_off::create(endpoint, &on_off_config, CLUSTER_FLAG_SERVER, on_off::feature::lighting::get_id());
```

-  temperature_measurement (medición de temperatura):

```cpp
   temperature_measurement::config_t temperature_measurement_config;
   cluster_t *cluster = temperature_measurement::create(endpoint, &temperature_measurement_config, CLUSTER_FLAG_SERVER);
```

- window_covering (perciana):

```cpp
   window_covering::config_t window_covering_config(static_cast<uint8_t>(chip::app::Clusters::WindowCovering::EndProductType::kTiltOnlyInteriorBlind));
   cluster_t *cluster = window_covering::create(endpoint, &window_covering_config, CLUSTER_FLAG_SERVER);
```

   The ``window_covering`` ``config_t`` structure includes a constructor that allows specifying
   an end product type different than the default one, which is "Roller shade".
   Once a ``config_t`` instance has been instantiated, its end product type cannot be modified.

- pump_configuration_and_control (configuración y control de bomba/motor):

```cpp
   pump_configuration_and_control::config_t pump_configuration_and_control_config(1, 10, 20);
   cluster_t *cluster = pump_configuration_and_control::create(endpoint, &pump_configuration_and_control_config, CLUSTER_FLAG_SERVER);
```

   La estructura `config_t` de `pump_configuration_and_control` incluye un constructor que permite especificar los valores de presión máxima, velocidad máxima y flujo máximo. Si no se establecen, se configurarán como nulos por defecto. Una vez que se ha instanciado una instancia de `config_t`, estos tres valores no pueden ser modificados.

### Atributos y Comandos

También se pueden agregar atributos y comandos adicionales a un clúster. Ejemplos:

-  attribute: on_off (atributo: encendido/apagado):

```cpp
   bool default_on_off = true;
   attribute_t *attribute = on_off::attribute::create_on_off(cluster, default_on_off);
```

-  attribute: cluster_revision (atributo: revisión_clúster):

```cpp
   uint16_t default_cluster_revision = 1;
   attribute_t *attribute = global::attribute::create_cluster_revision(cluster, default_cluster_revision);
```

-  command: toggle (comando: alternador):

```cpp
   command_t *command = on_off::command::create_toggle(cluster);
```

-  command: move_to_level (comando: mover_nivel):

```cpp
   command_t *command = level_control::command::create_move_to_level(cluster);
```

### Características

También se pueden agregar características opcionales que sean aplicables a un clúster.

- feature: taglist: Descriptor cluster (Característica: lista de etiquetas: Clúster Descriptor):

```cpp
   cluster_t* cluster = cluster::get(endpoint, Descriptor::Id);
   descriptor::feature::taglist::add(cluster);
```

### Agregar campos personalizados al modelo de datos

Esta sección muestra cómo crear puntos finales, clústeres, atributos y comandos personalizados que no están definidos en la especificación de Matter y pueden ser específicos del proveedor.

#### Puntos finales

-  Endpoint create (Crear punto final):

```cpp
   endpoint_t *endpoint = endpoint::create(node, ENDPOINT_FLAG_NONE);
```

#### Clústeres

También se pueden crear clústeres no estándar/personalizados:

-  Cluster create (Crear clúster):

```cpp
   uint32_t custom_cluster_id = 0x131bfc00;
   cluster_t *cluster = cluster::create(endpoint, custom_cluster_id, CLUSTER_FLAG_SERVER);
```

#### Atributos y Comandos

También se pueden crear atributos no estándar/personalizados en cualquier clúster:

-  Attribute create (Crear atributo):

```cpp
   uint32_t custom_attribute_id = 0x0;
   uint16_t default_value = 100;
   attribute_t *attribute = attribute::create(cluster, custom_attribute_id, ATTRIBUTE_FLAG_NONE, esp_matter_uint16(default_value);
```

-  Command create (Crear comando):

```cpp
   static esp_err_t command_callback(const ConcreteCommandPath &command_path, TLVReader &tlv_data, void
   *opaque_ptr)
   {
      ESP_LOGI(TAG, "Custom command callback");
      return ESP_OK;
   }

   uint32_t custom_command_id = 0x0;
   command_t *command = command::create(cluster, custom_command_id, COMMAND_FLAG_ACCEPTED, command_callback);
```


El modelo de datos de Matter organiza estos componentes de manera jerárquica. Un nodo Matter contiene uno o más puntos finales (Endpoints), cada uno representando un tipo específico de dispositivo. Cada Endpoint consta de múltiples Clústeres, que agrupan atributos y comandos relacionados. Los atributos almacenan el estado y la configuración de un clúster, mientras que los comandos se utilizan para interactuar y controlar el dispositivo.

Al estructurar el modelo de datos de esta manera, Matter permite la interoperabilidad y la estandarización entre dispositivos de diferentes fabricantes. Los desarrolladores pueden usar los tipos de dispositivos, clústeres, atributos y comandos definidos para crear aplicaciones que puedan controlar y comunicarse sin problemas con dispositivos compatibles con Matter.

El modelo de datos de Matter proporciona un lenguaje común y un marco para que los dispositivos describan sus capacidades e interactúen entre sí, lo que permite una experiencia más unificada y consistente en el hogar inteligente.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

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
