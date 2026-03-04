---
description: 了解如何通过 Raspberry Pi 的 4G LTE HAT 和 MQTT 协议实现高效、实时的 IoT 和 IIoT 应用通信。使用 AT 命令简化远程连接，实现可扩展的高速数据传输和远程管理。
title: 使用 MQTT 设置 IIoT 的 4G LTE 连接
keywords:
  - Raspberry Pi Hat
  - 入门指南
  - IIoT
  - IoT
  - MQTT
  - 边缘计算
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_ex.webp
slug: /mqtt_raspberry_pi_4g_lte_hat
last_update:
  date: 2024/12/18
  author: Kasun Thushara
---

## 介绍

Raspberry Pi 的 4G LTE HAT 提供可靠的高速蜂窝连接，使其成为远程和工业物联网（IIoT）应用的关键组件。通过 MQTT 这一轻量级消息协议，设备即使在偏远地区也能高效地通过蜂窝网络进行通信。使用 AT 命令进行配置，简化了 IoT 设备连接到网络的过程。这种 4G LTE 和 MQTT 的结合增强了实时数据传输能力，从而实现了具有远程管理功能的可扩展 IIoT 解决方案。

## 前置条件

### 硬件要求

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

### 软件要求

#### 通信驱动和工具

如果尚未安装相关驱动和通信工具，请先查看[指南](https://wiki.seeedstudio.com/cn/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)。

#### Mosquitto Explorer

我们将使用 Mosquitto broker，具体来说是可用的测试 broker **https://test.mosquitto.org**，`无需用户名或密码`。为了方便起见，建议直接在您的 PC 上[安装 Mosquitto](https://mqtt-explorer.com/)进行测试。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_ex.PNG" 
    style={{ width: 500}} 
  />
</div>

## 使用 AT 指令连接到 MQTT Broker

**步骤 1: 配置接收模式**

```bash
AT+QMTCFG="recv/mode",0,0,1
```

**步骤 2: 为 MQTT 客户端打开网络**

```bash
AT+QMTOPEN=0,"test.mosquitto.org",1883
```

**步骤 3: 检查 MQTT 连接状态（可选）**

```bash
AT+QMTOPEN?
```

**步骤 4: 将客户端连接到 Mosquitto MQTT 服务器**

```bash
AT+QMTCONN=0,"clientExample"
```

:::note
请注意，客户端 ID 必须是唯一的，因此请确保生成一个高度唯一的 ID。Mosquitto 的公共 Broker 不需要用户名或密码即可访问。
:::

**步骤 5: 向主题发布消息**

```bash
AT+QMTPUBEX=0,0,0,0,"test/topic",30 
```

:::note
当出现 `>` 时，输入消息并按下 Ctrl+Z。
:::

```bash
> This is test data, hello MQTT.
```

打开 Mosquitto Explorer 并输入您发布到的主题。您将在那里看到更新。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_pub.PNG" 
    style={{ width: 500}} 
  />
</div>

**步骤 6: 订阅一个主题**

```bash
AT+QMTSUB=0,1,"test/topic",2
```

打开 Mosquitto Explorer，输入您希望从 4G 模块发布到的主题和消息。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_sub_2.PNG" 
    style={{ width: 500}} 
  />
</div>

然后，您将在 4G 模块端成功订阅到已发布的消息。

<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_sub_1.PNG" 
    style={{ width: 500}} 
  />
</div>

**步骤 7: 取消订阅一个主题**

```bash
AT+QMTUNS=0,2,"test/topic"
```

**步骤 8: 断开客户端与 MQTT 服务器的连接**

```bash
AT+QMTDISC=0
```

## Python 代码实现

### 步骤 1. 准备目录和虚拟环境

- 在您的 Raspberry Pi 上打开终端。
- 创建一个新的项目文件夹并进入该文件夹：
```bash
mkdir mqtt_EX
cd mqtt_EX
```

- 设置 Python 虚拟环境：
```bash
python3 -m venv --system-site-packages env
```

- 激活虚拟环境：

```bash
source env/bin/activate
```

- 安装所需的库：

```bash
pip install pyserial 
```

### 步骤 2. 准备 Python 脚本

- 打开 **Thonny Python IDE**（Raspberry Pi 上预装）。

- 在 Thonny 中创建一个新文件，并将提供的代码粘贴到编辑器中。

- 更新 `usb_port` 参数以匹配您的 Raspberry Pi 上 4G HAT 的串口。通常，它可能是 `/dev/ttyUSB2` 或 `/dev/ttyUSB3`。示例：

```bash
usb_port = "/dev/ttyUSB2"
```

- 将文件保存为 **test_mqtt.py**，存放在 **mqtt_EX** 文件夹中。

```python
import serial
import time

# 串口配置
SERIAL_PORT = '/dev/ttyUSB2'  # 根据您的设置调整
BAUD_RATE = 9600


def send_at_command(ser, command, delay=1):
    """
    向 Quectel 模块发送 AT 指令并等待响应。
    """
    ser.write((command + '\r\n').encode())
    time.sleep(delay)
    response = ser.read_all().decode()
    print(f"Command: {command}\nResponse: {response}")
    return response


def main():
    # 打开串口连接
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=5)
    if not ser.is_open:
        ser.open()

    try:
        # 配置 MQTT 接收模式
        send_at_command(ser, 'AT+QMTCFG="recv/mode",0,0,1')

        # 打开 MQTT 连接
        send_at_command(ser, 'AT+QMTOPEN=0,"test.mosquitto.org",1883')
        send_at_command(ser, 'AT+QMTOPEN?')  # 检查连接状态

        # 连接到 MQTT Broker
        send_at_command(ser, 'AT+QMTCONN=0,"clientExample"')

        # 订阅主题
        send_at_command(ser, 'AT+QMTSUB=0,1,"test/topic_subscribe",2')

        print("正在发布和订阅。按 Ctrl+C 停止。")

        while True:
            try:
                # 发布消息
                send_at_command(ser, 'AT+QMTPUBEX=0,0,0,0,"test/topic_publish",30')
                send_at_command(ser, 'This is test data, hello MQTT.', delay=0.5)

                # 读取订阅的消息
                print("检查订阅主题的消息...")
                incoming = ser.read_all().decode()
                if incoming:
                    print(f"收到: {incoming}")

                # 操作间的延迟
                time.sleep(2)
            except KeyboardInterrupt:
                print("退出循环...")
                break

        # 取消订阅主题
        send_at_command(ser, 'AT+QMTUNS=0,2,"test/topic_subscribe"')

        # 断开与 Broker 的连接
        send_at_command(ser, 'AT+QMTDISC=0')
    finally:
        # 关闭串口连接
        ser.close()


if __name__ == '__main__':
    main()
```

### 步骤 3. 运行脚本

- 打开终端，确保您在项目目录中：
```bash
cd mqtt_EX
```

- 激活虚拟环境：

```bash
source env/bin/activate
```

- 使用 Python 运行脚本：
```bash
python test_mqtt.py
```

- 输出结果：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mqtt_python.PNG" style={{width:800}}/></div>

## 资源

- **[PDF 书籍]** [《MQTT》应用指南](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_LTE_Standard_MQTT_Application_Note_V1.2.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>