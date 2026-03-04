---
description:  Grafana for reTerminal
title:  Grafana for reTerminal
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /weather-dashboard-with-Grafana-reTerminal
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

# Build Your Own Weather Dashboard Using Grafana

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)

## Introduction

We here will introduce you how to make your own weather dashboard on your reTerminal using Grafana, which is given credit to [Michaelm Klementsk](https://www.the-diy-life.com/grafana-weather-dashboard-on-the-reterminal-by-seeed-studio/).

[InflexDB](https://www.influxdata.com/)  is an [open-source](https://en.wikipedia.org/wiki/Open-source_software) [time-series database](https://en.wikipedia.org/wiki/Time_series_database) (TSDB) developed by the company InfluxData. It is written in the [Go programming language](https://en.wikipedia.org/wiki/Go_(programming_language)) for storage and retrieval of [time series](https://en.wikipedia.org/wiki/Time_series) data in fields such as operations monitoring, application metrics, [Internet of Things](https://en.wikipedia.org/wiki/Internet_of_Things) sensor data, and real-time analytics. It also has support for processing data from [Graphite](https://en.wikipedia.org/wiki/Graphite_(software)).

[Grafana](https://grafana.com/) is a [multi-platform](https://en.wikipedia.org/wiki/Multi-platform) [open source](https://en.wikipedia.org/wiki/Open_source) analytics and [interactive visualization](https://en.wikipedia.org/wiki/Interactive_visualization) web application. It provides charts, graphs, and alerts for the web when connected to supported data sources. A licensed Grafana Enterprise version with additional capabilities is also available as a self-hosted installation or an account on the Grafana Labs cloud service. It is expandable through a [plug-in system](https://en.wikipedia.org/wiki/Plug-in_(computing)). End users can create complex monitoring dashboards using interactive query builders. Grafana is divided into a [front end and back end](https://en.wikipedia.org/wiki/Front_end_and_back_end), written in [TypeScript](https://en.wikipedia.org/wiki/TypeScript) and [Go](https://en.wikipedia.org/wiki/Go_(programming_language)), respectively.

We are going to use an ESP32 to collect temperature, humidity and pressure readings. These will then be posted to a time-series database in [InfluxDB](https://www.influxdata.com/products/influxdb-cloud/). InfluxDB can be run locally on a Raspberry Pi or on their cloud server, we’re going to be using their cloud server. We’re then going to be using an analytics and visualisation application called [Grafana](https://grafana.com/) to display the information that has been stored in the database. Grafana can also be run locally on our Raspberry Pi (or reTerminal in this case) or on their cloud server. We’re going to be installing and running it locally on our reTerminal. You don’t need to use a separate Pi for InfluxDB and Grafana, you could run both locally on your reTerminal if you’d like to – I just don’t want to have to leave the reTerminal running all the time in order to collect the data.

![Data Processing Between ESP32 and Grafana](https://www.the-diy-life.com/wp-content/uploads/2021/12/Data-Processing-Between-ESP32-and-Grafana-1024x576.jpg)

## Materials Required

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)
- Power Supply
- ESP32
- [Grove Sensor’s From Beginner Kit](https://www.seeedstudio.com/Arduino-Sensor-Kit-Base-p-4743.html)
- Breadboard
- Breadboard Jumpers

## Azure and InflexDB Setup

We need to create a virtual machine first.

- **Step 1.** Open the following page and log in to your [Microsoft Azure](https://portal.azure.com/#home) services. Click the `Virtual machines` and click `Create`.

![image-20220124131855082](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124131855082.png)

- **Step 2.** Select Ubuntu 18.04 system as default system in the virtual machine. Click `Review + create` and go to the next page.

![image-20220124132225793](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132225793.png)

- **Step 3.** All the configurations are selected, click `Create`.

![image-20220124132800871](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132800871.png)

The progess will take a while, when it is complete, click the `Go to resource` button.

![image-20220124133101855](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133101855.png)

Then it will move to the below page. Click the `Networking`, choose `Add inbound port rule` and add `8086` port with any destination.

<img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133706479.png" alt="image-20220124133706479" />

- **Step 4.** Copy these commands to install the docker and enable it.

```bash
sudo apt udpate
sudo apt install docker docker-compose -y
sudo systemctl enable --now docker && sudo systemctl start docker
sudo systemctl status docker
```

![image-20220124134313484](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134313484.png)

- **Step 5.** Use the command to pull the InfluxDB image down.

```bash
sudo docker pull influxdb:2.1.1
```

![image-20220124134409253](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134409253.png)

- **Step 6.** Apply the command to run the InfluxDB background.

```bash
sudo docker run -d --name influxdb -p 8086:8086 influxdb:2.1.1
```

![image-20220124135326814](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135326814.png)

- **Step 7.** Open your browser and then input `http://yourip:8086`(Your IP). Click "Get Started" to use it.

![image-20220124135533274](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135533274.png)

- **Step 8.** Record your `Organization Name`  and `Bucket Name` and then click "Continue"

![image-20220124135632177](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135632177.png)

- **Step 9.** Click `Data > API Tokens`

![image-20220124140028985](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140028985.png)

Azure and InflexDB now will be set up, next we will move to the ESP32.

## ESP32 Setup

To collect the weather data, we are going to be using an ESP32 with a DHT11 sensor connected to pin 4 and a BMP280 pressure sensor connected to the I2C interface (pins 21 and 22). The example here is using two Grove sensor modules from the [beginner kit](https://amzn.to/31my42U) as it already has all of the required electronics built into them (additional resistors etc.).

![ESP32 Circuit Diagram](https://www.the-diy-life.com/wp-content/uploads/2021/12/ESP32-Circuit-Diagram-1024x576.jpg)

- **Step 1.** Open the [Arduino IDE](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) and [install the libraries](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/). Here we provide two installations.

1. Use Library Manager

```
1. Open the Arduino IDE and click to the "Sketch" menu and then Include Library > Manage Libraries.
2. Type 'influxdb' in the search box
3. Install the 'InfluxDBClient for Arduino' library
```

2. Manual Installation

```
1. cd <arduino-sketch-location>/library.
2. git clone https://github.com/tobiasschuerg/InfluxDB-Client-for-Arduino
3. Restart the Arduino IDE
```

- **Step 2.** Copy the following codes in the skecth.

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

**Note:** The codes are not finished. If you set up your API token and bucket, the generated code on the Arduino interface page accessed from your InfluxDB dashboard will already contain the correct setup information, so you only need to copy it into your code.

![InfluxDB Arduino Interface Instructions](https://www.the-diy-life.com/wp-content/uploads/2021/12/InfluxDB-Arduino-Interface-Instructions-1024x576.jpg)

- **Step 3.** Upload the codes and check the results.

![image-20220124140133524](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140133524.png)

After a while, we can see that the information is now available in our InfluxDB database, so we know that our ESP32 is working correctly. Now we can move on to installing Grafana on our reTerminal and setting it up to display the information in our database.

## Install and Set Up Grafana On The reTerminal

Next, we are going to install Grafan by following the terminal instructions outlined on their website for an [installation on Debian or Ubuntu](https://grafana.com/docs/grafana/latest/installation/debian/). Then we just need to start Grafana and set it to re-start on bootup.

![Installing Grafana](https://www.the-diy-life.com/wp-content/uploads/2021/12/Installing-Grafana-1024x542.jpg)

- **Step 1.**  Access the Grafana web interface by opening up a new tab in the browser, pointing to localhost, port 3000. You can open your browser on your reTerminal and type `http://localhost:3000`

![Grafana Web Interface Localhost3000](https://www.the-diy-life.com/wp-content/uploads/2021/12/Grafana-Web-Interface-Localhost3000-1024x534.jpg)

We then need to configure it to read in the data from InfluxDB by entering the sever and authentication information. This can all be found through your InfluxDB web interface and is quite similar to the information your ESP32 is publishing data to.

- **Step 2.**  Click the `Setting` button and choose `Data sources`.

![image-20220124144300849](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144300849.png)

- **Step 3.**  Type the `InfluxDB` in the filter and choose `InfluxDB`.

![image-20220124144322352](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144322352.png)

Now we have installed and set Up Grafana On The reTerminal

## [Configure Grafana to use Flux](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#configure-grafana-to-use-flux)

With **Flux** selected as the query language in your InfluxDB data source, we will configure the InfluxDB connection:

- **Step 1.**  Set the **Connection** and click **Save & Test**. The information respectively are:

  - **URL**: Your [InfluxDB URL](https://docs.influxdata.com/influxdb/v2.0/reference/urls/).

     ```sh
     http://yourip:8086/
     ```

     [Change InfluxDB URL](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#)
  - **Organization**: Your InfluxDB [organization name **or** ID](https://docs.influxdata.com/influxdb/v2.0/organizations/view-orgs/).
  - **Token**: Your InfluxDB [API token](https://docs.influxdata.com/influxdb/v2.0/security/tokens/).
  - **Default Bucket**: The default [bucket](https://docs.influxdata.com/influxdb/v2.0/organizations/buckets/) to use in Flux queries.
  - **Min time interval**: The [Grafana minimum time interval](https://grafana.com/docs/grafana/latest/features/datasources/influxdb/#min-time-interval).

![img](https://docs.influxdata.com/img/influxdb/2-0-tools-grafana.png)

Grafana should connect to the InfluxDB 2.0 datasource and returns the results of the test.

- **Step 2.**  Add panel here.

![image-20220124143542830](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143542830.png)

- **Step 3.**  Back to the `InfluxDB`, follow the instrucions below and then create script.

![image-20220124143752559](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143752559.png)

- **Step 4.**  Copy the scripts and paste them into the reTerminal.

![image-20220124143812005](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143812005.png)

![image-20220124151052928](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151052928.png)

- **Step 5.** Check the results on the reTerminal and the information should be shown as below.

![image-20220124164221791](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png)

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)
