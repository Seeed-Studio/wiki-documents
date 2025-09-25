---
description: 适用于 reTerminal 的 Grafana
title: 适用于 reTerminal 的 Grafana
keywords:
  - Edge
  - reTerminal Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/weather-dashboard-with-Grafana-reTerminal
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

# 使用 Grafana 构建您自己的天气仪表板

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)

## 介绍

我们将在这里向您介绍如何在您的 reTerminal 上使用 Grafana 制作您自己的天气仪表板，这要归功于 [Michaelm Klementsk](https://www.the-diy-life.com/grafana-weather-dashboard-on-the-reterminal-by-seeed-studio/)。

[InfluxDB](https://www.influxdata.com/) 是由 InfluxData 公司开发的[开源](https://en.wikipedia.org/wiki/Open-source_software)[时间序列数据库](https://en.wikipedia.org/wiki/Time_series_database) (TSDB)。它使用 [Go 编程语言](https://en.wikipedia.org/wiki/Go_(programming_language))编写，用于存储和检索运营监控、应用程序指标、[物联网](https://en.wikipedia.org/wiki/Internet_of_Things)传感器数据和实时分析等领域的[时间序列](https://en.wikipedia.org/wiki/Time_series)数据。它还支持处理来自 [Graphite](https://en.wikipedia.org/wiki/Graphite_(software)) 的数据。

[Grafana](https://grafana.com/) 是一个[多平台](https://en.wikipedia.org/wiki/Multi-platform)[开源](https://en.wikipedia.org/wiki/Open_source)分析和[交互式可视化](https://en.wikipedia.org/wiki/Interactive_visualization) Web 应用程序。当连接到支持的数据源时，它为 Web 提供图表、图形和警报。还提供具有附加功能的许可 Grafana Enterprise 版本，可作为自托管安装或 Grafana Labs 云服务上的帐户。它可通过[插件系统](https://en.wikipedia.org/wiki/Plug-in_(computing))进行扩展。最终用户可以使用交互式查询构建器创建复杂的监控仪表板。Grafana 分为[前端和后端](https://en.wikipedia.org/wiki/Front_end_and_back_end)，分别用 [TypeScript](https://en.wikipedia.org/wiki/TypeScript) 和 [Go](https://en.wikipedia.org/wiki/Go_(programming_language)) 编写。

我们将使用 ESP32 来收集温度、湿度和压力读数。然后这些数据将被发布到 [InfluxDB](https://www.influxdata.com/products/influxdb-cloud/) 中的时间序列数据库。InfluxDB 可以在 Raspberry Pi 上本地运行，也可以在他们的云服务器上运行，我们将使用他们的云服务器。然后我们将使用一个名为 [Grafana](https://grafana.com/) 的分析和可视化应用程序来显示存储在数据库中的信息。Grafana 也可以在我们的 Raspberry Pi（在这种情况下是 reTerminal）上本地运行，或者在他们的云服务器上运行。我们将在我们的 reTerminal 上本地安装和运行它。您不需要为 InfluxDB 和 Grafana 使用单独的 Pi，如果您愿意，您可以在您的 reTerminal 上本地运行两者 - 我只是不想为了收集数据而必须让 reTerminal 一直运行。

![ESP32 和 Grafana 之间的数据处理](https://www.the-diy-life.com/wp-content/uploads/2021/12/Data-Processing-Between-ESP32-and-Grafana-1024x576.jpg)

## 所需材料

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)
- 电源
- ESP32
- [Grove 传感器入门套件](https://www.seeedstudio.com/Arduino-Sensor-Kit-Base-p-4743.html)
- 面包板
- 面包板跳线

## Azure 和 InfluxDB 设置

我们需要首先创建一个虚拟机。

- **步骤 1.** 打开以下页面并登录到您的 [Microsoft Azure](https://portal.azure.com/#home) 服务。点击 `Virtual machines` 并点击 `Create`。

![image-20220124131855082](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124131855082.png)

- **步骤 2.** 在虚拟机中选择 Ubuntu 18.04 系统作为默认系统。点击 `Review + create` 并转到下一页。

![image-20220124132225793](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132225793.png)

- **步骤 3.** 所有配置都已选择，点击 `Create`。

![image-20220124132800871](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132800871.png)

进度需要一段时间，完成后，点击 `Go to resource` 按钮。

![image-20220124133101855](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133101855.png)

然后会转到下面的页面。点击 `Networking`，选择 `Add inbound port rule` 并添加 `8086` 端口，目标设置为任意。

<img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133706479.png" alt="image-20220124133706479" />

- **步骤 4.** 复制这些命令来安装 docker 并启用它。

```bash
sudo apt udpate
sudo apt install docker docker-compose -y
sudo systemctl enable --now docker && sudo systemctl start docker
sudo systemctl status docker
```

![image-20220124134313484](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134313484.png)

- **步骤 5.** 使用命令拉取 InfluxDB 镜像。

```bash
sudo docker pull influxdb:2.1.1
```

![image-20220124134409253](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134409253.png)

- **步骤 6.** 应用命令在后台运行 InfluxDB。

```bash
sudo docker run -d --name influxdb -p 8086:8086 influxdb:2.1.1
```

![image-20220124135326814](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135326814.png)

- **步骤 7.** 打开浏览器，然后输入 `http://yourip:8086`（您的IP地址）。点击"Get Started"开始使用。

![image-20220124135533274](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135533274.png)

- **步骤 8.** 记录您的 `Organization Name` 和 `Bucket Name`，然后点击"Continue"

![image-20220124135632177](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135632177.png)

- **步骤 9.** 点击 `Data > API Tokens`

![image-20220124140028985](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140028985.png)

Azure 和 InflexDB 现在已经设置完成，接下来我们将转到 ESP32。

## ESP32 设置

为了收集天气数据，我们将使用一个 ESP32，连接一个 DHT11 传感器到引脚 4，以及一个 BMP280 压力传感器连接到 I2C 接口（引脚 21 和 22）。这里的示例使用了来自[初学者套件](https://amzn.to/31my42U)的两个 Grove 传感器模块，因为它们已经内置了所有必需的电子元件（附加电阻等）。

![ESP32 Circuit Diagram](https://www.the-diy-life.com/wp-content/uploads/2021/12/ESP32-Circuit-Diagram-1024x576.jpg)

- **步骤 1.** 打开 [Arduino IDE](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/) 并[安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)。这里我们提供两种安装方式。

1. 使用库管理器

```
1. Open the Arduino IDE and click to the "Sketch" menu and then Include Library > Manage Libraries.
2. Type 'influxdb' in the search box
3. Install the 'InfluxDBClient for Arduino' library
```

2. 手动安装

```
1. cd <arduino-sketch-location>/library.
2. git clone https://github.com/tobiasschuerg/InfluxDB-Client-for-Arduino
3. Restart the Arduino IDE
```
- **步骤 2.** 在草图中复制以下代码。

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

**注意：** 代码尚未完成。如果您设置了 API 令牌和存储桶，从 InfluxDB 仪表板访问的 Arduino 接口页面上生成的代码将已经包含正确的设置信息，因此您只需要将其复制到您的代码中。

![InfluxDB Arduino Interface Instructions](https://www.the-diy-life.com/wp-content/uploads/2021/12/InfluxDB-Arduino-Interface-Instructions-1024x576.jpg)

- **步骤 3.** 上传代码并检查结果。

![image-20220124140133524](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140133524.png)

过一会儿，我们可以看到信息现在已经在我们的 InfluxDB 数据库中可用，所以我们知道我们的 ESP32 工作正常。现在我们可以继续在我们的 reTerminal 上安装 Grafana 并设置它来显示数据库中的信息。

## 在 reTerminal 上安装和设置 Grafana

接下来，我们将按照他们网站上概述的终端说明来安装 Grafana，用于[在 Debian 或 Ubuntu 上安装](https://grafana.com/docs/grafana/latest/installation/debian/)。然后我们只需要启动 Grafana 并将其设置为在启动时重新启动。

![Installing Grafana](https://www.the-diy-life.com/wp-content/uploads/2021/12/Installing-Grafana-1024x542.jpg)

- **步骤 1.** 通过在浏览器中打开新标签页访问 Grafana Web 界面，指向 localhost，端口 3000。您可以在 reTerminal 上打开浏览器并输入 `http://localhost:3000`

![Grafana Web Interface Localhost3000](https://www.the-diy-life.com/wp-content/uploads/2021/12/Grafana-Web-Interface-Localhost3000-1024x534.jpg)

然后我们需要配置它从 InfluxDB 读取数据，通过输入服务器和身份验证信息。这些都可以通过您的 InfluxDB Web 界面找到，与您的 ESP32 发布数据的信息非常相似。

- **步骤 2.** 点击 `Setting` 按钮并选择 `Data sources`。

![image-20220124144300849](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144300849.png)

- **步骤 3.** 在过滤器中输入 `InfluxDB` 并选择 `InfluxDB`。

![image-20220124144322352](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144322352.png)

现在我们已经在 reTerminal 上安装并设置了 Grafana

## [配置 Grafana 使用 Flux](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#configure-grafana-to-use-flux)

在您的 InfluxDB 数据源中选择 **Flux** 作为查询语言后，我们将配置 InfluxDB 连接：

- **步骤 1.** 设置 **Connection** 并点击 **Save & Test**。相应的信息为：

  - **URL**：您的 [InfluxDB URL](https://docs.influxdata.com/influxdb/v2.0/reference/urls/)。

     ```sh
     http://yourip:8086/
     ```

     [更改 InfluxDB URL](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#)
  - **Organization**：您的 InfluxDB [组织名称 **或** ID](https://docs.influxdata.com/influxdb/v2.0/organizations/view-orgs/)。
  - **Token**：您的 InfluxDB [API 令牌](https://docs.influxdata.com/influxdb/v2.0/security/tokens/)。
  - **Default Bucket**：在 Flux 查询中使用的默认[存储桶](https://docs.influxdata.com/influxdb/v2.0/organizations/buckets/)。
  - **Min time interval**：[Grafana 最小时间间隔](https://grafana.com/docs/grafana/latest/features/datasources/influxdb/#min-time-interval)。

![img](https://docs.influxdata.com/img/influxdb/2-0-tools-grafana.png)

Grafana 应该连接到 InfluxDB 2.0 数据源并返回测试结果。

- **步骤 2.** 在这里添加面板。

![image-20220124143542830](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143542830.png)

- **步骤 3.** 返回到 `InfluxDB`，按照下面的说明操作，然后创建脚本。

![image-20220124143752559](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143752559.png)

- **步骤 4.** 复制脚本并将其粘贴到 reTerminal 中。

![image-20220124143812005](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143812005.png)

![image-20220124151052928](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151052928.png)

- **步骤 5.** 检查 reTerminal 上的结果，信息应该如下所示。

![image-20220124164221791](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png)

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)
