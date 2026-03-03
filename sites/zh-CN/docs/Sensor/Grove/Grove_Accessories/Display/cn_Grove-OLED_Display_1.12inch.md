---
description: Grove - OLED 显示屏 1.12&#34
title: Grove - OLED 显示屏 1.12&#34
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-OLED_Display_1.12inch
sku: 101020452, 104030011
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/main.jpg" />
</div>

我们的全新 1.12 英寸 OLED 显示屏非常适合需要小型显示屏且支持 16 级灰度的场景。OLED 的可视部分对角线尺寸为 1.12 英寸，包含 96x96（版本 1.0）或 128x128（版本 2.0）灰度像素。由于显示屏使用 OLED 技术，因此无需背光，且对比度非常高。

此 OLED 使用 SSD1327（V1.0）或 SH1107G（V2.1）驱动芯片来管理显示屏。您可以通过 4 线 I2C（时钟、数据、电源和接地引脚）与驱动芯片通信。

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)

## 规格

* 通信模式：I2C
* 灰度显示：16 级灰度
* 支持正常和反色显示
* 支持连续水平滚动
* Grove 兼容接口

## 版本
---
| 产品版本                        | 变更                                                                                                                                                                                    | 发布日期       |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - OLED 显示屏 1.12" V1.0 | 初始版本                                                                                                                                                                                | 2012 年 3 月  |
| Grove - OLED 显示屏 1.12" V2.1 | 驱动 IC 从 SSD1327 更改为 SH1107G，灰度像素从 96X96 升级到 128X128                                                                                     | 2015 年 11 月 |

## 详细规格
---
| 项目                | 参数值            |
|---------------------|-------------------|
| 工作电压           | 3.3/5 V          |
| 点阵               | 96x96            |
| 显示颜色           | 16 级灰度        |
| OLED 显示屏        | LY120-96096      |
| 驱动芯片           | SSD1327Z         |
| 点大小             | 0.15(W)mm x 0.15(H)mm |
| 点间距             | 0.75(W)mm x 0.175(H)mm |
| 工作温度           | -40~70 oC        |

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台
| Arduino                                                                                             | 树莓派                                                                                             |
|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p> |

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南
### 使用 Arduino
#### 硬件

在这里，我们将通过一个简单的演示向您展示如何使用 Grove - OLED 显示屏。首先，您需要准备以下物品：

| Seeeduino V4 | Grove - OLED 显示屏 1.12`` | 基础扩展板 |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

这是一个易于使用的模块，您需要做的就是将模块连接到基础扩展板的 I2C 接口。模块有 4 个引脚，定义如下：

|引脚|功能  | 说明   | 电缆颜色 |
|--------|------|-----|---------------|
|pin1	| SCL | I2C 时钟 | 黄色 |
|pin2   | SDA| I2C 数据| 白色|
|pin3   | VCC  | 电源，5V/3.3V| 红色 |
|pin4	| GND  | 地线 | 黑色 |

**硬件概览**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/connection.jpg" />
</div>


#### 软件

- **步骤 1.** 通过 Grove 电缆将 Grove - OLED 显示屏 1.12'' 连接到基础扩展板的 **I2C** 接口。

- **步骤 2.** 打开 Arduino IDE 并通过库管理器 **(Sketch > Include Library > Manage Libraries)** 安装 u8g2 库。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **步骤 3.** 在搜索框中输入 "**u8g2**"，选择最新版本并点击 "Install" 按钮。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>


- **步骤 4.** 在 Arduino IDE 中上传以下演示代码。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_ncenB10_tr);
    u8g2.drawStr(0,24,"Hello World!");
  } while ( u8g2.nextPage() );
}
```

:::success
       如果一切正常，Grove - OLED 显示屏 1.12'' 的屏幕上将显示 "Hello World!"。
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/outcome.jpg" />
</div>


:::note
        如果您没有基础扩展板，[Seeeduino Vx 系列](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all) 具有 **I2C 接口**，也可以正常工作。
:::

#### U8g2 库介绍

U8g2 是一个用于嵌入式设备的单色图形库。U8g2 支持单色 OLED 和 LCD，包括我们的芯片 SSD1327/SH1107G。

Arduino 的 U8g2 库可以通过 Arduino IDE 的库管理器安装。U8g2 还包括 U8x8 库：

**U8g2**

- 包含所有图形处理功能（线条/框/圆形绘制）。
- 支持多种字体。字体高度几乎没有限制。
- 需要在微控制器中占用一些内存来渲染显示。

**U8x8**

- 仅支持文本输出（字符设备）。
- 仅允许适合 8x8 像素网格的字体。
- 直接写入显示屏。不需要在微控制器中使用缓冲区。

这里提供了 [**U8g2 库 Wiki**](https://github.com/olikraus/u8g2/wiki) 以及 [U8g2 API 参考](https://github.com/olikraus/u8g2/wiki/u8g2reference) 页面。

### 使用 Raspberry Pi（搭配 Grove 基础帽）
#### 硬件

- **步骤 1.** 本项目所需物品：

<div class="table-center">
	<table>
		<tr>
			<th>Raspberry Pi</th>
      <th>Grove 基础帽	</th>
      <th>Grove - OLED 显示屏 1.12''</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

- **步骤 2.** 将 Grove 基础帽插入 Raspberry Pi。
- **步骤 3.** 将 Grove - OLED 显示屏 1.12'' 连接到基础帽的 I2C 接口。
- **步骤 4.** 通过 USB 电缆将 Raspberry Pi 连接到电脑。

#### 软件
- **步骤 1.** 按照 [软件设置](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境，并在 Raspberry Pi 上安装 grove.py。
- **步骤 2.** 执行以下命令运行代码。

```
# Python3 的虚拟环境
virtualenv -p python3 env
source env/bin/activate
#输入命令
grove_lcd_1.2inches
```
以下是 sh1107g.py 的代码。

```python
'''
这是以下产品的代码：
    - `Grove - 16 x 2 LCD (黑底红字) <https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Re-p-3197.html>`_
    - `Grove - 16 x 2 LCD (黑底黄字) <https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yello-p-3198.html>`_
    - `Grove - 16 x 2 LCD (白底蓝字) <https://www.seeedstudio.com/Grove-16-x-2-LCD-White-on-Blu-p-3196.html>`_

示例：

    .. code-block:: python

        import time
        from grove.factory import Factory

        # LCD 16x2 字符
        lcd = Factory.getDisplay("JHD1802")
        rows, cols = lcd.size()
        print("LCD 型号: {}".format(lcd.name))
        print("LCD 类型 : {} x {}".format(cols, rows))

        lcd.setCursor(0, 0)
        lcd.write("hello world!")
        lcd.setCursor(0, cols - 1)
        lcd.write('X')
        lcd.setCursor(rows - 1, 0)
        for i in range(cols):
            lcd.write(chr(ord('A') + i))

        time.sleep(3)
        lcd.clear()
'''
from grove.display.base import *
# from upm.pyupm_lcd import *
from grove.i2c import Bus
import sys

# sphinx autoapi 必需
__all__ = ["SH1107G"]

BasicFont = [
        [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x00,0x5F,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x00,0x07,0x00,0x07,0x00,0x00,0x00],
        [0x00,0x14,0x7F,0x14,0x7F,0x14,0x00,0x00],
        [0x00,0x24,0x2A,0x7F,0x2A,0x12,0x00,0x00],
        [0x00,0x23,0x13,0x08,0x64,0x62,0x00,0x00],
        [0x00,0x36,0x49,0x55,0x22,0x50,0x00,0x00],
        [0x00,0x00,0x05,0x03,0x00,0x00,0x00,0x00],
        [0x00,0x1C,0x22,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x41,0x22,0x1C,0x00,0x00,0x00,0x00],
        [0x00,0x08,0x2A,0x1C,0x2A,0x08,0x00,0x00],
        [0x00,0x08,0x08,0x3E,0x08,0x08,0x00,0x00],
        [0x00,0xA0,0x60,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x08,0x08,0x08,0x08,0x08,0x00,0x00],
        [0x00,0x60,0x60,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x20,0x10,0x08,0x04,0x02,0x00,0x00],
        [0x00,0x3E,0x51,0x49,0x45,0x3E,0x00,0x00],
        [0x00,0x00,0x42,0x7F,0x40,0x00,0x00,0x00],
        [0x00,0x62,0x51,0x49,0x49,0x46,0x00,0x00],
        [0x00,0x22,0x41,0x49,0x49,0x36,0x00,0x00],
        [0x00,0x18,0x14,0x12,0x7F,0x10,0x00,0x00],
        [0x00,0x27,0x45,0x45,0x45,0x39,0x00,0x00],
        [0x00,0x3C,0x4A,0x49,0x49,0x30,0x00,0x00],
        [0x00,0x01,0x71,0x09,0x05,0x03,0x00,0x00],
        [0x00,0x36,0x49,0x49,0x49,0x36,0x00,0x00],
        [0x00,0x06,0x49,0x49,0x29,0x1E,0x00,0x00],
        [0x00,0x00,0x36,0x36,0x00,0x00,0x00,0x00],
        [0x00,0x00,0xAC,0x6C,0x00,0x00,0x00,0x00],
        [0x00,0x08,0x14,0x22,0x41,0x00,0x00,0x00],
        [0x00,0x14,0x14,0x14,0x14,0x14,0x00,0x00],
        [0x00,0x41,0x22,0x14,0x08,0x00,0x00,0x00],
        [0x00,0x02,0x01,0x51,0x09,0x06,0x00,0x00],
        [0x00,0x32,0x49,0x79,0x41,0x3E,0x00,0x00],
        [0x00,0x7E,0x09,0x09,0x09,0x7E,0x00,0x00],
        [0x00,0x7F,0x49,0x49,0x49,0x36,0x00,0x00],
        [0x00,0x3E,0x41,0x41,0x41,0x22,0x00,0x00],
        [0x00,0x7F,0x41,0x41,0x22,0x1C,0x00,0x00],
        [0x00,0x7F,0x49,0x49,0x49,0x41,0x00,0x00],
        [0x00,0x7F,0x09,0x09,0x09,0x01,0x00,0x00],
        [0x00,0x3E,0x41,0x41,0x51,0x72,0x00,0x00],
        [0x00,0x7F,0x08,0x08,0x08,0x7F,0x00,0x00],
        [0x00,0x41,0x7F,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x20,0x40,0x41,0x3F,0x01,0x00,0x00],
        [0x00,0x7F,0x08,0x14,0x22,0x41,0x00,0x00],
        [0x00,0x7F,0x40,0x40,0x40,0x40,0x00,0x00],
        [0x00,0x7F,0x02,0x0C,0x02,0x7F,0x00,0x00],
        [0x00,0x7F,0x04,0x08,0x10,0x7F,0x00,0x00],
        [0x00,0x3E,0x41,0x41,0x41,0x3E,0x00,0x00],
        [0x00,0x7F,0x09,0x09,0x09,0x06,0x00,0x00],
        [0x00,0x3E,0x41,0x51,0x21,0x5E,0x00,0x00],
        [0x00,0x7F,0x09,0x19,0x29,0x46,0x00,0x00],
        [0x00,0x26,0x49,0x49,0x49,0x32,0x00,0x00],
        [0x00,0x01,0x01,0x7F,0x01,0x01,0x00,0x00],
        [0x00,0x3F,0x40,0x40,0x40,0x3F,0x00,0x00],
        [0x00,0x1F,0x20,0x40,0x20,0x1F,0x00,0x00],
        [0x00,0x3F,0x40,0x38,0x40,0x3F,0x00,0x00],
        [0x00,0x63,0x14,0x08,0x14,0x63,0x00,0x00],
        [0x00,0x03,0x04,0x78,0x04,0x03,0x00,0x00],
        [0x00,0x61,0x51,0x49,0x45,0x43,0x00,0x00],
        [0x00,0x7F,0x41,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x02,0x04,0x08,0x10,0x20,0x00,0x00],
        [0x00,0x41,0x41,0x7F,0x00,0x00,0x00,0x00],
        [0x00,0x04,0x02,0x01,0x02,0x04,0x00,0x00],
        [0x00,0x80,0x80,0x80,0x80,0x80,0x00,0x00],
        [0x00,0x01,0x02,0x04,0x00,0x00,0x00,0x00],
        [0x00,0x20,0x54,0x54,0x54,0x78,0x00,0x00],
        [0x00,0x7F,0x48,0x44,0x44,0x38,0x00,0x00],
        [0x00,0x38,0x44,0x44,0x28,0x00,0x00,0x00],
        [0x00,0x38,0x44,0x44,0x48,0x7F,0x00,0x00],
        [0x00,0x38,0x54,0x54,0x54,0x18,0x00,0x00],
        [0x00,0x08,0x7E,0x09,0x02,0x00,0x00,0x00],
        [0x00,0x18,0xA4,0xA4,0xA4,0x7C,0x00,0x00],
        [0x00,0x7F,0x08,0x04,0x04,0x78,0x00,0x00],
        [0x00,0x00,0x7D,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x80,0x84,0x7D,0x00,0x00,0x00,0x00],
        [0x00,0x7F,0x10,0x28,0x44,0x00,0x00,0x00],
        [0x00,0x41,0x7F,0x40,0x00,0x00,0x00,0x00],
        [0x00,0x7C,0x04,0x18,0x04,0x78,0x00,0x00],
        [0x00,0x7C,0x08,0x04,0x7C,0x00,0x00,0x00],
        [0x00,0x38,0x44,0x44,0x38,0x00,0x00,0x00],
        [0x00,0xFC,0x24,0x24,0x18,0x00,0x00,0x00],
        [0x00,0x18,0x24,0x24,0xFC,0x00,0x00,0x00],
        [0x00,0x00,0x7C,0x08,0x04,0x00,0x00,0x00],
        [0x00,0x48,0x54,0x54,0x24,0x00,0x00,0x00],
        [0x00,0x04,0x7F,0x44,0x00,0x00,0x00,0x00],
        [0x00,0x3C,0x40,0x40,0x7C,0x00,0x00,0x00],
        [0x00,0x1C,0x20,0x40,0x20,0x1C,0x00,0x00],
        [0x00,0x3C,0x40,0x30,0x40,0x3C,0x00,0x00],
        [0x00,0x44,0x28,0x10,0x28,0x44,0x00,0x00],
        [0x00,0x1C,0xA0,0xA0,0x7C,0x00,0x00,0x00],
        [0x00,0x44,0x64,0x54,0x4C,0x44,0x00,0x00],
        [0x00,0x08,0x36,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x00,0x7F,0x00,0x00,0x00,0x00],
        [0x00,0x41,0x36,0x08,0x00,0x00,0x00,0x00],
        [0x00,0x02,0x01,0x01,0x02,0x01,0x00,0x00],
        [0x00,0x02,0x05,0x05,0x02,0x00,0x00,0x00],
]

class SH1107G(Display):
    '''
    OLED 显示屏 1.12"(v2) 使用芯片 SH1107G。

    参数:
        address(int): I2C 设备地址，默认为 0x3E。
    '''
    MAX_GRAY    = 100
    _REG_CMD    = 0x00
    _REG_DATA   = 0x40
    _PAGE_CNT   = 16
    _PAGE_BYTES = 128
    _TOTAL_BYTES= _PAGE_CNT * _PAGE_BYTES
    
    _DISPLAY_CMD_OFF = 0xAE;
    _DISPLAY_CMD_ON = 0xAF;

    _BASE_LOW_COLUMN_ADDR = 0x00;
    _BASE_HIGH_COLUMN_ADDR = 0x10;
    _BASE_PAGE_START_ADDR = 0xB0;
    def __init__(self, address = 0x3C):
        super(SH1107G, self).__init__()
        self._bus = Bus()
        self._addr = address

        if self._bus.write_byte(self._addr, 0):
            print("检查是否插入了 OLED SH1107G，然后重试")
            sys.exit(1)
 
        id = self._bus.read_byte_data(self._addr, SH1107G._REG_CMD)
        # print(" id = 0x{:2x}".format(id))
        self._sh1107 = (id & 0x3F) == 0x07

        blk =     [0xAE]   # 显示关闭
        blk.append(0xD5)   # 设置 Dclk
        blk.append(0x50)   # 100Hz
        blk.append(0x20)   # 设置行地址
        blk.append(0x81)   # 设置对比度控制
        blk.append(0x80)
        blk.append(0xA0)   # 段重映射
        blk.append(0xA4)   # 设置整个显示屏开启
        blk.append(0xA6)   # 正常显示
        blk.append(0xAD)   # 设置外部 VCC
        blk.append(0x80)
        blk.append(0xC0)   # 设置公共扫描方向
        blk.append(0xD9)   # 设置相位长度
        blk.append(0x1F)
        blk.append(0xDB)   # 设置 Vcomh 电压
        blk.append(0x27)
        blk.append(0xAF)   # 显示开启
        blk.append(0xB0)
        blk.append(0x00)
        blk.append(0x10)
        self._cmds(blk)
        self.clear()

    def _cmd(self, cmd):
        try:
            self._bus.write_byte_data(self._addr,
                                    SH1107G._REG_CMD, cmd)
        except IOError:
            print("*** 检查是否插入了 OLED 模块 ***")
            sys.exit(1)

    def _cmds(self, cmds):
        for c in cmds:
            self._cmd(c)

    def _datas(self, datas):
        length = len(datas)
        data = bytearray(length + 1)
        data[0] = SH1107G._REG_DATA
        for i in range(length):
            data[i + 1] = datas[i]
        try:
            self._bus.write_i2c_block_data(self._addr,
                                  SH1107G._REG_DATA, datas)
        except IOError:
            print("*** 检查是否插入了 OLED 模块 ***")
            sys.exit(1)

    @property
    def name(self):
        '''
        获取设备名称

        返回:
            string: SH1107G/SSD1307 取决于插入的设备。
        '''
        return "SH1107G"

    def type(self):
        '''
        获取设备类型

        返回:
            int: ``TYPE_GRAY``
        '''
        return TYPE_GRAY

    def size(self):
        '''
        获取显示屏尺寸

        返回:
            (行数, 列数): 显示屏尺寸，以字符为单位。
        '''
        return 16, 16

    def clear(self):
        '''
        清除屏幕并将光标定位到左上角。
        '''
        zeros = [ 0x0 for dummy in range(SH1107G._TOTAL_BYTES) ]
        self.draw(zeros, SH1107G._TOTAL_BYTES)

    def draw(self, data, bytes):
        '''
        快速传输/绘制大量数据（由 data 指定）到 OLED，
        传输大小由 bytes 指定。

        参数:
            data (list of int): 要传输/绘制的数据
            bytes (int)       : 数据大小
        '''

        # 所有页面填充数据
        for i in range(SH1107G._PAGE_CNT):
            if i > bytes / SH1107G._PAGE_BYTES:
                return
            self._cmd(self._BASE_PAGE_START_ADDR + i)
            self._cmd(self._BASE_LOW_COLUMN_ADDR)
            self._cmd(self._BASE_HIGH_COLUMN_ADDR)
            # 填充一个页面字节
            for k in range(0, SH1107G._PAGE_BYTES, 32):
                # I2C 每次传输限制为 32 字节
                begin = i * SH1107G._PAGE_BYTES + k
                end   = begin + 32
                self._datas(data[begin:end])

    def home(self):
        '''
        将光标定位到 OLED 的左上角。
        即，在显示屏上输出后续文本时使用该位置。
        '''
        self.setCursor(0, 0)

    def setCursor(self, row, column):
        '''
        定位 OLED 光标；即设置位置，
        后续写入 OLED 的文本将在该位置显示。

        参数:
            row   (int): 光标定位的行，0 表示第一行
            column(int): 光标定位的列，0 表示第一列

        返回:
            None
        '''
        self._cmd(self._BASE_PAGE_START_ADDR + row)
        self._cmd(0x08 if column % 2 else self._BASE_LOW_COLUMN_ADDR)
        self._cmd(self._BASE_HIGH_COLUMN_ADDR + (column >> 1))

    def _putchar(self, c):
        asc = ord(c)
        if asc < 32 or asc > 127:
                asc = ord(' ')
        for i in range(8):
            fontmap = []
            fontmap.append(BasicFont[asc - 32][i])
            self._datas(fontmap)

    def write(self, msg):
        '''
        向 OLED 写入字符。

        参数:
            msg (string): 要写入显示屏的字符

        返回:
            None
        '''
        for i in range(len(msg)):
            self._putchar(msg[i])

    def _backlight_on(self, en):
        self._cmd(self._DISPLAY_CMD_ON if en else self._DISPLAY_CMD_OFF)


def main():
    import time

    oled = SH1107G()
    rows, cols = oled.size()
    print("OLED 型号: {}".format(oled.name))
    print("OLED 类型 : {} x {}".format(cols, rows))

    oled.backlight(False)
    time.sleep(1)

    oled.backlight(True)
    oled.setCursor(0, 0)
    oled.write("hello world!")
    oled.setCursor(0, cols - 1)
    oled.write('X')
    oled.setCursor(rows - 1, 0)
    for i in range(cols):
        oled.write(chr(ord('A') + i))

    time.sleep(3)
    oled.clear()

if __name__ == '__main__':
    main()
```

```python
（env）pi@raspberrypi:~ grove_lcd_1.2inches
```
:::tip success

如果一切正常，您将能够看到以下结果

:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/play_with_raspberry.jpg" />
</div>

您可以通过简单地按下 `ctrl`+`c` 来退出此程序。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源
---------
* **[Eagle]** [Grove-OLED Display 1.12inch in Eagle](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip)
* **[PDF]** [Grove-OLED Display 1.12inch Sch](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20Sch.pdf)
* **[PDF]** [Grove-OLED Display 1.12inch PCB](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20PCB.pdf)
* **[Datasheet]** [SSD1327 数据手册](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SSD1327_datasheet.pdf)
* **[Datasheet]** [LY120 数据手册](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/308010007_LCD-22P-0.7.pdf)
* **[Datasheet]** [SH1107G 数据手册](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SH1107G_datasheet.pdf)
* **[Tool]** [制作 96x96 图像的参考工具](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Make_A_96X96_Image1.zip)

## 项目

**智能农作物：在传统农业中实施物联网！** 我们与自然的使命是保护它，通过 Helium 的物联网设计和实施技术以及监测方法。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

**自动植物浇水系统** 一个使用 ESP8266 和 Android 应用程序浇灌植物并监测温度的设备。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ammarshahid572/automated-plant-watering-system-cb23d9/embed' width='350'></iframe>

**飞行 BeagleBone Green** BBBmini 是一款先进的 Linux 自动驾驶仪/飞行控制器 Cape，适用于 BeagleBone。它可以用于无人机、飞机或探测车。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/mirkix/flying-beaglebone-green-448b60/embed' width='350'></iframe>

## 技术支持与产品讨论
感谢您选择我们的产品！我们提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
