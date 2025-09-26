---
description: Grove - IOIO-OTG用ベースシールド
title: Grove - IOIO-OTG用ベースシールド
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Base_Shield_for_IOIO-OTG
last_update:
  date: 05/15/2025
  author: shuxu hu
---


![](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/img/Grove-Base_Shield_for_IOIO-OTG.md.jpg)

IOIOは、Androidデバイスと連携するために特別に設計されたボードです。このGrove - IOIO用ベースシールドは、IOIOが豊富なGroveリソースと連携するための拡張ボードです。ボードにはADCやI2Cなどの機能をカバーする6つのGroveソケットが用意されています。このようにして、すべてのGroveモジュールがIOIOボードで利用可能になります。IOIOを使ったプロジェクトを作成したい場合、センサーやディスプレイが必要ですか？このGrove - IOIO用ベースシールドがその利便性を提供します。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Base-Shield-for-IOIO-OTG-p-1613.html)

## インターフェース

![](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/img/Base_Shield_for_IOIO_Interface_Function.jpg)

**J1, J2:** TWIに使用可能。

**J3, J6, J7, J8:** 入力および出力に使用可能。PWMやUARTを含む。

以下の表は、Grove - IOIO-OTG用ベースシールドボードへのピンマッピングを示しています：

| Groveインターフェース | IOIOピン | A/D | I²C | PPSi | PPSo | PICピン | PIC機能 |
|---|---|---|---|---|---|---|---|
| J2 | 1 | | DA1 | Y | Y | 31 | SDA2/RP10/GD4/CN17/RF4 |
| J2 | 2 | | CL1 | Y | Y | 32 | SCL2/RP17/GD5/CN18/RF5 |
| J1 | 4 | | DA0 | Y | Y | 43 | DPLN/SDA1/RP4/GD8/CN54/RD9 |
| J1 | 5 | | CL0 | Y | Y | 44 | SCL1/RP3/GD6/CN55/RD10 |
| J3 | 11 | | | Y | Y | 50 | DPH/RP23/CN51/RD2 |
| J3 | 12 | | | Y | Y | 51 | RP22/GEN/CN52/RD3 |
| J6 | 13 | | | Y | Y | 52 | RP25/GCLK/CN13/RD4 |
| J6 | 14 | | | Y | Y | 53 | RP20/GPWR/CN14/RD5 |
| J7 | 33 | Y | | Y | Y | 50 | DPH/RP23/CN51/RD2 |
| J7 | 34 | Y | | Y | Y | 51 | RP22/GEN/CN52/RD3 |
| J8 | 37 | Y | | Y | Y | 17 | PGEC2/AN6/RP6/CN24/RB6 |
| J8 | 38 | Y | | Y | Y | 18 | PGED2/AN7/RP7/RCV/CN25/RB7 |


## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース

- [Grove - IOIO-OTG用ベースシールド Eagleファイル](https://files.seeedstudio.com/wiki/Grove-Base_Shield_for_IOIO-OTG/res/Grove-Base_Shield_for_IOIO-OTG_Eagle_File.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験をスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>