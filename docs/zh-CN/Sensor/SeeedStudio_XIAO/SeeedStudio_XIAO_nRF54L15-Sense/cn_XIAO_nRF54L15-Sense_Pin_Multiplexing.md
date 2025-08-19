---
title: Seeed Studio XIAO nRF54L15 Sense 引脚复用
description: |
image: https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/top.jpg
slug: /cn/xiao_nrf54l15_sense_pin_multiplexing
sidebar_position: 2
keywords:
  - XIAO
  - nRF54L15
last_update:
  date: 7/2/2025
  author: Jason
---

为了便于使用，以下所有引脚复用示例都基于 PlatformIO。请点击此链接查看 [XIAO nRF54L5](https://wiki.seeedstudio.com/cn/xiao_nrf54l15_with_platform_io/) 的配置和使用指南


## 数字引脚

### 硬件准备

<table align="center">
  <tr>
      <th>Seeed Studio XIAO nRF54L15 Sense</th>
        <th>Seeed Studio XIAO 扩展板配 Grove OLED</th>
        <th>Grove - 继电器</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:600, height:'auto'}}/></div></td>
  </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>


### 软件实现

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-gpio" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```c
#include <zephyr/kernel.h>
#include <zephyr/drivers/gpio.h>
#include <zephyr/logging/log.h>


LOG_MODULE_REGISTER(main_app, CONFIG_LOG_DEFAULT_LEVEL);

static const struct gpio_dt_spec button = GPIO_DT_SPEC_GET(DT_ALIAS(sw1), gpios); // 从设备树别名获取按钮设备
static const struct gpio_dt_spec relay = GPIO_DT_SPEC_GET(DT_ALIAS(relay0), gpios); // 从设备树别名获取继电器设备

int main(void)
{
    int ret;

    LOG_INF("启动 Zephyr 按钮和继电器示例...");

    /* 检查 GPIO 设备是否就绪 */
    if (!gpio_is_ready_dt(&button)) {
        LOG_ERR("按钮设备 %s 未就绪", button.port->name); 
        return -1;
    }

    if (!gpio_is_ready_dt(&relay)) {
        LOG_ERR("继电器设备 %s 未就绪", relay.port->name);
        return -1;
    }

    /* 将按钮引脚配置为输入模式 */
    ret = gpio_pin_configure_dt(&button, GPIO_INPUT);
    if (ret != 0) {
        LOG_ERR("配置 %s 引脚 %d 失败 (错误 %d)", button.port->name, button.pin, ret);
        return -1;
    }

    /* 将继电器引脚配置为输出模式 */
    ret = gpio_pin_configure_dt(&relay, GPIO_OUTPUT_ACTIVE);
    if (ret != 0) {
        LOG_ERR("配置 %s 引脚 %d 失败 (错误 %d)", relay.port->name, relay.pin, ret);
        return -1;
    }

    LOG_INF("按下按钮切换继电器状态...");

    while (1) {
        /* 读取按钮状态 */
        int button_state = gpio_pin_get_dt(&button);

        /* 检查读取是否成功 */
        if (button_state < 0) {
            LOG_ERR("读取按钮引脚错误: %d", button_state);
            return -1;
        }

        if (button_state == 0) { // 按钮按下 (低电平有效)
            gpio_pin_set_dt(&relay, 1); // 打开继电器 (高电平)
        } else { // 按钮未按下
            gpio_pin_set_dt(&relay, 0); // 关闭继电器 (低电平)
        }

        k_msleep(10); /* 短暂延时以避免忙等循环 */
    }
    return 0;
}
```

**设备树配置**

`static const struct gpio_dt_spec button = GPIO_DT_SPEC_GET(DT_ALIAS(sw1), gpios);`

- 这行代码利用 Zephyr 的设备树系统，通过名为 sw1 的别名获取按钮的 GPIO 设备信息。这种方法将代码与特定的硬件引脚解耦，提高了可移植性。

`static const struct gpio_dt_spec relay = GPIO_DT_SPEC_GET(DT_ALIAS(relay0), gpios);`

- 同样，这行代码获取名为 relay0 的继电器 GPIO 设备信息。

**设备就绪检查**

`if (!gpio_is_ready_dt(&button))` 和 `if (!gpio_is_ready_dt(&relay))`

- 在程序开始执行任何操作之前，代码检查按钮和继电器设备是否成功初始化并准备就绪。这是 Zephyr 驱动程序编程的最佳实践，可防止设备未正确配置时程序崩溃。

**引脚配置**

`gpio_pin_configure_dt(&button, GPIO_INPUT);`

- 这行代码将按钮的 GPIO 引脚配置为输入模式。这是读取引脚电平的必要步骤，程序将监控引脚的电压电平来确定按钮是否被按下。

`gpio_pin_configure_dt(&relay, GPIO_OUTPUT_ACTIVE);`

- 这行代码将继电器的 GPIO 引脚配置为输出模式。`GPIO_OUTPUT_ACTIVE` 标志通常表示引脚在配置后将处于活动状态，为控制继电器做准备。

**主循环逻辑**

`while (1):` 代码进入无限循环，持续执行以下操作。

`int button_state = gpio_pin_get_dt(&button);:` 在每个循环中，程序读取按钮引脚的当前电平状态。

`if (button_state == 0):` 此逻辑检查按钮是否被按下。在许多电路设计中，按钮按下时将引脚连接到地（GND），导致电平为 0（即低电平）。

`gpio_pin_set_dt(&relay, 1);:` 如果按钮状态为 0（按下），则将继电器引脚设置为 1（高电平），这会闭合继电器并打开连接到它的设备（例如灯）。

`else:` 如果按钮未被按下（状态为 1），执行 `gpio_pin_set_dt(&relay, 0);` 将继电器引脚设置为 0（低电平），这会断开继电器并关闭连接到它的设备。

`k_msleep(10);:` 代码在每个循环结束时添加 10 毫秒的短暂延迟，以避免 CPU 忙等等。这是一个简单的防抖处理。这是一个简单的防抖处理，可防止由于按钮的物理抖动而导致多次触发，同时也降低功耗。


### 结果图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light2.gif" style={{width:700, height:'auto'}}/></div>


## 模拟

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO nRF54L15 Sense</th>
         <th>Grove-可变色LED</th>
	    <th>Grove-旋转角度传感器 </th>
	    <th>Seeed Studio Grove Base for XIAO </th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Pin/10.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/rotary.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-V1-1.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>


### 软件实现

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-pwm" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

``` cpp
#include <zephyr/kernel.h>
#include <zephyr/drivers/adc.h>
#include <zephyr/drivers/pwm.h>
#include <zephyr/logging/log.h>

// 注册日志模块
LOG_MODULE_REGISTER(pot_pwm_example, CONFIG_LOG_DEFAULT_LEVEL);

// --- ADC 配置 ---
#if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) || \
    !DT_NODE_HAS_PROP(DT_PATH(zephyr_user), io_channels)
#error "未为 ADC 通道指定合适的设备树覆盖"
#endif

#define DT_SPEC_AND_COMMA(node_id, prop, idx) \
    ADC_DT_SPEC_GET_BY_IDX(node_id, idx),

static const struct adc_dt_spec adc_channels[] = {
    DT_FOREACH_PROP_ELEM(DT_PATH(zephyr_user), io_channels, DT_SPEC_AND_COMMA)
};

// 定义电位器 ADC 通道在 adc_channels 数组中的索引
#define POTENTIOMETER_ADC_CHANNEL_IDX 1

// --- PWM 配置 ---
// 获取 PWM LED 设备
static const struct pwm_dt_spec led = PWM_DT_SPEC_GET(DT_ALIAS(pwm_led));

// 定义 PWM 周期为 1 毫秒（1,000,000 纳秒）
// 这对应于 1 kHz PWM 频率，适合 LED 亮度调节且无可见闪烁
#define PWM_PERIOD_NS 1000000UL

int main(void)
{
    int ret;
    uint16_t adc_raw_value;
    int32_t adc_millivolts;

    LOG_INF("启动 Zephyr 电位器到 PWM 示例...");

    // --- ADC 初始化和设置 ---
    if (!adc_is_ready_dt(&adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX])) {
        LOG_ERR("ADC 控制器设备 %s 未就绪", adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].dev->name);
        return 0;
    }

    ret = adc_channel_setup_dt(&adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX]);
    if (ret < 0) {
        LOG_ERR("无法设置电位器的 ADC 通道 (%d)", ret);
        return 0;
    }
    LOG_INF("ADC 设备 %s，通道 %d 已为电位器准备就绪。",
            adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].dev->name,
            adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].channel_id);

    // --- PWM 初始化和设置 ---
    if (!device_is_ready(led.dev)) {
        LOG_ERR("错误：PWM 设备 %s 未就绪", led.dev->name);
        return 0;
    }
    LOG_INF("LED 的 PWM 周期设置为 %lu ns (%.1f Hz)",
            PWM_PERIOD_NS, (double)NSEC_PER_SEC / PWM_PERIOD_NS); // 使用 PWM_PERIOD_NS 而不是 led.period


    // ADC 序列配置
    struct adc_sequence sequence = {
        .buffer = &adc_raw_value,
        .buffer_size = sizeof(adc_raw_value),
        .resolution = adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].resolution,
    };

    // --- 主循环 ---
    while (1) {
        (void)adc_sequence_init_dt(&adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX], &sequence);

        ret = adc_read(adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].dev, &sequence);
        if (ret < 0) {
            LOG_ERR("错误 %d：通道 %d 的 ADC 读取失败",
                    ret, adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].channel_id);
            k_msleep(100);
            continue;
        }

        int sensor_value = adc_raw_value;

        uint32_t max_adc_raw = (1U << adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX].resolution) - 1;

        // --- 将 ADC 原始值映射到 PWM 占空比 ---
        uint32_t output_duty_ns = (PWM_PERIOD_NS * sensor_value) / max_adc_raw;

        // 设置 PWM 占空比
        ret = pwm_set_dt(&led, PWM_PERIOD_NS, output_duty_ns);
        if (ret < 0) {
            LOG_ERR("错误 %d：设置 PWM 占空比失败。", ret);
        }

        // --- 打印信息 ---
        adc_millivolts = sensor_value;
        ret = adc_raw_to_millivolts_dt(&adc_channels[POTENTIOMETER_ADC_CHANNEL_IDX], &adc_millivolts);
        if (ret < 0) {
            LOG_WRN("ADC 到 mV 转换不支持/失败：%d", ret);
            LOG_INF("传感器原始值 = %d\t输出占空比 (ns) = %u", sensor_value, output_duty_ns);
        } else {
            LOG_INF("传感器原始值 = %d (%d mV)\t输出占空比 (ns) = %u",
                    sensor_value, adc_millivolts, output_duty_ns);
        }

        k_msleep(100);
    }
    return 0;
}
```

**ADC（模数转换器）和 PWM（脉宽调制）设备配置**
- pot_pwm_example 日志模块：

	- LOG_MODULE_REGISTER(pot_pwm_example, CONFIG_LOG_DEFAULT_LEVEL)：这注册了一个名为 pot_pwm_example 的日志模块，并将其日志级别设置为系统的默认配置，这有助于调试。

- ADC 配置：

	- #if !DT_NODE_EXISTS(DT_PATH(zephyr_user)) ... #endif：这个预处理器指令是一个设备树检查，确保存在包含 ADC 通道定义的有效覆盖文件。这要求用户必须为特定硬件提供正确的配置。

	- static const struct adc_dt_spec adc_channels[];：这部分代码利用 Zephyr 的设备树自动检索所有已配置 ADC 通道的信息。这种方法使代码灵活且可在不同硬件间移植，无需手动更改配置。

	- #define POTENTIOMETER_ADC_CHANNEL_IDX 1：定义了一个宏来指定电位器连接到 adc_channels 数组中的哪个通道。

- PWM 配置：

	- static const struct pwm_dt_spec led = PWM_DT_SPEC_GET(DT_ALIAS(pwm_led));：这行代码从设备树中检索别名 pwm_led 的 PWM 设备信息。这是 Zephyr 查找和引用硬件设备的标准做法。

	- #define PWM_PERIOD_NS 1000000UL：这定义了 PWM 信号周期为 1 毫秒（1,000,000 纳秒），对应频率为 1 kHz。这个频率非常适合 LED 调光，因为它足够高，可以防止可见的闪烁。

**初始化和设置**
- 日志信息：

	- LOG_INF("Starting Zephyr Potentiometer to PWM example...");：在程序开始时打印一条信息日志消息，通知用户示例已开始。

- ADC 初始化：

	- !adc_is_ready_dt()：在尝试使用 ADC 设备之前，执行检查以确认设备已就绪。如果设备未就绪，会记录错误并退出程序。

	- adc_channel_setup_dt()：此函数配置连接到电位器的特定 ADC 通道，包括其分辨率和增益。

- PWM 初始化：

	- !device_is_ready(led.dev)：与 ADC 类似，这行代码检查 PWM 设备是否就绪。如果没有，会记录错误并退出程序。

	- LOG_INF(...)：打印 PWM 周期和频率信息，帮助用户确认配置。

- ADC 序列配置：

	- struct adc_sequence sequence：定义了一个 adc_sequence 结构体来描述单次 ADC 转换操作。它指定了存储结果的缓冲区（adc_raw_value）、其大小（sizeof(adc_raw_value)）以及要使用的 ADC 分辨率。

**主循环**
代码的核心逻辑在无限 while (1) 循环中运行：

- ADC 读取：

	- adc_sequence_init_dt()：初始化 ADC 序列以确保每次读取都使用正确的配置。

	- adc_read()：这触发 ADC 转换以从电位器读取模拟值。如果读取失败，会记录错误，程序暂停 100 毫秒后继续。

	- int sensor_value = adc_raw_value;：将原始 ADC 值赋给 sensor_value 变量。

- 将 ADC 值映射到 PWM 占空比：

	- uint32_t max_adc_raw：这计算最大可能的原始 ADC 值。

	- uint32_t output_duty_ns = (PWM_PERIOD_NS * sensor_value) / max_adc_raw;：这是核心映射逻辑。它将原始 ADC 值（sensor_value）按比例缩放到 PWM 周期（PWM_PERIOD_NS）的范围，以获得调整 LED 亮度的占空比值。

- 设置 PWM 占空比：

	- pwm_set_dt()：此函数将新计算的占空比（output_duty_ns）应用到 PWM 设备，立即改变 LED 的亮度。


- 延迟：

	- k_msleep(100)：程序在每次循环后暂停 100 毫秒。这控制了 ADC 读取和 PWM 更新的频率，防止过度的 CPU 负载并提供稳定的用户体验。

### 结果图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/adc.gif" style={{width:700, height:'auto'}}/></div>

## UART

### 硬件准备

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO nRF54L15 Sense</th>
			<th>L76K GNSS Module for Seeed Studio XIAO</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/GNSS.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


### 软件实现

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-gps" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```c
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/uart.h>
#include <zephyr/logging/log.h>
#include <nrfx_power.h>
#include <string.h>
#include <math.h>
#include <stdio.h>
#include <stdlib.h>

// 注册日志模块
LOG_MODULE_REGISTER(gps_app, LOG_LEVEL_INF);

// 类型定义
#define UBYTE uint8_t
#define UWORD uint16_t
#define UDOUBLE uint32_t

// 缓冲区大小
#define SENTENCE_SIZE 100
#define BUFFSIZE 800

// NMEA 命令
#define HOT_START "$PMTK101"
#define WARM_START "$PMTK102"
#define COLD_START "$PMTK103"
#define FULL_COLD_START "$PMTK104"
#define SET_PERPETUAL_STANDBY_MODE "$PMTK161"
#define SET_PERIODIC_MODE "$PMTK225"
#define SET_NORMAL_MODE "$PMTK225,0"
#define SET_PERIODIC_BACKUP_MODE "$PMTK225,1,1000,2000"
#define SET_PERIODIC_STANDBY_MODE "$PMTK225,2,1000,2000"
#define SET_PERPETUAL_BACKUP_MODE "$PMTK225,4"
#define SET_ALWAYSLOCATE_STANDBY_MODE "$PMTK225,8"
#define SET_ALWAYSLOCATE_BACKUP_MODE "$PMTK225,9"
#define SET_POS_FIX "$PMTK220"
#define SET_POS_FIX_100MS "$PMTK220,100"
#define SET_POS_FIX_200MS "$PMTK220,200"
#define SET_POS_FIX_400MS "$PMTK220,400"
#define SET_POS_FIX_800MS "$PMTK220,800"
#define SET_POS_FIX_1S "$PMTK220,1000"
#define SET_POS_FIX_2S "$PMTK220,2000"
#define SET_POS_FIX_4S "$PMTK220,4000"
#define SET_POS_FIX_8S "$PMTK220,8000"
#define SET_POS_FIX_10S "$PMTK220,10000"
#define SET_SYNC_PPS_NMEA_OFF "$PMTK255,0"
#define SET_SYNC_PPS_NMEA_ON "$PMTK255,1"
#define SET_NMEA_BAUDRATE "$PMTK251"
#define SET_NMEA_BAUDRATE_115200 "$PMTK251,115200"
#define SET_NMEA_BAUDRATE_57600 "$PMTK251,57600"
#define SET_NMEA_BAUDRATE_38400 "$PMTK251,38400"
#define SET_NMEA_BAUDRATE_19200 "$PMTK251,19200"
#define SET_NMEA_BAUDRATE_14400 "$PMTK251,14400"
#define SET_NMEA_BAUDRATE_9600 "$PMTK251,9600"
#define SET_NMEA_BAUDRATE_4800 "$PMTK251,4800"
#define SET_REDUCTION "$PMTK314,-1"
#define SET_NMEA_OUTPUT "$PMTK314,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0"

// 结构体定义
typedef struct
{
	double Lon;	   // GPS 经度
	double Lat;	   // GPS 纬度
	char Lon_area; // E 或 W
	char Lat_area; // N 或 S
	UBYTE Time_H;  // 时间 小时
	UBYTE Time_M;  // 时间 分钟
	UBYTE Time_S;  // 时间 秒
	UBYTE Status;  // 1: 定位成功, 0: 定位失败
} GNRMC;

typedef struct
{
	double Lon;
	double Lat;
} Coordinates;

// 全局变量和常量
char const Temp[16] = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};
static const double pi = 3.14159265358979324;
static const double a = 6378245.0;
static const double ee = 0.00669342162296594323;
static const double x_pi = 3.14159265358979324 * 3000.0 / 180.0;

static char buff_t[BUFFSIZE] = {0};
static GNRMC GPS;

// UART 设备和缓冲区
static const struct device *uart_dev;
static char latest_gnrmc[SENTENCE_SIZE];
static volatile bool new_gnrmc_available = false;

// 函数原型
void DEV_Uart_SendByte(char data);
void DEV_Uart_SendString(char *data);
void L76X_Send_Command(char *data);
GNRMC L76X_Gat_GNRMC(void);
Coordinates L76X_Baidu_Coordinates(void);
Coordinates L76X_Google_Coordinates(void);
static double transformLat(double x, double y);
static double transformLon(double x, double y);
static Coordinates bd_encrypt(Coordinates gg);
static Coordinates transform(Coordinates gps);

// UART 中断回调
static void uart_callback(const struct device *dev, void *user_data)
{
	ARG_UNUSED(user_data);
	static char temp_buffer[SENTENCE_SIZE];
	static int temp_index = 0;

	while (uart_irq_update(dev) && uart_irq_is_pending(dev))
	{
		if (uart_irq_rx_ready(dev))
		{
			uint8_t byte;
			if (uart_fifo_read(dev, &byte, 1) == 1)
			{
				if (byte == '\n')
				{
					temp_buffer[temp_index] = '\0';
					if (strncmp(temp_buffer, "$GNRMC", 6) == 0 || strncmp(temp_buffer, "$PNRMC", 6) == 0)
					{
						strncpy(latest_gnrmc, temp_buffer, SENTENCE_SIZE);
						new_gnrmc_available = true;
					}
					temp_index = 0;
				}
				else
				{
					if (temp_index < SENTENCE_SIZE - 1)
					{
						temp_buffer[temp_index++] = byte;
					}
					else
					{
						temp_index = 0; // 溢出时重置
					}
				}
			}
		}
	}
}

// 主函数
int main(void)
{
	// 请求恒定延迟模式进行电源管理
	nrfx_power_constlat_mode_request();
	LOG_INF("启动 L76X GPS 模块示例");

	// 初始化 UART 设备
	uart_dev = DEVICE_DT_GET(DT_NODELABEL(xiao_serial));
	if (!device_is_ready(uart_dev))
	{
		LOG_ERR("UART 设备未就绪!");
		return -1;
	}
	LOG_INF("UART 设备已初始化。");

	// 配置 UART 中断
	if (uart_irq_callback_user_data_set(uart_dev, uart_callback, NULL) != 0)
	{
		LOG_ERR("设置 UART 回调失败!");
		return -1;
	}
	uart_irq_rx_enable(uart_dev);
	LOG_INF("UART 中断已启用。");

	// 初始化 GPS 模块
	L76X_Send_Command(SET_NMEA_OUTPUT);
	k_msleep(100);
	L76X_Send_Command(SET_POS_FIX_1S);
	k_msleep(100);

	LOG_INF("GPS 模块已初始化。等待数据...");

	while (true)
	{
		// 检查新的 GNRMC 语句
		if (new_gnrmc_available)
		{
			strncpy(buff_t, latest_gnrmc, BUFFSIZE);
			new_gnrmc_available = false;

			// 记录原始 GNRMC 语句用于调试
			LOG_INF("原始 GNRMC: %s", buff_t);

			// 解析 GNRMC 数据
			GPS = L76X_Gat_GNRMC();

			// 输出 GPS 数据
			LOG_INF("\n--- GPS 数据 ---");
			LOG_INF("时间 (GMT+8): %02d:%02d:%02d", GPS.Time_H, GPS.Time_M, GPS.Time_S);
			if (GPS.Status == 1)
			{
				LOG_INF("纬度 (WGS-84): %.6f %c", GPS.Lat, GPS.Lat_area);
				LOG_INF("经度 (WGS-84): %.6f %c", GPS.Lon, GPS.Lon_area);

				// 坐标转换
				Coordinates baidu_coords = L76X_Baidu_Coordinates();
				LOG_INF("百度纬度: %.6f", baidu_coords.Lat);
				LOG_INF("百度经度: %.6f", baidu_coords.Lon);

				Coordinates google_coords = L76X_Google_Coordinates();
				LOG_INF("谷歌纬度: %.6f", google_coords.Lat);
				LOG_INF("谷歌经度: %.6f", google_coords.Lon);
				LOG_INF("GPS 定位成功。");
			}
			else
			{
				LOG_INF("GPS 定位失败或无有效数据。");
			}
		}
		else
		{
			LOG_INF("无新的 GNRMC 数据可用。");
		}

		k_msleep(2000); // 等待 2 秒后进行下次读取
	}

	return 0;
}

// 发送单个字节
void DEV_Uart_SendByte(char data)
{
	uart_poll_out(uart_dev, data);
}

// 发送字符串
void DEV_Uart_SendString(char *data)
{
	while (*data)
	{
		DEV_Uart_SendByte(*data++);
	}
}

// 发送带校验和的 L76X 命令
void L76X_Send_Command(char *data)
{
	char Check = data[1], Check_char[3] = {0};
	UBYTE i = 0;
	DEV_Uart_SendByte('\r');
	DEV_Uart_SendByte('\n');

	for (i = 2; data[i] != '\0'; i++)
	{
		Check ^= data[i]; // 计算校验和
	}
	Check_char[0] = Temp[Check / 16 % 16];
	Check_char[1] = Temp[Check % 16];
	Check_char[2] = '\0';

	DEV_Uart_SendString(data);
	DEV_Uart_SendByte('*');
	DEV_Uart_SendString(Check_char);
	DEV_Uart_SendByte('\r');
	DEV_Uart_SendByte('\n');
}

// 解析 GNRMC 数据
GNRMC L76X_Gat_GNRMC(void)
{
	GNRMC gps = {0}; // 用零初始化
	UWORD add = 0, x = 0, z = 0, i = 0;
	UDOUBLE Time = 0;

	add = 0;
	while (add < BUFFSIZE)
	{
		// 查找 GNRMC 或 PNRMC 语句
		if (buff_t[add] == '$' && buff_t[add + 1] == 'G' && (buff_t[add + 2] == 'N' || buff_t[add + 2] == 'P') &&
			buff_t[add + 3] == 'R' && buff_t[add + 4] == 'M' && buff_t[add + 5] == 'C')
		{
			x = 0;
			for (z = 0; x < 12; z++)
			{
				if (buff_t[add + z] == '\0')
				{
					break;
				}
				if (buff_t[add + z] == ',')
				{
					x++;
					if (x == 1)
					{ // 时间字段
						if (buff_t[add + z + 1] != ',')
						{ // 检查时间字段是否不为空
							Time = 0;
							for (i = 0; buff_t[add + z + i + 1] != '.'; i++)
							{
								if (buff_t[add + z + i + 1] == '\0' || buff_t[add + z + i + 1] == ',')
								{
									break;
								}
								Time = (buff_t[add + z + i + 1] - '0') + Time * 10;
							}
							gps.Time_H = Time / 10000 + 8; // 调整为 GMT+8
							gps.Time_M = (Time / 100) % 100;
							gps.Time_S = Time % 100;
							if (gps.Time_H >= 24)
							{
								gps.Time_H = gps.Time_H - 24;
							}
						}
					}
					else if (x == 2)
					{ // 状态字段
						if (buff_t[add + z + 1] == 'A')
						{
							gps.Status = 1; // 定位成功
						}
						else
						{
							gps.Status = 0; // 定位失败
							break;			// 如果无效则提前退出
						}
					}
					else if (x == 3)
					{ // 纬度字段
						if (buff_t[add + z + 1] != ',')
						{ // 检查纬度字段是否不为空
							double latitude_val = 0;
							UBYTE decimal_found = 0;
							double decimal_multiplier = 0.1;

							int k = 1;
							while (buff_t[add + z + k] != ',' && buff_t[add + z + k] != '\0')
							{
								if (buff_t[add + z + k] == '.')
								{
									decimal_found = 1;
									k++;
									continue;
								}
								if (!decimal_found)
								{
									latitude_val = latitude_val * 10 + (buff_t[add + z + k] - '0');
								}
								else
								{
									latitude_val = latitude_val + (buff_t[add + z + k] - '0') * decimal_multiplier;
									decimal_multiplier *= 0.1;
								}
								k++;
							}
							gps.Lat = latitude_val;
							gps.Lat_area = buff_t[add + z + k + 1]; // N 或 S
							z += k + 1;
						}
						else
						{
							gps.Status = 0; // 无效数据
							break;
						}
					}
					else if (x == 5)
					{ // 经度字段
						if (buff_t[add + z + 1] != ',')
						{ // 检查经度字段是否不为空
							double longitude_val = 0;
							UBYTE decimal_found = 0;
							double decimal_multiplier = 0.1;

							int k = 1;
							while (buff_t[add + z + k] != ',' && buff_t[add + z + k] != '\0')
							{
								if (buff_t[add + z + k] == '.')
								{
									decimal_found = 1;
									k++;
									continue;
								}
								if (!decimal_found)
								{
									longitude_val = longitude_val * 10 + (buff_t[add + z + k] - '0');
								}
								else
								{
									longitude_val = longitude_val + (buff_t[add + z + k] - '0') * decimal_multiplier;
									decimal_multiplier *= 0.1;
								}
								k++;
							}
							gps.Lon = longitude_val;
							gps.Lon_area = buff_t[add + z + k + 1]; // E 或 W
							z += k + 1;
							break;
						}
						else
						{
							gps.Status = 0; // 无效数据
							break;
						}
					}
				}
			}
			break;
		}
		add++;
	}
	return gps;
}

// 转换为百度坐标 (BD-09)
Coordinates L76X_Baidu_Coordinates(void)
{
	Coordinates wgs84_coords;
	wgs84_coords.Lat = GPS.Lat;
	wgs84_coords.Lon = GPS.Lon;

	Coordinates gcj02_coords = transform(wgs84_coords);
	Coordinates bd09_coords = bd_encrypt(gcj02_coords);
	return bd09_coords;
}

// 转换为谷歌坐标 (GCJ-02)
Coordinates L76X_Google_Coordinates(void)
{
	Coordinates wgs84_coords;
	wgs84_coords.Lat = GPS.Lat;
	wgs84_coords.Lon = GPS.Lon;

	Coordinates gcj02_coords = transform(wgs84_coords);
	return gcj02_coords;
}

// 坐标转换辅助函数
static double transformLat(double x, double y)
{
	double ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * sqrt(fabs(x));
	ret += (20.0 * sin(6.0 * x * pi) + 20.0 * sin(2.0 * x * pi)) * 2.0 / 3.0;
	ret += (20.0 * sin(y * pi) + 40.0 * sin(y / 3.0 * pi)) * 2.0 / 3.0;
	ret += (160.0 * sin(y / 12.0 * pi) + 320 * sin(y * pi / 30.0)) * 2.0 / 3.0;
	return ret;
}

static double transformLon(double x, double y)
{
	double ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * sqrt(fabs(x));
	ret += (20.0 * sin(6.0 * x * pi) + 20.0 * sin(2.0 * x * pi)) * 2.0 / 3.0;
	ret += (20.0 * sin(x * pi) + 40.0 * sin(x / 3.0 * pi)) * 2.0 / 3.0;
	ret += (150.0 * sin(x / 12.0 * pi) + 300.0 * sin(x / 30.0 * pi)) * 2.0 / 3.0;
	return ret;
}

static Coordinates bd_encrypt(Coordinates gg)
{
	Coordinates bd;
	double x = gg.Lon, y = gg.Lat;
	double z = sqrt(x * x + y * y) + 0.00002 * sin(y * x_pi);
	double theta = atan2(y, x) + 0.000003 * cos(x * x_pi);
	bd.Lon = z * cos(theta) + 0.0065;
	bd.Lat = z * sin(theta) + 0.006;
	return bd;
}

static Coordinates transform(Coordinates gps)
{
	Coordinates gg;
	double dLat = transformLat(gps.Lon - 105.0, gps.Lat - 35.0);
	double dLon = transformLon(gps.Lon - 105.0, gps.Lat - 35.0);
	double radLat = gps.Lat / 180.0 * pi;
	double magic = sin(radLat);
	magic = 1 - ee * magic * magic;
	double sqrtMagic = sqrt(magic);
	dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * pi);
	dLon = (dLon * 180.0) / (a / sqrtMagic * cos(radLat) * pi);
	gg.Lat = gps.Lat + dLat;
	gg.Lon = gps.Lon + dLon;
	return gg;
}
```

**GPS 模块配置和初始化**
- `gps_app` 日志模块：

	-` LOG_MODULE_REGISTER(gps_app, LOG_LEVEL_INF):`这注册了一个名为 gps_app 的日志模块，并将其日志级别设置为 INFO。这允许程序通过 Zephyr 的日志系统输出信息，这对调试和监控很有用。

- 类型定义和宏：

	-` UBYTE`、`UWORD`、`UDOUBLE:`这些是自定义的无符号整数类型别名，通过明确变量的预期大小来提高代码可读性。

	- `SENTENCE_SIZE, BUFFSIZE:`这些定义了用于存储 NMEA 语句和更大数据缓冲区的缓冲区固定大小。

	- 宏如 `HOT_START, SET_NMEA_OUTPUT:`这些宏定义了发送到 L76X GPS 模块的各种 NMEA 协议命令，用于配置其操作模式、输出频率、波特率等。

- 结构体定义：

	- `GNRMC:`此结构体用于存储从 GNRMC（GPS 推荐最小特定数据）NMEA 语句解析的关键信息，包括经度、纬度、时间、状态和基本方向。

	- `Coordinates:`一个简单的结构体，用于存储地理坐标的经度和纬度。

- 全局变量和常量：

	- `buff_t:`一个大小为 BUFFSIZE 的全局缓冲区，用于存储原始 UART 数据。

	-` GPS:`一个全局 GNRMC 结构体实例，用于保存解析的 GPS 数据。

	- `uart_dev:`指向 UART 设备结构体的指针，用于 UART 通信。

	- `new_gnrmc_available:`一个易失性布尔标志，当接收到新的有效 GNRMC 语句时设置为 true，通知主循环有新数据可供处理。

- `uart_callback() 函数:`

	- 这是一个 UART 中断回调函数，当 UART 接收到数据时触发。

	- 该函数逐字节读取 UART FIFO，当遇到换行符 \n 时将数据作为完整语句处理。


**主函数 main()**
- 系统初始化：

	- `nrfx_power_constlat_mode_request():`请求恒定延迟模式，确保电源管理不会干扰实时操作。

	- `uart_dev = DEVICE_DT_GET:`获取 UART 设备句柄，并使用 device_is_ready() 检查设备是否就绪。

	- `uart_irq_callback_user_data_set()` 和 `uart_irq_rx_enable():`这些配置并启用 UART 接收中断，注册 uart_callback 函数作为中断处理程序，确保异步接收 GPS 数据。

- GPS 模块初始化：

	- `L76X_Send_Command(SET_NMEA_OUTPUT):`发送命令配置 GPS 模块仅输出指定的 NMEA 语句如 GNRMC，减少不必要的数据流量。

	-` L76X_Send_Command(SET_POS_FIX_1S):`将 GPS 模块的位置更新频率设置为 1 秒。

- 主循环：

	- 循环无限运行，持续检查 new_gnrmc_available 标志。

	- 如果标志为 true，它将最新的 GPS 语句从 latest_gnrmc 复制到 buff_t，然后调用 L76X_Gat_GNRMC() 解析数据。

	- 根据解析结果，它打印时间、WGS-84 经纬度以及转换后的百度和谷歌坐标。

	- 如果 GPS.Status 为 0，它打印"定位失败"消息。

	- 如果没有新数据可用，它打印"没有新的 GNRMC 数据可用"。

	- k_msleep(2000)：程序在每次循环后暂停 2 秒以控制输出频率。

 


### 结果图

<div class="table-center">
	<table align="center">
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/gps_diplay.png" style={{width:500, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/gps_conect.jpg" style={{width:340, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

## I2C

### 硬件准备

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO nRF54L15 Sense</th>
			<th>Seeed Studio Expansion Board Base for XIAO</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-nRF54L15-Sense-p-6494.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


### 软件实现

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-expansion-base-for-xiao/oled" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```c
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/display/cfb.h>
#include <stdio.h>
#include <string.h>

#define LOG_LEVEL CONFIG_LOG_DEFAULT_LEVEL
#include <zephyr/logging/log.h>
LOG_MODULE_REGISTER(main_app, LOG_LEVEL);

/**
 * @brief 初始化显示设备。
 * @param[out] dev 指向显示设备结构体的指针。
 * @return 成功返回0，失败返回-1。
 */
static int display_init(const struct device **dev) {
    *dev = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));
    if (!device_is_ready(*dev)) {
        LOG_ERR("设备 %s 未就绪", (*dev)->name);
        return -1;
    }

    if (display_set_pixel_format(*dev, PIXEL_FORMAT_MONO10) != 0) {
        if (display_set_pixel_format(*dev, PIXEL_FORMAT_MONO01) != 0) {
            LOG_ERR("设置所需像素格式失败");
            return -1;
        }
    }

    LOG_INF("已初始化 %s", (*dev)->name);
    return 0;
}

/**
 * @brief 初始化紧凑帧缓冲区(CFB)和显示消隐。
 * @param dev 指向显示设备结构体的指针。
 * @return 成功返回0，失败返回-1。
 */
static int framebuffer_setup(const struct device *dev) {
    if (cfb_framebuffer_init(dev)) {
        LOG_ERR("帧缓冲区初始化失败！");
        return -1;
    }
    cfb_framebuffer_clear(dev, true);
    display_blanking_off(dev);
    return 0;
}

/**
 * @brief 为显示器选择合适的字体。
 * @param dev 指向显示设备结构体的指针。
 * @param[out] font_width 指向存储所选字体宽度的指针。
 * @param[out] font_height 指向存储所选字体高度的指针。
 * @return 成功返回0，未找到合适字体返回-1。
 */
static int select_font(const struct device *dev, uint8_t *font_width, uint8_t *font_height) {
    int chosen_font_idx = -1;
    uint8_t current_font_width, current_font_height;

    for (int idx = 0; idx < 42; idx++) {
        if (cfb_get_font_size(dev, idx, &current_font_width, &current_font_height) == 0) {
            if (current_font_width == 8 && current_font_height == 8) {
                chosen_font_idx = idx;
                *font_width = current_font_width;
                *font_height = current_font_height;
                cfb_framebuffer_set_font(dev, chosen_font_idx);
                LOG_INF("已选择字体索引: %d，宽度: %d，高度: %d", chosen_font_idx, *font_width, *font_height);
                break;
            }
            if (chosen_font_idx == -1 && current_font_width > 0 && current_font_height > 0) {
                chosen_font_idx = idx;
                *font_width = current_font_width;
                *font_height = current_font_height;
                cfb_framebuffer_set_font(dev, chosen_font_idx);
                LOG_INF("默认使用字体索引: %d，宽度: %d，高度: %d", chosen_font_idx, *font_width, *font_height);
            }
        } else {
            break;
        }
    }

    if (chosen_font_idx == -1) {
        LOG_ERR("未找到或加载合适的字体！");
        return -1;
    }
    return 0;
}

/**
 * @brief 在指定行和列打印单行文本。
 * @param dev 指向显示设备结构体的指针。
 * @param text 要打印的字符串。
 * @param row 文本开始的行号（从0开始）。
 * @param col 文本开始的列号（从0开始）。
 * @param font_width 当前选择字体的宽度（像素）。
 * @param font_height 当前选择字体的高度（像素）。
 */
static void print_text_by_row_col(const struct device *dev, const char *text, int row, int col,
                                  uint8_t font_width, uint8_t font_height) {
    int pixel_x = col * font_width;
    int pixel_y = row * font_height;

    if (cfb_print(dev, text, pixel_x, pixel_y)) {
        LOG_ERR("打印文本失败: \"%s\" 在行 %d，列 %d", text, row, col);
    }
}

int main(void) {
    const struct device *dev;
    uint8_t font_width = 0;
    uint8_t font_height = 0;
    uint16_t x_res, y_res;

    if (display_init(&dev) != 0) {
        return 0;
    }

    if (framebuffer_setup(dev) != 0) {
        return 0;
    }

    if (select_font(dev, &font_width, &font_height) != 0) {
        return 0;
    }

    x_res = cfb_get_display_parameter(dev, CFB_DISPLAY_WIDTH);
    y_res = cfb_get_display_parameter(dev, CFB_DISPLAY_HEIGH);
    LOG_INF("显示分辨率: %dx%d", x_res, y_res);
    cfb_set_kerning(dev, 0);

    while (1) {
        cfb_framebuffer_clear(dev, false);

        const char *line1_text = "nRF54L15";
        // 在第1行第2列打印line1
        print_text_by_row_col(dev, line1_text, 1, 2, font_width, font_height);

        const char *line2_text = "Hello World";
        // 在第2行第1列打印line2
        print_text_by_row_col(dev, line2_text, 2, 1, font_width, font_height);

        cfb_framebuffer_finalize(dev);
        k_sleep(K_MSEC(1000));
    }

    return 0;
}

```

**显示设备配置和初始化**
- `main_app` 日志模块：

	- #define LOG_LEVEL CONFIG_LOG_DEFAULT_LEVEL 和 LOG_MODULE_REGISTER(main_app, LOG_LEVEL) 注册一个名为 main_app 的日志模块，并将其日志级别设置为系统的默认配置。这允许开发者通过 Zephyr 的日志系统轻松调试和输出信息。

- `display_init()` 函数：

	- `*dev = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));:` 这行代码从 Zephyr 设备树中检索选定的显示设备。这种方法确保代码与硬件无关。

	- `display_set_pixel_format(*dev, PIXEL_FORMAT_MONO10): `代码尝试将显示器的像素格式设置为 PIXEL_FORMAT_MONO10。如果失败，则尝试 PIXEL_FORMAT_MONO01。这确保显示器在单色模式下运行，这对某些显示技术（例如 OLED 或电子纸）是必需的。

- `framebuffer_setup()` 函数：

	- `cfb_framebuffer_init(dev): `这初始化紧凑帧缓冲区（CFB）。CFB 是 Zephyr 中的轻量级图形库，用于在显示器上绘制文本和简单图形。

	- `cfb_framebuffer_clear(dev, true): `这清除帧缓冲区并立即将其内容写入显示器，确保屏幕清洁。

	- `display_blanking_off(dev): `这关闭显示器的消隐功能，通常表示显示器已准备好接收数据并显示图像。

- `select_font()` 函数：

	- `cfb_get_font_size(): `此函数循环遍历可用字体以找到合适的字体。

	- 代码优先选择 `8x8` 像素字体，因为它是常见且易于阅读的小字体。

	- 如果找不到 `8x8` 字体，则选择第一个可用的非零大小字体作为备选。

	- `cfb_framebuffer_set_font(dev, chosen_font_idx):` 找到合适的字体后，将其设置为帧缓冲区的当前字体。

- `print_text_by_row_col()` 函数：

	-` int pixel_x = col * font_width; `和 `int pixel_y = row * font_height;:` 此函数将文本的行列坐标（以字符为单位）转换为像素坐标，使文本定位更加直观。

	- `cfb_print():` 这是 CFB 库的核心函数，用于在指定像素位置打印文本。

**主循环**
代码的核心逻辑在无限 `while (1)` 循环中运行：

- 清除屏幕：`cfb_framebuffer_clear(dev, false):` 在每个循环开始时，这清除帧缓冲区而不立即刷新显示器。这允许一次绘制多个元素，防止屏幕闪烁。

- 打印文本：
	
	- 定义了两个字符串，`line1_text` 和 `line2_text`。

	- print_text_by_row_col()：使用自定义函数在屏幕上的指定行列位置打印这两行文本。第一行在 `(1, 2)` 位置打印，第二行在 `(2, 1)` 位置打印。

	- 刷新显示器：`cfb_framebuffer_finalize(dev)`: 此函数将所有待处理的绘制命令从帧缓冲区一次性发送到显示器，使所有内容同时出现。

	- 延迟：`k_sleep(K_MSEC(1000)):` 每个循环后，程序暂停 1000 毫秒（1 秒）。这控制屏幕更新频率，适用于以稳定方式显示静态信息的应用程序，如时钟或传感器数据。

### 结果图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/nrf_oled.jpg" style={{width:700, height:'auto'}}/></div>


## SPI

### 硬件准备

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO nRF54L15 Sense</th>
			<th>ePaper Driver Board for Seeed Studio XIAO</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/2-101991422-XIAO-nRF54L15-Sense.jpg" style={{width:300, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper-driver-board-for-xiao.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


### 软件实现

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-epaper" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```cpp
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/display.h>
#include <lvgl.h>

#define LOG_LEVEL CONFIG_LOG_DEFAULT_LEVEL
#include <zephyr/logging/log.h>
LOG_MODULE_REGISTER(epaper_simple);

int main(void)
{
    // 获取显示设备
    const struct device *display_dev = DEVICE_DT_GET(DT_CHOSEN(zephyr_display));
    if (!device_is_ready(display_dev)) {
        LOG_ERR("Display device not ready!");
        return 0;
    }
    LOG_INF("Display device ready.");

    // 初始化 LVGL
    // 必须在任何 LVGL 对象创建或操作之前调用
    lv_init();

    // 关闭显示屏空白（对于电子纸，这通常会触发全刷新以清除旧内容）
    if (display_blanking_off(display_dev)) {
        LOG_ERR("Failed to turn off display blanking!");
        return 0;
    }
    LOG_INF("Display blanking is off. Screen should be cleared by full refresh.");

    // 获取当前活动屏幕并将其背景设置为白色
    // 这也是一个 LVGL 级别的"清除"操作，确保画布为白色
    lv_obj_t *scr = lv_scr_act();
    lv_obj_set_style_bg_color(scr, lv_color_white(), LV_STATE_DEFAULT);
    lv_obj_set_style_bg_opa(scr, LV_OPA_COVER, LV_STATE_DEFAULT);

    // 移除屏幕内边距和滚动条
    lv_obj_set_style_pad_all(scr, 0, LV_STATE_DEFAULT);
    lv_obj_set_scrollbar_mode(scr, LV_SCROLLBAR_MODE_OFF);


    // 获取显示宽度和高度（用于布局）
    lv_disp_t *disp = lv_disp_get_default();
    lv_coord_t width = lv_disp_get_hor_res(disp);
    lv_coord_t height = lv_disp_get_ver_res(disp);
    LOG_INF("Display width: %d, height: %d", width, height);


    // 创建一个居中的面板
    lv_obj_t *panel = lv_obj_create(scr);
    lv_obj_set_size(panel, 300, 100);
    lv_obj_align(panel, LV_ALIGN_CENTER, 0, 0);

    // 设置面板背景为白色，边框为黑色以提高可见性
    lv_obj_set_style_bg_color(panel, lv_color_white(), LV_STATE_DEFAULT);
    lv_obj_set_style_border_color(panel, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_border_width(panel, 2, LV_STATE_DEFAULT);
    lv_obj_set_style_pad_all(panel, 10, LV_STATE_DEFAULT);

    
    // 向面板添加文本
    lv_obj_t *label = lv_label_create(panel);
    lv_label_set_text(label, "你好电子纸");

    // 设置文本颜色为黑色，在白色背景上提高可见性
    lv_obj_set_style_text_color(label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(label, &lv_font_montserrat_24, LV_STATE_DEFAULT);
    lv_obj_align(label, LV_ALIGN_CENTER, 0, 0);

    // 在右上角添加时间标签
    lv_obj_t *time_label = lv_label_create(scr);
    lv_label_set_text(time_label, "时间 07:21 PM");
    lv_obj_set_style_text_color(time_label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(time_label, &lv_font_montserrat_18, LV_STATE_DEFAULT);
    lv_obj_align(time_label, LV_ALIGN_TOP_RIGHT, -20, 10);

    // 在左上角添加 Zephyr 标志
    lv_obj_t *zephyr_label = lv_label_create(scr);
    lv_label_set_text(zephyr_label, "由 Zephyr 驱动");
    lv_obj_set_style_text_color(zephyr_label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(zephyr_label, &lv_font_montserrat_24, LV_STATE_DEFAULT);
    lv_obj_align(zephyr_label, LV_ALIGN_BOTTOM_LEFT, 20, -10);

    // 在右下角添加作者标签
    lv_obj_t *author_label = lv_label_create(scr);
    lv_label_set_text(author_label, "作者：Stellar");
    lv_obj_set_style_text_color(author_label, lv_color_black(), LV_STATE_DEFAULT);
    lv_obj_set_style_text_font(author_label, &lv_font_montserrat_16, LV_STATE_DEFAULT);
    lv_obj_align(author_label, LV_ALIGN_BOTTOM_RIGHT, -20, -10);


    // 使用 for 循环在左上角添加四个方块
    lv_obj_t *squares[4];
    int square_offsets = 20;
    for (int i = 0; i < 4; i++) {
        squares[i] = lv_obj_create(scr);
        lv_obj_set_size(squares[i], 30, 30);
        lv_obj_set_style_bg_color(squares[i], lv_color_white(), LV_STATE_DEFAULT);
        lv_obj_set_style_border_color(squares[i], lv_color_black(), LV_STATE_DEFAULT);
        lv_obj_set_style_border_width(squares[i], 2, LV_STATE_DEFAULT);
        lv_obj_set_style_radius(squares[i], 0, LV_STATE_DEFAULT);
        lv_obj_align(squares[i], LV_ALIGN_TOP_LEFT, square_offsets, 20);
        square_offsets+=40;
    }

    while (1) {
        lv_task_handler();
        k_sleep(K_MSEC(1000)); // 降低刷新率，适合电子纸
    }
    return 0;
}
```

**设备初始化：**

- 代码首先使用 `DEVICE_DT_GET(DT_CHOSEN(zephyr_display))` 从设备树中获取显示设备。

- 然后调用 `device_is_ready()` 检查设备是否已正确初始化并准备好进行操作。这是任何硬件交互的关键第一步。

**LVGL 初始化：**

- `lv_init()` 是 LVGL 图形库的入口点。必须在创建任何 LVGL 对象或执行任何操作之前调用它，因为它会初始化库的内部状态。

**屏幕清除：**

- 调用 `display_blanking_off()` 函数。对于电子纸显示器，这通常会触发完全刷新以清除屏幕上的任何旧内容。

- 为了进一步确保画布干净，代码使用 `lv_scr_act()` 获取当前活动屏幕，并使用 `lv_obj_set_style_bg_color()` 将其背景色设置为白色，覆盖整个显示区域。

**屏幕布局准备：**

- 使用函数 `lv_disp_get_hor_res()` 和 `lv_disp_get_ver_res()` 获取显示器的实际宽度和高度，这有助于后续精确放置UI元素。

- 代码还移除了屏幕的内边距 `(lv_obj_set_style_pad_all())` 和滚动条 `(lv_obj_set_scrollbar_mode())` 以最大化可用绘图区域。

**UI元素创建和配置：**

- 面板：使用 `lv_obj_create(scr)` 创建面板对象。使用 `lv_obj_set_size()` 和 `lv_obj_align()` 设置其大小和居中对齐。使用 `lv_obj_set_style_bg_color()` 和 `lv_obj_set_style_border_color()` 等函数配置其样式，包括白色背景和黑色边框。

- 标签：

	- 使用 `lv_label_create()` 创建文本标签。

	- `lv_label_set_text()` 设置标签的文本内容。

	- 使用 `lv_obj_set_style_text_color()` 和 `lv_obj_set_style_text_font()` 设置文本颜色和字体大小。

- `lv_obj_align()` 函数将每个标签放置在屏幕的特定位置，如中心、右上角、左下角和右下角。

方块：使用for循环创建四个小方块对象。依次设置它们的大小、样式（白色填充带黑色边框）和位置，将它们水平排列在屏幕左上角。

**主循环：**

- `while(1)` 循环是程序的连续执行部分。

- 在循环中持续调用 `lv_task_handler()` 来处理所有 LVGL 内部任务，如更新UI元素和处理事件。

- `k_sleep(K_MSEC(1000))` 暂停线程1000毫秒。对于静态显示


### 结果图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/epaper_nrf54.jpg" style={{width:600, height:'auto'}}/></div>


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