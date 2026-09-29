---
description: このWikiでは、SO ARM100の組み立てとデバッグのチュートリアルを提供し、Lerobotフレームワーク内でのデータ収集と学習を実現します。
title: Lerobot で SO10xArm ロボットアームを使用する方法
keywords:
  - Lerobot
  - Huggingface
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m
sku: E24122002, 114993609, 114993608, 108090023, 108090003, 101090141, 101090142
last_update:
  date: 12/24/2024
  author: ZhuYaoHui
createdAt: '2025-06-05'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/lerobot_so100m/
---

# SO-ARM100 および SO-ARM101 ロボットアームと LeRobot のはじめかた

:::tip
このチュートリアルのメンテナンスは最新バージョンの[lerobot](https://huggingface.co/docs/lerobot/index)に更新されています。以前のバージョンのチュートリアルを参照したい場合は、[こちら](https://wiki.seeedstudio.com/ja/lerobot_so100m/)をクリックしてください。
:::

## はじめに

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) は、[TheRobotStudio](https://www.therobotstudio.com/) によって立ち上げられた完全オープンソースのロボットアームプロジェクトです。フォロワーアームとリーダーロボットアームが含まれており、詳細な3Dプリント用ファイルと操作ガイドも提供されています。[LeRobot](https://github.com/huggingface/lerobot/tree/main) は、PyTorch 上で実世界ロボティクス向けのモデル、データセット、ツールを提供することに注力しています。その目的はロボティクスの参入障壁を下げ、誰もがデータセットや事前学習済みモデルを共有することで貢献し、恩恵を受けられるようにすることです。LeRobot は模倣学習を中心に、実世界で検証された最先端の手法を統合しています。人間が収集したデモンストレーションを含むデータセット、事前学習済みモデル群、シミュレーション環境を備えており、ユーザーはロボットの組み立てを行わなくてもすぐに開始できます。今後数週間で、現在入手可能な中で最も低コストかつ高性能なロボットに対する実世界ロボティクスのサポートをさらに拡充していく予定です。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクト概要

SO-ARM10x と reComputer Jetson AI インテリジェントロボットキットは、高精度なロボットアーム制御と強力なAIコンピューティングプラットフォームをシームレスに統合し、包括的なロボット開発ソリューションを提供します。このキットは Jetson Orin または AGX Orin プラットフォームをベースに、SO-ARM10x ロボットアームと LeRobot AI フレームワークを組み合わせることで、教育、研究、産業オートメーションなど複数のシナリオに適用可能なインテリジェントロボットシステムをユーザーに提供します。
このWikiでは、SO ARM10x の組み立てとデバッグのチュートリアルを提供し、Lerobot フレームワーク内でのデータ収集と学習を実現します。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 主な特長

1. **オープンソースかつ低コスト**：  [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100) によるオープンソースで低コストなロボットアームソリューションです。
2. **LeRobot との統合**： [LeRobot platform](https://github.com/huggingface/lerobot) との統合を前提に設計されています。
3. **豊富な学習リソース**： 組み立ておよびキャリブレーションガイド、テスト・データ収集・学習・デプロイのチュートリアルなど、包括的なオープンソース学習リソースを提供し、ユーザーがロボットアプリケーションを迅速に立ち上げ、開発できるよう支援します。
4. **Nvidia との互換性**： reComputer Mini J4012 Orin NX 16 GB と組み合わせて本アームキットをデプロイできます。
5. **マルチシーンでの応用**： 教育、科学研究、自動化生産、ロボティクスなどの分野に適用でき、さまざまな複雑なタスクにおいて効率的かつ高精度なロボット動作の実現を支援します。

## 新着情報：

- 配線の最適化：SO-ARM100 と比較して、SO-ARM101 は配線が改善されており、以前ジョイント3で発生していた断線問題を防止します。新しい配線設計では、関節の可動範囲も制限されなくなりました。
- リーダーアームのギア比の変更：リーダーアームには最適化されたギア比を持つモーターが採用され、性能が向上するとともに、外部ギアボックスが不要になりました。
- 新機能のサポート：リーダーアームはリアルタイムでフォロワーアームを追従できるようになりました。これは、今後導入される学習ポリシーにおいて、人間が介入してロボットの動作を修正できるようにするために重要です。

:::caution

Seeed Studio はハードウェア自体の品質にのみ責任を負います。チュートリアルは公式ドキュメントに厳密に従って更新されています。ソフトウェアの問題や環境依存関係の問題が発生し解決できない場合は、本チュートリアル末尾の FAQ セクションを確認することに加えて、速やかに [LeRobot platform](https://github.com/huggingface/lerobot) または [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU) に問題を報告してください。

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/JrF_ymUvrqc?si=vslu5NNI-ZIzVXLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 仕様

<table>
  <thead>
    <tr>
      <th>タイプ</th>
      <th colSpan="2">SO-ARM100</th>
      <th colSpan="2">SO-ARM101</th>
    </tr>
    <tr>
      <th></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">Arm Kit Pro</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">Arm Kit Pro</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>リーダーアーム</td>
      <td rowSpan="2">全関節に 1:345 のギア比を持つ 12x ST-3215- C001 (7.4V) モーター</td>
      <td rowSpan="2">全関節に 1:345 のギア比を持つ 12x ST-3215-C018/ST-3215-C047 (12V) モーター</td>
      <td colSpan="2">
        ジョイント2専用の 1:345 のギア比を持つ 1x ST-3215- C001 (7.4V) モーター<br />
        ジョイント1および3用の 1:191 のギア比を持つ 2x ST-3215-C044 (7.4V) モーター<br />
        ジョイント4、5、およびグリッパー（ジョイント6）用の 1:147 のギア比を持つ 3x ST-3215-C046 (7.4V) モーター
      </td>
    </tr>
    <tr>
      <td>フォロワーアーム</td>
      <td colSpan="2">SO-ARM100 と同じ</td>
    </tr>
    <tr>
      <td>電源</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm × 2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm × 2.1 mm DC 12 V 2 A（フォロワーアーム）<br />
        5.5 mm × 2.1 mm DC 5 V 4 A（リーダーアーム）
      </td>
    </tr>
    <tr>
      <td>角度センサー</td>
      <td colSpan="4">12ビット磁気エンコーダ</td>
    </tr>
    <tr>
      <td>推奨動作温度</td>
      <td colSpan="4">0 °C ～ 40 °C</td>
    </tr>
    <tr>
      <td>通信方式</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>制御方法</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger

Arm Kit バージョンを購入した場合、両方の電源は 5V です。Arm Kit Pro バージョンを購入した場合は、リーダーロボットアームのキャリブレーションおよびすべての手順には 5V 電源を、フォロワーロボットアームのキャリブレーションおよびすべての手順には 12V 電源を使用してください。

:::

## 部品表（BOM）

| 部品 | 数量 | 同梱|
|--|--|--|
|  サーボモーター | 12 | ✅ |
| モーター制御ボード | 2 | ✅ |
| USB-C ケーブル 2 本 | 1 | ✅ |
| 電源2 | 2 | ✅ |
| テーブルクランプ| 4 | ✅ |
| アームの3Dプリント部品 | 1 | Option |

## 初期システム環境

**Ubuntu x86 の場合：**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.12
- Torch 2.6+  

**Jetson Orin の場合：**

- Jetson JetPack 6.0 および 6.1、6.1 はサポートされていません
- Python 3.12
- Torch 2.3+

## 目次

  [A. 3D プリントガイド](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot)

  [B. LeRobot のインストール](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot)

  [C. モーターの設定](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#configure-the-motors)

  [D. 組み立て](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#assembly)

  [E. キャリブレーション](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#calibrate)

  [F. テレオペレーション](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#teleoperate)

  [G. カメラの追加](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#add-cameras)

  [H. データセットの記録](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#record-the-dataset)

  [I. データセットの可視化](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#visualize-the-dataset)

  [J. エピソードのリプレイ](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#replay-an-episode)

  [K. ポリシーの学習](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#train-a-policy)

  [L. ポリシーの評価](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#evaluate-your-policy)

## 3D プリントガイド

:::caution
SO101 の公式アップデートに伴い、SO100 は今後サポートされず、公式の方針に従ってソースファイルは削除されますが、ソースファイルは引き続き当社の[Makerworld](https://makerworld.com/zh/models/908660)で見つけることができます。ただし、以前に SO100 を購入したユーザーについては、チュートリアルとインストール方法は引き続き互換性があります。SO101 のプリントは、SO100 のモーターキットの取り付けと完全に互換性があります。
:::

### ステップ 1: プリンタを選ぶ

提供されている STL ファイルは、多くの FDM プリンタでそのまま印刷できるようになっています。以下はテスト済みで推奨される設定ですが、他の設定でも動作する場合があります。

- 材料：PLA+
- ノズル径と精度：0.4mm ノズル径で 0.2mm レイヤー高さ、または 0.6mm ノズルで 0.4mm レイヤー高さ。
- インフィル密度：15%  

### ステップ 2: プリンタをセットアップする

- プリンタがキャリブレーションされており、プリンタ固有の手順に従ってベッドレベリングが正しく行われていることを確認します。
- プリントベッドを清掃し、ほこりや油分が付着していないことを確認します。水やその他の液体でベッドを清掃した場合は、ベッドを乾かしてください。
- プリンタが推奨している場合は、標準的なスティックのりを使用し、ベッドのプリントエリア全体に薄く均一に塗布します。ダマやムラのある塗布は避けてください。
- プリンタ固有の手順に従ってフィラメントをロードします。
- プリンタの設定が上記の推奨設定と一致していることを確認します（ほとんどのプリンタには複数の設定があるため、最も近いものを選択してください）。
- サポートは「すべて」に設定しますが、水平方向に対して 45 度を超える傾斜は無視します。
- 水平軸を持つネジ穴の内部にはサポートが入らないようにしてください。

### ステップ 3: パーツを印刷する

リーダーまたはフォロワー用のすべてのパーツは、サポート材を最小限に抑えるために、z 方向が上になるように正しく向きを揃えたうえで、簡単に 3D プリントできるよう 1 つのファイルにまとめられています。

- プリンタのベッドサイズが 220mm x 220mm（Ender など）の場合は、次のファイルを印刷します：
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- プリンタのベッドサイズが 205mm x 250mm（Prusa/Up など）の場合：
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## LeRobot をインストールする

pytorch や torchvision などの環境は、使用している CUDA に基づいてインストールする必要があります。

1. Miniconda をインストールします：
Jetson の場合：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

または、X86 Ubuntu 22.04 の場合：

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. lerobot 用に新しい conda 環境を作成して有効化します

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

3. Lerobot をクローンします：

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. miniconda を使用している場合は、環境内に ffmpeg をインストールします：

```bash
conda install ffmpeg -c conda-forge
```

:::tip
これは通常、libsvtav1 エンコーダでコンパイルされた、プラットフォーム用の ffmpeg 7.X をインストールします。libsvtav1 がサポートされていない場合（`ffmpeg -encoders` でサポートされているエンコーダを確認）、次のことができます：

- [任意のプラットフォーム] 明示的に ffmpeg 7.X を次のコマンドでインストールします：

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Linux のみ] ffmpeg のビルド依存関係をインストールし、libsvtav1 を有効にしてソースから ffmpeg をコンパイルし、`which ffmpeg` で確認できる、インストールしたものに対応する ffmpeg バイナリを使用していることを確認します。

このようなエラーが発生した場合は、このコマンドも使用できます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

:::

5. feetech モーター用の依存関係付きで LeRobot をインストールします：

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

Jetson Jetpack 6.0+ デバイスの場合（このステップを実行する前に、ステップ 5 から [Pytorch-gpu と Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) を必ずインストールしてください）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. Pytorch と Torchvision を確認する

pip で lerobot 環境をインストールすると、元の Pytorch と Torchvision がアンインストールされ、CPU 版の Pytorch と Torchvision がインストールされるため、Python で確認を行う必要があります。

```python
import torch
print(torch.cuda.is_available())
```

出力結果が False の場合は、[公式サイトのチュートリアル](https://pytorch.org/index.html) に従って Pytorch と Torchvision を再インストールする必要があります。

Jetson デバイスを使用している場合は、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) に従って Pytorch と Torchvision をインストールしてください。

## モーターを設定する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

SO-ARM101 のサーボのキャリブレーションおよび初期化プロセスは、方法とコードの両方の点で SO-ARM100 と同じです。ただし、SO-ARM101 のリーダーアームの最初の 3 つの関節のギア比は SO-ARM100 とは異なるため、それらを区別して慎重にキャリブレーションすることが重要です。

モーターを設定するには、1 つのバスサーボアダプタと 6 個のモーターをリーダーアーム用に割り当て、同様にもう 1 つのバスサーボアダプタと 6 個のモーターをフォロワーアーム用に割り当てます。どのモーターがフォロワー F 用か、リーダー L 用か、そして ID が 1 から 6 のいくつであるかを各モーターにラベルを書き込んでおくと便利です。**F1–F6** を **Follower Arm** の関節 1〜6、**L1–L6** を **Leader Arm** の関節 1〜6 を表すものとして使用します。対応するサーボモデル、関節の割り当て、およびギア比の詳細は次のとおりです：

| サーボモデル                            | ギア比 | 対応する関節         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
ここで、5V または 12V の電源をモーターバスに接続する必要があります。STS3215 7.4V モーターには 5V、STS3215 12V モーターには 12V を使用します。リーダーアームは常に 7.4V モーターを使用するため、12V と 7.4V のモーターが混在している場合は、誤ってモーターを焼損させないよう、正しい電源を接続していることに注意してください。次に、モーターバスを USB 経由でコンピュータに接続します。USB は電源を供給しないため、電源と USB の両方を接続する必要があることに注意してください。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

***以下はコードによるキャリブレーション手順です。上の画像の配線サーボを参照しながらキャリブレーションを行ってください***

アームに対応する USB ポートを見つける
各アームに対して正しいポートを見つけるには、ユーティリティスクリプトを 2 回実行します：

```bash
lerobot-find-port
```

出力例：

```bash
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.
```

:::tip
USB を抜くことを忘れないでください。そうしないとインターフェースが検出されません。
:::

フォロワーアームのポートを特定する際の出力例（Mac では `/dev/tty.usbmodem575E0031751`、Linux では `/dev/ttyACM0` など）：

リーダーアームのポートを特定する際の出力例（`/dev/tty.usbmodem575E0032081`、または Linux では `/dev/ttyACM1` など）：

次のコマンドを実行して、USB ポートへのアクセス権を付与する必要がある場合があります：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**モーターを設定する**

:::danger
リーダーモーター（ST-3215-C046, C044, 001）のキャリブレーションには 5V 電源を使用してください。
:::

| **Leader Arm 関節 6 のキャリブレーション** | **Leader Arm 関節 5 のキャリブレーション** | **Leader Arm 関節 4 のキャリブレーション** | **Leader Arm 関節 3 のキャリブレーション** | **Leader Arm 関節 2 のキャリブレーション** | **Leader Arm 関節 1 のキャリブレーション** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

:::danger
Arm Kit バージョン（ST-3215-C001）を購入した場合は 5V 電源を使用してください。Arm Kit Pro バージョンを購入した場合は、サーボ（ST-3215-C047/ST-3215-C018）のキャリブレーションに 12V 電源を使用してください。
:::

| **Follower Arm 関節 6 のキャリブレーション** | **Follower Arm 関節 5 のキャリブレーション** | **Follower Arm 関節 4 のキャリブレーション** | **Follower Arm 関節 3 のキャリブレーション** | **Follower Arm 関節 2 のキャリブレーション** | **Follower Arm 関節 1 のキャリブレーション** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

:::tip
繰り返しになりますが、サーボの関節 ID とギア比が SO-ARM101 のものと厳密に対応していることを必ず確認してください。
:::

コンピュータからフォロワーアームのコントローラボードまで USB ケーブルを接続し、電源も接続します。その後、次のコマンドを実行します。

```bash
lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

次のような指示が表示されるはずです。

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

指示どおり、グリッパーのモーターを接続します。このとき、ボードに接続されているモーターがそのモーターだけであること、またそのモーター自体がまだ他のモーターとデイジーチェーン接続されていないことを確認してください。[Enter] を押すと、スクリプトが自動的にそのモーターの ID とボーレートを設定します。

その後、次のメッセージが表示されます：

```bash
'gripper' motor id set to 6
```

続いて、次の指示が表示されます：

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

コントローラーボードから 3 ピンケーブルを取り外して構いませんが、反対側でグリッパーモーターに接続されたままにしておいても問題ありません。すでに正しい位置にあるためです。次に、別の 3 ピンケーブルを手首ロールモーターに接続し、それをコントローラーボードに接続します。前のモーターと同様に、ボードに接続されているモーターがそのモーターだけであり、かつそのモーター自体が他のモーターに接続されていないことを確認してください。

:::caution
指示に従って、各モーターに対して同じ操作を繰り返してください。
:::

:::tip
Enter を押す前に、各ステップで配線を確認してください。例えば、ボードを操作している間に電源ケーブルが外れてしまう可能性があります。
:::

すべて完了すると、スクリプトは単に終了し、その時点でモーターは使用可能な状態になります。各モーターから次のモーターへ 3 ピンケーブルを接続し、最初のモーター（id=1 の「shoulder pan」）からのケーブルをコントローラーボードに接続します。コントローラーボードはアームのベースに取り付けることができます。

リーダーアームについても同じ手順を実行します。

```bash
lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</TabItem>

</Tabs>

## 組み立て

:::tip

- SO-ARM101 のデュアルアーム組み立て手順は SO-ARM100 と同じです。唯一の違いは、SO-ARM101 ではケーブルクリップが追加されていることと、リーダーアームの関節サーボのギア比が異なることです。そのため、SO100 と SO101 のどちらも、以下の内容を参照して取り付けることができます。
- 組み立て前に、モーターの型番と減速比をもう一度確認してください。SO100 を購入した場合は、このステップは無視して構いません。SO101 を購入した場合は、以下の表を確認して F1〜F6 と L1〜L6 を区別してください。

:::

  | サーボモデル                            | ギア比 | 対応する関節         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
**SO101 Arm Kit Standard Edition** を購入した場合、すべての電源は 5V です。**SO101 Arm Kit Pro Edition** を購入した場合、リーダーアームは各ステップで 5V 電源を使用してキャリブレーションおよび動作させる必要があり、フォロワーアームは各ステップで 12V 電源を使用してキャリブレーションおよび動作させる必要があります。
:::

**リーダーアームの組み立て**

| **ステップ 1** | **ステップ 2** | **ステップ 3** | **ステップ 4** | **ステップ 5** | **ステップ 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **ステップ 7** | **ステップ 8** | **ステップ 9** | **ステップ 10** | **ステップ 11** | **ステップ 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **ステップ 13** | **ステップ 14** | **ステップ 15** | **ステップ 16** | **ステップ 17** | **ステップ 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **ステップ 19** | **ステップ 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**フォロワーアームの組み立て**

:::tip

- フォロワーアームの組み立て手順は、基本的にリーダーアームと同じです。唯一の違いは、ステップ 12 以降のエンドエフェクタ（グリッパーとハンドル）の取り付け方法です。

:::

| **ステップ 1** | **ステップ 2** | **ステップ 3** | **ステップ 4** | **ステップ 5** | **ステップ 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **ステップ 7** | **ステップ 8** | **ステップ 9** | **ステップ 10** | **ステップ 11** | **ステップ 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **ステップ 13** | **ステップ 14** | **ステップ 15** | **ステップ 16** | **ステップ 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

## キャリブレーション

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

:::danger
**SO101 Arm Kit Standard Edition** を購入した場合、すべての電源は 5V です。**SO101 Arm Kit Pro Edition** を購入した場合、リーダーアームは各ステップで 5V 電源を使用してキャリブレーションおよび動作させる必要があり、フォロワーアームは各ステップで 12V 電源を使用してキャリブレーションおよび動作させる必要があります。
:::

次に、SO-10x ロボットに電源とデータケーブルを接続してキャリブレーションを行い、同じ物理位置にあるときにリーダーアームとフォロワーアームが同じ位置値を持つようにする必要があります。このキャリブレーションは、ある SO-10x ロボットで学習したニューラルネットワークを別の SO-10x ロボットでも動作させるために不可欠です。ロボットアームを再キャリブレーションする必要がある場合は、`~/.cache/huggingface/lerobot/calibration/robots` または `~/.cache/huggingface/lerobot/calibration/teleoperators` 配下のファイルを削除してから、ロボットアームを再キャリブレーションしてください。そうしないと、エラープロンプトが表示されます。ロボットアームのキャリブレーション情報は、このディレクトリ配下の JSON ファイルに保存されます。

**フォロワーアームの手動キャリブレーション**

6 つのロボットサーボのインターフェースを 3 ピンケーブルで接続し、シャーシサーボをサーボドライブボードに接続してから、次のコマンドまたは API の例を実行してロボットアームをキャリブレーションしてください：

***まずインターフェース権限を付与します***

```bash
sudo chmod 666 /dev/ttyACM*
```

***次にフォロワーアームをキャリブレーションします***

```python
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \# <- The port of your robot
    --robot.id=my_awesome_follower_arm  # <- Give the robot a unique name
```

以下のビデオは、キャリブレーションの実行方法を示しています。まず、すべての関節が可動範囲の中央に来る位置までロボットを動かす必要があります。その後、Enter を押してから、各関節を可動範囲全体にわたって動かしてください。

**リーダーアームの手動キャリブレーション**

リーダーアームをキャリブレーションするために同じ手順を実行し、次のコマンドまたは API の例を実行します：

```python
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \# <- The port of your robot
    --teleop.id=my_awesome_leader_arm  # <- Give the robot a unique name
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## テレオペレーション

**シンプルなテレオペ**
これでロボットをテレオペレーションする準備が整いました！次のシンプルなスクリプトを実行します（接続したりカメラを表示したりはしません）：

ロボットに関連付けられた ID はキャリブレーションファイルを保存するために使用されます。同じ構成を使用する場合、テレオペレーション、記録、評価の際には同じ ID を使用することが重要です。

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm
```

teleoperate コマンドは自動的に以下を行います：

1. 不足しているキャリブレーションを特定し、キャリブレーション手順を開始します。
2. ロボットとテレオペデバイスに接続し、テレオペレーションを開始します。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## カメラを追加する

<details>
<summary> Orbbec Gemini2 Depth Camera を使用する場合 </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

- 🚀 ステップ 1: Orbbec SDK 依存環境をインストールする

1. `pyorbbec` リポジトリをクローンします

   ```bash
   cd ~/
   git clone https://github.com/orbbec/pyorbbecsdk.git
   ```

2. SDK 用の対応する **.whl ファイル** をダウンロードしてインストールします  
   [pyorbbecsdk Releases](https://github.com/orbbec/pyorbbecsdk/releases) にアクセスし、  
   使用している Python バージョンに基づいて選択してインストールします。例えば：

   ```bash
   pip install pyorbbecsdk-x.x.x-cp310-cp310-linux_x86_64.whl
   ```

3. `pyorbbec` ディレクトリ内で依存関係をインストールします

   ```bash
   cd ~/pyorbbecsdk
   pip install -r requirements.txt
   ```

   `numpy` のバージョンを強制的に `1.26.0` にダウングレードします

    ```bash
    pip install numpy==1.26.0
    ```

  赤いエラーメッセージは無視してかまいません。

4. Orbbec SDK を `~/lerobot/src/cameras` ディレクトリにクローンします

  ```bash
  cd ~/lerobot/src/cameras
  git clone https://github.com/ZhuYaoHui1998/orbbec.git
  ```

5. utils.py と **init**.py を修正します

- `~/lerobot/src/lerobot/cameras` ディレクトリ内の `utils.py` を見つけ、40 行目に次のコードを追加します：

```python
elif cfg.type == "orbbec":
            from .orbbec.camera_orbbec import OrbbecCamera

            cameras[key] = OrbbecCamera(cfg)
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/utils.png" />
</div>

- `~/lerobot/src/lerobot/cameras` ディレクトリ内の `__init__.py` を見つけ、18 行目に次のコードを追加します：

```python
from .orbbec.configuration_orbbec import OrbbecCameraConfig
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/init.png" />
</div>

- 🚀 ステップ 2: 関数呼び出しとサンプル

以下のすべての例で、`so101_follower` を使用しているロボットアームの実際のモデル（例：`so100` / `so101`）に置き換えてください。

`focus_area` ハイパーパラメータを追加しました。ロボットアームにとって、あまりに遠い距離の深度データは意味がありません（到達したり物体を把持したりできないため）、`focus_area` より小さいまたは大きい深度データは黒で表示されます。デフォルトの `focus_area` は (20, 600) です。  
現在サポートされている解像度は、幅 640、高さ 880 のみです。

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/orbbec_result.png" />
</div>

データ収集、学習、評価などの後続のタスクについては、通常の RGB コマンドの場合と手順は同じです。通常の RGB コマンド内の該当部分を次のように置き換えるだけでかまいません：

```bash
  --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
```

その後、単眼 RGB カメラを追加で 1 台追加することもできます。

</details>

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して操作できます。
:::

カメラをインスタンス化するには、カメラ識別子が必要です。この識別子は、コンピュータを再起動したりカメラを再接続したりすると変更される場合があり、この挙動は主にオペレーティングシステムに依存します。

システムに接続されているカメラのインデックスを見つけるには、次のスクリプトを実行します：

```python
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

ターミナルには次の情報が出力されます。

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

各カメラで撮影された画像は、`outputs/captured_images` ディレクトリで確認できます。

:::warning
Intel RealSense カメラを macOS で使用する際に、次のようなエラーが発生することがあります：OSError finding RealSense cameras: failed to set power state。これは同じコマンドを sudo 権限で実行することで解決できます。なお、macOS で RealSense カメラを使用するのは不安定です。
:::

その後、次のコードを実行することで、テレオペレーション中にコンピュータ上でカメラ映像を表示できるようになります。これは、最初のデータセットを記録する前にセットアップを準備するのに役立ちます。

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

カメラがさらにある場合は、`--robot.cameras` を変更してカメラを追加できます。index_or_path の形式は、`python -m lerobot.find_cameras opencv` によって出力されるカメラ ID の末尾の数字によって決まることに注意してください。

:::tip
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すこともできますし、`YUYV` 形式を試すこともできます。ただし後者では画像の解像度と FPS が低下し、ロボットアームの動作にラグが発生します。現在、`MJPG` 形式では、`1920*1080` の解像度で `30FPS` を維持しながら 3 台のカメラをサポートできます。とはいえ、2 台のカメラを同じ USB ハブ経由でコンピュータに接続することは依然として推奨されません。
:::


例えば、サイドカメラを追加したい場合：

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

:::tip
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すこともできますし、`YUYV` 形式を試すこともできます。ただし後者では画像の解像度と FPS が低下し、ロボットアームの動作にラグが発生します。現在、`MJPG` 形式では、`1920*1080` の解像度で `30FPS` を維持しながら 3 台のカメラをサポートできます。とはいえ、2 台のカメラを同じ USB ハブ経由でコンピュータに接続することは依然として推奨されません。
:::


:::tip
このようなバグが見つかった場合。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

rerun のバージョンをダウングレードすることで問題を解決できます。

```bash
pip3 install rerun-sdk==0.23
```

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットを記録する

- データセットをローカルに保存したい場合は、そのまま実行できます：

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

その中で、`repo_id` は任意に変更でき、`push_to_hub=false` とします。最終的に、データセットはホームフォルダ内の `~/.cache/huggingface/lerobot` ディレクトリに保存され、そこで前述の `seeedstudio123/test` フォルダが作成されます。

- データセットをアップロードするために Hugging Face Hub の機能を使いたい場合で、まだ設定していないときは、[Hugging Face settings](https://huggingface.co/settings/tokens) から作成できる書き込み権限付きトークンを使ってログインしていることを確認してください：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

これらのコマンドを実行するために、Hugging Face のリポジトリ名を変数に保存します：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

5 エピソードを記録し、データセットを Hub にアップロードします：

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

次のような行がたくさん表示されます：

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**Record 関数**

**record** 関数は、ロボットの動作中にデータを取得・管理するための一連のツールを提供します。  

**1. データ保存**

- データは `LeRobotDataset` 形式で保存され、記録中にディスクへ書き込まれます。
- 既定では、記録後にデータセットはあなたの Hugging Face ページにプッシュされます。  
- アップロードを無効にするには、次を使用します：`--dataset.push_to_hub=False`

**2. チェックポイントと再開**

- 記録中にチェックポイントが自動的に作成されます。  
- 中断後に再開するには、同じコマンドを `--resume=true` を付けて再実行します。

⚠️ 重要な注意：再開する際は、`--dataset.num_episodes` を「データセット全体の目標エピソード数」ではなく、「追加で記録したいエピソード数」に設定してください。  

- 最初から記録をやり直したい場合は、データセットディレクトリを**手動で削除**してください。

**3. 記録パラメータ**

コマンドライン引数を使ってデータ記録の流れを設定します：

| パラメータ | 説明 | デフォルト |  
|-----------|-------------|---------|  
| --dataset.episode_time_s | 各データエピソードの長さ（秒） | 60 |  
| --dataset.reset_time_s | 各エピソード後の環境リセット時間（秒） | 60 |  
| --dataset.num_episodes | 記録するエピソードの総数 | 50 |  

**4. 記録中のキーボード操作**

キーボードショートカットを使ってデータ記録の流れを制御します：

| キー | 動作 |  
|-----|--------|  
| →（右矢印） | 現在のエピソードを早期終了／リセットし、次へ進む。 |  
| ←（左矢印） | 現在のエピソードをキャンセルし、録り直す。 |  
| ESC | セッションを即座に停止し、動画をエンコードしてデータセットをアップロードする。 |  

:::tip

キーボードが動作しない場合は、別バージョンの pynput をインストールする必要があるかもしれません。

```bash
pip install pynput==1.6.8
```

:::

**データ収集のヒント**

- タスクの提案：さまざまな位置にある物体を把持し、ビンの中に置く。  
- 規模：50 エピソード以上を記録（位置ごとに 10 エピソード）。  
- 一貫性：  
  - カメラを固定する。  
  - 同じ把持動作を維持する。  
  - 操作対象の物体がカメラ映像内で見えるようにする。  
- 段階的な拡張：  
  - 新しい位置・手法・カメラ調整などのバリエーションを加える前に、まずは安定して把持できるようにする。  
  - 失敗を防ぐため、複雑さを急激に増やすことは避ける。  

💡 経験則：カメラ画像だけを見て、自分自身でタスクを実行できる程度であるべきです。  

この重要なトピックをさらに深く知りたい場合は、良いデータセットとは何かについて執筆した[ブログ記事](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset)を参照してください。

**トラブルシューティング**

Linux 固有の問題：  
記録中に Right Arrow/Left Arrow/ESC キーが反応しない場合：  

- `$DISPLAY` 環境変数が設定されているか確認してください（[pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html) を参照）。  

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットの可視化

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

もし `--control.push_to_hub=true` でデータセットを Hub にアップロードしていれば、次のコマンドで得られるリポジトリ ID をコピー＆ペーストすることで、[オンラインでデータセットを可視化](https://huggingface.co/spaces/lerobot/visualize_dataset)できます：

```bash
echo ${HF_USER}/so101_test  
```

もし `--dataset.push_to_hub=false` でアップロードしていない場合でも、次の方法でローカルに可視化できます：

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/so101_test \
```

もし `--dataset.push_to_hub=false` でアップロードする場合でも、次の方法でローカルに可視化できます：

```bash
lerobot-dataset-viz \
  --repo-id seeed_123/so101_test \
```

**ここで、`seeed_123` はデータ収集時に定義したカスタムの `repo_id` 名です。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
</div>

## エピソードのリプレイ

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

便利な機能として `replay` 関数があり、これを使うと自分で記録した任意のエピソードや、公開されている任意のデータセットのエピソードを再生できます。この機能により、ロボットの動作の再現性をテストしたり、同一モデルのロボット間での転移性を評価したりできます。

以下のコマンド、または API のサンプルを使って、ロボット上で最初のエピソードをリプレイできます：

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode=0
```

ロボットは、あなたが記録したものと同様の動きを再現するはずです。

## 学習と評価


<details>

<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

[ACT](https://huggingface.co/docs/lerobot/act) を参照してください。

ロボットを制御するポリシーを学習させるには、[lerobot-train](https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/train.py) スクリプトを使用します。 

**学習（Train）**


```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000 
```

**ローカルデータセットで学習したい場合は、`repo_id` がデータ収集時に使用したものと一致していることを確認し、`--policy.push_to_hub=False` を追加してください。**

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

これについて説明します：

- **データセットの指定**：`--dataset.repo_id=${HF_USER}/so101_test` というパラメータでデータセットを指定します。
- **学習ステップ数**：`--steps=300000` を使って学習ステップ数を変更します。アルゴリズムのデフォルトは 800000 ステップであり、タスクの難易度や学習中の loss を見ながら調整できます。
- **ポリシータイプ**：`policy.type=act` でポリシーを指定します。同様に、[`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`] などのポリシーを切り替えることができ、その場合は `configuration_act.py` から設定が読み込まれます。重要な点として、このポリシーは、あなたのロボット（例：`laptop` や `phone`）のモータ状態・モータアクション・カメラ数に自動的に適応します。これらの情報はすでにデータセット内に保存されているためです。
- **デバイスの選択**：Nvidia GPU 上で学習しているため `policy.device=cuda` を指定していますが、Apple Silicon で学習する場合は `policy.device=mps` を使用できます。
- **可視化ツール**：学習チャートを [Weights and Biases](https://docs.wandb.ai/quickstart) で可視化するために `wandb.enable=true` を指定しています。これは任意ですが、使用する場合は `wandb login` を実行してログインしていることを確認してください。


**評価（Evaluate）**

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

[`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) の `record` 関数を、ポリシーのチェックポイントを入力として使うことができます。例えば、次のコマンドを実行して 10 エピソードの評価を記録します：

```bash
lerobot-record \
  --robot.type=so100_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video10, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: intelrealsense, serial_number_or_name: 233522074606, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_so100 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=${HF_USER}/my_policy
```

例えば次のようになります：

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

1. `--policy.path` パラメータは、ポリシー学習結果の重みファイルへのパスを示します（例：`outputs/train/act_so101_test/checkpoints/last/pretrained_model`）。モデル学習結果の重みファイルを Hub にアップロードした場合は、モデルリポジトリ（例：`${HF_USER}/act_so100_test`）を使用することもできます。

2. データセット名 `dataset.repo_id` は `eval_` で始まります。この操作により、評価中の動画とデータが個別に記録され、`seeed/eval_test123` のような `eval_` で始まるフォルダに保存されます。

3. 評価フェーズ中に `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` に遭遇した場合は、まず `eval_` で始まるフォルダを削除してから、再度プログラムを実行してください。

4. `mean is infinity. You should either initialize with stats as an argument or use a pretrained model` というメッセージが表示された場合、`--robot.cameras` パラメータ内の front や side などのキーワードは、データセット収集時に使用したものと厳密に一致している必要があることに注意してください。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


</details>


<details>
<summary> SmolVLA </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) は、Hugging Face が提供するロボティクス向け軽量ファウンデーションモデルです。LeRobot データセット上で簡単にファインチューニングできるよう設計されており、開発を加速するのに役立ちます。

**環境をセットアップする**

次のコマンドを実行して SmolVLA の依存関係をインストールします：

```bash
pip install -e ".[smolvla]"
```

**自分のデータで SmolVLA をファインチューニングする**

[smolvla_base](https://hf.co/lerobot/smolvla_base)（事前学習済み 4.5 億パラメータモデル）を使用し、自分のデータでファインチューニングします。モデルを 20k ステップ学習させると、単一の A100 GPU でおおよそ 4 時間かかります。ステップ数は性能とユースケースに応じて調整してください。

GPU デバイスがない場合は、[Google Colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb) 上のノートブックを使って学習できます。

学習スクリプトには `--dataset.repo_id` を使ってデータセットを渡します。インストールをテストしたい場合は、[SmolVLA Paper](https://huggingface.co/papers/2506.01844) 用に収集したデータセットの 1 つを使用する、次のコマンドを実行してください。

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

:::tip
GPU に余裕があり、読み込み時間が短く保てる限り、小さいバッチサイズから始めて徐々に増やしていくことができます。
:::

ファインチューニングは一種の職人技です。ファインチューニング用オプションの完全な一覧を確認するには、次を実行します：

```bash
lerobot-train --help
```

**ファインチューニングしたモデルを評価し、リアルタイムで実行する**

エピソードを記録する場合と同様に、HuggingFace Hub にログインしておくことを推奨します。対応する手順は [Record a dataset](https://huggingface.co/docs/lerobot/il_robots) を参照してください。ログイン後は、次のようにして自分の環境で推論を実行できます：

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \ # <- Use your port
  --robot.id=my_blue_follower_arm \ # <- Use your robot id
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \ # <- Use your cameras
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \  # <- This will be the dataset name on HF Hub
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=so100_leader \
  # --teleop.port=/dev/ttyACM0 \
  # --teleop.id=my_red_leader_arm \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME # <- Use your fine-tuned model
```

評価環境に応じて、評価スイート用に記録するエピソードの時間や本数を設定できます。

</details>

<details>
<summary> LIBERO </summary>

[LIBERO](https://huggingface.co/docs/lerobot/libero) は、生涯ロボット学習を研究するために設計されたベンチマークです。ロボットは工場で一度だけ事前学習されるのではなく、時間の経過とともに人間のユーザーと一緒に学習と適応を続ける必要があります。この継続的な適応は、意思決定における生涯学習（LLDM）と呼ばれ、真にパーソナライズされたヘルパーロボットを構築するための重要なステップです。

- 📄 [LIBERO paper](https://arxiv.org/abs/2306.03310)
- 💻 [Original LIBERO repo](https://github.com/Lifelong-Robot-Learning/LIBERO)

**LIBERO を用いた評価**

**LeRobot** では、LIBERO をフレームワークに移植し、主に軽量 Vision-Language-Action モデルである [SmolVLA](https://huggingface.co/docs/lerobot/en/smolvla) の**評価**に使用しました。

LIBERO は現在、**マルチ評価対応シミュレーション**の一部となっており、フラグを 1 つ指定するだけで、**単一のタスクスイート**または**複数のスイートをまとめて**対象にポリシーをベンチマークできます。

LeRobot の公式手順に従ってセットアップした後、LIBERO をインストールするには、次を実行するだけです：`pip install -e ".[libero]"`

***単一スイート評価***

1 つの LIBERO スイート上でポリシーを評価します：

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object \
  --eval.batch_size=2 \
  --eval.n_episodes=3
```

- `--env.task` はスイート（`libero_object`、`libero_spatial` など）を選択します。
- `--eval.batch_size` は並列実行する環境数を制御します。
- `--eval.n_episodes` は実行するエピソードの総数を設定します。

***マルチスイート評価***

複数のスイートにまたがってポリシーを一括ベンチマークします：

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- マルチスイート評価には、カンマ区切りのリストを `--env.task` に渡します。

**トレーニングコマンド例**

```bash
lerobot-train \
  --policy.type=smolvla \
  --policy.repo_id=${HF_USER}/libero-test \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_10 \
  --output_dir=./outputs/ \
  --steps=100000 \
  --batch_size=4 \
  --eval.batch_size=1 \
  --eval.n_episodes=1 \
  --eval_freq=1000 \
```

-----

**レンダリングに関する注意**

LeRobot はシミュレーションに MuJoCo を使用します。学習または評価を行う前に、レンダリングバックエンドを設定する必要があります：

- `export MUJOCO_GL=egl` → ヘッドレスサーバー向け（例：HPC、クラウド）

</details>


<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

[Pi0](https://huggingface.co/docs/lerobot/pi0) を参照してください 

```bash
pip install -e ".[pi]"
```

**学習（Train）**
```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=seeed/eval_test123 \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=20000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false 
```

**評価（Evaluate）**

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```


</details>


<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

[Pi0.5](https://huggingface.co/docs/lerobot/pi05) を参照してください 

```bash
pip install -e ".[pi]"
```

**学習（Train）**
```bash
lerobot-train \
    --dataset.repo_id=seeed/eval_test123 \
    --policy.type=pi05 \
    --output_dir=outputs/pi05_training \
    --job_name=pi05_training \
    --policy.pretrained_path=lerobot/pi05_base \
    --policy.compile_model=true \
    --policy.gradient_checkpointing=true \
    --wandb.enable=false \
    --policy.dtype=bfloat16 \
    --steps=3000 \
    --policy.device=cuda \
    --batch_size=32
```

**評価（Evaluate）**

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```


</details>



<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) を参照してください 


</details>



次のエラーが発生した場合：

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/stack_bug.png" />
</div>

次のコマンドを実行して解決を試みてください：

```bash
pip install datasets==2.19
```

学習には数時間かかるはずです。`outputs/train/act_so100_test/checkpoints` にチェックポイントが保存されます。

チェックポイントから学習を再開するには、`act_so101_test` ポリシーの `last` チェックポイントから再開するためのコマンド例を以下に示します：

```bash
lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**ポリシーチェックポイントをアップロードする**

トレーニングが完了したら、次のコマンドで最新のチェックポイントをアップロードします：

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

中間チェックポイントをアップロードすることもできます：

```bash
CKPT=010000
huggingface-cli upload ${HF_USER}/act_so101_test${CKPT} \
  outputs/train/act_so101_test/checkpoints/${CKPT}/pretrained_model
```



## FAQ

- このドキュメント／チュートリアルに従う場合は、推奨されている GitHub リポジトリ `https://github.com/Seeed-Projects/lerobot.git` を git clone してください。本ドキュメントで推奨しているリポジトリは検証済みの安定版です。一方、公式の Lerobot リポジトリは常に最新バージョンへ更新されており、データセットのバージョンやコマンドの違いなど、予期しない問題が発生する可能性があります。

- サーボ ID のキャリブレーション時に次のエラーが発生した場合：

  ```bash
  `Motor ‘gripper’ was not found, Make sure it is connected`
  ```

  通信ケーブルがサーボに正しく接続されているか、電源が正しい電圧を供給しているかを慎重に確認してください。

- 次のような状況が発生した場合：

  ```bash
  Could not connect on port "/dev/ttyACM0"
  ```

  そして `ls /dev/ttyACM*` を実行したときに ACM0 が存在する場合は、シリアルポートの権限付与を忘れていることを意味します。ターミナルで `sudo chmod 666 /dev/ttyACM*` を実行して修正してください。

- 次のような状況が発生した場合：

  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```

  `conda install ffmpeg=7.1.1 -c conda-forge` を使用して ffmpeg 7.1.1 をインストールしてください。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

- 次のような状況が発生した場合：

  ```bash
  ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!
  ```

  対応するポート上のロボットアームの電源が入っているか、バスサーボのデータケーブルが緩んでいたり外れていたりしないかを確認する必要があります。あるサーボのランプが点灯していない場合は、その一つ前のサーボのケーブルが緩んでいることを意味します。

- ロボットアームのキャリブレーション時に次のエラーが発生した場合：

  ```bash
  Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)
  ```

  ロボットアームの電源を切って再起動し、その後もう一度キャリブレーションを試してください。この方法は、キャリブレーション中に MAX 角度が数万という値に達した場合にも使用できます。これでも解決しない場合は、該当するサーボを再キャリブレーションする必要があります（中央値のキャリブレーションおよび ID の書き込みを含む）。

- 評価フェーズ中に次のような状況が発生した場合：

  ```bash
  File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'
  ```

  まず `eval_` で始まるフォルダを削除してから、プログラムを再度実行してください。

- 評価フェーズ中に次のような状況が発生した場合：

  ```bash
  `mean` is infinity. You should either initialize with `stats` as an argument or use a pretrained model
  ```

  `--robot.cameras` パラメータ内の "front" や "side" などのキーワードは、データセット収集時に使用したものと厳密に一致している必要があることに注意してください。

- ロボットアームの一部を修理または交換した場合は、`~/.cache/huggingface/lerobot/calibration/robots` または `~/.cache/huggingface/lerobot/calibration/teleoperators` 配下のファイルを完全に削除し、ロボットアームを再キャリブレーションしてください。そうしないと、これらのディレクトリ内の JSON ファイルにキャリブレーション情報が保存されているため、エラーメッセージが表示される可能性があります。

- 50 セットのデータで ACT をトレーニングする場合、RTX 3060（8GB）を搭載したノート PC では約 6 時間、RTX 4090 や A100 GPU を搭載した PC では約 2～3 時間かかります。

- データ収集中は、カメラの位置、角度、および周囲の照明が安定していることを確認してください。カメラに映り込む不安定な背景や歩行者の量を減らしてください。デプロイ環境の変化が大きすぎると、ロボットアームがうまく把持できなくなる可能性があります。

- データ収集コマンドでは、十分なデータを収集できるように `num-episodes` パラメータを設定してください。途中で手動で一時停止しないでください。データの平均値と分散はデータ収集完了後にのみ計算され、トレーニングに必要となるためです。

- プログラムが USB カメラから画像データを読み取れないと表示する場合は、USB カメラがハブ経由で接続されていないことを確認してください。USB カメラは、画像伝送速度を確保するためにデバイスへ直接接続する必要があります。

- `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?` のようなバグが発生した場合は、rerun のバージョンをダウングレードすることで問題を解決できます。

```bash
pip3 install rerun-sdk==0.23
```

:::tip
解決できないソフトウェアの問題や環境依存関係の問題が発生した場合は、このチュートリアル末尾の FAQ セクションを確認することに加えて、速やかに [LeRobot platform](https://github.com/huggingface/lerobot) または [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU) に問題を報告してください。
:::

## 引用

[中文文档](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

TheRobotStudio プロジェクト: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface プロジェクト: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択できる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
