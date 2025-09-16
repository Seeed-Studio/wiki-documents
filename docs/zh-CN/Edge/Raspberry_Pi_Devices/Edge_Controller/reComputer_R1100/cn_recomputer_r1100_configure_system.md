---
description: 了解如何在安装设备后配置和测试 reComputer R1100 系列的硬件组件。本 wiki 涵盖 GPIO 映射、USER LED 测试、SPI 通信、Wi-Fi 和蓝牙扫描、LoRa®、4G、通过 Mini-PCIe 的 Zigbee、RS485、RS232、DI/DO 测试以及用于安全关机的 UPS。
title: 配置 reComputer R1100
keywords:
- Raspberry pi
- Edge Controller
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg
slug: /cn/recomputer_r1100_configure_system
last_update:
  date: 2/26/2024
  author: Kasun Thushara
---

## 概述

了解如何在安装设备后配置和测试 reComputer R1100 系列的硬件组件。本 wiki 涵盖 GPIO 映射、USER LED 测试、SPI 通信、Wi-Fi 和蓝牙扫描、LoRa®、4G、通过 Mini-PCIe 的 Zigbee、RS485、RS232、DI/DO 测试、用于安全关机的 UPS 等内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 查询 GPIO 映射和偏移量

要检查 GPIO 映射和偏移量，请按照以下步骤操作：

- **在终端中运行以下命令**

```bash
cat /sys/kernel/debug/gpio
```

**此命令将显示 GPIO 映射和偏移量**，为调试或配置 GPIO 引脚提供重要信息。

## 控制 LED 指示灯

reComputer R1100 提供三个 **LED 指示灯**，分别为**红色、蓝色和绿色**。您可以使用以下命令来控制它们：

**1. 导航到 LED 目录**  

```bash
cd /sys/class/leds/
ls
```

这将列出可用的LED。

**2. 通过写入brightness文件来启用LED**  
首先切换到**超级用户模式**：  

```bash
sudo su
```

Then, turn on the LEDs:  

```bash
echo 1 > /sys/class/leds/led-red/brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

This will **light up** the corresponding LED.

**3. Turn off LEDs (optional)**  
To **turn off** a specific LED, use:

```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## 测试 SPI 通信

要验证 **SPI 通信**，您可以通过**短接 TPM 模块的 MISO 和 MOSI 引脚**来执行环回测试。这种方法确保在 MOSI（主出从入）上发送的数据在 MISO（主入从出）上被接收。

**分步指南**

**1. 连接到互联网**  
在继续之前，请确保您的设备已连接到网络。

**2. 克隆 `spidev-test` 仓库**  

```bash
git clone https://github.com/rm-hull/spidev-test.git
```

**3. Navigate into the directory**  

```bash
cd spidev-test
```

**4. Compile the `spidev_test.c` program**  

```bash
gcc spidev_test.c -o spidev_test
```

**5. Run the SPI test**

```bash
./spidev_test -D /dev/spidev0.1 -v -p "hello"
```

- `-D /dev/spidev0.1` → 指定 SPI 设备  
- `-v` → 启用详细输出  
- `-p "hello"` → 发送字符串 `"hello"`  

**6. 环回测试（可选）**  

- 在运行测试之前，**将 TPM 模块的 MISO 和 MOSI 引脚短接**。
- 如果 SPI 总线工作正常，输出应显示传输的数据被**正确接收**。

## Wi-Fi 扫描

要列出可用的 Wi-Fi 网络及其详细信息，请运行：  

```bash
sudo iwlist wlan0 scan
```

- 此命令扫描所有附近的 Wi-Fi 网络并显示其 SSID、信号强度和加密类型。

## 蓝牙扫描

要扫描蓝牙设备，请按照以下步骤操作：

**打开蓝牙控制界面：**  

```bash
sudo bluetoothctl
```

**Enable scanning:**  

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

**Navigate to the cloned directory:**

```bash
cd sx1302_hal
```

**Modify the configuration file:**  

Open the I2C device configuration file:  

```bash
sudo vim ./libloragw/inc/loragw_i2c.h
```

Change this line:  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

To:  

```c
#define I2C_DEVICE "/dev/i2c-3"
```

**Compile the code:**

```bash
sudo make
```

**Modify the reset script:**

Open the `reset_lgw.sh` script:  

```bash
sudo vim ./tools/reset_lgw.sh
```

Update the pin configurations:

```bash
SX1302_RESET_PIN=580    # SX1302 reset  
SX1302_POWER_EN_PIN=578 # SX1302 power enable  
SX1261_RESET_PIN=579    # SX1261 reset (LBT/Spectral Scan)  
```

**Copy the reset script to the packet forwarder directory:**  

```bash
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**更新 LoRaWAN® 配置文件中的默认 SPI 端口：**

修改 `global_conf.json.sx1250.US915` 文件：  

```bash
sed -i 's/spidev0.0/spidev0.1/g' global_conf.json.sx1250.US915
```

**Start the LoRaWAN® module:**  

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

### LoRa® USB 配置

如果您使用的是 LoRa® USB 模块而不是 LoRa® SPI，请按照以下步骤操作。大多数命令与 LoRa® SPI 相同，除了最后一步。

**拉高 SX1302 复位引脚**

```bash
echo 1 > /sys/class/gpio/gpio580/value
```

**启动 LoRaWAN® USB 模块**

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

 LoRa® USB 现在已在 reComputer R1100 上配置并运行

## 通过 Mini-PCIe 使用 4G 蜂窝网络

要通过 `minicom` 使用 AT 命令与 4G 模块交互，请按照以下步骤操作：

**使用适当的串口和波特率打开 Minicom：**  

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

此命令以指定的串口（`/dev/ttyUSB2`）和波特率 **115200** 打开 Minicom。

**向 4G 模块发送 AT 命令：**

Minicom 打开后，您可以开始向 4G 模块发送 **AT 命令**。例如：  

```bash
AT
```

此命令检查模块是否响应。如果模块工作正常，您应该收到 **"OK"** 响应。

**使用 4G 模块拨打电话号码：**

要拨打电话号码，请使用 `ATD` 命令后跟电话号码：  

```bash
ATD<phone_number>;
```

- 将 `<phone_number>` 替换为您想要拨打的电话号码。
- 确保在命令末尾包含一个**分号 (;)**，以表示电话号码的结束。

## 通过 Mini-PCIe 的 Zigbee

要测试两个 Zigbee 模块之间的 **Zigbee 通信**，请按照以下步骤操作：

**检查可用串口**

运行以下命令来检查可用的串口：  

```bash
cat /dev/ttyUSB*
```

**Install a Serial Communication Tool**

Install **CuteCom**, a graphical serial terminal, using:  

```bash
sudo apt-get install cutecom
```

**配置第一个 Zigbee 模块（协调器）**  

- 打开 **CuteCom** 并为**第一个串口**进行配置。  
- **设置：**
  - **波特率：** 115200  
  - **在界面底部启用"Hex output"**。  

**配置为协调器的步骤：**  

1. **设置为协调器：** 发送命令：  

   ```  
   55 04 00 05 00 05  
   ```  

   - Expected response:  

   ```  
   55 04 00 05 00 05  
   ```  

2. **重置设备：**  
   - 按下**重置按钮**，或  
   - 发送命令：  

     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  

3. **网络组建：**
   - 发送命令：  

   ```  
   55 03 00 02 02  
   ```  

**配置第二个 Zigbee 模块（路由器）**  

- 打开另一个 **CuteCom** 实例，使用相同的设置为**第二个串口**进行配置。  

**配置为路由器的步骤：**  

1. **设置为路由器：** 发送命令：  

   ```  
   55 04 00 05 01 04  
   ```  

   - 预期响应：  

   ```  
   55 04 00 05 00 05  
   ```  

2. **重置设备：**  
   - 按下**重置按钮**，或  
   - 发送命令：  

     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  

3. **网络组建：** 发送命令：  

   ```  
   55 03 00 02 02  
   ```  

**Check Device Status**  
To verify the device status, send:  

```  
55 03 00 00 00  
```  

 Expected response:  

```  
55 2A 00 00 00 01 XX XX XX XX  
```  

- `XX` 代表设备特定信息。

**进入透明模式**

如果**网络组建**成功，通过发送以下命令启用**透明模式**：  

```  
55 07 00 11 00 03 00 01 13  
```  

**Both modules must be in transparent mode for direct communication.**  
To **exit transparent mode**, send:  

```  
+++  
```

**附加说明**

- 如果**路由器配置失败**，设备可能已经是**协调器**。要离开网络，请发送：  

  ```  
  55 07 00 04 02 XXXX XX  
  ```  

- 要**测试传输功率**，请使用：  
  - **查询功率：**  

    ```  
    55 04 0D 00 00 0D  
    ```  

  - **设置功率：**  

    ```  
    55 04 0D 01 XXXX  
    ```  

确保您将 `/dev/ttyUSB*` 替换为每个 Zigbee 模块的**正确串口**。  
仔细按照这些步骤建立两个模块之间的**成功 Zigbee 通信**。

以下是经过纠正和良好结构化的版本，改进了语法、可读性和格式：  

---

## RS485 测试

reComputer R1100 包含**两个 RS485 端口**。以下是它们对应的 **COM 端口**和**设备文件**：  

| **RS485 端口** | **COM 端口** | **丝印标签** | **设备文件** |
|---------------|-------------|----------------------|----------------|
| **RS485_1**  | COM1        | A1 / B1 / GND       | `/dev/ttyACM0` |
| **RS485_2**  | COM2        | A2 / B2 / GND       | `/dev/ttyACM1` |

**测试 RS485 功能的步骤**  

**连接 RS485 端口**  

物理连接 **RS485_1 (A & B)** 到 **RS485_2 (A & B)**。  

**运行 RS485 测试程序**  

我们提供了一个测试程序来**验证数据传输**并测量两个 RS485 端口之间的速度。  

运行以下命令下载并执行测试程序：  

```bash
git clone https://github.com/ackPeng/R1100_TEST.git
cd R1100_TEST
gcc -o serial_test serial_test.c
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```

**测试说明**  

- 此程序**从 RS485_1 发送 1MB 数据**到 **RS485_2**。  
- 它**记录完成时间**并计算实际波特率。  
- **注意：** 实际波特率可能略低于理论波特率，这是正常现象。  

**请仔细按照以下步骤验证 reComputer R1100 上的 RS485 通信。**

## RS232 测试

reComputer R1100 具有**两个 RS232 端口**。以下是相应的 COM 端口和设备文件：  

| RS232 端口 | COM 端口 | 引脚映射 | 设备文件 |
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

   - 导航到目录：

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

此测试从 RS232_1 向 RS232_2 发送 **1MB 数据**，并测量完成时间和波特率。请注意，实际波特率可能略低于理论值，这是正常的。

## DI（数字输入）测试

reComputer R1100 包含 **两个数字输入（DI）端口**，可根据用户需求进行配置。

| **DI 端口数量** | **DI 端口** | **对应的扩展 GPIO** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DI1**     | **GPIO530**                    |
|                       | **DI2**     | **GPIO531**                    |

**DI 端口规格**  

- **输入类型：** PNP  
- **支持的输入电压：** **5VDC – 24VDC**  
- **电流：** **最高 1000mA**  

**测试 DI 功能的步骤**  

**确保正确连接**  

确保 reComputer R1100 的 **DI 端口**正确连接到**外部负载**，同时确保 **G_D** 端口连接到**电源 GND**。

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

**reComputer R1100** 包含 **两个数字输出（DO）端口**，可根据用户需求进行配置。  

| **DO 端口数量** | **DO 端口** | **对应的扩展 GPIO** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DO1**     | **GPIO532**                    |
|                       | **DO2**     | **GPIO533**                    |

**DO 端口规格**  

- **输出类型：** 晶体管  
- **支持的输出电压：** **高达 60VDC**  
- **电流容量：** **500mA**  

**测试 DO 功能的步骤**  

**确保正确连接**  
确认 reComputer R1100 的 **DO 端口** 已正确连接到 **外部负载**。

**由于 DO 端口是开集电极输出且没有驱动能力，请使用外部电阻将其上拉到电源。**

**设置输出电平**  
运行以下命令将输出设置为 **HIGH** 或 **LOW**：  

```bash
echo 532 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio532/direction
echo 1 > /sys/class/gpio/gpio532/value  # Set output to HIGH
echo 0 > /sys/class/gpio/gpio532/value  # Set output to LOW
```

## USB 集线器测试

要验证 **USB 集线器** 的功能，请按照以下步骤操作：

**检查是否检测到 USB 集线器**

运行以下命令列出所有连接的 USB 设备，包括集线器：  

```bash
lsusb
```

**验证 USB 集线器检测**

- 此命令将显示连接到系统的所有 **USB 设备** 的信息，包括 **USB 集线器**。
- 如果 USB 集线器 **工作正常**，其详细信息应出现在命令输出中。
- 如果集线器 **未列出**，可能是 **集线器本身或其与系统的连接** 存在问题。

**故障排除（如果未检测到 USB 集线器）**

- 检查 USB 集线器的 **物理连接**。
- 尝试将集线器连接到 **不同的 USB 端口**。
- 重启设备并重新运行 `lsusb`。
- 如果问题仍然存在，集线器可能有故障。

## RTC（实时时钟）测试

要验证 **reComputer R1100** 上的 **RTC 功能**，请按照以下步骤操作：

**禁用自动时间同步**

在测试 RTC 之前，停止并禁用自动时间同步以避免冲突：  

```bash
sudo systemctl stop systemd-timesyncd  
sudo systemctl disable systemd-timesyncd  
```

**手动设置 RTC 时间**

将 RTC 设置为特定的日期和时间（例如，2024年11月12日下午12:00）：  

```bash
sudo hwclock --set --date "2024-11-12 12:00:00"
```

**Sync RTC Time to the System**

Update the system time to match the RTC time:  

```bash
sudo hwclock --hctosys
```

**Verify the RTC Time**  
Check the current time stored in the RTC:  

```bash
sudo hwclock -r
```

此命令将显示RTC时间。

**测试RTC保持功能**  

- **断开RTC的电源**。  
- **等待几分钟**。  
- **重新连接电源**并使用以下命令再次检查RTC时间：  

  ```bash
  sudo hwclock -r
  ```

- 如果时间保持正确，则 RTC 工作正常。

## 看门狗定时器测试

要在 **reComputer R1100** 上测试**看门狗定时器**，请按照以下步骤操作：

**安装看门狗软件**

确保已安装看门狗软件包：  

```bash
sudo apt install watchdog
```

**Configure the Watchdog**  

Edit the **watchdog configuration file**:  

```bash
sudo apt-get install vim  # Install Vim if not already installed  
sudo vim /etc/watchdog.conf
```

Modify the configuration as follows:  

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

**Start the Watchdog Service**  
Enable and start the watchdog service:  

```bash
sudo systemctl start watchdog
```

**通过模拟系统挂起来测试看门狗**

触发**内核崩溃**以查看看门狗是否**自动重启**系统：  

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

**监控系统**  
检查系统是否在指定的**超时时间**后**自动重启**。  

**如果重启按预期发生，则看门狗功能正常。**  

## 通过 GPIO 控制蜂鸣器  

蜂鸣器映射到 GPIO 587。使用以下命令来开启和关闭它：  

**开启蜂鸣器：**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 1 > /sys/class/gpio/gpio587/value  
```  

**Turn off the buzzer:**  

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

Add the following line at the **end** of the file:  

```ini
dtoverlay=imx219,cam0
```

**Restart the System**

Reboot to apply the changes:  

```bash
sudo reboot
```

**Check Camera Detection**  

After restarting, verify if the camera is detected:  

```bash
libcamera-jpeg --list-cameras
```

---

**Test the Camera**  

Run the following command to activate the camera:  

```bash
rpicam-hello --timeout 0
```

**如果摄像头预览成功启动，设置就完成了！**

## TPM 2.0 连接检查

如果您已将 **TPM 2.0 模块** 连接到您的设备，您可以使用以下命令验证其检测：  

```bash
ls /dev | grep tpm
```  

**解释输出结果：**

- 如果您在输出中看到 **`tpm0`** 和 **`tpmrm0`**，这确认了 **TPM（可信平台模块）** 已成功检测并可用。
- 这表明 TPM 硬件已被识别并可访问，允许您继续进行 TPM 相关的功能或应用程序操作。

**如果设备被列出，您的 TPM 模块已正确连接并准备使用。**

## 与 ATECC608A 交互并生成随机序列号

要与 **ATECC608A** 设备通信并生成随机序列号，请按照以下步骤操作：

**克隆 `atecc-util` 仓库：**  

```bash
git clone https://github.com/wirenboard/atecc-util.git
```  

**Navigate to the `atecc-util` Directory:**  

```bash
cd atecc-util
```  

**Clone the `cryptoauthlib` Repository:**  

```bash
git clone https://github.com/wirenboard/cryptoauthlib.git
```  

**Compile the ATECC Utility:**

```bash
make
```  

**Generate a Random Serial Number:**  

```bash
./atecc -b 1 -s 192 -c 'serial'
```  

- **`-b 1`** → 使用插槽 1。  
- **`-s 192`** → 将序列号大小设置为 **192 位**。  
- **`-c 'serial'`** → 生成随机序列号。  

**预期输出：**  

生成的序列号将被显示，例如：  

```bash
01235595d3d621f0ee
```  

这种方法可以与 **ATECC608A** 设备进行交互，允许您高效地执行生成随机序列号等操作。

## 与 EEPROM 交互

要读取和写入 **EEPROM**（电可擦除可编程只读存储器）数据，请按照以下步骤操作：

**为 EEPROM 设备文件授予完全权限：**  

```bash
sudo chmod 777 /sys/bus/i2c/devices/6-0050/eeprom
```  

**Write Data to the EEPROM:**  

```bash
echo "This is a test string" > /sys/bus/i2c/devices/6-0050/eeprom
```  

**Read the EEPROM Contents in Hexadecimal Format:**  

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## 检查 SSD 检测

要列出所有连接的磁盘，包括 SSD，请使用以下命令：  

```bash
sudo fdisk -l
```  

此命令将显示所有检测到的存储设备列表。查找代表您的SSD的条目，通常标记为：

- `/dev/sda`  
- `/dev/sdb`  
- `/dev/sdc`，等等  

一旦您识别出正确的SSD条目，您就可以根据需要继续进行**分区、格式化或其他磁盘管理任务**。

## 用于安全关机的UPS

**CPU和DC电源输入**之间的**GPIO6**连接用于在电源断开时通知CPU。CPU必须在超级电容器的能量耗尽之前**通过脚本执行紧急任务**，然后启动**安全关机（`$shutdown`）**。

**替代关机方法**  
使用此功能的另一种方法是**在GPIO引脚状态改变时触发关机**。指定的GPIO引脚被配置为**输入键**，生成**KEY_POWER事件**。这些事件由**systemd-logind**处理，它会自动启动系统关机。

要启用此功能，请参考`/boot/overlays/README`，然后通过添加以下内容修改`/boot/firmware/config.txt`：  

```ini
dtoverlay=gpio-shutdown,gpio_pin=6,active_low=1
```

:::note

1. 有关 **UPS 功能详情**，请联系我们。
2. **报警信号为低电平有效**。

:::
---

#### 安全关机的 Python 代码

以下 Python 脚本演示了**如何通过 GPIO6 检测超级电容 UPS 的工作模式**。当系统检测到断电事件时，它会**自动保存数据并安全关机**。  

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

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
