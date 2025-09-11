---
description: reTerminal DM SenseCraft Edge OS 入門ガイド
title: reTerminal DM SenseCraft Edge OS 入門ガイド
keywords:
  - Edge
  - reTerminal-DM
  - SenseCraft Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reterminal-dm-sensecraft-edge-os-intro
last_update:
  date: 05/15/2025
  author: Peter Pan
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal DM SenseCraft Edge OS 入門ガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/splash.png" alt="pir" width="600" height="auto"/></p>

SenseCraft Edge OSは、reTerminal DMの10.1インチのヒューマンマシンインターフェース（HMI）デバイス向けに精密に設計された最先端のオペレーティングシステムであり、ユーザー体験を新たな高みに引き上げる統合機能を備えています。この革新的なOSは、直感的なインターフェースと組み込みの設定および制御機能を備えており、ユーザーがデバイスを簡単に構成および管理できるようにします。さらに、Node-REDエディターおよびNode-RED Dashboardとシームレスに統合されており、ユーザーが比類のないカスタマイズと自動化機能を活用できるようにします。Node-REDの視覚的プログラミングおよび自動化ツールの力を活用することで、このオペレーティングシステムはユーザーが複雑なワークフローを作成し、高度な制御システムを簡単に展開できるようにします。直感的なHMIコントロールとNode-REDの多用途性の比類なき融合により、SenseCraft Edge OSは、あらゆる使用ケースシナリオにおけるHMIデバイスの機能向上とユーザーフレンドリーさの新しい基準を設定します。組み込みのOSTreeバージョン管理ファイルシステムは、スケーラブルで信頼性の高い方法でLinuxベースのオペレーティングシステムを管理および展開するための堅牢なフレームワークを提供し、原子性、不変性、および効率的なストレージ使用に重点を置いています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"2"}> reTerminal DMを今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

:::note
reTerminal DMは次回の製品リリースバッチからデフォルトのオペレーティングシステムとしてRaspberry Pi OSを搭載して出荷されます。
:::

:::note
このOSは現在reTerminal DMをベースに開発されており、製品版reTerminal DMでのみ動作します。[Sensecraft Edge OS](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download)をダウンロードできます。
:::

## 特徴

* **タッチフレンドリーなUIデザイン**は、ヒューマンマシンインターフェース（HMI）デバイス向けに特別に設計されており、直感的でシームレスなユーザー体験を保証します。
* **広く人気のある「ノーコード＆ローコード」開発環境Node-RED**およびそのコンポーネント**Node-RED Dashboard**とシームレスに統合されています。この統合により、ユーザーは強力な視覚的プログラミング機能と多用途なダッシュボードフレームワークを利用して、広範なコーディング知識を必要とせずにカスタマイズされたアプリケーションを構築できます。
* **組み込みのシステム設定および制御機能**により、reTerminal DMのさまざまな側面を構成および管理するための包括的で直感的なインターフェースを提供します。
* **将来の使用ケース拡張のための組み込みのApp Center**は、多様なアプリケーションや拡張機能にアクセスしてインストールするためのハブとして機能し、オペレーティングシステムの機能をカスタマイズおよび拡張することができます。
* **MQTT、MySQL、ChirpStackなどの組み込みの設定可能なサービス**により、データ可視化ダッシュボードアプリケーションを構築する際の機能性と柔軟性を向上させます。
* **OSTreeバージョン管理ファイルシステム**により、オペレーティングシステム全体の**原子アップグレード**が可能であり、オペレーティングシステムおよびそのコンポーネントの異なるバージョンを追跡および管理できます。これにより、必要に応じて以前のバージョンにロールバックすることが容易になります。
* **組み込みのシステムヘルスチェック機能**により、reTerminal DMの全体的な健康状態とパフォーマンスを監視できます。この機能はシステムの状態に関する貴重な洞察を提供し、最適な機能性を確保し、潜在的な問題を特定します。


<!-- ## SenseCraft Edgeバージョンを選択 -->

<!-- Code

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="V1.2.0" label="v0.1.8-1.2.0"> -->

## レイアウト概要

### ステータスバー

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/status-bar.png" /></div>

クリック可能な項目とその機能：

<div class="table-center">

| アイコン | 機能 | 
|---| ---|
|電源コントロール | 「再起動」、「シャットダウン」、「スリープ」のオプションを含むドロップダウンリストを開く |
|Bluetooth接続 | Bluetooth設定画面に移動 |
|イーサネット接続| イーサネット設定画面に移動 |
|WiFi接続 | WiFi設定画面に移動 |

</div>

### ダッシュボード タブ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/overview.png" /></div>

ダッシュボード タブは、reTerminal DM上でローカルに「node-red-dashboard」ビューをレンダリングします。以下は設計上の参考事項です：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-size.png" /></div>

* スクロールなしでの最大幅：1075px
* スクロールなしでの最大高さ：752px

また、同じネットワーク上にある外部マシンからダッシュボードビューにアクセスすることも可能です。その場合、外部マシンでお気に入りのウェブブラウザを開き、reTerminal DMのIPアドレスに続けてデフォルトのNode-REDポート1880、さらに**'/ui/'**を入力します。URLは以下のようになります：**"ipaddress:1880/ui/"**

> 例：私の場合、reTerminal DMのIPアドレスが「192.168.49.163」なので、URLは：**"192.168.49.163:1880/ui/"**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-eg.png" /></div>

### Node-REDエディタタブ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red.png" /></div>

Node-REDエディタは、同じネットワーク上にある外部マシンからも開くことができます。その場合、外部マシンでお気に入りのウェブブラウザを開き、reTerminal DMのIPアドレスに続けてデフォルトのNode-REDポート1880を入力します。reTerminal DMのIPアドレスを確認するには、以下の画像のようにIPアドレスを確認してください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-ipaddress.png" /></div>

> 例：私の場合、reTerminal DMのIPアドレスが「192.168.49.163」なので、URLは：**"192.168.49.163:1880/"**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-editer-eg.png" /></div>

:::note
[デフォルトフロー](https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/default-flow.json)をダウンロードして参考にしてください。
:::

Node-REDをreTerminal DMで使用する方法についての詳細は、以下のNode-RED Wikiページをご覧ください：

* [reTerminal DM RS485ポートとNode-RED](/ja/reTerminal-DM-Node-Red-RS485)
* [reTerminal DM MQTTとNode-RED](/ja/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUSとNode-RED](/ja/reTerminal-DM-Node-Red-canbus)

### システム設定タブ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/settings.png" /></div>

#### ネットワークサブタブ

ネットワークセクションは、イーサネット、WiFi、Bluetoothのネットワーク機能を表示および設定するために使用されます。

##### イーサネットサブタブ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/network.png" /></div>

##### WiFiサブタブ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/wifi.png" /></div>

WiFiに接続するには、接続したいWiFi SSIDをクリックしてください。その後、以下のポップアップウィンドウが表示されます。WiFiの認証情報を入力し、`Confirm`をクリックして進めてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/connect-wifi.png" /></div>

##### Bluetoothサブタブ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/Bluetooth.png" /></div>

#### データセット

データセットセクションは、データセット制御に関連するサービスを有効または無効にするために使用されます。現在、組み込みのMySQLサーバーとMQTTサーバーが利用可能です。

##### MySQLサブタブ

このタブでは、MySQLサービスを有効または無効にすることができ、MySQLサーバーのアドレスやアクセス認証情報などのMySQLサービス情報を表示できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mysql.png" /></div>

##### MQTTサブタブ

このタブでは、MQTTサービスを有効または無効にすることができ、MQTTサーバーのアドレスやサービスアクセス認証情報などのMQTTサービス情報を表示できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mqtt.png" /></div>

#### 一般

一般セクションは、「About」タブでデバイス情報を取得し、「Update」タブでデバイスの更新を管理し、「Screen」タブで画面設定を調整し、「Language and Time」タブでローカル設定を変更し、セキュリティのために「PIN」タブで画面ロックPINを設定するために使用されます。

##### About

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/about.png" /></div>

##### 更新

:::note
SenseCraft Edge OSを更新するには、2つの項目があります。

システム更新：

* システムのバックエンドコンポーネントを管理

SenseCraft Edge更新：

* SenseCraftアプリケーションUIインターフェースに関連するバックエンドおよびフロントエンドコンポーネントとUI

これらを更新する方法は2つあります。

ローカル更新：

* 更新ファイルを含むUSBストレージデバイスを使用

ネットワーク更新：

* ネットワークを介して更新

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/updates.png" /></div>

##### チェックと更新

システムまたはSenseCraft Edgeアプリケーションを個別に更新するには、`Update Now`ボタンをクリックしてください。

システムが最新の状態であれば、`The System Version is latest version`（システムバージョンは最新です）というポップアップ通知が表示されます。

システムアップデート:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/system-update-success.png" /></div>

SenseCraft Edge アップデート:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/app-upgrade-success.png" /></div>

`Check Update`（アップデート確認）ボタンをクリックすると、最新のアップデートを確認し、アップデートを実行することができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/check-update.png" /></div>

##### ローカルアップデート

<!-- STEP 1: Please download the update files and save it to an USB storage device -->

**STEP 1**: `Local Update`（ローカルアップデート）ボタンをクリックしてください。

以下のポップアップウィンドウが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png" /></div>

**STEP 2**: 上記の画像に示されているように、アップデートファイルを保存したUSBストレージデバイスをreTerminal DMに挿入してください。

**STEP 3**: ポップアップウィンドウで`next`（次へ）をクリックしてください。`next`をクリックした後、読み込みに少し時間がかかる場合がありますのでお待ちください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/select-update-file.png" /></div>

:::warning

**USBエラー**

USBに問題がある場合、`No USB flash drive detected`（USBフラッシュドライブが検出されません）というエラーが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png" /></div>

システムを簡単にアップデートするために、良好な状態のUSBストレージデバイスを使用し、FAT32またはEXT4でフォーマットされていることを確認してください。また、USBストレージの容量は64GB以下である必要があります。

:::

**STEP 4**: `Next`をクリックしてアップデートプロセスを待ちます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-updating.png" /></div>

##### 画面

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/screen.png" /></div>

##### 言語と時間

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/timezone.png" /></div>

##### PINコード

デフォルトではPINコードは設定されていません。このPINコードは[Node-REDエディタタブ](#node-red-editor-tab)および[システム設定タブ](#system-settings-tab)のパスコードロックを設定するためのものです。

##### PINコードの設定方法:

PINコードを設定する手順:

**STEP 1**: `Set PIN`（PIN設定）ボタンをクリックしてPIN設定プロセスを開始します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/toggle-pin-setting.png" /></div>

**STEP 2**: 8桁のPINコードを入力してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png" /></div>

**STEP 3**: 確認のため、同じ8桁のPINコードを再入力してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png" /></div>

##### PINコードのリセット方法:

:::note
この手順は、すでにPINコードが設定されている場合にのみ有効です。
:::

**STEP 1**: `RESET`（リセット）ボタンをクリックしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/reset-pins.png" /></div>

**STEP 2**: 現在のPINコードを入力してリセットプロセスを確認してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/enter-pin-to-reset.png" /></div>

**STEP 3**: 新しい8桁のPINコードを入力してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png" /></div>

**STEP 4**: 確認のため、新しい8桁のPINコードを再入力してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png" /></div>

##### ロック解除

PINコードを設定した後、[Node-REDエディタタブ](#node-red-editor-tab)または[システム設定タブ](#system-settings-tab)にアクセスする際に、PINコードを入力してロックを解除する必要があります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/unlock.png" /></div>

#### センター

センターセクションはインストール済みアプリケーションを管理するためのもので、アプリストアとして機能します。このタブでは、アプリケーションのインストール、起動、無効化、さらには独自のアプリケーションをホストすることができます。これはGoogle PlayストアやApple Appストアに似た仕組みです。現在、このアプリセンターの機能は限定的ですが、新機能が追加される予定ですので、引き続きご期待ください。また、コミュニティ貢献機能が実装された際には、皆様の貢献をお待ちしております。ChirpStackタブはアプリケーション設定ビューとして表示され、ChirpStackアプリケーションはアプリセンターからインストールされます。

##### センター

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/appcenter.png" /></div>

:::note
現在、このアプリセンターの機能は限定的ですが、新機能が追加される予定ですので、引き続きご期待ください。また、コミュニティ貢献機能が実装された際には、皆様の貢献をお待ちしております。
:::

##### ChirpStack

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/chirpstack.png" /></div>

## 追加リソース

*  [reTerminal DM データシート](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminalDM_datasheet.pdf)
*  [reTerminal DM ユーザーマニュアル](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-User-Manual.pdf)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>