---
title: アナログ
nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/Wio-Terminal-IO-Analog/
slug: /ja/Wio-Terminal-IO-Analog
last_update:
  date: 05/15/2025
  author: gunengyu
---


# Wio Terminal の Grove アナログポートの使用

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2011-36-22.2019-12-12%2011_37_02.gif" /></div>

このリポジトリでは、Wio Terminal でアナログ入力を使用する方法を示します。Wio Terminal でアナログピンを使用するには、RPI ピンを使用する必要があります。

## RPI アナログピン

Raspberry Pi のピン配置は以下のように定義されています：

- `RPI_A0` -> `RPI_A8`

## Grove ポートの設定

**Grove 設定可能 A/D ポート** をアナログポートとして使用するには、以下のように定義してください：

```cpp
void setup() {
    pinMode(A0, INPUT);
}
```

これで、Grove センサーを物理ピンに接続する準備が整いました！

## サンプルコード

この例では、Grove Loudness センサーを使用して動作を示します：

```cpp
void setup() {
    Serial.begin(115200);
    pinMode(A0, INPUT);
}
void loop() {
    int loudness = analogRead(A0);
    Serial.print("Loudness: ");
    Serial.println(loudness);
    delay(50);
}
```

## 技術サポートと製品に関するディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>