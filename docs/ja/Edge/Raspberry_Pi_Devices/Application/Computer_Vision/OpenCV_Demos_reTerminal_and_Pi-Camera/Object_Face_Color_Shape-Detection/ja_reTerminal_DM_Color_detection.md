---
description: reTerminalとPiカメラを使用したOpenCVによる色検出
title: reTerminalとPiカメラを使用したOpenCVによる色検出
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Color-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_DM_Color_detection
last_update:
  date: 11/28/2023
  author: Kasun Thushara
---

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colordetect.gif" /></center>

## はじめに

コンピュータビジョンの中核要素である色検出は、デジタル画像や動画における色の識別と分析を行います。産業界で広く応用されており、**ロボティクスにおけるオブジェクト認識、製造業における品質管理、さらには芸術作品の修復**などのタスクを可能にします。色検出の背後にあるアルゴリズムは技術の進歩に貢献し、**自動運転車、医療画像、映画や写真における視覚的美学**などの分野に影響を与えています。本質的に、色検出は視覚的世界を解釈し、多くの意味のある方法で相互作用する能力を向上させる多用途なツールです。

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

このチュートリアルは私たちのシリーズの続編として機能するため、[**OpenCV入門**](https://wiki.seeedstudio.com/ja/reTerminal_DM_opencv/)に関する以前のチュートリアルをぜひご確認いただくことを強くお勧めします。

:::

## OpenCVにおける色空間の探索

色空間は画像処理において基本的な要素であり、OpenCVはそれぞれ独自の目的を持つ複数の色空間をサポートしています。OpenCVの3つの一般的な色空間：CMYK、BGR、HSVについて詳しく見てみましょう。

### CMYK色空間

CMYK（シアン、マゼンタ、イエロー、キー/ブラック）は、カラー印刷で使用される減法混色の色空間です。
色は、白色光からシアン、マゼンタ、イエロー、ブラックの様々な割合を減算することによって作成されます。

### BGR色空間

OpenCVのデフォルト色空間はRGBですが、内部的にはBGR（ブルー、グリーン、レッド）で色を格納します。
BGRは加法混色モデルで、青、緑、赤の様々な強度が組み合わさって異なる色合いを形成します。

**成分の範囲：**

- ブルー（0-255）：青色の強度。
- グリーン（0-255）：緑色の強度。
- レッド（0-255）：赤色の強度。

### HSV色空間

HSV（色相、彩度、明度）は、RGBカラーポイントから派生した円筒モデルで色を表現します。
色相、彩度、明度の成分を持つ、人間の色の知覚を模倣します。

**成分の範囲：**

- 色相（0-179）：度数で表される色の種類。
- 彩度（0-255）：色の強度または鮮やかさ。
- 明度（0-255）：色の明るさ。

## 色検出問題においてHSVが重要な理由

HSV（色相、彩度、明度）は、色情報を効果的に分離する能力により、色検出タスクにおいて重要です。RGBやBGRとは異なり、HSVは色の種類（色相）をその強度（彩度）と明るさ（明度）から分離し、より直感的な表現を提供します。この分離は照明の変化に対して堅牢性を示し、色ベースのセグメンテーションを様々な照明条件の変化に対してより敏感でなくします。さらに、HSVにおける色の自然な表現は色閾値の定義プロセスを簡素化し、画像内の特定のオブジェクトや領域を識別するための正確な基準を促進します。色ベースのオブジェクト追跡やセグメンテーションなどのコンピュータビジョンタスクでの広範囲な使用は、正確で信頼性の高い結果を達成する上でのその重要性を強調しています。

## コードスニペットの使用方法

最初のコードでは、トラックバーを対話的に調整する柔軟性があり、最適な色閾値を視覚的に識別することができます。これらのトラックバーを実験することで、興味のある特定の色を特定し、対応するHSVの最小値と最大値をメモすることができます。このハンズオンアプローチは、個人が色パラメータを微調整するための直感的な方法を提供し、よりパーソナライズされた正確な色識別体験を保証します。

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam

 ```

次に

 ```sh
python hsvtest.py
 ```

Thonny IDEを使用してPythonスクリプトを実行することもできます。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/colortrack.PNG" /></center>

以下はHSV調整のコードです

  ```sh
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
        for x in range ( 0, rows):
            for y in range(0, cols):
                if imgArray[x][y].shape[:2] == imgArray[0][0].shape [:2]:
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

HSVの最小値と最大値をトラックバーを使用して最初のコードスニペットで決定したら、これらの数値を対応する**色名**とその識別された範囲で2番目のスニペットにシームレスに**置き換える**ことができます。

 ```sh
python colordetector.py
 ```

以下は色検出の完全なコードです

```sh
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

## アプリケーション

色検出は、コンピュータビジョンや製造業から**医療画像処理**やアートまで、多様なアプリケーションにおいて重要な役割を果たしています。コンピュータビジョンでは、物体認識と追跡を可能にし、**ロボットナビゲーションや監視**などのタスクに貢献しています。産業界では色検出を**仕分けや品質管理**に活用し、製品が基準を満たすことを保証しています。医療画像処理では、精密な分析のために色ベースのセグメンテーションに依存し、エンターテインメント業界では映画の色調補正やアート修復に使用されています。**交通標識認識からバイオメトリクス識別、環境モニタリング**まで、色を検出し解釈する能力は基本的なものであり、技術、自動化、そして様々な分野の進歩を形作っています。OpenCV Computer Vision Libraryの色検出や形状検出などのシンプルな技術を使用することで、駐車スロットを簡単にカウントし、異常な駐車シナリオを検出することができます。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/carpark.gif" /></center>

## 技術サポート

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、様々なサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
