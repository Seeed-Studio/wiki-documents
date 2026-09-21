---
description: SenseCAP 网关
title: SenseCAP 网关
keywords:
  - SenseCAP
  - Gateway
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_Gateway_Intro
last_update:
  date: 01/08/2026
  author: Kian
createdAt: '2023-07-20'
updatedAt: '2026-01-08'
url: https://wiki.seeedstudio.com/cn/Network/SenseCAP_Network/SenseCAP_Gateway_Intro/
---


SenseCAP 产品线拥有丰富的产品，可满足从爱好者到工业用户等不同用户的需求，提供了一整套用于数字化我们周围世界的综合解决方案。

除了 LoRaWAN 传感器之外，SenseCAP 还提供不同类型的网关，包括用于 web3 的热点和用于 LoRaWAN 传感解决方案的 LoRaWAN 网关，以及一系列软件、云服务和 API，使用户能够实时采集、存储和分析数据。硬件、软件和云服务的结合，使用户能够快速响应环境变化，并做出数据驱动的决策。

:::caution info
**填补工业级空白，重新定义 LoRaWAN 边缘能力**
> 全新 reComputer R1225 LoRaWAN Gateway 登场——一款面向 BMS / BAS / iBMS 的工业级 LoRaWAN + 感知 + 控制一体化网关
:::

## 介绍

**SenseCAP Gateway** 是一款工业级、高性能网关，专为远距离无线通信而设计。由 Seeed Studio 开发，SenseCAP Gateway 是物联网（IoT）生态系统中的关键组件，为各种应用提供强大而可靠的连接能力。



SenseCAP Gateway 的主要特性包括：

- 高可靠性：采用 IP66 级外壳，可承受恶劣环境条件。
- 远距离：借助 LoRa 技术提供广域覆盖能力。
- 高性能：配备强大的处理能力，可管理大量连接设备。
- 易于部署：安装和维护简单，适用于各类用户和行业。
- 可扩展性：支持大规模物联网部署，具备高数据吞吐量和大量设备连接能力。

SenseCAP Gateway 的应用范围涵盖智慧农业、环境监测、工业自动化以及智慧城市等领域。

## LoRa 通信

LoRa（Long Range）是一种低功耗广域网（LPWAN）协议，专为区域、国家或全球网络中的电池供电无线设备而设计。LoRa 非常适合需要远距离、低功耗且安全数据传输的应用。

1. 调制技术：LoRa 使用 Chirp Spread Spectrum（CSS，线性调频扩频）调制，将信号扩展到宽频率范围，从而在抗干扰和抗信号衰减方面具有很强的能力。
2. 远距离：LoRa 在农村地区的数据传输距离可达 15 km，在城市地区可达 5 km，适用于广泛的应用场景。
3. 低功耗：由于功耗要求低，使用 LoRa 的设备可以依靠小型电池运行数年。
4. 低数据速率：虽然 LoRa 支持远距离通信，但其针对低数据速率进行了优化，通常范围为 0.3 kbps 至 50 kbps。
5. 安全通信：LoRa 提供强大的安全特性，包括端到端加密，确保数据完整性和机密性。
6. LoRa 通常采用星中星拓扑结构，由网关在终端设备与中心网络服务器之间转发消息。网关充当透明桥梁，将 RF 数据包转换为 IP 数据包，反之亦然。

## 硬件产品

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html" target="_blank"><img src="https://sensecap-solution-upload.cdn.seeed.cn/cc/2022/09/029cab35952193f5e1ea3c80fda40937-2.png?x-oss-process=image%2Fformat,webp" alt="pir" width={1000} height="auto" /></a></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html" target="_blank"><img src="https://sensecap-solution-upload.cdn.seeed.cn/cc/2022/09/1ef6149dd438035c41238babee3f27e5-1.png?x-oss-process=image%2Fformat,webp" alt="pir" width={1000} height="auto" /></a></p>

### reComputer R1225 LoRaWAN Gateway

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Product_Appearance_Image/R1225_White_Background_1.png" style={{width:900, height:400}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>reComputer R1225 LoRaWAN Gateway 是一款功能强大且灵活的工业级 Raspberry Pi 物联网 LoRaWAN 网关与控制器，基于 CM4，具备 AI 能力。其配备 3 路 RS485、双以太网口，支持 BACnet 和 Modbus，具备坚固可靠的工业边缘物联网设备所需的全部特性。通过兼容 AI NPU 加速器，它非常适合远程访问控制场景，尤其是 BMS、BAS 和 iBMS。 </font>
    </div>
</div>
<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center', marginTop: '48px'}}>
    <a class="get_one_now_item" href="" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong></a>
    <!--缺少商详链接，待产品上架后补上-->
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/r1225_introduction/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 了解更多</font></span></strong></a>
</div>


### SenseCAP M2 Multi-Platform Gateway

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-10.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP M2 Multi-Platform LoRaWAN Gateway 是一款标准 LoRaWAN® 网关，支持连接到不同的网络服务器。它支持 865 MHz 至 923 MHz 的全球 LoRaWAN® 频段，可用于智慧楼宇、环境监测系统、精准农业等多种 LoRaWAN® 应用。其具备广覆盖范围、强信号输出能力等特性，是构建 LoRaWAN® 网络的理想网关。 </font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_Multi_Platform_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 了解更多</font></span></strong></a>
</div>



### 室外网关

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/s/e/sensecap_lorawan_eu868_1.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP Gateway - LoRaWAN 是一款 IP66 工业级室外产品，支持扩展工作温度范围，适用于如智慧农业等低功耗、远距离数据采集的物联网场景。 </font>
    </div>
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Network/SenseCAP_Network/SenseCAP_LoRaWAN_Outdoor_Gateway/SenseCAP_LoRaWAN_Outdoor_Gateway_Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 了解更多</font></span></strong></a>
</div>

## SenseCAP 云服务

### 面向 LoRaWAN 网关

#### SenseCAP Mate APP

SenseCAP Mate APP 是一款功能强大的应用，用于数据可视化和远程 LoRaWAN 设备管理。

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/02/Pasted-into-1-12.png" alt="pir" width={200} height="auto" /></p>

### SenseCAP Portal

SenseCAP Portal

#### SenseCAP Dashbaord

SenseCAP Dashbaord 是管理 SenseCAP 设备和奖励的高效方式，它可从设备和区块链中为您的热点提供最新信息。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/dashboard.png" alt="pir" width={1000} height="auto" /></p>

## ✨ 贡献者项目

- 我们为更新本页面制定了任务清单，并将其归类到我们的[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)下，因为我们致力于通过改进 wiki 平台来提升用户体验并提供更好的支持。
- [你对本页面的贡献](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962531)对我们来说至关重要！我们非常重视你的意见，也非常感谢你在创意构思方面给予的帮助。

## SenseCAP 技术支持

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
