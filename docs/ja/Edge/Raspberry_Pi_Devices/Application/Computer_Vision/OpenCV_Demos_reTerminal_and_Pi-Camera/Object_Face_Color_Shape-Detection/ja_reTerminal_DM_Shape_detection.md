---
description: reTerminalとPiカメラを使用したOpenCVによる形状検出
title: reTerminalとPiカメラを使用したOpenCVによる形状検出
keywords:
  - Edge
  - reTerminal 
  - piCamera
  - OpenCV
  - Shape-Detection
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reTerminal_DM_Shape_detection
last_update:
  date: 2/5/2023
  author: Kasun Thushara
---

## はじめに

OpenCVを使用した形状検出は、画像内の幾何学的形状を識別・分析するコンピュータビジョン技術です。**OpenCVは、輪郭検出、エッジ検出、多角形近似など、このタスクのための包括的なツールセットを提供します**。プロセスは通常、形状の視認性を向上させるために、グレースケール変換、ぼかし、閾値処理などの画像前処理ステップから始まります。処理された画像から抽出された輪郭が分析され、各輪郭の頂点数を使用して**円、三角形、長方形**などの形状を分類します。OpenCVの形状検出における汎用性により、ロボティクスにおける物体認識から製造業における品質管理まで、幅広いアプリケーションに対応する強力なツールとなっています。

## はじめに

このプロジェクトを開始する前に、ここで説明するように、ハードウェアとソフトウェアを事前に準備する必要があります。

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

公式ウェブサイトから**Bullesye**または**Bookworm**バージョンのRaspberry Pi 64ビットOSをインストールすることをお勧めします。新しいRaspbian OSをインストールしたい場合は、この[**ガイド**](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc)に記載されている手順に従ってください。

:::note

このチュートリアルは私たちのシリーズの続編として機能するため、[**OpenCVを始める**](https://wiki.seeedstudio.com/ja/reTerminal_DM_opencv/)に関する以前のチュートリアルをぜひご確認いただくことを強くお勧めします。

:::

**形状検出に関するいくつかの技術用語について説明しましょう。**

## 輪郭

コンピュータビジョンにおける輪郭は、画像内のオブジェクトの形状を識別するのに役立つ輪郭や境界のようなものです。輪郭をオブジェクトのエッジ、つまり一つのオブジェクトが終わり、別のオブジェクトが始まる場所を定義する線として考えてください。より簡単に言えば、ペンでオブジェクトの輪郭をなぞることを想像すれば、その輪郭をたどっていることになります。コンピュータビジョンでは、アルゴリズムを使用してこれらの輪郭を自動的に見つけて表現し、画像に存在する形状をより簡単に理解・分析できるようにします。輪郭を検出する前に、特徴を強化し、輪郭検出をより効果的にするために画像を前処理することが一般的です。一般的な前処理ステップには以下があります：

### グレースケール変換

グレースケール変換は、カラフルな画像を白黒バージョンに変換するようなものです。カラー画像では、各ピクセルが3つのカラーチャンネル（赤、緑、青）を持っています。グレースケール変換は、これらのチャンネルを単一のチャンネルに結合し、光の強度を表現します。画像の明度変化は、色の代わりにグレーの濃淡を使用して表現されるようになります。これにより画像は簡素化されますが、様々なコンピュータビジョンタスクにとって重要な情報は保持されます。

### 平滑化/ぼかし

画像のノイズを減らすために平滑化またはぼかしフィルターを適用します。Gaussianぼかしは画像処理における一般的な技術で、画像内の各ピクセルが隣接するピクセルと平均化され、中央のピクセルにより重みが置かれます。これにより高周波ノイズと細かいディテールが減少し、より滑らかな画像が得られます。平滑化の量は**Gaussian**カーネルの標準偏差によって制御されます。エッジ検出や輪郭検出などのタスクで広く使用されています。

### 閾値処理

閾値処理は、閾値を設定してグレースケール画像をバイナリ画像に変換する重要な画像処理技術です。閾値を上回るピクセルは一つの色（通常は白）を取り、下回るピクセルは別の色（通常は黒）を採用します。オブジェクトのセグメンテーションと背景の区別に広く使用される閾値処理は、分析のために画像を簡素化します。適応的閾値処理は局所的なピクセル変動に基づいて動的に調整し、多様な画像条件での効果を向上させ、コンピュータビジョンアプリケーションにおいて価値のあるツールとなっています。

### エッジ検出

エッジ検出は、画像内の境界を識別することを目的とした画像処理の重要な技術です。急激な強度変化を強調し、一つのオブジェクトが終わり、別のオブジェクトが始まるエッジを表現します。**Canny**エッジ検出器などの人気のあるアルゴリズムは、勾配情報を使用してこれらの遷移を特定し、コンピュータビジョンアプリケーションにおけるオブジェクト認識や形状分析などのタスクの基礎的なステップを提供します。エッジ検出は重要な特徴を強調するのに役立ち、視覚データの理解と解釈の向上を可能にします。

## コードに移りましょう

ターミナルでこれらのコマンドを一つずつ実行してください。

 ```sh
cd Seeed_Python_ReTerminal/samples/Opencv_and_piCam
python shapedetect.py
 ```

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/shapedetection.png" /></center>

## アプリケーション

形状検出は様々な分野で多様なアプリケーションを持っています。現在**私たちがデモンストレーションしようとしている注目すべきアプリケーションの一つはコイン計数**で、形状を利用してコインの独特な幾何学的特徴に基づいてコインを識別し区別します。製造業と品質管理では、形状検出は製品の形状に基づいて検査と分類を行い、一貫性と標準への準拠を確保するために使用されています。**ロボティクスでは、形状の検出と認識は物体操作とナビゲーションを支援します**。医療画像処理では、腫瘍の識別や臓器のセグメンテーションなどのタスクで形状検出に依存しています。さらに、**自動運転車の分野では、形状検出は道路標識や障害物の識別において重要な役割を果たし**、安全なナビゲーションに貢献しています。全体的に、形状検出は産業オートメーションからヘルスケアまで、そしてそれ以上の分野にわたるアプリケーションを持つ多用途なツールです。

<center><img width={800} src="https://files.seeedstudio.com/wiki/ReTerminal/opencv/coins1.PNG" /></center>

## 技術サポート

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、様々なサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
