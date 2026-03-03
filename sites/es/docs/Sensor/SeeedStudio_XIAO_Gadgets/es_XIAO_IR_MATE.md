---
title: Introducción al Control Remoto IR Inteligente XIAO IR Mate
description: |
  Un control remoto IR inteligente de Seeed Studio, diseñado para integrar electrodomésticos tradicionales como televisores y aires acondicionados en tu ecosistema de hogar inteligente Home Assistant.
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
---

# Introducción al Control Remoto IR Inteligente XIAO IR Mate (Para Home Assistant)

¡Bienvenido al **Control Remoto IR Inteligente XIAO IR Mate**! Este dispositivo está especialmente diseñado para usuarios de Home Assistant, con el objetivo de proporcionar una solución de control remoto infrarrojo inteligente perfecta, eficiente e integrada. A través de esta guía, aprenderás cómo configurar el dispositivo, conectarlo a tu red doméstica, integrarlo en Home Assistant y desbloquear todo su potencial, desde el aprendizaje básico de señales hasta el control avanzado de aires acondicionados inteligentes.

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

El **XIAO IR Mate** es un módulo infrarrojo inteligente compacto basado en el **Seeed Studio XIAO ESP32-C3**. Integra transmisión y recepción infrarroja, detección táctil, retroalimentación por vibración e indicación de estado. Conectado vía Wi-Fi, puede integrarse perfectamente en tu ecosistema de hogar inteligente Home Assistant. Su misión principal es hacer que todos tus electrodomésticos tradicionales que usan controles remotos infrarrojos (como televisores, aires acondicionados, ventiladores, etc.) sean "inteligentes" y te permitan controlarlos a través de HA para automatización.

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

- **Integración Perfecta con Home Assistant**

Construido sobre la plataforma ESPHome, IR Mate es descubierto automáticamente por Home Assistant, ofreciendo entidades simples para automatización y scripting sin esfuerzo.

- **Potente Aprendizaje y Transmisión IR**

Equipado con tres emisores IR de alta potencia para cobertura de 360° y un receptor de alta sensibilidad. Soporta el aprendizaje de hasta 10 comandos IR de controles remotos estándar (por ejemplo, controlar proyectores, aires acondicionados, temporizadores) para reproducción con un toque en Home Assistant.

- **Retroalimentación de Interacción Física Intuitiva**

Cuenta con un motor de vibración e indicador LED. Las vibraciones cortas confirman acciones, las vibraciones largas señalan el modo de aprendizaje, y el LED muestra el estado de la red, simplificando la configuración y resolución de problemas.

- **Actualizable a un Controlador de AC Inteligente Fanático**

Flashea firmware personalizado para transformar IR Mate en un control remoto de AC inteligente. Establece temperatura precisa, modo y velocidad del ventilador directamente en Home Assistant, con generación automática de códigos IR, eliminando el aprendizaje repetitivo.

- **Diseño Compacto, Alimentado por USB-C**

## Descripción del Hardware

Entender los componentes básicos del dispositivo te ayudará a usarlo mejor:

- **Controlador Principal**: Seeed Studio XIAO ESP32-C3, proporcionando rendimiento potente y conectividad Wi-Fi.
- **Fuente de Alimentación**: Alimentado a través del puerto Type-C integrado (5V).
- **Emisor Infrarrojo**: 3 LEDs infrarrojos de alta potencia (usando el pin D1), asegurando transmisión de señal de 360° sin puntos ciegos.
- **Receptor Infrarrojo**: 1 receptor infrarrojo de alta precisión (usando el pin D2), para aprender señales de otros controles remotos.
- **Sensor Táctil**: El dispositivo integra un módulo táctil (usando el pin D3). Un solo toque activa una vibración corta (0.5 segundos) como retroalimentación operacional.
- **Motor de Vibración**: Un motor de vibración integrado (usando el pin D4) proporciona retroalimentación táctil clara con duraciones de vibración variables.
- **LED Indicador de Estado**: Una luz LED (usando el pin D5) para indicar los diferentes estados de trabajo del dispositivo.
- **Botón de Reinicio**: Un botón físico en el dispositivo (conectado al pin D0), usado para reiniciar o restablecer de fábrica.

## Primer Uso y Configuración de Red (Firmware de Fábrica)

Cuando obtengas el dispositivo por primera vez, sigue estos pasos para completar la configuración inicial.

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

1. Abre la configuración Wi-Fi en tu teléfono o computadora, busca y conéctate a la red llamada **XIAO IR Mate**.

:::note
El punto de acceso tiene una contraseña de red predeterminada de '12345678'.
:::

2. Después de una conexión exitosa, tu dispositivo usualmente abrirá automáticamente una página de configuración. Si no lo hace, por favor abre manualmente un navegador y visita **[http://192.168.4.1](http://192.168.4.1)**.
3. En esta página, verás una lista de redes Wi-Fi. Por favor selecciona la **red Wi-Fi de 2.4GHz de tu hogar (SSID)** e ingresa la contraseña correcta.
4. Haz clic en "Connect" o "Save". El dispositivo intentará conectarse a la red Wi-Fi que proporcionaste.

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_02.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

### Paso 4: Conexión Exitosa

Una vez que el dispositivo se conecte exitosamente a tu Wi-Fi doméstico, el punto de acceso AP se apagará automáticamente, y la **luz indicadora de estado se mantendrá encendida de forma sólida**. La configuración de red ahora está completa.

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/ap_mode_network_connect_03.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Integración con Home Assistant (Firmware de Fábrica)

El firmware del dispositivo está basado en **ESPHome**, haciéndolo muy fácil de integrar en Home Assistant.

1. **Descubrimiento Automático**: Asegúrate de que tu host de Home Assistant y el XIAO IR Mate estén conectados a la misma red local. Típicamente, HA descubrirá automáticamente nuevos dispositivos ESPHome. Verás una notificación en **Settings \> Devices & Services** diciendo "New device discovered".
2. **Adición Manual**: Si no se descubre automáticamente, puedes hacer clic en el botón **[Add Integration]** en la esquina inferior derecha, buscar **"ESPHome"**, y luego ingresar el nombre de host del dispositivo (por ejemplo, **xiao-ir-mate**) o dirección IP para agregarlo manualmente.

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

3. **Panel del Dispositivo**: Después de la adición exitosa, el XIAO IR Mate aparecerá como un dispositivo en HA. Su panel contendrá las siguientes entidades para controlar 10 señales infrarrojas diferentes:

<img
  src="https://files.seeedstudio.com/wiki/XIAO_IR_MATE/homeassistant_07.png"
  alt=""
  style={{ display: 'block', margin: 'auto' }}
/>

## Detalles de Funciones Principales (Firmware de Fábrica)

Si quieres restaurar tu dispositivo o actualizar su firmware, puedes saltar a través del botón de abajo. Hemos creado una página dedicada al Flasheo Directo de Firmware XIAO Gadget.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://gadgets.seeed.cc/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Flashear el Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Aprendizaje de Señales IR

Cuando necesites enseñar al IR Mate un nuevo comando de control remoto, sigue estos pasos. La interfaz principal del firmware de fábrica incluye una **lista de selección de ranuras de señal**, junto con botones **Learn** y **Send**.

1. En el panel del dispositivo de Home Assistant, primero encuentra la lista desplegable de selección llamada **"Signal"**.
2. Haz clic en la lista desplegable y selecciona la ranura de señal que quieres usar, por ejemplo, **"signal_1"**.
3. Una vez seleccionada, encuentra el botón **"Learn"** y haz clic en **"PRESS"** junto a él.
4. El XIAO IR Mate ahora entrará en modo de aprendizaje y comenzará a **vibrar continuamente**, indicando que puedes comenzar el emparejamiento.
5. Apunta tu control remoto original hacia la ventana del receptor infrarrojo del IR Mate y presiona brevemente el botón que quieres aprender.
6. Después de que el IR Mate reciba y registre exitosamente la señal, la **vibración se detendrá**, significando que el aprendizaje fue exitoso.
7. En este punto, un indicador de estado llamado **"Is Learned Signal"** se activará automáticamente a "ON", indicando que la ranura de señal actualmente seleccionada en la lista desplegable (es decir, "signal_1") ahora tiene una señal almacenada.

### Envío de Señal IR

Una vez que una señal ha sido aprendida exitosamente, puedes enviarla en cualquier momento.

1. En la lista desplegable **"Signal"**, asegúrate de haber seleccionado el slot de señal que deseas enviar, por ejemplo, **"signal_1"**.
2. Encuentra el botón **"Send"** y haz clic en **"PRESS"** junto a él.
3. El XIAO IR Mate transmitirá inmediatamente la señal almacenada en el slot actualmente seleccionado a través de sus 3 emisores infrarrojos.
4. **Nota**: Si seleccionas un slot de señal en la lista desplegable que nunca ha sido enseñado con una señal, hacer clic en el botón de envío no tendrá efecto.

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

- **Vibración Corta (100ms)**: Utilizada para confirmación de operación general, como cuando se toca el dispositivo.
- **Vibración Larga (500ms)**: Utilizada para alertas de estado importantes, como entrar en modo de aprendizaje o realizar un restablecimiento de fábrica.

### Botón RESET

- **Presión Corta (dentro de 1 segundo)**: El dispositivo se reiniciará, acompañado de una vibración corta. Esto es muy útil si el dispositivo deja de responder.
- **Presión Larga (más de 5 segundos)**: El dispositivo **realizará un restablecimiento de fábrica**. Esta acción **borrará todas las credenciales Wi-Fi guardadas y todas las 10 señales infrarrojas aprendidas**. Cuando se realiza esta acción, el dispositivo emitirá una vibración larga como aviso. Después de completarse, el dispositivo se reiniciará y volverá al estado inicial de espera de configuración (LED parpadeando).

## Uso Avanzado - Control Inteligente de Aire Acondicionado

El modo básico "grabar-reproducir" proporcionado por el firmware de fábrica es universal, pero puede ser torpe al controlar dispositivos con múltiples estados como aires acondicionados (temperatura, modo, velocidad del ventilador, etc.). Para lograr un control de AC más fino e inteligente, podemos flashear un firmware ESPHome especializado para transformar el XIAO IR Mate de un "repetidor de señales IR" en un verdadero "controlador inteligente de aire acondicionado".

En este capítulo, usaremos un aire acondicionado Gree como ejemplo detallado, pero esto no es de ninguna manera la única opción. El poderoso ecosistema de ESPHome soporta numerosas marcas de aires acondicionados, y puedes seguir fácilmente los conceptos en esta guía, haciendo cambios menores al código de configuración, para lograr control inteligente para otras marcas como Midea, Daikin, Panasonic, y más.

### Ventajas Principales

- **Control con Estado**: No más reproducciones simples. Puedes establecer directamente "24°C, Frío, Ventilador Auto" en HA, y el dispositivo generará y enviará inmediatamente el comando infrarrojo correcto.
- **UI Más Amigable**: Aparece como una tarjeta Climate estándar en HA, haciendo la operación intuitiva.
- **Ahorra Espacio**: No necesitas aprender una señal separada para cada temperatura o modo; una configuración puede controlar todas las funciones del AC.

### Prerrequisitos

1. **Instalar ESPHome**: Si aún no lo has hecho, instala e inicia el complemento ESPHome desde la Tienda de Complementos de Home Assistant.
2. **Obtener el Protocolo de tu Marca de AC**: ESPHome soporta muchos protocolos de marcas de AC (como Gree, Midea, Daikin, etc.). Necesitas conocer la marca de tu aire acondicionado para seleccionar el protocolo correcto.

### Flasheando Firmware Personalizado

1. **Crear una Nueva Configuración de Dispositivo**
      - Abre la interfaz ESPHome en HA.
      - Haz clic en el botón **"+ NEW DEVICE"** en la parte inferior derecha, y en la ventana emergente, haz clic en **"Continue"**.
      - Nombra tu dispositivo (ej., **xiao-ir-ac-controller**), y luego selecciona el tipo de placa como **Seeed Studio XIAO ESP32C3**.
2. **Editar el Archivo de Configuración**
      - Haz clic en el botón **EDIT** en la tarjeta del dispositivo recién creado para entrar al editor de configuración YAML.
      - Elimina todo el contenido predeterminado en el editor.
      - **Copia y pega completamente** el código de abajo en el editor:

<Details>

<summary>seeed-ir-v2.yaml</summary>
```yaml
# ==== AUTO-SYNC START: xiao_smart_ir_mate/xiao_smart_ir_mate.yaml ====

substitutions:
  name: "xiao-smart-ir-mate"
  friendly_name: "XIAO Smart IR Mate"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: True
  project:
    name: "xiao.smart-ir-mate"
    version: "2.0"

esp32:
  board: seeed_xiao_esp32c3
  framework:
    type: arduino

globals:
  - id: is_wifi_connected
    type: bool
    initial_value: 'false'

  - id: reset_press_time
    type: uint32_t
    initial_value: '0'

  - id: touch_timer
    type: unsigned long
    restore_value: no
    initial_value: '0'

  # open or close the learning mode
  - id: is_learning_mode
    type: bool
    initial_value: 'false'

  # signal index , you can select the signal index on ESPHome
  - id: signal_select_index
    type: int
    restore_value: no
    initial_value: '0'

  # Read the signals stored in nvs and store them in this vector
  - id: send_data_vector
    type: std::vector<long int>
    restore_value: no

  - id: filter_size
    type: int
    initial_value: '10'

# Enable logging
logger:
  level: INFO

# Enable Home Assistant API
api:

ota:
  - platform: esphome
    password: "15afb09b5aba7b3d6a6ba01180c60df5"

wifi:
 # ssid: !secret wifi_ssid
 # password: !secret wifi_password
  on_connect:
    - globals.set:
        id: is_wifi_connected
        value: 'true'
    - light.turn_on: rgb_light
    - lambda: |-
        ESP_LOGI("ir", "IP address: %s", ::esphome::wifi::global_wifi_component->wifi_sta_ip_addresses()[0].str().c_str());

  on_disconnect:
    - globals.set:
        id: is_wifi_connected
        value: 'false'

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    # ssid: "XIAO Smart IR Mate"
    password: "12345678"

captive_portal:

# Custom components
external_components:
  - source:
      type: git        # git component
      url: https://github.com/Seeed-Studio/xiao-esphome-projects  # Path where the component is github
      ref: main   # Branch name
    components: [Flash_comp]   # Explicitly specify the components to import

# Component name
Flash_comp:
  id: signal_nvs  # Component id

remote_transmitter:
  id: my_transmitter
  pin: GPIO3
  carrier_duty_percent: 50%

remote_receiver:
  - id: rcvr
    pin:
      number: GPIO4
      inverted: true
    # Idle time, if the low level exceeds this time, it is considered as a new segment of the signal
    # That is "segmentation"
    idle: 65500us
    # Important, this parameter is used to segment the infrared signal
    # If a certain segment of the infrared signal is too long, it may be divided into several segments
    # For such a case, you must send the infrared signal strictly according to the corresponding timing, otherwise it will fail
    # If you don't want it to be segmented, you can reduce the frequency and adjust the idle parameter to make it receive as complete as possible
    clock_resolution: "500000"
    # Receive data: using raw data
    # In the infrared parsing of esphome, a signal (e.g., NEC) may be parsed into multiple signals (e.g., JVC, Pronto, etc.).
    # Here, we only retain the original signal and do not decode the protocol.
    on_raw:
      - switch.turn_off: vibration_switch
      - lambda: |-
          if (id(is_learning_mode)) {
            if (x.size() > id(filter_size)){
              ESP_LOGI("ir", "Saved signal index: %d", id(signal_select_index));
              id(signal_nvs).save_to_nvs(id(signal_select_index), x);
              id(send_data_vector).clear();
              id(send_data_vector) = id(signal_nvs).load_from_nvs<long int>(id(signal_select_index));
              id(is_learning_mode) = false;
              // Learned the signal, turn on the switch
              id(is_learned_signal_script).execute(true);
            }
          }

button:
  # Button in learning mode, you need to open learning mode first, and the signal will be saved
  - platform: template
    id: learn
    name: "Learn"
    on_press:
      - switch.turn_on: vibration_switch
      - lambda: |-
          id(is_learning_mode) = true;
          ESP_LOGI("ir", "Learning mode activated!");

  # Button in sending mode, according to your current index, read the signal from nvs and send it
  # Since it's using a script to send, it will always trigger a log print whether the sending is successful or not
  # That is, it will print Sending signal index
  # So when there is a log print but the control doesn't work, you need to write a separate receiving code to analyze the data
  # It is recommended to use the example program in the Arduino IRremote library.
  - platform: template
    id: transmit
    name: "Send"
    on_press:
      - lambda: |-
          if (id(send_data_vector).size() > 0) {
            id(send_raw).execute();
            ESP_LOGI("ir", "Sending signal index: %d", id(signal_select_index));
            ESP_LOGI("ir", "Sending signal size: %d", id(send_data_vector).size());
          } else {
            ESP_LOGI("ir", "Signal index %d not learned", id(signal_select_index));
          }

# Signal selection dropdown list
# Provides ten signals to choose from, and records the index
select:
  - platform: template
    name: signal_select
    id: signal_select
    options:
      - "Signal0"
      - "Signal1"
      - "Signal2"
      - "Signal3"
      - "Signal4"
      - "Signal5"
      - "Signal6"
      - "Signal7"
      - "Signal8"
      - "Signal9"
    initial_option: "Signal0"
    optimistic: true
    on_value:
      - lambda: |-
          id(signal_select_index) = i;
          ESP_LOGI("ir", "Current selected signal index: %d", i);
          id(send_data_vector).clear();
          id(send_data_vector) = id(signal_nvs).load_from_nvs<long int>(id(signal_select_index));
          if (id(send_data_vector).size() > 0) {
            id(is_learned_signal_script).execute(true);
          } else {
            id(is_learned_signal_script).execute(false);
          }

switch:
  - platform: output
    id: vibration_switch
    name: "Vibration device"
    output: vibration_output

  - platform: factory_reset
    id: factory_switch
    name: "Restart with Factory Default Settings"

  # Has the signal been learned?
  # If the signal has been learned, turn on this switch.
  # Otherwise, turn off this switch.
  - platform: template
    id: is_learned_signal_switch
    name: "Is Learned Signal?"
    optimistic: true

light:
  - platform: esp32_rmt_led_strip
    rgb_order: GRB
    pin: GPIO7 # D5
    num_leds: 1
    chipset: WS2812
    name: "WIFI RGB Light"
    id: rgb_light
    rmt_symbols: 48

binary_sensor:
  - platform: gpio
    id: touch_pad
    pin:
      number: GPIO5 # D3
      mode: INPUT_PULLDOWN
    on_state:
      then:
        - lambda: |-
            id(vibe).execute(100);
            id(touch_timer) = millis();
            if (id(check_touch_delay).is_running()) {
              id(check_touch_delay).stop();
              delay(10);
            }
            id(check_touch_delay).execute();

  - platform: gpio
    id: reset_button
    pin:
      number: GPIO9 # D9
      mode: INPUT_PULLUP
    filters:
      invert

    on_press:
      then:
        - lambda: |-
            id(reset_press_time) = millis();

    on_release:
      then:
        - lambda: |-
            uint32_t press_duration = millis() - id(reset_press_time);
            if (press_duration < 5000) {
              id(vibe).execute(100);
              ESP_LOGI("ir", "Restart Device");
              ESP.restart();
            } else {
              // clear all learned signals
              for (int i = 0; i < 10; i++) {
                id(signal_nvs).clear_signal_by_index(i);
              }
              ESP_LOGI("ir", "Restart with Factory Default Settings");
              id(vibe).execute(500);
              id(factory_switch).turn_on();
            }

output:
  - platform: gpio
    id: vibration_output
    pin: GPIO6 # D4

script:
  - id: vibe
    parameters:
      delay_ms: int
    then:
      - switch.turn_on: vibration_switch
      - delay: !lambda return delay_ms;
      - switch.turn_off: vibration_switch

  - id: check_touch_delay
    then:
      - delay: 300ms
      - lambda: |-
          unsigned long current_time = millis();
          if (current_time - id(touch_timer) >= 300) {
            ESP_LOGI("check click", "single click action");
            id(transmit).press();
          }

  # Send infrared signal
  # The saved signal is the original signal, we do not encode or decode, just send
  - id: send_raw
    then:
      - remote_transmitter.transmit_raw:
          code: !lambda return id(send_data_vector);
          carrier_frequency: 38000Hz
          repeat: 1

  # Used to indicate whether the signal can be sent
  # If there is a signal, turn on the switch
  # Otherwise, turn off the switch
  - id: is_learned_signal_script
    parameters:
      is_learned_signal: bool
    then:
      - lambda: |-
          if (is_learned_signal) {
            id(is_learned_signal_switch).turn_on();
          } else {
            id(is_learned_signal_switch).turn_off();
          }

interval:
  - id: blink_rgb
    interval: 500ms
    then:
      - lambda: |-
          if (!id(is_wifi_connected)) {
            static int state = 0;
            if (state == 1) {
              auto call = id(rgb_light).turn_on();
              call.set_rgb(1.0, 1.0, 1.0);
              call.set_transition_length(0);
              call.perform();
            } else {
              auto call = id(rgb_light).turn_off();
              call.set_transition_length(0);
              call.perform();
            }
            state = !state;
          }
# ==== AUTO-SYNC END ====
```

</Details>

3. **Personaliza Tu Configuración**
      - **Wi-Fi**: Si no usas archivos `!secret`, descomenta la sección `wifi:` y reemplaza `Your_WiFi_SSID` y `Your_WiFi_Password` con tu propia información de Wi-Fi.
      - **Selecciona el protocolo AC correcto**: ¡Este es el paso más crítico! El ejemplo usa `platform: gree`. Si tu aire acondicionado no es un Gree, reemplázalo con la plataforma de tu marca. ¿Cómo encontrar marcas compatibles? Por favor visita la página de [ESPHome Climate Components](https://esphome.io/components/climate/index.html), que lista todas las marcas compatibles y sus nombres de plataforma (ej., `daikin`, `midea`, `panasonic_ac`, etc.).
          - Después de seleccionar la plataforma correspondiente, también podrías necesitar ajustar parámetros como `model` o modos compatibles según la documentación de esa plataforma.
4. **Compilar y Flashear**
      - Guarda tu configuración YAML.
      - Conecta tu XIAO IR Mate a la computadora que ejecuta HA mediante un cable USB.
      - Haz clic en el botón **INSTALL** en la tarjeta del dispositivo.
      - Selecciona la opción **"Plug into this computer"**.
      - ESPHome compilará el firmware y lo flasheará a tu dispositivo a través del navegador. Sigue las indicaciones en pantalla para completar el proceso.
      - Después de un flasheo exitoso, el dispositivo se reiniciará automáticamente y se conectará a tu Wi-Fi configurado.

### Uso en Home Assistant

Después del flasheo y reinicio, tu dispositivo aparecerá en Home Assistant como una nueva entidad Climate (ej., `climate.gree_air_conditioner`). Puedes agregar una "Thermostat Card" a tu panel de control para obtener un panel de control de AC completamente funcional, permitiéndote ajustar libremente la temperatura, modo, velocidad del ventilador y oscilación, ¡como un aire acondicionado inteligente nativo!

### Perspectivas Futuras: Abre Tu Mente

¡Felicitaciones! A estas alturas, has dominado los dos usos principales del XIAO IR Mate: uno es la función "aprendizaje de control remoto universal" lista para usar, y el otro es el modo "controlador climático profesional" para control preciso del aire acondicionado.

Pero no te detengas ahí, ¡porque esto es solo el comienzo! La verdadera diversión del XIAO IR Mate radica en su increíble flexibilidad. Piénsalo como un "bloque de construcción creativo" definido por ti, que puedes usar para construir cosas mucho más allá de tu imaginación. Aquí tienes dos ideas que abren la mente para inspirarte:

#### Idea 1: Revive Controles Remotos Viejos como Interruptores de Escena Universales

**Escenario de Aplicación**

Mira a tu alrededor. ¿Tienes muchos controles remotos viejos sin usar por ahí? Controles de TVs viejos, DVDs o estéreos, con muchos botones y una gran sensación táctil, ahora solo juntando polvo en un cajón. ¿No sería genial si pudieras usar los botones de estos controles para controlar tus luces inteligentes, aspiradora robot, o incluso escenas complejas de "bienvenido a casa"?

**Cómo Funciona**

El núcleo de esta idea es transformar el XIAO IR Mate de un "transmisor" a un "oyente". Ya no controla activamente otros dispositivos sino que escucha silenciosamente señales de cualquier control remoto viejo, luego le dice a Home Assistant: "¡Escuché una señal, tú decides qué hacer!"

- **Pasos de Implementación**

  1. **Configurar un Firmware "Oyente":** En tu firmware ESPHome, la configuración principal es el componente `remote_receiver`. El único trabajo del dispositivo después de encenderse es "escuchar" señales IR.

  2. **Identificar el "Código Secreto" de Cada Botón:** Toma un control remoto viejo y presiona cualquier botón mientras lo apuntas al dispositivo. En los logs de ESPHome, verás el código IR único del botón (como una cadena de datos `RAW` o un código de protocolo `NEC`). Anota este "código secreto".

  3. **Crear Reglas de Automatización en HA:** En Home Assistant, configura una automatización con la condición de activación: "Cuando XIAO IR Mate detecte un código secreto IR específico".

  4. **Definir la Acción:** ¡La acción para la regla puede ser cualquier cosa! Por ejemplo:

     - Cuando detecte el **botón "Volume +" del control de TV** -> **Iniciar la aspiradora robot** para comenzar la limpieza.

     - Cuando detecte el **botón "Play" de un Apple Remote** -> **Encender la luz del baño**.

     - Cuando detecte el **botón "Rojo" del control de DVD** -> Ejecutar la escena "Modo Ausente".

- **Ventajas de Este Enfoque**

  - **Reutilización y Eco-Amigable:** Da nueva vida al hardware inactivo, poniendo los desechos electrónicos de vuelta a trabajar, lo que ahorra dinero y es bueno para el medio ambiente.

  - **Experiencia Real de Botón Táctil:** Comparado con una pantalla táctil, un control remoto físico con docenas de botones distintos y sólidos es más directo y satisfactorio para muchos escenarios.

  - **Alto Factor de Aceptación Familiar (WAF):** Para miembros de la familia no acostumbrados a apps de teléfono o altavoces inteligentes (como ancianos o niños), decirles "presiona este botón para encender la luz" es la interacción más intuitiva y fácil de aprender.

  - **Un "Interruptor Inteligente" Que No Necesita Recarga:** Las baterías de un control remoto tradicional pueden durar a menudo un año o dos, lo que es mucho más conveniente que muchos gadgets inteligentes que necesitan carga frecuente.

#### **Idea 2: Crear un "Botón Mágico IoT" Universal**

**Concepto Central**

¿El botón táctil del dispositivo realmente tiene que ser solo para controlar IR? ¡Por supuesto que no! Podemos convertirlo en un botón mágico que controle **cualquier cosa** en tu casa. La clave es "desacoplar"—separar completamente la acción física de "presionar el botón" de la acción inteligente de "qué sucede realmente".

- **Pasos de Implementación**

  1. **Hacer que el Botón Sea Solo un "Reportero":** En el firmware, configura el botón táctil (para toque simple, doble toque, presión larga) para no realizar ninguna tarea específica, sino solo enviar una "notificación de evento" a Home Assistant. Por ejemplo, en un doble toque, solo reporta a HA: "¡Oye! ¡Fui tocado dos veces!"

  2. **Dejar que HA Sea el "Comandante":** En Home Assistant, crea automatizaciones que específicamente escuchen estos varios "reportes" (eventos) del botón.

  3. **Conectar Todo, Hacer Cualquier Cosa:** Una vez que HA reciba un reporte, ¡puede comandar cualquier dispositivo en tu hogar para actuar!

     - Recibe un reporte de **"toque simple"** -> Alterna todas las **luces Zigbee** de la casa encendido/apagado.

     - Recibe un reporte de **"doble toque"** -> Comanda a la **aspiradora robot** para comenzar la limpieza.

     - Recibe un reporte de **"presión larga"** -> Ejecuta una escena "Modo Película", cerrando las cortinas, atenuando las luces, y encendiendo el proyector y sistema de sonido.

- **Ventajas de Este Enfoque**

  - **Romper Límites, Posibilidades Infinitas:** Tu botón táctil ya no es solo parte de un "control remoto IR", sino un interruptor físico para todo tu hogar inteligente, capaz de controlar cualquier dispositivo conectado a HA.

  - **Definir Flexiblemente, Cambiar por Capricho:** Hoy un doble toque inicia la aspiradora, ¿pero mañana quieres que reproduzca música? Solo edita la automatización en la interfaz de HA, sin necesidad de tocar el firmware en absoluto.

  - **La Interacción Más Intuitiva:** Dale a tu familia la forma más simple de controlar las cosas. Un botón físico con retroalimentación háptica es a menudo mucho más conveniente y elegante que abrir una app de teléfono.

En resumen, no veas el XIAO IR Mate solo como una herramienta IR. ¡Piénsalo como un mini-robot conectado a Wi-Fi, con sentido del tacto y una "voz" (el emisor IR). Lo que puede hacer está limitado solo por tu imaginación!

## Preguntas Frecuentes (FAQ)

> **P: ¿Por qué no puedo encontrar el hotspot del XIAO IR Mate en mi teléfono?**
> **R:** Por favor confirma que el dispositivo esté correctamente alimentado vía Type-C. Verifica si el LED blanco está parpadeando. Si la luz está apagada, intenta cambiar el cable o fuente de alimentación. Si el dispositivo ha sido configurado exitosamente en una red antes, no creará un hotspot AP nuevamente a menos que la conexión de red falle o haya sido restablecido de fábrica presionando largo el botón RESET.

> **P: ¿Qué debo hacer si falla el aprendizaje IR? (Firmware de Fábrica)**
> **R:** Por favor asegúrate de que tu control remoto original tenga suficiente energía de batería y se mantenga lo más cerca posible del receptor del IR Mate (usualmente el componente negro, semi-transparente). También, evita realizar el proceso de aprendizaje bajo luz fuerte o cerca de otras fuentes de interferencia infrarroja.

> **P: ¿El dispositivo se muestra como desconectado en HA?**
> **R:** Por favor verifica que tu Wi-Fi doméstico esté funcionando correctamente y que el IR Mate esté dentro del rango de señal Wi-Fi. Puedes intentar presionar brevemente el botón RESET para reiniciar el dispositivo.

> **P: Después de flashear firmware personalizado, ¿cómo restauro el firmware de fábrica?**
> **R:** Necesitarías obtener el archivo `.bin` del firmware de fábrica o su archivo fuente YAML de ESPHome, y luego flashearlo nuevamente vía ESPHome para sobrescribir el firmware personalizado.

> **P: ¿Cómo uso las señales aprendidas (firmware de fábrica) o el control de AC (firmware avanzado) en automatizaciones?**
> **R:** En el editor de automatización o script de HA, elige "Call service".

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
