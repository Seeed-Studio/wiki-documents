---
description: 内置传感器与 Edge Impulse
title: 内置传感器与 Edge Impulse
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/K1111-Edge-Impulse
last_update:
  date: 2023/1/13
  author: shuxu hu
---
# 通过 Helium 开发 Edge Impulse 应用到云端

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型开发，还为您提供使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使得 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光强、二氧化碳、电导率以及一体化 8 合 1 气象站传感器。尝试最新的 SenseCAP S210x，为您的下一个工业项目取得成功。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> 数据记录仪</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空气温湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光强</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空气温湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壤湿度 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壤湿度 &amp; 温度 &amp; 电导率</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® 控制器</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8 合 1 气象站</strong></a></td>
    </tr>
  </tbody></table>

## 我们使用的工具

- [Wio Terminal](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)
- [Edge Impulse](https://studio.edgeimpulse.com/)
- [Helium](https://console.helium.com/)
- [Wio Terminal Edge Impulse 使用内置加速度计进行连续运动识别](https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-EI-2/)
- [Google Sheets](https://docs.google.com/spreadsheets/u/0/)
- [Google Forms](https://docs.google.com/forms/u/0/)

:::note
在开始本节之前，请确保您已经了解 **Wio Terminal** 产品。
更多详情，请阅读：

- [**Wio Terminal 入门指南**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)
- [**连接到 Helium**](https://wiki.seeedstudio.com/cn/Connecting-to-Helium/)
- [**通过 Helium 集成到 Google Sheets**](https://wiki.seeedstudio.com/cn/Integrate_into_Google_Sheets_via_Helium/)
:::

本文展示了一种解决方案，适用于希望使用 Edge Impulse 生成模型并连接到云端的用户。在我们的演示中，我们将使用 Google Sheets。这是直接且简单的方式。

## Helium 配置

### 第一步：创建支持 Google Form 的集成

此步骤与文章 [**通过 Helium 集成到 Google Sheets**](https://wiki.seeedstudio.com/cn/Integrate_into_Google_Sheets_via_Helium/) 中的步骤类似。

我们需要做的只是命名集成并简单地保存配置。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/intergration.png" /></div>

连接到 Google Form：

- 创建
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Form_1.png" /></div>

- 连接到 Google Sheets
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Form_2.png" /></div>

- 链接到 Google Form ID
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Form_3.png" /></div>

### 第二步：使用 Google Form API 和解码器功能创建函数

确保 Google Form 已连接到函数，并填写我们从上述步骤中获得的 ID。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Func.png" /></div>

我们需要创建一个支持解码器的数据流传输函数，如下所示：

```Javascript
function Decoder(bytes, port) {

    var decoded = {};
 
    function transformers(bytes) {
        if (bytes[0] == 255 || bytes[0] == 0) {
            value = bytes[2] * 256 + bytes[3];
        }
        return value;
    }
 
    if (port == 8) {
        decoded.class = transformers(bytes.slice(0, 4));
    }
  
  var decodedPayload = {
    "class": decoded.class 
  };

  // END TODO

  return Serialize(decodedPayload)
}

var field_mapping = {
  "class": "entry.39410305"
};

function Serialize(payload) {
  var str = [];
  for (var key in payload) {
    if (payload.hasOwnProperty(key)) {
      var name = encodeURIComponent(field_mapping[key]);
      var value = encodeURIComponent(payload[key]);
      str.push(name + "=" + value);
    }
  }
  return str.join("&");
}
// DO NOT REMOVE: Google Form Function\
```

### 第三步：配置数据流

确保连接正常。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Flows.png" /></div>

## Edge Impulse 配置

:::note
更多详情，请阅读：
[Wio Terminal Edge Impulse 使用内置加速度计进行连续运动识别](https://wiki.seeedstudio.com/cn/Wio-Terminal-TinyML-EI-2/)
:::

## Arduino (Wio Terminal) 配置

:::note
由于传感器和环境的不同，在不同载板上直接烧录训练好的模型并不总是理想的。可靠的模型需要用户自行训练，因此这里只提供测试代码以便快速体验。
:::

### 快速体验

在我们从 Edge Impulse 生成库之后，需要修改代码以通过 Wio Terminal 上的 LoRa 发送数据。如果您只是想快速体验，只需复制以下代码并通过 Arduino IDE 将其烧录到您的 Wio Terminal 上。

烧录以下测试代码。

```cpp
#include <AIot_Example_inferencing.h>
#include"LIS3DHTR.h"
#include"TFT_eSPI.h"
LIS3DHTR<TwoWire> lis;
TFT_eSPI tft;
#include <SoftwareSerial.h>
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SoftwareSerial mySerial(A0, A1); // RX, TX

SensirionI2CSht4x sht4x;
 
static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;

static int at_send_check_response(char *p_ack, int timeout_ms, char *p_cmd, ...)
{
    int ch;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, p_cmd);
    mySerial.printf(p_cmd, args);
    Serial.printf(p_cmd, args);
    va_end(args);
    delay(200);
    startMillis = millis();
 
    if (p_ack == NULL)
    {
        return 0;
    }
 
    do
    {
        while (mySerial.available() > 0)
        {
            ch = mySerial.read();
            recv_buf[index++] = ch;
            Serial.print((char)ch);
            delay(2);
        }
 
        if (strstr(recv_buf, p_ack) != NULL)
        {
            return 1;
        }
 
    } while (millis() - startMillis < timeout_ms);
    return 0;
}
 
static void recv_prase(char *p_msg)
{
    if (p_msg == NULL)
    {
        return;
    }
    char *p_start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;
 
    p_start = strstr(p_msg, "RX");
    if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data)))
    {
        Serial.println(data);
    }
 
    p_start = strstr(p_msg, "RSSI");
    if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi)))
    {
        Serial.println(rssi);
    }
 
    p_start = strstr(p_msg, "SNR");
    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))
    {
        Serial.println(snr);
    }
}
////// 发送消息块结束


/* 常量定义 -------------------------------------------------------- */
#define CONVERT_G_TO_MS2    9.80665f
#define MAX_ACCEPTED_RANGE  2.0f        // 从 2022 年 3 月开始，模型生成时设置范围为 +-2，但此示例使用 Arduino 库，范围设置为 +-4g。如果您使用的是较旧的模型，请忽略此值并使用 4.0f

/* 私有变量 ------------------------------------------------------- */
static bool debug_nn = false; // 设置为 true 以查看例如从原始信号生成的特征

/**
* @brief      Arduino setup 函数
*/
void setup()
{
    // 在此处放置初始化代码，仅运行一次：
    Serial.begin(115200);
    Serial.println("Edge Impulse 推理演示");

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_WHITE);
 
    lis.begin(Wire1);
 
    if (!lis.available()) {
    Serial.println("初始化 IMU 失败！");
    while (1);
    }
    else {
        ei_printf("IMU 初始化成功\r\n");
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // 设置输出数据速率为 25Hz，可设置到 5kHz 
    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // 设置量程为 2g，可选择 2, 4, 8, 16g


    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != 3) {
        ei_printf("错误：EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME 应等于 3（即 3 个传感器轴）\n");
        return;
    }

    mySerial.begin(9600);

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    delay(5000);
    if (error) {
        Serial.print("尝试执行 serialNumber() 时出错：");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("序列号：");
        Serial.println(serialNumber);
    }
    
    Serial.print("E5 LORAWAN 测试\r\n");
 
    if (at_send_check_response("+AT: OK", 100, "AT\r\n"))
    {
        is_exist = true;
        at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\"608XXXXXXXXEE7\"\r\n");
        at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\"608XXXXXXXX85D\"\r\n");
        at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
        at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
        at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
        at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"E1EF1AC8XXXXXXXXXXXXXXXX05C5\"\r\n");
        at_send_check_response("+CLASS: A", 1000, "AT+CLASS=A\r\n");
        at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
        delay(200);
        is_join = true;
    }
    else
    {
        is_exist = false;
        Serial.print("未找到 E5 模块。\r\n");
    }
}

/**
 * @brief 返回数字的符号
 * 
 * @param number 
 * @return int 如果为正（或 0）返回 1，如果为负返回 -1
 */
float ei_get_sign(float number) {
    return (number >= 0.0) ? 1.0 : -1.0;
}

/**
* @brief      获取数据并运行推理
*
* @param[in]  debug  如果为 true 则获取调试信息
*/
void loop()
{
    ei_printf("\n2 秒后开始推理...\n");

    delay(2000);

    ei_printf("采样中...\n");

    // 在此处为我们将从 IMU 读取的值分配一个缓冲区
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // 确定下一个 tick（然后稍后休眠）
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);
        lis.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);

        for (int i = 0; i < 3; i++) {
            if (fabs(buffer[ix + i]) > MAX_ACCEPTED_RANGE) {
                buffer[ix + i] = ei_get_sign(buffer[ix + i]) * MAX_ACCEPTED_RANGE;
            }
        }

        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // 将原始缓冲区转换为信号以进行分类
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("从缓冲区创建信号失败 (%d)\n", err);
        return;
    }

    // 运行分类器
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("错误：运行分类器失败 (%d)\n", err);
        return;
    }

    // 打印预测结果
    ei_printf("预测结果 ");
    ei_printf("(DSP: %d ms., 分类: %d ms., 异常: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    异常分数: %.3f\n", result.anomaly);
#endif
    
   int classification_flag = 0;

   if (result.classification[1].value > 0.7) {
    tft.fillScreen(TFT_PURPLE);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("Wave", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
    classification_flag = 1;
   }
 
   if (result.classification[2].value > 0.7) {
    tft.fillScreen(TFT_RED);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("Circle", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
    classification_flag = 2;
   }

    
    if (is_exist){
        int ret = 0;
        if (is_join){
            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
            if (ret){
              is_join = false;
            }
            else{
                Serial.println("");
                Serial.print("加入失败！\r\n\r\n");
                delay(5000);
            }
        }
        else{
            char cmd[128];
            sprintf(cmd, "AT+CMSGHEX=\"%08X %08X\"\r\n", classification_flag);
            ret = at_send_check_response("Done", 10000, cmd);
            if (ret){
              Serial.print("classification_flag:");
              Serial.print(classification_flag);
              Serial.print("\t");
              recv_prase(recv_buf);
            }
            else{
              Serial.print("发送失败！\r\n\r\n");
            }
            delay(5000);
        }
    }
    else
    {
      delay(500);
    }

}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_ACCELEROMETER
#error "当前传感器的模型无效"
#endif
```

### DIY 实现更多功能

:::note
有关更多详细信息，请参阅以下文档。

- [**Connecting-to-Helium**](https://wiki.seeedstudio.com/cn/Connecting-to-Helium/)
:::
我们可能需要更多关注以下内容：

- 存储分类结果：

    我们可以设置一个阈值，当满足某个条件时更改标志，并为不同类别分配不同的标签。

    我们可以注释掉 tft 函数以提高速度。

    ```c++
    int classification_flag = 0;
    if (result.classification[1].value > 0.7) {
        tft.fillScreen(TFT_PURPLE);
        tft.setFreeFont(&FreeSansBoldOblique12pt7b);
        tft.drawString("Wave", 20, 80);
        delay(1000);
        tft.fillScreen(TFT_WHITE);
        classification_flag = 1;
    }
    if (result.classification[2].value > 0.7) {
        tft.fillScreen(TFT_RED);
        tft.setFreeFont(&FreeSansBoldOblique12pt7b);
        tft.drawString("Circle", 20, 80);
        delay(1000);
        tft.fillScreen(TFT_WHITE);
        classification_flag = 2;
    }
    ....
    ```

- 数据发送代码块：

    在 LoRa 网络可用的情况下，我们可以使用函数将标签发送到 Helium，并通过我们在 Helium 中编写的解码器进行恢复。

    ```c++
    if (is_exist){
        int ret = 0;
        if (is_join){
            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
            if (ret){
              is_join = false;
            }
            else{
                Serial.println("");
                Serial.print("JOIN failed!\r\n\r\n");
                delay(5000);
            }
        }
        else{
            char cmd[128];
            sprintf(cmd, "AT+CMSGHEX=\"%08X %08X\"\r\n", classification_flag); // 将 classification_flag 更改为想要传输的数据
            ret = at_send_check_response("Done", 10000, cmd);
            if (ret){
              Serial.print("classification_flag:");
              Serial.print(classification_flag);
              Serial.print("\t");
              recv_prase(recv_buf);
            }
            else{
              Serial.print("Send failed!\r\n\r\n");
            }
            delay(5000);
        }
    }
    else
    {
      delay(500);
    }
    ```

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>