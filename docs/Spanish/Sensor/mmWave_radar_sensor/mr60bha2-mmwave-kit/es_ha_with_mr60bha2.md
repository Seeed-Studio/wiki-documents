---
title: Sensor de Respiración-Ritmo Cardíaco MR60BHA2 con Home Assitant
description: | 
  MR60BHA2 Heartbeat mmWave Sensor with Home Assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/ha_with_mr60bha2
keywords:
  - ESPHome
sidebar_position: 1
last_update:
  date: 07/18/2025
  author: Guillermo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introducción {#introduction}

El MR60BHA2 es un módulo sensor de detección de respiración y ritmo cardíaco de 60GHz mmWave diseñado para integrarse con el microcontrolador XIAO ESP32C6. Este sensor avanzado utiliza tecnología de ondas milimétricas para proporcionar monitoreo no invasivo de signos vitales y detección de presencia.

Esta guía tiene como objetivo ofrecer un recorrido claro y completo para integrar el sensor MR60BHA2 mmWave con Home Assistant usando el microcontrolador XIAO ESP32C6. Siguiendo esta guía, los usuarios aprenderán a configurar el sensor para la detección del ritmo cardíaco, conectarlo a su entorno Home Assistant y utilizar ESPHome para gestionar y monitorear el dispositivo de forma eficiente.

Esta integración permite a los usuarios mejorar sus sistemas domóticos con capacidades avanzadas de detección, habilitando respuestas automáticas y monitoreo en tiempo real para diversas aplicaciones.

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/></div>

## Vista General del Producto

<div class="table-center">
   <table align="center">
      <tr>
         <th>Sensor mmWave MR60BHA2</th>
      </tr>
      <tr>
         <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/22-114993387-mr60bha2-60ghz-mmwave-45font.jpg" style={{width:360, height:'auto', "border-radius": '6px'}}/></div></td>
      </tr>
      <tr>
         <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### Sensor mmWave MR60BHA2 con XIAO ESP32C6

Para integrar efectivamente el sensor MR60BHA2 mmWave con Home Assistant usando el XIAO ESP32C6, sigue estos pasos esenciales:

:::caution
Por favor asegúrate de haber [actualizado el firmware](es_getting_started_with_mr60bha2.md#module-firmware-upgrade) del módulo MR60BHA2 a la versión más reciente.  
El firmware más reciente añade detección de presencia humana y detección de personal.
:::

1. **[Configurar Home Assistant](#setting-up-home-assistant)**: Comienza instalando y configurando Home Assistant para gestionar tus dispositivos inteligentes, asegurando una conexión fluida con el sensor.
2. **[Conectar el Sensor MR60BHA2](#discovering-and-adding-the-device-in-home-assistant)**: Aprende cómo descubrir y agregar el sensor MR60BHA2 a tu configuración de Home Assistant, habilitando el monitoreo en tiempo real de signos vitales.
3. **[Monitorear Datos del Sensor](#sensor-data-monitoring)**: Una vez integrado, podrás monitorear los datos del sensor de forma efectiva, obteniendo información sobre el ritmo cardíaco y patrones de respiración.
4. **[Implementar Automatizaciones](#implementing-automation-in-home-assistant)**: Explora las potentes funciones de automatización de Home Assistant para crear acciones reactivas basadas en los datos del sensor, mejorando tu entorno domótico.
5. **[Modificar Firmware con ESPHome](#modifying-the-firmware-with-esphome)**: Utiliza ESPHome para personalizar la funcionalidad del sensor, adaptándolo a tus necesidades específicas para mayor flexibilidad y control.

Estos pasos te guiarán en el proceso de integración, ayudándote a aprovechar al máximo tu sensor MR60BHA2 mmWave y la configuración con XIAO ESP32C6.

## Comenzando {#getting-started}

:::note Atención
Ten en cuenta que cuando nos referimos a actualizaciones o modificaciones del firmware, nos referimos específicamente al firmware en el XIAO ESP32C6.
:::

Para integrar con éxito el sensor MR60BHA2 mmWave con Home Assistant, necesitarás los siguientes componentes:

- **Home Assistant**: Plataforma de hogar inteligente que gestionará los datos del sensor.
- **Complemento ESPHome**: Firmware que permite configuración y gestión sencilla de dispositivos ESP32.

### Paso 1: Configurando Home Assistant {#setting-up-home-assistant}

1. **Instalación**: Para un rendimiento óptimo, se recomienda instalar [Home Assistant OS](https://www.home-assistant.io/installation/) en una Máquina Virtual o Raspberry Pi. Sigue la guía oficial de instalación en el sitio web de Home Assistant.
2. **Habilitar el complemento ESPHome**:
   - Accede al panel de control de Home Assistant.
   - Navega a la sección de "Complementos" y busca el complemento ESPHome.
   - Haz clic en "Instalar" y luego en "Iniciar" para habilitarlo.
   - Una vez instalado, configura el complemento para asegurar una comunicación adecuada con el XIAO ESP32C6.

:::caution Atención
Debido a los nuevos íconos, instala la versión 2024.12.0 o superior del complemento ESPHome.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Reuniendo los componentes necesarios y configurando Home Assistant con el complemento ESPHome, estarás listo para continuar con la integración del sensor MR60BHA2 mmWave.

:::tip instalar Home Assistant
También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consulta:

- [Primeros Pasos con Home Assistant en ODYSSEY-X86](/ODYSSEY-X86-Home-Assistant)
- [Primeros Pasos con Home Assistant en reTerminal](/reTerminal_Home_Assistant)
- [Primeros Pasos con Home Assistant en LinkStar H68K/reRouter CM4](/h68k-ha-esphome)
:::

### Paso 2: Preparando el Kit

Por defecto, tu dispositivo (XIAO ESP32C6) viene pre-flasheado con firmware para detección de respiración y ritmo cardíaco. Sin embargo, hay dos escenarios donde podrías necesitar actualizar el firmware:

1. **Reflashear el Firmware**: Si el firmware existente está corrupto o necesitas empezar de nuevo.
2. **Actualizar el Firmware**: Si hay una versión más nueva con mejoras.

Hay dos métodos simples para flashear el firmware:

:::caution
Firefox no soporta flasheo de firmware en dispositivos ESP. Por favor usa Google Chrome o Microsoft Edge.
:::

<Tabs>
<TabItem value='Herramienta Web'>

Puedes usar esta [Herramienta Web](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/) para un método fácil y directo para flashear tu firmware. Solo sigue las instrucciones en pantalla.

- Haz clic en el botón `CONNECT` para iniciar la conexión. La herramienta actualizará automáticamente el firmware.

Si algo falla, sigue los pasos de solución de problemas en pantalla o cambia al método `ESPHome Web` para completar el proceso.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, necesitarás descargar el archivo `bin` de firmware desde [aquí](https://github.com/limengdu/MR60BHA2_ESPHome_external_components/releases) (deberás descomprimir el archivo descargado).

1. Conecta el kit sensor a tu PC.
2. Visita la página de [ESPHome Web](https://web.esphome.io/).
3. Selecciona el archivo firmware con el sufijo `*.factory.bin`.

Mira el siguiente video para un tutorial detallado de cómo flashear el firmware vía ESPHome Web:

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

Con cualquiera de los métodos, tendrás tu firmware actualizado y listo para integrarse con Home Assistant.

#### Conéctate al punto de acceso del kit

Con el firmware, puedes encender el kit sensor y aparecerá un punto de acceso Wi-Fi: `seeedstudio-mr60bha2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/hotspot-name.png" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

Navega a `192.168.4.1` para configurar la red local de tu servidor Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enter-psw.JPEG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### Paso 3: Descubrir y Agregar el Dispositivo en Home Assistant {#discovering-and-adding-the-device-in-home-assistant}

En esta sección, repasaremos el proceso usando la app de Home Assistant, cuya lógica es la misma que en la web.

1. **Abre la App**: Al iniciar la app, selecciona tu servidor Home Assistant. La app encontrará automáticamente tu servidor.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **Crea una Cuenta**: Si no tienes una cuenta, créala. Después inicia sesión con tus credenciales.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **Navega a la Página de Integraciones**: Una vez logueado, ve a la página "Integraciones" en Home Assistant. Si instalaste el complemento ESPHome y tanto el XIAO ESP32C6 como el servidor Home Assistant están en la misma red, deberías ver el dispositivo `Seeed Studio MR60BHA2 Kit {device-mac-address}` aparecer entre los dispositivos detectados.
4. **Agrega el Dispositivo**: Haz clic para agregar el dispositivo a tu configuración de Home Assistant.
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-find.JPG" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-submit.JPG" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-add.JPG" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>
  
  Haz clic en el botón `CONFIGURAR`, confirma con `ENVIAR` y asigna el dispositivo al área que prefieras (ejemplo: Dormitorio). Luego, el dispositivo será gestionado mediante la integración ESPHome, permitiendo control total y monitoreo en Home Assistant.

## Monitoreo y Control {#monitoring-and-control}

Siguiendo los pasos anteriores, habrás descubierto y agregado el sensor MR60BHA2 a Home Assistant, habilitando monitoreo y control en tiempo real.

### Monitoreo de datos del sensor

Ahora que el sensor está agregado al "Dormitorio", navega a la pestaña "Resumen". Verás la tarjeta mmWave mostrada en la sección Dormitorio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-data-with-person-detection.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Control de luz RGB

En esta sección, exploraremos cómo controlar una luz RGB.

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

Haz clic en el recuadro correspondiente para controlar directamente la luz RGB:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-light-panel.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<iframe class="video-mp4" src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-control-light.mp4" title="Home Assistant Control RGB Light" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>

### Próximos Pasos {#next-steps}

Ahora que has integrado exitosamente el sensor MR60BHA2 mmWave con el XIAO ESP32C6 y Home Assistant, puedes explorar mejoras adicionales para aprovechar al máximo tu configuración. Aquí dos caminos esenciales a considerar:

#### Implementar automatizaciones en Home Assistant

Las potentes funciones de automatización de Home Assistant te permiten crear un entorno domótico más reactivo basado en los datos recogidos por tu sensor MR60BHA2. Esto significa que puedes configurar acciones que ocurran automáticamente basadas en disparadores específicos relacionados con detección de movimiento o ritmo cardíaco.

Cómo implementar automatizaciones paso a paso:

1. **Navega a la sección de Automatizaciones**: En el panel de Home Assistant, encuentra y haz clic en la pestaña "Automatizaciones". Aquí crearás y gestionarás acciones automáticas dentro de tu hogar.
2. **Crea una nueva automatización**: Haz clic en "Agregar Automatización". Home Assistant ofrece un asistente amigable que te guiará en el proceso.
3. **Define el disparador**: Elige un disparador basado en los datos del sensor MR60BHA2. Por ejemplo, que la automatización se active cuando detecte movimiento o un patrón de ritmo cardíaco específico.
4. **Establece condiciones (Opcional)**: Las condiciones refinan cuándo debe ejecutarse la automatización. Por ejemplo, encender luces solo si está oscuro o si cierto usuario está en casa.
5. **Determina la acción**: Especifica qué acción ocurrirá cuando se cumplan los disparadores y condiciones. Puede ser encender luces, enviar notificaciones o ajustar el termostato.
6. **Guarda y prueba**: Guarda la automatización y pruébala. Pasa frente al sensor para ver si las luces se encienden como esperas. Ajusta según sea necesario.

Aprovechando la automatización de Home Assistant, puedes crear un entorno verdaderamente inteligente que responde a tus movimientos y métricas de salud, adaptando tu espacio vital a tu estilo de vida.

## Modificación del Firmware con ESPHome

Una de las grandes ventajas de usar el XIAO ESP32C6 es su compatibilidad con ESPHome, una herramienta poderosa para gestionar y personalizar el firmware de tu microcontrolador. Con ESPHome, puedes modificar directamente el firmware para ajustar la funcionalidad del sensor MR60BHA2 mmWave a tus necesidades específicas.

Para comenzar con ESPHome, sigue estos pasos:

1. **Accede al panel de ESPHome**: En Home Assistant, navega al complemento ESPHome. Deberías ver tu XIAO ESP32C6 listado entre los dispositivos.

2. **Crea una nueva configuración**: Haz clic en el dispositivo para abrir su configuración. Aquí puedes ajustar parámetros como la sensibilidad del sensor, intervalos de reporte y formatos de salida. ESPHome utiliza un formato de configuración YAML, amigable para usuarios, que te permite definir varios parámetros. Puedes usar el siguiente archivo YAML de plantilla como punto de partida para tu configuración, diseñado específicamente para el sensor MR60BHA2:

  ```yaml showLineNumbers title=example/mr60bha2.yaml
  # template from https://github.com/limengdu/MR60BHA2_ESPHome_external_components

  substitutions:
    name: "seeedstudio-mr60bha2-kit"
    friendly_name: "Seeed Studio MR60BHA2 Kit"

  esphome:
    name: "${name}"
    friendly_name: "${friendly_name}"
    name_add_mac_suffix: true
    project:
      name: "seeedstudio.mr60bha2_kit"
      version: "2.0"
    platformio_options:
      board_upload.maximum_size: 4194304
    min_version: "2024.3.2" # Fix logger compile error on ESP32-C6 esphome#6323

  esp32:
    board: esp32-c6-devkitc-1
    variant: esp32c6
    flash_size: 4MB # upload.flash_size
    framework:
      type: esp-idf

  external_components:
    - source:
        type: git
        url: https://github.com/limengdu/MR60BHA2_ESPHome_external_components
        ref: main
      components: [ seeed_mr60bha2 ]
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
      ssid: "seeedstudio-mr60bha2"

  captive_portal:

  # For XIAO ESP32C6 Onboard LED
  # light:
  #   - platform: status_led
  #     name: "Switch state"
  #     pin: GPIO15

  light:
    - platform: esp32_rmt_led_strip
      id: led_ring
      name: "Seeed MR60BHA2 RGB Light"
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

  uart:
    id: uart_bus
    baud_rate: 115200
    rx_pin: 17
    tx_pin: 16
    parity: NONE
    stop_bits: 1

  seeed_mr60bha2:
    id: my_seeed_mr60bha2

  binary_sensor:
    - platform: seeed_mr60bha2
      people_exist:
        name: "Person Information"

  sensor:
    - platform: bh1750
      name: "Seeed MR60BHA2 Illuminance"
      address: 0x23
      update_interval: 1s
    - platform: seeed_mr60bha2
      breath_rate:
        name: "Real-time respiratory rate"
      heart_rate:
        name: "Real-time heart rate"
      distance:
        name: "Distance to detection object"
      target_num:
        name: "Target Number"
  ```

3. **Personaliza la Funcionalidad**: Puedes potenciar las capacidades del sensor explorando las diversas funciones que ESPHome ofrece, lo que permite ajustes flexibles para adaptarse a tus necesidades específicas.

4. **Sube el Firmware Actualizado**: Después de realizar tus modificaciones, guarda la configuración. El panel de ESPHome te permite subir el firmware directamente por aire (OTA). Simplemente haz clic en el botón `Upload` y sigue las indicaciones para completar el proceso. Este método simplificado facilita mantener tu firmware siempre actualizado.

5. **Prueba y Ajusta**: Una vez finalizada la carga, prueba los cambios en tiempo real. Monitorea el desempeño del sensor para asegurarte de que funcione según lo esperado. Si surge algún problema, regresa al panel de ESPHome para refinar los ajustes. Este enfoque iterativo te permite mejorar continuamente el firmware, asegurando que cumpla eficazmente con tus requisitos.

Al utilizar ESPHome, te facultas para realizar mejoras continuas en la configuración de tu sensor, adaptándolo a tus necesidades en evolución. Esta capacidad no solo mejora la funcionalidad de tu proyecto, sino que también ofrece una plataforma para el aprendizaje y la experimentación en desarrollo IoT.

Con estos pasos, puedes maximizar la funcionalidad de tu sensor MR60BHA2 mmWave y tu XIAO ESP32C6, transformándolos en un sistema domótico altamente personalizado y reactivo, ajustado a tus preferencias y requerimientos.

## Recursos

- [ESPHome — ESPHome](https://esphome.io/)
- [Instalación - Home Assistant](https://www.home-assistant.io/installation/)
- [limengdu/MR60BHA2_ESPHome_external_components](https://github.com/limengdu/MR60BHA2_ESPHome_external_components)

## Soporte Técnico y Discusión de Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

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
