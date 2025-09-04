---
description: SenseCAP_T1000_tracker_and_Qubitro_Integrated
title: Integración con Qubitro (vía TTS)
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_Qubitro_TTS
last_update:
  date: 8/15/2023
  author: Jessie
---


[Qubitro](https://www.qubitro.com/) es una Plataforma de Datos de Dispositivos (DDP) para desarrolladores que proporciona las herramientas, flujos de trabajo e infraestructura que necesitas para desarrollar soluciones más rápido, sin la necesidad de integración manual de múltiples servicios. Qubitro soporta fuentes de datos populares de forma nativa y proporciona herramientas para colaboración en tiempo real en tus proyectos combinado con infraestructura escalable.

El contenido de este capítulo guiará a los usuarios sobre cómo conectar el SenseCAP [T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a Qubitro a través de TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/qubitro_in1.png" alt="pir" width={800} height="auto" /></p>

Antes de comenzar la configuración, por favor revisa [Conectar SenseCAP T1000 a TTS](https://wiki.seeedstudio.com/es/SenseCAP_T1000_tracker_TTN) para conectar tu SenseCAP T1000 Tracker a TTS primero.

## Configurar Qubitro 

Para comenzar, crea una cuenta con [Qubitro](https://portal.qubitro.com/login). Al crear una cuenta, automáticamente estarás en un plan Starter. 


### Obtener credenciales desde el Panel de Qubitro

Crea un nuevo proyecto.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_new_project.png" alt="pir" width={800} height="auto" /></p>


Haz clic en el botón **New source** y haz clic en **The Things Stack** en la lista.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_source.png" alt="pir" width={800} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_TTS.png" alt="pir" width={800} height="auto" /></p>

Entonces obtendrás el Project ID y las Webhook Signing Keys.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_source.png" alt="pir" width={800} height="auto" /></p>


## Configurar The Things Stack

Navega a [TTS Console](https://eu1.cloud.thethings.network/console/) para configurar la integración webhook.

En The Things Stack, navega a **Integrations** → **Webhooks**, y haz clic en **Add Webhook**.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Elige la plantilla de Webhook de Qubitro. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/TTN_Q.png" alt="pir" width={800} height="auto" /></p>

Nombra tu integración completando el Webhook ID, y pega los valores proporcionados en el primer paso en el Portal de Qubitro. 


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_kyes.png" alt="pir" width={800} height="auto" /></p>

Haz clic en el botón **Create Qubitro Webhook** y regresa al Portal de Qubitro.


## Estado del dispositivo

Haz clic en el botón **Go to project** y luego en el botón **Refresh** para verificar que los dispositivos estén listados exitosamente.


:::info Consejo
Una vez que la integración esté configurada, todos los dispositivos conectados al mismo proyecto en The Things Stack se sincronizarán automáticamente.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_status_device.png" alt="pir" width={800} height="auto" /></p>

## Configurar el decodificador en Qubitro

Navega a la página de tu dispositivo, y haz clic en el botón **Create function**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_create_function.png" alt="pir" width={800} height="auto" /></p>

Elige la **Decoder function**, y haz clic en **Get started**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_function.png" alt="pir" width={800} height="auto" /></p>


Subimos una plantilla para los usuarios, solo necesitas seleccionar el modelo del producto para configurar rápidamente.

:::info
**Formatter type**: Device template<br />
**Manufacturer Brand**: Seeed Studio<br />
**Model**: SenseCAP_T1000
:::

Luego haz clic en **Save and complete**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/function_setup.png" alt="pir" width={800} height="auto" /></p>


## Verificar los datos

Navega al dispositivo y haz clic en la pestaña **Data** para verificar los datos entrantes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_data_view.png" alt="pir" width={800} height="auto" /></p>


## Personalizar el panel de control (opcional)

**Panel de Ubicación**

Navega a la página de tu panel de control, y haz clic en **Create new**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/create_dash.png" alt="pir" width={800} height="auto" /></p>

Nombra tu panel de control y haz clic en **Create**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_dash.png" alt="pir" width={800} height="auto" /></p>


Elige **Map** para el tipo de widget.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/Q_setmap.png" alt="pir" width={800} height="auto" /></p>

Elige tu dispositivo y el valor de **coordinates**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/coordi.png" alt="pir" width={800} height="auto" /></p>


Entonces puedes verificar tu ubicación en el panel de control. 
También puedes personalizar tus otros widgets.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/dashboard_view.png" alt="pir" width={800} height="auto" /></p>