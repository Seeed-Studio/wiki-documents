---
title: MR60FDA2 Fall detection Sensor with Home Assistant
description: MR60FDA2 Fall detection mmWave Sensor with Home Assistant
keywords:
- mmwave
- radar
- MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg
slug: /es/ha_with_mr60fda2
sidebar_position: 1
last_update:
  date: 07/18/2025
  author: Guillermo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introducción {#introduction}

El MR60FDA2 es un módulo sensor de detección de caídas mmWave de 60 GHz diseñado para integrarse con el microcontrolador XIAO ESP32C6. Este sensor avanzado utiliza tecnología de ondas milimétricas para proporcionar monitoreo no invasivo de signos vitales y detección de presencia.

Esta guía tiene como objetivo proporcionar un recorrido claro y completo para integrar el sensor mmWave MR60FDA2 con Home Assistant usando el microcontrolador XIAO ESP32C6. Esta integración con Home Assistant permite a los usuarios mejorar sus sistemas de hogar inteligente con capacidades de detección avanzadas, habilitando respuestas automatizadas y monitoreo en tiempo real para diversas aplicaciones (por ejemplo, detección de caídas para el cuidado de personas mayores, aplicaciones de seguridad).

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/></div>

## Descripción del producto

<div class="table-center">
   <table align="center">
      <tr>
         <th>Sensor mmWave MR60FDA2</th>
      </tr>
      <tr>
         <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg" style={{width:360, height:'auto', "border-radius": '6px'}}/></div></td>
      </tr>
      <tr>
         <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### Sensor mmWave MR60FDA2 con XIAO ESP32C6

Para integrar eficazmente el sensor mmWave MR60FDA2 con Home Assistant usando el XIAO ESP32C6, sigue estos pasos esenciales:

1. **[Configura Home Assistant](#setting-up-home-assistant)**: Comienza instalando y configurando Home Assistant para gestionar tus dispositivos del hogar inteligente, asegurando una conexión fluida con el sensor.
2. **[Conecta el sensor MR60FDA2](#discovering-and-adding-the-device-in-home-assistant)**: Aprende cómo descubrir y añadir el sensor MR60FDA2 a tu instalación de Home Assistant, habilitando el monitoreo en tiempo real de signos vitales.
3. **[Monitorea los datos del sensor](#sensor-data-monitoring)**: Una vez integrado, puedes monitorear efectivamente los datos del sensor para verificar si ha ocurrido una caída.
4. **[Implementa automatizaciones](#implementing-automation-in-home-assistant)**: Explora las potentes funciones de automatización de Home Assistant para crear acciones reactivas basadas en los datos del sensor, mejorando tu entorno inteligente.
5. **[Modifica el firmware con ESPHome](#modifying-the-firmware-with-esphome)**: Usa ESPHome para personalizar la funcionalidad del sensor y adaptarlo a tus necesidades específicas para mayor flexibilidad y control.

Estos pasos te guiarán en el uso del sensor MR60FDA2 mmWave junto con el XIAO ESP32C6.

## Primeros pasos {#getting-started}

:::note Atención
Ten en cuenta que cuando hablamos de actualizaciones o modificaciones de firmware, nos referimos específicamente al firmware del XIAO ESP32C6.
:::

Para integrar con éxito el sensor MR60FDA2 mmWave con Home Assistant, necesitarás los siguientes componentes:

- **Home Assistant**: Una plataforma de hogar inteligente que gestionará los datos del sensor.
- **Complemento ESPHome**: Firmware que permite una configuración y gestión sencilla de dispositivos ESP32.

### Paso 1: Configurar Home Assistant {#setting-up-home-assistant}

1. **Instalación**: Para un rendimiento óptimo, se recomienda instalar [Home Assistant OS](https://www.home-assistant.io/installation/) en una máquina virtual o Raspberry Pi. Sigue la guía de instalación oficial en el sitio web de Home Assistant.
2. **Habilitar el complemento ESPHome**:
   - Accede al panel de Home Assistant.
   - Dirígete a la sección "Add-ons" y busca el complemento ESPHome.
   - Haz clic en "Install" y luego en "Start" para habilitarlo.
   - Una vez instalado, configura el complemento para asegurar la comunicación con el XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

Reuniendo los componentes necesarios y configurando Home Assistant con el complemento ESPHome, estarás listo para continuar con la integración del sensor mmWave MR60FDA2.

:::tip instalar Home Assistant
También hemos documentado cómo instalar Home Assistant en algunos productos de Seeed Studio. Consulta las siguientes guías:

- [Primeros pasos con Home Assistant en ODYSSEY-X86](/ODYSSEY-X86-Home-Assistant)
- [Primeros pasos con Home Assistant en reTerminal](/reTerminal_Home_Assistant)
- [Primeros pasos con Home Assistant en LinkStar H68K/reRouter CM4](/h68k-ha-esphome)
:::

### Paso 2: Preparar el Kit

Por defecto, tu dispositivo (XIAO ESP32C6) viene pre-cargado con firmware para detección de respiración y ritmo cardíaco. Sin embargo, hay dos escenarios en los que podrías necesitar actualizar el firmware:

1. **Reinstalar el firmware**: Si el firmware existente está dañado o deseas comenzar desde cero.
2. **Actualizar el firmware**: Si hay una versión más reciente con funcionalidades mejoradas.

Existen dos métodos simples para actualizar el firmware:

<Tabs>
<TabItem value='Web Tool'>

Puedes usar esta [herramienta web](https://limengdu.github.io/MR60FDA2_ESPHome_external_components/) para actualizar tu firmware de manera fácil y directa. Simplemente sigue las instrucciones en pantalla.

- Haz clic en el botón `CONNECT` para iniciar la conexión. La herramienta actualizará el firmware automáticamente.

Si algo falla, sigue las instrucciones de resolución en pantalla o cambia al método `ESPHome Web` para completar el proceso.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, necesitarás descargar el archivo de firmware `bin` desde [aquí](https://github.com/limengdu/MR60FDA2_ESPHome_external_components/releases) (deberás descomprimir el archivo descargado).

1. Conecta el kit del sensor a tu PC.
2. Visita la página de [ESPHome Web](https://web.esphome.io/).
3. Selecciona el archivo de firmware con el sufijo `*.factory.bin`.

Mira el siguiente video para una guía detallada de cómo flashear el firmware usando ESPHome Web:

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

Con cualquiera de los dos métodos, tendrás el firmware actualizado y listo para integrarse con Home Assistant.

#### Conéctate al hotspot del kit

Con el firmware instalado, puedes encender el kit del sensor y aparecerá un punto de acceso Wi-Fi llamado: `seeedstudio-mr60fda2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/hotspot-name.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

Navega a `192.168.4.1` para configurar la red local del servidor Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-enter-psw.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### Paso 3: Descubrir y añadir el dispositivo en Home Assistant {#discovering-and-adding-the-device-in-home-assistant}

En esta sección, usaremos la app de Home Assistant. La lógica es la misma que en la interfaz web.

1. **Abre la app**: Una vez lanzada, selecciona tu servidor de Home Assistant. La app lo detectará automáticamente.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **Crea una cuenta**: Si aún no tienes una, deberás crearla. Luego, inicia sesión con tus credenciales.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **Ir a la página de Integraciones**: Una vez dentro, ve a la sección "Integrations". Si tienes instalado el complemento ESPHome, y tanto el XIAO ESP32C6 como tu servidor están en la misma red, deberías ver el dispositivo `Seeed Studio MR60FDA2 Kit {device-mac-address}` bajo dispositivos descubiertos.
4. **Agregar el dispositivo**: Haz clic para agregarlo a tu instalación de Home Assistant.
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-find.jpg" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-submit.jpg" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-add.jpg" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>
  
  Haz clic en el botón `CONFIGURE`, confirma presionando `SUBMIT`, y asigna el dispositivo al área que desees (por ejemplo, baño). A partir de ahora, el dispositivo será gestionado mediante la integración con ESPHome, permitiendo su control y monitoreo completo en Home Assistant.

  :::note
  Si durante la configuración no se te solicita asignar un área, puedes hacerlo manualmente después, yendo a "Integrations", seleccionando tu dispositivo y configurando el área desde allí.
  :::

## Monitoreo y Control {#monitoring-and-control}

Una vez completados los pasos, habrás integrado y añadido correctamente el sensor MR60FDA2 a Home Assistant, permitiendo su monitoreo.

### Monitoreo de datos del sensor

En este ejemplo, el sensor ha sido añadido al área "Baño". Dirígete a la pestaña "Overview". Verás la tarjeta mmWave mostrada en la sección correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-data.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Control de luz RGB

En esta sección exploraremos cómo controlar una luz RGB.

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

Haz clic en la caja correspondiente para controlar directamente la luz RGB:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-light-panel.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-control-light.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Próximos pasos {#next-steps}

Ahora que has integrado con éxito el sensor mmWave MR60FDA2 con el XIAO ESP32C6 y Home Assistant, puedes explorar mejoras adicionales. Aquí dos caminos esenciales:

#### Implementar automatizaciones en Home Assistant

Las potentes funciones de automatización de Home Assistant te permiten crear un entorno más inteligente y receptivo, basado en los datos del sensor MR60FDA2. Es decir, puedes configurar acciones automáticas según activadores como detección de movimiento o pulso.

Pasos para crear automatizaciones:

1. **Ir a la sección de Automatizaciones**: En el panel de Home Assistant, haz clic en "Automations".
2. **Crear una nueva automatización**: Haz clic en "Add Automation". Home Assistant ofrece un asistente intuitivo.
3. **Definir el activador (trigger)**: Selecciona un activador basado en los datos del sensor. Por ejemplo, que se active cuando detecta una caída.
4. **Establecer condiciones (opcional)**: Filtra cuándo debe ejecutarse. Por ejemplo, solo si está oscuro o si alguien está en casa.
5. **Determinar la acción**: Especifica qué acción debe ocurrir (encender luces, enviar notificaciones, ajustar el termostato, etc.). Por ejemplo, encender una luz RGB si se detecta movimiento.
6. **Guardar y probar**: Guarda y verifica que la automatización funcione correctamente. Si algo falla, ajusta los parámetros.

Aprovechando estas funciones, podrás tener un entorno verdaderamente inteligente que se adapta a tu estilo de vida.

## Modificar el firmware con ESPHome

Una de las principales ventajas del XIAO ESP32C6 es su compatibilidad con ESPHome, una herramienta potente para gestionar y personalizar el firmware del microcontrolador. Con ESPHome puedes modificar directamente el firmware para adaptar la funcionalidad del sensor MR60FDA2 a tus necesidades específicas.

Para comenzar con ESPHome, sigue estos pasos:

1. **Accede al panel de ESPHome**: En Home Assistant, entra al complemento ESPHome. Deberías ver tu XIAO ESP32C6 en la lista.
2. **Crear una nueva configuración**: Haz clic en el dispositivo para abrir su configuración. Aquí puedes ajustar sensibilidad, intervalos de reporte, formatos de salida, etc. ESPHome utiliza formato YAML, amigable y flexible. Puedes usar el siguiente archivo de plantilla YAML como punto de partida, diseñado especialmente para el sensor MR60FDA2:

    ```yaml showLineNumbers title=example/mr60fda2.yaml
    # template from https://github.com/limengdu/MR60FDA2_ESPHome_external_components/blob/main/example/mr60fda2.yaml
    
    substitutions:
      name: "seeedstudio-mr60fda2-kit"
      friendly_name: "Seeed Studio MR60FDA2 Kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60fda2_kit"
        version: "1.0"
      platformio_options:
        board_upload.maximum_size: 4194304
      min_version: "2024.3.2" # Fix logger compile error on ESP32-C6 esphome#6323

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

    external_components:
      - source:
          type: git
          url: https://github.com/ssieb/esphome
          ref: adc
        components: [ adc ]
        refresh: 1min
      - source:
          type: git
          url: https://github.com/limengdu/MR60FDA2_ESPHome_external_components
          ref: main
        components: [ seeed_mr60fda2 ]
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
        ssid: "seeedstudio-mr60fda2"

    captive_portal:

    # For XIAO ESP32C6 Onboard LED
    # light:
    #   - platform: status_led
    #     name: "Switch state"
    #     pin: GPIO15

    light:
      - platform: esp32_rmt_led_strip
        id: led_ring
        name: "Seeed MR60FDA2 RGB Light"
        pin: GPIO1
        num_leds: 1
        rmt_channel: 0
        rgb_order: GRB
        chipset: ws2812

    i2c:
      sda: GPIO22
      scl: GPIO23
      scan: true
      id: bus_a

    sensor:
      - platform: bh1750
        name: "Seeed MR60FDA2 Illuminance"
        address: 0x23
        update_interval: 1s

    uart:
      id: seeed_mr60fda2_uart
      baud_rate: 115200
      rx_pin: 17
      tx_pin: 16
      parity: NONE
      stop_bits: 1

    seeed_mr60fda2:
      id: my_seeed_mr60fda2
      uart_id: seeed_mr60fda2_uart

    binary_sensor:
      - platform: seeed_mr60fda2
        people_exist:
          name: "Person Information"
        fall_detected:
          name: "Falling Information"

    button:
      - platform: seeed_mr60fda2
        get_radar_parameters:
          name: "Get Radar Parameters"
        factory_reset:
          name: "Reset"

    select:
      - platform: seeed_mr60fda2
        install_height:
          name: "Set Install Height"
        height_threshold:
          name: "Set Height Threshold"
        sensitivity:
          name: "Set Sensitivity"
    ```

3. **Personaliza la funcionalidad**: Puedes mejorar las capacidades del sensor explorando las diversas funciones disponibles en ESPHome, lo que permite realizar ajustes flexibles según tus necesidades específicas.

4. **Carga el firmware actualizado**: Después de realizar tus modificaciones, guarda la configuración. El panel de ESPHome te permite cargar el firmware directamente por aire (OTA). Simplemente haz clic en el botón `Upload` y sigue las indicaciones para completar el proceso. Este método simplificado facilita mantener tu firmware siempre actualizado.

5. **Prueba e itera**: Una vez completada la carga, prueba los cambios en tiempo real. Supervisa el rendimiento del sensor para asegurarte de que funciona como se espera. Si encuentras algún problema, vuelve al panel de ESPHome para ajustar la configuración. Este enfoque iterativo te permite mejorar continuamente el firmware y asegurarte de que cumpla eficazmente con tus requisitos.

Al utilizar ESPHome, te das la oportunidad de realizar mejoras continuas en la configuración de tu sensor, adaptándolo a tus necesidades cambiantes. Esta capacidad no solo mejora la funcionalidad de tu proyecto, sino que también ofrece una plataforma para el aprendizaje y la experimentación en el desarrollo de IoT.

Siguiendo estos pasos, puedes maximizar la funcionalidad de tu sensor mmWave MR60FDA2 junto con el XIAO ESP32C6, transformándolo en un sistema de hogar inteligente altamente personalizado y adaptado a tus preferencias y necesidades.

## Recursos

- [ESPHome — ESPHome](https://esphome.io/)
- [Instalación - Home Assistant](https://www.home-assistant.io/installation/)
- [limengdu/MR60FDA2_ESPHome_external_components](https://limengdu.github.io/MR60FDA2_ESPHome_external_components)

## Soporte técnico y discusión sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte y garantizar que tu experiencia con nuestros dispositivos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
