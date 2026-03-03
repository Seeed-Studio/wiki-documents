---
description: ネットワーク接続と潜在的なトラブルシューティング
title: よくある質問
keywords:
  - Edge
  - reCamera
  - network
  - network troubleshoot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/recamera_network_connection
sidebar_position: 6
last_update:
  date: 04/08/2025
  author: Parker Hu
---

# よくある質問

reCamera のネットワーク設定中に USB 接続デバイスが reCamera を認識しない状況や、ネットワーク設定後にネットワーク接続が失敗する問題が発生した場合は、この記事を参照してください。

Windows システムでのドライバーのインストール、Linux システムでのネットワークカードの確認、Mac システムでのネットワーク優先度の設定など、コンピューターのネットワーク環境を変更・設定する必要があります。

## 作業環境の設定

### USB NET セットアップ

USB ネットワーキングを使用するため、システムでは UsbNcm と DHCP をデフォルトで有効にしています。
UsbNcm は Linux、macOS、および最新の Windows システムでドライバー不要です。`ssh recamera@192.168.42.1`、`passwd = recamera` を使用して直接 recamera のターミナルにログインできます。

- [Windows](#jump1)
- [Linux](#jump2)
- [MacOS](#jump3)

### <span id="jump1"> Windows </span>

画像に示すように、Ncm ドライバーがコンピューターに正しくインストールされていることを確認してください。これは、デバイス マネージャー -> ネットワーク アダプターで確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/002.png" /></div>

お使いのマシンにこのドライバーがない場合は、以下の手順に従って Ncm をインストールしてください。

#### Windows 用 NCM のインストール

**ステップ1**:
`win+x` を押して `Device Manager` を選択します。
`other devices` で認識されていないデバイスを見つけて、`Update driver` を選択します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/003.png" /></div>

**ステップ2**:
`Browse my computer for drivers` を選択します

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/004.png" /></div>

**ステップ3:**:
`Let me pick from a list of available drivers on my computer` を選択します

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/005.png" /></div>

**ステップ4:**:
`Network adapters` を選択して、`next` をクリックします

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/014.png" /></div>

**ステップ5**: `Microsoft` -> `UsbNcm Host Device` を選択して、Next をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/006.png" /></div>

**ステップ6**: アラートバーがポップアップしたら、`Yes` を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/007.png" /></div>

**ステップ7**: ターミナルウィンドウで ping 192.168.42.1 と入力します。
<br />
以下の出力は、reCamera への接続が成功したことを示しています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/008.png" /></div>

### <span id="jump2"> Linux </span>

追加の設定は不要で、USB ケーブルを接続するだけです。`ifconfig` と入力すると、usb1 ネットワークアダプターが表示されます。例：192.168.42.89。デバイスの IP は 192.168.42.1 です

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/009.png" /></div>

### <span id="jump3"> MacOS </span>

システム設定 -> ネットワークで USB ネットワークアダプターを確認してください。デバイスの IP は 192.168.42.1 です

## コンピューターネットワークエラー

### windows

Windows 10 システムのコンピューターで reCamera の USB ネットワークを使用した後にネットワークアクセスの問題が発生した場合。
`win+x` を押して Control Panel をクリックします。All Control Panel Items -> Network Connections を選択します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/010.png" /></div>

UsbNcm Host Device を右クリックします。`Properties` -> `TCP/IPv4` -> `Properties` -> `Advanced` -> `Automatic metric` のチェックを外す -> `Interface metric` フィールドに `255` を入力 -> `ok` をクリック
<br />

これでネットワークが復旧します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/011.png" /></div>

### MAC

コンピューターが MacOS を実行している場合。コンピューターのネットワークカード UsbNcm ネットワークカードの優先度を最後に設定するだけです

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/012.png" /></div>

具体的な設定は以下の通りです：

**ステップ1**: `System Settings` を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/015.png" /></div>

**ステップ2**: この順序が表示されますが、これを変更します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/016.png" /></div>

**ステップ3**: 一番下までドラッグして、クリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/017.png" /></div>

**ステップ4**: `Set Service Order` を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/018.png" /></div>

**ステップ5**: NCM を Wi-Fi の下にドラッグして、`ok` をクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/019.png" /></div>

**ステップ6**: 最後に、表示された設定を確認してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/020.png" /></div>

## リソース

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera シリーズ](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
