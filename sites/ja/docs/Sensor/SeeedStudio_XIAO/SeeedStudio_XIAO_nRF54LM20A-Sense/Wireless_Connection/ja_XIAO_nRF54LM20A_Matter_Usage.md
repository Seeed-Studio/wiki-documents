---
title: XIAO nRF54LM20A 向け Matter
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_Matter.webp
slug: /xiao_nrf54lm20a_with_matter
sku: 100018440
last_update:
  date: 05/26/2026
  author: Zeller
createdAt: '2025-05-26'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_with_matter/
---

# XIAO nRF54LM20A 向け Matter

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_Matter.png" style={{width:600, height:'auto'}}/></div>

## はじめに

nRF54LM20A SoC を搭載した XIAO nRF54LM20A シリーズは、Bluetooth LE、Matter、Thread、Zigbee、および 2.4GHz 独自プロトコルをサポートし、低レイテンシーなシナリオに最適な最大 4 Mbps のデータレートを実現します。

このチュートリアルでは 2 枚の XIAO nRF54LM20A ボードを使用して Matter ネットワークを検証します。1 枚は Home Assistant に接続されたボーダールーターとして動作し、もう 1 枚は Thread ネットワークに参加する Matter デバイスとして動作して、Home Assistant ダッシュボード上に模擬的な温度と湿度データを表示します。

***WiKi のアイデアをご提供いただいた著者 [@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) に感謝します***

:::tip

このチュートリアルは VS Code と nRF Connect Extension を前提としています。これらに不慣れな場合は、[XIAO nRF54LM20A nRFConnect SDK Usage](https://wiki.seeedstudio.com/ja/xiao_nrf54lm20a_ncs/) を参照してください。

:::

### Matter とは

Matter（旧称 CHIP）は、Connectivity Standards Alliance（CSA）によって開発されたユニバーサルなアプリケーションレイヤー規格です。

- ベンダーをまたいだ IP ネットワーク（Wi-Fi/Ethernet/Thread）上での相互運用性
- 標準化されたデバイスタイプ（例：照明、ドアロック、サーモスタット）
- QR コード/NFC を用いたセキュアなコミッショニング
- Distributed Compliance Ledger（DCL）によるエンドツーエンド暗号化

### OpenThread とは

OpenThread は Thread ネットワークプロトコルのオープンソース実装です。IEEE 802.15.4 無線技術を使用して、IoT デバイス向けの低消費電力でセキュアなメッシュネットワークを構築します。主な特長は次のとおりです。

- IPv6（6LoWPAN）のサポートを内蔵
- 自己組織化ネットワークトポロジ
- すべての通信に対する AES-128 暗号化
- 電球やセンサーのような小型デバイスにも対応

### Matter と Thread の関係

***この点について非常に詳細な説明をしている著者 [@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) に感謝し、その内容を引用します！***

Matter と Thread の簡単な紹介の後で、Thread と Matter が異なる目的を持ち、技術スタックの異なるレイヤーで動作していることが理解できたと思います。まとめると次のとおりです。

Thread：

- Thread は、コネクテッドホームデバイス向けに設計された低消費電力の無線メッシュネットワークプロトコルです。デバイス同士およびインターネットとの間で、信頼性が高くセキュアな通信手段を提供します。
- Thread はローカルネットワークを構築し、インターネットがダウンしてもデバイス同士が通信できるようにします。

Matter：

- Matter は Thread、Wi-Fi、Ethernet などのネットワークプロトコルの上位に位置するアプリケーションレイヤープロトコルです。異なるメーカーのデバイス同士がシームレスに連携できるようにすることで、スマートホームエコシステムを簡素化・統一することを目的としています。
- Matter はアプリケーションレベルでデバイスがどのように通信し相互作用するかを定義し、相互運用性、セキュリティ、使いやすさに重点を置いています。

Thread と Matter の接続：

- Matter は基盤となるネットワークプロトコルの 1 つとして Thread を使用できます。つまり、Matter プロトコルを使用するデバイスは Thread ネットワーク上で通信できます。
- Matter と Thread を組み合わせることで、デバイスがローカルかつ効率的に通信できる、堅牢でセキュアかつ相互運用可能なスマートホームエコシステムが実現します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/TOPPLOGY.jpg" style={{width:900, height:'auto'}}/></div>

## [Home Assistant](https://www.home-assistant.io/) の概要

Home Assistant は、スマートホームデバイスを単一の統合インターフェースから制御・監視できる強力なオープンソースのホームオートメーションプラットフォームです。スマートホームの中枢ハブとして機能し、ルーチンの自動化、センサーの監視、よりインテリジェントな生活空間の構築を可能にします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> 詳しく見る 🖱️</font></span></strong></a>
</div>

## ハードウェアの準備

ハードウェアの準備には 2 台の XIAO nRF54LM20A Sense が必要です。

<div className="table-center">
<table align="center">
    <tr>
        <th>Home Assistant Green</th>
        <th>SeeedStudio XIAO nRF54LM20A × 2</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Gree_HA.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>
</div>

## Bluetooth アンテナ

このボードは外部 Bluetooth アンテナを使用します。より良い Bluetooth 信号品質を確保し、Bluetooth の使用体験を向上させるために、Bluetooth アンテナを取り付けることを推奨します。
接続方法は以下のとおりです。

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 600, height: 'auto'}}
  />
</div>

## Matter で HomeAssistant に接続する

### アドオンをインストールする

Settings -> Apps に移動し、Install app を選択してアドオンを追加します。

1. **Open Thread Border Router** を追加し、その設定を変更します。

- Settings -> Apps に移動し、Install app を選択してアドオンを追加し、**Open Thread Border Router** を検索してインストールを完了します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_1.png" style={{width:800, height:'auto'}}/></div>

2. **Matter Server** を追加します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_2.png" style={{width:800, height:'auto'}}/></div>

### Thread ルーティングを構成する

以下の手順に従って、1 台の XIAO nRF54LM20A を Coprocessor として書き込み、ボーダールーター機器をエミュレートします。

:::tip

Connect ZBT-1、Connect ZBT-2、Home Assistant Yellow などの Thread ルーティングデバイスも使用できます。

:::

#### XIAO nRF54LM20A に RCP Coprocessor ファームウェアを書き込む

:::tip

このチュートリアルは VS Code と nRF Connect Extension を前提としています。これらに不慣れな場合は、[XIAO nRF54LM20A nRFConnect SDK Usage](http://localhost:3000/xiao_nrf54lm20a_getting_started/#nrfconnect-sdk-usage) を参照してください。

:::

1. Create a new application を選択し、copy a sample を選んで Coprocessor を検索し、プロジェクトを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_3.png" style={{width:800, height:'auto'}}/></div>

2. boards フォルダ配下にデバイスツリー設定ファイルを追加・変更します。競合を避けるために PMIC が使用する I2C 設定を無効にし、UART20 のボーレートを 1000000 に設定します。

ファイルパス：~/boards：

- xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay.

```dts
&uart20 {
	current-speed = <1000000>;
	status = "okay";
	hw-flow-control;
};

/ {
	chosen {
		zephyr,ot-uart = &uart20;
	};
};

&pmic_i2c {
	status = "disabled";
};
```

- xiao_nrf54lm20a_nrf54lm20a_cpuapp.conf.

```conf
CONFIG_SPI_NOR=n

# Increase Main and shell stack sizes to avoid stack overflow
# while using CRACEN
CONFIG_MAIN_STACK_SIZE=2048

CONFIG_I2C_GPIO=n
CONFIG_MFD_NPM13XX=n
CONFIG_NPM13XX_CHARGER=n
```

3. ビルドして設定を有効にします。

- プロジェクトを設定してビルドします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_4.png" style={{width:800, height:'auto'}}/></div>

- `west flash` を使用してファームウェアを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_5.png" style={{width:800, height:'auto'}}/></div>
<br/>
4. Home Assistant でデバイスを検出するには、Coprocessor ファームウェアを書き込んだ XIAO nRF54LM20A を USB-C 経由で Home Assistant Green に接続します。

- Add-on store を開き、Open Thread Border Router を見つけて設定します。XIAO nRF54LM20A という名前のデバイスが表示されるので、ボーレートなどのパラメータを設定し、設定を保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_6.png" style={{width:800, height:'auto'}}/></div>

- Info タブで Start を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_7.png" style={{width:800, height:'auto'}}/></div>

- Log で設定状況を確認できます。下図のように表示されていれば設定は成功です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_8.png" style={{width:800, height:'auto'}}/></div>

- Settings -> Thread に移動してデバイスを検出します。通常、`ha-thread-c6c8` という名前で表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_9.png" style={{width:800, height:'auto'}}/></div>

### Matter デバイスを設定する

1. 「Create a new application」を選択し、「copy a sample」を選び、Matter-Template を検索してプロジェクトを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_10.png" style={{width:800, height:'auto'}}/></div>

2. デバイスツリーファイルと設定ファイルを修正します。

- XIAO nRF54LM20A と Nordic 公式評価ボードのハードウェアの違いにより、デバイスツリーおよび設定ファイルの修正が必要です。公式評価ボードには外付け MX25R64 フラッシュチップが搭載されていますが、XIAO nRF54LM20A は PY25Q64 を使用しているため、それに応じた調整を行う必要があります。

- 追加するファイルは以下のとおりです：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_11.png" style={{width:800, height:'auto'}}/></div>

ファイルパス: ~/boards：

- xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay
- xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</summary>

```dts
/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

/ {
	aliases {
		/* Use watchdog wdt31 as the application watchdog */
		watchdog0 = &wdt31;
	};
};

&py25q64 {
	status = "disabled";
};

&wdt31 {
	status = "okay";
};
```

</details>

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>

```dts
/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

/ {
	chosen {
		nordic,pm-ext-flash = &py25q64;
	};

	aliases {
		/* Use watchdog wdt31 as the application watchdog */
		watchdog0 = &wdt31;
	};
};

&py25q64 {
	status = "okay";
};

&wdt31 {
	status = "okay";
};
```

</details>

ファイルパス: ~/sysbuild/mcuboot/boards：


<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.conf</summary>

```conf
#
# Copyright (c) 2025 Nordic Semiconductor ASA
#
# SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
#

CONFIG_HW_STACK_PROTECTION=n
CONFIG_BOOT_WATCHDOG_FEED=n

# Disable all debug features
CONFIG_ASSERT_VERBOSE=n
CONFIG_ASSERT_NO_FILE_INFO=y
CONFIG_PRINTK=n

# Bootloader size optimization to fit into 28 KB partition.
# These options can be safely disabled because in this configuration,
# the secondary slot resides in the internal RRAM, so features
# needed to handle the external flash are not needed.
CONFIG_SPI_NOR=n
CONFIG_SPI=n

# Increase the maximum number of sectors to 512 to fit the big image size (> 1024 kB).
CONFIG_BOOT_MAX_IMG_SECTORS=512

# Currently, without tickless kernel, the SYSCOUNTER value after the software
# reset is not set properly and due to that the first system interrupt is not called
# in the proper time - the SYSCOUNTER value is set to the value from before
# reset + 1. Hence, the reboot time increases more and more.
# To avoid it enable tickless kernel for mcuboot.
CONFIG_TICKLESS_KERNEL=y

```

</details>

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</summary>

```dts
/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

/* Disable the external flash, as it's not needed
 * for the configuration with secondary slot residing
 * in the internal RRAM.
 */
&py25q64 {
	status = "disabled";
};
```

</details>

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.conf</summary>

```conf
#
# Copyright (c) 2025 Nordic Semiconductor ASA
#
# SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
#

CONFIG_HW_STACK_PROTECTION=n
CONFIG_BOOT_WATCHDOG_FEED=n

# XIAO nRF54LM20A uses SPI NOR external flash (PY25Q64)
CONFIG_GPIO=y
CONFIG_SPI=y
CONFIG_SPI_NOR=y
CONFIG_SPI_NOR_SFDP_DEVICETREE=y
CONFIG_SPI_NOR_FLASH_LAYOUT_PAGE_SIZE=4096

# Increase the maximum number of sectors to 512 to fit the big image size (> 1024 kB).
CONFIG_BOOT_MAX_IMG_SECTORS=512

# Currently, without tickless kernel, the SYSCOUNTER value after the software
# reset is not set properly and due to that the first system interrupt is not called
# in the proper time - the SYSCOUNTER value is set to the value from before
# reset + 1. Hence, the reboot time increases more and more.
# To avoid it enable tickless kernel for mcuboot.
CONFIG_TICKLESS_KERNEL=y
```

</details>

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>

```conf
/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

/ {
	chosen {
		nordic,pm-ext-flash = &py25q64;
	};
};

&py25q64 {
	status = "okay";
};
```

</details>

プロジェクトパス ~/ :

<details>

<summary>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.yml</summary>

```yml
mcuboot:
  address: 0x0
  region: flash_primary
  size: 0xA000
mcuboot_pad:
  address: 0xA000
  region: flash_primary
  size: 0x800
app:
  address: 0xA800
  region: flash_primary
  size: 0x125800
mcuboot_primary:
  address: 0xA000
  orig_span: &id001
  - app
  - mcuboot_pad
  region: flash_primary
  size: 0x126000
  span: *id001
mcuboot_primary_app:
  address: 0xA800
  orig_span: &id002
  - app
  region: flash_primary
  size: 0x125800
  span: *id002
mcuboot_secondary:
  address: 0x130000
  orig_span: &id003
  - mcuboot_secondary_pad
  - mcuboot_secondary_app
  region: flash_primary
  size: 0xC0000
  span: *id003
mcuboot_secondary_pad:
  region: flash_primary
  address: 0x130000
  size: 0x800
# Compression rate 34.75%
mcuboot_secondary_app:
  region: flash_primary
  address: 0x130800
  size: 0xBF800
factory_data:
  address: 0x1F0000
  region: flash_primary
  size: 0x1000
settings_storage:
  address: 0x1F1000
  region: flash_primary
  size: 0xC000
```

</details>

<details>

<summary>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp.yml</summary>

```yml
mcuboot:
  address: 0x0
  region: flash_primary
  size: 0xD000
mcuboot_pad:
  address: 0xD000
  region: flash_primary
  size: 0x800
app:
  address: 0xD800
  region: flash_primary
  size: 0x1E2800
mcuboot_primary:
  address: 0xD000
  orig_span: &id001
  - app
  - mcuboot_pad
  region: flash_primary
  size: 0x1E3000
  span: *id001
mcuboot_primary_app:
  address: 0xD800
  orig_span: &id002
  - app
  region: flash_primary
  size: 0x1E2800
  span: *id002
factory_data:
  address: 0x1F0000
  region: flash_primary
  size: 0x1000
settings_storage:
  address: 0x1F1000
  region: flash_primary
  size: 0xC000
mcuboot_secondary:
  address: 0x0
  orig_span: &id003
  - mcuboot_secondary_pad
  - mcuboot_secondary_app
  region: external_flash
  size: 0x1E3000
  span: *id003
mcuboot_secondary_pad:
  region: external_flash
  address: 0x0
  size: 0x800
mcuboot_secondary_app:
  region: external_flash
  address: 0x800
  size: 0x1E2800
external_flash:
  address: 0x1E3000
  size: 0x5DB000
  device: PY25Q64
  region: external_flash
```

</details>

#### 追加ファイルの目的の説明

<table>
  <thead>
    <tr>
      <th>File</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td colspan="2"><strong>1. ボード Overlay ファイル (<code>boards/</code>)</strong><br/>
      XIAO nRF54LM20A 用のアプリケーションレベルのデバイスツリー Overlay です。</td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</code></td>
      <td>
        <strong>外付け Flash バリアント:</strong> PY25Q64 SPI NOR Flash を OTA セカンダリスロットとして有効化します；<br/>
        wdt31 ウォッチドッグを有効化します；<br/>
        Partition Manager が外付け Flash を認識できるように、<code>nordic,pm-ext-flash</code> を宣言します。
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</code></td>
      <td>
        <strong>内蔵 Flash バリアント:</strong> PY25Q64 を無効化します（BOM コストと消費電力を削減）；<br/>
        OTA セカンダリスロットを内蔵 RRAM に配置します；<br/>
        wdt31 ウォッチドッグを有効化します。
      </td>
    </tr>

    <tr>
      <td colspan="2"><strong>2. MCUboot 設定ファイル (<code>sysbuild/mcuboot/boards/</code>)</strong><br/>
      MCUboot は独立した Zephyr イメージであり、専用の Kconfig とデバイスツリー Overlay ファイルが必要です。</td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp.conf</code></td>
      <td>
        <strong>外付け Flash — Kconfig:</strong> PY25Q64 へアクセスするための SPI/SPI_NOR ドライバを有効化します；<br/>
        大きなファームウェア向けに <code>BOOT_MAX_IMG_SECTORS=512</code> を設定します；<br/>
        ティックレスカーネルを有効化します。
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</code></td>
      <td>
        <strong>外付け Flash — DTS Overlay:</strong> PY25Q64 を <code>pm-ext-flash</code> として有効化し、
        MCUboot が起動時に外付け Flash 上の OTA イメージへアクセスできるようにします。
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.conf</code></td>
      <td>
        <strong>内蔵 Flash — Kconfig:</strong> SPI/SPI_NOR を無効化します；<br/>
        40 KB パーティションに収まるよう MCUboot サイズを削減するため、デバッグ出力（<code>PRINTK=n</code>、<code>ASSERT=n</code>）を無効化します；<br/>
        <code>BOOT_MAX_IMG_SECTORS=512</code> を設定します。
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</code></td>
      <td>
        <strong>内蔵 Flash — DTS Overlay:</strong> PY25Q64 を無効化し、MCUboot が内蔵 Flash のみを使用するようにします。
      </td>
    </tr>

    <tr>
      <td colspan="2"><strong>3. 静的パーティションファイル (<code>pm_static_*.yml</code>)</strong><br/>
      Partition Manager 用の静的パーティションテーブルであり、MCUboot、APP、OTA、Factory Data、Settings 用の Flash 全体レイアウトを定義します。</td>
    </tr>
    <tr>
      <td><code>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp.yml</code></td>
      <td>
        <strong>外部フラッシュバリアント：</strong> <code>mcuboot_secondary</code>（OTA イメージ）は外部フラッシュ（PY25Q64）上に配置されます；<br/>
        APP の使用可能サイズは <code>0x1E2800</code>（約 1.9 MB）です。
      </td>
    </tr>
    <tr>
      <td><code>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.yml</code></td>
      <td>
        <strong>内部フラッシュバリアント：</strong> <code>mcuboot_secondary</code> は内部フラッシュ上に配置されます；<br/>
        MCUboot は <code>0xA000</code>（40 KB）に縮小されます；<br/>
        APP は <code>0x125800</code>（約 1.2 MB）に縮小されます；<br/>
        OTA イメージには圧縮が必要です。
      </td>
    </tr>

  </tbody>
</table>

#### デバイスへのフラッシュとダウンロード

- ビルド構成を進めます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_12_1.png" style={{width:800, height:'auto'}}/></div>

- 別の XIAO nRF54LM20A をターゲットデバイスとして選択し、OpenTerminal を起動して、`west flash` コマンドを使用してファームウェアを書き込みます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_12.png" style={{width:800, height:'auto'}}/></div>

### Home Assistant アプリを使用して Matter デバイスを接続する

1. Matter デバイスを接続し、デバイスの QR コードを生成します。

- NCS 開発環境で nRF Serial Terminal を開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_13.png" style={{width:800, height:'auto'}}/></div>
<br/>
- インターフェース上部にシリアルポートリストがポップアップ表示されるので、XIAO nRF54LM20A に対応するシリアルポートを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_14.png" style={{width:800, height:'auto'}}/></div>
<br/>
- Matter デバイス情報とペアリング用 QR コードリンクがシリアルログ経由で出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_15.png" style={{width:800, height:'auto'}}/></div>
<br/>
- QR コードリンクを直接タップするか、リンクをコピーして別途 Web ブラウザで開きます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_16.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Home Assistant アプリをダウンロードします。

- Matter デバイスの Home Assistant への追加はモバイルアプリ経由で行います。表示された QR コードをスキャンしてアプリをダウンロードします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_17.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. 設定画面に移動して Matter デバイスを追加し、ブラウザで生成された QR コードをスキャンしてペアリングを完了します。

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_18.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_19.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_20.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_21.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_22.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
</table>

4. Matter デバイス情報は Home Assistant のブラウザダッシュボード上で確認できます。

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_23.jpg" style={{width:600, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_24.png" style={{width:600, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_25.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
</table>

5. デバイスをダッシュボードに追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_26.png" style={{width:800, height:'auto'}}/></div>
<br/>
6. Matter デバイスのリアルタイムデータがダッシュボードに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_27.png" style={{width:800, height:'auto'}}/></div>

## まとめ

上記の手順に従って、2 つの XIAO nRF54LM20A モジュールを使用して Matter over Thread ネットワークを構築し、そのネットワークを Home Assistant に正常に接続しました。Matter プロトコルは、より幅広い種類のセンサーへのアクセスをサポートしていますが、上記のデモでは温度と湿度のデータ取得のみをシミュレートしています。他のセンサーデバイスを統合する際には、Matter 仕様内に対応する Cluster が定義されているかどうかを確認してください。詳細については、[Home Assistant Matter](https://www.home-assistant.io/integrations/matter) の公式ドキュメントを参照してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>