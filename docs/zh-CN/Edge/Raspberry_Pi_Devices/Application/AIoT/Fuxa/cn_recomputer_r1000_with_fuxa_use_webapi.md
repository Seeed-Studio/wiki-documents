---
description: 本文主要介绍如何使用 fuxa 进行 WebAPI 通信。

title: 使用 fuxa 在 reComputer R1000 上实现 WebAPI
keywords:
  - 边缘控制器
  - reComputer R1000
  - fuxa
  - WebAPI
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fuxa_web_api
last_update:
  date: 2024/10/8
  author: ShuishengPeng
---

## 简介
FUXA 是一个基于 Web 的过程可视化（SCADA/HMI/Dashboard）软件。使用 FUXA，您可以为您的机器创建现代化的过程可视化界面，并实时显示数据。它支持 Modbus RTU/TCP、Siemens S7 协议、OPC-UA、BACnet IP、MQTT 等协议。

[postman](https://www.postman.com/downloads/?utm_source=postman-home) 是一个支持 http 协议的接口调试和测试工具。其主要特点是功能强大、使用简单且易于操作，常用于 WebAPI 的接口调试。

本文主要介绍如何使用 fuxa 进行 WebAPI 通信。目前阶段，fuxa 仅支持 `GET` 功能，数据包格式为 Json。我们将使用 fuxa 的 `GET` 功能获取 `postman` 的数据包。

## 开始

在开始这个项目之前，您可能需要提前准备好硬件和软件，如下所述。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备

* Python 3.11 可能与 fuxa 不兼容。如果您的 Python 版本是 3.11，请考虑更换为其他版本。
* 在 reComputer R1000 上使用 [fuxa](https://github.com/frangoteam/FUXA)。您可以参考以下步骤在 reComputer R1000 上安装 fuxa：
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
**步骤 1**：点击 `fuxa` 界面右下角的 `+` 号，输入 `Name`，在 `Type` 中选择 `WebAPI`，在 `Method` 中选择 `GET`，在 `Format` 中选择 `JSON`。然后在 `URL` 中输入 `https://postman-echo.com/get`，最后点击 `OK`。您可以看到 fuxa 成功与 `postman` 建立了连接。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_webapi.gif" /></center>

**步骤 2**：进入设置界面，点击左上角或右下角的 `+` 按钮，您可以通过 `GET` 功能看到从 `postman` 获取的数据。我们选择每个数据并创建一个标签，最后点击 `OK`，这样就可以通过 `GET` 功能实时读取 `postman` 数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>