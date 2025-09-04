---
description: Conectar Broker Mosquitto MQTT a AWS IoT con Placas Arduino
title: Conectar Broker Mosquitto MQTT a AWS IoT con Placas Arduino
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Arduino-AWS-IOT-Bridge
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Cómo Conectar Broker Mosquitto MQTT a AWS IoT con Placas Arduino

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/AWSIOT.gif"/></div>
<br />

Los gateways están presentes en la mayoría de las discusiones arquitectónicas, tanto en entornos de [IoT industrial](https://aws.amazon.com/iot/solutions/industrial-iot/) como en el hogar conectado. Hoy, te mostraremos cómo implementar la función **Bridge** del Agente [**Mosquitto**](https://mosquitto.org/) para habilitar el uso de gateways a través de la mensajería MQTT que configura el intercambio bidireccional de datos con [**AWS IoT Core**](https://aws.amazon.com/iot-core/). Esto permitirá que tu dispositivo se comunique localmente con el Agente Mosquitto y AWS IoT Core para beneficiarse del poder de la Nube AWS.

En este tutorial, se utilizará [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) como ejemplo para explicar cómo conectar el Broker Mosquitto MQTT a AWS IoT.

## Por Qué Conectar Broker MQTT a AWS IoT

Si tienes implementaciones IoT más antiguas, es posible que ya tengas dispositivos conectados a un broker MQTT, como [**Mosquitto**](https://mosquitto.org/). En este caso, tu agente MQTT puede estar muy cerca de la ubicación del sensor implementado (broker MQTT local), o en una ubicación remota como la Nube. Puedes configurar el gateway local para comunicarse con AWS IoT Core como se muestra en el siguiente diagrama.

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/AWS-bridge.png"/></div>

## Comenzando

### Construyendo Broker Mosquitto AWS Usando Docker

#### Paso 1: Configurar Cuenta AWS

Navega a [AWS](https://docs.aws.amazon.com/iot/latest/developerguide/iot-console-signin.html) y configura la cuenta.

Navega a `User` -> `My Security Credentials`, y obtén el **Access Key ID** y la **Access Key**.

#### Paso 2: Clonar el Repositorio

Clona este [repositorio](https://github.com/ansonhe97/aws_mosquitto_broker) en una ubicación de tu disco.

#### Paso 3: Instalar y Configurar AWS CLI

Instala AWS CLI desde [aquí](http://docs.aws.amazon.com/cli/latest/userguide/installing.html).

Ejecuta `aws configure` en la terminal y escribe tu Región, tu Access ID y Keys, como sigue:

```sh
aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: eu-central-1
Default output format [None]: json
```

#### Paso 3: Crear una política IAM para el puente

Ejecuta el siguiente comando para crear una política para el puente:

```sh
aws iot create-policy --policy-name bridge --policy-document '{"Version": "2012-10-17","Statement": [{"Effect": "Allow","Action": "iot:*","Resource": "*"}]}'
```

#### Paso 4: Crear Certificados

Ve al directorio `aws_mosquitto_broker/config/certs` y ejecuta lo siguiente para crear certificados:

```sh
cd aws_mosquitto_broker/config/certs

sudo aws iot create-keys-and-certificate --set-as-active --certificate-pem-outfile cert.crt --private-key-outfile private.key --public-key-outfile public.key --region eu-central-1
```

Luego puedes ejecutar `aws iot list-certificates` para verificar los certificados creados. Copia el ARN en la forma de `arn:aws:iot:eu-central-1:0123456789:cert/xyzxyz`:

```sh
aws iot list-certificates
```

Adjunta la política a tu certificado. Reemplaza el `{REPLACE_ARN_CERT}` con tu ARN copiado `arn:aws:iot:eu-central-1:0123456789:cert/xyzxyz`:

```sh
aws iot attach-principal-policy --policy-name bridge --principal {REPLACE_ARN_CERT}
```

Añade permisos de lectura a la **clave privada**, **clave pública** y **certificado del cliente** (dentro de la carpeta `certs`):

```sh
sudo chmod 644 private.key && sudo chmod 644 public.key && sudo chmod 644 cert.crt
```

Descarga también el certificado CA raíz de Amazon en el directorio `certs`:

```sh
sudo curl https://www.websecurity.digicert.com/content/dam/websitesecurity/digitalassets/desktop/pdfs/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem -o rootCA.pem
```

#### Paso 5: Editar el archivo de configuración personalizado de mosquitto

Renombra `awsbridge.conf.sample` a `awsbridge.conf`:

```sh
mv awsbridge.conf.sample awsbridge.conf
```

Edita `config/conf.d/awsbridge.conf` y sigue las instrucciones de awsbridge.conf:

```sh
nano config/conf.d/awsbridge.conf
```

**Nota:** Ejecuta `aws iot describe-endpoint` para obtener el endpoint de AWS IoT.

#### Paso 6: Construir el archivo Docker

Regresa a la ubicación raíz `aws_mosquitto_broker` y ejecuta lo siguiente:

```sh
docker build -t aws_mqtt_broker .
```

**Nota:** Asegúrate de haber instalado docker en tu PC primero.

#### Paso 7: Ejecutar la Imagen Docker

```sh
docker run -ti -p 1883:1883 -p 9001:9001 --name mqtt aws_mqtt_broker
```

Salida de consola / registro:

```sh
1592301141: mosquitto version 1.4.15 (build date 2018-03-04 15:19:39+0000) starting
1592301141: Config loaded from /mosquitto/config/mosquitto.conf.
1592301141: Opening ipv4 listen socket on port 1883.
1592301141: Opening ipv6 listen socket on port 1883.
1592301141: Bridge local.bridgeawsiot doing local SUBSCRIBE on topic localgateway_to_awsiot
1592301141: Bridge local.bridgeawsiot doing local SUBSCRIBE on topic both_directions
1592301141: Connecting bridge awsiot (aq53tian3vbby.iot.eu-central-1.amazonaws.com:8883)
1592301141: Bridge bridgeawsiot sending CONNECT
1592301144: Received CONNACK on connection local.bridgeawsiot.
1592301144: Bridge local.bridgeawsiot sending SUBSCRIBE (Mid: 1, Topic: awsiot_to_localgateway, QoS: 1)
1592301144: Bridge local.bridgeawsiot sending UNSUBSCRIBE (Mid: 2, Topic: localgateway_to_awsiot)
1592301144: Bridge local.bridgeawsiot sending SUBSCRIBE (Mid: 3, Topic: both_directions, QoS: 1)
1592301144: Received SUBACK from local.bridgeawsiot
1592301144: Received UNSUBACK from local.bridgeawsiot
1592301145: Received SUBACK from local.bridgeawsiot
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/dockerbroker.png"/></div>

#### Paso 8: Probando el Broker Local

**Publicar desde la consola de AWS IoT**

1.- Desde la Consola de Administración de AWS ve a `Servicios de AWS IoT` -> `Prueba`

2.- Suscríbete a los temas mencionados en nuestro archivo de configuración `awsiot_to_localgateway`, `localgateway_to_awsiot` y `both_directions`.

3.- Publica al tema `awsiot_to_localgateway` (hola mundo).

4.- Revisa el registro o la salida de consola en nuestro broker local para algo como esto:

`1493564128: Received PUBLISH from local.bridgeawsiot (d0, q0, r0, m0, 'awsiot_to_localgateway', ... (45 bytes))`

**Nota:** Asegúrate de que esté seleccionada la región `eu-central-1`.

**Publicar desde el Host**

Flujo de trabajo: `Broker Local(PC Host)` -> `Gateway de Docker` -> `AWS IoT`.

Ejecuta lo siguiente en la terminal para publicar desde el host a AWS IoT:

`mosquitto_pub -h localhost -p 1883 -q 1 -d -t localgateway_to_awsiot  -i clientid1 -m "{\"key\": \"helloFromLocalGateway\"}"`

:::note
Asegúrate de tener [mosquitto](https://mosquitto.org/download/) instalado en tu PC.
:::

### Publicando Mensajes Desde Wio Terminal

Ahora, podemos usar Wio Terminal como uno de los dispositivos finales para publicar o suscribirse a temas!

#### Instalando las Librerías Dependientes

Esta demostración depende del núcleo Wi-Fi de Wio Terminal, por favor sigue [**esta**](https://wiki.seeedstudio.com/es/Wio-Terminal-Network-Overview/) wiki primero.

**PASO.1 Instalar la librería Pubsubclient**

1. Visita los repositorios de [pubsubclient](https://github.com/knolleary/pubsubclient) y descarga todo el repositorio a tu unidad local.

2. Ahora, la librería FS puede ser instalada en el Arduino IDE. Abre el Arduino IDE, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `pubsubclient` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

**PASO.2 Instalar la Librería ArduinoJson**

1. Visita los repositorios de [ArduinoJson](https://github.com/bblanchon/ArduinoJson) y descarga todo el repositorio a tu unidad local.

2. Ahora, la librería ArduinoJson puede ser instalada en el Arduino IDE. Abre el Arduino IDE, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `ArduinoJson` que acabas de descargar.

#### Subir el Sketch de Arduino

Descarga el Sketch de Arduino desde [**aquí**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_AWSIoT_Bridge/WioTerminal_AWSIoT_Bridge.ino).

- Configura los ajustes de Wi-Fi `ssid` y `password`.
- Cambia el `mqttserver` a la Dirección IP de tu Broker MQTT (La Dirección IP de tu PC).

Sube el código y abre el Monitor Serie para verificar! Ahora, si presionas el botón en Wio Terminal publicará un mensaje a AWS IoT y también puedes ver mensajes entrantes desde la Consola de AWS IoT.

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/result.png"/></div>

:::note
Asegúrate de que el docker del broker local esté funcionando todo el tiempo.
:::

## Recursos

- [Cómo Hacer un Puente del Broker MQTT Mosquitto a AWS IoT](https://aws.amazon.com/cn/blogs/iot/how-to-bridge-mosquitto-mqtt-broker-to-aws-iot/)

## Soporte Técnico y Discusión de Productos

<br/>
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
