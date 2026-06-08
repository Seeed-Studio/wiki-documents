---
description: 本维基介绍如何在 Seeed reComputer J4012 Classic 上连接和驱动 SPI 显示屏，并以 ST7789 SPI LCD 为例进行说明。  
title: 在 reComputer J4012 Classic 上使用 SPI 显示屏  
keywords:
- Jetson
- reComputer
- J4012 Classic
- SPI
- ST7789
- LCD  
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_spi_getting_start
sku: 110110145
last_update:
  date: 06/01/2026
  author: HaoChen
createdAt: '2026-06-01'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/cn/jetson_spi_getting_start/

---

# 在 reComputer J4012 Classic 上使用 SPI 显示屏

## 介绍

本维基介绍如何在 Seeed reComputer J4012 Classic 上连接和驱动 SPI 显示屏。内容涵盖通过 40 针排针使用 SPI 显示屏的基本流程，包括硬件连线、SPI 接口配置、设备节点检查、依赖安装、编译 C++ 示例以及运行简单的显示测试。

在本指南中，以 ST7789 SPI LCD 显示屏为示例。对于其他 SPI 显示模块，例如 ST7735 或 ILI9341，整体流程类似，但连线细节、显示分辨率、初始化序列和驱动参数可能会有所不同。

本指南中的方法也可以作为其他 SPI 显示应用的参考。 

## 硬件准备

### 所需硬件

| 项目                         | 描述                                                  |
| ---------------------------- | ----------------------------------------------------- |
| reComputer J4012 Classic     | 基于 Jetson 的边缘 AI 计算机                         |
| SPI 显示模块                 | 本指南以 ST7789 SPI LCD 显示屏为示例                 |
| 杜邦线                       | 用于将显示屏连接到 40 针排针                         |
| HDMI 显示器或 SSH 终端       | 用于配置和测试设备                                   |

### 所需软件

| 软件            | 描述                                                  |
| ---------------- | ----------------------------------------------------- |
| JetPack / Ubuntu | 运行在 reComputer J4012 Classic 上的操作系统         |
| g++              | 用于编译 C++ 示例                                     |
| spidev           | Linux SPI 用户空间接口                                |
| sysfs GPIO       | 用于控制 DC 和 RES 等 GPIO 引脚                      |

## 硬件连接

### 40 针排针

reComputer J4012 Classic 提供了一个 40 针扩展排针。可以通过该排针使用 SPI 信号和 GPIO 引脚来连接小型显示模块。

![40-pin header pinout](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_01.png)

图 1. reComputer J4012 Classic 的 40 针排针引脚分布

### SPI 显示连线示例：ST7789

在本指南中，使用 ST7789 SPI 显示屏作为示例显示模块。请根据下表将显示屏连接到 40 针排针。

| ST7789 引脚 | J4012 Classic 40 针引脚 | 功能         | 描述                                         |
| ---------- | ------------------------ | ------------ | -------------------------------------------- |
| GND        | Pin 6                    | GND          | 地                                           |
| VCC        | Pin 1                    | 3.3V         | 显示屏电源输入                               |
| SCL        | Pin 23                   | SPI SCLK     | SPI 时钟信号                                 |
| SDA        | Pin 19                   | SPI MOSI     | 从 J4012 Classic 到显示屏的 SPI 数据         |
| RES        | Pin 31                   | GPIO / PQ.06 | 硬件复位信号                                 |
| DC         | Pin 29                   | GPIO / PQ.05 | 数据 / 命令选择                              |
| CS         | Pin 24                   | SPI CS       | SPI 片选                                     |
| BLK        | Pin 17                   | 3.3V         | 背光电源，常亮                               |

![ST7789 SPI display wiring](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_02.png)

图 2. reComputer J4012 Classic 与 ST7789 SPI 显示屏之间的连线

## 启用 SPI 接口

在运行显示示例之前，需要先启用 40 针排针上的 SPI 接口。

打开 Jetson-IO 配置工具：

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

选择 40 针排针配置菜单。

![Jetson-IO main menu](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_03.png)

图 3. Jetson-IO 主菜单

![Configure header pins manually](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_04.png)  

图 4. 选择 "Configure header pins manually"

![Enable spi1 function](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_05.png)  

图 5. 在 40 针排针上启用 spi1 功能

保存配置并重启设备：

```bash
sudo reboot
```

设备重启后，加载 `spidev` 内核模块：

```bash
sudo modprobe spidev
```

此步骤可确保在检查或访问 `/dev/spidev*` 之前，Linux 用户空间 SPI 驱动已可用。

## 检查 SPI 设备

设备重启后，检查 SPI 设备节点是否已生成：

```bash
ls /dev/spidev*
```

如果 SPI 已正确启用，你可能会看到类似如下的输出：

```bash
/dev/spidev0.0
/dev/spidev0.1
```

![Check SPI device node](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_picture_06.png)

图 6. SPI 设备节点已成功生成

在本指南中，ST7789 显示屏使用连接到 Pin 19、Pin 23 和 Pin 24 的 SPI 信号。示例代码默认使用 `/dev/spidev0.0`。如果你的系统生成了不同的 SPI 设备节点，请在代码中修改 SPI 设备路径。

## 安装依赖

更新软件包列表：

```bash
sudo apt update
```

安装 C++ 编译器：

```bash
sudo apt install -y g++
```

检查 SPI 设备节点是否存在：

```bash
ls /dev/spidev*
```

## 导出 GPIO 引脚

在运行显示示例之前，需要导出 `DC` 和 `RES` 所使用的 GPIO 引脚。示例通过 sysfs GPIO 接口控制这两个引脚。

在本指南中：

| 信号 | 40 针引脚 | GPIO 名称 | GPIO 编号 |
| ------ | ---------- | --------- | ----------- |
| DC     | Pin 29     | `PQ.05`   | `453`       |
| RES    | Pin 31     | `PQ.06`   | `454`       |

通过 `/sys/class/gpio/export` 导出 GPIO 时，需要使用 GPIO 编号而不是 GPIO 名称。在本指南中，GPIO `453` 对应 `PQ.05`，GPIO `454` 对应 `PQ.06`：

```bash
sudo sh -c 'echo 453 > /sys/class/gpio/export'
sudo sh -c 'echo 454 > /sys/class/gpio/export'
```

导出后，相应的 GPIO 节点应显示为 `PQ.05` 和 `PQ.06`。检查 GPIO 节点是否存在：

```bash
ls /sys/class/gpio/PQ.05
ls /sys/class/gpio/PQ.06
```

## 运行 ST7789 显示示例

本节使用一个 C++ 示例来验证 ST7789 SPI 显示屏能否在 reComputer J4012 Classic 上正常工作。

该示例执行以下操作：

1. 打开 SPI 设备 `/dev/spidev0.0`。

2. 配置 SPI 模式、每字传输位数以及 SPI 速度。

3. 通过 sysfs GPIO 控制 `DC` 和 `RES` 引脚。

4. 初始化 ST7789 显示控制器。

5. 持续使用不同的 RGB565 颜色填充屏幕。

本示例所使用的连线如下所示。

| 信号    | 40 针引脚 | GPIO / 设备              |
| -------- | ---------- | ------------------------ |
| SPI SCLK | Pin 23     | SPI 时钟                 |
| SPI MOSI | Pin 19     | SPI MOSI                 |
| SPI CS   | Pin 24     | SPI CS                   |
| RES      | Pin 31     | `/sys/class/gpio/PQ.06` |
| DC       | Pin 29     | `/sys/class/gpio/PQ.05` |
| BLK      | Pin 17     | 3.3V                     |

创建一个名为 `st7789_spi.cpp` 的文件：

```bash
nano st7789_spi.cpp
```

添加以下 C++ 示例代码：

```cpp
#include <iostream>
#include <fcntl.h>
#include <unistd.h>
#include <sys/ioctl.h>
#include <linux/spi/spidev.h>
#include <cstdint>
#include <cstring>

int spi_fd = -1;
int dc_fd = -1;
int res_fd = -1;

// GPIO paths for reComputer J4012 Classic
// DC  -> Pin 29 -> PQ.05
// RES -> Pin 31 -> PQ.06
const char* DC_DIR_PATH  = "/sys/class/gpio/PQ.05/direction";
const char* DC_VAL_PATH  = "/sys/class/gpio/PQ.05/value";
const char* RES_DIR_PATH = "/sys/class/gpio/PQ.06/direction";
const char* RES_VAL_PATH = "/sys/class/gpio/PQ.06/value";

bool write_file(const char* path, const char* value)
{
    int fd = open(path, O_WRONLY);
    if (fd < 0) {
        std::cerr << "open failed: " << path << std::endl;
        return false;
    }

    write(fd, value, strlen(value));
    close(fd);
    return true;
}

bool init_gpios()
{
    if (!write_file(DC_DIR_PATH, "out")) return false;
    if (!write_file(RES_DIR_PATH, "out")) return false;

    dc_fd = open(DC_VAL_PATH, O_WRONLY);
    res_fd = open(RES_VAL_PATH, O_WRONLY);

    if (dc_fd < 0 || res_fd < 0) {
        std::cerr << "open gpio value failed" << std::endl;
        return false;
    }

    return true;
}

void gpio_write(int fd, int value)
{
    lseek(fd, 0, SEEK_SET);
    write(fd, value ? "1" : "0", 1);
}

void WriteCommand(uint8_t cmd)
{
    gpio_write(dc_fd, 0);
    write(spi_fd, &cmd, 1);
}

void WriteData(uint8_t data)
{
    gpio_write(dc_fd, 1);
    write(spi_fd, &data, 1);
}

void WriteDataBuf(const uint8_t* data, size_t len)
{
    gpio_write(dc_fd, 1);

    const size_t CHUNK_SIZE = 4096;
    size_t bytes_sent = 0;

    while (bytes_sent < len) {
        size_t current_chunk = (len - bytes_sent > CHUNK_SIZE) ? CHUNK_SIZE : (len - bytes_sent);

        struct spi_ioc_transfer tr;
        std::memset(&tr, 0, sizeof(tr));

        tr.tx_buf = (unsigned long)(data + bytes_sent);
        tr.rx_buf = 0;
        tr.len = current_chunk;
        tr.speed_hz = 24000000;
        tr.bits_per_word = 8;

        if (ioctl(spi_fd, SPI_IOC_MESSAGE(1), &tr) < 0) {
            std::cerr << "SPI chunk transfer failed at " << bytes_sent << std::endl;
            return;
        }

        bytes_sent += current_chunk;
    }
}

void ST7789_Reset()
{
    gpio_write(res_fd, 0);
    usleep(200000);

    gpio_write(res_fd, 1);
    usleep(200000);
}

void ST7789_Init()
{
    ST7789_Reset();

    WriteCommand(0x11);       // Sleep Out
    usleep(120000);

    WriteCommand(0x3A);       // Pixel Format Set
    WriteData(0x05);          // RGB565

    WriteCommand(0x36);       // Memory Access Control
    WriteData(0x08);          // Default direction

    WriteCommand(0x21);       // Display Inversion ON

    WriteCommand(0x29);       // Display ON
    usleep(20000);
}

void ST7789_SetWindow(uint16_t x0, uint16_t y0, uint16_t x1, uint16_t y1)
{
    WriteCommand(0x2A);       // Column Address Set
    WriteData(x0 >> 8);
    WriteData(x0 & 0xFF);
    WriteData(x1 >> 8);
    WriteData(x1 & 0xFF);

    WriteCommand(0x2B);       // Row Address Set
    WriteData(y0 >> 8);
    WriteData(y0 & 0xFF);
    WriteData(y1 >> 8);
    WriteData(y1 & 0xFF);

    WriteCommand(0x2C);       // Memory Write
}

void ST7789_FillColor(uint16_t color)
{
    const int width = 240;
    const int height = 320;

    ST7789_SetWindow(0, 0, width - 1, height - 1);

    uint8_t screen_buf[height * width * 2];

    uint8_t high = color >> 8;
    uint8_t low = color & 0xFF;

    for (int i = 0; i < height * width * 2; i += 2) {
        screen_buf[i] = high;
        screen_buf[i + 1] = low;
    }

    WriteDataBuf(screen_buf, sizeof(screen_buf));
}

bool init_spi()
{
    spi_fd = open("/dev/spidev0.0", O_RDWR);
    if (spi_fd < 0) {
        std::cerr << "open /dev/spidev0.0 failed" << std::endl;
        return false;
    }

    uint8_t mode = SPI_MODE_0;
    uint8_t bits = 8;
    uint32_t speed = 24000000;

    ioctl(spi_fd, SPI_IOC_WR_MODE, &mode);
    ioctl(spi_fd, SPI_IOC_WR_BITS_PER_WORD, &bits);
    ioctl(spi_fd, SPI_IOC_WR_MAX_SPEED_HZ, &speed);

    return true;
}

uint16_t Rainbow_HSV_To_RGB565(int h)
{
    float r = 0, g = 0, b = 0;

    int sector = h / 60;
    float fractional = (h % 60) / 60.0f;

    float x = 1.0f - fractional;
    float y = fractional;

    switch (sector) {
        case 0: r = 1.0f; g = y;    b = 0.0f; break;
        case 1: r = x;    g = 1.0f; b = 0.0f; break;
        case 2: r = 0.0f; g = 1.0f; b = y;    break;
        case 3: r = 0.0f; g = x;    b = 1.0f; break;
        case 4: r = y;    g = 0.0f; b = 1.0f; break;
        case 5: r = 1.0f; g = 0.0f; b = x;    break;
        default: r = 0.0f; g = 0.0f; b = 0.0f; break;
    }

    uint8_t R8 = static_cast<uint8_t>(r * 255);
    uint8_t G8 = static_cast<uint8_t>(g * 255);
    uint8_t B8 = static_cast<uint8_t>(b * 255);

    return ((R8 >> 3) << 11) | ((G8 >> 2) << 5) | (B8 >> 3);
}

int main()
{
    uint16_t color = 0x001F;
    int i = 0;

    std::cout << "Init SPI..." << std::endl;
    if (!init_spi()) return -1;

    std::cout << "Init GPIO..." << std::endl;
    if (!init_gpios()) return -1;

    std::cout << "Init ST7789..." << std::endl;
    ST7789_Init();

    std::cout << "Fill 240x320 Color..." << std::endl;

    while (1) {
        color = Rainbow_HSV_To_RGB565(i++ % 360);
        ST7789_FillColor(color);
        usleep(10000);
    }

    close(spi_fd);
    close(dc_fd);
    close(res_fd);

    return 0;
}
```

编译示例程序：

```bash
g++ st7789_spi.cpp -o st7789_spi
```

运行示例程序：

```bash
sudo ./st7789_spi
```

如果接线和 SPI 配置正确，ST7789 显示屏应会持续刷新为不同的颜色。

![ST7789 display demo result](https://files.seeedstudio.com/wiki/Jetson_SPI_Getting_Start/reComputer-J4012-Classic_SPI_gif_01.gif)

图 7. ST7789 显示屏示例程序结果

## 代码说明

### SPI 初始化

示例程序打开 `/dev/spidev0.0` 并按如下方式配置 SPI 接口。

| 参数         | 值               |
| ------------- | ---------------- |
| SPI 设备      | `/dev/spidev0.0` |
| SPI 模式      | `SPI_MODE_0`     |
| 每字节位数    | `8`              |
| SPI 速度      | `24000000 Hz`    |

如果你的系统生成了不同的 SPI 设备节点，请修改示例代码中的以下行：

```cpp
spi_fd = open("/dev/spidev0.0", O_RDWR);
```

例如，如果你的设备节点是 `/dev/spidev1.0`，请将其修改为：

```cpp
spi_fd = open("/dev/spidev1.0", O_RDWR);
```

### GPIO 控制

示例程序使用 sysfs GPIO 来控制 `DC` 和 `RES` 引脚。

| 信号 | 40-pin 引脚 | sysfs GPIO 路径        |
| ------ | ---------- | ----------------------- |
| DC     | Pin 29     | `/sys/class/gpio/PQ.05` |
| RES    | Pin 31     | `/sys/class/gpio/PQ.06` |

`DC` 引脚用于在命令模式和数据模式之间切换。`RES` 引脚用于复位 ST7789 显示屏。

### ST7789 初始化

示例程序使用以下命令初始化 ST7789 显示屏。

| 命令   | 描述                 |
| ------- | --------------------- |
| `0x11`  | 退出睡眠模式         |
| `0x3A`  | 像素格式设置         |
| `0x05`  | RGB565 格式          |
| `0x36`  | 存储器访问控制       |
| `0x21`  | 打开显示反相         |
| `0x29`  | 打开显示             |

### 全屏填充测试

示例程序使用 RGB565 格式填充整个屏幕。示例中使用的显示分辨率为：

```cpp
const int width = 240;
const int height = 320;
```

如果你的 ST7789 显示屏使用不同的分辨率，请根据实际屏幕尺寸修改这些数值。

### SPI 数据传输

整个屏幕缓冲区大于一次小的 SPI 传输。因此，示例程序分块发送显示数据：

```cpp
const size_t CHUNK_SIZE = 4096;
```

这样可以避免传输大小限制，并使全屏刷新更加稳定。

## 故障排查

### 未找到 `/dev/spidev*` 设备

可能原因：

1. SPI 接口未启用。

2. Jetson-IO 配置未保存。

3. 启用 SPI 后未重启设备。

4. 设备树未导出 SPI 设备节点。

5. 系统镜像未包含预期的 SPI 配置。

建议检查：

```bash
ls /dev/spidev*
```

如果仍未找到 SPI 设备，请再次运行 Jetson-IO 并检查是否启用了 SPI。

### 访问 SPI 或 GPIO 时权限被拒绝

如果在运行 C++ 示例程序时看到权限错误，请尝试使用 `sudo` 运行：

```bash
sudo ./st7789_spi
```

你也可以检查 SPI 设备和 GPIO 节点的权限：

```bash
ls -l /dev/spidev*
ls -l /sys/class/gpio/PQ.05/value
ls -l /sys/class/gpio/PQ.06/value
```

### GPIO 路径不存在

如果 `/sys/class/gpio/PQ.05` 或 `/sys/class/gpio/PQ.06` 不存在，则说明在你的系统镜像上 GPIO 命名或导出方式可能不同。

请检查可用的 GPIO 节点：

```bash
ls /sys/class/gpio/
```

然后根据你的实际系统修改示例代码中的 GPIO 路径。

### SPI 可以打开但显示屏无显示

可能原因：

1. 显示屏接线不正确。

2. SPI 设备路径不正确。

3. CS、DC 或 RES 引脚连接不正确。

4. 显示控制器不是 ST7789。

5. 显示屏需要不同的初始化序列。

6. 背光引脚未供电。

建议检查：

1. 确认 `VCC` 连接到 Pin 1。

2. 确认 `GND` 连接到 Pin 6。

3. 确认 `BLK` 连接到 Pin 17，且背光已点亮。

4. 确认 `SCL`、`SDA` 和 `CS` 分别连接到 Pin 23、Pin 19 和 Pin 24。

5. 确认 `RES` 和 `DC` 分别连接到 Pin 31 和 Pin 29。

6. 降低 SPI 速度后再次测试。

7. 从显示模块数据手册中确认显示控制器型号。

### 背光亮起但无图像显示

如果背光亮起但没有图像显示，说明电源接线可能正确，但 SPI 通信或显示初始化可能不正确。

请检查：

1. 是否使用了正确的 SPI 设备。

2. DC 和 RES 引脚是否配置正确。

3. 显示驱动是否与 ST7789 控制器匹配。

4. 屏幕分辨率是否正确。

5. 显示模块是否需要设置行或列偏移。

### 图像颜色异常

可能原因：

1. RGB 与 BGR 颜色顺序不匹配。

2. 显示反相设置不同。

3. `MADCTL` 参数不适用于你的面板。

4. 显示模块使用了略有不同的 ST7789 初始化序列。

建议解决方案：

1. 尝试更改 `MADCTL` 的取值。

2. 尝试启用或禁用显示反相。

3. 查阅 ST7789 显示模块数据手册。

4. 确认你的模块使用的是 RGB 还是 BGR 颜色顺序。

### 图像方向不正确

如果图像被旋转或镜像，请修改初始化函数中的 `MADCTL` 命令参数：

```cpp
WriteCommand(0x36);
WriteData(0x08);
```

正确的取值取决于显示模块的安装方向。

### 显示刷新速度慢

可能原因：

1. SPI 时钟速度过低。

2. 程序每次都刷新整个屏幕。

3. 显示模块本身的刷新性能有限。

4. C++ 示例程序使用的是简单的全屏填充方式进行验证。

建议解决方案：

1. 逐步提高 SPI 时钟速度。

2. 避免不必要的全屏刷新。

3. 如果你的应用支持，只刷新发生变化的区域。

4. 仅将当前的颜色填充测试作为基础的硬件验证示例程序使用。

## 总结

在本 wiki 中，我们介绍了如何通过 40-pin 排针将 SPI 显示屏连接到 Seeed reComputer J4012 Classic。通用的 SPI 显示屏工作流程包括连接显示屏、启用 SPI 接口、检查 SPI 设备节点、安装依赖、编译 C++ 示例程序以及运行显示测试。

本指南中使用 ST7789 SPI LCD 作为示例显示模块。对于其他 SPI 显示屏，整体流程类似，但显示驱动、分辨率、初始化序列和接线细节需要根据实际显示模块进行调整。

## 资源

- [NVIDIA® Jetson Orin™ NX 16GB AI Device - reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)

- [reComputer J401x 数据手册](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)

- [NVIDIA Jetson.GPIO 映射](https://github.com/NVIDIA/jetson-gpio/blob/master/lib/python/Jetson/GPIO/gpio_pin_data.py)

- [Linux spidev 用户空间 API](https://docs.kernel.org/spi/spidev.html)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
