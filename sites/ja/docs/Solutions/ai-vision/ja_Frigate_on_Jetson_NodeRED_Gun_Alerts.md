---
description: Frigate-on-JetsonとNode-REDに基づくエッジAI銃器検出システム、JetsonとreComputer R2000（Hailo）プラットフォームをサポート。
title: リアルタイムエッジアラート用AI銃器検出ソリューション
image: https://files.seeedstudio.com/wiki/solution/crowd_tracking/scene_3.webp
slug: /ja/solutions/frigate-on-jetson-nodered-gun-alerts
sidebar_position: 1
last_update:
  date: 10/22/2025
  author: Spencer Y
---

:::note[注意]
このプロジェクトは**教育およびデモンストレーション目的のみ**で提供されています。  
実際の環境に展開する場合は、**地域の規制に準拠**し、実行前に**必要な認可を取得**してください。
:::

## 概要

Frigate + Node-RED銃器検出ソリューションは、ライブカメラストリームで銃器を検出し、アラート、レビュー、統合を調整するエッジAIビデオ分析スタックです。**AI Boxes**、NVIDIA **Jetson**シリーズ、**reComputer R2000**でのプライバシー保護、低遅延展開向けに構築され、最適化された検出エンジン（Frigate）とビジュアル自動化レイヤー（Node‑RED）、オプションのLLM支援レビューを組み合わせています。

<div align="center">
  <img class='img-responsive' width={680} src="https://www.seeed.cc/wp-content/uploads/2025/09/archi_2-1.png" alt="solution diagram"/>
</div>

完全なAI NVR[^nvr]体験を提供します：

- ライブRTSP/HTTPストリームからリアルタイムで銃器を検出。  
- イベントアラート、ログ記録、通知を自動化。  
- プライバシー、低遅延、信頼性を確保するためにローカルで動作。  

[^nvr]: AI NVRは高度な機械学習モデルを活用して**リアルタイムの洞察と自動化機能**を提供しますが、従来のNVRは主にビデオ映像の録画と保存に焦点を当てています。
`

デバイスがSeeedのバンドルからのものでない場合や、独自のセットアップに合わせてカスタマイズしたい場合は、このガイドに従ってソリューションを展開してください。

<table class="table-center">
  <tr>
      <th>キャンパス安全管理</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://www.seeed.cc/wp-content/uploads/2025/08/scene_3.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeed.cc/solutions/campus-safety-management" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> ソリューションバンドル 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## 機能

従来のNVRは人間による監視に依存しており、遅く、一貫性がなく、スケールが困難です。このソリューションは、即座の価値を提供する測定可能な成果に焦点を当てることで、これらの課題に対処します。
<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>より高速な応答時間</h3>
                <p>自動アラートとリアルタイムダッシュボードで即座の状況認識を実現し、手動監視の遅延を回避します。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>より少ない誤検出</h3>
                <p>オプションのLLM支援検証を活用してアラートをインテリジェントにレビューし、誤報を大幅に削減してオペレーターの注意を集中させます。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>データ主権とプライバシー</h3>
                <p>すべての推論とデータ処理はクラウド依存なしにオンプレミスで実行され、完全なデータプライバシーと制御を確保します。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>スケーラブルなマルチストリームサポート</h3>
                <p>JetsonとHailoプラットフォームの強力なハードウェアデコーディングを活用して、パフォーマンス低下なしに複数のカメラストリームを同時に監視します。</p>
            </div>
        </li>
    </ul>
</div>

## システムアーキテクチャ

ソリューションは連携して動作するいくつかの主要モジュールで構成されています：

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/Architecture%20Diagram.png" alt="system architecture"/>
</div>

- **Frigate**はライブビデオを処理し、MQTT経由で検出イベントを公開します。
- **Node-RED**はこれらのイベントを購読し、アラートワークフローを調整し、ダッシュボードを更新します。
- **リアルタイムダッシュボード**はビジュアル監視、イベントレビュー、システム設定を提供します。
- **Webhooks**は通知とデータエクスポートのためのサードパーティシステムとの統合を可能にします。

## 展開ガイド

### 前提条件

- **AI Boxes/エッジハードウェア：** reComputer J3011/J4012（Jetson Nano/Xavier/Orin シリーズ）。
- **ネットワークカメラ：** 同じネットワーク上でアクセス可能なRTSP/HTTPストリーム。
- Docker、Node-RED、Frigate設定の基本的な知識。

<!-- 
This is a ready-to-use AI NVR solution that unifies hardware and software.

- Pre-installed **Frigate** detection engine with a baseline gun model.  
- Built-in **Node-RED Dashboard** for alert visualization and event management.  
- Web-based access — configure RTSP streams and start monitoring immediately.   -->

このページでは、**reComputer J4012（Jetson Orin™ NX 16GB）**をサンプルプラットフォームとして使用します。ただし、他のサポートされているハードウェアでも手順は同様です。

### ステップ1：Frigateのインストール

:::note[注意]
まだインストールされていない場合は、以下のコマンドを実行して`curl`をインストールしてください：

```bash
sudo apt update && sudo apt install -y curl
```

⚠️ `sudo apt upgrade`は実行しないでください。Jetson固有の依存関係が破損する可能性があります。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/frigate-on-jetson" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>frigate-on-jetson</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

事前設定されたワンクリックインストールスクリプトを使用して、Jetsonデバイスに**Frigate**を自動的に展開します。

```shell
curl -sSL https://raw.githubusercontent.com/Seeed-Studio/frigate-on-jetson/main/install.sh | bash
```

インストールが完了したら、ブラウザを開いて`http://<your_jetson_ip>:5000`にアクセスし、Frigate Web UIにアクセスしてカメラを設定してください。

動作しない場合は、`sudo`なしでDockerを実行する権限が不足していないか確認してください。トラブルシューティング手順については[FAQセクション](#docker-permission-denied)を参照してください。その後、上記のコマンドを再実行してください。

<div style={{textAlign:'center'}}>
  <img alt="Frigate Homepage" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/homepage%20demo.png" />
</div>

NodeREDでは、FrigateのMQTTトピックを購読して検出イベントを受信し、アラートワークフローを調整します。利用可能なトピックとペイロードの詳細については、[Frigate MQTTドキュメント](https://docs.frigate.video/integrations/mqtt)を参照してください。

### ステップ2：Node-REDセットアップ

プログラミングを処理するオーケストレーションレイヤーとしてNodeREDを使用します。

#### Node-REDインストール

まだNode-REDをインストールしていない場合は、以下の手順に従ってJetsonデバイスにセットアップしてください。

以下のコマンドでコンテナ内でNode-REDを実行します：

```bash
sudo docker run -d --restart=always -p 1880:1880 -v node_red_data:/data --name mynodered nodered/node-red
```

コンテナが開始したら、ブラウザを開いて`http://<your_jetson_ip>:1880`にアクセスし、Node-REDエディターにアクセスしてください。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/security/nodered-panel.png" alt="nodered-panel"/>
</div>

#### ノードインストール

開始する前に、Node-REDエディターの"Manage palette"オプションから以下のNode-REDノードをインストールしてください：

- `node-red-dashboard` シンプルなフロントエンドダッシュボードを構築するため。

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/security/nodered-install-dashboard.png" alt="nodered-install-dashboard"/>
</div>

## アプリケーション

キャンパス、交通ハブ、工業団地、公共施設などの環境において、運営者は銃器リスクに対する即座の対応が必要です。このソリューションは以下の用途に設計されています：

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /></svg>
            </div>
            <div class="info-content">
                <h3>キャンパス・教育機関</h3>
                <p>セキュリティチームへのプロアクティブなアラートを可能にし、記録されたイベントデータとスナップショットによる迅速なインシデント確認を促進します。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h16.5M5.625 13.5a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0zm12.75 0a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>公共交通ハブ</h3>
                <p>駅全体にマルチカメラ監視を展開し、webhookを介してセキュリティオペレーションセンター（SOC）に直接アラートを統合します。</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-.625-6.25a3.75 3.75 0 00-6.25-.625l-6.402 6.401a3.75 3.75 0 000 5.304m7.496-9.191a3.75 3.75 0 015.304 0l6.401 6.402a3.75 3.75 0 010 5.304l-6.401 6.402a3.75 3.75 0 01-5.304 0l-6.401-6.402a3.75 3.75 0 010-5.304l6.401-6.402z" /></svg>
            </div>
            <div class="info-content">
                <h3>工業団地・物流</h3>
                <p>疲労や注意散漫のない自動監視により、境界、アクセスポイント、機密エリアを保護します。</p>
            </div>
        </li>
    </ul>
</div>

<br />

以下のサンプルデモでは、ソリューションの展開とカスタマイズのプロセスをガイドします。

### デモ1 — 銃器検出アラート

このデモでは、**MQTT**を介して**Frigate**からの銃器検出イベントをリッスンし、ダッシュボードとwebhook通知の両方で*リアルタイムアラート*をトリガーするNode-REDフローの構築方法を示します。

#### データパイプライン

Frigate（銃器検出）→ MQTT（発行）→ Node-RED（フィルタ/アラート）→ ダッシュボード + Webhook

<div align="center">
  <img class="img-responsive" width="680" src="https://files.seeedstudio.com/wiki/solution/security/nodered-sample-gun-shot.png" alt="Node-RED gun detection sample"/>
  <br/>
</div>

#### Node-REDフローセットアップ

提供されたフロー設定ファイル（[gist flow.json](https://gist.github.com/Love4yzp/2fccdfa6a2d8e64e2740cd566b9b991c)）を使用して、サンプルフローをNode-REDエディタに直接インポートできます。

> **注意：** フロー内のIPアドレスとwebhook URLを、お使いのFrigateインスタンスと通知エンドポイントに合わせて更新してください。

ダッシュボードエントリパスは`/frigate`として設定されています。
ダッシュボードにアクセス：`http://<your_jetson_ip>:1880/dashboard/frigate`

例：`http://192.168.101.100:1880/dashboard/frigate`

#### フロー概要

- MQTTリスナー – 指定されたトピック（例：frigate/reviews）を購読して検出イベントを受信します。
- イベントフィルター – 「gun」とラベル付けされたイベントのみを通します。
- アラートビルダー – サムネイル、タイムスタンプ、カウンターを含む詳細なアラートメッセージを構築します。
- ダッシュボード更新 – 最新の画像、イベント履歴、検出カウンターでダッシュボードを更新します。
- Webhook通知 – Telegramボット、Slack、カスタムAPIなどの外部エンドポイントにHTTP POSTリクエストを送信します。

#### 結果

<div align="center">
  <img class="img-responsive" width="680" src="https://files.seeedstudio.com/wiki/solution/crowd_tracking/frigateevents.png" alt="Frigate event visualization"/>
</div>

このフローを設定すると、**Node-RED**は**Frigateの銃器検出イベント**に自動的に応答し、ダッシュボードを更新して即座にwebhook通知を送信します。

検出パラメータの設定手順については、[Frigate設定セクション](#frigate-config)に進んでください。

## デフォルトFrigate設定 {#frigate-config}

`http://<your_jetson_ip>:5000/config`でFrigate設定ページに素早くナビゲートして、現在のセットアップを確認できます。

Frigateは`config.yml`というYAMLファイルを使用して実行方法を定義します。
このファイルは、カメラストリームの場所、使用するAIモデル、MQTT経由で検出結果を送信する方法をFrigateに指示します。
これを調整することで、オブジェクトの検出、記録、表示方法を制御できます。

### ストレージ場所

デフォルトでは、Frigateはビデオ録画とスナップショットをJetsonデバイスの`/media/frigate`に保存します。

例：

```bash
seeed@desktop:/$ docker exec -it frigate /bin/sh
root@274103ae951b:/opt/frigate# cd /media/frigate/
root@274103ae951b:/media/frigate# ls
clips  exports  handgun.mp4  machinegun.mov  recordings
```

ビデオを長期間保持する予定がある場合は、Jetsonの内部ストレージが満杯になるのを防ぐため、このディレクトリを**外部SSDまたはネットワークドライブ**にマウントしてください。

### カメラ設定

Frigateでは、各カメラを`cameras:`セクションで定義する必要があります。
各カメラブロックは、ビデオストリームの取得元と、検出モデルによる分析前のデコード方法を記述します。

```YAML
cameras:
  handgun:
    enabled: true
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: /media/frigate/handgun.mp4
          input_args: -stream_loop -1 -re
          roles:
            - detect
  machinegun:
    enabled: true
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: /media/frigate/machinegun.mov
          input_args: -stream_loop -1 -re
          roles:
            - detect
```

**説明：**

- `enabled`：このカメラを有効または無効にします。
- `ffmpeg`：FrigateがFFmpegを使用してビデオストリームを読み取りデコードする方法を定義します。
  - FFmpegは、ファイル、RTSPカメラ、その他のソースからビデオを変換・ストリーミングするメディアフレームワークです。
- `hwaccel_args`：ハードウェアアクセラレーション（例：JetsonでのH.264デコード）を有効にします。
- `inputs`：1つ以上のビデオ入力をリストします。
  - `path`：実際のビデオソース。
    - この例では、`/media/frigate/handgun.mp4`のようなローカルデモファイルです。
    - 実際の展開では、`path: rtsp://user:password@192.168.1.21:554/stream1`のようなライブカメラストリームに置き換えることができます。
- `input_args`：追加のFFmpegパラメータ。
  - `-stream_loop -1`はデモビデオを無限にループします。
  - `-re`は再生がリアルタイム速度に合うことを保証します。
- `roles`：この入力の使用方法を定義します。
  - `detect`はストリームがオブジェクト検出に使用されることを意味します。
  - その他の可能な役割には、`record`や`rtmp`（ストリーミング用）があります。

:::tip
各カメラは複数の入力を持つことができます — 例えば、検出用に1つ、高品質録画用に別の1つ。
Frigateは、定義されたすべてのソースに対してFFmpegを通じてデコードとフレーム抽出を自動的に管理します。
:::

### AIモデルと検出設定

カメラを定義した後、次のステップはFrigateにどのAIモデルを使用し、各ビデオフレームをどのように処理するかを指示することです。
このセクションでは、検出器タイプ、モデルファイルパス、フレームサイズ、オブジェクト追跡、閾値などの検出動作を定義します。

```YAML
detectors:
  tensorrt:
    type: tensorrt
    device: 0

model:
  path: /config/model_cache/tensorrt/yolov4-tiny-288_gun_v3.trt
  width: 288
  height: 288
  labelmap_path: /config/guns.txt
  input_tensor: nchw
  input_pixel_format: rgb
```

**説明：**

- `detectors`：Frigateが推論に使用するAIバックエンドを定義します。
  - `type`：tensorrtはFrigateにNVIDIA TensorRTアクセラレーション（Jetson用に最適化）を使用するよう指示します。
  - `device`：GPU インデックスを指定します。ほとんどのJetsonデバイスでは0を使用します。
- `model`：AIモデルファイルを指し、その入力形式を記述します。
  - `path`：.trt（TensorRTエンジン）ファイルへのパス。
  - `width` / height：モデルの入力解像度（モデルが期待するものと一致する必要があります）。
  - `labelmap_path`：クラスインデックスをラベルにマップするファイル、例：guns.txt → 「gun」を含む。
  - `input_tensor`：テンソルレイアウトを定義；nchw = バッチ、チャンネル、高さ、幅。
  - `input_pixel_format`：ピクセル形式を指定、通常はrgb。

:::tip
TensorRTモデルは、高速GPU推論用に最適化された訓練済みネットワークのコンパイル版です。
新しいモデルを訓練する場合は、このファイルを独自のモデルに置き換えることができます — 幅、高さ、ラベルが一致することを確認してください。
:::

### オブジェクト追跡設定

Frigateは特定のタイプのオブジェクトを検出・追跡できます。
このプロジェクトでは、銃器のみを追跡し、システムを効率的で焦点を絞ったものに保ちます。

```YAML
objects:
  track:
    - gun
  filters:
    gun:
      threshold: 0.3
```

**説明：**

- `track`: 検出・追跡するオブジェクトのリスト。
  - ここでは「gun」のみですが、モデルがサポートしている場合は、より多くのラベル（例：person、car など）を追加できます。
- `filters`: 各オブジェクトタイプの検出信頼度を微調整します。
- `threshold`: 最小信頼度値（0.0–1.0）。
  - 低い値（0.3など）はより敏感ですが、誤検出を含む可能性があります。
  - 高い値（0.5など）は検出をより厳格にします。

:::tip
誤検出が多すぎる場合は、閾値を0.5以上に上げてみてください。
見逃されがちな小さなオブジェクトについては、わずかに下げることもできますが、精度とノイズのバランスを取ってください。
:::

### 録画設定

Frigateがオブジェクトを検出すると、さらなる分析やアラート表示のために動画を録画し、スナップショットを保存できます。
これらの設定は、録画の保存期間と、キャプチャされた画像に表示される情報を制御します。

```YAML
record:
  enabled: true
  retain:
    days: 3
    mode: all
```

**説明：**

- `enabled`: 動画録画を有効にします。
- `retain`: 録画ファイルの保存期間と、どのタイプの映像を保存するかを制御します。
  - `days`: 自動削除前に録画を保持する日数。
  - `mode`:
    - `all` – 連続録画（テスト用に便利）。
    - `motion` – モーションが検出された時のみ録画。
    - `events` – 追跡されたオブジェクト（例：銃）が現れた時のみ録画。

:::tip
実際のデプロイメントでは、`mode: events`または`mode: motion`を使用して、有用な録画を保持しながらストレージ容量を節約してください。
:::

### スナップショット設定

```YAML
snapshots:
  enabled: true
  clean_copy: true
  timestamp: true
  bounding_box: true
  crop: false
  retain:
    default: 14
  quality: 95
```

**説明：**

- `enabled`: 検出イベント発生時のスナップショット保存を有効にします。
- `clean_copy`: 検出ボックスなしの追加バージョンを保存します。
- `timestamp`: スナップショットに時刻と日付のオーバーレイを追加します。
- `bounding_box`: 検出されたオブジェクトの周りにボックスを描画します。
- `crop`: trueの場合、検出エリアのクロップ部分のみを保存します。
- `retain.default`: スナップショットを保持する日数。
- `quality`: 画像品質を設定（1–100）。高い値 = より良い詳細だが、ファイルサイズが大きくなります。

:::tip
スナップショットは、動画クリップよりもはるかに小さく、webhookやMQTT経由で送信しやすいため、アラートやダッシュボードに最適です。
:::

### Birdseye ビュー

Frigateは、複数のカメラフィードを一緒に表示して素早く概要を確認できるBirdseyeビューもサポートしています。

```YAML
birdseye:
  enabled: true
  mode: objects
```

**説明：**

- `enabled`: Birdseyeコンポジットビューを有効にします。
- `mode`:
  - `objects` – 現在オブジェクトが検出されているカメラのみを表示。
  - `continuous` – 常にすべてのカメラフィードを表示。

### MQTT設定

Frigateは、MQTT経由で検出イベントを通信します。これにより、Node-RED、Home Assistant、またはカスタムダッシュボードなどの他のサービスが、オブジェクトが検出されるたびにリアルタイム更新を受信できます。
また、システムパフォーマンスの監視と検出問題のデバッグに役立つログオプションも提供します。

```YAML
mqtt:
  enabled: true
  host: 172.17.0.1
  port: 1883
```

**説明：**

- `enabled`: MQTT通信を有効にします。
- `host`: MQTTブローカーのIPアドレス。
  - Jetson上でDockerを使用する場合、`172.17.0.1`は通常ホストマシンを指します。
  - 別のデバイスで実行している場合は、実際のMQTTサーバーIPに置き換えてください。
- `port`: デフォルトのMQTTポート、通常は1883。

より高度なMQTT設定については、[Frigate MQTTドキュメント](https://docs.frigate.video/integrations/mqtt)を参照してください。

MQTTが有効になると、Frigateはリアルタイムイベントネットワークの一部となり、銃検出アラートを直接Node-REDやHome Assistantに送信し、そこでダッシュボード、通知、またはカスタムワークフローをトリガーできます。

## パフォーマンス & サイジング

| ハードウェアプラットフォーム | モデル | FPS（合計） | 安定ストリーム（≥15 FPS） | 備考 |
| ----------------- | ----- | ----------- | ------------------------- | ------- |
| reComputer R2000 (Raspberry Pi + Hailo-8) | YOLOv11-s | 30 | 2 | コンパクトAI NVR；効率的な低電力エッジデバイス |
| reComputer J3011 (Jetson Orin Nano 8 GB) | YOLOv4-tiny-288 | 90 | 6 | エントリーレベルJetson；ウォームアップ後にFPSが安定 |
| reComputer J4012 (Jetson Orin NX 16 GB) | YOLOv4-tiny-288 | 120 | 8 | NVDEC同時実行制限に到達；計算余力は残存 |

## リソース & 次のステップ

- **ソリューションバンドル:** [Frigate + Node-RED Gun Detection on Jetson](https://www.seeed.cc/solutions/campus-safety-management)
- **Frigateドキュメント:** [https://docs.frigate.video/](https://docs.frigate.video/)
- **GitHubリポジトリ:** [Seeed-Studio / frigate-on-jetson](https://github.com/Seeed-Studio/frigate-on-jetson)
- **Node-REDダッシュボードアドオン:** [@flowfuse/node-red-dashboard](https://flows.nodered.org/node/@flowfuse/node-red-dashboard)

<!-- Summary

The **Frigate + Node-RED Gun Detection Solution** delivers real-time firearm detection and intelligent alerting on edge AI hardware — from Raspberry Pi + Hailo systems to Jetson Orin series. It offers a modular, open, and production-ready framework for security integrators, enabling private on-premise analytics, instant visualization, and LLM-driven verification while keeping video data under full control.

| Module | Purpose / Value | Key Capabilities |
| ------ | ---------------- | ---------------- |
| Real-time Video Monitoring | Observe scene context before and after detection | Multi-RTSP/HTTP stream input; split-screen or carousel views; zoom and PTZ control |
| Gun Detection Visualization | Confirm detection accuracy visually | Real-time bounding boxes with confidence overlay; frame pause, magnify, and annotate |
| Event / Alert Queue | Deliver instant alerting and logging | Adjustable confidence and ROI thresholds; popup, sound, light, webhook, email, or SMS actions |
| Event Replay & Retrieval | Support evidence review and playback | Filter by time, camera, or alert type; jump to pre-event and post-event footage |
| Detection Log & Export | Enable third-party analytics and reporting | Timestamp, camera, confidence, snapshot metadata; export in CSV or JSON formats |
| LLM-based Analysis | Reduce false positives and generate summaries | False-positive review for gun/not-gun decisions; semantic summarization and querying (for example, rifle alerts last week); contextual response suggestions for operators | -->

## FAQ

### 1. JetsonデバイスにDockerをインストールできません。どうすればよいですか？

デフォルトのDockerインストールスクリプトで問題が発生した場合は、以下の代替スクリプトを使用できます：

```bash
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
```

詳細については、https://linuxmirrors.cn をご覧ください。

### 2. Jetpackバージョンを確認するには？

Jetsonデバイスで以下のコマンドを実行してください：

```bash
dpkg -l | grep nvidia-jetpack
```

出力にインストールされているJetpackバージョンが表示されます。

### 3. Jetpackバージョンを更新するには？

[特定の製品wiki](/ja/NVIDIA_Jetson)の手順に従ってください。

### 4. Docker実行時の「Permission Denied」 {#docker-permission-denied}

Dockerデーモンにアクセスする権限がありません。
実行してください：

```shell
sudo usermod -aG docker $USER
newgrp docker
```

> ログアウトして再度ログインすることで、新しいグループ権限も適用されます。

その後、確認してください：

```shell
docker ps
```
