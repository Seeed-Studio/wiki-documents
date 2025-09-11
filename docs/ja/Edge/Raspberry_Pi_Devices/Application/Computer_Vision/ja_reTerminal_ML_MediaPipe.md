---
description: Google MediaPipe の使い方を始める
title: Google MediaPipe の使い方を始める
keywords:
  - Edge
  - reTerminal アプリケーション
  - Embedded_ML
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_ML_MediaPipe
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# reTerminal で MediaPipe を始める

MediaPipe は、Google が提供するオープンソースのフレームワークで、マルチモーダル（例：ビデオ、オーディオ、任意の時系列データ）、クロスプラットフォーム（Android、iOS、Web、エッジデバイスなど）で動作する応用機械学習パイプラインを構築するためのものです。これは、エンドツーエンドのオンデバイス推論を念頭に置いてパフォーマンス最適化されています。MediaPipe は現在も活発に開発が進められており、複数のデモが含まれており、reTerminal に MediaPipe をインストールするだけでそのまま実行できます。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を見る</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェアの準備

Raspberry Pi 64 ビット OS の **Bullseye** または **Bookworm** バージョンを公式ウェブサイトからインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この [**ガイド**](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) に従ってください。

:::note

以前の OS バージョンでは、Python ライブラリを pip（Python パッケージインストーラー）を使用してシステム全体に直接インストールすることができました。しかし、Bookworm リリースでは変更がありました。インストール中の潜在的な問題を軽減するために、現在では venv を使用して Python 仮想環境内にパッケージをインストールする必要があります。

:::

以下のコマンドを順番に実行すると、仮想環境が作成されます。

```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
```

## MediaPipe における ML ソリューション

以下のコマンドを使用して、GitHub リポジトリを reTerminal デバイスにクローンしてください：

 ```sh
 git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```
必要なリソースが含まれているフォルダに移動します。このディレクトリには、取り上げる4つのトピックが含まれています。

### 顔検出

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-faccedetection.gif" /></center>

- **ステップ 1** 最初のトピックでは、顔検出のための依存関係をインストールします。以下のコマンドを使用して顔検出セクションに移動してください。

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_detector/raspberry_pi
 ```
- **ステップ 2** 必要な依存関係をインストールするためにセットアップスクリプトを実行します。

 ```sh
sh setup.sh
 ```

- **ステップ 3** セットアップが完了したら、ソースファイルを実行して顔検出を開始できます。

 ```sh
python3 detect.py
 ```

### 顔ランドマーカー
<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/meadiapipe-facelandmarks.gif" /></center>

- **ステップ 1** 依存関係をインストールします。

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/face_landmarker/raspberry_pi
 ```
- **ステップ 2** 必要な依存関係をインストールするためにセットアップスクリプトを実行します。

 ```sh
sh setup.sh
 ```

- **ステップ 3** セットアップが完了したら、ソースファイルを実行して顔ランドマーカーを開始できます。

 ```sh
python3 detect.py
 ```

### 手ランドマーカー

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe_handlandmarks.gif" /></center>

 - **ステップ 1** 依存関係をインストールします。

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/hand_landmarker/raspberry_pi
 ```
- **ステップ 2** 必要な依存関係をインストールするためにセットアップスクリプトを実行します。

 ```sh
sh setup.sh
 ```

- **ステップ 3** セットアップが完了したら、ソースファイルを実行して手ランドマーカーを開始できます。

 ```sh
python3 detect.py
 ```

### ポーズランドマーカー

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/mediapipe/mediapipe-pose.gif" /></center>

 - **ステップ 1** 依存関係をインストールします。

 ```sh
cd Seeed_Python_ReTerminal/samples/mediapipe_picam/pose_landmarker/raspberry_pi
 ```
- **ステップ 2** 必要な依存関係をインストールするためにセットアップスクリプトを実行します。

 ```sh
sh setup.sh
 ```

- **ステップ 3** セットアップが完了したら、ソースファイルを実行してポーズランドマーカーを開始できます。

 ```sh
python3 detect.py
 ```

## リソース

- **[ウェブページ]** [MediaPipe 公式ウェブページ](https://mediapipe.dev/)

- **[ウェブページ]** [MediaPipe 公式ドキュメント](https://google.github.io/mediapipe/)

## 技術サポート

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>