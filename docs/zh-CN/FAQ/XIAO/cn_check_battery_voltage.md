---
description: XIAOESP32C3-常见问题解答
title: 如何检测电池电压
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/check_battery_voltage
last_update:
  date: 6/28/2023
  author: cheng.tang
---

由于 ESP32C3 引脚数量的限制，为了确保 XIAO ESP32C3 拥有与其他 XIAO 系列相同数量的 GPIO，引擎师们没有额外的引脚分配给电池进行电压测量。

但如果您希望使用一个单独的引脚来测量电池电压，可以参考 [msfujino](https://forum.seeedstudio.com/u/msfujino) 的巧妙操作。在此，我们也特别感谢 [msfujino](https://forum.seeedstudio.com/u/msfujino) 为 XIAO ESP32C3 分享的所有经验和努力。

**基本操作思路是：** 将电池电压通过 200k 电阻分压为 1/2，并连接到 A0 端口，这样就可以监测电压。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

数据手册中标称全量程 AD 转换为 2500mV，但芯片之间存在较大差异，实际可能为 ±10%。我的芯片全量程为 2700mV。

幸运的是，每个芯片的校准修正值已写入熔丝区域，通过使用 `analogReadMilliVolts()` 函数，我可以直接读取修正后的电压值，而无需进行特殊处理。

AD 转换的结果与万用表测量的电压非常接近，误差约为 5 mV，在实际使用中没有问题。

此外，特别是在通信过程中，会出现尖峰状误差，需要进行 16 次平均以消除这些误差。

以下是测试电池电压的步骤。

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // ADC
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt = Vbatt + analogReadMilliVolts(A0); // 带校正的 ADC   
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // 衰减比 1/2，mV --> V
  Serial.println(Vbattf, 3);
  delay(1000);
}
```

:::tip
以上内容来自 Seeed Studio 论坛用户 **msfujino**，原帖地址：
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535)。

我们建议您在尝试基于上述方法测量电池电压之前，具备良好的动手能力和焊接技能，并谨慎避免诸如电池短路等危险操作。
:::