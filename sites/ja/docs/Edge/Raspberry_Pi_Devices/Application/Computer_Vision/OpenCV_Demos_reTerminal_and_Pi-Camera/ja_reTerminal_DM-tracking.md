---
description: reTerminalとPiカメラを使用したOpenCVによるオブジェクトトラッキング
title: reTerminalとPiカメラを使用したOpenCVによるオブジェクトトラッキング
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Object Tracking
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_DM_Face-tracking
last_update:
  date: 11/7/2023
  author: Kasun Thushara
---

## はじめに

オブジェクトトラッキングは、ビデオの連続するフレーム間で特定のオブジェクトを一貫して位置特定するプロセスです。単一オブジェクトトラッカーの領域では、初期フレームが参照として機能し、対象オブジェクトが境界矩形でマークされます。その後のフレームでは、トラッキングアルゴリズムを使用してオブジェクトの動きを追跡し、追尾します。通常、これらのトラッカーは実世界のアプリケーションでオブジェクト検出器と組み合わせて使用され、両方の技術の強みを組み合わせて精度と効率を向上させます。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facetrack.gif" /></center>

## はじめに

このプロジェクトを開始する前に、ここで説明されているように、事前にハードウェアとソフトウェアを準備する必要があります。

### ハードウェアの準備

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### ソフトウェアの準備

公式ウェブサイトから **Bullesye** または **Bookworm** バージョンの Raspberry Pi 64 bit OS をインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この[**ガイド**](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)に記載されている手順に従ってください。

:::note

私たちの以前のチュートリアル[**OpenCV入門**](https://wiki.seeedstudio.com/ja/reTerminal_DM_opencv/)をぜひご確認ください。このチュートリアルは私たちのシリーズの続編として機能します。

:::

## トラッキング vs. 検出

以前のwikiでは、[**顔**](https://wiki.seeedstudio.com/ja/reTerminal_DM_Face_detection/)と[**色検出**](https://wiki.seeedstudio.com/ja/reTerminal_DM_Color_detection/)について説明しましたが、その断続的な性質に気づきました。簡単な比較は以下の通りです：

1. **速度の利点:**
トラッキングは検出よりも高速です。前のフレームデータを活用することで、トラッキングアルゴリズムはオブジェクトの位置を予測しますが、検出アルゴリズムは各フレームでゼロから開始することが多いです。
2. **失敗の処理:**
顔検出器が遮蔽により失敗した場合、トラッキングアルゴリズムが優れています。部分的な遮蔽を管理でき、検出が不十分な場合に堅牢な性能を提供します。
3. **アイデンティティの持続性:**
オブジェクト検出は検出されたオブジェクトの矩形を提供しますが、アイデンティティの持続性に欠けます。トラッキングはフレーム間で一貫したオブジェクトアイデンティティを維持することに優れており、多くの実世界のアプリケーションにとって重要です。

## トラッキング領域のアルゴリズムとは？

以下は、長所と短所を含む主要なオブジェクトトラッキングアルゴリズムです

**BOOSTING**

- 長所: シンプルでリアルタイム。一貫した動きで良好な性能。
- 短所: 複雑な動きパターンや遮蔽に苦戦。
- 速度: 高速。
- 精度: 中程度。

**MIL (Multiple Instance Learning)**

- 長所: 遮蔽やオブジェクトの外観変化の処理に効果的。
- 短所: ノイズや背景のクラッターに敏感な場合がある。
- 速度: 中程度。
- 精度: 良好。

**KCF (Kernelized Correlation Filter)**

- 長所: 高速性能。スケール変動に対して堅牢。
- 短所: 視界外シナリオに敏感。
- 速度: 高速。
- 精度: 中程度から高。

**TLD (Tracking, Learning, and Detection)**

- 長所: 自己更新機能があり、失われたオブジェクトを再検出可能。
- 短所: ドリフトしやすく、高速な動きに困難を抱える場合がある。
- 速度: 中程度。
- 精度: 中程度。

**MEDIANFLOW**

- 長所: 急激な動きの変化や遮蔽の処理に堅牢。
- 短所: 大幅なオブジェクトの外観変化に苦戦する場合がある。
- 速度: 高速。
- 精度: 中程度。

**MOSSE (Minimum Output Sum of Squared Error)**

- 長所: 極めて高速でリアルタイムアプリケーションに適している。
- 短所: 困難な条件下での堅牢性が限定的。
- 速度: 非常に高速。
- 精度: 中程度。

**CSRT (Channel and Spatial Reliability Tracker)**

- 長所: 高精度で困難なシナリオに対して堅牢。
- 短所: 計算コストが高い。
- 速度: 中程度。
- 精度: 高。

## コードを実行してみましょう

正しいフォルダにいることを確認してください。そうでない場合は

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```

その後、またはThonny IDEを使用してPythonスクリプトを実行することもできます。

 ```sh
python Tracking.py
 ```

上記のPythonスクリプトは顔を追跡するように設計されています。以下のコードスニペットは、追跡が失敗したシナリオを処理し、システムに新しい検出プロセスを開始するよう促し、その逆も同様に処理します。

 ```sh
python DetectandTrack.py
 ```

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
