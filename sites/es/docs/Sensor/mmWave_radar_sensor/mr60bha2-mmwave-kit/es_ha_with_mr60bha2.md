---
title: Sensor de respiración y latidos MR60BHA2 con Home Assistant
description: |
  Sensor de latidos MR60BHA2 mmWave con Home Assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ha_with_mr60bha2
keywords:
  - ESPHome
sidebar_position: 1
last_update:
  date: 09/23/2024
  author: Spencer
createdAt: '2024-10-08'
updatedAt: '2025-10-20'
url: https://wiki.seeedstudio.com/es/ha_with_mr60bha2/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Sobre el alcance del uso del radar en Home Assistant
Las actualizaciones del firmware del RADAR y las actualizaciones del YAML de ESPHome son 2 piezas de software diferentes. El YAML de ESPHome se puede actualizar por OTA, mientras que la placa RADAR SOLO se puede actualizar por USB dentro de la carcasa, con software especializado que proporciona SEEED. Puedes personalizar el software ESPHome, [NO puedes personalizar el firmware del RADAR](https://wiki.seeedstudio.com/es/getting_started_with_mr60bha2_mmwave_kit/#module-firmware-upgrade). Seeed Studio solo permite la personalización del RADAR si estás realizando una aplicación empresarial.
:::

## Introducción {#introduction}

El MR60BHA2 es un módulo sensor de detección de respiración y latidos cardíacos mmWave de 60 GHz diseñado para integrarse con el microcontrolador XIAO ESP32C6. Este sensor avanzado utiliza tecnología de ondas milimétricas para proporcionar monitorización no invasiva de signos vitales y detección de presencia.

Esta guía tiene como objetivo proporcionar un recorrido claro y completo para integrar el sensor MR60BHA2 mmWave con Home Assistant utilizando el microcontrolador XIAO ESP32C6. Siguiendo esta guía, los usuarios aprenderán a configurar el sensor para la detección de latidos, conectarlo a su entorno de Home Assistant y utilizar ESPHome para gestionar y monitorizar el dispositivo de forma eficaz.

Esta integración permite a los usuarios mejorar sus sistemas de hogar inteligente con capacidades de detección avanzadas, habilitando respuestas automatizadas y monitorización en tiempo real para diversas aplicaciones.

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/></div>

## Descripción del producto

<div class="table-center">
   <table align="center">
      <tr>
         <th>Sensor MR60BHA2 mmWave</th>
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

### Sensor MR60BHA2 mmWave con XIAO ESP32C6

Para integrar de forma eficaz el sensor MR60BHA2 mmWave con Home Assistant utilizando el XIAO ESP32C6, sigue estos pasos esenciales:

:::caution
Asegúrate de haber [actualizado el firmware](/es/getting_started_with_mr60bha2_mmwave_kit#module-firmware-upgrade) del módulo MR60BHA2 a la última versión.  
El firmware más reciente añade la función de detección de presencia humana y detección de personal.
:::

1. **[Configurar Home Assistant](#setting-up-home-assistant)**: Comienza instalando y configurando Home Assistant para gestionar tus dispositivos de hogar inteligente, garantizando una conexión fluida con el sensor.
2. **[Conectar el sensor MR60BHA2](#discovering-and-adding-the-device-in-home-assistant)**: Aprende cómo descubrir y añadir el sensor MR60BHA2 a tu configuración de Home Assistant, habilitando la monitorización en tiempo real de los signos vitales.
3. **[Monitorizar los datos del sensor](#sensor-data-monitoring)**: Una vez integrado, podrás monitorizar los datos del sensor de forma eficaz, lo que permitirá obtener información sobre el ritmo cardíaco y los patrones de respiración.
4. **[Implementar automatizaciones](#implementing-automation-in-home-assistant)**: Explora las potentes funciones de automatización de Home Assistant para crear acciones de respuesta basadas en los datos del sensor, mejorando tu entorno de hogar inteligente.
5. **[Modificar el firmware con ESPHome](#modifying-the-firmware-with-esphome)**: Utiliza ESPHome para personalizar la funcionalidad del sensor, adaptándolo a tus necesidades específicas para una mayor flexibilidad y control.

Estos pasos te guiarán a través del proceso de integración, ayudándote a sacar el máximo partido a tu sensor MR60BHA2 mmWave y a la configuración con XIAO ESP32C6.

## Primeros pasos {#getting-started}

:::note Atención
Ten en cuenta que cuando nos referimos a actualizaciones o modificaciones de firmware, nos referimos específicamente al firmware del XIAO ESP32C6.
:::

Para integrar correctamente el sensor MR60BHA2 mmWave con Home Assistant, necesitarás los siguientes componentes:

- **Home Assistant**: Una plataforma de hogar inteligente que gestionará los datos del sensor.
- **Complemento ESPHome**: Firmware que permite una configuración y gestión sencillas de dispositivos ESP32.

### Paso 1: Configurar Home Assistant {#setting-up-home-assistant}

1. **Instalación**: Para un rendimiento óptimo, se recomienda instalar [Home Assistant OS](https://www.home-assistant.io/installation/) en una máquina virtual o Raspberry Pi. Sigue la guía de instalación oficial en el sitio web de Home Assistant.
2. **Habilitar el complemento ESPHome**:
   - Accede al panel de Home Assistant.
   - Navega a la sección "Add-ons" y busca el complemento ESPHome.
   - Haz clic en "Install" y luego en "Start" para habilitarlo.
   - Una vez instalado, configura el complemento para garantizar una comunicación adecuada con el XIAO ESP32C6.

:::caution Atención
Debido a los nuevos iconos, instala la versión 2024.12.0 o superior del plugin ESPHome.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Al reunir los componentes necesarios y configurar Home Assistant con el complemento ESPHome, estarás listo para continuar con la integración del sensor MR60BHA2 mmWave.

:::tip install Home Assistant
También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- [Primeros pasos con Home Assistant en ODYSSEY-X86](/es/ODYSSEY-X86-Home-Assistant)
- [Primeros pasos con Home Assistant en reTerminal](/es/reTerminal_Home_Assistant)
- [Primeros pasos con Home Assistant en LinkStar H68K/reRouter CM4](/es/h68k-ha-esphome)
:::

### Paso 2: Preparar el kit

De forma predeterminada, tu dispositivo (XIAO ESP32C6) viene pregrabado con firmware para la detección de respiración y ritmo cardíaco. Sin embargo, hay dos escenarios en los que puede que necesites actualizar el firmware:

1. **Volver a grabar el firmware**: Si el firmware existente está dañado o necesitas empezar desde cero.
2. **Actualizar el firmware**: Si hay una versión más reciente del firmware con funcionalidad mejorada.

Hay dos métodos sencillos para grabar el firmware:

:::caution
Firefox no admite la grabación de firmware en dispositivos ESP. Utiliza Google Chrome o Microsoft Edge en su lugar.
:::

<Tabs>
<TabItem value='Web Tool'>

Puedes usar esta [Web Tool](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/) para un método fácil y directo de grabar tu firmware. Simplemente sigue las instrucciones en pantalla.

- Haz clic en el botón `CONNECT` para iniciar la conexión. La herramienta actualizará el firmware automáticamente.

Si algo sale mal, sigue los pasos de solución de problemas en pantalla o cambia al método `ESPHome Web` para completar el proceso.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, tendrás que descargar el archivo de firmware `bin` desde [aquí](https://github.com/limengdu/MR60BHA2_ESPHome_external_components/releases) (tendrás que descomprimir el archivo descargado).

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

Con el firmware, puedes encender el kit del sensor y aparecerá un punto de acceso Wi‑Fi: `seeedstudio-mr60bha2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/hotspot-name.png" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

Navega a `192.168.4.1` para configurar los ajustes de red local de tu servidor Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enter-psw.JPEG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### Paso 3: Descubrir y añadir el dispositivo en Home Assistant {#discovering-and-adding-the-device-in-home-assistant}

En esta sección, veremos el proceso utilizando la app de Home Assistant, donde la lógica es la misma que en la web.

1. **Abrir la app**: Una vez que inicies la app, selecciona tu servidor de Home Assistant. La app encontrará tu servidor automáticamente.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **Crear una cuenta**: Si no has creado una cuenta, tendrás que hacerlo. Después, inicia sesión con tus credenciales.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **Navegar a la página de Integraciones**: Una vez que hayas iniciado sesión, ve a la página "Integrations" en Home Assistant. Si has instalado el complemento ESPHome y tanto el XIAO ESP32C6 como tu servidor Home Assistant están en la misma red, deberías ver el dispositivo `Seeed Studio MR60BHA2 Kit {device-mac-address}` aparecer bajo dispositivos descubiertos.
4. **Añadir el dispositivo**: Haz clic para añadir el dispositivo a tu configuración de Home Assistant.
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-find.JPG" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-submit.JPG" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-add.JPG" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>

  Haz clic en el botón `CONFIGURE`, confirma presionando el botón `SUBMIT` y asigna el dispositivo a tu área preferida (por ejemplo, Dormitorio). Después de esto, el dispositivo será gestionado a través de tu integración ESPHome, lo que permitirá un control y monitoreo completos en Home Assistant.

## Supervisión y control {#monitoring-and-control}

Siguiendo los pasos anteriores, habrás descubierto y añadido correctamente el sensor MR60BHA2 a tu Home Assistant, habilitando la supervisión y el control en tiempo real.

### Supervisión de datos del sensor

Ahora que el sensor se ha añadido al "Bedroom", navega a la pestaña "Overview". Verás la tarjeta mmWave mostrada en la sección Bedroom.

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

### Próximos pasos {#next-steps}

Ahora que has integrado correctamente el sensor MR60BHA2 mmWave con el XIAO ESP32C6 y Home Assistant, puedes explorar mejoras adicionales para sacar el máximo partido a tu configuración. Aquí tienes dos vías esenciales a considerar:

#### Implementar automatizaciones en Home Assistant

Las potentes funciones de automatización de Home Assistant te permiten crear un entorno de hogar inteligente más receptivo basado en los datos recopilados por tu sensor MR60BHA2. Esto significa que puedes configurar acciones que se ejecuten automáticamente en función de disparadores específicos relacionados con la detección de movimiento o de latidos.

A continuación se explica cómo implementar automatizaciones paso a paso:

1. **Navega a la sección de Automatizaciones**: En tu panel de Home Assistant, busca y haz clic en la pestaña "Automations". Esta área está dedicada a crear y gestionar acciones automatizadas dentro de tu hogar.
2. **Crea una nueva automatización**: Haz clic en el botón "Add Automation". Home Assistant ofrece un asistente fácil de usar que te guía durante el proceso de configuración de una automatización.
3. **Define el disparador (Trigger)**: Elige un disparador basado en los datos del sensor MR60BHA2. Por ejemplo, puedes hacer que la automatización se active cuando el sensor detecte movimiento o un patrón específico de latidos. Esto significa que tu automatización puede responder inmediatamente a las lecturas del sensor.
4. **Establece condiciones (opcional)**: Las condiciones te permiten refinar cuándo debe ejecutarse la automatización. Por ejemplo, podrías querer que las luces se enciendan solo cuando esté oscuro en el exterior o si un usuario específico está en casa.
5. **Determina la acción**: Especifica qué acción debe ocurrir cuando se cumplan las condiciones del disparador. Las acciones pueden incluir encender luces, enviar notificaciones o incluso ajustar la configuración del termostato. Por ejemplo, podrías crear una acción que encienda una luz RGB cuando se detecte movimiento, mejorando tanto la seguridad como la comodidad.
6. **Guarda y prueba**: Después de configurar tu automatización, guárdala y prueba su funcionamiento. Pasa caminando frente al sensor para ver si las luces se encienden como se espera. Si surge algún problema, puedes volver a la configuración de la automatización para solucionar y ajustar.

Al aprovechar las capacidades de automatización de Home Assistant, puedes crear un entorno verdaderamente inteligente que responda a tus movimientos y métricas de salud, garantizando que tu espacio vital se adapte a tu estilo de vida de forma fluida.

## Modificar el firmware con ESPHome

Una de las ventajas más importantes de usar el XIAO ESP32C6 es su compatibilidad con ESPHome, una potente herramienta para gestionar y personalizar el firmware de tu microcontrolador. Con ESPHome, puedes modificar directamente el firmware para adaptar la funcionalidad del sensor MR60BHA2 mmWave a tus necesidades específicas.

Para comenzar con ESPHome, sigue estos pasos:

1. **Accede al panel de ESPHome**: En Home Assistant, navega al complemento ESPHome. Deberías ver tu XIAO ESP32C6 listado entre los dispositivos.

2. **Crea una nueva configuración**: Haz clic en el dispositivo para abrir su configuración. Aquí puedes ajustar parámetros como la sensibilidad del sensor, los intervalos de reporte y los formatos de salida. ESPHome utiliza un formato de configuración YAML, que es fácil de usar y te permite definir varios parámetros. Puedes usar la siguiente plantilla de archivo YAML como punto de partida para tu configuración, la cual está diseñada específicamente para el sensor MR60BHA2:

  ```yaml showLineNumbers title=example/mr60bha2.yaml
    substitutions:
      name: "seeedstudio-mr60bha2-kit"
      friendly_name: "seeedstudio-mr60bha2-kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60bha2_kit"
        version: "3.6"
      platformio_options:
        board_upload.maximum_size: 4194304
      min_version: "2026.8.0"


    esp32:
      board: esp32-c6-devkitc-1
      variant: esp32c6
      flash_size: 4MB # upload.flash_size
      framework:
        type: esp-idf

    # Enable logging
    logger:
      hardware_uart: USB_SERIAL_JTAG
      level: DEBUG

    # Enable Home Assistant API
    api:

    ota:
      - platform: esphome

    # It is highly recommended to use secrets
    wifi:
      ssid: !secret wifi_ssid
      password: !secret wifi_password

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
        channel_colors: GRB
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
        has_target:
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
        num_targets:
          name: "Target number"
  ```

3. **Personaliza la funcionalidad**: Puedes mejorar las capacidades del sensor explorando las diversas funciones disponibles en ESPHome, lo que permite ajustes flexibles para adaptarse a tus necesidades específicas.

4. **Sube el firmware actualizado**: Después de realizar tus modificaciones, guarda la configuración. El panel de ESPHome te permite subir el firmware directamente por aire. Simplemente haz clic en el botón `Upload` y sigue las indicaciones para completar el proceso. Este método simplificado facilita mantener tu firmware actualizado.

5. **Prueba e itera**: Una vez que la carga se haya completado, prueba tus cambios en tiempo real. Supervisa el rendimiento del sensor para asegurarte de que funciona como se espera. Si encuentras algún problema, vuelve al panel de ESPHome para refinar tus ajustes. Este enfoque iterativo te permite mejorar continuamente tu firmware, garantizando que cumpla eficazmente con tus requisitos.

Al utilizar ESPHome, te capacitas para realizar mejoras continuas en la configuración de tu sensor, adaptándola a tus necesidades en evolución. Esta capacidad no solo mejora la funcionalidad de tu proyecto, sino que también proporciona una plataforma para el aprendizaje y la experimentación con el desarrollo de IoT.

A través de estos pasos, puedes maximizar la funcionalidad de tu configuración con el sensor MR60BHA2 mmWave y el XIAO ESP32C6, transformándola en un sistema de hogar inteligente altamente personalizado y receptivo, adaptado a tus preferencias y necesidades.

## Recursos

- [ESPHome — ESPHome](https://esphome.io/)
- [Installation - Home Assistant](https://www.home-assistant.io/installation/)
- [MR60BHA2 ESPHome project source](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/seeedstudio-mr60bha2-kit)

## Solución de problemas

### Explicación del mecanismo de reporte de datos del sensor de radar (para v1.6.12 y posteriores)

Esta parte detalla el tiempo, la precisión y las condiciones requeridas para los datos reportados por las diversas funciones de detección del sensor de radar. Su objetivo es ayudar a los usuarios a comprender y utilizar mejor los datos del sensor.

---

### 1. Presencia humana estática

- **Descripción de la función**:
    Detecta la presencia de un objetivo humano estacionario dentro de un área específica.
- **Parámetro clave**:
  - **Rango efectivo de detección**: Hasta **4 metros**.
- **Lógica de reporte de datos**:
  - Reporta un estado de "Presence" cuando se detecta un objetivo humano en el área.
  - Reporta un estado de "No Presence" cuando el área está libre de objetivos humanos.
  - **Nota**: El rango de detección de 4 metros es exclusivo de la función de Presencia Humana Estática. No se aplica a otras funciones como Detección de Respiración y Latidos o Detección de Distancia al Objetivo, que tienen sus propios rangos efectivos, más cortos. El único propósito de esta función es determinar presencia o ausencia, no proporcionar datos detallados.

---

### 2. Detección de respiración y latidos del corazón

- **Descripción de la función**:
    Realiza la detección de signos vitales sin contacto sobre un único objetivo humano estacionario.
- **Parámetros clave**:
  - **Rango efectivo de detección**: Aproximadamente **1,5 metros**.
  - **Objetivo de detección**: Una sola persona inmóvil.
- **Condiciones necesarias de funcionamiento**:
  - **Inmovilidad del objetivo**: La persona monitorizada debe permanecer completamente quieta.
  - **Estabilidad del dispositivo**: El dispositivo de radar debe estar firmemente montado, sin sacudidas ni vibraciones.
  - **Objetivo único**: Solo debe haber una persona dentro del rango de detección.
- **Lógica de reporte de datos**:
  - **Reporte normal**: Cuando se cumplen todas las condiciones anteriores, el radar informa en tiempo real los valores de respiración y frecuencia cardíaca.
  - **Escenarios de reporte anormal**:
    - **Objetivo más allá de 1,5 m**: Cuando un objetivo detectado está más allá del rango efectivo de 1,5 metros, los datos de respiración y frecuencia cardíaca **dejan de actualizarse** y se mantienen en la última medición válida.
    - **Sin objetivo en la zona central**: Cuando no se detecta ningún objetivo dentro de la zona central de detección de 0,5 a 1,5 metros, los valores de respiración y frecuencia cardíaca se informan activamente como **0**.
- **Nota**: Ten en cuenta las interferencias ambientales. Micro-movimientos de fuentes como ventiladores, aires acondicionados o cortinas que se balancean pueden ser interpretados erróneamente por el sensor. En tales casos, el radar podría informar un valor de **frecuencia cardíaca** distinto de cero incluso cuando no se detecta ningún objetivo humano (y la frecuencia respiratoria se informa como 0).

---

### 3. Detección de distancia al objetivo

- **Firmware aplicable**: `1.6.10` y versiones posteriores.
- **Descripción de la función**:
    Detecta e informa la distancia en línea recta entre el radar y un objetivo.
- **Parámetro clave**:
  - **Rango máximo efectivo de detección**: **5 metros**.
- **Lógica de reporte de datos y limitaciones**:
  - **Estado sin objetivo**: Cuando no se detectan objetivos, el valor de distancia se informa como **0**.
  - **Objetivo(s) detectado(s)**: Cuando se detecta uno o más objetivos dentro del rango de 5 metros, el radar informa la distancia del objetivo **más cercano** al sensor.
  - **Datos no actualizados (mantiene el último valor)**: El valor de distancia dejará de actualizarse si el objetivo más cercano está o se mueve más allá del rango efectivo de detección de 5 metros. En este caso, el valor se mantendrá en la última medición válida.
- **Rendimiento de seguimiento**:
    Para garantizar la estabilidad de los objetivos estacionarios a corta distancia, la estrategia de seguimiento del radar está optimizada para diferentes distancias. El rendimiento se detalla en la siguiente tabla:

| Rango de distancia | Estado del objetivo | Rendimiento de seguimiento y notas |
| :--- | :--- | :--- |
| **0,5 m ~ 1,5 m** | Estacionario | **Tasa de éxito de seguimiento > 96%**. El rendimiento es muy estable. |
| **1,5 m ~ 3 m** | Estacionario | **Tasa de éxito de seguimiento > 90%**. El rendimiento es estable. |
| **3 m ~ 5 m** | Estacionario | La estabilidad del seguimiento disminuye, con pérdidas ocasionales del objetivo. La versión 1.6.12 muestra una mejora del 80% respecto a versiones anteriores. |
| **Acercándose** | En movimiento | Cuando un objetivo se mueve hacia el radar desde la distancia, el seguimiento estable normalmente comienza cuando la persona alcanza aproximadamente **3 metros**. |
| **Alejándose** | En movimiento | Cuando un objetivo se aleja del radar, el seguimiento puede extenderse **más allá de 5 metros**. |

---

### 4. Conteo de ocupantes en el entorno

- **Descripción de la función**:
    Proporciona un conteo preliminar y estimado de individuos dentro del área de detección.
- **Explicación de los datos**:
  - Esta función se encuentra actualmente en una etapa de desarrollo y debe considerarse experimental. El valor devuelto es una estimación aproximada derivada de un análisis complejo de señales.
  - Su precisión está fuertemente influenciada por factores como la superposición de señales de múltiples personas, las posturas individuales y los patrones de movimiento.
  - En consecuencia, **esta función no es adecuada para aplicaciones que dependen de un número preciso de ocupantes**.
  - Estamos trabajando activamente en perfeccionar el algoritmo subyacente y esperamos ofrecer mejoras sustanciales de precisión en futuras versiones de firmware.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
