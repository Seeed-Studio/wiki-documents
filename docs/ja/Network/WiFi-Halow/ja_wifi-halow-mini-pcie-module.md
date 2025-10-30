---
description: Wi-Fi HaLow Mini PCIe モジュールの使用開始
title: Wi-Fi HaLow Mini PCIe モジュールの使用開始
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/0.webp
slug: /ja/getting_started_with_wifi_halow_mini_pcie_module
last_update:
  date: 02/12/2025
  author: Citric
---

# Wi-Fi HaLow Mini PCIe モジュールの使用開始

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-mini-PCIe-Module-p-6394.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div><br />

このガイドでは、Wi-Fi HaLow Mini PCIe モジュールのセットアップと使用方法について説明し、Wi-Fi HaLow ゲートウェイの構築方法を紹介します。Mini PCIe フォームファクターにより、既存システムへの Wi-Fi HaLow 接続の統合が容易になり、長距離にわたって多数の低電力デバイスを接続できる IoT ゲートウェイを作成できます。

## 概要

Wi-Fi HaLow Mini PCIe モジュールは、IoT アプリケーション向けの長距離ワイヤレス接続を可能にするよう設計されています。以下の機能を提供します：

- 簡単な統合のための標準 Mini PCIe インターフェース
- IEEE 802.11ah Wi-Fi HaLow プロトコルのサポート
- 見通し距離最大 1km の範囲
- 低消費電力
- 数千の IoT デバイスを接続する能力

## Wi-Fi HaLow とは？

Wi-Fi HaLow（IEEE 802.11ah）は、モノのインターネット（IoT）アプリケーション専用に設計されたワイヤレスネットワーキング技術です。1GHz 未満の周波数帯で動作し、いくつかの主要な利点を提供します：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

### 主な利点

- **拡張範囲**：見通し条件で最大 1 キロメートルに到達でき、従来の Wi-Fi を大幅に上回ります
- **優れた透過性**：低周波数信号は壁や障害物をより効果的に透過できます
- **エネルギー効率**：バッテリー駆動の IoT デバイス向けに最適化
- **高いスケーラビリティ**：アクセスポイントあたり数千の接続デバイスをサポート
- **ネイティブ IP サポート**：既存の IP ネットワークとのシームレスな統合

### アプリケーション

Wi-Fi HaLow は以下に最適です：

- スマート農業
- 産業 IoT
- スマートシティ
- ビルディングオートメーション
- 環境モニタリング
- 資産追跡

### 重要性

Wi-Fi HaLow は IoT 展開における重要な課題に対処します：

1. **カバレッジギャップ**：短距離 Wi-Fi とセルラーネットワーク間のギャップを埋めます
2. **バッテリー寿命**：バッテリー電源で数年間の動作を可能にします
3. **展開コスト**：セルラーソリューションと比較してインフラストラクチャコストを削減
4. **標準化**：採用しやすい馴染みのある Wi-Fi 標準に基づいています
5. **セキュリティ**：エンタープライズグレードの WPA3 セキュリティを組み込んでいます

長距離、低電力、高デバイス密度の機能を組み合わせることで、Wi-Fi HaLow は様々な業界における大規模 IoT 展開の主要技術となる位置にあります。

## OpenWrt概要

Wi-Fi HaLow Mini PCIeモジュールはOpenWrt上で動作します。OpenWrtは、主にルーターなどの組み込みデバイス向けに設計された、高い拡張性を持つLinuxオペレーティングシステムです。OpenWrtがWi-Fi HaLowゲートウェイにとって優れたプラットフォームである理由は以下の通りです：

### OpenWrtとは？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" style={{width:800, height:'auto'}}/></div>

OpenWrtは以下の機能を提供するLinuxベースのオペレーティングシステムです：

- パッケージ管理機能付きの完全書き込み可能ファイルシステム
- 機能をカスタマイズできる高いモジュール性
- 幅広い組み込みデバイスのサポート
- アクティブな開発コミュニティと定期的なアップデート
- 豊富なネットワーキング機能

### Wi-Fi HaLow展開のメリット

OpenWrtがWi-Fi HaLowゲートウェイにとって理想的なプラットフォームである理由：

- **安定性**: 24時間365日の運用に対応する堅牢なLinux基盤
- **柔軟性**: 特定のIoT要件に合わせた簡単なカスタマイズ
- **パフォーマンス**: 効率的なデータ処理のために最適化されたネットワーキングスタック
- **セキュリティ**: エンタープライズグレードのセキュリティ機能を内蔵
- **コミュニティ**: 開発者とユーザーの大規模なエコシステム

OpenWrtとWi-Fi HaLowの組み合わせにより、小規模な展開から大規模な産業設備まで拡張可能な堅牢なIoTネットワークを構築するための強力な基盤が生まれます。

## 必要な材料

このチュートリアルを実行するために必要な材料は以下の通りです。

<div class="table-center">
    <table align="center">
        <tr>
            <th>Raspberry Pi 4 Model B</th>
            <th>WiFi HaLow Mini PCIe Module</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/raspberrypi4b.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-mini-PCIe-Module-p-6394.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

さらに、以下のアイテムが必要です：

- **[Mini PCIe to PCIe adapter](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html)** - Wi-Fi HaLow Mini PCIe ModuleをRaspberry Piに接続するため。
- **Raspberry Pi用ヒートシンク** - 連続動作時の熱管理に推奨。
- **MicroSDカード（8GB以上）** - OpenWrtファームウェアを保存するため。
- **MicroSDカードリーダー** - MicroSDカードを読み取るため。
- **Ethernetケーブル** - ホストコンピュータに接続し、Raspberry PiのWiFi-Halowを設定するために使用。
- **Raspberry Pi用電源**
- **コンピュータ** - ファームウェアの書き込みとRaspberry PiのWiFi-Halowの設定用。
- **アンテナ** - Wi-Fi HaLow Mini PCIe Moduleの範囲を拡張するため。以下は検証済みの推奨アンテナモデルです。

<div class="table-center">
    <table align="center">
        <tr>
            <th>Long Range Indoor Antenna Kit</th>
            <th>2.6dBi Long Range Antenna</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

WiFi-Halowモジュールにアンテナを接続するには、**SMA to I-PEXアンテナケーブル**の購入も必要になる場合があります。

<div class="table-center">
    <table align="center">
        <tr>
            <th>SMA to I-PEXアンテナケーブル</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

初回使用の場合は、アンテナの取り付けについて以下の動画を参考にしてください。

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_pcie_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Raspberry Pi への WiFi Halow for OpenWrt のインストール

このセクションでは、事前にビルドされた OpenWrt ファームウェアイメージを使用して、Raspberry Pi 4 を Wi-Fi HaLow ゲートウェイとして設定する方法を説明します。

### ファームウェアのダウンロード

Wi-Fi HaLow サポート付きの事前ビルド済み OpenWrt イメージを以下からダウンロードしてください：

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Wvirgil123/openwrt/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> イメージをダウンロード</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### MicroSD カードへのファームウェアの書き込み

1. **[balenaEtcher](https://www.balena.io/etcher/)** をダウンロードしてインストールします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/balenaEtcher.png" style={{width:1000, height:'auto'}}/></div>

2. MicroSD カードをコンピュータに挿入します。
3. balenaEtcher を起動します。
4. 「Flash from file」をクリックし、ダウンロードした OpenWrt ファームウェアを選択します。
5. MicroSD カードをターゲットとして選択します。
6. 「Flash!」をクリックし、プロセスが完了するまで待ちます。

### セットアップと初回起動

1. 書き込み済みの MicroSD カードを Raspberry Pi 4 に挿入します
2. コンピュータと Raspberry Pi の間にイーサネットケーブルを接続します
3. Raspberry Pi の電源を入れます
4. システムが起動するまで約 2-3 分待ちます

### ゲートウェイインターフェースへのアクセス

1. コンピュータのイーサネットインターフェースを DHCP を使用するように設定するか、10.42.0.x 範囲で静的 IP を設定します
2. ウェブブラウザを開きます
3. http://10.42.0.1/ にアクセスします
4. Morse Micro ログインページが表示されます

:::note
デフォルトのログイン認証情報は以下の通りです：

- ユーザー名：root
- パスワードの入力は不要

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
インターフェースにアクセスできない場合：

- イーサネット接続を確認してください
- コンピュータが IP アドレスを受信していることを確認してください
- 10.42.0.1 に ping を送信して接続性を確認してください

:::

## Raspberry Pi をアクセスポイントとして設定する

Morse Micro インターフェースにログインします。ウェルカムページで、以下の画像の例に従って国を設定してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.png" style={{width:1000, height:'auto'}}/></div>

:::caution
現在、このデバイスは米国のみをサポートしており、他の国や地域はサポートしていません。
:::

国を設定した後、実際の状況に応じて **Hostname** と **Password** を設定できます。この情報は安全に保管してください。後でデバイスにアクセス（ssh）する際にこのパスワードが必要になります。その後、右下角の **Next** ボタンをクリックします。

新しいページで **Access Point** オプションを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/3.png" style={{width:1000, height:'auto'}}/></div>

次に **Next** ボタンをクリックし、新しいページで Wi-Fi HaLow ネットワークの認証情報を設定します。クライアントデバイスが接続する際に必要になるため、これらを覚えておいてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/4.png" style={{width:1000, height:'auto'}}/></div>

**Next** ボタンをクリックし、新しいページで **Ethernet** を選択して **Bridge** を選択します。この方法でネットワークを設定することで、イーサネットと Wi-Fi ネットワーク上のデバイス間でシームレスな通信が可能になり、接続されたデバイスに統一されたネットワーク体験を提供できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/5.png" style={{width:1000, height:'auto'}}/></div>

その後、ネットワーク設定が有効になるまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/6.png" style={{width:1000, height:'auto'}}/></div>

以下のインターフェースが表示されたら、Raspberry Pi をコンピューターから切断し、ルーターと Raspberry Pi の間にイーサネットケーブルを接続できます。その後、ルーターの管理ページを通じて Raspberry Pi の IP アドレスを確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/7.png" style={{width:1000, height:'auto'}}/></div>

私のデバイスの場合、IP アドレスは：<strong>192.168.1.168</strong> です。ブラウザでこのアドレスを入力すると、Wi-Fi HaLow ゲートウェイのバックエンドページにアクセスできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/8.png" style={{width:1000, height:'auto'}}/></div>

## リソース

- **[PDF]** [UG MM6108 Eval Kit User Guide 2.6 - v18](https://files.seeedstudio.com/wiki/wifi_halow/res/UG_MM6108_Eval_Kit_User_Guide_2.6-v18.pdf)
- **[PDF]** [Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)
- **[PDF]** [WiFi-Halow Mini PCIe Module SCH PDF](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30_SCH_20241107.pdf)
- **[KiCAD]** [WiFi-Halow Mini PCIe Module KiCAD PCB File](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30.kicad_pcb)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
