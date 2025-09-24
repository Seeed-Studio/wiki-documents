---
description: reSpeaker 的 Google Assistant
title: reSpeaker 的 Google Assistant
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Google_Assistant
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Front.jpg)

本 wiki 适用于 ReSpeaker Core v2.0，我们建议您先阅读 [ReSpeaker Core v2.0 的 Wiki](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_v2.0/#preparation)。

## 开始之前

您需要做以下准备：

- 安装了最新镜像的 ReSpeaker Core v2.0
- Wi-Fi 网络（确保您可以通过此网络 ping 通 google）
- PC 或 Mac
- 一根 Micro-USB 数据线
- [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

我们假设您已经阅读了[准备工作](https://wiki.seeedstudio.com/cn/ReSpeaker_Core_v2.0/#preparation)并已经设置好了 WiFi 和串口。

现在让我们开始吧 😃

## 入门指南

### 硬件

这部分简单易行，只需通过 `OTG` 端口将您的 ReSpeaker Core v2.0 连接到计算机即可。

### 软件

#### 设置您的项目

- **步骤 1. 添加您的项目**

打开[链接](https://console.actions.google.com/?pli=1)来添加您的项目。

:::note
    如果您没有 google 账户，请先在 google.com 登录。
:::

点击 `Add/Import project`

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_0.png)

然后输入您的 `Project name` 并选择 `Country/region`。然后点击 `CREATE PROJECT` 继续。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_1.png)

- **步骤 2. 注册模型**

如下图所示，点击 `Connected properties ->DEVICE MODELS ->REGISTER MODEL`。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_2.png)

填写您的产品信息，然后点击 `REGISTER MODEL` 继续。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_3.png)

直接点击 `NEXT`

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_4.png)

请确保您已选择此选项 `ALL 7 traits`，这样您就可以开启所有权限。然后点击 `SAVE TRAITS`。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_5.png)

现在请点击您刚刚创建的项目名称。在这个演示中，如您所见，我们使用 `ReSpeaker Core v2.0`。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_6.png)

您将看到如下图所示的一些信息。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_7.png)

请记下 `Model Id`，在这个演示中是 `respeaker-xxxx-respeaker-core-v2.0-xxxxx`，这很重要，您稍后会用到它。

现在让我们下载 json 文件。点击右上角的按钮，然后点击 `Download credentials.json` 将 json 文件下载到您的计算机。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_8.png)

然后使用 [WinCP](https://winscp.net/eng/docs/lang:chs) 或其他传输工具将 json 文件复制到您的 ReSpeaker Core v2.0。
例如，我们将其复制到路径 `/home/respeaker`。

接下来，请点击左上角的齿轮，点击 `Project settings`，记住 `Project ID`，在这个演示中是 ``。
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_9.png)
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/Google_10.png)

好的，让我们再检查一下，在这一部分您将获得两个 ID。

模型 ID `respeaker-xxxx-respeaker-core-v2.0-xxxxx`

项目 ID `respeaker-440eb`

它们稍后会用到。

#### 启用 Google Assistant API

在您选择的项目上启用 Google Assistant API（请参阅[服务条款](https://developers.google.com/assistant/sdk/terms-of-service)）。您需要在云平台控制台中执行此操作。

只需点击[这里](https://console.developers.google.com/apis/api/embeddedassistant.googleapis.com/overview)来启用 Google Assistant API。

确保以下切换开关已启用（蓝色）：

- `Web & App Activity`
- 此外，请确保选中 `Include Chrome browsing history and activity from websites and apps that use Google services` 复选框。
- `Device Information`
- `Voice & Audio Activity`

#### 安装 SDK 和示例代码

您可以参考 [google 文档](https://developers.google.com/assistant/sdk/guides/service/python/embed/install-sample)了解此部分的更多详细信息。

您可以使用 python2.7 和 python3 来完成这部分，在这个演示中我们使用 python2.7。

**对于 python2.7**

**步骤 1.**

输入以下命令：

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install python-dev python-virtualenv
sudo virtualenv env --no-site-packages  
env/bin/python -m pip install --upgrade pip setuptools wheel
source env/bin/activate

```

**步骤 2. 获取软件包**

Google Assistant SDK 软件包包含在设备上运行 Google Assistant 所需的所有代码，包括示例代码。

安装软件包的系统依赖项：

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
Use pip to install the latest version of the Python package in the virtual environment:
sudo python -m pip install --upgrade google-assistant-sdk[samples]

```

**步骤 3. 生成凭证**

安装或更新授权工具：

```
sudo python -m pip install --upgrade google-auth-oauthlib[tool]==0.2
```

创建目标文件夹。

```
sudo mkdir –p /path/to/assistant-sdk/
```

使用以下命令将 `credentials.json` 复制到目标位置。

```
sudo cp /home/respeaker/credentials.json /path/to/assistant-sdk/ 
```

点击下方的命令以获取令牌生成代码。

```
google-oauthlib-tool --scope https://www.googleapis.com/auth/assistant-sdk-prototype \
          --save --headless --client-secrets /path/to/assistant-sdk/credentials.json

```

:::note
    通过使用上述命令，每次您都会获得不同的授权码。请确保
:::

然后您将获得代码，请复制注释 `Please visit this URL to authorize this application:` 后面的代码。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code0.png)

将代码粘贴到您的互联网浏览器中，然后按 `Enter` 键。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code1.png)

如果一切顺利，将弹出以下窗口。选择您的 Google 账户并选择 `ALLOW`

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code2.png)
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code3.png)

好的，然后，您将获得授权码，如下图所示。

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code4.png)

将此代码复制到您的控制台中
![](https://files.seeedstudio.com/wiki/Google-Assitant/img/code5.png)

然后您将看到通知 `credentials saved: /path/to/.config/google-oauthlib-tool/credentials.json`。这意味着到目前为止一切顺利。

#### 安装 Respeakerd

输入命令来安装 respeakerd

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
git clone https://github.com/respeaker/googleassistant_respeakerd
cd googleassistant_respeakerd
sudo python setup.py install
sudo cp script/io.respeaker.respeaker.conf /etc/dbus-1/system.d/
# set respeakerd to pulse mode
sudo vim /etc/respeaker/respeakerd.conf 
# reboot to make it work
sudo reboot
```

#### 激活 Google Assistant

还记得我们之前标记的两个 ID 吗？现在是时候使用它们了。

将命令 `googlesamples-assistant-respeakerd --project-id my-dev-project --device-model-id my-model` 替换为你自己的 ID。

对于上面的命令，将 `my-dev-project` 更改为你的 `project-id`，将 `my-model` 更改为你的 `Model ID`。

对于这个演示，它应该像这样

```
googlesamples-assistant-respeakerd --project-id respeaker-440eb --device-model-id respeaker-xxxx-respeaker-core-v2.0-xxxxx
```

![](https://files.seeedstudio.com/wiki/Google-Assitant/img/codel.png)

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
