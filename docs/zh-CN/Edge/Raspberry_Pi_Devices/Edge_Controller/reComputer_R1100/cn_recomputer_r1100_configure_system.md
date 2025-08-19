---
description: 了解如何在安装设备后配置和测试 reComputer R1100 系列的硬件组件。本指南涵盖 GPIO 映射、用户 LED 测试、SPI 通信、Wi-Fi 和蓝牙扫描、LoRa®、4G、Mini-PCIe 上的 Zigbee、RS485、RS232、DI/DO 测试以及用于安全关机的 UPS。
title: 配置 reComputer R1100
keywords:
- 树莓派
- 边缘控制器
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg
slug: /cn/recomputer_r1100_configure_system
last_update:
  date: 2024/2/26
  author: Kasun Thushara
---

## 概述

了解如何在安装设备后配置和测试 reComputer R1100 系列的硬件组件。本指南涵盖 GPIO 映射、用户 LED 测试、SPI 通信、Wi-Fi 和蓝牙扫描、LoRa®、4G、Mini-PCIe 上的 Zigbee、RS485、RS232、DI/DO 测试、UPS 用于安全关机等内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 查询 GPIO 映射和偏移

要检查 GPIO 映射和偏移，请按照以下步骤操作：
- **在终端中运行以下命令**

```bash
cat /sys/kernel/debug/gpio
```

**此命令将显示 GPIO 映射和偏移**，提供调试或配置 GPIO 引脚所需的重要信息。

## 控制 LED 指示灯

reComputer R1100 提供了三个 **LED 指示灯**，分别为 **红色、蓝色和绿色**。您可以使用以下命令控制它们：

**1. 进入 LED 目录**  
```bash
cd /sys/class/leds/
ls
```
这将列出可用的 LED。

**2. 通过写入亮度文件启用 LED**  
首先切换到 **超级用户模式**：  
```bash
sudo su
```
然后打开 LED：  
```bash
echo 1 > /sys/class/leds/led-red/brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```
这将**点亮**相应的 LED。

**3. 关闭 LED（可选）**  
要**关闭**特定的 LED，请使用以下命令：
```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## 测试 SPI 通信

要验证 **SPI 通信**，您可以通过**短接 TPM 模块的 MISO 和 MOSI 引脚**来执行回环测试。此方法可确保 MOSI（主输出，从输入）发送的数据能够在 MISO（主输入，从输出）上接收。

**分步指南**

**1. 连接到互联网**  
在继续之前，请确保您的设备已连接到网络。

**2. 克隆 `spidev-test` 仓库**  

```bash
git clone https://github.com/rm-hull/spidev-test.git
```

**3. 进入目录**  

```bash
cd spidev-test
```

**4. 编译 `spidev_test.c` 程序**  
```bash
gcc spidev_test.c -o spidev_test
```

**5. 运行 SPI 测试**

```bash
./spidev_test -D /dev/spidev0.1 -v -p "hello"
```
- `-D /dev/spidev0.1` → 指定 SPI 设备  
- `-v` → 启用详细输出  
- `-p "hello"` → 发送字符串 `"hello"`

**6. 回环测试（可选）**  
- 在运行测试之前，**短接 TPM 模块的 MISO 和 MOSI 引脚**。
- 如果 SPI 总线正常工作，输出应显示发送的数据被**正确接收**。

## Wi-Fi 扫描
要列出可用的 Wi-Fi 网络及其详细信息，请运行以下命令：  
```bash
sudo iwlist wlan0 scan
```
- 此命令会扫描所有附近的 Wi-Fi 网络，并显示它们的 SSID、信号强度和加密类型。  

## 蓝牙扫描  
要扫描蓝牙设备，请按照以下步骤操作：  

**打开蓝牙控制界面：**  
```bash
sudo bluetoothctl
```

**启用扫描：**  
```bash
scan on
```
- 此命令会开始扫描附近的蓝牙设备。  

## LoRa® 使用 Mini-PCIe 

### LoRa® SPI 配置  

**克隆 SX1302_HAL 仓库：**  

```bash
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

**进入克隆的目录：** 

```bash
cd sx1302_hal
```

**修改配置文件：**  

打开 I2C 设备配置文件：  

```bash
sudo vim ./libloragw/inc/loragw_i2c.h
```
将以下行：  
```c
#define I2C_DEVICE "/dev/i2c-1"
```
修改为：  
```c
#define I2C_DEVICE "/dev/i2c-3"
```

**编译代码：** 

```bash
sudo make
```

**修改重置脚本：**

打开 `reset_lgw.sh` 脚本：  

```bash
sudo vim ./tools/reset_lgw.sh
```
更新引脚配置： 

```bash
SX1302_RESET_PIN=580    # SX1302 重置  
SX1302_POWER_EN_PIN=578 # SX1302 电源启用  
SX1261_RESET_PIN=579    # SX1261 重置 (LBT/频谱扫描)  
```

**将重置脚本复制到数据包转发器目录：**  

```bash
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**更新 LoRaWAN® 配置文件中的默认 SPI 端口：**  

修改 `global_conf.json.sx1250.US915` 文件：  
```bash
sed -i 's/spidev0.0/spidev0.1/g' global_conf.json.sx1250.US915
```

**启动 LoRaWAN® 模块：**  

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

### LoRa® USB 配置
如果您使用的是 LoRa® USB 模块而不是 LoRa® SPI，请按照以下步骤操作。除最后一步外，大多数命令与 LoRa® SPI 配置相同。

**拉高 SX1302 重置引脚**

```bash
echo 1 > /sys/class/gpio/gpio580/value
```
**启动 LoRaWAN® USB 模块**

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```
现在 LoRa® USB 已在 reComputer R1100 上配置并运行。

## 使用 Mini-PCIe 的 4G 蜂窝网络

要通过 `minicom` 使用 AT 命令与 4G 模块交互，请按照以下步骤操作：  

**使用适当的串口和波特率打开 Minicom：**  

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```
此命令使用指定的串口 (`/dev/ttyUSB2`) 和波特率 **115200** 打开 Minicom。  

**向 4G 模块发送 AT 命令：**  

打开 Minicom 后，您可以开始向 4G 模块发送 **AT 命令**。例如：  

```bash
AT
```
此命令检查模块是否响应。如果模块正常工作，您应该收到 **"OK"** 响应。  

**使用 4G 模块拨打电话号码：**  

要拨打电话号码，请使用 `ATD` 命令并附上电话号码：  

```bash
ATD<phone_number>;
```
- 将 `<phone_number>` 替换为您想拨打的电话号码。  
- 请确保在命令末尾包含一个 **分号 (;)**，以指示电话号码的结束。  

## Zigbee over Mini-PCIe
要测试两个 Zigbee 模块之间的 **Zigbee 通信**，请按照以下步骤操作：  

**检查可用的串口**  

运行以下命令以检查可用的串口：  
```bash
cat /dev/ttyUSB*
```

**安装串口通信工具**  

使用以下命令安装图形化串口终端工具 **CuteCom**：  
```bash
sudo apt-get install cutecom
```

**配置第一个 Zigbee 模块（协调器）**  

- 打开 **CuteCom** 并为**第一个串口**进行配置。  
- **设置：**
  - **波特率（Baud Rate）：** 115200  
  - 在界面底部启用 **"Hex output"**。  

**配置为协调器的步骤：**  

1. **设置为协调器：** 发送以下命令：  
   ```  
   55 04 00 05 00 05  
   ```  
   - 预期响应：  
   ```  
   55 04 00 05 00 05  
   ```  
2. **重置设备：**  
   - 按下 **重置按钮**，或者  
   - 发送以下命令：  
     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  
3. **网络组建：**  
   - 发送以下命令：  
   ```  
   55 03 00 02 02  
   ```  

**配置第二个 Zigbee 模块（路由器）**  
- 打开另一个 **CuteCom** 实例，并为**第二个串口**进行相同设置。  

**配置为路由器的步骤：**  
1. **设置为路由器：** 发送以下命令：  
   ```  
   55 04 00 05 01 04  
   ```  
   - 预期响应：  
   ```  
   55 04 00 05 00 05  
   ```  
2. **重置设备：**  
   - 按下 **重置按钮**，或者  
   - 发送以下命令：  
     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  
3. **网络组建：** 发送以下命令：  
   ```  
   55 03 00 02 02  
   ```  

**检查设备状态**  
要验证设备状态，发送以下命令：  
```  
55 03 00 00 00  
```  
预期响应：  
```  
55 2A 00 00 00 01 XX XX XX XX  
```  
- `XX` 表示设备特定信息。  

**进入透明模式**  

如果**网络组建**成功，发送以下命令启用**透明模式**：  
```  
55 07 00 11 00 03 00 01 13  
```  
**两个模块必须处于透明模式才能直接通信。**  
要**退出透明模式**，发送以下命令：  
```  
+++  
```

**附加说明**  
- 如果**路由器配置失败**，设备可能已经是**协调器**。要退出网络，请发送以下命令：  
  ```  
  55 07 00 04 02 XXXX XX  
  ```  
- 要**测试发射功率**，使用以下命令：  
  - **查询功率：**  
    ```  
    55 04 0D 00 00 0D  
    ```  
  - **设置功率：**  
    ```  
    55 04 0D 01 XXXX  
    ```  

请确保将 `/dev/ttyUSB*` 替换为每个 Zigbee 模块的**正确串口**。  
仔细按照这些步骤操作，以在两个模块之间建立**成功的 Zigbee 通信**。  

---

## RS485 测试  

reComputer R1100 包含 **两个 RS485 端口**。以下是它们对应的 **COM 端口** 和 **设备文件**：  

| **RS485 端口** | **COM 端口** | **丝印标签**         | **设备文件**       |
|----------------|-------------|--------------------|----------------|
| **RS485_1**   | COM1        | A1 / B1 / GND     | `/dev/ttyACM0` |
| **RS485_2**   | COM2        | A2 / B2 / GND     | `/dev/ttyACM1` |

**测试 RS485 功能的步骤**  

**连接 RS485 端口**  

将 **RS485_1 (A 和 B)** 物理连接到 **RS485_2 (A 和 B)**。  

**运行 RS485 测试程序**  

我们提供了一个测试程序，用于**验证数据传输**并测量两个 RS485 端口之间的速度。  

运行以下命令以下载并执行测试程序：  
```bash
git clone https://github.com/ackPeng/R1100_TEST.git
cd R1100_TEST
gcc -o serial_test serial_test.c
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```

**测试说明**  
- 此程序会从 **RS485_1** 向 **RS485_2** **发送 1MB 的数据**。  
- 它会**记录完成时间**并计算实际波特率。  
- **注意：** 实际波特率可能略低于理论波特率，这是正常现象。  

**请仔细按照这些步骤操作，以验证 reComputer R1100 上的 RS485 通信功能。**  

## RS232 测试

reComputer R1100 配备了**两个 RS232 接口**。以下是对应的 COM 端口和设备文件：  

| RS232 接口 | COM 端口 | 引脚映射 | 设备文件 |
|------------|---------|-------------|--------------|
| **RS232_1** | COM3 | RX3/TX3/GND | `/dev/ttyACM2` |
| **RS232_2** | COM4 | RX4/TX4/GND | `/dev/ttyACM3` |  

**测试 RS232 通信**  

按照以下步骤测试 RS232 功能：  

1. **连接端口：**  
   - 将 **RS232_1 的 TX** 连接到 **RS232_2 的 RX**。  
   - 将 **RS232_1 的 RX** 连接到 **RS232_2 的 TX**。  

2. **运行测试程序：**  
   - 克隆测试程序仓库：  
     ```bash
     git clone https://github.com/ackPeng/R1100_TEST.git
     ```  
   - 进入目录：  
     ```bash
     cd R1100_TEST
     ```  
   - 编译测试程序：  
     ```bash
     gcc -o serial_test serial_test.c
     ```  
   - 运行测试：  
     ```bash
     ./serial_test /dev/ttyACM2 /dev/ttyACM3 115200
     ```  

此测试会从 RS232_1 向 RS232_2 发送**1MB 的数据**，并测量完成时间和波特率。请注意，实际波特率可能略低于理论值，这是正常现象。

## DI（数字输入）测试

reComputer R1100 包含**两个数字输入（DI）接口**，可根据用户需求进行配置。  

| **DI 接口数量** | **DI 接口** | **对应扩展 GPIO** |
|-----------------|------------|------------------------|
| **2**           | **DI1**    | **GPIO530**           |
|                 | **DI2**    | **GPIO531**           |

**DI 接口规格**  
- **输入类型：** PNP  
- **支持的输入电压：** **5VDC – 24VDC**  
- **电流：** **最高 1000mA**  


**测试 DI 功能的步骤**  

**确保正确连接**  

确保 reComputer R1100 的 **DI 接口** 已正确连接到**外部负载**，并确保 **G_D 接口** 已连接到**电源地（GND）**。

**检查 GPIO 状态**  

运行以下命令检查 **GPIO530**（对应 DI1）的状态：  
```bash
echo 530 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio530/direction
cat /sys/class/gpio/gpio530/value
```

**解释 GPIO 值**  
- **如果外部电平为高电平**，`/sys/class/gpio/gpio530/value` 的输出将为 **0**。  
- **如果外部电平为低电平**，`/sys/class/gpio/gpio530/value` 的输出将为 **1**。  

## DO（数字输出）

**reComputer R1100** 包含**两个数字输出（DO）接口**，可根据用户需求进行配置。  

| **DO 接口数量** | **DO 接口** | **对应扩展 GPIO** |
|-----------------|------------|------------------------|
| **2**           | **DO1**    | **GPIO532**           |
|                 | **DO2**    | **GPIO533**           |

**DO 接口规格**  
- **输出类型：** 晶体管  
- **支持的输出电压：** **最高 60VDC**  
- **电流容量：** **500mA**  



**测试 DO 功能的步骤**  

**确保正确连接**  
确认 reComputer R1100 的 **DO 接口** 已正确连接到**外部负载**。

**由于 DO 接口为开集电极输出且无驱动能力，请使用外部电阻将其上拉至电源。**

**设置输出电平**  
运行以下命令将输出设置为 **高电平** 或 **低电平**：  
```bash
echo 532 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio532/direction
echo 1 > /sys/class/gpio/gpio532/value  # 设置输出为高电平
echo 0 > /sys/class/gpio/gpio532/value  # 设置输出为低电平
```

## USB Hub 测试

要验证 **USB Hub** 的功能，请按照以下步骤操作：

**检查 USB Hub 是否被检测到**

运行以下命令以列出所有已连接的 USB 设备，包括 USB Hub：
```bash
lsusb
```

**验证 USB Hub 检测**
- 此命令将显示系统中所有已连接的 **USB 设备**的信息，包括 **USB Hub**。
- 如果 USB Hub **正常工作**，其详细信息应出现在命令输出中。
- 如果未列出该 Hub，则可能是 **Hub 本身或其与系统的连接**存在问题。

**故障排查（如果 USB Hub 未被检测到）**

- 检查 USB Hub 的 **物理连接**。
- 尝试将 Hub 连接到 **其他 USB 端口**。
- 重启设备并重新运行 `lsusb`。
- 如果问题仍然存在，可能是 Hub 出现了故障。

---

## RTC（实时时钟）测试

要验证 **reComputer R1100** 上的 **RTC 功能**，请按照以下步骤操作：

**禁用自动时间同步**

在测试 RTC 之前，停止并禁用自动时间同步以避免冲突：
```bash
sudo systemctl stop systemd-timesyncd  
sudo systemctl disable systemd-timesyncd  
```

**手动设置 RTC 时间**

将 RTC 设置为特定的日期和时间（例如，2024 年 11 月 12 日中午 12:00）：
```bash
sudo hwclock --set --date "2024-11-12 12:00:00"
```

**将 RTC 时间同步到系统**

更新系统时间以匹配 RTC 时间：
```bash
sudo hwclock --hctosys
```

**验证 RTC 时间**
检查 RTC 中存储的当前时间：
```bash
sudo hwclock -r
```
此命令将显示 RTC 时间。

**测试 RTC 保持功能**
- **断开 RTC 的电源**。
- **等待几分钟**。
- **重新连接电源**，然后再次检查 RTC 时间：
  ```bash
  sudo hwclock -r
  ```
- 如果时间保持正确，则 RTC 功能正常。

---

## 看门狗定时器测试

要测试 **reComputer R1100** 上的 **看门狗定时器**，请按照以下步骤操作：

**安装看门狗软件**

确保已安装看门狗软件包：
```bash
sudo apt install watchdog
```

**配置看门狗**

编辑 **看门狗配置文件**：
```bash
sudo apt-get install vim  # 如果未安装 Vim，请先安装
sudo vim /etc/watchdog.conf
```
按以下方式修改配置：
```ini
watchdog-device = /dev/watchdog  

# 设置硬件超时时间（默认是 1 分钟）
watchdog-timeout = 120  

# 设置测试间隔时间（应短于 watchdog-timeout）
interval = 15  

# 设置系统负载限制  
max-load-1 = 24  
# max-load-5 = 18  
# max-load-15 = 12  

# 启用实时优先级  
realtime = yes  
priority = 1  
```

**启动看门狗服务**
启用并启动看门狗服务：
```bash
sudo systemctl start watchdog
```

**通过模拟系统挂起测试看门狗**

触发 **内核崩溃**，以查看看门狗是否会 **自动重启**系统：
```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

**监控系统**
检查系统是否在指定的 **超时时间**后 **自动重启**。

**如果系统按预期重启，则看门狗功能正常。**

## 通过 GPIO 控制蜂鸣器  

蜂鸣器映射到 GPIO 587。使用以下命令打开和关闭蜂鸣器：  

**打开蜂鸣器：**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 1 > /sys/class/gpio/gpio587/value  
```  

**关闭蜂鸣器：**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 0 > /sys/class/gpio/gpio587/value  
```  


## CSI 摄像头测试  

要在 **reComputer R1100** 上测试 **CSI 摄像头**，请按照以下步骤操作：  

**修改配置文件**  

编辑 **config.txt** 文件以启用摄像头模块：  
```bash
sudo nano /boot/firmware/config.txt
```
在文件的**末尾**添加以下内容：  
```ini
dtoverlay=imx219,cam0
```


**重启系统**  

重启以应用更改：  
```bash
sudo reboot
```


**检查摄像头检测**  

重启后，验证摄像头是否被检测到：  
```bash
libcamera-jpeg --list-cameras
```
---

**测试摄像头**  

运行以下命令以激活摄像头：  
```bash
rpicam-hello --timeout 0
```
**如果摄像头预览成功启动，说明设置完成！**  


## TPM 2.0 连接检查  

如果您已将 **TPM 2.0 模块**连接到设备，可以使用以下命令验证其检测情况：  

```bash
ls /dev | grep tpm
```  

**输出解释：**  

- 如果输出中显示 **`tpm0`** 和 **`tpmrm0`**，则表明 **TPM（可信平台模块）** 已成功检测到并可用。  
- 这表示 TPM 硬件已被识别并可访问，您可以继续使用与 TPM 相关的功能或应用程序。  

**如果设备被列出，说明您的 TPM 模块已正确连接并可以使用。**  


## 与 ATECC608A 交互并生成随机序列号  

要与 **ATECC608A** 设备通信并生成随机序列号，请按照以下步骤操作：  

**克隆 `atecc-util` 仓库：**  

```bash
git clone https://github.com/wirenboard/atecc-util.git
```  

**进入 `atecc-util` 目录：**  

```bash
cd atecc-util
```  

**克隆 `cryptoauthlib` 仓库：**  

```bash
git clone https://github.com/wirenboard/cryptoauthlib.git
```  

**编译 ATECC 工具：**  

```bash
make
```  

**生成随机序列号：**  

```bash
./atecc -b 1 -s 192 -c 'serial'
```  
- **`-b 1`** → 使用插槽 1。  
- **`-s 192`** → 设置序列号大小为 **192 位**。  
- **`-c 'serial'`** → 生成随机序列号。  

**预期输出：**  

生成的序列号将显示，例如：  
```bash
01235595d3d621f0ee
```  

此方法可与 **ATECC608A** 设备交互，使您能够高效地执行诸如生成随机序列号等操作。  

## 与 EEPROM 交互  

要读取和写入 **EEPROM**（电可擦可编程只读存储器）中的数据，请按照以下步骤操作：  

**为 EEPROM 设备文件授予完全权限：**  
```bash
sudo chmod 777 /sys/bus/i2c/devices/6-0050/eeprom
```  

**向 EEPROM 写入数据：**  
```bash
echo "This is a test string" > /sys/bus/i2c/devices/6-0050/eeprom
```  

**以十六进制格式读取 EEPROM 内容：**  

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## 检查 SSD 检测

要列出所有连接的磁盘（包括 SSD），请使用以下命令：  
```bash
sudo fdisk -l
```  

此命令将显示所有检测到的存储设备的列表。查找代表您的 SSD 的条目，通常标记为：  
- `/dev/sda`  
- `/dev/sdb`  
- `/dev/sdc` 等等。  

一旦确定了正确的 SSD 条目，您可以根据需要继续执行**分区、格式化或其他磁盘管理任务**。



## 用于安全关机的 UPS

**CPU 和 DC 电源输入之间的 GPIO6 连接**用于在电源中断时通知 CPU。CPU 必须在超级电容器的能量耗尽之前通过脚本执行**紧急任务**，然后启动**安全关机（`$shutdown`）**。

**替代关机方法**  
另一种使用此功能的方法是**在 GPIO 引脚状态变化时触发关机**。指定的 GPIO 引脚被配置为**输入键**，生成**KEY_POWER 事件**。这些事件由 **systemd-logind** 处理，系统会自动启动关机。

要启用此功能，请参考 `/boot/overlays/README`，然后通过添加以下内容修改 `/boot/firmware/config.txt`：  
```ini
dtoverlay=gpio-shutdown,gpio_pin=6,active_low=1
```

:::note 
1. 有关 **UPS 功能的详细信息**，请联系我们。  
2. **报警信号为低电平有效**。  
:::
---

#### 用于安全关机的 Python 代码  
以下 Python 脚本演示了**如何通过 GPIO6 检测超级电容 UPS 的工作模式**。当系统检测到断电事件时，它会**自动保存数据并安全关机**。

```python
import RPi.GPIO as GPIO
import time
import os

num = 0

GPIO.setmode(GPIO.BCM)  # 设置 GPIO 编号模式
GPIO.setup(6, GPIO.IN, pull_up_down=GPIO.PUD_UP)  # 将 GPIO6 设置为输入并启用上拉电阻
GPIO.add_event_detect(6, GPIO.FALLING, bouncetime=500)  # 添加去抖时间以稳定信号

while True:
    if GPIO.event_detected(6):
        print("...检测到外部电源断开...")
        os.system("sync")  # 确保数据写入磁盘
        print("...正在保存数据...")
        time.sleep(3)
        os.system("sync")  # 再次保存数据
        
        while num < 5:
            print(f"--- 剩余 {5 - num} 秒 ---")
            num += 1
            time.sleep(1)

        os.system("sudo shutdown -h now")  # 执行系统关机
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>