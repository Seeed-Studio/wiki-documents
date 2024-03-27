---
description: MicroSD
title: MicroSD
keywords:
- Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/SenseCAP_Indicator_RP2040_MicroSD
last_update:
  date: 3/4/2024
  author: DuKaiyin
---
# **MicroSD**

RP2040有一组GPIO引脚，可用于与外部MicroSD卡模块进行接口。

要使用MicroSD卡与RP2040，我们使用SPI（串行外设接口）协议将SD卡模块连接到微控制器的GPIO引脚。这涉及将RP2040上的以下引脚连接到MicroSD卡模块上的相应引脚：

SPI SCK（例如GPIO10）连接到SD_SCK

SPI TX（例如GPIO11）连接到SD_MOSI

SPI RX（例如GPIO12）连接到SD_MISO

一个GPIO引脚（例如GPIO13）连接到SD卡模块上的CS（芯片选择）引脚

```cpp
 // Initialize the SPI interface for the SD card
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
```

硬件连接建立后，您可以使用软件库（例如Arduino的SD库）从MicroSD卡读取和写入数据。SD库提供了初始化SD卡、打开和关闭文件、读取和写入文件数据以及执行其他文件系统操作的功能。

**注意**: RP2040上MicroSD卡接口的性能将取决于诸如SD卡速度、连线质量和软件效率等因素，支持的最大SD卡容量为32GB。





## **示例代码**

此示例代码实现了读取CO2数据并将数据存储在SD卡中。

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <SD.h>
#include <SensirionI2CScd4x.h>


SensirionI2CScd4x scd4x;
//Initialize a string to store data for writing to the SD card
String SDDataString = "";

void sensor_power_on(void) {
  pinMode(18, OUTPUT);
  digitalWrite(18, HIGH);
}
// Function to power on the sensor
void sensor_scd4x_init(void) {
  uint16_t error;
  char errorMessage[256];

  scd4x.begin(Wire);

  // stop potentially previously started measurement
  error = scd4x.stopPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }

  // Start Measurement
  error = scd4x.startPeriodicMeasurement();
  if (error) {
    Serial.print("Error trying to execute startPeriodicMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
}

void sensor_scd4x_get(void) {
  uint16_t error;
  char errorMessage[256];

  Serial.print("sensor scd4x: ");
  // Read Measurement
  uint16_t co2;
  float temperature;
  float humidity;
  error = scd4x.readMeasurement(co2, temperature, humidity);
  if (error) {
    Serial.print("Error trying to execute readMeasurement(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  } else if (co2 == 0) {
    Serial.println("Invalid sample detected, skipping.");
  } else {
    Serial.print("Co2:");
    Serial.print(co2);
    Serial.print("\t");
    Serial.print("Temperature:");
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print("Humidity:");
    Serial.println(humidity);
  }
  // Add data to the SD data string
  SDDataString += "scd4x,";
  if (error) {
    SDDataString += "-,-,-,";
  } else {
    SDDataString += String(co2);
    SDDataString += ',';
    SDDataString += String(temperature);
    SDDataString += ',';
    SDDataString += String(humidity);
    SDDataString += ',';
  }
}



int cnt = 0;
void setup() {
  Serial.begin(115200);

  sensor_power_on();
  Wire.setSDA(20);
  Wire.setSCL(21);
  Wire.begin();
 // Initialize the SPI interface for the SD card
  const int chipSelect = 13;
  SPI1.setSCK(10);
  SPI1.setTX(11);
  SPI1.setRX(12);
// Check if the SD card is initialized
  if (!SD.begin(chipSelect, 1000000, SPI1)) {
    Serial.println("Card failed, or not present");
  } else {
    Serial.println("card initialized.");
  }

  sensor_scd4x_init();
}

void loop() {

  delay(5000);
  // Clear the SD data string and print a message to the serial monitor
  SDDataString = "";
  Serial.printf("\r\n\r\n--------- start measure %d-------\r\n", cnt);

  SDDataString += String(cnt);
  SDDataString += ',';

  cnt++;
  sensor_scd4x_get();
  // Open the datalog.csv file for writing
  File dataFile = SD.open("datalog.csv", FILE_WRITE);
  // if the file is available, write to it:
  if (dataFile) {
    dataFile.println(SDDataString);
    dataFile.close();
    // print to the serial port too:
    Serial.print("sd write: ");
    Serial.println(SDDataString);
  } else {
    Serial.println("error opening datalog.txt");
  }

}


```



**注意:** 此内置SCD41传感器中的温度和湿度并不能完全代表空气的温度和湿度。

 **技术支持**

   别担心，我们为您提供了支持！请访问我们的[Seeed官方Discord频道](https://discord.com/invite/QqMgVwHT3X)提出您的问题！

如果您有大量订单或定制需求，请联系 iot@seeed.cc