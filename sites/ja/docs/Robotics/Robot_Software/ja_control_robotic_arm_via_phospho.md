---
description: --
title: Phosphoを使い始める
keywords:
- NVIDIA Jetson
- Phospho
- Robotic Arm
- SOARM100
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/lerobot/so_arm_100.webp
slug: /ja/control_robotic_arm_via_phospho
last_update:
  date: 7/1/2025
  author: Youjiang
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## はじめに

Phosphoは、MLエンジニアが実際のロボットをインテリジェントにするためのプラットフォームです。私たちは、開発者が数ヶ月ではなく数分でデータを収集し、AIモデルを訓練し、実際のロボットにアプリケーションをデプロイできるよう、ハードウェア、ライブラリ、リモートコントロール機能を提供しています。

このwikiでは、phosphoを使用したSO Arm 100ロボットアームのモーション制御をデモンストレーションします。

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/phospho_1.png" />
</div>

## 前提条件

- SO Arm 100/101
- Mac/Windows/Linux OSを搭載したコンピュータ

:::note
すぐに使用できるロボットアームを[phospho](https://robots.phospho.ai/starter-pack)から購入するか、組み立てキットを[SeeedStudio](https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html)から入手できます。
:::

## はじめに

### ロボットアームの準備

1. Seeedstudioからロボットアームキットを購入した場合は、[このリンク](https://wiki.seeedstudio.com/ja/lerobot_so100m/#assembly)を参照してロボットアームを組み立てる必要があります。
2. [Phospho](https://robots.phospho.ai/)から購入した場合は、すぐに使用できるデバイスを受け取るため、組み立てプロセスを完全にスキップできます。

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/lerobot/so_arm_100.jpg" />
</div>

組み立てが完了したら、USBデータケーブルを使用してロボットアームをコンピュータに接続してください。

### Phosphoのインストール

<div style={{ textAlign: 'justify' }}>

phosphoソフトウェアのインストールは非常にユーザーフレンドリーで、複雑な環境設定を必要とせず、ダウンロード時間もほとんどかかりません。コンピュータのオペレーティングシステムに基づいて適切なインストールコマンドを選択するだけです。

</div>

<Tabs>
<TabItem value="MacOS" label="MacOS">

```bash
curl -fsSL https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.sh | bash
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
curl -fsSL https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.sh | sudo bash
```

</TabItem>
<TabItem value="Windows" label="Windows">

```bash
powershell -ExecutionPolicy ByPass -Command "irm https://raw.githubusercontent.com/phospho-app/phosphobot/main/install.ps1 | iex"
```

</TabItem>
</Tabs>

次に、サーバーを起動します：

```bash
phosphobot run
```

:::info
サーバーの起動には最大15秒かかる場合があります。
:::

サービスが完全に起動したら、ブラウザで http://0.0.0.0:8020/ にアクセスしてUIインターフェースを利用できます。
<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/webui.png" />
</div>

### ロボットアームの接続

WebUIが起動すると、自動的にロボットアームを発見して認識します。認識に失敗した場合は、手動で接続を開始することができます。

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/connection.png" />
</div>

ロボットアームを操作する前に、2回目のキャリブレーションを実行する必要があります。キャリブレーション手順については、以下のビデオチュートリアルを参照してください。

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/calibration.png" />
</div>

<div class="video-container">
  <iframe width="900" height="540" src="https://www.youtube.com/embed/65DW8yLcRmM" title="How to calibrate the SO-100 or SO-101 robot arm? Step by step guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::info
Lerobot SO Arm 100/101は通常、2つのキャリブレーション段階が必要です：

1. 組み立て時：各サーボモーターのゼロ位置初期化を実行する必要があります。
2. ソフトウェア操作時：組み立て誤差を補償するために再キャリブレーションが必要です。

:::

### Phosphoによるロボットアームのコントロール

Lerobotリポジトリとは異なり、PhosphoはLeaderによるテレオペレーションをサポートするだけでなく、複数の制御方法も提供します：キーボード/マウス制御、手動ドラッグアンドドロップ制御、VRベースの制御。この設計により、データ収集方法論が大幅に豊富になります。

<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/reComputer-Jetson/phospho/control.png" />
</div>

`Control Robot` --> `Keyboard control` --> `Start Moving Robot`

すべてが順調に進んだ場合、コンピューターのキーボードを使用してロボットアームの動きを制御できるようになります。

:::note
ロボットアームのリモートコントロール以外にも、phosphoには探索を待つ多くの他のエキサイティングな機能があります！今すぐ試してみてください！
:::

## 効果デモンストレーション

ここではVRベースのロボットアーム制御を実験します。VRにphospho teleopアプリをインストールした後、システムはローカルネットワーク経由でロボットアームを発見できます。ビデオで実演されているように、VRインターフェースは驚くほどスムーズなロボットアームの動きのリモート操作を可能にします。

<div class="video-container">
<iframe width="900" height="540" src="https://www.youtube.com/embed/dvkHfyivQjI" title="AI-Powered Control of the Robotic Arm via Phospho" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考文献

- [https://phospho.ai/](https://phospho.ai/)
- [https://docs.phospho.ai/welcome](https://docs.phospho.ai/welcome)
- [https://github.com/phospho-app/phosphobot](https://github.com/phospho-app/phosphobot)
- [https://wiki.seeedstudio.com/lerobot_so100m](https://wiki.seeedstudio.com/ja/lerobot_so100m/)

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
