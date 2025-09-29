---
description: MaskCam
title: MaskCam
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

# Maskcam - 基于 Jetson Nano 的人群口罩佩戴监控

## **介绍**

由于 COVID-19 的肆虐，在许多公共场所，我们经常看到佩戴口罩的要求。通常在区域入口处会有管理人员观察人们是否佩戴口罩。也许对人类来说这是一个非常简单的任务，但如果我们将其与 Jetson Nano、图形捕获和边缘 AI 计算相结合，这将是一个非常有趣且具有社会价值的任务。

MaskCam 由 Berkeley Design Technology, Inc. (BDTI) 和 Tryolabs S.A. 开发，开发资金由 NVIDIA 提供。MaskCam 采用 MIT 许可证提供。有关 MaskCam 的更多信息，请参阅 [BDTI 的报告](https://www.bdti.com/maskcam)。如果您有疑问，请发送邮件至 maskcam@bdti.com 联系 BDTI。

在这个项目中，我们将使用 [NVIDIA® Jetson Nano™ 4GB 开发套件](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) 以及其他配件。同时，您可以选择来自 Seeed 的 [A206 载板](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html)，它具有与 NVIDIA 官方载板相同的尺寸和功能设计，同时还具有出色的稳定性和通用性。

## **准备工作**

### **硬件要求**

- [NVIDIA® Jetson Nano™ 4GB 开发套件](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html) (JetPack 4.6)

- [A206 载板](https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html)（可选）

- 7 英寸 HDMI 显示器和 HDMI 线缆

- USB 扩展坞

- 鼠标和键盘

- 5V 4A 电源适配器

- USB 摄像头

- 以太网线缆

- 运行 Windows11 的 PC（或 Windows10/Ubuntu18.04/ OSX Big Sur）

### **软件要求**

- docker

- docker-compose

- 视频软件（显示 RTSP 流，如 VLC/QuickTime/PotPlayer）

## **开始使用**

### **Jetson Nano 设置**

- #### **步骤 1.** 从 Docker Hub 下载 MaskCam 容器

```shell
sudo docker pull maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu12.png)

- #### **步骤 2.** 使用命令 ```ifconfig``` 查找 Jetson Nano IP 地址

```shell
sudo ifconfig
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu5.png)

- #### **步骤 3.** 使用 docker 启动 MaskCam

记住要将 USB 摄像头连接到您的 Jetson Nano，然后在终端中输入以下命令。

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu1.png)

**注意：** 在此命令中，请将 ```<your-jetson-ip>``` 替换为您自己的 Jetson Nano 的 IP 地址。

如果您不想使用默认输入设备，还有两个不同的命令可供选择来替换上述命令。

使用 /dev/video1 摄像头设备：

```shell
#Use the /dev/video1 camera device
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2:///dev/video1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

使用 CSI 摄像头设备：

```shell
#Use the CSI camera device
sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2://0 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

- #### **步骤 4.** 通过```MASKCAM_DEVICE_ADDRESS```查看实时视频流

```shell
Streaming at rtsp://aaa.bbb.ccc.ddd:8554/maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu3.png)

**注意：** ```aaa.bbb.ccc.ddd``` 是您之前在 ```MASKCAM_DEVICE_ADDRESS``` 中提供的地址。

您可以将该 URL 复制粘贴到另一台计算机上的 RSTP 流媒体查看器中。在视频流中，如果您没有佩戴口罩，您将在脸部看到红色框架。否则，您将看到绿色框架。

### **MQTT 服务器设置**

除了基本功能外，该库还包含远程[服务器](https://github.com/bdtinc/maskcam/blob/main/server)功能，这意味着您的 PC 可以从设备接收统计信息，将其存储在数据库中，并拥有基于 Web 的 GUI 前端来显示它们。

在本文中，所有关于服务器的演示都基于 Window11 系统主机，您也可以通过本文找到使用 Linux 系统的说明：[Maskcam](https://github.com/bdtinc/maskcam)。

- #### **步骤1.** 在您的 PC 上安装 Docker 和 Docker-compose

从官方网站下载 [Docker](https://www.docker.com/) 的安装包：[https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

注意：如果在安装过程中出现 ```WLS 2 installization is incomplete.``` 的消息，请点击提示框中的链接，下载并安装 Linux 内核更新包。
然后您就可以运行 ```docker```。

- #### **步骤2.** 设置构建目录

以管理员身份运行 ```Windows PowerShell```

移动到您将要使用的驱动器根目录，例如：

```shell
cd e:\
```

Download MaskCam repo :

```shell
Invoke-WebRequest https://github.com/bdtinc/maskcam/archive/refs/heads/main.zip -OutFile e:\maskcam.zip
```

将其解压到路径 ```e:\maskcam``` ：

```shell
Expand-Archive e:\maskcam.zip -DestinationPath e:\maskcam
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu14.png)

移动到 maskcam 服务器文件夹，该文件夹包含四个容器：Mosquitto 代理、后端 API、数据库和 Streamlit 前端。

```shell
cd maskcam\maskcam-main\server
```

然后，通过复制默认模板来创建 ```.env``` 文件：

```shell
cp database.env.template database.env
cp frontend.env.template frontend.env
cp backend.env.template backend.env
```

Open the ```database.env``` :

```shell
notepad database.env
```

将 ```<DATABASE_USER>```、```<DATABASE_PASSWORD>``` 和 ```<DATABASE_NAME>``` 字段替换为您自己的值

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu15.png)

- #### **步骤3.** 构建并运行本地服务器

编辑数据库环境文件后，您就可以构建所有容器并使用单个命令运行它们：

```shell
sudo docker-compose up -d
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu6.png)

接下来，打开网页浏览器并输入服务器IP地址来访问前端网页：

```http://<server IP>:8501/```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu8.png)

**Note:** Replace ```<server IP>``` with your own IP address.

If you see a ```ConnectionError``` in the frontend, wait a couple more seconds and reload the page. The backend container can take some time to finish the database setup.

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu7.png)

If you wait a couple more seconds and reload the page but it is still a ```ConnectionError``` in the frontend, please make sure the ports: `5432` and `80` are not being occupied or listened up.

If you visit the frontend webpage successfully the first time but failed the next, the best way to solve it currently is to re-install docker.

- #### **Step4.** Point Jetson Nano at your local server

Return to your Jetson Nano's terminal, and then run the maskcam container with the command below:

```shell
sudo docker run --runtime nvidia --privileged --rm -it --env MQTT_BROKER_IP=<server IP> --env MQTT_DEVICE_NAME=my-jetson-1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta
```

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu9.png)

**注意：** 将 ```<server IP>``` 和 ```<your-jetson-ip>``` 替换为您自己的服务器和 Jetson Nano 的 IP 地址。

之后，您可以在网页上选择您的设备，如下所示：

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu10.png)

最后，您可以看到 Jetson Nano 收集的数据传输到服务器。

![](https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu11.png)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
