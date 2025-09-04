---
description: Connect_to_The_Things_Network
title: Conectar a The Things Network
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_T1000_tracker_TTN
last_update:
  date: 8/15/2023
  author: Jessie
---


The Things Stack(TTS) es un stack de servidor de red LoRaWAN® que es el componente crítico para cualquier solución LoRaWAN. En este capítulo guiaremos a los usuarios para conectar el [SenseCAP T100 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) a The Things Network.


## Configuración del Dispositivo

Antes de conectar al TTS, necesitas configurar los parámetros básicos de tu dispositivo en la APP SenseCAP Mate, consulta [Primeros Pasos](https://wiki.seeedstudio.com/es/Get_Started_with_SenseCAP_T1000_tracker) para más detalles.

* Configura la plataforma a TTN, y luego copia el Device EUI/APP EUI/APP Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

## The Things Network

The Things Stack(TTS) es un servidor de red LoRaWAN de grado empresarial, construido sobre un núcleo de código abierto. The Things Stack te permite construir y gestionar redes LoRaWAN en tu propio hardware o en la nube.

Para comenzar, registra una cuenta en [The Things Network](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png" alt="pir" width={800} height="auto" /></p>


### Paso 1: Crear una aplicación

Navega a la página de Aplicaciones, haz clic en "+Create application".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Ingresa un ID de Aplicación, haz clic en Create Application para guardar tus cambios.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>


### Paso 2: Registrar el Dispositivo

Subimos una plantilla para los usuarios, solo necesitas seleccionar el modelo del producto para configurar rápidamente.
Selecciona el método de entrada a 'Select the end device in the LoRaWAN Device Repository'

:::info
**End device brand**:SenseCAP<br />
**Model**:SenseCAP T1000 Tracker A/B
:::

Selecciona el plan de frecuencia según tu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model_setup.png" alt="pir" width={800} height="auto" /></p>


Pega el Device EUI/APP EUI/APP Key de la App SenseCraft, y luego haz clic en `Register end device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_appconfig.png" alt="pir" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_new.png" alt="pir" width={800} height="auto" /></p>

:::note
El "JoinEUI" anterior es similar a "AppEUI".
:::


### Paso 3: Verificar los datos

Cuando el dispositivo intenta conectarse a la red, la luz de respiración parpadeará. Si el dispositivo se une a la red exitosamente, la luz de respiración parpadeará rápidamente, y habrá una melodía ligera y alegre.

Luego puedes verificar los datos en la consola TTS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/data_check.png" alt="pir" width={800} height="auto" /></p>


## Recursos

[Decodificador SenseCAP T1000 Tracker para TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/T1000/TTN)