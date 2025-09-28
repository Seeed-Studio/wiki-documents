---
description: Machinechat JEDI 入门指南
title: Machinechat JEDI 入门指南
keywords:
  - reTerminal DM
  - Getting started
  - IIoT
  - Industrial 
  - Jedi MachineChat
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminalDM_Introduction_Jedi_MachineChat
last_update:
  date: 3/28/2024
  author: Kasun Thushara
---

# reTerminal DM & Machinechat JEDI：您的工业物联网强力组合

## 简介

[Machinechat JEDI](https://www.machinechat.io/jedi) 是一款功能强大且多功能的物联网（Internet of Things）数据管理软件。它旨在简化从各种设备、传感器和机器收集、可视化、监控和响应实时数据的过程。Seeed 的 reTerminal DM 和 Machinechat JEDI 软件让您能够在 30 分钟内构建自定义仪表板。跟踪操作、分析趋势、提高效率，并接收及时警报以防止代价高昂的中断。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot1.PNG" /></center>

## 入门指南

在开始这个项目之前，您可能需要按照此处描述的内容提前准备硬件和软件。

### 硬件准备

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
          <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### 软件准备

我们建议从官方网站安装 Raspberry Pi 64 位操作系统的 **Bullseye** 版本。

## 在 reTerminal DM 上安装 Machinechat JEDI

### 下载 JEDI

访问 Machinechat 网站，选择 JEDI 免费版或 JEDI Lite 试用版。

输入您的电子邮件地址。您将收到一封包含许可证信息和所有支持操作系统下载链接的电子邮件。点击适合您操作系统的相应下载链接。**本案例为 64 位 Raspberry Pi**

### 解压并启动

下载的文件是一个 ZIP 压缩包。将内容解压到 reTerminal DM 上您选择的位置。

打开终端并执行。将此 **/path/to/jedi/folder** 替换为文件夹位置。

```sh
cd /path/to/jedi/folder
```

Launch JEDI

```sh
./mcjedi.bin
```

### Accessing JEDI's Web Interface

在 reTerminal DM 上打开一个网络浏览器并输入

```sh
http://localhost:9123
```

### 设置和激活

阅读并接受最终用户许可协议，填写表单，提供用户名、密码和安全问题答案（用于密码恢复）。

使用您新创建的凭据。

输入下载邮件中提供的许可证密钥。JEDI 将短暂连接到互联网以验证和激活您的许可证。

## 快速测试

### 创建数据管道

在您的笔记本电脑上打开您喜欢的 Python IDE（如 pycharm/Vs code）
复制并粘贴。

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

### 可视化与探索

仪表板时间！在导航面板上点击数据仪表板。这个仪表板已经为您预先创建好了。我们现在将向这个仪表板添加一个仪表图表。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/webinterface1.PNG" /></center>

- 点击 **ADD CHART** 向 **数据仪表板** 添加新图表。
- 点击 **Name** 并为图表输入名称。
- 点击 **Chart Type** 并选择 **Gauge**。
- 点击 **Source** 并选择与数据一起发送的 **target_id**。如果您使用了上面提供的示例代码或载荷，您将在列表中看到 **my_PC**。
- 点击 **Property** 并选择一个属性（例如温度或湿度）。
- 点击 **ADD** 保存配置并将图表添加到仪表板。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/Gaugeconfig.PNG" /></center>

您将能够在仪表板上看到一个仪表。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/gauge.png" /></center>

## MQTT 数据收集器

JEDI 提供了一系列强大的预配置数据收集器，可立即使用。这些收集器适用于典型的物联网情况，包括：

- **HTTP**：通过 HTTP API 接收来自设备、脚本和其他应用程序的数据。
- **MQTT 代理**：通过 MQTT（一种广泛使用的物联网消息协议）从传感器和设备获取数据。
- **TCP**：允许从通过原始 TCP 连接通信的设备检索数据。
- **串行**：与通过串行端口传输数据的设备建立连接（例如 Arduino 板、GPS 接收器等）。

因此我们将讨论最流行的 MQTT 协议。

### 准备您的 Xiao

在上传代码之前，请配置 **SSID** **WiFi 密码** **MQTT 服务器 IP（JEDI IP）** **MQTT 用户名** **MQTT 密码**。在这个示例中，我们将向 Machine Chat JEDI 发送一些虚拟数据。

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

### 启用 MQTT 代理

- 导航到 **设置** -> **数据收集器**。

- 点击 **添加连接器** 按钮来添加新的收集器。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt1.PNG" /></center>

- 选择"MQTT 代理"作为收集器类型。

- 高级配置选项：

- 监听 IP：MQTT 代理监听的 IP 地址。Jedi IP 地址。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt2.PNG" /></center>

:::note

**用户名/密码**：启用此选项并配置用户名和密码进行客户端身份验证。客户端需要提供有效凭据才能连接到 MQTT 代理，因此您需要在 Arduino 代码中替换它。

:::

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt3.PNG" /></center>

在设备仪表板中，您将看到我们的 MQTT 设备（ESP32Client）已添加。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/devicedashboard.PNG" /></center>

## 仪表板准备

### 创建自定义数据仪表板

Machinechat JEDI 的仪表板提供了一种强大且适应性强的方法，可将原始物联网数据转换为有洞察力的可视化。通过直观的拖放界面，用户可以轻松制作个性化仪表板以满足其独特需求，有效地将其数据叙述变为现实。

这些仪表板有多种类型，包括用于可定制网格布局的**数据仪表板**、用于实时设备和传感器数据显示的**设备仪表板**，以及用于在背景图像上叠加数据的**系统仪表板**，非常适合创建流程图或 HMI 风格的界面。

- 在 JEDI Web 界面中导航到**仪表板管理器**部分。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard1.PNG" /></center>

- 然后点击**添加仪表板**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard2.PNG" /></center>

- 选择仪表板类型（本例中为数据视图）、名称和描述并保存。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard3.PNG" /></center>

之后，您会注意到新仪表板已添加到侧边栏。让我们添加一些小部件。首先，我们将添加折线图。

### 添加折线图

- 点击**添加图表**

- 给出您希望的名称并**选择图表类型**为**折线**。然后点击**加号**来添加数据源。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard8.PNG" /></center>

- 添加源、属性标签，并给出合适的名称和单位。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/linecjhart.PNG" /></center>

- 在点击**添加**数据源窗口和新图表窗口后，您将能够看到漂亮的折线图。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/chart1.PNG" /></center>

### 添加堆叠折线图

- 再次点击**添加图表**。

- 给出您希望的**名称**并选择**图表类型为折线**。同时启用**多 Y 轴模式**。我们将使用一个用于"温度"，另一个用于"湿度"。然后点击**加号**来添加数据源。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline.PNG" /></center>

- **添加源**、**属性标签**，并给出合适的名称和单位，然后点击**添加**按钮。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline2.PNG" /></center>

- 添加第二个指标：点击**加号**图标向同一折线图添加另一个指标。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline3.PNG" /></center>

- 再次添加**源**、**属性标签**，并给出合适的名称和单位，同时选择**右侧 Y 轴**。然后点击**添加**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline4.PNG" /></center>

- 最后点击**添加**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline5.PNG" /></center>

就是这样！！您将能够获得堆叠折线图。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline6.PNG" /></center>

总之，Machinechat JEDI 与 reTerminal DM 作为一个变革性解决方案，彻底改变了工业运营和智能基础设施管理的格局。通过无缝集成 IIoT 功能，这将使用户能够利用来自连接设备的实时数据，为制造流程、供应链物流和运营效率提供无与伦比的洞察。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot2.PNG" /></center>

## 资源

- **[网页]** [Machinechat 官方文档](https://docs.machinechat.io/)

## 技术支持

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
