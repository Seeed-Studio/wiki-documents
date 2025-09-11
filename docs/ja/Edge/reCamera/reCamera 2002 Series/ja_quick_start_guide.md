---
description: reCameraの使い方
title: クイックスタートガイド
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /ja/recamera_getting_started
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Evelyn Chen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reCamera クイックスタートガイド

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

reCameraへようこそ！このガイドでは、デバイスを迅速にセットアップし、強力なAIビジョン機能を活用する方法を説明します。初心者でも経験豊富なユーザーでも、このステップバイステップの手順でインストール、設定、初回使用までをサポートします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱</font></span></strong>
    </a>
</div>

# 製品シリーズ

reCameraには以下の4つのバージョンがあります：

<table border="1">
    <tr>
        <th> </th>
        <th>reCamera 2002 8GB</th>
        <th>reCamera 2002 64GB</th>
        <th>reCamera 2002w 8GB</th>
        <th>reCamera 2002w 64GB</th>
    </tr>
    <tr>
        <td>コアボード</td>
        <td>Core 2002 8GB</td>
        <td>Core 2002 64GB</td>
        <td>Core 2002w 8GB</td>
        <td>Core 2002w 64GB</td>
    </tr>
    <tr>
        <td>センサーボード</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
    </tr>
    <tr>
        <td>ベースボード</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
    </tr>
    <tr>
        <td>ワイヤレス(Wi-Fi/BT)</td>
        <td> </td>
        <td> </td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>取り付け方法</td>
        <td>磁気/カメラブラケットマウント</td>
        <td>磁気/カメラブラケットマウント</td>
        <td>磁気/カメラブラケットマウント</td>
        <td>磁気/カメラブラケットマウント</td>
    </tr>
    <tr>
        <td>電源供給</td>
        <td>Type-Cケーブル</td>
        <td>Type-Cケーブル</td>
        <td>Type-Cケーブル</td>
        <td>Type-Cケーブル</td>
    </tr>
</table>


## 開封と電源オン

まず、reCameraを開封してください。箱の中には以下のものが含まれています：
- reCamera
- Type-Cケーブル
- イーサネットケーブル

すべての部品が揃っていることを確認してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

付属のType-Cケーブルを使用してデバイスの電源を入れてください。緑色のライトが点灯したら、reCameraが接続準備完了の状態です。



## ネットワーク接続

reCameraをネットワークに接続する方法は以下の3つです：

### 方法1: USBケーブル
**USBケーブルを使用した有線ネットワーク設定**

reCameraからPCにUSBケーブルを接続し、```192.168.42.1```にアクセスしてreCameraのロードページを表示します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

ワイヤレス機能を備えたreCameraをお持ちの場合は、Wi-Fi接続の設定をお勧めします。Wi-Fi選択UIは2002wバージョンのみで利用可能です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

問題が発生した場合は、[ネットワークトラブルシューティング](https://wiki.seeedstudio.com/ja/recamera_network_connection/)をご覧ください。


### 方法2: イーサネット

**イーサネットポートを使用したネットワーク設定**

イーサネットポートを使用する場合は、箱に同梱されているケーブルを使用してルーターに接続してください。ただし、これは**POE（Power over Ethernet）ではありません**。デバイスを電源オンにするにはType-Cケーブルが必要です。カメラの背面を**ねじを外して**ポートに接続してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

接続後、ルーターの管理画面でreCameraのIPを確認し、ウェブサイトやNode-REDプラットフォームにアクセスしてください。

### 方法3: APモード（2002wバージョンのみ利用可能）

**APモードでのワイヤレスネットワーク設定**

電源を入れると、reCameraはネットワーク設定を変更するためのアクセスポイント(AP)をオンにします。スマートフォンやノートパソコンのWi-Fiリストを開くと、`reCamera_******`というWi-Fi名が表示されるはずです。
このデバイスの命名規則は``"recamera_" + MACアドレスの最後の6桁``です。
デフォルトのパスワードは`12345678`です。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

このAPに接続すると、ウェブサイトが自動的に表示されます。表示されない場合は、ブラウザで**192.168.16.1**を入力してページにアクセスしてください。その後、reCameraを接続するWi-Fiを選択できます。
複数のreCameraをお持ちの場合は、[デバイス管理](https://wiki.seeedstudio.com/ja/recamera_getting_started/#multi-devices-management)を参照して、どのデバイスがどれかを確認してください。

## 基本的なウェブアクセス
reCameraをネットワークに接続した後、ブラウザでIPアドレスにアクセスすることで、reCameraのウェブインターフェースにアクセスできます。
- USB接続時のIP: 192.168.42.1
- Wi-Fiまたはイーサネット接続時のIP: `ifconfig`コマンドで確認するか、ルーターのネットワーク管理で確認してください。

ウェブURL一覧:
- **ホームページ**: `ip_address/#/init`
- **ワークスペース**: `ip_address/#/workspace` (OSバージョン0.1.4以上の場合)
- **ネットワーク設定**: `ip_address/#/network`
- **セキュリティ**: `ip_address/#/security`
- **ターミナル**: `ip_address/#/terminal`
- **システム**: `ip_address/#/system`
- **電源管理**: `ip_address/#/power`
- **オリジナルNode-RED**: ```ip_address:1880```

**デバイスのOSバージョンを確認してください**。バージョン0.1.3と0.1.4の間には大きなアップグレードがあります。よりスムーズなユーザー体験のために、0.1.5以上へのアップグレードを推奨します。```Sidebar -> System -> Software Update```に移動してソフトウェアバージョンを確認し、最新バージョンのOSを適用してインストールしてください。アップデート手順については、[OTAアップグレードガイドライン](https://wiki.seeedstudio.com/ja/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)を参照してください。

### バージョン0.1.3から最新バージョンへのOTAアップグレード

初期ロットのreCameraをお持ちの場合、この手順に従ってOSを最新バージョンにアップグレードできます。

**ステップ1**: ウェブサイトを開き、```Sidebar -> System -> Software Update```に移動します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**ステップ2**: OSバージョンを確認し、**Check**と**Apply**をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**ステップ3**: システムの更新が完了するまで数分待ちます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**ステップ4**: デバイスを再起動し、ウェブサイトをリフレッシュします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**ステップ5**: パスワード変更のためのロードページに移動します。これで、[このダウンロード手順](https://wiki.seeedstudio.com/ja/recamera_getting_started/#access-recamera-preview-dashboard)に従って、Node-REDダッシュボードを備えた最新バージョンのreCameraを体験できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### reCameraプレビューダッシュボードへのアクセス

Node-REDを統合したデバイスでは、ビデオストリームをプレビューしたり、希望するモデルを変更したりできる組み込みのダッシュボードUI例を提供しています。これを自由にカスタマイズして、独自のアプリケーションに統合できます。

OSバージョンが0.1.5以上の場合、ログイン後にプレビューダッシュボードが表示されます。

OSを自分でアップグレードした場合、Sensecraft AIからダッシュボードのjsonフローをダウンロードできます。

**ステップ1**. アップグレード完了後、`192.168.42.1`またはネットワークIPでウェブにアクセスし、```Download dashboard flow```をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**ステップ2**. Sensecraft AIプラットフォームに移動し、最初の公式Dashboardデモを選択して```Clone```をクリックします。このウェブサイトにはログインが必要です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**ステップ3**. デバイスの接続方法を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**ステップ4**. すると、事前構築されたフローを含むNode-REDワークスペースが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**ステップ5**. ```Deploy```をクリックしてフローが開始されていることを確認し、```dashboard```をクリックするとダッシュボードが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

フローが開始されているかどうかを必ず確認してください。フローをインポートしても自動的に開始されない場合があるため、ダッシュボードが空になることがあります。ドロップダウンメニューで`Start`をクリックしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

成功しました！
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**ステップ6**. ```IoU```と```Confidence```のしきい値を調整して、より正確な結果を得ることができます。

- IoU=0, Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25, Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### フローの簡単な理解
この例のフローでは、**Counting Selection**ドロップダウンリストを使用して、Person、Cat、Dog、Bottleなどの特定のオブジェクトの数をカウントするデモを構築しました。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

フロー内の`function nodes`を変更することで、カウントするオブジェクトを追加したり、この機能を他のコンピュータビジョンアプリケーションに完全に変更したりすることができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

`model node`を確認することで、どのようなオブジェクトが検出可能かを確認できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

フローを自由にカスタマイズして遊んでみてください。ただし、**`debug nodes`や`preview nodes`をモデルノードの後に多数配置しないでください**。AIモデルからの複数の結果を出力するとCPUを消費し、デバイスがクラッシュする可能性があります。

### コンピュータビジョンモデル
提供されているワークフローでは、デフォルトで`YOLO11n検出モデル`が選択されています。これはリアルタイムオブジェクト検出のための最新のコンピュータビジョンモデルです。他のモデルに置き換えることも可能です。他の利用可能なモデルについては、この[wiki](https://wiki.seeedstudio.com/ja/recamera_on_device_models/)を参照してください。

**Intersection over Union (IoU)**: IoUは、予測されたバウンディングボックスと正解のバウンディングボックスの重なり具合を評価するために使用される指標です。これは、2つのボックスの交差部分の面積を2つのボックスの結合部分の面積で割った比率として計算されます。IoUの値は通常0から1の範囲内にあります。これを0から100のスケールに標準化しました。IoU値が0の場合、予測ボックスと正解ボックスの間に重なりがないことを示します。値が100の場合、完全に一致していることを意味し、2つのボックスが完全に重なっています。

**Confidence**: YOLOモデルにおけるConfidenceは、予測されたバウンディングボックスが物体を含んでいる確率と予測の正確性を表します。この値は0から100.0の範囲内です。

## ダッシュボードをカスタマイズしてコミュニティに共有する

ユーザーが開発・作成したダッシュボードをコミュニティで共有することを推奨しています。[GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow)にフォルダを作成しましたので、皆さんがそこでダッシュボードを**プルリクエスト**で共有していただければ、整理して表示します。  
ここでは、ダッシュボードに照明機能を追加する例を取り上げ、ノードを簡単に追加してreCameraを制御する方法を説明します。

**ステップ 1**. ```button group```ノードをワークスペースにドラッグし、以下の設定で編集します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**ステップ 2**. 新しいui-group設定ノードを「Control Button」という名前で追加し、保存します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**ステップ 3**. ダッシュボード2.0に移動し、モデル選択の下にコントロールボタンフレームを配置します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**ステップ 4**. フローをデプロイしてダッシュボードに移動します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**デモ**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**ステップ 5**: フローのjsonファイルをエクスポートし、GitHubに共有することを忘れないでください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## ポートリスト
以下はreCameraで使用されるポートの一覧です：

- **ポート 22**: リモートSSHログインに使用され、開放されています。
- **ポート 53**: DNSドメイン名解決に関連し、ウェブリダイレクトに必要です。デフォルトで開放されています。
- **ポート 80**: Node-REDアプリケーションのHTTP表示用ウェブダッシュボードインターフェースとして機能します。
- **ポート 554**: RTSPビデオストリーミングに使用されます。
- **ポート 9090**: ウェブターミナルアクセス用で、ログインにはパスワードが必要です。
- **ポート 1880**: Node-RED操作専用です。

## 工場出荷時のリセット
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

デバイスのパスコードを忘れるなどしてデバイスをリセットしたい場合は、**User** ボタンを長押ししながらデバイスを電源に接続してください。デバイスの `赤いライト` が点滅せずに**常時点灯**になったら、User ボタンを離します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
これにより、ユーザー情報（開発したアプリケーションやローカルストレージ内の画像や動画を含む）が削除されます。慎重に操作してください。
:::

デバイスのファームウェアを特定のバージョンに復元したい場合は、[os version control](https://wiki.seeedstudio.com/ja/recamera_os_version_control) を訪問してください。

## 複数デバイスの管理

複数の reCamera を所有している場合、デバイスの背面に記載されている **MACアドレス** または **S/N番号** で区別することができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

または、デバイスを USB または AP を介してラップトップに接続した後、以下のコマンドを使用して MACアドレスを確認することができます。
```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## カメラの向き
デフォルトのカメラビューの向きは、以下の画像のように type-c が**下向き**になっています。他の向きにすると、検出モデルのトレーニング方法に基づいてモデルの精度に影響を与える可能性があることに注意してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## リソース

- [reCamera Flyer](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

- [reCamera Series](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>