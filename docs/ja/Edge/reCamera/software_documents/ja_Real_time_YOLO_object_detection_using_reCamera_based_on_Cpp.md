---
description: このwikiでは、C++を使用してreCameraでリアルタイムにオブジェクトを検出するためのYOLOの使用方法を説明します。
title: C++ベースのreCameraを使用したリアルタイムYOLOオブジェクト検出
keywords:
  - Http
  - reCamera
  - Object detecton
  - YOLO
  - C++
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /ja/real_time_yolo_object_detection_using_recamera_based_on_cpp
last_update:
  date: 06/26/2025
  author: Liangyuxin

no_comments: false # for Disqus
---

# C++ベースのreCameraを使用したリアルタイムYOLOオブジェクト検出

このドキュメントでは、reCameraターミナルでクロスコンパイルに基づいてC++を使用し、リアルタイム写真撮影、YOLOオブジェクト検出、およびHTTPによる結果アクセスを実装する方法を説明します。このアプローチにより、reCameraでNode-REDを使用する際に発生する過熱問題を回避できます。このドキュメントを参考にして、カスタマイズされたコンピュータビジョンアプリケーション用にC++コードを変更することができます。

## 環境準備

### プリコンパイル

まず、「C/C++での開発」ドキュメントを参照して、Linuxでクロスコンパイル環境を設定する必要があります。
**注意**: 各起動後にパスを再設定してください：

```
export SG200X_SDK_PATH=$HOME/recamera/sg2002_recamera_emmc/
export PATH=$HOME/recamera/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

その後、**[Realtime_detection_http](https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/Realtime_detection_http.zip)** プロジェクトをダウンロードし、コンパイルしてください。

```
cd Realtime_detection_http/
mkdir build && cd build
cmake ..
make
```

ビルドディレクトリに緑色の実行可能ファイル **Realtime_detection_http** が存在することは、コンパイルが成功したことを示しています：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/1.png" /></div>

次に、reCameraターミナルを開き、実行可能ファイルをreCameraターミナルディレクトリにコピーします。

```
 sudo scp Realtime_detection_http recamera@192.168.42.1:/home/recamera/
```

### reCamera の準備

1.**[On Device Models](https://wiki.seeedstudio.com/ja/recamera_on_device_models/)** からデプロイされた **YOLOv11** をダウンロードし、モデルの **.cvimodel** ファイルを reCamera ターミナルの **/home/recamera/** にコピーします。
2.コードを実行する前に、メモリ消費を防ぐため、reCamera [workspace](http://192.168.42.1/#/workspace) にアクセスしてプロセスを終了してください（**[Develop with c/c++](https://wiki.seeedstudio.com/ja/recamera_develop_with_c_cpp)** を参照）。
3.次に **/etc/init.d/** に移動し、**S93sscma-supervisor** と **S91sscma-node** の両方のフォルダを **/home/recamera/** または他の場所にバックアップ用にコピーし、メモリ消費とプログラムの占有を防ぐため、元の **S93sscma-supervisor** と **S91sscma-node** フォルダを削除します。

```
cd /etc/init.d/
sudo scp S93sscma-supervisor /home/recamera/
sudo scp S91sscma-node /home/recamera/
sudo rm -r S93sscma-supervisor
sudo rm -r S91sscma-node
```

## プログラムの実行

reCamera ターミナルの **/home/recamera/** で管理者としてプログラムを実行します：

```
sudo ./Realtime_detection_http
```

## 結果

ターミナルには以下が表示され、プログラムが正常に動作していることを示しています：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/2.png" /></div>

WebブラウザまたはPostmanを使用してhttp://192.168.42.1/modeldetectorにアクセスできます。reCameraは即座に写真を撮影し、YOLOv11によって検出されたオブジェクトを返します。​
ブラウザ：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/3.png" /></div>

Postman：
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/4.png" /></div>

返される情報には以下のデータが含まれます：​​

- **Code**：1（実行中）
- **Msg**：エラーメッセージ
- **Initialize_camera_duration**：カメラ初期化時間は初回アクセス時のみ表示されます。​
- **Initialize_model_duration**：モデル初期化時間は初回アクセス時のみ表示されます。​
- **Data**：
  - ​**Score**：検出信頼度スコア（0-1）
  - **Target**：検出されたオブジェクトの名前
  - **Box**：[x1, y1, x2, y2]​：検出ボックス座標（[左、上、右、下]の端を表すピクセル）
  - ​**Center**：[x, y]​：検出ボックスの正規化された中心位置（画像の幅/高さに対する比率）
  - ​**Size**：[w, h]​：検出ボックスの正規化された幅と高さ（画像寸法に対する比率）
  - **Release_duration**：カメラキャッシュをクリアするのにかかった時間（ms）
  - ​**Capture_duration**：画像取得時間（ms）
  - ​**Image_preprocessing_duration**：推論前の画像準備時間（ms）
  - **Detection_duration**：モデル検出時間（ms）（前処理、推論、後処理を含む）
- ​**Duration**：プログラム全体の実行時間（ms）
- **Timestamp**：Unixタイムスタンプ

ターミナルには以下が表示されます：​

- カメラ初期化パラメータ​：
  - 解像度：**1920×1080**
  - フレームレート：**5 fps**
  - キャプチャチャンネル：**チャンネル2**
- キャプチャされた画像サイズ（例：**Jpeg size: 216149 (pixels)**）
- ​異なるステップでのメモリ使用量（MB）：
  - キャプチャ前（**Memory usage**）
  - 解放中（**Memory usage_during_**）
  - キャプチャ後（**Memory usage_after**）
  - 画像前処理後（**Memory usage_before_model**）
  - モデル検出後（**Memory usage_after_model**）
- モデル検出時間（ms）
  - 前処理（例：**pre: 9ms**）
  - 推論（例：**infer: 40ms**）
  - 後処理（例：**post:395ms**）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/5.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/6.png" /></div>

reCameraターミナルでは、検出された画像を自動的に保存できます：​
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/7.jpg" /></div>

デバイスで継続的にアクセスして、インテリジェントセキュリティや監視などのアプリケーション向けのリアルタイム検出結果を取得できます。

**registerModelDetector()**（**Realtime_detection_http/src/http.cpp**）と**model_detector()**（**Realtime_detection_http/src/model_detector.cpp**）で返されるメッセージの形式を変更できます。
**registerModelDetector()**で**initialize_model(const std::string& model_path)**を呼び出す際に独自にデプロイしたモデルを使用することもでき、**initialize_camera()**（**Realtime_detection_http/src/model_detector.cpp**）でカメラ初期化設定を変更できます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/8.png" /></div>

検出後、Ctrl+Cを押して操作を終了できます。​プログラムはカメラを停止します。​

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Real_time_YOLO_object_detection_using_reCamera_based_on_Cpp/9.png" /></div>

詳細については、[GitHubリポジトリ](https://github.com/Seeed-Studio/OSHW-reCamera-Series)をご参照ください。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
