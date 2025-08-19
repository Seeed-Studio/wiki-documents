---
title: Medidor de Energía AC Wi-Fi de 2 Canales XIAO en Home Assistant
description: |
  A smart device from Seeed Studio designed to detect the electricity usage of AC-powered appliances.
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.webp
slug: /es/2_channel_wifi_ac_energy_meter
keywords:
  - XIAO
  - Home Assistant
  - Energy Meter
  - Smart Home
sidebar_position: 5
last_update:
  author: Guillermo
  date: 07/21/2025
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeros pasos con el Medidor de Energía AC Wi-Fi de 2 Canales XIAO en Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.jpg" style={{width:680, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Descripción general

El **[Medidor de Energía AC Wi-Fi de 2 Canales XIAO](https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html)** es un dispositivo inteligente de Seeed Studio diseñado para detectar el consumo eléctrico de electrodomésticos alimentados por corriente alterna. Su configuración de dos canales permite la detección independiente de hasta dos cargas, lo que lo convierte en una excelente opción para automatizar diversos dispositivos en entornos de hogar inteligente.

Esta guía proporciona una guía detallada, incluyendo configuración, integración y configuración avanzada para usuarios principiantes y entusiastas del hogar inteligente.

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
            <td>AC 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>Canales</th>
            <td>2 (detección independiente para cada canal)</td>
        </tr>
        <tr>
            <th>Tipo de conexión</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>Terminales de entrada</th>
            <td>L (Línea), N (Neutro), PE (Tierra)</td>
        </tr>
        <tr>
            <th>Rango efectivo de detección de corriente</th>
            <td>10mA-100A @ 1mΩ (modo CT)</td>
        </tr>
        <tr>
            <th>Energía activa</th>
            <td>1w-7700w @ 1mΩ</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Advertencia de seguridad
Desconecta siempre la alimentación AC antes de realizar conexiones.
:::

### Physical Layout and Connections### Diseño físico y conexiones

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_wiring.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

- **L (Línea)**: Conecta el cable de línea de la fuente de alimentación AC.
- **N (Neutro)**: Conecta el cable neutro de la fuente de alimentación AC.
- **PE (Tierra)**: Conecta el cable de tierra de la fuente de alimentación AC.
- **CT1, CT2 (Transformadores de corriente)**: Sujeta el transformador al cable de línea, con la flecha apuntando desde la fuente de alimentación hacia la carga.

#### Instalación del transformador de corriente

1. Abre el sujetador y coloca el cable en su zona circular.

<br />
<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/CT_install_step1.jpg"   
        style={{   
            width: '300px',   
            height: '300px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

2. Luego cierra el sujetador, presiona con fuerza hasta escuchar un "clic". La instalación está completa.

<br />
<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/CT_install_step2.gif"   
        style={{   
            width: '300px',   
            height: '300px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

:::warning Instalación del transformador de corriente

Asegúrate de que la dirección de la corriente coincida con la dirección indicada por la flecha en el sujetador.

<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/current_flow_direction.jpg"   
        style={{   
            width: '300px',   
            height: '300px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

:::

## Primeros pasos

### Requisitos

1. **Componentes principales**:
   - [Medidor de energía AC Wi-Fi de 2 canales XIAO](https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html)
   - [Transformador de corriente AC no invasivo](https://www.seeedstudio.com/Non-invasive-AC-Current-Sensor-100A-ma-p-547.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **Red**:
   - Conexión Wi-Fi estable para comunicación fluida entre el hardware y Home Assistant.

### Paso 1: Configurar Home Assistant {#setting-up-home-assistant}

1. **Instalación**: Home Assistant viene preinstalado en [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html).
2. **Habilitar el complemento ESPHome**:
   - Accede al panel de control de Home Assistant.
   - Ve a la sección "Add-ons" y busca "ESPHome".
   - Haz clic en "Install" y luego en "Start" para activarlo.
   - Una vez instalado, configura el complemento para asegurar la comunicación con el XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Al reunir los componentes necesarios y configurar Home Assistant con el complemento ESPHome, estarás listo para integrar el medidor de energía XIAO.

### Paso 2: Preparar el medidor de energía

Por defecto, tu dispositivo (XIAO ESP32C6) viene con el firmware preinstalado para el Medidor de Energía AC Wi-Fi de 2 Canales. Sin embargo, hay dos escenarios en los que puedes necesitar actualizar el firmware:

1. **Reinstalar el firmware**: Si el firmware actual está dañado o deseas empezar desde cero.
2. **Actualizar el firmware**: Si existe una versión más reciente con mejoras.

Hay dos métodos sencillos para actualizar el firmware:

:::caution
Firefox no es compatible con la instalación de firmware en dispositivos ESP. Usa Google Chrome o Microsoft Edge.
:::

<Tabs>
<TabItem value='Web Tool'>

Puedes usar esta [herramienta web](https://gadgets.seeed.cc/) como un método fácil y directo para actualizar tu firmware. Solo sigue las instrucciones en pantalla. (Selecciona **SeeedStuido-2CH-EM**)

- Haz clic en el botón `CONNECT` para iniciar la conexión. La herramienta actualizará el firmware automáticamente.

Si algo sale mal, sigue los pasos de solución en pantalla o cambia al método `ESPHome Web` para completar el proceso.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, necesitas descargar el archivo `bin` del firmware desde [aquí](https://github.com/Seeed-Studio/xiao-esphome-projects/releases) (descomprime el archivo descargado).

1. Conecta el kit del sensor a tu PC.
2. Visita la página [ESPHome Web](https://web.esphome.io/).
3. Selecciona el archivo de firmware con el sufijo `*.factory.bin`.

Mira el siguiente video para una guía paso a paso sobre cómo instalar el firmware con ESPHome Web:

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

Con cualquiera de los métodos, tendrás tu firmware actualizado y listo para integrarse con Home Assistant.

### Paso 3: Configuración de red

1. **Habilitar punto de acceso**:
   - Al encenderse por primera vez, el módulo creará una red Wi-Fi (SSID: `SeeedStudio-2CH-EM`).

2. **Acceder a la configuración**:
   - Conéctate a la red usando un teléfono o PC.
   - Abre un navegador y navega a `http://192.168.4.1`.
   - Ingresa el SSID y la contraseña de tu red Wi-Fi doméstica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>

3. **Integración con Home Assistant**:
   - Una vez conectado a la red doméstica, el módulo será detectable en Home Assistant en `Ajustes -> Dispositivos y Servicios`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

Así podrás conectar el módulo a tu red de Home Assistant y dejar que Home Assistant lo descubra automáticamente.

### Paso 4: Añadir el dispositivo

1. **Descubrimiento automático**:
   - Asegúrate de que **ESPHome** esté instalado en Home Assistant.
   - Navega a `Ajustes -> Dispositivos y Servicios -> Integraciones` y busca el dispositivo.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_add_new_device.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div> -->

<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_add_new_device.png"   
        style={{   
            width: '680px',   
            height: 'auto',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  
<br />

2. **Configuración manual**:
   - Si no se descubre automáticamente, añade el dispositivo manualmente especificando su dirección IP.

Una vez agregado el dispositivo, podrás ver un interruptor de control de iluminación, dos canales de consumo de corriente, dos canales de consumo de energía y el valor total de voltaje en la vista general.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_overview.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div> -->
<br />
<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_overview.png"   
        style={{   
            width: 'auto',   
            height: '680px',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  

<br />
Al hacer clic sobre cualquier fila de ícono, puedes ver los valores correspondientes y sus cambios recientes en detalle, representados por un gráfico de líneas.
<br /><br />

<div style={{ textAlign: 'center' }}>  
    <img   
        src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/ha_dashboard_detail.png"   
        style={{   
            width: '680px',   
            height: 'auto',   
            borderRadius: '15px',   
            filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.3))'   
        }}   
    />  
</div>  

## Seguridad y mantenimiento

1. Inspecciona periódicamente el cableado por desgaste o daño.
2. Usa dispositivos de protección de circuito adecuados, como fusibles o disyuntores.
3. Mantén el dispositivo alejado del agua y del calor excesivo.

## Preguntas Frecuentes (FAQs)

1. **¿Qué sucede si el dispositivo se desconecta del Wi-Fi?**
   - El módulo intentará reconectarse automáticamente. Si falla, activará su punto de acceso de respaldo para reconfiguración.

2. **¿Qué debo hacer si el dispositivo pierde energía repentinamente?**
   - Si el dispositivo pierde energía y deseas retirar el transformador de corriente, espera a que el dispositivo reinicie y funcione normalmente antes de retirarlo, de lo contrario podrías dañarlo.

## Recursos

- **Repositorio en GitHub**: Accede al firmware ESPHome desde la [página de GitHub del medidor de energía de 2 canales de Seeed Studio](https://github.com/ZhangKeLiang0627/2-Channel_Energy_Meter_based_on_XIAO_ESP32C6)

- **Esquemático del medidor de energía de 2 canales**: [Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/resource/Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf)

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte soporte técnico para que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>