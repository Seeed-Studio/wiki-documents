---
description: Primeros Pasos con el Sensor de Humedad del Suelo XIAO
title: Primeros Pasos con el Sensor de Humedad del Suelo XIAO
keywords:
  - XIAO
  - Sensor de Humedad del Suelo
  - ESP32-C6
  - Humedad
image: https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/1.webp
slug: /es/xiao_soil_moisture_sensor
last_update:
  date: 05/26/2025
  author: Robben
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/top.jpg" style={{width:550, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-Soil-Sensor-p-6452.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El Sensor de Humedad del Suelo XIAO es un monitor ambiental compacto y de bajo consumo alimentado por el [XIAO ESP32-C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-Pre-Soldered-p-6328.html). Funcionando con una sola batería AA, ofrece operación de larga duración y actualizaciones en tiempo real de las condiciones del suelo. Cuenta con Detección Adaptativa de Humedad del Suelo Pre-Calibrada para un monitoreo preciso del suelo. Además, permite intervalos de monitoreo dinámicos y lecturas instantáneas para datos precisos y responsivos. Totalmente compatible con Home Assistant, es ideal para jardinería inteligente y agricultura de precisión: eficiente, confiable y diseñado para el cuidado sostenible de plantas.

## Características

**1.Monitoreo de Humedad del Suelo de Tres Niveles**  

- 🌿 **Normal:** La humedad del suelo es óptima, no se necesita riego.  
- 🌤 **Casi Seco:** La humedad está disminuyendo, prepárate para regar pronto.  
- 🌵 **Seco:** Críticamente bajo, riega inmediatamente.

Umbrales predeterminados:

- **60%** → Transición de Verde a Amarillo.
- **20%** → Transición de Amarillo a Rojo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_1.jpg" style={{width:800, height:'auto'}}/></div>

**2.Plug-and-Play con Home Assistant**  
Precargado con ESPHome: funciona inmediatamente con Home Assistant, permitiéndote monitorear y automatizar directamente desde tu panel de control de hogar inteligente.

**3.Monitoreo Adaptativo y Lectura Instantánea**  

- Ajusta automáticamente los intervalos de verificación (8h → 1h → 15min) dependiendo del nivel de humedad.  
- Presiona el botón una vez para obtener una lectura instantánea de humedad en cualquier momento.

**4.Calibración Simple (Opcional)**  
Presiona rápidamente el botón tres veces para recalibrar para tu suelo específico: lectura seca + lectura húmeda → el sistema se ajusta automáticamente.

- Triple presión corta → Entrar al modo de calibración:
  - LED rojo parpadea → Dentro de 10 segundos, inserta el sensor en suelo completamente seco.
  - Espera hasta que el LED rojo deje de parpadear, luego espera 3 segundos.
  - LED verde parpadea → Dentro de 10 segundos, inserta el sensor en suelo completamente húmedo.
  - Espera hasta que el LED verde deje de parpadear, luego espera 3 segundos.
  - Resultado de calibración:
    - Dos parpadeos verdes rápidos → Éxito.
    - Dos parpadeos rojos rápidos → Fallo (probablemente debido a lecturas seca/húmeda intercambiadas).

Nota: Durante la calibración, las lecturas iniciales pueden ser inestables si el sensor no se inserta rápidamente. El sistema tomará múltiples muestras, aplicará filtrado y promediará las lecturas para una calibración confiable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_4.jpg" style={{width:800, height:'auto'}}/></div>

## Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/hardware.jpg" style={{width:800, height:'auto'}}/></div>

## Primeros Pasos

Esta sección te guiará a través de la configuración de tu Sensor de Humedad del Suelo XIAO por primera vez.

### Materiales Requeridos

Antes de que comience el contenido del tutorial de este artículo, es posible que necesites tener el siguiente hardware listo.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Sensor de Humedad del Suelo XIAO</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/big.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:270, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green es la forma más fácil y centrada en la privacidad de automatizar tu hogar. Ofrece una configuración sin esfuerzo y te permite controlar todos los dispositivos inteligentes con un solo sistema, donde todos los datos se almacenan localmente por defecto. Esta placa se beneficia del próspero ecosistema de Home Assistant y será mejorada cada mes por código abierto.

Recomendamos usar Home Assistant Green como el host de Home Assistant para este tutorial, o puedes usar cualquier host de Home Assistant con un Supervisor.

:::tip instalar Home Assistant
También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- **[Primeros Pasos con Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/es/ODYSSEY-X86-Home-Assistant/)**
- **[Primeros Pasos con Home Assistant en reTerminal](https://wiki.seeedstudio.com/es/reTerminal_Home_Assistant/)**
- **[Primeros Pasos con Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/es/h68k-ha-esphome/)**

Si no estás usando un producto de Seeed Studio, también puedes verificar y aprender cómo instalar Home Assistant para otros productos en el sitio web oficial de Home Assistant.

- **[Instalación de Home Assistant](https://www.home-assistant.io/installation/)**
:::

### Paso 1. Instalar ESPHome

Si ya has instalado ESPHome, puedes omitir este paso.

Ve a **Configuración** -> **Complementos** -> **TIENDA DE COMPLEMENTOS**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>

Busca ESPHome y haz clic en él. Haz clic en **INSTALAR** e **INICIAR**.

:::tip
Si no puedes encontrar ESPHome en la tienda de complementos, asegúrate de estar usando una instalación de Home Assistant que soporte complementos (como Home Assistant OS o instalaciones supervisadas). Para otros tipos de instalación (como Home Assistant Container), es posible que necesites ejecutar el Constructor de Dispositivos ESPHome independientemente usando Docker. Consulta la [documentación oficial de ESPHome](https://esphome.io/guides/getting_started_hassio) para más detalles.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

Y luego, ESPHome Builder aparecerá en la barra lateral.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

### Paso 2: Preparando el Sensor de Humedad del Suelo

Por defecto, tu dispositivo (XIAO ESP32C6) viene pre-flasheado con firmware para el Sensor de Humedad del Suelo XIAO. Sin embargo, si necesitas modificar o actualizar el firmware predeterminado, un archivo de configuración YAML de fábrica está disponible en la sección de Recursos a continuación. Puedes personalizar la lógica según sea necesario y flashearlo a través de Home Assistant.

:::tip
Para asegurar lecturas precisas, simplemente realiza una calibración rápida del sensor antes del uso.
:::

### Paso 3: Configuración de Red

1. **Habilitar Punto de Acceso**:
   - Al encender por primera vez, el módulo creará una red Wi-Fi (SSID: `Xiao-Soil-Moisture-Monitor`).

2. **Acceder a la Configuración**:
   - Conéctate a la red usando un teléfono o PC.
   - Abre un navegador y navega a `http://192.168.4.1`.
   - Ingresa el SSID y la contraseña de tu red Wi-Fi doméstica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:650, "border-radius": '15px'}}/></div>

3. **Integración con Home Assistant**:
   - Una vez conectado a la red doméstica, el módulo será descubrible en Home Assistant bajo `Configuración -> Dispositivos y Servicios`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:400, height:'auto', "border-radius": '15px'}}/></div>

De esta manera, puedes conectar el módulo a tu red de Home Assistant y permitir que Home Assistant lo descubra.

### Paso 4: Agregar el dispositivo del módulo

1. **Descubrimiento Automático**:
   - Asegúrate de que **ESPHome** esté instalado en Home Assistant.
   - Navega a `Configuración -> Dispositivos y Servicios -> Integraciones` y busca el dispositivo.

2. **Configuración Manual**:
   - Si no se descubre automáticamente, agrega manualmente el dispositivo especificando su dirección IP.

Después de agregar el dispositivo, verás una nueva tarjeta de sensor llamada Solid_sensor en la página de Resumen de Home Assistant, mostrando tanto la medición de la batería como el estado actual de humedad del suelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/View_in_HA.png" style={{width:400, height:'auto', "border-radius": '15px'}}/></div>

Ahora que tu sensor de suelo está funcionando, ¡adelante y diviértete monitoreando tus plantas!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_2.jpg" style={{width:800, height:'auto'}}/></div>

## Uso Avanzado

Puedes modificar la lógica del firmware original y flashear tu versión personalizada del sensor de suelo directamente a través de Home Assistant.
### Paso 1. Instalar ESPHome

Consulta la guía de instalación en el Paso 1 anterior.

### Paso 2. Agregar un nuevo dispositivo

Ve a ESPHome y haz clic en **NUEVO DISPOSITIVO**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/06.png" style={{width:800, height:'auto'}}/></div>

Dale al dispositivo un nombre que te guste y haz clic en **SIGUIENTE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/2.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Después de crear un nuevo dispositivo, haz clic en **EDITAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/4.png" style={{width:800, height:'auto'}}/></div>

### Paso 3. Instalar firmware

Aquí está el firmware de fábrica：
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao-soil-moisture-monitor" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Aquí tienes una configuración YAML de `ESPHome` lista para usar con Home Assistant:
<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

```yaml
esphome:
  name: soil-moisture-monitor
  friendly_name: XIAO Soil Moisture Monitor
  platformio_options:
    platform: https://github.com/mnowak32/platform-espressif32.git#boards/seeed_xiao_esp32c6
  on_boot: 
    then:
      # - output.turn_off: gpio_3_output
      - output.turn_on: gpio_14_output
      - light.turn_on:
          id: pwm_led
          brightness: 68%  # Set 68% duty cycle
      - if:
          condition:
            lambda: 'return id(wifi_net_status) == 0;'
          then:
            - logger.log: "The device has not been set to the network"
            - deep_sleep.prevent: deep_sleep_control
          else:
            - logger.log: "The device has been networked"
      - delay: 1s
      - script.execute: check_moisture_once

esp32:
  board: seeed_xiao_esp32c6
  variant: ESP32C6
  flash_size: 4MB    
  framework:
    type: esp-idf
    version: "5.2.1"
    platform_version: 6.6.0
    sdkconfig_options:
      CONFIG_ESPTOOLPY_FLASHSIZE_4MB: y

# LED Yellow D10 18
# LED RED D9  20
# LED Green D8 19
# button D2  2

# Battery D0 0
# PWM out D3 21
# Soil sensor D1  1

output:
  - platform: gpio
    pin: GPIO18
    id: yellow_led_output

  - platform: gpio
    pin: GPIO19
    id: green_led_output

  - platform: gpio
    pin: GPIO20
    id: red_led_output

  - platform: ledc
    pin: GPIO21  
    id: pwm_output
    frequency: 200kHz  # Set the frequency to 200kHz

  - platform: gpio
    pin: GPIO14
    id: gpio_14_output

light:
  - platform: binary
    id: yellow_led
    output: yellow_led_output

  - platform: binary
    id: green_led
    output: green_led_output

  - platform: binary
    id: red_led
    output: red_led_output

  - platform: monochromatic
    output: pwm_output
    id: pwm_led
    name: "200kHz PWM"
    internal: true
    default_transition_length: 0s

script:
  - id: red_led_blink
    mode: restart
    then:
      - repeat:
          count: 10
          then:
            - light.turn_on: red_led
            - delay: 500ms
            - light.turn_off: red_led
            - delay: 500ms

  - id: green_led_blink
    mode: restart
    then:
      - repeat:
          count: 10
          then:
            - light.turn_on: green_led
            - delay: 500ms
            - light.turn_off: green_led
            - delay: 500ms

  - id: fast_blink_green
    then:
      - repeat:
          count: 5
          then:
            - light.turn_on: green_led
            - delay: 200ms
            - light.turn_off: green_led
            - delay: 200ms

  - id: fast_blink_red
    then:
      - repeat:
          count: 5
          then:
            - light.turn_on: red_led
            - delay: 200ms
            - light.turn_off: red_led
            - delay: 200ms

  - id: red_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: red_led
            - delay: 1000ms
            - light.turn_off: red_led
            - delay: 100ms
  - id: yellow_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: yellow_led
            - delay: 1000ms
            - light.turn_off: yellow_led
            - delay: 100ms

  - id: green_led_blink_3_times
    then:
      - repeat:
          count: 1
          then:
            - light.turn_on: green_led
            - delay: 1000ms
            - light.turn_off: green_led
            - delay: 100ms

  - id: do_calibration
    then:
      - deep_sleep.prevent: deep_sleep_control
      - logger.log: "Starting calibration"
      - script.execute: red_led_blink
      - delay: 10s
      - script.stop: red_led_blink
      - lambda: |-
          float sum = 0;
          for (int i = 0; i < 10; i++) {
            id(soil_sensor).update();
            sum += id(soil_sensor).state;
            delay(200);
          }
          id(dry_value) = sum / 10.0;
          ESP_LOGI("calibration", "Dry value: %f", id(dry_value));

      - delay: 3s

      - script.execute: green_led_blink
      - delay: 10s
      - script.stop: green_led_blink
      - lambda: |-
          float sum = 0;
          for (int i = 0; i < 10; i++) {
            id(soil_sensor).update();
            sum += id(soil_sensor).state;
            delay(200);
          }
          id(wet_value) = sum / 10.0;
          ESP_LOGI("calibration", "Wet value: %f", id(wet_value));

      - delay: 3s

      - lambda: |-
          if (id(dry_value) > id(wet_value)) {
            ESP_LOGI("calibration", "Calibration success");
            id(fast_blink_green).execute();
          } else {
            ESP_LOGW("calibration", "Calibration failed");
            id(fast_blink_red).execute();
          }

      - delay: 3s
      - script.execute: check_moisture_once
      - delay: 3s
      - deep_sleep.enter: deep_sleep_control

  - id: check_moisture_once
    then:
      - lambda: |-
          for(int i = 0; i < 10; i++){
            id(soil_sensor).update();
            delay(200);
          }
          float moisture = id(soil_sensor).state;
          ESP_LOGI("moisture_check", "Moisture reading: %f", moisture);
          float Diff = id(dry_value) - id(wet_value);
          ESP_LOGI("moisture_check", "Diff is: %f", Diff);
          ESP_LOGI("moisture_check", "ref_dry Diff is: %f",id(dry_value) - Diff * id(ref_dry));
          ESP_LOGI("moisture_check", "ref_wet Diff is: %f",id(dry_value) - Diff * id(ref_wet));
          if (moisture >= (id(dry_value) - Diff * id(ref_dry))) {  // The drier -> the higher the voltage
            id(red_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(900000);
          } else if(moisture >  (id(dry_value) - Diff * id(ref_wet)) && moisture < (id(dry_value) - Diff * id(ref_dry))){
            id(yellow_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(3600000);
          }else{
            // moisture >  (id(dry_value) - Diff * id(ref_wet))
            id(green_led_blink_3_times).execute();
            id(deep_sleep_control).set_sleep_duration(28800000);
          }

globals:
  - id: button_press_count
    type: int
    restore_value: no
    initial_value: '0'
  - id: dry_value
    type: float
    restore_value: yes
    initial_value: '2.75'
  - id: wet_value
    type: float
    restore_value: yes
    initial_value: '1.2'
  - id: wifi_net_status
    type: int
    restore_value: yes
    initial_value: "0"
  - id: ref_dry
    type: float
    restore_value: no
    initial_value: "0.23"
  - id: ref_wet
    type: float
    restore_value: no
    initial_value: "0.58"

binary_sensor:
  - platform: gpio
    pin:
      number: GPIO2
      mode: INPUT_PULLUP
      allow_other_uses: true
    id: my_button
    on_press:
      - lambda: |-
          id(button_press_count)++;
      - delay: 1s  # Delay 1 second to see if the button is pressed 3 times in a row
      - lambda: |-
          if (id(button_press_count) == 3) {
            id(button_press_count) = 0;
            id(do_calibration).execute();  // Trigger calibration process
          } else if (id(button_press_count) == 1) {
            id(button_press_count) = 0;
            id(check_moisture_once).execute();  // Perform an ADC decision
          } else {
            id(button_press_count) = 0;
          }

deep_sleep:
  id: deep_sleep_control
  run_duration: 120s  
  sleep_duration: 180min  
  wakeup_pin: 
    number: GPIO2 
    inverted: true
    allow_other_uses: true
    mode: INPUT_PULLUP


external_components:
  - source: github://pr#7942
    components: [ "adc" ]

  - source:
      type: git
      url: https://github.com/ackPeng/esphome.git
      ref: api
    components: [ api ]
    refresh: 0s

sensor:
  - platform: adc
    id: soil_sensor
    pin: GPIO1
    name: "Soil moisture measurement"
    update_interval: 4s
    internal: true
    attenuation: 12db


  - platform: adc
    pin: GPIO0
    name: "Battery measurement"
    attenuation: 12db
    filters:                     # When the battery drops below 1V, it is dead.
      - lambda: |-
          if (x < 1.0) {
            return 0.0;
          } else {
            return ((x - 1.0) / (1.5 - 1.0)) * 100.0;
          } 
    unit_of_measurement: "%"
    update_interval: 5s
    force_update: True

  - platform: wifi_signal
    name: "wifi singnal strength"
    update_interval: 10s

text_sensor:
  - platform: template
    name: "Soil Moisture Status"
    id: soil_status
    lambda: |-
      float value = id(soil_sensor).state;
      float Diff = id(dry_value) - id(wet_value);
      if (value >= (id(dry_value) - Diff * id(ref_dry))) {
        return {"Dry"};
      } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
        return {"Almost Dry"};
      } else {
        return {"Normal Moisture"};
      }
    update_interval: never  # 不让自动触发上报，我们自己控制

interval:
  - interval: 5s
    then:
      - text_sensor.template.publish:
          id: soil_status
          state: !lambda |-
            return "";
      - delay: 10ms
      - text_sensor.template.publish:
          id: soil_status
          state: !lambda |-
            float value = id(soil_sensor).state;
            float Diff = id(dry_value) - id(wet_value);
            if (value >= (id(dry_value) - Diff * id(ref_dry))) {
              id(deep_sleep_control).set_sleep_duration(900000);
              return "Dry";
            } else if (value > (id(dry_value) - Diff * id(ref_wet)) && value < (id(dry_value) - Diff * id(ref_dry))) {
              id(deep_sleep_control).set_sleep_duration(3600000);
              return "Almost Dry";
            } else {
              id(deep_sleep_control).set_sleep_duration(28800000);
              return "Normal Moisture";
            }  

# Enable logging
logger:

improv_serial:

# Enable Home Assistant API
api:
  # encryption:
    # key: "YVjz+1l5zHXeyXFVinhaJkqh8RnG0gUVjaWniPEzCj4="

ota:
  - platform: esphome
    password: "dcad8df988971d761bc72a30d7878a40"

wifi:
  # ssid: "my68k"
  # password: "1143590135"
  on_connect:
    then:
      - if:
          condition:
            lambda: 'return id(wifi_net_status) == 0;'
          then:
            - logger.log: "The device has not been configured yet, but now it is successfully configured"
            - globals.set:
                id: wifi_net_status
                value: '1'
            - delay: 5s
            - deep_sleep.allow: deep_sleep_control
          else:
            - logger.log: "The device has been networked"

  on_disconnect:
    then:
      - globals.set:
          id: wifi_net_status
          value: '0'
  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Soil-Moisture-Monitor"
    password: ""

captive_portal:
```

</details>

<details>
<summary>Aquí tienes una descripción general de las funciones clave y la lógica utilizada en la configuración YAML.</summary>

`on_boot` – Define lo que sucede cuando el dispositivo se inicia.

- **Parámetros de entrada**: Ninguno.
- **Acción**: Enciende GPIO 14, establece el brillo del LED PWM, verifica el estado del Wi-Fi y activa la primera verificación de humedad.

`scripts (red_led_blink, green_led_blink, fast_blink_green, fast_blink_red, etc.)` – Patrones de parpadeo de LED predefinidos.

- **Parámetros de entrada**: Ninguno.
- **Acción**: Hace parpadear los LEDs en varios patrones para indicar estado o pasos de calibración.

`do_calibration` – Ejecuta el proceso de calibración para suelo seco y húmedo.

- **Parámetros de entrada**: Ninguno.
- **Acción**: Hace parpadear el LED rojo, espera la lectura en seco; luego hace parpadear el LED verde, espera la lectura húmeda; almacena valores promedio y confirma éxito o fallo.

`check_moisture_once` – Lee y evalúa los niveles de humedad del suelo.

- **Parámetros de entrada**: Ninguno.
- **Acción**: Toma múltiples lecturas ADC, las promedia, las compara con umbrales calibrados, decide el estado de humedad, activa LED y configuraciones de sueño profundo en consecuencia.

`binary_sensor (GPIO2)` – Maneja la lógica de presión del botón físico.

- **Parámetros de entrada**: Ninguno.
- **Acción**: Cuenta las presiones del botón; una sola presión activa una verificación de humedad, triple presión activa la calibración.

`globals` – Almacena el estado del sistema y datos de calibración.

- **Variables**:
  - `button_press_count`: Rastrea el conteo de presiones del botón.
  - `dry_value`, `wet_value`: Almacena valores ADC calibrados seco/húmedo.
  - `wifi_net_status`: Rastrea el estado de conexión Wi-Fi.
  - `ref_dry`, `ref_wet`: Factores de escala de referencia para cálculos de umbral.

`deep_sleep` – Gestiona los ciclos de sueño para ahorro de energía.

- **Parámetros de entrada**: Ninguno.
- **Acción**: Funciona durante 120 segundos, luego duerme hasta 180 minutos; se despierta con presión del botón o intervalo.

`sensor (ADC)` – Lee valores analógicos del sensor de suelo y batería.

- **Parámetros de entrada**: Ninguno.
- **Acción**: Mide la humedad del suelo y voltaje de la batería; la batería se escala para mostrar porcentaje.

`text_sensor` – Publica el estado de humedad del suelo legible para humanos.

- **Parámetros de entrada**: Ninguno.
- **Acción**: Muestra "Seco", "Casi Seco", o "Humedad Normal" en Home Assistant.

`wifi` + `api` + `ota` – Gestiona la conexión de red, integración con Home Assistant y actualizaciones de firmware por aire.

- **Parámetros de entrada**: SSID y contraseña de Wi-Fi.
- **Acción**: Conecta el dispositivo a la red, expone su API y habilita actualizaciones remotas.

</details>

Haz clic en **INSTALL** para instalar el código en el dispositivo y verás la siguiente imagen.

<Tabs>
<TabItem value='Install through browser'>

:::tip
Si tu Host de Home Assistant (Raspberry PI/Green/Yellow etc.) está lejos de ti, recomendamos usar este método. Puedes instalarlo con la computadora que tengas a mano.
:::

Primero, necesitas hacer clic en **Manual download** para descargar el firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abre este sitio web donde subiremos el firmware al panel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

Regresa a ESPHome para descargar el firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Selecciona Factory format.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Usa un cable USB para **conectar el panel ePaper a tu computadora** y haz clic en **CONNECT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

Selecciona usbmodemxxx(Windows es COMxxx) y haz clic en connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **INSTALL** y selecciona el firmware que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:650, height:'auto'}}/></div>

Tu firmware se flasheará en breve ～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/71.png" style={{width:650, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Si tu Host de Home Assistant (Raspberry PI/Green/Yellow etc.) está cerca, recomendamos usar este método ya que es más simple.
:::

Antes de instalar el código en el dispositivo, necesitas usar un cable USB para **conectar este dispositivo a tu Raspberry Pi o HA Green(Yellow) etc** que esté ejecutando Home Assistant.

Haz clic en las opciones siguiendo la imagen para instalar el código en el dispositivo.

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Espera un momento y verás la retroalimentación como la siguiente imagen. Significa que el código se está ejecutando exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/9.png" style={{width:650, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through Wi-Fi'>

:::tip
Esta es la forma más simple, pero con la premisa de que al instalar el programa por primera vez, primero debes subir el programa al Panel ePaper usando el método de la izquierda. Después de eso, puedes subirlo vía wifi. También, asegúrate de que tu configuración YAML incluya secciones `ota` y `api` configuradas correctamente con claves de encriptación válidas para que este método funcione.
:::

De esta manera, no necesitas conectar el panel ePaper a nada, solo asegúrate de que esté en línea.

Haz clic en la opción y luego el firmware se instalará en el panel ePaper automáticamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Espera un momento y verás la retroalimentación como la siguiente imagen. Si falla, puede ser debido a una señal débil. Por favor mueve el dispositivo más cerca de tu router.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/73.png" style={{width:650, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Restablecer

Si el firmware necesita ser reflasheado, puedes usar el siguiente enlace para restaurar el firmware predeterminado:  
[https://gadgets.seeed.cc/](https://gadgets.seeed.cc/)

Conecta tu dispositivo a tu computadora primero.  
Luego, encuentra **XIAO Soil Moisture Monitor** en la página y haz clic en **Connect** para proceder con el reflasheo.

## Recursos

- **[PDF]** [XIAO Soil Moisture Sensor SCH](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/SCH.pdf)
- **[Kicad]** [XIAO Soil Moisture Sensor PCB](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/Kicad.kicad_pcb)
- **[Yaml]** [XIAO Soil Moisture Sensor HA Yaml](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/HomeAssistanceYaml.yaml)
- **[Bin]** [XIAO Soil Moisture Sensor HA Factory Bin](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/factory.bin)
- **[LINK]** [XIAO Soil Moisture Sensor 3D file Printtables](https://www.printables.com/model/1260595-3d-enclosure-for-seeed-studio-xiao-75-epaper-panel/edit)
- **[LINK]** [XIAO Soil Moisture Sensor 3D file Thingiverse](https://www.thingiverse.com/thing:7039325)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
