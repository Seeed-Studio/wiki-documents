---
description: 学习如何在基于 Raspberry Pi 的 reComputer R11 上使用 ChirpStack 构建 LoRaWAN 网关。配置 R1X00 网关、数据包转发器和 SenseCAP S2101 传感器，通过 MQTT 流式传输物联网数据。从世界任何地方安全访问您的 LoRa 设备和应用程序。

title: ChirpStack R1X 网关与 SenseCAP S2101 集成

keywords:
- ChripStack
- LoRa-WAN
- Raspberry-Pi 
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/113991274-2_3.webp
slug: /cn/chirpstack_lora_gateway_r1x00
last_update:
  date: 9/18/2025
  author: Kasun Thushara
---

## 介绍

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/overall.jpg" alt="pir" width={700} height="auto" /></p>

本指南将引导您在基于 Raspberry Pi 的 Seeed reComputer R11 边缘控制器上使用 ChirpStack 设置完整的 LoRaWAN 网关解决方案。借助 WM1302 LoRa 集中器模块，R1X 设备可作为功能强大的网关，能够实现可靠的长距离无线通信。通过配置 Semtech 数据包转发器，LoRa 数据可以无缝传输到 ChirpStack，后者管理网络和应用层。我们将使用 Docker 来简化 ChirpStack 服务的安装和部署，确保模块化和可扩展的设置。最后，系统与 MQTT 集成，实现从 LoRa 设备（如 SenseCAP S2101 传感器）到世界任何地方可访问的应用程序的安全实时物联网数据流。

## 所需硬件

<table align="center">
  <tr>
      <th>reComputer R1X</th>
        <th>WM1302 LoRaWAN 网关模块</th>
        <th>SenseCAP S2101</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/wm1302.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/s210x.png" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

## Docker 安装指南

**1. 更新系统包**

```bash
sudo apt update
sudo apt upgrade
```

**2. 安装 Docker**

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

**3. 将用户添加到 Docker 组**

```bash
sudo usermod -aG docker ${USER}
```

**4. 重启系统**

```bash
sudo reboot
```

**5. 验证安装**

```bash
docker run hello-world
```

**6. 安装 Docker Compose**

```bash
sudo apt install docker-compose
```

完美，我将把您的**数据包转发器设置**重新格式化为您正在使用的相同结构化 wiki 样式：

---

## 运行数据包转发器

**WM1302 LoRa 集中器**需要 **Semtech 数据包转发器**在 LoRa 模块和 ChirpStack 之间中继数据。reComputer R11 为 LoRa 模块提供了预构建的设置指南。

请参考官方 Seeed Wiki 的安装步骤：
[Seeed reComputer R11 LoRa 模块指南](https://wiki.seeedstudio.com/cn/recomputer_r/#lora-module)

安装完成后，按照以下步骤配置和运行数据包转发器。

**1. 修改配置**

打开与您的 LoRa 区域对应的配置文件。例如，对于 **US915**：

```bash
nano global_conf.json.sx1250.US915
```

更新 **gateway_conf** 部分以指向您的 ChirpStack 服务器：

```json
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "localhost",
    "serv_port_up": 1700,
    "serv_port_down": 1700
}
```

> 将 `AA555A0000000000` 替换为您的实际网关 ID。我们将保持原样
> 根据您购买的模块，为您的 LoRaWAN 区域使用正确的 JSON 文件。

保存文件并退出：

- 按 **CTRL + X**，
- 然后按 **Y**，
- 最后按 **Enter**。

**2. 启动数据包转发器**

使用更新的配置运行数据包转发器：

```bash
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

这是您的**"创建网关"部分**，采用相同的 wiki 样式：

---

## 启动网关

安装 ChirpStack 后，您可以注册您的 **R11 LoRa 网关**并开始处理数据。

**启动 ChirpStack 服务**

如果尚未运行，请启动所有 ChirpStack 服务：

```bash
sudo docker-compose up -d
```

验证容器是否正在运行：

```bash
sudo docker ps
```

---

**访问 ChirpStack Web UI**

1. 打开网络浏览器并导航到：

```
http://localhost:8080/
```

2. 使用默认凭据登录：

```
Username: admin
Password: admin
```

---

## 添加您的网关

1. 在 ChirpStack UI 中，转到 **Gateways → Create Gateway**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image1.png" alt="pir" width={800} height="auto" /></p>

2. 输入以下详细信息：

   - **Gateway ID**: `AA555A0000000000`（替换为您的实际网关 ID）
   - **Name**: 为您的网关提供描述性名称

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image2.png" alt="pir" width={800} height="auto" /></p>

3. 点击 **Create Gateway** 注册网关。

4. 之后，您将能够在 ChirpStack UI 中查看网关

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image3.png" alt="pir" width={800} height="auto" /></p>

## 添加设备配置文件

要将 LoRaWAN 设备（例如 **SenseCAP S2101**）连接到 ChirpStack，您首先需要创建一个**设备配置文件**。

1. 导航到 **Device Profiles → Create Device Profile**

2. 输入以下详细信息：

   - **Name**: 为您的设备配置文件提供描述性名称
   - **Region**: 选择与您的设备和网关匹配的区域/子频段（例如 `US915`）

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image4.png" alt="pir" width={800} height="auto" /></p>

3. 导航到 **Codec** 选项卡：

   - 选择 **JavaScript Functions**
   - 粘贴您设备的编解码器

> ⚠️ 编解码器特定于您的 LoRa 设备。例如，如果您使用的是 **Seeed S201x**，您可以使用下面的代码。
> 如果您使用的是不同的设备，请咨询制造商以获取正确的编解码器。

4. 在 **Uplink/Downlink Codec** 部分复制并粘贴编解码器，然后保存配置文件。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image5.png" alt="pir" width={800} height="auto" /></p>  

<details>
<summary>.js</summary>

```javascript

function decodeUplink(input) {
    return Decode(input.fPort, input.bytes, input.variables);
}

function Decode(fPort, bytes, variables) {
    var bytesString = bytes2HexString(bytes).toLocaleUpperCase();
    var fport = parseInt(fPort);
    var decoded = {
        valid: true,
        err: 0,
        payload: bytesString,
        messages: []
    };

    // CRC check
    if (!crc16Check(bytesString)) {
        decoded['valid'] = false;
        decoded['err'] = -1; // "crc check fail."
        return { data: decoded };
    }

    // Length Check
    if ((bytesString.length / 2 - 2) % 7 !== 0) {
        decoded['valid'] = false;
        decoded['err'] = -2; // "length check fail."
        return { data: decoded };
    }

    // Cache sensor id
    var sensorEuiLowBytes;
    var sensorEuiHighBytes;

    // Handle each frame
    var frameArray = divideBy7Bytes(bytesString);
    for (var forFrame = 0; forFrame < frameArray.length; forFrame++) {
        var frame = frameArray[forFrame];
        var channel = strTo10SysNub(frame.substring(0, 2));
        var dataID = strTo10SysNub(frame.substring(2, 6));
        var dataValue = frame.substring(6, 14);
        var realDataValue = isSpecialDataId(dataID) ? ttnDataSpecialFormat(dataID, dataValue) : ttnDataFormat(dataValue);

        if (checkDataIdIsMeasureUpload(dataID)) {
            decoded.messages.push({
                type: 'report_telemetry',
                measurementId: dataID,
                measurementValue: realDataValue
            });
        } else if (isSpecialDataId(dataID) || dataID === 5 || dataID === 6) {
            switch (dataID) {
                case 0x00: // node version
                    var versionData = sensorAttrForVersion(realDataValue);
                    decoded.messages.push({
                        type: 'upload_version',
                        hardwareVersion: versionData.ver_hardware,
                        softwareVersion: versionData.ver_software
                    });
                    break;
                case 1: // sensor version
                    break;
                case 2: // sensor eui low
                    sensorEuiLowBytes = realDataValue;
                    break;
                case 3: // sensor eui high
                    sensorEuiHighBytes = realDataValue;
                    break;
                case 7: // battery + interval
                    decoded.messages.push({
                        type: 'upload_battery',
                        battery: realDataValue.power
                    }, {
                        type: 'upload_interval',
                        interval: parseInt(realDataValue.interval) * 60
                    });
                    break;
                case 9:
                    decoded.messages.push({
                        type: 'model_info',
                        detectionType: realDataValue.detectionType,
                        modelId: realDataValue.modelId,
                        modelVer: realDataValue.modelVer
                    });
                    break;
                case 0x120: // remove sensor
                    decoded.messages.push({
                        type: 'report_remove_sensor',
                        channel: 1
                    });
                    break;
                default:
                    break;
            }
        } else {
            decoded.messages.push({
                type: 'unknown_message',
                dataID: dataID,
                dataValue: dataValue
            });
        }
    }

    if (sensorEuiHighBytes && sensorEuiLowBytes) {
        decoded.messages.unshift({
            type: 'upload_sensor_id',
            channel: 1,
            sensorId: (sensorEuiHighBytes + sensorEuiLowBytes).toUpperCase()
        });
    }

    return { data: decoded };
}

// ---------- Utils ----------
function crc16Check(data) {
    return true;
}

function bytes2HexString(arrBytes) {
    var str = '';
    for (var i = 0; i < arrBytes.length; i++) {
        var num = arrBytes[i];
        var tmp = (num < 0 ? (255 + num + 1) : num).toString(16);
        if (tmp.length === 1) tmp = '0' + tmp;
        str += tmp;
    }
    return str;
}

function divideBy7Bytes(str) {
    var frameArray = [];
    for (var i = 0; i < str.length - 4; i += 14) {
        frameArray.push(str.substring(i, i + 14));
    }
    return frameArray;
}

function littleEndianTransform(data) {
    var arr = [];
    for (var i = 0; i < data.length; i += 2) {
        arr.push(data.substring(i, i + 2));
    }
    return arr.reverse();
}

function strTo10SysNub(str) {
    var arr = littleEndianTransform(str);
    return parseInt(arr.join(''), 16);
}

function checkDataIdIsMeasureUpload(dataId) {
    return parseInt(dataId) > 4096;
}

function isSpecialDataId(dataID) {
    switch (dataID) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 7:
        case 9:
        case 0x120:
            return true;
        default:
            return false;
    }
}

function ttnDataSpecialFormat(dataId, str) {
    var strReverse = littleEndianTransform(str);
    if (dataId === 2 || dataId === 3) {
        return strReverse.join('');
    }

    var str2 = toBinary(strReverse);
    var arr = [];
    switch (dataId) {
        case 0: case 1: // versions
            for (var k = 0; k < str2.length; k += 16) {
                var tmp = str2.substring(k, k + 16);
                tmp = (parseInt(tmp.substring(0, 8), 2) || 0) + '.' + (parseInt(tmp.substring(8, 16), 2) || 0);
                arr.push(tmp);
            }
            return arr.join(',');
        case 4:
            for (var i = 0; i < str2.length; i += 8) {
                var item = parseInt(str2.substring(i, i + 8), 2);
                arr.push(item < 10 ? '0' + item : item.toString());
            }
            return arr.join('');
        case 7:
            return {
                interval: parseInt(str2.substr(0, 16), 2),
                power: parseInt(str2.substr(-16, 16), 2)
            };
        case 9:
            return {
                detectionType: parseInt(str2.substring(0, 8), 2),
                modelId: parseInt(str2.substring(8, 16), 2),
                modelVer: parseInt(str2.substring(16, 24), 2)
            };
    }
}

function ttnDataFormat(str) {
    var strReverse = littleEndianTransform(str);
    var str2 = toBinary(strReverse);
    if (str2[0] === '1') {
        var arr = str2.split('').map(b => b === '1' ? 0 : 1);
        var val = parseInt(arr.join(''), 2) + 1;
        return parseFloat('-' + val / 1000);
    }
    return parseInt(str2, 2) / 1000;
}

function sensorAttrForVersion(dataValue) {
    var arr = dataValue.split(',');
    return { ver_hardware: arr[0], ver_software: arr[1] };
}

function toBinary(arr) {
    return arr.map(item => {
        var bin = parseInt(item, 16).toString(2).padStart(8, '0');
        return bin;
    }).join('');
}

```

</details>

## 添加设备

创建**设备配置文件**后，您可以在 ChirpStack 中注册您的 LoRaWAN 设备。

1. 导航到**租户 → 应用程序**并点击**添加应用程序**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image6.png" alt="pir" width={800} height="auto" /></p>  

2. 为您的应用程序输入**名称**并保存
3. 打开您新创建的应用程序并点击**添加设备**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image7.png" alt="pir" width={800} height="auto" /></p>

4. 输入以下详细信息：

   - **设备 EUI**：粘贴您的 LoRa 设备的 EUI（可在设备数据表或配置软件中找到，例如 SenseCAP 应用程序）
   - **设备配置文件**：选择您之前创建的设备配置文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image8.png" alt="pir" width={800} height="auto" /></p>

5. 输入**应用程序密钥**并点击**提交**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image9.png" alt="pir" width={800} height="auto" /></p>

> ⚠️ 设备 EUI 和应用程序密钥可以从您的 LoRa 设备数据表或配置软件中获取。对于 **SenseCAP 设备**，您可以使用 SenseCAP 应用程序查看或重新配置这些设置。

以下是您的**"检查设备状态"**部分的完善版本，采用您的 wiki 风格，与之前的部分保持一致：

---

## 检查设备状态

添加 LoRaWAN 设备后，您可以验证设备是否正确连接并传输数据。

1. 导航到您的应用程序并选择您添加的设备
2. 转到**事件**选项卡

   - 当设备成功加入网络时，您应该看到一个**加入数据包**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image10.png" alt="pir" width={800} height="auto" /></p>

3. 点击数据包查看**详细信息**

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image11.png" alt="pir" width={500} height="auto" /></p>

- 例如，您可以看到像 SenseCAP S2101 这样的设备报告的**温度和湿度数据**

## MQTT 集成

ChirpStack 使用 **MQTT** 将数据从 LoRaWAN 设备流式传输到应用程序或仪表板。您可以实时监控这些消息。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image12.png" alt="pir" width={800} height="auto" /></p>

1. 将您的 PC 连接到与 reComputer R11 网关**相同的网络**
2. 使用 MQTT 客户端（如 **MQTT Explorer**）订阅主题
3. 配置 MQTT 客户端：

   - **主机**：您的 reComputer R11 的 IP 地址
   - **端口**：`1883`
4. 连接后，您将看到代表您设备的**主题树**，例如：

```
application/c853ffcd-53f0-4de3-83b9-5467ff895f76/device/2cf7f1c043500402/event/up
```

5. 展开主题将显示包含传感器数据的**上行消息**，例如 SenseCAP S2101 等设备的温度和湿度

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image13.png" alt="pir" width={800} height="auto" /></p>

## Node-RED 集成

您可以使用 MQTT 节点和自定义函数在 **Node-RED** 中可视化 LoRaWAN 设备数据。

1. 打开 **Node-RED** 并将 **MQTT IN** 节点拖到流程中

2. 配置 MQTT 节点：

   - **服务器**：您的 reComputer R11 的 IP（例如，`10.0.0.208`）
   - **端口**：`1883`
   - **主题**：`application/+/device/+/event/up`

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image15.png" alt="pir" width={600} height="auto" /></p>

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image14.png" alt="pir" width={600} height="auto" /></p>

3. 添加一个**函数节点**来解码 MQTT 消息负载

   - 例如，从 JSON 对象中提取**温度**和**湿度**

```javascript
   // Get the JSON payload
let data = msg.payload;

if (typeof data === "string") {
    try {
        data = JSON.parse(data);
    } catch (e) {
        node.error("Invalid JSON", msg);
        return [null, null];
    }
}

// Check if "object" and "messages" exist
if (!data.object || !Array.isArray(data.object.messages)) {
    node.warn("No messages found in payload");
    return [null, null];
}

// Find the two measurements
let tempMsg = null;
let humMsg = null;

data.object.messages.forEach(m => {
    if (m.type === "report_telemetry") {
        if (m.measurementId === 4097) {
            tempMsg = { topic: "temperature", payload: m.measurementValue };
        } else if (m.measurementId === 4098) {
            humMsg = { topic: "humidity", payload: m.measurementValue };
        }
    }
});

// Return 2 outputs: [temperature, humidity]
return [tempMsg, humMsg];
```

4. 从函数节点连接**两个输出节点**，一个用于温度，一个用于湿度

5. 将每个输出连接到 Node-RED 中的**仪表节点**或任何其他可视化节点以显示传感器读数

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image16.png" alt="pir" width={600} height="auto" /></p>
    <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/chirpstack/image17.png" alt="pir" width={600} height="auto" /></p>

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
