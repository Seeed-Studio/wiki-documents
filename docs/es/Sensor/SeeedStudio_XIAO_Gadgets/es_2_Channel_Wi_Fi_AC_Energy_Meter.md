---
title: XIAO 2-Channel Wi-Fi AC Energy Meter En Home Assistant
description: |
  Un dispositivo inteligente de Seeed Studio diseñado para detectar el uso de electricidad de electrodomésticos alimentados por CA.
image: https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.webp
slug: /es/2_channel_wifi_ac_energy_meter
keywords:
  - XIAO
  - Home Assistant
  - Energy Meter
  - Smart Home
sidebar_position: 5
last_update:
  author: Hugo
  date: 04/01/2025
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Comenzando con XIAO 2-Channel Wi-Fi AC Energy Meter En Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_appearance.jpg" style={{width:680, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div><br />

## Descripción General
El **[XIAO 2-Channel Wi-Fi AC Energy Meter](https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html)** es un dispositivo inteligente de Seeed Studio diseñado para detectar el uso de electricidad de electrodomésticos alimentados por CA. Su configuración de doble canal soporta detección independiente de hasta dos cargas, convirtiéndolo en una excelente opción para automatizar una variedad de dispositivos en entornos de hogar inteligente.

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
            <td>CA 100-240V, 50/60Hz</td>
        </tr>
        <tr>
            <th>Canales</th>
            <td>2 (detección independiente para cada canal)</td>
        </tr>
        <tr>
            <th>Tipo de Conexión</th>
            <td>Wi-Fi</td>
        </tr>
        <tr>
            <th>Terminales de Entrada</th>
            <td>L (Vivo), N (Neutro), PE (Tierra de Protección)</td>
        </tr>
        <tr>
            <th>Rango Efectivo de Detección de Corriente</th>
            <td>10mA-100A @ 1mΩ (Modo CT)</td>
        </tr>
        <tr>
            <th>Energía Eléctrica Activa</th>
            <td>1w-7700w @ 1mΩ</td>
        </tr>
    </tbody>
</table>
</div>

:::warning Advertencia de Seguridad

Siempre desconecte la alimentación de CA antes del cableado.

:::

### Diseño Físico y Conexiones

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/energy_meter_wiring.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

- **L (Vivo)**: Conecte el cable vivo de la fuente de alimentación de CA.
- **N (Neutro)**: Conecte el cable neutro de la fuente de alimentación de CA.
- **PE (Tierra de Protección)**: Conecte el cable de tierra de protección de la fuente de alimentación de CA.
- **CT1, CT2 (Transformador de Corriente)**: Sujete la pinza del transformador de corriente al cable vivo, con la flecha apuntando desde el extremo de alimentación hacia el extremo de carga.

#### Instalación del Transformador de Corriente

1. Primero, abra la pinza y coloque el cable en su área circular.

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

2. Luego ajuste la hebilla, presiónela fuerte y escuche un "clic", la instalación está completa.

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

:::warning Instalación de la pinza del transformador de corriente

Al instalar la pinza, asegúrese de que la dirección de la corriente coincida con la dirección indicada por la flecha en la pinza.

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


## Primeros Pasos

### Requisitos

1. **Componentes Principales**:
   - [Medidor de Energía CA Wi-Fi de 2 Canales XIAO](https://www.seeedstudio.com/XIAO-2-Channel-Wi-Fi-AC-Energy-Meter-Bundle-Kit.html)
   - [Transformador de Corriente CA No Invasivo](https://www.seeedstudio.com/Non-invasive-AC-Current-Sensor-100A-ma-p-547.html)
   - [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html)
2. **Red**:
   - Wi-Fi estable para interacción fluida entre el hardware y Home Assistant.

### Paso 1: Configuración de Home Assistant {#setting-up-home-assistant}

1. **Instalación**: homeassistant ya está preinstalado en [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html).
2. **Habilitación del Complemento ESPHome**:
   - Acceda al panel de Home Assistant.
   - Navegue a la sección "Complementos" y busque el complemento ESPHome.
   - Haga clic en "Instalar" y luego en "Iniciar" para habilitarlo.
   - Una vez instalado, configure el complemento para asegurar la comunicación adecuada con el XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-enabling_ESPHome_Add-on.png" style={{width:1000, height:'auto'}}/></div>

Al reunir los componentes necesarios y configurar Home Assistant con el complemento ESPHome, estará listo para proceder con la integración del medidor de energía CA Wi-Fi de 2 canales XIAO.

### Paso 2: Preparación del Medidor de Energía

Por defecto, su dispositivo (XIAO ESP32C6) viene con firmware preinstalado para el Medidor de Energía CA Wi-Fi de 2 Canales XIAO. Sin embargo, hay dos escenarios donde puede necesitar actualizar el firmware:

1. **Re-flasheo del Firmware**: Si el firmware existente está corrupto o necesita empezar de nuevo.
2. **Actualización del Firmware**: Si hay una versión más nueva del firmware con funcionalidad mejorada.

Hay dos métodos simples para flashear el firmware:

:::caution
Firefox no soporta el flasheo de firmware en dispositivos ESP. Por favor use Google Chrome o Microsoft Edge en su lugar.
:::

<Tabs>
<TabItem value='Web Tool'>

Puede usar esta [Herramienta Web](https://gadgets.seeed.cc/) para un método fácil y directo de flashear su firmware. Simplemente siga las instrucciones en pantalla. (Por favor elija **SeeedStuido-2CH-EM**)

- Haga clic en el botón `CONNECT` para iniciar la conexión. La herramienta actualizará automáticamente el firmware.

Si algo sale mal, siga los pasos de solución de problemas en pantalla o cambie al método `ESPHome Web` para completar el proceso.

</TabItem>
<TabItem value='ESPHome Web'>

Para este método, necesitará descargar el archivo de firmware `bin` desde [aquí](https://github.com/Seeed-Studio/xiao-esphome-projects/releases)(necesitará descomprimir el archivo descargado).

1. Conecte el kit de sensores a su PC.
2. Visite la página [ESPHome Web](https://web.esphome.io/).
3. Seleccione el archivo de firmware con el sufijo `*.factory.bin`.

Vea el siguiente video para un recorrido detallado del flasheo del firmware vía ESPHome Web:

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</TabItem>
</Tabs>

Con cualquiera de los métodos, tendrá su firmware actualizado y listo para la integración con Home Assistant.


### Paso 3: Configuración de Red

1. **Habilitar Punto de Acceso**:
   - Al encender por primera vez, el módulo creará una red Wi-Fi (SSID: `SeeedStudio-2CH-EM`).


2. **Acceso a la Configuración**:
   - Conéctese a la red usando un teléfono o PC.
   - Abra un navegador y navegue a `http://192.168.4.1`.
   - Ingrese el SSID y contraseña de su red Wi-Fi doméstica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ap_wireless_setting_page.png" style={{width:'auto', height:680, "border-radius": '15px'}}/></div>


3. **Integración con Home Assistant**:
   - Una vez conectado a la red doméstica, el módulo será detectable en Home Assistant bajo `Configuración -> Dispositivos y Servicios`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO/Gadgets/6_channel_wifi_relay/ha_new_device_discovered.png" style={{width:680, height:'auto', "border-radius": '15px'}}/></div>

De esta manera, puedes conectar el módulo a tu red de Home Assistant y permitir que Home Assistant lo descubra.

### Paso 4: Agregar el dispositivo del módulo

1. **Descubrimiento Automático**:
   - Asegúrate de que **ESPHome** esté instalado en Home Assistant.
   - Navega a `Configuración -> Dispositivos y Servicios -> Integraciones` y busca el dispositivo.

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

1. **Configuración Manual**:
   - Si no se descubre automáticamente, agrega manualmente el dispositivo especificando su dirección IP.

Después de agregar el dispositivo, puedes ver un interruptor de control de iluminación, dos canales de uso de corriente, dos canales de consumo de energía y el valor de voltaje total en la página de Resumen.

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
Al hacer clic en cualquier icono de fila, puedes ver los valores correspondientes y sus cambios recientes con más detalle, que están representados por un gráfico de líneas.
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

## Seguridad y Mantenimiento

1. Inspecciona periódicamente el cableado en busca de desgaste y deterioro.
2. Utiliza dispositivos de protección de circuito adecuados, como fusibles o disyuntores.
3. Mantén el dispositivo alejado del agua y del calor excesivo.

## Preguntas Frecuentes

1. **¿Qué sucede si el dispositivo se desconecta del Wi-Fi?**
   - El módulo intentará reconectarse automáticamente. Si falla, habilitará su punto de acceso de respaldo para reconfiguración.

2. **¿Qué debo hacer si el dispositivo pierde energía inesperadamente?**
   - Cuando el dispositivo pierde energía repentinamente, si desea retirar la fijación del transformador de corriente, espere hasta que el dispositivo se reinicie y esté funcionando normalmente antes de retirarlo, de lo contrario puede dañar el dispositivo.


## Recursos
- **Repositorio de GitHub**: Acceda al Firmware de ESPHome en la [página de GitHub del Medidor de Energía de Doble Canal de Seeed Studio](https://github.com/ZhangKeLiang0627/2-Channel_Energy_Meter_based_on_XIAO_ESP32C6)

- **Esquemático del Medidor de Energía de Doble Canal**: [Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf](https://files.seeedstudio.com/wiki/XIAO/Gadgets/2_channel_wifi_ac_energy_meter/resource/Seeed_Studio_XIAO_2-Channel_Wi-Fi_AC_Energy_Meter_V1.0.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>