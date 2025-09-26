---
description: reTerminalとPiカメラをOpenCVで始める
title: reTerminalとPiカメラをOpenCVで始める
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_DM_opencv
last_update:
  date: 11/7/2023
  author: Kasun Thushara
---

## はじめに

このチュートリアルでは、**新しくインストールしたRaspberry Pi OS BullseyeまたはBookWorm OS**でreTerminalをセットアップするプロセスをガイドします。私たちの目標は、**PiCam**と相互作用し、**OpenCV**ライブラリを使用して画像処理とディープラーニング活動を実行することです。

## OpenCV

**OpenCV (Open Source Computer Vision Library)**: OpenCVは、リアルタイムコンピュータビジョンタスク用に設計された強力でオープンソースのコンピュータビジョンライブラリです。画像や動画を扱うための包括的なツールと機能のセットを提供し、画像処理、物体検出、顔認識などのタスクのソリューションを提供します。学術界と産業界の両方で広く使用されているOpenCVは、さまざまなプログラミング言語をサポートしており、異なるプラットフォーム間でのコンピュータビジョンアプリケーションにとって汎用的な選択肢となっています。その柔軟性と豊富なドキュメントにより、コンピュータビジョン開発に携わる誰にとっても貴重なリソースとなっています。

## 始める

このプロジェクトを開始する前に、ここで説明されているように、事前にハードウェアとソフトウェアを準備する必要があります。

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

公式ウェブサイトから Raspberry Pi 64 bit OS の **Bullseye** バージョンまたは **Bookworm** バージョンをインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この[**ガイド**](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)に記載されている手順に従ってください。

## OpenCV のインストール

詳細なインストールプロセスはスキップしても構いません。ショートカットをご用意しています。**Bullseye OS** を使用している場合は、以下の簡単な手順に従ってください：

- **ステップ 1** まず、次のようにこの Git リポジトリを Raspberry Pi にクローンします

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

- **ステップ 2** 次に、私たちのスクリプトを使用して、必要なPythonパッケージを簡単にインストールし、EfficientDet-Liteモデルをダウンロードします。このフォルダに移動してください。

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
```

- **ステップ 3** このスクリプトは必要な依存関係をインストールし、このチュートリアルシリーズ用のTFLiteモデルをダウンロードします。

```sh
sh setup.sh
```

**Bookworm OS**を使用している場合は、以下の手順に従ってください：

- **ステップ 1** ターミナルで以下のコマンドを実行してインストールします

```sh
sudo apt-get install libopencv-dev python3-opencv
```

- **ステップ 2** 次に、このGitリポジトリを以下のようにRaspberry Piにクローンします

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
 ```

## ビデオストリームを取得する

新しいターミナルウィンドウで **Opencv_and_piCam** に移動します

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
 ```

このチュートリアルでは、reTerminal上でPiCamとOpenCVを使用した「Hello World」プログラムから始めます。クローンしたリポジトリ内で**captureimages.py**ファイルを見つけることができます。ライブビデオストリームを探索し、「q」を押すとストリームが正常に停止します。Thonny IDEを使用してPythonスクリプトを実行することもできます。

```sh
python captureimages.py
```

以下のようなビデオストリームが表示されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" /></center>

参考のため、便宜上完全なコードスニペットを提供します。

```sh
import cv2
from picamera2 import Picamera2
picam2 = Picamera2()
picam2.preview_configuration.main.size = (1280,720)
picam2.preview_configuration.main.format = "RGB888"
picam2.preview_configuration.align()
picam2.configure("preview")
picam2.start()
while True:
    im= picam2.capture_array()
    cv2.imshow("Camera", im)
    if cv2.waitKey(1)==ord('q'):
        break
cv2.destroyAllWindows()
```

## 写真を撮影して保存する

ここでは、ReTerminal上でPiCamとOpenCVを使用して静止画像を撮影します。クローンしたリポジトリ内の**saveimage.py**ファイルを見つけてください。ライブビデオをストリーミングし、's'を押すと写真が撮影されます。Thonny IDEを使用してPythonスクリプトを実行することもできます。

```sh
python saveimage.py
```

同じディレクトリにキャプチャされた画像が見つかります。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/capturedimage.PNG" /></center>

参考のため、便宜上完全なコードスニペットを提供します。

```sh
import cv2
from picamera2 import Picamera2

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

        # Save an image when a key is pressed (e.g., 's')
        key = cv2.waitKey(1)
        if key == ord('s'):
            # Save the image using OpenCV
            cv2.imwrite("captured_image.jpg", im)
            print("Image saved!")

        # Exit the loop when 'q' is pressed
        elif key == ord('q'):
            break

finally:
    # Release resources
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
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
