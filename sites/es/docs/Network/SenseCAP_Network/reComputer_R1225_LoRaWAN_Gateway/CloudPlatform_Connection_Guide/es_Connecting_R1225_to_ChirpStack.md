---
description: Conectar R1225 a ChirpStack
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
updatedAt: '2026-04-08'
---
## Configuración de ChirpStack

ChirpStack proporciona componentes de código abierto para redes LoRaWAN. Juntos forman una solución lista para usar que incluye una interfaz web fácil de usar para la gestión de dispositivos y APIs para integración.

### Agregar Gateway

Antes de comenzar, por favor [inicia sesión](https://www.chirpstack.io/application-server/use/login/) en el [Servidor de Aplicaciones ChirpStack](https://www.chirpstack.io/application-server/).

Las credenciales predeterminadas son:Nombre de usuario: admin;Contraseña: admin

:::tip Nota
Si aún no has conectado tu instancia del [Servidor de Aplicaciones ChirpStack](https://www.chirpstack.io/project/application-server/) con una instancia del [Servidor de Red ChirpStack](https://www.chirpstack.io/project/network-server/), necesitas hacer esto primero. Consulta [Servidores de red](https://www.chirpstack.io/application-server/use/network-servers/). También necesitas conectar la organización con el servidor de red creando un [Perfil de servicio](https://www.chirpstack.io/application-server/use/service-profiles/).
:::

Navega a `Gateway` > `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack4.png" alt="pir" width={800} height="auto" /></p>

Ingresa el `Gateway Name` y `Gateway ID (EUI: 64)`

**Nombre del gateway**: Un nombre para tu gateway

**EUI del gateway**: El EUI del gateway se puede encontrar en la etiqueta del dispositivo o en la Consola Local

**Intervalo de estadísticas (seg)**: El intervalo esperado en segundos en el que el gateway envía sus estadísticas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack5.png" alt="pir" width={800} height="auto" /></p>

Luego haz clic en `Submit`

### Agregar perfil de dispositivo

Antes de poder agregar tu dispositivo a ChirpStack, debes crear un [perfil de dispositivo](https://www.chirpstack.io/application-server/use/device-profiles/) si aún no lo has hecho.

Navega a **`Device profile` > `Add device profile`**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**Nombre**: Un nombre para tu perfil de dispositivo

**Región**: Selecciona el plan de Región de acuerdo con tu gateway.

**Versión MAC**: LoRaWAN 1.0.3

**Revisión de parámetros regionales**: A

**Algoritmo ADR**: Algoritmo ADR predeterminado (solo LoRa)

:::note
Selecciona la versión MAC/Revisión de parámetros regionales/Algoritmo ADR de acuerdo con tu dispositivo. Para más detalles, consulta: https://lora-alliance.org/resource_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

### Agregar dispositivo

Navega a **`Application` > `Add Application`**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

Haz clic en la aplicación a la que deseas agregar tu dispositivo. En la pestaña **Devices**, haz clic en **Add device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**Nombre**: Un nombre para tu dispositivo

**EUI del dispositivo**: El EUI del dispositivo se puede encontrar en la etiqueta del dispositivo o en la aplicación SenseCAP Mate

**Perfil de dispositivo**: Elige el perfil de dispositivo que creamos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

## Configuración del Gateway

Configura el gateway a través de la interfaz web, por favor consulta la [Guía de inicio rápido](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) para iniciar sesión en la Consola Local primero.

### Configuración de la Red LoRa

Navega a **LoRa > LoRa Network**

**Modo:** Packet Forward

Configuración del Packet Forwarder:

**EUI del gateway**: Obtendrá automáticamente el EUI del gateway conectado

**Dirección del servidor**: La dirección de tu servidor ChirpStack

**Puerto del servidor (Subida/Bajada)**: 1700

Otras configuraciones se pueden dejar como predeterminadas, o se pueden cambiar para adaptarse a tus requisitos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/chirpstack_packet_forwarder.png" alt="pir" width={800} height="auto" /></p>

### Configuración del Plan de Canales

Navega a **`LoRa` > `Channel Plan`**

Selecciona la Región y el Plan de Frecuencia de acuerdo con la elección real.

Después de configurar, haz clic en **Save&Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/chirpstack_channel_plan.png" alt="pir" width={800} height="auto" /></p>

## Vista de Datos

### Datos del gateway

Navega a **`Gateways`**, elige el gateway que deseas verificar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

### Datos del dispositivo

Después de agregar tu dispositivo LoRaWAN a ChirpStack, verifica que tu dispositivo pueda activarse (en caso de OTAA) y enviar datos.

Navega a **Applications** > **Devices**, elige el dispositivo que deseas verificar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>
