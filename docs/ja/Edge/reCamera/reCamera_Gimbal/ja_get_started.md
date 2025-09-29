---
description: reCamera Gimbalの使用開始
title: クイックスタートガイド
keywords:
  - AI
  - reCamera
  - Gimbal
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /ja/recamera_gimbal_getting_started
sidebar_position: 1
last_update:
  date: 04/09/2025
  author: Dawn Yao
---

# reCamera Gimbalの使用開始

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" /></div>

## はじめに

reCamera Gimbalへようこそ！reCamera gimbal 2002シリーズは、初のオープンソースカメラ制御システムで、1つの小型AIカメラ - reCamera 2002w 8GB/64GBと、2つのブラシレスモーターを搭載した互換性のある2軸ジンバルベースで構成されています。RISC-V SoCによって駆動され、5MP @ 30 FPSでのビデオエンコーディングで1 TOPSのAI性能を提供します。レゴのような自己組み立てパッケージを提供し、Sensecraft AIプラットフォームとNode-REDプラットフォームを統合して、スムーズなグラフィカルプログラミングとパイプライン構築を実現し、Yolo v5/v8/11などのAIモデルの迅速な自己トレーニング、モデル変換、デプロイメントを可能にします。

このガイドでは、デバイスを迅速にセットアップし、強力なAI-Vision機能を活用するための使用開始をサポートします。初心者でも経験豊富なユーザーでも、このステップバイステップのウォークスルーが、インストール、設定、初回使用をガイドします。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱</font></span></strong>
    </a>
</div>

## 前提条件

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_prerequisites.png" /></div>

- reCamera Gimbal
- ユーザーマニュアル（箱の中）
- 12V DC電源アダプターから5521 DCプラグ（[購入リンク](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)）
- USB Type C（[購入リンク](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)）
- Wi-Fi接続
- 電動ドライバー（より良い組み立て体験のためのオプション）

## 開封

reCamera Gimbalの開封から始めます。箱の中には以下が含まれているはずです：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

すべての部品が含まれていることを確認してください。

### ハードウェア組み立て

箱の組み立て説明書または[ユーザーマニュアル](#jump1)に従って、reCamea Gimbalを組み立てます。

<div style={{textAlign:'center'}}><iframe width={560} height={315} src="https://www.youtube.com/embed/VAkhDHct0p4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

:::note
すべてのネジがしっかりと締められていることを確認してください。そうでないとモーターの動作に影響します。
:::

### デバイスのセットアップとログイン

**ステップ1:** Gimbalを組み立てた後、reCamera GimbalからPCにUSBケーブルを接続します。ウェブサイトで`192.168.42.1`にアクセスし、デフォルトパスワードを変更します。WiFi APセットアップモードを使用している場合は、代わりに`192.168.16.1`にアクセスしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
パスワードを覚えておいてください。そうでないと、デバイスをリセットするためにすべてのログが消去されます。パスワードを忘れた場合は、デバイスを[工場出荷時設定にリセット](https://wiki.seeedstudio.com/ja/recamera_getting_started/#factory-reset)してください。
:::

:::note
デフォルトのユーザー名とパスワードは両方とも`recamera`です。工場出荷時設定にリセットを実行した場合や、新しい（未設定の）デバイスを使用している場合は、これらのユーザー名とパスワードを使用してください。
:::

**ステップ2:** ここでGimbal Preview Dashboardに移動します。ダッシュボードのコントロールでモーターの動きを体験する前に、`Network`に移動してWi-Fiをセットアップしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_network.png" /></div>

**ステップ3:** Wi-Fiに接続します。Wi-Fiに正常に接続した後、`ロックアイコン`をクリックしてデバイスのIPアドレスを表示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/view_wifi_IP.png" /></div>

**ステップ4:** 新しいブラウザタブを開き、このIPアドレスを使用してデバイスにアクセスします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_5.png" /></div>

**ステップ6:** 最適なモーターの動きのために、まずベースに電源を接続し、次にUSB Type Cケーブルを取り外します。

:::note

電圧12Vの電源アダプターを接続する必要があります。

:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/switch_power.png" /></div>

**ステップ7:** `IPアドレス`のブラウザに戻ってダッシュボードにアクセスし、右側の`Calibrateボタン`を押してGimbalを自己校正させます。

:::note

校正中は、校正の失敗を招く可能性があるため、デバイスの動作を妨げないでください。校正は、ジンバルの電源を入れるたびに自動的に実行されます。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_calibrate.png" /></div>

### 校正動作

ヨー軸は0–360°の動作範囲を持ちますが、構造的制約により実際の機械的範囲は約345°に制限されています。ただし、視覚カバレッジは360°のままです。ピッチ軸は0–180°の動作範囲をサポートします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

電源投入時、ジンバルは自動校正シーケンスを開始します：

- **ヨー軸**: ジンバルは最初に機械的限界（電源ケーブルの上に位置）に向かって時計回りに回転し、次に反対の限界まで反時計回りに回転します。両端に到達した後、中央位置に戻ります。

- **ピッチ軸**: ジンバルは0°位置まで上向きに傾き、次に180°限界に到達するまで下向きに傾き、最後に中央に戻ります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/calibrate.gif" /></div>

このシーケンスでジンバルの自己校正プロセスが完了します。

ターミナルでこのコマンドを入力して校正することもできます

```bash
gimbal cali
```

### キャリブレーション問題のトラブルシューティング

ジンバルがキャリブレーションシーケンスを正しく実行しない場合、いくつかの潜在的な原因が考えられます：

- **機械的制限の確認**: ジンバルを手動でチェックして、動作範囲が妨げられていないか、または不適切に制限されていないかを確認してください。

- **3Dプリント部品からの抵抗をチェック**: モーターが動作する際の抵抗を感じてください。抵抗が過度である場合、モーターの力を増加させるためにモーターのPID設定を調整する必要があるかもしれません。[PIDの調整方法はこちらで確認できます](https://wiki.seeedstudio.com/ja/recamera_pid_adjustment)。または、部品をサンディングしたり、ネジを少し緩めたりして摩擦を減らし、動作を改善してください。

## 基本的なWebアクセス

Web URL：

- **プレビューページ**: `ip_address/#/dashboard`

- **ホームページ**: `ip_address/#/init`
- **ワークスペース**: `ip_address/#/workspace`
- **ネットワーク設定**: `ip_address/#/network`
- **セキュリティ**: `ip_address/#/security`
- **ターミナル**: `ip_address/#/terminal`
- **システム**: `ip_address/#/system`
- **電源**: `ip_address/#/power`
- **オリジナルNode-RED**: `ip_address:1880`

### ジンバルダッシュボードでのクイックスタート

#### モーター制御

セットアップとキャリブレーションが完了したら、ダッシュボードで利用可能なオプションを使用してジンバルを制御できます。`ip_address/#/dashboard`または`ip_address`にアクセスして、Node-REDノードで作成されたジンバルのプレビューダッシュボードにアクセスしてください：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

- **ジョイスティック**: カメラの視野の方向を制御します。例えば、ジョイスティックを右にドラッグすると、画像もそれに応じて右に移動します。
- **スライダー**:
  - ヨーとピッチスライダー: ジンバルを指定された絶対角度に移動します。

    ヨー範囲: 0–360°

    ピッチ範囲: 0–180°

:::note
構造的制約により、ヨー範囲は0–345°に制限され、ピッチ範囲は0–180°に制限されます。これらの範囲外の値を入力した場合、最も近い境界に調整されます。例えば、ヨーに360°を入力した場合、システムは自動的に345°として動作を実行します。
:::

- スピードスライダー: 両方のモーターの速度を同時に調整します。

    速度範囲: 0–720°/s（度/秒）
- **自動追跡**: ドロップダウンメニューからターゲットオブジェクト（例：人、車、猫、犬、ボトル）を選択し、`Start Tracking`をクリックして自動オブジェクト追跡を開始します。`Stop Tracking`をクリックして追跡を終了します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_tarck.png" /></div>

- **スリープボタン**: ジンバルを絶対位置（ヨー: 180°、ピッチ: 180°）に移動します。

:::note

スリープボタンは低電力スリープモードを有効にしません。単純にカメラを下向きに再配置するだけです。

:::

- **スタンバイボタン**: ジンバルを絶対位置（ヨー: 180°、ピッチ: 90°）に移動します。
- **キャリブレートボタン**: ジンバルキャリブレーションプロセスを開始します。
- **緊急停止ボタン**: 動作中に両方のモーターを即座に無効にします。

    ⚠️ 注意: これはキャリブレーションプロセスを中断しません。

#### AIモデルパラメータ

**信頼度**: YOLOモデルの信頼度は、予測された境界ボックスがオブジェクトを含む確率と、その予測がどれだけ正確かを表します。これは0から100の間の値です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**Intersection over Union (IoU)**: IoUは、予測された境界ボックスと正解境界ボックス間の重複を評価するために使用される指標です。これは、2つのボックスの交差領域と2つのボックスの結合領域の比率として計算されます。IoUの値は通常0から1の範囲です。私たちはこれを0-100のスケールに標準化しました。IoU値0は予測ボックスと正解ボックス間に重複がないことを表します。値100は完全な一致を示し、2つのボックスが完全に重複することを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### ジンバルダッシュボードフローでのクイックスタート

ダッシュボードがNode-REDノードでどのように作成されているかを知りたい場合は、右下角をクリックするか、`ip_address/#/workspace`にアクセスしてジンバルのNode-REDワークスペースにアクセスしてください

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_to_workspace.png" /></div>

そうすると、デフォルトのジンバルダッシュボードフローが表示されます。各ノードをダブルクリックしてノードの詳細を表示できます。ダッシュボードフローは次のようになります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

**モデル設定**:

- スライダーノードを使用して、YOLO AIモデルのIoU（Intersection over Union）と信頼度閾値を調整できます。

**ダッシュボードUI表示**:

- UIテンプレートノードは、現在のモデル設定を示すテキストを表示します。
- また、YOLOによって識別されたオブジェクトの検出ボックスを含む、カメラからのbase64画像をレンダリングします。

**ターゲットによる自動追跡**:

- 関数ノードは、ターゲットオブジェクト（例：幅、高さ、座標）に関する情報を取得し、追跡アルゴリズムを使用してこのデータを処理します。

- アルゴリズム関数ノードは、ターゲットボックス中心の視覚中心に対するオフセットを計算し、このオフセットをセットモーター角度ノードに送信して、ジンバルを希望の位置に移動させます。

**手動モーター制御**:

- スライダーノードを使用してモーター角度を手動で設定し、特定の度数でジンバルを移動します。

- または、ジョイスティックUIノードを使用して、ジンバルの位置を小さな増分（オフセットごと）で調整することで手動制御を行います。

**ショートカットボタン**:

- ボタンUIノードは、特定の位置をセットモーター角度ノードに送信し、スリープやスタンバイなどの動作をトリガーします。

- これらのボタンは、キャリブレーション用の`gimbal cali`や緊急停止用の`gimbal stop 1; gimbal stop 2`などのbashスクリプトを実行するexecノードもトリガーできます。

**基本WebIframeサブフロー**:

- iframeサブフローは、ネットワーク設定、システム情報、デバイス情報などの基本的なWebページを表示します。

- これらは複数のノードでページをレンダリングするため、CPUリソースを消費する可能性があることに注意してください。必要でない場合は削除できます。

## クラウド管理とバックアップの適用

新しいアプリケーションを作成したり、アプリケーションをSenseCraftクラウドサービスに保存したい場合は、左下でsensecraftアカウントにログインし、`+`アイコンをクリックして新しいアプリケーションを追加できます。その後、フローの作業を開始できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

アプリは[reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera)で表示・管理できます。

:::note

プラットフォーム経由でログインしてアプリケーションを同期するには、事前にアカウントを登録する必要があります。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## ポートリスト

以下はreCamera Gimbalで使用されるポートのリストです：

- **ポート22**: リモートSSHログインに使用され、開放されています。
- **ポート53**: DNSドメイン名解決に関連し、Webリダイレクトに必要です。デフォルトで開放されています。
- **ポート80**: Node-REDアプリケーションのHTTP表示用のWebダッシュボードインターフェースとして機能します。
- **ポート554**: RTSPビデオストリーミングに使用されます。
- **ポート9090**: Webターミナルアクセス用で、ログインにはパスワードが必要です。
- **ポート1880**: Node-RED操作専用です。

## OTA OSアップグレード

[OTAアップグレード手順](https://wiki.seeedstudio.com/ja/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)を参照してください。

## ファクトリーリセット

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_usr_button.png" /></div>

デバイスのパスコードを忘れた場合などでデバイスをリセットしたい場合は、**User**ボタンを長押ししながらデバイスを電源に接続してください。デバイスの`赤いライト`が点滅ではなく**常時点灯**になったら、Userボタンを離してください。

## リソース

- <span id="jump1"><a href="https://files.seeedstudio.com/gimbal/GIMBAL_Manual0311.pdf">reCamera Gimbalユーザーマニュアル</a></span>

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
