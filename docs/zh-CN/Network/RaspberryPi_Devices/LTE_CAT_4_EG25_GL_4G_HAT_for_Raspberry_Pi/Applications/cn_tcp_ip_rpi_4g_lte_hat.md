---
description: 发掘 TCP 在 Raspberry Pi 4G HAT 上的强大功能。了解 TCP 如何确保可靠的数据交换，这对物联网应用、远程监控等至关重要。

title: Raspberry Pi 上的 4G LTE HAT - TCP/IP 网络详解
keywords:
  - Raspberry Pi HAT
  - 入门指南
  - 工业物联网 (IIoT)
  - 物联网 (IoT)
  - TCP/IP
  - 边缘计算
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp_python.webp
slug: /cn/tcp_ip_raspberry_pi_4g_lte_hat
last_update:
  date: 2024/12/20
  author: Kasun Thushara
---

## 简介

TCP（传输控制协议）对于使用 Raspberry Pi 4G HAT 的应用至关重要，因为它确保了通过互联网进行可靠、有序且经过错误检查的数据传输。这对于实时应用（如物联网设备）尤为重要，因为这些应用需要与云服务器或远程系统保持一致的通信。TCP 的可靠性使其非常适合发送关键数据（例如传感器读数、遥测数据）和接收命令，确保数据不会丢失或损坏。它支持多种应用，例如远程监控、消息系统和文件传输，Raspberry Pi 可以作为网关或客户端使用。

## 前置条件

### 硬件需求

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

### 软件需求

#### 通信驱动和工具

如果尚未安装相关驱动和通信工具，请先查看 [指南](https://wiki.seeedstudio.com/cn/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)。

### 其他需求

您需要一个预先配置的 TCP 服务器，具体信息如下：

- **主机**：例如，您自己的服务器，或者用于测试的公共服务器 tcpbin.com。
- **端口号**：一个专用端口号，在本例中，我们将使用 `tcpbin.com` 的端口 `4242`。

tcpbin.com 是一个公共 TCP 服务器，用于测试和调试 TCP/IP 通信。它会回显发送给它的消息，非常适合验证连接性和数据传输。

## 向 tcpbin.com 发送 AT 指令

在 Raspberry Pi 上打开 Minicom 或在 Windows 上通过 USB 打开 Qcom Tool。

```bash
sudo minicom -D /dev/ttyUSB2
```

步骤 | 操作                                              | AT 指令                       | 预期响应                              |
|------|-----------------------------------------------------------|---------------------------------------------|-----------------------------------------------|
| 1    | 配置移动网络提供商的 APN。        | `AT+QICSGP=1,1,"dialogbb","","",1`           | `OK`                                           |
| 2    | 激活 PDP 上下文。                | `AT+QIACT=1`                                 | `OK`                                           |
| 3    | 验证 PDP 上下文是否已激活。     | `AT+QIACT?`                                  | `+QIACT: 1,1,1,"<Your_IP_Address>"` `OK`  |
| 4    | 打开与服务器的 TCP 连接。     | `AT+QIOPEN=1,0,"TCP","tcpbin.com",4242,0,0`  | `+QIOPEN: 0,0` （表示连接成功） |
| 5    | 向服务器发送消息。            | `AT+QISEND=0`                                | `>` （提示输入消息） 输入消息后：`Hello TCPBin<Ctrl+Z>`  `SEND OK` |
| 6    | 读取服务器的响应。       | `AT+QIRD=0,1500`                             | `+QIRD: <length>`  `Hello TCPBin`  `OK` |
| 7    | 关闭 TCP 连接。                | `AT+QICLOSE=0`                               | `OK`                                           |


<div style={{ textAlign: 'center' }}>
  <img 
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp.PNG" 
    style={{ width: 500}} 
  />
</div>

## 自动化 Python 脚本

以下是一个自动化的 Python 脚本，用于在 Raspberry Pi 上与 Quectel 4G LTE 模块交互。该脚本使用 serial 库向模块发送 AT 指令。您可以自定义 APN、端口、波特率、TCP 端口和地址等变量。


## Python 代码实现 

### 第一步：准备目录和虚拟环境

- 在 Raspberry Pi 上打开终端。
- 创建一个新的项目文件夹并进入该文件夹：
```bash
mkdir TCP_EX
cd TCP_EX
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

### 第二步：准备 Python 脚本

- 打开 **Thonny Python IDE**（Raspberry Pi 上预装）。

- 在 Thonny 中创建一个新文件，并将提供的代码粘贴到编辑器中。

- 更新 usb_port 参数以匹配 Raspberry Pi 上 4G HAT 的串口。通常是 `/dev/ttyUSB2` 或 `/dev/ttyUSB3`。示例：

```bash
usb_port = "/dev/ttyUSB2"
```
- 将文件保存为 test_mqtt.py，保存在 **TCP_EX** 文件夹中。

```bash 
import serial
import time

# 配置变量
APN = "dialogbb"  # 替换为您的网络 APN
PORT = "/dev/ttyUSB2"  # 连接到 Quectel 模块的串口
BAUDRATE = 9600  # 通信波特率
TCP_ADDRESS = "tcpbin.com"  # TCP 服务器地址
TCP_PORT = 4242  # TCP 服务器端口
MESSAGE = "Hello TCPBin"  # 要发送的消息


def send_command(ser, command, wait_for="OK", timeout=5):
    """
    向模块发送 AT 指令并等待响应。
    """
    ser.write((command + "\r\n").encode())
    time.sleep(0.5)
    end_time = time.time() + timeout
    response = b""
    while time.time() < end_time:
        if ser.in_waiting > 0:
            response += ser.read(ser.in_waiting)
            if wait_for.encode() in response:
                break
    print(f">> {command}")
    print(response.decode().strip())
    return response.decode().strip()


def main():
    try:
        # 打开串口连接
        ser = serial.Serial(PORT, BAUDRATE, timeout=1)
        time.sleep(2)  # 允许模块初始化

        # 1. 配置 APN
        send_command(ser, f'AT+QICSGP=1,1,"{APN}","","",1')

        # 2. 激活 PDP 上下文
        send_command(ser, "AT+QIACT=1")

        # 3. 检查 PDP 上下文状态
        send_command(ser, "AT+QIACT?")

        # 4. 打开 TCP 连接
        send_command(ser, f'AT+QIOPEN=1,0,"TCP","{TCP_ADDRESS}",{TCP_PORT},0,0')
        time.sleep(5)  # 允许连接建立

        # 5. 发送数据
        send_command(ser, f"AT+QISEND=0")
        ser.write((MESSAGE + "\x1A").encode())  # 发送消息并以 Ctrl+Z 结束
        time.sleep(1)  # 允许发送时间
        print("消息已发送。")

        # 6. 读取响应
        response = send_command(ser, "AT+QIRD=0,1500")
        print(f"服务器响应: {response}")

        # 7. 关闭连接
        send_command(ser, "AT+QICLOSE=0")
        print("连接已关闭。")

        # 关闭串口
        ser.close()

    except Exception as e:
        print(f"错误: {e}")


if __name__ == "__main__":
    main()


```

### 第三步：运行脚本

- 打开终端，确保您位于项目目录中：
```bash
cd TCP_EX
```

- 激活虚拟环境：

```bash
source env/bin/activate
```

- 使用 Python 运行脚本：
```bash
python test_tcp.py
```
- 输出结果 
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/tcp_python.PNG" style={{width:600}}/></div>

## 资源

- **[PDF 书籍]** [TCP 应用指南](https://www.quectel.com/download/quectel_ec2xeg2xeg9xem05_series_tcpip_application_note_v1-3/ )

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>