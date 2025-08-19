---
description: reTerminal と Pi カメラを使用した OpenCV による物体検出
title: reTerminal と Pi カメラを使用した物体検出
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - 物体検出
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_DM_Object_detection
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" /></center>

## はじめに

エッジコンピュータ上での物体検出は、コンピュータビジョンの重要な分野となり、デバイスが自律的に周囲を認識し反応することを可能にしています。この分野で注目されるのが、最先端の物体検出モデルである **EfficientDet** です。このモデルは、**リソース効率が高く、精度と計算負荷のバランスを取るよう設計されており、処理能力が限られたエッジデバイスでの展開に特に適しています**。EfficientDet によるエッジコンピュータ上での物体検出は、スマート監視カメラや自動運転車、IoT デバイスなど、さまざまなシナリオで応用されています。複数の物体をリアルタイムで識別し位置を特定する能力は、エッジコンピューティングシステムの自律性と知能を向上させる重要な要素となっています。

## 始める前に

このプロジェクトを始める前に、以下に記載されているようにハードウェアとソフトウェアを事前に準備する必要があります。

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

公式ウェブサイトから Raspberry Pi 64 ビット OS の **Bullseye** または **Bookworm** バージョンをインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この [**ガイド**](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) に記載されている手順に従ってください。

:::note

[**OpenCV の使い方**](https://wiki.seeedstudio.com/ja/reTerminal_DM_opencv/) に関する以前のチュートリアルをぜひご覧ください。このチュートリアルはシリーズの続編として設計されています。このガイドは特に **Bullseye OS** と **Bookworm OS** 用です。インストール依存関係に注意してください。ここでは 2 つの異なる方法が記載されています。

:::

## TinyML

TinyMLは、軽量なモデルを最小限のリソースでエッジデバイス上で実行できるようにすることで、機械学習に革命をもたらします。物体検出の文脈では、TinyMLの主要なフレームワークであるTensorFlow Liteがモデルを効率化し、マイクロコントローラーや組み込みシステムのようなデバイスに展開できるようにします。この統合により、物体認識などのタスクにおいてリアルタイムのオンデバイス処理が可能となり、スマートセンサー、ウェアラブル、IoTデバイスなどのアプリケーションにおいて、常時クラウド接続を必要としないTinyMLと[**TensorFlow Lite**](https://www.tensorflow.org/lite)の組み合わせが理想的です。

### EfficientDet

[**EfficientDet**](https://arxiv.org/abs/1911.09070)は、エッジデバイス上での性能で際立つ非常に効率的かつ正確な物体検出モデルです。Googleによって開発されたEfficientDetは、モデルの精度と計算効率のバランスを最適化し、エッジデバイスやモバイルプラットフォームのようなリソース制約のある環境での展開に適しています。このモデルは、複合スケーリング手法を活用してモデルパラメータを効率的に拡張し、速度を犠牲にすることなく精度を向上させます。EfficientDetのアーキテクチャには、画像特徴を効果的に捉える特徴ネットワークと、モデルの精度と計算効率をバランスさせる複合スケーリング手法が含まれています。その成功は、軽量構造を維持しながら、さまざまな物体検出ベンチマークで印象的な性能を達成することにあります。これにより、エッジデバイス上でリアルタイムの物体検出を必要とするアプリケーションにおいて、EfficientDetは最適な選択肢となっています。

## Bullseye OSでコードを実行してみましょう。

正しいフォルダにいることを確認してください。そうでない場合は以下を実行してください。

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
 ```
依存関係とEfficientDetモデルをインストールしてください。これをすでに[**最初のチュートリアル**](https://wiki.seeedstudio.com/ja/Getting-start-opencv/)で完了している場合は、心配する必要はありません。

 ```sh
sh setup.sh
 ```
コードを実行します。
 ```sh
python3 detect_mod.py
 ```

## BookWorm OSでコードを実行してみましょう。

- **ステップ1** まず、仮想環境を作成する必要があります。

:::note

以前のOSバージョンでは、Pythonライブラリをpip（Pythonパッケージインストーラー）を使用してシステム全体に直接インストールすることができました。しかし、Bookworm以降のリリースでは変更がありました。インストール中の潜在的な問題を軽減するために、現在ではvenvを使用してPython仮想環境内にパッケージをインストールする必要があります。

:::

以下のコマンドを順番に実行すると、仮想環境が作成されます。

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```
- **ステップ2** 次に、このGitリポジトリをRaspberry Piの仮想環境にクローンします。

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

- **ステップ3** 次に、スクリプトを使用して必要なPythonパッケージを簡単にインストールし、EfficientDet-Liteモデルをダウンロードします。このフォルダに移動してください。

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection_bookworm
```

- **ステップ4** スクリプトは必要な依存関係をインストールし、このチュートリアルシリーズ用にTFLiteモデルをダウンロードします。

```sh
sh setup.sh
```

コードを実行します。
 ```sh
python3 detect_picam.py
 ```

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>