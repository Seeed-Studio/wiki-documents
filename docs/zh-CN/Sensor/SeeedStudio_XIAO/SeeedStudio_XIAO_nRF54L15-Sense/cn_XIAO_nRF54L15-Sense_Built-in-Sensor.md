---
title: Seeed Studio XIAO nRF54L15 Sense 内置传感器
description: 本文介绍如何使用 XIAO MG24 Sense 上的麦克风。
image: https://files.seeedstudio.com/wiki/mg24_mic/mg24.jpg
slug: /cn/xiao_nrf54l15_sense_built_in_sensor
keywords:
  - XIAO
  - MG24
last_update:
  date: 11/20/2024 
  author: Jason
sidebar_position: 1
---

# Seeed Studio XIAO nRF54L15 Sense 内置传感器的使用

## XIAO nRF54L15 Sense IMU

**6轴 IMU（惯性测量单元）** 传感器如 **LSM6DS3TR-C** 集成了加速度计和陀螺仪，用于测量物体在三维空间中的运动和方向。具体来说，LSM6DS3TR-C 具有以下特性：

**加速度计功能：**
- 测量物体沿 X、Y 和 Z 轴的加速度。它能够感知物体运动（例如，静止、加速、减速）和倾斜变化（例如，物体的角度）。
- 可用于检测步态、位置变化、振动等。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz1.5.jpg" style={{width:320, height:'auto'}}/></div>

**陀螺仪功能（Gyroscope）：**
- 测量物体围绕 X、Y 和 Z 轴的角速度，即物体的旋转。
- 可用于检测旋转、旋转速率和方向变化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_mic/xyz2.0.jpg" style={{width:320, height:'auto'}}/></div>

- **X轴角度（Roll）** 是围绕 X 轴旋转方向的角度。
- **Y轴角度（Pitch）** 是围绕 Y 轴旋转方向的角度。
- **Z轴角度（Yaw）** 是围绕 Z 轴旋转方向的角度。

### IMU 驱动程序

为了简化您的开发体验并确保快速开始使用这个 IMU 程序，我们利用了 PlatformIO 平台来编写必要的驱动代码。PlatformIO 为嵌入式开发提供了一个全面而高效的环境，使其成为 XIAO nRF54L15 Sense 的理想选择。

在继续之前，请确保您的开发环境已正确设置。如果您尚未将 Seeed Studio XIAO nRF54L15 开发板添加到您的 PlatformIO 配置中，请参考此[链接](http://localhost:3000/xiao_nrf54l15_with_platform_io/)获取如何配置的详细说明。这个关键步骤将使 PlatformIO 能够正确识别并为您的开发板编译代码。

- 一旦您的环境准备就绪，IMU 驱动程序将允许您从 LSM6DS3TR-C 读取原始传感器数据。这些数据包括：

- 加速度计原始值（accel raw）：表示沿 X、Y 和 Z 轴的加速度。

- 陀螺仪原始值（gyro raw）：表示围绕 X、Y 和 Z 轴的角速度。

触发计数（trig_cnt）：一个随每个新数据样本递增的计数器。


以下是您可以从 IMU 期望看到的串行输出示例，如 PlatformIO 设备监视器中显示的那样。此输出提供加速度计和陀螺仪数据的实时读数，这对于理解设备的运动和方向至关重要。


<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/imu_display.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:1000, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em> 来自 PlatformIO 设备监视器的实时 IMU 数据输出，显示原始加速度计和陀螺仪读数。</em></p>
</div>


这些原始数据通过应用适当的算法（例如，滤波、传感器融合），为从简单的运动检测到复杂的方向跟踪等各种应用奠定了基础。

---
 
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-imu" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```cpp
#include <stdio.h>
#include <zephyr/kernel.h>
#include <zephyr/device.h>
#include <zephyr/drivers/i2c.h>
#include <zephyr/logging/log.h>
#include <zephyr/devicetree.h>

LOG_MODULE_REGISTER(lsm6dso_i2c_example, LOG_LEVEL_INF);

// --- LSM6DSO I2C 地址和寄存器定义 ---
#define LSM6DSO_I2C_ADDR    0x6A // LSM6DSO I2C 设备地址

#define LSM6DSO_REG_WHO_AM_I 0x0F // 识别寄存器
#define LSM6DSO_WHO_AM_I_VAL 0x6A // 期望的 WHO_AM_I 值

#define LSM6DSO_REG_CTRL1_XL 0x10 // 加速度计控制寄存器
#define LSM6DSO_REG_CTRL2_G  0x11 // 陀螺仪控制寄存器
// 加速度计/陀螺仪数据输出寄存器（低字节在前）
#define LSM6DSO_REG_OUTX_L_XL 0x28 // 加速度计 X 轴低字节
#define LSM6DSO_REG_OUTX_L_G  0x22 // 陀螺仪 X 轴低字节

// --- 数据结构定义 ---
// 用于存储原始传感器数据的结构体
struct lsm6dso_raw_data {
    int16_t accel_x;
    int16_t accel_y;
    int16_t accel_z;
    int16_t gyro_x;
    int16_t gyro_y;
    int16_t gyro_z;
};

// --- 辅助函数 ---

/**
 * @brief 通过 I2C 向 LSM6DSO 寄存器写入单个字节。
 */
static int lsm6dso_i2c_reg_write_byte(const struct device *i2c_dev, uint8_t reg_addr, uint8_t value)
{
    uint8_t tx_buf[2] = {reg_addr, value};
    return i2c_write(i2c_dev, tx_buf, sizeof(tx_buf), LSM6DSO_I2C_ADDR);
}

/**
 * @brief 通过 I2C 从 LSM6DSO 寄存器读取单个字节。
 */
static int lsm6dso_i2c_reg_read_byte(const struct device *i2c_dev, uint8_t reg_addr, uint8_t *value)
{
    return i2c_reg_read_byte(i2c_dev, LSM6DSO_I2C_ADDR, reg_addr, value);
}

/**
 * @brief 通过 I2C 从 LSM6DSO 寄存器读取多个连续字节。
 */
static int lsm6dso_i2c_reg_read_bytes(const struct device *i2c_dev, uint8_t reg_addr, uint8_t *data, uint8_t len)
{
    return i2c_burst_read(i2c_dev, LSM6DSO_I2C_ADDR, reg_addr, data, len);
}

// --- LSM6DSO 驱动核心功能 ---

/**
 * @brief 初始化 LSM6DSO 传感器。
 * 检查 WHO_AM_I 并设置加速度计和陀螺仪的 ODR。
 */
static int lsm6dso_init(const struct device *i2c_dev)
{
    uint8_t who_am_i = 0;
    int ret;

    // 验证设备 ID
    ret = lsm6dso_i2c_reg_read_byte(i2c_dev, LSM6DSO_REG_WHO_AM_I, &who_am_i);
    if (ret != 0) {
        LOG_ERR("读取 WHO_AM_I 寄存器失败 (错误: %d)", ret);
        return ret;
    }
    if (who_am_i != LSM6DSO_WHO_AM_I_VAL) {
        LOG_ERR("无效的 WHO_AM_I: 0x%02x，期望值 0x%02x", who_am_i, LSM6DSO_WHO_AM_I_VAL);
        return -ENODEV;
    }
    LOG_INF("LSM6DSO WHO_AM_I 检查通过。ID: 0x%02x", who_am_i);

    // 设置加速度计 ODR (12.5 Hz) 和 2g 量程 (0x20)
    ret = lsm6dso_i2c_reg_write_byte(i2c_dev, LSM6DSO_REG_CTRL1_XL, 0x20);
    if (ret != 0) {
        LOG_ERR("设置 CTRL1_XL 寄存器失败 (错误: %d)", ret);
        return ret;
    }

    // 设置陀螺仪 ODR (12.5 Hz) 和 250dps 量程 (0x20)
    ret = lsm6dso_i2c_reg_write_byte(i2c_dev, LSM6DSO_REG_CTRL2_G, 0x20);
    if (ret != 0) {
        LOG_ERR("设置 CTRL2_G 寄存器失败 (错误: %d)", ret);
        return ret;
    }

    LOG_INF("LSM6DSO 初始化成功。");
    return 0;
}

/**
 * @brief 从 LSM6DSO 传感器获取原始加速度计和陀螺仪数据。
 * @param i2c_dev 指向 I2C 设备结构体的指针。
 * @param raw_data_out 指向存储原始数据的结构体的指针。
 * @return 成功时返回 0，失败时返回负值。
 */
static int lsm6dso_fetch_raw_data(const struct device *i2c_dev, struct lsm6dso_raw_data *raw_data_out)
{
    uint8_t accel_data[6];
    uint8_t gyro_data[6];
    int ret;

    // 读取加速度计数据（6 字节）
    ret = lsm6dso_i2c_reg_read_bytes(i2c_dev, LSM6DSO_REG_OUTX_L_XL, accel_data, 6);
    if (ret != 0) {
        LOG_ERR("读取加速度计数据失败 (错误: %d)。", ret);
        return ret;
    }
    // 原始数据是 16 位有符号整数，低字节在前
    raw_data_out->accel_x = (int16_t)(accel_data[0] | (accel_data[1] << 8));
    raw_data_out->accel_y = (int16_t)(accel_data[2] | (accel_data[3] << 8));
    raw_data_out->accel_z = (int16_t)(accel_data[4] | (accel_data[5] << 8));

    // 读取陀螺仪数据（6 字节）
    ret = lsm6dso_i2c_reg_read_bytes(i2c_dev, LSM6DSO_REG_OUTX_L_G, gyro_data, 6);
    if (ret != 0) {
        LOG_ERR("读取陀螺仪数据失败 (错误: %d)。", ret);
        return ret;
    }
    // 原始数据是 16 位有符号整数，低字节在前
    raw_data_out->gyro_x = (int16_t)(gyro_data[0] | (gyro_data[1] << 8));
    raw_data_out->gyro_y = (int16_t)(gyro_data[2] | (gyro_data[3] << 8));
    raw_data_out->gyro_z = (int16_t)(gyro_data[4] | (gyro_data[5] << 8));

    return 0;
}

/**
 * @brief 显示原始加速度计和陀螺仪数据。
 * @param raw_data 指向包含原始数据的结构体的指针。
 * @param count 轮询计数器。
 */
static void lsm6dso_display_raw_data(const struct lsm6dso_raw_data *raw_data, int count)
{
    printf("加速度计原始值: X:%d Y:%d Z:%d (LSB)\n",
           raw_data->accel_x, raw_data->accel_y, raw_data->accel_z);
    printf("陀螺仪原始值: X:%d Y:%d Z:%d (LSB)\n",
           raw_data->gyro_x, raw_data->gyro_y, raw_data->gyro_z);
    printf("触发次数:%d\n\n", count);
}

// --- 主函数 ---

int main(void)
{
    const struct device *i2c_dev = DEVICE_DT_GET(DT_NODELABEL(i2c30));
    struct lsm6dso_raw_data sensor_data;
    static int trig_cnt = 0; // 确保在主作用域中只初始化一次

    if (!device_is_ready(i2c_dev)) {
        LOG_ERR("I2C 设备 %s 未就绪！", i2c_dev->name);
        return 0;
    }
    LOG_INF("I2C 设备 %s 已就绪。", i2c_dev->name);

    if (lsm6dso_init(i2c_dev) != 0) {
        LOG_ERR("初始化 LSM6DSO 传感器失败。");
        return 0;
    }

    printf("测试 LSM6DSO 传感器轮询模式（自定义 I2C 驱动）- 原始数据输出。\n\n");

    while (1) {
        trig_cnt++; // 在每次循环开始时递增计数器

        // 获取原始数据
        if (lsm6dso_fetch_raw_data(i2c_dev, &sensor_data) == 0) {
            // 显示原始数据
            lsm6dso_display_raw_data(&sensor_data, trig_cnt);
        } else {
            LOG_ERR("获取数据失败。");
        }

        k_sleep(K_MSEC(1000)); // 每秒读取一次
    }

    return 0;
}
```

## XIAO nRF54L15 Sense 麦克风

**MSM261DGT006** 是一个数字麦克风（DMIC），输出脉冲密度调制（PDM）数据，使其适合与 XIAO nRF54L15 Sense 等微控制器进行直接数字接口连接。我们的 DMIC 驱动程序专门设计用于处理这种 PDM 输出，将其转换为可用的音频采样，并为各种应用进行处理。

驱动程序初始化麦克风，设置适当的采样率（例如，标准音频为 16000 Hz），并配置 PDM 时钟频率。然后它持续从麦克风读取采样缓冲区，允许实时音频捕获。

当在 PlatformIO 设备监视器中查看时，DMIC 驱动程序的输出提供了关于麦克风操作和传入音频数据的重要信息。您将观察到的关键消息包括：

- `DMIC sample=:`：表示 DMIC 采样过程的开始。

- `PCM output rate: 16000, channels: 1`：确认音频输出设置，通常为 16 kHz 的采样率和单声道音频。

- `dmic_nrf_pdm: PDM clock frequency: 1280000, actual PCM rate: 16000`：显示内部 PDM 时钟频率和生成的 PCM 音频采样率。

- `got buffer 0x... of 3200 bytes:`：确认驱动程序成功从麦克风接收到音频数据缓冲区。显示十六进制地址（例如 0x20004C8）和字节大小（例如 3200 字节）。这些缓冲区包含可以进行处理或分析的原始音频采样。

- `dmix_sample: Exiting:`：表示 DMIC 采样过程已停止。

下面是当 DMIC 驱动程序运行时，您可以在 PlatformIO 设备监视器中看到的典型输出示例，说明了音频数据的成功捕获和缓冲。

### DMIC 驱动程序

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/mic_display.png" alt="XIAO nRF54L15 BLE Advertising Power Consumption" style={{width:1000, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>来自 PlatformIO 设备监视器的实时 DMIC 数据输出，显示麦克风初始化和缓冲区接收</em></p>
</div>

这些原始音频数据一旦被捕获，就可以用于广泛的应用，包括语音命令、声音事件检测、环境噪声监测以及更复杂的音频处理任务。

---
 
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-dmic" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

```cpp
#include <stdio.h>

#include <zephyr/device.h>
#include <zephyr/kernel.h>
#include <zephyr/audio/dmic.h>
#include <zephyr/shell/shell.h>
#include <zephyr/sys/util.h>

#define BITS_PER_BYTE 8

#define SAMPLE_RATE_HZ 16000
#define SAMPLE_BITS    16
#define TIMEOUT_MS     1000
#define CAPTURE_MS     500
#define BLOCK_SIZE     ((SAMPLE_BITS / BITS_PER_BYTE) * (SAMPLE_RATE_HZ * CAPTURE_MS) / 1000)
#define BLOCK_COUNT    4

static const struct device *const dmic = DEVICE_DT_GET(DT_ALIAS(dmic20));
static const struct device *const  pdm_reg = DEVICE_DT_GET(DT_NODELABEL(pdm_imu_pwr));

K_MEM_SLAB_DEFINE_STATIC(mem_slab, BLOCK_SIZE, BLOCK_COUNT, 4);

static struct pcm_stream_cfg stream = {
	.pcm_rate = SAMPLE_RATE_HZ,
	.pcm_width = SAMPLE_BITS,
	.block_size = BLOCK_SIZE,
	.mem_slab = &mem_slab,
};

static struct dmic_cfg cfg = {
	.io =
		{
			.min_pdm_clk_freq = 1000000,
			.max_pdm_clk_freq = 3500000,
			.min_pdm_clk_dc = 40,
			.max_pdm_clk_dc = 60,
		},
	.streams = &stream,
	.channel =
		{
			.req_num_streams = 1,
			.req_num_chan = 1,
		},
};

static bool initialized;

static int cmd_mic_capture(const struct shell *sh, size_t argc, char **argv)
{
	int ret,time = 1;
	void *buffer;
	uint32_t size;
	int16_t max_data = 0, min_data = 0;
	
	if (argc > 1) {
		time = atoi(argv[1]);
	}
	time *= (1000 / CAPTURE_MS);
	if (!initialized) {
		shell_error(sh, "麦克风模块未初始化");
		return -EPERM;
	}
	regulator_enable(pdm_reg);
	shell_print(sh, "S");
	ret = dmic_configure(dmic, &cfg);
	if (ret < 0) {
		shell_error(sh, "配置DMIC失败(%d)", ret);
		return ret;
	}
	ret = dmic_trigger(dmic, DMIC_TRIGGER_START);
	if (ret < 0) {
		shell_error(sh, "启动触发失败 (%d)", ret);
		return ret;
	}
	for (int i = 0; i < time; i++) {
		ret = dmic_read(dmic, 0, &buffer, &size, TIMEOUT_MS);
		if (ret < 0) {
			shell_error(sh, "DMIC读取失败 (%d)", ret);
			k_mem_slab_free(&mem_slab, buffer);
			dmic_trigger(dmic, DMIC_TRIGGER_STOP);
			regulator_disable(pdm_reg);
			return ret;
		}

		for (int j = 0; j < size / sizeof(int16_t); j++)
		{
			if (((int16_t *)buffer)[j] > max_data) {
				max_data = ((int16_t *)buffer)[j];
			}
			if (((int16_t *)buffer)[j] < min_data) {
				min_data = ((int16_t *)buffer)[j];
			}
			shell_print(sh, "%d", ((int16_t *)buffer)[j]);
		}
		k_mem_slab_free(&mem_slab, buffer);
	}
	ret = dmic_trigger(dmic, DMIC_TRIGGER_STOP);
	if (ret < 0) {
		shell_error(sh, "停止触发失败 (%d)", ret);
		regulator_disable(pdm_reg);
		return ret;
	}
	shell_print(sh, "E");
	shell_print(sh, "音频数据 最大值: %d 最小值: %d", max_data, min_data);
	regulator_disable(pdm_reg);
	return 0;
}

SHELL_STATIC_SUBCMD_SET_CREATE(sub_mic_cmds,
			       SHELL_CMD(capture, NULL, "捕获麦克风数据", cmd_mic_capture),
			       SHELL_SUBCMD_SET_END);

SHELL_CMD_REGISTER(mic, &sub_mic_cmds, "麦克风", NULL);

int mic_init(void)
{
	if (!device_is_ready(dmic)) {
		return -ENODEV;
	}

	cfg.channel.req_chan_map_lo = dmic_build_channel_map(0, 0, PDM_CHAN_LEFT);

	initialized = true;

	return 0;
}
```

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