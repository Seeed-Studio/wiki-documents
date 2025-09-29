---
description: 探索使用 Quectel 4G HAT 在 IT 系统中发送和接收 SMS 的关键作用。了解 SMS 如何确保可靠通信、增强系统警报、实现远程控制，并支持无缝集成和可扩展的 IoT 应用。适合 IT 专业人士和 IoT 爱好者。

title: 使用 Quectel 4G Raspberry Pi HAT 发送和接收 SMS 消息
keywords:
  - Raspberry Pi HAT
  - 入门指南
  - 工业物联网 (IIoT)
  - 机器对机器通信 (M2M)
  - SMS
  - 边缘计算
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.webp
slug: /cn/send_receive_sms_raspberry_pi_4g_lte_hat
last_update:
  date: 12/11/2024
  author: Kasun Thushara
---

## 简介

在偏远和农村地区，4G 覆盖稀少或不可用的情况下，通过 2G 网络进行 SMS 通信成为确保 IoT 系统不中断连接的重要工具。**在野生动物保护中，这项技术使自动警报系统能够监测环境条件、跟踪动物活动并实时报告关键事件**。通过利用具有 SMS 功能的 4G 模块，设备可以发送自动警报并接收指令，从而确保即使在偏远地区，保护工作也不会因缺乏现代网络基础设施而受到阻碍。这种自动化与通信的结合有助于提高偏远野生动物区域监测系统的有效性，为保护和研究提供可靠的解决方案。

## 硬件准备
<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>    
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 设置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_setup.png" style={{width:800}}/></div>

## 使用 QCOM 工具在 Windows 上发送 SMS


### 第 1 步：设置模块

- **插入模块**
    - 通过 USB 将模块连接到 Windows PC。确保 DIP 开关处于正确的顺序。在本例中，所有开关都设置为 0，表示它们已禁用。
- **打开模块**
    - 按下模块上的电源按钮。
- **验证通信端口**
    - [确保驱动程序已正确安装](https://wiki.seeedstudio.com/cn/getting_started_raspberry_pi_4g_lte_hat/#for-windows)。您应该可以在 Windows 设备管理器中看到列出的 COM 端口。

### 第 2 步：打开 QCOM 界面

- **安装并启动 QCOM**
  - 下载并安装 **QCOM v1.6** 软件（如果尚未安装）。
  - 在 PC 上启动该工具。
- **配置 COM 端口**
  - 在 QCOM 界面中选择与模块关联的 COM 端口（例如 COM3）。
  - 将波特率设置为推荐值（例如 9600）。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/USBcommunication-2.PNG" 
    style={{ width: 600}} 
  />
</div>

### 第 3 步：发送 SMS

**测试模块通信**

  - 在命令输入框中输入以下命令：
 
```bash
AT
```
  - 点击发送。
  - 模块应响应：

```bash
OK
```
  - 这表明模块已准备就绪。
  
**设置 SMS 模式**
  - 输入以下命令将 SMS 模式设置为文本：
```bash
AT+CMGF=1
```
  - 点击发送。
  - 模块应响应：
```bash
OK
```
**检查 SMSC 号码**

  - 通过输入以下命令查询 SIM 卡的 SMSC（短消息服务中心）号码：
```bash
AT+CSCA?
```
  - 点击发送。响应应类似于：
  
```bash
+CSCA: "+1234567890",145
OK
```
  - 如果未设置 SMSC，请联系您的服务提供商以获取正确的号码，并使用以下命令设置：
```bash
AT+CSCA="+1234567890"
```
**撰写并发送 SMS**

- 输入以下命令以启动 SMS：
```bash
AT+CMGS="+9876543210"
```
- 将 +9876543210 替换为接收者的电话号码。

- 点击发送。

- QCOM 界面将显示：
```bash
>
```
- 现在，在文本框中输入您的消息（例如，Hello!）。

**提交 SMS**
- 按 Ctrl + Z 或使用 QCOM 界面选项发送 SMS。
- 模块将响应：
```bash
+CMGS: 25 
OK
```
- 这表明 SMS 已成功发送。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/sms_send.PNG" 
    style={{ width: 600}} 
  />
</div>

### 第 4 步：验证 SMS

- 检查接收者的手机以确保消息已收到。

## 使用 Minicom 在 Raspberry Pi 上发送短信

假设您已经正确安装了驱动程序并启动了模块。如果没有，请[参考此指南](https://wiki.seeedstudio.com/cn/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi)。

**步骤 1：打开 Minicom**

:::note
如果尚未安装用于与 AT 命令通信的必要驱动程序，您需要[安装它们](https://wiki.seeedstudio.com/cn/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)。
:::

```bash
sudo minicom -D /dev/ttyUSB2
```

**步骤 2：按照表中的命令操作**

| **命令**             | **响应**                     | **说明**                                         |
|-----------------------|------------------------------|-------------------------------------------------|
| `ATE`                | `OK`                        | 启用回显以在 Minicom 中查看输入的命令。         |
| `AT`                 | `OK`                        | 检查模块是否准备就绪。                         |
| `AT+CMGF=1`          | `OK`                        | 将短信模式设置为文本模式。                     |
| `AT+CSCA?`           | `+CSCA: "+1234567890",145`  | 查询 SIM 卡中的短信中心号码（SMSC）。          |
| `AT+CMGS="+94712222803"` | `>`                      | 准备模块接受指定收件人的消息内容。             |
| *(输入消息内容：`Hello!`)* | *(无响应)*              | 输入消息内容。                                 |
| *(按下 `Ctrl+Z`)*    | `+CMGS: 25` `OK`            | 发送消息。模块通过 `+CMGS` 和消息参考 ID 确认。|

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rpi_send_msg_1.PNG" 
    style={{ width: 600}} 
  />
</div>

## 使用 Python 脚本发送短信

```python
import serial
import time

# 配置串口
SERIAL_PORT = "COM7"  # 替换为模块的 COM 端口（例如，Windows 上为 COM3，Linux 上为 /dev/ttyUSB2）
BAUD_RATE = 9600      # 根据 GSM 模块的波特率进行调整

# 短信详情
SMSC_NUMBER = "+9477000000"  # 替换为运营商的短信中心号码（国际格式）
RECIPIENT_NUMBER = "+94712222813"  # 替换为收件人的电话号码（国际格式）
MESSAGE = "Hello, this is a test message from Python!"

def send_at_command(command, expected_response="OK", timeout=3):
    """向 GSM 模块发送 AT 命令并等待响应。"""
    ser.write((command + "\r").encode())
    time.sleep(timeout)
    response = ser.read_all().decode()
    print(f"Command: {command}\nResponse: {response}")
    return expected_response in response

try:
    # 打开串口连接
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
    time.sleep(2)  # 允许模块初始化

    # 测试与 GSM 模块的通信
    if not send_at_command("AT"):
        raise Exception("GSM 模块无响应。请检查连接。")

    # 设置短信中心号码（可选，仅在需要时设置）
    if not send_at_command(f'AT+CSCA="{SMSC_NUMBER}"'):
        raise Exception("设置短信中心号码失败。")

    # 设置短信为文本模式
    if not send_at_command("AT+CMGF=1"):
        raise Exception("设置短信模式为文本失败。")

    # 发送短信
    if not send_at_command(f'AT+CMGS="{RECIPIENT_NUMBER}"', ">"):
        raise Exception("初始化短信发送失败。")

    # 提供消息内容并发送 Ctrl+Z 以完成
    ser.write((MESSAGE + "\x1A").encode())  # Ctrl+Z 以 '\x1A' 形式发送
    time.sleep(5)  # 等待模块发送短信
    response = ser.read_all().decode()
    print(f"SMS Send Response: {response}")

    if "OK" in response:
        print("短信发送成功！")
    else:
        print("短信发送失败。请检查模块或命令语法。")

except Exception as e:
    print(f"错误: {e}")

finally:
    if ser.is_open:
        ser.close()
```

## 使用 AT 指令在 Windows 环境下接收短信

本文逐步讲解如何使用 AT 指令接收和读取短信。请按照以下顺序执行这些指令。

假设您已经正确安装了驱动程序并启动了模块。如果尚未完成，请参考[此指南](https://wiki.seeedstudio.com/cn/getting_started_raspberry_pi_4g_lte_hat/#for-windows)。

### 第 1 步：设置短信模式为文本模式

使用 AT+CMGF=1 指令将 GSM 模块设置为文本模式，以便更轻松地处理短信。

**指令：**

```bash
AT+CMGF=1
预期响应：
OK
```

### 第 2 步：检查当前消息存储

使用 AT+CPMS? 指令检查当前的消息存储配置。

**指令：**
```bash
AT+CPMS?
```

**预期响应：**
+CPMS: "SR",0,5,"MT",19,255,"MT",19,255 OK

**解释：**
- `SR`：状态报告存储（例如，短信送达报告）。
- `MT`：移动终端存储（包括 SIM 卡和模块存储）。
在此示例中，“MT”存储了 19 条消息，容量为 255 条。

### 第 3 步：切换消息存储到 "MT"

使用 AT+CPMS="MT" 指令切换到移动终端存储，以访问存储在其中的消息。

**指令：**

```bash
AT+CPMS="MT"
```
**预期响应：**

```bash
+CPMS: 19,255,19,255,19,255 OK
```
**解释：**

- 19,255：当前存储了 19 条消息，存储容量为 255 条。

### 第 4 步：列出所有存储的消息

使用 AT+CMGL="ALL" 指令检索存储在选定存储器中的所有消息。

**指令：**

```bash
AT+CMGL="ALL"
```
**预期响应：**

```bash
+CMGL: 1,"REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! +CMGL: 2,"REC READ","+9876543210","","20/12/05,10:45:12+32" Another test message! OK
```
**解释：**

- +CMGL: 1：第一条消息的索引。
- "REC UNREAD"：消息状态（未读）。
- "+1234567890"：发送者的电话号码。
- Hello, this is a test message!：消息内容。

### 第 5 步：读取特定消息

使用 AT+CMGR=|index| 指令读取特定索引的消息（例如，索引 1）。

**指令：**
```bash
AT+CMGR=1
```
**预期响应：**

```bash
+CMGR: "REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! OK
```
**解释：**

- `REC UNREAD`：消息标记为未读。
- `+1234567890`：发送者的电话号码。
- Hello, this is a test message!：消息内容。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rec_massages.PNG" 
    style={{ width: 600}} 
  />
</div>

## 使用 Minicom 在 Raspberry Pi 上接收短信

假设您已经正确安装了驱动程序并启动了模块。如果尚未完成，请参考[此指南](https://wiki.seeedstudio.com/cn/getting_started_raspberry_pi_4g_lte_hat/#raspberry-pi)。

## 第 1 步：打开 Minicom

```bash
sudo minicom -D /dev/ttyUSB2
```

## 第 2 步：按照表格中的指令操作

| **步骤** | **指令**             | **响应详情**                                                                                                                                                        | **目的/解释**                                                                                                                                                     |
|----------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1**    | `ATE`                | `OK`                                                                                                                                                                 | 启用回显功能，以便在终端中查看输入的指令。                                                                                                                        |
| **2**    | `AT+CMGF=1`          | `OK`                                                                                                                                                                 | 设置短信模式为文本模式，以便更轻松地处理短信。                                                                                                                    |
| **3**    | `AT+CPMS?`           | `+CPMS: "SR",0,5,"MT",19,255,"MT",19,255 OK`                                                                                                                         | 检查当前消息存储。`"SR"`：状态报告存储。`"MT"`（移动终端）：包含存储在 SIM 卡和模块中的消息。                                                                      |
| **4**    | `AT+CPMS="MT"`       | `+CPMS: 19,255,19,255,19,255 OK`                                                                                                                                     | 切换消息存储到 `"MT"`（移动终端）。`19,255`：表示当前存储了 19 条消息，存储容量为 255 条。                                                                         |
| **5**    | `AT+CMGL="ALL"`      | `+CMGL: 1,"REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! +CMGL: 2,"REC READ","+9876543210","","20/12/05,10:45:12+32" Another test message! OK` | 检索存储在选定存储器中的所有消息。`"REC UNREAD"`：未读消息。`+1234567890`：发送者的电话号码。                                                                     |
| **6**    | `AT+CMGR=1`          | `+CMGR: "REC UNREAD","+1234567890","","20/12/05,10:44:12+32" Hello, this is a test message! OK`                                                                      | 按索引读取特定消息（例如，`1`）。`"REC UNREAD"`：表示消息未读。`Hello, this is a test message!`：消息内容。                                                        |

## 资源

- **[网页]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[网页]** [AT 指令手册 V2.0](https://www.quectel.com/download/quectel_ec2xeg9xeg2x-gem05_series_at_commands_manual_v2-0-2/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>