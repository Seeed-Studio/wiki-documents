---
description: Linux、macOS、Windows 上で rpiboot と bmaptool を使用して、Reachy Mini の CM4 に ReachyMiniOS イメージを書き込み直すためのエキスパート向けガイド。
title: Raspberry Pi OS イメージを書き込み直す
slug: /reachymini_platforms_reachy_mini_reflash_the_rpi_iso
keywords:
- reflash
- factory reset
- os image
- rpiboot
- bmaptool
- cm4
- expert
- recovery
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# 上級者向け: Raspberry Pi OS イメージを書き込み直す

:::danger エキスパート向けガイドのみ
このガイドでは、ReachyMiniOS イメージを Reachy Mini の CM4 に書き込み直す方法を説明します。これを行うと Reachy Mini は _工場出荷状態にリセット_ されます。

ほとんどのユーザーにはこの作業は不要です。Reachy Mini にはあらかじめインストールされています。デバッグできない壊れたインストール状態になっている場合にのみ、以下の手順に従ってください。
:::

---

## OS イメージ（と bmap）をダウンロードする

まず、最新の OS イメージと `.bmap` ファイルを次からダウンロードします:
https://github.com/pollen-robotics/reachy-mini-os/releases

:::tip
`.bmap` ファイルは `bmaptool`（Linux/macOS）で使用されます。Raspberry Pi Imager（Windows）でフラッシュする場合は、OS イメージファイルのみが必要です。
:::

---

## rpiboot をインストールする

:::info Linux / macOS
ビルド手順はこちらに従ってください:
https://github.com/raspberrypi/usbboot?tab=readme-ov-file#building-1
:::

:::info Windows
公式 Raspberry Pi リポジトリから rpiboot GUI をダウンロードしてインストールします:
https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe
:::

---

## フラッシュツールをインストールする

:::info Linux
bmaptool をインストールします:
```bash
sudo apt install bmap-tools
```
:::

:::tip Linux ユーザー
Linux ユーザーは `bmaptool` か Raspberry Pi Imager（Windows オプション）どちらも使用できます。このワークフローでは、Raspberry Pi Imager は一般的に `bmaptool` よりも _かなり遅い_ ため、利用可能な場合は `bmaptool` を推奨します。
:::

:::info macOS
公式リポジトリから bmaptool をインストールします:
```bash
python3 -m pip install --user "git+https://github.com/yoctoproject/bmaptool.git"
export PATH="$HOME/.local/bin:$PATH"
bmaptool --version
```
:::

:::tip macOS ユーザー
macOS ユーザーは `bmaptool` か Raspberry Pi Imager（Windows オプション）どちらも使用できます。このワークフローでは、Raspberry Pi Imager は一般的に `bmaptool` よりも _かなり遅い_ ため、利用可能な場合は `bmaptool` を推奨します。
:::

:::info Windows
Raspberry Pi Imager をダウンロードしてインストールします:
https://www.raspberrypi.com/software/
:::

---

## セットアップ

**ステップ 1:** 先に進む前にロボットの電源を完全に切ります。

:::tip ステップ 2: rpiboot を起動する
**rpiboot** を起動します（ロボットが接続されるのを待機します）:
:::

* **Linux / macOS**: ターミナルで `rpiboot` コマンドを実行します:
  ```bash
  sudo ./rpiboot -d mass-storage-gadget64
  ```
* **Windows**: 前のステップでインストールした **RPiBoot** 実行ファイルを実行します。

:::tip ステップ 3
ヘッド PCB 上のスイッチを **DOWNLOAD (SW1)** に設定します:

![pcb_usb_and_switch](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/pcb_usb_and_switch.png)
:::

**ステップ 4:** USB ケーブル（上の画像に示されている **USB2** と名前の付いたもの）を接続します。

**ステップ 5:** ロボットの電源を入れます。

内部 eMMC がマスストレージデバイスとして認識されるはずです。

---

## ISO のアンマウントとフラッシュ

:::info Linux
:::warning フラッシュする前に、デバイスがアンマウントされていることを必ず確認してください。

**デバイスの確認とアンマウント**

デバイスは `/dev/sdx`（`/dev/sda` のようなもの）として表示されるはずです。

次を実行して **マウントされているパーティションを確認** します:
```bash
lsblk
```

以下のように `bootfs` と `rootfs` が表示されていれば、それは **マウントされています**:
```
sda           8:0    1  14.6G  0 disk
├─sda1        8:1    1   512M  0 part /media/<username>/bootfs
└─sda2        8:2    1  14.1G  0 part /media/<username>/rootfs
```

パーティションを**アンマウント**します:
```bash
sudo umount /media/<username>/bootfs
sudo umount /media/<username>/rootfs
```

**ISO をフラッシュする**
```bash
sudo bmaptool copy <reachy_mini_os>.zip --bmap <reachy_mini_os>.bmap /dev/sda
```

例えば `v0.0.10` リリースの場合:
```bash
sudo bmaptool copy image_2025-11-19-reachyminios-lite-v0.0.10.zip --bmap 2025-11-19-reachyminios-lite-v0.0.10.bmap /dev/sda
```
:::

:::info macOS
:::warning フラッシュする前に、デバイスがアンマウントされていることを必ず確認してください。

**デバイスの確認とアンマウント**

デバイスは `/dev/diskX`（`/dev/disk4` のようなもの）として表示されるはずです。

次を実行して **マウントされているパーティションを確認** します:
```bash
mount
```

`bootfs` や `rootfs` に言及している `/dev/disk4s1` や `/dev/disk4s2` のようなエントリを探します。

個々のパーティションではなく、ディスク全体を**アンマウント**します:
```bash
diskutil unmountDisk /dev/disk4
```

`/dev/disk4` は実際のディスク識別子に置き換えてください。

:::note
`unmountDisk` はディスク上のすべてのボリューム（`bootfs`、`rootfs` など）を一度にアンマウントします。
:::

:::warning ISO をフラッシュする
`/dev/diskX` の代わりに `/dev/rdiskX`（先頭の **`r`** に注意！）を使用します。`r` プレフィックスは生ディスクアクセスを提供し、フラッシュコマンドを成功させるために必須です。
:::

```bash
sudo bmaptool copy <reachy_mini_os>.zip --bmap <reachy_mini_os>.bmap /dev/rdiskX
```

例えば `v0.0.10` リリースの場合（`/dev/rdisk4` は実際のディスク識別子に置き換えてください）:
```bash
sudo bmaptool copy image_2025-11-19-reachyminios-lite-v0.0.10.zip --bmap 2025-11-19-reachyminios-lite-v0.0.10.bmap /dev/rdisk4
```
:::

:::info Windows (Raspberry Pi Imager)
**Raspberry Pi Imager** 実行ファイルを使用して OS イメージをフラッシュします:

1. **Raspberry Pi Imager** を開きます
2. デバイスとして `Raspberry Pi 4` を選択します
3. オペレーティングシステムに `Use custom` を選択し、ダウンロードした OS イメージ（`.zip` または展開した `.img`）を指定します
4. ストレージシステム用の、利用可能な唯一のディスク（通常は `RPi-MSD- 0001`）を選択します
5. **Write** をクリックします
:::

---

## 通常のブートモードを復元する

**ステップ 1:** ロボットの電源を切ります

**ステップ 2:** スイッチを DEBUG に戻します

**ステップ 3:** USB ケーブルを取り外します

**ステップ 4:** ロボットの電源を再び入れます

---

## すべてが正常に動作しているか確認する

:::tip コンピュータをロボットの WiFi ホットスポットに接続します:
* ネットワーク名: `reachy-mini-ap`
* パスワード: `reachy-mini`
:::

ロボットに SSH 接続します:
```bash
ssh pollen@reachy-mini.local
# password: root
```

その後、次を実行します:
```bash
reachyminios_check
```

:::success
成功すると、次のように表示されます:
```bash
Image validation PASSED
```
:::
