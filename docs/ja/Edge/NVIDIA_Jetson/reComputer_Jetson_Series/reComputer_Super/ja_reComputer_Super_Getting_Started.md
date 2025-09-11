---
description: reComputer Super の開始方法
title: reComputer Super の開始方法
keywords:
  - reComputer Super
  - reComputer Super Getting Started
  - Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /ja/recomputer_jetson_super_getting_started
last_update:
  date: 06/19/2025
  author: Yaohui
---

# reComputer Super の開始方法

reComputer Super シリーズは reComputer Classic を大幅に強化し、AI パフォーマンスにおいて最大 1.7 倍の向上で 157 TOPS を実現します。Jetson Orin Nano（11410311、11410312）および Jetson Orin NX（11410313、11410314）を搭載したモデルを特徴としています。
開発と製品化の両方を想定して設計されており、M.2 Key E/M、デュアル RJ45 イーサネット、Mini-PCIe、4xUSB 3.2、HDMI 2.1、4xCSI、CAN など、豊富なインターフェースを備えています。Jetpack 6.2 と Linux OS BSP がプリインストールされており、即座に市場投入が可能です。
また、NVIDIA、Hugging Face、ONNX、PyTorch、ROS2/1 など、幅広い LLM & Physical AI フレームワークをエッジでシームレスにサポートし、これらのマルチモーダル機能をロボティクスアプリケーションと融合させて Physical AI 開発を充実させます。

<div align="center">
  <img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## 主な特徴  

### 🚀 ​**パフォーマンス向上**  

- ​reComputer Classic と比較して **1.7 倍の AI パフォーマンス向上**、**157 TOPS** を実現  
- ​**Jetson Orin Nano**（モデル：11410311、11410312）および **Jetson Orin NX**（モデル：11410313、11410314）を搭載  

### 🔌 ​**豊富な接続性とインターフェース**  

- ​拡張性のための **M.2 Key E/M** + **Mini-PCIe**  
- ​高速ネットワーキング用の **デュアル RJ45 イーサネット** ポート  
- ​**4x USB 3.2**、**HDMI 2.1**、**4x CSI**（Camera Serial Interface）  
- ​産業/ロボティクスアプリケーション用の **CAN バス** サポート  

### 🛠️ ​**開発・製品化対応**  

- ​すぐに使える **Jetpack 6.2** と **Linux OS BSP** がプリインストール  
- ​以下のフレームワークとのシームレスなエッジ AI 統合：  
  - ​**NVIDIA**、**Hugging Face**、**ONNX**、**PyTorch**  
  - ​ロボティクスアプリケーション用の **ROS2/1**  
- ​**マルチモーダル AI** と **Physical AI** 開発をサポート  

### 🤖 ​**エッジ AI & ロボティクス最適化**  

- ​エッジでの **LLM（Large Language Model）** 機能と **Physical AI** を融合  
- ​ロボティクス、産業オートメーション、リアルタイム AI 推論に最適  
- ​事前設定されたソフトウェアスタックで **市場投入** を加速  

:::tip

### ⚠️ 電源・アクセサリーガイドライン  

#### 1. ​**電源アダプター**  

- ​**Jetson Orin Nano**: 12V 5A（5525 バレルジャック）  
- ​**Jetson Orin NX**: 19V 4.74A（5525 バレルジャック）  
- ​常に **公式アダプター** を使用し、電源要件を満たしてください。  

#### 2. ​**AC 電源コード**  

- ​**地域固有** のクローバーリーフコードを使用してください。  

#### 3. ​**アクセサリー**  

- ​最適なパフォーマンスと互換性のために **公式推奨** アクセサリー（カメラ、ワイヤレスモジュールなど）のみを使用してください。

:::

## 仕様

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin Super System on Module</th>
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
      <td>512コア NVIDIA Ampereアーキテクチャ GPU（16 Tensorコア搭載）</td>
      <td colSpan={3}>1024コア NVIDIA Ampereアーキテクチャ GPU（32 Tensorコア搭載）</td>
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
      <td colSpan={5}>最大4台のカメラ<br />（仮想チャネル経由で8台）<br />8レーン MIPI CSI-2<br />D-PHY 2.1（最大20Gbps）</td>
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
      <td colSpan={4}>1x M.2 KEY M PCIe（M.2 NVMe 2280 SSD 128G付属）</td>
    </tr>
    <tr>
      <td rowSpan={3}>ネットワーク</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E（WiFi/Bluetoothモジュール用）</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan={3}>1x mini-PCIe（LTE 4Gモジュール用）</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td colSpan={3}>2x RJ45 ギガビットEthernet</td>
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
      <td colSpan={3}>1 x CAN(4ピンヘッダ)</td>
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
      <td colSpan={3}>1x 40ピン拡張ヘッダ;<br />1x 12ピン制御・UARTヘッダ;</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2ピン;<br />1x RTCソケット</td>
    </tr>
    <tr>
      <td>LED</td>
      <td colSpan={3}>2x LED(PWRとACT)</td>
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
      <td>アンテナ穴</td>
      <td colSpan={3}>4x アンテナ穴</td>
    </tr>
    <tr>
      <td>電源</td>
      <td colSpan={4}>12-19V 5525 バレル DCジャック </td>
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
      <td colSpan={4}>デスク、壁面取り付け</td>
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

## Flash JetPack OS

### サポートされているモジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-Nano-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-Nano-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### 前提条件

- Ubuntu ホストPC
- reComputer Super
- USB Type-C データ転送ケーブル

:::info

仮想マシンではなく、物理的なubuntuホストデバイスを使用することをお勧めします。
ホストマシンを準備するには、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack バージョン </td>
        <td class="dbon" colspan="3"> Ubuntu バージョン（ホストコンピュータ） </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Jetpackイメージの準備

ここでは、使用しているJetsonモジュールに対応するシステムイメージをUbuntu PCにダウンロードする必要があります：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpackバージョン</th>
      <th>Jetsonモジュール</th>
      <th> GMSL </th>
      <th>ダウンロードリンク1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQiC_is_O2tEkvFzu-3SrWYBFdcQr0zZRUf81lkjnXpnkQ?e=f3ISaO">ダウンロード</a></td>
      <td>8FF204A65C006717ED45241186C14B4 <br />FAA8ACE5BEBCDCE755F94C3CBF1311C38</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbEYa6n_P6pCh1TQbVBSpcQBZlFVm_-il3sqXEBDGpdPJA?e=S1dgfv">ダウンロード</a></td>
      <td>7EC06C0D17E33AE43D3C69EED791F64<br />CB9CFDC497E01D525E18EBAC1547A0236</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EevZ9hO7BfhDuJvDPYIdHGkBGhrKcWgCyAuTQu1gpHsz4g?e=xbXfbL">ダウンロード</a></td>
      <td>06B175484220DA7A63CC7CDAAE339F7E<br />FF8997180AF1C4B836D1098CBD8A169D</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeIg8k2osZFAuPzOlcO-FtIBdhbgULGQrsQOg4uUrXoK4w?e=uo29A8">ダウンロード</a></td>
      <td> CF37D028D6466DCC13201367E6358A6<br />9B7B5305CAE2A2B785E3ECFD3D8C66304</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Jetpack6イメージファイルのサイズは約**14.1GB**で、ダウンロードには約60分かかります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの整合性を確認するには、SHA256ハッシュ値を比較できます。

Ubuntuホストマシンで、ターミナルを開き、`sha256sum <File>`コマンドを実行して、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
:::

### 強制リカバリモードに入る

:::info
インストール手順に進む前に、ボードが強制リカバリモードになっていることを確認する必要があります。
:::

<details>

<summary> ステップバイステップ </summary>

**ステップ1.** スイッチをRESETモードに切り替えます。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/flash.jpg"/>  
</div>

**ステップ2.** 電源ケーブルを接続してreComputer Superの電源を入れます。

**ステップ3.** USB Type-Cデータ転送ケーブルでSuperをUbuntuホストPCに接続します。

**ステップ4.** LinuxホストPCでターミナルウィンドウを開き、`lsusb`コマンドを入力します。使用するJetson SoMに応じて、返される内容に以下の出力のいずれかがある場合、ボードは強制リカバリモードになっています。

- Orin NX 16GBの場合: **0955:7323 NVidia Corp**
- Orin NX 8GBの場合: **0955:7423 NVidia Corp**
- Orin Nano 8GBの場合: **0955:7523 NVidia Corp**
- Orin Nano 4GBの場合: **0955:7623 NVidia Corp**

以下の画像はOrin Nano 8GBの例です

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Jetsonにフラッシュする

**ステップ1:** ダウンロードしたイメージファイルを展開します：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-super-orin-nx-16g-j401-6.2-36.4.3-2025-05-22.tar.gz
```

**ステップ 2:** 以下のコマンドを実行して、jetpack システムを NVMe SSD にフラッシュします：

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドの実行には2〜10分かかる場合があります。
:::

**ステップ3:** HDMIケーブルを使用してモニターを接続し、reComputer Superシステムの初期化設定を完了します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
必要に応じて**システム設定**を完了してください。
:::

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
