---
title: Módulo de Relé Wi‑Fi de 6 Canales en Home Assistant
description: |
  Un dispositivo inteligente de Seeed Studio diseñado para controlar de forma inalámbrica dispositivos con voltaje seguro de CC.
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp
slug: /6_channel_wifi_relay
sku: 114993588
keywords:
  - XIAO
  - Home Assistant
  - Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Cody
  date: 07/06/2026
createdAt: '2025-01-04'
updatedAt: '2026-07-06'
url: https://wiki.seeedstudio.com/es/6_channel_wifi_relay/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introducción al Módulo de Relé Wi‑Fi de 6 Canales en Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp" style={{width:640, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6-Channel-Wi-Fi-5V-DC-Relay-p-6373.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Descripción general

El **[Módulo de Relé Wi‑Fi de 6 Canales](https://www.seeedstudio.com/)** es un dispositivo inteligente de Seeed Studio diseñado para el control dentro de un rango seguro de voltaje de CC, no para electrodomésticos alimentados por CA. Su configuración de seis canales admite el control independiente de hasta seis cargas, lo que lo convierte en una excelente opción para automatizar una variedad de dispositivos en entornos de hogar inteligente.

Además de sus seis canales de relé, este módulo también incorpora dos interfaces de expansión Grove adicionales, lo que permite a los usuarios integrar sensores o actuadores adicionales para escenarios de automatización más avanzados.

Esta guía ofrece un recorrido detallado, que incluye la configuración, la integración y la configuración avanzada para usuarios que van desde principiantes hasta entusiastas del hogar inteligente.

### Características clave y especificaciones

<div class="table-center">
<table align="center">
    <thead>
        <tr>
            <th>Característica</th>
            <th>Detalles</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Voltaje de entrada</th>
            <td>DC 5V(For XIAO)</td>
        </tr>
        <tr>
            <th>Resistencia al voltaje de CC</th>
            <td>DC 0~30V</td>
        </tr>
        <tr>
            <th>Carga máxima</th>
            <td>10A por canal</td>
        </tr>
        <tr>
            <th>Canales</th>
            <td>6 (control independiente para cada canal)</td>
        </tr>
        <tr>
            <th>Tipo de conexión</th>
            <td>Wi‑Fi</td>
        </tr>
        <tr>
            <th>Puerto eléctrico</th>
            <td>NO (Normalmente abierto), COM (Común), NC (Normalmente cerrado)</td>
        </tr>
        <tr>
            <th>Extensión Grove</th>
            <td>IIC×1, UART×1</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Advertencia de seguridad

Este módulo de relé está diseñado para funcionar con CC de bajo voltaje. No lo conectes a alimentación de CA para evitar riesgos eléctricos. Desconecta siempre la fuente de alimentación antes de cablear el relé para evitar cortocircuitos y descargas eléctricas.

Los voltajes superiores a 24 V pueden causar descargas eléctricas o quemaduras, especialmente en casos de piel dañada o en entornos húmedos. Ten cuidado al manipular dispositivos eléctricos para evitar lesiones.

:::

### Distribución física y conexiones

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/simplified_diagram_with_con.png" style={{width: 600, height: 'auto'}}/></div>

- **NO (Normally Open)**: El terminal normalmente abierto. De forma predeterminada, este terminal no está conectado al terminal común (COM). Cuando se activa el relé, el terminal NO se conecta al terminal COM. Se utiliza normalmente para controlar el interruptor de una carga.
- **COM (Common)**: El terminal común del relé, compartido como punto de conexión a un lado del circuito.
- **NC (Normally Closed)**: El terminal normalmente cerrado. De forma predeterminada, este terminal está conectado al terminal común (COM). Cuando se activa el relé, se interrumpe la conexión entre el terminal NC y el terminal COM. Se utiliza normalmente para escenarios que requieren control de desconexión.

   | XIAO GPIO | Canal de relé |
   | --------- | ------------- |
   | GPIO2     | Relé 1        |
   | GPIO21    | Relé 2        |
   | GPIO1     | Relé 3        |
   | GPIO0     | Relé 4        |
   | GPIO19    | Relé 5        |
   | GPIO18    | Relé 6        |

## Primeros pasos

### Requisitos

1. **Componentes principales**:
   - [Módulo de Relé Wi‑Fi de 6 Canales](https://www.seeedstudio.com/)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **Red**:
   - Wi‑Fi estable para una interacción fluida entre el hardware y Home Assistant.

### Paso 1: Configurar Home Assistant {#setting-up-home-assistant}

1. **Instalación**: homeassistant ya viene preinstalado en [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html).
2. **Habilitar el complemento ESPHome**:
   - Accede al panel de control de Home Assistant.
   - Ve a la sección "Add-ons" y busca el complemento ESPHome.
   - Haz clic en "Install" y luego en "Start" para habilitarlo.
   - Una vez instalado, configura el complemento para garantizar una comunicación adecuada con el XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Al reunir los componentes necesarios y configurar Home Assistant con el complemento ESPHome, estarás listo para continuar con la integración del módulo de relé de 6 canales.

### Paso 2: Preparar el módulo de relé

De forma predeterminada, tu dispositivo (XIAO ESP32C6) viene pregrabado con el firmware para el relé de 6 canales. Sin embargo, hay dos situaciones en las que puede que necesites actualizar el firmware:

1. **Volver a grabar el firmware**: Si el firmware existente está dañado o necesitas empezar desde cero.
2. **Actualizar el firmware**: Si hay una versión más reciente del firmware con funcionalidades mejoradas.

Hay dos métodos sencillos para grabar el firmware:

:::caution
Firefox no admite la grabación de firmware en dispositivos ESP. Utiliza Google Chrome o Microsoft Edge en su lugar.
:::

<Tabs>
<TabItem value='Web Tool'>

Puedes usar esta [Web Tool](https://seeed-projects.github.io/6-Channel_Relay_based_on_XIAO_ESP32C6/) para un método fácil y directo de grabar tu firmware. Simplemente sigue las instrucciones en pantalla.

- Haz clic en el botón `CONNECT` para iniciar la conexión. La herramienta actualizará el firmware automáticamente.

Si algo sale mal, sigue los pasos de solución de problemas que aparecen en pantalla o cambia al método `ESPHome Web` para completar el proceso.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, tendrás que descargar el archivo de firmware `bin` desde [aquí](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6/releases) (tendrás que descomprimir el archivo descargado).

1. Conecta el kit de sensor a tu PC.
2. Visita la página de [ESPHome Web](https://web.esphome.io/).
3. Selecciona el archivo de firmware con el sufijo `*.factory.bin`.

Mira el siguiente vídeo para un recorrido detallado de cómo grabar el firmware mediante ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

Con cualquiera de los dos métodos, tendrás tu firmware actualizado y listo para la integración con Home Assistant.

### Paso 3: Configuración de red

1. **Habilitar el punto de acceso**:
   - Al encenderlo por primera vez, el módulo creará una red Wi‑Fi (SSID: `seeedstudio-6-channel-relay`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap-from-xiao-esp32c6-seeedstudio-6-channel-relay.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **Acceder a la configuración**:
   - Conéctate a la red usando un teléfono o un PC.
   - Abre un navegador y ve a [http://192.168.4.1](http://192.168.4.1).
   - Introduce el SSID y la contraseña de tu red Wi‑Fi doméstica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Integración con Home Assistant**:
   - Una vez conectado a la red doméstica, el módulo será detectable en Home Assistant en `Settings -> Devices & Services`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

De esta manera, puedes conectar el módulo a tu red de Home Assistant y permitir que Home Assistant lo detecte.

### Paso 4: Añadir el dispositivo del módulo

1. **Detección automática**:
   - Asegúrate de que **ESPHome** esté instalado en Home Assistant.
   - Ve a `Settings -> Devices & Services -> Integrations` y busca el dispositivo.
2. **Configuración manual**:
   - Si no se detecta automáticamente, añade el dispositivo manualmente especificando su dirección IP.

Después de añadir el dispositivo, podrás ver los seis interruptores en la página Overview.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

También puedes establecer el nombre de cada interruptor de forma individual.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview_with_custom_names.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Paso 5: Conectar los electrodomésticos que quieres controlar

:::warning Advertencia de seguridad

Este módulo de relé está diseñado para funcionar con CC de bajo voltaje. No lo conectes a alimentación de CA para evitar riesgos eléctricos. Desconecta siempre la fuente de alimentación antes de cablear el relé para evitar cortocircuitos y descargas eléctricas.

Los voltajes superiores a 24 V pueden causar descargas eléctricas o quemaduras, especialmente en casos de piel dañada o en entornos húmedos. Ten cuidado al manipular dispositivos eléctricos para evitar lesiones.

:::

1. Cableado:
    - Sigue la sección de Diseño físico y conexiones para cablear el módulo de relé.
    - Asegúrate de que todas las conexiones estén seguras y que no haya cables expuestos.
2. Encendido:
    - Enciende el módulo a través de USB.
    - Enciende la fuente de alimentación de CC para controlar otros aparatos eléctricos.

## Seguridad y mantenimiento

1. Inspecciona periódicamente el cableado para detectar desgaste y daños.
2. Utiliza dispositivos de protección de circuito adecuados, como fusibles o disyuntores.
3. Mantén el dispositivo alejado del agua y del calor excesivo.

## Preguntas frecuentes

1. **¿Qué ocurre si el dispositivo se desconecta de la red Wi‑Fi?**
   - El módulo intentará reconectarse automáticamente. Si falla, habilitará su punto de acceso de respaldo para volver a configurarlo.
2. **¿Puedo usar el puerto USB mientras está conectado a la alimentación de CA?**
   - No, usar USB mientras está conectado a la alimentación de CA puede dañar el dispositivo o crear un riesgo para la seguridad.
3. **¿Puede funcionar este módulo sin Home Assistant?**
   - Sí, el módulo se puede controlar a través de su **dirección IP local** o integrarse con otras plataformas que admitan ESPHome o MQTT.

## Recursos

- **Repositorio de GitHub**: Accede al firmware de ESPHome en la [página de GitHub del módulo de relé de 6 canales de Seeed Studio](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6).
- **📄[Schematic]** [ Esquemático del módulo de relé Wi‑Fi de 6 canales](https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/202004205_PCBA;6-Channel-Wi-Fi-5V-DC-Relay_SCH_PDF.pdf)
- **🗃️[PCB Design Files]** [ Proyecto KiCad del módulo de relé Wi‑Fi de 6 canales](https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/202004205_PCBA;6-Channel-Wi-Fi-5V-DC-Relay-SCH.zip)

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
