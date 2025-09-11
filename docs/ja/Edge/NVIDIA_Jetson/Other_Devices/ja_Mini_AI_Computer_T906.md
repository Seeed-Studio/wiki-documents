---
description: T906 Mini PCにJetpackをフラッシュする方法
title: T906 Mini PC
tags:
  - Mini PC Jetpack フラッシュ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Mini_AI_Computer_T906
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<!-- ---
name: Mini AI Computer T906
category: Mini AI Computer T906
bzurl: 
wikiurl: 
sku: 
--- -->

# Mini AI Computer T906の使い方

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/4/-/4-114110168_-mini-ai-computer-t906-45back.jpg" alt="pir" width={800} height="auto" /></p>

Mini AI Computer T906はJetson AGX Orin 32GBモジュールを搭載しており、最大200TOPSのAI性能を提供し、エッジで最も複雑なAIワークロードに対応します。Jetpack 5.0.2がプリインストールされており、NVIDIA JetPackおよびDeepStream SDK、TensorRT、RIVA、Issacソフトウェアライブラリ、Seeed Edge AIエコシステムの主要なAIプラットフォームツールに対応しているため、製造、配送、小売、スマートシティなどのAIアプリケーションを簡単に開発および展開できます。

Mini AI Computer T906では、10GbEおよび1GbEのイーサネットポートを使用して高速ネットワークアクセスが可能です。最大10ストリームのビデオ分析を有効にすることができます。

内蔵キャリアボードにはGPSモジュール、SSD拡張用のM.2 Key M、Wi-Fiモジュール用のM.2 Key B、5Gモジュール用のM.2 Key E、4Gモジュール用のMini PCIeのインターフェースが用意されています。

3つのRS232を備え、優れた熱放散と筐体によって保護されているため、T906は省エネ型の自律型マシンを構築するのに最適です。

最大10ギガビットイーサネットと超長MTBF安定動作により、このスーパーコンピュータは高度な分析を可能にし、数十台のIPカメラなどからの複数の同時ストリームを処理する能力を提供します。Wi-Fi無線機能を備え、Bluetooth、4G＆5Gモジュール構成、GPSナビゲーションをサポートします。

JEG車両レベルコネクタを装備しており、3x CAN FDおよび2x GPIOがあり、複数のレーダーセンサーを入力できます。また、GMSLカメラコネクタが搭載されており、カメラセンサーハブ、制御ユニット、またはビデオトランスコーディングユニットを構築することができます。このエッジAIボックスは、自律運転、自律移動ロボット（AMR）、または無人地上の遠隔操作を実現できます。

豊富な産業用インターフェースを備えています：1x標準RS232、1x UART用RS232、1xタイムSYNCトリガー用RS232。

超強力で軽量なアルミニウム合金で覆われており、高い保護等級のIP55として設計され、2つのオンボードファンによる強力な冷却機能を備えたパッシブ熱放散として設計されています。Jetpack 5.0.2がプリインストールされており、この優れたコンピューティングプラットフォームは無人清掃車、無人配送車、インテリジェント検査、AGV、その他の無人運転分野での展開準備が整っています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Mini-AI-Computer-T906-with-Jetson-AGX-Orin-32GB-p-5508.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 特徴

* NVIDIA® JETSON AGX ORIN™を搭載
* M.2 KEY M (PCIEX4 NVME 2280)をサポート
* M.2 KEY E (PCIEX1 2230)をサポート
* 8 GMSL2カメラをサポート*（GMSL2アダプターボードは別途購入が必要）
* 複数のインターフェースをサポート（例：CAN/USB/Ethernet/同期信号/シリアル/GPIOなど）
* デュアルバンドWi-Fi/Bluetooth/4G/5Gモジュールをサポート
* 日本JAE車両グレードIOプラグ（1x電源、3xCAN、2xGPIO）
* ファンとパッシブ冷却設計
* Ubuntu 20.04システムとJETPACK SDKが内蔵

## 仕様

<center>
  

<table><colgroup><col width="61px" /><col width="420px" /></colgroup>
    <tbody>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">モジュール</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-center pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">Jetson AGX Orin 32GB</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">AI性能</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-center pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">200 TOPS</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">CPU</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-center pap-line-1 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">8コア Arm® Cortex®-A78AE v8.2 64ビット CPU</p>
          <p className="paragraph text-align-type-center pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">2MB L2 + 4MB L3</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">GPU</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-center pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">1792コア NVIDIA Ampere アーキテクチャ GPU、56 Tensor コア</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">メモリ</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-center pap-line-1 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">32GB 256ビット LPDDR5</p>
          <p className="paragraph text-align-type-center pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">204.8GB/s</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">ストレージ</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">64GB eMMC 5.1</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">1 x m.2 key m nvme 2280 コネクタ</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ディスプレイ</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">1*HDMI Type A</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">ビデオエンコード</p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt"> </p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">1x 4K60 (H.265)</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">3x 4K30 (H.265)</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">6x 1080p60 (H.265)</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">12x 1080p30 (H.265)</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ビデオデコード</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">1x 8K30 (H.265)</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">2x 4K60 (H.265)</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">4x 4K30 (H.265)</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">9x 1080p60 (H.265)</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">18x 1080p30 (H.265)</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ギガビットイーサネット</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">1x 10GbE</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">1x 1GbE</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">WiFi/Bluetooth</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">1x M.2 KEY B (2230) WiFi/Bluetooth対応</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">1x M.2 KEY E 5G対応</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">1 mini PCIe 4G対応</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">(モジュールは含まれていません)</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">GPS</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-center pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">GPS対応 (モジュールは含まれていません)</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">USB</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">4x USB 3.0 Type A コネクタ;</p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">1x USB 2.0 TYPE-C ポート (デバイスモード用);</p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">1x USB 2.0 TYPE-C ポート (デバッグ用)</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={3} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">産業用インターフェース</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">3xCAN (CANチップ付き)</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={420} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">2xGPIO</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={420} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">2x RS-232 D-SUB9</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">1 xTIME SYNC(RS232)</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">カメラ</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">GMSL 2 カメラコネクタ (GMSL1互換、アダプタボードは別途購入が必要)</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">RTC</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">充電式バッテリー付きRTCコネクタ</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">ファン</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">2* ファン</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">LED</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">2x ステータスインジケータLED</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">ボタン</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">電源キー</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">リセットキー</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">リカバリーキー</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">OS</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">JetPack 5.0.2</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">電源</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">9-36v JAE(MX23A12SF1)</p>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">標準電力 45W 最大 75W</p>
        </td>
      </tr>
      <tr>
        <td colSpan={1} rowSpan={1} width={61} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt">機械的仕様</p>
        </td>
        <td colSpan={1} rowSpan={1} width={420} valign="middle" align>
          <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <div>
            <div className="document">
              <p className="paragraph text-align-type-left pap-line-1.3 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">196.7*196*74mm</p>
            </div>
          </div>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">2.5kg</p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt">-20℃-55℃</p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-3pt pap-spacing-after-3pt"> </p>
          <p className="paragraph text-align-type-left pap-line-1 pap-line-rule-auto pap-spacing-before-0pt pap-spacing-after-0pt"> </p>
        </td>
      </tr>
    </tbody>
  </table>
</center>


## ハードウェア概要


<center>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/image_3.png" alt="pir" width={600} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTE1NA_993556_gptApDMPltVJB-Sv_1667353575?w=817&h=407" alt="pir" width={600} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/image_4.png" alt="pir" width={600} height="auto" /></p>


<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTE1NA_35550_jEJeygKqw0R2wDo3_1667459768?w=823&h=620" alt="pir" width={600} height="auto" /></p>


</center>

## 寸法

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/dimensions.png" /></div>



## ハードウェア説明

### シリアルポート

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/serial.png" /></div>


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/serial_pin.png" /></div>


### 多機能インターフェース

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/multifunc.png" /></div>


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/multifunc_pin.png" /></div>


## OSのフラッシュ

!!! 注意
    Mini AI Computer T906は、Jetson AGX OrinモジュールのEMMCに**Jetpack 5.0.2がプリインストール**された状態で提供されます。これにより、すぐに独自のアプリケーション開発を開始できます。[次のセクション](#peripherals)に進むことができます。
    このデバイスにOSをフラッシュする場合は、このシステムのキャリアボードがカスタマイズ設計されているため、関連するドライバーをダウンロードしてインストールする必要があることに注意してください。

### 必要なハードウェア

開始する前に以下のハードウェアを準備してください：

- Ubuntu 18.04 OSまたはUbuntu 20.04 OSを搭載したLinuxホストコンピュータ
- Mini AI Computer T906
- 電源アダプタ（提供済み）
- キーボードとマウス
- 1本のUSB Type-Cケーブル（提供済み）

### Mini AI Computer T906をリカバリモードに設定する

- **ステップ1.** Mini AI Computer T906をシステム電源に接続します。

- **ステップ2.** Mini AI Computer T906をUSB Type-CケーブルでUbuntuホストに接続します（片方をMini AI Computer T906のOTGポートに、もう片方をUbuntuホストのUSB 3.0ソケットに接続）。

- **ステップ3.** Mini AI Computer T906に設定された電源を使用してシステムを起動します。

- **ステップ4.** リカバリボタンを押し、次にMini AI Computer T906の**リセットボタンを押し続けます**。

- **ステップ5.** リセットボタンを2秒後に離し、最後にリカバリボタンを離します。この時点でT906はリカバリモードに入ります（Ubuntuホストで`lsusb`コマンドを実行して`Nvidia Corp`デバイスがあるか確認できます）。

!!! 注意
    USBリカバリモードに入ると、システムは起動せず、シリアルポートからデバッグ情報が出力されません。

### Mini AI Computer T906にOSをダウンロードしてフラッシュする

- **ステップ1.** [Source Forge Repo](https://sourceforge.net/projects/mini-ai-computer-t906/files/)からシステムイメージファイルをダウンロードします。

- **ステップ2.** Ubuntuホストコンピュータの`Terminal`で以下のコマンドを実行します：
 
```shell
# アーカイブを抽出
sudo tar -zxvf T906_JP5.0.2.tar.gz

# L4Tフォルダに移動
cd Linux_for_Tegra

# OSのフラッシュを開始
sudo . /flash.sh jetson-agx-orin-devkit mmcblk0p1
```

`Terminal`出力で以下のようなメッセージが表示されるはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/flash_success.png" /></div>

## 周辺機器

### Wi-Fi 接続

!!! 注意
    Mini AI Computer T906 には WiFi モジュールが付属していません。

- **ステップ 1.** システムを起動した後、矢印で示されたネットワークアイコンをクリックすると、ネットワーク設定が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/settings.png" /></div>

- **ステップ 2.** Wi-Fi セクションで `Select Network` を選択してクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/wifi.png" /></div>

- **ステップ 3.** 表示されたウィンドウで Wi-Fi ネットワークを選択し、`connect` をクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/wifi_select.png" /></div>

- **ステップ 4.** `Authentication required` ウィンドウで Wi-Fi パスワードを入力してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/wifi_pass.png" /></div>

### 4G ダイヤルアップネットワーク

!!! 注意
    Mini AI Computer T906 には 4G モジュールが付属していません。以下の手順は Neoway N720 4G モジュールを使用して実行されています。

- **ステップ 1.** 4G モジュールのドライバをダウンロードしてパッケージを解凍し、`Terminal` を使用してドライバを `/etc/ppp/peers` にコピーしてください：

```shell
wget -o- https://files.seeedstudio.com/wiki/AI_Computer_T906/4g_dail.zip

unzip 4g_dail.zip

sudo cp -f 4g_dail_script/* /etc/ppp/peers
```

- **ステップ 2.** `/etc/ppp/peers` ディレクトリに移動し、n720-ppp-dial.sh スクリプトを見つけます。初回実行時には実行権限を付与する必要があります。以下のようにしてください：

```shell
cd /etc/ppp/peers

sudo chmod +x n720-ppp-dial.sh

sudo ./n720-ppp-dial.sh
```

ダイヤルアップを終了する必要がある場合は、ppp-kill.sh スクリプトを実行して終了できます。

```shell
cd /etc/ppp/peers

# ダイヤルアップを終了
sudo ./ppp-kill.sh
```

- **ステップ 3.** 4G 自動接続機能を実装する場合、rc.local スタートアップスクリプトを設定して、システム起動時にアプリケーションを増やす必要があります。

- **ステップ 3-1.** rc-local.service を追加します。

```shell
# システムサービスを作成
sudo ln -fs /lib/systemd/system/rc-local.service /etc/systemd/system/rc-local.service

# サービスファイルを編集
sudo vi /etc/systemd/system/rc-local.service
```

vi エディタで `i` を押して、以下を入力してください：

```shell
[Install]
WantedBy=multi-user.target
Alias=rc-local.service
```

その後、`:wq` を入力して保存して終了します。

- **ステップ 3-2.** rc.local スクリプトを作成します。

```shell
sudo touch /etc/rc.local

sudo chmod 755 /etc/rc.local

sudo vi /etc/rc.local
```

vi エディタで `i` を押して、`control+shift+V` またはペーストを使用して以下のスクリプトを貼り付けてください：

```shell
#!/bin/bash

LOG_DIR=/var/log/4glog
mkdir -p $LOG_DIR

# 4G 自動ダイヤル（ネットワーク登録時）。4G モジュール準備のため 30 秒待機
TIME=`date +%Y%m%d%H%M`
echo $TIME >> $LOG_DIR/ppp-dial.log
echo "Auto dial" >>  $LOG_DIR/ppp-dial.log
nohup /etc/ppp/peers/n720-ppp-dial.sh >> $LOG_DIR/ppp-dial.log &

sleep 10
# デフォルトゲートウェイを設定
def_gw=`/sbin/ifconfig ppp0|grep destination|grep -v 127.0.0.1|grep -v inet6 | awk '{print $6}' | tr -d "addr:"`
echo $def_gw >> $LOG_DIR/ppp-dial.log
if [ -n "$def_gw" ]; then
    sudo route add default gw $def_gw
else
    sleep 10
    def_gw=`/sbin/ifconfig ppp0|grep destination|grep -v 127.0.0.1|grep -v inet6 | awk '{print $6}' | tr -d "addr:"`
    if [ -n "$def_gw" ]; then
        sudo route add default gw $def_gw
    fi
fi
# ppp0 の IP を取得
fourg_ip=`/sbin/ifconfig ppp0|grep inet|grep -v 127.0.0.1|grep -v inet6 | awk '{print $2}' | tr -d "addr:"`
if [ -n "$fourg_ip" ]; then
    echo $fourg_ip >> $LOG_DIR/ppp-dial.log
else
    sleep 15
    if [ -n "$fourg_ip" ]; then
        echo $fourg_ip >> $LOG_DIR/ppp-dial.log
    else
        echo "4G no ip $fourg_ip" >> $LOG_DIR/ppp-dial.log
        echo $TIME"-Kill pppd and redial" >> $LOG_DIR/ppp-kill.log
        nohup /etc/ppp/peers/ppp-kill.sh >> $LOG_DIR/ppp-kill.log &
    fi
fi
# 4G 自動ダイヤル終了

# maxn モードを実行
/usr/bin/jetson_clocks

exit 0
```

これでウェブページを開いて 4G ネットワークが接続されているか確認できます。

### GPIO テスト

- **ステップ 1.** GPIO Python ライブラリをインストールします。

```shell
git clone https://github.com/vitiral/gpio.git

cd gpio/

sudo python3 setup.py install
```

- **ステップ 2.** テスト用の Python スクリプトを作成します。

```python
import time
import gpio

tst_gpio_pin = 326    # 326 は T906 の GPIO2 に対応
# tst_gpio_pin = 350   # 350 は T906 の GPIO1 に対応

gpio.setup(tst_gpio_pin, gpio.OUT)
gpio.set(tst_gpio_pin, 0)

print("Starting now! Press CTRL+C to exit")
try:
    while True:
        gpio.set(tst_gpio_pin, 1)
        print("TEST High.")
        time.sleep(5)
        gpio.set(tst_gpio_pin, 0)
        print("TEST Low")
        time.sleep(5)
finally:
    gpio.cleanup()
```

- **ステップ 3.** GPIO ピンが HI または LO であるかを確認するには、以下を実行します：

```shell
sudo cat /sys/kernel/debug/gpio| grep '326'
```

### GPS 使用

!!! 注意
    これは GPS モジュールを使用したテスト手順です。以下の手順とソフトウェアは HX-26-GN シリーズ GPS モジュール用です。GPS モジュールは標準製品には含まれていないため、別途用意する必要があります。

- **ステップ 1.** GPS モジュールを取り付け、GPS アンテナを GPS ポートに接続してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/GPS_antenna.png" /></div>

- **ステップ 2.** システムを起動後、ホームディレクトリにある twork フォルダを見つけ、ダブルクリックして開き、右クリックして `Open in Terminal` を選択してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/GPS_folder.png" /></div>

- **ステップ 3.** `Terminal` ウィンドウで以下のコマンドを入力してください：

```shell
sudo ./bd.gps_serialport
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/GPS_script.png" /></div>

正しい結果は以下のようになります：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/GPS_info.png" /></div>

以下の出力が表示された場合、位置情報の取得が成功していないことを意味します。これは、信号が弱くて位置情報をロックできない可能性があります。ユニットを開けた場所に移動させ、より多くの信号を受信して位置情報をロックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/AI_Computer_T906/image/GPS_error.png" /></div>



## NVMe SSDをシステムのRootfsドライブとして使用する

!!!注意
    これは、NVMe SSDをシステムディスクとして設定し、rootfsのストレージサイズを拡張する手順です。EMMCまたはSDカードをシステムブートパーティションとして使用します。NVMe SSDは標準製品には含まれていないため、別途用意する必要があります。


- **ステップ 1.** SSDを取り付ける
  
  [ハードウェア説明書](https://wiki.seeedstudio.com/ja/reComputer_Jetson_Series_Hardware_Layout/)の手順に従って、reComputerにSSDを取り付けてください。

- **ステップ 2.** SSDを準備する

  ショートカットキー `Ctrl+F` を使用するか、左上隅のUbuntuアイコンをクリックして **Disks** を検索し、Ubuntu 18.04に付属しているDisksツールを開きます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/1.png" /></div>


  左側でSSDを選択し、右上のメニューバーの下にある **Format Disk** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd1.jpg" /></div>


  SSDをGPT形式にフォーマットします。確認を求めるポップアップウィンドウが表示され、ユーザーパスワードを入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd3.png" /></div>


  次に、中央の **+** をクリックしてディスク文字を追加します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd6.png" /></div>


  「次へ」をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd7.png" /></div>


  SSDに名前を付け、タイプで **Ext4** を選択し、「作成」をクリックします。この時点で、拡張要件に従ったSSDの準備が完了しました。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/ssd8.png" /></div>


- **ステップ 3.** SSDにルートディレクトリを構築する

  gitコマンドを使用して、reComputerで使用するスクリプトファイルをダウンロードします。

```shell

git clone https://github.com/limengdu/rootOnNVMe.git

cd rootOnNVMe/

```

  次に、以下のコマンドを実行して、eMMCのルートディレクトリからSSDにファイルを構築します。このステップの待ち時間は、使用しているルートディレクトリのサイズによって異なります。

```shell

./copy-rootfs-ssd.sh

```

- **ステップ 4.** 環境を設定し、拡張を完了する

  以下のコマンドを実行して、rootfsの設定を完了します。

```shell

./setup-service.sh

```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/9.png" /></div>


  reComputerを再起動すると、メインインターフェースでeMMCが外部ストレージデバイスとして表示され、システムのフットプリントが減少していることが確認できます。これにより、拡張が成功したことがわかります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/11.png" /></div>


!!!注意
    スクリプトファイル内のデフォルトのSSDパスは `/dev/nvme0n1p1` です。これは、reComputerによってデフォルトで割り当てられるパスでもあります。コマンド `sudo fdisk -l` を使用してSSDパスが一致しない場合、スクリプトファイル **copy-rootfs-ssd.sh**、**data/setssdroot.service**、および **data/setssdroot.sh** 内のすべての `/dev/nvme0n1p1` を、SSDが存在するパスに変更してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/kuorong/21.png" /></div>



上記の拡張では、eMMCから元のルートディレクトリの内容が削除されることはありません。SSDから起動したくない場合は、SSDを取り外すことで、システムは引き続きeMMCから起動します。

## リソース

- **[PDF]** [Mini AI Computer T906 データシート](https://files.seeedstudio.com/wiki/AI_Computer_T906/Mini_AI_Computer_T906_datasheet.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>