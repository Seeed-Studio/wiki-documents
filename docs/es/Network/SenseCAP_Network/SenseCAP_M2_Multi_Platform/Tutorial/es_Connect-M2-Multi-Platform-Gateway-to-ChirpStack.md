---
description: Conectar SenseCAP M2 Multi-Platform Gateway a ChirpStack
title: Conectando a ChirpStack
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack
last_update:
  date: 08/29/2023
  author: Jessie
---


### Configuración de ChirpStack

ChirpStack proporciona componentes de código abierto para redes LoRaWAN. Juntos forman una solución lista para usar que incluye una interfaz web fácil de usar para la gestión de dispositivos y APIs para integración.

#### Agregar Gateway

Antes de comenzar, por favor [inicie sesión](https://www.chirpstack.io/application-server/use/login/) en el [Servidor de Aplicaciones ChirpStack](https://www.chirpstack.io/application-server/).

Las credenciales predeterminadas son: Usuario: admin; Contraseña: admin

:::tip Nota
Si aún no ha conectado su instancia del [Servidor de Aplicaciones ChirpStack](https://www.chirpstack.io/project/application-server/) con una instancia del [Servidor de Red ChirpStack](https://www.chirpstack.io/project/network-server/), necesita hacer esto primero. Vea [Servidores de red](https://www.chirpstack.io/application-server/use/network-servers/). También necesita conectar la organización con el servidor de red creando un [Perfil de servicio](https://www.chirpstack.io/application-server/use/service-profiles/).
:::

Navegue a **Gateways > Add gateway**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-gateway.png" alt="pir" width={800} height="auto" /></p>

**Gateway name**: Un nombre para su gateway

**Gateway EUI**: El EUI del Gateway se puede encontrar en la etiqueta del dispositivo o en la Consola Local

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_2.png" alt="pir" width={800} height="auto" /></p>

#### Agregar perfil de dispositivo

Antes de poder agregar su dispositivo a ChirpStack, debe crear un [Perfil de dispositivo](https://www.chirpstack.io/application-server/use/device-profiles/) si aún no lo ha hecho.

Navegue a **Device profile> Add device profile**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_3.png" alt="pir" width={800} height="auto" /></p>

**Name**: Un nombre para su perfil de dispositivo

**Region**: Seleccione el plan de Región según su gateway.

**MAC version**: LoRaWAN 1.0.3

**Regional parameters revision**: A

**ADR algorithm**: Algoritmo ADR predeterminado (solo LoRa)

:::note
Seleccione la versión MAC/revisión de parámetros regionales/algoritmo ADR según su dispositivo. Para más detalles, consulte: https://lora-alliance.org/resource_hub/
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_4.png" alt="pir" width={800} height="auto" /></p>

#### Agregar dispositivo

Navegue a **Application > Add Application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_5.png" alt="pir" width={800} height="auto" /></p>

Haga clic en la aplicación a la que desea agregar su dispositivo. Bajo la pestaña **Devices**, haga clic en **Add device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_6.png" alt="pir" width={800} height="auto" /></p>

**Name**: Un nombre para su dispositivo

**Device EUI**: El EUI del dispositivo se puede encontrar en la etiqueta del dispositivo o en la APP SenseCAP Mate

**Device profile**: Elija el perfil de dispositivo que creamos en el paso 1.2.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_7.png" alt="pir" width={800} height="auto" /></p>

### Configuración del Gateway

Configure el gateway a través de la interfaz web, por favor consulte la [Guía de Inicio Rápido](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) para iniciar sesión en la Consola Local primero.

#### Configuración de Red LoRa

Navegue a **LoRa > LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_8.png" alt="pir" width={800} height="auto" /></p>

**Mode:** Packet Forward

Configuración del Packet Forwarder:

**Gateway EUI**: Obtendrá automáticamente el EUI del gateway conectado

**Server Address**: La dirección de su servidor ChirpStack

**Server Port(Up/Down)**: 1700

Otras configuraciones se pueden dejar como predeterminadas, o se pueden cambiar para adaptarse a sus requisitos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_9.png" alt="pir" width={800} height="auto" /></p>

#### Configuración del Plan de Canales

Navegue a **LoRa > Channel Plan**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_10.png" alt="pir" width={800} height="auto" /></p>

Seleccione la Región y el plan de frecuencia según la elección real.

Después de configurar, haga clic en **Save&Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_11.png" alt="pir" width={800} height="auto" /></p>

### Vista de Datos

#### Datos del gateway

Navegue a **Gateways**, elija el gateway que desea verificar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_12.png" alt="pir" width={800} height="auto" /></p>

#### Datos del dispositivo

Después de agregar su dispositivo LoRaWAN a ChirpStack, valide que su dispositivo pueda activarse (en caso de OTAA) y enviar datos.

Navegue a **Applications** > **Devices**, elija el dispositivo que desea verificar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wps_doc_13.png" alt="pir" width={800} height="auto" /></p>
