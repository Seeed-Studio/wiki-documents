---
description: これは recamera2002 をベースにした、選択したエリアの動体検知です
title: recamera2002 をベースにした選択エリアの動体検知
keywords:
  - reCamera
  - 動体検知
  - Home Assistant
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155236.png
slug: /recamera_motion_detection
sku: 102991897, 100029708, 108990120
sidebar_position: 13
last_update:
  date: 07/03/2026
  author: Qiyao Lin
createdAt: '2026-07-03'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/ja/recamera_motion_detection/
---

## I. プロジェクト概要

これは recamera2002 をベースにした、選択したエリアの動体検知です。この検知に必要なすべての計算処理は reCamera 内で完結し、外部の計算リソースに依存しません。外部システムは画像の描画と検知エリアの選択のみを行えばよい構成になっています。
以下の GitHub リポジトリからデモをクローンできます：

[reCamera Motion Detection Demo](https://github.com/yyling0101-a11y/recamera_motion_detection)

## II. reCamera 設定ガイド

Linux システム上で `motion_detection` 実行ファイルをコンパイルした後、SCP を使って reCamera に転送します。その後、reCamera の SSH ターミナルにリモートアクセスし、次のコマンドで直接プログラムを実行します：

```bash
./motion_detection
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155625.png" /></div>

## III. Win レンダリングインターフェースの設定

同じディレクトリ内に `windows_ui` ディレクトリがあります。これは Win インターフェースのレンダリングプロジェクトです。conda 仮想環境を使用して環境を構築することを推奨します。

```bash
conda create -n motion_detection python=3.10

conda activate motion_detection

# Download corresponding environment dependencies
cd ./windows_ui
pip install -r requirements.txt
```

環境の準備ができたら、`app.py` ファイルを直接実行します：

```bash
python app.py --rtsp=rtsp://192.168.42.1:8554/live0 --api=http://192.168.42.1:8080
```

起動後のインターフェースは次のようになります：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703153920.png" /></div>
正しい URL を入力したら、"Connect RTSP" をクリックしてビデオストリームを取得できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703154419.png" /></div>

### 1. 検知エリアの定義

左側の "Area Editing" でエリアタイプを選択します。タイプは 2 種類あり、1 つは検知領域を定義するための "Detection Area" タイプ、もう 1 つは検知領域内で検知を行わないエリアを定義する "Whitelist" です。後者は、検知エリア内で自然に動く可能性のある対象（揺れる木の枝、噴水など）を除外するために使用します。
タイプを選択しエリア名を入力したら、画像上をクリックして点を選択できます。右クリックで 1 つ前の点を取り消せます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703154948.png" /></div>

点の選択が完了したら、"Complete Current Polygon" をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155033.png" /></div>

### 2. 検知ボックスの有効化

次に、"Upload to Device" を選択して、インターフェースの設定を保存します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155107.png" /></div>

画像内で動きが検知されると、左下にアラートメッセージが表示され、画像上に動体ボックスが描画されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Motion_Detection/Pasted_image_20260703155236.png" /></div>

Win インターフェースを再起動すると、既存の選択ボックスが失われる場合があります。その場合は "Read from Device" をクリックして、既存の検知ボックスを再取得する必要があります。現在のカメラが移動したりシーンが変化した場合でも、検知エリアを変更する必要がなければ、"Reconstruct Background" をクリックして静止画像を再定義できます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
