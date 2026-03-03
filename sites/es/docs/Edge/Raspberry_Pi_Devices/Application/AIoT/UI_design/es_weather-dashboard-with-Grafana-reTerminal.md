---
description: Grafana para reTerminal
title: Grafana para reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/weather-dashboard-with-Grafana-reTerminal
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

# Construye Tu Propio Panel de Control Meteorológico Usando Grafana

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)

## Introducción

Aquí te presentaremos cómo hacer tu propio panel de control meteorológico en tu reTerminal usando Grafana, lo cual se le da crédito a [Michaelm Klementsk](https://www.the-diy-life.com/grafana-weather-dashboard-on-the-reterminal-by-seeed-studio/).

[InfluxDB](https://www.influxdata.com/) es una [base de datos de series temporales](https://en.wikipedia.org/wiki/Time_series_database) (TSDB) de [código abierto](https://en.wikipedia.org/wiki/Open-source_software) desarrollada por la empresa InfluxData. Está escrita en el [lenguaje de programación Go](https://en.wikipedia.org/wiki/Go_(programming_language)) para el almacenamiento y recuperación de datos de [series temporales](https://en.wikipedia.org/wiki/Time_series) en campos como monitoreo de operaciones, métricas de aplicaciones, datos de sensores del [Internet de las Cosas](https://en.wikipedia.org/wiki/Internet_of_Things) y análisis en tiempo real. También tiene soporte para procesar datos de [Graphite](https://en.wikipedia.org/wiki/Graphite_(software)).

[Grafana](https://grafana.com/) es una aplicación web de análisis y [visualización interactiva](https://en.wikipedia.org/wiki/Interactive_visualization) [multiplataforma](https://en.wikipedia.org/wiki/Multi-platform) de [código abierto](https://en.wikipedia.org/wiki/Open_source). Proporciona gráficos, diagramas y alertas para la web cuando se conecta a fuentes de datos compatibles. También está disponible una versión con licencia Grafana Enterprise con capacidades adicionales como instalación auto-hospedada o una cuenta en el servicio en la nube de Grafana Labs. Es expandible a través de un [sistema de complementos](https://en.wikipedia.org/wiki/Plug-in_(computing)). Los usuarios finales pueden crear paneles de control de monitoreo complejos usando constructores de consultas interactivos. Grafana está dividido en un [front end y back end](https://en.wikipedia.org/wiki/Front_end_and_back_end), escritos en [TypeScript](https://en.wikipedia.org/wiki/TypeScript) y [Go](https://en.wikipedia.org/wiki/Go_(programming_language)), respectivamente.

Vamos a usar un ESP32 para recopilar lecturas de temperatura, humedad y presión. Estas luego se publicarán en una base de datos de series temporales en [InfluxDB](https://www.influxdata.com/products/influxdb-cloud/). InfluxDB puede ejecutarse localmente en una Raspberry Pi o en su servidor en la nube, vamos a usar su servidor en la nube. Luego vamos a usar una aplicación de análisis y visualización llamada [Grafana](https://grafana.com/) para mostrar la información que se ha almacenado en la base de datos. Grafana también puede ejecutarse localmente en nuestra Raspberry Pi (o reTerminal en este caso) o en su servidor en la nube. Vamos a instalarlo y ejecutarlo localmente en nuestro reTerminal. No necesitas usar una Pi separada para InfluxDB y Grafana, podrías ejecutar ambos localmente en tu reTerminal si quisieras – simplemente no quiero tener que dejar el reTerminal funcionando todo el tiempo para recopilar los datos.

![Data Processing Between ESP32 and Grafana](https://www.the-diy-life.com/wp-content/uploads/2021/12/Data-Processing-Between-ESP32-and-Grafana-1024x576.jpg)

## Materiales Requeridos

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)
- Fuente de Alimentación
- ESP32
- [Sensores Grove del Kit para Principiantes](https://www.seeedstudio.com/Arduino-Sensor-Kit-Base-p-4743.html)
- Protoboard
- Cables Puente para Protoboard

## Configuración de Azure e InfluxDB

Necesitamos crear una máquina virtual primero.

- **Paso 1.** Abre la siguiente página e inicia sesión en tus servicios de [Microsoft Azure](https://portal.azure.com/#home). Haz clic en `Virtual machines` y haz clic en `Create`.

![image-20220124131855082](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124131855082.png)

- **Paso 2.** Selecciona el sistema Ubuntu 18.04 como sistema predeterminado en la máquina virtual. Haz clic en `Review + create` y ve a la siguiente página.

![image-20220124132225793](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132225793.png)

- **Paso 3.** Todas las configuraciones están seleccionadas, haz clic en `Create`.

![image-20220124132800871](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132800871.png)

El progreso tomará un tiempo, cuando esté completo, haz clic en el botón `Go to resource`.

![image-20220124133101855](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133101855.png)

Luego se moverá a la página de abajo. Haz clic en `Networking`, elige `Add inbound port rule` y agrega el puerto `8086` con cualquier destino.

<img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133706479.png" alt="image-20220124133706479" />

- **Paso 4.** Copia estos comandos para instalar docker y habilitarlo.

```bash
sudo apt udpate
sudo apt install docker docker-compose -y
sudo systemctl enable --now docker && sudo systemctl start docker
sudo systemctl status docker
```

![image-20220124134313484](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134313484.png)

- **Paso 5.** Usa el comando para descargar la imagen de InfluxDB.

```bash
sudo docker pull influxdb:2.1.1
```

![image-20220124134409253](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134409253.png)

- **Paso 6.** Aplica el comando para ejecutar InfluxDB en segundo plano.

```bash
sudo docker run -d --name influxdb -p 8086:8086 influxdb:2.1.1
```

![image-20220124135326814](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135326814.png)

- **Paso 7.** Abre tu navegador y luego ingresa `http://tuip:8086`(Tu IP). Haz clic en "Get Started" para usarlo.

![image-20220124135533274](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135533274.png)

- **Paso 8.** Registra tu `Organization Name` y `Bucket Name` y luego haz clic en "Continue"

![image-20220124135632177](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135632177.png)

- **Paso 9.** Haz clic en `Data > API Tokens`

![image-20220124140028985](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140028985.png)

Azure e InflexDB ahora estarán configurados, a continuación nos moveremos al ESP32.

## Configuración del ESP32

Para recopilar los datos meteorológicos, vamos a usar un ESP32 con un sensor DHT11 conectado al pin 4 y un sensor de presión BMP280 conectado a la interfaz I2C (pines 21 y 22). El ejemplo aquí está usando dos módulos de sensor Grove del [kit para principiantes](https://amzn.to/31my42U) ya que ya tiene toda la electrónica requerida integrada en ellos (resistores adicionales, etc.).

![ESP32 Circuit Diagram](https://www.the-diy-life.com/wp-content/uploads/2021/12/ESP32-Circuit-Diagram-1024x576.jpg)

- **Paso 1.** Abre el [Arduino IDE](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) e [instala las librerías](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/). Aquí proporcionamos dos instalaciones.

1. Usar Library Manager

```
1. Open the Arduino IDE and click to the "Sketch" menu and then Include Library > Manage Libraries.
2. Type 'influxdb' in the search box
3. Install the 'InfluxDBClient for Arduino' library
```

2. Instalación Manual

```
1. cd <arduino-sketch-location>/library.
2. git clone https://github.com/tobiasschuerg/InfluxDB-Client-for-Arduino
3. Restart the Arduino IDE
```

- **Paso 2.** Copia los siguientes códigos en el sketch.

```cpp
#include <Wire.h>                                                   //Import the required libraries
#include "DHT.h"
#include "Seeed_BMP280.h"
#include <WiFiMulti.h>
WiFiMulti wifiMulti;
#define DEVICE "ESP32"

#include <InfluxDbClient.h>
#include <InfluxDbCloud.h>

#define WIFI_SSID "xxxxxxxx"                                            //Network Name
#define WIFI_PASSWORD "xxxxxxxxxx"                                        //Network Password
#define INFLUXDB_URL "http://xxxxxxxx:8086"                                                 //InfluxDB v2 server url, e.g. https://eu-central-1-1.aws.cloud2.influxdata.com (Use: InfluxDB UI -> Load Data -> Client Libraries)
#define INFLUXDB_TOKEN "xxxxxxxxx"                                                                                             //InfluxDB v2 server or cloud API token (Use: InfluxDB UI -> Data -> API Tokens -> <select token>)
#define INFLUXDB_ORG "xxxxxxx"                                                                                               //InfluxDB v2 organization id (Use: InfluxDB UI -> User -> About -> Common Ids )
#define INFLUXDB_BUCKET "xxxxxxx"                                                                                            //InfluxDB v2 bucket name (Use: InfluxDB UI ->  Data -> Buckets)
#define TZ_INFO "JST-9"                                                                                                //InfluxDB v2 timezone

DHT dht(4,DHT11);                                                   //DHT and BMP sensor parameters
BMP280 bmp280;

int temp = 0;                                                       //Variables to store sensor readings
int humid = 0;
int pressure = 0;

//InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN, InfluxDbCloud2CACert);                 //InfluxDB client instance with preconfigured InfluxCloud certificate
InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN); 

Point sensor("weather");                                            //Data point

void setup() 
{
  Serial.begin(115200);                                             //Start serial communication
  
  dht.begin();                                                      //Connect to the DHT Sensor
  if(!bmp280.init())                                                //Connect to pressure sensor
    Serial.println("bmp280 init error!");

  WiFi.mode(WIFI_STA);                                              //Setup wifi connection
  wifiMulti.addAP(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("Connecting to wifi");                               //Connect to WiFi
  while (wifiMulti.run() != WL_CONNECTED) 
  {
    Serial.print(".");
    delay(100);
  }
  Serial.println();

  sensor.addTag("device", DEVICE);                                   //Add tag(s) - repeat as required
  sensor.addTag("SSID", WIFI_SSID);

  timeSync(TZ_INFO, "pool.ntp.org", "time.nis.gov");                 //Accurate time is necessary for certificate validation and writing in batches

  if (client.validateConnection())                                   //Check server connection
  {
    Serial.print("Connected to InfluxDB: ");
    Serial.println(client.getServerUrl());
  } 
  else 
  {
    Serial.print("InfluxDB connection failed: ");
    Serial.println(client.getLastErrorMessage());
  }
}

void loop()                                                          //Loop function
{
  temp = dht.readTemperature();                                      //Record temperature
  humid = dht.readHumidity();                                        //Record temperature
  pressure = bmp280.getPressure()/100;                               //Record pressure

  sensor.clearFields();                                              //Clear fields for reusing the point. Tags will remain untouched

  sensor.addField("temperature", temp);                              // Store measured value into point
  sensor.addField("humidity", humid);                                // Store measured value into point
  sensor.addField("pressure", pressure);                             // Store measured value into point

    
  if (wifiMulti.run() != WL_CONNECTED)                               //Check WiFi connection and reconnect if needed
    Serial.println("Wifi connection lost");

  if (!client.writePoint(sensor))                                    //Write data point
  {
    Serial.print("InfluxDB write failed: ");
    Serial.println(client.getLastErrorMessage());
  }
  
  Serial.print("Temp: ");                                            //Display readings on serial monitor
  Serial.println(temp);
  Serial.print("Humidity: ");
  Serial.println(humid);
  Serial.print("Pressure: ");
  Serial.println(pressure);
  delay(1000);                                                      //Wait 60 seconds
}
```

**Nota:** Los códigos no están terminados. Si configuras tu token de API y bucket, el código generado en la página de interfaz de Arduino accedida desde tu panel de InfluxDB ya contendrá la información de configuración correcta, por lo que solo necesitas copiarlo en tu código.

![InfluxDB Arduino Interface Instructions](https://www.the-diy-life.com/wp-content/uploads/2021/12/InfluxDB-Arduino-Interface-Instructions-1024x576.jpg)

- **Paso 3.** Sube los códigos y verifica los resultados.

![image-20220124140133524](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140133524.png)

Después de un tiempo, podemos ver que la información ahora está disponible en nuestra base de datos InfluxDB, por lo que sabemos que nuestro ESP32 está funcionando correctamente. Ahora podemos proceder a instalar Grafana en nuestro reTerminal y configurarlo para mostrar la información en nuestra base de datos.

## Instalar y Configurar Grafana en el reTerminal

A continuación, vamos a instalar Grafana siguiendo las instrucciones de terminal descritas en su sitio web para una [instalación en Debian o Ubuntu](https://grafana.com/docs/grafana/latest/installation/debian/). Luego solo necesitamos iniciar Grafana y configurarlo para que se reinicie al arrancar.

![Installing Grafana](https://www.the-diy-life.com/wp-content/uploads/2021/12/Installing-Grafana-1024x542.jpg)

- **Paso 1.** Accede a la interfaz web de Grafana abriendo una nueva pestaña en el navegador, apuntando a localhost, puerto 3000. Puedes abrir tu navegador en tu reTerminal y escribir `http://localhost:3000`

![Grafana Web Interface Localhost3000](https://www.the-diy-life.com/wp-content/uploads/2021/12/Grafana-Web-Interface-Localhost3000-1024x534.jpg)

Luego necesitamos configurarlo para leer los datos de InfluxDB ingresando la información del servidor y autenticación. Todo esto se puede encontrar a través de tu interfaz web de InfluxDB y es bastante similar a la información a la que tu ESP32 está publicando datos.

- **Paso 2.** Haz clic en el botón `Setting` y elige `Data sources`.

![image-20220124144300849](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144300849.png)

- **Paso 3.** Escribe `InfluxDB` en el filtro y elige `InfluxDB`.

![image-20220124144322352](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144322352.png)

Ahora hemos instalado y configurado Grafana en el reTerminal

## [Configurar Grafana para usar Flux](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#configure-grafana-to-use-flux)

Con **Flux** seleccionado como el lenguaje de consulta en tu fuente de datos de InfluxDB, configuraremos la conexión de InfluxDB:

- **Paso 1.** Configura la **Connection** y haz clic en **Save & Test**. La información respectivamente es:

  - **URL**: Tu [URL de InfluxDB](https://docs.influxdata.com/influxdb/v2.0/reference/urls/).

     ```sh
     http://yourip:8086/
     ```

     [Cambiar URL de InfluxDB](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#)
  - **Organization**: El nombre **o** ID de tu [organización](https://docs.influxdata.com/influxdb/v2.0/organizations/view-orgs/) de InfluxDB.
  - **Token**: Tu [token de API](https://docs.influxdata.com/influxdb/v2.0/security/tokens/) de InfluxDB.
  - **Default Bucket**: El [bucket](https://docs.influxdata.com/influxdb/v2.0/organizations/buckets/) predeterminado para usar en las consultas Flux.
  - **Min time interval**: El [intervalo mínimo de tiempo de Grafana](https://grafana.com/docs/grafana/latest/features/datasources/influxdb/#min-time-interval).

![img](https://docs.influxdata.com/img/influxdb/2-0-tools-grafana.png)

Grafana debería conectarse a la fuente de datos de InfluxDB 2.0 y devolver los resultados de la prueba.

- **Paso 2.** Añade panel aquí.

![image-20220124143542830](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143542830.png)

- **Paso 3.** Regresa a `InfluxDB`, sigue las instrucciones a continuación y luego crea el script.

![image-20220124143752559](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143752559.png)

- **Paso 4.** Copia los scripts y pégalos en el reTerminal.

![image-20220124143812005](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143812005.png)

![image-20220124151052928](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151052928.png)

- **Paso 5.** Verifica los resultados en el reTerminal y la información debería mostrarse como se indica a continuación.

![image-20220124164221791](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png)

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)
