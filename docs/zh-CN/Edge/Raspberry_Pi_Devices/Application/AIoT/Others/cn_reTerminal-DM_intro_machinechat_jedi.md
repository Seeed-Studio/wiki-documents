---
description: 开始使用 Machinechat JEDI
title: 开始使用 Machinechat JEDI
keywords:
  - reTerminal DM
  - 入门指南
  - 工业物联网
  - 工业
  - Jedi MachineChat
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminalDM_Introduction_Jedi_MachineChat
last_update:
  date: 2024/3/28
  author: Kasun Thushara
---

# reTerminal DM 和 Machinechat JEDI：您的工业物联网强大工具

## 简介

[Machinechat JEDI](https://www.machinechat.io/jedi) 是一款功能强大且灵活的物联网（IoT）数据管理软件。它旨在简化从各种设备、传感器和机器中收集、可视化、监控和响应实时数据的过程。Seeed 的 reTerminal DM 和 Machinechat JEDI 软件让您可以在 30 分钟内构建自定义仪表板。通过跟踪操作、分析趋势、提高效率以及接收及时警报，防止代价高昂的中断。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot1.PNG" /></center>

## 入门指南

在开始此项目之前，您可能需要提前准备好硬件和软件，如下所述。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
          <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

我们建议从 Raspberry Pi 官方网站安装 **Bullseye** 版本的 64 位操作系统。

## 将 Machinechat JEDI 安装到 reTerminal DM

### 下载 JEDI

访问 Machinechat 网站，选择 JEDI 免费版或 JEDI Lite 试用版。

输入您的电子邮件地址。您将收到一封包含许可证信息和所有支持操作系统的下载链接的电子邮件。点击适合您操作系统的下载链接。**此处选择 64 位 Raspberry Pi**

### 解压缩并启动

下载的文件是一个 ZIP 压缩包。将内容解压缩到 reTerminal DM 上您选择的位置。

打开终端并执行以下命令。将 **/path/to/jedi/folder** 替换为文件夹位置。

```sh
cd /path/to/jedi/folder
```

启动 JEDI

```sh
./mcjedi.bin
```

### 访问 JEDI 的 Web 界面

在 reTerminal DM 上打开一个网页浏览器并输入

```sh
http://localhost:9123
```

### 设置和激活

阅读并接受最终用户许可协议（EULA），然后填写表单，提供用户名、密码以及用于密码恢复的安全问题答案。

使用您新创建的凭据登录。

输入下载邮件中提供的许可证密钥。JEDI 将短暂连接到互联网以验证并激活您的许可证。

## 快速测试

### 创建数据管道

在你的笔记本电脑上打开你喜欢的 Python IDE（如 PyCharm/VS Code），复制并粘贴以下代码。

```sh
import requests
import json

url = 'http://<jedi_ip>:8100/v1/data/mc'  # 将 <jedi_ip> 替换为你的 reTerminal DM IP 地址

payload = {
    "context": {
        "target_id": "my_PC",
        "target_ip": "192.168.1.10"  # PC 的 IP 地址
    },
    "data": {
        "temperature": 25.5,
        "humidity": 68
    }
}

headers = {'Content-Type': 'application/json'}
response = requests.post(url, data=json.dumps(payload), headers=headers)

if response.status_code == 200:
    print('数据发送成功')
else:
    print('发送数据时出错:', response.text)
```

### 可视化与探索

仪表板时间！在导航面板上点击 **Data Dashboard**。此仪表板已为你预先创建。我们现在将向此仪表板添加一个仪表图表。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/webinterface1.PNG" /></center>

- 点击 **ADD CHART** 以向 **Data Dashboard** 添加新图表。
- 点击 **Name** 并为图表输入一个名称。
- 点击 **Chart Type** 并选择 **Gauge**。
- 点击 **Source** 并选择随数据一起发送的 **target_id**。如果你使用了上面提供的示例代码或数据负载，你将在列表中看到 **my_PC**。
- 点击 **Property** 并选择一个属性（例如 temperature 或 humidity）。
- 点击 **ADD** 保存配置并将图表添加到仪表板。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/Gaugeconfig.PNG" /></center>

你将在仪表板上看到一个仪表图。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/gauge.png" /></center>

## MQTT 数据收集器

JEDI 提供了一系列预配置的数据收集器，可立即使用。这些收集器适用于典型的物联网场景，包括：

- **HTTP**：通过 HTTP API 接收来自设备、脚本和其他应用程序的数据。
- **MQTT Broker**：通过 MQTT（一种广泛使用的物联网消息协议）从传感器和设备获取数据。
- **TCP**：允许从通过原始 TCP 连接通信的设备中检索数据。
- **Serial**：与通过串口传输数据的设备建立连接（例如 Arduino 板、GPS 接收器等）。

接下来我们将讨论最流行的 MQTT 协议。

### 准备你的 Xiao

在上传代码之前，请配置 **SSID**、**WiFi 密码**、**MQTT 服务器 IP（JEDI IP）**、**MQTT 用户名** 和 **MQTT 密码**。在本示例中，我们将向 Machine Chat JEDI 发送一些虚拟数据。

```sh
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "ABC";
const char* password = "XXXXX";
const char* mqtt_server = "192.XXX.X.XXX";  // 替换为你的 MQTT Broker 的 IP
const int mqtt_port = 1883;  // 默认 MQTT 端口
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
    Serial.println("正在连接到 WiFi...");
  }

  Serial.println("已连接到 WiFi");
  client.setServer(mqtt_server, mqtt_port);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // 为每个实验室生成随机值：VOC、人类存在、温度和湿度
  for (int lab = 1; lab <= 3; lab++) {
    int voc = random(60, 80);
    int presence = random(0, 3); // 假设 presence 表示为布尔值（0 表示无人，1 表示有人）
    bool acState = false; // 默认空调状态为关闭
    float temperature = random(18, 30); // 假设温度以摄氏度为单位
    int humidity = random(30, 70); // 假设湿度为百分比
    bool fire = false;

    // 检查温度是否大于 25 且有人存在
    if (temperature > 25 && presence) {
      acState = true; // 打开空调
    }

    // 构造负载
    String payload = "{\"lab\":" + String(lab) + ",\"voc\":" + String(voc) + ",\"presence\":" + String(presence) + ",\"acState\":" + String(acState) + ",\"temperature\":" + String(temperature) + ",\"humidity\":" + String(humidity) +",\"fire\":" + String(fire) + "}";

    // 发布当前实验室的负载
    client.publish(("Lab" + String(lab) + "/data").c_str(), payload.c_str());
  }

  delay(10000); // 等待 10 秒后发送下一组数据
}

void reconnect() {
  while (!client.connected()) {
    Serial.println("尝试连接到 MQTT...");
    if (client.connect("ESP32Client", mqtt_username, mqtt_password)) {
      Serial.println("已连接");
      // 如果需要，订阅主题
       client.subscribe("rpi/data");
    } else {
      Serial.print("连接失败，错误代码=");
      Serial.print(client.state());
      Serial.println(" 5 秒后重试");
      delay(5000);
    }
  }
}

void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("收到主题中的消息: ");
    Serial.println(topic);

    Serial.print("消息内容:");
    for (int i = 0; i < length; i++) {
        Serial.print((char)payload[i]);
    }
    Serial.println();
}
```

### 启用 MQTT Broker

- 导航到 **Settings** -> **Data Collectors**。

- 点击 **ADD CONNECTOR** 按钮以添加新的收集器。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt1.PNG" /></center>

- 选择 **MQTT Broker** 作为收集器类型。

- 高级配置选项：

- Listen IP：MQTT Broker 监听的 IP 地址，即 JEDI 的 IP 地址。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt2.PNG" /></center>

:::note

**用户名/密码**：启用此选项并配置用户名和密码以进行客户端身份验证。客户端需要提供有效凭据才能连接到 MQTT Broker，因此你需要在 Arduino 代码中替换这些信息。

:::

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt3.PNG" /></center>

在设备仪表板中，您将看到我们的 MQTT 设备（ESP32Client）已添加。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/devicedashboard.PNG" /></center>

## 仪表板准备

### 创建自定义数据仪表板

Machinechat JEDI 的仪表板提供了一种强大且灵活的方法，将原始 IoT 数据转换为有意义的可视化内容。通过直观的拖放界面，用户可以轻松创建个性化仪表板，以满足其独特需求，有效地实现数据叙述。

这些仪表板包括多种类型，例如 **数据仪表板**（用于可定制的基于网格的布局）、**设备仪表板**（用于实时显示设备和传感器数据）以及 **系统仪表板**（用于将数据叠加到背景图像上，非常适合创建流程图或 HMI 风格的界面）。

- 在 JEDI Web 界面中导航到 **仪表板管理器** 部分。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard1.PNG" /></center>

- 然后点击 **添加仪表板**。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard2.PNG" /></center>

- 选择仪表板类型（此处选择数据视图），填写名称和描述并保存。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard3.PNG" /></center>

之后，您会注意到侧边栏中新增了仪表板。接下来我们添加一些小部件。首先，我们将添加折线图。

### 添加折线图

- 点击 **添加图表**。

- 根据需要命名，并将 **图表类型** 选择为 **折线图**。然后点击 **加号** 添加数据源。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard8.PNG" /></center>

- 添加数据源、属性标签，并填写合适的名称和单位。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/linecjhart.PNG" /></center>

- 点击 **添加** 后，在添加数据源窗口和新图表窗口中，您将看到一个漂亮的折线图。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/chart1.PNG" /></center>

### 添加堆叠折线图

- 再次点击 **添加图表**。

- 根据需要命名，并选择 **图表类型为折线图**。同时启用 **多 Y 轴模式**。我们将一个轴用于“温度”，另一个用于“湿度”。然后点击 **加号** 添加数据源。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline.PNG" /></center>

- **添加数据源**、**属性标签**，并填写合适的名称和单位，点击 **添加** 按钮。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline2.PNG" /></center>

- 添加第二个指标：点击 **加号** 图标，将另一个指标添加到同一个折线图中。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline3.PNG" /></center>

- 再次添加 **数据源**、**属性标签**，并填写合适的名称和单位，同时选择 **右侧 Y 轴**。然后点击 **添加**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline4.PNG" /></center>

- 最后点击 **添加**。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline5.PNG" /></center>

完成后，您将能够看到堆叠折线图。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline6.PNG" /></center>

总结来说，Machinechat JEDI 与 reTerminal DM 是一个变革性的解决方案，彻底改变了工业运营和智能基础设施管理的格局。通过无缝集成 IIoT 功能，它将帮助用户利用来自连接设备的实时数据，提供对制造流程、供应链物流和运营效率的无与伦比的洞察。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot2.PNG" /></center>

## 资源

- **[网页]** [Machinechat 官方文档](https://docs.machinechat.io/)


# 技术支持

感谢您选择我们的产品！我们将为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>