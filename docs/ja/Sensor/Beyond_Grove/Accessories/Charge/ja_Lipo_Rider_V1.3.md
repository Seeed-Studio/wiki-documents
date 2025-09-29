---
description: Lipo Rider V1.3
title: Lipo Rider V1.3
keywords:
- アクセサリー充電
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Lipo_Rider_V1.3
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/LiPo-Rider-v1.3.jpg)

お気に入りの電子キットをグリーンエネルギーで駆動しましょう！Lipo Riderボードを使用すれば、ソーラーエネルギーを利用してお気に入りの5Vデバイスを動作させることができます。Lipo Riderボードは、屋外センサー設計に最適なグリーン電源ソリューションです。センサーボードにLipo Riderボードを接続すれば、ソーラー電力で永続的に動作させることができます！

Lipo Riderは非常に手頃な価格で、使いやすい設計です。プログラミングは不要で、接続するだけで動作します。内部の充電ICが、さまざまなコンポーネント間の電力フローをすべて管理します。

ソーラー電力が十分でない場合は、microUSBポートを使用してリチウムバッテリーをUSB経由で充電できます。また、Lipo Riderボードを取り外すことなく、キットをプログラムすることも可能です。

Lipo Riderは、単体のボードとして、またはキット（Lipo Rider + リチウムバッテリー + ソーラーパネル）として購入できます。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Lipo-Rider-v1.3-p-2403.html)

特徴
--------

- JST 2.0コネクタ
- 電源に関係なく安定した5V USB電源供給
- チップ内蔵の充電/再充電アルゴリズム
- ソーラー電力またはUSBを介してリチウムポリマーバッテリーを充電
- リチウムバッテリーまたはUSBのいずれかを介した安定した電源供給
- 2つのUSBポートで、リチウムバッテリーを充電しながらキットをプログラム可能
- バッテリー満充電または充電状態を示すLEDインジケーター
- シンプルな設計で非常に手頃な価格
- エンドユーザーによる簡単な改造で、複数のリチウムバッテリーや大規模/複数のソーラーパネルに対応可能

応用アイデア
-----------------

- 分散型屋外センサーネットワーク用のグリーン電源およびバックアップ電源
- リチウムバッテリー用充電器

:::caution

1. 露出した電子部品が存在します。
2. 大きな負荷を供給する際、ボードが熱くなる場合があります。
3. 特に屋外でソーラー電力収集のために設置した場合、デバイスが濡れると短絡や感電の可能性があります。
:::

ハードウェア概要
-----------------

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-rider-blockdiagram.JPG)

仕様
--------------

- 小型フットプリント – 寸法 = L42 × W34 × D6.8
- リチウムバッテリーの最大充電電流：900mA
- リチウムバッテリーからの最大供給電流：600mA
- USBデバイスからLipoバッテリーへの逆流を防ぐ電源ダイオード

### 主な仕様

<table border="1">
<tr>
<th>
項目
</th>
<th>
最小
</th>
<th>
標準
</th>
<th>
最大
</th>
</tr>
<tr align="center">
<td width="400">
U<sub>in</sub> ソーラー
</td>
<td width="200">
4.8V
</td>
<td width="200">
5.0V
</td>
<td width="200">
6.0V
</td>
</tr>
<tr align="center">
<td>
I<sub>charge</sub> (R<sub>Iset</sub>=2.0kΩ)
</td>
<td>
700mA
</td>
<td>
800mA
</td>
<td>
900mA
</td>
</tr>
<tr align="center">
<td>
I<sub>supply</sub>
</td>
<td>
0mA
</td>
<td>
</td>
<td>
600mA
</td>
</tr>
<tr align="center">
<td>
V<sub>batt</sub>(R<sub>x</sub>=0Ω)
</td>
<td colspan="3" rowspan="1">
4.2V
</td>
</tr>
<tr align="center">
<td>
V<sub>source USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
<tr align="center">
<td>
V<sub>destination USB</sub>
</td>
<td colspan="3" rowspan="1">
5.0V
</td>
</tr>
</table>

ピン定義と定格
-------------------------

### ピン説明とLEDステートメント

| CHピンレベル（赤LED状態） | OKピンレベル（緑LED状態） | ステートメント |
|---------------------------|---------------------------|-------------|
| 低レベル（ON） | 高レベル（OFF） | 充電中 |
| 高レベル（OFF） | 低レベル（最後にON） | 充電完了 |
| パルス信号（点滅） | パルス信号（ON） | バッテリーが存在しない |
| 高レベル（OFF） | 高レベル（OFF） | 2つの状況:<br/>• 入力電圧がゲート電圧より低い<br/>• 入力電圧がバッテリー電圧より低い |

#### ハードウェアコンポーネント

**ソーラーパネル**

ソーラーパネルは下部のJSTコネクタを介してボードに接続されます。ソーラーチャージャーICは4.8-6.0Vの範囲内の入力電圧のみを受け付けます。充電LEDが点灯しない場合、以下の可能性があります：

1. リチウムバッテリーが満充電
2. ソーラーパネルの電圧が範囲外（主にソーラー電力が不足している場合）

2番目の場合、可能であればソーラーパネルを再配置してより多くの日光を受けるようにしてください。上記のいずれの条件も、バッテリーが完全に空でない限り、Lipo RiderがUSBに安定した5V電源を供給するのを妨げることはありません。

*ソーラーパネルの計算式*

ソーラーパネル出力電力 = 出力電流 × 供給電圧

例: 1W = Iout × 5V

Iout = 200mA

したがって、損失を無視すると、1時間の充電で200mAhが得られます。1000mAhのバッテリーを空から満充電にするには、理想的な条件下で約5時間かかります。

**リチウムバッテリー**

Lipo Riderという名前から、リチウムポリマーを使用することが推奨されます。ただし、リチウムポリマーとリチウムイオンバッテリーの化学特性は十分に類似しているため、これら2種類のバッテリーを互換的に使用できます。複数のバッテリーを使用する場合は、直列ではなく並列に接続してください。充電ICは4.2Vを供給します。

**スライドスイッチ**

スライドスイッチはUSB 5V電源の供給元を制御します。  
ON – リチウムバッテリーおよび/またはソーラーからの充電が有効  
OFF – リチウムバッテリーおよび/またはソーラーからの充電が無効

**ソースUSBポート**

ソースUSBポートは**micro-USB**ポートで、通常のUSBポートとして使用されます。このポートはリチウムバッテリーを充電するため、またはデスティネーションUSBポートを介してデバイスに接続するために使用されます。

**デスティネーションUSBポート**

デスティネーションUSBポートは、接続先デバイスを接続する場所です。接続先デバイスへの電力はLipo Riderボードによって供給されます。この供給はソーラーパネル、リチウムバッテリー、またはソースUSBポートのいずれかから行われます。

#### 異なる接続シナリオにおける電力フローの方向

膨大な組み合わせが存在するため、主要なシナリオのみを含めています：

**スタンドアロンモード**

ソーラーパワーがリチウムバッテリーを充電します。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-standalone.JPG)

**USBモード**

ソーラーパワーがリチウムバッテリーを充電します。リチウムバッテリーがUSBデバイスに電力を供給します。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-usb.JPG)

**プログラムモード**

USBソースがリチウムバッテリーを充電し、USBデバイスに電力を供給します。ソースUSBデバイスとデスティネーションUSBデバイス間でデータ接続が有効になります。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/Lipo-Rider-v1.2-program.JPG)

### 例

#### 屋外センサーデバイスの電源供給

Lipo Riderボードの重要な用途の1つは、屋外センサー向けの手頃な価格の電源供給としての役割です。屋外センサーデバイスは、ソーラーパネルによって補助されるリチウムバッテリーによって電力供給されます。なお、屋外センサーをソーラーパワーのみで動作させることは推奨されません。日中の変動によりセンサーがリセットされたり、予期せず電源が切れる可能性があるためです。この場合、デバイスは「USBモード」で動作しています。

屋外センサーデバイスのファームウェアを再プログラムする必要がある場合は、マイクロUSBポートをPCに接続するだけで、上記で説明した「プログラムモード」に切り替わります。

より大容量のバッテリーや複数のソーラーパネルを使用することも可能ですが、これはエンドユーザーによる改造が必要です。

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/img/LiPo-Rider-v1.3_example.jpg)

**Lipo RiderがArduino Duemilanoveに電力を供給している様子（この場合、屋外センサーとして厳密には該当しません。センサーが接続されておらず、屋外でもありませんが、趣旨は理解いただけると思います）**

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/res/Li-Po_Rider_v1.3_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

リソース
---------

- [Li-Po Rider v1.3 Schematic and Layout in Eagle format](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.3/res/Li-Po_Rider_v1.3_sch_pcb.zip)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Lipo_Rider_V1.3 から作成されました -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>