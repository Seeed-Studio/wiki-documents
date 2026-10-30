---
description: "ハンズオンでの再現に備えるために、コンピュータとreBot Armのハードウェアチェックリスト、LeRobot環境のインストール、カメラとCANの設定、リーダー・フォロワー型テレオペレーションの練習を行います。"
title: "reBot Arm のハードウェアとテレオペレーションをセットアップする方法"
hide_title: true
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - SO101
  - LeRobot
  - テレオペレーション
  - 論文ディープダイブ
  - ロボットアーム
  - フィジカル AI
  - コース
  - チュートリアル
  - SO-ARM101
  - Hugging Face
  - アーム
  - ロボティクス
  - ハンズオンデプロイ
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_hardware_and_teleoperation
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-16'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/ja/robotics/paper_reading_hardware_and_teleoperation/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-hardware-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · ハンズオンデプロイ</span>
  <h1 id="paper-reading-hardware-title">reBot Arm のハードウェアとテレオペレーションをセットアップする方法</h1>
  <p className="paper-reading-lead">ハードウェアとソフトウェアを準備し、リーダー・フォロワー型テレオペレーションを構築して、データ収集、モデル学習、論文再現の準備を整えます。</p>
  <ul className="paper-reading-badges" aria-label="このガイドで扱う内容">
    <li>ハードウェアチェックリスト</li>
    <li>環境セットアップ</li>
    <li>リーダー・フォロワー設定</li>
    <li>テレオペレーションの練習</li>
  </ul>
</section>

## ハードウェア構成

### コンピュータ：いずれかのプラットフォームを選択

利用可能な機材に基づいて、次のいずれかの計算プラットフォームを選択してください。

| 必要なハードウェア | リンク | 数量 | 備考 |
| --- | --- | :---: | --- |
| デスクトップまたはノートPC | 自前で用意 | 1 | ネイティブUbuntu 22.04、少なくとも12 GBのVRAMを持つRTX 4080以上のGPU、16 GB以上のシステムメモリ。 |
| NVIDIA Jetson AGX Thor 128G | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/NVIDIAr-Jetson-AGX-Thortm-Developer-Kit-Bundle.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/i/m/image__5.png" alt="NVIDIA Jetson AGX Thor Developer Kit Bundle" loading="lazy" width="128" height="104" /><span>NVIDIA Jetson AGX Thor Developer Kit Bundle</span></a> | 1 | デスクトップ／ノートPCの代替オプション。 |

### reBot Arm ハードウェア

| 必要なハードウェア | リンク | 数量 | 備考 |
| --- | --- | :---: | --- |
| reBot Arm B601 DM / RS | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/i/m/img_v3_0210p_aea42523-221d-4fb4-8730-9cb074a081ag_2.jpg" alt="reBot Arm B601-DM Assembled Bundle" loading="lazy" width="128" height="104" /><span>B601-DM 組立済みバンドル</span></a><br /><a className="paper-reading-product-link" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/e/2/e26062401-gallery-2.jpg" alt="reBot Arm B601-RS Assembled Bundle" loading="lazy" width="128" height="104" /><span>B601-RS 組立済みバンドル</span></a> | 1 | フォロワーアームとしてDMまたはRSを選択します。バンドルオプションから、対応する電源アダプタとテーブルクランプを選択してください。 |
| reBot Arm 102 リーダーアーム | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Star-Arm-102-p-6765.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/7/-/7-100004723-star-arm-102.jpg" alt="Star Arm 102 for reBot B601-DM&amp;RS Leader Arm" loading="lazy" width="128" height="104" /><span>Star Arm 102 リーダーアーム</span></a><br /><a className="paper-reading-product-link" href="https://www.seeedstudio.com/AC-DC-Power-Adapter-DC5521-Male-12V-2A-1500mm-p-6839.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-313000002-ac-dc-power-adapter.jpg" alt="AC/DC Power Adapter 12V 2A 5-in-1" loading="lazy" width="128" height="104" /><span>12 V / 2 A 電源アダプタ</span></a> | 1 | リーダー・フォロワー型テレオペレーションに使用します。アームと電源アダプタは別の商品ページです。 |
| RGB USB Camera-100°-720P（手首視点） | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Camera-Module-OV9732-1MP-100-USB2-0-USB2-0-L38-W38-H16-05mm-p-6982.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100079619-gallery_img_1_1.png" alt="RGB USB Camera-100°-720P" loading="lazy" width="128" height="104" /><span>RGB USB Camera-100°-720P</span></a> | 1 | ロボットの手首に取り付けます。 |
| RGB USB Camera-100°-720P（固定視点） | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Camera-Module-OV9732-1MP-100-USB2-0-USB2-0-L38-W38-H16-05mm-p-6982.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100079619-gallery_img_1_1.png" alt="RGB USB Camera-100°-720P" loading="lazy" width="128" height="104" /><span>RGB USB Camera-100°-720P</span></a> | 1 | 固定された外部視点を提供します。手首視点と同じカメラモデルを使用します。 |
| 手首カメラマウント | [マウントモデルと手順](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/camera-mounts/README.md) | 1 | 自分で3Dプリントしてください。プリンタがない場合は、無償マウントの提供可否についてカスタマーサポートにお問い合わせください。 |
| 第三者視点カメラマウント | <a className="paper-reading-product-link" href="https://www.seeedstudio.com/Robot-Arm-Camera-Mount-for-LeRobot-SO-10%26reBot-B601-p-7003.html"><img className="paper-reading-product-image" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/0/100006505-gallery_img_1.jpg" alt="Robot Arm Camera Mount for LeRobot SO-101 &amp; reBot B601" loading="lazy" width="128" height="104" /><span>Robot Arm Camera Mount for LeRobot SO-101 &amp; reBot B601</span></a> | 1 | 外部カメラの位置と角度を固定します。 |

<div className="paper-reading-callout">

**購入と組み立て**

- 購入コストを抑えるために、キットを選択し、Seeedの詳細な組立手順に従うことができます：[DM 組立](/ja/rebot_b601_dm_getting_started/#step-1-assembly-guide) または [RS 組立](/ja/rebot_b601_rs_getting_started/#assembly-guide)。
- Seeedが出荷する電源は難燃性素材を使用しており、その分コストが高くなります。代わりに、正規のMean Well製電源を購入し、選択したアームの要件を満たすように設定しても構いません。

</div>

### Seeed 実験サンドボックス（任意）

実験サンドボックスは必須ではありません。共有データセットや他のユーザーが学習したモデルを使って、実験を学習・再現することもできます。

<figure className="paper-reading-figure">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/platform_preparation/seeed-sandbox.jpg" alt="Seeed experiment sandbox with a reBot Arm" loading="lazy" />
  <figcaption>Seeed 実験サンドボックス（任意）</figcaption>
</figure>

---

## ソフトウェア環境

### LeRobot をインストール

仮想マシンやWSLではなく、**ネイティブのUbuntu 22.04** を使用してください。使用するアームモデルに対応したインストールガイドに従ってください。

| アームモデル | インストールガイド |
| --- | --- |
| SO-ARM 101 | [SO-ARM 101 用の LeRobot をインストール](/ja/lerobot_so100m_new/#install-lerobot) |
| reBot Arm DM | [reBot-DM 用の LeRobot をインストール](/ja/rebot_arm_b601_dm_lerobot/#install-lerobot) |
| reBot Arm RS | [reBot-RS 用の LeRobot をインストール](/ja/rebot_arm_b601_rs_lerobot/#install-lerobot) |

### カメラとCANの設定

アーム用の通信とカメラを設定します。SO-ARM 101はシリアル接続を使用し、reBot DM / RSは各ガイドで説明されているようにCANを使用します。

| アームモデル | 通信設定 | カメラ設定 |
| --- | --- | --- |
| SO-ARM 101 | [シリアル接続、キャリブレーション、テレオペレーション](/ja/lerobot_so100m_new/#teleoperation) | [カメラを追加](/ja/lerobot_so100m_new/#add-cameras) |
| reBot Arm DM | [ソフトウェアセットアップとキャリブレーション](/ja/rebot_b601_dm_getting_started/#software-setup-and-calibration-workflow) | [カメラを追加](/ja/rebot_arm_b601_dm_lerobot/#add-cameras) |
| reBot Arm RS | [ソフトウェアセットアップとキャリブレーション](/ja/rebot_b601_rs_getting_started/#software-setup-and-calibration-workflow) | [カメラを追加](/ja/rebot_arm_b601_rs_lerobot/#add-cameras) |

---

## リーダー・フォロワー設定

### フォロワーとリーダー

- **リーダー**：人が操作し、その関節位置がテレオペレーションの入力となります。
- **フォロワー**：マッピングされた制御コマンドを受け取り、リーダーの動きに追従します。

テレオペレーションを開始する前に、両方のアームをキャリブレーションしてください。関節の向き、可動範囲、グリッパの開閉を確認します。

関連リソース：[フォロワーとリーダー（元のFeishuドキュメント）](https://seeedstudio.feishu.cn/sync/CLA2dJJTcss5xPbBjwicny8nn8g) · [リーダー・フォロワーのキャリブレーションとテレオペレーションに関するWikiガイド](/ja/robotics/rebot_physical_ai_course_chapter_11/)。

### 制御周波数とレイテンシ

フォロワーがあなたの手の動きにどれだけ正確に追従するかは、2つの要素に依存します：1秒あたりに転送ループが何回実行されるか（**周波数**）、そしてあなたの動きからアームの応答までの遅れ（**レイテンシ**）です。

#### レイテンシはどこから生じ、なぜ避けられないのか？

リーダーの関節位置の読み取り、マッピング、CANコマンドの送信、フォロワーの動作実行、その状態の読み取りには、それぞれ時間がかかります。下図は、この一連の処理における遅延要因を示しています。

<figure className="paper-reading-figure">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/platform_preparation/teleoperation-latency.png" alt="reBot leader–follower teleoperation pipeline and its sources of latency" loading="lazy" />
  <figcaption>リーダー・フォロワー型テレオペレーションにおけるレイテンシの要因</figcaption>
</figure>

#### 制御周波数とは何か？変更できるのか？

このセクションでは、reBotガイドの **60 Hz** テレオペレーション構成を例に説明します。これは「リーダー読み取り → マッピング → CAN送信 → 状態読み取り」を1秒あたり60回行い、1サイクルあたり約 **16.7 ms** の時間予算を持つ構成です。`fps` パラメータをテレオペレーション設定で変更することで調整できます。

- **ハードウェアループが上限を決めます。** このハードウェアでは、1サイクルにすでに10ミリ秒以上かかっており、実用的な上限はおおよそ60〜100 Hzです。より高い値を設定しても実際のレートが上がらない場合があり、サイクル超過の警告を引き起こすことがあります。自分のハードウェアと構成で結果を計測してください。
- **ここで扱う手動演習には60 Hzで十分です。** 把持、搬送、配置といったタスクでは、単にレートを上げることよりも、一貫したサンプリングと実行の方が重要です。

---

## ハンズオン演習：把持、搬送、配置

安定した遠隔操作でアームは動かせますが、タスクを確実にこなすには意図的な練習が必要です。後のデモンストレーションの質は、あなたの操作スキルにかかっています。次の2つのレベルを順番に行ってください。

### 演習 1：軽い物体を動かして操作感をつかむ

作業空間に軽量のブロックをいくつか置き、次の練習を行います：

**ターゲットの上に移動 → 降ろす → グリッパーを閉じる → 持ち上げる**

**目標**：衝突や物体の落下なしで、連続10回成功させること。各シーケンスをためらわず、滑らかに実行します。

### 演習 2：搬送・配置タスクを完了する

次の一連の動作を実行します：

**把持 → 搬送 → 指定された容器に配置**

**目標**：開始姿勢と終了姿勢を大まかに揃えた状態で、連続10回成功させること。

</div>
