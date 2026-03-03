---
description: Lipo Rider Plus (充電器/ブースター) - 5V/2.4A USB Type C
title: Lipo Rider Plus (充電器/ブースター) - 5V/2.4A USB Type C
keywords:
- アクセサリー充電
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Lipo-Rider-Plus
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center">
<figure>
<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/l/i/lipo-rider-plus-v1.0-preview.jpg" alt="Lipo Rider Plusの成果物" title="デモ" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Lipo-Rider-Plus-p-4204.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/IMAGE/get+started.png" border="0" /></a></p>

Seeed の Lipo Rider Plus は、急速充電器であるだけでなく、強力なパワーブースターでもあります。最大 5V/2A の充電電流をサポートし、ブースト出力統合により最大 5V/2.4A を出力可能で、さらに 3.3V / 250mA の出力も提供します。3.3V 出力は常時オンで、5V 出力は IO 制御または手動スイッチをサポートしています。つまり、3.3V を使用してマイクロコントローラーに電力を供給し、このマイクロコントローラーの I/O を使用して 5V 出力を制御することができ、完全にプログラム可能です。なんと、これが 5 ドル未満で手に入るなんて信じられません！

簡単に言えば、Lipo Rider Plus はリポバッテリーをより速く充電できるだけでなく、スレーブデバイスに強力な電力を供給することができます。あ、伝え忘れましたが、Lipo Rider と従来のリポ充電器の違いについても説明します。

## 特徴

- 最大 5V / 2A の充電電流 - USB Type C
- 最大 5V / 2.4A の出力電流 - USB Type A
- 3.3V / 250mA の出力を提供 - ピンヘッダー
- 出力のシャットダウンをサポート (IO 制御/手動スイッチ)
- オンボード充電ステータスインジケーター LED + オンボード 4 セグメント電源インジケーター LED
- 超小型 2.5cm*4.1cm
- シングルレイアウトで簡単に取り付け可能

## はじめに

### ハードウェア接続

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Lipo-Rider-Plus/img/Hardware_connection.png" alt="Lipo Rider Plusの成果物" title="デモ" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

:::caution
リチウムバッテリーには内蔵バッテリープロテクターを使用するか、別途バッテリープロテクターを接続できることを確認してください。そうしないと、バッテリーが過充電または過放電する可能性があります。
:::

### Lipo Rider と Lipo Charger の違い

従来のリポ充電器はリチウムバッテリーを充電できますが、通常は充電のみが可能です。しかし、Lipo Rider は何ができるのでしょうか？

**リチウムバッテリーの充電**

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Lipo-Rider-Plus/img/GIF.gif" alt="Lipo Rider Plusの成果物" title="デモ" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

もちろん、Lipo Rider Plus はリポバッテリーを充電できます。そして非常に速いです。5V/2A、10W の充電電力で、まるで飛ぶような体験です。

**バッテリーを使用してデバイスに電力を供給**

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Lipo-Rider-Plus/img/GIF2.gif" alt="Lipo Rider Plusの成果物" title="デモ" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

充電器であるだけでなく、電源供給装置およびブースターでもあります。Lipo Rider Plus を使用すれば、3.7V のリポバッテリーを入力し、USB Type-A ポートを介して最大 5V/2.4A を出力できます。オンボードスイッチを使用すれば、USB ポートの ON/OFF を簡単に制御できます。また、フル機能のピンヘッダーを提供しており、3.3V/250mA の出力も可能です。

### Lipo Rider Plus と Lipo Rider & Lipo Rider Pro の比較

すでに [Lipo Rider V1.3](https://www.seeedstudio.com/Lipo-Rider-v1-3.html) と [Lipo Rider Pro](https://www.seeedstudio.com/LiPo-Rider-Pro-p-992.html) をリリースしていることをご存知かもしれません。それでは、[Seeed Lipo Rider](https://www.seeedstudio.com/tag/Lipo-Rider.html) の違いは何でしょうか？簡単に言えば、LiPo Rider Pro と Lipo Rider v1.3 の両方には JST2.0 ポートが 2 つあり、ソーラーパネルを使用してリポバッテリーを充電することができます。

しかし、Lipo Rider Plus には JST2.0 ポートが 1 つしかありません。そのため、ソーラーパネルを電源として使用することはできません。ただし、Lipo Rider Plus はよりコンパクトになり、LiPo Rider Pro や Lipo Rider v1.3 のほぼ半分のサイズになりました。そのため、どんなプロジェクトにも簡単に取り付けることができます。さらに重要なのは、その性能が前の 2 つのモデルよりもはるかに強力であることです。要するに、ソーラーパネルと連携して作業する必要がある場合は、LiPo Rider Pro と Lipo Rider v1.3 が適しています。一方、急速充電を体験したい場合は、Lipo Rider Plus が最適な選択肢となるでしょう。

## オンライン回路図ビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo-Rider-Plus/img/202002729_Lipo_Rider_Plus.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Lipo Rider Plus](https://files.seeedstudio.com/wiki/Lipo-Rider-Plus/img/202002729_Lipo_Rider_Plus.zip)

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