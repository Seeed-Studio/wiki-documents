---
description: reComputer Super の始め方
title: reComputer Super
keywords:
  - reComputer Super
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/recomputer_jetson_super_getting_started
last_update:
  date: 05/15/2025
  author: Yaohui
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputer Super の始め方
reComputer Super シリーズは reComputer Classic を強化し、AI性能を最大1.7倍向上させ、157 TOPS を実現します。このシリーズには Jetson Orin Nano (11410311, 11410312) と Jetson Orin NX (11410313, 11410314) を搭載したモデルが含まれています。
開発と生産の両方に対応する設計で、M.2 Key E/M、デュアル RJ45 Ethernet、Mini-PCIe、4x USB 3.2、HDMI 2.1、4x CSI、CAN などの豊富なインターフェースを備えています。Jetpack 6.2 と Linux OS BSP が事前インストールされており、すぐに市場投入が可能です。
さらに、NVIDIA、Hugging Face、ONNX、PyTorch、ROS2/1 などの幅広い LLM & Physical AI フレームワークをエッジでシームレスにサポートし、これらのマルチモーダル機能をロボティクスアプリケーションと統合して Physical AI 開発を充実させることができます。

<div align="center">
  <img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>


## 主な特徴  

### 🚀 ​**性能向上**  
- reComputer Classic と比較して ​**1.7倍のAI性能向上**、​**157 TOPS** を実現  
- ​**Jetson Orin Nano** (モデル: 11410311, 11410312) と ​**Jetson Orin NX** (モデル: 11410313, 11410314) を搭載  

### 🔌 ​**豊富な接続性とインターフェース**  
- ​**M.2 Key E/M** + ​**Mini-PCIe** による拡張性  
- ​**デュアル RJ45 Ethernet** ポートによる高速ネットワーク接続  
- ​**4x USB 3.2**, ​**HDMI 2.1**, ​**4x CSI** (カメラシリアルインターフェース)  
- ​**CAN バス** による産業用/ロボティクスアプリケーション対応  

### 🛠️ ​**開発と生産の準備が整った設計**  
- ​**Jetpack 6.2** と ​**Linux OS BSP** が事前インストールされており、すぐに使用可能  
- 以下のフレームワークとのシームレスなエッジAI統合:  
  - ​**NVIDIA**, ​**Hugging Face**, ​**ONNX**, ​**PyTorch**  
  - ​**ROS2/1** によるロボティクスアプリケーション対応  
- ​**マルチモーダルAI** と ​**Physical AI** 開発をサポート  

### 🤖 ​**エッジAIとロボティクスに最適化**  
- ​**LLM (大規模言語モデル)** 機能をエッジで ​**Physical AI** と統合  
- ロボティクス、産業用オートメーション、リアルタイムAI推論に最適  
- 事前構成されたソフトウェアスタックにより ​**市場投入を加速**  

:::tip

### ⚠️ 電源とアクセサリのガイドライン  

#### 1. ​**電源アダプタ**  
- ​**Jetson Orin Nano**: 12V 5A (5525 バレルジャック)  
- ​**Jetson Orin NX**: 19V 4.74A (5525 バレルジャック)  
- 必ず ​**公式アダプタ** を使用し、電源要件を満たしてください。  

#### 2. ​**AC電源コード**  
- ​**地域特有** のクローバーリーフコードを使用してください。  

#### 3. ​**アクセサリ**  
- ​**公式推奨** アクセサリ (例: カメラ、ワイヤレスモジュール) のみを使用し、最適な性能と互換性を確保してください。

:::

## 仕様

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin スーパーシステムオンモジュール</th>
    </tr>
    <tr>
      <th>仕様</th>
      <th>reComputer Super J3010</th>
      <th>reComputer Super J3011</th>
      <th>reComputer Super J4011</th>
      <th>reComputer Super J4012</th>
    </tr>
    <tr>
      <td>モジュール</td>
      <td>NVIDIA Jetson Orin™ Nano 4GB</td>
      <td>NVIDIA Jetson Orin™ Nano 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 16GB</td>
    </tr>
    <tr>
      <td>AI性能</td>
      <td>34 TOPS</td>
      <td>67 TOPS</td>
      <td>117 TOPS</td>
      <td>157 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512コア NVIDIA Ampere アーキテクチャ GPU（16 Tensor Cores）</td>
      <td colSpan={3}>1024コア NVIDIA Ampere アーキテクチャ GPU（32 Tensor Cores）</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6コア Arm® Cortex®-A78AE v8.2 64ビット CPU 1.5MB L2 + 4MB L3</td>
      <td>8コア Arm® Cortex®-A78AE v8.2 64ビット CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU最大周波数</td>
      <td colSpan={2}>1.7 GHz (MAXN_SUPER)</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>4GB 64ビット LPDDR5<br />34 GB/s</td>
      <td>8GB 128ビット LPDDR5<br />68 GB/s</td>
      <td>8GB 128ビット LPDDR5 102.4GB/s</td>
      <td>16GB 128ビット LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>DLアクセラレータ</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>ビデオエンコーダ</td>
      <td colSpan={2}>1080p30（1-2 CPUコアでサポート）</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>ビデオデコーダ</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td colSpan={5}>最大4台のカメラ<br />(仮想チャンネルで8台)<br />8レーン MIPI CSI-2<br />D-PHY 2.1 (最大20Gbps)</td>
    </tr>
    <tr>
      <td>機械的仕様</td>
      <td colSpan={5}>69.6mm x 45mm<br />260ピン SO-DIMMコネクタ</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>キャリアボード</th>
    </tr>
    <tr>
      <td>ストレージ</td>
      <td colSpan={4}>1x M.2 KEY M PCIe (M.2 NVMe 2242 SSD 128G付属)</td>
    </tr>
    <tr>
      <td rowSpan={3}>ネットワーキング</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E（WiFi/Bluetoothモジュール用）</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan={3}>1x mini-PCIe（LTE 4Gモジュール用）</td>
    </tr>
    <tr>
      <td>イーサネット</td>
      <td colSpan={3}>2x RJ45 ギガビットイーサネット</td>
    </tr>
    <tr>
      <td rowSpan={11}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (5Gbps); <br />1x USB 2.0 Type-C (デバイスモード/デバッグ);</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td colSpan={3}>4x mipi CSI(2レーン 15ピン)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1 x CAN(4ピンヘッダー)</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan={3}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan={3}>1x 4ピンファンコネクタ (5V PWM); <br />1x 4ピンファンコネクタ (12V PWM);</td>
    </tr>
    <tr>
      <td>拡張ポート</td>
      <td colSpan={3}>1x 40ピン拡張ヘッダー;<br />1x 12ピン制御およびUARTヘッダー;</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2ピン;<br />1x RTCソケット</td>
    </tr>
    <tr>
      <td>LED</td>
      <td colSpan={3}>2x LED(PWRおよびACT)</td>
    </tr>
    <tr>
      <td>ピンホールボタン</td>
      <td colSpan={3}>1x PWR;<br />1x RESET;</td>
    </tr>
    <tr>
      <td>DIPスイッチ</td>
      <td colSpan={3}>1x REC</td>
    </tr>
    <tr>
      <td>アンテナホール</td>
      <td colSpan={3}>4x アンテナホール</td>
    </tr>
    <tr>
      <td>電源</td>
      <td colSpan={4}>12-19V 5525 バレルDCジャック </td>
    </tr>
    <tr>
      <td>Jetpackバージョン</td>
      <td colSpan={4}>Jetpack 6.2 </td>
    </tr>
    <tr>
      <td>機械的寸法</td>
      <td colSpan={4}>130mm x 120mm x 66mm</td>
    </tr>
    <tr>
      <td>設置方法</td>
      <td colSpan={4}>デスク、壁取り付け</td>
    </tr>
    <tr>
      <td>動作温度</td>
      <td colSpan={4}>-10℃~60℃</td>
    </tr>
    <tr>
      <td>保証</td>
      <td colSpan={4}>2年</td>
    </tr>
    <tr>
      <td>認証</td>
      <td colSpan={4}>CE,FCC,RoHS,REACH,Telec, KC, 振動試験(GB/T 2423)</td>
    </tr>
  </tbody>
</table>
</div>


:::tip
その他の情報は近日公開予定
:::

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>