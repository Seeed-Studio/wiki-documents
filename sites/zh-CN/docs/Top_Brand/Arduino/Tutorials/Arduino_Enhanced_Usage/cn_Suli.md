---
description: Suli
title: Suli
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Suli
last_update:
  date: 1/16/2023
  author: hushuxu
---

##  什么是 Suli

听起来像女孩的名字？实际上它的意思是 Seeed 统一库接口（Seeed Unified Library Interface）。这是我们近期待办事项清单上的一个重要项目。

我们有数百个传感器、执行器、显示器和其他有用的模块。过去，我们主要专注于 Arduino 应用，只提供 Arduino 库。这意味着如果您使用其他平台，如 Raspberry、LauchPad 或 MCS51，您需要移植我们的库，有时这并不容易。

有时当一些客户要求我们为非 Arduino 平台提供一些库时，我们能做的就是告诉他们"嘿，伙计，我们只有 Arduino 库。"以这种方式回复客户让我们感觉很糟糕。

我们一直在思考是否有一种方法可以让我们的库适用于所有平台。这确实是一个艰难的任务，但并非不可能。我们很幸运最终想出了解决方案：那就是 Suli - Seeed 统一库接口，它可以让我们几乎所有的（至少90%）库适用于许多常见平台，或者至少让移植变得容易。

##  Suli 是如何工作的

看看下面的图片，

![](https://files.seeedstudio.com/wiki/Suli/img/Suli_layer2.jpg)

我们可以发现有四个圆圈，最内层是 HW（硬件）。Suli 将从 HW 调用资源，如 GPIO、I2C、定时器和 UART；然后是 Suli 兼容库，然后是用户应用程序。我们所有的库都只会调用 Suli 函数。因此，对于不同的平台，我们只需移植 Suli，然后库就可以使用了。这意味着不同的平台有它们各自的 Suli，Arduino 的 Suli，Mbed 的 Suli，等等。

关于 Suli 有几个要点：

*   不同平台有不同的 Suli，它是针对特定平台的。

*   Suli 兼容库是平台无关的。

*   Suli 兼容库将调用 Suli 中的函数。

Suli 有两个文件，Suli.h 和 Suli.cpp（.c）。Suli 应该实现以下函数，

**GPIO 类型：**

```
typedef     int     IO_T;                           // IO 类型
typedef     int     PIN_T;                          // 引脚名称
typedef     int     DIR_T;                          // 引脚方向
typedef int ANALOG_T;                               // 引脚模拟
```

**GPIO 状态：**

```
#define HAL_PIN_INPUT   INPUT          // INPUT 和 OUTPUT 在 Arduino IDE 中声明
#define HAL_PIN_OUTPUT  OUTPUT
#define HAL_PIN_HIGH    HIGH           // HIGH 和 LOW 在 Arduino IDE 中声明
#define HAL_PIN_LOW     LOW
```

**数据类型：**
```
typedef signed char     int8;
typedef unsigned char   uint8;
typedef signed short    int16;
typedef unsigned short  uint16;
typedef signed long     int32;
typedef unsigned long   uint32;
```

**数字 IO 操作：**

```
void suli_pin_init(IO_T *pio, PIN_T pin);      // 引脚初始化
void suli_pin_dir(IO_T *pio, DIR_T dir);       // 设置引脚方向
void suli_pin_write(IO_T *pio, int16 state);   // 写引脚
int16 suli_pin_read(IO_T *pio);                // 读引脚
uint16 suli_pulse_in(IO_T *pio, uint8 state, uint32 timeout);
```

**模拟 IO 操作：**

```
void suli_analog_init(ANALOG_T * aio, PIN_T pin);
int16 suli_analog_read(ANALOG_T * aio);
```

**延时：**

```
	void suli_delay_us(uint32 us);                 // 延时微秒
	void suli_delay_ms(uint32 ms);                 // 延时毫秒
```

**时间：**

```
	uint32 suli_millis(void);
	uint32 suli_micros(void);
```

**I2C 接口：**

```
	void suli_i2c_init(void * i2c_device);
	uint8 suli_i2c_write(void * i2c_device, uint8 dev_addr, uint8 *data, uint8 len);
	uint8 suli_i2c_read(void * i2c_device, uint8 dev_addr, uint8 *buff, uint8 *len);
```

**UART：**

```
	void suli_uart_init(void * uart_device, int16 uart_num, uint32 baud);
	void suli_uart_send(void * uart_device, int16 uart_num, uint8 *data, uint16 len);
	void suli_uart_send_byte(void * uart_device, int16 uart_num, uint8 data);
	uint8 suli_uart_read_byte(void * uart_device, int16 uart_num);
	uint16 suli_uart_readable(void * uart_device, int16 uart_num);
```

您可以发现 Suli 包括数字 IO 操作、模拟 IO 操作、I2C 和 Uart 函数，也许它不是很全面，但基于我的经验，它对我们相当多的库来说是足够的，当然如果我们发现某天需要更多功能，我们会添加进去。

##   下一步是什么

我们的计划是让所有 Seeed 库都兼容 Suli，并移植一些常见平台的 Suli。这些平台在第一阶段将包括 Arduino、Mbed、Mesh Bee、Raspberry、LaunchPad。这项工作预计在六月之前完成。敬请关注

##   参考资料

- [Suli 的 git 仓库](https://github.com/Seeed-Studio/Suli)

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