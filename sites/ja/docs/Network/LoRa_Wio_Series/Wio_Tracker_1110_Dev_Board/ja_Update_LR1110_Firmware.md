---
description: Semtech 公式の LR11xx Updater ツールを使用して Wio Tracker 1110 上の LR1110 ファームウェアを更新する方法
title: Wio Tracker 1110 上の LR1110 ファームウェアを更新する
keywords:
  - Wio
  - Tracker
  - LR1110
  - Firmware update
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /update_internal_lr1110_firmware
sku: 114993186
sidebar_position: 8
last_update:
  date: 06/17/2026
  author: David Du
createdAt: '2026-06-17'
updatedAt: '2026-06-17'
url: https://wiki.seeedstudio.com/ja/update_internal_lr1110_firmware/
---

## 概要

Wio Tracker 1110 開発ボードは、Semtech の LR1110 LoRa® トランシーバと測位用の多目的 RF フロントエンドを統合した Wio-WM1110 無線モジュールを中心に構成されています。本ガイドでは、Semtech 公式の LR11xx Updater ツールを使用して、Wio Tracker 1110 に内蔵されている LR1110 チップのファームウェアを更新する方法を説明します。

:::note
LR11xx Updater ツールは、アプリケーションノート AN1200.57「LR1110: Upgrade of the Program Memory」に基づき、LR1110 / LR1120 / LR1121 チップのプログラムメモリを更新するために Semtech が提供しているリファレンス実装です。
:::

:::caution
更新処理の途中でデバイスを手動で再起動したり電源を切ったりしないでください。チップが永久的に破損するおそれがあります。
:::

## 前提条件

### 必要なハードウェア

- Wio Tracker 1110 開発ボード × 1
- コンピュータ（Windows / Linux / macOS）× 1
- USB Type‑C ケーブル × 1
- （オプション）J‑Link デバッグプローブ – SWD インターフェース経由での書き込み用

:::note
`Wio Tracker 1110 dev board`（SKU:114993186）と `LPWAN Asset Tracker Dev Kit for Amazon Sidewalk`（SKU:114993187）には違いがあることに注意してください。Sidewalk 開発用途で dev board を使用する場合、デフォルトのバージョンは Sidewalk の要件と異なるため、本ガイドに従って LR1110 ファームウェアをアップグレードする必要があります。
:::

## LR1110 ファームウェアの更新

1. ソースコードを取得し、Zephyr ワークスペース環境を準備します：

```bash
# obtain the manifest repository from Seeed Studio's GitHub
git clone https://github.com/Seeed-Studio/SWSD006/tree/Wenzy/dev/samples/SWTL001_wio_tracker

# initialize the zephyr workspace
cd <your_workspace_path>/SWSD006-Wenzy-dev/
west init
west update
```

2. 希望するファームウェアを[こちら](https://github.com/Lora-net/radio_firmware_images)からダウンロードし、`include` サブディレクトリに配置します。Sidewalk で動作するのは「transceiver」ファームウェアのみであり、「modem」ファームウェアは使用しないでください。

3. `app.c` を編集して、このダウンロードしたヘッダーファイルをインクルードします。（ここではデフォルトの `lr1110_transceiver_0401.h` を使用します）

```c
# The target project path is: /samples/SWTL001_nrf52840_wm1110/src/swtl001/app.c
#include <lr1110_transceiver_0401.h>
```

4. 対象ファームウェアをコンパイルします：

```bash
west build -p auto -b nrf52840_wm1110 -- -DRADIO=LR1110
```

コンパイルされたファイルは `/SWSD006-Wenzy-dev/samples/SWTL001_nrf52840_wm1110/build/zephyr/` の下に生成されているはずです。

5. コンパイル済みファームウェアの書き込み方法は 2 通りあります：

- **Wio Tracker 1110 は UF2 ブートローダーモードをサポートしています（推奨）：**
  1. USB Type‑C ケーブルでボードをコンピュータに接続します。
  2. ボード上の Reset ボタンを素早く 2 回押します。WM1110_BOOT という名前のマスストレージドライブが表示されます。
  3. コンパイル済みの[.uf2 ファイル](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/SWTLApp.uf2)をそのドライブにドラッグします。
  4. 書き込みは自動的に開始され、完了するとドライブは自動的にアンマウントされます。

- **J-Link を使用して SWD 経由で書き込みたい場合：**
  1. ピッチ 1.2 mm の 2×3 プローブを使用して、開発ボード背面の SWD デバッグポートに接続します。
  2. コンパイル済みファームウェアを書き込みます：
```bash
west flash
```

<br />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/SWD_pinout.png" alt="pir" width={600} height="auto" /></p>

<br />

6. USB 接続すると、COM ポート（または /dev/ttyACM*）が表示されます。ターミナルエミュレータ（PuTTY、Screen、Minicom など）を次の設定で開きます： 

- **ボーレート**: 115200

- 更新プロセスからのライブログメッセージが表示されます。

## リソース

- **[.uf2]** [プリコンパイル済みファームウェア](https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/SWTLApp.uf2)

- **[Link]** [Updater ツール GitHub リポジトリ](https://github.com/Seeed-Studio/SWSD006/tree/Wenzy/dev/samples/SWTL001_wio_tracker)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>