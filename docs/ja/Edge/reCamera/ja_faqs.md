---
description: ネットワーク接続と潜在的なトラブルシューティング
title: FAQs
keywords:
  - Edge
  - reCamera
  - ネットワーク
  - ネットワークトラブルシューティング
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/recamera_network_connection
sidebar_position: 4
last_update:
  date: 05/15/2025
  author: Parker Hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# よくある質問 (FAQs)

ネットワーク設定中に USB 接続デバイスが reCamera を認識しない場合や、ネットワーク設定後にネットワーク接続が失敗する問題が発生した場合は、この記事を参照してください。

Windows システムでのドライバのインストール、Linux システムでのネットワークカードの確認、Mac システムでのネットワーク優先順位の設定など、コンピュータのネットワーク環境を変更および設定する必要があります。

## 作業環境のセットアップ

### USB ネットワーク設定
USB ネットワークを使用するために、システムではデフォルトで UsbNcm と DHCP を有効にしています。  
UsbNcm は Linux、macOS、および最新の Windows システムでドライバ不要です。以下のコマンドを使用して、直接 reCamera のターミナルにログインできます：  
`ssh recamera@192.168.42.1` 、`passwd = recamera`。

- [Windows](#jump1)
- [Linux](#jump2)
- [MacOS](#jump3)

### <span id="jump1"> Windows </span>
Ncm ドライバがコンピュータに正しくインストールされていることを確認してください。以下の画像のように、デバイスマネージャー -> ネットワークアダプタで確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/002.png" /></div>

もしこのドライバがインストールされていない場合は、以下の手順に従って Ncm をインストールしてください。

#### Windows 用 NCM のインストール

**ステップ1**:  
`win+x` を押して `デバイスマネージャー` を選択します。  
`その他のデバイス` にある認識されていないデバイスを見つけて、`ドライバーの更新` を選択します。  
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/003.png" /></div>

**ステップ2**:  
`コンピューターを参照してドライバーを検索` を選択します。

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/004.png" /></div>

**ステップ3**:  
`コンピューター上の利用可能なドライバーの一覧から選択` を選択します。

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/005.png" /></div>

**ステップ4**:  
`ネットワークアダプタ` を選択し、`次へ` をクリックします。

<br />

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/014.png" /></div>

**ステップ5**:  
`Microsoft` -> `UsbNcm Host Device` を選択し、`次へ` をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/006.png" /></div>

**ステップ6**:  
警告バーが表示されたら、`はい` を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/007.png" /></div>

**ステップ7**:  
ターミナルウィンドウで `ping 192.168.42.1` を入力します。  
<br />
以下の出力が表示されれば、reCamera への接続に成功しています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/008.png" /></div>

### <span id="jump2"> Linux </span>

追加の設定は不要です。USB ケーブルを接続するだけです。`ifconfig` を入力すると、usb1 ネットワークアダプタが表示されます。例: 192.168.42.89。デバイスの IP は 192.168.42.1 です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/009.png" /></div>

### <span id="jump3"> MacOS </span>

システム設定 -> ネットワークで USB ネットワークアダプタを確認します。デバイスの IP は 192.168.42.1 です。

## コンピュータネットワークエラー

### Windows

Windows 10 システムのコンピュータで reCamera の USB ネットワークを使用した後にネットワークアクセスの問題が発生した場合、以下の手順を実行してください。
`win+x` を押してコントロールパネルをクリックします。次に、[すべてのコントロールパネル項目] -> [ネットワーク接続] を選択します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/010.png" /></div>

UsbNcm Host Device を右クリックします。[プロパティ] -> [TCP/IPv4] -> [プロパティ] -> [詳細設定] を選択します。[自動メトリック] のチェックを外し、[インターフェイスメトリック] フィールドに `255` を入力して [OK] をクリックします。
<br />

これでネットワークが復旧します。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/011.png" /></div>

### Mac

MacOS を使用している場合、コンピュータのネットワークカード UsbNcm ネットワークカードの優先順位を最後に設定するだけで済みます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/012.png" /></div>

具体的な設定手順は以下の通りです：

**ステップ1**: [システム設定] を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/015.png" /></div>

**ステップ2**: この順序が表示されます。これを変更します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/016.png" /></div>

**ステップ3**: 一番下までドラッグしてクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/017.png" /></div>

**ステップ4**: [サービス順序を設定] を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/018.png" /></div>

**ステップ5**: NCM を Wi-Fi の下にドラッグして [OK] をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/019.png" /></div>

**ステップ6**: 最終的に以下の設定が表示されるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/020.png" /></div>


## リソース

[reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

[reCamera シリーズ](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>