---
description: reTerminal と Pi カメラを使用した OpenCV による顔検出
title: reTerminal と Pi カメラを使用した OpenCV による顔検出
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Face-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_DM_Face_detection
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" /></center>

## はじめに

**Haar Cascade メソッド**を使用した顔検出は、機械学習モデルを活用して顔の特徴を認識するコンピュータビジョンの重要な技術です。この方法は、Haar様特徴に基づいて訓練された分類器のカスケードを利用し、画像やビデオストリーム内の顔を迅速かつ正確に識別します。この技術は、**セキュリティや認証目的の顔認識技術、ビデオ監視システム、さらには写真ソフトウェアでの顔検出に基づく自動タグ付けやソート**など、さまざまな分野で広く応用されています。Haar Cascade メソッドは計算効率が高いため、**リアルタイムの顔検出**に適しており、顔分析および識別技術の進歩に大きく貢献しています。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

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

公式ウェブサイトから Raspberry Pi 64 ビット OS の **Bullesye** または **Bullseye** バージョンをインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この [**ガイド**](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) に記載されている手順に従ってください。

:::note

OpenCV の [**入門チュートリアル**](https://wiki.seeedstudio.com/ja/reTerminal_DM_opencv/) を事前に確認することを強くお勧めします。このチュートリアルはシリーズの続編として位置付けられています。

:::

## Haar Cascade メソッドとは？

OpenCVにおけるHaar Cascadeメソッドは、機械学習に基づいた顔検出アルゴリズムです。このメソッドは、ポジティブ画像とネガティブ画像を使用してカスケード分類器を訓練することで、顔を示すパターンや特徴を認識できるようになります。カスケードは複数のステージで構成されており、それぞれのステージには弱い分類器が含まれています。これらの分類器は段階的に顔以外の領域を排除し、効率的な検出プロセスを実現します。Haar-like特徴は、暗い領域と明るい領域の矩形パターンに似ており、顔などのオブジェクトを認識する基盤となります。訓練が完了したカスケードは、画像やビデオフレームに適用して迅速に顔を検出することができます。このメソッドはその精度と速度の高さから広く利用されており、リアルタイムの顔検出や認識を含むさまざまな用途で人気があります。

さらに詳しく知りたい場合は、こちらの[**ドキュメント**](https://docs.opencv.org/4.x/db/d28/tutorial_cascade_classifier.html)をご覧ください。

### コードを実行してみましょう。

正しいフォルダにいることを確認してください。もしそうでない場合は以下を実行してください。

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
 ```

または、Thonny IDEを使用してPythonスクリプトを実行することもできます。

 ```sh
python facedetection_pi.py
 ```

以下に、参考のためにコードスニペット全体を提供します。

```python
import cv2
from picamera2 import Picamera2

# 顔検出用の事前学習済みHaar Cascade分類器をロード
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

picam2 = Picamera2()
picam2.preview_configuration.main.size = (1280, 720)
picam2.preview_configuration.main.format = "RGB888"
picam2.preview_configuration.align()
picam2.configure("preview")
picam2.start()

try:
    while True:
        im = picam2.capture_array()
        cv2.imshow("Camera", im)

        # 顔検出のために画像をグレースケールに変換
        gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)

        # 顔検出を実行
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

        # 検出された顔の周りに矩形を描画
        for (x, y, w, h) in faces:
            cv2.rectangle(im, (x, y), (x+w, y+h), (255, 0, 0), 2)

        # 顔検出結果を表示
        cv2.imshow("Face Detection", im)

        # 'q'キーが押されたらループを終了
        if cv2.waitKey(1) == ord('q'):
            break

finally:
    # リソースを解放
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
```

さらに多くのHaar Cascade XMLファイルを試したい場合は、こちらの[**リンク**](https://github.com/opencv/opencv/tree/master/data/haarcascades)をご覧ください。

## 応用例

Haarcascadeは元々リアルタイムの顔検出のために設計されましたが、現代の課題に対応するために進化を遂げています。革新者たちはその機能を拡張し、**顔マスク検出**を可能にしました。これは公衆衛生対策において重要です。さらに、この技術は**ナンバープレート検出**にも最適化されており、特に高度なハードウェアが不足している環境で有用です。これらの適応は、Haarcascadeがコンピュータビジョンのさまざまなニーズに対応する上での汎用性と効率性を示しています。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/FACEMASK.gif" /></center>

## 技術サポート

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>