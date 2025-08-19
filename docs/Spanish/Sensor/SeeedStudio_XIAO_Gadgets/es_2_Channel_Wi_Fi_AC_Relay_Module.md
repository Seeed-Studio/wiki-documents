---
title: Módulo de Relevador de CA Wi-Fi de 2 Canales en Home Assistant
description: |
  A smart device from Seeed Studio designed to control AC-powered appliances wirelessly
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/dual_smart_relay_module_for_xiao_45font.webp
slug: /es/2_channel_wifi_ac_relay
keywords:
  - XIAO
  - Home Assistant
  - AC Relay
  - Smart Home
sidebar_position: 2
last_update:
  author: Guillermo
  date: 2024-11-27T03:21:36.491Z
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeros pasos con el Módulo de Relevador de CA Wi-Fi de 2 Canales en Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2-114993526-dual-smart-relay-module-for-xiao-45font.jpg" style={{width:420, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html?utm_source=wiki" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Descripción general

El **[Módulo de Relevador de CA Wi-Fi de 2 Canales](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)** es un dispositivo inteligente de Seeed Studio diseñado para controlar electrodomésticos alimentados por CA de forma inalámbrica. Su configuración de dos canales permite el control independiente de dos cargas, lo que lo convierte en una excelente opción para automatizar luces, ventiladores y otros dispositivos en un entorno con Home Assistant.

Esta guía proporciona un recorrido detallado, incluyendo instalación, integración y configuración avanzada para usuarios desde principiantes hasta entusiastas del hogar inteligente.

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
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>Voltaje de salida</th>
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>Carga máxima</th>
            <td>10 A por canal</td>
        </tr>
        <tr>
            <th>Canales</th>
            <td>2 (control independiente por canal)</td>
        </tr>
        <tr>
            <th>Tipo de conexión</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>Terminales de entrada</th>
            <td>N (Neutral), L (Live)</td>
        </tr>
        <tr>
            <th rolspan="2">Terminales de salida</th>
            <td><b>Canal 1:</b> N1 (Neutral), L1 (Línea) <br></br> <b>Canal 2:</b> N2 (Neutral), L2 (Línea)</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Advertencia de seguridad

Desconecta siempre la alimentación de CA antes de manipular el cableado del relevador. No uses el puerto USB mientras el dispositivo esté conectado a la corriente alterna para evitar riesgos eléctricos.

:::

### Diseño físico y conexiones

#### Terminales de entrada y salida

<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/relay_connections.png" style={{width: 600, height: 'auto'}}/></div>

- Entrada
  - **N (Neutro)**: conecta el cable neutro desde la fuente de alimentación CA.
  - **L (Línea)**: conecta el cable de línea desde la fuente de alimentación CA.
- Salida
  - Canal 1
    - **N1 (Neutro)**: cable neutro hacia la carga conectada al relevador 1.
    - **L1 (Línea)**: cable de línea hacia la carga conectada al relevador 1.
  - Canal 2
    - **N2 (Neutro)**: cable neutro hacia la carga conectada al relevador 2.
    - **L2 (Línea)**: cable de línea hacia la carga conectada al relevador 2.

## Primeros pasos

### Requisitos

1. **Componentes esenciales**:
   - [Módulo de Relevador de CA Wi-Fi de 2 Canales](https://www.seeedstudio.com/Dual-Smart-Relay-Module-for-XIAO-p-6309.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **Red**:
   - Conexión Wi-Fi estable para interacción fluida entre el hardware y Home Assistant.

### Paso 1: Configurar el módulo (conexión física)

1. **Instalación**: Home Assistant ya está preinstalado en [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html).
2. **Habilitar el complemento ESPHome**:
   - Accede al panel de Home Assistant.
   - Ve a la sección "Complementos" y busca ESPHome.
   - Haz clic en "Instalar" y luego en "Iniciar" para activarlo.
   - Configura el complemento para asegurar la comunicación con el XIAO ESP32C3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2: Preparar el módulo de relevador

Por defecto, tu dispositivo (XIAO ESP32C3) viene pregrabado con el firmware para el Módulo de Relevador de CA Wi-Fi de 2 Canales. Sin embargo, hay dos escenarios en los que podrías necesitar actualizar el firmware:

1. **Regrabar el firmware**: si el firmware actual está dañado o deseas comenzar desde cero.
2. **Actualizar el firmware**: si existe una versión más reciente con mejoras de funcionalidad.

Existen dos métodos sencillos para flashear el firmware:

:::caution
Firefox no es compatible con el flasheo de firmware en dispositivos ESP. Por favor, usa Google Chrome o Microsoft Edge.
:::

<Tabs>
<TabItem value='Web Tool'>

Puedes usar esta [herramienta web](https://limengdu.github.io/2-Channel_Relay_based_on_XIAO_ESP32C3/) para un método fácil y directo de flasheo del firmware. Simplemente sigue las instrucciones en pantalla.

- Haz clic en el botón `CONNECT` para iniciar la conexión. La herramienta actualizará el firmware automáticamente.

Si algo sale mal, sigue los pasos de solución de problemas que aparecerán en pantalla o cambia al método `ESPHome Web` para completar el proceso.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, necesitas descargar el archivo `bin` del firmware desde [aquí](https://github.com/limengdu/2-Channel_Relay_based_on_XIAO_ESP32C3/releases) (descomprime el archivo descargado).

1. Conecta el kit al puerto USB de tu PC.
2. Visita la página [ESPHome Web](https://web.esphome.io/).
3. Selecciona el archivo de firmware con la terminación `*.factory.bin`.

Mira el siguiente video para una guía paso a paso del proceso de flasheo usando ESPHome Web:

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

Con cualquiera de estos métodos, tendrás tu firmware listo para integrarse con Home Assistant.

### Paso 3: Configuración de red

1. **Habilitar el punto de acceso**:
   - Al encenderlo por primera vez, el módulo creará una red Wi-Fi con SSID: `seeedstudio-relay`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/2ch_relay_wifi_list.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

2. **Acceder a la configuración**:
   - Conéctate a esa red desde tu teléfono o PC.
   - Abre un navegador y navega a `http://192.168.4.1`.
   - Introduce el SSID y la contraseña de tu red Wi-Fi doméstica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Integración con Home Assistant**:
   - Una vez conectado a tu red doméstica, el módulo será detectado automáticamente en Home Assistant en `Ajustes -> Dispositivos y servicios`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

Así podrás conectar el módulo a tu red doméstica y permitir que Home Assistant lo descubra automáticamente.

### Paso 4: Agregar el dispositivo al sistema

1. **Descubrimiento automático**:
   - Asegúrate de que **ESPHome** esté instalado en Home Assistant.
   - Ve a `Ajustes -> Dispositivos y servicios -> Integraciones` y busca el dispositivo detectado automáticamente.

2. **Configuración manual**:
   - Si el dispositivo no se descubre automáticamente, agrégalo manualmente especificando su dirección IP local.

Una vez añadido el dispositivo, verás ambos interruptores disponibles en la página de vista general (Overview). También puedes asignar un nombre individual a cada interruptor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/ha_switch_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

## Seguridad y mantenimiento

1. Inspecciona periódicamente el cableado en busca de desgaste o daño.
2. Utiliza dispositivos adecuados de protección del circuito, como fusibles o interruptores termomagnéticos.
3. Mantén el módulo alejado de agua, humedad o fuentes de calor excesivas.

## Preguntas frecuentes (FAQs)

1. **¿Qué sucede si el dispositivo se desconecta del Wi-Fi?**  
   El módulo intentará reconectarse automáticamente. Si no lo logra, habilitará su punto de acceso de respaldo para reconfiguración.

2. **¿Puedo usar el puerto USB mientras está conectado a la corriente alterna?**  
   No. Usar el puerto USB mientras está conectado a la red de CA puede dañar el dispositivo o provocar riesgos eléctricos.

3. **¿Puede este módulo funcionar sin Home Assistant?**  
   Sí. El módulo puede controlarse a través de su **dirección IP local** o integrarse con otras plataformas compatibles con ESPHome o MQTT.

## Recursos

- **Repositorio en GitHub**: Accede al firmware ESPHome en la [página GitHub del Módulo Relevador de Doble Canal de Seeed Studio](https://github.com/limengdu/2-Channel_Relay_based_on_XIAO_ESP32C3).
- **Esquemático del Módulo Relevador de Doble Canal**: [Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_ac_relay/resource/Seeed_Studio_2-Channel_AC_Wi-Fi_Relay_SCH.pdf).

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos tipos de soporte para asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
