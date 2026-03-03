---
description: Sensecap LoRaWAN 用户指南
title: Sensecap LoRaWAN 用户指南
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Network/SenseCAP_Network/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide
last_update:
  date: 1/16/2023
  author: jianjing Huang
---


## 1.产品介绍

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-1.jpg)

SenseCAP 是一个工业级无线传感器网络，集成了易于部署的硬件和数据 API 服务，实现低功耗、长距离环境数据采集。SenseCAP 包含多个版本，如 LoRaWAN、NB-IoT 等。
  
SenseCAP LoRaWAN 版本产品包括 LoRaWAN 网关和传感器节点。基于 LoRaWAN 协议，可实现一对多、长距离组网和双向通信。LoRaWAN 网关支持以太网和 4G。传感器节点由大容量电池供电，续航时间长达 3 年（如果每小时上传一次数据）。它还支持热插拔，便于维护和升级。

SenseCAP 提供易于使用的云平台。用户可以使用 SenseCAP App 扫描二维码将设备绑定到相应账户来管理设备，并在 SenseCAP Portal 上查看传感器节点数据。SenseCAP Portal 为用户提供 API，以便基于 Portal 上的数据进行进一步开发。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-c-1339.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

**主要特性**

- 网关：高性能 Cortex A8 1GHz 处理器
- 传感器支持 LoRaWAN 协议，超低功耗，电池续航 3 年（如果每小时上传一次数据）
- 网关使用多种方法连接网络：4G 和以太网以支持不同场景
- 超长距离通信：视距场景下 10km，城市场景下 2km
- 易于使用的云平台和 API
- 工业防护等级 IP66 防护外壳，适用于 -40℃~70℃ 的户外环境
- 易于部署，使没有工程背景的人员也能快速安装设备
- 传感器节点采用模块化设计，包括传感器节点控制器和传感器探头，配有专门设计的支架，便于安装在杆子或墙上。

**LoRaWAN 网关：**

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-2.png)

网关底部是以太网端口和电源连接器，均满足防水要求。LED 指示灯显示网络状态。网关顶部是安装 4G/LoRa 天线的连接器，其他连接器为预留接口。

**LoRaWAN 传感器节点：**

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-3.png)

卡扣打开设备，您将看到两个部分。传感器节点控制器的电路板显示电源开关、RESET 按钮和指示 LED 以及模式按钮和串口，这些将用于固件升级。两个部分通过两个弹簧连接器连接和通信。

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-4.png)

每个传感器节点都配有支架，便于安装在杆子或墙上。

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-11.jpg)

**SenseCAP Portal：**

SenseCAP Portal 提供多种服务，包括基于 Web 的管理门户和用于调用数据的 API。用户可以使用 API 进一步开发系统集成，无需担心嵌入式硬件技术，从而缩短开发周期。

![](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/img/1-7.png)

## 2.快速开始

有关此快速入门指南，请参考 [SenseCAP Product User Guide(LoRaWAN Series)-V1.1](https://files.seeedstudio.com/wiki/Sensecap-LoRaWAN-Gateway-and-Wireless-Sensor-User-Guide/res/SenseCAP%20Product%20User%20Guide(LoRaWAN%20Series)-V1.1.docx)
