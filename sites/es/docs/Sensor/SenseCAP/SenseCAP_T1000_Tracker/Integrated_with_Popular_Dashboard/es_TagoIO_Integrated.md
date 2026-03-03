---
description: SenseCAP_T1000_tracker_and_TagoIO_Integrated
title: TagoIO Integrado (vía TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_TagoIO_TTS
last_update:
  date: 8/18/2023
  author: Jessie
---


[TagoIO](https://tago.io/) es una Plataforma IoT en la Nube para que las empresas gestionen dispositivos, datos, usuarios, análisis e integración. Su interfaz intuitiva facilita a empresas de todos los tamaños construir e implementar soluciones IoT innovadoras.


El contenido de este capítulo guiará a los usuarios sobre cómo conectar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a TagoIO a través de TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio.png" alt="pir" width={800} height="auto" /></p>

Antes de comenzar la configuración, por favor consulta [Conectar SenseCAP T1000 a TTS](https://wiki.seeedstudio.com/es/SenseCAP_T1000_tracker_TTN) para conectar primero tu SenseCAP T1000 Tracker a TTS.


## Configurar TagoIO

Para comenzar, crea una cuenta con [TagoIO](https://admin.tago.io/signup). 


### Agregar Dispositivo

Navega a la pestaña **Devices** y haz clic en **Add Device**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_device.png" alt="pir" width={800} height="auto" /></p>


Busca **Seeed SenseCAP T1000** para configuración rápida.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_template.png" alt="pir" width={800} height="auto" /></p>

Nombra tu dispositivo y pega tu EUI del dispositivo, luego haz clic en **Create my Device**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/c_my_device.png" alt="pir" width={800} height="auto" /></p>


### Generar autorización

Haz clic en **Generate authorization** y copia tu autorización.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/authorization.png" alt="pir" width={800} height="auto" /></p>


## Configurar The Things Stack


En The Things Stack, navega a **Integrations** → **Webhooks**, y haz clic en **Add Webhook**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>


Elige la plantilla de Webhook de TaoIO. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTS_web_IO.png" alt="pir" width={800} height="auto" /></p>


Nombra tu integración completando el Webhook ID, y pega el Plugin ID y el token de TagoIO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/webhook_TTS.png" alt="pir" width={800} height="auto" /></p>


Después de que tu dispositivo esté conectado, puedes verificar todas las conexiones en la pestaña **Live Inspector** en TagoIO.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/live_inspec.png" alt="pir" width={800} height="auto" /></p>

## Panel de Control de TagoIO (Opcional)

Un panel de control es donde colocas tus widgets para visualizar e interactuar con datos, todo en tiempo real. Puedes personalizar tu panel de control según tus necesidades.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tagoio_dash.png" alt="pir" width={800} height="auto" /></p>


Navega a la pestaña **Dashboard**, nombra tu panel de control y haz clic en **Create my Dashboard**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dashfortagoio.png" alt="pir" width={800} height="auto" /></p>


**Panel de Control de Ubicación**

Haz clic en **Add widget**, elige el tipo **Map**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/maptagoio.png" alt="pir" width={800} height="auto" /></p>


**Data from**: Tu dispositivo -- location

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/map_done_io.png" alt="pir" width={800} height="auto" /></p>