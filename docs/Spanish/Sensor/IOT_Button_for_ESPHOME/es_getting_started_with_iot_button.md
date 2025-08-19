---
description: Getting Started with Seeed Studio IoT Button
title: Primeros Pasos con el IoT Button de Seeed Studio
keywords:
  - IoT Button
  - ESP32-C6
image: https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/button_buzzer.webp
slug: /es/getting_started_with_seeed_iot_button
last_update:
  date: 07/17/2025
  author: Guillermo
---

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/1.jpg" style={{width:800, height:'auto'}}/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-IoT-Button-p-6419.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

# Introducción

El **IoT Button** es un interruptor inteligente versátil que ofrece integración dual con Home Assistant a través de **ESPHome** y **Zigbee**. Alimentado por el **ESP32-C6**, cuenta con indicadores LED RGB personalizables, eventos programables, carga por USB-C y opciones de montaje flexibles: todo lo que necesitas para un control intuitivo de tu hogar inteligente.

### Características

- Compatible con Home Assistant  
- Un botón, acciones personalizables  
- Alimentación confiable  
- Solución de montaje sencilla  
- Abierto a personalización  

## Descripción del Hardware

Antes de comenzar, es esencial conocer algunos parámetros básicos del producto. La siguiente tabla proporciona las características del **IoT Button**.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Parámetro</th>
			<th>Descripción</th>
		</tr>
		<tr>
			<td>MCU</td>
			<td>Espressif ESP32-C6</td>
		</tr>
		<tr>
			<td>Memoria Flash</td>
			<td>4MB</td>
		</tr>
        <tr>
			<td>LED</td>
			<td>LED RGB de usuario: WS2812B (GPIO19 – requiere habilitar GPIO18)<br />LED de carga: Verde<br />LED de usuario: Azul (GPIO2)</td>
		</tr>
        <tr>
			<td>Conectividad inalámbrica</td>
			<td>2.4GHz Wi-Fi<br />Zigbee</td>
		</tr>
        <tr>
			<td>Batería</td>
			<td>Batería recargable Li-ion 18650 de 3.6V</td>
		</tr>
        <tr>
			<td>Puerto de carga</td>
			<td>USB Tipo-C</td>
		</tr>
        <tr>
			<td>Protección de batería</td>
			<td>Protección contra polaridad inversa</td>
		</tr>
        <tr>
			<td>Actualización de firmware</td>
			<td>Support OTA</td>
		</tr>
        <tr>
			<td>Dimensiones</td>
			<td>92x32x25 mm</td>
		</tr>
	</table>
</div>

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/3.png"
    style={{ width: '800px', height: 'auto' }}
  />
</div>

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/4.png"
    style={{ width: '800px', height: 'auto' }}
  />
</div>

## Primeros Pasos

### Paso 1: Configuración Inicial

Cuando recibas tu **IoT Button**, es esencial realizar una activación inicial antes de su uso. Sigue estos pasos:

1. Usa un cable de datos USB Tipo-C de 5V estándar para conectar el botón a una fuente de energía.  
2. **Esta conexión inicial es crucial, ya que activa la batería interna**.  
3. **Sin este paso de activación, el dispositivo no funcionará correctamente**.  

:::note
El IoT Button cuenta con un modo de suspensión para ahorrar energía:

- **Sin configuración:** el dispositivo entra en suspensión después de 2 minutos de inactividad. Presiona el botón una vez para despertarlo.
- **Tras configurar con ESPHome:** el dispositivo entra en suspensión 9 segundos después de soltar el botón. Es posible que debas presionar el botón una vez para despertarlo antes de realizar alguna acción.
:::

El dispositivo viene pre-cargado con firmware compatible con **ESPHome**, así que una vez activado, puedes integrarlo directamente con **Home Assistant** siguiendo los pasos siguientes.

:::note
Asegúrate de usar un cable USB Tipo-C de 5V conforme a los estándares. Cables no estándar podrían causar una activación incorrecta.
:::

### Paso 2: Configuración de Home Assistant

1. **Instalación:** Se recomienda instalar [Home Assistant OS](https://www.home-assistant.io/installation/) en una Raspberry Pi para un rendimiento óptimo. Sigue la guía oficial en el sitio de Home Assistant.

      :::tip Instalar Home Assistant
      También hemos documentado cómo instalar Home Assistant en varios productos de Seeed Studio:

      - [Inicio con Home Assistant en ODYSSEY-X86](/ODYSSEY-X86-Home-Assistant)  
      - [Inicio con Home Assistant en reTerminal](/reTerminal_Home_Assistant)  
      - [Inicio con Home Assistant en LinkStar H68K/reRouter CM4](/h68k-ha-esphome)  
      :::

También puedes adquirir directamente **Home Assistant Green** o **Home Assistant Yellow**:

<div style={{ textAlign: 'center' }}>
  <a href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html">
    <strong>
      <span style={{ color: 'white', fontSize: '1.1em' }}>Home Assistant Green</span>
    </strong>
  </a>
  <br /><br />
  <a href="https://www.seeedstudio.com/Home-Assistant-Yellow-Kit-with-selectable-CM4-p-5680.html">
    <strong>
      <span style={{ color: 'white', fontSize: '1.1em' }}>Home Assistant Yellow</span>
    </strong>
  </a>
</div>

2. **Habilitar el complemento ESPHome**:
   - Accede al panel principal de Home Assistant.
   - Ve a la sección "Add-ons" y busca **ESPHome**.
   - Haz clic en **Install** y luego en **Start** para activarlo.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/5.png"
    style={{ width: '1000px', height: 'auto' }}
  />
</div>

Con estos pasos, ya tendrás el entorno preparado para integrar el **IoT Button**.

### Paso 3: Preparar el Dispositivo

El dispositivo viene preinstalado con firmware para **IoT Button**, pero podrías necesitar actualizarlo en dos casos:

1. **Reinstalar el firmware:** si el firmware está dañado o necesitas un reinicio completo.  
2. **Actualizar el firmware:** para obtener nuevas funciones.

Puedes hacerlo de dos maneras:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value='Web Tool'>

Puedes usar esta herramienta en línea: [Web Tool](https://seeed-projects.github.io/Seeed_IoT_Button/)

1. Haz clic en `CONNECT` para iniciar la conexión.
2. La herramienta actualizará el firmware automáticamente.

Si ocurre algún error, sigue las instrucciones en pantalla o cambia al método **ESPHome Web**.

</TabItem>
<TabItem value='ESPHome Web'>

1. Descarga el archivo `.bin` desde [este enlace](https://github.com/Seeed-Studio/xiao-esphome-projects/releases) y descomprime el archivo.  
2. Conecta el botón a tu PC.  
3. Abre [ESPHome Web](https://web.esphome.io/)  
4. Selecciona el archivo `.factory.bin` correspondiente.

A continuación puedes ver un video con la guía paso a paso:

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/J3AVeZCoLK8?si=1AeNTsdmbTvMl0Nq" title="Install firmware via ESPHome Web" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</TabItem>
</Tabs>

Una vez completado cualquiera de los métodos, tu dispositivo estará listo para integrarse con **Home Assistant**.

#### Conéctate al punto de acceso del kit

Con el firmware instalado, puedes encender el IoT Button y aparecerá un punto de acceso Wi-Fi: `seeedstudio-iot-button`.

Navega a `192.168.4.1` para configurar los ajustes de red local de tu servidor de Home Assistant.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/opt-for-wifi-ap.jpg"
    style={{ width: '360px', height: 'auto', borderRadius: '15px' }}
  />
</div>

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60fda2/ha-enter-psw.jpg"
    style={{ width: '360px', height: 'auto', borderRadius: '15px' }}
  />
</div>


### Paso 3: Descubrir y añadir el dispositivo en Home Assistant {#discovering-and-adding-the-device-in-home-assistant}

En esta sección utilizaremos la app de Home Assistant, pero el proceso es el mismo en la versión web.

1. **Abre la app**: Una vez abierta, selecciona tu servidor de Home Assistant. La app lo detectará automáticamente.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-server-option.JPG"
    style={{ width: '360px', height: 'auto', borderRadius: '15px' }}
  />
</div>

2. **Crea una cuenta**: Si no tienes una cuenta, deberás crearla. Luego inicia sesión con tus credenciales.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/mmwave-for-xiao/mr60/mr60bha2/ha-login.JPG"
    style={{ width: '360px', height: 'auto', borderRadius: '15px' }}
  />
</div>

3. **Ve a la página de Integraciones**: Una vez dentro, ve a la sección "Integraciones" en Home Assistant. Si instalaste el complemento ESPHome y tanto el IoT Button como tu servidor están en la misma red, deberías ver el dispositivo `Seeed Studio IoT Button` en los dispositivos detectados.

4. **Añade el dispositivo**: Haz clic para añadir el dispositivo a tu instalación de Home Assistant.

  Pulsa el botón `CONFIGURAR`, confirma con el botón `ENVIAR` y asigna el dispositivo a la zona que prefieras (por ejemplo: Sala). Después de esto, el dispositivo estará gestionado por la integración ESPHome, permitiendo control y monitoreo completo en Home Assistant.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/18.png" style={{width:1000, height:'auto'}}/></div>

  :::note
  Si durante la configuración no se te pide asignar una zona, puedes hacerlo manualmente más adelante yendo a la sección "Integraciones", seleccionando el dispositivo y configurando la zona desde ahí.
  :::

## Crear automatizaciones con el IoT Button

Ahora que tu IoT Button está configurado, puedes crear automatizaciones para controlar dispositivos de tu hogar inteligente. Vamos a crear una automatización simple para encender una luz al presionar el botón.

1. En Home Assistant, ve a **Ajustes** > **Automatizaciones y escenas**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/21.png" style={{width:1000, height:'auto'}}/></div>

2. Haz clic en **CREAR AUTOMATIZACIÓN**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/22.png" style={{width:1000, height:'auto'}}/></div>

3. Configura tu automatización:

- **Nombre**: Ponle un nombre descriptivo, como "IoT Button Pulsación Única - Encender Luz"
- **Disparador (Trigger)**: Selecciona "Estado" como tipo de disparador
   - Entidad: Selecciona "Switch 1" (para pulsación única)
   - De: "off"
   - A: "on"
- **Acción**: Elige el dispositivo que deseas controlar
   - Por ejemplo, selecciona una luz y configúrala para que se encienda

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/23.png" style={{width:1000, height:'auto'}}/></div>

4. Haz clic en **GUARDAR** para crear la automatización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/IoT_Botton_ESPHOME/button_esphome/24.png" style={{width:1000, height:'auto'}}/></div>

## Uso avanzado: controlar distintos dispositivos con diferentes tipos de pulsación

Una de las funciones más útiles del IoT Button es la detección de distintos patrones de pulsación. Aquí tienes algunas ideas de uso para cada uno:

1. **Pulsación Única (Switch 1)**:
   - Encender/apagar luces de la habitación
   - Alternar un dispositivo de uso frecuente

2. **Doble Pulsación (Switch 2)**:
   - Activar una escena (por ejemplo, "Noche de Película" que atenúa luces y enciende el televisor)
   - Controlar un grupo de dispositivos al mismo tiempo

3. **Pulsación Larga (Switch 3)**:
   - Activar funciones de seguridad (activar/desactivar alarma)
   - Ejecutar rutinas de emergencia
   - Apagar múltiples dispositivos a la vez

Para configurar estas automatizaciones avanzadas, crea automatizaciones adicionales siguiendo los mismos pasos anteriores, pero seleccionando el "Switch" correspondiente (1, 2 o 3) como disparador y configurando las acciones deseadas.

## Soporte técnico y comunidad del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte distintos canales de soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios medios de comunicación para adaptarnos a tus necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

