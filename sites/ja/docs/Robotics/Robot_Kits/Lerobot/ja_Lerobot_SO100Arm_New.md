---
description: このWikiでは、SO ARM100の組み立てとデバッグのチュートリアルを提供し、最新バージョンのLerobotフレームワーク内でのデータ収集とトレーニングを実現します。
title: Lerobot における SoArm
keywords:
  - Lerobot
  - Huggingface
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m_new
sku: 114993666,114993667,114993668,101090144
last_update:
  date: 3/11/2026
  author: ZhangJiaQuan
translation:
  skip:
    - zh-CN
createdAt: '2025-06-05'
updatedAt: '2026-04-30'
url: https://wiki.seeedstudio.com/ja/lerobot_so100m_new/
---
# LeRobot を使った SO-ARM100 および SO-ARM101 ロボットアーム入門

:::tip
このチュートリアルのメンテナンスは最新バージョンの[lerobot](https://huggingface.co/docs/lerobot/index)に更新されています。以前のバージョンのチュートリアルを参照したい場合は、[こちら](https://wiki.seeedstudio.com/ja/lerobot_so100m/)をクリックしてください。
:::

## はじめに

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) は、[TheRobotStudio](https://www.therobotstudio.com/) によって立ち上げられた完全オープンソースのロボットアームプロジェクトです。フォロワーアームとリーダーロボットアームを含み、詳細な3Dプリントファイルと操作ガイドも提供しています。[LeRobot](https://github.com/huggingface/lerobot/tree/main) は、PyTorch において実世界ロボティクス向けのモデル、データセット、ツールを提供することに注力しています。その目的はロボティクスの参入障壁を下げ、誰もがデータセットや事前学習済みモデルを共有することで貢献し、恩恵を受けられるようにすることです。LeRobot は、模倣学習を中心に、実世界で検証された最先端の手法を統合しています。人間が収集したデモンストレーションを含むデータセット、事前学習済みモデル群、シミュレーション環境を備えており、ユーザーはロボットの組み立てを行わなくてもすぐに始めることができます。今後数週間で、現在入手可能な中で最も低コストかつ高性能なロボットに対する実世界ロボティクスのサポートをさらに拡充していく予定です。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクト概要

SO-ARM10x と reComputer Jetson AI インテリジェントロボットキットは、高精度なロボットアーム制御と強力なAIコンピューティングプラットフォームをシームレスに統合し、包括的なロボット開発ソリューションを提供します。このキットは Jetson Orin または AGX Orin プラットフォームをベースに、SO-ARM10x ロボットアームと LeRobot AI フレームワークを組み合わせることで、教育、研究、産業オートメーションなど複数のシナリオに適用可能なインテリジェントロボットシステムをユーザーに提供します。
このWikiでは、SO ARM10x の組み立てとデバッグのチュートリアルを提供し、Lerobot フレームワーク内でのデータ収集とトレーニングを実現します。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 主な特長

1. **オープンソースかつ低コスト**:  [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100) によるオープンソースで低コストなロボットアームソリューションです。
2. **LeRobot との統合**: [LeRobot platform](https://github.com/huggingface/lerobot) との統合を前提に設計されています。
3. **豊富な学習リソース**: 組み立ておよびキャリブレーションガイド、テスト、データ収集、トレーニング、デプロイメントのチュートリアルなど、包括的なオープンソース学習リソースを提供し、ユーザーがロボットアプリケーションを迅速に立ち上げて開発できるよう支援します。
4. **Nvidia との互換性**: reComputer Mini J4012 Orin NX 16 GB でこのアームキットをデプロイできます。
5. **マルチシーンでの応用**: 教育、科学研究、自動化生産、ロボティクスなどの分野に適用でき、さまざまな複雑なタスクにおいて効率的かつ高精度なロボット動作の実現を支援します。

## 新着情報：

- 配線の最適化: SO-ARM100 と比較して、SO-ARM101 は配線が改善されており、以前ジョイント3で発生していた断線問題を防止します。新しい配線設計では、関節の可動範囲も制限されなくなりました。
- リーダーアームの異なるギア比: リーダーアームは最適化されたギア比を持つモーターを使用するようになり、性能が向上し、外部ギアボックスが不要になりました。
- 新機能のサポート: リーダーアームは、フォロワーアームをリアルタイムで追従できるようになりました。これは、今後導入される学習ポリシーにおいて、人間が介入してロボットの動作を修正できるようにするために重要です。

:::caution

Seeed Studio はハードウェア自体の品質にのみ責任を負います。チュートリアルは公式ドキュメントに厳密に従って更新されています。ソフトウェアの問題や環境依存の問題により解決できない事象に遭遇した場合は、本チュートリアル末尾の FAQ セクションを確認することに加えて、速やかに [LeRobot platform](https://github.com/huggingface/lerobot) または [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU) に問題を報告してください。

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

Arm Kit バージョンを購入した場合、両方の電源は 5V です。Arm Kit Pro バージョンを購入した場合は、リーダーロボットアームのキャリブレーションおよびすべての手順には 5V 電源を使用し、フォロワーロボットアームのキャリブレーションおよびすべての手順には 12V 電源を使用してください。

:::

## 部品表（BOM）

| 部品 | 数量 | 同梱|
|--|--|--|
|  サーボモーター | 12 | ✅ |
| モーター制御ボード | 2 | ✅ |
| USB-C ケーブル 2 本 | 1 | ✅ |
| 電源2 | 2 | ✅ |
| テーブルクランプ| 4 | ✅ |
| アームの3Dプリント部品 | 1 | オプション |

## 初期システム環境

**Ubuntu x86 の場合:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6+  

**Jetson Orin の場合:**

- Jetson JetPack 6.0 および 6.1、6.1 はサポートされていません
- Python 3.10  
- Torch 2.3+

## 目次

  [A. 3D プリントガイド](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#3d-プリントガイド)

  [B. LeRobot のインストール](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot)

  [C. モーターの設定](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#モーターの設定)

  [D. 組み立て](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#assembly)

  [E. キャリブレーション](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#calibrate)

  [F. テレオペレーション](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#teleoperate)

  [G. カメラの追加](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#カメラの追加)

  [H. データセットの記録](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#データセットの記録)

  [I. データセットの可視化](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#データセットの可視化)

  [J. エピソードのリプレイ](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#エピソードのリプレイ)

  [K. ポリシーのトレーニング](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#ポリシーのトレーニング)

  [L. ポリシーの評価](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#ポリシーの評価)

## 3D プリントガイド

:::caution
SO101 の公式アップデートに伴い、SO100 は今後サポートされず、公式の方針によりソースファイルは削除されますが、ソースファイルは引き続き当社の[Makerworld](https://makerworld.com/zh/models/908660)で見つけることができます。ただし、以前に SO100 を購入したユーザー向けには、チュートリアルとインストール方法は引き続き互換性があります。SO101 のプリントは、SO100 のモーターキットの取り付けと完全に互換性があります。
:::

### ステップ 1: プリンタを選ぶ

提供されている STL ファイルは、多くの FDM プリンタですぐに印刷できるようになっています。以下はテスト済みで推奨される設定ですが、他の設定でも動作する場合があります。

- 材料: PLA+
- ノズル径と精度: 0.2mm のレイヤー高さで 0.4mm ノズル、または 0.4mm のレイヤー高さで 0.6mm ノズル。
- インフィル密度: 15%  

### ステップ 2: プリンタをセットアップする

- プリンタ固有の手順に従ってプリンタをキャリブレーションし、ベッドレベリングが正しく設定されていることを確認します。
- プリントベッドを清掃し、ほこりや油分が付着していないことを確認します。水やその他の液体でベッドを清掃した場合は、必ず乾かしてください。
- プリンタで推奨されている場合は、標準的なスティックのりを使用し、ベッドのプリント領域全体に薄く均一な層を塗布します。ダマになったり、ムラが出たりしないように注意してください。
- プリンタ固有の手順に従ってフィラメントをロードします。
- プリンタ設定が上記で提案した設定と一致していることを確認します（ほとんどのプリンタには複数の設定があるため、最も近いものを選択してください）。
- サポートは「すべて」に設定しますが、水平方向に対して 45 度を超える傾斜は無視します。
- 水平軸のねじ穴の中にはサポートが入らないようにします。

### ステップ 3: パーツを印刷する

リーダーまたはフォロワー用のすべてのパーツは、サポートを最小限に抑えるために z 方向が上になるよう正しく向きをそろえた単一ファイルに、簡単に 3D プリントできる形でまとめられています。

- Ender など、プリンタのベッドサイズが 220mm x 220mm の場合は、次のファイルを印刷します：
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- Prusa/Up など、プリンタのベッドサイズが 205mm x 250mm の場合：
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## LeRobot をインストールする

pytorch や torchvision などの環境は、使用している CUDA に基づいてインストールする必要があります。

1. Miniforge をインストールします：
Jetson の場合：

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
# Follow the prompts by entering 'yes' or pressing Enter. Once the installation is complete:
source ~/.bashrc
```

または、X86 Ubuntu 22.04 の場合：

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
# Once the installation is complete:
source ~/.bashrc
# Initialize all shells
conda init --all
```

2. lerobot 用に新しい conda 環境を作成して有効化します

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Lerobot をクローンします：

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. miniforge を使用している場合は、環境内に ffmpeg をインストールします：

```bash
conda install ffmpeg -c conda-forge
```

:::tip
これは通常、libsvtav1 エンコーダでコンパイルされた、プラットフォーム向けの ffmpeg 7.X をインストールします。libsvtav1 がサポートされていない場合（`ffmpeg -encoders` でサポートされているエンコーダを確認）、次のことができます：

- [任意のプラットフォーム] 次のコマンドを使用して、明示的に ffmpeg 7.X をインストールします：

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Linux のみ] ffmpeg のビルド依存関係をインストールし、libsvtav1 を有効にしてソースから ffmpeg をコンパイルし、`which ffmpeg` で確認できる、インストールに対応した ffmpeg バイナリを使用していることを確認します。

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

Jetson Jetpack 6.0 以降のデバイスの場合（このステップを実行する前に、ステップ 5 から [Pytorch-gpu と Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) を必ずインストールしてください）：

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
python   # Command to start Python in the terminal
import torch
print(torch.cuda.is_available())
exit()   # Exit Python
```

:::tip

注意: NVIDIA RTX 50 シリーズ GPU には、プレビュー版の CUDA 12.8 以上が必要です。

ダウンロードコマンドは次のとおりです：

```bash
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128
```

:::

出力結果が False の場合は、[公式サイトのチュートリアル](https://pytorch.org/index.html)に従って Pytorch と Torchvision を再インストールする必要があります。

Jetson デバイスを使用している場合は、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)に従って Pytorch と Torchvision をインストールしてください。

## モーターを設定する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

SO-ARM101 のサーボのキャリブレーションおよび初期化プロセスは、方法とコードの両方の点で SO-ARM100 と同じです。ただし、SO-ARM101 のリーダーアームの最初の 3 つの関節のギア比は SO-ARM100 とは異なるため、それらを区別して慎重にキャリブレーションすることが重要です。

モーターを設定するには、リーダーアーム用に 1 つのバスサーボアダプタと 6 個のモーターを割り当て、同様にフォロワーアーム用にもう 1 つのバスサーボアダプタと 6 個のモーターを割り当てます。どちらのアーム用か分かるようにラベルを貼り、各モーターにフォロワー用なら F、リーダー用なら L と、ID 1〜6 を書いておくと便利です。**F1–F6** を **Follower Arm** の関節 1〜6、**L1–L6** を **Leader Arm** の関節 1〜6 を表すものとして使用します。対応するサーボモデル、関節の割り当て、およびギア比の詳細は次のとおりです：

| サーボモデル                            | ギア比 | 対応する関節         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
ここで、5V または 12V の電源をモーターバスに接続する必要があります。STS3215 7.4V モーターには 5V、STS3215 12V モーターには 12V を使用します。リーダーアームは常に 7.4V モーターを使用するため、12V と 7.4V のモーターが混在している場合は、誤ってモーターを焼損させないよう、正しい電源を接続していることに注意してください。次に、モーターバスを USB 経由でコンピュータに接続します。USB からは電源が供給されないため、電源と USB の両方を接続する必要があることに注意してください。
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

フォロワーアームのポートを特定したときの出力例（例：Mac では `/dev/tty.usbmodem575E0031751`、Linux では `/dev/ttyACM0` の可能性あり）：

リーダーアームのポートを特定したときの出力例（例：`/dev/tty.usbmodem575E0032081`、Linux では `/dev/ttyACM1` の可能性あり）：

USB ポートへのアクセス権を付与する必要がある場合は、次を実行します：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

:::tip

アームを接続する際、最初に接続したデバイスが ttyACM0（スレーブ/フォロワーアーム）に割り当てられ、2 番目に接続したデバイスが ttyACM1（マスター/リーダーアーム）に割り当てられます。

:::

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
繰り返しになりますが、サーボジョイントのIDとギア比が、SO-ARM101 のものと厳密に一致していることを必ず確認してください。
:::

### フォロワーアームのサーボをキャリブレーションする

コンピュータからフォロワーアームのコントローラボードへ USB ケーブルを接続し、電源も接続します。その後、次のコマンドを実行します。

```bash
lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

次の指示が表示されるはずです。

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

指示どおり、グリッパーのモーターを接続します。そのモーターだけがボードに接続されており、かつそのモーター自体がまだ他のモーターとデイジーチェーン接続されていないことを確認してください。[Enter] を押すと、そのモーターの ID とボーレートがスクリプトによって自動的に設定されます。

その後、次のメッセージが表示されます。

```bash
'gripper' motor id set to 6
```

続いて次の指示が表示されます。

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

コントローラボードから 3 ピンケーブルを外して構いませんが、反対側はすでに正しい位置にあるため、グリッパーモーターには接続したままで問題ありません。次に、別の 3 ピンケーブルを手首ロールモーターに接続し、それをコントローラボードに接続します。前のモーターと同様に、そのモーターだけがボードに接続されており、かつそのモーター自体が他のどのモーターにも接続されていないことを確認してください。

:::caution
指示に従って、各モーターに対してこの操作を繰り返してください。
:::

:::tip
Enter を押す前に、各ステップで配線を確認してください。例えば、ボードを操作している間に電源ケーブルが外れてしまう可能性があります。
:::

完了するとスクリプトは終了し、その時点でモーターは使用可能な状態になります。各モーターから次のモーターへ 3 ピンケーブルを接続し、最初のモーター（id=1 の「shoulder pan」）からのケーブルをコントローラボードに接続します。コントローラボードはアームのベースに取り付けることができます。

### リーダーアームのサーボをキャリブレーションする

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

- SO-ARM101 のデュアルアーム組み立て手順は SO-ARM100 と同じです。唯一の違いは、SO-ARM101 ではケーブルクリップが追加されていることと、リーダーアームのジョイントサーボのギア比が異なることです。そのため、SO100 と SO101 のどちらも、以下の内容を参照して組み立てることができます。
- 組み立て前に、モーターモデルと減速比をもう一度確認してください。SO100 を購入した場合は、このステップは無視して構いません。SO101 を購入した場合は、以下の表を確認して F1〜F6 と L1〜L6 を区別してください。

:::

  | サーボモデル                            | 減速比 | 対応するジョイント         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
**SO101 Arm Kit Standard Edition** を購入した場合、すべての電源は 5V です。**SO101 Arm Kit Pro Edition** を購入した場合、リーダーアームは各ステップで 5V 電源を使用してキャリブレーションおよび動作させる必要があり、フォロワーアームは各ステップで 12V 電源を使用してキャリブレーションおよび動作させる必要があります。
:::

**リーダーアームを組み立てる**

| **Step 1** | **Step 2** | **Step 3** | **Step 4** | **Step 5** | **Step 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **Step 7** | **Step 8** | **Step 9** | **Step 10** | **Step 11** | **Step 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **Step 13** | **Step 14** | **Step 15** | **Step 16** | **Step 17** | **Step 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **Step 19** | **Step 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**フォロワーアームを組み立てる**

:::tip

- フォロワーアームの組み立て手順は、基本的にリーダーアームと同じです。唯一の違いは、Step 12 以降のエンドエフェクタ（グリッパーとハンドル）の取り付け方法です。

:::

| **Step 1** | **Step 2** | **Step 3** | **Step 4** | **Step 5** | **Step 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **Step 7** | **Step 8** | **Step 9** | **Step 10** | **Step 11** | **Step 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **Step 13** | **Step 14** | **Step 15** | **Step 16** | **Step 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

## キャリブレーション

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

:::danger
**SO101 Arm Kit Standard Edition** を購入した場合、すべての電源は 5V です。**SO101 Arm Kit Pro Edition** を購入した場合、リーダーアームは各ステップで 5V 電源を使用してキャリブレーションおよび動作させる必要があり、フォロワーアームは各ステップで 12V 電源を使用してキャリブレーションおよび動作させる必要があります。
:::

次に、SO-10x ロボットに電源とデータケーブルを接続してキャリブレーションを行い、同じ物理位置にあるときにリーダーアームとフォロワーアームの位置値が同じになるようにする必要があります。このキャリブレーションは、ある SO-10x ロボットで学習したニューラルネットワークを別の SO-10x ロボットでも動作させられるようにするために不可欠です。

ロボットアームを再キャリブレーションする必要がある場合は、次の 2 つのオプションがあります。

オプション 1：キャッシュファイルを削除する

再キャリブレーションの前に、~/.cache/huggingface/lerobot/calibration/robots または ~/.cache/huggingface/lerobot/calibration/teleoperators 配下のファイルを完全に削除してください。そうしないと、これらのディレクトリ内の JSON ファイルに前回のキャリブレーションデータが保存されているため、システムがエラープロンプトを出す可能性があります。

オプション 2：

インタラクティブコマンドを使用する
ターミナルでキャリブレーションコマンドを直接実行します。アームが以前にキャリブレーションされている場合、次のプロンプトが表示されます。

    "ENTER キーを押して、ID my_awesome_leader_arm に関連付けられた既存のキャリブレーションファイルを使用するか、'c' を入力して ENTER キーを押し、キャリブレーションを実行します:"

    'c' を入力して ENTER キーを押すと、再キャリブレーションが開始されます。

    ENTER キーを押すと、既存のキャリブレーションデータを保持して使用します。

キャリブレーションセットアップ

6 個のロボットサーボを 3 ピンインターフェース経由で接続し、シャーシサーボをサーボドライバボードに接続します。その後、次のコマンドまたは API の例を実行してアームをキャリブレーションします：

:::tip
PC（Linux）および Jetson デバイスでは、最初に接続した USB デバイスは通常 `ttyACM0` に、2 番目は `ttyACM1` にマッピングされます。コマンドを実行する前に、どのポートがリーダーとフォロワーにマッピングされているかを必ず確認してください。
:::

**フォロワーアームの手動キャリブレーション**

6 個のロボットサーボのインターフェースを 3 ピンケーブルで接続し、シャーシサーボをサーボドライブプレートに接続してから、次のコマンドまたは API の例を実行してロボットアームをキャリブレーションしてください：

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

以下の動画はキャリブレーションの手順を示しています。まず、すべての関節が可動範囲の中央になる位置にロボットを移動させる必要があります。その後、Enter キーを押したら、各関節を可動範囲いっぱいまで動かしてください。

:::tip
lerobot リポジトリの更新により、マスター・スレーブアームのキャリブレーション時に、ターミナルがサーボ 5 からの信号を受信しないのは正常な現象です。そのまま操作を続行できます。
:::

**リーダーアームの手動キャリブレーション**

同じ手順でリーダーアームをキャリブレーションし、次のコマンドまたは API の例を実行します：

```python
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \# <- The port of your robot
    --teleop.id=my_awesome_leader_arm  # <- Give the robot a unique name
```

:::tip

リーダーまたはフォロワーアームのキャリブレーション中に “Could not connect on port '/dev/ttyACM0'. Make sure you are using the correct port., Try running lerobot-find-port” というエラーが発生した場合は、`sudo chmod 666 /dev/ttyACM*` を実行して必要な権限を付与する必要があります。
:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### （オプション）Seeed Studio SoARM クイックツールによる中立位置キャリブレーション

ロボットのキャリブレーションや動作中に、次のようなエラーが表示される場合があります：

`Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`

これは通常、サーボの現在位置／ゼロオフセットが異常で、読み取られる角度が想定範囲を超えていることを意味します。その場合、Seeed Studio の SoARM ツールを使用して**中立位置キャリブレーション**（現在位置を中立値 **2048** として書き込み）を行い、その後にアーム全体のキャリブレーションをやり直すことができます。

#### 1) GitHub からツールをクローンし、依存関係をインストールする

```bash
git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt
```

#### 2) 中立位置キャリブレーションと検証

スクリプトの場所：

- `src/tools/servo_middle_calibration.py`: 中立位置キャリブレーション（現在位置を **2048** として書き込み）
- `src/tools/servo_disable.py`: サーボトルクを無効化（関節を手で回しやすくする）
- `src/tools/servo_center_test.py`: **2048** に移動してキャリブレーション結果を検証

次の順番で実行します（コマンドは対話的にポートの選択を求めます）：

1. （オプション）トルクを無効化して、関節を手動で調整：

```bash
python -m src.tools.servo_disable
```

2. 中立位置キャリブレーションを実行（現在位置を 2048 に設定）：

```bash
python -m src.tools.servo_middle_calibration
```

3. 検証：サーボを 2048 に移動し、想定どおりの中立位置に戻るか確認：

```bash
python -m src.tools.servo_center_test
```

中立位置キャリブレーションが完了したら、上記の `lerobot-calibrate` の手順に戻り、アーム全体のキャリブレーションをやり直してください。

## テレオペレーション

**シンプルなテレオペ**
これでロボットをテレオペレーションする準備が整いました！次のシンプルなスクリプトを実行します（カメラには接続せず、表示もしません）：

ロボットに関連付けられた ID は、キャリブレーションファイルを保存するために使用されます。同じ構成を使用する場合、テレオペレーション、記録、評価の際には同じ ID を使用することが重要です。

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

1. 不足しているキャリブレーションを検出し、キャリブレーション手順を開始します。
2. ロボットとテレオペデバイスに接続し、テレオペレーションを開始します。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## カメラを追加する

<details>
<summary> RealSense D435i/D405 を使用する場合 </summary>

RealSense 深度カメラは LeRobot に RGB-D 認識機能を提供し、物体認識、点群再構成、テーブルトップマニピュレーションなどのタスクに適しています。ここで推奨するモデルは **RealSense D405** と **RealSense D435i** です。

### RealSense D405

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

RealSense D405 は短距離ステレオ深度カメラで、テーブルトップロボットマニピュレーションなどの高精度な近距離タスク向けに設計されており、一般的な動作距離は **7 cm ～ 50 cm** です。

### RealSense D435i

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

RealSense D435i は、深度センシング、RGB 画像、および IMU を組み合わせており、3D 再構成、SLAM、ロボット環境認識などの中距離から近距離のアプリケーションに適しています。

### 1. カメラブランチに切り替える

現在のカメラサポートは `DepthCameraSupport` ブランチで提供されています：

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

現在のブランチを確認します：

```bash
git branch --show-current
```

期待される出力：

```bash
DepthCameraSupport
```

### 2. LeRobot を編集可能モードでインストール

RealSense のみを使用する場合：

```bash
pip install -e ".[realsense]"
```

### 3. カメラの権限を付与

```bash
chmod a+rw /dev/bus/usb/*/* 
```

### 4. カメラを検出

```bash
lerobot-find-cameras realsense
```

このステップでは次の情報が出力されます：

- カメラモデル
- シリアル番号
- USB 情報
- デフォルトのストリーム構成

取得した `Serial number` を、以下のカメラコマンドの `serial_number_or_name` パラメータに入力します。

### 5. RealSense の例

デュアル RealSense テスト：

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      max_depth_m: 2.0,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    },
    d405_color: {
      type: realsense_d405_color,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d405_depth: {
      type: realsense_d405_depth,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      depth_alpha: 0.03,
      rotation: 0,
      warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

### 6. パラメータに関する注意

- `depth_alpha` は深度画像のスケーリング係数を制御し、表示結果や対象距離範囲に応じて調整できます。
- 3 台以上の深度カメラを接続する場合は、全体の安定性を高めるために `fps` を `15` に下げることを推奨します。
- 安定性とリアルタイム性のバランスを取るため、解像度は `640x480` に保つことを推奨します。

</details>

<details>
<summary> Orbbec Gemini2/Gemini336 カメラを使用する場合 </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

Orbbec Gemini 2 はロボットアプリケーション向けの高性能 RGB-D カメラで、正確な深度とカラーのアライメントを備えた同期 RGB および深度ストリームを提供します。ステレオ深度センシングと内蔵 6 軸 IMU を組み合わせることで、物体検出、3D 認識、マッピング、ナビゲーションなどのロボットタスクに非常に適しています。コンパクトな設計と完全な Orbbec SDK サポートにより、研究用途だけでなく実環境での運用にも適したカメラです。

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>

Gemini 336 は Gemini 330 シリーズの新しいメンバーです。Gemini 335 の優れた深度性能を受け継ぎつつ、反射の多い屋内エリア、高ダイナミックシーンの暗部、明るい屋外環境における深度画像品質をさらに向上させています。ロボティクス用途においては、認識、自己位置推定、マニピュレーションなどのタスクに対して、より安定した高品質な深度データを提供できます。

### 1. カメラ用ブランチへ切り替え

現在のカメラサポートは `DepthCameraSupport` ブランチで利用できます：

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

現在のブランチを確認します：

```bash
git branch --show-current
```

期待される出力：

```bash
DepthCameraSupport
```

### 2. LeRobot を編集可能モードでインストール

Orbbec のみを使用する場合：

```bash
pip install -e ".[orbbec]"
```

### 3. カメラの権限を付与


```bash
chmod a+rw /dev/bus/usb/*/* 
```

### 4. USBFS キャッシュサイズの設定

デフォルトでは、USBFS キャッシュサイズは 16 MB に設定されています。この値は高解像度画像、複数のデータストリーム、および複数デバイスのシナリオには不十分です。ユーザーはキャッシュサイズを最大 128 MB まで増やすことができます。

USBFS キャッシュサイズを確認
```bash
cat /sys/module/usbcore/parameters/usbfs_memory_mb
```

USBFS キャッシュサイズを一時的に増やす
```bash
sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'
```

:::tip

もし `timeout error TimeoutError: Timed out waiting for frame from <lerobot.cameras.orbbec.camera_orbbec.OrbbecDepthCamera object at 0x7ba4ba130910.........>` のようなエラーが発生した場合は、カメラを再接続するだけで解決できます。

:::

### 5. カメラを検出

```bash
lerobot-find-cameras orbbec
```

このステップでは次の情報が出力されます：

- カメラモデル（名前）
- シリアル番号（Serial number）
- USB 情報
- デフォルトのストリーム設定

取得した `Serial Number` を、下記のカメラコマンドの `serial_number_or_name` パラメータに入力します。

### 6. Orbbec の例

単一 Orbbec テスト：

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      rotation: 0,
      warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 400,
      fps: 30,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

単一 Orbbec カメラテスト + 標準カメラテスト：

```bash
  lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{
      orbbec_color: {
        type: orbbec_color,
        serial_number_or_name: "CP9JA530003A",
        width: 640,
        height: 480,
        fps: 30,
        color_mode: rgb,
        rotation: 0,
        warmup_s: 1
      },
      orbbec_depth: {
        type: orbbec_depth,
        serial_number_or_name: "CP9JA530003A",
        width: 640,
        height: 400,
        fps: 30,
        depth_alpha: 0.2,
        rotation: 0,
        warmup_s: 5
      },
      side: {
      type: opencv,
      index_or_path: 8,
      width: 640,
      height: 480,
      fps: 30,
      fourcc: "MJPG"} 
    }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

:::tip
単一の Orbbec カメラと標準カメラを同時に使用する場合は、最初に Orbbec カメラを接続し、その後に標準カメラを接続することを推奨します。

カメラ ID を検出するために lerobot-find-cameras の opencv コマンドを実行すると、Orbbec カメラが連続する 3 つのカメラ番号を占有していることが分かります。そのため、標準カメラの番号が最後に割り当てられるよう、標準カメラは最後に接続することをお勧めします。
:::

### 7. パラメータに関する注意

- `depth_alpha` は深度画像のスケーリング係数を制御します。`0.2` を初期値として設定し、その後表示結果に応じて微調整してください。
- 3 台以上の深度カメラを接続する場合は、安定性向上のために `fps` を `15` に下げることを推奨します。
- より安定した表示とデータ転送のために、解像度は `640x480` に保つことを推奨します。

### 8. よくある問題

次のようなエラーが表示される場合：

```bash
No Orbbec camera found for 'XXXX'
```

通常は、設定内のシリアル番号が現在接続されているデバイスと一致していないことを意味します。次を実行してください：

```bash
lerobot-find-cameras orbbec
```

その後、実際の `serial` を確認し、コマンド内の `serial_number_or_name` を更新してください。

</details>

## 通常のカメラを使用する場合

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
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

各カメラで撮影された画像は、`outputs/captured_images` ディレクトリ内で確認できます。

:::warning
Intel RealSense カメラを macOS で使用する際、`OSError finding RealSense cameras: failed to set power state` のようなエラーが発生することがあります。これは、同じコマンドを sudo 権限付きで実行することで解決できます。ただし、macOS で RealSense カメラを使用する場合は動作が不安定であることに注意してください。
:::

その後、以下のコードを実行することで、テレオペレーション中にコンピュータ上でカメラ映像を表示できるようになります。これは、最初のデータセットを記録する前にセットアップを準備するのに役立ちます。

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

カメラがさらに多い場合は、`--robot.cameras` を変更してカメラを追加できます。`index_or_path` の形式は、`python -m lerobot.find_cameras opencv` によって出力されるカメラ ID の末尾の数字によって決まることに注意してください。

:::tip
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すことができ、`YUYV` 形式を試すことも可能です。ただし後者では画像解像度と FPS が低下し、その結果ロボットアームの動作にラグが発生します。現在、`MJPG` 形式では `1920*1080` の解像度で 3 台のカメラを `30FPS` を維持したままサポートできます。とはいえ、2 台のカメラを同じ USB ハブ経由でコンピュータに接続することは依然として推奨されません。
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
`fourcc: "MJPG"` 形式の画像は圧縮されています。より高い解像度を試すことができ、`YUYV` 形式を試すことも可能です。ただし後者では画像解像度と FPS が低下し、その結果ロボットアームの動作にラグが発生します。現在、`MJPG` 形式では `1920*1080` の解像度で 3 台のカメラを `30FPS` を維持したままサポートできます。とはいえ、2 台のカメラを同じ USB ハブ経由でコンピュータに接続することは依然として推奨されません。
:::

:::tip
このようなバグが見つかった場合。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

rerun のバージョンをダウングレードすることで、この問題を解決できます。

```bash
pip3 install rerun-sdk==0.23
```

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットを記録する

- データセットをローカルに保存したい場合は、次をそのまま実行できます：

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

- データセットをアップロードするために Hugging Face Hub の機能を使いたいが、まだ設定していない場合は、書き込み権限付きトークンでログインしていることを確認してください。このトークンは [Hugging Face settings](https://huggingface.co/settings/tokens) から生成できます：

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

次のような行が多数表示されます：

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**Record 関数**

**record** 関数は、ロボットの動作中にデータを取得・管理するための一連のツールを提供します。  

**1. データ保存**

- データは `LeRobotDataset` 形式で保存され、記録中にディスクへ書き込まれます。
- デフォルトでは、記録後にデータセットはあなたの Hugging Face ページにプッシュされます。  
- アップロードを無効にするには、次を使用します：`--dataset.push_to_hub=False`

**2. チェックポイントと再開**

- 記録中にチェックポイントが自動的に作成されます。  
- 中断後に再開するには、次を付けて同じコマンドを再実行します：`--resume=true`

⚠️ 重要な注意：再開する際は、`--dataset.num_episodes` を「データセット全体の目標エピソード数」ではなく、「追加で記録したいエピソード数」に設定してください。  

- 最初から記録をやり直したい場合は、データセットディレクトリを**手動で削除**してください。

**3. 記録パラメータ**

コマンドライン引数を使ってデータ記録の流れを設定します：

| パラメータ | 説明 | デフォルト |  
|-----------|-------------|---------|  
| --dataset.episode_time_s | 1 エピソードあたりのデータ記録時間（秒） | 60 |  
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

**データ収集のコツ**

- タスクの提案：さまざまな位置にある物体を把持し、ビンの中に置く。  
- 規模：50 エピソード以上を記録（位置ごとに 10 エピソード）。  
- 一貫性：  
  - カメラを固定する。  
  - 同じ把持動作を維持する。  
  - 操作対象の物体がカメラ映像内に見えるようにする。  
- 段階的な拡張：  
  - 新しい位置・手法・カメラ調整などのバリエーションを加える前に、まずは安定して把持できる状態にする。  
  - 失敗を防ぐため、複雑さを急激に増やさない。  

💡 経験則：カメラ画像だけを見て、自分自身でタスクを実行できる程度であるべきです。  

この重要なトピックをさらに深く知りたい場合は、「良いデータセットとは何か」について執筆した[ブログ記事](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset)を参照してください。

**トラブルシューティング**

Linux 固有の問題：  
記録中に右矢印／左矢印／ESC キーが反応しない場合：  

- `$DISPLAY` 環境変数が設定されているか確認します（[pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html) を参照）。  

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットの可視化

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

もし `--control.push_to_hub=true` でデータセットを Hub にアップロードしていれば、次のコマンドで得られる repo id をコピー＆ペーストすることで、[オンラインでデータセットを可視化](https://huggingface.co/spaces/lerobot/visualize_dataset)できます：

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
    --dataset.repo_id=seeedstudio123 \
    --dataset.root=~/.cache/huggingface/lerobot/seeedstudio123 \
    --dataset.episode=0 \
```

ロボットは、あなたが記録したものと同様の動きを再現するはずです。

このコマンドでは、`dataset.root` がデータセットへの物理パスを指定し、dataset.`repo_id` がデータ収集中に定義したカスタム名を指定します。

## 学習と評価

<details>

<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

[ACT](https://huggingface.co/docs/lerobot/act) を参照してください

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

:::tip

RTX 50 シリーズ GPU を使用している場合は、学習コマンドに --dataset.video_backend=pyav を追加する必要があります。これは、torchvision のプレビュー版で不足している API を回避するためです。完全な学習コマンドは次のようになります：

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000 \
```

:::

内容を説明します：

- **データセット指定**：`--dataset.repo_id=${HF_USER}/so101_test` というパラメータでデータセットを指定します。
- **学習ステップ数**：`--steps=300000` を使って学習ステップ数を変更します。アルゴリズムのデフォルトは 800000 ステップであり、タスクの難易度や学習中の loss を見ながら調整できます。
- **ポリシータイプ**：`policy.type=act` でポリシーを指定します。同様に、[`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`] などのポリシーを切り替えることができ、その場合は `configuration_act.py` から設定が読み込まれます。重要な点として、このポリシーは、あなたのロボット（例：`laptop` や `phone`）のモータ状態・モータアクション・カメラ数などの情報がすでにデータセットに保存されているため、それに自動的に適応します。
- **デバイス選択**：Nvidia GPU 上で学習しているため `policy.device=cuda` を指定していますが、Apple Silicon で学習する場合は `policy.device=mps` を使用できます。
- **可視化ツール**：学習チャートを [Weights and Biases](https://docs.wandb.ai/quickstart) で可視化するために `wandb.enable=true` を指定しています。これは任意ですが、使用する場合は `wandb login` を実行してログインしておいてください。

**評価（Evaluate）**

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードをそのまま利用して動作させることができます。
:::

ポリシーのチェックポイントを入力として、[`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) の `record` 関数を使用できます。例えば、次のコマンドを実行して 10 エピソード分の評価を記録します：

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

例えば：

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

2. データセット名 `dataset.repo_id` は `eval_` で始まります。この操作により、評価中に動画とデータが個別に記録され、`seeed/eval_test123` のような `eval_` で始まるフォルダに保存されます。

3. 評価フェーズ中に `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` に遭遇した場合は、まず `eval_` で始まるフォルダを削除してから、プログラムを再度実行してください。

4. `mean is infinity. You should either initialize with stats as an argument or use a pretrained model` が発生した場合、`--robot.cameras` パラメータ内の front や side などのキーワードは、データセット収集時に使用したものと厳密に一致している必要があることに注意してください。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</details>

<details>
<summary> SmolVLA </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) は、ロボティクス向けに設計された Hugging Face の軽量なファウンデーションモデルです。LeRobot データセット上で簡単にファインチューニングできるよう設計されており、開発を加速するのに役立ちます。

**環境をセットアップする**

次を実行して SmolVLA の依存関係をインストールします：

```bash
pip install -e ".[smolvla]"
```

**自分のデータで SmolVLA をファインチューニングする**

[smolvla_base](https://hf.co/lerobot/smolvla_base)（事前学習済み 4.5 億パラメータモデル）を使用し、自分のデータでファインチューニングします。モデルを 20k ステップ学習するには、単一の A100 GPU でおおよそ 4 時間かかります。ステップ数は性能とユースケースに応じて調整してください。

GPU デバイスがない場合は、[Google Colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb) 上のノートブックを使って学習することができます。

`--dataset.repo_id` を使って、トレーニングスクリプトにデータセットを渡します。インストールをテストしたい場合は、[SmolVLA Paper](https://huggingface.co/papers/2506.01844) 用に収集したデータセットの 1 つを使用する、次のコマンドを実行してください。

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
GPU に余裕がある場合は、小さいバッチサイズから始めて、読み込み時間が短いままであれば徐々に増やしていくことができます。
:::

ファインチューニングは一種の職人技です。ファインチューニングのオプションを完全に把握するには、次を実行してください。

```bash
lerobot-train --help
```

**ファインチューニング済みモデルを評価し、リアルタイムで実行する**

エピソードを記録する場合と同様に、HuggingFace Hub にログインしておくことをお勧めします。対応する手順は次を参照してください：[データセットを記録する](https://huggingface.co/docs/lerobot/il_robots)。ログイン後は、次のようにして自分の環境で推論を実行できます：

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

評価環境に応じて、評価スイート用に記録するエピソードの時間と本数を設定できます。

</details>

<details>
<summary> LIBERO </summary>

[LIBERO](https://huggingface.co/docs/lerobot/libero) は、生涯にわたるロボット学習を研究するために設計されたベンチマークです。ロボットは工場で一度だけ事前学習されるのではなく、時間の経過とともに人間のユーザーと一緒に学習と適応を続ける必要があります。この継続的な適応は、意思決定における生涯学習（LLDM）と呼ばれ、真にパーソナライズされたヘルパーロボットを構築するための重要なステップです。

- 📄 [LIBERO 論文](https://arxiv.org/abs/2306.03310)
- 💻 [オリジナルの LIBERO リポジトリ](https://github.com/Lifelong-Robot-Learning/LIBERO)

**LIBERO を用いた評価**

**LeRobot** では、LIBERO をフレームワークに移植し、主に軽量な Vision-Language-Action モデルである [SmolVLA](https://huggingface.co/docs/lerobot/en/smolvla) の**評価**に使用しました。

LIBERO は現在、**マルチ評価対応シミュレーション**の一部となっており、フラグを 1 つ指定するだけで、**単一のタスクスイート**または**複数のスイートを同時に**対象としてポリシーをベンチマークできます。

LIBERO をインストールするには、LeRobot の公式手順に従った後、次を実行するだけです：`pip install -e ".[libero]"`

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

複数のスイートにまたがってポリシーを一度にベンチマークします：

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

LeRobot はシミュレーションに MuJoCo を使用します。学習または評価の前に、レンダリングバックエンドを設定する必要があります：

- `export MUJOCO_GL=egl` → ヘッドレスサーバー向け（例：HPC、クラウド）

</details>

<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

[Pi0](https://huggingface.co/docs/lerobot/pi0) を参照してください

```bash
pip install -e ".[pi]"
```

**学習**

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

**評価**

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

**学習**

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

**評価**

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

公式ドキュメントを参照してください：[GR00T N1.5](https://huggingface.co/docs/lerobot/groot)。

GR00T N1.5 は、より汎用的なロボット推論とスキル学習のための NVIDIA のオープンファウンデーションモデルです。これは**クロスエンボディメント**モデルであり、**言語**や**画像**などのマルチモーダル入力を受け取り、異なる環境にまたがってマニピュレーションタスクを実行できます。

LeRobot では、`--policy.type=groot` にポリシータイプを設定することが重要です。なお、GR00T N1.5 はより高い環境要件を持っており（FlashAttention に依存し、CUDA GPU が必要です）、まず ACT / Pi0 をエンドツーエンドで動作させてから GR00T を試すことを推奨します。

**インストール（重要）**

現在の公式ドキュメントによると、GR00T N1.5 には `flash-attn` が必要であり、CUDA 対応ハードウェアでのみ使用できます。

推奨される手順順序：

1. まずベースとなる環境（Python、CUDA、ドライバなど）を準備します。この時点では `lerobot` をインストールしないでください。
2. 使用している CUDA バージョンに対応した PyTorch をインストールします（CUDA バージョンによっては異なる `--index-url` が必要になる場合があります。PyTorch のインストールページに従ってください）。

```bash
pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
```

:::tip

RTX 50 シリーズ GPU を使用している場合、次の要件を満たす必要があります：Python=3.10、CUDA=12.8、Torch=2.7.1

ダウンロードコマンドは次のとおりです：
```bash
pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128
```
:::

3. `flash-attn` のビルド依存関係をインストールし、その後 `flash-attn` 本体をインストールします。

```bash
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"
```

:::tip

RTX 50 シリーズ GPU を使用している場合、次の要件を満たす必要があります：flash_attn=2.8.0

ダウンロードコマンドは次のとおりです：
```bash
pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation
```
:::

4. `groot` のオプション依存関係（`lerobot[groot]`）付きで LeRobot をインストールします。

```bash
pip install "lerobot[groot]"
```

:::tip
もし `flash-attn` のインストールに失敗する場合、多くは (1) PyTorch と CUDA の不整合、(2) ビルド依存関係の不足、(3) 環境が新しすぎる／古すぎる、のいずれかが原因です。まず公式の GR00T ドキュメントと PyTorch のインストール手順を突き合わせて確認してください。
:::

**学習（ファインチューニング）**

公式ドキュメントには `accelerate launch --multi_gpu ...` を用いたマルチ GPU の例が記載されています。単一 GPU しか持っていない場合でも、まずは単一プロセスの実行を動作させるところから始めることができます（正確なサポート内容や引数は公式ドキュメントに依存します）。

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=$NUM_GPUS \
  $(which lerobot-train) \
  --output_dir=$OUTPUT_DIR \
  --save_checkpoint=true \
  --batch_size=$BATCH_SIZE \
  --steps=$NUM_STEPS \
  --save_freq=$SAVE_FREQ \
  --log_freq=$LOG_FREQ \
  --policy.push_to_hub=true \
  --policy.type=groot \
  --policy.repo_id=$REPO_ID \
  --policy.tune_diffusion_model=false \
  --dataset.repo_id=$DATASET_ID \
  --wandb.enable=true \
  --wandb.disable_artifact=true \
  --job_name=$JOB_NAME
```

**ロボット上での検証（評価）**

学習後は、他のポリシーと同様に `lerobot-record` を使って評価とリプレイの記録を行うことができます。公式ドキュメントには両腕ロボットの例が含まれていますが、SO101 の単腕ユーザーは `left_arm_port/right_arm_port` 形式の引数を指定する必要はありません。

```bash
lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_port=/dev/ttyACM1 \
  --robot.right_arm_port=/dev/ttyACM0 \
  --robot.id=bimanual_follower \
  --robot.cameras='{ right: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}, left: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}, top: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30} }' \
  --display_data=true \
  --dataset.repo_id=${HF_USER}/eval_groot_bimanual \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab and handover the red cube to the other arm" \
  --policy.path=${HF_USER}/groot-bimanual \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10
```

ライセンス：Apache 2.0（元の GR00T リポジトリと同じ）。

</details>

<details>
<summary>（オプション）パラメータ効率の良いファインチューニング（PEFT）</summary>

PEFT（Parameter-Efficient Fine-Tuning）は、大規模な事前学習済みモデルが **すべてのパラメータを更新することなく** 新しいタスクに適応できるようにする手法とツールのファミリーです。事前学習済みの LeRobot ポリシー（例：SmolVLA、Pi0）に対しては、多くの場合、「アダプタ」パラメータ（例：LoRA）の小さな集合のみを学習することで、VRAM 使用量と学習コストを削減しつつ、フルファインチューニングに近い性能を達成できます。

**インストール**

LeRobot を `peft` のオプション依存関係付きでインストールした後、学習時に PEFT 関連の引数を使用できます。

```bash
pip install -e ".[peft]"
```

```bash
pip install "lerobot[peft]"
```

より詳しい概念と手法については：[🤗 PEFT ドキュメント](https://huggingface.co/docs/peft/index) を参照してください。

**例：SmolVLA を LoRA でファインチューニングする（LIBERO `libero_spatial` サブタスク）**

この例では、`HuggingFaceVLA/libero` データセット上で `lerobot/smolvla_base` を LoRA によりファインチューニングします。引数名は LeRobot のバージョンに依存するため、`lerobot-train --help` も併せて確認することを推奨します。

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64
```

**主要な PEFT 引数**

- `--peft.method_type`: 使用する PEFT 手法を選択します。LoRA（Low-Rank Adapter）は最も一般的な選択肢の一つです。
- `--peft.r`: LoRA のランクです。ランクを高くすると通常は表現力が増しますが、パラメータ数と VRAM 使用量も増加します。

**LoRA を挿入する層／モジュールの選択（任意）**

デフォルトでは、PEFT は通常、最も重要な射影層（例：アテンションの `q_proj`、`v_proj`）に LoRA を挿入し、状態／アクションの射影もカバーする場合があります。カスタマイズしたい場合は、`--peft.target_modules` を使用します。

一般的なパターン：

1) モジュール名のサフィックスのリストを指定する（例）：

```bash
--peft.target_modules="['q_proj', 'v_proj']"
```

2) 正規表現を指定する（例：モデル内の実際のモジュール名に合わせて調整してください）：

```bash
--peft.target_modules='(model\\.vlm_with_expert\\.lm_expert\\..*\\.(down|gate|up)_proj|.*\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'
```

**一部のモジュールをフル学習する（任意）**

一部のモジュールを（LoRA の挿入だけでなく）完全に学習させたい場合は、`--peft.full_training_modules` を使用します。例えば、`state_proj` のみをフル学習するには次のようにします：

```bash
--peft.full_training_modules="['state_proj']"
```

**学習率の目安（経験則）**

LoRA の学習率は、フルファインチューニングよりもおおよそ 10 倍程度高く設定されることが多いです。例えば、フルファインチューニングで一般的に `1e-4` を用いる場合、LoRA では `1e-3` から始めることができます。学習率スケジューラを使用する場合、最終的な学習率は目安として `1e-4` 前後になることが多いです。

</details>

<details>
<summary>（オプション）Accelerate を用いたマルチ GPU 学習</summary>

**学習手順**

方法 1：CLI フラグを使用する。

1. `lerobot` 環境に `accelerate` をインストールします。

```bash

pip install accelerate

```

2. `accelerate launch` と `--multi_gpu` および `--num_processes` フラグを使ってマルチ GPU 学習を開始します。

```bash

accelerate launch \

--multi_gpu \

--num_processes=2 \

$(which lerobot-train) \

--dataset.repo_id=${HF_USER}/my_dataset \

--policy.type=act \

--policy.repo_id=${HF_USER}/my_trained_policy \

--output_dir=outputs/train/act_multi_gpu \

--job_name=act_multi_gpu \

--wandb.enable=true

```

主要な `accelerate` フラグ：

- `--multi_gpu`: マルチ GPU 学習を有効にします。
- `--num_processes`: 使用する GPU の数（通常はマシン上で利用可能な GPU の数と同じです）。
- `--mixed_precision=fp16`: fp16 の混合精度を使用します（ハードウェアが対応している場合は bf16 も使用できます）。

注意：**bf16 にはハードウェアのサポートが必要**であり、すべての GPU で利用できるわけではありません。

| 精度 | ハードウェアサポート |
|--|--|
| fp16 | ほぼすべての NVIDIA GPU でサポート |
| bf16 | 一部の新しい GPU（Ampere 以降）のみサポート |

GPU が bf16 をサポートしていない場合は、Accelerate の設定で fp16 を選択するか、明示的に fp16 を指定してください。

方法 2：`accelerate` の設定ファイルを使用する（任意）。

頻繁に複数 GPU で学習する場合は、設定を保存して同じフラグを毎回入力しなくて済むようにできます。

`accelerate config` は、ハードウェア構成（GPU の数、混合精度など）を設定ファイルに保存し、その後 `accelerate launch` を実行する際にこれらのオプションを再入力しなくて済むようにします。これは LeRobot の学習ロジック自体を変更するものではなく、CLI 入力の繰り返しを減らすだけです。

マルチ GPU をたまにしか使わない場合（あるいは今回が初めての場合）は、これをスキップしてもまったく問題ありません。

対話的な設定において、一般的な「単一マシン＋複数 GPU」シナリオでは、典型的な選択肢は次のとおりです：

- Compute environment: This machine
- Number of machines: 1
- Number of processes: 使用したい GPU の数
- GPU ids to use: Enter キーを押す（すべての GPU を使用）
- Mixed precision: 可能であれば fp16 を優先し、GPU が対応していると分かっている場合のみ bf16 を選択する

```bash

accelerate config

```

```bash

accelerate launch $(which lerobot-train) \

--dataset.repo_id=${HF_USER}/my_dataset \

--policy.type=act \

--policy.repo_id=${HF_USER}/my_trained_policy \

--output_dir=outputs/train/act_multi_gpu \

--job_name=act_multi_gpu \

--wandb.enable=true

```

**マルチ GPU がハイパーパラメータに与える影響（および調整方法）**

LeRobot は、学習挙動を暗黙的に変更しないようにするため、GPU の数に応じて学習率や学習ステップ数を自動調整しません。この点は、他の一部の分散学習フレームワークとは異なります。

マルチ GPU 用にハイパーパラメータを調整したい場合、一般的なアプローチは次のとおりです：

- **ステップ数**：有効バッチサイズ（batch_size × num_gpus）が増加するため、同じ総サンプル数を維持したい場合は、ステップ数をおおよそ `1 / num_gpus` に比例して減らすことができます。

```bash

accelerate launch --num_processes=2 $(which lerobot-train) \

--batch_size=8 \

--steps=50000 \

--dataset.repo_id=lerobot/pusht \

--policy=act

```

- **学習率**：各ステップで使用されるサンプル数が増えるため、多くの場合、学習率を GPU の数に線形に比例させてスケールできます：
  new_lr = single_gpu_lr × num_gpus

```bash

accelerate launch --num_processes=2 $(which lerobot-train) \

--optimizer.lr=2e-4 \

--dataset.repo_id=lerobot/pusht \

--policy=act

```

これらは厳密なルールではなく、一般的なヒューリスティックです。よく分からない場合は、学習率とステップ数を変更せず、学習が安定している限りそのままにしておいても構いません。

高度な設定やトラブルシューティングについては、Accelerate のドキュメントを参照してください: [Accelerate](https://huggingface.co/docs/accelerate/index).

</details>

<details>

<summary>（オプション）非同期推論</summary>

非同期推論が有効になっていない場合、LeRobot の制御フローは**従来型の逐次 / 同期推論**として理解できます。つまり、ポリシーがまず一連のアクションチャンクを予測し、そのチャンクを実行し、その後になって次の予測を待ちます。

大きなモデルでは、次のアクションチャンクを待っている間にロボットが目に見えて一時停止してしまうことがあります。

非同期推論の目的は、現在のアクションチャンクをロボットに実行させながら、次のチャンクを先行して計算することで、アイドル時間を減らし応答性を向上させることです。

非同期推論は、**ACT、OpenVLA、Pi0、SmolVLA** などの**チャンクベースのアクションポリシー**を含む、LeRobot がサポートするポリシーに適用できます。

推論が実際の制御から切り離されているため、非同期推論は、より強力な計算リソースを持つマシンを使ってロボットの推論を行うのにも役立ちます。

非同期推論の詳細については、[Hugging Face のブログ](https://huggingface.co/blog/async-robot-inference)を参照してください。

まず、いくつかの基本的な概念を紹介します。

- **クライアント**: ロボットアームとカメラに接続し、観測データ（画像やロボットの姿勢など）を収集してサーバーに送信し、サーバーから返ってきたアクションチャンクを受信して順番に実行します。

- **サーバー**: 計算リソースを提供するデバイスです。カメラデータとロボットアームのデータを受け取り、推論（すなわち計算）を行ってアクションチャンクを生成し、それをクライアントに送り返します。ロボットアームとカメラに接続された同じデバイスでも、同一ローカルネットワーク上の別のコンピュータでも、インターネット上でレンタルしたクラウドサーバーでも構いません。

- **アクションチャンク**: サーバー側でポリシー推論によって得られた、ロボットアームのアクションコマンドのシーケンスです。

非同期推論の 3 つのデプロイシナリオ

1. 単一マシンでのデプロイ

ロボット、カメラ、クライアント、サーバーがすべて同じデバイス上にあります。

これは最も単純なケースです。サーバーは 127.0.0.1 で待ち受けることができ、クライアントも 127.0.0.1:port に接続できます。公式ドキュメントのコマンド例はこのシナリオを想定しています。

2. LAN 内でのデプロイ

ロボットとカメラは軽量なデバイスに接続され、ポリシーサーバーは同じローカルネットワーク内の別の高性能マシン上で動作します。

この場合、サーバーは他のマシンからアクセス可能なアドレスで待ち受ける必要があり、クライアントも 127.0.0.1 ではなくサーバーの LAN IP に接続する必要があります。

3. ネットワーク越し / クラウドでのデプロイ

ポリシーサーバーはパブリックにアクセス可能なクラウドホスト上で動作し、クライアントはインターネット経由でそれに接続します。

この方法では、クラウドホストのより強力な GPU を利用できます。ネットワーク状態が良好な場合、往復のネットワーク時間（ネットワークレイテンシ）は推論時間と比べて相対的に小さい場合もありますが、これは実際のネットワーク環境に依存します。

セキュリティに関する注意: LeRobot の非同期推論パイプラインには、認証されていない gRPC + pickle デシリアライズに関連するリスクがあります。サーバー上に重要な情報や重要なサービスがある場合、パブリックなデプロイでサービスをインターネットに直接公開することは推奨されません。より安全な方法は、VPN や SSH トンネリングを使用するか、少なくともセキュリティグループで許可する送信元 IP を自分のクライアントのパブリック IP にできるだけ制限することです。

### 非同期推論デプロイの始め方

#### ステップ 1: 環境構築

まず、pip を使って非同期推論に必要な追加依存関係をインストールします。クライアントとサーバーの両方で、追加依存関係付きの lerobot をインストールする必要があります。

```bash
pip install -e ".[async]"
```

#### ステップ 2: ネットワーク設定と確認

1. **プロキシの問題**

現在使用しているターミナルでプロキシが設定されていて接続の挙動がおかしい場合は、一時的にプロキシ関連の環境変数を解除できます。

```bash
unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY
```

注意: 上記のコマンドは現在のターミナルセッションにのみ影響します。別のターミナルウィンドウを開いた場合は、再度実行する必要があります。

2. **ファイアウォール / セキュリティグループでポートを開く**

単一マシンでのデプロイ: 通常はこの手順を省略できます。

LAN デプロイ: サーバー側で待ち受けポートを開く必要があります。

LAN 構成で待ち受けポートを開く例（サーバー側で実行）:

```bash
sudo ufw allow 8080/tcp
```

クラウドデプロイ: クラウドサーバーのセキュリティグループでこのポートを開く必要があり、可能な限り送信元 IP を制限することを推奨します。

クラウドサーバー上で実行している場合:

サーバー管理コンソールのセキュリティグループでポート 8080 を開くか、すでに開いている別のポートを使用します。クラウドサービスプラットフォームごとに操作方法が異なるため、利用しているクラウドプロバイダのドキュメントを参照してください。

3. **IP アドレスの確認**

単一マシンでのデプロイではこの手順は省略できます（単一マシンの IP アドレスは常に 127.0.0.1 です）。

LAN デプロイの場合:

サーバー側の LAN IP アドレスを確認して覚えておく必要があります。クライアントが接続する際に入力すべきなのは、クライアント自身の IP ではなく、policy_server を実行しているマシンの LAN IP です。

Linux / Jetson / Raspberry Pi:

```bash
hostname -I
```

複数のアドレスが表示される場合は、一般的に現在の LAN ネットワークインターフェースに対応するもの、例えば 192.168.x.x を選びます。

次のコマンドを使うこともできます。

```bash
ip addr
```

これにより、現在接続されているネットワークインターフェースの inet フィールドを確認できます。

Windows:

```shell
ipconfig
```

IPv4 Address . . . . . . . . . . . : 192.168.14.140 のようなフィールドを探します。これがそのマシンの LAN IP アドレスです。

macOS:

```bash
ifconfig
```

現在接続されているネットワークインターフェースに対応する inet フィールドを探します。それが LAN IP アドレスです。

サーバー側の LAN IP アドレスを覚えておく必要があります。ここではそれを `<LAN IP address>` と表記します。

クラウドサーバーでのデプロイの場合:

サーバーのコントロールパネルでパブリック IP を探します。通常、次のいずれかの名称になっています。

Public IPv4

External IP

Public IP address

EIP

Public IP

パブリック IP アドレスを覚えておく必要があります。ここではそれを` <server public IP> `と表記します。

4. **接続テスト**

単一マシンでのデプロイ: この手順は省略できます。

LAN / クラウドデプロイ: クライアント側からサーバーポートに到達できるかどうかをテストすることを推奨します。テスト例は次のとおりです。

LAN の例: クライアント側で実行

```bash
nc -vz <LAN IP address> 8080
```

クラウドの例: クライアント側で実行

```bash
nc -vz <server public IP> 8080
```

#### ステップ 3: サービスを起動する

**シナリオ A: 単一マシンでのデプロイ**

1 つのターミナルでローカルサービスを起動します。

```bash
python -m lerobot.async_inference.policy_server \
--host=127.0.0.1 \
--port=8080
```

正常に起動したら、このターミナルは開いたままにしておく必要があります。別のコマンドを実行するには、新しいターミナルを開いてください。

**シナリオ B: LAN デプロイ**

サーバー側で実行:

```bash
python -m lerobot.async_inference.policy_server \
--host=0.0.0.0 \
--port=8080
```

この場合、クライアントが接続する際の --server_address にはサーバー側の LAN IP アドレス、すなわち`<LAN IP address>:8080` を指定する必要があります。

**シナリオ C: クラウドサーバーでのデプロイ**

サーバー側で実行:

```bash
python -m lerobot.async_inference.policy_server \
--host=0.0.0.0 \
--port=8080
```

この場合、クライアントが接続する際の --server_address にはサーバーのパブリック IP アドレス、すなわち `<server public IP>:8080` を指定する必要があります。

#### ステップ 4: 推論パラメータを選択する

クライアント側で実行:

```bash
python -m lerobot.async_inference.robot_client \
--server_address=<ip address>:8080 \
--robot.type=so100_follower \
--robot.port=/dev/tty.usbmodem585A0076841 \
--robot.id=follower_so100 \
--robot.cameras="{ laptop: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}, phone: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}}" \
--task="dummy" \
--policy_type=your_policy_type \
--pretrained_name_or_path=user/model \
--policy_device=cuda \
--actions_per_chunk=50 \
--chunk_size_threshold=0.5 \
--aggregate_fn_name=weighted_average \
--debug_visualize_queue_size=True
```

パラメータの説明:

- `--server_address`

ポリシーサーバーのアドレスとポートを指定します。`<ip address>` は 127.0.0.1（ローカルマシン）、`<LAN IP address>`（LAN）、または`<server public IP>`（クラウドサーバー）に置き換えてください。

- `--robot.type, --robot.port, --robot.id, --robot.cameras`

ハードウェアデバイスに関するパラメータです。これらはデータセット収集時に使用したパラメータと一致させる必要があります。

- `--task`

タスクの説明です。SmolVLA のようなビジョン・ランゲージポリシーは、このタスクテキストに基づいてアクションの対象を判断できます。

- `--policy_type`

ここには具体的なポリシー名を指定します。例えば:

- smolvla

- act

- `--pretrained_name_or_path`

この値は、サーバー側のモデルパス、または Hugging Face 上のモデルパスに置き換えてください。

- `--policy_device`

サーバー側で使用する推論デバイスを指定します。

cuda、mps、cpu のいずれかを指定できます。

- `--actions_per_chunk=50`

1 回の推論で出力されるアクション数を指定します。

この値が大きいほど:

利点: アクションバッファに余裕ができ、枯渇しにくくなります
欠点: 予測ホライズンが長くなるため、制御誤差がより目立って蓄積する可能性があります

- `--chunk_size_threshold=0.5`

次のアクションチャンクをサーバーに要求するタイミングを指定します。

これは通常 0〜1 の範囲で指定するしきい値です。

これは次のように理解できます：現在のアクションキューの残り割合がこのしきい値を下回ったとき、クライアントは事前に新しい観測を送信し、次のアクションチャンクを要求します。

ここで 0.5 に設定するということは、次のことを意味します：

現在のアクションチャンクが約半分消費されたとき

クライアントは次のアクションチャンクの要求を開始します

この値が大きいほど、リクエスト送信の頻度が高くなり、システムの応答性は向上しますが、サーバーへの負荷も増加します。

この値が小さいほど、動作は同期推論に近づきます。

- `--aggregate_fn_name=weighted_average`

重なり合うアクション区間に対する集約方法を指定します。

非同期推論では、古いアクションチャンクがまだ完全に実行されていないうちに、新しいアクションチャンクがすでに到着している場合があります。

その場合、2 つのチャンクは時間区間の一部で重なり合うため、それらを最終的に実行されるアクションに結合するための集約関数が必要になります。

weighted_average の意味は次のとおりです：

重み付き平均を用いて重なり合う部分を融合します。

これは通常、アクションの切り替えをよりスムーズにし、急激な変化を減らします。

- `--debug_visualize_queue_size=True`

実行時にアクションキューのサイズを可視化するかどうかを指定します。

有効にすると、キューが頻繁に底をついていないかをより直接的に確認でき、actions_per_chunk と chunk_size_threshold のチューニングに役立ちます。

#### ステップ 5: ロボットの挙動に基づいてパラメータを調整する

非同期推論では、同期推論には存在しない、調整が必要な追加パラメータが 2 つあります：

パラメータ 推奨初期値 説明

actions_per_chunk 50 ポリシーが一度に出力するアクション数。典型的な値：10～50。

chunk_size_threshold 0.5 アクションキューの残り割合が chunk_size_threshold 以下になったとき、クライアントは新しいアクションチャンクを要求します。値の範囲は [0, 1] です。

--debug_visualize_queue_size=True のとき、実行時にアクションキューサイズの変化がプロットされます。

非同期推論でバランスを取る必要があるのは、サーバーがアクションチャンクを生成する速度が、クライアントがアクションチャンクを消費する速度以上でなければならないという点です。そうでない場合、アクションキューが空になり、ロボットは再びカクつき始めます（これはキューの可視化において、曲線が下限に達していることで確認できます）。

サーバーがアクションチャンクを生成する速度は、モデルサイズ、デバイスタイプ、VRAM / メモリ、GPU の計算能力などの要因の影響を受けます。

クライアントがアクションチャンクを消費する速度は、設定された実行 fps の影響を受けます。

キューが頻繁に空になる場合は、actions_per_chunk を増やす、chunk_size_threshold を増やす、または fps を下げる必要があります。

キューの曲線が頻繁に変動していても、キュー内の残りアクションが常に十分である場合は、chunk_size_threshold を適切に下げることができます。

一般的には：

actions_per_chunk の経験的な範囲は 10～50 です

chunk_size_threshold の経験的な範囲は 0.5～0.7 であり、チューニングの際は 0.5 から始めて徐々に増やしていくことを推奨します

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

学習が完了したら、次のコマンドで最新のチェックポイントをアップロードします：

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

- このドキュメント／チュートリアルに従っている場合は、推奨されている GitHub リポジトリ `https://github.com/Seeed-Projects/lerobot.git` を git clone してください。本ドキュメントで推奨しているリポジトリは検証済みの安定版です。一方、公式の Lerobot リポジトリは常に最新バージョンへ更新されており、データセットバージョンの違いやコマンドの違いなど、予期せぬ問題が発生する可能性があります。

- サーボ ID のキャリブレーション時に次のエラーが発生した場合：

  ```bash
  `Motor ‘gripper’ was not found, Make sure it is connected`
  ```

  通信ケーブルがサーボに正しく接続されているか、電源が正しい電圧を供給しているかを注意深く確認してください。

- 次のような状況が発生した場合：

  ```bash
  Could not connect on port "/dev/ttyACM0"
  ```

  そして `ls /dev/ttyACM*` を実行したときに ACM0 が存在するのが確認できる場合は、シリアルポートの権限付与を忘れていることを意味します。ターミナルで `sudo chmod 666 /dev/ttyACM*` を実行して修正してください。

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

  対応するポート上のロボットアームの電源が入っているか、バスサーボのデータケーブルが緩んでいたり外れていたりしないかを確認する必要があります。もしサーボのランプが点灯していない場合は、その 1 つ前のサーボのケーブルが緩んでいることを意味します。

- ロボットアームのキャリブレーション時に次のエラーが発生した場合：

  ```bash
  Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)
  ```

  ロボットアームの電源を切って再起動し、その後もう一度キャリブレーションを試してください。この方法は、キャリブレーション中に MAX 角度が数万という値に達した場合にも使用できます。これでも解決しない場合は、中央値のキャリブレーションや ID 書き込みを含め、該当するサーボを再キャリブレーションする必要があります。

- 評価フェーズ中に次のような状況が発生した場合：

  ```bash
  File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'
  ```

  まず `eval_` で始まるフォルダを削除してから、再度プログラムを実行してください。

- 評価フェーズ中に次のような状況が発生した場合：

  ```bash
  `mean` is infinity. You should either initialize with `stats` as an argument or use a pretrained model
  ```

  `--robot.cameras` パラメータ内の "front" や "side" といったキーワードは、データセット収集時に使用したものと厳密に一致している必要があることに注意してください。

- ロボットアームの部品を修理または交換した場合は、`~/.cache/huggingface/lerobot/calibration/robots` または `~/.cache/huggingface/lerobot/calibration/teleoperators` 配下のファイルを完全に削除し、ロボットアームを再キャリブレーションしてください。そうしないと、これらのディレクトリ内の JSON ファイルにキャリブレーション情報が保存されているため、エラーメッセージが表示される可能性があります。

- 50 セットのデータに対して ACT を学習するには、RTX 3060（8GB）を搭載したノート PC で約 6 時間、RTX 4090 や A100 GPU を搭載したコンピュータでは約 2～3 時間かかります。

- データ収集中は、カメラの位置、角度、および周囲の照明が安定していることを確認してください。カメラに映り込む不安定な背景や歩行者の量を減らしてください。デプロイ環境が大きく変化しすぎると、ロボットアームがうまく把持できなくなる可能性があります。

- データ収集コマンドでは、十分なデータを収集できるように `num-episodes` パラメータを設定してください。途中で手動で一時停止しないでください。データの平均値と分散は、データ収集完了後にのみ計算され、学習に必要となります。

- プログラムが USB カメラから画像データを読み取れないと示す場合は、USB カメラがハブ経由で接続されていないことを確認してください。USB カメラは、画像伝送速度を確保するためにデバイスへ直接接続する必要があります。

- `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?` のようなバグが見つかった場合は、rerun のバージョンをダウングレードすることで問題を解決できます。

```bash
pip3 install rerun-sdk==0.23
```

:::tip
解決できないソフトウェアの問題や環境依存関係の問題に遭遇した場合は、このチュートリアル末尾の FAQ セクションを確認することに加えて、速やかに [LeRobot プラットフォーム](https://github.com/huggingface/lerobot) または [LeRobot Discord チャンネル](https://discord.gg/8TnwDdjFGU) に問題を報告してください。
:::

## 引用

[中国語ドキュメント](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

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
