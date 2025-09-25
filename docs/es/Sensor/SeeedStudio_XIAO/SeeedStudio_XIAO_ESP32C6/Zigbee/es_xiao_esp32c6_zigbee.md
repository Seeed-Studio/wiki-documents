---
description: En este tutorial, nos embarcaremos en un viaje para explorar el desarrollo de aplicaciones Zigbee utilizando la placa de desarrollo XIAO ESP32C6. La XIAO ESP32C6 es una placa compacta pero potente que cuenta con el chip ESP32-C6, que ofrece conectividad integrada Wi-Fi y Bluetooth Low Energy (BLE). Al aprovechar el SDK ESP Zigbee, podemos aprovechar todo el potencial de la XIAO ESP32C6 y extender sus capacidades para incluir funcionalidad Zigbee.
title: Guía de Inicio Rápido XIAO ESP32C6 Zigbee (ESP-IDF)
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.jpg
slug: /es/xiao_esp32c6_zigbee
last_update:
  date: 05/30/2024
  author: Citric
---

Zigbee es un protocolo de comunicación inalámbrica ampliamente adoptado que encuentra un uso extensivo en automatización del hogar, gestión inteligente de energía y aplicaciones de Internet de las Cosas (IoT). Conocido por su bajo consumo de energía, transmisión confiable de datos y capacidades de red de malla, Zigbee es una excelente opción para construir redes inalámbricas escalables y eficientes.

En este tutorial, nos embarcaremos en un viaje para explorar el desarrollo de aplicaciones Zigbee utilizando la placa de desarrollo XIAO ESP32C6. La XIAO ESP32C6 es una placa compacta pero potente que cuenta con el chip ESP32-C6, que ofrece conectividad integrada Wi-Fi y Bluetooth Low Energy (BLE). Al aprovechar el SDK ESP Zigbee, podemos aprovechar todo el potencial de la XIAO ESP32C6 y extender sus capacidades para incluir funcionalidad Zigbee.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png" style={{width:800, height:'auto'}}/></div>

Para profundizar en el desarrollo Zigbee, nos enfocaremos en dos programas de ejemplo proporcionados por el SDK ESP Zigbee: HA_on_off_light y HA_on_off_switch. Estos ejemplos muestran la implementación de un dispositivo de luz Zigbee y un dispositivo de interruptor Zigbee, respectivamente. Al examinar minuciosamente la estructura del código, los modelos de datos y los principios de funcionamiento detrás de estos ejemplos, obtendremos una comprensión integral del desarrollo de dispositivos Zigbee.

A lo largo de este tutorial, cubriremos los siguientes aspectos clave:

1. Configuración del entorno de desarrollo para XIAO ESP32C6 y SDK ESP Zigbee.
2. Análisis de la estructura del código y organización de los ejemplos HA_on_off_light y HA_on_off_switch.
3. Comprensión de los modelos de datos de dispositivos Zigbee y cómo se definen dentro del código.
4. Exploración del proceso de inicialización y mecanismos de manejo de eventos en dispositivos Zigbee.
5. Examen de los patrones de comunicación e intercambios de mensajes entre dispositivos Zigbee.

Al final de este tutorial, habrás obtenido una base sólida en el desarrollo Zigbee utilizando la XIAO ESP32C6 y el SDK ESP Zigbee. Armado con este conocimiento y habilidades prácticas, estarás bien preparado para crear tus propios proyectos basados en Zigbee y contribuir al ecosistema en constante crecimiento de dispositivos Zigbee.

Así que, ¡embarquémonos en este emocionante viaje de desarrollo Zigbee con la XIAO ESP32C6 y desbloqueemos todo el potencial de este poderoso protocolo de comunicación inalámbrica!

## Preparaciones de Hardware

En este tutorial utilizaremos **dos** XIAO ESP32C6 como ejemplos para explicar Zigbee. puedes saltar y comprarlo a través del enlace de abajo. Uno como un Dispositivo Final Zigbee y uno como un Coordinador Zigbee.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Compra ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Preparación del Entorno y Demostración

En esta sección, te guiaremos a través de la configuración del entorno de desarrollo y la carga de los dos programas del ejemplo.

### Paso 1. Preparar el entorno ESP-IDF

Para usar el SDK de Zigbee, se recomienda utilizar el framework de desarrollo ESP-IDF de Espressif. La instalación de ESP-IDF y la configuración del entorno en el sitio web oficial de Espressif proporciona un proceso de instalación detallado para diferentes sistemas, puedes leerlo a través del botón de abajo para ir a la página.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://docs.espressif.com/projects/esp-idf/en/v5.1.3/esp32h2/get-started/index.html#installation" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Ir a la Página 🖱️</font></span></strong>
    </a>
</div>

Si resulta que estás usando un sistema Ubuntu, los comandos que aproximadamente necesitas ejecutar en la terminal son los siguientes:

```
git clone --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
git checkout v5.1.3
git submodule update --init --recursive
./install.sh
source ./export.sh
cd ..
```

:::tip
Espressif recomienda usar **ESP-IDF v5.1.3** para el desarrollo de Zigbee, que es la versión verificada para este tutorial.
:::

### Paso 2. Descargar el SDK de Zigbee

Clonando esp-zigbee-sdk:

```
git clone https://github.com/espressif/esp-zigbee-sdk.git
cd esp-zigbee-sdk/examples/esp_zigbee_HA_sample
```

### Paso 3. Procedimiento para escribir HA_on_off_light

Preparemos el primer XIAO ESP32C6. escribiremos y flashearemos el End Device para él.

```
cd HA_on_off_light/main
```

Dado que el programa de ejemplo proporcionado usa GPIO8 como el LED, pero el LED en el XIAO es GPIO15, necesitamos hacer algunas revisiones simples al programa de ejemplo para mostrar el efecto.

El programa a modificar está en `esp_zb_light.c` en el archivo principal. El código completo después de la modificación es el siguiente.

```cpp
#include "esp_zb_light.h"
#include "esp_check.h"
#include "esp_log.h"
#include "nvs_flash.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "ha/esp_zigbee_ha_standard.h"
#include "driver/gpio.h"

#if !defined ZB_ED_ROLE
#error Define ZB_ED_ROLE in idf.py menuconfig to compile light (End Device) source code.
#endif

static const char *TAG = "ESP_ZB_ON_OFF_LIGHT";
#define BLINK_GPIO 15
/********************* Define functions **************************/
static esp_err_t deferred_driver_init(void)
{
    light_driver_init(LIGHT_DEFAULT_OFF);
    return ESP_OK;
}

static void configure_led(void)
{
    ESP_LOGI(TAG, "Example configured to blink GPIO LED!");
    gpio_reset_pin(BLINK_GPIO);
    /* Set the GPIO as a push/pull output */
    gpio_set_direction(BLINK_GPIO, GPIO_MODE_OUTPUT);
}

static void bdb_start_top_level_commissioning_cb(uint8_t mode_mask)
{
    ESP_RETURN_ON_FALSE(esp_zb_bdb_start_top_level_commissioning(mode_mask) == ESP_OK, , TAG, "Failed to start Zigbee commissioning");
}

void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            /* commissioning failed */
            ESP_LOGW(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Joined network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            ESP_LOGI(TAG, "Network steering was not successful (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}

static esp_err_t zb_attribute_handler(const esp_zb_zcl_set_attr_value_message_t *message)
{
    esp_err_t ret = ESP_OK;
    bool light_state = 0;

    ESP_RETURN_ON_FALSE(message, ESP_FAIL, TAG, "Empty message");
    ESP_RETURN_ON_FALSE(message->info.status == ESP_ZB_ZCL_STATUS_SUCCESS, ESP_ERR_INVALID_ARG, TAG, "Received message: error status(%d)",
                        message->info.status);
    ESP_LOGI(TAG, "Received message: endpoint(%d), cluster(0x%x), attribute(0x%x), data size(%d)", message->info.dst_endpoint, message->info.cluster,
             message->attribute.id, message->attribute.data.size);
    if (message->info.dst_endpoint == HA_ESP_LIGHT_ENDPOINT) {
        if (message->info.cluster == ESP_ZB_ZCL_CLUSTER_ID_ON_OFF) {
            if (message->attribute.id == ESP_ZB_ZCL_ATTR_ON_OFF_ON_OFF_ID && message->attribute.data.type == ESP_ZB_ZCL_ATTR_TYPE_BOOL) {
                light_state = message->attribute.data.value ? *(bool *)message->attribute.data.value : light_state;
                ESP_LOGI(TAG, "Light sets to %s", light_state ? "On" : "Off");
                gpio_set_level(BLINK_GPIO, light_state);
                // light_driver_set_power(light_state);
            }
        }
    }
    return ret;
}

static esp_err_t zb_action_handler(esp_zb_core_action_callback_id_t callback_id, const void *message)
{
    esp_err_t ret = ESP_OK;
    switch (callback_id) {
    case ESP_ZB_CORE_SET_ATTR_VALUE_CB_ID:
        ret = zb_attribute_handler((esp_zb_zcl_set_attr_value_message_t *)message);
        break;
    default:
        ESP_LOGW(TAG, "Receive Zigbee action(0x%x) callback", callback_id);
        break;
    }
    return ret;
}

static void esp_zb_task(void *pvParameters)
{
    /* initialize Zigbee stack */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_main_loop_iteration();
}

void app_main(void)
{
    configure_led();
    esp_zb_platform_config_t config = {
        .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
        .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
    };
    ESP_ERROR_CHECK(nvs_flash_init());
    ESP_ERROR_CHECK(esp_zb_platform_config(&config));
    xTaskCreate(esp_zb_task, "Zigbee_main", 4096, NULL, 5, NULL);
}
```

Por favor guárdalo.

### Paso 4. Procedimiento de Flash HA_on_off_light

Ahora conecta tu placa XIAO ESP32C6 a la computadora y verifica bajo qué puerto serie la placa es visible.

Los puertos serie tienen los siguientes patrones de nomenclatura: `/dev/tty`. En general, tu computadora puede tener muchos puertos que comienzan con `tty`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/11.png" style={{width:800, height:'auto'}}/></div>

Determinar los puertos también es fácil, puedes usar el comando de consulta para ver qué puertos están presentes por defecto cuando no estás conectado al XIAO.

```
ls /dev/tty*
```

Luego, después de conectar el XIAO a la computadora y consultarlo nuevamente, el nombre del puerto serie adicional es el número de puerto del XIAO.

Establece el dispositivo objetivo.

```
idf.py set-target esp32c6
```

Construye el proyecto ejecutando:

```
idf.py build
```

Para flashear los binarios que acabas de compilar para el ESP32 en el paso anterior, necesitas ejecutar el siguiente comando:

```
idf.py -p PORT flash
```

Reemplaza `PORT` con el nombre del puerto USB de tu XIAO ESP32C6. Si el **PORT** no está definido, el `idf.py` intentará conectarse automáticamente usando los puertos USB disponibles. Según el número de puerto del dispositivo que consultamos en el primer paso, para mí, debería ingresar el siguiente comando para flashear el programa.

```
idf.py -p /dev/ttyACM0 flash
```

Si no hay problemas al final del proceso de flasheo, el XIAO ESP32C6 se reiniciará e iniciará la aplicación de luz Zigbee.

### Paso 5. Procedimiento de Flasheo HA_on_off_switch

De manera similar, tomamos otro XIAO ESP32C6 y subimos el programa del interruptor para él. Los pasos son similares.

```
cd ../HA_on_off_switch
idf.py set-target esp32c6
idf.py build
idf.py -p PORT flash
```

Si todo va bien, entonces puedes usar el botón **BOOT** en el XIAO del programa SWITCH para controlar los LEDs del XIAO del programa LIGHT para encenderlos o apagarlos.

<div class="table-center">
<iframe width="800" height="350" src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/2.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Estructura del Programa de HA_on_off_light y HA_on_off_switch

La carpeta contiene ejemplos que demuestran el dispositivo estándar HA de Zigbee

- `HA_on_off_light` es un ejemplo estándar de bombilla de luz de encendido/apagado HA que demuestra el dispositivo final de Zigbee.

- `HA_on_off_switch` es un ejemplo estándar de interruptor de encendido/apagado HA que demuestra el rol de Coordinador de Zigbee. Proporciona un interruptor de encendido/apagado para controlar una luz de encendido/apagado HA de Zigbee.

En este tutorial, profundizaremos en dos programas de ejemplo proporcionados por el SDK ESP Zigbee: `HA_on_off_light` y `HA_on_off_switch`. Al analizar la estructura del código y la organización de estos ejemplos, obtendremos una comprensión integral de cómo desarrollar aplicaciones de dispositivos Zigbee.

```
- esp_zigbee_HA_sample/
    - HA_on_off_light/
        - main/
          - CMakeLists.txt
          - esp_zb_light.c
          - esp_zb_light.h
          - idf_component.yml
        - CMakeLists.txt
        - partitions.csv
        - sdkconfig.defaults
        ...
    - HA_on_off_switch/
        - main/
          - CMakeLists.txt
          - esp_zb_switch.c
          - esp_zb_switch.h
          - idf_component.yml
        - CMakeLists.txt
        - partitions.csv
        - sdkconfig.defaults
        ...
```

1. esp_zigbee_HA_sample/: Este directorio contiene los proyectos de muestra de Automatización del Hogar (HA) proporcionados por el SDK ESP Zigbee.

2. HA_on_off_light/: Este subdirectorio representa el proyecto de ejemplo "On/Off Light".
   - main/: Este directorio contiene los archivos fuente principales para el ejemplo "On/Off Light".
     - CMakeLists.txt: Este archivo es utilizado por el sistema de construcción CMake para especificar los archivos fuente y dependencias para el ejemplo "On/Off Light".
     - esp_zb_light.c: Este archivo contiene el código de implementación principal para el dispositivo de luz Zigbee, incluyendo inicialización, manejo de eventos y comunicación con otros dispositivos Zigbee.
     - esp_zb_light.h: Este archivo de cabecera contiene las declaraciones de funciones necesarias, constantes y estructuras de datos para el dispositivo de luz Zigbee.
     - idf_component.yml: Este archivo es el archivo de configuración del componente ESP-IDF, que especifica las dependencias del componente y configuraciones de construcción para el ejemplo "On/Off Light".
   - CMakeLists.txt: Este archivo es el archivo CMakeLists de nivel superior para el proyecto de ejemplo "On/Off Light", que incluye la configuración necesaria y objetivos de construcción.
   - partitions.csv: Este archivo define la tabla de particiones para el ejemplo "On/Off Light", especificando el diseño de memoria y tamaños de varias particiones como el bootloader, aplicación y almacenamiento.
   - sdkconfig.defaults: Este archivo contiene las configuraciones predeterminadas para el proyecto de ejemplo "On/Off Light", que pueden ser anuladas por el usuario.

3. HA_on_off_switch/: Este subdirectorio representa el proyecto de ejemplo "On/Off Switch".
   - main/: Este directorio contiene los archivos fuente principales para el ejemplo "On/Off Switch".
     - CMakeLists.txt: Similar al ejemplo "On/Off Light", este archivo es utilizado por el sistema de construcción CMake para especificar los archivos fuente y dependencias para el ejemplo "On/Off Switch".
     - esp_zb_switch.c: Este archivo contiene el código de implementación principal para el dispositivo interruptor Zigbee, incluyendo inicialización, manejo de eventos y comunicación con otros dispositivos Zigbee.
     - esp_zb_switch.h: Este archivo de cabecera contiene las declaraciones de funciones necesarias, constantes y estructuras de datos para el dispositivo interruptor Zigbee.
     - idf_component.yml: Este archivo es el archivo de configuración del componente ESP-IDF para el ejemplo "On/Off Switch".
   - CMakeLists.txt: Este es el archivo CMakeLists de nivel superior para el proyecto de ejemplo "On/Off Switch".
   - partitions.csv: Este archivo define la tabla de particiones para el ejemplo "On/Off Switch".
   - sdkconfig.defaults: Este archivo contiene las configuraciones predeterminadas para el proyecto de ejemplo "On/Off Switch".

Estos archivos trabajan juntos para proporcionar una implementación de ejemplo completa de dispositivos Zigbee usando el SDK ESP Zigbee. Los archivos .c y .h contienen la implementación real del código, mientras que los archivos CMakeLists.txt, partitions.csv y sdkconfig.defaults se utilizan para la configuración de construcción y particionado de memoria.

## Dispositivo Final Zigbee y Modelo de Datos Zigbee

En este tutorial, exploraremos cómo está estructurado el código de ejemplo de HA On/Off Light de Zigbee basado en el modelo de datos Zigbee. Al entender la relación entre el código y el modelo de datos, obtendrás conocimientos sobre cómo interpretar y modificar el código según tus requisitos específicos.

Antes de profundizar en el código, es esencial comprender los conceptos clave del modelo de datos Zigbee:

- **Nodo**: Un nodo representa un solo producto basado en ESP32-H2 y un nodo de red en la red Zigbee. Un nodo puede tener múltiples endpoints.

- **Endpoint**: Un endpoint, identificado por un número entre 1 y 240, define una aplicación ejecutándose en un nodo Zigbee. Un nodo puede tener múltiples endpoints, cada uno sirviendo un propósito diferente o representando un dispositivo separado.

- **Cluster**: Un cluster, identificado por un número de 16 bits, es un objeto de aplicación que define la funcionalidad y datos asociados con un endpoint. Los clusters contienen atributos y comandos.

- **Atributo**: Un atributo, identificado por un número de 16 bits, representa el estado actual o una cantidad física dentro de un cluster.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

Ahora, examinemos el código de ejemplo HA On/Off Light y veamos cómo se mapea al modelo de datos Zigbee.

1. Creando el Endpoint

En el código de ejemplo, la función `esp_zb_on_off_light_ep_create()` se utiliza para crear un endpoint de luz on/off HA. Esta función define el ID del endpoint, ID del dispositivo y los clusters asociados.

```cpp
static void esp_zb_task(void *pvParameters)
{
    /* initialize Zigbee stack */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_main_loop_iteration();
}
```

2. Registrando el Dispositivo

Después de crear el endpoint, se llama a la función `esp_zb_device_register()` para registrar el dispositivo Zigbee con el endpoint creado.

```cpp
esp_zb_device_register(esp_zb_on_off_light_ep);
```

3. Callback de Atributo

El código de ejemplo registra un callback de cambio de atributo usando `esp_zb_core_action_handler_register()`. Este callback se invoca cuando ciertos atributos son modificados, permitiéndote manejar cambios de atributos basados en la lógica de tu aplicación.

```cpp
esp_zb_core_action_handler_register(zb_action_handler);
```

En la función `zb_action_handler`, puedes implementar el comportamiento deseado cuando el atributo de encendido/apagado cambia, como controlar la luz LED.

4. Configuración e Inicio del Stack Zigbee

El código de ejemplo configura el dispositivo final Zigbee usando `ESP_ZB_ZED_CONFIG()` e inicializa el stack Zigbee usando `esp_zb_init()`. Luego se inicia el stack con `esp_zb_start()`, y el bucle principal es manejado por `esp_zb_main_loop_iteration()`.

```cpp
esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
esp_zb_init(&zb_nwk_cfg);
...
ESP_ERROR_CHECK(esp_zb_start(false));
esp_zb_main_loop_iteration();
```

La función `esp_zb_app_signal_handler` es responsable de manejar varias señales de la capa de aplicación Zigbee.

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            /* commissioning failed */
            ESP_LOGW(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Joined network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
        } else {
            ESP_LOGI(TAG, "Network steering was not successful (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_STEERING, 1000);
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}
```

1. Primero, la función recupera el tipo de señal `sig_type` y el estado de error `err_status` de la estructura `esp_zb_app_signal_t` pasada.

2. Luego, utiliza una declaración switch para realizar diferentes acciones basadas en el tipo de señal:

   - `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`: Esta señal indica omitir el inicio de la pila de Zigbee. En este caso, inicializamos la pila de Zigbee y luego llamamos a la función `esp_zb_bdb_start_top_level_commissioning` para iniciar el proceso de comisionado de nivel superior con el modo establecido en `ESP_ZB_BDB_MODE_INITIALIZATION`.

   - `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` y `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`: Estas señales indican el primer inicio o reinicio del dispositivo. Si el estado de error es `ESP_OK`, realizamos algunas tareas de inicialización, como la inicialización diferida del controlador. Luego, verificamos si el dispositivo está en el estado de fábrica nuevo. Si lo está, iniciamos el proceso de dirección de red; de lo contrario, mostramos un mensaje indicando que el dispositivo se ha reiniciado. Si el estado de error no es `ESP_OK`, mostramos un mensaje indicando que la inicialización de la pila de Zigbee falló.

   - `ESP_ZB_BDB_SIGNAL_STEERING`: Esta señal indica el resultado del proceso de dirección de red. Si el estado de error es `ESP_OK`, significa que el dispositivo se unió exitosamente a la red. En este caso, mostramos información de la red, como el ID de PAN, número de canal y dirección corta. Si el estado de error no es `ESP_OK`, significa que la dirección de red falló, y mostramos un mensaje de error. Luego, usamos la función `esp_zb_scheduler_alarm` para establecer un temporizador para reiniciar el proceso de dirección de red después de un retraso de 1 segundo.

   - Otras señales: Simplemente mostramos el nombre de la señal, tipo y estado de error.

El propósito de esta función es realizar acciones apropiadas basadas en diferentes señales de la capa de aplicación de Zigbee. Es una de las partes centrales de una aplicación Zigbee. Maneja procesos críticos como el inicio del dispositivo, inicialización y unión a la red.

## Coordinador Zigbee

Para el dispositivo Coordinador Zigbee, su inicialización y tareas RTOS son similares al Dispositivo Final, excepto que en las tareas RTOS, hay menos pasos de registro de la función de callback.

Así que para el Coordinador Zigbee, la parte más crítica es buscar y hacer coincidir el dispositivo correspondiente, y emitir comandos de control al dispositivo.

```cpp
void esp_zb_app_signal_handler(esp_zb_app_signal_t *signal_struct)
{
    uint32_t *p_sg_p       = signal_struct->p_app_signal;
    esp_err_t err_status = signal_struct->esp_err_status;
    esp_zb_app_signal_type_t sig_type = *p_sg_p;
    esp_zb_zdo_signal_device_annce_params_t *dev_annce_params = NULL;
    switch (sig_type) {
    case ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP:
        ESP_LOGI(TAG, "Initialize Zigbee stack");
        esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_INITIALIZATION);
        break;
    case ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START:
    case ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Deferred driver initialization %s", deferred_driver_init() ? "failed" : "successful");
            ESP_LOGI(TAG, "Device started up in %s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : "non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network formation");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_FORMATION);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGE(TAG, "Failed to initialize Zigbee stack (status: %s)", esp_err_to_name(err_status));
        }
        break;
    case ESP_ZB_BDB_SIGNAL_FORMATION:
        if (err_status == ESP_OK) {
            esp_zb_ieee_addr_t extended_pan_id;
            esp_zb_get_extended_pan_id(extended_pan_id);
            ESP_LOGI(TAG, "Formed network successfully (Extended PAN ID: %02x:%02x:%02x:%02x:%02x:%02x:%02x:%02x, PAN ID: 0x%04hx, Channel:%d, Short Address: 0x%04hx)",
                     extended_pan_id[7], extended_pan_id[6], extended_pan_id[5], extended_pan_id[4],
                     extended_pan_id[3], extended_pan_id[2], extended_pan_id[1], extended_pan_id[0],
                     esp_zb_get_pan_id(), esp_zb_get_current_channel(), esp_zb_get_short_address());
            esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
        } else {
            ESP_LOGI(TAG, "Restart network formation (status: %s)", esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb, ESP_ZB_BDB_MODE_NETWORK_FORMATION, 1000);
        }
        break;
    case ESP_ZB_BDB_SIGNAL_STEERING:
        if (err_status == ESP_OK) {
            ESP_LOGI(TAG, "Network steering started");
        }
        break;
    case ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE:
        dev_annce_params = (esp_zb_zdo_signal_device_annce_params_t *)esp_zb_app_signal_get_params(p_sg_p);
        ESP_LOGI(TAG, "New device commissioned or rejoined (short: 0x%04hx)", dev_annce_params->device_short_addr);
        esp_zb_zdo_match_desc_req_param_t  cmd_req;
        cmd_req.dst_nwk_addr = dev_annce_params->device_short_addr;
        cmd_req.addr_of_interest = dev_annce_params->device_short_addr;
        /* find color dimmable light once device joining the network */
        esp_zb_zdo_find_color_dimmable_light(&cmd_req, user_find_cb, NULL);
        break;
    case ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS:
        if (err_status == ESP_OK) {
            if (*(uint8_t *)esp_zb_app_signal_get_params(p_sg_p)) {
                ESP_LOGI(TAG, "Network(0x%04hx) is open for %d seconds", esp_zb_get_pan_id(), *(uint8_t *)esp_zb_app_signal_get_params(p_sg_p));
            } else {
                ESP_LOGW(TAG, "Network(0x%04hx) closed, devices joining not allowed.", esp_zb_get_pan_id());
            }
        }
        break;
    default:
        ESP_LOGI(TAG, "ZDO signal: %s (0x%x), status: %s", esp_zb_zdo_signal_to_string(sig_type), sig_type,
                 esp_err_to_name(err_status));
        break;
    }
}
```

Revisemos los diferentes casos y sus funcionalidades:

1. `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`:
   - Esta señal indica que la inicialización de la pila de Zigbee debe omitirse.
   - Registra un mensaje indicando la inicialización de la pila de Zigbee.
   - Inicia el proceso de puesta en servicio de nivel superior con el modo establecido en `ESP_ZB_BDB_MODE_INITIALIZATION`.

2. `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` y `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`:
   - Estas señales indican que el dispositivo se ha iniciado por primera vez o se ha reiniciado.
   - Si el estado de error es `ESP_OK`, registra mensajes sobre el estado de inicialización diferida del controlador y si el dispositivo se inició en modo de restablecimiento de fábrica o no.
   - Si el dispositivo está en modo factory-new, inicia el proceso de formación de red llamando a `esp_zb_bdb_start_top_level_commissioning` con el modo establecido en `ESP_ZB_BDB_MODE_NETWORK_FORMATION`.
   - Si el dispositivo no está en modo factory-new, registra un mensaje indicando que el dispositivo se ha reiniciado.
   - Si el estado de error no es `ESP_OK`, registra un mensaje de error.

3. `ESP_ZB_BDB_SIGNAL_FORMATION`:
   - Esta señal indica el estado del proceso de formación de red.
   - Si el estado de error es `ESP_OK`, recupera el PAN ID extendido, registra información sobre la red formada (PAN ID, canal, dirección corta), e inicia el proceso de dirección de red llamando a `esp_zb_bdb_start_top_level_commissioning` con el modo establecido en `ESP_ZB_BDB_MODE_NETWORK_STEERING`.
   - Si el estado de error no es `ESP_OK`, registra un mensaje para reiniciar la formación de red y programa una alarma para llamar a `bdb_start_top_level_commissioning_cb` después de un retraso de 1000 milisegundos.

4. `ESP_ZB_BDB_SIGNAL_STEERING`:
   - Esta señal indica el estado del proceso de dirección de red.
   - Si el estado de error es `ESP_OK`, registra un mensaje indicando que la dirección de red ha comenzado.

5. `ESP_ZB_ZDO_SIGNAL_DEVICE_ANNCE`:
   - Esta señal se activa cuando un nuevo dispositivo es puesto en servicio o se reúne a la red.
   - Recupera los parámetros de anuncio del dispositivo y registra un mensaje con la dirección corta del nuevo dispositivo.
   - Prepara una solicitud de descriptor de coincidencia (`esp_zb_zdo_match_desc_req_param_t`) con el destino y la dirección de interés establecidos en la dirección corta del nuevo dispositivo.
   - Llama a `esp_zb_zdo_find_color_dimmable_light` para encontrar un dispositivo de luz regulable en color y especifica `user_find_cb` como la función de callback.

6. `ESP_ZB_NWK_SIGNAL_PERMIT_JOIN_STATUS`:
   - Esta señal indica el estado del estado de permitir unirse de la red.
   - Si el estado de error es `ESP_OK`, registra un mensaje indicando si la red está abierta para unirse y la duración por la cual está abierta. Si la red está cerrada, registra un mensaje de advertencia.

7. Caso por defecto:
   - Para cualquier otro tipo de señal, registra un mensaje general con el tipo de señal y el estado de error.

En general, este código maneja varios eventos relacionados con Zigbee y realiza acciones como inicializar la pila de Zigbee, formar una red, dirigir la red, manejar anuncios de dispositivos y encontrar dispositivos de luz regulable en color.

El resto del ejemplo aborda la lógica para la estabilización de pulsaciones de teclas e interrupciones de pulsaciones de teclas. Si estás interesado, puedes leerlo y entenderlo por ti mismo.

## Solución de problemas

### P1: Continúo teniendo problemas con ESP_ZB_ON_OFF_LIGHT: La dirección de red no fue exitosa para coincidir con otro XIAO

En primer lugar, por favor soluciona la versión de ESP-IDF que estás usando, asegúrate de que estás usando **ESP-IDF v5.1.3** para compilar la aplicación de muestra de Zigbee, si no es así, por favor cambia la versión de IDF.

A continuación, intenta volver a conectar el dispositivo. Puedes intentar encender primero el dispositivo que tiene el programa **HA_on_off_switch** cargado, y luego encender el dispositivo que tiene el programa **HA_on_off_light** cargado.

Si aún no funciona, por favor borra toda la flash y carga el programa nuevamente.

```
idf.py erase_flash flash monitor
```

Si nada de lo anterior funciona, envía un problema a Espressif.

### P2: ¿Qué debo hacer si quiero emparejar un nuevo dispositivo después de un emparejamiento exitoso?

Usar directamente el comando flash uploader no borrará los registros de emparejamiento históricos guardados por flash. Por favor, usa el siguiente comando para volver a cargar el programa para emparejar el nuevo dispositivo.

```
idf.py erase_flash flash monitor
```

## Recursos

- **[Documentos Oficiales de Espressif]** [Desarrollando con ESP Zigbee SDK](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32/developing.html)
- **[GITHUB]** [Repositorio del SDK de Zigbee](https://github.com/espressif/esp-zigbee-sdk)

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
