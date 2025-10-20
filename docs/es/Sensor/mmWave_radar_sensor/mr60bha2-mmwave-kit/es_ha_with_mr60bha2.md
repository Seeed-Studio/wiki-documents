---
title: Sensor de Respiración-Latido MR60BHA2 con Home Assistant
description: | 
  Sensor mmWave de Latido MR60BHA2 con Home Assistant
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/ha_with_mr60bha2
keywords:
  - ESPHome
sidebar_position: 1
last_update:
  date: 09/23/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::danger Sobre el alcance del uso de radar en Home Assistant
Las actualizaciones de firmware del RADAR y las actualizaciones YAML de ESPHome son 2 piezas de software diferentes. El YAML de ESPHome puede actualizarse OTA, mientras que la placa RADAR SOLO puede actualizarse vía USB dentro de la carcasa, con software especializado que SEEED proporciona. Puedes personalizar el software ESPHome, [NO puedes personalizar el firmware del RADAR](https://wiki.seeedstudio.com/es/getting_started_with_mr60bha2_mmwave_kit/#module-firmware-upgrade). Seeed Studio solo permite personalización del RADAR si estás haciendo una aplicación comercial.
:::

## Introducción {#introducción}

El MR60BHA2 es un módulo sensor de detección de respiración y latido mmWave de 60GHz diseñado para integración con el microcontrolador XIAO ESP32C6. Este sensor avanzado utiliza tecnología de ondas milimétricas para proporcionar monitoreo no invasivo de signos vitales y detección de presencia.

Esta guía tiene como objetivo proporcionar un recorrido claro y completo para integrar el Sensor mmWave MR60BHA2 con Home Assistant usando el microcontrolador XIAO ESP32C6. Siguiendo esta guía, los usuarios aprenderán cómo configurar el sensor para detección de latidos, conectarlo a su entorno Home Assistant, y utilizar ESPHome para gestionar y monitorear el dispositivo de manera efectiva.

Esta integración permite a los usuarios mejorar sus sistemas de hogar inteligente con capacidades de detección avanzadas, habilitando respuestas automatizadas y monitoreo en tiempo real para varias aplicaciones.

<div><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/></div>

## Descripción del Producto

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
               <a class="get_one_now_item" href="https://www.seeedstudio.com/MR60BHA2-60GHz-mmWave-Sensor-Breathing-and-Heartbeat-Module-p-5945.html?utm_source=wiki" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
            </div>
         </td>
      </tr>
   </table>
</div>

### Sensor mmWave MR60BHA2 con XIAO ESP32C6

Para integrar efectivamente el Sensor mmWave MR60BHA2 con Home Assistant usando el XIAO ESP32C6, sigue estos pasos esenciales:

:::caution
Por favor asegúrate de haber [actualizado el firmware](/es/getting_started_with_mr60bha2_mmwave_kit#module-firmware-upgrade) del módulo MR60BHA2 a la versión más reciente.  
El firmware más reciente añade detección de presencia humana y función de detección de personal.
:::

1. **[Configurar Home Assistant](#configurar-home-assistant)**: Comienza instalando y configurando Home Assistant para gestionar tus dispositivos de hogar inteligente, asegurando una conexión perfecta con el sensor.
2. **[Conectar el Sensor MR60BHA2](#descubrir-y-añadir-el-dispositivo-en-home-assistant)**: Aprende cómo descubrir y añadir el Sensor MR60BHA2 a tu configuración de Home Assistant, habilitando monitoreo en tiempo real de signos vitales.
3. **[Monitorear Datos del Sensor](#monitoreo-de-datos-del-sensor)**: Una vez integrado, puedes monitorear los datos del sensor de manera efectiva, permitiendo obtener información sobre patrones de frecuencia cardíaca y respiración.
4. **[Implementar Automatización](#implementar-automatización-en-home-assistant)**: Explora las poderosas características de automatización de Home Assistant para crear acciones responsivas basadas en los datos del sensor, mejorando tu entorno de hogar inteligente.
5. **[Modificar Firmware con ESPHome](#modificar-el-firmware-con-esphome)**: Utiliza ESPHome para personalizar la funcionalidad del sensor, adaptándolo para satisfacer tus necesidades específicas para mayor flexibilidad y control.

Estos pasos te guiarán a través del proceso de integración, ayudándote a aprovechar al máximo tu configuración del Sensor mmWave MR60BHA2 y XIAO ESP32C6.

## Comenzando {#comenzando}

:::note Atención
Por favor nota que cuando nos referimos a actualizaciones o modificaciones de firmware, estamos específicamente abordando el firmware en el XIAO ESP32C6.
:::

Para integrar exitosamente el Sensor mmWave MR60BHA2 con Home Assistant, necesitarás los siguientes componentes:

- **Home Assistant**: Una plataforma de hogar inteligente que gestionará los datos del sensor.
- **Complemento ESPHome**: Firmware que permite configuración y gestión fácil de dispositivos ESP32.

### Paso 1: Configurar Home Assistant {#configurar-home-assistant}

1. **Instalación**: Para rendimiento óptimo, se recomienda instalar [Home Assistant OS](https://www.home-assistant.io/installation/) en una Máquina Virtual o Raspberry Pi. Sigue la guía de instalación oficial en el sitio web de Home Assistant.
2. **Habilitar el Complemento ESPHome**:
   - Accede al panel de Home Assistant.
   - Navega a la sección "Complementos" y busca el complemento ESPHome.
   - Haz clic en "Instalar" y luego "Iniciar" para habilitarlo.
   - Una vez instalado, configura el complemento para asegurar comunicación adecuada con el XIAO ESP32C6.

:::caution Atención
Debido a los nuevos iconos, por favor instala la versión 2024.12.0 y superior del plugin ESPHome.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Al reunir los componentes necesarios y configurar Home Assistant con el complemento ESPHome, estarás listo para proceder con la integración del Sensor mmWave MR60BHA2.

:::tip instalar Home Assistant
También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- [Comenzando con Home Assistant en ODYSSEY-X86](/es/ODYSSEY-X86-Home-Assistant)
- [Comenzando con Home Assistant en reTerminal](/es/reTerminal_Home_Assistant)
- [Comenzando con Home Assistant en LinkStar H68K/reRouter CM4](/es/h68k-ha-esphome)
:::

### Paso 2: Preparar el Kit

Por defecto, tu dispositivo (XIAO ESP32C6) viene pre-cargado con firmware para detección de respiración y frecuencia cardíaca. Sin embargo, hay dos escenarios donde podrías necesitar actualizar el firmware:

1. **Re-flashear el Firmware**: Si el firmware existente está corrupto o necesitas empezar de nuevo.
2. **Actualizar el Firmware**: Si hay una versión más nueva del firmware con funcionalidad mejorada.

Hay dos métodos simples para flashear el firmware:

:::caution
Firefox no soporta flashear firmware en dispositivos ESP. Por favor usa Google Chrome o Microsoft Edge en su lugar.
:::

<Tabs>
<TabItem value='Herramienta Web'>

Puedes usar esta [Herramienta Web](https://limengdu.github.io/MR60BHA2_ESPHome_external_components/) para un método fácil y directo de flashear tu firmware. Simplemente sigue las instrucciones en pantalla.

- Haz clic en el botón `CONECTAR` para iniciar la conexión. La herramienta actualizará automáticamente el firmware.

Si algo sale mal, sigue los pasos de solución de problemas en pantalla o cambia al método `ESPHome Web` para completar el proceso.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, necesitarás descargar el archivo de firmware `bin` desde [aquí](https://github.com/limengdu/MR60BHA2_ESPHome_external_components/releases)(necesitarás descomprimir el archivo descargado).

1. Conecta el kit sensor a tu PC.
2. Visita la página [ESPHome Web](https://web.esphome.io/).
3. Selecciona el archivo de firmware con el sufijo `*.factory.bin`.

Mira el siguiente video para un recorrido detallado de flashear el firmware vía ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Instalar firmware vía ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

Con cualquier método, tendrás tu firmware actualizado y listo para integración con Home Assistant.

#### Conectar al punto de acceso del kit

Con el firmware, podrías encender el kit sensor, y aparecerá un punto de acceso Wi-Fi: `seeedstudio-mr60bha2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/hotspot-name.png" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

Navega a `192.168.4.1` para configurar los ajustes de red local de tu servidor Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/opt-for-wifi-ap.jpg" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enter-psw.JPEG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>

### Paso 3: Descubrir y Añadir el Dispositivo en Home Assistant {#descubrir-y-añadir-el-dispositivo-en-home-assistant}

En esta sección, repasaremos el proceso usando la aplicación Home Assistant, donde la lógica es la misma que en la web.

1. **Abrir la Aplicación**: Una vez que inicies la aplicación, selecciona tu servidor Home Assistant. La aplicación encontrará automáticamente tu servidor.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
2. **Crear una Cuenta**: Si no has creado una cuenta, necesitarás hacerlo. Después de eso, inicia sesión con tus credenciales.
  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG" style={{width:360, height:'auto', "border-radius": '15px'}}/></div>
3. **Navegar a la Página de Integración**: Una vez que hayas iniciado sesión, ve a la página "Integraciones" en Home Assistant. Si has instalado el complemento ESPHome y tanto el XIAO ESP32C6 como tu servidor Home Assistant están en la misma red, deberías ver el dispositivo `Seeed Studio MR60BHA2 Kit {device-mac-address}` aparecer bajo dispositivos descubiertos.
4. **Añadir el Dispositivo**: Haz clic para añadir el dispositivo a tu configuración de Home Assistant.
  <div class="img-container" align="center">
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-find.JPG" alt="find device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-submit.JPG" alt="submit a device"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-device-add.JPG" alt="area"/>
    <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-addon-device.JPG" alt="addon"/>
  </div>

  Haz clic en el botón `CONFIGURE`, confirma presionando el botón `SUBMIT`, y asigna el dispositivo a tu área preferida (por ejemplo, Dormitorio). Después de esto, el dispositivo será gestionado a través de tu integración ESPHome, habilitando control y monitoreo completo en Home Assistant.

## Monitoreo y Control {#monitoreo-y-control}

Siguiendo los pasos anteriores, habrás descubierto y agregado exitosamente el Sensor MR60BHA2 a tu Home Assistant, habilitando monitoreo y control en tiempo real.

### Monitoreo de datos del Sensor

Ahora que el sensor está agregado al "Dormitorio", navega a la pestaña "Overview". Verás la tarjeta mmWave mostrada en la sección del Dormitorio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-data-with-person-detection.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Control de luz RGB

En esta sección, exploraremos cómo controlar una luz RGB.

<div class="img-container">
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-sensor-light-on.png" style={{"border-radius": '6px'}}/>
   <img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/light-on.jpg" style={{"border-radius": '6px'}}/>
</div>

Haz clic en la caja correspondiente para controlar directamente la luz RGB:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-light-panel.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

<iframe class="video-mp4" src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-control-light.mp4" title="Home Assistant Control RGB Light" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>

### Próximos Pasos {#próximos-pasos}

Ahora que has integrado exitosamente el Sensor mmWave MR60BHA2 con el XIAO ESP32C6 y Home Assistant, puedes explorar mejoras adicionales para aprovechar al máximo tu configuración. Aquí hay dos vías esenciales a considerar:

#### Implementando Automatización en Home Assistant

Las poderosas características de automatización de Home Assistant te permiten crear un entorno de hogar inteligente más receptivo basado en los datos recopilados de tu Sensor MR60BHA2. Esto significa que puedes configurar acciones que ocurran automáticamente basadas en disparadores específicos relacionados con la detección de movimiento o latidos del corazón.

Aquí te mostramos cómo implementar automatizaciones paso a paso:

1. **Navega a la Sección de Automatizaciones**: En tu panel de Home Assistant, encuentra y haz clic en la pestaña "Automations". Esta área está dedicada a crear y gestionar acciones automatizadas dentro de tu hogar.
2. **Crea una Nueva Automatización**: Haz clic en el botón "Add Automation". Home Assistant ofrece un asistente fácil de usar que te guía a través del proceso de configurar una automatización.
3. **Define el Disparador**: Elige un disparador basado en los datos del Sensor MR60BHA2. Por ejemplo, puedes configurar la automatización para que se dispare cuando el sensor detecte movimiento o un patrón específico de latidos del corazón. Esto significa que tu automatización puede responder inmediatamente a las lecturas del sensor.
4. **Establece Condiciones (Opcional)**: Las condiciones te permiten refinar cuándo debe ejecutarse la automatización. Por ejemplo, podrías querer que las luces se enciendan solo cuando esté oscuro afuera o si un usuario específico está en casa.
5. **Determina la Acción**: Especifica qué acción debe ocurrir cuando se cumplan las condiciones del disparador. Las acciones pueden incluir encender luces, enviar notificaciones, o incluso ajustar configuraciones del termostato. Por ejemplo, podrías crear una acción que encienda una luz RGB cuando se detecte movimiento, mejorando tanto la seguridad como la comodidad.
6. **Guarda y Prueba**: Después de configurar tu automatización, guárdala y prueba su funcionalidad. Camina frente al sensor para ver si las luces se encienden como se espera. Si surgen problemas, puedes regresar a la configuración de automatización para solucionar problemas y ajustar.

Al aprovechar las capacidades de automatización de Home Assistant, puedes crear un entorno verdaderamente inteligente que responda a tus movimientos y métricas de salud, asegurando que tu espacio de vida se adapte a tu estilo de vida sin problemas.

## Modificando el Firmware con ESPHome

Una de las ventajas significativas de usar el XIAO ESP32C6 es su compatibilidad con ESPHome, una herramienta poderosa para gestionar y personalizar el firmware de tu microcontrolador. Con ESPHome, puedes modificar directamente el firmware para adaptar la funcionalidad del Sensor mmWave MR60BHA2 a tus necesidades específicas.

Para comenzar con ESPHome, sigue estos pasos:

1. **Accede al Panel de ESPHome**: En Home Assistant, navega al complemento ESPHome. Deberías ver tu XIAO ESP32C6 listado entre los dispositivos.

2. **Crea una Nueva Configuración**: Haz clic en el dispositivo para abrir su configuración. Aquí, puedes ajustar configuraciones como la sensibilidad del sensor, intervalos de reporte y formatos de salida. ESPHome usa un formato de configuración YAML, que es fácil de usar y te permite definir varios parámetros. Puedes usar el siguiente archivo YAML de plantilla como punto de partida para tu configuración, que está diseñado específicamente para el Sensor MR60BHA2:

  ```yaml showLineNumbers title=example/mr60bha2.yaml
    # template from https://github.com/limengdu/MR60BHA2_ESPHome_external_components
    substitutions:
      name: "seeedstudio-mr60bha2-kit"
      friendly_name: "seeedstudio-mr60bha2-kit"

    esphome:
      name: "${name}"
      friendly_name: "${friendly_name}"
      name_add_mac_suffix: true
      project:
        name: "seeedstudio.mr60bha2_kit"
        version: "3.5"
      platformio_options:
        board_upload.maximum_size: 4194304
      min_version: "2024.3.2" # Fix logger compile error on ESP32-C6 esphome#6323


    esp32:
      board: esp32-c6-devkitc-1
      variant: esp32c6
      flash_size: 4MB # upload.flash_size
      framework:
        type: esp-idf

    # If you want to experience the latest components, you can remove this comment.
    # external_components:
    #   - source:
    #       type: git
    #       url: https://github.com/limengdu/MR60BHA2_ESPHome_external_components
    #       ref: main
    #     components: [ seeed_mr60bha2 ]
    #     refresh: 0s

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

3. **Personaliza la Funcionalidad**: Puedes mejorar las capacidades del sensor explorando varias características disponibles en ESPHome, permitiendo ajustes flexibles para adaptarse a tus necesidades específicas.

4. **Sube el Firmware Actualizado**: Después de hacer tus modificaciones, guarda la configuración. El panel de ESPHome te permite subir el firmware directamente por aire. Simplemente haz clic en el botón `Upload`, y sigue las indicaciones para completar el proceso. Este método simplificado hace que sea fácil mantener tu firmware actualizado.

5. **Prueba e Itera**: Una vez que la subida esté completa, prueba tus cambios en tiempo real. Monitorea el rendimiento del sensor para asegurar que opere como se espera. Si encuentras algún problema, vuelve al panel de ESPHome para refinar tus configuraciones. Este enfoque iterativo te permite mejorar continuamente tu firmware, asegurando que cumpla con tus requisitos de manera efectiva.

Al utilizar ESPHome, te empoderas para hacer mejoras continuas a tu configuración de sensor, adaptándola para satisfacer tus necesidades en evolución. Esta capacidad no solo mejora la funcionalidad de tu proyecto, sino que también proporciona una plataforma para aprender y experimentar con el desarrollo de IoT.

A través de estos pasos, puedes maximizar la funcionalidad de tu configuración del Sensor mmWave MR60BHA2 y XIAO ESP32C6, transformándola en un sistema de hogar inteligente altamente personalizado y receptivo adaptado a tus preferencias y necesidades.

## Recursos

- [ESPHome — ESPHome](https://esphome.io/)
- [Installation - Home Assistant](https://www.home-assistant.io/installation/)
- [limengdu/MR60BHA2_ESPHome_external_components](https://github.com/limengdu/MR60BHA2_ESPHome_external_components)

## Solución de Problemas

### Explicación del Mecanismo de Reporte de Datos del Sensor de Radar (Para v1.6.12 y posteriores)

Esta parte detalla el tiempo, precisión y condiciones requeridas para los datos reportados por las diversas funciones de detección del sensor de radar. Está destinada a ayudar a los usuarios a comprender y utilizar mejor los datos del sensor

---

### 1. Presencia Estática Humana

- **Descripción de la Función**:
    Detecta la presencia de un objetivo humano estacionario dentro de un área específica.
- **Parámetro Clave**:
  - **Rango de Detección Efectivo**: Hasta **4 metros**.
- **Lógica de Reporte de Datos**:
  - Reporta un estado de "Presencia" cuando se detecta un objetivo humano en el área.
  - Reporta un estado de "Sin Presencia" cuando el área está libre de objetivos humanos.
  - **Nota**: El rango de detección de 4 metros es exclusivo de la función de Presencia Estática Humana. No se aplica a otras características como Detección de Respiración y Latidos o Detección de Distancia del Objetivo, que tienen sus propios rangos efectivos más cortos. El único propósito de esta función es determinar presencia o ausencia, no proporcionar datos detallados.

---

### 2. Detección de Respiración y Latidos

- **Descripción de la Función**:
    Realiza detección de signos vitales sin contacto en un solo objetivo humano estacionario.
- **Parámetros Clave**:
  - **Rango de Detección Efectivo**: Aproximadamente **1.5 metros**.
  - **Objetivo de Detección**: Un solo humano estacionario.
- **Condiciones de Operación Necesarias**:
  - **Quietud del Objetivo**: La persona siendo monitoreada debe permanecer completamente quieta.
  - **Estabilidad del Dispositivo**: El dispositivo radar debe estar montado de forma segura, sin sacudidas o vibraciones.
  - **Objetivo Único**: Solo una persona debe estar dentro del rango de detección.
- **Lógica de Reporte de Datos**:
  - **Reporte Normal**: Cuando se cumplen todas las condiciones anteriores, el radar reporta valores de respiración y frecuencia cardíaca en tiempo real.
  - **Escenarios de Reporte Anormal**:
    - **Objetivo Más Allá de 1.5m**: Cuando un objetivo detectado está más allá del rango efectivo de 1.5 metros, los datos de respiración y frecuencia cardíaca **dejarán de actualizarse** y se mantendrán en la última medición válida.
    - **Sin Objetivo en Zona Central**: Cuando no se detecta ningún objetivo dentro de la zona central de detección de 0.5 a 1.5 metros, los valores de respiración y frecuencia cardíaca se reportarán activamente como **0**.
- **Nota**: Por favor, tenga en cuenta las interferencias ambientales. Los micro-movimientos de fuentes como ventiladores, aires acondicionados o cortinas que se balancean a veces pueden ser malinterpretados por el sensor. En tales casos, el radar podría reportar un valor de **frecuencia cardíaca** distinto de cero incluso cuando no se detecta ningún objetivo humano (y la frecuencia respiratoria se reporta como 0).

---

### 3. Detección de Distancia del Objetivo

- **Firmware Aplicable**: `1.6.10` y más reciente.
- **Descripción de la Función**:
    Detecta y reporta la distancia en línea recta entre el radar y un objetivo.
- **Parámetro Clave**:
  - **Rango Máximo de Detección Efectivo**: **5 metros**.
- **Lógica de Reporte de Datos y Limitaciones**:
  - **Estado Sin Objetivo**: Cuando no se detectan objetivos, el valor de distancia se reporta como **0**.
  - **Objetivo(s) Detectado(s)**: Cuando se detectan uno o más objetivos dentro del rango de 5 metros, el radar reporta la distancia del objetivo **más cercano** al sensor.
  - **Datos No Actualizados (Mantiene Último Valor)**: El valor de distancia dejará de actualizarse si el objetivo más cercano está en o se mueve más allá del rango de detección efectivo de 5 metros. En este caso, el valor se mantendrá en la última medición válida.
- **Rendimiento de Seguimiento**:
    Para asegurar la estabilidad de objetivos estacionarios a corta distancia, la estrategia de seguimiento del radar está optimizada para diferentes distancias. El rendimiento se detalla en la tabla a continuación:

| Rango de Distancia | Estado del Objetivo | Rendimiento de Seguimiento y Notas |
| :--- | :--- | :--- |
| **0.5m ~ 1.5m** | Estacionario | **Tasa de Éxito de Seguimiento > 96%**. El rendimiento es muy estable. |
| **1.5m ~ 3m** | Estacionario | **Tasa de Éxito de Seguimiento > 90%**. El rendimiento es estable. |
| **3m ~ 5m** | Estacionario | La estabilidad de seguimiento disminuye, con pérdida ocasional del objetivo. La versión 1.6.12 muestra una mejora del 80% sobre versiones anteriores. |
| **Acercándose** | En Movimiento | Cuando un objetivo se mueve hacia el radar desde la distancia, el seguimiento estable típicamente comienza cuando la persona alcanza aproximadamente **3 metros**. |
| **Alejándose** | En Movimiento | Cuando un objetivo se aleja del radar, el seguimiento puede extenderse **más allá de 5 metros**. |

---

### 4. Conteo de Ocupantes del Entorno

- **Descripción de la Función**:
    Proporciona un conteo preliminar estimado de individuos dentro del área de detección.
- **Explicación de Datos**:
  - Esta función está actualmente en una etapa de desarrollo y debe considerarse experimental. El valor devuelto es una estimación aproximada derivada de análisis de señales complejas.
  - Su precisión está fuertemente influenciada por factores como la superposición de señales de múltiples personas, posturas individuales y patrones de movimiento.
  - En consecuencia, **esta característica no es adecuada para aplicaciones que dependen de números precisos de ocupantes**.
  - Estamos trabajando activamente en refinar el algoritmo subyacente y esperamos entregar mejoras sustanciales de precisión en futuras versiones de firmware.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
