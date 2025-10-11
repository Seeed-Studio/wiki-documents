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
  date: 04/23/2023
  author: Peter Pan
---
#  reTerminal DM SenseCraft Edge OS 入門ガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/splash.png" alt="pir" width="600" height="auto"/></p>

SenseCraft Edge OSは、reTerminal DMの10.1インチヒューマンマシンインターフェース（HMI）デバイス向けに細心に設計された最先端のオペレーティングシステムで、ユーザーエクスペリエンスを新たな高みへと押し上げる統合機能の配列を特徴としています。この画期的なOSは、内蔵の設定・制御機能を備えた直感的なインターフェースを誇り、ユーザーがデバイスを簡単に設定・管理できるよう支援します。さらに、Node-REDエディターとNode-REDダッシュボードとシームレスに統合され、ユーザーが比類のないカスタマイゼーションと自動化機能を解放できるようにします。Node-REDのビジュアルプログラミングと自動化ツールの力を活用することで、このオペレーティングシステムはユーザーが複雑なワークフローを作成し、洗練された制御システムを簡単にデプロイできるよう支援します。直感的なHMI制御とNode-REDの汎用性の比類のない融合により、SenseCraft Edge OSは、あらゆる種類の使用ケースシナリオにおけるHMIデバイスの領域で、機能性の向上と比類のないユーザーフレンドリー性の新しい標準を設定します。内蔵のOSTreeバージョン管理ファイルシステムは、原子性、不変性、効率的なストレージ使用に焦点を当てて、スケーラブルで信頼性の高い方法でLinuxベースのオペレーティングシステムを管理・デプロイするための堅牢なフレームワークを提供します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"2"}> reTerminal DMを今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

:::note
reTerminal DMは、次回の製品リリースバッチから、デフォルトのオペレーティングシステムとしてRaspberry pi OSが出荷される予定です。
:::

:::note
このOSは現在reTerminal DMをベースに開発されており、プロダクション版reTerminal DMでのみ動作します。[Sensecraft Edge OS](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download)をダウンロードできます。
:::

## 機能

* ヒューマンマシンインターフェース（HMI）デバイス向けに特別に調整された**タッチフレンドリーなUIデザイン**で、直感的でシームレスなユーザーエクスペリエンスを保証します。
* 広く人気のある**「ノーコード＆ローコード」開発環境Node-RED**と、その関連コンポーネントである**Node-REDダッシュボード**と**シームレスに統合**されます。この統合により、ユーザーは強力なビジュアルプログラミング機能と、広範なコーディング知識を必要とせずにカスタマイズされたアプリケーションを構築するための汎用的なダッシュボードフレームワークを利用できます。
* **内蔵システム設定・制御**機能により、reTerminal DMのさまざまな側面を設定・管理するための包括的で直感的なインターフェースを提供します。
* **将来の使用ケース拡張のための内蔵アプリセンター**は、多様なアプリケーションと拡張機能にアクセスしてインストールするためのハブとして機能し、ユーザーがオペレーティングシステムの機能をカスタマイズ・拡張できるようにします。
* **MQTT、MySQL、ChirpStackなどの設定可能な内蔵サービス**により、データ可視化ダッシュボードアプリケーションの構築において、ユーザーに強化された機能性と柔軟性を提供します。
* **OSTreeバージョン管理ファイルシステム**により、オペレーティングシステム全体の**アトミックアップグレード**が可能になり、オペレーティングシステムとそのコンポーネントの異なるバージョンを追跡・管理できます。これにより、必要に応じて以前のバージョンにロールバックすることが容易になります。
* **内蔵システムヘルスチェック機能**により、ユーザーはreTerminal DMの全体的な健全性とパフォーマンスを監視できます。この機能はシステムの状態に関する貴重な洞察を提供し、最適な機能性を保証し、潜在的な問題を特定します。


<!-- ## Choose SenseCraft Edge Version -->

<!-- Code

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="V1.2.0" label="v0.1.8-1.2.0"> -->

## レイアウト概要

### ステータスバー

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/status-bar.png" /></div>

クリック可能な項目と機能：

<div class="table-center">

| アイコン | 機能 | 
|---| ---|
|電源制御 | "再起動"、"シャットダウン"、"スリープ"のオプションを含むドロップダウンリストを開く |
|Bluetooth接続 | Bluetooth設定画面に移動 |
|イーサネット接続|イーサネット設定画面に移動 |
|WiFi接続 |WiFi設定画面に移動 |

</div>

### ダッシュボードタブ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/overview.png" /></div>

ダッシュボードタブは、reTerminal DM上でローカルに「node-red-dashboard」ビューをレンダリングします。参考のためのデザイン考慮事項は以下の通りです：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-size.png" /></div>

* スクロールなしの最大幅：1075px
* スクロールなしの最大高さ：752px

reTerminal DMと同じネットワーク上にある外部マシンからもダッシュボードビューにアクセスできます。その外部マシンでお気に入りのWebブラウザを開き、reTerminal DMのIPアドレスに続けてデフォルトのNode-REDポート1880、さらに **'/ui/'** を入力します。URLは次のようになります：**「ipaddress:1880/ui/」**

> 例：私の場合、reTerminal DMのIPアドレスは「192.168.49.163」なので、URLは：**「192.168.49.163:1880/ui/」**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/dashboard-eg.png" /></div>

### Node-REDエディタタブ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red.png" /></div>

reTerminal DMと同じネットワーク上にある外部マシンでNode-REDエディタを開くことができます。その外部マシンでお気に入りのWebブラウザを開き、reTerminal DMのIPアドレスに続けてデフォルトのNode-REDポート1880を入力します。reTerminal DMのIPアドレスを見つけるには、下の画像に示すようにIPアドレスを確認できます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-ipaddress.png" /></div>

> 例：私の場合、reTerminal DMのIPアドレスは「192.168.49.163」なので、URLは：**「192.168.49.163:1880/」**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/node-red-editer-eg.png" /></div>

:::note
参考として[デフォルトフロー](https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/default-flow.json)をダウンロードできます。
:::

reTerminal DMでNode-REDを使用する方法の詳細については、Node-RED Wikiページをご覧ください：

* [reTerminal DM RS485 Port with Node-RED](/ja/reTerminal-DM-Node-Red-RS485)
* [reTerminal DM MQTT with Node-RED](/ja/reTerminal-DM-Node-Red-mqtt)
* [reTerminal DM CAN BUS with Node-RED](/ja/reTerminal-DM-Node-Red-canbus)

### システム設定タブ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/settings.png" /></div>

#### ネットワークサブタブ

ネットワークセクションは、イーサネット、WiFi、Bluetoothのネットワーク機能を表示および設定するために使用されます。

##### イーサネットサブタブ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/network.png" /></div>


##### WiFiサブタブ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/wifi.png" /></div>

WiFiに接続するには、接続したいWiFi SSIDをクリックしてください。次のポップアップウィンドウが表示されますので、WiFi認証情報を入力し、`Confirm`をクリックして続行してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/connect-wifi.png" /></div>


##### Bluetoothサブタブ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/Bluetooth.png" /></div>

#### データセット

データセットセクションは、データセット制御に関連するサービスを有効または無効にするために使用されます。現在、内蔵のMySQLサーバーとMQTTサーバーがあります。

##### MySQLサブタブ

このタブでMySQLサービスを有効または無効にでき、MySQLサーバーアドレスやサーバーアクセス認証情報などのMySQLサービス情報も表示できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mysql.png" /></div>

##### MQTTサブタブ

このタブでMQTTサービスを有効または無効にでき、MQTTサーバーアドレスやサービスアクセス認証情報などのMQTTサービス情報も表示できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/mqtt.png" /></div>

#### 一般

一般セクションは、aboutタブでデバイス情報を取得し、updateタブでデバイス更新を制御し、screenタブで画面設定を調整し、Language and Timeタブでローカル設定を変更し、セキュリティ上の理由でPINタブから画面ロックPINを設定するために使用されます。

##### About

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/about.png" /></div>

##### Updates

:::note
SenseCraft Edge OSでは更新する必要があるものが2つあります。

システム更新：

* システムバックエンドコンポーネントを管理

SenseCraft Edge更新：

* SenseCraftアプリケーションUIインターフェースに関連するバックエンドおよびフロントエンドコンポーネントとUI

更新方法は2つあります。

ローカル更新：

* 更新ファイルを含むUSBストレージデバイスを使用

ネットワーク更新：

* ネットワーク経由で更新

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/updates.png" /></div>

##### チェックと更新

`Update Now`ボタンを個別にクリックして、システムまたはSenseCraft Edgeアプリケーションを更新できます。

システムが最新の場合、`The System Version is latest version`ポップアップ通知が表示されます。

システム更新の場合：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/system-update-success.png" /></div>

SenseCraft Edge更新の場合：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/app-upgrade-success.png" /></div>

`Check Update`ボタンをクリックして、利用可能な最新の更新を確認し、更新を確認できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/check-update.png" /></div>

##### ローカル更新

<!-- ステップ 1: アップデートファイルをダウンロードして USB ストレージデバイスに保存してください -->

ステップ 1: `ローカル更新`ボタンをクリックしてください

以下のポップアップウィンドウが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png" /></div>

ステップ 2: 上記の画像に示されているように、更新ファイルが入ったUSBストレージデバイスをreTerminal DMに挿入してください。

ステップ 3: ポップアップウィンドウで`次へ`をクリックしてください。`次へ`をクリックした後は読み込みに時間がかかりますので、しばらくお待ちください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/select-update-file.png" /></div>

:::warning

**USBエラー**

USBに何らかのエラーがある場合、`USBフラッシュドライブが検出されません`と表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-update.png" /></div>

システムの更新をより簡単にするために、良好なUSBストレージデバイスを使用し、FAT32またはEXT4にフォーマットされていること、USBストレージサイズが64GB以下であることを確認してください。
:::

ステップ 4: 次へをクリックして更新プロセスを待ちます

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/local-updating.png" /></div>

##### 画面

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/screen.png" /></div>

##### 言語と時刻

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/timezone.png" /></div>

##### PIN

デフォルトではPINは設定されておらず、このPINは[Node-REDエディタータブ](#node-red-editor-tab)と[システム設定タブ](#system-settings-tab)のパスコードロックを設定します。

##### PINコードの設定:

PINを設定する手順:

ステップ 1: PIN設定ボタンをクリックして切り替え、PIN設定プロセスに入ります

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/toggle-pin-setting.png" /></div>

ステップ 2: 8桁のPINコードを入力してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png" /></div>

ステップ 3: 確認のため8桁のPINコードを再度入力してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png" /></div>


##### PINコードのリセット:

:::note
この手順は、すでにPINコードが設定されている場合にのみ有効です
:::

ステップ 1: RESETボタンをクリックします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/reset-pins.png" /></div>

ステップ 2: リセットプロセスを確認するため、現在のPINコードを入力してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/enter-pin-to-reset.png" /></div>

ステップ 3: 新しい8桁のPINコードを入力してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin.png" /></div>

ステップ 4: 確認のため新しい8桁のPINコードを再度入力してください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/set-pin-confirm.png" /></div>

##### ロック解除

PINコードを設定した後、[Node-REDエディタータブ](#node-red-editor-tab)または[システム設定タブ](#system-settings-tab)にタブを切り替える際に、ロック解除のためPINコードを入力する必要があります

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/unlock.png" /></div>


#### センター

センターセクションは、インストールされたアプリケーションを制御するために使用され、センタータブはアプリストアとして機能し、Google PlayストアやApple App Storeと同様に、アプリケーションのインストール、オープン、無効化、および独自のアプリケーションのホストが可能です。現在、このアプリセンターの機能は限定的ですが、新機能が更新される予定ですので、お楽しみにお待ちください。また、コミュニティ貢献機能が実装されたら、アプリセンターへの皆様の貢献をお待ちしています。ChirpStackタブは、アプリセンターからインストールされたChirpStackアプリケーションのアプリケーション設定ビューとして表示されます。

##### センター

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/appcenter.png" /></div>

:::note
現在、このアプリセンターの機能は限定的ですが、新機能が更新される予定ですので、お楽しみにお待ちください。また、コミュニティ貢献機能が実装されたら、アプリセンターへの皆様の貢献をお待ちしています。
:::

##### ChirpStack

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/sensecraft-edge/chirpstack.png" /></div>

<!-- </TabItem>
<TabItem value="DALL·E" label="DALL·E Code">

</TabItem>
</Tabs>

Code END -->

## 追加リソース

*  [reTerminal DM データシート](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminalDM_datasheet.pdf)
*  [reTerminal DM ユーザーマニュアル](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-User-Manual.pdf)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>