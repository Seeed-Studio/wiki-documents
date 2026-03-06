---
title: Guía de Inicio Rápido de Zigbee para Seeed Studio XIAO ESP32C5 (ESP-IDF)
description: ''
keywords:
  - xiao
  - esp32c5
  - zigbee
  - idf
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_0_1.webp
slug: /xiao_esp32c5_zigbee_idf
sku: 100010048
last_update:
  date: 1/9/2026
  author: Zeller
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/xiao_esp32c5_zigbee_idf/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Guía de Inicio Rápido de Zigbee para Seeed Studio XIAO ESP32-C5 (ESP-IDF)

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_1_1.png" style={{width:800, height:'auto'}}/></div>

Zigbee es un protocolo de comunicación inalámbrica ampliamente adoptado que encuentra un uso extensivo en automatización del hogar, gestión inteligente de energía y aplicaciones de Internet de las Cosas (IoT). Conocido por su bajo consumo de energía, transmisión de datos confiable y capacidades de red en malla, Zigbee es una excelente opción para construir redes inalámbricas escalables y eficientes.

En este tutorial, nos embarcaremos en un viaje para explorar el desarrollo de aplicaciones Zigbee utilizando la placa de desarrollo XIAO ESP32-C5. El XIAO ESP32-C5 es una placa compacta pero potente que cuenta con el chip ESP32-C5, que ofrece conectividad integrada Wi-Fi y Bluetooth Low Energy (BLE). Al aprovechar el ESP Zigbee SDK, podemos aprovechar todo el potencial del XIAO ESP32-C5 y extender sus capacidades para incluir funcionalidad Zigbee.

Para profundizar en el desarrollo de Zigbee, nos enfocaremos en dos programas de ejemplo proporcionados por el ESP Zigbee SDK: HA_on_off_light y HA_on_off_switch. Estos ejemplos muestran la implementación de un dispositivo de luz Zigbee y un dispositivo de interruptor Zigbee, respectivamente. Al examinar minuciosamente la estructura del código, los modelos de datos y los principios de funcionamiento detrás de estos ejemplos, obtendremos una comprensión integral del desarrollo de dispositivos Zigbee.

A lo largo de este tutorial, cubriremos los siguientes aspectos clave:

1. Configuración del entorno de desarrollo para XIAO ESP32-C5 y ESP Zigbee SDK.
2. Análisis de la estructura del código y organización de los ejemplos HA_on_off_light y HA_on_off_switch.
3. Comprensión de los modelos de datos de dispositivos Zigbee y cómo se definen dentro del código.
4. Exploración del proceso de inicialización y mecanismos de manejo de eventos en dispositivos Zigbee.
5. Examen de los patrones de comunicación e intercambios de mensajes entre dispositivos Zigbee.

Al final de este tutorial, habrás obtenido una base sólida en el desarrollo de Zigbee utilizando el XIAO ESP32-C5 y ESP Zigbee SDK. Armado con este conocimiento y habilidades prácticas, estarás bien preparado para crear tus propios proyectos basados en Zigbee y contribuir al ecosistema en constante crecimiento de dispositivos Zigbee.

¡Así que embarquémonos en este emocionante viaje de desarrollo de Zigbee con el XIAO ESP32-C5 y desbloqueemos todo el potencial de este poderoso protocolo de comunicación inalámbrica!

## Preparación del Hardware

Necesitas preparar dos placas XIAO ESP32-C5 y algunos accesorios.

<table align="center">
 <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
        <th>Seeed Studio Grove Base para XIAO </th>
        <th>Grove - LED de Color Variable</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

## Configuración del Entorno

En este tutorial, te guiaremos a través de la implementación de funcionalidad Zigbee en el Seeed Studio XIAO ESP32C5. Necesitarás instalar el framework ESP-IDF y ESP-Zigbee SDK de antemano.

:::tip
Este ejemplo está basado en el sistema Ubuntu (Linux). Si estás usando un sistema diferente, por favor consulta la documentación oficial de Espressif para ajustes. [Guía de Programación ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/index.html)
:::

### Instalación del ESP-IDF SDK

Para usar el Zigbee SDK, primero necesitas configurar el entorno de desarrollo ESP-IDF. Ingresa los siguientes comandos en la terminal del sistema Ubuntu.

```bash
mkdir esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
git checkout v5.5.1
git submodule update --init --recursive
./install.sh
source ./export.sh
cd ..
```

Si estás usando un sistema diferente, por favor haz clic en el botón de abajo para visitar el sitio web de Espressif para más información.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/index.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Ir a la Página 🖱️</font></span></strong>
    </a>
</div><br/>

:::tip
Recomendamos usar **ESP-IDF v5.3.2 o posterior para el desarrollo**. Este tutorial usa **v5.5.1**, que ha sido probado y confirmado que funciona.
:::

### Instalación del Zigbee SDK

Clona el `esp-zigbee-sdk` :

```bash
cd ~/esp
git clone https://github.com/espressif/esp-zigbee-sdk.git
```

## Programación de Software

Modificaremos y usaremos dos ejemplos del esp-zigbee-sdk: `HA_on_off_light` y `HA_on_off_switch`. Ambos están ubicados en el directorio `esp-zigbee-sdk/examples/esp_zigbee_HA_sample`.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_2.png" style={{width:800, height:'auto'}}/></div>

### Modificando HA_on_off_light

**Paso 1.** Abre la carpeta `main` en el directorio del ejemplo `HA_on_off_light`.

```bash
cd ~/esp/esp-zigbee-sdk/examples/esp_zigbee_HA_sample/HA_on_off_light/main
```

**Paso 2.** Modifica el contenido de `esp_zb_light.c` bajo la carpeta `main`

En el ejemplo `HA_on_off_light`, el pin GPIO predeterminado para controlar la luz es **GPIO27**, que es el mismo pin usado para controlar el LED USER en el XIAO ESP32-C5. Para un efecto de visualización más intuitivo, cámbialo a **GPIO1** y haz otras modificaciones simples en consecuencia.

<details>

<summary>esp_zb_light.c</summary>

```cpp
#include "esp_zb_light.h"
#include "esp_check.h"
#include "esp_log.h"
#include "nvs_flash.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "ha/esp_zigbee_ha_standard.h"

#if !defined ZB_ED_ROLE
#error Define ZB_ED_ROLE in idf.py menuconfig to compile light (End Device) source code.
#endif

static const char *TAG = "ESP_ZB_ON_OFF_LIGHT";
#define MY_LED_GPIO  GPIO_NUM_1

// modify start
#include "driver/gpio.h"  // Include the GPIO driver header file(Modify)

// Define the default state of the light (off)  (Modify)
void light_driver_init(bool power);
void light_driver_set_power(bool power);

void light_driver_init(bool power)
{
    // Configure GPIO as output mode
    gpio_reset_pin(MY_LED_GPIO);
    gpio_set_direction(MY_LED_GPIO, GPIO_MODE_OUTPUT);
    // Initialization state
    light_driver_set_power(power);
}

// Rewrite the switch control function
void light_driver_set_power(bool power)
{
    // If your LED is on when it receives a high voltage, use: gpio_set_level(MY_LED_GPIO, power);
    // If your LED is on when it receives a low voltage 
    //(a common onboard LED), use: gpio_set_level(MY_LED_GPIO, ! power);

    gpio_set_level(MY_LED_GPIO, power); 

    ESP_LOGI("USER_DRIVER", "Light physical state changed to: %d", power);
}
// modify end

/********************* Define functions **************************/
static esp_err_t deferred_driver_init(void)
{
    static bool is_inited = false;
    if (!is_inited) {
        light_driver_init(LIGHT_DEFAULT_OFF);
        is_inited = true;
    }
    return is_inited ? ESP_OK : ESP_FAIL;
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
            ESP_LOGI(TAG, "Device started up in%s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : " non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGW(TAG, "%s failed with status: %s, retrying", esp_zb_zdo_signal_to_string(sig_type),
                     esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
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
                light_driver_set_power(light_state);
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
    zcl_basic_manufacturer_info_t info = {
        .manufacturer_name = ESP_MANUFACTURER_NAME,
        .model_identifier = ESP_MODEL_IDENTIFIER,
    };

    esp_zcl_utility_add_ep_basic_manufacturer_info(esp_zb_on_off_light_ep, HA_ESP_LIGHT_ENDPOINT, &info);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_stack_main_loop();
}

void app_main(void)
{
    esp_zb_platform_config_t config = {
        .radio_config = ESP_ZB_DEFAULT_RADIO_CONFIG(),
        .host_config = ESP_ZB_DEFAULT_HOST_CONFIG(),
    };
    ESP_ERROR_CHECK(nvs_flash_init());
    ESP_ERROR_CHECK(esp_zb_platform_config(&config));
    xTaskCreate(esp_zb_task, "Zigbee_main", 4096, NULL, 5, NULL);
}
```

</details>

**Paso 3.** Flashear el Programa `HA_on_off_light`

Regresa al directorio `HA_on_off_light` y configura el chip objetivo como `esp32c5`:

```bash
cd ../
idf.py set-target esp32c5
```
<br/>

Ejecuta el siguiente comando para compilar el proyecto:

```bash
idf.py build
```

Si la compilación es exitosa, debería verse como la figura a continuación:

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_4.png" style={{width:800, height:'auto'}}/></div>

Conecta una de las placas XIAO ESP32-C5 a tu host Ubuntu. El puerto serie predeterminado suele ser /`dev/ttyACM0`.

:::tip
Puedes usar el comando de consulta para verificar qué puertos existen por defecto cuando no hay ningún XIAO conectado.

```bash
ls /dev/tty*
```

:::

En ESP-IDF, el comando para flashear es:

```bash
idf.py -p PORT flash
```

Reemplaza PORT con el nombre del puerto USB de tu XIAO ESP32-C5. Si PORT no está definido, idf.py intentará conectarse automáticamente usando un puerto USB disponible. Para este tutorial, el puerto de flasheo es `/dev/ttyACM0`:

```bash
idf.py -p /dev/ttyACM0
```

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_5.png" style={{width:800, height:'auto'}}/></div>

Si no hay problemas al final del proceso de flasheo, el XIAO ESP32-C5 se reiniciará y lanzará la aplicación Zigbee Light.

### Flashear HA_on_off_switch

De manera similar, toma el otro XIAO ESP32-C5 y flashea el programa del interruptor. Los pasos son similares a los del flasheo de `HA_on_off_light`.
En el ejemplo `HA_on_off_switch`, el pin del interruptor es **GPIO28**, que es el mismo pin usado para controlar el botón BOOT en el XIAO ESP32-C5.

```bash
cd ../HA_on_off_switch
idf.py set-target esp32c5
idf.py build
idf.py -p PORT flash
```

Si el flasheo es exitoso, puedes controlar el LED en el otro XIAO ESP32-C5 para encenderlo o apagarlo usando el botón BOOT.

### Resultado

Si las modificaciones del programa fueron exitosas y has flasheado los programas HA_on_off_switch y HA_on_off_light en las dos placas XIAO ESP32-C5, puedes abrir el monitor serie para ver información sobre la conexión en red de dispositivos Zigbee y comandos de control.

- El puerto serie imprime información de configuración. Después de que formen exitosamente una red Zigbee, imprimirán información de configuración, así como comandos de control y comandos recibidos. El lado izquierdo muestra el dispositivo HA_on_off_switch, y el lado derecho muestra el dispositivo HA_on_off_light.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_6.png" style={{width:1000, height:'auto'}}/></div>

- Presionar y mantener el botón BOOT puede alternar el LED en el otro XIAO ESP32-C5.

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/zigbee_result.gif" style={{width:600, height:'auto'}}/></div>
## Estructura del Programa de HA_on_off_light y HA_on_off_switch

La carpeta contiene ejemplos que demuestran dispositivos estándar Zigbee HA

- `HA_on_off_light` es un ejemplo estándar de bombilla de luz encendido/apagado HA que demuestra un dispositivo final Zigbee.

- `HA_on_off_switch` es un ejemplo estándar de interruptor encendido/apagado HA que demuestra el rol de Coordinador Zigbee. Proporciona un interruptor de encendido/apagado para controlar una luz encendido/apagado Zigbee HA.

En este tutorial, profundizaremos en dos programas de ejemplo proporcionados por el ESP Zigbee SDK: `HA_on_off_light` y `HA_on_off_switch`. Al analizar la estructura del código y la organización de estos ejemplos, obtendremos una comprensión integral de cómo desarrollar aplicaciones de dispositivos Zigbee.

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

1. esp_zigbee_HA_sample/: Este directorio contiene los proyectos de muestra de Home Automation (HA) proporcionados por el ESP Zigbee SDK.

2. HA_on_off_light/: Este subdirectorio representa el proyecto de ejemplo "On/Off Light".
   - main/: Este directorio contiene los archivos fuente principales para el ejemplo "On/Off Light".
     - CMakeLists.txt: Este archivo es usado por el sistema de compilación CMake para especificar los archivos fuente y dependencias para el ejemplo "On/Off Light".
     - esp_zb_light.c: Este archivo contiene el código de implementación principal para el dispositivo de luz Zigbee, incluyendo inicialización, manejo de eventos y comunicación con otros dispositivos Zigbee.
     - esp_zb_light.h: Este archivo de cabecera contiene las declaraciones de funciones necesarias, constantes y estructuras de datos para el dispositivo de luz Zigbee.
     - idf_component.yml: Este archivo es el archivo de configuración del componente ESP-IDF, que especifica las dependencias del componente y configuraciones de compilación para el ejemplo "On/Off Light".
   - CMakeLists.txt: Este archivo es el archivo CMakeLists de nivel superior para el proyecto de ejemplo "On/Off Light", que incluye la configuración necesaria y objetivos de compilación.
   - partitions.csv: Este archivo define la tabla de particiones para el ejemplo "On/Off Light", especificando el diseño de memoria y tamaños de varias particiones como el bootloader, aplicación y almacenamiento.
   - sdkconfig.defaults: Este archivo contiene las configuraciones predeterminadas para el proyecto de ejemplo "On/Off Light", que pueden ser sobrescritas por el usuario.

3. HA_on_off_switch/: Este subdirectorio representa el proyecto de ejemplo "On/Off Switch".
   - main/: Este directorio contiene los archivos fuente principales para el ejemplo "On/Off Switch".
     - CMakeLists.txt: Similar al ejemplo "On/Off Light", este archivo es usado por el sistema de compilación CMake para especificar los archivos fuente y dependencias para el ejemplo "On/Off Switch".
     - esp_zb_switch.c: Este archivo contiene el código de implementación principal para el dispositivo de interruptor Zigbee, incluyendo inicialización, manejo de eventos y comunicación con otros dispositivos Zigbee.
     - esp_zb_switch.h: Este archivo de cabecera contiene las declaraciones de funciones necesarias, constantes y estructuras de datos para el dispositivo de interruptor Zigbee.
     - idf_component.yml: Este archivo es el archivo de configuración del componente ESP-IDF para el ejemplo "On/Off Switch".
   - CMakeLists.txt: Este es el archivo CMakeLists de nivel superior para el proyecto de ejemplo "On/Off Switch".
   - partitions.csv: Este archivo define la tabla de particiones para el ejemplo "On/Off Switch".
   - sdkconfig.defaults: Este archivo contiene las configuraciones predeterminadas para el proyecto de ejemplo "On/Off Switch".

Estos archivos trabajan juntos para proporcionar una implementación de ejemplo completa de dispositivos Zigbee usando el ESP Zigbee SDK. Los archivos .c y .h contienen la implementación real del código, mientras que los archivos CMakeLists.txt, partitions.csv y sdkconfig.defaults se usan para configuración de compilación y particionado de memoria.

## Dispositivo Final Zigbee y Modelo de Datos Zigbee

En este tutorial, exploraremos cómo está estructurado el código de ejemplo Zigbee HA On/Off Light basado en el modelo de datos Zigbee. Al entender la relación entre el código y el modelo de datos, obtendrás conocimientos sobre cómo interpretar y modificar el código según tus requisitos específicos.

Antes de profundizar en el código, es esencial comprender los conceptos clave del modelo de datos Zigbee:

- **Nodo**: Un nodo representa un solo producto basado en ESP32-H2 y un nodo de red en la red Zigbee. Un nodo puede tener múltiples endpoints.

- **Endpoint**: Un endpoint, identificado por un número entre 1 y 240, define una aplicación ejecutándose en un nodo Zigbee. Un nodo puede tener múltiples endpoints, cada uno sirviendo un propósito diferente o representando un dispositivo separado.

- **Cluster**: Un cluster, identificado por un número de 16 bits, es un objeto de aplicación que define la funcionalidad y datos asociados con un endpoint. Los clusters contienen atributos y comandos.

- **Atributo**: Un atributo, identificado por un número de 16 bits, representa el estado actual o una cantidad física dentro de un cluster.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

Ahora, examinemos el código de ejemplo HA On/Off Light y veamos cómo se mapea al modelo de datos Zigbee.

1. Creando el Endpoint

En el código de ejemplo, la función `esp_zb_on_off_light_ep_create()` se usa para crear un endpoint de luz encendido/apagado HA. Esta función define el ID del endpoint, ID del dispositivo y los clusters asociados.

```cpp
static void esp_zb_task(void *pvParameters)
{
    /* initialize Zigbee stack */
    esp_zb_cfg_t zb_nwk_cfg = ESP_ZB_ZED_CONFIG();
    esp_zb_init(&zb_nwk_cfg);
    esp_zb_on_off_light_cfg_t light_cfg = ESP_ZB_DEFAULT_ON_OFF_LIGHT_CONFIG();
    esp_zb_ep_list_t *esp_zb_on_off_light_ep = esp_zb_on_off_light_ep_create(HA_ESP_LIGHT_ENDPOINT, &light_cfg);
    zcl_basic_manufacturer_info_t info = {
        .manufacturer_name = ESP_MANUFACTURER_NAME,
        .model_identifier = ESP_MODEL_IDENTIFIER,
    };

    esp_zcl_utility_add_ep_basic_manufacturer_info(esp_zb_on_off_light_ep, HA_ESP_LIGHT_ENDPOINT, &info);
    esp_zb_device_register(esp_zb_on_off_light_ep);
    esp_zb_core_action_handler_register(zb_action_handler);
    esp_zb_set_primary_network_channel_set(ESP_ZB_PRIMARY_CHANNEL_MASK);
    ESP_ERROR_CHECK(esp_zb_start(false));
    esp_zb_stack_main_loop();
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

En la función `zb_action_handler`, puedes implementar el comportamiento deseado cuando el atributo on/off cambie, como controlar la luz LED.

4. Configuración y Inicio del Stack Zigbee

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
            ESP_LOGI(TAG, "Device started up in%s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : " non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGW(TAG, "%s failed with status: %s, retrying", esp_zb_zdo_signal_to_string(sig_type),
                     esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
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

   - `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`: Esta señal indica omitir el inicio del stack Zigbee. En este caso, inicializamos el stack Zigbee y luego llamamos a la función `esp_zb_bdb_start_top_level_commissioning` para iniciar el proceso de comisionado de nivel superior con el modo establecido en `ESP_ZB_BDB_MODE_INITIALIZATION`.

   - `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` y `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`: Estas señales indican el primer inicio o reinicio del dispositivo. Si el estado de error es `ESP_OK`, realizamos algunas tareas de inicialización, como la inicialización diferida del controlador. Luego, verificamos si el dispositivo está en estado de fábrica nuevo. Si lo está, iniciamos el proceso de dirección de red; de lo contrario, mostramos un mensaje indicando que el dispositivo se ha reiniciado. Si el estado de error no es `ESP_OK`, mostramos un mensaje indicando que la inicialización del stack Zigbee falló.

   - `ESP_ZB_BDB_SIGNAL_STEERING`: Esta señal indica el resultado del proceso de dirección de red. Si el estado de error es `ESP_OK`, significa que el dispositivo se unió exitosamente a la red. En este caso, mostramos información de la red, como el ID PAN, número de canal y dirección corta. Si el estado de error no es `ESP_OK`, significa que la dirección de red falló, y mostramos un mensaje de error. Luego, usamos la función `esp_zb_scheduler_alarm` para establecer un temporizador para reiniciar el proceso de dirección de red después de un retraso de 1 segundo.

   - Otras señales: Simplemente mostramos el nombre de la señal, tipo y estado de error.

El propósito de esta función es realizar acciones apropiadas basadas en diferentes señales de la capa de aplicación Zigbee. Es una de las partes centrales de una aplicación Zigbee. Maneja procesos críticos como el inicio del dispositivo, inicialización y unión a la red.

## Coordinador Zigbee

Para el dispositivo Coordinador Zigbee, su inicialización y tareas RTOS son similares al Dispositivo Final, excepto que en las tareas RTOS, hay un paso menos de registrar la función de callback.

Así que para el Coordinador Zigbee, la parte más crítica es buscar y hacer coincidir el dispositivo correspondiente, y emitir comandos de control al dispositivo.

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
            ESP_LOGI(TAG, "Device started up in%s factory-reset mode", esp_zb_bdb_is_factory_new() ? "" : " non");
            if (esp_zb_bdb_is_factory_new()) {
                ESP_LOGI(TAG, "Start network steering");
                esp_zb_bdb_start_top_level_commissioning(ESP_ZB_BDB_MODE_NETWORK_STEERING);
            } else {
                ESP_LOGI(TAG, "Device rebooted");
            }
        } else {
            ESP_LOGW(TAG, "%s failed with status: %s, retrying", esp_zb_zdo_signal_to_string(sig_type),
                     esp_err_to_name(err_status));
            esp_zb_scheduler_alarm((esp_zb_callback_t)bdb_start_top_level_commissioning_cb,
                                   ESP_ZB_BDB_MODE_INITIALIZATION, 1000);
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

Revisemos los diferentes casos y sus funcionalidades:

1. `ESP_ZB_ZDO_SIGNAL_SKIP_STARTUP`:
   - Esta señal indica que se está manejando el paso de inicialización del stack Zigbee.
   - Registra un mensaje indicando la inicialización del stack Zigbee.
   - Inicia manualmente el proceso de comisionado de nivel superior con el modo establecido en `ESP_ZB_BDB_MODE_INITIALIZATION`.

2. `ESP_ZB_BDB_SIGNAL_DEVICE_FIRST_START` y `ESP_ZB_BDB_SIGNAL_DEVICE_REBOOT`:
   - Estas señales indican que el dispositivo ha terminado su inicialización BDB (iniciado por primera vez o reiniciado).
   - Si el estado de error es `ESP_OK`:
     - Registra mensajes sobre el estado de inicialización diferida del controlador y verifica si el dispositivo está en modo de restablecimiento de fábrica.
     - Si el dispositivo es nuevo de fábrica: Registra **Iniciar dirección de red** y comienza el proceso de **dirección de red** (intentando unirse a una red existente) llamando a `esp_zb_bdb_start_top_level_commissioning` con `ESP_ZB_BDB_MODE_NETWORK_STEERING`.
     - Si el dispositivo no es nuevo de fábrica: Registra que el dispositivo se ha reiniciado (implicando que retiene credenciales de red previas).
   - Si el estado de error no es `ESP_OK`:
     - Registra un mensaje de advertencia y programa un reintento de la inicialización BDB después de 1000 milisegundos.

3. `ESP_ZB_BDB_SIGNAL_STEERING`:
   - Esta señal indica el **resultado** del proceso de dirección de red.
   - Si el estado de error es `ESP_OK`:
     - Indica que el dispositivo se ha **unido exitosamente a una red**.
     - Recupera el ID PAN extendido y registra información detallada de la red: "Se unió a la red exitosamente" (incluyendo ID PAN, Canal y Dirección Corta).
   - Si el estado de error no es `ESP_OK`:
     - Registra que la dirección de red no fue exitosa.
     - Programa un reintento del proceso de dirección (`ESP_ZB_BDB_MODE_NETWORK_STEERING`) después de 1000 milisegundos.

4. `Caso por defecto`:
   - Para cualquier otro tipo de señal no manejado explícitamente arriba, registra un mensaje general con el nombre de la señal y el estado de error para depuración.

En general, este código maneja varios eventos relacionados con Zigbee y realiza acciones como inicializar la pila Zigbee, formar una red, dirigir la red, manejar anuncios de dispositivos y encontrar dispositivos de luz regulable de color.

El resto del ejemplo aborda la lógica para la estabilización de pulsaciones de teclas y las interrupciones de pulsaciones de teclas. Si estás interesado, puedes leerlo y entenderlo por ti mismo.

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
