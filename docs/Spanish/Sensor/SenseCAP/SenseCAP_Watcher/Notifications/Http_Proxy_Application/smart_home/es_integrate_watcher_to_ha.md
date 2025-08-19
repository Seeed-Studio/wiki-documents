---
description: Describes how to plug Watcher into Home Assistant locally.
title: Integración de Watcher a Home Assistant
image: https://files.seeedstudio.com/wiki/watcher_ha/10.png
slug: /es/integrate_watcher_to_ha
sidebar_position: 1
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Integrar Watcher con Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

La integración de la inteligencia artificial (IA) ha revolucionado el mundo de la domótica, y Watcher, un dispositivo avanzado potenciado por IA, se ha convertido en un elemento clave. Integrando Watcher con Home Assistant, la popular plataforma de automatización open-source, podrás lograr un hogar más inteligente, seguro y eficiente.

En esta guía completa te acompañamos paso a paso para integrar Watcher con Home Assistant, liberando todo el potencial de la IA en tu hogar inteligente. Ya seas un usuario experimentado o nuevo en automatización, esta integración abre un mundo de posibilidades para un hogar más personalizado y reactivo.

## Contenido principal

1. [Instalar el plugin HACS](#instalar-el-plugin-hacs): Instalar Home Assistant Community Store para poder añadir el plugin SenseCraft de Seeed Studio en Home Assistant.  
2. [Instalar el plugin SenseCraft](#instalar-el-plugin-sensecraft): Añadir el plugin SenseCraft que facilita la integración rápida de productos Seeed Studio.  
3. [Integrar SenseCAP Watcher en Home Assistant](#integrar-sensecap-watcher-en-home-assistant): Integrar SenseCAP Watcher y configurar un panel visual para control.

## Primeros pasos

Antes de comenzar con el tutorial, asegúrate de contar con el hardware siguiente:

### Materiales requeridos

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
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green es una forma fácil y privada de automatizar tu hogar, con instalación sencilla y almacenamiento local de datos. Es recomendable para esta guía, aunque cualquier host de Home Assistant con Supervisor sirve.

## Instalar el plugin HACS

### Paso 1. Activar Modo Avanzado en Home Assistant

Para acceder a funciones avanzadas en Home Assistant, activa el "Modo Avanzado" en la interfaz.

1. Abre la interfaz web de Home Assistant en [http://homeassistant.local:8123](http://homeassistant.local:8123).  
2. Haz clic en tu icono de perfil (esquina inferior izquierda en la barra lateral).  
3. En la página de perfil, busca la opción **Modo Avanzado** y actívala.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Instalar Terminal & SSH

1. En la barra lateral, haz clic en **Configuración**.  
2. Luego, en **Complementos** para abrir la tienda de complementos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

3. Usa la barra de búsqueda para encontrar **Terminal & SSH**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

4. Haz clic en **Terminal & SSH** y luego en el botón **Instalar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Instalar HACS

1. Abre el complemento **Terminal & SSH** desde la barra lateral.  
2. En la terminal, navega al directorio de configuración con:

```
cd /config
```

3. Ejecuta el siguiente comando para instalar HACS (Home Assistant Community Store):

```
wget -q -O - https://install.hacs.xyz | bash -
```

4. Espera a que finalice la instalación, luego reinicia Home Assistant, llendo a **Settings > System > Restart**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

Después del reinicio, haz clic en **Configuración** en la barra lateral para abrir el menú de ajustes. Luego, navega a **Dispositivos y Servicios**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **AGREGAR INTEGRACIÓN** para añadir una nueva integración a tu instalación de Home Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

En la barra de búsqueda, escribe **HACS** para buscar la integración de Home Assistant Community Store.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

Si se encuentra HACS, aparecerá en la lista de integraciones disponibles. Haz clic sobre ella para iniciar el proceso de instalación.

Podría aparecer un acuerdo de licencia o términos de uso. Léelo cuidadosamente, marca las casillas de aceptación y haz clic en **ENVIAR** para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

A continuación, se te pedirá iniciar sesión con tu cuenta de GitHub. Esto es necesario porque HACS se integra con GitHub para gestionar integraciones y plugins de la comunidad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

Sigue las instrucciones para autorizar el acceso de Home Assistant a tu cuenta de GitHub. Esto normalmente incluye ingresar un código de verificación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

Una vez autorizado, HACS completará la instalación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

Es posible que necesites reiniciar Home Assistant para que HACS quede completamente integrado.

---

## Instalar el plugin SenseCraft

### Paso 4. Instalar SenseCraft desde HACS

En la barra lateral, haz clic en **HACS** para abrir su interfaz. En la esquina inferior derecha, haz clic en el botón de menú (tres puntos o un símbolo de más, según la versión).

Selecciona **Repositorios personalizados**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

Introduce la URL del repositorio de SenseCraft:

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

Selecciona la categoría **Integración**, luego haz clic en **Agregar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

Ahora deberías ver la integración **SenseCraft** en la lista. Haz clic en **DESCARGAR**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

Con esto, se ha completado la instalación del plugin SenseCraft.

## Integrar SenseCAP Watcher con Home Assistant

### Paso 5. Agregar Watcher desde SenseCraft

Desde **Configuración**, ve a **Dispositivos y Servicios**.

Haz clic en **AGREGAR INTEGRACIÓN** y busca **SenseCraft**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

Selecciona **SenseCraft** y elige la opción **Add device using host/id (局域网集成)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

:::note
Actualmente no está disponible la opción **Add devices using SenseCraft Account（账号集成）**.
:::

Luego, selecciona **Watcher** en las opciones de dispositivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/4.png" style={{width:500, height:'auto'}}/></div>

En la siguiente pantalla, introduce el EUI del dispositivo Watcher, el cual puedes encontrar en la app SenseCraft dentro de la sección de configuración del dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/5.png" style={{width:500, height:'auto'}}/></div>

:::note
¡Asegúrate de que el EUI esté en mayúsculas!
:::

Después de hacer clic en **ENVIAR**, el componente de Watcher se añadirá al panel de Home Assistant (aunque inicialmente sin datos).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/6.png" style={{width:1000, height:'auto'}}/></div>

---

### Paso 6. Configurar tarea y HTTP Message Block

Para que los datos de Watcher lleguen a Home Assistant, necesitas que el Watcher tenga una tarea activa y enviar notificaciones vía HTTP.

Por ejemplo, creamos una tarea que detecta si un gato está comiendo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div><br />

En **Configuración detallada**, marca la casilla **HTTP Push Notification** en la sección “If yes, then do the following”.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/7.png" style={{width:250, height:'auto'}}/></div><br />

Luego haz clic en **Go Setup** y completa los datos de Home Assistant:

- **HTTP URL**: Dirección IP completa de Home Assistant con el puerto 8887.  
  Ejemplo: `http://192.168.1.151:8887`
- **HTTP Token**: Déjalo en blanco.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/8.png" style={{width:250, height:'auto'}}/></div><br />

Haz clic en **Update Now** para enviar la tarea al Watcher.

Cuando el Watcher detecte que el gato está comiendo, enviará una alerta a Home Assistant. A partir de ahí, puedes crear automatizaciones para controlar tu hogar inteligente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

<details>

<summary>Haz clic para ver el código del Dashboard</summary>

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

## Soporte Técnico y Discusión de Producto

Gracias por elegir nuestros productos. Estamos aquí para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales para adaptarnos a tus preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


