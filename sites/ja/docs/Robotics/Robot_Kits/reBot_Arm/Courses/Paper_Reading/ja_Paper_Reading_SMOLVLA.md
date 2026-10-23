---
description: "SmolVLA の軽量アーキテクチャ、コミュニティデータによる事前学習、非同期推論、実験結果、およびアブレーション解析を詳しく解説します。"
title: "SmolVLA — 手頃な Vision-Language-Action モデル"
hide_title: true
keywords:
  - 論文ディープダイブ
  - smolvla
  - ロボット学習
  - reBot
  - B601-DM
  - B601-RS
  - ロボットアーム
  - Physical AI
  - コース
  - チュートリアル
  - SO101
  - SO-ARM101
  - LeRobot
  - Hugging Face
  - Arm
  - ロボティクス
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/paper_reading_smolvla
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/ja/robotics/paper_reading_smolvla/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-smolvla-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · 論文ディープダイブ</span>
  <h1 id="paper-reading-smolvla-title">SmolVLA — 手頃な Vision-Language-Action モデル</h1>
  <p className="paper-reading-lead">SmolVLA: 手頃で効率的なロボットのための vision-language-action モデル</p>
  <ul className="paper-reading-badges" aria-label="In this guide">
    <li>軽量 VLA</li>
    <li>コミュニティデータ</li>
    <li>フローマッチング</li>
    <li>非同期推論</li>
  </ul>
</section>

## 前提知識
### VLM と VLA
![SmolVLA: VLMs and VLAs (Figure 09)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-09-en.png)

### 単一ステップアクションとアクションチャンク
![SmolVLA: Single-Step Actions and Action Chunks (Figure 02)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-02-en.png)

### Flow Matching とは？
![SmolVLA: What Is Flow Matching? (Figure 11)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-11-en.png)

### 同期推論と非同期推論
![SmolVLA: Synchronous and Asynchronous Inference (Figure 03)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-03-en.png)

---

## 要約
事前学習された vision-language モデルは、大規模なマルチモーダルデータセットから豊富な視覚的および言語的知識を獲得しており、ロボットポリシーの有用な基盤となります。近年の研究では、ポリシーをゼロから学習する代わりに、自然言語の指示からロボットを認識・制御できるよう VLM を VLA へと適応させています。

しかし、多くの VLA は数十億パラメータを含み、学習コストが高く、実ロボットへのデプロイが難しいという問題があります。また、主に学術・産業データセットに依存しており、低コストなロボットコミュニティから生まれる公開データが十分に活用されていません。

SmolVLA は、小型で効率的、かつコミュニティデータ駆動の VLA です。競合する性能を維持しつつ、学習と推論のコストを削減します。1 枚の GPU で学習でき、コンシューマー向け GPU やさらには CPU 上でも動作させることができます。

この論文では、知覚と行動予測を実行から分離する非同期推論スタックも導入しています。ロボットは現在のチャンクを実行しながら、次のチャンクを予測します。その小さなサイズにもかかわらず、SmolVLA はおよそ 10 倍大きい VLA と競合します。著者らはシミュレーションおよび実ロボットタスクで評価を行い、コード、事前学習モデル、学習データを公開しています。

![SmolVLA: 2. Abstract (Figure 21)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-21.png)

---

## SmolVLA の軽量アーキテクチャとネットワーク全体像
**全体的なデータフロー**

- SmolVLA は VLM とアクションエキスパートから構成されます。

```text
Multi-view RGB images
Language instruction
Robot state
      ↓
    VLM
      ↓
Scene-conditioning features
      ↓
Action Expert + Noisy Actions
      ↓
Flow Matching
      ↓
Action Chunk
```

- VLM は環境を解釈し、アクションエキスパートはその表現を連続値のアクションへと変換します。言語モデルは関節角度を直接指定するのではなく、条件付けの特徴量を提供します。

**画像・言語・状態が VLM に入るまで**

![SmolVLA: 3. SmolVLA's Lightweight Architecture and Complete Network (Figure 13)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-13-en.png)

**なぜフレームごとに 64 個のビジュアルトークンだけを保持するのか？**

- 高解像度画像は多数のビジュアルトークンを生成します。トークン数が増えるとアテンション計算が増大し、推論が遅くなります。

- SmolVLM-2 は画像タイル分割をサポートしており、複数の局所画像領域をエンコードできます。SmolVLA では速度を優先してタイル分割を無効にし、グローバル画像のみを保持しつつ、pixel shuffle を用いて各フレームを 64 個のビジュアルトークンに制限します。

- これにより小さな物体のディテールや細かなテクスチャは犠牲になる可能性がありますが、計算量は大幅に削減されます。

**なぜ VLM の前半だけを使うのか？**

- 層数 L の VLM に対して、SmolVLA は層 N で特徴量を抽出し、残りの L−N 層は破棄します。

- 著者らは、`N = L/2` が速度と性能のバランスを取ると見出しました。メインモデルでは最初の 16 層の言語モデルを使用します。

```text
Full VLM: Layer 1 → 2 → ... → L

SmolVLA：Layer 1 → 2 → ... → N → Action Expert
                               × Remaining layers are not computed
```

- これは交互の層をスキップするのではなく、前半をそのまま保持する方式です。アブレーションの結果から、バックボーンをより小さな VLM に置き換えるよりも有利であることが多いと示唆されています。保持された層が大きなモデルの幅と表現能力を維持するためです。

**アクションエキスパートがアクションを生成する仕組み**

- アクションエキスパートは次の入力を受け取ります：

    - VLM からの条件付け特徴量。

    - ノイズ付きアクションチャンク。

- これに対してクロスアテンションと因果的セルフアテンションを交互に適用します。

**クロスアテンションは現在のタスクを読み取る**

- アクショントークンは query として機能し、VLM 特徴量から key と value を読み取って次の問いに答えます：

```text
What is visible now?
What does the instruction request?
What is the robot's current configuration?
```

**セルフアテンションはアクション同士を関連付ける**

- アクショントークン間のセルフアテンションにより、将来のシーケンスが一貫したものになります。例えば「接近 → グリッパーを閉じる → 持ち上げる → 運ぶ → 置く」といった流れです。

**なぜ因果マスクを使うのか？**

- マスクにより、アクション i はそれ以前のアクショントークンには注意を向けられますが、それ以降のトークンには向けられません。

- 論文のアブレーションでは、双方向アテンションは性能が劣ることが示されています。著者らは、将来のアクションの情報漏れを防ぐことで、より適切な時間構造の学習に役立つと示唆しています。

- 最終的な構造は次のとおりです：

```text
VLM Features ───────┐
                    ↓
Noisy Actions → Cross-Attention
                    ↓
              Self-Attention
                    ↓
              Cross-Attention
                    ↓
              Self-Attention
                    ↓
               Action Chunk
```

**SmolVLA におけるフローマッチング**

![SmolVLA: 3. SmolVLA's Lightweight Architecture and Complete Network (Figure 15)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-15-en.png)

**学習と推論のワークフロー全体**

![SmolVLA: 3. SmolVLA's Lightweight Architecture and Complete Network (Figure 12)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-12-en.png)

- メインモデルは約 4 億 5,000 万パラメータを持ち、そのうちおよそ 1 億パラメータがアクションエキスパートです。学習時には VLM を凍結し、アクションエキスパートのみを学習します。

---

## コミュニティデータによる事前学習
### なぜロボットデータは「島」を形成するのか
- インターネット上のテキストや画像と異なり、ロボットのデモンストレーションには物理ハードウェアとテレオペレーションが必要です。データセットは次の点で異なる場合があります：

    - ロボット構造。

    - 制御周波数。

    - 関節の定義。

    - カメラの台数と配置。

    - タスク記述。

    - ファイル形式。

- こうした分断されたコレクションは「データアイランド」です。ファイルを単に連結しただけでは、事前学習に有用な形にはなりません。

### どれくらいのコミュニティデータを使用しているか
![SmolVLA: How Much Community Data Is Used? (Figure 08)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-08.png)

- 選定では、ロボットの種類、エピソード数、全体的な品質、フレームのカバレッジを考慮しています。

- これは、多くの大規模 VLA が使用するデータ量よりもおよそ 1 桁少ない規模です。慎重にクリーンアップされたコミュニティデータであっても、小規模なスケールで有意義な事前学習効果をもたらせることを示すのが狙いです。

### VLM を用いたタスク言語のクリーンアップ
コミュニティのタスクラベルはしばしば曖昧で、例えば次のようなものです：

```text
task desc
Hold
Up
```

人間であれば動画からタスクを推測できますが、そのようなラベルでは VLA に目標の安定した記述を与えることができません。

著者らは Qwen2.5-VL-3B-Instruct を用いて、より良い記述を生成します：

1. 代表的なデータセット画像をサンプリングする。

2. 元のタスクラベルを与える。

3. 動詞で始まる、短く完結した文を要求する。

```text
Vague original label + representative images
             ↓
     Qwen2.5-VL-3B
             ↓
Clear action-oriented instruction
```

### カメラ視点の標準化
- カメラ名はコミュニティデータセットごとに異なります。`images.laptop` は、あるデータセットでは俯瞰カメラを指し、別のデータセットでは手首カメラを指すかもしれません。

- 名前を固定の意味として扱うと、同じ入力スロットに対して毎回異なる視点が割り当てられることになり、学習を混乱させます。

- 著者らは、次の優先順位でカメラを標準的な順序に手動でマッピングします：

```text
Top → Wrist → Side
```

- そのうえで、一貫した名前にリネームします：

```text
OBS_IMAGE_1
OBS_IMAGE_2
OBS_IMAGE_3
```

- 必要数を超える余分な視点は破棄されます。

---

## 非同期推論
### 同期チャンクの問題点
- モデルに観測 `o_t` からアクションチャンクを予測させるとします：

```text
A_t = [a_t, a_t+1, ... , a_t+n]
```

- 計算効率を重視した同期システムでは、再度観測と予測を行う前に `A_t` 全体を実行します。これにより次の 2 つの問題が生じます：

    1. チャンクの実行中に新しい画像を一切使わないため、その区間がオープンループになる。

    2. チャンクを使い切ったあと、ロボットが推論を待つ時間が発生する。

### RobotClient と PolicyServer
- SmolVLA では 2 つの役割を分離します：

| Component | Responsibility |
|---|---|
| RobotClient | 画像の取得、状態の読み取り、アクションキューの管理、およびアクションの実行。 |
| PolicyServer | 観測を受け取り、SmolVLA を実行し、新しいアクションチャンクを返す。 |

- RobotClient は現在のキューが空になる前に新しいアクションを要求し、非同期に推論をトリガーします。

![SmolVLA: RobotClient and PolicyServer (Figure 20)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-20.png)

- シーケンスは次のようになります：

```text
Robot executes the old chunk
        ↓
Queue falls below the threshold
        ↓
Capture a new observation and request PolicyServer asynchronously
        ↓
Robot continues executing the old queue
        ↓
New chunk arrives
        ↓
Merge or update the action queue
```

![SmolVLA: RobotClient and PolicyServer (Figure 17)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-17.png)

### しきい値 g はいつ予測するかを制御する
- 論文では `g ∈ [0,1]` を使用しています。RobotClient は、残りのアクションの割合が `g` を下回ったときに、次のチャンクを要求します：

```text
|A_t| / n < g
```

**g = 0**

- キューが空になるまで待つため、同期推論に近づき、一時停止が発生するリスクが高くなります。

**g = 1**

- ほぼ毎制御サイクルで新しいアクションを要求し、応答性を最大化しますが、計算コストも増加します。

**0 < g < 1**

- 論文では `g = 0.7` を用いてトレードオフを示しています：古いキューの一部を消費した後、次のチャンクを早めに要求します。これにより、毎ステップでモデルを実行することなくギャップを減らせます。

![SmolVLA: Threshold g Controls When to Predict (Figure 05)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-05.png)

- 実質的に、`g` は推論時間を確保する役割を果たします。モデルが遅い場合やネットワーク遅延が大きい場合は、より早いタイミングで要求する必要があります。

### なぜ観測の重複をフィルタリングするのか？
- アームがほとんど動かない場合、連続する観測はほぼ同一になることがあります。それらをすべて送信すると計算資源を浪費し、ほぼ同一のチャンクを何度もマージしてしまう可能性があります。

- 著者らは関節空間距離を用いて観測を比較し、その距離が `ε` 未満のときは、ほぼ重複するものとしてスキップします。

- しかし、キューが空の場合は、たとえ類似していても最新の観測を処理しなければなりません。そうしないと、ロボットが無期限に停止したままになる可能性があります。

---

## 実験設定
![SmolVLA: 6. Experimental Setup (Figure 22)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-22-en.png)

![SmolVLA: 6. Experimental Setup (Figure 19)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-19.png)

学習設定

| 項目 | 設定 |
|---|---|
| 画像解像度 | 512 × 512 |
| 事前学習ステップ数 | 200K |
|グローバルバッチサイズ|256|
|オプティマイザ|AdamW|
| 学習率 | 1e-4 から 2.5e-6 まで減衰 |
|アクションチャンクサイズ|50|
|Flow Matching ステップ数|10|
| メインモデルのパラメータ数 | 450M |
| アクションエキスパートのパラメータ数 | 約 100M |
| プロジェクト全体の計算量 | 約 30K GPU 時間 |

- 事前学習では、より大きなバッチサイズを得るために 4 枚の GPU を使用していますが、モデル自体は 1 枚の GPU で学習可能であると述べられています。

---

## 結果
**シミュレーション**

![SmolVLA: 7. Results (Figure 10)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-10.png)

LIBERO において：

- 0.45B の SmolVLA は、3.3B の π0 や 7B の OpenVLA よりも平均成功率が高くなっています。2.25B へスケールアップすると性能はさらに向上しますが、0.45B からの改善幅は小さくなります。

- Meta-World では、0.45B モデルの平均成功率は 57.3、2.25B では 68.24 です。性能はモデルサイズだけで決まるわけではなく、アーキテクチャ、データ、学習目的も重要です。

**SO100 実機ロボットでの結果**

- π0 は最も簡単なピック＆プレースタスクで 100 に到達しますが、SmolVLA は積み上げや仕分けで大幅に優れた性能を示し、全体平均でも最良の結果を達成します。

- SmolVLA のパラメータ数は π0 のおよそ 7 分の 1 です。

**SO101 への転移結果**

![SmolVLA: 7. Results (Figure 00)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-00.png)

- コミュニティ事前学習では主に SO100 のデータを使用し、SO101 のデータは含まれていません。SO101 のタスクでファインチューニングした後も、SmolVLA は ACT を上回り、別のプラットフォームへの適応能力を示しています。

**コミュニティ事前学習の貢献**

![SmolVLA: 7. Results (Figure 04)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-04.png)

- シングルタスク学習からマルチタスク学習へ移行すると、平均成功率は 40.0 から 51.7 に上昇します。

- コミュニティ事前学習を追加すると、78.3 まで上昇します。

- 重要な結論として、単にパラメータ数を増やすよりも、事前学習データの方が重要になり得ることが示されています。

**同期推論と非同期推論**

| 推論方式 | ピック＆プレース | 積み上げ | 仕分け | 平均 |
|---|---|---|---|---|
|同期|75|90|70|78\.3|
|非同期|80|90|50|73\.3|

- 非同期化はすべてのタスクを改善するわけではありません：仕分けでは 70 から 50 に低下しています。非同期が常により高精度だと表現すべきではありません。

- 主な利点は速度とスループットです：

```text
Average completion time: 13.75 seconds → 9.70 seconds
Tasks completed in a fixed time: 9 → 19
```

![SmolVLA: 7. Results (Figure 18)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-18.png)

- 平均成功率が同程度であっても、非同期推論はピック＆プレースを約 30% 高速に完了し、一定時間内に完了するタスク数を 2 倍以上に増やします。

---

## アブレーション
### クロスアテンションとセルフアテンション
| アテンション | LIBERO 平均成功率 |
|---|---|
|クロスアテンション|79\.0|
|セルフアテンション|74\.5|
| **CA と SA の交互適用** | **85.5** |

- VLM 特徴だけを読む、あるいはアクション間の関係だけをモデル化するのでは不十分です。両者を交互に用いるのが最も良く機能し、タスク条件付けと時間的一貫性という補完的な役割を裏付けています。

### 因果アテンションと双方向アテンション
| マスク | LIBERO 平均成功率 |
|---|---|
|双方向|67\.5|
|**因果**|**74\.5**|

- アクショントークンが将来のアクションを見ることを防ぐと、この実験では性能が向上し、明示的な時間方向が有用であることが示唆されます。

### Flow Matching と直接回帰
![SmolVLA: Flow Matching and Direct Regression (Figure 06)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-06.png)

- Flow Matching の主な利点は長いホライズンタスクで現れ、成功率は 38 から 53 に増加します。

- これは、生成的な目的関数の方が、複雑で多峰性なアクション分布をより良くモデル化できるという著者らの見解を支持しています。

### 状態はどこに入力すべきか？
著者らは次を比較しています：

- サフィックス：状態を直接アクションエキスパートに入力する。

- プレフィックス：状態をまず VLM に入力する。

クロスアテンションありの場合、プレフィックスは平均成功率 80.3 に達し、サフィックスは 73.3 にとどまります。そのため最終モデルでは、画像と言語と並んで状態も VLM に入力します。

![SmolVLA: Where Should State Enter? (Figure 16)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-16.png)

純粋なセルフアテンション変種では同じ傾向は見られません。ここから支持される結論は、プレフィックス状態が、選択された VLM 条件付き設計においてより良く機能するということであり、あらゆるアテンションアーキテクチャに対して普遍的に優れているという意味ではありません。

### アクションチャンクはどれくらいの長さにすべきか？
![SmolVLA: How Long Should an Action Chunk Be? (Figure 14)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-14.png)

- 非常に短いチャンクではシーケンス構造を十分に活用できません。非常に長いチャンクは予測が難しくなり、過度に長いオープンループ実行を助長する可能性があります。

- 論文では、長ければ長いほど常に良いとみなすのではなく、10〜50 が有用なバランスであるとしています。

### 50 ステップを予測しても 50 ステップ実行するとは限らない
![SmolVLA: Predicting 50 Steps Does Not Mean Executing 50 (Figure 01)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-01.png)

- モデルは 50 ステップを予測しつつ、そのうち 10 ステップだけを実行して再度観測することができ、シーケンスの一貫性と環境からのフィードバックを両立させます。

- 観測する前に 50 ステップすべてを実行すると、平均成功率は 51.8 にとどまります。

- これは非同期推論を動機付けるものです：ロボットをモデル待ちさせることなく頻繁に観測します。

---

## 制約事項
- **具現化の多様性が限られている。** コミュニティ事前学習は主に SO100 に基づいています。SO101 への転移はファインチューニングによって示されていますが、広範なクロスエンボディメント事前学習ではありません。

- **データ規模が限られている。** SmolVLA は約 23,000 軌道を使用していますが、OpenVLA などのモデルは最大で 100 万近くを利用できます。より大規模なコミュニティデータスケールでの効率性は、今後の検証が必要です。

- **バックボーンの適合性は未解決。** SmolVLM-2 の事前学習の多くは文書や OCR に関するものです。空間的関係、アフォーダンス、物理的インタラクションに対して最適かどうかは、まだ明らかではありません。

- **実タスクは比較的短い。** ピック、プレース、スタック、ソートは、本当に長いホライズンの振る舞いを十分にカバーしておらず、階層型ポリシーや多段階プランニングが必要になる可能性があります。

- **主に模倣学習。** 性能は依然としてデモンストレーションのカバレッジに制約されます。著者らは、長いホライズンタスクや巧みなマニピュレーションを改善するために、強化学習との併用を提案しています。

---

## まとめ
![SmolVLA: 10. Summary (Figure 07)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/smolvla/image-07-en.png)

</div>
