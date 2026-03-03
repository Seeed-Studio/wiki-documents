---
description: SenseCAP LoRaWAN 传感器的 Home Assistant 集成
title: Home Assistant 的 SenseCAP 集成
keywords:
- SenseCAP M2 Multi-Platform 
- Home Assistant
- LoRaWAN Sensors
slug: /cn/home_assistant_sensecap
last_update:
  date: 10/19/2023
  author: JoJang
---

# 自动将所有 SenseCAP 传感器集成到 Home Assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/overview.jpg" alt="pir" width={800} height="auto" /></p>

## 1. SenseCAP M2 多平台配置
### 1.1 LoRa 网络配置
**步骤 1.** 点击 **LoRa** 并选择 **LoRa Network**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/lora_network.png"/></div>

**步骤 2.** 选择本地网络服务器模式并填写您的 MQTT 主机信息 **（包括您的主机、用户名、密码和端口）。** 然后点击 **Save&&Apply** 
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/lns.png"/></div>

此时我们已经完成了服务器模式设置，稍后我们将配置 ChirpStack。


### 1.2 ChirpStack 配置

**步骤 1.** 打开 ChirpStack 配置页面，然后 **点击 Device profiles**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_profiles.png"/></div>

**步骤 2.** 点击 **Add device profile**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_profiles_2.png"/></div>

**步骤 3.** 首先，根据您的 SenseCAP 配置填写设备配置文件：**Name、Region、MAC version** 和 **Regional parameters revision**，其中 **Expected uplink interval** 需要更改为 **120**，这个可以根据您自己的要求进行调整。在第二步中，我们点击顶部的 **Codec**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_general.png"/></div>

**步骤 4.** 在这一步中，我们需要根据传感器型号选择解码器，代码可以在[这里](https://github.com/Seeed-Solution/SenseCAP-Decoder.git)找到。我们需要选择 **TTN** 文件夹中的代码作为我们的解码器。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_decoder.png"/></div>

**步骤 5.** 下一步，我们将添加设备。点击 **Applications**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_applications.png"/></div>

**步骤 6.** 点击 **Add applications**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_application_2.png"/></div>

**步骤 7.** 填写应用程序信息并点击 **Submit**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_application_3.png"/></div>

**步骤 8.** 使用 **SenseCAP Mate APP** 配置传感器，将 **Platform** 设置为 **Other Platform**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/SenseCAP_Mate.jpg"/></div>

**步骤 9.** 点击 **Add device**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice.png"/></div>

**步骤 10.** 填写您的设备信息并点击 **Submit**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice_2.png"/></div>

**步骤 11.** 点击您设备的 **DevEUI** 跳转页面
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice_3.png"/></div>

**步骤 12.** 点击 **OTAA keys** 并输入您 SenseCAP 传感器的 **Application key**。然后点击 **Submit**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_appkey.png"/></div>

**步骤 13.** 激活您的 SenseCAP 传感器并等待其自动连接到 LoRaWAN。然后您可以在 **Events** 和 **LoRaWAN frames** 中看到传感器上传的数据
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_data.png"/></div>

**步骤 14.** 此时，我们已经完成了 M2 网关的所有配置。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_updata.png"/></div>

:::tip
当 **首次** 向 M2 网关添加设备时，请至少等待 **2-5** 分钟，直到在 **Events** 中可以看到 **up** 报告的数据。然后设备添加初始化就完成了。接下来我们可以配置 Home Assistant 插件。
:::

## 2. Home Assistant 配置
### 2.1 安装

**1.HACS**
- 首次安装
  - 1.HACS > Integrations >
  - 2.点击右上角 > Custom repositories ： 
    ```
      Repository: https://github.com/Seeed-Solution/home-assistant-SenseCAP.git
      Category: Intergration
    ```
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/custom_repositories_2.png"/></div>  

  - 3.点击 ADD
  - 4.HACS > Integrations > ➕ EXPLORE & DOWNLOAD REPOSITORIES > Seeed Studio-SenseCAP > DOWNLOAD THIS REPOSITORY

  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/custom_repositories_3.png"/></div>  


- 更新组件
    > HACS > Integrations > [`Seeed Studio-SenseCAP`](https://my.home-assistant.io/redirect/hacs_repository/?owner=Seeed-Solution&repository=https%3A%2F%2Fgithub.com%2FSeeed-Solution%2Fhome-assistant-SenseCAP.git) > UPDATE / Redownload

**2.通过 SSH & Web Terminal 插件安装**

1. 打开 SSH 终端并输入以下命令：
```
cd ~/config/custom_components && git clone https://github.com/Seeed-Solution/home-assistant-SenseCAP.git && cd home-assistant-SenseCAP/custom_components && mv sensecap ../../ && cd ../../ && rm -r home-assistant-SenseCAP
```
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/Install.jpg"/></div>

2. 重启 HA 核心
3. 添加集成
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/add_intergration.png"/></div>


### 2.2 配置
1. 输入您的 MQTT 信息并点击 **SUBMIT**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_1.png"/></div>

2. 等待几分钟（**上行时间取决于您在 M2 Chirpstack 和 SenseCAP Mate APP 中的设置**），然后点击左侧边栏中的 **Notifications**。然后我们可以看到 SenseCAP 传感器已自动添加到 HA 中。点击 **Check it out** 并转到集成页面
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_2.png"/></div>

3. 点击其中一个设备，我们可以看到所有实体都已自动创建并添加到设备中。点击 **ADD TO DASHBOARD** 以便通过卡片形式将整个设备的所有实体直接添加到仪表板

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_3.png"/></div>

4. 转到 **Overview**，我们可以找到刚刚添加的卡片

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_4.png"/></div>

5. 点击 **Edit dashboard**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_5.png"/></div>

6. 点击 **EDIT** 进行编辑

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_6.png"/></div>

7. 我们可以添加一个标题图片来装饰卡片

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_7.png"/></div>

8. 将 url 替换为您的链接以显示您喜欢的图片

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_8.png"/></div>

9. 选择要修改的实体

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_9.png"/></div>

10. 将图标更改为与传感器实体类型相似的图标

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_10.png"/></div>

11. 我们现在已经完成了整个插件配置过程。随后，您可以根据自己的需求进行自定义优化

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_11.png"/></div>

12. 以下是添加各种型号的 SenseCAP 传感器后在"Overview"页面上的视觉效果表示。

上述内容构成了将 SenseCAP 集成到 Home Assistant 平台的完整分步教程。Home Assistant 具有将来自各种平台的不同类型设备无缝集成到单一生态系统中的能力，促进跨平台互操作性。这对智能家居生态系统的完整性具有深远意义。目前，Seeed 也已成为庞大的 Home Assistant 社区的一部分，使我们的 SenseCAP 设备能够集成到该平台中。我们相信这一努力将有助于进一步加强和发展物联网生态系统！

:::tip
**SenseCAP for Home Assistant 集成是完全开源的，您可以在此处下载源代码项目**：[https://github.com/Seeed-Solution/home-assistant-SenseCAP.git](https://github.com/Seeed-Solution/home-assistant-SenseCAP.git)。
:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>