---
description: このwikiは、StackForce Mini Wheeled Legged Robotの組み立てと起動チュートリアル、および開発に必要な学習資料とリンクを提供します。
title: StackForce Mini Wheeled Legged Robot 
keywords:
- StackForce
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/mini_wheeled_legged_robot.webp
slug: /ja/StackForce_Mini_Wheeled_Legged_Robot
last_update:
  date: 12/8/2025
  author: LiShanghang
translation:
    skip: [zh-CN]
---

# StackForce開発プラットフォームベースの二輪二足歩行ロボット入門

:::tip
このチュートリアルは、開発者ができるだけ早く完全な車輪脚ロボットを構築できるよう、組み立てとデバッグの手順のみを提供します。車輪脚ロボットの基本原理を学習する必要がある場合は、[**DengGeのBilibiliチュートリアル動画**](https://www.bilibili.com/video/BV1kz421B73V/?share_source=copy_web&vd_source=dd1f489993457f044ad480eab0e73bdc)を参照してください。二次開発については、他のウェブサイトやフォーラムでチュートリアルを検索できます。
:::

## 紹介

StackForce二輪二足歩行ロボットは、StackForce軽量ロボティクス開発プラットフォームをベースに開発されています。そのコアハードウェアは、StackForce シリーズのメインコントロールボード、モータードライバーボード、サーボドライバーボードで構成されています。

このロボットには、全身運動学モデルと状態適応自己安定化アルゴリズムが含まれています。StackForceプラットフォームのリアルタイム計算能力により、多姿勢制御、複雑な地形での自己安定化、階段降下、様々な斜面での安定移動をサポートします。プラットフォームはRCトランスミッター、Bluetooth、シリアル通信、ワイヤレス制御をサポートします。ユーザーは必要に応じてシステムをプログラムし調整できます。製品は完全なインストールチュートリアルとビデオコースを提供し、コストパフォーマンスの高いデスクトップ二輪二足歩行ロボットです。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/mini_wheeled_legged_robot.webp" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/LeKiwi-Full-Kit-12V-Verision.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 技術リンク

* **DengGeのBilibiliオープンソースチュートリアル動画:** [https://www.bilibili.com/video/BV1kz421B73V/?share_source=copy_web&vd_source=dd1f489993457f044ad480eab0e73bdc](https://www.bilibili.com/video/BV1kz421B73V/?share_source=copy_web&vd_source=dd1f489993457f044ad480eab0e73bdc)

* **車輪脚ロボットコースのオープンソースコード:** [https://gitee.com/StackForce/bipedal_wheeled_robot](https://gitee.com/StackForce/bipedal_wheeled_robot)

* **StackForce軽量ロボティクス開発プラットフォームのドキュメント:** [http://stackforce.cc/#/](http://stackforce.cc/#/)

* **StackForce軽量ロボティクス開発プラットフォームのオープンソースロボットプロジェクト:** [https://gitee.com/StackForce](https://gitee.com/StackForce)

## 主な特徴

1. **オープンソースで低コスト**: オープンソースライセンスに従い、すべてのソースコードと設計ファイルが完全に利用可能で、開発者が自由に学習、修正、二次開発を行えます。
2. **高性能モーター制御**: FOC（Field-Oriented Control）技術を搭載し、オープンループ/クローズドループ速度、位置、トルク制御をサポートし、精密な動作制御を実現します。
3. **強力なハードウェアサポート**: ESP32メインコントローラーを使用し、I2C、SPI、PWMなどの豊富なインターフェースを備え、柔軟な機能拡張を可能にします。
4. **包括的な機能**: 自己バランス、高速移動、姿勢安定化、ワイヤレス制御をサポートし、様々な複雑な地形に適応します。
5. **学習と使用が簡単**: 完全なサンプルコードとビデオチュートリアルが付属し、初心者の学習障壁を大幅に下げます。

## 仕様

| 仕様      | 詳細                                                   |
|--------------------|-----------------------------------------------------------|
| メインコントロールボード | StackForceメインコントロールボード                             |
| モータードライバーボード | 5Aデュアルチャンネルブラシレスモータードライバー（低電力）        |
| モーター             | 2208ジンバルブラシレスモーター                              |
| サーボドライバーボード | IMU統合マルチチャンネルサーボドライバー            |
| 電源       | 12.6Vリチウムポリマーバッテリー                             |
| エンコーダー            | MT6701 14ビット高精度磁気エンコーダー             |
| ワイヤレス制御   | WiFiリモートコントロール + PS4 Bluetoothワイヤレスコントローラー   |
| 総重量       | 540 g                                                     |
| 寸法         | 10.5 × 21.0 cm（L × W）、高さ 12.0–21.0 cm               |

## BOM

[BOMダウンロード](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/BOM.xlsx)

| 品目名 | 数量 | 単位 | 仕様 | 備考/規格 |
|-----------|----------|------|----------------|------------------|
| | | | | |
| **電子部品** | | | | |
| StackForceメインコントロールボード | 1 | 個 | StackForce | |
| StackForce 5A低電力ドライバーボード | 1 | 個 | StackForce | |
| StackForceサーボボード | 1 | 個 | StackForce | |
| MT6701エンコーダー | 2 | 個 | StackForce | |
| 2208ジンバルモーター | 2 | 個 | | |
| DS041MG 500–2500サーボ | 4 | 個 | | |
| MC6C-MINIリモートコントローラー | 1 | 個 | | |
| MC7RBv2レシーバー | 1 | 個 | | |
| 12Vリチウムポリマーバッテリー | 1 | 個 | 19×34×42mm | |
| MR30-Uモーターコネクター | 2 | 個 | | モーター用 |
| SH1.0-5Pエンコーダーケーブル | 2 | セット | | エンコーダー用 |
| 3Pデュポンワイヤー（メス-メス） | 1 | セット | | レシーバー用 |
| | | | | |
| **機械ハードウェア** | | | | |
| M3ロックナット | 4 | 個 | M3 | GB889.1-86 |
| M3ナット | 4 | 個 | M3 | DIN934 |
| ナイロンスタンドオフ | 4 | 個 | 5×3.2×9mm | ABS |
| M3ワッシャー | 4 | 個 | M3 | 304ステンレス |
| ラジアル磁石 | 2 | 個 | 6×2.5mm | |
| 丸頭ネジ M2×4 | 24 | 個 | M2×4 | GB/T845 |
| 丸頭ネジ M2×10 | 12 | 個 | M2×10 | GB/T845 |
| 丸頭ネジ M3×6 | 4 | 個 | M3×6 | GB/T845 |
| 丸頭ネジ M3×8 | 4 | 個 | M3×8 | GB/T845 |
| 丸頭ネジ M3×16 | 4 | 個 | M3×16 | GB/T845 |
| 丸頭ネジ M4×18 | 2 | 個 | M4×18 | GB/T845 |
| M2×6タッピングネジ | 16 | 個 | M2×6 | GB/T845 |
| 皿頭ネジ M2×6 | 46 | 個 | M2×6 | 304ステンレス |
| 皿頭ネジ M3×6 | 16 | 個 | M3×6 | 304ステンレス |
| M3×7+4銅スタンドオフ | 4 | 個 | M3×7+4 | 銅 / GB |
| 6704ZZベアリング | 4 | 個 | Ø27×Ø20×4mm | |
| 6701ZZベアリング | 6 | 個 | Ø18×Ø12×4mm | |
| | | | | |
| **構造部品** | | | | |
| 3Dプリント部品 | 29 | 個 | | |
| 1:10耐摩耗6030-6085タイヤ | 2 | 個 | | |

## 目次
  - [組み立て](https://wiki.seeedstudio.com/ja/StackForce_Mini_Wheeled_Legged_Robot/#組み立て)
  - [キャリブレーション](https://wiki.seeedstudio.com/ja/StackForce_Mini_Wheeled_Legged_Robot/#キャリブレーション)


## 組み立て

[ミニ車輪脚ロボット組み立てドキュメント.pdf](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/Mini-Wheeled-legged%20robot%20installation%20document.pdf)

<div class="video-container">
<iframe width="900" height="500" src="//player.bilibili.com/player.html?isOutside=true&aid=1556188467&bvid=BV121421b7zZ&cid=1616871369&p=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::tip
組み立てには多くのステップがあるため、ガイドに注意深く従ってください。一部の穴はタッピングネジ用に作られており、パッケージ内のネジがチュートリアルのものと異なる場合は正常です。これは組み立てに影響せず、必要に応じて適切な代替ネジを使用できます。
:::

:::caution
組み立て中は、ネジの締め付けに注意してください。ネジ山を潰したり損傷したりしないよう、過度に締めすぎないでください。
:::

## キャリブレーション

まず、[キャリブレーションに必要なコードファイル](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Calibration_code.7z)をダウンロードしてください。

### 環境セットアップ

**ステップ1:** [Visual Studio Code](https://code.visualstudio.com/download)をダウンロードします。

<div align="center">
    <img width="500"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/1_1.png" />
</div>

**ステップ2:** Visual Studio Codeを開き、拡張機能マーケットプレイスから**PlatformIO IDE**拡張機能を検索してインストールします。

インストールをクリックした後、PlatformIOは必要な追加コンポーネントを自動的にダウンロードします。
場合によっては、MinGWが不足している可能性があり、新しいフォルダーの作成ができなくなります。
この場合、**MinGW-w64**を手動でインストールする必要があります。

<details>

<summary> ステップ3：MinGW-w64をダウンロード </summary>

[**車輪脚ロボットツールパックダウンロードリンク**](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Tool_Collection.zip)（MinGW-w64を含む）

ファイルをダウンロードした後、解凍してツールパック内の`mingw64フォルダ`を見つけます。
解凍してから、英語文字のみを使用するディレクトリにインストールします。
`解凍したフォルダ`を開く → `binフォルダ`を開く → `binディレクトリのパス`をコピー
（例：D:\ming\mingw64\bin）。

環境設定：
コンピューターで`システムの詳細設定`を検索して開く → `環境変数` → `システム変数` → `Path` → `新規` → 先ほどコピーした`binパス`を貼り付け → `OK`をクリック。

* 1: `システムの詳細設定`を検索して開きます。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_1.png" />
</div>

* 2: `環境変数`をクリックします。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_2.png" />
</div>

* 3: システム変数の下の`Path`をダブルクリックします。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_3.png" />
</div>

* 4: 新しい環境変数エントリを作成します。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/3_4.png" />
</div>

</details>

ステップ4: コンパイルとアップロードボタンの説明

(**√**: プログラムをコンパイル →: プログラムをハードウェアにアップロード&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Auto**: シリアルポートを選択)

:::tip 
以下はアップロードボタンの説明です。まだプログラムをアップロードしないでください。開発者はまずここでアップロードプロセスを確認できます。
:::

コンピュータをハードウェアに接続した後、`Auto`をクリックします（オプション）。
システムが自動的にシリアルポートを検出し、推奨します。
シリアルポートを選択した後、`Compile`（オプション）と`Upload`をクリックして、プログラムをハードウェアに書き込みます。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/4_1.png" />
</div>


### S1 書き込みとデバッグ

#### S1 チップの接続

USB ケーブルを接続します。USB コネクタの`隙間がある側`を上向きに、`隙間がない側`を下向きにします。`白いボタンを離して`S1 チップに切り替えます（`黄色いライト`が点灯します）。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/烧录1.png" />
</div>

:::tip
**注意：なぜ上下があるのですか？**

ボードには2つのチップがあります—S1はモータープログラム用、S3はサーボ制御プログラム用—Type-Cコネクタは通信用に2つの別々のピン列を使用しています。各チップは書き込み用に異なる列を使用します。白いボタンは、コンピュータがどちらのチップに書き込むかを切り替えます。
:::

#### S1 プログラムの書き込み

方法1：事前に書き込まれたS1モーター制御プログラムに従って、`Vofa シリアルアシスタントのダウンロードと使用ガイド`にスキップできます。

<details>
<summary>方法2：S1モーター制御プログラムを再書き込み（推奨しません）</summary>

VS Code で`BLDC_Control`プロジェクトを開きます。

これにより PlatformIO が必要なライブラリを自動的にインストールするため、**プロジェクトフォルダを直接 VS Code にドラッグしないでください**。代わりに、新しい VS Code ウィンドウを開き、`File` → `Open Folder`を使用してください。

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/1.png" />
</div>

`S1 プログラム`が保存されているフォルダを見つけて、Select Folder をクリックします。

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/2.png" />
</div>

書き込み前に、`登録コード`と`通信モード`を変更する必要があります：

**登録コードの変更：**

各ボードには固有の登録コードがあります。
登録コードは`メイン制御ボードパッケージ`に貼られた`ラベル`に印刷されています。
そのコードを`対応するフィールド`に入力してください。
`S1 シリアル出力`から`登録コード`を読み取ることもできます（インストールガイドで前述）。

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3.png" />
</div>

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/4.png" />
</div>

**通信モードの変更：**

画像に示された場所の値を`ONBOARD`に変更します。（`USB` = S1チップとコンピュータ間のシリアル通信、`ONBOARD` = S1とS3チップ間の通信。）

<div align="center">
    <img width="650"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/5.png" />
</div>

変更後、左下角の`→`アイコンをクリックしてプログラムを書き込みます。

:::tip
**書き込み中の一般的な問題と解決方法：**

1. 書き込み成功の結果

<div align="center">
    <img width="500"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3_1.png" />
</div>

2. これはS3チップで、S1プログラムと一致しません

<div align="center">
    <img width="500"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3_2.png" />
</div>

解決方法：
USB ケーブルが逆さまに差し込まれているかどうか確認してください—`隙間がない側を上向き`にする必要があります。
白いボタンが離されているかどうか確認してください。離されると、`黄色LED`が点灯し、ボードが`S1書き込みモード`であることを示します。

3. シリアルポートが占有されています

<div align="center">
    <img width="500"
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/S1Burn/3_3.png" />
</div>

解決方法：
他のプログラムがシリアルポートを使用しているかどうか確認してください。
Vofa シリアルモニターが`閉じられている`ことを確認してください。
他のすべてのシリアルアシスタントがポートを解放していることを確認してください。
:::

</details>


**Vofa シリアルアシスタントのダウンロードと使用ガイド**

次に、シリアルアシスタントを開き、ボーレートを`115200`に設定してシリアル出力を確認します。
Vofa シリアルアシスタントダウンロードリンク：[Download Center | VOFA-Plus](https://www.vofa.plus/)

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/vofa.png" />
</div>

**S1 モーター制御プログラムデバッグ – 極対数キャリブレーション**

ロボットを持ち上げて車輪を地面から離し、`S1 リセットボタン`を押します。
極対数情報が Vofa に表示されます。車輪のセルフテスト回転が完了するまで待ちます。
検出された極対数値が`7`の場合、キャリブレーションは成功です。以下に示すとおりです：

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/极对数校准.png" />
</div>

:::tip
極対数値が`inf`や他のテキストを表示する場合は、電源が入っているかどうか確認し、配線を確認し、磁石が正しく取り付けられていることを確認してください。

検出値が6、8、または7以外の場合、車輪が締めすぎている可能性があります
（車輪脚取り付けガイドを参照し、`モーターベアリング取り付け`を検索して再取り付けしてください）。

車輪が地面や他の物体に触れている可能性もあります。
ロボットの電源を入れるたび、またはS1がリセットされるたびに、セルフテストが正常に実行されるよう車輪を地面から離す必要があります。

プロセスを繰り返し、極対数が**7**を示すまで`S1 リセットボタン`を押してください。
:::

### S3 オフセット値取得

S1書き込み完了後、`S3チップ`に切り替えてS3プログラムを書き込みます。（USBポートの隙間が下向きになるようにしてください。画像に示されたボタンを押します—ライトが`緑色`になると、システムがS3に切り替わったことを示します。）

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/切换.png" />
</div>

:::caution
プログラムを書き込む前に、必ず太ももアセンブリを取り外してください。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/拆大腿.png" />
</div>
:::

- 1. VSCode で**bipedal_calibrate フォルダ（オフセット値キャリブレーションプログラム）**を開き、プログラムを直接書き込み、その後 Vofa を開いてボーレートを`115200`に設定します。
  `0,0,0,0`のようなシリアル出力が表示されます。これは`サーボ1、2、3、4`のオフセット値を表します。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/S3_1.png" />
</div>

- 2. バッテリーの電源を入れます。サーボの回転が完了した後、脚を地面に対してできるだけ垂直になるように取り付けます。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/S3_2.png" />
</div>

- 3. シリアルターミナルで、`1,2,3,4`のようなコマンドを入力してサーボを制御し、脚が完全に垂直になるまで調整します。
  **方向ガイド：** 脚があなたの方を向いているとき、時計回りは負、反時計回りは正です。

例：上の画像では、サーボ1が少し左に傾き、サーボ2が少し右に傾いています。
`5,-6,0,0`を入力してサーボ1と2を垂直に戻します。（`5`はサーボ1を反時計回りに5単位回転、`-6`はサーボ2を時計回りに6単位回転を意味します。）

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/S3_3.png" />
</div>

同じ方法でサーボ3と4を調整します：
`0,0,x,0`を使用してサーボ3を制御し、`0,0,0,x`を使用してサーボ4を制御します。
すべてのオフセット調整が完了したら、サーボハウジング内の黒いネジを締めて脚を固定します。

:::tip
*現在のオフセット値を記録してください—以下のS3サーボ制御プログラムに書き込む必要があります。*
:::

### S3 キャリブレーションとデバッグ

[StackForce 車輪脚ロボット基本操作マニュアル（PDF）](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Wheeled_Legged_Robot_Operation_Manual.pdf)

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/EN/遥控器.png" />
</div>

#### 1. オフセット値の変更

VS Code で`bipedal`フォルダ（サーボ制御プログラム）を開きます。
`bipedal_data.h`ファイルで、`OFFSET`の下のオフセット値を更新します。
前のプログラムから取得したオフセット値を、以下に示す対応する位置に入力します。

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/4_01.png" />
</div>

#### 2. サーボデバッグ

- プログラム書き込み後、USBを抜きます。
  `5を長押し`してリモートコントローラーの電源を入れます。
  スイッチを設定：`A（左上）を中央`、`B（左下）を下`、`C（右上）を下`。
- ロボットを持ち上げて水平に保ち、ジャイロキャリブレーションとモーターキャリブレーションが進行できるようにします。
  電源ボタンを押してロボットの電源を入れます。
- セルフチェックが完了するまで約10秒待ちます。
  `Aを中央`に設定してサーボを有効にします。初期位置に戻ります。
  `Cを中央`に設定してサーボキャリブレーションを終了します。
  **B**をスライドして脚の高さ（車輪の**Y**座標）を調整します。
  **D**をスライドして車輪を前後に移動（車輪の**X**座標）します。
- 車輪脚ロボットの移動に関する注意：
  **D**が**前方**に押されると、サーボが回転してホイールの**X**座標を**後方**に移動させます。ホイール脚ロボットが前方に傾き、**ロボットが前進**します。

#### 3. SpdDir の設定

モーターの固定回転方向を設定します。**main**ファイルで`motors.setTargets`を検索し、`motor 0`と`motor 1`の`torque`を`2`に設定します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir01.png" />
</div>

Vofaを使用してモーター速度を確認します。Vofaのボーレートを`921600`に設定し、`S3`に接続します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir02.png" />
</div>

プログラムをS3にフラッシュし、Vofa（ボーレート`921600`）を開き、リモートコントローラーの`Aスイッチを上`に設定してモーターを有効にし、電源を入れ、ロボットが**セルフチェック**を完了するまで保持します。（まずVofa–S1でセルフチェックが通過したかどうかを確認することもできます。）

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir03.png" />
</div>

モーターの回転を確認します：

- 左モーター：前進回転は**正**の速度を表示する必要があります。  
  3番目の値（M1速度）が負の場合、`motorStatus.M1SpdDir`を反転させます。正の場合は変更不要です。

- 右モーター：後進回転は**負**の速度を表示する必要があります。  
  2番目の値（M0速度）が負の場合は変更不要です。正の場合は`motorStatus.M0SpdDir`を反転させます。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置SpdDir04.png" />
</div>

:::tip
上記の説明がまだ不明確な場合は、以下の簡略化されたルールを参照してください：

ホイールが**前進**し、Vofaが**負**の値を表示する場合、フィードバック**dir**を`反転`します。

ホイールが**前進**し、Vofaが**正**の値を表示する場合、フィードバック**dir**を変更`しません`。

ホイールが**後進**し、Vofaが**正**の値を表示する場合、フィードバック**dir**を`反転`します。

ホイールが**後進**し、Vofaが**負**の値を表示する場合、フィードバック**dir**を変更`しません`。
:::

#### 4. モーター制御`dir`の設定（`motors.setTargets`を検索）

画像に示すようにモーター制御行のコメントを外し、その下の行をコメントアウトしてから、プログラムをフラッシュします。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置电机控制dir01.png" />
</div>

ロボットの電源を入れます。リセットが完了したら、ロボットを保持しながら前方に傾けます。両方のホイールが前進回転する場合、バランス方向は正しいです。  
左ホイールが後進回転する場合は`M1Dir`を反転させます。右ホイールも同様に調整します。

<div align="center">
    <img width={500}
    src="https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/calibration/设置电机控制dir02.png" />
</div>

これらの手順を完了すると、ロボットを制御できるようになります。以下に操作方法を説明します。また、ドキュメント[StackForce Wheeled_Legged_Robot基本操作マニュアル（PDF）](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Wheeled_Legged_Robot_Operation_Manual.pdf)も参照できます。

前面側ジョイスティック：

* **ステップ1：**
  左上スイッチを`中央`、右上スイッチを`下`、左下スティックを`最下位`に設定します。ロボットを保持し、脚を自然に垂らし、ホイールを地面から離し、本体を水平に保ちます。

  電源を入れ、約`10秒`待ってから、ロボットを地面に置いて直立させます。

* **ステップ2：**
  右上スイッチを`中央`に設定し、左下スティックを`わずかに上`に押し、左上スイッチを`上`に設定します。ロボットがセルフバランスモードに入ります。

  右下スティックの`前後`で前進/後退、`左右`で左右回転を行います。

  左下スティックの`上下`で脚の高さを調整します。

  右上スイッチが`上`にある時、左下スティックの`左右`でロール制御を行います。ロールモードを終了するには電源を切ります。


## ライブデモ

（実際のデモビデオを追加予定）

## 引用

[中文文档](https://wiki.seeedstudio.com/cn/StackForce_Mini_Wheeled_Legged_Robot)

[gitee](https://gitee.com/StackForce/bipedal_wheeled_robot)

[StackForce Wheeled_Legged_Robot基本操作マニュアル（PDF）](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Wheeled_Legged_Robot_Operation_Manual.pdf)

[ミニホイール脚ロボット設置ドキュメント.pdf](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/Mini-Wheeled-legged%20robot%20installation%20document.pdf)

[制御基板回路図フルセット](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Schematic_diagram.7z)

[開発キット用サンプルプロジェクト](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Sample_Code_Documentation.7z)

[顧客登録コード取得](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Registration_code.7z)

[urdf & stl](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/SF_bipedalWheel.zip)

[BOM](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/EN/BOM.xlsx)

[ホイール脚ロボットツールパック](https://files.seeedstudio.com/wiki/robotics/projects/stackfoce/Tool_Collection.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>







