---
description: XIAO ESP32C3 ESPHome Smart ThermoStat
title: Xiao ESP32C3 ESPHome Smart ThermoStat
keywords:
- Contribution
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /esp32c3_smart_thermostat
last_update:
  date: 12/1/2023
  author: Chris (Echo7394)
---

# Xiao ESP32C3 ESPHome Smart ThermoStat

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/9.jpg" alt="pir" width={500} height="auto" /></p>


Este wiki te guiará paso a paso sobre cómo hacer un Xiao ESP32C3 ESPHome Smart ThermoStat. ¡Ahora comencemos!

## Preparación del Hardware

Si quieres seguir este tutorial completamente, necesitarás preparar lo siguiente.

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio Expansion Board</th>
      <th>Dispositivos Home Assistant <br /> ej. Seeed Studio Home assistant Yellow</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Ver Más 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

**Sensores Grove**

<table align="center">
  <tbody><tr>
      <th>Grove - Sensor de Temperatura y Humedad Pro (DHT22/AM2302)</th>
      <th>Grove - Relé SPDT de 2 Canales</th>
      <th>Grove - Relé de Alta Corriente 5V/10A</th>
      <th>Grove - Pantalla OLED 0.96" (SSD1315)</th>
      <th>Botones momentáneos (Cualquier tipo servirá)</th>
    </tr>
    <tr>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/2.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/3.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/4.jpg" alt="pir" width={210} height="auto" /></p></td>
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/5.jpg" alt="pir" width={210} height="auto" /></p></td> 
      <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/8.jpg" alt="pir" width={400} height="auto" /></p></td> 
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM2302-DHT22.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

<!-- ### 1. Elementos Utilizados

a. Seed Studio Xiao ESP32C3

<!-- ![image1](./1.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/1.jpg" alt="pir" width={1000} height="auto" /></p>

b. Sensor Grove DHT22

<!-- ![image2](./2.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/2.jpg" alt="pir" width={1000} height="auto" /></p>

c. Relé de 2 Canales Grove

<!-- ![image3](./3.jpg) 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/3.jpg" alt="pir" width={1000} height="auto" /></p>

d. Relé de Canal Único Grove

<!-- ![image4](./4.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/4.jpg" alt="pir" width={1000} height="auto" /></p>

e. Módulo Grove SSD1315

<!-- ![image5](./5.jpg) 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/5.jpg" alt="pir" width={1000} height="auto" /></p>

f. (Opcional) Placa de Expansión de Seeed Studio

<!-- ![image6](./6.jpg) 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/6.jpg" alt="pir" width={1000} height="auto" /></p>

d. (Opcional) [Seeed Studio Home Assistant Yellow](https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-selectable-CM4-p-5680.html), o dispositivo de elección

<!-- ![image7](./7.jpg) 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/7.jpg" alt="pir" width={1000} height="auto" /></p>

e. Botones momentáneos (Cualquier tipo servirá)

<!-- ![image8](./8.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/8.jpg" alt="pir" width={1000} height="auto" /></p> -->

## Preparación del Software

### Instalar Home Assistant

Asegúrate de que ya tienes Home Assistant funcionando. Hay múltiples wikis que introducen cómo flashear Home Assistant en los [productos](https://wiki.seeedstudio.com/es/home_assistant_topic/#-devices-for-home-assistant-) aquí. Estoy usando Home assistant Yellow que está alimentado por Raspberry Pi CM4, así que puedo [usar directamente el oficial para flashear el OS en el Home assistant Yellow](https://yellow.home-assistant.io/power-supply/).

### Instalar ESPHome en Home Assistant

ESPHome está disponible como un **Complemento de Home Assistant** y puede instalarse simplemente a través de la tienda de complementos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/esphome.jpg" alt="pir" width={1000} height="auto" /></p>

- **Paso 1.** Haz clic en **INSTALAR**


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Habilita todas las opciones y haz clic en **INICIAR**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

Verás la siguiente ventana si ESPHome se carga exitosamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## Comenzando

Una vez que todo el software y el hardware estén listos, podemos comenzar.

### 1. Agregar Seeed Studio XIAO ESP32C3 a ESPHome

- **Paso 1.** Haz clic en **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **Paso 2.** Haz clic en CONTINUE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **Paso 3.** Ingresa un **Nombre** para el dispositivo e ingresa las credenciales WiFi como **Nombre de red** y **Contraseña**. Luego haz clic en **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/7.png" style={{width:900, height:'auto'}}/></div>

- **Paso 4.** Selecciona **ESP32-C3** y haz clic

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/8.png" style={{width:900, height:'auto'}}/></div>

- **Paso 5.** Haz clic en **SKIP** porque configuraremos esta placa manualmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>


### 2. Crear y Subir Configuración YAML

- **Paso 1.** Haz clic en **EDIT** bajo la placa recién creada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/9.png" style={{width:900, height:'auto'}}/></div>

<!-- ### 2. Instalar Home Assistant y ESPHome

- Instala Home Assistant en el dispositivo de tu elección. Hay muchas guías informativas
basadas en cualquier dispositivo en el que estés tratando de instalar Home Assistant. El tipo de dispositivo determinará qué
estilo de Home Assistant satisfará mejor tus necesidades.

- La instalación de ESPHome es tan fácil como buscar "ESPHome" en la pestaña Supervisor/Add-Ons/Extensions y hacer clic en él para instalarlo.

<!-- ![image9](./esphome.jpg)
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/esphome.jpg" alt="pir" width={1000} height="auto" /></p> -->

- **Paso 7.** Crear y Subir Configuración YAML

  Explicación del código a continuación:

  - **Nombre:** "thermostat"

  - **Configuración de la Placa:** <br />
  Modo flash configurado en DIO.<br />
  Placa especificada como "seeed_xiao_esp32c3" con el framework Arduino.

  - **Acciones al Arrancar:**<br />
  Muestra un mensaje de registro: "Booting thermostat."<br />
  Apaga tres relés: calefacción, refrigeración y ventilador.<br />
  Retrasa por 500 milisegundos.<br />
  Ejecuta un script llamado "boot_beep."

  - **Configuración de Script:**<br />
  Script de Pitido de Arranque:<br />
  Enciende un zumbador, establece su frecuencia para producir un pitido, y lo apaga después de 300 milisegundos.

  - **Configuración de API y OTA:**<br />
  API:<br />
  Clave de cifrado especificada.<br />
  OTA:<br />
  Contraseña establecida en "13371337" para actualizaciones por aire.

  - **Salida del Zumbador:**<br />
  Configurada usando la plataforma LEDC con el pin 5.

  - **Configuración WiFi:**<br />
  Especifica SSID y contraseña para conectarse a Wi-Fi.<br />
  Punto de acceso de respaldo (portal cautivo) configurado con SSID "Xiao-Esp32C3" y contraseña "13371337."

  - **Configuración I2C:**<br />
  Configura la comunicación I2C con pin SDA 6 y pin SCL 7.

  - **Configuración de Fuente:**<br />
  Define dos fuentes para la pantalla con diferentes tamaños.

  - **Configuración de Pantalla:**<br />
  Utiliza una pantalla SSD1315 I2C con una función lambda para formatear y mostrar información.<br />
  Muestra temperatura en Fahrenheit, humedad, intensidad de señal Wi-Fi y dirección IP.

  - **Configuración de Sensor:**<br />
  Utiliza un sensor DHT22 para lecturas de temperatura y humedad con un intervalo de actualización de 10 segundos.<br />
  Incluye un sensor de señal Wi-Fi con un intervalo de actualización de 20 segundos.

  - **Configuración de Sensor de Texto:**<br />
  Muestra la dirección IP del termostato y la versión de ESPHome.

  - **Configuración de Interruptor:**<br />
  Configura tres interruptores GPIO para relay_heat, relay_cooling y relay_fan.

  - **Configuración de Sensor Binario:**<br />
  Configura un sensor binario para la pulsación del botón del ventilador de circulación.<br />
  Cuando se presiona, controla el modo de ventilador del sistema de climatización.

  - **Configuración de Clima:**<br />
  Implementa un control de termostato usando el sensor de temperatura especificado.<br />
  Define acciones para calefacción, refrigeración, modo ventilador e inactivo.<br />
  Establece límites de temperatura, tamaños de paso y preajustes predeterminados.

  Pega esto en tu archivo yaml de Configuración de Dispositivo ESPHome. También puedes descargar el archivo .yaml completo [aquí](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/esp32c3config.yaml)

```yaml
esphome:
  name: ecostat
  platformio_options:
    board_build.flash_mode: dio
  on_boot:
    priority: 750
    then:
      - logger.log: "Booting EcoStat"
      - delay: 500ms
      - lambda: |-
          id(relay_heat).turn_off();
          id(relay_cooling).turn_off();
          id(relay_fan).turn_off();
          id(ecostat_control_heat).mode = CLIMATE_MODE_OFF;
          id(ecostat_control_cooling).mode = CLIMATE_MODE_OFF;
      - script.execute: boot_beep

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

#logger:
 # level: VERY_VERBOSE

api:
  encryption:
    key: "YOURKEYHERE"

ota:
  password: "13371337"

script:
- id: boot_beep
  then:
    # First ^E
    - output.turn_on: buzzer
    - output.ledc.set_frequency:
        id: buzzer
        frequency: 659.25Hz  # E
    - output.set_level:
        id: buzzer
        level: "50%"
    - delay: 150ms
    - output.turn_off: buzzer
    - output.turn_on: buzzer
    - output.ledc.set_frequency:
        id: buzzer
        frequency: 1000Hz
    - output.set_level:
        id: buzzer
        level: "50%"
    - delay: 150ms
    - output.turn_off: buzzer
output:
  - platform: ledc
    pin: 5
    id: buzzer

wifi:
  ssid: YOURWIFINAME
  password: YOURWIFIPASS

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "13371337"

i2c:
  sda: 6
  scl: 7
  scan: False

font:
  # gfonts://family[@weight]
  - file: "gfonts://Roboto"
    id: roboto
    size: 20

  - file: "gfonts://Poppins@700"
    id: inter
    size: 10

display:
  - platform: SSD1315_i2c
    id: oled
    model: "SSD1315 128x64"
    address: 0x3C
    lambda: |-
      float temp_celsius = id(temp).state;
      float temp_fahrenheit = (temp_celsius * 9.0 / 5.0) + 32.0;
      char temp_str[6]; // Buffer for temperature string
      dtostrf(temp_celsius, 4, 1, temp_str); // Convert Celsius to string with 1 decimal place

      it.print(28, 0, id(inter), id(ip_address).state.c_str());
      it.printf(0, 18, id(roboto), "T: %.1f  ", temp_fahrenheit);
      it.printf(70, 18, id(roboto), "H: %d", int(id(humidity).state));
      it.printf(31, 45, id(inter), "RSSI: %d", int(id(rssi).state));

climate:
  - platform: thermostat
    name: "EcoStat Heating"
    id: ecostat_control_heat
    sensor: temp
    heat_deadband: 2 °F
    heat_overrun: 0
    min_heating_run_time: 60s
    min_heating_off_time: 120s
    min_idle_time: 3min
    visual:
      min_temperature: 60 °F
      max_temperature: 80 °F
      temperature_step:
        current_temperature: 0.1
        target_temperature: 1.0
        target_temperature_low: 65 °F
    heat_action:
      - switch.turn_on: relay_heat
    idle_action:
      - switch.turn_off: relay_heat
    default_preset: Normal
    preset:
      - name: Normal
        default_target_temperature_low: 65 °F


  - platform: thermostat
    name: "EcoStat Cooling"
    id: ecostat_control_cooling
    sensor: temp
    cool_deadband: 2 °F
    cool_overrun: 0
    min_cooling_off_time: 20s
    min_cooling_run_time: 60s
    min_idle_time: 3min
    visual:
      min_temperature: 60 °F
      max_temperature: 80 °F
      temperature_step:
        current_temperature: 0.1
        target_temperature: 1.0
        target_temperature_low: 70 °F
    cool_action:
      - switch.turn_on: relay_cooling
    idle_action:
      - switch.turn_off: relay_cooling
    min_fan_mode_switching_time: 20s
    fan_mode_on_action:
      - switch.turn_on: relay_fan
    fan_mode_off_action:
      - switch.turn_off: relay_fan
    default_preset: Normal
    preset:
      - name: Normal
        default_target_temperature_high: 70 °F

sensor:
  - platform: dht
    pin: 20
    model: DHT22
    update_interval: 10s
    temperature:
      name: "EcoStat Temperature"
      id: temp
    humidity:
      name: "EcoStat Humidity"
      id: humidity
  - platform: wifi_signal
    name: "Wi-Fi Signal Strength"
    id: rssi
    update_interval: 20s

text_sensor:
  - platform: wifi_info
    ip_address:
      name: "EcoStat IP Address"
      id: ip_address
  - platform: version
    name: "EcoStat ESPHome Version"

switch:
  - platform: gpio
    id: relay_heat
    pin:
      number: 10
      mode: OUTPUT
  - platform: gpio
    id: relay_cooling
    pin:
      number: 9
      mode: OUTPUT
  - platform: gpio
    id: relay_fan
    pin:
      number: 21
      mode: OUTPUT

binary_sensor:
  - platform: gpio
    id: tempup
    pin:
      number: 8
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - lambda: |-
            if (id(ecostat_control_heat).mode == esphome::climate::CLIMATE_MODE_HEAT) {
              auto current_target_temp = id(ecostat_control_heat).target_temperature_low;
              id(ecostat_control_heat).target_temperature_low = current_target_temp + 0.56;
              auto current_target_temp_high = id(ecostat_control_heat).target_temperature_high;
              id(ecostat_control_heat).target_temperature_high = current_target_temp_high + 0.56;
            } else if (id(ecostat_control_cooling).mode == esphome::climate::CLIMATE_MODE_COOL) {
              auto current_target_temp = id(ecostat_control_cooling).target_temperature_low;
              id(ecostat_control_cooling).target_temperature_low = current_target_temp + 0.56;
              auto current_target_temp_high = id(ecostat_control_cooling).target_temperature_high;
              id(ecostat_control_cooling).target_temperature_high = current_target_temp_high + 0.56;
            }

  - platform: gpio
    id: tempdown
    pin:
      number: 2
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - lambda: |-
            if (id(ecostat_control_heat).mode == esphome::climate::CLIMATE_MODE_HEAT) {
              auto current_target_temp = id(ecostat_control_heat).target_temperature_low;
              id(ecostat_control_heat).target_temperature_low = current_target_temp - 0.56;
              auto current_target_temp_high = id(ecostat_control_heat).target_temperature_high;
              id(ecostat_control_heat).target_temperature_high = current_target_temp_high - 0.56;
            } else if (id(ecostat_control_cooling).mode == esphome::climate::CLIMATE_MODE_COOL) {
              auto current_target_temp = id(ecostat_control_cooling).target_temperature_low;
              id(ecostat_control_cooling).target_temperature_low = current_target_temp - 0.56;
              auto current_target_temp_high = id(ecostat_control_cooling).target_temperature_high;
              id(ecostat_control_cooling).target_temperature_high = current_target_temp_high - 0.56;
            }

  - platform: gpio
    id: modeswitch
    pin:
      number: 3
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - lambda: |-
            auto current_mode = id(ecostat_control_heat).mode;
            if (current_mode == esphome::climate::CLIMATE_MODE_OFF) {
              id(ecostat_control_heat).mode = esphome::climate::CLIMATE_MODE_HEAT;
            } else if (current_mode == esphome::climate::CLIMATE_MODE_HEAT) {
              id(ecostat_control_heat).mode = esphome::climate::CLIMATE_MODE_COOL;
            } else if (current_mode == esphome::climate::CLIMATE_MODE_COOL) {
              id(ecostat_control_heat).mode = esphome::climate::CLIMATE_MODE_OFF;
            }

  - platform: gpio
    id: momentaryswitch0
    pin:
      number: 4
      mode: INPUT_PULLUP
    filters:
      - delayed_on: 50ms
      - delayed_off: 50ms
    on_press:
      then:
        - if:
            condition:
              switch.is_off: relay_fan
            then:
              - climate.control: 
                  id: ecostat_control_cooling
                  fan_mode: "on"
            else:
              - climate.control: 
                  id: ecostat_control_cooling
                  fan_mode: "off"
```

### 3. Ensamblar carcasa de elección (Opcional)

Aquí están los archivos STL para la carcasa que utilicé para este proyecto.

[EcoStatV2 ecostatcase](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/EcoStatV2-ecostatcase.stl)

[EcoStatV2 ecostatlid](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/EcoStatV2-ecostatlid.stl)

Siéntete libre de usarlos o modificarlos como gustes. Si no tienes personalmente una impresora 3D,
hay muchos servicios en línea que imprimirán estos archivos en cualquier material que desees.

<!-- ![image10](./3dfile.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/3dfile.png" alt="pir" width={1000} height="auto" /></p>


### 4. Instalar Componentes

#### Paso 1 Instalar todos los componentes listados en la carcasa

Usando tornillos M2x4 y M2x6, instala todos los componentes previamente listados en sus lugares correspondientes dentro de la carcasa. <br />
(El Sensor DHT22 simplemente se ajusta a presión en su lugar).

<!-- ![image11](./11.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/11.jpg" alt="pir" width={500} height="auto" /></p>

#### Paso 2. Conectar todos los sensores y periféricos a sus pines correspondientes dentro del YAML mencionado anteriormente

Aquí está el método que utilicé durante el proceso de conexión:

- **DHT22/SSD1315 - usar conector JST:** Desoldar y voltear los conectores para el DHT22 y SSD1315 al otro lado de sus PCBs para un ajuste adecuado.

<!-- I used a combination of the included JST -->
<!-- connectors and DuPont style connections as well. for the DHT22 and SSD1315 I used JST.  -->
<!-- For the relays I used JST on one side and for the other side I used DuPont connectors for GPIO breakout headers on the expansion board. As you can see in the photo below. I also have a 3.7V Lithium cell plugged into the expansion boards battery connection for use as a backup battery in case of main supply power loss. -->

- **Dos Tipos de Relé - usar conector JST/DuPont:** Para los relés, utilicé JST en un lado y para el otro lado utilicé conectores DuPont para los headers de breakout GPIO en la placa de expansión.

- **Conexión de Batería:** También tengo una celda de Litio de 3.7V conectada a la conexión de batería de la placa de expansión para usar como batería de respaldo en caso de pérdida de energía del suministro principal.

<!-- ![image12](./10.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/10.jpg" alt="pir" width={500} height="auto" /></p>

#### Paso 3. Conectar el estilo deseado de botones momentáneos al interior frontal de la carcasa

Logré esto fijando los botones con un poco de pegamento termofusible. Luego soldé cables a los pines diagonalmente opuestos de los botones momentáneos, y coloqué conectores DuPont en el otro extremo de los cables para conectar a los headers de breakout GPIO correctos en la placa de expansión.

<!-- ![image13](./12.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/12.jpg" alt="pir" width={1000} height="auto" /></p>

#### Paso 4. Ensamblar la pantalla en la parte trasera de la cubierta frontal

Ensamblar la pantalla en la parte trasera de la cubierta frontal (Asegurar en su lugar con una pequeña cantidad de pegamento termofusible). Luego asegurar la cubierta frontal a la carcasa con 3 tornillos M4x6 como se muestra a continuación.

<!-- ![image14](./9.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/9.jpg" alt="pir" width={500} height="auto" /></p>

### 5. Conectar Cables a los Relés Correspondientes en EcoStat

¡Termostato Inteligente Completo! ¡Simplemente retira el termostato existente de tu hogar y usa la imagen de abajo para conectar los cables correctos, a los relés correspondientes en EcoStat!

<!-- ![image15](./13.jpg) -->
<img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/XIAO_ESP32C3_ESPHome_Smart_ThermoStat/13.jpg" alt="pir" width={500} height="auto" />

## ✨ Proyecto de Colaboradores

- Este proyecto está respaldado por el [Proyecto de Colaboradores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Gracias a los esfuerzos de Chris y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

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
