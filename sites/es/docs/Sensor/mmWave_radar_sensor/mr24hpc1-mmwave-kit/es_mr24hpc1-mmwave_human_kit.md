---
description: Comenzando con el Kit de Sensor de Detección Humana mmWave
title: Kit de Sensor de Detección Humana mmWave
keywords:
  - radar
  - mmwave kit
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /mmwave_human_detection_kit
sku: E23010426,110061541,E24121301
sidebar_position: 0
last_update:
  date: 08/17/2023
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/mmwave_human_detection_kit/
---

# Kit de Sensor de Detección Humana mmWave MR24HPC1

<br />

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/1.png" style={{width:550, height:'auto'}}/></div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

Alimentado por el XIAO ESP32C3 de Seeed Studio, soporta conectividad WiFi/BLE y ofrece detección humana precisa a través de sensores mmWave. Conecta sin problemas módulos grove para características adicionales. Logra una configuración fácil para Home Assistant en 1-2 minutos, junto con convenientes actualizaciones inalámbricas Over-The-Air (OTA). Permite versatilidad extensa con sensores mmWave reemplazables. Ideal para personalizar automatización del hogar inteligente, detectar intrusiones y monitorear el bienestar de los ancianos.

### Características

- **Detección Humana de Precisión**: El sensor mmWave integrado, basado en el principio FMCW, ofrece detección humana precisa enfocada en la privacidad.
- **Personalización Flexible**: El sensor de Presencia Humana integrado es reemplazable con otros de la serie mmWave de Seeed para detección de latidos cardíacos, detección de caídas, etc; Habilita funcionalidad adicional con más de 400 sensores Grove opcionales.
- **Configuración Fácil, Actualizaciones Inalámbricas**: Configuración sin código para Home Assistant en 1-2 minutos, con actualizaciones inalámbricas Over-The-Air (OTA).
- **Conectividad Sin Problemas**: Alimentado por XIAO ESP32C3, soporta WiFi/BLE y es compatible con sistemas de hogar inteligente
- **Solución Escalable**: Adapta a tus necesidades con servicios OEM/ODM disponibles para escalabilidad.

### Aplicación

- **Automatización del Hogar Inteligente**: Mejora sistemas de iluminación, HVAC y seguridad basados en presencia humana.
- **Seguridad de Edificios**: Detecta intrusiones y activa alertas para mayor seguridad.
- **Monitoreo de Salud**: Monitorea el movimiento de pacientes y ayuda en la detección de caídas.
- **Puertas Automáticas**: Permite que las puertas se abran cuando las personas se acercan.
- **Cuidado de Ancianos**: Monitorea el bienestar de los ancianos y proporciona asistencia oportuna.

## Descripción del Hardware

Antes de que todo comience, es bastante esencial tener algunos parámetros básicos del producto. La siguiente tabla proporciona información sobre las características del Kit de Sensor de Detección Humana mmWave.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/hardware.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Hay algunas cosas a tener en cuenta al usar este kit.

1. La función de red del XIAO ESP32C3 requiere el uso de una antena. Si quieres instalar un módulo Grove, trata de no cambiar la posición de la antena. La antena se coloca en la parte posterior de la placa base por defecto, lo que asegura una buena señal y no interfiere con el trabajo del radar.

2. Los agujeros reservados en la carcasa del kit son agujeros de ventilación, que se reservan considerando que los usuarios pueden usar el módulo sensor para algunos gases, no se usan como criterio para juzgar si hay personas o no, así que por favor no te preocupes por el problema de privacidad.

:::

La siguiente tabla muestra la conexión de hardware entre el radar de ondas milimétricas y el XIAO ESP32C3. Si es necesario, puedes hacer tu propio desarrollo posterior basado en las conexiones en la tabla a continuación.

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

## Comenzando

:::tip
Todo este tutorial se enfoca en la aplicación rápida del kit en Home Assistant & ESPHome, si quieres usar el kit para desarrollo secundario, por favor consulta la sección [Desarrollo secundario personalizado](#customized-secondary-development) del tutorial.
:::

### Preparación del Software

En esta rutina, no expandiremos sobre cómo instalar el entorno de Home Assistant, asumiremos que ya tienes un dispositivo Home Assistant funcionando.

Si deseas aprender cómo instalar Home Assistant, entonces puedes consultar el [tutorial oficial](https://www.home-assistant.io/installation/). Recomendamos encarecidamente que instales Home Assistant usando un dispositivo x86 ya que esta es la forma más amigable para que instales Home Assistant con Supervised.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

Según la tabla anterior, es más apropiado instalar **Home Assistant OS** y **Home Assistant Supervised**, lo cual te quitará muchas molestias de encima.

También hemos escrito cómo instalar Home Assistant para algunos productos de Seeed Studio, por favor consúltalos.

- [Comenzando con Home Assistant en ODYSSEY-X86](https://wiki.seeedstudio.com/es/ODYSSEY-X86-Home-Assistant/)
- [Comenzando con Home Assistant en reTerminal](https://wiki.seeedstudio.com/es/reTerminal_Home_Assistant/)
- [Comenzando con Home Assistant en LinkStar H68K/reRouter CM4](https://wiki.seeedstudio.com/es/h68k-ha-esphome/)

Además de esto, el XIAO ESP32C3 depende del proyecto de código abierto ESPHome para acceder a Home Assistant, por lo que también necesitas tener el servicio **ESPHome** instalado en los **Add-Ons**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/2.png" style={{width:1000, height:'auto'}}/></div>

## Comenzando con ESPHome

Del kit de fábrica, el XIAO ESP32C3 ha sido flasheado con firmware que está listo para encenderse, y pudimos hacer que el kit funcionara en Home Assistant en muy poco tiempo. El video a continuación te mostrará los pasos exactos para comenzar rápidamente.

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/2.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

A continuación están los detalles gráficos paso a paso, por favor consulta lo siguiente para completar el inicio rápido.

### Paso 1. Alimentar el kit

Por favor suministra energía al kit a través de un cable tipo USB-C. Ten cuidado de que la entrada de energía no exceda 5V/1A, de lo contrario el producto puede dañarse.

### Paso 2. Conectar al hotspot del kit "seedstudio-mr24hpc1"

Después de que el kit se encienda, un hotspot llamado **seedstudio-mr24hpc1** se abrirá automáticamente, por favor busca y conéctate al hotspot. Puedes usar tu teléfono celular para conectarte a esta red para que no tengas que cambiar redes en tu computadora tan frecuentemente.

:::note
Si estás usando una versión anterior del firmware, entonces esto puede requerir que ingreses tu contraseña WiFi para conectarte a **mmwave-kit**. recomendamos **[actualizar tu firmware](#restore-factory-firmware)**. Si quieres continuar, la contraseña de red es `seeedstudio`.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/40.png" style={{width:400, height:'auto'}}/></div>

Luego usa tu navegador para ir a la dirección de administración backend: `192.168.4.1`. Aquí es donde configuraremos la red y contraseña que el kit necesita para conectarse.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/4.png" style={{width:1000, height:'auto'}}/></div>

Luego, selecciona el nombre de la red a la que quieres que el kit se conecte. Por favor nota que la red que selecciones necesita estar en la misma LAN que Home Assistant, de lo contrario tu kit no será reconocido por las búsquedas de Home Assistant.

:::caution
Si no puedes encontrar la red a la que quieres conectarte en la página, es probable que el XIAO ESP32C3 no soporte tu red. Por favor ajusta tu router tú mismo para habilitar la máxima compatibilidad y asegúrate de que la red esté en la banda de 2.4GHz. XIAO no soporta redes en la banda de 5GHz.
:::

Ingresa la contraseña WiFi correcta y haz clic en Guardar. El dispositivo se reiniciará automáticamente e intentará conectarse a la red que configuraste. No necesitas permanecer en esta página, puedes cerrarla ahora.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/5.png" style={{width:600, height:'auto'}}/></div>

### Paso 3. Agregar tu dispositivo a Home Assistant

Si la conexión de red va bien, podrás encontrar tu dispositivo en Home Assistant. Por favor sigue la ruta a continuación para agregar tu dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/41.png" style={{width:500, height:'auto'}}/></div>

Haz clic en **Settings** en la barra de menú y selecciona **Devices & services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/42.png" style={{width:1000, height:'auto'}}/></div>

Deberías ver el dispositivo aparecer en la sección **Discovered**, haz clic en el botón **CONFIGURE**. Selecciona **SUBMIT** en la ventana que aparece después y configura la región para usar el dispositivo normalmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/43.png" style={{width:1000, height:'auto'}}/></div>

El kit fue entonces agregado exitosamente a Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/44.png" style={{width:1000, height:'auto'}}/></div>

:::note
Si tienes demasiados dispositivos en tu hogar, hay cierta probabilidad de que tu dispositivo no sea encontrado en Discovered. Entonces, por favor obtén la dirección IP del kit desde la consola de tu router, haz clic en el botón **Add Integration** en la esquina inferior derecha, e ingresa manualmente la dirección IP para agregar el dispositivo.
:::

### Paso 4. Agregar componentes al panel de control

Luego, hacemos clic en la tarjeta **ESPHome** añadida, **1 device** aquí.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/45.png" style={{width:1000, height:'auto'}}/></div>

Esto mostrará todo el contenido de componentes que hemos escrito para el kit. Desplacemos ligeramente hacia abajo el área de visualización para añadir todos estos componentes al panel de control.

:::caution
Si no encuentras los componentes mostrados bajo esta página, verifica la fuente de alimentación del kit y los registros. Si estás usando la función de computadora, algunas computadoras pueden no tener puertos USB que proporcionen suficiente soporte de energía. Si te aseguras de que no hay problema con la fuente de alimentación, por favor abre los registros y envía los registros detallados de vuelta al soporte técnico de Seeed Studio.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/46.png" style={{width:1000, height:'auto'}}/></div>

Entonces podemos ver toda la información y contenido en **Overview**.

### Paso 5. Editar Panel de Control

Actualmente, el orden de visualización del componente del panel de control es automático, lo cual puede no ser propicio para observar y realizar operaciones de configuración, así que a continuación necesitamos editar el panel de control para hacer que su visualización sea más acorde con su función.

En Overview, haz clic en los tres puntos con los triángulos y luego haz clic en **Edit Dashboard**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/12.png" style={{width:1000, height:'auto'}}/></div>

En la página de Edición, haz clic en los tres puntos en la esquina superior derecha nuevamente para seleccionar el **Raw Configuration Editor**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/13.png" style={{width:1000, height:'auto'}}/></div>

Entonces por favor borra el código en el editor original, copia el código de abajo y guárdalo.

:::tip
El nuevo firmware ha sido revisado de acuerdo con la documentación proporcionada por ESPHome y cada dispositivo tiene un nombre MAC único. Así que los nombres de los componentes no serán los mismos. Si quieres usar el código de abajo, por favor reemplaza todos los `{$DEVICE}` en el código con el nombre de tu dispositivo. El nombre de tu dispositivo se puede ver en la entidad del dispositivo en ESPHome.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/47.png" style={{width:1000, height:'auto'}}/></div>
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1-card.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<details>

<summary>Haz clic aquí para previsualizar el código completo</summary>

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

Luego haz clic en **DONE**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/15.png" style={{width:1000, height:'auto'}}/></div>

Se configura una interfaz de panel completamente nueva.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/48.png" style={{width:1000, height:'auto'}}/></div>

¡Felicidades, en este punto has completado todo el acceso del kit a Home Assistant!

## Detalles de Operación del Panel

Para ayudarte a entender rápidamente las capacidades completas del conjunto y el uso de estas características, necesitas leer esta sección cuidadosamente. Si quieres información más detallada, te recomendamos que te tomes el tiempo de leer el [manual de usuario del producto](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf).

Para detalles sobre la configuración y parámetros del panel, hemos compilado un escrito detallado en la documentación de ESPHome, así que por favor dirígete a leer el escrito completo y los detalles.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://esphome.io/components/seeed_mr24hpc1.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Documentación de ESPHome 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

## Desarrollo secundario personalizado

Si necesitas reemplazar el radar o instalar el módulo Grove, puedes referirte a las imágenes en movimiento a continuación para hacerlo. Los cuatro tornillos de la carcasa están en la parte posterior del producto, retíralos y luego golpea suavemente para quitar la cubierta frontal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/24.gif" style={{width:650, height:'auto'}}/></div>

Si quieres instalar el módulo Grove, puedes referirte a la imagen a continuación para instalarlo. Recomendamos que el conector Grove mire hacia afuera y el cable Grove esté oculto debajo del módulo Grove.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/25.gif" style={{width:650, height:'auto'}}/></div>

:::note
Además de la instalación de módulos, la instalación de kits requiere atención especial. La posición de instalación del kit afectará directamente la precisión del monitoreo, por favor consulta las instrucciones relevantes en la **[Hoja de Datos](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)** para la instalación.
:::

Este kit está principalmente orientado hacia la dirección del hogar inteligente, el desarrollo secundario del contenido no entraremos en demasiado detalle, pero proporcionaremos la información de desarrollo secundario y el contenido que puedas necesitar, por favor consulta.

- Wiki sobre el módulo MR24HPC1 integrado: [Sensor mmWave de 24GHz - Módulo Lite de Presencia Estática Humana (MR24HPC1)](https://wiki.seeedstudio.com/es/Radar_MR24HPC1)

- Materiales de desarrollo del XIAO ESP32C3 integrado y Wiki práctico: [Comenzando con Seeed Studio XIAO ESP32C3](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/)

### Desarrollo secundario para ESPHome

Todo el código del kit es actualmente de código abierto. Si tienes necesidad de desarrollar para ESPHome, puedes usar el código de componentes externos.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Para el uso de este marco de código, puedes referirte al archivo [**mr24hpc1.yaml**](https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml) bajo la carpeta de ejemplos en el proyecto. Este archivo es un archivo yaml de ejemplo para ESPHome.

Si no tienes experiencia previa con ESPHome antes de esto, puedes leer [**este Wiki**](https://wiki.seeedstudio.com/es/xiao-esp32c3-esphome/) para aprender a usarlo.

## Actualizaciones de Software con OTA de ESPHome

Cuando se diseñó el producto, queríamos que fuera un dispositivo de monitoreo continuamente alimentado y fijo en una ubicación. Al mismo tiempo, continuaremos actualizando y manteniendo su software, y visualizamos una situación donde no necesitamos cambiar su ubicación, y puedes implementar actualizaciones OTA a través de la LAN.

<iframe class="youtube-video-r" src="https://files.seeedstudio.com/wiki/mmwave_kit/ota.mp4" frameborder="0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

Por favor haz clic en la pantalla principal de ESPHome.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **NEW DEVICE**. Luego haz clic en **Continue**.

Bajo la nueva ventana emergente, por favor ingresa el nombre de la aplicación que deseas configurar, así como el nombre y contraseña del WiFi. Asegúrate de que el kit y Home Assistant estén en la **misma LAN**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/22.png" style={{width:450, height:'auto'}}/></div>

Luego haz clic en **Next**. En el tipo de dispositivo, por favor selecciona **ESP32-C3**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" style={{width:450, height:'auto'}}/></div>

Luego haz clic en **Next**. Después haz clic en **SKIP**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" style={{width:1000, height:'auto'}}/></div>

Actualizaremos nuestro programa en el proyecto de Github, una vez que el programa sea actualizado, puedes simplemente copiar todo el contenido y sobrescribir el archivo yaml generado. También se pueden hacer cambios a esto.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/blob/main/example/mr24hpc1.yaml" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Finalmente, solo selecciona **Wireless** para subir el programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/23.png" style={{width:500, height:'auto'}}/></div>

## Restaurar Firmware de Fábrica

### Método 1: Flashear rápidamente el firmware más reciente

Si estás usando el kit y encuentras inconsistencias con los pasos y contenido anteriores, por favor actualiza el firmware del kit en la siguiente página para restaurar la configuración de fábrica.

**Paso 1.** Haz clic en el botón de abajo para ir a la página de Flash Firmware. Luego conecta el kit a tu computadora mediante un cable USB-C.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://limengdu.github.io/MR24HPC1_ESPHome_external_components/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Flash the Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Paso 2.** Haz clic en el botón Connect y selecciona el dispositivo del número de puerto que tenga un nombre **JTAG**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/50.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3.** Flash Firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/32.png" style={{width:500, height:'auto'}}/></div>

Simplemente haz clic en **INSTALL SEEED STUDIO MMWAVE KIT**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/33.png" style={{width:500, height:'auto'}}/></div>

Si ves la pantalla de abajo, entonces el flasheo del firmware está completo. En este punto puede que necesites volver a encender para que el programa se ejecute. Después de completar la grabación del firmware, necesitarás configurar la red desde cero.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/34.png" style={{width:500, height:'auto'}}/></div>

### Método 2: Flashear firmware con la ayuda de la herramienta ESPHome

Si estás experimentando problemas con tu dispositivo que no funciona correctamente, intenta restaurar el firmware de fábrica y volver a agregar el dispositivo a Home Assistant.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/mmwave-kit-external-components/releases/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

- Opción 1: usando la [herramienta web ESPhome](https://web.esphome.io/?dashboard_install) para cargar.

Abre la [herramienta web ESPhome](https://web.esphome.io/?dashboard_install) con el navegador web Chrome o Edge.

Haz clic en **CONNECT**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

selecciona el puerto serie del XIAO ESP32 en la ventana emergente.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

Haz clic en **INSTALL** y luego selecciona el archivo `.bin` descargado de los pasos anteriores.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- Opción 2: Usando la [herramienta esphome-flasher](https://github.com/esphome/esphome-flasher).

Si aún no puedes cargar el firmware usando el método uno después de instalar el controlador y cambiar navegadores, entonces puedes intentar usar el método dos. Por favor consulta el tutorial oficial para métodos de instalación específicos e instrucciones.

:::tip
Si deseas observar los mensajes de registro del XIAO ESP32C3, también puedes verlos a través del botón View Logs de este software.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

Una vez que el firmware se haya cargado exitosamente, podrás ver la red llamada **seeedstudio-mr24hpc1**. Por favor consulta el contenido de [Tres minutos para comenzar con ESPHome](#three-minutes-to-get-started-esphome) para reconfigurar el dispositivo.

## Recursos

- **[GITHUB]** [Proyecto de código abierto](https://github.com/limengdu/mmwave-kit-external-components)
- **[PDF]** [Plantilla de configuración rápida](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_Quick_Setup_Template-V1.0.pdf)
- **[PDF]** [Hoja de datos](https://files.seeedstudio.com/wiki/mmWave-radar/24GHz_mmWave_Sensor-Human_Static_Presence_Module_Lite_Datasheet.pdf)
- **[PDF]** [Manual del usuario](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)

### Versión 1

- **[ZIP]** [Archivos PCB&SCH EAGLE](https://files.seeedstudio.com/wiki/mmwave_kit/mmWare-kit_sch&pcb.zip)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/mmwave_kit/sch_mmware_kit.pdf)

### Versión 2

- **[ZIP]** [Archivos PCB&SCH EAGLE](https://files.seeedstudio.com/wiki/mmwave_kit/Human_Detection_Sensor_Board_V2.zip)
- **[PDF]** [SCH](https://files.seeedstudio.com/wiki/mmwave_kit/mmwave_kit_sch_V2.pdf)

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
