---
description: Getting Started with XIAO Soil Moisture Sensor
title: Primeros Pasos con el XIAO Soil Moisture Sensor
keywords:
  - XIAO
  - Soil Moisture Sensor
  - ESP32-C6
  - Moisture
image: https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/1.webp
slug: /es/xiao_soil_moisture_sensor
last_update:
  date: 07/21/2025
  author: Guillermo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/top.jpg" style={{width:550, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/XIAO_Soil_Moisture_Sensor" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El **XIAO Soil Moisture Sensor** es un monitor ambiental compacto y de bajo consumo, potenciado por el [XIAO ESP32-C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-Pre-Soldered-p-6328.html). Funcionando con una sola pila AA, ofrece un funcionamiento prolongado y actualizaciones en tiempo real de las condiciones del suelo. Cuenta con detección adaptativa de humedad precalibrada para un monitoreo de suelo preciso. Además, permite intervalos de monitoreo dinámicos y lecturas instantáneas para datos precisos y sensibles. Totalmente compatible con Home Assistant, es ideal para jardinería inteligente y agricultura de precisión: eficiente, fiable y diseñado para el cuidado sostenible de las plantas.

## Características

**1. Monitoreo de Humedad en Tres Niveles**  
- 🌿 **Normal:** Humedad óptima, no necesita riego.  
- 🌤 **Casi Seco:** La humedad está disminuyendo; prepara el riego pronto.  
- 🌵 **Seco:** Nivel críticamente bajo; riega inmediatamente.

Umbrales por defecto:  
- **60%** → transición Verde a Amarillo  
- **20%** → transición Amarillo a Rojo  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_1.jpg" style={{width:800, height:'auto'}}/></div>

**2. Plug-and-Play con Home Assistant**  
Preconfigurado con ESPHome — funciona de inmediato con Home Assistant, permitiéndote monitorizar y automatizar desde tu panel de control.

**3. Monitoreo Adaptativo y Lectura Instantánea**  
- Ajusta automáticamente los intervalos de comprobación (8 h → 1 h → 15 min) según el nivel de humedad.  
- Pulsa el botón una vez para una lectura instantánea de humedad en cualquier momento.

**4. Calibración Sencilla (Opcional)**  
Triple pulsación rápida del botón para recalibrar según tu suelo: lectura en seco + lectura en mojado → el sistema ajusta automáticamente.  
- Triple pulsación corta → Entra en modo calibración:  
  1. LED rojo parpadea → en 10 s inserta el sensor en suelo completamente seco.  
  2. Espera a que el LED rojo deje de parpadear, luego 3 s más.  
  3. LED verde parpadea → en 10 s inserta el sensor en suelo completamente húmedo.  
  4. Espera a que el LED verde deje de parpadear, luego 3 s más.  
  5. Resultado de calibración:  
     - Dos parpadeos verdes rápidos → Éxito.  
     - Dos parpadeos rojos rápidos → Error (lecturas seco/mojado intercambiadas).

**Nota:** Durante la calibración, las lecturas iniciales pueden ser inestables si el sensor no se introduce rápido. El sistema toma varias muestras, filtra y promedia las lecturas para una calibración fiable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_4.jpg" style={{width:800, height:'auto'}}/></div>

**5. Larga Duración de la Batería**  
Alimentado por una sola pila AA, diseñado para durar hasta tres meses gracias a una gestión de energía optimizada.

## Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/hardware.jpg" style={{width:800, height:'auto'}}/></div>

## Primeros pasos

Esta sección te guiará en la configuración inicial de tu XIAO Soil Moisture Sensor.

### Materiales requeridos

Antes de comenzar, asegúrate de tener el siguiente hardware:

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO Soil Moisture Sensor</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/big.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:270, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green es la forma más sencilla y privada de automatizar tu hogar. Ofrece una configuración sin esfuerzo y permite controlar todos los dispositivos inteligentes desde un único sistema, donde los datos se almacenan localmente por defecto. Esta placa se beneficia del ecosistema de Home Assistant y se actualiza mensualmente de forma open source.

Recomendamos usar Home Assistant Green como host para este tutorial, aunque puedes emplear cualquier instalación de Home Assistant con Supervisor.

:::tip Instalar Home Assistant
También hemos documentado cómo instalar Home Assistant para otros productos de Seeed Studio, consulta:

- **[Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant/)**  
- **[Home Assistant en reTerminal](https://wiki.seeedstudio.com/reTerminal_Home_Assistant/)**  
- **[Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/h68k-ha-esphome/)**  

Para otras plataformas, consulta la [documentación oficial de Home Assistant](https://www.home-assistant.io/installation/).
:::

### Paso 1. Instalar ESPHome

Si ya tienes ESPHome instalado, puedes omitir este paso.

1. Ve a **Configuración → Add-ons → Tienda de complementos**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/01.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/02.png" style={{width:800, height:'auto'}}/></div>

2. Busca **ESPHome**, haz clic y luego selecciona **INSTALAR** y **INICIAR**.

:::tip
Si no encuentras ESPHome en la tienda de complementos, asegúrate de usar una instalación de Home Assistant que lo soporte (OS o supervisada). En instalaciones tipo contenedor, ejecuta ESPHome Device Builder por Docker: [Guía ESPHome](https://esphome.io/guides/getting_started_hassio).
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/03.png" style={{width:800, height:'auto'}}/></div>

Luego, ESPHome Builder aparecerá en la barra lateral

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/04.png" style={{width:800, height:'auto'}}/></div>

### Paso 2. Preparar el sensor de humedad

Por defecto, tu XIAO ESP32-C6 viene con el firmware del sensor de humedad. Si necesitas modificarlo o actualizarlo, encontrarás un archivo YAML de configuración en la sección de Recursos más abajo. Personalízalo y cárgalo vía Home Assistant.

:::tip 
Para lecturas precisas, realiza una calibración rápida antes de usar el sensor.
:::

### Paso 3. Configuración de red

1. **Habilitar Punto de Acceso**  
   Al encender por primera vez, el módulo crea una red Wi-Fi (SSID: `Xiao-Soil-Moisture-Monitor`).

2. **Acceder a la configuración**  
   - Conéctate a esa red con un móvil o PC.  
   - Abre el navegador en `http://192.168.4.1`.  
   - Introduce el SSID y contraseña de tu Wi-Fi doméstica.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:650, "border-radius": '15px'}}/></div>

3. **Integración en Home Assistant**  
   Una vez en tu red, el módulo se descubre en Home Assistant bajo **Configuración → Dispositivos y servicios**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:400, height:'auto', "border-radius": '15px'}}/></div>

### Paso 4. Añadir el dispositivo

1. **Detección automática**  
   Con ESPHome instalado, ve a **Configuración → Dispositivos y servicios → Integraciones** y busca el dispositivo.

2. **Configuración manual**  
   Si no aparece, añádelo introduciendo su dirección IP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/View_in_HA.png" style={{width:400, height:'auto', "border-radius": '15px'}}/></div>

En el panel de Home Assistant verás la tarjeta del sensor indicando nivel de batería y humedad actual.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/img/feature_2.jpg" style={{width:800, height:'auto'}}/></div>

## Uso avanzado

Puedes modificar la lógica del firmware original y cargar tu versión personalizada directamente desde Home Assistant.

### Paso 1. Instalar ESPHome

(Repite la guía de instalación anterior).

### Paso 2. Crear un nuevo dispositivo

1. En ESPHome haz clic en **NEW DEVICE**.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/06.png" style={{width:800, height:'auto'}}/></div>

2. Asigna un nombre y pulsa **NEXT**.  
3. Configura los detalles de Wi-Fi y plataforma.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', marginLeft:'10%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/2.png" style={{width:'100%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3.png" style={{width:'100%', height:'auto'}}/></div>
</div>

4. Tras crear el dispositivo, haz clic en **EDIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/4.png" style={{width:800, height:'auto'}}/></div>

### Paso 3. Instalar firmware

Aquí tienes el firmware de fábrica:
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao-soil-moisture-monitor" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Proyecto</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Y un ejemplo de configuración YAML listo para usar en Home Assistant:
<details>

<summary>Ver configuración ESPHome YAML</summary>

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

# LED Yellow	D10 18
# LED RED	D9  20
# LED Green	D8 19
# button	D2  2

# Battery	D0 0
# PWM out	D3 21
# Soil sensor	D1  1

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
<summary>Descripción general de funciones clave y lógica del YAML.</summary>

- **`on_boot`**  
  Define las acciones al encender el dispositivo.  
  *Acciones:* Enciende GPIO 14, configura brillo LED PWM, verifica estado Wi-Fi y dispara la primera lectura de humedad.

- **`scripts` (ej. `red_led_blink`, `green_led_blink`, `fast_blink_green`, `fast_blink_red`)**  
  Patrones predefinidos para el parpadeo de LEDs.  
  *Acciones:* Indicaciones visuales para estados o pasos de calibración.

- **`do_calibration`**  
  Ejecuta el proceso de calibración para suelos secos y húmedos.  
  *Acciones:* Parpadeo LED rojo para lectura en seco, LED verde para húmedo; guarda valores promedio y confirma éxito o fallo.

- **`check_moisture_once`**  
  Lee y evalúa los niveles de humedad del suelo.  
  *Acciones:* Promedia varias lecturas ADC, compara con umbrales calibrados, determina estado, ajusta LEDs y configura el modo de suspensión profunda.

- **`binary_sensor (GPIO2)`**  
  Maneja la lógica de pulsaciones del botón físico.  
  *Acciones:* Un solo pulso dispara lectura de humedad, triple pulso inicia calibración.

- **`globals`**  
  Variables globales que almacenan estado y datos de calibración.  
  Variables clave:  
  - `button_press_count`  
  - `dry_value`, `wet_value`  
  - `wifi_net_status`  
  - `ref_dry`, `ref_wet`

- **`deep_sleep`**  
  Gestiona ciclos de ahorro de energía.  
  *Acciones:* Ejecuta tareas durante 120 segundos y luego duerme hasta 180 minutos; se despierta por pulsación de botón o tiempo.

- **`sensor (ADC)`**  
  Lee valores analógicos del sensor de humedad y batería.  
  *Acciones:* Mide humedad y voltaje; batería se escala para mostrar porcentaje.

- **`text_sensor`**  
  Publica estado de humedad en texto legible para Home Assistant.  
  *Acciones:* Muestra "Dry", "Almost Dry" o "Normal Moisture".

- **`wifi` + `api` + `ota`**  
  Manejan conexión de red, integración con Home Assistant y actualizaciones OTA.  
  *Acciones:* Conecta a Wi-Fi, expone API y permite actualización remota.

</details>

Haz clic en **INSTALL** para instalar el código en el dispositivo y berás la siguiente imágen.


<Tabs>
<TabItem value='Instalación vía navegador'>

:::tip
Ideal si tu Home Assistant está lejos o inaccesible. Puedes usar cualquier PC para cargar el firmware.  
:::

Primero, debes hacer clic en **Manual download** para descargar el firmware compilado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/62.png" style={{width:500, height:'auto'}}/></div>

Abre esta página web donde subiremos el firmware al panel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/63.png" style={{width:800, height:'auto'}}/></div>

Regresa a ESPHome para descargar el firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/64.png" style={{width:800, height:'auto'}}/></div>

Selecciona el formato Factory.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/65.png" style={{width:500, height:'auto'}}/></div>

Usa el cable USB para **conectar el panel ePaper a tu computadora** y haz clic en **CONNECT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/66.png" style={{width:800, height:'auto'}}/></div>

Selecciona usbmodemxxx (en Windows es COMxxx) y haz clic en conectar. [¿Tuviste algún problema? Haz clic aquí.](#Q5)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/67.png" style={{width:800, height:'auto'}}/></div>

Haz clic en **INSTALL** y selecciona el firmware que acabas de descargar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/69.png" style={{width:650, height:'auto'}}/></div>

Tu firmware se instalará en breve ～

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/71.png" style={{width:650, height:'auto'}}/></div>

</TabItem>

<TabItem value='Install through host'>

:::tip
Si tu Host de Home Assistant (Raspberry PI/Green/Yellow etc.) está cerca, recomendamos usar este método porque es más sencillo.
:::

Antes de instalar el código en el dispositivo, conecta este dispositivo a tu Raspberry Pi o HA Green (Yellow, etc.) que esté ejecutando Home Assistant, usando un cable USB.

Haz clic en las opciones que aparecen después de la imagen para instalar el código en el dispositivo. [¿No encuentras el puerto cuando el dispositivo está en modo deep sleep?](#port)

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/6.png" style={{width:'70%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/7.png" style={{width:'100%', height:'auto'}}/></div>
</div>

Espera un momento y verás una respuesta como en la siguiente imagen. Esto indica que el código está corriendo correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/9.png" style={{width:650, height:'auto'}}/></div>

</TabItem>

<TabItem value='Instalación vía Wi-Fi'>

:::tip
Esta es la forma más sencilla, pero bajo la condición de que al instalar el programa por primera vez, primero subas el programa al panel ePaper usando el método de la izquierda. Después de eso, podrás subirlo vía Wi-Fi. Además, asegúrate de que tu configuración YAML incluya secciones `ota` y `api` correctamente configuradas con claves de encriptación válidas para que este método funcione.
:::

De esta forma, no necesitas conectar el panel ePaper a nada, solo asegúrate que esté en línea.

Haz clic en la opción y el firmware se instalará automáticamente en el panel ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/72.png" style={{width:500, height:'auto'}}/></div>

Espera un momento y verás una respuesta como en la siguiente imagen. Si falla, puede deberse a una señal débil. Por favor, acerca el dispositivo a tu router.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/73.png" style={{width:650, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Reset
Si necesitas reinstalar el firmware, puedes usar el siguiente enlace para restaurar el firmware por defecto:  
[https://gadgets.seeed.cc/](https://gadgets.seeed.cc/)

Primero conecta tu dispositivo a la computadora.  
Luego, busca **XIAO Soil Moisture Monitor** en la página y haz clic en **Connect** para proceder con la reinstalación.

## Recursos

- **[PDF]** [Esquema eléctrico XIAO Soil Moisture Sensor (SCH)](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/SCH.pdf)
- **[Kicad]** [PCB XIAO Soil Moisture Sensor](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/Kicad.kicad_pcb)
- **[Yaml]** [Configuración YAML para Home Assistant](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/HomeAssistanceYaml.yaml)
- **[Bin]** [Firmware Factory para Home Assistant](https://files.seeedstudio.com/wiki/XIAO_Soil_Moisture_Sensor/res/factory.bin)
- **[LINK]** [Archivo 3D para impresión en Printables](https://www.printables.com/model/1260595-3d-enclosure-for-seeed-studio-xiao-75-epaper-panel/edit)
- **[LINK]** [Archivo 3D para impresión en Thingiverse](https://www.thingiverse.com/thing:7039325)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

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