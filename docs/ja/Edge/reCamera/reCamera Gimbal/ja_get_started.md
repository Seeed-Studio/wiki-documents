---
description: reCamera Gimbalの使い方
title: クイックスタートガイド
keywords:
  - AI
  - reCamera
  - Gimbal
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /ja/recamera_gimbal_getting_started
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Dawn Yao
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reCamera Gimbalの使い方

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" /></div>

## はじめに

reCamera Gimbalへようこそ！reCamera gimbal 2002シリーズは、初のオープンソースカメラ制御システムであり、小型AIカメラ「reCamera 2002w 8GB/64GB」と、2つのブラシレスモーターを備えた互換性のある2軸ジンバルベースで構成されています。RISC-V SoCによって駆動され、5MP @ 30 FPSでのビデオエンコードと1 TOPSのAI性能を提供します。レゴのような自己組み立てパッケージを提供し、Sensecraft AIプラットフォームとNode-REDプラットフォームを統合して、スムーズなグラフィカルプログラミングとパイプライン構築を可能にします。これにより、Yolo v5/v8/v11などのAIモデルの迅速な自己トレーニング、モデル変換、デプロイが可能です。

このガイドでは、デバイスを迅速にセットアップし、強力なAIビジョン機能を活用する方法を説明します。初心者でも経験豊富なユーザーでも、このステップバイステップの手順に従うことで、インストール、設定、初回使用をスムーズに進めることができます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱</font></span></strong>
    </a>
</div>

## 必要なもの

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_prerequisites.png" /></div>

- reCamera Gimbal
- ユーザーマニュアル（箱の中に同梱）
- 12V DC電源アダプター（5521 DCプラグ用） ([購入リンク](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html))
- USB Type Cケーブル ([購入リンク](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html))
- Wi-Fi接続
- 電動ドライバー（組み立てをより快適にするためのオプション）

## 開封

まず、reCamera Gimbalを開封します。箱の中には以下のものが含まれています：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

すべての部品が揃っていることを確認してください。

### ハードウェアの組み立て

箱や[ユーザーマニュアル](#jump1)の組み立て手順に従って、reCamera Gimbalを組み立ててください。

<div style={{textAlign:'center'}}><iframe width={560} height={315} src="https://www.youtube.com/embed/VAkhDHct0p4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

:::note
すべてのネジをしっかり締めてください。そうしないと、モーターの動作に影響を与える可能性があります。
:::

### デバイスのセットアップとログイン

**ステップ1:** ジンバルを組み立てた後、USBケーブルをreCamera GimbalからPCに接続します。ウェブサイトで`192.168.42.1`にアクセスし、デフォルトのパスワードを変更してください。Wi-Fi APセットアップモードを使用している場合は、代わりに`192.168.16.1`にアクセスしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
パスワードを忘れないようにしてください。忘れた場合、デバイスをリセットするためにすべてのログが消去されます。パスワードを忘れた場合は、[工場出荷時リセット](https://wiki.seeedstudio.com/ja/recamera_getting_started/#factory-reset)を行ってください。
:::

:::note
デフォルトのユーザー名とパスワードはどちらも`recamera`です。工場出荷時リセットを行った場合や新しい（未設定の）デバイスを使用している場合は、このユーザー名とパスワードを使用してください。
:::

**ステップ2:** ここで、ジンバルプレビューダッシュボードに移動します。ダッシュボードのコントロールを使用してモーターの動きを体験する前に、`Network`に移動してWi-Fiを設定してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_network.png" /></div>

**ステップ3:** Wi-Fiに接続します。Wi-Fiに正常に接続した後、`ロックアイコン`をクリックしてデバイスのIPアドレスを表示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/view_wifi_IP.png" /></div>

**ステップ4:** 新しいブラウザタブを開き、このIPアドレスを使用してデバイスにアクセスします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_5.png" /></div>

**ステップ6:** ベースに電源を接続してから、最適なモーター動作のためにUSB Type Cケーブルを取り外します。

:::note

電源アダプターは12Vの電圧で接続する必要があります。

:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/switch_power.png" /></div>

**ステップ7:** `IPアドレス`ブラウザに戻り、ダッシュボードにアクセスして、右側の`キャリブレートボタン`を押してジンバルをキャリブレーションしてください。

:::note

キャリブレーション中は、デバイスの操作を妨げないようにしてください。これによりキャリブレーションが失敗する可能性があります。キャリブレーションは、ジンバルの電源を入れるたびに自動的に実行されます。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_calibrate.png" /></div>

### キャリブレーション動作

ヨー軸の動作範囲は0–360°ですが、構造上の制約により実際の機械的範囲は約345°に制限されています。ただし、視野範囲は360°を維持します。ピッチ軸は0–180°の動作範囲をサポートします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

電源を入れると、ジンバルは自動キャリブレーションシーケンスを開始します：

- **ヨー軸**: ジンバルは最初に時計回りに回転して機械的な制限（電源ケーブルの上に位置）に達し、その後反時計回りに反対の制限に回転します。両端に到達した後、中央位置に戻ります。

- **ピッチ軸**: ジンバルは上向きに0°の位置まで傾き、その後下向きに180°の制限まで移動し、最後に中央に戻ります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/calibrate.gif" /></div>

このシーケンスでジンバルの自己キャリブレーションプロセスが完了します。

ターミナルで以下のコマンドを入力してキャリブレーションを行うこともできます：
```bash
gimbal cali
```

### キャリブレーション問題のトラブルシューティング

ジンバルがキャリブレーションシーケンスを正しく実行しない場合、以下のような原因が考えられます：

- **機械的制限の確認**: ジンバルの動作範囲が妨げられていないか、または誤って制限されていないかを手動で確認してください。

- **3Dプリント部品による抵抗の確認**: モーターが動く際に抵抗を感じる場合があります。抵抗が過剰な場合は、モーターのPID設定を調整してモーターの力を増加させる必要があるかもしれません。[PIDの調整方法はこちら](https://wiki.seeedstudio.com/ja/recamera_pid_adjustment)をご覧ください。または、部品を研磨したり、ネジを少し緩めたりして摩擦を減らし、動作を改善してください。

## 基本的なウェブアクセス

ウェブURL：

- **プレビューページ**: `ip_address/#/dashboard`

- **ホームページ**: `ip_address/#/init`
- **ワークスペース**: `ip_address/#/workspace`
- **ネットワーク設定**: `ip_address/#/network`
- **セキュリティ**: `ip_address/#/security`
- **ターミナル**: `ip_address/#/terminal`
- **システム**: `ip_address/#/system`
- **電源**: `ip_address/#/power`
- **オリジナルNode-RED**: `ip_address:1880`

### ジンバル ダッシュボード のクイックスタート:
#### モーター制御
セットアップとキャリブレーションが完了した後、ダッシュボードのオプションを使用してジンバルを制御できます。`ip_address/#/dashboard` または `ip_address` にアクセスして、Node-REDノードで作成されたジンバルのプレビューダッシュボードを開きます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

- **ジョイスティック**: カメラの視野の方向を制御します。例えば、ジョイスティックを右にドラッグすると、画像も右に移動します。
- **スライダー**: 
  - ヨーおよびピッチスライダー: ジンバルを指定した絶対角度に移動させます。

    ヨー範囲: 0–360°

    ピッチ範囲: 0–180°

:::note
構造上の制約により、ヨー範囲は0–345°、ピッチ範囲は0–180°に制限されています。この範囲外の値を入力すると、最も近い境界値に調整されます。例えば、ヨーに360°を入力すると、システムは自動的に345°として動作を実行します。
:::

  - スピードスライダー: 両モーターの速度を同時に調整します。

    スピード範囲: 0–720°/秒（毎秒の角度）

- **自動追跡**: ドロップダウンメニューからターゲットオブジェクト（例：人、車、猫、犬、ボトル）を選択し、`Start Tracking` をクリックして自動追跡を開始します。追跡を終了するには `Stop Tracking` をクリックします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_tarck.png" /></div>

- **スリープボタン**: ジンバルを絶対位置（ヨー: 180°, ピッチ: 180°）に移動させます。

:::note

スリープボタンは低電力スリープモードを有効にするものではありません。単にカメラを下向きに再配置します。

:::

- **スタンバイボタン**: ジンバルを絶対位置（ヨー: 180°, ピッチ: 90°）に移動させます。
- **キャリブレートボタン**: ジンバルのキャリブレーションプロセスを開始します。
- **緊急停止ボタン**: 移動中に両モーターを即座に無効化します。

    ⚠️ 注意: これによりキャリブレーションプロセスは中断されません。

#### AIモデルパラメータ
**信頼度**: YOLOモデルの信頼度は、予測されたバウンディングボックスがオブジェクトを含む確率と予測の正確性を表します。値は0から100の範囲です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**IoU（Intersection over Union）**: IoUは、予測されたバウンディングボックスと実際のバウンディングボックスの重なりを評価するための指標です。2つのボックスの交差領域と結合領域の比率として計算されます。IoUの値は通常0から1の範囲ですが、0 - 100のスケールに標準化されています。IoU値が0の場合、予測ボックスと実際のボックスの間に重なりがないことを示します。値が100の場合、2つのボックスが完全に重なっていることを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### ジンバル ダッシュボード フローのクイックスタート:

Node-REDノードでダッシュボードがどのように作成されているかを知りたい場合は、右下隅をクリックするか、`ip_address/#/workspace` にアクセスしてジンバルのNode-REDワークスペースを開いてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_to_workspace.png" /></div>

すると、デフォルトのジンバルダッシュボードフローが表示されます。各ノードをダブルクリックしてノードの詳細を確認できます。ダッシュボードフローは以下のようになります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

**モデル設定**: 
  - スライダーノードを使用して、YOLO AIモデルのIoU（Intersection over Union）および信頼度のしきい値を調整できます。

**ダッシュボード UI表示**:
  - UIテンプレートノードは、現在のモデル設定を示すテキストを表示します。
  - また、カメラからのbase64画像をレンダリングし、YOLOによって識別されたオブジェクトの検出ボックスを含みます。

**ターゲットを使用した自動追跡**:

  - 関数ノードは、ターゲットオブジェクト（例：幅、高さ、座標）に関する情報を取得し、このデータを追跡アルゴリズムで処理します。

  - アルゴリズム関数ノードは、視野の中心に対するターゲットボックス中心のオフセットを計算し、このオフセットをモーター角度設定ノードに送信して、ジンバルを目的の位置に移動させます。

**手動モーター制御**:

  - スライダーノードを使用してモーター角度を手動で設定し、ジンバルを特定の角度だけ移動させます。

  - また、ジョイスティック UI ノードを使用すると、ジンバルの位置を小さな増分（オフセット単位）で調整して手動制御することができます。

**ショートカットボタン**:

  - ボタン UI ノードは、特定の位置をモーター角度設定ノードに送信し、スリープやスタンバイなどの動作をトリガーします。

  - これらのボタンは、`gimbal cali`（キャリブレーション用）や `gimbal stop 1; gimbal stop 2`（緊急停止用）などの bash スクリプトを実行する exec ノードをトリガーすることもできます。

**基本的な Web Iframe サブフロー**:

  - iframe サブフローは、ネットワーク設定、システム情報、デバイス情報などの基本的なウェブページを表示します。

  - ただし、複数のノードでページをレンダリングするため、CPU リソースを消費する可能性があります。必要がない場合は削除することができます。

## クラウド管理とバックアップの適用

新しいアプリケーションを作成したり、SenseCraft クラウドサービスにアプリケーションを保存したい場合は、左下で SenseCraft アカウントにログインし、`+` アイコンをクリックして新しいアプリケーションを追加してください。その後、フローの作業を開始できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

アプリケーションの表示と管理は [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera) で行えます。

:::note

プラットフォームを通じてアプリケーションを同期するには、アカウントを登録する必要があります。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div> 


## ポートリスト

以下は reCamera Gimbal で使用されるポートの一覧です：

- **ポート 22**: リモート SSH ログインに使用され、開放されています。
- **ポート 53**: DNS ドメイン名解決に関連し、ウェブリダイレクトに必要です。デフォルトで開放されています。
- **ポート 80**: Node-RED アプリケーションの HTTP 表示用ウェブダッシュボードインターフェースとして機能します。
- **ポート 554**: RTSP ビデオストリーミングに使用されます。
- **ポート 9090**: ウェブターミナルアクセス用で、ログインにはパスワードが必要です。
- **ポート 1880**: Node-RED 操作用に割り当てられています。

## OTA OS アップグレード
[OTA アップグレード手順](https://wiki.seeedstudio.com/ja/recamera_getting_started/#ota-upgrade-from-013-to-latest-version) を参照してください。


## 工場出荷時設定へのリセット

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_usr_button.png" /></div> 

デバイスのパスコードを忘れるなどしてデバイスをリセットしたい場合は、**User** ボタンを長押ししながらデバイスを電源に接続してください。デバイスの `赤いライト` が点滅せずに **常時点灯** になったら、User ボタンを離してください。


## リソース

- <span id="jump1"><a href="https://files.seeedstudio.com/gimbal/GIMBAL_Manual0311.pdf">reCamera Gimbal ユーザーマニュアル</a></span>

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>