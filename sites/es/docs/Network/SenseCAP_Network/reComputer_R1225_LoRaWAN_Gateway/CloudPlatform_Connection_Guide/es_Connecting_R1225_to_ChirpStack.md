---
description: Conexión de R1225 a ChirpStack
title: Conexión a ChirpStack
keywords:
  - Gateway
  - SenseCAP
  - Edge Controller
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_chirpstack
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/30/2026
  author: Kian
createdAt: '2026-03-30'
url: https://wiki.seeedstudio.com/es/connecting_r1225_to_chirpstack/
updatedAt: '2026-04-29'
---
## Configuración de ChirpStack

ChirpStack proporciona componentes de código abierto para redes LoRaWAN. Juntos forman una solución lista para usar que incluye una interfaz web fácil de usar para la gestión de dispositivos y APIs para la integración.

### Añadir gateway

Antes de comenzar, por favor [login](https://www.chirpstack.io/application-server/use/login/) en el [ChirpStack Application Server](https://www.chirpstack.io/application-server/).

Las credenciales predeterminadas son: Username: admin; Password: admin

:::tip Nota
Si aún no has conectado tu instancia de [ChirpStack Application Server](https://www.chirpstack.io/project/application-server/) con una instancia de [ChirpStack Network Server](https://www.chirpstack.io/project/network-server/), debes hacerlo primero. Consulta [Network servers](https://www.chirpstack.io/application-server/use/network-servers/). También necesitas conectar la organización con el network-server creando un [Service profile](https://www.chirpstack.io/application-server/use/service-profiles/).
:::

Navega a `Gateway` > `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack4.png" alt="pir" width={800} height="auto" /></p>

Introduce el `Gateway Name` y el `Gateway ID (EUI: 64)`

**Gateway name**: Un nombre para tu gateway

**Gateway EUI**: El Gateway EUI se puede encontrar en la etiqueta del dispositivo o en la consola local

**Stats interval(secs)**: El intervalo esperado en segundos en el que el gateway envía sus estadísticas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack5.png" alt="pir" width={800} height="auto" /></p>

Luego haz clic en `Submit`

### Añadir perfil de dispositivo

Antes de poder añadir tu dispositivo a ChirpStack, tienes que crear un [device-profile](https://www.chirpstack.io/application-server/use/device-profiles/) si aún no lo has hecho.

Navega a **`Device profile` > `Add device profile`**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**Name**: Un nombre para tu perfil de dispositivo

**Region**: Selecciona el plan de región de acuerdo con tu gateway.

**MAC version**: LoRaWAN 1.0.3

**Regional parameters revision**: A

**ADR algorithm**: Algoritmo ADR predeterminado (solo LoRa)

:::note
Selecciona la versión MAC / revisión de parámetros regionales / algoritmo ADR de acuerdo con tu dispositivo. Para más detalles, consulta: https://lora-alliance.org/resource_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

### Añadir dispositivo

Navega a **`Application` > `Add Application`**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

Haz clic en la aplicación a la que quieres añadir tu dispositivo. En la pestaña **Devices**, haz clic en **Add device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**Name**: Un nombre para tu dispositivo

**Device EUI**: El Device EUI se puede encontrar en la etiqueta del dispositivo o en la app SenseCAP Mate

**Device profile**: Elige el perfil de dispositivo que creamos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

## Configuración del gateway

Configura el gateway a través de la interfaz web; por favor revisa el [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) para iniciar sesión primero en la consola local.

### Ajustes de red LoRa

Navega a **LoRa > LoRa Network**

**Mode:** Packet Forwarder

Ajustes de Packet Forwarder:

**Gateway EUI**: Obtendrá automáticamente el EUI del gateway conectado

**Server Address**: La dirección de tu servidor ChirpStack

**Server Port(Up/Down)**: 1700

Otros ajustes se pueden dejar por defecto, o se pueden cambiar para adaptarse a tus requisitos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/chirpstack_packet_forwarder.png" alt="pir" width={800} height="auto" /></p>

### Ajustes del plan de canales

Navega a **`LoRa` > `Channel Plan`**

Selecciona la región y el plan de frecuencia de acuerdo con la elección real.

Después de configurar, haz clic en **Save&Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/chirpstack_channel_plan.png" alt="pir" width={800} height="auto" /></p>

## Vista de datos

### Datos del gateway

Navega a **`Gateways`**, elige el gateway que quieres comprobar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

### Datos del dispositivo

Después de añadir tu dispositivo LoRaWAN a ChirpStack, valida que tu dispositivo pueda activarse (en el caso de OTAA) y enviar datos.

Navega a **Applications** > **Devices**, elige el dispositivo que quieres comprobar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>
