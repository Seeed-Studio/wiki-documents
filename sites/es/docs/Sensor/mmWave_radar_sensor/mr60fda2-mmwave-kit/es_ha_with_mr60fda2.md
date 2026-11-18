---
title: Sensor de detección de caídas MR60FDA2 con Home Assistant
description: Sensor mmWave de detección de caídas MR60FDA2 con Home Assistant
keywords:
  - mmwave
  - radar
  - MR60FDA2
image: https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp
slug: /ha_with_mr60fda2
sidebar_position: 1
last_update:
  date: 10/15/2024
  author: Spencer
createdAt: '2024-10-08'
updatedAt: '2026-05-12'
url: https://wiki.seeedstudio.com/es/ha_with_mr60fda2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Sobre el alcance del uso del radar en Home Assistant
Las actualizaciones de firmware del RADAR y las actualizaciones del YAML de ESPHome son 2 piezas de software diferentes. El YAML de ESPHome se puede actualizar por OTA, mientras que la placa RADAR SOLO se puede actualizar por USB dentro de la carcasa, con software especializado que proporciona SEEED. Puedes personalizar el software ESPHome, [NO puedes personalizar el firmware del RADAR](https://wiki.seeedstudio.com/es/getting_started_with_mr60fda2_mmwave_kit/#actualización-de-firmware-del-módulo). Seeed Studio solo permite la personalización del RADAR si estás realizando una aplicación comercial.
:::

## Introducción {#introduction}

El MR60FDA2 es un módulo sensor de detección de caídas mmWave de 60 GHz diseñado para integrarse con el microcontrolador XIAO ESP32C6. Este sensor avanzado utiliza tecnología de ondas milimétricas para proporcionar monitorización no invasiva de signos vitales y detección de presencia.

Esta guía tiene como objetivo proporcionar un recorrido claro y completo para integrar el sensor mmWave MR60FDA2 con Home Assistant utilizando el microcontrolador XIAO ESP32C6. Esta integración con Home Assistant permite a los usuarios mejorar sus sistemas de hogar inteligente con capacidades de detección avanzadas, habilitando respuestas automatizadas y monitorización en tiempo real para diversas aplicaciones (por ejemplo, detección de caídas para cuidado de personas mayores, aplicaciones de seguridad).

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/></div>

## Descripción del producto

<div class="table-center">
   <table align="center">
      <tr>
         <th>Sensor mmWave MR60FDA2</th>
      </tr>
      <tr>
         <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/2-mmWave-45font.webp" style={{width:360, height:'auto', "border-radius": '6px'}}/></div></td>
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

Para integrar de forma eficaz el sensor mmWave MR60FDA2 con Home Assistant utilizando el XIAO ESP32C6, sigue estos pasos esenciales:

1. **[Configurar Home Assistant](#setting-up-home-assistant)**: Comienza instalando y configurando Home Assistant para gestionar tus dispositivos de hogar inteligente, garantizando una conexión fluida con el sensor.
2. **[Conectar el sensor MR60FDA2](#discovering-and-adding-the-device-in-home-assistant)**: Aprende cómo descubrir y añadir el sensor MR60FDA2 a tu configuración de Home Assistant, habilitando la monitorización en tiempo real de los signos vitales.
3. **[Supervisar los datos del sensor](#sensor-data-monitoring)**: Una vez integrado, podrás supervisar eficazmente los datos del sensor para comprobar si se ha producido una caída o no.
4. **[Implementar automatizaciones](#implementing-automation-in-home-assistant)**: Explora las potentes funciones de automatización de Home Assistant para crear acciones de respuesta basadas en los datos del sensor, mejorando tu entorno de hogar inteligente.
5. **[Modificar el firmware con ESPHome](#modifying-the-firmware-with-esphome)**: Utiliza ESPHome para personalizar la funcionalidad del sensor, adaptándolo a tus necesidades específicas para una mayor flexibilidad y control.

Estos pasos te guiarán en el uso de tu integración del sensor mmWave MR60FDA2 y XIAO ESP32C6.

## Primeros pasos {#getting-started}

:::note Atención
Ten en cuenta que cuando nos referimos a actualizaciones o modificaciones de firmware, nos referimos específicamente al firmware del XIAO ESP32C6.
:::

Para integrar correctamente el sensor mmWave MR60FDA2 con Home Assistant, necesitarás los siguientes componentes:

- **Home Assistant**: Una plataforma de hogar inteligente que gestionará los datos del sensor.
- **Complemento ESPHome**: Firmware que permite una configuración y gestión sencillas de dispositivos ESP32.

### Paso 1: Configuración de Home Assistant {#setting-up-home-assistant}

1. **Instalación**: Para un rendimiento óptimo, se recomienda instalar [Home Assistant OS](https://www.home-assistant.io/installation/) en una máquina virtual o Raspberry Pi. Sigue la guía de instalación oficial en el sitio web de Home Assistant.
2. **Habilitar el complemento ESPHome**:
   - Accede al panel de Home Assistant.
   - Navega a la sección "Add-ons" y busca el complemento ESPHome.
   - Haz clic en "Install" y luego en "Start" para habilitarlo.
   - Una vez instalado, configura el complemento para garantizar una comunicación adecuada con el XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

Al reunir los componentes necesarios y configurar Home Assistant con el complemento ESPHome, estarás listo para continuar con la integración del sensor mmWave MR60FDA2.

:::tip instalar Home Assistant
También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- [Primeros pasos con Home Assistant en ODYSSEY-X86](/es/ODYSSEY-X86-Home-Assistant)
- [Primeros pasos con Home Assistant en reTerminal](/es/reTerminal_Home_Assistant)
- [Primeros pasos con Home Assistant en LinkStar H68K/reRouter CM4](/es/h68k-ha-esphome)
:::

### Paso 2: Preparar el kit

De forma predeterminada, tu dispositivo (XIAO ESP32C6) viene pregrabado con firmware para detección de respiración y frecuencia cardíaca. Sin embargo, hay dos escenarios en los que puede que necesites actualizar el firmware:

1. **Volver a grabar el firmware**: Si el firmware existente está dañado o necesitas empezar desde cero.
2. **Actualizar el firmware**: Si hay una versión más reciente del firmware con funcionalidad mejorada.

Hay dos métodos sencillos para grabar el firmware:

<Tabs>
<TabItem value='Web Tool'>

Puedes usar esta [Web Tool](https://limengdu.github.io/MR60FDA2_ESPHome_external_components/) para un método fácil y directo de grabar tu firmware. Simplemente sigue las instrucciones en pantalla.

- Haz clic en el botón `CONNECT` para iniciar la conexión. La herramienta actualizará el firmware automáticamente.

Si algo sale mal, sigue los pasos de solución de problemas en pantalla o cambia al método `ESPHome Web` para completar el proceso.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, necesitarás descargar el archivo de firmware `bin` desde [aquí](https://github.com/limengdu/MR60FDA2_ESPHome_external_components/releases) (tendrás que descomprimir el archivo descargado).

1. Conecta el kit del sensor a tu PC.
2. Visita la página de [ESPHome Web](https://web.esphome.io/).
3. Selecciona el archivo de firmware con el sufijo `*.factory.bin`.

Mira el siguiente vídeo para un recorrido detallado de cómo grabar el firmware mediante ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

Con cualquiera de los métodos, tendrás tu firmware actualizado y listo para la integración con Home Assistant.

#### Conectarse al punto de acceso del kit

Con el firmware, puedes encender el kit del sensor y aparecerá un punto de acceso Wi‑Fi: `seeedstudio-mr60fda2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/hotspot-name.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

Navega a `192.168.4.1` para configurar los ajustes de red local de tu servidor Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-enter-psw.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### Paso 3: Descubrir y añadir el dispositivo en Home Assistant {#discovering-and-adding-the-device-in-home-assistant}

En esta sección, veremos el proceso utilizando la app de Home Assistant, donde la lógica es la misma que en la web.

1. **Abrir la app**: Una vez que inicies la app, selecciona tu servidor de Home Assistant. La app encontrará tu servidor automáticamente.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **Crear una cuenta**: Si no has creado una cuenta, tendrás que hacerlo. Después, inicia sesión con tus credenciales.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **Ir a la página de Integraciones**: Una vez que hayas iniciado sesión, ve a la página "Integrations" en Home Assistant. Si has instalado el complemento ESPHome y tanto el XIAO ESP32C6 como tu servidor Home Assistant están en la misma red, deberías ver el dispositivo `Seeed Studio MR60FDA2 Kit {device-mac-address}` aparecer bajo dispositivos descubiertos.
4. **Añadir el dispositivo**: Haz clic para añadir el dispositivo a tu configuración de Home Assistant.
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-find.jpg" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-submit.jpg" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-device-add.jpg" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>

  Haz clic en el botón `CONFIGURE`, confirma presionando el botón `SUBMIT` y asigna el dispositivo a tu área preferida (por ejemplo, Bathroom). Después de esto, el dispositivo será gestionado a través de tu integración ESPHome, lo que permitirá el control y la monitorización completos en Home Assistant.

  :::note
  Si durante el proceso de configuración no se te solicita asignar un área, puedes asignarla manualmente más tarde navegando a la sección "Integrations" en Home Assistant, seleccionando tu dispositivo y configurando el área desde allí.
  :::

## Supervisión y control {#monitoring-and-control}

Al completar los pasos, habrás integrado y añadido correctamente el Sensor MR60FDA2 a Home Assistant, habilitando la monitorización.

### Supervisión de datos del sensor

En esta sección, el sensor se añade a "Bathroom"; navega a la pestaña "Overview". Verás la tarjeta mmWave mostrada en la sección Bathroom.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-data.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Control de luz RGB

En esta sección, exploraremos cómo controlar una luz RGB.

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-sensor-light-on.jpg" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

Haz clic en el cuadro correspondiente para controlar directamente la luz RGB:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-light-panel.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-control-light.jpg" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Próximos pasos {#next-steps}

Ahora que has integrado correctamente el Sensor mmWave MR60FDA2 con el XIAO ESP32C6 y Home Assistant, puedes explorar mejoras adicionales para sacar el máximo partido a tu configuración. Aquí tienes dos vías esenciales a considerar:

#### Implementar automatizaciones en Home Assistant

Las potentes funciones de automatización de Home Assistant te permiten crear un entorno de hogar inteligente más receptivo basado en los datos recopilados por tu Sensor MR60FDA2. Esto significa que puedes configurar acciones que se ejecuten automáticamente en función de disparadores específicos relacionados con la detección de movimiento o de latidos.

A continuación se explica cómo implementar automatizaciones paso a paso:

1. **Navega a la sección de Automatizaciones**: En tu panel de Home Assistant, busca y haz clic en la pestaña "Automations". Esta área está dedicada a crear y gestionar acciones automatizadas dentro de tu hogar.
2. **Crea una nueva automatización**: Haz clic en el botón "Add Automation". Home Assistant ofrece un asistente fácil de usar que te guía durante el proceso de configuración de una automatización.
3. **Define el disparador (Trigger)**: Elige un disparador basado en los datos del Sensor MR60FDA2. Por ejemplo, puedes configurar la automatización para que se active cuando alguien se caiga. Esto significa que tu automatización puede responder inmediatamente a las lecturas del sensor.
4. **Establece condiciones (opcional)**: Las condiciones te permiten refinar cuándo debe ejecutarse la automatización. Por ejemplo, es posible que quieras que las luces se enciendan solo cuando esté oscuro en el exterior o si un usuario específico está en casa.
5. **Determina la acción**: Especifica qué acción debe producirse cuando se cumplan las condiciones del disparador. Las acciones pueden incluir encender luces, enviar notificaciones o incluso ajustar la configuración del termostato. Por ejemplo, podrías crear una acción que encienda una luz RGB cuando se detecte movimiento, mejorando tanto la seguridad como la comodidad.
6. **Guarda y prueba**: Después de configurar tu automatización, guárdala y prueba su funcionamiento. Pasa delante del sensor para ver si las luces se encienden como se espera. Si surge algún problema, puedes volver a la configuración de la automatización para solucionar y ajustar.

Al aprovechar las capacidades de automatización de Home Assistant, puedes crear un entorno verdaderamente inteligente que responda a tus movimientos y métricas de salud, garantizando que tu espacio vital se adapte a tu estilo de vida sin problemas.

## Modificación del firmware con ESPHome

Una de las ventajas más importantes de usar el XIAO ESP32C6 es su compatibilidad con ESPHome, una potente herramienta para gestionar y personalizar el firmware de tu microcontrolador. Con ESPHome, puedes modificar directamente el firmware para adaptar la funcionalidad del Sensor mmWave MR60FDA2 a tus necesidades específicas.

Para comenzar con ESPHome, sigue estos pasos:

1. **Accede al panel de ESPHome**: En Home Assistant, navega al complemento ESPHome. Deberías ver tu XIAO ESP32C6 listado entre los dispositivos.
2. **Crea una nueva configuración**: Haz clic en el dispositivo para abrir su configuración. Aquí puedes ajustar parámetros como la sensibilidad del sensor, los intervalos de reporte y los formatos de salida. ESPHome utiliza un formato de configuración YAML, que es fácil de usar y te permite definir varios parámetros. Puedes usar el siguiente archivo de plantilla YAML como punto de partida para tu configuración, el cual está diseñado específicamente para el Sensor MR60FDA2:

    ```yaml showLineNumbers title=example/mr60fda2.yaml
    # template from https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-mr60fda2-kit
    substitutions:
      name: "seeedstudio-mr60fda2-kit"
      friendly_name: "Seeed Studio MR60FDA2 Kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60fda2_kit"
        version: "2.1"
      min_version: "2024.3.2" # Fix logger compile error on ESP32-C6 esphome#6323

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
        channel_colors: GRB
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

3. **Personaliza la funcionalidad**: Puedes mejorar las capacidades del sensor explorando varias funciones disponibles en ESPHome, lo que permite ajustes flexibles para adaptarse a tus necesidades específicas.
4. **Sube el firmware actualizado**: Después de realizar tus modificaciones, guarda la configuración. El panel de ESPHome te permite subir el firmware directamente por aire. Simplemente haz clic en el botón `Upload` y sigue las indicaciones para completar el proceso. Este método simplificado facilita mantener tu firmware actualizado.
5. **Prueba e itera**: Una vez que la carga se haya completado, prueba tus cambios en tiempo real. Supervisa el rendimiento del sensor para asegurarte de que funciona como se espera. Si encuentras algún problema, vuelve al panel de ESPHome para perfeccionar tus ajustes. Este enfoque iterativo te permite mejorar continuamente tu firmware, garantizando que satisfaga tus requisitos de forma eficaz.

Al utilizar ESPHome, te capacitas para realizar mejoras continuas en la configuración de tu sensor, adaptándola a tus necesidades cambiantes. Esta capacidad no solo mejora la funcionalidad de tu proyecto, sino que también proporciona una plataforma para el aprendizaje y la experimentación con el desarrollo de IoT.

A través de estos pasos, puedes maximizar la funcionalidad de tu configuración con el Sensor mmWave MR60FDA2 y el XIAO ESP32C6, transformándola en un sistema de hogar inteligente altamente personalizado y receptivo, adaptado a tus preferencias y necesidades.

## Recursos

- [ESPHome — ESPHome](https://esphome.io/)
- [Installation - Home Assistant](https://www.home-assistant.io/installation/)
- [MR60FDA2 ESPHome project source](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-mr60fda2-kit)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
