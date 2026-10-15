---
description: reCamera Gimbal 入門ガイド
title: reCamera Gimbal
keywords:
  - AI
  - reCamera
  - Gimbal
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /recamera_gimbal_getting_started
sku: 108990119,108990120,E20245041001
sidebar_position: 1
last_update:
  date: 04/09/2025
  author: Dawn Yao
createdAt: '2025-02-27'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/ja/recamera_gimbal_getting_started/
---

# reCamera Gimbal 入門ガイド

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" /></div>

## はじめに

reCamera Gimbal へようこそ！reCamera gimbal 2002 シリーズは、世界初のオープンソースカメラ制御システムであり、小型 AI カメラ reCamera 2002w 8GB/64GB と、2 つのブラシレスモーターを備えた互換性のある 2 軸ジンバルベースで構成されています。RISC-V SoC を搭載し、5MP @ 30 FPS のビデオエンコードとともに 1 TOPS の AI 性能を提供します。Lego のようなセルフアセンブリパッケージを採用し、Sensecraft AI プラットフォームと Node-RED プラットフォームを統合することで、スムーズなグラフィカルプログラミングとパイプライン構築を実現し、Yolo v5/v8/11 などの AI モデルの迅速な自己学習、モデル変換、デプロイを可能にします。

このガイドでは、デバイスをすばやくセットアップし、強力な AI ビジョン機能を使い始めるまでの手順を説明します。初心者の方でも経験豊富なユーザーの方でも、このステップバイステップのウォークスルーに従うことで、インストール、設定、初回利用までをスムーズに進められます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱</font></span></strong>
    </a>
</div>

## 事前準備

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_prerequisites.png" /></div>

- reCamera Gimbal
- ユーザーマニュアル（同梱）
- 5521 DC プラグ付き 12V DC 電源アダプタ（[購入リンク](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)）
- USB Type C（[購入リンク](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)）
- Wi-Fi 接続
- 電動ドライバー（より良い組み立て体験のためのオプション）

## 開封

まず reCamera Gimbal を開封します。箱の中には次のものが入っています：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

すべての部品が揃っていることを確認してください。

### ハードウェアの組み立て

箱に記載されている組み立て手順、または[ユーザーマニュアル](#jump1)に従って reCamera Gimbal を組み立ててください。

<div style={{textAlign:'center'}}><iframe width={560} height={315} src="https://www.youtube.com/embed/VAkhDHct0p4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

:::note
すべてのネジがしっかり締まっていることを確認してください。緩んでいるとモーターの動作に影響します。
:::

### デバイスのセットアップとログイン

**ステップ 1：** Gimbal を組み立てたら、reCamera Gimbal から PC に USB ケーブルを接続します。ブラウザで `192.168.42.1` にアクセスし、デフォルトパスワードを変更します。WiFi AP セットアップモードを使用している場合は、代わりに `192.168.16.1` にアクセスしてください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
パスワードは必ず控えておいてください。忘れてしまうと、デバイスをリセットする際にすべてのログが消去されます。パスワードを忘れた場合は、[ファクトリーリセット](https://wiki.seeedstudio.com/ja/recamera_getting_started/#ファクトリーリセット)を実行してください。
:::

:::note
デフォルトのユーザー名とパスワードはどちらも `recamera` です。ファクトリーリセットを実行した場合、または新しい（未設定の）デバイスを使用している場合は、このユーザー名とパスワードを使用してください。
:::

**ステップ 2：** Gimbal プレビューダッシュボードが表示されます。ダッシュボード上のコントロールでモーター動作を試す前に、`Network` に移動して Wi-Fi を設定してください。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_network.png" /></div>

**ステップ 3：** Wi-Fi に接続します。Wi-Fi への接続に成功したら、`lock icon` をクリックしてデバイスの IP アドレスを確認します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/view_wifi_IP.png" /></div>

**ステップ 4：** 新しいブラウザタブを開き、この IP アドレスを使用してデバイスにアクセスします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_5.png" /></div>

**ステップ 6：** まずベースに電源を接続し、その後 USB Type C ケーブルを取り外すと、モーターの動きが最適になります。

:::note

12V の電源アダプタを接続する必要があります。

:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/switch_power.png" /></div>

**ステップ 7：** `ip address` を入力したブラウザに戻りダッシュボードを開き、右側の `Calibrate button` をクリックして Gimbal のセルフキャリブレーションを実行します。

:::note

キャリブレーション中は、デバイスの動作を妨げないようにしてください。干渉するとキャリブレーションが失敗する可能性があります。キャリブレーションは、ジンバルの電源投入時に毎回自動的に実行されます。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_calibrate.png" /></div>

### キャリブレーション動作

ヨー軸の動作範囲は 0〜360° ですが、実際の機械的な範囲は構造上の制約により約 345° に制限されています。ただし、視野カバー範囲は 360° を維持します。ピッチ軸は 0〜180° の動作範囲をサポートします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/movement_range.png" /></div>

電源投入後、ジンバルは自動キャリブレーションシーケンスを開始します：

- **ヨー軸**：ジンバルはまず機械的なリミット（電源ケーブルの上側に位置）に向かって時計回りに回転し、その後反対側のリミットに向かって反時計回りに回転します。両端に到達した後、中央位置に戻ります。

- **ピッチ軸**：ジンバルは 0° 位置まで上向きにチルトし、その後 180° のリミットに達するまで下向きに動き、最後に中央に戻ります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/calibrate.gif" /></div>

このシーケンスでジンバルのセルフキャリブレーションが完了します。

ターミナルで次のコマンドを入力してキャリブレーションを実行することもできます。

```bash
gimbal cali
```

### キャリブレーションのトラブルシューティング

ジンバルがキャリブレーションシーケンスを正しく実行しない場合、いくつかの原因が考えられます：

- **機械的リミットの確認**：ジンバルを手動で動かし、動作範囲が妨げられていないか、誤って制限されていないかを確認します。

- **3D プリント部品による抵抗の確認**：モーターが動作するときに抵抗がないかを確認します。抵抗が大きすぎる場合は、モーターの PID 設定を調整してモーターの力を強める必要があるかもしれません。[PID の調整方法はこちら](https://wiki.seeedstudio.com/ja/recamera_pid_adjustment)を参照してください。あるいは、部品をヤスリがけしたり、ネジを少し緩めて摩擦を減らし、動きを改善してください。

## 基本的な Web アクセス

Web URL：

- **プレビューページ**：`ip_address/#/dashboard`

- **ホームページ**：`ip_address/#/init`
- **ワークスペース**：`ip_address/#/workspace`
- **ネットワーク設定**：`ip_address/#/network`
- **セキュリティ**：`ip_address/#/security`
- **ターミナル**：`ip_address/#/terminal`
- **システム**：`ip_address/#/system`
- **電源**：`ip_address/#/power`
- **オリジナル Node-RED**：`ip_address:1880`

### Gimbal ダッシュボードですぐに始める

#### モーター制御

セットアップとキャリブレーションが完了したら、ダッシュボード上の各種オプションを使ってジンバルを制御できます。`ip_address/#/dashboard` または `ip_address` にアクセスして、Node-RED ノードで構成された Gimbal のプレビューダッシュボードを開きます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

- **ジョイスティック**：カメラの視野方向を制御します。例えば、ジョイスティックを右にドラッグすると、画像もそれに合わせて右に動きます。
- **スライダー**：
  - ヨーおよびピッチスライダー：ジンバルを指定した絶対角度に移動させます。

    ヨー範囲：0〜360°

    ピッチ範囲：0〜180°

:::note
構造上の制約により、ヨー範囲は 0〜345°、ピッチ範囲は 0〜180° に制限されています。この範囲外の値を入力した場合は、最も近い境界値に自動的に調整されます。例えば、ヨーに 360° を入力すると、システムは自動的に 345° の動作として実行します。
:::

- スピードスライダー：両方のモーターの速度を同時に調整します。

    スピード範囲：0〜720°/s（毎秒あたりの度数）
- **自動トラッキング**：ドロップダウンメニューからターゲットオブジェクト（person、car、cat、dog、bottle など）を選択し、`Start Tracking` をクリックして自動物体追跡を開始します。`Stop Tracking` をクリックすると追跡を終了します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_tarck.png" /></div>

- **Sleep ボタン**：ジンバルを（ヨー：180°、ピッチ：180°）の絶対位置に移動させます。

:::note

Sleep ボタンは低消費電力のスリープモードを有効にするものではありません。カメラの向きを下向きに変更するだけです。

:::

- **Standby ボタン**：ジンバルを（ヨー：180°、ピッチ：90°）の絶対位置に移動させます。
- **Calibrate ボタン**：ジンバルのキャリブレーションプロセスを開始します。
- **Emergency Stop ボタン**：動作中の両方のモーターを即座に無効化します。

    ⚠️ 注意：これはキャリブレーションプロセスを中断しません。

#### AI モデルパラメータ

**Confidence（信頼度）**：YOLO モデルにおける Confidence は、予測されたバウンディングボックスに物体が含まれている確率と、その予測の正確さを表します。0 から 100 の値を取ります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**Intersection over Union（IoU）**：IoU は、予測されたバウンディングボックスと正解のバウンディングボックスの重なり具合を評価する指標です。2 つのボックスの交差領域の面積を、和集合領域の面積で割った比として計算されます。IoU の値は通常 0 から 1 の範囲ですが、本システムでは 0〜100 のスケールに標準化しています。IoU 値が 0 の場合は予測ボックスと正解ボックスがまったく重ならないことを意味し、100 の場合は 2 つのボックスが完全に一致し、完全に重なっていることを意味します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### Gimbal ダッシュボードフローですぐに始める

ダッシュボードが Node-RED ノードでどのように作成されているかを知りたい場合は、右下隅をクリックするか、`ip_address/#/workspace` にアクセスして Gimbal の Node-RED ワークスペースを開きます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/dashboard_to_workspace.png" /></div>

すると、デフォルトのジンバルダッシュボードフローが表示されます。各ノードをダブルクリックすると、そのノードの詳細を確認できます。ダッシュボードフローは次のようになります：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/workspace_flow.png" /></div>

**モデル設定**：

- スライダーノードを使用して、YOLO AI モデルの IoU（Intersection over Union）と信頼度しきい値を調整できます。

**ダッシュボード UI 表示**：

- UI テンプレートノードは、現在のモデル設定を示すテキストを表示します。
- また、カメラからの base64 画像をレンダリングし、YOLO によって検出された物体の検出ボックスを含めて表示します。

**ターゲットの自動追跡**：

- Function ノードは、ターゲットオブジェクト（幅、高さ、座標など）に関する情報を取得し、トラッキングアルゴリズムを使用してこのデータを処理します。

- アルゴリズムの Function ノードは、ターゲットボックスの中心が視野中心からどれだけずれているか（オフセット）を計算し、このオフセットを set motor angle ノードに送信して、ジンバルを目的の位置に移動させます。

**手動モーター制御**：

- スライダーノードを使用してモーター角度を手動で設定し、ジンバルを指定した角度だけ動かします。

- あるいは、ジョイスティック UI ノードを使用して、ジンバルの位置を小さな増分（オフセットごと）で調整しながら手動制御することもできます。

**ショートカットボタン**：

- Button UI ノードは、特定の位置を set motor angle ノードに送信し、スリープやスタンバイなどの動作をトリガーします。

- これらのボタンは、キャリブレーション用の `gimbal cali` や、緊急停止用の `gimbal stop 1; gimbal stop 2` などの bash スクリプトを実行する exec ノードをトリガーすることもできます。

**基本的な Web Iframe サブフロー**：

- iframe サブフローは、ネットワーク設定、システム情報、デバイス情報などの基本的な Web ページを表示します。

- これらは複数のノードでページをレンダリングするため、CPU リソースを消費する場合があることに注意してください。不要な場合は削除できます。

## クラウド管理とバックアップの適用

新しいアプリケーションを作成したり、アプリケーションを SenseCraft クラウドサービスに保存したい場合は、左下で sensecraft アカウントにログインし、その後 `+` アイコンをクリックして新しいアプリケーションを追加します。これでフローの作成を開始できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

アプリは [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera) から閲覧および管理できます。

:::note

プラットフォームを通じてログインしてアプリケーションを同期するには、事前にアカウント登録を行う必要があります。

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## ポート一覧

以下は、reCamera Gimbal で使用されるポートの一覧です：

- **ポート 22**：リモート SSH ログインに使用されており、開放されています。
- **ポート 53**：DNS ドメイン名解決に関連しており、Web リダイレクトに不可欠です。デフォルトで開放されています。
- **ポート 80**：Node-RED アプリケーションを HTTP で表示する Web ダッシュボードインターフェースとして機能します。
- **ポート 554**：RTSP ビデオストリーミングに使用されます。
- **ポート 9090**：Web ターミナルアクセス用で、ログインにはパスワードが必要です。
- **ポート 1880**：Node-RED の動作専用です。

## OTA OS アップグレード

[OTA Upgrade Instruction](https://wiki.seeedstudio.com/ja/recamera_getting_started/#ota-upgrade-from-013-to-latest-version) を参照してください。

## 工場出荷状態へのリセット

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_usr_button.png" /></div>

デバイスのパスコードを忘れた場合などにデバイスをリセットしたいときは、**User** ボタンを長押ししながらデバイスに電源を接続します。デバイスの `red light` が点滅ではなく**点灯し続ける**状態になったら、User ボタンを離します。

## リソース

- <span id="jump1"><a href="https://files.seeedstudio.com/gimbal/GIMBAL_Manual0311.pdf">reCamera Gimbal ユーザーマニュアル</a></span>

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
