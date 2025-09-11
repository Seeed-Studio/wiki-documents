---
description: JetPack を reComputer J4012 (J401 キャリアボード) にフラッシュする
title: reComputer J30/40 の始め方
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reComputer_J30_40_with_Jetson_getting_start
last_update:
  date: 05/15/2025
  author: Lakshantha
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer J30/40 の始め方

<div align="center">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/-KAyUHzRxHc" title="Unboxing &amp; Plug in reComputer J4012 - Powered by NVIDIA Jetson Orin NX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## はじめに
reComputer J30/40 は、Jetson Orin を搭載した強力でコンパクトなインテリジェントエッジボックスで、最大 100TOPS の最新 AI パフォーマンスをエッジに提供します。NVIDIA Ampere™ GPU アーキテクチャと 64 ビットの動作能力を組み合わせています。

このフルシステムには、NVIDIA Jetson Orin プロダクションモジュール、ヒートシンク、電源アダプタが含まれています。reComputer J30/40 は Jetpack 5.1.1 がプリインストールされており、開発を簡素化し、スマートシティ、セキュリティ、産業オートメーション、スマートファクトリーなどの業界で、ビデオ分析、物体検出、自然言語処理、医療画像処理、ロボティクスに取り組むエッジ AI ソリューションプロバイダーに適しています。

電源アダプタなしのバージョンをお探しの場合は、[reComputer-Jetson](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html) をご確認ください。

## 特徴

- **生産向けの優れた AI パフォーマンス:** 低消費電力と低遅延で最大 100 TOPS の AI パフォーマンスを実現するオンデバイス処理
- **手のひらサイズのエッジ AI デバイス:** コンパクトなサイズ（130mm x 120mm x 58.5mm）、NVIDIA Jetson Orin プロダクションモジュール、ヒートシンク、エンクロージャ、電源アダプタを含む。デスクトップ、壁掛け、どこにでもフィット
- **豊富な I/O による拡張性:** 4x USB3.2、HDMI 2.1、2xCSI、1xRJ45 for GbE、M.2 Key E、M.2 Key M、CAN、GPIO
- **市場投入までの時間を短縮:** NVIDIA JetPack™ 5.1 がプリインストールされた 128GB NVMe SSD、Linux OS BSP、128GB SSD、WiFi BT コンボモジュール、アンテナ x2 をサポート。Jetson ソフトウェアおよび主要な AI フレームワークとソフトウェアプラットフォームをサポート
- **包括的な認証:** FCC、CE、RoHS、UKCA

## 仕様

<table>
  <thead>
    <tr>
      <th>仕様</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html?queryID=e8d0ae9b2e338e8a860f07dacef58f6e&objectID=5631&indexName=bazaar_retailer_products">reComputer J3010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">reComputer J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html?queryID=5577f61da645361a7aad9179bc04efc2&objectID=5629&indexName=bazaar_retailer_products">reComputer J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html?queryID=639ef60cde4a38ccc9ff2f82070d4854&objectID=5628&indexName=bazaar_retailer_products">reComputer J4012</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>モジュール</td>
      <td>Jetson Orin Nano 4GB</td>
      <td>Jetson Orin Nano 8GB</td>
      <td>Jetson Orin NX 8GB</td>
      <td>Jetson Orin NX 16GB</td>
    </tr>
    <tr>
      <td>AI パフォーマンス</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512コア NVIDIA Ampere アーキテクチャ GPU（16 Tensor コア）</td>
      <td>1024コア NVIDIA Ampere アーキテクチャ GPU（32 Tensor コア）</td>
      <td colspan='2' align='center'>1024コア NVIDIA Ampere アーキテクチャ GPU（32 Tensor コア）</td>
    </tr>
    <tr>
      <td>GPU 最大周波数</td>
      <td colSpan='2' align='center'>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='2'>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU 1.5MB L2 + 4MB L3</td>
      <td>8コア Arm® Cortex®-A78AE v8.2 64ビット CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU 最大周波数</td>
      <td colSpan='2' align='center'>1.5 GHz</td>
      <td colSpan='2' align='center'>2 GHz</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>4GB 64ビット LPDDR5<br />34 GB/s</td>
      <td>8GB 128ビット LPDDR5<br />68 GB/s</td>
      <td>8GB 128ビット LPDDR5 102.4GB/s</td>
      <td>16GB 128ビット LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>DL アクセラレータ</td>
      <td colSpan='2' align='center'>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>DLA 最大周波数</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>614 MHz</td>
    </tr>
    <tr>
      <td>ビジョンアクセラレータ</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>1x PVA v2</td>
    </tr>
    <tr>
      <td>ストレージ</td>
      <td colSpan='4' align='center'>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>ビデオエンコーダ</td>
      <td colSpan='2' align='center'>1080p30（1-2 CPU コアでサポート）</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>ビデオデコーダ</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan='2' align='center'>1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)<br />9x 1080p60 (H.265) | 18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan='4' align='center'>1* HDMI 2.1</td>
    </tr>
    <tr>
      <td>CSI カメラ</td>
      <td colSpan='4' align='center'>2* CSI （2レーン 15ピン）</td>
    </tr>
    <tr>
      <td>ネットワーキング</td>
      <td colSpan='4' align='center'>1* ギガビットイーサネット (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='4' align='center'>4* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (デバイスモード)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan='4' align='center'>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan='4' align='center'>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan='4' align='center'>1* 4ピンファンコネクタ (5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>多機能ポート</td>
      <td colSpan='4' align='center'>1* 40ピン拡張ヘッダー、1* 12ピン制御および UART ヘッダー</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='4' align='center'>RTC 2ピン、RTC ソケット（CR1220 対応、ただし含まれません）</td>
    </tr>
    <tr>
      <td>電源</td>
      <td colSpan='4' align='center'>9-19V</td>
    </tr>
    <tr>
      <td>電源供給</td>
      <td colSpan='4' align='center'>電源アダプタは含まれません</td>
    </tr>
    <tr>
      <td>温度</td>
      <td colSpan='4' align='center'>-10℃~60℃</td>
    </tr>
    <tr>
      <td>機械的仕様</td>
      <td colSpan='4' align='center'>130mm x 120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## JetPack のフラッシュ

:::info
reComputer J30/40 は J401 キャリアボードによって駆動されています。  
JetPack のフラッシュに関する詳細は、この [Wiki ページ](/ja/reComputer_J4012_Flash_Jetpack) を参照してください。
:::

## インターフェースの使用方法

:::info
reComputer J30/40 は J401 キャリアボードによって駆動されています。  
インターフェースの使用方法に関する詳細は、この [Wiki ページ](/ja/J401_carrierboard_Hardware_Interfaces_Usage) を参照してください。
:::

## リソース
- [reComputer J30x データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x データシート](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 回路図](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D ファイル](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson シリーズカタログ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI 成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson シリーズ比較](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson デバイス ワンページ](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson サンプル](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-初心者向けガイド](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！  
お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>