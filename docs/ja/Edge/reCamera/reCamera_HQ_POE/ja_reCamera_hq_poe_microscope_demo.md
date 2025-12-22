---
description: これは reCamera HQ PoE をベースとした顕微鏡デモプロジェクトで、PCB 検査と生物サンプル観察をサポートし、ハードウェア組み立てガイドと AI モデルアプリケーションを含みます。
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
slug: /ja/recamera_hq_poe_microscope_demo
sidebar_position: 3
last_update:
  date: 11/08/2025
  author: Parker Hu
---

# reCamera_Microscope

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/4.gif" /></div>

## 🔥reCamera_Microscope とは？

reCamera_Microscope は [reCamera 2002 シリーズ](https://www.seeedstudio.com/reCamera-2002w-64GB-p-6249.html) と [GC2053 センサーボード](https://www.seeedstudio.com/reCamera-2002-Sensor-Board-GC2053-p-6556.html) をベースとしたオープンソースプロジェクトです。[reCamera 2002 HQ PoE バージョン](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html) を使用してこのプロジェクトを完成させることもできます。

## 💡reCamera_Microscope は何に使用できますか？

reCamera_Microscope は何に使用できますか？<br />
reCamera_Microscope は異なる倍率レベルのレンズの切り替えをサポートし、PCB（プリント基板）、電子部品、細胞、昆虫、植物サンプルなどの被写体の画像を撮影することができます。<br />
reCamera Sg2002 シリーズには 1 TOPS の内蔵計算能力があり、YoloV11 モデルを実行することができます。物体検出やセグメンテーションモデルと組み合わせることで、PCB 欠陥検出、電子部品分類、細胞、昆虫、植物サンプルの分類と計数などのシナリオに適用できます。<br />
より多くの応用方向は、皆さんによって探求されることを待っています。

## 📷プレビュー 


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-2.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-3.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-4.png" /></div>

## 🔧reCamera_Microscope のハードウェア構成

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-5.png" /></div>

1. reCamera POE
2. 3D プリンター x2
3. M12 レンズ x2
4. M12 レンズ延長ブラケット x3
5. 顕微鏡ホルダー
6. 12V 電源アダプター
7. Type-C ケーブル

## インストール手順

**図に示すように、ブラケットを組み立て、12V 電源に接続し、3D プリント部品を取り付けます。**

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-7.png" /></div>

図に示すように、顕微鏡キットには2つのレンズが含まれています。広角レンズを取り外し、他の2つのレンズと交換する必要があります。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-8.png" /></div>

### 🎨オプション1：レンズ1：顕微鏡レンズの使用

図に示すように、顕微鏡レンズを取り外し、3つのレンズ延長アダプターを取り付け、その後レンズ1を取り付けます。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-9.png" /></div>

図に示すように、**USB ケーブルを使用してコンピューターに接続します。**

 `192.168.42.1` にアクセスして reCamera のローディングページを表示します。ログイン **ユーザー** は：`root`；**パスワード** は：`recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-10.png" /></div>

植物、動物、または微生物のサンプルスライスを購入し、顕微鏡ステージに置くことができます。カメラと物体の位置を調整することで、微視的世界の画像を見ることができます。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-11.png" /></div>

### 🎨オプション2：レンズ2：PCB マイクロレンズの使用

図に示すように、顕微鏡レンズを取り外し、1つのレンズ延長アダプターを取り付け、その後レンズ2を取り付けます。

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-12.png" /></div>

図に示すように、**USB ケーブルを使用してコンピューターに接続します。**

 `192.168.42.1` にアクセスして reCamera のローディングページを表示します。ログイン **ユーザー** は：`root`；**パスワード** は：`recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-14.png" /></div>

ここには2つの事前訓練済みモデルが利用可能で、PCB 上の電子部品を識別したり、PCB の欠陥を検出したりするために使用できます。

| [PCB 電子部品検出モデル](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/readme.md) | [ダウンロード](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/yolo11n_electronic.cvimodel)     |
| ---------------------------------------- | ------------ |
| [**PCB 欠陥検出モデル**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/readme.md)          | [**ダウンロード**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/yolo11n_PCB_Defect.cvimodel) |

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>