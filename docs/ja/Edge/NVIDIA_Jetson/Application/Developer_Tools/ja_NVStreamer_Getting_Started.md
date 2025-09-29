---
description: このwikiでは、reComputer JetsonでRTSPビデオストリーミング用のNVStreamerの使用方法についてのチュートリアルを提供します。
title: NVStreamerの使用開始
keywords:
- reComputer
- NVStreamer
- RTSP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/getting_started_with_nvstreamer
last_update:
  date: 7/24/2024
  author: ZhuYaoHui
---
# Jetson Platform ServicesでreComputer上のRTSPストリーミング用NVStreamerの使用方法

## はじめに

[NVStreamer](https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html)は、NVIDIAが開発したソフトウェアで、ビデオファイルを保存・配信し、RTSPプロトコルを使用してストリーミングできます。VSTでのテストに特に有用で、VSTの入力用ビデオソースを作成するためのカメラの代替手段を提供します。具体的には、VSTテスト用の入力として特定のビデオファイルを使用するメカニズムを提供します。VSTは、ONVIF-Sカメラから来ているかのようにRTSPストリームを受信するように設定できます。

このwikiでは、[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)でRTSPビデオストリーミング用のNVStreamerの使用方法についてのチュートリアルを提供します。

<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 前提条件

セットアップ手順を進める前に、システムが以下の前提条件を満たしていることを確認してください：
<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

- Ubuntu `22.04`以降を実行するreComputer J4012 Orin NX 16G。
- Linuxシステムには、配信するビデオファイルを保存するのに十分な利用可能スペースが必要です（通常数百GB）。
- ドライバーバージョン：`535.113.01`、Jetpack `6.0`、CUDAバージョン：`12.2`。
- `JetPack`および関連する`Jetson services`パッケージがインストールされていることを確認してください。

  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

## はじめに

### インストールと起動

**ステップ 1**: このリンクを使用して、NGC からアプリケーションパッケージ **`nvstreamer-1.1.0.tar.gz`** を Jetson にダウンロードします：[NGC Reference Workflow and Resources](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources)。NGC の認証情報を入力する必要があります。ページで、**`Download`** メニュー（右上角）で利用可能なオプションの一つを使用してください：

```bash
tar -xvzf nvstreamer-1.1.0.tar.gz
```

**ステップ2**: 以下のコマンドを実行して、オペレーティングシステムのソケットバッファサイズを増加させます。これは、高ビットレートの動画や大きなIDRフレームの場合にパケット損失を回避するためです。これらのバッファサイズを増加させないと、一部の動画ファイルでブロック状のアーティファクトが表示されることがあります：

```bash
sudo sysctl -w net.core.wmem_max=2000000
sudo sysctl -w net.core.rmem_max=2000000
```

**ステップ3**: 以下のコマンドラインを使用してNVStreamerを開始します：

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml up -d  --force-recreate
```

NVStreamerインスタンスを終了するには、以下のコマンドを使用してください：

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml down --remove-orphans
```

### NVStreamerに動画をアップロード

**ステップ1**: Webブラウザ（Chromeの使用を推奨）を開き、このアドレスにアクセスします（同じシステムまたは同じネットワーク上の別のシステムから）。

```markdown
http://[reComputer-IP]:31000
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig1.png" />
</div>

**ステップ 2**: **`File Upload`** を選択し、カメラとしてテストしたいビデオディスクファイルを選択します（サポートされているコーデック：h264/h265、コンテナ：mp4/mkv）。指定された領域にドラッグアンドドロップします。ビデオファイルにBフレームが含まれている場合、NVStreamerは自動的にファイルをトランスコードします。これはファイルサイズによって数分かかる場合があります。
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig2.png" />
</div>

**ステップ 3** ファイルが正常にアップロードされると、左下角の緑色のプログレスバーが完了し、アップロードプロセスの終了を示します。その後、トランスコーディングプロセスが開始されます。完了後、ファイル名がグレーで表示され、ファイル名を持つRTSPストリームが自動的に作成されます。

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig3.png" />
</div>

RTSPストリーミングチュートリアルはこのステップで終了します。RTSPアドレス（「rtsp://」を含む；前にスペースがないことを確認してください）をコピーまたはメモしてください。次のステップで説明する別のユーザーインターフェースにこのアドレスを入力する必要があります。

### VSTへのRTSPストリームの追加

**ステップ 1**: VSTウェブサーバーにアクセスします：**`http://[JETSON-IP]:30080/vst/`**（注意：HTTPS ではなく HTTP）、ここで `[JETSON-IP]` は Docker コンテナを実行している Jetson デバイスの IP アドレスです。

 次のような UI が表示されます：
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig4.png" />
</div>

- 起動に失敗した場合は、ターミナルで以下を入力してください：

    ```bash
    sudo systemctl start jetson-ingress
    sudo systemctl start jetson-monitoring
    sudo systemctl start jetson-sys-monitoring
    sudo systemctl start jetson-gpu-monitoring
    sudo systemctl start jetson-redis
    sudo systemctl start jetson-vst
    ```

**ステップ 2**: **`Camera Management`** タブをクリックし、**`RTSP`** をクリックして、NVStreamer UI からコピーした RTSP アドレスを **`rtsp url`** ボックスに貼り付けます。**`location`** と **`name`** フィールドに同じ文字列を入力し（これがカメラ名になります）、**`Submit`** をクリックします。
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig5.png" />
</div>

**ステップ 3**: **`Streams tab`** をクリックしてファイルを確認できます。
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig6.png" />
</div>

## 詳細情報

- Jetson Orin での NVStreamer：https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
