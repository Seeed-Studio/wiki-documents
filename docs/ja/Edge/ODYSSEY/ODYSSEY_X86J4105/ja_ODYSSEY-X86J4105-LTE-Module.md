---
description: ODYSSEY - X86J41x5
title: ODYSSEY 用 LTE モジュール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86J4105-LTE-Module
last_update:
  date: 05/15/2025
  author: w0x7ce

---


この Wiki では、ODYSSEY-X86 上で LTE モジュールを Windows および Linux OS の両方で使用する方法を説明します。この例では、M.2 フォームファクターの [Quectel EM06-E LTE Cat 6 M.2 Module](https://www.seeedstudio.com/Quectel-EM06-E-LTE-Cat6-Module-p-4567.html) を使用します。

両方の OS で、**ホットスポット**機能を使用して Wi-Fi を有効にし、4G LTE を Wi-Fi 信号に変換する方法を示します。これにより、ODYSSEY-X86 を簡単に**4G Wi-Fi ルーター**として使用できます！

## ハードウェア接続

- LTE モジュールを ODYSSEY-X86 の M.2 コネクタに接続します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/connection.png" /></div>

- 4G SIM カードをスロットに接続します。

- LTE モジュールにアンテナを接続します。

## 設定

Quectel EM06-E LTE Cat 6 M.2 Module は、Windows 7/8/8.1/10、Linux、Android、DFOTA などの USB ドライバーを備えています。これにより、非常に簡単に開始でき、ドライバーをインストールする必要がありません。

### Windows

LTE モジュールを接続して Windows を起動すると、USB ドライバーが自動的にインストールされ、使用可能になります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/Windows.png" /></div>

### Windows での Wi-Fi ホットスポット

LTE モジュールでインターネットに接続したら、Windows のホットスポット機能を使用して Wi-Fi を作成できます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/WindowsHS.png" /></div>

:::note
Intel ネットワークカードにもアンテナが接続されていることを確認してください。
:::

### Linux

Linux では、非常に簡単です。ブロードバンド設定を実行します：

:::note
Ubuntu 18.04 を参考にしています。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/1.png" /></div>

国の地域を選択し、ネットワークプロバイダーを選択します：
<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/2.png" /></div>

プランを選択します（デフォルト）：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/3.png" /></div>

詳細を確認し、適用をクリックします：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/4.png" /></div>

これで、LTE モジュールの設定が完了し、インターネットを閲覧できるようになります！

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/5.png" /></div>

### Linux での Wi-Fi ホットスポット

Linux でも、4G ネットワークを使用して Wi-Fi ホットスポットを作成できます。以下は Ubuntu での手順です。

- Ubuntu のネットワーク設定を開き、ターミナルで以下のコマンドを実行します：

```sh
nm-connection-editor
```

以下のウィンドウが表示されます：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-1.png" /></div>

- 接続タイプとして `Wi-Fi` を選択します：

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-2.png" /></div>

- 以下のように Wi-Fi 設定を構成します。**モード**が `Hotspot` であることを確認してください：

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-3.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-4.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-5.png" /></div>
</div>

- 他のデバイスで Wi-Fi を認識させるには、Wi-Fi を自分で接続する必要があります。Wi-Fi の下で `Connect To Hidden Network` を選択します。作成したネットワークを選択し、接続します。

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-6.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-7.png" /></div>
</div>

- これで、Wi-Fi が接続可能になりました！

## 参考資料

- [ODYSSEY – X86J41x5 での 5G の速度はどれくらい速いか | 5G スピードテスト](https://blog.seeedstudio.com/blog/2020/06/15/how-fast-is-5g-on-the-odyssey-x86j4105-5g-speed-test-m/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>