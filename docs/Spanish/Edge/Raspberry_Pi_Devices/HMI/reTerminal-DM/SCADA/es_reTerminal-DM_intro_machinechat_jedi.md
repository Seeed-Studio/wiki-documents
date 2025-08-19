---
description: Empezando con Machinechat JEDI
title: Empezando con Machinechat JEDI
keywords:
  - reTerminal DM
  - Empezando
  - IIoT
  - Industrial 
  - Jedi MachineChat
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminalDM_Introduction_Jedi_MachineChat
last_update:
  date: 04/06/2025
  author: Erick González
---

# reTerminal DM & Machinechat JEDI: Tu Potencia IIoT Industrial

## Introducción

[Machinechat JEDI](https://www.machinechat.io/jedi) es un software de gestión de datos IoT (Internet de las Cosas) potente y versátil. Está diseñado para optimizar el proceso de recopilación, visualización, monitorización y respuesta a datos en tiempo real de una amplia gama de dispositivos, sensores y máquinas. El software reTerminal DM y Machinechat JEDI de Seeed te permiten construir dashboards personalizados en menos de 30 minutos. Realiza el seguimiento de operaciones, analiza tendencias, mejora la eficiencia y recibe alertas oportunas para prevenir costosos contratiempos.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot1.PNG" /></center>

## Empezando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software por adelantado según se describe aquí.

### Preparación del Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
      <th class="table-trnobg">XIAO ESP32C3</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg">
        <div style={{textAlign:'center'}}>
          <img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/>
        </div>
      </td>
      <td class="table-trnobg">
        <div style={{textAlign:'center'}}>
          <img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/>
        </div>
      </td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg">
        <div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
        </div>
      </td>
      <td class="table-trnobg">
        <div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
        </div>
      </td>
    </tr>
    </table>
</div>

### Preparación del Software

Se recomienda instalar la versión **Bullseye** del sistema operativo Raspberry Pi de 64 bits desde su sitio web oficial.

## Instalar Machinechat JEDI en reTerminal DM

### Descargar JEDI

Visita el sitio web de Machinechat y elige entre la Edición Gratuita de JEDI o la Edición de Prueba JEDI Lite.

Ingresa tu dirección de correo electrónico. Recibirás un correo con tu información de licencia y enlaces de descarga para todos los sistemas operativos soportados. Haz clic en el enlace de descarga apropiado para tu sistema operativo. **En este caso, para Raspberry Pi de 64 bits.**

### Descomprimir y Ejecutar

El archivo descargado es un archivo ZIP. Extrae su contenido en la ubicación que prefieras en reTerminal DM.

Abre la Terminal y ejecuta. Reemplaza **/path/to/jedi/folder** con la ruta donde se encuentra la carpeta.

```sh
cd /path/to/jedi/folder
```

Lanza JEDI

```sh
./mcjedi.bin
```

### Acceder a la Interfaz Web de JEDI

Abre un navegador web en reTerminal DM y escribe:

```sh
http://localhost:9123
```

### Configuración y Activación

Lee y acepta el EULA y completa el formulario, proporcionando un nombre de usuario, contraseña y respuestas a preguntas de seguridad (utilizadas para la recuperación de contraseña).

Utiliza las credenciales que acabas de crear.

Ingresa la clave de licencia proporcionada en el correo de descarga. JEDI se conectará brevemente a Internet para validar y activar tu licencia.

## Prueba Rápida

### Crear un Pipeline de Datos

Abre tu IDE de Python favorito en tu computadora (como PyCharm o VS Code) y copia-pega el siguiente código.

```sh
import requests
import json

url = 'http://<jedi_ip>:8100/v1/data/mc'  # Reemplaza <jedi_ip> con la dirección IP de tu reTerminal DM

payload = {
    "context": {
        "target_id": "my_PC",
        "target_ip": "192.168.1.10"  # IP de la PC
    },
    "data": {
        "temperature": 25.5,
        "humidity": 68
    }
}

headers = {'Content-Type': 'application/json'}
response = requests.post(url, data=json.dumps(payload), headers=headers)

if response.status_code == 200:
    print('Datos enviados con éxito')
else:
    print('Error al enviar datos:', response.text)
```

### Visualizar y Explorar

¡Es hora del Dashboard! En el Panel de Navegación, haz clic en **Data Dashboard**. Este dashboard fue preconfigurado para ti. Ahora vamos a agregar un gráfico de tipo Gauge a este dashboard.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/webinterface1.PNG" /></center>

- Haz clic en **ADD CHART** para agregar un nuevo gráfico al **Data Dashboard**.
- Haz clic en **Name** y escribe un nombre para el gráfico.
- Haz clic en **Chart Type** y selecciona **Gauge**.
- Haz clic en **Source** y selecciona el **target_id** que se envió con los datos. Si usaste el código o payload de ejemplo proporcionado anteriormente, verás **my_PC** en la lista.
- Haz clic en **Property** y selecciona una propiedad (por ejemplo, temperature o humidity).
- Haz clic en **ADD** para guardar la configuración y agregar el gráfico al dashboard.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/Gaugeconfig.PNG" /></center>

Podrás ver un gráfico Gauge en el dashboard.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/gauge.png" /></center>

## Recolector de Datos MQTT

JEDI ofrece una robusta serie de recolectores de datos preconfigurados, listos para usar de inmediato. Estos recolectores están diseñados para situaciones típicas de IoT e incluyen:

- **HTTP**: Permite la recepción de datos desde dispositivos, scripts y otras aplicaciones mediante una API HTTP.
- **Broker MQTT**: Facilita la adquisición de datos de sensores y dispositivos a través de MQTT, un protocolo de mensajería ampliamente utilizado en IoT.
- **TCP**: Permite la obtención de datos desde dispositivos que se comunican mediante conexiones TCP sin formato.
- **Serial**: Establece conexiones con dispositivos que transmiten datos a través de puertos serie (por ejemplo, placas Arduino, receptores GPS, etc.).

A continuación, se discutirá el protocolo MQTT, el más popular.

### Preparar Tu Xiao

Antes de subir el código, configura **SSID**, **Contraseña WiFi**, **IP del Servidor MQTT (IP de JEDI)**, **Nombre de Usuario MQTT** y **Contraseña MQTT**. En este ejemplo, vamos a enviar algunos datos de prueba a Machinechat JEDI.

```sh
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "ABC";
const char* password = "XXXXX";
const char* mqtt_server = "192.XXX.X.XXX";  // Reemplaza con la IP de tu broker MQTT
const int mqtt_port = 1883;  // Puerto MQTT por defecto
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
    Serial.println("Conectando a WiFi...");
  }

  Serial.println("Conectado a WiFi");
  client.setServer(mqtt_server, mqtt_port);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // Generar valores aleatorios para cada laboratorio: VOC, presencia humana, temperatura y humedad
  for (int lab = 1; lab <= 3; lab++) {
    int voc = random(60, 80);
    int presence = random(0, 3); // Asumiendo que la presencia se representa como un booleano (0 para sin presencia, 1 para presencia)
    bool acState = false; // Estado inicial del A/C apagado
    float temperature = random(18, 30); // Asumiendo que la temperatura está en Celsius
    int humidity = random(30, 70); // Asumiendo que la humedad es un porcentaje
    bool fire = false;

    // Comprobar si la temperatura es superior a 25 y hay presencia humana
    if (temperature > 25 && presence) {
      acState = true; // Encender el A/C
    }

    // Construir el payload
    String payload = "{\"lab\":" + String(lab) + ",\"voc\":" + String(voc) + ",\"presence\":" + String(presence) + ",\"acState\":" + String(acState) + ",\"temperature\":" + String(temperature) + ",\"humidity\":" + String(humidity) +",\"fire\":" + String(fire) + "}";

    // Publicar el payload para el laboratorio actual
    client.publish(("Lab" + String(lab) + "/data").c_str(), payload.c_str());
  }

  delay(10000); // Esperar 10 segundos antes de enviar nuevos datos
}

void reconnect() {
  while (!client.connected()) {
    Serial.println("Intentando conexión MQTT...");
    if (client.connect("ESP32Client", mqtt_username, mqtt_password)) {
      Serial.println("Conectado");
      // Suscribirse a temas si es necesario
       client.subscribe("rpi/data");
    } else {
      Serial.print("Fallo, rc=");
      Serial.print(client.state());
      Serial.println(" intentándolo de nuevo en 5 segundos");
      delay(5000);
    }
  }
}

void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("Mensaje recibido en el tema: ");
    Serial.println(topic);

    Serial.print("Mensaje:");
    for (int i = 0; i < length; i++) {
        Serial.print((char)payload[i]);
    }
    Serial.println();
}
```

### Habilitar el Broker MQTT

- Navega a **Settings** -> **Data Collectors**.

- Haz clic en el botón **ADD CONNECTOR** para agregar un nuevo recolector.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt1.PNG" /></center>

- Selecciona "MQTT Broker" como el Tipo de Recolector.

- Opciones de Configuración Avanzada:

  - Listen IP: La dirección IP en la que escucha el broker MQTT. En este caso, la IP de JEDI.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt2.PNG" /></center>

:::note
**Username/Password**: Habilita esta opción y configura el nombre de usuario y la contraseña para la autenticación del cliente. Los clientes deberán proporcionar credenciales válidas para conectarse al broker MQTT. Reemplaza estos datos en el código de Arduino.
:::

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt3.PNG" /></center>

En el dashboard del dispositivo, verás que nuestro dispositivo MQTT (ESP32Client) ha sido añadido.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/devicedashboard.PNG" /></center>

## Preparación del Dashboard

### Crear un Dashboard de Datos Personalizado

Los dashboards de Machinechat JEDI ofrecen un método robusto y adaptable para convertir datos IoT en visualizaciones perspicaces. A través de una interfaz intuitiva de arrastrar y soltar, los usuarios pueden crear dashboards personalizados para satisfacer sus requerimientos únicos, dando vida a la narrativa de sus datos.

Estos dashboards vienen en varios tipos, incluyendo **Data Dashboards** para diseños en cuadrícula personalizables, **Device Dashboards** para la visualización en tiempo real de datos de dispositivos y sensores, y **System Dashboards** para superponer datos sobre imágenes de fondo, ideales para crear diagramas de procesos o interfaces de estilo HMI.

- Navega a la sección **Dashboard Manager** en la interfaz web de JEDI.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard1.PNG" /></center>

- Luego, haz clic en **ADD DASHBOARD**.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard2.PNG" /></center>

- Elige un Tipo de dashboard (en este caso, vista de datos), asigna un nombre y descripción, y guárdalo.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard3.PNG" /></center>

Después, notarás que el nuevo dashboard se ha añadido a la barra lateral. Vamos a agregar algunos widgets. Primero, agregaremos un gráfico de líneas.

### Agregar un Gráfico de Líneas

- Haz clic en **ADD CHART**.

- Asigna un nombre a tu gusto y **Selecciona el tipo de gráfico** como **Line**. Luego, haz clic en el **icono de más** para añadir fuentes de datos.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard8.PNG" /></center>

- Agrega la Fuente, la etiqueta de la propiedad, y asigna un nombre y unidades adecuados.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/linecjhart.PNG" /></center>

- Luego, haz clic en **ADD**. En la ventana de agregar fuente de datos y el nuevo gráfico, podrás ver un atractivo gráfico de líneas.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/chart1.PNG" /></center>

### Agregar un Gráfico de Líneas Apiladas

- Nuevamente haz clic en **Add graph**.

- Asigna un **Nombre** a tu gusto y selecciona el **Tipo de gráfico como Line**. Además, habilita el **modo de múltiples ejes Y**. Usaremos uno para "Temperature" y otro para "Humidity". Luego, haz clic en el **icono de más** para añadir fuentes de datos.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline.PNG" /></center>

- **Agrega la Fuente**: la **etiqueta de la propiedad**, y asigna un nombre y unidades adecuados, luego haz clic en el botón **Add**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline2.PNG" /></center>

- Agregar la segunda métrica: Haz clic en el ícono **más** para añadir otra métrica al mismo gráfico de líneas.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline3.PNG" /></center>

- De nuevo, agrega la **Fuente**: la **etiqueta de la propiedad**, asigna un nombre y unidades adecuados y selecciona **Y Axis on Right**. Luego haz clic en **Add**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline4.PNG" /></center>

- Finalmente, haz clic en **Add**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline5.PNG" /></center>

Y ¡eso es todo! Obtendrás un gráfico de líneas apiladas.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline6.PNG" /></center>

En conclusión, Machinechat JEDI junto con reTerminal DM se presenta como una solución transformadora, revolucionando el panorama de las operaciones industriales y la gestión de infraestructuras inteligentes. Al integrar sin problemas las capacidades IIoT, esto empodera a los usuarios para aprovechar los datos en tiempo real de dispositivos conectados, ofreciendo perspectivas inigualables sobre procesos de manufactura, logística de la cadena de suministro y eficiencia operativa.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot2.PNG" /></center>

## Recursos

- **[Página Web]** [Documentación Oficial de Machinechat](https://docs.machinechat.io/)

# Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diversos canales de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
