---
description: このWikiでは、Lekiwi の組み立てとデバッグのチュートリアルを提供し、Lerobot フレームワーク内でのデータ収集と学習を実現します。
title: Lekiwi を用いた SO-Arm
keywords:
  - Lerobot
  - Huggingface
  - Car
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.webp
slug: /lerobot_lekiwi
sku: 114090065,E2025090401
last_update:
  date: 11/12/2025
  author: Li shanghang
translation:
  skip: [zh-CN]
createdAt: '2025-05-28'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/lerobot_lekiwi/
---

# Lerobot で Lekiwi を使用する方法

:::tip

このチュートリアルリポジトリでは、2025年6月5日時点で検証済みの安定版 Lerobot を維持しています。現在、Hugging Face は Lerobot に対して多数の新機能を含む大規模アップグレードを展開しています。最新のチュートリアルを体験したい場合は、[公式ドキュメントのガイド](https://huggingface.co/docs/lerobot/lekiwi)に従ってください。

:::

## はじめに

[Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi) は、[SIGRobotics-UIUC](https://github.com/SIGRobotics-UIUC) によって立ち上げられた、完全オープンソースのロボットカー・プロジェクトです。詳細な3Dプリント用ファイルと操作ガイドが含まれており、模倣学習フレームワークである [LeRobot](https://github.com/huggingface/lerobot/tree/main) と互換性を持つよう設計されています。SO101 ロボットアームをサポートし、完全な模倣学習パイプラインを実現します。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/lekiwi_cad_v1.png" />
  </div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/LeKiwi-Full-Kit-12V-Verision.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 主な特長

1. **オープンソースかつ低コスト**:  [Lekiwi](https://github.com/SIGRobotics-UIUC/LeKiwi) によるオープンソースで低コストなロボットカーソリューションです。
2. **LeRobot との統合**: [LeRobot platform](https://github.com/huggingface/lerobot) との統合を前提に設計されています。
3. **豊富な学習リソース**: 組み立てやキャリブレーションガイド、テスト、データ収集、学習、デプロイのチュートリアルなど、包括的なオープンソース学習リソースを提供し、ユーザーが素早く入門しロボットアプリケーションを開発できるよう支援します。
4. **Nvidia との互換性**: reComputer Mini J4012 Orin NX 16 GB を用いてこのアームキットをデプロイできます。
5. **マルチシーンでの応用**: 教育、科学研究、自動化生産、ロボティクスなどの分野に適用でき、さまざまな複雑なタスクにおいて効率的かつ高精度なロボット操作の実現を支援します。

:::caution

Seeed Studio はハードウェア自体の品質にのみ責任を負います。チュートリアルは公式ドキュメントに厳密に従って更新されています。解決できないソフトウェアの問題や環境依存の問題に遭遇した場合は、速やかに [LeRobot platform](https://github.com/huggingface/lerobot) または [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU) に問題を報告してください。
:::

:::danger

- LeKiwi シャーシ内のすべてのサーボモーターには 12V 電源が必要です。5V ロボットアームをお使いのユーザー向けに、12V から 5V へのステップダウンコンバータモジュールを提供しています。なお、この場合はユーザー側で回路の改造が必要になります。

- 12V 電源 - 必要に応じてチェックアウト時にこのオプションを選択できます。すでに 12V 電源をお持ちの場合は、このオプションをスキップし、お使いの電源の出力コネクタを 5521 DC プラグに変換するだけで構いません。

- Raspberry Pi コントローラとカメラ - これらは注文画面から別途購入する必要があります。

:::

## 仕様

| 種類 | Lekiwi |
|--|--|
|  サーボモーター | 3x 12v STS3215 1:345 ギア比|
| 電源 | 12V DC またはバッテリー |
| 角度センサー| 12-bit 磁気エンコーダ |
| 推奨動作温度範囲 | 0℃～40℃ |
| 通信方式| UART |
| 制御方法 | PC |

## 部品表（BOM）

| 部品 | 数量 | 同梱|
|--|--|--|
| STS3215 1:345 12V サーボモーター | 3 | ✅ |
| 全方向ホイール／ユニバーサルホイール | 3 | ✅ |
| Lekiwi 3D プリント筐体 | 1 | ✅ |
| DC-DC 降圧電源モジュール - 24V/12V から 5V | 1 | ✅ |
| モーター制御ボード | 1 | ✅ |
| DC オス - DC オス二股 5521 Y ケーブル | 1 | ✅ |
| USB ケーブル;Type C 2.0 to Type C 2.0-Black;L150mm| 1 | ✅ |
| USB 3.1 Type C to A ケーブル 0.5 m | 1 | ✅ |
| プラグ式電源アダプタ;Black-12V-2A AC/DC | 1 | ✅ |
| M2 M3 M4 種類別ネジセット | 十分な量 | ✅ |
| Raspberry Pi | 1 | オプション |
| USB カメラ | 1 | オプション |
| Depth カメラ | 2 | オプション |
| SO-ARM101 Pro | 1 | オプション |
| 12V 大容量リチウムイオンバッテリーパック E326S| 1 | オプション |

## 初期システム環境

**Ubuntu x86 の場合:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.12
- Torch 2.6  

**Jetson Orin の場合:**

- Jetson JetPack 6.0+
- Python 3.12
- Torch 2.6  

**Raspberry Pi の場合:**

- Raspberry Pi5 4G～16G

## 3D プリントガイド

### パーツ

以下の 3D プリント部品について、すぐに印刷できる STL ファイルを提供しています。これらは一般的な PLA フィラメントを使用し、コンシューマ向け FDM プリンタで印刷できます。Bambu Lab P1S プリンタでテストしました。すべての部品について、bambuslicer に読み込み、自動回転と自動配置を行い、推奨されるサポートを有効にして印刷するだけです。

| アイテム | 数量 | 備考 |
|:---|:---:|:---:|
| [Base plate Top](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer2.stl) | 1 | |
| [Base plate Bottom](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_plate_layer1.stl) | 1 | |
| [Drive motor mount](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/drive_motor_mount_v2.stl) | 3 | |
| [Servo wheel hub](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/servo_wheel_hub.stl) | 3 | サポートを使用|
| [RasPi case Top](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_top.stl) | 1 | 2|
| [RasPi case Bottom](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/pi_case_bottom.stl) | 1 | |
| Arducam [base mount](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/base_camera_mount.stl) および [Wrist mount](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/wrist_camera_mount.stl)| 1 | **[このカメラ](https://www.amazon.com/Arducam-Camera-Computer-Without-Microphone/dp/B0972KK7BC) と互換性あり** |
| Webcam [base mount](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount.stl)、[gripper insert](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/so100_gripper_cam_mount_insert.stl)、および [wrist mount](https://github.com/SIGRobotics-UIUC/LeKiwi/blob/main/3DPrintMeshes/webcam_mount/webcam_mount_wrist.stl) | 1 | **[このカメラ](https://www.amazon.fr/Vinmooog-equipement-Microphone-Enregistrement-conférences/dp/B0BG1YJWFN/)** と互換性あり |

### 印刷パラメータ

提供されている STL ファイルは、多くの FDM プリンタでそのまま印刷できます。以下はテスト済みかつ推奨の設定ですが、他の設定でも動作する可能性があります。

- 材料: PLA+
- ノズル径と精度: ノズル径 0.2mm、レイヤー高さ 0.2mm
- インフィル密度: 15%  
- 印刷速度: 150 mm/s
- 必要に応じて、G-code（スライスファイル）をプリンタにアップロードして印刷します

## LeRobot のインストール

Raspberry Pi 上で実行します:

### 1. [Miniconda をインストール](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```

### 2. シェルを再起動

シェルにコピー＆ペーストします: `source ~/.bashrc` または Mac の場合: `source ~/.bash_profile` もしくは zshell を使用している場合は `source ~/.zshrc`

### 3. lerobot 用の新しい conda 環境を作成して有効化

```bash
conda create -y -n lerobot python=3.12
```

その後、conda 環境を有効化します（lerobot を使うためにシェルを開くたびに実行してください！）:

```bash
conda activate lerobot
```

### 4. LeRobot をクローン

```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. 環境に ffmpeg をインストール

`miniconda` を使用している場合、環境内に `ffmpeg` をインストールします:

```bash
conda install ffmpeg -c conda-forge
```

### 6. feetech モーター用の依存関係付きで LeRobot をインストール

```bash
cd ~/lerobot && pip install -e ".[lekiwi]"
```

## ノートPC（PC）への LeRobot のインストール

すでにノートPCに LeRobot をインストールしている場合は、このステップをスキップできます。そうでない場合は、Pi で行ったのと同じ手順に従ってください。

:::tip
ここでは Command Prompt (cmd) を頻繁に使用します。cmd の使用に慣れていない場合や、コマンドライン操作を復習したい場合は、こちらを参照してください: [Command line crash course](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)
:::

コンピュータ上で実行します:

### 1. [Miniconda をインストール](https://docs.anaconda.com/miniconda/install/#quick-command-line-install)

### 2. シェルを再起動

シェルにコピー＆ペーストします: `source ~/.bashrc` または Mac の場合: `source ~/.bash_profile` もしくは zshell を使用している場合は `source ~/.zshrc`

### 3. lerobot 用の新しい conda 環境を作成して有効化

```bash
conda create -y -n lerobot python=3.12
```

その後、conda 環境を有効化します（lerobot を使うためにシェルを開くたびに実行してください！）:

```bash
conda activate lerobot
```

### 4. LeRobot をクローン

```bash
git clone https://github.com/huggingface/lerobot.git ~/lerobot
```

### 5. 環境に ffmpeg をインストール

`miniconda` を使用している場合、環境内に `ffmpeg` をインストールします:

```bash
conda install ffmpeg -c conda-forge
```

### 6. feetech モーター用の依存関係付きで LeRobot をインストール

```bash
cd ~/lerobot && pip install -e ".[lekiwi]"
```

## 組み立て

<details>
<summary>Lekiwi を組み立てる</summary>

### ビデオチュートリアル

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/_QjhOMSnobU?si=xjhfCztoWZcFwW6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/62_JWFpvJyA?si=0YCwKUJgy0YVL-A0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/r0LtrTidWdA?si=MEdIJ5XzI8-wbpDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/qk1iYHW-0qg?si=0zXmcVIkBXJcf1M5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/RYu7WLpi7jw?si=Tjc5_4-WLE2xyNWr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/q7zp4qIFdnM?si=fIYgI_3xbrWL7wUM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 以下は写真によるチュートリアルです

公式の[組み立てチュートリアル](https://github.com/SIGRobotics-UIUC/LeKiwi)も参照できます。

造形済みパーツを受け取ると、すべての造形コンポーネントは以下のようになります。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/1.jpg" />
</div>

**A. ドライブモーターを12本の m2x6 タップねじを使ってモーターマウントに取り付けます。**

| **Step 1** | **Step 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/2.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/3.jpg) |

**B. ドライブモーターマウントを12本の m3x16 皿ねじを使ってボトムベースプレートに固定します。**

:::tip
ID の配置を覚えておいてください：8 は後輪を表し、7 と 9 はそれぞれ左前輪と右前輪に対応します。
:::

| **Step 1** | **Step 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/4.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/5.jpg) |

**C. ホイールハブをオムニホイールに取り付けます。**

**Step 1 と Step 2**: 3 本のねじを取り外します。

| **Step 1** | **Step 2** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/7.jpg) |

**Step 3 と Step 4**: 9 本の m4x18 皿ねじを使ってホイールハブをオムニホイールに取り付けます。

| **Step 3** | **Step 4** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/8.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/9.jpg) |

**D. 6 本の m3x16 皿ねじを使ってサーボホーンをホイールハブに取り付けます。**

| **Step 1** | **Step 2** |**Step 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/10.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/11.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/12.jpg) |

**E. 3 本の m3x10 皿ねじを使ってサーボホーンをドライブモーターに取り付けます。**

| **Step 1** | **Step 2** |**Step 3** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/15.jpg) |

**H. サーボドライバを追加し、すべての回路を接続します。**

| **Step 1** | **Step 2** |**Step 3** |**Step 4** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/16.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/17.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/18.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/19.jpg) |

| **Step 5** | **Step 6** |**Step 7** |**Step 8** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/20-1.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/21.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/22.jpg) |

**Power IN** は Step8 のように電源に直接接続し、**USB-C** ポートは Raspberry Pi に 5V 電源を供給します。  

追加の **2 ピン端子 (5V & 12V)** について：  

- **7.4V SO10x ロボットアーム**を使用する場合、**Servo Motors Board** を **5V 出力**から給電します。  
- **12V ロボットアーム**を使用する場合、Step 8 のように **DC 電源スプリッタ**から直接 **Servo Motors Board** に給電します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/23.jpg" />
</div>

**I. これで、Raspberry Pi を車両の 2 層目のトッププレートに取り付けることができます。その前に、**USB-C 電源ケーブル**と**USB-C サーボモーター通信ケーブル**の両方を接続し、それらを車両のトップパネルから外側へ引き出してください。**

**Step 1** 電源ケーブルを Raspberry Pi に接続し、トップパネル中央の開口部から引き出します。

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/24.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/25.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/26.jpg) |

**Step 2** シャーシ内の 3 つのサーボモーターのうち、1 つのサーボには 1 本のケーブルしか接続されていません。SO10x ロボットアームを取り付ける必要がある場合は、次のようにしてください：ロボットアームから ID1 ケーブルを取り外します。それをシャーシモーターに接続します。トップパネルを通して引き出し、予備ケーブルとして確保します。

|  | | |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/27.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/28.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) |

**Step 3** ここで、サーボドライバボードからの USB-C を Raspberry Pi の USB ポートに接続できます。

|  | |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/30.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

**J. 12 本の M3×16 ねじを使って、Raspberry Pi とトッププレートの残りのパーツを固定します。**

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/32.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/33.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/34.jpg) |

**K. ここで、1 本の M3x16 ねじと 4 本の M5×25 ねじを使って USB カメラと Follower Arm を取り付けることができます。**

|  |  |  |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/35.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/36.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/37.jpg) |
| ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/29.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/38.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/39.jpg) |

そして、サーボ制御ケーブルと USB カメラの両方が Raspberry Pi に接続されていることを確認してください。

|  |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/31.jpg) |

</details>

:::tip
回路接続を確認してください。組み立て後、Lekiwi は開発ボード（Raspberry Pi / Jetson）に接続されている必要があります。Leader arm は PC に接続してください。

| Lekiwi --> Raspberry Pi / Jetson |

| Leader arm --> PC                |
:::

## モーターを設定する

### Leader arm

各バスサーボアダプタのポートを見つけるには、このスクリプトを実行します：

```bash
lerobot-find-port
```

出力例：

```bash
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081']
Remove the USB cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/tty.usbmodem575E0032081
Reconnect the USB cable.
```

ポートを特定したときの出力例（例：Mac では `/dev/tty.usbmodem575E0031751`、Linux では `/dev/ttyACM0` の可能性があります）：

ポートを特定したときの出力例（例：`/dev/tty.usbmodem575E0032081`、Linux では `/dev/ttyACM1` の可能性があります）：

:::tip

```bash
Finding all available ports for the MotorBus.
['/dev/tty.usbmodem575E0032081']
Remove the USB cable from your MotorsBus and press Enter when done.
```

usb を取り外してから Enter キーを押すことを忘れないでください。そうしないとインターフェースが検出されません。
:::

トラブルシューティング：Linux では、次のコマンドを実行して USB ポートへのアクセス権を付与する必要がある場合があります：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```


### Lekiwi

前述のコマンドに従って正しい USB を見つけ、モーターを設定する必要があります。

モーターの設定手順は SO101 の[ドキュメント](https://huggingface.co/docs/lerobot/lekiwi)に記載されています（Leader arm と同じです）。アームモーターの ID に加えて、モバイルベース用のモーター ID も設定する必要があります。これらは動作させるために特定の順序である必要があります。以下は、モバイルベースのモーター ID とモーター取り付け位置の画像です。LeKiwi では Motor Control ボードを 1 枚しか使用しないことに注意してください。これは、ホイールのモーター ID が 7、8、9 であることを意味します。

このコマンドを実行すると、LeKiwi 用のモーターをセットアップできます。最初にアーム用モーター（ID 6..1）をセットアップし、その後ホイール用モーター（9,8,7）をセットアップします。

```bash
lerobot-setup-motors \
    --robot.type=lekiwi \
    --robot.port=/dev/tty.usbmodem58760431551 # <- paste here the port found at previous step
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/motor_ids.png" />
</div>

## キャリブレーション

次に、リーダーアームとフォロワーアームをキャリブレーションする必要があります。ホイールモーターはキャリブレーションする必要はありません。キャリブレーションプロセスは非常に重要で、あるロボットで学習したニューラルネットワークを別のロボットでも動作させることができます。

### フォロワーアーム（モバイルベース上）のキャリブレーション

アームが Raspberry Pi に接続されていることを確認し、フォロワーアームのキャリブレーションを開始するために、このスクリプトまたは API のサンプルを（SSH 経由で Raspberry Pi 上で）実行します：

```bash
lerobot-calibrate \
    --robot.type=lekiwi \
    --robot.id=my_awesome_kiwi # <- Give the robot a unique name
```

ほとんどのロボットでキャリブレーション方法を統一しているため、この SO100 アームのキャリブレーション手順は Koch や SO101 の手順と同じです。まず、各関節が可動範囲の中央に来る位置までロボットを動かし、`Enter` を押します。次に、すべての関節を可動範囲いっぱいまで動かします。参考として、同じプロセスを SO101 で行っている動画が [こちら](https://huggingface.co/docs/lerobot/lekiwi) にあります。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 有線バージョン

有線版の LeKiwi をお持ちの場合は、すべてのコマンドをノート PC 上で実行してください。

### リーダーアームのキャリブレーション

次に、リーダーアーム（ノート PC / PC に接続されているアーム）をキャリブレーションします。ノート PC 上で次の API サンプルのコマンドを実行してください：

```bash
lerobot-calibrate \
    --teleop.type=so100_leader \
    --teleop.port=/dev/tty.usbmodem58760431551 \ # <- The port of your robot
    --teleop.id=my_awesome_leader_arm # <- Give the robot a unique name
```

## LeKiwi をテレオペレートする

:::tip
Mac を使用している場合、Terminal にキーボードへのアクセス権限を付与する必要があるかもしれません。System Preferences > Security & Privacy > Input Monitoring に移動し、Terminal にチェックを入れてください。
:::

テレオペレートするには、Raspberry Pi に SSH 接続し、`conda activate lerobot` を実行してから、次のスクリプトを実行します：

```bash
python -m lerobot.robots.lekiwi.lekiwi_host --robot.id=my_awesome_kiwi
```

次にノート PC 上でも `conda activate lerobot` を実行し、API サンプルを実行します。その際、`examples/lekiwi/teleoperate.py` 内の `remote_ip` と `port` を正しく設定していることを確認してください。

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/teleoperate.png" />
</div>

```bash
python examples/lekiwi/teleoperate.py
```

ノート PC 上で次のような表示が見えるはずです：```[INFO] Connected to remote robot at tcp://172.17.133.91:5555 and video stream at tcp://172.17.133.91:5556.``` これでリーダーアームを動かし、キーボード（w,a,s,d）を使って前進・左・後退・右に移動できます。また、（z,x）で左旋回・右旋回ができます。（r,f）でモバイルロボットの速度を上げたり下げたりできます。速度モードは 3 つあり、以下の表のとおりです：

| スピードモード | 直線速度 (m/s) | 回転速度 (deg/s) |
| ---------- | ------------------ | ---------------------- |
| Fast       | 0.4                | 90                     |
| Medium     | 0.25               | 60                     |
| Slow       | 0.1                | 30                     |

| キー | 動作              |
| --- | -------------- |
| W   | 前進            |
| A   | 左へ移動        |
| S   | 後退            |
| D   | 右へ移動        |
| Z   | 左旋回          |
| X   | 右旋回          |
| R   | 速度を上げる    |
| F   | 速度を下げる    |

:::tip
別のキーボードを使用している場合は、`LeKiwiRobotConfig` 内で各コマンドに対応するキーを変更できます。
:::

### 有線バージョン

**有線**版の LeKiwi をお持ちの場合は、これら 2 つのテレオペレーションコマンドを含むすべてのコマンドをノート PC 上で実行してください。

## 通信のトラブルシューティング

Mobile SO100 に接続できない場合は、問題を診断して解決するために次の手順に従ってください。

### 1. IP アドレス設定の確認

設定ファイルに Pi の IP が正しく設定されていることを確認してください。Raspberry Pi の IP アドレスを確認するには、（Pi のコマンドラインで）次を実行します：

```bash
hostname -I
```

### 2. ノート PC / PC から Pi に到達できるか確認する

ノート PC から Raspberry Pi に ping を送ってみてください：

```bach
ping <your_pi_ip_address>
```

ping が失敗する場合：

- Pi の電源が入っており、同じネットワークに接続されていることを確認してください。
- Pi で SSH が有効になっているか確認してください。

### 3. SSH 接続を試す

Pi に SSH 接続できない場合、正しく接続されていない可能性があります。次を使用します：

```bash
ssh <your_pi_user_name>@<your_pi_ip_address>
```

接続エラーが発生した場合：

- 次を実行して、Pi で SSH が有効になっていることを確認してください：

  ```bash
  sudo raspi-config
  ```

  その後、**Interfacing Options -> SSH** に移動して有効化します。

### 4. 同じ設定ファイルを使用する

ノート PC / PC と Raspberry Pi の両方で、同じ設定ファイルを使用していることを確認してください。

## データセットを記録する

テレオペレーションに慣れたら、LeKiwi で最初のデータセットを記録できます。

データセットのアップロードには Hugging Face hub の機能を使用します。Hub を以前に使用したことがない場合は、書き込み権限付きトークンを使って CLI からログインできるようにしてください。このトークンは [Hugging Face settings](https://huggingface.co/settings/tokens) から生成できます。

次のコマンドを実行して、トークンを CLI に追加します：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

次に、Hugging Face のリポジトリ名を変数に保存します：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

これでデータセットを記録できます。エピソードを記録してデータセットを hub にアップロードするには、LeKiwi 用に調整されたこの API サンプルを実行します。その前に、スクリプト内の `remote_ip`、`repo_id`、`port`、`task` を必ず調整してください。スクリプトをより長く実行したい場合は、`NB_CYCLES_CLIENT_CONNECTION` を増やすことができます。

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/record.png" />
</div>

```bash
python examples/lekiwi/record.py
```

データセットのアップロード

ローカルでは、データセットは次のフォルダに保存されます：`~/.cache/huggingface/lerobot/{repo-id}`。データ記録の最後に、データセットは Hugging Face のページ（例：https://huggingface.co/datasets/cadene/so101_test）にアップロードされます。この URL は次を実行して取得できます：

```bash
echo https://huggingface.co/datasets/${HF_USER}/so101_test
```

データセットには自動的に `LeRobot` タグが付与され、コミュニティが簡単に見つけられるようになります。また、（このチュートリアルのように）`tutorial` などのカスタムタグを追加することもできます。

Hub 上で他の LeRobot データセットを探すには、`LeRobot` の [tags](https://huggingface.co/datasets?other=LeRobot) を検索してください。

:::tip

### データ収集のコツ

データ記録に慣れたら、学習用により大きなデータセットを作成できます。良い出発点となるタスクは、さまざまな位置にある物体を把持してビンに入れることです。少なくとも 50 エピソード、1 つの位置につき 10 エピソードを記録することをお勧めします。カメラは固定し、記録中は一貫した把持動作を維持してください。また、操作している物体がカメラに映っていることを確認してください。経験則として、カメラ画像だけを見て自分自身でタスクを実行できる程度が目安です。

次のセクションでは、ニューラルネットワークを学習させます。把持が安定して行えるようになったら、データ収集時により多くのバリエーションを加え始めることができます。例えば、把持位置を増やしたり、異なる把持方法を試したり、カメラ位置を変更したりします。

一度にあまり多くのバリエーションを追加しすぎると、結果が悪化する可能性があるため避けてください。

この重要なトピックをさらに深く知りたい場合は、良いデータセットとは何かについて執筆した [blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) [post](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) を参照してください。

### トラブルシューティング

Linux で、データ記録中に左右の矢印キーや Escape キーが効かない場合は、`$DISPLAY` 環境変数が設定されていることを確認してください。[pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html#linux) を参照してください。

:::

### 有線バージョン

**有線**版の LeKiwi をお持ちの場合は、これら 2 つのデータセット記録コマンドを含むすべてのコマンドをノート PC 上で実行してください。


## エピソードをリプレイする

エピソードをリプレイするには、以下の API サンプルを実行します。その際、`remote_ip`、`port`、LeRobotDatasetId、エピソードインデックスを変更してください。ファイルは `examples/lekiwi/replay.py` パスの下にあります。

<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/Replay an episode.png" />
</div>

次のコマンドを実行します：

```bash
python examples/lekiwi/replay.py
```

## ポリシーを学習させる

ロボットを制御するポリシーを学習させるには、`python lerobot/scripts/train.py` スクリプトを使用します。いくつかの引数が必要です。以下はコマンド例です：

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/lekiwi_test \
  --policy.type=act \
  --output_dir=outputs/train/act_lekiwi_test \
  --job_name=act_lekiwi_test \
  --policy.device=cuda \
  --wandb.enable=true # You can choose false if you don't need wandb
```

これを説明します：

1. `--dataset.repo_id=${HF_USER}/lekiwi_test` という引数でデータセットを指定しています。
2. `policy.type=act` を指定しました。これにより `configuration_act.py` から設定が読み込まれます。重要な点として、このポリシーは、データセットに保存されているロボットのモータ状態数、モータアクション数、およびカメラ数（例：`laptop` や `phone`）に自動的に適応します。
4. Nvidia GPU 上で学習しているため `policy.device=cuda` を指定しましたが、Apple シリコンで学習する場合は `policy.device=mps` を使用できます。
5. 学習プロットの可視化に [Weights and Biases](https://docs.wandb.ai/quickstart) を使用するために `wandb.enable=true` を指定しました。これは任意ですが、使用する場合は `wandb login` を実行してログインしていることを確認してください。

学習には数時間かかります。`outputs/train/act_lekiwi_test/checkpoints` にチェックポイントが保存されます。

## ポリシーを評価する

ポリシーを評価するには `evaluate.py` API サンプルを実行し、`remote_ip`、`port`、model などを変更してください。

パスは `examples/lekiwi/evaluate.py` です。
<div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/evaluation.png" />
</div>

```bash
python examples/lekiwi/evaluate.py
```

ご覧のとおり、これは学習用データセットを記録する際に使用したコマンドとほとんど同じです。変更点は 2 つあります：

1. 追加の `policy` 引数があり、ポリシーのチェックポイントへのパスを指定します（例：`outputs/train/eval_act_lekiwi_test/checkpoints/last/pretrained_model`）。モデルチェックポイントを Hub にアップロードしている場合は、モデルリポジトリも使用できます（例：`${HF_USER}/act_lekiwi_test`）。
2. データセット名が `eval` で始まり、推論を実行していることを示します（例：`${HF_USER}/eval_act_lekiwi_test`）。

## ヘルプ 🙋‍

ハードウェアに関する問題はカスタマーサービスにお問い合わせください。使い方に関する質問は Discord に参加してください。

[LeRobot プラットフォーム](https://github.com/huggingface/lerobot)

[LeRobot Discord チャンネル](https://discord.gg/8TnwDdjFGU)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
