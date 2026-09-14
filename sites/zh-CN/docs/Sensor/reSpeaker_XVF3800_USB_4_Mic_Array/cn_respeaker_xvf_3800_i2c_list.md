---
description: ReSpeaker XVF3800 USB 4-Mic Array 是一款专业的环形麦克风阵列，具备 AEC、波束成形、噪声抑制和 360° 语音采集功能。与 XIAO ESP32S3 搭配使用，可为智能设备、机器人和物联网应用提供高级语音控制能力。探索其无缝集成与双模式灵活性。
title: 使用 I2C 命令通过 XIAO ESP32S3 控制 reSpeaker XVF3800 USB Mic Array
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_i2c_list
sku: 114993702,114993700
last_update:
  date: 8/24/2026
  author: Kunpeng Wang
createdAt: '2026-08-21'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/cn/respeaker_xvf_3800_i2c_list/
---

## 介绍 

本节提供 ReSpeaker XVF3800 的 I2C 控制命令列表，以及 I2C 读写示例和两种工作模式下的硬件信号路径图。关于通过 I2C 接口控制 ReSpeaker XVF3800 的应用示例，请参考 [Device Control](/cn/respeaker_xvf3800_xiao_rgb) 章节。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>


## reSpeaker 硬件信号路径图

### I2S 模式信号路径

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/Signal Path-I2S.png" alt="pir" width={800} height="auto" /></p>

#### 录音路径
麦克风采集原始数据，由算法模块进行处理，处理后的数据通过 I2S 接口由主控读取。

#### 回放路径
在 I2S 模式下，音频回放路径分为两路：Host → XVF3800 → DAC 和 Host → DAC。

##### 1. Host → XVF3800 → DAC

主控通过 I2S 接口将音频数据发送到 XVF3800，数据经 Optional Far DSP 模块处理后，再通过 I2S 总线重新传输到 DAC 进行回放。

:::note
关于通过此路径进行回放的应用示例，请参考 [reSpeaker XVF3800 Record and Playback Audio Using I2S](/cn/respeaker_xvf3800_xiao_record_playback) 章节。
:::

##### 2. Host → DAC

主控通过 I2S 接口将音频数据直接发送到 DAC 进行回放，绕过 XVF3800。

:::note
关于通过此路径进行回放的应用示例，请参考 [reSpeaker XVF3800 Audio Playback and Volume Control via I2C](/cn/respeaker_xvf3800_xiao_volume) 章节。
:::

#### 控制路径
控制路径与回放路径类似，也分为两路：

##### 1. Host → XVF3800 → DAC

- **Host ↔ XVF3800 通信：** 主控作为 I2C 主机，XVF3800 作为 I2C 从机。主控通过 I2C 配置 XVF3800 的 Optional Far DSP、Optional PP、GPIO 以及其他模块。
- **XVF3800 ↔ DAC 通信：** XVF3800 作为 I2C 主机，DAC 作为 I2C 从机。XVF3800 通过 I2C 控制 DAC 回放。

##### 2. Host → DAC

主控直接与 DAC 通信。主控通过 I2C 直接控制 DAC 进行音频回放和音量调节。

### USB 模式信号路径

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/Signal Path-USB.png" alt="pir" width={800} height="auto" /></p>

在 USB 模式下，仅有一条数据路径：Host → XVF3800 → DAC，该路径又分为两个部分：Host → XVF3800 和 XVF3800 → DAC。

- **Host ↔ XVF3800：** 通过 USB 通信。音频数据（麦克风采集的原始数据，经算法模块处理）和控制数据（用于配置 XVF3800 的 Optional Far DSP、Optional PP、GPIO 及其他模块）均通过 USB 传输。

- **XVF3800 ↔ DAC：** 通过 I2C 和 I2S 通信。XVF3800 作为 I2C 主机和 I2S 主机，控制 DAC 进行音频回放。

:::note
关于通过此路径进行回放的应用示例，请参考 [reSpeaker XVF3800 Control with Python](/cn/respeaker_xvf3800_python_sdk) 章节。
:::

## I2C 帧格式

### 写操作

```
[resid] [cmd] [write_byte_num] [data...]
```

| Field | Description |
|-------|-------------|
| `resid` | 资源 ID |
| `cmd` | 命令 ID |
| `write_byte_num` | 要写入的数据字节数 |
| `data...` | 要写入的数据字节 |

### 读操作（先写命令，再读响应）：

```
Step 1 (Write): [resid] [cmd | 0x80] [read_len + 1]
Step 2 (Read):  [status] [data...]
```

| Field | Description |
|-------|-------------|
| `cmd\|0x80` | 最高位（MSB）置 1 的命令 ID，表示读操作 |
| `read_len + 1` | 期望读取的字节数（+1 为状态字节） |
| `status` | 响应状态字节（`0` = 成功，`64` = 重试） |
| `data...` | 返回的数据字节 |

:::note
关于详细的 I2C 命令列表，请参考 [I2C Command List](#I2C-命令列表) 章节。
:::

## Arduino 读写示例
```cpp
#define XMOS_ADDR 0x2C  // XVF3800 I2C 7-bit Address
```
### 写入

```cpp
void xmos_write_bytes(uint8_t resid, uint8_t cmd, uint8_t *value, uint8_t write_byte_num) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(write_byte_num);
  for (uint8_t i = 0; i < write_byte_num; i++) {
    Wire.write(value[i]);
  }
  Wire.endTransmission();
}
```

### 读取

```cpp
bool xmos_read_bytes(uint8_t resid, uint8_t cmd, uint8_t *buffer, uint8_t read_len, uint8_t *status) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd | 0x80);
  Wire.write(read_len + 1);  // +1 for status byte
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();  // First byte is status (0 = success, 64 = retry)
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}
```

### 读取固件版本示例

```cpp
#include <Wire.h>

#define XMOS_ADDR 0x2C  // XVF3800 I2C 7-bit Address

#define APPLICATION_SERVICER_RESID 48  // ResID = 48 (Application Servicer)
#define VERSION_CMD              0     // CmdID = 0 (VERSION)
#define VERSION_NUM_BYTES        3     // 3 bytes: MAJOR, MINOR, PATCH

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(1000);
  Serial.println("XVF3800 Firmware Version Read Test Starting...");
}

void loop() {
  uint8_t version[VERSION_NUM_BYTES] = {0};
  uint8_t status = 0xFF;

  // Read 3 bytes: [MAJOR] [MINOR] [PATCH]
  bool success = xmos_read_bytes(APPLICATION_SERVICER_RESID, VERSION_CMD,
                                 version, VERSION_NUM_BYTES, &status);

  if (success && status == 0) {
    Serial.print("Firmware Version: v");
    Serial.print(version[0]);  // MAJOR
    Serial.print(".");
    Serial.print(version[1]);  // MINOR
    Serial.print(".");
    Serial.println(version[2]);  // PATCH
    Serial.print("  (Status byte: 0x");
    Serial.print(status, HEX);
    Serial.println(")");
  } else {
    Serial.print("Read failed. Status byte: 0x");
    Serial.println(status, HEX);
  }

  delay(2000);
}

bool xmos_read_bytes(uint8_t resid, uint8_t cmd, uint8_t *buffer, uint8_t read_len, uint8_t *status) {
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd | 0x80);        
  Wire.write(read_len + 1);      // +1 for status byte
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();  // First byte is status (0 = success, 64 = retry)
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}

```

**预期输出**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/read-version.png" alt="pir" width={800} height="auto" /></p>

:::note
关于通过 I2C 接口控制 ReSpeaker XVF3800 的应用示例，请参考 [Device Control](/cn/respeaker_xvf3800_xiao_rgb) 章节。
:::

## I2C 命令列表

### ResID 列表

| Servicer Name | ResID | Hex | Description |
|---------------|------|------|-------------|
| PP Servicer (后处理) | 17 | 0x11 | AGC、限幅、噪声抑制、回声抑制 |
| GPO Servicer (GPIO/LED/DOA) | 20 | 0x14 | GPO 读写、LED 效果/颜色/速度/亮度、DOA |
| AEC Servicer (声学回声消除) | 33 | 0x21 | AEC 滤波器、波束、方位角、RT60 |
| Audio Manager | 35 | 0x23 | 增益、I2S、通道选择、输出路由 |
| Application Servicer (系统) | 48 | 0x30 | 版本、重启、配置保存、USB 位深 |

### CmdID 列表

#### ResID = 48 — Application Servicer（系统控制）

| Name | CmdID | Direction | Data Type | Values | Bytes | Description |
|------|-------|-----------|-----------|--------|-------|-------------|
| VERSION | 0 | ro | uint8 | 3 | 3 | 固件版本（MAJOR、MINOR、PATCH） |
| BLD_MSG | 1 | ro | char | 50 | 50 | 构建信息（构建配置名称） |
| BLD_HOST | 2 | ro | char | 30 | 30 | CI 构建主机信息 |
| BLD_REPO_HASH | 3 | ro | char | 40 | 40 | GIT 哈希值 |
| BLD_MODIFIED | 4 | ro | char | 6 | 6 | 固件是否被修改 |
| BOOT_STATUS | 5 | ro | char | 3 | 3 | 启动模式（SPI/JTAG/FLASH） |
| TEST_CORE_BURN | 6 | rw | uint8 | 1 | 1 | 核心压力测试（重启芯片） |
| REBOOT | 7 | wo | uint8 | 1 | 1 | 重启芯片，恢复默认参数 |
| USB_BIT_DEPTH | 8 | rw | uint8 | 2 | 2 | USB 位深（16/24/32），仅 USB 模式 |
| SAVE_CONFIGURATION | 9 | wo | uint8 | 1 | 1 | 将当前配置保存到 flash |
| CLEAR_CONFIGURATION | 10 | wo | uint8 | 1 | 1 | 清除配置，恢复默认值 |
| AIC3104_HP_LEVEL | 11 | rw | uint8 | 1 | 1 | 耳机输出电平 [0..9] |
| AIC3104_LINEOUT_LEVEL | 12 | rw | uint8 | 1 | 1 | 线路输出电平 [0..9] |

---

#### ResID = 20 — GPO Servicer（GPIO 和 LED 控制）

| Name | CmdID | Direction | Data Type | Values | Bytes | Description |
|------|-------|-----------|-----------|--------|-------|-------------|
| GPO_READ_VALUES | 0 | ro | uint8 | 5 | 5 | 读取所有 GPO 引脚电平 |
| GPO_WRITE_VALUE | 1 | wo | uint8 | 2 | 2 | 设置指定 GPO 引脚电平 |
| GPO_PORT_PIN_INDEX | 2 | rw | uint32 | 2 | 8 | GPO 端口/引脚索引 |
| GPO_PIN_VAL | 3 | wo | uint8 | 3 | 3 | 写入指定端口引脚值 |
| GPO_PIN_ACTIVE_LEVEL | 4 | rw | uint32 | 1 | 4 | 有效电平（1=高，0=低） |
| LED_EFFECT | 12 | rw | uint8 | 1 | 1 | LED 效果（0=off 1=breathing 2=rainbow 3=solid 4=DOA 5=ring） |
| LED_BRIGHTNESS | 13 | rw | uint8 | 1 | 1 | LED 亮度 |
| LED_GAMMIFY | 14 | rw | uint8 | 1 | 1 | 伽马校正（0=off 1=on） |
| LED_SPEED | 15 | rw | uint8 | 1 | 1 | LED 速度 |
| LED_COLOR | 16 | rw | uint32 | 1 | 4 | LED 颜色（RGB） |
| LED_DOA_COLOR | 17 | rw | uint32 | 2 | 8 | DOA 模式颜色（基础颜色 + DOA 颜色） |
| DOA_VALUE | 18 | ro | uint16 | 2 | 4 | DOA 角度（0-359）+ 语音检测标志 |
| LED_RING_COLOR | 19 | rw | uint32 | 12 | 48 | 环形模式逐灯颜色 |

---

#### ResID = 33 — AEC 服务器（声学回声消除）

| 名称 | CmdID | 方向 | 数据类型 | 数值 | 字节数 | 描述 |
|------|-------|-----------|-----------|--------|-------|-------------|
| AEC_AECPATHCHANGE | 0 | ro | int32 | 1 | 4 | AEC 路径变化检测 (0,1) |
| AEC_HPFONOFF | 1 | rw | int32 | 1 | 4 | 高通滤波器 (0=关闭 1=70Hz 2=125Hz 3=150Hz 4=180Hz) |
| AEC_AECSILENCELEVEL | 2 | rw | float | 2 | 8 | 静音阈值 [0.0..1.0] |
| AEC_AECCONVERGED | 3 | ro | int32 | 1 | 4 | AEC 收敛状态 (0,1) |
| AEC_AECEMPHASISONOFF | 4 | rw | int32 | 1 | 4 | 预加重/去加重 (0=关闭 1=开启 2=开启_eq) |
| AEC_FAR_EXTGAIN | 5 | rw | float | 1 | 4 | 远端外部增益 (dB) |
| AEC_PCD_COUPLINGI | 6 | rw | float | 1 | 4 | PCD 灵敏度 [0.0..1.0] |
| AEC_PCD_MINTHR | 7 | rw | float | 1 | 4 | PCD 最小阈值 [0.0..0.02] |
| AEC_PCD_MAXTHR | 8 | rw | float | 1 | 4 | PCD 最大阈值 [0.025..0.2] |
| AEC_RT60 | 9 | ro | float | 1 | 4 | RT60 混响估计 [0.250..0.900] 秒 |
| AEC_ASROUTONOFF | 35 | rw | int32 | 1 | 4 | ASR 输出开关 (0=残差 1=ASR 处理后) |
| AEC_ASROUTGAIN | 36 | rw | float | 1 | 4 | ASR 输出增益 [0.0..1000.0] |
| AEC_FIXEDBEAMSONOFF | 37 | rw | int32 | 1 | 4 | 固定波束模式开关 (0,1) |
| AEC_FIXEDBEAMNOISETHR | 38 | rw | float | 2 | 8 | 固定波束噪声阈值 [0.0..1.0] |
| SHF_BYPASS | 70 | rw | uint8 | 1 | 1 | AEC 旁路 |
| AEC_NUM_MICS | 71 | ro | int32 | 1 | 4 | 麦克风数量 |
| AEC_NUM_FARENDS | 72 | ro | int32 | 1 | 4 | 远端参考数量 |
| AEC_MIC_ARRAY_TYPE | 73 | ro | int32 | 1 | 4 | 麦克风阵列类型 (1=线性 2=方形) |
| AEC_MIC_ARRAY_GEO | 74 | ro | float | 12 | 48 | 麦克风阵列几何结构 (3D XYZ 坐标) |
| AEC_AZIMUTH_VALUES | 75 | ro | radians | 4 | 16 | 方位角 (波束 1/2/自由/自动) |
| TEST_AEC_DISABLE_CONTROL | 76 | wo | uint32 | 1 | 4 | 禁用 AEC 控制（仅测试） |
| AEC_CURRENT_IDLE_TIME | 77 | ro | uint32 | 1 | 4 | 当前空闲时间 (10ns 计时) |
| AEC_MIN_IDLE_TIME | 78 | ro | uint32 | 1 | 4 | 最小空闲时间 (10ns 计时) |
| AEC_RESET_MIN_IDLE_TIME | 79 | wo | uint32 | 1 | 4 | 重置最小空闲时间 |
| AEC_SPENERGY_VALUES | 80 | ro | float | 4 | 16 | 语音能量 (波束 1/2/自由/自动) |
| AEC_FIXEDBEAMSAZIMUTH_VALUES | 81 | rw | radians | 2 | 8 | 固定波束方位角 |
| AEC_FIXEDBEAMSELEVATION_VALUES | 82 | rw | radians | 2 | 8 | 固定波束仰角 |
| AEC_FIXEDBEAMSGATING | 83 | rw | uint8 | 1 | 1 | 固定波束门控开关 |
| SPECIAL_CMD_AEC_FAR_MIC_INDEX | 90 | wo | int32 | 2 | 8 | AEC 滤波器读取索引（触发命令） |
| SPECIAL_CMD_AEC_FILTER_COEFF_START_OFFSET | 91 | rw | int32 | 1 | 4 | 滤波器系数起始偏移量 |
| SPECIAL_CMD_AEC_FILTER_COEFFS | 92 | rw | float | 15 | 60 | AEC 滤波器系数读/写 |
| SPECIAL_CMD_AEC_FILTER_LENGTH | 93 | ro | int32 | 1 | 4 | AEC 滤波器长度 |
| AEC_FILTER_CMD_ABORT | 94 | wo | int32 | 1 | 4 | 中止滤波器读/写状态机 |

---

#### ResID = 35 — 音频管理器（音频管理）

| 名称 | CmdID | 方向 | 数据类型 | 数值 | 字节数 | 描述 |
|------|-------|-----------|-----------|--------|-------|-------------|
| AUDIO_MGR_MIC_GAIN | 0 | rw | float | 1 | 4 | 麦克风增益（SHF 之前） |
| AUDIO_MGR_REF_GAIN | 1 | rw | float | 1 | 4 | 参考信号增益（SHF 之前） |
| AUDIO_MGR_CURRENT_IDLE_TIME | 2 | ro | int32 | 1 | 4 | 当前空闲时间 (10ns 计时) |
| AUDIO_MGR_MIN_IDLE_TIME | 3 | ro | int32 | 1 | 4 | 最小空闲时间 (10ns 计时) |
| AUDIO_MGR_RESET_MIN_IDLE_TIME | 4 | wo | int32 | 1 | 4 | 重置最小空闲时间 |
| MAX_CONTROL_TIME | 5 | ro | int32 | 1 | 4 | 最大控制时间 |
| RESET_MAX_CONTROL_TIME | 6 | wo | int32 | 1 | 4 | 重置最大控制时间 |
| I2S_CURRENT_IDLE_TIME | 7 | ro | int32 | 1 | 4 | I2S 当前空闲时间 |
| I2S_MIN_IDLE_TIME | 8 | ro | int32 | 1 | 4 | I2S 最小空闲时间 |
| I2S_RESET_MIN_IDLE_TIME | 9 | wo | int32 | 1 | 4 | 重置 I2S 空闲时间 |
| I2S_INPUT_PACKED | 10 | rw | uint8 | 1 | 1 | I2S/USB 输入打包模式 |
| AUDIO_MGR_SELECTED_AZIMUTHS | 11 | ro | radians | 2 | 8 | 选定波束方位角（处理 DOA + 自动选择 DOA） |
| AUDIO_MGR_SELECTED_CHANNELS | 12 | rw | uint8 | 2 | 2 | 选定输出通道 |
| AUDIO_MGR_OP_PACKED | 13 | rw | uint8 | 2 | 2 | L/R 输出打包状态 |
| AUDIO_MGR_OP_UPSAMPLE | 14 | rw | uint8 | 2 | 2 | L/R 输出上采样状态 |
| AUDIO_MGR_OP_L | 15 | rw | uint8 | 2 | 2 | L 通道类别和源 (= OP_L_PK0) |
| AUDIO_MGR_OP_L_PK0 | 16 | rw | uint8 | 2 | 2 | L 通道打包源 0 |
| AUDIO_MGR_OP_L_PK1 | 17 | rw | uint8 | 2 | 2 | L 通道打包源 1 |
| AUDIO_MGR_OP_L_PK2 | 18 | rw | uint8 | 2 | 2 | L 通道打包源 2 |
| AUDIO_MGR_OP_R | 19 | rw | uint8 | 2 | 2 | R 通道类别和源 (= OP_R_PK0) |
| AUDIO_MGR_OP_R_PK0 | 20 | rw | uint8 | 2 | 2 | R 通道打包源 0 |
| AUDIO_MGR_OP_R_PK1 | 21 | rw | uint8 | 2 | 2 | R 通道打包源 1 |
| AUDIO_MGR_OP_R_PK2 | 22 | rw | uint8 | 2 | 2 | R 通道打包源 2 |
| AUDIO_MGR_OP_ALL | 23 | rw | uint8 | 12 | 12 | 所有 L/R 打包源设置 |
| I2S_INACTIVE | 24 | ro | uint8 | 1 | 1 | I2S 活动状态 (0=活动 1=非活动) |
| AUDIO_MGR_FAR_END_DSP_ENABLE | 25 | rw | uint8 | 1 | 1 | 远端 DSP 开关 |
| AUDIO_MGR_SYS_DELAY | 26 | rw | int32 | 1 | 4 | 参考信号延迟（采样点） |
| I2S_DAC_DSP_ENABLE | 27 | rw | uint8 | 1 | 1 | DAC 远端 DSP 开关 |

---

#### ResID = 17 — PP 服务器（后处理：AGC/噪声/回声）

| 名称 | CmdID | 方向 | 数据类型 | 数值 | 字节数 | 描述 |
|------|-------|-----------|-----------|--------|-------|-------------|
| PP_AGCONOFF | 10 | rw | int32 | 1 | 4 | AGC 开关 (0,1) |
| PP_AGCMAXGAIN | 11 | rw | float | 1 | 4 | AGC 最大增益 [1.0..1000.0] |
| PP_AGCDESIREDLEVEL | 12 | rw | float | 1 | 4 | AGC 目标功率 [1e-8..1.0] |
| PP_AGCGAIN | 13 | rw | float | 1 | 4 | AGC 当前增益 [1.0..1000.0] |
| PP_AGCTIME | 14 | rw | float | 1 | 4 | AGC 时间常数 [0.5..4.0] 秒 |
| PP_AGCFASTTIME | 15 | rw | float | 1 | 4 | AGC 快速衰减时间 [0.05..4.0] 秒 |
| PP_AGCALPHAFASTGAIN | 16 | rw | float | 1 | 4 | 快速模式增益阈值 [0.0..1000.0] |
| PP_AGCALPHASLOW | 17 | rw | float | 1 | 4 | 慢速记忆参数 [0.0..1.0] |
| PP_AGCALPHAFAST | 18 | rw | float | 1 | 4 | 快速记忆参数 [0.0..1.0] |
| PP_LIMITONOFF | 19 | rw | int32 | 1 | 4 | 限幅器开关 (0,1) |
| PP_LIMITPLIMIT | 20 | rw | float | 1 | 4 | 限幅器最大功率 [1e-8..1.0] |
| PP_MIN_NS | 21 | rw | float | 1 | 4 | 稳态噪声增益下限 [0.0..1.0] |
| PP_MIN_NN | 22 | rw | float | 1 | 4 | 非稳态噪声增益下限 [0.0..1.0] |
| PP_ECHOONOFF | 23 | rw | int32 | 1 | 4 | 回声抑制开关 (0,1) |
| PP_GAMMA_E | 24 | rw | float | 1 | 4 | 回声过度减法因子 [0.0..2.0] |
| PP_GAMMA_ETAIL | 25 | rw | float | 1 | 4 | 尾部回声过度减法因子 [0.0..2.0] |
| PP_GAMMA_ENL | 26 | rw | float | 1 | 4 | 非线性回声过度减法因子 [0.0..5.0] |
| PP_NLATTENONOFF | 27 | rw | int32 | 1 | 4 | 非线性回声衰减开关 (0,1) |
| PP_NLAEC_MODE | 28 | rw | int32 | 1 | 4 | 非线性 AEC 训练模式 (0=正常 1=训练 2=训练 2) |
| PP_MGSCALE | 29 | rw | float | 3 | 12 | 最小增益缩放 (最大,最小,当前) |
| PP_FMIN_SPEINDEX | 30 | rw | float | 1 | 4 | 双讲频率边界 [0.0..7999.0] |
| PP_DTSENSITIVE | 31 | rw | int32 | 1 | 4 | 双讲灵敏度 [0..5, 10..15] |
| PP_ATTNS_MODE | 32 | rw | int32 | 1 | 4 | 非语音额外衰减开关 (0,1) |
| PP_ATTNS_NOMINAL | 33 | rw | float | 1 | 4 | 标称语音衰减 [0.0..1.0] |
| PP_ATTNS_SLOPE | 34 | rw | float | 1 | 4 | 衰减斜率 [0.0..5.0] |
| PP_CURRENT_IDLE_TIME | 70 | ro | uint32 | 1 | 4 | PP 当前空闲时间 (10ns 计时) |
| PP_MIN_IDLE_TIME | 71 | ro | uint32 | 1 | 4 | PP 最小空闲时间 (10ns 计时) |
| PP_RESET_MIN_IDLE_TIME | 72 | wo | uint32 | 1 | 4 | 重置 PP 最小空闲时间 |
| PP_NL_MODEL_CMD_ABORT | 94 | wo | int32 | 1 | 4 | 中止 NL 模型读/写状态机 |
| PP_EQUALIZATION_CMD_ABORT | 100 | wo | int32 | 1 | 4 | 中止均衡器读/写状态机 |

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



