---
description: ネットワーク接続といくつかの潜在的なトラブルシューティング
title: FAQ
keywords:
  - Edge
  - reCamera
  - network
  - network troubleshoot
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/recamera_network_connection
sidebar_position: 4
last_update:
  date: 04/08/2025
  author: Parker Hu
---

# よくある質問

reCameraのネットワーク設定中にUSB接続デバイスがreCameraを認識できない状況や、ネットワーク設定後にネットワーク接続が失敗する問題が発生した場合は、この記事を参照してください。

Windowsシステムでのドライバーのインストール、Linuxシステムでのネットワークカードの確認、Macシステムでのネットワーク優先度の設定など、コンピューターのネットワーク環境を変更・設定する必要があります。

## 作業環境の設定

### USB NET設定

USBネットワーキングを使用するために、システムでUsbNcmとDHCPをデフォルトで有効にしています。
UsbNcmは、Linux、macOS、および最新のWindowsシステムでドライバー不要です。`ssh recamera@192.168.42.1`、`passwd = recamera`を使用してreCameraのターミナルに直接ログインできます。

- [Windows](#jump1)
- [Linux](#jump2)
- [MacOS](#jump3)

### <span id="jump1"> Windows </span>

Ncmドライバーがコンピューターに正しくインストールされていることを確認してください（画像のとおり）。これは、デバイスマネージャー -> ネットワークアダプターで確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/002.png" /></div>

お使いのマシンにこのドライバーがない場合は、以下の手順に従ってNcmをインストールしてください。

#### Windows用NCMのインストール

**ステップ1**:
`win+x`を押して`デバイスマネージャー`を選択します。
`その他のデバイス`で認識されていないデバイスを見つけて、`ドライバーの更新`を選択します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/003.png" /></div>

**ステップ2**:
`コンピューターを参照してドライバーを検索`を選択します

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/004.png" /></div>

**ステップ3:**:
`コンピューター上の利用可能なドライバーの一覧から選択します`を選択します

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/005.png" /></div>

**ステップ4:**:
`ネットワークアダプター`を選択して`次へ`をクリックします

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/014.png" /></div>

**ステップ5**:`Microsoft` -> `UsbNcm Host Device`を選択して次へをクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/006.png" /></div>

**ステップ6**:アラートバーがポップアップしたら、`はい`を選択します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/007.png" /></div>

**ステップ7**:ターミナルウィンドウでping 192.168.42.1と入力します。
<br />
以下の出力は、reCameraに正常に接続できたことを示しています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/008.png" /></div>

### <span id="jump2"> Linux </span>

追加の設定は不要で、USBケーブルを接続するだけです。`ifconfig`と入力すると、usb1ネットワークアダプターが表示されます。例：192.168.42.89。デバイスのIPは192.168.42.1です

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/009.png" /></div>

### <span id="jump3"> MacOS </span>

システム設定 -> ネットワークでUSBネットワークアダプターを確認してください。デバイスのIPは192.168.42.1です

## コンピューターネットワークエラー

### windows

Windows 10システムのコンピューターでreCameraのUSBネットワークを使用した後にネットワークアクセスの問題が発生した場合。
`win+x`を押してコントロールパネルをクリックします。すべてのコントロールパネル項目 -> ネットワーク接続を選択します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/010.png" /></div>

UsbNcm Host Deviceを右クリックします。`プロパティ` -> `TCP/IPv4` -> `プロパティ` -> `詳細設定` -> `自動メトリック`のチェックを外す -> `インターフェースメトリック`フィールドに`255`を入力 -> `ok`をクリック
<br />

これでネットワークが復旧します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/011.png" /></div>

### MAC

コンピューターがMacOSを実行している場合。コンピューターネットワークカードUsbNcmネットワークカードの優先度を最後に設定するだけです

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/012.png" /></div>

具体的な設定は以下の通りです：

**step1**: `システム設定`を選択

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/015.png" /></div>

**step2**: この順序が表示されます。これから変更します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/016.png" /></div>

**step3**: 一番下までドラッグして、クリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/017.png" /></div>

**step4**: `サービスの順序を設定`を選択

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/018.png" /></div>

**step5**: NCMをWi-Fiの下にドラッグして`ok`をクリック

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/019.png" /></div>

**step6**: 最後に、表示された設定を確認してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/020.png" /></div>

## リソース

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera Series](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
