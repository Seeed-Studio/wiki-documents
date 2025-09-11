---
description: NVIDIA Jetson デバイスで Allxon を使用したリモート管理
title: Allxon の使い方
tags:
  - リモート管理
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Allxon-Jetson-Getting-Started
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# NVIDIA® Jetson デバイスで Allxon を使用するためのガイド

<p style={{textAlign: 'center'}}><img src="https://www.allxon.com/hs-fs/hubfs/Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png?width=1125&height=845&name=Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png" alt="pir" width="1000" height="auto"/></p>

[Allxon](https://www.allxon.com) は、AI/IoT エコシステム（ハードウェア（IHV）、ソフトウェア（ISV）、サービスプロバイダー（SI/MSP））を結びつけることで、ビジネス運用管理を簡素化し最適化する重要なエッジデバイス管理ソリューションです。エコシステムの結束役として、Allxon はすべてのシステムを稼働状態に保つための迅速でシームレスな接続を実現します。

NVIDIA® JetPack 4.6 以降のバージョンを、エッジでのサイバーセキュリティによってすべてのネットワークとハードウェアを保護しながら安全に管理できます。Allxon は Trend Micro IoT Security™（TMIS）による独自の脅威インテリジェンスを統合し、多層的な保護を提供します。

Allxon は、すべてのエッジデバイスに対してインバンドおよびアウトオブバンドのリモートデバイス管理サービスを提供し、ビジネスの時間を節約し、労働コストを大幅に削減します。使いやすい単一のクラウドポータルを操作するだけで、ビジネスはサービスを簡単に最適化し、効率化できます。

## 対応ハードウェア
- [すべての NVIDIA Jetson デバイスをサポート](https://www.seeedstudio.com/tag/nvidia.html)

## 前提条件

- 上記のいずれかの Jetson デバイス
- 最新の Jetson OS が Jetson デバイスにインストール済み
- モニター、キーボード、マウス（オプション）

## はじめに

Allxon のセットアップは数分で完了します！
- ハードウェア配線の紹介
- Allxon アカウントの登録
- Jetson デバイスに Allxon DMS Agent をインストール
- デバイスペアリングコードの取得
- Jetson デバイスを Allxon DMS ポータルに追加

### ハードウェア配線の紹介
OOB Enabler メインボードのピン定義と対応するケーブルの色。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/writting-1.png" alt="pir" width="500" height="auto"/></p>
ここでは、OBB と Jetson Orin Nano の配線図を例として使用します。以下の情報は、NVIDIA® Jetson™ Orin Nano Dev Kit の配線例を示しています。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-2.png" alt="pir" width="700" height="auto"/></p>
配線の回路図も提供しています。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-3.png" alt="pir" width="1000" height="auto"/></p>

### Allxon アカウントの登録

- **ステップ 1.** [こちらのページ](https://dms.allxon.com/next/signup) にアクセスして Allxon アカウントを登録します。

- **ステップ 2.** メールアドレスを入力して続行します。

- **ステップ 3.** 受信したアクティベーションメールでアカウントを確認し、パスワードを作成します。

### Jetson デバイスに Allxon DMS Agent をインストール

Allxon DMS Agent のインストールは非常に簡単です。1つのコマンドを実行するだけです！

- **ステップ 1.** Jetson デバイスにアクセスし、ターミナルを開いて以下を実行します。

```sh
sudo wget -qO - "https://get.allxon.net/linux/standard" | sudo bash -s
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-1.png" alt="pir" width="1000" height="auto"/></p>

**注意:** 上記のコマンドは Allxon DMS Agent と関連パッケージをインストールします。

- **ステップ 2.** インストールの最後に、**Trend Micro IoT Security™** をエッジセキュリティサービスのアドオンとしてインストールするかどうかを尋ねられ、TMIS EULA に同意する必要があります。インストールを続行するには **Y** を入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-2.jpg" alt="pir" width="1000" height="auto"/></p>

**注意:** Trend Micro IoT Security™ は3か月間の無料トライアルとしてインストールされます。

インストール後、Allxon DMS Agent は自動的に起動します。

**注意:** Jetson デバイスをディスプレイに接続している場合、Allxon DMS Agent ウィンドウがポップアップ表示されます。表示されない場合は、**Ctrl + Shift + B** を押してエージェントを起動してください。

### デバイスペアリングコードの取得

まず、Jetson デバイスからデバイスペアリングコードを取得する必要があります。このコードは GUI またはコマンドラインから取得できます。

#### GUI を使用する場合

- **ステップ 1.** Jetson デバイスで **Ctrl + Shift + B** を押して Allxon DMS Agent を開きます。

- **ステップ 2.** **Get device pairing code** をクリックしてコードを取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/agent-2.png" alt="pir" width="700" height="auto"/></p>

#### コマンドラインを使用する場合

- **ステップ 1.** 以下を実行してコードを取得します。

```sh
dms-get-pairing-code
```

### Jetson デバイスを Allxon DMS ポータルに追加

- **ステップ 1.** [Allxon DMS ポータル](https://dms.allxon.com/next/signin) に、先ほど使用した資格情報でログインします。

- **ステップ 2.** 左側のナビゲーションパネルから **Devices** をクリックし、**+ Add Device** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-1.png" alt="pir" width="1000" height="auto"/></p>

- **ステップ 3.** **Next** をクリックし、先ほど取得したデバイスペアリングコードを入力して **Next** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-2.png" alt="pir" width="450" height="auto"/></p>

- **ステップ 4.** ペアリングが成功すると、以下のウィンドウが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-3.png" alt="pir" width="450" height="auto"/></p>

**注意:** プロモーションコードをお持ちの場合は、**Next** をクリックしてコードを引き換えることができます。それ以外の場合は、**Skip** を押してセットアップを完了します。

### Allxon DMS ポータル

その後、Jetson デバイスが Allxon DMS ポータルとペアリングされると、**Devices** ページに接続されたデバイスが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-4.png" alt="pir" width="1000" height="auto"/></p>

デバイスをクリックすると、デバイスに関する詳細情報が表示されます。これで、Allxon DMS Portal を使用してデバイスをリモートで監視および管理することができます！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-5.png" alt="pir" width="1000" height="auto"/></p>

## リソース

- **[ウェブページ]** [Allxon リソースセンター](https://www.allxon.com/knowledge)

- **[ウェブページ]** [NVIDIA Learn](https://developer.nvidia.com/embedded/learn)

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