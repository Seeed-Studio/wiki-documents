---
description: SenseCAP Indicator - Home Assistant Desarrollo de Aplicaciones
title: Home Assistant - SenseCAP Indicator
keywords:
- SenseCAP Indicator
- Home Assistant
- ESP32S3
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/indicator-ha-thumbnail.jpg
slug: /es/SenseCAP_Indicator_Application_Home_Assistant
sidebar_position: 1
last_update:
  date: 10/09/2024
  author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SenseCAP Indicator - Home Assistant Desarrollo de Aplicaciones

## Introducción

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/PKMcutZDjDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
<a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">
        Consigue Uno Ahora 🖱️
</a>
</div>

Desbloquea todo el potencial de tu hogar inteligente integrando el SenseCAP Indicator con Home Assistant. Esta poderosa combinación te permite monitorear y controlar tu entorno con una facilidad sin precedentes.

Aprende cómo integrar sin problemas tu SenseCAP Indicator con Home Assistant usando MQTT en esta guía completa.

Antes de comenzar, exploremos tus opciones para configurar Home Assistant. Home Assistant puede instalarse fácilmente en dos opciones de hardware dedicadas:

:::note
Por supuesto, tienes varias opciones para instalar HA siguiendo [Installation - Home Assistant (home-assistant.io)](https://www.home-assistant.io/installation/).
:::

<Tabs>
<TabItem value='Home Assistant Green'>

<div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA/HA_Green.png" style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> El asequible **[Home Assistant Green](https://www.home-assistant.io/green)** es la forma más fácil de comenzar a usar Home Assistant. Es plug-and-play y viene con Home Assistant ya instalado.

</TabItem>

<TabItem value='Home Assistant Yellow'>

<div align="center"><img width={680} src="https://www.home-assistant.io/images/yellow/home-assistant-yellow-exploded-and-labeled.png"style={{ width: 680, height: 'auto', "border-radius": '6.66px' }}/></div>

> **[Home Assistant Yellow](https://www.home-assistant.io/yellow)** viene preensamblado en una carcasa personalizada con un Raspberry Pi Compute Module 4 (CM4) y un disipador de calor personalizado para operación silenciosa sin ventilador. El CM4 es una versión sin inalámbrico y tiene 2 GB de RAM y 16 GB de almacenamiento eMMC. Preinstalado con Home Assistant.

</TabItem>
</Tabs>

Para maximizar las capacidades de Home Assistant, recomendamos usar Home Assistant OS o Home Assistant Supervised. Ambas opciones ofrecen características avanzadas y mayores opciones de personalización, permitiéndote adaptar tu experiencia de hogar inteligente a tus necesidades exactas.

Ahora, comencemos con el proceso de integración. Sigue estos tres pasos principales para hacer que tu SenseCAP Indicator funcione con Home Assistant:

1. [Instalar Home Assistant OS](#install_HA)
   1. [Instalar Complementos](#mqtt-addons)
   2. [Configurar Integración MQTT](#mqtt-integration)
2. [Construir y Flashear Firmware](#build-flash-firmware)
3. [Agregar Dispositivos MQTT](#add-mqtt-devices)
4. [Configurar un Panel de Control](#set-up-dashboard)

## Prerrequisitos

Antes de comenzar, asegúrate de haber leído la [Guía del Usuario](/es/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator) de la placa SenseCAP Indicator para familiarizarte con su información de software y hardware.

## Instalar el SO de Home Assistant {#install_HA}

> Home Assistant es una potente plataforma de automatización del hogar de código abierto que se centra en la privacidad y el control local. Ofrece un marco personalizable y flexible para gestionar y automatizar todos tus dispositivos domésticos desde una sola plataforma unificada.

Con **Home Assistant Yellow** puedes seguir las instrucciones proporcionadas [aquí](https://www.home-assistant.io/installation/yellow). Además, para ejecutar en cualquier tipo de Raspberry Pi o un servidor local, puedes seguir esta [instrucción](https://www.home-assistant.io/installation/) paso a paso.

Una vez que hayas instalado, llegar a esta página significa que puedes pasar al siguiente paso.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Installed.png"/></div>

<br />

:::tip ¿No sabes cómo incorporar Home Assistant?
Una vez que hayas instalado Home Assistant, consulta [Incorporación de Home Assistant - Home Assistant](https://www.home-assistant.io/getting-started/onboarding/) para más detalles.
:::

### Paso 1: Instalar Complementos {#mqtt-addons}

:::caution Función de complementos requerida
Home Assistant Yellow viene con **Sistema Operativo de Home Assistant** que puede instalar fácilmente complementos. Sin embargo, **Home Assistant Container** no soporta complementos, lo que significa que necesitas instalar una aplicación de broker MQTT aparte de Home Assistant. Para más detalles, consulta los [Métodos de instalación](https://www.home-assistant.io/installation/#compare-installation-methods).
:::

El siguiente paso es instalar el **Mosquitto Broker** y **File Editor**. **Mosquitto** es un broker de mensajes de código abierto que implementa el protocolo MQTT mientras que **File Editor** te permite modificar el archivo `configuration.yaml` sin acceder a la terminal.

En Home Assistant Yellow, puedes instalar el Mosquitto Broker y File Editor usando la función de Complementos.

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

Ahora tenemos dos complementos.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Two_Adds.png"/></div>

### Paso 2: Configurar la Integración MQTT {#mqtt-integration}

MQTT (Message Queuing Telemetry Transport) es un protocolo de mensajería ligero que es crucial para conectar tu placa SenseCAP Indicator a Home Assistant. Para habilitar esta funcionalidad, necesitas añadir la [integración MQTT](https://www.home-assistant.io/integrations/mqtt) a tu configuración de Home Assistant.

> Añadir la integración MQTT permite que Home Assistant se comunique sin problemas con tu placa SenseCAP Indicator, habilitando el intercambio de datos en tiempo real y el control. Esta comunicación bidireccional es esencial para monitorear datos de sensores y enviar comandos a tu dispositivo.

Para configurar la integración MQTT:

1. Navega a la página de Integraciones (`Dispositivos y Servicios` -> `Integraciones`) en tu panel de Home Assistant.
2. Busca "MQTT" y selecciónalo de la lista. (Si no se descubre automáticamente,)
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
Si estás usando un broker MQTT no oficial (como EMQX Broker) en lugar del broker Mosquitto estándar, el descubrimiento automático puede no funcionar. En este caso, necesitarás ingresar manualmente la dirección IP del broker para establecer la conexión. Esto asegura que Home Assistant pueda comunicarse con tu configuración MQTT personalizada.
:::

### Agregar Usuarios para el Add-on MQTT

Cuando uses el add-on oficial Mosquitto Broker en Home Assistant, puede que necesites configurar credenciales para la conexión MQTT. Este paso asegura una comunicación segura entre tus dispositivos y Home Assistant. Aquí te mostramos cómo agregar un usuario:

1. Navega al add-on del broker Mosquitto en tu interfaz de Home Assistant.
2. Busca la sección o pestaña "Users" dentro de la configuración del add-on.
3. Haz clic en el botón "Add User" o "+" para crear un nuevo usuario.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_User.png" style={{width:480, height:'auto'}} alt="Add User Button"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Create_User.png" style={{width:480, height:'auto'}} alt="Create User Form"/></div></td>
    </tr>
  </table>
</div>

[^ref]: [MQTT credencial predeterminada - GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/ba2fe1c04d486f802e12b763ffb6efbc71bb5d80/examples/indicator_ha/main/ha_config.h#L10C1-L14C70)

4. En el formulario de creación de usuario:
   - Ingresa un nombre de usuario de tu elección. el predeterminado es `indicator-usr`[^ref].
   - Crea una contraseña segura. la predeterminada es `indicator-password`.
   - Opcionalmente, puedes establecer permisos específicos si es necesario.
5. Guarda las credenciales del nuevo usuario.

:::tip
Asegúrate de usar estas credenciales al configurar tu SenseCAP Indicator o cualquier otro dispositivo MQTT para conectarse a Home Assistant.
:::

Después de agregar el usuario, es posible que necesites reiniciar el complemento del broker Mosquitto para que los cambios surtan efecto. Ahora deberías poder establecer una conexión MQTT segura usando estas credenciales.

Recuerda actualizar la configuración MQTT de tu SenseCAP Indicator con el nuevo nombre de usuario y contraseña para asegurar que pueda comunicarse con Home Assistant.

## Configuración del Proyecto ESP32 del SenseCAP Indicator {#build-flash-firmware}

Antes de integrar tu SenseCAP Indicator con Home Assistant, necesitas configurar el dispositivo con el firmware apropiado. Sigue estos pasos para descargar, compilar y flashear el proyecto a tu SenseCAP Indicator.

### Paso 1: Descargar el Proyecto

Hay dos proyectos disponibles para integrar SenseCAP Indicator con Home Assistant. Elige el que mejor se adapte a tus necesidades:

<Tabs groupId="project-ha">
<TabItem value="sensecap-indicator-ha" label="sensecap-indicator-ha" default>

Este proyecto está específicamente diseñado para la integración con Home Assistant.

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Love4yzp/sensecap-indicator-ha" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}>Obtener El Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>
</div>

O usa Git para clonar el repositorio:

```bash
git clone https://github.com/Love4yzp/sensecap-indicator-ha
```

</TabItem>
<TabItem value="SenseCAP_Indicator_ESP32" label="SenseCAP_Indicator_ESP32">

Este proyecto incluye más ejemplos y características para el SenseCAP Indicator.

<div class="github_container" style={{textAlign: 'center'}}>
<a class="github_item" href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}>Obtener El Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>

</a>
</div>

O usa Git para clonar el repositorio:

```bash
git clone https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32
```

</TabItem>
</Tabs>

### Paso 2: Navegar al Directorio del Proyecto

Una vez que hayas descargado o clonado el proyecto, navega al directorio apropiado:

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

### Paso 3: Compilar, Flashear y Monitorear el Proyecto

Ahora estás listo para compilar el firmware, flashearlo a tu SenseCAP Indicator, y monitorear la salida del dispositivo. Usa el siguiente comando:

```bash
idf.py -p PORT build flash monitor
```

Reemplaza `PORT` con el puerto apropiado para tu dispositivo (por ejemplo, `COM3` en Windows o `/dev/ttyUSB0` en Linux).

:::tip
Si no estás seguro sobre el puerto de tu dispositivo:

- En Windows: Verifica el Administrador de dispositivos bajo "Puertos (COM y LPT)"
- En Linux/macOS: Ejecuta `ls /dev/tty*` en la terminal

:::

Este comando:

1. Compilará el proyecto
2. Grabará el firmware en tu SenseCAP Indicator
3. Abrirá un monitor serie para mostrar la salida del dispositivo

Para salir del monitor serie, presiona `Ctrl-]`.

### Paso 4: Verificar la Configuración

Después de grabar el firmware, el monitor serie mostrará la salida de tu SenseCAP Indicator. Busca mensajes que indiquen una conexión exitosa a tu red Wi-Fi y al broker MQTT.

:::caution
Asegúrate de que tu SenseCAP Indicator esté conectado a la misma red que tu instancia de Home Assistant, y que tu broker MQTT esté configurado correctamente y sea accesible.
:::

Una vez que hayas grabado y verificado exitosamente el firmware en tu SenseCAP Indicator, estarás listo para proceder con la integración en Home Assistant usando la integración MQTT.

A continuación, configuraremos Home Assistant para reconocer y comunicarse con tu SenseCAP Indicator.

## Agregar Dispositivos MQTT {#add-mqtt-devices}

Después de configurar la integración MQTT en Home Assistant, el siguiente paso es agregar dispositivos MQTT. Este proceso implica configurar Home Assistant para reconocer y comunicarse con tu placa SenseCAP Indicator a través de MQTT.

### Paso 1: Agregar Entidades del Indicator

Para agregar las entidades del SenseCAP Indicator a Home Assistant, necesitas modificar el archivo `configuration.yaml`. Este archivo es crucial para definir cómo Home Assistant interactúa con tus dispositivos.

:::tip
Si estás usando Home Assistant Yellow o cualquier sistema con el complemento **File editor**, puedes modificar fácilmente el archivo `configuration.yaml` a través de la interfaz web. Para otras configuraciones, como Home Assistant Container, puede que necesites modificar el archivo a través del acceso por terminal.
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

1. Navega al complemento File editor en tu panel de Home Assistant.
2. Selecciona el archivo `configuration.yaml` de la lista de archivos.
3. Agrega la siguiente configuración MQTT al archivo:

<details>
<summary>Haz clic para expandir y copiar la configuración MQTT para SenseCAP Indicator</summary>

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
Si tu configuración de Home Assistant no soporta complementos (por ejemplo, Home Assistant Container), necesitarás modificar el archivo `configuration.yaml` a través de una conexión terminal o SSH.
:::

### Paso 2: Aplicar los Cambios de Configuración

Después de modificar el archivo `configuration.yaml`, necesitas aplicar los cambios:

1. Navega a las `Herramientas de Desarrollador` en tu panel de Home Assistant.
2. Encuentra y haz clic en la pestaña "YAML".
3. Recarga la configuración mediante `TODA LA CONFIGURACIÓN YAML`.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_ALL_YAML.png" alt="Configuración YAML en Herramientas de Desarrollador"/></div>

:::note
si algo salió mal, podrías

- Hacer clic en el botón "Verificar Configuración" para verificar tus cambios.
- Si la verificación de configuración pasa, haz clic en el botón "Reiniciar" para aplicar la nueva configuración.

Después de reiniciar, Home Assistant reconocerá las entidades de tu SenseCAP Indicator, y deberías poder verlas en tu panel. Si las entidades no aparecen inmediatamente, es posible que necesites esperar unos minutos para que el proceso de descubrimiento MQTT se complete.

Recuerda asegurarte de que tu SenseCAP Indicator esté configurado correctamente para publicar sus datos en los temas MQTT correctos como se define en la configuración.
:::

Siguiendo estos pasos, has agregado exitosamente tus dispositivos SenseCAP Indicator a Home Assistant vía MQTT. Ahora puedes usar estas entidades en tus automatizaciones, scripts y panel para una experiencia de hogar inteligente más integrada.

## Configurar Panel {#set-up-dashboard}

El paso final en la integración de tu SenseCAP Indicator con Home Assistant es configurar un panel personalizado. Esto te permitirá visualizar y controlar los datos y funciones de tu dispositivo fácilmente.

### Crear un Nuevo Panel (Opcional)

Si quieres crear un panel dedicado para tu SenseCAP Indicator:

1. Navega a `Configuración -> Paneles` en la barra lateral de Home Assistant.
2. Haz clic en el botón "Agregar Panel".
3. Establece un título (por ejemplo, "SenseCAP Indicator") y elige un icono.
4. Haz clic en "Crear" para finalizar tu nuevo panel.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Add_dashboard_info.png" style={{width:480, height:'auto'}} alt="Crear Panel"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard.png" style={{width:480, height:'auto'}} alt="Nuevo Panel"/></div></td>
    </tr>
  </table>
</div>

### Configurando el Dashboard

Para añadir entidades de SenseCAP Indicator a tu dashboard:

1. Abre el dashboard que quieres editar.
2. Haz clic en el menú de tres puntos en la esquina superior derecha y selecciona "Edit Dashboard".
3. Haz clic en el botón "TAKE CONTROL" para habilitar la configuración manual.

<div class="table-center">
  <table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_To_SenseCAP.png" style={{width:480, height:'auto'}} alt="Edit Dashboard"/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard.png" style={{width:480, height:'auto'}} alt="Take Control"/></div></td>
    </tr>
  </table>
</div>

4. En el editor del dashboard, haz clic en el menú de tres puntos nuevamente y selecciona "Raw configuration editor".
5. Reemplaza el contenido YAML existente con la siguiente configuración:

<details>

<summary>Haz clic para copiar el YAML del Dashboard para cambiar la UI</summary>

> Nota: Esto no es para `Configuration.YAML`.

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
Esta configuración YAML es específicamente para el panel de control y no debe añadirse a tu archivo `configuration.yaml`.
:::

1. Haz clic en "SAVE" para aplicar los cambios.

<div class="table-center">
   <table align="center">
      <tr>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Edit_Dashboard_config.png" style={{width:480, height:'auto'}} alt="Raw Configuration Editor"/></div>
         </td>
         <td>
            <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_Dashboard_Save.png" style={{width:480, height:'auto'}} alt="Save Configuration"/></div>
         </td>
      </tr>
   </table>
</div>

¡Felicidades! Has configurado exitosamente tu panel de Home Assistant para mostrar y controlar tu SenseCAP Indicator. Ahora puedes monitorear los niveles de CO2, temperatura, humedad y TVOC, así como controlar varios interruptores directamente desde tu interfaz de Home Assistant.

<div align="center"><img width={480} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/HA_data_show.gif"/></div>

## Recursos

1. **SDK de Demostración**: El SDK de Demostración para el SenseCAP Indicator está disponible en [GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32).
2. **Archivo `indicator_ha.c`**: Este archivo contiene las funciones principales para la integración con Home Assistant. Puedes verlo [aquí](https://raw.githubusercontent.com/Seeed-Solution/SenseCAP_Indicator_ESP32/main/examples/indicator_ha/main/model/indicator_ha.c).
3. **Guía del Usuario**: La Guía del Usuario proporciona información detallada sobre el software y hardware de la Placa SenseCAP Indicator. Puedes leerla [aquí](/es/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator).
4. **Guía de Instalación de Home Assistant**: Si eres nuevo en Home Assistant, esta guía te ayudará a instalarlo y configurarlo. Puedes encontrarla [aquí](https://www.home-assistant.io/installation/).
5. **Guía de Introducción para ESP-IDF**: Esta guía proporciona pasos completos para configurar y usar ESP-IDF para construir proyectos. Puedes acceder a ella [aquí](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html).
6. [Conceptos y terminología de Home Assistant](https://www.home-assistant.io/getting-started/concepts-terminology/)

## Referencia

- 🔗 **[Enlace]** [Home Assistant y MQTT: 4 Cosas Que Podrías Construir | EMQ (emqx.com)](https://www.emqx.com/en/blog/home-assistant-and-mqtt-4-things-you-could-build#home-assistant-mqtt-with-emqx)

## Soporte Técnico

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para asistirte!**

Si encuentras algún problema o tienes preguntas mientras sigues este tutorial, no dudes en contactar a nuestro soporte técnico. ¡Siempre estamos aquí para ayudar!

Visita nuestro [Canal Oficial de Discord de Seeed](https://discord.gg/kpY74apCWj) para hacer tus preguntas o las [discusiones de GitHub](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) para compartir todo lo que quieras!
