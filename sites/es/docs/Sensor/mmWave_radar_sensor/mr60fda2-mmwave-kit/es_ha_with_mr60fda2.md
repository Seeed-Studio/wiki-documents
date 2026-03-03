---
title: Sensor de detección de caídas MR60FDA2 con Home Assistant
description: Sensor mmWave de detección de caídas MR60FDA2 con Home Assistant
keywords:
- mmwave
- radar
- MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.jpg
slug: /es/ha_with_mr60fda2
sidebar_position: 1
last_update:
  date: 10/15/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Acerca del alcance del uso del radar en Home Assistant
Las actualizaciones del firmware del RADAR y las actualizaciones del YAML de ESPHome son dos piezas de software diferentes. El YAML de ESPHome se puede actualizar por OTA, mientras que la placa RADAR SOLO se puede actualizar mediante USB dentro de la carcasa, con el software especializado que proporciona SEEED. Puede personalizar el software de ESPHome, pero [NO puede personalizar el firmware del RADAR](https://wiki.seeedstudio.com/es/getting_started_with_mr60fda2_mmwave_kit/#module-firmware-upgrade). Seeed Studio solo permite la personalización del RADAR si está realizando una aplicación comercial.
:::

## Introducción {#introduction}

El MR60FDA2 es un módulo sensor de detección de caídas mmWave de 60GHz diseñado para integración con el microcontrolador XIAO ESP32C6. Este sensor avanzado utiliza tecnología de ondas milimétricas para proporcionar monitoreo no invasivo de signos vitales y detección de presencia.

Esta guía tiene como objetivo proporcionar un tutorial claro y completo para integrar el sensor mmWave MR60FDA2 con Home Assistant usando el microcontrolador XIAO ESP32C6. Esta integración con Home Assistant permite a los usuarios mejorar sus sistemas de hogar inteligente con capacidades de detección avanzadas, habilitando respuestas automatizadas y monitoreo en tiempo real para diversas aplicaciones (por ejemplo, detección de caídas para cuidado de ancianos, aplicaciones de seguridad).

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
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60FDA2-60GHz-mmWave-Sensor-Fall-Detection-Module-p-5946.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener uno ahora 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### MR60FDA2 Sensor mmWave con XIAO ESP32C6

Para integrar efectivamente el Sensor mmWave MR60FDA2 con Home Assistant usando el XIAO ESP32C6, sigue estos pasos esenciales:

1. **[Configurar Home Assistant](#setting-up-home-assistant)**: Comienza instalando y configurando Home Assistant para gestionar tus dispositivos de hogar inteligente, asegurando una conexión perfecta con el sensor.
2. **[Conectar el Sensor MR60FDA2](#discovering-and-adding-the-device-in-home-assistant)**: Aprende cómo descubrir y añadir el Sensor MR60FDA2 a tu configuración de Home Assistant, habilitando el monitoreo en tiempo real de signos vitales.
3. **[Monitorear Datos del Sensor](#sensor-data-monitoring)**: Una vez integrado, puedes monitorear efectivamente los datos del sensor para verificar si ha ocurrido una caída o no.
4. **[Implementar Automatización](#implementing-automation-in-home-assistant)**: Explora las potentes características de automatización de Home Assistant para crear acciones responsivas basadas en los datos del sensor, mejorando tu entorno de hogar inteligente.
5. **[Modificar Firmware con ESPHome](#modifying-the-firmware-with-esphome)**: Utiliza ESPHome para personalizar la funcionalidad del sensor, adaptándolo para satisfacer tus necesidades específicas para mayor flexibilidad y control.

Estos pasos te guiarán en la utilización de tu integración del Sensor mmWave MR60FDA2 y XIAO ESP32C6.

## Comenzando {#getting-started}

:::note Atención
Ten en cuenta que cuando nos referimos a actualizaciones o modificaciones de firmware, estamos abordando específicamente el firmware en el XIAO ESP32C6.
:::

Para integrar exitosamente el Sensor mmWave MR60FDA2 con Home Assistant, necesitarás los siguientes componentes:

- **Home Assistant**: Una plataforma de hogar inteligente que gestionará los datos del sensor.
- **Complemento ESPHome**: Firmware que permite la configuración y gestión fácil de dispositivos ESP32.

### Paso 1: Configurando Home Assistant {#setting-up-home-assistant}

1. **Instalación**: Para un rendimiento óptimo, se recomienda instalar [Home Assistant OS](https://www.home-assistant.io/installation/) en una Máquina Virtual o Raspberry Pi. Sigue la guía de instalación oficial en el sitio web de Home Assistant.
2. **Habilitando el Complemento ESPHome**:
   - Accede al panel de Home Assistant.
   - Navega a la sección "Add-ons" y busca el complemento ESPHome.
   - Haz clic en "Install" y luego en "Start" para habilitarlo.
   - Una vez instalado, configura el complemento para asegurar la comunicación adecuada con el XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

Al reunir los componentes necesarios y configurar Home Assistant con el complemento ESPHome, estarás listo para proceder con la integración del Sensor mmWave MR60FDA2.

:::tip instalar Home Assistant
También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- [Comenzando con Home Assistant en ODYSSEY-X86](/es/ODYSSEY-X86-Home-Assistant)
- [Comenzando con Home Assistant en reTerminal](/es/reTerminal_Home_Assistant)
- [Comenzando con Home Assistant en LinkStar H68K/reRouter CM4](/es/h68k-ha-esphome)
:::

### Paso 2: Preparando el Kit

Por defecto, tu dispositivo (XIAO ESP32C6) viene pre-cargado con firmware para detección de respiración y frecuencia cardíaca. Sin embargo, hay dos escenarios donde podrías necesitar actualizar el firmware:

1. **Re-flashear el Firmware**: Si el firmware existente está corrupto o necesitas empezar de nuevo.
2. **Actualizar el Firmware**: Si hay una versión más nueva del firmware con funcionalidad mejorada.

Hay dos métodos simples para flashear el firmware:

<Tabs>
<TabItem value='Web Tool'>

Puedes usar esta [Herramienta Web](https://limengdu.github.io/MR60FDA2_ESPHome_external_components/) para un método fácil y directo de flashear tu firmware. Simplemente sigue las instrucciones en pantalla.

- Haz clic en el botón `CONNECT` para iniciar la conexión. La herramienta actualizará automáticamente el firmware.

Si algo sale mal, sigue los pasos de solución de problemas en pantalla o cambia al método `ESPHome Web` para completar el proceso.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, necesitarás descargar el archivo de firmware `bin` desde [aquí](https://github.com/limengdu/MR60FDA2_ESPHome_external_components/releases)(necesitarás descomprimir el archivo descargado).

1. Conecta el kit del sensor a tu PC.
2. Visita la página [ESPHome Web](https://web.esphome.io/).
3. Selecciona el archivo de firmware con el sufijo `*.factory.bin`.

Mira el siguiente video para un recorrido detallado de flashear el firmware vía ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

Con cualquiera de los métodos, tendrás tu firmware actualizado y listo para la integración con Home Assistant.

#### Conectar al punto de acceso del kit

Con el firmware, podrías encender el kit del sensor, y aparecerá un punto de acceso Wi-Fi: `seeedstudio-mr60fda2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/hotspot-name.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

Navega a `192.168.4.1` para configurar los ajustes de red local de tu servidor Home Assistant. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-enter-psw.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### Paso 3: Descubriendo y Añadiendo el Dispositivo en Home Assistant {#discovering-and-adding-the-device-in-home-assistant}

En esta sección, repasaremos el proceso usando la aplicación de Home Assistant, donde la lógica es la misma que en la web.

1. **Abrir la App**: Una vez que inicies la app, selecciona tu servidor de Home Assistant. La app encontrará automáticamente tu servidor.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **Crear una Cuenta**: Si no has creado una cuenta, necesitarás hacerlo. Después de eso, inicia sesión con tus credenciales.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **Navegar a la Página de Integración**: Una vez que hayas iniciado sesión, ve a la página "Integraciones" en Home Assistant. Si has instalado el complemento ESPHome y tanto el XIAO ESP32C6 como tu servidor de Home Assistant están en la misma red, deberías ver el dispositivo `Seeed Studio MR60FDA2 Kit {device-mac-address}` aparecer bajo dispositivos descubiertos.
4. **Añadir el Dispositivo**: Haz clic para añadir el dispositivo a tu configuración de Home Assistant.
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-find.jpg" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-submit.jpg" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-add.jpg" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>
  
  Haz clic en el botón `CONFIGURE`, confirma presionando el botón `SUBMIT`, y asigna el dispositivo a tu área preferida (ej., Baño). Después de esto, el dispositivo será gestionado a través de tu integración de ESPHome, habilitando control completo y monitoreo en Home Assistant.

  :::note
  Si el aviso no requiere que asignes un área durante el proceso de configuración, puedes asignarlo manualmente más tarde navegando a la sección "Integraciones" en Home Assistant, seleccionando tu dispositivo, y configurando el área desde allí.
  :::

## Monitoreo y Control {#monitoring-and-control}

Al completar los pasos, habrás integrado y añadido exitosamente el Sensor MR60FDA2 a Home Assistant, habilitando el monitoreo.

### Monitoreo de datos del Sensor

En esta sección, el sensor se añade al "Baño", navega a la pestaña "Resumen". Verás la tarjeta mmWave mostrada en la sección Baño.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-data.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Control de luz RGB

En esta sección, exploraremos cómo controlar una luz RGB.

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

Haz clic en la caja correspondiente para controlar directamente la luz RGB:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-light-panel.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-control-light.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Próximos Pasos {#next-steps}

Ahora que has integrado exitosamente el Sensor mmWave MR60FDA2 con el XIAO ESP32C6 y Home Assistant, puedes explorar mejoras adicionales para aprovechar al máximo tu configuración. Aquí hay dos vías esenciales a considerar:

#### Implementar Automatización en Home Assistant

Las poderosas características de automatización de Home Assistant te permiten crear un entorno de hogar inteligente más receptivo basado en los datos recopilados de tu Sensor MR60FDA2. Esto significa que puedes configurar acciones que ocurran automáticamente basadas en disparadores específicos relacionados con detección de movimiento o latidos del corazón.

Aquí te mostramos cómo implementar automatizaciones paso a paso:

1. **Navegar a la Sección de Automatizaciones**: En tu panel de Home Assistant, encuentra y haz clic en la pestaña "Automatizaciones". Esta área está dedicada a crear y gestionar acciones automatizadas dentro de tu hogar.
2. **Crear una Nueva Automatización**: Haz clic en el botón "Añadir Automatización". Home Assistant ofrece un asistente amigable que te guía a través del proceso de configurar una automatización.
3. **Definir el Disparador**: Elige un disparador basado en los datos del Sensor MR60FDA2. Por ejemplo, puedes configurar la automatización para que se dispare cuando alguien se caiga. Esto significa que tu automatización puede responder inmediatamente a las lecturas del sensor.
4. **Establecer Condiciones (Opcional)**: Las condiciones te permiten refinar cuándo debería ejecutarse la automatización. Por ejemplo, podrías querer que las luces se enciendan solo cuando esté oscuro afuera o si un usuario específico está en casa.
5. **Determinar la Acción**: Especifica qué acción debería ocurrir cuando se cumplan las condiciones del disparador. Las acciones pueden incluir encender luces, enviar notificaciones, o incluso ajustar configuraciones del termostato. Por ejemplo, podrías crear una acción que encienda una luz RGB cuando se detecte movimiento, mejorando tanto la seguridad como la comodidad.
6. **Guardar y Probar**: Después de configurar tu automatización, guárdala y prueba su funcionalidad. Camina cerca del sensor para ver si las luces se encienden como se esperaba. Si surgen problemas, puedes regresar a la configuración de automatización para solucionar problemas y ajustar.

Al aprovechar las capacidades de automatización de Home Assistant, puedes crear un entorno verdaderamente inteligente que responda a tus movimientos y métricas de salud, asegurando que tu espacio de vida se adapte a tu estilo de vida sin problemas.

## Modificando el Firmware con ESPHome

Una de las ventajas significativas de usar el XIAO ESP32C6 es su compatibilidad con ESPHome, una herramienta poderosa para gestionar y personalizar el firmware de tu microcontrolador. Con ESPHome, puedes modificar directamente el firmware para adaptar la funcionalidad del Sensor mmWave MR60FDA2 a tus necesidades específicas.

Para comenzar con ESPHome, sigue estos pasos:

1. **Accede al Panel de ESPHome**: En Home Assistant, navega al complemento de ESPHome. Deberías ver tu XIAO ESP32C6 listado entre los dispositivos.
2. **Crea una Nueva Configuración**: Haz clic en el dispositivo para abrir su configuración. Aquí, puedes ajustar configuraciones como la sensibilidad del sensor, intervalos de reporte y formatos de salida. ESPHome usa un formato de configuración YAML, que es fácil de usar y te permite definir varios parámetros. Puedes usar el siguiente archivo YAML de plantilla como punto de partida para tu configuración, que está diseñado específicamente para el Sensor MR60FDA2:

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

3. **Personaliza la Funcionalidad**: Puedes mejorar las capacidades del sensor explorando varias características disponibles en ESPHome, permitiendo ajustes flexibles para adaptarse a tus necesidades específicas.
4. **Sube el Firmware Actualizado**: Después de hacer tus modificaciones, guarda la configuración. El panel de ESPHome te permite subir el firmware directamente por aire. Simplemente haz clic en el botón `Upload`, y sigue las indicaciones para completar el proceso. Este método simplificado hace fácil mantener tu firmware actualizado.
5. **Prueba e Itera**: Una vez que la subida esté completa, prueba tus cambios en tiempo real. Monitorea el rendimiento del sensor para asegurar que opere como se espera. Si encuentras algún problema, vuelve al panel de ESPHome para refinar tus configuraciones. Este enfoque iterativo te permite mejorar continuamente tu firmware, asegurando que cumpla con tus requisitos de manera efectiva.

Al utilizar ESPHome, te empoderas para hacer mejoras continuas a tu configuración de sensor, adaptándola para satisfacer tus necesidades en evolución. Esta capacidad no solo mejora la funcionalidad de tu proyecto sino que también proporciona una plataforma para aprender y experimentar con el desarrollo de IoT.

A través de estos pasos, puedes maximizar la funcionalidad de tu configuración del Sensor mmWave MR60FDA2 y XIAO ESP32C6, transformándola en un sistema de hogar inteligente altamente personalizado y responsivo adaptado a tus preferencias y necesidades.

## Recursos

- [ESPHome — ESPHome](https://esphome.io/)
- [Installation - Home Assistant](https://www.home-assistant.io/installation/)
- [limengdu/MR60FDA2_ESPHome_external_components](https://limengdu.github.io/MR60FDA2_ESPHome_external_components)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
