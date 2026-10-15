---
description: このWikiでは、Seeed AGX Orin Dev Kit（reComputer Classic J501）の製品特長、仕様およびハードウェア概要、JetPack 7.2 システムイメージのフラッシュ方法、M.2 Key M/E、10GbE Ethernet、USB、40ピン拡張ヘッダ（GPIO/I2C/SPI/UART/CAN/PWM）、カメラ、オーディオ、PCIe、RTC などのインターフェースの使用方法を紹介し、Jetson AGX Orin をベースにしたエッジAIおよびエンボディドAI開発をすばやく開始できるよう支援します。
title: reComputer Classic J501 入門ガイド
tags:
  - reComputer Classic J501
  - Seeed AGX Orin Dev Kit
  - Jetpack のフラッシュ
  - インターフェースの使用方法
  - Jetson AGX Orin
  - エンボディド AI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/100006184-gallery_img_1.jpg
slug: /ai_robotics_seeed_agx_orin_dev_kit_getting_started
sku: 100003716,100006184
last_update:
  date: 08/10/2026
  author: Zuhao
createdAt: '2026-05-26'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/ja/ai_robotics_seeed_agx_orin_dev_kit_getting_started/
---

# JetPack のフラッシュとインターフェースの使用方法 | reComputer Classic J501

reComputer Classic J501 は、NVIDIA® Jetson AGX Orin™ モジュール（32GB/64GB）を搭載した高性能でコンパクトなエッジAIコンピュータであり、NVIDIA Jetson AGX Orin Developer Kit とピン互換の代替として最大 275 TOPS の AI 性能を提供します。1× 10GbE Ethernet、4× USB 3.2 Type-A ポート、M.2 Key M（NVMe Gen4）および Key E（WiFi/BT）スロット、PCIe 拡張スロット、40ピン拡張ヘッダ、8レーン MIPI CSI カメラ拡張を備え、大規模モデルのデプロイ、Vision-Language Navigation（VLN）、Vision-Language Action（VLA）などのワークロード向けにエッジ側推論能力を提供します。

本製品は JetPack 7.2（JetPack 6.2 と互換）をサポートし、公式 NVIDIA BSP のフラッシュおよび `sudo apt upgrade` によるシステムアップデートに対応、CUDA、TensorRT、DeepStream、Isaac ROS、PyTorch、ROS 2/1 などのツールチェーンやフレームワークと互換性があり、自律ロボット、インテリジェントビジョン、マルチセンサーフュージョンなどのエッジAIシステム開発を加速します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/100006184-gallery_img_1.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> J5011 (32GB) を今すぐ入手 🖱</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> J5012 (64GB) を今すぐ入手 🖱</font></span></strong>
    </a>
</div>

## 主な特長

- **高性能 AI**: Jetson AGX Orin 32/64GB モジュール、Ampere アーキテクチャ GPU + NVDLA v2.0 を搭載し、最大 275 TOPS（INT8）を実現。大規模言語モデルのデプロイやエンボディドAIアプリケーションをターゲットとしています
- **NVIDIA Jetson エコシステムとの完全互換**: 公式 NVIDIA BSP のフラッシュ、`sudo apt upgrade` によるシステムアップデート、SDK Manager による環境構築をサポートし、CUDA / TensorRT / DeepStream がすぐに利用可能
- **豊富な接続性**: M.2 Key M（NVMe Gen4）+ M.2 Key E（WiFi/BT）；1× 10GbE；4× USB 3.2 Type-A；2× USB Type-C（電源 / リカバリ）
- **充実した拡張性**: PCIe スロット（電気的 x8）；40ピンヘッダ（I2C、I2S、SPI、UART、GPIO、CAN、PWM）；8× CSI カメラ BTB コネクタ
- **ロボティクス対応**: ROS 2/1 および Isaac ROS をサポート；ネイティブ CAN0/CAN1；AMR や自動化シナリオ向けに最適化
- **ユーザーフレンドリーな設計**: 19V アダプタ + DC 9～20V の広範囲入力；動作温度 0～40°C；自動電源オン（Automation Header のピン 5-6 を短絡）

## 仕様

### Jetson AGX Orin システムオンモジュール

| Item          | reComputer Classic J501 (32G / J5011)                 | reComputer Classic J501 (64G / J5012)                  |
| ------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| Module        | NVIDIA Jetson AGX Orin 32GB                           | NVIDIA Jetson AGX Orin 64GB                            |
| AI Performance | 200 TOPS (INT8)                                      | 275 TOPS (INT8)                                        |
| GPU           | 1792-core NVIDIA Ampere, 56 Tensor Cores              | 2048-core NVIDIA Ampere, 64 Tensor Cores               |
| CPU           | 8-core Arm Cortex-A78AE, 2MB L2 + 4MB L3              | 12-core Arm Cortex-A78AE, 3MB L2 + 6MB L3              |
| Memory        | 32GB 256-bit LPDDR5 @ 204.8 GB/s                      | 64GB 256-bit LPDDR5 @ 204.8 GB/s                       |
| Video Encode (H.265) | 1×4K60 \| 3×4K30 \| 6×1080p60 \| 12×1080p30    | 2×4K60 \| 4×4K30 \| 8×1080p60 \| 16×1080p30            |
| Video Decode (H.265) | 1×8K30 \| 2×4K60 \| 4×4K30 \| 9×1080p60 \| 18×1080p30 | 1×8K30 \| 3×4K60 \| 7×4K30 \| 11×1080p60 \| 22×1080p30 |
| DL / Vision Accelerator | 2× NVDLA v2.0 / PVA v2.0                      | 2× NVDLA v2.0 / PVA v2.0                               |
| Onboard Storage | 64GB eMMC 5.1                                       | 64GB eMMC 5.1                                          |
| Power         | 15W – 40W                                             | 15W – 60W                                              |

### キャリアボード仕様

| Item       | Specification                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------- |
| Mechanical | 110mm × 110mm × 73mm                                                                                |
| Display    | 1× DP（DP→HDMI ケーブル付属）                                                                      |
| Networking | 1× RJ45 10GbE（J17）                                                                                |
| M.2        | 1× M.2 Key M（J4、NVMe 2280、Gen4、128G SSD 付属）；1× M.2 Key E（J5、2230 WiFi/BT、モジュール付属） |
| USB        | 4× USB 3.2 Type-A（J24/J33）；1× USB 3.0 Type-C（電源）；1× USB 3.0 Type-C（リカバリ）；1× Micro USB（J26、デバッグ） |
| PCIe       | 1× PCIe スロット（J6、UPHY block1 ×8、コントローラ #5）                                            |
| Expansion IO | 40ピンヘッダ（J30：I2C、I2S、SPI、UART、GPIO、CAN、PWM）                                          |
| Camera     | BTB カメラコネクタ（J509、CSI0–CSI7、8×2レーン）                                                    |
| Fan        | 1× 4ピン 5V PWM ファンコネクタ（J9、PWM + TACH）                                                    |
| Button / LED | 1× Recovery + 1× RST + 1× Power；1× PWR/ACT 緑色 LED                                              |
| RTC        | 1× RTC 2ピンヘッダ（J13）                                                                           |
| Others     | オーディオパネルヘッダ（J511）；Automation Header（J42）；JTAG ヘッダ（J502）                       |
| Power Input | DC ジャック、DC 9～20V（19V アダプタ付属）                                                         |
| Software   | JetPack 7.2（JetPack 6.2 と互換）                                                                   |
| Operating Temperature | 0～40°C                                                                                  |

## ハードウェア概要

**側面図 1** — ボタン / 電源 / ネットワーク / ディスプレイ：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_side_view_1.png"/>
</div>

1. 電源ボタン  2. Recovery ボタン  3. リセットボタン  4. LED - 電源/ACT  5. USB Type-C - 電源  6. DC 5525 9～20V（DC 電源ジャック）  7. 10 GbE（10 ギガビット Ethernet ポート）  8. USB Type-A × 2  9. Display Port

**側面図 2** — 拡張インターフェース：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_side_view_2.png"/>
</div>

1. PCIe x16 拡張  2. フラッシュ用 USB Type-C  3. 40ピンコネクタ（40ピン拡張ヘッダ）  4. USB 3.2 Type-A × 2

**底面図** — 内部キャリアボードインターフェース：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_bottom_view.png"/>
</div>

1. Automation Header（J42）  2. RTC バッテリコネクタ（J13）  3. JTAG ヘッダ（J502）  4. M.2 Key E（WiFi/BT モジュール付属）  5. オーディオヘッダ（J511）  6. カメラコネクタ（J509）  7. M.2 Key M（128G SSD 付属）

## 📦 JetPack オペレーティングシステムのフラッシュ

### 対応モジュール

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### 事前準備

- Ubuntu ホスト PC
- reComputer Classic J501
- USB Type-C データ転送ケーブル
- 19V 電源アダプタ

:::info

仮想マシンではなく、物理的な Ubuntu ホストデバイスを使用することを推奨します。
ホストマシンを準備する際は、以下の表を参照してください。

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td rowspan="2"> JetPack Version </td>
        <td class="dbon" colspan="3"> Ubuntu Version (Host Computer) </td>
    </tr>
    <tr>
        <td> 20.04 </td>
        <td> 22.04 </td>
        <td> 24.04 </td>
    </tr>
    <tr>
        <td> JetPack 7.2 </td>
        <td> ✅ </td>
        <td> ✅ </td>
        <td> ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> JetPack 7.2 の場合、Ubuntu 24.04 はフラッシュおよびターゲット側コンポーネントのインストールのみサポートされます。ホスト開発コンポーネントが必要な場合は、Ubuntu 20.04 または 22.04 を使用してください。</p>

:::

### JetPack イメージの準備

ここでは、使用している Jetson モジュールに対応するシステムイメージを Ubuntu PC にダウンロードする必要があります。

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>Jetson Module</th>
      <th>Download Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>7.2</td>
      <td>AGX Orin 64GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBO6K-vbZtNQrhyL3ZfEJH2AUCoIRVNqDCcmA9QsbABiJA">Download</a></td>
      <td>07bb83b8b0fced67a71126ada26076a0<br />76bdefee394d0647429ef9c15bab0f6b</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCQ4t5XnL9sS7StIWTe2d08AQy2N6Su32eg5pZ3IrvfFBs">Download</a></td>
      <td>55e2acfbec97313dbacb04c80c668442<br />2e169c1e5299228d424f8807bd7be4bd</td>
    </tr>
  </tbody>
</table>
</div>

:::note
Classic J501 は**GMSL インターフェースを搭載していません**。本記事の書き込み例は **64GB** バージョンをベースにしています。イメージファイル名は `mfi_seeed-agx-orin-64g-<JetPack version>-<L4T version>-<date>.tar.gz` の形式で、解凍後は同名のディレクトリが生成されます（以下の例では `mfi_seeed-agx-orin-64g-7.2.0-39.2.0-2026-08-04` を使用しています。実際にダウンロードしたファイル名を参照してください）。
:::

:::danger
JetPack イメージファイルはサイズが大きく、ダウンロードに約 60 分かかる場合があります。ダウンロードが完了するまでお待ちください。
:::

:::info
ダウンロードしたファームウェアの完全性を検証するには、SHA256 ハッシュ値を比較します。

Ubuntu ホストマシンでターミナルを開き、コマンド `sha256sum <File>` を実行して、ダウンロードしたファイルの SHA256 ハッシュ値を取得します。結果のハッシュが wiki に記載されている SHA256 ハッシュと一致すれば、ダウンロードしたファームウェアが完全かつ正常であることが確認できます。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_sha256sum.png"/>
</div>
:::

⚙️ **SEEED Jetson キャリアボード用のすべての `.dts` ファイルおよびその他のソースコードは、こちらからダウンロードできます：** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)

### Force Recovery モードへの移行

<details>

<summary> 手順付きガイド </summary>

インストール手順に進む前に、ボードが Force Recovery モードになっていることを確認する必要があります。

📌 主要なハードウェア位置（本記事の「Hardware Overview」も参照）：

| コンポーネント        | 位置                                                     | 説明                                                                          |
| ------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| Recovery ボタン     | 側面図 1、ラベル #2                                    | キャリアボード上の Recovery ボタン ×1（電源ボタンおよびリセットボタンと同じ側） |
| Recovery USB-C ポート | 側面図 2、ラベル #2（書き込み用 USB Type-C）            | ファームウェア書き込み専用の USB Type-C ポート。データシート上では 1× USB 3.0 Type-C (Recovery) と表記されており、書き込みに使用します |
| その他の USB ポート | Type-C（電源） / Micro-B（デバッグ） / 4× USB 3.2 Type-A | **誤った Recovery ポートに接続しないでください**                            |

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_recovery_button.png"/>
</div>

**Step 1.** キャリアボード上の **書き込み用 USB Type-C ポート**（側面図 2、ラベル #2）と Ubuntu ホスト PC を、USB Type-C データケーブルで接続します。

**Step 2.** Recovery ボタン（側面図 1、ラベル #2）を押し続けます。

**Step 3.** 電源（DC 5525、9–20V / 19V アダプタ）を接続します。

**Step 4.** Recovery ボタンを離します。

**Step 5.** Linux ホスト PC でターミナルウィンドウを開き、コマンド `lsusb` を入力します。使用している Jetson SoM に応じて、返された内容に次のいずれかの出力が表示されていれば、ボードは Force Recovery モードになっています。

- AGX Orin 64GB の場合：**0955:7023 NVidia Corp**
- AGX Orin 32GB の場合：**0955:7223 NVidia Corp**

以下の画像は AGX Orin 64GB の例です：

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_lsusb_recovery.png"/>
</div>

</details>

### Jetson への書き込み

**Step 1:** ダウンロードしたイメージファイルを解凍します（64GB バージョンを例とします）：

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For JetPack 7.2 example: sudo tar xpf mfi_seeed-agx-orin-64g-7.2.0-39.2.0-2026-08-04.tar.gz
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_extract_image.png"/>
</div>

**Step 2:** JetPack システムを NVMe SSD に書き込むため、次のコマンドを実行します：

```bash
cd mfi_xxxx
# For example: cd mfi_seeed-agx-orin-64g-7.2.0-39.2.0-2026-08-04
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_start.png"/>
</div>

書き込みプロセスが正常に完了すると、次のような出力が表示されます（`Successfully flashed the QSPI` / `Successfully flashed the eMMC` / `Flashing success`）。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_success.png"/>
</div>

:::note
書き込みコマンドの実行には 2〜10 分かかる場合があります。
:::

**Step 3:** DP ケーブル（または付属の DP→HDMI ケーブル）でディスプレイを接続し、電源を入れて、初期システム設定（言語、ユーザー名、ネットワークなど）を完了します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_boot_desktop.png"/>
</div>

## 🔌 インターフェースの使用方法

以下では、reComputer Classic J501 ボード上の各種インターフェースとその使用方法について説明します。

## M.2 Key M

J501 には M.2 Key M スロット（J4）が 1 基搭載されており、**PCIe Gen4 x4 NVMe SSD**（2280 サイズ）をサポートし、パッケージには 128G SSD が同梱されています。

### 対応 SSD は以下の通りです

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-5768.html)

### ハードウェア接続

M.2 Key M の位置は、「Hardware Overview」の底面図、ラベル 7 に示されています。筐体のネジを外し、NVMe SSD をスロットに挿入してネジで固定します。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_m2_key_m_ssd.jpg"/>
</div>

### 使用手順

Jetson デバイスでターミナルを開き、以下のコマンドを入力して SSD の状態および読み書き速度をテストします。

**Step 1.** SSD の基本情報を確認します：

```bash
nvme list
```

**Step 2.** SSD のヘルスステータス（SMART 情報）を確認します：

```bash
sudo nvme smart-log /dev/nvme0n1
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_m2m_nvme_status.png"/>
</div>

**Step 3.** 書き込み性能をテストします：

```bash
mkdir -p ~/ssd
dd if=/dev/zero of=~/ssd/test bs=1024M count=5 conv=fdatasync
```

**Step 4.** 読み出し性能をテストします（メモリからの読み出しを避けるため、事前にページキャッシュをクリアします）：

```bash
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
dd if=~/ssd/test of=/dev/null bs=1024M
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_m2m_ssd_speed.png"/>
</div>

:::danger
テスト完了後は、`sudo rm ~/ssd/test` コマンドを実行してテストファイルを削除してください。
:::

## M.2 Key E（WiFi/BT）

M.2 Key E スロット（J5）は、ワイヤレス接続用の M.2 2230 Wi-Fi / Bluetooth モジュールをサポートしており、パッケージには WiFi/BT モジュールが同梱されています。

### ハードウェア接続

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_m2_key_e_wifi.jpeg"/>
</div>

:::tip

**注意：このインターフェースを使用する前に、筐体のネジを外し、WiFi/BT モジュールを M.2 Key E スロット（「Hardware Overview」の底面図、ラベル 4 を参照）に取り付け、アンテナを接続する必要があります。**
:::

### 使用手順

**Step 1.** WiFi モジュールの PCIe 認識を確認します：

```bash
lspci | grep -i network
```

**Step 2.** 現在の接続状態を確認します：

```bash
iw dev <wlanX> link
```

**Step 3.** 近くの WiFi ネットワークをスキャンします：

```bash
nmcli -f active,ssid,signal,freq dev wifi list
```

**Step 4.** モジュールがサポートする周波数帯を確認します（Band 1 = 2.4GHz、Band 2 = 5GHz）：

```bash
iw phy phy0 info | grep -E "Band [0-9]"
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_m2e_wifi_test.png"/>
</div>

**性能テスト：**
Wi-Fi の性能をテストするには、次のコマンドを使用します（IP アドレスはテストサーバーのものに置き換えてください）：

```bash
# On server: iperf3 -s
# On client:
iperf3 -c your_server_ip
```

Bluetooth 機能は M.2 Key E スロット経由で利用できます（`bluetoothctl` を使用してスキャン／ペアリングします）。

## Ethernet

Classic J501 は RJ45 10GbE ポート（J17）を 1 基備えており、10 ギガビット Ethernet をサポートし、下位速度との互換性もあります。

**ポートごとの LED インジケータ（正常動作時）：**

- **緑色 LED：** 点灯はリンク確立を示します
- **LED 点滅：** ネットワークアクティビティを示します

PHY が正常に動作していることを確認し、サポートされている速度モードを確認するには `ethtool` を使用します（ケーブルが接続されていない場合に "Link detected" が no と表示されるのは正常です）。

```bash
sudo ip link set end0 up
sudo ethtool end0
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_ethernet_ethtool.png"/>
</div>

Ethernet ポートの速度をテストするには、次のように `iperf3` を使用します（対向サーバーに接続された Ethernet ケーブルが必要です）：

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` は iperf3 サーバーの IP アドレスです。クライアントはこのサーバーに接続して帯域幅テストを実行します。
`<bind_ip>` は、テストトラフィックの送信元として使用するローカル IP アドレスをバインドします。
:::

## LED

J501 にはステータスインジケータ LED が搭載されています：

- **PWR/ACT LED：** 電源／システムアクティビティステータス（緑）

## USB

Classic J501 は、4× USB 3.2 Type-A ポート（J24/J33、10Gbps、ホストモード専用。高速周辺機器、ストレージデバイス、カメラの接続用）、1× USB 3.0 Type-C 電源ポート、1× USB 3.0 Type-C Recovery ポート（書き込みポート）、および 1× Micro USB デバッグポート（J26）を備えています。

### USB バス トポロジ

各 USB ポートおよび周辺機器の接続状態とネゴシエートされた速度を確認するには、`lsusb -t` を使用してデバイスツリーを表示します：

```bash
lsusb -t
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_usb_topology.png"/>
</div>

### USB-A 速度テスト

USB デバイスの速度をテストするスクリプトを作成します：

```bash
vim test_usb.sh
```

次の内容を貼り付けます：

<details>
<summary> test_usb.sh </summary>

```bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
set -e

MOUNT_POINT="$1"
TEST_FILE="$MOUNT_POINT/test_usb_speed.bin"

if [ -z "$MOUNT_POINT" ]; then
  echo "Usage: $0 <mount_point>"
  echo "Example: $0 /media/seeed/USB"
  exit 1
fi

if [ ! -d "$MOUNT_POINT" ]; then
  echo "Error: $MOUNT_POINT is not a directory"
  exit 1
fi

echo "Write test..."
dd if=/dev/zero of="$TEST_FILE" bs=1M count=2048 conv=fdatasync status=progress

echo
echo "Drop caches..."
sync
echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null

echo "Read test..."
dd if="$TEST_FILE" of=/dev/null bs=1M count=2048 status=progress

echo
echo "Cleaning up..."
rm -f "$TEST_FILE"
EOF
```

</details>

スクリプトに実行権限を付与してテストします：

```bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

:::note
まず `df -h` または `lsblk` コマンドを使用して、USB デバイスの実際のマウントポイントを確認してください！
:::

### Micro USB デバッグシリアルポート

このシリアルポートと Micro-USB ケーブルを使用すると、PC 側で入出力のデバッグ情報をモニタリングできます。

**Step 1.** シリアルポートツールを開きます（ここでは例として MobaXterm ツールを使用）し、新しいセッションを作成します。

**Step 2.** Serial ツールを選択します。

**Step 3.** 対応するシリアルポートを選択し、ボーレートを **115200** に設定して "OK" をクリックします。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_mobaxterm_serial_session.png"/>
</div>

**Step 4.** ユーザー名とパスワードを使用して reComputer Classic J501 にログインします。

## ファン

Classic J501 には 1x 4 ピン 5V PWM ファンコネクタ（J9）が搭載されており、ピン配置は GND / Power / FAN_TACH（回転数検出）/ FAN_PWM（回転数制御）として定義されています。PWM 制御により、システム温度に基づいてファン速度を動的かつ精密に調整でき、効率的な冷却を実現しつつ、ノイズと消費電力を最小限に抑えます。

### 使用手順

**手動 PWM 制御：**

```bash
# Set fan speed (0-255)
sudo -i
echo 200 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
```

:::note
デフォルトのサーマルポリシーは `/etc/nvpmodel.conf` に事前設定されています。カスタムプロファイルについては、[NVIDIA Jetson Linux Developer Guide](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control) を参照してください。
:::

さらに、`jtop` ツールを使用してファン速度を手動で設定することもできます。

ターミナルで次のコマンドを入力して **jtop** をインストールできます：

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

その後、reComputer Classic J501 を再起動します：

```bash
sudo reboot
```

**jtop** をインストールしたら、ターミナルで起動できます：

```bash
jtop
```

## 40 ピン拡張ヘッダ（GPIO / I2C / SPI / UART / CAN / I2S / PWM）

Classic J501 の 40 ピンヘッダ（J30、「Hardware Overview」の側面図 2、ラベル 3 を参照）は Raspberry Pi ヘッダのフォームファクタと互換性があり、2x I2C（I2C2/I2C4）、SPI1（デュアルチップセレクト）、UART1（TX/RX/RTS/CTS）、I2S2、**ネイティブ CAN0/CAN1**、PWM01、および複数の GPIO を提供します。

ヘッダの物理的な位置は、下図（緑の矢印で示され、USB Type-A ポートの隣）に示されています：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_40pin_header_photo.png"/>
</div>

ピン配置は下図のとおりです：

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_40pin_header_pinout.png"/>
</div>

:::note
図中の GPIOxx ラベルは Raspberry Pi 互換の番号です。一部のラベルはデータシート内の J30 ピンテーブルと一致していません（例：ピン 3/5 のアイコンは I2C5 を示していますが、データシートでは I2C4、I2S の略記など）。正式な名称はデータシートのピンテーブルに従います（ピン 3/5 はモジュールボール位置 E60/D61 = I2C4_DAT/CLK に対応）。
:::

### GPIO 操作

libgpiod ツールを使用して GPIO を操作します（まず `gpioinfo` でチップ番号とライン番号を確認します）：

```bash
gpioinfo
sudo gpioset --mode=wait <gpiochipX> <line>=1   # set output high
sudo gpioget <gpiochipX> <line>                 # read input
```

### SPI ループバックテスト

**Step 1.** spidev モジュールをロードします：`sudo modprobe spidev`

**Step 2.** デバイスノードを確認します：`ls /dev/spidev*`

**Step 3.** テストコードを取得してコンパイルします：

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**Step 4.** 選択した SPI の MOSI と MISO をショート（ループバック）し、テストを実行します（40 ピンの SPI1 は通常 `/dev/spidev0.0` です。`ls /dev/spidev*` で実際のノードを確認してください）：

```bash
sudo ./spidev_test -v -D /dev/spidev0.0 -s 100000
```

**Step 5.** 送信（TX）データと受信（RX）データが一致していれば、ループバックテストは成功です。

### UART テスト

40 ピンヘッダ上の UART1（ピン 8/10/11/36）は USB-シリアルアダプタに接続でき、CuteCom を使用してテストできます：

```bash
sudo apt-get install cutecom
sudo cutecom
```

シリアルポートパラメータ：デバイス `/dev/ttyTHS1`（40 ピン UART1、実際のノードを参照）、ボーレート 115200、8N1、フロー制御なし。

### CAN 通信

40 ピンヘッダは CAN0（ピン 29/31）と CAN1（ピン 33/37）を提供します。これら 4 本のピンは、AGX Orin モジュールに直接接続された **3.3V TTL レベル** の CAN コントローラ信号です（CANx_DOUT = コントローラ TX、CANx_DIN = コントローラ RX）。**キャリアボード上に CAN トランシーバは搭載されておらず**、ヘッダ上に直接配線可能な CAN_H/CAN_L もありません。ネットワーク接続には外付けの 3.3V CAN トランシーバ（例：SN65HVD230 / TCAN332、NVIDIA 公式推奨は SN65HVD230）が必要です。

ループバックテストには 2 つのトランシーバが必要です。TTL 側では、トランシーバの TXD→CANx_DOUT、RXD←CANx_DIN、VCC→3.3V（ピン 1/17）、GND→グラウンドに接続します。バス側はクロス配線（CAN0_H↔CAN1_H、CAN0_L↔CAN1_L）し、バス両端に 120Ω の終端抵抗を接続します。その上でループバックテストを実行できます：

:::note
（データシートの 40 ピンピンテーブルに基づき）確認済み：J30 の CAN ピンはモジュールボール位置からのダイレクト接続信号です（CAN0_DIN=F58、CAN0_DOUT=D59、CAN1_DOUT=H61、CAN1_DIN=B61）。データシート上のどこにもオンボードトランシーバは記載されておらず、これは NVIDIA AGX Orin DevKit の 40 ピン定義と一致します。NVIDIA 公式ドキュメントでは、外付けの 3.3V 以上の CAN トランシーバを明示的に要求しています。
:::

#### Classic CAN モード

```bash
# Configure and bring up the interfaces (Classic CAN, 1 Mbps example)
sudo ip link set can0 down
sudo ip link set can1 down
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can1 type can bitrate 1000000
sudo ip link set can0 up
sudo ip link set can1 up

# One terminal receives, the other sends
candump can1 &
cangen can0 -g 10
```

#### CAN-FD モード

```bash
sudo ip link set can0 type can bitrate 500000 dbitrate 5000000 fd on berr-reporting on restart-ms 100
sudo ip link set can0 up
```

## カメラコネクタ

Classic J501 は、120 ピン BTB コネクタ（J509、「Hardware Overview」の底面図、ラベル 6 を参照）を介して CSI0–CSI7（8x 2 レーン MIPI CSI ポート）を引き出し、カメラ用 I2C、マスタークロック（MCLK）、Powerdown/Reset、フレーム同期（FRSYNC）、および 2.8V/1.8V/3.3V のカメラ電源を提供し、マルチカメラ同期認識ソリューションに適しています。

### ハードウェア接続

このインターフェースは BTB（ボード間）形式であり、Seeed 製または自作のカメラアダプタボード／FPC ケーブルが必要です。

### 使用手順

**Step 1.** デバイスノードを確認します：`ls /dev/video*`

**Step 2.** GStreamer を使用してプレビューします（例）：

```bash
gst-launch-1.0 v4l2src device=/dev/video0 ! \
video/x-raw,width=1920,height=1080,framerate=30/1 ! \
videoconvert ! xvimagesink
```

## オーディオインターフェース

10 ピンオーディオパネルヘッダ（J511、「Hardware Overview」の底面図、ラベル 5 を参照）：デュアルマイク入力（IN1P/IN2P）、ステレオヘッドフォン出力（HPO_L/HPO_R）、ジャック／プレゼンス検出。

オーディオパネルボードを接続した後、Ubuntu のサウンド設定で対応する入出力デバイスを選択し、録音および再生テストを行うことができます：

```bash
arecord -l   # list capture devices
aplay -l     # list playback devices
arecord -d 5 test.wav && aplay test.wav
```

## ディスプレイ（DP）

Classic J501 には 1x DisplayPort インターフェースが搭載されています。DP ケーブルでディスプレイに直接接続するか、同梱の **DP→HDMI ケーブル** を使用して HDMI ディスプレイに接続でき、デスクトップおよびマルチストリームのビデオレンダリング出力をサポートします。

## PCIe 拡張スロット

オンボード PCIe スロット（J6、「Hardware Overview」の側面図 2、ラベル 1 を参照）は物理的には x16 フォームファクタであり、電気的には **x8**（UPHY ブロック 1 レーン 0–7、PCIe コントローラ #5）です。12V/3.3V 電源と完全な制御信号（PERST#/CLKREQ#/WAKE#/プレゼンス検出）を備え、ネットワークカード、キャプチャカード、NVMe アダプタカードなどの拡張に使用できます。

```bash
sudo lspci            # check whether the PCIe device is detected
sudo lspci -vvv -s <BDF>
```

## RTC

Classic J501 は、RTC 2 ピンヘッダ（J13、PMIC_BBATT、「Hardware Overview」の底面図、ラベル 2 を参照）に外部バックアップバッテリを接続することで、電源喪失時も時刻を保持します。

**Step 1.** RTC バッテリを接続します（極性に注意してください）。

**Step 2.** デバイスの電源を入れ、`Settings > Date & Time` に移動し、ネットワークに接続して **Automatic Date & Time** を選択します（または手動で設定します）。

:::note
インターネットに接続していない場合は、ここで日付と時刻を手動で設定できます。
:::

**ステップ 3.** ターミナルウィンドウを開き、次のコマンドを実行してハードウェアクロックの時刻を確認します：

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**ステップ 4.** ネットワーク接続を切断し、デバイスを再起動して時刻保持を確認します。

## オートメーションヘッダ（自動電源オン / リモート電源制御）

オートメーションヘッダ J42（「ハードウェア概要」の底面図、ラベル 1 を参照）は、FORCE_RECOVERY_N（ピン 2）、SYS_RESET_N（ピン 3）、電源ボタン信号（ピン 4）、PD コントローラ出力/ACOK（ピン 5/6）、MODULE_SLEEP_N（ピン 7）、過電流インジケータ SYSTEM_OC_N（ピン 8）、Wake on LAN（ピン 9、GPIO38）などの信号を提供します。

:::note
**ピン 5 と 6 を短絡**して Auto-Power-On を有効にすると、無人運用のデバイスに適しています。
:::

## リソース

- [reComputer Classic J5011 (32GB) 製品ページ](https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html)
- [reComputer Classic J5012 (64GB) 製品ページ](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html)
- [reComputer Classic J501 データシート（PDF ダウンロード）](https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/reComputer_classic_j501_datasheet.pdf)
- [NVIDIA Jetson AGX Orin モジュール データシート（PDF ダウンロード）](https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/AGX_P3737_A05_V1_20260605.pdf)
- [reComputer Classic J501 3D モデル（STP ダウンロード）](https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/reComputer_classic_J501.stp)
- [Seeed NVIDIA Jetson 製品カタログ](https://www.seeedstudio.com/nvidia.html)
- [Seeed の L4T (Linux_for_Tegra) ソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson AGX Orin ドキュメント](https://developer.nvidia.com/embedded/jetson-agx-orin)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
