---
description: reCamera のはじめに
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
  author: Samuel Yang
createdAt: '2024-11-11'
updatedAt: '2026-04-10'
url: https://wiki.seeedstudio.com/ja/recamera_getting_started/
---

# reCamera クイックスタートガイド

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

reCamera へようこそ！このガイドでは、デバイスのセットアップを素早く行い、強力な AI ビジョン機能を使い始めるまでの手順を説明します。初心者の方でも経験豊富なユーザーの方でも、このステップバイステップのウォークスルーに従うことで、インストール、設定、初回使用までを進めることができます。

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
        <td>ワイヤレス（Wi-Fi/BT）</td>
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
        <td>電源</td>
        <td>Type-C ケーブル</td>
        <td>Type-C ケーブル</td>
        <td>Type-C ケーブル</td>
        <td>Type-C ケーブル</td>
    </tr>
</table>

## 開封と電源オン

まず、reCamera を開封します。箱の中には次のものが入っているはずです：

- reCamera
- Type-C ケーブル
- Ethernet ケーブル

すべての部品が揃っていることを確認してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

付属の Type-C ケーブルでデバイスに電源を入れるだけです。緑色のランプが点灯したら、reCamera が外部と接続する準備ができたことを意味します。

## ネットワーク接続

reCamera をネットワークに接続する方法は 3 つあります：

### 方法 1: USB ケーブル

**USB ケーブルによる有線ネットワーク設定**

USB ケーブルで reCamera と PC を接続し、その後 ```192.168.42.1``` にアクセスすると、reCamera のロードページを表示できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

ワイヤレス機能付きの reCamera をお持ちの場合は、Wi-Fi 接続の設定をおすすめします。Wi-Fi 選択 UI が表示されるのは 2002w バージョンのみです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

**WiFi ネットワーク設定に関する注意事項：**

1. **同一ネットワークを確認**：reCamera とコンピュータが**同じ WiFi ネットワーク**に接続されていることを確認してください。これにより、その後の開発やデバッグを正常に行うことができます。

2. **コンピュータの VPN を無効化**：コンピュータで VPN を有効にしている場合は、WiFi を設定する前に **VPN をオフ** にしてください。VPN によりネットワーク接続の問題が発生し、reCamera に正常にアクセスできなくなる可能性があります。

3. **WiFi 接続を切り替える方法**：
   - reCamera の設定ページ（192.168.42.1）で **Network** 設定オプションを探します
   - **Enable WI-FI botton** をクリックします
   - 一覧から接続したい WiFi ネットワーク（SSID）を選択します
   - WiFi パスワードを入力します
   - **Confirm** ボタンをクリックします

4. Wi-Fi に正常に接続できたら、「Settings」ボタンをクリックして設定ページに入ります。「Wi-Fi IP」の横に Wi-Fi の IP アドレスが表示されます。

問題が発生した場合は、[network troubleshoot](https://wiki.seeedstudio.com/ja/recamera_network_connection/) を参照してください。

### 方法 2: Ethernet

**Ethernet ポートによるネットワーク設定**

Ethernet ポートを使用する場合は、同梱のケーブルでルーターに接続できます。これは **POE（Power over Ethernet）ではない** ことに注意してください。デバイスの電源投入には依然として Type-C ケーブルが必要です。カメラ背面のネジを**外して**ポートに接続できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

接続後、ルーターの管理画面で reCamera の IP を確認し、その IP にアクセスして Web サイトおよび Node-RED プラットフォームを利用できます。

### 方法 3: AP モード（2002w バージョンのみ利用可能）

**AP モードでのワイヤレスネットワーク設定**

電源投入時、reCamera はネットワーク設定を変更できるよう Access Point（AP）モードを自動的に有効にします。スマートフォンまたはノート PC の Wi-Fi リストを開くと、`reCamera_******` という Wi-Fi 名が表示されるはずです。
命名規則は、このデバイスの ``"recamera_" + the last six digits of the mac address`` です。
デフォルトパスワードは `12345678` です。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

この AP に接続すると、自動的に Web ページがポップアップ表示されるはずです。表示されない場合は、ブラウザで **192.168.16.1** と入力してページにアクセスできます。そこで reCamera を接続したい WiFi を選択できます。
複数の reCamera をお持ちの場合は、どのデバイスがどれかを確認するために [Device Management](https://wiki.seeedstudio.com/ja/recamera_getting_started/#multi-devices-management) を参照してください。

## 基本的な Web アクセス

reCamera をネットワークに接続したら、ブラウザで IP アドレスにアクセスすることで reCamera の Web インターフェースを表示できます。

- USB 接続時の IP: 192.168.42.1
- Wi-Fi または Ethernet 接続時の IP: `ifconfig` で確認するか、ルーターのネットワーク管理画面で確認します。

Web URL:

- **ホームページ**: `ip_address/#/init`
- **ワークスペース**: `ip_address/#/workspace`（OS バージョン 0.1.4 以上）
- **ネットワーク設定**: `ip_address/#/network`
- **セキュリティ**: `ip_address/#/security`
- **ターミナル**: `ip_address/#/terminal`
- **システム**: `ip_address/#/system`
- **電源**: `ip_address/#/power`
- **元の Node-RED**: ```ip_address:1880```

**デバイスの OS バージョンを確認してください**。バージョン 0.1.3 と 0.1.4 の間には大きなアップグレードがあります。よりスムーズなユーザー体験のため、0.1.5 以上へのアップグレードを推奨します。```Sidebar -> System -> Software Update``` へ移動してソフトウェアバージョンを確認し、OS の最新バージョンを適用・インストールしてください。アップデート手順については [OTA upgrade guideline](https://wiki.seeedstudio.com/ja/recamera_getting_started/#OTA-アップグレード-from-013-to-latest-version) を参照してください。

### 0.1.3 から最新バージョンへの OTA アップグレード

最初のロットの reCamera を入手した場合は、以下の手順に従って OS を最新バージョンにアップグレードできます。

**ステップ 1**: Web サイトを開き、```Sidebar -> System -> Software Update``` に移動します

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**ステップ 2**: OS バージョンを確認し、**Check** と **Apply** をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**ステップ 3**: システムがアップデートされるまで数分待ちます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**ステップ 4**: デバイスを再起動し、Web サイトを更新します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**ステップ 5**: パスワードを変更するためのロードページに入ります。[this downloading instruction](https://wiki.seeedstudio.com/ja/recamera_getting_started/#recamera-preview-dashboard-へのアクセス) に従うことで、最新バージョンの reCamera と Node-RED ダッシュボードを体験できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### reCamera プレビューダッシュボードへのアクセス

デバイスを Node-RED と統合することで、ビデオストリームをプレビューしたり、使用したいモデルを変更できるビルトインのダッシュボード UI サンプルを提供しています。自由にカスタマイズし、ご自身のアプリケーションと統合することができます。

OS バージョンが 0.1.5 以上であれば、ログイン後すぐにプレビューダッシュボードが表示されます。

OS を自分でアップグレードした場合は、Sensecraft AI からダッシュボードの jsonflow をダウンロードできます。

**ステップ 1**. アップグレード完了後、`192.168.42.1` またはネットワーク IP から Web にアクセスし、```Download dashborad flow``` をクリックします

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**ステップ 2**. Sensecraft AI プラットフォームに移動し、最初の公式 Dashboard Demo を選択して ```Clone``` をクリックします。この Web サイトの利用にはログインが必要です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**ステップ 3**. デバイスの接続方法を選択します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**ステップ 4**. すると、事前に構築されたフローを含む Node-RED ワークスペースが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**ステップ 5**. ```Deploy``` をクリックしてフローがすでに開始していることを確認し、その後 ```dashboard``` をクリックすると、ダッシュボードが表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

フローが開始されているかどうかを必ず確認してください。フローをインポートしても、自動的にフローが開始されない場合があり、その場合ダッシュボードは空のままになります。ドロップダウンメニューから `Start` をクリックしてください。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

成功しました！
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**Step 6**. ```IoU``` と ```Confidence``` のしきい値を調整して、より正確な結果を得ることができます。

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### フローを素早く理解する

このサンプルフローでは、Person、Cat、Dog、Bottle などの目的のオブジェクト数を、**Counting Selection** ドロップダウンリストを使ってカウントするデモを構築しました。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

フロー内の `function nodes` を変更することで、カウントするオブジェクトを追加したり、この機能自体を他のコンピュータビジョンアプリケーションに完全に置き換えたりすることができます。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

どのような種類のオブジェクトが検出できるかは、`model node` を確認することで確認できます。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

フローは自由に工夫して遊んでみてください。ただし、モデルノードの後にあまり多くの `debug nodes` や `preview nodes` を配置しないよう注意してください。AI モデルから複数の結果を出力すると CPU を消費し、デバイスがクラッシュする原因になります。

### コンピュータビジョンモデル

これらの提供されたワークフローでは、デフォルトで `YOLO11n detection model` が選択されています。これはリアルタイム物体検出用の最新のコンピュータビジョンモデルです。ノード内で他のモデルに置き換えることも可能です。利用可能な他のモデルを確認したい場合は、この [wiki](https://wiki.seeedstudio.com/ja/recamera_on_device_models/) を参照してください。

**Intersection over Union (IoU)**: IoU は、予測されたバウンディングボックスと正解のバウンディングボックスの重なりを評価するために使用される指標です。2 つのボックスの交差領域を結合領域で割った比として計算されます。IoU の値は通常 0 から 1 の範囲です。ここでは 0 〜 100 のスケールに標準化しており、IoU 値が 0 の場合は予測ボックスと正解ボックスの間に重なりがないことを表します。値が 100 の場合は完全な一致を意味し、2 つのボックスが完全に重なっていることを示します。

**Confidence**: YOLO モデルにおける Confidence は、予測されたバウンディングボックスにオブジェクトが含まれている確率と、その予測の正確さを表します。0 から 100.0 の値を取ります。

## ダッシュボードをカスタマイズしてコミュニティで共有する

ユーザーの皆様が開発・作成したダッシュボードをコミュニティで共有していただくことを推奨しています。[GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow) 上にフォルダを用意しましたので、そこに **pull request** でダッシュボードを共有していただければ、こちらで整理して公開します。
ここでは、ダッシュボードに補助照明機能を追加して reCamera を制御する例として、ノードを 1 つ簡単に追加する手順を紹介します。

**Step 1**. ```button group``` ノードをワークスペースにドラッグし、次の設定で編集します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**Step 2**. "Control Button" という名前の新しい ui-group 設定ノードを追加し、保存します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**Step 3**. dashboard 2.0 に移動し、モデル選択の下にコントロールボタンのフレームを配置します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**Step 4**. フローをデプロイしてダッシュボードにアクセスします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**デモ**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**Step 5**: フローの json ファイルをエクスポートし、GitHub 上で共有することをお忘れなく。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## ポート一覧

以下は reCamera で使用されているポートの一覧です：

- **Port 22**: リモート SSH ログインに使用されており、開放されています。
- **Port 53**: DNS ドメイン名解決に関連しており、Web リダイレクトに不可欠です。デフォルトで開放されています。
- **Port 80**: Node-RED アプリケーションの HTTP 表示用 Web ダッシュボードインターフェースとして機能します。
- **Port 554**: RTSP 動画ストリーミングに使用されます。
- **Port 9090**: Web ターミナルアクセス用で、ログインにはパスワードが必要です。
- **Port 1880**: Node-RED の動作専用のポートです。

## 工場出荷時設定へのリセット

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

デバイスのパスコードを忘れた場合などにデバイスをリセットしたいときは、**User** ボタンを長押ししたままデバイスに電源を接続します。デバイスの `red light` が点滅ではなく**点灯し続ける**状態になったら、User ボタンを離します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
これにより、開発したアプリケーションやローカルに保存した画像・動画を含むユーザー情報が削除されます。操作は十分注意して行ってください。
:::

デバイスのファームウェアを特定のバージョンに復元したい場合は、[os version control](https://wiki.seeedstudio.com/ja/recamera_os_version_control) を参照してください。

## 複数デバイスの管理

複数の reCamera をお持ちの場合は、デバイス背面にある **mac address** や **S/N number** で区別することができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

または、USB や AP 経由でデバイスをノート PC に接続した後、次のコマンドを使用して mac address を確認することもできます。

```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## カメラの向き

デフォルトのカメラビューの向きは、以下の画像のように type-c が**下向き**になっている状態です。その他の向きにすると、どのように検出モデルを学習させたかによっては、モデルの精度に影響を与える可能性があることに注意してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## リソース

- [reCamera Flyer](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

- [reCamera Series](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)

## テクニカルサポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
