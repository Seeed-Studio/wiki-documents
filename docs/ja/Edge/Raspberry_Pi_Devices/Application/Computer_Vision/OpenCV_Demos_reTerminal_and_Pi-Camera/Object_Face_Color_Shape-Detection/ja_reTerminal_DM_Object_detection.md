---
description: reTerminalとPiカメラを使用したOpenCVによる物体検出
title: reTerminalとPiカメラによる物体検出
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Object Detection 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_DM_Object_detection
last_update:
  date: 12/7/2023
  author: Kasun Thushara
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif" /></center>

## はじめに

エッジコンピュータでの物体検出は、コンピュータビジョンにおいて重要な分野となっており、デバイスが自律的に周囲を認識し、反応することを可能にします。**EfficientDet**は、この分野における最先端の物体検出モデルです。**リソース効率を重視して設計されており、精度と計算要求のバランスを取ることで、処理能力が限られたエッジデバイスでの展開に特に適している**ことが特徴です。EfficientDetに代表されるエッジコンピュータでの物体検出は、スマート監視カメラや自動運転車からモノのインターネット（IoT）デバイスまで、様々なシナリオで応用されています。リアルタイムで複数の物体を識別・位置特定する能力により、エッジコンピューティングシステムの自律性と知能を向上させる重要な要素となっています。

## はじめに

このプロジェクトを開始する前に、ここで説明するようにハードウェアとソフトウェアを事前に準備する必要があります。

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

私たちのシリーズの続編として、[**OpenCV を始める**](https://wiki.seeedstudio.com/ja/reTerminal_DM_opencv/)に関する以前のチュートリアルをぜひご確認ください。このガイドは **Bullseye OS** と **Bookworm OS** 専用です。インストールの依存関係にご注意ください。ここでは2つの異なる方法が説明されています。

:::

## TinyML

TinyML は、最小限のリソースでエッジデバイス上で軽量モデルを実行できるようにすることで、機械学習に革命をもたらします。物体検出の文脈において、TinyML の主要フレームワークである TensorFlow Lite は、効率性のためにモデルを最適化し、マイクロコントローラーや組み込みシステムなどのデバイスにデプロイできるようにします。この統合により、物体認識などのタスクのリアルタイムなオンデバイス処理が可能になり、[**TensorFlow Lite**](https://www.tensorflow.org/lite) を使用した TinyML は、常時クラウド接続を必要とせずに、スマートセンサー、ウェアラブル、IoT デバイスでのアプリケーションに理想的です。

### EfficientDet

[**EfficientDet**](https://arxiv.org/abs/1911.09070) は、エッジデバイスでのパフォーマンスに優れた、非常に効率的で正確な物体検出モデルです。Google によって開発された EfficientDet は、モデルの精度と計算効率のバランスを最適化し、エッジデバイスやモバイルプラットフォームなどのリソース制約のある環境でのデプロイに適しています。複合スケーリング手法を活用してモデルパラメータを効率的にスケールアップし、速度を犠牲にすることなくより良い精度を実現します。EfficientDet のアーキテクチャには、画像特徴を効果的に捉えるための特徴ネットワークと、モデルの精度と計算効率のバランスを取るための複合スケーリング手法が含まれています。その成功は、軽量な構造を維持しながら、さまざまな物体検出ベンチマークで印象的なパフォーマンスを達成することにあり、エッジデバイスでのリアルタイム物体検出を必要とするアプリケーションにとって最適な選択肢となっています。

## Bullseye OS でコードを実行しましょう

正しいフォルダにいることを確認してください。そうでない場合は

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
 ```

依存関係とEfficientDetモデルをインストールしてください。[**最初のチュートリアル**](https://wiki.seeedstudio.com/ja/Getting-start-opencv/)でこのステップを既に完了している場合は、心配する必要はありません。

 ```sh
sh setup.sh
 ```

コードを実行する

 ```sh
python3 detect_mod.py
 ```

## BookWorm OSでコードを実行してみましょう

- **ステップ1** そのためには仮想環境を作成する必要があります。

:::note

以前のOSバージョンでは、PythonライブラリはPythonパッケージインストーラーであるpipを使用してシステム全体に直接インストールできました。しかし、Bookwormおよびそれ以降のリリースでは、変更が生じています。インストール中の潜在的な問題を軽減するため、現在はvenvを使用してPython仮想環境にpip経由でパッケージをインストールする必要があります。

:::

これらのコマンドを一つずつ実行すると、仮想環境が構築されます。

 ```sh
mkdir my_project
cd my_project
python -m venv --system-site-packages env
source env/bin/activate
 ```

- **ステップ 2** 次に、このGitリポジトリをRaspberry Pi仮想環境にクローンします

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

- **ステップ 3** 次に、私たちのスクリプトを使用して、必要なPythonパッケージを簡単にインストールし、EfficientDet-Liteモデルをダウンロードします。このフォルダに移動してください。

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection_bookworm
```

- **ステップ 3** スクリプトが必要な依存関係をインストールし、このチュートリアルシリーズ用のTFLiteモデルをダウンロードします。

```sh
sh setup.sh
```

コードを実行します

 ```sh
python3 detect_picam.py
 ```

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
