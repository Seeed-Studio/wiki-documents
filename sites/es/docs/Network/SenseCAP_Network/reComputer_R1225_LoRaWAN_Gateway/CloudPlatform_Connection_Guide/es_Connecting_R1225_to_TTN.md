---
description: Conexión de R1225 a TTN
title: Conexión a TTN
keywords:
  - Gateway
  - SenseCAP
  - Controlador de Borde
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /connecting_r1225_to_ttn
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/30/2026
  author: Kian
createdAt: '2026-03-30'
url: https://wiki.seeedstudio.com/es/connecting_r1225_to_ttn/
updatedAt: '2026-03-30'
---
# Conexión a TTN

Hay dos formas de conectarse a The Things Network: Packet Forward y Basics™ Station. Elige una forma de conectar tu gateway.

Semtech UDP Packet Forwarder es el reenviador de paquetes LoRaWAN® original, que se conecta a los servidores a través del protocolo UDP de Semtech.

LoRa Basics™ Station es la forma preferida de conectar Gateways a The Things Stack.

## **Conexión mediante Packet Forwarder**

Semtech UDP Packet Forwarder es el reenviador de paquetes LoRaWAN® original, que se conecta a los servidores a través del protocolo UDP de Semtech.

### Configuración en TTN

- **Paso 1**: Inicia sesión en [The Things Stack](https://eu1.cloud.thethings.network/console). Si no tienes una cuenta TTN, regístrate primero.

- **Paso 2**: Registra el gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN1.png" alt="pir" width={800} height="auto" /></p>

**Gateway EUI**: El Gateway EUI se puede encontrar en la etiqueta del dispositivo o en la Consola Local

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN2.png" alt="pir" width={800} height="auto" /></p>

**Gateway ID**: Un identificador único para tu gateway (el ID solo debe contener letras minúsculas, números y guiones)

**Gateway name**: Un nombre para tu gateway

**Frequency plan**: Selecciona la frecuencia correspondiente según la versión de tu gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN3.png" alt="pir" width={800} height="auto" /></p>

### Configuración del Gateway

Configura el gateway mediante la interfaz Web UI, por favor consulta el [Quick Start](https://wiki.seeedstudio.com/es/r1225_quick_start/) para iniciar sesión primero en la Consola Local.

- **Paso 1**: Ajustes de Red LoRa

Ve a `LoRa` > `LoRa Network`

- **Paso 2:** Establece Mode en Packet Forwarder

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN4.png" alt="pir" width={800} height="auto" /></p>

- **Paso 3:** Ajustes de Packet Forwarder:

1. **Gateway EUI**: Obtendrá automáticamente el EUI del gateway conectado

2. **Server Address**:
Para Semtech UDP Packet Forwarder usa 'server-address'
El 'server-address' es la dirección de tu despliegue de The Things Stack.
Consulta [Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/) para más información.

3. **Server Port(Up/Down)**: Los puertos Up y Down suelen ser 1700.

Otros ajustes se pueden dejar por defecto, o se pueden cambiar para adaptarse a tus requisitos.

Haz clic en **`Save&Apply`** para aplicar tus ajustes.

- **Paso 4**: Ajustes de Channel Plan

Ve a  `LoRa` >  `Channel Plan`

Selecciona la Región y el plan de Frecuencia de acuerdo con la elección real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN5.png" alt="pir" width={800} height="auto" /></p>

Después de configurar, haz clic en **`Save&Apply`**

## **Conexión mediante Basic Station**

LoRa Basics™ Station es la forma preferida de conectar Gateways a The Things Stack.

### Configuración en TTN

- **Paso 1**: Inicia sesión en [The Things Stack](https://eu1.cloud.thethings.network/console). Si no tienes una cuenta TTN, regístrate primero.

- **Paso 2**: Registra el gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN1.png" alt="pir" width={800} height="auto" /></p>

**Gateway EUI**: El Gateway EUI se puede encontrar en la etiqueta del dispositivo o en la Consola Local

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN2.png" alt="pir" width={800} height="auto" /></p>

**Gateway ID**: Un identificador único para tu gateway (el ID solo debe contener letras minúsculas, números y guiones)

**Gateway name**: Un nombre para tu gateway

**Frequency plan**: Selecciona la frecuencia correspondiente según la versión de tu gateway

- **Paso 3**: Habilita Require authenticated connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN6.png" alt="pir" width={800} height="auto" /></p>

Esto solo permitirá que un gateway se conecte si utiliza una conexión Basic Station o MQTT habilitada para TLS.

- **Paso 4:** Crea una API key

Selecciona una opción para generar automáticamente una API key para el servicio CUPS o LNS, y así podrás autorizar el gateway de inmediato.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN7.png" alt="pir" width={800} height="auto" /></p>

Elige un Server según tus necesidades y luego haz clic en "Register gateway"

#### (LNS)LoRaWAN Network Server

LNS establece una conexión de datos entre un gateway LoRa Basics™ Station y un Network Server (en este caso, The Things Stack). Las tramas LoRa® de subida y bajada se intercambian a través de esta conexión de datos. El protocolo LNS es necesario para enviar y recibir datos LoRaWAN.

#### (CUPS)Configuration and Update Server 

CUPS permite que un Network Server configure gateways de forma remota y actualice el firmware del gateway. CUPS no es necesario para enviar y recibir datos LoRaWAN, pero puede simplificar en gran medida la gestión de los gateways. Configurar CUPS también recuperará automáticamente las credenciales de LNS y configurará LNS en tu gateway.

Hay más información sobre LoRa Basics™ Station disponible en el [Portal de Desarrolladores de Semtech](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/).

### Configuración del Gateway

- **Paso 1**: Ajustes de Red LoRa
Ve a **`LoRa`** > **`LoRa Network`**

- **Paso 2**: Establece Mode en Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN8.png" alt="pir" width={800} height="auto" /></p>

Las credenciales coinciden con la API key seleccionada en la plataforma TTN.

- **Paso 3**: Ajustes de Basic Station:

1. **Gateway EUI**: Obtendrá automáticamente el EUI del gateway conectado

2. **Server**: Selecciona LNS o CUPS
Consulta el paso anterior para más detalles sobre los servidores.

3. **URL:**
CUPS usa el URI: https://server-address:443, LNS usa el URI: wss://server-address:8887

4. **Authentication Mode:** Autenticación de servidor TLS y Client token
The Things Stack admite autenticación de servidor TLS y client token. Esto requiere un archivo *.trust* y un archivo *.key*.

5. **trust:** Este es el [certificado CA](https://en.wikipedia.org/wiki/Certificate_authority) que asegura tu dominio.
Hay un archivo .pem que contiene certificados comunes disponible en la [Referencia de Certificados Raíz](https://www.thethingsindustries.com/docs/reference/root-certificates/).
Descarga la **minimal certificate list**, luego copia el contenido de datos del archivo de certificado (el certificado se puede abrir en formato de texto).

6. **token:** Authorization:Bearer `<Your_API_Key>`

Otros ajustes se pueden dejar por defecto, o se pueden cambiar para adaptarse a tus requisitos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN9.png" alt="pir" width={800} height="auto" /></p>

## Comprobar el estado del Gateway

Después de completar los ajustes, podemos ver los datos en vivo de tu gateway.

Ahora puedes ver que tu gateway está conectado a TTN.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Connecting_to_ttn/TTN.png" alt="pir" width={800} height="auto" /></p>