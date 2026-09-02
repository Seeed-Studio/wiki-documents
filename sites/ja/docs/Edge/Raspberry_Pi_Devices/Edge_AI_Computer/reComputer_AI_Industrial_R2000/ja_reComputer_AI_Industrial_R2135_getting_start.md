---
description: reComputer AI R2000 は Raspberry Pi 5 をベースにした高性能なエッジ AI コンピュータです。クアッドコア Arm Cortex-A76 プロセッサ、8GB RAM、M.2 SSD 対応、最大 26 TOPS を提供する Hailo-8 AI アクセラレーションモジュールを備え、リアルタイムで低レイテンシかつ高効率な AI 推論を実現します。AI 搭載ビデオ解析、マシンビジョン、インテリジェントエッジコンピューティングなど、幅広い AI アプリケーションに最適な選択肢です。
title: reComputer AI Industrial R2135 シリーズ入門ガイド
keywords:
  - Raspberry pi
  - エッジ AI コンピュータ
  - reComputer R2000
image: https://files.seeedstudio.com/wiki/AI-box-cm5/r2135.webp
slug: /recomputer_ai_industrial_r2135_getting_start
sku: 114993595,103990763,E2025081502,E2025081503
last_update:
  date: 05/06/2025
  author: Jiahao Li
createdAt: '2025-05-13'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/ja/recomputer_ai_industrial_r2135_getting_start/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial.jpeg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

**reComputer AI Industrial R2135** は **Raspberry Pi CM5** と **Hailo AI アクセラレータ** を搭載したコンパクトな **エッジ AI システム** であり、リアルタイムの **マルチチャネルビジョン処理** 向けに **26 TOPS** の性能を提供します。**クアッドコア Cortex-A76 CPU**、最大 **16GB RAM**、**64GB eMMC**、そして **多用途なインターフェース** を備え、**産業用 AI アプリケーション** へのシームレスな統合を実現します。

**24 時間 365 日の信頼性** を念頭に設計されており、**広い電圧入力範囲 (9-36V)**、**ハードウェアウォッチドッグ**、**堅牢な冷却機構** を備え、**-20°C 〜 65°C** の環境で安定動作します。**スマートファクトリー**、**監視**、**AIoT** に最適で、**強力な AI コンピューティング** を **エッジ** にもたらします。

## 特長

- **産業グレードの信頼性**: アルミニウム筐体と -20°C 〜 65°C の広い動作温度範囲、RTC、ハードウェアウォッチドッグにより、安定した 24 時間 365 日の運用を実現します。

- **強力なパフォーマンス**: Raspberry Pi CM5（クアッドコア Cortex-A76 CPU、最大 16GB RAM、64GB eMMC）を搭載。

- **高効率な AI コンピューティング**: Hailo-8 AI アクセラレータを搭載し、最大 26 TOPS の性能でマルチチャネル AI ビジョン処理を実現。

- **豊富な接続性**: 2x HDMI2.0、1x ギガビット Ethernet、2x USB 3.2、1x USB-C、デュアル M.2 スロット、および 4G/LoRa 拡張用 Mini-PCIe を搭載。

- **多彩なワイヤレスオプション**: Wi-Fi5、Bluetooth 5.0 を内蔵し、オプションで 4G LTE/LoRaWAN<sup>@</sup> に対応。

- **柔軟なストレージオプション**: PCIe3.0 デュアル M.2 スロットは、AI アクセラレータと SSD ストレージの両方をサポートします。

## 仕様

| **カテゴリ**              | **パラメータ**                                                                 |
|--------------------------|---------------------------------------------------------------------------------|
| **ハードウェア仕様**         |                                                                                 |
| **CPU**                   | Raspberry Pi Compute Module 5、2.4GHz クアッドコア 64 ビット Arm Cortex-A76          |
| **GPU**                   | Raspberry Pi Compute Module 5、VideoCore VII                                   |
| **AI プロセッサ**          | Hailo-8 M.2 アクセラレーションスティック、26 TOPS（毎秒テラ演算）           |
| **RAM**                   | 8GB SDRAM                                                                      |
| **eMMC**                  | 32GB                                                                            |
| **オペレーティングシステム**      | Raspbian、Debian                                                               |
| **システム仕様**           |                                                                                 |
| **電源入力**           | DC 9V~36V、2 ピン端子台                                                 |
| **ビデオデコーダ**         | 4Kp60 HEVC デコーダ                                                              |
| **インターフェース**             |                                                                                 |
| **Ethernet**              | 1x 10/100/1000 Mbps、RJ45                                                       |
| **USB**                   | 2x USB 3.2 ポート（USB-A）；1x USB 2.0 ポート（デバッグ/OS 更新用 USB-C）          |
| **ディスプレイ**               | 2x 標準 HDMI ポート、HDMI 2.0                                               |
| **M.2 スロット**              | 1x USB 3.0 to M.2（M-key 2280）；1x PCIe 3.0 to M.2（M-key 2242、Hailo-8 AI アクセラレータ搭載） |
| **Mini-PCIe**             | 4G/LoRaWAN モジュール用 Mini-PCIe ×1                                              |
| **SIM カード**              | 標準 SIM カードスロット ×1                                                       |
| **LED**                   | 3x LED：Power / ACT / 4G                                                       |
| **ボタン / スイッチ**       | リセットボタン ×1；ブートスイッチ ×1                                                 |
| **無線通信**|                                                                                 |
| **Wi-Fi 2.4/5.0 GHz**     | オンチップ Wi-Fi 5                                                                 |
| **BLE 5.0**               | オンチップ BLE 5.0                                                                 |
| **4G セルラー**           | 4G LTE（オプション）                                                               |
| **LoRa®**                 | USB LoRa® / SPI LoRa®（オプション）                                               |
| **周囲条件**    |                                                                                 |
| **保護等級**    | IP40                                                                            |
| **動作温度** | -20°C 〜 65°C                                                                   |
| **動作湿度**    | 10% 〜 95% RH                                                                   |
| **アンテナ**               | アンテナホール ×3                                                                |
| **その他**                |                                                                                 |
| **ウォッチドッグ**              | ハードウェアウォッチドッグ                                                               |
| **RTC**                   | 高精度 RTC                                                               |
| **セキュリティ**              | 暗号化チップ TPM2.0 / ATECC608A（オプション）                                   |
| **放熱**      | ヒートシンク＋ファン                                                               |
| **保証**              | 2 年                                                                         |
| **製品ライフタイム**   | 2036 年 12 月まで                                                             |
| **機構**            |                                                                                 |
| **寸法 (W x H x D)**| 130mm × 93mm × 55.5mm                                                           |
| **筐体**             | アルミニウム合金ケース（PC サイドパネル付き）                                      |
| **マウント方法**              | DIN レール / 壁掛け                                                           |
| **重量 (正味)**          | 688g                                                                            |
| **注意事項**             | 「オプション」と記載されている項目は別途購入が必要です（アクセサリ一覧を参照してください）。 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_industrial_dimension.jpeg" style={{width:800, height:'auto'}}/></div>

## Hailo の紹介

### ハードウェアの紹介

[Hailo](https://hailo.ai/) は、エッジデバイス上での高性能ディープラーニングアプリケーション向けに特化した最先端の AI プロセッサを提供しています。同社のソリューションは、高度な AI アクセラレータとビジョンプロセッサにより、エッジにおける次世代の生成 AI を、認識処理や映像強調とともに実現することに重点を置いています。そして Hailo-8 NPU アクセラレータを搭載し 26 TOPs の AI 性能を提供する reComputer_R2000 は、YOLOv8s で 200 FPS 超を達成することが可能です。

### ソフトウェアの紹介

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI Software Suite は、ハードウェアアクセラレータ上で AI モデルを効率的に実行するための強力なツール群を提供します。既存のディープラーニングフレームワークとシームレスに統合できるよう設計されており、開発者にスムーズなワークフローを提供します。このプロセスでは、まず Model Build Environment で ONNX ファイルから HEF（Hailo Executable Binary File）を生成します。生成された HEF ファイルは推論マシン（Runtime Environment）に転送され、そこで HailoRT API を用いて推論を実行するために使用されます。提供されているスクリプトにより、Model Build Environment 内で ONNX ファイルを HEF ファイルへ変換することができます。

> **Note:**
> **Hailo NPU の使用例についてさらに詳しく知りたい場合は、この [リンク](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero) をクリックしてください。**

## ハードウェア概要

### インターフェース概要

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-recomputer.png)

GPIO のマッピングとオフセットを確認するには、次のコマンドを使用してください：

```
cat /sys/kernel/debug/gpio
```

<details>
<summary>GPIO 情報</summary>

```bash
gpiochip11: GPIOs 512-526, parent: platform/107d517c00.gpio, gpio-brcmstb@107d517c00:
 gpio-512 (RP1_SDA             )
 gpio-513 (RP1_SCL             )
 gpio-514 (RP1_RUN             |RP1 RUN pin         ) out hi 
 gpio-515 (SD_IOVDD_SEL        )
 gpio-516 (SD_PWR_ON           |sd-vcc-reg          ) out hi 
 gpio-517 (ANT1                |ant1                ) out hi 
 gpio-518 (ANT2                |ant2                ) out lo 
 gpio-519 (-                   )
 gpio-520 (2712_WAKE           )
 gpio-521 (2712_STAT_LED       |ACT                 ) out hi ACTIVE LOW
 gpio-522 (-                   )
 gpio-523 (-                   )
 gpio-524 (PMIC_INT            )
 gpio-525 (UART_TX_FS          )
 gpio-526 (UART_RX_FS          )

gpiochip12: GPIOs 527-532, parent: platform/107d517c00.gpio, gpio-brcmstb@107d517c20:
 gpio-527 (HDMI0_SCL           )
 gpio-528 (HDMI0_SDA           )
 gpio-529 (HDMI1_SCL           )
 gpio-530 (HDMI1_SDA           )
 gpio-531 (PMIC_SCL            )
 gpio-532 (PMIC_SDA            )

gpiochip10: GPIOs 533-564, parent: platform/107d508500.gpio, gpio-brcmstb@107d508500:
 gpio-533 (-                   )
 gpio-534 (2712_BOOT_CS_N      |spi10 CS0           ) out hi ACTIVE LOW
 gpio-535 (2712_BOOT_MISO      )
 gpio-536 (2712_BOOT_MOSI      )
 gpio-537 (2712_BOOT_SCLK      )
 gpio-538 (-                   )
 gpio-539 (-                   )
 gpio-540 (-                   )
 gpio-541 (-                   )
 gpio-542 (-                   )
 gpio-543 (-                   )
 gpio-544 (-                   )
 gpio-545 (-                   )
 gpio-546 (-                   )
 gpio-547 (-                   )
 gpio-548 (-                   )
 gpio-549 (-                   )
 gpio-550 (-                   )
 gpio-551 (-                   )
 gpio-552 (-                   )
 gpio-553 (PWR_GPIO            |pwr_button          ) in  hi ACTIVE LOW
 gpio-554 (2712_G21_FS         )
 gpio-555 (-                   )
 gpio-556 (-                   )
 gpio-557 (BT_RTS              )
 gpio-558 (BT_CTS              )
 gpio-559 (BT_TXD              )
 gpio-560 (BT_RXD              )
 gpio-561 (WL_ON               |wl-on-reg           ) out hi 
 gpio-562 (BT_ON               |shutdown            ) out hi 
 gpio-563 (WIFI_SDIO_CLK       )
 gpio-564 (WIFI_SDIO_CMD       )

gpiochip13: GPIOs 565-568, parent: platform/107d508500.gpio, gpio-brcmstb@107d508520:
 gpio-565 (WIFI_SDIO_D0        )
 gpio-566 (WIFI_SDIO_D1        )
 gpio-567 (WIFI_SDIO_D2        )
 gpio-568 (WIFI_SDIO_D3        )

gpiochip0: GPIOs 569-622, parent: platform/1f000d0000.gpio, pinctrl-rp1:
 gpio-569 (ID_SDA              )
 gpio-570 (ID_SCL              )
 gpio-571 (GPIO2               )
 gpio-572 (GPIO3               )
 gpio-573 (GPIO4               )
 gpio-574 (GPIO5               )
 gpio-575 (GPIO6               )
 gpio-576 (GPIO7               )
 gpio-577 (GPIO8               |spi0 CS0            ) out hi ACTIVE LOW
 gpio-578 (GPIO9               )
 gpio-579 (GPIO10              )
 gpio-580 (GPIO11              )
 gpio-581 (GPIO12              )
 gpio-582 (GPIO13              )
 gpio-583 (GPIO14              )
 gpio-584 (GPIO15              )
 gpio-585 (GPIO16              )
 gpio-586 (GPIO17              )
 gpio-587 (GPIO18              )
 gpio-588 (GPIO19              )
 gpio-589 (GPIO20              )
 gpio-590 (GPIO21              )
 gpio-591 (GPIO22              )
 gpio-592 (GPIO23              )
 gpio-593 (GPIO24              )
 gpio-594 (GPIO25              )
 gpio-595 (GPIO26              )
 gpio-596 (GPIO27              )
 gpio-597 (PCIE_PWR_EN         )
 gpio-598 (FAN_TACH            )
 gpio-599 (HOST_SDA            )
 gpio-600 (HOST_SCL            )
 gpio-601 (ETH_RST_N           |phy-reset           ) out hi ACTIVE LOW
 gpio-602 (PCIE_DET_WAKE       )
 gpio-603 (CD0_IO0_MICCLK      |cam0_reg            ) out lo 
 gpio-604 (CD0_IO0_MICDAT0     )
 gpio-605 (RP1_PCIE_CLKREQ_N   )
 gpio-606 (ETH_IRQ_N           )
 gpio-607 (SDA0                )
 gpio-608 (SCL0                )
 gpio-609 (-                   )
 gpio-610 (-                   )
 gpio-611 (USB_VBUS_EN         )
 gpio-612 (-                   )
 gpio-613 (RP1_STAT_LED        |PWR                 ) out hi ACTIVE LOW
 gpio-614 (FAN_PWM             )
 gpio-615 (-                   |micclk1_hog         ) out hi 
 gpio-616 (2712_WAKE           )
 gpio-617 (-                   |micdat1_hog         ) out hi 
 gpio-618 (-                   )
 gpio-619 (-                   )
 gpio-620 (-                   )
 gpio-621 (-                   )
 gpio-622 (-                   )
```

</details>

### メインボード概要

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_Mainboard.jpeg" style={{width:800, height:'auto'}}/></div>

### 電源ブロック図

![image1](https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_power_diagram.png)

reComputer AI Industrial R2135 は DC 9V～36V の広い入力電圧範囲に対応し、内部では多段の DCDC コンバータを用いて 5V、3.3V、1.2V、1.0V の電源レールを生成します。これらの電圧は、コアプロセッサ、USB ポート、HDMI、M.2 拡張、オーディオ、RTC などの周辺モジュールに安定した電力を供給し、さまざまなアプリケーションシナリオにおいて信頼性の高い動作を実現します。

##### 2 ピン電源端子

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_Two_Pin_Terminal.jpg" style={{width:150, height:'auto'}}/></div>

reComputer AI Industrial R2135 は 9～36V の端子 DC 電圧で給電されます。電源は 2 ピンの電源端子ブロックコネクタを介して接続します。reComputer AI Industrial R2135 をアース接続するには、電源端子左上にあるネジにアース線を固定します。

#### 消費電力

Seeed Studio のラボで測定した reComputer AI Industrial R2135 の消費電力については、以下の表を参照してください。なお、この値はあくまで参考値であり、テスト方法や環境によって結果が変動する場合があります。

| **状態**        | **電圧** | **電流** | **消費電力** |**説明** |
|----------------------|----------------------|----------------------|----------------------|----------------------|
|**シャットダウン**|12V   |   1.1mA|   0.013W|   シャットダウンおよび電源オフ状態での静的消費電力テスト。|
|**アイドル**|12V|208mA|2.42W|reComputer AI Industrial R2135 デバイスに 24V 電源を供給し、テストプログラムを実行していない状態での入力電流を測定。|
|**フルロード**|12V|2.08A|24.2W| `stress -c 4` コマンドを使用して CPU をフルロードで動作させるように設定。USB には 1A の負荷を接続。|

#### 電源オンおよび電源オフ

reComputer AI Industrial R2135 にはデフォルトで電源ボタンは搭載されておらず、電源を接続するとシステムは自動的に起動します。シャットダウンする際は、オペレーティングシステム上でシャットダウンオプションを選択し、システムが完全に停止するまで待ってから電源を切ってください。システムを再起動するには、電源を再接続するだけでかまいません。

### ブロック図

![image1](https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_block_diagram.png)

## インターフェース

### インターフェースの説明

| 種類           | 説明                                       |
|----------------|---------------------------------------------------|
| **Ethernet**   | 1x 10/100/1000 Mbps（POE* 対応）              |
| **USB**        | 2x USB-A 3.2 ホスト、1x USB-C 2.0（OS 書き込み用） |
| **HDMI**       | 2x HDMI 2.0                                      |
| **オーディオ**      | 1x 3.5mm オーディオ出力/入力                      |
| **SIM カードスロット** | 1x SIM カードスロット、標準 SIM カード対応    |
| **M.2 スロット**   | 2x M.2 スロット、M.2 NVMe SSD および AI アクセラレーション対応 |
| **Mini-PCIe**  | 1x Mini PCIe スロット                                |
| **LED**        | 3x LED インジケータ                                |
| **リセットボタン** | 1x リセットボタン                                |
| **ブートスイッチ**  | 1x ブートスイッチ                                 |

### LED インジケータの状態

reComputer AI Industrial R2135 には 3 つの LED インジケータが搭載されており、装置の動作状態を示します。各 LED の具体的な機能と状態については、以下の表を参照してください。

| 名称  | 色            | 状態 | 説明                                                                                                                                              |
|-------|-----------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **PWR**  | 緑           | On     | デバイスが電源に接続されています。                                                                                                                |
|        |                 | Off    | デバイスが電源に接続されていません。                                                                                                                    |
| **ACT**  | オレンジ          |        | Linux では、このピンは eMMC アクセスを示すために点滅します。ブート中にエラーが発生した場合、この LED はエラーパターンで点滅します（Raspberry Pi ドキュメントを参照）。 |
| **USER** | 緑/赤/青  |        | ユーザーによって定義する必要があります。                                                                                                                            |
| **LTE**  | 緑           | On     | ダイヤルアップが成功し、接続が正常です。                                                                                                |
|        |                 | Off    | LTE 信号が接続されていないか、デバイスの電源が入っていません。                                                                                             |

### ACT ステータステーブル

| 長い点滅 | 短い点滅 | 状態                               |
|--------------|---------------|--------------------------------------|
| 0            | 3             | 一般的なブート失敗              |
| 0            | 4             | `start*.elf` が見つかりません                 |
| 0            | 7             | カーネルイメージが見つかりません               |
| 0            | 8             | SDRAM 障害                        |
| 0            | 9             | SDRAM 不足                   |
| 0            | 10            | HALT 状態                        |
| 2            | 1             | パーティションが FAT ではありません                    |
| 2            | 2             | パーティションからの読み取りに失敗        |
| 2            | 3             | 拡張パーティションが FAT ではありません           |
| 2            | 4             | ファイル署名/ハッシュの不一致 - Pi 4  |
| 4            | 4             | 非対応のボードタイプ               |
| 4            | 5             | 致命的なファームウェアエラー                 |
| 4            | 6             | 電源障害タイプ A                 |
| 4            | 7             | 電源障害タイプ B                 |

ACT LED が規則的な 4 回点滅パターンで点滅する場合、`bootcode(start.elf)` を見つけることができません。
ACT LED が不規則なパターンで点滅する場合は、ブートが開始されています。
ACT LED が点滅しない場合、EEPROM コードが破損している可能性があります。何も接続しない状態でもう一度試して確認してください。詳細については Raspberry Pi フォーラムを参照してください。
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums.
詳細については、[Raspberry Pi forum](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151) を参照してください。

ユーザー LED を制御するには、Linux カーネルが提供する疑似ファイルシステムである sysfs の使用を推奨します。sysfs は、さまざまなカーネルサブシステム、ハードウェアデバイス、およびそれらに関連するドライバに関する情報を公開します。ReComputer R2000 では、ユーザー LED インターフェースを 3 つのデバイスファイル（`led-red`、`led-blue`、`led-green`）に抽象化しており、これらのファイルを操作するだけで LED を簡単に制御できます。以下に例を示します。

1. 赤色 LED を点灯するには、ターミナルで次のコマンドを入力してください。

```
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 赤色 LED を消灯するには、ターミナルで次のコマンドを入力してください。

```
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 赤色 LED と緑色 LED を同時に点灯させるには、ターミナルで次のコマンドを入力してください。

```
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### ブートスイッチ

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

reComputer AI Industrial R2135 のブートスイッチは CM5 の `nRPI_BOOT` ピンに接続されています。このスイッチにより、ユーザーは eMMC と USB のどちらをブートソースとして選択するかを切り替えることができます。通常モードでは、スイッチを「BOOT」ラベル側とは反対側に設定し、システムを eMMC から起動させます。逆に、システムイメージを書き込む必要がある場合は、スイッチを「BOOT」ラベル側に切り替え、Type-C USB インターフェースからシステムを起動できるようにします。

| スイッチ位置 | モード         | 説明      | nRPI-BOOT |
|----------------|--------------|-----------------|-----------|
|      <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/>            | 通常モード  | eMMC から起動   | Low       |
|      <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>             | 書き込みモード   | USB から起動    | High      |

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R2000 には 1 つの USB Type-C ポートと 2 つの USB Type-A ポートが搭載されています。それぞれの機能と説明については、以下の表を参照してください。

| **タイプ**   | **数量** | **プロトコル** | **機能** | **説明**                                              |
| ---------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| **Type-C** | *1           | USB2.0       | USB-Device   | シリアルポートデバッグ、イメージ書き込みなどに使用。          |
| **Type-A** | *2           | USB2.0       | USB-Host     | フラッシュドライブ、<br /> USB キーボードやマウスなど、さまざまな USB デバイスを接続。 |

USBハブが検出されているかどうかを確認するには、**lsusb** コマンドを実行します。このコマンドは、ハブを含む接続されているすべてのUSBデバイスを一覧表示します。

```shell
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

このコマンドを実行すると、システムに接続されているUSBデバイスに関する情報が表示され、接続されているUSBハブも含まれます。

USBハブが正常に動作している場合、**lsusb** コマンドの出力にその詳細が表示されます。表示されない場合は、ハブまたはシステムとの接続に問題がある可能性があります。そのような場合は、USBハブまたはその接続をトラブルシューティングする必要があります。

### SIMスロット（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_SIM.jpeg" style={{width:800, height:'auto'}}/></div>

reComputer AI Industrial R2135 シリーズ機器には内部に標準SIMカードスロットが搭載されており、標準SIMカードを装着して4G信号を取得するために使用されます。
標準SIM、Micro SIM、Nano SIMカードのサイズの違いは次のとおりです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/sim_card.jpg" /></div>

> **Note**  
> **reComputer AI Industrial R2135** の標準バージョンには4Gモジュールは付属していません。  
> 4G機能が必要な場合は、別途4Gモジュールを購入する必要があります。  
> 詳細については、**「2.3.2 4G Module」** セクションを参照してください。

### M.2スロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_M2_1.jpeg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_M22.jpeg" style={{width:800, height:'auto'}}/></div>

reComputer AI Industrial R2135 には、NVMe M.2 2280 SSDおよびAIアクセラレーション用の2つのM.2 Key-Mスロット（NVMe1およびNVMe2）が搭載されており、高速なストレージ拡張を可能にし、システムの性能と容量を向上させることができます。

● NVMe1（下側スロット）：M.2 2280サイズをサポート；

● NVMe2（上側スロット）：Hailo-8 AIアクセラレータをプリインストール

● PCIeベースのNVMe SSDのみサポートします。SATA SSDはサポートされません。

> **Note**  
> SSDカードには主に2つの用途があります。  
>
> 1. **大容量ストレージ** – 大量のデータを保存するためだけに使用します。  
> 2. **イメージ入りブートドライブ** – ストレージとして使用すると同時に、SSDに保存されたイメージからシステムをブートするために使用します。  
>  
> 市販されているすべてのSSDカードがブート機能をサポートしているわけではありません。  
> SSDをブートドライブとして使用する予定で、互換性が不明な場合は、**1TB SSD（SKU 112990267）** を推奨します。このモデルはブート可能であることがテストおよび検証されており、互換性の問題を回避し、試行錯誤のコストを削減するのに役立ちます。

### Mini-PCIeスロット

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_minipcie_1.jpeg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_minipcie_2.jpeg" style={{width:800, height:'auto'}}/></div>

reComputer AI Industrial R2135 には、主に4G LTEモデムモジュール（例：Quectel EC20/EC25）向けに設計されたMini PCIeスロットが搭載されています。

● サポート：標準Mini PCIeモジュール

● 信号インターフェース：USB 2.0、UART、SIMカード、RESET など

● SIMカードはオンボードのSIMカードソケットに接続されています

● 制御信号：W_DISABLE、PERST、WAKE をサポート

● 信頼性向上のためのESD保護を内蔵

| スロット        | サポートされるプロトコル     |
|-------------|------------------------|
| Mini-PCIe   | 4G LTE                 |
|             | USB LoRa®              |

### リセットホール

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_reset.jpeg" style={{width:800, height:'auto'}}/></div>

reComputer AI Industrial R2135 のリセットホール内にはミニプッシュボタンスイッチがあります。このボタンを細い物で押すことで、CM4をリセットできます。このピンがHighのときはCM4が起動していることを示し、このピンをLowにするとモジュールがリセットされます。

### Ethernet RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_ETH0.png" /></div>

| 名称 | 種類                         | 速度             | PoE           |
|------|------------------------------|--------------------|---------------|
| ETH0 | CM5 ネイティブ ギガビットEthernet | 10/100/1000 Mbit/s | 非対応  |

reComputer AI Industrial R2135 には標準RJ45ギガビットEthernetポート（GbE）が搭載されており、信号品質とEMI保護を向上させるためにMagJack一体型トランスを使用しています。

● インターフェース規格：IEEE 802.3 10/100/1000Mbps；
● 4対の差動ペア（TX/RX）を備えたギガビットPHYを使用；
● オートネゴシエーションおよび全二重通信をサポート；
● コモンモードチョーク、ESD保護、および絶縁コンデンサを内蔵；
● オンボードの緑/黄LEDによりリンクおよびアクティビティ状態を表示。

### HDMI

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_HDMI.jpeg" /></div>

reComputer AI Industrial R2135 には標準HDMI Type-Aポートが2つ（HDMI0およびHDMI1）搭載されており、高解像度ビデオ出力をサポートします。システムは最大4K 60Hzの表示解像度に対応し、2系統のHDMI同時出力をサポートするため、マルチディスプレイ用途に適しています。

### RTC

reComputer AI Industrial R2135 にはオンボードRTC（PCF8563T）が搭載されており、電源のオン/オフをまたいで時刻を保持し、停電時でも時刻管理機能を維持できるようになっています。

以下のコマンドでRTC部分をテストできます。

```bash
# 1.Disable automatic time synchronization:
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
# Set the time :
sudo hwclock --set --date "2024-11-12 12:00:00"
# Synchronize the RTC time to the system:
sudo hwclock --hctosys
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/RTC1.png" /></div>

その後、R2000の電源を数分間オフにし、再度電源を入れてから、次のコマンドを使用してクロックを再確認します。

```bash
# 4.Check the RTC time:
sudo hwclock -r
```

結果から、システムの電源がオフになっている間もRTCモジュールが動作し続けていることがわかります。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/RTC2.png" /></div>

### ウォッチドッグ

reComputer AI Industrial R2135 には独立したハードウェアウォッチドッグ回路が搭載されており、システムが異常クラッシュした場合に自動的に再起動を行います。ウォッチドッグ回路はRTCを介して実装されており、1〜255秒の柔軟な給電時間を設定できます。

以下のコマンドでウォッチドッグ部分をテストできます。

``` bash
# 1.Install the watchdog software:
sudo apt install watchdog
# 2. Edit the watchdog configuration file:
sudo nano /etc/watchdog.conf
```

次に、以下のように設定を変更します。

<details>
<summary>watchdog.conf</summary>

``` bash
watchdog-device= /dev/watchdog
# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.
watchdog-timeout = 120
# If your watchdog trips by itself when the first timeout interval
# elapses then try uncommenting the line below and changing the
# value to 'yes'.
#watchdog-refresh-use-settimeout = auto
# If you have a buggy watchdog device (e.g. some IPMI implementations)
# try uncommenting this line and setting it to 'yes'.
#watchdog-refresh-ignore-errors = no
# ====================== Other system settings ========================
#
# Interval between tests. Should be a couple of seconds shorter than
# the hardware time-out value.
interval= 15
max-load-1= 24
#max-load-5= 18
#max-load-15= 12
realtime= yes
priority= 1
```

</details>

```bash
# 3.Ensure the watchdog service is running:
sudo systemctl start watchdog
# This command triggers a kernel crash and should cause the watchdog to reboot the system.
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

以下の図に示すように、コマンドを入力した後にSSH接続が失われており、ウォッチドッグが有効になってreComputer AI Industrial R2135を再起動したことを示しています。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/watchdog.png" /></div>

### M.2 AIアクセラレーション

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_industrial_accelerator.jpeg" style={{width:800, height:'auto'}}/></div>

reComputer AI Industrial R2135 にはHailo-8 AIアクセラレータモジュールが搭載されており、NVMe2 M.2スロットにプリインストールされています。これにより、リアルタイムのマルチチャネルAIビジョン処理のために26 TOPSの演算能力を提供します。

以下のコマンドでウォッチドッグ部分をテストできます。

> Note:
> この機能をテストするには、reComputer AI Industrial R2135 に画面を接続する必要があります。

```bash
#Test whether the Hailo hardware and its accompanying software have been successfully installed
hailortcli fw-control identify
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/hailo1.png" /></div>

```bash
# Verify whether the pre-installed demo is functional.
cd hailo-rpi5-examples
# Install necessary resources
./install.sh
# Activate the python environment
source setup_env.sh
# Run object detection
python basic_pipelines/detection_simple.py
```

結果は次のとおりです。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/hailo2.png" /></div>

## オプションインターフェースおよびモジュール

reComputer AI Industrial R2135 は豊富な拡張モジュールとアクセサリをサポートしており、幅広いシナリオや要件に対応できます。reComputer AI Industrial R2135 のカスタマイズにご興味がある場合は、詳細について odm@seeed.cc までお問い合わせください。
アクセサリおよびオプションモジュールの一覧は次のとおりです。

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>備考</th>
        <th>項目</th>
        <th>製品名</th>
        <th>SKU</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3">これら3つのモジュールは、LoRaWAN® 機能を使用するために一緒に使用する必要があります</td>
        <td>LoRa® モジュール</td>
        <td>地域オプション LoRaWAN ゲートウェイモジュール (USB) - US915</td>
        <td>114992629</td>
      </tr>
      <tr>
        <td></td>
        <td>地域オプション LoRaWAN ゲートウェイモジュール (USB) - US915</td>
        <td>114992991</td>
      </tr>
      <tr>
        <td></td>
        <td>地域オプション LoRaWAN ゲートウェイモジュール (USB) - EU868</td>
        <td>114992628</td>
      </tr>
      <tr>
        <td>このアクセサリは WiFi 機能に必要です</td>
        <td>Wi-Fi/BLE アンテナ</td>
        <td>Raspberry Pi Compute Module 4 アンテナキット</td>
        <td>114992364</td>
      </tr>
      <tr>
        <td rowspan="7">4G 機能には 4G モジュールと 4G アンテナが、GPS 機能には 4G モジュールと GPS アンテナが必要です</td>
        <td>4G モジュール</td>
        <td>LTE Cat 4 EC25-AFXGA-mini-PCIe モジュール - 北米向け</td>
        <td>113991134</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-EUXGR-mini-PCIe モジュール - EMEA およびタイ向け</td>
        <td>113991135</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-AUXGR-mini-PCIe モジュール - オーストラリア向け</td>
        <td>113991174</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-EFA-mini-PCIe モジュール - タイ向け</td>
        <td>113991214</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-EMGA-mini-PCIe モジュール - マレーシア向け</td>
        <td>113991234</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-JFA-mini-PCIe モジュール</td>
        <td>113991296</td>
      </tr>
      <tr>
        <td>4G アンテナ</td>
        <td>4G モジュール用 4G アンテナキット</td>
        <td>110061502</td>
      </tr>
      <tr>
        <td></td>
        <td>GPS アンテナ</td>
        <td>EC25 4G モジュール用 GPS アンテナキット</td>
        <td>110061521</td>
      </tr>
      <tr>
        <td></td>
        <td>暗号化チップ</td>
        <td>Infineon SLB9670 搭載 TPM2.0 モジュール</td>
        <td>114993114</td>
      </tr>
      <tr>
        <td rowspan="5"></td>
        <td>SSD カード</td>
        <td>NVMe M.2 2280 SSD 2TB</td>
        <td>114993467</td>
      </tr>
      <tr>
        <td></td>
        <td>NVMe M.2 2280 SSD 1TB</td>
        <td>112990267</td>
      </tr>
      <tr>
        <td></td>
        <td>512GB NVMe M.2 PCIe Gen3x4 2280 内蔵 SSD</td>
        <td>112990247</td>
      </tr>
      <tr>
        <td></td>
        <td>256GB NVMe M.2 PCIe Gen3x4 2280 内蔵 SSD</td>
        <td>112990246</td>
      </tr>
      <tr>
        <td></td>
        <td>128GB NVMe M.2 PCIe Gen3x4 2280 内蔵 SSD</td>
        <td>112990226</td>
      </tr>
    </tbody>
  </table>
</div>

### Wi-Fi/BlueTooth

reComputer AI Industrial R2135 は、オンボード Wi-Fi/BLE バージョンを備えた CM5 を搭載しており、CM5 と同じ Wi-Fi/BLE パラメータを提供します。詳細なパラメータ情報については、Raspberry Pi 公式ウェブサイトを参照してください。

以下のコマンドを使用して WiFi モジュールをテストします：

```bash
sudo iwlist wlan0 scan
```

結果は次の図のように表示されます。
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/wifi.png" /></div>

以下のコマンドを使用して BlueTooth モジュールをテストします：

```bash
sudo bluetoothctl
scan on
```

結果は次の図のように表示されます。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/bluetooth.png" /></div>

### LoRa® USB モジュール

Mini-PCIe スロットは、USB プロトコルを使用する LoRa® モジュールもサポートします。Seeed Studio の WM1302 モジュールは、reComputer AI Industrial R2135 との互換性が完全にテストされています。

以下のようにして LoRa® USB モジュールをテストできます：

```bash
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo nano ./libloragw/inc/loragw_i2c.h
```

`#define I2C_DEVICE "/dev/i2c-1"` を `#define I2C_DEVICE "/dev/i2c-3"` に変更します。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora1.png" /></div>

```bash
# compile the code
sudo make
```

次に、設定コードを修正します：

```bash
sudo nano ./tools/reset_lgw.sh
```

ピン設定を更新します：
<details>
<summary>reset_lgw.sh</summary>

```bash
SX1302_RESET_PIN=580   # SX1302 reset
SX1302_POWER_EN_PIN=578 # SX1302 power enable
SX1261_RESET_PIN=579   # SX1261 reset (LBT / Spectral Scan)
```

</details>
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora2.png" /></div>

```bash
# Copy the reset_lgw.sh script
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
# Check the device name
ls /dev/spidv10.0
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora3.png" /></div>

```bash
cd ~/sx1302_hal/packet_forwarder
sed -i 's/spidev0.0/spidev10.0/g'  global_conf.json.sx1250.US915.USB
echo 1 > /sys/class/gpio/gpio580/value
./LoRa_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora4.png" /></div>

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora5.jpg" /></div>

### 4G モジュール

reComputer AI Industrial R2135 メインボードには 1 つの Mini-PCIe スロットがあり、この Mini-PCIe スロットは USB プロトコルを使用する 4G モジュールをサポートします。Quectel の EC25 4G モジュールは、reComputer AI Industrial R2135 との互換性が完全にテストされています。

> 注記:
> reComputer AI Industrial R2135 に 4G モジュールが取り付けられていることを確認してください

以下のコマンドを使用して 4G モジュールをテストします：

```bash
# Check the information of the 4g module
ifconfig
```

結果は次の図のように表示されます。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g1.png" /></div>

```bash
# Check the information of the usb0 ethernet port
ip link show usb0
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g2.png" /></div>

```bash
# Start usb0 ethernet port
sudo ip link set dev usb0 up
# Request an IP address from the DHCP server on the network and assign it to the usb0 interface
sudo dhclient usb0
```

次に、デフォルトルーターに ping できるかテストします

```bash
ping 192.168.225.1
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g3.png" /></div>

```bash
# ping baidu.com use usb0
ping -4 -I usb0 www.baidu.com 
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g4.png" /></div>

### TPM 2.0

TPM（Trusted Platform Module）は、ハードウェアベースの暗号機能を提供することでコンピュータのセキュリティを強化するよう特別に設計されたハードウェアチップです。暗号鍵、証明書、パスワードなどの機密データを安全に保存し、セキュアブート、ディスク暗号化（例：BitLocker）、認証などのシナリオで一般的に使用されます。

以下のコマンドで reComputer AI Industrial R2135 上の TPM を確認します：

```bash
ls /dev | grep tpm
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/tpm1.png" /></div>

```bash
# Test tpm as following:
sudo tpm2_createprimary -C o -c primary.ctx
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/tpm2.png" /></div>

### SSD

reComputer AI Industrial R2135 は、NVMe1 PCIe スロット（J8）を使用して 2280 NVMe SSD をサポートします。

> **Note**
>
> SSD カードには主に 2 つの用途があります：
>
> 1. **大容量ストレージ：** SSD カードは大容量ストレージのニーズに利用できます。  
> 2. **イメージを用いたブートドライブ：** SSD カードは、大容量ストレージとしてだけでなく、システムイメージを保存してカードから直接ブートすることで、ブートドライブとしても機能できます。  
>
> 市場に出回っているすべての SSD カードがブート機能をサポートしているわけではないことに注意が必要です。SSD をブートドライブとして使用する予定で、どのモデルを選べばよいか分からない場合は、当社でテスト済みの 1 TB SSD（SKU 112990267）をお勧めします。このモデルはブート機能が検証されており、互換性リスクを軽減し、試行錯誤のコストを最小限に抑えます。  

以下のコマンドを使用して SSD を確認できます：

```bash
sudo fdisk -l | grep sda
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/ssd1.png" /></div>

## アプリケーション

### Frigate

Frigate は、AI を使用したリアルタイム物体検出用に設計されたオープンソースの NVR（Network Video Recorder）です。既存のカメラと統合され、TensorFlow や Coral などの機械学習モデルを使用して、ビデオフィード上で物体検出を行います。Frigate は低遅延かつ高性能なビデオ処理に最適化されており、モーション検知、ライブビデオストリーム、自動アラートなどの機能を提供します。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="Cost-Effective AI Surveillance: Frigate on Raspberry Pi 5 with Hailo8 on PCIe3.0 to Dual M.2 hat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **Note:**
> **このプロジェクトについてさらに知りたい場合は、この[リンク](https://wiki.seeedstudio.com/ja/frigate_nvr_with_raspberrypi_5/)を参照してください。**

### YOLO

YOLO（You Only Look Once）シリーズのモデルは、速度と精度を重視して設計されたリアルタイム物体検出モデルのファミリーです。領域提案と分類を別々に行う従来の物体検出手法とは異なり、YOLO はニューラルネットワークの 1 回のフォワードパスで両方のタスクを実行するため、はるかに高速です。YOLO モデルは画像をグリッドに分割し、各グリッドセルについてバウンディングボックスとクラス確率を予測します。長年にわたり、YOLO は精度、速度、より小さな物体を検出する能力の向上など、さまざまなバージョンを通じて進化してきました。YOLOv4、YOLOv5、そして最近の YOLOv7 や YOLOv8 モデルは、監視、自動運転車、ロボティクスなどの用途で広く使用されています。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **このプロジェクトについてさらに知りたい場合は、この[リンク](https://wiki.seeedstudio.com/ja/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)を参照してください。**

### CLIP

CLIP（Contrastive Language-Image Pretraining）は、OpenAI によって開発された、画像と言語を同時に理解できる機械学習モデルです。画像とそれに対応するテキスト記述を関連付けるように学習されており、両方のモダリティを含むタスクを実行できます。CLIP はゼロショット学習が可能であり、特定のカテゴリについて個別に学習させなくても、画像内の物体や概念を認識できます。画像分類、物体検出、さらには画像のテキストによる説明生成など、さまざまなタスクで高い性能を示しています。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **このプロジェクトについてさらに知りたい場合は、この[リンク](https://wiki.seeedstudio.com/ja/clip_application_on_rpi5_with_ai_kit/)を参照してください。**

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じて選択いただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
