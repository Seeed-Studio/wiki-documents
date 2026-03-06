---
description: Grove - 空气质量传感器 v1.3
title: Grove - 空气质量传感器 v1.3
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove-Air_Quality_Sensor_v1.3.webp
slug: /Grove-Air_Quality_Sensor_v1.3
sku: 101020078
last_update:
  date: 4/14/2025
  author: Priyanshu Roy
createdAt: '2025-08-07'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/Grove-Air_Quality_Sensor_v1.3/
---

---
<!-- ![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" width={600} height="auto" /></p>

该传感器设计用于全面监测室内空气状况。它对多种有害气体具有响应能力，例如一氧化碳、酒精、丙酮、稀释剂、甲醛等。由于测量机制的限制，该传感器无法输出具体数据来定量描述目标气体的浓度。但它仍然足够胜任仅需要定性结果的应用，例如自动空气清新喷雾器和自动空气循环系统。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)

:::tip
    我们已经发布了 [Seeed 气体传感器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Gas_Sensor_Selection_Guide/)，它将帮助您选择最适合您需求的气体传感器。
:::

## 版本

| 产品版本 | 变更 | 发布日期 |
|----------|------|----------|
| Grove - 空气质量传感器 v1.3 | 初始版本 | 2016年5月 |

## 特性

- 对多种目标气体具有响应能力
- 成本高效
- 耐用
- 兼容 5V 和 3.3V

:::caution
    1. 需要相对干净的空气作为初始条件。
    2. 长时间暴露在高度污染的空气中会显著降低其灵敏度。
    3. Coffre-fort et armoire forte:
:::

## 支持的平台

|Arduino|Raspberry Pi|ESP-IDF|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/esp_idf.png" alt="esp-idf" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

#### 演示

如介绍中所述，该传感器在提供广泛目标气体的定性结果方面表现更佳。在本演示中，我们将在 `.cpp` 文件中定义 4 种状态供参考。它们是：

- a. 空气清新 —— 表示空气状况良好。
- b. 轻度污染 —— 表示存在较低浓度的目标气体。
- c. 严重污染（未在串口监视器上打印“Force signal active”消息） —— 您需要注意污染水平，并考虑是否需要采取一些措施。
- d. 严重污染（在串口监视器上打印“Force signal active”消息） —— 应立即采取措施改善空气质量。

我们将决策结构封装在 `.cpp` 文件中。您可以在其中找到如何修改阈值的信息。

让我们试试吧！

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove - 空气质量传感器 |
|----------------|-------------|-----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)|

- **步骤 2.** 将 Grove - 空气质量传感器连接到 Grove-Base Shield 的 **A0** 端口。
- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_-_Air_Quality_Sensor_v1.3_Test.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_-_Air_Quality_Sensor_v1.3_Test.jpg" alt="pir" width={600} height="auto" /></p>

:::note
 如果没有 Grove Base Shield，我们也可以直接将 Grove - 空气质量传感器连接到 Seeeduino，如下所示。
:::
| Seeeduino       | Grove - 空气质量传感器 |
|---------------|-------------------------|
| 5V           | 红色                   |
| GND           | 黑色                   |
| 未连接        | 白色                   |
| A0            | 黄色                   |

#### 软件

- **步骤 1.** 下载 [AirQuality_Sensor Library](https://github.com/Seeed-Studio/Grove_Air_quality_Sensor)。
- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- **步骤 3.** 将代码复制到 Arduino IDE 并上传。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```c
/*
    Grove_Air_Quality_Sensor.ino
    Grove - 空气质量传感器演示代码。

    版权所有 (c) 2019 seeed technology inc.
    作者    : Lets Blu
    创建时间 : 2019年1月
    修改时间:

    MIT 许可协议 (MIT)

    特此免费授予任何获得本软件及相关文档文件（“软件”）副本的人使用本软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售本软件的副本，并允许被提供本软件的人这样做，但需符合以下条件：

    上述版权声明和本许可声明应包含在本软件的所有副本或主要部分中。

    本软件按“原样”提供，不附带任何形式的明示或暗示保证，包括但不限于适销性、适用于特定用途和非侵权的保证。在任何情况下，作者或版权持有人均不对因使用本软件或其他交易而产生的任何索赔、损害或其他责任负责，无论是合同诉讼、侵权行为或其他形式。
*/
#include "Air_Quality_Sensor.h"

AirQualitySensor sensor(A0);

void setup(void) {
    Serial.begin(9600);
    while (!Serial);

    Serial.println("等待传感器初始化...");
    delay(20000);

    if (sensor.init()) {
        Serial.println("传感器已准备好。");
    } else {
        Serial.println("传感器错误！");
    }
}

void loop(void) {
    int quality = sensor.slope();

    Serial.print("传感器值: ");
    Serial.println(sensor.getValue());

    if (quality == AirQualitySensor::FORCE_SIGNAL) {
        Serial.println("严重污染！强制信号激活。");
    } else if (quality == AirQualitySensor::HIGH_POLLUTION) {
        Serial.println("严重污染！");
    } else if (quality == AirQualitySensor::LOW_POLLUTION) {
        Serial.println("轻度污染！");
    } else if (quality == AirQualitySensor::FRESH_AIR) {
        Serial.println("空气清新。");
    }

    delay(1000);
}
```

- **步骤 4.** 我们将在终端上看到如下显示：

```
等待传感器初始化...
传感器已准备好。
传感器值: 48
空气清新。
传感器值: 51
空气清新。
传感器值: 49
空气清新。
传感器值: 48
空气清新。
传感器值: 48
空气清新。
传感器值: 48
空气清新。
```

要调整阈值和指示消息，请参考 `.cpp` 文件中的以下决策结构。

```c
int AirQualitySensor::slope(void) {
    _lastVoltage = _currentVoltage;
    _currentVoltage = analogRead(_pin);

    _voltageSum += _currentVoltage;
    _volSumCount += 1;

    updateStandardVoltage();
    if (_currentVoltage - _lastVoltage > 400 || _currentVoltage > 700) {
        return AirQualitySensor::FORCE_SIGNAL;
    }
    else if ((_currentVoltage - _lastVoltage > 400 && _currentVoltage < 700)
             || _currentVoltage - _standardVoltage > 150) {
        return AirQualitySensor::HIGH_POLLUTION;
    }
    else if ((_currentVoltage - _lastVoltage > 200 && _currentVoltage < 700)
             || _currentVoltage - _standardVoltage > 50) {
        return AirQualitySensor::LOW_POLLUTION;
    }
    else {
        return AirQualitySensor::FRESH_AIR;
    }

    return -1;
}
```

### 使用 Codecraft

#### 硬件

**步骤 1.** 将 Grove - 空气质量传感器连接到 Base Shield 的 A0 端口。

**步骤 2.** 将 Base Shield 插入 Seeeduino/Arduino。

**步骤 3.** 使用 USB 数据线将 Seeeduino/Arduino 连接到您的电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区域。

:::note
    如果您是第一次使用 Codecraft，请参阅 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤 2.** 按下图拖动模块或打开可以在页面底部下载的 cdc 文件。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/cc_Air_Quality_Sensor.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/cc_Air_Quality_Sensor.png" alt="pir" width={600} height="auto" /></p>

将程序上传到您的 Arduino/Seeeduino。

:::success
    当代码上传完成后，您将在串行监视器中看到空气质量数据。
:::

### 使用 Raspberry Pi (配合 Grove Base Hat for Raspberry Pi)

#### 硬件

- **步骤 1.** 本项目使用的物品：

| 树莓派 | Grove Base Hat for RasPi | Grove - 空气质量传感器 |
|--------|--------------------------|-----------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html)|

- **步骤 2.** 将 Grove Base Hat 插入树莓派。
- **步骤 3.** 将 Grove - 空气质量传感器连接到 Base Hat 的 A0 端口。
- **步骤 4.** 使用 USB 数据线将树莓派连接到电脑。
![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg)

#### 软件

:::caution
     如果您使用的是 **Raspberry Pi 且系统版本为 Raspberrypi OS >= Bullseye**，您必须仅使用 Python3 命令行。
:::

- **步骤 1.** 按照 [软件设置](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation) 配置开发环境。
- **步骤 2.** 通过克隆 grove.py 库下载源文件。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤 3.** 执行以下命令运行代码。

```
cd grove.py/grove
python3 grove_air_quality_sensor_v1_3.py 0
```

以下是 grove_air_quality_sensor_v1_3.py 的代码。

```python
import math
import sys
import time
from grove.adc import ADC


class GroveAirQualitySensor:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def value(self):
        return self.adc.read(self.channel)

Grove = GroveAirQualitySensor


def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveAirQualitySensor(int(sys.argv[1]))

    print('Detecting ...') 
    while True:
        value = sensor.value        
        if value > 100:
            print("{}, High Pollution.".format(value))
        else:
            print("{}, Air Quality OK.".format(value))

        time.sleep(.1)

if __name__ == '__main__':
    main()
```

:::tip
    如果一切正常，您将看到以下结果：
:::

```python
pi@raspberrypi:~/grove.py/grove $ python3 grove_air_quality_sensor_v1_3.py 0 
Detecting ...
138, High Pollution.
139, High Pollution.
140, High Pollution.
141, High Pollution.
139, High Pollution.
140, High Pollution.
140, High Pollution.
140, High Pollution.
139, High Pollution.
138, High Pollution.
139, High Pollution.
138, High Pollution.
138, High Pollution.
^CTraceback (most recent call last):
  File "grove_air_quality_sensor_v1_3.py", line 71, in <module>
    main()
  File "grove_air_quality_sensor_v1_3.py", line 68, in main
    time.sleep(.1)
KeyboardInterrupt
```

您可以使用此传感器检测空气质量。按 ++ctrl+c++ 退出。

:::note
        您可能注意到，对于模拟端口，丝印引脚编号类似于 **A1, A0**，但在命令中我们使用参数 **0** 和 **1**，与数字端口相同。因此，请确保将模块插入正确的端口，否则可能会发生引脚冲突。
:::

### 使用 Raspberry Pi (配合 GrovePi_Plus)

#### 硬件

- **步骤 1.** 准备以下物品：

| 树莓派 | GrovePi_Plus | Grove - 空气质量传感器 |
|--------|--------------|-----------------------------|
|<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></div>|<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></div>|<div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" alt="pir" style={{height: 180, objectFit: 'contain'}} /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html)|

- **步骤 2.** 将 GrovePi_Plus 插入树莓派。
- **步骤 3.** 将 Grove-MOSFET ranger 连接到 GrovePi_Plus 的 **A0** 端口。
- **步骤 4.** 使用 USB 数据线将树莓派连接到电脑。

#### 软件

- **步骤 1.** 进入示例代码目录：

```
cd yourpath/GrovePi/Software/Python/
```

- **步骤 2.** 查看代码

```
nano grove_air_quality_sensor.py   # 按 "Ctrl+x" 退出 #
```

```python
import time
import grovepi

# 将 Grove 空气质量传感器连接到模拟端口 A0
# SIG,NC,VCC,GND
air_sensor = 0

grovepi.pinMode(air_sensor,"INPUT")

while True:
    try:
        # 获取传感器值
        sensor_value = grovepi.analogRead(air_sensor)

        if sensor_value > 700:
            print "污染严重"
        elif sensor_value > 300:
            print "污染较轻"
        else:
            print "空气清新"

        print "sensor_value =", sensor_value
        time.sleep(.5)

    except IOError:
        print "错误"
```

- **步骤 3.** 运行示例代码。

```
sudo python grove_air_quality_sensor.py
```

- **步骤 4.** 我们将在终端上看到如下输出。

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/pi_result.png) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/pi_result.png" alt="pir" width={600} height="auto" /></p>


### 使用 ESP-IDF

#### 硬件

- **步骤 1.** 准备以下物品：

<table align="center">
<tr>
    <th>Seeed Studio XIAO ESP32C3</th>
    <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove 空气质量传感器 v1.3</th>
</tr>
<tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
</tr>
<tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
</tr>
</table>

- **步骤 2.** 将 Grove - 空气质量传感器连接到 ESP32 开发板：
  - 将传感器的 VCC 连接到 3.3V
  - 将传感器的 GND 连接到 GND
  - 将传感器的 SIG 连接到支持 ADC 的 GPIO 引脚（例如 GPIO34）
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/ESP32_Grove_AirQuality.png" alt="pir" width={600} height="auto" /></p>


#### 软件

- **步骤 1.** 按照 [官方指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) 安装 ESP-IDF

- **步骤 2.** 克隆 Grove 模拟空气质量传感器组件：

```bash
cd your_project/components
git clone https://github.com/Priyanshu0901/grove_analog_aqs.git
```

- **步骤 3.** 使用 menuconfig 配置组件：

```bash
idf.py menuconfig
```

导航到 "Component config → Grove Analog Air Quality Sensor" 进行配置：
- ADC 单元编号（0 表示 ADC1，1 表示 ADC2）
- ADC 通道（与 GPIO 连接匹配）
- ADC 衰减（默认值：ADC_ATTEN_DB_12 对应 3.3V）
- 空气质量阈值
- 电源管理选项（可选）

- **步骤 4.** 创建一个新项目并使用该组件：

```c
#include "grove_analog_aqs.h"

void app_main(void)
{
    // 使用默认配置初始化
    grove_aqs_config_t config = GROVE_AQS_DEFAULT_CONFIG();
    esp_err_t ret = grove_aqs_init(&config);
    if (ret != ESP_OK) {
        ESP_LOGE(TAG, "传感器初始化失败: %d", ret);
        return;
    }
    
    // 读取传感器数据
    grove_aqs_data_t data;
    ret = grove_aqs_read_data(&data);
    if (ret == ESP_OK) {
        ESP_LOGI(TAG, "原始 ADC 值: %d", data.raw_value);
        ESP_LOGI(TAG, "电压: %d mV", data.voltage_mv);
        ESP_LOGI(TAG, "空气质量: %s", grove_aqs_quality_to_string(data.quality));
    }
    
    // 完成后清理
    grove_aqs_deinit();
}
```

- **步骤 5.** 构建并烧录项目：

```bash
idf.py build
idf.py -p /dev/ttyUSB0 flash monitor
```

:::note
    将 /dev/ttyUSB0 替换为你的 ESP32 的串口。
:::

#### 预期输出

```
I (242) sleep_gpio: 启用 GPIO 睡眠配置的自动切换
I (249) main_task: 在 CPU0 上启动
I (249) main_task: 调用 app_main()
I (249) grove_aqs_example: 初始化 Grove 模拟空气质量传感器
I (259) grove_aqs_example: 使用 ADC 单元: 0, ADC 通道: 2
I (259) grove_aqs: 使用 ADC 单元: 0, ADC 通道: 2 初始化
I (269) grove_aqs: 启用 ADC 校准
I (269) grove_aqs: Grove 模拟空气质量传感器成功初始化
I (279) grove_aqs_example: 等待传感器稳定...
I (3279) grove_aqs: 空气质量读取: 原始值=300, 电压=218mV, 质量=清新
I (3279) grove_aqs_example: 读取 #1:
I (3279) grove_aqs_example:   原始 ADC 值: 300
I (3279) grove_aqs_example:   电压: 218 mV
I (3279) grove_aqs_example:   空气质量: 清新
I (3289) grove_aqs_example:   建议: 空气清新干净！
I (4289) grove_aqs: 空气质量读取: 原始值=298, 电压=216mV, 质量=清新
I (4289) grove_aqs_example: 读取 #2:
I (4289) grove_aqs_example:   原始 ADC 值: 298
I (4289) grove_aqs_example:   电压: 216 mV
I (4289) grove_aqs_example:   空气质量: 清新
I (4299) grove_aqs_example:   建议: 空气清新干净！
I (5299) grove_aqs: 空气质量读取: 原始值=286, 电压=208mV, 质量=清新
I (5299) grove_aqs_example: 读取 #3:
I (5299) grove_aqs_example:   原始 ADC 值: 286
I (5299) grove_aqs_example:   电压: 208 mV
I (5299) grove_aqs_example:   空气质量: 清新
I (5309) grove_aqs_example:   建议: 空气清新干净！
I (6309) grove_aqs: 空气质量读取: 原始值=283, 电压=206mV, 质量=清新
```

:::tip
    该组件提供以下功能：
    - 自动 ADC 校准
    - 可配置的空气质量阈值
    - 可选的 GPIO 电源控制
    - 错误处理和日志记录
    - 支持 ADC1 和 ADC2
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[库文件]** [空气质量传感器库](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/AirQuality_Sensor.zip)
- **[Eagle]** [Grove_-_Air_quality_sensor_v1.3_sch_pcb](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip)
- **[PDF]** [Grove_-_Air_quality_sensor_v1.3_sch](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch.pdf)
- **[PDF]** [空气质量传感器_MP503_中文](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Air_quality_sensor_MP503%20Chinese.pdf)
- **[PDF]** [空气质量传感器_MP503_英文](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Mp503%20English.pdf)
- **[Codecraft]** [CDC 文件](https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_Air_Quality_Sensor_CDC_File.zip)
- **[ESP-IDF]** [Grove 模拟空气质量传感器组件](https://github.com/Priyanshu0901/grove_analog_aqs.git) - 用于 Grove 空气质量传感器的 ESP-IDF 组件
- **[ESP-IDF]** [ESP-IDF 编程指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) - 官方 ESP-IDF 编程指南

## 项目

**SPCPM（太阳能供电城市污染监测器）**：低维护、高输出的空气污染和噪声污染监测设备，可在城市中布置，无需布线。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/100181/spcpm-solar-powered-city-pollution-monitor-ca4072/embed' width='350'></iframe>

**一个查看您周围环境数据的网站**：

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/a-website-to-see-the-environment-data-around-you-1aea66/embed' width='350'></iframe>

<!-- **使用 BeagleBone Green Wireless 的家庭控制中心**：

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://project.seeedstudio.com/kevin-lee2/home-control-center-using-beaglebone-green-wireless-107a0d/embed" width={350} /> -->

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供使用 SenseCAP 系列坚固的 [工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) 扩展项目的可能性。

SenseCAP S210x 系列采用 IP66 防护外壳、蓝牙配置、兼容全球 LoRaWAN® 网络、内置 19 Ah 电池，并提供强大的 APP 支持，是工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、二氧化碳、EC，以及一款 8 合 1 气象站传感器。尝试最新的 SenseCAP S210x，为您的下一个工业项目取得成功。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>