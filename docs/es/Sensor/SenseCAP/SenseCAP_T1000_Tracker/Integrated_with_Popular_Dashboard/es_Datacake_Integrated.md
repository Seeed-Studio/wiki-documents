---
description: SenseCAP_T1000_tracker_and_Datacake_Integrated
title: Integración con Datacake (vía TTS)
keywords:
- SenseCAP
- tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_Datacake_TTS
last_update:
  date: 8/15/2023
  author: Jessie
---

[Datacake](https://datacake.co/) es una plataforma IoT multipropósito, que proporciona la posibilidad de construir aplicaciones IoT personalizadas, sin requerir habilidades de programación.

Para satisfacer la creciente necesidad de construir aplicaciones IoT, hemos estado trabajando con Datacake para crear plantillas que permitan a la comunidad agregar el [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a Datacake a través de The Things Network de manera conveniente y fácil.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_sense.png" alt="pir" width={800} height="auto" /></p>

Antes de comenzar la configuración, por favor revisa [Conectar SenseCAP T1000 a TTS](https://wiki.seeedstudio.com/es/SenseCAP_T1000_tracker_TTN) para conectar tu SenseCAP T1000 Tracker a TTS primero.

## Configurar Datacake

Para comenzar, registra una cuenta en [Datacake](https://app.datacake.de/signup).

### Crear un Espacio de Trabajo

Primero, crea un Espacio de Trabajo en Datacake navegando al botón **Create Workspace** en la esquina superior izquierda.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake-workspace.png" alt="pir" width={800} height="auto" /></p>

### Agregar Dispositivo

Haz clic en **Devices** en el menú de la izquierda.
Para agregar un nuevo dispositivo, haz clic en el botón **Add Device** a la derecha.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_add.png" alt="pir" width={800} height="auto" /></p>

Elige **LoRaWAN** para agregar dispositivos LoRaWAN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/lorawan.png" alt="pir" width={800} height="auto" /></p>

Subimos una plantilla para los usuarios, solo necesitas seleccionar el modelo del producto y pegar tu EUI del dispositivo para configurar rápidamente.

:::info
Plantilla de Dispositivo: Seeed SenseCAP T1000
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_tem.png" alt="pir" width={800} height="auto" /></p>

### Obtener un Token de API

Navega a **Account Settings** en tu espacio de trabajo de Datacake, y copia tu Token de API.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_api.png" alt="pir" width={800} height="auto" /></p>

## Configurar The Things Stack

En The Things Stack, navega a **Integrations** → **Webhooks**, y haz clic en **Add Webhook**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Elige la plantilla de Webhook de Datacake.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_ts.png" alt="pir" width={800} height="auto" /></p>

Nombra tu integración llenando el ID del Webhook y pega el token de API de Datacake para la autorización.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_webhook2.png" alt="pir" width={800} height="auto" /></p>

## Panel de Control de Datacake

Entonces puedes verificar los datos de tu dispositivo en el Panel de Control.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/datacake_dashbaord.png" alt="pir" width={800} height="auto" /></p>