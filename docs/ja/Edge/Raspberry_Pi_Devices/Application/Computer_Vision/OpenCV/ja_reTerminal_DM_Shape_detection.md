---
description: reTerminal と Pi カメラを使用した OpenCV による形状検出
title: reTerminal と Pi カメラを使用した OpenCV による形状検出
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Shape-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_DM_Shape_detection
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

OpenCV を使用した形状検出は、画像内の幾何学的形状を識別および分析するコンピュータビジョン技術です。**OpenCV は、このタスクのための輪郭検出、エッジ検出、ポリゴン近似を含む包括的なツールセットを提供します**。プロセスは通常、形状の視認性を向上させるためのグレースケール変換、ぼかし、閾値処理などの画像前処理ステップから始まります。処理された画像から抽出された輪郭は分析され、各輪郭の頂点数を使用して **円、三角形、長方形** などの形状を分類します。OpenCV の形状検出における柔軟性は、ロボット工学における物体認識から製造業における品質管理まで、幅広い用途において強力なツールとなります。

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
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/ja/reTerminal-piCam/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 詳細を学ぶ</font></span></strong></a></div></td>
        </tr>
    </table>
    </div>

### ソフトウェアの準備

公式ウェブサイトから Raspberry Pi 64 ビット OS の **Bullseye** または **Bookworm** バージョンをインストールすることをお勧めします。新しい Raspbian OS をインストールしたい場合は、この [**ガイド**](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) に記載されている手順に従ってください。

:::note

OpenCV の [**入門チュートリアル**](https://wiki.seeedstudio.com/ja/reTerminal_DM_opencv/) を事前に確認することを強くお勧めします。このチュートリアルはシリーズの続編として提供されています。

:::

**形状検出に関するいくつかの技術用語について説明しましょう。**

## 輪郭

コンピュータビジョンにおける輪郭は、画像内の物体の形状を識別するためのアウトラインや境界のようなものです。輪郭は物体の端を示すものであり、ある物体が終わり、別の物体が始まる場所を定義する線と考えることができます。簡単に言えば、物体の外形をペンでなぞることを想像すると、その輪郭を追っていることになります。コンピュータビジョンでは、アルゴリズムを使用してこれらの輪郭を自動的に検出し、表現することで、画像内に存在する形状を理解し分析しやすくします。

輪郭を検出する前に、特徴を強調し、輪郭検出をより効果的にするために画像を前処理することが一般的です。一般的な前処理ステップには以下が含まれます。

### グレースケール変換

グレースケール変換は、カラフルな画像を白黒バージョンに変換するようなものです。カラフルな画像では、各ピクセルに赤、緑、青の3つの色チャンネルがあります。グレースケール変換ではこれらのチャンネルを1つのチャンネルに統合し、光の強度を表します。画像内の明るさの変化が色ではなく灰色の濃淡で表現されるようになります。これにより画像が簡素化されますが、さまざまなコンピュータビジョンタスクに必要な重要な情報は保持されます。

### 平滑化/ぼかし

画像内のノイズを減らすために平滑化またはぼかしフィルターを適用します。ガウシアンぼかしは画像処理でよく使用される手法で、画像内の各ピクセルをその近隣のピクセルと平均化し、中央のピクセルにより重みを置きます。これにより高周波ノイズや細かい詳細が減少し、滑らかな画像が得られます。平滑化の程度は**ガウシアン**カーネルの標準偏差によって制御されます。この手法はエッジ検出や輪郭検出などのタスクで広く使用されています。

### 二値化処理

二値化処理は、グレースケール画像をしきい値を設定して二値画像に変換する重要な画像処理技術です。しきい値を超えるピクセルは通常白に、しきい値以下のピクセルは通常黒になります。この技術は物体のセグメンテーションや背景の区別に広く使用され、画像を分析しやすくします。適応的二値化は、局所的なピクセルの変化に基づいて動的に調整されるため、さまざまな画像条件でその効果が向上し、コンピュータビジョンアプリケーションにおいて価値のあるツールとなります。

### エッジ検出

エッジ検出は、画像内の境界を識別することを目的とした重要な画像処理技術です。これは急激な強度変化を強調し、物体が終わり、別の物体が始まるエッジを表します。**Cannyエッジ検出器**のような人気のあるアルゴリズムは、勾配情報を使用してこれらの変化を特定し、コンピュータビジョンアプリケーションにおける物体認識や形状分析などのタスクの基礎となるステップを提供します。エッジ検出は重要な特徴を強調し、視覚データの理解と解釈を向上させる役割を果たします。

## コードに移りましょう

以下のコマンドをターミナルで順番に実行してください。

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
python shapedetect.py
 ```

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/shapedetection.png" /></center> 

## 応用

形状検出はさまざまな分野で幅広い応用があります。その中で注目すべき応用例として、**これから実演するコインカウント**があります。ここでは、形状を利用してコインを識別し、それぞれの独特な幾何学的特徴に基づいて区別します。製造業や品質管理では、形状検出を使用して製品を形状に基づいて検査および分類し、一貫性と基準への適合を確保します。**ロボティクスでは、形状の検出と認識が物体の操作やナビゲーションに役立ちます**。医療画像処理では、腫瘍の識別や臓器のセグメンテーションといったタスクに形状検出が利用されます。さらに、**自動運転車の分野では、形状検出が道路標識や障害物の識別に重要な役割を果たし**、安全なナビゲーションに貢献します。全体として、形状検出は産業オートメーションからヘルスケアに至るまで、多岐にわたる応用を持つ汎用的なツールです。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/coins1.PNG" /></center> 

## 技術サポート

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なるご要望やニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>