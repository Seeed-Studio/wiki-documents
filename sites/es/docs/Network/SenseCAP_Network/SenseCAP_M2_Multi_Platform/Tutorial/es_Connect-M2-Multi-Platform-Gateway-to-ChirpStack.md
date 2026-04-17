---
description: Conectar SenseCAP M2 Multi-Platform Gateway a ChirpStack
title: Conexión a ChirpStack
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack
last_update:
  date: 08/29/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack/
---
### Configuración de ChirpStack

ChirpStack proporciona componentes de código abierto para redes LoRaWAN. Juntos forman una solución lista para usar que incluye una interfaz web fácil de usar para la gestión de dispositivos y APIs para integración.

#### Añadir gateway

Antes de comenzar, por favor [Login](https://www.chirpstack.io/application-server/use/login/) en el [ChirpStack Application Server](https://www.chirpstack.io/application-server/).

Las credenciales predeterminadas son:Username: admin;Password: admin

:::tip Nota
Si aún no has conectado tu instancia de [ChirpStack Application Server](https://www.chirpstack.io/project/application-server/) con una instancia de [ChirpStack Network Server](https://www.chirpstack.io/project/network-server/), debes hacerlo primero. Consulta [Network servers](https://www.chirpstack.io/application-server/use/network-servers/). También necesitas conectar la organización con el network-server creando un [Service profile](https://www.chirpstack.io/application-server/use/service-profiles/).
:::

Navega a **Gateways > Add gateway**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-gateway.png" alt="pir" width={800} height="auto" /></p>

**Gateway name**: Un nombre para tu gateway

**Gateway EUI**: El EUI del gateway se puede encontrar en la etiqueta del dispositivo o en la Local Console

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_2.png" alt="pir" width={800} height="auto" /></p>

#### Añadir perfil de dispositivo

Antes de poder añadir tu dispositivo a ChirpStack, tienes que crear un [Device-profile](https://www.chirpstack.io/application-server/use/device-profiles/) si aún no lo has hecho.

Navega a **Device profile > Add device profile**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**Name**: Un nombre para tu perfil de dispositivo

**Region**: Selecciona el plan de Región de acuerdo con tu gateway.

**MAC version**: LoRaWAN 1.0.3

**Regional parameters revision**: A

**ADR algorithm**: Default ADR algorithm( LoRa only)

:::note
Selecciona MAC version/Regional parameters revision/ADR algorithm de acuerdo con tu dispositivo. Para más detalles, consulta: https://lora-alliance.org/resource_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

#### Añadir dispositivo

Navega a **Application > Add Application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

Haz clic en la aplicación a la que quieres añadir tu dispositivo. En la pestaña **Devices**, haz clic en **Add device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**Name**: Un nombre para tu dispositivo

**Device EUI**: El EUI del dispositivo se puede encontrar en la etiqueta del dispositivo o en la SenseCAP Mate APP

**Device profile**: Elige el perfil de dispositivo que creamos en el paso 1.2 paso1.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

### Configuración del gateway

Configura el gateway a través de la Web UI, por favor consulta el [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) para iniciar sesión primero en la Local Console.

#### Ajustes de red LoRa

Navega a **LoRa > LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_8.png" alt="pir" width={800} height="auto" /></p>

**Mode:** Packet Forward

Ajustes de Packet Forwarder:

**Gateway EUI**: Obtendrá automáticamente el EUI del gateway conectado

**Server Address**: La dirección de tu servidor de ChirpStack

**Server Port(Up/Down)**: 1700

Otros ajustes pueden dejarse como predeterminados, o pueden cambiarse para adaptarse a tus necesidades.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_9.png" alt="pir" width={800} height="auto" /></p>

#### Ajustes del plan de canal

Navega a **LoRa > Channel Plan**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_10.png" alt="pir" width={800} height="auto" /></p>

Selecciona la Región y el plan de Frecuencia de acuerdo con la elección real.

Después de configurar, haz clic en **Save&Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_11.png" alt="pir" width={800} height="auto" /></p>

### Vista de datos

#### Datos del gateway

Navega a **Gateways**, elige el gateway que quieres comprobar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

#### Datos del dispositivo

Después de añadir tu dispositivo LoRaWAN a ChirpStack, valida que tu dispositivo pueda activarse (en caso de OTAA) y enviar datos.

Navega a **Applications** > **Devices**, elige el dispositivo que quieres comprobar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>
