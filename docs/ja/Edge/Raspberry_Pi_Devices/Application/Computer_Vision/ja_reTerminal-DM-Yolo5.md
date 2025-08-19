---
description: Yolov5を使用して独自のデータセットをトレーニングし、reTerminal DMにデプロイする
title: Yolov5を使用して独自のデータセットをトレーニングし、reTerminal DMにデプロイする
keywords:
  - Edge
  - reTerminal DMアプリケーション
  - Embedded_ML
  - yolov5
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM-Yolo5
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/yolov5.gif" /></center>


## はじめに

物体検出はコンピュータビジョンの基本的な側面であり、画像内の物体を識別することを含みます。この技術は監視、医療、自動運転車など多くの分野で応用されています。シングルステージ物体検出器は、初期の領域提案ステージを必要とせずに、直接物体のカテゴリとバウンディングボックスの座標を予測することで、このタスクを簡素化する特定のモデルカテゴリです。この効率化されたアプローチは、特にリアルタイムアプリケーションで価値があります。特に、YOLO（You Only Look Once）モデルファミリーは、この効率性を示しており、精度を損なうことなく高速な物体検出を提供します。

## 始める前に
このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

### ハードウェアの準備

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
        <th>Coral USB Accelerator</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminaldm.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-With-Camera-p-5648.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ソフトウェアの準備

公式ウェブサイトから最新バージョンのRaspberry Pi 64ビットOSをインストールすることをお勧めします。新しいRaspbian OSをインストールしたい場合は、この[ガイド](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/)に従ってください。

### Roboflow

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow.png" alt="pir" width="200" height="auto"/></p>

[Roboflow](https://universe.roboflow.com/)は、コンピュータビジョンのための包括的なプラットフォームであり、コンピュータビジョンモデルの開発とデプロイプロセスを簡素化するための幅広いツールとサービスを提供します。その際立った特徴の1つは、注釈付きのカスタムデータセットに対する強力なサポートです。ユーザーは独自のデータセットを簡単にアップロードし、注釈付きでコンピュータビジョンモデルをトレーニングおよび微調整することができます。そのため、アカウントを作成してください。

### Ultralytics
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ultralytic.png" alt="pir" width="200" height="auto"/></p>

[Ultralytics](https://ultralytics.com/)は、コンピュータビジョンとディープラーニングを専門とする最先端のプラットフォームおよび研究機関です。特にYOLO（You Only Look Once）物体検出モデルファミリーの開発における貢献で知られています。Ultralyticsは、物体検出、画像分類などのための最先端ツールとオープンソースソフトウェアを提供し、研究者や開発者が高度なコンピュータビジョンを利用できるようにしています。革新と性能重視のソリューションへの取り組みにより、コンピュータビジョンコミュニティで注目と評価を集めており、ディープラーニングと視覚認識の可能性を追求する人々にとっての頼りになるリソースとなっています。

## Roboflowからデータセットを選択する

- **ステップ 1** 提供されたウェブサイトにアクセスし、検索機能を使用して希望のデータセットを見つけてください。[Roboflow](https://universe.roboflow.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow1.PNG" alt="pir" width="800" height="auto"/></p>

- **ステップ 2** データセットを選択したら、**Download this Dataset** をクリックしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow2.PNG" alt="pir" width="800" height="auto"/></p>

- **ステップ 3** YOLOv5のダウンロード形式を選択してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow3.PNG" alt="pir" width="400" height="auto"/></p>

- **ステップ 4** **show download code** を選択し、続行を押してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow4.PNG" alt="pir" width="400" height="auto"/></p>

- **ステップ 5** 「Jupyter」セクションにコードスニペットが表示されます。このスニペットをクリップボードにコピーしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow5.PNG" alt="pir" width="400" height="auto"/></p>

## カスタムデータセットをトレーニングする

- **ステップ 1** 提供されたGitHubリンクにアクセスし、**Open in Colab** をクリックしてください。[GitHub Link](https://github.com/KasunThushara/yoloV5n_RPI/tree/main)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/github.PNG" alt="pir" width="800" height="auto"/></p>

<a target="_blank" href="https://colab.research.google.com/github/KasunThushara/yoloV5n_RPI/blob/main/yolov5_reTerminal.ipynb">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

:::note

Raspberry Piのようなリソース制約のあるデバイスにモデルをデプロイする前に、モデルの変換と量子化を行うことが重要です。このプロセスには、PyTorchモデル（.pt形式）をTensorFlow Lite（TFLite）モデルに変換し、特にuint8データ型に量子化する手順が含まれます。このColabノートブックを使用して、カスタムデータセットをトレーニングし、TFLiteモデルに変換することができます。Colab環境内でのトレーニング手順をステップバイステップで説明していますので、これに従って**data.yaml**ファイルと**best-int8.tflite**ファイルを取得し、このWikiに戻って次の手順を進めてください。

:::

## reTerminal DMを準備する

- **ステップ 1** ターミナルで以下のコマンドを1つずつ実行してください。

```sh
sudo git clone https://github.com/ultralytics/yolov5
cd yolov5
pip install -r requirements.txt 
sudo apt-get install python3-tflite-runtime
```
- **ステップ 2** Data.yamlファイルとbest-int8.tfliteファイルをyolov5フォルダ内に貼り付けてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminal.PNG" alt="pir" width="800" height="auto"/></p>

## detect.pyを使用した推論

- **ステップ 1** reTerminalを開き、yolov5フォルダに移動してください。

```sh
cd yolov5
```
- **ステップ 2** detect.pyを使用して推論を行います。

```sh
python detect.py --weight best-int8.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```
:::note
公式のUltralytics GitHubサイト [https://github.com/ultralytics/yolov5](https://github.com/ultralytics/yolov5) を参照して、`detect.py`スクリプトの使用方法や、YOLOv5モデルに画像やビデオストリームを入力するために利用できるさまざまなソースについて学ぶことができます。
:::

## Edge TPUでの実行

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif" /></center>

YOLOv5nモデルをEdge TPU上で展開することは、最先端の物体検出技術と高性能なエッジコンピューティングのダイナミックな融合を表しています。この統合により、リソースが限られた環境でのリアルタイム物体認識など、エッジAIアプリケーションが可能となり、セキュリティ監視、小売分析、自律システムなどのタスクにおいて非常に価値のあるものとなります。YOLOv5nの効率的な設計はEdge TPUのハードウェアアクセラレーションと完璧に調和し、ネットワークのエッジで低遅延かつリアルタイム処理が求められる場面で迅速かつ正確な物体検出を実現します。

- detect.pyを使用した推論

```sh
python detect.py --weight best-int8_edgetpu.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```

## リソース

- **[Webページ]** [Yolov5公式ドキュメント](https://github.com/ultralytics/yolov5)

- **[Webページ]** [Roboflow](https://universe.roboflow.com/)

# 技術サポート

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>