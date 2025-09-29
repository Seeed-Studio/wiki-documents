---
description: Google MediaPipeを始める
title: Google MediaPipeを始める
keywords:
  - Edge
  - reTerminal Application
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_ML_MediaPipe
last_update:
  date: 1/10/2024
  author: Kasun Thushara
---


# reTerminalでMediaPipeを始める

MediaPipeは、マルチモーダル（例：ビデオ、オーディオ、任意の時系列データ）、クロスプラットフォーム（Android、iOS、ウェブ、エッジデバイス）の応用ML パイプラインを構築するためのGoogleのオープンソースフレームワークです。エンドツーエンドのオンデバイス推論を念頭に置いてパフォーマンス最適化されています。Mediapipeは現在活発に開発中で、reTerminalにMediapipeをインストールした後にそのまま実行できる複数のデモが含まれています。

### ハードウェアの準備

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
      <th class="table-trnobg">PiCam</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳しく見る</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### ソフトウェアの準備

公式ウェブサイトから **Bullseye** または **Bookworm** バージョンの Raspberry Pi 64 bit OS をインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この[**ガイド**](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)に記載されている手順に従ってください。

:::note

以前の OS バージョンでは、Python パッケージインストーラーである pip を使用して Python ライブラリを直接システム全体にインストールできました。しかし、Bookworm リリースでは変更が生じました。インストール中の潜在的な問題を軽減するため、現在は venv を使用して Python 仮想環境に pip 経由でパッケージをインストールする必要があります。

:::

これらのコマンドを一つずつ実行すると、仮想環境が構築されます。

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```

## MediaPipeにおけるMLソリューション

以下のコマンドを使用して、GitHubリポジトリをreTerminalデバイスにクローンすることから始めます：

 ```sh
 git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

必要なリソースが含まれているフォルダに移動してください。このディレクトリには、これから扱う4つのトピックがあります。

### 顔検出

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-faccedetection.gif" /></center>

- **ステップ 1** 最初のトピックでは、顔検出の依存関係をインストールします。以下のコマンドを使用して顔検出セクションに移動してください

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_detector/raspberry_pi
 ```

- **ステップ 2** セットアップスクリプトを実行して必要な依存関係をインストールします

 ```sh
sh setup.sh
 ```

- **ステップ 3** セットアップが完了したら、ソースファイルを実行して顔検出を開始できます

 ```sh
python3 detect.py
 ```

### Face Landmarker

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-facelandmarks.gif" /></center>

- **ステップ 1** 依存関係をインストールする

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_landmarker/raspberry_pi
 ```

- **ステップ 2** セットアップスクリプトを実行して必要な依存関係をインストールします

 ```sh
sh setup.sh
 ```

- **ステップ 3** セットアップが完了したら、ソースファイルを実行して顔ランドマーカーを開始できます。

 ```sh
python3 detect.py
 ```

### Hand Landmarker

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe_handlandmarks.gif" /></center>

- **ステップ 1** 依存関係をインストール

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/hand_landmarker/raspberry_pi
 ```

- **ステップ 2** セットアップスクリプトを実行して必要な依存関係をインストールします

 ```sh
sh setup.sh
 ```

- **ステップ 3** セットアップが完了したら、ソースファイルを実行してhand landmakerを開始できます。

 ```sh
python3 detect.py
 ```

### Pose Landmarker

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe-pose.gif" /></center>

- **ステップ 1** 依存関係をインストール

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/pose_landmarker/raspberry_pi
 ```

- **ステップ 2** セットアップスクリプトを実行して必要な依存関係をインストールします

 ```sh
sh setup.sh
 ```

- **ステップ 3** セットアップが完了したら、ソースファイルを実行してポーズランドマーカーを開始できます。

 ```sh
python3 detect.py
 ```

## リソース

- **[Web Page]** [MediaPipe 公式ウェブページ](https://mediapipe.dev/)

- **[Web Page]** [MediaPipe 公式ドキュメント](https://google.github.io/mediapipe/)

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
