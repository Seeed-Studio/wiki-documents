---
description: SenseCAP_T1000_tracker_and_Ubidots_Integrated(Helium)
title:  Ubidots 集成（通过 Helium）
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_T1000_tracker_Ubidots_Helium
last_update:
  date: 8/16/2023
  author: Jessie
---


本文将说明通过 Helium LNS 将 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) 连接到 Ubidots 的过程。

<div align="right">
作者：Juan David Tangarife - 来自 Ubidots 团队
</div>

[来源](https://help.ubidots.com/en/articles/8144778-connect-seeed-studio-sensecap-t1000-x-lorawan-tracker-to-ubidots-helium-lns)

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788772796/62a6662b1c9082f3ffc2b26b/image+5.png" alt="pir" width={400} height="auto" /></p>

### 要求

一个活跃的 Ubidots 账户
一个 [SenseCAP T1000 Tracker](https://www.seeedstudio.com/sensecap-t1000-tracker?utm_source=emailsig&utm_medium=emailsig&utm_campaign=emailsig)
一个在 Helium 控制台中的活跃账户，并有一些 DC
一部支持 Google Play Store 或 AppStore 以及蓝牙的手机。

### 安装 SenseCAP Mate 应用并配置追踪器

扫描以下二维码。它将带您到 Seeed Studio 的 SenseCAP Mate 应用官方下载页面。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788590034/a636320e04a17ad23cec9ac6/image+2%282%29.png" alt="pir" width={200} height="auto" /></p>

安装完成后，在您的手机上启用蓝牙并启动应用。如果您还没有账户，您需要注册才能使用该应用。

之后，按住追踪器的按钮至少 3 秒钟或直到 LED 开始闪烁。然后，从设备列表中选择 **Tracker T1000**

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788602896/e42a8ef20f1c0ecfd5b20b17/2.gif" alt="pir" width={800} height="auto" /></p>

点击您的设备：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788612522/9015280b3a7eb52f8451f9f7/Group+1%284%29.png" alt="pir" width={300} height="auto" /></p>

转到 **设置** 选项卡，然后转到 **LoRa** 选项卡。在那里选择 _平台_ **Helium** 并根据您的要求选择 _频率计划_，同时，确保复制 **Device EUI、APP EUI** 和 **APP Key**，因为您在后续步骤中会需要它们。完成后，点击 **发送** 按钮保存设置。

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788613272/545654eedd7d0c4be47a7177/Group+2%283%29.png" alt="pir" width={300} height="auto" /></p>

### 在 Helium LNS 上注册追踪器

登录您的 Helium 控制台，然后转到 **"设备"** 部分并点击 **"添加设备"** 按钮

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597484015/8c15e6c54b08e7f4fa3d1a7e/image300.png" alt="pir" width={800} height="auto" /></p>

填写必需的字段，如设备名称**、** LoRaWAN 凭据等。然后点击 **保存设备** 按钮。
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597505603/72dec54d6bb3f6ca4f44d628/image504.png" alt="pir" width={800} height="auto" /></p>

### 在 Helium 上创建解码器函数

下一步是设置将原始字节解码为人类可读形式的函数。转到左侧面板上的 **函数** 选项卡。然后点击 **添加新函数** 按钮并给它一个名称：
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788631256/c066827c0eaebdc9dbf629d3/Group+3%282%29.png" alt="pir" width={800} height="auto" /></p>

Seeed Studio 在以下[存储库](https://github.com/Seeed-Solution/TTN-Payload-Decoder/blob/master/SenseCAP_LoRaWAN_V4_Decoder_For_Helium.js)中为此设备提供了专门的解码器。将该解码器粘贴到文本字段中，然后保存更改。

### 创建到 Ubidots 的集成

转到 **集成** 部分，然后点击 **添加集成** 并搜索 Ubidots 集成：
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597507996/c47773268f7810506757ee6e/image566.png" alt="pir" width={800} height="auto" /></p>

点击 **+添加集成**
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508059/9e279e2f7f3c94081457e409/image3369.png" alt="pir" width={800} height="auto" /></p>

在相应字段中输入您的 Ubidots 令牌，然后点击 **继续** 按钮并等待确认弹出消息。之后，为您的集成命名并点击 **添加集成** 按钮：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/597508025/8576db8c4413b16e710aee9f/image2619.png" alt="pir" width={800} height="auto" /></p>

执行此步骤后，将在您的 Ubidots 账户上创建一个新的 **Helium 插件**。

### 创建流程以将集成连接到 Ubidots

转到 **流程** 部分，然后从左上角的下拉菜单中，将设备、解码器函数和集成拖放到空白区域，然后将点连接在一起，如下面的 GIF 所示：

<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788706473/fa87a7bbb8f32f6e10b41f51/last.gif" alt="pir" width={800} height="auto" /></p>

在此示例中，设备和解码器函数都称为"sensecap-lorawan-tracker"，集成称为"send data to ubidots"。

由于 Seeed Studio 解码器返回的 JSON 对象与 Ubidots 模式不兼容，因此在提取感兴趣的数据后需要进行转换。  
转到您的 Helium 插件的解码器部分，删除那里的所有代码并用以下代码替换：  

```cpp
#Set to true in order to enable hotspot information
HOTSPOT_INFO_ENABLE = False

def format_payload(args):

    messages = args.get("decoded", {}).get("payload", {}).get("data", {}).get("messages", [])
    ubidots_payload = {}

    error = assert_error(messages[0][0])
    if error is not None:
        return error

    if HOTSPOT_INFO_ENABLE:
        hotspot_info = args.get('hotspots', None)
        ubidots_payload['SNR'] = hotspot_info[0].get('snr') if hotspot_info is not None else None
        ubidots_payload['RSSI'] = hotspot_info[0].get('rssi') if hotspot_info is not None else None
        ubidots_payload["port"] = args.get("port", None)
        ubidots_payload['Frame Counter'] = args.get('fcnt', None)

    for msg in messages:
        for sensor in msg:
            message_type = sensor.get("type", None)
            value = sensor.get("measurementValue")
            if message_type == "Latitude" or message_type == "Longitude":
                position = ubidots_payload.setdefault("position", {})
                position.update({message_type.lower(): value})
                continue
            elif message_type == "Timestamp":
                ubidots_payload["timestamp"] = value
                continue
            ubidots_payload[message_type] = value

    print(ubidots_payload)
    return ubidots_payload
    

def assert_error(data : dict):
    if "error" in data:
        return {"ERROR" : { "value" :  data["errorCode"], "context" : { "status" : data["error"]}}}
    return None
```

如果一切连接正确，您应该能在 Ubidots 上新创建的设备中看到这个
<p style={{textAlign: 'center'}}><img src="https://downloads.intercomcdn.com/i/o/788764383/864309856f8e7c43f7ab5317/image+4.png" alt="pir" width={800} height="auto" /></p>
