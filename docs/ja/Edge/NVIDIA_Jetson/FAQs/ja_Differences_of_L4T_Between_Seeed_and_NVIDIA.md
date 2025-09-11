---
description: Seeed と NVIDIA の L4T の違いについて説明します
title: Seeed と NVIDIA の L4T の違い
keywords:
- jetson
- BSP
- L4T
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/differences_of_l4t_between_seeed_and_nvidia
last_update:
  date: 05/15/2025
  author: Dayu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

Seeed の Jetson ボードサポートパッケージ (BSP) は、NVIDIA の Linux for Tegra (L4T) バージョン 35.3.1、35.5、36.3、36.4、および 36.4.3 をベースにしており、Seeed 独自の Jetson シリーズ製品をサポートするために修正されています。以下に、これらの L4T バージョンごとに Seeed の BSP と NVIDIA の公式 BSP の違いを示します。

## L4T 36.4.3

Jetson Linux 36.4.3 は JetPack 6.2 の一部です。このバージョンでは、Seeed の BSP に NVIDIA のデフォルト BSP には含まれていないいくつかの追加ドライバと機能が含まれています。以下がその内容です：

- MCP251X シリーズ CAN バスコントローラのサポートを追加。
- MCP251XFD CAN-FD コントローラのサポートを追加。
- CRC-CCITT チェックサムアルゴリズムを有効化 (PPP や類似のプロトコルで使用)。
- 汎用 Intel Wi-Fi ドライバのサポートを追加。
- Intel Wi-Fi デバイスのトレースサポートを有効化。
- Intel Wi-Fi のモジュール動作モードを有効化。
- Microchip LAN743x ギガビットイーサネットコントローラのサポートを追加。
- PPP (Point-to-Point Protocol) サポートを有効化。
- 非同期シリアルリンク上での PPP サポートを有効化。
- Realtek 88 シリーズ Wi-Fi ドライバのサポートを追加。
- Realtek 8723D Wi-Fi チップのサポートを追加。
- Realtek 8723DU Wi-Fi チップのサポートを追加。
- Realtek 8723X シリーズ Wi-Fi チップのサポートを追加。
- USB 経由での Realtek Wi-Fi デバイスのサポートを追加。
- TI の TLV320AIC3X シリーズオーディオコーデックドライバのサポートを追加。
- TLV320AIC3X コーデックの I²C インターフェースサポートを追加。
- ビデオデバイスの高度なデバッグインターフェースを有効化。
- MAX9296A GMSL デシリアライザのサポートを追加。
- MAX96717 GMSL デシリアライザのサポートを追加。
- MAX96724 GMSL デシリアライザのサポートを追加。
- Maxim GMSL アグリゲータのサポートを追加。

## L4T 36.4

Jetson Linux 36.4 は JetPack 6.1 の一部です。このバージョンでは、Seeed の BSP に NVIDIA の BSP と比較して追加のドライバと機能が含まれています。以下がその内容です：

- MCP251X シリーズ CAN バスコントローラのサポートを追加。
- MCP251XFD CAN-FD コントローラのサポートを追加。
- CRC-CCITT チェックサムアルゴリズムを有効化 (PPP やその他のプロトコルで使用)。
- Intel Wi-Fi MVM ドライバモジュールのサポートを追加。
- 汎用 Intel ワイヤレスカードドライバのサポートを追加。
- Intel Wi-Fi のデバッグトレース機能を有効化。
- Intel Wi-Fi デバイスの LED インジケータ制御を有効化。
- Microchip LAN743x ギガビットイーサネットコントローラドライバを有効化。
- PPP プロトコルサポートを有効化。
- 非同期シリアルポート上での PPP 接続を有効化。
- Realtek 88 シリーズワイヤレスカードコアドライバのサポートを追加。
- Realtek 8723D Wi-Fi チップのサポートを追加。
- Realtek 8723DU Wi-Fi チップのサポートを追加。
- Realtek 8723X シリーズ Wi-Fi チップのサポートを追加。
- Realtek RTW88 Wi-Fi ドライバのコアモジュールのサポートを追加。
- RTW88 シリーズ Wi-Fi アダプタを USB 経由で使用するためのサポートを追加。
- PPP に必要な圧縮ライブラリのサポートを追加。
- CH341 USB-シリアル変換チップのサポートを追加。

## L4T 36.3

Jetson Linux 36.3はJetPack 6.0の一部です。このバージョンでは、SeeedのBSPがNVIDIAの提供する機能を超えて、以下の追加ドライバーと機能を提供します：

- MCP251XシリーズCANバスコントローラーのサポートを追加。
- MCP251XFD CAN-FDコントローラーのサポートを追加。
- CRC-CCITTチェックサムアルゴリズムを有効化（PPPや類似のプロトコルで使用）。
- I²C ATR（アドレス変換）プロトコルのサポートを有効化。
- 汎用Intelワイヤレスカードドライバーのサポートを追加。
- Intel Wi-Fiのデバイスデバッグトレースサポートを有効化。
- Microchip LAN743xギガビットイーサネットコントローラーのサポートを追加。
- Realtek 88シリーズWi-Fiドライバーのコアモジュールのサポートを追加。
- Realtek 8723D Wi-Fiチップのサポートを追加。
- Realtek 8723DU Wi-Fiチップのサポートを追加。
- Realtek 8723XシリーズWi-Fiチップのサポートを追加。
- TIのTLV320AIC3Xオーディオコーデックドライバーのサポートを追加。
- TLV320AIC3XのI²C制御インターフェースのサポートを追加。
- MAX96717 GMSLデシリアライザーのサポートを追加。
- MAX96724 GMSLデシリアライザーのサポートを追加。
- MAX9296A GMSLビデオデシリアライザーのサポートを追加。
- Maxim GMSLアグリゲーターのサポートを追加。
- TPMコアサポートを有効化。
- SPIインターフェース経由のTPMドライバーのサポートを追加。
- I²Cインターフェース経由のInfineon TPMのサポートを有効化。
- SELinuxセキュリティモジュールを有効化。

## L4T 35.5

Jetson Linux 35.5はJetPack 5.1.3の一部です。このバージョンでは、SeeedのBSPがいくつかのドライバーと機能を追加し、いくつかの設定変更を含みます：

- **IMX219カメラドライバー:** Seeedはこのドライバーをカーネルに組み込みますが、NVIDIAはロード可能モジュールとして提供します。
- **IMX390カメラドライバー:** Seeedは現在このドライバーを無効化していますが、NVIDIAはカーネルに組み込んでいます。
- **LAN743xギガビットイーサネットコントローラードライバー:** Seeedはこれをカーネルに組み込みますが、NVIDIAはロード可能モジュールとして提供します。
- TI DP83867イーサネットPHY（物理層）チップのサポートを有効化。
- NXP PTN5150 USB Type-Cコントローラーチップドライバーのサポートを追加。
- Microchip LAN743xシリーズギガビットイーサネットチップドライバーのサポートを追加。
- nvmem（不揮発性メモリ）フレームワークを有効化し、EEPROM/NVRAMなどのオンボードストレージへのアクセスを可能に。
- STPMIC1電源管理チップのサポートを追加。
- TI TPS65090電源管理チップのサポートを追加。
- LM90温度センサードライバーを有効化。
- NTCサーミスタセンサーのサポートを追加。
- TIのTLV320AIC3Xシリーズオーディオコーデックドライバー（I²Sインターフェース）のサポートを追加。
- TLV320AIC3XのI²C制御インターフェースのサポートを追加。
- 標準化されたUSB Type-Cポートコントローラーインターフェース（TCPCI）のサポートを有効化。
- MediaTek MT6370 Type-Cコントローラードライバーのサポートを追加。
- USBコンソールデバイスサポートを有効化（OTG経由でのシリアルデバッグ用）。
- CH341 USB-to-シリアルアダプタードライバーを有効化。

## L4T 35.3.1

Jetson Linux 35.3.1はJetPack 5.1.1の一部です。このバージョンでは、SeeedのBSPが追加のドライバーと機能を提供し、いくつかの変更を加えています：

- TPMハードウェア乱数生成器をシステムエントロピーソースの1つとして有効化。
- SELinux、AppArmorなどで使用するための`/sys/kernel/security`マウントポイントを有効化。
- コアTPMインターフェースサポートを有効化（SPI/I²C TPMに必要）。
- SPIバス経由でTPMチップにアクセスするためのサポートを追加。
- セキュアブートやキー保存などの機能のためのTPMサポートを有効化。

## リソース

- [Seeed の L4T ソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>