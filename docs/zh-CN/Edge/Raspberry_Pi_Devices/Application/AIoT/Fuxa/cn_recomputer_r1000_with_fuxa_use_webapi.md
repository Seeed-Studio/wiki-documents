---
description: 本文主要介绍如何使用 fuxa 进行 WebAPI 通信。

title: reComputer R1000 与 fuxa 使用 WebAPI
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - WebAPI
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fuxa_web_api
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## 介绍
FUXA 是一个基于 Web 的过程可视化（SCADA/HMI/仪表板）软件。使用 FUXA，您可以为您的机器创建具有个性化设计的现代过程可视化界面和实时数据显示。它支持 Modbus RTU/TCP、西门子 S7 协议、OPC-UA、BACnet IP、MQTT 和其他协议。

[postman](https://www.postman.com/downloads/?utm_source=postman-home) 是一个支持 http 协议的接口调试和测试工具。其主要特点是功能强大、使用简单、易于使用，常用于 WebAPI 的接口调试。

本文主要介绍如何使用 fuxa 进行 WebAPI 通信。现阶段，fuxa 仅支持 `GET` 功能，数据包采用 Json 格式。我们将使用 fuxa 的 `GET` 功能来获取 `postman` 的数据报。

## 开始使用

在开始这个项目之前，您可能需要按照此处描述的内容提前准备硬件和软件。

### 硬件准备

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

* Python 3.11 可能与 fuxa 不兼容。如果您的 Python 版本是 3.11，请考虑更换为其他 Python 版本。
* 在 reComputer R1000 上使用 [fuxa](https://github.com/frangoteam/FUXA)。您可以参考以下步骤在 reComputer R1000 上安装 fuxa
  ```shell
    ## 您需要安装 Node 版本 14 || 16 || 18。
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## 接下来从 npm 安装 FUXA
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

## WebAPI 通信步骤
**步骤 1**：点击 `fuxa` 界面右下角的 `+` 号，输入 `Name`，`Type` 选择 `WebAPI`，`Method` 选择 `GET`，`Format` 选择 `JSON`。然后在 `URL` 处输入 `https://postman-echo.com/get`，最后点击 `OK`。您可以看到 fuxa 能够成功与 `postman` 建立连接

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_webapi.gif" /></center>

**步骤 2**：进入设置界面，点击左上角或右下角的 `+` 按钮，您可以看到通过 `GET` 功能从 `postman` 获取的数据，我们选择每个数据并创建一个标签，最后点击 `OK`，这样就可以通过 `GET` 功能实时读取 `postman` 数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" /></center>

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