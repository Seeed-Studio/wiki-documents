---
description: reComputer Super の入門ガイド
title: reComputer Super の入門ガイド
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

# reComputer Super の入門ガイド

reComputer Super 系列は reComputer Classic を大幅に強化し、AI パフォーマンスを最大 1.7 倍の 157 TOPS まで向上させます。Jetson Orin Nano（11410311、11410312）および Jetson Orin NX（11410313、11410314）を搭載したモデルを提供しています。
開発と製品化の両方に対応するよう設計されており、M.2 Key E/M、デュアル RJ45 イーサネット、Mini-PCIe、4x USB 3.2、HDMI 2.1、4x CSI、CAN など豊富なインターフェースを備えています。Jetpack 6.2 と Linux OS BSP がプリインストールされており、即座に市場投入が可能です。
また、NVIDIA、Hugging Face、ONNX、PyTorch、ROS2/1 など幅広い LLM および Physical AI フレームワークをエッジでシームレスにサポートし、これらのマルチモーダル機能をロボティクスアプリケーションと融合して Physical AI 開発を充実させます。

<div align="center">
  <img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 主な特徴  

### 🚀 ​**パフォーマンス向上**  

- ​**reComputer Classic より 1.7 倍の AI パフォーマンス向上**、​**157 TOPS** を実現  
- ​**Jetson Orin Nano**（モデル：11410311、11410312）および ​**Jetson Orin NX**（モデル：11410313、11410314）を搭載  

### 🔌 ​**豊富な接続性とインターフェース**  

- 拡張性のための ​**M.2 Key E/M** + ​**Mini-PCIe**  
- 高速ネットワーキング用の ​**デュアル RJ45 イーサネット** ポート  
- ​**4x USB 3.2**、​**HDMI 2.1**、​**4x CSI**（カメラシリアルインターフェース）  
- 産業/ロボティクスアプリケーション用の ​**CAN バス** サポート  

### 🛠️ ​**開発・製品化対応**  

- すぐに使える ​**Jetpack 6.2** と ​**Linux OS BSP** がプリインストール済み  
- 以下のフレームワークとのシームレスなエッジ AI 統合：  
  - ​**NVIDIA**、​**Hugging Face**、​**ONNX**、​**PyTorch**  
  - ロボティクスアプリケーション用の ​**ROS2/1**  
- ​**マルチモーダル AI** と ​**Physical AI** 開発をサポート  

### 🤖 ​**エッジ AI・ロボティクス最適化**  

- エッジでの ​**LLM（大規模言語モデル）** 機能と ​**Physical AI** を融合  
- ロボティクス、産業オートメーション、リアルタイム AI 推論に最適  
- 事前設定されたソフトウェアスタックで ​**市場投入** を加速  

:::tip

### ⚠️ 電源・アクセサリーガイドライン  

#### 1. ​**電源アダプター**  

- ​**Jetson Orin Nano**：12V 5A（5525 バレルジャック）  
- ​**Jetson Orin NX**：19V 4.74A（5525 バレルジャック）  
- 常に ​**公式アダプター** を使用し、電源要件を満たしてください。  

#### 2. ​**AC 電源コード**  

- ​**地域固有** のクローバーリーフコードを使用してください。  

#### 3. ​**アクセサリー**  

- 最適なパフォーマンスと互換性のため、​**公式推奨** アクセサリー（カメラ、ワイヤレスモジュールなど）のみを使用してください。

:::

## 仕様

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin Super システムオンモジュール</th>
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
      <td>AI パフォーマンス</td>
      <td>34 TOPS</td>
      <td>67 TOPS</td>
      <td>117 TOPS</td>
      <td>157 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512 コア NVIDIA Ampere アーキテクチャ GPU（16 Tensor コア搭載）</td>
      <td colSpan={3}>1024 コア NVIDIA Ampere アーキテクチャ GPU（32 Tensor コア搭載）</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6 コア Arm® Cortex®-A78AE v8.2 64 ビット CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6 コア Arm® Cortex®-A78AE v8.2 64 ビット CPU 1.5MB L2 + 4MB L3</td>
      <td>8 コア Arm® Cortex®-A78AE v8.2 64 ビット CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU 最大周波数</td>
      <td colSpan={2}>1.7 GHz（MAXN_SUPER）</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>メモリ</td>
      <td>4GB 64 ビット LPDDR5<br />34 GB/s</td>
      <td>8GB 128 ビット LPDDR5<br />68 GB/s</td>
      <td>8GB 128 ビット LPDDR5 102.4GB/s</td>
      <td>16GB 128 ビット LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>DL アクセラレーター</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>ビデオエンコーダー</td>
      <td colSpan={2}>1080p30（1-2 CPU コアでサポート）</td>
      <td colSpan={2}>1x 4K60（H.265）| 3x 4K30（H.265）<br />6x 1080p60（H.265）| 12x 1080p30（H.265）</td>
    </tr>
    <tr>
      <td>ビデオデコーダー</td>
      <td colSpan={2}>1x 4K60（H.265）<br />2x 4K30（H.265）<br />5x 1080p60（H.265）<br />11x 1080p30（H.265）</td>
      <td colSpan={2}>1x 8K30（H.265）<br />2x 4K60（H.265）<br />4x 4K30（H.265）<br />9x 1080p60（H.265）<br />18x 1080p30（H.265）</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td colSpan={5}>最大 4 台のカメラ<br />（仮想チャンネル経由で 8 台）<br />8 レーン MIPI CSI-2<br />D-PHY 2.1（最大 20Gbps）</td>
    </tr>
    <tr>
      <td>機械的仕様</td>
      <td colSpan={5}>69.6mm x 45mm<br />260 ピン SO-DIMM コネクター</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>キャリアボード</th>
    </tr>
    <tr>
      <td>ストレージ</td>
      <td colSpan={4}>1x M.2 KEY M PCIe（M.2 NVMe 2280 SSD 128G 付属）</td>
    </tr>
    <tr>
      <td rowSpan={3}>ネットワーキング</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>WiFi/Bluetooth モジュール用 1x M.2 Key E</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan={3}>LTE 4G モジュール用 1x mini-PCIe</td>
    </tr>
    <tr>
      <td>イーサネット</td>
      <td colSpan={3}>2x RJ45 ギガビットイーサネット</td>
    </tr>
    <tr>
      <td rowSpan={11}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A（5Gbps）<br />1x USB 2.0 Type-C（デバイスモード/デバッグ）</td>
    </tr>
    <tr>
      <td>カメラ</td>
      <td colSpan={3}>4x mipi CSI（2 レーン 15 ピン）</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1 x CAN（4 ピンヘッダー）</td>
    </tr>
    <tr>
      <td>ディスプレイ</td>
      <td colSpan={3}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>ファン</td>
      <td colSpan={3}>1x 4 ピンファンコネクター（5V PWM）<br />1x 4 ピンファンコネクター（12V PWM）</td>
    </tr>
    <tr>
      <td>拡張ポート</td>
      <td colSpan={3}>1x 40 ピン拡張ヘッダー<br />1x 12 ピン制御・UART ヘッダー</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2 ピン<br />1x RTC ソケット</td>
    </tr>
    <tr>
      <td>LED</td>
      <td colSpan={3}>2x LED（PWR および ACT）</td>
    </tr>
    <tr>
      <td>ピンホールボタン</td>
      <td colSpan={3}>1x PWR<br />1x RESET</td>
    </tr>
    <tr>
      <td>DIP スイッチ</td>
      <td colSpan={3}>1x REC</td>
    </tr>
    <tr>
      <td>アンテナ穴</td>
      <td colSpan={3}>4x アンテナ穴</td>
    </tr>
    <tr>
      <td>電源</td>
      <td colSpan={4}>12-19V 5525 バレル DC ジャック</td>
    </tr>
    <tr>
      <td>Jetpack バージョン</td>
      <td colSpan={4}>Jetpack 6.2</td>
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
      <td colSpan={4}>2 年</td>
    </tr>
    <tr>
      <td>認証</td>
      <td colSpan={4}>CE、FCC、RoHS、REACH、Telec、KC、振動試験（GB/T 2423）</td>
    </tr>
  </tbody>
</table>
</div>

## JetPack OS のフラッシュ

### サポート対象モジュール

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### 前提条件

- Ubuntu ホスト PC
- reComputer Super
- USB Type-C データ転送ケーブル

:::info

仮想マシンではなく、物理的な Ubuntu ホストデバイスの使用を推奨します。
ホストマシンの準備については、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack バージョン </td>
        <td class="dbon" colspan="3"> Ubuntu バージョン（ホストコンピューター） </td>
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

### Jetpack イメージの準備

ここでは、使用している Jetson モジュールに対応するシステムイメージを Ubuntu PC にダウンロードする必要があります：

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack バージョン</th>
      <th>Jetson モジュール</th>
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

Ubuntuホストマシンで、ターミナルを開いて`sha256sum <File>`コマンドを実行し、ダウンロードしたファイルのSHA256ハッシュ値を取得します。結果のハッシュがwikiで提供されているSHA256ハッシュと一致する場合、ダウンロードしたファームウェアが完全で破損していないことが確認されます。
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

- Orin NX 16GBの場合：**0955:7323 NVidia Corp**
- Orin NX 8GBの場合：**0955:7423 NVidia Corp**
- Orin Nano 8GBの場合：**0955:7523 NVidia Corp**
- Orin Nano 4GBの場合：**0955:7623 NVidia Corp**

以下の画像はOrin Nano 8GBの場合です

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Jetsonにフラッシュ

**ステップ1：** ダウンロードしたイメージファイルを展開します：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-super-orin-nx-16g-j401-6.2-36.4.3-2025-05-22.tar.gz
```

**ステップ2：** 以下のコマンドを実行してjetpackシステムをNVMe SSDにフラッシュします：

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

フラッシュプロセスが成功した場合、以下の出力が表示されます

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
フラッシュコマンドは2〜10分実行される場合があります。
:::

**ステップ3：** HDMIケーブルを使用してモニターを接続し、reComputer Superシステムの初期化設定を完了します：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
必要に応じて**システム設定**を完了してください。
:::


## リソース

[reComputer Robotics J401キャリアボードデータシート](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
[回路図](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
[3Dファイル](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
[機械図面-reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
[機械図面-reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)
[Seeed Nvidia Jetson成功事例](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
[Seeed Jetsonワンページャー](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## 技術サポート＆製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
