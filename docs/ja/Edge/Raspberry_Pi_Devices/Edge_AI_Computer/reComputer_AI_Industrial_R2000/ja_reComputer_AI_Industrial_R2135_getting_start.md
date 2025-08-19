---
description: reComputer AI R2000 は、Raspberry Pi 5 をベースにした強力なエッジ AI コンピュータです。クアッドコア Arm Cortex-A76 プロセッサ、8GB RAM、M.2 SSD サポート、最大 26 TOPS を提供する Hailo-8 AI アクセラレーションモジュールを搭載し、リアルタイムで低遅延かつ高効率な AI 推論を実現します。AI を活用したビデオ分析、マシンビジョン、インテリジェントエッジコンピューティングなど、幅広い AI アプリケーションに最適な選択肢です。
title: reComputer AI Industrial R2135 シリーズの使い方
keywords:
- Raspberry pi
- エッジ AI コンピュータ
- reComputer R2000
image: https://files.seeedstudio.com/wiki/AI-box-cm5/r2135.webp
slug: /ja/recomputer_ai_industrial_r2135_getting_start
last_update:
  date: 05/15/2025
  author: Jiahao Li
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

**reComputer AI Industrial R2135** は、**Raspberry Pi CM5** と **Hailo AI アクセラレータ**を搭載したコンパクトな**エッジ AI システム**で、リアルタイムの**マルチチャンネルビジョン処理**において**26 TOPS**を提供します。**クアッドコア Cortex-A76 CPU**、最大**16GB RAM**、**64GB eMMC**、および**多用途なインターフェース**を備え、**産業用 AI アプリケーション**へのシームレスな統合を実現します。

**24時間365日**の信頼性を念頭に設計されており、**広範な電圧入力 (9-36V)**、**ハードウェアウォッチドッグ**、**堅牢な冷却機能**を備え、**-20°C から 65°C** の環境で安定して動作します。**スマートファクトリー**、**監視**、**AIoT** に最適で、このソリューションは**強力な AI コンピューティング**をエッジにもたらします。

## 特徴

- **産業グレードの信頼性**: アルミニウムシャーシ、-20°C から 65°C の広温度対応、RTC、ハードウェアウォッチドッグにより、24時間365日の安定した動作を実現。

- **強力なパフォーマンス**: Raspberry Pi CM5 によるクアッドコア Cortex-A76 CPU、最大 16GB RAM、64GB eMMC を搭載。

- **高効率 AI コンピューティング**: Hailo-8 AI アクセラレータにより、最大 26 TOPS のマルチチャンネル AI ビジョン処理を実現。

- **広範な接続性**: 2x HDMI2.0、1x ギガビットイーサネット、2x USB 3.2、1x USB-C、デュアル M.2 スロット、Mini-PCIe による 4G/LoRa 拡張。

- **多用途なワイヤレスオプション**: 内蔵 Wi-Fi5、Bluetooth 5.0、オプションの 4G LTE/LoRaWAN<sup>@</sup>。

- **柔軟なストレージオプション**: PCIe3.0 デュアル M.2 スロットは、AI アクセラレータと SSD ストレージの両方をサポート。

## 仕様

| **カテゴリ**              | **パラメータ**                                                                 |
|--------------------------|---------------------------------------------------------------------------------|
| **ハードウェア仕様**       |                                                                                 |
| **CPU**                   | Raspberry Pi Compute Module 5、2.4GHz クアッドコア 64ビット Arm Cortex-A76     |
| **GPU**                   | Raspberry Pi Compute Module 5、VideoCore VII                                   |
| **AI プロセッサ**          | Hailo-8 M.2 アクセラレーションスティック、26 TOPS (Tera-Operations Per Second) |
| **RAM**                   | 8GB SDRAM                                                                      |
| **eMMC**                  | 32GB                                                                            |
| **オペレーティングシステム**| Raspbian、Debian                                                               |
| **システム仕様**           |                                                                                 |
| **電源入力**               | DC 9V~36V、2ピンターミナルブロック                                              |
| **ビデオデコーダ**         | 4Kp60 HEVC デコーダ                                                            |
| **インターフェース**       |                                                                                 |
| **イーサネット**           | 1x 10/100/1000 Mbps、RJ45                                                      |
| **USB**                   | 2x USB 3.2 ポート (USB-A); 1x USB 2.0 ポート (デバッグ/OS 更新用 USB-C)       |
| **ディスプレイ**           | 2x 標準 HDMI ポート、HDMI 2.0                                                 |
| **M.2 スロット**           | 1x USB 3.0 to M.2 (M-key 2280); 1x PCIe 3.0 to M.2 (M-key 2242)               |
| **Mini-PCIe**             | 1x Mini-PCIe for 4G/LoRaWAN モジュール                                     |
| **SIM カード**             | 1x 標準 SIM カードスロット                                                     |
| **LED**                   | 3x LED: 電源 / ACT / 4G                                                        |
| **ボタン / スイッチ**      | 1x リセットボタン; 1x ブートスイッチ                                           |
| **ワイヤレス通信**         |                                                                                 |
| **Wi-Fi 2.4/5.0 GHz**     | オンチップ Wi-Fi 5                                                              |
| **BLE 5.0**               | オンチップ BLE 5.0                                                              |
| **4G セルラー**            | 4G LTE (オプション)                                                            |
| **LoRa®**                 | USB LoRa® / SPI LoRa® (オプション)                                             |
| **環境条件**               |                                                                                 |
| **防塵防水性能**           | IP40                                                                            |
| **動作温度**               | -20°C から 65°C                                                                |
| **動作湿度**               | 10% から 95% RH                                                                |
| **アンテナ**               | 3x アンテナホール                                                              |
| **その他**                 |                                                                                 |
| **ウォッチドッグ**         | ハードウェアウォッチドッグ                                                     |
| **RTC**                   | 高精度 RTC                                                                      |
| **セキュリティ**           | 暗号化チップ TPM2.0 / ATECC608A (オプション)                                   |
| **放熱**                   | ヒートシンクとファン                                                           |
| **保証**                   | 2 年間                                                                         |
| **製品寿命**               | 2036 年 12 月まで                                                              |
| **機械的仕様**             |                                                                                 |
| **寸法 (W x H x D)**       | 130mm × 93mm × 55.5mm                                                          |
| **筐体**                   | アルミニウム合金ケースと PC サイドパネル                                       |
| **取り付け**               | DIN レール / 壁取り付け                                                        |
| **重量 (正味)**            | 688g                                                                           |
| **注意事項**               | 「オプション」と記載された項目は追加購入が必要です (アクセサリリストを参照)。   |

## Hailoの紹介

### ハードウェアの紹介

[Hailo](https://hailo.ai/) は、エッジデバイス上での高性能なディープラーニングアプリケーション向けに特化した最先端のAIプロセッサを提供しています。同社のソリューションは、エッジでの次世代生成AI、認識、ビデオ強化を可能にすることを目的としており、高度なAIアクセラレータとビジョンプロセッサによって支えられています。Hailo-8 NPUアクセラレータを搭載し、26 TOPsのAI性能を提供するreComputer_R2000は、YOLOv8sで200 FPS以上を達成することが可能です。

### ソフトウェアの紹介

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AIソフトウェアスイートは、ハードウェアアクセラレータ上でAIモデルを効率的に実行するための強力なツールを提供します。このスイートは既存のディープラーニングフレームワークとシームレスに統合するよう設計されており、開発者にスムーズなワークフローを提供します。このプロセスでは、モデルビルド環境でONNXファイルからHEF（Hailo実行可能バイナリファイル）を生成します。生成されたHEFファイルは推論マシン（ランタイム環境）に転送され、HailoRT APIを使用して推論を実行します。提供されているスクリプトは、モデルビルド環境内でONNXファイルをHEFファイルに変換するのを支援します。

> **注意:**
> **Hailo NPUの使用例について詳しく知りたい場合は、この[リンク](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero)をクリックしてください。**

## ハードウェア概要
### インターフェース概要

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-recomputer.png)

GPIOのマッピングとオフセットを確認するには、以下のコマンドを使用してください：

```
cat /sys/kernel/debug/gpio
```

<details>
<summary>GPIO情報</summary>

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

### 電源図
![image1](https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_power_diagram.png)

reComputer AI Industrial R2135 は、DC 9V～36V の広い入力電圧範囲をサポートし、内部で多段階の DCDC コンバータを使用して 5V、3.3V、1.2V、1.0V の電源レールを生成します。これらの電圧は、コアプロセッサ、USB ポート、HDMI、M.2 拡張、オーディオ、RTC、その他の周辺モジュールに安定した電力を供給し、さまざまなアプリケーションシナリオで信頼性の高い動作を保証します。

##### 2ピン電源端子

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_Two_Pin_Terminal.jpg" style={{width:150, height:'auto'}}/></div>

reComputer AI Industrial R2135 は、9～36V の端子 DC 電圧で供給されます。電源は 2 ピン電源端子ブロックコネクタを介して接続されます。reComputer AI Industrial R2135 を接地するには、接地線を電源端子の左上隅にあるネジに固定することができます。

#### 消費電力
以下の表は、Seeed Studio のラボでテストされた reComputer AI Industrial R2135 の消費電力を示しています。この値は参考値であり、テスト方法や環境によって結果が異なる場合があります。

| **状態**        | **電圧** | **電流** | **消費電力** |**説明** |
|------------------|----------|----------|--------------|---------|
|**シャットダウン**|12V       |1.1mA     |0.013W        |シャットダウンおよび電源オフ状態での静的消費電力テスト。|
|**アイドル**      |12V       |208mA     |2.42W         |テストプログラムを実行せずに reComputer AI Industrial R2135 デバイスに 24V 電力を供給した際の入力電流をテスト。|
|**フルロード**    |12V       |2.08A     |24.2W         |"stress -c 4" コマンドを使用して CPU をフルロードで動作させるよう設定。USB に 1A の負荷を接続。|

#### 電源オンと電源オフ

reComputer AI Industrial R2135 にはデフォルトで電源ボタンが付属しておらず、電源が接続されるとシステムが自動的に起動します。シャットダウンする際は、オペレーティングシステムのシャットダウンオプションを選択し、システムが完全にシャットダウンするのを待ってから電源を切断してください。システムを再起動するには、電源を再接続するだけです。

### ブロック図
![image1](https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_block_diagram.png)

## インターフェース

### インターフェース説明

| タイプ           | 説明                                           |
|------------------|-----------------------------------------------|
| **Ethernet**     | 1x 10/100/1000 Mbps (POE* 対応)              |
| **USB**          | 2x USB-A 3.2 ホスト; 1x USB-C 2.0 (OS フラッシュ用) |
| **HDMI**         | 2x HDMI 2.0                                  |
| **オーディオ**    | 1x 3.5mm オーディオ出力/入力                 |
| **SIMカードスロット** | 1x SIMカードスロット、標準SIMカード対応       |
| **M.2スロット**   | 2x M.2スロット、M.2 NVMe SSDおよびAIアクセラレーション対応 |
| **Mini-PCIe**    | 1x Mini PCIe スロット                        |
| **LED**          | 3x LEDインジケータ                          |
| **リセットボタン** | 1x リセットボタン                           |
| **ブートスイッチ** | 1x ブートスイッチ                           |

### LEDインジケータの状態
reComputer AI Industrial R2135 には、機器の動作状態を示す 3 つの LED インジケータが搭載されています。各 LED の具体的な機能と状態については、以下の表を参照してください。

| 名前  | 色              | 状態   | 説明                                                                                                                                              |
|-------|-----------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| **PWR**  | 緑色           | 点灯   | デバイスが電源に接続されています。                                                                                                                  |
|        |                 | 消灯   | デバイスが電源に接続されていません。                                                                                                                |
| **ACT**  | オレンジ色      |        | Linux では、このピンは eMMC アクセスを示すために点滅します。起動中にエラーが発生した場合、この LED はエラーパターンで点滅します（詳細は Raspberry Pi ドキュメントを参照）。 |
| **USER** | 緑/赤/青       |        | ユーザーによって定義する必要があります。                                                                                                              |
| **LTE**  | 緑色           | 点灯   | ダイヤルアップが成功し、接続が正常です。                                                                                                              |
|        |                 | 消灯   | LTE 信号が接続されていないか、デバイスが電源オンされていません。                                                                                      |

### ACT 状態表

| 長い点滅 | 短い点滅 | 状態                                 |
|----------|----------|-------------------------------------|
| 0        | 3        | 起動に失敗しました                   |
| 0        | 4        | start*.elf が見つかりません           |
| 0        | 7        | カーネルイメージが見つかりません       |
| 0        | 8        | SDRAM の障害                        |
| 0        | 9        | SDRAM が不足しています               |
| 0        | 10       | HALT 状態です                       |
| 2        | 1        | パーティションが FAT ではありません   |
| 2        | 2        | パーティションからの読み取りに失敗しました |
| 2        | 3        | 拡張パーティションが FAT ではありません |
| 2        | 4        | ファイル署名/ハッシュの不一致 - Pi 4  |
| 4        | 4        | サポートされていないボードタイプ       |
| 4        | 5        | 致命的なファームウェアエラー           |
| 4        | 6        | 電源障害タイプ A                     |
| 4        | 7        | 電源障害タイプ B                     |

ACT LEDが規則的に4回点滅する場合、bootcode（start.elf）を見つけることができません。  
ACT LEDが不規則に点滅する場合、ブートが開始されています。  
ACT LEDが点滅しない場合、EEPROMコードが破損している可能性があります。何も接続せずに再試行してください。詳細については、Raspberry Piフォーラムを確認してください：  
STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums.  
詳細については、[Raspberry Piフォーラム](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)をご確認ください。

ユーザーLEDを制御するには、Linuxカーネルが提供する擬似ファイルシステムであるsysfsを使用することをお勧めします。sysfsは、さまざまなカーネルサブシステム、ハードウェアデバイス、およびそれに関連するドライバに関する情報を公開します。ReComputer R2000では、ユーザーLEDインターフェースを3つのデバイスファイル（led-red、led-blue、led-green）に抽象化しており、これらのファイルを操作するだけでLEDライトを制御できます。以下は例です：

1. 赤色LEDを点灯するには、ターミナルで以下のコマンドを入力してください：

```
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 赤色LEDを消灯するには、ターミナルで以下のコマンドを入力してください：

```
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 赤色LEDと緑色LEDを同時に点灯するには、ターミナルで以下のコマンドを入力してください：

```
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### ブートスイッチ

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

reComputer AI Industrial R2135のブートスイッチは、CM5のnRPI_BOOTピンに接続されています。このスイッチにより、eMMCとUSBの間でブートソースを選択することができます。通常モードでは、スイッチを「BOOT」ラベルのない側に設定し、システムをeMMCから起動します。一方、システムイメージをフラッシュする必要がある場合は、スイッチを「BOOT」ラベル側に設定し、Type-C USBインターフェースから起動します。

| スイッチ位置 | モード         | 説明              | nRPI-BOOT |
|--------------|--------------|-----------------|-----------|
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 通常モード  | eMMCから起動   | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | フラッシュモード | USBから起動    | High      |

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R2000は、1つのUSB Type-Cポートと2つのUSB Type-Aポートを備えています。それぞれの機能と説明については、以下の表を参照してください。

| **タイプ**   | **数量** | **プロトコル** | **機能**       | **説明**                                                  |
| ------------ | -------- | -------------- | -------------- | --------------------------------------------------------- |
| **Type-C**   | *1       | USB2.0         | USB-デバイス   | シリアルポートデバッグ、イメージ書き込みなどに使用されます。 |
| **Type-A**   | *2       | USB2.0         | USB-ホスト     | フラッシュドライブ、USBキーボード、マウスなどのUSBデバイスを接続します。 |

USBハブが検出されているか確認するには、**lsusb**コマンドを実行してください。このコマンドは、ハブを含むすべての接続されたUSBデバイスを一覧表示します。

```shell
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

このコマンドを実行すると、システムに接続されているUSBデバイス（USBハブを含む）に関する情報が表示されます。

USBハブが正常に機能している場合、**lsusb**コマンドの出力にその詳細がリストされます。リストに表示されない場合、ハブまたはシステムとの接続に問題がある可能性があります。その場合、USBハブまたは接続をトラブルシューティングする必要があります。

### SIMスロット（内部）

reComputer AI Industrial R2135シリーズ機器には、内部に標準SIMカードスロットが含まれており、標準SIMカードを挿入して4G信号を取得するために使用されます。標準SIM、Micro SIM、Nano SIMカードのサイズの違いは以下の通りです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/sim_card.jpg" /></div>

> **注意**  
> 標準バージョンの**reComputer AI Industrial R2135**には4Gモジュールが付属していません。  
> 4G機能が必要な場合は、追加の4Gモジュールを別途購入する必要があります。  
> 詳細については、セクション**「2.3.2 4Gモジュール」**を参照してください。

### M.2スロット

reComputer AI Industrial R2135は、NVMe M.2 2280 SSDおよびAIアクセラレーション用の2つのM.2 Key-Mスロット（NVMe1およびNVMe2）を備えており、高速ストレージ拡張を可能にし、システムの性能と容量を向上させます。

● NVMe1（下部スロット）：M.2 2280サイズをサポート；  

● NVMe2（上部スロット）：Hailo-8 AIアクセラレータが事前にインストールされています；  

● PCIeベースのNVMe SSDのみサポート。SATA SSDはサポートされていません。

> **注意**  
> SSDカードには主に2つの用途があります：  
> 1. **大容量ストレージ** – 大量のデータを保存するために使用されます。  
> 2. **イメージを含むブートドライブ** – データ保存とシステムのブートの両方に使用されます。  
>  
> 市場に出回っているすべてのSSDカードがブート機能をサポートしているわけではありません。  
> SSDをブートドライブとして使用する予定で互換性が不明な場合は、**1TB SSD（SKU 112990267）**をお勧めします。このモデルはテスト済みでブートをサポートしており、互換性の問題を回避し、試行錯誤のコストを削減します。

### Mini-PCIeスロット

reComputer AI Industrial R2135には、主に4G LTEモデムモジュール（例：Quectel EC20/EC25）用に設計されたMini PCIeスロットが含まれています。

● サポート：標準Mini PCIeモジュール  

● 信号インターフェース：USB 2.0、UART、SIMカード、RESETなど  

● SIMカードはオンボードのSIMカードソケットに接続されています。

● 制御信号: W_DISABLE、PERST、WAKEをサポート。

● 信頼性向上のための統合ESD保護。

| スロット      | サポートされるプロトコル |
|---------------|--------------------------|
| Mini-PCIe     | 4G LTE                   |
|               | USB LoRa®               |
|               | USB Zigbee              |

### リセットホール

reComputer AI Industrial R2135のリセットホールには、ミニプッシュボタンスイッチが配置されています。このボタンを細い物体で押すことで、CM4をリセットできます。このピンがHighの状態になると、CM4が起動したことを示します。このピンをLowにすると、モジュールがリセットされます。

### Ethernet RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_ETH0.png" /></div>

| 名前  | タイプ                        | スピード          | PoE           |
|-------|-------------------------------|-------------------|---------------|
| ETH0  | CM5ネイティブギガビットイーサネット | 10/100/1000 Mbit/s | サポートされていません |

reComputer AI Industrial R2135は、標準的なRJ45ギガビットイーサネットポート（GbE）を備えており、信号品質とEMI保護を向上させるためにMagJack統合トランスフォーマーを使用しています。

● インターフェース標準: IEEE 802.3 10/100/1000Mbps  
● ギガビットPHYを使用し、4つの差動ペア（TX/RX）をサポート  
● 自動ネゴシエーションと全二重通信をサポート  
● コモンモードチョーク、ESD保護、絶縁コンデンサを含む  
● オンボードの緑/黄色LEDがリンクとアクティビティステータスを表示  

### HDMI

reComputer AI Industrial R2135は、HDMI0およびHDMI1とラベル付けされた2つの標準HDMI Type-Aポートを備えており、高解像度ビデオ出力をサポートします。このシステムは、最大4K@60Hzのディスプレイ解像度を提供し、同時にデュアルHDMI出力をサポートするため、マルチディスプレイアプリケーションに適しています。

### RTC

reComputer AI Industrial R2135には、電源サイクル間で時間を維持するためのオンボードRTC（PCF8563T）が搭載されており、電源が失われた場合でも時刻保持機能を維持できます。

以下のコマンドでRTC部分をテストできます：
```bash 
# 1. 自動時刻同期を無効化:
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
# 時刻を設定:
sudo hwclock --set --date "2024-11-12 12:00:00"
# RTC時刻をシステムに同期:
sudo hwclock --hctosys
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/RTC1.png" /></div>

その後、R2000の電源を数分間オフにし、再びオンにして、以下のコマンドで時計を再確認します：

```bash
# 4. RTC時刻を確認:
sudo hwclock -r
```
結果は、システムが電源オフの間もRTCモジュールが機能し続けていることを示します。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/RTC2.png" /></div>

### ウォッチドッグ

reComputer AI Industrial R2135は、異常なシステムクラッシュ時に自動的にシステムを再起動する独立したハードウェアウォッチドッグ回路を備えています。このウォッチドッグ回路はRTCを通じて実装されており、1秒から255秒までの柔軟なフィードタイムを設定できます。

以下のコマンドでウォッチドッグ部分をテストできます：

```bash
# 1. ウォッチドッグソフトウェアをインストール:
sudo apt install watchdog
# 2. ウォッチドッグ設定ファイルを編集:
sudo nano /etc/watchdog.conf
```
次に、設定を以下のように変更します：

<details>
<summary>watchdog.conf</summary>

```bash
watchdog-device= /dev/watchdog
# デフォルトの1分以外のハードウェアタイムアウト値を設定する場合、この行をアンコメントして編集します。
watchdog-timeout	= 120
# ウォッチドッグが最初のタイムアウト間隔で自動的にトリップする場合、この行をアンコメントして値を「yes」に変更します。
#watchdog-refresh-use-settimeout	= auto
# バグのあるウォッチドッグデバイス（例: 一部のIPMI実装）を使用している場合、この行をアンコメントして「yes」に設定します。
#watchdog-refresh-ignore-errors	= no
# ====================== その他のシステム設定 ========================
#
# テスト間隔。ハードウェアタイムアウト値より数秒短くする必要があります。
interval= 15
max-load-1= 24
#max-load-5= 18
#max-load-15= 12
realtime= yes
priority= 1
```
</details> 

```bash
# 3. ウォッチドッグサービスが実行中であることを確認:
sudo systemctl start watchdog
# このコマンドはカーネルクラッシュをトリガーし、ウォッチドッグがシステムを再起動するはずです。
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```
以下の図に示されているように、コマンド入力後にSSH接続が失われ、ウォッチドッグが有効になりreComputer AI Industrial R2135を再起動したことを示しています。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/watchdog.png" /></div>

### M.2 AIアクセラレーション

reComputer AI Industrial R2135には、NVMe2 M.2スロットに事前インストールされたHailo-8 AIアクセラレータモジュールが含まれており、リアルタイムのマルチチャネルAIビジョン処理のために26 TOPSの計算能力を提供します。

以下のコマンドでウォッチドッグ部分をテストできます：

> 注意:
> この機能をテストするには、reComputer AI Industrial R2135に画面を接続する必要があります。

```bash
# Hailoハードウェアとその付随ソフトウェアが正常にインストールされているかテスト
hailortcli fw-control identify
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/hailo1.png" /></div>

```bash
# 事前インストールされたデモが機能するか確認
cd hailo-rpi5-examples
# 必要なリソースをインストール
./install.sh
# Python環境を有効化
source setup_env.sh
# オブジェクト検出を実行
python basic_pipelines/detection_simple.py
```
結果は以下の通りです：

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/hailo2.png" /></div>

## オプションインターフェースとモジュール

reComputer AI Industrial R2135 は、豊富な拡張モジュールとアクセサリをサポートしており、さまざまなシナリオや要件に適しています。reComputer AI Industrial R2135 をカスタマイズしたい場合は、odm@seeed.cc にお問い合わせください。
以下はアクセサリとオプションモジュールのリストです：

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
        <td rowspan="3">これら3つのモジュールは、LoRaWAN® 機能のために一緒に使用する必要があります</td>
        <td>LoRa® モジュール</td>
        <td>地域選択可能な LoRaWAN ゲートウェイモジュール (USB) - US915</td>
        <td>114992629</td>
      </tr>
      <tr>
        <td></td>
        <td>地域選択可能な LoRaWAN ゲートウェイモジュール (USB) - US915</td>
        <td>114992991</td>
      </tr>
      <tr>
        <td></td>
        <td>地域選択可能な LoRaWAN ゲートウェイモジュール (USB) - EU868</td>
        <td>114992628</td>
      </tr>
      <tr>
        <td>WiFi 機能にはこのアクセサリが必要です</td>
        <td>Wi-Fi/BLE アンテナ</td>
        <td>Raspberry Pi Compute Module 4 アンテナキット</td>
        <td>114992364</td>
      </tr>
      <tr>
        <td rowspan="7">4G 機能には 4G モジュールと 4G アンテナが必要、GPS 機能には GPS アンテナが必要</td>
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
        <td>Infineon SLB9670 を搭載した TPM2.0 モジュール</td>
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

### Wi-Fi/Bluetooth

reComputer AI Industrial R2135 は、CM5 によって駆動され、オンボード Wi-Fi/BLE バージョンを備えており、CM5 と同じ Wi-Fi/BLE パラメータを提供します。詳細なパラメータ情報については、Raspberry Pi の公式ウェブサイトを参照してください。

以下のコマンドを使用して Wi-Fi モジュールをテストします：

```bash
sudo iwlist wlan0 scan
```

結果は以下の図に示されています。
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/wifi.png" /></div>

以下のコマンドを使用して Bluetooth モジュールをテストします：

```bash
sudo bluetoothctl
scan on
```
結果は以下の図に示されています。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/bluetooth.png" /></div>


### LoRa® USB モジュール

Mini-PCIe スロットは USB プロトコルを使用する LoRa® モジュールもサポートしています。Seeed Studio の WM1302 モジュールは、reComputer AI Industrial R2135 と完全に互換性があることがテストされています。

以下の手順で LoRa® USB モジュールをテストできます：

```bash
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo nano ./libloragw/inc/loragw_i2c.h
```
`#define I2C_DEVICE "/dev/i2c-1"` を `#define I2C_DEVICE "/dev/i2c-3"` に変更します。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora1.png" /></div>

```bash
# コードをコンパイル
sudo make
```

次に、設定コードを変更します：
```bash
sudo nano ./tools/reset_lgw.sh
```
ピン設定を更新します：
<details>
<summary>reset_lgw.sh</summary>

```bash
SX1302_RESET_PIN=580   # SX1302 リセット
SX1302_POWER_EN_PIN=578 # SX1302 電源有効化
SX1261_RESET_PIN=579   # SX1261 リセット (LBT / スペクトルスキャン)
```
</details>
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora2.png" /></div>

```bash
# reset_lgw.sh スクリプトをコピー
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
# デバイス名を確認
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

reComputer AI Industrial R2135 のメインボードには Mini-PCIe スロットが1つ搭載されており、このスロットは USB プロトコルを使用する 4G モジュールをサポートしています。Quectel の EC25 4G モジュールは、reComputer AI Industrial R2135 と完全に互換性があることがテストされています。

> 注意：
> reComputer AI Industrial R2135 に 4G モジュールをインストールしていることを確認してください。

以下のコマンドを使用して 4G モジュールをテストします：

```bash 
# 4G モジュールの情報を確認
ifconfig
```
結果は以下の図に示されています。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g1.png" /></div>

```bash 
# usb0 イーサネットポートの情報を確認
ip link show usb0
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g2.png" /></div>


```bash
# usb0 イーサネットポートを起動
sudo ip link set dev usb0 up
# ネットワーク上の DHCP サーバーから IP アドレスを要求し、usb0 インターフェースに割り当てる
sudo dhclient usb0
```
次に、デフォルトルーターに ping が通るかテストします。
```bash
ping 192.168.225.1
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g3.png" /></div>

```bash
# usb0 を使用して baidu.com に ping
ping -4 -I usb0 www.baidu.com 
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g4.png" /></div>


### TPM 2.0

TPM（Trusted Platform Module）は、ハードウェアベースの暗号化機能を提供することでコンピュータのセキュリティを強化するために設計されたハードウェアチップです。暗号化キー、証明書、パスワードなどの機密データを安全に保存し、セキュアブート、ディスク暗号化（例：BitLocker）、認証などのシナリオで一般的に使用されます。

以下のコマンドを使用して reComputer AI Industrial R2135 の TPM を確認します。

```bash
ls /dev | grep tpm
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/tpm1.png" /></div>

```bash
# 以下のように TPM をテストします。
sudo tpm2_createprimary -C o -c primary.ctx
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/tpm2.png" /></div>


### SSD

reComputer AI Industrial R2135 は NVMe1 PCIe スロット (J8) を使用して 2280 NVMe SSD をサポートしています。

> **注意**
>
> SSD カードには主に以下の2つの用途があります：
> 1. **大容量ストレージ:** SSD カードは大容量ストレージのニーズに対応できます。  
> 2. **イメージを含むブートドライブ:** SSD カードは大容量ストレージとしてだけでなく、システムイメージを保存してカードから直接ブートするブートドライブとしても使用できます。  
>
> 市場に出回っているすべての SSD カードがブート機能をサポートしているわけではないことに注意してください。SSD をブートドライブとして使用する予定で、どのモデルを選ぶべきか不明な場合は、弊社がテスト済みの 1 TB SSD (SKU 112990267) をお勧めします。このモデルはブート機能が確認されており、互換性のリスクを軽減し、試行錯誤のコストを最小限に抑えます。

以下のコマンドを使用して SSD を確認できます。

```bash
sudo fdisk -l | grep sda
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/ssd1.png" /></div>


## アプリケーション

### Frigate

Frigate はリアルタイムの物体検出を目的としたオープンソースの NVR（ネットワークビデオレコーダー）です。既存のカメラと統合し、TensorFlow や Coral などの機械学習モデルを使用してビデオフィード上で物体検出を行います。Frigate は低遅延で高性能なビデオ処理に最適化されており、動作検知、ライブビデオストリーム、自動アラートなどの機能を提供します。

<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="Cost-Effective AI Surveillance: Frigate on Raspberry Pi 5 with Hailo8 on PCIe3.0 to Dual M.2 hat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **注意:**
> **このプロジェクトについて詳しく知りたい場合は、こちらの [リンク](https://wiki.seeedstudio.com/ja/frigate_nvr_with_raspberrypi_5/) を参照してください。**

### YOLO

YOLO（You Only Look Once）シリーズのモデルは、速度と精度を重視したリアルタイム物体検出モデルのファミリーです。従来の物体検出方法が領域提案と分類を別々に行うのに対し、YOLO はニューラルネットワークの単一のフォワードパスで両方のタスクを実行するため、非常に高速です。YOLO モデルは画像をグリッドに分割し、各グリッドセルに対してバウンディングボックスとクラス確率を予測します。これまでに YOLO は複数のバージョンを通じて進化し、精度、速度、小さな物体の検出能力が向上しています。YOLOv4、YOLOv5、そして最近の YOLOv7 や YOLOv8 モデルは、監視、自動車、ロボティクスなどのアプリケーションで広く使用されています。

<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **注意:**
> **このプロジェクトについて詳しく知りたい場合は、こちらの [リンク](https://wiki.seeedstudio.com/ja/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/) を参照してください。**

### Clip

CLIP（Contrastive Language-Image Pretraining）は、OpenAI によって開発された機械学習モデルで、画像とテキストを組み合わせて理解することができます。このモデルは、画像と対応するテキスト記述を関連付けるように訓練されており、両方のモダリティを含むタスクを実行することができます。CLIP はゼロショット学習が可能で、特定のカテゴリについて特別に訓練されていなくても、画像内のオブジェクトや概念を認識することができます。画像分類、物体検出、さらには画像のテキスト記述生成など、さまざまなタスクで優れた性能を発揮しています。

<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **注意:**
> **このプロジェクトについて詳しく知りたい場合は、こちらの [リンク](https://wiki.seeedstudio.com/ja/clip_application_on_rpi5_with_ai_kit/) を参照してください。**

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>