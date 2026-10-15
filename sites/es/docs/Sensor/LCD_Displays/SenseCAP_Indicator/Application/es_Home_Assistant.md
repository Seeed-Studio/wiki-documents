---
description: Conecta SenseCAP Indicator a Home Assistant mediante MQTT
title: Home Assistant - SenseCAP Indicator
keywords:
  - SenseCAP Indicator
  - Home Assistant
  - MQTT
  - ESP32S3
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-ha-thumbnail.jpg
slug: /SenseCAP_Indicator_Application_Home_Assistant
sku: E23010426,E24121301
sidebar_position: 1
last_update:
  date: 05/29/2026
  author: Spencer
createdAt: '2023-05-24'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/es/SenseCAP_Indicator_Application_Home_Assistant/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Indicator con Home Assistant mediante MQTT

Esta guía muestra cómo convertir el SenseCAP Indicator en un panel complementario de Home Assistant. Después de la configuración, el Indicator publica las lecturas de sus sensores integrados en Home Assistant a través de MQTT, y Home Assistant puede enviar comandos de interruptores y deslizadores de vuelta a la pantalla del Indicator.

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/PKMcutZDjDg" title="SenseCAP Indicator Home Assistant demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
        Consigue uno ahora
</a>
</div>

## Lo que vas a construir

La integración utiliza tres temas MQTT fijos:

| Dirección | Tema | Propósito |
| --- | --- | --- |
| Indicator a Home Assistant | `indicator/sensor` | Publica lecturas de temperatura, humedad, CO2 y tVOC |
| Home Assistant a Indicator | `indicator/switch/set` | Envía comandos de interruptores y deslizadores |
| Indicator a Home Assistant | `indicator/switch/state` | Publica el estado actual de los interruptores y deslizadores |

En el lado de Home Assistant, crearás cuatro entidades de sensor, seis entidades de interruptor y dos entidades de número. En el lado del Indicator, configurarás el Wi‑Fi y el broker MQTT, y luego usarás la pantalla como un panel de control local.

## Requisitos previos

- SenseCAP Indicator D1 o hardware SenseCAP Indicator compatible
- Una instancia de Home Assistant en ejecución
- Un broker MQTT accesible tanto desde Home Assistant como desde el Indicator
- ESP-IDF v5.4.x instalado si planeas compilar el firmware desde el código fuente
- Un cable USB para flasheo y monitorización serie

Antes de continuar, lee la [guía de usuario de SenseCAP Indicator](/es/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) si no estás familiarizado con la placa.

## 1. Preparar Home Assistant

Si ya tienes Home Assistant y un broker MQTT, puedes saltar a [Paso 3: Compilar y flashear el firmware](#3-compilar-y-flashear-el-firmware).

Home Assistant OS es el camino más sencillo porque admite Add-ons, incluidos el broker Mosquitto y el File editor.

:::note
Home Assistant puede ejecutarse en varios modos de instalación. Si usas Home Assistant Container, los Add-ons no están disponibles, por lo que necesitas ejecutar por separado un broker MQTT como Mosquitto o EMQX.
:::

<Tabs>
<TabItem value="Home Assistant Green" label="Home Assistant Green">

<div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA/HA_Green.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

[Home Assistant Green](https://www.home-assistant.io/green) es una forma plug-and-play de empezar a usar Home Assistant.

</TabItem>
<TabItem value="Home Assistant Yellow" label="Home Assistant Yellow">

<div align="center"><img width={680} src="https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

[Home Assistant Yellow](https://www.home-assistant.io/yellow) es un hub de Home Assistant basado en Raspberry Pi Compute Module 4.

</TabItem>
</Tabs>

Sigue la [guía de instalación oficial de Home Assistant](https://www.home-assistant.io/installation/) para tu dispositivo. Cuando completes la incorporación, deberías llegar al panel de Home Assistant.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"/></div>

## 2. Instalar Mosquitto y habilitar MQTT

### Instalar Add-ons

En Home Assistant OS, instala dos Add-ons:

- **Mosquitto broker** para mensajería MQTT
- **File editor** para editar `configuration.yaml` desde la interfaz web de Home Assistant

Ve a **Settings** > **Add-ons** > **Add-on Store**, y luego instala ambos Add-ons.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Setting.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Add-ons.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Press_Add.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add-on_Store.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

Para mayor comodidad, habilita **Show in sidebar** para File editor.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"/></div>

Después de la instalación, deberías ver ambos Add-ons.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"/></div>

### Habilitar la integración MQTT

Ve a **Settings** > **Devices & services** > **Integrations**, busca **MQTT** y sigue el flujo de configuración.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
Si Home Assistant no detecta tu broker automáticamente, introduce manualmente la dirección del broker. Esto es común cuando usas un broker externo en lugar del Add-on Mosquitto.
:::

### Crear credenciales MQTT

Si tu broker MQTT requiere autenticación, crea un nombre de usuario y una contraseña para el Indicator. En el Add-on Mosquitto broker, añade un usuario y guarda las credenciales cerca; las introducirás en el Indicator más tarde.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png" style={{width:480, height:'auto'}} alt="Add User Button"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png" style={{width:480, height:'auto'}} alt="Create User Form"/></div></td>
    </tr>
  </table>
</div>

## 3. Compilar y flashear el firmware

El firmware actual para Home Assistant se mantiene en el repositorio `sensecap-indicator-ha`.

```bash
git clone https://github.com/Love4yzp/sensecap-indicator-ha
cd sensecap-indicator-ha
```

Instala ESP-IDF v5.4.x y exporta `IDF_PATH` en tu shell. Luego compila, flashea y abre el monitor serie:

```bash
./dev build
./dev flash
./dev monitor
```

Para salir del monitor serie, pulsa `Ctrl-]`.

:::tip
`./dev flash` detecta automáticamente el puerto serie. Si necesitas especificar un puerto, ejecuta `./dev flash -p /dev/ttyUSB0` o usa el nombre de dispositivo serie correspondiente a tu sistema operativo.
:::

<details>
<summary>Comandos manuales de ESP-IDF</summary>

Si prefieres llamar a ESP-IDF directamente:

```bash
. "$IDF_PATH/export.sh"
idf.py build
idf.py -p /dev/ttyUSB0 -b 460800 flash monitor
```

El firmware para ESP32-S3 usa ESP-IDF v5.4.x y LVGL 9. Mantén la configuración del proyecto en `sdkconfig.defaults`, especialmente `CONFIG_LV_MEM_CUSTOM=y`, PSRAM a 120 MHz en modo OCT, CPU a 240 MHz y flash QIO a 120 MHz.

</details>

## 4. Configurar Wi‑Fi y MQTT en el Indicator

Después de flashear, configura Wi‑Fi y MQTT en la pantalla táctil del Indicator. La dirección del broker MQTT debe apuntar al broker usado por Home Assistant.

También puedes configurar MQTT desde la consola serie:

| Comando | Descripción |
| --- | --- |
| `mqtthelp` | Imprime ejemplos de broker, temas y payload |
| `haconfig` | Imprime la configuración actual de MQTT y Home Assistant |
| `setmqtt -a <addr>` | Establece la dirección del broker |
| `setmqtt -a <addr> -c <client-id> -u <user> -p <pass>` | Establece la dirección del broker, el ID de cliente, el nombre de usuario y la contraseña |

Ejemplos:

```text
setmqtt -a 192.168.1.10 -c indicator-01 -u mqtt_user -p mqtt_password
setmqtt --addr mqtt://192.168.1.10:1883
setmqtt --addr mqtt://broker.emqx.io
```

Después de que `setmqtt` se ejecute correctamente, la configuración se guarda en el almacenamiento no volátil y el cliente MQTT se reinicia automáticamente.

:::caution
El Indicator y Home Assistant deben poder acceder al mismo broker MQTT. Si están en redes o VLAN diferentes, revisa el enrutamiento, las reglas de firewall y la configuración de los listeners del broker.
:::

## 5. Añadir entidades MQTT a Home Assistant

Home Assistant necesita definiciones de entidades que coincidan con los temas del firmware. Abre **File editor**, elige `configuration.yaml` y añade el siguiente bloque bajo la clave de nivel superior `mqtt:`.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::caution
No reemplaces todo tu `configuration.yaml`. Si ya tienes una sección `mqtt:`, añade las entradas `sensor`, `switch` y `number` dentro de esa sección existente.
:::

<details>
<summary>YAML de entidades MQTT</summary>

```yaml
mqtt:
  sensor:
    - unique_id: indicator_temperature
      name: "Indicator Temperature"
      state_topic: "indicator/sensor"
      suggested_display_precision: 1
      unit_of_measurement: "°C"
      value_template: "{{ value_json.temp }}"
    - unique_id: indicator_humidity
      name: "Indicator Humidity"
      state_topic: "indicator/sensor"
      unit_of_measurement: "%"
      value_template: "{{ value_json.humidity }}"
    - unique_id: indicator_co2
      name: "Indicator CO2"
      state_topic: "indicator/sensor"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.co2 }}"
    - unique_id: indicator_tvoc
      name: "Indicator tVOC"
      state_topic: "indicator/sensor"
      unit_of_measurement: ""
      value_template: "{{ value_json.tvoc }}"
  switch:
    - unique_id: indicator_switch1
      name: "Indicator Switch1"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch1 }}"
      payload_on: '{"switch1":1}'
      payload_off: '{"switch1":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch2
      name: "Indicator Switch2"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch2 }}"
      payload_on: '{"switch2":1}'
      payload_off: '{"switch2":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch3
      name: "Indicator Switch3"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch3 }}"
      payload_on: '{"switch3":1}'
      payload_off: '{"switch3":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch4
      name: "Indicator Switch4"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch4 }}"
      payload_on: '{"switch4":1}'
      payload_off: '{"switch4":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch6
      name: "Indicator Switch6"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch6 }}"
      payload_on: '{"switch6":1}'
      payload_off: '{"switch6":0}'
      state_on: 1
      state_off: 0
    - unique_id: indicator_switch7
      name: "Indicator Switch7"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      value_template: "{{ value_json.switch7 }}"
      payload_on: '{"switch7":1}'
      payload_off: '{"switch7":0}'
      state_on: 1
      state_off: 0
  number:
    - unique_id: indicator_switch5
      name: "Indicator Switch5"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch5": {{ value }} }'
      value_template: "{{ value_json.switch5 }}"
    - unique_id: indicator_switch8
      name: "Indicator Switch8"
      state_topic: "indicator/switch/state"
      command_topic: "indicator/switch/set"
      command_template: '{"switch8": {{ value }} }'
      value_template: "{{ value_json.switch8 }}"
```

</details>

Guarda el archivo, luego ve a **Developer Tools** > **YAML** y vuelve a cargar la configuración YAML.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png" alt="Configuración YAML en Developer Tools"/></div>

:::tip
Si las entidades no aparecen, usa primero **Check configuration**. Si la configuración es válida pero las entidades aún no aparecen, reinicia Home Assistant y confirma que el Indicator está publicando en `indicator/sensor`.
:::

## 6. Crear un panel

Puedes añadir las nuevas entidades a cualquier panel. Para mantener el Indicator separado, crea un panel dedicado desde **Settings** > **Dashboards**.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png" style={{width:480, height:'auto'}} alt="Crear panel"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png" style={{width:480, height:'auto'}} alt="Nuevo panel"/></div></td>
    </tr>
  </table>
</div>

Abre el panel, elige **Edit Dashboard** y luego usa el **Raw configuration editor**.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png" style={{width:480, height:'auto'}} alt="Editar panel"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png" style={{width:480, height:'auto'}} alt="Tomar control"/></div></td>
    </tr>
  </table>
</div>

<details>
<summary>YAML del panel</summary>

:::caution
Este YAML es para el editor de configuración en bruto del panel Lovelace. No lo pegues en `configuration.yaml`.
:::

```yaml
views:
  - title: Indicator device
    icon: ''
    badges: []
    cards:
      - graph: line
        type: sensor
        detail: 1
        icon: mdi:molecule-co2
        unit: ppm
        entity: sensor.indicator_co2
      - graph: line
        type: sensor
        entity: sensor.indicator_temperature
        detail: 1
        icon: mdi:coolant-temperature
      - graph: line
        type: sensor
        detail: 1
        entity: sensor.indicator_humidity
      - graph: line
        type: sensor
        entity: sensor.indicator_tvoc
        detail: 1
        icon: mdi:air-filter
      - type: entities
        entities:
          - entity: switch.indicator_switch1
          - entity: switch.indicator_switch2
          - entity: switch.indicator_switch3
          - entity: switch.indicator_switch4
          - entity: number.indicator_switch5
          - entity: switch.indicator_switch6
          - entity: switch.indicator_switch7
          - entity: number.indicator_switch8
        title: Indicator control
        show_header_toggle: false
        state_color: true
```

</details>

Guarda la configuración del panel.

<div class="table-center">
   <table align="center">
      <tr>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png" style={{width:480, height:'auto'}} alt="Editor de configuración en bruto"/></div>
         </td>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png" style={{width:480, height:'auto'}} alt="Guardar configuración"/></div>
         </td>
      </tr>
   </table>
</div>

Ahora deberías ver las lecturas de los sensores y los controles del Indicator en Home Assistant.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"/></div>

## Referencia del protocolo MQTT

Usa esta sección cuando quieras depurar el tráfico MQTT o crear tus propias tarjetas de Home Assistant.

| Tema | Ejemplo de carga útil |
| --- | --- |
| `indicator/sensor` | `{"temp":"23.5","humidity":"45","co2":"450","tvoc":"100"}` |
| `indicator/switch/set` | `{"switch1":1,"switch5":50}` |
| `indicator/switch/state` | `{"switch1":1,"switch2":0}` |

Claves de sensor:

| Clave | Significado |
| --- | --- |
| `temp` | Temperatura |
| `humidity` | Humedad relativa |
| `co2` | Concentración de CO2 |
| `tvoc` | Compuestos orgánicos volátiles totales |

Claves de control:

| Clave | Tipo de entidad en Home Assistant | Rango |
| --- | --- | --- |
| `switch1` a `switch4`, `switch6`, `switch7` | `switch` | `0` o `1` |
| `switch5`, `switch8` | `number` | Valor entero |

## Solución de problemas

| Síntoma | Qué comprobar |
| --- | --- |
| Home Assistant no muestra entidades | Confirma que el YAML se añadió bajo `mqtt:`, luego vuelve a cargar el YAML o reinicia Home Assistant |
| Los valores del sensor permanecen desconocidos | Confirma que el Indicator está conectado a Wi-Fi y publicando en `indicator/sensor` |
| Los controles no actualizan el Indicator | Confirma que Home Assistant publica en `indicator/switch/set` y que el Indicator está conectado al mismo broker |
| Error de inicio de sesión MQTT | Vuelve a introducir la dirección del broker, el nombre de usuario y la contraseña en el Indicator o con `setmqtt` |
| El comando serie no está claro | Ejecuta `mqtthelp` en la consola serie |

## Para desarrolladores

El firmware utiliza un diseño de doble MCU:

| MCU | Función |
| --- | --- |
| ESP32-S3 | Pantalla, táctil, Wi-Fi, MQTT, lógica de Home Assistant, ajustes y consola |
| RP2040 | Adquisición de sensores integrados y Grove, retransmitida al ESP32-S3 por UART |

El firmware del ESP32-S3 está construido con ESP-IDF v5.4.x y LVGL 9. Los dominios de ejecución se organizan como segmentos modelo/vista: el código del modelo posee el estado, NVS, MQTT y el análisis de sensores; el código de la vista posee los objetos LVGL y las devoluciones de llamada de la pantalla táctil.

Comandos útiles para desarrolladores:

```bash
python3 scripts/dev_check.py --skip-build
python3 scripts/dev_check.py
./dev build
```

El simulador de PC puede ayudar al iterar sobre el diseño de la interfaz de usuario sin flashear el hardware:

```bash
cmake -S sim -B sim/build && cmake --build sim/build -j4
./sim/build/sensecap_sim
```

## Recursos

- [Repositorio de firmware sensecap-indicator-ha](https://github.com/Love4yzp/sensecap-indicator-ha)
- [Guía de usuario de SenseCAP Indicator](/es/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator)
- [Guía de instalación de Home Assistant](https://www.home-assistant.io/installation/)
- [Integración MQTT de Home Assistant](https://www.home-assistant.io/integrations/mqtt)
- [Guía de inicio de ESP-IDF v5.4](https://docs.espressif.com/projects/esp-idf/en/v5.4/esp32s3/get-started/)
- [SDK y ejemplos de SenseCAP Indicator](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)

## Soporte técnico

¿Necesitas ayuda con tu SenseCAP Indicator? Visita el [canal oficial de Discord de Seeed](https://discord.gg/kpY74apCWj) o inicia un debate en las [discusiones de GitHub del SDK de SenseCAP Indicator](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions).
