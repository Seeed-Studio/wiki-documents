---
description: 使用 Raspberry Pi、XIAO ESP32、ReSpeaker Lite 和语音嵌入，实现智能免手动语音控制的 Kiwi 驱动机器人。
title: LeKiwi 语音控制器
keywords:
  - reSpeaker flex
  - LeKiwi
  - xvf3800
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/banner_javis.png"
slug: /respeaker_flex_lekiwi
sku: 100005504,100099135,100070894,100026178
last_update:
  date: 04/28/2026
  author: Kasun Thushara
createdAt: '2026-04-28'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/respeaker_flex_introduction/
---


## 概述
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/banner_javis.png" alt="pir" width={800} height="auto" /></p>

用你的声音控制一台三轮 Kiwi 驱动机器人！本项目将 Seeed Studio XIAO ESP32（电机控制器）与 Raspberry Pi（语音处理大脑）结合起来，并通过 reSpeaker Flex 提供高质量音频采集，再配合 Voice Embeddings，实现更智能、更个性化的语音交互。你可以使用自然语言指令来驱动、转向和控制机器人，实现完全免手动操作，并获得更高的准确性和响应速度。



## 所需硬件

<table align="center">
  <tr>
    <th>LeKiwi 套件</th>
    <th>XIAO ESP32S3</th>
    <th>reSpeaker Flex XVF3800 Circular</th>
    <th>Raspberry Pi 5</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114090065-lekiwi-kit_1.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010634-seeed-studio-xiao-esp32s3-_pre-soldered_-45font_1.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Lekiwi-Kit-p-6501.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## 服务

- [**Groq**](https://groq.com/) 账号：免费层就足以开始使用


## 工作原理

```
You speak → Wake word detected → Audio recorded → Whisper STT → LLaMA LLM → Orpheus TTS speaks back → ESP32 moves the robot
```

1. 你说出唤醒词（默认：**"Hey Jarvis"**）
2. Raspberry Pi 录制你的指令
3. **Groq Whisper** 将你的语音转写为文本
4. **LLaMA 3** 决定机器人应执行的动作
5. **Groq Orpheus TTS** 将回复语音播报出来
6. 通过串口向 ESP32 发送指令，由其驱动电机
---

## 准备 XIAO ESP32（电机控制器）

ESP32 运行 Arduino 草图，用 **Kiwi 驱动运动学** 实际驱动三个轮子。它从 Raspberry Pi 接收单字符串口指令（`w`、`s`、`a`、`d` 等），并将其转换为协调一致的电机转速。

### 步骤 1 — 设置电机 ID

:::info
该草图预期舵机 ID 为 **1、2、3**。在组装机器人之前，请将每个舵机单独连接，并使用 Feetech 配置工具分配正确的 ID。

 [Feetech 设置指南 (PDF)](https://www.feetechrc.com/Data/feetechrc/upload/file/20201127/start%20%20tutorial201015.pdf)

 :::

### 步骤 2 — 组装 LeKiwi

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/hardware_lekiwi_1.png" alt="pir" width={800} height="auto" /></p>

按照 Seeed Studio 官方视频教程组装底盘、安装车轮并连接舵机：

 [LeKiwi 组装教程](https://wiki.seeedstudio.com/cn/lerobot_lekiwi/#assembly)

:::info
你只需要完成**物理组装**，可以跳过所有关于克隆 LeRobot GitHub 仓库的步骤，因为本项目使用的是不同的设置。
:::


### 步骤 3 — 上传 Arduino 草图



该草图（`lekiwi_motor_control.ino`）完成以下工作：

- 将三个舵机全部初始化为**位置模式**，将其居中，然后切换到**轮子（连续旋转）模式**
- 在 USB 串口上监听单字符指令
- 使用 **Kiwi 驱动运动学** 计算每个轮子的正确速度
- 仅支持 **点动模式**（短暂脉冲，然后自动停止） 
**串口指令参考：**

| 按键 | 动作 |
|-----|--------|
| `w` | 向前点动 |
| `s` | 向后点动 |
| `a` | 左转点动 |
| `d` | 右转点动 |
| `q` | 左平移点动 |
| `e` | 右平移点动 |
| `x` / 空格 | 紧急停止 |
| `+` / `-` | 增加 / 减少点动时长 |
| `*` / `/` | 增加 / 减少点动速度 |

在安装好 **SCServo** 库的 Arduino IDE 中上传该草图。打开串口监视器并设置为 **115200 波特率**，确认三个舵机都返回 `OK`。

<details>
<summary>Arduino 代码</summary>

```c++
#include <SCServo.h>
#include <math.h>

// Serial port selection
#if defined(CONFIG_IDF_TARGET_ESP32C3) || \
    defined(CONFIG_IDF_TARGET_ESP32C6) || \
    defined(CONFIG_IDF_TARGET_ESP32S3)
  #define COMSerial Serial0
#else
  #define COMSerial Serial1
#endif

#define S_RXD D7
#define S_TXD D6

SMS_STS st;
#define SERVO_NUM 3
byte ID[SERVO_NUM] = {1, 2, 3};

// Kiwi drive wheel angles (90°, 210°, 330°)
const float WHEEL_ANGLE_DEG[SERVO_NUM] = {90.0f, 210.0f, 330.0f};

// Base speed (0-3000 for STS3215 in wheel mode)
int BASE_SPEED = 1000;

// Nudge parameters
int NUDGE_DURATION = 1500;  // milliseconds to move
int NUDGE_SPEED = 800;     // speed during nudge

#define REG_OPERATING_MODE 33

void enableWheelMode(byte servoID) {
  // Unlock EEPROM
  st.unLockEprom(servoID);
  delay(10);

  // Set wheel mode (value 1 for continuous rotation mode)
  st.writeByte(servoID, REG_OPERATING_MODE, 1);
  delay(10);

  // Lock EEPROM
  st.LockEprom(servoID);
  delay(10);

  // IMPORTANT: Enable torque after mode change
  st.EnableTorque(servoID, 1);
  delay(10);

  Serial.print("Servo "); Serial.print(servoID); 
  Serial.println(" configured for wheel mode with torque enabled");
}

void setWheelSpeeds(float vx, float vy, float omega) {
  for (int i = 0; i < SERVO_NUM; i++) {
    float rad = WHEEL_ANGLE_DEG[i] * (PI / 180.0f);

    // Kiwi kinematics formula
    float speed = -sin(rad) * vx + cos(rad) * vy + omega;

    // Scale to servo speed range (-3000 to +3000)
    int spdInt = (int)(speed * BASE_SPEED);

    // Clamp to valid range
    if (spdInt > 3000) spdInt = 3000;
    if (spdInt < -3000) spdInt = -3000;

    // WriteSpe expects (id, speed) - only 2 parameters!
    st.WriteSpe(ID[i], spdInt);
  }
}

void nudgeRobot(float vx, float vy, float omega) {
  // Calculate temporary speeds using nudge speed instead of base speed
  int originalBaseSpeed = BASE_SPEED;
  BASE_SPEED = NUDGE_SPEED;

  // Apply movement
  setWheelSpeeds(vx, vy, omega);

  // Wait for nudge duration
  delay(NUDGE_DURATION);

  // Stop all motors
  stopAll();

  // Restore original base speed
  BASE_SPEED = originalBaseSpeed;
}

void stopAll() {
  for (int i = 0; i < SERVO_NUM; i++) {
    st.WriteSpe(ID[i], 0);
  }
  Serial.println("Motors stopped");
}

void initializeServosToPositionMode() {
  Serial.println(F("Setting servos to position mode for initial positioning..."));

  for (int i = 0; i < SERVO_NUM; i++) {
    // Unlock EEPROM
    st.unLockEprom(ID[i]);
    delay(10);

    // Set position mode (value 0)
    st.writeByte(ID[i], REG_OPERATING_MODE, 0);
    delay(10);

    // Lock EEPROM
    st.LockEprom(ID[i]);
    delay(10);

    // Enable torque
    st.EnableTorque(ID[i], 1);
    delay(10);
  }

  delay(500);

  Serial.println(F("Moving all servos to center position (2048)..."));

  // Move all servos to center position
  u16 Speed[SERVO_NUM] = {1500, 1500, 1500};
  byte ACC[SERVO_NUM] = {50, 50, 50};
  s16 Pos[SERVO_NUM] = {2048, 2048, 2048};

  st.SyncWritePosEx(ID, SERVO_NUM, Pos, Speed, ACC);
  delay(2000); // Wait for movement to complete

  Serial.println(F("Servos positioned. Switching to wheel mode..."));

  // Now switch to wheel mode
  for (int i = 0; i < SERVO_NUM; i++) {
    enableWheelMode(ID[i]);
    delay(50);
  }
}

void printHelp() {
  Serial.println(F("\n====== LeKiwi Nudge Control ======"));
  Serial.println(F("Each key press gives a short 'nudge' movement"));
  Serial.println(F(" w = Forward nudge"));
  Serial.println(F(" s = Backward nudge"));
  Serial.println(F(" a = Turn LEFT nudge"));
  Serial.println(F(" d = Turn RIGHT nudge"));
  Serial.println(F(" q = Strafe LEFT nudge"));
  Serial.println(F(" e = Strafe RIGHT nudge"));
  Serial.println(F(" x = STOP (emergency)"));
  Serial.println(F(""));
  Serial.println(F("Continuous movement mode:"));
  Serial.println(F(" SHIFT + key = Continuous movement"));
  Serial.println(F(" Example: Press 'W' (uppercase) = continuous forward"));
  Serial.println(F(""));
  Serial.println(F("Settings:"));
  Serial.println(F(" + = Increase nudge duration"));
  Serial.println(F(" - = Decrease nudge duration"));
  Serial.println(F(" * = Increase nudge speed"));
  Serial.println(F(" / = Decrease nudge speed"));
  Serial.println(F(" ? = Show this help"));
  Serial.println(F(""));
  Serial.print(F("Current nudge duration: "));
  Serial.print(NUDGE_DURATION);
  Serial.println(F(" ms"));
  Serial.print(F("Current nudge speed: "));
  Serial.println(NUDGE_SPEED);
  Serial.println(F("==================================="));
}

void setup() {
  Serial.begin(115200);
  delay(1500);
  Serial.println(F("LeKiwi Nudge Control boot..."));

  // Start servo bus with explicit pins
  COMSerial.begin(1000000, SERIAL_8N1, S_RXD, S_TXD);
  st.pSerial = &COMSerial;
  delay(500);

  Serial.println(F("Checking servos..."));
  bool allServosFound = true;

  for (int i = 0; i < SERVO_NUM; i++) {
    if (st.Ping(ID[i]) != -1) {
      Serial.print(F("Servo "));
      Serial.print(ID[i]);
      Serial.println(F(" OK"));
    } else {
      Serial.print(F("ERROR: Servo "));
      Serial.print(ID[i]);
      Serial.println(F(" not found!"));
      allServosFound = false;
    }
    delay(100);
  }

  if (!allServosFound) {
    Serial.println(F("Some servos not found. Check connections and power!"));
    while(1) { delay(1000); } // Halt if servos not found
  }

  // Initialize servos to center position, then switch to wheel mode
  initializeServosToPositionMode();

  Serial.println(F("\nSystem ready! Press keys for nudge movement."));
  Serial.println(F("(Each key press moves the robot a short distance)\n"));

  printHelp();
}

void loop() {
  if (!Serial.available()) return;

  char cmd = (char)Serial.read();
  bool isShifted = false;

  // Check for uppercase (SHIFT key in terminal)
  if (cmd >= 'A' && cmd <= 'Z') {
    isShifted = true;
  }

  // Flush any trailing characters
  while (Serial.available() && (Serial.peek() == '\n' || Serial.peek() == '\r')) {
    Serial.read();
  }

  // Process movement commands
  switch (cmd) {
    case 'w':
      if (isShifted) {
        setWheelSpeeds(0, 1, 0);
        Serial.println(F("Continuous Forward"));
      } else {
        Serial.println(F("Nudge Forward"));
        nudgeRobot(0, 1, 0);
      }
      break;

    case 's':
      if (isShifted) {
        setWheelSpeeds(0, -1, 0);
        Serial.println(F("Continuous Backward"));
      } else {
        Serial.println(F("Nudge Backward"));
        nudgeRobot(0, -1, 0);
      }
      break;

    case 'q':
      if (isShifted) {
        setWheelSpeeds(-1, 0, 0);
        Serial.println(F("Continuous Strafe Left"));
      } else {
        Serial.println(F("Nudge Strafe Left"));
        nudgeRobot(-1, 0, 0);
      }
      break;

    case 'e':
      if (isShifted) {
        setWheelSpeeds(1, 0, 0);
        Serial.println(F("Continuous Strafe Right"));
      } else {
        Serial.println(F("Nudge Strafe Right"));
        nudgeRobot(1, 0, 0);
      }
      break;

    case 'a':
      if (isShifted) {
        setWheelSpeeds(0, 0, 1);
        Serial.println(F("Continuous Turn Left"));
      } else {
        Serial.println(F("Nudge Turn Left"));
        nudgeRobot(0, 0, 1);
      }
      break;

    case 'd':
      if (isShifted) {
        setWheelSpeeds(0, 0, -1);
        Serial.println(F("Continuous Turn Right"));
      } else {
        Serial.println(F("Nudge Turn Right"));
        nudgeRobot(0, 0, -1);
      }
      break;

    case 'x': case 'X': case ' ':
      stopAll();
      Serial.println(F("Emergency Stop"));
      break;

    case '+':
      NUDGE_DURATION = min(NUDGE_DURATION + 50, 1000);
      Serial.print(F("Nudge duration: "));
      Serial.print(NUDGE_DURATION);
      Serial.println(F(" ms"));
      break;

    case '-':
      NUDGE_DURATION = max(NUDGE_DURATION - 50, 50);
      Serial.print(F("Nudge duration: "));
      Serial.print(NUDGE_DURATION);
      Serial.println(F(" ms"));
      break;

    case '*':
      NUDGE_SPEED = min(NUDGE_SPEED + 100, 2000);
      Serial.print(F("Nudge speed: "));
      Serial.println(NUDGE_SPEED);
      break;

    case '/':
      NUDGE_SPEED = max(NUDGE_SPEED - 100, 200);
      Serial.print(F("Nudge speed: "));
      Serial.println(NUDGE_SPEED);
      break;

    case '?':
      printHelp();
      break;
  }
}
```

</details>

 ## 准备树莓派（语音大脑）

### 步骤 1 — 获取 Groq API 密钥

1. 在 [console.groq.com](https://console.groq.com/) 注册
2. 创建一个新的 API 密钥并复制它——你将在步骤 4 中用到
### 步骤 2 — 克隆此仓库

```bash
git clone https://github.com/KasunThushara/Lekiwi-voice
cd Lekiwi-voice
```

### 步骤 3 — 创建虚拟环境

```bash
python3 -m venv venv
source venv/bin/activate
```

> 每次打开一个新的终端并在使用此项目之前，都要运行 `source venv/bin/activate`。

### 步骤 4 — 安装依赖

```bash
pip install -r requirements.txt
```

然后下载唤醒词模型：

```bash
python3 download_model.py
```

这会从 openwakeword 下载预训练的 **"Hey Jarvis"** 模型（以及其他模型）到 `~/.openwakeword/`。

### 步骤 5 — 查找你的麦克风索引

通过 USB 插入你的 **ReSpeaker Flex**，然后运行：

```bash
python3 list_mics.py
```

你会看到类似这样的列表：

```
Available audio INPUT devices:

  [0] bcm2835 Headphones  (rate=44100Hz)
  [1] ReSpeaker 4 Mic Array  (rate=16000Hz)
  [2] USB PnP Sound Device  (rate=16000Hz)
```

记下 ReSpeaker 旁边方括号中的数字——那就是你的 `MIC_INDEX`。

### 步骤 6 — 查找你的 ESP32 串口

通过 USB 将 XIAO ESP32 插入树莓派，然后运行：

```bash
python3 list_ports.py
```

示例输出：

```
Available serial ports:

  /dev/ttyACM0         USB Serial Device
  /dev/ttyUSB0         CP2102 USB to UART Bridge
```

记下设备路径（对于 XIAO 通常是 `/dev/ttyACM0`）。

### 步骤 7 — 配置项目

复制示例配置文件并填入你的参数：

```bash
cp config.env.example config.env
nano config.env
```

需要更新的关键设置：

```env
# Your Groq API key (required)
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxx

# The number from list_mics.py
MIC_INDEX=1

# The port from list_ports.py
SERIAL_PORT=/dev/ttyACM0
```

其他所有内容保持默认即可开始使用。

---

## 运行机器人

确保你的虚拟环境已激活，然后运行：

```bash
python3 pipeline.py
```

你应该会看到：

```
======================================================
  LeKiwi Voice Controller — Ready
  Wake word  : hey jarvis
  LLM model  : llama-3.1-8b-instant
  STT model  : whisper-large-v3-turbo
  TTS voice  : autumn
  Serial     : /dev/ttyACM0 @ 115200
======================================================
[WakeWord] Listening for 'hey jarvis' ...
```

现在说出 **"Hey Jarvis"**，然后给出一个移动指令！

### 示例指令

> "Hey Jarvis, move forward"

> "Hey Jarvis, turn left"

> "Hey Jarvis, strafe right"

> "Hey Jarvis, stop"

> "Hey Jarvis, what can you do?"

---

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
