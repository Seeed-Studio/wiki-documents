---
description: El código de luz se utiliza como ejemplo para introducir el marco de desarrollo de Matter.
title: Descripción General del Marco de Desarrollo de Matter
keywords:
- matter
- XIAO
- light
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/matter_development_framework
last_update:
  date: 05/15/2024
  author: Citric
---

# Descripción General del Marco de Desarrollo de Matter

:::tip
Este artículo es el cuarto tutorial en la serie de Desarrollo de Matter con Seeed Studio XIAO ESP32. Si no has leído los tutoriales anteriores, te recomendamos que los leas primero para verificar que tu dispositivo esté configurado según los requisitos.

- **[Desarrollo en XIAO usando Espressif ESP-IDF](https://wiki.seeedstudio.com/es/xiao_idf)**
- **[Comenzando Rápidamente con Matter usando la Serie XIAO ESP32](https://wiki.seeedstudio.com/es/getting_started_with_matter)**
- **[Desarrollo de Matter con la Serie XIAO ESP32](https://wiki.seeedstudio.com/es/xiao_esp32_matter_env/)**
:::

Embárcate en un viaje iluminador al mundo del desarrollo de Matter con nuestro tutorial integral. A través de la perspectiva del ejemplo quintesencial de luz, arrojaremos luz sobre los conceptos fundamentales y el conocimiento que forman la base del desarrollo de Matter. Desde clústeres y atributos hasta comandos y más allá, este tutorial te equipará con las herramientas para navegar el marco de Matter con confianza. ¡Prepárate para activar el interruptor de tus habilidades de desarrollo de Matter y sumerjámonos en el brillante mundo de los dispositivos conectados!

## Esquema del Tutorial

1. **[Entendiendo el Ejemplo de Luz](#understanding-the-light-example)**
2. **[Inicialización del Dispositivo](#device-initialisation)**
3. **[Crear Nodo Matter](#create-matter-node)**
4. **[Establece el Atributo del Endpoint](#sets-the-attribute-of-the-endpoint)**
5. **[Crear Endpoint y Coincidencia Automática de Clúster](#create-endpoint--auto-match-cluster)**
6. **[Configurar el dispositivo Matter por primera vez con valores predeterminados](#setting-up-the-matter-device-for-the-first-time-with-default-values)**
7. **[Actualizaciones de datos y persistencia diferida](#data-updates-and-deferred-persistence)**

En esta sección, nos enfocaremos en el ejemplo de [luz](https://github.com/espressif/esp-matter/tree/main/examples/light) proporcionado en ESP-Matter, que describe en detalle los conceptos básicos de clústeres, atributos y comandos en el marco de desarrollo de Matter. Al leer este artículo, podrás obtener una mejor comprensión de la estructura y conciencia del marco de desarrollo de Matter.

## Entendiendo el Ejemplo de Luz

Primero, veamos los directorios de archivos en el entorno ESP-Matter y qué hacen.

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

**esp-matter**: Este es el directorio raíz de todo el framework de desarrollo de Matter.

**components**: Este directorio contiene varios componentes y es el núcleo del framework de Matter.
   - esp_matter: Esta es la implementación de la pila de protocolos de Matter en ESP32, incluyendo el modelo de datos, lógica de capa de aplicación, etc.
   - esp_matter_bridge: Este componente es responsable de conectar dispositivos ESP con otros dispositivos no-ESP, logrando interoperabilidad.
   - esp_matter_console: Esta es una consola interactiva basada en REPL, utilizada para depurar y controlar dispositivos Matter.
   - esp_matter_controller: Este componente implementa la funcionalidad de un controlador Matter, capaz de controlar otros dispositivos Matter.
   - esp_matter_rainmaker: Este componente se integra con la plataforma en la nube RainMaker de Espressif, habilitando control en la nube.
   - esp_matter_thread_br: Este componente implementa la funcionalidad de Thread Border Router, utilizada para crear redes Thread.

**connectedhomeip**: Este es el proyecto de código abierto upstream de la pila de protocolos de Matter, del cual ESP Matter sincroniza su código.

**device_hal**: Este directorio contiene los controladores de la capa de abstracción de hardware.
   - button_driver: Controlador de botones.
   - device: Abstracción de dispositivo, definiendo interfaces genéricas de dispositivo.
   - led_driver: Controlador de LED.

**docs**: Aquí es donde se almacenan los documentos de desarrollo de ESP-Matter y los manuales de referencia de API.

**examples**: Varios códigos de ejemplo que demuestran cómo usar el framework de Matter para desarrollo.

**tools**: Contiene varios scripts de herramientas de desarrollo.
   - mfg_tool: Herramienta para generar certificados de fabricante.

**CMakeLists.txt**: Script de construcción CMake, definiendo las reglas de compilación para el proyecto.

**RELEASE_NOTES.md**: Notas de lanzamiento, registrando los cambios en cada versión.

**export.sh**: Script de exportación, utilizado para exportar variables de entorno relacionadas con Matter.

**install.sh**: Script de instalación, utilizado para instalar las dependencias y cadenas de herramientas requeridas para el desarrollo de Matter.

**requirements.txt**: Lista de dependencias de Python, especificando las librerías de Python necesarias para ejecutar el framework de desarrollo de Matter.

Esta estructura de directorios refleja la filosofía de diseño modular del framework de desarrollo de Matter. La pila de protocolos central, abstracción de hardware, componentes de aplicación, herramientas auxiliares y otras partes cada una tiene sus propias responsabilidades mientras se combinan orgánicamente, proporcionando a los desarrolladores un entorno completo de desarrollo de Matter.

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
   - CMakeLists.txt: El script de construcción CMake para la aplicación principal.
   - app_driver.cpp: El código del controlador para la aplicación de luz.
   - app_main.cpp: El punto de entrada principal de la aplicación de luz.
   - app_priv.h: Un archivo de cabecera que contiene declaraciones privadas para la aplicación de luz.
   - idf_components.yml: Un archivo de configuración para los componentes ESP-IDF utilizados en la aplicación de luz.

- **CMakeLists.txt**: El script de construcción CMake de nivel superior para el ejemplo de luz.

- **README.md**: Un archivo readme que proporciona información e instrucciones para el ejemplo de luz.

- **partitions.csv**: Un archivo que define la tabla de particiones para el ejemplo de luz.

- **sdkconfig.defaults**: Configuraciones predeterminadas para el ejemplo de luz.

## Inicialización del Dispositivo

A continuación, profundizamos en el código de la luz para profundizar nuestra comprensión del proceso de desarrollo de Matter a través de una combinación de análisis de código y teoría. El siguiente código está en [manin/app_main.cpp](https://github.com/espressif/esp-matter/blob/main/examples/light/main/app_main.cpp).

```cpp
app_driver_handle_t light_handle = app_driver_light_init();
app_driver_handle_t button_handle = app_driver_button_init();
app_reset_button_register(button_handle);
```

`app_driver_handle_t light_handle = app_driver_light_init();`: Esta línea inicializa el controlador de luz y devuelve un manejador a la instancia del controlador de luz.

`app_driver_handle_t button_handle = app_driver_button_init();`: Similar a la inicialización de la luz, esta línea inicializa el controlador del botón.

`app_reset_button_register(button_handle);`: Esta línea registra el botón para una funcionalidad específica, para manejar operaciones de reinicio.

Tomando la función `app_driver_light_init()` como ejemplo, el siguiente programa inicializa todas las bombillas de luz, pero solo usa la primera (configurada con los valores predeterminados de color y brillo). Esta es también la razón por la cual el programa de ejemplo solo puede usar una bombilla de luz.

```cpp
// app_driver.cpp
app_driver_handle_t app_driver_light_init()
{
#if CONFIG_BSP_LEDS_NUM > 0
    /* Initialize led */
    led_indicator_handle_t leds[CONFIG_BSP_LEDS_NUM];
    ESP_ERROR_CHECK(bsp_led_indicator_create(leds, NULL, CONFIG_BSP_LEDS_NUM));
    led_indicator_set_hsv(leds[0], SET_HSV(DEFAULT_HUE, DEFAULT_SATURATION, DEFAULT_BRIGHTNESS));
    
    return (app_driver_handle_t)leds[0];
#else
    return NULL;
#endif
}
```

## Crear Nodo Matter

El siguiente paso en la línea principal de código para la configuración del dispositivo Matter es crear un Nodo Matter. el código es el siguiente:

```cpp
node::config_t node_config;

// node handle can be used to add/modify other endpoints.
node_t *node = node::create(&node_config, app_attribute_update_cb, app_identification_cb);
ABORT_APP_ON_FAILURE(node != nullptr, ESP_LOGE(TAG, "Failed to create Matter node"));
```

El modelo de datos de Matter es una forma estandarizada de representar y organizar datos dentro del ecosistema de Matter. Define un lenguaje común y una estructura para dispositivos, atributos e interacciones, permitiendo la interoperabilidad y comunicación fluida entre dispositivos compatibles con Matter.

El siguiente diagrama muestra una vista simplificada de cómo esto puede representarse en el modelo de datos de Matter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/34.png" style={{width:600, height:'auto'}}/></div>

**Nodo Matter**:
Un Nodo Matter representa un dispositivo físico o una entidad lógica dentro del ecosistema de Matter. Es el componente de nivel superior del modelo de datos de Matter. Cada Nodo Matter tiene un identificador único y puede contener uno o más Endpoints.
   - Un Nodo Matter representa **un dispositivo físico** en el ecosistema de Matter.
   - Es como una casa que puede contener múltiples Endpoints (habitaciones).
   - Cada Nodo Matter tiene su propio identificador único para reconocimiento y direccionamiento dentro de la red.

## Establece el Atributo del Endpoint

Una vez que el Nodo Matter ha sido creado, es necesario establecer valores predeterminados para las propiedades de los Endpoints.

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
   - Establece el estado inicial de encendido/apagado del endpoint a `DEFAULT_POWER`.
   - `DEFAULT_POWER` es una constante predefinida que representa el estado de energía predeterminado (por ejemplo, `true` para encendido, `false` para apagado).

2. `light_config.on_off.lighting.start_up_on_off = nullptr;`
   - Establece el estado de encendido/apagado de inicio del endpoint a `nullptr`.
   - Cuando el dispositivo se reinicia o se cicla la energía, si este valor es `nullptr`, significa usar el último estado de encendido/apagado.
   - Si se establece a un valor no-`nullptr`, indica usar el estado de encendido/apagado especificado.

3. `light_config.level_control.current_level = DEFAULT_BRIGHTNESS;`
   - Establece el nivel de brillo inicial del endpoint a `DEFAULT_BRIGHTNESS` (64).
   - `DEFAULT_BRIGHTNESS` es una constante predefinida que representa el nivel de brillo predeterminado (por ejemplo, un valor entre 0 y 254).

4. `light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;`
   - Establece el nivel de brillo de inicio del endpoint a `DEFAULT_BRIGHTNESS` (64).
   - Cuando el dispositivo se reinicia o se cicla la energía, si este valor es no-`nullptr`, significa usar el nivel de brillo especificado.
   - Si se establece a `nullptr`, indica usar el último nivel de brillo.

5. `light_config.color_control.color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;`
   - Establece el modo de color del endpoint a `ColorControl::ColorMode::kColorTemperature`.
   - Esto significa que el endpoint usa el modo de temperatura de color, donde el color de la luz se controla ajustando la temperatura de color.
   - `(uint8_t)` es una conversión de tipo que convierte el valor enum a un entero sin signo de 8 bits.

6. `light_config.color_control.enhanced_color_mode = (uint8_t)ColorControl::ColorMode::kColorTemperature;`
   - Establece el modo de color mejorado del endpoint a `ColorControl::ColorMode::kColorTemperature`.
   - El modo de color mejorado proporciona más opciones de control de color, pero aquí también se establece al modo de temperatura de color.

7. `light_config.color_control.color_temperature.startup_color_temperature_mireds = nullptr;`
   - Establece la temperatura de color de inicio del endpoint a `nullptr`.
   - Cuando el dispositivo se reinicia o se cicla la energía, si este valor es `nullptr`, significa usar la última configuración de temperatura de color.
   - Si se establece a un valor no-`nullptr`, indica usar el valor de temperatura de color especificado.

Los atributos en Matter son como propiedades o características de un dispositivo. Almacenan información sobre el estado del dispositivo, como si está encendido o apagado, su nivel de brillo, o su temperatura de color. Estos atributos están organizados en grupos llamados Clusters, que están relacionados con funciones específicas del dispositivo.

Los atributos facilitan que diferentes dispositivos y aplicaciones se comuniquen y trabajen juntos sin problemas. Al tener una forma estándar de representar y acceder a las propiedades del dispositivo, Matter simplifica el desarrollo de sistemas de hogar inteligente y asegura que los dispositivos de varias marcas puedan interactuar entre sí de manera eficiente.

`esp_matter_endpoint.h` es un archivo de cabecera importante en el ESP Matter SDK que define constantes, tipos de datos y funciones relacionadas con endpoints. En Matter, los endpoints representan las interfaces lógicas de un dispositivo, y cada endpoint contiene un conjunto de atributos y comandos que describen y controlan funcionalidades específicas del dispositivo.

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

## Crear Endpoint y Coincidencia Automática de Cluster

En lo anterior, primero mencionamos dos términos que son importantes en Matter, Endpoints y Clusters.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/35.png" style={{width:500, height:'auto'}}/></div>

**Endpoint(s) [Tipo(s) de Dispositivo]**:
Un Endpoint es una representación lógica de una funcionalidad o servicio específico dentro de un Nodo Matter. Encapsula un conjunto de capacidades y comportamientos relacionados con un tipo de dispositivo particular. Un Nodo Matter puede tener múltiples Endpoints, cada uno representando un tipo de dispositivo diferente. Los Tipo(s) de Dispositivo definen las características específicas y la funcionalidad de un Endpoint. Matter define un conjunto de tipos de dispositivos estándar, como bombillas, termostatos, cerraduras de puerta, y más. Cada tipo de dispositivo tiene un identificador único y un conjunto predefinido de clusters, atributos y comandos asociados con él.

- Un Endpoint es un componente lógico dentro de un Nodo Matter, representando una funcionalidad o servicio específico del dispositivo.
- Al igual que las habitaciones en una casa, cada Endpoint tiene su propio propósito dedicado, como un dormitorio, cocina o sala de estar.
- Cada Endpoint está asociado con un tipo de dispositivo específico, como una bombilla, termostato o cerradura de puerta.
- Un Nodo Matter puede tener múltiples Endpoints, cada uno representando un tipo de dispositivo y funcionalidad diferente.

**Cluster(s)**:
Los Clusters son agrupaciones lógicas de atributos y comandos relacionados dentro de un Endpoint. Representan una funcionalidad o característica específica de un dispositivo. Los Clusters proporcionan una forma de organizar y categorizar las capacidades de un Endpoint. Por ejemplo, el "Cluster On/Off" contiene atributos y comandos relacionados con encender o apagar un dispositivo, mientras que el "Cluster de Control de Nivel" se encarga de controlar el brillo o nivel de un dispositivo.

- Un Cluster es una agrupación lógica dentro de un Endpoint, conteniendo atributos y comandos relacionados.
- Es como los muebles o dispositivos en una habitación, como luces, televisores o aires acondicionados, cada uno con sus propios atributos y operaciones.
- Cada Cluster representa una funcionalidad o característica específica del dispositivo.
- Por ejemplo, el "Cluster On/Off" contiene atributos y comandos relacionados con el estado de encendido/apagado del dispositivo, mientras que el "Cluster de Control de Nivel" contiene atributos y comandos para ajustar el brillo o nivel del dispositivo.
- Un Endpoint puede tener múltiples Clusters, cada uno responsable de diferentes funcionalidades.

En resumen, un Nodo Matter es como una casa, conteniendo múltiples Endpoints (habitaciones). Cada Endpoint es como una habitación, representando una funcionalidad o servicio específico del dispositivo. Los Clusters son como los muebles o dispositivos en cada habitación, conteniendo atributos y comandos relacionados para control e interacción.

Esta organización jerárquica permite a los dispositivos describir claramente sus funcionalidades y características, facilitando que las aplicaciones y otros dispositivos interactúen con ellos y los controlen. Al estandarizar tipos de dispositivos, Clusters, atributos y comandos, Matter habilita la interoperabilidad y compatibilidad entre dispositivos de diferentes fabricantes.

En el código, después de configurar los Atributos, finalmente se crea un Endpoint mediante el siguiente fragmento. Y automáticamente coincide con el Cluster del atributo configurado.

```cpp
endpoint_t *endpoint = extended_color_light::create(node, &light_config, ENDPOINT_FLAG_NONE, light_handle);
ABORT_APP_ON_FAILURE(endpoint != nullptr, ESP_LOGE(TAG, "Failed to create extended color light endpoint"));
```

¿Cómo se logra la agrupación automática por coincidencia? Tomemos un ejemplo de un fragmento que establece un atributo.

```cpp
light_config.level_control.lighting.start_up_current_level = DEFAULT_BRIGHTNESS;
```

`light_config.level_control` es un Atributo definido en Endpoint (esp_matter_endpoint.h). Y `light_config.level_control.lighting` es un Atributo definido en Cluster (esp_matter_cluster). Con esta configuración, el sistema puede hacer coincidir automáticamente el Cluster correspondiente al Atributo sin necesidad de que los desarrolladores los configuren manualmente.


## Configuración del dispositivo Matter por primera vez con valores predeterminados

Una vez que se han configurado los Atributos, Clusters y Endpoints anteriores, podemos comenzar a arrancar el dispositivo Matter. Los pasos y la metodología para el arranque son los siguientes.

```cpp
light_endpoint_id = endpoint::get_id(endpoint);
ESP_LOGI(TAG, "Light created with endpoint_id %d", light_endpoint_id);

/* Matter start */
err = esp_matter::start(app_event_cb);
ABORT_APP_ON_FAILURE(err == ESP_OK, ESP_LOGE(TAG, "Failed to start Matter, err:%d", err));

/* Starting driver with default values 使用默认值启动驱动程序 */
app_driver_light_set_defaults(light_endpoint_id);
```

Como puedes ver, la función para establecer los valores predeterminados es `app_driver_light_set_defaults()`, y necesitamos pasar un ID de endpoint como parámetro. Y necesitamos preocuparnos por cómo obtener el valor de un cierto clúster, un cierto atributo, y cómo establecer el clúster predeterminado, valor del atributo. Los secretos se muestran en el `app_driver.cpp`.

```cpp
esp_err_t err = ESP_OK;
void *priv_data = endpoint::get_priv_data(endpoint_id);
led_indicator_handle_t handle = (led_indicator_handle_t)priv_data;
node_t *node = node::get();
endpoint_t *endpoint = endpoint::get(node, endpoint_id);
cluster_t *cluster = NULL;
attribute_t *attribute = NULL;
esp_matter_attr_val_t val = esp_matter_invalid(NULL);

/* Setting brightness */
cluster = cluster::get(endpoint, LevelControl::Id);
attribute = attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id);
attribute::get_val(attribute, &val);
err |= app_driver_light_set_brightness(handle, &val);
```

1. Obtener un Clúster:
   - Para obtener un clúster, primero necesitas obtener un puntero al endpoint usando la función `endpoint::get(node, endpoint_id)`, donde `node` es un puntero al nodo y `endpoint_id` es el ID del endpoint.
   - Una vez que tengas el puntero del endpoint, puedes obtener un puntero al clúster deseado usando la función `cluster::get(endpoint, LevelControl::Id)`, especificando el endpoint y el ID del clúster (`LevelControl::Id` en este caso).

2. Obtener un Atributo Específico:
   - Después de obtener el puntero del clúster, puedes obtener un puntero a un atributo específico dentro de ese clúster usando la función `attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id)`.
   - En este ejemplo, estamos recuperando el atributo `CurrentLevel` del clúster `LevelControl`.

3. Recuperar el Valor del Atributo:
   - Para recuperar el valor actual de un atributo, necesitas declarar una variable de tipo `esp_matter_attr_val_t` para almacenar el valor del atributo.
   - En el fragmento de código, la variable `val` se inicializa con `esp_matter_invalid(NULL)`.
   - Luego, puedes usar la función `attribute::get_val(attribute, &val)` para obtener el valor actual del atributo y almacenarlo en la variable `val`.

4. Configurar el Brillo de una Luz:
   - Para configurar el brillo de una luz, necesitas tener un handle al indicador LED asociado con el endpoint.
   - En el fragmento de código, el handle del indicador LED se obtiene convirtiendo el puntero de datos privados (`priv_data`) al tipo apropiado (`led_indicator_handle_t`).
   - Finalmente, puedes llamar a la función `app_driver_light_set_brightness(handle, &val)` para configurar el brillo del indicador LED.
   - El parámetro `handle` es el handle del indicador LED, y `&val` es un puntero a la variable `esp_matter_attr_val_t` que contiene el valor de brillo deseado.

Aquí hay un resumen de los pasos:
1. Obtener el puntero del endpoint usando `endpoint::get(node, endpoint_id)`.
2. Obtener el puntero del clúster usando `cluster::get(endpoint, LevelControl::Id)`.
3. Obtener el puntero del atributo usando `attribute::get(cluster, LevelControl::Attributes::CurrentLevel::Id)`.
4. Recuperar el valor actual del atributo usando `attribute::get_val(attribute, &val)`.
5. Configurar el brillo de la luz usando `app_driver_light_set_brightness(handle, &val)`, donde `handle` es el handle del indicador LED asociado con el endpoint.

Siguiendo estos pasos, puedes obtener los punteros necesarios al clúster y atributo, recuperar el valor actual del atributo, y configurar el brillo de la luz en consecuencia.


## Actualizaciones de datos y persistencia diferida

En el código de `app_driver.cpp`, los valores de los atributos se actualizan usando la función `app_driver_attribute_update()`.

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

El fragmento de código define una función llamada `app_driver_attribute_update` que toma varios parámetros, incluyendo el manejador del controlador (`driver_handle`), ID del endpoint (`endpoint_id`), ID del clúster (`cluster_id`), ID del atributo (`attribute_id`), y un puntero al valor del atributo (`val`).

El propósito de esta función es actualizar los valores de los atributos de un endpoint de luz basándose en los datos recibidos. Sigue una lógica específica para determinar qué atributo del endpoint de luz necesita ser actualizado.

Aquí hay un desglose paso a paso de la lógica de actualización de datos:

1. La función primero verifica si el `endpoint_id` coincide con el `light_endpoint_id`. Esto asegura que la actualización esté destinada al endpoint de luz.

2. Si el `endpoint_id` coincide, la función convierte el `driver_handle` al tipo apropiado (`led_indicator_handle_t`) para obtener el manejador del indicador LED asociado con el endpoint de luz.

3. La función entonces verifica el `cluster_id` para determinar a qué clúster pertenece el atributo. Soporta tres clústeres: `OnOff`, `LevelControl`, y `ColorControl`.

4. Dependiendo del `cluster_id`, la función verifica además el `attribute_id` para identificar el atributo específico dentro de ese clúster.

5. Basándose en el `cluster_id` y `attribute_id`, la función llama a la función setter correspondiente para actualizar el valor del atributo:
   - Si el `cluster_id` es `OnOff::Id` y el `attribute_id` es `OnOff::Attributes::OnOff::Id`, llama a `app_driver_light_set_power(handle, val)` para establecer el estado de encendido de la luz.
   - Si el `cluster_id` es `LevelControl::Id` y el `attribute_id` es `LevelControl::Attributes::CurrentLevel::Id`, llama a `app_driver_light_set_brightness(handle, val)` para establecer el nivel de brillo de la luz.
   - Si el `cluster_id` es `ColorControl::Id`, verifica el `attribute_id` más a fondo:
     - Si el `attribute_id` es `ColorControl::Attributes::CurrentHue::Id`, llama a `app_driver_light_set_hue(handle, val)` para establecer el matiz de la luz.
     - Si el `attribute_id` es `ColorControl::Attributes::CurrentSaturation::Id`, llama a `app_driver_light_set_saturation(handle, val)` para establecer la saturación de la luz.
     - Si el `attribute_id` es `ColorControl::Attributes::ColorTemperatureMireds::Id`, llama a `app_driver_light_set_temperature(handle, val)` para establecer la temperatura de color de la luz.

En general, esta función actúa como un punto central para actualizar los valores de los atributos de un endpoint de luz. Recibe la información necesaria (ID del endpoint, ID del clúster, ID del atributo, y valor del atributo) y envía la actualización a la función setter apropiada basándose en los IDs del clúster y atributo.

Al organizar la lógica de esta manera, el código se vuelve más modular y fácil de mantener. Permite actualizar diferentes atributos del endpoint de luz (estado de encendido, brillo, matiz, saturación, temperatura de color) a través de una sola función, simplificando el proceso de actualizar las características de la luz basándose en los datos recibidos.

Pero no todos los atributos se actualizan en tiempo real. El código que marca aquellos atributos que probablemente cambien frecuentemente, como persistencia diferida, puede mejorar el rendimiento, así como reducir el número de escrituras a la memoria no volátil y extender la vida útil del dispositivo.

```cpp
/* Mark deferred persistence for some attributes that might be changed rapidly */
cluster_t *level_control_cluster = cluster::get(endpoint, LevelControl::Id);
attribute_t *current_level_attribute = attribute::get(level_control_cluster, LevelControl::Attributes::CurrentLevel::Id);
attribute::set_deferred_persistence(current_level_attribute);

cluster_t *color_control_cluster = cluster::get(endpoint, ColorControl::Id);
attribute_t *current_x_attribute = attribute::get(color_control_cluster, ColorControl::Attributes::CurrentX::Id);
attribute::set_deferred_persistence(current_x_attribute);
```

## Definiendo tu propio modelo de datos

Esta sección demuestra la creación de endpoints, clusters, atributos y comandos estándar que están definidos en la especificación Matter.

#### Endpoints

El dispositivo puede ser personalizado editando la creación del endpoint/device_type en el *app_main.cpp* del ejemplo. Ejemplos:

-  on_off_light:

```cpp
   on_off_light::config_t light_config;
   endpoint_t *endpoint = on_off_light::create(node, &light_config, ENDPOINT_FLAG_NONE);
```

-  sensor_de_temperatura:

```cpp
    esp_matter::endpoint::temperature_sensor::config_t temperature_sensor_config;
    endpoint_t *endpoint = temperature_sensor::create(node, &temperature_sensor_config, ENDPOINT_FLAG_NONE, NULL);
```

-  ventilador:

```cpp
   fan::config_t fan_config;
   endpoint_t *endpoint = fan::create(node, &fan_config, ENDPOINT_FLAG_NONE);
```


-  cerradura_de_puerta:

```cpp
   door_lock::config_t door_lock_config;
   endpoint_t *endpoint = door_lock::create(node, &door_lock_config, ENDPOINT_FLAG_NONE);
```

-  dispositivo_cubierta_ventana:

```cpp
   window_covering_device::config_t window_covering_device_config(static_cast<uint8_t>(chip::app::Clusters::WindowCovering::EndProductType::kTiltOnlyInteriorBlind));
   endpoint_t *endpoint = window_covering_device::create(node, &window_covering_config, ENDPOINT_FLAG_NONE);
```

   La estructura ``config_t`` de ``window_covering_device`` incluye un constructor que permite especificar
   un tipo de producto final diferente al predeterminado, que es "Roller shade".
   Una vez que se ha instanciado una instancia de ``config_t``, su tipo de producto final no se puede modificar.

- bomba

```cpp
   pump::config_t pump_config(1, 10, 20);
   endpoint_t *endpoint = pump::create(node, &pump_config, ENDPOINT_FLAG_NONE);
```

   La estructura ``pump`` ``config_t`` incluye un constructor que permite especificar
   valores máximos de presión, velocidad máxima y flujo máximo. Si no se establecen, se configurarán como nulos por defecto.
   Una vez que se ha instanciado una instancia de ``config_t``, estos tres valores no pueden modificarse.


### Clústeres

También se pueden agregar clústeres adicionales a un endpoint. Ejemplos:

-  on_off:

```cpp
   on_off::config_t on_off_config;
   cluster_t *cluster = on_off::create(endpoint, &on_off_config, CLUSTER_FLAG_SERVER, on_off::feature::lighting::get_id());
```

-  medición_de_temperatura:

```cpp
   temperature_measurement::config_t temperature_measurement_config;
   cluster_t *cluster = temperature_measurement::create(endpoint, &temperature_measurement_config, CLUSTER_FLAG_SERVER);
```

- window_covering:

```cpp
   window_covering::config_t window_covering_config(static_cast<uint8_t>(chip::app::Clusters::WindowCovering::EndProductType::kTiltOnlyInteriorBlind));
   cluster_t *cluster = window_covering::create(endpoint, &window_covering_config, CLUSTER_FLAG_SERVER);
```

   La estructura ``config_t`` de ``window_covering`` incluye un constructor que permite especificar
   un tipo de producto final diferente al predeterminado, que es "Roller shade".
   Una vez que se ha instanciado una instancia de ``config_t``, su tipo de producto final no se puede modificar.

- pump_configuration_and_control:

```cpp
   pump_configuration_and_control::config_t pump_configuration_and_control_config(1, 10, 20);
   cluster_t *cluster = pump_configuration_and_control::create(endpoint, &pump_configuration_and_control_config, CLUSTER_FLAG_SERVER);
```

   La estructura ``config_t`` de ``pump_configuration_and_control`` incluye un constructor que permite especificar
   valores máximos de presión, velocidad máxima y flujo máximo. Si no se establecen, se configurarán como nulos por defecto.
   Una vez que se ha instanciado una instancia de ``config_t``, estos tres valores no pueden modificarse.

### Atributos y Comandos

También se pueden añadir atributos y comandos adicionales a un clúster.
Ejemplos:

-  atributo: on_off:

```cpp
   bool default_on_off = true;
   attribute_t *attribute = on_off::attribute::create_on_off(cluster, default_on_off);
```

-  atributo: cluster_revision:

```cpp
   uint16_t default_cluster_revision = 1;
   attribute_t *attribute = global::attribute::create_cluster_revision(cluster, default_cluster_revision);
```

-  comando: alternar:

```cpp
   command_t *command = on_off::command::create_toggle(cluster);
```

-  comando: move_to_level:

```cpp
   command_t *command = level_control::command::create_move_to_level(cluster);
```

### Características

Las características opcionales que son aplicables a un clúster también se pueden añadir.

- característica: taglist: Clúster descriptor:

```cpp
   cluster_t* cluster = cluster::get(endpoint, Descriptor::Id);
   descriptor::feature::taglist::add(cluster);
```

### Agregando campos de modelo de datos personalizados

Esta sección demuestra la creación de endpoints, clusters, atributos y comandos personalizados que no están definidos en la especificación de Matter y pueden ser
específicos del proveedor.

#### Endpoints

Se puede crear un endpoint no estándar, sin ningún cluster.

-  Creación de endpoint:

```cpp
   endpoint_t *endpoint = endpoint::create(node, ENDPOINT_FLAG_NONE);
```

#### Clusters

También se pueden crear clusters no estándar/personalizados:

-  Creación de cluster:

```cpp
   uint32_t custom_cluster_id = 0x131bfc00;
   cluster_t *cluster = cluster::create(endpoint, custom_cluster_id, CLUSTER_FLAG_SERVER);
```

#### Atributos y Comandos

Los atributos no estándar/personalizados también se pueden crear en cualquier clúster:

-  Creación de atributo:

```cpp
   uint32_t custom_attribute_id = 0x0;
   uint16_t default_value = 100;
   attribute_t *attribute = attribute::create(cluster, custom_attribute_id, ATTRIBUTE_FLAG_NONE, esp_matter_uint16(default_value);
```

-  Crear comando:

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


El modelo de datos de Matter organiza estos componentes de manera jerárquica. Un Nodo Matter contiene uno o más Endpoints, cada uno representando un tipo de dispositivo específico. Cada Endpoint consiste en múltiples Clusters, que agrupan atributos y comandos relacionados. Los atributos almacenan el estado y la configuración de un cluster, mientras que los comandos se utilizan para interactuar y controlar el dispositivo.

Al estructurar el modelo de datos de esta manera, Matter permite la interoperabilidad y estandarización entre dispositivos de diferentes fabricantes. Los desarrolladores pueden usar los tipos de dispositivos, clusters, atributos y comandos definidos para crear aplicaciones que puedan controlar y comunicarse sin problemas con dispositivos compatibles con Matter.

El modelo de datos de Matter proporciona un lenguaje común y un marco de trabajo para que los dispositivos describan sus capacidades e interactúen entre sí, permitiendo una experiencia de hogar inteligente más unificada y consistente.

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
