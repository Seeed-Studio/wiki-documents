---
description: このガイドでは、reBot Arm B601-DM の購入オプション、組み立て、キャリブレーション、ソフトウェア設定を含めた入門方法を説明します。
title: reBot Arm B601-DM クイックスタート
keywords:
  - reBot
  - B601-DM
  - ロボットアーム
  - ロボット
  - Lerobot
  - Pinocchio
  - 6 DOF
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_b601_dm_getting_started
translation:
  skip: [zh-CN]
last_update:
  date: 2026-07-28
  author: LiuJunjie
createdAt: '2026-04-13'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/ja/rebot_b601_dm_getting_started/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# reBot Arm B601-DM をはじめよう

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6 自由度ロボットアーム · マルチモーター対応 · 運動学ソルバ · 軌道計画 · 完全オープンソース</strong>
</p>

<p align="center">
  reBot Arm プロジェクトは [GitHub](https://github.com/Seeed-Projects/reBot-DevArm) 上でオープンソース公開されています。ぜひリポジトリを訪れて Star を付けてください！ リポジトリには完全な BOM が含まれています。本ガイドでは、B601-DM の組み立てから操作までの入門手順を説明します。
</p>

:::tip
完成品キットを購入された場合は、本記事の最後にある **ステップ 3** のチュートリアル動画に直接進み、動画に沿って操作してください。モーター ID の書き込みやゼロ位置のキャリブレーションを行う必要はありません。

仮想マシンではデモを実行するための性能が不足しており、設定上の問題も確認されています。ロボットアームの制御には Ubuntu の物理マシンを使用することを推奨します。

推奨 Bilibili インストールチュートリアル：[Ubuntu デュアルブートインストールチュートリアル](https://www.bilibili.com/video/BV1Cc41127B9/)
:::




## 安全に関する免責事項およびリスク通知

<div className="rebot-disclaimer-gallery">
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" alt="reBot Arm の中国語版安全免責事項およびリスク通知" />
  </figure>
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" alt="reBot Arm の英語版安全免責事項およびリスク通知" />
  </figure>
</div>

## 電源について

1. ロボットアームには電源は同梱されておらず、標準では電源は含まれていません。ご自身でバッテリーを接続するか、当社のオープンソース [24V 14.6A MeanWell 電源](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html) または [Amazon](https://www.amazon.com/MEAN-WELL-LRS-350-24-350-4W-Switchable/dp/B013ETVO12/ref=sr_1_1?crid=36B2HIB8MM2IT&dib=eyJ2IjoiMSJ9.vpZwmjb4m5KMNcsg2Kb7wr8DDWa-ryUqO5fConlxqlsGoTVB5HN2uBBnRNZI0kcACiaR5DKFiYWvIHLEUN3luZqJAzogeQkeT-fol0m835-oBBWSud1ixkGayrl5nRsF5KMgfvkwAIW949dTTpU2CWdNMrf8g43_vKWaytfX9SHeMJ1hmhS6Kab6fBgER6CgB47K_eEmoJj3KhrjJMtn980osDG-bCLniBcRAHThmXsVRVdpGPsmckGLLyaXrIGRG9plhKI-F7H8hfqW7vzGbwIV_bF8cFtRjdRm5Shtb0o.ekLYD0hsc1Uzji4qKl0Q0USpDTr92JEMQobBXl9lYD0&dib_tag=se&keywords=LRS-350-24&qid=1780021690&s=industrial&sprefix=lrs-350-24%2Cindustrial%2C696&sr=1-1&th=1) から購入してください。無名メーカーや安全でないルートから電源を購入しないでください。その結果生じるいかなるリスクや損害も、個人の自己責任となります。

2. ご家庭の電圧が 220V の場合は、電源側面の電圧切替スイッチを 230V に設定してください。ご家庭の電圧が 110V の場合は、115V に切り替えてください。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>220V</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="電源の電圧切替スイッチが 230V に設定されている様子" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>110V</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="電源の電圧切替スイッチが 115V に設定されている様子" />
  </figure>
  <figure className="rebot-power-gallery-item rebot-power-gallery-item--wide">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100029903-gallery-6_1.jpg" alt="reBot Arm B601-DM 用 MeanWell 電源アダプタ" />
  </figure>
</div>

### 電源の組み立て

または、当社のオープンソース 24V 14.6A MeanWell 電源ケースを選択し、自分で組み立てることもできます。テキストによる説明と BOM は [GitHub リポジトリ](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_DM) でオープンソース公開されています（関連する電源組み立て経験を持つ開発者にのみ推奨）。

組み立て参考動画：

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/DHFA2UfQzUo?si=GYy-Z38qTUW6KPqq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>



## ステップ 1: [組み立てガイド](https://youtu.be/rfTQoFCfnMc)

組み立て前：

- スムーズに組み立てを行うため、以下の説明をよくお読みください。
  1. このキットには、外観がよく似たさまざまなネジや部品が含まれています。締め付ける前に、仕様と向きを必ず確認してください。
  2. 動画は 4 月上旬に撮影されたものです。細かな更新がある場合がありますが、組み立て方法は同じです。最終的には、出荷された部品を基準としてください。
  3. 出荷されるネジにはねじロック剤が塗布されています。適切な工具、または電動ドライバー（推奨）を使用してください。トルクは (3–6 kgf·cm) に設定し、なめないようにしてください。もしなめてしまった場合は、すぐに作業を中止し、ネジを交換するか位置を調整してください。ねじロック剤付きでなめたネジは外しにくく、部品を損傷するおそれがあります。
  4. 組み立て作業中の安全に注意してください。指を挟んだりケガをしないようにしてください。子どもが作業する場合は必ず保護者が付き添ってください。

  :::tip
  注意：組み立て動画内でモーター 5 とモーター 6 の間に取り付けている D4 * 7 は、実際には取り付け不要です。これは動画内の誤りです。reBot Arm B601-DM の DIY 版を購入された場合、付属の 7 本の D4 * 7 ネジで組み立ては十分に完了します。
  :::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

配線チュートリアル動画：

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/vVxCOfu5ZCE" title="reBot-B601-DM Wiring" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## ステップ 2: モーター ID のリセット

:::tip
ロボットアームを組み立てる際は、モーター 1 とモーター 2 の間のケーブルハーネスを接続し忘れないようにしてください。正確な位置は下図でハイライトされています。3 ピンケーブルの接続を切り替える前に、現在のモーターが無効化されており、電源が切れていることを必ず確認してください。ホットプラグや誤った操作は、モーターのパラメータ異常を引き起こすおそれがあります。

<div align="center">
    <img width={200}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1to2_ID_set.jpg" />
</div>
:::

### AI AGENT

:::tip
このセクションはベータ版です。使用時は安全上の注意を守ってください。AI の提案内容が本ドキュメントと異なる場合は、本ガイドを優先し、必要に応じて当社エンジニアにお問い合わせください。
:::

AI AGENT にこのプロセスをサポートさせましょう。以下のプロンプトをコピーして、お使いの AI アシスタントに入力してください：

```text

Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-RS-Skills/blob/main/en/AGENTS.md) to help me initialize the robotic arm.

```

### モーター ID リセット前の準備

  モーターのパラメータ設定を行う前に、次の準備事項と安全ルールを確認してください：

- 工作用クランプ 2 個（3 インチ以上）と、24V 15A XT30 出力のスイッチング電源を購入すること（正規ブランド品を使用し、粗悪品は使用しないでください）。
- デバッグ／動作中は 1m 以上の距離を保ってください。
- モーターのホットプラグは禁止です。XT30 2+2 インターフェースの抜き差しは、必ず電源を切ってから行ってください。
- 過負荷／過速度での動作は行わないでください。起動前に配線と締結部を確認し、湿気の多い／高温／粉じんの多い環境は避けてください。
- 暴走を防ぐため、プログラムパラメータと非常停止を適切に設定してください。
- **これらのルールを厳守してください。違反操作や個人的なミスに起因するリスクや責任について、販売者は一切の責任を負いません。**

### 準備リスト

#### ハードウェア

- [reBot Arm B601 DM ロボットアーム × 1](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)
- [USB-CAN アダプタボード × 1](https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html)
- [信号・電源分離ボード × 1](https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html)
- 木工用クランプ × 2
- USB-C ケーブル × 1
- [24V 15A 電源（XT30 出力）× 1](https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html)
- [電源コード-US](https://www.seeedstudio.com/reServer-AC-US-p-5052.html) \  [電源コード-EU](https://www.seeedstudio.com/reServer-AC-EU-p-5051.html)

#### コンピュータ要件

- デュアルブート構成のパーソナルコンピュータ（Windows + Ubuntu / macOS）

#### ソフトウェア

- [ソフトウェアダウンロードリンク](https://github.com/dmBots/motor-debugging-tool)


#### モーター ID の書き込みと有効化テスト

各関節モーターの CAN ID と Master ID を、以下の表のパラメータに従って設定します：

| モーター番号 | モーターモデル | CAN ID | Master ID |
|:---:|:---:|:---:|:---:|
| Motor 1 | J4340P | 0x01 | 0x11 |
| Motor 2 | J4340P | 0x02 | 0x12 |
| Motor 3 | J4340P | 0x03 | 0x13 |
| Motor 4 | J4310 | 0x04 | 0x14 |
| Motor 5 | J4310 | 0x05 | 0x15 |
| Motor 6 | J4310 | 0x06 | 0x16 |
| Motor 7 | J4310 | 0x07 | 0x17 |

:::danger
以下は Motor 1 を使用した操作例です。各関節モーターの CAN ID と Master ID が、上記の表に従って正しく設定されていることを必ず確認してください。
:::
1. **DM_Tools** ホストソフトウェアを開き、対応する USB COM ポートを選択し、ボーレートを `921600` に設定します。接続に成功すると、`Serial` インターフェースに情報が表示されます。

<div align="center">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_damiao_tool_en.png" width="800" />
</div>

2. 3 ピンケーブルを使用して、Motor 1 を USB-CAN アダプタボードに接続します。

3. 接続後、`Parameter Settings` インターフェースに入ります。`Read Parameters` をクリックして現在のパラメータを読み出し、その後 `CAN ID` を `0x01`、`Master ID` を `0x11` に設定します。

4. 設定後、`Write Parameters` をクリックしてパラメータを保存します。

<div align="center">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_damiao_tool_en.png" width="800" />
</div>

:::tip
左側のオレンジ色の枠内にある USB モードは、現在の設定ページでモーターパラメータの読み書きに使用されている方法を表します。
:::

5. `Debug` インターフェースに移動します。`CAN ID` と `Master ID` が正しく設定されていることを確認したら、`Enable` をクリックします。モーターのインジケーターランプが緑色の点灯に変わり、モーターが有効になったことを示します。これで Motor 1 のテストは完了です。

<div align="center">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_damiao_tool_en.png" width="800" />
</div>

:::tip
テスト後は、必ず `Disable` をクリックして有効状態を解除してください。
:::

**各モーターの 3 ピンケーブル接続位置と有効化時の状態**

| Motor 1 セットアップ | Motor 2 セットアップ | Motor 3 セットアップ | Motor 4 セットアップ | Motor 5 セットアップ | Motor 6 セットアップ | Motor 7 セットアップ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_ID_set.jpg" width="120" /> |

| Motor 1 有効 | Motor 2 有効 | Motor 3 有効 | Motor 4 有効 | Motor 5 有効 | Motor 6 有効 | Motor 7 有効 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_Enable2.jpg" width="120" /> |

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## ステップ 3: MotorBridge を使用してアームをキャリブレーションし、初回動作を完了する

ここまでの動画に従って、ロボットアームの組み立て、ゼロ点初期化、モーター ID 設定などの手順を完了していることを前提としています。これで、公開している一連のチュートリアルやツールを本格的に活用する準備が整いました。

:::tip
1. まずは **MotorBridge** プラットフォームをお試しください。これは、[Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow など、拡大し続けるモーター群をサポートするオールインワンソリューションです。また、reBot など継続的にアップデートされるロボットアームにも対応しています。初心者向けに設計されている一方で、開発者向けには同等の機能を実装した Python SDK も提供しています。

2. reBot ロボットアーム向け MotorBridge の新機能や詳細を体験してください。ワンクリックでのゼロ点設定、パラメータ書き込み、UI のドラッグ＆ドロップによるモーター制御、組み込みのモデル可視化インターフェースなどを備えています。

3. このツールは **Windows、Ubuntu、macOS** の各オペレーティングシステムに完全対応しています。
:::

ロボットアームを制御する前に、もう一度ゼロ点をリセットする必要があります。動画およびテキストチュートリアルを参照してください。

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### ソフトウェアセットアップとキャリブレーションのワークフロー

以下の手順に従って Miniforge をインストールし、reBot 開発用の独立した Python 環境を作成します。

<div className="rebot-step-flow">
<section className="rebot-step-item">
    <span className="rebot-step-number">1</span>
<div className="rebot-step-content">
      <h4>Miniforge をインストールする</h4>
      <p className="rebot-step-label">ステップ 1</p>

お使いのオペレーティングシステムに対応した Miniforge をダウンロードしてインストールします：

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu\Jetson\Raspberry Pi">

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

インストール中は、<kbd>Enter</kbd> を押して続行し、利用規約に同意するために `yes` を入力し、Conda を初期化するかどうか尋ねられたら `yes` を入力します。

ターミナルを再起動し、`conda --version` でインストールを確認します。

:::tip `conda` が見つからない場合
Miniforge を読み込み、Bash を初期化します：

```bash
source ~/miniforge3/etc/profile.d/conda.sh
conda init bash
```
:::

</TabItem>
<TabItem value="macOS" label="macOS">

```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

インストール中は、<kbd>Enter</kbd> を押して続行し、利用規約に同意するために `yes` を入力し、Conda を初期化するかどうか尋ねられたら `yes` を入力します。

ターミナルを再起動し、`conda --version` でインストールを確認します。

:::tip `conda` が見つからない場合
Miniforge を読み込み、現在の macOS バージョンでデフォルトシェルとなっている Zsh を初期化します：

```bash
source ~/miniforge3/etc/profile.d/conda.sh
conda init zsh
```
:::

</TabItem>
<TabItem value="windows" label="Windows">

[Miniforge Releases ページ](https://github.com/conda-forge/miniforge/releases)を開き、最新の `Miniforge3-Windows-x86_64.exe` を探してダウンロードします。

:::tip 端末用に Conda を初期化する
**Git Bash ユーザー:** `conda` が見つからない場合は、まず Conda を読み込みます：

```bash
# Temporary: replace <install_path> with the actual path
source <install_path>/etc/profile.d/conda.sh

# Permanent: add it to bashrc once
echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
source ~/.bashrc
```

PowerShell の場合は、次のコマンドで Conda を初期化します：

```bash
conda init powershell
```
:::

</TabItem>
</Tabs>

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">2</span>
<div className="rebot-step-content">
      <h4>環境セットアップ</h4>
      <p className="rebot-step-label">ステップ 2</p>

Python 3.12 を使用して仮想環境を作成します：

```
conda create -y -n rebot python=3.12
```

次に仮想環境を有効化します。reBot を使用するためには、シェルを開くたびにこの操作を行う必要があります：

```bash
conda activate rebot
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">3</span>
<div className="rebot-step-content">
      <h4>Motorbridge をインストールする</h4>
      <p className="rebot-step-label">ステップ 3</p>

:::tip

**macOS ユーザーへの注意:**
macOS でテレオペレーション中にフレームレートが低下する場合、古い WCH CH34x ドライバーが原因の可能性があります。**macOS 10.14 以降**では、システムに `AppleUSBCHC0M` という組み込みドライバーが含まれています。古いドライバーをアンインストールして macOS の組み込みドライバーに切り替えることで、フレームレートが効果的に改善されるはずです。

:::

reBot の仮想環境を有効化した後、次のコマンドを実行して motorbridge をインストールします：

```bash
pip install motorbridge
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">4</span>
<div className="rebot-step-content">
      <h4>reBot アームを接続する</h4>
      <p className="rebot-step-label">ステップ 4</p>

USB ケーブルでロボットアームをコンピュータに接続し、電源を入れた後、シリアルポートに対して 666 のアクセス権限を設定する必要があります。（Windows システムでは権限設定は不要なため、このステップはスキップできます。）

```bash
sudo chmod 666 /dev/ttyACM*
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">5</span>
<div className="rebot-step-content">
      <h4>MotorBridge を起動する</h4>
      <p className="rebot-step-label">ステップ 5</p>

ブラウザで [motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/) のアドレスを開き、Help オプションをクリックし、使用しているオペレーティングシステムとドライバボードに応じたコマンドをコピーし、IP アドレスとポート番号を確認してから、ターミナルで Enter キーを押して実行します。

例えば Windows の場合：

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" />
  </div>

</div>
</section>
</div>

## FAQ
### 1. モーター起動直後に大きな異常音が発生する
- この問題は通常、ID 設定中に誤ってパラメータキャリブレーションがトリガーされ、モーター慣性などの工場出荷時のプリセットパラメータが上書きされてしまった場合に発生します。以下から入手できる **DM_Tools_v.1.8.0.1.exe（Windows 専用）** を使用してください：
https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe
ホストソフトウェアを使用して、同一モデルの正常なモーターから完全なパラメータをエクスポートし、それらのパラメータを不具合のあるユニットにインポートし、対応する CAN ID を更新して、書き込んだパラメータを保存してから、ゼロ点キャリブレーションを実行します。

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/csbd_en.png" />
</div>

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/fix_param_en.png" />
</div>

[DM4310 デフォルトパラメータ](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4310_Default_Parameters.txt)
[DM4340P デフォルトパラメータ](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4340P_Default_Parameters.txt)

### 2. すべてのモーターの CAN ID が同一になってしまった
- **DM_Tools_v.1.8.0.1.exe（Windows 専用）** でゼロ点キャリブレーションを行う際は、CAN ID フィールド横の Read または Set ボタンをクリックしないでください。デバッグインターフェースは CAN バス経由で通信しており、Set をクリックすると CANBUS に接続されているすべてのモーターの CAN ID が同一に設定されてしまいます。
