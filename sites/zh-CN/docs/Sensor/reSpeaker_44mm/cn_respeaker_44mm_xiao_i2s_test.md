---
description: 通过发送 440 Hz 测试音并检查接收到的麦克风采样，验证 XIAO ESP32-S3 Plus 与 reSpeaker XVF3800 44mm 阵列之间的全双工 I2S 通信。
title: 使用 XIAO ESP32-S3 Plus 对 reSpeaker XVF3800 44mm 进行 I2S 测试
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - I2S 测试
  - xvf3800
  - arduino audio tools
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_i2s_test
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/cn/respeaker_44mm_xiao_i2s_test/
---
# 使用 XIAO ESP32-S3 Plus 对 reSpeaker XVF3800 44mm 进行 I2S 测试

此示例用于验证 XIAO ESP32-S3 Plus 与 44 mm 阵列上的 XVF3800 之间的 I2S 连接。它会生成一个 440 Hz 方波，将其写入 I2S 发送线，同时从麦克风阵列读取返回的立体声帧。接收到的采样值只要不是 `0` 或 `-1` 就会被计为有效，示例会根据返回的有效采样数量报告测试通过（PASS）或失败（FAIL）。

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 前置准备

- 阵列必须运行 **I2S 固件**。如果仍然是 USB 固件镜像，请参考 [Update Firmware](https://wiki.seeedstudio.com/cn/respeaker_44mm_introduction/#update-firmware)。
- 已安装 ESP32 开发板包和 **Arduino Audio Tools** 库的 Arduino IDE。请参考 [Software Preparation](https://wiki.seeedstudio.com/cn/respeaker_44mm_xiao_getting_started/#software-preparation)。
- 在开发板中选择 **XIAO_ESP32S3_Plus**，并选择正确的端口号。
- 一根 USB-C 数据线（非仅充电线）。



:::note
本测试将 XIAO 配置为 I2S **主机**（`cfg.is_master = true`）。录音和回放示例则将 XIAO 作为 **从机**，因为 XVF3800 提供时钟。如果在不同示例之间切换，请注意这一差异。
:::

## 工作原理

1. 示例以 48 kHz、立体声、32 位配置一个全双工 I2S 流（`RXTX_MODE`）。
2. 在 32,000 帧中，每一帧都通过 32 位相位累加器计算一个 440 Hz 方波，将同一个采样写入两个声道，然后读取返回的一帧立体声数据。
3. 每个接收到的采样值只要不是 `0` 或 `-1`，就会让 `nonZero` 自增；前 100 帧会被打印出来，方便你直观查看数据。
4. 运行结束后，将 `nonZero` 与 `frameCount`（64,000 个采样中的 32,000 个）进行比较。如果低于阈值，测试会再运行一次，然后才会报告 `I2S RX FAIL!`。

## Arduino 示例代码

```c
#include "AudioTools.h"

const int sampleRate = 48000;
const int frequency = 440;
const int32_t amplitude = 500;

const int frameCount = 32000;  // 32000 stereo frames

AudioInfo info(sampleRate, 2, 32);
I2SStream i2s;
I2SConfig cfg;

uint32_t phase = 0;
const uint32_t phaseStep =
    (uint64_t)frequency * 0x100000000ULL / sampleRate;

// Generate TX frames and check RX samples simultaneously
void runI2STest(int &nonZero) {

  nonZero = 0;
  bool truncated = false;

  int32_t txFrame[2];
  int32_t rxFrame[2];

  phase = 0;

  for (int i = 0; i < frameCount; i++) {

    // Generate 440 Hz square wave
    phase += phaseStep;

    int32_t sample =
        (phase & 0x80000000UL) ? -amplitude : amplitude;

    // Same signal on left and right channels
    txFrame[0] = sample;
    txFrame[1] = sample;

    // Write one stereo frame (2 x 32-bit)
    i2s.write((uint8_t *)txFrame, sizeof(txFrame));

    // Read one stereo frame (2 x 32-bit)
    size_t n = i2s.readBytes(
        (uint8_t *)rxFrame,
        sizeof(rxFrame)
    );

    if (n == sizeof(rxFrame)) {

      for (int ch = 0; ch < 2; ch++) {

        if (rxFrame[ch] != 0 && rxFrame[ch] != -1) {
          nonZero++;
        }
      }

      // Print first 100 stereo frames
      if (i < 100) {
        Serial.printf(
            "L: %ld  R: %ld\n",
            (long)rxFrame[0],
            (long)rxFrame[1]
        );
      }
      else if (!truncated) {
        Serial.println("... (truncated)");
        truncated = true;
      }
    }
  }

  Serial.println();
}

void setup() {

  Serial.begin(115200);
  while (!Serial);

  AudioLogger::instance().begin(
      Serial,
      AudioLogger::Info
  );

  cfg = i2s.defaultConfig(RXTX_MODE);
  cfg.copyFrom(info);

  cfg.pin_bck = 8;
  cfg.pin_ws = 7;

  cfg.pin_data = 44;     // TX
  cfg.pin_data_rx = 43;  // RX

  cfg.is_master = true;

  i2s.begin(cfg);

  Serial.println("I2S full-duplex test started");
  Serial.println("Sample rate: 48000 Hz");
  Serial.println("Channels: 2");
  Serial.println("Bit depth: 32-bit");
}

void loop() {

  int nonZero = 0;

  Serial.println("First I2S RX test:");

  runI2STest(nonZero);

  Serial.printf(
      "Valid samples: %d / %d\n",
      nonZero,
      frameCount * 2
  );

  if (nonZero > frameCount) {

    Serial.println("I2S RX PASS!");

  } else {

    Serial.println(
        "Valid samples below threshold. Trying again..."
    );

    nonZero = 0;

    runI2STest(nonZero);

    Serial.printf(
        "Valid samples: %d / %d\n",
        nonZero,
        frameCount * 2
    );

    if (nonZero > frameCount) {
      Serial.println("I2S RX PASS!");
    } else {
      Serial.println("I2S RX FAIL!");
    }
  }

  Serial.println("Test complete");

  while (true);
}
```

## 预期输出

将串口监视器波特率设置为 **115200 baud**。正常的连接看起来类似这样：

```text
I2S full-duplex test started
Sample rate: 48000 Hz
Channels: 2
Bit depth: 32-bit
First I2S RX test:
L: -500  R: -500
L: -500  R: -500
L: 500  R: 500
... (truncated)
Valid samples: 63500 / 64000
I2S RX PASS!
Test complete
```

前几帧中的具体数值取决于麦克风拾取到的内容。最重要的一行是 `I2S RX PASS!`。

## 故障排查

### `I2S RX FAIL!`

- 确认阵列正在运行 **I2S** 固件——USB 固件镜像不会产生 I2S 数据。
- 检查开发板包是否为 `XIAO_ESP32S3_Plus`，并确认没有其他示例代码重新定义 I2S 引脚。
- 确认示例代码使用 GPIO 8 / 7 / 44 / 43，与上表保持一致。

### 所有接收的采样都是 `0` 或 `-1`

麦克风数据流没有到达 XIAO。请重新烧录 I2S 固件，然后给板子断电重启。如果阵列被静音，处理后的声道可能是静音的——按一次静音按键。

### 串口监视器没有任何输出

在板子重新枚举后，在 `Tools > Port` 中选择正确的端口。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
