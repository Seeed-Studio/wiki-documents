---
description: RGBW_Stripe_WireLess_Shield_V1.0
title: RGBW Stripe WireLess Shield V1.0

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/RGBW_Stripe_WireLess_Shield_V1.0
last_update:
  date: 02/02/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_rev1_face.jpg" alt="pir" width={600} height="auto" /></p>

RGBW Stripe WireLess Shield 具有 4 个 PWM 输出，用于连接 RGBW LED 灯带。
每个输出都可以处理 1.5 A 的负载，电压范围为 5 到 24 V。
集成控制器可轻松为 Arduino 提供来自输入电源的 5V 电源。
自恢复保险丝保护 LED 灯带免受过流损坏。
远程控制 RGB 灯带使用流行的 nRF24L01+ 收发器。
最有趣的是，该板具有存储器，现在您可以通过无线方式更新 Arduino 的固件！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_top.jpg" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/RGBW-Strip-WireLess-Shield-V10-p-2629.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

* 基于 Arduino 兼容架构构建（DualOptiboot）

* 兼容 12 - 24V RGB LED 灯带

* 4 个 PWM 输出（RGBW）

* 板载 64kb SPI 闪存 / E2prom（用于 OTA 固件更新）

* 内置自动 LED RF 活动指示（用于 nRF24L01+）

* 迷你 2.4G nRF24L01+ 收发器

* 自恢复保险丝

* 内置按钮

* GROVE 兼容连接器：I2C

## 布局和原理图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW-top.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW-bottom.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/Scheme_RGBW.PNG" alt="pir" width={600} height="auto" /></p>

## 库文件

### 必需的库文件

### 演示代码（示例）

```cpp

int L_RED = 6;
int L_GREEN = 9;
int L_BLUE = 3;
int L_WHITE = 5;

int brightness = 0;
int fadeAmount = 5;

void setup()  {
  pinMode(L_RED, OUTPUT);
  pinMode(L_GREEN, OUTPUT);
  pinMode(L_BLUE, OUTPUT);
  pinMode(L_WHITE, OUTPUT);
}

void loop()  {
  // RED
  analogWrite(L_RED, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // GREEN
  analogWrite(L_GREEN, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // BLUE
  analogWrite(L_BLUE, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // WHITE
  analogWrite(L_WHITE, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
}
```

## 版本跟踪

| 版本 | 描述 | 发布日期 |
|----------|-------------|---------|
| 1.0 rev 1 | 公开版本 | 19.11.2015 |

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