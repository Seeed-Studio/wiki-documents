---
description: このウィキは、reComputer JetsonでRTSPビデオストリーミングを行うためのNVStreamerの使用方法に関するチュートリアルを提供します。
title: NVStreamerの使い方
keywords:
- reComputer
- NVStreamer
- RTSP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/getting_started_with_nvstreamer
last_update:
  date: 05/15/2025
  author: ZhuYaoHui
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reComputerでNVStreamerを使用してRTSPストリーミングを行う方法（Jetsonプラットフォームサービス）

## はじめに
[NVStreamer](https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html)は、NVIDIAが開発したソフトウェアで、ビデオファイルを保存および提供し、それをRTSPプロトコルを使用してストリーミングすることができます。これは、VSTでのテストに特に役立ち、カメラの代わりにビデオソースを作成するための代替手段を提供します。具体的には、特定のビデオファイルをVSTテストの入力として使用するメカニズムを提供します。VSTは、RTSPストリームをONVIF-Sカメラからのものとして受信するように構成できます。

このウィキでは、[reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)でNVStreamerを使用してRTSPビデオストリーミングを行う方法についてのチュートリアルを提供します。

<div align="center">
    <img width={700} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" />
</div>

## 前提条件
セットアッププロセスを進める前に、システムが以下の前提条件を満たしていることを確認してください：
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

- Ubuntu `22.04`またはそれ以降を実行しているreComputer J4012 Orin NX 16G。
- 提供するビデオファイルを保存するための十分な空き容量がLinuxシステムにあること（通常は数百GB）。
- ドライバーバージョン：`535.113.01`、Jetpack `6.0`、CUDAバージョン：`12.2`。
- `JetPack`および関連する`Jetsonサービス`パッケージがインストールされていることを確認してください。
  ```bash
  sudo apt-get install nvidia-jetpack
  sudo apt install nvidia-jetson-services
  ```

## 始めましょう

### インストールと起動

**ステップ1**: NGCからJetsonにアプリケーションパッケージ **`nvstreamer-1.1.0.tar.gz`** をダウンロードします。このリンクを使用してください：[NGCリファレンスワークフローとリソース](https://catalog.ngc.nvidia.com/orgs/nvidia/teams/jps/resources/reference-workflow-and-resources)。NGCの資格情報を入力する必要があります。ページ上部右側の**`Download`**メニューから利用可能なオプションのいずれかを使用してください：

```bash
tar -xvzf nvstreamer-1.1.0.tar.gz
```

**ステップ2**: 次のコマンドを実行して、オペレーティングシステムのソケットバッファサイズを増やします。これは、高ビットレートまたは大きなIDRフレームを持つビデオの場合のパケット損失を防ぐためです。これらのバッファサイズを増やさないと、一部のビデオファイルでブロック状のアーティファクトが表示されることがあります：

```bash
sudo sysctl -w net.core.wmem_max=2000000
sudo sysctl -w net.core.rmem_max=2000000
```

**ステップ3**: 次のコマンドラインを使用してNVStreamerを起動します：

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml up -d  --force-recreate
```

NVStreamerインスタンスを終了するには、次のコマンドを使用します：

```bash
cd nvstreamer
sudo docker compose -f compose_nvstreamer.yaml down --remove-orphans
```

### NVStreamerへのビデオアップロード
**ステップ1**: ウェブブラウザ（Chromeを推奨）を開き、次のアドレスに移動します（同じシステムまたは同じネットワーク上の別のシステムで）。

```markdown
http://[reComputer-IP]:31000
```
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig1.png" />
</div>

**ステップ2**: **`File Upload`** を選択し、カメラとしてテストしたいビデオディスクファイル（対応コーデック：h264/h265、コンテナ：mp4/mkv）を選択します。指定されたエリアにドラッグ＆ドロップしてください。ビデオファイルにBフレームが含まれている場合、NVStreamerは自動的にファイルをトランスコードします。ファイルサイズによっては数分かかる場合があります。
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig2.png" />
</div>

**ステップ3**: ファイルが正常にアップロードされると、左下隅に緑色の進行バーが表示され、アップロードプロセスの終了を示します。その後、トランスコードプロセスが開始されます。完了後、ファイル名が灰色で表示され、ファイル名を使用したRTSPストリームが自動的に作成されます。

<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig3.png" />
</div>

RTSPストリーミングのチュートリアルはここで終了です。RTSPアドレス（"rtsp://"を含む、スペースがないことを確認）をコピーまたはメモしてください。このアドレスは、次のステップで説明する別のユーザーインターフェースに入力する必要があります。

### VSTへのRTSPストリームの追加

**ステップ1**: VSTウェブサーバーにアクセスします：**`http://[JETSON-IP]:30080/vst/`**（注意：HTTP、HTTPSではありません）。ここで、`[JETSON-IP]`は、Dockerコンテナを実行しているJetsonデバイスのIPアドレスです。

以下のようなUIが表示されます：
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

**ステップ2**: **`Camera Management`** タブをクリックし、**`RTSP`** をクリックします。NVStreamer UIからコピーしたRTSPアドレスを**`rtsp url`** ボックスに貼り付けます。**`location`** と**`name`** フィールドには同じ文字列を入力してください（これがカメラ名になります）。その後、**`Submit`** をクリックします。
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig5.png" />
</div>

**ステップ 3**: **`Streams タブ`** をクリックすると、ファイルを確認できます。
<div align="center">
    <img width={1000} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/nvstreamer/fig6.png" />
</div>

## 詳細情報
- Jetson Orin 上の NVStreamer: https://docs.nvidia.com/moj/nvstreamer/moj-nvstreamer.html

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>