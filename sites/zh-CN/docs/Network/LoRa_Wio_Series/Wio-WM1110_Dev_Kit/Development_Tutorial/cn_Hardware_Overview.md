---
description: Wio-WM1110 开发套件硬件概述
title: 硬件概述
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-WM1110_Dev_Kit_Hardware_Overview
last_update:
  date: 8/8/2023
  author: Jessie
---


Wio WM1110 开发套件是一个用于构建物联网项目的开源平台。它提供低功耗 LoRa 网络连接和全方位的定位覆盖服务。该套件还包含一系列传感器和外设，使其成为构建物联网项目的多功能平台。

在本教程中，我们将介绍硬件概述以及如何开发您自己的应用程序！

## 硬件概述

Wio-WM1110 开发套件基于 [Wio-WM1110 模块](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html)，集成了 Semtech 的 LoRa® 收发器和用于地理定位的多用途射频前端，该板载有内置的温湿度传感器和 3 轴加速度计，还为各种外设提供连接选项。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/hardware_overview1.png" alt="pir" width={800} height="auto" /></p>

## 引脚图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/PIN.png" alt="pir" width={800} height="auto" /></p>

## LoRaWAN® 通信

### 设置密钥

在设备可以通过网络服务器进行通信之前，我们需要使用 3 个密钥将其注册。

Wio-WM1110 DK 允许用户设置 DevEUI、AppEUI 和 AppKey，因此您可以在 'lorawan_key_config.h' 文件中设置我们自己的参数，然后将其烧录到 DK 上。

```cpp
...\Seeed_Wio_WM1110_Dev_Board\apps\common\lorawan_key_config.h
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/keys.png" alt="pir" width={800} height="auto" /></p>

**LoRa Basics Modem LoRaWAN® Class A/C 示例**

应用程序将自动启动加入 LoRaWAN 网络的流程，请参见 **lorawan_key_config.h**

一旦加入网络（即触发相应事件时），将定期发送上行链路。此定期操作基于 LoRa Basics Modem 的闹钟功能。每次触发闹钟相关事件时，应用程序都会请求上行链路。

上行链路的内容是通过调用 `smtc_modem_get_charge()` 从电荷计数器读取的值。

应用程序还能够显示接收到的下行链路的数据和元数据。

**配置**

可以在 `main_lorawan.h` 头文件中更新几个参数：

| 常量                       | 描述                                                                          |
| -------------------------- | ----------------------------------------------------------------------------- |
| `LORAWAN_APP_PORT`         | 用于上行链路消息的 LoRaWAN® FPort                                              |
| `LORAWAN_CONFIRMED_MSG_ON` | 请求 LNS 确认已收到上行链路消息                                                |
| `APP_TX_DUTYCYCLE`         | 两次上行链路之间的延迟（秒）                                                   |

## 定位

### GNSS

通过捕获GNSS卫星广播信号的短片段，并提取计算设备位置所需的信息——伪距。这些信息被聚合到NAV消息中，可以发送到后端系统来计算设备位置。

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

Wio-WM1110的GNSS扫描器有两种操作模式：自主模式和辅助模式。

**GNSS自主模式：** 不需要任何辅助位置或历书数据，旨在检测强卫星信号。因此适用于天空可见度良好的室外条件。

**GNSS辅助模式：** 它允许最高效的GNSS地理定位。辅助信息可以构建当前时间和位置可见卫星的列表，以减少GNSS卫星搜索空间，从而优化地理定位所花费的时间和能量。辅助信息针对LPWAN网络进行了定制，限制了发送的数据，特别是下行链路的大小和频率。它包括：

- LR1110近似位置
- 当前时间
- 最新的缩减尺寸历书信息（少于3个月）

**地理定位GNSS示例**

此示例说明了GNSS扫描程序：

- LoRa Basics Modem库的配置；以及
- 使用*GNSS地理定位中间件*执行GNSS *扫描和发送*功能。

**GNSS演示相关配置**

`main_geolocation_gnss.h`头文件定义了几个常量来配置地理定位参数。

| 常量                                     | 注释                                                                                    | 可能的值         | 默认值        |
| ---------------------------------------- | --------------------------------------------------------------------------------------- | ---------------- | ------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | 如果设置为`true`：配置应用程序自主获取辅助位置                                          | {`true`,`false`} | `true`        |

如果为辅助位置选择了手动模式，以下常量定义了要使用的位置。

| 常量                                     | 注释                                                                        | 可能的值                   | 默认值             |
| ---------------------------------------- | ------------------------------------------------------------------------------- | -------------------------- | ------------------ |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | 用于GNSS辅助扫描的纬度（十进制度数）                     | 任何在[-90, 90]范围内的`float`   | 45.181454          |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | 用于GNSS辅助扫描的经度（十进制度数）                    | 任何在[-180, 180]范围内的`float` | 5.720893           |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | 辅助位置的文本表示，仅用于信息打印 | 任何常量c字符串      | "Grenoble, FRANCE" |

***注意***：预定义的辅助位置必须在实际位置的150公里范围内。

| 常量                     | 注释                                                                                      | 可能的值                  | 默认值                |
| ------------------------ | --------------------------------------------------------------------------------------------- | ------------------------- | --------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | 定义扫描和发送序列结束与下一个序列开始之间的持续时间 | `uint32_t`                | 30                    |
| `GNSS_SCAN_MODE`         | 定义用于扫描和发送序列的GNSS扫描模式（静态或移动）。           | `gnss_mw_mode_t`中的值 | `GNSS_MW_MODE_STATIC` |

默认选择的GNSS扫描模式是 `GNSS_MW_MODE_STATIC`，这意味着此应用示例针对非移动对象。

### Wi-Fi

通过发现设备附近可用的Wi-Fi b/g/n接入点，并提取允许对设备进行地理定位的MAC地址。目标是获得至少2个MAC地址，这些地址可以用于定位设备，在它们被发送到在线Wi-Fi查找服务之后

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>

**地理定位Wi-Fi示例**

此应用演示了Wi-Fi地理定位中间件的使用以及如何配置LoRa Basics Modem以满足先决条件
此示例说明了Wi-Fi扫描过程：

- LoRa Basics Modem库的配置；以及
- 使用*Wi-Fi地理定位中间件*执行Wi-Fi *扫描和发送*功能。

**Wi-Fi演示相关配置**

`main_geolocation_wifi.h` 头文件定义了几个常量，可以设置这些常量来定义应用程序的可配置参数。

| 常量               | 注释                                                                                          | 可能的值        | 默认值        |
| ------------------ | --------------------------------------------------------------------------------------------- | --------------- | ------------- |
| `WIFI_SCAN_PERIOD` | 定义扫描和发送序列结束与下一个序列开始之间的持续时间                                          | `uint32_t`      | 30            |

### GNSS 和 Wi-Fi

**地理定位 GNSS 和 Wi-Fi 示例**
此示例演示了 GNSS 和 Wi-Fi 扫描程序的组合：

- LoRa Basics Modem 库的配置；以及
- 使用 *GNSS 地理定位中间件* 和 *Wi-Fi 地理定位中间件* 并发执行 GNSS 和 Wi-Fi *扫描和发送* 功能。

**地理定位演示相关配置**

`main_geolocation_gnss_wifi.h` 头文件定义了几个常量来配置地理定位参数。

| 常量                                     | 注释                                                                                    | 可能的值         | 默认值        |
| ---------------------------------------- | --------------------------------------------------------------------------------------- | ---------------- | ------------- |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_AUTO` | 如果设置为 `true`：配置应用程序自主获取辅助位置                                         | {`true`,`false`} | `false`       |

如果为辅助位置选择了手动模式，以下常量定义了要使用的位置。

| 常量                                     | 注释                                                                        | 可能的值                   | 默认值             |
| ---------------------------------------- | ------------------------------------------------------------------------------- | -------------------------- | ------------------ |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LAT`  | 用于 GNSS 辅助扫描的纬度（十进制度数）                     | 任何在 [-90, 90] 范围内的 `float`   | 45.181454          |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_LONG` | 用于 GNSS 辅助扫描的经度（十进制度数）                    | 任何在 [-180, 180] 范围内的 `float` | 5.720893           |
| `MODEM_EXAMPLE_ASSISTANCE_POSITION_TEXT` | 辅助位置的文本表示，仅用于信息打印 | 任何常量 c 字符串      | "Grenoble, FRANCE" |

***注意***：预定义的辅助位置必须在实际位置的150公里范围内。

| 常量                     | 注释                                                                                      | 可能的值                  | 默认值                |
| ------------------------ | --------------------------------------------------------------------------------------------- | ------------------------- | --------------------- |
| `GNSS_SCAN_GROUP_PERIOD` | 定义扫描和发送序列结束与下一个序列开始之间的持续时间 | `uint32_t`                | 30                    |
| `GNSS_SCAN_MODE`         | 定义用于扫描和发送序列的GNSS扫描模式（静态或移动）。           | `gnss_mw_mode_t`中的值 | `GNSS_MW_MODE_MOBILE` |

默认选择的GNSS扫描模式是`GNSS_MW_MODE_MOBILE`，意味着此应用示例针对移动对象。

## BLE

低功耗蓝牙（BLE），也称为蓝牙低功耗，是一种无线通信技术，旨在为需要长期供电、低数据传输速率和短通信距离的设备提供低功耗和低复杂度的通信方法。BLE基于蓝牙技术进行优化，具有更低的功耗和更简单的协议栈，使其适用于低功耗和物联网（IoT）应用。

Wio-WM1110具有基于nRF52840芯片的低功耗蓝牙。

**使用蓝牙例程进行测试**

SDK中有一个'Bluetooth: Peripheral UART'示例。测试需要您已连接到示例并打开已连接的终端仿真器。

BLE演示位于：
`nRF5_SDK_17.1.0_ddde560/examples/ble_peripheral/ble_app_uart/pca10056/s140/ses/`

- [使用移动设备进行测试](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_mobile.html)

- [使用计算机进行测试](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fug_gsg_ses%2FUG%2Fgsg%2Ftest_desktop.html)

## 板载传感器

### 温湿度传感器(SHT41)

SHT41是一个数字湿度和温度传感器，它通过I2C接口与微控制器或其他数字设备通信。

SHT41传感器通常用于广泛的应用中，包括HVAC系统、气象站、室内空气质量监测和工业过程控制。其小尺寸、低功耗和高精度使其成为许多不同类型项目的热门选择。

|  | 范围 | 精度 |
| -------- | -------- | -------- |
|温度  | -40~125°C |0.2°C|
| 湿度 | 0~100%RH |1.8%RH|

**代码：**

此示例提供了用于初始化传感器、读取温度和湿度值以及设置温度单位的函数。

以下是此代码中定义的函数的简要总结：

**SHT41Init**：一个通过重置传感器并等待1ms后再继续的函数来初始化传感器。

**SHT41GetTemperature、SHT41GetHumidity 和 SHT41GetTempAndHumi**：用于从传感器读取温度和/或湿度值的函数。这些函数将原始传感器值转换为摄氏度或华氏度的浮点值，具体取决于当前的温度单位设置。

**SHT41SetTemperatureUnit 和 SHT41GetTemperatureUnit**：用于设置和获取温度单位的函数。
crc8：一个计算字节数组CRC-8校验和的内部函数。

### 3轴加速度计(LIS3DHTR)

LIS3DHTR是一款高性能传感器，可测量三个维度的加速度并提供准确可靠的读数。

LIS3DHTR传感器通过I2C或SPI接口与微控制器或其他数字设备通信。它还包括可编程中断和广泛的省电模式等高级功能，以帮助最小化功耗。

| 量程 | 带宽 | 灵敏度(LSB/g) |
| -------- | -------- | -------- |
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g)

## Grove

DK中有3个Grove接口，可以连接400多个Grove模块，支持ADC/UART和IIC传输协议。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/grove_pins.png" alt="pir" width={600} height="auto" /></p>

### Grove IIC

DK上有一个Grove IIC端口，`SDA`在引脚27上，`SCL`在引脚26上。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_iic.png" alt="pir" width={300} height="auto" /></p>

要连接到Grove IIC模块，必须启用传感器电源：`I2C_PWR`（引脚7）。此引脚控制IIC信号线上的上拉电压：

```cpp
#define IIC_POWER          7
```
TWI 需要在使用前在 `sdk_config.h` 文件中启用。

```cpp
// <e> TWI_ENABLED - nrf_drv_twi - TWI/TWIM peripheral driver - legacy layer
//==========================================================
#ifndef TWI_ENABLED
#define TWI_ENABLED 1
#endif
// <e> TWI0_ENABLED - Enable TWI0 instance
//==========================================================
#ifndef TWI0_ENABLED
#define TWI0_ENABLED 1
#endif
// <q> TWI0_USE_EASY_DMA  - Use EasyDMA (if present)
#ifndef TWI0_USE_EASY_DMA
#define TWI0_USE_EASY_DMA 1
#endif
// </e>
// <e> TWI1_ENABLED - Enable TWI1 instance
//==========================================================
#ifndef TWI1_ENABLED
#define TWI1_ENABLED 1
#endif
// <q> TWI1_USE_EASY_DMA  - Use EasyDMA (if present)
 #ifndef TWI1_USE_EASY_DMA
#define TWI1_USE_EASY_DMA 1
#endif
```

**示例代码**

此示例通过 IIC 接口读取 [SHT41 温湿度传感器](https://wiki.seeedstudio.com/cn/Grove-SHT4x/) 的值，并将其打印到串口监视器。

```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "app_error.h"
#include "sht41.h"
#include "nrf_drv_twi.h"

int main(void)
{   
    float   temp = 0;
    float   humi = 0;
    hal_i2c_master_init( );
    hal_gpio_init_out( SENSOR_POWER, HAL_GPIO_SET ); 
    nrf_delay_ms(10);

    SHT41Init();
    
    while(1){
        SHT41GetTempAndHumi(&temp,&humi);
        nrf_delay_ms(1000);  
        printf("temperature:%.3f humidity:%.3f\n",temp,humi);
    }

}
```

然后您将获得温度和湿度值：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/valueSHT41.png" alt="pir" width={500} height="auto" /></p>

### Grove UART

Wio-WM1110 DK 有两个 UART 外设，分别是 `uart0` 和 `uart1`。`uart0` 引脚连接到 CH340C 用于调试目的，而 `uart1` 作为 Grove UART 端口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_uart.png" alt="pir" width={300} height="auto" /></p>

参考原理图，TXD 位于引脚 8，RXD 位于引脚 6。

```cpp
#define     LED1                      13
#define     LED2                      14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256
```

:::tip 注意
除了像ADC这样的模拟接口外，nRF52840芯片的其他数字外设都有固定的引脚。但是，其他数字外设可以重新映射到任何引脚。例如，RXD和TXD引脚配置可以交换。
:::

在使用前需要在`sdk_config.h`文件中启用UART：

```cpp
/ <e> NRFX_UARTE_ENABLED - nrfx_uarte - UARTE peripheral driver
//==========================================================
#ifndef NRFX_UARTE_ENABLED
#define NRFX_UARTE_ENABLED 1
#endif
// <o> NRFX_UARTE0_ENABLED - Enable UARTE0 instance 
#ifndef NRFX_UARTE0_ENABLED
#define NRFX_UARTE0_ENABLED 1
#endif

// <o> NRFX_UARTE1_ENABLED - Enable UARTE1 instance 
#ifndef NRFX_UARTE1_ENABLED
#define NRFX_UARTE1_ENABLED 1
#endif

// <e> UART_ENABLED - nrf_drv_uart - UART/UARTE peripheral driver - legacy layer
//==========================================================
#ifndef UART_ENABLED
#define UART_ENABLED 1
#endif
```

**示例代码**

以下示例代码实现了带反馈的串口发送和接收功能。

```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "smtc_hal.h"
#include "app_uart.h"
#include "app_error.h"
#include "nrf_uart.h"
#include "nrf_drv_uart.h"

static void uart_handleEvent( app_uart_evt_t *pEvent );

APP_UART_DEF( uart, 0, UART_TX_RX_BUF_SIZE, uart_handleEvent );

static app_uart_comm_params_t const commParams =
{
    .rx_pin_no    = RXD,
    .tx_pin_no    = TXD,
    .rts_pin_no   = NRF_UART_PSEL_DISCONNECTED,
    .cts_pin_no   = NRF_UART_PSEL_DISCONNECTED,                    
    .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
    .use_parity   = false,
    .baud_rate    = NRF_UART_BAUDRATE_115200
};

void uart_tx( uint8_t* buff, uint16_t len )
{
        for( uint16_t i = 0; i < len; i++ )
        {
            app_uart_put( &uart, buff[i] );
        }
}


int main(void)
{
    uint32_t err_code;
    uart.comm_params = &commParams;
    uint8_t arr[] = "hello world\n";
    nrf_gpio_cfg_output(LED1);
    nrf_gpio_cfg_output(LED2);
    nrf_gpio_pin_clear(LED1);
    nrf_gpio_pin_clear(LED2);
    app_uart_init( &uart, &uart_buffers, APP_IRQ_PRIORITY_LOWEST );
    
    
    while( 1 )
    {
        nrf_delay_ms(1000);
        nrf_gpio_pin_toggle(LED2);
        uart_tx(arr,strlen(arr));
    }
}
            
void uart_handleEvent(app_uart_evt_t * p_event)
{
 uint8_t dat;
    if (p_event->evt_type == APP_UART_COMMUNICATION_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_communication);
    }
    else if (p_event->evt_type == APP_UART_FIFO_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_code);
    }
 
    else if (p_event->evt_type == APP_UART_DATA_READY)
 {
  app_uart_get(&uart,&dat); 
  app_uart_put(&uart,dat); 
 }
    else if (p_event->evt_type == APP_UART_TX_EMPTY) 
 {
  nrf_gpio_pin_toggle(LED1);
 }
}
```

### Grove ADC

DK 上有八个 ADC 外设（0~7），`ADC6` 和 `ADC7` 用作 Grove ADC 端口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Grove_adc.png" alt="pir" width={300} height="auto" /></p>

:::tip 注意
ADC 引脚是固定的，无法重新映射。
:::

ADC 引脚的对应关系如下表所示：

|ADC0|ADC1|ADC2|ADC3|ADC4|ADC5|ADC6|ADC7|
|:-------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
|2|3|4|5|28|29|30|31

在使用之前，需要在 `sdk_config.h` 文件中启用 SAADC：

```cpp
// <e> SAADC_ENABLED - nrf_drv_saadc - SAADC peripheral driver - legacy layer
//==========================================================
#ifndef SAADC_ENABLED
#define SAADC_ENABLED 1
#endif
// <e> NRFX_SAADC_ENABLED - nrfx_saadc - SAADC peripheral driver
//==========================================================
#ifndef NRFX_SAADC_ENABLED
#define NRFX_SAADC_ENABLED 1
#endif
// <o> SAADC_CONFIG_RESOLUTION  - Resolution
 
// <0=> 8 bit 
// <1=> 10 bit 
// <2=> 12 bit 
// <3=> 14 bit 

#ifndef SAADC_CONFIG_RESOLUTION
#define SAADC_CONFIG_RESOLUTION 2
#endif
```

**示例代码**

这是一个 ADC6 的示例程序，实现了读取 ADC6 引脚单通道模拟输入值的功能，并通过 UART 输出测量的 ADC 值：

```cpp
#include "nrf_gpio.h"
#include "nrf_gpiote.h"
#include "nrf_drv_gpiote.h"
#include "nrf_delay.h"
#include "app_uart.h"
#include "app_error.h"
#include "nrf_uart.h"
#include "nrf_drv_uart.h"
#include "nrf_drv_saadc.h"
#define     LED1                     13
#define     LED2                     14
#define     TXD                       8
#define     RXD                       6
#define     UART_TX_RX_BUF_SIZE       256

static void uart_handleEvent( app_uart_evt_t *pEvent );

APP_UART_DEF( uart, 0, UART_TX_RX_BUF_SIZE, uart_handleEvent );

static app_uart_comm_params_t const commParams =
{
    .rx_pin_no    = RXD,
    .tx_pin_no    = TXD,
    .rts_pin_no   = NRF_UART_PSEL_DISCONNECTED,
    .cts_pin_no   = NRF_UART_PSEL_DISCONNECTED,                    
    .flow_control = APP_UART_FLOW_CONTROL_DISABLED,
    .use_parity   = false,
    .baud_rate    = NRF_UART_BAUDRATE_115200
};

void uart_tx( uint8_t* buff, uint16_t len )
{
        for( uint16_t i = 0; i < len; i++ )
        {
            app_uart_put( &uart, buff[i] );
        }
}

void ADC_Interrupt(nrfx_saadc_evt_t const *p_event){
    
}

void uart_handleEvent(app_uart_evt_t * p_event)
{
 uint8_t dat;
    if (p_event->evt_type == APP_UART_COMMUNICATION_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_communication);
    }
    else if (p_event->evt_type == APP_UART_FIFO_ERROR)
    {
        APP_ERROR_HANDLER(p_event->data.error_code);
    }
 
    else if (p_event->evt_type == APP_UART_DATA_READY)
 {
  app_uart_get(&uart,&dat); 
  //app_uart_put(&uart,dat); 
 }
    else if (p_event->evt_type == APP_UART_TX_EMPTY) 
 {
  //nrf_gpio_pin_toggle(LED1);
 }
}

int main(void)
{
    nrf_saadc_value_t  saadc_val = 0; 
    uint8_t arr[32];
    nrf_saadc_channel_config_t channel_config = 
    {                                                   
        .resistor_p = NRF_SAADC_RESISTOR_DISABLED,      
        .resistor_n = NRF_SAADC_RESISTOR_DISABLED,      
        .gain       = NRF_SAADC_GAIN1_6,                
        .reference  = NRF_SAADC_REFERENCE_INTERNAL,     
        .acq_time   = NRF_SAADC_ACQTIME_10US,           
        .mode       = NRF_SAADC_MODE_SINGLE_ENDED,      
        .burst      = NRF_SAADC_BURST_DISABLED,         
        .pin_p      = NRF_SAADC_INPUT_AIN6,       
        .pin_n      = NRF_SAADC_INPUT_DISABLED          
    };
    
    nrf_drv_saadc_init(NULL, ADC_Interrupt);
    nrf_drv_saadc_channel_init(0, &channel_config);

    uart.comm_params = &commParams;
    app_uart_init( &uart, &uart_buffers, APP_IRQ_PRIORITY_LOWEST );

    nrf_gpio_cfg_output(LED2);
    while( 1 )
    {
        nrf_drv_saadc_sample_convert (0,&saadc_val);
        sprintf(arr,"value:%d\n",saadc_val);
        uart_tx(arr,strlen(arr));
        nrf_delay_ms(1000);
        nrf_gpio_pin_toggle(LED2);
    }
}

```

## 资源

[Seeed_Wio_WM1110_Dev_Board](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board)

[nRF5-SDK](https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs)

## 技术支持

**需要 Wio-WM1110 开发套件的帮助？我们随时为您提供协助！**

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
