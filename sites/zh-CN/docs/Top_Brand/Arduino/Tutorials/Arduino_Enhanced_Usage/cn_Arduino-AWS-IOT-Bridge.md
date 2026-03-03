---
description: 使用 Arduino 开发板将 Mosquitto MQTT 代理桥接到 AWS IoT
title: 使用 Arduino 开发板将 Mosquitto MQTT 代理桥接到 AWS IoT
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arduino-AWS-IOT-Bridge
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# 如何使用 Arduino 开发板将 Mosquitto MQTT 代理桥接到 AWS IoT

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/AWSIOT.gif"/></div>
<br />

网关在大多数架构讨论中都存在，无论是在[工业物联网](https://aws.amazon.com/iot/solutions/industrial-iot/)环境中还是在智能家居中。今天，我们将向您展示如何实现 [**Mosquitto**](https://mosquitto.org/) 代理**桥接功能**，通过 MQTT 消息传递启用网关的使用，建立与 [**AWS IoT Core**](https://aws.amazon.com/iot-core/) 的双向数据交换。这将允许您的设备与 Mosquitto 代理进行本地通信，并与 AWS IoT Core 通信以受益于 AWS 云的强大功能。

在本教程中，将使用 [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 作为示例来演示如何将 Mosquitto MQTT 代理桥接到 AWS IoT。

## 为什么要将 MQTT 代理桥接到 AWS IoT

如果您有较旧的物联网部署，您可能已经有设备连接到 MQTT 代理，例如 [**Mosquitto**](https://mosquitto.org/)。在这种情况下，您的 MQTT 代理可以非常接近已部署传感器的位置（本地 MQTT 代理），或者在云端等远程位置。您可以配置本地网关与 AWS IoT Core 通信，如下图所示。

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/AWS-bridge.png"/></div>

## 入门指南

### 使用 Docker 构建 AWS Mosquitto 代理

#### 步骤 1：设置 AWS 账户

导航到 [AWS](https://docs.aws.amazon.com/iot/latest/developerguide/iot-console-signin.html) 并设置账户。

导航到 `User` -> `My Security Credentials`，并获取**访问密钥 ID** 和**访问密钥**。

#### 步骤 2：克隆存储库

将此[存储库](https://github.com/ansonhe97/aws_mosquitto_broker)克隆到您驱动器中的某个位置。

#### 步骤 3：安装和设置 AWS CLI

从[这里](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)安装 AWS CLI。

在终端中运行 `aws configure` 并输入您的区域、访问 ID 和密钥，如下所示：

```sh
aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: eu-central-1
Default output format [None]: json
```

#### 步骤 3：为桥接创建 IAM 策略

运行以下命令为桥接创建策略：

```sh
aws iot create-policy --policy-name bridge --policy-document '{"Version": "2012-10-17","Statement": [{"Effect": "Allow","Action": "iot:*","Resource": "*"}]}'
```

#### 步骤 4：创建证书

进入 `aws_mosquitto_broker/config/certs` 目录并运行以下命令创建证书：

```sh
cd aws_mosquitto_broker/config/certs

sudo aws iot create-keys-and-certificate --set-as-active --certificate-pem-outfile cert.crt --private-key-outfile private.key --public-key-outfile public.key --region eu-central-1
```

然后您可以运行 `aws iot list-certificates` 来检查创建的证书。复制形式为 `arn:aws:iot:eu-central-1:0123456789:cert/xyzxyz` 的 ARN：

```sh
aws iot list-certificates
```

将策略附加到您的证书。将 `{REPLACE_ARN_CERT}` 替换为您复制的 ARN `arn:aws:iot:eu-central-1:0123456789:cert/xyzxyz`：

```sh
aws iot attach-principal-policy --policy-name bridge --principal {REPLACE_ARN_CERT}
```

为**私钥**、**公钥**和**客户端证书**（在 `certs` 文件夹内）添加读取权限：

```sh
sudo chmod 644 private.key && sudo chmod 644 public.key && sudo chmod 644 cert.crt
```

同样在 `certs` 目录中下载根 Amazon CA 证书：

```sh
sudo curl https://www.websecurity.digicert.com/content/dam/websitesecurity/digitalassets/desktop/pdfs/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem -o rootCA.pem
```

#### 步骤 5：编辑 mosquitto 自定义配置文件

将 `awsbridge.conf.sample` 重命名为 `awsbridge.conf`：

```sh
mv awsbridge.conf.sample awsbridge.conf
```

编辑 `config/conf.d/awsbridge.conf` 并按照 awsbridge.conf 说明操作：

```sh
nano config/conf.d/awsbridge.conf
```

**注意：** 运行 `aws iot describe-endpoint` 来获取 AWS IoT 端点。

#### 步骤 6：构建 Docker 文件

返回到根位置 `aws_mosquitto_broker` 并运行以下命令：

```sh
docker build -t aws_mqtt_broker .
```

**注意：** 确保您首先在 PC 上安装了 docker。

#### 步骤 7：运行 Docker 镜像

```sh
docker run -ti -p 1883:1883 -p 9001:9001 --name mqtt aws_mqtt_broker
```

控制台/日志输出：

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

#### 步骤 8：测试本地代理

**从 AWS IoT 控制台发布**

1.- 从 AWS 管理控制台转到 `AWS IoT Services` -> `Test`

2.- 订阅我们配置文件中提到的主题 `awsiot_to_localgateway`、`localgateway_to_awsiot` 和 `both_directions`。

3.- 发布到 `awsiot_to_localgateway` 主题（hello world）。

4.- 检查我们本地代理的日志或控制台输出，查看类似这样的内容：

`1493564128: Received PUBLISH from local.bridgeawsiot (d0, q0, r0, m0, 'awsiot_to_localgateway', ... (45 bytes))`

**注意：** 确保选择了 `eu-central-1` 作为区域。

**从主机发布**

工作流程：`本地代理（主机 PC）` -> `Docker 网关` -> `AWS IoT`。

在终端中运行以下命令从主机发布到 AWS IoT：

`mosquitto_pub -h localhost -p 1883 -q 1 -d -t localgateway_to_awsiot  -i clientid1 -m "{\"key\": \"helloFromLocalGateway\"}"`

:::note
确保您的 PC 上已安装 [mosquitto](https://mosquitto.org/download/)。
:::

### 从 Wio Terminal 发布消息

现在，我们可以使用 Wio Terminal 作为终端设备之一来发布或订阅主题！

#### 安装依赖库

此演示依赖于 Wio Terminal 的 Wi-Fi 核心，请先按照[**这个**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Network-Overview/) wiki 进行操作。

**步骤 1 安装 Pubsubclient 库**

1. 访问 [pubsubclient](https://github.com/knolleary/pubsubclient) 仓库并将整个仓库下载到您的本地驱动器。

2. 现在，FS 库可以安装到 Arduino IDE。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，选择您刚刚下载的 `pubsubclient` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

**步骤 2 安装 ArduinoJson 库**

1. 访问 [ArduinoJson](https://github.com/bblanchon/ArduinoJson) 仓库并将整个仓库下载到您的本地驱动器。

2. 现在，ArduinoJson 库可以安装到 Arduino IDE。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，选择您刚刚下载的 `ArduinoJson` 文件。

#### 上传 Arduino 代码

从[**这里**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_AWSIoT_Bridge/WioTerminal_AWSIoT_Bridge.ino)下载 Arduino 代码。

- 配置 Wi-Fi 设置 `ssid` 和 `password`。
- 将 `mqttserver` 更改为您的 MQTT 代理的 IP 地址（您 PC 的 IP 地址）。

上传代码并打开串行监视器检查！现在，如果您按下 Wio Terminal 上的按钮，将向 AWS IoT 发布消息，您也可以在 AWS IoT 控制台中看到传入的消息。

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/result.png"/></div>

:::note
确保本地代理 docker 始终处于运行状态。
:::

## 资源

- [如何将 Mosquitto MQTT 代理桥接到 AWS IoT](https://aws.amazon.com/cn/blogs/iot/how-to-bridge-mosquitto-mqtt-broker-to-aws-iot/)

## 技术支持与产品讨论

<br/>
感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>