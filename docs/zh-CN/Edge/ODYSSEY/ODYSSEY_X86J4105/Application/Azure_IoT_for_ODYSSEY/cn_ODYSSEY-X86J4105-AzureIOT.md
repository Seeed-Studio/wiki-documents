---
description: ODYSSEY - X86J41x5
title: Azure IoT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105-AzureIOT
last_update:
  date: 03/16/2023
  author: Lakshantha

---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-AzureIOT/
sku: 102110399
--- -->

# 边缘物联网 - 将传感器数据发送到云端

本教程演示如何读取连接到 ODYSSEY - X86J41x5 的传感器值，并将数据发送到 **Microsoft Azure IoT Hub**，在这里可以显示或处理这些数据以用于进一步的物联网应用。

## 接收原始数据

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/receivingData.gif" /></div>


## 数据可视化

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/visulizeData.jpg" /></div>


## 简介

[IoT Hub](https://azure.microsoft.com/en-us/services/iot-hub/) 是 Microsoft Azure 提供的一项服务，它使您能够将来自物联网设备的大量遥测数据引入云端进行存储或处理。

## 前置条件

- 在 ODYSSEY - X86J41x5 上安装 [Python 3](https://www.python.org/downloads/windows/)

- 一个 Microsoft Azure 账户。如果您还没有，请在开始之前创建一个 [免费账户](https://azure.microsoft.com/en-us/free/?WT.mc_id=A261C142F)。

- 下载并安装 [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)，这是一个用于管理 Azure 资源的命令行工具。

安装 Azure CLI 后，打开 `cmd` 或 `Powershell` 并运行 `az` 命令，您应该会看到如下界面：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/AzureCLI.png" /></div>


## Azure CLI 预配置

### 登录 Azure

打开 `cmd` 或 `Powershell` 并运行 `az login` 命令。一个浏览器窗口将会弹出，登录您的 Microsoft Azure 账户。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/azAcc.png" /></div>


### 为 Azure CLI 添加 Microsoft IoT Azure 扩展

运行以下命令，为 Azure CLI 的 Cloud Shell 实例添加 Microsoft Azure IoT 扩展。IoT 扩展为 Azure CLI 添加了 IoT Hub、IoT Edge 和 IoT 设备预配服务 (DPS) 的特定命令。

```shell
az extension add --name azure-cli-iot-ext
```

## 创建 IoT Hub

以下部分描述了如何使用 Azure 门户创建 IoT Hub：

1. 登录到 [**Azure 门户**](https://portal.azure.com)。

2. 选择 **创建资源**，并在 *搜索市场* 中输入 **IoT Hub**。

3. 选择 **IoT Hub** 并点击 **创建**。

4. 在 **基础信息** 选项卡中，完成以下字段：

- **订阅：** 选择用于您的 Hub 的订阅。

- **资源组：** 选择一个资源组或创建一个新的资源组。要创建新的资源组，请选择 **创建新** 并填写您想使用的名称。

- **区域：** 选择您的 Hub 所在的区域。选择离您最近的区域。

- **IoT Hub 名称：** 输入您的 IoT Hub 的名称。此名称必须是全局唯一的。如果名称可用，将显示绿色的勾号。

**重要提示：** IoT Hub 将作为 DNS 端点公开可发现，因此在命名 IoT Hub 时请确保避免任何敏感信息。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/iotHub.jpg" /></div>


1. 选择 **下一步：大小和规模** 继续：

- **定价和规模层：** 暂时选择 **F1: 免费层**。您可以根据每天通过解决方案发送的消息数量和所需的功能，从多个层中进行选择。

2. 选择 **查看 + 创建** 选项卡以检查设置，然后点击 **创建** 来创建新的 IoT Hub。创建 IoT Hub 可能需要几分钟时间。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/iotHubProcess.jpg" /></div>

## 注册设备

设备必须先注册到您的 IoT Hub，才能进行连接：

1. 在 `cmd` 或 `Powershell` 中运行以下命令，以添加 IoT Hub CLI 扩展并创建设备标识：

```sh
az iot hub device-identity create --hub-name iot-test-1 --device-id MyPythonDevice
```

### 注意：

- `hub-name` -> 将 `iot-test-1` 替换为您创建的 IoT Hub 名称。

- `device-id` -> `MyPythonDevice` 是正在注册的设备名称。在我的例子中，MyPythonDevice 是设备 ID。

2. 运行以下命令以获取我们注册设备的 *设备连接字符串*。

```sh
az iot hub device-identity show-connection-string --hub-name iot-test-1 --device-id MyPythonDevice --output table
```

记录设备连接字符串，其格式如下：`HostName={YourIoTHubName}.azure-devices.net;DeviceId=MyPythonDevice;SharedAccessKey={YourSharedAccessKey}`。稍后将使用此字符串。

### 注意：

- 替换您的 `hub-name` 和 `device-id`，与上述保持一致。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/deviceID.png" /></div>

## 使用 Arduino Core 收集数据

本节使用 Arduino Core 读取传感器值，并将读取结果打印到串口监视器，可通过 Python 从其他地方读取。

1. 按照入门指南下载、安装并配置 **Arduino IDE**。

2. 将 Grove 光传感器的信号线连接到 ODYSSEY - X86J41x5 的 **A0**，同时连接电源和地线。有关更多信息，请参考入门指南中的引脚图。

3. 使用 Arduino IDE 将以下代码上传到 ODYSSEY - X86J41x5。记得选择正确的 **板子** 和 **端口**。记录此处的 **端口**，稍后将使用。在我的例子中，端口是 `COM4`。

### Arduino 代码

```cpp
#define LIGHT A0
#define Serial SerialUSB

void setup() {
  // 在此处放置您的设置代码，仅运行一次：
  Serial.begin(115200);
  pinMode(LIGHT, INPUT);
}

void loop() {
  // 在此处放置您的主代码，重复运行：
  int state = analogRead(LIGHT);
  Serial.println(state);
  
  delay(500);
}
```

4. 打开 Arduino IDE 中的 **串口监视器**，检查程序是否运行正常。

## 将光传感器读数发送到 Azure IoT Hub

光传感器读数打印到串口，使用 Python 提取这些数据并发送到 Azure IoT Hub。

1. 打开 `Powershell`，运行以下命令以安装所需的 Python 库。

```sh
pip install azure-iot-device
pip install pyserial
```

2. 复制以下 Python 代码并保存到您的本地驱动器。使用文本编辑器进行以下更改：

- 将 `serialPort` 变量的值替换为我们之前记录的串口。

- 将 `CONNECTION_STRING` 变量的值替换为我们之前记录的设备连接字符串。

### Python 代码

```py
# 版权所有 (c) Microsoft。保留所有权利。
# 根据 MIT 许可授权。请参阅项目根目录中的 LICENSE 文件以获取完整许可信息。

import time
import serial

# 使用 Python 设备 SDK 连接到 IoT Hub：
#   https://github.com/Azure/azure-iot-sdk-python
# 示例连接到 IoT Hub 上特定设备的 MQTT 端点。
from azure.iot.device import IoTHubDeviceClient, Message

# 设置从 Arduino 串口读取数据
serialPort= "COM4" # 将其更改为您的串口，在 Arduino IDE 中检查
baudRate = 115200
ser = serial.Serial(serialPort, baudRate, timeout=0.5)

# 用于设备与 IoT Hub 进行身份验证的设备连接字符串。
# 使用 Azure CLI：
# az iot hub device-identity show-connection-string --hub-name {YourIoTHubName} --device-id MyNodeDevice --output table
CONNECTION_STRING = "HostName=iot-test-1.azure-devices.net;DeviceId=MyPythonDevice;SharedAccessKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# 定义要发送到 IoT Hub 的 JSON 消息。
MSG_TXT = '{{"Light": {light}}}'

def iothub_client_init():
    # 创建一个 IoT Hub 客户端
    client = IoTHubDeviceClient.create_from_connection_string(CONNECTION_STRING)
    return client

def iothub_client_telemetry_sample_run():

    try:
        client = iothub_client_init()
        print ( "IoT Hub 设备正在发送周期性消息，按 Ctrl-C 退出" )

        while True:
            # 使用模拟遥测值构建消息。
            time.sleep(0.1)
            light = ser.readline().decode("UTF-8")[:-2]
            if light:
              msg_txt_formatted = MSG_TXT.format(light=light)
              message = Message(msg_txt_formatted)

              # 发送消息。
              print( "发送消息: {}".format(message) )
              client.send_message(message)
              print ( "消息发送成功" )
              time.sleep(1)

    except KeyboardInterrupt:
        print ( "IoTHubClient 示例已停止" )
        ser.close()

if __name__ == '__main__':
    print ( "IoT Hub 快速入门 #1 - 模拟设备" )
    print ( "按 Ctrl-C 退出" )
    iothub_client_telemetry_sample_run()
```

3. 在 `Powershell` 中，导航到您刚保存 Python 文件的目录。运行 Python 脚本以将传感器数据发送到 Azure IoT Hub。

**注意：** 在我的例子中，Python 文件名为 `SendingData.py`，请根据您保存的文件名更改命令。

```sh
python3 SendingData.py
```

以下截图显示了将传感器数据发送到 Azure IoT Hub 的输出。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/sendingData.png" /></div>

## 从 Azure IoT Hub 读取数据

IoT Hub CLI 扩展可以连接到 IoT Hub 的服务端 Events 端点。该扩展接收从设备发送到云端的消息。

在任意终端中运行以下命令，即可开始监控发送到 Azure IoT Hub 的消息。

```sh
az iot hub monitor-events --hub-name iot-test-1 --device-id MyPythonDevice
```

### 注意：

- 将 `hub-name` 和 `device-id` 替换为您的实际值，与上述一致。

以下截图显示了从 ODYSSEY - X86J41x5 发送到 IoT Hub 的消息。这些数据可以被处理或显示。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/recevingData.jpg" /></div>


---

## 使用 Microsoft Power BI 实现传感器数据的实时可视化

在本节中，我们将使用 [Microsoft Power BI](https://powerbi.microsoft.com/en-us/) 实时显示光传感器的读数。如果您还没有 Power BI 账户，请先注册一个免费账户。

**注意：请确保您已完成所有前面的步骤，并且 IoT Hub 能够成功接收消息。**

## 为 IoT Hub 添加一个消费者组

[消费者组](https://docs.microsoft.com/zh-cn/azure/event-hubs/event-hubs-features#event-consumers) 提供了事件流的独立视图，使应用程序和 Azure 服务能够独立地从同一个 Event Hub 端点消费数据。

添加消费者组的步骤如下：

1. 登录到 [**Azure 门户**](https://portal.azure.com)。

2. 打开您的 IoT Hub，选择 **Built-in endpoints**，在 **Consumer Groups** 下输入一个名称以创建新的消费者组，然后点击 **Save**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/endpoint.jpg" /></div>


在我的例子中，`lightsensor` 是新创建的消费者组。

## 创建、配置并运行一个 Stream Analytics 作业

创建 Stream Analytics 作业的步骤如下：

3. 登录到 [**Azure 门户**](https://portal.azure.com)。

4. 选择 **Create a resource**，然后在 *Search the Marketplace* 中搜索 **Stream Analytics job**。

5. 选择 **Stream Analytics job** 并点击 **Create**。

6. 按如下填写字段，然后点击 **Create**：

- **Job name:** 作业名称。名称必须是全局唯一的。在我的例子中，它是 `light-analytic`。

- **Resource group:** 使用与您的 IoT Hub 相同的资源组。

- **Location:** 使用与您的资源组相同的位置。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/analytic.jpg" /></div>


## 为 Stream Analytics 作业添加输入

1. 打开 Stream Analytics 作业。

2. 在 **Job topology** 下点击 **Inputs**。

3. 点击 **Add stream input** -> **IoT Hub**。

4. 按如下填写字段：

- **Input alias:** 输入名称。这可以是任意值。

- **IoT Hub:** 选择我们一直使用的 IoT Hub。

- **Consumer group**: 选择我们刚刚创建的消费者组。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/settings.jpg" /></div>


5. 选择 **Save**。

## 为 Stream Analytics 作业添加输出

1. 打开 Stream Analytics 作业。

2. 在 **Job topology** 下点击 **Outputs**。

3. 点击 **Add** -> **Power BI**。

4. 使用您的 Microsoft Power BI 账户进行 **Authorize** 授权。

5. 按如下填写字段：

- **Output alias:** 输出名称。这也可以是任意值。

- **Authentication mode:** 选择 User token。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/powerBI.jpg" /></div>


6. 选择 **Save**。

## 配置 Stream Analytics 作业的查询

1. 在 **Job topology** 下点击 **Query**。

2. 将 `[YourInputAlias]` 替换为输入别名。在我的例子中，它是 `SensorReadings`。

3. 将 `[YourOutputAlias]` 替换为输出别名。在我的例子中，它是 `SensorOutput`。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBIsettings.jpg" /></div>


## 运行 Stream Analytics 作业

1. 在 **Overview** 下点击 **Start** -> **Now** -> **Start**。作业状态将从 **Stopped** 变为 **Running**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/run.jpg" /></div>


**注意：为了开始接收传感器数据，请记得在 ODYSSEY - X86J41x5 上运行 Python 脚本以将数据发送到云端。**

## 创建并发布 Power BI 报表以可视化数据

1. 登录您的 [Power BI](https://app.powerbi.com/signupredirect?pbi_source=web) 账户。

2. 在 **Workplaces** -> **My workspace** 下，选择 **Datasets**，您应该能看到之前指定的数据集。

3. 在 **Actions** 下选择 **第一个图标（创建报表）**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI1.jpg" /></div>


4. 创建一个折线图以显示实时光传感器值随时间的变化。

- 在 **Visualizations** 下选择 **Line chart**。

- 在 **Fields** 下选择 **EventEnqueuedUtcTime**。

- 在 **Fields** 下选择 **Light**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI2.jpg" /></div>


5. 点击 **Save** 保存报表。

6. 点击 **File** -> **Publish to web** -> **Create embed code** -> **Publish**。

现在，您可以通过 Power BI 在仪表板上查看传感器数据！

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/AzureIOT/PowerBI3.jpg" /></div>


微软还提供了 [Power BI 移动应用](https://powerbi.microsoft.com/en-us/documentation/powerbi-power-bi-apps-for-mobile-devices/)，可用于在移动设备上查看和交互您的 Power BI 仪表板和报表。

## 进一步开发

您已经成功为一个 IoT 场景设置了 ODYSSEY - X86J41x5，现在您可以实现这一点并构建自己的 IoT 解决方案！

*更多技术支持请访问 [Azure IoT](https://azure.microsoft.com/en-us/overview/iot/)。*

## 技术支持与产品讨论
感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>