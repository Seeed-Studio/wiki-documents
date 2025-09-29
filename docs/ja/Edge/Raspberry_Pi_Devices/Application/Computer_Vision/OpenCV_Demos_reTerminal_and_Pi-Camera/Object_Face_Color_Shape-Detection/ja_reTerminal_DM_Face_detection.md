---
description: reTerminalとPiカメラを使用したOpenCVによる顔検出
title: reTerminalとPiカメラを使用したOpenCVによる顔検出
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Face-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_DM_Face_detection
last_update:
  date: 11/7/2023
  author: Kasun Thushara
---

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/facedetection.gif" /></center>

## はじめに

**Haar Cascade法**を使用した顔検出は、コンピュータビジョンにおける重要な技術であり、機械学習モデルを使用して顔の特徴を認識します。この手法は、Haar様特徴で訓練されたカスケード分類器に依存し、画像やビデオストリーム内の顔を迅速かつ正確に識別することを可能にします。その幅広い応用は、**セキュリティと認証目的の顔認識技術、ビデオ監視システム、さらには検出された顔に基づく自動タグ付けと分類のための写真ソフトウェア**など、多様な分野にわたります。Haar Cascade法は、その計算効率性により特に価値があり、**様々な文脈でのリアルタイム顔検出に適している**ため、顔分析と識別技術の進歩に大きく貢献しています。

## はじめに

このプロジェクトを開始する前に、ここで説明されているように、ハードウェアとソフトウェアを事前に準備する必要があります。

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

公式ウェブサイトから **Bullesye** または **Bullseye** バージョンの Raspberry Pi 64 bit OS をインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この[**ガイド**](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)に記載されている手順に従ってください。

:::note

このチュートリアルは私たちのシリーズの続編として機能するため、[**OpenCV を始める**](https://wiki.seeedstudio.com/ja/reTerminal_DM_opencv/)に関する以前のチュートリアルをぜひご確認いただくことを強くお勧めします。

:::

## Haar Cascade 手法とは？

OpenCV において、Haar Cascade 手法は機械学習に基づく顔検出アルゴリズムです。この手法は、正の画像と負の画像でカスケード分類器を訓練することで動作し、顔を示すパターンや特徴を認識できるようになります。カスケードは複数の段階で構成され、各段階には弱分類器のセットがあり、顔以外の領域を段階的に除去することで、検出プロセスを効率的にします。明暗領域の矩形パターンに似た Haar 様特徴が、顔などのオブジェクトを認識するための基盤として機能します。一度訓練されると、カスケードを画像やビデオフレームに適用して顔を迅速に検出できます。この手法は精度と速度で広く使用されており、リアルタイム顔検出や認識を含む様々なアプリケーションで人気の選択肢となっています。

詳しく学びたい場合は、この[**ドキュメント**](https://docs.opencv.org/4.x/db/d28/tutorial_cascade_classifier.html)をご覧ください。

### コードを実行してみましょう

正しいフォルダにいることを確認してください。そうでない場合は

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```

その後、またはThonny IDEを使用してPythonスクリプトを実行することもできます。

 ```sh
python facedetection_pi.py
 ```

参考として、便宜上完全なコードスニペットを提供します。

```sh
import cv2
from picamera2 import Picamera2

# Load the pre-trained Haar Cascade classifier for face detection
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

        # Convert the image to grayscale for face detection
        gray = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY)

        # Perform face detection
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

        # Draw rectangles around the detected faces
        for (x, y, w, h) in faces:
            cv2.rectangle(im, (x, y), (x+w, y+h), (255, 0, 0), 2)

        # Display the image with face detection
        cv2.imshow("Face Detection", im)

        # Break the loop when 'q' is pressed
        if cv2.waitKey(1) == ord('q'):
            break

finally:
    # Release resources
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
```

より多くのhaas cascades xmlファイルを見つけて試してみたい場合は、この[**リンク**](https://github.com/opencv/opencv/tree/master/data/haarcascades)をご覧ください。

## アプリケーション

元々リアルタイム顔検出用に設計されたHaarcascadeは、現代の課題に対応するために進歩を遂げています。革新者たちはその機能を拡張し、公衆衛生対策に重要な**フェイスマスク検出**を含めるようになりました。さらに、この技術は**ナンバープレート検出**に最適化されており、高度なハードウェアが不足している低リソース環境で特に価値があります。これらの適応は、コンピュータビジョンアプリケーション内の多様なニーズに対応するHaarcascadeの汎用性と効率性を実証しています。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/FACEMASK.gif" /></center>

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
