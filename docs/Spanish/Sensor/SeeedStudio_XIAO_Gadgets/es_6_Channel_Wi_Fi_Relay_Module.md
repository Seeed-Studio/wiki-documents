---
title: Módulo Relevador Wi-Fi de 6 Canales en Home Assistant
description: |
  A smart device from Seeed Studio designed to wirelessly control devices with safe DC voltage.
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp
slug: /es/6_channel_wifi_relay
keywords:
  - XIAO
  - Home Assistant
  - Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Guillermo
  date: 07/21/2025
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeros pasos con el Módulo Relevador Wi-Fi de 6 Canales en Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/7-114993588_6_CH_Relay_Sensor_feature.webp" style={{width:640, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/6-Channel-Wi-Fi-5V-DC-Relay-p-6373.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Descripción general

El **[Módulo Relevador Wi-Fi de 6 Canales](https://www.seeedstudio.com/)** es un dispositivo inteligente de Seeed Studio diseñado para control dentro de un rango seguro de voltaje de corriente continua (DC), no para electrodomésticos que funcionan con corriente alterna (AC). Su configuración de seis canales permite el control independiente de hasta seis cargas, siendo una excelente opción para automatizar diversos dispositivos en entornos de hogar inteligente.

Además de sus seis canales de relevador, este módulo cuenta con dos interfaces Grove de expansión adicionales, lo que permite integrar sensores o actuadores adicionales para escenarios de automatización más avanzados.

Esta guía ofrece un recorrido detallado que incluye configuración, integración y ajustes avanzados para usuarios desde principiantes hasta entusiastas del hogar inteligente.

### Características y especificaciones clave

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
            <td>CC 5V(para XIAO)</td>
        </tr>
        <tr>
            <th>Voltaje soportado en CC</th>
            <td>CC 0~30V</td>
        </tr>
        <tr>
            <th>Carga máxima</th>
            <td>10A por canal</td>
        </tr>
        <tr>
            <th>Canales</th>
            <td>6 (control independiente por canal)</td>
        </tr>
        <tr>
            <th>Tipo de conexión</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>Puerto eléctrico</th>
            <td>NO (Normalmente abierto), COM (Común), NC (Normalmente cerrado)</td>
        </tr>
        <tr>
            <th>Expansión Grove</th>
            <td>IIC×1, UART×1</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Advertencia de seguridad

Este módulo relevador está diseñado para operación con voltaje bajo de corriente continua. No lo conectes a corriente alterna para evitar riesgos eléctricos. Desconecta siempre la fuente de alimentación antes de cablear el relevador para evitar cortocircuitos y descargas eléctricas.

Voltajes superiores a 24 V pueden causar descargas eléctricas o quemaduras, especialmente si hay piel dañada o ambientes húmedos. Ten precaución al manipular dispositivos eléctricos para evitar lesiones.

:::

### Diseño físico y conexiones

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/simplified_diagram_with_con.png" style={{width: 600, height: 'auto'}}/></div>

- **NO (Normalmente abierto)**: Terminal normalmente abierto. Por defecto, este terminal no está conectado con el terminal común (COM). Cuando el relevador se activa, el terminal NO se conecta con COM. Se usa típicamente para controlar el interruptor de una carga.
- **COM (Común)**: Terminal común del relevador, punto compartido de conexión con un lado del circuito.
- **NC (Normalmente cerrado)**: Terminal normalmente cerrado. Por defecto, está conectado al terminal común (COM). Cuando el relevador se activa, se rompe la conexión entre NC y COM. Se usa para escenarios que requieren control de desconexión.

   | GPIO de XIAO | Canal de Relevador |
   | ------------ | ------------------ |
   | GPIO2        | Relevador 1        |
   | GPIO21       | Relevador 2        |
   | GPIO1        | Relevador 3        |
   | GPIO0        | Relevador 4        |
   | GPIO19       | Relevador 5        |
   | GPIO18       | Relevador 6        |

## Primeros pasos

### Requisitos

1. **Componentes esenciales**:
   - [Módulo Relevador Wi-Fi de 6 Canales](https://www.seeedstudio.com/)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **Red**:
   - Wi-Fi estable para interacción fluida entre hardware y Home Assistant.

### Paso 1: Configurar Home Assistant {#setting-up-home-assistant}

1. **Instalación**: Home Assistant ya está preinstalado en [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html).
2. **Habilitar el complemento ESPHome**:
   - Accede al panel de Home Assistant.
   - Ve a la sección "Complementos" y busca ESPHome.
   - Haz clic en "Instalar" y luego en "Iniciar" para activarlo.
   - Configura el complemento para asegurar la comunicación con el XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Con los componentes necesarios y Home Assistant con el complemento ESPHome listos, podrás proceder con la integración del módulo relevador de 6 canales.

### Paso 2: Preparar el módulo relevador

Por defecto, tu dispositivo (XIAO ESP32C6) viene preprogramado con firmware para el relevador de 6 canales. Sin embargo, hay dos casos donde es necesario actualizar el firmware:

1. **Reprogramar el firmware**: si el firmware está dañado o necesitas empezar desde cero.
2. **Actualizar el firmware**: si hay una versión nueva con mejoras.

Existen dos métodos sencillos para flashear el firmware:

:::caution
Firefox no soporta flasheo de firmware en dispositivos ESP. Usa Google Chrome o Microsoft Edge.
:::

<Tabs>
<TabItem value='Web Tool'>

Puedes usar esta [herramienta web](https://seeed-projects.github.io/6-Channel_Relay_based_on_XIAO_ESP32C6/) para flashear el firmware de forma directa y sencilla. Sigue las instrucciones en pantalla.

- Haz clic en el botón `CONNECT` para iniciar la conexión. La herramienta actualizará el firmware automáticamente.

Si hay problemas, sigue las instrucciones o cambia al método `ESPHome Web`.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, descarga el archivo `bin` del firmware desde [aquí](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6/releases) y descomprímelo.

1. Conecta el kit al PC.
2. Visita [ESPHome Web](https://web.esphome.io/).
3. Selecciona el archivo con sufijo `*.factory.bin`.

Mira este video para ver cómo flashear el firmware con ESPHome Web:

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

Con cualquiera de estos métodos, tendrás el firmware actualizado y listo para integrarse con Home Assistant.

### Paso 3: Configuración de red

1. **Habilitar punto de acceso**:
   - Al encenderse por primera vez, el módulo creará una red Wi-Fi con SSID: `seeedstudio-6-channel-relay`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap-from-xiao-esp32c6-seeedstudio-6-channel-relay.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **Acceder a la configuración**:
   - Conéctate a esa red desde tu teléfono o PC.
   - Abre un navegador y entra [aquí](http://192.168.4.1).
   - Ingresa el SSID y la contraseña de tu red Wi-Fi doméstica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Integración con Home Assistant**:
   - Una vez conectado a la red doméstica, el módulo será detectado automáticamente en Home Assistant en `Ajustes -> Dispositivos y servicios`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

De esta forma, podrás conectar el módulo a tu red y permitir que Home Assistant lo descubra automáticamente.

### Paso 4: Agregar el dispositivo al sistema

1. **Descubrimiento automático**:
   - Asegúrate de que **ESPHome** esté instalado en Home Assistant.
   - Ve a `Ajustes -> Dispositivos y servicios -> Integraciones` y busca el dispositivo detectado.

2. **Configuración manual**:
   - Si no se detecta automáticamente, agrégalo manualmente indicando su dirección IP local.

Tras añadir el dispositivo, verás los seis interruptores disponibles en la página de vista general.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

Puedes asignar un nombre individual a cada interruptor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/buttons_in_ha_overview_with_custom_names.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

### Paso 5: Conectar los aparatos que quieres controlar

:::warning Advertencia de seguridad

Este módulo relevador está diseñado para operación con voltaje bajo de corriente continua. No lo conectes a corriente alterna para evitar riesgos eléctricos. Desconecta siempre la fuente de alimentación antes de cablear el relevador para evitar cortocircuitos y descargas eléctricas.

Voltajes superiores a 24 V pueden causar descargas eléctricas o quemaduras, especialmente si hay piel dañada o ambientes húmedos. Ten precaución al manipular dispositivos eléctricos para evitar lesiones.

:::

1. Cableado:
    - Sigue la sección Diseño físico y conexiones para conectar el módulo relevador.
    - Asegúrate que todas las conexiones estén seguras y no haya cables expuestos.
2. Encender:
    - Enciende el módulo a través del USB.
    - Enciende la fuente de alimentación DC para controlar otros aparatos eléctricos.

## Seguridad y mantenimiento

1. Inspecciona periódicamente el cableado para detectar desgaste.
2. Usa dispositivos de protección adecuados, como fusibles o interruptores.
3. Mantén el dispositivo alejado de agua y calor excesivo.

## Preguntas frecuentes (FAQs)

1. **¿Qué pasa si el dispositivo se desconecta del Wi-Fi?**  
   El módulo intentará reconectarse automáticamente. Si falla, activará su punto de acceso alternativo para reconfiguración.

2. **¿Puedo usar el puerto USB mientras está conectado a corriente alterna?**  
   No. Usar el USB conectado a CA puede dañar el dispositivo o generar riesgos.

3. **¿Puede este módulo funcionar sin Home Assistant?**  
   Sí. Puede controlarse mediante su **IP local** o integrarse con otras plataformas compatibles con ESPHome o MQTT.

## Recursos

- **Repositorio GitHub**: Accede al firmware ESPHome en la [página GitHub del Módulo Relevador de 6 Canales de Seeed Studio](https://github.com/Seeed-Projects/6-Channel_Relay_based_on_XIAO_ESP32C6).

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte y asegurarnos que tu experiencia sea óptima. Ofrecemos varios canales de comunicación para adaptarnos a tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
