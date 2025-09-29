---
title: 重量センサー（ロードセル）0-500g
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Weight_Sensor_Load_Cell_0-500g/
slug: /ja/Weight_Sensor_Load_Cell_0-500g
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/img/loadcell500.jpg)

電子スケール、価格計算スケール、電子プラットフォームスケール、デジタルスケール、郵便物スケール、電子天秤、そして単一ロードセルを使用したすべての種類の商業用スケールに適しています。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/weight-sensor-load-cell-0500g-p-525.html?cPath=144_150)

##   仕様
---
*   容量 g: 500g

*   出力感度 mv/v: 0.5±0.1

*   非線形性 %.F.S: 0.05

*   ヒステリシス %F.S: 0.05

*   再現性 %F.S: 0.05

*   クリープ(30分) %.F.S: 0.05

*   感度に対する温度影響 %F.S/10℃: 0.05

*   ゼロに対する温度影響 %F.S/10℃: 0.05

*   ゼロバランス %F.S: ±0.5

*   入力抵抗 Ω(オーム): 1120±10

*   出力抵抗 Ω(オーム): 1000±10

*   絶縁抵抗 MΩ(オーム): ≥2000

*   推奨励起電圧 v: 5v

*   接続方法: 赤：Exc + 黒：Exc –

*   緑：Sig + 白：Sig -

##   使用方法
---
###  **ハードウェアの設置**

![](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/img/Weight_Sensor.png)

**注意**: 重量センサーは150g未満の負荷の場合、出力が0Vとなるため、直接負荷を測定することはできません。私の方法では、200gのローカルウェイトを使用して測定の盲点を回避します。200gの重量のアナログデータを無負荷（0g）として読み取り、700gの重量のアナログデータを最大負荷（500g）として読み取ります。

###  **プログラミング**
```
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int value;
    value = analogRead(0);
    Serial.println(value);
}
```

###   外部リンク

[Arduinoでの使用方法](http://cerulean.dk/words/?page_id=42).

##   ソース
---
- [INA125データシート](https://files.seeedstudio.com/wiki/Weight_Sensor_Load_Cell_0-500g/res/INA125.pdf)

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を提出してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>