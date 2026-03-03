---
description: Comenzando con Machinechat JEDI
title: Comenzando con Machinechat JEDI
keywords:
  - reTerminal DM
  - Getting started
  - IIoT
  - Industrial 
  - Jedi MachineChat
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminalDM_Introduction_Jedi_MachineChat
last_update:
  date: 3/28/2024
  author: Kasun Thushara
---

# reTerminal DM y Machinechat JEDI: Tu Potencia de IoT Industrial

## Introducción

[Machinechat JEDI](https://www.machinechat.io/jedi) es un software de gestión de datos IoT (Internet de las Cosas) potente y versátil. Está diseñado para optimizar el proceso de recolección, visualización, monitoreo y respuesta a datos en tiempo real de una amplia gama de dispositivos, sensores y máquinas. El reTerminal DM de Seeed y el software Machinechat JEDI te permiten construir paneles de control personalizados en menos de 30 minutos. Rastrea operaciones, analiza tendencias, mejora la eficiencia y recibe alertas oportunas para prevenir interrupciones costosas

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot1.PNG" /></center>

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
      <th class="table-trnobg">XIAO ESP32C3</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
          <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparación del Software

Recomendamos instalar la versión **Bullesye** del SO Raspberry Pi de 64 bits desde su sitio web oficial.

## Instalar Machinechat JEDI en reTerminal DM

### Descargar JEDI

Visita el sitio web de Machinechat y elige entre JEDI Free Edition o JEDI Lite Trial Edition.

Ingresa tu dirección de correo electrónico. Recibirás un email con tu información de licencia y enlaces de descarga para todos los sistemas operativos compatibles. Haz clic en el enlace de descarga apropiado para tu sistema operativo.**En este caso Raspberry pi de 64bit**

### Descomprimir y Ejecutar

El archivo descargado es un archivo ZIP. Extrae el contenido a una ubicación de tu elección en reTerminal DM.

Abre Terminal y ejecuta. Reemplaza este **/path/to/jedi/folder** con la ubicación de la carpeta.

```sh
cd /path/to/jedi/folder
```

Lanzar JEDI

```sh
./mcjedi.bin
```

### Accediendo a la Interfaz Web de JEDI

Abre un navegador web en reTerminal DM y escribe

```sh
http://localhost:9123
```

### Configuración y Activación

Lee y acepta el EULA y completa el formulario, proporcionando un nombre de usuario, contraseña y respuestas a las preguntas de desafío (utilizadas para la recuperación de contraseña).

Usa tus credenciales recién creadas.

Ingresa la clave de licencia proporcionada en tu correo electrónico de descarga. JEDI se conectará brevemente a internet para validar y activar tu licencia.

## Prueba Rápida

### Crear un Pipeline de Datos

Abre tu IDE de Python favorito en tu portátil. (como pycharm/Vs code)
copia y pega.

```sh
import requests
import json

url = 'http://<jedi_ip>:8100/v1/data/mc'  # Replace <jedi_ip> with your reTerminal DM IP address

payload = {
    "context": {
        "target_id": "my_PC",
        "target_ip": "192.168.1.10"  #PC IP
    },
    "data": {
        "temperature": 25.5,
        "humidity": 68
    }
}

headers = {'Content-Type': 'application/json'}
response = requests.post(url, data=json.dumps(payload), headers=headers)

if response.status_code == 200:
    print('Data sent successfully')
else:
    print('Error sending data:', response.text)

```

### Visualizar y Explorar

¡Hora del Dashboard! En el Panel de Navegación haz clic en Data Dashboard. Este dashboard fue pre-creado para ti. Ahora añadiremos un gráfico de Medidor a este dashboard.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/webinterface1.PNG" /></center>

- Haz clic en **ADD CHART** para añadir un nuevo gráfico al **Data Dashboard**.
- Haz clic en **Name** e introduce un nombre para el gráfico.
- Haz clic en **Chart Type** y selecciona **Gauge**.
- Haz clic en **Source** y selecciona el **target_id** que fue enviado con los datos. Si usaste el código de ejemplo o payload proporcionado arriba, verás **my_PC** en la lista.
- Haz clic en **Property** y selecciona una propiedad (ej. temperature o humidity).
- Haz clic en **ADD** para guardar la configuración y añadir el gráfico al dashboard.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/Gaugeconfig.PNG" /></center>

Podrás ver un Medidor en el dashboard.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/gauge.png" /></center>

## Recolector de Datos MQTT

JEDI ofrece una robusta gama de recolectores de datos pre-configurados, disponibles inmediatamente para uso inmediato. Estos recolectores atienden situaciones típicas de IoT y abarcan:

- **HTTP**: Permite la recepción de datos desde dispositivos, scripts y otras aplicaciones vía API HTTP.
- **Broker MQTT**: Facilita la adquisición de datos desde sensores y dispositivos a través de MQTT, un protocolo de mensajería IoT ampliamente utilizado.
- **TCP**: Permite la recuperación de datos desde dispositivos que se comunican vía conexiones TCP sin procesar.
- **Serial**: Establece conexiones con dispositivos que transmiten datos sobre puertos seriales (ej. placas Arduino, receptores GPS, etc.).

Así que vamos a discutir sobre el protocolo MQTT más popular.

### Prepara tu Xiao

Antes de subir el código por favor configura **SSID** **Contraseña WiFi** **IP del Servidor MQTT (IP de JEDI)** **Nombre de Usuario MQTT** **Contraseña MQTT**. En este ejemplo vamos a enviar algunos datos ficticios a Machine Chat JEDI.

```sh
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "ABC";
const char* password = "XXXXX";
const char* mqtt_server = "192.XXX.X.XXX";  // Replace with your MQTT broker's IP
const int mqtt_port = 1883;  // Default MQTT port
const char* mqtt_username = "ABC";
const char* mqtt_password = "ABC123";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  client.setCallback(callback);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
  client.setServer(mqtt_server, mqtt_port);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // Generate random values for each lab: VOC, human presence, temperature, and humidity
  for (int lab = 1; lab <= 3; lab++) {
    int voc = random(60, 80);
    int presence = random(0, 3); // Assuming presence is represented as a boolean (0 for no presence, 1 for presence)
    bool acState = false; // Default A/C state is off
    float temperature = random(18, 30); // Assuming temperature is in Celsius
    int humidity = random(30, 70); // Assuming humidity is a percentage
    bool fire = false;

    // Check if temperature is greater than 25 and human presence is true
    if (temperature > 25 && presence) {
      acState = true; // Turn on the A/C
    }

    // Construct payload
    String payload = "{\"lab\":" + String(lab) + ",\"voc\":" + String(voc) + ",\"presence\":" + String(presence) + ",\"acState\":" + String(acState) + ",\"temperature\":" + String(temperature) + ",\"humidity\":" + String(humidity) +",\"fire\":" + String(fire) + "}";

    // Publish payload for the current lab
    client.publish(("Lab" + String(lab) + "/data").c_str(), payload.c_str());
  }

  delay(10000); // Wait for 10 seconds before sending next data
}

void reconnect() {
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");
    if (client.connect("ESP32Client", mqtt_username, mqtt_password)) {
      Serial.println("connected");
      // Subscribe to topics if needed
       client.subscribe("rpi/data");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("Message arrived in topic: ");
    Serial.println(topic);

    Serial.print("Message:");
    for (int i = 0; i < length; i++) {
        Serial.print((char)payload[i]);
    }
    Serial.println();
}
```

### Habilitar el Broker MQTT

- Navega a **Configuración** -> **Recolectores de Datos**.

- Haz clic en el botón **AGREGAR CONECTOR** para añadir un nuevo recolector.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt1.PNG" /></center>

- Selecciona "Broker MQTT" como el Tipo de Recolector.

- Opciones de Configuración Avanzada:

- IP de Escucha: La dirección IP en la que escucha el broker MQTT. Dirección IP de Jedi.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt2.PNG" /></center>

:::note

**Username/Password**: Habilita esta opción y configura un nombre de usuario y contraseña para la autenticación de clientes. Los clientes deberán proporcionar credenciales válidas para conectarse al broker MQTT. Por lo tanto, necesitarás reemplazar esta información en el código de Arduino.

:::

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt3.PNG" /></center>

En el panel de dispositivos, verás que nuestro dispositivo MQTT (ESP32Client) ha sido añadido.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/devicedashboard.PNG" /></center>

## Preparación del Panel de Control

### Crear Panel de Datos Personalizado

Los paneles de control de Machinechat JEDI ofrecen un método robusto y adaptable para convertir datos IoT en bruto en visualizaciones perspicaces. A través de una interfaz intuitiva de arrastrar y soltar, los usuarios pueden crear sin esfuerzo paneles personalizados para satisfacer sus requisitos únicos, llevando efectivamente a la realidad sus narrativas de datos.

Estos paneles vienen en varios tipos, incluyendo **Paneles de Datos** para diseños personalizables basados en cuadrícula, **Paneles de Dispositivos** para mostrar datos de dispositivos y sensores en tiempo real, y **Paneles de Sistema** para superponer datos sobre imágenes de fondo, ideales para crear diagramas de procesos o interfaces estilo HMI.

- Navega a la sección **Dashboard Manager** en la interfaz web de JEDI.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard1.PNG" /></center>

- Luego haz clic en **ADD DASHBOARD**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard2.PNG" /></center>

- Elige un Tipo de panel (En este caso es Data view), Nombre y Descripción y guárdalo.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard3.PNG" /></center>

Después, notarás la adición del nuevo panel a la barra lateral. Vamos a añadir algunos widgets. Primero, vamos a añadir un gráfico de líneas.

### Añadir Gráfico de Líneas

- Haz clic en **ADD CHART**

- Dale un Nombre como desees y **Selecciona el tipo de gráfico** como **Line**. Y haz clic en el **signo más** para añadir fuentes de datos.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard8.PNG" /></center>

- Añade Fuente, la etiqueta de Propiedad, y dale un nombre y unidades adecuadas.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/linecjhart.PNG" /></center>

- Después de hacer clic en **ADD** en la ventana Añadir fuente de datos y la ventana Nuevo gráfico, podrás ver un bonito gráfico de líneas.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/chart1.PNG" /></center>

### Añadir un Gráfico de Líneas Apiladas

- Nuevamente haz clic en **Add graph**.

- Dale un **Nombre** como desees y Selecciona **Tipo de gráfico como Line**. También habilita **Modo de múltiples ejes Y**. Usaremos uno para "Temperatura" y otro para "Humedad". Y haz clic en el **signo más** para añadir fuentes de datos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline.PNG" /></center>

- **Añade Fuente**, la **etiqueta de propiedad**, y dale un nombre y unidades adecuadas y haz clic en el botón **Add**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline2.PNG" /></center>

- Añadiendo la Segunda Métrica: Haz clic en el icono **plus** para añadir otra métrica al mismo Gráfico de Líneas.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline3.PNG" /></center>

- Nuevamente Añade **Fuente**, la **etiqueta de Propiedad**, y dale un nombre y unidades adecuadas también selecciona **Eje Y a la Derecha**. Luego haz clic en **Add**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline4.PNG" /></center>

- Así que finalmente haz clic en **Add**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline5.PNG" /></center>

¡¡Y eso es todo!! Podrás obtener un gráfico de líneas apiladas.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline6.PNG" /></center>

En conclusión, Machinechat JEDI con reTerminal DM se presenta como una solución transformadora, revolucionando el panorama de las operaciones industriales y la gestión de infraestructura inteligente. Al integrar sin problemas las capacidades IIoT, esto empodera a los usuarios para aprovechar datos en tiempo real de dispositivos conectados, ofreciendo perspectivas sin precedentes sobre procesos de manufactura, logística de cadena de suministro y eficiencia operacional.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot2.PNG" /></center>

## Recursos

- **[Página Web]** [Documentación Oficial de Machinechat](https://docs.machinechat.io/)

## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
