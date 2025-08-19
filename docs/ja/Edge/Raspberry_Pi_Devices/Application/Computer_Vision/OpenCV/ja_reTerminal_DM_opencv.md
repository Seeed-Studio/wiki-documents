---
description: reTerminal と Pi カメラを使用した OpenCV の入門
title: reTerminal と Pi カメラを使用した OpenCV の入門
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_DM_opencv
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

このチュートリアルでは、**Raspberry Pi OS Bullseye または BookWorm OS** を新規インストールした reTerminal をセットアップする手順を説明します。目標は、**PiCam** を操作し、**OpenCV** ライブラリを使用して画像処理やディープラーニングのアクティビティを実行することです。

## OpenCV

**OpenCV (Open Source Computer Vision Library)**: OpenCV は、リアルタイムのコンピュータビジョンタスクのために設計された強力なオープンソースのコンピュータビジョンライブラリです。画像処理、物体検出、顔認識などのタスクに対応する包括的なツールと機能を提供します。学術界や産業界で広く使用されており、さまざまなプログラミング言語をサポートしているため、異なるプラットフォームでのコンピュータビジョンアプリケーションにおいて柔軟性の高い選択肢となっています。その柔軟性と豊富なドキュメントにより、コンピュータビジョン開発に携わるすべての人にとって貴重なリソースとなっています。

## 始める前に

このプロジェクトを開始する前に、以下に記載されているようにハードウェアとソフトウェアを事前に準備する必要があります。

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

公式ウェブサイトから **Bullseye** バージョンまたは **Bookworm** バージョンの Raspberry Pi 64 ビット OS をインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この [**ガイド**](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) に記載されている手順に従ってください。

## OpenCVのインストール

詳細なインストール手順をスキップしても構いません。簡略化された手順をご用意しています。**Bullseye OS**を使用している場合は、以下の手順に従ってください：

- **ステップ 1** まず、このGitリポジトリをRaspberry Piにクローンします。

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
```

- **ステップ 2** 次に、スクリプトを使用して必要なPythonパッケージを簡単にインストールし、EfficientDet-Liteモデルをダウンロードします。このフォルダに移動してください。

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam/ObjectDetection
```

- **ステップ 3** スクリプトは必要な依存関係をインストールし、このチュートリアルシリーズ用のTFLiteモデルをダウンロードします。

```sh
sh setup.sh
```

**Bookworm OS**を使用している場合は、以下の手順に従ってください：

- **ステップ 1** ターミナルで以下のコマンドを実行してインストールします。

```sh
sudo apt-get install libopencv-dev python3-opencv
```

- **ステップ 2** 次に、このGitリポジトリをRaspberry Piにクローンします。

```sh
git clone https://github.com/Seeed-Studio/Seeed_Python_ReTerminal
```

## ビデオストリームを取得する

新しいターミナルウィンドウで**Opencv_and_piCam**フォルダに移動します。

```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
```

このチュートリアルでは、PiCamとOpenCVを使用してreTerminalで「Hello World」プログラムを開始します。クローンしたリポジトリ内に**captureimages.py**ファイルがあります。ライブビデオストリームを探索し、'q'キーを押すとストリームが終了します。Thonny IDEを使用してPythonスクリプトを実行することもできます。

```sh
python captureimages.py
```

以下のようなビデオストリームが表示されます。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/videostream.gif" /></center>

参考のために、コードスニペット全体を以下に提供します。

```python
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

ここでは、PiCamとOpenCVを使用してReTerminalで静止画像を撮影します。クローンしたリポジトリ内に**saveimage.py**ファイルがあります。ライブビデオをストリームし、's'キーを押すと写真が撮影されます。Thonny IDEを使用してPythonスクリプトを実行することもできます。

```sh
python saveimage.py
```

同じディレクトリ内に撮影した画像が保存されます。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/capturedimage.PNG" /></center>

参考のために、コードスニペット全体を以下に提供します。

```python
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

        # キーが押されたときに画像を保存する（例: 's'）
        key = cv2.waitKey(1)
        if key == ord('s'):
            # OpenCVを使用して画像を保存
            cv2.imwrite("captured_image.jpg", im)
            print("画像を保存しました！")

        # 'q'キーが押されたときにループを終了
        elif key == ord('q'):
            break

finally:
    # リソースを解放
    cv2.destroyAllWindows()
    picam2.stop()
    picam2.close()
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