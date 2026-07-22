---
title: Primeros pasos con XIAO IR Mate Smart IR Remote
description: |
  Un mando a distancia IR inteligente de Seeed Studio, diseñado para integrar electrodomésticos tradicionales como televisores y aires acondicionados en tu ecosistema de hogar inteligente con Home Assistant.
image: https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO-Smart-IR-Mate.webp
slug: /XIAO_IR_Mate_Smart_IR_Remote
sku: 109990586
keywords:
  - XIAO
  - Home Assistant
  - Smart Home
sidebar_position: 5
last_update:
  author: TienjuiWong
  date: 07/17/2025
createdAt: '2025-07-18'
updatedAt: '2026-07-14'
url: https://wiki.seeedstudio.com/es/XIAO_IR_Mate_Smart_IR_Remote/
---


# Primeros pasos con XIAO IR Mate Smart IR Remote (Para Home Assistant)

Bienvenido a **XIAO IR Mate Smart IR Remote**\! Este dispositivo está especialmente diseñado para usuarios de Home Assistant, con el objetivo de proporcionar una solución de control remoto por infrarrojos inteligente, eficiente e integrada. A través de esta guía, aprenderás cómo configurar el dispositivo, conectarlo a tu red doméstica, integrarlo en Home Assistant y desbloquear todo su potencial, desde el aprendizaje básico de señales hasta el control avanzado de aire acondicionado inteligente.

<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/6-109990586-XIAO-Smart-IR-Mate.jpg"
    alt="Diagrama del producto"
    style={{
      maxWidth: '50%',
      height: 'auto',
      display: 'block',
      borderRadius: '8px'
    }}
  />
</div>

## Introducción

El **XIAO IR Mate** es un módulo compacto de infrarrojos inteligente basado en **Seeed Studio XIAO ESP32-C3**. Integra transmisión y recepción por infrarrojos, detección táctil, retroalimentación por vibración e indicación de estado. Conectado vía Wi-Fi, puede integrarse perfectamente en tu ecosistema de hogar inteligente con Home Assistant. Su misión principal es hacer "inteligentes" todos tus electrodomésticos tradicionales que usan mandos a distancia por infrarrojos (como televisores, aires acondicionados, ventiladores, etc.) y permitirte controlarlos mediante HA para automatizaciones.

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  alignItems: 'center'
}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/1-109990586-XIAO-Smart-IR-Mate.jpg" alt="Diagrama del producto XIAO Smart IR Mate 1" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/2-109990586-XIAO-Smart-IR-Mate.jpg" alt="Diagrama del producto XIAO Smart IR Mate 2" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/3-109990586-XIAO-Smart-IR-Mate.jpg" alt="Diagrama del producto XIAO Smart IR Mate 3" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/4-109990586-XIAO-Smart-IR-Mate.jpg" alt="Diagrama del producto XIAO Smart IR Mate 4" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/5-109990586-XIAO-Smart-IR-Mate.jpg" alt="Diagrama del producto XIAO Smart IR Mate 5" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/touch.jpg" alt="Diagrama del producto XIAO Smart IR Mate 6" />
</div>

- **Integración perfecta con Home Assistant**

Basado en la plataforma ESPHome, IR Mate es descubierto automáticamente por Home Assistant, ofreciendo entidades sencillas para automatizaciones y scripts sin esfuerzo.

- **Potente aprendizaje y transmisión IR**

Equipado con tres emisores IR de alta potencia para cobertura de 360° y un receptor de alta sensibilidad. Admite el aprendizaje de hasta 10 comandos IR de mandos estándar (por ejemplo, controlar proyectores, aires acondicionados, temporizadores) para su reproducción con un solo toque en Home Assistant.

- **Retroalimentación física intuitiva**

Incluye un motor de vibración y un LED indicador. Las vibraciones cortas confirman acciones, las vibraciones largas indican el modo de aprendizaje y el LED muestra el estado de la red, simplificando la configuración y la resolución de problemas.

- **Actualizable a un controlador de aire acondicionado inteligente avanzado**

Flashea firmware personalizado para transformar IR Mate en un mando inteligente para aire acondicionado. Configura temperatura, modo y velocidad del ventilador con precisión directamente en Home Assistant, con generación automática de códigos IR, eliminando el aprendizaje repetitivo.

- **Diseño compacto, alimentado por USB-C**

## Descripción general del hardware

Comprender los componentes básicos del dispositivo te ayudará a utilizarlo mejor:

- **Controlador principal**: Seeed Studio XIAO ESP32-C3, que proporciona un rendimiento potente y conectividad Wi-Fi.
- **Alimentación**: Alimentado a través del puerto Type-C integrado (5V).
- **Emisor de infrarrojos**: 3 LED de infrarrojos de alta potencia (usando el pin D1), que garantizan transmisión de señal de 360° sin puntos ciegos.
- **Receptor de infrarrojos**: 1 receptor de infrarrojos de alta precisión (usando el pin D2), para aprender señales de otros mandos.
- **Sensor táctil**: El dispositivo integra un módulo táctil (usando el pin D3). Un solo toque activa una vibración corta (0,5 segundos) como retroalimentación de operación.
- **Motor de vibración**: Un motor de vibración integrado (usando el pin D4) proporciona una clara retroalimentación táctil con diferentes duraciones de vibración.
- **LED indicador de estado**: Una luz LED (usando el pin D5) para indicar los diferentes estados de funcionamiento del dispositivo.
- **Botón de reinicio**: Un botón físico en el dispositivo (conectado al pin D0), utilizado para reiniciar o restaurar a valores de fábrica.

## Primer uso y configuración de red (Firmware de fábrica)

Cuando obtengas el dispositivo por primera vez, sigue estos pasos para completar la configuración inicial.

### Paso 1: Encender

Utiliza un cable USB Type-C estándar para alimentar el dispositivo. Después del arranque, el dispositivo entrará en un estado de espera de configuración y verás el **LED blanco parpadeando a una frecuencia de 1 Hz**.

### Paso 2: Entrar en modo de aprovisionamiento AP

Cuando la red no está configurada, el dispositivo creará automáticamente un punto de acceso Wi-Fi (AP) llamado **XIAO IR Mate** (o **Seeed_ir**, dependiendo de lo que encuentres).

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### Paso 3: Conectarse al punto de acceso y configurar la red

1. Abre la configuración de Wi-Fi en tu teléfono u ordenador, busca y conéctate a la red llamada **XIAO IR Mate**.

:::note
El punto de acceso tiene una contraseña de red predeterminada de ‘12345678’.
:::

2. Después de una conexión exitosa, tu dispositivo normalmente abrirá automáticamente una página de configuración. Si no lo hace, abre manualmente un navegador y visita **[http://192.168.4.1](http://192.168.4.1)**.
3. En esta página, verás una lista de redes Wi-Fi. Selecciona la **red Wi-Fi de 2,4 GHz (SSID)** de tu hogar e introduce la contraseña correcta.
4. Haz clic en "Connect" o "Save". El dispositivo intentará conectarse a la red Wi-Fi que proporcionaste.

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_02.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### Paso 4: Conexión exitosa

Una vez que el dispositivo se conecte correctamente a tu Wi-Fi doméstico, el punto de acceso AP se apagará automáticamente y la **luz indicadora de estado quedará fija encendida**. La configuración de red ya está completa.

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_03.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Integración con Home Assistant (Firmware de fábrica)

El firmware del dispositivo está basado en **ESPHome**, lo que hace que sea muy fácil integrarlo en Home Assistant.

1. **Descubrimiento automático**: Asegúrate de que tu host de Home Assistant y el XIAO IR Mate estén conectados a la misma red local. Normalmente, HA descubrirá automáticamente los nuevos dispositivos ESPHome. Verás una notificación en **Settings \> Devices & Services** que dice "New device discovered".
2. **Adición manual**: Si no se descubre automáticamente, puedes hacer clic en el botón **[Add Integration]** en la esquina inferior derecha, buscar **"ESPHome"** y luego introducir el nombre de host del dispositivo (por ejemplo, **xiao-ir-mate**) o la dirección IP para añadirlo manualmente.

<div style={{textAlign:'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_01.png"
    alt=""
    style={{width:1000, height:'auto'}}
  /><br />

  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_02.png"
    alt=""
    style={{width:1000, height:'auto'}}
  /><br />

  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_05.png"
    alt=""
    style={{width:800, height:'auto'}}
  /><br />

  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_06.png"
    alt=""
    style={{width:1000, height:'auto'}}
  />
</div>

3. **Panel del dispositivo**: Después de añadirlo correctamente, el XIAO IR Mate aparecerá como un dispositivo en HA. Su panel contendrá las siguientes entidades para controlar 10 señales de infrarrojos diferentes:

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_07.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Detalles de las funciones principales (Firmware de fábrica)

Si deseas restaurar tu dispositivo o actualizar su firmware, puedes ir a través del botón de abajo. Hemos creado una página dedicada al firmware de flasheo directo de XIAO Gadget.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://gadgets.seeed.cc/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Flash the Firmwave</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Aprendizaje de señales IR

Cuando necesites enseñar al IR Mate un nuevo comando del mando a distancia, sigue estos pasos. La interfaz principal del firmware de fábrica incluye una **lista de selección de ranuras de señal**, junto con los botones **Learn** y **Send**.

1. En el panel del dispositivo de Home Assistant, primero busca la lista desplegable de selección llamada **"Signal"**.
2. Haz clic en la lista desplegable y selecciona la ranura de señal que quieras usar, por ejemplo, **"signal_1"**.
3. Una vez seleccionada, busca el botón **"Learn"** y haz clic en **"PRESS"** junto a él.
4. El XIAO IR Mate entrará ahora en modo de aprendizaje y comenzará a **vibrar continuamente**, indicando que puedes empezar a emparejar.
5. Apunta tu mando original a la ventana del receptor de infrarrojos del IR Mate y pulsa brevemente el botón que quieras aprender.
6. Después de que el IR Mate reciba y registre la señal correctamente, la **vibración se detendrá**, lo que significa que el aprendizaje se ha realizado con éxito.
7. En este punto, un indicador de estado llamado **"Is Learned Signal"** se pondrá automáticamente en "ON", indicando que la ranura de señal actualmente seleccionada en la lista desplegable (es decir, "signal_1") ahora tiene una señal almacenada.

### Envío de señales IR

Una vez que se ha aprendido correctamente una señal, puedes enviarla en cualquier momento.

1. En la lista desplegable **"Signal"**, asegúrate de haber seleccionado la ranura de señal que deseas enviar, por ejemplo, **"signal_1"**.
2. Busca el botón **"Send"** y haz clic en **"PRESS"** junto a él.
3. El XIAO IR Mate transmitirá inmediatamente la señal almacenada en la ranura actualmente seleccionada a través de sus 3 emisores infrarrojos.
4. **Nota**: Si seleccionas en la lista desplegable una ranura de señal a la que nunca se le ha enseñado una señal, hacer clic en el botón de envío no tendrá ningún efecto.

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_08.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Interacción física e indicación de estado

Además del control desde HA, también puedes comprender y controlar el dispositivo mediante interacción física.

### Luz indicadora de estado (LED blanco)

- **Parpadeo lento (1Hz)**: El dispositivo está esperando conectarse a una red Wi‑Fi.
- **Encendido fijo**: El dispositivo está conectado correctamente a la red Wi‑Fi y funciona con normalidad.

### Retroalimentación por vibración

- **Vibración corta (100ms)**: Se utiliza para la confirmación de operaciones generales, como cuando se toca el dispositivo.
- **Vibración larga (500ms)**: Se utiliza para alertas de estado importantes, como al entrar en modo de aprendizaje o realizar un restablecimiento de fábrica.

### Botón RESET

- **Pulsación corta (dentro de 1 segundo)**: El dispositivo se reiniciará, acompañado de una vibración corta. Esto es muy útil si el dispositivo deja de responder.
- **Pulsación larga (más de 5 segundos)**: El dispositivo **realizará un restablecimiento de fábrica**. Esta acción **borrará todas las credenciales Wi‑Fi guardadas y las 10 señales infrarrojas aprendidas**. Cuando se realiza esta acción, el dispositivo emitirá una vibración larga como aviso. Tras completarse, el dispositivo se reiniciará y volverá al estado inicial de espera de configuración (LED parpadeando).

## Uso avanzado - Control inteligente de aire acondicionado

El modo básico de "grabación-reproducción" proporcionado por el firmware de fábrica es universal, pero puede resultar torpe al controlar dispositivos con múltiples estados como los aires acondicionados (temperatura, modo, velocidad del ventilador, etc.). Para lograr un control de aire acondicionado más fino e inteligente, podemos flashear un firmware especializado de ESPHome para transformar el XIAO IR Mate de un "repetidor de señales IR" en un verdadero "controlador inteligente de aire acondicionado".

En este capítulo, utilizaremos un aire acondicionado Gree como ejemplo detallado, pero esto no es en absoluto la única opción. El potente ecosistema de ESPHome admite numerosas marcas de aire acondicionado, y puedes seguir fácilmente los conceptos de esta guía, realizando pequeños cambios en el código de configuración, para lograr un control inteligente de otras marcas como Midea, Daikin, Panasonic y más.

### Ventajas principales

- **Control con estado**: No más simples reproducciones. Puedes establecer directamente "24°C, Frío, Ventilador automático" en HA, y el dispositivo generará y enviará inmediatamente el comando infrarrojo correcto.
- **Interfaz más amigable**: Aparece como una tarjeta de Clima estándar en HA, lo que hace que la operación sea intuitiva.
- **Ahorro de espacio**: No es necesario aprender una señal independiente para cada temperatura o modo; una sola configuración puede controlar todas las funciones del aire acondicionado.

### Requisitos previos

1. **Instalar ESPHome**: Si aún no lo has hecho, instala e inicia el complemento ESPHome desde la Tienda de complementos de Home Assistant.
2. **Obtener el protocolo de tu marca de aire acondicionado**: ESPHome admite muchos protocolos de marcas de aire acondicionado (como Gree, Midea, Daikin, etc.). Necesitas conocer la marca de tu aire acondicionado para seleccionar el protocolo correcto.

### Flasheo de firmware personalizado

1. **Crear una nueva configuración de dispositivo**
      - Abre la interfaz de ESPHome en HA.
      - Haz clic en el botón **"+ NEW DEVICE"** en la esquina inferior derecha y, en la ventana emergente, haz clic en **"Continue"**.
      - Nombra tu dispositivo (por ejemplo, **xiao-ir-ac-controller**) y luego selecciona el tipo de placa como **Seeed Studio XIAO ESP32C3**.
2. **Editar el archivo de configuración**
      - Haz clic en el botón **EDIT** en la tarjeta del dispositivo recién creado para entrar en el editor de configuración YAML.
      - Elimina todo el contenido predeterminado en el editor.
      - **Copia y pega completamente** el siguiente código en el editor:

<Details>

```yaml title="seeed-ir-v1.yaml"
substitutions:
  name: "seeed-ir"
  friendly_name: "Gree AC Controller" # You can customize a more friendly name
  version: "v1"

esphome:
  name: "${name}-${version}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: True

esp32:
  board: esp32-c3-devkitm-1
  framework:
    type: arduino

globals:
  - id: is_wifi_connected
    type: bool
    initial_value: 'false'
  - id: reset_press_time
    type: uint32_t
    initial_value: '0'
  - id: touch_count
    type: int
    restore_value: no
    initial_value: '0'
  - id: touch_timer
    type: unsigned long
    restore_value: no
    initial_value: '0'

logger:
  level: INFO

api:

ota:
  platform: esphome

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password
  on_connect:
    - globals.set: {id: is_wifi_connected, value: 'true'}
    - light.turn_on: rgb_light
  on_disconnect:
    - globals.set: {id: is_wifi_connected, value: 'false'}

captive_portal:

remote_transmitter:
  id: default_ir_transmitter
  pin: GPIO3
  carrier_duty_percent: 50%
  rmt_symbols: 48
  non_blocking: false

remote_receiver:
  id: default_ir_receiver
  pin:
    number: GPIO4
    inverted: true
  dump: raw # Keep for learning or debugging other infrared codes
  rmt_symbols: 96

# Gree Climate Control
climate:
  - platform: gree
    name: "Gree Air Conditioner" # The name displayed in Home Assistant
    id: gree_ac    # Internal ID used by ESPHome, for touch button control
    # --- Required configuration for the gree platform ---
    model: "yan"   # [IMPORTANT] This is a required parameter. Gree has multiple infrared protocols.
                   # You may need to try the following values to find the one that suits your air conditioner:
                   # "generic", "yan", "yaa", "yac", "yac1fb9", "yx1ff", "yag"
                   # "yan" is a common starting point.
    # Optional configuration:
    # sensor: my_temperature_sensor_id # If you have an external temperature sensor
    supports_cool: true
    supports_heat: true # If your Gree AC does not support heating, set to false
    # Note: According to the documentation, the gree platform does not seem to support receiver_id to sync the state from the original remote

binary_sensor:
  - platform: gpio
    id: touch_pad
    pin:
      number: GPIO5
      mode: INPUT_PULLDOWN
    on_state:
      then:
        - if:
            condition:
              binary_sensor.is_on: touch_pad
            then:
              - script.execute: vibe_short
              - lambda: |-
                  unsigned long current_time = millis();
                  if (current_time - id(touch_timer) < 300) {
                    id(touch_count)++;
                  } else {
                    id(touch_count) = 1;
                  }
                  id(touch_timer) = current_time;
                  ESP_LOGD("touch_pad", "Touch detected. Current count: %d", id(touch_count));
                  if (id(check_touch_actions_script).is_running()) {
                    id(check_touch_actions_script).stop();
                  }
                  id(check_touch_actions_script).execute();

  - platform: gpio
    id: reset_button
    pin:
      number: GPIO9 # Strapping Pin!
      mode: INPUT_PULLUP
    filters:
      - invert
    on_press:
      then:
        - lambda: id(reset_press_time) = millis();
    on_release:
      then:
        - lambda: |-
            uint32_t press_duration = millis() - id(reset_press_time);
            if (press_duration < 5000) {
              id(vibe_short).execute();
              ESP_LOGI("reset_button", "Short press: Restarting device.");
              ESP.restart();
            } else {
              id(vibe_long).execute();
              ESP_LOGI("reset_button", "Long press: Activating factory reset.");
              id(factory_reset_switch).turn_on();
            }

output:
  - platform: gpio
    id: vibration_output
    pin: GPIO6

switch:
  - platform: output
    id: vibration_switch
    name: "Vibration Motor"
    output: vibration_output
  - platform: factory_reset
    id: factory_reset_switch
    name: "Factory Reset"

light:
  - platform: esp32_rmt_led_strip
    rgb_order: GRB
    pin: GPIO7
    num_leds: 1
    rmt_symbols: 48
    chipset: ws2812
    name: "RGB Status Light"
    id: rgb_light
    default_transition_length: 0s
    on_turn_on:
      - light.control:
          id: rgb_light
          red: 1.0
          green: 1.0
          blue: 1.0
          brightness: 0.7
    effects:
      - addressable_scan:
      - addressable_rainbow:

script:
  - id: vibe_short
    then:
      - switch.turn_on: vibration_switch
      - delay: 100ms
      - switch.turn_off: vibration_switch
  - id: vibe_long
    then:
      - switch.turn_on: vibration_switch
      - delay: 500ms
      - switch.turn_off: vibration_switch

  - id: check_touch_actions_script
    mode: restart
    then:
      - delay: 350ms
      - if: # Single-click action
          condition:
            lambda: 'return id(touch_count) == 1;'
          then:
            - logger.log: "Single Click: Toggling Gree AC Power"
            - lambda: |-
                // [IMPORTANT] Ensure the climate ID used below is gree_ac
                if (id(gree_ac).mode == climate::CLIMATE_MODE_OFF) {
                  ESP_LOGD("touch_action", "Gree AC is OFF, attempting to turn to COOL mode.");
                  auto call = id(gree_ac).make_call();
                  call.set_mode(climate::CLIMATE_MODE_COOL);
                  call.set_target_temperature(25);
                  call.perform();
                } else {
                  ESP_LOGD("touch_action", "Gree AC is ON, attempting to turn OFF.");
                  auto call = id(gree_ac).make_call();
                  call.set_mode(climate::CLIMATE_MODE_OFF);
                  call.perform();
                }
          else: # If not a single click, then check for a double click
            - if:
                condition:
                  lambda: 'return id(touch_count) == 2;'
                then: # Double-click action
                  - logger.log: "Double Click: Gree AC Temperature Up"
                  - lambda: |-
                      // [IMPORTANT] Ensure the climate ID used below is gree_ac
                      if (id(gree_ac).mode != climate::CLIMATE_MODE_OFF) {
                        float current_temp = id(gree_ac).target_temperature;
                        float max_temp = id(gree_ac).get_traits().get_visual_max_temperature();
                        if (current_temp < max_temp) {
                           ESP_LOGD("touch_action", "Increasing Gree AC temp from %.1f to %.1f", current_temp, current_temp + 1.0f);
                           auto call = id(gree_ac).make_call();
                           call.set_target_temperature(current_temp + 1.0f);
                           call.perform();
                        } else {
                          ESP_LOGD("touch_action", "Gree AC already at max temp: %.1f", max_temp);
                        }
                      }
                else: # If not a double click, then check for a triple click
                  - if:
                      condition:
                        lambda: 'return id(touch_count) == 3;'
                      then: # Triple-click action
                        - logger.log: "Triple Click: Gree AC Temperature Down"
                        - lambda: |-
                            // [IMPORTANT] Ensure the climate ID used below is gree_ac
                            if (id(gree_ac).mode != climate::CLIMATE_MODE_OFF) {
                              float current_temp = id(gree_ac).target_temperature;
                              float min_temp = id(gree_ac).get_traits().get_visual_min_temperature();
                              if (current_temp > min_temp) {
                                 ESP_LOGD("touch_action", "Decreasing Gree AC temp from %.1f to %.1f", current_temp, current_temp - 1.0f);
                                 auto call = id(gree_ac).make_call();
                                 call.set_target_temperature(current_temp - 1.0f);
                                 call.perform();
                              } else {
                                ESP_LOGD("touch_action", "Gree AC already at min temp: %.1f", min_temp);
                              }
                            }
                      else: # Other click counts
                        - logger.log:
                            level: WARN
                            format: "Touch Action: No specific action defined for %d clicks."
                            args: ['id(touch_count)']
      # Reset the touch count
      - lambda: 'id(touch_count) = 0; ESP_LOGD("check_touch_actions", "Touch count reset to 0.");'

interval:
  - id: blink_rgb_interval
    interval: 500ms
    then:
      - if:
          condition:
            lambda: 'return !id(is_wifi_connected);'
          then:
            - lambda: |-
                static bool intervalos_led_state = false;
                intervalos_led_state = !intervalos_led_state;
                auto call = id(rgb_light).turn_on();
                if (intervalos_led_state) {
                  call.set_rgb(0, 0, 1);
                  call.set_brightness(0.5);
                } else {
                  call.set_rgb(0, 0, 0); // Off
                }
                call.perform();
```

</Details>

3. **Personaliza tu configuración**
      - **Wi-Fi**: Si no utilizas archivos `!secret`, descomenta la sección `wifi:` y reemplaza `Your_WiFi_SSID` y `Your_WiFi_Password` con la información de tu propia red Wi‑Fi.
      - **Selecciona el protocolo de CA correcto**: ¡Este es el paso más crítico\! El ejemplo usa `platform: gree`. Si tu aire acondicionado no es Gree, reemplázalo con la plataforma de tu marca. ¿Cómo encontrar las marcas compatibles? Visita la página de [Componentes de Clima de ESPHome](https://esphome.io/components/climate/index.html), que enumera todas las marcas compatibles y los nombres de sus plataformas (por ejemplo, `daikin`, `midea`, `panasonic_ac`, etc.).
          - Después de seleccionar la plataforma correspondiente, es posible que también necesites ajustar parámetros como `model` o los modos compatibles según la documentación de esa plataforma.
4. **Compilar y flashear**
      - Guarda tu configuración YAML.
      - Conecta tu XIAO IR Mate al ordenador que ejecuta HA mediante un cable USB.
      - Haz clic en el botón **INSTALL** en la tarjeta del dispositivo.
      - Selecciona la opción **"Plug into this computer"**.
      - ESPHome compilará el firmware y lo flasheará en tu dispositivo a través del navegador. Sigue las indicaciones en pantalla para completar el proceso.
      - Tras un flasheo correcto, el dispositivo se reiniciará automáticamente y se conectará a la red Wi‑Fi que configuraste.

### Uso en Home Assistant

Después de flashear y reiniciar, tu dispositivo aparecerá en Home Assistant como una nueva entidad de Clima (por ejemplo, `climate.gree_air_conditioner`). Puedes añadir una "Tarjeta de Termostato" a tu panel para obtener un panel de control de aire acondicionado totalmente funcional, que te permita ajustar libremente la temperatura, el modo, la velocidad del ventilador y el oscilamiento, ¡igual que un aire acondicionado inteligente nativo\!

### Mirando más allá: abre tu mente

¡Enhorabuena! A estas alturas ya dominas los dos usos principales del XIAO IR Mate: uno es la función "aprendizaje de mando universal" lista para usar, y el otro es el modo de "controlador de clima profesional" para un control preciso del aire acondicionado.

Pero no te detengas aquí, porque esto es solo el comienzo. La verdadera diversión del XIAO IR Mate reside en su increíble flexibilidad. Piénsalo como un "bloque de construcción creativo" definido por ti, que puedes usar para crear cosas mucho más allá de tu imaginación. Aquí tienes dos ideas que te abrirán la mente para inspirarte:

#### Idea 1: Revive mandos antiguos como interruptores universales de escenas

**Escenario de aplicación**

Mira a tu alrededor. ¿Tienes muchos mandos antiguos sin usar por ahí? Mandos de televisores, reproductores de DVD o equipos de música antiguos, con un montón de botones y una gran sensación al tacto, que ahora solo acumulan polvo en un cajón. ¿No sería genial poder usar los botones de esos mandos para controlar tus luces inteligentes, el robot aspirador o incluso complejas escenas de "bienvenida a casa"?

**Cómo funciona**

La esencia de esta idea es transformar el XIAO IR Mate de un "transmisor" a un "oyente". Ya no controla activamente otros dispositivos, sino que escucha en silencio las señales de cualquier mando antiguo y luego le dice a Home Assistant: "He oído una señal, ¡tú decides qué hacer!"

- **Pasos de implementación**

  1. **Configura un firmware de "oyente":** En tu firmware de ESPHome, la configuración principal es el componente `remote_receiver`. La única tarea del dispositivo tras encenderse es "prestar atención" a las señales IR.

  2. **Identifica el "código secreto" de cada botón:** Coge un mando antiguo y pulsa cualquier botón apuntando al dispositivo. En los registros de ESPHome verás el código IR único del botón (como una cadena de datos `RAW` o un código de protocolo `NEC`). Anota este "código secreto".

  3. **Crea reglas de automatización en HA:** En Home Assistant, configura una automatización con la condición de disparo: "Cuando XIAO IR Mate detecte un código secreto IR específico".

  4. **Define la acción:** ¡La acción de la regla puede ser cualquier cosa! Por ejemplo:

     - Cuando detecte el **botón "Volume +" del mando de la TV** -> **Inicia el robot aspirador** para comenzar la limpieza.

     - Cuando detecte el **botón "Play" de un Apple Remote** -> **Enciende la luz del baño**.

     - Cuando detecte el **botón "Red" del mando del DVD** -> Ejecuta la escena "Modo Ausente".

- **Ventajas de este enfoque**

  - **Reutilización y respeto al medio ambiente:** Da nueva vida a hardware en desuso, devolviendo a la actividad residuos electrónicos, lo que ahorra dinero y es bueno para el medio ambiente.

  - **Verdadera experiencia táctil de botones:** En comparación con una pantalla táctil, un mando físico con docenas de botones diferenciados y con buena sensación al pulsarlos es más directo y satisfactorio en muchos escenarios.

  - **Alto Factor de Aceptación de la Esposa (WAF):** Para los miembros de la familia que no están acostumbrados a las apps del móvil o a los altavoces inteligentes (como personas mayores o niños), decirles "pulsa este botón para encender la luz" es la forma de interacción más intuitiva y fácil de aprender.

  - **Un "interruptor inteligente" que no necesita recargarse:** Las pilas de un mando tradicional suelen durar uno o dos años, lo que es mucho más cómodo que muchos dispositivos inteligentes que necesitan recargarse con frecuencia.

#### **Idea 2: Crea un "botón mágico" IoT universal**

**Concepto central**

¿El botón táctil del dispositivo tiene que servir solo para controlar IR? ¡Por supuesto que no! Podemos convertirlo en un botón mágico que controle **cualquier cosa** en tu casa. La clave es "desacoplar": separar por completo la acción física de "pulsar el botón" de la acción inteligente de "lo que realmente sucede".

- **Pasos de implementación**

  1. **Haz que el botón sea solo un "reportero":** En el firmware, configura el botón táctil (para pulsación simple, doble pulsación, pulsación prolongada) para que no realice ninguna tarea específica, sino que solo envíe una "notificación de evento" a Home Assistant. Por ejemplo, con una doble pulsación, simplemente informa a HA: "¡Eh! ¡Me han hecho doble pulsación!"

  2. **Deja que HA sea el "comandante":** En Home Assistant, crea automatizaciones que escuchen específicamente estos distintos "informes" (eventos) del botón.

  3. **Conecta todo, haz cualquier cosa:** Una vez que HA recibe un informe, ¡puede ordenar que actúe cualquier dispositivo de tu casa!

     - Recibe un informe de **"pulsación simple"** -> Conmuta todas las **luces Zigbee** de la casa entre encendidas y apagadas.

     - Recibe un informe de **"doble pulsación"** -> Ordena al **robot aspirador** que empiece a limpiar.

     - Recibe un informe de **"pulsación prolongada"** -> Ejecuta una escena de "Modo Cine", cerrando las cortinas, atenuando las luces y encendiendo el proyector y el sistema de sonido.

- **Ventajas de este enfoque**

  - **Rompe fronteras, posibilidades infinitas:** Tu botón táctil ya no es solo parte de un "mando IR", sino un interruptor físico para toda tu casa inteligente, capaz de controlar cualquier dispositivo conectado a HA.

  - **Define con flexibilidad, cambia cuando quieras:** Hoy una doble pulsación inicia el robot aspirador, pero mañana quieres que reproduzca música. Solo tienes que editar la automatización en la interfaz de HA, sin necesidad de tocar el firmware.

  - **La interacción más intuitiva:** Dale a tu familia la forma más sencilla de controlar las cosas. Un botón físico con respuesta háptica suele ser mucho más cómodo y elegante que abrir una app en el móvil.

En resumen, no veas el XIAO IR Mate solo como una herramienta IR. Piénsalo como un mini robot conectado a Wi‑Fi, con sentido del tacto y una "voz" (el emisor IR). ¡Lo que puede hacer solo está limitado por tu imaginación!

## Preguntas frecuentes (FAQ)

> **P: ¿Por qué no puedo encontrar el hotspot del XIAO IR Mate en mi teléfono?**
> **R:** Por favor, confirma que el dispositivo está correctamente alimentado mediante Type‑C. Comprueba si el LED blanco está parpadeando. Si la luz está apagada, intenta cambiar el cable o la fuente de alimentación. Si el dispositivo ya se ha configurado correctamente en una red antes, no creará de nuevo un hotspot AP a menos que falle la conexión de red o se haya restablecido a valores de fábrica manteniendo pulsado el botón RESET.

> **P: ¿Qué debo hacer si falla el aprendizaje IR? (Firmware de fábrica)**
> **R:** Asegúrate de que el mando original tenga suficiente batería y se mantenga lo más cerca posible del receptor del IR Mate (normalmente el componente negro semitransparente). Además, evita realizar el proceso de aprendizaje bajo luz intensa o cerca de otras fuentes de interferencia infrarroja.

> **P: ¿El dispositivo aparece como desconectado en HA?**
> **R:** Comprueba que tu red Wi‑Fi doméstica funcione correctamente y que el IR Mate esté dentro del alcance de la señal Wi‑Fi. Puedes intentar pulsar brevemente el botón RESET para reiniciar el dispositivo.

> **P: Después de flashear firmware personalizado, ¿cómo restauro el firmware de fábrica?**
> **R:** Necesitarías obtener el archivo `.bin` del firmware de fábrica o su archivo fuente YAML de ESPHome, y luego flashearlo de nuevo mediante ESPHome para sobrescribir el firmware personalizado.

> **P: ¿Cómo uso las señales aprendidas (firmware de fábrica) o el control de CA (firmware avanzado) en automatizaciones?**
> **R:** En el editor de automatizaciones o scripts de HA, elige "Call service".

## Recursos

- **[ZIP]** [Hardware](https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO_IR_REMOTE_hardware.zip)
- **[ZIP]** [Software](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_smart_ir_mate)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
