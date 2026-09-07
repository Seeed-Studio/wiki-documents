---
description: Debian 13 イメージを reCamera Pro に書き込む
title: Debian 13 イメージを reCamera Pro に書き込む
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - Debian 13
slug: /recamera_pro_debian
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/04/2026
  author: yylin
createdAt: '2026-08-04'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/ja/recamera_pro_debian/
---

## はじめに

reCamera Pro は RV1126B チップを搭載し、2 GB または 4 GB メモリのモデルがあります。AI 推論をすぐに始められるよう、出荷時には Buildroot ファームウェアがプリインストールされています。本ページでは、開発やデプロイをより柔軟に行いたいユーザー向けに Debian 13 イメージを提供します。

Debian 13 イメージを書き込んだ後は、CMake を使って独自アプリケーションをコンパイルし、`apt` で必要な依存パッケージをインストールし、Docker コンテナを実行できます。このイメージは Seeed の工場出荷時ドライバと互換性があり、デバイスツリーの変更は不要です。カメラ、マイク、スピーカー、Wi-Fi は期待どおり動作しますが、Bluetooth には対応していません。

:::warning
このファームウェアは現在実験的なものです。現時点で Seeed による保守は行われておらず、追加の開発オプションとして提供されています。
:::

## ダウンロード

### イメージをダウンロード

[Google Drive から Debian 13 イメージをダウンロードします](https://drive.google.com/file/d/1qLlbsgUB88qC2xBn4-Decl8XBZgr7EI/view?usp=drive_link)。

### 書き込みツールとドライバをダウンロード

このガイドでは、Windows 上で SocToolKit を使用してイメージを書き込みます。以下のファイルをダウンロードしてください：

- [Driver (DriverAssistant_v5.12.zip)](https://drive.google.com/file/d/1_Efm8nJlQivU2F7BgVokVPfGUl12fI6E/view?usp=drive_link)
- [Flashing tool (SocToolKit-window.zip)](https://drive.google.com/file/d/1wFMHF_KSmbTPvuaAefqutDP-DPQ_NONp/view?usp=drive_link)

## 書き込みの準備

### ドライバをインストール

1. ダウンロードした `DriverAssistant_v5.12.zip` アーカイブを展開します。
2. 展開したディレクトリを開き、`DriverInstall.exe` を実行します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image.png" /></div>

3. **Driver Install** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-1.png" /></div>

次の画面が表示されれば、ドライバは正常にインストールされています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-2.png" /></div>

### SocToolKit を設定

1. `SocToolKit-window.zip` を展開し、展開したディレクトリを開いて `SocToolKit.exe` を実行します。
2. ツール内で **RV1126B** チップを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-3.png" /></div>

3. `recamera_pro_debian13_img.tar.gz` を展開します。
4. SocToolKit で右クリックし、コンテキストメニューの一番下の項目を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-5.png" /></div>

5. 展開したファームウェアディレクトリ内の `env.img` ファイルを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-6.png" /></div>

6. 確認ダイアログで **Yes** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-7.png" /></div>

7. `rootfs` エントリを選択し、右側の三点リーダー（`...`）をクリックします。イメージファイルを、展開したファームウェアディレクトリ内の `rootfs_debian_clean.img` に置き換えます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-11.png" /></div>

### reCamera Pro をローダーモードにする

1. reCamera Pro の USB 3.0 ポートと Windows コンピュータを USB ケーブルで接続し、DC ポートから電源を供給します。
2. デバイス側面にある `BOOT` と `RESET` のピンホールを探します。
3. `BOOT` を押し続けたまま、`RESET` を短く押してデバイスを再起動します。
4. `RESET` を押した後も約 5 秒間 `BOOT` を押し続け、その後離します。デバイスはローダーモードに入ります。

SocToolKit 上で、デバイスが検出されたことが表示されるはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-8.png" /></div>

### ファームウェアを書き込む

SocToolKit がデバイスを検出し、ファームウェアを読み込んだら、`userdata` 以外のすべてのパーティションを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-12.png" /></div>

**Download** をクリックしてファームウェアの書き込みを開始します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-13.png" /></div>

書き込みが完了すると、インターフェースは次のようになります：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Secondary_Development/debian13/image-14.png" /></div>

## 新しいファームウェアについて

書き込み後、デバイスを Ethernet ケーブルでネットワークに接続します。このイメージは、元の USB-C 仮想ネットワークアダプタをサポートしていません。デバイスの IP アドレスは、ルーターや Wi-Fi 管理画面で確認できます。このイメージでは SSH が有効になっているため、SSH で直接ログインできます。ネットワーク接続が利用できない場合は、ボーレート `1500000` の UART シリアルコンソールを使用してください。

システムには `root` ユーザーのみが用意されており、デフォルトパスワードは `123123` です。初回ログイン後、すぐにパスワードを変更してください：

```bash
passwd
```

その後、次のシステム設定手順を完了します。

## 一時的に HTTP プロキシを設定

ネットワークへのアクセスに HTTP プロキシが必要な場合（たとえば `apt` を使用する際など）は、以下の環境変数を一時的に設定します。プロキシを使用しない場合は、この手順をスキップしてください。サンプルのアドレスとポートは、使用しているプロキシサーバーのものに置き換えてください。

```bash
export http_proxy="http://192.168.4.78:7890"
export https_proxy="http://192.168.4.78:7890"
# Optional: bypass the proxy for local addresses
export no_proxy="localhost,127.0.0.1,::1,192.168.0.0/16"
```

## 時刻を設定

初回起動時、システム時刻が 1970 年に設定されている場合があり、その場合は SSL 証明書の検証に失敗します。このシステムでは systemd による自動時刻同期が設定されていないため、パッケージインデックスを更新する前に正しい時刻を手動で設定してください：

```bash
date -s "2026-09-02 15:20:00"

apt update
```

### カメラの向きを設定

まず、反転制御をサポートするセンサーノードを探します：

```bash
for dev in /dev/v4l-subdev*; do
    echo
    echo "========== $dev =========="
    v4l2-ctl -d "$dev" --list-ctrls 2>&1 | \
        grep -Ei 'flip|mirror|horizontal|vertical|rotate'
done
```

通常、次のような出力が表示されます：

```bash
========== /dev/v4l-subdev2 ==========
                horizontal_flip 0x00980914 (bool)   : default=0 value=1
                  vertical_flip 0x00980915 (bool)   : default=0 value=1
              vertical_blanking 0x009e0901 (int)    : min=90 max=63375 step=1 default=90 value=90
            horizontal_blanking 0x009e0902 (int)    : min=4294965822 max=4294965822 step=1 default=4294965822 value=-1474 flags=read-only
```

デフォルトでは、水平方向と垂直方向の両方の反転が有効になっている場合があります。前の出力に表示されたデバイスノードに合わせてコマンドを調整してください。この例では `/dev/v4l-subdev2` を使用しています：

```bash
v4l2-ctl -d /dev/v4l-subdev2 \
  --set-ctrl=horizontal_flip=0,vertical_flip=0
```

設定を確認します：

```bash
v4l2-ctl -d /dev/v4l-subdev2 \
  --get-ctrl=horizontal_flip,vertical_flip
```

期待される出力：

```bash
horizontal_flip: 0
vertical_flip: 0
```

## カメラをテスト

V4L2 を使用して NV12 の生フレームを 1 枚キャプチャし、FFmpeg で JPEG に変換します：

```bash
v4l2-ctl -d /dev/video12 \
  --set-fmt-video=width=3840,height=2160,pixelformat=NV12 \
  --stream-mmap=4 \
  --stream-count=1 \
  --stream-to=/tmp/frame.nv12

ffmpeg \
  -f rawvideo \
  -pixel_format nv12 \
  -video_size 3840x2160 \
  -i /tmp/frame.nv12 \
  -frames:v 1 \
  -q:v 2 \
  -y /tmp/camera.jpg
```

コマンドの実行が完了したら、`/tmp/camera.jpg` に保存された、ISP 処理済みで向きが正しい JPEG 画像を確認します。

## マイクとスピーカーを設定

必要な依存パッケージをインストールします：

```bash
apt install ffmpeg alsa-utils
```

利用可能な録音デバイスと再生デバイスを確認します：

```bash
arecord -l

aplay -l
```

## Docker を設定

Docker をインストールします：

```bash
apt install docker-cli
```

Docker が正しくインストールされていることを確認します：

```bash
command -v docker
docker --version
dockerd --version
```

期待される出力は次のようなものです：

```bash
/usr/bin/docker
Docker version 26.1.5+dfsg1, build a72d7cd
Docker version 26.1.5+dfsg1, build 411e817
```

### Docker を設定

Docker デーモンの設定ファイルを作成し、データディレクトリを指定してデフォルトネットワークを無効化します：

```bash
cat >/etc/docker/daemon.json <<'EOF'
{
  "data-root": "/userdata/docker",
  "storage-driver": "overlay2",
  "iptables": false,
  "bridge": "none"
}
EOF
```

Docker を停止し、残っているランタイムファイルを削除します：

```bash
service docker stop 2>/dev/null || true

rm -f /var/run/docker.pid
rm -f /var/run/docker.sock
rm -rf /var/run/docker/containerd
```

Docker を再起動します：

```bash
service docker restart
```

### Docker をテスト

Docker デーモンが動作していることを確認します：

```bash
ps aux | grep '[d]ockerd'
```

テスト用コンテナを実行します：

```bash
docker run --rm hello-world
```

Docker が正しく設定されていれば、出力には次の内容が含まれます：

```bash
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

## GStreamer ツールをインストールしてカメラデータを取得

必要なツールをインストールします：

```bash
apt update

apt install -y \
  gstreamer1.0-tools \
  gstreamer1.0-plugins-base \
  gstreamer1.0-plugins-good \
  gstreamer1.0-plugins-bad \
  gstreamer1.0-libav
```

次のコマンドを使用して 1 フレームをキャプチャし、JPEG 画像として保存します：

```bash
gst-launch-1.0 -e \
  v4l2src device=/dev/video12 num-buffers=1 \
  ! video/x-raw,format=NV12,width=3840,height=2160,framerate=30/1 \
  ! videoconvert \
  ! jpegenc quality=95 \
  ! filesink location=/tmp/camera.jpg
```

コマンドの実行が完了したら、`/tmp/camera.jpg` にある ISP 処理済み画像を確認します。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなレベルのサポートを提供しています。お客様それぞれの好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
