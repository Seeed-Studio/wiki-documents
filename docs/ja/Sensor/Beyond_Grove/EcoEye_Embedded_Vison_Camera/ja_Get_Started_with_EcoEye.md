---
description: EcoEye–Embedded_Vision_Camera の使い方
title: EcoEye–Embedded_Vision_Camera の使い方
keywords:
- EcoEye–Embedded_Vision_Camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Get_Started_with_EcoEye_Embedded_Vision_Camera
last_update:
  date: 05/15/2025
  author: Yvonne
---


# EcoEye–Embedded_Vision_Camera の紹介

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/1-101991121-EcoEye-%E2%80%93-Embedded-Vision-Camera-first.jpg"/></div>

EcoEye は、ポータブルで防水性の筐体に収められた、オンボードの機械学習機能を備えたカメラで、リモート展開用に設計されています。OpenMV H7 Plus Cam をベースにしており、セットアップが簡単で、多くの用途に柔軟に対応できます。内部の電源管理および制御システムにより、長期間の運用が可能で、ソーラーパネル、無数のセンサー、その他の外部デバイスとの統合を可能にします。このカメラは徹底的にフィールドテストされており、その結果は科学論文で公開されています。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/EcoEye-Embedded-Vision-Camera-p-5843.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>


## はじめに

このガイドを始める前に、EcoEye のハードウェアおよびソフトウェアについて [ユーザーガイド](https://files.seeedstudio.com/products/101991121/EcoEye%20User%20Manual.pdf) に記載されている内容を確認し、理解しておいてください。

### ハードウェアの準備

EcoEye カメラを開き、同じ容量の均等に充電されたリチウムイオン 18650 バッテリーを3本、極性マークに従って指定されたコンパートメントに挿入します。OpenMV ボードには、少なくとも 8GB のストレージ容量を持つフォーマット済みの micro-SD カードを挿入してください。

### ソフトウェアの準備

[openMV IDE](https://openmv.io/pages/download) をコンピュータにダウンロードしてインストールします。ソフトウェアを開き、USB-A から USB-C ケーブルをコンピュータと EcoEye カメラの外部コネクタの間に接続します。プッシュボタンを一度押すと、前面の LED が数回緑色に点滅し、その後半秒間白色に点灯します。この時点で、コンピュータがデバイスカードを認識し、SD カードの内容を表示するウィンドウが開きます。[こちら](https://files.seeedstudio.com/products/101991121/ecoEye%20scripts.zip) にあるすべてのスクリプトファイルをコピーできます。同時に、IDE インターフェースの左下隅にあるプラグシンボルの横に USB ロゴが表示されるはずです。このボタンをクリックしてカメラとの接続を確立します。ファームウェアの更新を求められた場合は、「はい」をクリックして手順を進めてください。

ecomain.py コードを開き、左下隅の緑色の再生ボタンを押して実行します。時々 OSError が発生することがありますが、無視して再試行してください。カメラは現在、連続モードで動作しており、画像を保存せずに IDE のフレームバッファに表示しています。MODE パラメータを 2 に変更してスクリプトを再実行すると、カメラはすべてのキャプチャ画像を保存します。

カメラをコンピュータや IDE に接続せずに動作させるには、目的のアプリケーションを実現するために調整されたパラメータを持つ ecomain.py スクリプトを main.py に名前変更し、SD カードのルートに配置する必要があります。これを行うには、カメラに接続した状態で openMV IDE のタブから「Tools > Save open script to OpenMV Cam (as main.py)」を選択します。

IDE に接続せずに展開を開始する場合、ユーザーはシステムをオンにするためにプッシュボタンを一度押し、前面の LED が青色に点灯したときにもう一度押して実行を開始する必要があります。同様に、展開を停止してシステムをオフにするには、プッシュボタンを最初に一度押し、次にライトブルーの LED が点灯したとき（数秒かかる場合があります）にもう一度押します。プッシュボタンを長押しするとシステムを強制的にオフにできますが、必要がない限り推奨されません。

### 最初の物体検出アプリケーションを作成する

このステップバイステップガイドでは、EcoEye カメラを使用してデータを収集し、Edge Impulse を使用してデータセット内のオブジェクトを手動で識別してモデルをトレーニングし、最終的にカメラでモデルを実行して結果を観察します。

#### データ収集

カメラを壁やホワイトボード、またはテーブルに向けるなど、平坦で単色の表面の前に配置します。IDE に接続し、MODE 0 を実行してキャプチャされた画像を確認します。必要に応じて、背景の前に異物が現れないようにカメラの位置を調整してください。フレームバッファ上のライブ画像を見ながら、レンズを回して慎重に焦点を調整します。完璧な焦点が見つかったらスクリプトを停止し、分類したい 2 ～ 3 種類の異なるオブジェクトを集めます。

次に、MODE パラメータを 2 に変更してスクリプトを再実行します。フレームバッファに表示される画像は SD カードにも保存されます。スクリプトを実行したまま、オブジェクトをカメラの前に異なる位置、場所、組み合わせで配置します。約 100 枚の良好な画像が収集できたらスクリプトを停止し、openMV カメラをリセット（Tools > Reset）して保存されたすべての画像が含まれるフォルダを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture2.png" alt="pir" width={800} height="auto" /></p>

#### モデルのトレーニング


約100枚の画像をモデル用に選択した後、[Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fprofile%2Fprojects&err=Your%20session%20expired%2C%20please%20log%20in%20again)アカウントにログインし、新しいプロジェクトを作成します。左側のメニューから「Data Acquisition」を選択し、選択した画像をデータセットとしてアップロードします。次に、トレーニングデータセットとテストデータセットの各画像を手動でラベル付けします。画像の横にある三点リーダーをクリックし、「Edit labels」を選択してラベルを編集します。各オブジェクトタイプに対して常に同じ名前を使用するようにし、フィルターボタンで確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture3.png" alt="pir" width={800} height="auto" /></p>

次に、左側のメニューから「Create impulse」に移動します。処理ブロックタイプとして「Image」を追加し、学習ブロックタイプとして「Object Detection (Images)」を追加してインパルスを保存します。その後、左側のメニューの「Impulse Design」セクションに「Images」と「Object detection labels」が灰色で表示されるはずです。新しい「Images」タブでは、すべてそのままにして、「Save parameters」と「Generate features」ボタンをクリックします。このプロセスが完了したら、「Object detection」タブでモデルをトレーニングします。この時点ではパラメータをデフォルトのままにしておきます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture4.png" alt="pir" width={800} height="auto" /></p>

新しいモデルのパフォーマンスをテストするには、左側のメニューから「Model testing」タブに移動し、「Classify all」をクリックします。これにより、テストデータセット（最初にラベル付けされましたが、トレーニングには使用されていないデータセット）でオブジェクト検出モデルが実行されます。完了すると、モデルの精度と誤分類されたオブジェクトが表示されます。最終スコアに満足できない場合は、画像データセットを改善するか、トレーニングパラメータを調整します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture5.png" alt="pir" width={800} height="auto" /></p>

ecoEyeカメラ用にモデルをエクスポートするには、左側のメニューから「Deployment」タブに移動します。「openMV Library」を検索して選択し、「Build」をクリックします。自動的にダウンロードされたzipファイルからファイルを抽出し、「labels.txt」と「trained.tflite」ファイルをSDカードにコピーします。

#### モデルの実行

トレーニング済みモデルを使用して自動オブジェクト分類を行うカメラを実行できます。「ecomain.py」ファイルで以下のパラメータを変更します：`MODE = 1`、`sensor_windowing = True`、`classify_mode = "objects"`、`indicators = True`。スクリプトを実行し、青色LEDが点灯したとき、またはシリアルターミナルに「Waiting for second button press...」と表示されたときにプッシュボタンを押すことに注意してください。フレームバッファには、モデルがトレーニングされたオブジェクトを検出すると、オブジェクトの周囲にバウンディングボックスが表示されたキャプチャ画像が表示されます。これらの画像はSDカードに保存され、バウンディングボックスの座標を含む検出結果はCSVファイルに保存されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture6.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture7.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Embedded_Vision_Camera/Picture8.png" alt="pir" width={800} height="auto" /></p>

このアプリケーションは、IDEに接続せずに実行することも可能です。その場合、「ecomain.py」を「main.py」にリネームし、ケーブルを切断して、2回のプッシュボタン操作でスクリプトを開始します。

## リソース

- **[PDF]** [EcoEye – 組み込みビジョンカメラ データシート](https://files.seeedstudio.com/products/101991121/EcoEye%20-%20Embedded%20Vision%20Camera%20datasheet.pdf)
- **[PDF]** [EcoEye – 組み込みビジョンカメラ ユーザーマニュアル](https://files.seeedstudio.com/products/101991121/EcoEye%20User%20Manual.pdf)

- **[CODE]** [EcoEye – 組み込みビジョンカメラ スクリプト](https://files.seeedstudio.com/products/101991121/ecoEye%20scripts.zip)



## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>