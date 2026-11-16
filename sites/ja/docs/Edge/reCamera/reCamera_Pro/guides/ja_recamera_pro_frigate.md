---
description: reCamera Pro を Frigate に接続する
title: reCamera Pro を Frigate に接続する
keywords:
  - Edge AI
  - reCamera
  - Frigate
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_pro_frigate
sidebar_position: 1
last_update:
  date: 10/22/2026
  author: yylin
createdAt: 2026-10-22
updatedAt: 2026-10-22
url: https://wiki.seeedstudio.com/ja/recamera_pro_frigate/
---

# reCamera Pro を Frigate に統合する

Frigate は、オープンソースの NVR およびビデオ解析プラットフォームで、標準的な RTSP ビデオストリームを取得して物体検出、録画、アラートを行うことができます。reCamera Pro は Web UI から直接 RTSP ストリームを公開できるため、Frigate との統合は 2 ステップだけで完了します。reCamera Pro で RTSP ストリーミングを有効にし、そのストリームを Frigate のカメラとして追加します。

:::tip
このガイドは **reCamera Pro** に適用されます。reCamera 2002 シリーズは異なる接続方法を使用します。reCamera 2002 の接続ドキュメントを参照してください。
:::

全体の統合手順は次の 2 ステップで構成されます：

1. reCamera Pro の Web UI で RTSP ストリームを有効にする。
2. その RTSP ストリームを Frigate の Web UI でカメラとして追加する。

## 前提条件

- reCamera Pro デバイス 1 台。電源が入り、LAN に接続されており、その IP アドレスが分かっていること（このガイドでは例として `192.168.3.207` を使用します）。
- デバイスの Web UI ログイン情報（デフォルトのユーザー名は `admin`。パスワードはデバイス上で設定したもの。このガイドでは `recamera.1` を使用します）。
- 同じ LAN 上に Frigate をインストールしたホスト（Docker デプロイでも可）があり、その Web UI にアクセスできること。
- ストリームの検証に使用する `ffprobe` / `ffplay` または VLC をインストールしたコンピュータ（任意）。

## reCamera Pro で RTSP ストリーミングを有効にする

1. ブラウザで reCamera Pro の Web UI（例：`https://192.168.42.1/`）を開き、デバイスのユーザー名とパスワードでログインします。
2. 左側のナビゲーションから **Live View** を開きます。
3. 右側の設定パネルで **Stream Settings** タブを選択します。
4. **Streaming Settings** スイッチをオンにします。すると、ストリーミングプロトコル（**RTSP**）、**Stream URL**、**Authentication** 認証情報が表示されます。デフォルトのままにするか必要に応じて調整し、**Apply Settings** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/pro_stream_settings.png" alt="reCamera Pro Development Skill workflow" /></div>

5. パネルに表示されている **Stream URL** をコピーします。これは Frigate が取得するアドレスです。デフォルト設定では次のようになります：

```
rtsp://admin:admin@<device-ip>:554/main
```

:::note
Stream Settings パネル内の RTSP ユーザー名 / パスワードは、Web UI ログインとは独立しています。このガイドでは Web UI に `admin` / `recamera.1` を使用し、RTSP ストリームには `admin` / `admin` を使用しています。ここで RTSP 認証情報を変更した場合は、Frigate 側でも新しい値を使用してください。
:::

reCamera Pro は 2 つのストリームを公開します：

| ストリーム | URL | デフォルト形式 |
| --- | --- | --- |
| メイン | `rtsp://<user>:<password>@<device-ip>:554/main` | 3840x2160 (4K) @ 30fps, H.264, G.711A オーディオ |
| サブ | `rtsp://<user>:<password>@<device-ip>:554/sub` | 640x480, H.265 |

Frigate ではメインストリームを使用するのが適切です。検出と録画の両方にメインストリームを使用してください。Frigate を設定する前に、コンピュータから次のように検証します：

```bash
# Inspect codec / resolution / frame rate
ffprobe -rtsp_transport tcp "rtsp://admin:admin@192.168.3.207:554/main"

# Play it directly
ffplay  -rtsp_transport tcp "rtsp://admin:admin@192.168.3.207:554/main"
```

`h264`、`3840x2160`、30fps のビデオストリームと、`pcm_alaw` オーディオトラックが表示されるはずです。

## Frigate UI でカメラを追加する

1. Frigate の Web UI を開いてログインします。まだカメラが設定されていない場合、ダッシュボードには「No Cameras Configured」と表示されます。**Add Camera** をクリックしてウィザードを開きます。あるいは **Settings → Global configuration → Camera management** から **Add New Camera** をクリックしても開けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_no_camera.png" alt="reCamera Pro Development Skill workflow" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_camera_management.png" alt="reCamera Pro Development Skill workflow" /></div>

2. "Add Camera" ウィザードでカメラ名とデバイスの IP を入力します。**Stream Detection Method** には **Manual selection** を選択し、**Camera Brand** を **Other** に設定してから、reCamera Pro のメインストリーム URL（RTSP 認証情報を含む）を **Custom Stream URL** に貼り付けます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_add_camera_rtsp.png" alt="reCamera Pro Development Skill workflow" /></div>

3. **Continue** をクリックします。Frigate はそのアドレスに接続してストリームをテストします。成功すると、解像度、フレームレート、コーデック、オーディオ（3840x2160, 30 FPS, h264, pcm_alaw）とともにフレームが表示されます。内容を確認し、再度 **Continue** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_stream_test_ok.png" alt="reCamera Pro Development Skill workflow" /></div>

4. ストリーム設定ページで、このストリームに必要なロールを有効にします。**detect**（物体検出）と **record**（録画）をオンにします。**audio** はオフのままにします（後述の注意を参照）。その後 **Next** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_stream_roles.png" alt="reCamera Pro Development Skill workflow" /></div>

5. 最終ステップでは、保存前にストリームを検証します。4K メインストリームの場合、推定帯域幅（約 3.4 GB/時）と、問題なく無視できる 2 つのヒントが表示されます：
   - *The AAC audio codec is required to support audio in recordings*：Pro のメインストリームは G.711A（`pcm_alaw`）オーディオを含んでおり、Frigate は録画内にこれを保存できません。**audio** ロールがオフになっているため、録画には単に音声が含まれないだけで、それ以外への影響はありません。
   - *A resolution of 3840x2160 may cause increased resource usage*：4K ストリームでは想定される内容です。検出は縮小された 1280x720 フレーム上で実行され（後述）、ハードウェアアクセラレーションされたデコードによりホストの負荷は抑えられます。

   ステータスが **Connected** と表示されたら、**Save New Camera** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_stream_validate.png" alt="reCamera Pro Development Skill workflow" /></div>

6. 保存後、カメラはカメラ管理リストに表示され、その状態は **On** に設定されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_camera_saved.png" alt="reCamera Pro Development Skill workflow" /></div>

7. ダッシュボードに戻ると、reCamera Pro のライブ映像が表示されます。Frigate はこのストリームに対して物体検出と録画を実行するようになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_live_view.png" alt="reCamera Pro Development Skill workflow" /></div>

### オプション：検出パラメータを調整する

**Settings → Camera configuration → `<camera name>` → Object detection** で、検出用の解像度とフレームレートを調整できます。Pro は 4K を出力しますが、検出にフル解像度は不要です。デフォルトの 1280x720・5 fps を維持すれば、多くのシーンで安定した検出が得られ、ホストの CPU / GPU 使用率も低く抑えられます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_camera_detect_settings.png" alt="reCamera Pro Development Skill workflow" /></div>

:::tip
ホストが 4K デコード処理に苦戦する場合は、reCamera Pro の Web UI（Live View → Basic Settings）でメインストリームの解像度を下げるか、サブストリーム（`rtsp://<user>:<password>@<device-ip>:554/sub`）を **detect** ロール専用の 2 つ目の入力として追加し、メインストリームは **record** 用に維持してください。
:::

上記の UI 操作は、`config.yaml` に次の内容を書き込むことと同等です。設定ファイルに慣れているユーザーは、直接編集しても構いません。

```yaml
go2rtc:
  streams:
    recamera_pro:
      - rtsp://admin:admin@192.168.3.207:554/main

cameras:
  recamera_pro:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://admin:admin@192.168.3.207:554/main
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
```

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
