---
description: 无代码边缘AI工具
title: 无代码边缘AI工具
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/No-code-Edge-AI-Tool
last_update:
  date: 01/04/2023
  author: w0x7ce

no_comments: false # for Disqus

---

# 无代码边缘AI工具

我们很高兴为您带来基于Jetson Nano构建的reComputer上的全新体验，用于快速简便的物体识别。

只需几个简单的命令，就可以下载和部署环境，从实时屏幕监控、识别和输出结果的过程不能比三个块更简单。

## 演示视频

**仓库安全演示**

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

**农场守卫演示**

<iframe width={560} height={315} src="https://www.youtube.com/embed/Jt66IG4E6uM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 前期准备

在这个示例中，我们将介绍如何在全新的NVIDIA Jetson系统下下载和安装所需的内容，然后打开边缘AI工具并使用实时摄像头执行物体检测。以下是步骤概览。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/step.png" /></div>

1. 下载和部署
2. 放置块
3. 显示结果

### 硬件要求

在开始之前，您需要准备以下硬件。

<table>
  <thead>
    <tr>
      <th>硬件图片</th>
      <th>硬件名称</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/reComputer-Jetson-Nano.jpg" width={210} /></td>
      <td><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010 with Jetson Nano module</a><br />或 <br /><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020 with Jetson Nano module</a></td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/node-red/3.png" width={210} /></td>
      <td>Logitech C270 HD Webcam<br />或<br /><a href="https://developer.nvidia.com/embedded/jetson-partner-supported-cameras?t1_camera-interface=USB&t1_max-resolution=4K&t1_supported-jetson-products=Nano" target="_blank" rel="noopener noreferrer">其他Jetson支持的V4L2 USB摄像头</a></td>
    </tr>
  </tbody>
</table>

!!!注意
    此示例仅在基于 Jetson Nano 构建的 reComputer 上运行。请注意，基于 Jetson Xavier NX 构建的 reComputer 目前不支持运行，但将来会支持。

### 软件要求

在开始之前，请确保您的设备已刷入 [JetPack 4.6.1](https://developer.nvidia.com/embedded/jetpack-sdk-461)。如果您想要使用 JetPack 4.6.1 重新刷写 Jetson Nano eMMC，请参考[这里](https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html)。

您可以通过在终端中输入以下命令来检查已安装的 JetPack 版本：

```sh
cat /etc/nv_tegra_release
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/node-red/check-jp-version.png" /></div>

**注意：** R32.7.1 对应 JetPack 4.6.1

## 入门指南

一旦硬件和软件按照上述描述准备就绪，让我们继续体验 Edge AI Tool。在此示例中，请根据需要连接您的显示器、鼠标或键盘，您也可以通过 SSH 或 VNC 远程控制您的 NVIDIA Jetson。

### 步骤 1. 下载和部署

在 NVIDIA Jetson 中打开命令行窗口，输入以下命令将所需文件下载到 Jetson。

```sh
git clone https://github.com/Seeed-Studio/node-red-contrib-ml.git
```

下载完成后，运行以下命令来启动所需的 docker。

```sh
cd node-red-contrib-ml
sudo ./docker-ubuntu.sh
```

整个安装和启动过程大约需要7到9分钟。

### 步骤2. 放置积木块

安装完成后，使用NVIDIA Jetson系统自带的Google Chrome浏览器输入以下URL来访问操作界面。

```
127.0.0.1:1880
```

您也可以在地址栏中输入IP地址加端口号（1880）来访问操作页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/6.png" /></div>

我们可以在下图中看到Edge AI工具操作的分布。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/8.png" /></div>

- **块区域：** 此区域包含许多可供用户操作的块。

- **编程区域：** 此区域是用户的编程区域。用户可以将块从块区域拖放到编程区域来完成程序。

- **设置区域：** 最右侧是设置区域。在这里我们可以看到编程区域的流程，并可以在此区域完成一些必要的设置或对块等进行设置操作。

在块区域中，有一个名为**seeed recomputer**的部分，我们将重点关注这三个块的使用。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/7.png" /></div>

- **video input：** 此块用于从摄像头输入获取视频流。此块可以设置为选择网络摄像头或本地V4L2 USB摄像头等。

- **detection：** 此块用于选择要识别的模型。输入的视频流将使用您选择的模型进行识别。目前在此版本下只能使用**COCO数据集**。

- **video view：** 此块用于在屏幕上输出处理后的视频流。

接下来我们可以看一下块的组成。以构建块**video input**为例。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/12.png" /></div>

在此块的左侧有一个方形蓝色区域。当此区域隐藏时，表示视频流输入已关闭。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/11.png" /></div>

当此区域显示时，表示视频流输入已开启。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/13.png" /></div>

同样，video view块在右侧也有这样的方形块。隐藏会关闭视频流输出的显示，反之亦然。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/14.png" /></div>

如果块的右上角有蓝点，这是提醒该块已被编辑但尚未部署。顺便说一下，整个项目运行需要用块编程并部署后才能显示结果。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/node-red/15.png" /></div>

块右侧的灰色方块是块连接的地方。在这里左键单击并将其拖动到下一个块的左侧连接处，然后您可以连接两个块以形成程序流。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/16.png" /></div>

需要注意的是，程序流按照**从左到右**的顺序执行，左侧连接只能连接到右侧连接。

如果块的左侧没有连接，则应将其用作程序流的起始节点。如果块的右侧没有连接，则应将其用作整个程序流的结束节点。

像**object detection**这样有两个连接的块，意味着可以向该块输出几种不同的内容。然后可以同时输出视频流和日志。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/17.png" /></div>

块的使用也非常简单快捷。您可以通过长按鼠标左键拖动要使用的块，然后将其拖动到主屏幕的编程区域。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/9.png" /></div>

基于上述对块的描述，我们可以设计一个简单的块程序如下。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/18.png" /></div>

上面显示的程序是从摄像头获取输入视频流，然后使用模型检测来输入识别对象的结果。

### 步骤3. 显示结果

放置块后，我们仍需要对块进行简单配置才能使用。如果要设置特定块，可以双击它，相应的设置框将在右侧弹出。

让我们首先设置**video input**块。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/19.png" /></div>

- **Device type：** 在这里您可以设置摄像头的类型，目前支持两种类型的摄像头：网络摄像头和本地摄像头。

- **Video：** 在这里选择您的摄像头。如果这里没有可用的摄像头，请仔细检查摄像头是否受支持或是否连接成功。

- **URL：** 如果您选择了网络摄像头，Video字段将变为URL。请在这里填写网络摄像头的输入源。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/20.png" /></div>

- **Resolution：** 在这里选择您的摄像头分辨率。选择错误的分辨率可能导致运行时错误。

对于**object detection**块，设置如下。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/21.png" /></div>

- **Model name：** 在这里您选择用于对象识别的模型名称，目前仅支持COCO数据集。

!!!Note
    COCO是一个大规模的对象检测、分割和标注数据集。COCO具有以下几个特点：
    - 对象分割
    - 上下文识别
    - 超像素物体分割
    - 330K图像（>200K已标记）
    - 150万个对象实例
    - 80个对象类别
    - 91个物体类别
    - 每张图像5个标题
    - 250,000个带关键点的人物

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/node-red/22.png"/></div>

完成后，点击界面右上角的**部署**按钮，程序流将开始运行。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/23.png" /></div>

如果一切正常，您可以看到视频流识别的对象被框圈起来并给出置信度值。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/24.png" /></div>

## 深入操作

在前面的章节中，我们体验了 Edge AI Tool 程序的最简单形式。在本节中，我们将带您了解 Edge AI Tool 的更多扩展功能。

<iframe width={560} height={315} src="https://www.youtube.com/embed/QI_3g5kkh0I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

### 块下载

除了块部分中的块之外，我们还可以根据需要下载更多块来完成更复杂的项目。

在右侧的设置区域中，有一个更多选项按钮，我们选择**管理调色板**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/25.png" /></div>

在弹出页面中，您可以看到已安装的块，选择**安装**来下载更多块。这里，我们以邮箱块为例。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/27.png" /></div>

安装后，可以在块部分的底部看到新安装的块。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/30.png" /></div>

### 导入其他项目

有时候，也许您想要分享您有趣的项目供他人体验。或者也许是别人的项目您想要自己使用，那么您可以参考以下方法。

在右侧的设置区域中，有一个更多选项按钮，我们选择**导入**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/node-red/33.png" /></div>

接下来我们可以在弹出窗口中粘贴我们已分享或获得的代码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/34.png" /></div>

在这个例子中，我们将与您分享一个精彩的项目，该项目专注于通过摄像头实时检测是否有人进入环境的能力，如果检测到人员则发送电子邮件通知。

```json
[
    {
        "id": "7963f97f362cdfc6",
        "type": "tab",
        "label": "warning email",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "41a8f267df4eb722",
        "type": "video input",
        "z": "7963f97f362cdfc6",
        "name": "",
        "deviceType": "rtsp",
        "rtsp": "",
        "local": "video0",
        "resolution": "2560",
        "frequency": "60",
        "senderr": true,
        "active": false,
        "x": 160,
        "y": 140,
        "wires": [
            [
                "c5fef75b0ab418c6"
            ]
        ]
    },
    {
        "id": "c5fef75b0ab418c6",
        "type": "detection",
        "z": "7963f97f362cdfc6",
        "name": "",
        "modelName": "coco_dataset",
        "showResult": true,
        "senderr": true,
        "x": 380,
        "y": 200,
        "wires": [
            [
                "40523cc8b61cfcc9"
            ],
            [
                "689c67f6610be9e2"
            ]
        ]
    },
    {
        "id": "40523cc8b61cfcc9",
        "type": "video view",
        "z": "7963f97f362cdfc6",
        "name": "",
        "width": 640,
        "data": "payload",
        "dataType": "msg",
        "thumbnail": false,
        "active": false,
        "pass": false,
        "outputs": 0,
        "x": 650,
        "y": 140,
        "wires": []
    },
    {
        "id": "689c67f6610be9e2",
        "type": "switch",
        "z": "7963f97f362cdfc6",
        "name": "person intrusion detected",
        "property": "payload.labels",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "person",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 410,
        "y": 540,
        "wires": [
            [
                "40f6ca0fbb322dd5"
            ]
        ]
    },
    {
        "id": "40f6ca0fbb322dd5",
        "type": "e-mail",
        "z": "7963f97f362cdfc6",
        "server": "",
        "port": "465",
        "secure": true,
        "tls": true,
        "name": "",
        "dname": "warning email",
        "credentials": {
            "userid": "",
            "password": ""
        },
        "x": 720,
        "y": 620,
        "wires": []
    },
    {
        "id": "80a51065a9ee835e",
        "type": "ui_spacer",
        "z": "7963f97f362cdfc6",
        "name": "spacer",
        "group": "529bf2dedebe9911",
        "order": 2,
        "width": 12,
        "height": 1
    },
    {
        "id": "529bf2dedebe9911",
        "type": "ui_group",
        "name": "Default",
        "tab": "ad4ccf9922566f44",
        "order": 1,
        "disp": true,
        "width": 20,
        "collapse": false,
        "className": ""
    },
    {
        "id": "ad4ccf9922566f44",
        "type": "ui_tab",
        "name": "Home",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
```

请注意，代码不能直接使用，您需要在 `"rtsp": "",` 中填入您的网络摄像头的输入源。在 `"server": "",` 中填入您的邮件服务器地址，并在 `"credentials": {
            "userid": "",
            "password": ""
        },` 中填入您的用户名和密码。

当一切准备就绪后，程序块开始工作，并在检测到活动时向您推送邮件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/36.png" /></div>

在这个项目中，使用了两个新的程序块：**switch** 和 **email**。

switch 构建块是根据您设置的判断信息来决定程序走向的地方。例如，在这个程序中，我将 switch 块命名为 **person intrusion detected**，并填入了属性 **payload.labels**。**payload.labels** 是前一个块 **object detection** 的键值。当属性值等于 **person** 时，执行 switch 后连接的块。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/31.png" /></div>

email 块的设置相对简单一些，您只需要根据您的邮箱支持的协议，填入您想要接收消息的邮件地址和服务器地址。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/32.png" /></div>

当然，如果您直接复制代码并完成代码更改，您可以不对块进行进一步的更改。如果您更习惯使用图形界面，您也可以在块设置中完成这些元素的配置。

## 故障排除

### 如果 docker 启动不成功，以及如果块中没有 seed recomputer，我应该怎么办？

我们可以使用以下命令关闭 docker 并重新启动它。

```sh
cd node-red-contrib-ml/
sudo docker-compose --file docker-compose.yaml down
sudo docker-compose --file docker-compose.yaml up
```

### 如果我无法观察到结果或调试中出现错误，我应该怎么办？

请使用以下命令查看docker安装是否正确。您应该看到图中显示的三个docker。如果其中任何一个缺失，请返回**入门指南**中的第一步并重新安装docker。

```sh
sudo docker image ls
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/37.png" /></div>

如果安装与图像匹配，则使用以下命令检查已启动的 docker 的运行状态。

```sh
sudo docker ps
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/node-red/38.png" /></div>

如果没有如上图所示启动的 docker，请尝试重启 docker 或检查设备的型号和系统版本是否符合要求。

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
