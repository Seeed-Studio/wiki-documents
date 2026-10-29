---
description: "SO-ARM Physical AI ビギナーコース第 6 章 — 部品を 3D プリントし、サーボバスを配線・給電し、lerobot-setup-motors でサーボ ID とボーレートを書き込み、その後 SO-ARM のリーダーとフォロワーを順を追って組み立てます。"
title: 第 6 章 - モーター設定とアームの組み立て
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - 組み立て
  - サーボ
  - キャリブレーション
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_6
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_6/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 2 · 第 6 章 · 実践</span>
    <h2>6. モーター設定とアームの組み立て</h2>
    <p>
      部品を 3D プリントし、サーボバスを配線・給電し、lerobot-setup-motors でサーボ ID とボーレートを 1 個ずつ書き込み、その後 SO-ARM のリーダーとフォロワーを順を追って組み立てます。
    </p>
    <div className="hero-actions">
      <a href="#printing">3D プリント</a>
      <a href="#configure">モーター設定</a>
      <a href="#assembly">組み立て</a>
    </div>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>安全警告：動作プログラムを実行する前にロボットアームの作業領域を片付ける</strong>
    <p>
      アームを動かしうるプログラムを実行する前に、作業領域 1 メートル以内の貴重品・壊れやすい物・工具・ケーブル・無関係な物を片付けてください。デバッグと運転中は、アームの可動範囲から人が離れるようにします。
    </p>
    <ul>
      <li>アーム通電後は、関節・モーター・リンク・グリッパ・末端ツールに触れないでください。</li>
      <li>サーボ設定・キャリブレーション・テレオペレーション・データ録画・再生・ポリシー評価の前に、アームが確実に固定されていることを確認します。</li>
      <li>最低 1 メートルの安全距離を保ち、近くの人がアームが突然動く可能性を理解していることを確認します。</li>
      <li>異常動作・異音・振動・ケーブル緩み・電源接触不良・通信途絶が起きたら、すぐにプログラムを停止し、電源を切ってから点検します。</li>
      <li>サーボケーブル・USB ケーブル・電源コネクタ・制御ボードケーブルの抜き差しは必ず電源オフで行います。</li>
    </ul>
  </div>
</div>

:::tip
組み立て済みのロボットアームを購入した場合は本章をスキップし、第 10 章（アーム全体のキャリブレーション）に直接進んでください。
:::

## 6.1 3D プリントガイド（キット版）

<section id="printing" className="section-card">
  <div className="section-title">
    <span>3D プリント</span>
    <h2>6.1 3D プリントガイド（キット版）</h2>
  </div>

プリント部品なしのキット版（サーボとハードウェアのみ）を買った場合は、まず構造をプリントします。STL ファイルは通常の FDM プリンタで出力できます：

- **材料**：PLA+
- **ノズル / 積層**：0.4mm ノズル + 0.2mm 積層、または 0.6mm ノズル + 0.4mm 積層
- **充填率**：15%
- **サポート**：全面。水平面から 45° を超える斜面は無視。水平方向のネジ穴にはサポートを入れない

リーダー／フォロワーの全パーツは 1 つの STL にまとめられており、サポート最小化のために z 軸上向きに配置済みです：

- 220mm × 220mm ベッド（例：Ender）：[フォロワー](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl) · [リーダー](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)
- 205mm × 250mm ベッド（例：Prusa / Up）：[フォロワー](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl) · [リーダー](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

:::caution
公式の SO101 更新に伴い、SO100 のソースファイルは上流で管理されなくなりましたが、当社の [Makerworld](https://makerworld.com/zh/models/908660) で引き続き入手できます。購入済みの SO100 ユーザーにはチュートリアルと手順がそのまま有効です — SO101 のプリントは SO100 モーターキットの取り付けと完全互換です。
:::

**オプション**：柔らかい・壊れやすい・不整形な物体用にソフトグリッパ（TPU フィンガー + PLA 部品）、カメラ搭載用にカメラブラケットインサートをプリントできます。ファイルは [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git) リポジトリにあります。

</section>

## 6.2 モーターの計画：ラベル、ID、減速比

<section id="plan-motors" className="section-card">
  <div className="section-title">
    <span>準備</span>
    <h2>6.2 モーターの計画：ラベル、ID、減速比</h2>
  </div>

リーダー用にバスサーボアダプタ 1 つとモーター 6 個、フォロワー用にもう 1 つのアダプタと 6 個を用意します。各モーターに **F1〜F6**（フォロワー関節 1〜6）または **L1〜L6**（リーダー関節 1〜6）とラベルを貼ってください — サーボ本体に書いておくだけで、後のデバッグ時間が大幅に短縮されます。

| サーボ型番 | 減速比 | 対応関節 |
| :--- | :--- | :--- |
| ST-3215-C044（7.4V） | 1:191 | L1 |
| ST-3215-C001（7.4V） | 1:345 | L2 |
| ST-3215-C044（7.4V） | 1:191 | L3 |
| ST-3215-C046（7.4V） | 1:147 | L4〜L6 |
| ST-3215-C001（7.4V）/ C018（12V）/ C047（12V） | 1:345 | F1〜F6 |

:::danger
モーターの種類に合った電源をバスに接続してください：7.4V 版 STS3215 には 5V、12V 版には 12V。リーダーは常に 7.4V モーターです — 12V と 7.4V のモーターを両方持っている場合は、挿す前に必ずアダプタを確認しましょう。間違えるとモーターが焼ける恐れがあります！USB ケーブルは給電されません：電源と USB の両方の挿入が必要です。
:::

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="全モーターをバスに接続" />
</div>

:::tip
SO-ARM101 のサーボ設定・初期化手順は方法・コードとも SO-ARM100 と同じです — ただし SO-ARM101 リーダーの最初の 3 関節の減速比が SO-ARM100 と異なるため、注意して区別・設定してください。
:::

</section>

## 6.3 USB ポートの確認

<section id="find-ports" className="section-card">
  <div className="section-title">
    <span>ポート</span>
    <h2>6.3 USB ポートの確認</h2>
  </div>

ユーティリティスクリプトを実行して、各アームの制御ボードが占有するシリアルポートを探します：

```bash
lerobot-find-port
```

出力例：

```text
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.
```

時間を節約するコツ：

- 求められたら実際に USB を抜くこと。抜かないとインターフェースを検出できません。
- Linux・Jetson では最初に挿したデバイスが `ttyACM0`（通常フォロワー）、2 番目が `ttyACM1`（リーダー）に割り当てられます。
- LeRobot が後で `Could not connect on port '/dev/ttyACM0'` を報告したら、権限を付与して再確認：

```bash
sudo chmod 666 /dev/ttyACM*
```

</section>

## 6.4 サーボ ID とボーレートの設定

<section id="configure" className="section-card">
  <div className="section-title">
    <span>設定</span>
    <h2>6.4 サーボ ID とボーレートの設定</h2>
  </div>

設定ツールは正しい ID とボーレートを**1 個ずつ**サーボに書き込みます（理由は第 4 章：全サーボがバスを共有し、重複 ID はまとめて書き換わるため）。

キャリブレーション前の各関節の標準的な配線姿勢は以下の参考画像を参照してください：

**リーダーサーボのキャリブレーション参考画像**

| **関節 6** | **関節 5** | **関節 4** | **関節 3** | **関節 2** | **関節 1** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

**フォロワーサーボのキャリブレーション参考画像**

| **関節 6** | **関節 5** | **関節 4** | **関節 3** | **関節 2** | **関節 1** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

**フォロワーアームのサーボを設定。** USB ケーブルと電源をフォロワーの制御ボードに接続して実行：

```bash
lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- 前のステップで見つけたポートをここに貼る
```

ツールが関節ごとに案内します：

```text
Connect the controller board to the 'gripper' motor only and press enter.
```

グリッパモーター（F6）だけを制御ボードに挿し、**Enter** を押すと、スクリプトが ID とボーレートを自動設定します：

```text
'gripper' motor id set to 6
```

続いて：

```text
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

直前の 3 ピンケーブルはグリッパモーター側に残して構いません。手首回転モーターに新しい 3 ピンケーブルをつなぎ、その 1 個だけをボードに接続します。指示に従って各モーターで繰り返します — 常に 1 個だけ接続します。

:::tip
Enter を押す前に毎回配線を確認 — 特に電源ケーブルは基板を扱っているうちに緩みやすいです。
:::

スクリプトが終了したら、モーターを順にデイジーチェーンします：各モーターの 3 ピンケーブルを次のモーターへ、最初のモーター（肩旋回、ID 1）のケーブルを制御ボードへ。制御ボードはこの時点でアームのベースに取り付けられます。

**リーダーアームのサーボ設定**も同様に：

```bash
lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0  # <- 前のステップで見つけたポートをここに貼る
```

:::tip
SO100 ユーザーへ：SO100 と SO101 のコードは互換です — 同じ `so101_leader` / `so101_follower` タイプとパラメータを使ってください。
:::

</section>

## 6.5 組み立て

<section id="assembly" className="section-card">
  <div className="section-title">
    <span>組み立て</span>
    <h2>6.5 組み立て</h2>
  </div>

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

:::tip
SO-ARM101 の双腕組み立ては SO-ARM100 と同じ — 違いは SO-ARM101 のケーブルクリップの追加と、リーダー関節サーボの減速比のみです。SO100 も SO101 も以下の手順で組み立てられます。組み立て前に、モーター型番・減速比・電源電圧を 6.2 節の表と再度照合してください。
:::

**リーダーアームの組み立て**

| **ステップ 1** | **ステップ 2** | **ステップ 3** | **ステップ 4** | **ステップ 5** | **ステップ 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **ステップ 7** | **ステップ 8** | **ステップ 9** | **ステップ 10** | **ステップ 11** | **ステップ 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **ステップ 13** | **ステップ 14** | **ステップ 15** | **ステップ 16** | **ステップ 17** | **ステップ 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **ステップ 19** | **ステップ 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**フォロワーアームの組み立て**

:::tip
フォロワーの組み立てはリーダーとほぼ同じです。唯一の違いは、ステップ 12 以降のエンドエフェクタ（グリッパとハンドル）の取り付け方です。
:::

| **ステップ 1** | **ステップ 2** | **ステップ 3** | **ステップ 4** | **ステップ 5** | **ステップ 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **ステップ 7** | **ステップ 8** | **ステップ 9** | **ステップ 10** | **ステップ 11** | **ステップ 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **ステップ 13** | **ステップ 14** | **ステップ 15** | **ステップ 16** | **ステップ 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

</section>

## 6.6 次に進む前のチェックリスト

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>チェックリスト</span>
    <h2>6.6 次に進む前のチェックリスト</h2>
  </div>

- 両アーム組み立て済み。全サーボが期待どおりの ID で応答する（第 7 章のツールで確認）；
- 電源電圧がエディションのルールに一致（スタンダード：両方 5V。Pro：リーダー 5V、フォロワー 12V）；
- 両制御ボードが `/dev/ttyACM0` と `/dev/ttyACM1` として認識される；
- ケーブルが確実に挿さっており、鋭く折れておらず、関節の可動範囲に入っていない。

サーボが未検出・ID が重複疑い・ニュートラルがおかしい場合は、次章のサーボデバッグツールがまさにその問題を解決します。

</section>

</div>
