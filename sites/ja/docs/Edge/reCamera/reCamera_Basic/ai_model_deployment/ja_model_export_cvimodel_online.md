---
description:  モデルをオンラインでエクスポートする
title:  モデルをオンラインでエクスポートする
keywords:
  - Edge
  - reCamera
  - recamera
  - linux command
  - linux
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png
slug: /recamera_model_export_online
sidebar_position: 4
last_update:
  date: 2/14/2025
  author: yylin
createdAt: '2026-07-19'
updatedAt: '2026-07-19'
url: https://wiki.seeedstudio.com/ja/Edge/reCamera/reCamera_Basic/ai_model_deployment/recamera_model_export_online/
---

# reCamera の Web インターフェースでカスタム YOLO 検出モデルを変換してデプロイする

reCamera の Web 管理インターフェースには、クラウドベースのモデル変換機能が組み込まれています。YOLO 検出モデルを学習またはファインチューニングした後、TPU-MLIR や Docker などのモデル変換環境をローカルに構成することなく、ユーザーは ONNX モデルを直接アップロードしてエクスポートできます。

アップロード後、システムは ONNX モデルを reCamera 上で動作可能な `.cvimodel` 形式のモデルに自動的に変換します。モデル変換が成功すると、そのモデルを現在のデバイスに直接適用でき、Dashboard ページからリアルタイムの検出結果を確認できます。

## 機能概要

reCamera の Web インターフェースを通じて、以下の操作を行うことができます：

- 学習済みまたはファインチューニング済みの YOLO Detect ONNX モデルをアップロードする；
- Seeed のクラウドサービスを利用してモデルを自動変換する；
- ONNX モデルを reCamera がサポートする `.cvimodel` 形式に変換する；
- 変換済みモデルファイルをダウンロードする；
- モデルを現在の reCamera に直接適用する；
- Dashboard 上でターゲット検出結果をリアルタイムにプレビューする。

この一連のプロセスでは、ユーザーがローカルにモデル変換ツールチェーンをインストールする必要がないため、カスタム物体検出モデルの迅速な検証とデプロイに適しています。

## サポート範囲

本機能は現在、主に YOLO シリーズの物体検出モデル（Detect）向けに設計されています。

アップロード前に、次の点を確認してください：

- モデルが ONNX 形式でエクスポートされていること；
- ONNX モデルが固定入力サイズを使用していること；
- モデルがローカルの ONNX Runtime 環境で正常に実行できること。

> 本機能は主に YOLO Detect モデル向けです。分類、インスタンスセグメンテーション、姿勢推定、回転バウンディングボックス検出モデルなどは、異なる出力構造を使用している可能性があり、現在の変換プロセスでは直接デプロイできない場合があります。

---

## ONNX モデルの準備

まず、Ultralytics などの学習フレームワークを使用して YOLO モデルを学習またはファインチューニングし、その後モデルを ONNX 形式でエクスポートします。

ここでは Ultralytics YOLO を例に説明します：

```bash
yolo export \
  model=runs/detect/train/weights/best.pt \
  format=onnx \
  imgsz=640 \
  opset=17 \
  simplify=True
```

:::note
tpu-mlir がサポートする最大 opset バージョンは 17 です。opset が 17 を超える ONNX モデルは、オンライン変換を完了できない場合があります。
:::

エクスポート後、次のようなファイルが得られます：

```text
best.onnx
```

アップロード前に、ONNX モデルをチェックすることを推奨します：

```bash
pip install model-inspect-tool

model-inspect 
```

モデルが ONNX チェックに合格したら、reCamera にアップロードできます。

---

## ステップ 1: モデル変換ページを開く

ブラウザを使用して reCamera の Web 管理インターフェースにアクセスします。

左側のデバイス管理エリアで次を見つけます：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image.png" /></div>

**Model Conversion** ページに入ると、アップロード済みまたは変換済みのモデルが表示されます。

ページ上のモデルでは、通常次の操作が提供されます：

- `Download` 変換済みモデルをダウンロードする；
- `Use` モデルを現在使用中のモデルとして設定する；
- 削除ボタン：対応するモデルレコードを削除します。

---

## ステップ 2: ONNX モデルをアップロードする

ページ上の **Upload Model** ボタンをクリックし、ファイル選択ウィンドウで変換したい YOLO ONNX モデルを選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-1.png" /></div>

ファイルを選択したら「Open」をクリックすると、モデルのアップロードが開始されます。

---

## ステップ 3: クラウドでのモデル変換を待つ

モデルがアップロードされると、reCamera は Seeed が提供するクラウドベースのモデル変換サービスを呼び出し、ONNX モデルを reCamera 上で動作可能な `.cvimodel` 形式に変換します。

変換処理中、モデルカードには現在の変換進行状況が表示されます。

変換中は、次の情報を確認できます：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-2.png" /></div>

- モデル名；
- アップロード時間；
- 現在の変換進行状況；
- `Stop Model Conversion` ボタン。

モデル変換が完了するまで、reCamera のネットワーク接続が安定していることを確認してください。

> モデルのアップロードと変換にはクラウドサービスへのアクセスが必要です。デバイスがインターネットにアクセスできない場合や、ネットワーク接続が不安定な場合、モデル変換が失敗したり、特定の進行状況で長時間止まったままになることがあります。

---

## ステップ 4: モデル変換完了を確認する

変換が成功すると、モデルの右上に緑色の完了マークが表示され、同時に次のボタンが表示されます：

```text
Download
Use
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-3.png" /></div>

これは、クラウド側で ONNX から `.cvimodel` への変換が完了したことを示します。

### モデルをダウンロードする

**Download** をクリックすると、変換済みモデルをローカルコンピュータにダウンロードして保存できます。

ダウンロードしたファイルは、次の用途に使用できます：

- モデルのバックアップ；
- reCamera アプリケーションのカスタマイズ；
- Node-RED のモデルノード；
- C/C++ 推論プログラム；
- その後のオフラインデプロイ。

### モデルを使用する

**Use** をクリックすると、このモデルが reCamera アプリケーションで現在使用される推論モデルとして設定されます。

モデルを適用すると、現在のモデル名は関連するモデルノードやプレビューページに同期されます。

> リスト内に同名のモデルが複数存在する場合は、アップロード時間に基づいて使用するバージョンを判断できます。管理を容易にするため、アップロード前に `person_detect_v1.onnx` のようにバージョン情報を含むファイル名を使用することを推奨します。

---

## ステップ 5: 現在の Node-RED フローをデプロイする

モデルを選択した後、そのモデル設定を正式に有効にするには、現在の Node-RED フローをデプロイする必要があります。

ページ右上の **Deploy** ボタンをクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-4.png" /></div>

デプロイが完了すると、カメラノード、モデルノード、および Dashboard ページは新しい設定に従って動作します。

> `Use` をクリックするだけでは、モデル選択の更新にとどまる場合があります。モデルの切り替えを完全に反映させるため、モデルを選択した後に再度 Deploy ボタンをクリックすることを推奨します。

---

## ステップ 6: Dashboard プレビューページを開く

デプロイが完了したら、ページ右上の **Dashboard** ボタンをクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/recamera-open-dashboard.png" /></div>

その後、ブラウザはモデルプレビューとデバイス制御ページに移動します。

Preview エリアでは、次の内容を確認できます：

- 現在使用中のモデル名；
- IoU しきい値；
- 信頼度しきい値；
- ライブカメラ映像；
- 物体検出のバウンディングボックス；
- 検出カテゴリ名；
- 検出信頼度。

例えば、人を検出した場合、画面には次のように表示されます：

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/ai_model_deployment/model_export_cvimodel_online/image-5.png" /></div>

ここで：

- `person` は検出カテゴリを示します；
- `91` は検出信頼度がおよそ 91% であることを示します。

---

## よくある質問

### モデルが長時間変換中のまま進まない

次の点を確認してください：

1. reCamera は正常にインターネットへアクセスできますか？
2. ONNX ファイルは完全にアップロードされていますか？
3. モデルファイルが大きすぎませんか？
4. ONNX モデルは正常にロードできますか？

あるいは、現在の変換タスクを停止して、再度アップロードすることもできます。

### モデル変換が失敗する

主な原因としては、次のようなものがあります：

- ONNX モデルに現在サポートされていないオペレータが含まれている；
- モデルが動的入力サイズを使用している；
- モデルの出力構造がカスタマイズされている；
- エクスポートされた ONNX のバージョンまたは Opset が非互換である；
- モデルファイルが破損している。

モデルを再エクスポートし、固定入力サイズを優先して使用することを推奨します：

```bash
yolo export \
  model=best.pt \
  format=onnx \
  imgsz=640 \
  opset=17 \
  simplify=True \
  dynamic=False
```

### Use をクリックしてもプレビュー結果が変わらない

次の点を確認してください：

1. モデルで `Use` ボタンをクリックしましたか；
2. 右上の Deploy ボタンをクリックしましたか；
3. Dashboard に表示されている Current Model は目的のモデルですか；
4. モデルノードは動作していますか；
5. カメラノードとモデルノードは正しく接続されていますか。

必要に応じて、フローを再デプロイするか、Dashboard ページをリフレッシュしてください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
