---
description: NVIDIA Jetson デバイスでの Allxon によるリモート管理
title: Allxon の使用開始
tags:
  - Remote Manage
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Allxon-Jetson-Getting-Started
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

# NVIDIA® Jetson デバイスでの Allxon の使用開始

<p style={{textAlign: 'center'}}><img src="https://www.allxon.com/hs-fs/hubfs/Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png?width=1125&height=845&name=Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png" alt="pir" width="1000" height="auto"/></p>

[Allxon](https://www.allxon.com) は、AI/IoT エコシステム（ハードウェア（IHV）、ソフトウェア（ISV）、サービスプロバイダー（SI/MSP））を結び付けることで、ビジネス運用管理を簡素化し最適化する必須のエッジデバイス管理ソリューションです。エコシステムバインダーとして、Allxon はすべてのシステムを ON に保つための高速でシームレスな接続を点火するスパークです。

エッジでのサイバーセキュリティによってすべてのネットワークとハードウェアを保護しながら、NVIDIA® JetPack 4.6 以降のバージョンを安全に管理できます。Allxon は Trend Micro IoT Security™（TMIS）による独占的な脅威インテリジェンスを統合し、多層保護を確実に受けられるようにします。

Allxon は、すべてのエッジデバイスにインバンドおよびアウトオブバンドのリモートデバイス管理サービスを提供し、企業が時間を節約し、指数関数的な労働コストを削減するのに役立ちます。使いやすい単一のクラウドポータルを簡単にナビゲートするだけで、企業は自社のサービスを簡単に最適化し、合理化できます。

## サポートされているハードウェア

- [すべての nvidia jetson デバイスをサポート](https://www.seeedstudio.com/tag/nvidia.html)

## 前提条件

- 上記の Jetson デバイスのいずれか
- Jetson デバイスに既にインストールされた最新の Jetson OS
- モニター、キーボード、マウス（オプション）

## 使用開始

Allxon の使用開始はわずか数分で完了します！

- ハードウェア配線の紹介
- Allxon アカウントのサインアップ
- Jetson デバイスへの Allxon DMS エージェントのインストール
- デバイスペアリングコードの取得
- Allxon DMS ポータルへの Jetson デバイスの追加

### ハードウェア配線の紹介

OOB イネーブラーメインボードのピン定義と対応するケーブルの色。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/writting-1.png" alt="pir" width="500" height="auto"/></p>
ここでは、OBB と Jetson Orin Nano の配線図を例として使用します。以下の情報は、NVIDIA® Jetson™ Orin Nano Dev Kit の配線例を提供します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-2.png" alt="pir" width="700" height="auto"/></p>
配線の回路図も提供しています。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-3.png" alt="pir" width="1000" height="auto"/></p>

### Allxon アカウントのサインアップ

- **ステップ 1.** [このページ](https://dms.allxon.com/next/signup) にアクセスして Allxon アカウントにサインアップします

- **ステップ 2.** メールアドレスを入力して続行します

- **ステップ 3.** 受信したアクティベーションメールからアカウントを確認し、パスワードを作成します

### Jetson デバイスへの Allxon DMS エージェントのインストール

Allxon DMS エージェントのインストールは非常に簡単なプロセスです。1つのコマンドを実行するだけです！

- **ステップ 1.** Jetson デバイスにアクセスし、ターミナルを開いて以下を実行します

```sh
sudo wget -qO - "https://get.allxon.net/linux/standard" | sudo bash -s
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-1.png" alt="pir" width="1000" height="auto"/></p>

**注意:** 上記のコマンドは Allxon DMS Agent と関連パッケージをインストールします

- **ステップ 2.** インストールの最後に、アドオンエッジセキュリティサービスとして **Trend Micro IoT Security™** をインストールし、TMIS EULA に同意するかどうかを尋ねられます。このインストールを続行するには **Y** を入力してください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-2.jpg" alt="pir" width="1000" height="auto"/></p>

**注意:** Trend Micro IoT Security™ は 3 ヶ月間の無料トライアルとしてインストールされます

インストール後、Allxon DMS Agent は自動的に開始されます。

**注意:** Jetson Device をディスプレイに接続している場合、Allxon DMS Agent ウィンドウがポップアップ表示されます。表示されない場合は、**Ctrl + Shift + B** を押してエージェントを開始してください。

### デバイスペアリングコードの取得

まず、Jetson Device からデバイスペアリングコードを取得する必要があります。このコードは GUI またはコマンドラインから取得できます

#### GUI を使用する場合

- **ステップ 1.** Jetson Device で **Ctrl + Shift + B** を押して Allxon DMS Agent を開きます

- **ステップ 2.** **Get device pairing code** をクリックしてコードを取得します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/agent-2.png" alt="pir" width="700" height="auto"/></p>

#### コマンドラインを使用する場合

- **ステップ 1.** 以下を実行してコードを取得します

```sh
dms-get-pairing-code
```

### Jetson デバイスを Allxon DMS ポータルに追加する

- **ステップ 1.** 以前に使用した認証情報で [Allxon DMS ポータル](https://dms.allxon.com/next/signin) にログインします

- **ステップ 2.** 左側のナビゲーションパネルから **Devices** をクリックし、**+ Add Device** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-1.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 3.** **Next** をクリックし、以前に取得したデバイスペアリングコードを入力して **Next** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-2.png" alt="pir" width="450" height="auto"/></p>

- **ステップ 4.** ペアリングが成功すると、以下のウィンドウが表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-3.png" alt="pir" width="450" height="auto"/></p>

**注意:** プロモーションコードをお持ちの場合は、**Next** をクリックして利用できます。そうでなければ、**Skip** を押してセットアップを完了できます。

### Allxon DMS ポータル

Jetson デバイスが Allxon DMS ポータルとペアリングされた後、**Devices** ページで接続されたデバイスを確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-4.png" alt="pir" width="1000" height="auto"/></p>

デバイスをクリックすると、デバイスの詳細情報が表示されます。これで Allxon DMS ポータルを使用してデバイスをリモートで監視・管理できます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-5.png" alt="pir" width="1000" height="auto"/></p>

## リソース

- **[Web Page]** [Allxon リソースセンター](https://www.allxon.com/knowledge)

- **[Web Page]** [NVIDIA Learn](https://developer.nvidia.com/embedded/learn)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
