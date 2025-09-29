---
description:   reTerminal E10-1
title:   reTerminal E10-1
keywords:
  - Edge
  - reTerminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminalBridge
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

# **reTerminal E10-1 入门指南**

### **所需材料**

| reTerminal | reTerminal E10-1 |
|--------------|--------------|
|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" /></div>|<div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" /></div>
|[**立即购买**](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)|[**立即购买**](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html)|

### **前期准备**

#### **连接**

注意方向，将 reTerminal 放置在 reTerminal E10-1 上，用力使它们紧密贴合。如果此时 reTerminal E10-1 已通电，reTerminal 将会唤醒并启动进入系统。如果您想了解更多关于 reTerminal 的信息，请点击 [**reTerminal**](https://wiki.seeedstudio.com/cn/reTerminal/)。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image3.png"/></div>

#### **安装和拆卸**

在使用 reTerminal E10-1 的过程中，可能需要拆卸其外壳以添加外围设备。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image002.png"/></div>

#### **驱动程序安装**

如果您希望 reTerminal 使用 reTerminal E10-1 的功能，需要在开始之前为 reTerminal 安装驱动程序。请在 reTerminal 的终端窗口中按照以下命令操作。

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
cd seeed-linux-dtoverlays
sudo ./scripts/reTerminal.sh
```

:::note
对于 **32 位操作系统**，您需要在执行 `sudo ./scripts/reTerminal.sh` 之前添加以下步骤

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

:::

安装完成后，请重启机器。然后使用以下命令检查 `reTerminal-bridge.dtbo` 文件是否存在，以确保驱动程序安装完成。

```sh
ls /boot/overlays/reTerminal-bridge.dtbo
```

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image1.jpg"/></div>

#### **安装库**

安装 python3 库。

```sh
sudo apt-get update
sudo apt-get install python3-pip
sudo pip3 install RPi.GPIO
sudo apt-get install python3-serial
```

Install the git library.

```sh
sudo apt install -y git
```

### **电源供应**

有三种供电方式，如下所示：

- DC 接口
- PoE
- UPS -18650 电池

此设备的电池是 NCR18650B 可充电锂离子电池。请注意包装中不包含电池，电池可在普通便利店购买，客户需要自行准备。我们推荐的是松下 NCR18650B 3.6V 3400mAh。

#### **DC 接口**

为 reTerminal、扩展板和电池提供 DC 12V @4A 电源

#### **PoE**

PoE 电源输入为 RJ45，支持最大 25W 功率输入。

#### **UPS -18650 电池**

2 个带固定引脚的电池座。

### **风扇**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- 风扇（已包含）x1

为了在重负载下保持 reTerminal 和 reTerminal E10-1 处于正常温度水平。reTerminal E10-1 内部有一个 3 针风扇。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image29.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image031.jpg"/></div>

此示例介绍如何控制 reTerminal E10-1 上的风扇。

**步骤 1.** 我们可以通过以下命令直接控制风扇开关。

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

以下是 **fan.py** 代码供参考。

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

代码运行成功后，当检测到CPU温度高于40°C时，风扇将开启。当温度低于20°C时，风扇将关闭。

### **CAN通信**

控制器局域网络（CAN）是一种强大的车辆总线标准，旨在允许微控制器和设备在没有主机的情况下相互通信应用程序。

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x2
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x2
- 公对公连接线 x2

本示例介绍如何在reTerminal E10-1上使用CAN。

**步骤1.** 使用公对公连接线通过CAN接口连接两个reTerminal E10-1。

H -> H
L -> L
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/can.jpg"/></div>

**步骤2.** 为两个reTerminal分别安装**CAN-utils**。

```sh
sudo apt install can-utils
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image4.jpg"/></div>

CAN-utils 是一个使用 CAN 接口的极其有用的调试工具集合。它包括以下应用程序：

- candump – 转储 CAN 数据包 – 显示、过滤并记录到磁盘。
- canplayer – 重放 CAN 日志文件。
- cansend – 发送单个帧。
- cangen – 生成随机流量。
- canbusload – 显示当前 CAN 总线利用率。

CAN-utils 源代码可以从 [GitHub 仓库](https://github.com/linux-can/can-utils) 获取。

**步骤 3.** 为两个 reTerminal 添加配置信息。使用编辑器打开 **/boot/config.txt** 文件，在末尾添加 `dtoverlay=seeed-can-fd-hat-v2` 后保存，然后重启 reTerminal。

:::note
由于 'hat' 上没有指定硬件的 ID EEPROM，Linux 内核不会自动发现 SPI 接口上的 CAN 控制器。要加载适当的驱动程序，您必须在启动时指定设备树覆盖设置。
:::

```sh
sudo nano /boot/config.txt
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image5.jpg"/></div>

**步骤 4.** CAN 接口的行为就像网络接口一样。您应该能够使用 ```ifconfig -a```（接口配置）获取各种统计信息。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image6.jpg"/></div>

使用命令 `cangen can0 -v` 发送随机数据来测试 CAN 通信是否正常工作。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image7.jpg"/></div>

**步骤 5.** 您可以手动启动 CAN 接口，使用：

```sh
sudo ip link set can0 up type can bitrate 500000
```

**步骤 6.** 将[代码](https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple)下载到reTerminal。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_CAN_exmaple
```

其中一个 reTerminal 编译并运行发送数据的代码。

```sh
cd Seeed_reTerminal_Bridge_CAN_exmaple/
gcc cantransmit.c -o cantransmit
```

以下是 **cantransmit.c** 代码供参考。

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

以下是 **canreceive.c** 代码供参考。

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

您可以看到两个 reTerminal 成功通过 CAN 接口发送和接收数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image8.jpg"/></div>

除了读取之外，您可能还想过滤掉不相关的 CAN 帧。这发生在驱动程序级别，这比在用户模式应用程序中读取每个帧更高效。

```sh
gcc canfilter.c -o canfilter
```

以下是 **canfilter.c** 代码供参考。

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
大多数CAN控制器在硅片（硬件）中都包含接收过滤器和掩码。不幸的是，当前架构在内核中执行过滤，虽然不是最优的，但仍然比将所有帧传递到用户模式应用程序要好。
:::

### **RS485  通信**

RS485，也称为TIA-485(-A)或EIA-485，是一个定义串行通信系统中驱动器和接收器电气特性的标准。电气信号是平衡的，并且支持多点系统。实现该标准的数字通信网络可以在长距离和电气噪声环境中有效使用。多个接收器可以连接到这样的网络中，形成线性、多点总线。

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS485 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) 和电缆

本示例介绍如何在reTerminal E10-1上使用RS485。

**步骤1.** 由于RS485功能使用ttyS0，因此在开始之前需要关闭ttyS0系统交互功能。

```sh
sudo raspi-config
```

依次选择 **Interface Options**、**Serial port**。

在下一个屏幕中，系统会询问您是否希望通过串口访问登录shell，选择 **No**。

然后在"Do you want to use serial port hardware"中，确保选择 **Yes**。

reTerminal 完成更改后，您将在屏幕上看到以下文本。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**步骤 2.** 使用电缆通过 RS485 接口将 reTerminal E10-1 连接到计算机。

A -> A
B -> B
GND -> GND

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs485.jpg"/></div>

**步骤 3.** 使用命令 `dmesg | grep tty` 查看串口名称。确定用于与计算机进行 RS485 通信的串口名称。这可能因计算机而异。通常情况下，它是 **ttyS0**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image10.png"/></div>

**步骤 4.** 将[代码](https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple)下载到 reTerminal。

```sh
git clone https://github.com/limengdu/Seeed_reTerminal_Bridge_RS485_exmaple
cd Seeed_reTerminal_Bridge_RS485_exmaple/
```

在计算机上打开串口软件。执行命令 `sudo python3 rs485.py` 以获得以下效果。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image11.png"/></div>

同时，您也可以在收到消息后的5秒内通过串口助手向reTerminal发送16字节数据。

以下是 **rs485.py** 代码供参考。

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

RS-232 或推荐标准 232 是一个最初于 1960 年引入的串行通信数据传输标准。它正式定义了 DTE 和 DCE 之间连接的信号。与后来的接口（如 RS-422、RS-485 和以太网）相比，RS-232 具有较低的传输速度、较短的最大电缆长度、较大的电压摆幅、较大的标准连接器、无多点功能和有限的多点传输功能。

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [USB To RS232 Industrial Isolated Converter](https://www.seeedstudio.com/USB-TO-RS232--RS485--TTL-Industrial-Isolated-Converter-p-3231.html) 和电缆

本示例介绍如何在 reTerminal E10-1 上使用 RS232。

**步骤 1.** 由于 RS485 功能使用 ttyS0，因此在开始之前需要关闭 ttyS0 系统交互功能。

```sh
sudo raspi-config
```

依次选择 **Interface Options**、**Serial port**。

在下一个屏幕中，系统会询问您是否希望通过串口访问登录shell，选择 **No**。

然后在"Do you want to use serial port hardware"中，确保选择 **Yes**。

reTerminal 完成更改后，您将在屏幕上看到以下文本。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image9.jpg"/></div>

**步骤 2.** 使用电缆通过 RS232 接口将 reTerminal E10-1 连接到计算机。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/rs232.jpg"/></div>

**步骤 3.** 使用命令 `dmesg | grep tty` 查看串口名称。确定用于与计算机进行 RS232 通信的串口名称。这可能因计算机而异。通常情况下，它是 **ttyS0**。

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

以下是 **rs232_send.py** 代码供参考。

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

以下是 **rs232_receive.py** 代码供参考。

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

本示例介绍如何测试 reTerminal E10-1 上的以太网连接。

**步骤 1.** 为 reTerminal 和计算机下载 **iperf3**。

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

**步骤 3.** 将 reTerminal 用作服务器。

```sh
iperf3 -s
```

使用计算机测试连接到 reTerminal 的网络速度。此时，请保持计算机和 reTerminal 在同一局域网中。

```sh
iperf3 -c 192.168.xxx.xxx
```

*上面的地址"192.168.xxx.xxx"是reTerminal的地址。*

例如，在我的设置中，reTerminal的IP地址是```192.168.31.187```：

```sh
iperf3 -c 192.168.31.187
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image17.jpg"/></div>

如果您需要完成更多网络测试功能，可以参考 [iperf](https://github.com/esnet/iperf) 项目网站上查询参数的使用。

### **WM1302 (USB/SPI) LoRaWAN 网关**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- [WM1302 LoRaWAN 网关模块 (USB/SPI) US/EU](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html) x1

USB 和 SPI 模块之间的区别如下所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa.png"/></div>

本示例介绍如何在 reTerminal E10-1 上使用 WM1302 LoRaWAN 网关。

**步骤 1.** 将 WM1302 模块安装到 reTerminal E10-1 上，然后用螺丝固定。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image18.jpg"/></div>

然后将风扇旁边的按钮转到 PCIE。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/045.jpg"/></div>

**步骤 2.** 在命令行中输入 `sudo raspi-config` 打开树莓派软件配置工具：

- 选择 Interface Options
- 选择 SPI，然后选择 **Yes** 启用它
- 选择 I2C，然后选择 **Yes** 启用它
- 选择 Serial Port，然后对 "Would you like a login shell..." 选择 **No**，对 "Would you like the serial port hardware..." 选择 **Yes**

完成后，请重启树莓派以确保这些设置生效。

**步骤 3.** 下载 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 到 reTerminal 并编译它。

```sh
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**步骤 4.** 配置重置脚本。首先使用以下命令将文件下载到 **sx1302_hal/packet_forwarder**

```
cd sx1302_hal/packet_forwarder
wget https://files.seeedstudio.com/wiki/reTerminal_Bridge/reset_lgw.sh
```

然后根据你的 WM1302 版本运行以下代码测试。

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

**步骤 5.** 在 [TTN 网站](https://www.thethingsnetwork.org/) 注册并登录您的账户。如果您没有账户，请先注册。然后进入网关界面并点击"Get Starting"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa1.png"/></div>

选择您的地区。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa2.png"/></div>

选择"Go to gateways"

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reTerminalLoRa3.png"/></div>

点击 **Add gateway** 添加设备：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image22.jpg"/></div>

其中，**Gateway EUI** 的值将在**步骤 4** 运行测试时显示在日志中。Lora 选项中的频率计划（以欧洲版本为例）选择 **Europe 863-870 MHz (SF9 for RX2 - recommended)**。然后点击 **Create gateway**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image23.jpg"/></div>

**步骤 6.** （以欧洲版本为例）
如果是 SPI 版本，编辑 **sx1302_hal/packet_forwarder** 中的 **global_conf.json.sx1250.EU868**。

如果是 USB 版本，编辑 **sx1302_hal/packet_forwarder** 中的 **global_conf.json.sx1250.EU868.USB**。

在相应文件中搜索 **gateway_conf**。

- 然后将后面的 **gateway_ID** 更改为网页中填写的 **Gateway EUI**。

- **server_address** 修改为网页中的 **Gateway Server address**。

- **serv_port_up** 和 **serv_port_up** 都修改为 **1700**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image24.jpg"/></div>

**步骤 7.** 再次运行**步骤 4** 中的命令，稍后您可以在网页上看到设备的连接信息。

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
上述教程基于欧洲版本的 WM1302。如果您使用的是美国版本的 WM1302，步骤基本相同，但教程中需要修改和运行的文件会有所不同。文件名请参考您购买的版本和[以下页面](https://github.com/Lora-net/sx1302_hal/tree/master/packet_forwarder)。
:::

### **硬盘扩展**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- M.2 B key 连接器 x1

本示例介绍如何在 reTerminal E10-1 上安装和检查硬盘运行。

**步骤 1.** 打开 reTerminal E10-1 的后盖，将 M.2 SSD 插入 Mini-PCIe 连接器并用螺丝固定。关闭后盖，连接 reTerminal 并通电。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/040.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image26.jpg"/></div>

然后将风扇旁边的按钮转到 M.2。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/046.jpg"/></div>

**步骤 2.** 输入命令查看是否检测到 SSD 存储设备。

```sh
sudo fdisk -l
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/025.png"/></div>

**步骤 3.** 我们也可以使用 dd 命令来测试硬盘的读写速度。

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
确保您使用的是 M.2 B key。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/add_pic_1.png"/></div>
:::

#### 格式化硬盘

:::caution
以下步骤将清除您连接到 reTerminal E10-1 的 SSD 上的所有数据，如果您选择了错误的驱动器介质，也会如此，因此请确保您仔细遵循以下步骤，并确保您理解每个步骤的目的。
:::

- **使用的软件工具**: ```lsblk```、```fdisk```、```mkfs```、```mount```、```umount```

**步骤 1.** 查找您的 SSD 设备名称
一旦您在 reTerminal E10-1 中连接了 SSD 并连接到 reTerminal，在系统启动后打开终端，然后输入以下命令：

```sh
lsblk
```

你应该看到类似的内容：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsblk.png"/></div>

**步骤 2.** 使用 fdisk 对您的 SSD 进行分区

:::caution
在执行此步骤后，您将丢失连接到 reTerminal E10-1 的 SSD 上的数据。
:::

按照上述步骤，在终端中输入以下命令，注意 /dev/**sdX** 中的 **X** 是您选择要格式化的 **SSD 设备名称**，确保没有其他 USB 驱动器连接到 reTerminal，除非您确信设备名称是正确的。

```sh
sudo fdisk /dev/sdX
```

例如，就我而言：

```sh
sudo fdisk /dev/sda
```

你应该看到类似下面显示的内容：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk.png"/></div>

在 fdisk 提示符下：

```bash
Welcome to fdisk (util-linux 2.36.1).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help):
```

首先输入 **```d```** 来删除 SSD 设备上的分区。

然后输入 **```n```** 在 SSD 设备上创建新分区。

之后您应该看到以下消息：

```sh
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
```

输入 **```p```** 创建主分区，然后输入 **```1```**。

然后对于第一个扇区，您可以按 **ENTER** 键使用驱动器开始扇区的默认值，或者您可以指定在 SSD 的特定扇区位置开始分区 1。在我的情况下，我只是按了 Enter 键使用默认值。

然后选择分区 1 的最后一个扇区，如果您想将整个驱动器空间用于分区 1，只需按 **ENTER** 键，或者您可以输入分区 1 结束的特定扇区位置，这也意味着您正在创建的分区 1 的存储大小。

然后按 **```Y```** 删除签名。

然后输入 **```w```** 写入更改并退出 fdisk 提示符。

以下是该过程的示例：
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/fdisk_sample.png"/></div>

**步骤 3.** 将您的 SSD 分区格式化为 ext4 格式
现在您应该为您的 SSD 创建分区，您需要将分区格式化为 ext4 格式以便挂载和使用它。通过使用 mkfs.ext4 来执行此操作：

```bash
sudo mkfs.ext4 /dev/sdXX
```

类似地，其中 ```sdXX``` 是你的 SSD 的设备名称，在我的情况下我使用 ```/dev/sda1``` 例如：

```bash
sudo mkfs.ext4 /dev/sda1
```

在 ```Proceed anyway? (y,N)``` 处输入 **```y```** 并按 **```回车键```**，然后等待几秒钟直到进程完成。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mkfs.png"/></div>

**步骤 4.** 挂载分区
现在您可以挂载 SSD 作为外部磁盘用于额外存储。

```bash
sudo mkdir /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"

sudo mount /dev/sdXX /media/"YOUR USER NAME"/"THE NAME YOU WANT TO MOUNT THE DRIVE"
```

其中 **"YOUR USER NAME"** 是您的 reTerminal 系统的用户名，**"THE NAME YOU WANT TO MOUNT THE DRIVE"** 是您创建的用于挂载驱动器的名称，**/dev/sdXX** 是您要挂载的 SSD 分区的设备名称。

例如在我的情况下：

```bash
sudo mkdir /media/seeed/SSD

sudo mount /dev/sda1 /media/seeed/SSD/
```

通过以下方式检查 SSD 是否成功挂载：

```bash
lsblk
```

你应该看到与我类似的输出，其中 **```/dev/sda1```** 被挂载到 **```/media/seeed/SSD```**：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/mount.png"/></div>

### **EC25-EUX 4G 模块**

**所需材料**

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) x1
- [reTerminal E10-1](https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html) x1
- EC25-EUX 4G 模块 x1
- SIM 卡 x1

**步骤 1.** 打开 reTerminal E10-1 的后盖，然后将 EC25-EUX 和 SIM 卡安装到 reTerminal E10-1 上。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/039.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/041.jpg"/></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/042.jpg"/></div>

然后将风扇旁边的按钮转到 PCIE。

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

一旦串口连接打开，输入 AT 并按下 'Enter'，您应该会看到 OK。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image31.png"/></div>

**步骤 5.** 启用 4G 模块连接到 4G 网络

请将支持 4G 的 SIM 卡插入锂电池支架上的 SIM 卡槽中，该 SIM 卡槽支持 micro SIM 卡，因此如果您有 nano SIM 卡，需要找一个 micro SIM 卡适配器来转换为 micro SIM 卡。

在同一个 minicom 串口窗口中请输入：

```sh
AT+QCFG="usbnet"
```

它将返回类似 ```+QCFG: "usbnet",0,``` 的内容，但我们需要将其设置为 1（ECM 模式），因此输入以下命令：

```sh
AT+QCFG="usbnet",1
```

然后输入以下命令强制调制解调器重启：

```sh
AT+CFUN=1,1
```

然后您可以重启或等待一段时间，让模块从您的SIM卡运营商获取互联网连接。

您也可以使用命令 `ifconfig` 来查询reTerminal的网络状态。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image33.png"/></div>

### **音频**

为了满足不同用户的多媒体需求，reTermnal E10-1内部安装了一个扬声器模块和两个麦克风模块，以实现播放声音和录音的需求。

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

要检查您是否已修改 `/boot/config.txt`，您可以使用 `nano` 文本编辑器打开文件并滚动到最后一行进行检查：

```bash
nano /boot/config.txt
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/image35.jpg"/></div>

一旦将其添加到 `/boot/config.txt` 中，您现在可以重启：

```bash
sudo reboot
```

重启后，使用命令 `arecord -l` 查看录音设备。

```bash
arecord -L
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/030.png"/></div>

如上图所示，**card 0 device 0** 是我们需要用来录音的设备。

**步骤 3.** 根据上述信息，使用命令执行录音和保存操作。

```sh
arecord -Dhw:0,0 -d 10 -f cd -r 44100 -c 2 -t wav test.wav
```

:::note
**参数解析**

- **-D** 指定录音设备，0,0 表示卡 0 设备 0，即 bcm2835-i2s-wm8960-hifi wm8960-hifi-0。
- **-d** 指定录音持续时间，单位为秒。
- **-f** 指定录音格式，仅支持 cd、cdr、dat。
- **-r** 指定采样率，单位为 Hz。
- **-c** 指定通道数。
- **-t** 指定生成的文件格式。

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

## 资源

## 常见问题

1. 兼容什么类型的18650电池？

答案：推荐使用松下NCR18650B 3.6V 3400mAh。

2. 电池是否需要自带过流/欠压/过压保护？

答案：不需要，因为reTerminal E10-1具有电池保护电路

3. 它使用什么型号的CAN和RS485控制器？

答案：

- 485控制器：TP485E
- CAN控制器：MCP2518FDT-E/QBB

4. 昨天安装了E10，电池信息（电量水平）是否正确？即使我刚从充电器中取出电池，它也显示为红色（0%）。

```
Kernel: 5.10.103-v8+ aarch64 bits: 64 Console: tty 0 Distro: Debian GNU/Linux 10
```

电源显示功能：尚未开发，但我们已收到您的意见，将安排开发此功能

5. reTerminal 扩展板是否提供另一个（独立的）以太网端口 --> 这样我们就有两个以太网端口？

这两个端口可以同时使用，互不影响。

6. RS232 和 RS485 是否独立/分离（有时，在某些硬件中，您只能使用其中一个...）

您一次只能使用 RS232 或 RS485 中的一个。

## 资源

- [DSN 格式原理图文件](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge.DSN)
- [PCB 板设计文件](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge.brd)
- [原理图 PDF 版本](https://files.seeedstudio.com/wiki/reTerminal_Bridge/source/reTerminal_Bridge_SCH.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
