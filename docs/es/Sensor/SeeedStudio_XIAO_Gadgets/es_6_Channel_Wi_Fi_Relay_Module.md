---
title: Módulo de Relé Wi-Fi de 6 Canales en Home Assistant
description: |
  Un dispositivo inteligente de Seeed Studio diseñado para controlar dispositivos de forma inalámbrica con voltaje DC seguro.
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp
slug: /es/6_channel_wifi_relay
keywords:
  - XIAO
  - Home Assistant
  - Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Cody
  date: 01/04/2025
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeros pasos con el Módulo de Relé Wi-Fi de 6 Canales en Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp" style={{width:640, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6-Channel-Wi-Fi-5V-DC-Relay-p-6373.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Descripción General

El **[Módulo de Relé Wi-Fi de 6 Canales](https://www.seeedstudio.com/)** es un dispositivo inteligente de Seeed Studio diseñado para control dentro de un rango de voltaje DC seguro, no para electrodomésticos alimentados con AC. Su configuración de seis canales soporta control independiente de hasta seis cargas, convirtiéndolo en una excelente opción para automatizar una variedad de dispositivos en entornos de hogar inteligente.

Además de sus seis canales de relé, este módulo también cuenta con dos interfaces de expansión Grove adicionales, permitiendo a los usuarios integrar sensores o actuadores adicionales para escenarios de automatización más avanzados.

Esta guía proporciona un recorrido detallado, incluyendo configuración, integración y configuración avanzada para usuarios que van desde principiantes hasta entusiastas del hogar inteligente.

### Características Clave y Especificaciones

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
            <th>Voltaje de Entrada</th>
            <td>DC 5V(Para XIAO)</td>
        </tr>
        <tr>
            <th>Voltaje de resistencia DC</th>
            <td>DC 0~30V</td>
        </tr>
        <tr>
            <th>Carga Máxima</th>
            <td>10A por canal</td>
        </tr>
        <tr>
            <th>Canales</th>
            <td>6 (control independiente para cada canal)</td>
        </tr>
        <tr>
            <th>Tipo de Conexión</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>Puerto eléctrico</th>
            <td>NO (Normalmente Abierto), COM (Común), NC (Normalmente Cerrado)</td>
        </tr>
        <tr>
            <th>Extensión Grove</th>
            <td>IIC×1, UART×1</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Advertencia de Seguridad

Este módulo de relé está diseñado para operación DC de bajo voltaje. No lo conecte a alimentación AC para evitar riesgos eléctricos. Siempre desconecte la fuente de alimentación antes de cablear el relé para prevenir cortocircuitos y descargas eléctricas.

Los voltajes que excedan 24V pueden causar descargas eléctricas o quemaduras, especialmente en casos de piel dañada o en ambientes húmedos. Tenga precaución al manipular dispositivos eléctricos para evitar lesiones.

:::

### Diseño Físico y Conexiones

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/simplified_diagram_with_con.png" style={{width: 600, height: 'auto'}}/></div>

- **NO (Normalmente Abierto)**: El terminal normalmente abierto. Por defecto, este terminal no está conectado al terminal común (COM). Cuando el relé se activa, el terminal NO se conecta al terminal COM. Se usa típicamente para controlar el interruptor de una carga.
- **COM (Común)**: El terminal común del relé, compartido como punto de conexión a un lado del circuito.
- **NC (Normalmente Cerrado)**: El terminal normalmente cerrado. Por defecto, este terminal está conectado al terminal común (COM). Cuando el relé se activa, la conexión entre el terminal NC y el terminal COM se rompe. Se usa típicamente para escenarios que requieren control de desconexión.

   | XIAO GPIO | Canal de Relé |
   | --------- | ------------- |
   | GPIO2     | Relé 1        |
   | GPIO21    | Relé 2        |
   | GPIO1     | Relé 3        |
   | GPIO0     | Relé 4        |
   | GPIO19    | Relé 5        |
   | GPIO18    | Relé 6        |

## Primeros Pasos

### Requisitos

1. **Componentes Principales**:
   - [Módulo de Relé Wi-Fi de 6 Canales](https://www.seeedstudio.com/)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **Red**:
   - Wi-Fi estable para interacción fluida entre hardware y Home Assistant.

### Paso 1: Configurando Home Assistant {#setting-up-home-assistant}

1. **Instalación**: homeassistant ya está preinstalado en [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html).
2. **Habilitando el Complemento ESPHome**:
   - Acceda al panel de Home Assistant.
   - Navegue a la sección "Add-ons" y busque el complemento ESPHome.
   - Haga clic en "Install" y luego en "Start" para habilitarlo.
   - Una vez instalado, configure el complemento para asegurar la comunicación adecuada con el XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Al reunir los componentes necesarios y configurar Home Assistant con el complemento ESPHome, estará listo para proceder con la integración del módulo de relé de 6 canales.

### Paso 2: Preparando el Módulo de Relé

Por defecto, su dispositivo (XIAO ESP32C6) viene pre-flasheado con firmware para relé de 6 canales. Sin embargo, hay dos escenarios donde puede necesitar actualizar el firmware:

1. **Re-flashear el Firmware**: Si el firmware existente está corrupto o necesita empezar de nuevo.
2. **Actualizar el Firmware**: Si hay una versión más nueva del firmware con funcionalidad mejorada.

Hay dos métodos simples para flashear el firmware:

:::caution
Firefox no soporta flashear firmware en dispositivos ESP. Por favor use Google Chrome o Microsoft Edge en su lugar.
:::

<Tabs>
<TabItem value='Web Tool'>

Puede usar esta [Herramienta Web](https://seeed-projects.github.io/6-Channel_Relay_based_on_XIAO_ESP32C6/) para un método fácil y directo de flashear su firmware. Simplemente siga las instrucciones en pantalla.

- Haga clic en el botón `CONNECT` para iniciar la conexión. La herramienta actualizará automáticamente el firmware.

Si algo sale mal, siga los pasos de solución de problemas en pantalla o cambie al método `ESPHome Web` para completar el proceso.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, necesitará descargar el archivo de firmware `bin` desde [aquí](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6/releases)(necesitará descomprimir el archivo descargado).

1. Conecte el kit de sensores a su PC.
2. Visite la página [ESPHome Web](https://web.esphome.io/).
3. Seleccione el archivo de firmware con el sufijo `*.factory.bin`.

Vea el siguiente video para un recorrido detallado de flashear el firmware vía ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

Con cualquiera de los métodos, tendrá su firmware actualizado y listo para integración con Home Assistant.

### Paso 3: Configuración de Red

1. **Habilitar Punto de Acceso**:
   - Al encender por primera vez, el módulo creará una red Wi-Fi (SSID: `seeedstudio-6-channel-relay`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap-from-xiao-esp32c6-seeedstudio-6-channel-relay.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **Acceder a la Configuración**:
   - Conéctese a la red usando un teléfono o PC.
   - Abra un navegador y navegue a [http://192.168.4.1](http://192.168.4.1).
   - Ingrese el SSID y contraseña de su red Wi-Fi doméstica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Integración con Home Assistant**:
   - Una vez conectado a la red doméstica, el módulo será descubrible en Home Assistant bajo `Settings -> Devices & Services`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

De esta manera, puede conectar el módulo a su red de Home Assistant y permitir que Home Assistant lo descubra.

### Paso 4: Añadir el dispositivo del módulo

1. **Descubrimiento Automático**:
   - Asegúrate de que **ESPHome** esté instalado en Home Assistant.
   - Navega a `Configuración -> Dispositivos y Servicios -> Integraciones` y busca el dispositivo.
2. **Configuración Manual**:
   - Si no se descubre automáticamente, añade manualmente el dispositivo especificando su dirección IP.

Después de añadir el dispositivo, puedes ver los seis interruptores en la página de Resumen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

También puedes establecer el nombre de cada interruptor individualmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview_with_custom_names.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Paso 5: Conectar los electrodomésticos que deseas controlar

:::warning Advertencia de Seguridad

Este módulo de relé está diseñado para operación de CC de bajo voltaje. No lo conectes a alimentación de CA para evitar riesgos eléctricos. Siempre desconecta la fuente de alimentación antes de cablear el relé para prevenir cortocircuitos y descargas eléctricas.

Los voltajes que excedan 24V pueden causar descargas eléctricas o quemaduras, especialmente en casos de piel dañada o en ambientes húmedos. Ten precaución al manejar dispositivos eléctricos para evitar lesiones.

:::

1. Cableado:
    - Sigue la sección de Diseño Físico y Conexiones para cablear el módulo de relé.
    - Asegúrate de que todas las conexiones estén seguras y no haya cables expuestos.
2. Encendido:
    - Enciende el módulo a través de USB.
    - Enciende la fuente de alimentación de CC para controlar otros electrodomésticos.

## Seguridad y Mantenimiento

1. Inspecciona periódicamente el cableado en busca de desgaste y deterioro.
2. Usa dispositivos de protección de circuito apropiados, como fusibles o interruptores.
3. Mantén el dispositivo alejado del agua y el calor excesivo.

## Preguntas Frecuentes

1. **¿Qué sucede si el dispositivo se desconecta del Wi-Fi?**
   - El módulo intentará reconectarse automáticamente. Si falla, habilitará su punto de acceso de respaldo para reconfiguración.
2. **¿Puedo usar el puerto USB mientras está conectado a alimentación de CA?**
   - No, usar USB mientras está conectado a alimentación de CA puede dañar el dispositivo o crear un riesgo de seguridad.
3. **¿Puede este módulo funcionar sin Home Assistant?**
   - Sí, el módulo puede ser controlado a través de su **dirección IP local** o integrado con otras plataformas que soporten ESPHome o MQTT.

## Recursos

- **Repositorio de GitHub**: Accede al Firmware de ESPHome en la [página de GitHub del Módulo de Relé de 6 Canales de Seeed Studio](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
