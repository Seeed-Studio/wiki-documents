---
description: Grove - 温度传感器
title: Grove - 温度传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Temperature_Sensor
last_update:
  date: 1/3/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Temperature1.jpg" /></div>

Grove - 温度传感器使用[热敏电阻](http://www.legacydistribution.co.uk/downloads/NTC-thermistors/TTC03.pdf)来检测环境温度。当环境温度降低时，热敏电阻的阻值会增加。我们利用这一特性来计算环境温度。该传感器的检测范围为 -40 - 125ºC，精度为 ±1.5ºC。

<p style={{textAlign: 'center' }}><a href="https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 规格参数

---

* 电压：3.3 ~ 5V

* 25℃时最大功率额定值：300mW

* 零功率电阻：10 KΩ

* 工作温度范围：-40 ~ +125 ℃

## 演示

---

### 与 Arduino 配合使用

这里有一个示例，展示如何从传感器读取温度信息。

1. 使用 4 针 grove 线缆将模块连接到 Grove - Basic Shield 的模拟端口 0。

2. 将 Grove - Basic Shield 插入 Arduino。
3. 使用 USB 线缆将 Arduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Tempreture_Sensor_Connector.jpg" /></div>

4. 上传下面的代码。如果您不知道如何上传，请点击[这里](/cn/Upload_Code/)。

```
/*
/* Grove - 温度传感器演示 v1.0
*  该传感器检测环境温度，
*  将此传感器的信号连接到 A0，使用
*  串口监视器获取结果。
*  By: https://www.seeedstudio.com
*/
#include <math.h>
int a;
float temperature;
int B=3975;                  //热敏电阻的 B 值
float resistance;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    a=analogRead(0);
    resistance=(float)(1023-a)*10000/a; //获取传感器的电阻值;
    temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;//通过数据手册转换为温度&nbsp;;
    delay(1000);
    Serial.print("Current temperature is ");
    Serial.println(temperature);
}
```

5. 您可以通过串口监视器查看读数。默认单位是摄氏度。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Temperature_Sensor_Score.jpg" /></div>

作为参考，以下是 TTC3A103*39H 的电阻曲线，这是我们在此传感器上使用的热敏电阻。温度越高，电阻越小。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Twig-Temperature-Sensor-value.jpg" /></div>

### 与 [Raspberry Pi](/cn/GrovePi_Plus/ "GrovePi+") 配合使用

1.您应该有一个树莓派和一个 grovepi 或 grovepi+。

2.您应该已经完成了开发环境的配置，否则请按照[这里](/cn/GrovePi_Plus/#Introducing_the_GrovePi.2B)的说明进行。

3.连接

* 使用 grove 线缆将传感器插入 grovepi 的 D3 接口。

4.导航到演示目录：

```
cd yourpath/GrovePi/Software/Python/
```

* 查看代码

```
nano grove_temperature_sensor.py   # "Ctrl+x" 退出 #
```

```
import time
import grovepi

# 将 Grove 温度传感器连接到模拟端口 A0
# SIG,NC,VCC,GND
sensor = 0

while True:
try:
temp = grovepi.temp(sensor,'1.1')
print "temp =", temp
time.sleep(.5)

except KeyboardInterrupt:
break
except IOError:
print "Error"
```

5.运行演示。

```
sudo python grove_temperature_sensor.py
```

### 与 Beaglebone Green 配合使用

要开始编辑运行在 BBG 上的程序，您可以使用 Cloud9 IDE。

作为熟悉 Cloud9 IDE 的简单练习，创建一个简单的应用程序来闪烁 BeagleBone 上 4 个用户可编程 LED 中的一个是一个很好的开始。

如果这是您第一次使用 Cloud9 IDE，请按照此[**链接**](/cn/BeagleBone_Green/#getting-started)进行操作。

**步骤1：** 点击右上角的"+"创建一个新文件。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/C9-create-tab.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/C9_newfile.jpg" /></div>

**步骤2：** 将以下代码复制并粘贴到新标签页中

```
from Adafruit_I2C import Adafruit_I2C
import time

ADDR_ADC121 = 0x50

REG_ADDR_RESULT = 0x00
REG_ADDR_ALERT = 0x01
REG_ADDR_CONFIG = 0x02
REG_ADDR_LIMITL = 0x03
REG_ADDR_LIMITH = 0x04
REG_ADDR_HYST = 0x05
REG_ADDR_CONVL = 0x06
REG_ADDR_CONVH = 0x07

i2c = Adafruit_I2C(ADDR_ADC121)

class I2cAdc:
def __init__(self):
i2c.write8(REG_ADDR_CONFIG, 0x20)

def read_adc(self):
"读取 ADC 数据 0-4095。"
data_list = i2c.readList(REG_ADDR_RESULT, 2)
        #print 'data list', data_list
data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff
return data

if __name__ == '__main__':
    # 将 Grove - I2C ADC 连接到 Beaglebone Green 的 I2C Grove 端口。
adc = I2cAdc()
while True:
print 'sensor value ', adc.read_adc()
time.sleep(.2)
```

**步骤3：** 通过点击磁盘图标保存文件，命名为"grove_i2c_adc.py"。

**步骤4：** 创建一个新文件，将以下代码复制到新标签页中并以 .py 扩展名保存。

```
import time
import math
import grove_i2c_adc
import Adafruit_BBIO.GPIO as GPIO

BUZZER = "P9_22"            # GPIO P9_22
GPIO.setup(BUZZER, GPIO.OUT)

# 开启蜂鸣器的阈值温度 28 摄氏度
THRESHOLD_TEMPERATURE = 28

adc = grove_i2c_adc.I2cAdc()

#   read_temperature() 方法中的参数定义了您连接的 Grove 板（Grove 温度传感器）版本。
#   默认为 'v1.2'。例如：
#       temp = read_temperature('v1.0')          # B 值 = 3975
#       temp = read_temperature('v1.1')          # B 值 = 4250
#       temp = read_temperature('v1.2')          # B 值 = 4250
def read_temperature(model = 'v1.2'):
"从 Grove 温度传感器读取摄氏温度值"
    # 每个传感器版本使用不同的热敏电阻，每个都有自己的 B 值常数
if model == 'v1.2':
bValue = 4250  # 传感器 v1.2 使用热敏电阻 ???（假设为 NCP18WF104F03RC，直到 SeeedStudio 澄清）
elif model == 'v1.1':
bValue = 4250  # 传感器 v1.1 使用热敏电阻 NCP18WF104F03RC
else:
bValue = 3975  # 传感器 v1.0 使用热敏电阻 TTC3A103*39H

total_value = 0
for index in range(20):
sensor_value = adc.read_adc()
total_value += sensor_value
time.sleep(0.05)
average_value = float(total_value / 20)

    # 将 ADC 数据转换为 Arduino 平台的数据。
sensor_value_tmp = (float)(average_value / 4095 * 2.95 * 2 / 3.3 * 1023)
resistance = (float)(1023 - sensor_value_tmp) * 10000 / sensor_value_tmp
temperature = round((float)(1 / (math.log(resistance / 10000) / bValue + 1 / 298.15) - 273.15), 2)
return temperature

# 功能：如果温度传感器感测到的温度达到您在代码中设置的阈值，蜂鸣器会响 1 秒。
# 硬件：Grove - I2C ADC，Grove - 温度传感器，Grove - 蜂鸣器
# 注意：使用 P9_22(UART2_RXD) 作为 GPIO。
# 将 Grove 蜂鸣器连接到 Beaglebone Green 的 UART Grove 端口。
# 将 Grove - I2C ADC 连接到 Beaglebone Green 的 I2C Grove 端口，然后将 Grove - 温度传感器连接到 Grove - I2C ADC。
if __name__ == '__main__':

while True:
try:
            # 从 Grove 温度传感器读取摄氏温度值
temperature = read_temperature('v1.2')

            # 当温度达到预定值时，蜂鸣器响起。

print "temperature = ", temperature

except IOError:
print "Error"
```

**步骤5：** 将Grove温度传感器连接到Grove I2C ADC，后者连接到BBG上的Grove I2C接口。

**步骤6：** 运行代码。
您会发现终端每2秒输出一次温度值。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/res/Grove-Temperature_Sensor-Analog-v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Grove - 温度传感器 v1.0 Eagle文件](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/res/Grove-Temperature_Sensor-Analog-v1.0_Source_File.zip)

* [Github上的演示代码](https://github.com/Seeed-Studio/Grove_Temperature_Sensor)

## 项目

**环境立方体！使用Sigfox了解您脚下的土地**：一个配备所有必要传感器的立方体，适用于农业、监测等广泛应用。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>