---
description: Getting started with mmWave Human Detection Sensor Kit
title: Kit de Sensor de Detección Humana MR24HPC1 mmWave
keywords:
- radar
- mmwave kit
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/mmwave_human_detection_kit
sidebar_position: 0
last_update:
  date: 07/17/2025
  author: Guillermo
---

# Kit de Sensor de Detección Humana MR24HPC1 mmWave

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/1.png" style={{width:550, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Impulsado por el XIAO ESP32C3 de Seeed Studio, soporta conectividad WiFi/BLE y ofrece detección precisa de humanos mediante sensores mmWave. Conecta fácilmente módulos Grove para funciones adicionales. Configura Home Assistant en 1-2 minutos y actualiza firmware inalámbricamente (OTA). Gran versatilidad con sensores mmWave reemplazables. Ideal para automatización de hogares inteligentes, detección de intrusos y monitoreo de personas mayores.

### Características

- **Detección Humana Precisa**: Sensor mmWave a bordo basado en el principio FMCW que ofrece detección humana precisa y respetuosa de la privacidad.
- **Personalización Flexible**: Sensor de Presencia Humana reemplazable por otros mmWave de Seeed para detección de latidos, caídas, etc.; más de 400 sensores Grove opcionales.
- **Fácil Configuración y Actualizaciones Inalámbricas**: Configuración sin código para Home Assistant en 1-2 minutos, con actualizaciones OTA.
- **Conectividad Fluida**: Basado en XIAO ESP32C3, con soporte WiFi/BLE y compatibilidad con sistemas domóticos.
- **Solución Escalable**: Servicios OEM/ODM disponibles para personalización y escalabilidad.

### Aplicaciones

- **Automatización del Hogar Inteligente**: Mejorar iluminación, HVAC y seguridad según presencia humana.
- **Seguridad en Edificios**: Detectar intrusiones y activar alertas.
- **Monitoreo de Salud**: Supervisar movimientos y detectar caídas.
- **Puertas Automáticas**: Abrir puertas cuando alguien se acerca.
- **Cuidado de Ancianos**: Vigilar el bienestar y proveer asistencia oportuna.

## Descripción del Hardware

Antes de comenzar, es esencial conocer algunos parámetros básicos del producto. La siguiente tabla muestra las características del Kit de Sensor de Detección Humana mmWave.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/hardware.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Aspectos importantes al usar este kit:

1. La función de red del XIAO ESP32C3 requiere antena. Si instalas un módulo Grove, evita cambiar la posición de la antena, que está en la parte trasera de la base para asegurar buena señal y no interferir con el radar.

2. Los agujeros en la carcasa son para ventilación, pensados para usuarios que usen sensores para gases; no son para detección de personas, por lo que no hay problema de privacidad.
:::

La tabla siguiente muestra la conexión hardware entre el radar milimétrico y el XIAO ESP32C3, base para desarrollos posteriores.

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C3</th>
			<th>MR24HPC1</th>
		</tr>
		<tr>
			<td>5V</td>
			<td>VCC</td>
		</tr>
		<tr>
			<td>GND</td>
			<td>GND</td>
		</tr>
    <tr>
      <td>GPIO4 (D2)</td>
      <td>RX</td>
    </tr>
    <tr>
      <td>GPIO5 (D3)</td>
      <td>TX</td>
    </tr>
	</table>
</div>

## Primeros Pasos

:::tip
Este tutorial se enfoca en la rápida aplicación del kit en Home Assistant y ESPHome. Para desarrollo secundario, consulta la sección [Desarrollo secundario personalizado](#customized-secondary-development).
:::

### Preparación del Software

No explicaremos cómo instalar Home Assistant, asumimos que ya tienes un dispositivo funcionando.

Si quieres aprender a instalarlo, consulta el [tutorial oficial](https://www.home-assistant.io/installation/). Recomendamos instalar Home Assistant en un dispositivo x86 para mayor facilidad.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

Se recomienda instalar **Home Assistant OS** y **Home Assistant Supervised** para mayor comodidad.

También hay guías específicas para productos Seeed:

- [Inicio con Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/ODYSSEY-X86-Home-Assistant/)
- [Inicio con Home Assistant en reTerminal](https://wiki.seeedstudio.com/reTerminal_Home_Assistant/)
- [Inicio con Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/h68k-ha-esphome/)

El XIAO ESP32C3 usa ESPHome para conectarse a Home Assistant, por lo que también debes instalar ESPHome en **Add-Ons**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

## Primeros Pasos con ESPHome

De fábrica, el XIAO ESP32C3 viene con firmware listo para encenderse, y es posible poner en marcha el kit en Home Assistant muy rápido. El video muestra los pasos exactos para empezar.

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/2.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

A continuación, los pasos gráficos para completar el inicio rápido.

### Paso 1. Encender el kit

Alimenta el kit con un cable USB-C. No excedas 5V/1A para evitar daños.

### Paso 2. Conectar al hotspot "seedstudio-mr24hpc1"

Al encender, se activa un hotspot llamado **seedstudio-mr24hpc1**. Conéctate a él, puedes usar el celular para no cambiar la red de tu computadora.

:::note
Firmware antiguo puede pedir contraseña WiFi para conectarse a **mmwave-kit**. Recomendamos **[actualizar firmware](#restore-factory-firmware)**. Contraseña: `seeedstudio`.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/40.png" style={{width:400, height:'auto'}}/></div>

Luego abre en el navegador `192.168.4.1` para configurar la red y contraseña que debe usar el kit.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/4.png" style={{width:1000, height:'auto'}}/></div>

Selecciona la red a la que deseas conectar el kit. Debe estar en la misma LAN que Home Assistant para que lo detecte.

:::caution
Si no aparece la red, es posible que el XIAO ESP32C3 no la soporte. Ajusta el router para máxima compatibilidad y usa la banda 2.4GHz, ya que no soporta 5GHz.
:::

Introduce la contraseña y guarda. El dispositivo reiniciará e intentará conectar. Puedes cerrar la página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/5.png" style={{width:600, height:'auto'}}/></div>

### Paso 3. Añadir dispositivo a Home Assistant

Si la red está bien, el dispositivo aparecerá en Home Assistant. Sigue esta ruta para añadirlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/41.png" style={{width:500, height:'auto'}}/></div>

Haz clic en **Settings** y luego en **Devices & services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/42.png" style={{width:1000, height:'auto'}}/></div>

El dispositivo debe aparecer en **Discovered**, haz clic en **CONFIGURE**, luego en **SUBMIT** y configura la región.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/43.png" style={{width:1000, height:'auto'}}/></div>

El kit se agregó correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/44.png" style={{width:1000, height:'auto'}}/></div>

:::note
Si tienes muchos dispositivos y no aparece, obtén la IP del kit en el router y usa **Add Integration** para agregarlo manualmente.
:::

### Paso 4. Añadir componentes al panel

Haz clic en la tarjeta **ESPHome**, que mostrará **1 device**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/45.png" style={{width:1000, height:'auto'}}/></div>

Se mostrarán todos los componentes del kit. Desplázate para añadirlos al panel.

:::caution
Si no ves los componentes, verifica la alimentación y los logs. Algunas PC no entregan suficiente energía por USB. Si todo está bien, envía los logs al soporte técnico de Seeed Studio.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/46.png" style={{width:1000, height:'auto'}}/></div>

Ahora verás toda la información en **Overview**.

### Paso 5. Editar el panel

El orden de los componentes es automático y puede no ser óptimo para visualización o configuración, edita el panel para ajustarlo.

En Overview, haz clic en los tres puntos (triángulo), luego en **Edit Dashboard**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/12.png" style={{width:1000, height:'auto'}}/></div>

En la página de edición, haz clic otra vez en los tres puntos (arriba a la derecha) y elige **Raw Configuration Editor**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/13.png" style={{width:1000, height:'auto'}}/></div>

Borra el código original, copia el siguiente código y guarda.

:::tip
El firmware nuevo se ajusta a la documentación ESPHome y cada dispositivo tiene nombre MAC único. Reemplaza `{$DEVICE}` con el nombre de tu dispositivo (visible en la entidad ESPHome).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/47.png" style={{width:1000, height:'auto'}}/></div>
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1-card.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>Haz clic aquí para ver el código completo</summary>

```css
title: My Home
views:
  - path: default_view
    title: Home
    cards:
      - type: horizontal-stack
        cards:
          - type: entities
            entities:
              - entity: button.{$DEVICE}_module_restart
                name: Module Restart
              - entity: sensor.{$DEVICE}_hardware_model
                name: Hardware Model
              - entity: sensor.{$DEVICE}_hardware_version
                name: Hardware Version
              - entity: sensor.{$DEVICE}_heartbeat
                name: Heartbeat
              - entity: sensor.{$DEVICE}_product_id
                name: Product ID
              - entity: sensor.{$DEVICE}_product_model
                name: Product Model
            title: DEVICE Information
      - type: vertical-stack
        cards:
          - type: entities
            entities:
              - entity: select.{$DEVICE}_scene
                name: Scene
              - entity: number.{$DEVICE}_sensitivity
                name: Sensitivity
              - entity: select.{$DEVICE}_time_for_entering_no_person_state_standard_function
                name: Time For Entering No Person State Setting (Standard Function)
              - entity: binary_sensor.{$DEVICE}_presence_information
                name: Presence Information
              - entity: sensor.{$DEVICE}_motion_information
                name: Motion Information
              - entity: sensor.{$DEVICE}_body_movement_parameter
                name: Body Movement Parameter
              - entity: sensor.{$DEVICE}_active_reporting_of_proximity
                name: Active Reporting Of Proximity
            title: Unsolicited Information
      - type: horizontal-stack
        cards:
          - type: entities
            entities:
              - entity: switch.{$DEVICE}_underlying_open_function_info_output_switch
                name: Underlying Open Function Info Output Switch
              - entity: sensor.{$DEVICE}_existence_energy
                name: Existence Energy
              - entity: sensor.{$DEVICE}_motion_energy
                name: Motion Energy
              - entity: sensor.{$DEVICE}_static_distance
                name: Static Distance
              - entity: sensor.{$DEVICE}_motion_distance
                name: Motion Distance
              - entity: sensor.{$DEVICE}_motion_speed
                name: Motion Speed
            title: Underlying Open Function
      - type: horizontal-stack
        cards:
          - type: entities
            entities: 
              - entity: sensor.{$DEVICE}_custom_mode_status
                name: Custom Mode Status
              - entity: number.{$DEVICE}_custom_mode
                name: Custom Mode
              - entity: sensor.{$DEVICE}_current_custom_mode
                name: Current Custom Mode
              - entity: button.{$DEVICE}_end_of_custom_mode_settings
                name: End Of Custom Mode Settings
              - entity: select.{$DEVICE}_existence_boundary
                name: Existence Boundary
              - entity: select.{$DEVICE}_motion_boundary
                name: Motion Boundary
              - entity: number.{$DEVICE}_existence_energy_threshold
                name: Existence Energy Threshold
              - entity: number.{$DEVICE}_motion_energy_threshold
                name: Motion Energy Threshold
              - entity: number.{$DEVICE}_motion_trigger_time
                name: Motion Trigger Time
              - entity: number.{$DEVICE}_motion_to_rest_time
                name: Motion To Rest Time
              - entity: number.{$DEVICE}_time_for_entering_no_person_state_underlying_open_function
                name: Time For Entering No Person State (Underlying Open Function)
            title: Custom Settings
```

</details>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/14.png" style={{width:1000, height:'auto'}}/></div>

Luego has click en **DONE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/15.png" style={{width:1000, height:'auto'}}/></div>

Una nueva configuración del dashboard se ha configurado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/48.png" style={{width:1000, height:'auto'}}/></div>

¡Felicidades! Llegados a este punto, ¡has completado toda la integración del kit con Home Assistant!

## Detalles del funcionamiento del panel

Para ayudarte a comprender rápidamente todas las capacidades del sistema y cómo usar sus funciones, te recomendamos leer esta sección con atención. Si necesitas información más detallada, te recomendamos consultar el [manual de usuario del producto](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf).

Para más detalles sobre la configuración y parámetros del panel, hemos preparado una documentación completa en ESPHome. Te invitamos a consultarla:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/components/seeed_mr24hpc1.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ESPHome Docs 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

## Desarrollo secundario personalizado

Si necesitas reemplazar el radar o instalar un módulo Grove, puedes guiarte con las imágenes animadas a continuación. Retira los cuatro tornillos ubicados en la parte trasera del producto, luego golpea suavemente para quitar la cubierta frontal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/24.gif" style={{width:650, height:'auto'}}/></div>

Para instalar el módulo Grove, consulta la imagen a continuación. Se recomienda que el conector Grove quede orientado hacia afuera y que el cable quede oculto debajo del módulo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/25.gif" style={{width:650, height:'auto'}}/></div>

:::note
Además de la instalación de módulos, la ubicación del kit también requiere atención especial. La posición de instalación influye directamente en la precisión del monitoreo. Consulta las instrucciones en el **[Datasheet](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)**.
:::

Este kit está orientado principalmente al hogar inteligente. No entraremos en detalles sobre el desarrollo secundario, pero te proporcionamos información útil al respecto:

- Wiki del módulo MR24HPC1: [Sensor mmWave 24GHz - Human Static Presence Module Lite (MR24HPC1)](https://wiki.seeedstudio.com/Radar_MR24HPC1)
- Recursos del XIAO ESP32C3 incluido: [Primeros pasos con Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/)

### Desarrollo secundario con ESPHome

Todo el código del kit es de código abierto. Puedes usar el código como componente externo en ESPHome.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Consulta el archivo [`mr24hpc1.yaml`](https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml) como ejemplo de configuración para ESPHome.

Si no tienes experiencia previa con ESPHome, puedes aprender a usarlo en [**esta Wiki**](https://wiki.seeedstudio.com/xiao-esp32c3-esphome/).

## Actualizaciones OTA con ESPHome

El producto está diseñado para operar de forma continua y fija en un solo lugar. Pensamos en un sistema que pudiera actualizarse por OTA (Over-The-Air) en la red local.

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/ota.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

Haz clic en la pantalla principal de ESPHome:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **NEW DEVICE** y luego en **Continue**.

Ingresa el nombre del dispositivo, el SSID y la contraseña del Wi-Fi. Asegúrate de que el kit y Home Assistant estén en la **misma red local**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/22.png" style={{width:450, height:'auto'}}/></div>

Haz clic en **Next** y selecciona **ESP32-C3** como tipo de dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" style={{width:450, height:'auto'}}/></div>

Luego haz clic en **Next** y después en **SKIP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" style={{width:1000, height:'auto'}}/></div>

Una vez que se actualice el programa en GitHub, puedes copiar el contenido y sobrescribir el archivo YAML generado.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Finally, just select **Wireless** to upload the program.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/23.png" style={{width:500, height:'auto'}}/></div>

## Restaurar firmware de fábrica

### Método 1: Flashear rápidamente el firmware más reciente

Si tu kit no coincide con los pasos anteriores, puedes restaurarlo con el firmware de fábrica.

**Paso 1.** Haz clic en el siguiente enlace y conecta el kit vía USB-C a tu computadora.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://limengdu.github.io/MR24HPC1_ESPHome_external_components/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Flashea el Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 2.** Haz clic en **Connect** y selecciona el puerto con nombre **JTAG**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/50.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Flashea el Firmware. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/32.png" style={{width:500, height:'auto'}}/></div>

Haz clic en **INSTALL SEEED STUDIO MMWAVE KIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/33.png" style={{width:500, height:'auto'}}/></div>

Si ves la pantalla siguiente, la instalación fue exitosa. Puede que necesites reiniciar el equipo para que funcione correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/34.png" style={{width:500, height:'auto'}}/></div>

### Método 2: Flashear con ESPHome Tool

Si tu dispositivo no funciona correctamente, intenta restaurar el firmware de fábrica.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/releases/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descarga el Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

- **Opción 1**: Usa la herramienta web [ESPhome Web tool](https://web.esphome.io/?dashboard_install)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

Haz clic en **CONNECT**, selecciona el puerto del XIAO ESP32.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

Luego haz clic en **INSTALL** y selecciona el archivo `.bin`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- **Opción 2**: Usa [esphome-flasher](https://github.com/esphome/esphome-flasher)

Si la opción 1 no funciona incluso después de instalar los drivers, intenta con esta herramienta siguiendo la guía oficial.

:::tip
Si deseas ver los registros del XIAO ESP32C3, puedes usar el botón **View Logs** del software.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

Una vez cargado el firmware, aparecerá una red llamada **seeedstudio-mr24hpc1**. Vuelve a configurar el dispositivo desde [Tres minutos para empezar con ESPHome](#three-minutes-to-get-started-esphome).

## Recursos

- **[GITHUB]** [Código abierto del proyecto](https://github.com/limengdu/mmwave-kit-external-components)
- **[PDF]** [Plantilla de configuración rápida](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [Datasheet](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [Manual de usuario](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)

### Versión 1
- **[ZIP]** [PCB y esquemáticos en EAGLE](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **[PDF]** [Esquemático](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

### Versión 2
- **[ZIP]** [PCB y esquemáticos en EAGLE](https://files.seeedstudio.com/wiki/mmwave_kit/Human_Detection_Sensor_Board_V2.zip)
- **[PDF]** [Esquemático](https://files.seeedstudio.com/wiki/mmwave_kit/mmwave_kit_sch_V2.pdf)

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para ayudarte y brindarte distintos canales de soporte según tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
