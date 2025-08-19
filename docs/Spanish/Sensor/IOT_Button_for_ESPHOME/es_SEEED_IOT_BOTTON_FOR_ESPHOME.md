---
description: Connect Seeed Studio IoT Button To ESPHome
title: Conecta el Botón IoT de Seeed Studio a ESPHome
keywords:
  - ESPHOME
  - IoT Button
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /es/iot_button_for_esphome
last_update:
  date: 05/17/2025
  author: Guillermo
---

# Conecta el Botón IoT de Seeed Studio a ESPHome

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg" style={{width:600, height:'auto'}}/></div>

En este tutorial te mostraremos cómo conectar el Botón IoT de Seeed Studio a Home Assistant usando ESPHome. Aprenderás a configurar el botón para detectar distintos patrones de pulsación (clic único, doble clic y pulsación larga) y activar diferentes acciones en tu hogar inteligente.

## Materiales necesarios

<div class="table-center">
  <table align="center">
    <tr>
      <th>Seeed Studio IoT Button</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

El Botón IoT de Seeed Studio es un botón inteligente versátil con un chip ESP32-C6 integrado. Es un dispositivo completo y autónomo que puede integrarse con Home Assistant para controlar dispositivos y activar automatizaciones. Gracias a su chip ESP32-C6, ofrece bajo consumo de energía y conectividad confiable sin necesidad de placas de desarrollo adicionales.

## Instalar ESPHome en Home Assistant

**Paso 1**. Haz clic en **Ajustes** --> **Complementos** --> **TIENDA DE COMPLEMENTOS**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.5.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2**. Busca **ESPHome**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/2.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3**. Haz clic en **INSTALAR**, luego en **INICIAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/3.png" style={{width:1000, height:'auto'}}/></div>

**Paso 4**. Instalación completada exitosamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/4.png" style={{width:1000, height:'auto'}}/></div>

## Añadir el Botón IoT a ESPHome

**Paso 5**. Haz clic en **+NUEVO DISPOSITIVO**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/5.png" style={{width:1000, height:'auto'}}/></div>

**Paso 6**. Haz clic en **SIGUIENTE** y asigna un nombre a tu dispositivo. Recomendamos usar "seeedstudio-iot-button" o algo similar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/6.png" style={{width:600, height:'auto'}}/></div>

**Paso 7**. Selecciona el tipo de dispositivo

Para el Botón IoT con ESP32-C6 integrado, selecciona "ESP32" como tipo de dispositivo. Más adelante modificaremos la configuración para indicar el modelo correcto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/7.png" style={{width:580, height:'auto'}}/></div>

**Paso 8**. Una vez añadido el dispositivo, haz clic en **OMITIR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/8.png" style={{width:600, height:'auto'}}/></div>

## Configurar el Botón IoT

### Usando el Web Flasher (Método Recomendado)

La forma más sencilla de empezar con el Botón IoT es utilizar la herramienta Web Flasher para instalar el firmware ESPHome desde tu navegador.

**Paso 1**: Visita el sitio [Seeed Studio IoT Button Firmware Flasher](https://gadgets.seeed.cc/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/iot_button_zigbee/3.png" style={{width:800, height:'auto'}}/></div>

**Paso 2**: Conecta tu Botón IoT a la computadora mediante un cable USB.

**Paso 3**: Haz clic en el botón "Install" en la página del Web Flasher.

**Paso 4**: Selecciona el puerto USB correcto en el cuadro emergente.

**Paso 5**: El navegador descargará e instalará el firmware automáticamente en tu dispositivo.

**Paso 6**: Una vez completada la instalación, el Botón IoT creará su propia red WiFi. Conéctate a la red llamada "seeedstudio-iot-button" desde tu computadora o teléfono.

**Paso 7**: Una vez conectado, se abrirá automáticamente una página de configuración. Si no se abre, accede a `http://192.168.4.1` desde tu navegador.

**Paso 8**: En la página de configuración:
   - Ingresa el nombre de tu red WiFi (SSID) y contraseña
   - Asegúrate de que sea la misma red a la que está conectado tu servidor Home Assistant
   - Haz clic en "Guardar" para aplicar los ajustes

**Paso 9**: El Botón IoT se reiniciará y se conectará a tu red WiFi doméstica.

**Paso 10**: En Home Assistant, ve a Ajustes > Dispositivos y Servicios. Verás una notificación indicando que se ha detectado un nuevo dispositivo ESPHome. Haz clic en "Configurar" para añadirlo.

**Paso 11**: Sigue los pasos que aparecen en pantalla para completar la configuración. El Botón IoT aparecerá en tu panel de Home Assistant con tres interruptores virtuales que corresponden a las diferentes acciones del botón.

### Método alternativo: Usar el panel de ESPHome

Si prefieres mayor control sobre la configuración, puedes usar el panel de ESPHome y seguir los pasos a continuación.

### Añadir la configuración de ESPHome

**Paso 1**. La tarjeta del dispositivo aparecerá en la página principal de ESPHome. Haz clic en **EDITAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/9.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2**. Reemplaza toda la configuración por el siguiente código:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/10.png" style={{width:1000, height:'auto'}}/></div>

<details>

<summary>Haz clic aquí para ver el código completo</summary>

```yaml
substitutions:
  name: "seeedstudio-iot-button"
  friendly_name: "Seeed Studio IoT Button"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: true
  project:
    name: "seeedstudio.iot_button"
    version: "3.3"
  platformio_options:
    board_upload.maximum_size: 4194304
  on_boot:
    priority: -100.0
    then:
      - light.turn_on: blue_led
      - delay: 5min  # Wait for initialization
      - logger.log: "Boot complete, entering light sleep"
      - light_sleep.enter:
          id: light_sleep_1

esp32:
  board: esp32-c6-devkitc-1
  variant: esp32c6
  flash_size: 4MB # upload.flash_size
  framework:
    type: esp-idf
    sdkconfig_options:
      CONFIG_FREERTOS_UNICORE: y
      CONFIG_FREERTOS_HZ: '1000'
      CONFIG_PM_USE_RTC_TIMER_REF: y
      CONFIG_XTAL_FREQ_40: y
      CONFIG_ESP_DEFAULT_CPU_FREQ_MHZ: '80000000'
      CONFIG_PM_DFS_INIT_AUTO: n
      CONFIG_FREERTOS_USE_TICKLESS_IDLE: y
      CONFIG_PM_ENABLE: y
      CONFIG_PM_SLP_IRAM_OPT: y
      CONFIG_PM_RTOS_IDLE_OPT: y
      CONFIG_ESP_WIFI_SLP_IRAM_OPT: y
      CONFIG_PM_POWER_DOWN_CPU_IN_LIGHT_SLEEP: y
      CONFIG_PM_PROFILING: y

external_components:
  - source:
      type: git
      url: https://github.com/Seeed-Studio/xiao-esphome-projects
      ref: main
    components: [ light_sleep ]
    refresh: 0s

  - source:
      type: git
      url: https://github.com/ackPeng/esphome.git
      ref: api
    components: [ api ]
    refresh: 0s
    
# Enable logging
logger:
  hardware_uart: USB_SERIAL_JTAG
  level: DEBUG

# Enable Home Assistant API
api:

ota:
  - platform: esphome

wifi:
  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "seeedstudio-iot-button"
    # ap_timeout: 10s

  # WiFi network status events
  on_connect:
    then:
      - logger.log: "WiFi Connected!"
      # Show green color for 3 seconds then turn off to save power
      - light.turn_on: 
          id: rgb_led
          brightness: 100%
          red: 0%
          green: 100%
          blue: 0%
          effect: "Subtle Flicker"
      - delay: 1s
      - light.turn_off: rgb_led

  on_disconnect:
    then:
      - logger.log: "WiFi Disconnected!"

captive_portal:

output:
  - platform: gpio
    pin: GPIO2
    id: user_led
    inverted: True
  - platform: gpio
    pin: GPIO18
    id: enable_pin

light_sleep:
  id: light_sleep_1
  wakeup_pin: 9
  on_prepare_sleep:
    then:
      - logger.log: "Preparing to enter light sleep"
      - light.turn_off: blue_led
      - light.turn_off: rgb_led
  on_wakeup:
    then:
      - light.turn_on: blue_led
      - logger.log: "Device woke up from light sleep"
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'

# Switch to control the LED strip power
switch:
  - platform: output
    name: "LED Strip Power"
    output: enable_pin
    id: led_power
    restore_mode: ALWAYS_ON  # Auto-enable on startup
    internal: true

  # Virtual switches for button actions
  - platform: template
    name: "Switch 1"
    id: virtual_toggle_1
    optimistic: true
    turn_on_action:
      - logger.log: "Single Short Clicked"
      - logger.log: "Switch 1 turned ON"
      # Toggle blue LED to indicate button press
      - light.turn_on:
          id: rgb_led
          effect: "Blink"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # Add your switch-on action
    turn_off_action:
      - logger.log: "Single Short Clicked"
      - logger.log: "Switch 1 turned OFF"
      # Toggle blue LED to indicate button press
      - light.turn_on:
          id: rgb_led
          effect: "Blink"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # Add your closing action

  - platform: template
    name: "Switch 2"
    id: virtual_toggle_2
    optimistic: true
    turn_on_action:
      - logger.log: "Double Clicked"
      - logger.log: "Switch 2 turned ON"
      # Double blink blue LED to indicate button press
      - light.turn_on:
          id: rgb_led
          brightness: 100%
          red: 100%
          green: 50%
          blue: 0%
          effect: "Subtle Flicker"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # Add your switch-on action
    turn_off_action:
      - logger.log: "Double Clicked"
      - logger.log: "Switch 2 turned OFF"
      # Double blink blue LED to indicate button press
      - light.turn_on:
          id: rgb_led
          brightness: 100%
          red: 100%
          green: 50%
          blue: 0%
          effect: "Subtle Flicker"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # Add your closing action

  - platform: template
    name: "Switch 3"
    id: virtual_toggle_3
    optimistic: true
    turn_on_action:
      - logger.log: "Long Press"
      - logger.log: "Switch 3 turned ON"
      # Long blue LED on to indicate button press
      - light.turn_on:
          id: rgb_led
          effect: "Rainbow"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # Add your switch-on action
    turn_off_action:
      - logger.log: "Long Press"
      - logger.log: "Switch 3 turned OFF"
      # Long blue LED on to indicate button press
      - light.turn_on:
          id: rgb_led
          effect: "Rainbow"
      - delay: 1s
      - light.turn_off: rgb_led
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      # Add your closing action


light:
  - platform: binary
    name: "SeeedStudio IoT Button Blue LED"
    output: user_led
    id: blue_led
    internal: true
  - platform: esp32_rmt_led_strip
    internal: true
    pin: GPIO19
    num_leds: 1
    restore_mode: RESTORE_AND_OFF
    chipset: WS2812
    rgb_order: GRB
    is_rgbw: False
    name: "RGB Status LED"
    id: rgb_led
    effects:
      - random:
          name: "Random Color"
          transition_length: 5s
          update_interval: 10s
      - addressable_rainbow:
          name: "Rainbow"
      - strobe:
          name: "Blink"
          colors:
            - state: True
              brightness: 100%
              red: 100%
              green: 0%
              blue: 50%
              duration: 500ms
            - state: False
              duration: 500ms
      - flicker:
          name: "Subtle Flicker"
          alpha: 95%
          intensity: 1.5%

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO9
      inverted: True
      mode:
        input: True
        pullup: True
    name: "SeeedStudio IoT Button"
    on_multi_click:
      - timing:
          - ON for at most 300ms
          - OFF for at least 0.5s
        then:
          - logger.log: "Single Short Clicked"
          - switch.toggle: virtual_toggle_1

      - timing:
          - ON for at most 300ms
          - OFF for at most 0.5s
          - ON for at most 300ms
          - OFF for at least 0.2s 
        then:
          - logger.log: "Double Clicked"
          - switch.toggle: virtual_toggle_2

      - timing:
          - ON for 1s to 1.5s
          - OFF for at least 0.5s
        then:
          - logger.log: "Long Press"
          - switch.toggle: virtual_toggle_3
    on_press:
      - globals.set:
          id: button_press_time
          value: !lambda 'return millis();'
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
    on_release:
      - globals.set:
          id: last_activity_time
          value: !lambda 'return millis();'
      - if:
          condition:
            lambda: 'return (millis() - id(button_press_time)) >= 5000;'
          then:
            - logger.log: "Entering Light Sleep Mode"
            - light_sleep.enter:
                id: light_sleep_1

globals:
  - id: button_press_time
    type: uint32_t
    restore_value: no
    initial_value: '0'
  - id: last_activity_time
    type: uint32_t
    restore_value: no
    initial_value: '0'

interval:
  - interval: 10s
    then:
      - if:
          condition:
            lambda: 'return (millis() - id(last_activity_time)) >= 120000;'
          then:
            - logger.log: "No activity for 2 minutes, entering light sleep"
            - light_sleep.enter:
                id: light_sleep_1
```

</details>

:::note
Asegúrate de reemplazar "Your_WiFi_SSID" y "Your_WiFi_Password" con los datos reales de tu red WiFi. La configuración debe coincidir con la red a la que está conectado tu servidor de Home Assistant para asegurar una conexión correcta.
:::

### Entendiendo la Configuración

Vamos a desglosar las partes clave de esta configuración:

1. **Configuración del ESP32**:  
   - Especifica la variante ESP32-C6 y el tipo de placa correspondiente al chip del Botón IoT  
   - Establece el tamaño de la memoria flash a 4 MB  
   - Usa el framework ESP-IDF, requerido para el ESP32-C6

2. **Configuración del Botón**:  
   - Se conecta al GPIO9, donde está conectado internamente el botón físico  
   - `Inverted: true` indica que el pin está en alto cuando no se presiona y en bajo cuando se presiona  
   - Configura tres patrones distintos de pulsación:  
     - Clic único (presionar y soltar rápidamente)  
     - Doble clic (dos pulsaciones rápidas)  
     - Pulsación larga (mantener presionado por 1 a 2.5 segundos)

3. **Interruptores Virtuales**:  
   - Crea tres *template switches* que aparecerán en Home Assistant  
   - Cada interruptor corresponde a un patrón de pulsación distinto  
   - Estos interruptores pueden utilizarse en automatizaciones para controlar otros dispositivos

**Paso 3**. Una vez finalices la configuración, haz clic en **INSTALAR** en la esquina superior derecha y selecciona **Conectar a esta computadora**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/12.png" style={{width:1000, height:'auto'}}/></div>

**Paso 4**. Espera a que finalice el proceso de compilación. Luego haz clic en **Descargar proyecto**, selecciona **Formato de fábrica**, y después haz clic en **Abrir ESPHome Web**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.2.png" style={{width:1000, height:'auto'}}/></div>

**Paso 5**. Conecta el Botón IoT a tu computadora mediante USB. Haz clic en **CONECTAR** y selecciona el puerto serie correcto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.3.png" style={{width:1000, height:'auto'}}/></div>

**Paso 6**. Haz clic en **INSTALAR** para cargar el firmware en tu Botón IoT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/15.png" style={{width:1000, height:'auto'}}/></div>

**Paso 7**. Si todo sale bien, verás un mensaje de instalación exitosa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/16.png" style={{width:1000, height:'auto'}}/></div>

## Añadir el Botón IoT a Home Assistant

**Paso 16**. Vuelve a Home Assistant. Haz clic en **Ajustes** y selecciona **Dispositivos y servicios**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/17.png" style={{width:1000, height:'auto'}}/></div>

**Paso 17**. Deberías ver una notificación indicando que se ha detectado un nuevo dispositivo. Haz clic en **CONFIGURAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

**Paso 18**. Sigue las instrucciones para añadir el Botón IoT a Home Assistant. Puedes seleccionar el área a la que pertenece el dispositivo y hacer clic en **FINALIZAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/19.png" style={{width:1000, height:'auto'}}/></div>

**Paso 19**. El Botón IoT y sus tres interruptores virtuales ahora aparecerán en el panel de Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/20.png" style={{width:1000, height:'auto'}}/></div>

## Crear automatizaciones con el Botón IoT

Ahora que tu Botón IoT está configurado, puedes crear automatizaciones para controlar dispositivos en tu hogar inteligente. Vamos a crear una automatización sencilla que encienda una luz cuando se presione el botón.

**Paso 20**. En Home Assistant, ve a **Ajustes** > **Automatizaciones y escenas**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

**Paso 21**. Haz clic en **CREAR AUTOMATIZACIÓN**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

**Paso 22**. Configura tu automatización:

1. **Nombre**: Ponle un nombre descriptivo, como "Botón IoT - Pulsación única - Encender luz"  
2. **Disparador**: Selecciona "Estado" como tipo de disparador  
   - Entidad: Selecciona "Switch 1" (para pulsación única)  
   - De: "off"  
   - A: "on"  
3. **Acción**: Elige el dispositivo que deseas controlar  
   - Por ejemplo, selecciona una luz y configúrala para que se encienda

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

**Paso 23**. Haz clic en **GUARDAR** para crear la automatización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

## Uso avanzado: Controlar diferentes dispositivos con distintos patrones de pulsación

Una de las funciones más potentes de la configuración del IoT Button es su capacidad para detectar diferentes patrones de pulsación. Aquí tienes algunas ideas para usar cada patrón:

1. **Pulsación simple (Switch 1)**:
   - Encender/apagar luces en la habitación actual
   - Alternar un dispositivo de uso frecuente

2. **Doble pulsación (Switch 2)**:
   - Activar una escena (por ejemplo, "Noche de Película" que atenúa las luces y enciende la TV)
   - Controlar un grupo de dispositivos al mismo tiempo

3. **Pulsación larga (Switch 3)**:
   - Activar funciones de seguridad (armar/desarmar la alarma)
   - Ejecutar rutinas de emergencia
   - Apagar múltiples dispositivos a la vez

Para configurar estas automatizaciones avanzadas, crea automatizaciones adicionales siguiendo los pasos anteriores, pero selecciona el switch correspondiente (Switch 1, 2 o 3) como disparador y configura las acciones deseadas.

## Solución de problemas

Si encuentras problemas con tu IoT Button, aquí tienes algunos pasos comunes de solución:

1. **El botón no se conecta a WiFi**:
   - Verifica tus credenciales WiFi en la configuración de ESPHome
   - Asegúrate de que tu red WiFi sea de 2.4GHz (el ESP32-C6 soporta 2.4GHz y 5GHz, pero 2.4GHz suele tener mejor alcance)

2. **El botón no aparece en Home Assistant**:
   - Verifica que el botón y Home Assistant estén en la misma red
   - Reinicia el complemento ESPHome y Home Assistant

3. **No se detectan las pulsaciones del botón**:
   - Verifica la configuración del pin GPIO (GPIO9 para el IoT Button estándar)
   - Revisa los registros en ESPHome para ver si se detectan las pulsaciones

4. **Las automatizaciones no se activan**:
   - Asegúrate de que la automatización esté habilitada
   - Verifica que las condiciones del disparador coincidan exactamente (cambio de estado de "off" a "on")

## Solución de problemas

### P1: ¿Por qué mi dispositivo se desconecta y no puede conectarse a Internet después de reemplazar la batería, aunque esté cargada?

Después de retirar la batería, debido a la estrategia de protección del chip de las baterías 18650, es necesario reactivarla brevemente con un cable USB con carga para que funcione correctamente.

## Recursos

- **[GITHUB]** [Repositorio Zigbee del Seeed IoT Button en GitHub](https://github.com/Seeed-Projects/Seeed_IoT_Button_Zigbee)
- **[GITHUB]** [Repositorio ESPHome del Seeed IoT Button en GitHub](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-iot-button)
- **[PDF]** [Esquema en PDF del Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH.pdf)
- **[SCH&PCB]** [Esquema y PCB del Seeed IoT Button](https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/Seeed_IoT_Button_SCH&PCB.zip)

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte y asegurarnos de que tu experiencia sea lo más fluida posible. Ofrecemos diversos canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
