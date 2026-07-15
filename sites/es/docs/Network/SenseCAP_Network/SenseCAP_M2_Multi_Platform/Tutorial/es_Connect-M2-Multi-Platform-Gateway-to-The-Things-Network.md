---
description: Conectar SenseCAP M2 Multi-Platform Gateway a TTN
title: Conexión a TTN
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network
last_update:
  date: 07/14/2023
  author: Jessie
createdAt: '2023-02-24'
updatedAt: '2026-04-03'
url: https://wiki.seeedstudio.com/es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network/
---
Hay dos maneras de conectarse a The Things Network: Packet forward y Basics™ Station. Elige una forma de conectar tu gateway.

Semtech UDP Packet Forwarder es el reenvío de paquetes LoRaWAN® original, que se conecta a los servidores mediante el protocolo Semtech UDP.

LoRa Basics™ Station es la forma preferida de conectar Gateways a The Things Stack.

## **Conexión mediante Packet Forwarder**

Semtech UDP Packet Forwarder es el reenvío de paquetes LoRaWAN® original, que se conecta a los servidores mediante el protocolo Semtech UDP.

### Configuración en TTN

- **Paso 1**: Inicia sesión en [The Things Stack](https://eu1.cloud.thethings.network/console). Si no tienes una cuenta TTN, por favor regístrate primero.

- **Paso 2**: Registrar el gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

**Gateway EUI**: El Gateway EUI se puede encontrar en la etiqueta del dispositivo o en la consola local

**Gateway ID**: Un identificador único para tu gateway (el ID solo debe contener letras minúsculas, números y guiones)

**Gateway name**: Un nombre para tu gateway

**Frequency plan**: Selecciona la frecuencia correspondiente de acuerdo con la versión de tu gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set1.png" alt="pir" width={600} height="auto" /></p>

Puedes comprobar el Gateway en la vista general después de un registro satisfactorio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set2.png" alt="pir" width={600} height="auto" /></p>

### Configuración del Gateway

Configura el gateway a través de la interfaz web; por favor consulta el [Quick Start](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) para iniciar sesión primero en la consola local.

- **Paso 1**: Ajustes de red LoRa

Navega a **LoRa** > **LoRa** **Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2:** Establecer Mode en Packet Forward

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/packet.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3:** Ajustes de Packet Forwarder:

1. **Gateway EUI**: Obtendrá automáticamente el EUI del gateway conectado

2. **Server Address**:
Para Semtech UDP Packet Forwarder usa 'server-address'
El 'server-address' es la dirección de tu implementación de The Things Stack.
Consulta [Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/) para más información.

3. **Server Port(Up/Down)**: Los puertos Up y Down suelen ser 1700.

Los demás ajustes se pueden dejar por defecto o cambiarse para adaptarse a tus requisitos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/server_address.png" alt="pir" width={600} height="auto" /></p>

Haz clic en **Save&Apply** para aplicar tus ajustes.

- **Paso 4**: Ajustes del plan de canales

Navega a **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

Selecciona la región y el plan de frecuencias de acuerdo con la elección real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/setting3.png" alt="pir" width={600} height="auto" /></p>

Después de la configuración, haz clic en **Save&Apply**

## **Conexión mediante Basic Station**

LoRa Basics™ Station es la forma preferida de conectar Gateways a The Things Stack.

### Configuración en TTN

- **Paso 1**: Registrar gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2**: Habilitar Require authenticated connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/enable_setting.png" alt="pir" width={600} height="auto" /></p>

Esto solo permitirá que un gateway se conecte si utiliza una conexión Basic Station o MQTT con TLS habilitado.

- **Paso 3:** Crear una API key

Selecciona una opción para generar automáticamente una API key para el servicio CUPS o LNS y, a continuación, podrás autorizar el gateway de inmediato.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/APIkey.png" alt="pir" width={600} height="auto" /></p>

Elige un servidor según tus necesidades y luego haz clic en "Register gateway"

**LoRaWAN Network Server (LNS)**

LNS establece una conexión de datos entre un gateway LoRa Basics™ Station y un Network Server (en este caso, The Things Stack). Los tramas uplink y downlink LoRa® se intercambian a través de esta conexión de datos. El protocolo LNS es necesario para enviar y recibir datos LoRaWAN.

**Configuration and Update Server (CUPS)**

CUPS permite que un Network Server configure gateways de forma remota y actualice el firmware del gateway. CUPS no es necesario para enviar y recibir datos LoRaWAN, pero puede simplificar enormemente la gestión de gateways. Configurar CUPS también recuperará automáticamente las credenciales LNS y configurará LNS en tu gateway.

Hay más información sobre LoRa Basics™ Station disponible en el [Portal de Desarrolladores de Semtech](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/).

### Configuración del Gateway

- **Paso 1**: Ajustes de red LoRa
Navega a **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2**: Establecer Mode en Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/basic.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3**: Ajustes de Basic Station:

1. **Gateway EUI**: Obtendrá automáticamente el EUI del gateway conectado

2. **Server**: Selecciona LNS o CUPS
Consulta el paso anterior para más detalles sobre los servidores.

3. **URL:**
CUPS utiliza el URI: https://server-address:443, LNS utiliza el URI: wss://server-address:8887

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/url.png" alt="pir" width={600} height="auto" /></p>

4. **Authentication Mode:** Autenticación del servidor TLS y Client token
The Things Stack admite autenticación del servidor TLS y client token. Esto requiere un archivo *.trust* y un archivo *.key*.

5. **trust:** Este es el [certificado CA](https://en.wikipedia.org/wiki/Certificate_authority) que protege tu dominio.
Un archivo .pem que contiene certificados comunes está disponible en la [Referencia de certificados raíz](https://www.thethingsindustries.com/docs/reference/root-certificates/).
Descarga la **minimal certificate list**, luego copia el contenido de datos del archivo de certificado (el certificado se puede abrir en forma de texto).

6. **token:** Authorization:Bearer `<Your_API_Key>`

Los demás ajustes se pueden dejar por defecto o cambiarse para adaptarse a tus requisitos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/token.png" alt="pir" width={600} height="auto" /></p>

## Comprobar el estado del Gateway

Después de completar los ajustes, podemos ver los datos en vivo de tu gateway.

Ahora puedes ver que tu gateway está conectado a TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/status.png" alt="pir" width={600} height="auto" /></p>
