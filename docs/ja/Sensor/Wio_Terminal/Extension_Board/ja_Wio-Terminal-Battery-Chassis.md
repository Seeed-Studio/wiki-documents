---
description: Wio Terminal バッテリーチャーシス
title: Wio Terminal バッテリーチャーシス
keywords:
- Wio_terminal Extension_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Wio-Terminal-Battery-Chassis
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

:::note
1. このバージョンの Wio Terminal バッテリーチャーシスは電源を完全にオフにすることができません（使用には影響しません）。
2. 充電電流は最大1.5Aに達する可能性があり、これによりバッテリー寿命が短くなったり、その他の問題が発生する可能性があります。
新しいバージョンの設計を最適化中です（リリース予定日は未定）。初心者の方には新しいバージョンをお勧めします。
*使用中に問題が発生した場合は、技術サポートまたは交換について techsupport@seeed.cc にお問い合わせください。
*電源がオンの状態でピンが他の物体に触れないようにしてください。
:::

Wio Terminal バッテリーチャーシスは、[Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) 開発ボードにとって必須の拡張ボードであり、Wio Terminal に外部電源を提供することで、その携帯性とコンパクトさを向上させます。**650mAhの充電式リチウムポリマーバッテリー、4つのGroveアナログ/デジタルポート、1つのGrove I2Cポート、1つのGrove UARTポート、そして美観と保護のためのABSエンクロージャーを備えています。** また、Wio Terminal バッテリーチャーシスの背面には、Raspberry Pi互換の40ピンGPIOがあり、さらなるアドオンが可能です！

[Wio-Terminal 開発ボード](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) + Wio Terminal バッテリーチャーシスを使用することで、最も強力でコンパクトなIoTプロジェクトを簡単に構築できます。拡張されたGroveポートを使用して、[Groveエコシステム](https://www.seeedstudio.com/category/Grove-c-1003.html)のプラグアンドプレイ機能を楽しむことができます！

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
    
</div>

## 特徴

- 内蔵650mAh充電式リチウムポリマーバッテリー
- USB Type-C充電
- 過電流保護
- ヒカップモード/ヒカップ保護
- 4 x Groveアナログ/デジタルポート
- 1 x Grove I2Cポート
- 1 x Grove UARTポート
- エンクロージャー内に隠された磁石により、ホワイトボードに貼り付け可能！

## 仕様

- Wio Terminal バッテリーチャーシスは、USB Type-Cインターフェースまたは内部バッテリーで動作します。USB Type-Cの最大入力電流は2Aで、入力電圧範囲は**4.75V ~ 5.25V**です。

- 内蔵バッテリーは充電式リチウムポリマーバッテリーで、容量は650mAhです。バッテリー出力電圧は3.7Vで、充電電圧は4.2Vです。
バッテリーはUSB Type-Cインターフェースを通じてのみ充電可能で、メスコネクタやGroveインターフェースを通じて充電することはできません。

- Wio Terminal バッテリーチャーシスの待機電流は300uA未満です。

- Wio Terminal バッテリーチャーシスは、USB Type-Cインターフェースを介して電源供給される場合に過電流保護を備えており、過電流保護の電流しきい値は2.5Aです。

- バッテリーモードで短絡が発生した場合、Wio Terminal バッテリーチャーシスはヒカップモードに入ります。短絡が解除されると、自動的に通常の電源供給モードに戻ります。

## ハードウェア概要

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg" /></div>

## 注意事項

- Wio Terminal バッテリーチャーシスは単独で3.3V電圧を出力することはできず、5V電圧のみを出力します。3.3Vを出力するには、Wio Terminal と一緒に使用する必要があります。
- Wio Terminal バッテリーチャーシスがバッテリー充電モードからバッテリー電源モードに切り替わる際、1.2秒の電圧低下時間があります。
- デフォルトでは、USB Type-Cに接続されていない場合、Wio Terminal バッテリーチャーシスはバッテリーで動作します。USB Type-Cを接続すると、自動的にUSB Type-Cからの電源供給に切り替わります。
- USB Type-Cに接続されている場合、Wio Terminal バッテリーチャーシスはバッテリーとコネクタのRPI_5Vピンの両方に電力を供給します。このとき、バッテリーは電力を供給しません。リチウムバッテリーが完全に充電されていない場合、100%まで充電されると充電が停止します。

## FAQ

充電電流:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/sch.png" /></div>

- この抵抗は**680kΩ/1%**に変更され、充電電流を**450mA**に制限します。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[ZIP]** [Wio Terminal バッテリーチャーシス回路図設計ファイル](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>