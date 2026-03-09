---
description: Describe cómo conectar Watcher a Home Assistant localmente.
title: Integrar Watcher a Home Assistant
image: https://files.seeedstudio.com/wiki/watcher_ha/10.png
slug: /integrate_watcher_to_ha
sidebar_position: 1
last_update:
  date: 10/11/2025
  author: Twelve
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/integrate_watcher_to_ha/
---

# Integrar Watcher a Home Assistant

:::caution Nota
Este tutorial no se aplica a la versión de firmware Xiaozhi.  
Para el firmware Xiaozhi, visite la [Guía de Xiaozhi Watcher](https://wiki.seeedstudio.com/es/ha_dify_watcher_llms/) para obtener instrucciones detalladas.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

La integración de la inteligencia artificial (IA) ha revolucionado el mundo de la tecnología de hogar inteligente, y Watcher, un dispositivo de vanguardia impulsado por IA, ha surgido como un cambio de juego. Al integrar sin problemas Watcher con Home Assistant, una popular plataforma de automatización del hogar de código abierto, los usuarios pueden desbloquear un nuevo nivel de conveniencia, seguridad y eficiencia en sus hogares inteligentes.

En esta wiki integral, te guiaremos a través del proceso de integrar Watcher con Home Assistant, permitiéndote aprovechar todo el potencial de la IA en tu configuración de hogar inteligente. Ya seas un usuario experimentado de Home Assistant o un recién llegado a la automatización del hogar, esta integración abre un reino de posibilidades emocionantes, permitiendo que tu hogar se vuelva más inteligente, más receptivo y adaptado a tus necesidades únicas.

A continuación se presenta el marco de contenido principal de este artículo.

1. [Instalación del plugin HACS](#instalación-del-plugin-hacs): Instalar Home Assistant Community Store (HACS) para habilitar la instalación del plugin SenseCraft de Seeed Studio dentro de Home Assistant.
2. [Instalación del plugin SenseCraft](#instalación-del-plugin-sensecraft): Instalar el plugin SenseCraft de Seeed Studio, que permite el despliegue rápido de los productos de Seeed Studio en Home Assistant.
3. [Integrar SenseCAP Watcher en Home Assistant](#integrar-sensecap-watcher-en-home-assistant): Integrar SenseCAP Watcher en Home Assistant y configurar un panel visual para la configuración.

## Comenzando

Antes de que comience el contenido del tutorial de este artículo, es posible que necesites tener el siguiente hardware listo.

### Materiales Requeridos

<div class="table-center">
  <table align="center">
    <tr>
      <th>SenseCAP Watcher</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/1.png" style={{width:180, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green es la forma más fácil y centrada en la privacidad de automatizar tu hogar. Ofrece una configuración sin esfuerzo y te permite controlar todos los dispositivos inteligentes con un solo sistema, donde todos los datos se almacenan localmente por defecto. Esta placa se beneficia del próspero ecosistema de Home Assistant y será mejorada cada mes por código abierto.

Recomendamos usar Home Assistant Green como el host de Home Assistant para este tutorial, o puedes usar cualquier host de Home Assistant con un Supervisor.

## Instalación del plugin HACS

### Paso 1. Abrir el Modo Avanzado en Home Assistant

Para desbloquear todo el potencial de Home Assistant y obtener acceso a características avanzadas, puedes habilitar el "Advanced Mode" en la interfaz de usuario.

Navega a tu [interfaz web de Home Assistant](http://homeassistant.local:8123). Haz clic en el ícono de tu perfil en la esquina inferior izquierda de la barra lateral de Home Assistant. En tu página de perfil, desplázate hacia abajo para encontrar el interruptor **Advanced Mode**. Cambia el interruptor a la posición de encendido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Instalar Terminal & SSH

Haz clic en **Settings** en la barra lateral para acceder al menú de configuración. Haz clic en **Add-ons** para acceder a la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

Usa la barra de búsqueda o navega a través de los complementos disponibles para encontrar **Terminal & SSH**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

Una vez que hayas localizado **Terminal & SSH**, haz clic en él para ver los detalles. En la página del complemento, verás una descripción general, documentación y opciones de configuración. Para instalar el complemento, haz clic en el botón **Install**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Instalar HACS

Encuentra el **Terminal & SSH** recientemente descargado en la barra lateral. En la terminal, navega al directorio config, que es la raíz de tu configuración de Home Assistant:

```
cd /config
```

Ejecuta el siguiente comando para descargar y ejecutar el script de instalación de HACS:

```
wget -q -O - https://install.hacs.xyz | bash -
```

Después de que el script de instalación haya terminado, necesitas reiniciar Home Assistant para aplicar los cambios. Puedes reiniciar Home Assistant a través de la interfaz yendo a **Settings > System > Restart**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

Después del reinicio, haz clic en **Settings** en la barra lateral para abrir el menú de configuración. Dentro del menú de configuración, navega a **Devices & Services**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **ADD INTEGRATION** para agregar una nueva integración a tu configuración de Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

En la barra de búsqueda, escribe **HACS** para buscar la integración de Home Assistant Community Store.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

Si se encuentra HACS, debería aparecer en la lista de integraciones disponibles. Haz clic en él para iniciar el proceso de instalación.

Puede aparecer un acuerdo de licencia o términos de servicio. Lee el acuerdo cuidadosamente, y si estás de acuerdo con los términos, marca todas las casillas para indicar tu acuerdo. Haz clic en **SUBMIT** para proceder con la instalación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

A continuación, se te pedirá que inicies sesión con tu cuenta de GitHub. Esto es necesario porque HACS se integra con GitHub para gestionar la instalación de integraciones y plugins creados por la comunidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

Sigue las instrucciones para autorizar a Home Assistant a acceder a tu cuenta de GitHub. Esto típicamente involucrará ingresar un código de verificación proporcionado por GitHub para confirmar tu identidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Una vez que hayas autorizado a Home Assistant a usar tu cuenta de GitHub, HACS terminará de instalarse.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

Es posible que necesites reiniciar Home Assistant para que HACS se integre completamente en tu sistema.

## Instalación del plugin SenseCraft

### Paso 4. Instalación del plugin SenseCraft a través de HACS

Busca HACS en la barra lateral y haz clic en él para abrir la interfaz de HACS. En la esquina inferior derecha, encontrarás un botón de menú (tres puntos o un signo más, dependiendo de tu versión de HACS). Haz clic en **Custom repositories**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

Aparecerá un cuadro de diálogo pidiéndote que ingreses la URL del repositorio. Aquí, ingresarás la URL del repositorio personalizado para la integración SenseCraft. Después de ingresar la URL, selecciona la categoría (para la integración SenseCraft, seleccionarías **Integration**).

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **Add**. El repositorio ahora está agregado a tu HACS, y deberías poder encontrar la integración SenseCraft en la lista bajo **Integrations**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

Localiza la integración SenseCraft y haz clic en "DOWNLOAD".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

En este punto, hemos completado exitosamente la instalación del plugin SenseCraft.

## Integrar SenseCAP Watcher en Home Assistant

### Paso 5. Agregar Watcher desde SenseCraft

En la página **Settings**, elige **Devices & Services**.

Luego haz clic en el botón **ADD INTEGRATION** en la esquina inferior derecha y busca **SenseCraft**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en SenseCraft y selecciona Action como **Add device using host/id (局域网集成)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

:::note
Actualmente, **Add devices using SenseCraft Account（账号集成）** no está disponible.
:::

Luego selecciona **Watcher** en las opciones de dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/4.png" style={{width:500, height:'auto'}}/></div>

En la siguiente página, por favor ingresa el EUI del dispositivo Watcher, puedes encontrar el EUI del Watcher dentro de la [configuración del Watcher en la APP SenseCraft](https://wiki.seeedstudio.com/es/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/5.png" style={{width:500, height:'auto'}}/></div>

:::note
¡Por favor asegúrate de que el EUI esté todo en mayúsculas!
:::

Después de **SUBMIT**, el componente de Home Assistant del Watcher se agregará automáticamente para mostrarse dentro del Dashboard, que debería estar en un estado sin datos por ahora.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/6.png" style={{width:1000, height:'auto'}}/></div>

### Paso 6. Colocar la tarea y configurar el bloque de mensaje HTTP

Para que los datos del Watcher lleguen a Home Assistant, necesitas tener el Watcher en un estado donde la tarea esté ejecutándose y configurar el bloque de mensaje HTTP para enviar un flujo de alarmas a Home Assistant.

Por ejemplo, ahora estoy colocando una tarea en el Watcher para detectar si un gato está comiendo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div><br />

Dentro de **Detail Config**, encuentra 'If yes, then do the following' y marca la casilla **HTTP Push Notification** de abajo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/7.png" style={{width:250, height:'auto'}}/></div><br />

Luego haz clic en el botón **Go Setup** y configura la información de Home Assistant allí para asegurar que los datos puedan llegar a Home Assistant.

- **HTTP URL**: Completa la dirección IP completa de Home Assistant, número de puerto 8887. ej. `http://192.168.1.151:8887`.

- **HTTP Token**: deja espacios en blanco al escribir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/8.png" style={{width:250, height:'auto'}}/></div><br />

Después de confirmar que está completado correctamente, haz clic en Update Now en la parte inferior. luego la tarea se envía al Watcher.

A continuación, cuando el Watcher detecte que tu gato está comiendo, activará una alarma y reportará los datos del sensor a Home Assistant. basándote en esto, eres libre de configurar la automatización de tu hogar inteligente a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

<details>

<summary>Haz clic para ver el código de ejemplo del Dashboard</summary>

```javascript
views:
  - type: sections
    title: Home Assistant
    path: home
    icon: mdi:home-assistant
    sections:
      - cards:
          - type: tile
            entity: sensor.air_humidity
            name: SenseCAP Watcher Air Humidity
            color: blue
            show_entity_picture: true
          - type: tile
            entity: sensor.co2
            name: SenseCAP Watcher CO2
            color: deep-orange
          - type: tile
            entity: sensor.temperature
            name: SenseCAP Watcher Air Temperature
            color: purple
            show_entity_picture: true
          - type: tile
            entity: sensor.alarm
            name: SenseCAP Watcher Alarm Message
            color: red
            show_entity_picture: true
          - type: picture
            image_entity: image.alarm_image
```

</details>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
