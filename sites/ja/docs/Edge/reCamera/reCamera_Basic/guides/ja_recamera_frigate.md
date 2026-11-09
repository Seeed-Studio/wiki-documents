---
description: reCamera 2002 シリーズを Frigate に接続する
title: Frigate に接続する
keywords:
  - エッジ AI
  - reCamera
  - Frigate
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_firgate
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/18/2026
  author: yylin
createdAt: 2026-10-18
updatedAt: 2026-10-18
url: https://wiki.seeedstudio.com/ja/recamera_firgate/
---

# reCamera を Frigate に統合する

Frigate は、オープンソースの NVR およびビデオ解析プラットフォームで、標準的な RTSP ビデオストリームを取得して物体検出、録画、アラートに利用できます。reCamera 2002 シリーズは安定した RTSP ストリームを配信できるため、Frigate との統合は 2 ステップだけで完了します。reCamera に RTSP ストリームを配信させ、そのストリームを Frigate でカメラとして追加します。

:::tip
このガイドは **reCamera 2002 シリーズ** のみに適用されます。reCamera Pro は異なる接続方法を使用します。Pro の接続方法については Pro 用接続ドキュメントを参照してください。
:::

全体の統合手順は次の 2 ステップで構成されます：

1. reCamera で RTSP ストリーミングを有効にする（3 つの方法のうちいずれか 1 つを選択）;
2. その RTSP ストリームを Frigate の Web UI でカメラとして追加する。

## 前提条件

- reCamera 2002 シリーズのデバイス 1 台。電源が入り、Ethernet / Wi-Fi で LAN に接続されており、その IP アドレスが分かっていること（このガイドでは例として `192.168.4.82` を使用します）。
- 同じ LAN 上にあり Frigate がインストールされているホスト 1 台（Docker デプロイでも可）で、その Web UI にアクセスできること。
- ストリームの確認に使用する `ffprobe` / `ffplay` または VLC がインストールされたコンピュータ（任意）。

## reCamera のビデオストリーム出力を設定する

reCamera 2002 シリーズは、RTSP ストリームを配信するために次の 3 つの方法をサポートしています。**いずれか 1 つ** を選択してください。得られる RTSP URL は、以下の Frigate 設定でまったく同じように使用します。自分のアドレスに置き換えるだけです。

| 方法 | ストリーム URL（デフォルトパラメータ） | 特徴 |
| --- | --- | --- |
| 方法 1: Node-RED | `rtsp://admin:admin@<device-ip>:554/live` | グラフィカルな設定、コンパイル不要、ファームウェアに同梱 |
| 方法 2: C++ パブリッシャー | `rtsp://<device-ip>:8554/live0` | 1080p@30fps、認証なし、ワンコマンドでインストール |
| 方法 3: ONVIF アプリを書き込む | `rtsp://<username>:<password>@<device-ip>:8554/onvif` | NVR / VMS から ONVIF 経由で検出可能 |

:::note
3 つの方法はいずれもカメラパイプラインを排他的に占有するため、同時に動作できるのは 1 つだけです。別の方法に切り替える前に、現在動作中の方法を停止してください。
:::

### 方法 1: Node-RED で RTSP ストリームを有効にする

reCamera のファームウェアには Node-RED と SSCMA ノード（`node-red-contrib-sscma`）が同梱されています。**stream ノード** はカメラ映像を RTSP として配信します。Node-RED の開発チュートリアル全体（ノードリファレンス、フローのインポート、デプロイなど）については次を参照してください：

[Node-RED 開発チュートリアル](https://wiki.seeedstudio.com/ja/recamera_develop_with_node-red/)

クイックステップ：

1. ブラウザで Node-RED エディタを開きます：`http://<device-ip>:1880`。
2. 左側のパレットから **camera** ノードと **stream** ノードをドラッグし（どちらも `Vision AI` カテゴリ内）、camera の出力を stream の入力に配線します。
3. 各ノードをダブルクリックし、`Client` フィールドで追加ボタンをクリックして **sscma** 設定ノードを作成します（デフォルトの `host=localhost`、`mqttport=1883`、`apiport=80` のままで問題ありません）。保存すると、ノード上の赤い三角マークが消えます。
4. stream ノードでプロトコルが `RTSP` になっていることを確認し、必要に応じてポート、セッション名、認証情報を調整します（デフォルトはポート `554`、セッション `live`、ユーザー名 `admin`、パスワード `admin`）。
5. 右上の **Deploy** をクリックします。

以下の最小フロー JSON を Node-RED の `Import` ダイアログに貼り付けることで、1 ステップで配線を作成することもできます：

```json
[
    {"id":"tab-recamera-rtsp","type":"tab","label":"reCamera RTSP","disabled":false,"info":""},
    {"id":"cfg-sscma","type":"sscma","host":"localhost","mqttport":"1883","apiport":"80","clientid":"recamera","username":"","password":""},
    {"id":"node-camera","type":"camera","z":"tab-recamera-rtsp","name":"camera","client":"cfg-sscma","audio":false,"volume":80,"option":0,"fps":15,"mirror":false,"flip":false,"x":220,"y":200,"wires":[["node-stream"]]},
    {"id":"node-stream","type":"stream","z":"tab-recamera-rtsp","name":"stream","protocol":0,"port":554,"session":"live","username":"admin","password":"admin","onvif":false,"client":"cfg-sscma","x":460,"y":200,"wires":[]}
]
```

デプロイ後、コンピュータからストリームを確認します（出力は 1080p です。Node-RED ストリーミングの推奨上限は 1080p@15fps です）：

```bash
ffplay rtsp://admin:admin@192.168.4.82:554/live
```

Frigate で使用する URL は次のとおりです：`rtsp://admin:admin@<device-ip>:554/live`。

### 方法 2: C++ RTSP パブリッシャーをデプロイする

コミュニティによって、reCamera 2002（SG2002 / CV181X, riscv64）向けに、標準の `video_demo` の 10 fps 制限を解消し、**1920x1080 H.264 30fps** の RTSP ストリームを出力する既製のパブリッシャーが提供されています。コンパイルは不要で、1 つのコマンドでインストールできます。プロジェクトリポジトリ：

[C++ RTSP パブリッシャー リポジトリ](https://github.com/yyling0101-a11y/recamera-rtsp30.git)

reCamera からは GitHub に直接アクセスできないため、GitHub にアクセスでき、かつネットワーク経由でデバイスに到達できるコンピュータからインストールスクリプトを実行します。スクリプトはデバイスの IP、SSH ユーザー名とパスワードの入力を求め、その後バイナリをデバイスにアップロードし、カメラを占有しているサービス（Node-RED / sscma）を停止し、起動時の自動起動を設定してストリームを開始します：

```bash
# Linux
curl -fLO https://raw.githubusercontent.com/yyling0101-a11y/recamera-rtsp30/main/scripts/install-linux.sh
chmod +x install-linux.sh
./install-linux.sh
```

```bash
# Windows PowerShell
Invoke-WebRequest https://raw.githubusercontent.com/yyling0101-a11y/recamera-rtsp30/main/scripts/install-windows.ps1 -OutFile install-windows.ps1
powershell -ExecutionPolicy Bypass -File .\install-windows.ps1
```

インストールが完了すると、ストリームは `rtsp://<device-ip>:8554/live0`（認証なし）で利用可能になります。コンピュータから確認します：

```bash
ffplay rtsp://192.168.4.82:8554/live0
```

デバイス上では、次のコマンドでサービスを管理し、その状態を確認できます：

```bash
/etc/init.d/S99rtsp30 start|stop|restart   # service control (stop uses SIGTERM; never kill -9)
sh /root/rtsp30-status.sh                  # process / pipeline / port / measured fps
tail -f /tmp/rtsp30.log                    # runtime log
```

:::caution
このパブリッシャーは Node-RED および ONVIF の方法と排他的です。インストールすると Node-RED と sscma サービスが無効化され、ポート 8554 とカメラパイプラインを排他的に占有します。アンインストールするには `sh /root/uninstall-rtsp30.sh` を実行してください。再起動後に標準の動作に戻ります。
:::

### 方法 3: デバイスに ONVIF アプリを書き込む

Seeed の SenseCraft Solution ソフトウェアを使用すると、reCamera に ONVIF アプリを書き込むことができます。これにより、デバイスは RTSP ストリームを提供すると同時に、ONVIF 対応の NVR / VMS プラットフォームから自動検出できるようになります。書き込みおよび設定手順については次を参照してください：

[ONVIF の書き込みと設定ガイド](https://wiki.seeedstudio.com/ja/recamera_onvif/)

書き込み後、ストリーム URL は `rtsp://<username>:<password>@<device-ip>:8554/onvif` となり、ユーザー名とパスワードは書き込み時に設定した認証情報になります。

### ストリームを確認する

どの方法を選択した場合でも、Frigate を設定する前にコンピュータからストリームが動作していることを確認してください。異なるセットアップ方法は異なるビデオストリーム URL に対応します。

```bash
# Inspect codec / resolution / frame rate
ffprobe -rtsp_transport tcp rtsp://192.168.4.82:8554/live0

# Play it directly
ffplay  -rtsp_transport tcp rtsp://192.168.4.82:8554/live0
```

`h264`、`1920x1080` のビデオストリームが表示されるはずです（方法 1 は 15fps、方法 2 と 3 は 30fps）。

## Frigate UI にカメラを追加する

以下の手順では、方法 2 のアドレス `rtsp://192.168.4.82:8554/live0` を例として使用します。方法 1 または方法 3 を使用した場合は、上の表にある対応する URL に置き換えてください（必要に応じて URL にユーザー名とパスワードを含めます）。

1. Frigate の Web UI を開いてログインします。まだカメラが設定されていない場合、ダッシュボードには「No Cameras Configured」と表示されます。**Add Camera** をクリックしてウィザードを開きます。**Settings → Global configuration → Camera management** から **Add New Camera** をクリックして開くこともできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_no_camera.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_camera_management.png" /></div>

2. "Add Camera" ウィザードでカメラ名とデバイス IP を入力します。**Stream Detection Method** には **Manual selection** を選択し、**Camera Brand** を **Other** に設定してから、reCamera の RTSP URL を **Custom Stream URL** に貼り付けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_add_camera_rtsp.png" /></div>

:::tip
方法 3（ONVIF）を使用した場合は、代わりにデフォルトの **Probe camera** を維持し、ユーザー名 / パスワードと ONVIF ポートを入力して、Frigate に ONVIF 経由でストリーム URL を自動検出させることもできます。RTSP URL を手動で入力する方法は、3 つすべての方法で利用できます。
:::

3. **Continue** をクリックします。Frigate はそのアドレスに接続してストリームをテストします。成功すると、解像度、フレームレート、コーデックとともにフレームが表示されます。内容を確認し、再度 **Continue** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_stream_test_ok.png" /></div>

4. ストリーム設定ページで、このストリームに必要なロールを有効にします。**detect**（物体検出）と **record**（録画）をオンにします。その後 **Next** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_stream_roles.png" /></div>

5. 最終ステップでは、保存前にストリームを検証し、推定帯域幅とコーデック / オーディオに関する注意を表示します。ステータスが **Connected** と表示されたら、**Save New Camera** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_stream_validate.png" /></div>

6. 保存後、カメラはカメラ管理リストに表示され、その状態は **On** に設定されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_camera_saved.png" /></div>


7. ダッシュボードに戻ると、reCamera のライブ映像が表示され、Frigate がこのストリームに対して物体検出と録画を実行するようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_live_view.png" /></div>

### オプション：検出パラメータを調整する

**Settings → Camera configuration → `camera name` → Object detection** の下で、検出解像度とフレームレートを調整できます。reCamera は 1080p を出力しますが、検出にフル解像度は必要ありません。1280x720・5 fps のデフォルト設定を維持することで、多くのシーンで安定した検出が得られ、ホスト側の CPU / GPU 使用率も低く抑えられます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_camera_detect_settings.png" /></div>

上記の UI 操作は、`config.yaml` に次の内容を書き込むことと同等であり、設定ファイルに慣れているユーザーは直接編集することもできます：

```yaml
go2rtc:
  streams:
    recamera2002:
      - rtsp://192.168.4.82:8554/live0

cameras:
  recamera2002:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://192.168.4.82:8554/live0
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
