---
description: Conectar Wio Tracker 1110 a Home Assistant 
title: Integración con Home Assistant
keywords:
- Home assistant
- Wio tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/wio_tracker_home_assistant
sidebar_position: 5
last_update:
  date: 1/25/2024
  author: Jessie
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>

Integra la [Placa de Desarrollo Wio Tracker 1110](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) en Home Assistant para seguimiento en tiempo real y análisis ambiental en vivo. La [Placa de Desarrollo Wio Tracker 1110](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) es una plataforma de desarrollo de seguimiento basada en LoRa y fácil de usar, puedes usar la placa de desarrollo para desarrollar más características personalizadas, haciendo que tu entorno doméstico sea más inteligente y receptivo.

## Comenzar

En este tutorial usamos [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html) como el host de Home Assistant, puedes usar cualquier host de Home Assistant con un Supervisor. Consulta la [Instalación](https://www.home-assistant.io/installation/) para más detalles.

### Configuración del Dispositivo

Antes de comenzar, asegúrate de haber leído la [Guía del Usuario](https://wiki.seeedstudio.com/es/Get_Started_with_Wio-Trakcer_1110/) de la Placa de Desarrollo Wio Tracker 1110, y selecciona la plataforma como `SenseCAP`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>

### Configuración de Home Assistant

Navega a tu [interfaz web de Home Assistant](http://homeassistant.local:8123/).

Para desbloquear todo el potencial de Home Assistant y obtener acceso a características avanzadas, se recomienda habilitar el `Modo avanzado` en la interfaz de usuario.

Haz clic en tu perfil, y habilita el `Modo avanzado`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/advanced-mode.png" alt="pir" width={800} height="auto" /></p>

#### Instalar Complementos

Ve a [Configuración > Complementos](https://my.home-assistant.io/redirect/supervisor).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-ons.png" alt="pir" width={800} height="auto" /></p>

Bajo la sección de `complementos` Oficiales, encontrarás el complemento `File editor` y `Advanced SSH & Web Terminal`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/2-ons.png" alt="pir" width={800} height="auto" /></p>

Se recomienda habilitar `Mostrar en barra lateral` para que puedas encontrarlo más fácilmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/show-sidebar.png" alt="pir" width={800} height="auto" /></p>

#### Instalar HACS

La Tienda de la Comunidad de Home Assistant te proporciona una interfaz de usuario poderosa para manejar descargas de todas tus necesidades personalizadas.

Abre tu terminal y navega al directorio de configuración:

```cpp
cd /config
```

Descarga y ejecuta el script de instalación de HACS:

```cpp
wget -q -O - https://install.hacs.xyz | bash -
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/comand-page.png" alt="pir" width={600} height="auto" /></p>

Después de que el script de instalación haya terminado, reinicia Home Assistant para aplicar los cambios.

Ve a `Configuración` > `Sistema` > `Reiniciar`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/restart.png" alt="pir" width={800} height="auto" /></p>

Navega a `Configuración` ->  `Dispositivos y servicios`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-service.png" alt="pir" width={800} height="auto" /></p>

Haz clic en `AGREGAR INTEGRACIÓN` para añadir una nueva integración.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-inte.png" alt="pir" width={800} height="auto" /></p>

Busca `HACS` y haz clic en él.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/HACS.png" alt="pir" width={800} height="auto" /></p>

Solo el último elemento (características experimentales) es opcional, necesitas aceptar todo lo que está arriba antes de poder configurar HACS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/submit.png" alt="pir" width={600} height="auto" /></p>

Sigue las instrucciones para autorizar a Home Assistant a acceder a tu cuenta de GitHub. Esto típicamente involucrará ingresar un código de verificación proporcionado por GitHub para confirmar tu identidad.

HACS usa un flujo OAuth de dispositivo para la autenticación contra la API de GitHub.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png
" alt="pir" width={600} height="auto" /></p>

#### Instalar el plugin SenseCraft

Navega a `HACS`, haz clic en el icono en la esquina superior derecha, y elige `Repositorios personalizados`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png
" alt="pir" width={800} height="auto" /></p>

Copia el `Repositorio`:

**Repositorio**:

```cpp
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

**Categoría**: `Integración`

Haz clic en `Add`. El repositorio ahora está agregado a tu HACS, y también puedes encontrar la integración SenseCraft en la lista bajo `Integrations`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/custom-re.png" alt="pir" width={800} height="auto" /></p>

Navega a la integración `SenseCraft` y haz clic en `DOWNLOAD`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" alt="pir" width={800} height="auto" /></p>

Hemos completado exitosamente la instalación del plugin SenseCraft ahora.

#### Agregar Dispositivos

Navega a `Settings` -> `Devices & Services` -> `SenseCraft`, haz clic en `ADD DEVICE`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-device-.png" alt="pir" width={800} height="auto" /></p>

Selecciona `Add devices using SenseCraft Account(账号集成)`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/account-inte.png" alt="pir" width={800} height="auto" /></p>

Inicia sesión con tu cuenta de SenseCAP Mate APP, y selecciona la versión `global`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-login.png" alt="pir" width={800} height="auto" /></p>

Entonces todos tus dispositivos en tu cuenta serán listados, selecciona el que quieras conectar, y luego haz clic en `SUBMIT`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-device.png" alt="pir" width={800} height="auto" /></p>

Una vez que la conexión sea exitosa, verás el dispositivo y la entidad mostrados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cloud-device.png" alt="pir" width={800} height="auto" /></p>

Haz clic en el dispositivo, verás todos los datos subidos, haz clic en `ADD TO DASHBOARD`
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-dashboard.png" alt="pir" width={800} height="auto" /></p>

#### Agregar Tarjeta de Mapa

Antes de agregar la tarjeta de mapa, necesitamos agregar una entidad de ubicación primero.

Abre el `File Editor` y navega al archivo `configuration.yaml`, agrega el siguiente código:

```cpp
template:
  - sensor:
      - name: "Device Location"
        state: >
          {{ states('sensor.latitude') }},{{ states('sensor.longitude') }}
        attributes:
          latitude: "{{ states('sensor.latitude') }}"
          longitude: "{{ states('sensor.longitude') }}"
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/yaml2.png" alt="pir" width={800} height="auto" /></p>

:::tip
`name` puede ser personalizado, y los `states` deben ser iguales al entity id de tu dispositivo.

Puedes verificar el entity id en `Settings` -> `Devices and Services` -> `Entities`
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-id.png" alt="pir" width={600} height="auto" /></p>
:::

Haz clic en `ADD CARD` en el panel de control.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-card.png" alt="pir" width={800} height="auto" /></p>

Elige la tarjeta Map.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-card.png" alt="pir" width={800} height="auto" /></p>

Copia el código en el `CODE EDITOR` y haz clic en `SAVE`.

```cpp
type: map
entities:
  - entity: sensor.device_location
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/code-editor.png" alt="pir" width={800} height="auto" /></p>

:::tip
La Entidad debe ser la misma que tu id de entidad. Puedes verificar el id de entidad en `Settings` -> `Devices and Services` -> `Entities`
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-location.png" alt="pir" width={600} height="auto" /></p>
:::

Ahora puedes verificar la ubicación en vivo en el mapa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-map.png" alt="pir" width={800} height="auto" /></p>

Todos los datos de la Dev Board pueden visualizarse en el panel de control.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>
