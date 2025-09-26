---
description: reCameraを始める
title: クイックスタートガイド
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /ja/recamera_getting_started
sidebar_position: 1
last_update:
  date: 02/15/2025
  author: Evelyn Chen
---

# reCamera クイックスタートガイド

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

reCameraへようこそ！このガイドでは、デバイスを素早くセットアップし、強力なAI-Vision機能を使い始めるお手伝いをします。初心者でも経験豊富なユーザーでも、このステップバイステップのウォークスルーが、インストール、設定、初回使用をガイドします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱</font></span></strong>
    </a>
</div>

# 製品シリーズ

reCameraには4つのバージョンがあります：

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
        <td>マグネット/カメラブラケットマウント</td>
        <td>マグネット/カメラブラケットマウント</td>
        <td>マグネット/カメラブラケットマウント</td>
        <td>マグネット/カメラブラケットマウント</td>
    </tr>
    <tr>
        <td>電源供給</td>
        <td>Type - Cケーブル</td>
        <td>Type - Cケーブル</td>
        <td>Type - Cケーブル</td>
        <td>Type - Cケーブル</td>
    </tr>
</table>

## 開封と電源投入

reCameraの開封から始めましょう。箱の中には以下のものが入っています：

- reCamera
- Type-Cケーブル
- Ethernetケーブル

すべての部品が含まれていることを確認してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

付属のtype-Cケーブルでデバイスの電源を入れるだけです。緑色のライトが点灯したら、reCameraが世界に接続する準備ができたことを意味します。

## ネットワーク接続

reCameraをネットワークに接続する方法は3つあります：

### 方法1：USBケーブル

**USBケーブル経由の有線ネットワーク設定**

reCameraからPCにUSBケーブルを接続すると、```192.168.42.1```にアクセスしてreCameraの読み込みページを表示できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

ワイヤレス機能付きのreCameraをお持ちの場合は、Wi-Fi接続の設定をお勧めします。2002wバージョンのみがWi-Fi選択UIを持ちます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

問題が発生した場合は、[ネットワークトラブルシューティング](https://wiki.seeedstudio.com/ja/recamera_network_connection/)をご覧ください。

### 方法2：Ethernet

**Ethernetポートネットワーク設定**

Ethernetポートを使用したい場合は、箱に入っているケーブルを使用してルーターに接続できます。注意：これは**POE（Power over Ethernet）ではありません**。デバイスの電源を入れるにはtype-cが必要です。カメラの**背面のネジを外して**ポート経由で接続できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

接続後、ルーターのバックエンドでreCameraのIPを見つけて、ウェブサイトとNode-REDプラットフォームにアクセスできます。

### 方法3：APモード（2002wバージョンのみ利用可能）

**APモードでのワイヤレスネットワーク設定**

電源投入時、reCameraはアクセスポイント（AP）をオンにして、ネットワーク設定を変更できるようにします。スマートフォンやノートパソコンのWi-Fiリストを開くと、`reCamera_******`という名前のWi-Fiが表示されるはずです。
命名システムは``"recamera_" + このデバイスのmacアドレスの下6桁``です。
デフォルトパスワードは`12345678`です。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

このAPに接続すると、ウェブサイトが自動的にポップアップするはずです。そうでない場合は、ブラウザで**192.168.16.1**と入力してページにアクセスできます。その後、reCameraを接続したいwifiを選択できます。
複数のreCameraをお持ちの場合は、[デバイス管理](https://wiki.seeedstudio.com/ja/recamera_getting_started/#multi-devices-management)を参照してどれがどれかを確認できます。

## 基本的なWebアクセス

reCameraをネットワークに接続したら、ブラウザでIPアドレスにアクセスしてreCameraのウェブサイトインターフェースにアクセスできます。

- USB接続IP：192.168.42.1
- Wi-FiまたはEthernet接続IP：`ifconfig`で確認するか、ルーターのネットワーク管理で確認してください。

WebのURL：

- **ホームページ**：`ip_address/#/init`
- **ワークスペース**：`ip_address/#/workspace`（OSバージョン0.1.4以上）
- **ネットワーク設定**：`ip_address/#/network`
- **セキュリティ**：`ip_address/#/security`
- **ターミナル**：`ip_address/#/terminal`
- **システム**：`ip_address/#/system`
- **電源**：`ip_address/#/power`
- **オリジナルNode-RED**：```ip_address:1880```

**デバイスのOSバージョンを確認してください**。バージョン0.1.3と0.1.4の間には大きなアップグレードがあります。よりスムーズなユーザーエクスペリエンスのために、0.1.5以上へのアップグレードをお勧めします。```サイドバー -> システム -> ソフトウェアアップデート```に移動してソフトウェアバージョンを確認し、最新バージョンのOSを適用してインストールしてください。アップデート手順については[OTAアップグレードガイドライン](https://wiki.seeedstudio.com/ja/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)を参照してください。

### 0.1.3から最新バージョンへのOTAアップグレード

reCameraの最初のバッチを入手した場合は、この手順に従ってOSを最新バージョンにアップグレードできます。

**ステップ1**：ウェブサイトを開き、```サイドバー -> システム -> ソフトウェアアップデート```に移動します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**ステップ2**：OSバージョンを確認し、**チェック**と**適用**をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**ステップ3**：システムの更新に数分間お待ちください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**ステップ4**：デバイスを再起動し、ウェブサイトを更新します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**ステップ5**：パスワードを変更するための読み込みページに入ります。これで、[このダウンロード手順](https://wiki.seeedstudio.com/ja/recamera_getting_started/#access-recamera-preview-dashboard)に従って、Node-REDダッシュボード付きの最新バージョンreCameraを体験できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### reCameraプレビューダッシュボードへのアクセス

デバイスをNode-REDと統合することで、ビデオストリームをプレビューし、希望するモデルを変更できる組み込みダッシュボードUIの例を提供しています。独自のアプリケーションと自由に調整・統合できます。

OSバージョンが0.1.5以上の場合、ログイン後すぐにプレビューダッシュボードが表示されます。

OSを自分でアップグレードした場合は、Sensecraft AIからダッシュボードjsonflowをダウンロードできます

**ステップ1**。アップグレード完了後、`192.168.42.1`またはネットワークIPでWebにアクセスし、```ダッシュボードフローをダウンロード```をクリックします

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**ステップ 2**. Sensecraft AIプラットフォームに移動し、最初の公式Dashboard Demoを選択して```Clone```をクリックします。このウェブサイトにはログインが必要です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**ステップ 3**. デバイスの接続方法を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**ステップ 4**. 事前構築されたフローを含むNode-REDワークスペースが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**ステップ 5**. ```Deploy```をクリックしてフローが既に開始されていることを確認し、```dashboard```をクリックすると、ダッシュボードが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

フローが開始されているかどうかを必ず確認してください。フローをインポートしても自動的にフローが開始されない場合があり、その場合ダッシュボードが空になります。ドロップダウンメニューで`Start`をクリックしてください。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

成功！
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**ステップ 6**. ```IoU```と```Confidence```の閾値を調整して、より正確な結果を得ることができます。

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### フローの簡単な理解

この例のフローでは、**Counting Selection**ドロップダウンリストを使用して、Person、Cat、Dog、Bottleなどの目的のオブジェクトの数をカウントするデモを構築しました。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

フロー内の`function nodes`を変更することで、カウントするオブジェクトを追加したり、この機能を他のコンピュータビジョンアプリケーションに完全に変更したりできます。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

`model node`を表示することで、どのような種類のオブジェクトが検出できるかを確認できます。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

フローを自由に調整して遊んでください。ただし、modelノードの後に多くの`debug nodes`や`preview nodes`を配置**しない**よう注意してください。AIモデルから複数の結果を出力することはCPUを消費し、デバイスのクラッシュを引き起こす可能性があります。

### コンピュータビジョンモデル

提供されたワークフローでは、デフォルトで`YOLO11n detection model`が選択されています。これはリアルタイムオブジェクト検出のための最新のコンピュータビジョンモデルです。ノード内で他のモデルに置き換えることもできます。利用可能な他のモデルを確認したい場合は、この[wiki](https://wiki.seeedstudio.com/ja/recamera_on_device_models/)を参照してください。

**Intersection over Union (IoU)**: IoUは、予測されたバウンディングボックスとグラウンドトゥルースバウンディングボックス間の重複を評価するために使用されるメトリックです。これは、2つのボックスの交差領域と2つのボックスの結合領域の比率として計算されます。IoUの値は通常0から1の範囲にあります。私たちはこれを0-100のスケールに標準化しました。IoU値0は予測ボックスとグラウンドトゥルースボックス間に重複がないことを表します。値100は完全な一致を示し、2つのボックスが完全に重複していることを意味します。

**Confidence**: YOLOモデルにおけるConfidenceは、予測されたバウンディングボックスがオブジェクトを含む確率と、その予測がどの程度正確かを表します。これは0から100.0の間の値です。

## ダッシュボードをカスタマイズしてコミュニティに共有する

ユーザーが開発・作成したダッシュボードをコミュニティで共有することを推奨しています。[GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow)にフォルダを作成しました。皆様には**プルリクエスト**を通じてダッシュボードを共有していただき、私たちがそれらを整理・表示いたします。
ここでは、ダッシュボードに補助光機能を追加することを例に、簡単にノードを追加してreCameraを制御する方法を説明します。

**ステップ 1**. ```button group```ノードをワークスペースにドラッグし、以下の設定で編集します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**ステップ 2**. "Control Button"という名前の新しいui-groupコンフィグノードを追加し、保存します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**ステップ 3**. ダッシュボード2.0に移動し、コントロールボタンフレームをモデル選択の下に配置します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**ステップ 4**. フローをデプロイし、ダッシュボードに移動します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**デモ**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**ステップ 5**: フローのjsonファイルをエクスポートして、私たちのgithubに共有することを忘れないでください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## ポートリスト

以下はreCameraが使用するポートの一覧です：

- **ポート 22**: リモートSSHログインに使用され、開放されています。
- **ポート 53**: DNS域名解決に関連し、Webリダイレクションに必要です。デフォルトで開放されています。
- **ポート 80**: Node-REDアプリケーションのHTTP表示用Webダッシュボードインターフェースとして機能します。
- **ポート 554**: RTSPビデオストリーミングに使用されます。
- **ポート 9090**: Webターミナルアクセス用で、ログインにはパスワードが必要です。
- **ポート 1880**: Node-RED操作専用です。

## 工場出荷時設定にリセット

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

デバイスのパスコードを忘れた場合など、デバイスをリセットしたい場合は、**User**ボタンを長押ししながらデバイスを電源に接続してください。デバイスの`赤いライト`が点滅ではなく**常時点灯**になったら、Userボタンを離してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
これにより、開発したアプリケーションやローカルストレージの画像・動画を含むユーザー情報が削除されます。慎重に操作してください。
:::

デバイスのファームウェアを特定のバージョンに復元したい場合は、[osバージョン管理](https://wiki.seeedstudio.com/ja/recamera_os_version_control)をご覧ください。

## 複数デバイス管理

複数のreCameraをお持ちの場合、デバイス背面の**macアドレス**または**S/N番号**で区別できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

または、USBまたはAP経由でデバイスをラップトップに接続した後、以下のコマンドを使用してmacアドレスを確認できます

```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## カメラの向き

デフォルトのカメラビューの向きは下の画像のようになっており、type-cが**下向き**になっています。他の向きでは、検出モデルをどのように訓練したかによって、モデルの精度に影響を与える可能性があることにご注意ください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## リソース

- [reCamera Flyer](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

- [reCamera Series](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)

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
