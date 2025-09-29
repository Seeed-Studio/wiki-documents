---
description: Yolov5で独自のデータセットを訓練し、reTerminal DMにデプロイする
title: Yolov5で独自のデータセットを訓練し、reTerminal DMにデプロイする
keywords:
  - Edge
  - reTerminal DM Application
  - Embedded_ML
  - yolov5
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal-DM-Yolo5
last_update:
  date: 9/7/2023
  author: Kasun Thushara
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/yolov5.gif" /></center>

## はじめに

コンピュータビジョンの基本的な側面である物体検出は、画像内の物体を識別することを含み、監視、ヘルスケア、自動運転車などの多数の分野で応用されています。単段階物体検出器は、初期の領域提案段階を必要とせずに、物体カテゴリと境界ボックス座標を直接予測することでこのタスクを簡素化するモデルの特定のカテゴリです。この合理化されたアプローチは、特にリアルタイムアプリケーションにおいて価値があります。特に、YOLO（You Only Look Once）ファミリーのモデルは、この効率性を例示し、精度を犠牲にすることなく高速な物体検出を提供します。

## はじめに

このプロジェクトを開始する前に、ここで説明されているように、事前にハードウェアとソフトウェアを準備する必要があります。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ソフトウェアの準備

公式ウェブサイトから最新版のRaspberry Pi 64ビットOSをインストールすることをお勧めします。新しいRaspbian OSをインストールしたい場合は、この[ガイド](https://wiki.seeedstudio.com/ja/reterminal-dm-flash-OS/)に記載されている手順に従ってください。

### Roboflow

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow.png" alt="pir" width="200" height="auto"/></p>

[Roboflow](https://universe.roboflow.com/)は、コンピュータビジョンモデルの開発とデプロイメントプロセスを効率化するための幅広いツールとサービスを提供する包括的なコンピュータビジョンプラットフォームです。その際立った機能の一つは、アノテーション付きカスタムデータセットに対する堅牢なサポートです。ユーザーは、アノテーション付きの独自のデータセットを簡単にアップロードして、コンピュータビジョンモデルをトレーニングおよび微調整できます。そのため、このプラットフォームでアカウントを作成してください。

### Ultralytics

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ultralytic.png" alt="pir" width="200" height="auto"/></p>

[Ultralytics](https://ultralytics.com/)は、コンピュータビジョンと深層学習を専門とする最先端のプラットフォームおよび研究組織です。特にYOLO（You Only Look Once）ファミリーの物体検出モデル（YOLOv5など）の開発における貢献で有名です。Ultralyticsは、物体検出、画像分類などのための最先端のツールとオープンソースソフトウェアを提供し、高度なコンピュータビジョンを研究者や開発者にとってアクセスしやすいものにしています。革新と性能重視のソリューションへの献身は、コンピュータビジョンコミュニティで大きな注目と称賛を集めており、Ultralyticsは深層学習と視覚認識の領域で可能性の境界を押し広げようとする人々にとって頼りになるリソースとなっています。

## Roboflowからデータセットを選択する

- **ステップ1** 提供されたウェブサイトにアクセスし、検索機能を使用してお好みのデータセットに移動してください。[Roboflow](https://universe.roboflow.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow1.PNG" alt="pir" width="800" height="auto"/></p>

- **ステップ2** データセットを選択した後、**Download this Dataset**をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow2.PNG" alt="pir" width="800" height="auto"/></p>

- **ステップ3** YOLOv5ダウンロード形式を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow3.PNG" alt="pir" width="400" height="auto"/></p>

- **ステップ4** **show download code**を選択し、Continueを押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow4.PNG" alt="pir" width="400" height="auto"/></p>

- **ステップ5** 「Jupyter」セクションで、コードスニペットが見つかります。このスニペットをクリップボードにコピーしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow5.PNG" alt="pir" width="400" height="auto"/></p>

## カスタムデータセットの訓練

- **ステップ 1** 提供されたgithubリンクにアクセスし、**Open in Colab**をクリックしてください [Github Link](https://github.com/KasunThushara/yoloV5n_RPI/tree/main)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/github.PNG" alt="pir" width="800" height="auto"/></p>

<a target="_blank" href="https://colab.research.google.com/github/KasunThushara/yoloV5n_RPI/blob/main/yolov5_reTerminal.ipynb">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

:::note

Raspberry Piのようなリソース制約のあるデバイスにモデルをデプロイする前に、最適なパフォーマンスを確保するためにモデル変換と量子化を実行することが重要です。このプロセスには複数のステップが含まれます：PyTorchモデル（.pt形式）をTensorFlow Lite（TFLite）モデルに量子化と共に変換し、特にuint8データ型に変換します。このColabノートブックを使用してカスタムデータセットを訓練し、TFLiteモデルに変換することができます。Colab環境内での訓練のためのステップバイステップのプロセスを概説しました。これらの手順に従い、**data.yaml**ファイルと**best-int8.tflite**ファイルを取得し、さらなるガイダンスのためにこのwikiに戻ってください。

:::

## reTerminal DMの準備

- **ステップ 1** ターミナルで以下のコマンドを一つずつ実行してください。

```sh
sudo git clone https://github.com/ultralytics/yolov5
cd yolov5
pip install -r requirements.txt 
sudo apt-get install python3-tflite-runtime
```

- **ステップ 2** Data.yamlファイルとbest-int8.tfliteファイルをyolov5フォルダ内に貼り付けます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminal.PNG" alt="pir" width="800" height="auto"/></p>

## detect.pyによる推論

- **ステップ 1** reterminalを開き、yolov5フォルダに移動します

```sh
cd yolov5
```

- **ステップ 2** detect.py で推論を実行

```sh
python detect.py --weight best-int8.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```

:::note
公式のUltralyticsのGitHubサイト（[https://github.com/ultralytics/yolov5](https://github.com/ultralytics/yolov5)）を探索して、`detect.py`スクリプトの使用方法を学び、YOLOv5モデルに画像やビデオストリームを供給するために利用できる様々なソースを発見することができます。
:::

## Edge TPUでの実行

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif" /></center>

Edge TPU上でのYOLOv5nモデルの展開は、最先端の物体検出と高性能エッジコンピューティングの間の動的な相乗効果を表しています。この融合により、リソース制約のある環境でのリアルタイム物体認識などのエッジAIアプリケーションが強化され、セキュリティ監視、小売分析、自律システムなどのタスクにとって非常に価値のあるものとなります。YOLOv5nの効率的な設計は、Edge TPUのハードウェアアクセラレーションと完璧に調和し、低遅延とリアルタイム処理が最重要であるネットワークのエッジで、迅速かつ正確な物体検出を実現します。

- detect.pyによる推論

```sh
python detect.py --weight best-int8_edgetpu.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```

## リソース

- **[Web Page]** [Yolov5 公式ドキュメント](https://github.com/ultralytics/yolov5)

- **[Web Page]** [Roboflow](https://universe.roboflow.com/)

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
