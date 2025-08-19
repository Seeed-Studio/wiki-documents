---
description: Seeed Studio Iot Button Connect To ESPHome
title: Conexión Iot Button a ESPHome
keywords:
  - ESPHOME
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg
slug: /es/iot_botton_connect_to_esphome
last_update:
  date: 07/11/2025
  author: Guillermo
---

## Primeros Pasos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg" style={{width:600, height:'auto'}}/></div>
En este ejemplo, te mostramos cómo conectar el IoT Button a Home Assistant y usarlo para controlar el buzzer (activar y desactivar).

### Materiales Requeridos

<div class="table-center">
  <table align="center">
    <tr>
      <th>Iot Button</th>
      <th>XIAO ESP32C3</th>
      <th>Placa de Expansión Base para XIAO</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/XIAOESP32C3.png" style={{width:170, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/BOARD.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://files.seeedstudio.com/seeed_iot_botton_connect_to_esphome" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
       <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Una potente placa de expansión para Seeed Studio XIAO, con muchos periféricos, incluyendo buzzer. El XIAO ESP32C3 es el controlador principal, aunque puedes usarla para tus proyectos personalizados.

## Instalar ESPHome en Home Assistant

**Paso 1**. Ve a **Configuración** → **Complementos** → **TIENDA DE COMPLEMENTOS**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.5.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2**. Busca **ESPHome**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/2.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3**. Haz clic en **INSTALAR**, luego en **INICIAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/3.png" style={{width:1000, height:'auto'}}/></div>

**Paso 4**. Instalación exitosa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/4.png" style={{width:1000, height:'auto'}}/></div>

## Añadir el IoT Button a ESPHome

**Paso 5**. Haz clic en **+NUEVO DISPOSITIVO**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/5.png" style={{width:1000, height:'auto'}}/></div>

**Paso 6**. Haz clic en **SIGUIENTE** y pon un nombre para tu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/6.png" style={{width:800, height:'auto'}}/></div>

**Paso 7**. Selecciona el tipo de dispositivo.

Por ahora, elige el primero, ya que ESPHome no soporta ESP32C6 aún, y no aparece en la lista.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/7.png" style={{width:580, height:'auto'}}/></div>

**Paso 8**. Dispositivo agregado correctamente, haz clic en **OMITIR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/8.png" style={{width:780, height:'auto'}}/></div>

## Configurar el IoT Button

### Añadir programas al IoT Button

**Paso 9**. Aparecerá la tarjeta del dispositivo en ESPHome, haz clic en **EDITAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/9.png" style={{width:1000, height:'auto'}}/></div>

**Paso 10**. En el editor, configura el ESP32 con el siguiente código:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/10.png" style={{width:1000, height:'auto'}}/></div>

```yaml
esp32:
  board: esp32-c6-devkitc-1
  variant: esp32c6
  flash_size: 4MB # upload.flash_size
  framework:
    type: esp-idf
    platform_version: 6.5.0 # Need at least 6.4 for ESP32-C6

    # Tasmota's release of 5.1.3 works, first-party release does not LOL
    version: 5.1.3
    source: https://github.com/tasmota/esp-idf/releases/download/v5.1.3.240325/esp-idf-v5.1.3.zip

    # Fix flash size by ensuring IDF flash size is also set (was defaulting to 2MB?!?)
    # See https://github.com/esphome/issues/issues/5404
    sdkconfig_options:
      CONFIG_ESPTOOLPY_FLASHSIZE_4MB: y
```

**Paso 11**. Añade componentes y configura los pines.

:::note
El SSID y contraseña del WiFi deben ser los mismos que el servidor para asegurar que están en la misma red.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/11.png" style={{width:1000, height:'auto'}}/></div>

```yaml
binary_sensor:
  - platform: gpio
    pin:
      number: GPIO3
      mode: INPUT_PULLUP
      inverted: True
    name: "IoT Button"
```

**Paso 12**. Después de completar los pasos anteriores, haz clic en **INSTALAR** en la esquina superior derecha y luego selecciona **Conectar a esta computadora**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/12.png" style={{width:1000, height:'auto'}}/></div>

**Paso 13**. Ten paciencia mientras carga, al finalizar haz clic en **Descargar proyecto**, selecciona el formato **Factory** para descargar el archivo del proyecto y luego haz clic en **Abrir ESPHome Web**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.2.png" style={{width:1000, height:'auto'}}/></div>

**Paso 14**. En este punto, conecta el IoT Button al ordenador vía USB, luego haz clic en **CONECTAR** y selecciona el **puerto serial correcto**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.3.png" style={{width:1000, height:'auto'}}/></div>

**Paso 15**. Obtén el archivo **factory** de tu proyecto ESPHome.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/15.png" style={{width:1000, height:'auto'}}/></div>

**Paso 16**. Si todo ha ido bien, verás la siguiente imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/16.png" style={{width:1000, height:'auto'}}/></div>

### Añadir el IoT Button al panel de control (dashboard)

**Paso 17**. Haz clic en **Configuración** y luego selecciona **Dispositivos y servicios**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/17.png" style={{width:1000, height:'auto'}}/></div>

**Paso 18**. Selecciona el dispositivo correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

**Paso 19**. Selecciona el IoT Button para agregarlo, elige la región correspondiente y haz clic en **FINALIZAR**. ¡El IoT Button aparecerá en el **dashboard** de la página principal!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/19.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/20.png" style={{width:1000, height:'auto'}}/></div>

## Controlar el Buzzer con el IoT Button

### Añadir programa para el BUZZER

:::note
Asegúrate de haber agregado el buzzer en Home Assistant; puedes seguir el proceso anterior para hacerlo.
:::

Primero, debes agregar el buzzer a ESPHome siguiendo el proceso descrito arriba. Luego puedes comenzar a escribir el programa. Puedes usar el ejemplo que proporcionamos, pero ten en cuenta que los pines reales pueden ser diferentes, por lo que debes ajustarlos según tu hardware.

```yaml
esphome:
  name: buzzer
  friendly_name: buzzer

esp32:
  board: esp32-c3-devkitm-1
  framework:
    type: arduino

# Enable logging
logger:

# Enable Home Assistant API
api:
  encryption:
    key: "k13mbm4GBgaxe8yf5IHojn7am3imn0pFZrUwRe3IbRQ="

ota:
  - platform: esphome
    password: "ba8bb045e584ddeb1803debf2cce1311"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Buzzer Fallback Hotspot"
    password: "EL0JOgoaGbQq"

captive_portal:

output:
  - platform: ledc
    id: my_buzzer
    pin: GPIO5

switch:
  - platform: template
    name: "Buzzer"
    turn_on_action:
      - output.turn_on: my_buzzer
      - output.ledc.set_frequency:
          id: my_buzzer
          frequency: 1000Hz
      - output.set_level:
          id: my_buzzer
          level: 50%
    turn_off_action:
      - output.turn_off: my_buzzer
```

### Automatizaciones

**Paso 20**. Selecciona **Automatizaciones y escenas**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

**Paso 21**. Haz clic en **CREAR AUTOMATIZACIÓN** para crear una nueva automatización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

**Paso 22**. Puedes tomar como referencia la siguiente configuración para crear tu propia automatización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

Si has completado correctamente los pasos anteriores, al presionar el botón, el buzzer sonará con éxito durante dos segundos.

## Soporte técnico y discusión sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes formas de soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
