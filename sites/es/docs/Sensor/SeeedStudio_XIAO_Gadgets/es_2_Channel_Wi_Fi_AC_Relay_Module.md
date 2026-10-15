---
title: Módulo de Relé AC Wi-Fi de 2 Canales en Home Assistant
description: |
  Un dispositivo inteligente de Seeed Studio diseñado para controlar electrodomésticos alimentados por AC de forma inalámbrica
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/dual_smart_relay_module_for_xiao_45font.webp
slug: /2_channel_wifi_ac_relay
sku: 114993526
keywords:
  - XIAO
  - Home Assistant
  - AC Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Spencer
  date: 2024-11-27
createdAt: '2025-09-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/2_channel_wifi_ac_relay/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introducción al Módulo de Relé AC Wi-Fi de 2 Canales en Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2-114993526-dual-smart-relay-module-for-xiao-45font.jpg" style={{width:420, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Descripción General

El **[Módulo de Relé AC Wi-Fi de 2 Canales](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)** es un dispositivo inteligente de Seeed Studio diseñado para controlar electrodomésticos alimentados por AC de forma inalámbrica. Su configuración de doble canal soporta control independiente de dos cargas, convirtiéndolo en una excelente opción para automatizar electrodomésticos como luces, ventiladores y otros dispositivos en un entorno de Home Assistant.

Esta guía proporciona un recorrido detallado, incluyendo configuración, integración y configuración avanzada para usuarios desde principiantes hasta entusiastas del hogar inteligente.

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
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>Voltaje de Salida</th>
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>Carga Máxima</th>
            <td>10A por canal</td>
        </tr>
        <tr>
            <th>Canales</th>
            <td>2 (control independiente para cada canal)</td>
        </tr>
        <tr>
            <th>Tipo de Conexión</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>Terminales de Entrada</th>
            <td>N (Neutro), L (Vivo)</td>
        </tr>
        <tr>
            <th rolspan="2">Terminales de Salida</th>
            <td><b>Canal 1:</b> N1 (Neutro), L1 (Vivo) <br></br> <b>Canal 2:</b> N2 (Neutro), L2 (Vivo)</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Advertencia de Seguridad

Siempre desconecte la alimentación AC antes de cablear el relé. Evite usar el puerto USB mientras el dispositivo esté conectado a la alimentación AC para prevenir riesgos eléctricos.

:::

### Diseño Físico y Conexiones

#### Terminales de Entrada y Salida

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/relay_connections.png" style={{width: 600, height: 'auto'}}/></div>

- Entrada
  - **N (Neutro)**: Conecte el cable neutro de la fuente de alimentación AC.
  - **L (Vivo)**: Conecte el cable vivo de la fuente de alimentación AC.
- Salida
  - Canal 1
    - **N1 (Neutro)**: Cable neutro para la carga conectada al Relé 1.
    - **L1 (Vivo)**: Cable vivo para la carga conectada al Relé 1.
  - Canal 2
    - **N2 (Neutro)**: Cable neutro para la carga conectada al Relé 2.
    - **L2 (Vivo)**: Cable vivo para la carga conectada al Relé 2.

## Introducción

### Requisitos

1. **Componentes Principales**:
   - [Módulo de Relé AC Wi-Fi de 2 Canales](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **Red**:
   - Wi-Fi estable para una interacción fluida entre el hardware y Home Assistant.

### Paso 1: Configurar el Módulo de Relé (Configuración Física)

1. **Instalación**: homeassistant ya está preinstalado en [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html).
2. **Habilitando el Complemento ESPHome**:
   - Acceda al panel de Home Assistant.
   - Navegue a la sección "Add-ons" y busque el complemento ESPHome.
   - Haga clic en "Install" y luego en "Start" para habilitarlo.
   - Una vez instalado, configure el complemento para asegurar una comunicación adecuada con el XIAO ESP32C3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Al reunir los componentes necesarios y configurar Home Assistant con el complemento ESPHome, estará listo para proceder con la integración del Módulo de Relé AC Wi-Fi de 2 Canales.

### Paso 2: Preparando el Módulo de Relé

Por defecto, su dispositivo (XIAO ESP32C3) viene pre-flasheado con firmware para el Módulo de Relé AC Wi-Fi de 2 Canales. Sin embargo, hay dos escenarios donde puede necesitar actualizar el firmware:

1. **Re-flashear el Firmware**: Si el firmware existente está corrupto o necesita empezar de nuevo.
2. **Actualizar el Firmware**: Si hay una versión más nueva del firmware con funcionalidad mejorada.

Hay dos métodos simples para flashear el firmware:

:::caution
Firefox no soporta flashear firmware en dispositivos ESP. Por favor use Google Chrome o Microsoft Edge en su lugar.
:::

<Tabs>
<TabItem value='Herramienta Web'>

Puede usar esta [Herramienta Web](https://limengdu.github.io/2-Channel_Relay_based_on_XIAO_ESP32C3/) para un método fácil y directo de flashear su firmware. Simplemente siga las instrucciones en pantalla.

- Haga clic en el botón `CONNECT` para iniciar la conexión. La herramienta actualizará automáticamente el firmware.

Si algo sale mal, siga los pasos de solución de problemas en pantalla o cambie al método `ESPHome Web` para completar el proceso.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, necesitará descargar el archivo de firmware `bin` desde [aquí](https://github.com/limengdu/2-Channel_Relay_based_on_XIAO_ESP32C3/releases)(necesitará descomprimir el archivo descargado).

1. Conecte el kit de sensores a su PC.
2. Visite la página [ESPHome Web](https://web.esphome.io/).
3. Seleccione el archivo de firmware con el sufijo `*.factory.bin`.

Vea el siguiente video para un recorrido detallado de flashear el firmware a través de ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

Con cualquiera de los métodos, tendrá su firmware actualizado y listo para la integración con Home Assistant.

### Paso 3: Configuración de Red

1. **Habilitar Punto de Acceso**:
   - Al encender por primera vez, el módulo creará una red Wi-Fi (SSID: `seeedstudio-relay`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2ch_relay_wifi_list.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **Acceder a la Configuración**:
   - Conéctese a la red usando un teléfono o PC.
   - Abra un navegador y navegue a `http://192.168.4.1`.
   - Ingrese el SSID y contraseña de su red Wi-Fi doméstica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Integración con Home Assistant**:
   - Una vez conectado a la red doméstica, el módulo será descubrible en Home Assistant bajo `Settings -> Devices & Services`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

De esta manera, puede conectar el módulo a su red de Home Assistant y permitir que Home Assistant lo descubra.

### Paso 4: Agregar el dispositivo del módulo

1. **Descubrimiento Automático**:
   - Asegúrese de que **ESPHome** esté instalado en Home Assistant.
   - Navegue a `Settings -> Devices & Services -> Integrations` y busque el dispositivo.
2. **Configuración Manual**:
   - Si no se descubre automáticamente, agregue manualmente el dispositivo especificando su dirección IP.

Después de agregar el dispositivo, puede ver ambos interruptores en la página de Descripción General. También puede establecer el nombre de cada interruptor individualmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/ha_switch_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

## Seguridad y Mantenimiento

1. Inspeccione periódicamente el cableado en busca de desgaste y deterioro.
2. Use dispositivos de protección de circuito apropiados, como fusibles o disyuntores.
3. Mantenga el dispositivo alejado del agua y calor excesivo.

## Preguntas Frecuentes

1. **¿Qué pasa si el dispositivo se desconecta del Wi-Fi?**
   - El módulo intentará reconectarse automáticamente. Si falla, habilitará su punto de acceso de respaldo para reconfiguración.
2. **¿Puedo usar el puerto USB mientras esté conectado a la alimentación AC?**
   - No, usar USB mientras esté conectado a la alimentación AC puede dañar el dispositivo o crear un riesgo de seguridad.
3. **¿Puede este módulo funcionar sin Home Assistant?**
   - Sí, el módulo puede ser controlado a través de su **dirección IP local** o integrado con otras plataformas que soporten ESPHome o MQTT.

## Recursos

- **Repositorio GitHub**: Acceda al Firmware ESPHome en la [página GitHub del Módulo de Relé de Doble Canal de Seeed Studio](https://github.com/Seeed-Studio/xiao-esphome-projects/tree/main/projects/xiao_2_channel_wifi_ac_energy_meter).
- **Esquemático del Módulo de Relé de Doble Canal**: [Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/resource/Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
