---
description: Wi-Fi HaLow Mini PCIeモジュールの使い方
title: Wi-Fi HaLow Mini PCIeモジュールの使い方
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/0.webp
slug: /ja/getting_started_with_wifi_halow_mini_pcie_module
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Wi-Fi HaLow Mini PCIeモジュールの使い方

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-mini-PCIe-Module-p-6394.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

このガイドでは、Wi-Fi HaLow Mini PCIeモジュールをセットアップして使用し、Wi-Fi HaLowゲートウェイを構築する方法を説明します。Mini PCIeフォームファクターにより、既存のシステムにWi-Fi HaLow接続を簡単に統合し、低消費電力デバイスを長距離で接続できるIoTゲートウェイを作成することができます。

## 概要

Wi-Fi HaLow Mini PCIeモジュールは、IoTアプリケーション向けに長距離のワイヤレス接続を可能にするよう設計されています。このモジュールは以下の特徴を備えています：

- 簡単に統合できる標準Mini PCIeインターフェース
- IEEE 802.11ah Wi-Fi HaLowプロトコルのサポート
- 見通し距離で最大1kmの範囲
- 低消費電力
- 数千のIoTデバイスを接続可能

## Wi-Fi HaLowとは？

Wi-Fi HaLow（IEEE 802.11ah）は、特にIoT（モノのインターネット）アプリケーション向けに設計されたワイヤレスネットワーク技術です。1GHz未満の周波数帯で動作し、以下のような主要な利点を提供します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

### 主な利点

- **拡張された範囲**: 見通し距離で最大1kmに到達可能で、従来のWi-Fiを大幅に超える範囲
- **優れた障害物貫通性**: 低周波数信号は壁や障害物をより効果的に通過
- **エネルギー効率**: バッテリー駆動のIoTデバイス向けに最適化
- **高いスケーラビリティ**: アクセスポイントあたり数千のデバイスをサポート
- **ネイティブIPサポート**: 既存のIPネットワークとのシームレスな統合

### アプリケーション

Wi-Fi HaLowは以下の用途に最適です：

- スマート農業
- 産業用IoT
- スマートシティ
- ビルオートメーション
- 環境モニタリング
- 資産追跡

### なぜ重要なのか

Wi-Fi HaLowは、IoT展開における重要な課題に対応します：

1. **カバレッジギャップ**: 短距離Wi-Fiとセルラーネットワークの間のギャップを埋める
2. **バッテリー寿命**: バッテリー駆動で数年間の運用を可能に
3. **展開コスト**: セルラーソリューションと比較してインフラコストを削減
4. **標準化**: より簡単に採用できるWi-Fi標準に基づく
5. **セキュリティ**: エンタープライズグレードのWPA3セキュリティを組み込み

長距離、低消費電力、高デバイス密度の能力を組み合わせることで、Wi-Fi HaLowはさまざまな業界での大規模なIoT展開において重要な技術となることが期待されています。

## OpenWrt 概要

Wi-Fi HaLow Mini PCIe モジュールは、主にルーターのような組み込みデバイス向けに設計された高拡張性のLinuxオペレーティングシステムであるOpenWrt上で動作します。以下は、Wi-Fi HaLowゲートウェイにとってOpenWrtが優れたプラットフォームである理由です。

### OpenWrtとは？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" style={{width:800, height:'auto'}}/></div>

OpenWrtは以下を提供するLinuxベースのオペレーティングシステムです：

- パッケージ管理が可能な完全書き込み可能なファイルシステム
- 機能をカスタマイズ可能な高いモジュール性
- 幅広い組み込みデバイスのサポート
- 活発な開発コミュニティと定期的なアップデート
- 広範なネットワーキング機能

### Wi-Fi HaLow 導入における利点

OpenWrtはWi-Fi HaLowゲートウェイにとって理想的なプラットフォームを提供します。その理由は以下の通りです：

- **安定性**：24時間365日稼働可能な堅牢なLinux基盤
- **柔軟性**：特定のIoT要件に合わせた簡単なカスタマイズ
- **性能**：効率的なデータ処理のために最適化されたネットワーキングスタック
- **セキュリティ**：エンタープライズグレードのセキュリティ機能を内蔵
- **コミュニティ**：開発者とユーザーの大規模なエコシステム

OpenWrtとWi-Fi HaLowの組み合わせにより、小規模な導入から大規模な産業用インストールまでスケール可能な堅牢なIoTネットワークを構築するための強力な基盤が生まれます。

## 必要な材料

このチュートリアルを実行するために必要な材料は以下の通りです。

<div class="table-center">
    <table align="center">
        <tr>
            <th>Raspberry Pi 4 Model B</th>
            <th>WiFi HaLow Mini PCIe モジュール</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/raspberrypi4b.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-Halow-mini-PCIe-Module-p-6394.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

さらに、以下のアイテムが必要です：

- **[Mini PCIe to PCIe アダプタ](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html)** - Wi-Fi HaLow Mini PCIe モジュールをRaspberry Piに接続するため。
- **Raspberry Pi用ヒートシンク** - 継続的な動作中の熱管理のために推奨。
- **MicroSDカード (8GB以上)** - OpenWrtファームウェアを保存するため。
- **MicroSDカードリーダー** - MicroSDカードを読み取るため。
- **イーサネットケーブル** - ホストコンピュータに接続し、Raspberry PiのWiFi-HaLowを設定するために使用。
- **Raspberry Pi用電源**
- **コンピュータ** - ファームウェアのフラッシュとRaspberry PiのWiFi-HaLowの設定に使用。
- **アンテナ** - Wi-Fi HaLow Mini PCIe モジュールの範囲を拡張するため。以下は検証済みの推奨アンテナモデルです。

<div class="table-center">
    <table align="center">
        <tr>
            <th>長距離屋内アンテナキット</th>
            <th>2.6dBi 長距離アンテナ</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

WiFi-HaLowモジュールにアンテナを接続するには、**SMA to I-PEX アンテナケーブル**を購入する必要がある場合があります。

<div class="table-center">
    <table align="center">
        <tr>
            <th>SMA to I-PEX アンテナケーブル</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

初めて使用する場合は、以下のビデオを参考にしてアンテナを取り付けてください。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_pcie_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## OpenWrtをRaspberry PiにWiFi Halowをインストールする

このセクションでは、事前に構築されたOpenWrtファームウェアイメージを使用して、Raspberry Pi 4をWi-Fi HaLowゲートウェイとして設定する手順を説明します。

### ファームウェアのダウンロード

Wi-Fi HaLow対応の事前構築済みOpenWrtイメージを以下からダウンロードしてください：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Wvirgil123/openwrt/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> イメージをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### ファームウェアをMicroSDカードに書き込む

1. **[balenaEtcher](https://www.balena.io/etcher/)** をダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/balenaEtcher.png" style={{width:1000, height:'auto'}}/></div>

2. MicroSDカードをコンピュータに挿入します。
3. balenaEtcherを起動します。
4. 「Flash from file」をクリックし、ダウンロードしたOpenWrtファームウェアを選択します。
5. MicroSDカードをターゲットとして選択します。
6. 「Flash!」をクリックし、プロセスが完了するまで待ちます。

### セットアップと初回起動

1. 書き込んだMicroSDカードをRaspberry Pi 4に挿入します。
2. コンピュータとRaspberry Piをイーサネットケーブルで接続します。
3. Raspberry Piの電源を入れます。
4. システムが起動するまで約2～3分待ちます。

### ゲートウェイインターフェースへのアクセス

1. コンピュータのイーサネットインターフェースをDHCPに設定するか、10.42.0.x範囲内の静的IPを設定します。
2. Webブラウザを開きます。
3. 以下のURLにアクセスします: http://10.42.0.1/
4. Morse Microのログインページが表示されるはずです。

:::note
デフォルトのログイン情報は以下の通りです：
- ユーザー名: root
- パスワード入力は不要
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
インターフェースにアクセスできない場合：
- イーサネット接続を確認してください。
- コンピュータがIPアドレスを取得しているか確認してください。
- 10.42.0.1にpingを送信して接続を確認してください。
:::

## Raspberry Piをアクセスポイントとして設定する

Morse Microインターフェースにログインします。ウェルカムページで、以下の画像の例に従って国を設定してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.png" style={{width:1000, height:'auto'}}/></div>

:::caution
現在、このデバイスは米国のみをサポートしており、他の国や地域はサポートしていません。
:::

国を設定した後、**ホスト名**と**パスワード**を実際の状況に応じて設定してください。この情報は安全に保管してください。後でデバイスにアクセスする際（ssh）にこのパスワードが必要になります。その後、右下の**Next**ボタンをクリックします。

新しいページで**Access Point**オプションを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/3.png" style={{width:1000, height:'auto'}}/></div>

次に**Next**ボタンをクリックし、新しいページでWi-Fi HaLowネットワークの認証情報を設定します。これらの情報を記憶してください。クライアントデバイスが接続する際に必要になります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/4.png" style={{width:1000, height:'auto'}}/></div>

**Next**ボタンをクリックし、新しいページで**Ethernet**を選択して**Bridge**を選択します。このようにネットワークを構成することで、イーサネットとWi-Fiネットワーク間でシームレスな通信が可能になり、接続されたデバイスに統一されたネットワーク体験を提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/5.png" style={{width:1000, height:'auto'}}/></div>

その後、ネットワーク構成が有効になるのを待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/6.png" style={{width:1000, height:'auto'}}/></div>

以下のインターフェースが表示されたら、Raspberry Piをコンピュータから切断し、ルーターとRaspberry Piの間にイーサネットケーブルを接続します。その後、ルーターの管理ページでRaspberry PiのIPアドレスを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/7.png" style={{width:1000, height:'auto'}}/></div>

私のデバイスの場合、IPアドレスは<strong>192.168.1.168</strong>です。このアドレスをブラウザに入力すると、Wi-Fi HaLowゲートウェイのバックエンドページにアクセスできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/8.png" style={{width:1000, height:'auto'}}/></div>

## リソース

- **[PDF]** [UG MM6108 Eval Kit ユーザーガイド 2.6 - v18](https://files.seeedstudio.com/wiki/wifi_halow/res/UG_MM6108_Eval_Kit_User_Guide_2.6-v18.pdf)
- **[PDF]** [Quectel_FGH100M-H_短距離モジュール仕様書_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)
- **[PDF]** [WiFi-Halow Mini PCIe モジュール回路図 PDF](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30_SCH_20241107.pdf)
- **[KiCAD]** [WiFi-Halow Mini PCIe モジュール KiCAD PCB ファイル](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30.kicad_pcb)

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