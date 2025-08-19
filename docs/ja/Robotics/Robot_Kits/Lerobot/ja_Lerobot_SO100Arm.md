---
description: このウィキでは、SO ARM100の組み立てとデバッグのチュートリアルを提供し、Lerobotフレームワーク内でのデータ収集とトレーニングを実現します。
title: LerobotでSO10xArmロボットアームを使用する方法
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /ja/lerobot_so100m
last_update:
  date: 12/24/2024
  author: ZhuYaoHui
---

# LerobotでSO-ARM100およびSO-ARM101ロボットアームを使用する方法

:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100)は、[TheRobotStudio](https://www.therobotstudio.com/)によって開始された完全オープンソースのロボットアームプロジェクトです。このプロジェクトには、フォロワーアームとリーダーロボットアームが含まれており、詳細な3Dプリントファイルと操作ガイドも提供されています。[LeRobot](https://github.com/huggingface/lerobot/tree/main)は、PyTorchを使用して現実世界のロボット工学向けのモデル、データセット、およびツールを提供することに専念しています。その目的は、ロボット工学の参入障壁を下げ、誰もがデータセットや事前学習モデルを共有し、恩恵を受けられるようにすることです。LeRobotは、現実世界での応用が検証された最先端の手法を統合しており、模倣学習に焦点を当てています。事前学習モデルのスイート、人間によるデモンストレーションを特徴とするデータセット、およびシミュレーション環境を提供し、ユーザーがロボットの組み立てを必要とせずに開始できるようにしています。今後数週間で、現在利用可能な最もコスト効率が高く有能なロボットに対する現実世界のロボット工学のサポートを拡充する予定です。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube動画プレーヤー" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクト紹介

SO-ARM10xとreComputer Jetson AIインテリジェントロボットキットは、高精度なロボットアーム制御と強力なAIコンピューティングプラットフォームをシームレスに組み合わせ、包括的なロボット開発ソリューションを提供します。このキットは、Jetson OrinまたはAGX Orinプラットフォームを基盤とし、SO-ARM10xロボットアームとLeRobot AIフレームワークを組み合わせて、教育、研究、産業オートメーションなどの複数のシナリオに適用可能なインテリジェントロボットシステムをユーザーに提供します。このウィキでは、SO ARM10xの組み立てとデバッグのチュートリアルを提供し、Lerobotフレームワーク内でのデータ収集とトレーニングを実現します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
</a></div>

## 主な特徴

1. **オープンソースで低コスト**: [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100)によるオープンソースで低コストのロボットアームソリューションです。
2. **LeRobotとの統合**: [LeRobotプラットフォーム](https://github.com/huggingface/lerobot)との統合を目的としています。
3. **豊富な学習リソース**: 組み立てとキャリブレーションガイド、テスト、データ収集、トレーニング、デプロイメントのチュートリアルなど、包括的なオープンソース学習リソースを提供し、ユーザーが迅速に開始し、ロボットアプリケーションを開発できるよう支援します。
4. **Nvidiaとの互換性**: reComputer Mini J4012 Orin NX 16 GBとともにこのアームキットをデプロイ可能です。
5. **多シーン適用**: 教育、科学研究、自動化生産、ロボット工学などの分野に適用可能で、さまざまな複雑なタスクにおいて効率的かつ正確なロボット操作を実現します。

## 新機能：
- 配線の最適化：SO-ARM100と比較して、SO-ARM101は配線が改良されており、以前ジョイント3で見られた断線問題を防止します。新しい配線設計により、ジョイントの可動範囲が制限されることもなくなりました。
- リーダーアームの異なるギア比：リーダーアームは最適化されたギア比を持つモーターを使用するようになり、性能が向上し、外部ギアボックスが不要になりました。
- 新機能のサポート：リーダーアームはリアルタイムでフォロワーアームを追従できるようになり、これにより、今後の学習ポリシーで人間が介入してロボットの動作を修正することが可能になります。

:::caution

Seeed Studioはハードウェア自体の品質にのみ責任を負います。チュートリアルは公式ドキュメントに厳密に基づいて更新されています。ソフトウェアの問題や環境依存性の問題が解決できない場合、このチュートリアルの最後にあるFAQセクションを確認するほか、[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)または[LeRobot Discordチャンネル](https://discord.gg/8TnwDdjFGU)に問題を速やかに報告してください。

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
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">アームキットプロ</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">アームキット</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">アームキットプロ</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>リーダーアーム</td>
      <td rowSpan="2">12x ST-3215-C001 (7.4V) モーター、全ジョイントで1:345ギア比</td>
      <td rowSpan="2">12x ST-3215-C018/ST-3215-C047 (12V) モーター、全ジョイントで1:345ギア比</td>
      <td colSpan="2">
        1x ST-3215-C001 (7.4V) モーター、ジョイント2のみ1:345ギア比<br />
        2x ST-3215-C044 (7.4V) モーター、ジョイント1および3で1:191ギア比<br />
        3x ST-3215-C046 (7.4V) モーター、ジョイント4、5、グリッパー（ジョイント6）で1:147ギア比
      </td>
    </tr>
    <tr>
      <td>フォロワーアーム</td>
      <td colSpan="2">SO-ARM100と同じ</td>
    </tr>
    <tr>
      <td>電源</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm × 2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm × 2.1 mm DC 12 V 2 A（リーダーアーム）<br />
        5.5 mm × 2.1 mm DC 5 V 4 A（フォロワーアーム）
      </td>
    </tr>
    <tr>
      <td>角度センサー</td>
      <td colSpan="4">12ビット磁気エンコーダー</td>
    </tr>
    <tr>
      <td>推奨動作温度</td>
      <td colSpan="4">0 °C ～ 40 °C</td>
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

アームキットバージョンを購入した場合、両方の電源は5Vです。アームキットプロバージョンを購入した場合、リーダーロボットアームのキャリブレーションおよびすべてのステップには5V電源を使用し、フォロワーロボットアームのキャリブレーションおよびすべてのステップには12V電源を使用してください。

:::

## 部品表 (BOM)

| 部品 | 数量 | 含まれる |
|--|--|--|
| サーボモーター | 12 | ✅ |
| モーター制御ボード | 2 | ✅ |
| USB-C ケーブル 2本 | 1 | ✅ |
| 電源供給装置 | 2 | ✅ |
| テーブルクランプ | 4 | ✅ |
| アームの3Dプリント部品 | 1 | オプション |

## 初期システム環境

**Ubuntu x86の場合:**
- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**Jetson Orinの場合:**
- Jetson JetPack 6.2  
- Python 3.10  
- Torch 2.6  

## 目次
  [A. 3Dプリントガイド](https://wiki.seeedstudio.com/ja/lerobot_so100m/#install-lerobot)

  [B. LeRobotのインストール](https://wiki.seeedstudio.com/ja/lerobot_so100m/#install-lerobot)

  [C. モーターの設定](https://wiki.seeedstudio.com/ja/lerobot_so100m/#configure-the-motors)

  [D. 組み立て](https://wiki.seeedstudio.com/ja/lerobot_so100m/#assembly)

  [E. キャリブレーション](https://wiki.seeedstudio.com/ja/lerobot_so100m/#calibrate)

  [F. 遠隔操作](https://wiki.seeedstudio.com/ja/lerobot_so100m/#teleoperate)

  [G. カメラの追加](https://wiki.seeedstudio.com/ja/lerobot_so100m/#add-cameras)

  [H. データセットの記録](https://wiki.seeedstudio.com/ja/lerobot_so100m/#record-the-dataset)

  [I. データセットの可視化](https://wiki.seeedstudio.com/ja/lerobot_so100m/#visualize-the-dataset)

  [J. エピソードの再生](https://wiki.seeedstudio.com/ja/lerobot_so100m/#replay-an-episode)

  [K. ポリシーのトレーニング](https://wiki.seeedstudio.com/ja/lerobot_so100m/#train-a-policy)

  [L. ポリシーの評価](https://wiki.seeedstudio.com/ja/lerobot_so100m/#evaluate-your-policy)

## 3Dプリントガイド

:::注意
SO101の公式アップデートに伴い、SO100は今後サポートされず、公式によりソースファイルが削除されます。ただし、ソースファイルは引き続き[Makerworld](https://makerworld.com/zh/models/908660)で見つけることができます。以前にSO100を購入したユーザーに対しては、チュートリアルとインストール方法は引き続き互換性があります。SO101のプリントはSO100のモーターキットインストールと完全に互換性があります。
:::

### ステップ1: プリンターを選ぶ

提供されているSTLファイルは、多くのFDMプリンターで印刷可能です。以下はテスト済みの推奨設定ですが、他の設定でも動作する場合があります。
- 材料: PLA+  
- ノズル径と精度: 0.4mmノズル径で0.2mm層高さ、または0.6mmノズルで0.4mm層高さ。  
- 充填密度: 15%  

### ステップ2: プリンターのセットアップ

- プリンターがキャリブレーションされており、ベッドレベルが正しく設定されていることを確認してください（プリンター固有の指示に従ってください）。
- プリントベッドを清掃し、ほこりや油分がないことを確認してください。水やその他の液体でベッドを清掃する場合は、乾燥させてください。
- プリンターが推奨する場合は、標準的なスティック型接着剤を使用し、ベッドのプリントエリア全体に薄く均一に塗布してください。塊や不均一な塗布を避けてください。
- プリンターフィラメントをプリンター固有の指示に従ってロードしてください。
- プリンター設定が上記の推奨設定に一致していることを確認してください（ほとんどのプリンターには複数の設定があるため、最も近いものを選択してください）。
- サポートを「すべての場所」に設定し、水平から45度以上の傾斜を無視してください。
- 水平方向の軸を持つネジ穴にはサポートがないようにしてください。

### ステップ3: 部品を印刷する

リーダーまたはフォロワーのすべての部品は、簡単に3Dプリントできるように1つのファイルに含まれており、サポートを最小限に抑えるためにz軸方向に正しく配置されています。

- プリンターベッドサイズが220mm x 220mmの場合（例: Ender）、以下のファイルを印刷してください:
  - [フォロワー](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [リーダー](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- プリンターベッドサイズが205mm x 250mmの場合（例: Prusa/Up）、以下のファイルを印刷してください:
  - [フォロワー](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [リーダー](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## LeRobot のインストール

CUDA に基づいて pytorch と torchvision の環境をインストールする必要があります。
1. Miniconda をインストール:
Jetson 用:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

または、X86 Ubuntu 22.04 用:
```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. lerobot 用の新しい conda 環境を作成してアクティブ化:

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Lerobot をクローン:

```bash
git clone https://github.com/ZhuYaoHui1998/lerobot.git ~/lerobot
```

**Orbbec Gemini2 深度カメラを適応させた結果、1 台の深度カメラが 2 台の RGB カメラよりも優れていることがわかりました。このカメラを使用する場合は、Orbbec 用の変換リポジトリブランチをクローンし、後続の手順に従ってカメラを設定してください。**

```bash  
cd ~/lerobot  
git checkout orbbec  
```  

**RGB のみを使用する場合は、ブランチを切り替えないでください。そうしないと、依存関係に関連するエラーが発生する可能性があります。すでに `orbbec` に切り替えた場合、元のバージョンに戻すには以下を実行してください:**

```bash  
cd ~/lerobot  
git checkout main  
```

4. Miniconda を使用する場合、環境に ffmpeg をインストール:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
通常、これは libsvtav1 エンコーダーでコンパイルされたプラットフォーム用の ffmpeg 7.X をインストールします。libsvtav1 がサポートされていない場合（`ffmpeg -encoders` でサポートされているエンコーダーを確認）、以下を試してください:
- [任意のプラットフォームで] 明示的に ffmpeg 7.X をインストール:
```bash
conda install ffmpeg=7.1.1 -c conda-forge
```
- [Linux のみ] ffmpeg のビルド依存関係をインストールし、libsvtav1 を含むようにソースから ffmpeg をコンパイルし、インストールした ffmpeg バイナリを使用していることを確認してください（`which ffmpeg` を使用）。

:::

5. feetech モーター用の依存関係を含む LeRobot をインストール:

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

Jetson Jetpack デバイス用（[Pytorch-gpu と Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) をステップ 5 からインストールしてからこのステップを実行してください）:

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # OpenCV およびその他の依存関係を conda 経由でインストール、このステップは Jetson Jetpack 6.0+ のみ対象
conda remove opencv   # OpenCV をアンインストール
pip3 install opencv-python==4.10.0.84  # その後、pip3 を使用して opencv-python をインストール
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # これが torchvision と一致する必要があります
```

6. Pytorch と Torchvision を確認

lerobot 環境を pip 経由でインストールすると、元の Pytorch と Torchvision がアンインストールされ、CPU バージョンの Pytorch と Torchvision がインストールされるため、Python で確認を行う必要があります。

```python
import torch
print(torch.cuda.is_available())
```

出力結果が False の場合、[公式ウェブサイトのチュートリアル](https://pytorch.org/index.html) に従って Pytorch と Torchvision を再インストールする必要があります。

Jetson デバイスを使用している場合は、[このチュートリアル](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) に従って Pytorch と Torchvision をインストールしてください。

## モーターの設定

:::danger  
公式コードおよびサーボメーカーのファームウェア更新により、2025年5月30日以前のユーザーは、まず[Feetech公式ホストコンピュータソフトウェア](https://gitee.com/ftservo/fddebug/blob/master/FD1.9.8.5(250425).zip)（Windowsシステム用）をダウンロードしてください。電源を入れてすべてのサーボを接続し、対応する`ポート番号` -> `ボーレート 1000000` -> `開く` -> `検索`を選択します。すべてのサーボが検出されたら、`アップグレード` -> `オンライン検出` -> `ファームウェアアップグレード`をクリックして、ファームウェアバージョンを3.9から3.10に更新し、後続の問題を回避してください。  
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>


<TabItem value="SO101" label="SO101">


SO-ARM101のサーボキャリブレーションおよび初期化プロセスは、方法とコードの両方においてSO-ARM100と同じです。ただし、SO-ARM101リーダーアームの最初の3つの関節のギア比はSO-ARM100とは異なるため、注意深く区別してキャリブレーションを行う必要があります。

モーターを設定するには、1つのバスサーボアダプターと6つのモーターをリーダーアーム用に指定し、同様にもう1つのバスサーボアダプターと6つのモーターをフォロワーアーム用に指定します。それぞれのモーターにラベルを付け、フォロワー用（F）またはリーダー用（L）であることと、ID（1から6）を書き込むと便利です。**F1–F6**は**フォロワーアーム**の関節1から6を表し、**L1–L6**は**リーダーアーム**の関節1から6を表します。対応するサーボモデル、関節の割り当て、およびギア比の詳細は以下の通りです：

| サーボモデル                            | ギア比     | 対応する関節                  |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
5Vまたは12Vの電源をモーターバスに接続してください。ST-3215 7.4Vモーターには5V、ST-3215 12Vモーターには12Vを使用します。リーダーアームは常に7.4Vモーターを使用するため、12Vと7.4Vモーターが混在している場合は、正しい電源を接続しないとモーターが焼損する可能性があります！次に、モーターバスをUSB経由でコンピュータに接続します。USBは電源を供給しないため、電源とUSBの両方を接続する必要があります。
:::

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>


:::danger
リーダーモーター（ST-3215-C046、C044、001）のキャリブレーションには5V電源を使用してください。
:::

| **リーダーアーム関節1キャリブレーション** | **リーダーアーム関節2キャリブレーション** | **リーダーアーム関節3キャリブレーション** | **リーダーアーム関節4キャリブレーション** | **リーダーアーム関節5キャリブレーション** | **リーダーアーム関節6キャリブレーション** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) |


:::danger
アームキットバージョン（ST-3215-C001）を購入した場合は5V電源を使用してください。アームキットプロバージョンを購入した場合は、12V電源を使用してサーボ（ST-3215-C047/ST-3215-C018）をキャリブレーションしてください。
:::

| **フォロワーアーム関節1キャリブレーション** | **フォロワーアーム関節2キャリブレーション** | **フォロワーアーム関節3キャリブレーション** | **フォロワーアーム関節4キャリブレーション** | **フォロワーアーム関節5キャリブレーション** | **フォロワーアーム関節6キャリブレーション** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) |

SO-ARM100のサーボキャリブレーションビデオも参照できますが、サーボ関節IDとギア比がSO-ARM101に厳密に対応していることを確認してください。

**アームに関連するUSBポートを見つける**
各アームの正しいポートを見つけるには、ユーティリティスクリプトを2回実行します：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

リーダーアームのポートを識別する際の例（例：Macでは`/dev/tty.usbmodem575E0031751`、Linuxではおそらく`/dev/ttyACM0`）：

フォロワーアームのポートを識別する際の例（例：`/dev/tty.usbmodem575E0032081`、またはLinuxではおそらく`/dev/ttyACM1`）：

トラブルシューティング：Linuxでは、以下を実行してUSBポートへのアクセス権を付与する必要がある場合があります：

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**モーターを設定する**

最初のモーターを接続し、このスクリプトを実行してIDを1に設定します。これにより現在の位置が2048に設定されるため、モーターが回転することを予期してください：

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

注意: これらのモーターは現在制限されています。値は0から4096の範囲内でのみ設定可能で、これは1回転に相当します。それ以上回転することはできません。2048はこの範囲の中央に位置しているため、-2048ステップ（反時計回りに180度）で最大範囲に到達するか、+2048ステップ（時計回りに180度）で最大範囲に到達することができます。設定ステップではホーミングオフセットも0に設定されるため、アームを誤って組み立てた場合でも、ホーミングオフセットを更新して±2048ステップ（±180度）の範囲内で調整することが可能です。

次に、モーターを取り外し、2番目のモーターを接続してIDを2に設定します。

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

このプロセスをすべてのモーターに対して繰り返し、IDを6まで設定します。リーダーアームの6つのモーターについても同様に行います。
</TabItem>

<TabItem value="SO100" label="SO100">

リーダーアーム用に1つのバスサーボアダプターと6つのモーターを指定し、同様にフォロワーアーム用にもう1つのバスサーボアダプターと6つのモーターを指定します。各モーターにラベルを付け、フォロワー用（F）またはリーダー用（L）であることと、ID（1から6）を記入すると便利です（例: F1...F6およびL1...L6）。

以下のスクリプトを使用する手順を示した[組み立て動画](https://www.youtube.com/watch?v=FioA2oeFZ5I)のステップ1に従ってください。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/FioA2oeFZ5I?si=GjudmAovwF_X5m2f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

**アームに関連するUSBポートを見つける**
各アームの正しいポートを見つけるために、ユーティリティスクリプトを2回実行します:

```bash
python lerobot/scripts/find_motors_bus_port.py
```

リーダーアームのポートを識別する際の例（例: Macでは`/dev/tty.usbmodem575E0031751`、Linuxではおそらく`/dev/ttyACM0`）:

フォロワーアームのポートを識別する際の例（例: `/dev/tty.usbmodem575E0032081`、またはLinuxではおそらく`/dev/ttyACM1`）:

トラブルシューティング: Linuxでは、以下を実行してUSBポートへのアクセス権を付与する必要がある場合があります:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**モーターを設定する**

最初のモーターを接続し、このスクリプトを実行してIDを1に設定します。これにより現在の位置が2048に設定されるため、モーターが回転することを期待してください:

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

:::note
注意: これらのモーターは現在制限されています。値は0から4096の範囲内でのみ設定可能で、これは1回転に相当します。それ以上回転することはできません。2048はこの範囲の中央に位置しているため、-2048ステップ（反時計回りに180度）で最大範囲に到達するか、+2048ステップ（時計回りに180度）で最大範囲に到達することができます。設定ステップではホーミングオフセットも0に設定されるため、アームを誤って組み立てた場合でも、ホーミングオフセットを更新して±2048ステップ（±180度）の範囲内で調整することが可能です。
:::

次に、モーターを取り外し、2番目のモーターを接続してIDを2に設定します。

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

このプロセスをすべてのモーターに対して繰り返し、IDを6まで設定します。リーダーアームの6つのモーターについても同様に行います。
</TabItem>
</Tabs>

## 組み立て

:::tip
- SO-ARM101のデュアルアーム組み立てプロセスはSO-ARM100と同じです。唯一の違いは、SO-ARM101にケーブルクリップが追加されていることと、リーダーアームのジョイントサーボのギア比が異なることです。そのため、SO100とSO101の両方を以下の内容を参考にして取り付けることができます。
- サーボをキャリブレーションした後、ネジを締める前に回転させないでください。3Dプリント部品の向きが画像の参照方向と一致していること、モーターが中央位置にあることを確認してください。

- 組み立て前に、モーターのモデルと減速比を再度確認してください。SO100を購入した場合、このステップを無視して構いません。SO101を購入した場合、以下の表を確認してF1からF6およびL1からL6を区別してください。
:::

| サーボモデル                            | ギア比     | 対応するジョイント           |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
**SO101 Arm Kit Standard Edition**を購入した場合、すべての電源は5Vです。**SO101 Arm Kit Pro Edition**を購入した場合、リーダーアームは各ステップで5V電源を使用してキャリブレーションおよび操作を行い、フォロワーアームは各ステップで12V電源を使用してキャリブレーションおよび操作を行う必要があります。
:::

**リーダーアームの組み立て**

| **ステップ1** | **ステップ2** | **ステップ3** | **ステップ4** | **ステップ5** | **ステップ6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **ステップ7** | **ステップ8** | **ステップ9** | **ステップ10** | **ステップ11** | **ステップ12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **ステップ13** | **ステップ14** | **ステップ15** | **ステップ16** | **ステップ17** | **ステップ18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **ステップ19** | **ステップ20** | 
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**フォロワーアームの組み立て**

:::tip
- フォロワーアームの組み立て手順は、リーダーアームの手順とほぼ同じです。唯一の違いは、ステップ12以降のエンドエフェクター（グリッパーとハンドル）の取り付け方法です。
:::

| **ステップ1** | **ステップ2** | **ステップ3** | **ステップ4** | **ステップ5** | **ステップ6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **ステップ7** | **ステップ8** | **ステップ9** | **ステップ10** | **ステップ11** | **ステップ12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **ステップ13** | **ステップ14** | **ステップ15** | **ステップ16** | **ステップ17** | 
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

## キャリブレーション

:::tip
SO100 と SO101 のコードは互換性があります。SO100 のユーザーは、SO101 のパラメータとコードを直接利用して操作できます。
:::

:::danger
**SO101 Arm Kit Standard Edition** を購入した場合、すべての電源は 5V です。**SO101 Arm Kit Pro Edition** を購入した場合、Leader Arm はすべてのステップで 5V 電源を使用してキャリブレーションと操作を行い、Follower Arm はすべてのステップで 12V 電源を使用してキャリブレーションと操作を行う必要があります。
:::

次に、SO-10x ロボットに電源とデータケーブルを接続してキャリブレーションを行います。同じ物理位置にある場合に、Leader Arm と Follower Arm が同じ位置値を持つようにする必要があります。このキャリブレーションは、1つの SO-10x ロボットで訓練されたニューラルネットワークが別のロボットでも動作するようにするために重要です。ロボットアームを再キャリブレーションする必要がある場合は、`~/lerobot/.cache/huggingface/calibration/so101` フォルダを削除してください。

**Follower Arm の手動キャリブレーション**

重要: ポートが判明したら、[SO101RobotConfig](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/robots/configs.py) (`lerobot/lerobot/common/robot_devices/robots/configs.py`) のポートのデフォルト値を更新してください。以下のような記述が見つかります：

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    # `max_relative_target` は安全のために相対位置ターゲットベクトルの大きさを制限します。
    # すべてのモーターに同じ値を設定するには正のスカラーを設定し、Follower Arm のモーター数と同じ長さのリストを設定することもできます。
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/ttyACM0",  <-- ここを更新
                motors={
                    # 名前: (インデックス, モデル)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev//dev/ttyACM1",  <-- ここを更新
                motors={
                    # 名前: (インデックス, モデル)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )
```

<details>

<summary>デュアルアーム遠隔操作 (オプション)</summary>

デュアルアーム遠隔操作を実装したい場合、Leader ロボットアームが 2 台、Follower ロボットアームが 2 台必要です。そのため、`leader_arms dict` と `follower_arms dict` にロボットアームのクラス名と対応するポート番号を追加する必要があります。例：

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    # `max_relative_target` は安全のために相対位置ターゲットベクトルの大きさを制限します。
    # すべてのモーターに同じ値を設定するには正のスカラーを設定し、Follower Arm のモーター数と同じ長さのリストを設定することもできます。
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "left": FeetechMotorsBusConfig(
                port="/dev/ttyACM0",  <-- ここを更新
                motors={
                    # 名前: (インデックス, モデル)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
            "right": FeetechMotorsBusConfig(
                port="/dev/ttyACM1",  <-- ここを更新
                motors={
                    # 名前: (インデックス, モデル)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "left": FeetechMotorsBusConfig(
                port="/dev//dev/ttyACM2",  <-- ここを更新
                motors={
                    # 名前: (インデックス, モデル)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
            "right": FeetechMotorsBusConfig(
                port="/dev//dev/ttyACM3",  <-- ここを更新
                motors={
                    # 名前: (インデックス, モデル)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )
```

:::caution
デュアルアームの左と右の名前を正しく一致させ、各ロボットアームのデバイス上のシリアルポート番号が正しく割り当てられていることを確認してください。
:::

次のステップでは、ロボットアームをキャリブレーションする際に、4つのアームを個別にキャリブレーションする必要があります。コマンドは以下の通りです：

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["left_follower"]'
  #  --control.arms='["right_follower"]'
  #  --control.arms='["left_leader"]'
  #  --control.arms='["right_leader"]'
```

キャリブレーションが完了した後、結果を `.cache/calibration/so101` ディレクトリで確認できます。
```bash
`-- calibration
    `-- so101
        |-- left_follower.json
        |-- left_leader.json
        |-- right_follower.json
        `-- right_leader.json
```

その後の手順は、単一アームのセットアップと同じです。

</details>

```bash
sudo chmod 666 /dev/ttyACM*
```

**フォロワーアームの手動キャリブレーション**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_follower"]'
```

**リーダーアームの手動キャリブレーション**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_leader"]'
```

| **フォロワー中央位置** | **フォロワーゼロ位置** | **フォロワー回転位置** | **フォロワー休止位置** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig7](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_middle.webp) | ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_zero.webp) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rotated.webp) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rest.webp) |
| **リーダー中央位置** | **リーダーゼロ位置** | **リーダー回転位置** | **リーダー休止位置** |
| ![fig8](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_middle.webp) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_zero.webp) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rotated.webp) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rest.webp) |

## 遠隔操作

**簡易遠隔操作**
これでロボットを遠隔操作する準備が整いました！以下の簡易スクリプトを実行してください（カメラの接続や表示は行いません）：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## カメラの追加

:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

2つのUSBカメラを挿入した後、以下のスクリプトを実行してカメラのポート番号を確認してください。カメラはUSBハブに接続せず、デバイスに直接接続する必要があります。USBハブの速度が遅い場合、画像データを読み取れない可能性があります。

```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

ターミナルには以下の情報が表示されます。

```markdown
MacまたはX86 Ubuntuが検出されました。0から60までのすべてのインデックスをスキャンして利用可能なカメラインデックスを検索します
[...]
カメラがインデックス2で見つかりました
カメラがインデックス4で見つかりました
[...]
カメラを接続中
OpenCVCamera(2, fps=30.0, width=640, height=480, color_mode=rgb)
OpenCVCamera(4, fps=30.0, width=640, height=480, color_mode=rgb)
画像をoutputs/images_from_opencv_camerasに保存中
フレーム: 0000 レイテンシー (ms): 39.52
[...]
フレーム: 0046 レイテンシー (ms): 40.07
画像がoutputs/images_from_opencv_camerasに保存されました
```

各カメラで撮影された写真は `outputs/images_from_opencv_cameras` ディレクトリに保存され、異なる位置に対応するカメラのポートインデックス情報を確認できます。その後、`lerobot/lerobot/common/robot_devices/robots/configs.py` ファイルでカメラパラメータの整合性を完了してください。

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "laptop": OpenCVCameraConfig(
                camera_index=0,             ##### ここを更新
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=1,             ##### ここを更新
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

    mock: bool = False
  
```

<details>

<summary> 2台以上の追加カメラを追加する (オプション) </summary>
さらにカメラを追加したい場合は、USB入力が許す限り、カメラ辞書に異なるカメラ名と `camera_index` 値を追加できます。ただし、カメラにUSBハブを使用することは推奨されません。

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "laptop": OpenCVCameraConfig(
                camera_index=0,             ##### ここを更新
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=1,             ##### ここを更新
                fps=30,
                width=640,
                height=480,
            ),
            "new_camera": OpenCVCameraConfig( ##### ここを更新
                camera_index=3,             ##### ここを更新
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

    mock: bool = False

```

</details>

<details>

<summary>単一の Orbbec Gemini 2 Depth Camera を使用する</summary>

:::tip
このプロジェクトは Orbbec の貴重な指導のもとで開始され、華南師範大学の Jiaquan Zhang、Wenzhao Wang、Jinpeng Huang によって実装されました。このプロジェクトでは、Orbbec カメラを使用して lerobot フレームワーク内で深度データを収集し、ロボットアームの環境認識を強化することができます。
すでに Orbbec Gemini2 深度カメラをお持ちの場合、現在のテスト構成では深度カメラを前方上部に配置しています。以下のインストール手順に従ってください。
:::

**Gemini 2 Depth Camera Python SDK のインストールとコンパイル**

1. pyOrbbecsdk をクローンする

```bash
cd ~/
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
```

2. 依存関係をインストールし、pyOrbbecsdk をコンパイルする

```bash
conda activate lerobot
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv
pip3 install -r requirements.txt
mkdir build
cd build
cmake -Dpybind11_DIR=`pybind11-config --cmakedir` ..
make -j4
make install
```

3. 深度カメラが正常に動作するかテストする
```bash
cd ~/pyorbbecsdk 
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
python3 examples/depth.py
```

ただし、新しいターミナルを開くたびにこれらのコマンドを再実行する必要があります：
```bash
cd ~/pyorbbecsdk 
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

以下を `.bashrc` ファイルの末尾に追加することもできます：
```bash
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ~/pyorbbecsdk/scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```
これにより、ターミナルを起動する際に深度カメラ環境が自動的にロードされます。

Orbbec 深度カメラを接続した後、以下のスクリプトを実行して深度データストリームとカラーデータストリームを確認してください。2つのウィンドウがポップアップし、カメラの位置を調整できます。終了するにはターミナルで Ctrl+C を使用してください。重要：カメラはデバイスに直接接続する必要があり、USBハブを介して接続してはいけません。ハブの帯域幅が画像データの送信には遅すぎる可能性があります。

```bash
cd ~/lerobot
python lerobot/common/robot_devices/OrbbecCamera.py
```

カメラを調整した後、設定ファイル `lerobot/lerobot/common/robot_devices/robots/configs.py` 内のカメラパラメータを調整してください。

```python
@RobotConfig.register_subclass("so101")  # so100 にも対応
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "laptop": OpenCVCameraConfig(
                camera_index=0,            
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(    # 通常のカメラ、Orbbec カメラにも対応
                camera_index=1,             
                fps=30,
                width=640,
                height=480,
            ),
            "Orbbec":OrbbecCameraConfig(    # Orbbec カメラの設定をここに追加
                fps=30,
                use_depth=True              # 深度を使用するかどうか
                width = 640                 # 解像度は幅に自動適応。640 または 1280（未テスト）のみ有効
                Hi_resolution_mode = False  # 高解像度モード（視覚化品質を低下させる可能性がありますが、深度データの解像度を向上させます）
            ),

        }
    )

    mock: bool = False
```

</details>



次に、以下のコードを実行することで、遠隔操作中にコンピュータ上でカメラを表示できるようになります。これは、最初のデータセットを記録する前にセットアップを準備するのに役立ちます。

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=teleoperate \
  --control.display_data=true
```



<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## データセットの記録
:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

テレオペレーションに慣れたら、SO-10xを使って最初のデータセットを記録できます。

Hugging Face Hubの機能を使用してデータセットをアップロードしたい場合、以前に行っていない場合は、[Hugging Face設定](https://huggingface.co/settings/tokens)から生成できる書き込みアクセス用のトークンを使用してログインしておく必要があります：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

以下のコマンドを実行するために、Hugging Faceリポジトリ名を変数に保存します：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

2つのエピソードを記録し、データセットをHubにアップロードします：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="レゴブロックを掴んでゴミ箱に入れる。" \
  --control.repo_id=${HF_USER}/so101_test \
  --control.tags='["so101","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=2 \
  --control.display_data=true \
  --control.push_to_hub=true
```

以下のような多くの行が表示されます：
```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**パラメータの説明**
- `warmup-time-s`: 初期化時間を指します。
- `episode-time-s`: 各データ収集の時間を表します。
- `reset-time-s`: 各データ収集間の準備時間を指します。
- `num-episodes`: 収集するデータのグループ数を示します。
- `push-to-hub`: データをHugging Face Hubにアップロードするかどうかを決定します。

:::tip

- 「データをローカルに保存したい場合（`--control.push_to_hub=false`）、`--control.repo_id=${HF_USER}/so101_test`をカスタムローカルフォルダ名（例：`--control.repo_id=seeed_123/so101_test`）に置き換えてください。これにより、システムのホームディレクトリ`~/.cache/huggingface/lerobot`に保存されます。」

- `--control.push_to_hub=true`でデータセットをHubにアップロードした場合、[オンラインでデータセットを可視化](https://huggingface.co/spaces/lerobot/visualize_dataset)できます。リポジトリIDをコピーして貼り付けてください。

- エピソード記録中に右矢印キー（→）を押すと、早期停止してリセットに進むことができます。同様に、リセット中に右矢印キーを押すと、早期停止して次のエピソード記録に進みます。

- エピソード記録またはリセット中に左矢印キー（←）を押すと、早期停止して現在のエピソードをキャンセルし、再記録を行います。

- エピソード記録中にESCキーを押すと、セッションを早期終了し、ビデオエンコードとデータセットアップロードに直接進みます。

- 記録を再開するには、`--control.resume=true`を追加してください。また、データセットをまだアップロードしていない場合は、`--control.local_files_only=true`を追加してください。最初から記録をやり直したい場合は、データセットディレクトリを手動で削除する必要があります。

- データ記録に慣れたら、トレーニング用の大規模なデータセットを作成できます。良い開始タスクは、異なる場所でオブジェクトを掴み、ゴミ箱に置くことです。少なくとも50エピソードを記録することをお勧めします。各場所で10エピソードを記録してください。カメラを固定し、記録中は一貫した掴み動作を維持してください。また、操作しているオブジェクトがカメラに映るようにしてください。目安として、カメラ画像だけを見てタスクを自分で実行できる必要があります。

- 次のセクションでは、ニューラルネットワークをトレーニングします。掴み動作が安定したパフォーマンスを達成したら、データ収集中にさらなるバリエーションを導入し始めることができます。例えば、追加の掴み場所、異なる掴み技術、カメラ位置の変更などです。

- ただし、バリエーションを急激に増やしすぎると、結果が悪化する可能性があるため注意してください。

- Linuxでは、データ記録中に左矢印キー、右矢印キー、ESCキーが機能しない場合、`$DISPLAY`環境変数が設定されていることを確認してください。[pynputの制限事項](https://pynput.readthedocs.io/en/latest/limitations.html#linux)を参照してください。

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

もし`--control.push_to_hub=false`を使用せずにアップロードした場合、以下のコマンドでローカルで可視化することもできます：

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id ${HF_USER}/so101_test \
```

もし`--control.push_to_hub=false`を使用してアップロードした場合、以下のコマンドでローカルで可視化することもできます：

```bash
python lerobot/scripts/visualize_dataset_html.py \
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

次に、ロボットで最初のエピソードを再生してみましょう：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=${HF_USER}/so101_test \
  --control.episode=0
```

注意: まだデータセットをプッシュしていない場合は、`--control.local_files_only=true`を追加してください。

## ポリシーのトレーニング
:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

ロボットを制御するポリシーをトレーニングするには、`python lerobot/scripts/train.py`スクリプトを使用します。いくつかの引数が必要です。以下はコマンドの例です：

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=true
```

**ローカルデータセットでトレーニングしたい場合は、データ収集時に使用した`repo_id`と一致していることを確認してください。**

以下に説明します：

1. `--dataset.repo_id=${HF_USER}/so101_test`でデータセットを引数として提供しました。
2. `policy.type=act`を使用してポリシーを指定しました。これにより、[`lerobot/lerobot/common/policies/act/configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/policies/act/configuration_act.py)から設定がロードされます。現在、ACTがテストされていますが、diffusion、pi0、pi0fast、tdmpc、vqbetなどの他のポリシーも試すことができます。
3. `policy.device=cuda`を指定しました。これはNvidia GPUでトレーニングするためですが、Appleシリコンでトレーニングする場合は`policy.device=mps`を使用できます。
4. `wandb.enable=true`を指定して、[Weights and Biases](https://docs.wandb.ai/quickstart)を使用してトレーニングプロットを可視化します。これはオプションですが、使用する場合は`wandb login`を実行してログインしていることを確認してください。

トレーニングには数時間かかるはずです。チェックポイントは`outputs/train/act_so100_test/checkpoints`に保存されます。

トレーニングをチェックポイントから再開するには、以下のコマンドを使用してact_so101_testポリシーの最後のチェックポイントから再開できます：
```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**ポリシーチェックポイントのアップロード**
トレーニングが完了したら、以下のコマンドで最新のチェックポイントをアップロードします：
```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

## ポリシーの評価
:::tip
SO100とSO101のコードは互換性があります。SO100のユーザーは、SO101のパラメータとコードを直接利用して操作できます。
:::

`lerobot/scripts/control_robot.py`から[`record`関数](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py)を使用して、ポリシーチェックポイントを入力として評価を行うことができます。例えば、以下のコマンドを実行して10回の評価エピソードを記録します：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="レゴブロックを掴んでゴミ箱に入れる。" \
  --control.repo_id=${HF_USER}/eval_act_so101_test \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=10 \
  --control.push_to_hub=true \
  --control.policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

ご覧の通り、これはトレーニングデータセットを記録するために以前使用したコマンドとほぼ同じです。変更点は2つあります：

1. `--control.policy.path`引数が追加されており、ポリシーチェックポイントのパスを指定します（例：`outputs/train/eval_act_so100_test/checkpoints/last/pretrained_model`）。また、モデルチェックポイントをHubにアップロードした場合は、モデルリポジトリを使用することもできます（例：`${HF_USER}/act_so100_test`）。
2. データセットの名前が`eval`で始まるようになり、推論を実行していることを反映しています（例：`${HF_USER}/eval_act_so100_test`）。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

- このドキュメント/チュートリアルに従っている場合は、推奨されるGitHubリポジトリ`https://github.com/ZhuYaoHui1998/lerobot.git`をクローンしてください。このドキュメントで推奨されているリポジトリは安定したバージョンであり、公式のLerobotリポジトリは最新バージョンに継続的に更新されているため、異なるデータセットバージョンやコマンドの違いなど、予期しない問題が発生する可能性があります。

- 以下のエラーが発生した場合は、対応するポートに接続されたロボットアームが電源オンになっているか、バスサーボのケーブルが緩んでいないか、または切断されていないかを確認してください。
  ```bash
  ConnectionError: Read failed due to comunication eror on port /dev/ttyACM0 for group key Present_Position_Shoulder_pan_Shoulder_lift_elbow_flex_wrist_flex_wrist_roll_griper: [TxRxResult] There is no status packet!
  ```

- ロボットアームの部品を修理または交換した場合は、`~/lerobot/.cache/huggingface/calibration/so100`フォルダを完全に削除し、ロボットアームを再キャリブレーションしてください。

- リモートコントロールが正常に動作するが、カメラ付きリモートコントロールで画像インターフェースが表示されない場合は、[こちら](https://github.com/huggingface/lerobot/pull/757/files)を参照してください。

- データセットのリモート操作中にlibtiffの問題が発生した場合は、libtiffのバージョンを更新してください。
  ```bash
  conda install libtiff==4.5.0  # Ubuntu 22.04の場合はlibtiff==4.5.1
  ```

- [Lerobotのインストール](https://wiki.seeedstudio.com/ja/lerobot_so100m/#install-lerobot)を実行した後、GPUバージョンのpytorchが自動的にアンインストールされる可能性があるため、手動でtorch-gpuをインストールする必要があります。

- Jetsonの場合、`conda install -y -c conda-forge ffmpeg`を実行する前に、まず[PytorchとTorchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)をインストールしてください。そうしないと、torchvisionのコンパイル時にffmpegのバージョン不一致の問題が発生する可能性があります。

- 以下の問題が発生した場合、コンピュータがこのビデオコーデック形式をサポートしていないことを意味します。`lerobot/lerobot/common/datasets/video_utils.py`ファイルの134行目で`vcodec: str = "libsvtav1"`の値を`libx264`または`libopenh264`に変更してください。異なるコンピュータでは異なるパラメータが必要な場合があるため、さまざまなオプションを試してください。[Issues 705](https://github.com/huggingface/lerobot/issues/705)
  
  ```bash
  [vost#0:0 @ 0x13207240] Unknown encoder 'libsvtav1' [vost#0:0 @ 0x13207240] Error selecting an encoder Error opening output file /home/han/.cache/huggingface/lerobot/lyhhan/so100_test/videos/chunk-000/observation.images.laptop/episode_000000.mp4. Error opening output files: Encoder not found
  ``` 

- 重要!!! 実行中にサーボのケーブルが緩んだ場合は、サーボを初期位置に戻してからサーボケーブルを再接続してください。また、[サーボ初期化コマンド](https://wiki.seeedstudio.com/ja/lerobot_so100m/#configure-the-motors)を使用して個別にサーボをキャリブレーションすることもできます。この際、個別キャリブレーション中はサーボとドライバーボードの間に1本のケーブルのみを接続してください。以下のようなエラーがロボットアームのキャリブレーションプロセス中に発生した場合、この方法は依然として有効です。
  ```bash
  Auto-correct calibration of motor 'wrist roll' by shifting value by 1 full turns, from '-270 < -312.451171875 < 270degrees' to'-270<-312.451171875 < 270 degrees'.
  ```

- 8G 3060ラップトップで50セットのACTデータをトレーニングするには約6時間かかりますが、4090またはA100コンピュータでは50セットのデータをトレーニングするのに約2〜3時間かかります。

- データ収集中は、カメラの位置、角度、環境光を安定させ、過剰に不安定な背景や歩行者を最小限に抑えるようにしてください。そうしないと、展開中に環境が大きく変化し、ロボットアームが正しく掴めなくなる可能性があります。

- データ収集コマンドの `num-episodes` パラメータは十分なデータを収集するように設定してください。途中で手動で一時停止しないでください。これは、データの平均値と分散がデータ収集完了後にのみ計算され、トレーニングに必要となるためです。

- プログラムがUSBカメラの画像データを読み取れないと表示された場合、USBカメラがハブに接続されていないことを確認してください。USBカメラはデバイスに直接接続する必要があり、高速な画像伝送速度を確保するためです。

:::tip
ソフトウェアの問題や環境依存性の問題が解決できない場合、このチュートリアルの最後にあるFAQセクションを確認するだけでなく、[LeRobotプラットフォーム](https://github.com/huggingface/lerobot)または[LeRobot Discordチャンネル](https://discord.gg/8TnwDdjFGU)に問題を報告してください。
:::

## 引用

[中文文档](https://wiki.seeedstudio.com/ja/cn/lerobot_so100m/)

TheRobotStudio プロジェクト: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface プロジェクト: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>