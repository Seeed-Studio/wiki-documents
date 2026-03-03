---
description: Xadow - ブザー
title: Xadow - ブザー
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Xadow_Buzzer
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Xadow_Buzzer/img/Xadow_buzzer.jpg)

これは音を発することができる Xadow モジュールです。駆動するには、2つのピンを同時に制御する必要があります。これは、1つのピンで制御する Grove - ブザーとは異なります。小型ながらも音量は大きいです！ビープ音、トーン、アラートを作成するのに使用できます。

Xadow は、小型で完璧に設計された Arduino(TM) 互換ボードシリーズで、複数のモジュールを含んでいます。サイズ、重量、柔軟なカスケード接続に高い要求があるウェアラブルデバイスやアートデザインなど、スペースに敏感なプロジェクトに非常に適しています。他のモジュールについては[こちら](https://www.seeedstudio.com/)をご覧ください。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Buzzer-p-1599.html)

## 仕様
---
- 動作電圧: 3.3V
- 基本周波数: 2700Hz
- 音圧レベル: >75dB
- 寸法: 25.43mm x 20.35mm

## デモンストレーション
---
ブザー音を駆動する方法を示す簡単なデモがあります。これをうまく使用できれば、例えばバッテリー状態の検出など、素晴らしいプロジェクトに応用できます。Xadow メインボードのバッテリーが低下した際にブザーが音を発するように設定できます。

![](https://files.seeedstudio.com/wiki/Xadow_Buzzer/img/Buzzer_Usage.jpg)

```
void setup()
{
    DDRB |= 0x06;
}

void loop()
{
    // ブザーをオンにする
    PORTB |= 0x06;
    delay(1);
    // ブザーをオフにする
    PORTB &= ~(0x06);
    delay(1);
}
```

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Buzzer/res/Xadow_Buzzer_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース
---
- [Xadow ブザー Eagle ファイル](https://files.seeedstudio.com/wiki/Xadow_Buzzer/res/Xadow_Buzzer_eagle_file.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>