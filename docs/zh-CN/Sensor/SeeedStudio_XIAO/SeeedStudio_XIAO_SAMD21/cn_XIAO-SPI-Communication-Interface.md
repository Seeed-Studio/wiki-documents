---
description: Seeed Studio XIAO SAMD21 上的 SPI 通信
title: Seeed Studio XIAO SAMD21 上的 SPI 通信
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-SPI-Communication-Interface
last_update:
  date: 1/11/2023
  author: shuxu hu
---
### SPI 通信接口

### 硬件

**所需材料**

- [Seeed Studio XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) x 1

- [Grove-高精度压力传感器](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

- Type-C 数据线 x1

**硬件连接**

- **步骤 1.** Grove-高精度压力传感器的 **CSK** 连接到 Seeed Studio XIAO 的 **SCK**。

- **步骤 2.** 传感器的 **CS** 连接到 Seeed Studio XIAO 的 **D3**。

- **步骤 3.** 传感器的 **SDO** 连接到 Seeed Studio XIAO 的 **MISO**。

- **步骤 4.** 传感器的 **SDI** 连接到 Seeed Studio XIAO 的 **MOSI**。

- **步骤 5.** 传感器的 **GND** 连接到 Seeed Studio XIAO 的 **GND**。

- **步骤 6.** 传感器的 **3V3** 连接到 Seeed Studio XIAO 的 **3.3V**。

- **步骤 7.** 通过 Type-C 数据线将 Seeed Studio XIAO 连接到 PC。

### 软件

:::note

如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [DPS310-Pressure-Sensor](https://github.com/Infineon/DPS310-Pressure-Sensor.git) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 将代码复制到 Arduino IDE 中并上传。

```c
#include <Dps310.h>

// Dps310 Opject
Dps310 Dps310PressureSensor = Dps310();

void setup()
{
  //pin number of your slave select line
  //XMC2GO
  int16_t pin_cs = 3;
  //for XMC 1100 Bootkit  & XMC4700 Relax Kit uncomment the following line
  //int16_t pin_cs = 10;

  Serial.begin(9600);
  while (!Serial);


  //Call begin to initialize Dps310
  //The parameter pin_nr is the number of the CS pin on your Microcontroller
  Dps310PressureSensor.begin(SPI, pin_cs);

  //temperature measure rate (value from 0 to 7)
  //2^temp_mr temperature measurement results per second
  int16_t temp_mr = 2;
  //temperature oversampling rate (value from 0 to 7)
  //2^temp_osr internal temperature measurements per result
  //A higher value increases precision
  int16_t temp_osr = 2;
  //pressure measure rate (value from 0 to 7)
  //2^prs_mr pressure measurement results per second
  int16_t prs_mr = 2;
  //pressure oversampling rate (value from 0 to 7)
  //2^prs_osr internal pressure measurements per result
  //A higher value increases precision
  int16_t prs_osr = 2;
  //startMeasureBothCont enables background mode
  //temperature and pressure ar measured automatically
  //High precision and hgh measure rates at the same time are not available.
  //Consult Datasheet (or trial and error) for more information
  int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);
  //Use one of the commented lines below instead to measure only temperature or pressure
  //int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);
  //int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);


  if (ret != 0)
  {
    Serial.print("Init FAILED! ret = ");
    Serial.println(ret);
  }
  else
  {
    Serial.println("Init complete!");
  }
}


void loop()
{
  uint8_t pressureCount = 20;
  float pressure[pressureCount];
  uint8_t temperatureCount = 20;
  float temperature[temperatureCount];

  //This function writes the results of continuous measurements to the arrays given as parameters
  //The parameters temperatureCount and pressureCount should hold the sizes of the arrays temperature and pressure when the function is called
  //After the end of the function, temperatureCount and pressureCount hold the numbers of values written to the arrays
  //Note: The Dps310 cannot save more than 32 results. When its result buffer is full, it won't save any new measurement results
  int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);

  if (ret != 0)
  {
    Serial.println();
    Serial.println();
    Serial.print("FAIL! ret = ");
    Serial.println(ret);
  }
  else
  {
    Serial.println();
    Serial.println();
    Serial.print(temperatureCount);
    Serial.println(" temperature values found: ");
    for (int16_t i = 0; i < temperatureCount; i++)
    {
      Serial.print(temperature[i]);
      Serial.println(" degrees of Celsius");
    }

    Serial.println();
    Serial.print(pressureCount);
    Serial.println(" pressure values found: ");
    for (int16_t i = 0; i < pressureCount; i++)
    {
      Serial.print(pressure[i]);
      Serial.println(" Pascal");
    }
  }

  //Wait some time, so that the Dps310 can refill its buffer
  delay(10000);
}
```

- **步骤 4.** 点击 **工具** > **串口监视器**，或同时按下 **Ctrl+Shift+M**，成功上传后打开串口监视器，输出如下所示：

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/spi.png" alt="pir" width={600} height="auto" /></p>