---
description: 口罩相机 - 基于Jetson Nano的人群口罩使用监测
title: 口罩相机 - 基于Jetson Nano的人群口罩使用监测
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Jetson-Nano-MaskCam
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# 口罩相机 - 基于Jetson Nano的人群口罩使用监测

## **简介**

由于新冠疫情的破坏，在许多公共场所，我们经常看到要求佩戴口罩。通常在区域门口有管理人员观察人们是否佩戴口罩。对于人类来说，这可能是一个非常简单的任务，但如果我们将其与Jetson Nano、图形捕捉和边缘计算相结合，这将是一个非常有趣和具有社会价值的任务。

MaskCam由伯克利设计技术公司（BDTI）和Tryolabs S.A.开发，开发资金由NVIDIA提供。MaskCam采用MIT许可证发布。有关MaskCam的更多信息，[请参阅BDTI的报告](https://www.bdti.com/maskcam)。如果您有疑问，请发送电子邮件至maskcam@bdti.com。

在这个项目中，我们将使用[NVIDIA® Jetson Nano™ 4GB Developer Kit](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html)及其他配件。与此同时，您也可以选择Seeed的[A206 Carrier Board](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html)，它与NVIDIA官方的载板具有相同的尺寸和功能设计，同时具有出色的稳定性和多功能性。


## **准备工作。**

### **硬件要求**

- [英伟达® Jetson Nano™ 4GB 开发者套件](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) (JetPack 4.6)

- [A206 载板](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html)(optional)

- 7英寸HDMI监视器和HDMI连接线

- USB 坞式扩展底座

- 鼠标和键盘

- 5V 4A 电源适配器

- USB 摄像头

- 以太网线

- 安装 Windows11（或 Windows10/Ubuntu18.04/OSX Big Sur）的个人电脑
### **软件需求**

- docker

- docker-compose

- 视频软件（显示RTSP流，如VLC/QuickTime/PotPlayer）

## **开始吧。**

### **Jetson Nano 设置**

- #### **步骤 1.** 从Docker Hub下载MaskCam容器

```shell
sudo docker pull maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu12.png)

- #### **步骤 2.** 使用以下命令查找Jetson Nano的IP地址。 ```ifconfig```

```shell
sudo ifconfig
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu5.png)

- #### **步骤 3.** 使用docker启动MaskCam。

记得将你的Jetson Nano与USB摄像头连接，然后在终端中输入以下命令。

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu1.png)

**注意:** 请在这个命令中用您的Jetson Nano的IP地址替换```<your-jetson-ip>```。

如果你不想使用默认输入设备，也有两个不同的命令可供选择和替换上述命令。

请使用/dev/video1摄像头设备：

```shell
#使用 /dev/video1 相机设备。
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2:///dev/video1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

请使用CSI相机设备。

```shell
#请使用CSI摄像头设备。
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2://0 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

- #### **步骤 4.** 通过观看直播视频流。 ```MASKCAM_DEVICE_ADDRESS```

```shell
Streaming at rtsp://aaa.bbb.ccc.ddd:8554/maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu3.png)

**Note:**  ```aaa.bbb.ccc.ddd```是您之前在```MASKCAM_DEVICE_ADDRESS```中提供的地址。

您可以将该URL复制粘贴到另一台电脑上的RSTP流媒体查看器中。在视频流中，如果您没有戴口罩，您的面部将显示为红色框架。否则，您将看到绿色框架。

### **MQTT服务器设置**

 除了基本功能外，这个库还包括了远程服务器功能，这意味着您的计算机可以从设备接收统计信息，将其存储在数据库中，并拥有基于web的GUI前端来展示这些统计数据。

在本文中，关于服务器的所有演示都基于Windows 11系统主机，您也可以通过本文找到在Linux系统上的指导：[Maskcam](https://github.com/bdtinc/maskcam)。

- #### **步骤1.** 在您的个人电脑上安装Docker和Docker-compose。

从官方网站[https://docs.docker.com/get-docker/]下载[Docker](https://www.docker.com/)的安装包。

请注意：如果在安装过程中出现消息```WLS 2 安装不完整```，请点击提示框中的链接，下载并安装 Linux 内核更新包。然后可以运行```docker```。

- #### **步骤2.** 设置构建目录。

以管理员身份运行```Windows PowerShell```

转到您将使用的驱动器根目录，例如：

```shell
cd e:\
```

下载 MaskCam 代码库:

```shell
Invoke-WebRequest https://github.com/bdtinc/maskcam/archive/refs/heads/main.zip -OutFile e:\maskcam.zip
```

解压到指定路径。 ```e:\maskcam``` :

```shell
Expand-Archive e:\maskcam.zip -DestinationPath e:\maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu14.png)

转到maskcam服务器文件夹，其中包含四个容器：Mosquitto代理、后端API、数据库和Streamlit前端。

```shell
cd maskcam\maskcam-main\server
```

然后，通过复制默认模板来创建 ```.env``` 文件。

```shell
cp database.env.template database.env
cp frontend.env.template frontend.env
cp backend.env.template backend.env
```

打开。 ```database.env``` :

```shell
notepad database.env
```

请用您自己的值替换```<DATABASE_USER>```，```<DATABASE_PASSWORD>```和```<DATABASE_NAME>```字段。

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu15.png)

- #### **步骤3.** 构建和运行本地服务器。

编辑完数据库环境文件后，您可以准备使用单个命令构建所有容器并运行它们。

```shell
sudo docker-compose up -d
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu6.png)

接下来，打开一个网络浏览器，输入服务器IP地址，访问前端网页。

```http://<server IP>:8501/```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu8.png)

**Note:** 请用您自己的IP地址替换```<服务器IP>```。

如果在前端看到```ConnectionError```，请等待几秒钟并重新加载页面。后端容器可能需要一些时间来完成数据库设置。

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu7.png)

如果您等待几秒钟并重新加载页面，但前端仍然显示```ConnectionError```，请确保端口：<5432>和<80>没有被占用或被监听。

如果您第一次成功访问前端网页，但下次失败，请目前重新安装docker是解决问题的最佳方法。

- #### **步骤4.** Point Jetson Nano at your local server

返回到Jetson Nano的终端，然后使用以下命令运行maskcam容器：

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MQTT_BROKER_IP=<server IP> --env MQTT_DEVICE_NAME=my-jetson-1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu9.png)

**Note:** 请用您自己的服务器和Jetson Nano的IP地址替换```<server IP>```和```<your-jetson-ip>```。

之后，您可以在网页上选择您的设备，如下所示：

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu10.png)

最后，您可以看到Jetson Nano收集的数据传输到服务器。

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu11.png)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

