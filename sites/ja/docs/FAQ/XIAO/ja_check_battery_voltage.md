---
description: XIAOESP32C3-FAQ
title: バッテリー電圧の確認方法
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/check_battery_voltage
last_update:
  date: 6/28/2023
  author: cheng.tang
---


ESP32C3のピン数の制限により、XIAO ESP32C3が他のXIAOシリーズと同じ数のGPIOを確保するために、エンジニアはバッテリーの電圧測定に割り当てる余分なピンがありませんでした。

しかし、バッテリー電圧測定に専用のピンを使用したい場合は、[msfujino](https://forum.seeedstudio.com/u/msfujino)の天才的な操作を参考にすることができます。XIAO ESP32C3のために共有されたすべての経験と努力に対して、[msfujino](https://forum.seeedstudio.com/u/msfujino)に特別な感謝を表したいと思います。

**基本的な動作原理は：** バッテリー電圧を200kで1/2に分圧し、A0ポートに接続することで電圧を監視できるようにしました。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

データシートによると、公称2500mVフルスケールAD変換となっていますが、チップごとに大きなばらつきがあり、実際には±10%です。私のチップは2700mVフルスケールでした。

幸い、各チップの校正された補正値がヒューズエリアに書き込まれており、`alalogReadMilliVolts()`関数を使用することで、特別な処理を行うことなく補正された電圧値を読み取ることができます。

AD変換の結果とマルチメーターで測定した電圧は、約5mVの誤差でよく一致しており、実用上問題ありません。

また、特に通信中にスパイク状のエラーが発生するため、これを除去するために16回平均化する必要がありました。

以下はバッテリー電圧をテストする手順です。

```cpp
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // ADC
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt = Vbatt + analogReadMilliVolts(A0); // ADC with correction   
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // attenuation ratio 1/2, mV --> V
  Serial.println(Vbattf, 3);
  delay(1000);
}
```

:::tip
上記はSeeed Studioフォーラムユーザー**msfujino**からの情報で、元の投稿は以下にあります：
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535)。
上記に基づいてバッテリー電圧測定を試みる前に、優れた実践スキルとより良いはんだ付けスキルを持つことをお勧めします。また、バッテリーのショートなどの危険な行為には注意してください。
:::