---
description: SeeedとNVIDIAのL4Tの違いについて説明します
title: SeeedとNVIDIAのL4Tの違い
keywords:
- jetson
- BSP
- L4T
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/differences_of_l4t_between_seeed_and_nvidia
last_update:
  date: 04/05/2025
  author: Dayu
---

SeeedのJetson Board Support Packages（BSP）は、NVIDIAのLinux for Tegra（L4T）バージョン35.3.1、35.5、36.3、36.4、および36.4.3をベースとし、Seeed独自のJetsonシリーズ製品をサポートするための修正が加えられています。以下は、これらの各L4Tバージョンにおけるseeed BSPとNVIDIA公式BSPの違いです。

## L4T 36.4.3

Jetson Linux 36.4.3はJetPack 6.2の一部です。このバージョンでは、SeeedのBSPにはNVIDIAのデフォルトBSPにはない追加のドライバーと機能が含まれています：

- MCP251XシリーズCANバスコントローラーのサポートを追加。
- MCP251XFD CAN-FDコントローラーのサポートを追加。
- CRC-CCITTチェックサムアルゴリズム（PPPおよび類似プロトコルで使用）を有効化。
- 汎用Intel Wi-Fiドライバーのサポートを追加。
- Intel Wi-Fiデバイストレーシングサポートを有効化。
- Intel Wi-Fiのモジュラー動作モードを有効化。
- Microchip LAN743xギガビットイーサネットコントローラーのサポートを追加。
- PPP（Point-to-Point Protocol）サポートを有効化。
- 非同期シリアルリンク上でのPPPサポートを有効化。
- Realtek 88シリーズWi-Fiドライバーのサポートを追加。
- Realtek 8723D Wi-Fiチップのサポートを追加。
- Realtek 8723DU Wi-Fiチップのサポートを追加。
- Realtek 8723XシリーズWi-Fiチップのサポートを追加。
- USB経由でのRealtek Wi-Fiデバイスのサポートを追加。
- TIのTLV320AIC3Xシリーズオーディオコーデックドライバーのサポートを追加。
- TLV320AIC3XコーデックのI²Cインターフェースサポートを追加。
- ビデオデバイス用の高度なデバッグインターフェースを有効化。
- MAX9296A GMSLデシリアライザーのサポートを追加。
- MAX96717 GMSLデシリアライザーのサポートを追加。
- MAX96724 GMSLデシリアライザーのサポートを追加。
- Maxim GMSLアグリゲーターのサポートを追加。

## L4T 36.4

Jetson Linux 36.4はJetPack 6.1の一部です。このバージョンでは、SeeedのBSPはNVIDIAのBSPと比較して追加のドライバーと機能を追加しています：

- MCP251XシリーズCANバスコントローラーのサポートを追加。
- MCP251XFD CAN-FDコントローラーのサポートを追加。
- CRC-CCITTチェックサムアルゴリズム（PPPおよびその他のプロトコルで使用）を有効化。
- Intel Wi-Fi MVMドライバーモジュールのサポートを追加。
- 汎用Intelワイヤレスカードドライバーのサポートを追加。
- Intel Wi-Fiのデバッグトレーシング機能を有効化。
- Intel Wi-FiデバイスのLEDインジケーター制御を有効化。
- Microchip LAN743xギガビットイーサネットコントローラードライバーを有効化。
- PPPプロトコルサポートを有効化。
- 非同期シリアルポート上でのPPP接続を有効化。
- Realtek 88シリーズワイヤレスカードコアドライバーのサポートを有効化。
- Realtek 8723D Wi-Fiチップのサポートを追加。
- Realtek 8723DU Wi-Fiチップのサポートを追加。
- Realtek 8723XシリーズWi-Fiチップのサポートを追加。
- Realtek RTW88 Wi-Fiドライバーのコアモジュールのサポートを追加。
- USB経由でのRTW88シリーズWi-Fiアダプターの使用サポートを追加。
- PPPで必要な圧縮ライブラリのサポートを追加。
- CH341 USB-シリアル変換チップのサポートを追加。

## L4T 36.3

Jetson Linux 36.3 は JetPack 6.0 の一部です。このバージョンでは、Seeed の BSP は NVIDIA のものを超えて追加のドライバーと機能を提供しており、以下が含まれます：

- MCP251X シリーズ CAN バスコントローラーのサポートを追加。
- MCP251XFD CAN-FD コントローラーのサポートを追加。
- CRC-CCITT チェックサムアルゴリズム（PPP および類似プロトコルで使用）を有効化。
- I²C ATR（Address Translator）プロトコルサポートを有効化。
- 汎用 Intel ワイヤレスカードドライバーのサポートを追加。
- Intel Wi-Fi のデバイスデバッグトレーシングサポートを有効化。
- Microchip LAN743x ギガビットイーサネットコントローラーのサポートを追加。
- Realtek 88 シリーズ Wi-Fi ドライバーのコアモジュールのサポートを追加。
- Realtek 8723D Wi-Fi チップのサポートを追加。
- Realtek 8723DU Wi-Fi チップのサポートを追加。
- Realtek 8723X シリーズ Wi-Fi チップのサポートを追加。
- TI の TLV320AIC3X オーディオコーデックドライバーのサポートを追加。
- TLV320AIC3X の I²C 制御インターフェースのサポートを追加。
- MAX96717 GMSL デシリアライザーのサポートを追加。
- MAX96724 GMSL デシリアライザーのサポートを追加。
- MAX9296A GMSL ビデオデシリアライザーのサポートを追加。
- Maxim GMSL アグリゲーターのサポートを追加。
- TPM コアサポートを有効化。
- SPI インターフェース経由の TPM ドライバーのサポートを追加。
- I²C インターフェース経由の Infineon TPM のサポートを有効化。
- SELinux セキュリティモジュールを有効化。

## L4T 35.5

Jetson Linux 35.5 は JetPack 5.1.3 の一部です。このバージョンでは、Seeed の BSP はいくつかのドライバーと機能を追加し、いくつかの設定変更を含んでいます：

- **IMX219 カメラドライバー：** Seeed はこのドライバーをカーネルにコンパイルしていますが、NVIDIA はローダブルモジュールとして提供しています。
- **IMX390 カメラドライバー：** Seeed は現在このドライバーを無効にしていますが、NVIDIA はカーネルにコンパイルしています。
- **LAN743x ギガビットイーサネットコントローラードライバー：** Seeed はカーネルにコンパイルしていますが、NVIDIA はローダブルモジュールとして提供しています。
- TI DP83867 イーサネット PHY（物理層）チップのサポートを有効化。
- NXP PTN5150 USB Type-C コントローラーチップドライバーのサポートを追加。
- Microchip LAN743x シリーズギガビットイーサネットチップドライバーのサポートを追加。
- nvmem（不揮発性メモリ）フレームワークを有効化し、ドライバーが EEPROM/NVRAM などのオンボードストレージにアクセスできるようにしました。
- STPMIC1 電源管理チップのサポートを追加。
- TI TPS65090 電源管理チップのサポートを追加。
- LM90 温度センサードライバーを有効化。
- NTC サーミスタセンサーのサポートを追加。
- TI の TLV320AIC3X シリーズオーディオコーデックドライバー（I²S インターフェース）のサポートを追加。
- TLV320AIC3X I²C 制御インターフェースのサポートを追加。
- 標準化された USB Type-C Port Controller Interface（TCPCI）のサポートを有効化。
- MediaTek MT6370 Type-C コントローラードライバーのサポートを追加。
- USB コンソールデバイスサポートを有効化（OTG 経由のシリアルデバッグ用）。
- CH341 USB-to-シリアルアダプタードライバーを有効化。

## L4T 35.3.1

Jetson Linux 35.3.1 は JetPack 5.1.1 の一部です。このバージョンでは、Seeed の BSP は追加のドライバーと機能を追加し、いくつかの変更を行っています：

- TPM ハードウェア乱数生成器をシステムエントロピーソースの一つとして有効化。
- SELinux、AppArmor などで使用するための `/sys/kernel/security` マウントポイントを有効化。
- コア TPM インターフェースサポートを有効化（SPI/I²C TPM に必要）。
- SPI バス経由での TPM チップへのアクセスのサポートを追加。
- セキュアブートやキーストレージなどの機能に対する TPM サポートを有効化。

## リソース

- [SeeedのL4Tのソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
