---
description: reComputer Mini J501 エンクロージャを分解し、M.2 Key E スロットに Wi‑Fi モジュールを取り付けまたは交換します
title: reComputer Mini J501 WiFi モジュール取り付け
keywords:
  - reComputer Mini
  - J501
  - WiFi
  - SSD
  - NVMe
  - M.2 Key E
  - M.2 Key M
  - AGX Orin
  - Jetson AGX Orin
image: https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_08.png
slug: /recomputer_mini_j501_wifi_module_installation
last_update:
  date: 06/17/2026
  author: HaoChen
sku: 100042928, 114993556, 100020039
createdAt: '2026-06-15'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/ja/recomputer_mini_j501_wifi_module_installation/
---

## はじめに

システム全体の概要、セットアップ、およびフラッシュ手順については、[reComputer Robotics J50 Mini Getting Started](https://wiki.seeedstudio.com/ja/recomputer_robotics_j50_mini_getting_started/) を参照してください。

このドキュメントでは、**reComputer Mini J501** を分解し、**Wi‑Fi モジュール**（M.2 Key E）を取り付けまたは交換する方法を説明します。

Wi‑Fi スロットは **reComputer Mini J501 キャリアボード** の裏面にあります。**リア拡張ボード**が **M.2 Key E** スロットを覆っているため、Wi‑Fi の作業を行うにはこれを取り外す必要があります。**トップ拡張ボード**にはキャリアボードの固定ネジを露出させる切り欠きがあるため、作業中に取り外す必要はありません。キャリアボードを取り外すまでの分解手順は、**NVMe SSD**（M.2 Key M）を交換する場合にも同様に適用されます — リア拡張ボードはそのスロットを覆っていません。

:::warning
分解する前に、デバイスの電源を切り、すべてのケーブル（DC 入力および Ethernet を含む）を取り外してください。キャリアボードや M.2 モジュールに触れる際は、ESD 保護に配慮して取り扱ってください。
:::

## reComputer Mini (J501)

**reComputer Mini J501** は、**Robotics J501 Mini キャリアボード**と **NVIDIA Jetson AGX Orin** モジュール（32GB/64GB）を使用し、コンパクトな産業用エンクロージャで最大 **275 TOPS** の AI 性能を実現します。キャリアボードは、デュアル Ethernet、USB 3.2、DisplayPort、および **M.2 Key E**（Wi‑Fi/BT 用）を含む M.2 拡張スロットを提供します。

<div align="center">
  <img width ="600" alt="Jetson AGX Orin 用 reComputer Mini J501 キャリアボード" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_08.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span>
    </strong>
  </a>
</div>
<br />

デバイス仕様、JetPack のフラッシュ、およびインターフェースの使用方法については、[Robotics J501 Mini carrier board Hardware and Getting Started](https://wiki.seeedstudio.com/ja/recomputer_j501_mini_getting_started/) を参照してください。

## Wi‑Fi モジュール

Jetson と互換性のある Realtek 製 M.2 Key E Wi‑Fi/BT モジュール（例：RTL8852BE）の使用を推奨します。

<div align="center">
  <img width ="600" alt="Jetson 用 Realtek M.2 Key E WiFi および Bluetooth モジュール" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_07.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/RTL8852BE-WIFI-Module-M-2-Key-E-p-6835.html" target="_blank">
    <strong>
      <span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span>
    </strong>
  </a>
</div>

## ハードウェア接続

:::info
このガイドは **Wi‑Fi モジュール** の取り付けに焦点を当てています。**NVMe SSD** を交換する場合は、手順 2〜3 のみを実行し、手順 4（リア拡張ボードの取り外し）はスキップしてください。
:::

**手順 1.** 使用するすべての部材を準備します。

- reComputer Mini J501 エンクロージャ（電源オフ）
- 対応する M.2 Key E Wi‑Fi/BT モジュール
- IPEX アンテナケーブル（通常は Wi‑Fi モジュールに付属）
- プラスドライバー

### J501 エンクロージャを分解する

**手順 2.** 上部エンクロージャカバーを取り外します。

<div align="center"><img width ="800" alt="上部エンクロージャカバーを取り外した reComputer Mini J501" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_01.png?v=2"/></div>

**手順 3.** メインキャリアボードを取り外します。

キャリアボード上の **四隅の固定ネジ** をすべて取り外します（下図の赤印部分）。

<div align="center"><img width ="800" alt="赤で示された J501 キャリアボード四隅の固定ネジ" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_02.png"/></div>

- キャリアボードを慎重に持ち上げてシャーシから取り出します。
- ボードを清潔で絶縁性のある面の上に置きます。

<div align="center"><img width ="800" alt="シャーシから取り外し、作業面に置かれた J501 キャリアボード" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_03.png"/></div>

**手順 4.** **リア**拡張ボードを取り外します（*Wi‑Fi 取り付け時のみ*）。

キャリアボードを裏返し、**底面** が上を向くようにします。**リア拡張ボード** がボード間コネクタで背面に接続されており、**M.2 Key E** スロットへのアクセスを塞いでいます。**M.2 Key M** スロットの NVMe SSD のみを交換する場合は、この手順をスキップしてください。

<div align="center"><img width ="800" alt="ボード間コネクタでリア拡張ボードが接続されたまま裏返された J501 キャリアボード" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_04.png"/></div>

- リア拡張ボードをキャリアボードのコネクタからゆっくりと引き離します。
- リア拡張ボードを脇に置きます。

これで **M.2 Key E**（WiFi/BT）スロットにアクセスできるようになりました。以下の手順では Wi‑Fi モジュールの取り付けについて説明します。

<div align="center"><img width ="800" alt="J501 キャリアボード背面で、リア拡張ボードの位置の後ろにある M.2 Key E WiFi スロットと、アクセス可能な M.2 Key M NVMe SSD スロット" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_05.png"/></div>

### Wi‑Fi モジュールを取り付ける

**手順 5.** 無線モジュールを **M.2 Key E** ポートに適切な角度（通常は 30°）で差し込み、押し下げて固定ネジで固定します。

**手順 6.** **IPEX アンテナケーブル** をモジュールに接続します。再組み立て時に挟まれないよう、金属シールドやネジ穴を避けてケーブルを配線してください。

<div align="center">
  <img width ="1000" alt="J501 キャリアボード上で、M.2 Key E スロットに取り付けられ IPEX アンテナケーブルが接続された WiFi モジュール" src="https://files.seeedstudio.com/wiki/recomputer_mini_j501_wifi_module_installation/reComputer-Mini-J501_WiFi_installation_picture_06.png"/>
</div>

### J501 エンクロージャを再組み立てする

**手順 7.** デバイスを逆の手順で再組み立てします：

1. 取り外していた場合は、リア拡張ボードをキャリアボード背面に再接続します。
2. キャリアボードをシャーシに戻し、四隅のネジを締めます。
3. 上部エンクロージャカバーを元に戻します。

## ソフトウェア設定（ドライバーインストール）

**RTL8852BE** モジュールを使用している場合は、次を参照してください：

- [RTL8852BE Wireless Module for Jetson](https://wiki.seeedstudio.com/ja/rtl8852be_wireless_module_for_jetson/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。お客様が弊社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
