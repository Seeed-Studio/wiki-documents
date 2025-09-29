---
title: 125Khz RFIDモジュール - UART
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/125Khz RFID module - UART/
slug: /ja/125Khz_RFID_module-UART
last_update:
  date: 05/15/2025
  author: gunengyu
---


![https://www.seeedstudio.com/depot/images/product/P1240147.jpg](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/125khz20uart.jpg)

RDM 125KHzカードミニモジュールは、125KHzカードのコードを読み取るために設計されており、読み取り専用タグおよび読み書き可能なカードに対応しています。オフィス/家庭のセキュリティ、個人識別、アクセス制御、偽造防止、インタラクティブなおもちゃ、製造管理システムなどに適用できます。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/125Khz-RFID-module-UART-p-171.html)

**注意:** モジュールは125kHzタグが近づくと通知し、タグのシリアル番号がTXピンを介して送信されます。MCUプロジェクトやUartSBを介したPC接続に簡単に使用できるRFIDモジュールです。

## 特徴

* 外部アンテナ対応
* 最大有効距離50mm
* デコード時間100ms未満
* UART TTLインターフェース
* EM4100互換の読み取り専用または読み書き可能なタグに対応
* 内蔵の外部2色LEDとブザー駆動
* 小型設計

## 仕様

主要仕様およびその他の仕様を含みます。

### 主な仕様

<table>
<tr>
<td width="300px"> 周波数</td>
<td width="500px"> 125KHz</td>
</tr>
<tr>
<td> ボーレート</td>
<td> 9600 (TTL電気レベルRS232形式)</td>
</tr>
<tr>
<td> インターフェース</td>
<td> Weigang26またはTTL電気レベルRS232形式</td>
</tr>
<tr>
<td> 電源供給</td>
<td> DC 5V（±5%）</td>
</tr>
<tr>
<td> 電流</td>
<td> &lt;50mA</td>
</tr>
<tr>
<td> 動作範囲</td>
<td> &gt;50mm（カード/タグの形状、製造元による）</td>
</tr>
<tr>
<td> 拡張I/Oポート</td>
<td> N/A</td>
</tr>
<tr>
<td> インジケータライト</td>
<td> N/A</td>
</tr>
<tr>
<td> 動作温度</td>
<td> -10℃~ +70℃</td>
</tr>
<tr>
<td> 保管温度</td>
<td> -20℃~ +80℃</td>
</tr>
<tr>
<td> 最大湿度</td>
<td> 相対湿度 0 ~ 95%</td>
</tr>
<tr>
<td> サイズ</td>
<td> 38.5mm ×19mm×9mm</td>
</tr>
</table>

## ピン定義と定格

以下の画像（機械的寸法）を参照し、ピン定義リストを確認してください：

```
ピン定義 :
 P1:
   PIN1    TX
   PIN2    RX
   PIN3
   PIN4    GND
   PIN5    +5V(DC)
 P2:
   PIN1    ANT1
   PIN2    ANT2
 P3:
   PIN1    LED
   PIN2    +5V(DC)
   PIN3    GND
```

## 機械的寸法

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/RFID-wiegand-dimen.JPG)

## 使用方法

### TTLインターフェースRS232データ出力形式

1. 9600bps,N,8,1
2. チェックサム: カード10バイトデータ全体をXOR演算

<table>
<tr>
<td width="100px"> 02</td>
<td width="300px"> 10ASCIIデータ文字</td>
<td width="100px"> チェックサム</td>
<td width="100px"> 03</td>
</tr>
</table>

例: カード番号: 62E3086CED

* 出力データ: 36H、32H、45H、33H、30H、38H、36H、43H、45H、44H
* チェックサム: (62H) XOR (E3H) XOR (08H) XOR (6CH) XOR (EDH)=08H

#### タイムシーケンスチャート

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/RFID-wiegand-time-seq.JPG)

### 例

![](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/img/125k_RFID_uasge.JPG)

出力データ(HEX): 02 | 30 31 30 30 30 37 33 34 45 30 | 44 32 | 03  
-&gt; 10進数に変換  
カード番号10進数: 48 49 48 48 48 55 51 52 69 48  
チェックサム10進数: 68 50  
-&gt; ASCIIテーブルを参照し、ASCII値を取得  
カード番号ASCII: 0 1 0 0 0 7 3 4 E 0  
チェックサムASCII: D 2  
(01H) xor (00H) xor (07H) xor (34H) xor (E0H) = D2H

### プログラミング

RX/TXをArduinoのUARTポートに接続し、UARTデモコードを使用します：
```
void setup()
{
  Serial.begin(9600);
}
void loop()
{
  if(Serial.available())
  {
    while(Serial.available())
    Serial.write(Serial.read());
  }
}
```

## リソース

* データシート: [RDM630-Spec.pdf](https://files.seeedstudio.com/wiki/125Khz_RFID_module-UART/res/RDM630-Spec.pdf)

* [ArduinoとRFIDの接続方法](https://www.instructables.com/id/Arduino-and-RFID-from-seeedstudio/)

## 技術サポートと製品ディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を提出してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>