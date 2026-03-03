---
description: SenseCAP_T1000_tracker_and_Wialon_Integrated
title:  Wialon Integrated
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_Wialon
last_update:
  date: 6/4/2024
  author: Jessie
---


[Wialon](https://wialon.com/) es la plataforma de software de gestión de flotas para monitoreo GPS e IoT que rastrea más de 3,7 millones de unidades móviles y estacionarias en más de 150 países del mundo y consta de más de 2,500 empresas socias, 700 fabricantes de hardware, cientos de desarrolladores de soluciones basadas en Wialon.

El contenido de este capítulo guiará a los usuarios sobre cómo conectar el SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a la plataforma Wialon.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wialon-sensecap.png" alt="pir" width={800} height="auto" /></p>

Antes de comenzar la configuración, por favor revise [Primeros Pasos](https://wiki.seeedstudio.com/es/Get_Started_with_SenseCAP_T1000_tracker) para conectar primero su SenseCAP T1000 Tracker a SenseCAP Cloud.

## Obtener API de SenseCAP en el Portal SenseCAP

Inicie sesión en [Portal SenseCAP](https://sensecap.seeed.cc/portal), navegue a `Access API keys`, haga clic en `Create Access Key`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api.png" alt="pir" width={800} height="auto" /></p>

Entonces obtendrá el `API ID` y las `Access API keys`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensecap-api2.png" alt="pir" width={800} height="auto" /></p>

## Configuración de Wialon

Inicie sesión en [Wialon Hosting](https://hosting.wialon.com/?lang=en).

**Wialon Hosting** es una plataforma para monitoreo GPS e IoT que se almacena y administra en nuestros centros de datos.

### Agregar Unidad

Navegue a la pestaña **Units** y haga clic en **New** para agregar una nueva unidad.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/-add.png" alt="pir" width={800} height="auto" /></p>

Nombre su unidad, y seleccione el `Device Type` como `SenseCAP API`, haga clic en el ícono de llave inglesa para completar las propiedades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-news.png" alt="pir" width={800} height="auto" /></p>

**API host**:sensecap.seeed.cc<br/>
**API ID**: El API ID en el Portal SenseCAP<br/>
**API Password**: Las Access API keys en el Portal SenseCAP<br/>
**Unique ID**: El EUI de su dispositivo.

Mantenga su dispositivo en línea, entonces podrá ver la ubicación en el mapa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data-monitor.png" alt="pir" width={800} height="auto" /></p>

### Geocerca (opcional)

La geocerca es un área limitada en el mapa que puede ser utilizada para propósitos de monitoreo.

Navegue a la pestaña `Geofences` y haga clic en `New` para agregar una nueva geocerca.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set2.png" alt="pir" width={800} height="auto" /></p>

* Indique el nombre de la geocerca.
* Seleccione el tipo.
* Marque el centro de la geocerca en el mapa (haga doble clic en el lugar requerido).
* Indique el radio de la geocerca.
* Haga clic en `Save`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence-set.png" alt="pir" width={800} height="auto" /></p>