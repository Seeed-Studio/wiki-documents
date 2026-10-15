---
description: デバイス検査から実行可能なプロトタイプ作成とデモ用パッケージ化まで、Jetson アプリケーション提供を加速する、スキル駆動かつ再現可能なワークフローを学びます。
title: NVIDIA Skills を使った Jetson 上での高速プロトタイピング
keywords:
  - Jetson
  - NVIDIA Skills
  - Claude Code
  - Agentic AI
  - Rapid Prototyping
  - reComputer
  - Edge AI
  - AI Agent
image: https://files.seeedstudio.com/wiki/nv_skills/banner.png
slug: /rapid_prototyping_on_jetson_with_nvidia_skills_bk
last_update:
  date: 07/10/2026
  author: zibo
createdAt: '2026-07-09'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/rapid_prototyping_on_jetson_with_nvidia_skills_bk/
---

# NVIDIA Skills を使った Jetson 上での高速プロトタイピング

:::note JetPack 7.2 collection copy
このコピーは、エージェントスキルが JetPack 7.2 開発者エコシステムの一部であるため含まれています。スキルを実行する前に、対象デバイスが JetPack 7.2 / L4T 39.2 を報告していることを確認し、ライブデバイスに対して提案されるすべてのパッケージや最適化内容を確認してください。
:::

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/banner.png" style={{width:1000, height:'auto'}} />
</div>

## はじめに

Jetson プロジェクトが行き詰まる原因は、開発者がモデルコードを書けないからではほとんどありません。たいていは、デプロイ周りの「つなぎ」の作業、つまりデバイス状態の確認、JetPack 互換性の確認、実用的なインストールパスの選定、最初の実行可能なパイプラインの構築、出力の検証、そして結果をデモ可能な形にパッケージングする、といったより前の段階で止まります。実際のプロジェクトでは、最初の数日はしばしばそこで消えてしまいます。

ここで役立つのが **エージェント + スキル ワークフロー** です。Jetson に特化したスキルは、デバイス診断、メモリ検査、環境準備、モデルインポートなど、限定されたクラスのタスクに対して、AI コーディングエージェントに構造化された手順を与えます。何もないシェルから始めて散在するドキュメントからワークフローを再構成する代わりに、Jetson を理解したデリバリーパスからスタートできます。

この手法は、特定のエージェントフレームワークに結び付いているわけではありません。再利用可能なスキルを読み込み、ファイルを検査し、コマンドを実行し、リモートデバイスと対話できるあらゆるエージェントが、同じパターンの恩恵を受けられます。この Wiki では、ワークフロー全体を分かりやすくデモできるという理由から、例として **Claude Code** を使用します。

この記事は意図的に、単発のデモログではなく、**デリバリー手法** として書かれています。車両速度検出の例を用いますが、本当の目的は、さまざまな Jetson アプリケーションや異なるエージェント構成にまたがって再利用できる、再現性のあるパスを示すことです。

:::note
この記事でいう「Skills」とは、**NVIDIA が作成し、このワークフローで使用するコーディングエージェントに読み込まれる再利用可能なエージェントスキル** を指します。これは、Seeed の **Jetson DevelopTool「Skills」モジュール**（別の GUI 自動化機能）とは異なります。その GUI モジュールを探している場合は、[DevelopTool Skills モジュール](/ja/jetson_developtool_skills/) の記事を参照してください。
:::

## NVIDIA Skills とは

**スキル** とは、AI コーディングエージェントがオンデマンドで読み込む、手順と参考資料の再利用可能なバンドルです。スキルを呼び出すと、エージェントはタスク固有のガイダンス、つまり何を調査するか、どの規約に従うか、どのツールを使うか、どの出力を検証するか、といった情報を受け取ります。Claude Code では、`/<skill-name>` という名前でスキルを明示的に指定するのは、その挙動をトリガーする方法の 1 つにすぎません。いったんスキルがワークスペースにインストールされると、エージェントはそれらの中から自動的に選択することもできます。

Jetson 開発者に特に関係する NVIDIA スキルリポジトリが 2 つあります：

- Jetson 開発者向けのワークフローに特化した **[NVIDIA/jetson-skills](https://github.com/NVIDIA/jetson-skills)** 

この記事では、これらのスキルを使って、繰り返し発生するブリングアップ作業を減らし、「デバイスが利用可能」から「プロトタイプが検証済み」までの道のりを短縮します。

## Jetson のデリバリーが遅くなる理由

Jetson アプリケーションの最初のバージョンでは、ハードウェアステータス、JetPack とランタイムの互換性、ARM 上でのパッケージインストールの選択、モデルの配置、起動コマンド、出力パス、そして最低限の性能検証を調整する必要があります。問題は、どのステップも不可能というわけではないことです。問題は、これらのステップがさまざまなツール、ドキュメント、場当たり的なシェル作業に分散しているため、本来より長くデリバリーパスがあいまいなままになってしまうことです。

スキル駆動ワークフローの実用的な価値は、これを次のように変える点にあります：

| 従来のパス | スキル駆動のパス |
| --- | --- |
| 行動する前に複数のドキュメントを読む | タスクにフォーカスしたスキルから始める |
| デバイス状態を手作業で確認する | エージェントに Jetson を診断させる |
| 依存関係パスを勘で決める | エージェントに Jetson を理解したインストールパスを使わせる |
| 最初の試作プロトタイプを手作業で構築する | エージェントに最小限の実行可能バージョンをスキャフォールドさせる |
| 成果物をチームメイトに手作業で説明する | エージェントにファイル、コマンド、出力を要約させる |
| クイックデモ用インターフェースをゼロから作る | エージェントにプロトタイプを共有用にラップさせる |

## スキルが得意なこと

Jetson の作業において、タスクがまだ不確実性の削減に関する段階であれば、スキルは最も力を発揮します。具体的には、現在のデバイスを検査すること、より Jetson に適したセットアップパスを選ぶこと、モデルやテストアセットの周りに最初の実行可能なプロトタイプを生成すること、作成されたものを説明すること、そして結果を再実行やデモに使える形にパッケージングすることです。一方で、スキルは本番エンジニアリングの代替としてはあまり有用ではありません。スキルはブリングアップと検証を加速できますが、最高の性能、本番レベルの信頼性、利用シーンに対するキャリブレーション済みの精度、あるいはスケールと保守性のために最終的に選ぶアーキテクチャを保証するものではありません。この境界は重要です。というのも、このワークフローの目的は、信頼できるベースラインにより早く到達し、その後は意図的に堅牢化していくことだからです。

## Jetson デリバリーワークフロー 5 ステップ

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/jetson_delivery_workflow.png" style={{width:1000, height:'auto'}} />
</div>


## 各ステップで使うべきスキル

すべてのプロジェクトにすべてのスキルが必要なわけではありません。よりよい考え方は、特定のブロッカーが現れたときに、適切なスキルを使うことです。

### まずは `jetson-diagnostic` から始める

Jetson がデプロイ準備できているかどうか、まだ分からない場合に最初に使います。実際には、エージェントに十分なライブデバイスコンテキストを与え、ワークフローの残りを通常ブロックする質問、すなわちどの Jetson モデルが動作しているか、どの JetPack/L4T バージョンがインストールされているか、どれだけのメモリが空いているか、デバイスが熱的に制約されているかどうか、主要なサービスやハードウェアエンドポイントが見えているかどうか、といった点に答えられるようにします。

プロンプト例：
```text
/jetson-diagnostic Check whether this Jetson is ready for a real-time vision prototype and summarize any blockers.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/jetson-diagnostic.PNG" style={{width:900, height:'auto'}} />
</div>

### セットアップの指示が一般的すぎる、または安全でなくなってきたら `jetson-package` を使う

Jetson では、x86 Linux や一般的な AI チュートリアルからコピーしたパッケージインストール手順は、しばしば失敗します。`jetson-package` は、特に PyTorch や OpenCV などの依存関係について、ホストパッケージ、wheel、コンテナのどれを選ぶかを決める際に、エージェントに Jetson を理解したソースとデプロイパスを優先させたいときに使用します。

```text
/jetson-package Recommend the correct Jetson-compatible dependency path for this vision project.
```

### メモリが最初のボトルネックになっているときは `jetson-memory-audit` を使う

これは、モデルのロードが遅い、プロセスが kill される、推論負荷の下でデバイスが不安定に感じられる、といった場合に有用です。現在 DRAM を何が使用しているか、以前のプロセスが本当にメモリを解放したかどうか、設定変更がもっともらしく聞こえるだけでなく測定可能な差を生んだかどうかについて、エージェントにデータに基づく見方を与えます。

```text
/jetson-memory-audit Measure the current memory pressure and identify the biggest consumers before I deploy this prototype.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/memory-opt.PNG" style={{width:900, height:'auto'}} />
</div>

### デバイスがアプライアンスとして動作しているときは `jetson-headless-mode` を使う

Jetson がデスクトップマシンではなく専用のエッジノードとして使われている場合、ヘッドレスモードに切り替えることで、推論ワークロード向けのリソースを取り戻すことができます。

```text
/jetson-headless-mode Compare memory usage before and after enabling headless mode for this deployment target.
```

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/headless-mode.PNG" style={{width:900, height:'auto'}} />
</div>

### 最初の実行可能バージョンを生成するには、タスク固有のビルドスキルを使う

デバイスと環境が把握できたら、次の目標は完璧さではありません。目標は、出力を検査可能な状態で **最小限の有用なプロトタイプ** に到達することです。

以下の例では、ビルドステップとして `deepstream-import-vision-model` を使用します。

## プロトタイプの受け入れ基準

最適化をさらに進める前に、何をもってプロトタイプが成功と見なせるかを定義します。最初の Jetson プロトタイプは、明確なコマンドで再実行でき、入力と出力のパスが明示され、結果をすぐに確認でき、現在のリソース状況がもはや謎でなくなっていれば、たいてい十分です。主なボトルネックが見えていて、次のエンジニアリングステップが自明であれば、そのプロトタイプはすでに役目を果たしています。最初のパスの目的は製品を完成させることではありません。不確実性を十分に早く減らし、次の反復を当て推量ではなく意図的なものにすることが目的です。

## 前提条件

以下の例のワークフローに従う前に、次のものを準備してください：

- 電源が入りネットワーク経由で到達可能な **reComputer Jetson** またはその他の Jetson デバイス
- Jetson 上で動作する **JetPack** 環境
- ワークフローを駆動するホストマシンにインストールされた **AI コーディングエージェント**
- ホストマシンから Jetson への **SSH アクセス**
- Jetson 上に、モデルのダウンロード、一時ファイル、出力用として十分なストレージ
- Jetson 上にあらかじめ配置された、ビデオクリップなどの **テストアセット**

この例では、テスト用ビデオ `top_view.mp4` が Jetson 上の `/home/seeed/workspace/traffic_monitor/` に配置されているものとします。

:::note
ホストマシンはコーディングエージェントを実行し、通常は SSH 経由で Jetson 上の作業をスキルを使って駆動します。実際には、エージェントが選択した実装パスに応じて、Python、DeepStream、コンテナサポートなど、追加の依存関係が必要になる場合があります。
:::

## Skills ワークスペースのセットアップ

この記事で使用する Claude Code の例では、スキルはプロジェクトルートの `.claude/` ディレクトリ内に配置されます。

```bash
mkdir -p project/.claude/
cd project/
git clone https://github.com/NVIDIA/skills.git
cp -r skills/skills .claude/
claude
```

`claude` コマンドが起動したら、`/<skill-name>` と入力して、エージェントに特定のスキルを明示的に読ませることができます。これは、どのワークフローを使いたいかすでに分かっている場合に便利です。しかし一度スキルがワークスペースにインストールされると、エージェントはそれらの存在を把握しており、あなたのリクエストから自動的に選択できます。実際には、診断、パッケージ選定、メモリ検査、プロトタイプ生成などを別々のセッションとして扱うのではなく、1 回のパスで複数のスキルを連鎖させて組み合わせることがあります。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/skills_list.PNG" style={{width:800, height:'auto'}} />
</div>

## ケーススタディ：ワークフローにマッピングした車両速度検出

次の例は、5 ステップのワークフローが実際にはどのように見えるかを示しています。例としては車両速度検出を扱いますが、本当に重要なのは成果物の提供パターンです。

### ステップ 1. デバイスを診断する

まず、Jetson が実際にビジョン系ワークロードの準備ができているかどうかを確認します。次のようなプロンプトを与えることで、エージェントはデバイスを調査し、生のテレメトリをただ垂れ流すのではなく、プロトタイプにとって重要なブロッカーを報告できるだけのコンテキストを得られます。

```text
/jetson-diagnostic Check the current status of my Jetson and summarize any blockers for a vision prototype.
SSH login: seeed@192.168.6.204
Password: seeed
```
:::note
上記の IP アドレスとパスワードは例示値です。自分の Jetson の認証情報に置き換えてください。`seeed` は一部の Seeed 製 Jetson デバイスでのデフォルトパスワードであり、本番機では変更する必要があります。
:::

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/check_device.PNG" style={{width:800, height:'auto'}} />
</div>

### ステップ 2. 環境を準備する

診断ステップで、プロトタイプを動かすには環境が十分クリーンでないことが分かった場合は、むやみに先へ進むのではなく、このタイミングで準備を行います。`jetson-package` は、エージェントが Jetson 互換の依存関係パスを選択するのに役立ち、`jetson-memory-audit` と `jetson-headless-mode` は、メモリプレッシャーや不要なデスクトップのオーバーヘッドが最初の障害になる場合に有用です。

```text
/jetson-package Recommend the correct dependency path for this Jetson vision prototype.
```

```text
/jetson-memory-audit Measure memory usage before I deploy the model and identify the top consumers.
```

```text
/jetson-headless-mode Compare whether this device should be switched to headless mode for better inference headroom.
```

実務的な利点としては、前段の診断で本当に必要だと分かったときにだけ、セットアップ作業に時間を費やせるという点があります。

### ステップ 3. 最小限の実行可能プロトタイプを構築する

ここからは、環境の準備完了からアプリケーションの立ち上げへと移行します。

```text
/deepstream-import-vision-model Help me access the following directory on Jetson: /home/seeed/workspace/traffic_monitor
Deploy a vehicle speed detection system under this directory. Use the top_view.mp4 file in this directory for testing.
```

以下は、このウォークスルーで使用しているサンプルの俯瞰交通動画です：

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/top_view.png" style={{width:1000, height:'auto'}} />
</div>

エージェントは、デバイス上に何が存在するかによって、異なる実装パスを選択する場合があります。この段階で重要なのは、最終的な本番スタックを選んだかどうかではありません。重要なのは、検査可能な結果を伴う、実行可能な最初のパスを生成することです。

このステップの終わりまでに、メインの推論スクリプトまたはアプリのエントリポイント、明確な再実行パス、注釈付きの出力動画などの成果物、そして生成されたファイルが既知のワークスペースに配置されている状態を目指します。これらの要素が揃っていれば、最終的なスタックがまだ変更の余地を残していたとしても、そのベースラインはすでに有用です。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/quick_deploy.PNG" style={{width:800, height:'auto'}} />
</div>

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/output_video.png" style={{width:1000, height:'auto'}} />
</div>

ここからワークフローの効果が現れ始めます。最初のパスでスクリプトやパスを手作業で配線する代わりに、実行可能なベースラインを評価し、どこにより深いエンジニアリング投資を行うべきかを判断できるようになります。

### ステップ 4. 出力を検証しアーキテクチャを確認する

最初のパスができたら、エージェントに対して、何を作成したのか、そしてそれをどう再実行するのかを説明するよう依頼します。

```text
Please explain the generated files, the rerun command, the output locations, the current bottlenecks, and the technical approach and architecture you are using.
```

この時点で有用な問いは、「何か動いたか？」ではなく、「具体的に何が作られたのか、どうやって再実行するのか、出力はどこにあるのか、そしてエージェントはアーキテクチャ的に何を選択したのか？」というものです。良いフォローアップの説明があれば、ファイルレイアウト、再実行パス、出力場所、検出と速度推定のアプローチ、および想定される性能ボトルネックについて、明確な見通しを得られるはずです。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/explain1.png" style={{width:800, height:'auto'}} />
</div>

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/explain6.png" style={{width:800, height:'auto'}} />
</div>

ここでは、エージェントが単にコードを生成しているだけではないため、時間を節約できます。エージェントが生成したばかりのベースラインを理解し評価するために必要な時間も短縮しているのです。

### ステップ 5. プロトタイプを共有可能な形にパッケージングする

アルゴリズムがコマンドラインから動作するようになったら、次に生じるギャップはたいてい「デモしやすさ」です。

```text
Help me create a web UI that I can access from my local PC to upload videos for detection and continuously loop the output video.
```

エージェントは、プロトタイプを小さな Web サービスや類似のインターフェースでラップし、チームメイトや顧客がコマンドラインに触れることなく試せるようにできます。

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/web_ui_deploy.png" style={{width:1000, height:'auto'}} />
</div>

:::note
ローカル PC から UI にアクセスするには、選択したポートが Jetson 上でアクセス可能であり、両方のマシンが同じネットワーク上にあることを確認するか、SSH ポートフォワーディングを使用してください。推論速度を評価する際は、転送された Web UI はネットワークレイテンシによって遅く感じられる可能性があるため、モデル性能だけでなく、Jetson 側のローカルランタイムを基準として判断してください。
:::

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/nv_skills/out_ui.gif" style={{width:1000, height:'auto'}} />
</div>

これは、このワークフローが実務で有用であるもう一つの理由です。同じプロセスで、プロトタイプを作成するだけでなく、バックエンドの概念実証からデモ可能なパッケージングまでのギャップも埋めることができます。

## よくある失敗パターンと次に取るべき行動

このワークフローは、適切なタイミングで適切な不確実性を減らすために使うときに最も有用です。

| 問題 | 通常は何を意味するか | 取るべき行動 |
| --- | --- | --- |
| インストールパスが汎用的に見える、または ARM で壊れる | Jetson 互換性が無視されている | `jetson-package` を使用する |
| モデルのロードに失敗する、または推論が不安定 | メモリプレッシャーが最初のボトルネックになっている | `jetson-memory-audit` を使用する |
| デバイスがデスクトップサービスにメモリを使い過ぎている | Jetson をアプライアンスとして扱った方がよい | `jetson-headless-mode` を使用する |
| プロトタイプは動くが遅すぎる | ベースラインは妥当だが、まだ最適化されていない | エージェントにボトルネックの特定と DeepStream または TensorRT の推奨を依頼する |
| デモがターミナル上でしか動かない | エンジニアリングのベースラインはあるが共有可能ではない | エージェントに Web UI またはサービスラッパーとしてパッケージングするよう依頼する |

## プロトタイプから本番へ

このワークフローが最も力を発揮するのは、探索、立ち上げ、検証のフェーズです。ベースラインが検証されたら、次のステップは通常、手動でのハードニングになります。

典型的な本番移行の動きはおなじみのものです。プロトタイプのロジックを、より構造化された DeepStream パイプラインに置き換えること、スループット向上のためにモデルを TensorRT に変換すること、トラッキングの堅牢性とキャリブレーション品質を改善すること、アドホックなスクリプトを保守可能なサービスやアプリケーションに変えること、そして実システムに必要な監視とデプロイの規律を追加することなどです。重要なポイントはシンプルです：**スキルを使って信頼できるベースラインまでの道のりを圧縮し、その後は意図的にハードニングすること。**

## 再利用可能なプロンプトテンプレート

次のプロンプトシーケンスは、新しい Jetson プロジェクト向けの良い出発点となるテンプレートです：

```text
1. Diagnose this Jetson and list any blockers for running a vision prototype.
2. Recommend the correct Jetson-compatible dependency path.
3. Build the smallest runnable prototype in /path/to/workspace using /path/to/test-asset.
4. Explain the generated files, rerun command, and expected outputs.
5. Measure the current bottleneck and recommend whether to stay in Python or move to DeepStream/TensorRT next.
6. Package the prototype into a simple demo interface if the baseline is validated.
```

このテンプレートは、物体検出、映像解析、ロボティクスの認識、その他の Jetson 側アプリケーション立ち上げ作業向けに調整して使うことができます。

## まとめ

ここでの主なポイントは、特定のエージェントが特定の車両速度検出デモを構築できる、ということではありません。より有用なポイントは、**スキルを構造化されたワークフローとして扱うことで、Jetson アプリケーションのデリバリーが大幅に高速化される**ということです。まずデバイスを診断し、必要なところだけ準備し、最小限の実行可能プロトタイプを生成し、出力とボトルネックを検証し、その結果を共有可能な形にパッケージングする——これが再現性のあるパターンです。車両速度の例は、その一つのインスタンスに過ぎません。

## 参考文献

- [NVIDIA/skills (GitHub)](https://github.com/NVIDIA/skills) — NVIDIA による汎用エージェントスキル
- [NVIDIA-AI-IOT/jetson-device-skills (GitHub)](https://github.com/NVIDIA-AI-IOT/jetson-device-skills) — Jetson 向けスキル
- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code) — Claude Code のインストールと使用方法
- [Traffic Management DeepStream SDK](/ja/Traffic-Management-DeepStream-SDK/) — より手動寄りの DeepStream 指向パス
- [Deploy YOLOv8 with TensorRT and DeepStream SDK](/ja/YOLOv8-DeepStream-TRT-Jetson/) — より手動寄りのモデルデプロイパス
- [DevelopTool Skills module](/ja/jetson_developtool_skills/) — Seeed DevelopTool の "Skills" 自動化モジュール

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
