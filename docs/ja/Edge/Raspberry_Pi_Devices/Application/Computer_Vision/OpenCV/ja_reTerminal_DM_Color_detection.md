---
description: reTerminal と Pi カメラを使用した OpenCV による色検出
title: reTerminal と Pi カメラを使用した OpenCV による色検出
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Color-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_DM_Color_detection
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" /></center>

## はじめに

色検出はコンピュータビジョンの重要な要素であり、デジタル画像や動画内の色を識別・分析するプロセスを指します。幅広い産業で応用されており、**ロボット工学における物体認識、製造業での品質管理、さらには芸術作品の修復**にも役立っています。色検出のアルゴリズムは技術の進歩に寄与し、**自動運転車、医療画像処理、映画や写真の視覚美学**などの分野に影響を与えています。つまり、色検出は視覚的な世界を解釈し、意味のある方法で相互作用する能力を向上させる多用途なツールです。

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

公式ウェブサイトから Raspberry Pi 64 ビット OS の **Bullseye** または **Bookworm** バージョンをインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この [**ガイド**](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) に従ってください。

:::note

このチュートリアルはシリーズの続編として提供されているため、[**OpenCV の使い方**](https://wiki.seeedstudio.com/ja/reTerminal_DM_opencv/) に関する以前のチュートリアルをぜひご覧ください。

:::

## OpenCVでの色空間の探求

色空間は画像処理の基本であり、OpenCVはさまざまな色空間をサポートしています。それぞれが独自の目的を持っています。ここでは、OpenCVで一般的に使用される3つの色空間、CMYK、BGR、HSVについて詳しく見ていきます。

### CMYK色空間
CMYK（シアン、マゼンタ、イエロー、キー/ブラック）は、減法混色の色空間で、主にカラープリントで使用されます。
色は、白色光からシアン、マゼンタ、イエロー、ブラックの割合を引くことで生成されます。

### BGR色空間

OpenCVのデフォルトの色空間はRGBですが、内部的にはBGR（ブルー、グリーン、レッド）として色を格納します。
BGRは加法混色モデルであり、ブルー、グリーン、レッドの強度を組み合わせることでさまざまな色合いを形成します。

**コンポーネントの範囲:**

- ブルー (0-255): 青色の強度。
- グリーン (0-255): 緑色の強度。
- レッド (0-255): 赤色の強度。

### HSV色空間
HSV（色相、彩度、明度）は、RGBの色点から派生した円筒モデルで色を表現します。
これは人間の色の知覚を模倣しており、色相、彩度、明度のコンポーネントで構成されています。

**コンポーネントの範囲:**

- 色相 (0-179): 色の種類（度数）。
- 彩度 (0-255): 色の鮮やかさや強度。
- 明度 (0-255): 色の明るさ。

## なぜHSVが色検出問題で重要なのか？

HSV（色相、彩度、明度）は、色情報を効果的に分離できるため、色検出タスクにおいて重要です。RGBやBGRとは異なり、HSVは色の種類（色相）をその強度（彩度）や明るさ（明度）から分離します。これにより、より直感的な表現が可能になります。この分離は照明の変化に対して堅牢であり、色に基づくセグメンテーションが照明条件の変化に対して影響を受けにくくなります。さらに、HSVでの自然な色の表現は、色の閾値を定義するプロセスを簡素化し、画像内の特定のオブジェクトや領域を識別するための正確な基準を提供します。色に基づくオブジェクト追跡やセグメンテーションなどのコンピュータビジョンタスクで広く使用されており、正確で信頼性の高い結果を達成するための重要性が際立っています。

## コードスニペットの使用方法

最初のコードでは、トラックバーをインタラクティブに調整することで、最適な色の閾値を視覚的に特定する柔軟性があります。これらのトラックバーを操作することで、興味のある特定の色を特定し、対応するHSVの最小値と最大値を記録できます。このハンズオンアプローチは、色のパラメータを微調整するための直感的な方法を提供し、より個別化された正確な色識別体験を保証します。

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
 ```

次に以下を実行します：
 ```sh
python hsvtest.py
 ```
Thonny IDEを使用してPythonスクリプトを実行することもできます。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colortrack.PNG" /></center>

以下はHSV調整用のコードです：

```python
import cv2
import numpy as np

def empty(a):
    pass

def stackImages(scale,imgArray):
    rows = len(imgArray)
    cols = len(imgArray[0])
    rowsAvailable = isinstance(imgArray[0], list)
    width = imgArray[0][0].shape[1]
    height = imgArray[0][0].shape[0]
    if rowsAvailable:
        for x in range (0, rows):
            for y in range(0, cols):
                if imgArray[x][y].shape[:2] == imgArray[0][0].shape[:2]:
                    imgArray[x][y] = cv2.resize(imgArray[x][y], (0, 0), None, scale, scale)
                else:
                    imgArray[x][y] = cv2.resize(imgArray[x][y], (imgArray[0][0].shape[1], imgArray[0][0].shape[0]), None, scale, scale)
                if len(imgArray[x][y].shape) == 2: imgArray[x][y]= cv2.cvtColor( imgArray[x][y], cv2.COLOR_GRAY2BGR)
        imageBlank = np.zeros((height, width, 3), np.uint8)
        hor = [imageBlank]*rows
        hor_con = [imageBlank]*rows
        for x in range(0, rows):
            hor[x] = np.hstack(imgArray[x])
        ver = np.vstack(hor)
    else:
        for x in range(0, rows):
            if imgArray[x].shape[:2] == imgArray[0].shape[:2]:
                imgArray[x] = cv2.resize(imgArray[x], (0, 0), None, scale, scale)
            else:
                imgArray[x] = cv2.resize(imgArray[x], (imgArray[0].shape[1], imgArray[0].shape[0]), None,scale, scale)
            if len(imgArray[x].shape) == 2: imgArray[x] = cv2.cvtColor(imgArray[x], cv2.COLOR_GRAY2BGR)
        hor= np.hstack(imgArray)
        ver = hor
    return ver

path = 'captured_image.jpg'
cv2.namedWindow("TrackBars")
cv2.resizeWindow("TrackBars",640,240)
cv2.createTrackbar("Hue Min","TrackBars",0,179,empty)
cv2.createTrackbar("Hue Max","TrackBars",19,179,empty)
cv2.createTrackbar("Sat Min","TrackBars",110,255,empty)
cv2.createTrackbar("Sat Max","TrackBars",240,255,empty)
cv2.createTrackbar("Val Min","TrackBars",153,255,empty)
cv2.createTrackbar("Val Max","TrackBars",255,255,empty)

while True:
    img = cv2.imread(path)
    img= cv2.resize(img, (300, 300))
    imgHSV = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)
    h_min = cv2.getTrackbarPos("Hue Min","TrackBars")
    h_max = cv2.getTrackbarPos("Hue Max", "TrackBars")
    s_min = cv2.getTrackbarPos("Sat Min", "TrackBars")
    s_max = cv2.getTrackbarPos("Sat Max", "TrackBars")
    v_min = cv2.getTrackbarPos("Val Min", "TrackBars")
    v_max = cv2.getTrackbarPos("Val Max", "TrackBars")
    print(h_min,h_max,s_min,s_max,v_min,v_max)
    lower = np.array([h_min,s_min,v_min])
    upper = np.array([h_max,s_max,v_max])
    mask = cv2.inRange(imgHSV,lower,upper)
    imgResult = cv2.bitwise_and(img,img,mask=mask)

    cv2.imshow("Original",img)
    cv2.imshow("HSV",imgHSV)
    cv2.imshow("Mask", mask)
    cv2.imshow("Result", imgResult)

    #imgStack = stackImages(0.6,([img,imgHSV],[mask,imgResult]))
    #cv2.imshow("Stacked Images", imgStack)

    cv2.waitKey(1)
```

トラックバーを使用してHSVの最小値と最大値を特定したら、これらの数値を2番目のスニペット内で対応する**色名**とその識別範囲に置き換えることができます。

 ```sh
python colordetector.py
 ```

以下は色検出用の完全なコードです：

```python
import cv2
import numpy as np
from picamera2 import Picamera2

Your_color = "Green"

def detect_single_color(imageFrame, color_name, lower_range, upper_range, color_display):
    hsvFrame = cv2.cvtColor(imageFrame, cv2.COLOR_BGR2HSV)
    color_mask = cv2.inRange(hsvFrame, lower_range, upper_range)

    kernel = np.ones((5, 5), "uint8")
    color_mask = cv2.dilate(color_mask, kernel)
    result = cv2.bitwise_and(imageFrame, imageFrame, mask=color_mask)

    contours, hierarchy = cv2.findContours(color_mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for pic, contour in enumerate(contours):
        area = cv2.contourArea(contour)
        if area > 800:
            x, y, w, h = cv2.boundingRect(contour)
            imageFrame = cv2.rectangle(imageFrame, (x, y), (x + w, y + h), color_display, 2)
            cv2.putText(imageFrame, f"{color_name} Colour", (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1.0, color_display)

    return imageFrame

# Initialize PiCamera
picam2 = Picamera2()
picam2.preview_configuration.main.size = (1280, 720)
picam2.preview_configuration.main.format = "RGB888"
picam2.preview_configuration.align()
picam2.configure("preview")
picam2.start()

# Define your color range
my_color_lower = np.array([49, 105, 0], np.uint8)
my_color_upper = np.array([94, 255, 255], np.uint8)

# Start a while loop
while True:
    im = picam2.capture_array()

    # Example: Detecting your specified color
    result_frame = detect_single_color(im, Your_color, my_color_lower, my_color_upper, (0, 255, 0))  # Change the color display accordingly

    # Program Termination
    cv2.imshow("Single Color Detection in Real-Time", result_frame)
    if cv2.waitKey(10) & 0xFF == ord('q'):
        picam2.stop()
        cv2.destroyAllWindows()
        break
```


## 応用

色検出は、コンピュータビジョンや製造業から**医療画像処理**や芸術まで、多岐にわたる応用分野で重要な役割を果たしています。コンピュータビジョンでは、物体認識や追跡を可能にし、**ロボットのナビゲーションや監視**といったタスクに貢献します。産業界では、**製品の基準を満たすための仕分けや品質管理**に色検出を活用しています。医療画像処理では、正確な分析のために色ベースのセグメンテーションが利用され、エンターテインメント業界では映画の色補正や芸術作品の修復に使用されています。**交通標識の認識や生体認証、環境モニタリング**に至るまで、色を検出し解釈する能力は、技術、オートメーション、さまざまな分野の進歩を形作る基盤となっています。OpenCVコンピュータビジョンライブラリの色検出や形状検出といったシンプルな技術を使用することで、駐車スペースの数を簡単にカウントしたり、異常な駐車状況を検出することが可能です。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/carpark.gif" /></center>


## 技術サポート

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しております。異なるご要望やニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
