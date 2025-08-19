---
description: SenseCAP Indicator - Home Assistant Application Development
title: Home Assistant - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- Home Assistant
- ESP32S3
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-ha-thumbnail.jpg
slug: /es/SenseCAP_Indicator_Application_Home_Assistant
sidebar_position: 1
last_update:
  date: 07/22/2025
  author: Guillermo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Indicator - Desarrollo de Aplicación con Home Assistant

## Introducción

<iframe class="youtube-video-r" src="https://www.youtube.com/embed/PKMcutZDjDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div className="get_one_now_container" style={{ textAlign: "center" }}>
  <a className="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
    <strong>🖱️ Cómpralo</strong>
  </a>
</div>

Desbloquea todo el potencial de tu hogar inteligente integrando el **SenseCAP Indicator** con **Home Assistant**. Esta poderosa combinación te permite monitorear y controlar tu entorno con una facilidad sin precedentes.

Aprende cómo integrar sin problemas tu SenseCAP Indicator con Home Assistant usando **MQTT** en esta guía completa.

Antes de comenzar, exploremos tus opciones para configurar Home Assistant. Home Assistant puede instalarse fácilmente en dos opciones de hardware dedicadas:

:::note
Por supuesto, tienes varias opciones para instalar HA siguiendo esta [guía de instalación - Home Assistant (home-assistant.io)](https://www.home-assistant.io/installation/).
:::

<Tabs>
<TabItem value='Home Assistant Green'>

<div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA/HA_Green.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> El económico **[Home Assistant Green](https://www.home-assistant.io/green)** es la forma más fácil de comenzar a usar Home Assistant. Es plug-and-play y viene con Home Assistant ya instalado.

</TabItem>

<TabItem value='Home Assistant Yellow'>

<div align="center"><img width={680} src="https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png"style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> **[Home Assistant Yellow](https://www.home-assistant.io/yellow)** viene preensamblado en un gabinete personalizado con un Raspberry Pi Compute Module 4 (CM4) y un disipador de calor especial para una operación silenciosa sin ventilador. El CM4 es una versión sin conectividad inalámbrica, con 2 GB de RAM y 16 GB de almacenamiento eMMC. Home Assistant viene preinstalado.

</TabItem>
</Tabs>

Para maximizar las capacidades de Home Assistant, recomendamos usar **Home Assistant OS** o **Home Assistant Supervised**. Ambas opciones ofrecen funciones avanzadas y mayor personalización, permitiéndote adaptar tu experiencia de hogar inteligente a tus necesidades exactas.

Ahora comencemos con el proceso de integración. Sigue estos tres pasos principales para poner a funcionar tu SenseCAP Indicator con Home Assistant:

1. [Instalar Home Assistant OS](#install_HA)
   1. [Instalar Complementos](#mqtt-addons)
   2. [Configurar Integración MQTT](#mqtt-integration)
2. [Compilar y Flashear el Firmware](#build-flash-firmware)
3. [Agregar Dispositivos MQTT](#add-mqtt-devices)
4. [Configurar un Dashboard](#set-up-dashboard)

## Requisitos Previos

Antes de comenzar, asegúrate de haber leído la [Guía del Usuario](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) de la placa SenseCAP Indicator para familiarizarte con su software y hardware.

## Instalar Home Assistant OS {#install_HA}

> Home Assistant es una potente plataforma de automatización del hogar de código abierto que se enfoca en la privacidad y el control local. Ofrece un marco personalizable y flexible para gestionar y automatizar todos tus dispositivos desde una plataforma unificada.

Con **Home Assistant Yellow** puedes seguir las instrucciones proporcionadas [aquí](https://www.home-assistant.io/installation/yellow). También, para ejecutarlo en cualquier tipo de Raspberry Pi o servidor local, puedes seguir esta [instrucción](https://www.home-assistant.io/installation/) paso a paso.

Una vez instalado, si puedes acceder a esta página, puedes continuar con el siguiente paso.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"/></div>

<br />

:::tip ¿No sabes cómo comenzar con Home Assistant?
Una vez instalado Home Assistant, revisa [Onboarding Home Assistant - Home Assistant](https://www.home-assistant.io/getting-started/onboarding/) para más detalles.
:::

### Paso 1: Instalar Complementos {#mqtt-addons}

:::caution Se requiere función de Complementos
**Home Assistant Yellow** viene con **Home Assistant Operating System**, por lo que se pueden instalar fácilmente complementos. Sin embargo, **Home Assistant Container** no admite complementos, lo que significa que deberás instalar una aplicación broker MQTT por separado. Para más detalles, consulta los [métodos de instalación](https://www.home-assistant.io/installation/#compare-installation-methods).
:::

El siguiente paso es instalar **Mosquitto Broker** y **File Editor**.  
**Mosquitto** es un broker de mensajes de código abierto que implementa el protocolo MQTT, mientras que **File Editor** te permite modificar el archivo `configuration.yaml` sin necesidad de acceder al terminal.

En Home Assistant Yellow, puedes instalar Mosquitto Broker y File Editor usando la función de complementos.

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

:::tip
Para mayor comodidad, muestra el 'Editor de archivos' en la barra lateral:

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_editor_show.png"/></div>

:::

Ahora tenemos los dos complementos instalados:

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"/></div>
### Paso 2: Configurar la Integración MQTT {#mqtt-integration}

**MQTT** (Message Queuing Telemetry Transport) es un protocolo de mensajería ligero que es crucial para conectar tu SenseCAP Indicator con Home Assistant. Para habilitar esta funcionalidad, debes agregar la [integración MQTT](https://www.home-assistant.io/integrations/mqtt) a tu configuración de Home Assistant.

> Agregar la integración MQTT permite que Home Assistant se comunique sin problemas con tu SenseCAP Indicator, habilitando el intercambio de datos en tiempo real y el control bidireccional. Esta comunicación es esencial para monitorear los datos del sensor y enviar comandos al dispositivo.

Pasos para configurar MQTT:

1. Ve a la página de Integraciones (`Dispositivos y Servicios` -> `Integraciones`) en tu dashboard de Home Assistant.
2. Busca "MQTT" y selecciónalo de la lista (si no se detecta automáticamente).
3. Sigue las instrucciones en pantalla para completar la configuración.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_Devices.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Config_MQTT.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

:::tip
Si estás usando un broker MQTT no oficial (como EMQX Broker) en lugar de Mosquitto, es posible que la detección automática no funcione. En ese caso, deberás ingresar manualmente la IP del broker para establecer la conexión.
:::

### Agregar Usuarios para el Complemento MQTT

Cuando se utiliza el complemento oficial Mosquitto Broker en Home Assistant, puede que necesites configurar credenciales para la conexión MQTT. Esto garantiza una comunicación segura entre tus dispositivos y Home Assistant. Para agregar un usuario:

1. Ve al complemento Mosquitto Broker en tu interfaz de Home Assistant.
2. Busca la sección o pestaña "Usuarios" dentro de la configuración del complemento.
3. Haz clic en el botón "Agregar Usuario" o el icono "+" para crear un nuevo usuario.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png" style={{width:480, height:'auto'}} alt="Add User Button"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png" style={{width:480, height:'auto'}} alt="Create User Form"/></div></td>
    </tr>
  </table>
</div>

[^ref]: [Credenciales MQTT por defecto - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/ba2fe1c04d486f802e12b763ffb6efbc71bb5d80/examples/indicator_ha/main/ha_config.h#L10C1-L14C70)

4. En el formulario de creación de usuario:
   - Ingresa un nombre de usuario (por defecto es `indicator-usr`[^ref]).
   - Crea una contraseña segura (por defecto es `indicator-password`).
   - Opcionalmente, configura permisos específicos si es necesario.
5. Guarda las nuevas credenciales de usuario.

:::tip
Asegúrate de usar estas credenciales al configurar tu SenseCAP Indicator u otros dispositivos MQTT que se conecten a Home Assistant.
:::

Después de agregar el usuario, puede que necesites reiniciar el complemento Mosquitto Broker para que los cambios surtan efecto. Ahora deberías poder establecer una conexión MQTT segura usando estas credenciales.

Recuerda actualizar los ajustes MQTT del SenseCAP Indicator con el nuevo nombre de usuario y contraseña para asegurar su comunicación con Home Assistant.

## Configurar el Proyecto SenseCAP Indicator ESP32 {#build-flash-firmware}

Antes de integrar tu **SenseCAP Indicator** con Home Assistant, necesitas configurar el dispositivo con el firmware adecuado. Sigue estos pasos para descargar, compilar y flashear el proyecto en tu SenseCAP Indicator.

### Paso 1: Descargar el Proyecto

Hay dos proyectos disponibles para integrar el SenseCAP Indicator con Home Assistant. Elige el que mejor se adapte a tus necesidades:

<Tabs groupId="project-ha">
<TabItem value="sensecap-indicator-ha" label="sensecap-indicator-ha" default>

Este proyecto está diseñado específicamente para la integración con Home Assistant.

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Love4yzp/sensecap-indicator-ha" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}>Obten el Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>
</div>

O usa Git para clonar el repositorio:

```bash
git clone https://github.com/Love4yzp/sensecap-indicator-ha
```

</TabItem> 
<TabItem value="SenseCAP_Indicator_ESP32" label="SenseCAP_Indicator_ESP32">

Este proyecto incluye más ejemplos y caracterpisticas para el SenseCAP Indicator.

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}>Obten el Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>
</div>

O usa Git para clonar el repositorio:

```bash
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32
```

</TabItem> 
</Tabs>

### Paso 2: Navega al Directorio del Proyecto

Una vez que hayas descargado o clonado el proyecto, navega a la carpeta apropiada:

<Tabs groupId="project-ha"> 
<TabItem value="sensecap-indicator-ha" label="sensecap-indicator-ha">

```bash
cd sensecap-indicator-ha
```

</TabItem> 
<TabItem value="SenseCAP_Indicator_ESP32" label="SenseCAP_Indicator_ESP32">

```bash
cd SenseCAP_Indicator_ESP32/examples/indicator_ha
```

</TabItem> 
</Tabs>

### Paso 3: Contruye, Flashes, y Monitorea el Proyecto

Ahora estas listo para construir el firmware, flashealo a tu SenseCAP Indicator, y el monitor deberá mostrarte la salida del dispositivo, usa el siguiente comando:

```bash
idf.py -p PORT build flash monitor
```

Remplaza `PORT` con el puerto en el que se encuentra tu dispositivo (Por ejemplo, `COM3` en Windows o `/dev/ttyUSB0` en Linux).

:::tip 
¿No estás seguro del puerto de tu dispositivo?

- En **Windows**: Verifica el "Administrador de dispositivos" en la sección "Puertos (COM y LPT)"
- En **Linux/macOS**: Ejecuta `ls /dev/tty*` en la terminal
:::

Este comando realizará las siguientes acciones:

1. Compilar el proyecto
2. Flashear el firmware en tu SenseCAP Indicator
3. Abrir un monitor serial para mostrar la salida del dispositivo

Para salir del monitor serial, presiona `Ctrl-]`.

### Paso 4: Verificar la Configuración

Después de flashear el firmware, el monitor serial mostrará la salida del SenseCAP Indicator. Busca mensajes que indiquen una conexión exitosa a tu red Wi-Fi y al broker MQTT.

:::caution 
Asegúrate de que tu SenseCAP Indicator esté conectado a la **misma red** que tu instancia de Home Assistant, y de que el **broker MQTT** esté correctamente configurado y accesible. 
:::

Una vez que hayas flasheado y verificado con éxito el firmware en tu SenseCAP Indicator, ya estás listo para integrarlo en Home Assistant utilizando la integración MQTT.

A continuación, configuraremos Home Assistant para que reconozca y se comunique con tu SenseCAP Indicator.

## Agregar Dispositivos MQTT {#add-mqtt-devices}

Después de configurar la integración MQTT en Home Assistant, el siguiente paso es agregar los dispositivos MQTT. Este proceso implica configurar Home Assistant para reconocer y comunicarse con tu SenseCAP Indicator mediante MQTT.

### Paso 1: Agregar Entidades del Indicator

Para agregar las entidades del SenseCAP Indicator a Home Assistant, necesitas modificar el archivo `configuration.yaml`. Este archivo es fundamental para definir cómo interactúa Home Assistant con tus dispositivos.

:::tip
Si estás usando **Home Assistant Yellow** o cualquier sistema con el complemento **File editor**, puedes modificar fácilmente el archivo `configuration.yaml` desde la interfaz web. En otras configuraciones, como Home Assistant Container, deberás editar el archivo desde el terminal.
:::

Para modificar el archivo `configuration.yaml`:

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_File_editor.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_Choose_config.png" style={{width:480, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_File_edit.png" style={{width:480, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

1. Dirígete al complemento **File editor** desde el panel de Home Assistant.
2. Selecciona el archivo `configuration.yaml` de la lista de archivos.
3. Agrega la siguiente configuración MQTT al archivo:

<details>
<summary>Haz clic para expandir y copiar la configuración MQTT para el SenseCAP Indicator</summary>

```yaml
# Example configuration.yaml entry | SenseCAP Indicator MQTT Configuration
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

1. Guarda los cambios en el archivo `configuration.yaml`.

:::caution
Si tu instalación de Home Assistant no admite complementos (por ejemplo, Home Assistant Container), deberás modificar el archivo `configuration.yaml` mediante una conexión por terminal o SSH. 
:::

### Paso 2: Aplicar los Cambios de Configuración

Después de modificar el archivo `configuration.yaml`, necesitas aplicar los cambios:

1. Ve a `Herramientas para desarrolladores` en el panel de Home Assistant.
2. Haz clic en la pestaña "YAML".
3. Recarga la configuración haciendo clic en **"RELOAD ALL YAML CONFIGURATION"**.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png" alt="Configuración YAML en Herramientas para Desarrolladores"/></div>

:::note
Si algo sale mal, puedes:

- Hacer clic en el botón **"Check Configuration"** para verificar tus cambios.
- Si la verificación es exitosa, haz clic en **"Restart"** para aplicar la nueva configuración.

Después de reiniciar, Home Assistant reconocerá las entidades del SenseCAP Indicator y deberías poder verlas en tu panel.  
Si las entidades no aparecen de inmediato, espera unos minutos a que se complete el proceso de descubrimiento MQTT.

Recuerda asegurarte de que tu SenseCAP Indicator esté correctamente configurado para publicar sus datos en los temas MQTT correctos definidos en la configuración.
:::

Siguiendo estos pasos, has agregado con éxito tus dispositivos **SenseCAP Indicator** a **Home Assistant** vía **MQTT**.  
Ahora puedes utilizar estas entidades en tus automatizaciones, scripts y paneles para una experiencia de hogar inteligente más integrada.

## Configurar el Panel (Dashboard) {#set-up-dashboard}

El paso final en la integración de tu SenseCAP Indicator con Home Assistant es configurar un **panel personalizado**. Esto te permitirá visualizar y controlar fácilmente los datos y funciones del dispositivo.

### Crear un Nuevo Panel (Opcional)

Si deseas crear un panel dedicado para tu SenseCAP Indicator:

1. Ve a `Ajustes -> Paneles` en la barra lateral de Home Assistant.
2. Haz clic en el botón **"Agregar Panel"**.
3. Asigna un título (por ejemplo, "SenseCAP Indicator") y selecciona un ícono.
4. Haz clic en **"Crear"** para finalizar tu nuevo panel.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png" style={{width:480, height:'auto'}} alt="Crear Panel"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png" style={{width:480, height:'auto'}} alt="Nuevo Panel"/></div></td>
    </tr>
  </table>
</div>

### Configurar el Panel

Para agregar las entidades del SenseCAP Indicator a tu panel:

1. Abre el panel que deseas editar.
2. Haz clic en el menú de tres puntos en la esquina superior derecha y selecciona **"Editar Panel"**.
3. Haz clic en el botón **"TOMAR CONTROL"** para habilitar la configuración manual.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png" style={{width:480, height:'auto'}} alt="Editar Panel"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png" style={{width:480, height:'auto'}} alt="Tomar Control"/></div></td>
    </tr>
  </table>
</div>

4. En el editor del panel, haz clic nuevamente en el menú de tres puntos y selecciona **"Editor de configuración en bruto"**.
5. Reemplaza el contenido YAML existente con la siguiente configuración:

<details>
<summary>Haz clic para copiar el YAML del panel y cambiar la interfaz</summary>

> Nota: Esto **no es** para el archivo `configuration.yaml`.

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

:::caution
Esta configuración YAML es **específica para el panel (dashboard)** y **no debe agregarse** al archivo `configuration.yaml`.
:::

1. Haz clic en **"GUARDAR"** para aplicar los cambios.

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

¡Felicidades! Has configurado con éxito tu **panel de Home Assistant** para mostrar y controlar tu **SenseCAP Indicator**.  
Ahora puedes monitorear los niveles de CO₂, temperatura, humedad y TVOC, así como controlar diversos interruptores directamente desde la interfaz de Home Assistant.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"/></div>

## Recursos

1. **Demo SDK**: El SDK de demostración para SenseCAP Indicator está disponible en [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32).
2. **Archivo `indicator_ha.c`**: Contiene las funciones principales para la integración con Home Assistant. Puedes verlo [aquí](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c).
3. **Guía del Usuario**: Proporciona información detallada sobre el software y hardware del SenseCAP Indicator. Léela [aquí](/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator).
4. **Guía de Instalación de Home Assistant**: Si eres nuevo con Home Assistant, esta guía te ayudará a instalarlo y configurarlo. Encuéntrala [aquí](https://www.home-assistant.io/installation/).
5. **Guía de inicio con ESP-IDF**: Proporciona los pasos completos para configurar y usar ESP-IDF para compilar proyectos. Accede a ella [aquí](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html).
6. [Conceptos y terminología de Home Assistant](https://www.home-assistant.io/getting-started/concepts-terminology/)

## Referencia

- 🔗 **[Enlace]** [Home Assistant and MQTT: 4 Things You Could Build | EMQ (emqx.com)](https://www.emqx.com/en/blog/home-assistant-and-mqtt-4-things-you-could-build#home-assistant-mqtt-with-emqx)

## Soporte Técnico

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos para ayudarte!**

Si encuentras algún problema o tienes preguntas durante el proceso, no dudes en contactar con nuestro soporte técnico. ¡Siempre estaremos encantados de ayudarte!

Visita nuestro [Canal oficial de Discord de Seeed](https://discord.gg/kpY74apCWj) para hacer tus preguntas o participa en las [discusiones de GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) para compartir tus experiencias.

