---
description: これは reCamera HQ PoE をベースにした顕微鏡デモプロジェクトで、PCB 検査や生物サンプル観察をサポートし、ハードウェア組み立てガイドと AI モデルの応用例を含みます。
title: 顕微鏡デモ
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
  - Microscope
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_hq_poe_microscope_demo
sku: 100041077,100018917,100029708,100074316
sidebar_position: 3
last_update:
  date: 10/08/2026
  author: Parker Hu
createdAt: '2025-11-10'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/recamera_hq_poe_microscope_demo/
---

# reCamera_Microscope

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/4.gif" /></div>

## ハードウェアの準備

このチュートリアルでは、以下の製品を使用します：

<table align="center">

<tbody><tr>

<th>Seeed Studio reCamera 2002 HQ PoE 8GB</th>

<th>1/2.9" M12 Ultra Telephoto Lens for reCamera - 2MP, 15° (22mm-B)</th>

</tr>

<tr>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100070335-_22mm_b_.jpg" style={{width:210, height:'auto'}}/></div></td>

</tr>

<tr>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-8GB-p-6558.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/22mm-B-p-6646.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

## 🔥reCamera_Microscope とは？

reCamera_Microscope は、[reCamera 2002 series](https://www.seeedstudio.com/reCamera-2002w-64GB-p-6249.html) と [GC2053 Sensor Board](https://www.seeedstudio.com/reCamera-2002-Sensor-Board-GC2053-p-6556.html) に基づくオープンソースプロジェクトです。また、[reCamera 2002 HQ PoE version](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html) を使用してこのプロジェクトを完成させることもできます。

## 💡reCamera_Microscope で何ができますか？

reCamera_Microscope で何ができるのでしょうか？<br />
reCamera_Microscope は、倍率の異なるレンズを切り替えて使用でき、PCB（プリント基板）、電子部品、細胞、昆虫、植物サンプルなどの被写体を撮影することができます。<br />
reCamera Sg2002 シリーズには 1 TOPS の演算能力が内蔵されており、YoloV11 モデルを実行できます。物体検出やセグメンテーションモデルと組み合わせることで、PCB の欠陥検出、電子部品の分類、さらには細胞、昆虫、植物サンプルの分類やカウントなどのシナリオに応用できます。<br />
さらに多くの応用分野が、皆さんによる探索を待っています。

## 📷プレビュー 


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-2.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-3.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-4.png" /></div>

## 🔧reCamera_Microscope のハードウェア構成

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-5.png" /></div>

1. reCamera POE
2. 3D プリンタ x2
3. M12 レンズ x2
4. M12 レンズ延長ブラケット x3
5. 顕微鏡ホルダー
6. 12V 電源アダプタ
7. Type-C ケーブル

## 取り付け手順

**図のようにブラケットを組み立て、12V 電源に接続し、3D プリント部品を取り付けます。**

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-7.png" /></div>

図のように、顕微鏡キットには 2 つのレンズが含まれています。広角レンズを取り外し、他の 2 つのレンズに交換する必要があります。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-8.png" /></div>

### 🎨オプション 1: レンズ 1：顕微鏡レンズの使用

図のように顕微鏡レンズを取り外し、レンズ延長アダプタを 3 つ取り付けてから、レンズ 1 を取り付けます。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-9.png" /></div>

図のように、**USB ケーブルを使用してコンピュータに接続します。**

 `192.168.42.1` にアクセスして reCamera の読み込みページを表示します。ログインする **ユーザー** は `root`、**パスワード** は `recamera.1` です。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-10.png" /></div>

植物、動物、または微生物のプレパラート標本を購入し、顕微鏡ステージ上に置くことができます。カメラと被写体の位置を調整することで、ミクロの世界の映像を見ることができます。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-11.png" /></div>

### 🎨オプション 2: レンズ 2：PCB マイクロレンズの使用

図のように顕微鏡レンズを取り外し、レンズ延長アダプタを 1 つ取り付けてから、レンズ 2 を取り付けます。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-12.png" /></div>

図のように、**USB ケーブルを使用してコンピュータに接続します。**

 `192.168.42.1` にアクセスして reCamera の読み込みページを表示します。ログインする **ユーザー** は `root`、**パスワード** は `recamera.1` です。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-14.png" /></div>

ここでは、PCB 上の電子部品を識別したり、PCB の欠陥を検出したりするために使用できる、事前学習済みモデルが 2 つ用意されています。

| [PCB Electronic Component Detection Model](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/readme.md) | [Download](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/yolo11n_electronic.cvimodel)     |
| ---------------------------------------- | ------------ |
| [**PCB Defect Detection Model**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/readme.md)          | [**Download**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/yolo11n_PCB_Defect.cvimodel) |

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>