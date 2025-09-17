---
description: このwikiは、SO ARM100の組み立てとデバッグのチュートリアルを提供し、最新版のLerobotフレームワーク内でのデータ収集とトレーニングを実現します。
title: LerobotでのSoArm
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /ja/lerobot_so100m_new
last_update:
  date: 9/15/2025
  author: LiShanghang
---

# LeRobot を使用した SO-ARM100 および SO-ARM101 ロボットアームの入門

:::tip
このチュートリアルのメンテナンスは最新版の[lerobot](https://huggingface.co/docs/lerobot/index)に更新されています。以前のバージョンのチュートリアルを参照したい場合は、[こちら](https://wiki.seeedstudio.com/ja/lerobot_so100m/)をクリックしてください。
:::

## はじめに

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100)は、[TheRobotStudio](https://www.therobotstudio.com/)によって開始された完全オープンソースのロボットアームプロジェクトです。フォロワーアームとリーダーロボットアームが含まれており、詳細な3Dプリントファイルと操作ガイドも提供されています。[LeRobot](https://github.com/huggingface/lerobot/tree/main)は、PyTorchで実世界のロボティクス向けのモデル、データセット、ツールを提供することに取り組んでいます。その目的は、ロボティクスの参入障壁を下げ、誰もがデータセットと事前訓練済みモデルの共有に貢献し、恩恵を受けられるようにすることです。LeRobotは、実世界での応用に検証された最先端の手法を統合し、模倣学習を中心としています。人間が収集したデモンストレーションを特徴とする事前訓練済みモデル、データセット、シミュレーション環境のスイートを提供し、ユーザーがロボットの組み立ての必要なしに開始できるようにしています。今後数週間で、現在利用可能な最もコスト効率的で有能なロボットでの実世界ロボティクスのサポートを拡張する予定です。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクト紹介

SO-ARM10xとreComputer Jetson AIインテリジェントロボットキットは、高精度ロボットアーム制御と強力なAIコンピューティングプラットフォームをシームレスに組み合わせ、包括的なロボット開発ソリューションを提供します。このキットは、Jetson OrinまたはAGX Orinプラットフォームをベースとし、SO-ARM10xロボットアームとLeRobot AIフレームワークを組み合わせて、教育、研究、産業自動化などの複数のシナリオに適用可能なインテリジェントロボットシステムをユーザーに提供します。
このwikiは、SO ARM10xの組み立てとデバッグのチュートリアルを提供し、Lerobotフレームワーク内でのデータ収集とトレーニングを実現します。

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## 主な特徴

1. **オープンソースで低コスト**：[TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100)からのオープンソース、低コストロボットアームソリューションです
2. **LeRobotとの統合**：[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)との統合のために設計されています
3. **豊富な学習リソース**：組み立てとキャリブレーションガイド、テスト、データ収集、トレーニング、デプロイメントのチュートリアルなど、包括的なオープンソース学習リソースを提供し、ユーザーが迅速に開始してロボットアプリケーションを開発できるよう支援します。
4. **Nvidiaとの互換性**：reComputer Mini J4012 Orin NX 16 GBでこのアームキットをデプロイします。
5. **マルチシーン応用**：教育、科学研究、自動化生産、ロボティクスなどの分野に適用可能で、ユーザーが様々な複雑なタスクで効率的で精密なロボット操作を実現できるよう支援します。

## 新機能：

- 配線の最適化：SO-ARM100と比較して、SO-ARM101は配線が改善され、以前にジョイント3で見られた切断問題を防ぎます。新しい配線設計により、ジョイントの可動範囲も制限されなくなりました。
- リーダーアームの異なるギア比：リーダーアームは最適化されたギア比のモーターを使用し、性能を向上させ、外部ギアボックスの必要性を排除しました。
- 新機能サポート：リーダーアームがフォロワーアームをリアルタイムで追従できるようになりました。これは、人間がロボットの動作に介入して修正できる今後の学習ポリシーにとって重要です。

:::caution

Seeed Studioは、ハードウェア自体の品質についてのみ責任を負います。チュートリアルは公式ドキュメントに厳密に従って更新されています。解決できないソフトウェアの問題や環境依存の問題に遭遇した場合は、このチュートリアルの最後にあるFAQセクションを確認することに加えて、[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)または[LeRobot Discordチャンネル](https://discord.gg/8TnwDdjFGU)に問題を速やかに報告してください。

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
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">アームキット</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">アームキットPro</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">アームキット</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">アームキットPro</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>リーダーアーム</td>
      <td rowSpan="2">全ジョイント用の1:345ギア比を持つ12x ST-3215-C001 (7.4V) モーター</td>
      <td rowSpan="2">全ジョイント用の1:345ギア比を持つ12x ST-3215-C018/ST-3215-C047 (12V) モーター</td>
      <td colSpan="2">
        ジョイント2のみ用の1:345ギア比を持つ1x ST-3215-C001 (7.4V) モーター<br />
        ジョイント1と3用の1:191ギア比を持つ2x ST-3215-C044 (7.4V) モーター<br />
        ジョイント4、5、グリッパー（ジョイント6）用の1:147ギア比を持つ3x ST-3215-C046 (7.4V) モーター
      </td>
    </tr>
    <tr>
      <td>フォロワーアーム</td>
      <td colSpan="2">SO-ARM100と同じ</td>
    </tr>
    <tr>
      <td>電源</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm × 2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm × 2.1 mm DC 12 V 2 A（フォロワーアーム）<br />
        5.5 mm × 2.1 mm DC 5 V 4 A（リーダーアーム）
      </td>
    </tr>
    <tr>
      <td>角度センサー</td>
      <td colSpan="4">12ビット磁気エンコーダー</td>
    </tr>
    <tr>
      <td>推奨動作温度</td>
      <td colSpan="4">0 °C から 40 °C</td>
    </tr>
    <tr>
      <td>通信</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>制御方法</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger

アームキット版を購入した場合、両方の電源は5Vです。アームキットPro版を購入した場合は、リーダーロボットアームのキャリブレーションとすべてのステップに5V電源を使用し、フォロワーロボットアームのキャリブレーションとすべてのステップに12V電源を使用してください。

:::

## 部品表（BOM）

| 部品 | 数量 | 含まれる|
|--|--|--|
|  サーボモーター | 12 | ✅ |
| モーター制御ボード | 2 | ✅ |
| USB-Cケーブル 2本 | 1 | ✅ |
| 電源2 | 2 | ✅ |
| テーブルクランプ| 4 | ✅ |
| アームの3Dプリント部品 | 1 | オプション |

## 初期システム環境

**Ubuntu x86の場合：**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6+  

**Jetson Orinの場合：**

- Jetson JetPack 6.0および6.1、6.1はサポートされていません
- Python 3.10  
- Torch 2.3+

## 目次

  [A. 3Dプリントガイド](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot)

  [B. LeRobotのインストール](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#install-lerobot)

  [C. モーターの設定](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#configure-the-motors)

  [D. 組み立て](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#assembly)

  [E. キャリブレーション](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#calibrate)

  [F. テレオペレーション](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#teleoperate)

  [G. カメラの追加](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#add-cameras)

  [H. データセットの記録](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#record-the-dataset)

  [I. データセットの可視化](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#visualize-the-dataset)

  [J. エピソードの再生](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#replay-an-episode)

  [K. ポリシーのトレーニング](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#train-a-policy)

  [L. ポリシーの評価](https://wiki.seeedstudio.com/ja/lerobot_so100m_new/#evaluate-your-policy)

## 3Dプリントガイド

:::caution
SO101の公式アップデートに伴い、SO100はサポートされなくなり、公式によるとソースファイルは削除されますが、ソースファイルは依然として私たちの[Makerworld](https://makerworld.com/zh/models/908660)で見つけることができます。ただし、以前にSO100を購入したユーザーについては、チュートリアルとインストール方法は互換性があります。SO101のプリントは、SO100のモーターキットインストールと完全に互換性があります。
:::

### ステップ1：プリンターを選択する

提供されるSTLファイルは、多くのFDMプリンターでプリント可能です。以下はテスト済みで推奨される設定ですが、他の設定でも動作する可能性があります。

- 材料：PLA+
- ノズル径と精度：0.2mmレイヤー高さでの0.4mmノズル径、または0.4mmレイヤー高さでの0.6mmノズル。
- インフィル密度：15%  

### ステップ2：プリンターをセットアップする
- プリンターが校正され、ベッドレベルがプリンター固有の指示に従って正しく設定されていることを確認してください。
- プリントベッドを清掃し、ほこりや油脂がないことを確認してください。水やその他の液体でベッドを清掃した場合は、ベッドを乾燥させてください。
- プリンターが推奨する場合は、標準的なグルースティックを使用し、ベッドのプリント領域全体に薄く均一にグルーを塗布してください。塊や不均一な塗布は避けてください。
- プリンター固有の指示に従ってプリンターフィラメントをロードしてください。
- プリンター設定が上記で推奨されたものと一致することを確認してください（ほとんどのプリンターには複数の設定があるため、最も近いものを選択してください）。
- 水平面に対して45度を超える傾斜は無視して、すべての場所にサポートを設定してください。
- 水平軸を持つネジ穴にはサポートがないようにしてください。

### ステップ3：パーツを印刷する

リーダーまたはフォロワーのすべてのパーツは、簡単な3Dプリント用に単一ファイルに含まれており、サポートを最小限に抑えるためにz軸上向きに正しく配向されています。

- 220mmx220mmのプリンターベッドサイズ（Enderなど）の場合、これらのファイルを印刷してください：
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- 205mm x 250mmのプリンターベッドサイズ（Prusa/Upなど）の場合：
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## LeRobotをインストールする

pytorchやtorchvisionなどの環境は、お使いのCUDAに基づいてインストールする必要があります。

1. Minicondaをインストール：
Jetson用：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

または、X86 Ubuntu 22.04用：

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. lerobot用の新しいconda環境を作成してアクティベート

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Lerobotをクローン：

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

4. minicondaを使用する場合、環境にffmpegをインストール：

```bash
conda install ffmpeg -c conda-forge
```

:::tip
これは通常、libsvtav1エンコーダーでコンパイルされたプラットフォーム用のffmpeg 7.Xをインストールします。libsvtav1がサポートされていない場合（ffmpeg -encodersでサポートされているエンコーダーを確認）、以下のことができます：

- [すべてのプラットフォーム] 以下を使用してffmpeg 7.Xを明示的にインストール：

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [Linuxのみ] ffmpegビルド依存関係をインストールし、libsvtav1でソースからffmpegをコンパイルし、which ffmpegでインストールに対応するffmpegバイナリを使用することを確認してください。

このようなエラーが発生した場合も、このコマンドを使用できます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

:::

5. feetechモーター用の依存関係を含むLeRobotをインストール：

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

Jetson Jetpack 6.0+デバイス用（このステップを実行する前に、ステップ5から[Pytorch-gpuとTorchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)をインストールしてください）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. PytorchとTorchvisionを確認

pipを介してlerobot環境をインストールすると、元のPytorchとTorchvisionがアンインストールされ、PytorchとTorchvisionのCPUバージョンがインストールされるため、Pythonで確認を行う必要があります。

```python
import torch
print(torch.cuda.is_available())
```

印刷された結果がFalseの場合、[公式ウェブサイトのチュートリアル](https://pytorch.org/index.html)に従ってPytorchとTorchvisionを再インストールする必要があります。

Jetsonデバイスを使用している場合は、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)に従ってPytorchとTorchvisionをインストールしてください。

## モーターを設定する

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

SO-ARM101のサーボ校正と初期化プロセスは、方法とコードの両方においてSO-ARM100と同じです。ただし、SO-ARM101リーダーアームの最初の3つの関節のギア比はSO-ARM100と異なるため、注意深く区別して校正することが重要です。

モーターを設定するには、リーダーアーム用に1つのバスサーボアダプターと6つのモーターを指定し、同様にフォロワーアーム用に他のバスサーボアダプターと6つのモーターを指定します。それらにラベルを付け、各モーターがフォロワーF用かリーダーL用か、そして1から6までのIDを書くと便利です。**フォロワーアーム**の関節1から6を表すために**F1–F6**を使用し、**リーダーアーム**の関節1から6を表すために**L1–L6**を使用します。対応するサーボモデル、関節割り当て、ギア比の詳細は以下の通りです：

| サーボモデル                            | ギア比 | 対応する関節         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
モーターバスに5Vまたは12Vの電源を接続してください。STS3215 7.4Vモーター用は5V、STS3215 12Vモーター用は12Vです。リーダーアームは常に7.4Vモーターを使用するため、12Vと7.4Vモーターがある場合は正しい電源を接続するよう注意してください。そうしないとモーターを焼損する可能性があります！次に、USBを介してモーターバスをコンピューターに接続します。USBは電力を供給しないため、電源とUSBの両方を接続する必要があることに注意してください。
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

***以下はコード校正ステップです。上記の画像の参照配線サーボで校正してください***

アームに関連するUSBポートを見つける
各アームの正しいポートを見つけるために、ユーティリティスクリプトを2回実行します：

```bash
python -m lerobot.find_port
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
usbを取り外すことを忘れないでください。そうしないとインターフェースが検出されません。
:::

リーダーアームのポートを識別する際の出力例（例：Macでは`/dev/tty.usbmodem575E0031751`、Linuxでは`/dev/ttyACM0`の可能性）：

フォロワーアームのポートを識別する際の出力例（例：`/dev/tty.usbmodem575E0032081`、またはLinuxでは`/dev/ttyACM1`の可能性）：

以下を実行してUSBポートへのアクセス権を付与する必要がある場合があります：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**モーターを設定する**

:::danger
リーダーモーター（ST-3215-C046、C044、001）の校正には5V電源を使用してください。
:::

| **リーダーアーム関節6校正** | **リーダーアーム関節5校正** | **リーダーアーム関節4校正** | **リーダーアーム関節3校正** | **リーダーアーム関節2校正** | **リーダーアーム関節1校正** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

:::danger
アームキット版（ST-3215-C001）を購入した場合は、5V電源を使用してください。アームキットプロ版を購入した場合は、サーボ（ST-3215-C047/ST-3215-C018）の校正に12V電源を使用してください。
:::

| **フォロワーアーム関節6校正** | **フォロワーアーム関節5校正** | **フォロワーアーム関節4校正** | **フォロワーアーム関節3校正** | **フォロワーアーム関節2校正** | **フォロワーアーム関節1校正** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |
:::tip
再度、サーボジョイントIDとギア比がSO-ARM101のものと厳密に対応していることを確認してください。
:::

コンピュータからのUSBケーブルと電源をフォロワーアームのコントローラーボードに接続します。その後、以下のコマンドを実行してください。

```bash
python -m lerobot.setup_motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

以下の指示が表示されるはずです。

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

指示に従って、グリッパーのモーターを接続してください。ボードに接続されているモーターがそれだけであることを確認し、モーター自体がまだ他のモーターにデイジーチェーン接続されていないことを確認してください。[Enter]を押すと、スクリプトが自動的にそのモーターのIDとボーレートを設定します。

その後、以下のメッセージが表示されるはずです：

```bash
'gripper' motor id set to 6
```

続いて次の指示が表示されます：

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

コントローラーボードから3ピンケーブルを取り外すことができますが、もう一方の端のグリッパーモーターには接続したままにしておくことができます。すでに正しい位置にあるからです。次に、別の3ピンケーブルを手首ロールモーターに接続し、コントローラーボードに接続してください。前のモーターと同様に、ボードに接続されているモーターがそれだけであることを確認し、モーター自体が他のモーターに接続されていないことを確認してください。

:::caution
指示に従って各モーターに対してこの操作を繰り返してください。
:::

Enterを押す前に、各ステップでケーブル接続を確認してください。例えば、ボードを操作する際に電源ケーブルが外れる可能性があります。

完了すると、スクリプトは単純に終了し、この時点でモーターは使用準備が整います。これで、各モーターから次のモーターへ3ピンケーブルを接続し、最初のモーター（ID=1の「ショルダーパン」）からコントローラーボードへのケーブルを接続できます。コントローラーボードはアームのベースに取り付けることができます。

リーダーアームについても同じ手順を実行してください。

```bash
python -m lerobot.setup_motors \
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

- SO-ARM101のデュアルアーム組み立てプロセスは、SO-ARM100と同じです。唯一の違いは、SO-ARM101にケーブルクリップが追加されていることと、リーダーアームのジョイントサーボのギア比が異なることです。そのため、SO100とSO101の両方とも、以下の内容を参照して設置できます
- 組み立て前に、モーターモデルと減速比を再度確認してください。SO100を購入した場合は、このステップを無視できます。SO101を購入した場合は、以下の表を確認してF1からF6、L1からL6を区別してください。

:::

  | サーボモデル                            | ギア比 | 対応ジョイント         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
**SO101 Arm Kit Standard Edition**を購入した場合、すべての電源は5Vです。**SO101 Arm Kit Pro Edition**を購入した場合、リーダーアームは各ステップで5V電源を使用してキャリブレーションと操作を行い、フォロワーアームは各ステップで12V電源を使用してキャリブレーションと操作を行う必要があります。
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

- フォロワーアームの組み立て手順は、基本的にリーダーアームと同じです。唯一の違いは、ステップ12以降のエンドエフェクター（グリッパーとハンドル）の取り付け方法です。

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
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

:::danger
**SO101 Arm Kit Standard Edition**を購入した場合、すべての電源は5Vです。**SO101 Arm Kit Pro Edition**を購入した場合、リーダーアームは各ステップで5V電源を使用してキャリブレーションと操作を行い、フォロワーアームは各ステップで12V電源を使用してキャリブレーションと操作を行う必要があります。
:::

次に、SO-10xロボットに電源とデータケーブルを接続してキャリブレーションを行い、リーダーアームとフォロワーアームが同じ物理的位置にあるときに同じ位置値を持つようにする必要があります。このキャリブレーションは、1つのSO-10xロボットで訓練されたニューラルネットワークが別のロボットで動作できるようにするために不可欠です。ロボットアームを再キャリブレーションする必要がある場合は、`~/.cache/huggingface/lerobot/calibration/robots`または`~/.cache/huggingface/lerobot/calibration/teleoperators`の下のファイルを削除してロボットアームを再キャリブレーションしてください。そうしないと、エラープロンプトが表示されます。ロボットアームのキャリブレーション情報は、このディレクトリの下のJSONファイルに保存されます。

**フォロワーアームの手動キャリブレーション**

6つのロボットサーボのインターフェースを3ピンケーブルで接続し、シャーシサーボをサーボドライブプレートに接続してから、以下のコマンドまたはAPIの例を実行してロボットアームをキャリブレーションしてください：

***最初にインターフェース権限を付与します***

```bash
sudo chmod 666 /dev/ttyACM*
```
***次にフォロワーアームをキャリブレーションします***

```python
python -m lerobot.calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm
```

以下の動画はキャリブレーションの実行方法を示しています。まず、すべての関節がその可動範囲の中央にある位置にロボットを移動させる必要があります。その後、Enterキーを押してから、各関節をその全可動範囲で動かす必要があります。

**リーダーアームの手動キャリブレーション**

リーダーアームをキャリブレーションするために同じ手順を実行し、以下のコマンドまたはAPIの例を実行してください：

```python
python -m lerobot.calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## テレオペレーション

**シンプルなテレオペレーション**
これでロボットをテレオペレーションする準備が整いました！この簡単なスクリプトを実行してください（カメラには接続せず、表示もしません）：

ロボットに関連付けられたIDは、キャリブレーションファイルを保存するために使用されることに注意してください。同じセットアップを使用する際は、テレオペレーション、記録、評価時に同じIDを使用することが重要です。

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm
```

テレオペレーションコマンドは自動的に以下を実行します：

1. 不足しているキャリブレーションを特定し、キャリブレーション手順を開始します。
2. ロボットとテレオペレーションデバイスを接続し、テレオペレーションを開始します。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## カメラの追加

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

カメラをインスタンス化するには、カメラ識別子が必要です。この識別子は、コンピュータを再起動したり、カメラを再接続したりすると変更される可能性があり、この動作は主にオペレーティングシステムに依存します。

システムに接続されているカメラのカメラインデックスを見つけるには、以下のスクリプトを実行してください：

```python
python -m lerobot.find_cameras opencv # or realsense for Intel Realsense cameras
```

ターミナルに以下の情報が出力されます。

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

各カメラで撮影された画像は`outputs/captured_images`ディレクトリで確認できます。

:::warning
macOSでIntel RealSenseカメラを使用する際、このエラーが発生する可能性があります：`Error finding RealSense cameras: failed to set power state`。これはsudo権限で同じコマンドを実行することで解決できます。なお、macOSでRealSenseカメラを使用することは不安定です。
:::

その後、以下のコードを実行することで、テレオペレーション中にコンピュータ上でカメラを表示できるようになります。これは最初のデータセットを記録する前にセットアップを準備するのに役立ちます。

```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

より多くのカメラがある場合は、`--robot.cameras`を変更してカメラを追加できます。index_or_pathの形式に注意してください。これは`python -m lerobot.find_cameras opencv`で出力されるカメラIDの最後の桁によって決まります。

例えば、サイドカメラを追加したい場合：

```bash
python -m lerobot.teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

:::tip
このようなバグが発生した場合。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

rerunのバージョンをダウングレードすることで問題を解決できます。

```bash
pip3 install rerun-sdk==0.23
```

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットの記録

- データセットをローカルに保存したい場合は、直接実行できます：

```bash
python -m lerobot.record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

その中で、`repo_id`は任意に変更でき、`push_to_hub=false`です。最終的に、データセットはホームフォルダの`~/.cache/huggingface/lerobot`ディレクトリに保存され、前述の`seeedstudio123/test`フォルダが作成されます。

- データセットをアップロードするためにHugging Face hubの機能を使用したい場合で、以前に実行したことがない場合は、[Hugging Face設定](https://huggingface.co/settings/tokens)から生成できる書き込みアクセストークンを使用してログインしていることを確認してください：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

これらのコマンドを実行するために、Hugging Faceリポジトリ名を変数に保存してください：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

5つのエピソードを記録し、データセットをhubにアップロードします：

```bash
python -m lerobot.record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

以下のような行が多数表示されます：

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**パラメータの説明**

- episode-time-s：各回のデータ収集時間を表します。
- reset-time-s：各データ収集間の準備時間です。
- num-episodes：収集予定のデータグループ数を示します。
- push-to-hub：データをHuggingFace Hubにアップロードするかどうかを決定します。

:::tip

- データをローカルに保存したい場合（`--dataset.push_to_hub=false`）、`--dataset.repo_id=${HF_USER}/so101_test`を`--dataset.repo_id=seeed_123/so101_test`のようなカスタムローカルフォルダ名に置き換えてください。その後、システムのホームディレクトリの`~/.cache/huggingface/lerobot`に保存されます。

- `--dataset.push_to_hub=true`でデータセットをhubにアップロードした場合、repo idをコピー＆ペーストして[データセットをオンラインで視覚化](https://huggingface.co/spaces/lerobot/visualize_dataset)できます：

- エピソード記録中はいつでも右矢印→を押すと早期停止してリセットに移行できます。リセット中も同様に、早期停止して次のエピソード記録に移行できます。

- エピソード記録中またはリセット中はいつでも左矢印←を押すと早期停止し、現在のエピソードをキャンセルして再記録できます。

- エピソード記録中はいつでもESCキーを押すとセッションを早期終了し、直接ビデオエンコーディングとデータセットアップロードに移行できます。

- 注意：記録中にチェックポイントが自動的に作成されます。問題が発生した場合は、`--resume=true`を付けて同じコマンドを再実行することで再開できます。最初から記録を開始するには、データセットディレクトリを手動で削除してください。
- データ記録に慣れたら、トレーニング用のより大きなデータセットを作成できます。良い開始タスクは、異なる場所でオブジェクトを掴み、ビンに置くことです。少なくとも50エピソードを記録し、場所ごとに10エピソードを記録することをお勧めします。カメラを固定し、記録全体を通して一貫した掴み動作を維持してください。また、操作しているオブジェクトがカメラに見えることを確認してください。良い経験則として、カメラ画像だけを見てタスクを自分で実行できるようにする必要があります。

- 以下のセクションでは、ニューラルネットワークをトレーニングします。信頼性の高い掴み性能を達成した後、データ収集中により多くのバリエーションを導入し始めることができます。例えば、追加の掴み場所、異なる掴み技術、カメラ位置の変更などです。

- 結果に悪影響を与える可能性があるため、あまりにも早く多くのバリエーションを追加することは避けてください。

- Linuxでは、データ記録中に左右の矢印キーとエスケープキーが効果がない場合、$DISPLAY環境変数を設定していることを確認してください。[pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html#linux)を参照してください。

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットの可視化

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

```bash
echo ${HF_USER}/so101_test  
```

`--dataset.push_to_hub=false`でアップロードしなかった場合、以下でローカルで可視化することもできます：

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id ${HF_USER}/so101_test \
```

`--dataset.push_to_hub=false`でアップロードした場合、以下でローカルで可視化することもできます：

```bash
python -m lerobot.scripts.visualize_dataset_html \
  --repo-id seeed_123/so101_test \
```

**ここで、`seeed_123`はデータ収集時に定義されたカスタム`repo_id`名です。**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
</div>

## エピソードの再生

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

ロボットで最初のエピソードを再生してみてください：

```bash
python -m lerobot.replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM1 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode=0
```

## ポリシーのトレーニング

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

ロボットを制御するポリシーをトレーニングするには、python -m lerobot.scripts.trainスクリプトを使用します。いくつかの引数が必要です。以下はコマンドの例です：

```bash
python -m lerobot.scripts.train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000 
```

**ローカルデータセットでトレーニングしたい場合は、`repo_id`がデータ収集時に使用したものと一致することを確認し、`--policy.push_to_hub=False`を追加してください。**

```bash
python -m lerobot.scripts.train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

説明しましょう：

- **データセット指定**：パラメータ`--dataset.repo_id=${HF_USER}/so101_test`を介してデータセットを提供します。
- **トレーニングステップ**：`--steps=300000`を使用してトレーニングステップ数を変更します。アルゴリズムはデフォルトで800000ステップですが、タスクの難易度とトレーニング中の損失を観察することで調整できます。
- **ポリシータイプ**：`policy.type=act`でポリシーを提供します。同様に、[act, diffusion, pi0, pi0fast, pi0fast, sac, smolvla]などのポリシー間で切り替えることができ、これにより`configuration_act.py`から設定が読み込まれます。重要なことに、このポリシーは、この情報がすでにデータセットに保存されているため、ロボットの（例：`laptop`と`phone`）モーター状態、モーターアクション、カメラ数に自動的に適応します。
- **デバイス選択**：Nvidia GPUでトレーニングしているため`policy.device=cuda`を提供しますが、Apple Siliconでトレーニングする場合は`policy.device=mps`を使用できます。
- **可視化ツール**：[Weights and Biases](https://docs.wandb.ai/quickstart)を使用してトレーニングチャートを可視化するために`wandb.enable=true`を提供します。これはオプションですが、使用する場合は`wandb login`を実行してログインしていることを確認してください。

以下のエラーが発生した場合：

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/stack_bug.png" />
</div>

以下のコマンドを実行して解決してください：

```bash
pip install datasets==2.19
```

トレーニングには数時間かかります。`outputs/train/act_so100_test/checkpoints`にチェックポイントが見つかります。

チェックポイントからトレーニングを再開するには、以下は`act_so101_test`ポリシーの最後のチェックポイントから再開するコマンドの例です：

```bash
python -m lerobot.scripts.train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**ポリシーチェックポイントのアップロード**

トレーニングが完了したら、最新のチェックポイントをアップロードします：

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

中間チェックポイントもアップロードできます：

```bash
CKPT=010000
huggingface-cli upload ${HF_USER}/act_so101_test${CKPT} \
  outputs/train/act_so101_test/checkpoints/${CKPT}/pretrained_model
```

## ポリシーの評価

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

[`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py)の`record`関数を使用できますが、ポリシーチェックポイントを入力として使用します。例えば、10個の評価エピソードを記録するには、このコマンドを実行します：

```bash
python -m lerobot.record  \
  --robot.type=so100_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video10, width: 640, height: 480, fps: 30}, side: {type: intelrealsense, serial_number_or_name: 233522074606, width: 640, height: 480, fps: 30}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_so100 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=${HF_USER}/my_policy
```

例えば：

```bash
python -m lerobot.record  \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

1. `--policy.path`パラメータは、ポリシートレーニング結果の重みファイルへのパス（例：`outputs/train/act_so101_test/checkpoints/last/pretrained_model`）を示します。モデルトレーニング結果の重みファイルをHubにアップロードした場合、モデルリポジトリ（例：`${HF_USER}/act_so100_test`）も使用できます。

2. データセット名`dataset.repo_id`は`eval_`で始まります。この操作により、評価中にビデオとデータが個別に記録され、`eval_`で始まるフォルダ（例：`seeed/eval_test123`）に保存されます。

3. 評価フェーズで`File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'`が発生した場合、まず`eval_`で始まるフォルダを削除してから、プログラムを再実行してください。

4. `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`が発生した場合、`--robot.cameras`パラメータのfrontやsideなどのキーワードは、データセット収集時に使用したものと厳密に一致している必要があることに注意してください。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

- このドキュメント/チュートリアルに従っている場合は、推奨されるGitHubリポジトリ`https://github.com/Seeed-Projects/lerobot.git`をgit cloneしてください。このドキュメントで推奨されるリポジトリは検証済みの安定版です。公式のLerobotリポジトリは最新版に継続的に更新されており、異なるデータセットバージョン、異なるコマンドなどの予期しない問題を引き起こす可能性があります。

- サーボIDを校正する際に以下のエラーが発生した場合：

  ```bash
  `Motor ‘gripper’ was not found, Make sure it is connected`
  ```

  通信ケーブルがサーボに適切に接続されているか、電源が正しい電圧を供給しているかを注意深く確認してください。

- 以下が発生した場合：

  ```bash
  Could not connect on port "/dev/ttyACM0"
  ```

  そして`ls /dev/ttyACM*`を実行してACM0が存在することが確認できる場合、シリアルポートの権限を付与するのを忘れています。ターミナルで`sudo chmod 666 /dev/ttyACM*`を入力して修正してください。

- 以下が発生した場合：

  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```
  `conda install ffmpeg=7.1.1 -c conda-forge`を使用してffmpeg 7.1.1をインストールしてください。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

- 以下のエラーが発生した場合：

  ```bash
  ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!
  ```

  対応するポートのロボットアームの電源が入っているか、バスサーボのデータケーブルが緩んでいるか切断されていないかを確認する必要があります。サーボのライトが点灯していない場合、前のサーボのケーブルが緩んでいることを意味します。

- ロボットアームのキャリブレーション時に以下のエラーが発生した場合：

  ```bash
  Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)
  ```

  ロボットアームの電源を切って再起動し、再度キャリブレーションを試してください。この方法は、キャリブレーション中にMAX角度が数万の値に達した場合にも使用できます。これで解決しない場合は、中央値キャリブレーションやID書き込みを含む、対応するサーボの再キャリブレーションが必要です。

- 評価フェーズで以下のエラーが発生した場合：

  ```bash
  File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'
  ```

  まず`eval_`で始まるフォルダを削除してから、プログラムを再実行してください。

- 評価フェーズで以下のエラーが発生した場合：

  ```bash
  `mean` is infinity. You should either initialize with `stats` as an argument or use a pretrained model
  ```

  `--robot.cameras`パラメータの「front」や「side」などのキーワードは、データセット収集時に使用したものと厳密に一致している必要があることに注意してください。

- ロボットアームの部品を修理または交換した場合は、`~/.cache/huggingface/lerobot/calibration/robots`または`~/.cache/huggingface/lerobot/calibration/teleoperators`下のファイルを完全に削除し、ロボットアームを再キャリブレーションしてください。そうしないと、これらのディレクトリのJSONファイルにキャリブレーション情報が保存されているため、エラーメッセージが表示される可能性があります。

- 50セットのデータでACTをトレーニングするには、RTX 3060（8GB）搭載のラップトップで約6時間、RTX 4090またはA100 GPUを搭載したコンピュータで約2-3時間かかります。

- データ収集中は、カメラの位置、角度、周囲の照明を安定させてください。カメラに映る不安定な背景や歩行者の量を減らしてください。デプロイメント環境の変化が過度になると、ロボットアームが適切に把握できなくなる可能性があります。

- データ収集コマンドでは、`num-episodes`パラメータが十分なデータを収集するように設定されていることを確認してください。途中で手動で一時停止しないでください。データの平均と分散はデータ収集完了後にのみ計算され、これらはトレーニングに必要です。

- プログラムがUSBカメラから画像データを読み取れないと表示される場合は、USBカメラがハブを通じて接続されていないことを確認してください。USBカメラは高速な画像転送速度を確保するため、デバイスに直接接続する必要があります。

- `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`のようなバグが見つかった場合は、rerunのバージョンをダウングレードして問題を解決できます。

```bash
pip3 install rerun-sdk==0.23
```

:::tip
解決できないソフトウェアの問題や環境依存の問題が発生した場合は、このチュートリアルの最後にあるFAQセクションを確認することに加えて、[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)または[LeRobot Discordチャンネル](https://discord.gg/8TnwDdjFGU)に速やかに問題を報告してください。
:::

## 引用

[中文文档](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

TheRobotStudio Project: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
