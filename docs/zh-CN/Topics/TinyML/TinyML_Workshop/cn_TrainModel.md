---
description: 这是一个专注于嵌入式AI的开源项目/平台。
title: 训练和部署您自己的AI模型
keywords:
- tinyml course
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/train_and_deploy_model
last_update:
  date: 09/24/2024
  author: Frank
---

# 训练和部署您自己的AI模型

## SenseCraft AI平台

Seeed Studio [SenseCraft AI平台](https://sensecraft.seeed.cc/ai/#/model)是一个基于浏览器的AI解决方案。

它使用户能够轻松地训练和部署自己的模型到边缘设备上，提供无缝且用户友好的体验，让您只需**几次点击**就能直接在边缘设备上训练和部署自己的模型。

:::info
它的核心是一个开源项目，我们已经在[GitHub](https://github.com/Seeed-Studio/ModelAssistant)上分享了它，并且也提供了[开发方法](/cn/ModelAssistant_Introduce_Overview)。
:::

## 开始训练模型

我们首先进入[SenseCraft AI部署网站](https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974)，然后只需通过数据线将XIAO ESP32S3 Sense连接到您的PC即可立即开始使用。

#### 步骤1. 安装XIAO ESP32S3 Sense扩展板

首先，我们需要正确地将XIAO ESP32S3 Sense扩展板连接到XIAO。安装扩展板非常简单，您只需要将扩展板上的连接器与XIAO ESP32S3上的B2B连接器对齐，用力按下并听到"咔嗒"声，安装就完成了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>


#### 步骤2. 将XIAO连接到您的PC

使用具有数据传输功能的数据线将XIAO连接到您的PC。

#### 步骤3. 进入SenseCraft AI平台页面并连接XIAO

点击下面的按钮进入SenseCraft AI平台主页。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
	<a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"2"}>SenseCraft AI平台</font></span></strong></a>
</div><br />


#### 步骤4. 开始训练模型

进入SenseCraft AI平台主页后，我们首先点击`Training`，然后选择`Classification Type`，为您的类别命名，最后选择`XIAO ESP32S3 Sense`。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/1.png" style={{width:800, height:'auto'}}/></div>

然后，根据您对分类的要求，参考您的类别，点击`Hold to Record`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/2.png" style={{width:800, height:'auto'}}/></div>


这次，我选择了手势识别的要求来分类"12345"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/3.png" style={{width:800, height:'auto'}}/></div>

:::tip

拍摄图片：每个类别超过10张图片就可以了，越多越好。

:::


数据收集完成后，我们在Training部分选择`XIAO ESP32S3 Sense`并点击`Start Training`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/4.png" style={{width:800, height:'auto'}}/></div>

训练完成后，我们可以通过实时预览看到我们的训练结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/5.png" style={{width:800, height:'auto'}}/></div>

#### 步骤5. 部署模型

预览并确认训练的模型没问题后，我们选择`Training Records`，然后选择最近训练的模型（名为"ClassTrain"和"XIAO"）并点击`Deploy to device`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/6.png" style={{width:800, height:'auto'}}/></div>

成功部署到设备后，您将直接看到结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/7.gif" style={{width:800, height:'auto'}}/></div>

您已经成功训练了您的第一个ML模型！


:::info

如果您有更多时间，可以尝试使用[您之前学过的`Output`操作](https://wiki.seeedstudio.com/cn/sscma/#2-sensecraft-triggers---do-a-simple-feedback-action)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/8.png" style={{width:800, height:'auto'}}/></div>

:::

# 待办事项
- [ ] 使用 SenseCraft AI 平台训练和部署模型。
- [ ] 为您训练的模型设置触发器并**控制 LED**，使用 SenseCraft AI 平台。

## （可选）联邦化：远距离传输数据

在这一步中，我们尝试使用 Wi-Fi 和 MQTT 将数据从 XIAO ESP32S3 Sense 传输到远程设备，帮助我们远程查看其部署情况。

### 步骤 1. 在设备上设置 MQTT 并测试

作为示例，我们使用 NVIDIA Jetson reComputer J4012。它支持 MQTT 代理安装，最重要的是它提供 100 TOPS AI 算力，让我们可以在本地应用 LLM。

SenseCraft AI 平台支持 Wi-Fi 和 MQTT 连接。

<iframe width={800} height={480} src="https://www.youtube.com/embed/-KAyUHzRxHc" title="Unboxing & Plug in reComputer J4012 - Powered by NVIDIA Jetson Orin NX" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

首先我们需要安装 MQTT 代理（Mosquitto），然后尝试设置 MQTT 服务器。

```
sudo apt-get update
sudo apt-get install mosquitto
```

在 reComputer（Linux）上完成 Mosquitto 安装。

然后运行命令：

```
sudo service mosquitto start
```

启动它。

之后我们可以运行这个命令：

```
sudo service mosquitto status
```

查看它是否已被激活：

![image](https://fabacademy.org/2024/labs/chaihuo/students/matthew-yu/assets/images/mqtt_docusaurus_xiao_1-3919de85499db74b41cf3057bcdfe6bd.png)


:::info
测试：

创建/订阅主题：

```
mosquitto_sub -h localhost -t "LED"
```

发送/发布一些数据：

```
mosquitto_pub -h localhost -t "LED" -m "1"
mosquitto_pub -h localhost -t "LED" -m "test"
```

获得结果，看起来一切正常：

![image](https://fabacademy.org/2024/labs/chaihuo/students/matthew-yu/assets/images/mqtt_docusaurus_xiao_3-281bf87c08ecdb601595625229a7e1df.png)
:::

而 `localhost` 是 `192.168.66.184`（作为 reComputer）：

![image](https://fabacademy.org/2024/labs/chaihuo/students/matthew-yu/assets/images/mqtt_docusaurus_xiao_2-8202adc158ca9aa540a264c288c431ed.jpg)

### 步骤 3. 在 SenseCraft AI 平台上配置 XIAO ESP32S3 Sense

在 SenseCraft AI 平台上，您可以参考"配置"页面：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/xiao_mqtt_1.png" style={{width:800, height:'auto'}}/></div>

:::info
- SSID：（与您的 MQTT 设备相同的 Wi-Fi 名称）
- Password：（与您的 MQTT 设备相同的 Wi-Fi 密码）
- Encryption：AUTO
- MQTT：Yes
- Host：（您的 MQTT 设备的 IP 地址）
- Port：1883

在这个例子中，MQTT 设备是上面提到的 reComputer。
:::

### 步骤 3. 从 XIAO ESP32S3 Sense 接收数据并显示

在接收部分，您可以使用命令安装客户端：

```
pip install python-sscma
```

这是一个用于 [sscma_micro](https://github.com/Seeed-Studio/sscma_micro) 的集成客户端，它是 [SSCMA](https://github.com/Seeed-Studio/SSCMA) 模型的微控制器服务器。

然后使用以下命令接收数据：

```
sscma.cli client --broker mqtt.broker.com --device device_id 
```

:::info
在这种情况下，`mqtt.broker.com` 是 192.168.66.184，`device_id` 来自 SenseCraft AI 平台上的 XIAO ESP32S3 Sense。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/xiao_mqtt_2.png" style={{width:300, height:'auto'}}/></div>
:::

### 步骤 4. （即将推出）在一个页面上联邦化多个 XIAO

### 步骤 5. （即将推出）启用 LLM 自动观察来自 XIAO 的图像