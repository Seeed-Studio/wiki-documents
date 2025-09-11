---
title: Primeros Pasos con XIAO IR Mate Smart IR Remote
description: |
  Un control remoto IR inteligente de Seeed Studio, diseñado para integrar electrodomésticos tradicionales como televisores y aires acondicionados en tu ecosistema de hogar inteligente Home Assistant.
image: https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO-Smart-IR-Mate.webp
slug: /es/XIAO_IR_Mate_Smart_IR_Remote
keywords:
  - XIAO
  - Home Assistant
  - Smart Home
sidebar_position: 5
last_update:
  author: TienjuiWong
  date: 07/17/2025
---

# Primeros Pasos con XIAO IR Mate Smart IR Remote (Para Home Assistant)

¡Bienvenido al **XIAO IR Mate Smart IR Remote**! Este dispositivo está especialmente diseñado para usuarios de Home Assistant, con el objetivo de proporcionar una solución de control remoto infrarrojo inteligente perfecta, eficiente e integrada. A través de esta guía, aprenderás cómo configurar el dispositivo, conectarlo a tu red doméstica, integrarlo en Home Assistant, y desbloquear todo su potencial, desde el aprendizaje básico de señales hasta el control avanzado de aires acondicionados inteligentes.

<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/6-109990586-XIAO-Smart-IR-Mate.jpg"
    alt="Product diagram"
    style={{
      maxWidth: '50%',
      height: 'auto',
      display: 'block',
      borderRadius: '8px'
    }}
  />
</div>


## Introducción

El **XIAO IR Mate** es un módulo infrarrojo inteligente compacto basado en el **Seeed Studio XIAO ESP32-C3**. Integra transmisión y recepción infrarroja, detección táctil, retroalimentación por vibración e indicación de estado. Conectado vía Wi-Fi, puede integrarse perfectamente en tu ecosistema de hogar inteligente Home Assistant. Su misión principal es hacer "inteligentes" todos tus electrodomésticos tradicionales que usan controles remotos infrarrojos (como televisores, aires acondicionados, ventiladores, etc.) y permitirte controlarlos a través de HA para automatización.

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  alignItems: 'center'
}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/1-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 1" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/2-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 2" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/3-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 3" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/4-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 4" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/5-109990586-XIAO-Smart-IR-Mate.jpg" alt="XIAO Smart IR Mate Product diagram 5" />
  <img src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/touch.jpg" alt="XIAO Smart IR Mate Product diagram 6" />
</div>

- **Integración Perfecta con Home Assistant** 

Construido sobre la plataforma ESPHome, IR Mate es descubierto automáticamente por Home Assistant, ofreciendo entidades simples para automatización y scripting sin esfuerzo.

- **Potente Aprendizaje y Transmisión IR** 

Equipado con tres emisores IR de alta potencia para cobertura de 360° y un receptor de alta sensibilidad. Soporta el aprendizaje de hasta 10 comandos IR de controles remotos estándar (ej., controlar proyectores, aires acondicionados, temporizadores) para reproducción con un toque en Home Assistant.

- **Retroalimentación de Interacción Física Intuitiva** 

Cuenta con un motor de vibración e indicador LED. Las vibraciones cortas confirman acciones, las vibraciones largas señalan el modo de aprendizaje, y el LED muestra el estado de la red, simplificando la configuración y resolución de problemas.

- **Actualizable a un Controlador de AC Inteligente Fanático** 

Flashea firmware personalizado para transformar IR Mate en un control remoto de AC inteligente. Establece temperatura precisa, modo y velocidad del ventilador directamente en Home Assistant, con generación automática de códigos IR, eliminando el aprendizaje repetitivo.

- **Diseño Compacto, Alimentado por USB-C**

## Descripción General del Hardware

Comprender los componentes básicos del dispositivo te ayudará a usarlo mejor:

  - **Controlador Principal**: Seeed Studio XIAO ESP32-C3, proporcionando un rendimiento potente y conectividad Wi-Fi.
  - **Fuente de Alimentación**: Alimentado a través del puerto Type-C integrado (5V).
  - **Emisor Infrarrojo**: 3 LEDs infrarrojos de alta potencia (usando el pin D1), asegurando transmisión de señal de 360° sin puntos ciegos.
  - **Receptor Infrarrojo**: 1 receptor infrarrojo de alta precisión (usando el pin D2), para aprender señales de otros controles remotos.
  - **Sensor Táctil**: El dispositivo integra un módulo táctil (usando el pin D3). Un solo toque activa una vibración corta (0.5 segundos) como retroalimentación operacional.
  - **Motor de Vibración**: Un motor de vibración integrado (usando el pin D4) proporciona retroalimentación táctil clara con duraciones de vibración variables.
  - **LED Indicador de Estado**: Una luz LED (usando el pin D5) para indicar los diferentes estados de funcionamiento del dispositivo.
  - **Botón de Reinicio**: Un botón físico en el dispositivo (conectado al pin D0), usado para reiniciar o restablecer de fábrica.


## Primer Uso y Configuración de Red (Firmware de Fábrica)

Cuando obtienes el dispositivo por primera vez, sigue estos pasos para completar la configuración inicial.

### Paso 1: Encender

Usa un cable USB Type-C estándar para alimentar el dispositivo. Después del arranque, el dispositivo entrará en un estado de espera de configuración, y verás el **LED blanco parpadeando a una frecuencia de 1Hz**.

### Paso 2: Entrar al Modo de Aprovisionamiento AP

Cuando la red no está configurada, el dispositivo creará automáticamente un punto de acceso Wi-Fi (AP) llamado **XIAO IR Mate** (o **Seeed_ir**, dependiendo de lo que encuentres).

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### Paso 3: Conectar al Punto de Acceso y Configurar la Red

1.  Abre la configuración Wi-Fi en tu teléfono o computadora, busca y conéctate a la red llamada **XIAO IR Mate**.

:::note
El punto de acceso tiene una contraseña de red predeterminada de '12345678'.
:::

2.  Después de una conexión exitosa, tu dispositivo usualmente abrirá automáticamente una página de configuración. Si no lo hace, por favor abre manualmente un navegador y visita **[http://192.168.4.1](http://192.168.4.1)**.
3.  En esta página, verás una lista de redes Wi-Fi. Por favor selecciona la **red Wi-Fi de 2.4GHz de tu hogar (SSID)** e ingresa la contraseña correcta.
4.  Haz clic en "Connect" o "Save". El dispositivo intentará conectarse a la red Wi-Fi que proporcionaste.

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_02.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>


### Paso 4: Conexión Exitosa

Una vez que el dispositivo se conecte exitosamente a tu Wi-Fi doméstico, el punto de acceso AP se apagará automáticamente, y la **luz indicadora de estado se mantendrá encendida de forma continua**. La configuración de red ahora está completa.


<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_03.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>


## Integración con Home Assistant (Firmware de Fábrica)

El firmware del dispositivo está basado en **ESPHome**, haciéndolo muy fácil de integrar en Home Assistant.

1.  **Descubrimiento Automático**: Asegúrate de que tu host de Home Assistant y el XIAO IR Mate estén conectados a la misma red local. Típicamente, HA descubrirá automáticamente nuevos dispositivos ESPHome. Verás una notificación en **Settings \> Devices & Services** diciendo "New device discovered".
2.  **Adición Manual**: Si no se descubre automáticamente, puedes hacer clic en el botón **[Add Integration]** en la esquina inferior derecha, buscar **"ESPHome"**, y luego ingresar el nombre de host del dispositivo (ej., **xiao-ir-mate**) o dirección IP para agregarlo manualmente.


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

3.  **Panel del Dispositivo**: Después de la adición exitosa, el XIAO IR Mate aparecerá como un dispositivo en HA. Su panel contendrá las siguientes entidades para controlar 10 señales infrarrojas diferentes:

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_07.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Detalles de Funciones Principales (Firmware de Fábrica)

Si deseas restaurar tu dispositivo o actualizar su firmware, puedes acceder a través del botón de abajo. Hemos creado una página dedicada al Firmware de Flash Directo XIAO Gadget.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://gadgets.seeed.cc/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Flash the Firmwave</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


### Aprendizaje de Señales IR

Cuando necesites enseñar al IR Mate un nuevo comando de control remoto, sigue estos pasos. La interfaz principal del firmware de fábrica incluye una **lista de selección de ranuras de señal**, junto con los botones **Aprender** y **Enviar**.

1.  En el panel de dispositivos de Home Assistant, primero encuentra la lista desplegable de selección llamada **"Signal"**.
2.  Haz clic en la lista desplegable y selecciona la ranura de señal que deseas usar, por ejemplo, **"signal_1"**.
3.  Una vez seleccionada, encuentra el botón **"Learn"** y haz clic en **"PRESS"** junto a él.
4.  El XIAO IR Mate ahora entrará en modo de aprendizaje y comenzará a **vibrar continuamente**, indicando que puedes comenzar el emparejamiento.
5.  Apunta tu control remoto original hacia la ventana del receptor infrarrojo del IR Mate y presiona brevemente el botón que deseas aprender.
6.  Después de que el IR Mate reciba y registre exitosamente la señal, la **vibración se detendrá**, indicando que el aprendizaje fue exitoso.
7.  En este punto, un indicador de estado llamado **"Is Learned Signal"** se activará automáticamente a "ON", indicando que la ranura de señal actualmente seleccionada en la lista desplegable (es decir, "signal_1") ahora tiene una señal almacenada.

### Envío de Señales IR

Una vez que una señal ha sido aprendida exitosamente, puedes enviarla en cualquier momento.

1.  En la lista desplegable **"Signal"**, asegúrate de haber seleccionado la ranura de señal que deseas enviar, por ejemplo, **"signal_1"**.
2.  Encuentra el botón **"Send"** y haz clic en **"PRESS"** junto a él.
3.  El XIAO IR Mate transmitirá inmediatamente la señal almacenada en la ranura actualmente seleccionada a través de sus 3 emisores infrarrojos.
4.  **Nota**: Si seleccionas una ranura de señal en la lista desplegable que nunca ha sido enseñada con una señal, hacer clic en el botón enviar no tendrá efecto.


<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_08.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Interacción Física e Indicación de Estado

Además del control de HA, también puedes entender y controlar el dispositivo a través de la interacción física.

### Luz Indicadora de Estado (LED Blanco)

  - **Parpadeo Lento (1Hz)**: El dispositivo está esperando conectarse a una red Wi-Fi.
  - **Encendido Sólido**: El dispositivo está conectado exitosamente a la red Wi-Fi y funcionando normalmente.

### Retroalimentación por Vibración

  - **Vibración Corta (100ms)**: Usada para confirmación de operación general, como cuando se toca el dispositivo.
  - **Vibración Larga (500ms)**: Usada para alertas de estado importantes, como entrar en modo de aprendizaje o realizar un restablecimiento de fábrica.

### Botón RESET

  - **Presión Corta (dentro de 1 segundo)**: El dispositivo se reiniciará, acompañado de una vibración corta. Esto es muy útil si el dispositivo deja de responder.
  - **Presión Larga (más de 5 segundos)**: El dispositivo **realizará un restablecimiento de fábrica**. Esta acción **borrará todas las credenciales Wi-Fi guardadas y todas las 10 señales infrarrojas aprendidas**. Cuando se realiza esta acción, el dispositivo emitirá una vibración larga como aviso. Después de completarse, el dispositivo se reiniciará y volverá al estado inicial de espera de configuración (LED parpadeando).


## Uso Avanzado - Control Inteligente de Aire Acondicionado

El modo básico "grabar-reproducir" proporcionado por el firmware de fábrica es universal, pero puede ser torpe al controlar dispositivos con múltiples estados como aires acondicionados (temperatura, modo, velocidad del ventilador, etc.). Para lograr un control de AC más fino e inteligente, podemos flashear un firmware especializado de ESPHome para transformar el XIAO IR Mate de un "repetidor de señales IR" en un verdadero "controlador inteligente de aire acondicionado."

En este capítulo, usaremos un aire acondicionado Gree como ejemplo detallado, pero esto no es de ninguna manera la única opción. El poderoso ecosistema de ESPHome soporta numerosas marcas de aires acondicionados, y puedes seguir fácilmente los conceptos en esta guía, haciendo cambios menores al código de configuración, para lograr control inteligente para otras marcas como Midea, Daikin, Panasonic, y más.

### Ventajas Principales

  - **Control con Estado**: No más reproducciones simples. Puedes establecer directamente "24°C, Frío, Ventilador Auto" en HA, y el dispositivo inmediatamente generará y enviará el comando infrarrojo correcto.
  - **UI Más Amigable**: Aparece como una tarjeta Climate estándar en HA, haciendo la operación intuitiva.
  - **Ahorra Espacio**: No necesitas aprender una señal separada para cada temperatura o modo; una configuración puede controlar todas las funciones del AC.

### Prerrequisitos

1.  **Instalar ESPHome**: Si aún no lo has hecho, instala e inicia el complemento de ESPHome desde la Tienda de Complementos de Home Assistant.
2.  **Obtener el Protocolo de Marca de tu AC**: ESPHome soporta muchos protocolos de marcas de AC (como Gree, Midea, Daikin, etc.). Necesitas conocer la marca de tu aire acondicionado para seleccionar el protocolo correcto.

### Flasheando Firmware Personalizado

1.  **Crear una Nueva Configuración de Dispositivo**
      - Abre la interfaz de ESPHome en HA.
      - Haz clic en el botón **"+ NEW DEVICE"** en la parte inferior derecha, y en la ventana emergente, haz clic en **"Continue"**.
      - Nombra tu dispositivo (ej., **xiao-ir-ac-controller**), y luego selecciona el tipo de placa como **Seeed Studio XIAO ESP32C3**.
2.  **Editar el Archivo de Configuración**
      - Haz clic en el botón **EDIT** en la tarjeta del dispositivo recién creado para entrar al editor de configuración YAML.
      - Elimina todo el contenido predeterminado en el editor.
      - **Copia y pega completamente** el código de abajo en el editor:


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
  password: "15afb09b5aba7b3d6a6ba01180c60df5"  # Change this to your desired password

wifi:
  # ssid: !secret wifi_ssid
  # password: !secret wifi_password
  on_connect:
    - globals.set: {id: is_wifi_connected, value: 'true'}
    - light.turn_on: rgb_light
  on_disconnect:
    - globals.set: {id: is_wifi_connected, value: 'false'}
  ap:
    password: "12345678"

captive_portal:

remote_transmitter:
  id: default_ir_transmitter
  pin: GPIO3
  carrier_duty_percent: 50%
  rmt_channel: 0

remote_receiver:
  id: default_ir_receiver
  pin:
    number: GPIO4
    inverted: true
  rmt_channel: 2
  dump: raw # Keep for learning or debugging other infrared codes

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
    rmt_channel: 1
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

3.  **Personaliza Tu Configuración**
      - **Wi-Fi**: Si no usas archivos `!secret`, descomenta la sección `wifi:` y reemplaza `Your_WiFi_SSID` y `Your_WiFi_Password` con tu propia información de Wi-Fi.
      - **Selecciona el protocolo AC correcto**: ¡Este es el paso más crítico! El ejemplo usa `platform: gree`. Si tu aire acondicionado no es un Gree, reemplázalo con la plataforma de tu marca. ¿Cómo encontrar marcas compatibles? Por favor visita la página de [ESPHome Climate Components](https://esphome.io/components/climate/index.html), que lista todas las marcas compatibles y sus nombres de plataforma (ej., `daikin`, `midea`, `panasonic_ac`, etc.).
          - Después de seleccionar la plataforma correspondiente, también podrías necesitar ajustar parámetros como `model` o modos compatibles según la documentación para esa plataforma.
4.  **Compilar y Flashear**
      - Guarda tu configuración YAML.
      - Conecta tu XIAO IR Mate a la computadora que ejecuta HA mediante un cable USB.
      - Haz clic en el botón **INSTALL** en la tarjeta del dispositivo.
      - Selecciona la opción **"Plug into this computer"**.
      - ESPHome compilará el firmware y lo flasheará a tu dispositivo a través del navegador. Sigue las indicaciones en pantalla para completar el proceso.
      - Después de un flasheo exitoso, el dispositivo se reiniciará automáticamente y se conectará a tu Wi-Fi configurado.

### Uso en Home Assistant

Después del flasheo y reinicio, tu dispositivo aparecerá en Home Assistant como una nueva entidad Climate (ej., `climate.gree_air_conditioner`). Puedes agregar una "Thermostat Card" a tu panel de control para obtener un panel de control de AC completamente funcional, permitiéndote ajustar libremente la temperatura, modo, velocidad del ventilador y oscilación, ¡como un aire acondicionado inteligente nativo!

### Perspectivas Futuras: ¡Abre Tu Mente!

¡Felicitaciones! Para ahora, ya has dominado los dos usos principales del XIAO IR Mate: uno es la función "aprendizaje de control remoto universal" lista para usar, y el otro es el modo "controlador de clima profesional" para control preciso del aire acondicionado.

Pero no te detengas ahí, ¡porque esto es solo el comienzo! La verdadera diversión del XIAO IR Mate radica en su increíble flexibilidad. Piénsalo como un "bloque de construcción creativo" definido por ti, que puedes usar para construir cosas mucho más allá de tu imaginación. Aquí hay dos ideas que abren la mente para inspirarte:

#### Idea 1: Revive Controles Remotos Viejos como Interruptores de Escena Universales

**Escenario de Aplicación**

Mira a tu alrededor. ¿Tienes muchos controles remotos viejos sin usar por ahí? Controles remotos de TVs viejos, DVDs o estéreos, con muchos botones y una gran sensación al tacto, ahora solo juntando polvo en un cajón. ¿No sería genial si pudieras usar los botones de estos controles remotos para controlar tus luces inteligentes, aspiradora robot, o incluso escenas complejas de "bienvenido a casa"?

**Cómo Funciona**

El núcleo de esta idea es transformar el XIAO IR Mate de un "transmisor" a un "oyente". Ya no controla activamente otros dispositivos sino que escucha silenciosamente señales de cualquier control remoto viejo, luego le dice a Home Assistant: "¡Escuché una señal, tú decides qué hacer!"

* **Pasos de Implementación**

  1. **Configurar un Firmware "Oyente":** En tu firmware de ESPHome, la configuración principal es el componente `remote_receiver`. El único trabajo del dispositivo después de encenderse es "escuchar" señales IR.

  2. **Identificar el "Código Secreto" de Cada Botón:** Toma un control remoto viejo y presiona cualquier botón mientras lo apuntas al dispositivo. En los logs de ESPHome, verás el código IR único del botón (como una cadena de datos `RAW` o un código de protocolo `NEC`). Anota este "código secreto".

  3. **Crear Reglas de Automatización en HA:** En Home Assistant, configura una automatización con la condición de activación: "Cuando XIAO IR Mate detecte un código secreto IR específico".

  4. **Definir la Acción:** ¡La acción para la regla puede ser cualquier cosa! Por ejemplo:

     * Cuando detecte el **botón "Volumen +" del control remoto de TV** -> **Iniciar la aspiradora robot** para comenzar la limpieza.

     * Cuando detecte el **botón "Play" de un Apple Remote** -> **Encender la luz del baño**.

     * Cuando detecte el **botón "Rojo" del control remoto de DVD** -> Ejecutar la escena "Modo Ausente".

* **Ventajas de Este Enfoque**

  * **Reutilización y Eco-Amigable:** Da nueva vida al hardware inactivo, poniendo los desechos electrónicos de vuelta al trabajo, lo que ahorra dinero y es bueno para el medio ambiente.

  * **Experiencia Real de Botón Táctil:** Comparado con una pantalla táctil, un control remoto físico con docenas de botones distintos y con buena sensación al tacto es más directo y satisfactorio para muchos escenarios.

  * **Alto Factor de Aceptación de la Esposa (WAF):** Para miembros de la familia no acostumbrados a aplicaciones de teléfono o altavoces inteligentes (como ancianos o niños), decirles "presiona este botón para encender la luz" es la interacción más intuitiva y fácil de aprender.

  * **Un "Interruptor Inteligente" Que No Necesita Recarga:** Las baterías de un control remoto tradicional a menudo pueden durar un año o dos, lo que es mucho más conveniente que muchos gadgets inteligentes que necesitan carga frecuente.

#### **Idea 2: Crear un "Botón Mágico IoT" Universal**

**Concepto Central**

¿El botón táctil en el dispositivo realmente tiene que ser solo para controlar IR? ¡Por supuesto que no! Podemos convertirlo en un botón mágico que controle **cualquier cosa** en tu casa. La clave es "desacoplar"—separar completamente la acción física de "presionar el botón" de la acción inteligente de "qué sucede realmente".

* **Pasos de Implementación**

  1. **Hacer que el Botón Sea Solo un "Reportero":** En el firmware, configura el botón táctil (para toque simple, doble toque, presión larga) para no realizar ninguna tarea específica, sino solo enviar una "notificación de evento" a Home Assistant. Por ejemplo, en un doble toque, solo reporta a HA: "¡Oye! ¡Fui tocado dos veces!"

  2. **Dejar que HA Sea el "Comandante":** En Home Assistant, crea automatizaciones que específicamente escuchen estos varios "reportes" (eventos) del botón.

  3. **Conectar Todo, Hacer Cualquier Cosa:** Una vez que HA recibe un reporte, ¡puede comandar cualquier dispositivo en tu hogar para actuar!

     * Recibe un reporte de **"toque simple"** -> Alterna todas las **luces Zigbee** de la casa encendido/apagado.

     * Recibe un reporte de **"doble toque"** -> Comanda a la **aspiradora robot** para comenzar la limpieza.

* Recibe un reporte de **"pulsación larga"** -> Ejecuta una escena de "Modo Película", cerrando las cortinas, atenuando las luces, y encendiendo el proyector y el sistema de sonido.

* **Ventajas de Este Enfoque**

  * **Rompe Barreras, Posibilidades Infinitas:** Tu botón táctil ya no es solo una parte de un "control remoto IR", sino un interruptor físico para todo tu hogar inteligente, capaz de controlar cualquier dispositivo conectado a HA.

  * **Define Flexiblemente, Cambia a Capricho:** Hoy un doble toque inicia la aspiradora, pero ¿mañana quieres que reproduzca música? Solo edita la automatización en la interfaz de HA, sin necesidad de tocar el firmware en absoluto.

  * **La Interacción Más Intuitiva:** Dale a tu familia la forma más simple de controlar las cosas. Un botón físico con retroalimentación háptica es a menudo mucho más conveniente y elegante que abrir una aplicación en el teléfono.

En resumen, no veas el XIAO IR Mate solo como una herramienta IR. Piénsalo como un mini-robot conectado a Wi-Fi, con sentido del tacto y una "voz" (el emisor IR). Lo que puede hacer está limitado solo por tu imaginación!

## Preguntas Frecuentes (FAQ)

> **P: ¿Por qué no puedo encontrar el hotspot del XIAO IR Mate en mi teléfono?**
> **R:** Por favor confirma que el dispositivo esté correctamente alimentado vía Type-C. Verifica si el LED blanco está parpadeando. Si la luz está apagada, intenta cambiar el cable o la fuente de alimentación. Si el dispositivo ha sido configurado exitosamente en una red antes, no creará un hotspot AP nuevamente a menos que la conexión de red falle o haya sido restablecido de fábrica presionando largamente el botón RESET.

> **P: ¿Qué debo hacer si el aprendizaje IR falla? (Firmware de Fábrica)**
> **R:** Por favor asegúrate de que tu control remoto original tenga suficiente energía en la batería y se mantenga lo más cerca posible del receptor del IR Mate (usualmente el componente negro, semi-transparente). También, evita realizar el proceso de aprendizaje bajo luz fuerte o cerca de otras fuentes de interferencia infrarroja.

> **P: ¿El dispositivo se muestra como desconectado en HA?**
> **R:** Por favor verifica que tu Wi-Fi doméstico esté funcionando correctamente y que el IR Mate esté dentro del rango de señal Wi-Fi. Puedes intentar presionar brevemente el botón RESET para reiniciar el dispositivo.

> **P: Después de flashear firmware personalizado, ¿cómo restauro el firmware de fábrica?**
> **R:** Necesitarías obtener el archivo `.bin` del firmware de fábrica o su archivo fuente YAML de ESPHome, y luego flashearlo nuevamente vía ESPHome para sobrescribir el firmware personalizado.

> **P: ¿Cómo uso las señales aprendidas (firmware de fábrica) o el control de AC (firmware avanzado) en automatizaciones?**
> **R:** En el editor de automatizaciones o scripts de HA, elige "Llamar servicio".


## Recursos

- **[ZIP]** [Hardware](https://files.seeedstudio.com/wiki/XIAO_IR_MATE/XIAO_IR_REMOTE_hardware.zip)
- **[ZIP]** [Software](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_smart_ir_mate)


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
