---
description: Conectar SenseCAP M2 Multi-Platform Gateway a TTN
title: Conectando a TTN
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network
last_update:
  date: 07/14/2023
  author: Jessie
---


Hay dos formas de conectarse a The Things Network: Packet forward y Basics™ Station. Elige una forma de conectar tu gateway.

Semtech UDP Packet Forwarder es el packet forwarder LoRaWAN® original, que se conecta a servidores a través del protocolo UDP de Semtech.

LoRa Basics™ Station es la forma preferida de conectar Gateways a The Things Stack.

## **Conectando vía Packet Forwarders**

El Semtech UDP Packet Forwarder es el packet forwarder LoRaWAN® original, que se conecta a servidores a través del protocolo UDP de Semtech.

### Configuración de TTN

- **Paso 1**: Inicia sesión en [The Things Stack](https://eu1.cloud.thethings.network/console). Si no tienes una cuenta de TTN, por favor regístrate primero.

- **Paso 2**: Registra el gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

**Gateway EUI**: El Gateway EUI se puede encontrar en la etiqueta del dispositivo o en la Consola Local

**Gateway ID**: Un identificador único para tu gateway (el ID debe contener solo letras minúsculas, números y guiones)

**Gateway name**: Un nombre para tu gateway

**Frequency plan**: Selecciona la frecuencia correspondiente según la versión de tu gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set1.png" alt="pir" width={600} height="auto" /></p>

Puedes verificar el Gateway en la vista general después del registro exitoso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/set2.png" alt="pir" width={600} height="auto" /></p>

### Configuración del Gateway

Configura el gateway a través de la interfaz web, por favor revisa la [Guía de Inicio Rápido](https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf) para iniciar sesión en la Consola Local primero.

- **Paso 1**: Configuración de Red LoRa

Navega a **LoRa** > **LoRa** **Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2:** Establece el Modo a Packet Forward

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/packet.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3:**Configuración del Packet Forwarder:

1. **Gateway EUI**: Obtendrá automáticamente el EUI del gateway conectado

2. **Server Address**:
Para Semtech UDP Packet Forwarder usa 'server-address'
La 'server-address' es la dirección de tu despliegue de The Things Stack.
Consulta [Server Addresses](https://www.thethingsindustries.com/docs/the-things-stack/concepts/server-addresses/) para más información.

3. **Server Port(Up/Down)**: El Up Port y Down Port son típicamente 1700.

Otras configuraciones pueden dejarse por defecto, o pueden cambiarse para adaptarse a tus requerimientos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/server_address.png" alt="pir" width={600} height="auto" /></p>

Haz clic en **Save&Apply** para aplicar tus configuraciones.

- **Paso 4**: Configuración del Plan de Canales

Navega a **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

Selecciona la Región y el plan de frecuencia según la elección real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/setting3.png" alt="pir" width={600} height="auto" /></p>

Después de configurar, haz clic en **Save&Apply**

## **Conectando vía Basic Station**

LoRa Basics™ Station es la forma preferida de conectar Gateways a The Things Stack.

### Configuración de TTN

- **Paso 1**: Registrar gateway

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/register2.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2**: Habilitar Require authenticated connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/enable_setting.png" alt="pir" width={600} height="auto" /></p>

Esto solo permitirá que un gateway se conecte si utiliza una conexión Basic Station habilitada con TLS o MQTT.

- **Paso 3:** Crear una clave API

Selecciona una opción para generar una clave API para el servicio CUPS o LNS automáticamente, luego puedes autorizar el gateway de inmediato.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/APIkey.png" alt="pir" width={600} height="auto" /></p>

Elige un Servidor según tu necesidad, luego haz clic en "Register gateway"

**Servidor de Red LoRaWAN (LNS)**

LNS establece una conexión de datos entre un gateway LoRa Basics™ Station y un Servidor de Red (en este caso, The Things Stack). Las tramas de subida y bajada LoRa® se intercambian a través de esta conexión de datos. El protocolo LNS es requerido para enviar y recibir datos LoRaWAN.

**Servidor de Configuración y Actualización (CUPS)**

CUPS permite a un Servidor de Red configurar gateways remotamente, y actualizar el firmware del gateway. CUPS no es requerido para enviar y recibir datos LoRaWAN, pero puede simplificar enormemente la gestión de gateways. Configurar CUPS también recuperará automáticamente las credenciales LNS y configurará LNS en tu gateway.

Más información sobre LoRa Basics™ Station está disponible en [Portal de Desarrolladores de Semtech](https://lora-developers.semtech.com/resources/tools/lora-basics/lora-basics-for-gateways/).

### Configuración del Gateway

- **Paso 1**: Configuración de Red LoRa
Navega a **LoRa** > **LoRa Network**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/lora_network.png" alt="pir" width={600} height="auto" /></p>

- **Paso 2**: Establecer Modo a Basics Station

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/basic.png" alt="pir" width={600} height="auto" /></p>

- **Paso 3**: Configuración de Basic Station:

1. **Gateway EUI**: Obtendrá automáticamente el EUI del gateway conectado

2. **Servidor**: Seleccionar LNS o CUPS
Consulta el paso anterior para más detalles sobre los servidores.

3. **URL:**
CUPS usa la URI: https://server-address:443, LNS usa la URI: wss://server-address:8887

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/url.png" alt="pir" width={600} height="auto" /></p>

4. **Modo de Autenticación:** Autenticación de servidor TLS y token de cliente
The Things Stack soporta autenticación de servidor TLS y token de cliente. Esto requiere un archivo *.trust* y un archivo *.key*. .

5. **trust:** Este es el [certificado CA](https://en.wikipedia.org/wiki/Certificate_authority) que asegura tu dominio.
Un archivo .pem que contiene certificados comunes está disponible en la [Referencia de Certificados Raíz](https://www.thethingsindustries.com/docs/reference/root-certificates/).
Descarga la **lista mínima de certificados**, luego copia el contenido de datos del archivo de certificado (el certificado puede abrirse en forma de texto).

6. **token:** Authorization:Bearer `<Tu_Clave_API>`

Otras configuraciones pueden dejarse por defecto, o pueden cambiarse para adaptarse a tus requerimientos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/token.png" alt="pir" width={600} height="auto" /></p>

## Verificar el Estado del Gateway

Después de que las configuraciones estén completadas, podemos ver los datos en vivo de tu gateway.

Puedes ver que tu gateway está conectado a TTN ahora.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/status.png" alt="pir" width={600} height="auto" /></p>
