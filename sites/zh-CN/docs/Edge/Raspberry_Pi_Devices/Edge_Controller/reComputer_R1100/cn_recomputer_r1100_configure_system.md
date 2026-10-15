---
description: 了解在安装设备后如何在 reComputer R1100 系列上配置和测试硬件组件。本 Wiki 涵盖 GPIO 映射、USER LED 测试、SPI 通信、Wi-Fi 和蓝牙扫描、LoRa®、4G、RS485、RS232、DI/DO 测试以及用于安全关机的 UPS 等内容。
title: 配置 reComputer R1100
keywords:
  - Raspberry pi
  - Edge Controller
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg
slug: /recomputer_r1100_configure_system
last_update:
  date: 2/26/2024
  author: Kasun Thushara
createdAt: '2025-02-27'
updatedAt: '2026-04-23'
url: https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/
---

## 概述

了解在安装设备后如何在 reComputer R1100 系列上配置和测试硬件组件。本 Wiki 涵盖 GPIO 映射、USER LED 测试、SPI 通信、Wi-Fi 和蓝牙扫描、LoRa®、4G、RS485、RS232、DI/DO 测试、用于安全关机的 UPS 等内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 查询 GPIO 映射和偏移

要检查 GPIO 映射和偏移，请按照以下步骤操作：

- **在终端中运行以下命令**

```bash
cat /sys/kernel/debug/gpio
```

**此命令将显示 GPIO 映射和偏移**，为调试或配置 GPIO 引脚提供关键信息。

## 控制 LED 指示灯

reComputer R1100 提供了三种 **LED 指示灯**，分别为 **红色、蓝色和绿色**。你可以使用以下命令来控制它们：  

**1. 进入 LED 目录**  

```bash
cd /sys/class/leds/
ls
```

这将列出可用的 LED。

**2. 通过写入亮度文件来点亮 LED**  
首先切换到 **超级用户模式**：  

```bash
sudo su
```

然后，打开 LED：  

```bash
echo 1 > /sys/class/leds/led-red/brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

这将**点亮**对应的 LED。

**3. 关闭 LED（可选）**  
要**关闭**某个特定 LED，请使用：

```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## 测试 SPI 通信

要验证 **SPI 通信**，你可以通过**短接 TPM 模块的 MISO 和 MOSI 引脚**来执行回环测试。此方法可确保在 MOSI（主出从入）上发送的数据能在 MISO（主入从出）上被接收。  

**分步指南**  

**1. 连接到互联网**  
在继续之前，请确保你的设备已连接到网络。

**2. 克隆 `spidev-test` 仓库**  

```bash
git clone https://github.com/rm-hull/spidev-test.git
```

**3. 进入该目录**  

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
- 如果 SPI 总线工作正常，输出应显示已发送的数据被**正确接收**。

## Wi-Fi 扫描

要列出可用的 Wi-Fi 网络及其详细信息，请运行：  

```bash
sudo iwlist wlan0 scan
```

- 此命令会扫描附近所有 Wi-Fi 网络，并显示其 SSID、信号强度和加密类型。  

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

- 这将开始扫描附近的蓝牙设备。  

## 通过 Mini-PCIe 使用 LoRa®

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

修改这一行：  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

为：  

```c
#define I2C_DEVICE "/dev/i2c-3"
```

**编译代码：**

```bash
sudo make
```

**修改复位脚本：**

打开 `reset_lgw.sh` 脚本：  

```bash
sudo vim ./tools/reset_lgw.sh
```

更新引脚配置：

```bash
SX1302_RESET_PIN=580    # SX1302 reset  
SX1302_POWER_EN_PIN=578 # SX1302 power enable  
SX1261_RESET_PIN=579    # SX1261 reset (LBT/Spectral Scan)  
```

**将复位脚本复制到数据转发器目录：**  

```bash
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**在 LoRaWAN® 配置文件中更新默认 SPI 端口：**  

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

如果你使用的是 LoRa® USB 模块而不是 LoRa® SPI，请按照以下步骤操作。除最后一步外，大多数命令与 LoRa® SPI 相同。

**拉高 SX1302 复位引脚**

```bash
echo 1 > /sys/class/gpio/gpio580/value
```

**启动 LoRaWAN® USB 模块**

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

LoRa® USB 现已在 reComputer R1100 上配置完成并运行。

## 通过 Mini-PCIe 使用 4G 蜂窝网络

要通过 `minicom` 使用 AT 指令与 4G 模块交互，请按照以下步骤操作：  

**使用合适的串口和波特率打开 Minicom：**  

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

此命令使用指定的串口（`/dev/ttyUSB2`）并以 **115200** 的波特率打开 Minicom。  

**向 4G 模块发送 AT 指令：**  

打开 Minicom 后，你可以开始向 4G 模块发送 **AT 指令**。例如：  

```bash
AT
```

此命令用于检查模块是否有响应。如果模块工作正常，你应当收到 **"OK"** 的响应。  

**使用 4G 模块拨打电话号码：**  

要拨打电话号码，请使用 `ATD` 指令并在后面加上电话号码：  

```bash
ATD<phone_number>;
```

- 将 `<phone_number>` 替换为你想要拨打的电话号码。  
- 请确保在指令末尾添加一个**分号 (;)**，以指示电话号码的结束。  


## RS485 测试

reComputer R1100 包含 **两个 RS485 接口**。以下是它们对应的 **COM 端口** 和 **设备文件**：  

| **RS485 接口** | **COM 端口** | **丝印标识** | **设备文件** |
|---------------|-------------|----------------------|----------------|
| **RS485_1**  | COM1        | A1 / B1 / GND       | `/dev/ttyACM0` |
| **RS485_2**  | COM2        | A2 / B2 / GND       | `/dev/ttyACM1` |

**测试 RS485 功能的步骤**  

**连接 RS485 接口**  

将 **RS485_1（A & B）** 与 **RS485_2（A & B）** 物理连接。  

**运行 RS485 测试程序**  

我们提供了一个测试程序，用于**验证数据传输**并测量两个 RS485 接口之间的速度。  

运行以下命令以下载并执行测试程序：  

```bash
git clone https://github.com/ackPeng/R1100_TEST.git
cd R1100_TEST
gcc -o serial_test serial_test.c
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```

**测试说明**  

- 该程序会从 **RS485_1** 向 **RS485_2** **发送 1MB 数据**。  
- 它会**记录完成时间**并计算实际波特率。  
- **注意：** 实际波特率可能略低于理论波特率，这是预期现象。  

**请仔细按照这些步骤操作，以验证 reComputer R1100 上的 RS485 通信。**

## RS232 测试

reComputer R1100 提供 **两个 RS232 接口**。以下是对应的 COM 端口和设备文件：  

| RS232 接口 | COM 端口 | 引脚映射 | 设备文件 |
|------------|---------|-------------|--------------|
| **RS232_1** | COM3 | RX3/TX3/GND | `/dev/ttyACM2` |
| **RS232_2** | COM4 | RX4/TX4/GND | `/dev/ttyACM3` |  

**测试 RS232 通信**  

按照以下步骤测试 RS232 功能：  

1. **连接接口：**  
   - 将 **RS232_1 的 TX** 连接到 **RS232_2 的 RX**。  
   - 将 **RS232_1 的 RX** 连接到 **RS232_2 的 TX**。  

2. **运行测试程序：**  
   - 克隆测试程序仓库：  

     ```bash
     git clone https://github.com/ackPeng/R1100_TEST.git
     ```  

   - 进入该目录：  

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

该测试会从 RS232_1 向 RS232_2 发送 **1MB 数据**，并测量完成时间和波特率。请注意，实际波特率可能略低于理论值，这是正常现象。

## DI（数字输入）测试

reComputer R1100 包含 **两个数字输入（DI）接口**，可根据用户需求进行配置。  

| **DI 接口数量** | **DI 接口** | **对应扩展 GPIO** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DI1**     | **GPIO530**                    |
|                       | **DI2**     | **GPIO531**                    |

**DI 接口规格**  

- **输入类型：** PNP  
- **支持的输入电压：** **5VDC – 24VDC**  
- **电流：** **最高 1000mA**  

**测试 DI 功能的步骤**  

**确保正确连接**  

确保 reComputer R1100 的 **DI 接口**已正确连接到**外部负载**，同时确保 **G_D** 接口已连接到**电源 GND**。

**检查 GPIO 状态**  

运行以下命令以检查 **GPIO530**（对应 DI1）的状态：  

```bash
echo 530 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio530/direction
cat /sys/class/gpio/gpio530/value
```

**解析 GPIO 值**  

- **如果外部电平为高电平（HIGH）**，`/sys/class/gpio/gpio530/value` 的输出将为 **0**。  
- **如果外部电平为 LOW**，则 `/sys/class/gpio/gpio530/value` 的输出将为 **1**。  

## DO（数字输出）

**reComputer R1100** 包含 **两个数字输出（DO）端口**，可根据用户需求进行配置。  

| **DO 端口数量** | **DO 端口** | **对应扩展 GPIO** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DO1**     | **GPIO532**                    |
|                       | **DO2**     | **GPIO533**                    |

**DO 端口规格**  

- **输出类型：** 晶体管  
- **支持的输出电压：** **最高 60VDC**  
- **电流能力：** **500mA**  

**测试 DO 功能的步骤**  

**确保正确连接**  
确认 reComputer R1100 的 **DO 端口** 已正确连接到 **外部负载**。

**由于 DO 端口为开集电极输出且无驱动能力，请使用外部电阻将其上拉到电源。**

**设置输出电平**  
运行以下命令将输出设置为 **HIGH** 或 **LOW**：  

```bash
echo 532 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio532/direction
echo 1 > /sys/class/gpio/gpio532/value  # Set output to HIGH
echo 0 > /sys/class/gpio/gpio532/value  # Set output to LOW
```

## USB Hub 测试

要验证 **USB hub** 的功能，请按照以下步骤操作：  

**检查是否检测到 USB Hub**  

运行以下命令列出所有已连接的 USB 设备，包括 hub：  

```bash
lsusb
```

**验证 USB Hub 检测情况**

- 此命令会显示系统中连接的所有 **USB 设备** 的信息，包括 **USB hub**。  
- 如果 USB hub **工作正常**，其详细信息应出现在命令输出中。  
- 如果 hub **未被列出**，则可能是 **hub 本身或其与系统的连接** 出现问题。  

**故障排查（如果未检测到 USB Hub）**  

- 检查 USB hub 的 **物理连接**。  
- 尝试将 hub 连接到 **不同的 USB 端口**。  
- 重启设备并重新运行 `lsusb`。  
- 如果问题仍然存在，则 hub 可能已损坏。  

## RTC（实时时钟）测试

要验证 **reComputer R1100** 上的 **RTC 功能**，请按照以下步骤操作：  

**禁用自动时间同步**  

在测试 RTC 之前，先停止并禁用自动时间同步以避免冲突：  

```bash
sudo systemctl stop systemd-timesyncd  
sudo systemctl disable systemd-timesyncd  
```

**手动设置 RTC 时间**

将 RTC 设置为特定日期和时间（例如：2024 年 11 月 12 日 12:00 PM）：  

```bash
sudo hwclock --set --date "2024-11-12 12:00:00"
```

**将 RTC 时间同步到系统**

将系统时间更新为与 RTC 时间一致：  

```bash
sudo hwclock --hctosys
```

**验证 RTC 时间**  
检查 RTC 中存储的当前时间：  

```bash
sudo hwclock -r
```

此命令将显示 RTC 时间。

**测试 RTC 保持能力**  

- **断开 RTC 的电源**。  
- **等待几分钟**。  
- **重新接通电源**，并再次使用以下命令检查 RTC 时间：  

  ```bash
  sudo hwclock -r
  ```

- 如果时间保持正确，则说明 RTC 工作正常。  

## 看门狗定时器测试

要测试 **reComputer R1100** 上的 **看门狗定时器**，请按照以下步骤操作：  

**安装 Watchdog 软件**  

确保已安装 watchdog 软件包：  

```bash
sudo apt install watchdog
```

**配置 Watchdog**  

编辑 **watchdog 配置文件**：  

```bash
sudo apt-get install vim  # Install Vim if not already installed  
sudo vim /etc/watchdog.conf
```

按如下方式修改配置：  

```ini
watchdog-device = /dev/watchdog  

# Set the hardware timeout (default is 1 minute)
watchdog-timeout = 120  

# Set the interval between tests (should be shorter than watchdog-timeout)
interval = 15  

# Set system load limits  
max-load-1 = 24  
# max-load-5 = 18  
# max-load-15 = 12  

# Enable real-time priority  
realtime = yes  
priority = 1  
```

**启动 Watchdog 服务**  
启用并启动 watchdog 服务：  

```bash
sudo systemctl start watchdog
```

**通过模拟系统死机来测试 Watchdog**

触发一次 **内核崩溃**，以查看 watchdog 是否会 **自动重启** 系统：  

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

**监控系统**  
检查系统是否在指定的 **超时时间** 后 **自动重启**。  

**如果系统按预期重启，则说明 watchdog 工作正常。**  

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

要测试 **reComputer R1100** 上的 **CSI 摄像头**，请按照以下步骤操作：  

**修改配置文件**  

编辑 **config.txt** 文件以启用摄像头模块：  

```bash
sudo nano /boot/firmware/config.txt
```

在文件 **末尾** 添加以下一行：  

```ini
dtoverlay=imx219,cam0
```

**重启系统**

重启以应用更改：  

```bash
sudo reboot
```

**检查摄像头检测情况**  

重启后，验证是否检测到摄像头：  

```bash
libcamera-jpeg --list-cameras
```

---

**测试摄像头**  

运行以下命令以激活摄像头：  

```bash
rpicam-hello --timeout 0
```

**如果摄像头预览成功启动，则说明设置完成！**  

## TPM 2.0 连接检查

如果你在设备上连接了 **TPM 2.0 模块**，可以使用以下命令验证其是否被检测到：  

```bash
ls /dev | grep tpm
```  

**输出结果说明：**  

- 如果在输出中看到 **`tpm0`** 和 **`tpmrm0`**，则表示 **TPM（可信平台模块）** 已成功检测并可用。  
- 这表明 TPM 硬件已被识别并可访问，你可以继续进行与 TPM 相关的功能或应用。  

**如果这些设备被列出，则说明 TPM 模块连接正常，可以使用。**  

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

- **`-b 1`** → 使用槽 1。  
- **`-s 192`** → 将序列号大小设置为 **192 位**。  
- **`-c 'serial'`** → 生成随机序列号。  

**预期输出：**  

生成的序列号将会显示，例如：  

```bash
01235595d3d621f0ee
```  

此方法可以与 **ATECC608A** 设备进行交互，使你能够高效地执行生成随机序列号等操作。  

## 与 EEPROM 交互

要对 **EEPROM**（电可擦可编程只读存储器）进行读写操作，请按照以下步骤操作：  

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

## 检查 SSD 检测情况

要列出所有已连接的磁盘（包括 SSD），请使用以下命令：  

```bash
sudo fdisk -l
```  

此命令将显示所有已检测到的存储设备列表。查找代表你 SSD 的条目，通常标记为：  

- `/dev/sda`  
- `/dev/sdb`  
- `/dev/sdc` 等。  

确定正确的 SSD 条目后，你可以根据需要继续进行 **分区、格式化或其他磁盘管理任务**。

## UPS 安全关机

**CPU 与直流电源输入之间的 GPIO6 连接** 用于在电源掉电时通知 CPU。在超级电容的能量耗尽之前，CPU 必须通过脚本执行 **紧急任务**，然后发起 **安全关机（`$shutdown`）**。  

**替代关机方式**  
另一种使用此功能的方式是：当 **GPIO 引脚状态发生变化时触发关机**。指定的 GPIO 引脚被配置为 **输入按键**，产生 **KEY_POWER 事件**。这些事件由 **systemd-logind** 处理，并自动发起系统关机。  

要启用此功能，请参考 `/boot/overlays/README`，然后通过添加以下内容来修改 `/boot/firmware/config.txt`：  

```ini
dtoverlay=gpio-shutdown,gpio_pin=6,active_low=1
```

:::note

1. 关于 **UPS 功能细节**，请联系我们。  
2. **告警信号为低电平有效（active LOW）**。  

:::
---

#### 用于安全关机的 Python 代码  

以下 Python 脚本演示了 **如何通过 GPIO6 检测超级电容 UPS 的工作模式**。当系统检测到断电事件时，它会 **自动保存数据并安全关机**。  

```python
import RPi.GPIO as GPIO
import time
import os

num = 0

GPIO.setmode(GPIO.BCM)  # Set GPIO numbering mode
GPIO.setup(6, GPIO.IN, pull_up_down=GPIO.PUD_UP)  # Set GPIO6 as input with pull-up resistor
GPIO.add_event_detect(6, GPIO.FALLING, bouncetime=500)  # Add debounce time for stabilization

while True:
    if GPIO.event_detected(6):
        print("...External power off detected...")
        os.system("sync")  # Ensure data is written to disk
        print("...Saving data...")
        time.sleep(3)
        os.system("sync")  # Save data again

        while num < 5:
            print(f"--- {5 - num} seconds remaining ---")
            num += 1
            time.sleep(1)

        os.system("sudo shutdown -h now")  # Execute system shutdown
```

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
