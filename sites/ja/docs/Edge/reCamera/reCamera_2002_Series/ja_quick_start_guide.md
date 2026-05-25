---
description: reCamera 入門ガイド
title: クイックスタートガイド
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_getting_started
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899
sidebar_position: 1
last_update:
  date: 04/10/2026
  author: Evelyn Chen & Samuel
createdAt: '2024-11-11'
updatedAt: '2026-04-10'
url: https://wiki.seeedstudio.com/ja/recamera_getting_started/
---

# reCamera クイックスタートガイド

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

reCamera へようこそ！このガイドでは、デバイスのセットアップを迅速に行い、強力な AI-Vision 機能の使用を開始する手順を説明します。初心者から経験豊富なユーザーまで、このステップバイステップのチュートリアルで、インストール、設定、初回使用までの流れを案内します。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font></span></strong>
    </a>
</div>

# 製品シリーズ

reCamera には 4 つのバージョンがあります：

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
        <td>無線(Wi-Fi/BT)</td>
        <td> </td>
        <td> </td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>取り付け方法</td>
        <td>磁石/カメラブラケットマウント</td>
        <td>磁石/カメラブラケットマウント</td>
        <td>磁石/カメラブラケットマウント</td>
        <td>磁石/カメラブラケットマウント</td>
    </tr>
    <tr>
        <td>電源供給</td>
        <td>Type-C ケーブル</td>
        <td>Type-C ケーブル</td>
        <td>Type-C ケーブル</td>
        <td>Type-C ケーブル</td>
    </tr>
</table>

## 開梱と電源投入

まず、reCamera の梱包を開けてください。箱の中には以下のものが含まれているはずです：

- reCamera
- Type-C ケーブル
- イーサネットケーブル

すべての部品が揃っていることを確認してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

付属の Type-C ケーブルでデバイスの電源を入れるだけです。緑色の LED が点灯したら、reCamera が接続準備完了です。

## ネットワーク接続

reCamera をネットワークに接続するには、以下の 3 つの方法があります：

### 方法 1: USB ケーブル

**USB ケーブルによる有線ネットワーク設定**

reCamera から PC へ USB ケーブルを接続すると、```192.168.42.1``` にアクセスして reCamera のローディングページを表示できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

無線機能付きの reCamera をお持ちの場合は、Wi-Fi 接続の設定をお勧めします。Wi-Fi 選択 UI は 2002w バージョンのみに搭載されています。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

**WiFi ネットワーク設定に関する注意事項：**

1. **同じネットワークを確保**: reCamera とコンピュータが**同じ WiFi ネットワーク**に接続されていることを確認してください。これにより、その後の開発とデバッグが正常に進められます。

2. **コンピュータの VPN を無効化**: コンピュータで VPN が有効になっている場合は、WiFi 設定を行う前に**VPN をオフにしてください**。VPN はネットワーク接続の問題を引き起こし、reCamera に正常にアクセスできなくなる可能性があります。

3. **WiFi 接続の切り替え方法**:
   - reCamera 設定ページ (192.168.42.1) で、**Network** 設定オプションを見つける
   - **Enable WI-FI botton** をクリック
   - リストから接続したい WiFi ネットワーク (SSID) を選択
   - WiFi パスワードを入力
   - **Confirm** ボタンをクリック

4. Wi-Fi への接続に成功したら、"Settings" ボタンをクリックして設定ページに入ります。"Wi-Fi IP" の横に Wi-Fi IP アドレスが表示されます。

問題が発生した場合は、[ネットワークトラブルシューティング](https://wiki.seeedstudio.com/ja/recamera_network_connection/) をご覧ください。

### 方法 2: イーサネット

**イーサネットポートによるネットワーク設定**

イーサネットポートを使用したい場合は、付属のケーブルを使用してルーターに接続できます。これは**POE (Power over Ethernet) ではありません**。デバイスの電源投入には Type-C ケーブルが依然として必要です。カメラの背面を**ネジで外し**、ポートを通じて接続できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

接続後、ルーターの管理画面で reCamera の IP を確認し、そのウェブサイトと Node-RED プラットフォームにアクセスできます。

### 方法 3: AP モード (2002w バージョンのみ利用可能)

**AP モードでの無線ネットワーク設定**

電源投入時、reCamera はアクセスポイント (AP) を起動し、ネットワーク設定を変更できるようにします。スマートフォンやノートパソコンの Wi-Fi リストを開くと、`reCamera_******` という名前の Wi-Fi が見えるはずです。
命名規則は、このデバイスの MAC アドレスの下 6 桁を ``"recamera_"`` に連結したものです。
デフォルトのパスワードは `12345678` です。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

この AP に接続すると、ウェブサイトが自動的にポップアップ表示されるはずです。表示されない場合は、ブラウザに **192.168.16.1** と入力してページにアクセスできます。その後、reCamera に接続させたい Wi-Fi を選択できます。
複数の reCamera をお持ちの場合は、[デバイス管理](https://wiki.seeedstudio.com/ja/recamera_getting_started/#マルチデバイス管理) を参照して、どのデバイスがどれかを確認できます。

## 基本的なウェブアクセス

reCamera をネットワークに接続したら、ブラウザで IP アドレスにアクセスして reCamera のウェブサイトインターフェースを表示できます。

- USB 接続 IP: 192.168.42.1
- Wi-Fi またはイーサネット接続 IP: `ifconfig` で確認するか、ルーターのネットワーク管理で確認してください。

ウェブ URL:

- **ホームページ**: `ip_address/#/init`
- **ワークスペース**: `ip_address/#/workspace` (OS バージョン 0.1.4 以上の場合)
- **ネットワーク設定**: `ip_address/#/network`
- **セキュリティ**: `ip_address/#/security`
- **ターミナル**: `ip_address/#/terminal`
- **システム**: `ip_address/#/system`
- **電源**: `ip_address/#/power`
- **オリジナル Node-RED**: ```ip_address:1880```

**デバイスの OS バージョンを確認してください**。バージョン 0.1.3 と 0.1.4 の間には大きなアップグレードがあります。よりスムーズなユーザーエクスペリエンスのため、0.1.5 以上へのアップグレードをお勧めします。```サイドバー -> System -> Software Update``` に移動してソフトウェアバージョンを確認し、最新バージョンの OS を適用・インストールしてください。アップデート手順については、[OTA アップグレードガイドライン](https://wiki.seeedstudio.com/ja/recamera_getting_started/#OTAアップグレード-013から最新バージョンへ) を参照してください。

### OTA アップグレード (0.1.3 から最新バージョンへ)

最初のロットの reCamera をお持ちの場合は、この手順に従って OS を最新バージョンにアップグレードできます。

**ステップ 1**: ウェブサイトを開き、```サイドバー -> System -> Software Update``` に移動します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**ステップ 2**: OS バージョンを確認し、**Check** と **Apply** をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**ステップ 3**: システムが更新されるまで数分待ちます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**ステップ 4**: デバイスを再起動し、ウェブサイトを更新します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**ステップ 5**: パスワード変更のローディングページが表示されます。これで、[このダウンロード手順](https://wiki.seeedstudio.com/ja/recamera_getting_started/#reCameraプレビューダッシュボードへのアクセス) に従って、Node-RED ダッシュボードを備えた最新バージョンの reCamera を体験できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### reCamera プレビューダッシュボードへのアクセス

デバイスを Node-RED と統合することで、ビデオストリームのプレビューや目的のモデルの変更が可能な組み込みのダッシュボード UI の例を提供しています。自由にカスタマイズし、独自のアプリケーションと統合できます。

OS バージョンが 0.1.5 以上の場合、ログインするとプレビューダッシュボードが表示されます。

自分で OS をアップグレードした場合は、Sensecraft AI からダッシュボードの jsonflow をダウンロードできます。

**ステップ 1**. アップグレード完了後、`192.168.42.1` またはネットワーク IP でウェブにアクセスし、```Download dashborad flow``` をクリックします。

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**ステップ 2**. Sensecraft AI プラットフォームに移動し、最初の公式 Dashboard Demo を選択して ```Clone``` をクリックします。このウェブサイトではログインが必要です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**ステップ 3**. デバイスの接続方法を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**ステップ 4**. すると、事前構築済みのフローを含む Node-RED ワークスペースが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**ステップ 5**. ```Deploy``` をクリックし、フローがすでに開始されていることを確認してから、```dashboard``` をクリックすると、ダッシュボードが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

フローが開始されているかどうかを必ず確認してください。フローをインポートしても自動的に開始されない場合があり、その場合ダッシュボードは空になります。ドロップダウンメニューの `Start` をクリックしてください。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

成功！
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**ステップ 6**. ```IoU``` と ```Confidence``` のしきい値を調整して、より正確な結果を得ることができます。

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### フローの簡単な理解

この例のフローでは、**Counting Selection** ドロップダウンリストを使用して、Person、Cat、Dog、Bottle などの目的のオブジェクトの数をカウントするデモを構築しました。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

フロー内の `function nodes` を変更することで、カウントするオブジェクトを追加したり、この機能を他のコンピュータビジョンアプリケーションに完全に変更したりすることができます。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

`model node` を表示することで、どのようなオブジェクトが検出可能かを確認できます。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

自由にフローをいじって、好きなように試してください。ただし、AIモデルから複数の結果を出力するとCPUを消費し、デバイスのクラッシュを引き起こす可能性があるため、モデルノードの後に `debug nodes` や `preview nodes` を**あまり多く配置しないように**注意してください。

### コンピュータビジョンモデル

提供されているワークフローでは、デフォルトで `YOLO11n detection model` が選択されています。これはリアルタイム物体検出モデル用の最新のコンピュータビジョンモデルです。ノード内の他のモデルに置き換えることもできます。利用可能な他のモデルを確認したい場合は、この [wiki](https://wiki.seeedstudio.com/ja/recamera_on_device_models/) を参照してください。

**Intersection over Union (IoU)**: IoU は、予測されたバウンディングボックスと正解のバウンディングボックス間の重なりを評価するために使用される指標です。2つのボックスの交差部分の面積と、2つのボックスの和集合の面積の比率として計算されます。IoU の値は通常 0 から 1 の範囲です。これを 0 - 100 のスケールに標準化しており、IoU 値が 0 は予測ボックスと正解ボックス間に重なりがないことを表します。値が 100 の場合は完全一致を示し、2つのボックスが完全に重なっていることを意味します。

**Confidence**: YOLO モデルにおける信頼度は、予測されたバウンディングボックスにオブジェクトが含まれている確率と、予測の正確さを表します。これは 0 から 100.0 の間の値です。

## ダッシュボードをカスタマイズしてコミュニティに共有する

ユーザーが開発・作成したダッシュボードをコミュニティで共有することを推奨しています。[GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow) にフォルダを作成しました。皆さんが **プルリクエスト** を通じてそこにダッシュボードを共有し、私たちが整理して表示することを願っています。
ここでは、ダッシュボードに補光機能を追加する例として、ノードを簡単に追加して reCamera を制御する方法を説明します。

**ステップ 1**. ```button group``` ノードをワークスペースにドラッグします。以下の設定で編集します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**ステップ 2**. "Control Button" という名前の新しい ui-group 設定ノードを追加し、保存します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**ステップ 3**. ダッシュボード 2.0 に移動し、モデル選択の下にコントロールボタンフレームを配置します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**ステップ 4**. フローをデプロイし、ダッシュボードに移動します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**デモ**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**ステップ 5**: フローの json ファイルをエクスポートし、私たちの GitHub に共有することを忘れないでください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## ポートリスト

以下は reCamera で使用されるポートのリストです：

- **ポート 22**: リモート SSH ログインに使用され、開放されています。
- **ポート 53**: DNS ドメイン名解決に関連し、ウェブリダイレクトに不可欠です。デフォルトで開放されています。
- **ポート 80**: Node-RED アプリケーションの HTTP 表示用のウェブダッシュボードインターフェースとして機能します。
- **ポート 554**: RTSP ビデオストリーミングに使用されます。
- **ポート 9090**: ウェブターミナルアクセス用であり、ログインにはパスワードが必要です。
- **ポート 1880**: Node-RED 操作専用です。

## 工場出荷時設定へのリセット

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

デバイスのパスコードを忘れるなど、デバイスをリセットしたい場合は、**User** ボタンを長押ししてからデバイスに電源を接続してください。デバイスの `赤いライト` が点滅ではなく**点灯したまま**になったら、User ボタンを離します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
これにより、開発したアプリケーションやローカルに保存された画像・動画など、ユーザー情報が削除されます。注意して操作してください。
:::

デバイスのファームウェアを特定のバージョンに復元したい場合は、[os version control](https://wiki.seeedstudio.com/ja/recamera_os_version_control) を参照してください。

## 複数デバイスの管理

複数の reCamera をお持ちの場合、デバイス背面の **mac アドレス** または **S/N 番号** で区別できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

または、USB または AP 経由でデバイスをラップトップに接続したら、以下のコマンドを使用して mac アドレスを表示できます。

```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## カメラの向き

デフォルトのカメラビューの向きは、Type-C が**下向き**になる以下の画像のようになっています。他の向きは、検出モデルの学習方法に基づいてモデルの精度に影響を与える可能性があることに注意してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## リソース

- [reCamera フライヤー](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

- [reCamera シリーズ](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)

## テクニカルサポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます！お客様の製品体験を可能な限りスムーズにするために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
