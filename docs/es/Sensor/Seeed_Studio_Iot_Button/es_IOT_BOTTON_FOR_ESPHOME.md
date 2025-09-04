---
description: Seeed Studio Iot Button Connect To ESPHome
title: Iot Button Connect To ESPHome
keywords:
  - ESPHOME
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg
slug: /es/iot_botton_connect_to_esphome
last_update:
  date: 11/11/2024
  author: qiuyu wei
---


## Comenzando

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.jpg" style={{width:600, height:'auto'}}/></div>

En este ejemplo, presentaremos cómo conectar el Iot Button al asistente doméstico y usar el Iot Button para controlar el encendido y apagado del zumbador.

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
       <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Una potente placa de expansión funcional para Seeed Studio XIAO, con sus ricos periféricos incluyendo zumbador. XIAO ESP32C3 también fue seleccionado como control maestro, por supuesto, también puedes basarte en el caso de juego libre para crear!

## Instalar ESPHome en Home Assistant

 **Paso 1**. **Haz clic en Configuración** --> **Complemento** --> **TIENDA DE COMPLEMENTOS**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/1.5.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2**. Busca **ESPHome**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/2.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3**. Haz clic en **INSTALAR**, luego haz clic en **INICIAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/3.png" style={{width:1000, height:'auto'}}/></div>

**Paso 4**. Instalación exitosa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/4.png" style={{width:1000, height:'auto'}}/></div>

## Añadiendo el botón IoT a ESPHome

**Paso 5**. Haz clic en **+NUEVO DISPOSITIVO**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/5.png" style={{width:1000, height:'auto'}}/></div>

**Paso 6**. Haz clic en **SIGUIENTE** y dale a tu dispositivo un nombre de tu elección.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/6.png" style={{width:800, height:'auto'}}/></div>

**Paso 7**. Selecciona tu tipo de dispositivo

Aquí elegimos el primero por ahora, porque ESPHome no soporta ESP32C6 en este momento, así que no podemos encontrar la opción ESP32C6 en la lista por el momento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/7.png" style={{width:580, height:'auto'}}/></div>

**Paso 8**. Dispositivo añadido exitosamente, finalmente haz clic en **OMITIR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/8.png" style={{width:780, height:'auto'}}/></div>

## Configurando el BOTÓN IOT

### Añadiendo programas al BOTÓN IOT

**Paso 9**. La tarjeta de dispositivo correspondiente aparecerá en la página de ESPHome, luego haz clic en **EDITAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/9.png" style={{width:1000, height:'auto'}}/></div>

**Paso 10**. Después de entrar a la interfaz de edición necesitas configurar el **ESP32**, puedes copiar el código directamente.

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

**Paso 11**. Añadir los componentes correspondientes e inicializar y configurar los pines del dispositivo.

:::note
¡La configuración del ssid y contraseña de WIFI debe ser la misma que la del servidor, para asegurar que la conexión esté en la misma red!
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

**Paso 12**. Después de completar los pasos anteriores, haz clic en **INSTALL** en la esquina superior derecha y luego selecciona **Plug into this computer**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/12.png" style={{width:1000, height:'auto'}}/></div>

**Paso 13**. Luego ten paciencia, después de que termine el tiempo de espera, haz clic en **Download project**, selecciona **Factory format** para descargar el archivo del proyecto, y luego haz clic en **Open ESPHome Web**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.2.png" style={{width:1000, height:'auto'}}/></div>

**Paso 14**. En este punto necesitas conectar el Iot Button a la computadora vía usb, y luego haz clic en **CONNECT** para seleccionar el **puerto serie correcto**!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/13.3.png" style={{width:1000, height:'auto'}}/></div>

**Paso 15**. Para obtener el **archivo de fábrica** de tu proyecto ESPHome.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/15.png" style={{width:1000, height:'auto'}}/></div>

**Paso 16**. Si todo va bien, podrás ver la siguiente imagen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/16.png" style={{width:1000, height:'auto'}}/></div>

### Agregando Iot Button al panel de control

**Paso 17**. Haz clic en **Settings** y luego selecciona **Devices & services**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/17.png" style={{width:1000, height:'auto'}}/></div>

**Paso 18**. Selecciona el dispositivo correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

**Paso 19**. Selecciona el Iot Button para agregar, puedes seleccionar la región para el dispositivo y haz clic en **FINISH**! ¡El Iot Button aparece en el **panel de control** en la página de inicio!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/19.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/20.png" style={{width:1000, height:'auto'}}/></div>

## Control del Buzzer con Iot Button

### Agregando programas al BUZZER

:::note
Por favor asegúrate de haber agregado el buzzer en home assistant, puedes referirte al proceso anterior para hacerlo.
:::

Primero, necesitas agregar el buzzer a esphome basándote en el proceso anterior. Luego puedes comenzar a escribir el programa, puedes referirte al ejemplo que proporcionamos, pero necesitas prestar atención a la diferencia de los pines reales.

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

**Paso 20**. Selecciona **Automations & scenes**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

**Paso 21**. Haz clic en **CREATE AUTOMATION**, crear nueva automatización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

**Paso 22**. Puedes consultar la siguiente configuración para crear tu propia automatización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

Si has completado exitosamente los pasos anteriores, cuando presiones el botón, el zumbador sonará exitosamente y durará dos segundos.

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
