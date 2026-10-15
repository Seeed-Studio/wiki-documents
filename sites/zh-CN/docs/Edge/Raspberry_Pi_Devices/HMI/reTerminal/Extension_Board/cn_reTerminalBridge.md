---
description: reTerminal E10-1
title: reTerminal E10-1
keywords:
  - Edge
  - reTerminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminalBridge
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2025-05-30'
updatedAt: '2026-02-27'
url: https://wiki.seeedstudio.com/cn/reTerminalBridge/
---

# **reTerminal E10-1 入门指南**

### **所需材料**

| reTerminal | reTerminal E10-1 |
|--------------|--------------|
|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" /></div>|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" /></div>
|[**立即购买**](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)|[**立即购买**](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html)|

### **前期准备**

#### **连接**

注意方向，将 reTerminal 放置在 reTerminal E10-1 上，并用力使它们紧密贴合。如果此时 reTerminal E10-1 已经上电，reTerminal 将会被唤醒并启动进入系统。如果你想进一步了解 reTerminal，请点击 [**reTerminal**](https://wiki.seeedstudio.com/cn/reTerminal/)。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image3.png"/></div>

#### **安装与拆卸**

在使用 reTerminal E10-1 的过程中，可能需要拆下外壳以添加外设。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image002.png"/></div>

#### **驱动安装**

如果希望 reTerminal 使用 reTerminal E10-1 的功能，需要在开始之前为 reTerminal 安装驱动。请在 reTerminal 的终端窗口中按照以下命令操作。

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
cd seeed-linux-dtoverlays
sudo ./scripts/reTerminal.sh
```

:::note
对于 **32bit OS**，在执行 `sudo ./scripts/reTerminal.sh` 之前，你需要增加以下步骤

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

:::

安装完成后，请重启设备。然后使用以下命令检查 `reTerminal-bridge.dtbo` 文件是否存在，以确保驱动安装完成。

```sh
ls /boot/overlays/reTerminal-bridge.dtbo
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image1.jpg"/></div>

#### **安装库文件**

安装 python3 库。

```sh
sudo apt-get update
sudo apt-get install python3-pip
sudo pip3 install RPi.GPIO
sudo apt-get install python3-serial
```

安装 git 库。

```sh
sudo apt install -y git
```

### **电源供电**

有以下三种供电方式：

- DC Jack
- PoE
- UPS -18650 电池

本设备使用的电池为 NCR18650B 可充电锂离子电池。请注意包装中不含电池，但该电池在普通便利店即可购买，需用户自行准备。我们推荐使用 Panasonic NCR18650B 3.6V 3400mAh。

#### **DC Jack**

为 reTerminal、扩展板和电池提供 DC 12V @4A 的电源。

#### **PoE**

PoE 电源输入为 RJ45 接口，支持最大 25W 的电源输入。

#### **UPS -18650 电池**

2 个带固定针脚的电池座。

### **风扇**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- 风扇（已包含） x1

为了在高负载下保持 reTerminal 和 reTerminal E10-1 处于正常温度水平，reTerminal E10-1 内部配备了一个 3-Pin 风扇。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image29.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image031.jpg"/></div>

本示例介绍如何在 reTerminal E10-1 上控制风扇。

**步骤 1.** 我们可以通过以下命令直接控制风扇的开关。

```sh
#Toggle fan on
raspi-gpio set 23 op pn dh

#Toggle fan off
raspi-gpio set 23 op pn dl
```

**步骤 2.** 我们也可以通过检测 CPU 的温度来启用和禁用风扇。请按照以下步骤下载并运行程序。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_Fan_control.git
cd Seeed_reTerminal_Bridge_Fan_control/
sudo python3 fan.py
```

下面是 **fan.py** 代码供参考。

```python
import sys 
import time
try:
 import RPi.GPIO as GPIO 
except RuntimeError:
 print("Error importting Rpi.GPIO")

MAX_TEMP = 40.0
MIN_TEMP = 20.0

def cpu_temp():
 f = open("/sys/class/thermal/thermal_zone0/temp",'r') 
 return float(f.read())/1000

def main():
 channel = 23
 GPIO.setmode(GPIO.BCM)

 # init 23 off
 GPIO.setup(channel,GPIO.OUT,initial=GPIO.LOW)
 is_close = True
 while 1:
  temp = cpu_temp()
  if is_close:
   if temp > MAX_TEMP:
    GPIO.output(channel,GPIO.HIGH)
    is_close = False
  else:
   if temp < MIN_TEMP:
    GPIO.output(channel,GPIO.LOW)
    is_close = True
  time.sleep(2.0)
  GPIO.setwarnings(False) 

if __name__ == '__main__':
 main() 
```

代码成功运行后，当检测到 CPU 温度高于 40°C 时，风扇将被打开；当温度低于 20°C 时，风扇将被关闭。

### **CAN 通信**

控制器局域网（CAN）是一种健壮的车载总线标准，旨在使微控制器和设备在没有主机计算机的情况下彼此应用间进行通信。

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x2
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x2
- 公对公线缆 x2

本示例介绍如何在 reTerminal E10-1 上使用 CAN。

**步骤 1.** 使用公对公线缆通过 CAN 接口连接两个 reTerminal E10-1。

H -> H
L -> L
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/can.jpg"/></div>

**步骤 2.** 分别为两个 reTerminal 安装 **CAN-utils**。

```sh
sudo apt install can-utils
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg"/></div>

CAN-utils 是一组使用 CAN 接口的非常有用的调试工具。它包含以下应用：

- candump – 转储 CAN 数据包 – 显示、过滤并记录到磁盘。
- canplayer – 回放 CAN 日志文件。
- cansend – 发送单帧。
- cangen – 生成随机流量。
- canbusload – 显示当前 CAN 总线利用率。

CAN-utils 源码可以从 [GitHub 仓库](https://github.com/linux-can/can-utils) 获取。

**步骤 3.** 为两个 reTerminal 添加配置信息。使用编辑器打开 **/boot/config.txt** 文件，在末尾添加 `dtoverlay=seeed-can-fd-hat-v2` 后保存，然后重启 reTerminal。

:::note
如果 “hat” 上没有指定硬件的 ID EEPROM，Linux 内核将不会自动发现 SPI 接口上的 CAN 控制器。要加载相应的驱动程序，必须在启动时指定设备树 overlay 设置。
:::

```sh
sudo nano /boot/config.txt
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image5.jpg"/></div>

**步骤 4.** CAN 接口的行为与网络接口类似。你可以使用 ```ifconfig -a```（接口配置）获取各种统计信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image6.jpg"/></div>

使用命令 `cangen can0 -v` 发送随机数据，以测试 CAN 通信是否正常。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image7.jpg"/></div>

**步骤 5.** 你可以使用以下命令手动启用 CAN 接口：

```sh
sudo ip link set can0 up type can bitrate 500000
```

**步骤 6.** 将[代码](https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple)下载到 reTerminal。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple
```

其中一个 reTerminal 编译并运行发送数据的代码。

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit
```

下面是 **cantransmit.c** 代码供参考。

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s; 
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 frame.can_id = 0x555;
 frame.can_dlc = 5;
 sprintf(frame.data, "Hello");

 if (write(s, &frame, sizeof(struct can_frame)) != sizeof(struct can_frame)) {
  perror("Write");
  return 1;
 }

 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

另一个 reTerminal 编译并运行接收数据的代码。

```sh
gcc canreceive.c -o canreceive
```

下面是 **canreceive.c** 代码供参考。

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s, i; 
 int nbytes;
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Receive Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 nbytes = read(s, &frame, sizeof(struct can_frame));

  if (nbytes < 0) {
  perror("Read");
  return 1;
 }

 printf("0x%03X [%d] ",frame.can_id, frame.can_dlc);

 for (i = 0; i < frame.can_dlc; i++)
  printf("%02X ",frame.data[i]);

 printf("\r\n");

 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

你可以看到两个 reTerminal 已通过 CAN 接口成功发送和接收数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg"/></div>

除了读取之外，你可能还希望过滤掉与自己无关的 CAN 帧。这是在驱动程序层面完成的，比在用户模式应用中逐帧读取更高效。

```sh
gcc canfilter.c -o canfilter
```

下面是 **canfilter.c** 代码，供参考。

```c

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <net/if.h>
#include <sys/ioctl.h>
#include <sys/socket.h>

#include <linux/can.h>
#include <linux/can/raw.h>

int main(int argc, char **argv)
{
 int s, i; 
 int nbytes;
 struct sockaddr_can addr;
 struct ifreq ifr;
 struct can_frame frame;

 printf("CAN Sockets Receive Filter Demo\r\n");

 if ((s = socket(PF_CAN, SOCK_RAW, CAN_RAW)) < 0) {
  perror("Socket");
  return 1;
 }

 strcpy(ifr.ifr_name, "can0" );
 ioctl(s, SIOCGIFINDEX, &ifr);

 memset(&addr, 0, sizeof(addr));
 addr.can_family = AF_CAN;
 addr.can_ifindex = ifr.ifr_ifindex;

 if (bind(s, (struct sockaddr *)&addr, sizeof(addr)) < 0) {
  perror("Bind");
  return 1;
 }

 /*
 To set up a filter, initialise a single can_filter structure or array of 
 structures and populate the can_id and can_mask. The call setsockopt():
 */
 struct can_filter rfilter[1];

 rfilter[0].can_id   = 0x550;
 rfilter[0].can_mask = 0xFF0;
 //rfilter[1].can_id   = 0x200;
 //rfilter[1].can_mask = 0x700;

 setsockopt(s, SOL_CAN_RAW, CAN_RAW_FILTER, &rfilter, sizeof(rfilter));

 nbytes = read(s, &frame, sizeof(struct can_frame));

 if (nbytes < 0) {
  perror("Read");
  return 1;
 }

 printf("0x%03X [%d] ",frame.can_id, frame.can_dlc);

 for (i = 0; i < frame.can_dlc; i++)
  printf("%02X ",frame.data[i]);

 printf("\r\n");

 // And finally, if there is no further need for the socket, close it:
 if (close(s) < 0) {
  perror("Close");
  return 1;
 }

 return 0;
}
```

:::note
大多数 CAN 控制器在芯片（硬件）中都集成了接收滤波器和掩码。不幸的是，当前架构在内核中执行过滤，虽然不算最优，但仍然比将所有帧都传递到用户模式应用要好。
:::

### **RS485 通信**

RS485，也称为 TIA-485(-A) 或 EIA-485，是一个定义串行通信系统中驱动器和接收器电气特性的标准。其电气信号为平衡式，并支持多点系统。实现该标准的数字通信网络可以在长距离和电气噪声环境中有效使用。多个接收器可以以线性、多点总线的方式连接到这样的网络中。

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS485 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) 和线缆

本示例介绍如何在 reTerminal E10-1 上使用 RS485。

**步骤 1.** 由于 RS485 功能使用 ttyS0，在开始之前需要先关闭 ttyS0 的系统交互功能。

```sh
sudo raspi-config
```

依次选择 **Interface Options**、**Serial port**。

在下一个界面中，会提示你是否要通过串口访问登录 shell，选择 **No**。

然后在 “Do you want to use serial port hardware” 中，确保选择 **Yes**。

reTerminal 完成更改后，你会在屏幕上看到如下文字。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**步骤 2.** 使用线缆通过 RS485 接口将 reTerminal E10-1 与电脑连接。

A -> A
B -> B
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs485.jpg"/></div>

**步骤 3.** 使用命令 `dmesg | grep tty` 查看串口名称，确定与电脑进行 RS485 通信的串口名称。该名称可能因电脑而异，一般为 **ttyS0**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image10.png"/></div>

**步骤 4.** 将[代码](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple)下载到 reTerminal。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple
cd Seeed_reTerminal_Bridge_RS485_exmaple/
```

在电脑上打开串口软件。执行命令 `sudo python3 rs485.py`，即可得到如下效果。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image11.png"/></div>

同时，你也可以在接收到消息后的 5 秒内，通过串口助手向 reTerminal 发送 16 字节数据。

下面是 **rs485.py** 代码，供参考。

```c
import serial, time
try:
    import RPi.GPIO as GPIO
except RuntimeError:
    print("Error importting Rpi.GPIO")

GPIO.setmode(GPIO.BCM)

ser = serial.Serial()
ser.port = "/dev/ttyS0"
channel1 = 25
channel2 = 17

#9600,N,8,1
ser.baudrate = 9600
ser.bytesize = serial.EIGHTBITS    #number of bits per bytes
ser.parity = serial.PARITY_NONE    #set parity check
ser.stopbits = serial.STOPBITS_ONE #number of stop bits

ser.timeout = 0.5                  #non-block read 0.5s
ser.writeTimeout = 0.5             #timeout for write 0.5s
ser.xonxoff = False                #disable software flow control
ser.rtscts = False                 #disable hardware (RTS/CTS) flow control
ser.dsrdtr = False                 #disable hardware (DSR/DTR) flow control

GPIO.setup(channel1,GPIO.OUT,initial=GPIO.LOW)
GPIO.setup(channel2,GPIO.OUT,initial=GPIO.LOW)

try:
    ser.open()
except Exception as ex:
    print ("open serial port error " + str(ex))
    exit()

if ser.isOpen():
    try:
        ser.flushInput() #flush input buffer
        ser.flushOutput() #flush output buffer
        GPIO.output(channel1,GPIO.HIGH)
        GPIO.output(channel2,GPIO.HIGH)
        time.sleep(0.1)
        #write data
        ser.write("rs485 communication is on, you can try to send data...\n".encode())
        print("Sent successfully\n")
        GPIO.output(channel2,GPIO.LOW)
        time.sleep(5)  #wait 5s
        #read data
        response = ser.read(16)
        print("read 16 byte data:")
        print(response)
        ser.close()
    except Exception as e1:
        print ("communicating error " + str(e1))
else:
    print ("open serial port error")
```

### **RS232 通信**

RS-232（推荐标准 232）是最初于 1960 年推出的用于串行通信数据传输的标准。它正式定义了 DTE 与 DCE 之间连接的信号。与后来的 RS-422、RS-485 和以太网等接口相比，RS-232 具有更低的传输速率、更短的最大线缆长度、更大的电压摆幅、更大的标准连接器、不支持多点能力且多路分支能力有限。

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS232 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) 和线缆

本示例介绍如何在 reTerminal E10-1 上使用 RS232。

**步骤 1.** 由于 RS485 功能使用 ttyS0，在开始之前需要先关闭 ttyS0 的系统交互功能。

```sh
sudo raspi-config
```

依次选择 **Interface Options**、**Serial port**。

在下一个界面中，会提示你是否要通过串口访问登录 shell，选择 **No**。

然后在 “Do you want to use serial port hardware” 中，确保选择 **Yes**。

reTerminal 完成更改后，你会在屏幕上看到如下文字。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**步骤 2.** 使用线缆通过 RS232 接口将 reTerminal E10-1 与电脑连接。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs232.jpg"/></div>

**步骤 3.** 使用命令 `dmesg | grep tty` 查看串口名称，确定与电脑进行 RS232 通信的串口名称。该名称可能因电脑而异，一般为 **ttyS0**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image12.jpg"/></div>

**步骤 4.** 将[代码](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple)下载到 reTerminal。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS232_exmaple
cd Seeed_reTerminal_Bridge_RS232_exmaple/
```

其中一个 reTerminal 编译并运行发送数据的代码。

```sh
sudo python3 rs232_send.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image13.jpg"/></div>

下面是 **rs232_send.py** 代码，供参考。

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',              # Please modify here according to the serial port name displayed by reTerminal
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
counter=0
try:
        print("rs232 starts now!\n")
        ser.write("rs232 starts now!\n".encode())
        while 1:
                ser.write(("Write counter:{}\n".format(counter)).encode())
                time.sleep(1)
                counter += 1
except KeyboardInterrupt:
    exit()
```

另一个 reTerminal 编译并运行接收数据的代码。

```sh
sudo python3 rs232_receive.py
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image14.jpg"/></div>

这里提供 **rs232_receive.py** 代码供参考。

```python
#!/usr/bin/env python
import time
import serial

ser = serial.Serial(
        port='/dev/ttyS0',
        baudrate = 9600,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        bytesize=serial.EIGHTBITS,
        timeout=1
)
try:
    print("Start receiving data now!\n")
    while 1:
            x=ser.readline()
            if x != b'':
                print(x)
except KeyboardInterrupt:
        exit()
```

### **以太网**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

本示例介绍如何在 reTerminal E10-1 上测试以太网连接。

**步骤 1.** 为 reTerminal 和电脑下载 **iperf3**。

```sh
git clone https://github.com/esnet/iperf.git
```

**步骤 2.** 使用以下代码安装 **iperf3**

```
cd iperf
sudo ./configure
sudo make
sudo make install
```

**步骤 3.** 将 reTerminal 作为服务器使用。

```sh
iperf3 -s
```

使用电脑测试连接到 reTerminal 的网络速度。此时，请保持电脑和 reTerminal 处于同一局域网内。

```sh
iperf3 -c 192.168.xxx.xxx
```

*上面的地址 "192.168.xxx.xxx" 是 reTerminal 的地址。*

例如，在我的设置中 reTerminal 的 ip 地址是 ```192.168.31.187```：

```sh
iperf3 -c 192.168.31.187
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image17.jpg"/></div>

如果你需要完成更多网络测试功能，可以参考 [iperf](https://github.com/esnet/iperf) 项目网站上的查询参数用法。

### **WM1302 (USB/SPI) LoRaWAN 网关**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [WM1302 LoRaWAN Gateway Module (USB/SPI) US/EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html) x1

USB 和 SPI 模组之间的区别如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa.png"/></div>

本示例介绍如何在 reTerminal E10-1 上使用 WM1302 LoRaWAN 网关。

**步骤 1.** 将 WM1302 模组安装到 reTerminal E10-1 上，然后用螺丝固定。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image18.jpg"/></div>

然后将风扇旁边的拨码开关拨到 PCIE。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**步骤 2.** 在命令行中输入 `sudo raspi-config` 打开 Rasberry Pi Software Configuration Tool：

- 选择 Interface Options
- 选择 SPI，然后选择 **Yes** 启用它
- 选择 I2C，然后选择 **Yes** 启用它
- 选择 Serial Port，然后在 "Would you like a login shell..." 选择 **No**，在 "Would you like the serial port hardware..." 选择 **Yes**

完成后，请重启 Raspberry Pi 以确保这些设置生效。

**步骤 3.** 将 [WM1302 code](https://github.com/Lora-net/sx1302_hal) 下载到 reTerminal 并进行编译。

```sh
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**步骤 4.** 配置复位脚本。首先使用命令将文件下载到 **sx1302_hal/packet_forwarder**

```
cd sx1302_hal/packet_forwarder
wget https://files.seeedstudio.com/wiki/reTerminal_Bridge/reset_lgw.sh
```

然后根据你的 WM1302 版本运行以下代码进行测试。

```sh
USB version
$ cd packet_forwarder
$ sudo nano reset_lgw.sh
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPI version
$ cd packet_forwarder
$ sudo nano reset_lgw.sh
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image20.jpg"/></div>

**步骤 5.** 在 [TTN website](https://www.thethingsnetwork.org/) 注册并登录你的账号。如果你还没有账号，请注册。然后进入 Gateway 界面并点击 "Get Starting"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa1.png"/></div>

选择你的区域。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa2.png"/></div>

选择 "Go to gateways"

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa3.png"/></div>

点击 **Add gateway** 添加设备：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image22.jpg"/></div>

其中，**Gateway EUI** 的值会在 **步骤 4** 运行测试时显示在日志中。Lora options 中的 Frequency plan（以欧洲版本为例）选择 **Europe 863-870 MHz (SF9 for RX2 - recommended)**。然后点击 **Create gateway**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image23.jpg"/></div>

**步骤 6.**（以欧洲版本为例）
如果是 SPI 版本，在 **sx1302_hal/packet_forwarder** 中编辑 **global_conf.json.sx1250.EU868**。

如果是 USB 版本，在 **sx1302_hal/packet_forwarder** 中编辑 **global_conf.json.sx1250.EU868.USB**。

在对应文件中搜索 **gateway_conf**。

- 然后将后面的 **gateway_ID** 修改为网页中填写的 **Gateway EUI**。

- 将 **server_address** 修改为网页中的 **Gateway Server address**。

- 将 **serv_port_up** 和 **serv_port_up** 都修改为 **1700**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image24.jpg"/></div>

**步骤 7.** 再次运行 **步骤 4** 中的命令，随后你可以在网页上看到设备的连接信息。

```sh
USB version
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

```sh
SPI version
$ ./lora_pkt_fwd -c global_conf.json.sx1250.EU868
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image25.jpg"/></div>

:::note
以上教程基于欧洲版本的 WM1302。如果你使用的是美国版本的 WM1302，步骤大体相同，但教程中需要修改和运行的文件会有所不同。文件名请参考你购买的版本以及[以下页面](https://github.com/Lora-net/sx1302_hal/tree/master/packet_forwarder)。
:::

### **硬盘扩展**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- M.2 B key Connector x1

本示例介绍如何在 reTerminal E10-1 上安装并检查硬盘运行情况。

**步骤 1.** 打开 reTerminal E10-1 的后盖，将 M.2 SSD 插入 Mini-PCIe Connector 并用螺丝固定。合上后盖，连接 reTerminal 并上电。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/040.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image26.jpg"/></div>

然后将风扇旁边的拨码开关拨到 M.2。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/046.jpg"/></div>

**步骤 2.** 输入命令查看是否检测到 SSD 存储设备。

```sh
sudo fdisk -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/025.png"/></div>

**步骤 3.** 我们也可以使用 dd 命令测试硬盘的读写速度。

```sh
Read
$ sudo dd if=/dev/sda3 of=/dev/null bs=512k count=500
```

```sh
Write
$ sudo dd if=/dev/zero of=/dev/sda3 bs=512k count=500
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/28.jpg"/></div>

:::note
请确保你使用的是 M.2 B key。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/add_pic_1.png"/></div>
:::

#### 格式化硬盘

:::caution
下面的步骤会清除你连接到 reTerminal E10-1 的 SSD 上的所有数据，如果你选择了错误的磁盘介质也会被清除，所以请务必仔细按照以下步骤操作，并确保你理解每一步的目的。
:::

- **使用的软件工具**：```lsblk```、```fdisk```、```mkfs```、```mount```、```umount```

**步骤 1.** 找到你的 SSD 设备名称
当你已经将 SSD 安装在 reTerminal E10-1 中并连接到 reTerminal 后，系统上电启动完成，打开终端，然后输入以下命令：

```sh
lsblk
```

你应该会看到类似如下的内容：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsblk.png"/></div>

**步骤 2.** 使用 fdisk 给 SSD 分区

:::caution
完成此步骤后，你连接到 reTerminal E10-1 的 SSD 上的数据将会丢失。
:::

按照上面的步骤，在终端中输入以下命令，注意 /dev/**sdX**，其中 **X** 是你选择要格式化的 **SSD 设备名称**，请确保没有其他 USB 盘连接到 reTerminal，除非你非常确认设备名称是正确的。

```sh
sudo fdisk /dev/sdX
```

例如，在我的情况下：

```sh
sudo fdisk /dev/sda
```

你应该会看到类似如下所示的内容：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk.png"/></div>

在 fdisk 提示符下：

```bash
Welcome to fdisk (util-linux 2.36.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help):
```

首先输入 **```d```** 来删除 SSD 设备上的分区。

然后输入 **```n```** 来在 SSD 设备上创建新分区。

之后你应该会看到如下信息：

```sh
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
```

输入 **```p```** 来创建主分区，然后输入 **```1```**。

接着在 First sector 这里，你可以按 **ENTER** 使用默认值（即从磁盘起始扇区开始），或者你也可以指定在 SSD 上的具体扇区位置作为分区 1 的起始位置。就我而言，我只是按了 Enter 使用默认值。

然后选择分区 1 的最后一个扇区，如果你想让分区 1 使用整个磁盘空间，只需按 **ENTER**，或者你也可以输入具体的扇区位置作为分区 1 的结束位置，这也就决定了你正在创建的分区 1 的存储大小。

然后按 **```Y```** 来移除签名。

接着输入 **```w```** 来写入更改并退出 fdisk 提示符。

下面是该过程的一个示例：
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk_sample.png"/></div>

**步骤 3.** 将您的 SSD 分区格式化为 ext4 格式
现在您应该为您的 SSD 创建分区，您需要将分区格式化为 ext4 格式以便挂载和使用它。通过使用 mkfs.ext4 来执行此操作：

```bash
sudo mkfs.ext4 /dev/sdXX
```

同样地，这里的 ```sdXX``` 是你的 SSD 的设备名，就我而言，我使用 ```/dev/sda1```，如下所示：

```bash
sudo mkfs.ext4 /dev/sda1
```

在 ```Proceed anyway? (y,N)``` 这里输入 **```y```** 并按下 **```ENTER```**，然后等待几秒钟直到过程完成。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mkfs.png"/></div>

**步骤 4.** 挂载分区
现在您可以挂载 SSD 作为外部磁盘用于额外存储。

```bash
sudo mkdir /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"

sudo mount /dev/sdXX /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"
```

其中 **"YOUR USER NAME"** 是你 reTerminal 系统的用户名，**"THE NAME YOU WANT TO MOUNT THE DRIVE"** 是你为挂载该磁盘所创建的名称，**/dev/sdXX** 是你想要挂载的 SSD 分区的设备名。

例如在我的情况下：

```bash
sudo mkdir /media/seeed/SSD

sudo mount /dev/sda1 /media/seeed/SSD/
```

要检查 SSD 是否成功挂载，可以通过以下方式：

```bash
lsblk
```

你应该会看到与我类似的输出，其中 **```/dev/sda1```** 被挂载到 **```/media/seeed/SSD```**：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mount.png"/></div>

### **EC25-EUX 4G 模块**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- EC25-EUX 4G Module x1
- SIM 卡 x1

**步骤 1.** 打开 reTerminal E10-1 的后盖，然后将 EC25-EUX 和 SIM 卡安装到 reTerminal E10-1 上。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/041.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/042.jpg"/></div>

然后将风扇旁边的拨码开关拨到 PCIE。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**步骤 2.** 使用 ```lsusb``` 检查 EC25-EUX 是否被检测到

```
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

**步骤 3.** 安装串行通信工具 minicom。

```sh
sudo apt install minicom
```

**步骤 4.** 通过 minicom 连接 EC25-EUX 4G 模块。

```sh
sudo minicom -D /dev/ttyUSB2 -b 1152008n1
```

串口连接打开后，输入 AT 并按下 'Enter'，你应该会看到 OK。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**步骤 5.** 启用 4G 模块连接到 4G 网络

请将已开通 4G 功能的 SIM 卡插入位于锂电池座处的 SIM 卡槽，该卡槽支持 micro SIM 卡，因此如果你使用的是 nano SIM 卡，需要使用 micro SIM 卡转接卡转换为 micro SIM 卡。  

在同一个 minicom 串口窗口中请输入：

```sh
AT+QCFG="usbnet"
```

它会返回类似 ```+QCFG: "usbnet",0,``` 的内容，但我们需要将其设置为 1（ECM 模式），所以输入以下命令：

```sh
AT+QCFG="usbnet",1
```

然后输入以下命令强制调制解调器重启：

```sh
AT+CFUN=1,1
```

然后你可以重启，或者等待一段时间，让模块从你的运营商 SIM 卡获取网络。

你也可以使用 `ifconfig` 命令来查询 reTerminal 的网络状态。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### **音频**

为了满足不同用户的多媒体需求，reTermnal E10-1 内部安装了一个扬声器模块和两个麦克风模块，以实现播放声音和录音的需求。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/028.jpg"/></div>

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1

**步骤1.** 下载并安装驱动程序。

```sh
git clone https://github.com/Seeed-Projects/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
```

**步骤 2.** 添加配置项。将 `dtoverlay=seeed-2mic-voicecard` 添加到 `/boot/config.txt` 文件中。然后重启设备。

```sh
sudo sed -i '$s/$/\ndtoverlay=seeed-2mic-voicecard/'  /boot/config.txt
```

要检查你是否已经修改了 `/boot/config.txt`，可以使用 `nano` 文本编辑器打开该文件，并滚动到最后一行进行检查：

```bash
nano /boot/config.txt
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image35.jpg"/></div>

一旦它被添加到 `/boot/config.txt` 中，你现在就可以重启：

```bash
sudo reboot
```

等待重启完成后，使用 `arecord -l` 命令查看录音设备。

```bash
arecord -L
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/030.png"/></div>

如上图所示，**card 0 device 0** 就是我们需要用来录音的设备。

**步骤 3.** 根据上述信息，使用命令执行录音和保存操作。

```sh
arecord -Dhw:0,0 -d 10 -f cd -r 44100 -c 2 -t wav test.wav
```

:::note
**参数解析**

- **-D** 指定录音设备，0,0 表示 card 0 device 0，即 bcm2835-i2s-wm8960-hifi wm8960-hifi-0。
- **-d** 指定录音时长，单位为秒。
- **-f** 指定录音格式，只支持 cd、cdr、dat。
- **-r** 指定采样率，单位为 Hz。
- **-c** 指定声道数。
- **-t** 指定生成文件的格式。

:::

**步骤 4.** 检查播放设备。

```sh
aplay -l
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/031.png"/></div>

**步骤 5.** 调整合适的音量来播放声音。

```sh
sudo alsamixer
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image38.jpg"/></div>

```sh
sudo aplay -Dhw:0 test.wav
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image39.jpg"/></div>

## 常见问题（FAQ）

1. 兼容哪种类型的 18650 电池？

答：推荐使用 Panasonic NCR18650B 3.6V 3400mAh。

2. 电池是否需要自带过流/欠压/过压保护？

答：不需要，因为 reTerminal E10-1 具有电池保护电路。

3. 它使用的 CAN 和 RS485 控制器型号是什么？

答：

- 485 控制器：TP485E
- CAN 控制器：MCP2518FDT-E/QBB

4. 昨天安装了 E10，电池信息（电量）是否正确？即使我刚从充电器中取出电池，它仍显示为红色（0%）。

```
Kernel: 5.10.103-v8+ aarch64 bits: 64 Console: tty 0 Distro: Debian GNU/Linux 10
```

电量显示功能：尚未开发，但我们已经听到你的需求，并会安排开发此功能。

5. reTerminal 扩展板是否提供另一个（独立的）以太网端口 --> 这样我们就有两个以太网端口？

这两个端口可以同时使用，互不影响。

6. RS232 和 RS485 是否是独立/分开的（有些硬件中，你只能使用其中一个……）

你一次只能使用 RS232 或 RS485 其中之一。


## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品时尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
