---
description: Use XIAO ESP32C6 and sensors with AWS IoT Core to implement AI devices that can do anomaly detection.
title: Potenciando la IA con AWS IoT Core para el XIAO ESP32C6
keywords:
- xiao esp32c6
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32c6_aws_iot
last_update:
  date: 05/10/2025
  author: Guillermo
---

# Potenciando la IA con AWS IoT Core para el XIAO ESP32C6

Este Wiki sirve como una guía completa para desplegar un sistema avanzado de IoT que aprovecha la potencia de los servicios de AWS y el microcontrolador XIAO ESP32C6 para monitorear y analizar datos ambientales. Comenzando con la recolección fluida de datos de sensores, esta documentación navega a través de los pormenores de transmitir y almacenar esta información en AWS IoT Core y AWS Analytics, respectivamente. Se profundiza en la utilización de AWS Sagemaker para entrenar modelos de aprendizaje automático sobre patrones ambientales normales, enfatizando la capacidad del sistema para aprender y adaptarse a su contexto operativo para una mayor eficiencia.

Además, el Wiki describe la implementación de detección en tiempo real de anomalías utilizando el XIAO ESP32C6, un componente crítico que escanea activamente desviaciones respecto a la norma y desencadena alertas rápidamente. Resume el proceso completo de configuración de un mecanismo de alerta que notifica a las partes interesadas sobre condiciones anormales, asegurando una pronta atención y acción.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/0.jpg" style={{width:1000, height:'auto'}}/></div>

- [**Capturar datos de sensores en AWS IoT Core**](#Capturar_datos_de_sensores_en_AWS_IoT_Core).
- [**Almacenar los datos usando AWS Analytics**](#Almacenar_los_datos_usando_AWS_Analytics).
- [**Usar AWS Sagemaker para entrenar datos en entornos normales**](#Usar_AWS_Sagemaker_para_entrenar_datos_en_entornos_normales).
- [**XIAO ESP32C6 para detección de entornos anormales**](#XIAO_ESP32C6_para_detección_de_entornos_anormales).
- [**Notificación de mensaje de estado anormal**](#Notificación_de_mensaje_de_estado_anormal).

Al explorar este Wiki, los usuarios obtendrán una comprensión detallada del papel de cada componente en la creación de un sistema inteligente, receptivo y robusto de monitoreo ambiental, con información práctica sobre configuración y mantenimiento.

## Materiales Requeridos

Este ejemplo presentará el uso del XIAO ESP32C6 con el sensor de temperatura y humedad Grove DHT20 para completar la tarea de SageMaker en AWS IoT Core. A continuación, se detallan todos los dispositivos de hardware necesarios para completar esta rutina. 

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C6</th>
			<th>DHT20</th>
			<th>Placa de Extensión</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/extensionboard.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Capturar datos de sensores en AWS IoT Core

Aprovechamos una variedad de sensores conectados a la placa XIAO ESP32C6 para recolectar datos ambientales en tiempo real y cargarlos en AWS IoT Core. Esto nos proporciona un método confiable y seguro para manejar los vastos flujos de datos provenientes de los diferentes sensores.

Para registrarte en AWS IoT Core y crear un "Thing" o "Dispostivo" llamado "XIAO_ESP32C6", sigue los pasos a continuación. Ten en cuenta que este proceso asume que ya tienes una cuenta de Amazon Web Services. Si no la tienes, necesitarás [crear una](https://aws.amazon.com/) antes de continuar.

### Paso 1. Crear un Thing

Abre tu navegador web y dirígete a [AWS Management Console](https://aws.amazon.com/console/). Inicia sesión utilizando las credenciales de tu cuenta de AWS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/1.png" style={{width:1000, height:'auto'}}/></div>

Una vez que estés en la consola de administración de AWS, localiza el menú desplegable **Servicios** en la parte superior de la página. En el menú **Servicios**, haz clic en **IoT Core**. Si no lo encuentras, utiliza la barra de búsqueda en la parte superior para buscar **IoT Core**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/2.png" style={{width:1000, height:'auto'}}/></div>

En el panel de AWS IoT Core, haz clic en **Todos los dispositivos** en el panel de navegación izquierdo para expandir las opciones. Luego, haz clic en **Dispositivos**. Haz clic en el botón **Crear Dispositivo** en la esquina de la página "Things".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/3.png" style={{width:1000, height:'auto'}}/></div>

Elige **Crear una solo dispositivo** o **Create a single thing** para proceder con el registro de un único dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/5.png" style={{width:800, height:'auto'}}/></div>

En la página **Crear una Dispositivo** o **Create a thing**, ingresa **XIAO_ESP32C6** como el nombre para tu Thing. (Opcional) También puedes agregar tipos, grupos o atributos a tu Thing si es necesario. Para una configuración sencilla, puedes omitir estas opciones. Haz clic en "Siguiente".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/6.png" style={{width:900, height:'auto'}}/></div>

Ahora estarás en la página **Configurar el certificado del dispositivo**. AWS IoT Core requiere que los dispositivos utilicen certificados para una comunicación segura. Por favor, selecciona **Generar automáticamente un nuevo certificado (recomendado)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/7.png" style={{width:1000, height:'auto'}}/></div>

En la página **Adjuntar políticas al certificado**, si no tienes una política, necesitas crear una haciendo clic en **Crear política**. Serás llevado a una nueva página donde podrás crear una política que defina los permisos para tu Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/8.png" style={{width:1000, height:'auto'}}/></div>

Una vez que hayas creado y nombrado tu política, adjúntala a tu certificado recién creado marcando la casilla junto al nombre de la política y haciendo clic en **Crear**.

Necesitamos los siguientes permisos:
- **iot:Publish**
- **iot:Connect**
- **iot:Receive**
- **iot:Subscribe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/9.png" style={{width:1000, height:'auto'}}/></div>


Después de registrar tu Thing, serás redirigido a la página de detalles del Thing, donde podrás ver la información de tu Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/10.png" style={{width:1000, height:'auto'}}/></div>


Configura tu dispositivo (en este caso, XIAO_ESP32C6) para utilizar el certificado y la clave privada que descargaste al crear el Thing. Deberás seguir las instrucciones específicas para tu dispositivo para configurar el SDK de AWS IoT y establecer una conexión segura con AWS IoT Core.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/11.png" style={{width:600, height:'auto'}}/></div>

Una vez que tu Thing esté configurado y conectado a AWS IoT Core, podrás interactuar con él suscribiéndote a temas, publicando mensajes y utilizando el motor de reglas de AWS IoT Core para procesar los datos de IoT.

Recuerda mantener tus certificados y claves confidenciales, y seguir las mejores prácticas de seguridad. La documentación de AWS IoT Core proporciona guías y tutoriales detallados para configurar y gestionar dispositivos IoT.

### Paso 2. Preparación de encabezados basados en certificados

Crea un nuevo archivo de encabezado llamado **secrets.h** y pega el siguiente código de plantilla en el archivo de encabezado.


```cpp
#include <pgmspace.h>

#define SECRET
#define THINGNAME "DHTsensor"

const char WIFI_SSID[] = "YOUR_SSID";              //Cambia esto
const char WIFI_PASSWORD[] = "YOUR_PASSWORD";           //Cambia esto
const char AWS_IOT_ENDPOINT[] = "YOUR_AWS_IOT_ENDPOINT";       //Cambia esto

// Amazon Root CA 1
static const char AWS_CERT_CA[] PROGMEM = R"EOF(
-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----
)EOF";

// Certificado del dispositivo                                               //cambia esto
static const char AWS_CERT_CRT[] PROGMEM = R"KEY(
-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----


)KEY";

// Llave privada del dispositivo                                               //cambia esto
static const char AWS_CERT_PRIVATE[] PROGMEM = R"KEY(
-----BEGIN RSA PRIVATE KEY-----

-----END RSA PRIVATE KEY-----


)KEY";
```

Esta plantilla de código C++ está diseñada para un dispositivo IoT que se conecta a una red Wi-Fi y se comunica con el servicio AWS IoT. La plantilla incluye marcadores de posición para varias cadenas que debes reemplazar con tus credenciales y certificados reales. Así es como debes completar cada parte:

1. **Credenciales de Wi-Fi**:
   - WIFI_SSID: Reemplaza "YOUR_SSID" con el SSID (nombre) de tu red Wi-Fi.
   - WIFI_PASSWORD: Reemplaza "YOUR_PASSWORD" con la contraseña de tu red Wi-Fi.

2. **Endpoint de AWS IoT**:
   - AWS_IOT_ENDPOINT: Reemplaza "YOUR_AWS_IOT_ENDPOINT" con tu endpoint único de AWS IoT. Este endpoint es específico de tu cuenta de AWS IoT y región. Puedes encontrarlo en la configuración de la consola de AWS IoT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/12.png" style={{width:1000, height:'auto'}}/></div>

3. **Amazon Root CA 1 (Autoridad Certificadora)**:
   - `AWS_CERT_CA`: Entre los marcadores `-----BEGIN CERTIFICATE-----` y `-----END CERTIFICATE-----`, pega el certificado completo de Amazon Root CA 1 proporcionado por AWS. Este certificado permite que tu dispositivo confíe en la identidad del servidor.

4. **Certificado del Dispositivo**:
   - `AWS_CERT_CRT`: Reemplaza el marcador entre `-----BEGIN CERTIFICATE-----` y `-----END CERTIFICATE-----` con el certificado de tu dispositivo en formato PEM. Este certificado es único para tu dispositivo y se usa para autenticarlo con AWS IoT.

5. **Clave Privada del Dispositivo**:
   - `AWS_CERT_PRIVATE`: Entre los marcadores `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----`, pega la clave privada de tu dispositivo en formato PEM. Esta clave debe mantenerse en secreto y nunca debe compartirse, ya que se utiliza para probar la identidad de tu dispositivo al comunicarte con AWS IoT.

:::caution
**Amazon Root CA 1** corresponde a la información del archivo descargado **RSA 2048 bit key:Amazon Root CA 1**.
**Certificado del Dispositivo** corresponde a la información del archivo descargado **Device certificate**.
**Clave Privada del Dispositivo** corresponde a la información del archivo descargado **Private key file**.

Dado que este código contiene información sensible, como las credenciales de Wi-Fi y las claves privadas, es crucial mantenerlo seguro. No compartas el código modificado públicamente ni lo subas a repositorios públicos.
:::

### Paso 3. Subir el programa de adquisición de datos para XIAO ESP32C6

Por favor, conecta el sensor Grove DHT20 a la interfaz IIC del XIAO ESP32C6. Si buscas comodidad, te recomendamos comprar [Grove Base para XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html).

Luego, crea un nuevo proyecto en Arduino y guárdalo localmente. Toma el archivo **secrets.h** que creamos en el **Paso 2** y cópialo en el mismo directorio que el archivo .ino. Después, sube el siguiente código a XIAO ESP32C6 y los datos se enviarán al tema especificado a través de MQTT, basándose en las credenciales de AWS que proporcionaste.

<details>
<summary>Haz clic aquí para obtener una vista previa del código completo</summary>

```cpp
#include "secrets.h"
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include "WiFi.h"
#include "Wire.h"

//Configuración del DHT
#include "DHT.h"
#define DHTTYPE DHT20   // DHT 20
/*Nota: El DHT10 y DHT20 son diferentes de otros sensores DHT*, ya que usan interfaz I2C en lugar de un solo cable*/
/*Por lo tanto, no requieren un pin.*/
DHT dht(DHTTYPE);         // DHT10 DHT20 no necesitan definir un pin

//Configuración de MQTT
#define AWS_IOT_PUBLISH_TOPIC   "xiao_esp32c6/pub"
#define AWS_IOT_SUBSCRIBE_TOPIC "xiao_esp32c6/sub"

//almacenar datos de temperatura y humedad
float h;
float t;

//Configuración de la red
WiFiClientSecure net = WiFiClientSecure();
PubSubClient client(net);

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void connectAWS()
{
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
 
  Serial.println("Conectando a Wi-Fi");
 
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
 
  // Configura WiFiClientSecure para usar las credenciales del dispositivo AWS IoT
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);
 
  // Conectarse al servidor MQTT en el endpoint de AWS que definimos anteriormente
  client.setServer(AWS_IOT_ENDPOINT, 8883);
 
  // Crear un manejador de mensajes
  client.setCallback(messageHandler);
 
  Serial.println("Conectando a AWS IoT");
 
  while (!client.connect(THINGNAME))
  {
    Serial.print(".");
    delay(100);
  }
 
  if (!client.connected())
  {
    Serial.println("¡Tiempo de espera de AWS IoT!");
    return;
  }
 
  // Suscribirse a un tema
  client.subscribe(AWS_IOT_SUBSCRIBE_TOPIC);
 
  Serial.println("¡Conectado a AWS IoT!");
}

void publishMessage()
{
  StaticJsonDocument<200> doc;
  doc["humidity"] = h;
  doc["temperature"] = t;
  char jsonBuffer[512];
  serializeJson(doc, jsonBuffer); // imprimir al cliente
 
  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
}
 
void messageHandler(char* topic, byte* payload, unsigned int length)
{
  Serial.print("entrante: ");
  Serial.println(topic);
 
  StaticJsonDocument<200> doc;
  deserializeJson(doc, payload);
  const char* message = doc["message"];
  Serial.println(message);
}

void setup() {

    debug.begin(115200);
    debug.println("¡Prueba DHTxx!");
    Wire.begin();

    connectAWS();
    dht.begin();
}

void loop() {
    h = dht.readHumidity();
    t = dht.readTemperature();

    if (isnan(h) || isnan(t) )  // Verificar si alguna lectura falló y salir temprano (para intentar de nuevo).
    {
      Serial.println(F("¡Error al leer del sensor DHT!"));
      return;
    }
  
    Serial.print(F("Humedad: "));
    Serial.print(h);
    Serial.print(F("%  Temperatura: "));
    Serial.print(t);
    Serial.println(F("°C "));
  
    publishMessage();
    client.loop();
    delay(1000);
}
```
</details>

### Paso 4. Cliente de prueba MQTT

En AWS IoT Core, necesitamos suscribirnos al tema publicado por el XIAO ESP32C6 en el cliente de prueba MQTT para determinar si los datos del sensor se cargan correctamente en la cuenta de AWS de destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/13.png" style={{width:1000, height:'auto'}}/></div>

Si el programa está funcionando correctamente, deberías ver un conjunto de mensajes de datos para la temperatura y la humedad cada 1 segundo.

```json
{
    "humidity": 58,
    "temperature": 23.6
}
```

## Almacenar los datos utilizando AWS Analytics

Los datos recopilados se envían luego al servicio de AWS Analytics, el cual no solo almacena los datos sin procesar, sino que también nos proporciona poderosas herramientas de procesamiento y análisis de datos. Estas herramientas nos ayudan a extraer información valiosa de los datos recopilados.

### Paso 5. Configurar AWS IoT Analytics

Navega a AWS IoT Analytics en la Consola de AWS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/14.png" style={{width:1000, height:'auto'}}/></div>

En **Comenzar con AWS IoT Analytics**, completa el nombre del recurso recién creado e ingresa el tema de tu suscripción (por ejemplo, `xiao_esp32c6/pub`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/15.png" style={{width:1000, height:'auto'}}/></div>

Espera un momento (unos diez minutos aproximadamente) para que todos los recursos sean creados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/16.png" style={{width:1000, height:'auto'}}/></div>

### Paso 6. Crear una regla

Regresa a AWS IoT Core, haz clic en **Reglas** bajo **Enrutamiento de mensajes** en la barra de menú de la izquierda. Luego, haz clic en **Crear regla**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/17.png" style={{width:1000, height:'auto'}}/></div>

Proporciona un nombre para tu regla y una descripción opcional para ayudar a identificar su propósito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/18.png" style={{width:1000, height:'auto'}}/></div>

Define la declaración de la regla utilizando la sintaxis SQL de AWS IoT. Esta declaración especifica los criterios para filtrar y procesar los mensajes MQTT entrantes. Puedes usar comodines, funciones y operadores para coincidir con temas específicos, extraer datos del contenido del mensaje y aplicar transformaciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/19.png" style={{width:1000, height:'auto'}}/></div>

Selecciona el canal de IoT Analytics que creaste como el objetivo para la acción de la regla. Haz clic en el botón **Crear rol**. En la consola, proporciona un nombre para el rol, como **XIAO_ESP32C6_Role**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/20.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/21.png" style={{width:1000, height:'auto'}}/></div>

Revisa la configuración de tu regla y haz clic en el botón "Crear regla" para guardar y activar la regla.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/22.png" style={{width:1000, height:'auto'}}/></div>

Una vez que la regla esté creada, comenzará a procesar los mensajes MQTT entrantes que coincidan con la declaración de la regla definida. Las acciones de la regla se ejecutan cada vez que la regla es activada, permitiéndote enrutar y procesar los datos según tus requisitos específicos.

Puedes crear múltiples reglas en AWS IoT para manejar diferentes escenarios y necesidades de procesamiento de datos. Las reglas proporcionan una forma flexible y escalable de integrar tus dispositivos IoT con varios servicios de AWS y construir aplicaciones IoT poderosas.

### Paso 7. Almacenar los flujos de datos del sensor

Navega al servicio de AWS IoT Analytics. En el panel de AWS IoT Analytics, haz clic en la opción **Conjuntos de datos** en la barra lateral izquierda. Localiza el conjunto de datos que contiene los datos que deseas descargar y haz clic en su nombre para abrir la página de detalles del conjunto de datos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/25.png" style={{width:1000, height:'auto'}}/></div>

Antes de descargar el contenido del conjunto de datos, necesitas activar manualmente la generación del conjunto de datos. Selecciona **Ejecutar ahora**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/26.png" style={{width:1000, height:'auto'}}/></div>

AWS IoT Analytics procesará los datos y preparará el contenido del conjunto de datos según el rango de tiempo especificado. Dado que los datos del sensor se informan una vez por segundo, recomendamos un tiempo de recopilación de datos de al menos una hora o más en un entorno normal. Esto garantiza la precisión de los datos.

Espera a que la generación del conjunto de datos se complete. Puedes monitorear el progreso en la página de detalles del conjunto de datos. Una vez que el estado cambie a "COMPLETADO", el contenido del conjunto de datos estará listo para ser descargado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/28.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/23.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si el programa de XIAO funciona correctamente, pero no ves ninguna información de datos en el conjunto de datos, puedes hacer clic con el botón derecho en la pestaña del conjunto de datos y abrirla en una nueva página del navegador. Esto puede resolver tu problema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/27.png" style={{width:500, height:'auto'}}/></div>

En la página de detalles del conjunto de datos, verás información sobre el conjunto de datos, incluyendo su nombre, estado y la última hora de actualización.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/24.png" style={{width:1000, height:'auto'}}/></div>
:::

## Usar AWS Sagemaker para entrenar datos en entornos normales

Con AWS Sagemaker, entrenamos modelos de aprendizaje automático para reconocer patrones indicativos de un entorno normal. Sagemaker ofrece una plataforma integral que facilita el desarrollo, entrenamiento y despliegue de modelos de aprendizaje automático, permitiendo el procesamiento inteligente de datos ambientales.

### Paso 8. Crear una nueva instancia de cuaderno

Navega al servicio de Amazon SageMaker en la Consola de Administración de AWS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/29.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **Instancias de cuaderno** en el panel de SageMaker. Luego, haz clic en el botón **Crear instancia de cuaderno**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/30.png" style={{width:1000, height:'auto'}}/></div>

Rellena la información necesaria, como el tipo de instancia y el rol de IAM. Asegúrate de que el rol de IAM tenga **los permisos necesarios para acceder al bucket de S3** donde se almacenan tus datos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/34.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/31.png" style={{width:1000, height:'auto'}}/></div>

Una vez que el estado de la instancia sea **En servicio**, abre la interfaz de Jupyter notebook haciendo clic en el enlace **Abrir Jupyter**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/32.png" style={{width:1000, height:'auto'}}/></div>

Una vez abierto, seleccionamos **conda_python3** como nuestro entorno de código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/45.png" style={{width:1000, height:'auto'}}/></div>

Luego, necesitamos cargar nuestro conjunto de datos recopilado. Este conjunto de datos lo hemos descargado localmente en nuestra computadora en el **Paso 7**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/46.png" style={{width:1000, height:'auto'}}/></div>

Luego, podemos ingresar nuestro programa preparado dentro de Jupyter Notebook. O también puedes optar por cargar directamente el programa que proporcionamos.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/Jupyter_Notebook.ipynb">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descarga el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Ejecuta la primera sección del programa para verificar que los datos recopilados que has importado estén correctos. Es posible que necesites cambiar el nombre del archivo en el código al nombre de tu archivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/47.png" style={{width:600, height:'auto'}}/></div>

### Paso 9: Ejecutar todo el Jupyter Notebook

S3 se usa para almacenar conjuntos de datos de entrenamiento, conjuntos de datos de prueba, artefactos de modelos, etc. En SageMaker, las fuentes de datos generalmente provienen de los buckets de S3.  
Guardado de modelos: Los modelos entrenados también se guardan en S3 para su posterior despliegue e inferencia.

Luego, por favor, copia el segundo bloque de código y nombra el campo **bucket_name**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/48.png" style={{width:600, height:'auto'}}/></div>

Luego, simplemente ejecuta los bloques de código en Jupyter Notebook uno por uno.

:::note
Hay algunas rutas o nombres en Jupyter Notebook que deben modificarse de la siguiente manera antes de que puedan ejecutarse:

1. El valor de **ENDPOINT_NAME** en el bloque de código **In[22]** es el resultado después de ejecutar el bloque de código **In[19]**.
2. Por favor, configura el **bucket_name** de los bloques de código **In[3]** y **In[10]** con el mismo nombre.
3. Para **API_ENDPOINT** en el último bloque de código, utiliza tus propios valores.
:::

### Paso 10. Configurar AWS Lambda

Lambda se puede utilizar como un disparador para los flujos de trabajo de SageMaker. Por ejemplo, cuando se cargan datos en S3, puede activar una función Lambda para iniciar un trabajo de entrenamiento o procesamiento de SageMaker.

Inicia sesión en la Consola de Administración de AWS y navega al servicio de AWS Lambda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/37.png" style={{width:1000, height:'auto'}}/></div>

Haga clic en el botón **Crear función**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/38.png" style={{width:1000, height:'auto'}}/></div>

Selecciona la opción **Autor desde cero**. Proporciona un nombre para tu función Lambda, por ejemplo, **XIAO-ESP32C6-FUNCTION**.  
Selecciona el runtime deseado **Python3.9**. Elige un rol de ejecución para tu función Lambda. Puedes crear un nuevo rol o usar uno existente. Si decides crear un nuevo rol, selecciona **Crear un nuevo rol con permisos básicos de Lambda**. Haz clic en el botón **Crear función** para crear tu función Lambda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/39.png" style={{width:1000, height:'auto'}}/></div>

Navega a la consola de IAM (Gestión de Identidad y Accesos).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/40.png" style={{width:1000, height:'auto'}}/></div>

Luego, busca el nombre de la función Lambda que acabamos de crear y haz clic en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/41.png" style={{width:1000, height:'auto'}}/></div>

En la página del rol de IAM, haz clic en el botón **Adjuntar políticas**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/42.png" style={{width:1000, height:'auto'}}/></div>

Proporciona un nombre para la política, por ejemplo, **AmazonSageMakerFullAccess**. Haz clic en el botón **Agregar permisos** para añadir los permisos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/43.png" style={{width:1000, height:'auto'}}/></div>

Vuelve a la página de configuración de la función Lambda. Crea un nuevo evento de prueba o usa uno existente. Invoca la función Lambda con el evento de prueba para asegurarte de que se ejecute correctamente. Monitorea los registros de ejecución y los resultados de la función Lambda para verificar su comportamiento.

```
{"data": [62.93016434, 24.31583405]}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/44.png" style={{width:1000, height:'auto'}}/></div>

Copia [el siguiente fragmento](https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/Lambda.ipynb) en **Código**.

```python
#función lambda con sns
import boto3
import json

ENDPOINT_NAME = 'randomcutforest-2024-03-18-10-47-37-165'# Tu endpoitn aquí
runtime = boto3.client('runtime.sagemaker')
email_client = boto3.client('sns')

def lambda_handler(event, context):
    input = event['data']
    
    serialized_input = ','.join(map(str, input))

    response = runtime.invoke_endpoint(EndpointName=ENDPOINT_NAME, 
                                       ContentType='text/csv', 
                                       Body=serialized_input)

    result_str = response['Body'].read().decode()
    result_json = json.loads(result_str)
    inference = result_json['scores'][0]['score']
    
    try:
        if(inference>3):
            response_sns = email_client.publish(
                TopicArn='arn:aws:sns:us-east-1:381491976713:dhco2Topic2',# tu topico sns aquí
                Message='Enviroment data is abnormal',
                Subject='Enviroment Status'
            )
    except Exception as e:
        print(f"error: {e}")

    return inference
```

:::caution
Tenga cuidado de modificar el contenido del código para que sea suyo.
:::

Luego haga clic en el botón **Implementar** o **Deploy**.

### Consideraciones adicionales

- Asegúrate de tener los roles y políticas de IAM correctos para que SageMaker pueda acceder a los datos en S3.
- Considera utilizar la **Sintonización Automática de Modelos** de SageMaker para encontrar la mejor versión de tu modelo.
- Realiza un seguimiento de los costos, ya que entrenar modelos y desplegar puntos finales en SageMaker puede generar cargos significativos dependiendo de los recursos de cómputo utilizados.

Siempre consulta la documentación más reciente de AWS para obtener instrucciones detalladas y mejores prácticas, ya que la interfaz y las funcionalidades de los servicios de AWS se actualizan frecuentemente.

## Notificación de mensaje de estado anormal

Al detectar un estado anormal, el sistema envía inmediatamente una alerta a través de un mecanismo de notificación de mensajes al personal de mantenimiento, asegurando una intervención oportuna y la acción necesaria.

### Paso 11. Configurar Amazon SNS

Navega al servicio de Amazon SNS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/49.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en el botón **Create Topic**. Proporciona un nombre para tu tema, por ejemplo, "XIAO_ESP32C6_Topic".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/50.png" style={{width:1000, height:'auto'}}/></div>

En el panel de temas de SNS, haz clic en el tema recién creado. Luego, haz clic en el botón **Crear suscripción**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/51.png" style={{width:1000, height:'auto'}}/></div>

Elige el protocolo para la suscripción, como "Correo electrónico", "SMS", "HTTP/HTTPS", "AWS Lambda" o "Amazon SQS".

Proporciona los detalles del punto final según el protocolo seleccionado. Por ejemplo:

- Para suscripciones por correo electrónico, ingresa la dirección de correo electrónico.
- Para suscripciones por SMS, ingresa el número de teléfono.
- Para suscripciones por HTTP/HTTPS, ingresa la URL del punto final.
- Para suscripciones de AWS Lambda, selecciona la función Lambda.
- Para suscripciones de Amazon SQS, selecciona la cola SQS.

Haz clic en el botón **Crear suscripción** para crear la suscripción. Repite los pasos 2-5 para agregar más suscripciones al tema si es necesario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/52.png" style={{width:1000, height:'auto'}}/></div>


Luego, volvemos al código de Lambda y reemplazamos el campo **TopicArn** en el código con el campo **ARN** en el SNS.

### Paso 12. Dar permisos a SNS para Lambda

Navega a la consola de IAM (Administración de Identidad y Acceso).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/40.png" style={{width:1000, height:'auto'}}/></div>

Luego, busca el nombre de la función Lambda que acabamos de crear y haz clic en ella.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/41.png" style={{width:1000, height:'auto'}}/></div>

En la página del rol de IAM, haz clic en el botón **Adjuntar polizas**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/42.png" style={{width:1000, height:'auto'}}/></div>

Proporciona un nombre para la política, por ejemplo, **AmazonSNSFullAccess**. Haz clic en el botón **Agregar permisos** para añadir los permisos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/53.png" style={{width:1000, height:'auto'}}/></div>

### Paso 13. Configuración de API Gateway

Navega al servicio de Amazon API Gateway en la Consola de Gestión de AWS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/54.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en el botón **Crear API**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/55.png" style={{width:1000, height:'auto'}}/></div>

Selecciona **REST API** como el tipo de API y haz clic en **Construir**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/56.png" style={{width:1000, height:'auto'}}/></div>

Proporciona un nombre para tu API, por ejemplo, "XIAO_ESP32C6_API". Elige el tipo de endpoint **Regional** para tu API. Haz clic en el botón **Crear API** para crear tu API REST.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/57.png" style={{width:1000, height:'auto'}}/></div>


En el panel de API Gateway, selecciona tu API recién creada. Luego, selecciona **Crear recurso**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/58.png" style={{width:1000, height:'auto'}}/></div>

Proporciona un nombre para tu recurso, por ejemplo, "XIAO_ESP32C6_Resource". Haz clic en el botón **Crear recurso** para crear el recurso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/59.png" style={{width:1000, height:'auto'}}/></div>

Con el recurso recién creado seleccionado, selecciona **Crear método**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/60.png" style={{width:1000, height:'auto'}}/></div>

Elige **POST** como el método HTTP desde la lista desplegable. Selecciona **Función Lambda** como el tipo de integración. Elige la región donde se encuentra tu función Lambda. Ingresa el nombre de tu función Lambda, por ejemplo, "XIAO_ESP32C6_Function".  
Haz clic en el botón **Crear método** para guardar la configuración de la integración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/61.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **Desplegar API**. Elige un escenario de despliegue (por ejemplo, "prod", "dev") o crea uno nuevo. Proporciona una descripción para el despliegue si lo deseas. Haz clic en el botón **Desplegar** para desplegar tu API.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/63.png" style={{width:500, height:'auto'}}/></div>


En el panel de API Gateway, selecciona tu API y navega a la sección de "Etapas" (Stages). Expande la etapa de despliegue y haz clic en el método POST para tu recurso. En la sección **Invoke URL**, copia la URL proporcionada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/64.png" style={{width:1000, height:'auto'}}/></div>

Finalmente, copia y pega el [código de API Gateway](https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/api_gateway.ipynb) al final del Jupyter Notebook de SageMaker (crea un nuevo fragmento) y reemplaza el campo **API_ENDPOINT** en el código con la **Invoke URL**.

## XIAO ESP32C6 para detección de ambientes anormales

Una vez que se ha establecido un modelo de datos del ambiente normal, el XIAO ESP32C6 monitorea continuamente los datos del sensor para detectar cualquier anomalía potencial. Como un microcontrolador poderoso, es capaz de responder rápidamente cuando los datos indican una situación anormal.

### Paso 14. Cargar el programa de informes de datos en tiempo real para XIAO ESP32C6

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/GetResult/GetResult.ino">
    <strong><span><font color={'FFFFFF'} size={"4"}>Descarga el código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Obtén el programa anterior y reemplaza el campo **api** en el código con el tuyo. Luego, compila y carga el programa en el XIAO ESP32C6. ¡Felicidades! Los pasos se han completado hasta este punto, habrás finalizado exitosamente todos los pasos del proyecto. Tan pronto como haya una anomalía en el ambiente, recibirás una notificación de advertencia por correo electrónico enviada por el servicio AWS SNS.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte soporte en diversas áreas y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>


