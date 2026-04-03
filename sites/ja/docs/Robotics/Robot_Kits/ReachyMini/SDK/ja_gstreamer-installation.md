---
description: Linux、macOS、Windows 上の Reachy Mini 向けの包括的な GStreamer インストールガイド。ビデオおよびオーディオストリーミング用の WebRTC プラグイン設定も含みます。
title: GStreamer のインストール
slug: /reachymini_sdk_gstreamer-installation
keywords:
  - gstreamer
  - installation
  - webrtc
  - video streaming
  - audio streaming
  - linux
  - macos
  - windows
  - dependencies
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_gstreamer-installation/
---

# 📡 GStreamer のインストール

> このガイドでは、Reachy Mini からのビデオおよびオーディオストリームを受信するための [GStreamer](https://gstreamer.freedesktop.org) のインストール方法を説明します。設定に応じてストリームへローカルまたはリモートでどのようにアクセスするかを理解するには、[media architecture](/ja/reachymini_sdk_media-architecture) を参照してください。

Windows と macOS プラットフォーム向けには Python wheel が用意されており、プロジェクトの依存関係に含まれています。基本的にはそのまま動作します。Linux ユーザーは手動インストールが必要です。

<div align="center">

| 🐧 **Linux** | 🍎 **macOS** | 🪟 **Windows** |
|:---:|:---:|:---:|
| ⚠️ 手動インストール | ✅ Python wheels | ✅ Python wheels |

</div>

## 🔧 GStreamer をインストールする

<hfoptions id="gstreamer-install">
<hfoption id="Linux">

### ステップ 1: GStreamer をインストールする

**Ubuntu/Debian 系システムの場合：**

ターミナルで次を実行します：

```bash
sudo apt-get update
sudo apt-get install -y \
    libgstreamer-plugins-bad1.0-dev \
    libgstreamer-plugins-base1.0-dev \
    libgstreamer1.0-dev \
    libglib2.0-dev \
    libssl-dev \
    libgirepository1.0-dev \
    libcairo2-dev \
    libportaudio2 \
    libnice10 \
    gstreamer1.0-plugins-good \
    gstreamer1.0-alsa \
    gstreamer1.0-plugins-bad \
    gstreamer1.0-nice \
    python3-gi \
    python3-gi-cairo
```

**Ubuntu 22.04 のみの場合：** デフォルトの GStreamer バージョンは古すぎます。Gstreamer >=1.22 が必要です。GStreamer 1.24.x を取得するには PPA を追加する必要があります：

```bash
sudo add-apt-repository ppa:savoury1/multimedia
sudo apt update
sudo apt install \
    libgstreamer1.0-dev \
    libgstreamer-plugins-base1.0-dev \
    libgstreamer-plugins-good1.0-dev \
    libgstreamer-plugins-bad1.0-dev
```

正しいバージョンが入っているか確認します：
```bash
pkg-config --modversion gstreamer-1.0
# Should output 1.24.x or higher
```

### ステップ 2: Rust をインストールする

Linux では、WebRTC プラグインはデフォルトでは有効になっておらず、Rust のソースコードから手動でコンパイルする必要があります。`rustup` を使ってコマンドラインから Rust をインストールします：

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

### ステップ 3: WebRTC プラグインをビルドしてインストールする

WebRTC プラグインをビルドしてインストールするには、次のコマンドを実行します：

```bash
# Clone the GStreamer Rust plugins repository
git clone https://gitlab.freedesktop.org/gstreamer/gst-plugins-rs.git
cd gst-plugins-rs
git checkout 0.14.1

# Install the cargo-c build tool
cargo install cargo-c

# Create installation directory
sudo mkdir -p /opt/gst-plugins-rs
sudo chown $USER /opt/gst-plugins-rs

# Build and install the WebRTC plugin (this may take several minutes)
cargo cinstall -p gst-plugin-webrtc --prefix=/opt/gst-plugins-rs --release

# Add plugin path to your environment
echo 'export GST_PLUGIN_PATH=/opt/gst-plugins-rs/lib/x86_64-linux-gnu:$GST_PLUGIN_PATH' >> ~/.bashrc
source ~/.bashrc
```

> **💡 メモ:** ARM64 システム（Raspberry Pi など）の場合は、export コマンド内の `x86_64-linux-gnu` を `aarch64-linux-gnu` に置き換えてください。


</hfoption>
<hfoption id="macOS">

wheel が提供されているため、GStreamer を手動でインストールする必要はありません。ただし、wheel を使用せず、システムインストールに依存することも可能です。

### Homebrew を使用する

```bash
brew install gstreamer libnice-gstreamer
```

Homebrew パッケージでは WebRTC プラグインがデフォルトで有効になっています。


</hfoption>
<hfoption id="Windows">

wheel が提供されているため、GStreamer を手動でインストールする必要はありません。ただし、wheel を使用せず、システムインストールに依存することも可能です。

### ステップ 1: 公式インストーラーを使用して GStreamer をインストールする

<div align="center">

[![Download GStreamer for Windows](https://img.shields.io/badge/Download-GStreamer%20for%20Windows-blue?style=for-the-badge&logo=windows&logoColor=white)](https://gstreamer.freedesktop.org/download/)

</div>

1. **runtime** インストーラー（MSVC バージョン）をダウンロードします
2. **Complete** インストールオプションを選択してインストールします
3. 環境変数を編集し、システム PATH に次を追加します：`C:\Program Files\gstreamer\1.0\msvc_x86_64\bin`
4. PYTHONPATH に次を追加します：`C:\Program Files\gstreamer\1.0\msvc_x86_64\lib\site-packages`

> **💡 重要:** 別の場所にインストールした場合は、`C:\Program Files\gstreamer` を実際の GStreamer インストールフォルダーに置き換えてください。

</hfoption>
</hfoptions>

## ✅ インストールの確認

最後に、次のようにして GStreamer のインストールをテストできます：

```bash
# Check version
gst-launch-1.0(.exe) --version

# Test basic functionalities
gst-launch-1.0 videotestsrc ! autovideosink

# Verify WebRTC plugin
gst-inspect-1.0 webrtcsrc
```

Python 環境で GStreamer ライブラリをインポートできることも確認してください：
```bash
python -c "import gi"
```


## トラブルシューティング & ユニットテスト

ストリームに問題が発生した場合は、次のようにコンポーネントを個別にテストできます。

**テスト 1: WebRTC サーバーを手動で作成する**
カメラとエンコーダースタックを検証するために、ロボット上で次の GStreamer パイプラインを実行します：

```bash
gst-launch-1.0 webrtcsink run-signalling-server=true meta="meta,name=reachymini" name=ws libcamerasrc ! capsfilter caps=video/x-raw,width=1280,height=720,framerate=60/1,format=YUY2,colorimetry=bt709,interlace-mode=progressive ! queue !  v4l2h264enc extra-controls="controls,repeat_sequence_header=1" ! 'video/x-h264,level=(string)4' ! ws. alsasrc device=hw:4 ! queue ! audioconvert ! audioresample ! opusenc ! audio/x-opus, rate=48000, channels=2 ! ws.
```
